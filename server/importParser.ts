import type { LegalQuestion } from '../src/types';
import type { LawArticle, JurisprudenceRecord } from '../src/types/knowledgeBase';
import { computeContentHash, normalizeTextForMatch } from './legalDb';

import { isSafeObjectKey, sanitizeHttpUrl } from './security';

/**
 * Extrai texto de um buffer PDF usando pdfjs-dist (pure JS, compatível com Node ESM).
 */
export async function extractTextFromPdfBuffer(pdfBuffer: Buffer): Promise<{ text: string; pageCount: number }> {
  const pdfjsLib: any = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const uint8 = new Uint8Array(pdfBuffer);
  const loadingTask = pdfjsLib.getDocument({
    data: uint8,
    useWorkerFetch: false,
    isEvalSupported: false,
    disableFontFace: true,
  });

  const doc = await loadingTask.promise;
  const totalPages = doc.numPages || 0;
  const pageCount = Math.min(totalPages, 250);
  const pagesText: string[] = [];

  for (let p = 1; p <= pageCount; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const strings = (content.items || []).map((item: any) => item.str || '');
    pagesText.push(strings.join(' '));
  }

  return {
    text: pagesText.join('\n\n'),
    pageCount,
  };
}

/**
 * Parser CSV simples compatível com campos entre aspas e separador `,` ou `;`.
 */
export function parseCsvRows(csvText: string): Array<Record<string, string>> {
  const lines = csvText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .filter(l => l.trim().length > 0);

  if (lines.length < 2) return [];

  const delimiter = lines[0].includes(';') && !lines[0].includes(',') ? ';' : ',';

  const splitCsvLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === delimiter && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    result.push(current.trim());
    return result;
  };

  const headers = splitCsvLine(lines[0]).map(h => h.trim());
  const rows: Array<Record<string, string>> = [];
  const maxLines = Math.min(lines.length, 2001);

  for (let i = 1; i < maxLines; i++) {
    const cols = splitCsvLine(lines[i]);
    if (cols.every(c => !c)) continue;
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => {
      if (isSafeObjectKey(h)) {
        row[h] = cols[idx] ?? '';
      }
    });
    rows.push(row);
  }

  return rows;
}

const KNOWN_DISCIPLINES = [
  'Ética Profissional e Estatuto da OAB',
  'Direito Constitucional',
  'Direito Civil',
  'Direito Processual Civil',
  'Direito Penal',
  'Direito Processual Penal',
  'Direito do Trabalho',
  'Direito Processual do Trabalho',
  'Direito Tributário',
  'Direito Administrativo',
  'Direito Empresarial',
  'Direito do Consumidor',
  'Direito Ambiental',
  'Direitos Humanos',
  'Direito da Criança e do Adolescente (ECA)',
];

