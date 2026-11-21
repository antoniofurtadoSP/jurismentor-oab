// Arquivo gerado automaticamente por scripts/migrateQuestions.ts — NÃO editar manualmente.
import type { LegalQuestion } from '../../../../types';

export const PROCESSUAL_TRABALHO_EXPANDED_QUESTIONS: LegalQuestion[] = [
  {
    "id": "mig_ptra_001",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Princípios do Processo do Trabalho e Aplicação Subsidiária do CPC",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Em reclamação trabalhista em fase de conhecimento, o advogado requer a aplicação direta de dispositivo do Código de Processo Civil (CPC/2015) sobre determinada regra procedimental em relação à qual a CLT contém norma expressa e completa. À luz do Art. 769 da CLT e da Instrução Normativa nº 39 do TST, cabe a aplicação do CPC?",
    "options": [
      {
        "letter": "A",
        "text": "O CPC/2015 revogou tacitamente as regras próprias da CLT sempre que prevê prazo mais benéfico às partes."
      },
      {
        "letter": "B",
        "text": "Na fase de execução trabalhista aplica-se prioritariamente a CLT e, na omissão, o CPC antes da Lei de Execuções Fiscais."
      },
      {
        "letter": "C",
        "text": "Os prazos recursais do CPC (15 dias) aplicam-se automaticamente aos recursos trabalhistas como recurso ordinário e agravo de petição."
      },
      {
        "letter": "D",
        "text": "NÃO! Pelo Art. 769 da CLT (c/c Art. 15 do CPC e IN 39/2016 TST), nos casos OMISSOS, o direito processual comum será fonte subsidiária do direito processual do trabalho, EXCETO naquilo em que for INCOMPATÍVEL com as normas deste Título — exigindo dois requisitos cumulativos: (1) omissão da CLT e (2) compatibilidade principiológica com o processo trabalhista (celeridade, oralidade, proteção)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Heterointegração no Processo do Trabalho: conhecimento (Art. 769 CLT) = CLT -> omissão + compatibilidade -> CPC; execução (Art. 889 CLT) = CLT -> Lei de Execuções Fiscais (6.830/80) -> CPC. Prazos recursais trabalhistas = 8 dias úteis (exceto ED = 5d e RE = 15d).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 15 do CPC dispõe expressamente sobre aplicação supletiva e subsidiária apenas na ausência de normas que regulem processos trabalhistas (mantendo-se o Art. 769 CLT!)."
      },
      {
        "letter": "B",
        "explanation": "Cuidado com a ordem da execução (Art. 889 CLT): na execução trabalhista aplica-se primeiro a CLT, depois os preceitos da LEI DE EXECUÇÕES FISCAIS (Lei nº 6.830/80 — executivos fiscais da Fazenda Pública) e só depois o CPC!"
      },
      {
        "letter": "C",
        "explanation": "Os recursos trabalhistas mantêm o prazo unificado de 8 DIAS ÚTEIS (Lei 5.584/70 e Arts. 895–897 CLT), exceto embargos de declaração (5 dias) e recurso extraordinário (15 dias)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 769 da CLT, Art. 15 do CPC e IN 39/2016 do TST",
        "textSnippet": "Heterointegração no Processo do Trabalho: conhecimento (Art. 769 CLT) = CLT -> omissão + compatibilidade -> CPC; execução (Art. 889 CLT) = CLT -> Lei de Execuções Fiscais (6.830/80) -> CPC. Prazos recursais trabalhistas = 8 dias úteis (exceto ED = 5d e RE = 15d)."
      }
    ],
    "professorTip": "Conhecimento (Art. 769): CLT -> CPC (omissão + compatibilidade)! Execução (Art. 889): CLT -> Lei Execução Fiscal (6.830/80) -> CPC!"
  },
  {
    "id": "mig_ptra_002",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Competência Territorial na Justiça do Trabalho (Art. 651 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado domiciliado em Campinas/SP foi contratado em São Paulo/SP para trabalhar exclusivamente em filial situada em Belo Horizonte/MG. Após ser dispensado, muda-se para Salvador/BA e ajuíza reclamação trabalhista em Salvador ou em Campinas, alegando hipossuficiência. A Vara do Trabalho de Salvador ou Campinas tem competência territorial?",
    "options": [
      {
        "letter": "A",
        "text": "O empregado pode escolher livremente entre o local da contratação, o de seu domicílio atual ou o da prestação de serviços."
      },
      {
        "letter": "B",
        "text": "Para empregado agente ou viajante comercial, a competência será exclusivamente do local de sua residência."
      },
      {
        "letter": "C",
        "text": "É válida a cláusula de eleição de foro inserida no contrato de trabalho mesmo para empregado comum, pela aplicação subsidiária do CPC."
      },
      {
        "letter": "D",
        "text": "Em regra, NÃO! Pelo Art. 651, caput, da CLT, a competência das Varas do Trabalho é determinada pela LOCALIDADE ONDE O EMPREGADO PRESTAR SERVIÇOS ao empregador (Belo Horizonte/MG), ainda que tenha sido contratado noutro local (São Paulo) ou no estrangeiro! O foro do domicílio do reclamante só é admitido excepcionalmente pela jurisprudência do TST quando a empresa atua nacionalmente em grande porte e o empregado foi recrutado naquele domicílio ou quando o acesso à justiça ficar absolutamente inviabilizado, NÃO bastando a simples mudança posterior de domicílio!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Competência Territorial (Art. 651 CLT): regra = local da prestação dos serviços (ainda que contratado em outro lugar). Viajante comercial (§ 1º) = agência/filial a que subordinado (se não houver, domicílio/mais próxima). Empregador que promove atividades fora do local do contrato (§ 3º) = escolha entre celebração ou prestação. Brasileiro contratado no Brasil p/ trabalhar no exterior (§ 2º) = aplica-se justiça brasileira se não houver convenção internacional.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Cuidado com o § 3º do Art. 651 CLT: a opção entre o local da celebração do contrato OU o da prestação dos serviços só existe quando o empregador realiza atividades FORA DO LUGAR DO CONTRATO (ex.: empresa itinerante/circo/evento/obra temporária), e não quando há prestação fixa em estabelecimento!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 651, § 1º, da CLT, quando for parte agente ou viajante comercial, a competência será da Vara da localidade em que a empresa tenha AGÊNCIA OU FILIAL e a esta o empregado esteja SUBORDINADO; só na falta desta será competente a Vara da localização em que o empregado tenha domicílio ou a localidade mais próxima!"
      },
      {
        "letter": "C",
        "explanation": "A cláusula de eleição de foro (Art. 63 CPC) é incompatível com o Art. 651 da CLT e NULA no contrato de trabalho comum!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 651, caput e §§ 1º a 3º, da CLT",
        "textSnippet": "Competência Territorial (Art. 651 CLT): regra = local da prestação dos serviços (ainda que contratado em outro lugar). Viajante comercial (§ 1º) = agência/filial a que subordinado (se não houver, domicílio/mais próxima). Empregador que promove atividades fora do local do contrato (§ 3º) = escolha entre celebração ou prestação. Brasileiro contratado no Brasil p/ trabalhar no exterior (§ 2º) = aplica-se justiça brasileira se não houver convenção internacional."
      }
    ],
    "professorTip": "Art. 651 CLT: regra = LOCAL DA PRESTAÇÃO! Viajante = filial a que subordinado (ou domicílio)! Empresa itinerante (§ 3º) = celebração OU prestação!"
  },
  {
    "id": "mig_ptra_003",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Competência Material da Justiça do Trabalho (Art. 114 CF)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Viúva e filhos de empregado falecido em acidente de trabalho típico ajuízam ação em nome próprio pleiteando indenização por danos morais e materiais em ricochete contra o ex-empregador do falecido; paralelamente, sindicato ajuíza ação contra outro sindicato disputando a representatividade sindical da mesma categoria na base territorial. Qual a Justiça competente?",
    "options": [
      {
        "letter": "A",
        "text": "A ação de dano moral em ricochete ajuizada pela viúva e filhos em nome próprio tramita na Justiça Comum Estadual por envolver direito civil sucessório."
      },
      {
        "letter": "B",
        "text": "A Justiça do Trabalho é incompetente para julgar ação de execução fiscal de multas administrativas impostas aos empregadores pelos auditores fiscais do trabalho."
      },
      {
        "letter": "C",
        "text": "Compete à Justiça do Trabalho processar e julgar os crimes contra a organização do trabalho, como redução à condição análoga à de escravo."
      },
      {
        "letter": "D",
        "text": "Ambas pertencem à JUSTIÇA DO TRABALHO! Pela Súmula 392 do TST (e STF RE 600.091), nos termos do Art. 114, VI, da CF, a Justiça do Trabalho é competente para processar e julgar ações de indenização por dano moral e material decorrentes da relação de trabalho, INCLUSIVE quando ajuizadas pelos sucessores (viúva e filhos) do trabalhador falecido em acidente de trabalho! E pelo Art. 114, III, da CF, a JT também julga as ações sobre representação sindical, ENTRE SINDICATOS, entre sindicatos e trabalhadores, e entre sindicatos e empregadores!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Competência da JT (Art. 114 CF): ações da relação de trabalho (I); greve (II); representação sindical (III); MS, HC, HD envolvendo atos sujeitos à sua jurisdição (IV); conflitos entre órgãos com jurisdição trabalhista salvo STJ (V); danos morais/patrimoniais inclusive sucessores (VI / Súmula 392); multas MTE (VII); execução INSS só de pecúnia/acordo (VIII / SV 53). Fora: crimes (JF), estatutários (Justiça Comum).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 392 do TST e o STF pacificaram que a competência da Justiça do Trabalho abrange a indenização acidentária mesmo quando postulada pelos dependentes/sucessores do empregado falecido!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 114, VII, da CF, compete expressamente à JUSTIÇA DO TRABALHO julgar as ações relativas às penalidades administrativas impostas aos empregadores pelos órgãos de fiscalização das relações de trabalho!"
      },
      {
        "letter": "C",
        "explanation": "Na ADI 3684, o STF decidiu que o Art. 114 da CF NÃO outorga competência PENAL à Justiça do Trabalho (crimes contra a organização do trabalho competem à Justiça Federal Comum — Art. 109, VI, CF)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 114, I a IX, da CF e Súmula 392 TST / SV 22 e 53 STF",
        "textSnippet": "Competência da JT (Art. 114 CF): ações da relação de trabalho (I); greve (II); representação sindical (III); MS, HC, HD envolvendo atos sujeitos à sua jurisdição (IV); conflitos entre órgãos com jurisdição trabalhista salvo STJ (V); danos morais/patrimoniais inclusive sucessores (VI / Súmula 392); multas MTE (VII); execução INSS só de pecúnia/acordo (VIII / SV 53). Fora: crimes (JF), estatutários (Justiça Comum)."
      }
    ],
    "jurisprudence": "Súmula nº 392 do TST e ADI 3684 STF",
    "professorTip": "Súmula 392 TST = viúva/filhos pedindo dano moral por acidente do trabalho -> JUSTIÇA DO TRABALHO! Disputa entre sindicatos e multas do MTE -> JUSTIÇA DO TRABALHO! Crime trabalhista -> Justiça Federal!"
  },
  {
    "id": "mig_ptra_004",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Jus Postulandi das Partes e Limites (Art. 791 CLT e Súmula 425 TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado desempregado e ex-empregador comparecem pessoalmente à Vara do Trabalho sem advogado (jus postulandi) para propor reclamação trabalhista e apresentar contestação. Posteriormente, o empregado perde a ação e o TRT mantém a improcedência. Ele pode interpor pessoalmente, sem advogado, Recurso de Revista ao TST ou Ação Rescisória?",
    "options": [
      {
        "letter": "A",
        "text": "O jus postulandi permite à parte atuar pessoalmente em todas as fases e tribunais trabalhistas, inclusive no Recurso de Revista ao TST."
      },
      {
        "letter": "B",
        "text": "No processo de homologação de acordo extrajudicial (Art. 855-B CLT), as partes podem atuar sem advogado ou representadas pelo mesmo advogado comum."
      },
      {
        "letter": "C",
        "text": "Na execução trabalhista iniciada pela parte sem advogado, não cabe ao juiz promover a execução de ofício."
      },
      {
        "letter": "D",
        "text": "NÃO! Pelo Art. 791 da CLT, empregados e empregadores podem reclamar pessoalmente perante a Justiça do Trabalho e acompanhar suas reclamações até o final nas instâncias ordinárias (Vara do Trabalho e TRT — inclusive interpor Recurso Ordinário!); CONTUDO, pela Súmula 425 do TST, o jus postulandi das partes NÃO alcança a AÇÃO RESCISÓRIA, a AÇÃO CAUTELAR, o MANDADO DE SEGURANÇA e os RECURSOS DE COMPETÊNCIA DO TST (Recurso de Revista, Embargos no TST, Agravo de Instrumento para o TST) — nem o processo de homologação de acordo extrajudicial (Art. 855-B CLT, onde ambas as partes devem ter advogados distintos)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Jus Postulandi (Art. 791 CLT): cabe na Vara e no TRT (RO). NÃO cabe (Súmula 425 TST): (1) Recursos para o TST (RR, Embargos, etc.); (2) Ação Rescisória; (3) Mandado de Segurança; (4) Ação Cautelar; (5) Homologação de Acordo Extrajudicial (Art. 855-B exige advogados distintos!).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 425 do TST restringe o jus postulandi às Varas do Trabalho e aos TRTs, proibindo sua utilização nos recursos dirigidos ao TST, MS, Cautelar e Ação Rescisória!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 855-B, § 1º, da CLT, na jurisdição voluntária de homologação de acordo extrajudicial, é OBRIGATÓRIA a representação das partes por ADVOGADOS DISTINTOS (vedado advogado comum — facultada assistência sindical apenas ao trabalhador pelo § 2º)!"
      },
      {
        "letter": "C",
        "explanation": "Exatamente na hipótese em que a parte NÃO estiver representada por advogado (jus postulandi), o Art. 878 da CLT permite expressamente que a execução seja promovida de ofício pelo juiz!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 791 da CLT e Súmula 425 do TST",
        "textSnippet": "Jus Postulandi (Art. 791 CLT): cabe na Vara e no TRT (RO). NÃO cabe (Súmula 425 TST): (1) Recursos para o TST (RR, Embargos, etc.); (2) Ação Rescisória; (3) Mandado de Segurança; (4) Ação Cautelar; (5) Homologação de Acordo Extrajudicial (Art. 855-B exige advogados distintos!)."
      }
    ],
    "jurisprudence": "Súmula nº 425 do TST",
    "professorTip": "Jus Postulandi: pode até o TRT (RO)! PROIBIDO (Súmula 425 TST): Recursos no TST + Rescisória + MS + Cautelar + Acordo Extrajudicial (855-B exige advogados distintos)!"
  },
  {
    "id": "mig_ptra_005",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Honorários Advocatícios Sucumbenciais e Justiça Gratuita (Art. 791-A CLT / STF ADI 5766)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Reclamante beneficiário da justiça gratuita obtém procedência parcial em reclamação trabalhista (ganha R$ 20.000,00 em horas extras, mas tem o pedido de adicional de insalubridade julgado improcedente, sucumbindo também na perícia médica). À luz do Art. 791-A, § 4º, da CLT e da ADI 5766 do STF, ele sofrerá desconto imediato dos honorários sucumbenciais e periciais nos créditos ganhos no processo?",
    "options": [
      {
        "letter": "A",
        "text": "Os honorários advocatícios de sucumbência trabalhista variam de 10% a 20%, conforme o Art. 85 do CPC."
      },
      {
        "letter": "B",
        "text": "O beneficiário da justiça gratuita que falta injustificadamente à audiência inaugural está dispensado do pagamento das custas processuais pela ADI 5766."
      },
      {
        "letter": "C",
        "text": "A simples declaração de hipossuficiência assinada pelo trabalhador ou por seu advogado continua bastando automaticamente para concessão da justiça gratuita mesmo para quem ganha acima de 40% do teto do RGPS."
      },
      {
        "letter": "D",
        "text": "NÃO sofrerá desconto imediato automático sobre os créditos obtidos no processo! Na ADI 5766, o STF declarou INCONSTITUCIONAL a expressão do Art. 791-A, § 4º, da CLT que autorizava a cobrança automática dos honorários sucumbenciais contra o beneficiário da justiça gratuita usando créditos obtidos neste ou em outro processo, bem como declarou inconstitucional o Art. 790-B, caput e § 4º, que obrigava o beneficiário da justiça gratuita sucumbente na perícia a pagar honorários periciais! Mantém-se apenas a CONDIÇÃO SUSPENSIVA DE EXIGIBILIDADE por 2 ANOS após o trânsito em julgado (só executável se o credor provar que deixou de existir a situação de insuficiência de recursos)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 791-A CLT: honorários sucumbenciais de 5% a 15% (inclusive sucumbência recíproca sem compensação). STF ADI 5766: INCONSTITUCIONAL descontar honorários advocatícios ou periciais de créditos do beneficiário da justiça gratuita (fica em condição suspensiva de 2 anos; perícia paga pela União — Súmula 457 TST); CONSTITUCIONAL cobrar custas no arquivamento por falta injustificada do autor (Art. 844, § 2º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na CLT (Art. 791-A, caput), os honorários de sucumbência trabalhista são fixados entre o mínimo de 5% e o máximo de 15% sobre o valor que resultar da liquidação da sentença, do proveito econômico ou do valor atualizado da causa!"
      },
      {
        "letter": "B",
        "explanation": "ATENÇÃO! Na ADI 5766, o STF declarou CONSTITUCIONAL o Art. 844, §§ 2º e 3º, da CLT: se o reclamante (mesmo beneficiário da justiça gratuita!) faltar injustificadamente à audiência inaugural (arquivamento), será condenado ao pagamento das CUSTAS PROCESSUAIS (prazo de 15 dias para justificar), sendo o pagamento dessas custas condição para a propositura de nova demanda!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 790, §§ 3º e 4º, CLT (e tese em andamento/jurisprudência do TST após ADI 5766 e IRR 21): salário <= 40% do teto do RGPS = presunção legal/faculdade objetiva; acima de 40% do teto = exige comprovação de insuficiência de recursos (observando-se o TST IRR-277-83.2020 que voltou a admitir presunção juris tantum pela declaração se não elidida por prova em contrário!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 790, §§ 3º–4º, e 791-A da CLT e STF ADI 5766",
        "textSnippet": "Art. 791-A CLT: honorários sucumbenciais de 5% a 15% (inclusive sucumbência recíproca sem compensação). STF ADI 5766: INCONSTITUCIONAL descontar honorários advocatícios ou periciais de créditos do beneficiário da justiça gratuita (fica em condição suspensiva de 2 anos; perícia paga pela União — Súmula 457 TST); CONSTITUCIONAL cobrar custas no arquivamento por falta injustificada do autor (Art. 844, § 2º)."
      }
    ],
    "jurisprudence": "STF ADI 5766 e Súmula 457 TST",
    "professorTip": "Honorários CLT = 5% a 15%! ADI 5766 STF: gratuito NÃO paga honorário sucumbencial nem pericial (condição suspensiva 2 anos), MAS paga CUSTAS se faltar injustificadamente à audiência (Art. 844, § 2º)!"
  },
  {
    "id": "mig_ptra_006",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Custas Processuais e Isenções na Justiça do Trabalho (Arts. 789 e 790-A CLT)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado é condenado em processo de conhecimento cujo valor atribuído à causa foi de R$ 200.000,00 (julgado totalmente improcedente), sem ser beneficiário da justiça gratuita; em outra ação, autarquia estadual e a massa falida são condenadas e pretendem recorrer sem recolher custas. Qual o cálculo das custas e quem é isento?",
    "options": [
      {
        "letter": "A",
        "text": "As empresas em recuperação judicial são isentas do pagamento de custas processuais e do depósito recursal pelo Art. 899, § 10, da CLT."
      },
      {
        "letter": "B",
        "text": "As custas processuais no Processo do Trabalho devem ser pagas antecipadamente no ato da distribuição da petição inicial."
      },
      {
        "letter": "C",
        "text": "O prazo para comprovar o recolhimento das custas em caso de recurso é de 5 dias após a interposição do apelo."
      },
      {
        "letter": "D",
        "text": "As custas nos processos de conhecimento são calculadas à razão de 2% sobre o valor da condenação, do acordo ou da causa (na improcedência total), observado o MÍNIMO de R$ 10,64 e o MÁXIMO de 4 vezes o limite máximo dos benefícios do RGPS (Art. 789, caput, CLT), pagas e comprovado o recolhimento dentro do PRAZO RECURSAL (8 dias — Art. 789, § 1º)! São ISENTOS de custas (Art. 790-A CLT): União, Estados, DF, Municípios, respectivas autarquias e fundações públicas não exploradoras de atividade econômica, MPT e beneficiários da justiça gratuita — MAS a MASSA FALIDA (embora isenta de custas na falência? Atenção: pela Súmula 86 do TST, NÃO ocorre deserção de recurso da massa falida por falta de pagamento de custas ou de depósito do valor da condenação; porém empresa em RECUPERAÇÃO JUDICIAL NÃO é isenta de custas nem pela Súmula 86 — apenas isenta de DEPÓSITO RECURSAL pelo Art. 899, § 10, CLT)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Custas JT (Art. 789): 2%, mín R$ 10,64, máx 4x teto RGPS; pagas ao final/no prazo recursal (8 dias). Isentos de custas (Art. 790-A): justiça gratuita, Fazenda Pública (adm. direta, autarquias, fundações públicas), MPT. Massa falida não sofre deserção (Súmula 86 TST); recuperação judicial paga custas (só isenta de depósito recursal — Art. 899, § 10).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pegadinha clássica de OAB! O Art. 899, § 10, da CLT isenta beneficiários da justiça gratuita, entidades filantrópicas e empresas em RECUPERAÇÃO JUDICIAL apenas do DEPÓSITO RECURSAL — NÃO das custas processuais (recuperação judicial paga custas normalmente; só a massa falida escapa da deserção pela Súmula 86 TST)!"
      },
      {
        "letter": "B",
        "explanation": "No Processo do Trabalho NÃO há preparo/custas iniciais na distribuição! As custas são pagas ao FINAL pelo vencido (ou no prazo do recurso, sob pena de deserção — Art. 789, § 1º, CLT)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 789, § 1º, da CLT e Súmula 245 do TST, o pagamento das custas e do depósito recursal deve ser feito e COMPROVADO dentro do próprio PRAZO ALUSIVO AO RECURSO (8 dias)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 789, 789-A e 790-A da CLT e Súmulas 25, 86 e 161 TST",
        "textSnippet": "Custas JT (Art. 789): 2%, mín R$ 10,64, máx 4x teto RGPS; pagas ao final/no prazo recursal (8 dias). Isentos de custas (Art. 790-A): justiça gratuita, Fazenda Pública (adm. direta, autarquias, fundações públicas), MPT. Massa falida não sofre deserção (Súmula 86 TST); recuperação judicial paga custas (só isenta de depósito recursal — Art. 899, § 10)."
      }
    ],
    "jurisprudence": "Súmulas 25, 86 e 245 do TST",
    "professorTip": "Custas JT = 2% (mín R$10,64 / teto 4x INSS), pagas NO FIM (dentro do prazo do recurso)! Recuperação Judicial = isenta do DEPÓSITO recursal, MAS PAGA custas! Massa falida = isenta de ambos (Súmula 86)!"
  },
  {
    "id": "mig_ptra_007",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Prazos Processuais no Processo do Trabalho e Contagem em Dias Úteis",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Sentença trabalhista de 1º grau é publicada no Diário Eletrônico da Justiça do Trabalho (DEJT) na quinta-feira, dia 10 (sendo sexta-feira dia 11 útil, sábado 12, domingo 13 e segunda-feira 14 feriado nacional). Como se conta o prazo de 8 dias para o Recurso Ordinário de empresa privada e de um Município?",
    "options": [
      {
        "letter": "A",
        "text": "Os prazos no Processo do Trabalho continuam sendo contados em dias corridos, inclusive após a Lei nº 13.467/2017."
      },
      {
        "letter": "B",
        "text": "A contagem do prazo para interposição de recurso no Processo do Trabalho se inicia na data da juntada do aviso de recebimento postal da notificação."
      },
      {
        "letter": "C",
        "text": "O recesso forense da Justiça do Trabalho (20 de dezembro a 20 de janeiro — Art. 775-A CLT) não suspende os prazos processuais."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 775 da CLT (Reforma Trabalhista), os prazos processuais no Processo do Trabalho são contados EXCLUSIVAMENTE EM DIAS ÚTEIS, com exclusão do dia do começo e inclusão do dia do vencimento! Como a publicação no DEJT ocorreu na quinta (10), a disponibilização/publicação considera-se efetivada no dia 10 (ou conforme Lei 11.419/06: disponibilizado dia 10 -> publicado 1º dia útil seguinte = sexta 11 -> início da contagem no 1º dia útil subsequente!), e se segunda (14) for feriado nacional, o prazo começa a correr na terça (15), contando 8 dias úteis (excluídos sábados, domingos e feriados)! E para o Município (Fazenda Pública — DL 779/69 e Art. 183 CPC), o prazo recursal conta-se em DOBRO (16 dias úteis para RO)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 775 CLT: prazos processuais em DIAS ÚTEIS (exclui início, inclui fim). Recesso (Art. 775-A): suspensão de 20/12 a 20/01. Fazenda Pública e MPT (DL 779/69): prazo em DOBRO para recorrer (16 dias úteis no RO/RR/AP, 10 dias úteis nos ED) e QUÁDRUPLO (ou dobro no CPC, prevalecendo DL 779/69 que dá mínimo de 20 dias entre notificação e audiência para Fazenda!).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Reforma Trabalhista alterou o Art. 775 da CLT adotando a contagem exclusivamente em DIAS ÚTEIS (alinhada ao Art. 219 do CPC) — inclusive para o prazo de 48h/10d de manifestação processual (salvo prazos de direito material como aviso prévio, férias e 10 dias do Art. 477 CLT, que seguem em dias corridos!)."
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 1 do TST, quando a intimação tiver lugar na sexta-feira ou a publicação em órgão oficial ocorrer nesse dia, o prazo judicial começa a correr na segunda-feira imediata (1º dia útil); e pela Súmula 16 TST, presume-se recebida a notificação 48 horas depois de sua postagem!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 775-A da CLT (inserido pela Lei 13.545/2017), SUSPENDE-SE o curso do prazo processual nos dias compreendidos entre 20 DE DEZEMBRO e 20 DE JANEIRO, inclusive!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 775 da CLT, DL nº 779/69 e Súmulas 1, 16 e 262 do TST",
        "textSnippet": "Art. 775 CLT: prazos processuais em DIAS ÚTEIS (exclui início, inclui fim). Recesso (Art. 775-A): suspensão de 20/12 a 20/01. Fazenda Pública e MPT (DL 779/69): prazo em DOBRO para recorrer (16 dias úteis no RO/RR/AP, 10 dias úteis nos ED) e QUÁDRUPLO (ou dobro no CPC, prevalecendo DL 779/69 que dá mínimo de 20 dias entre notificação e audiência para Fazenda!)."
      }
    ],
    "jurisprudence": "Súmulas 1, 16 e 262 do TST",
    "professorTip": "Prazos processuais na CLT = DIAS ÚTEIS (Art. 775)! Recesso = 20/12 a 20/01 (775-A)! Fazenda Pública/MPT = prazo em DOBRO p/ recorrer (16d úteis)! Notificação postal presume recebida em 48h (Súmula 16)!"
  },
  {
    "id": "mig_ptra_008",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Petição Inicial Trabalhista - Pedido Certo, Determinado e Indicação de Valor (Art. 840 CLT)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Reclamante ajuíza reclamação trabalhista pelo rito ordinário em 2024 formulando pedido de horas extras e adicional de insalubridade de forma ilíquida (\"a apurar em liquidação de sentença\"), sem indicar o valor monetário correspondente a cada pedido na petição inicial. O juiz deve extinguir o processo imediatamente sem intimar o autor?",
    "options": [
      {
        "letter": "A",
        "text": "No procedimento ordinário continua dispensável a indicação de valor dos pedidos na petição inicial, exigindo-se liquidação apenas no rito sumaríssimo."
      },
      {
        "letter": "B",
        "text": "Caso falte a indicação do valor do pedido no rito ordinário, o juiz deve extinguir imediatamente o processo sem resolução do mérito e sem dar prazo para emenda."
      },
      {
        "letter": "C",
        "text": "A petição inicial trabalhista exige necessariamente assinatura de advogado e fundamentação jurídica exaustiva dos artigos de lei violados."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 840, § 1º, da CLT (alterado pela Reforma Trabalhista), mesmo no rito ordinário, o pedido deverá ser CERTO, DETERMINADO E COM INDICAÇÃO DE SEU VALOR! Contudo, pelo Art. 321 do CPC c/c Súmula 263 do TST, o juiz NÃO pode indeferir de plano a petição inicial sem antes intimar o autor para EMENDAR a inicial no prazo de 15 DIAS (salvo no RITO SUMARÍSSIMO, onde o Art. 852-B, I e § 1º, CLT prevê expressamente o arquivamento imediato sem emenda quando faltar pedido certo/determinado com indicação do valor!); ademais, pela IN 41/2018 do TST (§ 2º do Art. 12), o valor indicado na inicial é mera ESTIMATIVA (não limita rigidamente a liquidação se ressalvado como estimativo, segundo jurisprudência predominante da SDI-1 TST)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Petição inicial (Art. 840 CLT): qualificação, breve exposição dos fatos, pedido certo, determinado e com indicação de valor, data e assinatura. Falta valor no ordinário -> emenda em 15 dias (Súmula 263 TST); falta valor no sumaríssimo -> arquivamento imediato + custas (Art. 852-B, § 1º). Valor = estimativa (SDI-1 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Reforma Trabalhista mudou o Art. 840, § 1º, CLT: hoje TANTO o rito ordinário quanto o sumaríssimo exigem pedido certo, determinado e com indicação de valor!"
      },
      {
        "letter": "B",
        "explanation": "No rito ORDINÁRIO aplica-se a Súmula 263 do TST (prazo de 15 dias para emendar a inicial antes da extinção); já no rito SUMARÍSSIMO (Art. 852-B, § 1º), o não atendimento acarreta o ARQUIVAMENTO imediato da reclamação (condenando ao pagamento de custas)!"
      },
      {
        "letter": "C",
        "explanation": "A petição inicial trabalhista pode ser verbal (reduzida a termo em 5 dias no setor de distribuição — Art. 840, § 2º e Art. 786 CLT), admite jus postulandi (Art. 791) e exige apenas \"breve exposição dos fatos de que resulte o dissídio\" (princípio da simplicidade / iura novit curia)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 840, §§ 1º a 3º, da CLT e Art. 852-B, I, CLT",
        "textSnippet": "Petição inicial (Art. 840 CLT): qualificação, breve exposição dos fatos, pedido certo, determinado e com indicação de valor, data e assinatura. Falta valor no ordinário -> emenda em 15 dias (Súmula 263 TST); falta valor no sumaríssimo -> arquivamento imediato + custas (Art. 852-B, § 1º). Valor = estimativa (SDI-1 TST)."
      }
    ],
    "jurisprudence": "Súmula 263 do TST e IN 41/2018",
    "professorTip": "Art. 840, § 1º: pedido certo, determinado + VALOR (inclusive no ordinário)! Faltou no Ordinário = emenda 15 dias (Súmula 263)! Faltou no Sumaríssimo = ARQUIVA direto (Art. 852-B, § 1º)!"
  },
  {
    "id": "mig_ptra_009",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Procedimento Sumaríssimo vs. Rito Sumário (Alçada) e Ordinário",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado pretende cobrar R$ 35.000,00 de um Município (Fazenda Pública) ou de empresa privada com endereço desconhecido (citada por edital). O processo tramitará pelo Procedimento Sumaríssimo? E se a causa tiver valor inferior a 2 salários mínimos (Rito Sumário / Alçada)?",
    "options": [
      {
        "letter": "A",
        "text": "Empresas públicas e sociedades de economia mista também estão excluídas do procedimento sumaríssimo por força do Art. 852-A, parágrafo único."
      },
      {
        "letter": "B",
        "text": "No procedimento sumaríssimo cada parte pode ouvir até 3 testemunhas e a prova pericial é proibida."
      },
      {
        "letter": "C",
        "text": "No rito sumário (alçada até 2 salários mínimos), cabe normalmente Recurso Ordinário para o TRT em qualquer hipótese."
      },
      {
        "letter": "D",
        "text": "NO PRIMEIRO CASO, NÃO tramitará pelo Sumaríssimo! Embora o valor de R$ 35.000,00 seja inferior a 40 salários mínimos (teto do Art. 852-A CLT), o parágrafo único do Art. 852-A EXCLUI expressamente do rito sumaríssimo as demandas em que é parte a ADMINISTRAÇÃO PÚBLICA DIRETA, AUTÁRQUICA E FUNDACIONAL (Fazenda Pública — atenção: empresa pública e sociedade de economia mista PODEM estar no sumaríssimo!) e o Art. 852-B, II, PROÍBE a citação por EDITAL no sumaríssimo! Já nas causas de até 2 SALÁRIOS MÍNIMOS (Rito Sumário / Dissídio de Alçada — Art. 2º, § 4º, Lei 5.584/70), NÃO cabe recurso algum da sentença, SALVO se versar sobre MATÉRIA CONSTITUCIONAL!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Ritos na JT: (1) Sumário/Alçada (<= 2 SM) = irrecorrível salvo matéria constitucional; (2) Sumaríssimo (> 2 até 40 SM) = exclui Adm. Direta/Autárquica/Fundacional, proíbe citação por edital, máx 2 testemunhas, admite perícia, RR só por CF / Súmula TST / SV STF; (3) Ordinário (> 40 SM ou com Fazenda Pública/edital) = máx 3 testemunhas.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 852-A, parágrafo único, exclui apenas a Administração Pública DIRETA, AUTÁRQUICA e FUNDACIONAL — empresas públicas e sociedades de economia mista (regime privado) SUBMETEM-SE normalmente ao sumaríssimo!"
      },
      {
        "letter": "B",
        "explanation": "Regras do Sumaríssimo (Arts. 852-A a 852-I): máx 2 TESTEMUNHAS por parte (no ordinário = 3; no inquérito = 6); PROVA PERICIAL É PERMITIDA (Art. 852-H, § 4º); audiência única em 15 dias; recurso de revista só por violação direta da CF, Súmula do TST ou Súmula Vinculante do STF (não cabe por violação de lei infraconstitucional nem por OJ)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 2º, §§ 3º e 4º, da Lei nº 5.584/70, nos dissídios de alçada (<= 2 salários mínimos na data do ajuizamento), nenhum recurso caberá contra a sentença, SALVO se versarem sobre MATÉRIA CONSTITUCIONAL!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 852-A a 852-I da CLT e Art. 2º, § 4º, da Lei nº 5.584/1970",
        "textSnippet": "Ritos na JT: (1) Sumário/Alçada (<= 2 SM) = irrecorrível salvo matéria constitucional; (2) Sumaríssimo (> 2 até 40 SM) = exclui Adm. Direta/Autárquica/Fundacional, proíbe citação por edital, máx 2 testemunhas, admite perícia, RR só por CF / Súmula TST / SV STF; (3) Ordinário (> 40 SM ou com Fazenda Pública/edital) = máx 3 testemunhas."
      }
    ],
    "professorTip": "Sumaríssimo (>2 a 40 SM): SEM Fazenda (Direta/Autarquia/Fundação — Estatal PODE!), SEM edital, máx 2 testemunhas, PODE perícia! Alçada (<=2 SM): sem recurso, SALVO matéria constitucional!"
  },
  {
    "id": "mig_ptra_010",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Audiência Trabalhista - Ausência das Partes, Revelia e Comparecimento de Advogado (Art. 844 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na audiência inaugural de reclamação trabalhista, o reclamado (empresa) não comparece pessoalmente nem envia preposto, porém seu advogado regularmente constituído comparece munido de contestação e documentos previamente protocolados no PJe. Haverá revelia com desentranhamento da contestação?",
    "options": [
      {
        "letter": "A",
        "text": "Ausente o preposto da empresa na audiência inaugural, mesmo presente o advogado com defesa no PJe, o juiz deve decretar revelia e desentranhar/recusar a contestação e os documentos."
      },
      {
        "letter": "B",
        "text": "A ausência do reclamante na audiência inaugural acarreta improcedência liminar do pedido com coisa julgada material imediata."
      },
      {
        "letter": "C",
        "text": "A ausência da reclamada gera REVELIA quanto à confissão ficta dos fatos (Art. 844, caput, CLT), MAS pelo Art. 844, § 5º, da CLT (inserido pela Reforma Trabalhista, superando em parte a antiga Súmula 122 TST!), ainda que ausente o reclamado, presente o ADVOGADO na audiência, SERÃO ACEITOS A CONTESTAÇÃO E OS DOCUMENTOS eventualmente apresentados! Ademais, a revelia NÃO produz o efeito de confissão ficta se houver pluralidade de réus e algum contestar, se o litígio versar sobre direitos indisponíveis, se a inicial não estiver acompanhada de instrumento indispensável ou se as alegações forem inverossímeis/contraditórias (§ 4º)!"
      },
      {
        "letter": "D",
        "text": "Na revelia trabalhista, a confissão ficta do réu ausente é absoluta, mesmo que contradiga prova documental pré-constituída nos autos ou ocorra contra ente público."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 844 CLT: Ausência do autor na 1ª audiência = ARQUIVAMENTO (+ custas no § 2º; 2 arquivamentos seguidos = perempção 6 meses, Art. 732); ausência na instrução = confissão ficta (Súmula 74). Ausência do réu = revelia, MAS se advogado comparecer com defesa/documentos estes são aceitos (§ 5º)!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 844, § 5º, da CLT determinou expressamente que, presente o advogado na audiência, serão aceitos a contestação e os documentos apresentados pela ré ausente!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 844, caput, CLT, o não comparecimento do RECLAMANTE à audiência inaugural importa o ARQUIVAMENTO da reclamação (extinção sem resolução do mérito — salvo se faltar à audiência de instrução em prosseguimento, quando sofre CONFISSÃO FICTA pela Súmula 74, I, TST!). Se der causa a dois arquivamentos seguidos (Art. 732 CLT), perde por 6 meses o direito de reclamar na JT (perempção trabalhista)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 844, § 4º, IV, CLT e OJ 152 SDI-1 TST, as alegações inverossímeis ou em contradição com a prova dos autos NÃO sofrem o efeito da confissão ficta (e contra Fazenda Pública não se aplica confissão sobre direitos indisponíveis — § 4º, II)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 844, caput e §§ 1º a 5º, da CLT e Súmula 74 e 122 do TST",
        "textSnippet": "Art. 844 CLT: Ausência do autor na 1ª audiência = ARQUIVAMENTO (+ custas no § 2º; 2 arquivamentos seguidos = perempção 6 meses, Art. 732); ausência na instrução = confissão ficta (Súmula 74). Ausência do réu = revelia, MAS se advogado comparecer com defesa/documentos estes são aceitos (§ 5º)!"
      }
    ],
    "jurisprudence": "Súmulas 74 e 122 do TST",
    "professorTip": "Art. 844, § 5º: Réu faltou + Advogado foi = CONTESTAÇÃO e DOCUMENTOS são ACEITOS! Autor faltou 1ª audiência = ARQUIVA (+ custas); faltou na instrução = confissão ficta (Súmula 74)!"
  },
  {
    "id": "mig_ptra_011",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Preposto na Audiência Trabalhista (Art. 843, § 3º CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Grande rede varejista designa profissional terceirizado ou contador externo — que NÃO possui vínculo de emprego com a empresa — para representá-la como preposto na audiência trabalhista, tendo pleno conhecimento dos fatos litigiosos. O juiz deve rejeitar esse preposto e decretar revelia?",
    "options": [
      {
        "letter": "A",
        "text": "O preposto de empresa de médio ou grande porte continua obrigado a ser empregado formalmente registrado na empresa reclamada, sob pena de revelia."
      },
      {
        "letter": "B",
        "text": "O advogado da reclamada pode acumular simultaneamente na mesma audiência as funções de advogado e preposto da empresa."
      },
      {
        "letter": "C",
        "text": "NÃO! Pelo Art. 843, § 3º, da CLT (inserido pela Lei nº 13.467/2017, superando a antiga Súmula 377 do TST!), o preposto a que se refere o § 1º NÃO PRECISA SER EMPREGADO da parte reclamada — bastando que tenha conhecimento dos fatos (cujas declarações obrigarão o proponente)!"
      },
      {
        "letter": "D",
        "text": "Se o empregado reclamante não puder comparecer à audiência por motivo de doença, não pode se fazer representar por outro empregado ou sindicato nem para requerer o adiamento."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 843 CLT: Preposto NÃO precisa ser empregado (§ 3º — superou Súmula 377 TST), basta conhecer os fatos (suas declarações vinculam a empresa). Proibido acumular preposto + advogado na mesma audiência. Empregado doente (§ 2º) pode se fazer representar por colega da mesma profissão ou sindicato para evitar arquivamento.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Reforma Trabalhista superou expressamente a Súmula 377 do TST ao incluir o § 3º no Art. 843 da CLT: hoje NENHUM empregador (nem grande empresa) precisa enviar preposto empregado!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 23 do Regulamento Geral da OAB e jurisprudência pacífica do TST, é VEDADA a acumulação simultânea das funções de preposto e advogado na mesma audiência (risco de conflito ético e dever de sigilo vs confissão)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 843, § 2º, da CLT, se por doença ou qualquer outro motivo poderoso devidamente comprovado o empregado não puder comparecer pessoalmente, poderá fazer-se representar por outro empregado que pertença à mesma profissão, ou pelo seu sindicato (apenas para evitar o arquivamento/requerer adiamento, não para prestar depoimento pessoal)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 843, §§ 1º e 3º, da CLT",
        "textSnippet": "Art. 843 CLT: Preposto NÃO precisa ser empregado (§ 3º — superou Súmula 377 TST), basta conhecer os fatos (suas declarações vinculam a empresa). Proibido acumular preposto + advogado na mesma audiência. Empregado doente (§ 2º) pode se fazer representar por colega da mesma profissão ou sindicato para evitar arquivamento."
      }
    ],
    "professorTip": "Art. 843, § 3º: Preposto NÃO precisa ser empregado (superou Súmula 377)! MAS NÃO pode ser ao mesmo tempo o advogado da empresa!"
  },
  {
    "id": "mig_ptra_012",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Exceção de Incompetência Territorial (Art. 800 CLT) - Prazo e Procedimento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa domiciliada no Paraná é citada de reclamação trabalhista ajuizada no Rio de Janeiro por ex-empregado que sempre trabalhou em Curitiba/PR. A empresa pretende arguir incompetência territorial antes da audiência inaugural. Como funciona o procedimento do Art. 800 da CLT após a Reforma Trabalhista?",
    "options": [
      {
        "letter": "A",
        "text": "A exceção de incompetência territorial deve ser apresentada oralmente ou em preliminar da contestação apenas no dia da audiência inaugural."
      },
      {
        "letter": "B",
        "text": "Da decisão interlocutória do juiz do trabalho que acolhe a exceção de incompetência territorial e remete os autos a TRT distinto nunca cabe recurso imediato."
      },
      {
        "letter": "C",
        "text": "A exceção de incompetência territorial deve ser oferecida em PEÇA SEPARADA que sinalize a existência dessa exceção, protocolada no prazo de 5 DIAS (úteis) a contar da NOTIFICAÇÃO (antes da audiência — Art. 800, caput, CLT)! Protocolada tempestivamente a exceção, SUSPENDE-SE o processo e NÃO se realiza a audiência designada até que se decida a exceção (§ 1º); abre-se vista ao excepto por 5 DIAS (§ 2º); se necessária prova testemunhal, realiza-se audiência para ouvir as testemunhas da exceção (inclusive por carta precatória/videoconferência no foro indicado pelo excipiente, § 4º); decidida, o processo retoma (§ 3º)!"
      },
      {
        "letter": "D",
        "text": "A incompetência territorial pode ser declarada de ofício pelo juiz do trabalho em qualquer tempo e grau de jurisdição."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 800 CLT (Incompetência Territorial): peça separada em 5 DIAS ÚTEIS da notificação -> suspende processo/audiência -> vista ao autor em 5 dias -> decisão. Recurso: acolheu enviando para OUTRO TRT = cabe RO imediato (Súmula 214, \"c\"); enviou p/ mesmo TRT ou rejeitou = irrecorrível de imediato.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Reforma Trabalhista reformulou o Art. 800 da CLT: hoje a exceção de incompetência territorial é apresentada ANTES da audiência, em peça autônoma no prazo de 5 dias úteis da notificação, suspendendo a audiência!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 214, alínea \"c\", do TST, a decisão que acolhe exceção de incompetência territorial com remessa dos autos para Vara do Trabalho vinculada a TRT DISTINTO é exceção à irrecorribilidade imediata das interlocutórias — cabendo Recurso Ordinário de imediato (se for para Vara do MESMO TRT, é irrecorrível de imediato)!"
      },
      {
        "letter": "D",
        "explanation": "A incompetência territorial é RELATIVA (Súmula 33 do STJ: não pode ser declarada de ofício pelo juiz — se não arguida em 5 dias pelo réu, prorroga-se a competência)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 800, caput e §§ 1º a 5º, da CLT e Súmula 214, \"c\", do TST",
        "textSnippet": "Art. 800 CLT (Incompetência Territorial): peça separada em 5 DIAS ÚTEIS da notificação -> suspende processo/audiência -> vista ao autor em 5 dias -> decisão. Recurso: acolheu enviando para OUTRO TRT = cabe RO imediato (Súmula 214, \"c\"); enviou p/ mesmo TRT ou rejeitou = irrecorrível de imediato."
      }
    ],
    "jurisprudence": "Súmula 214, \"c\", do TST e Súmula 33 do STJ",
    "professorTip": "Exceção Incompetência Territorial (Art. 800): peça autônoma em 5 DIAS ÚTEIS da notificação e SUSPENDE a audiência! Mandou para OUTRO TRT = cabe RO imediato (Súmula 214, \"c\")!"
  },
  {
    "id": "mig_ptra_013",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Compensação, Dedução e Reconvenção no Processo do Trabalho",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em contestação trabalhista, a empresa alega que já pagou ao autor R$ 2.000,00 a título de férias durante o contrato (mesma natureza) e também pretende abater um empréstimo bancário pessoal ou dano civil estranho ao contrato que o ex-empregado lhe deve (dívida não trabalhista). Além disso, apresenta pretensão própria contra o empregado pedindo indenização por quebra dolosa de equipamento. Qual o momento e limite da compensação?",
    "options": [
      {
        "letter": "A",
        "text": "A compensação pode ser arguida a qualquer tempo, inclusive nos embargos à execução trabalhista, e abrange qualquer crédito civil da empresa contra o ex-empregado."
      },
      {
        "letter": "B",
        "text": "Não cabe reconvenção no Processo do Trabalho por incompatibilidade com a celeridade do rito trabalhista."
      },
      {
        "letter": "C",
        "text": "A COMPENSAÇÃO na Justiça do Trabalho está restrita a DÍVIDAS DE NATUREZA TRABALHISTA (Súmula 18 do TST — não se pode compensar dívida trabalhista com dívida civil/comercial alheia ao contrato!) e só poderá ser arguida como matéria de defesa na CONTESTAÇÃO (Art. 767 CLT e Súmula 48 TST — preclui se alegada só na fase de execução!), assim como a RETENÇÃO/DEDUÇÃO de valores pagos sob o mesmo título; já a pretensão ativa da empresa de cobrar do empregado indenização por prejuízo doloso exige RECONVENÇÃO (no mesmo prazo da contestação — Art. 343 CPC aplicado subsidiariamente)!"
      },
      {
        "letter": "D",
        "text": "Dedução e compensação são institutos idênticos, de modo que o juiz não pode deduzir valores já pagos a idêntico título sem pedido expresso de compensação."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 767 CLT + Súmulas 18 e 48 TST: Compensação na JT exige (1) arguição na contestação (Súmula 48) e (2) dívidas exclusivamente de natureza trabalhista (Súmula 18). Dedução = abatimento de valores pagos sob o mesmo título (pode até de ofício se provado). Reconvenção = cabível na contestação (Art. 343 CPC).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Duas regras clássicas do TST: (1) Súmula 48 TST = compensação SÓ pode ser arguida como matéria de defesa (na contestação, sob pena de preclusão); (2) Súmula 18 TST = compensação na JT restringe-se a dívidas de NATUREZA TRABALHISTA!"
      },
      {
        "letter": "B",
        "explanation": "A reconvenção (Art. 343 CPC) é plenamente compatível com o Processo do Trabalho (apresentada na própria contestação), exceto no rito sumaríssimo segundo parte da doutrina onde se admite pedido contraposto se compatível."
      },
      {
        "letter": "D",
        "explanation": "Cuidado com a distinção! COMPENSAÇÃO (Art. 368 CC / Súmulas 18 e 48 TST) envolve créditos recíprocos distintos e exige arguição na contestação; DEDUÇÃO (abatimento de valores comprovadamente já pagos sob o mesmo título, ex.: horas extras pagas vs devidas) evita enriquecimento sem causa e pode ser autorizada de ofício pelo juiz na sentença se provada nos autos!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 767 da CLT, Art. 343 do CPC e Súmulas 18 e 48 do TST",
        "textSnippet": "Art. 767 CLT + Súmulas 18 e 48 TST: Compensação na JT exige (1) arguição na contestação (Súmula 48) e (2) dívidas exclusivamente de natureza trabalhista (Súmula 18). Dedução = abatimento de valores pagos sob o mesmo título (pode até de ofício se provado). Reconvenção = cabível na contestação (Art. 343 CPC)."
      }
    ],
    "jurisprudence": "Súmulas 18 e 48 do TST",
    "professorTip": "Compensação na JT = SÓ na contestação (Súmula 48) e SÓ dívida trabalhista (Súmula 18)! Reconvenção = cabe na contestação!"
  },
  {
    "id": "mig_ptra_014",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Ônus da Prova na CLT (Art. 818) e Controle de Jornada (Súmula 338 TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado aciona empresa com 35 empregados no estabelecimento pleiteando horas extras, e a empresa junta cartões de ponto com horários absolutamente uniformes (\"ponto britânico\": 08:00 às 17:00 todos os dias sem um minuto de variação); em outra situação, o empregador nega a demissão alegando abandono de emprego pelo trabalhador. A quem incumbe o ônus da prova?",
    "options": [
      {
        "letter": "A",
        "text": "O registro de ponto eletrônico ou manual continua obrigatório para estabelecimentos com mais de 10 empregados."
      },
      {
        "letter": "B",
        "text": "Os cartões de ponto com marcação britânica geram presunção absoluta e juris et de jure da jornada alegada pelo empregado na inicial."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 74, § 2º, da CLT (alterado pela Lei da Liberdade Econômica nº 13.874/19!), é obrigatório o registro de jornada nos estabelecimentos com MAIS DE 20 TRABALHADORES (antigo limite era 10!). Se a empresa com > 20 empregados apresenta cartões de ponto com horários invariáveis (\"ponto britânico\"), eles são INVÁLIDOS como meio de prova, invertendo-se o ônus da prova relativo às horas extras para o EMPREGADOR (Súmula 338, III, TST — presunção relativa da jornada da inicial)! Quanto à extinção do contrato, o ônus de provar o término do contrato por abandono/pedido de demissão é do EMPREGADOR (princípio da continuidade da relação de emprego — Súmula 212 TST)!"
      },
      {
        "letter": "D",
        "text": "O juiz do trabalho não pode inverter ou distribuir dinamicamente o ônus da prova no curso do processo trabalhista."
      }
    ],
    "correctAnswer": "C",
    "justification": "Ônus da prova (Art. 818 CLT): fato constitutivo = reclamante; impeditivo/modificativo/extintivo = reclamado (inclusive dispensa/abandono pela Súmula 212 TST). Admite distribuição dinâmica fundamentada (§§ 1º–2º). Controle de ponto = obrigatório > 20 trabalhadores (Art. 74, § 2º); sem controle ou ponto britânico = inversão relativa p/ empregador (Súmula 338 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei da Liberdade Econômica (Lei 13.874/2019) elevou o patamar do Art. 74, § 2º, da CLT de 10 para MAIS DE 20 TRABALHADORES (e autorizou registro de ponto por exceção mediante acordo individual escrito ou norma coletiva no § 4º)!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 338, I e III, do TST, a ausência injustificada dos controles ou a marcação invariável (\"britânica\") gera presunção RELATIVA (juris tantum) de veracidade da jornada da inicial, que pode ser elidida por prova em contrário (testemunhas)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 818, §§ 1º e 2º, da CLT (Reforma Trabalhista), o juiz PODE distribuir dinamicamente o ônus da prova diante de peculiaridades ou impossibilidade/excessiva dificuldade de cumprimento do encargo, por decisão fundamentada ANTES da instrução (concedendo oportunidade de desincumbir-se do ônus)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 818 da CLT, Art. 74, § 2º, da CLT e Súmula 338 do TST",
        "textSnippet": "Ônus da prova (Art. 818 CLT): fato constitutivo = reclamante; impeditivo/modificativo/extintivo = reclamado (inclusive dispensa/abandono pela Súmula 212 TST). Admite distribuição dinâmica fundamentada (§§ 1º–2º). Controle de ponto = obrigatório > 20 trabalhadores (Art. 74, § 2º); sem controle ou ponto britânico = inversão relativa p/ empregador (Súmula 338 TST)."
      }
    ],
    "jurisprudence": "Súmulas 212 e 338 do TST",
    "professorTip": "Ponto obrigatório = > 20 trabalhadores (Lei 13.874/19)! Ponto britânico ou falta de ponto = inversão RELATIVA contra patrão (Súmula 338)! Demissão/Abandono = ônus do PATRÃO (Súmula 212)!"
  },
  {
    "id": "mig_ptra_015",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Prova Testemunhal - Contradita, Amigo/Inimigo e Ação contra o Mesmo Empregador (Súmula 357 TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Na audiência de instrução, o reclamante arrola como testemunha um ex-colega de trabalho que também move reclamação trabalhista contra a mesma empresa reclamada (inclusive com pedidos semelhantes e sendo um testemunha do outro em \"troca de favores\" alegada sem prova de amizade íntima). A empresa apresenta contradita. Deve o juiz acolher a contradita?",
    "options": [
      {
        "letter": "A",
        "text": "A testemunha que move ação trabalhista com objeto idêntico contra a mesma reclamada presume-se automaticamente suspeita e não pode depor."
      },
      {
        "letter": "B",
        "text": "As testemunhas no Processo do Trabalho devem ser sempre previamente arroladas por escrito em até 15 dias antes da audiência."
      },
      {
        "letter": "C",
        "text": "NÃO! Pela Súmula 357 do TST, NÃO torna suspeita a testemunha o simples fato de estar litigando ou de ter litigado contra o mesmo empregador! Embora a mera propositura de ação idêntica ou testemunho recíproco por si só não configure suspeição, a testemunha só será impedida/suspeita (ouvindo-se apenas como informante sem compromisso — Art. 829 CLT) se efetivamente comprovada amizade íntima, inimizade capital, parentesco até 3º grau ou interesse real direto no desfecho do processo!"
      },
      {
        "letter": "D",
        "text": "A testemunha que mentir ou alterar intencionalmente a verdade dos fatos em audiência trabalhista está sujeita apenas à remessa de ofício ao MPF por falso testemunho, sem multa processual do juiz do trabalho."
      }
    ],
    "correctAnswer": "C",
    "justification": "Testemunhas na CLT: Ordinário = máx 3; Sumaríssimo = máx 2; Inquérito falta grave = máx 6 (Arts. 821 e 852-H CLT). Comparecem sem prévio rol/intimação (Art. 825). Súmula 357 TST = litigar contra mesmo patrão não gera suspeição. Art. 793-D CLT = multa de má-fé para testemunha que mente.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Súmula 357 do TST: não torna suspeita a testemunha o simples fato de litigar contra o mesmo empregador (mesmo em ações idênticas ou em reciprocidade, salvo prova concreta de troca de favores fraudulenta/amizade íntima)!"
      },
      {
        "letter": "B",
        "explanation": "Regra trabalhista (Art. 825 CLT): no rito ordinário e sumaríssimo, as testemunhas comparecem à audiência INDEPENDENTEMENTE DE NOTIFICAÇÃO OU INTIMAÇÃO prévia (se não comparecerem espontaneamente, o juiz adia/intima — e se intimadas faltarem, condução coercitiva + multa; no sumaríssimo Art. 852-H, § 3º, exige comprovação do convite prévio para intimação judicial)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 793-D da CLT (Reforma Trabalhista), aplica-se multa de litigância de má-fé (de >1% e <10% do valor corrigido da causa!) à TESTEMUNHA que intencionalmente alterar a verdade dos fatos ou omitir fatos essenciais ao julgamento da causa!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 829 da CLT e Súmula 357 do TST",
        "textSnippet": "Testemunhas na CLT: Ordinário = máx 3; Sumaríssimo = máx 2; Inquérito falta grave = máx 6 (Arts. 821 e 852-H CLT). Comparecem sem prévio rol/intimação (Art. 825). Súmula 357 TST = litigar contra mesmo patrão não gera suspeição. Art. 793-D CLT = multa de má-fé para testemunha que mente."
      }
    ],
    "jurisprudence": "Súmula nº 357 do TST",
    "professorTip": "Testemunhas: Ordinário = 3 | Sumaríssimo = 2 | Inquérito = 6! Ação contra mesmo patrão = NÃO é suspeita (Súmula 357)! Testemunha mentirosa = leva multa do Art. 793-D!"
  },
  {
    "id": "mig_ptra_016",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Homologação de Acordo Extrajudicial (Jurisdição Voluntária - Arts. 855-B a 855-E CLT)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregador e ex-empregado firmam acordo extrajudicial após a extinção do contrato de trabalho e protocolam petição conjunta na Justiça do Trabalho requerendo sua homologação judicial, assistidos pelo mesmo advogado trabalhista do sindicato patronal e pactuando quitação geral inclusive quanto a eventuais créditos não mencionados. O juiz deve homologar esse acordo automaticamente?",
    "options": [
      {
        "letter": "A",
        "text": "Estando presentes os requisitos formais e advogados distintos, o juiz do trabalho é obrigado a homologar o acordo extrajudicial sem poder analisar o mérito das cláusulas."
      },
      {
        "letter": "B",
        "text": "O protocolo da petição de homologação de acordo extrajudicial interrompe o prazo prescricional em relação a todos os direitos trabalhistas por mais 2 anos."
      },
      {
        "letter": "C",
        "text": "NÃO! Há dois vícios graves e uma faculdade judicial: (1) pelo Art. 855-B, § 1º, da CLT, as partes NÃO podem ser representadas por advogado comum — é obrigatória a assistência por ADVOGADOS DISTINTOS; (2) pela jurisprudência do TST e Art. 855-C, não se pode dar quitação ampla de terceiros ou prazos de FGTS/INSS fraudulentos, e o juiz NÃO É OBRIGADO a homologar o acordo (a homologação judicial de acordo — inclusive extrajudicial — constitui FACULDADE do juiz por decisão fundamentada, não direito líquido e certo das partes, Súmula 418 do TST)!"
      },
      {
        "letter": "D",
        "text": "Da sentença judicial que indefere ou homologa apenas parcialmente o acordo extrajudicial não cabe recurso algum, apenas mandado de segurança."
      }
    ],
    "correctAnswer": "C",
    "justification": "Acordo Extrajudicial (Arts. 855-B a 855-E): petição conjunta; advogados DISTINTOS obrigatórios; juiz decide em 15 dias (pode designar audiência — homologação é faculdade, Súmula 418 TST); suspende prescrição dos direitos especificados (volta a correr após trânsito em julgado da negativa). Negou homologação = cabe RO!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Tanto o Art. 855-D (o juiz analisará o acordo, podendo designar audiência se entender necessário) quanto a Súmula 418 do TST consagram que a homologação de acordo é faculdade do magistrado (cabendo Recurso Ordinário contra a sentença que denega a homologação!)."
      },
      {
        "letter": "B",
        "explanation": "Cuidado com a letra da lei! Pelo Art. 855-E da CLT, a petição de homologação de acordo extrajudicial SUSPENDE (não interrompe!) o prazo prescricional da ação quanto aos direitos nela especificados — voltando a fluir no dia útil seguinte ao trânsito em julgado da decisão que negar a homologação!"
      },
      {
        "letter": "D",
        "explanation": "Se o juiz recusa ou homologa apenas parcialmente o acordo extrajudicial em jurisdição voluntária (extinguindo o processo), a decisão tem natureza de SENTENÇA terminativa/definitiva e desafia RECURSO ORDINÁRIO (Art. 895, I, CLT)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 855-B a 855-E e Art. 652, \"f\", da CLT",
        "textSnippet": "Acordo Extrajudicial (Arts. 855-B a 855-E): petição conjunta; advogados DISTINTOS obrigatórios; juiz decide em 15 dias (pode designar audiência — homologação é faculdade, Súmula 418 TST); suspende prescrição dos direitos especificados (volta a correr após trânsito em julgado da negativa). Negou homologação = cabe RO!"
      }
    ],
    "jurisprudence": "Súmula nº 418 do TST",
    "professorTip": "Acordo Extrajudicial (855-B): exige ADVOGADOS DISTINTOS! SUSPENDE prescrição dos pedidos listados (855-E)! Juiz NÃO é obrigado a homologar (Súmula 418) e se negar cabe RO!"
  },
  {
    "id": "mig_ptra_017",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Inquérito para Apuração de Falta Grave (Arts. 853–855 CLT e Súmula 62 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Dirigente sindical eleito comete falta grave no ambiente de trabalho. O empregador decide suspendê-lo preventivamente de imediato em 1º de março e ajuíza Inquérito para Apuração de Falta Grave na Vara do Trabalho 45 dias depois (em 15 de abril). Como o prazo é classificado e qual a consequência jurídica?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo de 30 dias previsto no Art. 853 da CLT tem natureza prescricional e só se aplica caso o empregador opte por não suspender o dirigente sindical."
      },
      {
        "letter": "B",
        "text": "No inquérito para apuração de falta grave cada parte pode indicar no máximo 3 testemunhas, igual ao rito ordinário."
      },
      {
        "letter": "C",
        "text": "A reclamação/inquérito foi ajuizada FORA DO PRAZO DECADENCIAL! Pelo Art. 853 da CLT c/c Súmula 403 do STF e Súmula 62 do TST, para instauração do inquérito para apuração de falta grave contra empregado garantido com estabilidade (como o dirigente sindical — Súmula 379 TST), o empregador apresentará reclamação por escrito à Vara do Trabalho dentro de 30 DIAS (decadenciais!), contados da DATA DA SUSPENSÃO do empregado! Como o prazo de 30 dias é DECADENCIAL, não se suspende nem interrompe, gerando extinção do inquérito com resolução do mérito e reintegração com salários do período de suspensão!"
      },
      {
        "letter": "D",
        "text": "Julgado improcedente o inquérito por não provada a falta grave, o empregador fica obrigado apenas a pagar as verbas rescisórias sem salários do período de suspensão."
      }
    ],
    "correctAnswer": "C",
    "justification": "Inquérito p/ Falta Grave (Arts. 853–855 CLT): obrigatório para dispensa por justa causa de dirigente sindical (Súmula 379 TST) e decenal; prazo DECADENCIAL de 30 DIAS da suspensão preventiva (Súmula 403 STF / Súmula 62 TST); máx 6 testemunhas por parte; improcedente = reintegração + salários da suspensão (Art. 495).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O prazo de 30 dias da suspensão é DECADENCIAL (Súmula 403 STF e Súmula 62 TST). Se o empregador NÃO suspender o empregado preventivamente, não há decadência de 30 dias da suspensão — mas deve observar a imediatidade e o prazo prescricional!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 821 da CLT, no inquérito para apuração de falta grave cada uma das partes NÃO poderá indicar mais de 6 (SEIS) TESTEMUNHAS (o dobro do rito ordinário)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 495 da CLT, reconhecida a inexistência de falta grave praticada pelo empregado, fica o empregador obrigado a REINTEGRÁ-LO no serviço e a pagar-lhe os SALÁRIOS a que teria direito no período da suspensão!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 494, 821 e 853 a 855 da CLT, Súmula 379 TST e Súmula 403 STF",
        "textSnippet": "Inquérito p/ Falta Grave (Arts. 853–855 CLT): obrigatório para dispensa por justa causa de dirigente sindical (Súmula 379 TST) e decenal; prazo DECADENCIAL de 30 DIAS da suspensão preventiva (Súmula 403 STF / Súmula 62 TST); máx 6 testemunhas por parte; improcedente = reintegração + salários da suspensão (Art. 495)."
      }
    ],
    "jurisprudence": "Súmula 403 STF e Súmulas 62 e 379 TST",
    "professorTip": "Inquérito Falta Grave (Dirigente Sindical): prazo DECADENCIAL de 30 dias da suspensão! Máx 6 testemunhas! Improcedente = REINTEGRAÇÃO + salários da suspensão!"
  },
  {
    "id": "mig_ptra_018",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Tutelas Provisórias na Justiça do Trabalho e Mandado de Segurança (Súmula 414 TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em dois momentos distintos de uma reclamação trabalhista: (1) o juiz defere tutela provisória de urgência de reintegração de dirigente sindical ANTES da sentença (decisão interlocutória); (2) em outro processo, o juiz concede a tutela provisória apenas NA PROPRIA SENTENÇA de mérito. Qual o meio processual cabível para a empresa atacar cada uma dessas decisões?",
    "options": [
      {
        "letter": "A",
        "text": "Em qualquer caso de concessão de tutela antecipada na Justiça do Trabalho, mesmo quando proferida na própria sentença, o réu deve impetrar Mandado de Segurança."
      },
      {
        "letter": "B",
        "text": "Contra a decisão interlocutória que concede ou indefere tutela provisória antes da sentença cabe imediatamente Agravo de Instrumento no Processo do Trabalho."
      },
      {
        "letter": "C",
        "text": "Pela Súmula 414 do TST (atualizada ao CPC/2015): (1) quando a tutela provisória for concedida ou indeferida ANTES da sentença (decisão interlocutória — irrecorrível de imediato pelo Art. 893, § 1º, CLT), cabe a impetração de MANDADO DE SEGURANÇA para o TRT, por ausência de recurso específico imediato (Súmula 414, II, TST); já (2) quando a tutela provisória for concedida NA SENTENÇA, NÃO cabe Mandado de Segurança — o meio impugnativo cabível é o RECURSO ORDINÁRIO, podendo a parte requerer a obtenção de efeito suspensivo ao recurso mediante requerimento dirigido ao Tribunal/Relator (Súmula 414, I, TST)!"
      },
      {
        "letter": "D",
        "text": "A superveniência da sentença de mérito no processo principal não prejudica o Mandado de Segurança anteriormente impetrado contra a decisão liminar."
      }
    ],
    "correctAnswer": "C",
    "justification": "Súmula 414 TST: Tutela provisória NA sentença -> Recurso Ordinário (+ pedido de efeito suspensivo ao Relator/Presidente, I); Tutela provisória ANTES da sentença -> Mandado de Segurança (II); Prolação posterior da sentença -> perda do objeto do MS (III). Lembre-se: AI na JT só destranca recurso!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Súmula 414, I, do TST: a tutela provisória concedida NA SENTENÇA não comporta impugnação pela via do Mandado de Segurança, porque é impugnável mediante RECURSO ORDINÁRIO (com pedido de efeito suspensivo)!"
      },
      {
        "letter": "B",
        "explanation": "ATENÇÃO! Diferente do CPC (onde cabe Agravo de Instrumento contra tutelas provisórias — Art. 1.015, I), no Processo do Trabalho o Agravo de Instrumento serve EXCLUSIVAMENTE para destrancar recurso denegado (Art. 897, \"b\", CLT)! Logo, contra tutela provisória antes da sentença cabe MANDADO DE SEGURANÇA (Súmula 414, II, TST)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 414, III, do TST, a superveniência da sentença, nos autos originários, faz PERDER O OBJETO do Mandado de Segurança que impugnava a concessão ou o indeferimento da tutela provisória anterior!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 294 e ss. CPC e Súmula 414 do TST",
        "textSnippet": "Súmula 414 TST: Tutela provisória NA sentença -> Recurso Ordinário (+ pedido de efeito suspensivo ao Relator/Presidente, I); Tutela provisória ANTES da sentença -> Mandado de Segurança (II); Prolação posterior da sentença -> perda do objeto do MS (III). Lembre-se: AI na JT só destranca recurso!"
      }
    ],
    "jurisprudence": "Súmula nº 414 do TST",
    "professorTip": "Súmula 414 TST: Tutela ANTES da sentença = Mandado de Segurança! Tutela NA sentença = Recurso Ordinário + pedido de efeito suspensivo! Saiu sentença = MS perde objeto!"
  },
  {
    "id": "mig_ptra_019",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Irrecorribilidade das Decisões Interlocutórias na CLT e Exceções (Súmula 214 TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "No curso da fase de conhecimento trabalhista, o juiz profere decisões interlocutórias indeferindo a oitiva de uma testemunha e rejeitando preliminar de ilegitimidade passiva. Em regra, cabe recurso imediato? E quais são as exceções da Súmula 214 do TST?",
    "options": [
      {
        "letter": "A",
        "text": "No Processo do Trabalho cabe Agravo de Instrumento contra decisões interlocutórias que indeferem provas ou tutelas de urgência."
      },
      {
        "letter": "B",
        "text": "Quando o juiz acolhe exceção de incompetência territorial remetendo os autos para outra Vara do Trabalho vinculada ao mesmo TRT, cabe Recurso Ordinário imediato."
      },
      {
        "letter": "C",
        "text": "Em regra, NÃO cabe recurso imediato contra decisões interlocutórias na Justiça do Trabalho (princípio da irrecorribilidade imediata das interlocutórias — Art. 893, § 1º, CLT — devendo a parte consignar seu PROTESTO em audiência para evitar preclusão e impugnar apenas no Recurso Ordinário contra a sentença definitiva!). As ÚNICAS exceções da Súmula 214 do TST (em que cabe recurso imediato) são decisão interlocutória: (a) de TRT contrária à Súmula ou OJ do TST; (b) suscetível de impugnação mediante recurso para o MESMO Tribunal (ex.: agravo interno contra decisão monocrática de relator); e (c) que acolhe exceção de incompetência territorial com remessa dos autos para Vara vinculada a TRT DISTINTO!"
      },
      {
        "letter": "D",
        "text": "A decisão do juiz do trabalho que decreta o indeferimento da prova testemunhal sem protesto imediato da parte em audiência pode ser alegada livremente pela primeira vez no Recurso Ordinário."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 893, § 1º CLT: interlocutórias são irrecorríveis de imediato (exigem protesto na 1ª oportunidade — Art. 795 CLT). Súmula 214 TST (exceções em que cabe recurso imediato): (a) decisão do TRT contrária à Súmula/OJ do TST; (b) impugnável por recurso para o mesmo tribunal (agravo interno); (c) acolhe incompetência territorial enviando p/ OUTRO TRT (cabe RO).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Agravo de Instrumento na JT (Art. 897, \"b\", CLT) NÃO ataca interlocutórias de instrução — serve APENAS para impugnar despacho que denegou seguimento a outro recurso!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 214, \"c\", do TST, só cabe Recurso Ordinário imediato quando a remessa for para Vara vinculada a TRIBUNAL REGIONAL DISTINTO (entre Varas do mesmo TRT não cabe recurso imediato)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 795 da CLT, as nulidades processuais devem ser arguidas À PRIMEIRA VEZ em que as partes tiverem de falar em audiência ou nos autos (protesto antipreclusivo em ata), sob pena de preclusão!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 893, § 1º, da CLT e Súmula 214 do TST",
        "textSnippet": "Art. 893, § 1º CLT: interlocutórias são irrecorríveis de imediato (exigem protesto na 1ª oportunidade — Art. 795 CLT). Súmula 214 TST (exceções em que cabe recurso imediato): (a) decisão do TRT contrária à Súmula/OJ do TST; (b) impugnável por recurso para o mesmo tribunal (agravo interno); (c) acolhe incompetência territorial enviando p/ OUTRO TRT (cabe RO)."
      }
    ],
    "jurisprudence": "Súmula nº 214 do TST",
    "professorTip": "Interlocutória na CLT = IRRECORRÍVEL (faz protesto p/ recorrer na sentença)! Exceções (Súmula 214): TRT contra Súmula/OJ TST | Recurso pro mesmo tribunal | Incompetência p/ OUTRO TRT!"
  },
  {
    "id": "mig_ptra_020",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Depósito Recursal - Valor, Natureza, Isenções, Redução 50% e Seguro Garantia (Art. 899 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa de Pequeno Porte (EPP) é condenada em reclamação trabalhista a pagar R$ 40.000,00 de indenização e pretende interpor Recurso Ordinário ao TRT utilizando seguro garantia judicial no lugar do depósito em dinheiro. Qual o valor do depósito recursal para a EPP e quais entidades têm isenção total?",
    "options": [
      {
        "letter": "A",
        "text": "O depósito recursal também é exigido do empregado reclamante quando interpor Recurso Ordinário contra sentença de improcedência."
      },
      {
        "letter": "B",
        "text": "O depósito recursal (que possui natureza de GARANTIA DO JUÍZO — só exigido do EMPREGADOR quando há condenação em PECÚNIA, Súmula 161 TST!) tem seu valor REDUZIDO PELA METADE (50%) para entidades sem fins lucrativos, empregadores domésticos, microempreendedores individuais (MEI), microempresas (ME) e empresas de pequeno porte (EPP — Art. 899, § 9º, CLT)! Além disso, o depósito recursal PODE ser substituído por fiança bancária ou SEGURO GARANTIA JUDICIAL (Art. 899, § 11, CLT — com acréscimo de 30% pelo Ato Conjunto TST/CSJT nº 1/2019)! E são TOTALMENTE ISENTOS do depósito recursal (Art. 899, § 10, CLT): beneficiários da justiça gratuita, entidades filantrópicas e empresas em RECUPERAÇÃO JUDICIAL (além da Fazenda Pública e massa falida pela Súmula 86)!"
      },
      {
        "letter": "C",
        "text": "As empresas em recuperação judicial devem recolher 50% do depósito recursal em dinheiro."
      },
      {
        "letter": "D",
        "text": "Havendo condenação solidária de duas empresas no polo passivo, o depósito recursal efetuado integralmente por uma delas nunca aproveita à outra."
      }
    ],
    "correctAnswer": "B",
    "justification": "Depósito Recursal (Art. 899 CLT): garantia do juízo paga pelo réu só se houver condenação em pecúnia (Súmula 161 TST). Comprovado no prazo do recurso (Súmula 245). Cabe seguro garantia judicial ou fiança bancária (§ 11). Redução de 50% (§ 9º): ME, EPP, MEI, doméstico, sem fins lucrativos. Isenção 100% (§ 10): Recuperação Judicial, entidades filantrópicas, justiça gratuita (+ Fazenda Pública e massa falida). Súmula 128, III: solidária aproveita se não pedir exclusão da lide.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Jamais! O depósito recursal garante futura execução contra o empregador condenado em pecúnia: o empregado NÃO recolhe depósito recursal (nem quando sucumbente na ação, e nem mesmo o réu se não houver condenação em pecúnia pela Súmula 161 TST!)."
      },
      {
        "letter": "C",
        "explanation": "Atenção à distinção dos §§ 9º e 10 do Art. 899 CLT: ME / EPP / MEI / Doméstico / Sem fins lucrativos = pagam 50% (§ 9º); Recuperação Judicial / Justiça Gratuita / Entidades Filantrópicas = ISENTOS 100% do depósito recursal (§ 10)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 128, III, do TST, havendo condenação SOLIDÁRIA de duas ou mais empresas, o depósito recursal efetuado por uma delas APROVEITA às demais, QUANDO a empresa que efetuou o depósito NÃO pleiteia sua exclusão da lide!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 899, §§ 4º, 9º, 10 e 11, da CLT e Súmulas 128, 161 e 245 do TST",
        "textSnippet": "Depósito Recursal (Art. 899 CLT): garantia do juízo paga pelo réu só se houver condenação em pecúnia (Súmula 161 TST). Comprovado no prazo do recurso (Súmula 245). Cabe seguro garantia judicial ou fiança bancária (§ 11). Redução de 50% (§ 9º): ME, EPP, MEI, doméstico, sem fins lucrativos. Isenção 100% (§ 10): Recuperação Judicial, entidades filantrópicas, justiça gratuita (+ Fazenda Pública e massa falida). Súmula 128, III: solidária aproveita se não pedir exclusão da lide."
      }
    ],
    "jurisprudence": "Súmulas 86, 128, 161 e 245 do TST",
    "professorTip": "Depósito Recursal: 50% = ME/EPP/MEI/Doméstico/Sem fins lucrativos (§ 9º) | ISENTO = Recuperação Judicial / Filantrópica / Justiça Gratuita (§ 10)! Pode Seguro Garantia (§ 11)!"
  },
  {
    "id": "mig_ptra_021",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso Ordinário, Efeito Devolutivo em Profundidade e Recurso Adesivo",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "O reclamante vence parcialmente a ação (ganha R$ 15 mil de horas extras e perde R$ 5 mil de dano moral) e não recorre no prazo de 8 dias; a empresa interpõe Recurso Ordinário tempestivo. Intimado para contrarrazões, o reclamante decide interpor Recurso Ordinário Adesivo. Qual o prazo, as hipóteses de cabimento na JT e os limites do efeito devolutivo?",
    "options": [
      {
        "letter": "A",
        "text": "No Processo do Trabalho não se admite recurso adesivo, ou sua admissão restringe-se exclusivamente ao Recurso Ordinário."
      },
      {
        "letter": "B",
        "text": "Pela Súmula 283 do TST, o RECURSO ADESIVO é plenamente compatível com o Processo do Trabalho e cabe, no prazo de 8 DIAS das contrarrazões, nas hipóteses de interposição de RECURSO ORDINÁRIO, AGRAVO DE PETIÇÃO, RECURSO DE REVISTA e EMBARGOS NO TST — desde que haja sucumbência recíproca (a matéria do adesivo NÃO precisa estar relacionada à do recurso principal)! Ademais, pela Súmula 393 do TST, o efeito devolutivo em profundidade do Recurso Ordinário transfere ao Tribunal a apreciação de todos os fundamentos da inicial ou da defesa ainda que não examinados na sentença (desde que renovados ou contidos no capítulo impugnado), podendo o TRT julgar imediatamente o mérito se a causa estiver madura (§ 2º)!"
      },
      {
        "letter": "C",
        "text": "O recurso adesivo trabalhista tem vida autônoma: se a empresa desistir do recurso principal, o recurso adesivo do empregado continua sendo julgado normalmente."
      },
      {
        "letter": "D",
        "text": "O Recurso Ordinário em face de sentença proferida no rito sumaríssimo também é cabível das decisões definitivas de competência originária dos TRTs."
      }
    ],
    "correctAnswer": "B",
    "justification": "Recurso Ordinário (Art. 895 CLT — 8 dias): Vara -> TRT (inc. I); TRT em competência originária (MS, AR, Dissídio Coletivo) -> TST (inc. II). Recurso Adesivo (Súmula 283 TST): cabe em RO, AP, RR e Embargos no prazo de contrarrazões (subordinado ao principal). Súmula 393: efeito devolutivo em profundidade + teoria da causa madura.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 283 do TST lista expressamente 4 recursos que admitem interposição adesiva no prazo de 8 dias: Recurso Ordinário, Agravo de Petição, Recurso de Revista e Embargos!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 997, § 2º, III, do CPC, o recurso adesivo fica SUBORDINADO ao recurso principal: se o recurso principal não for conhecido ou houver desistência deste, o recurso adesivo NÃO será conhecido!"
      },
      {
        "letter": "D",
        "explanation": "Sim! Pelo Art. 895, I e II, da CLT, cabe Recurso Ordinário (8 dias úteis) tanto das sentenças definitivas/terminativas das Varas do Trabalho ao TRT (inciso I) quanto das decisões definitivas ou terminativas dos TRTs em processos de sua COMPETÊNCIA ORIGINÁRIA (MS, Ação Rescisória, Dissídio Coletivo — inciso II — para o TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 895 da CLT, Art. 1.013 do CPC e Súmulas 283, 393 e 422 do TST",
        "textSnippet": "Recurso Ordinário (Art. 895 CLT — 8 dias): Vara -> TRT (inc. I); TRT em competência originária (MS, AR, Dissídio Coletivo) -> TST (inc. II). Recurso Adesivo (Súmula 283 TST): cabe em RO, AP, RR e Embargos no prazo de contrarrazões (subordinado ao principal). Súmula 393: efeito devolutivo em profundidade + teoria da causa madura."
      }
    ],
    "jurisprudence": "Súmulas 283 e 393 do TST",
    "professorTip": "RO (8d): Vara->TRT e TRT originário->TST! Recurso Adesivo (Súmula 283 TST) cabe em: RO, AP, RR e Embargos (8 dias, subordinado ao principal)!"
  },
  {
    "id": "mig_ptra_022",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Embargos de Declaração na CLT (Art. 897-A) - Prazo, Efeito Modificativo e Interrupção",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Proferida sentença na Vara do Trabalho com contradição e erro manifesto no exame dos pressupostos extrínsecos de admissibilidade de recurso, a parte opõe Embargos de Declaração no 5º dia útil requerendo efeito modificativo e prequestionamento. Como o Art. 897-A da CLT disciplina a vista à parte contrária, o efeito sobre o prazo recursal e o erro material?",
    "options": [
      {
        "letter": "A",
        "text": "Os Embargos de Declaração trabalhistas suspendem (não interrompem) o prazo para interposição do Recurso Ordinário."
      },
      {
        "letter": "B",
        "text": "Os Embargos de Declaração são opostos no prazo de 5 DIAS ÚTEIS (10 dias para Fazenda Pública e MPT!) nas hipóteses de omissão, contradição, obscuridade e MANIFESTO EQUÍVOCO NO EXAME DOS PRESSUPOSTOS EXTRÍNSECOS DO RECURSO (Art. 897-A, caput, CLT)! Caso os embargos tenham eventual EFEITO MODIFICATIVO, é obrigatória a intimação prévia da parte contrária para manifestação em 5 DIAS (§ 2º e OJ 142 SDI-1)! Os ED tempestivos INTERROMPEM o prazo para interposição de outros recursos por qualquer das partes (§ 3º — salvo se intempestivos ou irregulares quanto à representação!), e os erros materiais podem ser corrigidos de ofício ou a requerimento (§ 1º)!"
      },
      {
        "letter": "C",
        "text": "Mesmo quando visam atribuir efeito modificativo ao julgado, o juiz pode acolher os Embargos de Declaração sem ouvir a parte contrária para preservar a celeridade."
      },
      {
        "letter": "D",
        "text": "Na Súmula 297 do TST, se o Tribunal omitir tese jurídica expressamente invocada nos Embargos de Declaração, a parte fica impedida de levar a matéria no Recurso de Revista por falta de prequestionamento."
      }
    ],
    "correctAnswer": "B",
    "justification": "ED na CLT (Art. 897-A): prazo 5 dias úteis (Fazenda/MPT = 10 dias). Cabem por omissão, contradição, obscuridade e equívoco manifesto nos pressupostos extrínsecos do recurso. Efeito modificativo = vista obrigatória de 5 dias ao contrário (§ 2º / OJ 142). Interrompem outros recursos (§ 3º). Prequestionamento ficto = questão jurídica (Súmula 297, III).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 897-A, § 3º, da CLT (c/c Art. 1.026 CPC), os Embargos de Declaração tempestivos INTERROMPEM (zeram!) o prazo para interposição de outros recursos, para ambas as partes!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 897-A, § 2º, da CLT e OJ 142 da SDI-1 do TST, é NULA por cerceamento de defesa a decisão que acolhe embargos de declaração com efeito modificativo sem prévia vista à parte contrária por 5 dias!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 297, III, do TST, considera-se PREQUESTIONADA (prequestionamento ficto!) a questão JURÍDICA invocada no recurso principal sobre a qual se omite o Tribunal de pronunciar tese, não obstante opostos embargos de declaração!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 897-A da CLT e Súmulas 278, 297 e 421 do TST",
        "textSnippet": "ED na CLT (Art. 897-A): prazo 5 dias úteis (Fazenda/MPT = 10 dias). Cabem por omissão, contradição, obscuridade e equívoco manifesto nos pressupostos extrínsecos do recurso. Efeito modificativo = vista obrigatória de 5 dias ao contrário (§ 2º / OJ 142). Interrompem outros recursos (§ 3º). Prequestionamento ficto = questão jurídica (Súmula 297, III)."
      }
    ],
    "jurisprudence": "Súmulas 278, 297, 421 e OJ 142 SDI-1 TST",
    "professorTip": "ED (5 dias úteis): cabem também por erro em pressuposto extrínseco do recurso! Efeito modificativo = exige vista em 5 dias (§ 2º)! ED tempestivos = INTERROMPEM prazo de recurso! Prequestionamento ficto = questão jurídica (Súmula 297, III)!"
  },
  {
    "id": "mig_ptra_023",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso de Revista - Pressupostos, Transcendência e Ritos (Arts. 896 e 896-A CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado perde no TRT em reclamação de RITO ORDINÁRIO (alegando reexame do conjunto probatório e divergência com outra Turma do mesmo TRT) e pretende interpor Recurso de Revista ao TST; paralelamente, outra empresa interpõe Recurso de Revista no RITO SUMARÍSSIMO alegando violação de artigo da CLT. Algum dos dois recursos de revista é admissível?",
    "options": [
      {
        "letter": "A",
        "text": "No rito sumaríssimo, cabe Recurso de Revista por violação literal de dispositivo da CLT e por Orientação Jurisprudencial (OJ) da SDI-1 do TST."
      },
      {
        "letter": "B",
        "text": "NENHUM DOS DOIS! Primeiro, não cabe Recurso de Revista para REEXAME DE FATOS E PROVAS (Súmula 126 do TST), nem por divergência jurisprudencial entre Turmas do MESMO TRT (OJ 111 SDI-1 TST — a divergência apta no Art. 896, \"a\", exige outro TRT, SDI do TST ou súmula/OJ do TST!). Segundo, nas causas sujeitas ao RITO SUMARÍSSIMO (Art. 896, § 9º, CLT), somente será admitido Recurso de Revista por contrariedade a SÚMULA DO TST, SÚMULA VINCULANTE DO STF ou por VIOLAÇÃO DIRETA DA CONSTITUIÇÃO FEDERAL (não cabe por violação de lei federal como a CLT, nem por divergência jurisprudencial nem por OJ — Súmula 442 TST)! Além disso, todo RR exige indicação da TRANSCENDÊNCIA (econômica, política, social ou jurídica — Art. 896-A) e transcrição do trecho prequestionado (§ 1º-A)!"
      },
      {
        "letter": "C",
        "text": "Na fase de execução de sentença trabalhista (contra acórdão de Agravo de Petição), cabe Recurso de Revista amplamente por violação de lei federal e divergência entre TRTs."
      },
      {
        "letter": "D",
        "text": "Da decisão monocrática do relator no TST que não reconhece a transcendência do Recurso de Revista em agravo de instrumento cabe imediatamente Agravo Interno ou Recurso Extraordinário."
      }
    ],
    "correctAnswer": "B",
    "justification": "Recurso de Revista (8 dias úteis, Art. 896 CLT): natureza extraordinária (Súmula 126 veda reexame de provas); exige prequestionamento c/ transcrição do trecho (§ 1º-A) e transcendência (Art. 896-A). Ordinário = divergência entre TRTs/SDI/Súmula ou violação de lei/CF. Sumaríssimo (§ 9º) = Súmula TST, SV STF ou CF. Execução (§ 2º / Súmula 266) = SÓ violação direta da CF (salvo execução fiscal / CNDT no § 10)!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Art. 896, § 9º, CLT + Súmula 442 TST: no rito SUMARÍSSIMO, RR só cabe por (1) Súmula TST, (2) Súmula Vinculante STF ou (3) violação direta à CF! (Jamais CLT, divergência entre TRTs ou OJ!)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 896, § 2º, da CLT e Súmula 266 do TST, das decisões proferidas pelos TRTs em EXECUÇÃO DE SENTENÇA (Agravo de Petição) NÃO caberá Recurso de Revista, SALVO na hipótese de ofensa direta e literal de norma da CONSTITUIÇÃO FEDERAL (ou na execução fiscal / certidão negativa de débitos trabalhistas conforme § 10)!"
      },
      {
        "letter": "D",
        "explanation": "Atenção à decisão do STF na ArgInc-1000845-52 / ADI ou TST: o § 5º do Art. 896-A (que declarava irrecorrível a decisão monocrática sobre ausência de transcendência em AIRR) foi declarado INCONSTITUCIONAL pelo Órgão Especial do TST (passando a caber Agravo Interno para o colegiado)! Já o acórdão da Turma que denega transcendência ainda restringe embargos à SDI-1 (§ 4º)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 896 e 896-A da CLT e Súmulas 126, 296, 333 e 337 do TST",
        "textSnippet": "Recurso de Revista (8 dias úteis, Art. 896 CLT): natureza extraordinária (Súmula 126 veda reexame de provas); exige prequestionamento c/ transcrição do trecho (§ 1º-A) e transcendência (Art. 896-A). Ordinário = divergência entre TRTs/SDI/Súmula ou violação de lei/CF. Sumaríssimo (§ 9º) = Súmula TST, SV STF ou CF. Execução (§ 2º / Súmula 266) = SÓ violação direta da CF (salvo execução fiscal / CNDT no § 10)!"
      }
    ],
    "jurisprudence": "Súmulas 126, 266, 297 e 442 do TST",
    "professorTip": "RR no Ordinário: outro TRT/SDI/Súmula ou Lei/CF (SEM reexame de prova — Súmula 126)! RR no Sumaríssimo: SÓ Súmula TST, SV STF ou CF! RR na Execução (Súmula 266): SÓ CF (exceto execução fiscal)!"
  },
  {
    "id": "mig_ptra_024",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Agravo de Instrumento e Agravo de Petição (Art. 897 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Presidente do TRT nega seguimento a Recurso de Revista da empresa; paralelamente, em outra ação já na fase de execução definitiva, o juiz da Vara julga improcedentes os Embargos à Execução da empresa, que pretende recorrer impugnando o excesso de cálculos. Quais os recursos cabíveis e suas exigências próprias?",
    "options": [
      {
        "letter": "A",
        "text": "O Agravo de Petição dispensa delimitação dos valores impugnados quando o agravante impugnar apenas parte da conta de liquidação."
      },
      {
        "letter": "B",
        "text": "Contra a decisão que denega seguimento a recurso (RO, RR, AP etc.) cabe AGRAVO DE INSTRUMENTO no prazo de 8 DIAS ÚTEIS (Art. 897, \"b\", CLT), exigindo depósito recursal específico de 50% do valor do depósito do recurso que se pretende destrancar (§ 7º — salvo se o recurso destrancado já estiver integralmente garantido ou o recorrente for isento, Súmula 128, II, TST!). Já contra decisões do juiz na EXECUÇÃO (ex.: sentença de embargos à execução, liquidação impugnada, embargos de terceiro, incidente de desconsideração da PJ) cabe AGRAVO DE PETIÇÃO em 8 DIAS ÚTEIS (Art. 897, \"a\", CLT), o qual SÓ será recebido quando o agravante DELIMITAR JUSTIFICADAMENTE as matérias e os VALORES impugnados (§ 1º), permitindo a execução imediata da parte incontroversa!"
      },
      {
        "letter": "C",
        "text": "O Agravo de Instrumento trabalhista exige pagamento de custas específicas prévias além do depósito de 50% para ser conhecido."
      },
      {
        "letter": "D",
        "text": "Se a empresa interpuser Agravo de Petição contra decisão que rejeitou Exceção de Pré-Executividade, o recurso é sempre inadmissível por ser decisão interlocutória."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 897 CLT (prazo 8 dias úteis): (a) Agravo de Petição = decisões na execução; exige delimitação justificada de matérias e valores (§ 1º) e juízo garantido; (b) Agravo de Instrumento = exclusivamente para destrancar recurso denegado; depósito de 50% do recurso trancado (§ 7º), salvo juízo já garantido ou isenção.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 897, § 1º, da CLT (e Súmula 416 TST), o Agravo de Petição só será recebido quando o agravante delimitar, JUSTIFICADAMENTE, as matérias e os VALORES impugnados, permitida a execução imediata da parte remanescente!"
      },
      {
        "letter": "C",
        "explanation": "O Agravo de Instrumento trabalhista NÃO tem custas próprias (e hoje tramita nos próprios autos eletrônicos do PJe — dispensando formação de traslado em papel em autos digitais); exige apenas o depósito recursal do § 7º (50% do depósito do recurso trancado, salvo se garantido o juízo ou isento)!"
      },
      {
        "letter": "D",
        "explanation": "Se a Exceção de Pré-Executividade for ACOLHIDA (extinguindo a execução), cabe Agravo de Petição de imediato; se REJEITADA, por manter o prosseguimento da execução, assume natureza interlocutória (irrecorrível de imediato, devendo garantir o juízo e discutir em embargos à execução)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 897, alíneas \"a\" e \"b\" e §§ 1º, 4º, 5º e 8º, da CLT",
        "textSnippet": "Art. 897 CLT (prazo 8 dias úteis): (a) Agravo de Petição = decisões na execução; exige delimitação justificada de matérias e valores (§ 1º) e juízo garantido; (b) Agravo de Instrumento = exclusivamente para destrancar recurso denegado; depósito de 50% do recurso trancado (§ 7º), salvo juízo já garantido ou isenção."
      }
    ],
    "jurisprudence": "Súmulas 128 e 416 do TST",
    "professorTip": "Agravo de Instrumento (8d) = SÓ destranca recurso denegado (depósito de 50%)! Agravo de Petição (8d) = decisões na EXECUÇÃO (exige delimitar matérias e VALORES — Art. 897, § 1º)!"
  },
  {
    "id": "mig_ptra_025",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Embargos no TST (Art. 894 CLT) e Súmula 422 TST (Princípio da Dialeticidade)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Turma do TST julga Recurso de Revista proferindo acórdão que diverge frontalmente de julgado de outra Turma do próprio TST na interpretação de lei federal trabalhista; paralelamente, advogado interpõe recurso ordinário apenas copiando integralmente a petição inicial sem atacar especificamente os fundamentos da sentença. Qual o recurso cabível da divergência entre Turmas e o que acontece com o recurso copiado?",
    "options": [
      {
        "letter": "A",
        "text": "Contra decisão de Turma do TST que nega provimento a Agravo de Instrumento mantendo a ausência de pressupostos intrínsecos do RR cabem amplamente Embargos à SDI-1."
      },
      {
        "letter": "B",
        "text": "Contra decisão de Turma do TST que divergir de outra Turma ou da SDI, ou contrariar súmula/OJ do TST ou Súmula Vinculante do STF, cabem EMBARGOS DE DIVERGÊNCIA no prazo de 8 DIAS ÚTEIS para a SDI-1 do TST (Art. 894, II, CLT — também cabem Embargos Infringentes em 8 dias de decisão não unânime em dissídio coletivo de competência originária do TST, inciso I!); já o recurso que NÃO impugna os fundamentos da decisão recorrida (cópia pura da inicial/contestação) NÃO é conhecido por ausência de DIALETICIDADE, nos termos da Súmula 422, I, do TST!"
      },
      {
        "letter": "C",
        "text": "O prazo dos Embargos de Divergência para a SDI-1 do TST é de 15 dias úteis por força do CPC."
      },
      {
        "letter": "D",
        "text": "A Súmula 422 do TST aplica-se inclusive no Recurso Ordinário ainda que a motivação do recurso não seja totalmente dissociada da sentença."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 894 CLT (8 dias): (I) Embargos Infringentes (dissídio coletivo originário do TST não unânime); (II) Embargos de Divergência para SDI-1 (divergência entre Turmas ou com SDI, ou contrariedade à Súmula/OJ TST ou SV STF). Súmula 353: em regra não cabe de acórdão em AI (salvo alíneas \"a\" a \"f\"). Súmula 422: falta de impugnação aos fundamentos = não conhecimento (dialeticidade).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela Súmula 353 do TST, NÃO cabem embargos para a SDI-1 de decisão de Turma proferida em Agravo de Instrumento, SALVO exceções específicas listadas na própria Súmula 353 (ex.: pressupostos extrínsecos do AI, multa por litigância/embargos protelatórios aplicada na Turma, contrariedade à Súmula/OJ no mérito do RR em caso de superação)!"
      },
      {
        "letter": "C",
        "explanation": "Todos os embargos previstos no Art. 894 da CLT (divergência à SDI-1 e infringentes em dissídio coletivo na SDC) obedecem ao prazo trabalhista de 8 DIAS ÚTEIS!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 422, III, do TST, inaplicável a exigência do item I ao Recurso Ordinário de competência de TRT se a motivação do recurso não for inteiramente alheia/dissociada da sentença (mas nos recursos ao TST a dialeticidade do item I é rigorosa)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 894 da CLT e Súmulas 353 e 422 do TST",
        "textSnippet": "Art. 894 CLT (8 dias): (I) Embargos Infringentes (dissídio coletivo originário do TST não unânime); (II) Embargos de Divergência para SDI-1 (divergência entre Turmas ou com SDI, ou contrariedade à Súmula/OJ TST ou SV STF). Súmula 353: em regra não cabe de acórdão em AI (salvo alíneas \"a\" a \"f\"). Súmula 422: falta de impugnação aos fundamentos = não conhecimento (dialeticidade)."
      }
    ],
    "jurisprudence": "Súmulas 353 e 422 do TST",
    "professorTip": "Divergência entre Turmas do TST = EMBARGOS à SDI-1 (8 dias — Art. 894, II)! Recurso que não ataca os fundamentos da decisão = NÃO CONHECIDO por falta de dialeticidade (Súmula 422 TST)!"
  },
  {
    "id": "mig_ptra_026",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Remessa Necessária (Reexame Obrigatório) na Justiça do Trabalho",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Município (Fazenda Pública) é condenado em reclamação trabalhista a pagar R$ 45.000,00 (menos de 100 salários mínimos) em sentença em perfeita consonância com súmula do TST, e não interpõe Recurso Ordinário no prazo legal. A sentença está sujeita ao reexame necessário obrigatório ao TRT?",
    "options": [
      {
        "letter": "A",
        "text": "Toda sentença condenatória proferida contra Município na Justiça do Trabalho está sujeita ao duplo grau obrigatório independentemente do valor da condenação."
      },
      {
        "letter": "B",
        "text": "NÃO! Pela Súmula 303, I, do TST (alinhada ao Art. 496, §§ 3º e 4º, do CPC!), nas decisões proferidas contra a Fazenda Pública NÃO se aplica a remessa necessária quando: (1) a condenação ou proveito econômico não ultrapassar 1.000 salários mínimos (União), 500 salários mínimos (Estados/DF/Capitais) ou 100 SALÁRIOS MÍNIMOS (Municípios — aqui R$ 45.000 é inferior a 100 SM!); OU (2) quando a decisão estiver em consonância com decisão plenária do STF, súmula do STF ou do TST ou tese em recurso repetitivo!"
      },
      {
        "letter": "C",
        "text": "Empresas públicas e sociedades de economia mista também têm direito à remessa necessária e ao prazo em dobro do DL 779/69."
      },
      {
        "letter": "D",
        "text": "A Fazenda Pública, quando não interpõe Recurso Ordinário e o processo sobe por remessa necessária, pode interpor Recurso de Revista contra o acórdão do TRT que apenas confirmou a sentença."
      }
    ],
    "correctAnswer": "B",
    "justification": "Remessa Necessária na JT (DL 779/69 + Súmula 303 TST): NÃO se aplica abaixo de 1.000 SM (União), 500 SM (Estados/DF/Capitais) e 100 SM (Municípios), nem se em consonância com súmula STF/TST ou repetitivo. Ente que não interpôs RO voluntário não pode interpor RR se acórdão não agravou a condenação (OJ 334 SDI-1).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 303 do TST incorporou integralmente os pisos de dispensa da remessa necessária do CPC/2015: 1.000 SM (União), 500 SM (Estados/DF/Capitais) e 100 SM (Municípios), além das hipóteses de conformidade com súmulas!"
      },
      {
        "letter": "C",
        "explanation": "O DL nº 779/1969 aplica-se exclusivamente às pessoas jurídicas de direito público (União, Estados, DF, Municípios, autarquias e fundações públicas) — NÃO se estende a empresas públicas nem a sociedades de economia mista (exceto se equiparadas em regime exclusivo de serviço público não concorrencial por decisão específica do STF como Correios/ECT)!"
      },
      {
        "letter": "D",
        "explanation": "Pela OJ 334 da SDI-1 do TST, incabível Recurso de Revista de ente público que não interpôs Recurso Ordinário voluntário contra a sentença de primeiro grau (preclusão lógica), salvo se o TRT agravar a condenação na remessa necessária!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 1º, V, do Decreto-Lei nº 779/1969, Art. 496 CPC e Súmula 303 do TST",
        "textSnippet": "Remessa Necessária na JT (DL 779/69 + Súmula 303 TST): NÃO se aplica abaixo de 1.000 SM (União), 500 SM (Estados/DF/Capitais) e 100 SM (Municípios), nem se em consonância com súmula STF/TST ou repetitivo. Ente que não interpôs RO voluntário não pode interpor RR se acórdão não agravou a condenação (OJ 334 SDI-1)."
      }
    ],
    "jurisprudence": "Súmula 303 e OJ 334 SDI-1 do TST",
    "professorTip": "Súmula 303 TST (Dispensa Remessa Necessária): < 1.000 SM (União) | < 500 SM (Estados/DF/Capitais) | < 100 SM (Municípios) | ou conforme Súmula STF/TST!"
  },
  {
    "id": "mig_ptra_027",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Dissídio Coletivo - Natureza, Comum Acordo (Art. 114, § 2º, CF) e Ação de Cumprimento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Sindicato profissional e sindicato patronal frustram a negociação coletiva de reajuste salarial e apenas o sindicato dos trabalhadores ajuíza Dissídio Coletivo de natureza econômica no TRT, sem a concordância do sindicato patronal (que suscita preliminar na defesa). Em outro caso, empresa descumpre cláusula de Convenção Coletiva vigente e o sindicato propõe Ação de Cumprimento na Vara do Trabalho. O que decide a JT em cada ação?",
    "options": [
      {
        "letter": "A",
        "text": "A exigência de \"comum acordo\" do Art. 114, § 2º, da CF foi declarada inconstitucional pelo STF por violar o acesso à jurisdição."
      },
      {
        "letter": "B",
        "text": "No DISSÍDIO COLETIVO DE NATUREZA ECONÔMICA, o Art. 114, § 2º, da CF exige o COMUM ACORDO entre as partes como pressuposto processual constitucional (declarado plenamente CONSTITUCIONAL pelo STF na ADI 3423 e Súmula/OJ TST!), logo, havendo oposição expressa do sindicato patronal, o dissídio coletivo econômico deve ser EXTINTO SEM RESOLUÇÃO DO MÉRITO (o comum acordo NÃO é exigido no Dissídio Coletivo de GREVE em atividade essencial ajuizado pelo MPT pelo Art. 114, § 3º, nem no Dissídio Coletivo Jurídico/declaratório)! Já na AÇÃO DE CUMPRIMENTO (Art. 872, parágrafo único, CLT), ajuizada na Vara do Trabalho, NÃO precisa de comum acordo nem de trânsito em julgado da sentença normativa (Súmula 246 TST)!"
      },
      {
        "letter": "C",
        "text": "A Ação de Cumprimento para executar cláusula de sentença normativa ou CCT deve ser ajuizada originariamente no TRT e aguardar o trânsito em julgado."
      },
      {
        "letter": "D",
        "text": "O Ministério Público do Trabalho não tem legitimidade para ajuizar dissídio coletivo nem mesmo em caso de greve em atividade essencial."
      }
    ],
    "correctAnswer": "B",
    "justification": "Dissídio Coletivo (competência originária do TRT ou SDC/TST): Econômico = exige COMUM ACORDO (Art. 114, § 2º, CF + STF ADI 3423); Greve em essencial pelo MPT (§ 3º) ou Dissídio Jurídico = dispensa comum acordo. Ação de Cumprimento (Art. 872 CLT) = Vara do Trabalho, dispensa trânsito em julgado (Súmula 246 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na ADI 3423 (julgada em 2020), o STF confirmou a CONSTITUCIONALIDADE da exigência de \"comum acordo\" para o ajuizamento do dissídio coletivo de natureza econômica!"
      },
      {
        "letter": "C",
        "explanation": "A Ação de Cumprimento (Art. 872, parágrafo único, CLT) é ação INDIVIDUAL ou coletiva de competência da VARA DO TRABALHO e dispensa o trânsito em julgado da sentença normativa (Súmula 246 TST)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 114, § 3º, da CF, em caso de greve em atividade essencial, com possibilidade de lesão do interesse público, o MINISTÉRIO PÚBLICO DO TRABALHO poderá ajuizar dissídio coletivo, competindo à Justiça do Trabalho decidir o conflito (sem necessidade de comum acordo)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 114, §§ 2º e 3º, da CF, Art. 872 da CLT e STF ADI 3423",
        "textSnippet": "Dissídio Coletivo (competência originária do TRT ou SDC/TST): Econômico = exige COMUM ACORDO (Art. 114, § 2º, CF + STF ADI 3423); Greve em essencial pelo MPT (§ 3º) ou Dissídio Jurídico = dispensa comum acordo. Ação de Cumprimento (Art. 872 CLT) = Vara do Trabalho, dispensa trânsito em julgado (Súmula 246 TST)."
      }
    ],
    "jurisprudence": "STF ADI 3423 e Súmula 246 do TST",
    "professorTip": "Dissídio Coletivo ECONÔMICO = EXIGE COMUM ACORDO (STF ADI 3423)! Greve essencial pelo MPT (Art. 114, § 3º) = SEM comum acordo! Ação de Cumprimento = Vara do Trabalho (não espera trânsito em julgado — Súmula 246)!"
  },
  {
    "id": "mig_ptra_028",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Execução Trabalhista - Iniciativa de Ofício (Art. 878 CLT) e Títulos Executivos (Art. 876)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Após o trânsito em julgado de sentença trabalhista condenatória em processo no qual o reclamante esteve assistido por advogado particular constituído desde a inicial, o juiz inicia imediatamente a execução definitiva de ofício sem requerimento da parte ou do advogado; em outra demanda, o MPT pretende executar um Termo de Ajustamento de Conduta (TAC) descumprido por empresa. Ambos os atos são válidos?",
    "options": [
      {
        "letter": "A",
        "text": "Na Justiça do Trabalho o juiz continua obrigado a promover a execução trabalhista de ofício em todos os processos, inclusive quando há advogado."
      },
      {
        "letter": "B",
        "text": "A execução de ofício quando a parte está assistida por advogado é INVÁLIDA após a Reforma Trabalhista! Pelo Art. 878 da CLT (com redação da Lei nº 13.467/17), a execução será promovida pelas partes, permitida a execução de ofício pelo juiz ou pelo Presidente do Tribunal APENAS NOS CASOS EM QUE AS PARTES NÃO ESTIVEREM REPRESENTADAS POR ADVOGADO (jus postulandi)! Já a execução do TAC do MPT e do termo de conciliação da CCP na Justiça do Trabalho é plenamente VÁLIDA por força do Art. 876, caput, da CLT (títulos executivos extrajudiciais — salvo o crédito previdenciário de ofício pelo Art. 876, parágrafo único)!"
      },
      {
        "letter": "C",
        "text": "Os únicos títulos executivos admitidos na Justiça do Trabalho são as sentenças judiciais transitadas em julgado."
      },
      {
        "letter": "D",
        "text": "Cheques e notas promissórias emitidos pelo empregador em favor do empregado fora de acordo homologado constituem títulos executivos extrajudiciais na Justiça do Trabalho."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 878 CLT: execução promovida pelas partes; de ofício APENAS se partes estiverem SEM advogado (salvo INSS de ofício — Art. 876, § único / SV 53). Art. 876 CLT (títulos executivos na JT): sentenças, acordos judiciais, TACs do MPT e termos da CCP.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei 13.467/17 alterou o Art. 878 da CLT restringindo a execução de ofício pelo juiz apenas aos casos em que as partes NÃO estiverem representadas por advogado (exceção apenas para as contribuições previdenciárias acessórias pelo Art. 876, parágrafo único)!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 876 da CLT enumera títulos executivos JUDICIAIS (decisões passadas em julgado ou das quais não tenha havido recurso com efeito suspensivo e acordos judiciais não cumpridos) E títulos executivos EXTRAJUDICIAIS (termos de ajuste de conduta — TAC — firmados perante o MPT e termos de conciliação firmados perante as CCPs)!"
      },
      {
        "letter": "D",
        "explanation": "Títulos de crédito comuns (cheque, nota promissória, confissão de dívida particular) NÃO constam no rol taxativo do Art. 876 CLT — devem ser executados na Justiça Comum ou cobrados por ação trabalhista de conhecimento!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 876 e 878 da CLT",
        "textSnippet": "Art. 878 CLT: execução promovida pelas partes; de ofício APENAS se partes estiverem SEM advogado (salvo INSS de ofício — Art. 876, § único / SV 53). Art. 876 CLT (títulos executivos na JT): sentenças, acordos judiciais, TACs do MPT e termos da CCP."
      }
    ],
    "professorTip": "Execução de ofício (Art. 878): SÓ se parte estiver SEM advogado! Títulos extrajudiciais na JT (Art. 876): TAC do MPT e Termo da CCP!"
  },
  {
    "id": "mig_ptra_029",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Liquidação de Sentença na CLT - Prazo de Impugnação e Juros/Correção Monetária (STF ADC 58)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Elaborada a conta de liquidação em execução trabalhista, o juiz abre prazo para impugnação fundamentada com indicação dos itens e valores objeto da discordância. Qual o prazo da parte para impugnar a conta de liquidação na CLT e qual o critério de atualização monetária e juros fixado pelo STF na ADC 58?",
    "options": [
      {
        "letter": "A",
        "text": "Na fase de liquidação trabalhista, o juiz tem mera faculdade de intimar as partes para impugnar a conta no prazo de 5 dias, sem gerar preclusão."
      },
      {
        "letter": "B",
        "text": "Pelo Art. 879, § 2º, da CLT, elaborada a conta e tornada líquida, o juízo DEVERÁ abrir às partes prazo COMUM de 8 DIAS (úteis) para impugnação fundamentada com a indicação dos itens e valores objeto da discordância, SOB PENA DE PRECLUSÃO (diferente da antiga redação facultativa \"poderá\"!)! E quanto à atualização monetária e juros dos débitos trabalhistas (STF ADC 58 e Lei 14.905/2024!): na fase PRÉ-JUDICIAL aplica-se o IPCA-E (+ juros legais do Art. 39, caput, Lei 8.177/91 — TR acumulada) e, a partir do AJUIZAMENTO DA AÇÃO (ou citação conforme modulação/ADC 58: na JT = ajuizamento após Rcl/ED!), incide exclusivamente a taxa SELIC (que já engloba correção monetária e juros de mora — afastada a TR e afastada a cumulação de SELIC + juros de 1% ao mês do Art. 39, § 1º)!"
      },
      {
        "letter": "C",
        "text": "Na Justiça do Trabalho, os créditos trabalhistas continuam corrigidos pela TR + juros de 1% ao mês somados à taxa SELIC após o ajuizamento."
      },
      {
        "letter": "D",
        "text": "Na liquidação por cálculos na JT é permitido modificar ou inovar a sentença liquidanda para incluir parcela não constante do título."
      }
    ],
    "correctAnswer": "B",
    "justification": "Liquidação (Art. 879 CLT): cálculo, arbitramento ou artigos; proibida inovação do título (§ 1º); prazo comum de 8 DIAS ÚTEIS para impugnação fundamentada sob pena de preclusão (§ 2º); INSS intima União em 10 dias (§ 3º). ADC 58 STF: pré-judicial = IPCA-E + juros legais; judicial (do ajuizamento) = SELIC (engloba juros + correção, sem 1% extra).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 879, § 2º, da CLT (Reforma Trabalhista) impôs o dever (\"deverá\") de abrir prazo comum de 8 DIAS ÚTEIS, sob pena de PRECLUSÃO!"
      },
      {
        "letter": "C",
        "explanation": "Na ADC 58, o STF declarou inconstitucional a TR e vedou somar juros de 1% à SELIC: aplicam-se IPCA-E + juros do Art. 39 caput na fase pré-judicial e exclusivamente a SELIC (já engloba juros + correção!) a partir do ajuizamento da ação trabalhista (salvo novas regras da Lei 14.905/24 onde aplicáveis)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 879, § 1º, da CLT, na liquidação NÃO se poderá modificar, ou inovar, a sentença liquidanda nem discutir matéria pertinente à causa principal (coisa julgada)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 879, §§ 1º-B, 2º e 7º, da CLT e STF ADC 58 / Lei 14.905/2024",
        "textSnippet": "Liquidação (Art. 879 CLT): cálculo, arbitramento ou artigos; proibida inovação do título (§ 1º); prazo comum de 8 DIAS ÚTEIS para impugnação fundamentada sob pena de preclusão (§ 2º); INSS intima União em 10 dias (§ 3º). ADC 58 STF: pré-judicial = IPCA-E + juros legais; judicial (do ajuizamento) = SELIC (engloba juros + correção, sem 1% extra)."
      }
    ],
    "jurisprudence": "STF ADC 58",
    "professorTip": "Impugnação aos cálculos na liquidação (Art. 879, § 2º): prazo COMUM de 8 DIAS ÚTEIS sob pena de PRECLUSÃO! STF ADC 58: pré-judicial = IPCA-E + juros | pós-ajuizamento = SELIC única (SEM 1% extra)!"
  },
  {
    "id": "mig_ptra_030",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Citação na Execução, Garantia do Juízo, Ordem de Penhora e Embargos à Execução (Arts. 880–884 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Executado citado por mandado para pagar ou garantir a execução trabalhista definitiva no prazo de 48 horas oferece imóvel à penhora apesar de ter saldo disponível em conta corrente; ademais, após garantido o juízo por penhora, o executado pretende opor Embargos à Execução. Qual a ordem legal da penhora e o prazo dos embargos?",
    "options": [
      {
        "letter": "A",
        "text": "O executado deve pagar ou garantir a execução em 48 HORAS (Art. 880 CLT); a ordem preferencial de penhora segue o Art. 835 do CPC (Art. 882 CLT), colocando DINHEIRO EM ESPÉCIE OU EM DEPÓSITO BANCÁRIO (SISBAJUD) em 1º LUGAR prioritário — sendo legítima e NÃO ofensiva a direito líquido e certo a penhora em dinheiro na execução definitiva (Súmula 417, I, do TST — já na execução PROVISÓRIA admite-se substituição se menos gravosa ou fiança/seguro!); e, garantida integralmente a execução ou penhorados os bens, o executado terá o prazo de 5 DIAS (úteis) para apresentar EMBARGOS À EXECUÇÃO (igual prazo tem o exequente para impugnação à sentença de liquidação — Art. 884, caput, CLT), dispensada a garantia apenas para entidades filantrópicas e seus diretores (§ 6º)!"
      },
      {
        "letter": "B",
        "text": "O prazo para o executado pagar ou garantir a execução após a citação na Justiça do Trabalho é de 15 dias úteis, e o prazo dos embargos à execução é de 15 dias."
      },
      {
        "letter": "C",
        "text": "Os embargos à execução na Justiça do Trabalho dispensam prévia garantia do juízo ou penhora de bens para qualquer empresa privada."
      },
      {
        "letter": "D",
        "text": "Na execução provisória trabalhista, o exequente pode levantar imediatamente os valores depositados até o limite de 60 salários mínimos sem caução."
      }
    ],
    "correctAnswer": "A",
    "justification": "Execução CLT: citação p/ pagar/garantir em 48 horas (Art. 880). Penhora segue Art. 835 CPC (1º dinheiro/SISBAJUD — Súmula 417 TST). Embargos à Execução = 5 dias úteis após garantia integral (Art. 884; Fazenda = 30d; Filantrópicas dispensam garantia no § 6º). Execução provisória = vai só até a penhora.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Prazos específicos da execução trabalhista: 48 HORAS para pagar ou garantir após citação (Art. 880 CLT); e 5 DIAS ÚTEIS após garantia do juízo para opor Embargos à Execução (Art. 884 CLT — Fazenda Pública tem 30 dias pelo Art. 1º-B da Lei 9.494/97 / Art. 535 CPC)!"
      },
      {
        "letter": "C",
        "explanation": "Diferente do Art. 914 do CPC, na execução trabalhista (Art. 884, caput, CLT) a GARANTIA INTEGRAL DO JUÍZO (depósito ou penhora) continua sendo pressuposto obrigatório dos Embargos à Execução — excepcionadas apenas a Fazenda Pública, as entidades filantrópicas e seus diretores (§ 6º)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 899, caput, da CLT, os recursos têm efeito meramente devolutivo, permitindo a execução provisória APENAS ATÉ A PENHORA (não autoriza levantamento de valores nem expropriação/leilão na pendência do recurso)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 880 a 884 da CLT e Súmula 417 do TST",
        "textSnippet": "Execução CLT: citação p/ pagar/garantir em 48 horas (Art. 880). Penhora segue Art. 835 CPC (1º dinheiro/SISBAJUD — Súmula 417 TST). Embargos à Execução = 5 dias úteis após garantia integral (Art. 884; Fazenda = 30d; Filantrópicas dispensam garantia no § 6º). Execução provisória = vai só até a penhora."
      }
    ],
    "jurisprudence": "Súmula nº 417 do TST",
    "professorTip": "Execução CLT: Pagar/garantir = 48 horas! Embargos à Execução = 5 dias APÓS garantia integral (Filantrópicas dispensam garantia — § 6º)! Execução provisória = só até a penhora!"
  },
  {
    "id": "mig_ptra_031",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Inclusão de Empresa do Grupo Econômico na Execução (Tema 1232 STF e Súmula 205)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado ajuíza reclamação trabalhista apenas contra a empresa A, obtendo condenação definitiva. Na fase de execução, diante da insolvência da empresa A, o exequente requer o imediato redirecionamento da execução contra a empresa B alegando integrarem o mesmo grupo econômico, embora a empresa B NÃO tenha figurado no polo passivo da fase de conhecimento. Qual a controvérsia no STF (Tema 1232)?",
    "options": [
      {
        "letter": "A",
        "text": "A antiga Súmula 205 do TST (que proibia incluir na execução quem não participou da fase de conhecimento) foi CANCELADA em 2003, permitindo na prática trabalhista incluir empresas do grupo na execução; CONTUDO, o STF reconheceu repercussão geral no TEMA 1232 (RE 1.387.795 — com suspensão nacional de execuções até julgamento definitivo / analisando a aplicação do Art. 513, § 5º, do CPC que proíbe cumprimento de sentença contra quem não participou do conhecimento!), discutindo se a inclusão de empresa do grupo econômico na fase executiva sem contraditório na fase de conhecimento exige ao menos prévia instauração do IDPJ ou participação prévia no título!"
      },
      {
        "letter": "B",
        "text": "A Súmula 205 do TST continua em pleno vigor proibindo qualquer discussão no STF sobre grupo econômico na execução."
      },
      {
        "letter": "C",
        "text": "Para redirecionar a execução trabalhista contra o sócio pessoa física (responsabilidade secundária) dispensa-se qualquer incidente prévio em homenagem à celeridade."
      },
      {
        "letter": "D",
        "text": "Da decisão interlocutória do juiz do trabalho que acolhe ou rejeita o IDPJ na fase de execução não cabe recurso algum, devendo aguardar o fim do processo."
      }
    ],
    "correctAnswer": "A",
    "justification": "Grupo econômico na execução = Súmula 205 TST cancelada -> STF Tema 1232 (discute Art. 513, § 5º, CPC). Sócio na execução = IDPJ obrigatório (Art. 855-A CLT): na cognição = irrecorrível de imediato; na execução = cabe Agravo de Petição; se instaurado originariamente no TRT = cabe Agravo Interno.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Súmula 205 do TST foi CANCELADA há mais de 20 anos (Res. 121/2003) — e hoje o tema aguarda definição vinculante do STF no Tema 1232 sobre os limites do Art. 513, § 5º, do CPC na JT!"
      },
      {
        "letter": "C",
        "explanation": "Para responsabilizar o SÓCIO pessoa física que não constou do título, o Art. 855-A da CLT impõe obrigatoriamente a instauração do Incidente de Desconsideração da Personalidade Jurídica (IDPJ — Arts. 133 a 137 CPC)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 855-A, § 1º, II, da CLT: na fase de COGNICAO não cabe recurso imediato da decisão do IDPJ; JÁ na fase de EXECUÇÃO cabe AGRAVO DE PETIÇÃO (8 dias) independentemente de garantia do juízo (se for para inclusão/exclusão ou discussão inicial)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 513, § 5º, do CPC, Art. 2º, § 2º, da CLT e STF Tema 1232",
        "textSnippet": "Grupo econômico na execução = Súmula 205 TST cancelada -> STF Tema 1232 (discute Art. 513, § 5º, CPC). Sócio na execução = IDPJ obrigatório (Art. 855-A CLT): na cognição = irrecorrível de imediato; na execução = cabe Agravo de Petição; se instaurado originariamente no TRT = cabe Agravo Interno."
      }
    ],
    "jurisprudence": "STF Tema 1232",
    "professorTip": "Sócio na execução = IDPJ obrigatório (Art. 855-A CLT) -> na execução cabe AGRAVO DE PETIÇÃO! Grupo econômico na execução = Tema 1232 STF (Súmula 205 foi cancelada)!"
  },
  {
    "id": "mig_ptra_032",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Protesto da Sentença Transitada em Julgado e BNDT (Art. 883-A CLT)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa é condenada definitivamente em reclamação trabalhista transitada em julgado, é regularmente intimada para cumprir a obrigação e permanece inerte sem pagar nem garantir o juízo. Após quantos dias a decisão judicial transitada em julgado poderá ser levada a protesto e inscrita no Banco Nacional de Devedores Trabalhistas (BNDT)?",
    "options": [
      {
        "letter": "A",
        "text": "Pelo Art. 883-A da CLT (inserido pela Lei nº 13.467/2017), a decisão judicial transitada em julgado somente poderá ser levada a PROTESTO, gerar inscrição do nome do executado em órgãos de proteção ao crédito ou no Banco Nacional de Devedores Trabalhistas (BNDT), nos termos da lei, depois de transcorrido o prazo de 45 (QUARENTA E CINCO) DIAS a contar da CITAÇÃO do executado, se não houver garantia do juízo!"
      },
      {
        "letter": "B",
        "text": "O protesto e a inscrição no BNDT ocorrem automaticamente imediatamente após esgotado o prazo de 48 horas da citação na execução."
      },
      {
        "letter": "C",
        "text": "A inscrição positiva no BNDT impede apenas a participação em licitações públicas, sem impedir o protesto extrajudicial em cartório."
      },
      {
        "letter": "D",
        "text": "Mesmo que o executado apresente seguro garantia judicial ou depósito integral do valor executado dentro dos 45 dias, ainda assim será inscrito no BNDT com certidão positiva."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 883-A CLT: decisão transitada em julgado só pode ir a protesto, SPC/Serasa ou BNDT após 45 DIAS da citação do executado sem garantia do juízo. Garantido o juízo integralmente, expede-se Certidão Positiva com Efeitos de Negativa (Art. 642-A, § 2º, CLT).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Cuidado com o prazo legal específico do Art. 883-A CLT: embora o prazo para pagar/garantir seja de 48 horas (Art. 880), o protesto e a negativação no BNDT só podem ocorrer após 45 DIAS da citação sem garantia do juízo!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 883-A disciplina conjuntamente os três atos coercitivos após 45 dias da citação sem garantia: protesto em cartório, inscrição em órgãos de proteção ao crédito (SPC/Serasa) e inscrição no BNDT (que impede emissão de CNDT para licitações)!"
      },
      {
        "letter": "D",
        "explanation": "Com a garantia integral do juízo (depósito, penhora suficiente ou seguro garantia/fiança) ou suspensão da exigibilidade, expede-se Certidão Positiva com Efeitos de Negativa (CPEN — Art. 642-A, § 2º, CLT) e impede-se o protesto/negativação!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 883-A da CLT e Lei nº 12.440/2011",
        "textSnippet": "Art. 883-A CLT: decisão transitada em julgado só pode ir a protesto, SPC/Serasa ou BNDT após 45 DIAS da citação do executado sem garantia do juízo. Garantido o juízo integralmente, expede-se Certidão Positiva com Efeitos de Negativa (Art. 642-A, § 2º, CLT)."
      }
    ],
    "professorTip": "Art. 883-A CLT: Protesto / Serasa / BNDT = SÓ após 45 DIAS da citação do executado sem garantia do juízo! Garantiu integralmente = Certidão Positiva com Efeito de Negativa!"
  },
  {
    "id": "mig_ptra_033",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Deserção Recursal - Insuficiência vs. Ausência Total de Preparo (OJ 140 SDI-1 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa interpõe Recurso Ordinário tempestivo no 8º dia útil recolhendo custas e depósito recursal em valor ligeiramente inferior ao devido (diferença de R$ 80,00 por erro de cálculo). Em outro processo, uma segunda empresa protocola Recurso Ordinário no 8º dia sem comprovar absolutamente nenhum recolhimento de custas nem depósito recursal. Qual o procedimento conforme a OJ 140 da SDI-1 do TST?",
    "options": [
      {
        "letter": "A",
        "text": "Na PRIMEIRA empresa (recolhimento INSUFICIENTE de custas ou de depósito recursal — depositou a menor!), aplica-se a OJ 140 da SDI-1 do TST c/c Art. 1.007, § 2º, do CPC: só haverá deserção se, intimado o recorrente para complementar no prazo de 5 DIAS, não vier a suprir a diferença! Já na SEGUNDA empresa (AUSÊNCIA TOTAL de comprovação do pagamento de custas ou depósito no prazo recursal!), o TST entende que NÃO se aplica a dobra do § 4º do Art. 1.007 do CPC — ocorrendo DESERÇÃO IMEDIATA (conforme OJ 140 SDI-1 e Súmula 245 TST)!"
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho aplica-se o Art. 1.007, § 4º, do CPC, permitindo que o recorrente que não pagou absolutamente nada de custas nem depósito pague tudo em dobro após intimação."
      },
      {
        "letter": "C",
        "text": "Qualquer diferença de centavos no depósito recursal gera deserção instantânea do recurso sem intimação prévia para complementação."
      },
      {
        "letter": "D",
        "text": "Se a parte comprovar equívoco no preenchimento da guia de custas (GRU), o juiz decreta deserção sumária sem oportunidade de saneamento."
      }
    ],
    "correctAnswer": "A",
    "justification": "OJ 140 SDI-1 TST: Recolhimento INSUFICIENTE (custas ou depósito) = intima para complementar em 5 DIAS (Art. 1.007, § 2º CPC). AUSÊNCIA TOTAL de preparo no prazo = DESERÇÃO imediata (não aplica pagamento em dobro do § 4º). Erro na guia = sana em 5 dias (§ 7º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Distinção essencial da OJ 140 da SDI-1 do TST! O TST admitiu o § 2º do Art. 1.007 CPC (prazo de 5 dias para COMPLEMENTAR pagamento INSUFICIENTE), MAS rejeitou a aplicação do § 4º quando houver AUSÊNCIA TOTAL de recolhimento dentro do prazo recursal!"
      },
      {
        "letter": "C",
        "explanation": "Pela OJ 140 da SDI-1 do TST, em caso de recolhimento INSUFICIENTE das custas processuais ou do depósito recursal, o relator deve conceder prazo de 5 DIAS para complementação antes de decretar a deserção!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.007, § 7º, do CPC (aplicável subsidiariamente pela IN 39/16 TST), o equívoco no preenchimento da guia de custas não implica pena de deserção, cabendo ao relator intimar o recorrente para sanar o vício no prazo de 5 DIAS!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 1.007, §§ 2º e 4º, CPC e OJ 140 da SDI-1 do TST",
        "textSnippet": "OJ 140 SDI-1 TST: Recolhimento INSUFICIENTE (custas ou depósito) = intima para complementar em 5 DIAS (Art. 1.007, § 2º CPC). AUSÊNCIA TOTAL de preparo no prazo = DESERÇÃO imediata (não aplica pagamento em dobro do § 4º). Erro na guia = sana em 5 dias (§ 7º)."
      }
    ],
    "jurisprudence": "OJ 140 SDI-1 do TST",
    "professorTip": "OJ 140 SDI-1 TST: Pagou A MENOR = intima p/ completar em 5 dias! NÃO pagou NADA = DESERÇÃO direta (sem dobra do CPC)!"
  },
  {
    "id": "mig_ptra_034",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Feriado Local e Tempestividade Recursal (Súmula 385 TST e Art. 1.003, § 6º CPC)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "O advogado protocola Recurso Ordinário um dia após o término aparente do prazo de 8 dias úteis, alegando que houve feriado municipal local (ou suspensão de expediente forense por portaria do TRT local) durante a contagem, mas NÃO junta documento idôneo comprovando o feriado ou a suspensão no ato da interposição. Como o TST aplica a Súmula 385 e o Art. 1.003, § 6º, CPC?",
    "options": [
      {
        "letter": "A",
        "text": "Pela Súmula 385, I, do TST (e Art. 1.003, § 6º, CPC — atenção à nova Lei nº 14.939/2024!), incumbe à parte o ônus de PROVAR, quando da interposição do recurso, a existência de feriado local que autorize a prorrogação do prazo recursal — mas atenção: pela Súmula 385, II e III, do TST, se a suspensão de expediente decorrer de ato do próprio Tribunal (portaria/resolução do TRT) ou for fato notório/recorrente no local, e no caso de dúvida razoável (itens II e III da Súmula 385 + Art. 932, § único CPC + Lei 14.939/24 que alterou o Art. 1.003, § 6º permitindo intimação em 5 dias para comprovar feriado local no CPC!), cabe observar a comprovação documental ou a intimação saneadora conforme a lei vigente!"
      },
      {
        "letter": "B",
        "text": "Os feriados municipais e estaduais são sempre presumidos de ofício pelos Tribunais Superiores em Brasília sem necessidade de prova nos autos."
      },
      {
        "letter": "C",
        "text": "A simples menção à existência do feriado local no texto da petição do recurso substitui o documento oficial comprobatório."
      },
      {
        "letter": "D",
        "text": "Se o dia final do prazo cair em sábado ou domingo, o prazo recursal vence antecipadamente na sexta-feira anterior."
      }
    ],
    "correctAnswer": "A",
    "justification": "Súmula 385 TST: (I) ônus da parte provar feriado local na interposição do recurso (salvo Lei 14.939/24 no CPC que determinou intimação em 5 dias p/ comprovar); (II) na hipótese de feriado forense do tribunal local que suspende expediente, admite-se reconsideração pela prova superveniente em agravo regimental (III).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Apenas os feriados NACIONAIS (previstos em lei federal) dispensam comprovação; feriados municipais ou estaduais exigem prova documental idônea nos autos!"
      },
      {
        "letter": "C",
        "explanation": "Não basta citar o feriado nas razões recursais: exige-se cópia da lei local, portaria do tribunal ou calendário oficial (ou cumprimento de intimação para juntada na forma da Lei 14.939/2024)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 775 da CLT e Art. 224, § 1º, CPC, os dias do começo e do vencimento do prazo serão protraídos para o primeiro dia útil seguinte se coincidirem com dia em que o expediente forense for encerrado antes ou iniciado depois da hora normal, ou houver indisponibilidade da comunicação eletrônica!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Súmula 385 do TST e Art. 1.003, § 6º, do CPC",
        "textSnippet": "Súmula 385 TST: (I) ônus da parte provar feriado local na interposição do recurso (salvo Lei 14.939/24 no CPC que determinou intimação em 5 dias p/ comprovar); (II) na hipótese de feriado forense do tribunal local que suspende expediente, admite-se reconsideração pela prova superveniente em agravo regimental (III)."
      }
    ],
    "jurisprudence": "Súmula nº 385 do TST",
    "professorTip": "Feriado nacional = dispensa prova! Feriado local/municipal = exige prova documental (Lei 14.939/24 + Súmula 385 TST)!"
  },
  {
    "id": "mig_ptra_035",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Exceção de Pré-Executividade no Processo do Trabalho",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Na execução trabalhista definitiva, pessoa física que nunca participou da lide nem é sócia da executada tem sua conta bancária bloqueada por erro homônimo evidente comprovável de plano por documentos públicos, sem necessidade de dilação probatória. Ela precisa garantir integralmente o juízo para opor Embargos à Execução ou pode utilizar Exceção de Pré-Executividade?",
    "options": [
      {
        "letter": "A",
        "text": "Pode utilizar EXCEÇÃO DE PRÉ-EXECUTIVIDADE (EPE), independentemente de garantia do juízo! Embora não prevista expressamente na CLT, é amplamente admitida na Justiça do Trabalho para arguir matérias de ordem pública cognoscíveis de ofício ou fatos modificativos/extintivos (nulidade absoluta de citação, ilegitimidade manifesta/homônimo, pagamento comprovado por documento inequívoco, prescrição) que DISPENSEM DILAÇÃO PROBATÓRIA! Se acolhida extinguindo a execução, cabe Agravo de Petição; se rejeitada, é decisão interlocutória irrecorrível de imediato (Art. 893, § 1º, CLT)!"
      },
      {
        "letter": "B",
        "text": "A Exceção de Pré-Executividade exige depósito prévio integral do valor executado e permite ampla oitiva de testemunhas."
      },
      {
        "letter": "C",
        "text": "Da decisão do juiz do trabalho que rejeita a Exceção de Pré-Executividade e determina o prosseguimento da execução cabe imediatamente Agravo de Petição."
      },
      {
        "letter": "D",
        "text": "A Exceção de Pré-Executividade tem prazo decadencial de 5 dias após a citação para pagamento."
      }
    ],
    "correctAnswer": "A",
    "justification": "Exceção de Pré-Executividade na JT: dispensa garantia do juízo; admite matérias de ordem pública/nulidade/pagamento/ilegitimidade que não exijam dilação probatória. Acolhida (extingue execução) -> cabe Agravo de Petição; Rejeitada (prossegue) -> interlocutória irrecorrível de imediato.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A própria razão de ser da Exceção de Pré-Executividade é exatamente DISPENSAR a garantia do juízo para matérias de ordem pública comprováveis de plano por prova documental pré-constituída (SEM dilação probatória)!"
      },
      {
        "letter": "C",
        "explanation": "Jurisprudência pacífica do TST: rejeitada a EPE, a execução prossegue (decisão interlocutória — irrecorrível de imediato); só cabe Agravo de Petição se a EPE for ACOLHIDA extinguindo total ou parcialmente a execução!"
      },
      {
        "letter": "D",
        "explanation": "Por tratar de matérias de ordem pública (nulas de pleno direito), a Exceção de Pré-Executividade não se sujeita a prazo preclusivo de 5 dias (diferente dos embargos à execução do Art. 884 CLT)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 884 da CLT, Súmula 393 STJ (analogia) e Jurisprudência TST",
        "textSnippet": "Exceção de Pré-Executividade na JT: dispensa garantia do juízo; admite matérias de ordem pública/nulidade/pagamento/ilegitimidade que não exijam dilação probatória. Acolhida (extingue execução) -> cabe Agravo de Petição; Rejeitada (prossegue) -> interlocutória irrecorrível de imediato."
      }
    ],
    "professorTip": "Exceção Pré-Executividade: SEM garantia do juízo + SEM dilação probatória! Acolhida = Agravo de Petição | Rejeitada = Irrecorrível de imediato!"
  },
  {
    "id": "mig_ptra_036",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Embargos de Terceiro na Justiça do Trabalho",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Bens imóveis pertencentes exclusivamente ao cônjuge meeiro ou a terceiro alheio ao processo trabalhista são penhorados para garantir execução na Vara do Trabalho (inclusive via carta precatória executória). Qual a medida processual cabível, o prazo final e o juízo competente para julgar os Embargos de Terceiro?",
    "options": [
      {
        "letter": "A",
        "text": "A medida cabível são os EMBARGOS DE TERCEIRO (Arts. 674 e ss. do CPC c/c Art. 769 CLT), no prazo de até 5 DIAS depois da arrematação, adjudicação ou alienação por iniciativa particular, mas sempre ANTES DA ASSINATURA DA RESPECTIVA CARTA (Art. 675 CPC)! E pela Súmula 419 do TST, na execução por CARTA PRECATÓRIA, os embargos de terceiro serão oferecidos no juízo DEPRECANTE ou no juízo DEPRECADO, mas a COMPETÊNCIA PARA JULGÁ-LOS é do juízo DEPRECANTE, SALVO se versarem unicamente sobre vícios ou irregularidades da penhora, avaliação ou alienação dos bens praticados pelo juízo deprecado (caso em que julga o deprecado)! Da sentença dos embargos de terceiro na JT cabe AGRAVO DE PETIÇÃO em 8 dias úteis!"
      },
      {
        "letter": "B",
        "text": "Os Embargos de Terceiro na Justiça do Trabalho desafiam Recurso Ordinário contra a sentença que os julga improcedentes."
      },
      {
        "letter": "C",
        "text": "Na carta precatória executória, o juízo deprecado é sempre competente para julgar todos os Embargos de Terceiro independentemente da matéria alegada."
      },
      {
        "letter": "D",
        "text": "O prazo para opor Embargos de Terceiro na fase de execução encerra-se 5 dias após a intimação da penhora."
      }
    ],
    "correctAnswer": "A",
    "justification": "Embargos de Terceiro na JT (Arts. 674–681 CPC): opostos até 5 dias pós-arrematação/adjudicação (antes da assinatura da carta). Recurso da sentença = Agravo de Petição (8 dias). Súmula 419 TST (carta precatória): julga o juízo DEPRECANTE, salvo vício exclusivo do ato praticado pelo deprecado ou bem indicado pelo deprecado.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Por constituírem incidente no curso da fase de execução, da sentença que julga os Embargos de Terceiro na JT cabe AGRAVO DE PETIÇÃO (prazo de 8 dias úteis — Art. 897, \"a\", CLT)!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 419 do TST, quem indicou o bem à penhora julga: se a indicação veio do juízo deprecante, compete ao DEPRECANTE julgar os embargos de terceiro; só compete ao DEPRECADO se ele próprio escolheu o bem ou se o vício for exclusivamente da prática do ato no juízo deprecado!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 675 do CPC, na fase de cumprimento/execução, os embargos de terceiro podem ser opostos até 5 DIAS depois da adjudicação, da alienação ou da arrematação, mas sempre ANTES da assinatura da respectiva carta!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 674 a 681 do CPC, Art. 769/889 CLT e Súmula 419 do TST",
        "textSnippet": "Embargos de Terceiro na JT (Arts. 674–681 CPC): opostos até 5 dias pós-arrematação/adjudicação (antes da assinatura da carta). Recurso da sentença = Agravo de Petição (8 dias). Súmula 419 TST (carta precatória): julga o juízo DEPRECANTE, salvo vício exclusivo do ato praticado pelo deprecado ou bem indicado pelo deprecado."
      }
    ],
    "jurisprudence": "Súmula nº 419 do TST",
    "professorTip": "Embargos de Terceiro na JT: até 5d pós-arrematação (antes da carta)! Recurso = AGRAVO DE PETIÇÃO (8d)! Carta Precatória (Súmula 419): julga o DEPRECANTE (salvo vício/indicação do deprecado)!"
  },
  {
    "id": "mig_ptra_037",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Execução contra a Fazenda Pública - Precatórios, RPV e Embargos (Art. 100 CF e Art. 535 CPC)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Município condenado definitivamente na Justiça do Trabalho a pagar R$ 25.000,00 é citado na execução para impugnar os cálculos/embargar a execução sem precisar depositar o valor em garantia. Qual o prazo da Fazenda Pública para embargar/impugnar na execução e como se dá o pagamento (RPV ou Precatório)?",
    "options": [
      {
        "letter": "A",
        "text": "A Fazenda Pública NÃO se sujeita à penhora nem à garantia do juízo (Art. 100 CF) e tem prazo de 30 DIAS (úteis pelo CPC — Art. 535 CPC / Art. 1º-B da Lei 9.494/97 declarado constitucional pelo STF na ADC 11!) para opor Embargos à Execução / Impugnação! Não havendo oposição ou transitada em julgado a execução, se o valor não ultrapassar o teto definido em lei local do Município (ou, na omissão legislativa local, o teto mínimo constitucional do Art. 87 do ADCT = 30 SALÁRIOS MÍNIMOS para Municípios e 40 SM para Estados/DF; na União = 60 SM pela Lei 10.259/01!), o pagamento ocorre por REQUISIÇÃO DE PEQUENO VALOR (RPV) no prazo de 2 MESES (60 dias) da entrega da requisição (sob pena de sequestro!); acima do teto, expede-se PRECATÓRIO!"
      },
      {
        "letter": "B",
        "text": "O prazo da Fazenda Pública para opor Embargos à Execução trabalhista é de 5 dias úteis, igual ao das empresas privadas."
      },
      {
        "letter": "C",
        "text": "Apenas os créditos de natureza alimentícia são pagos por Precatório, sendo dispensado precatório para indenizações trabalhistas acima de 100 salários mínimos."
      },
      {
        "letter": "D",
        "text": "Na ausência de lei municipal fixando o limite de RPV, aplica-se automaticamente aos Municípios o teto federal de 60 salários mínimos."
      }
    ],
    "correctAnswer": "A",
    "justification": "Execução Fazenda Pública: sem penhora; Embargos = 30 dias (Art. 1º-B Lei 9.494/97 e Art. 535 CPC). RPV (Art. 87 ADCT na falta de lei local: União 60 SM, Estado/DF 40 SM, Município 30 SM) paga em 60 dias. Acima disso = Precatório (crédito trabalhista tem natureza alimentícia + superpreferência até 3x RPV p/ idoso >=60a, doente grave ou PcD).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 1º-B da Lei nº 9.494/97 (validado na ADC 11 do STF) ampliou para 30 DIAS o prazo dos embargos à execução pela Fazenda Pública (mesmo prazo da impugnação do Art. 535 do CPC)!"
      },
      {
        "letter": "C",
        "explanation": "Créditos trabalhistas têm natureza ALIMENTÍCIA (Art. 100, § 1º, CF), o que lhes garante fila de PREFERÊNCIA (e superpreferência até o triplo da RPV para >= 60 anos, doença grave ou PcD — § 2º!), MAS ainda assim submetem-se ao regime de Precatório quando superarem o limite da RPV!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 87 do ADCT, na omissão de lei própria do ente federativo, os tetos supletivos da RPV são: 40 SALÁRIOS MÍNIMOS para Estados/DF e 30 SALÁRIOS MÍNIMOS para Municípios (60 SM é o teto federal da União — Lei 10.259/01)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 100 da CF, Art. 1º-B da Lei nº 9.494/97 e Art. 535 do CPC",
        "textSnippet": "Execução Fazenda Pública: sem penhora; Embargos = 30 dias (Art. 1º-B Lei 9.494/97 e Art. 535 CPC). RPV (Art. 87 ADCT na falta de lei local: União 60 SM, Estado/DF 40 SM, Município 30 SM) paga em 60 dias. Acima disso = Precatório (crédito trabalhista tem natureza alimentícia + superpreferência até 3x RPV p/ idoso >=60a, doente grave ou PcD)."
      }
    ],
    "jurisprudence": "STF ADC 11",
    "professorTip": "Fazenda na Execução: 30 DIAS p/ embargar! RPV supletiva (ADCT 87): União 60 SM | Estado 40 SM | Município 30 SM (paga em 60 dias)! Idoso >=60a/PcD/doente grave = superpreferência até 3x RPV!"
  },
  {
    "id": "mig_ptra_038",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Execução de Contribuições Previdenciárias na JT (Súmula 368 TST)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "As partes celebram acordo judicial trabalhista na fase de conhecimento antes da sentença, discriminando integralmente a verba acordada como indenização por danos morais (parcela sem incidência previdenciária). Posteriormente, a União (INSS) pretende executar contribuições previdenciárias sobre esse acordo alegando fraude ou divergência com os pedidos iniciais. E qual o fato gerador dos juros/multa na Súmula 368 do TST?",
    "options": [
      {
        "letter": "A",
        "text": "Nos termos do Art. 832, §§ 3º e 4º, da CLT (e OJ 368 SDI-1 TST): se as partes discriminarem na conciliação a natureza indenizatória da parcela em sintonia com os pedidos da inicial, NÃO incide INSS (só incide sobre todo o valor se NÃO houver discriminação das parcelas ou se houver sentença condenatória líquida vinculada a parcelas salariais — OJ 376 SDI-1)! A União é intimada dos acordos/decisões e pode recorrer (RO no prazo em dobro de 16 dias úteis — Art. 832, § 4º)! E pela Súmula 368, IV e V, do TST, após a MP 449/2008 (a partir de 05/03/2009), o FATO GERADOR da contribuição previdenciária é a PRESTAÇÃO DE SERVIÇOS (incidindo juros Selic desde a prestação, e multa de mora só após o término do prazo de pagamento depois da liquidação)!"
      },
      {
        "letter": "B",
        "text": "A Justiça do Trabalho executa de ofício as contribuições previdenciárias inclusive sobre os salários pagos mensalmente durante o contrato reconhecido em sentença declaratória."
      },
      {
        "letter": "C",
        "text": "Mesmo quando o acordo na fase de conhecimento é celebrado antes da sentença sem discriminar parcelas salariais, a Justiça do Trabalho calcula o INSS apenas sobre 50% do valor."
      },
      {
        "letter": "D",
        "text": "Para a União (INSS), os prazos recursais nas decisões homologatórias de acordo são simples (8 dias), sem prerrogativa de prazo em dobro."
      }
    ],
    "correctAnswer": "A",
    "justification": "INSS na JT (Art. 832 CLT + Súmula 368 TST + SV 53): JT só executa INSS de condenação em pecúnia ou acordo; sem discriminação no acordo = incide sobre 100%; após 05/03/2009 fato gerador é a PRESTAÇÃO DE SERVIÇOS (juros desde prestação; multa só após vencimento da citação líquida); União tem prazo em dobro (16d).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pela Súmula Vinculante nº 53 do STF e Súmula 368, I, do TST, a competência executória previdenciária da JT restringe-se às sentenças condenatórias em pecúnia e acordos homologados (nunca sobre salários já pagos no vínculo reconhecido)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 43, parágrafo único, da Lei 8.212/91 e Súmula 368 / OJ 368 SDI-1 TST, se NÃO forem discriminadas as parcelas legais no acordo, a contribuição previdenciária incidirá sobre o VALOR TOTAL do acordo homologado!"
      },
      {
        "letter": "D",
        "explanation": "A União (Procuradoria-Geral Federal / Fazenda Pública) goza do prazo em DOBRO para recorrer previsto no Decreto-Lei nº 779/69 (16 dias úteis para RO/RR/AP)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 832, §§ 3º a 7º, e Art. 876, parágrafo único, da CLT e Súmula 368 TST",
        "textSnippet": "INSS na JT (Art. 832 CLT + Súmula 368 TST + SV 53): JT só executa INSS de condenação em pecúnia ou acordo; sem discriminação no acordo = incide sobre 100%; após 05/03/2009 fato gerador é a PRESTAÇÃO DE SERVIÇOS (juros desde prestação; multa só após vencimento da citação líquida); União tem prazo em dobro (16d)."
      }
    ],
    "jurisprudence": "Súmula 368 do TST e SV 53 do STF",
    "professorTip": "INSS na JT: só sobre pecúnia/acordo (SV 53)! Acordo sem discriminar parcelas = INSS sobre 100%! Fato gerador (pós-05/03/09) = PRESTAÇÃO DOS SERVIÇOS (Súmula 368, IV)!"
  },
  {
    "id": "mig_ptra_039",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Ação Rescisória na Justiça do Trabalho - Prazo, Depósito Prévio e Recurso",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Sentença trabalhista transitou em julgado há 1 ano e 8 meses, e o ex-empregado (NÃO beneficiário da justiça gratuita) ou a empresa pretende ajuizar Ação Rescisória no TRT por violação manifesta de norma jurídica. Qual o prazo decadencial, o valor do depósito prévio na CLT e o recurso cabível da decisão do TRT?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo decadencial da Ação Rescisória é de 2 ANOS contados do dia imediatamente subsequente ao trânsito em julgado da ÚLTIMA decisão proferida no processo (Art. 975 CPC e Súmula 100, I, do TST — inclusive se houve recurso parcial, salvo recurso intempestivo, Súmula 100, III)! Na Justiça do Trabalho, o DEPÓSITO PRÉVIO obrigatório (Art. 836 da CLT — diferente dos 5% do CPC!) é de 20% (VINTE POR CENTO) DO VALOR DA CAUSA, salvo prova de miserabilidade jurídica (justiça gratuita)! E da decisão definitiva do TRT na Ação Rescisória (competência originária) cabe RECURSO ORDINÁRIO para o TST (8 dias úteis — Art. 895, II, CLT)!"
      },
      {
        "letter": "B",
        "text": "O depósito prévio da Ação Rescisória trabalhista é de 5% sobre o valor da causa, seguindo integralmente o CPC."
      },
      {
        "letter": "C",
        "text": "Na Justiça do Trabalho não cabe Ação Rescisória contra termo de conciliação homologado judicialmente (acordo)."
      },
      {
        "letter": "D",
        "text": "A parte pode ajuizar pessoalmente Ação Rescisória no TRT utilizando o jus postulandi do Art. 791 da CLT."
      }
    ],
    "correctAnswer": "A",
    "justification": "Ação Rescisória na JT (Art. 836 CLT): prazo decadencial 2 anos (Súmula 100 TST); depósito prévio de 20% do valor da causa (salvo justiça gratuita); acordo homologado só se desconstitui por AR (Súmula 259); sem jus postulandi (Súmula 425); acórdão do TRT na AR desafia Recurso Ordinário ao TST (8 dias).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pegadinha clássica da CLT! Enquanto no CPC o depósito prévio da rescisória é de 5% (teto 1.000 SM), no Art. 836 da CLT o depósito prévio na Justiça do Trabalho é de 20% DO VALOR DA CAUSA (salvo justiça gratuita)!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 259 do TST, só por AÇÃO RESCISÓRIA é impugnável o termo de conciliação previsto no parágrafo único do Art. 831 da CLT (o acordo homologado vale como decisão irrecorrível, Súmula 100, V)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 425 do TST, o jus postulandi NÃO alcança a Ação Rescisória (exige obrigatoriamente advogado)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 836 da CLT, Art. 966 CPC e Súmulas 100, 259, 412 e 425 do TST",
        "textSnippet": "Ação Rescisória na JT (Art. 836 CLT): prazo decadencial 2 anos (Súmula 100 TST); depósito prévio de 20% do valor da causa (salvo justiça gratuita); acordo homologado só se desconstitui por AR (Súmula 259); sem jus postulandi (Súmula 425); acórdão do TRT na AR desafia Recurso Ordinário ao TST (8 dias)."
      }
    ],
    "jurisprudence": "Súmulas 100, 259 e 425 do TST",
    "professorTip": "Ação Rescisória na JT (Art. 836): Depósito prévio = 20% (CPC é 5%)! Prazo = 2 anos (Súmula 100)! Desfazer acordo homologado = SÓ Ação Rescisória (Súmula 259)! Recurso do TRT = RO ao TST!"
  },
  {
    "id": "mig_ptra_040",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Sentença Trabalhista - Nulidade por Ausência de Tentativa de Conciliação e Decisão Líquida",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em audiência trabalhista pelo rito ordinário, o juiz inicia a instrução sem formular a primeira proposta obrigatória de conciliação antes da defesa, ou encerra a instrução sem renovar a segunda tentativa obrigatória após as razões finais, proferindo sentença logo em seguida. Qual o vício processual decorrente da ausência das tentativas conciliatórias?",
    "options": [
      {
        "letter": "A",
        "text": "A tentativa de conciliação na Justiça do Trabalho é obrigatória apenas na abertura da audiência, sendo facultativa após as razões finais."
      },
      {
        "letter": "B",
        "text": "O termo de conciliação homologado em juízo pela Justiça do Trabalho desafia Recurso Ordinário pelas partes se uma delas se arrepender em 8 dias."
      },
      {
        "letter": "C",
        "text": "No Procedimento Sumaríssimo, o juiz do trabalho deve proferir sentença com relatório extenso detalhando todos os depoimentos."
      },
      {
        "letter": "D",
        "text": "Pela CLT, há DOIS momentos obrigatórios de proposta de conciliação pelo juiz: (1) aberta a audiência, ANTES da apresentação da defesa (Art. 846 CLT); e (2) terminada a instrução e após aduzidas as razões finais, ANTES de proferida a sentença (Art. 850 CLT)! Segundo a jurisprudência consolidada do TST, a ausência da PRIMEIRA tentativa de conciliação não gera nulidade automática se renovada ao final sem prejuízo; já a ausência da SEGUNDA proposta conciliatória (após razões finais) pode ensejar NULIDADE da sentença SE houver prejuízo efetivo e arguição oportuna pela parte (Art. 794 CLT)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Conciliação na CLT: obrigatória na abertura (Art. 846) e após razões finais (Art. 850); pode ser celebrada em qualquer momento (Art. 764, § 3º). Termo homologado = irrecorrível para as partes (Art. 831, § único — cabe RO só para a União sobre INSS; partes só AR). Sumaríssimo dispensa relatório na sentença (Art. 852-I).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "São DOIS os momentos obrigatórios na CLT: abertura da audiência antes da defesa (Art. 846) e após as razões finais antes da sentença (Art. 850) — além da conciliação possível em qualquer fase (Art. 764, § 3º)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 831, parágrafo único, da CLT, no caso de conciliação, o termo que for lavrado valerá como DECISÃO IRRECORRÍVEL PARA AS PARTES, salvo para a Previdência Social quanto às contribuições que lhe forem devidas (as partes só atacam por Ação Rescisória — Súmula 259 TST)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 852-I da CLT, no procedimento SUMARÍSSIMO a sentença mencionará os elementos de convicção do juízo, com resumo dos fatos relevantes ocorridos em audiência, DISPENSADO O RELATÓRIO!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 764, 831, 832, 846 e 850 da CLT e Súmula 297 / SDI-1 TST",
        "textSnippet": "Conciliação na CLT: obrigatória na abertura (Art. 846) e após razões finais (Art. 850); pode ser celebrada em qualquer momento (Art. 764, § 3º). Termo homologado = irrecorrível para as partes (Art. 831, § único — cabe RO só para a União sobre INSS; partes só AR). Sumaríssimo dispensa relatório na sentença (Art. 852-I)."
      }
    ],
    "jurisprudence": "Súmula nº 259 do TST",
    "professorTip": "Conciliação obrigatória: 1ª antes da defesa (Art. 846) e 2ª após razões finais (Art. 850)! Acordo homologado = IRRECORRÍVEL p/ as partes (só União recorre p/ INSS)! Sumaríssimo = dispensa relatório!"
  },
  {
    "id": "mig_ptra_041",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Litigância de Má-Fé na CLT (Arts. 793-A a 793-D) - Multas e Testemunhas",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Em reclamação trabalhista, o reclamante ou a reclamada altera intencionalmente a verdade dos fatos e interpõe recurso com intuito manifestamente protelatório; além disso, uma testemunha ouvida sob compromisso mente deliberadamente sobre fato essencial. Quais as sanções pecuniárias previstas na CLT?",
    "options": [
      {
        "letter": "A",
        "text": "A multa por litigância de má-fé na CLT varia de 10% a 20% do valor da causa e não pode ser aplicada de ofício."
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho, mesmo que duas ou mais pessoas litiguem de má-fé, a multa será obrigatoriamente solidária em todos os casos."
      },
      {
        "letter": "C",
        "text": "A testemunha compromissada não pode sofrer sanção financeira direta pelo juiz do trabalho no próprio processo."
      },
      {
        "letter": "D",
        "text": "Pelos Arts. 793-A a 793-C da CLT (inseridos pela Reforma Trabalhista), quem litiga de má-fé (autor, réu ou interveniente) será condenado, de ofício ou a requerimento, a pagar MULTA SUPERIOR A 1% E INFERIOR A 10% do valor corrigido da causa, além de indenizar a parte contrária pelos prejuízos, honorários e despesas! Se o valor da causa for irrisório ou inestimável, a multa poderá ser fixada em até 2 VEZES o limite máximo dos benefícios do RGPS (Art. 793-C, § 2º)! E pelo Art. 793-D da CLT, aplica-se a MESMA multa (> 1% e < 10%) à TESTEMUNHA que intencionalmente alterar a verdade dos fatos ou omitir fatos essenciais ao julgamento da causa!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Litigância de má-fé (Arts. 793-A a 793-D CLT): multa > 1% e < 10% do valor corrigido da causa (ou até 2x teto RGPS se irrisório/inestimável) + indenização + honorários; aplica-se de ofício ou a requerimento; aplica-se também à TESTEMUNHA que mente ou omite fato essencial (Art. 793-D).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Faixa exata do Art. 793-C da CLT: multa SUPERIOR A 1% e INFERIOR A 10% do valor corrigido da causa (de ofício ou a requerimento)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 793-C, § 1º, da CLT, quando forem 2 ou mais os litigantes de má-fé, o juízo condenará cada um na PROPORÇÃO de seu respectivo interesse na causa — só sendo solidariamente responsáveis os que se coligaram para lesar a parte contrária!"
      },
      {
        "letter": "C",
        "explanation": "Novidade marcante da Reforma Trabalhista (Art. 793-D CLT): aplica-se a multa do Art. 793-C à testemunha que intencionalmente altera a verdade ou omite fatos essenciais (sem prejuízo da comunicação ao MPF para apuração do crime de falso testemunho)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 793-A a 793-D da CLT",
        "textSnippet": "Litigância de má-fé (Arts. 793-A a 793-D CLT): multa > 1% e < 10% do valor corrigido da causa (ou até 2x teto RGPS se irrisório/inestimável) + indenização + honorários; aplica-se de ofício ou a requerimento; aplica-se também à TESTEMUNHA que mente ou omite fato essencial (Art. 793-D)."
      }
    ],
    "professorTip": "Má-fé CLT (793-C): multa > 1% e < 10% da causa (teto 2x INSS se irrisório)! Testemunha mentirosa também leva essa multa no Art. 793-D!"
  },
  {
    "id": "mig_ptra_042",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Prescrição no Processo do Trabalho - Arguição na Instância Ordinária (Súmula 153 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa reclamada esquece de arguir a prescrição quinquenal trabalhista na contestação apresentada na Vara do Trabalho, e também não a menciona no Recurso Ordinário interposto ao TRT — vindo a invocá-la pela primeira vez apenas nas razões do Recurso de Revista ao TST (ou requerendo que o TST a pronuncie de ofício). O pedido de prescrição deve ser acolhido?",
    "options": [
      {
        "letter": "A",
        "text": "Pelo Art. 193 do Código Civil, a prescrição quinquenal pode ser alegada pela primeira vez no Recurso de Revista ao TST e deve ser declarada de ofício pelo juiz na fase de conhecimento."
      },
      {
        "letter": "B",
        "text": "A prescrição só pode ser alegada na contestação de 1º grau, precluindo se suscitada pela primeira vez no Recurso Ordinário ao TRT."
      },
      {
        "letter": "C",
        "text": "A prescrição intercorrente na execução trabalhista também depende de provocação expressa da parte executada, nunca podendo ser reconhecida de ofício."
      },
      {
        "letter": "D",
        "text": "NÃO! Pela Súmula 153 do TST, NÃO se conhece de prescrição NÃO arguida na INSTÂNCIA ORDINÁRIA (ou seja, precisa ser alegada na Vara do Trabalho — na contestação ou até razões finais — ou no Recurso Ordinário/contrarrazões perante o TRT)! É INVIÁVEL arguir a prescrição bienal/quinquenal pela primeira vez em sede de Recurso de Revista ou Embargos ao TST! Ademais, a jurisprudência predominante do TST entende incompatível com a proteção trabalhista a pronúncia DE OFÍCIO da prescrição bienal/quinquenal pelo juiz na fase de conhecimento (diferente da prescrição INTERCORRENTE na execução, que o Art. 11-A, § 2º, CLT autoriza declarar de ofício)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Súmula 153 TST: prescrição quinquenal/bienal precisa ser arguida na instância ordinária (Vara ou TRT até RO); NÃO cabe alegar pela 1ª vez no RR ao TST e não se pronuncia de ofício na cognição. Exceção na execução: prescrição intercorrente (2 anos — Art. 11-A CLT) PODE ser declarada de ofício!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Súmula 153 do TST: prescrição deve ser arguida na instância ORDINÁRIA (Vara ou TRT)! E na fase de conhecimento, o TST não aplica a pronúncia de ofício do CPC — diferente da prescrição intercorrente na execução (Art. 11-A CLT)!"
      },
      {
        "letter": "B",
        "explanation": "O TRT ainda integra a instância ORDINÁRIA! Pela Súmula 153 TST, é perfeitamente tempestiva a arguição da prescrição até o Recurso Ordinário (ou contrarrazões ao RO) no TRT!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 11-A, § 2º, da CLT (Reforma Trabalhista), a prescrição INTERCORRENTE (2 anos na execução) poderá ser requerida ou declarada DE OFÍCIO em qualquer grau de jurisdição!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 193 do CC, Art. 769 CLT e Súmula 153 do TST",
        "textSnippet": "Súmula 153 TST: prescrição quinquenal/bienal precisa ser arguida na instância ordinária (Vara ou TRT até RO); NÃO cabe alegar pela 1ª vez no RR ao TST e não se pronuncia de ofício na cognição. Exceção na execução: prescrição intercorrente (2 anos — Art. 11-A CLT) PODE ser declarada de ofício!"
      }
    ],
    "jurisprudence": "Súmula nº 153 do TST",
    "professorTip": "Súmula 153 TST: Prescrição só pode ser alegada até o TRT (instância ordinária — NUNCA pela 1ª vez no RR)! Na cognição = não decreta de ofício! Na execução (intercorrente 2 anos, Art. 11-A) = PODE de ofício!"
  },
  {
    "id": "mig_ptra_043",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Ação Civil Pública Trabalhista, Coisa Julgada e Substituição Processual Sindical",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Sindicato profissional ajuíza reclamação trabalhista em nome próprio como substituto processual pleiteando pagamento de adicional de periculosidade para todos os integrantes da categoria na empresa, sem juntar rol de substituídos nem autorização individual em assembleia; paralelamente, MPT ajuíza Ação Civil Pública em Vara do Trabalho de uma comarca. Quais as regras de legitimidade e alcance territorial da coisa julgada?",
    "options": [
      {
        "letter": "A",
        "text": "Para atuar como substituto processual na Justiça do Trabalho, o sindicato precisa apresentar procuração individual ou autorização expressa de cada trabalhador substituído."
      },
      {
        "letter": "B",
        "text": "A sentença proferida em Ação Civil Pública trabalhista limita seus efeitos obrigatoriamente aos limites geográficos da jurisdição da Vara do Trabalho prolatora."
      },
      {
        "letter": "C",
        "text": "A desistência da ação coletiva pelo sindicato ou associação acarreta a perda automática do prazo prescricional para as ações individuais dos trabalhadores."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 8º, III, da CF e Tema 823 do STF (Súmula 286 TST / cancelamento da Súmula 310), o SINDICATO possui legitimidade extraordinária AMPLA como substituto processual para defender direitos individuais homogêneos ou coletivos de TODA a categoria, DISPENSANDO autorização individual ou juntada de rol de substituídos! E quanto à Ação Civil Pública trabalhista: a competência territorial define-se pela extensão do dano (OJ 130 SDI-2 TST — dano local = Vara do local; dano regional/supramunicipal = qualquer Vara da Capital do Estado ou DF; dano nacional = Vara do DF ou da Capital!), e o STF no Tema 1075 declarou INCONSTITUCIONAL o Art. 16 da Lei 7.347/85 (logo, a coisa julgada na ACP tem eficácia nacional/erga omnes na extensão dos substituídos, sem limitação à competência territorial do órgão prolator)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Substituição sindical (Art. 8º, III, CF + Tema 823 STF): ampla legitimidade para direitos individuais homogêneos e coletivos, SEM rol ou autorização; interrompe prescrição (OJ 359 SDI-1). ACP Trabalhista: competência (OJ 130 SDI-2 TST — local -> Vara local; regional -> Capital; nacional -> DF/Capital); coisa julgada sem limite territorial (STF Tema 1075).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No Tema 823 (RE 883.642), o STF consolidou que o Art. 8º, III, CF confere ampla legitimidade extraordinária aos sindicatos independentemente de autorização dos substituídos!"
      },
      {
        "letter": "B",
        "explanation": "O STF no Tema 1075 declarou inconstitucional a limitação territorial do Art. 16 da Lei da ACP (e também da Lei 9.494/97): a coisa julgada coletiva estende-se a todos os lesados pela conduta ilícita, conforme Art. 103 do CDC!"
      },
      {
        "letter": "C",
        "explanation": "A ação coletiva ou substituição processual INTERROMPE a prescrição em relação aos pedidos idênticos para os trabalhadores substituídos (OJ 359 SDI-1 TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 8º, III, CF, Lei nº 7.347/85, Art. 103 CDC, Tema 823 STF e Súmula 286 TST",
        "textSnippet": "Substituição sindical (Art. 8º, III, CF + Tema 823 STF): ampla legitimidade para direitos individuais homogêneos e coletivos, SEM rol ou autorização; interrompe prescrição (OJ 359 SDI-1). ACP Trabalhista: competência (OJ 130 SDI-2 TST — local -> Vara local; regional -> Capital; nacional -> DF/Capital); coisa julgada sem limite territorial (STF Tema 1075)."
      }
    ],
    "jurisprudence": "STF Temas 823 e 1075 e OJ 130 SDI-2 TST",
    "professorTip": "Sindicato substituto processual (Art. 8º, III, CF): NÃO precisa de autorização nem rol (Tema 823 STF)! ACP: eficácia da sentença NÃO fica presa à comarca (Tema 1075 STF)!"
  },
  {
    "id": "mig_ptra_044",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Assistência Litisconsorcial, Amicus Curiae e Intervenção de Terceiros na JT",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em reclamação trabalhista ordinária, empresa tomadora de serviços ou ex-empregador pretende requerer denunciação da lide contra o Município ou contra terceiro estranho à relação de trabalho (ex.: seguradora civil) para exercer direito de regresso. Admite-se amplamente a denunciação da lide e todas as intervenções de terceiros do CPC na Justiça do Trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "Por força do Art. 15 do CPC, são obrigatórias na Justiça do Trabalho a denunciação da lide à seguradora e o chamamento ao processo em toda ação acidentária."
      },
      {
        "letter": "B",
        "text": "O amicus curiae não pode ser admitido em recursos repetitivos ou incidentes trabalhistas por ser instituto exclusivo do controle de constitucionalidade no STF."
      },
      {
        "letter": "C",
        "text": "O IDPJ (Incidente de Desconsideração da Personalidade Jurídica) é inaplicável no Processo do Trabalho, seguindo o redirecionamento direto."
      },
      {
        "letter": "D",
        "text": "Atenção à IN 39/2016 do TST e à jurisprudência após a EC 45/2004: admite-se na Justiça do Trabalho a ASSISTÊNCIA (simples e litisconsorcial), o INCIDENTE DE DESCONSIDERAÇÃO DA PERSONALIDADE JURÍDICA (IDPJ — Art. 855-A CLT) e o AMICUS CURIAE (Art. 138 CPC); CONTUDO, o TST continua rejeitando em regra a DENUNCIAÇÃO DA LIDE e o CHAMAMENTO AO PROCESSO quando introduzam relação jurídica estritamente civil/securitária alheia à competência material do Art. 114 da CF (ex.: seguradora privada), ou que atrasem injustificadamente a marcha processual do crédito alimentar do trabalhador!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Intervenção de terceiros na JT: Cabem = Assistência, IDPJ (Art. 855-A CLT), Amicus Curiae (Art. 138 CPC / IN 39 TST). Em regra NÃO cabe = Denunciação da lide contra seguradora/terceiro civil estranho ao Art. 114 CF.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O TST mantém o cancelamento da OJ 227 SDI-1 com cautela: denunciação da lide de seguradora civil envolve relação securitária alheia à competência do Art. 114 CF (e retarda a tutela trabalhista), sendo inadmitida pela jurisprudência dominante!"
      },
      {
        "letter": "B",
        "explanation": "Pela IN 39/2016 do TST e Art. 896-C, § 8º, da CLT, o amicus curiae (Art. 138 CPC) aplica-se plenamente ao Processo do Trabalho, especialmente em IRDR, IRR e discussões de relevância social!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 855-A da CLT positivou expressamente a aplicação dos Arts. 133 a 137 do CPC (IDPJ) no Processo do Trabalho!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 119–138 CPC e IN 39/2016 do TST (Art. 3º)",
        "textSnippet": "Intervenção de terceiros na JT: Cabem = Assistência, IDPJ (Art. 855-A CLT), Amicus Curiae (Art. 138 CPC / IN 39 TST). Em regra NÃO cabe = Denunciação da lide contra seguradora/terceiro civil estranho ao Art. 114 CF."
      }
    ],
    "jurisprudence": "IN 39/2016 do TST",
    "professorTip": "Na JT CABEM: Assistência + IDPJ (855-A) + Amicus Curiae! NÃO cabe em regra: denunciação da lide de seguradora civil estranha ao Art. 114 CF!"
  },
  {
    "id": "mig_ptra_045",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Desistência da Ação Trabalhista (Art. 841, § 3º CLT) e Arquivamento",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Em reclamação trabalhista eletrônica (PJe), a reclamada já apresentou contestação escrita no sistema dias antes da audiência inaugural. Na véspera da audiência, o reclamante protocola pedido unilateral de desistência da ação para ajuizar outra ação posteriormente em juízo diferente, mas a empresa se opõe requerendo o julgamento de mérito. Pode o reclamante desistir sem consentimento da ré?",
    "options": [
      {
        "letter": "A",
        "text": "Antes da realização física da audiência inaugural e do recebimento oral da defesa em ata, o reclamante pode desistir livremente da ação mesmo após a contestação protocolada no PJe."
      },
      {
        "letter": "B",
        "text": "O pedido de desistência da ação sem anuência do réu equivale à renúncia ao direito material e faz coisa julgada material."
      },
      {
        "letter": "C",
        "text": "A desistência do recurso já interposto também depende da anuência do recorrido na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "NÃO! Pelo Art. 841, § 3º, da CLT (inserido pela Lei nº 13.467/2017), OFERECIDA A CONTESTAÇÃO, ainda que eletronicamente, o reclamante NÃO poderá, sem o CONSENTIMENTO DO RECLAMADO, desistir da ação!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 841, § 3º CLT: protocolada a contestação (inclusive eletrônica no PJe antes da audiência), desistência da AÇÃO exige consentimento do réu. Já desistência de RECURSO (Art. 998 CPC) pode a qualquer tempo SEM anuência do recorrido.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 841, § 3º, da CLT é expresso: oferecida a contestação, \"ainda que eletronicamente\", exige-se o consentimento do reclamado para a desistência!"
      },
      {
        "letter": "B",
        "explanation": "Na falta de consentimento do réu após a contestação, o juiz INDEFERE o pedido de desistência e dá prosseguimento regular ao processo (não convola desistência em renúncia sem manifestação expressa de renúncia do autor)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 998 do CPC (aplicável subsidiariamente), o recorrente poderá, A QUALQUER TEMPO, SEM A ANUÊNCIA DO RECORRIDO ou dos litisconsortes, desistir do recurso (diferente da desistência da ação após contestação)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 841, § 3º, da CLT",
        "textSnippet": "Art. 841, § 3º CLT: protocolada a contestação (inclusive eletrônica no PJe antes da audiência), desistência da AÇÃO exige consentimento do réu. Já desistência de RECURSO (Art. 998 CPC) pode a qualquer tempo SEM anuência do recorrido."
      }
    ],
    "professorTip": "Desistir da AÇÃO após contestação (até eletrônica) = PRECISA de consentimento do réu (Art. 841, § 3º)! Desistir do RECURSO = NÃO precisa anuência do recorrido (Art. 998 CPC)!"
  },
  {
    "id": "mig_ptra_046",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Depoimento Pessoal, Confissão Ficta e Assistente Técnico (Súmulas 74 e 341 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em audiência de instrução em prosseguimento (já colhida a defesa), o reclamante ou a reclamada, expressamente intimados para prestar depoimento pessoal sob pena de confissão, não comparecem sem motivo justificado; em outro processo, a parte vencedora na perícia cobra da vencida os honorários do assistente técnico que contratou. O que decide o TST?",
    "options": [
      {
        "letter": "A",
        "text": "A parte vencedora no objeto da perícia tem direito ao reembolso dos honorários de seu assistente técnico pela parte sucumbente."
      },
      {
        "letter": "B",
        "text": "Aplicada a confissão ficta pela ausência à audiência de instrução, o juiz deve ignorar inclusive documentos já juntados antes da audiência e ouvir testemunhas da parte ausente."
      },
      {
        "letter": "C",
        "text": "Se a intimação da parte para a audiência em prosseguimento não contiver advertência expressa sobre a pena de confissão, ainda assim aplica-se a confissão ficta automaticamente."
      },
      {
        "letter": "D",
        "text": "A ausência injustificada da parte à audiência em prosseguimento na qual deveria depor (quando expressamente intimada sob essa cominação — Súmula 74, I, TST!) aplica a CONFISSÃO FICTA quanto à matéria de fato (a qual pode ser elidida pela prova pré-constituída nos autos — Súmula 74, II — vedada a produção de novas provas pela parte confessa, § III!); e quanto ao assistente técnico, pela Súmula 341 do TST, a indicação do perito assistente é FACULDADE da parte, a qual deve responder pelos respectivos honorários, AINDA QUE VENCEDORA no objeto da perícia!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Súmula 74 TST: (I) confissão ficta se ausente na instrução após intimação expressa com essa cominação; (II) confronta com prova pré-constituída nos autos; (III) confesso não produz novas provas posteriores. Súmula 341 TST: honorários do assistente técnico são pagos por quem o indicou, mesmo vencedor.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Súmula 341 do TST: os honorários do assistente técnico são SEMPRE de responsabilidade da parte que o indicou (faculdade da parte), mesmo que ela vença integralmente a ação e a perícia!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 74, II e III, do TST: a prova pré-constituída nos autos pode ser levada em conta para confronto com a confissão ficta (não implicando cerceamento o indeferimento de provas posteriores requeridas pela parte confessa)!"
      },
      {
        "letter": "C",
        "explanation": "A Súmula 74, I, do TST exige que a parte tenha sido EXPRESSAMENTE INTIMADA para comparecer em prosseguimento com a COMINAÇÃO da pena de confissão!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 848 CLT, Art. 385 CPC e Súmulas 74 e 341 do TST",
        "textSnippet": "Súmula 74 TST: (I) confissão ficta se ausente na instrução após intimação expressa com essa cominação; (II) confronta com prova pré-constituída nos autos; (III) confesso não produz novas provas posteriores. Súmula 341 TST: honorários do assistente técnico são pagos por quem o indicou, mesmo vencedor."
      }
    ],
    "jurisprudence": "Súmulas 74 e 341 do TST",
    "professorTip": "Confissão Ficta (Súmula 74): exige intimação expressa c/ pena + confronta c/ prova pré-constituída! Assistente Técnico (Súmula 341): quem contratou PAGA, mesmo ganhando a ação!"
  },
  {
    "id": "mig_ptra_047",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Processual do Trabalho",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Desistência / Arquivamento, Prescrição e Decisão Surpresa na JT (Arts. 9º e 10 CPC / IN 39)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Em sentença proferida em reclamação trabalhista, o magistrado reconhece de ofício a nulidade absoluta de cláusula ou aplica fundamento jurídico novo nunca antes debatido pelas partes nos autos (ex.: decadência legal não suscitada), sem lhes oportunizar manifestação prévia. Isso viola o sistema processual trabalhista segundo a IN 39/2016 do TST?",
    "options": [
      {
        "letter": "A",
        "text": "A vedação à decisão surpresa prevista nos Arts. 9º e 10 do CPC é totalmente incompatível com o Processo do Trabalho pela regra da informalidade."
      },
      {
        "letter": "B",
        "text": "Antes de indeferir qualquer tutela provisória de urgência em risco imediato, o juiz trabalhista é sempre obrigado a intimar o réu para contraditório prévio."
      },
      {
        "letter": "C",
        "text": "A sentença que extingue o processo por decadência de ofício sem ouvir as partes é convalidada automaticamente se a matéria for exclusivamente de direito."
      },
      {
        "letter": "D",
        "text": "SIM! Pelo Art. 4º da Instrução Normativa nº 39/2016 do TST, aplicam-se ao Processo do Trabalho os Arts. 9º e 10 do CPC (vedação à DECISÃO SURPRESA): em qualquer grau de jurisdição, o juiz NÃO pode decidir com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de se manifestar, ainda que se trate de matéria sobre a qual deva decidir de ofício! (Apenas NÃO se considera decisão surpresa a aplicação de norma jurídica diversa aos mesmos fatos sob o brocardo iura novit curia quando os fatos e teses centrais já integraram o contraditório — § 2º do Art. 4º IN 39!)."
      }
    ],
    "correctAnswer": "D",
    "justification": "IN 39/16 TST (Art. 4º): Arts. 9º e 10 do CPC (vedação à decisão surpresa) aplicam-se na JT! Exceções: tutela de urgência, tutela evidência (Art. 311, II/III) e mero enquadramento jurídico diverso sobre fatos/pedidos já debatidos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A IN 39/2016 do TST (Art. 4º) incorporou expressamente a vedação à decisão surpresa (Arts. 9º e 10 do CPC) ao Processo do Trabalho, ressalvando apenas a mera qualificação jurídica de fatos já debatidos (§ 2º)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo próprio Art. 9º, parágrafo único, I, do CPC (c/c Art. 4º, § 1º, IN 39 TST), a tutela provisória de urgência (liminar inaudita altera parte) e a tutela de evidência nos incisos II e III do Art. 311 constituem exceções expressas à oitiva prévia!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 10 do CPC proíbe decidir com base em fundamento novo não submetido ao debate prévio das partes AINDA que se trate de matéria que deva decidir de ofício (como decadência)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 9º e 10 do CPC e Art. 4º da IN 39/2016 do TST",
        "textSnippet": "IN 39/16 TST (Art. 4º): Arts. 9º e 10 do CPC (vedação à decisão surpresa) aplicam-se na JT! Exceções: tutela de urgência, tutela evidência (Art. 311, II/III) e mero enquadramento jurídico diverso sobre fatos/pedidos já debatidos."
      }
    ],
    "jurisprudence": "IN 39/2016 do TST",
    "professorTip": "Vedação à DECISÃO SURPRESA (Arts. 9º e 10 CPC) vale na JT (IN 39 TST): nem matéria de ofício (como decadência) pode surpreender sem ouvir as partes antes!"
  },
  {
    "id": "mig_ptra_048",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Hasta Pública, Adjudicação, Arrematação e Remição na Execução Trabalhista (Art. 888 CLT)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na execução trabalhista, bem imóvel penhorado vai a leilão judicial eletrônico (hasta pública). Qual a antecedência mínima de publicação do edital, o percentual mínimo do lance na arrematação (preço vil) e o prazo para pagamento do sinal e do saldo restante pelo arrematante?",
    "options": [
      {
        "letter": "A",
        "text": "Na execução trabalhista, o edital de leilão judicial é publicado com antecedência de 5 dias e o arrematante paga 10% de sinal com prazo de 15 dias para quitar o saldo."
      },
      {
        "letter": "B",
        "text": "O exequente não pode adjudicar o bem penhorado na execução trabalhista, devendo sempre aguardar arrematação por terceiro."
      },
      {
        "letter": "C",
        "text": "Após assinada a carta de arrematação pelo juiz, o executado ainda pode remir a execução pagando a dívida e desfazendo a arrematação."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 888, caput e §§ 1º a 4º, da CLT: o edital de hasta pública deve ser afixado e publicado em jornal local com antecedência mínima de 20 DIAS; NÃO havendo licitante em 1ª praça nem preço mínimo fixado pelo juiz, o Art. 891 do CPC considera PREÇO VIL o lance inferior a 50% do valor da avaliação (na CLT, o § 1º fala no maior lance possível, aplicando-se subsidiariamente o parâmetro de 50% do CPC conforme jurisprudência atual do TST para evitar enriquecimento ilícito); o arrematante deve garantir o lance com sinal correspondente a 20% do seu valor (§ 2º), tendo o prazo de 24 HORAS para completar o restante do preço (sob pena de perder o sinal em favor da execução — § 4º)! Além disso, é lícito ao exequente ADJUDICAR o bem em igualdade de condições com a melhor oferta (§ 1º)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Hasta pública (Art. 888 CLT): edital >= 20 dias antes; sinal na arrematação = 20%; saldo restante pago em 24 horas (senão perde o sinal e volta a leilão); exequente tem preferência na adjudicação; remição pelo devedor só ANTES da arrematação/adjudicação; preço vil < 50% (Art. 891 CPC).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Prazos próprios do Art. 888 da CLT: edital com antecedência de 20 DIAS; sinal de garantia da arrematação de 20%; pagamento integral do saldo restante em 24 HORAS (perdendo o sinal se não pagar)!"
      },
      {
        "letter": "B",
        "explanation": "O Art. 888, § 1º, da CLT (c/c Art. 876 CPC) assegura expressamente ao exequente o direito de preferência na ADJUDICAÇÃO dos bens penhorados!"
      },
      {
        "letter": "C",
        "explanation": "A REMIÇÃO da execução pelo devedor (Art. 826 CPC / Art. 13 Lei 5.584/70) só pode ser exercida ANTES DE ADJUDICADOS OU ALIENADOS OS BENS (nunca após aperfeiçoada a arrematação/assinatura do auto)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 888 da CLT e Art. 891 do CPC",
        "textSnippet": "Hasta pública (Art. 888 CLT): edital >= 20 dias antes; sinal na arrematação = 20%; saldo restante pago em 24 horas (senão perde o sinal e volta a leilão); exequente tem preferência na adjudicação; remição pelo devedor só ANTES da arrematação/adjudicação; preço vil < 50% (Art. 891 CPC)."
      }
    ],
    "professorTip": "Leilão CLT (Art. 888): edital 20 dias antes | sinal 20% | saldo em 24 HORAS! Remição = só ANTES de adjudicar/arrematar! Preço vil < 50%!"
  },
  {
    "id": "mig_ptra_049",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Incidente de Resolução de Demandas Repetitivas (IRDR) e Recurso Repetitivo no TST (Art. 896-C)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Diante de multiplicidade de Recursos de Revista com fundamento em idêntica questão jurídica de direito material trabalhista, o TST instaura Incidente de Recurso de Revista Repetitivo (IRR — Art. 896-C CLT). Quais os efeitos da tese jurídica firmada no IRR ou em IRDR no TRT?",
    "options": [
      {
        "letter": "A",
        "text": "A tese firmada pelo TST em Incidente de Recurso Repetitivo (IRR) tem efeito meramente persuasivo, podendo qualquer Turma do TST ou TRT decidir livremente em sentido oposto sem retratação."
      },
      {
        "letter": "B",
        "text": "O Incidente de Resolução de Demandas Repetitivas (IRDR) previsto no CPC é incompatível com a Justiça do Trabalho por ausência de previsão na CLT."
      },
      {
        "letter": "C",
        "text": "Durante a afetação de IRR ou IRDR, fica proibida a concessão de tutela provisória de urgência nos processos individuais suspensos."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 896-C, §§ 11 a 13, da CLT, firmado o precedente no IRR pelo TST: os processos suspensos retomam o curso normal para aplicação da tese vinculante; os Recursos de Revista que versem sobre idêntica questão terão SEGUIMENTO DENEGADO se o acórdão do TRT coincidir com a tese do TST, ou retornarão ao TRT para juízo de RETRATAÇÃO se o acórdão regional divergir da tese firmada! Além disso, se a questão envolver norma legal idêntica com impacto na Administração Pública, a tese vinculante do IRR orienta os órgãos da Justiça do Trabalho em todo o país (e da decisão no IRDR do TRT cabe RR com presunção legal de transcendência e repercussão)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "IRR (Art. 896-C CLT) e IRDR (IN 39 TST): uniformizam tese jurídica com efeito vinculante na JT; acórdão de TRT contrário volta p/ retratação; acórdão conforme impede novo RR; tutela de urgência nos processos suspensos pede-se ao juízo de origem.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 896-C da CLT confere eficácia vinculante horizontal e vertical dentro da Justiça do Trabalho ao IRR, impondo retratação ao TRT divergente e negativa de seguimento aos recursos contrários à tese!"
      },
      {
        "letter": "B",
        "explanation": "A IN 39/2016 do TST (Art. 8º) e o Art. 896-B da CLT reconhecem plenamente o cabimento do IRDR no âmbito dos TRTs e do TST (observado também o novo regime recursal da Lei 14.365/22 e súmulas vinculantes)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 982, § 2º, do CPC, durante a suspensão dos processos afetados em IRR/IRDR, eventual pedido de tutela de urgência deverá ser dirigido ao juízo onde tramita o processo suspenso!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 896-B e 896-C da CLT e Arts. 976–987 CPC",
        "textSnippet": "IRR (Art. 896-C CLT) e IRDR (IN 39 TST): uniformizam tese jurídica com efeito vinculante na JT; acórdão de TRT contrário volta p/ retratação; acórdão conforme impede novo RR; tutela de urgência nos processos suspensos pede-se ao juízo de origem."
      }
    ],
    "jurisprudence": "IN 39/2016 do TST",
    "professorTip": "IRR (Art. 896-C) & IRDR: tese vinculante! Acórdão de TRT contrário = volta p/ RETRATAÇÃO! Acórdão conforme = RR denegado!"
  },
  {
    "id": "mig_ptra_050",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Execução de Acordo Descumprido e Cláusula Penal / Multa",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em acordo judicial trabalhista homologado para pagamento parcelado em 10 prestações mensais de R$ 2.000,00, estipulou-se cláusula penal de 50% sobre o saldo devedor e vencimento antecipado das parcelas vincendas em caso de inadimplemento. A empresa atrasa a 4ª parcela em 10 dias. Qual o efeito do inadimplemento no acordo parcelado pela CLT?",
    "options": [
      {
        "letter": "A",
        "text": "No acordo trabalhista parcelado, o exequente deve aguardar o vencimento de todas as parcelas futuras uma a uma para poder executá-las."
      },
      {
        "letter": "B",
        "text": "A cláusula penal estipulada em acordo homologado nunca pode incidir sobre as parcelas vencidas, apenas sobre as vincendas."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 891 da CLT, nas prestações sucessivas por tempo determinado, a execução pelo não pagamento de uma prestação compreenderá as que lhe sucederem (VENCIMENTO ANTECIPADO automático das parcelas vincendas!), executando-se imediatamente o saldo remanescente + a cláusula penal pactuada (observada eventual redução equitativa pelo Art. 413 CC apenas se manifestamente excessiva ou se o atraso for ínfimo de boa-fé segundo a jurisprudência, embora na JT prevaleça em regra o pactuado no título homologado sem ofensa à coisa julgada)!"
      },
      {
        "letter": "D",
        "text": "Contra a decisão que homologou o acordo judicial na audiência cabe Agravo de Petição se a empresa atrasar a parcela por dificuldade financeira."
      }
    ],
    "correctAnswer": "C",
    "justification": "Acordo parcelado (Art. 891 CLT): não pagamento de uma parcela antecipa execução de todas as sucessivas + cláusula penal conforme título homologado (coisa julgada). Acordo descumprido executa-se diretamente nos mesmos autos sem nova ação de conhecimento.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 891 da CLT prevê expressamente que, nas prestações sucessivas por tempo determinado, o inadimplemento de uma prestação faz vencer antecipadamente todas as subsequentes!"
      },
      {
        "letter": "B",
        "explanation": "A cláusula penal incide nos exatos termos estipulados e homologados no acordo (sobre o saldo devedor, sobre a parcela em atraso ou sobre o total, conforme constar da coisa julgada da ata homologada)!"
      },
      {
        "letter": "D",
        "explanation": "O termo de conciliação homologado vale como decisão irrecorrível (Art. 831, § único CLT): o executado não pode usar Agravo de Petição para rediscutir o acordo que livremente assumiu (coisa julgada)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 891 da CLT e Art. 876 da CLT",
        "textSnippet": "Acordo parcelado (Art. 891 CLT): não pagamento de uma parcela antecipa execução de todas as sucessivas + cláusula penal conforme título homologado (coisa julgada). Acordo descumprido executa-se diretamente nos mesmos autos sem nova ação de conhecimento."
      }
    ],
    "professorTip": "Acordo parcelado (Art. 891 CLT): atrasou UMA parcela -> vencem ANTECIPADAMENTE as seguintes + multa do acordo homologado!"
  },
  {
    "id": "mig_ptra_051",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Reclamação Constitucional e Correição Parcial no Processo do Trabalho",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Juiz do Trabalho da Vara pratica ato atentatório à boa ordem processual tumultuando o andamento do feito (ou proferindo despacho de mero expediente sem conteúdo decisório que paralisa abusivamente o processo, sem recurso específico cabível); em outro processo, acórdão de TRT contraria diretamente tese vinculante do STF em ADI/Tema de Repercussão Geral. Quais as medidas corretivas?",
    "options": [
      {
        "letter": "A",
        "text": "A Reclamação Constitucional ao STF contra acórdão de TRT por violação de Tema de Repercussão Geral dispensa o prévio esgotamento das instâncias trabalhistas (como RR/AIRR no TST)."
      },
      {
        "letter": "B",
        "text": "A Correição Parcial tem natureza de recurso ordinário e pode modificar o mérito da sentença definitiva."
      },
      {
        "letter": "C",
        "text": "Contra ato tumultuário ou omissivo do juiz de 1º grau que atenta contra a boa ordem processual e não possui recurso específico cabe CORREIÇÃO PARCIAL (Reclamação Correicional) perante o Corregedor Regional do TRT no prazo regimental de 5 dias (Art. 709, II, CLT c/c Regimento Interno)! Já para preservar a competência do Tribunal ou garantir a autoridade de súmula vinculante, acórdão em controle concentrado (ADI/ADC/ADPF) ou precedente obrigatório (IRR/IRDR/Tema RG após esgotadas as instâncias ordinárias!), cabe RECLAMAÇÃO (Art. 988 CPC e Art. 103-A, § 3º, CF)!"
      },
      {
        "letter": "D",
        "text": "É cabível Reclamação ao STF mesmo após o trânsito em julgado da decisão trabalhista atacada."
      }
    ],
    "correctAnswer": "C",
    "justification": "Correição Parcial (Art. 709, II CLT): medida administrativa contra ato tumultuário sem recurso específico (prazo geral 5 dias). Reclamação (Art. 988 CPC): proibido após trânsito em julgado (Súmula 734 STF); por Tema RG exige esgotamento das instâncias ordinárias (ADI/ADC/ADPF/SV não exigem).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 988, § 5º, II, do CPC, a Reclamação fundada em observância de acórdão de recurso extraordinário com repercussão geral (ou recurso especial/revista repetitivo) SÓ É ADMISSÍVEL após ESGOTADAS AS INSTÂNCIAS ORDINÁRIAS (diferente de ADI/ADC/ADPF/Súmula Vinculante, que não exigem esse esgotamento)!"
      },
      {
        "letter": "B",
        "explanation": "A Correição Parcial tem natureza estritamente ADMINISTRATIVA/disciplinar-processual (para sanar erro de procedimento/inversão tumultuária sem recurso próprio), jamais substituindo recurso jurisdicional contra sentença!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 988, § 5º, I, do CPC e Súmula 734 do STF, é INADMISSÍVEL a Reclamação proposta após o TRÂNSITO EM JULGADO da decisão reclamada!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 988 do CPC, Art. 709, II, da CLT e RITST",
        "textSnippet": "Correição Parcial (Art. 709, II CLT): medida administrativa contra ato tumultuário sem recurso específico (prazo geral 5 dias). Reclamação (Art. 988 CPC): proibido após trânsito em julgado (Súmula 734 STF); por Tema RG exige esgotamento das instâncias ordinárias (ADI/ADC/ADPF/SV não exigem)."
      }
    ],
    "jurisprudence": "Súmula nº 734 do STF",
    "professorTip": "Ato tumultuário sem recurso = CORREIÇÃO PARCIAL! Reclamação (988 CPC) = NUNCA após trânsito em julgado (Súmula 734 STF), e por Tema RG exige esgotar instâncias antes!"
  },
  {
    "id": "mig_ptra_052",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Honorários Sucumbenciais na Reconvenção e Sucumbência Recíproca (Art. 791-A, §§ 3º e 5º CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em reclamação trabalhista, o juiz julga procedentes 2 pedidos do autor (somando R$ 30.000,00) e improcedentes outros 2 pedidos (valor estimado de R$ 20.000,00); além disso, o reclamado apresenta reconvenção pedindo R$ 10.000,00 por danos ao equipamento e vence na reconvenção. Como são arbitrados os honorários advocatícios sucumbenciais?",
    "options": [
      {
        "letter": "A",
        "text": "Na procedência parcial trabalhista, compensam-se automaticamente os honorários devidos ao advogado do autor com os devidos ao advogado do réu."
      },
      {
        "letter": "B",
        "text": "Não são devidos honorários advocatícios na reconvenção trabalhista nem nas ações contra a Fazenda Pública."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 791-A, § 3º, da CLT, na hipótese de PROCEDÊNCIA PARCIAL, o juízo arbitrará honorários de sucumbência RECÍPROCA (entre 5% e 15%), VEDADA A COMPENSAÇÃO entre os honorários (cada parte deve os honorários ao advogado da parte contrária sobre o que perdeu — observada a suspensão de 2 anos se o autor for beneficiário da justiça gratuita pela ADI 5766 STF!); e pelo Art. 791-A, § 5º, são devidos honorários de sucumbência TAMBÉM na RECONVENÇÃO!"
      },
      {
        "letter": "D",
        "text": "Na execução de título extrajudicial (TAC/CCP) ou no cumprimento de sentença não cabe arbitramento de honorários sucumbenciais na JT."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 791-A CLT: honorários de 5% a 15%; devidos contra Fazenda Pública (§ 1º) e na reconvenção (§ 5º); procedência parcial = sucumbência recíproca VEDADA a compensação (§ 3º); justiça gratuita = condição suspensiva de 2 anos sem desconto no crédito (STF ADI 5766).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 791-A, § 3º, da CLT (em linha com o Art. 85, § 14, CPC) PROÍBE expressamente a compensação entre os honorários sucumbenciais recíprocos (são verba alimentar autônoma do advogado)!"
      },
      {
        "letter": "B",
        "explanation": "São devidos honorários sucumbenciais (5% a 15%) tanto nas ações contra a Fazenda Pública (Art. 791-A, § 1º) quanto na RECONVENÇÃO (§ 5º)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 791-A, caput e § 1º, da CLT, os honorários sucumbenciais aplicam-se também às ações propostas contra a Fazenda Pública e nos incidentes/ações trabalhistas típicas (observando-se no TST a restrição na execução de sentença já transitada, salvo embargos/ações autônomas quando previsto!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 791-A, §§ 1º a 5º, da CLT",
        "textSnippet": "Art. 791-A CLT: honorários de 5% a 15%; devidos contra Fazenda Pública (§ 1º) e na reconvenção (§ 5º); procedência parcial = sucumbência recíproca VEDADA a compensação (§ 3º); justiça gratuita = condição suspensiva de 2 anos sem desconto no crédito (STF ADI 5766)."
      }
    ],
    "jurisprudence": "STF ADI 5766",
    "professorTip": "Art. 791-A CLT (5% a 15%): VEDADA compensação na sucumbência recíproca (§ 3º)! CABEM na Reconvenção (§ 5º) e contra Fazenda Pública (§ 1º)!"
  },
  {
    "id": "mig_ptra_053",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Atuação da Advocacia Pública, Ministério Público do Trabalho e Custas em Ação Civil Pública",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "O Ministério Público do Trabalho (MPT) ajuíza Ação Civil Pública na Justiça do Trabalho contra grande frigorífico postulando adequação ergonômica e dano moral coletivo, sendo derrotado ao final da instrução (sem comprovação de má-fé). O MPT pode ser condenado em honorários advocatícios e custas, e quando o MPT atua como fiscal da ordem jurídica nos processos individuais?",
    "options": [
      {
        "letter": "A",
        "text": "Sendo julgada improcedente a Ação Civil Pública proposta pelo MPT ou por sindicato, o juiz deve condenar automaticamente o autor em honorários sucumbenciais de 5% a 15%."
      },
      {
        "letter": "B",
        "text": "O MPT tem legitimidade para recorrer como fiscal da lei apenas se houver concordância expressa do reclamante menor."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 18 da Lei nº 7.347/85 (Lei da ACP) e Art. 790-A, II, da CLT, o Ministério Público do Trabalho é ISENTO de custas e despesas processuais e, em Ação Civil Pública, a parte autora (MPT/sindicato/associação) NÃO é condenada em honorários advocatícios, custas ou despesas processuais, SALVO COMPROVADA MÁ-FÉ! Além disso, o MPT atua obrigatoriamente como fiscal da ordem jurídica (custos legis) nas causas em que houver interesse de incapazes/menores, índios, interesse público/social relevante e nos recursos/dissídios coletivos nos Tribunais (Art. 83 LC 75/93), gozando de intimação pessoal e prazo em dobro (DL 779/69)!"
      },
      {
        "letter": "D",
        "text": "A intimação do Ministério Público do Trabalho ocorre exclusivamente pelo Diário Eletrônico (DEJT), sem necessidade de intimação pessoal."
      }
    ],
    "correctAnswer": "C",
    "justification": "MPT (LC 75/93 + Art. 790-A CLT + DL 779/69): isento de custas; intimação pessoal; prazo em dobro p/ recorrer; legitimidade p/ recorrer como custos legis; na ACP não paga honorários/custas salvo comprovada má-fé (Art. 18 LACP).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Regra protetiva do Art. 18 da LACP (e Súmula/jurisprudência pacífica do TST): na Ação Civil Pública, o autor (MPT/sindicato) só paga honorários de sucumbência e custas se houver COMPROVADA MÁ-FÉ!"
      },
      {
        "letter": "B",
        "explanation": "Atuando como custos legis (ex.: em demanda envolvendo trabalho de menor ou interesse público — Art. 83 LC 75/93 e Súmula 99 STJ/Art. 179 CPC), o MPT possui legitimidade autônoma para recorrer mesmo que as partes não recorram!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 18, II, \"h\", da LC 75/93 e Art. 180 do CPC, os membros do MPT têm prerrogativa de INTIMAÇÃO PESSOAL nos processos em que oficiarem (por entrega dos autos com vista ou via eletrônica pessoal no PJe)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 83 da LC nº 75/1993, Art. 18 Lei nº 7.347/85 e DL 779/69",
        "textSnippet": "MPT (LC 75/93 + Art. 790-A CLT + DL 779/69): isento de custas; intimação pessoal; prazo em dobro p/ recorrer; legitimidade p/ recorrer como custos legis; na ACP não paga honorários/custas salvo comprovada má-fé (Art. 18 LACP)."
      }
    ],
    "professorTip": "MPT na JT: isento de custas + intimação pessoal + prazo em DOBRO! Na ACP, autor só paga honorários/custas se houver MÁ-FÉ (Art. 18 LACP)!"
  },
  {
    "id": "mig_ptra_054",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Organização da Justiça do Trabalho e Órgãos Jurisdicionais",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Determinado Município não possui Vara do Trabalho instalada em sua comarca; além disso, discute-se a composição do Tribunal Superior do Trabalho (TST) e o órgão responsável pela supervisão administrativa e orçamentária da Justiça do Trabalho de 1º e 2º graus. Como a Constituição Federal organiza a Justiça do Trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "Nas comarcas sem Vara do Trabalho, as reclamações trabalhistas são julgadas pelo Juiz Federal, com recurso para o TRF."
      },
      {
        "letter": "B",
        "text": "O Tribunal Superior do Trabalho é composto por 33 Ministros, seguindo a mesma composição numérica do Superior Tribunal de Justiça."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 111 da CF, são órgãos da Justiça do Trabalho: (I) o TST (composto por 27 Ministros, sendo 1/5 de advogados e membros do MPT pelo quinto constitucional, e o restante dentre juízes dos TRTs da magistratura de carreira — Art. 111-A CF), (II) os TRTs (mínimo de 7 juízes cada — Art. 115 CF) e (III) os Juízes do Trabalho (Varas do Trabalho — extinta a representação classista desde a EC 24/99!). Nas comarcas NÃO abrangidas por jurisdição de Vara do Trabalho, a competência trabalhista é atribuída ao JUIZ DE DIREITO estadual (Art. 112 CF), cabendo Recurso Ordinário para o respectivo TRT! E a supervisão administrativa, orçamentária, financeira e patrimonial da JT de 1º e 2º graus cabe ao CSJT (Conselho Superior da Justiça do Trabalho — Art. 111-A, § 2º, II, CF)!"
      },
      {
        "letter": "D",
        "text": "A Escola Nacional de Formação e Aperfeiçoamento de Magistrados do Trabalho (ENAMAT) e o CSJT integram a estrutura do CNJ, fora do TST."
      }
    ],
    "correctAnswer": "C",
    "justification": "Organização da JT (Arts. 111–116 CF): TST (27 Ministros, idade 35–70 anos após EC 122/22; 1/5 advogados/MPT, 4/5 juízes TRT; junto ao TST funcionam ENAMAT e CSJT); TRTs (mínimo 7 desembargadores); Juízes do Trabalho (jurisdição singular nas Varas). Comarca sem Vara = Juiz de Direito julga e recurso vai para o TRT (Art. 112 CF).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 112 da CF (e Súmula 10 do STJ), nas comarcas não abrangidas por Vara do Trabalho, a lei pode atribuir jurisdição trabalhista ao JUIZ DE DIREITO (estadual), com recurso sempre para o TRIBUNAL REGIONAL DO TRABALHO (TRT)!"
      },
      {
        "letter": "B",
        "explanation": "O TST compõe-se de 27 MINISTROS (escolhidos dentre brasileiros entre 35 e 70 anos — teto elevado pela EC 122/2022! — aprovados pela maioria absoluta do Senado Federal, sendo 1/5 pelo quinto constitucional e 4/5 dentre juízes de carreira dos TRTs — Art. 111-A CF)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 111-A, § 2º, da CF, funcionam JUNTO AO TST tanto a ENAMAT (inciso I) quanto o CSJT (inciso II)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 111 a 116 da CF e Art. 644 da CLT",
        "textSnippet": "Organização da JT (Arts. 111–116 CF): TST (27 Ministros, idade 35–70 anos após EC 122/22; 1/5 advogados/MPT, 4/5 juízes TRT; junto ao TST funcionam ENAMAT e CSJT); TRTs (mínimo 7 desembargadores); Juízes do Trabalho (jurisdição singular nas Varas). Comarca sem Vara = Juiz de Direito julga e recurso vai para o TRT (Art. 112 CF)."
      }
    ],
    "professorTip": "TST = 27 Ministros (35 a 70 anos, EC 122/22) + ENAMAT + CSJT junto a ele! Comarca sem Vara do Trabalho = Juiz de Direito julga e RO vai pro TRT (Art. 112 CF)!"
  },
  {
    "id": "mig_ptra_055",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Imunidade de Jurisdição e Execução de Estado Estrangeiro na JT",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado brasileiro contratado no Brasil como motorista da Embaixada de país estrangeiro é dispensado sem receber verbas rescisórias e ajuíza reclamação trabalhista na Justiça do Trabalho contra o Estado estrangeiro. O Estado estrangeiro possui imunidade absoluta na fase de conhecimento e na fase de execução?",
    "options": [
      {
        "letter": "A",
        "text": "O Estado estrangeiro goza de imunidade absoluta de jurisdição na Justiça do Trabalho, impedindo sequer o conhecimento de ação de verbas rescisórias."
      },
      {
        "letter": "B",
        "text": "Os bens imóveis utilizados como sede da embaixada ou residência do embaixador podem ser livremente penhorados e levados a leilão na execução trabalhista."
      },
      {
        "letter": "C",
        "text": "A imunidade de jurisdição de Estado estrangeiro é RELATIVA na fase de CONHECIMENTO: em relações trabalhistas (atos de gestão, e não atos de império!), a Justiça do Trabalho brasileira É COMPETENTE para processar e julgar a ação trabalhista (Art. 114, I, CF — salvo atos de império ligados à soberania diplomática/segurança externa segundo o STF no Tema 944, que manteve relativa a imunidade apenas para atos de império!); CONTUDO, na fase de EXECUÇÃO forçada, prevalece a IMUNIDADE DE EXECUÇÃO sobre bens afetados à missão diplomática ou consular (Convenções de Viena de 1961 e 1963), exigindo carta rogatória ou penhora apenas de bens privados não afetos à representação diplomática!"
      },
      {
        "letter": "D",
        "text": "Das sentenças proferidas em reclamações trabalhistas contra Estado estrangeiro ou organismo internacional cabe Recurso Ordinário diretamente para o TST."
      }
    ],
    "correctAnswer": "C",
    "justification": "Estado Estrangeiro na JT: fase de conhecimento = SEM imunidade em atos de gestão trabalhista (competência da JT — Art. 114, I, CF); fase de execução = bens diplomáticos são impenhoráveis (imunidade de execução, salvo renúncia ou bens não afetos à missão).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF consagra há décadas que atos de gestão (como contratação de empregados locais no Brasil) NÃO têm imunidade de jurisdição na fase cognitiva (Art. 114, I, CF)!"
      },
      {
        "letter": "B",
        "explanation": "Pelas Convenções de Viena sobre Relações Diplomáticas e Consulares, os bens afetos à missão diplomática têm imunidade de EXECUÇÃO (salvo renúncia expressa ou bens estritamente comerciais estranhos à missão)!"
      },
      {
        "letter": "D",
        "explanation": "O recurso contra sentença da Vara do Trabalho em ação contra Estado estrangeiro ou organismo internacional é o Recurso Ordinário para o TRT (o Art. 109, II, CF e Art. 105, II, \"c\", CF para o STJ referem-se à Justiça Federal comum, NÃO à Justiça do Trabalho — na JT segue a cadeia Vara -> TRT -> TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 114, I, da CF e Jurisprudência do STF (RE 1.034.840 / Tema 944)",
        "textSnippet": "Estado Estrangeiro na JT: fase de conhecimento = SEM imunidade em atos de gestão trabalhista (competência da JT — Art. 114, I, CF); fase de execução = bens diplomáticos são impenhoráveis (imunidade de execução, salvo renúncia ou bens não afetos à missão)."
      }
    ],
    "jurisprudence": "STF Tema 944",
    "professorTip": "Estado Estrangeiro na JT: Processo de Conhecimento = PODE julgar (ato de gestão)! Execução = bens da embaixada têm IMUNIDADE de penhora!"
  },
  {
    "id": "mig_ptra_056",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Conflito de Competência na Justiça do Trabalho (Art. 808 CLT e Súmulas 180 e 420 TST)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Surgem dois conflitos negativos de competência: (1) entre duas Varas do Trabalho vinculadas a TRTs DISTINTOS (TRT-2/SP e TRT-15/Campinas); e (2) entre uma Vara do Trabalho e um Juiz de Direito estadual investido de jurisdição trabalhista dentro da mesma região, ou entre uma Vara do Trabalho e uma Vara Cível comum. Quem julga cada conflito?",
    "options": [
      {
        "letter": "A",
        "text": "Não existe conflito de competência quando uma Vara do Trabalho e outra Vara do Trabalho de TRTs diferentes se declaram incompetentes — quem julga é o STJ."
      },
      {
        "letter": "B",
        "text": "Pela Súmula 420 do TST, cabe suscitar conflito de competência entre uma Vara do Trabalho e o próprio TRT hierarquicamente superior a ela."
      },
      {
        "letter": "C",
        "text": "Pela Súmula 420 do TST e Art. 808 da CLT: (1) conflito entre Varas do Trabalho vinculadas a TRTs DISTINTOS (ou entre dois TRTs) é julgado pelo TRIBUNAL SUPERIOR DO TRABALHO (TST — Art. 808, \"b\", CLT); (2) conflito entre Varas do Trabalho do MESMO TRT é julgado pelo respectivo TRT (\"a\"); (3) conflito entre Juiz de Direito investido de jurisdição trabalhista (Art. 112 CF) e Vara do Trabalho dentro da jurisdição do mesmo TRT é julgado pelo TRT (Súmula 180 TST: o TST já foi substituído pelo TRT ou STJ? Atenção: pela Súmula 180 STJ, conflito entre Juiz Estadual investido de jurisdição trabalhista e Junta/Vara do Trabalho compete ao TRT apenas se sujeito ao mesmo TRT? Não — na Súmula 180 do STJ, compete ao TRT dirimir conflito entre Juiz de Direito no exercício da jurisdição trabalhista e Vara do Trabalho, OU se de tribunais diferentes vai ao STJ pelo Art. 105, I, \"d\", CF! Quando o conflito envolve Vara Cível comum (matéria cível) vs Vara do Trabalho (matéria trabalhista), quem julga é o STJ pela CF Art. 105, I, \"d\")!"
      },
      {
        "letter": "D",
        "text": "O conflito de competência trabalhista tem efeito meramente devolutivo e nunca permite designação de juízo provisório para medidas urgentes."
      }
    ],
    "correctAnswer": "C",
    "justification": "Conflito de Competência (Art. 808 CLT + Súmula 420 TST + Súmula 180 STJ): Varas do mesmo TRT = TRT; Varas de TRTs distintos ou entre TRTs = TST; Vara do Trabalho vs Vara Cível/Federal = STJ (Art. 105, I, \"d\", CF). Súmula 420 TST = não há conflito entre TRT e Vara vinculada a ele.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Conflito entre órgãos AMBOS da Justiça do Trabalho (ex.: TRT-2 vs TRT-15 ou Varas de TRTs distintos) é julgado pelo TST (Art. 808, \"b\", CLT)! O STJ julga apenas conflito entre órgãos vinculados a ramos/tribunais diversos (ex.: Vara Cível vs Vara do Trabalho — Art. 105, I, \"d\", CF)!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 420 do TST, NÃO se configura conflito de competência entre TRT e Vara do Trabalho a ele vinculada (pois há subordinação hierárquico-jurisdicional)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 955 do CPC aplicado subsidiariamente, o relator designará um dos juízos para resolver, em caráter provisório, as medidas urgentes durante o conflito!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 803 a 812 da CLT, Art. 105, I, \"d\", CF e Súmulas 180 e 420 do TST",
        "textSnippet": "Conflito de Competência (Art. 808 CLT + Súmula 420 TST + Súmula 180 STJ): Varas do mesmo TRT = TRT; Varas de TRTs distintos ou entre TRTs = TST; Vara do Trabalho vs Vara Cível/Federal = STJ (Art. 105, I, \"d\", CF). Súmula 420 TST = não há conflito entre TRT e Vara vinculada a ele."
      }
    ],
    "jurisprudence": "Súmula 420 TST e Súmula 180 STJ",
    "professorTip": "Conflito: mesmo TRT = TRT | TRTs diferentes = TST | JT x Justiça Comum/Federal = STJ! NÃO há conflito entre TRT e Vara dele (Súmula 420)!"
  },
  {
    "id": "mig_ptra_057",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Substituição do Depósito Recursal por Seguro Garantia Judicial (Ato Conjunto TST/CSJT 1/2019)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa condenada em R$ 30.000,00 interpõe Recurso Ordinário apresentando apólice de Seguro Garantia Judicial no lugar do depósito recursal em dinheiro. Para que o seguro garantia judicial seja aceito sem deserção, quais exigências objetivas devem constar na apólice segundo a regulamentação do TST?",
    "options": [
      {
        "letter": "A",
        "text": "O seguro garantia judicial para substituir depósito recursal deve ser contratado exatamente pelo valor nominal do depósito recursal sem qualquer acréscimo."
      },
      {
        "letter": "B",
        "text": "A substituição do depósito recursal por seguro garantia judicial só é admitida se o empregado reclamante concordar expressamente."
      },
      {
        "letter": "C",
        "text": "Nos termos do Art. 899, § 11, da CLT e do Ato Conjunto TST.CSJT.CGJT nº 1/2019 (com redação alterada pelo Ato Conjunto nº 1/2020 após decisão do CNJ!), a apólice de seguro garantia judicial em substituição ao depósito recursal deve observar: (1) acréscimo de no mínimo 30% sobre o valor do depósito recursal legal (Art. 3º, II); (2) vigência mínima de 3 anos (com cláusula de renovação automática enquanto durar o risco); (3) comprovação do registro da apólice na SUSEP e certidão de regularidade da sociedade seguradora junto à SUSEP (se faltar documentação regular/vigência ou houver irregularidade sanável na apólice apresentada tempestivamente, o relator deve intimar para regularização — OJ 140 / jurisprudência atual TST)!"
      },
      {
        "letter": "D",
        "text": "O seguro garantia judicial pode ser utilizado apenas na fase de execução trabalhista, sendo vedado na fase recursal."
      }
    ],
    "correctAnswer": "C",
    "justification": "Seguro Garantia Judicial (Art. 899, § 11, CLT + Ato Conjunto TST/CSJT 1/2019): substitui depósito recursal e garante execução; exige acréscimo de 30% (Art. 835, § 2º CPC), vigência mínima de 3 anos (ou indeterminada/renovação automática) e registro/regularidade SUSEP.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Ato Conjunto TST/CSJT nº 1/2019 exige acréscimo mínimo de 30% sobre o valor do débito ou do depósito recursal (tal qual o Art. 835, § 2º, do CPC)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 899, § 11, CLT e jurisprudência do TST, trata-se de direito potestativo processual do recorrente/executado (independentemente de concordância da parte contrária), desde que preenchidos os requisitos objetivos da apólice!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 899, § 11, da CLT autoriza expressamente que o depósito recursal seja substituído por fiança bancária ou seguro garantia judicial (inclusive depósitos já efetuados nos autos podem ser substituídos, conforme decidiu o CNJ no PCA 0009820-09.2019)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 899, § 11, da CLT e Ato Conjunto TST.CSJT.CGJT nº 1/2019",
        "textSnippet": "Seguro Garantia Judicial (Art. 899, § 11, CLT + Ato Conjunto TST/CSJT 1/2019): substitui depósito recursal e garante execução; exige acréscimo de 30% (Art. 835, § 2º CPC), vigência mínima de 3 anos (ou indeterminada/renovação automática) e registro/regularidade SUSEP."
      }
    ],
    "professorTip": "Seguro Garantia no Depósito Recursal (899, § 11): exige +30% sobre o valor + vigência >= 3 anos + registro SUSEP! Independe da anuência do empregado!"
  },
  {
    "id": "mig_ptra_058",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Representação Processual, Mandato Tácito e Irregularidade de Procuração (Súmula 383 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Advogado interpõe Recurso Ordinário em nome da empresa reclamada sem procuração nos autos (e sem ter comparecido à audiência acompanhando a parte para configurar mandato tácito), nem alega urgência do Art. 104 CPC. O relator deve extinguir/não conhecer o recurso imediatamente de plano ou abrir prazo para regularização?",
    "options": [
      {
        "letter": "A",
        "text": "A simples menção ao nome do advogado na petição inicial ou recurso sem procuração nos autos configura mandato tácito no Processo do Trabalho."
      },
      {
        "letter": "B",
        "text": "Na Súmula 383 do TST, o advogado que apresenta procuração com prazo de validade vencido sofre o não conhecimento imediato do recurso sem chance de saneamento."
      },
      {
        "letter": "C",
        "text": "Pela Súmula 383, I e II, do TST (adaptada ao CPC/2015!): é INADMISSÍVEL recurso firmado por advogado sem procuração juntada aos autos até o momento da sua interposição, salvo mandato tácito (OJ 286 SDI-1 — presença do advogado junto com a parte/preposto na ata de audiência!) — CONTUDO, verificada a irregularidade de representação na FASE RECURSAL (em procuração JÁ existente nos autos com defeito formal, como falta de assinatura ou prazo vencido — item II!), o relator designará prazo de 5 DIAS para que seja sanado o vício (Art. 76, § 2º, CPC); atenção: na AUSÊNCIA TOTAL de procuração e sem mandato tácito nem urgência do Art. 104 CPC, o item I da Súmula 383 não admite prazo saneador!"
      },
      {
        "letter": "D",
        "text": "O advogado com mandato tácito pode substabelecer normalmente seus poderes a outro colega advogado sem procuração expressa."
      }
    ],
    "correctAnswer": "C",
    "justification": "Representação na JT: Mandato tácito (Art. 791, § 3º CLT / OJ 286 SDI-1) = presença com parte/preposto em ata de audiência (NÃO permite substabelecer — OJ 200 SDI-1). Súmula 383 TST: (I) sem procuração nem mandato tácito = inadmissível recurso (salvo urgência Art. 104 CPC em 15d); (II) vício em procuração já nos autos = prazo de 5 dias p/ sanar.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela OJ 286 da SDI-1 do TST e Art. 791, § 3º, da CLT, o MANDATO TÁCITO (apud acta) configura-se exclusivamente pelo comparecimento do advogado acompanhado da parte/preposto à AUDIÊNCIA, registrado em ata!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 383, II, do TST, verificada a irregularidade em procuração ou substabelecimento já constante dos autos (defeito formal, prazo expirado, falta de poderes para substabelecer), o juiz/relator DEVE conceder prazo de 5 DIAS para sanar o vício antes de não conhecer!"
      },
      {
        "letter": "D",
        "explanation": "Pela OJ 200 da SDI-1 do TST, é INVÁLIDO o substabelecimento de advogado investido de mandato TÁCITO (o mandato tácito é personalíssimo da audiência e não confere poderes para substabelecer)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 791, § 3º, da CLT, Art. 104 CPC e Súmula 383 do TST",
        "textSnippet": "Representação na JT: Mandato tácito (Art. 791, § 3º CLT / OJ 286 SDI-1) = presença com parte/preposto em ata de audiência (NÃO permite substabelecer — OJ 200 SDI-1). Súmula 383 TST: (I) sem procuração nem mandato tácito = inadmissível recurso (salvo urgência Art. 104 CPC em 15d); (II) vício em procuração já nos autos = prazo de 5 dias p/ sanar."
      }
    ],
    "jurisprudence": "Súmula 383 e OJs 200 e 286 SDI-1 TST",
    "professorTip": "Mandato Tácito = presença com a parte na ata de audiência (NÃO pode substabelecer — OJ 200)! Defeito em procuração existente = sana em 5 dias (Súmula 383, II)!"
  },
  {
    "id": "mig_ptra_059",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Arquivamento e Perempção Trabalhista (Arts. 731 e 732 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado apresenta reclamação trabalhista verbal no setor de distribuição da Vara do Trabalho em 10 de abril e deixa de comparecer ao cartório no prazo legal para reduzi-la a termo; em outra hipótese, um trabalhador ajuíza reclamação trabalhista, falta injustificadamente à audiência inaugural (1º arquivamento), propõe nova reclamação idêntica e falta novamente à 1ª audiência (2º arquivamento). Qual a sanção processual?",
    "options": [
      {
        "letter": "A",
        "text": "A perempção trabalhista ocorre somente após 3 arquivamentos seguidos e extingue definitivamente o direito de ação para sempre."
      },
      {
        "letter": "B",
        "text": "O prazo para o reclamante que apresentou reclamação verbal comparecer à Vara do Trabalho para reduzi-la a termo é de 15 dias úteis."
      },
      {
        "letter": "C",
        "text": "Em ambos os casos incide a PEREMPÇÃO TEMPORÁRIA TRABALHISTA de 6 (SEIS) MESES (Arts. 731 e 732 da CLT)! Aquele que, tendo apresentado ao distribuidor reclamação verbal, NÃO se apresentar no prazo de 5 DIAS à Vara para fazê-la tomar por termo incorrerá na pena de perda, pelo prazo de 6 MESES, do direito de reclamar perante a Justiça do Trabalho (Art. 731 CLT); na MESMA pena incorre o reclamante que, por 2 (DUAS) VEZES SEGUIDAS, der causa ao arquivamento por ausência injustificada à audiência inaugural (Art. 732 CLT — atenção: a perempção trabalhista atinge apenas o direito de AÇÃO por 6 meses, não extingue o direito material definitivo como no CPC após 3 abandonos)!"
      },
      {
        "letter": "D",
        "text": "Durante os 6 meses da perempção trabalhista do Art. 732 CLT, suspende-se automaticamente o curso do prazo prescricional de 2 anos do empregado."
      }
    ],
    "correctAnswer": "C",
    "justification": "Perempção na CLT: (1) Reclamação verbal não reduzida a termo em 5 DIAS = perda por 6 meses do direito de reclamar (Art. 731); (2) 2 arquivamentos seguidos por ausência do autor na audiência inaugural = perda por 6 meses do direito de reclamar (Art. 732). Não é definitiva como no CPC.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferente do Art. 486, § 3º, do CPC (3 abandonos -> extinção definitiva do direito de propor nova ação), na CLT a perempção ocorre com 2 ARQUIVAMENTOS SEGUIDOS (Art. 732) e suspende o direito de reclamar apenas por 6 MESES!"
      },
      {
        "letter": "B",
        "explanation": "O prazo exato do Art. 731 c/c Art. 786, parágrafo único, da CLT para comparecer e reduzir a reclamação verbal a termo é de 5 DIAS (sob pena de perempção por 6 meses)!"
      },
      {
        "letter": "D",
        "explanation": "ATENÇÃO! A perempção temporária de 6 meses NÃO suspende nem interrompe a prescrição bienal ou quinquenal — e se o empregado ajuizar durante os 6 meses e o processo extinguir-se sem mérito, continua correndo a prescrição normal após a primeira interrupção!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 731 e 732 da CLT",
        "textSnippet": "Perempção na CLT: (1) Reclamação verbal não reduzida a termo em 5 DIAS = perda por 6 meses do direito de reclamar (Art. 731); (2) 2 arquivamentos seguidos por ausência do autor na audiência inaugural = perda por 6 meses do direito de reclamar (Art. 732). Não é definitiva como no CPC."
      }
    ],
    "professorTip": "Perempção na CLT = 6 MESES sem poder reclamar! Ocorre em: (1) reclamação verbal não tomada a termo em 5 dias (Art. 731); (2) 2 arquivamentos SEGUIDOS por falta à 1ª audiência (Art. 732)!"
  },
  {
    "id": "mig_ptra_060",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Prescrição do FGTS - Regra e Modulação do STF (ARE 709.212 / Súmula 362 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado dispensado em 2024 ajuíza reclamação trabalhista cobrando depósitos de FGTS não recolhidos pelo empregador ao longo de todo o contrato iniciado em 2010. Qual o prazo prescricional aplicável ao FGTS à luz da Súmula 362 do TST e do STF (ARE 709.212)?",
    "options": [
      {
        "letter": "A",
        "text": "A cobrança de depósitos não realizados de FGTS continua submetida à prescrição trintenária (30 anos) em qualquer contrato iniciado antes de 2014."
      },
      {
        "letter": "B",
        "text": "Aplica-se a prescrição QUINQUENAL (5 anos retroativos ao ajuizamento, respeitado o limite bienal após o término do contrato)! Pela Súmula 362 do TST (após o julgamento pelo STF do ARE 709.212 em 13/11/2014, que declarou inconstitucional a antiga prescrição trintenária): (I) para os casos em que a ciência da lesão ocorreu a partir de 13/11/2014, aplica-se diretamente a prescrição de 5 ANOS (até 2 anos pós-extinção); (II) para os casos em que o prazo prescricional já estava em curso em 13/11/2014, aplica-se o que se consumar PRIMEIRO: 30 anos contados do termo inicial OU 5 anos contados a partir de 13/11/2014 (logo, a partir de 13/11/2019 TODA lesão antiga ao FGTS passou a estar submetida definitivamente aos 5 ANOS!) — lembrando que FGTS reflexo de verba principal prescrita segue a sorte do principal (Súmula 206 TST)!"
      },
      {
        "letter": "C",
        "text": "Mesmo quando a verba trabalhista principal (ex.: horas extras) já está prescrita, o FGTS incidente sobre essa parcela prescrita ainda pode ser cobrado autonomamente."
      },
      {
        "letter": "D",
        "text": "A ausência de recolhimento do FGTS durante o contrato gera prescrição de 2 anos contados mês a mês de cada depósito omitido mesmo com o contrato ativo."
      }
    ],
    "correctAnswer": "B",
    "justification": "FGTS e Prescrição (Súmula 362 TST / STF ARE 709.212): hoje vige a prescrição QUINQUENAL (observado o biênio pós-término), pois o limite transitório de 5 anos a contar de 13/11/2014 encerrou-se em 13/11/2019. Parcela principal prescrita = FGTS reflexo também prescrito (Súmula 206 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela modulação da Súmula 362, II, TST (ARE 709.212), o prazo de 5 anos contado de 13/11/2014 venceu em 13/11/2019 — portanto, em ações propostas após 2019, mesmo para contratos antigos, aplica-se apenas a prescrição QUINQUENAL!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 206 do TST, a prescrição da pretensão relativa às parcelas remuneratórias alcança o respectivo recolhimento da contribuição para o FGTS (acessório segue o principal)!"
      },
      {
        "letter": "D",
        "explanation": "Durante o contrato de trabalho ativo aplica-se a prescrição quinquenal (5 anos); os 2 anos só se contam após a EXTINÇÃO do contrato de trabalho (Art. 7º, XXIX, CF)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 7º, XXIX, CF e Súmula 362 do TST (STF ARE 709.212)",
        "textSnippet": "FGTS e Prescrição (Súmula 362 TST / STF ARE 709.212): hoje vige a prescrição QUINQUENAL (observado o biênio pós-término), pois o limite transitório de 5 anos a contar de 13/11/2014 encerrou-se em 13/11/2019. Parcela principal prescrita = FGTS reflexo também prescrito (Súmula 206 TST)."
      }
    ],
    "jurisprudence": "Súmulas 206 e 362 do TST e STF ARE 709.212",
    "professorTip": "FGTS hoje = Prescrição de 5 ANOS (até 2 anos da saída — Súmula 362 TST)! Verba principal prescrita = FGTS reflexo também prescreve (Súmula 206 TST)!"
  },
  {
    "id": "mig_ptra_061",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Prova Pericial em Insalubridade e Periculosidade - Desativação do Local (Art. 195 CLT e OJ 278)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado pleiteia adicional de insalubridade em juízo, mas antes da realização da perícia técnica o estabelecimento onde trabalhava foi totalmente demolido/desativado (tornando impossível a perícia no local). Além disso, o perito oficial apura insalubridade por agente químico diverso daquele apontado na petição inicial (ruído). Como julga a Justiça do Trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "Fechada a empresa ou demolido o estabelecimento antes da perícia, o pedido de adicional de insalubridade deve ser automaticamente julgado improcedente por impossibilidade da prova pericial obrigatória."
      },
      {
        "letter": "B",
        "text": "Nos termos da OJ 278 da SDI-1 do TST: a realização de perícia é obrigatória para verificação de insalubridade (Art. 195, § 2º, CLT), MAS quando NÃO for possível sua realização — como em caso de FECHAMENTO ou desativação do local de trabalho — poderá o julgador utilizar-se de OUTROS MEIOS DE PROVA (prova testemunhal, PPRA/LTCAT, laudos similares emprestados)! E pela Súmula 293 do TST, a verificação mediante perícia de prestação de serviços em condições nocivas, considerado AGENTE INSALUBRE DIVERSO do apontado na inicial, NÃO prejudica o pedido de adicional de insalubridade!"
      },
      {
        "letter": "C",
        "text": "Se o reclamante pediu adicional de insalubridade por ruído e o perito constatou insalubridade apenas por agente químico, o juiz não pode deferir o adicional sob pena de julgamento extra petita."
      },
      {
        "letter": "D",
        "text": "O juiz do trabalho fica absolutamente vinculado à conclusão do laudo pericial médico ou de engenharia, não podendo decidir contrariamente a ele."
      }
    ],
    "correctAnswer": "B",
    "justification": "Perícia de Insalubridade/Periculosidade (Art. 195, § 2º CLT): obrigatória em regra; impossível por fechamento do local -> outros meios de prova (OJ 278 SDI-1); agente diverso do da inicial -> não prejudica o pedido (Súmula 293 TST); pagamento espontâneo habitual pelo empregador dispensa perícia (Súmula 453 TST); juiz não fica adstrito ao laudo (Art. 479 CPC).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela OJ 278 da SDI-1 do TST, sendo impossível a perícia por fechamento/desativação do local, o juiz utiliza outros meios de prova (documental, testemunhal, laudos ambientais)!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 293 do TST, a constatação pericial de agente insalubre DIVERSO do alegado na inicial NÃO prejudica o pedido (não há julgamento extra petita)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 479 do CPC (princípio do livre convencimento motivado / persuasão racional), o juiz NÃO está adstrito ao laudo pericial, podendo formar sua convicção com outros elementos provados nos autos, desde que fundamente (Súmula 453 TST sobre pagamento espontâneo de periculosidade também dispensa perícia)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 195, § 2º, da CLT, Art. 464 CPC e Súmulas 293, 448 e OJ 278 SDI-1 TST",
        "textSnippet": "Perícia de Insalubridade/Periculosidade (Art. 195, § 2º CLT): obrigatória em regra; impossível por fechamento do local -> outros meios de prova (OJ 278 SDI-1); agente diverso do da inicial -> não prejudica o pedido (Súmula 293 TST); pagamento espontâneo habitual pelo empregador dispensa perícia (Súmula 453 TST); juiz não fica adstrito ao laudo (Art. 479 CPC)."
      }
    ],
    "jurisprudence": "Súmulas 293 e 453 e OJ 278 SDI-1 TST",
    "professorTip": "Empresa fechou antes da perícia = usa outras provas (OJ 278)! Perito achou agente insalubre DIVERSO do pedido = NÃO prejudica e ganha o adicional (Súmula 293)!"
  },
  {
    "id": "mig_ptra_062",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Processual do Trabalho",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Prova Emprestada e Provas Digitais no Processo do Trabalho",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Em reclamação trabalhista contra grande rede industrial, o reclamante requer a utilização de laudo pericial ou ata de audiência produzida em processo trabalhista anterior movido por outro ex-colega contra a mesma empresa (sobre idêntico setor e mesma época), sem concordância da reclamada. O juiz do trabalho pode admitir essa prova emprestada mesmo sem a concordância de uma das partes?",
    "options": [
      {
        "letter": "A",
        "text": "A prova emprestada no Processo do Trabalho somente pode ser admitida se houver concordância expressa de ambas as partes envolvidas."
      },
      {
        "letter": "B",
        "text": "SIM! Pelo Art. 372 do CPC (aplicável subsidiariamente via Art. 769 CLT) e jurisprudência pacífica da SDI-1 do TST, o juiz poderá admitir a utilização de PROVA EMPRESTADA de outro processo, atribuindo-lhe o valor que considerar adequado, OBSERVADO O CONTRADITÓRIO! A jurisprudência trabalhista dispensa a concordância da parte adversa quando esta PARTICIPOU da produção da prova no processo originário (exercendo contraditório na origem) e tem oportunidade de manifestar-se sobre ela nos novos autos!"
      },
      {
        "letter": "C",
        "text": "A prova emprestada só é válida entre processos que tenham exatamente o mesmo autor e o mesmo réu."
      },
      {
        "letter": "D",
        "text": "Mensagens de WhatsApp, registros de geolocalização ou e-mails corporativos são provas ilícitas na Justiça do Trabalho por violarem sempre a intimidade."
      }
    ],
    "correctAnswer": "B",
    "justification": "Prova Emprestada (Art. 372 CPC + TST): admissível mesmo sem anuência da parte contrária, desde que garantido o contraditório (e preferencialmente participação da parte contra quem é usada na origem). Provas digitais lícitas (WhatsApp do próprio interlocutor, e-mail corporativo monitorado com ciência) são admitidas.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Tanto o Art. 372 do CPC quanto a jurisprudência consolidada do TST exigem apenas a observância do CONTRADITÓRIO (especialmente se a parte contrária já integrou o processo de origem), NÃO condicionando a admissão à concordância prévia do réu!"
      },
      {
        "letter": "C",
        "explanation": "Não é exigida identidade total de partes: basta que a parte contra quem a prova será utilizada tenha participado do contraditório na sua produção originária e haja identidade fática relevante!"
      },
      {
        "letter": "D",
        "explanation": "Provas digitais obtidas licitamente por um dos interlocutores da conversa ou por ferramentas corporativas (desde que com ciência prévia sobre monitoramento do e-mail corporativo e dentro da proporcionalidade, sem invasão ilícita de dispositivo privado!) são plenamente válidas como prova documental/digital pelo Art. 369 CPC!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 372 do CPC, Art. 769 da CLT e Jurisprudência da SDI-1 TST",
        "textSnippet": "Prova Emprestada (Art. 372 CPC + TST): admissível mesmo sem anuência da parte contrária, desde que garantido o contraditório (e preferencialmente participação da parte contra quem é usada na origem). Provas digitais lícitas (WhatsApp do próprio interlocutor, e-mail corporativo monitorado com ciência) são admitidas."
      }
    ],
    "professorTip": "Prova emprestada (Art. 372 CPC): PODE ser usada mesmo SEM concordância da outra parte, desde que observado o CONTRADITÓRIO!"
  },
  {
    "id": "mig_ptra_063",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Ação de Consignação em Pagamento na Justiça do Trabalho",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado é dispensado sem justa causa (ou falece deixando vários possíveis dependentes/herdeiros controvertidos) e recusa-se a comparecer para receber as verbas rescisórias ou assinar a quitação, aproximando-se o fim do prazo de 10 dias do Art. 477, § 6º, da CLT. Que ação trabalhista o empregador deve ajuizar e em qual prazo para se eximir da multa do Art. 477, § 8º?",
    "options": [
      {
        "letter": "A",
        "text": "Não cabe ação de consignação em pagamento na Justiça do Trabalho por incompatibilidade procedimental com a CLT."
      },
      {
        "letter": "B",
        "text": "O empregador deve ajuizar AÇÃO DE CONSIGNAÇÃO EM PAGAMENTO perante a Vara do Trabalho competente (Arts. 539–549 do CPC c/c Art. 769 CLT — rito especial compatível com a JT!), requerendo autorização para depósito judicial do valor rescisório incontroverso DENTRO DO PRAZO DE 10 DIAS contados do término do contrato (Art. 477, § 6º, CLT)! Com o ajuizamento e depósito tempestivo nos 10 dias, o empregador elide a mora e afasta a multa de 1 salário do Art. 477, § 8º, CLT! (Se houver dúvida sobre quem legitimamente deve receber após o falecimento — Art. 547 CPC c/c Lei 6.858/80 — cita os possíveis dependentes habilitados no INSS!)."
      },
      {
        "letter": "C",
        "text": "Na ação de consignação em pagamento por falecimento do empregado, os valores do FGTS e saldo salarial seguem exclusivamente a ordem de inventário civil do cônjuge separado de fato."
      },
      {
        "letter": "D",
        "text": "Se o empregador ajuizar a consignação no 9º dia após a demissão, mas só efetuar o depósito judicial 15 dias depois, ainda assim afasta a multa do Art. 477, § 8º."
      }
    ],
    "correctAnswer": "B",
    "justification": "Consignação em Pagamento na JT (Arts. 539–549 CPC): cabe em caso de recusa injustificada, paradeiro desconhecido ou dúvida sobre quem receber (morte -> dependentes habilitados no INSS pela Lei 6.858/80); propositura + depósito dentro dos 10 dias afasta a multa do Art. 477, § 8º CLT.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A ação de consignação em pagamento é amplamente admitida na Justiça do Trabalho (inclusive com depósito bancário extrajudicial quando possível ou judicial direto nos 10 dias do Art. 477, § 6º CLT)!"
      },
      {
        "letter": "C",
        "explanation": "Pela Lei nº 6.858/1980, valores devidos pelos empregadores não recebidos em vida pelo trabalhador falecido são pagos em quotas iguais aos DEPENDENTES HABILITADOS PERANTE A PREVIDÊNCIA SOCIAL (e só na sua falta aos sucessores previstos na lei civil, independentemente de inventário)!"
      },
      {
        "letter": "D",
        "explanation": "Para afastar a mora do Art. 477, § 6º/§ 8º, CLT, a jurisprudência exige que tanto a propositura da consignatória quanto a efetiva disponibilização/depósito do valor ocorram dentro do prazo de 10 dias (salvo atraso imputável exclusivamente ao mecanismo judiciário para emissão da guia)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 539 a 549 do CPC e Art. 769 CLT",
        "textSnippet": "Consignação em Pagamento na JT (Arts. 539–549 CPC): cabe em caso de recusa injustificada, paradeiro desconhecido ou dúvida sobre quem receber (morte -> dependentes habilitados no INSS pela Lei 6.858/80); propositura + depósito dentro dos 10 dias afasta a multa do Art. 477, § 8º CLT."
      }
    ],
    "professorTip": "Consignação em Pagamento na JT: cabe na recusa ou dúvida (morte -> dependentes INSS pela Lei 6.858/80)! Propor e depositar em até 10 dias livra da multa do Art. 477, § 8º!"
  },
  {
    "id": "mig_ptra_064",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Processual do Trabalho",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Ação Monitória na Justiça do Trabalho",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Ex-empregado possui documento escrito assinado pelo empregador reconhecendo expressamente uma dívida trabalhista líquida de salários atrasados, porém sem eficácia de título executivo trabalhista do Art. 876 da CLT (não foi firmado na CCP nem em acordo judicial). Pode o ex-empregado propor Ação Monitória na Vara do Trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "A Ação Monitória é vedada na Justiça do Trabalho porque o único título de cobrança documental trabalhista é a reclamação ordinária."
      },
      {
        "letter": "B",
        "text": "SIM! A Ação Monitória (Arts. 700–702 do CPC) é compatível com o Processo do Trabalho (admitida pela jurisprudência do TST e prevista nos termos gerais da IN 39/16 sobre ritos compatíveis), permitindo ao credor munido de prova escrita sem eficácia de título executivo pleitear a expedição de mandado monitório para pagamento em 15 dias (ou oferecimento de embargos monitórios nos próprios autos sem necessidade de garantir o juízo)! Se o réu não pagar nem embargar, constitui-se de pleno direito o título executivo judicial!"
      },
      {
        "letter": "C",
        "text": "Para oferecer Embargos Monitórios na Justiça do Trabalho, o réu é obrigado a depositar integralmente o valor cobrado como garantia do juízo."
      },
      {
        "letter": "D",
        "text": "A Ação Monitória trabalhista não pode ser ajuizada contra a Fazenda Pública."
      }
    ],
    "correctAnswer": "B",
    "justification": "Ação Monitória na JT (Arts. 700–702 CPC): cabível para obrigação trabalhista com prova escrita sem eficácia de título executivo (Art. 876 CLT); cabe inclusive contra Fazenda Pública (Art. 700, § 6º CPC / Súmula 339 STJ); embargos monitórios em 15 dias sem garantia do juízo.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O TST admite o cabimento de Ação Monitória na Justiça do Trabalho quando fundada em crédito decorrente de relação de trabalho comprovado por prova escrita sem força executiva no Art. 876 CLT (inclusive contra a Fazenda Pública — Súmula 339 STJ)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 702 do CPC, os embargos à ação monitória opostos no prazo de 15 dias INDEPENDEM DE PRÉVIA SEGURANÇA DO JUÍZO (suspenderão apenas a eficácia da decisão inicial até julgamento)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 339 do STJ e Art. 700, § 6º, do CPC, é plenamente CABÍVEL ação monitória contra a Fazenda Pública (observando-se o rito de precatório/RPV caso constituído o título executivo)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 700 a 702 do CPC e IN 39/2016 do TST",
        "textSnippet": "Ação Monitória na JT (Arts. 700–702 CPC): cabível para obrigação trabalhista com prova escrita sem eficácia de título executivo (Art. 876 CLT); cabe inclusive contra Fazenda Pública (Art. 700, § 6º CPC / Súmula 339 STJ); embargos monitórios em 15 dias sem garantia do juízo."
      }
    ],
    "jurisprudence": "Súmula nº 339 do STJ",
    "professorTip": "Ação Monitória CABE na JT (prova escrita sem título do Art. 876)! Cabe até contra Fazenda Pública! Embargos monitórios (15d) NÃO exigem garantia do juízo!"
  },
  {
    "id": "mig_ptra_065",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Ação Anulatória de Cláusula de Norma Coletiva - Competência e Legitimidade",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Convenção Coletiva de Trabalho firmada entre sindicato profissional e sindicato patronal contém cláusula que suprime direito absolutamente indisponível previsto no Art. 611-B da CLT (ex.: isenção do pagamento de FGTS). Qual a ação específica para invalidar abstratamente essa cláusula, quem tem legitimidade ativa e qual o órgão competente?",
    "options": [
      {
        "letter": "A",
        "text": "A Ação Anulatória de cláusula de Convenção Coletiva de Trabalho é proposta perante a Vara do Trabalho de 1º grau pelo empregado individualmente."
      },
      {
        "letter": "B",
        "text": "A medida cabível para desconstituir em abstrato cláusula ilegal de ACT ou CCT é a AÇÃO ANULATÓRIA DE CLÁUSULA CONVENCIONAL, de competência ORIGINÁRIA do TRIBUNAL REGIONAL DO TRABALHO (TRT — se o instrumento tiver abrangência regional) ou da SDC do TST (se tiver abrangência nacional/inter-regional)! Pelo Art. 83, IV, da LC 75/93, o MINISTÉRIO PÚBLICO DO TRABALHO possui legitimidade ativa para propor Ação Anulatória (além dos próprios sindicatos signatários em caso de vício de vontade), exigindo-se a formação de litisconsórcio passivo necessário com AMBOS os sindicatos/empresas convenentes!"
      },
      {
        "letter": "C",
        "text": "Na Ação Anulatória proposta pelo MPT contra cláusula de CCT, basta citar apenas o sindicato patronal no polo passivo."
      },
      {
        "letter": "D",
        "text": "Da decisão definitiva proferida pelo TRT em Ação Anulatória originária cabe Recurso de Revista ao TST."
      }
    ],
    "correctAnswer": "B",
    "justification": "Ação Anulatória de Cláusula Coletiva: competência originária do TRT (ou SDC/TST se suprarregional); legitimidade do MPT (Art. 83, IV, LC 75/93) e signatários; litisconsórcio passivo necessário de todos os convenentes; recurso contra acórdão do TRT = Recurso Ordinário ao TST (Art. 895, II, CLT).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Atenção à competência funcional: o empregado individual só pode pedir nulidade incidental da cláusula em sua reclamação individual na Vara; já a AÇÃO ANULATÓRIA com efeitos erga omnes sobre a norma coletiva compete ORIGINARIAMENTE ao TRT (ou ao TST se nacional), tendo o MPT legitimidade pelo Art. 83, IV, LC 75/93!"
      },
      {
        "letter": "C",
        "explanation": "Pela jurisprudência pacífica da SDC do TST, na Ação Anulatória há LITISCONSÓRCIO PASSIVO NECESSÁRIO UNITÁRIO entre todos os entes signatários da norma coletiva (sindicato dos empregados E sindicato patronal/empresa)!"
      },
      {
        "letter": "D",
        "explanation": "Das decisões definitivas dos TRTs em processos de sua competência ORIGINÁRIA (como Ação Anulatória, Dissídio Coletivo, Ação Rescisória e MS), cabe RECURSO ORDINÁRIO para o TST (8 dias úteis — Art. 895, II, CLT)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 83, IV, da LC nº 75/1993 e OJ 130 / SDC TST",
        "textSnippet": "Ação Anulatória de Cláusula Coletiva: competência originária do TRT (ou SDC/TST se suprarregional); legitimidade do MPT (Art. 83, IV, LC 75/93) e signatários; litisconsórcio passivo necessário de todos os convenentes; recurso contra acórdão do TRT = Recurso Ordinário ao TST (Art. 895, II, CLT)."
      }
    ],
    "professorTip": "Ação Anulatória de Cláusula Coletiva: julga o TRT originariamente (não a Vara)! MPT propõe contra TODOS os signatários (litisconsórcio necessário)! Recurso ao TST = RO (895, II)!"
  },
  {
    "id": "mig_ptra_066",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Mandado de Segurança na Justiça do Trabalho - Prazo, Competência e Súmula 415 TST",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Juiz do Trabalho da Vara profere decisão interlocutória ilegal bloqueando conta bancária de terceiro antes da sentença sem fundamento legal. A parte prejudicada impetra Mandado de Segurança no TRT no 125º dia após a ciência do ato, sem juntar previamente a prova documental pré-constituída (deixando para pedir prazo para emenda posterior). O MS deve ser admitido?",
    "options": [
      {
        "letter": "A",
        "text": "Se faltar documento indispensável na petição inicial de Mandado de Segurança na JT, o desembargador relator deve abrir prazo de 15 dias para emenda nos termos do Art. 321 do CPC."
      },
      {
        "letter": "B",
        "text": "NÃO! Por DOIS motivos peremptórios: (1) o prazo para impetração do Mandado de Segurança é DECADENCIAL de 120 DIAS contados da ciência do ato impugnado (Art. 23 da Lei 12.016/2009 — já consumada a decadência no 125º dia!); e (2) pela Súmula 415 do TST, exigir-se prova documental pré-constituída na impetração do Mandado de Segurança torna INAPLICÁVEL o prazo de emenda do Art. 321 do CPC (a petição inicial do MS sem a prova documental indispensável do ato coator é INDEFERIDA DE PLANO sem abertura de prazo para juntada posterior)!"
      },
      {
        "letter": "C",
        "text": "O prazo de 120 dias do Mandado de Segurança tem natureza prescricional e suspende-se com o pedido de reconsideração feito ao juiz."
      },
      {
        "letter": "D",
        "text": "Contra ato ilegal praticado por Juiz do Trabalho de Vara, a competência para julgar o Mandado de Segurança é de outra Vara do Trabalho ou da Justiça Federal."
      }
    ],
    "correctAnswer": "B",
    "justification": "Mandado de Segurança na JT (Lei 12.016/09 + Art. 114, IV, CF): competência do TRT contra ato de juiz de Vara (recurso do acórdão do TRT = RO em 8 dias para o TST); prazo DECADENCIAL de 120 dias (não interrompe com reconsideração — Súmula 430 STF); sem jus postulandi (Súmula 425 TST); falta de prova pré-constituída gera indeferimento liminar sem emenda (Súmula 415 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Súmula 415 do TST: exigindo o Mandado de Segurança prova documental pré-constituída, INAPLICÁVEL o Art. 321 do CPC quando verificada, na petição inicial do mandamus, a ausência de documento indispensável ou de sua autenticação!"
      },
      {
        "letter": "C",
        "explanation": "O prazo de 120 dias do Art. 23 da Lei 12.016/09 é DECADENCIAL (não se suspende nem se interrompe pelo pedido de reconsideração administrativo ou judicial — Súmula 430 STF)!"
      },
      {
        "letter": "D",
        "explanation": "A competência para julgar MS contra ato de Juiz do Trabalho de 1º grau pertence ao respectivo TRT (e do acórdão denegatório/concessivo do TRT no MS cabe Recurso Ordinário para a SDI-2 do TST — Art. 895, II, CLT)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 114, IV, CF, Lei nº 12.016/2009 e Súmulas 414, 415 e 418 do TST",
        "textSnippet": "Mandado de Segurança na JT (Lei 12.016/09 + Art. 114, IV, CF): competência do TRT contra ato de juiz de Vara (recurso do acórdão do TRT = RO em 8 dias para o TST); prazo DECADENCIAL de 120 dias (não interrompe com reconsideração — Súmula 430 STF); sem jus postulandi (Súmula 425 TST); falta de prova pré-constituída gera indeferimento liminar sem emenda (Súmula 415 TST)."
      }
    ],
    "jurisprudence": "Súmulas 415 e 425 TST e Súmula 430 STF",
    "professorTip": "MS na JT: prazo DECADENCIAL 120 dias | SEM jus postulandi (Súmula 425) | Faltou documento pré-constituído = INDEFERE direto SEM emenda (Súmula 415)! Recurso do acórdão do TRT = RO ao TST!"
  },
  {
    "id": "mig_ptra_067",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Habeas Corpus e Habeas Data na Justiça do Trabalho (Art. 114, IV, CF / SV 25 STF)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em processo de execução trabalhista, o juiz decreta a prisão civil do sócio nomeado depositário judicial de bem penhorado que não apresentou o bem em juízo; em outra situação, juiz retém passaporte de sócio devedor sem fundamentação atípica adequada (ou sindicato recusa acesso a dados pessoais do filiado). Qual a ação constitucional cabível e em qual Justiça?",
    "options": [
      {
        "letter": "A",
        "text": "A Súmula Vinculante nº 25 do STF veda apenas a prisão civil do depositário contratual em alienação fiduciária, mantendo válida a prisão do depositário judicial na execução trabalhista."
      },
      {
        "letter": "B",
        "text": "Compete à JUSTIÇA DO TRABALHO processar e julgar HABEAS CORPUS e HABEAS DATA quando o ato questionado envolver matéria sujeita à sua jurisdição (Art. 114, IV, da CF — ex.: prisão civil decretada por Juiz do Trabalho ou restrição ilegal de locomoção no processo trabalhista)! Quanto à prisão de depositário infiel, pela Súmula Vinculante nº 25 do STF, é ILÍCITA a prisão civil de depositário infiel, QUALQUER QUE SEJA A MODALIDADE DO DEPÓSITO (inclusive depositário judicial trabalhista!), devendo o TRT conceder a ordem de Habeas Corpus!"
      },
      {
        "letter": "C",
        "text": "Mesmo quando a ordem de prisão civil ou retenção de passaporte parte de Juiz do Trabalho, o Habeas Corpus deve ser impetrado no TRF ou no Tribunal de Justiça Estadual."
      },
      {
        "letter": "D",
        "text": "O Habeas Corpus trabalhista exige pagamento prévio de custas de 2% sobre o valor da execução e assistência obrigatória de advogado."
      }
    ],
    "correctAnswer": "B",
    "justification": "HC e HD na JT (Art. 114, IV, CF): julgados pelo TRT (ato de juiz do trabalho) ou TST (ato de TRT). Prisão de depositário infiel (inclusive judicial) é ilícita pela SV 25 STF (cabe HC!). HC é gratuito e independe de advogado.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula Vinculante nº 25 do STF é absoluta: \"É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito\" — abrange tanto o depósito contratual quanto o judicial na Justiça do Trabalho!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 114, IV, da CF (com redação da EC 45/2004), compete à própria JUSTIÇA DO TRABALHO (TRT contra ato de Juiz do Trabalho; TST contra ato de Desembargador do TRT) julgar HC e HD envolvendo atos sujeitos à sua jurisdição!"
      },
      {
        "letter": "D",
        "explanation": "O Habeas Corpus é ação constitucional GRATUITA (Art. 5º, LXXVII, CF) e dispensa advogado (qualquer pessoa pode impetrar em benefício próprio ou alheio)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 114, IV, da CF e Súmula Vinculante nº 25 do STF",
        "textSnippet": "HC e HD na JT (Art. 114, IV, CF): julgados pelo TRT (ato de juiz do trabalho) ou TST (ato de TRT). Prisão de depositário infiel (inclusive judicial) é ilícita pela SV 25 STF (cabe HC!). HC é gratuito e independe de advogado."
      }
    ],
    "jurisprudence": "Súmula Vinculante nº 25 do STF",
    "professorTip": "HC e HD contra ato de Juiz do Trabalho = julga o TRT (Art. 114, IV, CF)! Depositário infiel judicial trabalhista = NÃO pode ser preso (SV 25 STF)!"
  },
  {
    "id": "mig_ptra_068",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Julgamento Extra, Ultra e Citra Petita na Justiça do Trabalho",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em reclamação trabalhista, o autor pediu apenas adicional de periculosidade (sem pedir adicional de insalubridade) e horas extras limitadas ao valor indicado de R$ 10.000,00. O juiz condena a empresa a pagar adicional de insalubridade (não pedido!) ou condena a quantia de R$ 25.000,00 sem ressalva estimativa. Qual o vício da sentença e como o TRT atua no recurso?",
    "options": [
      {
        "letter": "A",
        "text": "Se a sentença trabalhista for ultra petita, o TRT deve obrigatoriamente anular todo o processo desde a audiência inaugural e devolver à Vara."
      },
      {
        "letter": "B",
        "text": "A condenação a parcela de natureza jurídica distinta NÃO pedida (deferir insalubridade quando só pediu periculosidade — diferente de deferir insalubridade por agente diverso na Súmula 293!) configura julgamento EXTRA PETITA (fora do pedido), enquanto conceder quantidade superior ao pedido certo/limitado configura julgamento ULTRA PETITA (Arts. 141 e 492 CPC)! No julgamento do Recurso Ordinário pelo TRT: se houver vício ULTRA petita ou EXTRA petita, o Tribunal NÃO anula toda a sentença se puder simplesmente DECOTAR (excluir) o excesso ou a parcela estranha; já no julgamento CITRA/INFRA PETITA (omissão de pedido), a parte deve opor Embargos de Declaração primeiro ou, em recurso, o TRT julga diretamente pela Súmula 393, II, TST (causa madura) sem retornar à Vara!"
      },
      {
        "letter": "C",
        "text": "O juiz do trabalho pode condenar ao pagamento de adicional de periculosidade quando o empregado pediu exclusivamente adicional de insalubridade e o perito afastou a insalubridade."
      },
      {
        "letter": "D",
        "text": "A condenação de ofício aos juros de mora, correção monetária e descontos previdenciários/fiscais sem pedido expresso na inicial configura julgamento extra petita."
      }
    ],
    "correctAnswer": "B",
    "justification": "Extra petita = fora do pedido (ex.: deu periculosidade quando só pediu insalubridade); Ultra petita = além do pedido; Citra petita = aquém do pedido (omissão -> ED ou teoria da causa madura no TRT, Súmula 393, II, TST). Juros e correção monetária são pedidos implícitos (Súmula 211 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo princípio da economia processual e celeridade trabalhista, nos vícios ULTRA e EXTRA petita o Tribunal limita-se a DECOTAR/EXTIRPAR a parcela excedente ou estranha ao pedido — sem necessidade de anular toda a sentença!"
      },
      {
        "letter": "C",
        "explanation": "Cuidado com a Súmula 293 vs Extra Petita! Pediu insalubridade por ruído e deu química = VÁLIDO (Súmula 293 TST); pediu APENAS insalubridade e juiz deu PERICULOSIDADE (sem pedido sucessivo/alternativo) = EXTRA PETITA (vedado pelos Arts. 141 e 492 CPC)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 211 do TST e Art. 322, § 1º, CPC (pedidos implícitos!), juros de mora e correção monetária compreendem-se no principal independentemente de pedido expresso na petição inicial!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 141 e 492 do CPC e Súmulas 293 e 393 do TST",
        "textSnippet": "Extra petita = fora do pedido (ex.: deu periculosidade quando só pediu insalubridade); Ultra petita = além do pedido; Citra petita = aquém do pedido (omissão -> ED ou teoria da causa madura no TRT, Súmula 393, II, TST). Juros e correção monetária são pedidos implícitos (Súmula 211 TST)."
      }
    ],
    "jurisprudence": "Súmulas 211, 293 e 393 do TST",
    "professorTip": "Ultra/Extra petita -> TRT só DECOTA o excesso (não anula tudo)! Pediu só insalubridade e juiz deu periculosidade = EXTRA PETITA! Juros/correção = pedidos implícitos (Súmula 211)!"
  },
  {
    "id": "mig_ptra_069",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso Extraordinário ao STF em Matéria Trabalhista (Prazo, Pressupostos e Súmula 735)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Acórdão da SDI-1 do TST decide questão trabalhista violando diretamente dispositivo da Constituição Federal, após esgotamento dos recursos internos na Justiça do Trabalho. Qual o recurso cabível ao STF, seu prazo, se exige depósito recursal trabalhista e se cabe contra decisão sobre tutela liminar?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo para interposição do Recurso Extraordinário contra acórdão do TST é de 8 dias úteis, seguindo o padrão recursal da CLT."
      },
      {
        "letter": "B",
        "text": "Cabe RECURSO EXTRAORDINÁRIO (RE) para o STF (Art. 102, III, CF), cujo prazo é de 15 DIAS ÚTEIS (prazo do CPC, NÃO de 8 dias da CLT! — Fazenda Pública/MPT têm 30 dias úteis!), exigindo demonstração de REPERCUSSÃO GERAL (Art. 1.035 CPC) e recolhimento de preparo segundo tabela do STF (NÃO exige depósito recursal trabalhista do Art. 899 CLT porque este já atingiu o teto/esgotou no RR/Embargos ou não se aplica ao RE segundo Súmula 128, I, TST salvo se ainda não atingido o valor da condenação — na prática o RE segue preparo do STF e Art. 899 só até RR/Embargos? Atenção: na Súmula 128, I, TST e jurisprudência do TST, o depósito recursal do Art. 899 CLT NÃO é exigido na interposição de Recurso Extraordinário ao STF, cabendo apenas preparo/custas do STF!). E pela Súmula 735 do STF, NÃO cabe RE contra acórdão que defere ou indefere medida liminar/tutela provisória!"
      },
      {
        "letter": "C",
        "text": "Na interposição do Recurso Extraordinário ao STF, o empregador é obrigado a recolher novo depósito recursal trabalhista da tabela do TST."
      },
      {
        "letter": "D",
        "text": "Quando o TST nega provimento ao Recurso de Revista por ausência de transcendência ou ausência de pressuposto intrínseco processual, o STF conhece amplamente do Recurso Extraordinário para reanalisar os pressupostos do RR."
      }
    ],
    "correctAnswer": "B",
    "justification": "RE ao STF em matéria trabalhista: prazo de 15 DIAS ÚTEIS (CPC); exige Repercussão Geral e questão constitucional direta; NÃO exige depósito recursal do Art. 899 CLT (apenas custas do STF); NÃO cabe contra decisão de tutela liminar (Súmula 735 STF) nem contra pressuposto processual de RR (Tema 181 STF).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pegadinha clássica! O Recurso Extraordinário é disciplinado pelo CPC e pela CF (Art. 1.003, § 5º, CPC), sendo o ÚNICO recurso que foge aos 8 dias/5 dias da CLT: prazo de 15 DIAS ÚTEIS!"
      },
      {
        "letter": "C",
        "explanation": "O TST consolidou (Súmula 128 e IN 3/93) que o depósito recursal trabalhista NÃO é pressuposto de admissibilidade do Recurso Extraordinário para o STF (submetido ao preparo específico de porte/custas do STF)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Tema 181 do STF, a questão acerca do preenchimento dos pressupostos de admissibilidade de recursos de competência de outros tribunais (como transcendência ou pressupostos intrínsecos do RR no TST) tem natureza INFRACONSTITUCIONAL e carece de repercussão geral!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 102, III, da CF, Art. 1.029 do CPC e Súmula 735 do STF",
        "textSnippet": "RE ao STF em matéria trabalhista: prazo de 15 DIAS ÚTEIS (CPC); exige Repercussão Geral e questão constitucional direta; NÃO exige depósito recursal do Art. 899 CLT (apenas custas do STF); NÃO cabe contra decisão de tutela liminar (Súmula 735 STF) nem contra pressuposto processual de RR (Tema 181 STF)."
      }
    ],
    "jurisprudence": "Súmula 735 e Tema 181 do STF",
    "professorTip": "RE ao STF na JT: Prazo = 15 DIAS ÚTEIS (único diferente dos 8d)! SEM depósito recursal da CLT! SEM RE contra liminar (Súmula 735 STF)!"
  },
  {
    "id": "mig_ptra_070",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Agravo Interno (Art. 1.021 CPC / Art. 265 RITST) e Agravo em Recurso Extraordinário",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Relator no TRT ou no TST julga monocraticamente Recurso Ordinário ou Recurso de Revista negando-lhe provimento com base em súmula ou tese em recurso repetitivo (Art. 932 CPC). Qual o recurso cabível contra essa decisão monocrática do Relator e qual seu prazo na Justiça do Trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "Cabe AGRAVO INTERNO (ou Agravo Regimental conforme regimento interno — Art. 1.021 CPC c/c IN 39/16 TST e Art. 265 RITST) dirigido ao próprio órgão colegiado (Turma/Seção) no prazo de 8 DIAS ÚTEIS (Art. 1º, § 2º, IN 39/16 TST e Lei 5.584/70 — diferente dos 15 dias do CPC!)! Se o relator ou Presidente do Tribunal negar seguimento ao Recurso Extraordinário aplicando tese de Repercussão Geral do STF (Art. 1.030, I, CPC), também cabe AGRAVO INTERNO no próprio TST (e não ARE ao STF — Art. 1.030, § 2º, CPC)! Se o agravo interno for declarado manifestamente inadmissível ou improcedente em votação unânime, o colegiado condenará o agravante a multa de 1% a 5% do valor atualizado da causa (Art. 1.021, § 4º, CPC)!"
      },
      {
        "letter": "B",
        "text": "O prazo para interposição de Agravo Interno contra decisão monocrática de relator no TRT ou no TST é de 15 dias úteis."
      },
      {
        "letter": "C",
        "text": "Contra decisão do Vice-Presidente do TST que nega seguimento a Recurso Extraordinário com base em Tema de Repercussão Geral do STF, cabe Agravo em Recurso Extraordinário (Art. 1.042 CPC) diretamente ao STF."
      },
      {
        "letter": "D",
        "text": "A multa de 1% a 5% pela improcedência unânime do Agravo Interno não impede a interposição de outro recurso antes de seu recolhimento."
      }
    ],
    "correctAnswer": "A",
    "justification": "Agravo Interno na JT (Art. 1.021 CPC / IN 39 TST): ataca decisão monocrática de relator ou negativa de RE por Tema RG (Art. 1.030, § 2º); prazo de 8 DIAS ÚTEIS; improcedente/inadmissível à unanimidade = multa de 1% a 5% (depósito prévio como condição de novo recurso, salvo Fazenda/gratuidade).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Na Justiça do Trabalho, pela IN 39/2016 do TST e Lei 5.584/70, o Agravo Interno segue o prazo trabalhista padrão de 8 DIAS ÚTEIS (16 dias para Fazenda/MPT)!"
      },
      {
        "letter": "C",
        "explanation": "Atenção à regra do Art. 1.030, § 2º, do CPC: se o juízo de admissibilidade denegou RE aplicando precedente de REPERCUSSÃO GERAL do STF, o recurso cabível é o AGRAVO INTERNO para o Órgão Especial do próprio TST (só cabe Agravo do Art. 1.042 ao STF nos demais casos sem aplicação de Tema RG)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.021, § 5º, do CPC (c/c IN 39 TST), a interposição de qualquer outro recurso fica CONDICIONADA AO DEPÓSITO PRÉVIO do valor da multa do § 4º (salvo Fazenda Pública e beneficiário da justiça gratuita, que recolhem ao final)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 896, § 12, da CLT, Art. 1.021 do CPC e Art. 265 RITST",
        "textSnippet": "Agravo Interno na JT (Art. 1.021 CPC / IN 39 TST): ataca decisão monocrática de relator ou negativa de RE por Tema RG (Art. 1.030, § 2º); prazo de 8 DIAS ÚTEIS; improcedente/inadmissível à unanimidade = multa de 1% a 5% (depósito prévio como condição de novo recurso, salvo Fazenda/gratuidade)."
      }
    ],
    "jurisprudence": "IN 39/2016 do TST",
    "professorTip": "Agravo Interno na JT: prazo de 8 DIAS ÚTEIS! Multa de 1% a 5% por votação unânime (exige pagamento prévio p/ novo recurso)! Negativa de RE por Tema RG = Agravo Interno no TST!"
  },
  {
    "id": "mig_ptra_071",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Incidente de Assunção de Competência (IAC) e Uniformização no TST",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Recurso de Revista ou Recurso Ordinário envolve relevante questão de direito com grande repercussão social trabalhista, MAS SEM REPETIÇÃO EM MÚLTIPLOS PROCESSOS (ao contrário do IRDR/IRR que exige multiplicidade!). Qual incidente processual permite ao TRT ou ao TST firmar precedente vinculante nesse caso?",
    "options": [
      {
        "letter": "A",
        "text": "É o INCIDENTE DE ASSUNÇÃO DE COMPETÊNCIA (IAC — Art. 947 do CPC aplicado ao Processo do Trabalho pelo Art. 8º da IN 39/2016 do TST)! Diferente do IRDR e do IRR (que exigem multiplicidade de processos repetitivos), o IAC é cabível quando o julgamento de recurso, remessa necessária ou processo de competência originária envolver relevante questão de direito, com grande repercussão social, SEM REPETIÇÃO EM MÚLTIPLOS PROCESSOS — deslocando o julgamento para o Tribunal Pleno / Seção Especializada e vinculando todos os juízes e órgãos fracionários (§ 3º)!"
      },
      {
        "letter": "B",
        "text": "O Incidente de Assunção de Competência exige a comprovação de pelo menos 100 processos idênticos em tramitação no Tribunal."
      },
      {
        "letter": "C",
        "text": "O acórdão proferido no Incidente de Assunção de Competência possui eficácia meramente persuasiva sobre as Varas do Trabalho vinculadas ao Tribunal."
      },
      {
        "letter": "D",
        "text": "O IAC é instituto exclusivo da Justiça Comum, sendo inaplicável na Justiça do Trabalho por omissão da CLT."
      }
    ],
    "correctAnswer": "A",
    "justification": "IAC (Art. 947 CPC / IN 39 TST): cabível em questão relevante com grande repercussão social SEM repetição em múltiplos processos (ou para prevenir/compor divergência entre turmas); acórdão vincula juízes e órgãos fracionários (Art. 927, III, CPC).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Exatamente o oposto! Multiplicidade de processos -> IRDR / IRR; questão relevante de repercussão social SEM repetição em múltiplos processos (ou para prevenir divergência interna — § 4º) -> IAC (Art. 947 CPC)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 947, § 3º, do CPC, o acórdão proferido em IAC vinculará TODOS os juízes e órgãos fracionários do respectivo Tribunal (precedente obrigatório do Art. 927, III, CPC), exceto se houver revisão de tese!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 8º da IN 39/2016 do TST e o RITST regulam expressamente a aplicabilidade do IAC tanto nos TRTs quanto no TST (inclusive para definição de teses vinculantes sobre trabalho temporário, como o IAC-5639-31.2013)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 947 do CPC, Art. 896-B da CLT e IN 39/2016 do TST",
        "textSnippet": "IAC (Art. 947 CPC / IN 39 TST): cabível em questão relevante com grande repercussão social SEM repetição em múltiplos processos (ou para prevenir/compor divergência entre turmas); acórdão vincula juízes e órgãos fracionários (Art. 927, III, CPC)."
      }
    ],
    "jurisprudence": "IN 39/2016 do TST",
    "professorTip": "IAC (Art. 947 CPC): relevante questão social SEM múltiplos processos repetitivos! Acórdão TEM efeito vinculante!"
  },
  {
    "id": "mig_ptra_072",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Inovação Recursal e Supressão de Instância no Recurso Ordinário",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na contestação da reclamação trabalhista, a empresa não alegou fato impeditivo nem trouxe documento que já estava em seu poder desde antes da audiência. Somente no Recurso Ordinário ao TRT, a empresa junta o documento antigo e alega tese fática inteiramente nova (sem comprovar motivo de força maior). Pode o TRT conhecer dessa inovação fática?",
    "options": [
      {
        "letter": "A",
        "text": "NÃO! Pelo Art. 1.014 do CPC e Súmula 8 do TST, as questões DE FATO não propostas no juízo inferior só poderão ser suscitadas na apelação/Recurso Ordinário se a parte provar que deixou de fazê-lo por MOTIVO DE FORÇA MAIOR (e a juntada de documentos na fase recursal só se justifica quando provado o justo impedimento para sua oportuna apresentação ou se referir a fato POSTERIOR à sentença — Súmula 8 TST)! Diversamente, questões de ordem pública e prescrição (Súmula 153 TST) ou novos fundamentos jurídicos dentro do capítulo impugnado (Súmula 393, I) podem ser analisadas pelo TRT!"
      },
      {
        "letter": "B",
        "text": "Pelo efeito devolutivo amplo do Recurso Ordinário trabalhista, as partes podem juntar livremente documentos antigos no TRT sem qualquer justificativa."
      },
      {
        "letter": "C",
        "text": "Na Súmula 393, II, do TST, caso o juiz da Vara não tenha examinado um pedido de mérito após afastar prejudicial ou extinguir sem mérito, o TRT deve obrigatoriamente anular e devolver os autos à Vara."
      },
      {
        "letter": "D",
        "text": "Matérias de direito não analisadas na sentença, ainda que contidas na petição inicial, não podem ser apreciadas pelo TRT no recurso da parte."
      }
    ],
    "correctAnswer": "A",
    "justification": "Inovação Recursal: Súmula 8 TST = documentos no recurso só por justo impedimento ou fato posterior à sentença; fatos novos no RO só por força maior (Art. 1.014 CPC). Súmula 393 TST = efeito devolutivo em profundidade (I) + teoria da causa madura no TRT (II).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Súmula 8 do TST: a juntada de documentos na fase recursal SÓ se justifica quando provado o JUSTO IMPEDIMENTO para sua oportuna apresentação ou se referir a FATO POSTERIOR à sentença!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 393, II, do TST (Teoria da Causa Madura — Art. 1.013, § 3º, CPC), se o processo estiver em condições de imediato julgamento (instruído/maduro), o TRT deve decidir desde logo o mérito mesmo que a Vara tenha julgado apenas prejudicial ou extinção sem mérito!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 393, I, do TST, o efeito devolutivo em profundidade do Recurso Ordinário transfere ao TRT a apreciação dos fundamentos da inicial ou da defesa, não examinados pela sentença, ainda que não renovados em contrarrazões!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 1.014 do CPC e Súmulas 393 e 422 do TST",
        "textSnippet": "Inovação Recursal: Súmula 8 TST = documentos no recurso só por justo impedimento ou fato posterior à sentença; fatos novos no RO só por força maior (Art. 1.014 CPC). Súmula 393 TST = efeito devolutivo em profundidade (I) + teoria da causa madura no TRT (II)."
      }
    ],
    "jurisprudence": "Súmulas 8 e 393 do TST",
    "professorTip": "Documento novo no Recurso = SÓ justo impedimento ou fato posterior à sentença (Súmula 8 TST)! Causa madura no TRT = julga direto sem devolver à Vara (Súmula 393, II)!"
  },
  {
    "id": "mig_ptra_073",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso Ordinário - Custas na Improcedência e Reembolso / Inversão do Ônus da Sucumbência",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Sentença trabalhista de 1º grau julga totalmente IMPROCEDENTES os pedidos e condena o reclamante (não beneficiário da justiça gratuita) ao pagamento das custas processuais de R$ 500,00. O reclamante interpõe Recurso Ordinário e recolhe os R$ 500,00 de custas. No TRT, o acórdão reforma a sentença e julga PROCEDENTE a ação, condenando a empresa. Como ficam as custas para eventual Recurso de Revista da empresa?",
    "options": [
      {
        "letter": "A",
        "text": "Pela Súmula 25, I, do TST, a ausência de pagamento das custas que foram atribuídas ao vencedor em primeiro grau ou a inversão do ônus da sucumbência no TRT exige que a empresa (agora vencida no TRT!) comprove o recolhimento das custas fixadas no acórdão dentro do prazo do Recurso de Revista — MAS se o acórdão do TRT apenas inverteu o ônus da sucumbência sem alterar o valor já recolhido pelo autor na fase anterior e o reclamado não recolher? Atenção à Súmula 25, II e III, do TST: no caso de inversão do ônus da sucumbência em 2º grau, SEM ACRÉSCIMO ou atualização do valor das custas e se estas já foram devidamente recolhidas pela parte contrária antes, NÃO há deserção se a parte já sucumbente não recolher novamente para o Estado (deve apenas ressarcir o autor ao final — Súmula 25, II, TST)! Só há deserção se não houver nenhum recolhimento prévio aos cofres públicos ou se o TRT majorou o valor das custas sem recolhimento da diferença (Súmula 25, III)!"
      },
      {
        "letter": "B",
        "text": "Invertido o ônus da sucumbência no TRT, a empresa que pretende interpor Recurso de Revista é obrigada a pagar novamente aos cofres públicos o mesmo valor de custas já recolhido pelo autor, sob pena de deserção."
      },
      {
        "letter": "C",
        "text": "Se a empresa pagou o depósito recursal em dobro por engano e teve sua condenação minorada, o juiz nunca restitui custas recolhidas."
      },
      {
        "letter": "D",
        "text": "O empregado beneficiário da justiça gratuita que recorre de sentença improcedente precisa recolher as custas primeiro e pedir restituição ao final."
      }
    ],
    "correctAnswer": "A",
    "justification": "Súmula 25 TST: (I) pagamento de custas quando devido é pressuposto objetivo; (II) inversão da sucumbência no TRT SEM majoração, quando as custas já foram pagas nos autos pelo então vencido -> não gera novo recolhimento para recorrer (só ressarcimento ao autor ao final); (III) se houve acréscimo/majoração -> recolhe a diferença.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Súmula 25, II, do TST: no caso de inversão do ônus da sucumbência em 2º grau, sem acréscimo ou atualização do valor das custas e se estas já foram devidamente recolhidas, descabe um novo pagamento pela parte vencida, ao poli/Estado (cabendo apenas ressarcimento à parte contrária na execução)!"
      },
      {
        "letter": "C",
        "explanation": "Se o TRT altera/majora o valor da condenação fixando novo valor de custas (Súmula 25, III, TST), a parte que recorrer deve recolher a diferença das custas majoradas dentro do prazo recursal, sob pena de deserção!"
      },
      {
        "letter": "D",
        "explanation": "O beneficiário da justiça gratuita é ISENTO de custas processuais pelo Art. 790-A da CLT (não recolhe nada para recorrer!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 789, § 1º, da CLT e Súmulas 25 e 53 do TST",
        "textSnippet": "Súmula 25 TST: (I) pagamento de custas quando devido é pressuposto objetivo; (II) inversão da sucumbência no TRT SEM majoração, quando as custas já foram pagas nos autos pelo então vencido -> não gera novo recolhimento para recorrer (só ressarcimento ao autor ao final); (III) se houve acréscimo/majoração -> recolhe a diferença."
      }
    ],
    "jurisprudence": "Súmula nº 25 do TST",
    "professorTip": "Súmula 25, II, TST: Se o TRT inverteu a sucumbência SEM aumentar custas e o autor já havia pago -> empresa NÃO paga de novo pro Estado p/ recorrer ao TST!"
  },
  {
    "id": "mig_ptra_074",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso de Revista em Execução Fiscal Trabalhista e CNDT (Art. 896, § 10, CLT)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "União ajuíza na Justiça do Trabalho execução fiscal de multa administrativa aplicada por Auditor-Fiscal do Trabalho (Art. 114, VII, CF) e, no curso da execução, o TRT julga Agravo de Petição mantendo ou cancelando a multa com interpretação de lei federal (CLT/LEF). A parte vencida pode interpor Recurso de Revista alegando violação de lei federal e divergência entre TRTs?",
    "options": [
      {
        "letter": "A",
        "text": "SIM! Atenção à importantíssima exceção do Art. 896, § 10, da CLT! Embora na execução trabalhista comum (título judicial trabalhista entre empregado e empregador) o Recurso de Revista só caiba por violação direta à Constituição Federal (§ 2º e Súmula 266 TST), o § 10 do Art. 896 da CLT prevê expressamente que: \"Cabe recurso de revista por violação a lei federal, por divergência jurisprudencial e por ofensa à Constituição Federal nas EXECUÇÕES FISCAIS e nas controvérsias da fase de execução que envolvam a CERTIDÃO NEGATIVA DE DÉBITOS TRABALHISTAS (CNDT)\"!"
      },
      {
        "letter": "B",
        "text": "Em qualquer processo de execução na Justiça do Trabalho, inclusive execução fiscal de multas administrativas, o Recurso de Revista limita-se exclusivamente à ofensa direta à CF."
      },
      {
        "letter": "C",
        "text": "As multas administrativas impostas pelos Auditores-Fiscais do Trabalho continuam sendo executadas na Justiça Federal comum."
      },
      {
        "letter": "D",
        "text": "Nas execuções de Termos de Ajustamento de Conduta (TAC) do MPT também se aplica a trava da Súmula 266 do TST."
      }
    ],
    "correctAnswer": "A",
    "justification": "RR na fase executiva: Regra geral (§ 2º / Súmula 266 TST) = SÓ ofensa direta e literal à Constituição Federal. Exceções do § 10 do Art. 896 CLT = Execuções Fiscais (multas do trabalho) e controvérsias da CNDT -> cabe RR por violação de lei federal, divergência jurisprudencial E Constituição Federal!",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 896, § 10, da CLT (inserido pela Lei nº 13.015/2014) abriu duas exceções expressas à trava da Súmula 266 TST: na EXECUÇÃO FISCAL (multas MTE) e nas controvérsias sobre CNDT, cabe RR amplo por lei federal, divergência e CF!"
      },
      {
        "letter": "C",
        "explanation": "Desde a EC 45/2004 (Art. 114, VII, CF), a competência para ações e execuções fiscais relativas às penalidades administrativas impostas aos empregadores pelos órgãos de fiscalização do trabalho pertence à JUSTIÇA DO TRABALHO!"
      },
      {
        "letter": "D",
        "explanation": "Por não ser título executivo judicial (e sim extrajudicial nunca submetido a fase de conhecimento prévia!), a execução de título extrajudicial na JT também permite discussão ampla segundo a jurisprudência, e no § 10 ficam expressamente abrangidas execução fiscal e CNDT!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 896, §§ 2º e 10, da CLT e Súmula 266 do TST",
        "textSnippet": "RR na fase executiva: Regra geral (§ 2º / Súmula 266 TST) = SÓ ofensa direta e literal à Constituição Federal. Exceções do § 10 do Art. 896 CLT = Execuções Fiscais (multas do trabalho) e controvérsias da CNDT -> cabe RR por violação de lei federal, divergência jurisprudencial E Constituição Federal!"
      }
    ],
    "jurisprudence": "Súmula nº 266 do TST",
    "professorTip": "RR na Execução = só CF (Súmula 266), EXCETO (Art. 896, § 10): Execução Fiscal e CNDT -> cabe por Lei Federal, Divergência e CF!"
  },
  {
    "id": "mig_ptra_075",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Embargos de Declaração Protelatórios - Multa e Reiteração (Art. 1.026, §§ 2º a 4º CPC)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Executado opõe Embargos de Declaração manifestamente protelatórios em processo trabalhista apenas para retardar o trânsito em julgado. Após condenado na multa inicial, o mesmo litigante reitera novos embargos de declaração igualmente protelatórios contra a decisão anterior. Quais os limites das multas e a consequência da reiteração?",
    "options": [
      {
        "letter": "A",
        "text": "Pelo Art. 1.026, § 2º, do CPC (aplicado subsidiariamente à CLT pela IN 39/2016 TST), quando manifestamente protelatórios os embargos de declaração, o juiz ou tribunal, em decisão fundamentada, condenará o embargante a pagar ao embargado multa NÃO EXCEDENTE A 2% (DOIS POR CENTO) sobre o valor atualizado da causa! Na REITERAÇÃO de embargos protelatórios (§ 3º), a multa é ELEVADA A ATÉ 10% (DEZ POR CENTO), e a interposição de qualquer recurso fica CONDICIONADA AO DEPÓSITO PRÉVIO do valor da multa (exceto Fazenda Pública e beneficiário da justiça gratuita, que recolhem ao final)! Além disso, NÃO serão admitidos novos embargos de declaração se os 2 anteriores houverem sido considerados protelatórios (§ 4º)!"
      },
      {
        "letter": "B",
        "text": "Na primeira oposição de embargos de declaração protelatórios, a interposição do Recurso Ordinário já fica condicionada ao pagamento prévio da multa de 2%."
      },
      {
        "letter": "C",
        "text": "Os embargos de declaração protelatórios nunca interrompem o prazo para o recurso principal."
      },
      {
        "letter": "D",
        "text": "A multa por embargos protelatórios reverte sempre em favor da União (Cofres Públicos)."
      }
    ],
    "correctAnswer": "A",
    "justification": "ED Protelatórios (Art. 1.026 CPC): 1ª vez = multa até 2% do valor atualizado da causa (em favor do embargado, sem condicionar novo recurso); Reiteração = multa elevada a até 10% + depósito prévio obrigatório p/ recorrer (salvo Fazenda/gratuidade); Após 2 protelatórios = não se admitem novos ED (§ 4º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Atenção ao detalhe do Art. 1.026, §§ 2º e 3º, do CPC! Na 1ª vez (multa até 2%) NÃO há depósito prévio obrigatório para recorrer; o depósito prévio como condição de admissibilidade de novo recurso aplica-se apenas na REITERAÇÃO (multa até 10% no § 3º — salvo Fazenda e gratuidade)!"
      },
      {
        "letter": "C",
        "explanation": "Cuidado! Apenas os embargos INTEMPESTIVOS ou sem representação/assinatura não interrompem o prazo; os embargos TEMPESTIVOS, ainda que julgados improcedentes ou protelatórios, INTERROMPEM o prazo recursal (sujeitando-se à multa do Art. 1.026, § 2º)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.026, § 2º, do CPC, a multa por embargos de declaração protelatórios reverte em favor do EMBARGADO (parte contrária prejudicada)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 1.026, §§ 2º a 4º, do CPC e Art. 897-A da CLT",
        "textSnippet": "ED Protelatórios (Art. 1.026 CPC): 1ª vez = multa até 2% do valor atualizado da causa (em favor do embargado, sem condicionar novo recurso); Reiteração = multa elevada a até 10% + depósito prévio obrigatório p/ recorrer (salvo Fazenda/gratuidade); Após 2 protelatórios = não se admitem novos ED (§ 4º)."
      }
    ],
    "jurisprudence": "IN 39/2016 do TST",
    "professorTip": "ED Protelatórios: 1ª vez = até 2% | Reiteração = até 10% + depósito prévio p/ recorrer (salvo Fazenda/gratuidade) | Depois de 2 protelatórios = não cabe mais ED!"
  },
  {
    "id": "mig_ptra_076",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Valor da Causa na CLT e Pedido de Revisão ao Presidente do TRT (Lei nº 5.584/70)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na audiência inaugural, antes de passar à instrução, o reclamante não indicou o valor da causa (ou o valor indicado é contestado). O juiz fixa o valor da causa para determinar a alçada/rito, e a parte inconformada apresenta impugnação nas razões finais sem sucesso. Qual o recurso específico e prazo previstos no Art. 2º, § 2º, da Lei nº 5.584/70?",
    "options": [
      {
        "letter": "A",
        "text": "Pelo Art. 2º da Lei nº 5.584/70, se o valor da causa não constar, o juiz o fixará antes de passar à instrução; se qualquer das partes impugnar o valor fixado pelo juiz e o juiz o mantiver, poderá a parte impugnante formular PEDIDO DE REVISÃO para o PRESIDENTE DO TRIBUNAL REGIONAL DO TRABALHO (TRT), no prazo de 48 HORAS a contar da decisão em razões finais! (Lembrando que, após a Reforma Trabalhista — Art. 840, § 1º, CLT — o valor da causa corresponde hoje à soma dos valores indicados nos pedidos certos e determinados da petição inicial!)."
      },
      {
        "letter": "B",
        "text": "Contra a decisão do juiz que fixa o valor da causa na audiência trabalhista cabe Agravo de Instrumento no prazo de 8 dias."
      },
      {
        "letter": "C",
        "text": "A alçada do rito sumário (até 2 salários mínimos) calcula-se com base no salário mínimo vigente na data da sentença final."
      },
      {
        "letter": "D",
        "text": "O valor da causa no Processo do Trabalho é sempre fixado livremente pelo autor por mera estimativa simbólica de R$ 1.000,00 mesmo quando há pedidos liquidados que somam R$ 80.000,00."
      }
    ],
    "correctAnswer": "A",
    "justification": "Valor da Causa na JT: soma dos pedidos indicados na inicial (Art. 840, § 1º CLT); alçada (<= 2 SM) apura-se pelo salário mínimo da data do ajuizamento (Súmula 356 TST); impugnado em razões finais e mantido pelo juiz = Pedido de Revisão ao Presidente do TRT em 48 horas (Art. 2º, § 2º, Lei 5.584/70).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Meio impugnativo específico clássico do Art. 2º, § 2º, da Lei 5.584/70: mantido o valor pelo juiz após impugnação em razões finais, cabe PEDIDO DE REVISÃO ao Presidente do TRT no prazo de 48 HORAS!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 356 do TST, a alçada (2 salários mínimos) fixa-se pelo valor do salário mínimo vigente na data do AJUIZAMENTO DA AÇÃO (não na data da sentença ou do recurso)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 840, § 1º, da CLT e Art. 292, VI, do CPC, havendo cumulação de pedidos certos e indicados na inicial, o valor da causa deve corresponder à SOMA DOS VALORES DE TODOS OS PEDIDOS!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 2º, §§ 1º e 2º, da Lei nº 5.584/1970 e Súmula 71 do TST",
        "textSnippet": "Valor da Causa na JT: soma dos pedidos indicados na inicial (Art. 840, § 1º CLT); alçada (<= 2 SM) apura-se pelo salário mínimo da data do ajuizamento (Súmula 356 TST); impugnado em razões finais e mantido pelo juiz = Pedido de Revisão ao Presidente do TRT em 48 horas (Art. 2º, § 2º, Lei 5.584/70)."
      }
    ],
    "jurisprudence": "Súmula nº 356 do TST",
    "professorTip": "Valor da causa mantido pelo juiz = Pedido de Revisão ao Presidente do TRT em 48 HORAS (Lei 5.584/70)! Alçada (<= 2 SM) = Salário Mínimo da data do AJUIZAMENTO (Súmula 356)!"
  },
  {
    "id": "mig_ptra_077",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Notificação Postal na CLT (Súmula 16 TST) e Citação por Edital (Art. 841, § 1º CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Em reclamação trabalhista pelo rito ordinário, a notificação inicial é remetida por via postal com aviso de recebimento ao endereço correto da reclamada (entregue na portaria/recepção da empresa, sem assinatura pessoal do sócio). A empresa alega nulidade por ausência de citação pessoal. A notificação postal trabalhista é válida e quando se presume recebida?",
    "options": [
      {
        "letter": "A",
        "text": "A notificação inicial no Processo do Trabalho NÃO precisa ser pessoal (é impessoal/postal — Art. 841, § 1º, CLT), bastando a entrega no endereço correto do destinatário (mesmo recebida por porteiro ou recepcionista)! Pela Súmula 16 do TST, PRESUME-SE RECEBIDA a notificação 48 (QUARENTA E OITO) HORAS depois de sua postagem — sendo seu NÃO recebimento ou a entrega após o decurso desse prazo ÔNUS DE PROVA do destinatário! Somente se o reclamado criar embaraços ou não for encontrado faz-se a notificação por EDITAL (proibida no rito sumaríssimo — Art. 852-B, II, CLT)!"
      },
      {
        "letter": "B",
        "text": "A citação inicial da reclamada na Justiça do Trabalho exige entrega em mãos próprias do representante legal da empresa por Oficial de Justiça, sob pena de nulidade."
      },
      {
        "letter": "C",
        "text": "Pela Súmula 16 do TST, o ônus de provar que o reclamado efetivamente recebeu a correspondência postal no prazo de 48 horas incumbe sempre ao reclamante."
      },
      {
        "letter": "D",
        "text": "O prazo mínimo que deve mediar entre o recebimento da notificação inicial e a realização da audiência trabalhista é de 15 dias úteis para empresas privadas e 20 dias para a Fazenda Pública."
      }
    ],
    "correctAnswer": "A",
    "justification": "Notificação na CLT (Art. 841): postal impessoal; presume recebida em 48h da postagem (Súmula 16 TST — ônus de elidir é do destinatário). Prazo mínimo entre notificação e audiência = 5 dias (particular) / 20 dias (Fazenda Pública — DL 779/69). Edital se não encontrado (proibido no sumaríssimo).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Na Justiça do Trabalho (Art. 841, § 1º, CLT), a citação/notificação inicial faz-se por REGISTRO POSTAL COM FRANQUIA (impessoal, entregue no endereço da reclamada), sem exigência de assinatura pessoal do sócio!"
      },
      {
        "letter": "C",
        "explanation": "A Súmula 16 do TST estabelece presunção RELATIVA em favor da validade: presume-se recebida 48h após a postagem, incumbindo ao DESTINATÁRIO (reclamado) o ônus de provar que não recebeu ou que recebeu depois!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 841, caput, da CLT, a audiência será designada dentro do prazo mínimo de 5 (CINCO) DIAS após o recebimento da notificação para particulares — e para a Fazenda Pública o DL nº 779/69 (Art. 1º, II) assegura o QUÁDRUPLO desse prazo = 20 DIAS!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 841, § 1º, da CLT e Súmula 16 do TST",
        "textSnippet": "Notificação na CLT (Art. 841): postal impessoal; presume recebida em 48h da postagem (Súmula 16 TST — ônus de elidir é do destinatário). Prazo mínimo entre notificação e audiência = 5 dias (particular) / 20 dias (Fazenda Pública — DL 779/69). Edital se não encontrado (proibido no sumaríssimo)."
      }
    ],
    "jurisprudence": "Súmula nº 16 do TST",
    "professorTip": "Notificação CLT = Postal impessoal! Presume recebida em 48h (ônus de provar o contrário é do destinatário — Súmula 16)! Intervalo p/ audiência = 5 dias (particular) / 20 dias (Fazenda)!"
  },
  {
    "id": "mig_ptra_078",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Obrigação de Fazer na JT - Astreintes e Anotação da CTPS pela Secretaria (Art. 39 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Condenada definitivamente a assinar/retificar a CTPS do empregado no prazo de 5 dias sob pena de multa diária (astreintes), a empresa queda-se inerte. A Secretaria da Vara do Trabalho pode anotar a CTPS e como o TST disciplina a multa diária (astreintes) e seu beneficiário?",
    "options": [
      {
        "letter": "A",
        "text": "Pelo Art. 39, §§ 1º e 2º, da CLT (e jurisprudência da SDI-1 TST), recusando-se o empregador a anotar a CTPS, a SECRETARIA DA VARA DO TRABALHO fará as devidas anotações (sem fazer qualquer referência vexatória ao processo judicial!); e a previsão legal da anotação pela Secretaria NÃO impede o juiz de fixar previamente MULTA DIÁRIA (astreintes — Art. 536–537 CPC) para compelir o próprio empregador a cumprir a obrigação de fazer, cujo valor reverte integralmente para o EXEQUENTE (Art. 537, § 2º, CPC)!"
      },
      {
        "letter": "B",
        "text": "Havendo previsão na CLT de que a Secretaria da Vara pode anotar a CTPS, é ilícito ao juiz fixar multa diária (astreintes) contra o empregador."
      },
      {
        "letter": "C",
        "text": "O valor acumulado das astreintes na Justiça do Trabalho reverte em favor do Fundo de Amparo ao Trabalhador (FAT) ou da União."
      },
      {
        "letter": "D",
        "text": "Uma vez fixada em sentença transitada em julgado, a multa diária (astreintes) jamais pode ser modificada ou reduzida pelo juiz na fase de execução mesmo se tornar-se desproporcional."
      }
    ],
    "correctAnswer": "A",
    "justification": "Obrigação de fazer (CTPS — Art. 39 CLT): anotação pela Secretaria da Vara não exclui cominação de astreintes ao patrão; astreintes revertem ao EXEQUENTE (Art. 537, § 2º CPC); valor pode ser ajustado/reduzido na execução se excessivo (§ 1º) sem ofensa à coisa julgada.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A SDI-1 do TST pacificou que a possibilidade supletiva de anotação pela Secretaria da Vara (Art. 39, § 1º CLT) NÃO afasta a cominação de astreintes (multa coercitiva) contra o empregador para estimular o cumprimento específico da obrigação!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 537, § 2º, do CPC (aplicado subsidiariamente à CLT), o valor da multa periódica é devido ao EXEQUENTE (trabalhador credor da obrigação), não à União!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 537, § 1º, do CPC e jurisprudência do TST/STJ, a decisão sobre astreintes NÃO faz coisa julgada material quanto ao valor futuro, podendo o juiz, de ofício ou a requerimento, modificar seu valor ou periodicidade se verificar que se tornou insuficiente ou excessiva!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 39, §§ 1º e 2º, da CLT e Arts. 536 e 537 do CPC",
        "textSnippet": "Obrigação de fazer (CTPS — Art. 39 CLT): anotação pela Secretaria da Vara não exclui cominação de astreintes ao patrão; astreintes revertem ao EXEQUENTE (Art. 537, § 2º CPC); valor pode ser ajustado/reduzido na execução se excessivo (§ 1º) sem ofensa à coisa julgada."
      }
    ],
    "professorTip": "Anotação CTPS = Secretaria faz sem citar processo, MAS cabe astreintes contra o patrão! Astreintes = vão pro EXEQUENTE e NÃO fazem coisa julgada definitiva se excessivas!"
  },
  {
    "id": "mig_ptra_079",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Penhora de Salários, Aposentadoria e Conta Bancária na Execução Trabalhista (OJ 153 SDI-2 TST)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na execução de crédito trabalhista (natureza alimentar!) contra ex-empregador pessoa física ou sócio incluído após IDPJ, o juiz determina o bloqueio via SISBAJUD de 30% do salário mensal ou provento de aposentadoria recebido pelo devedor (cujo total mensal é de R$ 8.000,00 — muito abaixo de 50 salários mínimos). Essa penhora de salário na execução trabalhista é lícita após o CPC/2015?",
    "options": [
      {
        "letter": "A",
        "text": "SIM, dentro da razoabilidade! Embora a antiga redação da OJ 153 da SDI-2 do TST proibisse absolutamente qualquer penhora de salários/aposentadorias na vigência do CPC/1973, o TST ATUALIZOU a OJ 153 da SDI-2 para adequá-la ao Art. 833, § 2º, do CPC/2015: hoje, a regra de impenhorabilidade de vencimentos, salários e proventos de aposentadoria NÃO se aplica à hipótese de penhora para pagamento de PRESTAÇÃO ALIMENTÍCIA (independentemente de sua origem — incluindo CRÉDITO TRABALHISTA!), desde que preservada a dignidade/subsistência do devedor (em regra limitada a percentual razoável, como até 20% a 30% dos ganhos líquidos)!"
      },
      {
        "letter": "B",
        "text": "Por força da OJ 153 da SDI-2 do TST, continua absolutamente proibido penhorar qualquer percentual de salário ou aposentadoria do sócio executado abaixo de 50 salários mínimos."
      },
      {
        "letter": "C",
        "text": "Os valores depositados em caderneta de poupança de até 40 salários mínimos também podem ser penhorados livremente para pagar qualquer dívida trabalhista comum sem exceção."
      },
      {
        "letter": "D",
        "text": "Contra a decisão do juiz na execução definitiva que determina penhora online em conta salarial bloqueando 100% da remuneração do executado, não cabe Mandado de Segurança."
      }
    ],
    "correctAnswer": "A",
    "justification": "Penhora de salários/proventos na JT (Art. 833, § 2º CPC + OJ 153 SDI-2 atualizada): sob o CPC/2015, admite-se penhora parcial de salário/aposentadoria do devedor para satisfazer crédito trabalhista (natureza alimentícia), respeitado percentual razoável que assegure subsistência digna.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Atenção à atualização da OJ 153 da SDI-2 do TST após o CPC/2015! O TST restringiu a OJ 153 apenas aos atos praticados sob o CPC/1973 — sob o CPC/2015 (Art. 833, § 2º), o crédito trabalhista tem natureza alimentar e PERMITE penhora parcial de salários/proventos preservando a subsistência!"
      },
      {
        "letter": "C",
        "explanation": "Cuidado com a distinção do Art. 833, § 2º, CPC: a exceção da prestação alimentícia permite penhorar salários/proventos (inciso IV) E importâncias excedentes a 50 SM, E também o inciso X (poupança até 40 SM) tem sido mitigado pelo TST para crédito alimentar trabalhista quando não compromete a subsistência mínima!"
      },
      {
        "letter": "D",
        "explanation": "Pela própria OJ 153 da SDI-2 e Súmula 417 TST, o bloqueio ilegal/abusivo de 100% do salário comprometendo a subsistência desafia, conforme o caso, Embargos à Execução/Agravo de Petição ou Mandado de Segurança em casos de teratologia/ausência de outro recurso eficaz imediato para desbloqueio alimentar!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 833, IV e § 2º, do CPC e OJ 153 da SDI-2 do TST",
        "textSnippet": "Penhora de salários/proventos na JT (Art. 833, § 2º CPC + OJ 153 SDI-2 atualizada): sob o CPC/2015, admite-se penhora parcial de salário/aposentadoria do devedor para satisfazer crédito trabalhista (natureza alimentícia), respeitado percentual razoável que assegure subsistência digna."
      }
    ],
    "jurisprudence": "OJ 153 SDI-2 do TST",
    "professorTip": "OJ 153 SDI-2 (atualizada ao CPC/2015): Crédito trabalhista é ALIMENTAR -> PODE penhorar percentual razoável de salário/aposentadoria do executado (preservando subsistência)!"
  },
  {
    "id": "mig_ptra_080",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Penhora de Bem de Família na Execução Trabalhista (Lei nº 8.009/90 e LC 150/2015)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado doméstico vence ação trabalhista cobrando salários atrasados de seu ex-empregador pessoa física e requer na execução a penhora do único imóvel residencial em que o ex-empregador reside com sua família (bem de família). Essa penhora é admitida atualmente?",
    "options": [
      {
        "letter": "A",
        "text": "O único imóvel residencial do empregador continua penhorável para pagamento de créditos trabalhistas de empregados domésticos que trabalhavam na residência."
      },
      {
        "letter": "B",
        "text": "Para que o único imóvel residencial goze da proteção da Lei nº 8.009/90 contra penhora trabalhista, exige-se prévia escritura pública averbada no Registro de Imóveis."
      },
      {
        "letter": "C",
        "text": "A vaga de garagem com matrícula autônoma no registro de imóveis também é absolutamente impenhorável junto com o apartamento residencial."
      },
      {
        "letter": "D",
        "text": "NÃO! A Lei Complementar nº 150/2015 (Art. 46) REVOGOU expressamente o inciso I do Art. 3º da Lei nº 8.009/1990 (que antigamente permitia penhorar o bem de família para pagar créditos de trabalhadores da própria residência — empregados domésticos)! Hoje, o único imóvel residencial da família NÃO pode mais ser penhorado nem para dívida trabalhista de empregado doméstico nem de empregado comum (só permanecem exceções como pensão alimentícia familiar, fiança em contrato de locação, crédito de financiamento do próprio imóvel, IPTU do imóvel, hipoteca e imóvel adquirido com produto de crime)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Bem de família na execução trabalhista (Lei 8.009/90): impenhorável (inclusive após LC 150/2015 revogar a exceção do empregado doméstico!). Protege solteiro/viúvo (Súmula 364 STJ) e único imóvel alugado cuja renda paga moradia da família (Súmula 486 STJ). Vaga de garagem com matrícula própria É PENHORÁVEL (Súmula 449 STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pegadinha clássica pós-2015! A LC nº 150/2015 (Art. 46) REVOGOU o inciso I do Art. 3º da Lei 8.009/90: hoje o bem de família é IMPENHORÁVEL inclusive contra créditos trabalhistas do empregado doméstico!"
      },
      {
        "letter": "B",
        "explanation": "O bem de família legal (Lei 8.009/90) independe de registro prévio em cartório (basta ser o único imóvel residencial utilizado como moradia permanente — Súmula 364 STJ inclui imóvel de pessoa solteira/separada/viúva e Súmula 486 STJ mantém proteção mesmo se locado a terceiros com renda revertida para moradia da família)!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 449 do STJ, a vaga de garagem que possui matrícula própria no registro de imóveis NÃO constitui bem de família para efeito de penhora!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 1º e Art. 3º da Lei nº 8.009/1990 e Art. 46 da LC nº 150/2015",
        "textSnippet": "Bem de família na execução trabalhista (Lei 8.009/90): impenhorável (inclusive após LC 150/2015 revogar a exceção do empregado doméstico!). Protege solteiro/viúvo (Súmula 364 STJ) e único imóvel alugado cuja renda paga moradia da família (Súmula 486 STJ). Vaga de garagem com matrícula própria É PENHORÁVEL (Súmula 449 STJ)."
      }
    ],
    "jurisprudence": "Súmulas 364, 449 e 486 do STJ",
    "professorTip": "Bem de família: LC 150/2015 REVOGOU penhora até para empregado doméstico! Solteiro/viúvo = protegido (Súmula 364 STJ)! Garagem com matrícula própria = PENHORÁVEL (Súmula 449 STJ)!"
  },
  {
    "id": "mig_ptra_081",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Penhora de Faturamento da Empresa e Ordem Legal (Art. 866 CPC e OJ 93 SDI-2 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Não encontrados dinheiro nem outros bens móveis/imóveis livres e desembaraçados da empresa executada na execução definitiva trabalhista, o exequente requer a penhora de percentual do faturamento diário/mensal da empresa. Quais os requisitos legais para a penhora de faturamento na Justiça do Trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "A penhora de faturamento da empresa pode ser decretada em 1º lugar antes mesmo da tentativa de bloqueio de dinheiro via SISBAJUD ou penhora de veículos."
      },
      {
        "letter": "B",
        "text": "A OJ 93 da SDI-2 do TST permite penhorar até 80% do faturamento bruto da empresa mesmo que isso acarrete paralisação imediata e demissão de todos os trabalhadores."
      },
      {
        "letter": "C",
        "text": "A penhora de estabelecimento comercial inteiro (empresa) é vedada sempre que houver faturamento positivo."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 866 do CPC e OJ 93 da SDI-2 do TST, é ADMISSÍVEL a penhora de renda/faturamento da empresa executada quando inexistirem outros bens passíveis de penhora (ou forem de difícil alienação — caráter subsidiário na ordem do Art. 835, X, CPC!), DESDE QUE: (1) seja fixado percentual que NÃO torne inviável o exercício da atividade empresarial (princípio da preservação da empresa e menor onerosidade — Art. 805 CPC); e (2) seja nomeado administrador-depositário que submeterá à aprovação judicial a forma de efetivação da constrição e prestará contas mensalmente (§ 2º)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Penhora de faturamento (Art. 866 CPC + OJ 93 SDI-2 TST): subsidiária (após frustrados bens anteriores do Art. 835 CPC); percentual não pode inviabilizar o funcionamento da empresa; exige administrador-depositário com prestação de contas mensal.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na ordem do Art. 835 do CPC, dinheiro em espécie/depósito bancário está em 1º lugar e faturamento de empresa está em 10º lugar (caráter excepcional/subsidiário quando ausentes bens anteriores — Art. 866 CPC)!"
      },
      {
        "letter": "B",
        "explanation": "Tanto o Art. 866, § 1º, CPC quanto a OJ 93 da SDI-2 do TST impõem limite rigoroso: o percentual sobre o faturamento NÃO pode inviabilizar a continuidade do empreendimento empresarial!"
      },
      {
        "letter": "C",
        "explanation": "A penhora de empresa/estabelecimento (Art. 862–865 CPC) também é medida excepcionalíssima quando inexistentes outros bens, nomeando-se administrador judicial com plano de administração."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 835 e Art. 866 do CPC e OJ 93 da SDI-2 do TST",
        "textSnippet": "Penhora de faturamento (Art. 866 CPC + OJ 93 SDI-2 TST): subsidiária (após frustrados bens anteriores do Art. 835 CPC); percentual não pode inviabilizar o funcionamento da empresa; exige administrador-depositário com prestação de contas mensal."
      }
    ],
    "jurisprudence": "OJ 93 SDI-2 do TST",
    "professorTip": "Penhora de Faturamento (OJ 93 SDI-2): SÓ se não achar bens anteriores + percentual NÃO pode quebrar a empresa + exige administrador com contas mensais!"
  },
  {
    "id": "mig_ptra_082",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Fraude à Execução vs. Fraude contra Credores na Justiça do Trabalho (Art. 792 CPC)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Após regularmente citada a empresa (ou o sócio após IDPJ) em reclamação trabalhista em curso, o devedor aliena seu único bem imóvel disponível a terceiro sem reserva de patrimônio suficiente para responder pela dívida — porém o exequente NÃO havia averbado a pendência da execução na matrícula do imóvel. Ocorre fraude à execução ou fraude contra credores, e como se aplica a Súmula 375 do STJ?",
    "options": [
      {
        "letter": "A",
        "text": "A fraude à execução trabalhista anula a compra e venda com efeito erga omnes e exige sempre o ajuizamento de ação pauliana autônoma na Vara Cível."
      },
      {
        "letter": "B",
        "text": "Se a venda do imóvel pelo executado ocorreu antes mesmo do ajuizamento de qualquer reclamação trabalhista, ainda assim configura fraude à execução declarada de ofício."
      },
      {
        "letter": "C",
        "text": "Antes de reconhecer a fraude à execução e desconstituir a venda contra o terceiro adquirente, o juiz deve dispensar sua intimação."
      },
      {
        "letter": "D",
        "text": "Quando a alienação ocorre APÓS o ajuizamento/citação válida da demanda capaz de reduzir o devedor à insolvência, trata-se de FRAUDE À EXECUÇÃO (Art. 792, IV, CPC), ato processual INEFICAZ perante o exequente que pode ser declarado incidentalmente nos próprios autos da execução trabalhista (dispensando ação pauliana, diferentemente da fraude contra credores do Art. 158 CC, que ocorre ANTES da ação e exige ação pauliana autônoma!); CONTUDO, pela Súmula 375 do STJ (e Art. 792, § 2º, CPC), NÃO havendo registro de penhora ou averbação prévia na matrícula do bem sujeito a registro, incumbe ao EXEQUENTE o ônus de provar a MÁ-FÉ do terceiro adquirente (ou ao terceiro provar diligência por certidões conforme Art. 792, § 2º)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Fraude à Execução (Art. 792 CPC): alienação na pendência de demanda capaz de reduzir devedor à insolvência; declarada nos próprios autos (ineficácia frente à execução); se não houver penhora/averbação na matrícula, exige prova da má-fé do adquirente (Súmula 375 STJ) e intimação prévia para embargos de terceiro em 15 dias (§ 4º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A fraude à execução gera INEFICÁCIA relativa apenas diante da execução (Art. 792, § 1º, CPC) e é declarada incidentalmente nos próprios autos da execução trabalhista — apenas a fraude contra credores anterior ao processo exige ação pauliana!"
      },
      {
        "letter": "B",
        "explanation": "Alienação anterior ao ajuizamento de qualquer demanda ou redirecionamento contra o sócio pode configurar no máximo fraude contra credores (matéria de ação pauliana), jamais fraude à execução (Art. 792, IV, CPC)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 792, § 4º, do CPC, antes de declarar a fraude à execução, o juiz DEVERÁ intimar o terceiro adquirente, que, se quiser, poderá opor EMBARGOS DE TERCEIRO no prazo de 15 dias!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 792 do CPC, Art. 158 CC e Súmula 375 do STJ",
        "textSnippet": "Fraude à Execução (Art. 792 CPC): alienação na pendência de demanda capaz de reduzir devedor à insolvência; declarada nos próprios autos (ineficácia frente à execução); se não houver penhora/averbação na matrícula, exige prova da má-fé do adquirente (Súmula 375 STJ) e intimação prévia para embargos de terceiro em 15 dias (§ 4º)."
      }
    ],
    "jurisprudence": "Súmula nº 375 do STJ",
    "professorTip": "Fraude à Execução (Art. 792 CPC): pós-demanda + insolvência = ineficaz nos próprios autos! Sem registro na matrícula = exige prova má-fé do terceiro (Súmula 375 STJ) e intima terceiro p/ Embargos em 15 dias!"
  },
  {
    "id": "mig_ptra_083",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Certidão Negativa de Débitos Trabalhistas (CNDT - Art. 642-A CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa deseja participar de licitação pública federal regida pela Lei nº 14.133/2021 e necessita apresentar a Certidão Negativa de Débitos Trabalhistas (CNDT). Em quais hipóteses o sistema do BNDT impede a expedição de CNDT, quando cabe a Certidão Positiva com Efeito de Negativa (CPEN) e qual seu prazo de validade?",
    "options": [
      {
        "letter": "A",
        "text": "A Certidão Negativa de Débitos Trabalhistas (CNDT) tem prazo de validade de 30 dias e custa taxa federal equivalente a 2% do salário mínimo."
      },
      {
        "letter": "B",
        "text": "A simples propositura de reclamação trabalhista ainda em fase de conhecimento impede automaticamente a empresa reclamada de obter a CNDT."
      },
      {
        "letter": "C",
        "text": "Mesmo que a empresa garanta integralmente a execução com depósito ou penhora suficiente e oponha Embargos à Execução, continuará impedida de participar de licitações por constar no BNDT."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 642-A da CLT: (1) a CNDT é expedida gratuita e eletronicamente e tem prazo de validade de 180 (CENTO E OITENTA) DIAS contados de sua emissão (§ 4º); (2) será NEGADA (certidão positiva) quando o interessado possuir débito inadimplido em execução definitiva trabalhista (decorridos 45 dias da citação sem garantia — Art. 883-A), inadimplemento de obrigações estabelecidas em acordo judicial ou TAC/CCP, ou falência não garantida em certos termos; e (3) será expedida CERTIDÃO POSITIVA COM EFEITO DE NEGATIVA (CPEN — com os mesmos efeitos da CNDT para licitações!) quando o débito estiver GARANTIDO POR PENHORA SUFICIENTE, depósito integral ou com EXIGIBILIDADE SUSPENSA (§ 2º)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "CNDT (Art. 642-A CLT): gratuita, eletrônica, validade de 180 DIAS. Impeditivos: débito inadimplido pós-trânsito em julgado (após 45d da citação — Art. 883-A) ou descumprimento de acordo/TAC/CCP. Garantido por penhora suficiente ou exigibilidade suspensa = CPEN (mesmo efeito de negativa).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A CNDT é GRATUITA, eletrônica e válida por exatos 180 DIAS contados da data de emissão (Art. 642-A, caput e § 4º, CLT)!"
      },
      {
        "letter": "B",
        "explanation": "O Art. 642-A, § 1º, exige inadimplemento de obrigações estabelecidas em SENTENÇA CONDENATÓRIA TRANSITADA EM JULGADO ou em acordos judiciais/TAC/CCP descumpridos — processos ainda em fase de conhecimento ou recursos não geram negativação no BNDT!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 642-A, § 2º, CLT, garantido o juízo por penhora suficiente ou suspensa a exigibilidade do crédito, expede-se a Certidão Positiva com Efeito de Negativa (CPEN), plenamente hábil para licitações!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 642-A da CLT e Lei nº 12.440/2011",
        "textSnippet": "CNDT (Art. 642-A CLT): gratuita, eletrônica, validade de 180 DIAS. Impeditivos: débito inadimplido pós-trânsito em julgado (após 45d da citação — Art. 883-A) ou descumprimento de acordo/TAC/CCP. Garantido por penhora suficiente ou exigibilidade suspensa = CPEN (mesmo efeito de negativa)."
      }
    ],
    "professorTip": "CNDT (Art. 642-A CLT): Gratuita e vale 180 DIAS! Processo em conhecimento NÃO suja CNDT! Garantiu a execução ou suspendeu exigibilidade = Certidão Positiva com Efeito de Negativa!"
  },
  {
    "id": "mig_ptra_084",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Incidência Fiscal (IRPF / RRA) e Previdenciária sobre Condenações Trabalhistas (Súmula 368 TST)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado recebe em execução trabalhista R$ 120.000,00 referentes a diferenças salariais acumuladas ao longo de 60 meses de contrato + juros de mora sobre tais verbas. Como deve ser calculado o Imposto de Renda Retido na Fonte (IRPF) e quem arca com os descontos legais segundo a Súmula 368 do TST e o STF?",
    "options": [
      {
        "letter": "A",
        "text": "Por ter dado causa ao atraso no pagamento das verbas salariais, o empregador responde sozinho pelo pagamento do Imposto de Renda do empregado sem poder deduzi-lo do crédito trabalhista."
      },
      {
        "letter": "B",
        "text": "O Imposto de Renda sobre condenações trabalhistas acumuladas de vários anos é calculado de uma só vez sobre o montante global recebido pelo regime de caixa."
      },
      {
        "letter": "C",
        "text": "Os juros de mora incidentes sobre as verbas salariais condenadas na Justiça do Trabalho sofrem incidência normal de Imposto de Renda."
      },
      {
        "letter": "D",
        "text": "Pela Súmula 368, II, do TST, é do EMPREGADOR a responsabilidade pelo recolhimento das contribuições previdenciárias e fiscais resultantes de crédito do empregado oriundo de condenação judicial — devendo ser deduzida do crédito do empregado a quota-parte previdenciária e fiscal que lhe cabe (OJ 363 SDI-1 TST: a culpa do empregador pelo inadimplemento na época própria NÃO o obriga a assumir o IRPF/INSS do empregado)! Quanto à forma de cálculo do IRPF: incide mês a mês pelo critério de RENDIMENTOS RECEBIDOS ACUMULADAMENTE (RRA — Art. 12-A da Lei 7.713/88 e Súmula 368, VI, TST — tabela progressiva multiplicada pelo número de meses!), E os JUROS DE MORA NÃO sofrem incidência de Imposto de Renda (OJ 400 SDI-1 TST e STF RE 855.091 / Tema 808)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Descontos Fiscais/INSS (Súmula 368 TST + OJ 363 + OJ 400 + STF Tema 808): patrão recolhe, mas deduz quota-parte do empregado (INSS pela tabela mês a mês/teto — Súmula 368, III; IRPF pelo critério RRA Art. 12-A — Súmula 368, VI); juros de mora NÃO têm IRPF (Tema 808 STF).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela OJ 363 da SDI-1 e Súmula 368, II, TST, o empregador recolhe os tributos na fonte, MAS desconta do crédito do trabalhador a parcela de IRPF e INSS que legalmente pertence ao empregado!"
      },
      {
        "letter": "B",
        "explanation": "Desde a Lei nº 12.350/2010 (Art. 12-A da Lei 7.713/88) e Súmula 368, VI, TST, o IRPF calcula-se pelo critério do RRA (mês a mês / competência multiplicando a tabela pelos meses trabalhados), evitando tributação confiscatória na alíquota máxima!"
      },
      {
        "letter": "C",
        "explanation": "Tanto a OJ 400 da SDI-1 do TST quanto o STF em Repercussão Geral (Tema 808 — RE 855.091) pacificaram que NÃO incide Imposto de Renda sobre os juros de mora devidos pelo atraso no pagamento de verbas salariais (natureza indenizatória)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 12-A da Lei nº 7.713/88, Art. 832, § 3º CLT e Súmula 368, II, III e VI, TST",
        "textSnippet": "Descontos Fiscais/INSS (Súmula 368 TST + OJ 363 + OJ 400 + STF Tema 808): patrão recolhe, mas deduz quota-parte do empregado (INSS pela tabela mês a mês/teto — Súmula 368, III; IRPF pelo critério RRA Art. 12-A — Súmula 368, VI); juros de mora NÃO têm IRPF (Tema 808 STF)."
      }
    ],
    "jurisprudence": "Súmula 368, OJs 363/400 TST e STF Tema 808",
    "professorTip": "IRPF/INSS na sentença: Patrão recolhe, MAS desconta a parte do empregado (OJ 363)! IRPF = critério RRA mês a mês (Súmula 368, VI)! Juros de mora = SEM Imposto de Renda (Tema 808 STF)!"
  },
  {
    "id": "mig_ptra_085",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Prazo em Dobro para Litisconsortes com Advogados Distintos - Inaplicabilidade na JT (OJ 310)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Duas empresas privadas são condenadas solidariamente em processo trabalhista eletrônico (PJe) e possuem procuradores distintos, de escritórios diferentes. Baseando-se no Art. 229 do CPC, uma delas interpõe Recurso Ordinário no 15º dia útil alegando prazo em dobro para litisconsortes. O recurso é tempestivo?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo em dobro do Art. 229 do CPC para litisconsortes com advogados distintos aplica-se normalmente aos processos trabalhistas físicos e eletrônicos."
      },
      {
        "letter": "B",
        "text": "Quando uma empresa privada litiga em litisconsórcio com um Município, a empresa privada aproveita o prazo em dobro da Fazenda Pública para interpor seu próprio recurso."
      },
      {
        "letter": "C",
        "text": "Se apenas uma das empresas condenadas solidariamente recorrer pedindo exclusão da lide, seu depósito recursal aproveita automaticamente à outra empresa."
      },
      {
        "letter": "D",
        "text": "NÃO! É INTEMPESTIVO! Pela Orientação Jurisprudencial nº 310 da SDI-1 do TST (e pelo próprio Art. 229, § 2º, do CPC nos autos eletrônicos!), é INAPLICÁVEL ao Processo do Trabalho a norma do Art. 229 do CPC (prazo em dobro para litisconsortes com diferentes procuradores), por ser incompatível com a celeridade trabalhista — além de o Art. 229, § 2º, CPC já excluir o prazo em dobro nos processos em autos eletrônicos (PJe)! Logo, o prazo recursal permanece de 8 dias úteis!"
      }
    ],
    "correctAnswer": "D",
    "justification": "OJ 310 SDI-1 TST: prazo em dobro do Art. 229 CPC (litisconsortes com advogados diferentes) é INAPLICÁVEL ao Processo do Trabalho (e nos autos eletrônicos também não existe pelo § 2º do Art. 229 CPC)! Prazo do particular permanece 8 dias úteis.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Dupla vedação absoluta! A OJ 310 da SDI-1 do TST veda expressamente o prazo em dobro do Art. 229 CPC no Processo do Trabalho, e o próprio § 2º do Art. 229 CPC o exclui nos autos eletrônicos!"
      },
      {
        "letter": "B",
        "explanation": "A prerrogativa de prazo em dobro do DL 779/69 é pessoal e exclusiva da Fazenda Pública e do MPT — NÃO se estende à empresa privada corré!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 128, III, do TST, o depósito efetuado por uma empresa solidária SÓ aproveita à outra quando a empresa depositante NÃO pleitear sua exclusão da lide!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 229 do CPC, Art. 775 da CLT e OJ 310 da SDI-1 do TST",
        "textSnippet": "OJ 310 SDI-1 TST: prazo em dobro do Art. 229 CPC (litisconsortes com advogados diferentes) é INAPLICÁVEL ao Processo do Trabalho (e nos autos eletrônicos também não existe pelo § 2º do Art. 229 CPC)! Prazo do particular permanece 8 dias úteis."
      }
    ],
    "jurisprudence": "OJ 310 SDI-1 e Súmula 128, III, do TST",
    "professorTip": "OJ 310 SDI-1 TST: Litisconsortes com advogados diferentes NÃO têm prazo em dobro na Justiça do Trabalho (nem no CPC em autos eletrônicos)!"
  },
  {
    "id": "mig_ptra_086",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "PJe-JT, Intimações Eletrônicas e Indisponibilidade do Sistema (Lei nº 11.419/06)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um acórdão do TRT é disponibilizado no Diário Eletrônico da Justiça do Trabalho (DEJT) na quarta-feira (dia útil). No último dia do prazo recursal de 8 dias úteis, o sistema do PJe-JT sofre indisponibilidade técnica comprovada por mais de 60 minutos ininterruptos entre 6h e 23h (ou fica fora do ar entre 23h e 24h). Como se contam a publicação e a prorrogação?",
    "options": [
      {
        "letter": "A",
        "text": "No Diário Eletrônico da Justiça do Trabalho (DEJT), a data de disponibilização já é considerada a data de publicação, começando o prazo no dia seguinte."
      },
      {
        "letter": "B",
        "text": "Na intimação via portal eletrônico do PJe (para procuradores cadastrados), a intimação considera-se feita imediatamente no segundo seguinte ao envio pelo cartório."
      },
      {
        "letter": "C",
        "text": "A petição eletrônica protocolada às 23h45 do último dia do prazo é intempestiva se o expediente físico da Vara encerrar às 18h."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 4º, §§ 3º e 4º, da Lei nº 11.419/2006: considera-se como DATA DA PUBLICAÇÃO o 1º dia útil seguinte ao da disponibilização no DEJT (quinta-feira), e o PRAZO COMEÇA A CORRER no 1º dia útil seguinte ao da publicação (sexta-feira)! E quanto à indisponibilidade do PJe-JT no último dia do prazo (Resolução CSJT nº 185/2017 e Art. 10, § 2º, Lei 11.419/06): se o sistema ficar indisponível por motivo técnico por tempo superior a 60 minutos ininterruptos ou intermitentes (entre 6h e 23h) ou por qualquer período entre 23h e 24h no termo final, o prazo prorroga-se automaticamente para o 1º DIA ÚTIL SEGUINTE à resolução do problema!"
      }
    ],
    "correctAnswer": "D",
    "justification": "PJe / DEJT (Lei 11.419/06): (1) DEJT: disponibiliza dia X -> publica 1º dia útil seguinte -> inicia contagem no 1º dia útil após publicação; (2) Portal PJe: data da leitura ou 10 dias corridos após envio; (3) Horário limite = 24h do último dia; (4) Indisponibilidade técnica > 60 min (6h–23h) ou qualquer falha entre 23h–24h no último dia = prorroga p/ 1º dia útil seguinte.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Regra fixa da Lei 11.419/06 (Art. 4º, §§ 3º e 4º): Dia 0 = disponibilização no DEJT; Dia 1 (1º dia útil seguinte) = DATA DA PUBLICAÇÃO; Dia 2 (1º dia útil seguinte à publicação) = INÍCIO DA CONTAGEM!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 5º, §§ 1º e 3º, da Lei nº 11.419/2006, na intimação via portal próprio eletrônico (PJe), considera-se realizada no dia em que o intimando efetivar a consulta eletrônica (ou, se não consultar em até 10 DIAS CORRIDOS contados do envio, considera-se intimado automaticamente no término desses 10 dias!)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 213 do CPC e Art. 10, § 1º, da Lei 11.419/2006, o ato processual eletrônico pode ser praticado até as 24 HORAS (23h59min59s) do último dia do prazo no fuso horário do órgão judiciário!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 4º e 5º da Lei nº 11.419/2006 e Art. 224, § 1º, CPC",
        "textSnippet": "PJe / DEJT (Lei 11.419/06): (1) DEJT: disponibiliza dia X -> publica 1º dia útil seguinte -> inicia contagem no 1º dia útil após publicação; (2) Portal PJe: data da leitura ou 10 dias corridos após envio; (3) Horário limite = 24h do último dia; (4) Indisponibilidade técnica > 60 min (6h–23h) ou qualquer falha entre 23h–24h no último dia = prorroga p/ 1º dia útil seguinte."
      }
    ],
    "professorTip": "DEJT: Disponibiliza -> 1º dia útil PUBLICA -> 1º dia útil COMEÇA prazo! Peticionamento = até 23h59! Portal PJe sem abrir = presume intimado em 10 dias corridos!"
  },
  {
    "id": "mig_ptra_087",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Substituição de Bem Penhorado e Garantia por Seguro / Fiança na Execução (OJ 59 SDI-2 TST)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na fase de execução trabalhista DEFINITIVA, após bloqueio ou antes da constrição de dinheiro em conta corrente da executada, a empresa oferece Seguro Garantia Judicial (ou Carta de Fiança Bancária) com acréscimo de 30% sobre o valor atualizado da execução para garantir o juízo ou substituir o dinheiro penhorado. O juiz deve aceitar o seguro garantia?",
    "options": [
      {
        "letter": "A",
        "text": "A fiança bancária e o seguro garantia judicial exigem apenas o valor nominal exato da dívida executada, sem acréscimo percentual."
      },
      {
        "letter": "B",
        "text": "Na execução trabalhista definitiva nunca se admite substituir penhora de dinheiro em conta corrente por seguro garantia judicial com +30%."
      },
      {
        "letter": "C",
        "text": "O executado pode substituir livremente o dinheiro bloqueado via SISBAJUD por veículo ou terreno bem localizado sem concordância do exequente."
      },
      {
        "letter": "D",
        "text": "SIM! Pelo Art. 882 da CLT (c/c Art. 835, § 2º, do CPC e OJ 59 da SDI-2 do TST atualizada!), para fins de substituição da penhora (ou garantia originária do juízo na execução — Art. 882 CLT), EQUIPARAM-SE A DINHEIRO a fiança bancária e o seguro garantia judicial, desde que em valor NÃO INFERIOR ao do débito constante da inicial/execução, ACRESCIDO DE 30% (TRINTA POR CENTO)! (Inclusive em execução definitiva — a antiga restrição da Súmula 417 à execução definitiva referia-se à oferta de bens imóveis/móveis comuns em detrimento de dinheiro, não ao seguro garantia com +30% regulado pelo Ato Conjunto TST/CSJT 1/2019 e CNJ!)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Garantia na Execução (Art. 882 CLT + Art. 835, § 2º CPC + OJ 59 SDI-2 TST): Fiança bancária e Seguro Garantia Judicial com ACRÉSCIMO DE 30% equiparam-se a DINHEIRO na gradação legal (inclusive para substituir dinheiro penhorado). Demais bens (imóveis/veículos) NÃO substituem dinheiro na execução definitiva (Súmula 417, I, TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Tanto o Art. 835, § 2º, do CPC quanto a OJ 59 da SDI-2 do TST exigem o acréscimo legal mínimo de 30% sobre o valor do débito para equiparar fiança/seguro a dinheiro!"
      },
      {
        "letter": "B",
        "explanation": "A OJ 59 da SDI-2 do TST (em sintonia com o Art. 835, § 2º CPC, Art. 882 CLT e decisão do CNJ no PCA 0009820-09.2019) admite expressamente o seguro garantia judicial / carta de fiança com acréscimo de 30% para substituir inclusive penhora em dinheiro (desde que observados os requisitos do Ato Conjunto TST/CSJT 1/2019)!"
      },
      {
        "letter": "C",
        "explanation": "Apenas fiança bancária e seguro garantia judicial (+30%) equiparam-se a dinheiro pelo Art. 835, § 2º, CPC! Bens imóveis/móveis ficam abaixo na ordem do Art. 835 e NÃO substituem dinheiro na execução definitiva (Súmula 417, I, TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 882 da CLT, Art. 835, § 2º, CPC e OJ 59 da SDI-2 do TST",
        "textSnippet": "Garantia na Execução (Art. 882 CLT + Art. 835, § 2º CPC + OJ 59 SDI-2 TST): Fiança bancária e Seguro Garantia Judicial com ACRÉSCIMO DE 30% equiparam-se a DINHEIRO na gradação legal (inclusive para substituir dinheiro penhorado). Demais bens (imóveis/veículos) NÃO substituem dinheiro na execução definitiva (Súmula 417, I, TST)."
      }
    ],
    "jurisprudence": "OJ 59 SDI-2 e Súmula 417 do TST",
    "professorTip": "Fiança Bancária ou Seguro Garantia (+30%) = EQUIPARAM-SE A DINHEIRO na execução (Art. 835, § 2º CPC e OJ 59 SDI-2)! Imóvel/carro NÃO substitui dinheiro na definitiva!"
  },
  {
    "id": "mig_ptra_088",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Início da Contagem dos Juros na Execução e Atualização do Depósito Recursal",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Após a sentença condenatória trabalhista, o devedor efetua o depósito integral da condenação em dinheiro para garantia do juízo antes de julgar seus Embargos à Execução. Esse depósito judicial em dinheiro cessa a responsabilidade do executado pelos juros moratórios futuros caso o processo demore mais 2 anos para liberação do alvará?",
    "options": [
      {
        "letter": "A",
        "text": "O depósito judicial integral em dinheiro para garantia do juízo nunca cessa os encargos moratórios do devedor até o efetivo levantamento pelo credor."
      },
      {
        "letter": "B",
        "text": "Os juros moratórios trabalhistas incidem apenas sobre o salário nominal puro, excluindo a correção monetária."
      },
      {
        "letter": "C",
        "text": "Na condenação trabalhista contra a Fazenda Pública, os juros e correção seguem exatamente o Art. 39 da Lei 8.177/91 sem aplicação da EC 113/2021."
      },
      {
        "letter": "D",
        "text": "SIM, conforme entendimento pacificado do TST (e alinhado à jurisprudência trabalhista majoritária na Súmula/Tese do TST após superação parcial ou modulação, bem como Art. 9º, § 4º, da Lei 6.830/80 aplicado via Art. 889 CLT!), o depósito integral em dinheiro para garantia do juízo na execução faz CESSAR a responsabilidade do devedor pela atualização monetária e juros de mora futuros a partir do efetivo depósito à disposição do juízo, passando o valor depositado a render pelos índices bancários da conta judicial (salvo eventual diferença se depositado a menor)! Quanto aos juros na fase cognitiva, a Súmula 200 do TST (harmonizada com a ADC 58 STF -> SELIC a partir do ajuizamento!) prevê incidência desde a propositura da ação."
      }
    ],
    "correctAnswer": "D",
    "justification": "Garantia integral em dinheiro na execução (Art. 9º, § 4º LEF c/c Art. 889 CLT): cessa responsabilidade do executado por juros/correção futuros sobre o valor depositado. ADC 58 STF (particular): IPCA-E + juros legais pré-judicial e SELIC do ajuizamento. EC 113/21 (Fazenda Pública): taxa SELIC única.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 9º, § 4º, da Lei de Execuções Fiscais (Lei 6.830/80, aplicável subsidiariamente à execução trabalhista pelo Art. 889 CLT!), o depósito em dinheiro do valor integral faz cessar a responsabilidade pela atualização monetária e juros de mora do devedor!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 200 do TST, os juros de mora incidem sobre a importância da condenação já corrigida monetariamente (observando-se hoje a taxa SELIC única a partir do ajuizamento conforme ADC 58 do STF)!"
      },
      {
        "letter": "C",
        "explanation": "Para a Fazenda Pública, aplica-se regime constitucional próprio: hoje a EC 113/2021 (Art. 3º) determina a incidência única da taxa SELIC para atualização monetária, remuneração do capital e compensação da mora nas condenações que envolvam a Fazenda Pública!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 883 da CLT e STF ADC 58 / Súmula 200 TST",
        "textSnippet": "Garantia integral em dinheiro na execução (Art. 9º, § 4º LEF c/c Art. 889 CLT): cessa responsabilidade do executado por juros/correção futuros sobre o valor depositado. ADC 58 STF (particular): IPCA-E + juros legais pré-judicial e SELIC do ajuizamento. EC 113/21 (Fazenda Pública): taxa SELIC única."
      }
    ],
    "jurisprudence": "STF ADC 58 e Súmula 200 TST",
    "professorTip": "Depósito integral em dinheiro na execução = CESSA responsabilidade do devedor por juros futuros (Art. 9º, § 4º LEF)! Fazenda Pública = SELIC única (EC 113/21)!"
  },
  {
    "id": "mig_ptra_089",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso de Revista - Prequestionamento e Transcrição do Trecho (Art. 896, § 1º-A, CLT)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na interposição do Recurso de Revista ao TST, o advogado transcreve integralmente o acórdão regional de 18 páginas no início da peça (sem destacar ou delimitar o trecho exato da tese jurídica impugnada) e esquece de transcrever tanto o trecho da petição de Embargos de Declaração quanto o acórdão dos ED para alegar negativa de prestação jurisdicional. O RR será conhecido?",
    "options": [
      {
        "letter": "A",
        "text": "A transcrição integral de todo o acórdão do TRT sem nenhum destaque supre perfeitamente o requisito do Art. 896, § 1º-A, I, da CLT."
      },
      {
        "letter": "B",
        "text": "Na alegação de nulidade por negativa de prestação jurisdicional em Recurso de Revista, basta afirmar que o TRT foi omisso, dispensando qualquer transcrição."
      },
      {
        "letter": "C",
        "text": "Se a tese jurídica recorrida violar a lei desde a primeira vez em que surgiu no próprio acórdão do TRT, ainda assim é obrigatório opor Embargos de Declaração para prequestionamento."
      },
      {
        "letter": "D",
        "text": "NÃO! Pelo Art. 896, § 1º-A, da CLT e jurisprudência pacífica da SDI-1 do TST: (1) sob pena de NÃO CONHECIMENTO, é ônus da parte indicar o TRECHO exato da decisão recorrida que consubstancia o prequestionamento da controvérsia (inciso I — a transcrição INTEGRAL e sem destaques de todo o acórdão regional NÃO atende ao requisito legal!); e (2) ao suscitar preliminar de nulidade por NEGATIVA DE PRESTAÇÃO JURISDICIONAL (inciso IV), a parte deve transcrever na peça recursal tanto o TRECHO DOS EMBARGOS DE DECLARAÇÃO em que pediu o pronunciamento quanto o trecho da DECISÃO REGIONAL que rejeitou os embargos!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 896, § 1º-A CLT (ônus no RR sob pena de não conhecimento): (I) indicar o trecho específico prequestionado (transcrição integral sem destaque não vale); (II/III) impugnar analiticamente cada fundamento; (IV) na negativa de prestação jurisdicional, transcrever trecho dos ED + decisão dos ED. OJ 119 SDI-1 = violação nascida no próprio acórdão dispensa prequestionamento.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A SDI-1 do TST consolidou que a transcrição integral/genérica do acórdão sem destaque específico da tese atacada descumpre o Art. 896, § 1º-A, I, salvo decisão extremamente sucinta de poucos parágrafos!"
      },
      {
        "letter": "B",
        "explanation": "O inciso IV do § 1º-A do Art. 896 CLT exige expressamente a transcrição do trecho dos EMBARGOS DE DECLARAÇÃO + do trecho do ACÓRDÃO que os julgou!"
      },
      {
        "letter": "C",
        "explanation": "Pela OJ 119 da SDI-1 do TST, é INEXIGÍVEL o prequestionamento quando a violação indicada houver nascido NA PRÓPRIA DECISÃO RECORRIDA (e pela OJ 118 SDI-1, basta tese explícita sobre a matéria, sendo desnecessária referência expressa ao número do dispositivo legal)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 896, § 1º-A, I a IV, da CLT e Súmula 297 e OJ 118 SDI-1 TST",
        "textSnippet": "Art. 896, § 1º-A CLT (ônus no RR sob pena de não conhecimento): (I) indicar o trecho específico prequestionado (transcrição integral sem destaque não vale); (II/III) impugnar analiticamente cada fundamento; (IV) na negativa de prestação jurisdicional, transcrever trecho dos ED + decisão dos ED. OJ 119 SDI-1 = violação nascida no próprio acórdão dispensa prequestionamento."
      }
    ],
    "jurisprudence": "OJs 118 e 119 SDI-1 do TST",
    "professorTip": "RR (Art. 896, § 1º-A): Transcrever acórdão inteiro SEM destaque = NÃO conhece! Negativa de prestação jurisdicional = transcreve ED + acórdão dos ED (inc. IV)! Violação nascida no próprio acórdão = dispensa prequestionamento (OJ 119)!"
  },
  {
    "id": "mig_ptra_090",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Depósito Prévio em Agravo de Instrumento no TST e Preclusão Parcial (IN 40/2016 TST)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "O Presidente do TRT analisa a admissibilidade do Recurso de Revista da empresa, que contém dois temas (Horas Extras e Dano Moral): admite o recurso apenas quanto às Horas Extras e NEGA SEGUIMENTO quanto ao Dano Moral. A empresa NÃO interpõe Agravo de Instrumento contra o capítulo denegado (Dano Moral) em 8 dias, aguardando o julgamento no TST. O TST poderá analisar o tema Dano Moral?",
    "options": [
      {
        "letter": "A",
        "text": "Admitido o Recurso de Revista por apenas um dos temas pelo Presidente do TRT, todo o recurso sobe integralmente ao TST pela antiga Súmula 285 do TST."
      },
      {
        "letter": "B",
        "text": "Se o Presidente do TRT silenciar totalmente sobre um dos temas do Recurso de Revista no despacho de admissibilidade, o TST o apreciará diretamente de ofício."
      },
      {
        "letter": "C",
        "text": "NÃO! Ocorreu PRECLUSÃO quanto ao capítulo denegado! Pela Instrução Normativa nº 40/2016 do TST (Art. 1º — alinhada ao cancelamento da Súmula 285 TST!), admitido apenas parcialmente o Recurso de Revista, constitui ÔNUS DA PARTE impugnar, mediante AGRAVO DE INSTRUMENTO (em 8 dias úteis), o capítulo denegatório da decisão, SOB PENA DE PRECLUSÃO! (E se houver omissão total do despacho sobre algum capítulo, cabe oposição de Embargos de Declaração ao Presidente do TRT em 5 dias, sob pena de preclusão — § 1º!)."
      },
      {
        "letter": "D",
        "text": "No Agravo de Instrumento interposto contra despacho que trancou o Recurso de Revista, a empresa é dispensada de recolher qualquer depósito recursal mesmo sem ter atingido o valor total da condenação."
      }
    ],
    "correctAnswer": "C",
    "justification": "IN 40/2016 TST (cancelamento da Súmula 285): admissibilidade parcial do RR -> capítulo denegado exige Agravo de Instrumento (8d) sob pena de PRECLUSÃO; capítulo omitido no despacho exige Embargos de Declaração (5d) sob pena de preclusão. AI = depósito de 50% do recurso trancado (Art. 899, § 7º), dispensado se já garantido o valor da condenação ou isento.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 285 do TST foi CANCELADA em 2016 e substituída pela IN 40/2016 do TST: capítulo denegado exige Agravo de Instrumento em 8 dias, sob pena de PRECLUSÃO!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 1º, § 1º, da IN 40/2016 do TST, se houver omissão no juízo de admissibilidade sobre um ou mais temas, cumpre à parte opor EMBARGOS DE DECLARAÇÃO em 5 dias ao Presidente do TRT para supri-la, sob pena de preclusão!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 899, § 7º, da CLT, no ato de interposição do Agravo de Instrumento, o depósito recursal corresponderá a 50% (CINQUENTA POR CENTO) do valor do depósito do recurso ao qual se pretende destrancar (dispensado apenas se o juízo já estiver integralmente garantido — Súmula 128, I, TST — ou nos casos de isenção do § 10 e se destranca RR por contrariedade à Súmula/OJ no § 8º)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 899, § 7º, da CLT e IN 40/2016 do TST",
        "textSnippet": "IN 40/2016 TST (cancelamento da Súmula 285): admissibilidade parcial do RR -> capítulo denegado exige Agravo de Instrumento (8d) sob pena de PRECLUSÃO; capítulo omitido no despacho exige Embargos de Declaração (5d) sob pena de preclusão. AI = depósito de 50% do recurso trancado (Art. 899, § 7º), dispensado se já garantido o valor da condenação ou isento."
      }
    ],
    "jurisprudence": "IN 40/2016 do TST",
    "professorTip": "IN 40 TST (ex-Súmula 285): TRT admitiu RR só em parte -> parte recusada exige AI (8d) ou PRECLUI! Parte omitida no despacho -> ED (5d) ou PRECLUI!"
  },
  {
    "id": "mig_ptra_091",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Deserção por Erro na Guia, Ausência de Autenticação e Recolhimento em Conta Errada",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Na interposição de Recurso Ordinário dentro do prazo de 8 dias úteis, a empresa efetua o pagamento exato do depósito recursal em dinheiro via guia GFIP/Depósito Judicial Trabalhista, porém comete erro material no preenchimento do número do processo na guia (ou junta comprovante bancário legível sem autenticação mecânica legível, ou usa guia errada mas o valor entrou nos autos). O recurso deve ser declarado deserto de imediato?",
    "options": [
      {
        "letter": "A",
        "text": "Qualquer erro de dígito no número do processo ou código de receita na guia de custas gera deserção automática insanável do recurso trabalhista."
      },
      {
        "letter": "B",
        "text": "Caso o recorrente pague as custas e o depósito no 9º dia útil (um dia após o fim do prazo recursal), poderá convalidar o atraso mediante intimação de 5 dias."
      },
      {
        "letter": "C",
        "text": "NÃO de imediato! Pelo Art. 1.007, § 7º, do CPC (aplicável ao Processo do Trabalho pela IN 39/2016 TST) e jurisprudência atualizada da SDI-1 do TST (superando o rigor excessivo da antiga OJ 158/Súmula 426 quando há mera irregularidade formal sanável!), o equívoco no preenchimento da guia de custas ou depósito recursal NÃO implica a pena de deserção imediata: cabe ao relator INTIMAR O RECORRENTE para, no prazo de 5 DIAS, sanar o vício (juntando comprovação da vinculação ao processo ou retificação)! Só ocorre deserção imediata se o recorrente NÃO realizou depósito/pagamento nenhum no prazo recursal (OJ 140 SDI-1) ou se, intimado em 5 dias, permanecer inerte!"
      },
      {
        "letter": "D",
        "text": "Se a empresa interpuser dois recursos sucessivos sobre a mesma condenação após já ter garantido 100% do valor total da condenação no primeiro depósito, precisa depositar novamente o teto no segundo recurso."
      }
    ],
    "correctAnswer": "C",
    "justification": "Preparo Recursal: Súmula 245 = pagamento e comprovação no prazo recursal (8d); Súmula 128, I = atingiu valor da condenação não deposita mais; Art. 1.007, § 7º CPC = erro no preenchimento da guia -> intima em 5 dias para sanar; OJ 140 = pago a menor -> complementa em 5 dias / zero pago -> deserção imediata.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 1.007, § 7º, do CPC e Art. 10 da IN 39/16 TST, equívoco no preenchimento da guia de preparo não gera deserção imediata: intima-se em 5 dias para sanar o vício (instrumentalidade das formas)!"
      },
      {
        "letter": "B",
        "explanation": "A Súmula 245 do TST exige que o depósito recursal e as custas sejam feitos e comprovados DENTRO DO PRAZO ALUSIVO AO RECURSO — o pagamento extemporâneo (fora dos 8 dias) equivale à ausência de preparo no prazo e gera deserção imediata!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 128, I, do TST, atingido o valor integral da condenação arbitrada, NENHUM depósito mais é exigido para qualquer recurso subsequente!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 1.007, § 7º, CPC, Súmula 245 e OJs 140 e 158 SDI-1 TST",
        "textSnippet": "Preparo Recursal: Súmula 245 = pagamento e comprovação no prazo recursal (8d); Súmula 128, I = atingiu valor da condenação não deposita mais; Art. 1.007, § 7º CPC = erro no preenchimento da guia -> intima em 5 dias para sanar; OJ 140 = pago a menor -> complementa em 5 dias / zero pago -> deserção imediata."
      }
    ],
    "jurisprudence": "Súmulas 128 e 245 e OJ 140 SDI-1 TST",
    "professorTip": "Erro na guia (Art. 1.007, § 7º CPC) = intima em 5 dias p/ consertar! Atingiu valor da condenação = NÃO precisa mais depositar (Súmula 128, I)! Pagamento fora do prazo de 8d = deserto (Súmula 245)!"
  },
  {
    "id": "mig_ptra_092",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Audiência Una vs. Fracionada e Princípio da Identidade Física do Juiz (Súmula 136 TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na Vara do Trabalho, um Juiz Substituto preside toda a audiência de instrução colhendo depoimentos pessoais e oitiva de testemunhas, mas entra em férias ou é removido antes de proferir a sentença, que acaba prolatada por outro Juiz Titular que não participou da audiência. A sentença é nula por violação ao princípio da identidade física do juiz?",
    "options": [
      {
        "letter": "A",
        "text": "Por força da Súmula 136 do TST, o juiz que encerra a audiência de instrução fica absolutamente vinculado aos autos e obrigado a proferir a sentença mesmo após remoção para outra Vara."
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho, a audiência deve ser obrigatoriamente fracionada em três atos distintos (conciliação, defesa e instrução), sob pena de nulidade."
      },
      {
        "letter": "C",
        "text": "NÃO! Pela Súmula 136 do TST — e hoje reforçado também pelo próprio CPC/2015, que sequer reproduziu o antigo Art. 132 do CPC/73! — NÃO se aplica às Varas do Trabalho o princípio da identidade física do juiz! Assim, qualquer magistrado em exercício regular na Vara do Trabalho pode proferir a sentença validamente com base nas provas registradas em ata/gravação, ainda que não tenha colhido a instrução!"
      },
      {
        "letter": "D",
        "text": "Na audiência trabalhista, a defesa oral em sala tem duração máxima de 10 minutos e as razões finais orais têm duração de 20 minutos."
      }
    ],
    "correctAnswer": "C",
    "justification": "Audiência na CLT: regra = UNA e contínua (Art. 849); defesa oral = 20 minutos (Art. 847 — facultada defesa eletrônica prévia pelo PJe até audiência); razões finais orais = 10 minutos (Art. 850); Súmula 136 TST = NÃO se aplica o princípio da identidade física do juiz às Varas do Trabalho.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 136 do TST diz exatamente o contrário: \"Não se aplica às Varas do Trabalho o princípio da identidade física do juiz\"!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 849 da CLT, a regra na Justiça do Trabalho é a AUDIÊNCIA UNA E CONTÍNUA (conciliação, defesa, instrução, razões finais e sentença num só ato) — embora na prática do rito ordinário possa ser fracionada por força maior ou conveniência judicial (Art. 849 parte final)!"
      },
      {
        "letter": "D",
        "explanation": "Invertem-se os tempos na CLT! Pelo Art. 847 da CLT, o reclamado tem 20 (VINTE) MINUTOS para aduzir sua defesa oral após leitura da reclamação (se não apresentar escrita antes pelo PJe — § único!); e pelo Art. 850 da CLT, encerrada a instrução, cada parte tem 10 (DEZ) MINUTOS para razões finais orais!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 847–852 da CLT, Art. 132 CPC/73 (revogado) e Súmula 136 do TST",
        "textSnippet": "Audiência na CLT: regra = UNA e contínua (Art. 849); defesa oral = 20 minutos (Art. 847 — facultada defesa eletrônica prévia pelo PJe até audiência); razões finais orais = 10 minutos (Art. 850); Súmula 136 TST = NÃO se aplica o princípio da identidade física do juiz às Varas do Trabalho."
      }
    ],
    "jurisprudence": "Súmula nº 136 do TST",
    "professorTip": "Súmula 136 TST = NÃO existe identidade física do juiz na Vara do Trabalho! Defesa oral = 20 min (Art. 847) | Razões finais orais = 10 min (Art. 850)!"
  },
  {
    "id": "mig_ptra_093",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Reclamação Trabalhista com Chamamento do Responsável Subsidiário e Ordem de Execução",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa prestadora de serviços (devedora principal) e empresa tomadora privada (condenada subsidiariamente na sentença) são executadas na Justiça do Trabalho. Frustrada a tentativa inicial de bloqueio SISBAJUD contra a prestadora de serviços, o exequente requer o imediato direcionamento da execução contra a tomadora subsidiária — que alega deverem ser esgotados antes os bens pessoais dos sócios da prestadora! Procede a tese da tomadora?",
    "options": [
      {
        "letter": "A",
        "text": "Para executar o devedor subsidiário que consta na sentença, o juiz do trabalho deve obrigatoriamente instaurar antes o IDPJ contra todos os sócios da devedora principal."
      },
      {
        "letter": "B",
        "text": "Mesmo que a tomadora de serviços não tenha participado da fase de conhecimento, pode ser incluída diretamente na execução como responsável subsidiária."
      },
      {
        "letter": "C",
        "text": "NÃO! Pela jurisprudência pacífica do TST, na execução trabalhista, frustrados os meios executórios contra a DEVEDORA PRINCIPAL (prestadora de serviços), a execução redireciona-se DIRETAMENTE contra a DEVEDORA SUBSIDIÁRIA (tomadora) constante do título executivo — NÃO se exigindo o prévio esgotamento da execução contra os SÓCIOS da devedora principal (desconsideração da personalidade jurídica em 3º grau), pois ambos são devedores subsidiários e o credor trabalhista tem prioridade alimentar!"
      },
      {
        "letter": "D",
        "text": "A devedora subsidiária que quita o débito na execução trabalhista não possui direito de regresso contra a prestadora na Justiça Comum."
      }
    ],
    "correctAnswer": "C",
    "justification": "Execução do Responsável Subsidiário (Súmula 331, IV, TST): exige que o tomador tenha participado da fase de conhecimento e conste do título; frustrada a execução contra a devedora principal (PJ), executa-se diretamente a tomadora subsidiária sem exigir prévia execução contra sócios da principal.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O TST consolidou o entendimento de que o benefício de ordem exige esgotar apenas os bens da devedora principal (pessoa jurídica prestadora), não havendo benefício de ordem entre a devedora subsidiária e os sócios da principal!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 331, IV, do TST, o inadimplemento das obrigações trabalhistas implica a responsabilidade subsidiária do tomador dos serviços quanto àquelas obrigações, DESDE QUE HAJA PARTICIPADO DA RELAÇÃO PROCESSUAL E CONSTE TAMBÉM DO TÍTULO EXECUTIVO JUDICIAL!"
      },
      {
        "letter": "D",
        "explanation": "Pago o débito na execução trabalhista, a tomadora subsidiária sub-roga-se e pode promover ação regressiva contra a prestadora de serviços na Justiça Comum (civil/empresarial)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 5º-A, § 5º, Lei nº 6.019/74, Súmula 331 TST e Benefício de Ordem",
        "textSnippet": "Execução do Responsável Subsidiário (Súmula 331, IV, TST): exige que o tomador tenha participado da fase de conhecimento e conste do título; frustrada a execução contra a devedora principal (PJ), executa-se diretamente a tomadora subsidiária sem exigir prévia execução contra sócios da principal."
      }
    ],
    "jurisprudence": "Súmula 331, IV, do TST",
    "professorTip": "Tomador subsidiário (Súmula 331, IV): precisa constar no título! Frustrada a prestadora PJ, executa-se DIRETO a tomadora (NÃO precisa esgotar sócios da prestadora antes)!"
  },
  {
    "id": "mig_ptra_094",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Suspensão da Execução e Prescrição Intercorrente (Art. 11-A CLT e Art. 921 CPC)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em execução trabalhista definitiva iniciada em 2021, não são encontrados bens penhoráveis da executada após diligências pelo SISBAJUD, RENAJUD e INFOJUD. O juiz intima o exequente para indicar meios concretos de prosseguimento em 10 dias, mas o exequente permanece inerte sem requerer nenhuma diligência válida. Quando começa a correr o prazo da prescrição intercorrente de 2 anos?",
    "options": [
      {
        "letter": "A",
        "text": "A prescrição intercorrente trabalhista de 2 anos aplica-se retroativamente inclusive a execuções arquivadas provisoriamente no ano de 2014."
      },
      {
        "letter": "B",
        "text": "Se o exequente não encontrar bens da executada apesar de cumprir todas as determinações e requerer diligências tempestivas, o prazo de 2 anos corre contra ele automaticamente desde a primeira tentativa frustrada."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 11-A, § 1º, da CLT (inserido pela Reforma Trabalhista — e regulamentado pela IN 41/2018 do TST, Art. 2º, que veda aplicação retroativa antes de 11/11/2017!), a fluência do prazo prescricional intercorrente de 2 ANOS inicia-se quando o exequente DEIXA DE CUMPRIR DETERMINAÇÃO JUDICIAL no curso da execução (após intimação específica sob cominação — e observando-se pelo CPC/Art. 921 a suspensão de 1 ano quando não encontrados bens sem desídia do credor, segundo adaptação da jurisprudência trabalhista e Recomendação GCGJT nº 3/2018)! Declarada a prescrição intercorrente (inclusive de ofício — § 2º), cabe Agravo de Petição em 8 dias úteis!"
      },
      {
        "letter": "D",
        "text": "Da sentença do juiz da execução que pronuncia de ofício a prescrição intercorrente e extingue a execução cabe Recurso Ordinário."
      }
    ],
    "correctAnswer": "C",
    "justification": "Prescrição Intercorrente (Art. 11-A CLT + IN 41/18): prazo de 2 anos; inicia quando exequente deixa de cumprir determinação judicial no curso da execução (apenas para determinações pós-11/11/2017); pode ser requerida ou declarada de ofício em qualquer grau (§ 2º); desafia Agravo de Petição (8 dias).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 2º da IN 41/2018 do TST, o fluxo da prescrição intercorrente conta-se apenas a partir do descumprimento de determinações judiciais ocorridas APÓS 11/11/2017 (vigência da Lei 13.467/17)!"
      },
      {
        "letter": "B",
        "explanation": "O Art. 11-A, § 1º, CLT exige que o exequente deixe de cumprir determinação judicial no curso da execução (inércia injustificada após intimação judicial específica)!"
      },
      {
        "letter": "D",
        "explanation": "Tratando-se de decisão extintiva proferida na fase de EXECUÇÃO, o recurso cabível é o AGRAVO DE PETIÇÃO para o TRT no prazo de 8 dias úteis (Art. 897, \"a\", CLT)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 11-A da CLT e Art. 921, §§ 1º a 5º, do CPC",
        "textSnippet": "Prescrição Intercorrente (Art. 11-A CLT + IN 41/18): prazo de 2 anos; inicia quando exequente deixa de cumprir determinação judicial no curso da execução (apenas para determinações pós-11/11/2017); pode ser requerida ou declarada de ofício em qualquer grau (§ 2º); desafia Agravo de Petição (8 dias)."
      }
    ],
    "jurisprudence": "IN 41/2018 do TST",
    "professorTip": "Prescrição Intercorrente (Art. 11-A): 2 ANOS contando do descumprimento de ordem judicial (pós-11/11/2017)! Pode de ofício! Recurso = Agravo de Petição!"
  },
  {
    "id": "mig_ptra_095",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Custas na Execução Trabalhista (Art. 789-A CLT) - Responsabilidade e Momento do Pagamento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Na fase de execução trabalhista, a empresa executada opõe Embargos à Execução, realiza leilão de bem penhorado e perde ao final. Quem responde pelas custas na fase de execução trabalhista (Art. 789-A CLT), elas são pagas antecipadamente ao interpor Embargos à Execução e Agravo de Petição?",
    "options": [
      {
        "letter": "A",
        "text": "Para interpor Agravo de Petição contra decisão em Embargos à Execução, o executado deve pagar previamente custas de 2% sob pena de deserção."
      },
      {
        "letter": "B",
        "text": "O exequente que perde Impugnação à Sentença de Liquidação é condenado ao pagamento das custas fixas de R$ 44,26 do Art. 789-A."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 789-A, caput, da CLT, no processo de execução são devidas custas (valores fixos previstos nos incisos I a IX, ex.: R$ 44,26 para agravo de petição e R$ 44,26 para embargos à execução/impugnação — sendo de 5% com mínimo R$ 10,64 e teto de R$ 1.915,38 nos atos de arrematação/adjudicação/remição!), de responsabilidade EXCLUSIVA DO EXECUTADO, e pagas AO FINAL (logo, NÃO se exige recolhimento prévio de custas nem para opor Embargos à Execução nem para interpor Agravo de Petição — Súmula/jurisprudência pacífica do TST baseada no Art. 789-A)!"
      },
      {
        "letter": "D",
        "text": "Na execução trabalhista não existem emolumentos nem custas sobre carta de arrematação ou adjudicação."
      }
    ],
    "correctAnswer": "C",
    "justification": "Custas na Execução (Art. 789-A CLT): tabelas fixas (ex.: AP = R$ 44,26; Embargos = R$ 44,26; arrematação/adjudicação = 5% até teto); SEMPRE pagas pelo EXECUTADO e AO FINAL (não condicionam conhecimento do Agravo de Petição).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Regra clássica de ouro da execução trabalhista (Art. 789-A CLT)! Diferente da fase de conhecimento (2% pagas no prazo do recurso), na EXECUÇÃO as custas do Art. 789-A (valores fixos como R$ 44,26 para AP) são sempre de responsabilidade do EXECUTADO e pagas AO FINAL (jamais causam deserção prévia do Agravo de Petição — salvo se ainda houver custas de conhecimento pendentes ou não garantido o juízo)!"
      },
      {
        "letter": "B",
        "explanation": "O caput do Art. 789-A da CLT estabelece expressamente que as custas da execução são \"sempre de responsabilidade do executado e pagas ao final\"!"
      },
      {
        "letter": "D",
        "explanation": "Os incisos I a IV do Art. 789-A preveem custas de 5% (mínimo R$ 10,64, máximo R$ 1.915,38) sobre o respectivo valor nos autos de arrematação, adjudicação e remição!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 789-A da CLT",
        "textSnippet": "Custas na Execução (Art. 789-A CLT): tabelas fixas (ex.: AP = R$ 44,26; Embargos = R$ 44,26; arrematação/adjudicação = 5% até teto); SEMPRE pagas pelo EXECUTADO e AO FINAL (não condicionam conhecimento do Agravo de Petição)."
      }
    ],
    "professorTip": "Custas na Execução (Art. 789-A): responsabilidade SEMPRE do EXECUTADO e pagas AO FINAL (Agravo de Petição NÃO tem custas prévias para não ser deserto)!"
  },
  {
    "id": "mig_ptra_096",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Regras da Prova Documental - Impugnação, Autenticação e Declaração pelo Advogado (Art. 830 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na reclamação trabalhista, o advogado do reclamante ou da reclamada junta aos autos cópias simples de documentos (recibos, atestados, sentenças paradigmas) sem autenticação em cartório, declarando sua autenticidade sob sua responsabilidade pessoal (ou sem oposição formal da parte contrária). O documento tem validade probatória?",
    "options": [
      {
        "letter": "A",
        "text": "Na Justiça do Trabalho, qualquer cópia de documento particular juntada sem autenticação prévia por tabelião de notas é nula de pleno direito e deve ser desentranhada."
      },
      {
        "letter": "B",
        "text": "Se a parte contrária impugnar a autenticidade da cópia juntada, o juiz decreta de imediato a falsidade documental sem dar prazo para exibição do original."
      },
      {
        "letter": "C",
        "text": "SIM! Pelo Art. 830 da CLT (e Art. 425, IV, CPC), o documento em cópia oferecido para prova poderá ser declarado AUTÊNTICO PELO PRÓPRIO ADVOGADO, sob sua responsabilidade pessoal! E pelo parágrafo único do Art. 830 CLT, impugnada a autenticidade da cópia, a parte que a produziu será intimada para apresentar cópias devidamente autenticadas ou o original, cabendo ao serventuário competente proceder à conferência e certificação da conformidade entre esses documentos!"
      },
      {
        "letter": "D",
        "text": "A declaração de autenticidade pelo advogado do Art. 830 CLT é incompatível com a juntada de acórdãos para comprovação de divergência em Recurso de Revista."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 830 CLT: advogado pode declarar autenticidade de cópias sob sua responsabilidade pessoal; impugnada a autenticidade, intima-se a parte para apresentar original ou cópia autenticada para conferência (§ único).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 830 da CLT autoriza expressamente que o próprio advogado declare a autenticidade da cópia sob sua responsabilidade pessoal (e nos autos eletrônicos do PJe toda peça/documento enviado com assinatura digital presume-se autêntico até arguição de falsidade)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo parágrafo único do Art. 830 da CLT, impugnada a autenticidade da cópia, a parte produtora deve ser INTIMADA para exibir o original ou cópias autenticadas para conferência!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 337, I e IV, do TST, o advogado pode declarar a autenticidade de acórdão paradigma extraído de repositório oficial/internet indicando URL e data, ou declarar autenticidade sob sua responsabilidade nos termos do Art. 830 CLT!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 830 da CLT",
        "textSnippet": "Art. 830 CLT: advogado pode declarar autenticidade de cópias sob sua responsabilidade pessoal; impugnada a autenticidade, intima-se a parte para apresentar original ou cópia autenticada para conferência (§ único)."
      }
    ],
    "jurisprudence": "Súmula nº 337 do TST",
    "professorTip": "Art. 830 CLT: Advogado pode declarar autenticidade da cópia sob sua responsabilidade pessoal! Se impugnada, intima para exibir original!"
  },
  {
    "id": "mig_ptra_097",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Deserção vs. Depósito Recursal por Entidades Sem Fins Lucrativos e Sócio Retirante na Execução",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Associação civil sem fins lucrativos (NÃO certificada como entidade filantrópica!) recorre ordinariamente de condenação de R$ 20.000,00 sem recolher nenhum valor de depósito recursal, alegando isenção total do Art. 899, § 10, da CLT. A isenção total do § 10 aplica-se a toda entidade sem fins lucrativos?",
    "options": [
      {
        "letter": "A",
        "text": "Toda entidade sem fins lucrativos é totalmente isenta do depósito recursal e das custas processuais na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "As entidades filantrópicas também são obrigadas a garantir integralmente o juízo para poder opor Embargos à Execução no Art. 884 da CLT."
      },
      {
        "letter": "C",
        "text": "NÃO! Cuidado máximo com a distinção exata dos §§ 9º e 10 do Art. 899 da CLT! As entidades SEM FINS LUCRATIVOS em geral (como clubes, associações recreativas, sindicatos) têm apenas REDUÇÃO DE 50% do depósito recursal (§ 9º — junto com ME, EPP, MEI e empregador doméstico)! Já a ISENÇÃO TOTAL (100%) do depósito recursal do § 10 aplica-se APENAS às entidades FILANTRÓPICAS (certificadas como beneficentes de assistência social), aos beneficiários da justiça gratuita e às empresas em recuperação judicial! Como não recolheu os 50% nem custas, o recurso é DESERTO!"
      },
      {
        "letter": "D",
        "text": "O microempreendedor individual (MEI) e a microempresa (ME) são totalmente isentos de depósito recursal pelo Art. 899, § 10, CLT."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 899 CLT: Redução 50% depósito (§ 9º) = entidades sem fins lucrativos, empregadores domésticos, MEI, ME, EPP. Isenção 100% depósito (§ 10) = beneficiários da justiça gratuita, entidades FILANTRÓPICAS, empresas em recuperação judicial. Execução (Art. 884, § 6º): filantrópicas e seus diretores dispensam garantia p/ embargar.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferença essencial dos §§ 9º e 10 do Art. 899 CLT: Entidade SEM FINS LUCRATIVOS = paga 50% do depósito (§ 9º) e paga custas normais; Entidade FILANTRÓPICA = ISENTA do depósito recursal (§ 10) e dispensa garantia na execução (Art. 884, § 6º)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 884, § 6º, da CLT (inserido pela Reforma Trabalhista), a exigência da garantia ou penhora para opor Embargos à Execução NÃO se aplica às entidades filantrópicas e/ou àqueles que compõem ou compuseram a diretoria dessas instituições!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 899, § 9º, CLT, o MEI, a ME, a EPP e o empregador doméstico têm redução de 50% no depósito recursal (não isenção total, salvo se beneficiários da justiça gratuita)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 10-A e Art. 899, §§ 9º e 10, da CLT",
        "textSnippet": "Art. 899 CLT: Redução 50% depósito (§ 9º) = entidades sem fins lucrativos, empregadores domésticos, MEI, ME, EPP. Isenção 100% depósito (§ 10) = beneficiários da justiça gratuita, entidades FILANTRÓPICAS, empresas em recuperação judicial. Execução (Art. 884, § 6º): filantrópicas e seus diretores dispensam garantia p/ embargar."
      }
    ],
    "professorTip": "Depósito 50% (§ 9º): Sem fins lucrativos, Doméstico, MEI, ME, EPP! Isento 100% (§ 10): Justiça gratuita, FILANTRÓPICA, Recuperação Judicial! Filantrópica embarga execução SEM garantia (§ 6º)!"
  },
  {
    "id": "mig_ptra_098",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Processual do Trabalho",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Reclamação Trabalhista Plúrima, Litisconsórcio Ativo e Desmembramento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Cinquenta empregados da mesma fábrica e do mesmo setor ajuízam uma única reclamação trabalhista plúrima contra o mesmo empregador por identidade de matéria (adicional de periculosidade). O juiz do trabalho pode limitar o número de reclamantes e desmembrar a ação? E como ficam as custas e a alçada na ação plúrima?",
    "options": [
      {
        "letter": "A",
        "text": "Na Justiça do Trabalho é proibido o litisconsórcio ativo facultativo entre empregados da mesma empresa."
      },
      {
        "letter": "B",
        "text": "O juiz do trabalho não pode limitar o número de autores numa reclamação plúrima com 80 reclamantes nem determinar o desmembramento."
      },
      {
        "letter": "C",
        "text": "SIM! Pelo Art. 842 da CLT, sendo várias as reclamações e havendo identidade de matéria, poderão ser acumuladas num só processo se se tratar de empregados da mesma empresa ou estabelecimento (litisconsórcio ativo facultativo); CONTUDO, pelo Art. 113, § 1º, do CPC (aplicado subsidiariamente via Art. 769 CLT), o juiz poderá LIMITAR o litisconsórcio facultativo quanto ao número de litigantes quando este comprometer a rápida solução do litígio ou dificultar a defesa/cumprimento da sentença (desmembrando em ações menores)! E quanto ao rito/alçada (Art. 2º Lei 5.584/70), verifica-se o valor GLOBAL da soma de todos os pedidos ou individual? Atenção à Súmula/OJ do TST: na reclamação plúrima, a ALÇADA é considerada em relação a CADA RECLAMANTE individualmente (ou soma para rito sumaríssimo? Cuidado: no sumaríssimo verifica-se a soma total da causa até 40 SM; na alçada da Lei 5.584/70, se cada reclamante pede < 2 SM, analisa-se o valor total atribuído à reclamação plúrima conforme OJ/jurisprudência se cumulação ou individual)!"
      },
      {
        "letter": "D",
        "text": "Em caso de reclamação trabalhista plúrima com 5 autores, cada parte poderá ouvir até 15 testemunhas (3 por autor)."
      }
    ],
    "correctAnswer": "C",
    "justification": "Reclamação Plúrima (Art. 842 CLT): litisconsórcio ativo facultativo por identidade de matéria na mesma empresa/estabelecimento; juiz pode limitar e desmembrar se comprometer celeridade/defesa (Art. 113, § 1º CPC). Testemunhas: 3 (ordinário) ou 2 (sumaríssimo) para a prova dos fatos comuns.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 842 da CLT autoriza expressamente a reclamação plúrima (acumulação num só processo) quando houver identidade de matéria entre empregados da mesma empresa ou estabelecimento!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 113, § 1º, do CPC (aplicável à JT por força do Art. 769 CLT), o juiz pode limitar o litisconsórcio facultativo multitudinário sempre que comprometer a rápida solução do litígio ou a defesa!"
      },
      {
        "letter": "D",
        "explanation": "Em regra, no litisconsórcio ativo plúrimo, o limite de 3 testemunhas (ordinário) ou 2 testemunhas (sumaríssimo) aplica-se AO PROCESSO / POLO ATIVO como um todo (salvo fatos estritamente individuais não comuns em que o juiz amplie excepcionalmente)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 842 da CLT e Art. 113, § 1º, do CPC",
        "textSnippet": "Reclamação Plúrima (Art. 842 CLT): litisconsórcio ativo facultativo por identidade de matéria na mesma empresa/estabelecimento; juiz pode limitar e desmembrar se comprometer celeridade/defesa (Art. 113, § 1º CPC). Testemunhas: 3 (ordinário) ou 2 (sumaríssimo) para a prova dos fatos comuns."
      }
    ],
    "professorTip": "Reclamação Plúrima (Art. 842 CLT): permitida na mesma empresa/matéria, MAS juiz pode desmembrar se atrapalhar defesa/celeridade (Art. 113, § 1º CPC)!"
  },
  {
    "id": "mig_ptra_099",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso Ordinário vs. Remessa Necessária quando Há Pedido Ilíquido contra Fazenda Pública",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Sentença trabalhista condena Município de pequeno porte ao pagamento de diferenças salariais de natureza ilíquida (a apurar em liquidação de sentença, sem valor certo fixado na sentença) com fundamento em questão fática não sumulada pelo TST nem pelo STF. A sentença está sujeita ao reexame necessário (remessa necessária)?",
    "options": [
      {
        "letter": "A",
        "text": "Mesmo nas sentenças ilíquidas contra Municípios, presume-se sempre que o valor é inferior a 100 salários mínimos, dispensando a remessa necessária."
      },
      {
        "letter": "B",
        "text": "Na remessa necessária trabalhista, o TRT pode agravar a condenação imposta à Fazenda Pública mesmo sem recurso do reclamante."
      },
      {
        "letter": "C",
        "text": "SIM! Pela Súmula 490 do STJ e jurisprudência pacífica do TST (interpretação da Súmula 303, I, do TST c/c Art. 496, § 3º, do CPC): a dispensa da remessa necessária fundada nos pisos de alçada (1.000 SM União / 500 SM Estados / 100 SM Municípios) pressupõe CONDENAÇÃO LÍQUIDA OU PROVEITO ECONÔMICO CERTO abaixo daqueles limites — logo, sendo a condenação contra a Fazenda Pública ILÍQUIDA (e não estando amparada em súmula/repetitivo), SUBMETE-SE À REMESSA NECESSÁRIA obrigatória ao TRT!"
      },
      {
        "letter": "D",
        "text": "Se o juiz deixar de submeter a sentença sujeita a remessa necessária ao TRT, ela transita em julgado normalmente após 16 dias úteis."
      }
    ],
    "correctAnswer": "C",
    "justification": "Remessa Necessária Ilíquida: sentença ilíquida contra Fazenda Pública (fora das exceções de súmula/repetitivo) exige remessa necessária (Súmula 490 STJ); vedada reformatio in pejus contra Fazenda (Súmula 45 STJ); sem reexame não há trânsito em julgado (Súmula 423 STF).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela Súmula 490 do STJ e jurisprudência do TST, a dispensa de remessa necessária por valor não se aplica às sentenças ILÍQUIDAS!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 45 do STJ (princípio da proibição da reformatio in pejus), no reexame necessário é DEFESO ao Tribunal agravar a condenação imposta à Fazenda Pública!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 423 do STF e Art. 496, § 1º, CPC, NÃO transita em julgado a sentença sujeita ao duplo grau obrigatório enquanto não apreciada pelo Tribunal!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 496, § 3º, CPC, Súmula 303 do TST e Súmula 490 do STJ",
        "textSnippet": "Remessa Necessária Ilíquida: sentença ilíquida contra Fazenda Pública (fora das exceções de súmula/repetitivo) exige remessa necessária (Súmula 490 STJ); vedada reformatio in pejus contra Fazenda (Súmula 45 STJ); sem reexame não há trânsito em julgado (Súmula 423 STF)."
      }
    ],
    "jurisprudence": "Súmula 303 TST, Súmulas 45/490 STJ e Súmula 423 STF",
    "professorTip": "Sentença ILÍQUIDA contra Fazenda = TEM Remessa Necessária (Súmula 490 STJ)! Proibida reformatio in pejus (Súmula 45 STJ)! Sem reexame = não transita em julgado!"
  },
  {
    "id": "mig_ptra_100",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Competência Territorial em Teletrabalho / Home Office (Art. 651 CLT e Lei 14.442/2022)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado residente em Curitiba/PR é contratado em regime de teletrabalho por empresa sediada em São Paulo/SP, prestando serviços exclusivamente de sua residência em Curitiba durante todo o contrato. Após a dispensa, onde o empregado deve ajuizar a reclamação trabalhista?",
    "options": [
      {
        "letter": "A",
        "text": "Pela regra geral do Art. 651, caput, da CLT (local da efetiva prestação de serviços!) e interpretação sistemática do TST sobre o Art. 75-B da CLT, a competência territorial pertence em regra ao local ONDE O EMPREGADO PRESTOU OS SERVIÇOS (Curitiba/PR, sua base residencial onde trabalhou remotamente)! Atenção ao detalhe da Lei nº 14.442/2022 (Art. 75-B, § 7º, CLT): ao contrato de teletrabalho aplicam-se as disposições da legislação local da BASE TERRITORIAL DO ESTABELECIMENTO DE LOTAÇÃO DO EMPREGADO (para normas coletivas/ACT/CCT — direito material!), sem prejuízo da regra processual protetiva do Art. 651 quanto ao foro da prestação fática ou flexibilização de acesso à justiça pelo TST!"
      },
      {
        "letter": "B",
        "text": "Pelo Art. 75-B, § 7º, da CLT, o teletrabalhador só pode ajuizar reclamação trabalhista na cidade onde fica a matriz da empresa, sendo incompetente o foro de sua prestação remota."
      },
      {
        "letter": "C",
        "text": "As convenções coletivas aplicadas ao teletrabalhador são sempre as do sindicato da cidade onde ele comprou sua residência durante o home office."
      },
      {
        "letter": "D",
        "text": "Se o empregador contratar o teletrabalhador no Brasil para atuar em sede estrangeira, a Justiça do Trabalho brasileira perde competência absoluta pelo Art. 651, § 2º, CLT."
      }
    ],
    "correctAnswer": "A",
    "justification": "Teletrabalho: Direito coletivo material = base territorial do estabelecimento de lotação do empregado (Art. 75-B, § 7º CLT). Competência territorial (Art. 651 CLT) = local da efetiva prestação de serviços (ou foro facilitador de acesso em trabalho remoto interestadual). Brasileiro contratado no Brasil para trabalhar no exterior = JT brasileira é competente (§ 2º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Não confundir regra de direito material coletivo (Art. 75-B, § 7º CLT: normas coletivas seguem a base territorial do estabelecimento de lotação!) com competência processual territorial (Art. 651 CLT: local onde prestou os serviços ou maior facilidade de acesso à justiça pelo trabalhador hipossuficiente!)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 75-B, § 7º, da CLT (Lei 14.442/22), aplicam-se as disposições da legislação local e as convenções/acordos coletivos referentes à BASE TERRITORIAL DO ESTABELECIMENTO DE LOTAÇÃO do empregado!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 651, § 2º, da CLT, a competência das Varas do Trabalho estende-se aos dissídios ocorridos em agência/filial no estrangeiro, desde que o empregado seja BRASILEIRO e não haja convenção internacional dispondo em contrário!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 651 da CLT e Art. 75-B, § 7º, da CLT (Lei nº 14.442/2022)",
        "textSnippet": "Teletrabalho: Direito coletivo material = base territorial do estabelecimento de lotação do empregado (Art. 75-B, § 7º CLT). Competência territorial (Art. 651 CLT) = local da efetiva prestação de serviços (ou foro facilitador de acesso em trabalho remoto interestadual). Brasileiro contratado no Brasil para trabalhar no exterior = JT brasileira é competente (§ 2º)."
      }
    ],
    "professorTip": "Teletrabalho (Lei 14.442/22): ACT/CCT aplicável = estabelecimento de LOTAÇÃO (75-B, § 7º)! Foro do processo (Art. 651) = local da prestação dos serviços!"
  },
  {
    "id": "mig_ptra_101",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Custas e Depósito Recursal em Ação Plúrima e Condenação Solidária/Subsidiária",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em reclamação trabalhista com condenação SOLIDÁRIA das empresas Alfa e Beta ao pagamento de R$ 50.000,00, apenas a empresa Alfa efetua integralmente o depósito recursal para o Recurso Ordinário — porém, nas razões do seu recurso, Alfa requer expressamente sua EXCLUSÃO DA LIDE (alegando não formar grupo econômico). A empresa Beta recorre sem pagar depósito recursal, invocando o depósito de Alfa. O recurso de Beta será conhecido?",
    "options": [
      {
        "letter": "A",
        "text": "NÃO! O recurso da empresa Beta será considerado DESERTO! Pela Súmula 128, III, do TST, havendo condenação SOLIDÁRIA de duas ou mais empresas, o depósito recursal efetuado por uma delas SÓ APROVEITA às demais QUANDO a empresa que efetuou o depósito NÃO PLEITEIA SUA EXCLUSÃO DA LIDE! Como Alfa pediu sua própria exclusão da lide (se vencer no recurso, levará seu depósito de volta e deixará a execução sem garantia!), Beta não pode aproveitar o depósito de Alfa!"
      },
      {
        "letter": "B",
        "text": "Em qualquer condenação solidária, o depósito recursal recolhido por uma empresa sempre aproveita às demais corréus independentemente dos pedidos formulados no recurso."
      },
      {
        "letter": "C",
        "text": "Mesmo quando duas empresas são condenadas de forma meramente SUBSIDIÁRIA (e não solidária), aplica-se a Súmula 128, III, permitindo à tomadora aproveitar o depósito se pedir exclusão."
      },
      {
        "letter": "D",
        "text": "Quando ambos os réus recorrem sem que nenhum peça exclusão da lide, os dois devem pagar integralmente 100% do depósito recursal mesmo que um já tenha garantido toda a condenação."
      }
    ],
    "correctAnswer": "A",
    "justification": "Súmula 128, III, TST: condenação solidária -> depósito recursal de uma empresa aproveita à outra SE E SOMENTE SE a depositante NÃO pleitear sua exclusão da lide. Se pedir exclusão da lide -> cada recorrente deve recolher seu próprio depósito, sob pena de deserção.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Súmula 128, III, do TST traz a condição expressa: só aproveita quando a empresa depositante NÃO pleiteia sua exclusão da lide!"
      },
      {
        "letter": "C",
        "explanation": "A Súmula 128, III, trata da condenação solidária sem pedido de exclusão — e mesmo na subsidiária, se quem depositou pediu exclusão da lide (ex.: tomadora pedindo isenção de responsabilidade), o depósito jamais aproveita à outra condenada!"
      },
      {
        "letter": "D",
        "explanation": "Se uma empresa solidária já depositou e NÃO pede exclusão da lide, seu depósito aproveita às demais até o limite da garantia (Súmula 128, III) — e atingido o valor total da condenação, nada mais é exigido (Súmula 128, I)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Súmula 128, III, do TST e Art. 789 da CLT",
        "textSnippet": "Súmula 128, III, TST: condenação solidária -> depósito recursal de uma empresa aproveita à outra SE E SOMENTE SE a depositante NÃO pleitear sua exclusão da lide. Se pedir exclusão da lide -> cada recorrente deve recolher seu próprio depósito, sob pena de deserção."
      }
    ],
    "jurisprudence": "Súmula 128, III, do TST",
    "professorTip": "Súmula 128, III, TST: Depósito de uma solidária aproveita à outra SÓ se quem depositou NÃO pedir exclusão da lide!"
  },
  {
    "id": "mig_ptra_102",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Atos Executórios - Ordem de Preferência de Penhora e Bens Impenhoráveis (Art. 833 e 835 CPC)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na execução trabalhista, o Oficial de Justiça penhora ferramentas e equipamentos industriais indispensáveis ao exercício profissional de um pequeno marceneiro autônomo / microempresário individual (ou bens móveis guarnecedores da residência que não sejam de elevado valor/duplicidade). Qual a regra do Art. 833 do CPC aplicada subsidiariamente à execução trabalhista?",
    "options": [
      {
        "letter": "A",
        "text": "Pelo Art. 833, V, do CPC (aplicável à execução trabalhista via Art. 889 CLT c/c LEF), são IMPENHORÁVEIS os livros, as máquinas, as ferramentas, os utensílios, os instrumentos ou outros bens móveis necessários ou úteis ao exercício da profissão DO EXECUTADO PESSOA FÍSICA (jurisprudência do TST e STJ restringe essa proteção à PESSOA FÍSICA / profissional autônomo / MEI individual — não alcançando o parque industrial de pessoa jurídica societária, salvo inviabilização total sem outros bens)! Também são impenhoráveis os móveis e pertences da residência familiar, salvo os de elevado valor ou que ultrapassem as necessidades comuns (Art. 833, II)!"
      },
      {
        "letter": "B",
        "text": "A impenhorabilidade de máquinas e instrumentos de trabalho do Art. 833, V, do CPC impede sempre a penhora de quaisquer máquinas industriais de grandes sociedades anônimas."
      },
      {
        "letter": "C",
        "text": "Na execução trabalhista, os valores recebidos a título de seguro de vida são livremente penhoráveis pelo inciso VI do Art. 833 do CPC."
      },
      {
        "letter": "D",
        "text": "O Art. 835 do CPC coloca os bens imóveis em 1º lugar na ordem preferencial de penhora trabalhista."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 833 CPC na JT: impenhoráveis instrumentos necessários à profissão da pessoa física (V — não abrange S/A ou Ltda média/grande); seguro de vida (VI); móveis da residência comum (II). Art. 835 CPC: 1º lugar = dinheiro (e fiança/seguro +30% equiparam-se — § 2º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pela jurisprudência pacífica do STJ e do TST, o inciso V do Art. 833 do CPC protege o exercício profissional pessoal do devedor PESSOA FÍSICA (e excepcionalmente firma individual/microempresa pessoal) — não blinda o patrimônio empresarial de sociedades médias/grandes!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 833, VI, do CPC, o SEGURO DE VIDA é absolutamente impenhorável (não estando sujeito sequer à exceção do § 2º do Art. 833, que abrange apenas os incisos IV e X)!"
      },
      {
        "letter": "D",
        "explanation": "Na ordem do Art. 835 do CPC: 1º DINHEIRO (espécie ou depósito/aplicação financeira); 2º títulos da dívida pública; 3º títulos mobiliários; 4º veículos; 5º bens imóveis; 6º bens móveis em geral!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Arts. 833 e 835 do CPC e Art. 882 da CLT",
        "textSnippet": "Art. 833 CPC na JT: impenhoráveis instrumentos necessários à profissão da pessoa física (V — não abrange S/A ou Ltda média/grande); seguro de vida (VI); móveis da residência comum (II). Art. 835 CPC: 1º lugar = dinheiro (e fiança/seguro +30% equiparam-se — § 2º)."
      }
    ],
    "professorTip": "Instrumentos de trabalho impenhoráveis (Art. 833, V) = protege Pessoa Física (não S/A/Ltda grande)! Seguro de vida = impenhorável (inc. VI)! 1º da lista de penhora = DINHEIRO!"
  },
  {
    "id": "mig_ptra_103",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Carta Precatória Inquiritória e Adiamento de Audiência na CLT",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Testemunha essencial arrolada tempestivamente reside em outro Estado fora da jurisdição da Vara do Trabalho (e não se optou por oitiva por videoconferência). Como se procede na Justiça do Trabalho e quando a expedição de carta precatória suspende a instrução?",
    "options": [
      {
        "letter": "A",
        "text": "No Processo do Trabalho, prefere-se hoje a oitiva por VIDEOCONFERÊNCIA (Art. 385, § 3º, e Art. 453, § 1º, CPC c/c Resolução CNJ 354/2020) — mas se necessária a expedição de CARTA PRECATÓRIA INQUIRITÓRIA, esta segue o rito do CPC (Art. 377 CPC): a expedição da carta precatória NÃO suspende a instrução nem o processo salvo quando requerida antes da audiência e considerada imprescindível a prova pelo juiz (podendo o juízo deprecante prosseguir até antes da sentença aguardando a devolução da carta se decisiva)! Se a testemunha da comarca local faltar após convite comprovado, o juiz adia uma vez e determina sua intimação; se intimada faltar injustificadamente, sofre CONDUÇÃO COERCITIVA e multa (Art. 825, parágrafo único, CLT)!"
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho, a expedição de carta precatória inquiritória suspende automaticamente todo o curso do processo por 180 dias."
      },
      {
        "letter": "C",
        "text": "Se uma testemunha convidada pela parte não comparecer à audiência de instrução no rito sumaríssimo sem prova de convite prévio, o juiz é obrigado a adiar a audiência indefinidamente."
      },
      {
        "letter": "D",
        "text": "No Processo do Trabalho, a testemunha que faltar após intimação judicial não pode ser conduzida coercitivamente."
      }
    ],
    "correctAnswer": "A",
    "justification": "Testemunhas CLT: Ordinário = 3; Sumaríssimo = 2 (exige comprovação de convite p/ intimação judicial — Art. 852-H, § 3º); Inquérito = 6. Intimada e ausente = condução coercitiva + multa (Art. 825, § único). Carta precatória inquiritória = não suspende instrução (Art. 377 CPC); prefere-se videoconferência.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pelo Art. 377 do CPC, a carta precatória expedida para oitiva de testemunha NÃO suspende a instrução (só impede o julgamento se houver sido requerida antes do despacho saneador/audiência e for imprescindível)!"
      },
      {
        "letter": "C",
        "explanation": "No rito SUMARÍSSIMO (Art. 852-H, §§ 2º e 3º, CLT), somente será deferida intimação de testemunha que, comprovadamente convidada, deixar de comparecer (se não comprovar o convite prévio, preclui a prova)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 825, parágrafo único, da CLT, as testemunhas que não comparecerem após intimação ex officio ou a requerimento ficarão sujeitas à CONDUÇÃO COERCITIVA, além das penalidades do Art. 730 (multa)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 825, parágrafo único, Art. 849 da CLT e Arts. 260–268 do CPC",
        "textSnippet": "Testemunhas CLT: Ordinário = 3; Sumaríssimo = 2 (exige comprovação de convite p/ intimação judicial — Art. 852-H, § 3º); Inquérito = 6. Intimada e ausente = condução coercitiva + multa (Art. 825, § único). Carta precatória inquiritória = não suspende instrução (Art. 377 CPC); prefere-se videoconferência."
      }
    ],
    "professorTip": "Sumaríssimo = só intima testemunha se provar CONVITE prévio (852-H, § 3º)! Faltou intimada = condução coercitiva (Art. 825)! Carta precatória = NÃO suspende instrução (Art. 377 CPC)!"
  },
  {
    "id": "mig_ptra_104",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Recurso de Revista - Prequestionamento Explícito, Súmula 297 e Divergência Válida (Súmula 337)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Advogado interpõe Recurso de Revista por divergência jurisprudencial (Art. 896, \"a\", CLT) citando apenas a ementa de acórdão paradigma de outro TRT sem fazer o cotejo analítico entre as circunstâncias fáticas dos casos, e trazendo aresto já superado por súmula do TST. O RR será admitido?",
    "options": [
      {
        "letter": "A",
        "text": "NÃO! Por três vícios cumulativos previstos na CLT e nas Súmulas do TST: (1) pela Súmula 296, I, do TST, a divergência jurisprudencial deve ser ESPECÍFICA, revelando teses diversas na interpretação de um mesmo dispositivo legal embora idênticos os fatos que as ensejaram (e o Art. 896, § 8º, CLT exige o COTEJO ANALÍTICO mencionando as circunstâncias que identifiquem ou assemelhem os casos!); (2) pela Súmula 333 do TST e Art. 896, § 7º, CLT, NÃO ensejam Recurso de Revista decisões superadas por iterativa, notória e atual jurisprudência do TST (Súmula/OJ/SDI); e (3) pela Súmula 337 do TST, exige-se indicação da fonte oficial ou repositório autorizado (ou URL/código autenticador se extraído da internet)!"
      },
      {
        "letter": "B",
        "text": "Para conhecer de Recurso de Revista por divergência jurisprudencial basta copiar a ementa do outro TRT sem demonstrar semelhança fática nem fazer cotejo analítico."
      },
      {
        "letter": "C",
        "text": "Aresto de Turma do próprio TST serve perfeitamente como divergência jurisprudencial apta a fundamentar Recurso de Revista pelo Art. 896, \"a\", da CLT."
      },
      {
        "letter": "D",
        "text": "Quando o recurso funda-se em divergência extraída do site oficial do TRT na internet, a Súmula 337 do TST proíbe o aproveitamento sem certidão cartorária física."
      }
    ],
    "correctAnswer": "A",
    "justification": "Divergência no RR (Art. 896, \"a\", § 7º, § 8º + Súmulas 296, 333 e 337 TST): só vale acórdão de outro TRT, SDI do TST ou Súmula/OJ (Turma do TST NÃO vale p/ RR, só p/ Embargos!); exige especificidade (Súmula 296) + cotejo analítico (§ 8º) + fonte oficial/URL (Súmula 337); não cabe contra jurisprudência consolidada do TST (Súmula 333).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 896, § 8º, CLT e a Súmula 296 TST exigem COTEJO ANALÍTICO expresso demonstrando a identidade fática e a divergência de tese jurídica!"
      },
      {
        "letter": "C",
        "explanation": "PEGADINHA CLÁSSICA! Aresto de TURMA DO TST NÃO serve para fundamentar Recurso de Revista (Art. 896, \"a\", exige acórdão de OUTRO TRT, da SDI do TST ou súmula/OJ do TST ou SV STF)! Aresto de Turma do TST só serve para EMBARGOS À SDI-1 (Art. 894, II)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 337, IV, do TST, é válida a comprovação de divergência extraída da internet (repositório oficial) desde que a parte indique o respectivo endereço eletrônico (URL) e a fonte/data de publicação (ou junte cópia autenticada conforme item I)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 896, § 8º, da CLT e Súmulas 296, 333 e 337 do TST",
        "textSnippet": "Divergência no RR (Art. 896, \"a\", § 7º, § 8º + Súmulas 296, 333 e 337 TST): só vale acórdão de outro TRT, SDI do TST ou Súmula/OJ (Turma do TST NÃO vale p/ RR, só p/ Embargos!); exige especificidade (Súmula 296) + cotejo analítico (§ 8º) + fonte oficial/URL (Súmula 337); não cabe contra jurisprudência consolidada do TST (Súmula 333)."
      }
    ],
    "jurisprudence": "Súmulas 296, 333 e 337 do TST",
    "professorTip": "Divergência no RR: Turma do TST NÃO serve (só outro TRT ou SDI)! Exige cotejo analítico + especificidade (Súmula 296) + fonte/URL (Súmula 337)!"
  },
  {
    "id": "mig_ptra_105",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Competência Territorial - Empregador Itinerante e Contratação no Brasil para o Exterior",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa de circo/montagem de grandes eventos itinerantes sediada em São Paulo contrata técnico em Recife/PE para trabalhar durante temporada artística em Fortaleza/CE. Após dispensa, o técnico ajuíza reclamação trabalhista em Recife/PE (local da contratação). A Vara do Trabalho de Recife tem competência territorial?",
    "options": [
      {
        "letter": "A",
        "text": "SIM! Pelo Art. 651, § 3º, da CLT, em se tratando de empregador que promova realização de atividades FORA DO LUGAR DO CONTRATO DE TRABALHO (empresas itinerantes/sem estabelecimento fixo, como circos, feiras, grandes montagens), é assegurado ao empregado APRESENTAR RECLAMAÇÃO NO FORO DA CELEBRAÇÃO DO CONTRATO (Recife/PE) OU NO DA PRESTAÇÃO DOS RESPECTIVOS SERVIÇOS (Fortaleza/CE) — escolha exclusiva do trabalhador!"
      },
      {
        "letter": "B",
        "text": "Mesmo quando o empregador realiza atividades fora do lugar do contrato (circo/eventos itinerantes), a competência continua exclusiva do último local de prestação."
      },
      {
        "letter": "C",
        "text": "Se empregado brasileiro for contratado no Brasil para trabalhar permanentemente em filial no exterior, aplica-se sempre exclusivamente a lei trabalhista estrangeira."
      },
      {
        "letter": "D",
        "text": "Quando o empregado presta serviços sucessivamente em vários municípios distintos com transferência definitiva, deve propor uma ação separada em cada município."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 651 CLT: regra = local da prestação (ou último local se sucessivo). Viajante (§ 1º) = agência/filial a que subordinado (se não houver, domicílio/mais próxima). Exterior (§ 2º) = JT brasileira julga brasileiro sem convenção contrária. Atividade fora do local do contrato (§ 3º) = empregado escolhe celebração OU prestação.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O § 3º do Art. 651 da CLT abre opção expressa ao empregado: foro da CELEBRAÇÃO do contrato OU foro da PRESTAÇÃO dos serviços!"
      },
      {
        "letter": "C",
        "explanation": "Pela Lei nº 7.064/1982 (estendida a todos os trabalhadores pela Lei 11.962/09) e Art. 651, § 2º, CLT: a Justiça do Trabalho brasileira É competente e aplica-se a legislação trabalhista BRASILEIRA se for mais favorável no conjunto de normas (teoria do conglobamento mitigado)!"
      },
      {
        "letter": "D",
        "explanation": "Na prestação sucessiva em várias localidades, fixa-se a competência territorial pelo ÚLTIMO local da prestação de serviços!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 651, §§ 2º e 3º, da CLT",
        "textSnippet": "Art. 651 CLT: regra = local da prestação (ou último local se sucessivo). Viajante (§ 1º) = agência/filial a que subordinado (se não houver, domicílio/mais próxima). Exterior (§ 2º) = JT brasileira julga brasileiro sem convenção contrária. Atividade fora do local do contrato (§ 3º) = empregado escolhe celebração OU prestação."
      }
    ],
    "professorTip": "Empresa itinerante (Art. 651, § 3º CLT) = empregado escolhe CELEBRAÇÃO ou PRESTAÇÃO! Múltiplas transferências = ÚLTIMO local da prestação!"
  },
  {
    "id": "mig_ptra_106",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual do Trabalho",
    "topic": "Honorários Advocatícios - Causas Contra Fazenda Pública, Acordo e Execução",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em reclamação trabalhista em que a Fazenda Pública foi condenada (e em outro processo no qual as partes celebram acordo na fase de conhecimento antes da instrução), como se aplicam os honorários advocatícios sucumbenciais previstos no Art. 791-A da CLT?",
    "options": [
      {
        "letter": "A",
        "text": "Pelo Art. 791-A, § 1º, da CLT, os honorários advocatícios de sucumbência (5% a 15%) são DEVIDOS também nas ações contra a FAZENDA PÚBLICA (observados os critérios do § 2º: grau de zelo do profissional, lugar da prestação, natureza/importância da causa e trabalho/tempo exigidos — sem aplicação dos percentuais escalonados do Art. 85, § 3º, do CPC porque a CLT possui regra própria no Art. 791-A, § 1º!); e havendo acordo homologado judicialmente, a responsabilidade pelos honorários advocatícios rege-se pelo que as partes livremente ajustarem no acordo (ou se omisso o acordo, extingue-se sem sucumbência judicial se não houve condenação anterior)!"
      },
      {
        "letter": "B",
        "text": "Nas ações trabalhistas contra a Fazenda Pública, aplicam-se os percentuais escalonados de 1% a 20% do Art. 85, § 3º, do CPC por omissão da CLT."
      },
      {
        "letter": "C",
        "text": "A fixação de honorários advocatícios de sucumbência de 5% a 15% exige necessariamente que a parte vencedora tenha juntado contrato particular de honorários."
      },
      {
        "letter": "D",
        "text": "O sindicato que atua como substituto processual ou assistente na Justiça do Trabalho não tem direito a honorários advocatícios sucumbenciais."
      }
    ],
    "correctAnswer": "A",
    "justification": "Honorários na CLT (Art. 791-A): 5% a 15% (também contra Fazenda Pública — § 1º, na reconvenção — § 5º, e para sindicato substituto processual — Súmula 219, III); veda compensação (§ 3º); justiça gratuita fica sob condição suspensiva de 2 anos sem desconto nos créditos (STF ADI 5766).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Não há omissão na CLT! O Art. 791-A, § 1º, dispõe expressamente que os honorários de 5% a 15% aplicam-se às ações contra a Fazenda Pública!"
      },
      {
        "letter": "C",
        "explanation": "Os honorários sucumbenciais do Art. 791-A da CLT pertencem ao advogado por força de lei (Art. 23 do Estatuto da OAB), independentemente de contrato particular ou assistência sindical!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 219, III e V, do TST e Art. 791-A da CLT, são devidos os honorários advocatícios nas causas em que o ente sindical figure como substituto processual ou na assistência jurídica!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / CPC/2015",
        "article": "Art. 791-A, §§ 1º e 2º, da CLT e Art. 85, § 3º, do CPC",
        "textSnippet": "Honorários na CLT (Art. 791-A): 5% a 15% (também contra Fazenda Pública — § 1º, na reconvenção — § 5º, e para sindicato substituto processual — Súmula 219, III); veda compensação (§ 3º); justiça gratuita fica sob condição suspensiva de 2 anos sem desconto nos créditos (STF ADI 5766)."
      }
    ],
    "jurisprudence": "Súmula 219 TST e STF ADI 5766",
    "professorTip": "Honorários na JT (5% a 15%): valem contra Fazenda Pública (não usa escala do CPC!), na Reconvenção e p/ Sindicato substituto (Súmula 219, III)!"
  }
];
