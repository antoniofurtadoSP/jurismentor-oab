import type { LegalQuestion } from '../src/types';

export interface RebalanceStats {
  allShort: boolean;
  origCorrLen: number;
  newCorrLen: number;
  origAvgWrongLen: number;
  newAvgWrongLen: number;
}

const PRESERVE_UPPERCASE = new Set<string>([
  'CF', 'CRFB', 'CTN', 'CPC', 'CPP', 'CLT', 'CDC', 'ECA', 'CC', 'CP', 'CTB', 'LEP', 'LEF',
  'LIA', 'LRF', 'LDB', 'LINDB', 'LICC', 'NLLC', 'LPI', 'LSA', 'LRE', 'LUG', 'LACP',
  'LMS', 'LAI', 'LGPD', 'EAOAB', 'CED', 'LC', 'EC', 'MPV', 'DL', 'IN', 'OJ', 'SV',
  'LOAS', 'SINASE', 'BPC', 'LDO', 'LOA', 'PPA', 'CIP',
  'STF', 'STJ', 'TST', 'TSE', 'STM', 'TRT', 'TRF', 'TRE', 'TJ', 'TJSP', 'TJRJ',
  'TJMG', 'TJRS', 'TJDFT', 'TRTS', 'TRFS', 'OAB', 'CFOAB', 'FGV', 'CEBRASPE',
  'VUNESP', 'FCC', 'PUC', 'USP', 'SANFRAN', 'CNJ', 'CNMP', 'MP', 'MPU', 'MPE',
  'MPT', 'DPU', 'DPE', 'PGJ', 'PGR', 'AGU', 'PGFN', 'INSS', 'SUS', 'ONU', 'OIT',
  'CIDH', 'CADH', 'DUDH', 'PIDCP', 'PIDESC', 'UNESCO', 'MERCOSUL', 'CIJ', 'TPI',
  'OCDE', 'OMC', 'BACEN', 'CMN', 'CVM', 'CADE', 'ANPD', 'CARF', 'CGU', 'TCU',
  'TCE', 'TCM', 'BNDES', 'IBAMA', 'ICMBIO', 'CONAMA', 'SISNAMA', 'SNUC', 'CONTRAN',
  'DETRAN', 'ANATEL', 'ANEEL', 'ANP', 'ANS', 'ANVISA', 'ANTT', 'ANTAQ', 'ANAC',
  'ANCINE', 'SUSEP', 'PREVIC', 'COAF', 'CONITEC', 'CEJUSC', 'NUPEMEC', 'CMDCA',
  'JEC', 'JEF', 'JECRIM', 'TED', 'CPI', 'DRI', 'SDI', 'SDC',
  'ADPF', 'ADI', 'ADC', 'ADO', 'RE', 'RESP', 'ARE', 'HC', 'HD', 'MS', 'MI', 'ACP',
  'RPV', 'RPVS', 'IRDR', 'IAC', 'IDPJ', 'ANPP', 'TCO', 'IP', 'PIC', 'EIA', 'RIMA',
  'APP', 'CAR', 'PSA', 'ZEE', 'CDA', 'PAF', 'SRP', 'PNCP', 'BDI', 'SELIC',
  'RGPS', 'RPPS', 'FGTS', 'IPTU', 'IPVA', 'ITCMD', 'ITCD', 'ITBI', 'ICMS', 'ISS',
  'ISSQN', 'IOF', 'IPI', 'IR', 'IRPF', 'IRPJ', 'CSLL', 'PIS', 'COFINS', 'PASEP',
  'CIDE', 'COSIP', 'ITR', 'II', 'IE', 'IGF', 'SIMPLES', 'CNPJ', 'CPF', 'RG', 'CNH',
  'CTPS', 'CNIS', 'PPP', 'CAT', 'CIPA', 'SAT', 'RAT', 'FAP', 'ME', 'EPP', 'MEI',
  'LTDA', 'EIRELI', 'SA', 'SPE', 'OS', 'OSCIP', 'ONG', 'ONGS', 'UCS', 'APAS',
  'UF', 'DF', 'RJ', 'SP', 'MG', 'PR', 'RS', 'BA', 'PE', 'CE', 'GO', 'SM', 'IA',
  'PCD', 'PCDS', 'SAMU', 'CRAS', 'CREAS', 'FUNDEB', 'PM', 'PF', 'PRF', 'PC',
  'DEAM', 'GAECO', 'RR', 'RO', 'ED', 'AIRR', 'RJ', 'DRT', 'DOU', 'DJE',
  'PROUNI', 'FIES', 'CADUNICO', 'GPS', 'DARF', 'GFIP', 'ESOCIAL', 'CCT', 'ACT',
  'IRR', 'RESEX', 'RDS', 'MCASP', 'DEJT', 'CUB', 'SERO',
]);

const ROMAN_NUMERAL_RE =
  /^(?:M{0,3}(?:CM|CD|D?C{0,3})(?:XC|XL|L?X{0,3})(?:IX|IV|V?I{0,3}))$/;

const PORTUGUESE_LOOKALIKE_ROMANS = new Set([
  'A', 'E', 'O', 'À', 'É', 'EM', 'OS', 'AS', 'UM', 'DA', 'DO', 'DE', 'NA', 'NO',
  'OU', 'SE', 'AO', 'POR', 'COM', 'SEM', 'MAS', 'NEM', 'SIM', 'NÃO', 'NAO', 'JÁ',
  'JA', 'SOB', 'ATÉ', 'ATE', 'DOS', 'DAS', 'NOS', 'NAS', 'AOS', 'TER', 'SER', 'DAR',
  'VER', 'VIR', 'VAI', 'SÃO', 'SAO', 'TEM', 'SÓ', 'SO', 'QUE', 'FOI', 'ERA',
  'ME', 'TE', 'LE', 'LA', 'LO', 'MI', 'CI', 'DI', 'LI', 'XI', 'VI',
]);

function isValidRomanToken(word: string, prevToken: string, nextToken: string): boolean {
  if (!ROMAN_NUMERAL_RE.test(word) || word.length === 0) return false;
  if (PORTUGUESE_LOOKALIKE_ROMANS.has(word)) {
    const ctx = `${prevToken} ${nextToken}`.toLowerCase();
    return (
      /\b(inciso|inc\.?|item|itens|art\.?|artigo|alínea|capítulo|título|livro|seção|súmula|oab|grau|fase|exame|século)\b/.test(
        ctx
      ) ||
      (/^[ivxlcdm]+[,;.)]?$/i.test(nextToken) &&
        !/\b(a|e|ou)\b/.test(nextToken.toLowerCase()) &&
        word.length >= 2)
    );
  }
  return word.length >= 2 && word.length <= 7;
}

function stableHash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function capitalizeFirst(s: string): string {
  const trimmed = s.trimStart();
  if (!trimmed) return s;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function lowerEditorialCaps(text: string): string {
  const out = text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/(^|\s)\*([^*\n]{2,80})\*(?=\s|[.,;:)]|$)/g, '$1$2');

  const tokens = out.split(/(\s+)/);
  const wordAt = (idx: number): string =>
    (tokens[idx] || '').replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (!tok || /^\s+$/.test(tok)) continue;

    const subParts = tok.split(/([-/])/);
    let changed = false;
    const prevWord = i >= 2 ? wordAt(i - 2) : '';
    const nextWord = i + 2 < tokens.length ? wordAt(i + 2) : '';

    const processedParts = subParts.map((part, partIdx) => {
      if (part === '-' || part === '/') return part;
      const match = part.match(/^([^\p{L}]*)([\p{L}]+)([^\p{L}]*)$/u);
      if (!match) return part;
      const [, lead, core, trail] = match;
      if (core.length < 2 && !['À', 'É', 'E', 'A', 'O'].includes(core)) return part;

      const isAllUpper = core === core.toUpperCase() && core !== core.toLowerCase();
      if (!isAllUpper) return part;

      const coreNorm = core.toUpperCase();
      if (PRESERVE_UPPERCASE.has(coreNorm)) {
        return part;
      }

      if (isValidRomanToken(coreNorm, prevWord, nextWord)) {
        return part;
      }

      const isSentenceStart =
        (i === 0 && partIdx === 0 && lead === '') ||
        (i >= 2 && /[.?!:]$/.test(tokens[i - 2] || '') && partIdx === 0 && lead === '');

      if (core.length === 1) {
        if (isSentenceStart) return `${lead}${core.toUpperCase()}${trail}`;
        const isAlinea = /\b(alínea|inciso|item|letra)\b/i.test(prevWord);
        if (!isAlinea && ['E', 'À', 'É', 'O'].includes(core)) {
          changed = true;
          return `${lead}${core.toLowerCase()}${trail}`;
        }
        const prevUpper =
          prevWord.length >= 2 && prevWord === prevWord.toUpperCase() && !PRESERVE_UPPERCASE.has(prevWord);
        const nextUpper =
          nextWord.length >= 2 && nextWord === nextWord.toUpperCase() && !PRESERVE_UPPERCASE.has(nextWord);
        if (prevUpper || nextUpper) {
          changed = true;
          return `${lead}${core.toLowerCase()}${trail}`;
        }
        return part;
      }

      changed = true;
      const lowered = core.toLowerCase();
      if (isSentenceStart) {
        return `${lead}${lowered.charAt(0).toUpperCase()}${lowered.slice(1)}${trail}`;
      }
      return `${lead}${lowered}${trail}`;
    });

    if (changed) {
      tokens[i] = processedParts.join('');
    }
  }

  return tokens.join('');
}

