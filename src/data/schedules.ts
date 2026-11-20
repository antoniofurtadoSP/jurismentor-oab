import { StudyPlan } from '../types';

export const STUDY_PLANS: StudyPlan[] = [
  {
    id: 'oab_30_dias',
    title: 'Reta Final OAB 1ª Fase (30 Dias Intensivo)',
    subtitle: 'Foco cirúrgico nas 7 disciplinas de maior peso (Grupo 1) que garantem mais de 45 pontos',
    target: 'OAB',
    totalDays: 30,
    description: 'Planejamento estratégico baseado na estatística histórica da FGV. Prioriza Ética Profissional (8 questões = 10% da prova), Constitucional, Civil, Processo Civil, Penal, Processo Penal e Administrativo, aplicando o método de 20 questões diárias + revisão de lei seca.',
    days: [
      {
        dayNumber: 1,
        title: 'Ética Profissional: Estatuto da Advocacia e Direitos do Advogado',
        subject: 'Ética Profissional e Estatuto da OAB',
        subtopic: 'Artigos 1º a 7º do EAOAB (Prerrogativas do Advogado - Inviolabilidade e Prisões)',
        weightInExam: 'Muito Alto',
        targetQuestions: 20,
        readingFocus: 'Leitura obrigatória do Art. 7º e 7º-A da Lei 8.906/94 (Prerrogativas da Advogada Gestante e Lactante)',
        isCompleted: false
      },
      {
        dayNumber: 2,
        title: 'Ética Profissional: Incompatibilidades e Impedimentos',
        subject: 'Ética Profissional e Estatuto da OAB',
        subtopic: 'Artigos 27 a 30 do EAOAB (Diferença entre Incompatibilidade total e Impedimento parcial)',
        weightInExam: 'Muito Alto',
        targetQuestions: 20,
        readingFocus: 'Memorizar os incisos do Art. 28 (Chefia do Judiciário, Polícia, Militares na ativa)',
        isCompleted: false
      },
      {
        dayNumber: 3,
        title: 'Direito Constitucional: Controle de Constitucionalidade (Parte 1)',
        subject: 'Direito Constitucional',
        subtopic: 'Controle Concentrado no STF: ADI, ADC, ADO e ADPF (Legitimados do Art. 103 CF/88)',
        weightInExam: 'Muito Alto',
        targetQuestions: 15,
        readingFocus: 'Art. 102 e 103 da CF/88 + Súmulas Vinculantes sobre legitimidade especial',
        isCompleted: false
      },
      {
        dayNumber: 4,
        title: 'Direito Constitucional: Direitos Fundamentais e Remédios Constitucionais',
        subject: 'Direito Constitucional',
        subtopic: 'Art. 5º CF: Habeas Corpus, Mandado de Segurança, HC, HD, Ação Popular',
        weightInExam: 'Muito Alto',
        targetQuestions: 15,
        readingFocus: 'Art. 5º, incisos LXVIII a LXXVIII da CF/88 + Lei 12.016/2009 (MS)',
        isCompleted: false
      },
      {
        dayNumber: 5,
        title: 'Direito Civil: Parte Geral (Pessoas, Negócio Jurídico, Prescrição e Decadência)',
        subject: 'Direito Civil',
        subtopic: 'Artigos 1º a 211 do Código Civil: Defeitos do Negócio Jurídico (Erro, Dolo, Coação, Fraude)',
        weightInExam: 'Alto',
        targetQuestions: 15,
        readingFocus: 'Art. 189 a 206 do CC (Prazos prescricionais de 1 a 5 anos e decenal residual)',
        isCompleted: false
      },
      {
        dayNumber: 6,
        title: 'Direito Processual Civil: Tutelas Provisórias e Petição Inicial',
        subject: 'Direito Processual Civil',
        subtopic: 'Artigos 294 a 311 do CPC/15: Tutela de Urgência (Cautelar e Antecipada) e Tutela de Evidência',
        weightInExam: 'Alto',
        targetQuestions: 15,
        readingFocus: 'Art. 300 e Art. 311 do CPC/15 + estabilização da tutela antecedente (Art. 304)',
        isCompleted: false
      },
      {
        dayNumber: 7,
        title: 'Simulado Diagnóstico Semanal 01 + Revisão dos Erros (R7d)',
        subject: 'Geral',
        subtopic: 'Simulado Express de 40 Questões com matérias da semana 1',
        weightInExam: 'Muito Alto',
        targetQuestions: 40,
        readingFocus: 'Alimentação obrigatória do Caderno de Erros e releitura das justificativas',
        isCompleted: false
      },
      {
        dayNumber: 8,
        title: 'Direito Penal: Teoria Geral do Crime (Fato Típico e Ilicitude)',
        subject: 'Direito Penal',
        subtopic: 'Artigos 13 a 25 do CP: Conduta, Nexo Causal, Tentativa, Excludentes de Ilicitude',
        weightInExam: 'Muito Alto',
        targetQuestions: 15,
        readingFocus: 'Art. 23, 24 e 25 do CP: Estado de Necessidade e Legítima Defesa detalhados',
        isCompleted: false
      },
      {
        dayNumber: 9,
        title: 'Direito Processual Penal: Inquérito Policial e Ação Penal',
        subject: 'Direito Processual Penal',
        subtopic: 'Artigos 4º a 23 do CPP (Características do IP) e Artigos 24 a 62 (Ação Penal Pública e Privada)',
        weightInExam: 'Alto',
        targetQuestions: 15,
        readingFocus: 'Art. 28 e 28-A do CPP (Arquivamento e Acordo de Não Persecução Penal - ANPP)',
        isCompleted: false
      },
      {
        dayNumber: 10,
        title: 'Direito Administrativo: Atos Administrativos e Poderes da Administração',
        subject: 'Direito Administrativo',
        subtopic: 'Elementos do Ato (COM-FI-FO-MO-OB), Atributos (PATI), Revogação vs Anulação',
        weightInExam: 'Alto',
        targetQuestions: 15,
        readingFocus: 'Súmula 473 do STF e Art. 53 da Lei 9.784/99',
        isCompleted: false
      },
      {
        dayNumber: 11,
        title: 'Direito Tributário: Sistema Tributário Nacional e Limitações ao Poder de Tributar',
        subject: 'Direito Tributário',
        subtopic: 'Artigos 145 a 152 da CF/88: Princípios da Legalidade, Anterioridade Anual e Nonagesimal',
        weightInExam: 'Médio',
        targetQuestions: 15,
        readingFocus: 'Exceções ao princípio da anterioridade (Art. 150, § 1º, da CF/88)',
        isCompleted: false
      },
      {
        dayNumber: 12,
        title: 'Direito do Trabalho: Contrato Individual e Reforma Trabalhista',
        subject: 'Direito do Trabalho',
        subtopic: 'Artigos 442 a 510 da CLT: Equiparação Salarial (Art. 461), Teletrabalho e Rescisão',
        weightInExam: 'Alto',
        targetQuestions: 15,
        readingFocus: 'Art. 461 da CLT e Art. 477 (prazos de quitação e verbas rescisórias)',
        isCompleted: false
      },
      {
        dayNumber: 13,
        title: 'Ética Profissional: Honorários Advocatícios e Sociedade de Advogados',
        subject: 'Ética Profissional e Estatuto da OAB',
        subtopic: 'Artigos 22 a 26 do EAOAB e Código de Ética (Honorários Contratuais, Sucumbência, Quota Litis)',
        weightInExam: 'Muito Alto',
        targetQuestions: 20,
        readingFocus: 'Art. 50 do CED-OAB e regras da Sociedade Unipessoal de Advocacia (Art. 15 EAOAB)',
        isCompleted: false
      },
      {
        dayNumber: 14,
        title: 'Simulado Geral 1ª Fase OAB (80 Questões) com Cronômetro Oficial (5h)',
        subject: 'Geral',
        subtopic: 'Treinamento real de resistência psicológica e gestão de tempo de prova',
        weightInExam: 'Muito Alto',
        targetQuestions: 80,
        readingFocus: 'Estratégia de resolução: Começar por Ética (8q), Constitucional e matérias fortes',
        isCompleted: false
      }
    ]
  },
  {
    id: 'faculdade_direito_semestral',
    title: 'Ciclo Universitário: Provas de Faculdade de Direito',
    subtitle: 'Consolidação dogmática para provas semestrais, exames da graduação e preparação antecipada',
    target: 'FACULDADE',
    totalDays: 20,
    description: 'Foco na fundamentação doutrinária, resolução de casos práticos e súmulas dos tribunais, ideal para alunos do 1º ao 10º período de Direito que buscam notas máximas e base sólida.',
    days: [
      {
        dayNumber: 1,
        title: 'Teoria Geral do Direito Civil: Negócio Jurídico e Validade',
        subject: 'Direito Civil',
        subtopic: 'Escada Ponteana (Existência, Validade e Eficácia) e Vícios do Consentimento',
        weightInExam: 'Muito Alto',
        targetQuestions: 12,
        readingFocus: 'Artigos 104, 166 a 171 do Código Civil',
        isCompleted: false
      },
      {
        dayNumber: 2,
        title: 'Direito Constitucional: Teoria da Constituição e Eficácia das Normas',
        subject: 'Direito Constitucional',
        subtopic: 'Classificação de José Afonso da Silva: Normas de Eficácia Plena, Contida e Limitada',
        weightInExam: 'Muito Alto',
        targetQuestions: 12,
        readingFocus: 'Art. 5º, incisos XIII, XXXII e LXXI da CF/88 (Mandado de Injunção)',
        isCompleted: false
      },
      {
        dayNumber: 3,
        title: 'Direito Penal: Teoria da Pena e Dosimetria Trifásica',
        subject: 'Direito Penal',
        subtopic: 'Art. 68 do CP: Circunstâncias Judiciais (Art. 59), Agravantes/Atenuantes e Causas de Aumento/Diminuição',
        weightInExam: 'Alto',
        targetQuestions: 12,
        readingFocus: 'Súmula 231 do STJ (Fixação da pena-base abaixo do mínimo legal)',
        isCompleted: false
      },
      {
        dayNumber: 4,
        title: 'Direito Processual Civil: Teoria Geral dos Recursos',
        subject: 'Direito Processual Civil',
        subtopic: 'Pressupostos Recursais Intrínsecos e Extrínsecos, Apelação e Agravo de Instrumento',
        weightInExam: 'Muito Alto',
        targetQuestions: 12,
        readingFocus: 'Art. 994 e Art. 1.015 do CPC/15 (Taxatividade mitigada - Tema 988 STJ)',
        isCompleted: false
      }
    ]
  },
  {
    id: 'concursos_carreiras_juridicas',
    title: 'Carreiras Jurídicas: Magistratura, MP e Defensoria Pública',
    subtitle: 'Nível aprofundado com foco em jurisprudência dos informativos do STF e STJ',
    target: 'CONCURSO',
    totalDays: 25,
    description: 'Questões de alto grau de complexidade das bancas Cebraspe, VUNESP e FCC, com ênfase em controle de constitucionalidade, direito probatório penal e temas repetitivos.',
    days: [
      {
        dayNumber: 1,
        title: 'Direito Constitucional: Teoria dos Direitos Fundamentais e Proporcionalidade',
        subject: 'Direito Constitucional',
        subtopic: 'Colisão de Direitos Fundamentais, Núcleo Essencial e Proibição de Excesso/Proteção Deficiente',
        weightInExam: 'Muito Alto',
        targetQuestions: 15,
        readingFocus: 'Robert Alexy e a jurisprudência contemporânea do STF',
        isCompleted: false
      },
      {
        dayNumber: 2,
        title: 'Direito Processual Penal: Sistema Acusatório e Cadeia de Custódia',
        subject: 'Direito Processual Penal',
        subtopic: 'Artigos 3º-A a 3º-F (Juiz das Garantias) e Artigos 158-A a 158-F do CPP',
        weightInExam: 'Muito Alto',
        targetQuestions: 15,
        readingFocus: 'Julgamento das ADIs 6.298, 6.299, 6.300 e 6.305 pelo Pleno do STF',
        isCompleted: false
      }
    ]
  }
];
