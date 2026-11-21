import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import type { LegalQuestion } from '../src/types';
import { expandCompactTuples, type CompactTuple } from './questionFactory';

import { ETICA_QUESTIONS } from '../src/data/questions/etica';
import { TRIBUTARIO_QUESTIONS } from '../src/data/questions/tributario';
import { PENAL_QUESTIONS } from '../src/data/questions/penal';
import { CONSTITUCIONAL_QUESTIONS } from '../src/data/questions/constitucional';
import { ADMINISTRATIVO_QUESTIONS } from '../src/data/questions/administrativo';
import { CIVIL_QUESTIONS } from '../src/data/questions/civil';
import { PROCESSUAL_CIVIL_QUESTIONS } from '../src/data/questions/processualCivil';
import { PROCESSUAL_PENAL_QUESTIONS } from '../src/data/questions/processualPenal';
import { TRABALHO_QUESTIONS } from '../src/data/questions/trabalho';
import { EMPRESARIAL_QUESTIONS } from '../src/data/questions/empresarial';
import { ESPECIAIS_QUESTIONS } from '../src/data/questions/especiais';

import { ETICA_EXTRA_QUESTIONS } from '../src/data/questions/extra/eticaExtra';
import { TRIBUTARIO_EXTRA_QUESTIONS } from '../src/data/questions/extra/tributarioExtra';
import { PENAL_EXTRA_QUESTIONS } from '../src/data/questions/extra/penalExtra';
import { CONSTITUCIONAL_EXTRA_QUESTIONS } from '../src/data/questions/extra/constitucionalExtra';
import { ADMINISTRATIVO_EXTRA_QUESTIONS } from '../src/data/questions/extra/administrativoExtra';
import { CIVIL_EXTRA_QUESTIONS } from '../src/data/questions/extra/civilExtra';
import { PROCESSUAL_CIVIL_EXTRA_QUESTIONS } from '../src/data/questions/extra/processualCivilExtra';
import { PROCESSUAL_PENAL_EXTRA_QUESTIONS } from '../src/data/questions/extra/processualPenalExtra';
import { TRABALHO_EXTRA_QUESTIONS } from '../src/data/questions/extra/trabalhoExtra';
import { EMPRESARIAL_EXTRA_QUESTIONS } from '../src/data/questions/extra/empresarialExtra';
import { ESPECIAIS_EXTRA_QUESTIONS } from '../src/data/questions/extra/especiaisExtra';