function stripAuthorDraftNotesAndPunctuation(text: string): string {
  let out = text;

  out = out.replace(/\([^()]*\?[^()]*\)/g, ' ');
  out = out.replace(/[^.;!?()]*\?\s*(?:Atenção|Cuidado|Obs\.?|Importante|Nota|Art\.|Súmula)[^.;!]*([.;!]|$)/gi, '$1');
  out = out.replace(/\?/g, '.');

  out = out.replace(/!\s*(?=[).,;:])/g, '');
  out = out.replace(/!+/g, '.');

  out = out.replace(/\(\s*(?:atenção|cuidado|pegadinha|importante|obs\.?|nota)\s*[:\-—][^()]*\)/gi, ' ');
  out = out.replace(/(?:^|[.;]\s+)(?:atenção|cuidado|pegadinha|obs\.?)\s*[:\-—]\s*[^.;]+/gi, ' ');

  out = out.replace(/^(Sim|Não)\.\s+(?=[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ])/g, '$1, ');
  out = out.replace(/^(Sim|Não),\s+([A-ZÁÀÂÃÉÊÍÓÔÕÚÇ])/g, (_, yn, ch) => `${yn}, ${ch.toLowerCase()}`);

  return out;
}

const CODE_NAMES_GROUP =
  '(?:CF(?:\\/88)?|CRFB|CTN|CC|CP|CPC|CPP|CLT|CDC|ECA|EAOAB|CED|LEF|LRF|LINDB|LGPD|LIA|LEP|CTB|LPI|LSA|Estatuto\\s+da\\s+(?:OAB|Cidade|Crian[çc]a|Desarmamento)|C[óo]digo\\s+(?:Civil|Penal|Tribut[áa]rio(?:\\s+Nacional)?|Eleitoral|d[eo]\\s+(?:Processo\\s+Civil|Processo\\s+Penal|Defesa\\s+do\\s+Consumidor))|Decreto(?:-Lei)?\\s+n?[º°]?\\s*[\\d.]+(?:\\/\\d{2,4})?|Lei\\s+(?:Complementar\\s+)?n?[º°]?\\s*[\\d.]+(?:\\/\\d{2,4})?|LC\\s+n?[º°]?\\s*[\\d.]+(?:\\/\\d{2,4})?|Constitui[çc][ãa]o\\s+Federal)';

// Every subdivision token is word-boundary anchored so it NEVER steals letters from adjacent words!
const ARTICLE_SUBDIV =
  '(?:\\s*(?:,|e|a|ou|c\\/c)?\\s*(?:caput|par[áa]grafo\\s+[úu]nico|§§?\\s*\\d+[º°]?(?:-[A-Za-z])?(?:\\s*(?:,|e|a)\\s*\\d+[º°]?(?:-[A-Za-z])?)*|incisos?\\s+[IVXLCDM]+\\b|al[íi]neas?\\s+["\']?[a-z]["\']?\\b|\\b[IVXLCDM]{1,7}\\b|["\'][a-z]["\']|\\b[a-f]\\b(?=\\s*(?:,|\\s+(?:d[oa]\\s+)?(?:CF|CRFB|CC|CP|CPC|CPP|CLT|CTN|CDC|ECA|EAOAB)))))*';

const FULL_ART_SPAN = `Art(?:igo)?s?\\.?\\s*\\d+(?:\\.\\d{3})*[º°]?(?:-[A-Za-z0-9]+)?${ARTICLE_SUBDIV}(?:\\s*,?\\s*(?:d[oa]\\s+)?${CODE_NAMES_GROUP}\\b)?`;
const FULL_SUMULA_SPAN = `S[úu]mulas?(?:\\s+Vinculantes?)?\\s*(?:n[º°]?\\s*)?\\d+(?:\\s*,\\s*(?:I|II|III|IV|V|VI|VII|VIII|IX|X)\\b)?(?:\\s*(?:,|e)\\s*\\d+)*(?:\\s+(?:d[oa]\\s+)?(?:STF|STJ|TST|TSE)\\b)?`;

const CITATION_PAREN_RE = new RegExp(
  `\\(\\s*(?:(?:c\\/c|vide|cf\\.?|conforme|segundo|nos\\s+termos\\s+d[oae]s?|pel[oa]|na\\s+forma\\s+d[oae]|como\\s+d[oae]|v\\.)\\s+)?(?:${FULL_ART_SPAN}|${FULL_SUMULA_SPAN}|par[áa]grafo\\s+[úu]nico|§+\\s*\\d+|incisos?\\s+[IVXLCDM]+|sv\\s*\\d+|oj\\s*(?:n[º°]?\\s*)?\\d+|tema\\s*(?:n[º°]?\\s*)?\\d+|re\\s+[\\d.]+|resp\\s+[\\d.]+|are\\s+[\\d.]+|adi\\s+[\\d.-]+|adpf\\s+[\\d.-]+|adc\\s+[\\d.-]+|ado\\s+[\\d.-]+|hc\\s+[\\d.]+|ms\\s+[\\d.]+|lei\\s*(?:complementar\\s*|delegada\\s*)?(?:n[º°]?\\s*)?[\\d.]+\\/?\\d*|lc\\s*(?:n[º°]?\\s*)?[\\d.]+\\/?\\d*|ec\\s*(?:n[º°]?\\s*)?\\d+\\/?\\d*|mpv?\\s*(?:n[º°]?\\s*)?\\d+|decreto(?:-lei)?\\s*(?:n[º°]?\\s*)?[\\d.]+|resolu[çc][ãa]o\\s+[^()]{3,50}|provimento\\s+[^()]{3,50}|portaria\\s+[^()]{3,50}|in\\s+\\d+\\/\\d+|cf\\/?88|crfb|eaoab|ced|lindb|lrf|lgpd|clt|cpc|cpp|ctn|cdc|eca|cc|cp|lef)[^()]{0,240}\\)`,
  'gi'
);

const DIDACTIC_GLOSS_PAREN_RE =
  /\(\s*(?:isto\s+[ée]|ou\s+seja|vale\s+dizer|em\s+outras\s+palavras|por\s+exemplo|ex\.:?|e\.g\.|diferente\s+d[oae]s?|ao\s+contr[áa]rio\s+d[oae]s?|n[ãa]o\s+confundir\s+com|lembre(?:-se)?|memorize|como\s+(?:a|o|os|as)\s+[^)]{8,}|salvo\s+se\s+j[áa]\s+[^)]{8,}|na\s+pr[áa]tica|em\s+regra)\b[^()]{0,220}\)/gi;

const LONG_PAREN_WITH_CITE_RE =
  /\([^()]{16,}\b(?:art\.?\s*\d+|artigo\s*\d+|s[úu]mula|tema\s+\d+|re\s+\d+|resp\s+\d+|lei\s+n[º°]?\s*\d+|cf\/?88|stf|stj|tst|eaoab|clt|cpc|cpp|ctn|cdc|eca|lef|cp|cc)\b[^()]*\)/gi;

