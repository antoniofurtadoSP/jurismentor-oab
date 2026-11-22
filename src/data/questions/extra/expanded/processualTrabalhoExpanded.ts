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
        "text": "O CPC/2015 revogou tacitamente as regras próprias da CLT sempre que prevê prazo mais benéfico às partes, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo."
      },
      {
        "letter": "B",
        "text": "Na fase de execução trabalhista aplica-se prioritariamente a CLT e, na omissão, o CPC antes da Lei de Execuções Fiscais. O descumprimento da formalidade impede o exame do mérito pelo órgão recursal trabalhista."
      },
      {
        "letter": "C",
        "text": "Os prazos recursais do CPC (15 dias) aplicam-se automaticamente aos recursos trabalhistas como recurso ordinário e agravo de petição, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Não. nos casos omissos, o direito processual comum será fonte subsidiária do direito processual do trabalho, exceto naquilo em que for incompatível com as normas deste Título."
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
        "text": "O empregado pode escolher livremente entre o local da contratação, o de seu domicílio atual ou o da prestação de serviços, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
      },
      {
        "letter": "B",
        "text": "Para empregado agente ou viajante comercial, a competência será exclusivamente do local de sua residência, com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária."
      },
      {
        "letter": "C",
        "text": "É válida a cláusula de eleição de foro inserida no contrato de trabalho mesmo para empregado comum, pela aplicação subsidiária do CPC, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "Em regra, não. a competência das Varas do Trabalho é determinada pela localidade onde o empregado prestar serviços ao empregador (Belo Horizonte/MG), ainda que tenha sido contratado noutro local (São Paulo) ou no estrangeiro."
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
        "text": "A ação de dano moral em ricochete ajuizada pela viúva e filhos em nome próprio tramita na Justiça Comum Estadual por envolver direito civil sucessório, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho. Tal disciplina reflete a autonomia procedimental própria do processo judiciário do trabalho."
      },
      {
        "letter": "B",
        "text": "A Justiça do Trabalho é incompetente para julgar ação de execução fiscal de multas administrativas impostas aos empregadores pelos auditores fiscais do trabalho, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Compete à Justiça do Trabalho processar e julgar os crimes contra a organização do trabalho, como redução à condição análoga à de escravo, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "Ambas pertencem à justiça do trabalho. (e STF RE 600.091), a Justiça do Trabalho é competente para processar e julgar ações de indenização por dano moral e material decorrentes da relação de trabalho, inclusive quando ajuizadas pelos sucessores (viúva e filhos) do trabalhador falecido em acidente de trabalho. E, a jt também julga as ações sobre representação sindical, entre sindicatos, entre sindicatos e trabalhadores, e entre sindicatos e empregadores."
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
        "text": "No processo de homologação de acordo extrajudicial, as partes podem atuar sem advogado ou representadas pelo mesmo advogado comum, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo."
      },
      {
        "letter": "C",
        "text": "Na execução trabalhista iniciada pela parte sem advogado, não cabe ao juiz promover a execução de ofício, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória."
      },
      {
        "letter": "D",
        "text": "Não. empregados e empregadores podem reclamar pessoalmente perante a Justiça do Trabalho e acompanhar suas reclamações até o final nas instâncias ordinárias."
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
        "text": "Os honorários advocatícios de sucumbência trabalhista variam de 10% a 20%, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "O beneficiário da justiça gratuita que falta injustificadamente à audiência inaugural está dispensado do pagamento das custas processuais pela ADI 5766, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "A simples declaração de hipossuficiência assinada pelo trabalhador ou por seu advogado continua bastando automaticamente para concessão da justiça gratuita mesmo para quem ganha acima de 40% do teto do RGPS, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "Não sofrerá desconto imediato automático sobre os créditos obtidos no processo. Na ADI 5766, o STF declarou inconstitucional a expressão que autorizava a cobrança automática dos honorários sucumbenciais contra o beneficiário da justiça gratuita usando créditos obtidos neste ou em outro processo, bem como declarou inconstitucional o Art. 790-B, caput e § 4º, que obrigava o beneficiário da justiça gratuita sucumbente na perícia a pagar honorários periciais. Mantém-se apenas a condição suspensiva de exigibilidade por 2 anos após o trânsito em julgado."
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
        "text": "As empresas em recuperação judicial são isentas do pagamento de custas processuais e do depósito recursal, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "As custas processuais no Processo do Trabalho devem ser pagas antecipadamente no ato da distribuição da petição inicial, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "O prazo para comprovar o recolhimento das custas em caso de recurso é de 5 dias após a interposição do apelo, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "As custas nos processos de conhecimento são calculadas à razão de 2% sobre o valor da condenação, do acordo ou da causa, observado o mínimo de R$ 10,64 e o máximo de 4 vezes o limite máximo dos benefícios do RGPS, pagas e comprovado o recolhimento dentro do prazo recursal (8 dias )."
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
        "text": "Os prazos no Processo do Trabalho continuam sendo contados em dias corridos, inclusive após a Lei nº 13.467/2017, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "A contagem do prazo para interposição de recurso no Processo do Trabalho se inicia na data da juntada do aviso de recebimento postal da notificação."
      },
      {
        "letter": "C",
        "text": "O recesso forense da Justiça do Trabalho não suspende os prazos processuais, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 775 da CLT, os prazos processuais no Processo do Trabalho são contados exclusivamente em dias úteis, com exclusão do dia do começo e inclusão do dia do vencimento."
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
        "text": "Da CLT, mesmo no rito ordinário, o pedido deverá ser certo, determinado e com indicação de seu valor."
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
        "text": "Empresas públicas e sociedades de economia mista também estão excluídas do procedimento sumaríssimo por força, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "No procedimento sumaríssimo cada parte pode ouvir até 3 testemunhas e a prova pericial é proibida, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "No rito sumário (alçada até 2 salários mínimos), cabe normalmente Recurso Ordinário para o TRT em qualquer hipótese, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "No primeiro caso, não tramitará pelo Sumaríssimo. Embora o valor de R$ 35.000,00 seja inferior a 40 salários mínimos, o parágrafo único exclui expressamente do rito sumaríssimo as demandas em que é parte a administração pública direta, autárquica e fundacional e o Art. 852-B, II, proíbe a citação por edital no sumaríssimo. Já nas causas de até 2 salários mínimos, não cabe recurso algum da sentença, salvo se versar sobre matéria constitucional."
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
        "text": "Ausente o preposto da empresa na audiência inaugural, mesmo presente o advogado com defesa no PJe, o juiz deve decretar revelia e desentranhar/recusar a contestação e os documentos. Tal disciplina reflete a autonomia procedimental própria do processo judiciário do trabalho."
      },
      {
        "letter": "B",
        "text": "A ausência do reclamante na audiência inaugural acarreta improcedência liminar do pedido com coisa julgada material imediata, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
      },
      {
        "letter": "C",
        "text": "A ausência da reclamada gera revelia quanto à confissão ficta dos fatos, mas, ainda que ausente o reclamado, presente o advogado na audiência, serão aceitos a contestação e OS documentos eventualmente apresentados."
      },
      {
        "letter": "D",
        "text": "Na revelia trabalhista, a confissão ficta do réu ausente é absoluta, mesmo que contradiga prova documental pré-constituída nos autos ou ocorra contra ente público. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
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
        "text": "O advogado da reclamada pode acumular simultaneamente na mesma audiência as funções de advogado e preposto da empresa, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Não. o preposto a que se refere o § 1º não precisa ser empregado da parte reclamada — bastando que tenha conhecimento dos fatos (cujas declarações obrigarão o proponente)."
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
        "text": "A exceção de incompetência territorial deve ser apresentada oralmente ou em preliminar da contestação apenas no dia da audiência inaugural, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "Da decisão interlocutória do juiz do trabalho que acolhe a exceção de incompetência territorial e remete os autos a TRT distinto nunca cabe recurso imediato, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "A exceção de incompetência territorial deve ser oferecida em peça separada que sinalize a existência dessa exceção, protocolada no prazo de 5 dias (úteis) a contar da notificação."
      },
      {
        "letter": "D",
        "text": "A incompetência territorial pode ser declarada de ofício pelo juiz do trabalho em qualquer tempo e grau de jurisdição, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau."
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
        "text": "A compensação pode ser arguida a qualquer tempo, inclusive nos embargos à execução trabalhista, e abrange qualquer crédito civil da empresa contra o ex-empregado. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Não cabe reconvenção no Processo do Trabalho por incompatibilidade com a celeridade do rito trabalhista, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral."
      },
      {
        "letter": "C",
        "text": "A compensação na Justiça do Trabalho está restrita a dívidas de natureza trabalhista e só poderá ser arguida como matéria de defesa na contestação, assim como a retenção/dedução de valores pagos sob o mesmo título."
      },
      {
        "letter": "D",
        "text": "Dedução e compensação são institutos idênticos, de modo que o juiz não pode deduzir valores já pagos a idêntico título sem pedido expresso de compensação, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória."
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
        "text": "Os cartões de ponto com marcação britânica geram presunção absoluta e juris et de jure da jornada alegada pelo empregado na inicial, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Da CLT, é obrigatório o registro de jornada nos estabelecimentos com mais de 20 trabalhadores."
      },
      {
        "letter": "D",
        "text": "O juiz do trabalho não pode inverter ou distribuir dinamicamente o ônus da prova no curso do processo trabalhista, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "A testemunha que move ação trabalhista com objeto idêntico contra a mesma reclamada presume-se automaticamente suspeita e não pode depor, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "As testemunhas no Processo do Trabalho devem ser sempre previamente arroladas por escrito em até 15 dias antes da audiência, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Não. não torna suspeita a testemunha o simples fato de estar litigando ou de ter litigado contra o mesmo empregador."
      },
      {
        "letter": "D",
        "text": "A testemunha que mentir ou alterar intencionalmente a verdade dos fatos em audiência trabalhista está sujeita apenas à remessa de ofício ao mpf por falso testemunho, sem multa processual do juiz do trabalho."
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
        "text": "Não. Há dois vícios graves e uma faculdade judicial:, as partes não podem ser representadas por advogado comum."
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
        "text": "O prazo de 30 dias tem natureza prescricional e só se aplica caso o empregador opte por não suspender o dirigente sindical, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
      },
      {
        "letter": "B",
        "text": "No inquérito para apuração de falta grave cada parte pode indicar no máximo 3 testemunhas, igual ao rito ordinário, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "A reclamação/inquérito foi ajuizada fora do prazo decadencial. c/c Súmula 403 do STF e Súmula 62 do TST, para instauração do inquérito para apuração de falta grave contra empregado garantido com estabilidade, o empregador apresentará reclamação por escrito à Vara do Trabalho dentro de 30 dias (decadenciais), contados da data da suspensão do empregado."
      },
      {
        "letter": "D",
        "text": "Julgado improcedente o inquérito por não provada a falta grave, o empregador fica obrigado apenas a pagar as verbas rescisórias sem salários do período de suspensão, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória."
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
        "text": "Em qualquer caso de concessão de tutela antecipada na Justiça do Trabalho, mesmo quando proferida na própria sentença, o réu deve impetrar Mandado de Segurança. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Contra a decisão interlocutória que concede ou indefere tutela provisória antes da sentença cabe imediatamente Agravo de Instrumento no Processo do Trabalho, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Pela Súmula 414 do TST: quando a tutela provisória for concedida ou indeferida antes da sentença, cabe a impetração de mandado de segurança para o TRT, por ausência de recurso específico imediato."
      },
      {
        "letter": "D",
        "text": "A superveniência da sentença de mérito no processo principal não prejudica o Mandado de Segurança anteriormente impetrado contra a decisão liminar, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "No Processo do Trabalho cabe Agravo de Instrumento contra decisões interlocutórias que indeferem provas ou tutelas de urgência, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "Quando o juiz acolhe exceção de incompetência territorial remetendo os autos para outra Vara do Trabalho vinculada ao mesmo TRT, cabe Recurso Ordinário imediato, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Em regra, não cabe recurso imediato contra decisões interlocutórias na Justiça do Trabalho. As únicas exceções da Súmula 214 do TST são decisão interlocutória: (a) de TRT contrária à Súmula ou OJ do TST; (b) suscetível de impugnação mediante recurso para o mesmo Tribunal; e (c) que acolhe exceção de incompetência territorial com remessa dos autos para Vara vinculada a TRT distinto."
      },
      {
        "letter": "D",
        "text": "A decisão do juiz do trabalho que decreta o indeferimento da prova testemunhal sem protesto imediato da parte em audiência pode ser alegada livremente pela primeira vez no Recurso Ordinário, com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária."
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
        "text": "O depósito recursal também é exigido do empregado reclamante quando interpor Recurso Ordinário contra sentença de improcedência, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "O depósito recursal tem seu valor reduzido pela metade (50%) para entidades sem fins lucrativos, empregadores domésticos, microempreendedores individuais (MEI), microempresas (ME) e empresas de pequeno porte."
      },
      {
        "letter": "C",
        "text": "As empresas em recuperação judicial devem recolher 50% do depósito recursal em dinheiro, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "Havendo condenação solidária de duas empresas no polo passivo, o depósito recursal efetuado integralmente por uma delas nunca aproveita à outra, com deserção imediata do apelo ou preclusão do direito de impugnação pela parte interessada."
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
        "text": "No Processo do Trabalho não se admite recurso adesivo, ou sua admissão restringe-se exclusivamente ao Recurso Ordinário, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "O recurso adesivo é plenamente compatível com o Processo do Trabalho e cabe, no prazo de 8 dias das contrarrazões, nas hipóteses de interposição de recurso ordinário, agravo de petição, recurso de revista e embargos no TST."
      },
      {
        "letter": "C",
        "text": "O recurso adesivo trabalhista tem vida autônoma: se a empresa desistir do recurso principal, o recurso adesivo do empregado continua sendo julgado normalmente, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "O Recurso Ordinário em face de sentença proferida no rito sumaríssimo também é cabível das decisões definitivas de competência originária dos TRTs, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "Os Embargos de Declaração trabalhistas suspendem (não interrompem) o prazo para interposição do Recurso Ordinário, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral."
      },
      {
        "letter": "B",
        "text": "Os Embargos de Declaração são opostos no prazo de 5 dias úteis nas hipóteses de omissão, contradição, obscuridade e manifesto equívoco no exame dos pressupostos extrínsecos do recurso."
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
        "text": "No rito sumaríssimo, cabe Recurso de Revista por violação literal de dispositivo da CLT e por Orientação Jurisprudencial (OJ) da SDI-1 do TST, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "Nenhum dos dois. Primeiro, não cabe Recurso de Revista para reexame de fatos e provas, nem por divergência jurisprudencial entre Turmas do mesmo TRT."
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
        "text": "O Agravo de Petição dispensa delimitação dos valores impugnados quando o agravante impugnar apenas parte da conta de liquidação, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "Contra a decisão que denega seguimento a recurso (RO, RR, ap etc.) cabe agravo de instrumento no prazo de 8 dias úteis, exigindo depósito recursal específico de 50% do valor do depósito do recurso que se pretende destrancar."
      },
      {
        "letter": "C",
        "text": "O Agravo de Instrumento trabalhista exige pagamento de custas específicas prévias além do depósito de 50% para ser conhecido, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo."
      },
      {
        "letter": "D",
        "text": "Se a empresa interpuser Agravo de Petição contra decisão que rejeitou Exceção de Pré-Executividade, o recurso é sempre inadmissível por ser decisão interlocutória, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "Contra decisão de Turma do TST que nega provimento a Agravo de Instrumento mantendo a ausência de pressupostos intrínsecos do RR cabem amplamente Embargos à SDI-1, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "Contra decisão de Turma do TST que divergir de outra Turma ou da SDI, ou contrariar súmula/OJ do TST ou Súmula Vinculante do STF, cabem embargos de divergência no prazo de 8 dias úteis para a SDI-1 do TST."
      },
      {
        "letter": "C",
        "text": "O prazo dos Embargos de Divergência para a SDI-1 do TST é de 15 dias úteis por força do CPC, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "A Súmula 422 do TST aplica-se inclusive no Recurso Ordinário ainda que a motivação do recurso não seja totalmente dissociada da sentença, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "Toda sentença condenatória proferida contra Município na Justiça do Trabalho está sujeita ao duplo grau obrigatório independentemente do valor da condenação, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "Não. do TST, nas decisões proferidas contra a Fazenda Pública não se aplica a remessa necessária quando: a condenação ou proveito econômico não ultrapassar 1.000 salários mínimos (União), 500 salários mínimos ou 100 salários mínimos."
      },
      {
        "letter": "C",
        "text": "Empresas públicas e sociedades de economia mista também têm direito à remessa necessária e ao prazo em dobro do DL 779/69, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "A Fazenda Pública, quando não interpõe Recurso Ordinário e o processo sobe por remessa necessária, pode interpor Recurso de Revista contra o acórdão do TRT que apenas confirmou a sentença. Tal disciplina reflete a autonomia procedimental própria do processo judiciário do trabalho."
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
        "text": "A exigência de \"comum acordo\" foi declarada inconstitucional pelo STF por violar o acesso à jurisdição, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "No dissídio coletivo de natureza econômica, a legislação aplicável exige o comum acordo entre as partes como pressuposto processual constitucional, logo, havendo oposição expressa do sindicato patronal, o dissídio coletivo econômico deve ser extinto sem resolução do mérito."
      },
      {
        "letter": "C",
        "text": "A Ação de Cumprimento para executar cláusula de sentença normativa ou CCT deve ser ajuizada originariamente no TRT e aguardar o trânsito em julgado, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "O Ministério Público do Trabalho não tem legitimidade para ajuizar dissídio coletivo nem mesmo em caso de greve em atividade essencial, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
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
        "text": "Na Justiça do Trabalho o juiz continua obrigado a promover a execução trabalhista de ofício em todos os processos, inclusive quando há advogado, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "A execução de ofício quando a parte está assistida por advogado é inválida após a Reforma Trabalhista. a execução será promovida pelas partes, permitida a execução de ofício pelo juiz ou pelo Presidente do Tribunal apenas nos casos em que as partes não estiverem representadas por advogado (jus postulandi). Já a execução do tac do MPT e do termo de conciliação da ccp na Justiça do Trabalho é plenamente válida por força."
      },
      {
        "letter": "C",
        "text": "Os únicos títulos executivos admitidos na Justiça do Trabalho são as sentenças judiciais transitadas em julgado, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Cheques e notas promissórias emitidos pelo empregador em favor do empregado fora de acordo homologado constituem títulos executivos extrajudiciais na Justiça do Trabalho, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Na fase de liquidação trabalhista, o juiz tem mera faculdade de intimar as partes para impugnar a conta no prazo de 5 dias, sem gerar preclusão. Tal disciplina reflete a autonomia procedimental própria do processo judiciário do trabalho."
      },
      {
        "letter": "B",
        "text": "Elaborada a conta e tornada líquida, o juízo deverá abrir às partes prazo comum de 8 dias (úteis) para impugnação fundamentada com a indicação dos itens e valores objeto da discordância, sob pena de preclusão."
      },
      {
        "letter": "C",
        "text": "Na Justiça do Trabalho, os créditos trabalhistas continuam corrigidos pela tr + juros de 1% ao mês somados à taxa SELIC após o ajuizamento, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "Na liquidação por cálculos na jt é permitido modificar ou inovar a sentença liquidanda para incluir parcela não constante do título, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
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
        "text": "O executado deve pagar ou garantir a execução em 48 horas; a ordem preferencial de penhora segue o Art. 835 do CPC, colocando dinheiro em espécie ou em depósito bancário (sisbajud) em 1º lugar prioritário; e, garantida integralmente a execução ou penhorados os bens, o executado terá o prazo de 5 dias (úteis) para apresentar embargos à execução, dispensada a garantia apenas para entidades filantrópicas e seus diretores."
      },
      {
        "letter": "B",
        "text": "O prazo para o executado pagar ou garantir a execução após a citação na Justiça do Trabalho é de 15 dias úteis, e o prazo dos embargos à execução é de 15 dias, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "Os embargos à execução na Justiça do Trabalho dispensam prévia garantia do juízo ou penhora de bens para qualquer empresa privada, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "Na execução provisória trabalhista, o exequente pode levantar imediatamente os valores depositados até o limite de 60 salários mínimos sem caução, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau."
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
        "text": "A antiga Súmula 205 do TST foi cancelada em 2003, permitindo na prática trabalhista incluir empresas do grupo na execução."
      },
      {
        "letter": "B",
        "text": "A Súmula 205 do TST continua em pleno vigor proibindo qualquer discussão no STF sobre grupo econômico na execução, com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária."
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
        "text": "Pelo Art. 883-A da CLT, a decisão judicial transitada em julgado somente poderá ser levada a protesto, gerar inscrição do nome do executado em órgãos de proteção ao crédito ou no Banco Nacional de Devedores Trabalhistas (bndt), nos termos da lei, depois de transcorrido o prazo de 45 (quarenta e cinco) dias a contar da citação do executado, se não houver garantia do juízo."
      },
      {
        "letter": "B",
        "text": "O protesto e a inscrição no bndt ocorrem automaticamente imediatamente após esgotado o prazo de 48 horas da citação na execução, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "A inscrição positiva no bndt impede apenas a participação em licitações públicas, sem impedir o protesto extrajudicial em cartório, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "Mesmo que o executado apresente seguro garantia judicial ou depósito integral do valor executado dentro dos 45 dias, ainda assim será inscrito no bndt com certidão positiva, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
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
        "text": "Na primeira empresa, aplica-se a OJ 140 da SDI-1 do TST c/c Art. 1.007, § 2º, do CPC: só haverá deserção se, intimado o recorrente para complementar no prazo de 5 dias, não vier a suprir a diferença."
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho aplica-se o Art. 1.007, § 4º, do CPC, permitindo que o recorrente que não pagou absolutamente nada de custas nem depósito pague tudo em dobro após intimação."
      },
      {
        "letter": "C",
        "text": "Qualquer diferença de centavos no depósito recursal gera deserção instantânea do recurso sem intimação prévia para complementação, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Se a parte comprovar equívoco no preenchimento da guia de custas (gru), o juiz decreta deserção sumária sem oportunidade de saneamento, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Do TST, incumbe à parte o ônus de provar, quando da interposição do recurso, a existência de feriado local que autorize a prorrogação do prazo recursal."
      },
      {
        "letter": "B",
        "text": "Os feriados municipais e estaduais são sempre presumidos de ofício pelos Tribunais Superiores em Brasília sem necessidade de prova nos autos, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "A simples menção à existência do feriado local no texto da petição do recurso substitui o documento oficial comprobatório, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "Se o dia final do prazo cair em sábado ou domingo, o prazo recursal vence antecipadamente na sexta-feira anterior, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "Pode utilizar exceção de pré-executividade (epe), independentemente de garantia do juízo."
      },
      {
        "letter": "B",
        "text": "A Exceção de Pré-Executividade exige depósito prévio integral do valor executado e permite ampla oitiva de testemunhas, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Da decisão do juiz do trabalho que rejeita a Exceção de Pré-Executividade e determina o prosseguimento da execução cabe imediatamente Agravo de Petição."
      },
      {
        "letter": "D",
        "text": "A Exceção de Pré-Executividade tem prazo decadencial de 5 dias após a citação para pagamento, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "A medida cabível são os embargos de terceiro, no prazo de até 5 dias depois da arrematação, adjudicação ou alienação por iniciativa particular, mas sempre antes da assinatura da respectiva carta. na execução por carta precatória, os embargos de terceiro serão oferecidos no juízo deprecante ou no juízo deprecado, mas a competência para julgá-los é do juízo deprecante, salvo se versarem unicamente sobre vícios ou irregularidades da penhora, avaliação ou alienação dos bens praticados pelo juízo deprecado."
      },
      {
        "letter": "B",
        "text": "Os Embargos de Terceiro na Justiça do Trabalho desafiam Recurso Ordinário contra a sentença que os julga improcedentes, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Na carta precatória executória, o juízo deprecado é sempre competente para julgar todos os Embargos de Terceiro independentemente da matéria alegada, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "O prazo para opor Embargos de Terceiro na fase de execução encerra-se 5 dias após a intimação da penhora, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "A Fazenda Pública não se sujeita à penhora nem à garantia do juízo e tem prazo de 30 dias para opor Embargos à Execução / Impugnação."
      },
      {
        "letter": "B",
        "text": "O prazo da Fazenda Pública para opor Embargos à Execução trabalhista é de 5 dias úteis, igual ao das empresas privadas, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "Da CLT: se as partes discriminarem na conciliação a natureza indenizatória da parcela em sintonia com os pedidos da inicial, não incide INSS."
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
        "text": "Para a União (INSS), os prazos recursais nas decisões homologatórias de acordo são simples (8 dias), sem prerrogativa de prazo em dobro. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
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
        "text": "O prazo decadencial da Ação Rescisória é de 2 anos contados do dia imediatamente subsequente ao trânsito em julgado da última decisão proferida no processo."
      },
      {
        "letter": "B",
        "text": "O depósito prévio da Ação Rescisória trabalhista é de 5% sobre o valor da causa, seguindo integralmente o CPC, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Na Justiça do Trabalho não cabe Ação Rescisória contra termo de conciliação homologado judicialmente (acordo), com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
      },
      {
        "letter": "D",
        "text": "A parte pode ajuizar pessoalmente Ação Rescisória no TRT utilizando o jus postulandi, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
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
        "text": "A tentativa de conciliação na Justiça do Trabalho é obrigatória apenas na abertura da audiência, sendo facultativa após as razões finais, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "O termo de conciliação homologado em juízo pela Justiça do Trabalho desafia Recurso Ordinário pelas partes se uma delas se arrepender em 8 dias, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "No Procedimento Sumaríssimo, o juiz do trabalho deve proferir sentença com relatório extenso detalhando todos os depoimentos, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
      },
      {
        "letter": "D",
        "text": "Pela CLT, há dois momentos obrigatórios de proposta de conciliação pelo juiz: aberta a audiência, antes da apresentação da defesa."
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
        "text": "A multa por litigância de má-fé na CLT varia de 10% a 20% do valor da causa e não pode ser aplicada de ofício, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho, mesmo que duas ou mais pessoas litiguem de má-fé, a multa será obrigatoriamente solidária em todos os casos. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "A testemunha compromissada não pode sofrer sanção financeira direta pelo juiz do trabalho no próprio processo, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral."
      },
      {
        "letter": "D",
        "text": "Pelos Arts. 793-A a 793-C da CLT, quem litiga de má-fé será condenado, de ofício ou a requerimento, a pagar multa superior A 1% e inferior a 10% do valor corrigido da causa."
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
        "text": "A prescrição quinquenal pode ser alegada pela primeira vez no Recurso de Revista ao TST e deve ser declarada de ofício pelo juiz na fase de conhecimento, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "A prescrição só pode ser alegada na contestação de 1º grau, precluindo se suscitada pela primeira vez no Recurso Ordinário ao TRT, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
      },
      {
        "letter": "C",
        "text": "A prescrição intercorrente na execução trabalhista também depende de provocação expressa da parte executada, nunca podendo ser reconhecida de ofício, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "Não. não se conhece de prescrição não arguida na instância ordinária. É inviável arguir a prescrição bienal/quinquenal pela primeira vez em sede de Recurso de Revista ou Embargos ao TST."
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
        "text": "Para atuar como substituto processual na Justiça do Trabalho, o sindicato precisa apresentar procuração individual ou autorização expressa de cada trabalhador substituído, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "A sentença proferida em Ação Civil Pública trabalhista limita seus efeitos obrigatoriamente aos limites geográficos da jurisdição da Vara do Trabalho prolatora, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "A desistência da ação coletiva pelo sindicato ou associação acarreta a perda automática do prazo prescricional para as ações individuais dos trabalhadores, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "Da CF e Tema 823 do STF, o sindicato possui legitimidade extraordinária ampla como substituto processual para defender direitos individuais homogêneos ou coletivos de toda a categoria, dispensando autorização individual ou juntada de rol de substituídos."
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
        "text": "Por força, são obrigatórias na Justiça do Trabalho a denunciação da lide à seguradora e o chamamento ao processo em toda ação acidentária, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "O amicus curiae não pode ser admitido em recursos repetitivos ou incidentes trabalhistas por ser instituto exclusivo do controle de constitucionalidade no STF, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
      },
      {
        "letter": "C",
        "text": "O IDPJ (Incidente de Desconsideração da Personalidade Jurídica) é inaplicável no Processo do Trabalho, seguindo o redirecionamento direto, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Atenção à IN 39/2016 do TST e à jurisprudência após a EC 45/2004: admite-se na Justiça do Trabalho a assistência, o incidente de desconsideração da personalidade jurídica e o amicus curiae."
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
        "text": "O pedido de desistência da ação sem anuência do réu equivale à renúncia ao direito material e faz coisa julgada material, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "A desistência do recurso já interposto também depende da anuência do recorrido na Justiça do Trabalho, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "Não. (inserido pela Lei nº 13.467/2017), oferecida a contestação, ainda que eletronicamente, o reclamante não poderá, sem o consentimento do reclamado, desistir da ação."
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
        "text": "A parte vencedora no objeto da perícia tem direito ao reembolso dos honorários de seu assistente técnico pela parte sucumbente, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
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
        "text": "A ausência injustificada da parte à audiência em prosseguimento na qual deveria depor aplica a confissão ficta quanto à matéria de fato."
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
        "text": "A vedação à decisão surpresa prevista nos Arts. 9º e 10 do CPC é totalmente incompatível com o Processo do Trabalho pela regra da informalidade, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Antes de indeferir qualquer tutela provisória de urgência em risco imediato, o juiz trabalhista é sempre obrigado a intimar o réu para contraditório prévio, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "A sentença que extingue o processo por decadência de ofício sem ouvir as partes é convalidada automaticamente se a matéria for exclusivamente de direito, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo."
      },
      {
        "letter": "D",
        "text": "Sim. da Instrução Normativa nº 39/2016 do TST, aplicam-se ao Processo do Trabalho os Arts. 9º e 10 do CPC: em qualquer grau de jurisdição, o juiz não pode decidir com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de se manifestar, ainda que se trate de matéria sobre a qual deva decidir de ofício."
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
        "text": "Após assinada a carta de arrematação pelo juiz, o executado ainda pode remir a execução pagando a dívida e desfazendo a arrematação, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
      },
      {
        "letter": "D",
        "text": "O edital de hasta pública deve ser afixado e publicado em jornal local com antecedência mínima de 20 dias."
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
        "text": "Firmado o precedente no IRR pelo TST: os processos suspensos retomam o curso normal para aplicação da tese vinculante."
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
        "text": "No acordo trabalhista parcelado, o exequente deve aguardar o vencimento de todas as parcelas futuras uma a uma para poder executá-las, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "A cláusula penal estipulada em acordo homologado nunca pode incidir sobre as parcelas vencidas, apenas sobre as vincendas, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Nas prestações sucessivas por tempo determinado, a execução pelo não pagamento de uma prestação compreenderá as que lhe sucederem, executando-se imediatamente o saldo remanescente + a cláusula penal pactuada."
      },
      {
        "letter": "D",
        "text": "Contra a decisão que homologou o acordo judicial na audiência cabe Agravo de Petição se a empresa atrasar a parcela por dificuldade financeira, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "A Reclamação Constitucional ao STF contra acórdão de TRT por violação de Tema de Repercussão Geral dispensa o prévio esgotamento das instâncias trabalhistas, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "A Correição Parcial tem natureza de recurso ordinário e pode modificar o mérito da sentença definitiva, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Contra ato tumultuário ou omissivo do juiz de 1º grau que atenta contra a boa ordem processual e não possui recurso específico cabe correição parcial perante o Corregedor Regional do TRT no prazo regimental de 5 dias."
      },
      {
        "letter": "D",
        "text": "É cabível Reclamação ao STF mesmo após o trânsito em julgado da decisão trabalhista atacada, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Na procedência parcial trabalhista, compensam-se automaticamente os honorários devidos ao advogado do autor com os devidos ao advogado do réu, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "Não são devidos honorários advocatícios na reconvenção trabalhista nem nas ações contra a Fazenda Pública, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Na hipótese de procedência parcial, o juízo arbitrará honorários de sucumbência recíproca (entre 5% e 15%), vedada a compensação entre os honorários."
      },
      {
        "letter": "D",
        "text": "Na execução de título extrajudicial (tac/ccp) ou no cumprimento de sentença não cabe arbitramento de honorários sucumbenciais na jt."
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
        "text": "Sendo julgada improcedente a Ação Civil Pública proposta pelo MPT ou por sindicato, o juiz deve condenar automaticamente o autor em honorários sucumbenciais de 5% a 15%, com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária."
      },
      {
        "letter": "B",
        "text": "O MPT tem legitimidade para recorrer como fiscal da lei apenas se houver concordância expressa do reclamante menor, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 18 da Lei nº 7.347/85 (Lei da ACP) e Art. 790-A, II, da CLT, o Ministério Público do Trabalho é isento de custas e despesas processuais e, em Ação Civil Pública, a parte autora não é condenada em honorários advocatícios, custas ou despesas processuais, salvo comprovada má-fé."
      },
      {
        "letter": "D",
        "text": "A intimação do Ministério Público do Trabalho ocorre exclusivamente pelo Diário Eletrônico (DEJT), sem necessidade de intimação pessoal, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
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
        "text": "O Tribunal Superior do Trabalho é composto por 33 Ministros, seguindo a mesma composição numérica do Superior Tribunal de Justiça, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "São órgãos da Justiça do Trabalho: (I) o TST, (II) os TRTs e (III) os Juízes do Trabalho."
      },
      {
        "letter": "D",
        "text": "A Escola Nacional de Formação e Aperfeiçoamento de Magistrados do Trabalho (enamat) e o csjt integram a estrutura do CNJ, fora do TST."
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
        "text": "O Estado estrangeiro goza de imunidade absoluta de jurisdição na Justiça do Trabalho, impedindo sequer o conhecimento de ação de verbas rescisórias, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "Os bens imóveis utilizados como sede da embaixada ou residência do embaixador podem ser livremente penhorados e levados a leilão na execução trabalhista, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "A imunidade de jurisdição de Estado estrangeiro é relativa na fase de conhecimento: em relações trabalhistas, a Justiça do Trabalho brasileira é competente para processar e julgar a ação trabalhista."
      },
      {
        "letter": "D",
        "text": "Das sentenças proferidas em reclamações trabalhistas contra Estado estrangeiro ou organismo internacional cabe Recurso Ordinário diretamente para o TST, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Cabe suscitar conflito de competência entre uma Vara do Trabalho e o próprio TRT hierarquicamente superior a ela, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "Pela Súmula 420 do TST e Art. 808 da CLT: conflito entre Varas do Trabalho vinculadas a TRTs distintos é julgado pelo tribunal superior do trabalho."
      },
      {
        "letter": "D",
        "text": "O conflito de competência trabalhista tem efeito meramente devolutivo e nunca permite designação de juízo provisório para medidas urgentes, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
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
        "text": "O seguro garantia judicial para substituir depósito recursal deve ser contratado exatamente pelo valor nominal do depósito recursal sem qualquer acréscimo, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "A substituição do depósito recursal por seguro garantia judicial só é admitida se o empregado reclamante concordar expressamente, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
      },
      {
        "letter": "C",
        "text": "Da CLT e do Ato Conjunto TST.CSJT.CGJT nº 1/2019, a apólice de seguro garantia judicial em substituição ao depósito recursal deve observar: acréscimo de no mínimo 30% sobre o valor do depósito recursal legal."
      },
      {
        "letter": "D",
        "text": "O seguro garantia judicial pode ser utilizado apenas na fase de execução trabalhista, sendo vedado na fase recursal, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "A simples menção ao nome do advogado na petição inicial ou recurso sem procuração nos autos configura mandato tácito no Processo do Trabalho, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Na Súmula 383 do TST, o advogado que apresenta procuração com prazo de validade vencido sofre o não conhecimento imediato do recurso sem chance de saneamento, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "I e II, do TST: é inadmissível recurso firmado por advogado sem procuração juntada aos autos até o momento da sua interposição, salvo mandato tácito. 104 CPC, o item I da Súmula 383 não admite prazo saneador."
      },
      {
        "letter": "D",
        "text": "O advogado com mandato tácito pode substabelecer normalmente seus poderes a outro colega advogado sem procuração expressa, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau."
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
        "text": "A perempção trabalhista ocorre somente após 3 arquivamentos seguidos e extingue definitivamente o direito de ação para sempre, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "O prazo para o reclamante que apresentou reclamação verbal comparecer à Vara do Trabalho para reduzi-la a termo é de 15 dias úteis, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Em ambos os casos incide a perempção temporária trabalhista de 6 (seis) meses. Aquele que, tendo apresentado ao distribuidor reclamação verbal, não se apresentar no prazo de 5 dias à Vara para fazê-la tomar por termo incorrerá na pena de perda, pelo prazo de 6 meses, do direito de reclamar perante a Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Durante os 6 meses da perempção trabalhista, suspende-se automaticamente o curso do prazo prescricional de 2 anos do empregado, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "A cobrança de depósitos não realizados de FGTS continua submetida à prescrição trintenária (30 anos) em qualquer contrato iniciado antes de 2014, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
      },
      {
        "letter": "B",
        "text": "Aplica-se a prescrição quinquenal.: (I) para os casos em que a ciência da lesão ocorreu a partir de 13/11/2014, aplica-se diretamente a prescrição de 5 anos."
      },
      {
        "letter": "C",
        "text": "Mesmo quando a verba trabalhista principal (ex.: horas extras) já está prescrita, o FGTS incidente sobre essa parcela prescrita ainda pode ser cobrado autonomamente."
      },
      {
        "letter": "D",
        "text": "A ausência de recolhimento do FGTS durante o contrato gera prescrição de 2 anos contados mês a mês de cada depósito omitido mesmo com o contrato ativo, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Fechada a empresa ou demolido o estabelecimento antes da perícia, o pedido de adicional de insalubridade deve ser automaticamente julgado improcedente por impossibilidade da prova pericial obrigatória, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau."
      },
      {
        "letter": "B",
        "text": "A realização de perícia é obrigatória para verificação de insalubridade, mas quando não for possível sua realização. a verificação mediante perícia de prestação de serviços em condições nocivas, considerado agente insalubre diverso do apontado na inicial, não prejudica o pedido de adicional de insalubridade."
      },
      {
        "letter": "C",
        "text": "Se o reclamante pediu adicional de insalubridade por ruído e o perito constatou insalubridade apenas por agente químico, o juiz não pode deferir o adicional sob pena de julgamento extra petita, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "O juiz do trabalho fica absolutamente vinculado à conclusão do laudo pericial médico ou de engenharia, não podendo decidir contrariamente a ele, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "A prova emprestada no Processo do Trabalho somente pode ser admitida se houver concordância expressa de ambas as partes envolvidas, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "Sim. e jurisprudência pacífica da SDI-1 do TST, o juiz poderá admitir a utilização de prova emprestada de outro processo, atribuindo-lhe o valor que considerar adequado, observado o contraditório."
      },
      {
        "letter": "C",
        "text": "A prova emprestada só é válida entre processos que tenham exatamente o mesmo autor e o mesmo réu, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Mensagens de WhatsApp, registros de geolocalização ou e-mails corporativos são provas ilícitas na Justiça do Trabalho por violarem sempre a intimidade, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
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
        "text": "Não cabe ação de consignação em pagamento na Justiça do Trabalho por incompatibilidade procedimental com a CLT, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral."
      },
      {
        "letter": "B",
        "text": "O empregador deve ajuizar ação de consignação em pagamento perante a Vara do Trabalho competente, requerendo autorização para depósito judicial do valor rescisório incontroverso dentro do prazo de 10 dias contados do término do contrato."
      },
      {
        "letter": "C",
        "text": "Na ação de consignação em pagamento por falecimento do empregado, os valores do FGTS e saldo salarial seguem exclusivamente a ordem de inventário civil do cônjuge separado de fato, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "Se o empregador ajuizar a consignação no 9º dia após a demissão, mas só efetuar o depósito judicial 15 dias depois, ainda assim afasta a multa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
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
        "text": "A Ação Monitória é vedada na Justiça do Trabalho porque o único título de cobrança documental trabalhista é a reclamação ordinária. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Sim. A Ação Monitória é compatível com o Processo do Trabalho, permitindo ao credor munido de prova escrita sem eficácia de título executivo pleitear a expedição de mandado monitório para pagamento em 15 dias. Se o réu não pagar nem embargar, constitui-se de pleno direito o título executivo judicial."
      },
      {
        "letter": "C",
        "text": "Para oferecer Embargos Monitórios na Justiça do Trabalho, o réu é obrigado a depositar integralmente o valor cobrado como garantia do juízo, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "A Ação Monitória trabalhista não pode ser ajuizada contra a Fazenda Pública, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória."
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
        "text": "A Ação Anulatória de cláusula de Convenção Coletiva de Trabalho é proposta perante a Vara do Trabalho de 1º grau pelo empregado individualmente, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "A medida cabível para desconstituir em abstrato cláusula ilegal de ACT ou CCT é a ação anulatória de cláusula convencional, de competência originária do tribunal regional do trabalho ou da SDC do TST. o ministério público do trabalho possui legitimidade ativa para propor Ação Anulatória, exigindo-se a formação de litisconsórcio passivo necessário com ambos os sindicatos/empresas convenentes."
      },
      {
        "letter": "C",
        "text": "Na Ação Anulatória proposta pelo MPT contra cláusula de CCT, basta citar apenas o sindicato patronal no polo passivo, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "Da decisão definitiva proferida pelo TRT em Ação Anulatória originária cabe Recurso de Revista ao TST, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "Se faltar documento indispensável na petição inicial de Mandado de Segurança na jt, o desembargador relator deve abrir prazo de 15 dias para emenda."
      },
      {
        "letter": "B",
        "text": "Não. Por dois motivos peremptórios: o prazo para impetração do Mandado de Segurança é decadencial de 120 dias contados da ciência do ato impugnado."
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
        "text": "Compete à justiça do trabalho processar e julgar habeas corpus e habeas data quando o ato questionado envolver matéria sujeita à sua jurisdição."
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
        "text": "Se a sentença trabalhista for ultra petita, o TRT deve obrigatoriamente anular todo o processo desde a audiência inaugural e devolver à Vara, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "A condenação a parcela de natureza jurídica distinta não pedida configura julgamento extra petita (fora do pedido), enquanto conceder quantidade superior ao pedido certo/limitado configura julgamento ultra petita."
      },
      {
        "letter": "C",
        "text": "O juiz do trabalho pode condenar ao pagamento de adicional de periculosidade quando o empregado pediu exclusivamente adicional de insalubridade e o perito afastou a insalubridade, com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária."
      },
      {
        "letter": "D",
        "text": "A condenação de ofício aos juros de mora, correção monetária e descontos previdenciários/fiscais sem pedido expresso na inicial configura julgamento extra petita, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "O prazo para interposição do Recurso Extraordinário contra acórdão do TST é de 8 dias úteis, seguindo o padrão recursal da CLT, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Cabe recurso extraordinário (RE) para o STF, cujo prazo é de 15 dias úteis, exigindo demonstração de repercussão geral e recolhimento de preparo segundo tabela do STF. não cabe RE contra acórdão que defere ou indefere medida liminar/tutela provisória."
      },
      {
        "letter": "C",
        "text": "Na interposição do Recurso Extraordinário ao STF, o empregador é obrigado a recolher novo depósito recursal trabalhista da tabela do TST, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "Quando o TST nega provimento ao Recurso de Revista por ausência de transcendência ou ausência de pressuposto intrínseco processual, o STF conhece amplamente do Recurso Extraordinário para reanalisar os pressupostos do RR, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias."
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
        "text": "Cabe agravo interno dirigido ao próprio órgão colegiado (Turma/Seção) no prazo de 8 dias úteis."
      },
      {
        "letter": "B",
        "text": "O prazo para interposição de Agravo Interno contra decisão monocrática de relator no TRT ou no TST é de 15 dias úteis."
      },
      {
        "letter": "C",
        "text": "Contra decisão do Vice-Presidente do TST que nega seguimento a Recurso Extraordinário com base em Tema de Repercussão Geral do STF, cabe Agravo em Recurso Extraordinário diretamente ao STF."
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
        "text": "É o incidente de assunção de competência. Diferente do IRDR e do IRR, o IAC é cabível quando o julgamento de recurso, remessa necessária ou processo de competência originária envolver relevante questão de direito, com grande repercussão social, sem repetição em múltiplos processos."
      },
      {
        "letter": "B",
        "text": "O Incidente de Assunção de Competência exige a comprovação de pelo menos 100 processos idênticos em tramitação no Tribunal, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "O acórdão proferido no Incidente de Assunção de Competência possui eficácia meramente persuasiva sobre as Varas do Trabalho vinculadas ao Tribunal, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "O IAC é instituto exclusivo da Justiça Comum, sendo inaplicável na Justiça do Trabalho por omissão da CLT, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória."
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
        "text": "Não. e Súmula 8 do TST, as questões de fato não propostas no juízo inferior só poderão ser suscitadas na apelação/Recurso Ordinário se a parte provar que deixou de fazê-lo por motivo de força maior."
      },
      {
        "letter": "B",
        "text": "Pelo efeito devolutivo amplo do Recurso Ordinário trabalhista, as partes podem juntar livremente documentos antigos no TRT sem qualquer justificativa, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau."
      },
      {
        "letter": "C",
        "text": "Na Súmula 393, II, do TST, caso o juiz da Vara não tenha examinado um pedido de mérito após afastar prejudicial ou extinguir sem mérito, o TRT deve obrigatoriamente anular e devolver os autos à Vara."
      },
      {
        "letter": "D",
        "text": "Matérias de direito não analisadas na sentença, ainda que contidas na petição inicial, não podem ser apreciadas pelo TRT no recurso da parte. Tal disciplina reflete a autonomia procedimental própria do processo judiciário do trabalho."
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
        "text": "Do TST, a ausência de pagamento das custas que foram atribuídas ao vencedor em primeiro grau ou a inversão do ônus da sucumbência no TRT exige que a empresa."
      },
      {
        "letter": "B",
        "text": "Invertido o ônus da sucumbência no TRT, a empresa que pretende interpor Recurso de Revista é obrigada a pagar novamente aos cofres públicos o mesmo valor de custas já recolhido pelo autor, sob pena de deserção."
      },
      {
        "letter": "C",
        "text": "Se a empresa pagou o depósito recursal em dobro por engano e teve sua condenação minorada, o juiz nunca restitui custas recolhidas, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
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
        "text": "Sim. Atenção à importantíssima exceção. Embora na execução trabalhista comum o Recurso de Revista só caiba por violação direta à Constituição Federal, o § 10 prevê expressamente que: \"Cabe recurso de revista por violação a lei federal, por divergência jurisprudencial e por ofensa à Constituição Federal nas execuções fiscais e nas controvérsias da fase de execução que envolvam a certidão negativa de débitos trabalhistas (cndt)\"."
      },
      {
        "letter": "B",
        "text": "Em qualquer processo de execução na Justiça do Trabalho, inclusive execução fiscal de multas administrativas, o Recurso de Revista limita-se exclusivamente à ofensa direta à CF. O descumprimento da formalidade impede o exame do mérito pelo órgão recursal trabalhista."
      },
      {
        "letter": "C",
        "text": "As multas administrativas impostas pelos Auditores-Fiscais do Trabalho continuam sendo executadas na Justiça Federal comum, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "Nas execuções de Termos de Ajustamento de Conduta (tac) do MPT também se aplica a trava da Súmula 266 do TST, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Quando manifestamente protelatórios os embargos de declaração, o juiz ou tribunal, em decisão fundamentada, condenará o embargante a pagar ao embargado multa não excedente A 2% (dois por cento) sobre o valor atualizado da causa."
      },
      {
        "letter": "B",
        "text": "Na primeira oposição de embargos de declaração protelatórios, a interposição do Recurso Ordinário já fica condicionada ao pagamento prévio da multa de 2%, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Os embargos de declaração protelatórios nunca interrompem o prazo para o recurso principal, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral."
      },
      {
        "letter": "D",
        "text": "A multa por embargos protelatórios reverte sempre em favor da União (Cofres Públicos), sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
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
        "text": "Se o valor da causa não constar, o juiz o fixará antes de passar à instrução; se qualquer das partes impugnar o valor fixado pelo juiz e o juiz o mantiver, poderá a parte impugnante formular pedido de revisão para o presidente do tribunal regional do trabalho (TRT), no prazo de 48 horas a contar da decisão em razões finais."
      },
      {
        "letter": "B",
        "text": "Contra a decisão do juiz que fixa o valor da causa na audiência trabalhista cabe Agravo de Instrumento no prazo de 8 dias, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "A alçada do rito sumário (até 2 salários mínimos) calcula-se com base no salário mínimo vigente na data da sentença final, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "O valor da causa no Processo do Trabalho é sempre fixado livremente pelo autor por mera estimativa simbólica de R$ 1.000,00 mesmo quando há pedidos liquidados que somam R$ 80.000,00. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
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
        "text": "A notificação inicial no Processo do Trabalho não precisa ser pessoal, bastando a entrega no endereço correto do destinatário. presume-se recebida a notificação 48 (quarenta e oito) horas depois de sua postagem."
      },
      {
        "letter": "B",
        "text": "A citação inicial da reclamada na Justiça do Trabalho exige entrega em mãos próprias do representante legal da empresa por Oficial de Justiça, sob pena de nulidade, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "O ônus de provar que o reclamado efetivamente recebeu a correspondência postal no prazo de 48 horas incumbe sempre ao reclamante, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "O prazo mínimo que deve mediar entre o recebimento da notificação inicial e a realização da audiência trabalhista é de 15 dias úteis para empresas privadas e 20 dias para a Fazenda Pública, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
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
        "text": "Recusando-se o empregador a anotar a CTPS, a secretaria da vara do trabalho fará as devidas anotações."
      },
      {
        "letter": "B",
        "text": "Havendo previsão na CLT de que a Secretaria da Vara pode anotar a CTPS, é ilícito ao juiz fixar multa diária (astreintes) contra o empregador, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "O valor acumulado das astreintes na Justiça do Trabalho reverte em favor do Fundo de Amparo ao Trabalhador (fat) ou da União, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
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
        "text": "Sim, dentro da razoabilidade. Embora a antiga redação da OJ 153 da SDI-2 do TST proibisse absolutamente qualquer penhora de salários/aposentadorias na vigência do CPC/1973, o TST atualizou a OJ 153 da SDI-2 para adequá-la ao Art. 833, § 2º, do CPC/2015: hoje, a regra de impenhorabilidade de vencimentos, salários e proventos de aposentadoria não se aplica à hipótese de penhora para pagamento de prestação alimentícia, desde que preservada a dignidade/subsistência do devedor."
      },
      {
        "letter": "B",
        "text": "Por força da OJ 153 da SDI-2 do TST, continua absolutamente proibido penhorar qualquer percentual de salário ou aposentadoria do sócio executado abaixo de 50 salários mínimos, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória."
      },
      {
        "letter": "C",
        "text": "Os valores depositados em caderneta de poupança de até 40 salários mínimos também podem ser penhorados livremente para pagar qualquer dívida trabalhista comum sem exceção, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Contra a decisão do juiz na execução definitiva que determina penhora online em conta salarial bloqueando 100% da remuneração do executado, não cabe Mandado de Segurança, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "O único imóvel residencial do empregador continua penhorável para pagamento de créditos trabalhistas de empregados domésticos que trabalhavam na residência, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "Para que o único imóvel residencial goze da proteção da Lei nº 8.009/90 contra penhora trabalhista, exige-se prévia escritura pública averbada no Registro de Imóveis, com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária."
      },
      {
        "letter": "C",
        "text": "A vaga de garagem com matrícula autônoma no registro de imóveis também é absolutamente impenhorável junto com o apartamento residencial, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "Não. A Lei Complementar nº 150/2015 revogou expressamente o inciso I. Hoje, o único imóvel residencial da família não pode mais ser penhorado nem para dívida trabalhista de empregado doméstico nem de empregado comum."
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
        "text": "A penhora de faturamento da empresa pode ser decretada em 1º lugar antes mesmo da tentativa de bloqueio de dinheiro via sisbajud ou penhora de veículos, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "A OJ 93 da SDI-2 do TST permite penhorar até 80% do faturamento bruto da empresa mesmo que isso acarrete paralisação imediata e demissão de todos os trabalhadores, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "A penhora de estabelecimento comercial inteiro (empresa) é vedada sempre que houver faturamento positivo, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 866 do CPC e OJ 93 da SDI-2 do TST, é admissível a penhora de renda/faturamento da empresa executada quando inexistirem outros bens passíveis de penhora, desde que seja fixado percentual que não torne inviável o exercício da atividade empresarial; e seja nomeado administrador-depositário que submeterá à aprovação judicial a forma de efetivação da constrição e prestará contas mensalmente."
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
        "text": "A fraude à execução trabalhista anula a compra e venda com efeito erga omnes e exige sempre o ajuizamento de ação pauliana autônoma na Vara Cível, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Se a venda do imóvel pelo executado ocorreu antes mesmo do ajuizamento de qualquer reclamação trabalhista, ainda assim configura fraude à execução declarada de ofício, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Antes de reconhecer a fraude à execução e desconstituir a venda contra o terceiro adquirente, o juiz deve dispensar sua intimação, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau."
      },
      {
        "letter": "D",
        "text": "Quando a alienação ocorre após o ajuizamento/citação válida da demanda capaz de reduzir o devedor à insolvência, trata-se de fraude à execução, ato processual ineficaz perante o exequente que pode ser declarado incidentalmente nos próprios autos da execução trabalhista."
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
        "text": "A Certidão Negativa de Débitos Trabalhistas (cndt) tem prazo de validade de 30 dias e custa taxa federal equivalente a 2% do salário mínimo."
      },
      {
        "letter": "B",
        "text": "A simples propositura de reclamação trabalhista ainda em fase de conhecimento impede automaticamente a empresa reclamada de obter a cndt."
      },
      {
        "letter": "C",
        "text": "Mesmo que a empresa garanta integralmente a execução com depósito ou penhora suficiente e oponha Embargos à Execução, continuará impedida de participar de licitações por constar no bndt."
      },
      {
        "letter": "D",
        "text": "A cndt é expedida gratuita e eletronicamente e tem prazo de validade de 180 (cento e oitenta) dias contados de sua emissão."
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
        "text": "O Imposto de Renda sobre condenações trabalhistas acumuladas de vários anos é calculado de uma só vez sobre o montante global recebido pelo regime de caixa, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "Os juros de mora incidentes sobre as verbas salariais condenadas na Justiça do Trabalho sofrem incidência normal de Imposto de Renda, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "Do TST, é do empregador a responsabilidade pelo recolhimento das contribuições previdenciárias e fiscais resultantes de crédito do empregado oriundo de condenação judicial."
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
        "text": "O prazo em dobro para litisconsortes com advogados distintos aplica-se normalmente aos processos trabalhistas físicos e eletrônicos, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "Quando uma empresa privada litiga em litisconsórcio com um Município, a empresa privada aproveita o prazo em dobro da Fazenda Pública para interpor seu próprio recurso, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Se apenas uma das empresas condenadas solidariamente recorrer pedindo exclusão da lide, seu depósito recursal aproveita automaticamente à outra empresa, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Não. É intempestivo. Pela Orientação Jurisprudencial nº 310 da SDI-1 do TST, é inaplicável ao Processo do Trabalho a norma, por ser incompatível com a celeridade trabalhista — além de o Art. 229, § 2º, CPC já excluir o prazo em dobro nos processos em autos eletrônicos (PJe). Logo, o prazo recursal permanece de 8 dias úteis."
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
        "text": "No Diário Eletrônico da Justiça do Trabalho (DEJT), a data de disponibilização já é considerada a data de publicação, começando o prazo no dia seguinte. Tal disciplina reflete a autonomia procedimental própria do processo judiciário do trabalho."
      },
      {
        "letter": "B",
        "text": "Na intimação via portal eletrônico do PJe (para procuradores cadastrados), a intimação considera-se feita imediatamente no segundo seguinte ao envio pelo cartório."
      },
      {
        "letter": "C",
        "text": "A petição eletrônica protocolada às 23h45 do último dia do prazo é intempestiva se o expediente físico da Vara encerrar às 18h, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "Considera-se como data da publicação o 1º dia útil seguinte ao da disponibilização no DEJT (quinta-feira), e o prazo começa a correr no 1º dia útil seguinte ao da publicação (sexta-feira)."
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
        "text": "A fiança bancária e o seguro garantia judicial exigem apenas o valor nominal exato da dívida executada, sem acréscimo percentual, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Na execução trabalhista definitiva nunca se admite substituir penhora de dinheiro em conta corrente por seguro garantia judicial com +30%, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "O executado pode substituir livremente o dinheiro bloqueado via sisbajud por veículo ou terreno bem localizado sem concordância do exequente, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "D",
        "text": "Sim. para fins de substituição da penhora, equiparam-se a dinheiro a fiança bancária e o seguro garantia judicial, desde que em valor não inferior ao do débito constante da inicial/execução, acrescido de 30% (trinta por cento)."
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
        "text": "O depósito judicial integral em dinheiro para garantia do juízo nunca cessa os encargos moratórios do devedor até o efetivo levantamento pelo credor, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Os juros moratórios trabalhistas incidem apenas sobre o salário nominal puro, excluindo a correção monetária, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "Na condenação trabalhista contra a Fazenda Pública, os juros e correção seguem exatamente o Art. 39 da Lei 8.177/91 sem aplicação da EC 113/2021, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Sim, conforme entendimento pacificado do TST, o depósito integral em dinheiro para garantia do juízo na execução faz cessar a responsabilidade do devedor pela atualização monetária e juros de mora futuros a partir do efetivo depósito à disposição do juízo, passando o valor depositado a render pelos índices bancários da conta judicial."
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
        "text": "A transcrição integral de todo o acórdão do TRT sem nenhum destaque supre perfeitamente o requisito, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo."
      },
      {
        "letter": "B",
        "text": "Na alegação de nulidade por negativa de prestação jurisdicional em Recurso de Revista, basta afirmar que o TRT foi omisso, dispensando qualquer transcrição. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Se a tese jurídica recorrida violar a lei desde a primeira vez em que surgiu no próprio acórdão do TRT, ainda assim é obrigatório opor Embargos de Declaração para prequestionamento, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau."
      },
      {
        "letter": "D",
        "text": "Não. e jurisprudência pacífica da SDI-1 do TST: sob pena de não conhecimento, é ônus da parte indicar o trecho exato da decisão recorrida que consubstancia o prequestionamento da controvérsia."
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
        "text": "Admitido o Recurso de Revista por apenas um dos temas pelo Presidente do TRT, todo o recurso sobe integralmente ao TST pela antiga Súmula 285 do TST, com prosseguimento regular da demanda mediante atuação pessoal das partes em qualquer grau. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "B",
        "text": "Se o Presidente do TRT silenciar totalmente sobre um dos temas do Recurso de Revista no despacho de admissibilidade, o TST o apreciará diretamente de ofício, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Não. Ocorreu preclusão quanto ao capítulo denegado. Pela Instrução Normativa nº 40/2016 do TST, admitido apenas parcialmente o Recurso de Revista, constitui ônus da parte impugnar, mediante agravo de instrumento (em 8 dias úteis), o capítulo denegatório da decisão, sob pena de preclusão."
      },
      {
        "letter": "D",
        "text": "No Agravo de Instrumento interposto contra despacho que trancou o Recurso de Revista, a empresa é dispensada de recolher qualquer depósito recursal mesmo sem ter atingido o valor total da condenação, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "Qualquer erro de dígito no número do processo ou código de receita na guia de custas gera deserção automática insanável do recurso trabalhista, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "B",
        "text": "Caso o recorrente pague as custas e o depósito no 9º dia útil (um dia após o fim do prazo recursal), poderá convalidar o atraso mediante intimação de 5 dias, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Não de imediato. e jurisprudência atualizada da SDI-1 do TST, o equívoco no preenchimento da guia de custas ou depósito recursal não implica a pena de deserção imediata: cabe ao relator intimar o recorrente para, no prazo de 5 dias, sanar o vício."
      },
      {
        "letter": "D",
        "text": "Se a empresa interpuser dois recursos sucessivos sobre a mesma condenação após já ter garantido 100% do valor total da condenação no primeiro depósito, precisa depositar novamente o teto no segundo recurso, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Por força da Súmula 136 do TST, o juiz que encerra a audiência de instrução fica absolutamente vinculado aos autos e obrigado a proferir a sentença mesmo após remoção para outra Vara, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho, a audiência deve ser obrigatoriamente fracionada em três atos distintos (conciliação, defesa e instrução), sob pena de nulidade. O descumprimento da formalidade impede o exame do mérito pelo órgão recursal trabalhista."
      },
      {
        "letter": "C",
        "text": "Não. 132 do CPC/73. Assim, qualquer magistrado em exercício regular na Vara do Trabalho pode proferir a sentença validamente com base nas provas registradas em ata/gravação, ainda que não tenha colhido a instrução."
      },
      {
        "letter": "D",
        "text": "Na audiência trabalhista, a defesa oral em sala tem duração máxima de 10 minutos e as razões finais orais têm duração de 20 minutos, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "Para executar o devedor subsidiário que consta na sentença, o juiz do trabalho deve obrigatoriamente instaurar antes o IDPJ contra todos os sócios da devedora principal, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "Mesmo que a tomadora de serviços não tenha participado da fase de conhecimento, pode ser incluída diretamente na execução como responsável subsidiária, com impossibilidade de reexame de matéria fática ou probatória nas instâncias extraordinárias. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Não. Pela jurisprudência pacífica do TST, na execução trabalhista, frustrados os meios executórios contra a devedora principal, a execução redireciona-se diretamente contra a devedora subsidiária (tomadora) constante do título executivo, pois ambos são devedores subsidiários e o credor trabalhista tem prioridade alimentar."
      },
      {
        "letter": "D",
        "text": "A devedora subsidiária que quita o débito na execução trabalhista não possui direito de regresso contra a prestadora na Justiça Comum, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "A fluência do prazo prescricional intercorrente de 2 anos inicia-se quando o exequente deixa de cumprir determinação judicial no curso da execução."
      },
      {
        "letter": "D",
        "text": "Da sentença do juiz da execução que pronuncia de ofício a prescrição intercorrente e extingue a execução cabe Recurso Ordinário, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "O exequente que perde Impugnação à Sentença de Liquidação é condenado ao pagamento das custas fixas de R$ 44,26, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "No processo de execução são devidas custas, de responsabilidade exclusiva do executado, e pagas ao final."
      },
      {
        "letter": "D",
        "text": "Na execução trabalhista não existem emolumentos nem custas sobre carta de arrematação ou adjudicação, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "Sim. o documento em cópia oferecido para prova poderá ser declarado autêntico pelo próprio advogado, sob sua responsabilidade pessoal."
      },
      {
        "letter": "D",
        "text": "A declaração de autenticidade pelo advogado é incompatível com a juntada de acórdãos para comprovação de divergência em Recurso de Revista."
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
        "text": "Toda entidade sem fins lucrativos é totalmente isenta do depósito recursal e das custas processuais na Justiça do Trabalho, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "B",
        "text": "As entidades filantrópicas também são obrigadas a garantir integralmente o juízo para poder opor Embargos à Execução, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "Não. Cuidado máximo com a distinção exata dos §§ 9º e 10. As entidades sem fins lucrativos em geral têm apenas redução de 50% do depósito recursal. Já a isenção total (100%) do depósito recursal do § 10 aplica-se apenas às entidades filantrópicas, aos beneficiários da justiça gratuita e às empresas em recuperação judicial. Como não recolheu os 50% nem custas, o recurso é deserto."
      },
      {
        "letter": "D",
        "text": "O microempreendedor individual (MEI) e a microempresa (ME) são totalmente isentos de depósito recursal, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho. O descumprimento da formalidade impede o exame do mérito pelo órgão recursal trabalhista."
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
        "text": "Na Justiça do Trabalho é proibido o litisconsórcio ativo facultativo entre empregados da mesma empresa, sem admissão de fracionamento de instância nem recurso imediato de decisão interlocutória."
      },
      {
        "letter": "B",
        "text": "O juiz do trabalho não pode limitar o número de autores numa reclamação plúrima com 80 reclamantes nem determinar o desmembramento, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral."
      },
      {
        "letter": "C",
        "text": "Sim. sendo várias as reclamações e havendo identidade de matéria, poderão ser acumuladas num só processo se se tratar de empregados da mesma empresa ou estabelecimento; contudo, o juiz poderá limitar o litisconsórcio facultativo quanto ao número de litigantes quando este comprometer a rápida solução do litígio ou dificultar a defesa/cumprimento da sentença. E quanto ao rito/alçada."
      },
      {
        "letter": "D",
        "text": "Em caso de reclamação trabalhista plúrima com 5 autores, cada parte poderá ouvir até 15 testemunhas (3 por autor), observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "Mesmo nas sentenças ilíquidas contra Municípios, presume-se sempre que o valor é inferior a 100 salários mínimos, dispensando a remessa necessária. O descumprimento da formalidade impede o exame do mérito pelo órgão recursal trabalhista."
      },
      {
        "letter": "B",
        "text": "Na remessa necessária trabalhista, o TRT pode agravar a condenação imposta à Fazenda Pública mesmo sem recurso do reclamante, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Sim. e jurisprudência pacífica do TST: a dispensa da remessa necessária fundada nos pisos de alçada pressupõe condenação líquida ou proveito econômico certo abaixo daqueles limites."
      },
      {
        "letter": "D",
        "text": "Se o juiz deixar de submeter a sentença sujeita a remessa necessária ao TRT, ela transita em julgado normalmente após 16 dias úteis, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
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
        "text": "Pela regra geral e interpretação sistemática do TST sobre o Art. 75-B da CLT, a competência territorial pertence em regra ao local onde o empregado prestou OS serviços."
      },
      {
        "letter": "B",
        "text": "O teletrabalhador só pode ajuizar reclamação trabalhista na cidade onde fica a matriz da empresa, sendo incompetente o foro de sua prestação remota, com dispensa de depósito recursal e recolhimento prévio de custas para conhecimento do apelo."
      },
      {
        "letter": "C",
        "text": "As convenções coletivas aplicadas ao teletrabalhador são sempre as do sindicato da cidade onde ele comprou sua residência durante o home office."
      },
      {
        "letter": "D",
        "text": "Se o empregador contratar o teletrabalhador no Brasil para atuar em sede estrangeira, a Justiça do Trabalho brasileira perde competência absoluta, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "Não. O recurso da empresa Beta será considerado deserto. do TST, havendo condenação solidária de duas ou mais empresas, o depósito recursal efetuado por uma delas só aproveita às demais quando a empresa que efetuou o depósito não pleiteia sua exclusão da lide. Como Alfa pediu sua própria exclusão da lide, Beta não pode aproveitar o depósito de Alfa."
      },
      {
        "letter": "B",
        "text": "Em qualquer condenação solidária, o depósito recursal recolhido por uma empresa sempre aproveita às demais corréus independentemente dos pedidos formulados no recurso, com reexame amplo de fatos, provas e pedidos não deduzidos na instância originária."
      },
      {
        "letter": "C",
        "text": "Mesmo quando duas empresas são condenadas de forma meramente subsidiária (e não solidária), aplica-se a Súmula 128, III, permitindo à tomadora aproveitar o depósito se pedir exclusão. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Quando ambos os réus recorrem sem que nenhum peça exclusão da lide, os dois devem pagar integralmente 100% do depósito recursal mesmo que um já tenha garantido toda a condenação, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
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
        "text": "São impenhoráveis os livros, as máquinas, as ferramentas, os utensílios, os instrumentos ou outros bens móveis necessários ou úteis ao exercício da profissão do executado pessoa física."
      },
      {
        "letter": "B",
        "text": "A impenhorabilidade de máquinas e instrumentos de trabalho impede sempre a penhora de quaisquer máquinas industriais de grandes sociedades anônimas, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "C",
        "text": "Na execução trabalhista, os valores recebidos a título de seguro de vida são livremente penhoráveis pelo inciso VI, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "D",
        "text": "O Art. 835 do CPC coloca os bens imóveis em 1º lugar na ordem preferencial de penhora trabalhista, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "No Processo do Trabalho, prefere-se hoje a oitiva por videoconferência. Se a testemunha da comarca local faltar após convite comprovado, o juiz adia uma vez e determina sua intimação."
      },
      {
        "letter": "B",
        "text": "Na Justiça do Trabalho, a expedição de carta precatória inquiritória suspende automaticamente todo o curso do processo por 180 dias, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "C",
        "text": "Se uma testemunha convidada pela parte não comparecer à audiência de instrução no rito sumaríssimo sem prova de convite prévio, o juiz é obrigado a adiar a audiência indefinidamente."
      },
      {
        "letter": "D",
        "text": "No Processo do Trabalho, a testemunha que faltar após intimação judicial não pode ser conduzida coercitivamente, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
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
        "text": "Não. Por três vícios cumulativos previstos na CLT e nas Súmulas do TST:, do TST, a divergência jurisprudencial deve ser específica, revelando teses diversas na interpretação de um mesmo dispositivo legal embora idênticos os fatos que as ensejaram."
      },
      {
        "letter": "B",
        "text": "Para conhecer de Recurso de Revista por divergência jurisprudencial basta copiar a ementa do outro TRT sem demonstrar semelhança fática nem fazer cotejo analítico, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa."
      },
      {
        "letter": "C",
        "text": "Aresto de Turma do próprio TST serve perfeitamente como divergência jurisprudencial apta a fundamentar Recurso de Revista, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral."
      },
      {
        "letter": "D",
        "text": "Quando o recurso funda-se em divergência extraída do site oficial do TRT na internet, a Súmula 337 do TST proíbe o aproveitamento sem certidão cartorária física, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
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
        "text": "Sim. em se tratando de empregador que promova realização de atividades fora do lugar do contrato de trabalho, é assegurado ao empregado apresentar reclamação no foro da celebração do contrato (Recife/PE) ou no da prestação dos respectivos serviços (Fortaleza/CE)."
      },
      {
        "letter": "B",
        "text": "Mesmo quando o empregador realiza atividades fora do lugar do contrato (circo/eventos itinerantes), a competência continua exclusiva do último local de prestação, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal."
      },
      {
        "letter": "C",
        "text": "Se empregado brasileiro for contratado no Brasil para trabalhar permanentemente em filial no exterior, aplica-se sempre exclusivamente a lei trabalhista estrangeira, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Quando o empregado presta serviços sucessivamente em vários municípios distintos com transferência definitiva, deve propor uma ação separada em cada município, com processamento imediato do incidente nos mesmos autos e suspensão integral da execução."
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
        "text": "Os honorários advocatícios de sucumbência (5% a 15%) são devidos também nas ações contra a fazenda pública."
      },
      {
        "letter": "B",
        "text": "Nas ações trabalhistas contra a Fazenda Pública, aplicam-se os percentuais escalonados de 1% a 20% por omissão da CLT, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho."
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