export function classifyDisciplineFromText(text: string, fallback = 'Direito Constitucional'): string {
  const norm = normalizeTextForMatch(text);
  const rules: Array<{ discipline: string; terms: string[] }> = [
    { discipline: 'Ética Profissional e Estatuto da OAB', terms: ['estatuto da oab', 'eaoab', 'advogado', 'prerrogativas', 'honorarios advocaticios', 'codigo de etica'] },
    { discipline: 'Direito Tributário', terms: ['tributo', 'ctn', 'imposto', 'taxa', 'contribuicao de melhoria', 'icms', 'iptu', 'iss', 'anterioridade', 'execucao fiscal'] },
    { discipline: 'Direito Penal', terms: ['codigo penal', 'crime', 'dolo', 'culpa', 'tipicidade', 'legitima defesa', 'dosimetria', 'pena privativa'] },
    { discipline: 'Direito Processual Penal', terms: ['inquerito policial', 'prisao preventiva', 'habeas corpus', 'cpp', 'anpp', 'audiencia de custodia', 'acao penal'] },
    { discipline: 'Direito do Trabalho', terms: ['clt', 'empregado', 'empregador', 'aviso previo', 'fgts', 'jornada de trabalho', 'rescisao'] },
    { discipline: 'Direito Processual do Trabalho', terms: ['recurso ordinario', 'reclamacao trabalhista', 'tst', 'vara do trabalho', 'deposito recursal'] },
    { discipline: 'Direito Processual Civil', terms: ['cpc', 'agravo de instrumento', 'apelacao', 'tutela provisoria', 'litisconsorcio', 'competencia'] },
    { discipline: 'Direito Civil', terms: ['codigo civil', 'contrato', 'obrigacoes', 'usucapiao', 'sucessao', 'heranca', 'casamento', 'responsabilidade civil'] },
    { discipline: 'Direito Administrativo', terms: ['licitacao', 'improbidade', 'administracao publica', 'servidor publico', 'ato administrativo', 'desapropriacao'] },
    { discipline: 'Direito Empresarial', terms: ['recuperacao judicial', 'falencia', 'sociedade anonima', 'limitada', 'titulo de credito', 'cheque', 'duplicata'] },
    { discipline: 'Direito do Consumidor', terms: ['consumidor', 'cdc', 'fornecedor', 'fato do produto', 'vicio do produto', 'pratica abusiva'] },
    { discipline: 'Direito Ambiental', terms: ['ambiental', 'ibama', 'codigo florestal', 'reserva legal', 'app', 'poluicao'] },
    { discipline: 'Direitos Humanos', terms: ['direitos humanos', 'pacto de san jose', 'corte interamericana', 'tratado internacional'] },
    { discipline: 'Direito da Criança e do Adolescente (ECA)', terms: ['eca', 'ato infracional', 'adolescente', 'conselho tutelar', 'medida socioeducativa'] },
    { discipline: 'Direito Constitucional', terms: ['constituicao', 'mandado de seguranca', 'adi', 'adc', 'adpf', 'direitos fundamentais', 'cpi'] },
  ];

  for (const r of rules) {
    if (r.terms.some(t => norm.includes(t))) {
      return r.discipline;
    }
  }
  const exact = KNOWN_DISCIPLINES.find(d => normalizeTextForMatch(d) === norm);
  return exact || fallback;
}

/**
 * Extrai questões estruturadas a partir de texto bruto de prova (PDF/TXT padrão FGV).
 */
export function parseRawExamTextToQuestions(
  rawText: string,
  meta: {
    examNumber: string;
    year: number;
    edition: string;
    defaultDiscipline?: string;
    officialSourceUrl?: string;
  }
): { parsed: LegalQuestion[]; errors: string[] } {
  const errors: string[] = [];
  const parsed: LegalQuestion[] = [];

  // Divide por "Questão 01", "QUESTÃO 1", "1.", etc.
  const blocks = rawText
    .replace(/\r\n/g, '\n')
    .split(/(?=(?:^|\n)\s*(?:QUEST[ÃA]O|Quest[ãa]o)\s+\d{1,2}\b)/g)
    .map(b => b.trim())
    .filter(b => b.length > 40);

  for (let idx = 0; idx < blocks.length; idx++) {
    const block = blocks[idx];
    // Tenta extrair alternativas A), B), C), D) ou (A) ...
    const optRegex = /(?:^|\n|\s)\(?([A-D])\)?[.)]\s+([\s\S]*?)(?=(?:\n|\s)\(?[A-D]\)?[.)]\s+|GABARITO:|Gabarito:|$)/g;
    const options: Array<{ letter: 'A' | 'B' | 'C' | 'D'; text: string }> = [];
    let firstOptIndex = block.length;
    let match: RegExpExecArray | null;

    while ((match = optRegex.exec(block)) !== null) {
      if (match.index < firstOptIndex) firstOptIndex = match.index;
      const letter = match[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
      const text = match[2].replace(/\s+/g, ' ').trim();
      if (!options.some(o => o.letter === letter) && text.length > 2) {
        options.push({ letter, text });
      }
    }

    const statement = block
      .slice(0, firstOptIndex)
      .replace(/^(?:QUEST[ÃA]O|Quest[ãa]o)\s+\d{1,2}\s*[-.:)]?\s*/i, '')
      .trim();

    const gabMatch = block.match(/(?:GABARITO|Gabarito|Resposta)\s*[:\-]?\s*([A-D])\b/i);
    const correctAnswer = (gabMatch ? gabMatch[1].toUpperCase() : 'A') as 'A' | 'B' | 'C' | 'D';

    if (statement.length < 30 || options.length < 4) {
      errors.push(`Bloco #${idx + 1} ignorado: enunciado curto ou menos de 4 alternativas detectadas.`);
      continue;
    }

    const discipline = classifyDisciplineFromText(statement, meta.defaultDiscipline || 'Direito Constitucional');
    const now = new Date().toISOString();

    parsed.push({
      id: `oab_imp_${meta.year}_${computeContentHash(statement).slice(0, 8)}`,
      exam: `${meta.examNumber} (${meta.edition}) - FGV`,
      examType: 'OAB',
      board: 'FGV',
      year: meta.year,
      examNumber: meta.examNumber,
      examEdition: meta.edition,
      subject: discipline,
      topic: 'Prova Oficial Importada (Classificação Automática)',
      statement,
      options: options.slice(0, 4),
      correctAnswer,
      justification: gabMatch
        ? `Gabarito oficial ${correctAnswer} identificado na importação. Aguarda revisão/enriquecimento da fundamentação detalhada.`
        : 'Gabarito provisório definido na extração. Conferir gabarito oficial da FGV antes de publicar.',
      whyWrong: options
        .filter(o => o.letter !== correctAnswer)
        .map(o => ({
          letter: o.letter,
          explanation: 'Alternativa importada de prova oficial; fundamentação individual pendente de revisão editorial.',
        })),
      statuteReferences: [],
      difficulty: 'Médio',
      difficultyLevel: 2,
      originType: 'OFICIAL_OAB',
      validationStatus: gabMatch ? 'AGUARDANDO_REVISAO' : 'EM_VALIDACAO',
      sourceMeta: {
        originName: `Importação Oficial ${meta.examNumber}`,
        originUrl: sanitizeHttpUrl(meta.officialSourceUrl, 'https://oab.fgv.br/'),
        rightsChecked: true,
        createdAt: now,
        updatedAt: now,
        contentHash: computeContentHash(statement),
      },
    });
  }

  return { parsed, errors };
}