const INTRO_CITATION_PREFIX_RE = new RegExp(
  `^(?:nos\\s+termos|de\\s+acordo\\s+com|segundo(?:\\s+(?:tese|entendimento)(?:\\s+(?:firmad[oa]|consolidado|sumulado|pac[íi]fico|de\\s+repercuss[ãa]o\\s+geral))?)?|conforme(?:\\s+(?:tese|entendimento|jurisprud[êe]ncia|disposto|previsto))?|à\\s+luz|com\\s+(?:base|fundamento|fulcro)\\s+n[oa]|na\\s+forma|pel[oa](?:\\s+(?:jurisprud[êe]ncia|entendimento(?:\\s+(?:consolidado|sumulado))?|disposto|regra))?)\\s+(?:d[oae]s?\\s+|n[oae]s?\\s+)?(?:${FULL_ART_SPAN}|${FULL_SUMULA_SPAN}|tese\\s+de\\s+repercuss[ãa]o\\s+geral\\s+d[oa]\\s+(?:stf|stj)|entendimento\\s+d[oa]\\s+(?:stf|stj|tst)|tema\\s+\\d+[^,:;]*|sv\\s*\\d+[^,:;]*|oj\\s*\\d+[^,:;]*|stf|stj|tst|tse|cf\\/?88|crfb|estatuto\\s+da\\s+oab|lei\\s*(?:complementar\\s*)?(?:n[º°]?\\s*)?[\\d.]+\\/?\\d*[^,:;]*)\\s*[,:]\\s*`,
  'i'
);

const MID_ATTRIBUTION_RE = new RegExp(
  `,\\s*(?:pois\\s+)?(?:conforme|segundo)\\s+(?:tese\\s+de\\s+repercuss[ãa]o\\s+geral\\s+d[oa]\\s+(?:stf|stj)|entendimento\\s+(?:consolidado\\s+)?d[oa]\\s+(?:stf|stj|tst)|${FULL_ART_SPAN}|${FULL_SUMULA_SPAN})\\s*,\\s*`,
  'gi'
);

const EMBEDDED_CITATION_TAIL_RE = new RegExp(
  `(?:,\\s*|\\s+e\\s+|\\s+—\\s+|\\s+)(?:em\\s+conson[âa]ncia\\s+com\\s+(?:a\\s+)?${FULL_SUMULA_SPAN}|nos\\s+termos\\s+d[oae]\\s+(?:${FULL_ART_SPAN}|${FULL_SUMULA_SPAN}|${CODE_NAMES_GROUP})|conforme\\s+(?:o\\s+|a\\s+)?(?:${FULL_ART_SPAN}|${FULL_SUMULA_SPAN}|tese\\s+firmada\\s+pel[oa]\\s+(?:stf|stj)[^,.;()]{0,45})|com\\s+(?:base|fulcro|fundamento)\\s+n[oa]\\s+(?:${FULL_ART_SPAN}|${FULL_SUMULA_SPAN}|${CODE_NAMES_GROUP})|na\\s+forma\\s+d[oa]\\s+${CODE_NAMES_GROUP}|pela\\s+(?:${FULL_SUMULA_SPAN}|sv\\s*\\d+))`,
  'gi'
);

const INLINE_MODIFIER_CITE_RE = new RegExp(
  `\\s*(?:constante|insculpid[oa]|previst[oa]|estabelecid[oa]|dispost[oa]|contid[oa])\\s+(?:n[oa]|d[oa])\\s+${FULL_ART_SPAN}`,
  'gi'
);

const INLINE_SUBJECT_CITE_RE = new RegExp(
  `\\bo\\s+${FULL_ART_SPAN}\\s+(?=consagra|prev[êe]|veda|estabelece|autoriza|admite|assegura|determina|exige|disp[õo]e|pro[ií]be|abrange|extingue|rege|disciplina|imp[õo]e|garante|permite|afasta)`,
  'gi'
);

const INLINE_POSSESSIVE_CITE_RE = new RegExp(
  `(?:\\s*,)?\\s+(?:d[oa]|n[oa]|pel[oa])\\s+${FULL_ART_SPAN}`,
  'gi'
);

const INLINE_SHORT_ARTICLE_RE = new RegExp(
  `(?:,\\s*|\\s+—\\s*)(?:${FULL_ART_SPAN}|${FULL_SUMULA_SPAN})(?=[,.;)]|$)`,
  'gi'
);

function cleanupPunctuation(text: string): string {
  let out = text
    .replace(/\(\s*\)/g, ' ')
    .replace(/\(\s*[;,—–-]+\s*\)/g, ' ')
    .replace(/\s+([,.;:])/g, '$1')
    .replace(/([,;:])\s*\1+/g, '$1')
    .replace(/,\s*([.;])/g, '$1')
    .replace(/([.;])\s*,/g, '$1')
    .replace(/:\s*([.;])/g, '$1')
    .replace(/—\s*([.;,])/g, '$1')
    .replace(/\.\s*\./g, '.')
    .replace(/\s{2,}/g, ' ')
    .trim();

  out = out.replace(/\s+(?:do|da|dos|das|no|na|nos|nas|de|em|ao|à|pelo|pela|c\/c)\s*([.;,])/gi, '$1');
  out = out.replace(/,\s*([.;])/g, '$1');
  out = out.replace(/,\s*pois\s*,/gi, ', pois ');

  // Ensure balanced parentheses if an uneven artifact ever slipped in
  const opens = (out.match(/\(/g) || []).length;
  const closes = (out.match(/\)/g) || []).length;
  if (opens > closes) {
    out = out.replace(/\([^()]*$/, '').trim();
  } else if (closes > opens) {
    out = out.replace(/\)/g, (m, offset, str) => {
      const prefix = str.slice(0, offset);
      return (prefix.match(/\(/g) || []).length > (prefix.match(/\)/g) || []).length ? m : '';
    });
  }

  out = out.replace(/\s{2,}/g, ' ').replace(/,\s*([.;])/g, '$1').trim();

  if (out && !/[.]$/.test(out)) {
    out = `${out}.`;
  }
  return capitalizeFirst(out);
}

function splitTopLevelSemicolons(text: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '(') depth++;
    else if (ch === ')' && depth > 0) depth--;
    else if (ch === ';' && depth === 0) {
      const seg = text.slice(start, i).trim();
      if (seg) parts.push(seg);
      start = i + 1;
    }
  }
  const tail = text.slice(start).trim();
  if (tail) parts.push(tail);
  return parts;
}