import { ETICA_PART1 } from './corpus/eticaPart1';
import { ETICA_PART2 } from './corpus/eticaPart2';
import { TRIBUTARIO_PART1 } from './corpus/tributarioPart1';
import { TRIBUTARIO_PART2 } from './corpus/tributarioPart2';
import { PENAL_PART1 } from './corpus/penalPart1';
import { PENAL_PART2 } from './corpus/penalPart2';
import { PENAL_PART3 } from './corpus/penalPart3';
import { CONSTITUCIONAL_PART1 } from './corpus/constitucionalPart1';
import { CONSTITUCIONAL_PART2 } from './corpus/constitucionalPart2';
import { CONSTITUCIONAL_PART3 } from './corpus/constitucionalPart3';
import { ADMINISTRATIVO_PART1 } from './corpus/administrativoPart1';
import { ADMINISTRATIVO_PART2 } from './corpus/administrativoPart2';
import { ADMINISTRATIVO_PART3 } from './corpus/administrativoPart3';
import { CIVIL_PART1 } from './corpus/civilPart1';
import { CIVIL_PART2 } from './corpus/civilPart2';
import { CIVIL_PART3 } from './corpus/civilPart3';
import { PROC_CIVIL_PART1 } from './corpus/procCivilPart1';
import { PROC_CIVIL_PART2 } from './corpus/procCivilPart2';
import { PROC_CIVIL_PART3 } from './corpus/procCivilPart3';
import { PROC_PENAL_PART1 } from './corpus/procPenalPart1';
import { PROC_PENAL_PART2 } from './corpus/procPenalPart2';
import { TRABALHO_PART1 } from './corpus/trabalhoPart1';
import { TRABALHO_PART2 } from './corpus/trabalhoPart2';
import { TRABALHO_PART3 } from './corpus/trabalhoPart3';
import { PROC_TRABALHO_PART1 } from './corpus/procTrabalhoPart1';
import { PROC_TRABALHO_PART2 } from './corpus/procTrabalhoPart2';
import { PROC_TRABALHO_PART3 } from './corpus/procTrabalhoPart3';
import { PROC_TRABALHO_PART4 } from './corpus/procTrabalhoPart4';
import { EMPRESARIAL_PART1 } from './corpus/empresarialPart1';
import { EMPRESARIAL_PART2 } from './corpus/empresarialPart2';
import { EMPRESARIAL_PART3 } from './corpus/empresarialPart3';
import { ESPECIAIS_PART1_BY_SUBJECT } from './corpus/especiaisPart1';
import { DH_PART1 } from './corpus/dhPart1';
import { DH_PART2 } from './corpus/dhPart2';
import { CONSUMIDOR_PART1 } from './corpus/consumidorPart1';
import { CONSUMIDOR_PART2 } from './corpus/consumidorPart2';
import { AMBIENTAL_PART1 } from './corpus/ambientalPart1';
import { AMBIENTAL_PART2 } from './corpus/ambientalPart2';
import { AMBIENTAL_PART3 } from './corpus/ambientalPart3';
import { AMBIENTAL_PART4 } from './corpus/ambientalPart4';
import { ECA_PART1 } from './corpus/ecaPart1';
import { ECA_PART2 } from './corpus/ecaPart2';
import { ECA_PART3 } from './corpus/ecaPart3';
import { INTERNACIONAL_PART1 } from './corpus/internacionalPart1';
import { INTERNACIONAL_PART2 } from './corpus/internacionalPart2';
import { INTERNACIONAL_PART3 } from './corpus/internacionalPart3';
import { ELEITORAL_PART1 } from './corpus/eleitoralPart1';
import { ELEITORAL_PART2 } from './corpus/eleitoralPart2';
import { ELEITORAL_PART3 } from './corpus/eleitoralPart3';
import { ELEITORAL_PART4 } from './corpus/eleitoralPart4';
import { PREVIDENCIARIO_PART1 } from './corpus/previdenciarioPart1';
import { PREVIDENCIARIO_PART2 } from './corpus/previdenciarioPart2';
import { PREVIDENCIARIO_PART3 } from './corpus/previdenciarioPart3';
import { PREVIDENCIARIO_PART4 } from './corpus/previdenciarioPart4';
import { FINANCEIRO_PART1 } from './corpus/financeiroPart1';
import { FINANCEIRO_PART2 } from './corpus/financeiroPart2';
import { FINANCEIRO_PART3 } from './corpus/financeiroPart3';
import { FINANCEIRO_PART4 } from './corpus/financeiroPart4';
import { FILOSOFIA_PART1 } from './corpus/filosofiaPart1';
import { FILOSOFIA_PART2 } from './corpus/filosofiaPart2';
import { FILOSOFIA_PART3 } from './corpus/filosofiaPart3';
import { FILOSOFIA_PART4 } from './corpus/filosofiaPart4';

const MINIMUM_PER_DISCIPLINE = 100;

interface DisciplineMigrationSpec {
  subject: string;
  fileSlug: string;
  exportName: string;
  idPrefix: string;
  defaultCode: string;
  tuples: CompactTuple[];
}