/**
 * Extrai artigos individuais de um texto bruto de lei (ex.: copiado do Planalto).
 */
export function parseRawLegislationText(
  rawText: string,
  meta: {
    normId: string;
    normShortName: string;
    discipline: string;
    subject: string;
    officialSourceUrl: string;
  }
): LawArticle[] {
  const articles: LawArticle[] = [];
  const today = new Date().toISOString().slice(0, 10);

  const chunks = rawText
    .replace(/\r\n/g, '\n')
    .split(/(?=(?:^|\n)\s*Art\.\s*\d+[º°o]?(?:-[A-Z])?)/g)
    .map(c => c.trim())
    .filter(c => /^Art\.\s*\d+/i.test(c));

  for (const chunk of chunks) {
    const headerMatch = chunk.match(/^(Art\.\s*\d+[º°o]?(?:-[A-Z])?)\s*[-–.]?\s*([\s\S]*)/i);
    if (!headerMatch) continue;
    const articleNumber = headerMatch[1].trim();
    const body = headerMatch[2].trim();
    const lines = body.split('\n').map(l => l.trim()).filter(Boolean);
    const caput = lines[0] || body;
    const paragraphs = lines.slice(1).filter(l => /^§|Parágrafo/i.test(l));
    const items = lines.slice(1).filter(l => /^[IVXLCDM]+\s*[-–]/i.test(l) || /^[a-z]\)/i.test(l));

    const isRevoked = /\(revogad[oa]\)/i.test(chunk);

    articles.push({
      id: `art_${meta.normId}_${articleNumber.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
      normId: meta.normId,
      normShortName: meta.normShortName,
      discipline: meta.discipline,
      subject: meta.subject,
      articleNumber,
      caput,
      paragraphs: paragraphs.length > 0 ? paragraphs : undefined,
      items: items.length > 0 ? items : undefined,
      status: isRevoked ? 'REVOGADA' : 'VIGENTE',
      keywords: [meta.normShortName, articleNumber, meta.subject],
      officialSourceUrl: meta.officialSourceUrl,
      lastVerifiedAt: today,
    });
  }

  return articles;
}

/**
 * Converte linhas CSV/JSON em registros tipados de LegalQuestion, LawArticle ou JurisprudenceRecord.
 */
export function normalizeImportedQuestions(
  items: any[],
  defaults: { originType: 'OFICIAL_OAB' | 'AUTORAL_PROFESSOR'; examNumber?: string; year?: number; officialSourceUrl?: string }
): { questions: LegalQuestion[]; errors: string[] } {
  const questions: LegalQuestion[] = [];
  const errors: string[] = [];
  const now = new Date().toISOString();

  items.forEach((raw, idx) => {
    const statement = String(raw.statement || raw.enunciado || '').trim();
    if (statement.length < 20) {
      errors.push(`Registro #${idx + 1}: enunciado ausente ou muito curto.`);
      return;
    }

    let options = raw.options;
    if (!Array.isArray(options)) {
      options = [
        { letter: 'A', text: String(raw.optionA || raw.alternativa_a || raw.A || '').trim() },
        { letter: 'B', text: String(raw.optionB || raw.alternativa_b || raw.B || '').trim() },
        { letter: 'C', text: String(raw.optionC || raw.alternativa_c || raw.C || '').trim() },
        { letter: 'D', text: String(raw.optionD || raw.alternativa_d || raw.D || '').trim() },
      ].filter(o => o.text.length > 0);
    }

    if (options.length < 4) {
      errors.push(`Registro #${idx + 1}: são necessárias 4 alternativas válidas.`);
      return;
    }

    const correct = String(raw.correctAnswer || raw.gabarito || 'A').toUpperCase().slice(0, 1) as 'A' | 'B' | 'C' | 'D';
    const subject = String(raw.subject || raw.disciplina || '').trim() || classifyDisciplineFromText(statement);

    questions.push({
      id: raw.id || `imp_${Date.now()}_${idx}`,
      exam: raw.exam || raw.prova || `${defaults.examNumber || 'Exame OAB Importado'} - FGV`,
      examType: raw.examType || 'OAB',
      board: raw.board || raw.banca || 'FGV',
      year: Number(raw.year || raw.ano || defaults.year || 2024),
      examNumber: raw.examNumber || defaults.examNumber,
      examEdition: raw.examEdition || raw.edicao,
      subject,
      topic: raw.topic || raw.assunto || 'Geral',
      subtopic: raw.subtopic || raw.subassunto,
      statement,
      options: options.slice(0, 4),
      correctAnswer: correct,
      justification: raw.justification || raw.fundamentacao || 'Fundamentação importada; revisar referências legais.',
      whyWrong: Array.isArray(raw.whyWrong) ? raw.whyWrong : [],
      statuteReferences: Array.isArray(raw.statuteReferences) ? raw.statuteReferences : [],
      jurisprudence: raw.jurisprudence || raw.jurisprudencia,
      professorTip: raw.professorTip || raw.dica,
      difficulty: raw.difficulty || 'Médio',
      difficultyLevel: Number(raw.difficultyLevel || 2) as 1 | 2 | 3 | 4,
      originType: raw.originType || defaults.originType,
      validationStatus: raw.validationStatus || 'AGUARDANDO_REVISAO',
      sourceMeta: {
        originName: defaults.examNumber ? `Importação ${defaults.examNumber}` : 'Importação Administrativa',
        originUrl: sanitizeHttpUrl(defaults.officialSourceUrl || raw.originUrl, 'https://oab.fgv.br/'),
        rightsChecked: true,
        createdAt: now,
        updatedAt: now,
        contentHash: computeContentHash(statement),
      },
    });
  });

  return { questions, errors };
}