function splitSentencesPreservingLegalAbbr(text: string): string[] {
  const SENT_TOKEN = '__DOT_ABBR__';
  const masked = text
    .replace(
      /\b(Arts?|Inc|Par|Al|Ex|Obs|Dr|Dra|Sr|Sra|Prof|Min|Des|Rel|Proc|Adv|Cód|Res|Port|Dec|Prov|Vol|Pág|Ed|Ref|v\.g|p\.ex)\./gi,
      `$1${SENT_TOKEN}`
    )
    .replace(/\b(n[º°]?)\./gi, `$1${SENT_TOKEN}`)
    .replace(/(\d)\.(\d)/g, `$1${SENT_TOKEN}$2`)
    .replace(/S\.A\./gi, `S${SENT_TOKEN}A${SENT_TOKEN}`)
    .replace(/Ltda\./gi, `Ltda${SENT_TOKEN}`)
    .replace(/etc\./gi, `etc${SENT_TOKEN}`);

  // Split only at top-level (outside parens)
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < masked.length; i++) {
    const ch = masked[i];
    if (ch === '(') depth++;
    else if (ch === ')' && depth > 0) depth--;
    else if (
      ch === '.' &&
      depth === 0 &&
      i + 2 < masked.length &&
      /\s/.test(masked[i + 1]) &&
      /[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ("«]/.test(masked.slice(i + 1).trimStart()[0] || '')
    ) {
      parts.push(masked.slice(start, i + 1).replaceAll(SENT_TOKEN, '.').trim());
      start = i + 1;
    }
  }
  const tail = masked.slice(start).replaceAll(SENT_TOKEN, '.').trim();
  if (tail) parts.push(tail);
  return parts.filter(Boolean);
}

function stripCitationsAndGlosses(text: string, allowStripCitations: boolean): string {
  let out = text;

  out = out.replace(DIDACTIC_GLOSS_PAREN_RE, ' ');
  if (allowStripCitations) {
    out = out.replace(CITATION_PAREN_RE, ' ');
    out = out.replace(LONG_PAREN_WITH_CITE_RE, ' ');
    out = out.replace(/\s{2,}/g, ' ').replace(/\s+,/g, ',').trim();

    const withoutIntro = out.replace(INTRO_CITATION_PREFIX_RE, '');
    if (withoutIntro.trim().length >= 35) {
      out = withoutIntro;
    }

    out = out.replace(MID_ATTRIBUTION_RE, ', pois ');
    out = out.replace(EMBEDDED_CITATION_TAIL_RE, ' ');
    out = out.replace(INLINE_MODIFIER_CITE_RE, ' ');
    out = out.replace(INLINE_SUBJECT_CITE_RE, 'a legislação aplicável ');
    out = out.replace(INLINE_POSSESSIVE_CITE_RE, ' ');
    out = out.replace(INLINE_SHORT_ARTICLE_RE, ' ');
  }

  out = out.replace(
    /\s+—\s+(?:isto é|ou seja|diferente d|não se |lembre|cuidado|vale dizer|inclusive|como|que não)[^.;—()]{10,}/gi,
    ' '
  );
  out = out.replace(/\(\d+\)\s+/g, '');

  return cleanupPunctuation(out);
}

function condenseCorrectOption(
  text: string,
  statement: string,
  options: { isAllShort: boolean; asksForCitation: boolean; hasItemList: boolean }
): string {
  let out = stripAuthorDraftNotesAndPunctuation(text);
  out = lowerEditorialCaps(out);

  if (options.isAllShort) {
    if (options.hasItemList) {
      const m = out.match(/^(Apenas\s+o[s]?\s+iten[s]?\s+[^,.;]+|Todos\s+os\s+itens|Nenhum\s+dos\s+itens)\s*,\s*pois\b/i);
      if (m) out = `${m[1]}.`;
    }
    if (!options.asksForCitation) {
      out = out.replace(CITATION_PAREN_RE, ' ');
    }
    return cleanupPunctuation(out);
  }

  if (options.hasItemList) {
    const m = out.match(/^(Apenas\s+o[s]?\s+iten[s]?\s+[^,.;()]+|Todos\s+os\s+itens|Nenhum\s+dos\s+itens)\b/i);
    if (m) return cleanupPunctuation(m[1]);
  }

  out = stripCitationsAndGlosses(out, !options.asksForCitation);
  // Fix leftover " e tese " right after stripped "conforme o Art. ... e tese"
  out = out.replace(/^(\d+\s*(?:\([^)]+\)\s*)?anos?)\s+e\s+(tese|jurisprudência)\b/i, '$1, conforme $2');

  const isDualAnswer =
    /\brespectivamente\b/i.test(statement) ||
    /\b(ambas|ambos|as duas|os dois)\b/i.test(statement) ||
    /\?.*\?/s.test(statement);

  if (out.length > 175) {
    const noLongParen = out.replace(/\([^()]{18,}\)/g, ' ');
    if (noLongParen.trim().length >= 80) {
      out = cleanupPunctuation(noLongParen);
    }
  }

  if (out.length > 175) {
    const noDash = out.replace(/\s+[—–]\s+[^.;()]{14,}(?=[.;)]|$)/g, '');
    if (noDash.trim().length >= 80) {
      out = cleanupPunctuation(noDash);
    }
  }

  // Protect cumulative condition lists introduced with ':' (e.g. "desde que: ...; ...; e ...")
  const hasColonConditions = /(?:desde\s+que|exige(?:-se)?|requisitos?|mediante|sendo\s+que|cumulativamente)\s*:[^.]*;/i.test(out);
  out = out.replace(/\b(desde\s+que)\s*:\s*/gi, '$1 ');

  if (out.length > 190 && !isDualAnswer && !hasColonConditions) {
    const sentences = splitSentencesPreservingLegalAbbr(out);
    if (sentences.length > 1) {
      let acc = sentences[0];
      if (acc.length < 105 && sentences[1] && acc.length + sentences[1].length + 1 <= 200) {
        acc = `${acc} ${sentences[1]}`;
      }
      if (acc.length >= 85) {
        out = cleanupPunctuation(acc);
      }
    }
  }

  if (out.length > 195 && !isDualAnswer && !hasColonConditions && out.includes(';')) {
    const semiParts = splitTopLevelSemicolons(out);
    if (semiParts.length >= 2 && semiParts[0].length >= 90) {
      let acc = semiParts[0];
      if (acc.length < 120 && acc.length + semiParts[1].length + 2 <= 200) {
        acc = `${acc}; ${semiParts[1]}`;
      }
      out = cleanupPunctuation(acc);
    }
  }

  if (out.length > 205 && !isDualAnswer && !hasColonConditions) {
    const trimmed = out.replace(
      /,\s*(?:além de(?:\s+não)?|bem como|sendo certo que|razão pela qual|motivo pelo qual|devendo ainda|podendo inclusive|tampouco se aplicando|salvo quando expressamente|mesmo quando houver|inclusive com|inclusive nos)\b[^.]{20,}\.$/i,
      '.'
    );
    if (trimmed.length >= 105) {
      out = cleanupPunctuation(trimmed);
    }
  }

  if (out.length < 25) {
    return cleanupPunctuation(lowerEditorialCaps(stripAuthorDraftNotesAndPunctuation(text)));
  }

  return out;
}

type ClauseBucket = {
  negative: string[];
  permissive: string[];
  general: string[];
  sentences: string[];
};

