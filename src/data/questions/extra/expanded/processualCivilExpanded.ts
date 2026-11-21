// Arquivo gerado automaticamente por scripts/migrateQuestions.ts — NÃO editar manualmente.
import type { LegalQuestion } from '../../../../types';

export const PROCESSUAL_CIVIL_EXPANDED_QUESTIONS: LegalQuestion[] = [
  {
    "id": "mig_cpc_001",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Normas Fundamentais do CPC - Ordem Cronológica e Negócio Jurídico Processual",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Duas empresas capazes celebraram negócio jurídico processual atípico antes da citação prevendo ampliação dos prazos de defesa de 15 para 30 dias úteis e renúncia recíproca à interposição de agravo retido/recurso ordinário em matéria patrimonial disponível, além de exigir julgamento em ordem cronológica estrita pelo juiz. O negócio é válido e a ordem cronológica é obrigatória?",
    "options": [
      {
        "letter": "A",
        "text": "As partes jamais podem alterar prazos peremptórios legais ou ônus processuais por convenção privada."
      },
      {
        "letter": "B",
        "text": "A ordem cronológica de conclusão para sentença e acórdão é regra absoluta que gera nulidade da sentença se invertida."
      },
      {
        "letter": "C",
        "text": "O negócio jurídico processual sobre ônus, poderes, faculdades e deveres processuais em causas que admitam autocomposição é VÁLIDO entre partes plenamente capazes (Art. 190 CPC), cabendo ao juiz controlar apenas nulidades, inserção abusiva em contrato de adesão ou manifesta vulnerabilidade; já a ordem cronológica de julgamento (Art. 12 CPC) é PREFERENCIAL (e não absoluta após Lei 13.256/2016)."
      },
      {
        "letter": "D",
        "text": "O juiz pode recusar de ofício negócio jurídico processual válido mesmo sem nulidade ou vulnerabilidade apenas por discordar da conveniência."
      }
    ],
    "correctAnswer": "C",
    "justification": "O Art. 190 do CPC permite calendário e negócios processuais atípicos para partes capazes em direitos autocomponíveis. O Art. 12 prevê observância preferencial da ordem cronológica de conclusão.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 190 do CPC consagra a cláusula geral de negociação processual atípica para direitos que admitam autocomposição."
      },
      {
        "letter": "B",
        "explanation": "Desde a Lei nº 13.256/2016, o Art. 12 dispõe que os juízes e tribunais atenderão \"preferencialmente\" à ordem cronológica."
      },
      {
        "letter": "D",
        "explanation": "O parágrafo único do Art. 190 restringe a recusa judicial a nulidade, inserção abusiva em contrato de adesão ou vulnerabilidade manifesta."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 12 e 190 do CPC/2015",
        "textSnippet": "O Art. 190 do CPC permite calendário e negócios processuais atípicos para partes capazes em direitos autocomponíveis. O Art. 12 prevê observância preferencial da ordem cronológica de conclusão."
      }
    ],
    "professorTip": "Art. 190 CPC = negócio processual atípico vale (juiz só barra se nulidade/adesão abusiva/vulnerabilidade)! Art. 12 = ordem cronológica PREFERENCIAL!"
  },
  {
    "id": "mig_cpc_002",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Competência Territorial, Foro de Eleição Abusivo e Modificação (Lei 14.879/2024)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em contrato empresarial paritário entre empresa de Manaus e fornecedora de Recife, as partes elegeram aleatoriamente o foro de Porto Alegre (sem qualquer vínculo com o domicílio das partes ou local da obrigação) apenas para dificultar o acesso ao Judiciário. À luz da Lei nº 14.879/2024 que alterou o Art. 63 do CPC, como deve agir o juiz?",
    "options": [
      {
        "letter": "A",
        "text": "A incompetência territorial baseada em cláusula de eleição de foro aleatório nunca pode ser declarada de ofício pelo juiz."
      },
      {
        "letter": "B",
        "text": "Em contratos de adesão com consumidor, a cláusula de eleição de foro distante do domicílio do consumidor prevalece se escrita em negrito."
      },
      {
        "letter": "C",
        "text": "A eleição de foro só produz efeito quando guardar pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação (ressalvada relação de consumo quando favorável ao consumidor), constituindo prática abusiva a eleição aleatória de foro sem pertinência, que autoriza o juiz a declinar de ofício na distribuição da inicial (Art. 63, §§ 1º e 5º, CPC)."
      },
      {
        "letter": "D",
        "text": "A incompetência absoluta deve ser alegada pelo réu exclusivamente em exceção autônoma em 15 dias sob pena de prorrogação."
      }
    ],
    "correctAnswer": "C",
    "justification": "A Lei nº 14.879/2024 alterou o Art. 63 do CPC exigindo pertinência territorial da cláusula de eleição de foro (domicílio/residência de uma parte ou local da obrigação), qualificando como abusiva — declinável de ofício — a escolha aleatória. Incompetência relativa/absoluta alega-se em preliminar de contestação.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Embora a Súmula 33 do STJ vede declinar competência relativa de ofício como regra geral, o Art. 63, §§ 3º e 5º (com a Lei 14.879/2024), autoriza expressamente o juiz a reconhecer de ofício a abusividade da cláusula de eleição de foro sem pertinência territorial antes da citação."
      },
      {
        "letter": "B",
        "explanation": "No CDC e no Art. 63, § 1º, do CPC, prevalece a proteção ao consumidor contra foro prejudicial à sua defesa."
      },
      {
        "letter": "D",
        "explanation": "No CPC/2015, tanto a incompetência absoluta quanto a relativa são alegadas em PRELIMINAR DE CONTESTAÇÃO (Art. 64 e 337, II), sendo que apenas a relativa prorroga-se se não alegada (Art. 65)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 63 e 64 do CPC/2015 (Lei 14.879/2024)",
        "textSnippet": "A Lei nº 14.879/2024 alterou o Art. 63 do CPC exigindo pertinência territorial da cláusula de eleição de foro (domicílio/residência de uma parte ou local da obrigação), qualificando como abusiva — declinável de ofício — a escolha aleatória. Incompetência relativa/absoluta alega-se em preliminar de contestação."
      }
    ],
    "professorTip": "Novidade CPC (Lei 14.879/2024): foro de eleição TEM QUE TER VÍNCULO com domicílio/residência das partes ou local da obrigação, senão é ABUSIVO e juiz declina de ofício!"
  },
  {
    "id": "mig_cpc_003",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Litisconsórcio Necessário vs. Unitário e Prazo em Dobro (Art. 229 CPC)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Dois litisconsortes passivos possuem procuradores diferentes de escritórios de advocacia distintos em processo judicial que tramita em autos ELETRÔNICOS (PJe). Além disso, discute-se ação anulatória de casamento proposta contra apenas um dos cônjuges. Quais as regras do CPC?",
    "options": [
      {
        "letter": "A",
        "text": "Litisconsortes com advogados de escritórios distintos têm sempre prazo em dobro mesmo nos processos eletrônicos."
      },
      {
        "letter": "B",
        "text": "No litisconsórcio simples (não unitário), a contestação tempestiva apresentada por apenas um dos réus impede sempre a revelia em relação ao corréu que não contestou quanto a fatos exclusivos dele."
      },
      {
        "letter": "C",
        "text": "Não se aplica o prazo em dobro para litisconsortes com procuradores diferentes nos processos em autos ELETRÔNICOS (Art. 229, § 2º, CPC — o prazo em dobro do Art. 229 restringe-se apenas aos autos FÍSICOS!); já na ação anulatória de casamento contra os cônjuges, há litisconsórcio passivo NECESSÁRIO (e unitário), cuja falta de citação de todos torna a sentença nula ou ineficaz (Art. 115 CPC)."
      },
      {
        "letter": "D",
        "text": "A sentença proferida sem a integração de litisconsorte necessário unitário é válida e eficaz apenas em face do réu que participou do processo."
      }
    ],
    "correctAnswer": "C",
    "justification": "No CPC/2015: litisconsórcio necessário (por lei ou natureza da relação — Art. 114) x unitário (decisão uniforme para todos — Art. 116). Sem citação de litisconsorte necessário = sentença nula (se unitário) ou ineficaz ao não citado (se simples — Art. 115). Prazo em dobro do Art. 229 NÃO existe em processo eletrônico (§ 2º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 229, § 2º, do CPC exclui expressamente o prazo em dobro nos processos eletrônicos."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 345, I, do CPC, a revelia não produz efeito de confissão ficta se, havendo pluralidade de réus, algum deles contestar a ação sobre fato comum (Art. 117 mantém independência dos litisconsortes, mas atos benéficos sobre fato comum não prejudicam o outro)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 115, I, do CPC, a sentença de mérito proferida sem a integração do contraditório quando o litisconsórcio for necessário e unitário é NULA."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 113 a 118 e 229 do CPC/2015",
        "textSnippet": "No CPC/2015: litisconsórcio necessário (por lei ou natureza da relação — Art. 114) x unitário (decisão uniforme para todos — Art. 116). Sem citação de litisconsorte necessário = sentença nula (se unitário) ou ineficaz ao não citado (se simples — Art. 115). Prazo em dobro do Art. 229 NÃO existe em processo eletrônico (§ 2º)."
      }
    ],
    "professorTip": "Processo ELETRÔNICO = NÃO tem prazo em dobro para litisconsortes com advogados distintos (Art. 229, § 2º)! Litisconsórcio necessário unitário sem citação de todos = sentença NULA!"
  },
  {
    "id": "mig_cpc_004",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Intervenção de Terceiros - Denunciação da Lide vs. Chamamento ao Processo e IDPJ",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em ação de cobrança proposta pelo credor apenas contra um de três devedores solidários de contrato bancário, o réu pretende trazer os outros dois codevedores solidários ao processo; paralelamente, um segurado acionado em acidente de trânsito pretende trazer sua seguradora por força do contrato de seguro. Quais intervenções cabem e como funciona a denunciação da lide per saltum?",
    "options": [
      {
        "letter": "A",
        "text": "Para trazer o fiador ou codevedores solidários à lide utiliza-se a denunciação da lide."
      },
      {
        "letter": "B",
        "text": "Na denunciação da lide, são permitidas denunciações sucessivas ilimitadas em cadeia até atingir toda a cadeia produtiva."
      },
      {
        "letter": "C",
        "text": "Para trazer os outros codevedores solidários (ou o devedor principal pelo fiador), cabe CHAMAMENTO AO PROCESSO (Art. 130 CPC); para trazer a seguradora por direito regressivo contratual/legal, cabe DENUNCIAÇÃO DA LIDE (Art. 125 CPC), sendo VEDADA a denunciação sucessiva além de uma única denunciação sucessiva do denunciado (Art. 125, § 2º — e permitindo a Súmula 537 STJ que a vítima execute diretamente a seguradora denunciada solidariamente nos limites da apólice)."
      },
      {
        "letter": "D",
        "text": "O Incidente de Desconsideração da Personalidade Jurídica (IDPJ) pode ser instaurado de ofício pelo juiz cível sem requerimento da parte ou do MP."
      }
    ],
    "correctAnswer": "C",
    "justification": "Intervenção de Terceiros no CPC/15: Assistência simples/litisconsorcial (119–124); Denunciação da Lide (125–129 — direito de regresso/evicção, facultativa, máx. 1 sucessiva); Chamamento ao Processo (130–132 — fiador/devedor solidário); IDPJ (133–137 — exige pedido da parte/MP, suspende processo, cita sócio em 15 dias); Amicus Curiae (138 — decisão irrecorrível que admite ou solicita, não recorre salvo ED e IRDR).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Codevedores solidários e fiador/afiançado usam CHAMAMENTO AO PROCESSO (Art. 130); direito de regresso contratual/legal ou garantia de evicção usam DENUNCIAÇÃO DA LIDE (Art. 125)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 125, § 2º, do CPC admite apenas UMA única denunciação sucessiva pelo denunciado contra seu antecessor imediato."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 133 do CPC, o IDPJ só é instaurado a pedido da parte ou do Ministério Público (quando lhe couber intervir), vedada instauração de ofício pelo juiz."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 119 a 138 do CPC/2015",
        "textSnippet": "Intervenção de Terceiros no CPC/15: Assistência simples/litisconsorcial (119–124); Denunciação da Lide (125–129 — direito de regresso/evicção, facultativa, máx. 1 sucessiva); Chamamento ao Processo (130–132 — fiador/devedor solidário); IDPJ (133–137 — exige pedido da parte/MP, suspende processo, cita sócio em 15 dias); Amicus Curiae (138 — decisão irrecorrível que admite ou solicita, não recorre salvo ED e IRDR)."
      }
    ],
    "jurisprudence": "Súmula 537 do STJ",
    "professorTip": "Regresso/Seguradora/Evicção = Denunciação da Lide (máx 1 sucessiva!). Fiador/Codevedor solidário = Chamamento ao Processo! IDPJ = NUNCA de ofício (exige pedido da parte ou MP)! Amicus curiae = decisão irrecorrível!"
  },
  {
    "id": "mig_cpc_005",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Honorários Advocatícios Sucumbenciais - Fixação, Equidade e Fazenda Pública (Tema 1076 STJ)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em ação anulatória de débito fiscal de alto valor (R$ 5.000.000,00) julgada procedente contra a Fazenda Pública Estadual em causa de baixa complexidade jurídica, o juiz fixou honorários advocatícios por apreciação equitativa em R$ 15.000,00 abaixo dos percentuais escalonados do Art. 85, § 3º, do CPC. A fixação por equidade é válida segundo o STJ?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, pois o juiz pode sempre reduzir honorários por equidade contra a Fazenda Pública quando o valor da causa for milionário e a causa simples."
      },
      {
        "letter": "B",
        "text": "Os honorários advocatícios fixados na sentença podem ser compensados entre si em caso de sucumbência recíproca das partes."
      },
      {
        "letter": "C",
        "text": "Não é válida, pois no Tema 1076 dos Recursos Repetitivos o STJ decidiu que a fixação dos honorários por apreciação equitativa (Art. 85, § 8º) NÃO é permitida quando os valores da condenação, da causa ou o proveito econômico da demanda forem ELEVADOS — sendo obrigatória a observância dos percentuais legais do Art. 85, §§ 2º e 3º (salvo apenas quando inestimável/irrisório o proveito econômico ou muito baixo o valor da causa)."
      },
      {
        "letter": "D",
        "text": "Se a sentença transitada em julgado for totalmente omissa quanto aos honorários advocatícios, forma-se coisa julgada material que impede o advogado de cobrá-los posteriormente."
      }
    ],
    "correctAnswer": "C",
    "justification": "Regras essenciais do Art. 85 CPC: (1) Regra geral: 10% a 20% (contra Fazenda = faixas escalonadas do § 3º); (2) Equidade (§ 8º) só cabe quando proveito inestimável/irrisório ou valor da causa muito baixo — NUNCA em causas milionárias (Tema 1076 STJ); (3) Vedada compensação de honorários (§ 14); (4) Omissão na sentença transitada em julgado permite ação autônoma (§ 18); (5) Majoração recursal até o teto de 20% (§ 11).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Tema 1076 do STJ proibiu expressamente a aplicação da equidade para reduzir honorários em causas de valor elevado."
      },
      {
        "letter": "B",
        "explanation": "O Art. 85, § 14, do CPC VEDA expressamente a compensação dos honorários em caso de sucumbência parcial (superando a antiga Súmula 306 do STJ)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 85, § 18, do CPC (superando a antiga Súmula 453 STJ), caso a decisão transitada em julgado seja omissa quanto ao direito aos honorários ou seu valor, é cabível AÇÃO AUTÔNOMA para sua definição e cobrança!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Art. 85 do CPC/2015 e Tema 1076 STJ",
        "textSnippet": "Regras essenciais do Art. 85 CPC: (1) Regra geral: 10% a 20% (contra Fazenda = faixas escalonadas do § 3º); (2) Equidade (§ 8º) só cabe quando proveito inestimável/irrisório ou valor da causa muito baixo — NUNCA em causas milionárias (Tema 1076 STJ); (3) Vedada compensação de honorários (§ 14); (4) Omissão na sentença transitada em julgado permite ação autônoma (§ 18); (5) Majoração recursal até o teto de 20% (§ 11)."
      }
    ],
    "jurisprudence": "STJ Tema 1076",
    "professorTip": "Art. 85 CPC: PROIBIDA compensação de honorários (§ 14)! Sentença omissa = cabe AÇÃO AUTÔNOMA (§ 18)! Causa milionária = NÃO usa equidade, aplica tabela legal (Tema 1076 STJ)!"
  },
  {
    "id": "mig_cpc_006",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Prazos Processuais - Contagem em Dias Úteis, Suspensão (20/12 a 20/01) e Litisconsórcio",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Uma intimação eletrônica de sentença foi disponibilizada no Diário de Justiça Eletrônico em uma sexta-feira (19 de dezembro). Considerando a contagem de prazos em dias úteis e o recesso forense de final de ano previsto no Art. 220 do CPC, quando começa a fluir efetivamente o prazo de 15 dias úteis para apelação?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo processual suspende-se apenas entre 20 de dezembro e 6 de janeiro, voltando a correr em 7 de janeiro."
      },
      {
        "letter": "B",
        "text": "A contagem em dias úteis prevista no Art. 219 do CPC aplica-se também aos prazos materiais de prescrição e decadência previstos no Código Civil."
      },
      {
        "letter": "C",
        "text": "A publicação considera-se realizada no 1º dia útil seguinte à disponibilização (ou após o recesso) e suspende-se o curso do prazo processual nos dias compreendidos entre 20 DE DEZEMBRO e 20 DE JANEIRO, inclusive (Art. 220 CPC), iniciando-se a fluência útil somente a partir do primeiro dia útil após 20 de janeiro (21/01 ou próximo dia útil), excluindo o dia do começo e incluindo o do vencimento (Art. 224)."
      },
      {
        "letter": "D",
        "text": "O ato processual praticado antes do termo inicial do prazo recursal (recurso prematuro) é considerado intempestivo e inadmissível."
      }
    ],
    "correctAnswer": "C",
    "justification": "Contagem de prazos no CPC/15: somente dias úteis para prazos processuais (Art. 219); exclui dia do começo e inclui o do vencimento (Art. 224); ato prematuro é tempestivo (Art. 218, § 4º); férias da advocacia suspendem prazos de 20/12 a 20/01 (Art. 220). Fazenda Pública, MP e Defensoria Pública têm prazo em DOBRO para todas as manifestações, salvo prazo próprio específico em lei (Arts. 180, 183, 186).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 220 do CPC suspende o curso dos prazos processuais de 20 de dezembro a 20 DE JANEIRO, inclusive (32 dias de suspensão de prazos dos advogados!)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 219, parágrafo único, do CPC, a contagem em dias úteis aplica-se SOMENTE aos prazos PROCESSUAIS (prazos materiais como prescrição/decadência contam-se em dias corridos)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 218, § 4º, do CPC (superando a antiga Súmula 418 STJ!), será considerado TEMPESTIVO o ato praticado ANTES do termo inicial do prazo!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 218 a 232 do CPC/2015",
        "textSnippet": "Contagem de prazos no CPC/15: somente dias úteis para prazos processuais (Art. 219); exclui dia do começo e inclui o do vencimento (Art. 224); ato prematuro é tempestivo (Art. 218, § 4º); férias da advocacia suspendem prazos de 20/12 a 20/01 (Art. 220). Fazenda Pública, MP e Defensoria Pública têm prazo em DOBRO para todas as manifestações, salvo prazo próprio específico em lei (Arts. 180, 183, 186)."
      }
    ],
    "professorTip": "CPC: Prazos processuais = dias ÚTEIS (prescrição/decadência = corridos!). Recesso de prazos = 20/dez a 20/jan (Art. 220)! Recurso prematuro = TEMPESTIVO (Art. 218, § 4º)!"
  },
  {
    "id": "mig_cpc_007",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Citação Eletrônica Preferencial e Modalidades de Citação (Lei 14.195/2021)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Após a alteração do Art. 246 do CPC pela Lei nº 14.195/2021, como deve ser realizada preferencialmente a citação nas ações cíveis contra empresas privadas ou cidadãos com endereço eletrônico cadastrado nos bancos de dados do Poder Judiciário, e qual o efeito da ausência injustificada de confirmação do recebimento?",
    "options": [
      {
        "letter": "A",
        "text": "A citação continua sendo realizada obrigatoriamente primeiro por oficial de justiça pessoalmente, sendo proibida a citação inicial por e-mail cadastrado."
      },
      {
        "letter": "B",
        "text": "Se a empresa cadastrada ignorar o e-mail de citação eletrônica sem confirmar em 3 dias úteis, inicia-se automaticamente o prazo da contestação no 4º dia útil gerando revelia imediata."
      },
      {
        "letter": "C",
        "text": "A citação deve ser feita PREFERENCIALMENTE por MEIO ELETRÔNICO, no prazo de até 2 dias úteis contado da decisão que a determinar, pelos endereços eletrônicos indicados pelo citando no banco de dados do Poder Judiciário (Art. 246 CPC); não havendo confirmação de recebimento em até 3 dias úteis, faz-se citação pelo correio/oficial/escrivão/edital, devendo o réu apresentar justa causa na primeira oportunidade sob pena de multa de até 5% do valor da causa por ato atentatório à dignidade da justiça (Art. 246, § 1º-C)."
      },
      {
        "letter": "D",
        "text": "O termo inicial do prazo de contestação na citação por carta com aviso de recebimento (correio) é a data da entrega da carta pelo carteiro ao porteiro."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 246 CPC (Lei 14.195/21): citação preferencial é eletrônica (até 2 dias úteis da decisão); confirmada em até 3 dias úteis, o prazo começa no 5º dia útil seguinte (Art. 231, IX). Não confirmada, cita por correio/oficial e aplica-se multa de até 5% se faltar justa causa para não confirmar. Na citação por carta em condomínio edilício, é válida a entrega ao funcionário da portaria (Art. 248, § 4º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Desde a Lei nº 14.195/2021, a regra geral prioritária do Art. 246 é a citação por MEIO ELETRÔNICO (empresas públicas e privadas, exceto ME/EPP sem cadastro, são obrigadas a manter cadastro nos sistemas de processo eletrônico)."
      },
      {
        "letter": "B",
        "explanation": "Se não houver confirmação em 3 dias úteis, NÃO corre revelia automática — realiza-se a citação pelas formas tradicionais (correio/oficial/etc.), mas a omissão injustificada sujeita o citando à multa de até 5% do valor da causa na primeira manifestação."
      },
      {
        "letter": "D",
        "explanation": "Na citação pelo correio (ou por oficial de justiça), o prazo começa da data de JUNTADA aos autos do aviso de recebimento ou do mandado cumprido (Art. 231, I e II — já na citação eletrônica confirmada conta-se do 5º dia útil seguinte à confirmação, Art. 231, IX!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 246 a 259 do CPC/2015 (Lei 14.195/2021)",
        "textSnippet": "Art. 246 CPC (Lei 14.195/21): citação preferencial é eletrônica (até 2 dias úteis da decisão); confirmada em até 3 dias úteis, o prazo começa no 5º dia útil seguinte (Art. 231, IX). Não confirmada, cita por correio/oficial e aplica-se multa de até 5% se faltar justa causa para não confirmar. Na citação por carta em condomínio edilício, é válida a entrega ao funcionário da portaria (Art. 248, § 4º)."
      }
    ],
    "professorTip": "Lei 14.195/21: Citação preferencial = ELETRÔNICA! Não confirmou em 3 dias úteis = NÃO dá revelia direta, cita pelo correio/oficial e aplica multa de até 5% por falta de justa causa! Porteiro pode assinar AR em condomínio (Art. 248, § 4º)!"
  },
  {
    "id": "mig_cpc_008",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Tutelas Provisórias - Urgência Antecipada Antecedente e Estabilização (Art. 304)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em tutela antecipada requerida em caráter ANTECEDENTE, o autor obteve liminar determinando a realização urgente de cirurgia médica pelo plano de saúde. Devidamente intimado, o plano de saúde cumpriu a medida e NÃO interpôs recurso (agravo de instrumento) contra a decisão concessiva. O autor emendou a inicial e o processo foi extinto. Qual o efeito da estabilização (Art. 304 CPC)?",
    "options": [
      {
        "letter": "A",
        "text": "A tutela estabilizada forma imediatamente coisa julgada material imutável, não podendo jamais ser revista por ação posterior."
      },
      {
        "letter": "B",
        "text": "A tutela cautelar antecedente também se estabiliza automaticamente pelo Art. 304 caso o réu não recorra da liminar de arresto."
      },
      {
        "letter": "C",
        "text": "A tutela antecipada concedida em caráter antecedente torna-se ESTÁVEL se da decisão que a conceder não for interposto o respectivo recurso (agravo de instrumento — e o STJ admite que mera contestação específica impugnando a tutela também impede estabilização em corrente divergente, mas a letra da lei exige o recurso — Art. 304); extinto o processo, a decisão conserva seus efeitos enquanto não revista/reformada/invalidada por ação própria no prazo de 2 ANOS, NÃO fazendo coisa julgada material (Art. 304, § 6º)."
      },
      {
        "letter": "D",
        "text": "Na tutela provisória de evidência fundada em prova documental ou tese firmada em julgamento de casos repetitivos/súmula vinculante (Art. 311, II), o juiz deve exigir demonstração de perigo de dano urgente."
      }
    ],
    "correctAnswer": "C",
    "justification": "Tutelas provisórias (Arts. 294–311 CPC): (1) Urgência (probabilidade do direito + perigo de dano/risco): Cautelar (assegura resultado útil; se antecedente, formula pedido principal em 30 dias da efetivação) ou Antecipada (satisfaz direito; se antecedente, adita em 15 dias; estabiliza se sem recurso — Art. 304 — prazo de 2 anos para ação revisional, SEM coisa julgada). (2) Evidência (Art. 311): independe de urgência!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 304, § 6º, dispõe expressamente que a decisão que concede a tutela NÃO fará coisa julgada, mas a estabilidade só será afastada por decisão que a revir/reformar/invalidar em ação própria (com prazo de 2 ANOS para ajuizamento — § 5º)."
      },
      {
        "letter": "B",
        "explanation": "A estabilização do Art. 304 aplica-se APENAS à tutela ANTECIPADA (satisfativa) antecedente, NÃO à tutela cautelar antecedente."
      },
      {
        "letter": "D",
        "explanation": "A tutela da EVIDÊNCIA (Art. 311) INDEPENDE da demonstração de perigo de dano ou de risco ao resultado útil do processo (e nas hipóteses II e III admite liminar antes mesmo de ouvir a parte contrária!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 294 a 311 do CPC/2015",
        "textSnippet": "Tutelas provisórias (Arts. 294–311 CPC): (1) Urgência (probabilidade do direito + perigo de dano/risco): Cautelar (assegura resultado útil; se antecedente, formula pedido principal em 30 dias da efetivação) ou Antecipada (satisfaz direito; se antecedente, adita em 15 dias; estabiliza se sem recurso — Art. 304 — prazo de 2 anos para ação revisional, SEM coisa julgada). (2) Evidência (Art. 311): independe de urgência!"
      }
    ],
    "professorTip": "Estabilização (Art. 304): SÓ na tutela ANTECIPADA antecedente! Sem recurso = processo extinto + fica estável, mas SEM coisa julgada (2 anos para ação de revisão)! Tutela de EVIDÊNCIA (Art. 311) = SEM urgência (II e III cabem liminar sem ouvir o réu)!"
  },
  {
    "id": "mig_cpc_009",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Petição Inicial, Indeferimento, Improcedência Liminar do Pedido e Emenda",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Ao receber petição inicial em causa que dispensa fase instrutória, o juiz verificou de plano que o pedido do autor contraria frontalmente súmula do STJ e enunciado de súmula de Tribunal de Justiça local sobre direito local, além de faltar cópia da procuração do advogado. Antes de extinguir ou julgar, como o CPC ordena ao juiz proceder em cada situação?",
    "options": [
      {
        "letter": "A",
        "text": "O juiz pode indeferir de plano a petição inicial sem oportunidade prévia de emenda sempre que faltar documento indispensável à propositura."
      },
      {
        "letter": "B",
        "text": "Na improcedência liminar do pedido (Art. 332), o processo é extinto SEM resolução de mérito por inépcia da inicial."
      },
      {
        "letter": "C",
        "text": "Quanto à ausência de procuração/defeito sanável na inicial, o juiz DEVE determinar que o autor a emende ou complete no prazo de 15 DIAS, indicando com precisão o que deve ser corrigido (Art. 321 — não pode indeferir de plano sem oportunidade de emenda); quanto ao pedido que contraria enunciado de súmula do STF ou STJ (ou acórdão em repetitivo/IRDR/IAC/súmula de TJ sobre direito local), o juiz pode julgar LIMINARMENTE IMPROCEDENTE o pedido independentemente de citação do réu (Art. 332 — com resolução de mérito!)."
      },
      {
        "letter": "D",
        "text": "Contra a sentença de indeferimento da petição inicial ou de improcedência liminar do pedido, caso o autor apele, o juiz não pode exercer juízo de retratação."
      }
    ],
    "correctAnswer": "C",
    "justification": "Arts. 321, 330–332 CPC: Emenda obrigatória da inicial em 15 dias indicando precisão do vício (Art. 321). Indeferimento da inicial (Art. 330 — sem mérito) e Improcedência liminar do pedido (Art. 332 — COM mérito: contraria súmula STF/STJ, repetitivo, IRDR/IAC, súmula TJ sobre direito local, ou prescrição/decadência). Em ambos, interposta apelação, cabe retratação em 5 dias (se não retratar no Art. 332, cita o réu para contrarrazões).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 321 do CPC impõe oportunidade obrigatória de emenda em 15 dias, especificando com precisão o defeito a ser sanado."
      },
      {
        "letter": "B",
        "explanation": "O Art. 332 julga IMPROCEDENTE o pedido (sentença COM resolução de mérito — Art. 487, I), formando coisa julgada material se não apelada; inclusive quando o juiz verificar desde logo decadência ou prescrição (Art. 332, § 1º)."
      },
      {
        "letter": "D",
        "explanation": "Tanto no indeferimento da inicial (Art. 331) quanto na improcedência liminar do pedido (Art. 332, § 3º), interposta APELAÇÃO pelo autor, o juiz terá o prazo de 5 DIAS para se RETRATAR!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 319 a 332 do CPC/2015",
        "textSnippet": "Arts. 321, 330–332 CPC: Emenda obrigatória da inicial em 15 dias indicando precisão do vício (Art. 321). Indeferimento da inicial (Art. 330 — sem mérito) e Improcedência liminar do pedido (Art. 332 — COM mérito: contraria súmula STF/STJ, repetitivo, IRDR/IAC, súmula TJ sobre direito local, ou prescrição/decadência). Em ambos, interposta apelação, cabe retratação em 5 dias (se não retratar no Art. 332, cita o réu para contrarrazões)."
      }
    ],
    "professorTip": "Art. 321: emenda em 15 dias dizendo exatamente o defeito! Art. 332 (Improcedência liminar — COM mérito!): contraria súmula STF/STJ, repetitivo, IRDR, súmula TJ (direito local) ou prescrição/decadência! Apelação contra Art. 331 ou 332 = juiz tem 5 dias para retratar!"
  },
  {
    "id": "mig_cpc_010",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Audiência de Conciliação/Mediação, Contestação, Reconvenção e Revelia",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Designada audiência de conciliação/mediação (Art. 334 CPC), apenas o réu peticionou com 10 dias de antecedência manifestando desinteresse na autocomposição, enquanto o autor nada disse (ou compareceu). No dia da audiência, o autor não compareceu injustificadamente nem enviou preposto com procuração. Além disso, o réu pretende formular reconvenção na contestação. Qual o efeito de cada fato?",
    "options": [
      {
        "letter": "A",
        "text": "Basta a petição unilateral do réu com 10 dias de antecedência manifestando desinteresse para o juiz cancelar obrigatoriamente a audiência do Art. 334."
      },
      {
        "letter": "B",
        "text": "A audiência de conciliação/mediação só NÃO se realiza se AMBAS as partes manifestarem expressamente desinteresse na autocomposição (Art. 334, § 4º, I — logo, só o réu dizendo não, a audiência se mantém!); a ausência injustificada de qualquer das partes (autor ou réu) à audiência é considerada ato atentatório à dignidade da justiça, sancionada com multa de até 2% da vantagem econômica pretendida ou do valor da causa em favor da União/Estado (Art. 334, § 8º); e a RECONVENÇÃO é proposta na própria peça da CONTESTAÇÃO (Art. 343 CPC), podendo inclusive ampliar subjetivamente para incluir terceiro em litisconsórcio (§§ 3º e 4º)."
      },
      {
        "letter": "C",
        "text": "Se o réu faltar injustificadamente à audiência de conciliação/mediação do Art. 334, decretar-se-á imediatamente sua revelia."
      },
      {
        "letter": "D",
        "text": "Se o autor desistir da ação após apresentada contestação com reconvenção, a reconvenção fica automaticamente extinta por depender da ação principal."
      }
    ],
    "correctAnswer": "B",
    "justification": "Audiência do Art. 334: só cancela se AMBAS as partes recusarem (ou se não couber autocomposição); ausência injustificada = multa de até 2% pro Estado/União (não gera revelia!). Reconvenção (Art. 343): vai dentro da contestação; independe de contestar o pedido principal (§ 6º); não morre se o autor desistir da principal (§ 2º); admite incluir terceiro ou ser proposta em face de substituto processual.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 334, § 4º, I, exige manifestação expressa de AMBAS as partes (autor na inicial E réu até 10 dias antes) para dispensar a audiência (salvo direito que não admita autocomposição)."
      },
      {
        "letter": "C",
        "explanation": "A ausência à audiência do Art. 334 NÃO gera revelia — gera apenas multa de até 2% por ato atentatório à dignidade da justiça (a revelia decorre apenas da falta de contestação no prazo de 15 dias — Art. 344)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 343, § 2º, do CPC, a desistência da ação ou a ocorrência de causa extintiva que impeça o exame de seu mérito NÃO obsta ao prosseguimento do processo quanto à reconvenção!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 334 a 346 do CPC/2015",
        "textSnippet": "Audiência do Art. 334: só cancela se AMBAS as partes recusarem (ou se não couber autocomposição); ausência injustificada = multa de até 2% pro Estado/União (não gera revelia!). Reconvenção (Art. 343): vai dentro da contestação; independe de contestar o pedido principal (§ 6º); não morre se o autor desistir da principal (§ 2º); admite incluir terceiro ou ser proposta em face de substituto processual."
      }
    ],
    "professorTip": "Audiência Art. 334: só cancela se OS DOIS recusarem! Faltou = multa até 2% (NÃO é revelia)! Reconvenção vai DENTRO da contestação e NÃO extingue se o autor desistir da ação!"
  },
  {
    "id": "mig_cpc_011",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Julgamento Antecipado Parcial de Mérito e Saneamento Compartilhado",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em ação com dois pedidos cumulados (indenização por dano material incontroverso já documentado e dano estético dependente de perícia médica complexa), o juiz proferiu decisão reconhecendo desde logo a procedência do pedido de dano material incontroverso e determinou realização de perícia para o dano estético, além de fixar os pontos controvertidos em saneamento. Qual recurso cabe contra o julgamento antecipado parcial do mérito?",
    "options": [
      {
        "letter": "A",
        "text": "Cabe recurso de apelação imediata porque resolveu o mérito de um dos pedidos."
      },
      {
        "letter": "B",
        "text": "Cabe AGRAVO DE INSTRUMENTO contra a decisão que julga antecipadamente parte do mérito (Art. 356, § 5º, c/c Art. 1.015, II, CPC — trata-se de decisão interlocutória de mérito!), a qual transita em julgado autonomamente e admite cumprimento definitivo de sentença em autos suplementares se não recorrida (Art. 356, § 3º)."
      },
      {
        "letter": "C",
        "text": "Não se admite cumprimento provisório da decisão de julgamento antecipado parcial de mérito mesmo havendo interposição de recurso sem efeito suspensivo."
      },
      {
        "letter": "D",
        "text": "Após a decisão de saneamento e organização do processo (Art. 357), as partes têm prazo preclusivo de 15 dias para pedir esclarecimentos ou ajustes."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 356–357 CPC: Julgamento antecipado parcial do mérito (Art. 356 — pedido incontroverso ou maduro): decisão interlocutória de mérito recorrível por Agravo de Instrumento (§ 5º), executável provisoriamente sem caução (§ 2º) ou definitivamente após trânsito em julgado autônomo (§ 3º). Saneamento (Art. 357): prazo comum de 5 dias para esclarecimentos/ajustes (§ 1º); rol de testemunhas até 15 dias da intimação (§ 4º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Como o processo prossegue quanto ao outro pedido em 1º grau, a decisão de julgamento antecipado parcial de mérito (Art. 356) é interlocutória de mérito impugnável por AGRAVO DE INSTRUMENTO (Art. 356, § 5º)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 356, § 2º, a parte poderá liquidar ou executar desde logo a obrigação reconhecida na decisão parcial de mérito, INDEPENDENTEMENTE de caução, ainda que haja recurso interposto."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 357, § 1º, realizado o saneamento, as partes têm o direito de pedir esclarecimentos ou solicitar ajustes no prazo comum de 5 DIAS, findo o qual a decisão se torna estável."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 354 a 357 do CPC/2015",
        "textSnippet": "Arts. 356–357 CPC: Julgamento antecipado parcial do mérito (Art. 356 — pedido incontroverso ou maduro): decisão interlocutória de mérito recorrível por Agravo de Instrumento (§ 5º), executável provisoriamente sem caução (§ 2º) ou definitivamente após trânsito em julgado autônomo (§ 3º). Saneamento (Art. 357): prazo comum de 5 dias para esclarecimentos/ajustes (§ 1º); rol de testemunhas até 15 dias da intimação (§ 4º)."
      }
    ],
    "professorTip": "Julgamento antecipado PARCIAL de mérito (Art. 356): recorre por AGRAVO DE INSTRUMENTO + executa provisoriamente SEM caução! Saneamento (Art. 357): 5 dias para ajustes e 15 dias para rol de testemunhas!"
  },
  {
    "id": "mig_cpc_012",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Processual Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Provas no CPC - Distribuição Dinâmica do Ônus da Prova, Ata Notarial e Prova Emprestada",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Em demanda ambiental complexa contra grande indústria química, o juiz verificou ser impossível ou excessivamente difícil ao morador autor produzir prova técnica dos poluentes internos da fábrica, enquanto a indústria detinha todos os registros químicos laboratoriais. Decidiu então inverter/redistribuir dinamicamente o ônus da prova na decisão de saneamento. Quais os requisitos dessa redistribuição e da prova emprestada?",
    "options": [
      {
        "letter": "A",
        "text": "O juiz pode aplicar a distribuição dinâmica do ônus da prova apenas no momento de proferir a sentença de mérito, surpreendendo a parte vencida."
      },
      {
        "letter": "B",
        "text": "A distribuição dinâmica do ônus da prova (Art. 373, § 1º, CPC) exige DECISÃO FUNDAMENTADA do juiz nos casos previstos em lei ou diante de peculiaridades da causa ligadas à impossibilidade/excessiva dificuldade ou à maior facilidade de obtenção da prova, NÃO podendo gerar situação em que a desincumbência do encargo pela parte seja impossível ou excessivamente difícil (\"prova diabólica\" — § 2º), devendo oportunizar à parte desincumbir-se do ônus; já a prova emprestada de outro processo é admitida pelo Art. 372, desde que observado o CONTRADITÓRIO."
      },
      {
        "letter": "C",
        "text": "A prova emprestada só pode ser utilizada no processo cível se todas as partes do segundo processo tiverem participado exatamente do primeiro processo de origem."
      },
      {
        "letter": "D",
        "text": "A ata notarial lavrada por tabelião não possui força probatória quanto a imagens e mensagens exibidas em páginas eletrônicas da internet."
      }
    ],
    "correctAnswer": "B",
    "justification": "Teoria da Prova no CPC/15: Ônus estático (Art. 373, I e II) x Distribuição Dinâmica (Art. 373, § 1º — decisão fundamentada com reabertura probatória, vedada prova diabólica reversa — § 2º). Prova emprestada (Art. 372) = livre admissão pelo juiz, observado o contraditório. Ata notarial (Art. 384) = documenta inclusive conteúdos eletrônicos/digitais.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Para evitar decisão surpresa (Art. 10) e assegurar o exercício probatório (Art. 373, § 1º), a redistribuição dinâmica deve ser proferida preferencialmente no saneamento (ou antes de sentenciar), dando à parte a oportunidade de produzir a prova."
      },
      {
        "letter": "C",
        "explanation": "Segundo jurisprudência consolidada do STJ (EREsp 617.428) e Art. 372 CPC, admite-se prova emprestada inclusive de processos envolvendo partes diversas (ou processo penal), desde que garantido o CONTRADITÓRIO no processo de destino."
      },
      {
        "letter": "D",
        "explanation": "O Art. 384 do CPC consagrou expressamente a ATA NOTARIAL como meio típico de prova para atestar a existência e o modo de existir de algum fato, incluindo dados representados por imagem ou som gravados em arquivos eletrônicos."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 369 a 385 do CPC/2015",
        "textSnippet": "Teoria da Prova no CPC/15: Ônus estático (Art. 373, I e II) x Distribuição Dinâmica (Art. 373, § 1º — decisão fundamentada com reabertura probatória, vedada prova diabólica reversa — § 2º). Prova emprestada (Art. 372) = livre admissão pelo juiz, observado o contraditório. Ata notarial (Art. 384) = documenta inclusive conteúdos eletrônicos/digitais."
      }
    ],
    "professorTip": "Distribuição dinâmica do ônus da prova (Art. 373, § 1º): decisão fundamentada + abre prazo pra parte provar + PROIBIDA prova diabólica! Prova emprestada (Art. 372): vale com CONTRADITÓRIO!"
  },
  {
    "id": "mig_cpc_013",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Coisa Julgada, Limites Objetivos/Subjetivos e Questão Prejudicial Incidental",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Em ação de cobrança de aluguel, o réu alegou em contestação a falsidade/nulidade do contrato locatício como questão prejudicial incidental ao julgamento do mérito. O juiz analisou expressamente essa questão prejudicial na fundamentação e julgou o mérito, havendo contraditório prévio efetivo e competência absoluta do juízo. A resolução dessa questão prejudicial incidental faz coisa julgada material no CPC/2015?",
    "options": [
      {
        "letter": "A",
        "text": "No CPC/2015, os motivos e questões prejudiciais incidentais decididos na fundamentação nunca fazem coisa julgada sem ação declaratória incidental autônoma."
      },
      {
        "letter": "B",
        "text": "Sim, pois o Art. 503, § 1º, do CPC/2015 estendeu a autoridade da COISA JULGADA à resolução de questão prejudicial decidida expressa e incidentemente no processo (dispensando antiga ação declaratória incidental!), DESDE QUE: (1) dela dependa o julgamento do mérito; (2) a seu respeito tiver havido contraditório prévio e efetivo (NÃO se aplicando em caso de revelia!); e (3) o juízo tiver competência em razão da matéria e da pessoa para resolvê-la como questão principal."
      },
      {
        "letter": "C",
        "text": "Mesmo que o réu seja revel e não tenha participado do contraditório efetivo, a questão prejudicial incidental forma coisa julgada material pelo Art. 503, § 1º."
      },
      {
        "letter": "D",
        "text": "A coisa julgada formada em ação individual prejudica terceiros estranhos ao processo se a decisão lhes for desfavorável."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 503, § 1º, CPC: questão prejudicial incidental faz coisa julgada se: (I) mérito depender dela; (II) contraditório prévio e efetivo (NÃO vale na revelia!); (III) juízo competente em razão da matéria/pessoa (e sem restrição probatória/cognição sumária — § 2º). Pelo Art. 506, coisa julgada não prejudica terceiros. Pelo Art. 508, eficácia preclusiva da coisa julgada cobre o deduzido e o dedutível.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O CPC/2015 aboliu a antiga ação declaratória incidental do CPC/73 exatamente porque o Art. 503, § 1º, passou a cobrir com coisa julgada a questão prejudicial incidental cumpridos os três requisitos legais."
      },
      {
        "letter": "C",
        "explanation": "O inciso II do Art. 503, § 1º, veda expressamente a formação de coisa julgada sobre a questão prejudicial em caso de REVELIA (exige contraditório prévio e efetivo!)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 506 do CPC/2015, a sentença faz coisa julgada às partes entre as quais é dada, NÃO prejudicando terceiros (a expressão \"nem beneficiando\" do CPC/73 foi suprimida, admitindo-se benefício a terceiros em certas hipóteses, mas jamais prejuízo!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 502 a 508 do CPC/2015",
        "textSnippet": "Art. 503, § 1º, CPC: questão prejudicial incidental faz coisa julgada se: (I) mérito depender dela; (II) contraditório prévio e efetivo (NÃO vale na revelia!); (III) juízo competente em razão da matéria/pessoa (e sem restrição probatória/cognição sumária — § 2º). Pelo Art. 506, coisa julgada não prejudica terceiros. Pelo Art. 508, eficácia preclusiva da coisa julgada cobre o deduzido e o dedutível."
      }
    ],
    "professorTip": "Art. 503, § 1º CPC: Questão prejudicial incidental FAZ COISA JULGADA se: mérito depende + contraditório efetivo (SEM revelia!) + juízo competente! Art. 506: coisa julgada NÃO prejudica terceiros!"
  },
  {
    "id": "mig_cpc_014",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Cumprimento de Sentença - Multa de 10%, Honorários e Impugnação",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Transitada em julgado sentença condenatória de quantia certa líquida, o exequente iniciou cumprimento definitivo de sentença e o devedor (com advogado constituído nos autos) foi intimado pelo Diário de Justiça Eletrônico para pagar em 15 dias úteis. O devedor não efetuou o pagamento no prazo de 15 dias, apresentando impugnação apenas 10 dias depois do término do prazo de pagamento sem garantir o juízo. Quais as consequências?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo de 15 dias úteis para impugnação ao cumprimento de sentença somente se inicia após a efetiva realização da penhora e garantia integral do juízo."
      },
      {
        "letter": "B",
        "text": "Não ocorrendo pagamento voluntário no prazo de 15 dias úteis, o débito será acrescido de MULTA DE 10% E TAMBÉM de HONORÁRIOS ADVOCATÍCIOS DE 10% (Art. 523, § 1º, CPC); além disso, transcorrido o prazo de 15 dias para pagamento voluntário, inicia-se AUTOMATICAMENTE (independentemente de nova intimação ou penhora/garantia!) o prazo subsequente de 15 dias úteis para o executado apresentar IMPUGNAÇÃO ao cumprimento de sentença nos próprios autos (Art. 525 CPC)."
      },
      {
        "letter": "C",
        "text": "Se o executado depositar tempestivamente a quantia nos 15 dias apenas para discutir o valor em impugnação (sem liberar o levantamento ao credor), ainda assim afasta a multa e os honorários de 10%."
      },
      {
        "letter": "D",
        "text": "Contra o cumprimento provisório de sentença pendente de recurso sem efeito suspensivo nunca incidem multa nem honorários de 10% mesmo após 15 dias sem pagamento."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 523–525 CPC: 15 dias úteis para pagar voluntariamente (conta da intimação do advogado; se sem advogado/revel sem procurador, intima por carta — Art. 513, § 2º). Não pagou = +10% multa + 10% honorários (inclusive no cumprimento provisório!). Logo após os 15 dias, correm automaticamente outros 15 dias para IMPUGNAÇÃO (sem exigir garantia/penhora, e sem efeito suspensivo automático — Art. 525, § 6º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No CPC/2015 (Art. 525, caput), a impugnação NÃO exige penhora nem garantia do juízo — seu prazo de 15 dias inicia-se automaticamente ao término do prazo de 15 dias do pagamento voluntário (independentemente de nova intimação!)."
      },
      {
        "letter": "C",
        "explanation": "Conforme jurisprudência consolidada do STJ (REsp 1.834.337 / Tema), o depósito efetuado apenas a título de GARANTIA do juízo para impugnar (condicionando ao não levantamento) NÃO afasta a incidência da multa e dos honorários de 10% do Art. 523, § 1º — só o pagamento efetivo com liberação afasta!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 520, § 2º, do CPC (e Tema 679 STJ), a multa e os honorários de 10% do Art. 523, § 1º, INCIDEM também no cumprimento PROVISÓRIO de sentença caso não haja pagamento ou depósito no prazo de 15 dias!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 523 a 527 do CPC/2015",
        "textSnippet": "Arts. 523–525 CPC: 15 dias úteis para pagar voluntariamente (conta da intimação do advogado; se sem advogado/revel sem procurador, intima por carta — Art. 513, § 2º). Não pagou = +10% multa + 10% honorários (inclusive no cumprimento provisório!). Logo após os 15 dias, correm automaticamente outros 15 dias para IMPUGNAÇÃO (sem exigir garantia/penhora, e sem efeito suspensivo automático — Art. 525, § 6º)."
      }
    ],
    "professorTip": "Cumprimento de sentença: 15d pagamento (se não paga: +10% multa + 10% honorários — inclusive no provisório!). Depois: +15d automáticos para IMPUGNAÇÃO (SEM precisar de penhora ou nova intimação)! Depositar só pra garantir sem deixar sacar NÃO livra da multa!"
  },
  {
    "id": "mig_cpc_015",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Execução de Título Extrajudicial - Títulos Executivos, Penhora e Embargos",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Credor portador de contrato particular assinado pelo devedor e por DUAS TESTEMUNHAS (ou assinado eletronicamente nos termos da Lei nº 14.620/2023 que inseriu o § 4º no Art. 784 CPC dispensando testemunhas!) ajuizou execução extrajudicial. Citado por oficial de justiça, o executado pretende opor Embargos à Execução sem oferecer bens à penhora, e o juiz ordenou bloqueio de R$ 20.000,00 em caderneta de poupança do devedor. Avalie:",
    "options": [
      {
        "letter": "A",
        "text": "Os embargos à execução de título extrajudicial exigem prévia penhora ou depósito garantidor como condição de admissibilidade no CPC/2015."
      },
      {
        "letter": "B",
        "text": "O contrato particular com 2 testemunhas (ou título eletrônico com integridade conferida por qualquer modalidade de assinatura eletrônica prevista em lei — Art. 784, § 4º, Lei 14.620/23) é título executivo extrajudicial válido; os EMBARGOS À EXECUÇÃO independem de penhora, depósito ou caução (Art. 914 — prazo de 15 dias da juntada do mandado de citação), embora não tenham efeito suspensivo sem garantia; e a quantia depositada em caderneta de poupança ATÉ O LIMITE DE 40 SALÁRIOS MÍNIMOS é IMPENHORÁVEL (Art. 833, X, CPC — estendido pelo STJ a conta corrente/aplicações financeiras até 40 SM, salvo abuso ou alimentos!)."
      },
      {
        "letter": "C",
        "text": "São absolutamente impenhoráveis salários, proventos de aposentadoria e poupança até 40 salários mínimos até mesmo para pagamento de prestação alimentícia ou quando superiores a 50 salários mínimos."
      },
      {
        "letter": "D",
        "text": "Os contratos particulares constituídos de forma eletrônica sempre exigem assinatura de duas testemunhas físicas sob pena de nulidade executiva."
      }
    ],
    "correctAnswer": "B",
    "justification": "Execução Extrajudicial no CPC: Art. 784, § 4º (Lei 14.620/23) = título eletrônico com assinatura eletrônica válida DISPENSA testemunhas! Embargos à Execução (Arts. 914–919): 15 dias da citação juntada (Art. 915), INDEPENDEM de penhora/caução (só precisa garantia para pedir efeito suspensivo!). Penhora de poupança/conta = impenhorável até 40 SM (salvo alimentos e abuso/má-fé).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 914 do CPC dispensa garantia do juízo para opor embargos à execução (garantia do juízo é exigida apenas para obter EFEITO SUSPENSIVO nos embargos — Art. 919, § 1º!)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 833, § 2º, do CPC, a impenhorabilidade de salários/aposentadorias/poupança até 40 SM NÃO se aplica à hipótese de penhora para pagamento de PRESTAÇÃO ALIMENTÍCIA (independentemente de sua origem), nem às importâncias excedentes a 50 salários mínimos mensais (e o STJ ainda mitiga a regra em dívidas comuns se preservar a subsistência digna — EREsp 1.582.475!)."
      },
      {
        "letter": "D",
        "explanation": "A Lei nº 14.620/2023 incluiu o § 4º no Art. 784 do CPC DISPENSANDO expressamente as testemunhas nos títulos executivos constituídos ou atestados por meio eletrônico cuja integridade seja conferida por provedor de assinatura!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 784, 833, 854 e 914 a 919 do CPC/2015",
        "textSnippet": "Execução Extrajudicial no CPC: Art. 784, § 4º (Lei 14.620/23) = título eletrônico com assinatura eletrônica válida DISPENSA testemunhas! Embargos à Execução (Arts. 914–919): 15 dias da citação juntada (Art. 915), INDEPENDEM de penhora/caução (só precisa garantia para pedir efeito suspensivo!). Penhora de poupança/conta = impenhorável até 40 SM (salvo alimentos e abuso/má-fé)."
      }
    ],
    "professorTip": "Embargos à Execução: 15 dias + SEM exigir penhora (só exige garantia se pedir efeito suspensivo!). Título eletrônico (Lei 14.620/23) = DISPENSA testemunhas! Poupança até 40 SM = impenhorável (salvo pensão alimentícia!)."
  },
  {
    "id": "mig_cpc_016",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Procedimentos Especiais - Ações Possessórias (Força Nova vs. Velha e Fungibilidade)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um proprietário teve sua chácara invadida por terceiros há 3 meses e 10 dias. Ele ajuizou ação de reintegração de posse pedindo liminar de desocupação sem oitiva prévia dos réus, mas no curso do processo os réus o agrediram novamente ameaçando outro lote vizinho, e um terceiro proprietário ajuizou manutenção de posse quando na verdade já havia perdido a posse integralmente (esbulho). Como o CPC disciplina esses pontos?",
    "options": [
      {
        "letter": "A",
        "text": "Na ação possessória de força nova (menos de ano e dia), o juiz só pode deferir a liminar de reintegração se o autor demonstrar urgência grave e prestar caução real obrigatória."
      },
      {
        "letter": "B",
        "text": "Como o esbulho ocorreu há menos de ano e dia (3 meses e 10 dias), trata-se de ação possessória de FORÇA NOVA (procedimento especial com direito à liminar possessória — Art. 558 e 562 CPC — se provada posse anterior, esbulho e data de < ano e dia, sem exigir urgência/perigo de dano!); ademais, vigora a FUNGIBILIDADE das possessórias (Art. 554 — propor manutenção quando houve esbulho não impede o juiz de conceder reintegração) e o CARÁTER DÚPLICE (Art. 556 — réu pode pedir proteção possessória e indenização na própria contestação, sem reconvenção)."
      },
      {
        "letter": "C",
        "text": "Proposta ação de reintegração de posse contra grande número de ocupantes desconhecidos (litígio coletivo pela posse há mais de ano e dia), o juiz pode decretar despejo liminar sem audiência nem oitiva do MP."
      },
      {
        "letter": "D",
        "text": "Em ação possessória em trâmite, é perfeitamente lícito ao réu ajuizar simultaneamente ação reivindicatória discutindo o domínio sobre o mesmo imóvel."
      }
    ],
    "correctAnswer": "B",
    "justification": "Ações Possessórias (Arts. 554–568 CPC): Interdito Proibitório (ameaça), Manutenção (turbação), Reintegração (esbulho). Características: Fungibilidade (Art. 554); Caráter Dúplice (Art. 556 — réu pede proteção/indenização na contestação); Proibição de exceção de domínio durante possessória (Art. 557); Força Nova (< ano e dia = rito especial com liminar do Art. 562) vs. Força Velha (>= ano e dia = procedimento comum, só tutela provisória do Art. 300; se coletivo, audiência de mediação obrigatória do Art. 565).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A liminar possessória de força nova do Art. 562 é uma tutela de evidência especial que exige apenas prova dos requisitos do Art. 561 (posse, turbação/esbulho, data < ano e dia e perda/continuação da posse), sem exigir perigo de dano urgente."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 565 do CPC, no litígio coletivo pela posse de imóvel de FORÇA VELHA (esbulho há mais de ano e dia), o juiz deverá designar obrigatoriamente AUDIÊNCIA DE MEDIAÇÃO antes de apreciar liminar (com intimação do MP e da Defensoria Pública se houver hipossuficientes)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 557 do CPC, na pendência de ação possessória é VEDADO, tanto ao autor quanto ao réu, propor ação de reconhecimento do domínio (salvo contra terceira pessoa)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 554 a 568 do CPC/2015",
        "textSnippet": "Ações Possessórias (Arts. 554–568 CPC): Interdito Proibitório (ameaça), Manutenção (turbação), Reintegração (esbulho). Características: Fungibilidade (Art. 554); Caráter Dúplice (Art. 556 — réu pede proteção/indenização na contestação); Proibição de exceção de domínio durante possessória (Art. 557); Força Nova (< ano e dia = rito especial com liminar do Art. 562) vs. Força Velha (>= ano e dia = procedimento comum, só tutela provisória do Art. 300; se coletivo, audiência de mediação obrigatória do Art. 565)."
      }
    ],
    "professorTip": "Possessórias: Fungíveis (Art. 554) + Dúplices (pedido contraposto na contestação — Art. 556)! < 1 ano e 1 dia = Força Nova (liminar fácil sem provar urgência)! >= 1 ano e 1 dia = Força Velha (rito comum; se coletivo, audiência obrigatória Art. 565)!"
  },
  {
    "id": "mig_cpc_017",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Ação Monitória vs. Consignação em Pagamento e Embargos de Terceiro",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Portador de cheque prescrito há 2 anos (que perdeu força executiva) ajuizou Ação Monitória para cobrança do valor em face do emitente, que foi citado e pretende se defender sem pagar custas iniciais de embargos. Em outro caso, o cônjuge meeiro teve imóvel comum penhorado em execução por dívida exclusiva do outro cônjuge que não beneficiou a família. Qual defesa cabe ao meeiro e qual a regra da monitória?",
    "options": [
      {
        "letter": "A",
        "text": "A ação monitória contra a Fazenda Pública é absolutamente proibida pelo CPC/2015."
      },
      {
        "letter": "B",
        "text": "A ação monitória admite prova escrita SEM eficácia de título executivo (como cheque prescrito — Súmula 299 e 503 STJ, sendo desnecessário provar a causa debendi na inicial — Súmula 531 STJ), e os EMBARGOS MONITÓRIOS independem de prévia segurança do juízo (Art. 702 CPC — prazo de 15 dias, suspendendo a eficácia da decisão inicial); já o cônjuge meeiro para defender sua meação ou bem próprio deve opor EMBARGOS DE TERCEIRO (Art. 674, § 2º, I, CPC e Súmula 134 STJ)."
      },
      {
        "letter": "C",
        "text": "Nos embargos monitórios opostos por cheque prescrito, o autor da monitória tem obrigação de descrever na petição inicial o negócio jurídico subjacente (causa debendi)."
      },
      {
        "letter": "D",
        "text": "Os embargos de terceiro podem ser opostos até 1 ano após a arrematação ou adjudicação transitada em julgado em qualquer fase."
      }
    ],
    "correctAnswer": "B",
    "justification": "Ação Monitória (Arts. 700–702 CPC): cabe com prova escrita sem força executiva (cheque prescrito em até 5 anos — Súmulas 299, 503 e 531 STJ) e cabe contra Fazenda Pública (Art. 700, § 6º e Súmula 339 STJ). Embargos monitórios: 15 dias sem garantia do juízo. Embargos de Terceiro (Arts. 674–681): protege possuidor/proprietário/meeiro estranho à execução (Súm. 84 STJ protege promitente comprador mesmo sem registro!), até 5 dias após arrematação mas antes da assinatura da carta.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 700, § 6º, do CPC e Súmula 339 do STJ, É CABÍVEL ação monitória em face da Fazenda Pública!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 531 do STJ, em ação monitória fundada em cheque prescrito, ajuizada em face do emitente, é DISPENSÁVEL a menção ao negócio jurídico subjacente à emissão da cártula (prazo prescricional de 5 anos do Art. 206, § 5º, I, CC — Súmula 503 STJ!)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 675 do CPC, os embargos de terceiro podem ser opostos a qualquer tempo no processo de conhecimento enquanto não transitada em julgado a sentença e, no cumprimento de sentença/execução, até 5 DIAS DEPOIS da adjudicação, da alienação por iniciativa particular ou da arrematação, mas sempre ANTES da assinatura da respectiva carta!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 539, 674 e 700 a 702 do CPC/2015",
        "textSnippet": "Ação Monitória (Arts. 700–702 CPC): cabe com prova escrita sem força executiva (cheque prescrito em até 5 anos — Súmulas 299, 503 e 531 STJ) e cabe contra Fazenda Pública (Art. 700, § 6º e Súmula 339 STJ). Embargos monitórios: 15 dias sem garantia do juízo. Embargos de Terceiro (Arts. 674–681): protege possuidor/proprietário/meeiro estranho à execução (Súm. 84 STJ protege promitente comprador mesmo sem registro!), até 5 dias após arrematação mas antes da assinatura da carta."
      }
    ],
    "jurisprudence": "Súmulas 84, 134, 299, 339, 503 e 531 do STJ",
    "professorTip": "Monitória: cabe contra Fazenda (Súm. 339 STJ)! Cheque prescrito = 5 anos (Súm. 503 STJ) sem precisar dizer a causa (Súm. 531 STJ)! Embargos de Terceiro: até 5 dias após arrematação e ANTES de assinar a carta (Súm. 84 STJ protege compromisso não registrado)!"
  },
  {
    "id": "mig_cpc_018",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Sistema Recursal - Agravo de Instrumento e Taxatividade Mitigada (Tema 988 STJ)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Durante fase de conhecimento cível, o juiz indeferiu a oitiva de testemunha essencial (ou proferiu decisão sobre incompetência territorial relativa), hipótese que não consta literalmente nos incisos do Art. 1.015 do CPC. A parte pretende recorrer imediatamente por agravo de instrumento alegando risco de inutilidade da espera até a apelação. Como decidiu o STJ no Tema 988?",
    "options": [
      {
        "letter": "A",
        "text": "O rol do Art. 1.015 do CPC é absolutamente taxativo e inflexível, não admitindo agravo de instrumento fora de seus incisos em hipótese alguma."
      },
      {
        "letter": "B",
        "text": "O STJ no Tema 988 (REsp 1.704.520) fixou a tese da TAXATIVIDADE MITIGADA do rol do Art. 1.015 do CPC: o rol não é absolutamente fechado nem puramente exemplificativo, admitindo a interposição de AGRAVO DE INSTRUMENTO quando verificada a URGÊNCIA decorrente da inutilidade do julgamento da questão no recurso de apelação."
      },
      {
        "letter": "C",
        "text": "Se uma questão interlocutória não agravável não for impugnada de imediato em agravo de instrumento, opera-se preclusão imediata que impede sua discussão em preliminar de apelação."
      },
      {
        "letter": "D",
        "text": "Contra decisão interlocutória que rejeita ou acolhe a alegação de convenção de arbitragem NÃO cabe agravo de instrumento."
      }
    ],
    "correctAnswer": "B",
    "justification": "Agravo de Instrumento (Art. 1.015 CPC): 15 dias úteis. Hipóteses típicas: tutelas provisórias, mérito do processo, rejeição de arbitragem, IDPJ, gratuidade de justiça (rejeição/revogação), exibição/posse de documento/coisa, exclusão de litisconsorte, rejeição de limitação de litisconsórcio, admissão/inadmissão de terceiros, efeito suspensivo a embargos, liquidação/cumprimento/execução/inventário (parágrafo único), e urgência por taxatividade mitigada (Tema 988 STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No Tema 988, o STJ mitigou a taxatividade estrita sempre que houver urgência pela inutilidade de aguardar a apelação."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.009, § 1º, do CPC, as questões resolvidas na fase de conhecimento não cobertas pelo Art. 1.015 NÃO sofrem preclusão imediata e devem ser suscitadas em PRELIMINAR DE APELAÇÃO ou nas CONTRARRAZÕES!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 1.015, III, prevê expressamente AGRAVO DE INSTRUMENTO contra decisão de rejeição da alegação de convenção de arbitragem (se acolher a arbitragem, o processo é extinto sem mérito por sentença do Art. 485, VII, cabendo APELAÇÃO!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Art. 1.015 do CPC/2015 e Tema 988 STJ",
        "textSnippet": "Agravo de Instrumento (Art. 1.015 CPC): 15 dias úteis. Hipóteses típicas: tutelas provisórias, mérito do processo, rejeição de arbitragem, IDPJ, gratuidade de justiça (rejeição/revogação), exibição/posse de documento/coisa, exclusão de litisconsorte, rejeição de limitação de litisconsórcio, admissão/inadmissão de terceiros, efeito suspensivo a embargos, liquidação/cumprimento/execução/inventário (parágrafo único), e urgência por taxatividade mitigada (Tema 988 STJ)."
      }
    ],
    "jurisprudence": "STJ Tema 988 (REsp 1.704.520)",
    "professorTip": "Tema 988 STJ: Art. 1.015 tem TAXATIVIDADE MITIGADA (cabe agravo se houver URGÊNCIA por inutilidade de esperar apelação)! Rejeitou arbitragem = Agravo; Acolheu arbitragem (extinguiu) = Apelação!"
  },
  {
    "id": "mig_cpc_019",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Apelação, Efeito Devolutivo em Profundidade, Teoria da Causa Madura e Remessa Necessária",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em ação indenizatória julgada totalmente improcedente em primeira instância por acolhimento apenas da prescrição (sem examinar o mérito restante, embora toda a instrução probatória já estivesse completa e madura), o autor apelou. O Tribunal de Justiça reformou a sentença para afastar a prescrição. E em outro processo, houve condenação contra um Município em quantia líquida equivalente a 80 salários mínimos. Como procede o Tribunal?",
    "options": [
      {
        "letter": "A",
        "text": "Afastada a prescrição ou nulidade da sentença, o Tribunal é proibido de julgar diretamente o mérito, devendo baixar os autos ao juiz de primeiro grau por força do duplo grau."
      },
      {
        "letter": "B",
        "text": "Ao afastar a prescrição ou reforma de sentença terminativa com o processo em condições de imediato julgamento (\"causa madura\" — Art. 1.013, § 3º e § 4º, CPC), o Tribunal DEVE julgar diretamente o mérito sem devolver os autos ao 1º grau; quanto à condenação do Município de 80 salários mínimos, NÃO está sujeita à remessa necessária, pois o Art. 496, § 3º, III, dispensa remessa necessária para Municípios quando a condenação/proveito for inferior a 100 SALÁRIOS MÍNIMOS!"
      },
      {
        "letter": "C",
        "text": "Qualquer condenação pecuniária contra a União, Estados ou Municípios acima de 60 salários mínimos submete-se obrigatoriamente à remessa necessária."
      },
      {
        "letter": "D",
        "text": "Na apelação, é permitido sempre inovar livremente com fatos novos não alegados em primeiro grau sem qualquer justificativa de força maior."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 496 e 1.013 CPC: Teoria da Causa Madura (Art. 1.013, §§ 3º e 4º) impõe julgamento imediato do mérito pelo Tribunal (extinção sem mérito, nulidade por falta de fundamentação/extra petita, omissão e reforma de prescrição/decadência). Remessa necessária dispensa-se abaixo de 1.000 SM (União), 500 SM (Estados/DF/Capitais) e 100 SM (Municípios), ou quando fundada em precedente vinculante (§ 4º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 1.013, §§ 3º e 4º, do CPC, estando o processo em condições de imediato julgamento (causa madura), o Tribunal DEVE decidir desde logo o mérito inclusive quando reformar sentença que reconheça decadência ou prescrição!"
      },
      {
        "letter": "C",
        "explanation": "Os tetos de dispensa da remessa necessária no Art. 496, § 3º, CPC são escalonados: 1.000 SM (União e autarquias/fundações federais); 500 SM (Estados, DF e Capitais de Estado); e 100 SM (demais Municípios)! Também dispensa quando fundada em súmula/repetitivo/IRDR/IAC ou entendimento coincidente do ente (§ 4º)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.014 do CPC, questões de fato não propostas no juízo inferior só poderão ser suscitadas na apelação se a parte provar que deixou de fazê-lo por motivo de FORÇA MAIOR."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 496 e 1.009 a 1.014 do CPC/2015",
        "textSnippet": "Arts. 496 e 1.013 CPC: Teoria da Causa Madura (Art. 1.013, §§ 3º e 4º) impõe julgamento imediato do mérito pelo Tribunal (extinção sem mérito, nulidade por falta de fundamentação/extra petita, omissão e reforma de prescrição/decadência). Remessa necessária dispensa-se abaixo de 1.000 SM (União), 500 SM (Estados/DF/Capitais) e 100 SM (Municípios), ou quando fundada em precedente vinculante (§ 4º)."
      }
    ],
    "professorTip": "Causa Madura (Art. 1.013, §§ 3º-4º): Tribunal julga mérito direto (inclusive se derrubou prescrição/decadência)! Remessa necessária dispensa até: 1.000 SM (União), 500 SM (Estados/DF/Capitais), 100 SM (Municípios)!"
  },
  {
    "id": "mig_cpc_020",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Embargos de Declaração, Multa, Interrupção e Fungibilidade com Agravo Interno",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Publicada sentença com grave omissão sobre tese defensiva essencial, o advogado do réu opôs Embargos de Declaração no 5º dia útil requerendo efeitos infringentes (modificativos). Nesse ínterim, a parte autora pretendia interpor Apelação imediatamente, mas ficou em dúvida sobre o prazo da apelação e sobre a necessidade de intimação prévia para contrarrazões nos embargos. Como o CPC disciplina?",
    "options": [
      {
        "letter": "A",
        "text": "Os Embargos de Declaração (prazo de 5 DIAS úteis, não sujeitos a preparo) INTERROMPEM o prazo para interposição de outros recursos para AMBAS as partes (Art. 1.026 CPC); havendo pedido de eventual efeito modificativo (infringente), o juiz DEVE intimar o embargado para manifestar-se em 5 dias sobre os embargos (Art. 1.023, § 2º); e se o autor já havia interposto apelação antes dos embargos e os embargos forem rejeitados sem modificação, sua apelação anterior independe de ratificação (Art. 1.024, § 5º — superou a Súmula 418 STJ)!"
      },
      {
        "letter": "B",
        "text": "Os embargos de declaração apenas suspendem o prazo recursal, aproveitando o prazo restante após o julgamento apenas ao embargante."
      },
      {
        "letter": "C",
        "text": "Se os embargos forem rejeitados sem alterar a sentença, o recurso de apelação interposto anteriormente pela outra parte deve ser obrigatoriamente ratificado sob pena de deserção."
      },
      {
        "letter": "D",
        "text": "O juiz pode aplicar multa de até 10% sobre o valor atualizado da causa já nos primeiros embargos de declaração manifestamente protelatórios."
      }
    ],
    "correctAnswer": "A",
    "justification": "Embargos de Declaração (Arts. 1.022–1.026 CPC): prazo de 5 dias úteis, sem preparo, para obscuridade, contradição, omissão ou erro material. Efeito interruptivo bilateral (inclusive nos Juizados Especiais — Art. 1.065 CPC!). Oitiva do embargado em 5 dias se puder modificar a decisão. Multa protelatória: até 2% na 1ª vez; até 10% na reiteração (exige depósito para recorrer depois, salvo Fazenda e gratuidade).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Os EDs INTERROMPEM (zeram e recomeçam por inteiro) o prazo recursal para TODAS as partes (Art. 1.026 — salvo no antigo JEC antes da Lei 13.105/15, pois hoje até nos Juizados Especiais da Lei 9.099 os EDs passaram a INTERROMPER pelo Art. 1.065 do CPC!)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 1.024, § 5º, do CPC (e Súmula 579 STJ) dispensa expressamente a ratificação do recurso anterior se os embargos forem rejeitados ou não alterarem a conclusão."
      },
      {
        "letter": "D",
        "explanation": "Nos primeiros embargos protelatórios, a multa é de até 2% do valor atualizado da causa; apenas na REITERAÇÃO de embargos protelatórios a multa pode ser elevada a ATÉ 10% (condicionando novos recursos ao depósito prévio da multa, salvo Fazenda Pública e beneficiário de gratuidade — Art. 1.026, §§ 2º e 3º)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 1.021 a 1.026 do CPC/2015",
        "textSnippet": "Embargos de Declaração (Arts. 1.022–1.026 CPC): prazo de 5 dias úteis, sem preparo, para obscuridade, contradição, omissão ou erro material. Efeito interruptivo bilateral (inclusive nos Juizados Especiais — Art. 1.065 CPC!). Oitiva do embargado em 5 dias se puder modificar a decisão. Multa protelatória: até 2% na 1ª vez; até 10% na reiteração (exige depósito para recorrer depois, salvo Fazenda e gratuidade)."
      }
    ],
    "jurisprudence": "Súmula 579 do STJ",
    "professorTip": "EDs (5 dias úteis, sem preparo): INTERROMPEM prazo pra TODOS (até no JEC!)! Se pode modificar = ouve o outro lado em 5 dias! Apelação antes dos EDs rejeitados = NÃO precisa ratificar (Súm. 579 STJ)! Multa protelatória = até 2% (1ª) / até 10% (2ª)!"
  },
  {
    "id": "mig_cpc_021",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Incidente de Resolução de Demandas Repetitivas (IRDR) e Precedentes Obrigatórios",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Diante da multiplicação de centenas de ações individuais idênticas em varas cíveis de um mesmo Estado discutindo exclusivamente a mesma questão jurídica de direito sobre contrato bancário local, ainda sem recurso afetado nos Tribunais Superiores, uma das partes requereu ao Tribunal de Justiça a instauração de IRDR. Quais os requisitos, legitimados e efeitos da admissão do IRDR?",
    "options": [
      {
        "letter": "A",
        "text": "O IRDR exige simultaneamente efetiva repetição de processos com controvérsia sobre a MESMA QUESTÃO UNICAMENTE DE DIREITO e risco de ofensa à isonomia e à segurança jurídica (Art. 976 CPC), sendo vedado se já houver afetação de recurso repetitivo sobre a tese em Tribunal Superior (§ 4º); são legitimados para pedir a instauração o juiz/relator, as partes, o MP e a Defensoria Pública (Art. 977 — isento de custas); e admitido o IRDR, o relator SUSPENDERÁ os processos pendentes no Estado/região e, julgada a tese, esta VINCULARÁ todos os juízes e órgãos do respectivo tribunal (e Juizados Especiais — Art. 985)."
      },
      {
        "letter": "B",
        "text": "O IRDR pode ser instaurado no Tribunal de Justiça mesmo quando o mérito da controvérsia envolver exclusivamente o reexame complexo de fatos e provas distintos em cada caso."
      },
      {
        "letter": "C",
        "text": "O pedido de instauração de IRDR obriga a parte requerente ao recolhimento antecipado de preparo e custas recursais específicas no Tribunal."
      },
      {
        "letter": "D",
        "text": "Se o autor desistir da ação individual originária em que se suscitou o IRDR, o Tribunal fica obrigado a extinguir o IRDR sem fixar a tese jurídica."
      }
    ],
    "correctAnswer": "A",
    "justification": "Precedentes e IRDR (Arts. 927 e 976–987 CPC): IRDR instaura-se no TJ ou TRF diante de repetição + risco à isonomia/segurança jurídica em questão UNICAMENTE DE DIREITO (sem repetitivo já afetado em Tribunal Superior). Isento de custas; desistência da causa-piloto não impede fixação da tese (MP assume); vincula área de jurisdição do tribunal inclusive Juizados Especiais; do mérito cabe REsp/RE com efeito suspensivo automático e presunção de repercussão geral (Art. 987).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 976, I, exige expressamente questão UNICAMENTE DE DIREITO."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 976, § 5º, é ISENTA de custas processuais a instauração do IRDR."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 976, § 1º, a desistência ou o abandono do processo NÃO impede o exame de mérito do incidente (o MP assumirá a titularidade — § 2º)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 926, 927 e 976 a 987 do CPC/2015",
        "textSnippet": "Precedentes e IRDR (Arts. 927 e 976–987 CPC): IRDR instaura-se no TJ ou TRF diante de repetição + risco à isonomia/segurança jurídica em questão UNICAMENTE DE DIREITO (sem repetitivo já afetado em Tribunal Superior). Isento de custas; desistência da causa-piloto não impede fixação da tese (MP assume); vincula área de jurisdição do tribunal inclusive Juizados Especiais; do mérito cabe REsp/RE com efeito suspensivo automático e presunção de repercussão geral (Art. 987)."
      }
    ],
    "professorTip": "IRDR (Art. 976): questão UNICAMENTE DE DIREITO + repetição + risco à isonomia/segurança jurídica + sem custas! Desistência do processo NÃO impede o IRDR (MP assume)! Vincula até Juizados Especiais do Estado/Região!"
  },
  {
    "id": "mig_cpc_022",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Recursos Extraordinário e Especial - Prequestionamento Ficto, Repercussão Geral e Relevância (EC 125)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em acórdão de Tribunal de Justiça, o relator omitiu-se sobre dispositivo federal de lei expressamente invocado na apelação. A parte opôs Embargos de Declaração para fins de prequestionamento, mas o Tribunal novamente rejeitou os embargos mantendo o silêncio sobre o artigo invocado. A parte ainda poderá interpor Recurso Especial ao STJ? E qual o novo filtro constitucional criado pela EC nº 125/2022 para o REsp?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, considera-se PREQUESTIONADA a matéria suscitada nos embargos de declaração mesmo que o tribunal de origem os rejeite ou inadmita sem examiná-la, caso o Tribunal Superior entenda existentes erro, omissão, contradição ou obscuridade (prequestionamento ficto — Art. 1.025 CPC, superando a Súmula 211 STJ!); ademais, a EC nº 125/2022 inseriu o § 2º e § 3º no Art. 105 da CF criando o filtro da RELEVÂNCIA DAS QUESTÕES DE DIREITO FEDERAL INFRACONSTITUCIONAL no Recurso Especial (similar à repercussão geral do RE no STF)."
      },
      {
        "letter": "B",
        "text": "Se o Tribunal de origem rejeitar os embargos declaratórios sem analisar o artigo federal, o REsp é inadmissível de plano no mérito por ausência de prequestionamento."
      },
      {
        "letter": "C",
        "text": "A simples alegação de ofensa reflexa à Constituição ou o reexame puro de provas em acórdão estadual autoriza o conhecimento de Recurso Extraordinário e Recurso Especial."
      },
      {
        "letter": "D",
        "text": "Se a decisão impugnada violar simultaneamente lei federal e a Constituição Federal com fundamentos independentes suficientes, basta interpor apenas o Recurso Extraordinário ao STF."
      }
    ],
    "correctAnswer": "A",
    "justification": "Filtros de admissibilidade nos Tribunais Superiores: STF (RE) = Repercussão Geral (só recusada por 2/3 — 8 ministros); STJ (REsp) = Relevância das questões de direito federal infraconstitucional (EC 125/2022 — recusada por 2/3 dos membros do órgão julgador). Art. 1.025 = prequestionamento ficto. Súmula 126 STJ = interposição simultânea de REsp + RE quando há duplo fundamento suficiente. Súmula 7 STJ / 279 STF = sem reexame fático-probatório.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 1.025 do CPC instituiu expressamente o prequestionamento ficto, superando o rigor da antiga Súmula 211 do STJ (basta opor os EDs e, no REsp, alegar violação ao Art. 1.022 ou já considerar prequestionado pelo Art. 1.025)."
      },
      {
        "letter": "C",
        "explanation": "Pelas Súmulas 7 do STJ e 279 do STF, para simples reexame de prova NÃO cabem Recurso Especial nem Recurso Extraordinário (além da Súmula 280 STF para direito local e Súmula 5 STJ para interpretação de cláusula contratual)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 126 do STJ e Art. 1.031 do CPC, quando o acórdão assenta em fundamentos constitucional E infraconstitucional autônomos suficientes, é obrigatória a interposição SIMULTÂNEA de REsp e RE no mesmo prazo de 15 dias, sob pena de não conhecimento do recurso único!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 1.025, 1.029 a 1.041 do CPC/2015 e Art. 105, § 3º, CF/88 (EC 125/2022)",
        "textSnippet": "Filtros de admissibilidade nos Tribunais Superiores: STF (RE) = Repercussão Geral (só recusada por 2/3 — 8 ministros); STJ (REsp) = Relevância das questões de direito federal infraconstitucional (EC 125/2022 — recusada por 2/3 dos membros do órgão julgador). Art. 1.025 = prequestionamento ficto. Súmula 126 STJ = interposição simultânea de REsp + RE quando há duplo fundamento suficiente. Súmula 7 STJ / 279 STF = sem reexame fático-probatório."
      }
    ],
    "jurisprudence": "Súmulas 5, 7, 126 e 211 STJ; Súmula 279 STF; EC 125/2022",
    "professorTip": "Art. 1.025 CPC: opôs EDs pra prequestionar = PREQUESTIONAMENTO FICTO! Súmula 7 STJ / 279 STF = sem reexame de provas! Súmula 126 STJ = duplo fundamento (CF + lei) exige REsp + RE juntos! EC 125/2022 = filtro da RELEVÂNCIA no REsp!"
  },
  {
    "id": "mig_cpc_023",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Ação Rescisória - Prazo Decadencial, Cabimento e Prova Nova / Violação Manifesta",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Após o trânsito em julgado de uma sentença de mérito, o vencido descobriu dois anos e meio depois (em contagem a partir do último recurso não conhecido? Não — 1 ano e 8 meses após o último trânsito) que a sentença se baseou em prova cuja falsidade foi apurada em processo criminal posterior, além de violar frontalmente tese de súmula vinculante. Qual o prazo da Ação Rescisória e como incide o depósito de 5%?",
    "options": [
      {
        "letter": "A",
        "text": "O direito à rescisão se extingue em 2 ANOS contados do trânsito em julgado da última decisão proferida no processo (Art. 975 CPC — e se fundada em PROVA NOVA do inciso VII, o prazo de 2 anos conta-se da descoberta da prova nova, observado o limite máximo de 5 anos da data do trânsito em julgado, Art. 975, § 2º); a propositura da ação rescisória exige depósito prévio de 5% sobre o valor da causa (teto de 1.000 salários mínimos), dispensado para União, Estados, DF, Municípios, MP, Defensoria Pública e beneficiários de gratuidade (Art. 968, II e § 1º)."
      },
      {
        "letter": "B",
        "text": "O prazo para propor ação rescisória fundada em prova nova obtida após a sentença é sempre de 2 anos improrrogáveis da data do trânsito em julgado original."
      },
      {
        "letter": "C",
        "text": "O depósito prévio de 5% exigido na petição inicial da ação rescisória converte-se automaticamente em multa ao réu caso a ação seja julgada procedente."
      },
      {
        "letter": "D",
        "text": "Se a ação rescisória tiver por objeto apenas a violação manifesta de norma jurídica em sentença já alterada em parte no acórdão, não cabe contra capítulo autônomo de mérito."
      }
    ],
    "correctAnswer": "A",
    "justification": "Ação Rescisória (Arts. 966–975 CPC): prazo decadencial de 2 anos da última decisão proferida no processo (Súmula 401 STJ / Art. 975), com regras especiais: prova nova (2 anos da descoberta, teto 5 anos do trânsito); controle concentrado de constitucionalidade posterior pelo STF (Art. 525, § 15 — 2 anos do trânsito da decisão do STF!). Depósito prévio de 5% (máx. 1.000 SM; isentos entes públicos, MP, DP e gratuidade; perde pro réu se inadmissível/improcedente por unanimidade).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 975, § 2º, cria regra especial benéfica para prova nova: 2 anos da data da DESCOBERTA da prova nova, respeitado o prazo máximo de 5 anos do trânsito em julgado da última decisão."
      },
      {
        "letter": "C",
        "explanation": "O depósito de 5% reverte em multa em favor do RÉU apenas se a ação rescisória for declarada inadmissível ou improcedente POR UNANIMIDADE DE VOTOS (Art. 968, II e Art. 974, parágrafo único)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 966, § 3º, a ação rescisória pode ter por objeto apenas UM capítulo da decisão (e o § 2º também admite rescisória contra decisão que NÃO é de mérito se impedir nova propositura ou inadmitir recurso correspondente!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 966 a 975 do CPC/2015",
        "textSnippet": "Ação Rescisória (Arts. 966–975 CPC): prazo decadencial de 2 anos da última decisão proferida no processo (Súmula 401 STJ / Art. 975), com regras especiais: prova nova (2 anos da descoberta, teto 5 anos do trânsito); controle concentrado de constitucionalidade posterior pelo STF (Art. 525, § 15 — 2 anos do trânsito da decisão do STF!). Depósito prévio de 5% (máx. 1.000 SM; isentos entes públicos, MP, DP e gratuidade; perde pro réu se inadmissível/improcedente por unanimidade)."
      }
    ],
    "jurisprudence": "Súmula 401 do STJ",
    "professorTip": "Ação Rescisória: 2 anos do último trânsito em julgado (Súm. 401 STJ); Prova nova = 2 anos da descoberta (teto 5 anos)! Depósito 5% (teto 1.000 SM) só vira multa ao réu se perder por UNANIMIDADE!"
  },
  {
    "id": "mig_cpc_024",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Reclamação Constitucional no CPC e Juizados Especiais (Lei 9.099/95)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em ação cível no Juizado Especial Cível (valor de R$ 20.000,00), a Turma Recursal proferiu acórdão definitivo contrariando frontalmente tese fixada em Recurso Especial Repetitivo do STJ. O advogado da parte vencida ajuizou diretamente Reclamação ao STJ (ou ao STF em caso de Repercussão Geral). Como o CPC (alterado pela Lei nº 13.256/2016) disciplina a Reclamação nesses casos?",
    "options": [
      {
        "letter": "A",
        "text": "A reclamação ao STF/STJ para garantir observância de acórdão de RE com repercussão geral ou REsp repetitivo exige o ESGOTAMENTO DAS INSTÂNCIAS ORDINÁRIAS (Art. 988, § 5º, II, CPC — e nunca cabe após trânsito em julgado — § 5º, I); ademais, contra acórdão de Turma Recursal de JEC que contraria jurisprudência consolidada do STJ (sem questão constitucional), o STJ pacificou não caber REsp nem Reclamação direta como regra geral (cabendo apenas Reclamação por divergência prevista em resolução ou Pedido de Uniformização nos JEFs/JECs conforme regras próprias, enquanto para Súmula Vinculante e controle concentrado cabe Reclamação ao STF!)."
      },
      {
        "letter": "B",
        "text": "Cabe Reclamação diretamente ao STF ou STJ contra decisão de juiz de primeira instância antes mesmo de interpor recurso ordinário/extraordinário sempre que contrariar RE repetitivo."
      },
      {
        "letter": "C",
        "text": "É perfeitamente cabível ajuizar Reclamação mesmo após o trânsito em julgado da decisão reclamada como substitutivo de ação rescisória."
      },
      {
        "letter": "D",
        "text": "No Juizado Especial Cível estadual (Lei nº 9.099/95), o prazo para interpor Recurso Inominado contra a sentença é de 15 dias úteis conforme o CPC."
      }
    ],
    "correctAnswer": "A",
    "justification": "Reclamação (Art. 988 CPC): NÃO cabe após trânsito em julgado (§ 5º, I / Súmula 734 STF); para garantir tese de RE com repercussão geral ou REsp repetitivo exige esgotamento das instâncias ordinárias (§ 5º, II). Já para garantir Súmula Vinculante, ADI/ADC/ADPF ou IRDR/IAC não exige esgotar todas as instâncias ordinárias. Nos Juizados Especiais: Recurso Inominado = 10 dias úteis; EDs = 5 dias úteis (interrompem!).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 988, § 5º, II, do CPC exige expressamente o ESGOTAMENTO DAS INSTÂNCIAS ORDINÁRIAS quando a reclamação busca garantir observância de acórdão em RE com repercussão geral ou recursos repetitivos (diferente de Súmula Vinculante, ADI/ADC/ADPF e IRDR/IAC, que admitem reclamação sem esgotar todos os recursos ordinários, desde que antes do trânsito em julgado!)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 988, § 5º, I, PROÍBE expressamente a reclamação proposta após o trânsito em julgado da decisão reclamada (Súmula 734 STF)."
      },
      {
        "letter": "D",
        "explanation": "No JEC (Art. 42 da Lei nº 9.099/95), o prazo do Recurso Inominado mantém-se em 10 DIAS (contados em dias úteis pelo Art. 12-A da Lei 9.099/95, incluído pela Lei 13.728/2018!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 988 a 993 do CPC/2015 e Lei 9.099/95",
        "textSnippet": "Reclamação (Art. 988 CPC): NÃO cabe após trânsito em julgado (§ 5º, I / Súmula 734 STF); para garantir tese de RE com repercussão geral ou REsp repetitivo exige esgotamento das instâncias ordinárias (§ 5º, II). Já para garantir Súmula Vinculante, ADI/ADC/ADPF ou IRDR/IAC não exige esgotar todas as instâncias ordinárias. Nos Juizados Especiais: Recurso Inominado = 10 dias úteis; EDs = 5 dias úteis (interrompem!)."
      }
    ],
    "jurisprudence": "Súmula 734 do STF",
    "professorTip": "Reclamação (Art. 988 CPC): NUNCA após trânsito em julgado (Súm. 734 STF)! Para Repetitivo/Repercussão Geral = só após esgotar instâncias ordinárias! JEC: Recurso Inominado = 10 dias úteis; EDs = 5 dias úteis!"
  },
  {
    "id": "mig_cpc_025",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Cooperação Nacional e Atos Concertados entre Juízos",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em execuções distintas contra o mesmo grupo econômico em varas cíveis de comarcas diferentes, os juízes decidiram centralizar a arrecadação e alienação de bens por meio de cooperação judiciária nacional sem expedição formal de carta precatória tradicional. O CPC autoriza essa prática?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, o pedido de cooperação jurisdicional entre órgãos do Poder Judiciário nacional prescinde de forma especial (pode ocorrer por auxílio direto, reunião/apensamento ou atos concertados entre juízes cooperantes — Art. 69, § 2º, CPC), inclusive para efetivação de tutela provisória e centralização de processos repetitivos."
      },
      {
        "letter": "B",
        "text": "Qualquer comunicação ou ato entre juízos de comarcas diversas exige obrigatoriamente carta precatória solene."
      },
      {
        "letter": "C",
        "text": "A cooperação nacional restringe-se apenas a juízos pertencentes ao mesmo Tribunal de Justiça estadual."
      },
      {
        "letter": "D",
        "text": "Juízes não podem pactuar o compartilhamento de competência para execução de penhora unificada."
      }
    ],
    "correctAnswer": "A",
    "justification": "Os Arts. 67 a 69 do CPC/2015 consagram a cooperação judiciária nacional ágil e informal para auxílio direto e prática de atos concertados entre quaisquer órgãos jurisdicionais brasileiros.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 69, § 1º, dispensa forma rígida, admitindo auxílio direto, reunião de processos e atos concertados."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 67 e Art. 69, § 3º, o dever de recíproca cooperação abrange juízos de quaisquer tribunais e esferas da Justiça (estadual, federal, trabalhista, eleitoral)."
      },
      {
        "letter": "D",
        "explanation": "O Art. 69, § 2º, V e VI, prevê expressamente atos concertados para efetivação de medidas executivas, penhora e compartilhamento de competências."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 67 a 69 do CPC/2015 e Resolução 350 CNJ",
        "textSnippet": "Os Arts. 67 a 69 do CPC/2015 consagram a cooperação judiciária nacional ágil e informal para auxílio direto e prática de atos concertados entre quaisquer órgãos jurisdicionais brasileiros."
      }
    ],
    "professorTip": "Cooperação nacional (Art. 69 CPC): SEM forma rígida (dispensa precatória) e vale entre quaisquer ramos do Judiciário!"
  },
  {
    "id": "mig_cpc_026",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Substituição Processual vs. Sucessão Processual na Alienação de Coisa Litigiosa",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "No curso de ação reivindicatória de imóvel já contestada, o autor vendeu a terceiro o imóvel litigioso por escritura pública. O adquirente pediu para ingressar no processo substituindo integralmente o autor alienante, mas o réu não consentiu expressamente com a sucessão processual. Qual a solução prevista no Art. 109 do CPC?",
    "options": [
      {
        "letter": "A",
        "text": "O adquirente NÃO poderá ingressar substituindo o alienante em juízo sem que a parte contrária (réu) consinta expressamente (Art. 109, § 1º); na falta de consentimento, o alienante continua no processo como SUBSTITUTO PROCESSUAL, podendo o adquirente intervir apenas como ASSISTENTE LITISCONSORCIAL (§ 2º), estendendo-se os efeitos da sentença ao adquirente (§ 3º)."
      },
      {
        "letter": "B",
        "text": "A alienação da coisa litigiosa durante o processo é nula de pleno direito e extingue imediatamente a ação."
      },
      {
        "letter": "C",
        "text": "Sem consentimento do réu, o adquirente é proibido até mesmo de ingressar nos autos como assistente."
      },
      {
        "letter": "D",
        "text": "A sentença proferida contra o alienante nunca produz efeitos em face do adquirente que não assumiu o polo ativo."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 109 CPC: alienar bem litigioso não altera a legitimidade; para suceder o alienante no polo, exige consentimento da parte contrária (§ 1º). Sem consentimento, o alienante vira substituto processual, o adquirente entra como assistente litisconsorcial (§ 2º) e sofre os efeitos da sentença (§ 3º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A alienação de coisa litigiosa é válida entre as partes e NÃO altera a legitimidade processual originária (Art. 109, caput)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 109, § 2º, garante ao adquirente o direito de intervir como ASSISTENTE LITISCONSORCIAL independentemente de anuência do réu."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 109, § 3º, os efeitos da sentença estendem-se expressamente ao adquirente ou cessionário."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 18 e 109 do CPC/2015",
        "textSnippet": "Art. 109 CPC: alienar bem litigioso não altera a legitimidade; para suceder o alienante no polo, exige consentimento da parte contrária (§ 1º). Sem consentimento, o alienante vira substituto processual, o adquirente entra como assistente litisconsorcial (§ 2º) e sofre os efeitos da sentença (§ 3º)."
      }
    ],
    "professorTip": "Vendeu bem litigioso no meio do processo (Art. 109)? Só troca de nome no polo se a outra parte concordar! Se não concordar, comprador entra como ASSISTENTE LITISCONSORCIAL e pega a coisa julgada!"
  },
  {
    "id": "mig_cpc_027",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Gratuidade da Justiça - Abrangência, Impugnação e Multas Processuais",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Uma pessoa natural obteve gratuidade da justiça na petição inicial por simples afirmação de insuficiência de recursos. Posteriormente, foi condenada por litigância de má-fé ao pagamento de multa processual de 5% e também sucumbiu nos honorários advocatícios. A concessão da gratuidade isenta o beneficiário da multa por litigância de má-fé e extingue os honorários sucumbenciais?",
    "options": [
      {
        "letter": "A",
        "text": "A gratuidade da justiça NÃO afasta a responsabilidade pelas despesas e honorários decorrentes da sucumbência nem o pagamento das multas processuais impostas ao beneficiário (Art. 98, § 4º — que são exigíveis normalmente!); quanto aos honorários sucumbenciais e custas, ficam apenas sob CONDIÇÃO SUSPENSIVA DE EXIGIBILIDADE por 5 anos após o trânsito em julgado, extinguindo-se só após 5 anos se persistir a insuficiência (Art. 98, § 3º)."
      },
      {
        "letter": "B",
        "text": "O beneficiário da gratuidade da justiça fica totalmente imune ao pagamento de multas por litigância de má-fé ou ato atentatório à dignidade da justiça."
      },
      {
        "letter": "C",
        "text": "A simples pessoa jurídica (empresa privada) que declara hipossuficiência presume-se pobre na forma da lei sem precisar provar insuficiência de recursos."
      },
      {
        "letter": "D",
        "text": "Indeferida a gratuidade de justiça em sentença final, o recurso cabível contra o capítulo da gratuidade é o agravo de instrumento isolado."
      }
    ],
    "correctAnswer": "A",
    "justification": "Gratuidade da Justiça (Arts. 98–102 CPC): pessoa natural tem presunção relativa (§ 3º); pessoa jurídica precisa provar (Súmula 481 STJ). Abrange custas, honorários, perícia, depósito recursal etc., mas NÃO apaga multas processuais (§ 4º). Honorários sucumbenciais ficam em condição suspensiva de exigibilidade por 5 anos (§ 3º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 98, § 4º, estabelece que a gratuidade NÃO afasta o dever de o beneficiário pagar multas processuais que lhe sejam impostas."
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 481 do STJ e Art. 99, § 3º, apenas a PESSOA NATURAL goza de presunção relativa de veracidade na declaração de hipossuficiência; a PESSOA JURÍDICA deve comprovar cabalmente sua insuficiência de recursos."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 101 do CPC, contra decisão interlocutória que indefere ou revoga a gratuidade cabe Agravo de Instrumento; MAS se decidida na própria SENTENÇA, impugna-se no corpo da própria APELAÇÃO (princípio da unirrecorribilidade)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 98 a 102 do CPC/2015",
        "textSnippet": "Gratuidade da Justiça (Arts. 98–102 CPC): pessoa natural tem presunção relativa (§ 3º); pessoa jurídica precisa provar (Súmula 481 STJ). Abrange custas, honorários, perícia, depósito recursal etc., mas NÃO apaga multas processuais (§ 4º). Honorários sucumbenciais ficam em condição suspensiva de exigibilidade por 5 anos (§ 3º)."
      }
    ],
    "jurisprudence": "Súmula 481 do STJ",
    "professorTip": "Gratuidade NÃO perdoa multa de má-fé (Art. 98, § 4º)! Honorários sucumbenciais ficam suspensos por 5 anos! PJ precisa PROVAR hipossuficiência (Súmula 481 STJ); PF tem presunção!"
  },
  {
    "id": "mig_cpc_028",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Impedimento e Suspeição do Juiz - Arguição, Prazo e Prazos do MP/Auxiliares",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um magistrado assumiu uma vara cível e verificou que um dos processos em curso é patrocinado pelo escritório de advocacia de seu cônjuge (embora outro advogado do mesmo escritório, e não seu cônjuge diretamente, assine as petições nos autos), além de outro feito em que é amigo íntimo de uma das partes. Como se classificam esses vícios e qual o prazo para arguição?",
    "options": [
      {
        "letter": "A",
        "text": "A atuação do escritório do cônjuge ou parente até 3º grau do juiz — ainda que outro advogado do mesmo escritório atue nos autos — configura IMPEDIMENTO objetivo (Art. 144, VIII, CPC — não preclui e gera inclusive nulidade rescindível por ação rescisória após trânsito em julgado!); já a amizade íntima ou inimizade capital configura SUSPEIÇÃO (Art. 145, I — deve ser arguida pela parte no prazo de 15 DIAS a contar do conhecimento do fato, em petição específica dirigida ao juiz da causa, sob pena de preclusão)."
      },
      {
        "letter": "B",
        "text": "Se o cônjuge do juiz apenas integra o mesmo escritório de advocacia, mas não assina a petição do processo, não há impedimento."
      },
      {
        "letter": "C",
        "text": "As causas de impedimento e suspeição aplicam-se apenas aos juízes de direito, não alcançando membros do Ministério Público, peritos ou conciliadores."
      },
      {
        "letter": "D",
        "text": "O prazo para arguir impedimento ou suspeição é de 5 dias em petição avulsa diretamente no Tribunal de Justiça."
      }
    ],
    "correctAnswer": "A",
    "justification": "Impedimento (Art. 144 — ordem pública, vícios objetivos ligados ao processo/parentes até 3º grau/escritório do cônjuge, cabe rescisória) x Suspeição (Art. 145 — amizade íntima, inimizade, interesse no julgamento, conselhos/presentes, preclui em 15 dias se não arguida). Aplicam-se também ao MP e auxiliares (Art. 148).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 144, VIII, do CPC proíbe expressamente o juiz de exercer suas funções quando for parte cliente do escritório de advocacia de seu cônjuge, companheiro ou parente até 3º grau, mesmo que patrocinado por outro advogado de outro escritório."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 148 do CPC, os motivos de impedimento e suspeição aplicam-se também ao membro do Ministério Público, aos auxiliares da justiça (perito, oficial, escrivão, conciliador/mediador) e demais sujeitos imparciais."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 146 do CPC, argui-se no prazo de 15 DIAS do conhecimento do fato em petição específica dirigida ao próprio juiz do processo (se não reconhecer, remete ao tribunal sem suspender se suspeição/regras do § 2º)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 144 a 148 do CPC/2015",
        "textSnippet": "Impedimento (Art. 144 — ordem pública, vícios objetivos ligados ao processo/parentes até 3º grau/escritório do cônjuge, cabe rescisória) x Suspeição (Art. 145 — amizade íntima, inimizade, interesse no julgamento, conselhos/presentes, preclui em 15 dias se não arguida). Aplicam-se também ao MP e auxiliares (Art. 148)."
      }
    ],
    "professorTip": "Escritório do cônjuge/parente até 3º grau (mesmo sem assinar!) = IMPEDIMENTO (Art. 144, VIII — cabe até rescisória!). Amizade/inimizade = SUSPEIÇÃO (15 dias pra arguir)!"
  },
  {
    "id": "mig_cpc_029",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Início da Contagem de Prazos e Intimação pelo DJe vs. Portal Eletrônico",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Em processo eletrônico no sistema PJe onde o advogado se cadastrou no portal próprio, foi expedida intimação eletrônica via portal em 04/03 (segunda-feira). O advogado NÃO acessou nem consultou o portal nos dias subsequentes. Quando se considera realizada a intimação e quando começa a correr o prazo de 15 dias úteis? (Lei 11.419/06 c/c Art. 231, V, CPC)",
    "options": [
      {
        "letter": "A",
        "text": "Nas intimações via portal eletrônico próprio (Art. 5º da Lei 11.419/2006 c/c Art. 231, V, CPC), se o intimado NÃO efetuar a consulta eletrônica em até 10 DIAS CORRIDOS contados da data do envio, considera-se automaticamente realizada a intimação no término desse prazo de 10 dias (intimação tácita), iniciando-se o prazo processual no primeiro dia útil seguinte (salvo intimação via Diário de Justiça Eletrônico — DJeN — em que a publicação ocorre no 1º dia útil seguinte à disponibilização)."
      },
      {
        "letter": "B",
        "text": "Não havendo abertura do portal eletrônico pelo advogado, a intimação jamais se aperfeiçoa e o prazo fica eternamente parado."
      },
      {
        "letter": "C",
        "text": "Na contagem do prazo de 15 dias úteis quando há intimação de dois réus citados por cartas precatórias distintas, o prazo de defesa corre isolado para cada réu desde sua própria juntada."
      },
      {
        "letter": "D",
        "text": "A falta de indicação do nome completo de pelo menos um advogado na publicação eletrônica não gera nulidade se constar apenas o número da OAB."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 231 CPC define o dia do começo do prazo: juntada do AR/mandado (I e II), carga/ciência em cartório (III), dia útil seguinte à publicação no DJe (VII), dia útil seguinte à consulta eletrônica ou término do prazo de 10 dias corridos no portal (V). Havendo múltiplos réus, o prazo de contestação começa para TODOS na data da ÚLTIMA juntada (§ 1º)!",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Lei nº 11.419/2006 prevê o prazo de 10 dias corridos de janela para leitura; vencidos os 10 dias sem leitura, consuma-se automaticamente a intimação."
      },
      {
        "letter": "C",
        "explanation": "Cuidado! Pela regra do Art. 231, § 1º, do CPC, quando houver MAIS DE UM RÉU, o dia do começo do prazo para contestar corresponderá à ÚLTIMA das datas de juntada aos autos dos avisos/mandados cumpridos (salvo se houver litisconsortes desistidos antes da citação — Art. 335, § 2º)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 272, § 2º, do CPC, sob pena de nulidade, é indispensável que da publicação constem os nomes das partes E de seus advogados, com o respectivo número de inscrição na OAB."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 231 e 270 a 275 do CPC/2015",
        "textSnippet": "Art. 231 CPC define o dia do começo do prazo: juntada do AR/mandado (I e II), carga/ciência em cartório (III), dia útil seguinte à publicação no DJe (VII), dia útil seguinte à consulta eletrônica ou término do prazo de 10 dias corridos no portal (V). Havendo múltiplos réus, o prazo de contestação começa para TODOS na data da ÚLTIMA juntada (§ 1º)!"
      }
    ],
    "professorTip": "Portal eletrônico sem leitura = consuma em 10 dias corridos + começa no dia útil seguinte! Vários réus = prazo de contestação só começa na ÚLTIMA juntada do último réu citado (Art. 231, § 1º)!"
  },
  {
    "id": "mig_cpc_030",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Inventário e Partilha - Arrolamento Sumário vs. Comum e ITCMD (Tema 1074 STJ)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Os herdeiros todos maiores, capazes e em pleno acordo requereram inventário judicial pelo rito do ARROLAMENTO SUMÁRIO (Art. 659 CPC). Ao final, antes de expedir o formal de partilha, o juiz exigiu a comprovação prévia do pagamento integral do ITCMD estadual como condição para homologar a partilha amigável. Essa exigência judicial está correta segundo o STJ?",
    "options": [
      {
        "letter": "A",
        "text": "Correta, pois nenhum inventário ou arrolamento sumário judicial pode ser homologado sem prévia quitação do ITCMD."
      },
      {
        "letter": "B",
        "text": "Mesmo havendo herdeiro menor ou incapaz, os herdeiros podem realizar inventário extrajudicial em cartório sempre que todos os maiores assinarem."
      },
      {
        "letter": "C",
        "text": "O prazo legal para requerer a abertura do inventário após o óbito no CPC/2015 é de 30 dias."
      },
      {
        "letter": "D",
        "text": "Incorreta, pois no Tema 1074 dos Recursos Repetitivos (REsp 1.896.526), o STJ decidiu que no ARROLAMENTO SUMÁRIO (Art. 659, § 2º, CPC), a homologação da partilha ou da adjudicação NÃO se condiciona ao prévio recolhimento do imposto de transmissão causa mortis (ITCMD), devendo o Fisco estadual ser intimado apenas APÓS a expedição do formal de partilha para lançar e cobrar administrativamente o tributo (ressalvada a prova de quitação dos tributos relativos aos bens do espólio!)."
      }
    ],
    "correctAnswer": "D",
    "justification": "No inventário (Arts. 610–667 CPC): abertura em 2 meses do óbito (Art. 611). Arrolamento Sumário (Art. 659 — todos capazes e concordes): dispensa avaliação e, pelo Tema 1074 STJ, dispensa quitação prévia de ITCMD para homologação/formal de partilha (intima o Fisco depois!). Arrolamento Comum (Art. 664): bens de valor total <= 1.000 salários mínimos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Tema 1074 do STJ distinguiu claramente: no arrolamento sumário (Art. 659, § 2º), o pagamento do ITCMD NÃO condiciona a homologação nem a expedição do formal (diferente do inventário tradicional comum!)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 610 do CPC, o inventário extrajudicial em cartório exige concordância de todos os interessados capazes e ausência de testamento válido (embora o STJ e Resolução 571/2024 do CNJ admitam hoje inventário extrajudicial mesmo com testamento prévio autorizado ou menores/incapazes mediante manifestação favorável do MP e pagamento à vista/sem prejuízo, atenção à letra literal do Art. 610 nas provas clássicas e à Resolução CNJ 571/2024!)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 611 do CPC fixa o prazo de 2 MESES (60 dias na redação atual — \"2 meses a contar da abertura da sucessão\") para instaurar inventário e partilha (Súmula 542 STF autoriza multa estadual por atraso)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 610 a 667 do CPC/2015 e Tema 1074 STJ",
        "textSnippet": "No inventário (Arts. 610–667 CPC): abertura em 2 meses do óbito (Art. 611). Arrolamento Sumário (Art. 659 — todos capazes e concordes): dispensa avaliação e, pelo Tema 1074 STJ, dispensa quitação prévia de ITCMD para homologação/formal de partilha (intima o Fisco depois!). Arrolamento Comum (Art. 664): bens de valor total <= 1.000 salários mínimos."
      }
    ],
    "jurisprudence": "STJ Tema 1074 (REsp 1.896.526)",
    "professorTip": "Tema 1074 STJ: no Arrolamento Sumário, juiz homologa partilha e expede formal SEM esperar pagar o ITCMD (Fisco é intimado depois)! Prazo abrir inventário = 2 MESES!"
  },
  {
    "id": "mig_cpc_031",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Ação de Consignação em Pagamento - Depósito Inicial e Insuficiência",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "O devedor de aluguel ajuizou ação de consignação em pagamento diante da recusa injustificada do locador em receber, mas não depositou a quantia no prazo de 5 dias após deferido o depósito inicial (ou depositou valor a menor em razão de divergência de cálculo). Quais as consequências de cada conduta no CPC?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo para o autor efetuar o depósito inicial na consignação judicial é de 15 dias após a citação do réu."
      },
      {
        "letter": "B",
        "text": "Quando o réu alega insuficiência do depósito na contestação, ele não precisa indicar o montante que entende exato."
      },
      {
        "letter": "C",
        "text": "A consignação extrajudicial em estabelecimento bancário é cabível para obrigações de entregar coisa certa móvel ou imóvel."
      },
      {
        "letter": "D",
        "text": "Não realizado o depósito inicial pelo autor no prazo de 5 DIAS do deferimento, o processo será EXTINTO SEM RESOLUÇÃO DO MÉRITO (Art. 542, parágrafo único); porém, se o réu alegar apenas que o depósito efetuado é INSUFICIENTE (depósito a menor), o autor poderá completá-lo no prazo de 10 DIAS, salvo se corresponder à prestação cujo inadimplemento acarrete a rescisão do contrato (Art. 545 CPC)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Consignação em Pagamento (Arts. 539–549 CPC): Extrajudicial = só dinheiro, em banco oficial, credor tem 10 dias após AR para recusar (se recusar, autor tem 1 mês para propor ação judicial!). Judicial = depósito em 5 dias do deferimento (senão extingue); se réu alega depósito insuficiente, deve dizer quanto falta (Art. 544, par. único) e autor pode complementar em 10 dias (Art. 545).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 542, I, o autor deve requerer o depósito da quantia ou coisa devida a ser efetivado no prazo de 5 DIAS contados do deferimento (sob pena de extinção sem mérito)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 544, parágrafo único, alegada insuficiência do depósito, é lícito ao réu levantar a parte incontroversa desde logo e DEVE o réu indicar o montante que entende devido (sob pena de não valer a alegação)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 539, § 1º, do CPC, a consignação extrajudicial bancária (com carta com AR dando 10 dias para o credor recusar) restringe-se exclusivamente a obrigações em DINHEIRO."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 539 a 549 do CPC/2015",
        "textSnippet": "Consignação em Pagamento (Arts. 539–549 CPC): Extrajudicial = só dinheiro, em banco oficial, credor tem 10 dias após AR para recusar (se recusar, autor tem 1 mês para propor ação judicial!). Judicial = depósito em 5 dias do deferimento (senão extingue); se réu alega depósito insuficiente, deve dizer quanto falta (Art. 544, par. único) e autor pode complementar em 10 dias (Art. 545)."
      }
    ],
    "professorTip": "Consignação: banco (extrajudicial) = SÓ dinheiro (+ 10d pro credor recusar; se recusar, 1 mês pra ação!). Judicial: 5 dias pra depositar; se insuficiente, réu diz o valor e autor completa em 10 dias!"
  },
  {
    "id": "mig_cpc_032",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Liquidação de Sentença - Por Arbitramento vs. Pelo Procedimento Comum",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Proferida sentença condenatória genérica reconhecendo o dever de indenizar lucros cessantes por paralisação de fábrica, verificou-se a necessidade de alegar e provar fatos novos supervenientes (extensão real do faturamento perdido nos meses seguintes). Qual modalidade de liquidação deve ser adotada e qual recurso cabe da decisão que a julga?",
    "options": [
      {
        "letter": "A",
        "text": "Quando depender apenas de simples cálculos aritméticos de juros e correção monetária, é obrigatório instaurar processo prévio de liquidação por arbitramento."
      },
      {
        "letter": "B",
        "text": "A decisão que julga o incidente de liquidação de sentença é recorrível por meio de apelação por encerrar a fase cognitiva."
      },
      {
        "letter": "C",
        "text": "Na fase de liquidação de sentença, é lícito ao juiz modificar a sentença condenatória transitada em julgado para rediscutir a responsabilidade do réu."
      },
      {
        "letter": "D",
        "text": "Deve-se adotar a LIQUIDAÇÃO PELO PROCEDIMENTO COMUM (quando houver necessidade de alegar e provar FATO NOVO — Art. 509, II, CPC — diferente da liquidação por arbitramento, que decorre apenas de convenção ou natureza do objeto sem fatos novos, e do mero cálculo aritmético que dispensa liquidação!); da decisão proferida na liquidação de sentença cabe AGRAVO DE INSTRUMENTO (Art. 1.015, parágrafo único, CPC)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Liquidação de sentença (Arts. 509–512 CPC): (1) Simples cálculo aritmético = já vai direto pro cumprimento de sentença; (2) Arbitramento = exige perícia/avaliação sem fato novo (Art. 509, I); (3) Procedimento Comum = precisa alegar e provar FATO NOVO (Art. 509, II). Cabe desde logo mesmo na pendência de recurso (liquidação provisória — Art. 512). Recurso da decisão final de liquidação = Agravo de Instrumento!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 509, § 2º, quando a apuração depender apenas de cálculo aritmético, o credor promove diretamente o CUMPRIMENTO DE SENTENÇA apresentando o demonstrativo discriminado do débito."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 1.015, parágrafo único, cabe AGRAVO DE INSTRUMENTO contra decisões interlocutórias proferidas na fase de LIQUIDAÇÃO de sentença ou de cumprimento de sentença."
      },
      {
        "letter": "C",
        "explanation": "Pelo princípio da fidelidade ao título (Art. 509, § 4º), na liquidação é VEDADO discutir de novo a lide ou modificar a sentença que a julgou."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 509 a 512 do CPC/2015",
        "textSnippet": "Liquidação de sentença (Arts. 509–512 CPC): (1) Simples cálculo aritmético = já vai direto pro cumprimento de sentença; (2) Arbitramento = exige perícia/avaliação sem fato novo (Art. 509, I); (3) Procedimento Comum = precisa alegar e provar FATO NOVO (Art. 509, II). Cabe desde logo mesmo na pendência de recurso (liquidação provisória — Art. 512). Recurso da decisão final de liquidação = Agravo de Instrumento!"
      }
    ],
    "professorTip": "Liquidação: Precisa provar FATO NOVO = Procedimento Comum! Só avaliação técnica sem fato novo = Arbitramento! Só conta matemática = vai direto pro Cumprimento! Recurso da liquidação = AGRAVO DE INSTRUMENTO!"
  },
  {
    "id": "mig_cpc_033",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Suspensão e Extinção do Processo - Desistência, Abandono e Coisa Julgada",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Após oferecer contestação, o réu requereu a extinção do feito porque o autor abandonou o processo por mais de 30 dias sem praticar ato que lhe competia, mesmo após intimado pessoalmente em 5 dias; em outro feito já contestado, o próprio autor formulou pedido de desistência unilateral da ação. Quais as regras do CPC?",
    "options": [
      {
        "letter": "A",
        "text": "O autor pode desistir unilateralmente da ação a qualquer momento até o trânsito em julgado em grau recursal, independentemente da concordância do réu."
      },
      {
        "letter": "B",
        "text": "O juiz pode extinguir o processo de ofício por abandono de causa do autor mesmo após apresentada contestação pelo réu."
      },
      {
        "letter": "C",
        "text": "A extinção do processo por abandono (3 vezes consecutivas) não impede o autor de propor a mesma ação uma quarta vez."
      },
      {
        "letter": "D",
        "text": "A desistência da ação após o oferecimento da contestação NÃO pode ser homologada sem o consentimento do réu (Art. 485, § 4º — que só pode recusar justificadamente? Não, basta não consentir, podendo apenas o juiz afastar recusa abusiva na jurisprudência — e só pode desistir até a SENTENÇA, § 5º); e o abandono da causa por mais de 30 dias exige prévia intimação PESSOAL da parte (não basta do advogado — § 1º) E requerimento do réu (Súmula 240 STJ — o juiz não extingue de ofício por abandono após contestação!)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Arts. 485 e 486 CPC: Desistência da ação = até a sentença (após contestação, exige anuência do réu). Desistência do recurso (Art. 998) = a qualquer tempo, sem anuência! Abandono pelo autor (> 30 dias): exige intimação pessoal em 5 dias + requerimento do réu se já contestou (Súmula 240 STJ). 3 abandonos = perempção (Art. 486, § 3º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Após a contestação, a desistência depende do consentimento do réu (§ 4º); e a desistência da ação só pode ser apresentada até a SENTENÇA (§ 5º — diferente da desistência do RECURSO, que pode ocorrer a qualquer tempo sem anuência do recorrido — Art. 998!)."
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 240 do STJ, a extinção do processo por abandono da causa pelo autor (Art. 485, III) depende de REQUERIMENTO DO RÉU (não pode ser decretada de ofício se o réu já contestou)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 486, § 3º, se o autor der causa, por 3 (três) vezes, a sentença fundada em abandono da causa (Art. 485, III), NÃO poderá propor nova ação contra o réu com o mesmo objeto (perempção — ficando apenas com a possibilidade de alegar seu direito em defesa!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 313, 485 e 487 do CPC/2015",
        "textSnippet": "Arts. 485 e 486 CPC: Desistência da ação = até a sentença (após contestação, exige anuência do réu). Desistência do recurso (Art. 998) = a qualquer tempo, sem anuência! Abandono pelo autor (> 30 dias): exige intimação pessoal em 5 dias + requerimento do réu se já contestou (Súmula 240 STJ). 3 abandonos = perempção (Art. 486, § 3º)."
      }
    ],
    "jurisprudence": "Súmula 240 do STJ",
    "professorTip": "Desistência da AÇÃO: até a sentença + após contestação precisa anuência do réu! Desistência do RECURSO: sem anuência! Abandono (Art. 485, III): intimação PESSOAL em 5d + pedido do réu (Súm. 240 STJ)! 3 abandonos = PEREMPÇÃO!"
  },
  {
    "id": "mig_cpc_034",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Incidente de Assunção de Competência (IAC) e Conflito de Competência",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em apelação cível envolvendo relevante questão de direito com grande repercussão social, porém SEM repetição em múltiplos processos (caso isolado de grande impacto), um Desembargador relator propôs a instauração de Incidente de Assunção de Competência (IAC). Além disso, dois juízes (um estadual e um federal) declararam-se simultaneamente incompetentes para julgar a mesma ação. Quem julga o conflito e cabe IAC sem repetição?",
    "options": [
      {
        "letter": "A",
        "text": "O IAC exige exatamente a multiplicação massiva de centenas de processos idênticos, assim como o IRDR."
      },
      {
        "letter": "B",
        "text": "Conflito de competência entre um juiz estadual e um juiz federal do mesmo Estado é julgado pelo Tribunal Regional Federal da respectiva região."
      },
      {
        "letter": "C",
        "text": "Quem suscitou anteriormente a exceção/preliminar de incompetência pode suscitar também conflito de competência sobre a mesma questão."
      },
      {
        "letter": "D",
        "text": "SIM, cabe IAC exatamente quando houver relevante questão de direito com grande repercussão social, SEM REPETIÇÃO EM MÚLTIPLOS PROCESSOS (Art. 947 CPC — o acórdão do órgão colegiado indicado pelo regimento vinculará todos os juízes e órgãos fracionários); e o conflito negativo de competência entre juiz estadual e juiz federal (não vinculados ao mesmo tribunal) é julgado pelo SUPERIOR TRIBUNAL DE JUSTIÇA — STJ (Art. 105, I, \"d\", CF)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Diferença chave no sistema de precedentes: IRDR = COM repetição em massa (Art. 976); IAC = SEM repetição em múltiplos processos, mas relevante questão de direito com grande repercussão social ou divergência entre turmas (Art. 947). Ambos formam precedentes obrigatórios (Art. 927, III). Conflito entre juiz estadual comum e juiz federal = STJ.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "É exatamente a diferença fundamental entre os dois incidentes: IRDR (Art. 976) = COM repetição de múltiplos processos; IAC (Art. 947) = SEM repetição em múltiplos processos (caso relevante/repercussão social ou prevenção/composição de divergência interna)."
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 3 do STJ e Art. 105, I, \"d\", da CF, compete ao STJ julgar conflito entre juiz estadual e juiz federal — salvo se o juiz estadual estiver investido de jurisdição federal (ex.: previdenciária delegada da mesma região — Súmula 3 STJ: \"Compete ao TRF dirimir conflito de competência verificado, na respectiva região, entre Juiz Federal e Juiz Estadual investido de jurisdição federal\")."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 952 do CPC, não pode suscitar conflito a parte que, no processo, arguiu incompetência relativa."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 66, 947 e 951 a 959 do CPC/2015",
        "textSnippet": "Diferença chave no sistema de precedentes: IRDR = COM repetição em massa (Art. 976); IAC = SEM repetição em múltiplos processos, mas relevante questão de direito com grande repercussão social ou divergência entre turmas (Art. 947). Ambos formam precedentes obrigatórios (Art. 927, III). Conflito entre juiz estadual comum e juiz federal = STJ."
      }
    ],
    "jurisprudence": "Súmula 3 do STJ",
    "professorTip": "IRDR = COM repetição em massa! IAC = SEM repetição em massa (relevância/repercussão social)! Conflito Juiz Estadual x Juiz Federal = STJ (só vai pro TRF se o estadual estiver no exercício de jurisdição federal — Súmula 3 STJ)!"
  },
  {
    "id": "mig_cpc_035",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Mediação, Conciliação e Impedimento Ético dos Mediadores (Art. 166–175 CPC)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Durante sessão de conciliação/mediação judicial, um mediador atuou em conflito familiar sem sucesso na autocomposição. Meses depois, o mesmo profissional (que também é advogado) foi contratado por uma das partes para patrocinar o divórcio litigioso no Judiciário. Além disso, o mediador revelou ao juiz informações confidenciais ditas em sessão privada (caucus) para ajudar na sentença. Avalie:",
    "options": [
      {
        "letter": "A",
        "text": "O mediador que não conseguiu acordo pode advogar imediatamente para uma das partes no dia seguinte ao encerramento da mediação."
      },
      {
        "letter": "B",
        "text": "O conciliador atua preferencialmente nos casos em que houver vínculo anterior entre as partes, enquanto o mediador atua quando não houver vínculo prévio."
      },
      {
        "letter": "C",
        "text": "Os termos de acordo celebrados em câmara privada de mediação não possuem força de título executivo sem homologação judicial prévia."
      },
      {
        "letter": "D",
        "text": "Ambas as condutas são proibidas: o conciliador e o mediador ficam IMPEDIDOS, pelo prazo de 1 ANO contado do término da última audiência em que atuaram, de assessorar, representar ou patrocinar qualquer das partes (Art. 172 CPC); e os princípios da confidencialidade e sigilo proíbem a divulgação de informações da sessão, não podendo sequer o mediador depor como testemunha acerca dos fatos ali tratados (Art. 166, §§ 1º e 2º)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Arts. 165–175 CPC: Conciliador (sem vínculo prévio; pode sugerir soluções); Mediador (com vínculo anterior; restabelece diálogo, não sugere). Princípios (Art. 166): independência, imparcialidade, autonomia da vontade, confidencialidade, oralidade, informalidade e decisão informada. Quarentena de 1 ano sem advogar/assessorar qualquer das partes (Art. 172).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 172 do CPC (e Art. 6º da Lei de Mediação) impõe quarentena obrigatória de 1 ANO de impedimento para advogar/assessorar qualquer das partes."
      },
      {
        "letter": "B",
        "explanation": "É exatamente o contrário! Pelo Art. 165, §§ 2º e 3º, do CPC: CONCILIADOR = preferencialmente SEM vínculo anterior (pode sugerir soluções); MEDIADOR = preferencialmente COM vínculo anterior (ex.: família, vizinhança, sociedade — auxilia as partes a compreenderem as questões e construírem por si mesmas a solução, sem sugerir!)."
      },
      {
        "letter": "C",
        "explanation": "O instrumento de transação referendado pelo MP, Defensoria, Advocacia Pública, advogados dos transatores ou por conciliador/mediador credenciado por tribunal é TÍTULO EXECUTIVO EXTRAJUDICIAL (Art. 784, IV, CPC)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 165 a 175 do CPC/2015 e Lei nº 13.140/2015",
        "textSnippet": "Arts. 165–175 CPC: Conciliador (sem vínculo prévio; pode sugerir soluções); Mediador (com vínculo anterior; restabelece diálogo, não sugere). Princípios (Art. 166): independência, imparcialidade, autonomia da vontade, confidencialidade, oralidade, informalidade e decisão informada. Quarentena de 1 ano sem advogar/assessorar qualquer das partes (Art. 172)."
      }
    ],
    "professorTip": "Conciliador = SEM vínculo anterior (pode sugerir). Mediador = COM vínculo anterior (NÃO sugere, só facilita!). Sigilo absoluto (nem testemunha pode ser!) + quarentena de 1 ANO sem advogar para as partes (Art. 172)!"
  },
  {
    "id": "mig_cpc_036",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Atos Processuais Eletrônicos, Preclusão, Nulidade e Princípio da Primazia do Mérito",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Ao analisar recurso de apelação interposto tempestivamente sem comprovante de pagamento do preparo inicial (ou com pagamento insuficiente das custas recursais), o Desembargador relator inadmitiu imediatamente o recurso como deserto sem intimar o recorrente. A decisão respeita o CPC/2015?",
    "options": [
      {
        "letter": "A",
        "text": "Na falta total de comprovação de preparo no ato da interposição, opera-se deserção imediata sem oportunidade de regularização."
      },
      {
        "letter": "B",
        "text": "Havendo vício formal sanável em recurso ou no preparo insuficiente, o relator deve primeiro aplicar multa de 10% antes de julgar o mérito."
      },
      {
        "letter": "C",
        "text": "O erro no preenchimento da guia de custas recursais implica deserção automática sem chance de correção."
      },
      {
        "letter": "D",
        "text": "Não respeita, pois pelo princípio da primazia da decisão de mérito e cooperação (Arts. 4º, 6º, 932, parágrafo único e 1.007, §§ 2º e 4º, CPC): (1) se o preparo foi recolhido a MENOR (insuficiência), intima-se para complementar em 5 dias úteis no valor simples; (2) se NÃO houve NENHUM recolhimento na interposição, intima-se para realizar o recolhimento EM DOBRO em 5 dias úteis (e se ainda não recolher ou recolher a menor na dobra, aí sim haverá deserção, sem nova oportunidade — § 5º)."
      }
    ],
    "correctAnswer": "D",
    "justification": "Sistema de saneamento recursal (Arts. 932, par. único e 1.007 CPC): nenhum recurso é inadmitido de plano por vício sanável sem prazo de 5 dias úteis! Insuficiência de preparo = complementa o que falta em 5 dias (§ 2º); ausência total de preparo = recolhe EM DOBRO em 5 dias (§ 4º — vedada nova complementação se errar a dobra, § 5º); erro na guia = sana em 5 dias (§ 7º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 1.007, § 4º, do CPC/2015 criou regra inovadora: quem NÃO comprovou nenhum preparo no ato da interposição é intimado para recolher EM DOBRO em 5 dias (salvo se houver apenas erro no preenchimento da guia, quando apenas regulariza em 5 dias — § 7º)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 932, parágrafo único, determina que ANTES de considerar inadmissível o recurso, o relator concederá prazo de 5 DIAS ao recorrente para que seja sanado vício ou complementada a documentação exigível."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.007, § 7º, o equívoco no preenchimento da guia não implicará pena de deserção, cabendo ao relator intimar o recorrente para sanar o vício em 5 dias."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 4º, 6º, 276 a 283 e 932, parágrafo único, CPC",
        "textSnippet": "Sistema de saneamento recursal (Arts. 932, par. único e 1.007 CPC): nenhum recurso é inadmitido de plano por vício sanável sem prazo de 5 dias úteis! Insuficiência de preparo = complementa o que falta em 5 dias (§ 2º); ausência total de preparo = recolhe EM DOBRO em 5 dias (§ 4º — vedada nova complementação se errar a dobra, § 5º); erro na guia = sana em 5 dias (§ 7º)."
      }
    ],
    "professorTip": "Preparo no CPC: Pagou A MENOR = intima pra completar em 5 dias! Não pagou NADA = intima pra pagar EM DOBRO em 5 dias! Erro na guia = sana em 5 dias! Antes de inadmitir qualquer vício sanável = dá 5 dias (Art. 932, par. único)!"
  },
  {
    "id": "mig_cpc_037",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Competência Territorial vs. Absoluta e Cláusula de Eleição de Foro (Lei 14.879/2024)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em contrato empresarial paritário firmado em São Paulo entre sociedades empresárias com sede no Paraná, as partes elegeram o foro de Manaus/AM sem qualquer vínculo com o domicílio das partes ou com o local da obrigação. O juiz de Manaus pode reconhecer de ofício a abusividade da eleição de foro?",
    "options": [
      {
        "letter": "A",
        "text": "Não, pois pela Súmula 33 do STJ a incompetência relativa e a abusividade de eleição de foro nunca podem ser declaradas de ofício."
      },
      {
        "letter": "B",
        "text": "A eleição de foro pode alterar inclusive a competência absoluta em razão da matéria e da hierarquia."
      },
      {
        "letter": "C",
        "text": "Se o réu não alegar incompetência relativa na contestação, a competência continua prorrogável apenas com concordância posterior do Ministério Público."
      },
      {
        "letter": "D",
        "text": "Sim. Com a Lei nº 14.879/2024, o Art. 63, §§ 1º e 5º, do CPC passou a exigir que a eleição de foro guarde pertinência com o domicílio/residência de uma das partes ou com o local da obrigação (salvo consumerista quando favorável ao consumidor), e o ajuizamento em juízo aleatório sem vinculação constitui prática abusiva que autoriza o juiz a declinar da competência DE OFÍCIO."
      }
    ],
    "correctAnswer": "D",
    "justification": "Lei nº 14.879/2024 alterou o Art. 63 CPC: eleição de foro deve guardar pertinência com domicílio/residência das partes ou local da obrigação; foro aleatório configura prática abusiva passível de declinação de ofício pelo juiz.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Embora a regra geral da incompetência relativa proíba declaração de ofício (Súmula 33 STJ), o Art. 63, §§ 3º e 5º, do CPC (com redação da Lei 14.879/2024) prevê expressamente o controle de ofício da cláusula abusiva e do foro aleatório."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 62 e Art. 63 do CPC, somente a competência relativa (valor e território) pode ser modificada por eleição de foro; competência absoluta é inderrogável."
      },
      {
        "letter": "C",
        "explanation": "A não alegação da incompetência relativa em preliminar de contestação gera prorrogação imediata da competência (Art. 65 CPC)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 62 a 65 do CPC (alterado pela Lei nº 14.879/2024)",
        "textSnippet": "Lei nº 14.879/2024 alterou o Art. 63 CPC: eleição de foro deve guardar pertinência com domicílio/residência das partes ou local da obrigação; foro aleatório configura prática abusiva passível de declinação de ofício pelo juiz."
      }
    ],
    "professorTip": "Art. 63 CPC (Lei 14.879/2024): Foro aleatório sem ligação com as partes/obrigação = ABUSIVO -> juiz declina DE OFÍCIO!"
  },
  {
    "id": "mig_cpc_038",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Capacidade Postulatória, Honorários Advocatícios Sucumbenciais e Tema 1076 STJ",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em ação cível de cobrança com condenação ou proveito econômico líquido de R$ 2.000.000,00, o juiz fixou honorários advocatícios sucumbenciais por apreciação equitativa em R$ 5.000,00 alegando que o percentual de 10% a 20% seria exorbitante. Essa redução é admitida pelo STJ (Tema 1076)?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, porque o juiz pode sempre reduzir honorários por equidade quando considerar o valor econômico da causa elevado."
      },
      {
        "letter": "B",
        "text": "Os honorários sucumbenciais pertencem à parte vencedora e podem ser compensados livremente em caso de sucumbência recíproca."
      },
      {
        "letter": "C",
        "text": "Se a sentença transitada em julgado omitir os honorários sucumbenciais, eles não poderão ser cobrados em ação autônoma."
      },
      {
        "letter": "D",
        "text": "Não. No Tema 1076 dos Recursos Repetitivos, o STJ firmou que a fixação de honorários por apreciação equitativa (Art. 85, § 8º, CPC) NÃO é permitida quando os valores da condenação, da causa ou o proveito econômico forem elevados, devendo observar obrigatoriamente os percentuais legais do Art. 85, §§ 2º e 3º."
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 85 CPC + STJ Tema 1076: honorários pertencem ao advogado (vedada compensação); em causas com valor/proveito econômico elevado é proibida fixação por equidade; sentença omissa admite ação autônoma (Art. 85, § 18).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Tema 1076 do STJ vedou expressamente a apreciação equitativa em causas de valor elevado, restringindo o § 8º apenas a proveito econômico inestimável/irrisório ou valor muito baixo."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 85, § 14, do CPC, os honorários constituem direito do ADVOGADO, têm natureza alimentar e é VEDADA a compensação em caso de sucumbência parcial."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 85, § 18, do CPC (superando a antiga Súmula 453 STJ), caso a decisão transitada em julgado seja omissa quanto aos honorários, É CABÍVEL ação autônoma para sua definição e cobrança."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Art. 85 do CPC e STJ Tema 1076",
        "textSnippet": "Art. 85 CPC + STJ Tema 1076: honorários pertencem ao advogado (vedada compensação); em causas com valor/proveito econômico elevado é proibida fixação por equidade; sentença omissa admite ação autônoma (Art. 85, § 18)."
      }
    ],
    "jurisprudence": "STJ Tema 1076",
    "professorTip": "STJ Tema 1076: Valor alto da causa NÃO autoriza equidade (aplica 10–20% / faixas da Fazenda)! Honorários = sem compensação + cabe ação autônoma se omissa a sentença!"
  },
  {
    "id": "mig_cpc_039",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Litisconsórcio e Intervenção de Terceiros - Desconsideração (IDPJ) e Amicus Curiae",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Exequente requer a instauração de Incidente de Desconsideração da Personalidade Jurídica (IDPJ) na fase de cumprimento de sentença para atingir patrimônio de sócio. Quais os efeitos imediatos da instauração do incidente sobre o processo principal e qual recurso cabe contra a decisão interlocutória que o resolve?",
    "options": [
      {
        "letter": "A",
        "text": "O IDPJ pode ser decidido de plano sem citar o sócio e a decisão só pode ser impugnada na apelação final."
      },
      {
        "letter": "B",
        "text": "A intervenção do amicus curiae autoriza a interposição de recurso especial e extraordinário contra a decisão de mérito."
      },
      {
        "letter": "C",
        "text": "A admissão de amicus curiae modifica a competência do juiz estadual para a Justiça Federal quando se tratar de órgão federal neutro."
      },
      {
        "letter": "D",
        "text": "A instauração do IDPJ suspende o processo principal (salvo se requerida na própria petição inicial — Art. 134, §§ 2º e 3º), exige citação do sócio/PJ para se manifestar e requerer provas em 15 dias (Art. 135), e a decisão interlocutória que julga o IDPJ desafia AGRAVO DE INSTRUMENTO (Art. 1.015, IV, CPC) — ou agravo interno se proferida por relator no tribunal (Art. 136, parágrafo único)."
      }
    ],
    "correctAnswer": "D",
    "justification": "IDPJ (Arts. 133–137): a pedido da parte/MP (nunca de ofício); suspende o processo (salvo se pedido na inicial); cita em 15d; decisão desafia Agravo de Instrumento (1º grau) ou Agravo Interno (relator). Amicus curiae (Art. 138): decisão irrecorrível de admissão; só opõe embargos de declaração e recorre no IRDR.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 135 impõe citação prévia em 15 dias em nome do contraditório, e o Art. 1.015, IV, prevê Agravo de Instrumento imediato."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 138, §§ 1º e 3º, o amicus curiae NÃO pode recorrer de decisões de mérito, salvo oposição de EMBARGOS DE DECLARAÇÃO e recurso da decisão que julgar o IRDR."
      },
      {
        "letter": "C",
        "explanation": "O Art. 138, § 1º, estabelece expressamente que a intervenção do amicus curiae não implica alteração de competência."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 113 a 138 do CPC",
        "textSnippet": "IDPJ (Arts. 133–137): a pedido da parte/MP (nunca de ofício); suspende o processo (salvo se pedido na inicial); cita em 15d; decisão desafia Agravo de Instrumento (1º grau) ou Agravo Interno (relator). Amicus curiae (Art. 138): decisão irrecorrível de admissão; só opõe embargos de declaração e recorre no IRDR."
      }
    ],
    "professorTip": "IDPJ: nunca de ofício + suspende (salvo na inicial) + citação 15d + Agravo de Instrumento! Amicus Curiae: SÓ opõe Embargos de Declaração e recorre no IRDR!"
  },
  {
    "id": "mig_cpc_040",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Prazos Processuais, Litisconsortes com Advogados Diferentes e Fazenda Pública",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em processo eletrônico (autos digitais), dois réus com procuradores distintos de escritórios diferentes foram citados para contestar. Além disso, em outro processo físico, uma autarquia estadual figura como ré. Como são contados os prazos em ambos os casos?",
    "options": [
      {
        "letter": "A",
        "text": "Em autos eletrônicos, litisconsortes de escritórios diferentes mantêm direito ao prazo em dobro."
      },
      {
        "letter": "B",
        "text": "A Fazenda Pública possui prazo em quádruplo para contestar e em dobro para recorrer, igual ao antigo CPC/1973."
      },
      {
        "letter": "C",
        "text": "Nos processos em autos ELETRÔNICOS, NÃO se aplica o prazo em dobro para litisconsortes com advogados diferentes (Art. 229, § 2º, CPC — prazo simples de 15 dias úteis para cada réu); já para a autarquia estadual (Fazenda Pública) ou Ministério Público ou Defensoria Pública, aplica-se o prazo em DOBRO para todas as manifestações processuais (Arts. 180, 183 e 186 CPC), inclusive em autos eletrônicos, salvo quando a lei fixar prazo próprio."
      },
      {
        "letter": "D",
        "text": "Os prazos processuais contam-se sempre em dias corridos, incluindo finais de semana e feriados."
      }
    ],
    "correctAnswer": "C",
    "justification": "Prazos no CPC: dias úteis apenas para prazos processuais (Art. 219); Fazenda Pública, MP e Defensoria = prazo em DOBRO em todas as manifestações (físico ou eletrônico, salvo prazo próprio); Litisconsortes com procuradores diferentes = dobro APENAS em autos físicos (nunca em eletrônicos — Art. 229, § 2º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 229, § 2º, CPC exclui expressamente o prazo em dobro do litisconsórcio nos autos eletrônicos."
      },
      {
        "letter": "B",
        "explanation": "O CPC/2015 unificou para DOBRO em todas as manifestações da Fazenda Pública, MP e Defensoria (acabou o quádruplo para contestar!)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 219 do CPC, na contagem de prazo em dias, computam-se somente os dias ÚTEIS (aplicável a prazos processuais; não se aplica a prazos de direito material como prescrição/decadência)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 180, 183, 186, 219 e 229 do CPC",
        "textSnippet": "Prazos no CPC: dias úteis apenas para prazos processuais (Art. 219); Fazenda Pública, MP e Defensoria = prazo em DOBRO em todas as manifestações (físico ou eletrônico, salvo prazo próprio); Litisconsortes com procuradores diferentes = dobro APENAS em autos físicos (nunca em eletrônicos — Art. 229, § 2º)."
      }
    ],
    "professorTip": "Prazo em DOBRO: Fazenda/MP/Defensoria = SIM sempre (acabou o quádruplo!); Litisconsortes de escritórios distintos = SÓ em processo FÍSICO (processo eletrônico = prazo simples)!"
  },
  {
    "id": "mig_cpc_041",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Processual Civil",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Negócio Jurídico Processual (NJP) e Calendário Processual",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Em ação civil versando sobre inadimplemento de contrato empresarial (direito disponível), autor e réu, plenamente capazes, firmam negócio jurídico processual típico ou atípico ajustando a ampliação dos prazos recursais e a dispensa de audiência de conciliação. As partes podem pactuar livremente sobre recursos inexistentes ou afastar o controle de nulidade pelo juiz?",
    "options": [
      {
        "letter": "A",
        "text": "O negócio jurídico processual depende sempre de prévia homologação judicial para ter eficácia e só vale após a citação."
      },
      {
        "letter": "B",
        "text": "As partes podem pactuar inclusive a redução de prazos peremptórios recursais ou a supressão do duplo grau obrigatório."
      },
      {
        "letter": "C",
        "text": "Não. Pelo Art. 190, caput e parágrafo único, do CPC, as partes podem estipular mudanças no procedimento sobre direitos que admitam autocomposição para ajustá-lo às especificidades da causa e convencionar ônus/poderes/deveres processuais, mas NÃO podem criar novos recursos ou alterar regras de ordem pública/competência absoluta, cabendo ao juiz controlar de ofício a validade (recusando aplicação em caso de nulidade, inserção abusiva em contrato de adesão ou vulnerabilidade manifesta)."
      },
      {
        "letter": "D",
        "text": "O calendário processual previsto no Art. 191 pode ser imposto unilateralmente pelo autor sem participação do juiz."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 190 CPC (NJP atípico): direitos que admitam autocomposição + partes capazes; juiz controla validade (nulidade, contrato de adesão abusivo, manifesta vulnerabilidade). Art. 191 (Calendário): comum acordo partes + juiz, dispensa intimação das datas fixadas.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 190 permite celebração ANTES ou durante o processo, e tem eficácia imediata independentemente de homologação judicial (Art. 200 CPC), salvo casos que exijam ato judicial como o calendário do Art. 191."
      },
      {
        "letter": "B",
        "explanation": "Embora possam convencionar sobre ônus, faculdades e deveres das próprias partes (ex.: ônus da prova, prazos próprios não peremptórios — discutido quanto a recursos, mas criação de recurso viola taxatividade legal), não se dispõe de poderes/deveres exclusivos do Estado-juiz nem de regras de ordem pública."
      },
      {
        "letter": "D",
        "explanation": "O calendário para a prática de atos processuais (Art. 191) exige comum acordo entre AS PARTES E O JUIZ, vinculando todos e dispensando intimação dos atos nele previstos."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 190 e 191 do CPC",
        "textSnippet": "Art. 190 CPC (NJP atípico): direitos que admitam autocomposição + partes capazes; juiz controla validade (nulidade, contrato de adesão abusivo, manifesta vulnerabilidade). Art. 191 (Calendário): comum acordo partes + juiz, dispensa intimação das datas fixadas."
      }
    ],
    "professorTip": "NJP (Art. 190): autocomposição + partes capazes; juiz barra se nulidade/adesão abusiva/vulnerabilidade! Calendário (Art. 191): partes + juiz combinam datas e DISPENSAM intimação!"
  },
  {
    "id": "mig_cpc_042",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Tutelas Provisórias - Urgência Antecipada Antecedente e Estabilização",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Autor ajuíza pedido de tutela provisória de urgência antecipada em caráter antecedente para fornecimento imediato de tratamento médico. O juiz defere a liminar, e o réu, devidamente citado e intimado, não interpõe o recurso cabível (agravo de instrumento), apresentando apenas simples petição de contestação sem recorrer. Ocorre a estabilização da tutela?",
    "options": [
      {
        "letter": "A",
        "text": "A tutela estabilizada faz coisa julgada material definitiva imediatamente, impedindo ação revisional futura."
      },
      {
        "letter": "B",
        "text": "A tutela cautelar em caráter antecedente também se estabiliza nos termos do Art. 304 caso o réu não recorra."
      },
      {
        "letter": "C",
        "text": "Questão clássica do CPC (Art. 304) e STJ: pela letra do Art. 304, a tutela antecipada torna-se estável se da decisão que a conceder não for interposto o respectivo RECURSO (extinguindo-se o processo, e cabendo ação revisional/anulatória em 2 anos — sem fazer coisa julgada material!); atenção porém ao entendimento consolidado no STJ (1ª Turma x 3ª Turma): a 3ª Turma exige impugnação por recurso ou contestação inequívoca contra a medida, enquanto a 1ª Turma exige estritamente a interposição do agravo de instrumento conforme o texto literal do Art. 304."
      },
      {
        "letter": "D",
        "text": "Na tutela da evidência do Art. 311 do CPC, exige-se sempre demonstração cumulativa de perigo de dano ou risco ao resultado útil do processo."
      }
    ],
    "correctAnswer": "C",
    "justification": "Tutela Provisória (Arts. 294–311 CPC): Urgência (cautelar ou antecipada; antecedente ou incidental — exige probabilidade do direito + perigo de dano). Só tutela antecipada antecedente estabiliza (não faz coisa julgada; ação revisional em 2 anos). Evidência = sem urgência (liminar só incisos II — tese repetitiva/SV — e III — reipersecutória documentada).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 304, §§ 5º e 6º, dispõe expressamente que a decisão que concede a tutela NÃO fará coisa julgada, podendo ser revista, reformada ou invalidada por ação própria no prazo de 2 anos contados da ciência da decisão que extinguiu o processo."
      },
      {
        "letter": "B",
        "explanation": "A estabilização prevista no Art. 304 aplica-se EXCLUSIVAMENTE à tutela ANTECIPADA (satisfativa) antecedente, nunca à tutela cautelar nem à tutela de evidência."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 311, caput, a tutela da evidência será concedida INDEPENDENTEMENTE da demonstração de perigo de dano ou de risco ao resultado útil do processo (e nas hipóteses II e III pode ser deferida liminarmente inaudita altera parte)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 294 a 310 do CPC",
        "textSnippet": "Tutela Provisória (Arts. 294–311 CPC): Urgência (cautelar ou antecipada; antecedente ou incidental — exige probabilidade do direito + perigo de dano). Só tutela antecipada antecedente estabiliza (não faz coisa julgada; ação revisional em 2 anos). Evidência = sem urgência (liminar só incisos II — tese repetitiva/SV — e III — reipersecutória documentada)."
      }
    ],
    "professorTip": "Estabilização (Art. 304) = SÓ na Tutela ANTECIPADA Antecedente! NÃO faz coisa julgada (prazo de 2 ANOS para rever)! Tutela de EVIDÊNCIA = NÃO exige urgência (liminar só incisos II e III)!"
  },
  {
    "id": "mig_cpc_043",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Petição Inicial - Indeferimento, Improcedência Liminar e Emenda",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Ao receber petição inicial em causa que dispensa fase instrutória, o juiz verifica de plano que o pedido contraria frontalmente enunciado de súmula do STJ (sem citação prévia do réu). O que o juiz deve fazer e qual o efeito dessa decisão?",
    "options": [
      {
        "letter": "A",
        "text": "Deve indeferir a petição inicial sem resolução de mérito (Art. 330 CPC) por impossibilidade jurídica do pedido."
      },
      {
        "letter": "B",
        "text": "Antes de indeferir a inicial por falta de requisito formal do Art. 319, o juiz extingue o processo imediatamente sem conceder prazo ao autor."
      },
      {
        "letter": "C",
        "text": "Deve julgar LIMINARMENTE IMPROCEDENTE o pedido (Art. 332, I, CPC), resolvendo o mérito com força de coisa julgada material após o trânsito em julgado, independentemente de citação do réu; havendo apelação do autor, o juiz poderá retratar-se em 5 dias e, se mantiver a sentença, mandará citar o réu para contrarrazões."
      },
      {
        "letter": "D",
        "text": "O juiz não pode julgar liminarmente improcedente o pedido reconhecendo de plano a prescrição ou decadência antes de citar o réu."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 332 CPC (Improcedência Liminar do Pedido): nas causas que dispensem instrução, antes da citação, o juiz julga improcedente (com mérito) se o pedido contrariar súmula do STF/STJ, repetitivo, IRDR/IAC, súmula de TJ sobre direito local, ou se verificar prescrição/decadência. Cabe apelação com juízo de retratação em 5 dias.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A contrariedade a Súmula do STF/STJ, acórdão em repetitivo, IRDR/IAC ou decadência/prescrição em causa que dispensa instrução gera IMPROCEDÊNCIA LIMINAR DO PEDIDO (com mérito — Art. 332), não mero indeferimento sem mérito."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 321 CPC, verificando defeito ou irregularidade sanável, o juiz determinará que o autor a emende ou complete no prazo de 15 dias, indicando com precisão o que deve ser corrigido."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 332, § 1º, do CPC, o juiz também poderá julgar liminarmente improcedente o pedido se verificar, desde logo, a ocorrência de decadência ou de prescrição."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 319 a 332 do CPC",
        "textSnippet": "Art. 332 CPC (Improcedência Liminar do Pedido): nas causas que dispensem instrução, antes da citação, o juiz julga improcedente (com mérito) se o pedido contrariar súmula do STF/STJ, repetitivo, IRDR/IAC, súmula de TJ sobre direito local, ou se verificar prescrição/decadência. Cabe apelação com juízo de retratação em 5 dias."
      }
    ],
    "professorTip": "Art. 332 CPC: Contrariou Súmula STF/STJ, Repetitivo, IRDR ou Prescrição/Decadência? Juiz julga IMPROCEDENTE LIMINARMENTE (COM mérito, sem citar o réu)! Apelação tem retratação em 5 dias!"
  },
  {
    "id": "mig_cpc_044",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Audiência de Conciliação/Mediação e Contestação / Reconvenção",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Autor indicou na petição inicial que NÃO tem interesse na autocomposição; o réu, citado, peticionou informando que também NÃO tem interesse com 5 dias de antecedência da audiência marcada; por fim, o réu apresentou contestação e reconvenção no mesmo prazo. A audiência de conciliação devia ser cancelada e como funciona a reconvenção no CPC/2015?",
    "options": [
      {
        "letter": "A",
        "text": "Basta a manifestação unilateral do autor na inicial para que a audiência do Art. 334 seja cancelada."
      },
      {
        "letter": "B",
        "text": "O não comparecimento injustificado de qualquer parte à audiência de conciliação gera automaticamente revelia com presunção de veracidade."
      },
      {
        "letter": "C",
        "text": "A audiência de conciliação só NÃO será realizada se AMBAS as partes manifestarem expressamente desinteresse na composição consensual (autor na inicial e réu por petição apresentada com pelo menos 10 dias de antecedência — logo, pedido com 5 dias é intempestivo, não cancela automaticamente!); já a reconvenção é proposta NA PRÓPRIA CONTESTAÇÃO (Art. 343 CPC), podendo ser dirigida contra o autor e terceiro ou pelo réu em litisconsórcio com terceiro."
      },
      {
        "letter": "D",
        "text": "A desistência da ação pelo autor ou a extinção sem mérito impede o prosseguimento da reconvenção já proposta."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 334 CPC: audiência obrigatória salvo se direito não admitir autocomposição ou AMBOS recusarem (autor na inicial; réu até 10 dias antes). Falta injustificada = multa até 2% (ato atentatório). Art. 343: reconvenção na própria contestação; independe do destino da ação principal.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 334, § 4º, I, é necessário que AMBAS as partes (autor e réu) manifestem expressamente desinteresse, e o réu deve fazê-lo até 10 dias antes da data marcada (§ 5º)."
      },
      {
        "letter": "B",
        "explanation": "O não comparecimento injustificado à audiência do Art. 334 é considerado ATO ATENTATÓRIO À DIGNIDADE DA JUSTIÇA, sancionado com multa de até 2% da vantagem econômica pretendida ou do valor da causa (não gera revelia!)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 343, § 2º, do CPC, a desistência da ação ou a ocorrência de causa extintiva que impeça o exame de seu mérito NÃO obsta ao prosseguimento do processo quanto à reconvenção."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 334 a 343 do CPC",
        "textSnippet": "Art. 334 CPC: audiência obrigatória salvo se direito não admitir autocomposição ou AMBOS recusarem (autor na inicial; réu até 10 dias antes). Falta injustificada = multa até 2% (ato atentatório). Art. 343: reconvenção na própria contestação; independe do destino da ação principal."
      }
    ],
    "professorTip": "Audiência Art. 334: só cancela se AMBOS recusarem (réu até 10 dias antes)! Faltou sem motivo = multa até 2% (NÃO dá revelia)! Reconvenção = dentro da contestação e segue mesmo se autor desistir!"
  },
  {
    "id": "mig_cpc_045",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Revelia, Julgamento Antecipado Parcial e Saneamento Compartilhado",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em ação contra dois réus solidários sobre o mesmo fato, apenas um deles apresentou contestação tempestiva negando integralmente o fato constitutivo do direito do autor, enquanto o outro permaneceu silente; além disso, em outro caso, apenas um dos dois pedidos cumulados já estava maduro para julgamento imediato enquanto o outro exigia perícia. Como decide o juiz?",
    "options": [
      {
        "letter": "A",
        "text": "Contra o réu que não contestou aplica-se sempre a presunção absoluta de veracidade e extingue-se a defesa do litisconsorte."
      },
      {
        "letter": "B",
        "text": "A decisão de julgamento antecipado parcial do mérito (Art. 356) desafia recurso de apelação imediata."
      },
      {
        "letter": "C",
        "text": "No primeiro caso, embora haja revelia formal do réu inerte, NÃO se aplica seu efeito material (presunção de veracidade), pois em litisconsórcio com fato comum, a contestação de um aproveita ao outro (Art. 345, I, CPC); no segundo caso, o juiz deve proferir JULGAMENTO ANTECIPADO PARCIAL DO MÉRITO quanto ao pedido incontroverso/maduro (Art. 356 CPC), decisão impugnável por AGRAVO DE INSTRUMENTO!"
      },
      {
        "letter": "D",
        "text": "O réu revel não pode mais intervir no processo em nenhuma fase após o prazo de contestação."
      }
    ],
    "correctAnswer": "C",
    "justification": "Revelia (Arts. 344–346 CPC): não gera presunção se litisconsorte contestar, direito indisponível, faltarem provas essenciais ou alegações inverossímeis; revel sem advogado não é intimado (prazos correm da publicação no órgão oficial). Julgamento antecipado parcial (Art. 356): cabe Agravo de Instrumento.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Art. 345, I, CPC: a revelia não produz o efeito de presunção de veracidade se, havendo pluralidade de réus, algum deles contestar a ação."
      },
      {
        "letter": "B",
        "explanation": "Como o processo prossegue quanto aos demais pedidos, a decisão parcial de mérito tem natureza interlocutória e desafia AGRAVO DE INSTRUMENTO (Art. 356, § 5º, e Art. 1.015, II, CPC)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 346, parágrafo único, o revel poderá intervir no processo em qualquer fase, recebendo-o no estado em que se encontrar (e se tiver advogado constituído nos autos, será intimado dos atos normalmente!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 344 a 357 do CPC",
        "textSnippet": "Revelia (Arts. 344–346 CPC): não gera presunção se litisconsorte contestar, direito indisponível, faltarem provas essenciais ou alegações inverossímeis; revel sem advogado não é intimado (prazos correm da publicação no órgão oficial). Julgamento antecipado parcial (Art. 356): cabe Agravo de Instrumento."
      }
    ],
    "professorTip": "Revelia: um réu contestou = NÃO presume verdade para o revel! Julgamento Antecipado PARCIAL de mérito (Art. 356) = recurso é AGRAVO DE INSTRUMENTO!"
  },
  {
    "id": "mig_cpc_046",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Processual Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Provas - Distribuição Dinâmica do Ônus da Prova, Ata Notarial e Prova Emprestada",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Em ação judicial de alta complexidade técnica contra grande empresa, o autor encontra impossibilidade prática de produzir determinada prova técnica cujos documentos e registros estão sob domínio exclusivo da ré. O juiz pode inverter/redistribuir o ônus da prova em decisão saneadora sem prévia intimação?",
    "options": [
      {
        "letter": "A",
        "text": "Não, o CPC veda expressamente a distribuição dinâmica do ônus da prova fora das relações de consumo."
      },
      {
        "letter": "B",
        "text": "As partes jamais podem convencionar contratualmente a redistribuição do ônus da prova antes do processo."
      },
      {
        "letter": "C",
        "text": "O juiz pode atribuir o ônus da prova de modo diverso (distribuição dinâmica do ônus da prova — Art. 373, § 1º, CPC) diante de peculiaridades da causa relacionadas à impossibilidade ou excessiva dificuldade de cumprir o encargo ou maior facilidade de obtenção da prova do fato contrário, desde que o faça por DECISÃO FUNDAMENTADA e assegure à parte oportunidade para desincumbir-se do ônus que lhe foi atribuído (em regra no saneamento, passível de Agravo de Instrumento — Art. 1.015, XI)."
      },
      {
        "letter": "D",
        "text": "A prova emprestada de outro processo só é admitida se houver identidade exata das mesmas partes em ambos os processos."
      }
    ],
    "correctAnswer": "C",
    "justification": "Provas no CPC: Art. 372 (prova emprestada com contraditório); Art. 373, § 1º (distribuição dinâmica fundamentada, com prazo de desincumbência e recurso de Agravo de Instrumento — Art. 1.015, XI); Art. 384 (ata notarial prova existência e modo de existir de fatos, inclusive sons e imagens digitais).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 373, § 1º, positivou a teoria da carga dinâmica da prova no processo civil comum, exigindo decisão fundamentada e oportunidade de produção da prova pela parte onerada."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 373, § 3º, a convenção das partes sobre o ônus da prova é válida, salvo quando recair sobre direito indisponível ou tornar excessivamente difícil a exercício do direito."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 372 CPC e jurisprudência do STJ, o juiz poderá admitir a utilização de prova produzida em outro processo, atribuindo-lhe o valor que considerar adequado, observado o CONTRADITÓRIO (mesmo sem idênticas partes!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 369 a 384 do CPC",
        "textSnippet": "Provas no CPC: Art. 372 (prova emprestada com contraditório); Art. 373, § 1º (distribuição dinâmica fundamentada, com prazo de desincumbência e recurso de Agravo de Instrumento — Art. 1.015, XI); Art. 384 (ata notarial prova existência e modo de existir de fatos, inclusive sons e imagens digitais)."
      }
    ],
    "professorTip": "Distribuição Dinâmica do Ônus da Prova (Art. 373, § 1º CPC): decisão FUNDAMENTADA + chance de produzir prova + cabe AGRAVO DE INSTRUMENTO (Art. 1.015, XI)!"
  },
  {
    "id": "mig_cpc_047",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Coisa Julgada, Limites Objetivos, Questão Prejudicial e Ação Rescisória",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Durante ação de cobrança contratual, o réu alega em defesa que o contrato inteiro é nulo por incapacidade absoluta, questão prejudicial resolvida expressamente pelo juiz na fundamentação da sentença após amplo contraditório (sem pedido declaratório incidental expresso). Essa questão prejudicial faz coisa julgada material?",
    "options": [
      {
        "letter": "A",
        "text": "Não, porque pelo CPC os motivos e a resolução de questão prejudicial jamais fazem coisa julgada material sem ação declaratória incidental."
      },
      {
        "letter": "B",
        "text": "O prazo decadencial da Ação Rescisória é de 5 anos contados da prolação da sentença de primeiro grau."
      },
      {
        "letter": "C",
        "text": "Sim, se cumpridos todos os requisitos cumulativos do Art. 503, § 1º, do CPC: (1) da resolução depender o julgamento do mérito; (2) tiver havido contraditório prévio e efetivo (não se aplicando na revelia); e (3) o juízo tiver competência em razão da matéria e da pessoa para resolvê-la como questão principal (e não houver restrições probatórias — § 2º)."
      },
      {
        "letter": "D",
        "text": "Os motivos determinantes da sentença fazem sempre coisa julgada material isoladamente, mesmo fora dos requisitos do § 1º."
      }
    ],
    "correctAnswer": "C",
    "justification": "Coisa julgada (Arts. 502–508 CPC): estende-se à questão prejudicial expressamente decidida se presentes dependência do mérito + contraditório efetivo (sem revelia) + competência absoluta do juízo. Ação Rescisória = prazo decadencial de 2 anos do trânsito em julgado da última decisão (depósito prévio de 5% do valor da causa, salvo Fazenda/MP/DP/gratuidade).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Inovação marcante do CPC/2015 (Art. 503, § 1º): superou a exigência de ação declaratória incidental do CPC/73 — a questão prejudicial expressa e incidentalmente decidida faz coisa julgada se presentes os 3 requisitos legais."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 975 do CPC, o direito à rescisão extingue-se em 2 ANOS contados do trânsito em julgado da última decisão proferida no processo (salvo prova nova ou simulação/colusão descoberta depois — § 2º e § 3º, ou termo do STF para inconstitucionalidade)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 504 CPC, não fazem coisa julgada os motivos e a verdade dos fatos estabelecida como fundamento da sentença."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 502 a 508 e Arts. 966 a 975 do CPC",
        "textSnippet": "Coisa julgada (Arts. 502–508 CPC): estende-se à questão prejudicial expressamente decidida se presentes dependência do mérito + contraditório efetivo (sem revelia) + competência absoluta do juízo. Ação Rescisória = prazo decadencial de 2 anos do trânsito em julgado da última decisão (depósito prévio de 5% do valor da causa, salvo Fazenda/MP/DP/gratuidade)."
      }
    ],
    "professorTip": "Questão Prejudicial faz Coisa Julgada no CPC/15 se: (1) necessária ao mérito, (2) contraditório efetivo (SEM revelia), (3) juízo competente em matéria/pessoa! Rescisória = 2 ANOS + caução 5%!"
  },
  {
    "id": "mig_cpc_048",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Cumprimento de Sentença - Impugnação, Multa de 10% e Honorários",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Transitada em julgado sentença condenatória de quantia certa, o exequente requer o cumprimento definitivo de sentença e o devedor, intimado na pessoa de seu advogado pelo Diário da Justiça, deixa transcorrer o prazo de 15 dias úteis sem pagar. Qual a consequência automática e como se conta o prazo para impugnação ao cumprimento de sentença?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo de 15 dias para impugnação ao cumprimento de sentença só começa após a garantia integral do juízo pela penhora."
      },
      {
        "letter": "B",
        "text": "A multa de 10% e os honorários de 10% aplicam-se também no cumprimento provisório de sentença e contra a Fazenda Pública."
      },
      {
        "letter": "C",
        "text": "Incidirá multa de 10% E honorários advocatícios de mais 10% sobre o débito não pago (Art. 523, § 1º, CPC); e, transcorrido o prazo de 15 dias para pagamento voluntário, inicia-se IMEDIATAMENTE — independentemente de penhora ou nova intimação — o prazo de 15 dias úteis para o executado apresentar impugnação ao cumprimento de sentença nos próprios autos (Art. 525 CPC)."
      },
      {
        "letter": "D",
        "text": "Caso o executado pague parcialmente o valor devido no prazo de 15 dias, a multa de 10% incide sobre a totalidade integral da condenação."
      }
    ],
    "correctAnswer": "C",
    "justification": "Cumprimento de Sentença (Arts. 523–525 CPC): intimação no advogado (salvo revel sem advogado/defensoria ou > 1 ano após trânsito — Art. 513, § 4º -> carta); 15d úteis para pagar; sem pagamento -> +10% multa + 10% honorários; logo após os 15d, correm mais 15d para impugnação (sem nova intimação e sem garantia do juízo).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No cumprimento de sentença (Art. 525 CPC), NÃO se exige garantia prévia do juízo para impugnar (e o prazo corre imediatamente após os 15 dias do Art. 523 sem nova intimação!)."
      },
      {
        "letter": "B",
        "explanation": "Contra a Fazenda Pública (Art. 534, § 2º) NÃO incide a multa de 10% do Art. 523, § 1º (e tem prazo de 30 dias para impugnação — Art. 535); porém, no cumprimento PROVISÓRIO por quantia certa contra particular incide sim a multa e honorários após 15 dias (Art. 520, § 2º e Súmula 517/STJ superada pelo CPC/15)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 523, § 2º, CPC, efetuado o pagamento parcial no prazo de 15 dias, a multa e os honorários de 10% incidirão apenas sobre o restante."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 513 a 538 do CPC",
        "textSnippet": "Cumprimento de Sentença (Arts. 523–525 CPC): intimação no advogado (salvo revel sem advogado/defensoria ou > 1 ano após trânsito — Art. 513, § 4º -> carta); 15d úteis para pagar; sem pagamento -> +10% multa + 10% honorários; logo após os 15d, correm mais 15d para impugnação (sem nova intimação e sem garantia do juízo)."
      }
    ],
    "professorTip": "Cumprimento de Sentença: 15d pagar (senão +10% multa +10% honorários) -> 15d seguintes para Impugnar (SEM nova intimação e SEM penhora prévia)! Fazenda = 30d e SEM multa de 10%!"
  },
  {
    "id": "mig_cpc_049",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Execução Autônoma de Título Extrajudicial - Citação, Embargos e Penhora",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Credor ajuíza execução de título executivo extrajudicial (cheque) contra devedor. Qual o prazo para o executado pagar após a citação para obter redução de honorários pela metade, qual o prazo e requisito para opor Embargos à Execução e qual o efeito destes?",
    "options": [
      {
        "letter": "A",
        "text": "Para opor Embargos à Execução, o executado deve primeiro garantir integralmente o juízo por penhora ou depósito."
      },
      {
        "letter": "B",
        "text": "Na execução de título extrajudicial, os embargos à execução possuem sempre efeito suspensivo automático até o julgamento."
      },
      {
        "letter": "C",
        "text": "O executado é citado para pagar a dívida em 3 DIAS (se pagar integralmente em 3 dias, os honorários advocatícios são reduzidos pela METADE — Art. 827, § 1º, CPC); pode opor Embargos à Execução no prazo de 15 dias úteis contados da juntada do mandado de citação aos autos, INDEPENDENTEMENTE de penhora, depósito ou caução (Art. 914 CPC), porém os embargos NÃO têm efeito suspensivo automático (Art. 919 CPC)."
      },
      {
        "letter": "D",
        "text": "No caso de parcelamento legal do Art. 916 do CPC (30% de entrada + 6 parcelas), o credor aplica o mesmo parcelamento ao cumprimento de sentença."
      }
    ],
    "correctAnswer": "C",
    "justification": "Execução Extrajudicial: 3 dias para pagar (quita -> honorários caem 50%); 15 dias da juntada do mandado para Embargos (sem garantia do juízo) ou parcelamento Art. 916 (30% + 6x, renuncia aos embargos; vedado no cumprimento de sentença). Embargos só têm efeito suspensivo se pedir + tutela + garantia.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 914 CPC permite opor embargos à execução independentemente de penhora, depósito ou caução (a garantia do juízo só é exigida se o executado pleitear EFEITO SUSPENSIVO aos embargos — Art. 919, § 1º!)."
      },
      {
        "letter": "B",
        "explanation": "Os embargos NÃO têm efeito suspensivo automático (Art. 919); o juiz só concede suspensão se houver requerimento + requisitos de tutela provisória + garantia do juízo por penhora/depósito/caução suficiente."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 916, § 7º, do CPC, o parcelamento legal (entrada de 30% + 6 parcelas no prazo dos embargos com reconhecimento do crédito) NÃO se aplica ao cumprimento de sentença (aplica-se apenas à execução de título extrajudicial)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 784 a 925 do CPC",
        "textSnippet": "Execução Extrajudicial: 3 dias para pagar (quita -> honorários caem 50%); 15 dias da juntada do mandado para Embargos (sem garantia do juízo) ou parcelamento Art. 916 (30% + 6x, renuncia aos embargos; vedado no cumprimento de sentença). Embargos só têm efeito suspensivo se pedir + tutela + garantia."
      }
    ],
    "professorTip": "Execução Título Extrajudicial: 3d p/ pagar (honorários pela metade)! Embargos em 15d SEM penhora (só precisa garantir para pedir efeito suspensivo)! Parcelamento 30%+6x = NÃO cabe no cumprimento de sentença!"
  },
  {
    "id": "mig_cpc_050",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Penhora, Impenhorabilidades e Exceções (Salário e Poupança)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Credor em execução de dívida cível comum (não alimentar) requer a penhora de 20% do salário líquido de executada que ganha R$ 40.000,00 mensais e também o bloqueio de R$ 30.000,00 depositados em caderneta de poupança. À luz do Art. 833 do CPC e do STJ (EREsp 1.582.475 / EREsp 1.874.222), o que é penhorável?",
    "options": [
      {
        "letter": "A",
        "text": "Os R$ 30.000,00 na poupança são integralmente penhoráveis porque o limite de proteção do CPC é de apenas 10 salários-mínimos."
      },
      {
        "letter": "B",
        "text": "A quantia de até 40 salários-mínimos depositada em caderneta de poupança (ou conta corrente/aplicação financeira protegida segundo jurisprudência do STJ se reserva de subsistência sem movimentação especulativa) é IMPENHORÁVEL (Art. 833, X); quanto ao salário, embora a regra legal excepcione apenas dívida alimentar e ganhos acima de 50 salários-mínimos (Art. 833, § 2º), a Corte Especial do STJ admite excepcionalmente a mitigação da impenhorabilidade do salário mesmo abaixo de 50 SM para pagamento de dívida não alimentar desde que preservado o mínimo existencial/subsistência digna (EREsp 1.874.222)."
      },
      {
        "letter": "C",
        "text": "Pelo texto literal do Art. 833, § 2º, CPC, a impenhorabilidade de salários cede automaticamente acima de 20 salários-mínimos mensais."
      },
      {
        "letter": "D",
        "text": "Os bens móveis que guarnecem a residência do executado são penhoráveis ainda que necessários ao sustento cotidiano, inclusive geladeira e fogão únicos."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 833 CPC: Impenhoráveis: poupança até 40 salários-mínimos (X); salários/proventos (IV), salvo prestação alimentícia ou excedente a 50 SM mensais (§ 2º — admitida mitigação excepcional pelo STJ no EREsp 1.874.222 preservando subsistência); pequeno imóvel rural trabalhado pela família (VIII).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 833, X, do CPC, é impenhorável a quantia depositada em caderneta de poupança até o limite de 40 (quarenta) salários-mínimos."
      },
      {
        "letter": "C",
        "explanation": "O § 2º do Art. 833 fixa o patamar legal de 50 (cinquenta) salários-mínimos mensais (embora o STJ admita mitigação excepcional preservando a subsistência digna)."
      },
      {
        "letter": "D",
        "explanation": "O Art. 833, II, protege os móveis, pertences e utilidades domésticas que guarnecem a residência do executado, salvo os de elevado valor ou que ultrapassem as necessidades comuns correspondentes a um médio padrão de vida."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Art. 833 do CPC e Jurisprudência do STJ",
        "textSnippet": "Art. 833 CPC: Impenhoráveis: poupança até 40 salários-mínimos (X); salários/proventos (IV), salvo prestação alimentícia ou excedente a 50 SM mensais (§ 2º — admitida mitigação excepcional pelo STJ no EREsp 1.874.222 preservando subsistência); pequeno imóvel rural trabalhado pela família (VIII)."
      }
    ],
    "jurisprudence": "STJ EREsp 1.874.222",
    "professorTip": "Impenhorável (Art. 833 CPC): Poupança até 40 SM! Salário: regra legal excepciona alimentos ou > 50 SM (mas STJ no EREsp 1.874.222 admite mitigar se preservar mínimo existencial)!"
  },
  {
    "id": "mig_cpc_051",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Procedimentos Especiais - Ações Possessórias (Força Nova vs. Velha)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Proprietário sofreu esbulho em sua chácara há 4 meses e ajuizou ação de reintegração de posse contra o invasor; durante a audiência de justificação/instrução, percebeu-se que o caso configurava mera turbação (não esbulho) e que o invasor pediu indenização por perdas e danos na própria contestação sem reconvenção. Qual o rito e o tratamento das possessórias?",
    "options": [
      {
        "letter": "A",
        "text": "Como houve turbação em vez de esbulho, o juiz deve extinguir a reintegração de posse sem mérito por inadequação da via eleita."
      },
      {
        "letter": "B",
        "text": "Por ter sido proposta dentro de ano e dia do esbulho (4 meses), trata-se de ação de força NOVA (rito especial com possibilidade de liminar imediata sem ouvir o réu ou após justificação — Art. 562 CPC); aplica-se a fungibilidade entre as possessórias (Art. 554 — receber reintegração como manutenção diante da turbação); e, pelo caráter DÚPLICE das ações possessórias (Art. 556), o réu pode formular pedido contraposto de proteção possessória e indenização na própria contestação!"
      },
      {
        "letter": "C",
        "text": "Proposta a ação após 1 ano e 1 dia (força velha), não cabe mais tutela provisória de urgência mesmo que demonstrados perigo de dano e probabilidade do direito."
      },
      {
        "letter": "D",
        "text": "Na pendência de ação possessória, qualquer das partes pode propor livremente ação reivindicatória discutindo propriedade."
      }
    ],
    "correctAnswer": "B",
    "justification": "Ações Possessórias (Arts. 554–568 CPC): Fungibilidade (Art. 554); Natureza dúplice (Art. 556 — réu pede proteção/indenização na contestação); Vedação à petitória na pendência da possessória (Art. 557); Força nova (< 1 ano e dia) = rito especial com liminar possessória; Força velha (>= 1 ano e dia) = rito comum.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 554 CPC consagra expressamente a FUNGIBILIDADE das ações possessórias (propositura de uma ação possessória em vez de outra não obsta que o juiz conheça do pedido e outorgue a proteção legal correspondente)."
      },
      {
        "letter": "C",
        "explanation": "Na força velha (rito comum), não cabe a liminar possessória especial automática do Art. 562 (sem periculum in mora), MAS cabe tutela provisória de urgência comum do Art. 300 se demonstrados os requisitos legais."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 557 CPC, na pendência de ação possessória é VEDADO, tanto ao autor quanto ao réu, propor ação de reconhecimento do domínio (salvo contra terceira pessoa)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 554 a 568 do CPC",
        "textSnippet": "Ações Possessórias (Arts. 554–568 CPC): Fungibilidade (Art. 554); Natureza dúplice (Art. 556 — réu pede proteção/indenização na contestação); Vedação à petitória na pendência da possessória (Art. 557); Força nova (< 1 ano e dia) = rito especial com liminar possessória; Força velha (>= 1 ano e dia) = rito comum."
      }
    ],
    "professorTip": "Possessórias: < 1 ano e 1 dia = Força NOVA (liminar especial)! Fungibilidade + Natureza DÚPLICE (pede na própria contestação) + Proibido entrar com reivindicatória enquanto pendente!"
  },
  {
    "id": "mig_cpc_052",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Procedimentos Especiais - Ação Monitória, Embargos de Terceiro e Inventário",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Portador de cheque prescrito (prova escrita sem eficácia de título executivo) ajuíza Ação Monitória contra o emitente, que é citado e apresenta Embargos Monitórios; paralelamente, cônjuge meeiro que não participou do processo tem imóvel próprio penhorado em execução movida exclusivamente contra o outro cônjuge por dívida que não reverteu em benefício da família. Quais as regras processuais aplicáveis?",
    "options": [
      {
        "letter": "A",
        "text": "Na ação monitória, caso o réu pague o valor integral dentro do prazo de 15 dias, arcará com custas integrais e honorários de 20%."
      },
      {
        "letter": "B",
        "text": "A ação monitória é o meio adequado para cobrança de cheque prescrito (Súmula 299 e Súmula 531 STJ — prova escrita sem força executiva, prazo de 5 anos — Art. 206, § 5º, I, CC), com mandado de pagamento em 15 dias (isentando de custas processuais se o réu cumprir no prazo e pagando apenas 5% de honorários — Art. 701, § 1º); já o cônjuge meeiro defende sua meação/bens próprios por EMBARGOS DE TERCEIRO (Art. 674, § 2º, I, CPC)."
      },
      {
        "letter": "C",
        "text": "Os embargos monitórios exigem garantia prévia do juízo e seguem em autos apartados distribuídos por dependência."
      },
      {
        "letter": "D",
        "text": "O inventário extrajudicial em cartório é proibido mesmo havendo consenso quando todos os herdeiros forem capazes."
      }
    ],
    "correctAnswer": "B",
    "justification": "Ação Monitória (Arts. 700–702): prova escrita sem força executiva (ex.: cheque prescrito — Súmula 299 STJ); cumprir em 15d = 5% honorários + isento de custas; embargos nos próprios autos sem caução. Embargos de Terceiro (Art. 674): defende posse/propriedade de quem não é parte (inclusive cônjuge pela meação — Súmula 134 STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Estímulo ao cumprimento no Art. 701, § 1º, CPC: cumprindo o mandado no prazo de 15 dias, o réu paga honorários de 5% e fica ISENTO de custas processuais!"
      },
      {
        "letter": "C",
        "explanation": "Os embargos ao mandado monitório independem de prévia segurança do juízo e são opostos NOS PRÓPRIOS AUTOS (Art. 702 CPC)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 610, § 1º, CPC (e Resolução 571/2024 do CNJ que ampliou inclusive para casos com menor/incapaz sob salvaguardas do MP!), havendo consenso e assistência de advogado, admite-se inventário e partilha por escritura pública."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 610 a 678 e 700 a 702 do CPC",
        "textSnippet": "Ação Monitória (Arts. 700–702): prova escrita sem força executiva (ex.: cheque prescrito — Súmula 299 STJ); cumprir em 15d = 5% honorários + isento de custas; embargos nos próprios autos sem caução. Embargos de Terceiro (Art. 674): defende posse/propriedade de quem não é parte (inclusive cônjuge pela meação — Súmula 134 STJ)."
      }
    ],
    "jurisprudence": "Súmulas 134, 299 e 531 do STJ",
    "professorTip": "Monitória: paga em 15d = ISENTO de custas + só 5% honorários! Embargos Monitórios = nos próprios autos, sem garantia! Cônjuge defendendo meação = Embargos de Terceiro!"
  },
  {
    "id": "mig_cpc_053",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Ordem dos Processos nos Tribunais - Precedentes Vinculantes, IRDR e IAC",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Diante de efetiva repetição de processos sobre uma mesma questão unicamente de direito com risco de ofensa à isonomia e à segurança jurídica em Tribunal de Justiça estadual, instaura-se Incidente de Resolução de Demandas Repetitivas (IRDR). Qual a legitimidade, o quórum de julgamento e o recurso cabível da decisão de mérito no IRDR?",
    "options": [
      {
        "letter": "A",
        "text": "O IRDR pode ser instaurado no tribunal mesmo quando já houver recurso repetitivo afetado no STJ ou no STF sobre a mesma questão de direito."
      },
      {
        "letter": "B",
        "text": "Podem requerer o IRDR o juiz ou relator (por ofício), as partes, o Ministério Público ou a Defensoria Pública (Art. 977); exige-se pendência de causa no tribunal (Art. 978, parágrafo único — salvo divergência doutrinária/STJ sobre causa piloto, o CPC exige processo pendente no tribunal); é julgado pelo órgão competente para uniformização no tribunal; e do julgamento do MÉRITO do IRDR cabe Recurso Especial ou Recurso Extraordinário (com efeito suspensivo automático e presunção de repercussão geral — Art. 987!)."
      },
      {
        "letter": "C",
        "text": "São exigidas custas processuais elevadas para a parte requerer a instauração do IRDR."
      },
      {
        "letter": "D",
        "text": "O Incidente de Assunção de Competência (IAC - Art. 947) exige multiplicidade repetitiva de milhares de processos em curso."
      }
    ],
    "correctAnswer": "B",
    "justification": "IRDR (Arts. 976–987): efetiva repetição + risco à isonomia/segurança jurídica + questão unicamente de direito + ausência de afetação prévia no STF/STJ. Isento de custas! Do mérito cabe REsp/RE com efeito suspensivo automático.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 976, § 4º, do CPC, é INCABÍVEL o IRDR quando um dos tribunais superiores, no âmbito de sua respectiva competência, já tiver afetado recurso para definição de tese sobre questão de direito material ou processual repetitiva."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 976, § 5º, do CPC, NÃO serão exigidas custas processuais no incidente de resolução de demandas repetitivas."
      },
      {
        "letter": "D",
        "explanation": "O IAC (Art. 947 CPC) destina-se a relevante questão de direito com grande repercussão social, SEM repetição em múltiplos processos."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 926 a 928 e Arts. 976 a 987 do CPC",
        "textSnippet": "IRDR (Arts. 976–987): efetiva repetição + risco à isonomia/segurança jurídica + questão unicamente de direito + ausência de afetação prévia no STF/STJ. Isento de custas! Do mérito cabe REsp/RE com efeito suspensivo automático."
      }
    ],
    "professorTip": "IRDR = COM repetição de processos, SEM afetação prévia no STF/STJ, SEM custas! IAC = relevante repercussão social SEM repetição em múltiplos processos!"
  },
  {
    "id": "mig_cpc_054",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Teoria Geral dos Recursos - Taxatividade Mitigada do Agravo de Instrumento (Tema 988 STJ)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em ação cível comum, juiz de primeira instância proferiu decisão interlocutória declarando a competência do juízo e rejeitando preliminar de incompetência absoluta alegada pelo réu (hipótese não listada expressamente no Art. 1.015 do CPC). O réu pode recorrer imediatamente dessa decisão?",
    "options": [
      {
        "letter": "A",
        "text": "Não, o rol do Art. 1.015 é absolutamente taxativo e impede agravo de instrumento em qualquer situação não prevista em lei."
      },
      {
        "letter": "B",
        "text": "Sim. Embora a incompetência não conste literalmente no rol do Art. 1.015 do CPC, o STJ firmou no Tema 988 a tese da TAXATIVIDADE MITIGADA do rol do Art. 1.015: admite-se a interposição imediata de Agravo de Instrumento quando verificada a URGÊNCIA decorrente da inutilidade do julgamento da questão no recurso de apelação (e especificamente sobre competência/cláusula arbitral, o STJ reconhece cabimento imediato por urgência/analogia ao inciso III)."
      },
      {
        "letter": "C",
        "text": "Caso a parte não interponha agravo de instrumento sob a tese da taxatividade mitigada em hipótese fora do rol literal, ocorre preclusão imediata da matéria."
      },
      {
        "letter": "D",
        "text": "O prazo para interposição de todos os recursos no CPC, inclusive Embargos de Declaração, é de 15 dias úteis."
      }
    ],
    "correctAnswer": "B",
    "justification": "Recursos CPC: Prazo geral = 15 dias úteis; Embargos de Declaração = 5 dias úteis (interrompem prazo de outros recursos — Art. 1.026). Agravo de Instrumento (Art. 1.015 + STJ Tema 988): rol de taxatividade mitigada (cabe quando houver urgência pela inutilidade do julgamento na apelação).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Tema 988 do STJ temperou a taxatividade absoluta (\"taxatividade mitigada\") para evitar decisões inúteis apenas ao final na apelação."
      },
      {
        "letter": "C",
        "explanation": "Segundo o próprio Tema 988 do STJ, se a parte deixar de agravar na hipótese de taxatividade mitigada (fora do rol expresso), NÃO ocorre preclusão imediata, podendo ainda discutir na preliminar de apelação!"
      },
      {
        "letter": "D",
        "explanation": "Todos os recursos do Art. 994 têm prazo de 15 dias úteis, EXCETO os Embargos de Declaração, cujo prazo é de 5 DIAS úteis (Art. 1.023 CPC)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 994 a 1.026 do CPC e STJ Tema 988",
        "textSnippet": "Recursos CPC: Prazo geral = 15 dias úteis; Embargos de Declaração = 5 dias úteis (interrompem prazo de outros recursos — Art. 1.026). Agravo de Instrumento (Art. 1.015 + STJ Tema 988): rol de taxatividade mitigada (cabe quando houver urgência pela inutilidade do julgamento na apelação)."
      }
    ],
    "jurisprudence": "STJ Tema 988",
    "professorTip": "Tema 988 STJ: Agravo de Instrumento = TAXATIVIDADE MITIGADA (cabe se houver URGÊNCIA/inutilidade na apelação)! Todos recursos = 15d úteis, EXCETO Embargos de Declaração = 5d úteis!"
  },
  {
    "id": "mig_cpc_055",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Apelação, Juízo de Admissibilidade, Teoria da Causa Madura e Remessa Necessária",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Ao interpor apelação contra sentença definitiva, o apelante também impugnou decisão interlocutória anterior que indeferiu prova pericial (decisão não agravável pelo Art. 1.015). Onde a apelação tem seu juízo de admissibilidade realizado, cabe exame das questões interlocutórias não agraváveis e quando incide a teoria da causa madura?",
    "options": [
      {
        "letter": "A",
        "text": "O juiz de primeiro grau realiza o primeiro juízo de admissibilidade da apelação, podendo inadmiti-la por deserção."
      },
      {
        "letter": "B",
        "text": "A apelação é protocolada no 1º grau, mas o juízo de admissibilidade é exercido EXCLUSIVAMENTE pelo TRIBUNAL (Art. 1.010, § 3º — acabou o juízo de admissibilidade duplo!); questões interlocutórias não agraváveis são suscitadas em preliminar de apelação ou contrarrazões (Art. 1.009, § 1º); e pela teoria da causa madura (Art. 1.013, § 3º), reformando sentença sem mérito ou nula, o Tribunal pode julgar imediatamente o mérito se o processo estiver em condições de imediato julgamento."
      },
      {
        "letter": "C",
        "text": "Qualquer condenação contra Município superior a 50 salários-mínimos está sujeita à remessa necessária (duplo grau obrigatório)."
      },
      {
        "letter": "D",
        "text": "A apelação no CPC/2015 não possui efeito suspensivo em nenhuma hipótese."
      }
    ],
    "correctAnswer": "B",
    "justification": "Apelação (Arts. 1.009–1.014 CPC): prazo 15d úteis; juízo de admissibilidade ÚNICO no Tribunal; preliminar de apelação/contrarrazões ataca interlocutórias não agraváveis; Causa Madura (Art. 1.013, § 3º); efeito suspensivo é a regra (salvo § 1º). Remessa necessária = 1000/500/100 SM.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 1.010, § 3º, do CPC, após as contrarrazões, os autos serão remetidos ao tribunal INDEPENDENTEMENTE de juízo de admissibilidade em 1º grau (salvo retratação nas hipóteses legais expressas como indeferimento/improcedência liminar)."
      },
      {
        "letter": "C",
        "explanation": "Os novos pisos da remessa necessária (Art. 496, § 3º, CPC) são: 1.000 salários-mínimos (União), 500 salários-mínimos (Estados/DF/Capitais) e 100 salários-mínimos (demais Municípios) — e NÃO há remessa se a sentença seguir Súmula de tribunal superior, repetitivo, IRDR/IAC ou parecer vinculante fazendário."
      },
      {
        "letter": "D",
        "explanation": "Regra geral (Art. 1.012 CPC): a apelação TEM efeito suspensivo automático, salvo as exceções do § 1º (alimentos, tutela provisória confirmada/concedida, interdição, divisão/demarcação, extinção sem mérito de embargos à execução, sentença arbitral)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 496 e 1.009 a 1.014 do CPC",
        "textSnippet": "Apelação (Arts. 1.009–1.014 CPC): prazo 15d úteis; juízo de admissibilidade ÚNICO no Tribunal; preliminar de apelação/contrarrazões ataca interlocutórias não agraváveis; Causa Madura (Art. 1.013, § 3º); efeito suspensivo é a regra (salvo § 1º). Remessa necessária = 1000/500/100 SM."
      }
    ],
    "professorTip": "Apelação: Juiz de 1º grau NÃO faz admissibilidade (manda direto ao TJ/TRF)! Regra = TEM efeito suspensivo! Remessa Necessária = 1000 (União), 500 (Estados/DF/Capitais), 100 (Municípios) SM!"
  },
  {
    "id": "mig_cpc_056",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Embargos de Declaração, Agravo Interno e Recurso Especial / Extraordinário",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Opostos Embargos de Declaração intempestivos contra acórdão de Tribunal de Justiça, o recorrente aguarda o julgamento e só depois interpõe Recurso Especial; em outra ação, o relator nega provimento a recurso por decisão monocrática e a parte recorre por Agravo Interno manifestamente inadmissível por unanimidade. Quais as consequências?",
    "options": [
      {
        "letter": "A",
        "text": "Mesmo intempestivos, os embargos de declaração interrompem o prazo para o Recurso Especial por força do Art. 1.026."
      },
      {
        "letter": "B",
        "text": "Embargos de declaração INTEMPESTIVOS NÃO interrompem o prazo para outros recursos (logo, o Recurso Especial posterior será também intempestivo — Súmula/jurisprudência pacífica STJ/STF); e quando o agravo interno for declarado manifestamente inadmissível ou improcedente em votação UNÂNIME, o órgão colegiado condenará o agravante a pagar ao agravado multa entre 1% e 5% do valor atualizado da causa (Art. 1.021, § 4º, CPC), cujo depósito é condição para interpor qualquer outro recurso (salvo Fazenda e gratuidade)."
      },
      {
        "letter": "C",
        "text": "Para interpor Agravo Interno contra decisão monocrática do relator, não é necessário impugnar especificamente os fundamentos da decisão agravada."
      },
      {
        "letter": "D",
        "text": "Contra decisão de Presidente/Vice-Presidente de TJ que inadmite Recurso Especial com base em tema repetitivo do STJ cabe Agravo em Recurso Especial (AREsp) ao próprio STJ."
      }
    ],
    "correctAnswer": "B",
    "justification": "Embargos de declaração (5d): só tempestivos interrompem prazo (multa de até 2% se protelatórios, até 10% na reiteração). Agravo Interno (15d): exige dialeticidade; se manifestamente inadmissível/improcedente por unanimidade -> multa 1% a 5%. Negou RE/REsp com base em repetitivo/RG -> Agravo Interno (não ARE/AREsp).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Apenas embargos de declaração TEMPESTIVOS interrompem o prazo recursal (mesmo se rejeitados, desde que tempestivos e não protelatórios extremos segundo regras estritas)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.021, § 1º, CPC (princípio da dialeticidade), o agravante DEVE impugnar especificadamente os fundamentos da decisão agravada, sob pena de não conhecimento (Súmula 182 STJ)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.030, § 2º, c/c Art. 1.042 CPC, quando a inadmissão na origem aplicar tese de repercussão geral ou recurso repetitivo, o recurso cabível é o AGRAVO INTERNO para o próprio Tribunal de origem (e não ARE/AREsp!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 1.021 a 1.042 do CPC",
        "textSnippet": "Embargos de declaração (5d): só tempestivos interrompem prazo (multa de até 2% se protelatórios, até 10% na reiteração). Agravo Interno (15d): exige dialeticidade; se manifestamente inadmissível/improcedente por unanimidade -> multa 1% a 5%. Negou RE/REsp com base em repetitivo/RG -> Agravo Interno (não ARE/AREsp)."
      }
    ],
    "professorTip": "ED intempestivos NÃO interrompem prazo! Agravo Interno unânime manifestamente improcedente = multa de 1% a 5%! Negou REsp por repetitivo = cabe Agravo INTERNO no TJ/TRF (não AREsp)!"
  },
  {
    "id": "mig_cpc_057",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Juizados Especiais Cíveis (Lei 9.099/95) - Competência, Recursos e Prazos",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Pessoa jurídica microempresa pretende propor ação de cobrança de R$ 45.000,00 (equivalente a ~30 salários-mínimos) no Juizado Especial Cível estadual sem advogado. Além disso, proferida sentença desfavorável, o autor interpõe Recurso Inominado no prazo de 15 dias úteis. Ambos os atos são válidos?",
    "options": [
      {
        "letter": "A",
        "text": "Pessoa jurídica jamais pode figurar no polo ativo do Juizado Especial Cível estadual."
      },
      {
        "letter": "B",
        "text": "A microempresa e EPP PODEM ser autoras no Juizado Especial Cível (Art. 8º, § 1º, II, da Lei 9.099/95), porém, como o valor da causa supera 20 salários-mínimos (limite de até 40 salários-mínimos), é OBRIGATÓRIA a assistência por ADVOGADO (Art. 9º); além disso, o Recurso Inominado tem prazo de 10 DIAS úteis (Art. 42) — e NÃO 15 dias — sendo intempestivo aos 15 dias!"
      },
      {
        "letter": "C",
        "text": "Nos Juizados Especiais Cíveis admite-se livremente a citação por edital e o chamamento ao processo de terceiros."
      },
      {
        "letter": "D",
        "text": "Da decisão da Turma Recursal em Juizado Especial Cível estadual cabe Recurso Especial ao STJ."
      }
    ],
    "correctAnswer": "B",
    "justification": "JEC (Lei 9.099/95): teto = 40 SM; dispensa advogado só até 20 SM (no recurso inominado sempre precisa advogado); admite ME/EPP/MEI/OSCIP como autoras; veda citação por edital; Recurso Inominado = 10 dias (preparo em 48h); não cabe REsp da Turma Recursal (Súmula 203 STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Microempresas, EPPs, MEIs e OSCIPs podem propor ações no JEC estadual (Art. 8º, § 1º, Lei 9.099/95)."
      },
      {
        "letter": "C",
        "explanation": "Na Lei 9.099/95, NÃO cabe citação por edital (Art. 18, § 2º) nem intervenção de terceiros, salvo assistência/litisconsórcio e IDPJ (Art. 10 c/c Art. 1.062 CPC)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 203 do STJ, NÃO cabe Recurso Especial contra decisão proferida por órgão de segundo grau dos Juizados Especiais (cabe apenas Recurso Extraordinário ao STF ou Reclamação em hipóteses específicas)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 3º a 55 da Lei nº 9.099/1995 e Enunciados FONAJE",
        "textSnippet": "JEC (Lei 9.099/95): teto = 40 SM; dispensa advogado só até 20 SM (no recurso inominado sempre precisa advogado); admite ME/EPP/MEI/OSCIP como autoras; veda citação por edital; Recurso Inominado = 10 dias (preparo em 48h); não cabe REsp da Turma Recursal (Súmula 203 STJ)."
      }
    ],
    "jurisprudence": "Súmula nº 203 do STJ",
    "professorTip": "JEC: Teto 40 SM (sem advogado até 20 SM)! Recurso Inominado = 10 DIAS (com advogado + preparo em 48h)! NÃO cabe REsp contra Turma Recursal (Súmula 203 STJ)!"
  },
  {
    "id": "mig_cpc_058",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Ação Civil Pública e Mandado de Segurança no Processo Civil",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Associação de defesa do consumidor legalmente constituída há 2 anos ajuíza Ação Civil Pública visando impedir cobrança ilegal de tarifa por operadora de telefonia em todo o Estado; em outro processo, cidadão impetra Mandado de Segurança visando receber atrasados salariais de anos anteriores à impetração. Quais as regras processuais aplicáveis?",
    "options": [
      {
        "letter": "A",
        "text": "A limitação territorial do Art. 16 da Lei de Ação Civil Pública restringe os efeitos da coisa julgada estritamente à comarca do juiz sentenciante."
      },
      {
        "letter": "B",
        "text": "A associação tem legitimidade ativa na Ação Civil Pública (constituída há pelo menos 1 ano + pertinência temática — Art. 5º, V, Lei 7.347/85), e a sentença terá eficácia erga omnes nos limites da competência do órgão prolator — atenção: o STF no Tema 1075 declarou INCONSTITUCIONAL a limitação territorial do Art. 16 da LACP, aplicando extensão nacional/regional conforme o dano!; já o Mandado de Segurança NÃO é substitutivo de ação de cobrança (Súmula 269 STF) e não produz efeitos patrimoniais pretéritos à impetração (Súmula 271 STF)."
      },
      {
        "letter": "C",
        "text": "O Mandado de Segurança permite cobrar diretamente verbas salariais vencidas nos 5 anos anteriores à data da impetração."
      },
      {
        "letter": "D",
        "text": "Na Ação Civil Pública, caso o pedido seja julgado improcedente por insuficiência de provas, impede-se definitivamente qualquer nova propositura."
      }
    ],
    "correctAnswer": "B",
    "justification": "ACP (Lei 7.347/85): legitimados incluem MP, DP, Entes Públicos, Estatais e Associações (>= 1 ano + pertinência); STF Tema 1075 afastou restrição territorial; improcedência por falta de provas não faz coisa julgada. MS (Súmulas 269 e 271 STF): não é ação de cobrança nem paga retroativos anteriores à impetração.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No RE 1.101.937 (Tema 1075), o STF declarou a inconstitucionalidade do Art. 16 da Lei 7.347/85 (com redação da Lei 9.494/97), restaurando a abrangência da coisa julgada segundo a extensão do dano e a área de abrangência."
      },
      {
        "letter": "C",
        "explanation": "Pelas Súmulas 269 e 271 do STF, o MS não substitui ação de cobrança e a concessão não produz efeitos patrimoniais em relação a período pretérito (devendo ser cobrados administrativamente ou pela via ordinária)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 16 da LACP (coisa julgada secundum eventum probationis), se o pedido for julgado improcedente por INSUFICIÊNCIA DE PROVAS, qualquer legitimado poderá intentar outra ação com idêntico fundamento valendo-se de nova prova."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Lei nº 7.347/1985 e Lei nº 12.016/2009",
        "textSnippet": "ACP (Lei 7.347/85): legitimados incluem MP, DP, Entes Públicos, Estatais e Associações (>= 1 ano + pertinência); STF Tema 1075 afastou restrição territorial; improcedência por falta de provas não faz coisa julgada. MS (Súmulas 269 e 271 STF): não é ação de cobrança nem paga retroativos anteriores à impetração."
      }
    ],
    "jurisprudence": "STF Tema 1075 e Súmulas 269/271 STF",
    "professorTip": "ACP: Improcedência por FALTA DE PROVAS não faz coisa julgada! STF Tema 1075 derrubou limite territorial do Art. 16! MS: NÃO paga atrasados anteriores à impetração (Súmula 271 STF)!"
  },
  {
    "id": "mig_cpc_059",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Suspensão e Extinção do Processo - Desistência após Contestação e Abandono",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Após o réu apresentar contestação no processo de conhecimento, o autor requer a desistência da ação (extinção sem resolução de mérito); em outra ação, o autor abandona a causa por mais de 30 dias sem cumprir diligência que lhe competia, e o juiz extingue o processo de ofício sem intimar pessoalmente o autor nem ouvir o réu. Ambas as condutas estão corretas?",
    "options": [
      {
        "letter": "A",
        "text": "O autor pode desistir livremente da ação sem resolução de mérito até a prolação da sentença, independentemente de anuência do réu."
      },
      {
        "letter": "B",
        "text": "Não. Oferecida a contestação, o autor NÃO poderá desistir da ação sem o consentimento do réu (Art. 485, § 4º, CPC); e no caso de abandono da causa por mais de 30 dias (Art. 485, III), o juiz NÃO pode extinguir imediatamente: deve primeiro intimar PESSOALMENTE a parte (além do advogado) para suprir a falta em 5 dias (§ 1º) e, se já houver contestação, depende de REQUERIMENTO do réu (Súmula 240 STJ e Art. 485, § 6º)!"
      },
      {
        "letter": "C",
        "text": "No abandono da causa pelo autor por 30 dias, basta a intimação eletrônica do advogado no Diário de Justiça para extinguir o feito."
      },
      {
        "letter": "D",
        "text": "A extinção do processo por abandono da causa após a contestação deve ser declarada de ofício pelo juiz mesmo contra a vontade do réu."
      }
    ],
    "correctAnswer": "B",
    "justification": "Extinção sem mérito (Art. 485 CPC): Desistência após contestação exige anuência do réu (só cabe até a sentença). Abandono > 30 dias exige intimação pessoal da parte para suprir em 5 dias + requerimento do réu se já houve contestação (Súmula 240 STJ). 3 abandonos -> perempção (Art. 486, § 3º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O consentimento do réu para desistência é obrigatório a partir do oferecimento da contestação (Art. 485, § 4º), e a desistência só pode ser apresentada até a sentença (§ 5º)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 485, § 1º, exige expressamente a intimação PESSOAL da parte autora para suprir a falta no prazo de 5 dias."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 240 do STJ (positivada no Art. 485, § 6º, CPC), oferecida a contestação, a extinção do processo por abandono da causa pelo autor depende de requerimento do réu."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 313, 485 e 487 do CPC",
        "textSnippet": "Extinção sem mérito (Art. 485 CPC): Desistência após contestação exige anuência do réu (só cabe até a sentença). Abandono > 30 dias exige intimação pessoal da parte para suprir em 5 dias + requerimento do réu se já houve contestação (Súmula 240 STJ). 3 abandonos -> perempção (Art. 486, § 3º)."
      }
    ],
    "jurisprudence": "Súmula nº 240 do STJ",
    "professorTip": "Desistiu após contestação = precisa do RÉU! Abandonou > 30d = intima PESSOALMENTE por 5 dias + se já contestou, SÓ extingue se o RÉU pedir (Súmula 240 STJ)!"
  },
  {
    "id": "mig_cpc_060",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Processual Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Normas Fundamentais do CPC - Primazia do Mérito, Vedação à Decisão Surpresa e Ordem Cronológica",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Ao analisar apelação em que o apelante apenas discutiu o valor dos danos morais, o tribunal percebe que o contrato objeto da ação é absolutamente nulo por ilicitude do objeto — matéria cognoscível de ofício —, jamais suscitada ou debatida pelas partes nos autos. O relator pode julgar o recurso declarando imediatamente essa nulidade sem ouvir previamente as partes?",
    "options": [
      {
        "letter": "A",
        "text": "Não. Pelo princípio da vedação à decisão surpresa (Arts. 9º e 10 do CPC), o juiz não pode decidir, em grau algum de jurisdição, com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de se manifestar, AINDA QUE se trate de matéria sobre a qual deva decidir de ofício!"
      },
      {
        "letter": "B",
        "text": "Sim, porque matérias de ordem pública cognoscíveis de ofício dispensam o contraditório prévio."
      },
      {
        "letter": "C",
        "text": "A vedação à decisão surpresa impede inclusive a concessão de tutela de urgência liminar inaudita altera parte."
      },
      {
        "letter": "D",
        "text": "A ordem cronológica de conclusão para proferir sentença ou acórdão tem caráter absoluto, gerando nulidade da sentença proferida fora da ordem."
      }
    ],
    "correctAnswer": "A",
    "justification": "Normas fundamentais (Arts. 4º, 9º, 10 e 12 CPC): Primazia da resolução de mérito (Art. 4º); Contraditório substancial e vedação à decisão surpresa mesmo em matéria de ofício (Art. 10 — exceções no Art. 9º, p.u.: tutela urgência, evidência II/III, monitória); Ordem cronológica preferencial (Art. 12).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 10 do CPC é categórico: mesmo tratando-se de matéria que o juiz deva decidir de ofício (prescrição, decadência, nulidade, incompetência absoluta), é obrigatória a oitiva prévia das partes!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 9º, parágrafo único, I e II, excetua expressamente a tutela provisória de urgência e as hipóteses de tutela da evidência dos incisos II e III do Art. 311."
      },
      {
        "letter": "D",
        "explanation": "A Lei 13.256/16 alterou o Art. 12 do CPC para tornar a ordem cronológica preferencial (\"atenderão, preferencialmente, à ordem cronológica\"), não gerando nulidade da sentença eventual inversão."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 1º a 12 do CPC",
        "textSnippet": "Normas fundamentais (Arts. 4º, 9º, 10 e 12 CPC): Primazia da resolução de mérito (Art. 4º); Contraditório substancial e vedação à decisão surpresa mesmo em matéria de ofício (Art. 10 — exceções no Art. 9º, p.u.: tutela urgência, evidência II/III, monitória); Ordem cronológica preferencial (Art. 12)."
      }
    ],
    "professorTip": "Art. 10 CPC (Vedação à Decisão Surpresa): NEM matéria de OFÍCIO pode ser decidida sem antes ouvir as partes (salvo liminares de urgência/evidência II e III/monitória)!"
  },
  {
    "id": "mig_cpc_061",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Atos Processuais - Citação Eletrônica, Prazo do Correio/Oficial e Preclusão",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Com as alterações da Lei nº 14.195/2021 no Art. 246 do CPC, qual passou a ser a forma preferencial de citação no processo civil brasileiro, e quando começa a correr o prazo de defesa quando a citação é feita por correio vs. por meio eletrônico confirmado?",
    "options": [
      {
        "letter": "A",
        "text": "A citação passou a ser feita PREFERENCIALMENTE por meio ELETRÔNICO (no prazo de até 2 dias úteis da decisão que a determinar, por meio dos endereços eletrônicos indicados no cadastro do Poder Judiciário); confirmada a citação eletrônica, o prazo inicia-se no 5º dia útil seguinte à confirmação (Art. 231, IX — e se não houver confirmação em 3 dias úteis, faz-se por correio/oficial/escrivão/edital, podendo haver multa de até 5% por ato atentatório se a empresa deixar de confirmar sem justa causa!); já por correio, o prazo corre da data de juntada aos autos do aviso de recebimento (Art. 231, I)."
      },
      {
        "letter": "B",
        "text": "A citação por oficial de justiça permanece sendo a regra geral prioritária em todos os processos cíveis."
      },
      {
        "letter": "C",
        "text": "Na citação por correio dirigida a pessoa física, a carta pode ser entregue a qualquer vizinho na rua sem responsabilidade."
      },
      {
        "letter": "D",
        "text": "A citação por hora certa exige tentativa infrutífera de localização pelo oficial de justiça em cinco ocasiões distintas."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 246 CPC (Lei 14.195/21): Citação preferencialmente eletrônica -> prazo corre do 5º dia útil após confirmação (não confirmou em 3d úteis sem justa causa -> até 5% multa + citação por correio/oficial). Correio/Oficial -> juntada do AR/mandado (Art. 231, I e II). Hora certa = 2 tentativas + suspeita de ocultação.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Desde a Lei nº 14.195/2021, a citação é preferencialmente ELETRÔNICA (e subsidiariamente por correio, oficial de justiça, escrivão ou edital)."
      },
      {
        "letter": "C",
        "explanation": "Nos condomínios edilícios ou loteamentos com controle de acesso, será válida a entrega do mandado a funcionário da portaria responsável pelo recebimento de correspondência (Art. 248, § 4º, CPC), podendo este recusar se declarar por escrito que o destinatário está ausente."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 252 CPC, basta que o oficial de justiça tenha procurado o citando por DUAS vezes em seu domicílio ou residência sem o encontrar, havendo suspeita de ocultação."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 231, 246 e 278 do CPC (Lei 14.195/2021)",
        "textSnippet": "Art. 246 CPC (Lei 14.195/21): Citação preferencialmente eletrônica -> prazo corre do 5º dia útil após confirmação (não confirmou em 3d úteis sem justa causa -> até 5% multa + citação por correio/oficial). Correio/Oficial -> juntada do AR/mandado (Art. 231, I e II). Hora certa = 2 tentativas + suspeita de ocultação."
      }
    ],
    "professorTip": "Citação preferencial (Art. 246) = ELETRÔNICA (prazo = 5º dia útil após confirmação; se não confirmar em 3d úteis sem motivo = multa até 5%)! Portaria de condomínio = válida entrega (Art. 248, § 4º)! Hora certa = 2 tentativas!"
  },
  {
    "id": "mig_cpc_062",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Ação Rescisória - Violação Manifesta à Norma Jurídica e Súmula 343 STF",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Sentença cível transitou em julgado em 2021 aplicando interpretação razoável de lei infraconstitucional que à época dividia os tribunais locais. Dois anos depois, o STJ pacificou entendimento oposto em recurso repetitivo. Cabe Ação Rescisória fundada em violação manifesta de norma jurídica?",
    "options": [
      {
        "letter": "A",
        "text": "Não. Conforme a Súmula nº 343 do STF, não cabe ação rescisória por ofensa a literal disposição de lei (violação manifesta de norma jurídica), quando a decisão rescindenda se tiver baseado em texto legal de interpretação controvertida nos tribunais à época da prolação (salvo se envolver norma CONSTITUCIONAL declarada inconstitucional pelo STF — Art. 525, § 15, CPC e STF RE 590.809)."
      },
      {
        "letter": "B",
        "text": "Sim, a mudança posterior da jurisprudência dos tribunais superiores sempre autoriza ação rescisória nos 2 anos seguintes."
      },
      {
        "letter": "C",
        "text": "A ação rescisória também não é admitida contra decisão interlocutória de mérito (julgamento antecipado parcial do mérito) transitada em julgado."
      },
      {
        "letter": "D",
        "text": "A propositura da ação rescisória suspende automaticamente o cumprimento da decisão rescindenda até o julgamento final pelo tribunal."
      }
    ],
    "correctAnswer": "A",
    "justification": "Ação Rescisória (Art. 966–975 CPC): cabe contra decisão de mérito transitada em julgado (ou excepcionalmente sem mérito do § 2º). Súmula 343 STF impede rescisória infraconstitucional quando havia controvérsia interpretativa à época (mas em matéria constitucional com controle do STF aplica-se Art. 525, § 15 / Art. 535, § 8º).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Súmula 343 do STF protege a coisa julgada contra simples evolução jurisprudencial infraconstitucional quando havia controvérsia à época da decisão."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 966, caput, CPC, admite-se ação rescisória contra qualquer decisão DE MÉRITO transitada em julgado (inclusive decisão interlocutória parcial de mérito!)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 969 do CPC, a propositura da ação rescisória NÃO impede o cumprimento da decisão rescindenda, ressalvada a concessão de tutela provisória."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Art. 966, V, §§ 5º e 6º do CPC e Súmula 343 STF",
        "textSnippet": "Ação Rescisória (Art. 966–975 CPC): cabe contra decisão de mérito transitada em julgado (ou excepcionalmente sem mérito do § 2º). Súmula 343 STF impede rescisória infraconstitucional quando havia controvérsia interpretativa à época (mas em matéria constitucional com controle do STF aplica-se Art. 525, § 15 / Art. 535, § 8º)."
      }
    ],
    "jurisprudence": "Súmula nº 343 do STF",
    "professorTip": "Súmula 343 STF: Interpretação controvertida infraconstitucional à época = NÃO cabe Rescisória! Cabe Rescisória contra decisão parcial de mérito! Rescisória NÃO suspende execução sozinha!"
  },
  {
    "id": "mig_cpc_063",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Liquidação de Sentença e Cumprimento contra a Fazenda Pública (Precatório vs. RPV)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Exequente obteve sentença ilíquida que fixou dever de indenizar danos materiais a serem apurados por simples cálculos aritméticos. Em outra demanda, credor executa condenação definitiva de R$ 25.000,00 contra Município sem lei local alterando o teto da RPV. Qual procedimento adotar em cada caso?",
    "options": [
      {
        "letter": "A",
        "text": "Quando a apuração depender apenas de cálculo aritmético, NÃO há fase autônoma de liquidação de sentença: o credor promove diretamente o CUMPRIMENTO DE SENTENÇA apresentando o demonstrativo discriminado e atualizado do crédito (Art. 509, § 2º, CPC); quanto ao crédito municipal de R$ 25.000,00 sem lei própria reduzindo o piso, observa-se o limite constitucional de 30 salários-mínimos para Municípios (Art. 87, II, ADCT), pagando-se por Requisição de Pequeno Valor (RPV), e não precatório."
      },
      {
        "letter": "B",
        "text": "Mesmo dependendo apenas de cálculos aritméticos simples, é obrigatória a liquidação prévia por arbitramento."
      },
      {
        "letter": "C",
        "text": "Municípios não podem editar lei própria reduzindo o limite da RPV abaixo de 30 salários-mínimos."
      },
      {
        "letter": "D",
        "text": "A Fazenda Pública pode ser intimada no cumprimento de sentença para impugnar em 15 dias sob pena de multa de 10%."
      }
    ],
    "correctAnswer": "A",
    "justification": "Liquidação: por cálculo aritmético já vai direto ao cumprimento de sentença (Art. 509, § 2º); por arbitramento (perícia/natureza do objeto); pelo procedimento comum (provar fato novo). RPV na ausência de lei própria (Art. 87 ADCT): 60 SM (União), 40 SM (Estados/DF), 30 SM (Municípios). Fazenda impugna em 30 dias.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pelo Art. 509, § 2º, CPC, se depender apenas de cálculo aritmético, o credor já requer o cumprimento de sentença com memória de cálculo (liquidação por arbitramento ou pelo procedimento comum só ocorrem quando houver fato novo ou necessidade técnica)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 100, § 4º, CF e o STF permitem que Estados e Municípios fixem por lei própria limites de RPV adequados às suas capacidades econômicas, observado o mínimo correspondente ao maior benefício do RGPS (INSS)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 535 CPC, a Fazenda Pública é intimada na pessoa de seu representante judicial para impugnar a execução em 30 DIAS úteis (e não há multa de 10% do Art. 523)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 509 a 512 e Arts. 534 a 535 do CPC e Art. 100 CF/88",
        "textSnippet": "Liquidação: por cálculo aritmético já vai direto ao cumprimento de sentença (Art. 509, § 2º); por arbitramento (perícia/natureza do objeto); pelo procedimento comum (provar fato novo). RPV na ausência de lei própria (Art. 87 ADCT): 60 SM (União), 40 SM (Estados/DF), 30 SM (Municípios). Fazenda impugna em 30 dias."
      }
    ],
    "professorTip": "Cálculo aritmético = direto para Cumprimento (SEM liquidação)! RPV padrão ADCT: União 60 SM | Estados 40 SM | Municípios 30 SM (mínimo = teto INSS)! Fazenda impugna em 30 dias!"
  },
  {
    "id": "mig_cpc_064",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Processual Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Meios Alternativos de Solução de Conflitos - Conciliador vs. Mediador",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Na organização da solução consensual de conflitos no CPC, o conciliador e o mediador atuam em situações distintas quanto ao vínculo anterior das partes e à possibilidade de sugerir soluções. Qual a distinção legal correta?",
    "options": [
      {
        "letter": "A",
        "text": "O CONCILIADOR atuará preferencialmente nos casos em que NÃO houver vínculo anterior entre as partes, podendo sugerir soluções para o litígio (vedada qualquer constrição ou intimidação); já o MEDIADOR atuará preferencialmente nos casos em que HOUVER vínculo anterior entre as partes, auxiliando os interessados a compreender as questões e identificar por si mesmos soluções consensuais (sem sugerir diretamente)."
      },
      {
        "letter": "B",
        "text": "O mediador atua preferencialmente quando não houver vínculo anterior entre as partes, sugerindo ativamente propostas de acordo."
      },
      {
        "letter": "C",
        "text": "Conciliadores e mediadores não se submetem às regras de impedimento e suspeição aplicáveis aos juízes."
      },
      {
        "letter": "D",
        "text": "As sessões de conciliação e mediação são sempre públicas em atendimento à publicidade constitucional absoluta."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 165 CPC: Conciliador = sem vínculo anterior (ex.: acidente de trânsito, consumidor), pode sugerir soluções. Mediador = com vínculo anterior (ex.: família, vizinhos, sócios), facilita diálogo para que as partes cheguem ao consenso. Princípios: independência, imparcialidade, autonomia da vontade, confidencialidade, oralidade, informalidade e decisão informada.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "É exatamente o oposto no Art. 165, §§ 2º e 3º, do CPC: Conciliador = SEM vínculo anterior (pode sugerir soluções); Mediador = COM vínculo anterior (auxilia as partes a encontrarem a solução)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 148, II, e Art. 170 do CPC, aplicam-se aos auxiliares da justiça, conciliadores e mediadores os motivos de impedimento e suspeição, além de quarentena de 1 ano sem advogar no juízo em que atuarem (§ 5º do Art. 167 para vinculados ao tribunal)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 166, caput e § 1º, do CPC, a conciliação e a mediação são informadas pelo princípio da CONFIDENCIALIDADE, estendendo-se a todas as informações produzidas na sessão."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 165 a 175 do CPC e Lei nº 13.140/2015",
        "textSnippet": "Art. 165 CPC: Conciliador = sem vínculo anterior (ex.: acidente de trânsito, consumidor), pode sugerir soluções. Mediador = com vínculo anterior (ex.: família, vizinhos, sócios), facilita diálogo para que as partes cheguem ao consenso. Princípios: independência, imparcialidade, autonomia da vontade, confidencialidade, oralidade, informalidade e decisão informada."
      }
    ],
    "professorTip": "CONCILIADOR = SEM vínculo anterior (pode sugerir)! MEDIADOR = COM vínculo anterior (só facilita diálogo)! Ambos regidos pela CONFIDENCIALIDADE!"
  },
  {
    "id": "mig_cpc_065",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Processual Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Juiz, Suspeição, Impedimento e Incidente de Arguição",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Magistrado julga ação na qual seu irmão atua como advogado da parte autora; posteriormente, descobre-se que outra demanda foi julgada por juiz amigo íntimo do réu. Como o CPC qualifica cada vício e qual a consequência após o trânsito em julgado?",
    "options": [
      {
        "letter": "A",
        "text": "Parente até o 3º grau (irmão = 2º grau) atuando como advogado é causa objetiva de IMPEDIMENTO (Art. 144, III, CPC — vício mais grave, insanável, que autoriza inclusive Ação Rescisória em 2 anos após o trânsito em julgado conforme Art. 966, II!); amizade íntima é causa subjetiva de SUSPEIÇÃO (Art. 145, I — vício menos grave que preclui se não arguido em 15 dias do conhecimento do fato, não cabendo rescisória por mera suspeição!)."
      },
      {
        "letter": "B",
        "text": "Ambas as situações configuram suspeição e geram nulidade absoluta arguível em ação rescisória."
      },
      {
        "letter": "C",
        "text": "A arguição de impedimento ou suspeição suspende o processo automaticamente apenas se o juiz rejeitar a alegação."
      },
      {
        "letter": "D",
        "text": "Se o advogado da parte ingressar no processo depois que o juiz já assumiu a causa apenas para forçar o impedimento do juiz parente, o juiz continua impedido."
      }
    ],
    "correctAnswer": "A",
    "justification": "Impedimento (Art. 144 — objetivo): juiz foi parte/advogado/testemunha; cônjuge/parente até 3º grau é advogado/parte/membro MP; julgou em outro grau etc. (NÃO preclui; cabe rescisória). Suspeição (Art. 145 — subjetivo): amigo íntimo, inimigo capital, credor/devedor, interessado no julgamento (preclui em 15d; não cabe rescisória).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Impedimento (Art. 144, critérios objetivos) = nulidade grave e gera Ação Rescisória (Art. 966, II). Suspeição (Art. 145, critérios subjetivos como amizade íntima, inimizade capital, interesse) = preclui se não arguida em 15 dias e NÃO autoriza rescisória."
      },
      {
        "letter": "C",
        "explanation": "Protocolada a petição de impedimento/suspeição, se o juiz NÃO reconhecer, remete os autos ao tribunal e o relator declara se recebe com ou sem efeito suspensivo (Art. 146, § 2º)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 144, § 2º, CPC, é vedada a criação de fato superveniente a fim de caracterizar impedimento do juiz."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 144 a 148 do CPC",
        "textSnippet": "Impedimento (Art. 144 — objetivo): juiz foi parte/advogado/testemunha; cônjuge/parente até 3º grau é advogado/parte/membro MP; julgou em outro grau etc. (NÃO preclui; cabe rescisória). Suspeição (Art. 145 — subjetivo): amigo íntimo, inimigo capital, credor/devedor, interessado no julgamento (preclui em 15d; não cabe rescisória)."
      }
    ],
    "professorTip": "IMPEDIMENTO (Art. 144) = Objetivo, NÃO preclui, cabe RESCISÓRIA! SUSPEIÇÃO (Art. 145) = Subjetivo (amigo/inimigo/credor), preclui em 15d, NÃO cabe rescisória!"
  },
  {
    "id": "mig_cpc_066",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Processual Civil",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Processual Civil",
    "topic": "Incidente de Assunção de Competência (IAC) e Reclamação no CPC",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Turma de Tribunal de Justiça julga recurso envolvendo relevante questão de direito com grande repercussão social, sem repetição em múltiplos processos. Além disso, juiz de 1º grau aplica erroneamente tese firmada pelo STJ em Recurso Especial Repetitivo após o processo já ter esgotado as instâncias ordinárias? Qual o instrumento adequado em cada cenário?",
    "options": [
      {
        "letter": "A",
        "text": "No tribunal, para relevante questão de direito com grande repercussão social SEM repetição em múltiplos processos, cabe Incidente de Assunção de Competência (IAC — Art. 947 CPC); já contra inobservância de tese em recurso extraordinário com repercussão geral ou recurso especial repetitivo, a Reclamação só é admitida APÓS esgotadas as instâncias ordinárias (Art. 988, § 5º, II, CPC — e nunca cabe reclamação após trânsito em julgado pela Súmula 734 STF e Art. 988, § 5º, I)!"
      },
      {
        "letter": "B",
        "text": "Cabe Reclamação direta imediata ao STF ou STJ antes mesmo de esgotar a apelação no Tribunal de Justiça quando o juiz de 1º grau contrariar recurso repetitivo."
      },
      {
        "letter": "C",
        "text": "A reclamação constitucional pode ser proposta mesmo após o trânsito em julgado da decisão impugnada para desconstituir coisa julgada."
      },
      {
        "letter": "D",
        "text": "A decisão proferida em IAC vincula apenas as partes do processo originário, sem efeito vinculante para os demais órgãos fracionários do tribunal."
      }
    ],
    "correctAnswer": "A",
    "justification": "IAC (Art. 947): relevante questão de direito + grande repercussão social + SEM multiplicidade repetitiva; vincula todo tribunal e juízes vinculados. Reclamação (Art. 988): preserva competência, autoridade de decisões e precedentes vinculantes (proibida após trânsito em julgado; repetitivo/RG exige esgotar instâncias ordinárias).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 988, § 5º, II, CPC exige expressamente o ESGOTAMENTO DAS INSTÂNCIAS ORDINÁRIAS para reclamação fundada em acórdão de repercussão geral ou recursos repetitivos (ao contrário de Súmula Vinculante, ADI/ADC/ADPF ou IRDR/IAC, que dispensam esse esgotamento)."
      },
      {
        "letter": "C",
        "explanation": "Tanto a Súmula 734 STF quanto o Art. 988, § 5º, I, do CPC vedam a reclamação proposta após o trânsito em julgado da decisão reclamada."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 947, § 3º, do CPC, o acórdão proferido em assunção de competência vinculará TODOS os juízes e órgãos fracionários, exceto se houver revisão de tese."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código de Processo Civil (CPC/2015)",
        "article": "Arts. 947 e 988 a 993 do CPC",
        "textSnippet": "IAC (Art. 947): relevante questão de direito + grande repercussão social + SEM multiplicidade repetitiva; vincula todo tribunal e juízes vinculados. Reclamação (Art. 988): preserva competência, autoridade de decisões e precedentes vinculantes (proibida após trânsito em julgado; repetitivo/RG exige esgotar instâncias ordinárias)."
      }
    ],
    "jurisprudence": "Súmula nº 734 do STF",
    "professorTip": "Reclamação (Art. 988 CPC): NUNCA após trânsito em julgado (Súmula 734 STF)! Para atacar violação a REPETITIVO ou REPERCUSSÃO GERAL, exige ESGOTAR as instâncias ordinárias!"
  }
];
