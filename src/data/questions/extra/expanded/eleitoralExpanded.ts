// Arquivo gerado automaticamente por scripts/migrateQuestions.ts — NÃO editar manualmente.
import type { LegalQuestion } from '../../../../types';

export const ELEITORAL_EXPANDED_QUESTIONS: LegalQuestion[] = [
  {
    "id": "mig_eleit_001",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Princípio da Anterioridade / Anualidade Eleitoral (Art. 16 da Constituição Federal)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Lei federal promulgada e publicada em fevereiro de 2026 altera as regras de cálculo das sobras eleitorais e a ordem de suplência para as eleições gerais marcadas para outubro de 2026.",
    "options": [
      {
        "letter": "A",
        "text": "A lei nova aplica-se imediatamente às eleições de outubro de 2026 porque foi publicada mais de seis meses antes do pleito. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "B",
        "text": "O princípio da anterioridade eleitoral aplica-se apenas a leis ordinárias, não alcançando emendas constitucionais que mudam regras eleitorais, com cassação do registro ou diploma e imposição de multa após regular instrução processual."
      },
      {
        "letter": "C",
        "text": "Mudanças de jurisprudência do TSE sem alteração legal nunca estão sujeitas à anterioridade anual eleitoral, em estrita observância à soberania popular, à legitimidade do pleito e à isonomia eleitoral. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      },
      {
        "letter": "D",
        "text": "A lei entra em vigor na data de sua publicação, mas não se aplica à eleição de outubro de 2026, pois a lei que alterar o processo eleitoral entrará em vigor na data de sua publicação, não se aplicando à eleição que ocorra até um ano da data de sua vigência."
      }
    ],
    "correctAnswer": "D",
    "justification": "Pelo Art. 16 da Constituição Federal, a lei que alterar o processo eleitoral entra em vigor na data de sua publicação, mas só se aplica às eleições que ocorram após um ano da data de sua vigência — regra vinculante inclusive a emendas constitucionais (STF ADI 3.685) e a viragens jurisprudenciais do TSE (STF Tema 564).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 16 da CF fixa o prazo mínimo de UM ANO (e não seis meses) antes do pleito para que alterações do processo eleitoral tenham eficácia na eleição."
      },
      {
        "letter": "B",
        "explanation": "Segundo o STF (ADI 3.685), o Art. 16 da CF configura garantia fundamental da segurança jurídica e cláusula pétrea, aplicando-se inclusive a emendas constitucionais."
      },
      {
        "letter": "C",
        "explanation": "No RE 637.485 (Tema 564), o STF estendeu o princípio da segurança jurídica e da anterioridade anual (Art. 16 CF) também às viragens jurisprudenciais do TSE em matéria eleitoral ocorridas dentro do ano da eleição!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 16 da Constituição Federal (EC nº 4/1993) e Jurisprudência do STF",
        "textSnippet": "Pelo Art. 16 da Constituição Federal, a lei que alterar o processo eleitoral entra em vigor na data de sua publicação, mas só se aplica às eleições que ocorram após um ano da data de sua vigência — regra vinculante inclusive a emendas constitucionais (STF ADI 3.685) e a viragens jurisprudenciais do TSE (STF Tema 564)."
      }
    ],
    "jurisprudence": "STF ADI 3.685 e Tema 564",
    "professorTip": "Art. 16 CF (Anterioridade/Anualidade Eleitoral): lei entra em vigor na hora, mas só vale para eleição > 1 ANO depois (vale até para EC e virada jurisprudencial do TSE!)."
  },
  {
    "id": "mig_eleit_002",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Competência Legislativa Privativa em Direito Eleitoral e Poder Normativo do TSE",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Assembleia Legislativa estadual aprova lei criando nova hipótese de inelegibilidade para deputados estaduais e reduzindo o prazo de prestação de contas eleitorais locais.",
    "options": [
      {
        "letter": "A",
        "text": "Os Estados possuem competência concorrente para legislar sobre inelegibilidades e prazos eleitorais nas eleições estaduais e municipais, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "As resoluções expedidas pelo Tribunal Superior Eleitoral têm força de lei complementar e podem criar livremente novas hipóteses de inelegibilidade, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      },
      {
        "letter": "C",
        "text": "As instruções do TSE sobre eleições devem ser expedidas até 15 de agosto do ano da eleição, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "A lei estadual é formalmente inconstitucional, pois compete privativamente à União legislar sobre direito eleitoral, cabendo ao TSE expedir instruções até 5 de março do ano eleitoral."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 22, I, da CF, legislar sobre direito eleitoral é competência privativa da União. A Justiça Eleitoral exerce função atípica normativa por meio de resoluções do TSE (até 5 de março do ano eleitoral), de caráter secundário/regulamentar, vedada a inovação restritiva de direitos políticos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 22, I, da CF atribui competência legislativa PRIVATIVA à União sobre direito eleitoral (inexistindo competência suplementar estadual sem lei complementar autorizadora do parágrafo único)."
      },
      {
        "letter": "B",
        "explanation": "O poder regulamentar do TSE (Art. 23, IX, CE e Art. 105 da Lei nº 9.504/97) não pode restringir direitos nem estabelecer sanções ou inelegibilidades não previstas em lei."
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 105 da Lei nº 9.504/1997, o TSE expedirá todas as instruções necessárias até 5 de março do ano da eleição."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 22, I, da CF e Art. 23, IX, do Código Eleitoral / Art. 105 da Lei nº 9.504/1997",
        "textSnippet": "Nos termos do Art. 22, I, da CF, legislar sobre direito eleitoral é competência privativa da União. A Justiça Eleitoral exerce função atípica normativa por meio de resoluções do TSE (até 5 de março do ano eleitoral), de caráter secundário/regulamentar, vedada a inovação restritiva de direitos políticos."
      }
    ],
    "professorTip": "Art. 22, I CF: Direito Eleitoral = competência PRIVATIVA da União! Resoluções TSE até 5 de março (não podem criar inelegibilidade ou crime!)."
  },
  {
    "id": "mig_eleit_003",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Eleitoral",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Organização da Justiça Eleitoral - Órgãos e Inexistência de Magistratura Própria",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Em aula sobre a estrutura do Poder Judiciário brasileiro, questiona-se quais são os órgãos integrantes da Justiça Eleitoral e como se dá o ingresso em seus quadros de magistrados.",
    "options": [
      {
        "letter": "A",
        "text": "Os Juízes Eleitorais ingressam diretamente por concurso público específico de provas e títulos para a carreira da Magistratura Eleitoral."
      },
      {
        "letter": "B",
        "text": "As Juntas Eleitorais não integram o rol constitucional de órgãos da Justiça Eleitoral, funcionando apenas como comissões administrativas dos partidos."
      },
      {
        "letter": "C",
        "text": "Os Ministros do TSE e membros dos TREs possuem vitaliciedade permanente na Justiça Eleitoral até completarem 75 anos de idade, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "D",
        "text": "São órgãos da Justiça Eleitoral o TSE, os TREs, os Juízes Eleitorais e as Juntas Eleitorais."
      }
    ],
    "correctAnswer": "D",
    "justification": "Conforme os Arts. 118 a 121 da CF, a Justiça Eleitoral compõe-se de TSE, TREs, Juízes Eleitorais e Juntas Eleitorais, caracterizada pela rotatividade e temporariedade de seus membros (mandato de 2 anos, permitida apenas uma recondução consecutiva, garantindo independência e imparcialidade política).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Não existe concurso para \"Juiz Eleitoral\": a função é exercida por juízes de direito estaduais em investidura temporária (em regra por biênio), sem prejuízo da jurisdição comum."
      },
      {
        "letter": "B",
        "explanation": "O Art. 118, IV, da CF lista expressamente as Juntas Eleitorais como órgãos oficiais da Justiça Eleitoral."
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 121, § 2º, da CF, os juízes dos tribunais eleitorais servirão por 2 anos, no mínimo, e nunca por mais de 2 biênios consecutivos (máximo 4 anos seguidos)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 118 a 121 da Constituição Federal",
        "textSnippet": "Conforme os Arts. 118 a 121 da CF, a Justiça Eleitoral compõe-se de TSE, TREs, Juízes Eleitorais e Juntas Eleitorais, caracterizada pela rotatividade e temporariedade de seus membros (mandato de 2 anos, permitida apenas uma recondução consecutiva, garantindo independência e imparcialidade política)."
      }
    ],
    "professorTip": "Órgãos da JE (Art. 118 CF): TSE, TREs, Juízes Eleitorais e Juntas Eleitorais! Sem quadro próprio vitalício; mandato nos tribunais = 2 anos (máx. 2 biênios consecutivos)!"
  },
  {
    "id": "mig_eleit_004",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Composição do TSE e dos TREs (Arts. 119 e 120 da Constituição Federal)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em razão da proximidade das eleições gerais, indaga-se como são compostos o Tribunal Superior Eleitoral (7 membros) e os Tribunais Regionais Eleitorais (7 membros) conforme a Constituição de 1988.",
    "options": [
      {
        "letter": "A",
        "text": "O Presidente e o Vice-Presidente do Tribunal Superior Eleitoral são escolhidos livremente pelo Presidente da República dentre os advogados da classe dos juristas, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "Os Tribunais Regionais Eleitorais são presididos pelo Juiz Federal integrante da corte regional eleitoral, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "O número de integrantes do Tribunal Superior Eleitoral é taxativamente fixado em 11 Ministros pela Constituição, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "O TSE compõe-se de no mínimo 7 membros; já o TRE compõe-se de 2 Desembargadores do TJ, 2 Juízes de Direito escolhidos pelo TJ, 1 Juiz Federal do TRF e 2 advogados nomeados pelo Presidente dentre 6 indicados pelo TJ."
      }
    ],
    "correctAnswer": "D",
    "justification": "Composição constitucional: TSE (mín. 7: 3 STF, 2 STJ, 2 advogados indicados em lista sêxtupla pelo STF; Presidente e Vice = STF; Corregedor = STJ); TRE (7: 2 Desembargadores TJ, 2 Juízes de Direito, 1 Juiz Federal, 2 advogados indicados em lista sêxtupla pelo TJ; Presidente e Vice = Desembargadores).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 119, parágrafo único, da CF, o TSE elegerá seu Presidente e Vice-Presidente dentre os Ministros do STF, e o Corregedor Eleitoral dentre os Ministros do STJ."
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 120, § 2º, da CF, o TRE elegerá seu Presidente e Vice-Presidente dentre os DESEMBARGADORES do Tribunal de Justiça estadual!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 119 fixa composição mínima de 7 membros (3 STF + 2 STJ + 2 advogados); nos TREs também são 7 membros (2 Desembargadores TJ + 2 Juízes de Direito + 1 Juiz Federal + 2 advogados)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 119 e 120 da Constituição Federal",
        "textSnippet": "Composição constitucional: TSE (mín. 7: 3 STF, 2 STJ, 2 advogados indicados em lista sêxtupla pelo STF; Presidente e Vice = STF; Corregedor = STJ); TRE (7: 2 Desembargadores TJ, 2 Juízes de Direito, 1 Juiz Federal, 2 advogados indicados em lista sêxtupla pelo TJ; Presidente e Vice = Desembargadores)."
      }
    ],
    "professorTip": "Macete composição: TSE (3 STF + 2 STJ + 2 Adv; Pres/Vice=STF; Corregedor=STJ). TRE (2 Desemb + 2 Juiz Dir + 1 Juiz Fed + 2 Adv; Pres/Vice=Desemb)!"
  },
  {
    "id": "mig_eleit_005",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Juntas Eleitorais - Composição, Nomeação e Competência",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Durante a organização do pleito municipal, surge dúvida sobre quem compõe as Juntas Eleitorais, quem as preside e quais atribuições exercem na apuração dos votos.",
    "options": [
      {
        "letter": "A",
        "text": "Os membros das Juntas Eleitorais são indicados diretamente pelos diretórios municipais dos partidos políticos concorrentes, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "Compete às Juntas Eleitorais diplomar os deputados federais, senadores e governadores eleitos nos estados, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "Todas as decisões da Junta Eleitoral sobre apuração são irrecorríveis em qualquer instância, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "D",
        "text": "Cada Junta Eleitoral compõe-se de um Juiz de Direito e de 2 ou 4 cidadãos de notória idoneidade, nomeados pelo Presidente do TRE após aprovação do Tribunal, competindo-lhes apurar as eleições nas zonas, resolver impugnações de apuração, expedir boletins e diplomar os eleitos nas eleições municipais."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos dos Arts. 36 e 40 do Código Eleitoral, a Junta Eleitoral é presidida por um Juiz de Direito e integrada por 2 ou 4 cidadãos idôneos (nomeados pelo Presidente do TRE). Cabe à Junta apurar a votação na zona eleitoral, resolver incidentes da apuração e expedir os diplomas aos eleitos para cargos municipais.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 36, § 3º, do Código Eleitoral proíbe expressamente integrarem a Junta Eleitoral candidatos, seus cônjuges/parentes até 2º grau, membros de diretorias partidárias, autoridades policiais e ocupantes de cargos de confiança do Executivo."
      },
      {
        "letter": "B",
        "explanation": "A diplomação de cargos estaduais e federais (Governador, Senador, Deputados) compete ao TRE; a de Presidente/Vice compete ao TSE; às Juntas Eleitorais cabe diplomar os eleitos nas eleições MUNICIPAIS (Prefeito, Vice e Vereadores)."
      },
      {
        "letter": "C",
        "explanation": "Das decisões da Junta Eleitoral cabem recursos imediatos ao Tribunal Regional Eleitoral, observados os prazos e preclusões do Código Eleitoral."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 36 a 41 do Código Eleitoral",
        "textSnippet": "Nos termos dos Arts. 36 e 40 do Código Eleitoral, a Junta Eleitoral é presidida por um Juiz de Direito e integrada por 2 ou 4 cidadãos idôneos (nomeados pelo Presidente do TRE). Cabe à Junta apurar a votação na zona eleitoral, resolver incidentes da apuração e expedir os diplomas aos eleitos para cargos municipais."
      }
    ],
    "professorTip": "Junta Eleitoral: 1 Juiz de Direito (Presidente) + 2 ou 4 cidadãos idôneos. Apura votos na zona e diploma Prefeito, Vice e Vereadores!"
  },
  {
    "id": "mig_eleit_006",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Ministério Público Eleitoral - Estrutura e Atuação nos Três Graus",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em investigação de abuso de poder econômico praticado em eleição municipal, questiona-se qual membro do Ministério Público atua perante o Juiz Eleitoral, o TRE e o TSE.",
    "options": [
      {
        "letter": "A",
        "text": "A atuação perante as zonas eleitorais municipais e perante os TREs compete exclusivamente aos Procuradores da República (mpf) em todo o país, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      },
      {
        "letter": "B",
        "text": "O Procurador Regional Eleitoral perante o TRE é o Procurador-Geral de Justiça do Ministério Público Estadual, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "O Ministério Público Eleitoral atua apenas na propositura de ações penais eleitorais, não tendo legitimidade para propor aije ou aime, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "O Ministério Público Eleitoral não possui carreira própria autônoma: perante o TSE atua o Procurador-Geral Eleitoral; perante os TREs atua o Procurador Regional Eleitoral (membro do mpf)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Sem quadro próprio, o Ministério Público Eleitoral funciona por composição mista (LC nº 75/1993): PGR atua como Procurador-Geral Eleitoral no TSE; Procurador Regional da República (MPF) atua como Procurador Regional Eleitoral no TRE; e Promotor de Justiça (MPE estadual) atua como Promotor Eleitoral na Zona Eleitoral.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 78 da LC nº 75/1993, as funções eleitorais do MP perante os juízes e juntas eleitorais (1º grau) são exercidas pelo Promotor Eleitoral, integrante do MP ESTADUAL!"
      },
      {
        "letter": "B",
        "explanation": "O Procurador Regional Eleitoral é designado pelo Procurador-Geral Eleitoral dentre os Procuradores Regionais da República (MPF) para mandato de 2 anos (Art. 76 LC 75/93)."
      },
      {
        "letter": "C",
        "explanation": "O MPE possui ampla legitimidade ativa na tutela da lisura eleitoral, podendo propor AIJE, AIME, RCED, impugnação de registro (AIRC) e representação por propaganda/doação irregular."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 72 a 80 da Lei Complementar nº 75/1993",
        "textSnippet": "Sem quadro próprio, o Ministério Público Eleitoral funciona por composição mista (LC nº 75/1993): PGR atua como Procurador-Geral Eleitoral no TSE; Procurador Regional da República (MPF) atua como Procurador Regional Eleitoral no TRE; e Promotor de Justiça (MPE estadual) atua como Promotor Eleitoral na Zona Eleitoral."
      }
    ],
    "professorTip": "MPE (LC 75/93): TSE = PGE (PGR/MPF); TRE = PRE (MPF); Juiz/Junta Eleitoral = Promotor Eleitoral (MP ESTADUAL)!"
  },
  {
    "id": "mig_eleit_007",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Alistamento Eleitoral e Voto - Obrigatoriedade vs. Facultatividade (Art. 14, § 1º, CF)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Jovem de 17 anos completos, cidadão analfabeto de 45 anos e idosa de 72 anos comparecem ao cartório eleitoral para tirar ou regularizar o título de eleitor. Indaga-se o regime jurídico de cada um.",
    "options": [
      {
        "letter": "A",
        "text": "O analfabeto é proibido de alistar-se como eleitor e de votar no Brasil, integrando o grupo dos inalistáveis, em estrita observância à soberania popular, à legitimidade do pleito e à isonomia eleitoral."
      },
      {
        "letter": "B",
        "text": "O jovem de 16 anos que se alista voluntariamente fica obrigado a comparecer às urnas sob pena de multa caso falte no dia da eleição."
      },
      {
        "letter": "C",
        "text": "A obrigatoriedade do voto estende-se até os 65 anos de idade, tornando-se facultativa aos 66 anos, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "Para todos os três — maiores de 16 e menores de 18 anos, analfabetos e maiores de 70 anos — o alistamento eleitoral e o voto são facultativos."
      }
    ],
    "correctAnswer": "D",
    "justification": "Pelo Art. 14, § 1º, da CF, o alistamento eleitoral e o voto são obrigatórios para os maiores de 18 anos e facultativos para os analfabetos, os maiores de 70 anos e os maiores de 16 e menores de 18 anos. Importante lembrar que o adolescente que completar 16 anos até a data da eleição já pode requerer alistamento dentro do prazo legal antes do fechamento do cadastro.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Não confundir: inalistáveis são apenas os estrangeiros e os conscritos (Art. 14, § 2º, CF)! Os analfabetos podem se alistar e votar facultativamente (§ 1º, II, \"a\"), mas são INELEGÍVEIS (§ 4º)!"
      },
      {
        "letter": "B",
        "explanation": "Para os maiores de 16 e menores de 18 anos, tanto o alistamento quanto o voto são facultativos; logo, o não comparecimento às urnas antes dos 18 anos não gera multa eleitoral."
      },
      {
        "letter": "C",
        "explanation": "O voto torna-se facultativo somente para os maiores de 70 (setenta) anos de idade (Art. 14, § 1º, II, \"b\", CF)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, §§ 1º e 2º, da Constituição Federal",
        "textSnippet": "Pelo Art. 14, § 1º, da CF, o alistamento eleitoral e o voto são obrigatórios para os maiores de 18 anos e facultativos para os analfabetos, os maiores de 70 anos e os maiores de 16 e menores de 18 anos. Importante lembrar que o adolescente que completar 16 anos até a data da eleição já pode requerer alistamento dentro do prazo legal antes do fechamento do cadastro."
      }
    ],
    "professorTip": "Voto facultativo: analfabetos, >70 anos, e 16-17 anos (16-17 e >70 votam e não pagam multa se faltarem!). Analfabeto = vota, mas é INELEGÍVEL!"
  },
  {
    "id": "mig_eleit_008",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Inalistáveis - Estrangeiros e Conscritos Durante o Serviço Militar Obrigatório",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Jovem de 18 anos já possuía título de eleitor regularmente emitido aos 16 anos quando é convocado e incorporado para prestar serviço militar obrigatório (conscrito). Questiona-se a situação de seus direitos políticos durante a conscrição.",
    "options": [
      {
        "letter": "A",
        "text": "Todos os integrantes permanentes de carreira das Forças Armadas (oficiais, sargentos e cabos reengajados) são inalistáveis e impedidos de votar, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "Como o jovem já havia tirado o título aos 16 anos antes da convocação militar, mantém o direito de votar normalmente mesmo durante o serviço militar obrigatório, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "Os presos provisórios sem condenação criminal transitada em julgado tornam-se inalistáveis por força, da Constituição, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "Enquanto durar o serviço militar obrigatório (conscrição), o conscrito é constitucionalmente inalistável, ficando suspenso o exercício do seu título eleitoral anterior durante o período de conscrição, não podendo votar nem ser votado."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 14, § 2º, da CF, não podem alistar-se como eleitores os estrangeiros (salvo portugueses equiparados do Art. 12, § 1º) e, durante o período do serviço militar obrigatório, os conscritos (não abrangendo militares de carreira). Presos provisórios podem votar normalmente.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Apenas os CONSCRITOS (recrutas em serviço militar obrigatório, incluindo médicos/dentistas/veterinários convocados no serviço obrigatório - Súmula TSE) são inalistáveis; militares de carreira alistáveis têm voto obrigatório e elegibilidade conforme Art. 14, § 8º!"
      },
      {
        "letter": "B",
        "explanation": "Segundo jurisprudência consolidada do TSE, o título emitido anteriormente tem sua eficácia eleitoral suspensa durante o serviço militar obrigatório."
      },
      {
        "letter": "C",
        "explanation": "Apenas condenação criminal TRANSITADA EM JULGADO suspende direitos políticos (Art. 15, III, CF); presos provisórios mantêm pleno direito ao voto (instalando-se seções especiais nos estabelecimentos prisionais)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, § 2º, da Constituição Federal",
        "textSnippet": "Nos termos do Art. 14, § 2º, da CF, não podem alistar-se como eleitores os estrangeiros (salvo portugueses equiparados do Art. 12, § 1º) e, durante o período do serviço militar obrigatório, os conscritos (não abrangendo militares de carreira). Presos provisórios podem votar normalmente."
      }
    ],
    "professorTip": "Inalistáveis (Art. 14, § 2º CF): 1) Estrangeiros; 2) Conscritos (só durante serviço militar obrigatório!). Militares de carreira e presos provisórios VOTAM!"
  },
  {
    "id": "mig_eleit_009",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Domicílio Eleitoral Ampliado e Prazo de Fechamento do Cadastro Eleitoral",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Cidadã reside em Belo Horizonte, mas possui vínculo patrimonial, profissional e familiar sólido em Ouro Preto, pretendendo transferir seu título eleitoral para Ouro Preto visando votar e concorrer às eleições de outubro.",
    "options": [
      {
        "letter": "A",
        "text": "O domicílio eleitoral exige obrigatoriamente residência física habitual com ânimo definitivo idêntica ao domicílio civil, com validação da propaganda antecipada independentemente de pedido explícito de voto. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "O eleitor pode requerer a transferência do título eleitoral até 30 dias antes da data da eleição, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Para transferir o título eleitoral de um município para outro basta ter residido no município de origem por no mínimo 30 dias, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "A transferência é juridicamente possível dentro do prazo legal, pois a jurisprudência do TSE adota conceito flexível e amplo de domicílio eleitoral, devendo o requerimento de alistamento ou transferência ser feito até 151 dias antes da eleição."
      }
    ],
    "correctAnswer": "D",
    "justification": "No Direito Eleitoral brasileiro, o domicílio eleitoral abrange o vínculo residencial, afetivo, familiar, profissional, patrimonial ou comunitário (conceito mais elástico que o civil). Para o pleito, o cadastro eleitoral fecha 150 dias antes da eleição (Art. 91 da Lei nº 9.504/97), e a transferência ordinária exige 1 ano da inscrição/transferência anterior (salvo remoção de servidor).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O TSE consolidou há décadas que o domicílio eleitoral é mais amplo que o domicílio civil, bastando vínculo político, afetivo, familiar, patrimonial ou comunitário."
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 91 da Lei nº 9.504/1997, nenhum requerimento de inscrição eleitoral ou de transferência será recebido dentro dos 150 dias anteriores à data da eleição (fechamento no 151º dia anterior)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 55, § 1º, III, do Código Eleitoral, exige-se transcurso de pelo menos 1 ano do alistamento ou da última transferência (salvo servidor público civil/militar removido ou transferido e família)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 42, parágrafo único, do Código Eleitoral e Art. 91 da Lei nº 9.504/1997",
        "textSnippet": "No Direito Eleitoral brasileiro, o domicílio eleitoral abrange o vínculo residencial, afetivo, familiar, profissional, patrimonial ou comunitário (conceito mais elástico que o civil). Para o pleito, o cadastro eleitoral fecha 150 dias antes da eleição (Art. 91 da Lei nº 9.504/97), e a transferência ordinária exige 1 ano da inscrição/transferência anterior (salvo remoção de servidor)."
      }
    ],
    "professorTip": "Domicílio eleitoral (TSE) = vínculo político/social/familiar/patrimonial (mais amplo que o civil!). Cadastro fecha nos 150 dias antes da eleição (último dia = 151 dias antes)."
  },
  {
    "id": "mig_eleit_010",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Cancelamento da Inscrição Eleitoral por Ausência às Urnas",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Eleitor maior de 35 anos deixa de votar e de justificar sua ausência durante três eleições consecutivas (considerando cada turno uma eleição distinta) e não paga as respectivas multas eleitorais.",
    "options": [
      {
        "letter": "A",
        "text": "O cancelamento do título por ausência às urnas ocorre imediatamente após o eleitor faltar a apenas uma eleição sem justificativa, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "Eleitor maior de 70 anos ou analfabeto que deixar de votar em 3 eleições seguidas também tem o título obrigatoriamente cancelado, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "Será cancelada a inscrição do eleitor que não votar em 3 (três) eleições consecutivas, não pagar a multa nem se justificar no prazo de 6 meses a contar da data da última eleição a que deveria ter comparecido."
      },
      {
        "letter": "D",
        "text": "O eleitor que falta a uma única eleição sem justificativa fica proibido para sempre de tirar passaporte ou tomar posse em cargo público, mesmo pagando a multa, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "C",
    "justification": "Nos termos do Art. 7º, § 3º, e Art. 71, V, do Código Eleitoral, exclui-se (cancela-se) a inscrição do eleitor que deixar de votar em 3 eleições consecutivas (cada turno é uma eleição), não justificar nem quitar a multa no prazo legal. A sanção não atinge eleitores de voto facultativo.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 7º, § 3º, e o Art. 71, V, do Código Eleitoral exigem 3 eleições consecutivas sem voto nem justificativa (cada turno conta como 1 eleição)."
      },
      {
        "letter": "B",
        "explanation": "Nos termos da legislação e resoluções do TSE, o cancelamento por 3 faltas consecutivas NÃO atinge eleitores cujo voto é facultativo (16-17 anos, >70 anos, analfabetos) nem pessoas com deficiência impossibilitadas de votar."
      },
      {
        "letter": "D",
        "explanation": "As restrições do Art. 7º, § 1º, CE (passaporte, posse pública, matrícula universitária) cessam imediatamente com a regularização/pagamento da multa ou justificativa."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 7º, § 3º, e Art. 71, V, do Código Eleitoral",
        "textSnippet": "Nos termos do Art. 7º, § 3º, e Art. 71, V, do Código Eleitoral, exclui-se (cancela-se) a inscrição do eleitor que deixar de votar em 3 eleições consecutivas (cada turno é uma eleição), não justificar nem quitar a multa no prazo legal. A sanção não atinge eleitores de voto facultativo."
      }
    ],
    "professorTip": "Cancelamento do título: 3 eleições consecutivas (cada turno = 1 eleição!) sem votar/justificar/pagar multa. Não atinge voto facultativo!"
  },
  {
    "id": "mig_eleit_011",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Condições de Elegibilidade e Idades Mínimas Constitucionais",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Cidadão de 20 anos pretende candidatar-se a Deputado Federal e outro cidadão de 29 anos pretende candidatar-se a Senador da República, ambos completando respectivamente 21 e 30 anos apenas na véspera da posse em fevereiro do ano seguinte.",
    "options": [
      {
        "letter": "A",
        "text": "As idades mínimas constitucionais são de 35 anos para Governador e Senador e de 21 anos para Prefeito, Deputado e Vereador, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "A idade mínima de 18 anos para Vereador também é aferida na data da posse no ano seguinte à eleição, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "O candidato a Deputado Federal pode concorrer pois completará 21 anos até a data da posse, mas o candidato a Senador não pode porque a idade mínima para Senador é de 35 anos (e não 30). Ademais, apenas a idade mínima de 18 anos para Vereador é aferida na data-limite do pedido de registro."
      },
      {
        "letter": "D",
        "text": "No Brasil admite-se a candidatura avulsa de cidadão sem filiação partidária desde que conte com apoiamento de 1% do eleitorado, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Consoante o Art. 14, § 3º, da CF, são condições de elegibilidade: nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio na circunscrição, filiação partidária e idade mínima (35 Pres/Vice/Senador; 30 Gov/Vice; 21 Deputados/Prefeito/Vice/Juiz de Paz; 18 Vereador). Pelo Art. 11, § 2º, da Lei 9.504/97, as idades aferem-se na posse, salvo 18 anos para Vereador (aferida na data-limite do registro).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Idades mínimas (Art. 14, § 3º, VI, CF — \"35, 30, 21, 18\"): 35 anos (Presidente, Vice e Senador); 30 anos (Governador e Vice); 21 anos (Deputado Federal/Estadual/Distrital, Prefeito, Vice-Prefeito e Juiz de Paz); 18 anos (Vereador)!"
      },
      {
        "letter": "B",
        "explanation": "Regra expressa do Art. 11, § 2º, da Lei nº 9.504/1997 (Lei 13.165/2015): todas as idades mínimas aferem-se na DATA DA POSSE, EXCETO a de 18 anos para Vereador, aferida na data-limite para o pedido de registro (15 de agosto)!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 14, § 3º, V, da CF exige obrigatoriamente a filiação partidária como condição de elegibilidade, vedando candidaturas avulsas (Tema 974 STF em exame de vinculação constitucional)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, § 3º, da Constituição Federal e Art. 11, § 2º, da Lei nº 9.504/1997",
        "textSnippet": "Consoante o Art. 14, § 3º, da CF, são condições de elegibilidade: nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio na circunscrição, filiação partidária e idade mínima (35 Pres/Vice/Senador; 30 Gov/Vice; 21 Deputados/Prefeito/Vice/Juiz de Paz; 18 Vereador). Pelo Art. 11, § 2º, da Lei 9.504/97, as idades aferem-se na posse, salvo 18 anos para Vereador (aferida na data-limite do registro)."
      }
    ],
    "professorTip": "Telefone das idades (35-30-21-18): 35 (Pres/Vice/Senador); 30 (Gov/Vice); 21 (Deputados/Prefeito/Vice/Juiz Paz); 18 (Vereador). Aferição: POSSE, salvo Vereador (DATA-LIMITE DO REGISTRO)!"
  },
  {
    "id": "mig_eleit_012",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Prazo Mínimo de Domicílio Eleitoral e Filiação Partidária (6 Meses)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Pré-candidata a vereadora transfere seu título eleitoral para o novo município e filia-se a partido político em maio do mesmo ano da eleição municipal marcada para 4 de outubro.",
    "options": [
      {
        "letter": "A",
        "text": "A filiação partidária deve ocorrer pelo menos 1 ano antes da eleição, enquanto o domicílio eleitoral exige apenas 3 meses, com validação da propaganda antecipada independentemente de pedido explícito de voto. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "Em caso de fusão ou incorporação de partidos políticos ocorrida 4 meses antes da eleição, o prazo de filiação reinicia do zero para todos os filiados, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "A pré-candidata não preenche as condições de elegibilidade para o pleito de outubro, pois para concorrer às eleições o candidato deverá possuir domicílio eleitoral na respectiva circunscrição pelo prazo de seis meses e estar com a filiação deferida pelo partido no mesmo prazo."
      },
      {
        "letter": "D",
        "text": "Os partidos políticos podem exigir prazo estatutário menor, de 3 meses, para filiação de seus próprios candidatos às eleições majoritárias. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      }
    ],
    "correctAnswer": "C",
    "justification": "Nos termos do Art. 9º da Lei nº 9.504/1997, tanto o domicílio eleitoral na circunscrição quanto a filiação partidária deferida pelo partido exigem antecedência mínima de 6 (seis) meses antes da data do primeiro turno da eleição (salvo prazo estatutário maior ou militar alistável na ativa, que não se filia antes da convenção).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei nº 13.165/2015 reduziu a filiação para 6 meses e a Lei nº 13.488/2017 uniformizou também o domicílio eleitoral para 6 meses antes do pleito (Art. 9º Lei 9.504/97)!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 9º, parágrafo único, da Lei nº 9.504/1997, havendo fusão ou incorporação de partidos após o prazo de 6 meses, será considerada, para efeito de filiação partidária, a data de filiação do candidato ao partido de origem."
      },
      {
        "letter": "D",
        "explanation": "O estatuto partidário pode estabelecer prazo SUPERIOR a 6 meses (Art. 20 da Lei nº 9.096/95), mas nunca inferior ao piso legal de 6 meses do Art. 9º da Lei das Eleições."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 9º da Lei nº 9.504/1997 (redação da Lei nº 13.488/2017)",
        "textSnippet": "Nos termos do Art. 9º da Lei nº 9.504/1997, tanto o domicílio eleitoral na circunscrição quanto a filiação partidária deferida pelo partido exigem antecedência mínima de 6 (seis) meses antes da data do primeiro turno da eleição (salvo prazo estatutário maior ou militar alistável na ativa, que não se filia antes da convenção)."
      }
    ],
    "professorTip": "Art. 9º Lei 9.504/97: Domicílio eleitoral + Filiação partidária = ambos no mínimo 6 MESES antes da eleição! (Estatuto pode fixar prazo maior, nunca menor)."
  },
  {
    "id": "mig_eleit_013",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Reeleição no Poder Executivo e Proibição do \"Prefeito Itinerante\" (STF)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Prefeito eleito em 2020 e reeleito em 2024 no Município A muda seu domicílio eleitoral para o vizinho Município B visando candidatar-se a Prefeito do Município B nas eleições de 2028.",
    "options": [
      {
        "letter": "A",
        "text": "A vedação ao terceiro mandato consecutivo aplica-se apenas dentro do mesmo município, podendo o prefeito reeleito concorrer a um terceiro mandato seguido em outro município, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "O Vice-Prefeito que sucedeu definitivamente o Prefeito falecido nos últimos dois anos do primeiro mandato e depois foi eleito Prefeito titular pode ser reeleito para mais um mandato consecutivo (totalizando 3 mandatos executivos seguidos), em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "A candidatura no Município B é inadmissível por configurar \"prefeito itinerante\" (ou profissional), pois segundo o STF, a legislação aplicável proíbe o exercício de um terceiro mandato consecutivo no mesmo cargo de chefia do Executivo municipal, ainda que em município diverso."
      },
      {
        "letter": "D",
        "text": "O Prefeito reeleito no segundo mandato pode concorrer a um terceiro mandato consecutivo se renunciar 6 meses antes do pleito, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      }
    ],
    "correctAnswer": "C",
    "justification": "Pelo Art. 14, § 5º, da CF, o Presidente da República, os Governadores e os Prefeitos (e quem os houver sucedido ou substituído no curso dos mandatos) poderão ser reeleitos para um único período subsequente. O STF (RE 637.485) proibiu o \"prefeito itinerante\" (terceiro mandato consecutivo em município distinto).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF no RE 637.485 barrou expressamente a figura do \"prefeito itinerante\" ou \"prefeito profissional\", entendendo que o limite de uma única reeleição consecutiva veda o terceiro mandato seguido do mesmo cargo mesmo em outro ente municipal."
      },
      {
        "letter": "B",
        "explanation": "Se o Vice sucedeu o titular (ou até mesmo o substituiu nos 6 meses anteriores ao pleito), esse período já conta como primeiro mandato; logo, só poderá concorrer a mais UM mandato seguinte por reeleição (não podendo disputar terceiro mandato consecutivo)!"
      },
      {
        "letter": "D",
        "explanation": "A renúncia 6 meses antes (desincompatibilização do Art. 14, § 6º) serve apenas para concorrer a OUTROS cargos — nunca permite um 3º mandato consecutivo no mesmo cargo executivo!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, § 5º, da Constituição Federal e Jurisprudência do STF (RE 637.485)",
        "textSnippet": "Pelo Art. 14, § 5º, da CF, o Presidente da República, os Governadores e os Prefeitos (e quem os houver sucedido ou substituído no curso dos mandatos) poderão ser reeleitos para um único período subsequente. O STF (RE 637.485) proibiu o \"prefeito itinerante\" (terceiro mandato consecutivo em município distinto)."
      }
    ],
    "jurisprudence": "STF RE 637.485 (Tema 564)",
    "professorTip": "Reeleição Executivo (Art. 14, § 5º CF): só 1 reeleição consecutiva! Substituiu/sucedeu o titular = já conta como 1º mandato! Prefeito itinerante = PROIBIDO (STF)!"
  },
  {
    "id": "mig_eleit_014",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Desincompatibilização para Concorrer a Outros Cargos (Art. 14, § 6º, CF e LC 64/90)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Governador de Estado em primeiro mandato deseja concorrer ao cargo de Senador da República nas eleições de outubro. Paralelamente, Deputado Estadual deseja concorrer ao cargo de Prefeito.",
    "options": [
      {
        "letter": "A",
        "text": "Todos os ocupantes de cargos eletivos, inclusive Senadores e Deputados Federais, devem renunciar ao mandato 6 meses antes para concorrer a Prefeito ou Governador."
      },
      {
        "letter": "B",
        "text": "O Vice-Governador que nunca substituiu nem sucedeu o Governador nos últimos seis meses antes do pleito precisa renunciar 6 meses antes para concorrer a Deputado Federal."
      },
      {
        "letter": "C",
        "text": "Para concorrer a outro cargo (Senador), o Governador deve renunciar ao respectivo mandato até seis meses antes do pleito."
      },
      {
        "letter": "D",
        "text": "Se o Prefeito renunciar 6 meses antes do pleito em seu segundo mandato consecutivo, poderá candidatar-se normalmente a Vice-Prefeito do mesmo município."
      }
    ],
    "correctAnswer": "C",
    "justification": "Nos termos do Art. 14, § 6º, da CF, para concorrerem a outros cargos, o Presidente da República, os Governadores de Estado e do DF e os Prefeitos devem renunciar aos respectivos mandatos até 6 (seis) meses antes do pleito. Parlamentares e chefes do Executivo que concorrem à própria reeleição não precisam renunciar.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 14, § 6º, da CF impõe a renúncia de 6 meses exclusivamente aos CHEFES do Poder Executivo (Presidente, Governadores e Prefeitos); parlamentares e vices que não assumiram a chefia nos últimos 6 meses não precisam renunciar!"
      },
      {
        "letter": "B",
        "explanation": "Segundo jurisprudência pacífica do TSE e do STF, o Vice que não assumiu a titularidade do Executivo nos 6 meses anteriores ao pleito não precisa desincompatibilizar-se para concorrer a outro cargo."
      },
      {
        "letter": "D",
        "explanation": "O TSE e o STF entendem que quem exerceu dois mandatos seguidos de Prefeito não pode concorrer imediatamente ao cargo de Vice-Prefeito no mesmo município, pois poderia assumir o 3º mandato consecutivo!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, § 6º, da Constituição Federal",
        "textSnippet": "Nos termos do Art. 14, § 6º, da CF, para concorrerem a outros cargos, o Presidente da República, os Governadores de Estado e do DF e os Prefeitos devem renunciar aos respectivos mandatos até 6 (seis) meses antes do pleito. Parlamentares e chefes do Executivo que concorrem à própria reeleição não precisam renunciar."
      }
    ],
    "professorTip": "Art. 14, § 6º CF: só Presidente, Governador e Prefeito renunciam até 6 meses antes para concorrer a OUTRO cargo! Parlamentar e reeleição = NÃO renunciam!"
  },
  {
    "id": "mig_eleit_015",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Inelegibilidade Reflexa e Súmula Vinculante 18 do STF",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Prefeita no exercício do primeiro mandato divorcia-se judicialmente de seu marido no segundo ano do mandato. O ex-marido pretende candidatar-se ao cargo de Vereador no mesmo município na eleição municipal seguinte.",
    "options": [
      {
        "letter": "A",
        "text": "Com o trânsito em julgado da sentença de divórcio durante o mandato da prefeita, cessa imediatamente a inelegibilidade reflexa do ex-cônjuge, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "Se a prefeita reeleita vier a falecer no último ano do segundo mandato, a inelegibilidade reflexa impede qualquer parente seu de concorrer à prefeitura por 20 anos, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "O ex-marido é inelegível no território de jurisdição da ex-esposa prefeita, pois segundo a Súmula Vinculante 18 do STF, a dissolução da sociedade ou do vínculo conjugal, no curso do mandato, não afasta a inelegibilidade prevista no § 7º."
      },
      {
        "letter": "D",
        "text": "O cônjuge ou parente até 2º grau de Prefeito pode concorrer livremente ao cargo de Vereador do mesmo município se o Prefeito estiver apenas no primeiro mandato, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      }
    ],
    "correctAnswer": "C",
    "justification": "Pelo Art. 14, § 7º, da CF, são inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o 2º grau ou por adoção, do Presidente, Governador ou Prefeito (ou de quem os haja substituído nos 6 meses anteriores), salvo se já titular de mandato eletivo e candidato à reeleição. Pela SV 18 STF, o divórcio no curso do mandato não afasta essa inelegibilidade (mas o falecimento afasta - STF Tema 678).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula Vinculante 18 do STF foi editada justamente para impedir divórcios simulados ou estratégicos no curso do mandato visando driblar a inelegibilidade reflexa."
      },
      {
        "letter": "B",
        "explanation": "Nos termos do STF (RE 758.461 - Tema 678), a extinção do vínculo conjugal pela MORTE de um dos cônjuges (diferente do divórcio!) AFASTA a inelegibilidade reflexa — e, claro, salvo se o cônjuge já tiver renunciado 6 meses antes no 1º mandato ou falecido antes!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 14, § 7º, veda a candidatura do cônjuge e parentes até o 2º grau no território de jurisdição do titular (no mesmo município: nem Prefeito, nem Vice, nem Vereador!), salvo se o parente já for titular de mandato eletivo e candidato à reeleição!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, § 7º, da Constituição Federal e Súmula Vinculante 18 do STF",
        "textSnippet": "Pelo Art. 14, § 7º, da CF, são inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o 2º grau ou por adoção, do Presidente, Governador ou Prefeito (ou de quem os haja substituído nos 6 meses anteriores), salvo se já titular de mandato eletivo e candidato à reeleição. Pela SV 18 STF, o divórcio no curso do mandato não afasta essa inelegibilidade (mas o falecimento afasta - STF Tema 678)."
      }
    ],
    "jurisprudence": "STF Súmula Vinculante 18 e Tema 678",
    "professorTip": "Inelegibilidade reflexa (Art. 14, § 7º CF): cônjuge e parentes até 2º grau no território do Executivo (salvo já titular reeleição). SV 18 STF: divórcio NO MANDATO NÃO afasta (só morte afasta - Tema 678)!"
  },
  {
    "id": "mig_eleit_016",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Elegibilidade do Militar - Menos de 10 Anos vs. Mais de 10 Anos de Serviço",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Dois policiais militares estaduais alistáveis pretendem candidatar-se a Vereador: o primeiro possui 7 anos de serviço militar; o segundo possui 14 anos de serviço militar.",
    "options": [
      {
        "letter": "A",
        "text": "Ambos os militares devem pedir demissão definitiva do serviço militar no ato da filiação partidária 6 meses antes do pleito, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "O militar com mais de 10 anos de serviço que não for eleito perderá permanentemente sua patente e retornará à vida civil sem remuneração."
      },
      {
        "letter": "C",
        "text": "O militar com menos de 10 anos de serviço deverá afastar-se da atividade em definitivo no momento do registro de candidatura."
      },
      {
        "letter": "D",
        "text": "O militar com menos de 10 anos de serviço também fica apenas agregado, retornando à ativa caso perca a eleição, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      }
    ],
    "correctAnswer": "C",
    "justification": "Conforme o Art. 14, § 8º, da CF, o militar alistável é elegível atendidas as seguintes condições: I - se contar menos de 10 anos de serviço, deverá afastar-se da atividade (definitivamente); II - se contar mais de 10 anos de serviço, será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O militar alistável na ativa não se filia a partido político antes da escolha em convenção partidária (Art. 142, § 3º, V, CF c/c TSE Súmula 53 / Resolução), bastando o pedido de registro após convenção."
      },
      {
        "letter": "B",
        "explanation": "Como foi apenas AGREGADO durante a campanha (Art. 14, § 8º, II, CF), caso não seja eleito o militar com mais de 10 anos retorna normalmente ao serviço ativo; só passa à inatividade se eleito, no ato da diplomação!"
      },
      {
        "letter": "D",
        "explanation": "Segundo jurisprudência consolidada do STF e TSE, para o militar com MENOS de 10 anos de serviço (Art. 14, § 8º, I, CF), o afastamento da atividade é definitivo e irreversível desde o deferimento/registro da candidatura."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, § 8º, da Constituição Federal",
        "textSnippet": "Conforme o Art. 14, § 8º, da CF, o militar alistável é elegível atendidas as seguintes condições: I - se contar menos de 10 anos de serviço, deverá afastar-se da atividade (definitivamente); II - se contar mais de 10 anos de serviço, será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade."
      }
    ],
    "professorTip": "Art. 14, § 8º CF (Militar elegível): < 10 anos = afasta-se (definitivo); > 10 anos = agregado (volta se perder; se eleito, vai para inatividade na DIPLOMAÇÃO)!"
  },
  {
    "id": "mig_eleit_017",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Lei da Ficha Limpa - Condenação Colegiada e Prazo de 8 Anos de Inelegibilidade",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Cidadão é condenado por Tribunal de Justiça estadual em acórdão condenatório por crime contra a administração pública, pendendo ainda recurso especial no STJ sem obtenção de efeito suspensivo.",
    "options": [
      {
        "letter": "A",
        "text": "A inelegibilidade da Lei da Ficha Limpa só tem início após o trânsito em julgado definitivo da sentença condenatória no STF, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "Os crimes culposos e os crimes de menor potencial ofensivo geram igualmente a inelegibilidade de 8 anos prevista na alínea \"e\", com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "O cidadão encontra-se inelegível desde a condenação por órgão judicial colegiado até o transcurso do prazo de 8 (oito) anos após o cumprimento da pena, salvo se o tribunal superior conceder cautelarmente efeito suspensivo afastando a inelegibilidade."
      },
      {
        "letter": "D",
        "text": "Durante o cumprimento da pena após a condenação colegiada mas antes do trânsito em julgado, o cidadão não sofre qualquer inelegibilidade, só contando os 8 anos após cumprir a pena. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      }
    ],
    "correctAnswer": "C",
    "justification": "Nos termos do Art. 1º, I, \"e\", da LC nº 64/1990 (Lei da Ficha Limpa), são inelegíveis os condenados, em decisão transitada em julgado ou proferida por órgão judicial colegiado, desde a condenação até o transcurso do prazo de 8 anos após o cumprimento da pena, pelos crimes ali listados (excluídos crimes culposos, de menor potencial ofensivo e de ação penal privada).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A LC nº 135/2010 antecipou expressamente o marco da inelegibilidade para a decisão proferida por ÓRGÃO JUDICIAL COLEGIADO (2ª instância ou tribunal competente), tese declarada constitucional pelo STF (ADCs 29 e 30)!"
      },
      {
        "letter": "B",
        "explanation": "O Art. 1º, § 4º, da LC nº 64/1990 exclui expressamente da inelegibilidade da alínea \"e\" os crimes culposos e aqueles definidos em lei como de menor potencial ofensivo, além dos de ação penal privada."
      },
      {
        "letter": "D",
        "explanation": "A inelegibilidade vige DESDE a condenação colegiada, durante todo o cumprimento da pena, e prossegue por MAIS 8 anos após o cumprimento/extinção da pena (Súmula 61 do TSE)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 1º, I, \"e\", da Lei Complementar nº 64/1990 (redação da LC nº 135/2010)",
        "textSnippet": "Nos termos do Art. 1º, I, \"e\", da LC nº 64/1990 (Lei da Ficha Limpa), são inelegíveis os condenados, em decisão transitada em julgado ou proferida por órgão judicial colegiado, desde a condenação até o transcurso do prazo de 8 anos após o cumprimento da pena, pelos crimes ali listados (excluídos crimes culposos, de menor potencial ofensivo e de ação penal privada)."
      }
    ],
    "jurisprudence": "STF ADCs 29 e 30; Súmula 61 TSE",
    "professorTip": "Ficha Limpa (Art. 1º, I, \"e\" LC 64/90): vale desde decisão de ÓRGÃO COLEGIADO até 8 anos APÓS cumprir a pena! Exclui crimes culposos, menor potencial ofensivo e ação privada!"
  },
  {
    "id": "mig_eleit_018",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Inelegibilidade por Rejeição de Contas Públicas - Competência da Câmara (Tema 835 STF)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Tribunal de Contas estadual emite parecer prévio pela rejeição das contas anuais de governo de ex-Prefeito, apontando irregularidades insanáveis; contudo, a Câmara Municipal deixa de julgar as contas ou aprova as contas por dois terços.",
    "options": [
      {
        "letter": "A",
        "text": "Quando o Prefeito atua como ordenador de despesas (contas de gestão), a decisão definitiva de rejeição pelo Tribunal de Contas basta por si só para torná-lo inelegível, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "Qualquer irregularidade contábil formal ou culposa nas contas rejeitadas gera automaticamente a inelegibilidade de 8 anos da alínea \"g\", com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "Para fins da inelegibilidade, o órgão competente para julgar as contas de governo e até mesmo as contas de gestão do Prefeito é exclusivamente a câmara municipal, cabendo ao Tribunal de Contas apenas parecer prévio."
      },
      {
        "letter": "D",
        "text": "Se a Câmara Municipal permanecer omissa e não julgar as contas do Prefeito, o parecer prévio negativo do Tribunal de Contas produz efeito imediato de inelegibilidade, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "C",
    "justification": "Segundo os Temas 835 e 157 do STF, o órgão competente para julgar as contas do Prefeito (tanto de governo quanto de gestão) é a Câmara Municipal, não gerando inelegibilidade a mera emissão de parecer prévio desfavorável do Tribunal de Contas nem o silêncio legislativo. Ademais, a alínea \"g\" exige irregularidade insanável configuradora de ato doloso de improbidade.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No RE 848.826 (Tema 835), o STF superou antiga distinção e assentou que tanto nas contas de governo quanto nas contas de gestão do Prefeito, o julgamento compete exclusivamente à Câmara Municipal (cujo parecer do TC só deixa de prevalecer por voto de 2/3 dos vereadores)."
      },
      {
        "letter": "B",
        "explanation": "A alínea \"g\" exige cumulativamente: rejeição de contas por irregularidade INSANÁVEL que configure ATO DOLOSO DE IMPROBIDADE administrativa, em decisão irrecorrível do órgão competente (salvo suspensão judicial)."
      },
      {
        "letter": "D",
        "explanation": "No RE 729.744 (Tema 157), o STF decidiu que o parecer técnico do TC é meramente opinativo e a omissão da Câmara Municipal no julgamento não gera inelegibilidade por si só!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 1º, I, \"g\", da LC nº 64/1990 e STF Tema 835 (RE 848.826)",
        "textSnippet": "Segundo os Temas 835 e 157 do STF, o órgão competente para julgar as contas do Prefeito (tanto de governo quanto de gestão) é a Câmara Municipal, não gerando inelegibilidade a mera emissão de parecer prévio desfavorável do Tribunal de Contas nem o silêncio legislativo. Ademais, a alínea \"g\" exige irregularidade insanável configuradora de ato doloso de improbidade."
      }
    ],
    "jurisprudence": "STF Temas 835 e 157",
    "professorTip": "STF Temas 835 e 157: quem julga contas do Prefeito (governo e gestão) é SEMPRE a CÂMARA MUNICIPAL! Parecer do TCE sozinho ou omissão da Câmara NÃO geram inelegibilidade!"
  },
  {
    "id": "mig_eleit_019",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Inelegibilidade por Renúncia para Evitar Cassação e Abuso de Poder (LC 64/90)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Deputado estadual contra quem já havia sido protocolada representação disciplinar na Assembleia Legislativa por quebra de decoro parlamentar renuncia ao mandato na semana seguinte para encerrar o processo ético e tentar concorrer na eleição futura.",
    "options": [
      {
        "letter": "A",
        "text": "A renúncia ao mandato parlamentar antes da decisão final de cassação apaga o processo ético e preserva integralmente a elegibilidade do ex-parlamentar, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "A representação condenatória transitada em julgado por abuso de poder econômico em aije gera inelegibilidade apenas para o pleito específico em que ocorreu o abuso, sem alcançar eleições futuras, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "O parlamentar torna-se inelegível para as eleições que se realizarem durante o período remanescente do mandato para o qual foi eleito e nos 8 anos subsequentes ao término da legislatura, nos termos da alínea \"k\" da LC nº 64/1990."
      },
      {
        "letter": "D",
        "text": "A simples apresentação de denúncia anônima na imprensa já gera a inelegibilidade prevista na alínea \"k\" em caso de renúncia parlamentar, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Nos termos da LC nº 64/1990 (alterada pela LC nº 135/2010), incidem em inelegibilidade por 8 anos tanto os condenados na Justiça Eleitoral por abuso de poder econômico ou político (alínea \"d\") ou captação ilícita/conduta vedada com cassação (alínea \"j\"), quanto membros do Executivo ou Legislativo que renunciarem após oferecimento de representação apta a instaurar processo de perda de mandato (alínea \"k\" - pelo restante do mandato + 8 anos).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei da Ficha Limpa inseriu a alínea \"k\" justamente para punir com inelegibilidade de 8 anos após o término da legislatura a renúncia após oferecimento de representação capaz de autorizar perda do mandato."
      },
      {
        "letter": "B",
        "explanation": "Pela alínea \"d\" do Art. 1º, I, da LC nº 64/1990, quem tem contra si representação julgada procedente na Justiça Eleitoral por abuso de poder econômico ou político torna-se inelegível para a eleição na qual concorreu/foi diplomado E para as que se realizarem nos 8 ANOS seguintes!"
      },
      {
        "letter": "D",
        "explanation": "A alínea \"k\" exige que a renúncia ocorra APÓS o oferecimento de representação ou petição capaz de autorizar a abertura de processo por infringência constitucional/orgânica."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 1º, I, \"d\", \"h\", \"j\" e \"k\", da LC nº 64/1990",
        "textSnippet": "Nos termos da LC nº 64/1990 (alterada pela LC nº 135/2010), incidem em inelegibilidade por 8 anos tanto os condenados na Justiça Eleitoral por abuso de poder econômico ou político (alínea \"d\") ou captação ilícita/conduta vedada com cassação (alínea \"j\"), quanto membros do Executivo ou Legislativo que renunciarem após oferecimento de representação apta a instaurar processo de perda de mandato (alínea \"k\" - pelo restante do mandato + 8 anos)."
      }
    ],
    "professorTip": "LC 64/90, alínea \"k\": renunciar APÓS representação que possa gerar cassação = inelegível pelo resto do mandato + 8 anos! Abuso de poder/captação ilícita (\"d\"/\"j\") = 8 anos!"
  },
  {
    "id": "mig_eleit_020",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Perda e Suspensão dos Direitos Políticos (Art. 15 da Constituição Federal)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Cidadão brasileiro é condenado definitivamente por sentença criminal transitada em julgado à pena privativa de liberdade substituída por pena restritiva de direitos; em outro caso, terceiro sofre incapacidade civil absoluta declarada judicialmente.",
    "options": [
      {
        "letter": "A",
        "text": "A legislação aplicável autoriza a cassação arbitrária de direitos políticos por decreto do Presidente da República em estado de defesa, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "É vedada a cassação de direitos políticos, admitindo-se apenas sua perda ou suspensão nos casos taxativos: a condenação criminal transitada em julgado e a incapacidade civil absoluta geram suspensão dos direitos políticos."
      },
      {
        "letter": "C",
        "text": "Quando a pena privativa de liberdade aplicada na sentença criminal for substituída por pena restritiva de direitos ou multa isolada, não ocorre suspensão dos direitos políticos, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "D",
        "text": "A condenação transitada em julgado por ato de improbidade administrativa acarreta a perda definitiva e perpétua dos direitos políticos, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "B",
    "justification": "O Art. 15 da CF proíbe a cassação de direitos políticos e estabelece rol taxativo de perda ou suspensão: I - cancelamento da naturalização por sentença transitada em julgado (perda); II - incapacidade civil absoluta (suspensão); III - condenação criminal transitada em julgado, enquanto durarem seus efeitos (suspensão, inclusive com pena restritiva - STF Tema 370); IV - recusa de obrigação a todos imposta e prestação alternativa (perda/suspensão conforme doutrina e Lei 8.239/91); V - improbidade administrativa (suspensão).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O caput do Art. 15 é categórico: \"É vedada a cassação de direitos políticos, cuja perda ou suspensão só se dará nos casos de...\"."
      },
      {
        "letter": "C",
        "explanation": "No RE 601.182 (Tema 370), o STF decidiu que a suspensão dos direitos políticos do Art. 15, III, da CF é autoaplicável e incide mesmo quando a pena privativa de liberdade for substituída por restritiva de direitos! (Apenas na condenação exclusiva à pena de multa não se suspende — segundo entendimento subsequente/Súmula ou caso concreto de multa isolada, mas o Tema 370 abrangeu restritivas)."
      },
      {
        "letter": "D",
        "explanation": "A improbidade administrativa (Art. 15, V, CF) gera SUSPENSÃO temporária dos direitos políticos (até 14 anos na Lei 14.230/2021), nunca cassação ou perda perpétua."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 15 da Constituição Federal",
        "textSnippet": "O Art. 15 da CF proíbe a cassação de direitos políticos e estabelece rol taxativo de perda ou suspensão: I - cancelamento da naturalização por sentença transitada em julgado (perda); II - incapacidade civil absoluta (suspensão); III - condenação criminal transitada em julgado, enquanto durarem seus efeitos (suspensão, inclusive com pena restritiva - STF Tema 370); IV - recusa de obrigação a todos imposta e prestação alternativa (perda/suspensão conforme doutrina e Lei 8.239/91); V - improbidade administrativa (suspensão)."
      }
    ],
    "jurisprudence": "STF Tema 370 (RE 601.182)",
    "professorTip": "Art. 15 CF: NUNCA há cassação! Perda = cancelamento naturalização / recusa prestação alternativa. Suspensão = incapacidade absoluta, condenação criminal definitiva (mesmo pena restritiva - Tema 370 STF!) e improbidade."
  },
  {
    "id": "mig_eleit_021",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Partidos Políticos - Natureza Privada, Autonomia, Caráter Nacional e Vedações",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Grupo de cidadãos de um único Estado pretende registrar no TRE um partido político de atuação exclusivamente regional para disputar eleições estaduais e municipais apenas naquela unidade federativa.",
    "options": [
      {
        "letter": "A",
        "text": "Os partidos políticos são pessoas jurídicas de direito público interno autárquico, dispensando registro em cartório civil, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "O registro é inviável, pois a legislação aplicável exige que todo partido político tenha caráter nacional, adquirindo personalidade jurídica na forma da lei civil antes de registrar seu estatuto no TSE."
      },
      {
        "letter": "C",
        "text": "A Constituição permite o registro de partidos regionais ou estaduais mediante apoiamento de eleitores apenas daquela unidade federativa, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "Os partidos políticos podem utilizar organização paramilitar interna para garantir a segurança de seus comícios eleitorais, com validação da propaganda antecipada independentemente de pedido explícito de voto."
      }
    ],
    "correctAnswer": "B",
    "justification": "Nos termos do Art. 17 da CF e da Lei nº 9.096/1995, é livre a criação, fusão, incorporação e extinção de partidos políticos, resguardados a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais, observados: caráter nacional, proibição de recursos estrangeiros, prestação de contas à Justiça Eleitoral, funcionamento parlamentar de acordo com a lei e vedação de organização paramilitar.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 17, § 2º, da CF e Art. 44, V, do Código Civil, os partidos políticos são pessoas jurídicas de DIREITO PRIVADO (primeiro adquirem personalidade jurídica no Cartório de Registro Civil das Pessoas Jurídicas do DF e depois registram o estatuto no TSE)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 17, I, da CF impõe obrigatoriamente o caráter nacional dos partidos políticos."
      },
      {
        "letter": "D",
        "explanation": "O Art. 17, § 4º, da CF proíbe expressamente a utilização pelos partidos políticos de organização paramilitar."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 17 da Constituição Federal e Lei nº 9.096/1995",
        "textSnippet": "Nos termos do Art. 17 da CF e da Lei nº 9.096/1995, é livre a criação, fusão, incorporação e extinção de partidos políticos, resguardados a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais, observados: caráter nacional, proibição de recursos estrangeiros, prestação de contas à Justiça Eleitoral, funcionamento parlamentar de acordo com a lei e vedação de organização paramilitar."
      }
    ],
    "professorTip": "Partido Político (Art. 17 CF): PJ de direito PRIVADO! Registro civil no DF -> depois registra estatuto no TSE. Caráter NACIONAL obrigatório + proibido dinheiro estrangeiro e organização paramilitar!"
  },
  {
    "id": "mig_eleit_022",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Cláusula de Barreira (EC nº 97/2017) e Federações Partidárias (Lei nº 14.208/2021)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Dois partidos políticos de pequeno porte que não atingiram isoladamente a cláusula de desempenho constitucional constituem uma FEDERAÇÃO PARTIDÁRIA antes das eleições gerais de 2026.",
    "options": [
      {
        "letter": "A",
        "text": "As coligações partidárias para eleições proporcionais (Deputados e Vereadores) foram restabelecidas pela Lei nº 14.208/2021 em substituição às federações, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "A federação partidária atua como se fosse uma única agremiação partidária no Congresso e nas eleições em todo o território nacional, devendo permanecer unida por no mínimo 4 anos sob pena de sanções ao partido desistente."
      },
      {
        "letter": "C",
        "text": "Uma federação partidária pode ser formada livremente apenas em um Estado específico sem abranger os demais Estados da Federação, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      },
      {
        "letter": "D",
        "text": "O partido político que não atingir a cláusula de desempenho prevista na EC nº 97/2017 tem seu registro cassado e seus deputados eleitos perdem o mandato, com cassação do registro ou diploma e imposição de multa após regular instrução processual."
      }
    ],
    "correctAnswer": "B",
    "justification": "A EC nº 97/2017 extinguiu as coligações proporcionais e criou a cláusula de desempenho progressiva (atingindo 3% dos votos válidos nacionais até 2030) para acesso ao Fundo Partidário e tempo de rádio/TV. Para atuar conjuntamente no proporcional, partidos podem formar Federações Partidárias nacionais com duração mínima de 4 anos (Art. 11-A da Lei nº 9.096/95).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A EC nº 97/2017 proibiu definitivamente as coligações nas eleições PROPORCIONAIS a partir de 2020! A federação partidária (Lei 14.208/21, validada pelo STF na ADI 7.021) é instituto nacional duradouro (mínimo 4 anos), distinto das antigas coligações temporárias."
      },
      {
        "letter": "C",
        "explanation": "Diferente das coligações majoritárias locais, a federação partidária tem abrangência NACIONAL obrigatória em todas as circunscrições e deve permanecer unida por pelo menos 4 anos."
      },
      {
        "letter": "D",
        "explanation": "Não atingir a cláusula de barreira NÃO extingue o partido nem cassa mandatos eleitos: apenas retira o direito ao Fundo Partidário e ao acesso gratuito ao rádio e televisão (além de permitir ao eleito desfiliar-se sem perda do mandato por justa causa — Art. 17, § 5º, CF)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 17, §§ 1º e 3º, da CF (EC nº 97/2017) e Art. 11-A da Lei nº 9.096/1995",
        "textSnippet": "A EC nº 97/2017 extinguiu as coligações proporcionais e criou a cláusula de desempenho progressiva (atingindo 3% dos votos válidos nacionais até 2030) para acesso ao Fundo Partidário e tempo de rádio/TV. Para atuar conjuntamente no proporcional, partidos podem formar Federações Partidárias nacionais com duração mínima de 4 anos (Art. 11-A da Lei nº 9.096/95)."
      }
    ],
    "jurisprudence": "STF ADI 7.021",
    "professorTip": "Coligação = só em eleição MAJORITÁRIA (proibida no proporcional!). Federação partidária = nacional, mínimo 4 ANOS, vale no proporcional e majoritário, e soma para cláusula de barreira!"
  },
  {
    "id": "mig_eleit_023",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Fidelidade Partidária - Sistema Proporcional vs. Majoritário e Justas Causas (EC 111/2021)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Senador da República desfilia-se do partido pelo qual foi eleito sem justa causa no segundo ano de mandato; paralelamente, Deputado Federal muda de partido durante a janela partidária de 30 dias antes do término do prazo de filiação no ano eleitoral ou com carta de anuência do partido.",
    "options": [
      {
        "letter": "A",
        "text": "Tanto Senadores e Prefeitos quanto Deputados e Vereadores perdem automaticamente o mandato eletivo em caso de desfiliação partidária imotivada, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "O Senador não perde o mandato porque o STF assentou que a perda do mandato por infidelidade partidária aplica-se apenas ao sistema proporcional, e não ao majoritário."
      },
      {
        "letter": "C",
        "text": "A carta de anuência emitida pelo partido de origem nunca afasta a perda do mandato do deputado que se desfilia fora da janela partidária, sem possibilidade de registro ou exercício do mandato diante da causa de inelegibilidade verificada."
      },
      {
        "letter": "D",
        "text": "A janela partidária permite que o deputado ou vereador mude de partido sem perda de mandato durante todo o último ano do mandato, de janeiro a dezembro, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "B",
    "justification": "Pelo Art. 22-A da Lei nº 9.096/1995 e Art. 17, § 6º, da CF (EC 111/2021), perde o mandato o eleito pelo sistema PROPORCIONAL (nunca majoritário - ADI 5.081) que se desfiliar sem justa causa. São justas causas: mudança substancial/desvio do programa partidário, grave discriminação política pessoal, janela partidária (30 dias antes do prazo de 6 meses no ano final do mandato), não superação da cláusula de barreira pelo partido (Art. 17, § 5º) e ANUÊNCIA do partido (EC 111/2021).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Segundo o STF (ADI 5.081) e a própria redação do Art. 22-A da Lei 9.096/95, a regra da fidelidade partidária com perda de mandato NÃO incide sobre cargos do sistema MAJORITÁRIO!"
      },
      {
        "letter": "C",
        "explanation": "A Emenda Constitucional nº 111/2021 inseriu o § 6º no Art. 17 da CF constitucionalizando expressamente a ANUÊNCIA do partido como justa causa que impede a perda do mandato (e não computa o voto para fins de distribuição de fundos ao partido de origem)!"
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 22-A, III, da Lei nº 9.096/1995, a janela partidária dura apenas 30 DIAS imediatamente anteriores ao prazo final de filiação (isto é, 30 dias antes dos 6 meses anteriores ao pleito de sua eleição de término de mandato)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 17, § 6º, da CF (EC nº 111/2021), Art. 22-A da Lei nº 9.096/1995 e STF ADI 5.081",
        "textSnippet": "Pelo Art. 22-A da Lei nº 9.096/1995 e Art. 17, § 6º, da CF (EC 111/2021), perde o mandato o eleito pelo sistema PROPORCIONAL (nunca majoritário - ADI 5.081) que se desfiliar sem justa causa. São justas causas: mudança substancial/desvio do programa partidário, grave discriminação política pessoal, janela partidária (30 dias antes do prazo de 6 meses no ano final do mandato), não superação da cláusula de barreira pelo partido (Art. 17, § 5º) e ANUÊNCIA do partido (EC 111/2021)."
      }
    ],
    "jurisprudence": "STF ADI 5.081; EC nº 111/2021",
    "professorTip": "Fidelidade partidária: SÓ NO SISTEMA PROPORCIONAL (Deputados/Vereadores — NÃO vale para Prefeito/Governador/Senador/Presidente)! Justas causas: janela (30 dias), discriminação grave, desvio programático, partido não bateu barreira e ANUÊNCIA DO PARTIDO (EC 111/21)!"
  },
  {
    "id": "mig_eleit_024",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Financiamento de Campanhas - Vedação a Pessoas Jurídicas e Limite de Pessoa Física",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresário individual oferece doação eleitoral em nome de sua sociedade limitada no valor de cinquenta mil reais a candidato a Prefeito, além de doar pessoalmente 15% dos seus rendimentos brutos auferidos no ano anterior.",
    "options": [
      {
        "letter": "A",
        "text": "Empresas privadas podem doar até 2% do seu faturamento bruto anual para campanhas eleitorais mediante recibo eleitoral, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      },
      {
        "letter": "B",
        "text": "Ambas as doações são ilícitas: o STF declarou inconstitucionais as doações eleitorais por pessoas jurídicas, e as doações de pessoas físicas ficam limitadas a 10% (dez por cento) dos rendimentos brutos auferidos pelo doador no ano anterior à eleição."
      },
      {
        "letter": "C",
        "text": "As doações eleitorais realizadas por pessoas físicas não possuem qualquer teto percentual sobre a renda, bastando a declaração no Imposto de Renda, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "D",
        "text": "Doações de bens estimáveis em dinheiro pelo próprio eleitor com patrimônio inferior a cinco mil reais são sempre proibidas, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      }
    ],
    "correctAnswer": "B",
    "justification": "No Brasil vigora o financiamento misto (recursos públicos e doações de pessoas físicas), proibidas doações de pessoas jurídicas (ADI 4.650 STF). Pessoas físicas podem doar até 10% de seus rendimentos brutos do ano anterior (ou até R$ 40.000,00 em bens/serviços próprios estimáveis).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Desde a ADI 4.650 (STF) e a Lei nº 13.165/2015, pessoas jurídicas estão absolutamente proibidas de fazer doações a campanhas eleitorais e a partidos políticos."
      },
      {
        "letter": "C",
        "explanation": "O Art. 23, § 1º, da Lei nº 9.504/1997 limita as doações de pessoa física a 10% dos rendimentos brutos do ano anterior (sujeitando o excesso à multa de até 100% do valor excedente)."
      },
      {
        "letter": "D",
        "explanation": "O Art. 23, § 7º, excepciona do limite de 10% doações estimáveis em dinheiro relativas à utilização de bens móveis ou imóveis de propriedade do doador ou prestação de serviços próprios, até o limite de R$ 40.000,00."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 23 da Lei nº 9.504/1997 e STF ADI 4.650",
        "textSnippet": "No Brasil vigora o financiamento misto (recursos públicos e doações de pessoas físicas), proibidas doações de pessoas jurídicas (ADI 4.650 STF). Pessoas físicas podem doar até 10% de seus rendimentos brutos do ano anterior (ou até R$ 40.000,00 em bens/serviços próprios estimáveis)."
      }
    ],
    "jurisprudence": "STF ADI 4.650",
    "professorTip": "Financiamento: PJ = PROIBIDA (ADI 4.650 STF); PF = até 10% dos rendimentos brutos do ano anterior (ou bens/serviços próprios até R$ 40 mil)!"
  },
  {
    "id": "mig_eleit_025",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Autofinanciamento de Campanha (Limite de 10% do Teto) e Financiamento Coletivo",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Candidato a Prefeito com patrimônio milionário decide custear 100% do teto oficial de gastos da campanha utilizando recursos próprios pessoais; outro candidato inicia arrecadação por financiamento coletivo (vaquinha virtual) em 20 de maio do ano eleitoral.",
    "options": [
      {
        "letter": "A",
        "text": "O candidato possui liberdade patrimonial absoluta para investir até 100% do teto de gastos com recursos próprios na própria campanha, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "O candidato não pode custear 100% do teto, pois o candidato poderá usar recursos próprios em sua campanha até o total de 10% (dez por cento) dos limites previstos para gastos de campanha no cargo em que concorrer."
      },
      {
        "letter": "C",
        "text": "A arrecadação por financiamento coletivo (crowdfunding) só pode começar após o registro oficial da candidatura em 15 de agosto, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      },
      {
        "letter": "D",
        "text": "Em qualquer modalidade eleitoral, o recebimento de doação financeira de pessoa física em espécie acima de R$ 5.000,00 é válido sem transferência bancária identificada. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      }
    ],
    "correctAnswer": "B",
    "justification": "Conforme o Art. 23, § 2º-A, da Lei nº 9.504/1997, o autofinanciamento de campanha limita-se a 10% do teto de gastos do cargo. O financiamento coletivo prévio pode ser iniciado a partir de 15 de maio do ano eleitoral por entidades habilitadas, condicionada a liberação efetiva ao registro e abertura de conta bancária.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei nº 13.878/2019 incluiu o § 2º-A ao Art. 23 limitando o autofinanciamento do candidato a apenas 10% do limite de gastos estabelecido para o respectivo cargo."
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 22-A, § 3º, da Lei nº 9.504/1997, desde o dia 15 de maio do ano eleitoral é facultada aos pré-candidatos a arrecadação prévia de recursos na modalidade de financiamento coletivo (sendo a liberação condicionada ao registro)."
      },
      {
        "letter": "D",
        "explanation": "Doações financeiras iguais ou superiores a R$ 1.064,10 só podem ser realizadas mediante transferência eletrônica (TED/PIX identificado com CPF) ou cheque cruzado e nominal (Art. 23, § 4º, I)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 23, §§ 2º-A e 4º, IV, da Lei nº 9.504/1997",
        "textSnippet": "Conforme o Art. 23, § 2º-A, da Lei nº 9.504/1997, o autofinanciamento de campanha limita-se a 10% do teto de gastos do cargo. O financiamento coletivo prévio pode ser iniciado a partir de 15 de maio do ano eleitoral por entidades habilitadas, condicionada a liberação efetiva ao registro e abertura de conta bancária."
      }
    ],
    "professorTip": "Autofinanciamento = teto de 10% do limite de gastos do cargo! Vaquinha virtual (crowdfunding) = permitida a partir de 15 de MAIO!"
  },
  {
    "id": "mig_eleit_026",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Fundo Partidário e Fundo Especial de Financiamento de Campanha (FEFC) - Vedações",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Partido político recebe doação de entidade sindical de trabalhadores e também utiliza verbas do Fundo Especial de Financiamento de Campanha (FEFC) sem conseguir gastá-las integralmente até a eleição.",
    "options": [
      {
        "letter": "A",
        "text": "As sobras não utilizadas do Fundo Especial de Financiamento de Campanha (fefc) permanecem definitivamente no caixa ordinário do partido para uso administrativo, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "A doação de entidade sindical é absolutamente vedada como fonte ilícita; quanto às sobras do fefc não utilizadas na campanha, devem ser integralmente devolvidas ao Tesouro Nacional na prestação de contas."
      },
      {
        "letter": "C",
        "text": "Entidades de classe ou sindicais podem doar recursos para campanhas eleitorais desde que aprovados em assembleia geral da categoria, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      },
      {
        "letter": "D",
        "text": "O Fundo Partidário e o fefc têm a mesma regra de distribuição igualitária em partes exatas entre todos os partidos registrados no TSE, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "B",
    "justification": "São fontes vedadas de financiamento (Art. 24 Lei 9.504/97 e Art. 31 Lei 9.096/95): pessoas jurídicas, entidades estrangeiras, sindicatos/entidades de classe, permissionárias de serviço público e origens não identificadas. Os saldos não utilizados do FEFC pertencem à União e devem ser recolhidos ao Tesouro Nacional.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferente do Fundo Partidário (cujas sobras financeiras ficam com o partido), as sobras de recursos do FEFC não utilizadas devem ser devolvidas ao Tesouro Nacional (Art. 16-C, § 11)!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 24 da Lei nº 9.504/1997 e o Art. 31 da Lei nº 9.096/1995 proíbem expressamente doações de entidade de classe ou sindical e de concessionários/permissionários de serviço público."
      },
      {
        "letter": "D",
        "explanation": "Tanto o Fundo Partidário quanto o FEFC adotam critérios proporcionais ligados à representatividade parlamentar (Art. 16-D Lei 9.504/97 e Art. 41-A Lei 9.096/95), observada a cláusula de desempenho."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 16-C, 16-D e 24 da Lei nº 9.504/1997 e Art. 31 da Lei nº 9.096/1995",
        "textSnippet": "São fontes vedadas de financiamento (Art. 24 Lei 9.504/97 e Art. 31 Lei 9.096/95): pessoas jurídicas, entidades estrangeiras, sindicatos/entidades de classe, permissionárias de serviço público e origens não identificadas. Os saldos não utilizados do FEFC pertencem à União e devem ser recolhidos ao Tesouro Nacional."
      }
    ],
    "professorTip": "Fontes vedadas: PJ, sindicato, permissionária, origem estrangeira/não identificada. Sobras do FEFC = devolve ao Tesouro Nacional!"
  },
  {
    "id": "mig_eleit_027",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Cota de Gênero nas Eleições Proporcionais e Súmula 73 do TSE (Fraude à Cota)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em eleição proporcional para Vereador, partido político registra lista com 70% de homens e 30% de mulheres, porém três das mulheres registradas não realizam qualquer ato de campanha, obtêm votação zerada e prestam contas idênticas sem gastos efetivos.",
    "options": [
      {
        "letter": "A",
        "text": "Comprovada a candidatura fictícia feminina apenas para preencher a cota de 30%, cassa-se exclusivamente o registro da candidata fantasma, preservando-se os mandatos dos homens eleitos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "Configura-se fraude à cota de gênero, ensejando — a cassação do Demonstrativo de Regularidade de Atos Partidários (drap) e dos diplomas de todos os candidatos vinculados ao drap, a nulidade dos votos obtidos pelo partido com recálculo dos quocientes e a inelegibilidade de quem praticou ou anuiu com a fraude."
      },
      {
        "letter": "C",
        "text": "A obtenção de zero votos pela candidata mulher comprova automaticamente, por presunção absoluta e isolada, fraude à cota de gênero mesmo se fez campanha comprovada. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "D",
        "text": "O cálculo dos percentuais mínimo de 30% e máximo de 70% aplica-se também aos partidos coligados em eleições majoritárias para Prefeito e Senador, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "B",
    "justification": "Pelo Art. 10, § 3º, da Lei nº 9.504/1997, cada partido ou federação preencherá o mínimo de 30% e o máximo de 70% para candidaturas de cada sexo nas eleições proporcionais. Pela Súmula 73 do TSE (aprovada em 2024), a fraude à cota de gênero caracteriza-se por votação zerada/inexpressiva, prestação de contas zerada/padronizada e ausência de campanha, gerando cassação de todo o DRAP e recálculo dos quocientes.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Segundo a Súmula 73 do TSE, a fraude à cota de gênero contamina TODO o DRAP do partido, acarretando a cassação de todos os eleitos e suplentes da legenda, além da nulidade dos votos!"
      },
      {
        "letter": "C",
        "explanation": "A Súmula 73 do TSE exige a soma de elementos indicadores objetivos (votação zerada ou inexpressiva, prestação de contas zerada/padronizada e ausência de atos efetivos de campanha, especialmente em favor de candidato homem)."
      },
      {
        "letter": "D",
        "explanation": "A cota de gênero de 30% a 70% aplica-se nas eleições PROPORCIONAIS (Câmara dos Deputados, Assembleias Legislativas e Câmaras Municipais), aferida por cada partido ou federação."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 10, § 3º, da Lei nº 9.504/1997 e Súmula 73 do TSE",
        "textSnippet": "Pelo Art. 10, § 3º, da Lei nº 9.504/1997, cada partido ou federação preencherá o mínimo de 30% e o máximo de 70% para candidaturas de cada sexo nas eleições proporcionais. Pela Súmula 73 do TSE (aprovada em 2024), a fraude à cota de gênero caracteriza-se por votação zerada/inexpressiva, prestação de contas zerada/padronizada e ausência de campanha, gerando cassação de todo o DRAP e recálculo dos quocientes."
      }
    ],
    "jurisprudence": "Súmula 73 do TSE",
    "professorTip": "Súmula 73 TSE (Fraude à cota de gênero): cassa TODO o DRAP (inclusive os eleitos!) + anula votos do partido + recalcula quocientes + inelegibilidade a quem praticou/anuiu!"
  },
  {
    "id": "mig_eleit_028",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Cotas de Recursos e Tempo de Propaganda para Mulheres e Pessoas Negras (EC 117/2022)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Diretório nacional de partido político destina apenas 10% do seu Fundo Especial de Financiamento de Campanha (FEFC) às candidaturas femininas (que somam 35% da chapa) e ignora a contagem em dobro dos votos obtidos por mulheres e pessoas negras.",
    "options": [
      {
        "letter": "A",
        "text": "A reserva de 30% de recursos públicos de campanha e de tempo de rádio e tv para candidaturas femininas tem natureza meramente facultativa, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "A distribuição viola a Constituição, que impõe aos partidos a aplicação de no mínimo 30% dos recursos do Fundo Partidário e do fefc nas candidaturas femininas, proporcionalmente ao percentual de candidatas se superior a 30%."
      },
      {
        "letter": "C",
        "text": "Caso o partido não aplique integralmente o mínimo constitucional nas candidaturas femininas, pode compensar a diferença transferindo a sobra financeira para candidatos homens em troca de apoio, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "Os votos dados a candidatas mulheres ou a candidatos negros para a Câmara dos Deputados têm peso triplo perpétuo no cálculo das bancadas federais, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "B",
    "justification": "Consoante a EC nº 117/2022 (Art. 17, §§ 7º e 8º, CF), os partidos devem destinar às candidaturas femininas o percentual mínimo de 30% (proporcional se maior) do Fundo Partidário, do FEFC e do tempo de propaganda gratuita no rádio e na TV. Pela EC nº 111/2021, votos em mulheres e pessoas negras para Deputado Federal contam em dobro para rateio dos fundos (2022-2030).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A EC nº 117/2022 constitucionalizou nos §§ 7º e 8º do Art. 17 da CF a obrigatoriedade do mínimo de 30% do Fundo Partidário e do FEFC (e tempo de propaganda) para mulheres, proporcional às candidatas."
      },
      {
        "letter": "C",
        "explanation": "Nos termos da jurisprudência do TSE/STF, recursos reservados às candidaturas femininas e negras não podem ser desviados para campanhas de homens brancos, gerando desaprovação de contas e sanção (observada a anistia específica tratada em emendas quanto a exercícios passados conforme limites constitucionais)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 2º da EC nº 111/2021, para fins de distribuição entre os partidos do Fundo Partidário e do FEFC, os votos dados a candidatas mulheres ou a candidatos negros para a Câmara dos Deputados nas eleições de 2022 a 2030 serão contados em DOBRO."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 17, §§ 7º e 8º, da CF (EC nº 117/2022) e Art. 1º, § 2º, da EC nº 111/2021",
        "textSnippet": "Consoante a EC nº 117/2022 (Art. 17, §§ 7º e 8º, CF), os partidos devem destinar às candidaturas femininas o percentual mínimo de 30% (proporcional se maior) do Fundo Partidário, do FEFC e do tempo de propaganda gratuita no rádio e na TV. Pela EC nº 111/2021, votos em mulheres e pessoas negras para Deputado Federal contam em dobro para rateio dos fundos (2022-2030)."
      }
    ],
    "professorTip": "EC 117/22: mínimo 30% do Fundo Partidário, FEFC e tempo de TV/rádio para mulheres! EC 111/21: voto em mulher/negro para Deputado Federal conta em DOBRO para rateio dos fundos (2022-2030)!"
  },
  {
    "id": "mig_eleit_029",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Convenções Partidárias e Registro de Candidaturas (Prazos Legais)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Em ano eleitoral com primeiro turno no início de outubro, diretório municipal deseja realizar a convenção partidária para escolha de candidatos em 10 de agosto e protocolar o DRAP e os pedidos individuais de registro em 20 de agosto.",
    "options": [
      {
        "letter": "A",
        "text": "As convenções partidárias realizam-se livremente entre 1º e 30 de junho, e o registro vai até 5 de setembro, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "B",
        "text": "Ambos os atos estão fora do prazo legal: a escolha dos candidatos pelos partidos e a deliberação sobre coligações deverão ser feitas no período de 20 de julho a 5 de agosto do ano em que se realizarem as eleições, e o pedido de registro deve ser apresentado à Justiça Eleitoral até as 19 horas do dia 15 de agosto do mesmo ano."
      },
      {
        "letter": "C",
        "text": "Caso o partido político não protocole o pedido de registro dentro do prazo de 15 de agosto, o próprio candidato tem 10 dias adicionais ilimitados sem qualquer requisito, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      },
      {
        "letter": "D",
        "text": "As convenções partidárias podem ser realizadas apenas presencialmente em prédios privados, sendo proibida a utilização gratuita de prédios públicos, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Nos termos dos Arts. 8º e 11 da Lei nº 9.504/1997: convenções partidárias ocorrem entre 20 de julho e 5 de agosto (podendo usar gratuitamente prédios públicos mediante aviso prévio); e os pedidos de registro são apresentados à Justiça Eleitoral até as 19h do dia 15 de agosto (ou, em 48h da publicação, pelo próprio candidato preterido pelo partido).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Os prazos da Lei nº 9.504/1997 (redação da Lei nº 13.165/2015) são fixos: convenções de 20 de julho a 5 de agosto; pedido de registro até 15 de agosto (19h)."
      },
      {
        "letter": "C",
        "explanation": "Na hipótese de o partido/federação não requerer o registro de seus candidatos escolhidos em convenção, estes podem fazê-lo individualmente no prazo máximo de 48 horas seguintes à publicação da lista pelo juízo eleitoral (Art. 11, § 4º)."
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 8º, § 2º, da Lei nº 9.504/1997, para realização das convenções, os partidos poderão usar gratuitamente prédios públicos, responsabilizando-se por danos causados com a realização do evento."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 8º e 11 da Lei nº 9.504/1997",
        "textSnippet": "Nos termos dos Arts. 8º e 11 da Lei nº 9.504/1997: convenções partidárias ocorrem entre 20 de julho e 5 de agosto (podendo usar gratuitamente prédios públicos mediante aviso prévio); e os pedidos de registro são apresentados à Justiça Eleitoral até as 19h do dia 15 de agosto (ou, em 48h da publicação, pelo próprio candidato preterido pelo partido)."
      }
    ],
    "professorTip": "Datas chave da eleição: Convenções = 20 julho a 5 agosto (pode usar prédio público de graça); Registro = até 15 de agosto (19h)!"
  },
  {
    "id": "mig_eleit_030",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Sistema Eleitoral Majoritário - Maioria Simples vs. Maioria Absoluta (2º Turno)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em eleições no Município Alpha (com 150.000 eleitores) e no Município Beta (com 280.000 eleitores), os candidatos a Prefeito mais votados obtêm 42% dos votos válidos no primeiro turno. Paralelamente, realiza-se eleição para Senador.",
    "options": [
      {
        "letter": "A",
        "text": "No Município Alpha e na eleição para Senador da República aplica-se o sistema majoritário SIMPLES (ou relativo), estando eleito o mais votado já em turno único."
      },
      {
        "letter": "B",
        "text": "Haverá segundo turno para Prefeito sempre que o Município tiver mais de 200.000 habitantes residentes pelo censo do ibge, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "Para a apuração da maioria absoluta no primeiro turno para Presidente, Governador e Prefeito (> 200 mil eleitores), computam-se os votos em branco e os votos nulos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "Na eleição para Senador da República há segundo turno caso o candidato mais votado não alcance mais de 50% dos votos válidos, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      }
    ],
    "correctAnswer": "A",
    "justification": "Sistema majoritário no Brasil: 1) Simples/Relativo (turno único, vence quem tiver mais votos): Senador e Prefeito de municípios com até 200 mil eleitores; 2) Absoluto (2º turno se ninguém obtiver maioria absoluta dos votos válidos, excluídos brancos e nulos): Presidente, Governador e Prefeito de municípios com MAIS DE 200 MIL ELEITORES.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Atenção à pegadinha constitucional clássica: o Art. 29, II, da CF refere-se a municípios com mais de duzentos mil ELEITORES (e não habitantes)!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 77, § 2º, da CF exclui expressamente os votos em branco e os nulos, exigindo maioria absoluta apenas dos VOTOS VÁLIDOS!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 46 da CF estabelece que o Senado Federal é eleito segundo o princípio majoritário simples (1 turno único, renovando-se de 4 em 4 anos alternadamente por 1/3 e 2/3)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 28, 29, II, 46 e 77 da Constituição Federal",
        "textSnippet": "Sistema majoritário no Brasil: 1) Simples/Relativo (turno único, vence quem tiver mais votos): Senador e Prefeito de municípios com até 200 mil eleitores; 2) Absoluto (2º turno se ninguém obtiver maioria absoluta dos votos válidos, excluídos brancos e nulos): Presidente, Governador e Prefeito de municípios com MAIS DE 200 MIL ELEITORES."
      }
    ],
    "professorTip": "Majoritário com 2º turno (>50% dos votos VÁLIDOS): Presidente, Governador e Prefeito (> 200 mil ELEITORES — nunca habitantes!). Senador e município <= 200 mil = 1 turno só!"
  },
  {
    "id": "mig_eleit_031",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Sistema Eleitoral Proporcional - Quociente Eleitoral, Partidário e Sobras (ADI 7.228 STF)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na apuração das vagas para a Câmara Municipal ou Câmara dos Deputados pelo sistema proporcional, discute-se o cálculo do Quociente Eleitoral (QE), do Quociente Partidário (QP) e a distribuição das sobras pela regra dos 80/20 após a ADI 7.228 do STF.",
    "options": [
      {
        "letter": "A",
        "text": "Calcula-se o qe dividindo-se o número de votos válidos apurados pelo número de lugares a preencher."
      },
      {
        "letter": "B",
        "text": "Os votos em branco e nulos integram o cálculo do Quociente Eleitoral nas eleições proporcionais brasileiras, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "O candidato votado pode assumir cadeira pelo Quociente Partidário mesmo tendo obtido apenas 1% do Quociente Eleitoral em sua votação nominal, com validação da propaganda antecipada independentemente de pedido explícito de voto."
      },
      {
        "letter": "D",
        "text": "Segundo o STF na ADI 7.228, se restarem vagas na terceira fase das sobras após aplicada a regra 80/20, apenas os partidos que já alcançaram 80% do qe podem disputar as cadeiras restantes."
      }
    ],
    "correctAnswer": "A",
    "justification": "Sistema Proporcional (Arts. 106-109 CE + ADI 7.228 STF): QE = votos válidos / vagas (>0,5 arredonda para cima; <=0,5 despreza). QP = votos partido / QE (fração desprezada + candidato >= 10% QE). Sobras = 80% QE partido + 20% QE candidato; na última fase (sobras das sobras), TODOS os partidos participam (STF ADI 7.228)!",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Desde a Lei nº 9.504/1997 (Art. 5º), contam-se apenas os VOTOS VÁLIDOS nominais e de legenda, excluídos os votos em branco e os nulos."
      },
      {
        "letter": "C",
        "explanation": "O Art. 108 do Código Eleitoral exige que o candidato eleito pelo Quociente Partidário tenha obtido votação nominal mínima de 10% do Quociente Eleitoral (salvo se não houver quem preencha na última etapa das sobras)."
      },
      {
        "letter": "D",
        "explanation": "Na ADI 7.228/ADI 7.263/ADI 7.325, o STF declarou que na chamada \"terceira fase\" (sobras das sobras quando nenhum partido atende aos requisitos 80/20), TODOS os partidos políticos participantes do pleito concorrem às vagas remanescentes pelo critério das maiores médias (sem exclusão da cláusula 80/20 nessa última etapa)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 106 a 109 do Código Eleitoral e STF ADI 7.228",
        "textSnippet": "Sistema Proporcional (Arts. 106-109 CE + ADI 7.228 STF): QE = votos válidos / vagas (>0,5 arredonda para cima; <=0,5 despreza). QP = votos partido / QE (fração desprezada + candidato >= 10% QE). Sobras = 80% QE partido + 20% QE candidato; na última fase (sobras das sobras), TODOS os partidos participam (STF ADI 7.228)!"
      }
    ],
    "jurisprudence": "STF ADI 7.228 / 7.263 / 7.325",
    "professorTip": "Proporcional + ADI 7.228 STF: QE exclui brancos/nulos; QP exige candidato com >= 10% QE; Sobras = 80/20, mas se ainda sobrar vaga na fase final, TODOS os partidos concorrem!"
  },
  {
    "id": "mig_eleit_032",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Substituição de Candidatos - Prazo Geral de 20 Dias e Exceção de Falecimento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato a Deputado Estadual renuncia à candidatura 15 dias antes da eleição; em outro município, candidato a Prefeito falece 10 dias antes da data do pleito. O partido deseja substituir ambos.",
    "options": [
      {
        "letter": "A",
        "text": "Tanto nas eleições majoritárias quanto nas proporcionais, a substituição só se efetiva se o novo pedido for apresentado até 20 (vinte) dias antes do pleito, exceto no caso de falecimento do candidato. Logo, o renunciante a 15 dias não pode ser substituído, mas o falecido a 10 dias pode."
      },
      {
        "letter": "B",
        "text": "Em caso de renúncia voluntária do candidato a 5 dias da eleição, o partido pode substituí-lo livremente até a véspera da votação, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      },
      {
        "letter": "C",
        "text": "Na eleição majoritária, se o candidato a Prefeito falecer 10 dias antes do pleito, a substituição dependerá de autorização expressa da maioria dos partidos adversários. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "D",
        "text": "Em eleições proporcionais, se o substituto for substituído no prazo legal, não precisa respeitar os percentuais mínimos da cota de gênero de 30% a 70%. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      }
    ],
    "correctAnswer": "A",
    "justification": "Conforme o Art. 13 da Lei nº 9.504/1997, é facultado ao partido ou coligação substituir candidato que for considerado inelegível, renunciar ou falecer após o termo final do prazo do registro. O pedido deve ser feito em até 10 dias do fato/decisão, observado o limite fatal de 20 dias antes do pleito — ressalvada apenas a hipótese de falecimento.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A regra geral do Art. 13, § 3º, da Lei nº 9.504/1997 trava a substituição em até 20 dias antes do pleito para renúncia ou indeferimento/cassação — a ÚNICA exceção aos 20 dias é o FALECIMENTO!"
      },
      {
        "letter": "C",
        "explanation": "O partido/coligação a que pertencia o substituído tem o direito de substituir no prazo de até 10 dias do fato, inclusive no caso de falecimento dentro dos últimos 20 dias (Art. 13, §§ 1º e 3º)."
      },
      {
        "letter": "D",
        "explanation": "As substituições nas eleições proporcionais devem manter a observância dos percentuais mínimo de 30% e máximo de 70% por gênero."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 13 da Lei nº 9.504/1997",
        "textSnippet": "Conforme o Art. 13 da Lei nº 9.504/1997, é facultado ao partido ou coligação substituir candidato que for considerado inelegível, renunciar ou falecer após o termo final do prazo do registro. O pedido deve ser feito em até 10 dias do fato/decisão, observado o limite fatal de 20 dias antes do pleito — ressalvada apenas a hipótese de falecimento."
      }
    ],
    "professorTip": "Art. 13 Lei 9.504/97: prazo para pedir substituição = até 10 dias do fato, desde que até 20 DIAS ANTES DO PLEITO (única exceção aos 20 dias = FALECIMENTO)!"
  },
  {
    "id": "mig_eleit_033",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Propaganda Eleitoral - Início após 15 de Agosto vs. Atos Lícitos de Pré-Campanha",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Em julho do ano eleitoral (antes de 16 de agosto), pré-candidata participa de entrevista ao vivo em emissora de televisão expondo sua plataforma política, exaltando suas qualidades pessoais e declarando sua pré-candidatura, SEM pedir votos explicitamente.",
    "options": [
      {
        "letter": "A",
        "text": "A conduta é perfeitamente lícita, pois não configura propaganda eleitoral antecipada a menção à pretensa candidatura e a exaltação das qualidades pessoais dos pré-candidatos."
      },
      {
        "letter": "B",
        "text": "Qualquer menção a eventual pré-candidatura ou apresentação de propostas políticas antes de 16 de agosto constitui propaganda eleitoral antecipada ilegal sujeita a multa."
      },
      {
        "letter": "C",
        "text": "Durante a pré-campanha em junho, é lícito o pré-candidato instalar outdoors em rodovias exaltando suas qualidades desde que não peça votos, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "D",
        "text": "A propaganda eleitoral ordinária tem início permitido a partir do dia 5 de julho do ano da eleição, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      }
    ],
    "correctAnswer": "A",
    "justification": "Nos termos do Art. 36 da Lei nº 9.504/1997, a propaganda eleitoral somente é permitida após o dia 15 de agosto do ano da eleição (multa de R$ 5.000 a R$ 25.000 ou custo equivalente). Porém, o Art. 36-A autoriza ampla pré-campanha desde que ausente pedido explícito de votos (ou expressões equivalentes) e vedados meios proscritos na campanha (como outdoors).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 36-A flexibilizou amplamente a pré-campanha: entrevistas, debates, seminários, divulgação de atos parlamentares e posicionamentos pessoais são lícitos se não houver pedido explícito de voto nem meios proibidos (ex.: outdoors)."
      },
      {
        "letter": "C",
        "explanation": "Segundo jurisprudência pacífica do TSE, não se admite na pré-campanha o uso de formas ou meios PROIBIDOS na própria campanha eleitoral (como outdoors ou showmícios), ainda que sem pedido explícito de voto!"
      },
      {
        "letter": "D",
        "explanation": "Desde a Lei nº 13.165/2015, a propaganda eleitoral só é permitida após o dia 15 de agosto do ano da eleição (ou seja, a partir de 16 de agosto)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 36 e 36-A da Lei nº 9.504/1997",
        "textSnippet": "Nos termos do Art. 36 da Lei nº 9.504/1997, a propaganda eleitoral somente é permitida após o dia 15 de agosto do ano da eleição (multa de R$ 5.000 a R$ 25.000 ou custo equivalente). Porém, o Art. 36-A autoriza ampla pré-campanha desde que ausente pedido explícito de votos (ou expressões equivalentes) e vedados meios proscritos na campanha (como outdoors)."
      }
    ],
    "professorTip": "Propaganda eleitoral: só a partir de 16 de AGOSTO! Antes disso (pré-campanha - Art. 36-A): pode elogiar qualidades e anunciar pré-candidatura, desde que SEM pedido explícito de voto e SEM meio proibido (ex: outdoor)!"
  },
  {
    "id": "mig_eleit_034",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Propaganda Eleitoral na Internet - Impulsionamento, Anonimato e Direito de Resposta",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Eleitor pessoa física paga diretamente plataforma digital de rede social para impulsionar publicação elogiando seu candidato favorito; paralelamente, perfil anônimo difunde fatos sabidamente inverídicos contra candidata.",
    "options": [
      {
        "letter": "A",
        "text": "O impulsionamento pago pelo eleitor pessoa física é ilegal, pois o impulsionamento de conteúdo na internet somente é permitido para contratar diretamente partidos, coligações, federações, candidatos e representantes para promover ou beneficiar suas candidaturas."
      },
      {
        "letter": "B",
        "text": "Qualquer eleitor simpatizante pode pagar anúncios impulsionados em redes sociais para promover ou criticar livremente candidatos durante a campanha, com validação da propaganda antecipada independentemente de pedido explícito de voto. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "C",
        "text": "A contratação de propaganda eleitoral paga em portais de jornais digitais é inteiramente livre e sem limites, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "D",
        "text": "O prazo para o ofendido exercer o direito de resposta por ofensa em propaganda eleitoral na internet é de 15 dias a contar da veiculação, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "A",
    "justification": "Conforme os Arts. 57-A a 57-J da Lei nº 9.504/1997: é vedada propaganda paga na internet, salvo impulsionamento contratado exclusivamente por partido, federação, coligação ou candidato devidamente identificado (proibido impulsionamento negativo ou por eleitor comum); é vedado o anonimato (Art. 57-D) e proibida a compra de cadastro de endereços eletrônicos ou disparos em massa não consentidos.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 57-C, caput e § 3º, apenas partidos, federações, coligações, candidatos e seus representantes podem contratar impulsionamento pago na internet — e nunca pessoa física eleitor nem para propaganda negativa!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 57-C proíbe qualquer tipo de propaganda eleitoral paga na internet, EXCETO o impulsionamento de conteúdos devidamente identificado e contratado exclusivamente por partidos/coligações/candidatos (além da priorização paga em mecanismos de busca)."
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 58, § 1º, IV, da Lei nº 9.504/1997, em relação à internet o pedido de direito de resposta pode ser exercido a qualquer tempo enquanto disponível ou em até 72 horas após sua retirada (e em 24h/48h/72h nos demais meios)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 57-A a 58 da Lei nº 9.504/1997",
        "textSnippet": "Conforme os Arts. 57-A a 57-J da Lei nº 9.504/1997: é vedada propaganda paga na internet, salvo impulsionamento contratado exclusivamente por partido, federação, coligação ou candidato devidamente identificado (proibido impulsionamento negativo ou por eleitor comum); é vedado o anonimato (Art. 57-D) e proibida a compra de cadastro de endereços eletrônicos ou disparos em massa não consentidos."
      }
    ],
    "professorTip": "Internet nas eleições (Arts. 57-A a 57-J): PROIBIDA propaganda paga, EXCETO impulsionamento identificado contratado SÓ por partido/candidato/coligação (proibido eleitor pagar e proibido impulsionamento negativo)!"
  },
  {
    "id": "mig_eleit_035",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Propaganda em Bens Públicos vs. Bens Particulares - Adesivos, Outdoors e Showmícios",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Candidato cola cartazes de papel diretamente em postes de iluminação pública; em outro ponto da cidade, coloca adesivo plástico perfurado em toda a extensão do para-brisa traseiro do carro de um apoiador e realiza show musical gratuito com cantor famoso em comício.",
    "options": [
      {
        "letter": "A",
        "text": "Colar cartazes em postes de iluminação pública e realizar showmício com artistas são condutas proibidas."
      },
      {
        "letter": "B",
        "text": "É permitida a fixação de faixas, placas e bonecos móveis em calçadas e canteiros centrais públicos desde que não atrapalhem o trânsito de veículos."
      },
      {
        "letter": "C",
        "text": "O proprietário de imóvel residencial particular pode vender espaço no muro da sua casa ao candidato por quinhentos reais para pintura de propaganda eleitoral."
      },
      {
        "letter": "D",
        "text": "Os comícios eleitorais podem contar com apresentação gratuita de duplas sertanejas conhecidas desde que os artistas não cobrem cachê."
      }
    ],
    "correctAnswer": "A",
    "justification": "Regras clássicas de propaganda física: 1) Bens públicos / de uso comum (postes, viadutos, cinemas, clubes, lojas, templos): PROIBIDA propaganda (exceto bandeiras móveis e mesas de 6h-22h sem travar passagem); 2) Bens particulares: só adesivo/papel gratuito e espontâneo até 0,5 m² (ou para-brisa traseiro inteiro em microperfurado no carro); 3) Showmício (mesmo gratuito) e outdoor: PROIBIDOS!",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Desde a reforma da Lei nº 13.165/2015, acabou a permissão para cavaletes e bonecos fixos em bens de uso comum: hoje admite-se apenas bandeiras móveis e mesas de distribuição de material gráfico (entre 6h e 22h) que NÃO dificultem o bom andamento do trânsito de pessoas e veículos (Art. 37, §§ 6º e 7º)."
      },
      {
        "letter": "C",
        "explanation": "A propaganda em bens particulares deve ser ESPONTÂNEA e GRATUITA (vedado pagamento em troca de espaço - Art. 37, § 8º) e só pode ser feita por ADESIVO ou PAPEL de até 0,5 m² — proibida pintura direta em muros e proibida justaposição de adesivos que exceda 0,5 m²!"
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 39, § 7º, da Lei nº 9.504/1997, é proibida a realização de showmício e de evento assemelhado para promoção de candidatos, bem como a apresentação, remunerada OU NÃO, de artistas com a finalidade de animar comício (ressalvados apenas eventos exclusivos de arrecadação na forma do Art. 23 e shows não eleitorais/candidato que seja profissional artístico em atividade sem showmício)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 37, 38 e 39 da Lei nº 9.504/1997",
        "textSnippet": "Regras clássicas de propaganda física: 1) Bens públicos / de uso comum (postes, viadutos, cinemas, clubes, lojas, templos): PROIBIDA propaganda (exceto bandeiras móveis e mesas de 6h-22h sem travar passagem); 2) Bens particulares: só adesivo/papel gratuito e espontâneo até 0,5 m² (ou para-brisa traseiro inteiro em microperfurado no carro); 3) Showmício (mesmo gratuito) e outdoor: PROIBIDOS!"
      }
    ],
    "professorTip": "Propaganda física: Poste/igreja/comércio (uso comum) = PROIBIDO; Muro particular = proibido pintar e proibido pagar (só adesivo/papel até 0,5 m²); Carro = microperfurado no vidro traseiro inteiro ou 50x40cm; Showmício = PROIBIDO mesmo sem cachê!"
  },
  {
    "id": "mig_eleit_036",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Uso de Inteligência Artificial e Deepfakes nas Eleições (Resolução TSE 23.732/2024)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Campanha eleitoral produz vídeo sintético gerado por inteligência artificial alterando artificialmente a voz e a imagem de candidato adversário para simular declaração falsa de renúncia, divulgando-o sem qualquer aviso nas redes sociais.",
    "options": [
      {
        "letter": "A",
        "text": "A conduta é ilícita, pois a regulamentação eleitoral do TSE proíbe terminantemente o uso de conteúdos fabricados ou manipulados (deepfakes) para difundir fatos sabidamente inverídicos ou gravemente descontextualizados que atinjam a integridade do processo eleitoral, exigindo ainda rotulagem clara e explícita em qualquer conteúdo sintético lícito gerado por inteligência artificial."
      },
      {
        "letter": "B",
        "text": "A utilização de inteligência artificial para clonar a voz de adversário em vídeo falso é permitida no debate eleitoral como sátira política livre, dispensando rótulo, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Qualquer propaganda eleitoral criada licitamente com ferramentas de inteligência artificial dispensa informar ao eleitor que houve emprego de IA, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "É lícito o uso de chatbots automatizados que simulam conversa humana direta com eleitores fingindo ser o próprio candidato para pedir votos, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      }
    ],
    "correctAnswer": "A",
    "justification": "Atualizada pela Resolução TSE nº 23.732/2024, a disciplina da IA na propaganda eleitoral estabelece: a) obrigação de rótulo/aviso explícito em conteúdos sintéticos gerados por IA; b) proibição absoluta de deepfakes (conteúdo fabricado ou manipulado para prejudicar/favorecer candidaturas ou desacreditar o processo eleitoral); c) vedação de chatbots/avatares simulando diálogo com o candidato.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Embora a crítica e o humor sejam tutelados, o uso de deepfakes para fabricar/manipular falas ou imagens falsas de candidatos ou do processo eleitoral é proibido pela Resolução TSE nº 23.732/2024, sujeitando-se à remoção imediata e até cassação do registro/mandato em caso de abuso."
      },
      {
        "letter": "C",
        "explanation": "A norma do TSE impõe dever absoluto de transparência: qualquer conteúdo sintético multimídia criado ou manipulado por IA em propaganda eleitoral deve informar de modo explícito, destacado e acessível que foi produzido por IA e qual tecnologia foi utilizada."
      },
      {
        "letter": "D",
        "explanation": "A Resolução do TSE veda o uso de chatbots, avatares e robôs para intermediar o contato da campanha com o eleitor simulando interação humana real com o candidato ou pessoa real."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Resolução TSE nº 23.610/2019 (atualizada pela Resolução TSE nº 23.732/2024)",
        "textSnippet": "Atualizada pela Resolução TSE nº 23.732/2024, a disciplina da IA na propaganda eleitoral estabelece: a) obrigação de rótulo/aviso explícito em conteúdos sintéticos gerados por IA; b) proibição absoluta de deepfakes (conteúdo fabricado ou manipulado para prejudicar/favorecer candidaturas ou desacreditar o processo eleitoral); c) vedação de chatbots/avatares simulando diálogo com o candidato."
      }
    ],
    "professorTip": "IA nas eleições (Res. TSE 23.732/24): Deepfake falso = PROIBIDO (pode até cassar!); IA lícita = exige ROTULAGEM explícita; Robô fingindo ser humano/candidato = PROIBIDO!"
  },
  {
    "id": "mig_eleit_037",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Horário Eleitoral Gratuito no Rádio e na TV - Duração, Divisão e Inserções",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em eleição geral, partido pequeno com apenas dois deputados federais na Câmara pleiteia acesso exatamente igual ao dos grandes partidos nos 35 dias do horário eleitoral gratuito no rádio e televisão.",
    "options": [
      {
        "letter": "A",
        "text": "A distribuição do horário eleitoral gratuito não é igualitária: 90% do tempo é distribuído proporcionalmente ao número de representantes na Câmara dos Deputados e apenas 10% igualitariamente entre todos os partidos/federações/coligações com direito de acesso."
      },
      {
        "letter": "B",
        "text": "O horário eleitoral gratuito no rádio e tv tem duração de 60 dias e é dividido 50% igualmente e 50% conforme o número de Senadores, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "As emissoras de rádio e televisão suportam o prejuízo gratuito sem qualquer compensação tributária pelos espaços cedidos à Justiça Eleitoral, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "Em nenhuma hipótese é permitida a transmissão paga de propaganda eleitoral em emissoras de rádio ou televisão por assinatura, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "A",
    "justification": "Nos termos dos Arts. 44 a 47 da Lei nº 9.504/1997, a propaganda eleitoral no rádio e TV restringe-se ao horário gratuito nos 35 dias anteriores à antevéspera das eleições, vedada propaganda paga. Os partidos que atingem a cláusula de barreira constitucional dividem o tempo em 90% proporcional à bancada na Câmara dos Deputados e 10% igualitariamente.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Lei nº 13.165/2015 reduziu a duração para 35 dias anteriores à antevéspera do 1º turno (em rede e inserções), e o Art. 47, § 2º, divide o tempo em 90% proporcional à Câmara dos Deputados + 10% igualitário (observada a cláusula de barreira da EC 97/2017)."
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 99 da Lei nº 9.504/1997, as emissoras de rádio e televisão têm direito à compensação fiscal pela cedência do horário gratuito."
      },
      {
        "letter": "D",
        "explanation": "A propaganda eleitoral paga no rádio e na TV é realmente proibida (Art. 44), havendo apenas o horário gratuito nos canais abertos (e é proibido o horário gratuito em TV por assinatura fechada!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 44 a 53 da Lei nº 9.504/1997",
        "textSnippet": "Nos termos dos Arts. 44 a 47 da Lei nº 9.504/1997, a propaganda eleitoral no rádio e TV restringe-se ao horário gratuito nos 35 dias anteriores à antevéspera das eleições, vedada propaganda paga. Os partidos que atingem a cláusula de barreira constitucional dividem o tempo em 90% proporcional à bancada na Câmara dos Deputados e 10% igualitariamente."
      }
    ],
    "professorTip": "Horário eleitoral (rádio/TV): só GRATUITO (proibido pago), 35 dias antes da antevéspera; divisão = 90% proporcional à Câmara + 10% igualitário (exige cláusula de desempenho)!"
  },
  {
    "id": "mig_eleit_038",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Pesquisas Eleitorais e Enquetes - Registro Prévio de 5 Dias e Limites",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Instituto estatístico divulga pesquisa eleitoral registrada apenas dois dias antes da publicação na imprensa; paralelamente, portal de notícias realiza enquete aberta online sobre intenção de voto durante a campanha eleitoral de setembro.",
    "options": [
      {
        "letter": "A",
        "text": "Ambas as condutas são irregulares: as entidades e empresas que realizarem pesquisas de opinião pública para conhecimento público são obrigadas a registrar as informações metodológicas na Justiça Eleitoral até 5 (cinco) dias antes da divulgação."
      },
      {
        "letter": "B",
        "text": "O registro prévio da pesquisa eleitoral na Justiça Eleitoral deve ser feito com antecedência mínima de 24 horas antes da publicação, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "As enquetes eleitorais informais feitas em redes sociais ou sites de notícias são livres durante toda a campanha eleitoral desde que avisem não ter valor científico, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "D",
        "text": "Pesquisas eleitorais não podem jamais ser divulgadas na semana anterior ao domingo da eleição nem no dia da votação, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "A",
    "justification": "Conforme o Art. 33 da Lei nº 9.504/1997, toda pesquisa eleitoral de intenção de voto destinada a divulgação pública deve ser registrada na Justiça Eleitoral até 5 dias antes da divulgação, detalhando contratante, valor, metodologia e plano amostral. As enquetes eleitorais são expressamente proibidas no período de campanha eleitoral (§ 5º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 33, caput, da Lei nº 9.504/1997 impõe antecedência mínima de 5 DIAS antes da divulgação para registro na Justiça Eleitoral."
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 33, § 5º, da Lei nº 9.504/1997, é VEDADA, a partir de 16 de agosto (início da campanha), a realização de enquetes relacionadas ao processo eleitoral (admitidas apenas na pré-campanha antes do dia 16/08, com aviso claro)."
      },
      {
        "letter": "D",
        "explanation": "A antiga proibição de divulgação nos 15 dias anteriores foi declarada inconstitucional pelo STF (ADI 3.741): hoje pesquisas devidamente registradas podem ser divulgadas até mesmo no dia da eleição (boca de urna científica/pesquisa de intenção já registrada com 5 dias de antecedência, respeitando as regras de boca de urna física no local)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 33 a 35-A da Lei nº 9.504/1997",
        "textSnippet": "Conforme o Art. 33 da Lei nº 9.504/1997, toda pesquisa eleitoral de intenção de voto destinada a divulgação pública deve ser registrada na Justiça Eleitoral até 5 dias antes da divulgação, detalhando contratante, valor, metodologia e plano amostral. As enquetes eleitorais são expressamente proibidas no período de campanha eleitoral (§ 5º)."
      }
    ],
    "jurisprudence": "STF ADI 3.741",
    "professorTip": "Pesquisa eleitoral = registro na JE com no mínimo 5 DIAS de antecedência (pode divulgar até no dia da eleição!). Enquete na campanha = PROIBIDA!"
  },
  {
    "id": "mig_eleit_039",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Condutas Vedadas aos Agentes Públicos em Campanha (Art. 73 da Lei nº 9.504/1997)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Nos três meses que antecedem o pleito municipal, prefeito candidato à reeleição autoriza publicidade institucional paga com recursos da prefeitura divulgando obras da gestão sem que haja grave e urgente necessidade pública, e também cede gratuitamente veículos oficiais da secretaria para transportar material de campanha.",
    "options": [
      {
        "letter": "A",
        "text": "Ambas as condutas configuram condutas vedadas aos agentes públicos: é proibido ceder ou usar bens públicos móveis ou imóveis em benefício de candidato/partido e é proibido autorizar publicidade institucional nos 3 meses que antecedem o pleito."
      },
      {
        "letter": "B",
        "text": "A proibição de publicidade institucional nos três meses anteriores ao pleito aplica-se inclusive a campanhas educativas oficiais de vacinação declaradas urgentes pela Justiça Eleitoral, sem possibilidade de registro ou exercício do mandato diante da causa de inelegibilidade verificada."
      },
      {
        "letter": "C",
        "text": "Nos três meses antes da eleição é proibido nomear candidatos aprovados em concurso público já homologado antes do início do trimestre, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "A caracterização das condutas vedadas acarreta exclusivamente multa pecuniária, nunca podendo levar à cassação do registro ou diploma, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "A",
    "justification": "O Art. 73 da Lei nº 9.504/1997 tipifica as condutas vedadas aos agentes públicos em ano eleitoral, destacando-se: cessão de bens/servidores em horário de expediente; nos 3 meses antes do pleito, nomeações/demissões sem justa causa (salvo concursos já homologados antes e cargos em comissão) e publicidade institucional (salvo grave urgência reconhecida pela JE); e no ano inteiro, distribuição gratuita de bens/benefícios sociais (salvo calamidade/emergência ou programa autorizado em lei já em execução orçamentária no ano anterior).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 73, VI, \"b\", ressalva expressamente os casos de grave e urgente necessidade pública assim reconhecida pela Justiça Eleitoral e produtos/serviços com concorrência no mercado."
      },
      {
        "letter": "C",
        "explanation": "O Art. 73, V, \"c\", autoriza expressamente a nomeação dos aprovados em concursos públicos homologados ATÉ o início do prazo de 3 meses antes do pleito, bem como nomeação/exoneração para cargos em comissão!"
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 73, §§ 4º e 5º, o descumprimento gera suspensão imediata, multa e, nos casos graves previstos em lei (como cessão de bens, servidores em horário de expediente, publicidade institucional ou distribuição gratuita de bens), a CASSAÇÃO do registro ou do diploma!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 73 da Lei nº 9.504/1997",
        "textSnippet": "O Art. 73 da Lei nº 9.504/1997 tipifica as condutas vedadas aos agentes públicos em ano eleitoral, destacando-se: cessão de bens/servidores em horário de expediente; nos 3 meses antes do pleito, nomeações/demissões sem justa causa (salvo concursos já homologados antes e cargos em comissão) e publicidade institucional (salvo grave urgência reconhecida pela JE); e no ano inteiro, distribuição gratuita de bens/benefícios sociais (salvo calamidade/emergência ou programa autorizado em lei já em execução orçamentária no ano anterior)."
      }
    ],
    "professorTip": "Art. 73 (Condutas vedadas): 3 meses antes = sem publicidade institucional (salvo urgência JE) e sem nomear concurso não homologado antes; Ano inteiro = sem distribuir benesses grátis (salvo calamidade ou programa legal já em execução no ano anterior)!"
  },
  {
    "id": "mig_eleit_040",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Abuso de Poder Político e Econômico - AIJE (Gravidade vs. Potencialidade)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em Ação de Investigação Judicial Eleitoral (AIJE) proposta antes da diplomação, comprova-se que o candidato vencedor praticou severo abuso de poder econômico distribuindo combustível e cestas básicas em grande escala, embora haja vencido a eleição por diferença ainda maior de votos.",
    "options": [
      {
        "letter": "A",
        "text": "Para a procedência da aije exige-se prova matemática pericial de que o abuso de poder alterou efetivamente o resultado numérico da eleição, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "A Ação de Investigação Judicial Eleitoral (aije) só pode ser ajuizada após a diplomação dos candidatos eleitos, no prazo de 15 dias, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      },
      {
        "letter": "C",
        "text": "O candidato não eleito que praticou abuso de poder econômico na campanha não pode sofrer declaração de inelegibilidade em aije por não ter obtido diploma, com cassação do registro ou diploma e imposição de multa após regular instrução processual."
      },
      {
        "letter": "D",
        "text": "A aije deve ser julgada procedente para cassar o registro/diploma e decretar inelegibilidade de 8 anos, pois a partir da LC nº 135/2010, para a configuração do ato abusivo não será considerada a potencialidade de o fato alterar o resultado da eleição, mas apenas a gravidade das circunstâncias que o caracterizam."
      }
    ],
    "correctAnswer": "D",
    "justification": "A AIJE (Art. 22 da LC nº 64/1990) visa apurar uso indevido, desvio ou abuso do poder econômico ou do poder de autoridade, ou utilização indevida dos meios de comunicação social. Pode ser proposta por partido, coligação, candidato ou MP até a diplomação, bastando a gravidade das circunstâncias (inciso XVI) para gerar inelegibilidade por 8 anos e cassação do registro/diploma.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 22, XVI, da LC nº 64/1990 afastou expressamente a antiga exigência de potencialidade lesiva de alterar o resultado, substituindo-a pela gravidade das circunstâncias (aspecto qualitativo e quantitativo)!"
      },
      {
        "letter": "B",
        "explanation": "Atenção aos prazos! A AIJE pode ser ajuizada desde o registro de candidatura ATÉ A DATA DA DIPLOMAÇÃO (a ação pós-diplomação em 15 dias é a AIME — Art. 14, § 10, CF)!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 22, XIV, da LC nº 64/1990 prevê a declaração de inelegibilidade por 8 anos para o representado e para quantos hajam contribuído para a prática do ato, tenham sido eleitos ou não!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 22 da Lei Complementar nº 64/1990 (LC nº 135/2010)",
        "textSnippet": "A AIJE (Art. 22 da LC nº 64/1990) visa apurar uso indevido, desvio ou abuso do poder econômico ou do poder de autoridade, ou utilização indevida dos meios de comunicação social. Pode ser proposta por partido, coligação, candidato ou MP até a diplomação, bastando a gravidade das circunstâncias (inciso XVI) para gerar inelegibilidade por 8 anos e cassação do registro/diploma."
      }
    ],
    "professorTip": "AIJE (Art. 22 LC 64/90): prazo = até a DIPLOMAÇÃO; NÃO exige provar que mudou o resultado, basta GRAVIDADE DAS CIRCUNSTÂNCIAS (XVI); gera cassação + inelegibilidade de 8 anos!"
  },
  {
    "id": "mig_eleit_041",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Captação Ilícita de Sufrágio (Art. 41-A da Lei nº 9.504/1997 - Compra de Votos)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Candidato a vereador oferece e entrega pessoalmente duzentos reais a um único eleitor em troca do voto deste. O candidato alega em defesa que a compra de apenas um voto não teve gravidade nem potencialidade para mudar o resultado da eleição.",
    "options": [
      {
        "letter": "A",
        "text": "A representação por captação ilícita de sufrágio exige comprovação de que o volume de votos comprados foi suficiente para inverter a ordem dos eleitos, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "A representação baseada só pode ser proposta até o dia da votação em outubro, com validação da propaganda antecipada independentemente de pedido explícito de voto. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "C",
        "text": "A condenação isolada apenas, sem cassação do registro ou diploma, já gera automaticamente a inelegibilidade de 8 anos. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      },
      {
        "letter": "D",
        "text": "A defesa não prospera, pois a captação ilícita de sufrágio protege a liberdade de voto individual do eleitor, consumando-se com a mera doação, oferecimento, promessa ou entrega de bem/vantagem pessoal com o fim de obter o voto, independentemente de pedido explícito e independentemente de gravidade quantitativa ou potencialidade para alterar o pleito."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 41-A da Lei nº 9.504/1997, constitui captação ilícita de sufrágio o candidato doar, oferecer, prometer, ou entregar, ao eleitor, com o fim de obter-lhe o voto, bem ou vantagem pessoal de qualquer natureza, desde o registro da candidatura até o dia da eleição (inclusive por meio de violência ou grave ameaça - § 1º). A ação pode ser proposta até a diplomação, dispensando pedido explícito de voto ou potencialidade lesiva sobre o pleito.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferente da AIJE, o Art. 41-A tutela a liberdade individual do voto: basta a compra ou promessa de vantagem a UM único eleitor (com participação ou anuência do candidato) para gerar cassação do registro/diploma e multa!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 41-A, § 3º, a representação por captação ilícita de sufrágio poderá ser ajuizada até a data da DIPLOMAÇÃO."
      },
      {
        "letter": "C",
        "explanation": "Pela alínea \"j\" do Art. 1º, I, da LC nº 64/1990, a inelegibilidade de 8 anos decorre da condenação pela Justiça Eleitoral que aplique a CASSAÇÃO do registro ou do diploma por captação ilícita de sufrágio (ou conduta vedada)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 41-A da Lei nº 9.504/1997",
        "textSnippet": "Nos termos do Art. 41-A da Lei nº 9.504/1997, constitui captação ilícita de sufrágio o candidato doar, oferecer, prometer, ou entregar, ao eleitor, com o fim de obter-lhe o voto, bem ou vantagem pessoal de qualquer natureza, desde o registro da candidatura até o dia da eleição (inclusive por meio de violência ou grave ameaça - § 1º). A ação pode ser proposta até a diplomação, dispensando pedido explícito de voto ou potencialidade lesiva sobre o pleito."
      }
    ],
    "professorTip": "Art. 41-A (Captação Ilícita de Sufrágio): tutela liberdade de voto (basta 1 eleitor, sem precisar provar mudança no resultado!); prazo até DIPLOMAÇÃO; gera multa + cassação registro/diploma (e inelegibilidade 8 anos)!"
  },
  {
    "id": "mig_eleit_042",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Captação e Gastos Ilícitos de Recursos de Campanha - Ação do Art. 30-A (Caixa Dois)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Após a proclamação dos eleitos, o Ministério Público Eleitoral obtém provas de que candidato eleito utilizou expressivos recursos não contabilizados (\"caixa dois\") e omitiu despesas milionárias na prestação de contas, propondo a ação específica do Art. 30-A em 10 dias após a diplomação.",
    "options": [
      {
        "letter": "A",
        "text": "O prazo para propor a representação encerra-se improrrogavelmente na data da diplomação, não sendo aceita após ela, com cassação do registro ou diploma e imposição de multa após regular instrução processual."
      },
      {
        "letter": "B",
        "text": "A cassação do diploma com base exclusiva nunca depende da gravidade ou proporcionalidade dos gastos ilícitos frente ao total da campanha, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "O candidato que teve o diploma cassado exclusivamente incide automaticamente em inelegibilidade de 8 anos na alínea \"j\" da LC nº 64/1990, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      },
      {
        "letter": "D",
        "text": "A ação é tempestiva e cabível, pois qualquer partido político ou coligação (e o MPE) poderá representar à Justiça Eleitoral no prazo de 15 (quinze) dias da diplomação para apurar condutas em desacordo com as normas de arrecadação e gastos de recursos, podendo levar à negação ou cassação do diploma se comprovada a relevância jurídica da ilicitude."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 30-A da Lei nº 9.504/1997, qualquer partido, federação, coligação ou o MPE pode representar contra candidato por captação ou gastos ilícitos de recursos no prazo de 15 dias da diplomação. Comprovada a ilicitude relevante/grave na arrecadação ou gasto, será negado diploma ao candidato ou cassado se já houver sido outorgado.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferente da AIJE e do Art. 41-A (que vencem NA diplomação), a ação do Art. 30-A tem prazo de 15 DIAS A CONTAR DA DIPLOMAÇÃO (mesmo prazo da AIME)!"
      },
      {
        "letter": "B",
        "explanation": "A jurisprudência do TSE consolidou que a cassação do diploma pelo Art. 30-A exige proporcionalidade e relevância jurídica do ilícito financeiro frente ao conjunto da campanha (não se cassa por erro contábil irrisório)."
      },
      {
        "letter": "C",
        "explanation": "Pegadinha famosa do TSE: a alínea \"j\" da LC nº 64/1990 lista Arts. 41-A, 73, 74, 75 e 77 (captação ilícita de sufrágio, doação ilegal acima do limite etc.), MAS NÃO inclui automaticamente o Art. 30-A — salvo se reconhecido simultaneamente abuso de poder econômico (alínea \"d\")!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 30-A da Lei nº 9.504/1997",
        "textSnippet": "Nos termos do Art. 30-A da Lei nº 9.504/1997, qualquer partido, federação, coligação ou o MPE pode representar contra candidato por captação ou gastos ilícitos de recursos no prazo de 15 dias da diplomação. Comprovada a ilicitude relevante/grave na arrecadação ou gasto, será negado diploma ao candidato ou cassado se já houver sido outorgado."
      }
    ],
    "professorTip": "Art. 30-A (Caixa dois/gastos ilícitos): prazo = 15 DIAS DA DIPLOMAÇÃO! Exige relevância jurídica (proporcionalidade); cassa o diploma (atenção: Art. 30-A isolado NÃO está no rol literal da alínea \"j\" da LC 64/90)!"
  },
  {
    "id": "mig_eleit_043",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Ação de Impugnação de Registro de Candidatura (AIRC) - Prazo e Legitimidade",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Publicado o edital relativo aos pedidos de registro de candidatura em agosto, um cidadão eleitor isolado, um candidato concorrente e o Ministério Público Eleitoral pretendem ajuizar Ação de Impugnação de Registro de Candidatura (AIRC) no 4º dia após a publicação.",
    "options": [
      {
        "letter": "A",
        "text": "Qualquer cidadão eleitor em pleno gozo de seus direitos políticos tem legitimidade ativa direta para propor airc como parte autora, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      },
      {
        "letter": "B",
        "text": "O prazo para oposição da Ação de Impugnação de Registro de Candidatura é de 15 dias corridos a contar da convenção partidária, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "O partido político que integra uma coligação majoritária pode propor airc isoladamente contra candidato de outro partido sem autorização da coligação durante o período eleitoral."
      },
      {
        "letter": "D",
        "text": "Apenas o candidato concorrente e o Ministério Público Eleitoral possuem legitimidade ativa para ajuizar a airc no prazo de 5 (cinco) dias contados da publicação do pedido de registro do candidato."
      }
    ],
    "correctAnswer": "D",
    "justification": "Conforme o Art. 3º da LC nº 64/1990, caberá a qualquer candidato, a partido político, coligação/federação ou ao Ministério Público, no prazo de 5 (cinco) dias contados da publicação do pedido de registro do candidato, impugná-lo em petição fundamentada (AIRC). O eleitor comum pode apresentar apenas notícia de inelegibilidade.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 3º da LC nº 64/1990, a AIRC cabe apenas a candidato, partido político, coligação/federação ou Ministério Público; ao cidadão eleitor cabe apenas Notícia de Inelegibilidade (Resolução TSE 23.609)."
      },
      {
        "letter": "B",
        "explanation": "O prazo decadencial da AIRC é de 5 DIAS a contar da publicação do edital do pedido de registro (Art. 3º, caput, LC 64/90)."
      },
      {
        "letter": "C",
        "explanation": "Durante o processo eleitoral, partido político coligado atua legitimamente apenas por meio da coligação na eleição majoritária (Art. 6º, § 4º, Lei 9.504/97), salvo se questionar a própria validade da coligação!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 3º a 16 da Lei Complementar nº 64/1990",
        "textSnippet": "Conforme o Art. 3º da LC nº 64/1990, caberá a qualquer candidato, a partido político, coligação/federação ou ao Ministério Público, no prazo de 5 (cinco) dias contados da publicação do pedido de registro do candidato, impugná-lo em petição fundamentada (AIRC). O eleitor comum pode apresentar apenas notícia de inelegibilidade."
      }
    ],
    "professorTip": "AIRC (Art. 3º LC 64/90): prazo = 5 DIAS da publicação do edital; legitimados = candidato, partido/federação/coligação e MPE (eleitor comum SÓ apresenta notícia de inelegibilidade)!"
  },
  {
    "id": "mig_eleit_044",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Ação de Impugnação de Mandato Eletivo (AIME) - Prazo, Sigilo e Hipóteses",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato derrotado ajuíza Ação de Impugnação de Mandato Eletivo (AIME) 12 dias após a diplomação do eleito, alegando abuso do poder econômico e corrupção durante a campanha, e requer que o processo tramite em segredo de justiça.",
    "options": [
      {
        "letter": "A",
        "text": "A aime tramita em caráter público aberto desde a petição inicial, inclusive sua audiência e sentença, vedado o segredo de justiça. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "B",
        "text": "O prazo de 15 dias da aime é contado a partir da data da votação em segundo turno ou da posse do candidato eleito, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "Qualquer cidadão eleitor comum possui legitimidade ativa constitucional para ajuizar aime, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "D",
        "text": "A ação é tempestiva e o pedido está correto:, o mandato eletivo poderá ser impugnado ante a Justiça Eleitoral no prazo de 15 dias contados da diplomação, instruída a ação com provas de abuso do poder econômico, corrupção ou fraude."
      }
    ],
    "correctAnswer": "D",
    "justification": "Prevista diretamente no Art. 14, §§ 10 e 11, da Constituição Federal, a AIME deve ser ajuizada no prazo decadencial de 15 dias contados da diplomação, instruída com provas de abuso do poder econômico, corrupção ou fraude (incluindo fraude à cota de gênero!). Tramita em segredo de justiça e seu objetivo é a desconstituição do mandato eletivo.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 14, § 11, da CF prevê expressamente que a AIME tramitará em SEGREDO DE JUSTIÇA (sendo público o julgamento final, conforme interpretação conforme do TSE/STF para preservar publicidade das decisões)."
      },
      {
        "letter": "B",
        "explanation": "O termo inicial do prazo decadencial de 15 dias da AIME é a data da DIPLOMAÇÃO (Art. 14, § 10, CF)."
      },
      {
        "letter": "C",
        "explanation": "Segundo jurisprudência pacífica do TSE, aplicam-se à AIME os mesmos legitimados da AIRC/AIJE (candidato, partido, federação, coligação e MPE) — e não o eleitor comum."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, §§ 10 e 11, da Constituição Federal",
        "textSnippet": "Prevista diretamente no Art. 14, §§ 10 e 11, da Constituição Federal, a AIME deve ser ajuizada no prazo decadencial de 15 dias contados da diplomação, instruída com provas de abuso do poder econômico, corrupção ou fraude (incluindo fraude à cota de gênero!). Tramita em segredo de justiça e seu objetivo é a desconstituição do mandato eletivo."
      }
    ],
    "professorTip": "AIME (Art. 14, §§ 10-11 CF): prazo = 15 DIAS da diplomação; causas = abuso de poder econômico, corrupção ou fraude; tramita em SEGREDO DE JUSTIÇA!"
  },
  {
    "id": "mig_eleit_045",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Recurso Contra Expedição de Diploma (RCED) - Hipóteses e Prazo de 3 Dias",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Dois dias após a solenidade de diplomação, descobre-se que o prefeito eleito sofreu condenação criminal definitiva superveniente ao registro de candidatura que suspendeu seus direitos políticos (inelegibilidade superveniente), não arguida na AIRC.",
    "options": [
      {
        "letter": "A",
        "text": "O prazo para interposição do Recurso Contra Expedição de Diploma é de 15 dias contados da posse do candidato eleito, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "O rced pode ser utilizado após a diplomação para discutir inelegibilidade infraconstitucional preexistente ao registro que o partido esqueceu de alegar na airc, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      },
      {
        "letter": "C",
        "text": "Apesar do nome \"recurso\", o rced nunca tem natureza de ação autônoma e sempre é julgado pelo mesmo juiz eleitoral de primeiro grau, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "Cabe Recurso Contra Expedição de Diploma (rced) no prazo de 3 (três) dias contados da diplomação, uma vez que a legislação aplicável autoriza o rced exclusivamente nos casos de inelegibilidade superveniente ou de natureza constitucional e de falta de condição de elegibilidade."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 262 do Código Eleitoral e da Súmula 47 do TSE, o Recurso Contra Expedição de Diploma (RCED) deve ser interposto em até 3 dias após a diplomação e tem objeto estrito: apenas inelegibilidade superveniente ao registro, inelegibilidade constitucional (que não preclui!) ou ausência de condição de elegibilidade.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 258 c/c Art. 262 do Código Eleitoral e Súmula TSE, o prazo para interposição do RCED é de 3 (três) DIAS contados da data da sessão de diplomação!"
      },
      {
        "letter": "B",
        "explanation": "Preclusão clássica (Súmula 47 do TSE): a inelegibilidade infraconstitucional (LC 64/90) preexistente ao registro fica PRECLUSA se não for impugnada via AIRC! No RCED só cabe inelegibilidade SUPERVENIENTE (nascida após o registro até a eleição/diplomação) ou de natureza CONSTITUCIONAL, além de falta de condição de elegibilidade."
      },
      {
        "letter": "C",
        "explanation": "O RCED possui natureza jurídica de ação constitutivo-negativa (desconstitutiva) originária perante o órgão hierarquicamente imediatamente superior ao que expediu o diploma (TRE para eleições municipais; TSE para estaduais/federais)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 262 do Código Eleitoral (redação da Lei nº 12.891/2013)",
        "textSnippet": "Nos termos do Art. 262 do Código Eleitoral e da Súmula 47 do TSE, o Recurso Contra Expedição de Diploma (RCED) deve ser interposto em até 3 dias após a diplomação e tem objeto estrito: apenas inelegibilidade superveniente ao registro, inelegibilidade constitucional (que não preclui!) ou ausência de condição de elegibilidade."
      }
    ],
    "jurisprudence": "Súmula 47 do TSE",
    "professorTip": "RCED (Art. 262 CE): prazo = 3 DIAS da diplomação! Só cabe por: 1) inelegibilidade SUPERVENIENTE ao registro; 2) inelegibilidade CONSTITUCIONAL (não preclui); 3) falta de condição de elegibilidade!"
  },
  {
    "id": "mig_eleit_046",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Prestação de Contas de Campanha - Contas Desaprovadas vs. Não Prestadas (Quitação Eleitoral)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Dois ex-candidatos pretendem obter certidão de quitação eleitoral para disputar o próximo pleito: o primeiro teve suas contas de campanha julgadas NÃO PRESTADAS; o segundo teve suas contas julgadas DESAPROVADAS por irregularidades formais e materiais.",
    "options": [
      {
        "letter": "A",
        "text": "Tanto a desaprovação das contas quanto o julgamento como não prestadas retiram igualmente a certidão de quitação eleitoral do candidato."
      },
      {
        "letter": "B",
        "text": "A desaprovação das contas de campanha na prestação de contas torna o candidato automaticamente inelegível por 8 anos pela Lei da Ficha Limpa, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Após o término dos 4 anos do mandato ao qual concorreu, o candidato que jamais apresentou as contas recupera automaticamente a quitação eleitoral mesmo sem prestar contas."
      },
      {
        "letter": "D",
        "text": "O candidato com contas julgadas não prestadas fica impedido de obter certidão de quitação eleitoral durante o curso do mandato ao qual concorreu."
      }
    ],
    "correctAnswer": "D",
    "justification": "Consoante o Art. 11, § 7º, da Lei nº 9.504/1997 e a Súmula 42 do TSE, a quitação eleitoral exige a apresentação regular das contas de campanha. Logo, contas DESAPROVADAS permitem certidão de quitação eleitoral (sem gerar inelegibilidade automática), enquanto contas julgadas NÃO PRESTADAS impedem a quitação eleitoral durante o mandato e até a efetiva apresentação.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferença fundamental de prova (Art. 11, § 7º, Lei 9.504/97 e Súmula 42 TSE): a certidão de quitação exige apenas a APRESENTAÇÃO das contas! Contas DESAPROVADAS = têm quitação eleitoral; contas NÃO PRESTADAS = SEM quitação eleitoral!"
      },
      {
        "letter": "B",
        "explanation": "O TSE consolidou que a desaprovação de contas de campanha por si só gera sanções administrativas (devolução de valores irregulares / multa / suspensão de fundo partidário ao partido), mas NÃO gera inelegibilidade automática (diferente do Art. 30-A ou Art. 1º, I, \"g\", LC 64/90)."
      },
      {
        "letter": "C",
        "explanation": "Nos termos da Súmula 42 do TSE, a decisão que julga NÃO PRESTADAS as contas impede a quitação eleitoral durante o curso do mandato E persiste após o fim desse prazo enquanto não forem efetivamente apresentadas!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 11, § 7º, e Art. 30 da Lei nº 9.504/1997 e Súmula 42 do TSE",
        "textSnippet": "Consoante o Art. 11, § 7º, da Lei nº 9.504/1997 e a Súmula 42 do TSE, a quitação eleitoral exige a apresentação regular das contas de campanha. Logo, contas DESAPROVADAS permitem certidão de quitação eleitoral (sem gerar inelegibilidade automática), enquanto contas julgadas NÃO PRESTADAS impedem a quitação eleitoral durante o mandato e até a efetiva apresentação."
      }
    ],
    "jurisprudence": "Súmula 42 do TSE",
    "professorTip": "Contas de campanha (Súmula 42 TSE): DESAPROVADAS = TEM quitação eleitoral! NÃO PRESTADAS = NÃO TEM quitação durante todo o mandato e enquanto não apresentar!"
  },
  {
    "id": "mig_eleit_047",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Crimes Eleitorais - Corrupção Eleitoral, Boca de Urna e Violência Política contra a Mulher",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "No dia da votação, cabo eleitoral realiza aglomeração com vestuário padronizado promovendo propaganda de candidato na entrada de escola eleitoral (boca de urna); paralelamente, adversário assedia e humilha vereadora eleita visando dificultar o desempenho do mandato por menosprezo à condição de mulher.",
    "options": [
      {
        "letter": "A",
        "text": "No dia da eleição é crime até mesmo o eleitor comparecer sozinho à seção eleitoral vestindo camiseta ou broche de seu candidato de forma silenciosa."
      },
      {
        "letter": "B",
        "text": "Para a consumação do crime de corrupção eleitoral exige-se que o eleitor receba efetivamente o dinheiro e comprove que votou no candidato corruptor."
      },
      {
        "letter": "C",
        "text": "A violência política contra a mulher só abrange agressões físicas graves durante a campanha eleitoral, não protegendo mulheres já no exercício do mandato."
      },
      {
        "letter": "D",
        "text": "A boca de urna configura crime eleitoral; já a conduta contra a vereadora tipifica o crime de violência política contra a mulher."
      }
    ],
    "correctAnswer": "D",
    "justification": "Principais tipos penais eleitorais: 1) Corrupção eleitoral (Art. 299 CE): crime formal, pune dar/oferecer/prometer/solicitar/receber vantagem pelo voto ou abstenção; 2) Boca de urna (Art. 39, § 5º, Lei 9.504/97): crime no dia da eleição (ressalvada manifestação individual e silenciosa do Art. 39-A); 3) Violência política contra a mulher (Art. 326-B CE - Lei 14.192/21): reclusão de 1 a 4 anos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 39-A da Lei nº 9.504/1997 permite expressamente a manifestação INDIVIDUAL E SILENCIOSA da preferência do eleitor no dia da eleição por meio de bandeiras, broches, dísticos, adesivos e camisetas (vedada aglomeração ou abordagem/boca de urna!)."
      },
      {
        "letter": "B",
        "explanation": "O crime de corrupção eleitoral ativa ou passiva (Art. 299 CE — dar, oferecer, prometer, solicitar ou receber vantagem para obter ou dar voto) é CRIME FORMAL que se consuma com o simples oferecimento/promessa/solicitação, independentemente da aceitação ou do voto efetivo!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 326-B do Código Eleitoral (Lei nº 14.192/2021) protege expressamente a mulher tanto como CANDIDATA quanto como DETENTORA DE MANDATO ELETIVO, punindo assediar, constranger, humilhar, perseguir ou ameaçar com menosprezo/discriminação à condição de mulher visando impedir ou dificultar a campanha ou o exercício do mandato (pena de reclusão 1 a 4 anos e multa, aumentada de 1/3 se contra gestante, >60 anos ou pessoa com deficiência)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 299 e 326-B do Código Eleitoral e Art. 39, § 5º, da Lei nº 9.504/1997",
        "textSnippet": "Principais tipos penais eleitorais: 1) Corrupção eleitoral (Art. 299 CE): crime formal, pune dar/oferecer/prometer/solicitar/receber vantagem pelo voto ou abstenção; 2) Boca de urna (Art. 39, § 5º, Lei 9.504/97): crime no dia da eleição (ressalvada manifestação individual e silenciosa do Art. 39-A); 3) Violência política contra a mulher (Art. 326-B CE - Lei 14.192/21): reclusão de 1 a 4 anos."
      }
    ],
    "professorTip": "Crimes Eleitorais: Corrupção (Art. 299 CE) = formal; Dia da eleição: manifestação individual silenciosa (camiseta/adesivo/bandeira) PODE, aglomeração/boca de urna = CRIME! Art. 326-B CE = Violência política contra mulher candidata OU já no mandato!"
  },
  {
    "id": "mig_eleit_048",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Direito de Resposta na Propaganda Eleitoral - Prazos e Procedimento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato é atingido por afirmação caluniosa e sabidamente inverídica no horário eleitoral gratuito de televisão às 20h30. Seu advogado pretende ajuizar pedido de direito de resposta 36 horas depois.",
    "options": [
      {
        "letter": "A",
        "text": "No horário eleitoral gratuito de rádio e televisão, o prazo para o ofendido pedir direito de resposta é de 5 dias úteis, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "O pedido de direito de resposta na internet prescreve improrrogavelmente em 24 horas após a primeira postagem do conteúdo ofensivo, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "A simples crítica política ácida a atos de gestão administrativa sem ofensa pessoal ou fato sabidamente inverídico garante direito de resposta automático, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "O pedido é tempestivo, pois o prazo para requerer direito de resposta é de 24 horas quando se tratar de horário eleitoral gratuito, 48 horas na programação normal das emissoras de rádio e tv e 72 horas nos órgãos da imprensa escrita — logo, no horário gratuito (24h), passadas 36h o direito já estaria precluso (intempestivo)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Conforme o Art. 58, § 1º, da Lei nº 9.504/1997, o ofendido (candidato, partido ou coligação) pode pedir direito de resposta no prazo de 24 horas (horário gratuito), 48 horas (programação normal de rádio/TV), 72 horas (imprensa escrita) e a qualquer tempo na internet enquanto disponível ou em 72 horas após retirada.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Os prazos decadenciais do Art. 58, § 1º, são curtíssimos e contados em horas: 24h (horário eleitoral gratuito), 48h (programação normal de rádio/TV) e 72h (imprensa escrita)."
      },
      {
        "letter": "B",
        "explanation": "Na internet (Art. 58, § 1º, IV), o direito de resposta pode ser pedido a qualquer tempo enquanto a ofensa estiver disponível, ou em até 72 horas após sua retirada."
      },
      {
        "letter": "C",
        "explanation": "O TSE exige para o direito de resposta que a ofensa configure conceito, imagem ou afirmação caluniosa, difamatória, injuriosa ou sabidamente inverídica, não cabendo contra crítica política legítima."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 58 da Lei nº 9.504/1997",
        "textSnippet": "Conforme o Art. 58, § 1º, da Lei nº 9.504/1997, o ofendido (candidato, partido ou coligação) pode pedir direito de resposta no prazo de 24 horas (horário gratuito), 48 horas (programação normal de rádio/TV), 72 horas (imprensa escrita) e a qualquer tempo na internet enquanto disponível ou em 72 horas após retirada."
      }
    ],
    "professorTip": "Direito de Resposta (Art. 58 Lei 9.504/97): 24h = horário gratuito; 48h = programação normal rádio/TV; 72h = imprensa escrita; Internet = enquanto no ar + 72h após remoção!"
  },
  {
    "id": "mig_eleit_049",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Debates Eleitorais no Rádio e na TV - Regra da Representação Parlamentar",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Emissora de televisão organiza debate entre candidatos a Presidente da República e convida apenas os candidatos de partidos com pelo menos 5 parlamentares no Congresso Nacional, deixando de convidar candidato de partido sem representação parlamentar.",
    "options": [
      {
        "letter": "A",
        "text": "A emissora é obrigada a convidar todos os candidatos registrados, ainda que o partido não possua nenhum parlamentar no Congresso Nacional, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "O debate eleitoral transmitido por emissora de rádio ou tv pode contar com a participação exclusiva de apenas um candidato convidado em formato de entrevista, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Na eleição majoritária municipal, a ausência injustificada de um candidato convidado impede legalmente a realização do debate pela emissora, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "A emissora agiu licitamente, pois a Lei nº 9.504/1997 assegura a participação obrigatória apenas de candidatos dos partidos com representação no Congresso Nacional, no mínimo, 5 (cinco) parlamentares, sendo facultado à emissora convidar os demais candidatos."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 46 da Lei nº 9.504/1997, nas eleições majoritárias e proporcionais, é assegurada a participação nos debates em rádio e TV dos candidatos dos partidos com representação no Congresso Nacional de, no mínimo, cinco parlamentares (e facultada a dos demais).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 46 da Lei nº 9.504/1997 (validado pelo STF na ADI 5.423 e ADI 5.487) torna obrigatório convidar candidatos de partidos/federações com no mínimo 5 parlamentares no Congresso Nacional."
      },
      {
        "letter": "B",
        "explanation": "Para manter a isonomia do debate, convida-se os partidos com representação mínima de 5 parlamentares, exigindo-se presença plural ou respeito às regras acordadas com pelo menos 2/3 dos partidos aptos (Art. 46, § 5º)."
      },
      {
        "letter": "C",
        "explanation": "A ausência do candidato convidado não impede a realização do debate (não há direito de veto pela ausência)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 46 da Lei nº 9.504/1997 e STF ADI 5.423 / 5.487",
        "textSnippet": "Nos termos do Art. 46 da Lei nº 9.504/1997, nas eleições majoritárias e proporcionais, é assegurada a participação nos debates em rádio e TV dos candidatos dos partidos com representação no Congresso Nacional de, no mínimo, cinco parlamentares (e facultada a dos demais)."
      }
    ],
    "jurisprudence": "STF ADI 5.423 / ADI 5.487",
    "professorTip": "Debates TV/rádio (Art. 46 Lei 9.504/97): convite OBRIGATÓRIO para partidos com >= 5 parlamentares no Congresso Nacional; para os demais é FACULTATIVO!"
  },
  {
    "id": "mig_eleit_050",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Transporte e Alimentação Gratuitos de Eleitores no Dia da Eleição (Lei nº 6.091/1974)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato a prefeito contrata vans particulares para transportar gratuitamente eleitores de fazendas da zona rural até os locais de votação no domingo da eleição, oferecendo ainda marmitas gratuitas aos transportados.",
    "options": [
      {
        "letter": "A",
        "text": "É lícito ao candidato fornecer transporte e refeições gratuitos a eleitores rurais no dia da votação desde que declare os gastos na prestação de contas, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      },
      {
        "letter": "B",
        "text": "A Justiça Eleitoral fornece transporte gratuito no dia da eleição inclusive para eleitores residentes no centro da zona urbana, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "C",
        "text": "A conduta configura crime eleitoral previsto na Lei nº 6.091/1974, pois no dia da eleição somente a Justiça Eleitoral pode requisitar veículos oficiais e particulares para fornecer transporte gratuito aos eleitores residentes em zonas rurais."
      },
      {
        "letter": "D",
        "text": "Nenhum veículo particular ou de serviço público estadual ou municipal pode ser requisitado pela Justiça Eleitoral para o transporte de eleitores rurais, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      }
    ],
    "correctAnswer": "C",
    "justification": "Pela Lei nº 6.091/1974, o fornecimento gratuito de transporte e refeições a eleitores residentes em zonas rurais no dia do pleito é atribuição exclusiva da Justiça Eleitoral (que utiliza veículos públicos ou particulares requisitados). O fornecimento por candidatos ou partidos é crime grave punido com reclusão de 4 a 6 anos e multa (Art. 11, III).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei nº 6.091/1974 proíbe expressamente a qualquer candidato, partido ou particular fornecer transporte ou refeições a eleitores desde o dia anterior até o posterior à eleição, punindo a conduta com reclusão de 4 a 6 anos e multa (Art. 11, III)!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 4º da Lei nº 6.091/1974, o serviço gratuito oficial da Justiça Eleitoral destina-se exclusivamente aos eleitores residentes nas zonas rurais."
      },
      {
        "letter": "D",
        "explanation": "Os Arts. 1º e 2º da Lei nº 6.091/1974 autorizam expressamente o Juiz Eleitoral a requisitar veículos da administração pública direta/indireta e, se insuficientes, de particulares."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 1º a 11 da Lei nº 6.091/1974",
        "textSnippet": "Pela Lei nº 6.091/1974, o fornecimento gratuito de transporte e refeições a eleitores residentes em zonas rurais no dia do pleito é atribuição exclusiva da Justiça Eleitoral (que utiliza veículos públicos ou particulares requisitados). O fornecimento por candidatos ou partidos é crime grave punido com reclusão de 4 a 6 anos e multa (Art. 11, III)."
      }
    ],
    "professorTip": "Transporte de eleitores no dia do pleito (Lei 6.091/74): só a JUSTIÇA ELEITORAL pode fornecer (para zona rural); candidato dar carona ou comida = CRIME (reclusão 4 a 6 anos)!"
  },
  {
    "id": "mig_eleit_051",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Voto em Trânsito e Voto de Presos Provisórios / Adolescentes Internados",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Eleitor domiciliado em Curitiba estará viajando a trabalho em Recife no dia da eleição geral e pretende votar em trânsito; no mesmo pleito, preso provisório sem condenação definitiva e adolescente de 17 anos em internação socioeducativa também pretendem votar.",
    "options": [
      {
        "letter": "A",
        "text": "O voto em trânsito permite que o eleitor brasileiro vote até mesmo para Prefeito e Vereador fora de seu município nas eleições municipais, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "Eleitor brasileiro residente no exterior com título transferido para zona eleitoral no exterior vota para Presidente, Governador e Deputado Federal, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "Todos podem votar mediante habilitação prévia dentro do prazo fixado pelo TSE: o eleitor em trânsito poderá votar nas capitais e municípios com mais de 100 mil eleitores."
      },
      {
        "letter": "D",
        "text": "O voto em trânsito pode ser solicitado na própria seção eleitoral no domingo da eleição mediante apresentação de passagem aérea, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      }
    ],
    "correctAnswer": "C",
    "justification": "Conforme o Art. 233-A do Código Eleitoral: 1) Voto em trânsito só ocorre em eleições GERAIS, em capitais e municípios com mais de 100 mil eleitores, mediante habilitação prévia (se fora do Estado, vota só para Presidente; se dentro do mesmo Estado, vota para todos os cargos); 2) Eleitor no exterior vota só para Presidente; 3) Presos provisórios e adolescentes internados (16-17 anos alistados) têm garantido o direito ao voto em seções especiais.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O voto em trânsito (Art. 233-A CE) existe apenas nas eleições GERAIS (e apenas em capitais e municípios > 100 mil eleitores) — nunca há voto em trânsito nas eleições municipais!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 225 do Código Eleitoral, o eleitor brasileiro residente no exterior vota APENAS para Presidente e Vice-Presidente da República!"
      },
      {
        "letter": "D",
        "explanation": "A habilitação para o voto em trânsito exige requerimento prévio perante a Justiça Eleitoral dentro do prazo estabelecido no calendário eleitoral (antes da eleição)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 233-A do Código Eleitoral e Resolução TSE nº 23.736/2024",
        "textSnippet": "Conforme o Art. 233-A do Código Eleitoral: 1) Voto em trânsito só ocorre em eleições GERAIS, em capitais e municípios com mais de 100 mil eleitores, mediante habilitação prévia (se fora do Estado, vota só para Presidente; se dentro do mesmo Estado, vota para todos os cargos); 2) Eleitor no exterior vota só para Presidente; 3) Presos provisórios e adolescentes internados (16-17 anos alistados) têm garantido o direito ao voto em seções especiais."
      }
    ],
    "professorTip": "Voto em trânsito (Art. 233-A CE): só eleições GERAIS, em capitais e cidades > 100 mil eleitores (fora do Estado = só Presidente). Exterior = só Presidente! Preso provisório = vota!"
  },
  {
    "id": "mig_eleit_052",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Mesários - Prerrogativas Legais, Dispensa do Trabalho em Dobro e Impedimentos",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Trabalhador celetista é convocado pela Justiça Eleitoral para atuar como presidente de mesa receptora nos dois turnos da eleição e participar de um dia de treinamento presencial; seu irmão é candidato a Vereador no mesmo município.",
    "options": [
      {
        "letter": "A",
        "text": "A dispensa do trabalho em dobro aplica-se apenas ao serviço público estatutário, não alcançando empregados da iniciativa privada, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "Os dias de treinamento eleitoral não geram direito a folga compensatória em dobro, contando apenas o domingo da eleição, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "O trabalhador não pode ser mesário se tiver parentesco até o segundo grau com candidato, devendo arguir o impedimento."
      },
      {
        "letter": "D",
        "text": "O cônjuge ou parente até terceiro grau de candidato pode servir livremente como presidente da mesa receptora na mesma zona eleitoral."
      }
    ],
    "correctAnswer": "C",
    "justification": "Nos termos do Art. 98 da Lei nº 9.504/1997, mesários e convocados pela Justiça Eleitoral são dispensados do serviço (público ou privado) pelo dobro dos dias de convocação (incluindo treinamentos), sem prejuízo salarial. Contudo, o Art. 120, § 1º, do CE veda a nomeação de candidatos, cônjuges e parentes até o 2º grau, agentes policiais e ocupantes de cargos de confiança.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 98 aplica-se expressamente aos trabalhadores de empresas privadas e aos servidores públicos, mediante declaração expedida pela Justiça Eleitoral, sem prejuízo do salário."
      },
      {
        "letter": "B",
        "explanation": "O TSE pacificou que o Art. 98 abrange todos os dias de convocação oficial da Justiça Eleitoral, incluindo o treinamento presencial ou a distância concluído conforme convocação (cada dia de convocação = 2 dias de folga)."
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 120, § 1º, do Código Eleitoral, não podem ser nomeados presidentes e mesários os candidatos e seus parentes ainda que por afinidade, até o SEGUNDO grau, inclusive o cônjuge; membros de diretórios partidários com função executiva; autoridades/agentes policiais e ocupantes de cargos de confiança no Executivo."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 98 da Lei nº 9.504/1997 e Art. 120, § 1º, do Código Eleitoral",
        "textSnippet": "Nos termos do Art. 98 da Lei nº 9.504/1997, mesários e convocados pela Justiça Eleitoral são dispensados do serviço (público ou privado) pelo dobro dos dias de convocação (incluindo treinamentos), sem prejuízo salarial. Contudo, o Art. 120, § 1º, do CE veda a nomeação de candidatos, cônjuges e parentes até o 2º grau, agentes policiais e ocupantes de cargos de confiança."
      }
    ],
    "professorTip": "Mesário: 2 dias de folga remunerada para CADA dia convocado (inclusive treinamento, público ou privado)! Impedidos = candidato, cônjuge e parente até 2º grau, policial e cargo de confiança."
  },
  {
    "id": "mig_eleit_053",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Auditoria e Fiscalização do Sistema Eletrônico de Votação",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Partidos políticos, OAB e Ministério Público solicitam acompanhamento integral dos códigos-fonte dos programas das urnas eletrônicas, realização do Teste de Integridade no dia do pleito e conferência dos Boletins de Urna.",
    "options": [
      {
        "letter": "A",
        "text": "Os programas-fonte das urnas eletrônicas são protegidos por sigilo comercial absoluto, vedado o acesso da OAB, do Ministério Público e dos partidos políticos antes da eleição. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      },
      {
        "letter": "B",
        "text": "As seções eleitorais estão dispensadas de imprimir e afixar o Boletim de Urna físico na porta do local de votação caso transmitam os dados por rede privada, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "C",
        "text": "Os programas de computador das urnas eletrônicas ficam abertos à fiscalização, auditoria e assinatura digital por partidos, federações, coligações, OAB, Ministério Público e entidades fiscalizadoras até 1 ano antes, realizando-se ainda o Teste de Integridade (votação paralela) no dia da eleição e a emissão pública do Boletim de Urna imediatamente após o encerramento às 17h."
      },
      {
        "letter": "D",
        "text": "Cada partido político pode nomear apenas um fiscal para atuar em todo o município durante o dia da eleição, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "C",
    "justification": "O sistema eletrônico de votação brasileiro conta com ampla cadeia de auditoria pública (Art. 66 da Lei nº 9.504/97): abertura dos códigos-fonte para exame de partidos, MP, OAB e universidades; lacração física e digital; emissão da Zerésima antes do início às 8h; impressão e publicação do Boletim de Urna às 17h; e Teste de Integridade em tempo real no dia da eleição.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 66 da Lei nº 9.504/1997, é assegurado amplo acesso antecipado para análise e auditoria dos programas-fonte aos partidos, OAB e MP (além de testes públicos de segurança - TPS)."
      },
      {
        "letter": "B",
        "explanation": "Logo após o encerramento da votação, a urna imprime obrigatoriamente múltiplas vias do Boletim de Urna (entregues aos fiscais presentes e afixadas em local visível da seção eleitoral) para permitir conferência pública total."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 65 da Lei nº 9.504/1997, cada partido/federação/coligação pode nomear 2 delegados perante o Juízo Eleitoral e 2 fiscais para cada Mesa Receptora (atuando um por vez junto à mesa)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 65 e 66 da Lei nº 9.504/1997 e Resolução TSE nº 23.673/2021",
        "textSnippet": "O sistema eletrônico de votação brasileiro conta com ampla cadeia de auditoria pública (Art. 66 da Lei nº 9.504/97): abertura dos códigos-fonte para exame de partidos, MP, OAB e universidades; lacração física e digital; emissão da Zerésima antes do início às 8h; impressão e publicação do Boletim de Urna às 17h; e Teste de Integridade em tempo real no dia da eleição."
      }
    ],
    "professorTip": "Auditoria da Urna: abertura do código-fonte (partidos, OAB, MP), Zerésima às 8h, Teste de Integridade no dia do pleito e Boletim de Urna impresso na seção após 17h!"
  },
  {
    "id": "mig_eleit_054",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Ordem de Votação na Urna Eletrônica e Identificação do Eleitor",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "No primeiro turno das eleições gerais de outubro, o eleitor comparece à seção eleitoral portando apenas o seu título de eleitor impresso antigo (sem fotografia) e carteira nacional de habilitação digital oficial no celular (e-Título com foto), e indaga qual a ordem dos cargos na urna eletrônica.",
    "options": [
      {
        "letter": "A",
        "text": "É obrigatório apresentar o título de eleitor impresso original em papel na seção eleitoral, não bastando a apresentação exclusiva da carteira de identidade com foto."
      },
      {
        "letter": "B",
        "text": "Nas eleições gerais, a ordem na urna eletrônica inicia-se pelo cargo de Presidente da República e encerra-se com Deputado Federal."
      },
      {
        "letter": "C",
        "text": "O documento oficial com foto basta para votar mesmo sem o título de eleitor físico em papel."
      },
      {
        "letter": "D",
        "text": "Nas eleições municipais, o eleitor vota primeiro para Prefeito (2 dígitos) e depois para Vereador (5 dígitos), em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Conforme o Art. 91-A da Lei nº 9.504/1997 e a ADI 4.467 (STF), no momento da votação é indispensável a exibição de documento oficial com fotografia (dispensável o título em papel se o eleitor souber sua seção/constar do caderno). A ordem na urna vai sempre do cargo legislativo proporcional ao executivo majoritário.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 91-A da Lei nº 9.504/1997 e jurisprudência do STF (ADI 4.467), exige-se documento oficial COM FOTO para identificação na seção eleitoral; estando o nome no caderno de votação, o título em papel é dispensável!"
      },
      {
        "letter": "B",
        "explanation": "Ordem legal do Art. 59, § 3º, da Lei nº 9.504/1997 nas eleições gerais: 1) Deputado Federal; 2) Deputado Estadual/Distrital; 3) Senador; 4) Governador; 5) Presidente da República (nas municipais: Vereador -> Prefeito)."
      },
      {
        "letter": "D",
        "explanation": "Nas eleições municipais vota-se primeiro para Vereador (5 dígitos) e depois para Prefeito (2 dígitos)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 59 e 91-A da Lei nº 9.504/1997",
        "textSnippet": "Conforme o Art. 91-A da Lei nº 9.504/1997 e a ADI 4.467 (STF), no momento da votação é indispensável a exibição de documento oficial com fotografia (dispensável o título em papel se o eleitor souber sua seção/constar do caderno). A ordem na urna vai sempre do cargo legislativo proporcional ao executivo majoritário."
      }
    ],
    "jurisprudence": "STF ADI 4.467",
    "professorTip": "Ordem na urna (do menor/legislativo ao chefe Executivo): DF -> DE -> Senador -> Governador -> Presidente (Municipal: Vereador -> Prefeito). Identificação: EXIGE documento oficial COM FOTO!"
  },
  {
    "id": "mig_eleit_055",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Nulidade da Eleição e Novas Eleições - Art. 224 do Código Eleitoral (STF ADI 5.525)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Prefeito eleito com 55% dos votos válidos tem seu registro ou diploma cassado definitivamente pela Justiça Eleitoral por abuso de poder econômico em AIJE transitada em julgado faltando dois anos para o término do mandato.",
    "options": [
      {
        "letter": "A",
        "text": "A cassação do Prefeito eleito com 55% dos votos obriga o TSE a empossar automaticamente o segundo colocado na eleição, sem novas eleições, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "A simples soma de mais de 50% de votos nulos digitados voluntariamente pelos próprios eleitores (\"voto nulo\" de protesto) anula a eleição e obriga a realização de novo pleito, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "A decisão da Justiça Eleitoral que importe o indeferimento do registro, a cassação do diploma ou a perda do mandato de candidato eleito em pleito majoritário acarreta, após o trânsito em julgado, a realização de novas eleições."
      },
      {
        "letter": "D",
        "text": "No caso de cassação do diploma em pleito majoritário pelo TRE antes mesmo dos recursos ao TSE, realizam-se novas eleições imediatamente antes do trânsito em julgado, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Regra crucial do Art. 224, §§ 3º e 4º, do CE (ADI 5.525 STF): cassado o registro/diploma/mandato de eleito em pleito MAJORITÁRIO por ilícito eleitoral (após decisão definitiva/trânsito na JE), convocam-se NOVAS ELEIÇÕES (diretas se faltar >= 6 meses para fim do mandato; indiretas se faltar < 6 meses), independentemente do percentual de votos!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Atenção à virada da Lei nº 13.165/2015 (Art. 224, § 3º, CE) validada pelo STF na ADI 5.525: quando há cassação de chapa majoritária pela Justiça Eleitoral (diferente de mera nulidade de votos pelo eleitor!), realizam-se NOVAS ELEIÇÕES independentemente do percentual de votos anulados — nunca assume o segundo colocado!"
      },
      {
        "letter": "B",
        "explanation": "Pegadinha clássica do TSE! Os votos nulos por manifestação de vontade do eleitor (tecla nula/protesto) NÃO são computados para fins de anulação do Art. 224 caput do CE — apenas a nulidade decorrente de fraude/cassação judicial de mais de 50% dos votos (no caput) ou qualquer cassação majoritária (no § 3º) gera novas eleições!"
      },
      {
        "letter": "D",
        "explanation": "Na ADI 5.525, o STF deu interpretação conforme ao Art. 224, § 3º, determinando que as novas eleições ocorram apenas após decisão definitiva da última instância eleitoral (TSE) ou esgotamento dos recursos ordinários/trânsito em julgado na Justiça Eleitoral."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 224, §§ 3º e 4º, do Código Eleitoral e STF ADI 5.525",
        "textSnippet": "Regra crucial do Art. 224, §§ 3º e 4º, do CE (ADI 5.525 STF): cassado o registro/diploma/mandato de eleito em pleito MAJORITÁRIO por ilícito eleitoral (após decisão definitiva/trânsito na JE), convocam-se NOVAS ELEIÇÕES (diretas se faltar >= 6 meses para fim do mandato; indiretas se faltar < 6 meses), independentemente do percentual de votos!"
      }
    ],
    "jurisprudence": "STF ADI 5.525",
    "professorTip": "Art. 224, §§ 3º-4º CE: cassou chapa majoritária = NOVAS ELEIÇÕES (NUNCA assume 2º colocado!), sendo diretas se >= 6 meses do fim e indiretas se < 6 meses! Voto nulo de protesto do eleitor NÃO anula eleição!"
  },
  {
    "id": "mig_eleit_056",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Indivisibilidade da Chapa Majoritária (Súmula 38 do TSE)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em eleição municipal, o candidato a Prefeito sofre indeferimento definitivo do seu registro de candidatura por inelegibilidade da Lei da Ficha Limpa, enquanto seu candidato a Vice-Prefeito preenche pessoalmente todas as condições de elegibilidade e não possui nenhuma inelegibilidade.",
    "options": [
      {
        "letter": "A",
        "text": "Caso o candidato a Vice-Prefeito não tenha concorrido pessoalmente para o abuso de poder cometido pelo Prefeito na campanha, pode continuar governando sozinho após a cassação do Prefeito."
      },
      {
        "letter": "B",
        "text": "Na Ação de Investigação Judicial Eleitoral (aije) visando à cassação de chapa majoritária, é facultativo incluir o Vice-Prefeito ou Vice-Governador no polo passivo, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "O indeferimento do registro ou a cassação do diploma do titular contamina a chapa inteira antes do pleito ou quando decorre de ilícito eleitoral atribuído à chapa, pois a chapa majoritária é una e indivisível."
      },
      {
        "letter": "D",
        "text": "Se apenas o Vice for considerado pessoalmente inelegível antes do prazo de 20 dias, o partido perde automaticamente a candidatura do titular sem direito a substituir o Vice, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Pelo princípio da indivisibilidade da chapa majoritária (Art. 91 CE), os votos são dados ao binômio titular-vice. Consequentemente, a Súmula 38 do TSE estabelece o litisconsórcio passivo necessário entre titular e vice nas ações eleitorais que possam resultar em cassação de registro, diploma ou mandato (AIJE, AIME, Art. 41-A, RCED).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Por força da unicidade e indivisibilidade da chapa majoritária, a cassação do registro/diploma por ilícito eleitoral ou fraude atinge toda a chapa (titular e vice), salvo se a inelegibilidade posterior/pessoal exclusiva de um dos integrantes antes da eleição permitir substituição tempestiva no prazo legal."
      },
      {
        "letter": "B",
        "explanation": "Segundo a Súmula 38 do TSE, é OBRIGATÓRIO o litisconsórcio passivo necessário entre o titular e o vice nas ações de cassação de registro, diploma ou mandato (sob pena de extinção do processo sem mérito após o prazo decadencial!)."
      },
      {
        "letter": "D",
        "explanation": "Havendo indeferimento ou renúncia apenas do Vice dentro do prazo do Art. 13 da Lei nº 9.504/97 (até 20 dias antes, ou qualquer tempo se falecimento), o partido pode substituir o Vice para salvar a chapa."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 91 do Código Eleitoral e Súmula 38 do TSE",
        "textSnippet": "Pelo princípio da indivisibilidade da chapa majoritária (Art. 91 CE), os votos são dados ao binômio titular-vice. Consequentemente, a Súmula 38 do TSE estabelece o litisconsórcio passivo necessário entre titular e vice nas ações eleitorais que possam resultar em cassação de registro, diploma ou mandato (AIJE, AIME, Art. 41-A, RCED)."
      }
    ],
    "jurisprudence": "Súmula 38 do TSE",
    "professorTip": "Chapa majoritária = UNA e INDIVISÍVEL! Súmula 38 TSE: litisconsórcio passivo NECESSÁRIO entre titular e vice nas ações de cassação (se não incluir o vice dentro do prazo, processo cai)!"
  },
  {
    "id": "mig_eleit_057",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Dupla Vacância na Chefia do Executivo - Constituição Federal vs. Código Eleitoral",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Presidente e Vice-Presidente da República renunciam simultaneamente por motivos pessoais não eleitorais nos últimos dois anos do mandato presidencial. Paralelamente, em outro caso, Prefeito e Vice têm diplomas cassados por abuso eleitoral faltando 5 meses para o fim do mandato.",
    "options": [
      {
        "letter": "A",
        "text": "Em qualquer hipótese de dupla vacância de Prefeito e Vice por motivo não eleitoral, a Lei Orgânica Municipal é proibida de prever regra distinta da eleição direta nos últimos 2 anos."
      },
      {
        "letter": "B",
        "text": "Na eleição indireta, os eleitos exercem novo mandato completo de 4 anos a partir da posse, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "No caso da dupla vacância presidencial por causas não eleitorais nos últimos 2 anos do mandato, faz-se eleição indireta pelo Congresso Nacional em 30 dias."
      },
      {
        "letter": "D",
        "text": "Em caso de dupla vacância na Presidência da República por renúncia nos primeiros dois anos do mandato, realiza-se eleição indireta pelo Congresso Nacional."
      }
    ],
    "correctAnswer": "C",
    "justification": "Distinção essencial em vacância: 1) Causa não eleitoral na Presidência (Art. 81 CF): 1ª metade (2 primeiros anos) = direta em 90 dias; 2ª metade (2 últimos anos) = indireta pelo Congresso em 30 dias (sempre mandato-tampão); 2) Cassação eleitoral (Art. 224, §§ 3º-4º, CE): faltando >= 6 meses = direta; faltando < 6 meses = indireta!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Segundo o STF (ADI 4.298), o Art. 81 da CF NÃO é de reprodução obrigatória absoluta pelos Estados e Municípios em caso de vacância por motivos não eleitorais (podendo Constituições Estaduais e Leis Orgânicas dispor livremente sobre dupla vacância não eleitoral), mas as regras eleitorais do Art. 224 do CE para cassação eleitoral são federais obrigatórias!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 81, § 2º, da CF, os eleitos em eleição extraordinária (direta ou indireta) apenas COMPLETAM o período restante de seus antecessores (mandato-tampão)!"
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 81, caput, da CF, vagando nos dois PRIMEIROS anos = eleição DIRETA em 90 dias; vagando nos dois ÚLTIMOS anos = eleição INDIRETA pelo Congresso em 30 dias."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 81 da Constituição Federal e Art. 224, §§ 3º e 4º, do Código Eleitoral",
        "textSnippet": "Distinção essencial em vacância: 1) Causa não eleitoral na Presidência (Art. 81 CF): 1ª metade (2 primeiros anos) = direta em 90 dias; 2ª metade (2 últimos anos) = indireta pelo Congresso em 30 dias (sempre mandato-tampão); 2) Cassação eleitoral (Art. 224, §§ 3º-4º, CE): faltando >= 6 meses = direta; faltando < 6 meses = indireta!"
      }
    ],
    "jurisprudence": "STF ADI 4.298",
    "professorTip": "Dupla Vacância: Presidência não eleitoral (Art. 81 CF) = 2 primeiros anos DIRETA (90d) / 2 últimos anos INDIRETA (30d). Cassação eleitoral (Art. 224 CE) = >=6 meses DIRETA / <6 meses INDIRETA!"
  },
  {
    "id": "mig_eleit_058",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Suplência no Sistema Proporcional e no Senado Federal",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Deputado Federal renuncia ao mandato eletivo para assumir Prefeitura, e Senador da República falece no curso do mandato. Indaga-se quem assume as vagas respectivas e qual a exigência de desempenho individual para o suplente.",
    "options": [
      {
        "letter": "A",
        "text": "Assim como os deputados eleitos, o suplente de Deputado Federal só pode assumir a cadeira em caso de vacância se tiver obtido pelo menos 10% do Quociente Eleitoral."
      },
      {
        "letter": "B",
        "text": "Cada Senador da República é eleito com apenas um único suplente registrado na chapa, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "Na vaga do Deputado Federal assume o 1º suplente do mesmo partido/federação; na vaga do Senador assume o 1º suplente eleito com ele na chapa senatorial."
      },
      {
        "letter": "D",
        "text": "Se o Deputado Federal eleito por uma coligação antiga ou federação se desfiliar sem justa causa e perder o mandato, a vaga pertence ao próprio deputado pessoalmente e não ao partido."
      }
    ],
    "correctAnswer": "C",
    "justification": "Consoante o Art. 112 do Código Eleitoral, consideram-se suplentes da representação partidária os mais votados sob a mesma legenda não efetivamente eleitos (sem exigência do piso de 10% do QE para suplência). No Senado Federal (Art. 46, § 3º, CF), cada Senador é eleito com dois suplentes.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 112, parágrafo único, do Código Eleitoral (com redação clara e confirmada pelo STF) aplica a exigência dos 10% do QE apenas na definição dos eleitos inicialmente no Art. 108 — na ordem de SUPLÊNCIA do Art. 112 não se exige votação nominal mínima de 10%!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 46, § 3º, da CF, cada Senador será eleito com DOIS (2) suplentes."
      },
      {
        "letter": "D",
        "explanation": "A vaga parlamentar no sistema proporcional pertence ao partido ou federação (Art. 17 CF), assumindo o suplente da legenda correspondente."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 112 do Código Eleitoral e Art. 46, § 3º, da Constituição Federal",
        "textSnippet": "Consoante o Art. 112 do Código Eleitoral, consideram-se suplentes da representação partidária os mais votados sob a mesma legenda não efetivamente eleitos (sem exigência do piso de 10% do QE para suplência). No Senado Federal (Art. 46, § 3º, CF), cada Senador é eleito com dois suplentes."
      }
    ],
    "professorTip": "Suplência: Deputado/Vereador = mais votados do mesmo partido/federação (NÃO exige os 10% do QE para ser suplente!); Senador = eleito com 2 suplentes na chapa!"
  },
  {
    "id": "mig_eleit_059",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Desincompatibilização de Magistrados, Membros do MP e Servidores Públicos",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Juiz de Direito estadual e servidor público efetivo da prefeitura municipal desejam concorrer respectivamente a Prefeito e a Vereador nas eleições de outubro. Indaga-se o prazo de desincompatibilização e de filiação partidária de ambos.",
    "options": [
      {
        "letter": "A",
        "text": "O servidor público efetivo estatutário não tem direito a remuneração durante os 3 meses de afastamento eleitoral para concorrer a vereador, com cassação do registro ou diploma e imposição de multa após regular instrução processual."
      },
      {
        "letter": "B",
        "text": "O prazo de desincompatibilização do servidor público comum para concorrer a qualquer cargo eletivo é de 6 meses antes da eleição, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "O servidor público efetivo precisa afastar-se do cargo até 3 (três) meses antes do pleito, mas deve filiar-se a partido 6 meses antes; já o Juiz de Direito tem vedação constitucional à atividade político-partidária, devendo aposentar-se ou exonerar-se definitivamente até 6 meses antes do pleito e filiar-se no prazo legal logo após a exoneração/aposentadoria."
      },
      {
        "letter": "D",
        "text": "O magistrado em atividade pode filiar-se a partido político seis meses antes do pleito mantendo o exercício da judicatura até o registro de candidatura, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "C",
    "justification": "Prazos clássicos de desincompatibilização na LC nº 64/1990: Servidor público efetivo comum = 3 meses antes (com remuneração integral); Autoridade policial/Secretário/Ministro/Dirigente sindical/Magistrado/MP = em regra 4 meses (Prefeito/Vice municipal de certas funções) ou 6 meses antes (cargos gerais/legislativos/Prefeito em geral; magistrado e MP exigem afastamento definitivo por vedação constitucional à filiação ativa).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 1º, II, \"l\", da LC nº 64/1990, aos servidores públicos estatutários ou não afastados nos 3 meses anteriores ao pleito é garantido expressamente o direito à percepção dos seus vencimentos integrais!"
      },
      {
        "letter": "B",
        "explanation": "Regra geral do Art. 1º, II, \"l\", LC 64/90: servidor público comum (não ocupante de cargo comissionado ou arrecadador/fiscal com regra própria) afasta-se 3 MESES antes (com vencimentos integrais)!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 95, parágrafo único, III, da CF proíbe o juiz de exercer atividade político-partidária: precisa exonerar-se/aposentar-se definitivamente ANTES da filiação partidária (até 6 meses antes do pleito para eleições municipais, segundo jurisprudência do TSE)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 1º, II a VII, da LC nº 64/1990 e Art. 95, parágrafo único, III, CF",
        "textSnippet": "Prazos clássicos de desincompatibilização na LC nº 64/1990: Servidor público efetivo comum = 3 meses antes (com remuneração integral); Autoridade policial/Secretário/Ministro/Dirigente sindical/Magistrado/MP = em regra 4 meses (Prefeito/Vice municipal de certas funções) ou 6 meses antes (cargos gerais/legislativos/Prefeito em geral; magistrado e MP exigem afastamento definitivo por vedação constitucional à filiação ativa)."
      }
    ],
    "professorTip": "Desincompatibilização: Servidor público comum = 3 MESES antes (ganhando salário integral!); Juiz/MP = afastamento DEFINITIVO (exoneração/aposentadoria) até 6 meses antes (para poder filiar-se)!"
  },
  {
    "id": "mig_eleit_060",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Prazos de Desincompatibilização na LC nº 64/1990 (Secretários, Dirigentes e Fiscais)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Secretário Municipal de Saúde deseja concorrer a Prefeito do mesmo município; paralelamente, Auditor Fiscal de tributos municipais deseja concorrer a Vereador, e Presidente de Sindicato representativo de classe deseja concorrer a Prefeito.",
    "options": [
      {
        "letter": "A",
        "text": "Os prazos de desincompatibilização de Secretário Municipal e de dirigente sindical são unificados em 3 meses para qualquer cargo, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "Para concorrer às eleições municipais, tanto o Secretário Municipal, quanto o servidor fiscal com competência de lançamento/arrecadação/fiscalização de tributos e o dirigente sindical submetem-se aos prazos específicos da LC nº 64/1990."
      },
      {
        "letter": "C",
        "text": "O candidato a Vereador que ocupa cargo exclusivamente em comissão (livre nomeação e exoneração) tem direito a permanecer recebendo salário integral durante os 3 meses de afastamento eleitoral, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "Os reitores de universidades privadas sem recursos públicos também precisam desincompatibilizar-se 6 meses antes para concorrer a vereador, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Na LC nº 64/1990, os prazos de desincompatibilização variam conforme o cargo pretendido e a função ocupada (6 meses, 4 meses ou 3 meses). Destacam-se: servidor efetivo comum = 3 meses (licença remunerada); cargo exclusivamente comissionado = exoneração em 3 meses; Secretário Municipal = 4 meses (Prefeito) ou 6 meses (Vereador); Fiscais de tributos = 6 meses; Dirigente sindical = 4 meses.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Atenção à tabela da LC nº 64/1990: enquanto o servidor comum afasta-se 3 meses antes, Secretário de Estado/Município afasta-se 6 meses antes (para Deputado/Senador/Vereador) ou 4 meses antes (para Prefeito/Vice — Art. 1º, IV, \"a\"), e dirigente sindical/fiscal tributário 4 ou 6 meses conforme o cargo!"
      },
      {
        "letter": "C",
        "explanation": "O direito aos vencimentos integrais durante os 3 meses (Art. 1º, II, \"l\") aplica-se ao servidor efetivo estatutário/celetista; quem ocupa exclusivamente cargo em comissão deve ser EXONERADO 3 meses antes (sem continuar recebendo salário)!"
      },
      {
        "letter": "D",
        "explanation": "A inelegibilidade atinge dirigentes de entidades mantidas pelo Poder Público ou que recebam subvenções/contribuições impostas pelo Poder Público (Art. 1º, II, \"a\", 9 e \"g\"), não meros gestores puramente privados sem verba pública."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 1º, II, III, IV e VII, da LC nº 64/1990",
        "textSnippet": "Na LC nº 64/1990, os prazos de desincompatibilização variam conforme o cargo pretendido e a função ocupada (6 meses, 4 meses ou 3 meses). Destacam-se: servidor efetivo comum = 3 meses (licença remunerada); cargo exclusivamente comissionado = exoneração em 3 meses; Secretário Municipal = 4 meses (Prefeito) ou 6 meses (Vereador); Fiscais de tributos = 6 meses; Dirigente sindical = 4 meses."
      }
    ],
    "professorTip": "LC 64/90: Servidor efetivo = 3 meses (remunerado); Só comissionado = exoneração em 3 meses (sem salário); Fiscal tributário = 6 meses; Dirigente sindical = 4 meses; Secretário Municipal = 4 meses (Prefeito) / 6 meses (Vereador)!"
  },
  {
    "id": "mig_eleit_061",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Inelegibilidade Reflexa - Sucessão de Cônjuge/Parente e Reeleição Já Titular",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Vereadora no exercício de seu primeiro mandato casa-se durante o mandato com o Prefeito do mesmo município (também no primeiro mandato), pretendendo concorrer à reeleição para Vereadora na eleição seguinte; no mesmo município, a irmã do Prefeito deseja concorrer pela primeira vez ao cargo de Vice-Prefeita.",
    "options": [
      {
        "letter": "A",
        "text": "Ao casar-se com o Prefeito no curso do mandato, a Vereadora perde imediatamente o direito constitucional de concorrer até mesmo à própria reeleição."
      },
      {
        "letter": "B",
        "text": "A Vereadora pode concorrer à reeleição ao cargo de Vereadora porque já era titular de mandato eletivo e é candidata à reeleição."
      },
      {
        "letter": "C",
        "text": "Os primos (parentes de 4º grau) e os tios e sobrinhos (parentes de 3º grau) do Prefeito também são atingidos pela inelegibilidade reflexa constitucional."
      },
      {
        "letter": "D",
        "text": "O irmão do Governador do Estado é elegível para concorrer pela primeira vez ao cargo de Prefeito de um município situado naquele mesmo Estado, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Nos termos do Art. 14, § 7º, da CF, a inelegibilidade reflexa atinge cônjuge/companheiro e parentes até o 2º grau (consanguíneos, afins ou por adoção) no território de jurisdição do titular do Executivo — abrangendo Presidente (país inteiro), Governador (todos os cargos do Estado e seus municípios) e Prefeito (só aquele município) —, salvo se o parente já for titular de mandato eletivo e candidato à reeleição.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 14, § 7º, da CF ressalva expressamente \"salvo se já titular de mandato eletivo e candidato à reeleição\"."
      },
      {
        "letter": "C",
        "explanation": "O Art. 14, § 7º, limita a inelegibilidade reflexa taxativamente ao cônjuge/companheiro e aos parentes consanguíneos ou afins ATÉ O 2º GRAU (pais, filhos, avós, netos, irmãos, sogros, genro/nora, cunhados) ou por adoção — tios, sobrinhos (3º grau) e primos (4º grau) NÃO são atingidos!"
      },
      {
        "letter": "D",
        "explanation": "Cuidado com a circunscrição! O território de jurisdição do Governador abrange todo o Estado (logo, seu parente até 2º grau é inelegível para Prefeito ou Vereador de qualquer município daquele Estado, Deputado Estadual/Federal pelo Estado e Senador pelo Estado)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 14, § 7º, da Constituição Federal e Súmula Vinculante 18 do STF",
        "textSnippet": "Nos termos do Art. 14, § 7º, da CF, a inelegibilidade reflexa atinge cônjuge/companheiro e parentes até o 2º grau (consanguíneos, afins ou por adoção) no território de jurisdição do titular do Executivo — abrangendo Presidente (país inteiro), Governador (todos os cargos do Estado e seus municípios) e Prefeito (só aquele município) —, salvo se o parente já for titular de mandato eletivo e candidato à reeleição."
      }
    ],
    "professorTip": "Art. 14, § 7º CF: até 2º grau (tio/sobrinho/primo = fora!). Território do Governador = inclui Prefeito/Vereador do Estado! Exceção: já titular de mandato e candidato à reeleição (ou se titular renunciou 6 meses antes no 1º mandato)!"
  },
  {
    "id": "mig_eleit_062",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Inelegibilidade por Improbidade Administrativa na LC 64/90 - Requisitos Cumulativos",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Ex-secretário municipal foi condenado por órgão judicial colegiado (TJ) pela prática de ato doloso de improbidade administrativa que causou exclusivamente dano ao erário (Art. 10 da LIA), mas o acórdão expressamente afastou a ocorrência de enriquecimento ilícito próprio ou de terceiros.",
    "options": [
      {
        "letter": "A",
        "text": "Basta a condenação colegiada por ato de improbidade administrativa por simples violação aos princípios da administração pública para gerar a inelegibilidade da alínea \"l\", sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "Não incide a inelegibilidade da alínea \"l\", pois segundo o texto legal e a jurisprudência pacífica do TSE, tal inelegibilidade exige a presença cumulativa de três requisitos na condenação colegiada com suspensão dos direitos políticos: ato doloso de improbidade, lesão ao patrimônio público e enriquecimento ilícito."
      },
      {
        "letter": "C",
        "text": "Mesmo que o acórdão colegiado por improbidade administrativa não tenha aplicado a sanção de suspensão dos direitos políticos, o condenado fica inelegível pela alínea \"l\", com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "Caso a condenação definitiva por improbidade administrativa transite em julgado, a suspensão dos direitos políticos fixada na sentença não afeta a capacidade eleitoral passiva se faltar enriquecimento ilícito, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      }
    ],
    "correctAnswer": "B",
    "justification": "Nos termos do Art. 1º, I, \"l\", da LC nº 64/1990 e jurisprudência do TSE, a inelegibilidade decorrente de condenação por órgão colegiado em ação de improbidade administrativa depende cumulativamente de: suspensão dos direitos políticos, ato doloso, lesão ao erário E enriquecimento ilícito (próprio ou de terceiro). Após o trânsito em julgado, a própria suspensão dos direitos políticos (Art. 15, V, CF) retira condição de elegibilidade.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O TSE consolidou que a conjunção \"e\" do Art. 1º, I, \"l\", da LC 64/90 é CUMULATIVA: exige simultaneamente ato doloso com suspensão dos direitos políticos + lesão ao erário + enriquecimento ilícito (próprio ou de terceiro)!"
      },
      {
        "letter": "C",
        "explanation": "A alínea \"l\" exige expressamente que a decisão tenha imposto \"a suspensão dos direitos políticos\" por ato doloso que importe lesão ao patrimônio público E enriquecimento ilícito."
      },
      {
        "letter": "D",
        "explanation": "Atenção à diferença crucial! Antes do trânsito em julgado (apenas acórdão colegiado): exige a alínea \"l\" completa (lesão + enriquecimento ilícito + suspensão). APÓS O TRÂNSITO EM JULGADO da sentença que suspende direitos políticos: perde a condição de elegibilidade do Art. 14, § 3º, II c/c Art. 15, V, CF (pleno exercício dos direitos políticos)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 1º, I, \"l\", da LC nº 64/1990 e Jurisprudência do TSE",
        "textSnippet": "Nos termos do Art. 1º, I, \"l\", da LC nº 64/1990 e jurisprudência do TSE, a inelegibilidade decorrente de condenação por órgão colegiado em ação de improbidade administrativa depende cumulativamente de: suspensão dos direitos políticos, ato doloso, lesão ao erário E enriquecimento ilícito (próprio ou de terceiro). Após o trânsito em julgado, a própria suspensão dos direitos políticos (Art. 15, V, CF) retira condição de elegibilidade."
      }
    ],
    "professorTip": "Inelegibilidade colegiada por improbidade (\"l\" da LC 64/90): exige TUDO JUNTO -> suspensão direitos políticos + dolo + dano ao erário + enriquecimento ilícito!"
  },
  {
    "id": "mig_eleit_063",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Inelegibilidade por Demissão do Serviço Público e Doação Acima do Limite Legal",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Servidor público é demitido do serviço público em processo administrativo disciplinar definitivo; paralelamente, eleitor pessoa física é condenado pela Justiça Eleitoral por ter doado à campanha quantia superior a 10% de seus rendimentos brutos do ano anterior.",
    "options": [
      {
        "letter": "A",
        "text": "A demissão de servidor público em Processo Administrativo Disciplinar (pad) não gera inelegibilidade se não houver condenação penal paralela pelos mesmos fatos, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "Ambos incidem em causas específicas de inelegibilidade de 8 anos da LC nº 64/1990: o servidor demitido por processo administrativo ou judicial definitivo pelo prazo de 8 anos a contar da decisão, salvo se o ato houver sido suspenso ou anulado pelo Judiciário (alínea \"o\")."
      },
      {
        "letter": "C",
        "text": "A multa aplicada ao doador pessoa física por excesso de doação eleitoral jamais gera inelegibilidade para o doador, com cassação do registro ou diploma e imposição de multa após regular instrução processual."
      },
      {
        "letter": "D",
        "text": "Um advogado ou médico punido pelo conselho profissional (OAB/crm) por falta ético-disciplinar tem prazo de inelegibilidade de 3 anos, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "B",
    "justification": "A Lei da Ficha Limpa ampliou as hipóteses de inelegibilidade de 8 anos na LC nº 64/1990 para alcançar também a exclusão ético-profissional pelo órgão de classe (alínea \"m\"), a demissão do serviço público em PAD ou processo judicial (alínea \"o\", salvo suspensão/anulação judicial) e a doação eleitoral ilegal reconhecida por decisão transitada ou colegiada (alínea \"p\").",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A alínea \"o\" do Art. 1º, I, da LC nº 64/1990 prevê expressamente a inelegibilidade por 8 anos decorrente da demissão do serviço público em processo administrativo ou judicial (salvo suspensão ou anulação judicial)."
      },
      {
        "letter": "C",
        "explanation": "A alínea \"p\" torna inelegíveis por 8 anos a pessoa física e os dirigentes de pessoas jurídicas (quando existiam doações de PJ) responsáveis por doações eleitorais tidas por ilegais por decisão colegiada ou transitada em julgado da Justiça Eleitoral."
      },
      {
        "letter": "D",
        "explanation": "Nos termos da alínea \"m\" do Art. 1º, I, da LC nº 64/1990, quem for excluído do exercício da profissão por decisão sancionatória do órgão profissional competente, em decorrência de infração ético-profissional, fica inelegível pelo prazo de 8 (OITO) anos!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 1º, I, \"o\" e \"p\", da LC nº 64/1990",
        "textSnippet": "A Lei da Ficha Limpa ampliou as hipóteses de inelegibilidade de 8 anos na LC nº 64/1990 para alcançar também a exclusão ético-profissional pelo órgão de classe (alínea \"m\"), a demissão do serviço público em PAD ou processo judicial (alínea \"o\", salvo suspensão/anulação judicial) e a doação eleitoral ilegal reconhecida por decisão transitada ou colegiada (alínea \"p\")."
      }
    ],
    "professorTip": "LC 64/90 (8 anos também!): \"m\" = exclusão de profissão (OAB/CRM); \"o\" = demissão em PAD/processo judicial; \"p\" = doação eleitoral ilegal!"
  },
  {
    "id": "mig_eleit_064",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Ação Rescisória Eleitoral - Cabimento Restrito e Prazo de 120 Dias",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Após o trânsito em julgado de acórdão de Tribunal Regional Eleitoral que indeferiu registro de candidatura por suposta inelegibilidade, o ex-candidato ajuíza Ação Rescisória Eleitoral no TRE 100 dias após o trânsito em julgado.",
    "options": [
      {
        "letter": "A",
        "text": "A ação rescisória eleitoral segue o prazo de 2 anos do CPC e pode ser ajuizada perante qualquer TRE para rescindir sentenças sobre propaganda ou prestação de contas, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "A ação rescisória eleitoral não cabe no TRE e só é cabível no âmbito da Justiça Eleitoral perante o Tribunal Superior Eleitoral (TSE), no prazo decadencial de 120 dias da decisão irrecorrível, e exclusivamente nos casos de decisões que tenham versado sobre inelegibilidade."
      },
      {
        "letter": "C",
        "text": "Mesmo após decisão proferida pelo próprio STF em recurso extraordinário eleitoral, compete ao TSE julgar a rescisória contra o acórdão do STF, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "A propositura de ação rescisória eleitoral suspende automaticamente a inelegibilidade antes mesmo de decisão liminar do relator, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      }
    ],
    "correctAnswer": "B",
    "justification": "Consoante o Art. 22, I, \"j\", do Código Eleitoral e a Súmula 33 do TSE, compete originariamente ao TSE julgar ação rescisória, no prazo de 120 dias da decisão irrecorrível, exclusivamente nos casos de decisões que contenham declaração de inelegibilidade (inclusive decisões dos TREs ou juízes eleitorais sobre inelegibilidade).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Segundo a Súmula 33 do TSE e o Art. 22, I, \"j\", do CE, somente o TSE julga ação rescisória eleitoral, no prazo de 120 DIAS, e exclusivamente para desconstituir decisão que declarou inelegibilidade (nunca sobre propaganda, contas ou nulidade de votos)!"
      },
      {
        "letter": "C",
        "explanation": "Se a última decisão de mérito tiver sido do STF em RE, a competência rescisória é do STF; dentro da Justiça Eleitoral, a rescisória do Art. 22, I, \"j\", compete exclusivamente ao TSE contra julgados da Justiça Eleitoral sobre inelegibilidade."
      },
      {
        "letter": "D",
        "explanation": "A ação rescisória não possui efeito suspensivo automático; exige pedido cautelar/tutela provisória deferida pelo TSE."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 22, I, \"j\", do Código Eleitoral e Súmula 33 do TSE",
        "textSnippet": "Consoante o Art. 22, I, \"j\", do Código Eleitoral e a Súmula 33 do TSE, compete originariamente ao TSE julgar ação rescisória, no prazo de 120 dias da decisão irrecorrível, exclusivamente nos casos de decisões que contenham declaração de inelegibilidade (inclusive decisões dos TREs ou juízes eleitorais sobre inelegibilidade)."
      }
    ],
    "jurisprudence": "Súmula 33 do TSE",
    "professorTip": "Ação Rescisória Eleitoral (Súmula 33 TSE): SÓ NO TSE, prazo de 120 DIAS, e SÓ para desconstituir decisão sobre INELEGIBILIDADE!"
  },
  {
    "id": "mig_eleit_065",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Recursos Eleitorais - Prazo Geral de 3 Dias e Efeitos Recursais (Art. 257 CE)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em Ação de Investigação Judicial Eleitoral (AIJE), o Juiz Eleitoral julga procedente o pedido e cassa o diploma de Prefeito eleito. O prefeito interpõe recurso ao TRE no 4º dia após a intimação, alegando ainda que o recurso tem efeito suspensivo automático.",
    "options": [
      {
        "letter": "A",
        "text": "Todos os recursos eleitorais seguem o prazo unificado de 15 dias úteis do Código de Processo Civil, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "O recurso é intempestivo e possui regra própria de efeito: sempre que a lei não fixar prazo especial, o prazo para interposição de recursos eleitorais é de 3 (três) dias."
      },
      {
        "letter": "C",
        "text": "Todo recurso interposto contra sentença que cassa diploma de Prefeito no Juiz Eleitoral deve ser cumprido com afastamento imediato do prefeito antes mesmo do julgamento pelo TRE."
      },
      {
        "letter": "D",
        "text": "Os prazos recursais previstos para o Ministério Público Eleitoral contam-se sempre em dobro, com validação da propaganda antecipada independentemente de pedido explícito de voto."
      }
    ],
    "correctAnswer": "B",
    "justification": "Conforme os Arts. 257 e 258 do Código Eleitoral: 1) Prazo recursal geral = 3 dias (sem dobro para MP); 2) Regra geral: recursos eleitorais NÃO têm efeito suspensivo (Art. 257, caput); 3) Exceção fundamental (Art. 257, § 2º): recurso ordinário contra decisão que casse registro, afaste titular ou gere perda de mandato tem efeito suspensivo automático até o julgamento do TRE/TSE!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No processo eleitoral, o prazo recursal ordinário subsidiário é de 3 dias (Art. 258 CE), existindo ainda prazos de 24h na propaganda (Art. 96 Lei 9.504/97) e 3 dias para RCED/RE/RESPE/RO."
      },
      {
        "letter": "C",
        "explanation": "A Lei nº 13.165/2015 inseriu o § 2º no Art. 257 do Código Eleitoral determinando que o recurso ordinário interposto contra decisão proferida por juiz eleitoral ou por TRE que resulte em cassação de registro, afastamento do titular ou perda de mandato eletivo será recebido pelo Tribunal com EFEITO SUSPENSIVO!"
      },
      {
        "letter": "D",
        "explanation": "Segundo jurisprudência consolidada do TSE (e Art. 180, § 2º, CPC), não se aplica a prerrogativa de prazo em dobro ao Ministério Público nem à Defensoria/Fazenda nos processos eleitorais diante da celeridade do rito eleitoral!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 257 e 258 do Código Eleitoral",
        "textSnippet": "Conforme os Arts. 257 e 258 do Código Eleitoral: 1) Prazo recursal geral = 3 dias (sem dobro para MP); 2) Regra geral: recursos eleitorais NÃO têm efeito suspensivo (Art. 257, caput); 3) Exceção fundamental (Art. 257, § 2º): recurso ordinário contra decisão que casse registro, afaste titular ou gere perda de mandato tem efeito suspensivo automático até o julgamento do TRE/TSE!"
      }
    ],
    "professorTip": "Recursos Eleitorais: Prazo geral = 3 DIAS (sem dobro pro MP). Efeito: regra = SEM suspensivo; EXCEÇÃO (Art. 257, § 2º) = decisão de cassação de registro/mandato tem efeito SUSPENSIVO no recurso ordinário!"
  },
  {
    "id": "mig_eleit_066",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Recurso Especial Eleitoral (RESPE) vs. Recurso Ordinário Eleitoral (RO) no TSE",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em eleições estaduais para Governador e Deputado Estadual, o TRE julga procedente uma AIJE cassando o diploma do Governador; no mesmo mês, o TRE julga ação anulando propaganda irregular municipal.",
    "options": [
      {
        "letter": "A",
        "text": "As decisões dos Tribunais Regionais Eleitorais são sempre terminativas em todo e qualquer caso de eleição municipal, nunca cabendo recurso ao TSE, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "Das decisões dos TREs caberá Recurso ordinário ao TSE quando versarem sobre expedição de diplomas nas eleições federais ou estaduais, ou quando decretarem a perda de mandatos eletivos federais ou estaduais, podendo o TSE reexaminar fatos e provas."
      },
      {
        "letter": "C",
        "text": "No julgamento de Recurso Especial Eleitoral (respe), o TSE realiza livre reexame de todo o conjunto fático-probatório dos autos, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "D",
        "text": "Contra decisão do TRE que denegar habeas corpus ou mandado de segurança em matéria eleitoral cabe Recurso Especial, e não Recurso Ordinário, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      }
    ],
    "correctAnswer": "B",
    "justification": "Distinção constitucional (Art. 121, § 4º, CF): 1) Recurso Ordinário (RO - permite reexame de fatos e provas): expedição/cassação de diploma ou perda de mandato em eleições FEDERAIS ou ESTADUAIS (incisos III e IV) e denegação de HC, MS, HD ou MI (inciso V); 2) Recurso Especial (RESPE - só matéria jurídica, Súmula 24 TSE): contrariedade à CF ou lei federal (I) e dissídio jurisprudencial entre tribunais eleitorais (II).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 121, § 4º, da CF prevê as 5 hipóteses taxativas de cabimento de recurso ao TSE (entre elas violação expressa à Constituição/lei federal, divergência jurisprudencial, denegação de HC/MS e cassação/diplomas estaduais e federais)."
      },
      {
        "letter": "C",
        "explanation": "Nos termos da Súmula 24 do TSE (análoga à Súmula 7 do STJ), não cabe Recurso Especial Eleitoral para simples reexame do conjunto fático-probatório!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 121, § 4º, V, da CF, das decisões dos TREs que denegarem habeas corpus, mandado de segurança, habeas data ou mandado de injunção cabe Recurso ORDINÁRIO para o TSE!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 121, § 4º, da Constituição Federal e Art. 276 do Código Eleitoral",
        "textSnippet": "Distinção constitucional (Art. 121, § 4º, CF): 1) Recurso Ordinário (RO - permite reexame de fatos e provas): expedição/cassação de diploma ou perda de mandato em eleições FEDERAIS ou ESTADUAIS (incisos III e IV) e denegação de HC, MS, HD ou MI (inciso V); 2) Recurso Especial (RESPE - só matéria jurídica, Súmula 24 TSE): contrariedade à CF ou lei federal (I) e dissídio jurisprudencial entre tribunais eleitorais (II)."
      }
    ],
    "jurisprudence": "Súmula 24 do TSE",
    "professorTip": "Art. 121, § 4º CF (TRE -> TSE): RO (reexamina prova!) = diploma/mandato FEDERAL ou ESTADUAL + denegação HC/MS/HD/MI. RESPE (Súmula 24 veda reexame de prova!) = violação CF/lei ou dissídio (inclui eleições municipais)!"
  },
  {
    "id": "mig_eleit_067",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Prazos Especiais na Propaganda Eleitoral e Reclamações/Representações (Art. 96)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Candidato protocola representação por propaganda eleitoral irregular perante o Juiz Eleitoral durante o mês de setembro. Indaga-se o prazo de defesa do representado e o prazo para recorrer da sentença proferida pelo Juiz Eleitoral.",
    "options": [
      {
        "letter": "A",
        "text": "Nas representações por propaganda eleitoral irregular, o representado tem prazo de 15 dias para contestar e 10 dias para recorrer, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "Recebida a representação por descumprimento da Lei das Eleições, a Justiça Eleitoral notificará imediatamente o reclamado para apresentar defesa no prazo de 48 (quarenta e oito) horas, e da decisão caberá recurso no prazo de 24 (vinte e quatro) horas."
      },
      {
        "letter": "C",
        "text": "Entre 15 de agosto e a diplomação, os prazos relativos às representações são suspensos aos sábados, domingos e feriados. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "A representação por propaganda irregular pode ser julgada diretamente pelo TSE mesmo quando envolver disputa exclusivamente municipal para Vereador, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "B",
    "justification": "Conforme o rito célere do Art. 96 da Lei nº 9.504/1997, as reclamações e representações por violação às regras da Lei das Eleições (como propaganda eleitoral irregular) observam o prazo de 48 horas para defesa do representado, decisão em 24 horas e recurso em 24 horas (com prazos contínuos e peremptórios inclusive aos fins de semana durante o período eleitoral).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O rito das representações de propaganda do Art. 96 é sumaríssimo em função da urgência da campanha: 48 horas para defesa (§ 5º) e 24 horas para recurso (§ 8º)!"
      },
      {
        "letter": "C",
        "explanation": "No período eleitoral definido em lei/calendário (a partir de 15 de agosto até a diplomação), os prazos processuais eleitorais relativos aos feitos eleitorais são contínuos e peremptórios, NÃO se suspendendo aos sábados, domingos e feriados (Art. 16 LC 64/90 e Art. 96 Lei 9.504/97)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 96 da Lei nº 9.504/1997, a competência é dos Juízes Eleitorais nas eleições municipais, dos TREs nas eleições estaduais/federais (exceto Presidência) e do TSE na eleição presidencial."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 96 da Lei nº 9.504/1997",
        "textSnippet": "Conforme o rito célere do Art. 96 da Lei nº 9.504/1997, as reclamações e representações por violação às regras da Lei das Eleições (como propaganda eleitoral irregular) observam o prazo de 48 horas para defesa do representado, decisão em 24 horas e recurso em 24 horas (com prazos contínuos e peremptórios inclusive aos fins de semana durante o período eleitoral)."
      }
    ],
    "professorTip": "Rito propaganda (Art. 96 Lei 9.504/97): defesa = 48 HORAS; decisão = 24 HORAS; recurso = 24 HORAS! (Não suspende em fim de semana/feriado durante o período eleitoral!)."
  },
  {
    "id": "mig_eleit_068",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Consultas à Justiça Eleitoral - Legitimidade, Natureza e Limites",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Prefeito municipal em exercício formula consulta jurídica em tese ao Tribunal Superior Eleitoral questionando se um fato concreto específico ocorrido em seu município acarretaria sua inelegibilidade.",
    "options": [
      {
        "letter": "A",
        "text": "Qualquer eleitor ou prefeito municipal pode apresentar consulta jurídica ao TSE sobre sua própria elegibilidade no caso concreto, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      },
      {
        "letter": "B",
        "text": "A consulta não deve ser conhecida por duplo motivo: o Prefeito municipal não possui legitimidade para formular consulta ao TSE."
      },
      {
        "letter": "C",
        "text": "A resposta dada pelo TSE a uma consulta possui força vinculante absoluta idêntica à Súmula Vinculante do STF, impedindo o juiz eleitoral de decidir diferente diante das peculiaridades do caso concreto."
      },
      {
        "letter": "D",
        "text": "Os Juízes Eleitorais de primeiro grau têm competência originária para responder a consultas eleitorais formuladas por diretórios municipais, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "B",
    "justification": "Consoante os Arts. 23, XII, e 30, VIII, do Código Eleitoral, compete ao TSE (sobre matéria federal/nacional) e aos TREs (sobre matéria regional/estadual) responder a consultas feitas em TESE por autoridade pública competente ou órgão partidário (nacional no TSE, regional no TRE). As respostas têm caráter consultivo não vinculante e jamais se aplicam a casos concretos nem por Juiz Eleitoral.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Os legitimados no Art. 23, XII, CE (TSE) são apenas autoridade com jurisdição federal ou órgão nacional de partido político — e sempre em TESE!"
      },
      {
        "letter": "C",
        "explanation": "A resposta à consulta possui caráter meramente orientativo/consultivo (sem força vinculante nem coisa julgada, podendo o tribunal decidir diversamente no caso concreto, ressalvada eventual boa-fé/segurança jurídica)."
      },
      {
        "letter": "D",
        "explanation": "Apenas os Tribunais Eleitorais (TSE e TREs) possuem competência para responder a consultas em tese — Juiz Eleitoral de 1º grau NÃO responde a consultas!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 23, XII, e Art. 30, VIII, do Código Eleitoral",
        "textSnippet": "Consoante os Arts. 23, XII, e 30, VIII, do Código Eleitoral, compete ao TSE (sobre matéria federal/nacional) e aos TREs (sobre matéria regional/estadual) responder a consultas feitas em TESE por autoridade pública competente ou órgão partidário (nacional no TSE, regional no TRE). As respostas têm caráter consultivo não vinculante e jamais se aplicam a casos concretos nem por Juiz Eleitoral."
      }
    ],
    "professorTip": "Consulta na JE: só TSE (autoridade federal/partido nacional) e TRE (autoridade estadual/partido estadual); sempre EM TESE (nunca caso concreto); Juiz Eleitoral NÃO responde; resposta NÃO vincula!"
  },
  {
    "id": "mig_eleit_069",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Propaganda por Alto-Falantes, Carreatas e Material Gráfico na Véspera da Eleição",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Na véspera da eleição (sábado), às 21h, candidato realiza carreata com distribuição de santinhos pelas ruas e utiliza carro de som respeitando o limite de distância de 200 metros de hospitais e igrejas.",
    "options": [
      {
        "letter": "A",
        "text": "Toda e qualquer forma de propaganda eleitoral, incluindo distribuição de panfletos e carreatas, encerra-se 48 horas antes do domingo da eleição. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "B",
        "text": "A conduta é lícita dentro do horário permitido, pois até as 22 (vinte e duas) horas do dia que antecede a eleição serão permitidos a distribuição de material gráfico e a promoção de caminhada, carreata ou passeata, respeitada a distância mínima de 200 metros de sedes de poderes, tribunais, hospitais, escolas e templos em funcionamento."
      },
      {
        "letter": "C",
        "text": "É permitido o uso livre de trios elétricos de grande porte em qualquer carreata eleitoral de rua, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      },
      {
        "letter": "D",
        "text": "A instalação de alto-falantes ou amplificadores de som pode ocorrer a qualquer distância de escolas ou igrejas mesmo durante o horário de aula ou culto, com validação da propaganda antecipada independentemente de pedido explícito de voto. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      }
    ],
    "correctAnswer": "B",
    "justification": "Nos termos do Art. 39, §§ 3º, 9º e 10, da Lei nº 9.504/1997: alto-falantes e amplificadores funcionam das 8h às 22h (a mais de 200m de escolas/hospitais/igrejas em funcionamento); e até as 22h do sábado (véspera da eleição) são permitidos distribuição de material gráfico, caminhada, carreata e passeata (com carro de som/minitrio, vedado trio elétrico fora de comício).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O prazo de encerramento de 48h antes da eleição aplica-se à propaganda em rádio e TV (horário gratuito na sexta-feira); já distribuição de material gráfico, caminhada, carreata e carro de som vão até as 22h do SÁBADO véspera do pleito (Art. 39, § 9º)!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 39, § 10, proíbe a utilização de trios elétricos em campanhas eleitorais, exceto para sonorização de comícios! Em carreatas/caminhadas admite-se apenas carro de som (até 10 mil watts) ou minitrio (até 20 mil watts), nunca trio elétrico gigante."
      },
      {
        "letter": "D",
        "explanation": "O Art. 39, § 3º, exige distância não inferior a 200 metros das sedes dos Poderes, quartéis, hospitais, escolas, bibliotecas públicas, igrejas e teatros quando em funcionamento."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 39, §§ 3º, 5º e 9º, da Lei nº 9.504/1997",
        "textSnippet": "Nos termos do Art. 39, §§ 3º, 9º e 10, da Lei nº 9.504/1997: alto-falantes e amplificadores funcionam das 8h às 22h (a mais de 200m de escolas/hospitais/igrejas em funcionamento); e até as 22h do sábado (véspera da eleição) são permitidos distribuição de material gráfico, caminhada, carreata e passeata (com carro de som/minitrio, vedado trio elétrico fora de comício)."
      }
    ],
    "professorTip": "Véspera da eleição (sábado até 22h): PODE distribuir santinho, fazer carreata, caminhada e passeata (com carro de som/minitrio; trio elétrico só em comício!). Distância mínima = 200m!"
  },
  {
    "id": "mig_eleit_070",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Poder de Polícia na Propaganda Eleitoral e Súmula 18 do TSE",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Ao constatar pessoalmente cartaz irregular de candidato colado em muro público durante fiscalização de rotina, o Juiz Eleitoral exerce o poder de polícia determinando sua retirada imediata e, no mesmo ato administrativo de ofício, aplica multa pecuniária eleitoral de dez mil reais ao candidato.",
    "options": [
      {
        "letter": "A",
        "text": "A determinação de retirada do cartaz é legítima, mas a imposição de multa de ofício pelo juiz é ilegal:, conquanto investido de poder de polícia, não tem legitimidade o juiz eleitoral para, de ofício, instaurar procedimento com a finalidade de impor multa pela veiculação de propaganda eleitoral em desacordo com a Lei nº 9.504/1997."
      },
      {
        "letter": "B",
        "text": "O poder de polícia exercido pelo juiz eleitoral autoriza a aplicação direta de multa de ofício sem necessidade de representação pelo Ministério Público ou por partido político, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "O poder de polícia sobre a propaganda eleitoral abrange a censura prévia de entrevistas jornalísticas e opiniões políticas antes de sua divulgação, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "A simples retirada da propaganda irregular em bem público após notificação judicial em 48 horas isenta automaticamente o infrator da multa mesmo em propaganda em bem particular irregular, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      }
    ],
    "correctAnswer": "A",
    "justification": "Conforme o Art. 41 da Lei nº 9.504/1997 e a Súmula 18 do TSE, o poder de polícia do Juiz Eleitoral permite fazer cessar/retirar imediatamente propaganda irregular (sem censura prévia), mas NÃO autoriza instaurar processo nem impor multa de ofício — devendo comunicar o Ministério Público Eleitoral para eventual representação.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Súmula 18 do TSE proíbe expressamente ao juiz aplicar multa de ofício no exercício do poder de polícia; constatada a infração, o juiz faz cessar o ato ilegal e remete cópia ao MPE para que este (ou partido/candidato) proponha a representação por multa!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 41, § 2º, da Lei nº 9.504/1997 determina que o poder de polícia se restringe às providências necessárias para inibir práticas ilegais, VEDADA a censura prévia sobre o teor dos programas a serem exibidos na TV, rádio ou internet."
      },
      {
        "letter": "D",
        "explanation": "Atenção ao Art. 37, § 1º, da Lei 9.504/97: apenas na propaganda irregular em BENS PÚBLICOS a retirada em 48h após notificação afasta a multa! Na propaganda irregular em BENS PARTICULARES (ex.: outdoor ou >0,5 m²) ou na internet, a retirada posterior NÃO afasta a multa!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 41, §§ 1º e 2º, da Lei nº 9.504/1997 e Súmula 18 do TSE",
        "textSnippet": "Conforme o Art. 41 da Lei nº 9.504/1997 e a Súmula 18 do TSE, o poder de polícia do Juiz Eleitoral permite fazer cessar/retirar imediatamente propaganda irregular (sem censura prévia), mas NÃO autoriza instaurar processo nem impor multa de ofício — devendo comunicar o Ministério Público Eleitoral para eventual representação."
      }
    ],
    "jurisprudence": "Súmula 18 do TSE",
    "professorTip": "Súmula 18 TSE: Juiz Eleitoral no poder de polícia RETIRA propaganda irregular, mas NÃO PODE aplicar MULTA de ofício (avisa o MPE)! E retirada em 48h só livra da multa em bem PÚBLICO (em particular, paga multa mesmo tirando)!"
  },
  {
    "id": "mig_eleit_071",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Prestação de Contas Partidária Anual vs. Prestação de Contas de Campanha",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato não eleito disputa apenas o primeiro turno e pretende saber quando deve apresentar sua prestação de contas final de campanha e qual a consequência para o partido político que deixa de prestar suas contas partidárias anuais ordinárias.",
    "options": [
      {
        "letter": "A",
        "text": "O candidato deve encaminhar à Justiça Eleitoral a prestação de contas final até o 30º dia posterior à realização das eleições."
      },
      {
        "letter": "B",
        "text": "O candidato derrotado no primeiro turno fica dispensado de apresentar prestação de contas eleitorais caso tenha recebido menos de 1% dos votos."
      },
      {
        "letter": "C",
        "text": "A prestação de contas anual dos partidos políticos deve ser entregue à Receita Federal até 31 de março e não à Justiça Eleitoral, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "A desaprovação das contas partidárias anuais acarreta automaticamente o cancelamento definitivo do registro do partido político no TSE, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      }
    ],
    "correctAnswer": "A",
    "justification": "Distinção entre prestações de contas: 1) Contas de Campanha (Art. 29 Lei 9.504/97): entregues em até 30 dias após o 1º turno (ou 20 dias após o 2º turno); não prestar impede quitação eleitoral do candidato; 2) Contas Partidárias Anuais (Art. 32 Lei 9.096/95): entregues até 30 de junho do ano seguinte à Justiça Eleitoral; não prestar suspende repasses do Fundo Partidário.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Todo candidato (eleito ou não, ainda que tenha renunciado ou tido campanha zerada!) deve prestar contas até 30 dias após o 1º turno (ou 20 dias após o 2º turno se houver disputa em 2º turno para aquele cargo)."
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 32 da Lei nº 9.096/1995, o partido está obrigado a enviar à Justiça Eleitoral (via SPCA), anualmente até o dia 30 de JUNHO, o balanço contábil do exercício findo."
      },
      {
        "letter": "D",
        "explanation": "A sanção pela desaprovação parcial das contas anuais partidárias (Art. 37 da Lei nº 9.096/95) consiste na devolução da importância apontada como irregular acrescida de multa de até 20%, descontada dos futuros repasses do Fundo Partidário (sem cassação do registro do partido)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 32 da Lei nº 9.096/1995 e Arts. 28 e 29 da Lei nº 9.504/1997",
        "textSnippet": "Distinção entre prestações de contas: 1) Contas de Campanha (Art. 29 Lei 9.504/97): entregues em até 30 dias após o 1º turno (ou 20 dias após o 2º turno); não prestar impede quitação eleitoral do candidato; 2) Contas Partidárias Anuais (Art. 32 Lei 9.096/95): entregues até 30 de junho do ano seguinte à Justiça Eleitoral; não prestar suspende repasses do Fundo Partidário."
      }
    ],
    "professorTip": "Prazos das Contas: Campanha = até 30 dias pós-1º turno (ou 20 dias pós-2º turno). Anual do partido = até 30 de JUNHO do ano seguinte!"
  },
  {
    "id": "mig_eleit_072",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Crimes Eleitorais Conexos com Crimes Comuns (STF Inq 4.435) e Garantia Eleitoral do Art. 236 CE",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Durante investigação criminal descobre-se prática conjunta de crime eleitoral de falsidade ideológica eleitoral (\"caixa dois\" - Art. 350 CE) em conexão probatória com crime comum de lavagem de dinheiro; em outra situação, eleitor com prisão preventiva decretada por homicídio doloso é preso 4 dias antes do pleito.",
    "options": [
      {
        "letter": "A",
        "text": "Nos termos da jurisprudência consolidada do STF (Inq 4.435), compete à justiça eleitoral processar e julgar os crimes comuns conexos com crimes eleitorais."
      },
      {
        "letter": "B",
        "text": "Havendo conexão entre crime eleitoral e crime comum de competência federal ou estadual, deve ocorrer sempre o desmembramento obrigatório para que a Justiça Comum julgue o crime comum."
      },
      {
        "letter": "C",
        "text": "A imunidade prisional de 5 dias antes até 48 horas depois da eleição impede inclusive a prisão em flagrante delito de quem estiver cometendo homicídio no sábado pré-eleitoral."
      },
      {
        "letter": "D",
        "text": "O prazo de proteção contra prisão para os candidatos eleitos dura apenas 5 dias antes da eleição, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "A",
    "justification": "Consoante o STF (Inq 4.435), a Justiça Eleitoral é competente para julgar os crimes comuns conexos a crimes eleitorais. E pelo Art. 236 do Código Eleitoral, vigora a garantia de livre exercício do voto: eleitores não podem ser presos desde 5 dias antes até 48 horas depois da eleição (candidatos desde 15 dias antes), salvo flagrante delito, sentença criminal condenatória por crime inafiançável ou desrespeito a salvo-conduto.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "No julgamento do Inq 4.435 (AgR-quarto), o Plenário do STF reafirmou que o Art. 35, II, do Código Eleitoral e Art. 78, IV, do CPP atribuem à Justiça Eleitoral a vis attractiva para julgar crimes comuns conexos a crimes eleitorais!"
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 236, caput, do Código Eleitoral, nenhuma autoridade poderá, desde 5 dias antes e até 48 horas depois do encerramento da eleição, prender ou deter qualquer eleitor, SALVO em flagrante delito ou em virtude de sentença criminal condenatória por crime inafiançável, ou, ainda, por desrespeito a salvo-conduto."
      },
      {
        "letter": "D",
        "explanation": "Para CANDIDATOS (Art. 236, § 1º, CE) e membros das mesas receptoras/fiscais durante o exercício de funções, a proteção contra prisão (salvo flagrante) inicia-se 15 (QUINZE) DIAS antes da eleição!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 236 e Arts. 355 a 364 do Código Eleitoral e STF Inq 4.435",
        "textSnippet": "Consoante o STF (Inq 4.435), a Justiça Eleitoral é competente para julgar os crimes comuns conexos a crimes eleitorais. E pelo Art. 236 do Código Eleitoral, vigora a garantia de livre exercício do voto: eleitores não podem ser presos desde 5 dias antes até 48 horas depois da eleição (candidatos desde 15 dias antes), salvo flagrante delito, sentença criminal condenatória por crime inafiançável ou desrespeito a salvo-conduto."
      }
    ],
    "jurisprudence": "STF Inq 4.435",
    "professorTip": "Conexão crime eleitoral + crime comum = JUSTIÇA ELEITORAL julga tudo (STF Inq 4.435)! Prisão pré-eleitoral (Art. 236 CE): Eleitor = 5 dias antes a 48h depois; Candidato = 15 dias antes! (Salvo flagrante, sentença por inafiançável ou salvo-conduto)."
  },
  {
    "id": "mig_eleit_073",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Criação de Partido Político - Apoiamento Mínimo e Prazo no TSE",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Grupo fundador constitui pessoa jurídica de partido político em cartório civil do DF e inicia a coleta de assinaturas de apoiamento de eleitores em todos os Estados para registrar o estatuto no TSE.",
    "options": [
      {
        "letter": "A",
        "text": "O apoiamento mínimo exige assinaturas de eleitores não filiados a partido político correspondentes a pelo menos 0,5% dos votos dados na última eleição geral para a Câmara dos Deputados, distribuídos por 1/3 ou mais dos Estados com mínimo de 0,1% do eleitorado que haja votado em cada um deles."
      },
      {
        "letter": "B",
        "text": "Qualquer eleitor já filiado a outro partido político pode assinar validamente a lista de apoiamento para criação de novo partido, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "C",
        "text": "Para disputar as eleições do mesmo ano, basta que o novo partido protocole seu pedido de registro de estatuto no TSE até 15 de agosto, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "O apoiamento mínimo para criação de partido deve alcançar pelo menos 5% do eleitorado brasileiro distribuído em todos os 26 Estados, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      }
    ],
    "correctAnswer": "A",
    "justification": "Segundo os Arts. 7º e 8º da Lei nº 9.096/1995 e Art. 4º da Lei nº 9.504/1997, o partido adquire personalidade jurídica no cartório do DF e coleta, em até 2 anos, apoiamento de 0,5% dos votos da última eleição para Câmara (eleitores não filiados), em pelo menos 1/3 dos Estados (mínimo 0,1% em cada), devendo obter o registro no TSE até 6 meses antes do pleito para concorrer.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 7º, § 1º, da Lei nº 9.096/1995 exige expressamente apoiamento de eleitores NÃO FILIADOS a partido político!"
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 4º da Lei nº 9.504/1997, poderá participar das eleições o partido que, até SEIS MESES antes do pleito, tenha registrado seu estatuto no TSE e tenha órgão de direção constituído na circunscrição!"
      },
      {
        "letter": "D",
        "explanation": "Exige-se 0,5% dos votos válidos da Câmara distribuídos por pelo menos 1/3 dos Estados (9 Estados) com mínimo de 0,1% em cada."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 7º da Lei nº 9.096/1995",
        "textSnippet": "Segundo os Arts. 7º e 8º da Lei nº 9.096/1995 e Art. 4º da Lei nº 9.504/1997, o partido adquire personalidade jurídica no cartório do DF e coleta, em até 2 anos, apoiamento de 0,5% dos votos da última eleição para Câmara (eleitores não filiados), em pelo menos 1/3 dos Estados (mínimo 0,1% em cada), devendo obter o registro no TSE até 6 meses antes do pleito para concorrer."
      }
    ],
    "professorTip": "Novo Partido: registro civil DF -> 2 anos para coletar 0,5% dos votos (eleitores NÃO filiados!) em 1/3 dos Estados (0,1% cada) -> registro no TSE até 6 meses antes da eleição!"
  },
  {
    "id": "mig_eleit_074",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Critérios de Distribuição do Fundo Partidário vs. FEFC Entre os Partidos",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na distribuição anual do Fundo Partidário e na distribuição eleitoral do Fundo Especial de Financiamento de Campanha (FEFC) entre as agremiações com direito de acesso, indaga-se qual o peso da parcela igualitária em comparação com a proporcional.",
    "options": [
      {
        "letter": "A",
        "text": "No Fundo Partidário, 5% são divididos igualmente entre todos os partidos com estatuto no TSE que preencham a cláusula de desempenho e 95% na proporção dos votos obtidos na última eleição para a Câmara dos Deputados."
      },
      {
        "letter": "B",
        "text": "Tanto o Fundo Partidário quanto o fefc dividem 50% de forma igualitária entre todas as legendas e 50% conforme o número de vereadores eleitos, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "O Senado Federal não possui nenhum peso percentual na fórmula de distribuição do Fundo Especial de Financiamento de Campanha (fefc), em estrita observância à soberania popular, à legitimidade do pleito e à isonomia eleitoral."
      },
      {
        "letter": "D",
        "text": "Todos os partidos com registro no TSE, mesmo os que não atingiram a cláusula de barreira da EC nº 97/2017, recebem a cota de Fundo Partidário. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      }
    ],
    "correctAnswer": "A",
    "justification": "Enquanto o Fundo Partidário destina-se à manutenção rotineira dos partidos (5% igualitário / 95% proporcional aos votos da Câmara para partidos que superam a cláusula de desempenho), o FEFC destina-se exclusivamente às campanhas eleitorais (2% igualitário, 35% proporcional aos votos da Câmara, 48% às bancadas da Câmara e 15% às bancadas do Senado).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Ambos os fundos concentram a quase totalidade na proporcionalidade parlamentar federal (95% no Fundo Partidário; 98% no FEFC)."
      },
      {
        "letter": "C",
        "explanation": "Diferente do Fundo Partidário (que considera apenas votos para a Câmara), o FEFC reserva 15% proporcionais ao número de representantes no Senado Federal (Art. 16-D, IV)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 17, § 3º, da CF (EC 97/2017), somente os partidos ou federações que atingirem a cláusula de desempenho constitucional têm direito a recursos do Fundo Partidário."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 41-A da Lei nº 9.096/1995 e Art. 16-D da Lei nº 9.504/1997",
        "textSnippet": "Enquanto o Fundo Partidário destina-se à manutenção rotineira dos partidos (5% igualitário / 95% proporcional aos votos da Câmara para partidos que superam a cláusula de desempenho), o FEFC destina-se exclusivamente às campanhas eleitorais (2% igualitário, 35% proporcional aos votos da Câmara, 48% às bancadas da Câmara e 15% às bancadas do Senado)."
      }
    ],
    "professorTip": "Fundo Partidário = 5% igual + 95% votos Câmara (exige cláusula de desempenho). FEFC = 2% igual + 35% votos Câmara + 48% bancada Câmara + 15% bancada Senado!"
  },
  {
    "id": "mig_eleit_075",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Programa de Promoção e Difusão da Participação Política das Mulheres (5% do Fundo)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Partido político aplica apenas 2% dos recursos recebidos do Fundo Partidário na criação e manutenção de programas de promoção e difusão da participação política das mulheres em determinado exercício financeiro.",
    "options": [
      {
        "letter": "A",
        "text": "O partido descumpriu a obrigação legal de aplicar no mínimo 5% (cinco por cento) do total dos recursos do Fundo Partidário em programas de promoção e difusão da participação política das mulheres, sujeitando-se ao acréscimo de 12,5% no ano seguinte sobre a diferença não aplicada."
      },
      {
        "letter": "B",
        "text": "O percentual mínimo do Fundo Partidário destinado a programas femininos pode ser redirecionado livremente para pagamento de advogados eleitorais caso não haja interesse interno, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      },
      {
        "letter": "C",
        "text": "O mínimo legal para programas de promoção da participação política das mulheres no Fundo Partidário é de 30% anuais, igual ao percentual eleitoral de candidaturas, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "O descumprimento da cota anual de 5% para programas femininos gera cassação imediata do registro do partido político, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      }
    ],
    "correctAnswer": "A",
    "justification": "Nos termos do Art. 44, V e § 5º, da Lei nº 9.096/1995, do total do Fundo Partidário recebido anualmente, o partido deve aplicar no mínimo 5% na criação e manutenção de programas de promoção e difusão da participação política das mulheres, sob pena de acréscimo de 12,5% no exercício seguinte para a mesma finalidade.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 44, V e § 5º-A, da Lei nº 9.096/1995 proíbe o desvio dessa rubrica e impõe aplicação compensatória acrescida de 12,5% de acréscimo punitivo em caso de descumprimento."
      },
      {
        "letter": "C",
        "explanation": "Não confundir os dois percentuais femininos: 30% é o mínimo de CANDIDATURAS proporcionais e de recursos do FEFC/Fundo/TV em CAMPANHA; 5% é o mínimo ANUAL do Fundo Partidário para programas permanentes de promoção feminina (além de 20% na Fundação/Instituto partidário - Art. 44, IV)!"
      },
      {
        "letter": "D",
        "explanation": "A sanção prevista no Art. 44, § 5º, é financeira/compensatória na prestação de contas anual (reaplicação do saldo + acréscimo de 12,5%), sem extinção do partido."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 44, V e § 5º, da Lei nº 9.096/1995",
        "textSnippet": "Nos termos do Art. 44, V e § 5º, da Lei nº 9.096/1995, do total do Fundo Partidário recebido anualmente, o partido deve aplicar no mínimo 5% na criação e manutenção de programas de promoção e difusão da participação política das mulheres, sob pena de acréscimo de 12,5% no exercício seguinte para a mesma finalidade."
      }
    ],
    "professorTip": "Não confunda as cotas femininas! 30% = candidaturas proporcionais + recursos/tempo de CAMPANHA; 5% = mínimo ANUAL do Fundo Partidário em programas de participação política feminina!"
  },
  {
    "id": "mig_eleit_076",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Duplicidade / Multiplicidade de Filiações Partidárias (Regra da Mais Recente)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Eleitora já filiada regularmente ao Partido X há quatro anos resolve filiar-se ao Partido Y sete meses antes da eleição, mas esquece de comunicar por escrito o seu desligamento ao Partido X e ao Juiz Eleitoral.",
    "options": [
      {
        "letter": "A",
        "text": "Havendo coexistência de filiações partidárias, prevalecerá a mais recente, devendo a Justiça Eleitoral determinar o cancelamento automático das demais filiações anteriores."
      },
      {
        "letter": "B",
        "text": "A coexistência de duas filiações partidárias sem prévio cancelamento torna nulas ambas as filiações, deixando a eleitora sem partido e inelegível, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Na duplicidade de filiações, prevalece sempre a filiação mais antiga até que o partido anterior conceda carta de liberação formal, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "As relações internas de filiação partidária são regidas exclusivamente pela Justiça Comum estadual sem qualquer controle pela Justiça Eleitoral, com autorização para emprego dos recursos partidários e divulgação regular de campanha oficial."
      }
    ],
    "correctAnswer": "A",
    "justification": "Consoante o Art. 22, parágrafo único, da Lei nº 9.096/1995 (redação da Lei nº 12.891/2013), havendo coexistência de filiações partidárias, prevalecerá a mais recente, devendo as demais ser canceladas automaticamente durante o processamento pela Justiça Eleitoral.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Essa era a regra antiga da Lei nº 9.096/95 antes de 2013! Com a Lei nº 12.891/2013, alterou-se o parágrafo único do Art. 22: havendo coexistência, PREVALECE A MAIS RECENTE e cancelam-se as anteriores!"
      },
      {
        "letter": "C",
        "explanation": "A prevalência é da filiação MAIS RECENTE, assegurando a liberdade de associação partidária."
      },
      {
        "letter": "D",
        "explanation": "A Justiça Eleitoral gerencia o Sistema de Filiação Partidária (FILIA), processando o cancelamento das filiações anteriores e apreciando impugnações sobre prazos eleitorais."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 22, parágrafo único, da Lei nº 9.096/1995 (Lei nº 12.891/2013)",
        "textSnippet": "Consoante o Art. 22, parágrafo único, da Lei nº 9.096/1995 (redação da Lei nº 12.891/2013), havendo coexistência de filiações partidárias, prevalecerá a mais recente, devendo as demais ser canceladas automaticamente durante o processamento pela Justiça Eleitoral."
      }
    ],
    "professorTip": "PEGADINHA CLÁSSICA (Art. 22, parágrafo único, Lei 9.096/95): dupla filiação partidária NÃO anula mais as duas — PREVALECE A MAIS RECENTE!"
  },
  {
    "id": "mig_eleit_077",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Eleitoral",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Desfiliação Partidária Voluntária e Expulsão Disciplinar de Filiado",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Filiado decide desligar-se definitivamente do partido ao qual pertence em razão de divergência programática, mas a direção municipal recusa-se a aceitar sua carta de desfiliação.",
    "options": [
      {
        "letter": "A",
        "text": "Para desligar-se do partido, o filiado faz comunicação escrita ao órgão de direção municipal e ao Juiz Eleitoral da Zona em que for inscrito."
      },
      {
        "letter": "B",
        "text": "A desfiliação voluntária de filiado comum depende da concordância formal do presidente do diretório nacional do partido, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "A competência para processar e julgar ação de filiado questionando expulsão disciplinar interna ou validade de convenção partidária interna sem reflexo direto em eleição pertence ao Juiz do Trabalho."
      },
      {
        "letter": "D",
        "text": "A filiação partidária efetuada por quem está com os direitos políticos suspensos por condenação criminal definitiva produz plenos efeitos para registro de candidatura."
      }
    ],
    "correctAnswer": "A",
    "justification": "Pelo Art. 21 da Lei nº 9.096/1995, basta ao filiado entregar comunicação escrita de desligamento ao diretório municipal e ao Juiz Eleitoral da zona: em 2 dias extingue-se o vínculo. E pelo Art. 16, apenas o eleitor no pleno gozo dos direitos políticos pode filiar-se a partido.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A liberdade de desfiliação decorre da liberdade constitucional de associação (Art. 5º, XX, CF); após comunicação ao diretório e ao Juiz Eleitoral, em 2 dias extingue-se o vínculo (Art. 21, parágrafo único)!"
      },
      {
        "letter": "C",
        "explanation": "Questões meramente internas corporis sem reflexo no processo eleitoral competem à Justiça Comum (Estadual); porém, validade de convenções partidárias com reflexo na escolha de candidatos/DRAP e questões de filiação ligadas ao pleito pertencem à JUSTIÇA ELEITORAL (Súmula/Jurisprudência TSE/STF)."
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 16 da Lei nº 9.096/1995, só pode filiar-se a partido o eleitor que estiver no pleno gozo de seus direitos políticos (sendo nula a filiação durante suspensão)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 21, 22 e 23 da Lei nº 9.096/1995",
        "textSnippet": "Pelo Art. 21 da Lei nº 9.096/1995, basta ao filiado entregar comunicação escrita de desligamento ao diretório municipal e ao Juiz Eleitoral da zona: em 2 dias extingue-se o vínculo. E pelo Art. 16, apenas o eleitor no pleno gozo dos direitos políticos pode filiar-se a partido."
      }
    ],
    "professorTip": "Art. 21 Lei 9.096/95: desfiliação = aviso escrito ao diretório municipal + Juiz Eleitoral -> em 2 DIAS acaba o vínculo! Só pode se filiar quem está no pleno gozo dos direitos políticos!"
  },
  {
    "id": "mig_eleit_078",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Propaganda Partidária Gratuita em Rádio e TV (Lei nº 14.291/2022)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Partido político que cumpriu a cláusula de desempenho constitucional solicita ao TSE autorização para veicular inserções estaduais e nacionais de propaganda partidária gratuita em rádio e televisão no primeiro semestre de um ano eleitoral e também em ano não eleitoral.",
    "options": [
      {
        "letter": "A",
        "text": "A propaganda partidária gratuita é permitida em anos não eleitorais (1º e 2º semestres) e somente no primeiro semestre dos anos eleitorais, devendo reservar no mínimo 30% do tempo para promover e difundir a participação política feminina."
      },
      {
        "letter": "B",
        "text": "A propaganda partidária gratuita pode ser transmitida durante todo o segundo semestre do ano eleitoral em conjunto com o horário eleitoral gratuito, com validação da propaganda antecipada independentemente de pedido explícito de voto."
      },
      {
        "letter": "C",
        "text": "Na propaganda partidária gratuita é lícito ao dirigente partidário pedir expressamente votos para o futuro candidato a prefeito da legenda, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      },
      {
        "letter": "D",
        "text": "Na propaganda partidária gratuita não há nenhuma cota mínima obrigatória de tempo destinada à participação política das mulheres, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "A",
    "justification": "Diferente da propaganda ELEITORAL (campanha de agosto a outubro/novembro), a propaganda PARTIDÁRIA gratuita (Arts. 50-A e ss. da Lei nº 9.096/95, Lei nº 14.291/2022) ocorre apenas em inserções de 30s (sem blocos longos), em anos não eleitorais e apenas no 1º semestre de anos eleitorais, com reserva mínima de 30% para participação política feminina.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 50-B, § 2º, da Lei nº 9.096/1995, em anos eleitorais as inserções de propaganda partidária só podem ser veiculadas no PRIMEIRO semestre (proibidas no 2º semestre para não confundir com a campanha eleitoral)!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 50-A, § 1º, proíbe expressamente pedido de voto ou propaganda eleitoral antecipada nas inserções partidárias (que servem apenas para difundir programas partidários, filiações e participação feminina/jovem/negra)."
      },
      {
        "letter": "D",
        "explanation": "O Art. 50-B, § 4º, impõe destinação obrigatória de no mínimo 30% (trinta por cento) do tempo de propaganda partidária gratuita para promover a participação política feminina!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 50-A a 50-E da Lei nº 9.096/1995 (incluídos pela Lei nº 14.291/2022)",
        "textSnippet": "Diferente da propaganda ELEITORAL (campanha de agosto a outubro/novembro), a propaganda PARTIDÁRIA gratuita (Arts. 50-A e ss. da Lei nº 9.096/95, Lei nº 14.291/2022) ocorre apenas em inserções de 30s (sem blocos longos), em anos não eleitorais e apenas no 1º semestre de anos eleitorais, com reserva mínima de 30% para participação política feminina."
      }
    ],
    "professorTip": "Propaganda PARTIDÁRIA (Lei 14.291/22): só inserções 30s (19h30-22h30); em ano eleitoral SÓ NO 1º SEMESTRE; mínimo 30% para participação feminina; PROIBIDO pedir voto!"
  },
  {
    "id": "mig_eleit_079",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Crime de Uso Indevido de Símbolos ou Frases Governamentais na Campanha (Art. 40)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Candidato à reeleição imprime santinhos e publica peças gráficas usando o brasão oficial da Prefeitura, o slogan administrativo oficial da gestão municipal e expressões idênticas às de órgãos governamentais.",
    "options": [
      {
        "letter": "A",
        "text": "A conduta configura o crime eleitoral: o uso, na propaganda eleitoral, de símbolos, frases ou imagens, associadas ou semelhantes às empregadas por órgão de governo, empresa pública ou sociedade de economia mista constitui crime punível com detenção de 6 meses a 1 ano e multa."
      },
      {
        "letter": "B",
        "text": "Candidato que exerce o cargo de Prefeito pode utilizar livremente o brasão oficial do Município em seus santinhos para demonstrar experiência administrativa, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "O uso de símbolos ou frases associadas a órgãos governamentais na propaganda eleitoral constitui mera irregularidade administrativa sujeita apenas à retirada do material, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "D",
        "text": "A proibição restringe-se aos símbolos da União Federal, não protegendo logotipos ou slogans de empresas públicas e prefeituras municipais, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      }
    ],
    "correctAnswer": "A",
    "justification": "Nos termos do Art. 40 da Lei nº 9.504/1997, usar na propaganda eleitoral símbolos, frases ou imagens associadas ou semelhantes às empregadas por órgão de governo, empresa pública ou sociedade de economia mista constitui crime eleitoral punido com detenção de 6 meses a 1 ano (com alternativa de prestação de serviços) e multa.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 40 proíbe expressamente a qualquer candidato (inclusive o ocupante do cargo à reeleição!) o uso de símbolos, frases ou imagens associadas a órgão governamental ou estatal."
      },
      {
        "letter": "C",
        "explanation": "O Art. 40 tipifica a conduta expressamente como CRIME eleitoral (detenção de 6 meses a 1 ano e multa), além de poder caracterizar abuso de poder político em AIJE."
      },
      {
        "letter": "D",
        "explanation": "O texto do Art. 40 abrange expressamente órgão de governo (federal, estadual ou municipal), empresa pública ou sociedade de economia mista."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 40 da Lei nº 9.504/1997",
        "textSnippet": "Nos termos do Art. 40 da Lei nº 9.504/1997, usar na propaganda eleitoral símbolos, frases ou imagens associadas ou semelhantes às empregadas por órgão de governo, empresa pública ou sociedade de economia mista constitui crime eleitoral punido com detenção de 6 meses a 1 ano (com alternativa de prestação de serviços) e multa."
      }
    ],
    "professorTip": "Art. 40 Lei 9.504/97: usar símbolo, imagem ou slogan semelhante ao do governo/estatal na campanha = CRIME eleitoral (detenção 6m a 1a + multa)!"
  },
  {
    "id": "mig_eleit_080",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Propaganda em Bens Públicos vs. Bens Particulares - Bancas, Viadutos e Condomínios",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato instala faixas eleitorais em passarela de pedestres e bancas de jornal (que dependem de permissão/autorização do Poder Público), enquanto apoiador coloca adesivo plástico de 0,4 m² na janela de sua casa particular.",
    "options": [
      {
        "letter": "A",
        "text": "Como as lojas comerciais, igrejas e bancas de jornal pertencem a particulares, é lícito colar cartazes eleitorais em suas fachadas se o proprietário concordar. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      },
      {
        "letter": "B",
        "text": "É lícito colar vários adesivos de 0,4 m² lado a lado na mesma fachada particular formando um grande painel de 4 m², em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "Nas árvores e jardins localizados em áreas públicas é permitida a colocação de placas pequenas de até 0,5 m² desde que não danifiquem os galhos, com cassação do registro ou diploma e imposição de multa após regular instrução processual."
      },
      {
        "letter": "D",
        "text": "A propaganda na passarela e na banca de jornal é ilegal, pois nos bens cujo uso dependa de cessão ou permissão do Poder Público, ou que a ele pertençam, e nos bens de uso comum, é vedada a veiculação de propaganda."
      }
    ],
    "correctAnswer": "D",
    "justification": "Pelo Art. 37 da Lei nº 9.504/1997, é proibida propaganda eleitoral em bens públicos, bens de concessão/permissão (ex.: bancas de jornal, pontos de ônibus) e bens de uso comum (lojas, templos, clubes, cinemas), bem como em árvores e jardins públicos. Em bens particulares admite-se apenas adesivo ou papel até 0,5 m², espontâneo e gratuito, sem justaposição.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 37, § 4º, da Lei nº 9.504/1997, bens de uso comum para fins eleitorais são os definidos no Código Civil E também aqueles a que a população em geral tem acesso (cinemas, clubes, lojas, centros comerciais, templos, estádios, ainda que privados), além de bancas de jornal (permissão pública)!"
      },
      {
        "letter": "B",
        "explanation": "O TSE proíbe expressamente a justaposição de adesivos em bens particulares cujo efeito visual único ultrapasse o limite total de 0,5 m² (efeito outdoor)!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 37, § 5º, proíbe expressamente a colocação de propaganda eleitoral de qualquer natureza nas árvores e nos jardins localizados em áreas públicas, bem como em muros, cercas e tapumes divisórios."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 37, §§ 1º a 8º, da Lei nº 9.504/1997",
        "textSnippet": "Pelo Art. 37 da Lei nº 9.504/1997, é proibida propaganda eleitoral em bens públicos, bens de concessão/permissão (ex.: bancas de jornal, pontos de ônibus) e bens de uso comum (lojas, templos, clubes, cinemas), bem como em árvores e jardins públicos. Em bens particulares admite-se apenas adesivo ou papel até 0,5 m², espontâneo e gratuito, sem justaposição."
      }
    ],
    "professorTip": "Art. 37, § 4º Lei 9.504/97: \"bem de uso comum\" inclui lojas, templos, clubes, cinemas, estádios (mesmo privados!) + bancas/árvores/jardins públicos = PROIBIDA propaganda!"
  },
  {
    "id": "mig_eleit_081",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Derrame de Santinhos na Madrugada da Eleição - Propaganda Irregular",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Na madrugada do domingo de eleição, equipe ligada à campanha de candidato a Vereador espalha milhares de \"santinhos\" em frente às entradas dos principais locais de votação da cidade.",
    "options": [
      {
        "letter": "A",
        "text": "Espalhar santinhos na calçada em frente às seções eleitorais às 3h da manhã é lícito porque foi realizado antes da abertura das urnas às 8h. Tal diretriz produz efeitos vinculantes em todo o território sujeito à circunscrição do pleito."
      },
      {
        "letter": "B",
        "text": "A multa eleitoral pelo derrame de santinhos independe de qualquer vínculo ou prévio conhecimento do candidato, aplicando-se por responsabilidade objetiva absoluta, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "O recolhimento voluntário dos santinhos pelas equipes de limpeza municipal após as 10h da manhã do domingo afasta automaticamente a infração eleitoral, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "O chamado \"derrame de santinhos\" nas vias públicas próximas aos locais de votação na véspera ou madrugada do pleito configura propaganda eleitoral irregular, ensejando responsabilização pela multa eleitoral do candidato beneficiado quando comprovado seu prévio conhecimento e apuração criminal eleitoral."
      }
    ],
    "correctAnswer": "D",
    "justification": "O derrame de santinhos nas imediações dos locais de votação durante a véspera ou madrugada da eleição configura propaganda irregular expressamente vedada pela Resolução TSE nº 23.610/2019 e pelo Art. 37/Art. 39, § 5º, III, da Lei nº 9.504/1997, gerando multa ao candidato (presente o prévio conhecimento pelas circunstâncias - Art. 40-B) e eventual crime do Art. 39, § 5º, III.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Resolução TSE nº 23.610/2019 (Art. 19, § 7º) tipifica expressamente o derramamento de material impresso no local de votação ou nas vias próximas, ainda que realizado na véspera, como propaganda irregular sujeita a multa e apuração penal!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 40-B da Lei nº 9.504/1997, a responsabilidade do candidato pela propaganda irregular exige demonstração do prévio conhecimento, que pode ser extraído das circunstâncias e peculiaridades do caso (como grande quantidade espalhada exatamente onde o candidato tem reduto ou material próprio)."
      },
      {
        "letter": "C",
        "explanation": "O ilícito eleitoral consuma-se com o derrame irregular próximo aos locais de votação no dia/madrugada do pleito, não sendo elidido pela limpeza posterior."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 39, § 5º, III, da Lei nº 9.504/1997 e Resolução TSE nº 23.610/2019",
        "textSnippet": "O derrame de santinhos nas imediações dos locais de votação durante a véspera ou madrugada da eleição configura propaganda irregular expressamente vedada pela Resolução TSE nº 23.610/2019 e pelo Art. 37/Art. 39, § 5º, III, da Lei nº 9.504/1997, gerando multa ao candidato (presente o prévio conhecimento pelas circunstâncias - Art. 40-B) e eventual crime do Art. 39, § 5º, III."
      }
    ],
    "professorTip": "Derrame de santinhos na véspera/madrugada perto da seção = PROPAGANDA IRREGULAR (Res. TSE 23.610)! Gera multa (se prévio conhecimento pelas circunstâncias) + possível crime de propaganda no dia!"
  },
  {
    "id": "mig_eleit_082",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Proibição de Brindes na Campanha (Camisetas, Bonés, Chaveiros) vs. Uniformes de Cabos",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Comitê eleitoral distribui gratuitamente aos eleitores bonés, chaveiros, canetas e cestas de alimentos com o número do candidato; além disso, fornece camisetas padronizadas com a logomarca da campanha para serem usadas pelos eleitores em passeata.",
    "options": [
      {
        "letter": "A",
        "text": "A distribuição gratuita de camisetas e bonés com o número do candidato aos eleitores é livre durante a campanha, sendo proibida apenas a distribuição de cestas básicas, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "Os próprios eleitores estão proibidos de comprar por conta própria uma camiseta lisa ou confeccionar broche para manifestar preferência individual no dia da eleição, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "A distribuição de santinhos e folhetos impressos simples de campanha também foi proibida junto com os brindes, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      },
      {
        "letter": "D",
        "text": "É terminantemente proibida na campanha eleitoral a confecção, utilização ou distribuição por comitê, candidato, ou com a sua autorização, de camisetas, chaveiros, bonés, canetas, brindes, cestas básicas ou quaisquer outros bens ou materiais que possam proporcionar vantagem ao eleitor."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 39, § 6º, da Lei nº 9.504/1997, é vedada na campanha eleitoral a confecção, utilização, distribuição por comitê, candidato, ou com a sua autorização, de camisetas, chaveiros, bonés, canetas, brindes, cestas básicas ou quaisquer outros bens ou materiais que possam proporcionar vantagem ao eleitor.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 39, § 6º, da Lei nº 9.504/1997 proíbe expressamente a confecção, utilização ou distribuição de CAMISETAS, chaveiros, bonés, canetas, brindes ou cestas básicas!"
      },
      {
        "letter": "B",
        "explanation": "Enquanto o CANDIDATO/COMITÊ é proibido de distribuir camisetas e brindes (Art. 39, § 6º), o ELEITOR pode usar individualmente camiseta, bandeira, broche, dístico e adesivo no dia da eleição (Art. 39-A)! Ademais, cabos eleitorais contratados podem usar vestuário uniforme padronizado sem pedido de voto se apenas identificar o trabalho, observado o limite do TSE (sem caracterizar brinde ao eleitor)."
      },
      {
        "letter": "C",
        "explanation": "Material gráfico impresso tradicional (santinhos, volantes, folhetos) é plenamente permitido até as 22h da véspera, desde que contenha CNPJ/CPF do responsável, tiragem e gráfico (Art. 38, § 1º)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 39, § 6º, da Lei nº 9.504/1997",
        "textSnippet": "Nos termos do Art. 39, § 6º, da Lei nº 9.504/1997, é vedada na campanha eleitoral a confecção, utilização, distribuição por comitê, candidato, ou com a sua autorização, de camisetas, chaveiros, bonés, canetas, brindes, cestas básicas ou quaisquer outros bens ou materiais que possam proporcionar vantagem ao eleitor."
      }
    ],
    "professorTip": "Art. 39, § 6º Lei 9.504/97: candidato/comitê NÃO pode distribuir camiseta, boné, caneta, chaveiro, brinde ou cesta básica! (Eleitor usar própria camiseta no dia = Art. 39-A PODE!)."
  },
  {
    "id": "mig_eleit_083",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Comitês de Campanha - Limites de Dimensão de Placas e Identificação",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidata a Deputada Federal instala um Comitê Central de Campanha com placa de identificação medindo 3,5 metros quadrados na fachada e também abre três subcomitês regionais colocando em cada um placas medindo 2 metros quadrados.",
    "options": [
      {
        "letter": "A",
        "text": "Todos os comitês de campanha, inclusive os regionais e distritais, podem ostentar placas de até 4 metros quadrados livremente. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral."
      },
      {
        "letter": "B",
        "text": "Na sede do comitê central de campanha, é permitido instalar painel eletrônico luminoso de 12 metros quadrados exibindo vídeos eleitorais para a rua."
      },
      {
        "letter": "C",
        "text": "O comitê central de campanha não precisa ser informado à Justiça Eleitoral no registro ou prestação de contas, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "D",
        "text": "A placa do Comitê Central de Campanha (3,5 m²) é lícita porque o limite no comitê central é de até 4 (quatro) metros quadrados."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos da Lei nº 9.504/1997 e da Resolução TSE nº 23.610/2019 (Art. 14), é lícita a inscrição no Comitê Central de campanha do nome e número do candidato em dimensões até 4 m² (vedado efeito outdoor); nos demais comitês de campanha, a dimensão máxima é de 0,5 m².",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O TSE (Resolução nº 23.610/2019, Art. 14) reserva o limite de até 4 m² exclusivamente para o Comitê CENTRAL de campanha; os demais comitês sujeitam-se à regra geral de até 0,5 m²."
      },
      {
        "letter": "B",
        "explanation": "Qualquer engenho publicitário luminoso ou acima de 4 m² no comitê central (ou >0,5 m² nos demais) equipara-se a outdoor proibido (Art. 39, § 8º, Lei 9.504/97)."
      },
      {
        "letter": "C",
        "explanation": "Os endereços dos comitês de campanha devem ser informados à Justiça Eleitoral (o comitê central deve ser indicado para usufruir do limite de 4 m²)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 37, § 2º, da Lei nº 9.504/1997 e Resolução TSE nº 23.610/2019",
        "textSnippet": "Nos termos da Lei nº 9.504/1997 e da Resolução TSE nº 23.610/2019 (Art. 14), é lícita a inscrição no Comitê Central de campanha do nome e número do candidato em dimensões até 4 m² (vedado efeito outdoor); nos demais comitês de campanha, a dimensão máxima é de 0,5 m²."
      }
    ],
    "professorTip": "Comitês de campanha (Res. TSE 23.610): Comitê CENTRAL = placa até 4 m²; Demais comitês = até 0,5 m² (sem efeito outdoor)!"
  },
  {
    "id": "mig_eleit_084",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Propaganda Eleitoral em Imprensa Escrita (Jornais e Revistas)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato contrata divulgação paga de propaganda eleitoral em jornal impresso diário de grande circulação, publicando 12 anúncios pagos ao longo de setembro, cada um ocupando metade de uma página de jornal padrão.",
    "options": [
      {
        "letter": "A",
        "text": "É proibida toda e qualquer propaganda eleitoral paga em jornais ou revistas impressos, assim como ocorre na televisão aberta, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      },
      {
        "letter": "B",
        "text": "Em jornais padrão e revistas, o candidato pode comprar página inteira em até 20 edições desde que declare o valor pago na prestação de contas, com validação da propaganda antecipada independentemente de pedido explícito de voto."
      },
      {
        "letter": "C",
        "text": "A reprodução exata da página do jornal impresso no site oficial do próprio veículo na internet é proibida durante a campanha, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "A conduta ultrapassou os dois limites legais: são permitidos até a antevéspera das eleições apenas até 10 (dez) anúncios de propaganda eleitoral, por veículo, em datas diversas, para cada candidato, num espaço máximo, por edição, de 1/8 (um oitavo) de página de jornal padrão e de 1/4 (um quarto) de página de revista ou tabloide."
      }
    ],
    "correctAnswer": "D",
    "justification": "Conforme o Art. 43 da Lei nº 9.504/1997, são permitidos, até a antevéspera das eleições, a divulgação paga na imprensa escrita e a reprodução na internet do jornal impresso de até 10 anúncios por veículo em datas diversas para cada candidato, no espaço máximo por edição de 1/8 de página de jornal padrão e 1/4 de página de revista/tabloide, com menção visível ao valor pago.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferente da TV e do rádio (onde é proibida propaganda paga), na IMPRENSA ESCRITA (jornais/revistas e sua reprodução na internet) é PERMITIDA propaganda paga dentro dos limites do Art. 43!"
      },
      {
        "letter": "B",
        "explanation": "Os tetos do Art. 43 são rígidos: máximo de 10 anúncios por veículo em datas diversas, ocupando no máximo 1/8 de página de jornal padrão ou 1/4 de página de revista/tabloide, devendo constar o valor pago pelo anúncio."
      },
      {
        "letter": "C",
        "explanation": "O Art. 43, caput, autoriza expressamente a divulgação paga na imprensa escrita E a reprodução na internet do jornal impresso, observados os mesmos limites."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 43 da Lei nº 9.504/1997",
        "textSnippet": "Conforme o Art. 43 da Lei nº 9.504/1997, são permitidos, até a antevéspera das eleições, a divulgação paga na imprensa escrita e a reprodução na internet do jornal impresso de até 10 anúncios por veículo em datas diversas para cada candidato, no espaço máximo por edição de 1/8 de página de jornal padrão e 1/4 de página de revista/tabloide, com menção visível ao valor pago."
      }
    ],
    "professorTip": "Imprensa escrita (Art. 43): PODE propaganda paga até antevéspera -> máx. 10 anúncios por veículo em datas diversas -> tamanho máx.: 1/8 jornal padrão / 1/4 revista ou tabloide (+ valor pago)!"
  },
  {
    "id": "mig_eleit_085",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Contratação de Pessoal e Cabos Eleitorais em Campanha (Art. 100-A)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato a Prefeito contrata 500 cabos eleitorais para militar nas ruas mediante remuneração em um município pequeno de 15.000 eleitores; além disso, questiona se a contratação de pessoal para prestação de serviços em campanha gera vínculo empregatício celetista.",
    "options": [
      {
        "letter": "A",
        "text": "A contratação de cabos eleitorais remunerados pelo candidato ou partido cria automaticamente vínculo de emprego regido pela CLT com direito a aviso prévio e FGTS, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "Não existe qualquer limite numérico legal para contratação de cabos eleitorais remunerados pelo candidato desde que não ultrapasse o teto financeiro de gastos, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "A militância voluntária não remunerada de simpatizantes também entra na cota numérica máxima, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "D",
        "text": "A contratação de pessoal para prestação de serviços nas campanhas eleitorais não gera vínculo empregatício com o candidato ou partido contratante, mas deve respeitar rigorosamente o teto numérico."
      }
    ],
    "correctAnswer": "D",
    "justification": "Consoante os Arts. 100 e 100-A da Lei nº 9.504/1997: a contratação de pessoal em campanha não gera vínculo empregatício celetista com candidato ou partido, mas submete-se aos limites quantitativos legais proporcionais ao eleitorado (excluídos voluntários, apoio administrativo, fiscais/delegados, advogados e contadores).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos expressos do Art. 100 da Lei nº 9.504/1997, a contratação de pessoal para prestação de serviços nas campanhas eleitorais não gera vínculo empregatício com o candidato ou partido contratantes (aplicando-se apenas a legislação previdenciária específica quando cabível)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 100-A impõe limites quantitativos objetivos por eleitorado para contratação direta ou terceirizada de pessoal para militância e mobilização de rua (não entrando no cômputo a militância NÃO remunerada, nem advogados/contadores/coordenadores administrativos internos previstos no § 6º)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 100-A, § 6º, exclui expressamente do limite numérico a militância não remunerada, pessoal contratado para apoio administrativo/operacional, fiscais, delegados e serviços advocatícios/contábeis."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 100 e Art. 100-A da Lei nº 9.504/1997",
        "textSnippet": "Consoante os Arts. 100 e 100-A da Lei nº 9.504/1997: a contratação de pessoal em campanha não gera vínculo empregatício celetista com candidato ou partido, mas submete-se aos limites quantitativos legais proporcionais ao eleitorado (excluídos voluntários, apoio administrativo, fiscais/delegados, advogados e contadores)."
      }
    ],
    "professorTip": "Arts. 100 e 100-A Lei 9.504/97: cabo eleitoral NÃO gera vínculo de emprego CLT, mas tem TETO NUMÉRICO por tamanho do eleitorado (voluntário, advogado e contador ficam fora do teto)!"
  },
  {
    "id": "mig_eleit_086",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Arrecadação Eleitoral - CNPJ de Campanha, Conta Bancária e Recibos",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato a Vereador em município de 40 mil eleitores inicia arrecadação de doações eleitorais em sua conta bancária pessoal física para poupar tempo após o pedido de registro e dispensa emissão de recibo eleitoral.",
    "options": [
      {
        "letter": "A",
        "text": "Somente os candidatos a cargos majoritários (Prefeito, Governador e Presidente) são obrigados a abrir conta bancária específica de campanha, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      },
      {
        "letter": "B",
        "text": "Os bancos podem recusar a abertura de conta bancária de campanha para candidato que possua restrição cadastral no spc/serasa ou nome negativado, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Despesas eleitorais de campanha contratadas pelo próprio candidato podem ser pagas a qualquer momento por meio de dinheiro vivo sem controle bancário ou limite, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "D",
        "text": "O procedimento é gravemente irregular: é obrigatória para partidos e candidatos a abertura de conta bancária específica destinada à campanha eleitoral, devendo toda doação financeira transitar pela conta de campanha mediante emissão de recibo eleitoral quando exigido."
      }
    ],
    "correctAnswer": "D",
    "justification": "Conforme os Arts. 22 e 22-A da Lei nº 9.504/1997, candidatos e partidos estão obrigados a inscrever-se no CNPJ de campanha e abrir conta bancária específica (os bancos têm até 3 dias úteis para abrir e não podem exigir depósito mínimo nem negar por restrição cadastral), dispensada a conta apenas em municípios sem agência bancária ou posto.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 22 da Lei nº 9.504/1997, TODOS os candidatos (majoritários e proporcionais) são obrigados a abrir conta bancária específica para registrar todo o movimento financeiro da campanha (exceto nos municípios onde não haja agência bancária ou posto de atendimento bancário - § 2º)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 22, § 1º, I e II, da Lei nº 9.504/1997 obriga os bancos a acatar o pedido de abertura de conta de campanha em até 3 dias úteis, sendo PROIBIDO condicioná-la a depósito mínimo ou à ausência de restrições cadastrais (SPC/Serasa) do candidato!"
      },
      {
        "letter": "C",
        "explanation": "Os gastos eleitorais devem ser pagos mediante cheque nominal, transferência eletrônica ou cartão de débito da conta de campanha (admitido Fundo de Caixa pequeno apenas para despesas miúdas dentro dos estritos limites da resolução do TSE)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 22, 22-A e 23 da Lei nº 9.504/1997",
        "textSnippet": "Conforme os Arts. 22 e 22-A da Lei nº 9.504/1997, candidatos e partidos estão obrigados a inscrever-se no CNPJ de campanha e abrir conta bancária específica (os bancos têm até 3 dias úteis para abrir e não podem exigir depósito mínimo nem negar por restrição cadastral), dispensada a conta apenas em municípios sem agência bancária ou posto."
      }
    ],
    "professorTip": "Conta de campanha (Art. 22 Lei 9.504/97): OBRIGATÓRIA para todo candidato (salvo município sem agência/posto); banco tem até 3 dias úteis para abrir e NÃO pode negar por nome sujo/SPC!"
  },
  {
    "id": "mig_eleit_087",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Gastos Eleitorais - Limites Específicos (Alimentação, Veículos e Advogados/Contadores)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Na prestação de contas de candidato a Deputado Federal, verificam-se despesas milionárias com contratação de advogados e contadores para consultoria jurídica da campanha, além de despesas com alimentação de pessoal equivalentes a 18% do total de gastos contratados.",
    "options": [
      {
        "letter": "A",
        "text": "Os honorários de advogados e contadores pagos com recursos privados para defesa judicial do candidato durante a campanha submetem-se integralmente ao limite máximo de gastos do cargo, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "Não existe limite percentual algum na Lei nº 9.504/1997 para contratação de aluguel de veículos automotores ou alimentação de pessoal em campanhas, em estrita observância à soberania popular, à legitimidade do pleito e à isonomia eleitoral."
      },
      {
        "letter": "C",
        "text": "O candidato que ultrapassar o limite legal global de gastos de campanha sofre apenas advertência verbal sem sanção pecuniária, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "D",
        "text": "As despesas com serviços advocatícios e de contabilidade prestados a candidatos ou partidos políticos em campanhas eleitorais são lícitas e não estão sujeitas aos limites de gastos de campanha nem aos tetos de doação para essa rubrica específica."
      }
    ],
    "correctAnswer": "D",
    "justification": "Conforme o Art. 26 da Lei nº 9.504/1997, são gastos eleitorais lícitos aqueles listados no dispositivo, observando-se limites internos específicos de até 10% do total de gastos para alimentação de pessoal e até 20% para aluguel de veículos automotores (§ 1º). Honorários advocatícios e contábeis não se submetem ao limite global de gastos (§ 4º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei nº 13.877/2019 excluiu expressamente do limite de gastos de campanha os honorários advocatícios e contábeis referentes a consultoria, assessoria e defesa judicial em campanha (Art. 26, § 4º)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 26, § 1º, fixa dois limites percentuais internos clássicos: alimentação do pessoal que presta serviços às candidaturas = máximo 10% do total de gastos; aluguel de veículos automotores = máximo 20% do total de gastos!"
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 18-B da Lei nº 9.504/1997, gastar recursos além dos limites de gastos definidos em lei sujeita o responsável ao pagamento de MULTA equivalente a 100% da quantia que ultrapassar o limite estabelecido (podendo ainda configurar abuso de poder econômico)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 18-C e Art. 26 da Lei nº 9.504/1997",
        "textSnippet": "Conforme o Art. 26 da Lei nº 9.504/1997, são gastos eleitorais lícitos aqueles listados no dispositivo, observando-se limites internos específicos de até 10% do total de gastos para alimentação de pessoal e até 20% para aluguel de veículos automotores (§ 1º). Honorários advocatícios e contábeis não se submetem ao limite global de gastos (§ 4º)."
      }
    ],
    "professorTip": "Limites de gastos (Art. 26): Alimentação pessoal = máx. 10%; Aluguel veículos = máx. 20%; Advogados/Contadores = FORA do teto de gastos! Ultrapassar teto global = multa de 100% do excesso!"
  },
  {
    "id": "mig_eleit_088",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Número Máximo de Candidatos nas Eleições Proporcionais (Lei nº 14.211/2021)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em município cuja Câmara Municipal possui 15 cadeiras de Vereadores, partido político (ou federação partidária) pretende lançar o maior número possível de candidatos ao cargo de Vereador.",
    "options": [
      {
        "letter": "A",
        "text": "Cada partido político ou federação pode registrar até 150% do número de vagas a preencher nas eleições proporcionais, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "Em Estados com menos de 12 Deputados Federais, a regra permite lançar até 200% das vagas disponíveis, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "C",
        "text": "Se a conta do percentual mínimo de 30% por gênero resultar em número fracionário de candidatas mulheres, arredonda-se sempre para baixo, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      },
      {
        "letter": "D",
        "text": "O partido ou federação poderá registrar candidatos para a Câmara dos Deputados, Câmara Legislativa, Assembleias Legislativas e Câmaras Municipais no total de até 100% (cem por cento) do número de lugares a preencher mais 1 (um)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Com a Lei nº 14.211/2021, o Art. 10 da Lei nº 9.504/1997 passou a limitar o registro de candidaturas nas eleições proporcionais por partido ou federação a até 100% das vagas a preencher mais 1 (um). Na cota de gênero (30% a 70%), frações no mínimo de 30% arredondam-se sempre para cima.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A antiga regra dos 150% (ou 200% em coligações) foi revogada pela Lei nº 14.211/2021: hoje cada partido ou federação pode registrar no máximo 100% das vagas + 1!"
      },
      {
        "letter": "B",
        "explanation": "O antigo permissivo de 200% para Estados com até 12 cadeiras também foi extinto pela Lei nº 14.211/2021: aplica-se uniformemente 100% + 1!"
      },
      {
        "letter": "C",
        "explanation": "Nos termos do Art. 10, § 4º, da Lei nº 9.504/1997, qualquer fração no cálculo do mínimo de 30% será arredondada para CIMA (e o máximo de 70% para BAIXO), garantindo que nunca fique abaixo de 30%!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 10 da Lei nº 9.504/1997 (redação da Lei nº 14.211/2021)",
        "textSnippet": "Com a Lei nº 14.211/2021, o Art. 10 da Lei nº 9.504/1997 passou a limitar o registro de candidaturas nas eleições proporcionais por partido ou federação a até 100% das vagas a preencher mais 1 (um). Na cota de gênero (30% a 70%), frações no mínimo de 30% arredondam-se sempre para cima."
      }
    ],
    "professorTip": "Lei 14.211/21 (Art. 10): máximo de candidatos no proporcional = 100% das vagas + 1! Cota 30% gênero: fração arredonda sempre para CIMA!"
  },
  {
    "id": "mig_eleit_089",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Candidato Sub Judice com Registro Indeferido - Direitos de Campanha (Art. 16-A)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Candidato a Prefeito tem seu pedido de registro de candidatura indeferido pelo Juiz Eleitoral por suposta inelegibilidade e interpõe recurso ao TRE, permanecendo pendente de julgamento definitivo no dia da eleição em outubro.",
    "options": [
      {
        "letter": "A",
        "text": "Indeferido o registro pelo Juiz Eleitoral em primeira instância, o candidato perde imediatamente o direito de fazer campanha e seu nome é excluído da urna eletrônica mesmo havendo recurso pendente, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "Caso o candidato sub judice vença a eleição com registro ainda indeferido aguardando recurso no TSE, deverá ser imediatamente diplomado e empossado provisoriamente antes do julgamento do recurso, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Se o registro do candidato sub judice for definitivamente indeferido após a eleição, os votos a ele dados nas eleições proporcionais são aproveitados integralmente pelo seu partido político, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "D",
        "text": "O candidato cujo registro esteja sub judice poderá efetuar todos os atos relativos à campanha eleitoral, inclusive utilizar o horário eleitoral gratuito no rádio e na televisão e ter seu nome mantido na urna eletrônica enquanto estiver sob essa condição, ficando a validade dos votos a ele atribuídos condicionada ao deferimento de seu registro por instância superior."
      }
    ],
    "correctAnswer": "D",
    "justification": "Nos termos do Art. 16-A da Lei nº 9.504/1997, o candidato sub judice pode fazer campanha integralmente e constar na urna eletrônica, mas a validade de seus votos depende do deferimento final do registro. Nas proporcionais: registro indeferido no dia da eleição e mantido indeferido = votos nulos; registro deferido no dia da eleição e indeferido/cassado depois = votos aproveitados pela legenda (Art. 175, § 4º, CE).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 16-A garante expressamente a continuidade integral da campanha, horário gratuito e manutenção na urna eletrônica ao candidato sub judice até decisão final ou indeferimento definitivo sem recurso cabível com efeito suspensivo/pendente."
      },
      {
        "letter": "B",
        "explanation": "Enquanto mantido o indeferimento (sem provimento recursal ou cautelar suspensiva deferindo o registro), o candidato sub judice NÃO pode ser diplomado (Art. 16-A, parágrafo único: o cômputo e a diplomação dependem do deferimento do registro)!"
      },
      {
        "letter": "C",
        "explanation": "Atenção ao Art. 16-A, parágrafo único, e ao Art. 175, §§ 3º e 4º, do CE! Se o registro já estava INDEFERIDO na data do pleito e assim se manteve após o recurso, os votos são NULOS (não contam nem para a legenda/partido!). Apenas se o registro estava DEFERIDO na data do pleito e só depois foi cassado ou indeferido em instância superior é que os votos no proporcional contam para o partido (Art. 175, § 4º CE)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 16-A da Lei nº 9.504/1997 e Súmula 39 do TSE",
        "textSnippet": "Nos termos do Art. 16-A da Lei nº 9.504/1997, o candidato sub judice pode fazer campanha integralmente e constar na urna eletrônica, mas a validade de seus votos depende do deferimento final do registro. Nas proporcionais: registro indeferido no dia da eleição e mantido indeferido = votos nulos; registro deferido no dia da eleição e indeferido/cassado depois = votos aproveitados pela legenda (Art. 175, § 4º, CE)."
      }
    ],
    "professorTip": "Art. 16-A (Sub judice): faz campanha, vai na urna e usa TV; mas SÓ é diplomado se deferir o registro! Proporcional: indeferido no dia da eleição e mantido = voto NULO; deferido no dia e cassado depois = conta pro partido!"
  },
  {
    "id": "mig_eleit_090",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Diplomação dos Eleitos - Natureza Jurídica e Efeitos Processuais",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Aprovado na OAB analisa os efeitos jurídicos e processuais da sessão solene de DIPLOMAÇÃO realizada pela Justiça Eleitoral após a proclamação dos resultados das eleições.",
    "options": [
      {
        "letter": "A",
        "text": "A diplomação e a posse representam o mesmo ato único praticado sempre pelo Presidente da Câmara Municipal ou do Congresso Nacional, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "A expedição do diploma ao candidato eleito gera coisa julgada material absoluta, tornando impossível qualquer ação posterior para questionar corrupção ou abuso eleitoral, com vedação à aplicação imediata de alteração legal eleitoral dentro do período de anterioridade."
      },
      {
        "letter": "C",
        "text": "A diplomação é o ato jurisdicional-administrativo formal pelo qual a Justiça Eleitoral atesta quem são os eleitos e suplentes com os respectivos votos nominais e habilita o eleito à posse perante o Poder Executivo ou Legislativo."
      },
      {
        "letter": "D",
        "text": "Nos termos da Constituição, compete exclusivamente à Justiça Comum estadual julgar mandado de segurança contra ato de diplomação de prefeito, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      }
    ],
    "correctAnswer": "C",
    "justification": "A diplomação (Art. 215 do Código Eleitoral) encerra formalmente o processo eleitoral ordinário: compete ao TSE (Presidente/Vice), aos TREs (Governadores, Senadores, Deputados Federais/Estaduais/Distritais) e às Juntas Eleitorais (Prefeitos, Vice-Prefeitos e Vereadores). Divide os marcos decadenciais das ações eleitorais (AIJE/41-A até a diplomação; RCED 3d, AIME 15d e 30-A 15d após a diplomação).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A DIPLOMAÇÃO é ato da Justiça Eleitoral (Junta Eleitoral, TRE ou TSE); a POSSE é ato político-administrativo subsequente realizado perante o Legislativo (Congresso/Assembleia/Câmara Municipal)."
      },
      {
        "letter": "B",
        "explanation": "Justamente após a diplomação abrem-se os prazos da AIME (15 dias), do Art. 30-A (15 dias) e do RCED (3 dias)!"
      },
      {
        "letter": "D",
        "explanation": "A diplomação é ato da Justiça Eleitoral; logo, quaisquer ações ou recursos contra a diplomação tramitam exclusivamente na Justiça Eleitoral."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 215 do Código Eleitoral e Jurisprudência do TSE",
        "textSnippet": "A diplomação (Art. 215 do Código Eleitoral) encerra formalmente o processo eleitoral ordinário: compete ao TSE (Presidente/Vice), aos TREs (Governadores, Senadores, Deputados Federais/Estaduais/Distritais) e às Juntas Eleitorais (Prefeitos, Vice-Prefeitos e Vereadores). Divide os marcos decadenciais das ações eleitorais (AIJE/41-A até a diplomação; RCED 3d, AIME 15d e 30-A 15d após a diplomação)."
      }
    ],
    "professorTip": "Diplomação = ato da Justiça Eleitoral (habilita à posse). Até ela: AIJE e 41-A. A partir dela: RCED (3 dias), AIME (15 dias) e Art. 30-A (15 dias)!"
  },
  {
    "id": "mig_eleit_091",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Crimes Contra a Honra Eleitorais - Calúnia, Difamação, Injúria e Ação Penal",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Durante comício eleitoral, candidato acusa publicamente adversário de ter praticado crime específico de peculato na prefeitura, sabendo ser falsa a imputação, visando prejudicar sua campanha. O ofendido pretende exigir retratação e indaga sobre a ação penal.",
    "options": [
      {
        "letter": "A",
        "text": "Assim como no Código Penal comum, os crimes de calúnia, difamação e injúria eleitorais procedem-se mediante queixa-crime (ação penal privada exclusiva do ofendido)."
      },
      {
        "letter": "B",
        "text": "Nos crimes de calúnia e difamação eleitorais previstos no Código Eleitoral admite-se a extinção da punibilidade pela retratação do agente antes da sentença, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "C",
        "text": "Configura-se o crime de calúnia eleitoral, admitindo-se exceção da verdade salvo as hipóteses legais; ademais, todos os crimes eleitorais definidos no Código Eleitoral."
      },
      {
        "letter": "D",
        "text": "Na injúria eleitoral, é sempre cabível a exceção da verdade caso o ofendido seja candidato à reeleição, com validação da propaganda antecipada independentemente de pedido explícito de voto."
      }
    ],
    "correctAnswer": "C",
    "justification": "Os crimes contra a honra eleitorais (Arts. 324 a 326 do Código Eleitoral) exigem o elemento especial de serem praticados na propaganda eleitoral ou com fins de propaganda. Todos os crimes do Código Eleitoral submetem-se à ação penal pública incondicionada (Art. 355 CE), não havendo previsão de extinção da punibilidade por retratação.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pegadinha clássica de Direito Eleitoral! Pelo Art. 355 do Código Eleitoral: \"As infrações penais definidas neste Código são de ação pública\" (ação penal pública INCONDICIONADA — não existe queixa-crime originária, apenas ação privada subsidiária da pública se o MPE ficar inerte)!"
      },
      {
        "letter": "B",
        "explanation": "Diferente do Art. 143 do Código Penal comum, os Arts. 324 e 325 do Código Eleitoral NÃO preveem a retratação como causa extintiva da punibilidade na esfera penal eleitoral!"
      },
      {
        "letter": "D",
        "explanation": "A injúria ofende a honra subjetiva (xingamento/qualidade negativa), nunca admitindo exceção da verdade; esta cabe apenas na calúnia (Art. 324, § 2º) e, excepcionalmente, na difamação contra funcionário público em razão de suas funções (Art. 325, parágrafo único)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 324, 325, 326 e 355 do Código Eleitoral",
        "textSnippet": "Os crimes contra a honra eleitorais (Arts. 324 a 326 do Código Eleitoral) exigem o elemento especial de serem praticados na propaganda eleitoral ou com fins de propaganda. Todos os crimes do Código Eleitoral submetem-se à ação penal pública incondicionada (Art. 355 CE), não havendo previsão de extinção da punibilidade por retratação."
      }
    ],
    "professorTip": "Crimes contra a honra no CE (Arts. 324-326): TODOS são de ação penal PÚBLICA INCONDICIONADA (Art. 355 CE)! NÃO cabe retratação extintiva da punibilidade (diferente do CP)!"
  },
  {
    "id": "mig_eleit_092",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Divulgação de Pesquisa Fraudulenta e de Fato Sabidamente Inverídico (Art. 323 CE)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Marqueteiro de campanha divulga na propaganda eleitoral gratuita de rádio e internet pesquisa eleitoral totalmente inventada e sem registro na Justiça Eleitoral, além de difundir fatos sabidamente inverídicos capazes de exercer influência perante o eleitorado.",
    "options": [
      {
        "letter": "A",
        "text": "A divulgação de pesquisa eleitoral não registrada ou fraudulenta gera exclusivamente multa administrativa pecuniária ao partido, sem previsão de tipo penal, sem possibilidade de registro ou exercício do mandato diante da causa de inelegibilidade verificada."
      },
      {
        "letter": "B",
        "text": "O crime aplica-se apenas a declarações verbais em comícios presenciais, não abrangendo redes sociais na internet, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "C",
        "text": "A divulgação de pesquisa fraudulenta constitui crime punível com detenção de 6 meses a 1 ano e multa, e a divulgação na propaganda eleitoral de fatos que sabe inverídicos em relação a partidos ou candidatos e capazes de exercer influência perante o eleitorado configura o crime."
      },
      {
        "letter": "D",
        "text": "No crime pune-se até mesmo quem divulgou informação equivocada de boa-fé por simples negligência culposa, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Nos termos do Art. 33, § 4º, da Lei nº 9.504/1997, divulgar pesquisa eleitoral fraudulenta constitui crime (detenção 6 meses a 1 ano e multa). Já o Art. 323 do Código Eleitoral (atualizado pela Lei nº 14.192/2021) pune divulgar na propaganda fatos que sabe inverídicos capazes de influenciar o eleitorado, com aumento de pena se praticado por internet, rede social, rádio, TV ou transmissão ao vivo.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Enquanto a divulgação de pesquisa sem prévio registro gera multa administrativa de R$ 53.205,00 a R$ 106.410,00 (Art. 33, § 3º), a divulgação de pesquisa FRAUDULENTA constitui CRIME no Art. 33, § 4º, da Lei nº 9.504/1997!"
      },
      {
        "letter": "B",
        "explanation": "A Lei nº 14.192/2021 alterou o Art. 323 do Código Eleitoral prevendo expressamente no § 2º causa de aumento de pena de 1/3 até metade se o crime é cometido por meio da imprensa, rádio ou televisão, ou por meio da internet ou de rede social, ou é transmitido em tempo real!"
      },
      {
        "letter": "D",
        "explanation": "O tipo do Art. 323 exige DOLO direto (\"fatos que SABE inverídicos\") e aptidão para influenciar o eleitorado."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 33, § 4º, da Lei nº 9.504/1997 e Art. 323 do Código Eleitoral",
        "textSnippet": "Nos termos do Art. 33, § 4º, da Lei nº 9.504/1997, divulgar pesquisa eleitoral fraudulenta constitui crime (detenção 6 meses a 1 ano e multa). Já o Art. 323 do Código Eleitoral (atualizado pela Lei nº 14.192/2021) pune divulgar na propaganda fatos que sabe inverídicos capazes de influenciar o eleitorado, com aumento de pena se praticado por internet, rede social, rádio, TV ou transmissão ao vivo."
      }
    ],
    "professorTip": "Pesquisa sem registro = multa. Pesquisa FRAUDULENTA = CRIME (Art. 33, § 4º). Fato que SABE inverídico na propaganda (Art. 323 CE) = crime com aumento de 1/3 a 1/2 se via internet/rede social/TV/rádio!"
  },
  {
    "id": "mig_eleit_093",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Crimes Contra o Sigilo do Voto, Urna Eletrônica e Ordem dos Trabalhos",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Eleitor entra na cabina de votação levando aparelho celular escondido para fotografar a tela da urna eletrônica exibindo seu voto para comprovar ao chefe político local; outro agente promove desordem que prejudica os trabalhos da junta apuradora.",
    "options": [
      {
        "letter": "A",
        "text": "O eleitor pode fotografar ou filmar livremente o seu próprio voto na tela da urna eletrônica por se tratar de manifestação privada de vontade, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder."
      },
      {
        "letter": "B",
        "text": "Se um eleitor tentar votar duas vezes no mesmo pleito ou votar em lugar de outrem, comete mera infração administrativa de multa sem tipificação penal, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "C",
        "text": "Violar ou tentar violar o sigilo do voto constitui crime eleitoral punido com detenção de até 2 anos, sendo expressamente proibido portar aparelho de telefonia celular, máquinas fotográficas ou filmadoras dentro da cabina de votação."
      },
      {
        "letter": "D",
        "text": "Inutilizar, alterar ou perturbar meio de propaganda devidamente empregado nos termos da lei é conduta penalmente atípica, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      }
    ],
    "correctAnswer": "C",
    "justification": "Para assegurar a liberdade e a lisura do escrutínio, o Código Eleitoral e a Lei das Eleições proíbem o porte de celular, câmera ou equipamento de comunicação na cabina de votação (Art. 91-A, parágrafo único) e criminalizam violar ou tentar violar o sigilo do voto (Art. 312 CE), votar mais de uma vez ou em lugar de outrem (Art. 309 CE) e promover desordem nos trabalhos eleitorais (Art. 296 CE).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O sigilo do voto é garantia constitucional de ordem pública (Art. 14 CF) indisponível pelo próprio eleitor (para evitar voto de cabresto e coação!), sendo proibido celular/câmera na cabina (Art. 91-A, parágrafo único) e tipificado como crime no Art. 312 CE!"
      },
      {
        "letter": "B",
        "explanation": "Votar ou tentar votar mais de uma vez, ou em lugar de outrem, configura crime grave do Art. 309 do Código Eleitoral (reclusão até 3 anos)."
      },
      {
        "letter": "D",
        "explanation": "Nos termos do Art. 331 do Código Eleitoral, inutilizar, alterar ou perturbar meio de propaganda devidamente empregado é crime eleitoral (detenção até 6 meses ou pagamento de 90 a 120 dias-multa)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 296, 309 e 312 do Código Eleitoral e Art. 91-A, parágrafo único, da Lei nº 9.504/1997",
        "textSnippet": "Para assegurar a liberdade e a lisura do escrutínio, o Código Eleitoral e a Lei das Eleições proíbem o porte de celular, câmera ou equipamento de comunicação na cabina de votação (Art. 91-A, parágrafo único) e criminalizam violar ou tentar violar o sigilo do voto (Art. 312 CE), votar mais de uma vez ou em lugar de outrem (Art. 309 CE) e promover desordem nos trabalhos eleitorais (Art. 296 CE)."
      }
    ],
    "professorTip": "Sigilo do voto = garantia indisponível! Levar celular na cabina é proibido e tentar violar sigilo do voto = CRIME (Art. 312 CE)!"
  },
  {
    "id": "mig_eleit_094",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Crime de Denunciação Caluniosa Eleitoral (Art. 326-A do Código Eleitoral)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Coordenador de campanha dá causa à instauração de investigação judicial eleitoral e de inquérito policial contra candidato adversário, imputando-lhe falsamente crime eleitoral que sabe ser inocente, com finalidade explicitamente eleitoral.",
    "options": [
      {
        "letter": "A",
        "text": "A falsa imputação de crime eleitoral para prejudicar adversário configura apenas o delito de calúnia eleitoral, mesmo quando gera abertura formal de inquérito policial, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      },
      {
        "letter": "B",
        "text": "A pena do crime não sofre aumento caso o agente se utilize de anonimato ou nome suposto, sem possibilidade de registro ou exercício do mandato diante da causa de inelegibilidade verificada."
      },
      {
        "letter": "C",
        "text": "A conduta configura o crime autônomo de denunciação caluniosa com finalidade eleitoral, abrangendo inclusive quem dá causa à instauração de investigação policial, processo judicial, investigação administrativa, inquérito civil ou ação de improbidade administrativa atribuindo prática de crime ou ato infracional de que o sabe inocente, com finalidade eleitoral."
      },
      {
        "letter": "D",
        "text": "O STF declarou inconstitucional todo o Art. 326-A do Código Eleitoral na ADPF sobre fake news, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Incluído pela Lei nº 13.834/2019, o Art. 326-A do Código Eleitoral tipifica como crime (reclusão de 2 a 8 anos e multa) dar causa à instauração de investigação policial, processo judicial, investigação administrativa, inquérito civil ou ação de improbidade administrativa atribuindo a alguém a prática de crime ou ato infracional de que o sabe inocente, com finalidade eleitoral.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Enquanto a calúnia eleitoral (Art. 324) atinge a honra na propaganda, o Art. 326-A (Lei nº 13.834/2019) tutela a Administração da Justiça Eleitoral quando o agente movimenta investigação/processo contra quem sabe inocente com finalidade eleitoral (reclusão de 2 a 8 anos)!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 326-A, § 1º, a pena é aumentada de sexta parte se o agente se serve do anonimato ou de nome suposto."
      },
      {
        "letter": "D",
        "explanation": "O Art. 326-A está plenamente em vigor; o que ocorreu em sede de veto derrubado / ADI foi a preservação da responsabilização do § 3º quanto à divulgação sabidamente falsa."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 326-A do Código Eleitoral (incluído pela Lei nº 13.834/2019)",
        "textSnippet": "Incluído pela Lei nº 13.834/2019, o Art. 326-A do Código Eleitoral tipifica como crime (reclusão de 2 a 8 anos e multa) dar causa à instauração de investigação policial, processo judicial, investigação administrativa, inquérito civil ou ação de improbidade administrativa atribuindo a alguém a prática de crime ou ato infracional de que o sabe inocente, com finalidade eleitoral."
      }
    ],
    "professorTip": "Art. 326-A CE: dar causa a investigação/processo sabendo o outro inocente com finalidade eleitoral = denunciação caluniosa eleitoral (reclusão 2 a 8 anos; +1/6 se anonimato)!"
  },
  {
    "id": "mig_eleit_095",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Eleitoral",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Acessibilidade Eleitoral e Direito de Voto da Pessoa com Deficiência",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Eleitora com deficiência visual e mobilidade reduzida solicita transferência para seção eleitoral acessível com urna dotada de áudio/Braille e deseja ser auxiliada na cabina de votação por pessoa de sua livre escolha.",
    "options": [
      {
        "letter": "A",
        "text": "A pessoa com deficiência sob regime de curatela civil tem automaticamente suspensos seus direitos políticos de votar e ser votada, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos."
      },
      {
        "letter": "B",
        "text": "É proibido em qualquer circunstância que pessoa de confiança acompanhe eleitor com deficiência visual ou motora grave até a cabina de votação, em estrita observância à soberania popular, à legitimidade do pleito e à isonomia eleitoral."
      },
      {
        "letter": "C",
        "text": "O requerimento é plenamente assegurado por lei: os TREs devem instalar seções eleitorais especiais com acessibilidade e recursos de tecnologia assistiva, garantindo-se ainda à pessoa com deficiência ou mobilidade reduzida o direito de contar com o auxílio de pessoa de sua confiança na cabina de votação, mesmo que não o tenha requerido antecipadamente ao juiz."
      },
      {
        "letter": "D",
        "text": "O eleitor com deficiência é obrigado a votar apenas em seção comum em andar superior sem elevador se não comunicou o cartório com 2 anos de antecedência, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "C",
    "justification": "Consoante o Art. 76 da Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência) e o Código Eleitoral, é garantido à pessoa com deficiência o exercício pleno dos direitos políticos (inclusive em seções com acessibilidade física, teclado em Braille e sistema de áudio na urna eletrônica, e auxílio de pessoa de sua confiança na cabina se necessário).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei nº 13.146/2015 (Art. 6º e Art. 76) e a nova redação do Código Civil extinguiram a incapacidade civil absoluta por deficiência: pessoas com deficiência têm plena capacidade eleitoral ativa e passiva (voto e elegibilidade)!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 76, § 1º, IV, da Lei nº 13.146/2015 e resoluções do TSE, se imprescindível para votar, o eleitor com deficiência ou mobilidade reduzida pode contar com o auxílio de pessoa de sua escolha (desde que não esteja a serviço da Justiça Eleitoral, de partido, federação ou coligação)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 135, § 6º-A, do Código Eleitoral e resoluções do TSE, o eleitor pode requerer até o prazo estipulado no calendário (em regra 151 dias antes ou pedido de transferência temporária para seção acessível) mudança para local com acessibilidade."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 135, § 6º-A, do Código Eleitoral e Art. 76 da Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência)",
        "textSnippet": "Consoante o Art. 76 da Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência) e o Código Eleitoral, é garantido à pessoa com deficiência o exercício pleno dos direitos políticos (inclusive em seções com acessibilidade física, teclado em Braille e sistema de áudio na urna eletrônica, e auxílio de pessoa de sua confiança na cabina se necessário)."
      }
    ],
    "professorTip": "Pessoa com deficiência (Art. 76 LBI): plena capacidade eleitoral ativa e passiva (curatela NÃO tira voto!); tem seções acessíveis, áudio/Braille na urna e pode entrar acompanhada por pessoa de confiança!"
  },
  {
    "id": "mig_eleit_096",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Eleitoral",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Plebiscito, Referendo e Iniciativa Popular (Soberania Popular na CF/88)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Congresso Nacional pretende consultar diretamente a população antes de editar lei de criação de novo Estado; paralelamente, cidadãos articulam projeto de lei de iniciativa popular em âmbito federal e em âmbito municipal.",
    "options": [
      {
        "letter": "A",
        "text": "O referendo é convocado previamente à elaboração da norma pelo Presidente da República por decreto autônomo, enquanto o plebiscito ratifica norma já vigente, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais."
      },
      {
        "letter": "B",
        "text": "No âmbito municipal, a Constituição Federal exige adesão de pelo menos 1% do eleitorado da cidade para projeto de lei de iniciativa popular, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "C",
        "text": "A consulta prévia à edição do ato legislativo denomina-se plebiscito; quanto à iniciativa popular, no plano federal exige-se 1% do eleitorado nacional distribuído em pelo menos 5 Estados com no mínimo 0,3% em cada, e no plano municipal exige-se 5% do eleitorado local."
      },
      {
        "letter": "D",
        "text": "A iniciativa popular, da Constituição autoriza apresentação direta de Proposta de Emenda à Constituição (pec) pelos cidadãos, observados os prazos preclusivos céleres próprios da Justiça Eleitoral no calendário oficial."
      }
    ],
    "correctAnswer": "C",
    "justification": "Pelo Art. 14 e Art. 49, XV, da CF e Lei nº 9.709/1998: Plebiscito é convocado com anterioridade a ato legislativo/administrativo; Referendo é convocado com posterioridade para ratificação/rejeição (ambos exclusivos do Congresso no plano federal). Na iniciativa popular: Federal = 1% do eleitorado em >= 5 Estados (>= 0,3% em cada); Municipal = 5% do eleitorado.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Inversão clássica! Plebiscito = PRÉVIO (antes da lei/ato); Referendo = POSTERIOR (depois da lei/ato). E ambos dependem do Congresso Nacional (Art. 49, XV, CF: autorizar referendo e convocar plebiscito)!"
      },
      {
        "letter": "B",
        "explanation": "Nos termos do Art. 29, XIII, da CF, a iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros exige manifestação de, pelo menos, 5% (CINCO por cento) do eleitorado municipal!"
      },
      {
        "letter": "D",
        "explanation": "Segundo interpretação literal do Art. 60 vs. Art. 61, § 2º, da CF, a iniciativa popular federal prevista na Constituição refere-se a projetos de lei (ordinária ou complementar), não figurando os cidadãos no rol taxativo do Art. 60 para PEC."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Arts. 14, I a III, 49, XV, 61, § 2º, e 29, XIII, da Constituição Federal e Lei nº 9.709/1998",
        "textSnippet": "Pelo Art. 14 e Art. 49, XV, da CF e Lei nº 9.709/1998: Plebiscito é convocado com anterioridade a ato legislativo/administrativo; Referendo é convocado com posterioridade para ratificação/rejeição (ambos exclusivos do Congresso no plano federal). Na iniciativa popular: Federal = 1% do eleitorado em >= 5 Estados (>= 0,3% em cada); Municipal = 5% do eleitorado."
      }
    ],
    "professorTip": "Soberania Popular: Plebiscito = ANTES (Congresso convoca); Referendo = DEPOIS (Congresso autoriza). Iniciativa popular: Federal = 1% (5 Estados com 0,3% cada); Municipal = 5% do eleitorado!"
  },
  {
    "id": "mig_eleit_097",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Eleitoral",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Eleitoral",
    "topic": "Competência Criminal Eleitoral por Foro de Prerrogativa de Função (Prefeito e STF)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Prefeito municipal no exercício do mandato pratica crime eleitoral de compra de votos (Art. 299 do Código Eleitoral) em seu próprio município durante campanha à reeleição. Indaga-se qual órgão judicial é competente para processá-lo e julgá-lo.",
    "options": [
      {
        "letter": "A",
        "text": "Os crimes eleitorais praticados por Prefeito no exercício do mandato são julgados originariamente pelo Juiz Eleitoral da Zona Eleitoral do município, em conformidade com as competências normativas e jurisdicionais dos tribunais eleitorais. Essa regra garante a paridade de armas e a regularidade do processo democrático."
      },
      {
        "letter": "B",
        "text": "Deputados Federais e Senadores que praticam crimes eleitorais estranhos ao exercício do mandato e anteriores à diplomação sempre mantêm foro privilegiado no STF, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão."
      },
      {
        "letter": "C",
        "text": "A competência originária para julgar Prefeito pela prática de crime eleitoral no exercício do cargo — em razão da simetria constitucional e da Súmula 702 do STF — pertence ao tribunal regional eleitoral (TRE) do respectivo Estado, enquanto os crimes comuns estaduais do prefeito competem ao Tribunal de Justiça (TJ)."
      },
      {
        "letter": "D",
        "text": "Os Vereadores possuem foro por prerrogativa de função constitucional obrigatório no TRE para crimes eleitorais em todo o país, sem necessidade de desincompatibilização prévia ou afastamento temporário do cargo ocupado."
      }
    ],
    "correctAnswer": "C",
    "justification": "Consoante a Súmula 702 do STF e a simetria do Art. 29, X, da CF: Prefeito no exercício do mandato (em crimes relacionados ao cargo conforme AP 937) é julgado pelo TJ (crime comum estadual), pelo TRF (crime federal) e pelo TRE (crime eleitoral)! Vereadores não possuem foro constitucional, respondendo perante o Juiz Eleitoral.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Conforme a Súmula 702 do STF, a competência do Tribunal de Justiça (Art. 29, X, CF) para julgar prefeitos restringe-se aos crimes comuns da competência estadual; nos crimes eleitorais, desloca-se para o respectivo Tribunal Regional Eleitoral (TRE)!"
      },
      {
        "letter": "B",
        "explanation": "Segundo a restrição do foro por prerrogativa de função fixada pelo STF (AP 937 - Questão de Ordem), o foro no STF para deputados e senadores restringe-se aos crimes praticados NO EXERCÍCIO do cargo e EM RAZÃO das funções (embora em 2025/discussões no STF haja evoluções sobre contemporaneidade após saída do cargo, mantém-se o nexo funcional para crimes cometidos no cargo)!"
      },
      {
        "letter": "D",
        "explanation": "A Constituição Federal não confere foro por prerrogativa de função a Vereadores (salvo raríssimas Constituições Estaduais historicamente declaradas inconstitucionais pelo STF por violarem competência/simetria): Vereadores são julgados em 1º grau pelo Juiz Eleitoral."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Eleitoral / Lei nº 9.504/1997",
        "article": "Art. 29, X, da Constituição Federal e Súmula 702 do STF",
        "textSnippet": "Consoante a Súmula 702 do STF e a simetria do Art. 29, X, da CF: Prefeito no exercício do mandato (em crimes relacionados ao cargo conforme AP 937) é julgado pelo TJ (crime comum estadual), pelo TRF (crime federal) e pelo TRE (crime eleitoral)! Vereadores não possuem foro constitucional, respondendo perante o Juiz Eleitoral."
      }
    ],
    "jurisprudence": "STF Súmula 702 e AP 937",
    "professorTip": "Súmula 702 STF: Prefeito tem foro no TJ (crime estadual), TRF (crime federal) e TRE (crime eleitoral)! Vereador = NÃO tem foro (responde no Juiz Eleitoral)!"
  }
];