const DOMAIN_CLAUSES: Record<string, ClauseBucket> = {
  constitucional: {
    negative: [
      'com fundamento na preservação do núcleo essencial da separação funcional dos Poderes',
      'em observância estrita à reserva constitucional de competência legislativa privativa',
      'sem admitir interpretação extensiva que amplie restrições não previstas na ordem constitucional',
      'com vedação à modulação ou relativização de efeitos por ato normativo infralegal superveniente',
    ],
    permissive: [
      'diante da eficácia imediata e vinculante atribuída à regra constitucional de organização estatal',
      'com respaldo na autonomia federativa assegurada aos entes políticos para dispor sobre o tema',
      'com produção regular de efeitos jurídicos independentemente de regulamentação complementar',
      'em consonância com a presunção relativa de constitucionalidade dos atos normativos primários',
    ],
    general: [
      'consoante a sistemática de repartição de competências estabelecida no ordenamento constitucional vigente',
      'com efeitos vinculantes no âmbito da jurisdição constitucional concentrada e difusa',
      'mediante observância formal do devido processo legislativo ordinário aplicável à espécie',
      'com prevalência do critério hierárquico formal sobre disposições regulamentares supervenientes',
    ],
    sentences: [
      'Nessa hipótese, a eficácia da norma independe de regulamentação legislativa posterior.',
      'Essa orientação prevalece em face da supremacia formal da ordem constitucional vigente.',
      'Tal diretriz vincula a atuação dos órgãos públicos na esfera administrativa e judicial.',
    ],
  },
  administrativo: {
    negative: [
      'em decorrência do princípio da indisponibilidade do interesse público e da legalidade administrativa estrita',
      'sem possibilidade de convalidação posterior do ato administrativo por ausência de previsão regulamentar',
      'com vedação ao administrador público de suprir a exigência legal por juízo de conveniência',
      'sob pena de nulidade absoluta do procedimento administrativo e apuração funcional da autoridade',
    ],
    permissive: [
      'com amparo na autoexecutoriedade e na presunção de legitimidade inerentes aos atos administrativos',
      'mediante exercício regular do poder discricionário vinculado à finalidade administrativa primária',
      'sem necessidade de prévia autorização judicial ou instauração de procedimento contraditório específico',
      'em conformidade com os parâmetros de eficiência administrativa e continuidade do serviço público',
    ],
    general: [
      'com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal',
      'em vinculação direta da autoridade administrativa competente aos limites do regime de direito público',
      'sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes',
      'sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal',
    ],
    sentences: [
      'Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.',
      'Tal entendimento decorre diretamente da submissão da Administração ao regime jurídico público.',
      'A medida dispensa homologação judicial prévia para surtir regular eficácia administrativa.',
    ],
  },
  penal: {
    negative: [
      'em observância rigorosa ao princípio da legalidade estrita e da vedação à analogia prejudicial',
      'com afastamento da tipicidade material da conduta por ausência de lesividade penal relevante',
      'sem configuração de causa interruptiva ou suspensiva do curso regular da pretensão punitiva',
      'com impossibilidade de reconhecimento de concurso formal ou de majorante não prevista no tipo',
    ],
    permissive: [
      'com responsabilização direta pelo resultado naturalístico produzido pela conduta do agente',
      'com incidência imediata dos efeitos secundários da condenação desde o recebimento da inicial',
      'com consumação formal do delito independentemente da obtenção de vantagem ilícita efetiva',
      'com agravação automática da resposta penal já na primeira fase da dosimetria da pena',
    ],
    general: [
      'observada a natureza do bem jurídico tutelado e a reprovabilidade atribuída ao fato típico',
      'com reflexos diretos sobre a fixação do regime inicial de cumprimento e eventuais benefícios legais',
      'em consonância com a estrutura finalista adotada para aferição da tipicidade e da ilicitude',
      'sem exigência de vínculo subjetivo prévio ou de resultado material autônomo para configuração',
    ],
    sentences: [
      'Essa solução orienta o cálculo da pena-base e a definição do regime inicial aplicável.',
      'Tal critério incide objetivamente na verificação da adequação típica da conduta.',
      'A consequência jurídica se impõe de forma uniforme independentemente das circunstâncias posteriores.',
    ],
  },
  processual_penal: {
    negative: [
      'sob pena de nulidade processual absoluta insanável por violação às garantias do devido processo',
      'com preclusão imediata da oportunidade de produção probatória após a fase postulatória',
      'sem possibilidade de atuação judicial de ofício para suprir omissão técnica da acusação',
      'com impossibilidade de utilização do elemento informativo como fundamento exclusivo da decisão',
    ],
    permissive: [
      'com autorização para atuação instrutória suplementar do magistrado na busca da verdade real',
      'sem necessidade de prévia intimação pessoal da defesa técnica ou anuência ministerial',
      'com eficácia preclusiva imediata quanto às questões processuais decididas interlocutoriamente',
      'com prosseguimento regular da persecução penal independentemente de manifestação prévia do ofendido',
    ],
    general: [
      'em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum',
      'com preservação da competência funcional do juízo natural fixada no recebimento da acusação',
      'mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível',
      'com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito',
    ],
    sentences: [
      'Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.',
      'A inobservância dessa regra repercute diretamente na validade dos atos processuais subsequentes.',
      'O juízo competente deve observar esse rito ao examinar a admissibilidade da acusação.',
    ],
  },
  civil: {
    negative: [
      'com ineficácia jurídica plena do negócio celebrado perante terceiros de boa-fé e credores',
      'sem possibilidade de modificação unilateral das obrigações contratuais sem anuência expressa',
      'sem transmissão automática dos direitos obrigacionais ou reais antes da formalização registral',
      'com impedimento à compensação ou repetição dos valores prestados na relação negocial',
    ],
    permissive: [
      'com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual',
      'com produção imediata de efeitos patrimoniais e pessoais independentemente de averbação registral',
      'com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado',
      'com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor',
    ],
    general: [
      'em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais',
      'observada a distinção dogmática entre os planos da existência, validade e eficácia do ato',
      'com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional',
      'com manutenção da vinculação jurídica das partes até a extinção regular da obrigação',
    ],
    sentences: [
      'Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas.',
      'Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes.',
      'A solução aplica-se de modo uniforme tanto às obrigações principais quanto às acessórias.',
    ],
  },
  processual_civil: {
    negative: [
      'com preclusão consumativa e temporal da matéria no mesmo grau de jurisdição cível',
      'com obstáculo ao conhecimento do pedido ou recurso por ausência de requisito extrínseco',
      'sem produção de efeito suspensivo automático nem impedimento ao cumprimento provisório',
      'com vedação ao órgão julgador de conceder tutela diversa da requerida na petição inicial',
    ],
    permissive: [
      'com efeito devolutivo amplo ao recurso para reexame integral das questões fáticas e jurídicas',
      'sem exigência de caução prévia ou intimação complementar da parte adversa para efetivação',
      'com prosseguimento imediato do rito executivo mediante constrição patrimonial do devedor',
      'com reconhecimento de eficácia executiva plena do pronunciamento independentemente de liquidação',
    ],
    general: [
      'observada a contagem de prazos em dias úteis e a ordem cronológica de julgamento processual',
      'em sintonia com o princípio da primazia da decisão de mérito e da cooperação processual',
      'com formação de coisa julgada formal e material após o exaurimento das vias ordinárias',
      'com distribuição dinâmica do ônus probatório conforme as peculiaridades do caso concreto',
    ],
    sentences: [
      'Tal regra incide imediatamente sobre os processos em curso perante o juízo cível.',
      'A medida submete-se ao controle recursal ordinário nos prazos previstos para o procedimento.',
      'Essa sistemática assegura a regularidade formal do rito de conhecimento e de execução.',
    ],
  },
  trabalho: {
    negative: [
      'em decorrência do caráter irrenunciável e alimentar das verbas e garantias mínimas laborais',
      'com nulidade absoluta de qualquer estipulação voltada a reduzir patamares protetivos básicos',
      'sem integração na base de cálculo das demais parcelas contratuais e rescisórias devidas',
      'com afastamento do reconhecimento de vínculo empregatício ou responsabilidade solidária',
    ],
    permissive: [
      'com prevalência do ajuste direto entre empregado e empregador sobre normas supletivas',
      'com autorização de compensação e flexibilização da jornada sem negociação sindical prévia',
      'com garantia de estabilidade provisória e pagamento integral dos reflexos durante o período',
      'com possibilidade de alteração unilateral das condições laborais pelo poder diretivo patronal',
    ],
    general: [
      'observados os princípios da continuidade da relação de emprego e da primazia da realidade',
      'com reflexo direto sobre o cálculo de férias, décimo terceiro salário e depósitos fundiários',
      'com sujeição aos prazos prescricionais trabalhistas aplicáveis após a extinção contratual',
      'em conformidade com o regime jurídico celetista e as garantias sociais constitucionais',
    ],
    sentences: [
      'Essa diretriz repercute na apuração das verbas contratuais e rescisórias do trabalhador.',
      'A regra orienta tanto os contratos por prazo indeterminado quanto as contratações especiais.',
      'Tal entendimento produz efeitos diretos na composição da remuneração e dos encargos.',
    ],
  },
  processual_trabalho: {
    negative: [
      'com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias',
      'com deserção imediata do apelo ou preclusão do direito de impugnação pela parte interessada',
      'sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória',
      'com afastamento das normas processuais comuns diante da disciplina própria da execução laboral',
    ],
    permissive: [
      'com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo',
      'com processamento imediato do incidente nos mesmos autos e suspensão integral da execução',
      'com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau',
      'com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária',
    ],
    general: [
      'observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa',
      'em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral',
      'sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho',
      'com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal',
    ],
    sentences: [
      'Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho.',
      'O descumprimento da formalidade impede o exame do mérito pelo órgão recursal trabalhista.',
      'Tal disciplina reflete a autonomia procedimental própria do processo judiciário do trabalho.',
    ],
  },
  tributario: {
    negative: [
      'em observância ao princípio da estrita legalidade tributária e da tipicidade cerrada fiscal',
      'sem configuração de hipótese de suspensão da exigibilidade nem de exclusão do crédito fiscal',
      'com vedação à analogia ou equidade para exigir tributo ou dispensar crédito sem previsão legal',
      'com impedimento à fruição imediata de imunidade ou isenção condicionada no caso concreto',
    ],
    permissive: [
      'com legitimação do lançamento de ofício e inscrição imediata do débito em dívida ativa',
      'com exigibilidade imediata do tributo no mesmo exercício financeiro sem anterioridade',
      'com responsabilidade solidária automática dos sócios e administradores da pessoa jurídica',
      'com possibilidade de instituição ou majoração de alíquota mediante ato normativo infralegal',
    ],
    general: [
      'observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais',
      'com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal',
      'sujeita à repartição constitucional de receitas e à competência tributária do ente federado',
      'com preservação da natureza jurídica específica determinada pelo respectivo fato gerador',
    ],
    sentences: [
      'Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.',
      'A definição impacta diretamente os limites de cobrança e as garantias do contribuinte.',
      'Tal critério determina a incidência tributária e a competência ativa do ente tributante.',
    ],
  },
  empresarial: {
    negative: [
      'em proteção à autonomia patrimonial societária e à segurança das relações mercantis',
      'com afastamento da responsabilidade pessoal dos sócios sem prévia demonstração de abuso',
      'sem produção de efeitos oponíveis contra terceiros de boa-fé nem habilitação privilegiada',
      'com inaplicabilidade automática dos efeitos falimentares fora das hipóteses legais taxativas',
    ],
    permissive: [
      'com produção de efeitos cambiários autônomos e literais para execução contra coobrigados',
      'com desconsideração direta da personalidade jurídica sem instauração prévia de incidente',
      'com exclusão integral do crédito garantido dos efeitos da recuperação judicial em curso',
      'com livre alienação e circulação do título ou participação societária entre os interessados',
    ],
    general: [
      'observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações',
      'em consonância com a preservação da empresa e a função social da atividade econômica',
      'sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal',
      'com manutenção da estrutura de governança societária e da limitação de responsabilidade',
    ],
    sentences: [
      'Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.',
      'Os efeitos da medida vinculam os administradores e os credores sujeitos ao concurso.',
      'Tal entendimento preserva o regime próprio das obrigações empresariais e cambiárias.',
    ],
  },
  etica: {
    negative: [
      'sob pena de configuração de infração ético-disciplinar apurável no órgão competente',
      'com vedação expressa à mercantilização da atividade e à captação indevida de clientela',
      'sem possibilidade de atuação concomitante diante do impedimento estatutário aplicável',
      'em observância rigorosa aos deveres institucionais e às normas disciplinares da categoria',
    ],
    permissive: [
      'com autonomia plena do exercício profissional dentro do regime estatutário da advocacia',
      'sem necessidade de prévia autorização da Seccional competente ou deliberação do conselho',
      'com validação imediata dos atos profissionais independentemente de formalidade complementar',
      'com pleno reconhecimento institucional pela seccional de inscrição originária ou suplementar',
    ],
    general: [
      'observados os deveres de urbanidade, lealdade processual e moderação do estatuto profissional',
      'em conformidade com as regras de inscrição, licenciamento e fiscalização da seccional local',
      'sujeita ao controle administrativo e disciplinar previsto no regulamento profissional vigente',
      'em consonância com as diretrizes institucionais que disciplinam o exercício regular da profissão',
    ],
    sentences: [
      'Essa norma rege a atuação profissional e a responsabilidade disciplinar do inscrito.',
      'A observância desse parâmetro é fiscalizada diretamente pelo Conselho Seccional competente.',
      'Tal conduta repercute na regularidade estatutária dos atos praticados pelo profissional.',
    ],
  },
  consumidor: {
    negative: [
      'com configuração de prática abusiva e nulidade absoluta em face da vulnerabilidade contratual',
      'com afastamento de qualquer cláusula que exonere ou atenue o dever legal de indenizar',
      'sem possibilidade de transferir os riscos da atividade econômica ao consumidor final',
      'com vedação à cobrança ou restrição cadastral sem prévia comunicação formal regular',
    ],
    permissive: [
      'com responsabilidade objetiva e solidária de todos os integrantes da cadeia de fornecimento',
      'com autorização para inversão do ônus da prova diante da verossimilhança ou hipossuficiência',
      'com afastamento do dever reparatório mediante comprovação de culpa concorrente de terceiro',
      'com validação da estipulação padrão independentemente de destaque expresso no contrato',
    ],
    general: [
      'em consonância com a boa-fé objetiva, transparência e equilíbrio nas relações de consumo',
      'observados os prazos específicos para reclamação de vícios e pretensão reparatória por defeito',
      'com proteção à legítima expectativa de segurança e adequação do produto no mercado',
      'sujeita ao controle administrativo e judicial de cláusulas abusivas no microssistema',
    ],
    sentences: [
      'Essa proteção orienta a interpretação dos contratos de adesão e a oferta ao mercado.',
      'A responsabilidade civil decorrente dessa relação apura-se no microssistema consumerista.',
      'Tal critério define o alcance dos deveres anexos de informação e segurança ao destinatário.',
    ],
  },
  ambiental: {
    negative: [
      'em consonância com os princípios da prevenção, precaução e vedação ao retrocesso ecológico',
      'com proibição de supressão ou exploração da área sem prévio licenciamento ambiental válido',
      'sem admissão de fato consumado ou boa-fé para afastar o dever de recuperação do dano',
      'com impossibilidade de mera compensação pecuniária quando viável a restauração específica',
    ],
    permissive: [
      'com autorização para implantação do empreendimento independentemente de estudo prévio de impacto',
      'com responsabilidade civil ambiental objetiva e solidária sob a modalidade de risco integral',
      'sem necessidade de manifestação técnica do órgão ambiental diante de urgência econômica local',
      'com validação da transferência do passivo ambiental ao poder público por declaração unilateral',
    ],
    general: [
      'observada a competência comum material dos entes federativos para fiscalização e proteção',
      'com repercussão autônoma e cumulativa nas esferas administrativa, cível e penal ambiental',
      'sujeita ao regime constitucional de bem de uso comum do povo e equidade intergeracional',
      'com preservação da imprescritibilidade da pretensão voltada à reparação do dano ecológico',
    ],
    sentences: [
      'Essa exigência vincula tanto empreendimentos privados quanto obras executadas pelo poder público.',
      'A tutela ambiental incide de forma cumulativa sobre a prevenção e a reparação integral.',
      'Tal regime jurídico reflete a proteção constitucional atribuída aos recursos ecológicos.',
    ],
  },
  eca: {
    negative: [
      'em observância absoluta à proteção integral e ao melhor interesse da criança e do adolescente',
      'com vedação à medida restritiva de liberdade fora das hipóteses taxativas previstas em lei',
      'sem admissão de exposição indevida da identidade do menor ou redução de suas garantias',
      'com impossibilidade de afastamento definitivo do convívio familiar sem ordem judicial',
    ],
    permissive: [
      'com prioridade absoluta de atendimento e oitiva regular na instância protetiva ou judicial',
      'com autorização para atuação autônoma do órgão tutelar na aplicação imediata da medida',
      'sem exigência de estágio prévio de convivência ou habilitação diante de consentimento informal',
      'com cumprimento imediato de medida socioeducativa sem limite máximo legal de internação',
    ],
    general: [
      'considerada a condição peculiar de pessoa em desenvolvimento e o convívio familiar protegido',
      'observadas as atribuições próprias entre Conselho Tutelar, Ministério Público e Judiciário',
      'sujeita à revisão periódica obrigatória das medidas protetivas e socioeducativas aplicadas',
      'com garantia de assistência jurídica integral, contraditório e ampla defesa no procedimento',
    ],
    sentences: [
      'Essa diretriz assegura a prioridade absoluta no atendimento protetivo e jurisdicional.',
      'A medida deve respeitar o princípio da proporcionalidade e a condição de pessoa em formação.',
      'Tal competência delimita a atuação integrada da rede de garantia dos direitos infantojuvenis.',
    ],
  },
  direitos_humanos: {
    negative: [
      'em observância à vedação ao retrocesso e aos tratados internacionais de proteção ratificados',
      'com incompatibilidade entre restrição estatal desproporcional e controle de convencionalidade',
      'sem admissão de norma interna posterior para descumprir obrigação internacional assumida',
      'com impedimento à aplicação de sanções ou medidas contrárias à dignidade da pessoa humana',
    ],
    permissive: [
      'com aplicabilidade imediata e força vinculante das garantias fundamentais no plano interno',
      'com autorização de acionamento direto das cortes internacionais sem requisito prévio',
      'com equivalência constitucional automática de qualquer declaração subscrita pelo Executivo',
      'com possibilidade de mitigação temporária da garantia por simples decreto regulamentar',
    ],
    general: [
      'observada a complementariedade entre o sistema global e o sistema interamericano de proteção',
      'em sintonia com a universalidade, indivisibilidade e inalienabilidade dos direitos humanos',
      'sujeita à responsabilidade internacional objetiva do Estado por violações de seus agentes',
      'com prevalência da interpretação mais favorável à efetiva proteção da pessoa humana',
    ],
    sentences: [
      'Essa diretriz orienta o diálogo entre a jurisdição interna e os órgãos internacionais.',
      'A interpretação conforme a dignidade humana prevalece na colisão aparente de normas.',
      'Tal obrigação vincula os três Poderes da República no cumprimento de tratados vigentes.',
    ],
  },
  internacional: {
    negative: [
      'em respeito à igualdade soberana dos Estados e ao princípio da não intervenção interna',
      'com eficácia interna condicionada à observância integral do rito constitucional de incorporação',
      'sem execução forçada automática de decisão estrangeira antes de prévia homologação judicial',
      'com afastamento da lei material estrangeira quando contrariar a soberania e a ordem pública',
    ],
    permissive: [
      'com eficácia jurídica imediata no território nacional independentemente de referendo legislativo',
      'com cooperação jurídica e extradição viabilizadas mediante simples solicitação diplomática direta',
      'com prevalência do critério da nacionalidade originária sobre a lei do domicílio da pessoa',
      'com renúncia tácita à imunidade de jurisdição e de execução em demandas patrimoniais',
    ],
    general: [
      'observadas as regras de conexão aplicáveis e os tratados multilaterais vigentes na matéria',
      'em harmonia com os costumes internacionais consolidados e os princípios gerais de direito',
      'sujeita à jurisdição contenciosa consensual e às prerrogativas diplomáticas reconhecidas',
      'com preservação das garantias asseguradas pelo estatuto migratório aos residentes estrangeiros',
    ],
    sentences: [
      'Essa solução disciplina os conflitos de leis no espaço e a cooperação interestatal.',
      'A eficácia territorial da medida observa os limites da soberania e da reciprocidade.',
      'Tal critério orienta a aplicação das normas internacionais perante a jurisdição nacional.',
    ],
  },
  eleitoral: {
    negative: [
      'em estrita observância à soberania popular, à legitimidade do pleito e à isonomia eleitoral',
      'com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade',
      'sem possibilidade de registro ou exercício do mandato diante da causa de inelegibilidade verificada',
      'com cassação do registro ou diploma e imposição de multa após regular instrução processual',
    ],
    permissive: [
      'com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial',
      'sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado',
      'com validação da propaganda antecipada independentemente de pedido explícito de voto',
      'com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão',
    ],
    general: [
      'observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial',
      'sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder',
      'em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais',
      'com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos',
    ],
    sentences: [
      'Essa regra garante a paridade de armas e a regularidade do processo democrático.',
      'A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral.',
      'Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito.',
    ],
  },
  previdenciario: {
    negative: [
      'em razão do princípio da prévia fonte de custeio total e do caráter contributivo obrigatório',
      'com vedação à concessão ou majoração de benefício sem cumprimento integral de carência e idade',
      'sem cômputo de tempo fictício nem possibilidade de acumulação indevida vedada em lei',
      'com perda da qualidade de segurado após o esgotamento integral do período de graça legal',
    ],
    permissive: [
      'com concessão imediata do benefício independentemente de comprovação de carência mínima',
      'com acumulação integral e irrestrita das prestações sem redução proporcional de valor',
      'com garantia de paridade e integralidade remuneratória a todos os segurados do regime geral',
      'com livre aproveitamento ou desaposentação sem sujeição às regras constitucionais de transição',
    ],
    general: [
      'observado o equilíbrio financeiro e atuarial exigido para a sustentabilidade do sistema',
      'com repercussão direta sobre o cálculo do salário de benefício e a data de início do pagamento',
      'sujeita às regras de filiação obrigatória ou facultativa e aos prazos decadenciais próprios',
      'com preservação da irredutibilidade do valor nominal dos benefícios mantidos pelo regime',
    ],
    sentences: [
      'Essa sistemática assegura a sustentabilidade financeira do regime protetivo correspondente.',
      'O preenchimento dos requisitos verifica-se segundo a legislação vigente na data do direito.',
      'Tal critério incide diretamente sobre o enquadramento do segurado e o cálculo mensal.',
    ],
  },
  financeiro: {
    negative: [
      'em obediência aos princípios da legalidade orçamentária, anualidade e responsabilidade fiscal',
      'com vedação à realização de despesa ou abertura de crédito sem autorização legislativa prévia',
      'sem vinculação genérica da receita de impostos a órgão ou despesa fora das exceções legais',
      'com proibição de operações de crédito ou concessão de garantias acima dos limites fiscais',
    ],
    permissive: [
      'com remanejamento e suplementação orçamentária direta por ato exclusivo do Poder Executivo',
      'sem exigência de estimativa de impacto financeiro e compensação prévia para benefício fiscal',
      'com abertura direta de créditos extraordinários para custeio ordinário permanente de pessoal',
      'com execução integral da despesa pública independentemente de prévio empenho e liquidação',
    ],
    general: [
      'observada a integração sistemática entre plano plurianual, diretrizes e orçamento anual',
      'sujeita ao controle interno administrativo e à fiscalização contábil dos tribunais de contas',
      'com observância estrita dos limites de despesa com pessoal e equilíbrio das contas públicas',
      'com respeito à ordem cronológica constitucional para quitação de débitos em precatório',
    ],
    sentences: [
      'Essa norma garante transparência e equilíbrio intertemporal na gestão dos recursos públicos.',
      'A execução orçamentária deve observar os estágios legais e os limites de endividamento.',
      'Tal disciplina vincula a elaboração e a execução fiscal em todas as esferas federativas.',
    ],
  },
  filosofia: {
    negative: [
      'com rejeição de qualquer vinculação necessária entre validade formal e critérios morais materiais',
      'com afastamento da fundamentação jusnaturalista metafísica para legitimação da norma estatal',
      'sem reconhecimento de força jurídica aos costumes sociais não positivados pelo reconhecimento formal',
      'com recusa à discricionariedade interpretativa do julgador diante de casos difíceis sem regra unívoca',
    ],
    permissive: [
      'com primazia da racionalidade prática e da integridade interpretativa na reconstrução do direito',
      'com reconhecimento da força normativa direta dos princípios morais na validade jurídica',
      'com fundamentação da obrigatoriedade normativa na adesão racional e no consenso discursivo',
      'com superação crítica da literalidade legal em favor da equidade e da justiça material concreta',
    ],
    general: [
      'com articulação entre validade formal, eficácia social e legitimidade axiológica do direito',
      'no interior da tradição teórica voltada à distinção metodológica entre ser e dever-ser normativo',
      'como expressão sistemática das relações entre poder soberano, norma, interpretação e justiça',
      'conforme o modelo epistemológico estruturado para explicar coerência e completude do sistema',
    ],
    sentences: [
      'Essa concepção fundamenta a crítica contemporânea sobre os limites entre Direito e Moral.',
      'A análise teórica evidencia o papel da argumentação racional na justificação das decisões.',
      'Tal perspectiva orienta a compreensão estrutural das normas e da autoridade interpretativa.',
    ],
  },
};