export function normalizeImportedJurisprudence(items: any[]): { records: JurisprudenceRecord[]; errors: string[] } {
  const records: JurisprudenceRecord[] = [];
  const errors: string[] = [];
  const today = new Date().toISOString().slice(0, 10);

  items.slice(0, 1000).forEach((raw, idx) => {
    const identification = String(raw.identification || raw.identificacao || '').trim().slice(0, 160);
    const thesis = String(raw.thesis || raw.tese || '').trim().slice(0, 4000);
    if (!identification || !thesis) {
      errors.push(`Jurisprudência #${idx + 1}: identificação e tese são obrigatórias.`);
      return;
    }
    records.push({
      id: raw.id || `jur_imp_${Date.now()}_${idx}`,
      tribunal: (raw.tribunal || 'STF').toUpperCase(),
      category: raw.category || raw.categoria || 'TESE',
      identification,
      discipline: raw.discipline || raw.disciplina || classifyDisciplineFromText(thesis),
      subject: raw.subject || raw.assunto || 'Geral',
      thesis,
      summary: raw.summary || raw.ementa || thesis,
      judgmentDate: raw.judgmentDate || raw.dataJulgamento || today,
      publicationDate: raw.publicationDate || raw.dataPublicacao || today,
      officialSourceUrl: sanitizeHttpUrl(raw.officialSourceUrl || raw.fonte, 'https://portal.stf.jus.br/'),
      status: raw.status || 'VIGENTE',
      divergenceNote: raw.divergenceNote,
      lastVerifiedAt: today,
    });
  });

  return { records, errors };
}
