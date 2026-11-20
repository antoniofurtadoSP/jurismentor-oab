import { LegalQuestion } from '../types';
import { ETICA_QUESTIONS } from './questions/etica';
import { TRIBUTARIO_QUESTIONS } from './questions/tributario';
import { PENAL_QUESTIONS } from './questions/penal';
import { CONSTITUCIONAL_QUESTIONS } from './questions/constitucional';
import { ADMINISTRATIVO_QUESTIONS } from './questions/administrativo';
import { CIVIL_QUESTIONS } from './questions/civil';
import { PROCESSUAL_CIVIL_QUESTIONS } from './questions/processualCivil';
import { PROCESSUAL_PENAL_QUESTIONS } from './questions/processualPenal';
import { TRABALHO_QUESTIONS } from './questions/trabalho';
import { EMPRESARIAL_QUESTIONS } from './questions/empresarial';
import { ESPECIAIS_QUESTIONS } from './questions/especiais';

import { ETICA_EXTRA_QUESTIONS } from './questions/extra/eticaExtra';
import { TRIBUTARIO_EXTRA_QUESTIONS } from './questions/extra/tributarioExtra';
import { PENAL_EXTRA_QUESTIONS } from './questions/extra/penalExtra';
import { CONSTITUCIONAL_EXTRA_QUESTIONS } from './questions/extra/constitucionalExtra';
import { ADMINISTRATIVO_EXTRA_QUESTIONS } from './questions/extra/administrativoExtra';
import { CIVIL_EXTRA_QUESTIONS } from './questions/extra/civilExtra';
import { PROCESSUAL_CIVIL_EXTRA_QUESTIONS } from './questions/extra/processualCivilExtra';
import { PROCESSUAL_PENAL_EXTRA_QUESTIONS } from './questions/extra/processualPenalExtra';
import { TRABALHO_EXTRA_QUESTIONS } from './questions/extra/trabalhoExtra';
import { EMPRESARIAL_EXTRA_QUESTIONS } from './questions/extra/empresarialExtra';
import { ESPECIAIS_EXTRA_QUESTIONS } from './questions/extra/especiaisExtra';

export const QUESTIONS_DATABASE: LegalQuestion[] = [
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

export const AVAILABLE_SUBJECTS: string[] = Array.from(
  new Set(QUESTIONS_DATABASE.map(q => q.subject))
);

export const AVAILABLE_BOARDS: string[] = Array.from(
  new Set(QUESTIONS_DATABASE.map(q => q.board))
);