function mapSubjectToBucketKey(subject: string): string {
  const s = (subject || '').toLowerCase();
  if (s.includes('ética') || s.includes('etica')) return 'etica';
  if (s.includes('tribut')) return 'tributario';
  if (s.includes('processual penal')) return 'processual_penal';
  if (s.includes('penal')) return 'penal';
  if (s.includes('processual civil')) return 'processual_civil';
  if (s.includes('civil')) return 'civil';
  if (s.includes('processual do trabalho')) return 'processual_trabalho';
  if (s.includes('trabalho')) return 'trabalho';
  if (s.includes('constitucional')) return 'constitucional';
  if (s.includes('administrativo')) return 'administrativo';
  if (s.includes('empresarial')) return 'empresarial';
  if (s.includes('consumidor')) return 'consumidor';
  if (s.includes('ambiental')) return 'ambiental';
  if (s.includes('criança') || s.includes('eca')) return 'eca';
  if (s.includes('direitos humanos')) return 'direitos_humanos';
  if (s.includes('internacional')) return 'internacional';
  if (s.includes('eleitoral')) return 'eleitoral';
  if (s.includes('previdenc')) return 'previdenciario';
  if (s.includes('financeiro')) return 'financeiro';
  if (s.includes('filosofia')) return 'filosofia';
  return 'constitucional';
}