const DISCIPLINE_SPECS: DisciplineMigrationSpec[] = [
  {
    subject: 'Ética Profissional e Estatuto da OAB',
    fileSlug: 'eticaExpanded',
    exportName: 'ETICA_EXPANDED_QUESTIONS',
    idPrefix: 'mig_etica',
    defaultCode: 'Estatuto da OAB (Lei nº 8.906/94) / CED',
    tuples: [...ETICA_PART1, ...ETICA_PART2],
  },
  {
    subject: 'Direito Tributário',
    fileSlug: 'tributarioExpanded',
    exportName: 'TRIBUTARIO_EXPANDED_QUESTIONS',
    idPrefix: 'mig_trib',
    defaultCode: 'CTN / Constituição Federal de 1988',
    tuples: [...TRIBUTARIO_PART1, ...TRIBUTARIO_PART2],
  },
  {
    subject: 'Direito Penal',
    fileSlug: 'penalExpanded',
    exportName: 'PENAL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_penal',
    defaultCode: 'Código Penal',
    tuples: [...PENAL_PART1, ...PENAL_PART2, ...PENAL_PART3],
  },
  {
    subject: 'Direito Constitucional',
    fileSlug: 'constitucionalExpanded',
    exportName: 'CONSTITUCIONAL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_const',
    defaultCode: 'Constituição Federal de 1988',
    tuples: [...CONSTITUCIONAL_PART1, ...CONSTITUCIONAL_PART2, ...CONSTITUCIONAL_PART3],
  },
  {
    subject: 'Direito Administrativo',
    fileSlug: 'administrativoExpanded',
    exportName: 'ADMINISTRATIVO_EXPANDED_QUESTIONS',
    idPrefix: 'mig_adm',
    defaultCode: 'Lei nº 14.133/2021 / CF/88',
    tuples: [...ADMINISTRATIVO_PART1, ...ADMINISTRATIVO_PART2, ...ADMINISTRATIVO_PART3],
  },
  {
    subject: 'Direito Civil',
    fileSlug: 'civilExpanded',
    exportName: 'CIVIL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_civil',
    defaultCode: 'Código Civil',
    tuples: [...CIVIL_PART1, ...CIVIL_PART2, ...CIVIL_PART3],
  },
  {
    subject: 'Direito Processual Civil',
    fileSlug: 'processualCivilExpanded',
    exportName: 'PROCESSUAL_CIVIL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_cpc',
    defaultCode: 'Código de Processo Civil (CPC/2015)',
    tuples: [...PROC_CIVIL_PART1, ...PROC_CIVIL_PART2, ...PROC_CIVIL_PART3],
  },
  {
    subject: 'Direito Processual Penal',
    fileSlug: 'processualPenalExpanded',
    exportName: 'PROCESSUAL_PENAL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_cpp',
    defaultCode: 'Código de Processo Penal',
    tuples: [...PROC_PENAL_PART1, ...PROC_PENAL_PART2],
  },
  {
    subject: 'Direito do Trabalho',
    fileSlug: 'trabalhoExpanded',
    exportName: 'TRABALHO_EXPANDED_QUESTIONS',
    idPrefix: 'mig_trab',
    defaultCode: 'CLT / Constituição Federal',
    tuples: [...TRABALHO_PART1, ...TRABALHO_PART2, ...TRABALHO_PART3],
  },
  {
    subject: 'Direito Processual do Trabalho',
    fileSlug: 'processualTrabalhoExpanded',
    exportName: 'PROCESSUAL_TRABALHO_EXPANDED_QUESTIONS',
    idPrefix: 'mig_ptra',
    defaultCode: 'CLT / CPC/2015',
    tuples: [...PROC_TRABALHO_PART1, ...PROC_TRABALHO_PART2, ...PROC_TRABALHO_PART3, ...PROC_TRABALHO_PART4],
  },
  {
    subject: 'Direito Empresarial',
    fileSlug: 'empresarialExpanded',
    exportName: 'EMPRESARIAL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_empr',
    defaultCode: 'Código Civil / Lei nº 11.101/2005',
    tuples: [...EMPRESARIAL_PART1, ...EMPRESARIAL_PART2, ...EMPRESARIAL_PART3],
  },
  {
    subject: 'Direitos Humanos',
    fileSlug: 'direitosHumanosExpanded',
    exportName: 'DIREITOS_HUMANOS_EXPANDED_QUESTIONS',
    idPrefix: 'mig_dh',
    defaultCode: 'CF/88 / Pacto de São José da Costa Rica',
    tuples: [...(ESPECIAIS_PART1_BY_SUBJECT['Direitos Humanos'] || []), ...DH_PART1, ...DH_PART2],
  },
  {
    subject: 'Direito do Consumidor',
    fileSlug: 'consumidorExpanded',
    exportName: 'CONSUMIDOR_EXPANDED_QUESTIONS',
    idPrefix: 'mig_cdc',
    defaultCode: 'Código de Defesa do Consumidor (Lei nº 8.078/90)',
    tuples: [...(ESPECIAIS_PART1_BY_SUBJECT['Direito do Consumidor'] || []), ...CONSUMIDOR_PART1, ...CONSUMIDOR_PART2],
  },
  {
    subject: 'Direito Ambiental',
    fileSlug: 'ambientalExpanded',
    exportName: 'AMBIENTAL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_amb',
    defaultCode: 'CF/88 / Lei nº 6.938/1981',
    tuples: [...AMBIENTAL_PART1, ...AMBIENTAL_PART2, ...AMBIENTAL_PART3, ...AMBIENTAL_PART4],
  },
  {
    subject: 'Direito da Criança e do Adolescente (ECA)',
    fileSlug: 'ecaExpanded',
    exportName: 'ECA_EXPANDED_QUESTIONS',
    idPrefix: 'mig_eca',
    defaultCode: 'ECA (Lei nº 8.069/1990)',
    tuples: [...ECA_PART1, ...ECA_PART2, ...ECA_PART3],
  },
  {
    subject: 'Direito Internacional',
    fileSlug: 'internacionalExpanded',
    exportName: 'INTERNACIONAL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_intl',
    defaultCode: 'LINDB / CF/88 / Lei de Migração',
    tuples: [...INTERNACIONAL_PART1, ...INTERNACIONAL_PART2, ...INTERNACIONAL_PART3],
  },
  {
    subject: 'Direito Eleitoral',
    fileSlug: 'eleitoralExpanded',
    exportName: 'ELEITORAL_EXPANDED_QUESTIONS',
    idPrefix: 'mig_eleit',
    defaultCode: 'Código Eleitoral / Lei nº 9.504/1997',
    tuples: [...ELEITORAL_PART1, ...ELEITORAL_PART2, ...ELEITORAL_PART3, ...ELEITORAL_PART4],
  },
  {
    subject: 'Direito Previdenciário',
    fileSlug: 'previdenciarioExpanded',
    exportName: 'PREVIDENCIARIO_EXPANDED_QUESTIONS',
    idPrefix: 'mig_prev',
    defaultCode: 'Lei nº 8.213/1991 / EC 103/2019',
    tuples: [...PREVIDENCIARIO_PART1, ...PREVIDENCIARIO_PART2, ...PREVIDENCIARIO_PART3, ...PREVIDENCIARIO_PART4],
  },
  {
    subject: 'Direito Financeiro',
    fileSlug: 'financeiroExpanded',
    exportName: 'FINANCEIRO_EXPANDED_QUESTIONS',
    idPrefix: 'mig_fin',
    defaultCode: 'CF/88 / LRF (LC nº 101/2000) / Lei nº 4.320/1964',
    tuples: [...FINANCEIRO_PART1, ...FINANCEIRO_PART2, ...FINANCEIRO_PART3, ...FINANCEIRO_PART4],
  },
  {
    subject: 'Filosofia do Direito',
    fileSlug: 'filosofiaExpanded',
    exportName: 'FILOSOFIA_EXPANDED_QUESTIONS',
    idPrefix: 'mig_filo',
    defaultCode: 'Teoria Geral e Filosofia do Direito',
    tuples: [...FILOSOFIA_PART1, ...FILOSOFIA_PART2, ...FILOSOFIA_PART3, ...FILOSOFIA_PART4],
  },
];

