import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import type { LegalQuestion } from '../src/types';
import { rebalanceQuestionOptions } from './questionRebalancer';

const TARGET_DIRS = [
  path.resolve(process.cwd(), 'src/data/questions'),
  path.resolve(process.cwd(), 'src/data/questions/extra'),
];

function getStaticQuestionFiles(): string[] {
  const files: string[] = [];
  for (const dir of TARGET_DIRS) {
    for (const entry of fs.readdirSync(dir)) {
      if (entry.endsWith('.ts')) {
        files.push(path.join(dir, entry));
      }
    }
  }
  return files.sort();
}

interface TextEdit {
  start: number;
  end: number;
  replacement: string;
}

function skipWhitespaceAndComments(src: string, idx: number): number {
  const n = src.length;
  while (idx < n) {
    const ch = src[idx];
    if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
      idx++;
      continue;
    }
    if (ch === '/' && src[idx + 1] === '/') {
      idx += 2;
      while (idx < n && src[idx] !== '\n') idx++;
      continue;
    }
    if (ch === '/' && src[idx + 1] === '*') {
      idx += 2;
      while (idx < n && !(src[idx] === '*' && src[idx + 1] === '/')) idx++;
      idx += 2;
      continue;
    }
    break;
  }
  return idx;
}

function scanStringLiteralEnd(src: string, startQuoteIdx: number): { end: number; quote: string } {
  const quote = src[startQuoteIdx];
  let i = startQuoteIdx + 1;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '\\') {
      i += 2;
      continue;
    }
    if (ch === quote) {
      return { end: i + 1, quote };
    }
    i++;
  }
  throw new Error(`String literal não fechada na posição ${startQuoteIdx}`);
}

function formatAsLiteral(value: string, quote: string): string {
  if (quote === '`') {
    const escaped = value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    return `\`${escaped}\``;
  }
  if (quote === '"') {
    const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, '\\n');
    return `"${escaped}"`;
  }
  const escaped = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n');
  return `'${escaped}'`;
}