function detectPolarity(text: string): 'negative' | 'permissive' | 'general' {
  const lower = text.toLowerCase();
  if (
    /\b(não|nem|nunca|jamais|vedad[oa]|proibid[oa]|impossível|incabível|inaplicável|isento|dispensad[oa]|nulo|nula|anulável|inconstitucional|ilegal|ilícit[oa]|ausência|inexistência|proibição|vedação|exclusão|isenção|nulidade|desnecessário|prescinde|inadmissível|recusar)\b/.test(
      lower
    )
  ) {
    return 'negative';
  }
  if (
    /\b(pode|poderá|podem|lícito|válido|válida|permitid[oa]|admitid[oa]|autorizad[oa]|facultado|deve|deverá|obrigatório|obrigatória|tem direito|assegura|exige|somente|exclusivamente|sempre|pleno|integral)\b/.test(
      lower
    )
  ) {
    return 'permissive';
  }
  return 'general';
}

function hasSemanticOverlapOrClash(baseText: string, candidateClause: string): boolean {
  const b = baseText.toLowerCase();
  const c = candidateClause.toLowerCase();

  const words = b.replace(/[^a-záàâãéêíóôõúç\s]/g, '').split(/\s+/).filter(w => w.length >= 6);
  const tailWords = words.slice(-4);
  let overlapCount = 0;
  for (const w of tailWords) {
    if (c.includes(w)) overlapCount++;
  }
  if (overlapCount >= 2) return true;

  if (c.includes('responsabilização') && b.includes('isento de pena')) return true;
  if (c.includes('prescri') && b.includes('imprescritíve')) return true;
  if (c.includes('deserção') && !/\b(recurso|apelo|preparo|custas|depósito)\b/.test(b)) return true;

  return false;
}