const normalizeStatement = (s: string): string =>
  (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const hashStatement = (s: string): string =>
  crypto.createHash('sha256').update(normalizeStatement(s)).digest('hex').slice(0, 16);

function validateQuestion(q: LegalQuestion): string[] {
  const errors: string[] = [];
  if (!q.id?.trim()) errors.push('missing id');
  if (!q.subject?.trim()) errors.push('missing subject');
  if (!q.topic?.trim()) errors.push('missing topic');
  if (!q.statement?.trim()) errors.push('missing statement');
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push('options must have 4 items');
  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) errors.push(`invalid correctAnswer: ${q.correctAnswer}`);
  if (!Array.isArray(q.whyWrong) || q.whyWrong.length !== 3) errors.push('whyWrong must have 3 items');
  if (!q.justification?.trim()) errors.push('missing justification');
  if (!q.professorTip?.trim()) errors.push('missing professorTip');
  if (!['OAB', 'CONCURSO', 'FACULDADE'].includes(q.examType)) errors.push(`invalid examType: ${q.examType}`);
  if (!['Fácil', 'Médio', 'Difícil'].includes(q.difficulty)) errors.push(`invalid difficulty: ${q.difficulty}`);
  return errors;
}

function runMigration() {
  const baseQuestions: LegalQuestion[] = [
    ...ETICA_QUESTIONS,
    ...ETICA_EXTRA_QUESTIONS,
    ...TRIBUTARIO_QUESTIONS,
    ...TRIBUTARIO_EXTRA_QUESTIONS,
    ...PENAL_QUESTIONS,
    ...PENAL_EXTRA_QUESTIONS,
    ...CONSTITUCIONAL_QUESTIONS,
    ...CONSTITUCIONAL_EXTRA_QUESTIONS,
    ...ADMINISTRATIVO_QUESTIONS,
    ...ADMINISTRATIVO_EXTRA_QUESTIONS,
    ...CIVIL_QUESTIONS,
    ...CIVIL_EXTRA_QUESTIONS,
    ...PROCESSUAL_CIVIL_QUESTIONS,
    ...PROCESSUAL_CIVIL_EXTRA_QUESTIONS,
    ...PROCESSUAL_PENAL_QUESTIONS,
    ...PROCESSUAL_PENAL_EXTRA_QUESTIONS,
    ...TRABALHO_QUESTIONS,
    ...TRABALHO_EXTRA_QUESTIONS,
    ...EMPRESARIAL_QUESTIONS,
    ...EMPRESARIAL_EXTRA_QUESTIONS,
    ...ESPECIAIS_QUESTIONS,
    ...ESPECIAIS_EXTRA_QUESTIONS,
  ];

  const seenIds = new Set<string>(baseQuestions.map(q => q.id));
  const seenHashes = new Set<string>(baseQuestions.map(q => hashStatement(q.statement)));
  const baseCountBySubject: Record<string, number> = {};
  for (const q of baseQuestions) {
    baseCountBySubject[q.subject] = (baseCountBySubject[q.subject] || 0) + 1;
  }

  const outDir = path.resolve(process.cwd(), 'src/data/questions/extra/expanded');
  fs.mkdirSync(outDir, { recursive: true });

  const indexImports: string[] = [];
  const indexSpreadEntries: string[] = [];
  const indexMapEntries: string[] = [];

  let totalExpanded = 0;
  let totalErrors = 0;
  const underMinimum: Array<{ subject: string; total: number }> = [];

  for (const spec of DISCIPLINE_SPECS) {
    const rawExpanded = expandCompactTuples(spec.subject, spec.defaultCode, spec.idPrefix, spec.tuples);
    const uniqueExpanded: LegalQuestion[] = [];

    for (const q of rawExpanded) {
      const errs = validateQuestion(q);
      if (errs.length > 0) {
        totalErrors += 1;
        console.error(`[ERROR] ${spec.subject} / ${q.id}: ${errs.join(', ')}`);
        continue;
      }

      const stmtHash = hashStatement(q.statement);
      if (seenIds.has(q.id) || seenHashes.has(stmtHash)) {
        continue;
      }

      seenIds.add(q.id);
      seenHashes.add(stmtHash);
      uniqueExpanded.push(q);
    }

    const fileContent = [
      `// Arquivo gerado automaticamente por scripts/migrateQuestions.ts — NÃO editar manualmente.`,
      `import type { LegalQuestion } from '../../../../types';`,
      ``,
      `export const ${spec.exportName}: LegalQuestion[] = ${JSON.stringify(uniqueExpanded, null, 2)};`,
      ``,
    ].join('\n');

    fs.writeFileSync(path.join(outDir, `${spec.fileSlug}.ts`), fileContent, 'utf-8');

    indexImports.push(`import { ${spec.exportName} } from './${spec.fileSlug}';`);
    indexSpreadEntries.push(`  ...${spec.exportName},`);
    indexMapEntries.push(`  ${JSON.stringify(spec.subject)}: ${spec.exportName},`);

    const baseCount = baseCountBySubject[spec.subject] || 0;
    const totalCount = baseCount + uniqueExpanded.length;
    totalExpanded += uniqueExpanded.length;

    if (totalCount < MINIMUM_PER_DISCIPLINE) {
      underMinimum.push({ subject: spec.subject, total: totalCount });
    }

    const statusMark = totalCount >= MINIMUM_PER_DISCIPLINE ? 'OK' : 'BELOW_MIN';
    console.log(
      `[${statusMark}] ${spec.subject.padEnd(42)} | base=${String(baseCount).padStart(2)} + migradas=${String(
        uniqueExpanded.length
      ).padStart(3)} = ${String(totalCount).padStart(3)}`
    );
  }

  const indexContent = [
    `// Índice gerado automaticamente por scripts/migrateQuestions.ts — NÃO editar manualmente.`,
    `import type { LegalQuestion } from '../../../../types';`,
    ...indexImports,
    ``,
    `export {`,
    ...DISCIPLINE_SPECS.map(s => `  ${s.exportName},`),
    `};`,
    ``,
    `export const EXPANDED_QUESTIONS_BY_SUBJECT: Record<string, LegalQuestion[]> = {`,
    ...indexMapEntries,
    `};`,
    ``,
    `export const EXPANDED_CORPUS_QUESTIONS: LegalQuestion[] = [`,
    ...indexSpreadEntries,
    `];`,
    ``,
  ].join('\n');

  fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent, 'utf-8');

  const grandTotal = baseQuestions.length + totalExpanded;
  console.log('--------------------------------------------------------------------------');
  console.log(
    `Migração concluída: ${baseQuestions.length} base + ${totalExpanded} migradas = ${grandTotal} questões em ${DISCIPLINE_SPECS.length} disciplinas.`
  );

  if (totalErrors > 0) {
    throw new Error(`Foram detectados ${totalErrors} erros de validação na migração.`);
  }
  if (underMinimum.length > 0) {
    throw new Error(
      `Disciplinas abaixo do mínimo (${MINIMUM_PER_DISCIPLINE}): ${underMinimum
        .map(u => `${u.subject} (${u.total})`)
        .join(', ')}`
    );
  }
}

runMigration();