function findQuestionOptionTextRanges(
  src: string,
  questionId: string
): Map<'A' | 'B' | 'C' | 'D' | 'E', { start: number; end: number; quote: string }> | null {
  const idPatterns = [`id: '${questionId}'`, `id: "${questionId}"`, `id:'${questionId}'`, `id:"${questionId}"`];
  let idIdx = -1;
  for (const pat of idPatterns) {
    idIdx = src.indexOf(pat);
    if (idIdx >= 0) break;
  }
  if (idIdx < 0) return null;

  // Locate `options:` after `id: '<questionId>'`
  const optionsRe = /\boptions\s*:\s*\[/g;
  optionsRe.lastIndex = idIdx;
  const optMatch = optionsRe.exec(src);
  if (!optMatch) return null;

  let cursor = optMatch.index + optMatch[0].length;
  const result = new Map<'A' | 'B' | 'C' | 'D' | 'E', { start: number; end: number; quote: string }>();

  // Scan array elements inside `options: [ ... ]`
  while (cursor < src.length) {
    cursor = skipWhitespaceAndComments(src, cursor);
    if (src[cursor] === ']') break;
    if (src[cursor] === ',') {
      cursor++;
      continue;
    }
    if (src[cursor] !== '{') {
      cursor++;
      continue;
    }

    // Parse object `{ ... }`
    let objDepth = 1;
    let i = cursor + 1;
    let letter: 'A' | 'B' | 'C' | 'D' | 'E' | null = null;
    let textSpan: { start: number; end: number; quote: string } | null = null;

    while (i < src.length && objDepth > 0) {
      i = skipWhitespaceAndComments(src, i);
      const ch = src[i];
      if (ch === '{') {
        objDepth++;
        i++;
        continue;
      }
      if (ch === '}') {
        objDepth--;
        i++;
        continue;
      }
      if (ch === '\'' || ch === '"' || ch === '`') {
        const lit = scanStringLiteralEnd(src, i);
        i = lit.end;
        continue;
      }

      if (objDepth === 1 && /[a-zA-Z_]/.test(ch)) {
        const identStart = i;
        while (i < src.length && /[a-zA-Z0-9_]/.test(src[i])) i++;
        const ident = src.slice(identStart, i);
        const afterIdent = skipWhitespaceAndComments(src, i);
        if (src[afterIdent] === ':') {
          const valStart = skipWhitespaceAndComments(src, afterIdent + 1);
          const vCh = src[valStart];
          if (vCh === '\'' || vCh === '"' || vCh === '`') {
            const lit = scanStringLiteralEnd(src, valStart);
            if (ident === 'letter') {
              const rawLetter = src.slice(valStart + 1, lit.end - 1);
              if (rawLetter === 'A' || rawLetter === 'B' || rawLetter === 'C' || rawLetter === 'D' || rawLetter === 'E') {
                letter = rawLetter;
              }
            } else if (ident === 'text') {
              textSpan = { start: valStart, end: lit.end, quote: lit.quote };
            }
            i = lit.end;
            continue;
          }
        }
        continue;
      }
      i++;
    }

    if (letter && textSpan) {
      result.set(letter, textSpan);
    }
    cursor = i;
  }

  return result.size === 4 ? result : null;
}

async function processFile(filePath: string): Promise<{ updatedQuestions: number; updatedOptions: number }> {
  const mod = await import(pathToFileURL(filePath).href);
  const questionsList: LegalQuestion[] | undefined = Object.values(mod).find(
    v => Array.isArray(v) && v.length > 0 && typeof v[0] === 'object' && v[0] !== null && 'options' in v[0]
  ) as LegalQuestion[] | undefined;

  if (!questionsList) {
    return { updatedQuestions: 0, updatedOptions: 0 };
  }

  const sourceText = fs.readFileSync(filePath, 'utf-8');
  const edits: TextEdit[] = [];
  let updatedQuestions = 0;
  let updatedOptions = 0;

  for (const q of questionsList) {
    if (!q?.id || !Array.isArray(q.options) || q.options.length !== 4) continue;
    const rebalanced = rebalanceQuestionOptions(q).options;
    const ranges = findQuestionOptionTextRanges(sourceText, q.id);
    if (!ranges) {
      throw new Error(`Não foi possível localizar options de ${q.id} em ${path.relative(process.cwd(), filePath)}`);
    }

    let qChanged = false;
    for (const origOpt of q.options) {
      const nextOpt = rebalanced.find(r => r.letter === origOpt.letter);
      if (nextOpt && nextOpt.text !== origOpt.text) {
        const span = ranges.get(origOpt.letter);
        if (!span) {
          throw new Error(`Range não encontrado para ${q.id} letra ${origOpt.letter}`);
        }
        edits.push({
          start: span.start,
          end: span.end,
          replacement: formatAsLiteral(nextOpt.text, span.quote),
        });
        updatedOptions++;
        qChanged = true;
      }
    }
    if (qChanged) updatedQuestions++;
  }

  if (edits.length > 0) {
    edits.sort((a, b) => b.start - a.start);
    let nextText = sourceText;
    for (const edit of edits) {
      nextText = nextText.slice(0, edit.start) + edit.replacement + nextText.slice(edit.end);
    }
    fs.writeFileSync(filePath, nextText, 'utf-8');
  }

  return { updatedQuestions, updatedOptions };
}

async function main() {
  const files = getStaticQuestionFiles();
  let totalQ = 0;
  let totalOpt = 0;
  for (const f of files) {
    const res = await processFile(f);
    totalQ += res.updatedQuestions;
    totalOpt += res.updatedOptions;
    console.log(`${path.relative(process.cwd(), f).padEnd(55)} | questões=${res.updatedQuestions} alternativas=${res.updatedOptions}`);
  }
  console.log(`\nConcluído: ${totalQ} questões e ${totalOpt} alternativas atualizadas nos arquivos estáticos.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