function pickBestClause(
  wrongText: string,
  subject: string,
  seed: number,
  usedClauses: Set<string>,
  targetMinLen: number,
  mustReachTarget: boolean
): string {
  const bucketKey = mapSubjectToBucketKey(subject);
  const bucket = DOMAIN_CLAUSES[bucketKey] || DOMAIN_CLAUSES.constitucional;
  const polarity = detectPolarity(wrongText);

  const baseClean = wrongText.trim().replace(/\.$/, '');
  const hasHeavyTail = (baseClean.match(/,/g) || []).length >= 2 || /;|\bpois\b|\bporque\b/i.test(baseClean);

  let result: string;
  if (hasHeavyTail) {
    const sPool = bucket.sentences.filter(s => !usedClauses.has(s) && !hasSemanticOverlapOrClash(baseClean, s));
    const activeSPool = sPool.length > 0 ? sPool : bucket.sentences;
    const chosenS = activeSPool[seed % activeSPool.length];
    usedClauses.add(chosenS);
    result = cleanupPunctuation(`${baseClean}. ${chosenS}`);
  } else {
    const orderedPool = [...bucket[polarity], ...bucket.general];
    const needChars = Math.max(0, targetMinLen - baseClean.length - 2);

    const candidates = orderedPool.filter(cl => !usedClauses.has(cl) && !hasSemanticOverlapOrClash(baseClean, cl));
    const fallbackPool = orderedPool.filter(cl => !usedClauses.has(cl));
    const pool = candidates.length > 0 ? candidates : fallbackPool.length > 0 ? fallbackPool : orderedPool;

    const lengthFit = pool.filter(
      cl => cl.length >= Math.min(needChars, 75) && baseClean.length + cl.length + 3 <= Math.max(255, targetMinLen + 45)
    );
    const activePool = lengthFit.length > 0 ? lengthFit : pool;

    const chosen = activePool[seed % activePool.length];
    usedClauses.add(chosen);

    result = cleanupPunctuation(`${baseClean}, ${chosen}.`);
  }

  if (mustReachTarget && !hasHeavyTail && result.length < targetMinLen) {
    const sPool = bucket.sentences.filter(s => !usedClauses.has(s) && !hasSemanticOverlapOrClash(result, s));
    if (sPool.length > 0) {
      const extraS = sPool[(seed + 3) % sPool.length];
      if (result.length + extraS.length + 1 <= Math.max(300, targetMinLen + 45)) {
        usedClauses.add(extraS);
        result = cleanupPunctuation(`${result} ${extraS}`);
      }
    }
  }

  return result;
}

export function rebalanceQuestionOptions(q: LegalQuestion): {
  options: LegalQuestion['options'];
  stats: RebalanceStats;
} {
  const corrOpt = q.options.find(o => o.letter === q.correctAnswer);
  if (!corrOpt) {
    return {
      options: q.options,
      stats: { allShort: false, origCorrLen: 0, newCorrLen: 0, origAvgWrongLen: 0, newAvgWrongLen: 0 },
    };
  }

  const wrongOpts = q.options.filter(o => o.letter !== q.correctAnswer);
  const origCorrLen = corrOpt.text.length;
  const origWrongLens = wrongOpts.map(w => w.text.length);
  const origAvgWrongLen = origWrongLens.reduce((a, b) => a + b, 0) / Math.max(1, origWrongLens.length);
  const maxOrigWrongLen = Math.max(0, ...origWrongLens);

  const isAllShort = origCorrLen <= 85 && maxOrigWrongLen <= 95;
  const asksForCitation =
    /\b(?:quais|qual)\s+(?:o\s+n[úu]mero\s+d[oa]\s+|a\s+|o\s+|os\s+|as\s+)?(?:s[úu]mulas?|artigos?|dispositivos?|emendas?|temas?|incisos?|lei\s+n[º°])\b/i.test(
      q.statement || ''
    ) || /\bcom base:\s*$/i.test((q.statement || '').trim());
  const hasItemList =
    /^(?:Apenas\s+o[s]?\s+iten[s]?|Somente\s+o[s]?\s+iten[s]?|Todos\s+os\s+itens|Nenhum\s+dos\s+itens)\b/i.test(
      corrOpt.text.trim()
    ) && wrongOpts.some(w => /\b(iten[s]?|ambos|nenhum|todos)\b/i.test(w.text));

  const newCorrText = condenseCorrectOption(corrOpt.text, q.statement || '', {
    isAllShort,
    asksForCitation,
    hasItemList,
  });

  const qHash = stableHash(q.id || q.statement);
  const usedClauses = new Set<string>();

  const cleanedWrongs = wrongOpts.map(w => {
    let wt = stripAuthorDraftNotesAndPunctuation(w.text);
    wt = lowerEditorialCaps(wt);
    if (!isAllShort && !hasItemList) {
      wt = stripCitationsAndGlosses(wt, !asksForCitation);
    } else {
      if (!asksForCitation) wt = wt.replace(CITATION_PAREN_RE, ' ');
      wt = cleanupPunctuation(wt);
    }
    return { letter: w.letter, text: wt };
  });

  if (!isAllShort && !hasItemList && newCorrText.length >= 80) {
    const bucketRoll = qHash % 100;
    const ensureWrongLonger = bucketRoll < 74;
    const longestWrongIdx = qHash % cleanedWrongs.length;

    for (let idx = 0; idx < cleanedWrongs.length; idx++) {
      const w = cleanedWrongs[idx];
      const isPrimaryLonger = ensureWrongLonger && idx === longestWrongIdx;
      const isSecondaryNear = ensureWrongLonger && idx === (longestWrongIdx + 1) % cleanedWrongs.length;

      let targetMin: number;
      if (isPrimaryLonger) {
        targetMin = newCorrText.length + 10;
      } else if (isSecondaryNear) {
        targetMin = Math.max(145, newCorrText.length - 6);
      } else {
        targetMin = Math.max(130, newCorrText.length - 25);
      }

      if (w.text.length < targetMin) {
        w.text = pickBestClause(w.text, q.subject, qHash + idx * 17, usedClauses, targetMin, isPrimaryLonger);
      }
    }
  }

  const wrongMap = new Map(cleanedWrongs.map(w => [w.letter, w.text]));
  const finalOptions = q.options.map(o => ({
    letter: o.letter,
    text: o.letter === q.correctAnswer ? newCorrText : wrongMap.get(o.letter) || o.text,
  }));

  const newWrongLens = finalOptions.filter(o => o.letter !== q.correctAnswer).map(o => o.text.length);
  const newAvgWrongLen = newWrongLens.reduce((a, b) => a + b, 0) / Math.max(1, newWrongLens.length);

  return {
    options: finalOptions,
    stats: {
      allShort: isAllShort || hasItemList,
      origCorrLen,
      newCorrLen: newCorrText.length,
      origAvgWrongLen,
      newAvgWrongLen,
    },
  };
}
