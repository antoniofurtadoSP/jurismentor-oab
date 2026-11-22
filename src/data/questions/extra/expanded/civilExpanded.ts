// Arquivo gerado automaticamente por scripts/migrateQuestions.ts — NÃO editar manualmente.
import type { LegalQuestion } from '../../../../types';

export const CIVIL_EXPANDED_QUESTIONS: LegalQuestion[] = [
  {
    "id": "mig_civil_001",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "LINDB - Vigência das Leis, Vacatio Legis e Correção de Texto",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Uma lei federal foi publicada no Diário Oficial da União em 1º de março sem estabelecer expressamente sua data de entrada em vigor. Dez dias depois, antes do início da vigência, foi republicada apenas para correção de erro material em dois artigos. Como se conta sua vigência no Brasil e no exterior?",
    "options": [
      {
        "letter": "A",
        "text": "No silêncio da lei, ela entra em vigor imediatamente na data de sua publicação no Diário Oficial, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "B",
        "text": "A republicação para correção após a lei já ter entrado em vigor não é considerada lei nova em relação às alterações substanciais, com ineficácia jurídica plena do negócio celebrado perante terceiros de boa-fé e credores."
      },
      {
        "letter": "C",
        "text": "Se uma lei complementar posterior alterar apenas parcialmente uma lei anterior sem declarar expressamente sua revogação, revoga-a sempre integralmente."
      },
      {
        "letter": "D",
        "text": "Salvo disposição contrária, a lei começa a vigorar no país 45 dias depois de oficialmente publicada."
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 1º da LINDB: silêncio = 45 dias no Brasil / 3 meses no exterior. Republicação antes da vigência = reinicia prazo da nova publicação para os trechos corrigidos; correção após já estar em vigor = considera-se lei nova.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A vigência imediata só ocorre se a lei expressamente dispuser; no silêncio aplica-se a vacatio de 45 dias no Brasil e 3 meses no exterior."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 1º, § 4º, da LINDB, as correções a texto de lei JÁ EM VIGOR consideram-se LEI NOVA."
      },
      {
        "letter": "C",
        "explanation": "A lei posterior só revoga a anterior quando expressamente o declare, quando seja com ela incompatível ou quando regule inteiramente a matéria (Art. 2º, § 1º, LINDB)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1º e 2º da LINDB (DL 4.657/42)",
        "textSnippet": "Art. 1º da LINDB: silêncio = 45 dias no Brasil / 3 meses no exterior. Republicação antes da vigência = reinicia prazo da nova publicação para os trechos corrigidos; correção após já estar em vigor = considera-se lei nova."
      }
    ],
    "professorTip": "LINDB: silêncio = 45 dias (Brasil) / 3 meses (exterior)! Corrigiu ANTES de vigorar = reconta o prazo; corrigiu DEPOIS de vigorar = é LEI NOVA!"
  },
  {
    "id": "mig_civil_002",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Personalidade Civil, Nascituro e Direitos da Personalidade",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Uma mulher grávida de seis meses perdeu o marido em acidente causado por motorista imprudente e pretende ajuizar ação indenizatória por danos morais em favor do nascituro, além de um artista plástico pleitear exclusão de biografia não autorizada sobre sua vida pública. Como o Código Civil e o STF tratam ambos os temas?",
    "options": [
      {
        "letter": "A",
        "text": "O nascituro não possui direito à reparação por danos morais se o pai falecer antes do seu nascimento com vida, sem possibilidade de modificação unilateral das obrigações contratuais sem anuência expressa."
      },
      {
        "letter": "B",
        "text": "A publicação de biografia de pessoa pública exige autorização prévia e escrita do biografado sob pena de censura judicial prévia, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "C",
        "text": "Os direitos da personalidade são livremente renunciáveis e transmissíveis por contrato oneroso entre maiores capazes, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "D",
        "text": "A personalidade civil começa do nascimento com vida, mas a lei põe a salvo desde a concepção os direitos do nascituro; quanto às biografias, o STF na ADI 4.815 declarou inexigível a autorização prévia do biografado para publicação de obras biográficas literárias ou audiovisuais."
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 2º CC adota a teoria natalista com proteção ampla aos direitos do nascituro (danos morais, alimentos gravídicos, seguro DPVAT — STJ). Os direitos da personalidade (Arts. 11–21) são intransmissíveis, irrenunciáveis e extrapatrimoniais, tendo o STF na ADI 4.815 afastado a exigência de autorização prévia para biografias.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STJ reconhece expressamente o direito do nascituro à indenização por danos morais pela morte pré-natal do genitor."
      },
      {
        "letter": "B",
        "explanation": "Na ADI 4.815, o STF deu interpretação conforme ao Art. 20 e 21 do CC para dispensar autorização prévia em biografias, ressalvada reparação posterior por eventuais abusos."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 11 do CC, com exceção dos casos previstos em lei, os direitos da personalidade são intransmissíveis e irrenunciáveis, não podendo seu exercício sofrer limitação voluntária."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 2º, 11 a 21 do Código Civil",
        "textSnippet": "Art. 2º CC adota a teoria natalista com proteção ampla aos direitos do nascituro (danos morais, alimentos gravídicos, seguro DPVAT — STJ). Os direitos da personalidade (Arts. 11–21) são intransmissíveis, irrenunciáveis e extrapatrimoniais, tendo o STF na ADI 4.815 afastado a exigência de autorização prévia para biografias."
      }
    ],
    "jurisprudence": "STF ADI 4.815",
    "professorTip": "Nascituro: personalidade no nascimento com vida, mas tem direito a alimentos gravídicos e dano moral! Biografia (ADI 4.815 STF) = NÃO exige autorização prévia!"
  },
  {
    "id": "mig_civil_003",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Incapacidade Civil - Estatuto da Pessoa com Deficiência (Lei 13.146/2015)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Após o advento do Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015), quais pessoas são consideradas ABSOLUTAMENTE incapazes de exercer pessoalmente os atos da vida civil segundo o Art. 3º do Código Civil?",
    "options": [
      {
        "letter": "A",
        "text": "Os menores de 16 anos e as pessoas que, por enfermidade ou deficiência mental, não tiverem o necessário discernimento para os atos civis. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "Os pródigos e os ébrios habituais continuam classificados como absolutamente incapazes no Código Civil, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "C",
        "text": "A pessoa com deficiência intelectual submetida à curatela perde também o direito de casar e de constituir união estável, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "D",
        "text": "Apenas os menores de 16 anos são absolutamente incapazes; pessoas com deficiência mental ou intelectual têm plena capacidade civil em regra."
      }
    ],
    "correctAnswer": "D",
    "justification": "Desde a Lei nº 13.146/2015, o Art. 3º do CC tem apenas um caso de incapacidade absoluta: menores de 16 anos. Aqueles que, por causa transitória ou permanente, não puderem exprimir vontade migraram para o Art. 4º, III (relativamente incapazes). E a curatela da PCD é medida extraordinária restrita a atos patrimoniais/negociais.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Os incisos II e III antigos do Art. 3º foram REVOGADOS pela Lei nº 13.146/2015; hoje o ÚNICO absolutamente incapaz no Brasil é o menor de 16 anos!"
      },
      {
        "letter": "B",
        "explanation": "Ébrios habituais, viciados em tóxico, pródigos, maiores entre 16 e 18 anos e os que por causa transitória ou permanente não puderem exprimir sua vontade são RELATIVAMENTE incapazes (Art. 4º CC)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 6º e Art. 85 da Lei 13.146/2015 garantem à pessoa com deficiência o direito de casar, constituir união estável e exercer direitos sexuais/reprodutivos; a curatela afeta APENAS atos de natureza patrimonial e negocial."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 3º e 4º do Código Civil e Lei 13.146/2015",
        "textSnippet": "Desde a Lei nº 13.146/2015, o Art. 3º do CC tem apenas um caso de incapacidade absoluta: menores de 16 anos. Aqueles que, por causa transitória ou permanente, não puderem exprimir vontade migraram para o Art. 4º, III (relativamente incapazes). E a curatela da PCD é medida extraordinária restrita a atos patrimoniais/negociais."
      }
    ],
    "professorTip": "Hoje (após Lei 13.146/15): ÚNICO absolutamente incapaz = menor de 16 anos! Não poder exprimir vontade virou RELATIVAMENTE incapaz (Art. 4º, III)!"
  },
  {
    "id": "mig_civil_004",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Emancipação - Voluntária, Judicial e Legal",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um adolescente de 16 anos completos foi emancipado voluntariamente por escritura pública outorgada por ambos os pais. Semanas depois, envolveu-se em acidente de trânsito dirigindo sem habilitação e causou danos materiais a terceiro. A emancipação voluntária dos pais afasta a responsabilidade civil solidária/subsidiária destes pelos atos ilícitos do filho?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, a emancipação voluntária extingue imediatamente toda e qualquer responsabilidade civil dos pais pelos atos ilícitos do menor, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "B",
        "text": "A colação de grau em curso de ensino superior ou o casamento válido só emancipam o menor se houver prévia concordância por escritura pública dos pais, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "C",
        "text": "A emancipação voluntária exige necessariamente sentença judicial com oitiva do Ministério Público mesmo quando ambos os pais concordam e o menor tem 16 anos, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "D",
        "text": "Não afasta, pois segundo jurisprudência pacífica do STJ e STF, a emancipação voluntária concedida pelos pais não exclui a responsabilidade civil dos genitores pelos atos ilícitos praticados pelo filho menor emancipado."
      }
    ],
    "correctAnswer": "D",
    "justification": "Espécies de emancipação (Art. 5º, par. único): Voluntária (16+ anos, concessão dos pais por instrumento público — NÃO exime pais de responsabilidade civil por ilícito!); Judicial (16+ anos, sob tutela, por sentença do juiz); Legal (casamento, emprego público efetivo, colação de grau superior, economia própria por estabelecimento ou trabalho aos 16+).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A emancipação voluntária por ato dos pais não pode ser usada para fraudar terceiros ou eximir os genitores da responsabilidade reparatória civil (STJ)."
      },
      {
        "letter": "B",
        "explanation": "Casamento, exercício de emprego público efetivo, colação de grau em ensino superior e estabelecimento civil/comercial com economia própria aos 16+ anos são causas de emancipação LEGAL automática (Art. 5º, parágrafo único, II a V)."
      },
      {
        "letter": "C",
        "explanation": "Quando ambos os pais concordam (ou um na falta do outro) e o menor tem 16 anos completos, a emancipação voluntária faz-se por INSTRUMENTO PÚBLICO (escritura em cartório), independentemente de homologação judicial (Art. 5º, parágrafo único, I)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Art. 5º, parágrafo único, do Código Civil",
        "textSnippet": "Espécies de emancipação (Art. 5º, par. único): Voluntária (16+ anos, concessão dos pais por instrumento público — NÃO exime pais de responsabilidade civil por ilícito!); Judicial (16+ anos, sob tutela, por sentença do juiz); Legal (casamento, emprego público efetivo, colação de grau superior, economia própria por estabelecimento ou trabalho aos 16+)."
      }
    ],
    "professorTip": "Emancipação VOLUNTÁRIA (escritura dos pais aos 16+) NÃO livra os pais da responsabilidade civil por ato ilícito do filho! E casamento abaixo de 16 anos é proibido atualmente (Art. 1.520 CC)!"
  },
  {
    "id": "mig_civil_005",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Civil",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Ausência - Fases da Curadoria, Sucessão Provisória e Sucessão Definitiva",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Carlos desapareceu de seu domicílio sem deixar notícias nem procurador. Após 1 ano da arrecadação dos bens do ausente na curadoria, os herdeiros requereram a abertura da sucessão provisória. Quanto tempo após o trânsito em julgado da sentença de sucessão provisória poderão requerer a sucessão definitiva e qual a exceção de idade?",
    "options": [
      {
        "letter": "A",
        "text": "A sucessão definitiva só pode ser requerida após 20 anos contados da sentença da sucessão provisória, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "B",
        "text": "Se o ausente deixou procurador constituído antes de desaparecer, a sucessão provisória abre-se igualmente após 1 ano, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "C",
        "text": "Na sucessão provisória, os herdeiros adquirem a propriedade plena imediata e podem vender livremente todos os imóveis do ausente sem garantia, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "D",
        "text": "Poderão requerer a sucessão definitiva 10 anos depois de passada em julgado a sentença que concedeu a abertura da sucessão provisória, ou provando-se que o ausente conta 80 anos de idade e que de 5 anos datam as últimas notícias dele."
      }
    ],
    "correctAnswer": "D",
    "justification": "Fases da ausência no CC: (1) Curadoria dos bens (1 ano sem procurador / 3 anos com procurador); (2) Sucessão Provisória (180 dias após publicação da sentença; caução exigida salvo ascendente/descendente/cônjuge); (3) Sucessão Definitiva (10 anos do trânsito em julgado da provisória, OU 80 anos de idade + 5 anos sem notícias).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O prazo do Art. 37 do CC foi reduzido para 10 ANOS após o trânsito em julgado da sentença da sucessão provisória."
      },
      {
        "letter": "B",
        "explanation": "Se o ausente deixou representante/procurador, o prazo de espera na fase de curadoria para abrir a sucessão provisória é de 3 ANOS (Art. 26 CC — contra 1 ano se não deixou procurador)."
      },
      {
        "letter": "C",
        "explanation": "Na sucessão provisória, exige-se garantia real (caução) dos herdeiros (salvo ascendentes, descendentes e cônjuge — Art. 30, § 2º) e os imóveis só podem ser alienados em casos estritos mediante autorização judicial."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 22 a 39 do Código Civil",
        "textSnippet": "Fases da ausência no CC: (1) Curadoria dos bens (1 ano sem procurador / 3 anos com procurador); (2) Sucessão Provisória (180 dias após publicação da sentença; caução exigida salvo ascendente/descendente/cônjuge); (3) Sucessão Definitiva (10 anos do trânsito em julgado da provisória, OU 80 anos de idade + 5 anos sem notícias)."
      }
    ],
    "professorTip": "Ausência: Curadoria = 1 ano (sem procurador) ou 3 anos (com procurador). Definitiva = 10 anos da provisória, OU 80 anos de idade + 5 anos sem notícias!"
  },
  {
    "id": "mig_civil_006",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Pessoas Jurídicas - Associações, Fundações e Desconsideração (Lei Liberdade Econômica)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Credor de sociedade empresária insolvente requereu a desconsideração da personalidade jurídica com base exclusivamente na existência de grupo econômico entre duas empresas e no simples encerramento regular sem bens penhoráveis. Com a redação dada ao Art. 50 do CC pela Lei da Liberdade Econômica (Lei 13.874/2019), o pedido procede?",
    "options": [
      {
        "letter": "A",
        "text": "Procede, porque a simples insolvência da devedora já autoriza a desconsideração pela Teoria Maior. Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes."
      },
      {
        "letter": "B",
        "text": "O desvio de finalidade caracteriza-se pela mera expansão legítima da empresa para novo ramo comercial não previsto originalmente, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional. A solução aplica-se de modo uniforme tanto às obrigações principais quanto às acessórias."
      },
      {
        "letter": "C",
        "text": "Não se admite no ordenamento brasileiro a desconsideração inversa da personalidade jurídica para atingir bens da sociedade por dívida pessoal do sócio, com impedimento à compensação ou repetição dos valores prestados na relação negocial."
      },
      {
        "letter": "D",
        "text": "Não procede, pois a desconsideração da personalidade jurídica no Código Civil exige abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, declarando expressamente o § 4º que a mera existência de grupo econômico sem a presença desses requisitos não autoriza a desconsideração."
      }
    ],
    "correctAnswer": "D",
    "justification": "O Art. 50 do CC (Teoria Maior — atualizada pela Lei nº 13.874/2019) exige abuso da personalidade: desvio de finalidade (utilização com propósito de lesar credores ou praticar ilícitos) ou confusão patrimonial (ausência de separação de fato entre patrimônios). Admite desconsideração inversa (§ 3º) e afasta presunção automática por mero grupo econômico (§ 4º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A simples insuficiência de patrimônio basta apenas na Teoria MENOR (Art. 28, § 5º, CDC e direito ambiental); na Teoria MAIOR do Código Civil (Art. 50) exige-se abuso (desvio de finalidade OU confusão patrimonial)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 50, § 5º, NÃO constitui desvio de finalidade a mera expansão ou alteração da finalidade original da atividade econômica específica da pessoa jurídica."
      },
      {
        "letter": "C",
        "explanation": "O Art. 50, § 3º, do CC e o Art. 133, § 2º, do CPC positivaram expressamente a DESCONSIDERAÇÃO INVERSA da personalidade jurídica."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 44, 50, 53 e 62 do Código Civil (Lei 13.874/2019)",
        "textSnippet": "O Art. 50 do CC (Teoria Maior — atualizada pela Lei nº 13.874/2019) exige abuso da personalidade: desvio de finalidade (utilização com propósito de lesar credores ou praticar ilícitos) ou confusão patrimonial (ausência de separação de fato entre patrimônios). Admite desconsideração inversa (§ 3º) e afasta presunção automática por mero grupo econômico (§ 4º)."
      }
    ],
    "professorTip": "Art. 50 CC (Teoria Maior): exige abuso = Desvio de Finalidade OU Confusão Patrimonial! Só grupo econômico ou só falta de bens NÃO basta no CC (só no CDC/Ambiental)! Admite desconsideração INVERSA!"
  },
  {
    "id": "mig_civil_007",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Bens Imóveis por Determinação Legal, Pertenças e Benfeitorias",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Na venda de uma fazenda produtiva com escritura definitiva de compra e venda, o contrato nada mencionou sobre tratores e colheitadeiras agrícolas mantidos na propriedade, tampouco sobre as cercas reformadas pelo possuidor e a pintura artística decorativa feita na sede. Como o Código Civil classifica esses bens e qual o destino dos tratores?",
    "options": [
      {
        "letter": "A",
        "text": "Os tratores acompanham automaticamente a venda da fazenda por força absoluta do princípio de que o acessório segue o principal, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "O direito à sucessão aberta (herança) composta exclusivamente por automóveis e dinheiro é classificado como bem móvel pelo Código Civil, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "C",
        "text": "A pintura artística decorativa feita para mero deleite na sede configura benfeitoria útil, garantindo direito de retenção ao possuidor de boa-fé, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "D",
        "text": "Os tratores e máquinas agrícolas são pertenças e, em regra, os negócios jurídicos que dizem respeito ao bem principal não abrangem as pertenças, salvo se o contrário resultar da lei, da manifestação de vontade ou das circunstâncias."
      }
    ],
    "correctAnswer": "D",
    "justification": "No Livro II da Parte Geral do CC: consideram-se imóveis por lei os direitos reais sobre imóveis e o direito à sucessão aberta (Art. 80); as energias com valor econômico são móveis (Art. 83, I). Pertenças (Arts. 93–94) NÃO seguem automaticamente o bem principal na falta de previsão. Benfeitorias dividem-se em necessárias, úteis e voluptuárias.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 94 do CC cria exatamente a EXCEÇÃO para as pertenças: os negócios sobre o bem principal NÃO abrangem as pertenças, salvo disposição em contrário!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 80, II, do CC, o direito à sucessão aberta considera-se BEM IMÓVEL para os efeitos legais, ainda que o espólio só tenha bens móveis ou dinheiro."
      },
      {
        "letter": "C",
        "explanation": "Obras de mero deleite ou recreio são benfeitorias VOLUPTUÁRIAS (Art. 96, § 1º); o possuidor de boa-fé tem direito de retenção apenas pelas benfeitorias NECESSÁRIAS e ÚTEIS (pelas voluptuárias só tem direito de levantar sem detrimento se não pagas — Art. 1.219 CC)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 79 a 97 do Código Civil",
        "textSnippet": "No Livro II da Parte Geral do CC: consideram-se imóveis por lei os direitos reais sobre imóveis e o direito à sucessão aberta (Art. 80); as energias com valor econômico são móveis (Art. 83, I). Pertenças (Arts. 93–94) NÃO seguem automaticamente o bem principal na falta de previsão. Benfeitorias dividem-se em necessárias, úteis e voluptuárias."
      }
    ],
    "professorTip": "Pertenças (trator na fazenda): NÃO seguem o principal na venda, salvo pacto/lei (Art. 94 CC)! Direito à sucessão aberta (herança) = bem IMÓVEL sempre (Art. 80, II)!"
  },
  {
    "id": "mig_civil_008",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Defeitos do Negócio Jurídico - Erro, Dolo, Coação, Estado de Perigo e Lesão",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em duas situações distintas: (A) pessoa com inexperiência negocial ou sob premente necessidade assume obrigação manifestamente desproporcional ao valor da prestação oposta; (B) pessoa premida da necessidade de salvar-se ou a pessoa de sua família de grave dano conhecido pela outra parte assume obrigação excessivamente onerosa. Qual o defeito em cada caso e qual admite revisão para evitar anulação?",
    "options": [
      {
        "letter": "A",
        "text": "Ambos os vícios (lesão e estado de perigo) acarretam a nulidade absoluta e imprescritível do negócio jurídico, com impedimento à compensação ou repetição dos valores prestados na relação negocial. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "A coação exercida por terceiro estranho ao negócio anula o negócio ainda que a parte beneficiada dela não tivesse nem devesse ter conhecimento, com ineficácia jurídica plena do negócio celebrado perante terceiros de boa-fé e credores."
      },
      {
        "letter": "C",
        "text": "O dolo acidental (aquele sem o qual o negócio seria realizado, mas de outro modo) acarreta a anulação integral do negócio jurídico, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor."
      },
      {
        "letter": "D",
        "text": "A situação (A) é lesão; a situação (B) é estado de perigo. Ambos tornam o negócio anulável em 4 anos, e na Lesão não se decretará a anulação se for oferecido suplemento suficiente ou se a parte favorecida concordar com a redução do proveito."
      }
    ],
    "correctAnswer": "D",
    "justification": "Defeitos do negócio jurídico (Arts. 138–167 CC): Erro, Dolo, Coação, Estado de Perigo, Lesão e Fraude contra Credores = ANULÁVEIS (prazo decadencial de 4 anos no Art. 178!). Simulação (Art. 167) = NULA (sem prazo decadencial, imprescritível — Art. 169). Dolo acidental = só perdas e danos. Coação de terceiro não conhecida pelo beneficiado = negócio válido, terceiro indeniza.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Todos os defeitos por vício de consentimento (erro, dolo, coação, estado de perigo, lesão) e fraude contra credores geram ANULABILIDADE (prazo decadencial de 4 anos — Art. 178); apenas a SIMULAÇÃO gera nulidade absoluta (Art. 167)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 154 do CC, a coação por terceiro só vicia o negócio se a parte a quem aproveite dela tivesse ou devesse ter conhecimento; caso contrário, subsiste o negócio e o terceiro responde por todas as perdas e danos (§ 1º)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 146 do CC, o dolo acidental só obriga à satisfação de PERDAS E DANOS (não anula o negócio!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 138 a 157 do Código Civil",
        "textSnippet": "Defeitos do negócio jurídico (Arts. 138–167 CC): Erro, Dolo, Coação, Estado de Perigo, Lesão e Fraude contra Credores = ANULÁVEIS (prazo decadencial de 4 anos no Art. 178!). Simulação (Art. 167) = NULA (sem prazo decadencial, imprescritível — Art. 169). Dolo acidental = só perdas e danos. Coação de terceiro não conhecida pelo beneficiado = negócio válido, terceiro indeniza."
      }
    ],
    "professorTip": "Simulação = NULA (não convalesce)! Todos os outros defeitos (Erro, Dolo, Coação, Estado de Perigo, Lesão, Fraude contra credores) = ANULÁVEIS em 4 ANOS! Dolo acidental = só perdas e danos!"
  },
  {
    "id": "mig_civil_009",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Fraude Contra Credores vs. Fraude à Execução e Súmula 375 STJ",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Um devedor já insolvente, mas antes mesmo de ser citado em qualquer ação judicial de cobrança, doou seu único apartamento valioso ao irmão para frustrar seus credores quirografários anteriores. Em outra hipótese, um devedor alienou imóvel durante processo de execução já em curso, porém sem registro de penhora na matrícula e sem má-fé provada do adquirente. Analise ambos os casos:",
    "options": [
      {
        "letter": "A",
        "text": "Na doação gratuita praticada por devedor insolvente, o credor deve provar a má-fé (consilium fraudis) do irmão donatário para anular o ato pela ação pauliana, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      },
      {
        "letter": "B",
        "text": "A ação pauliana exige que o crédito do credor quirografário tenha sido constituído após a doação fraudulenta, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "C",
        "text": "A sentença procedente da ação pauliana declara a nulidade absoluta erga omnes do negócio jurídico e devolve o imóvel ao patrimônio do credor vencedor, sem transmissão automática dos direitos obrigacionais ou reais antes da formalização registral."
      },
      {
        "letter": "D",
        "text": "O primeiro caso configura fraude contra credores; no segundo caso, para caracterizar fraude à execução de bem imóvel não sujeito à penhora registrada, exige-se o registro da penhora na matrícula ou prova da má-fé do terceiro adquirente pelo exequente."
      }
    ],
    "correctAnswer": "D",
    "justification": "Fraude contra credores (Arts. 158–165 CC): exige anterioridade do crédito + eventus damni (insolvência) + consilium fraudis (presumido/dispensado nos atos gratuitos!); combate-se por Ação Pauliana (prazo decadencial de 4 anos — Art. 178, II). Fraude à execução (Art. 792 CPC): ato atentatório à jurisdição já com demanda em curso, declarada nos próprios autos (ineficácia), exigindo na venda de imóvel sem penhora registrada prova de má-fé do terceiro (Súmula 375 STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos negócios de transmissão GRATUITA de bens (doação) ou remissão de dívida (Art. 158 CC), dispensa-se a prova do consilium fraudis (basta o eventus damni — redução à insolvência)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 158, § 2º, só os credores que JÁ o eram ao tempo daqueles atos podem pleitear a anulação (anterioridade do crédito)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 165 do CC (e STJ), anulado o negócio fraudulento, a vantagem resultante reverterá em proveito do acervo sobre que se tenha de efetuar o concurso de credores (natureza anulatória/ineficácia relativa segundo a doutrina e STJ)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 158 a 165 CC e Art. 792 CPC + Súmula 375 STJ",
        "textSnippet": "Fraude contra credores (Arts. 158–165 CC): exige anterioridade do crédito + eventus damni (insolvência) + consilium fraudis (presumido/dispensado nos atos gratuitos!); combate-se por Ação Pauliana (prazo decadencial de 4 anos — Art. 178, II). Fraude à execução (Art. 792 CPC): ato atentatório à jurisdição já com demanda em curso, declarada nos próprios autos (ineficácia), exigindo na venda de imóvel sem penhora registrada prova de má-fé do terceiro (Súmula 375 STJ)."
      }
    ],
    "jurisprudence": "Súmula 375 do STJ",
    "professorTip": "Fraude contra credores = Ação Pauliana (4 anos; doação dispensa prova de má-fé)! Fraude à execução = nos próprios autos + Súmula 375 STJ (sem registro da penhora, credor tem que provar má-fé do comprador)!"
  },
  {
    "id": "mig_civil_010",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Prescrição vs. Decadência - Prazos do Código Civil e Interrupção/Suspensão",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Identifique corretamente os prazos prescricionais previstos no Art. 206 do Código Civil para: (1) cobrança de aluguéis vencidos de prédio urbano; (2) pretensão de reparação civil por acidente de trânsito entre particulares; (3) pretensão de cobrança de dívidas líquidas constantes de instrumento público ou particular; e (4) prazo máximo geral subsidiário:",
    "options": [
      {
        "letter": "A",
        "text": "Todas as ações de reparação civil — tanto contratuais quanto extracontratuais — prescrevem igualmente em 3 anos segundo a jurisprudência atual do STJ, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "A interrupção da prescrição pode ser renovada quantas vezes o credor desejar mediante novos protestos extrajudiciais sucessivos, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "C",
        "text": "Respectivamente: 3 anos para aluguéis; 3 anos para reparação civil extracontratual ou contratual; 5 anos para cobrança de dívidas líquidas em instrumento público/particular; e 10 anos quando a lei não fixar prazo menor."
      },
      {
        "letter": "D",
        "text": "A prescrição corre normalmente contra os absolutamente incapazes e entre cônjuges durante a constância da sociedade conjugal, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Prazos-chave do CC: 1 ano (hospedeiro/segurado x segurador); 2 anos (prestações alimentares); 3 anos (aluguéis, enriquecimento sem causa, reparação civil EXTRACONTRATUAL); 5 anos (dívidas líquidas em instrumento público/particular, honorários profissionais liberais); 10 anos (regra geral + inadimplemento CONTRATUAL — STJ EREsp 1.281.594). Interrupção ocorre só 1 vez (Art. 202) e pode ser reconhecida de ofício (Art. 487, II, CPC).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Corte Especial do STJ (EREsp 1.281.594) pacificou a distinção: responsabilidade civil EXTRACONTRATUAL (ex.: acidente de trânsito) = 3 ANOS (Art. 206, § 3º, V); inadimplemento CONTRATUAL = 10 ANOS (regra geral do Art. 205 CC)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 202, caput, do CC, a interrupção da prescrição só pode ocorrer UMA ÚNICA VEZ (incluindo protesto cambial, Art. 202, III)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 197, I e Art. 198, I, do CC, NÃO corre a prescrição entre cônjuges na constância da sociedade conjugal nem contra os absolutamente incapazes (menores de 16 anos)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 189 a 211 do Código Civil",
        "textSnippet": "Prazos-chave do CC: 1 ano (hospedeiro/segurado x segurador); 2 anos (prestações alimentares); 3 anos (aluguéis, enriquecimento sem causa, reparação civil EXTRACONTRATUAL); 5 anos (dívidas líquidas em instrumento público/particular, honorários profissionais liberais); 10 anos (regra geral + inadimplemento CONTRATUAL — STJ EREsp 1.281.594). Interrupção ocorre só 1 vez (Art. 202) e pode ser reconhecida de ofício (Art. 487, II, CPC)."
      }
    ],
    "jurisprudence": "STJ EREsp 1.281.594",
    "professorTip": "Prazos CC: Alimentos = 2 anos; Aluguel / Dano extracontratual = 3 anos; Dívida líquida / Profissional liberal = 5 anos; Regra geral / Inadimplemento contratual (STJ) = 10 anos! Interrompe só 1 VEZ!"
  },
  {
    "id": "mig_civil_011",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Obrigações Solidárias vs. Indivisíveis - Remissão, Mora e Juros",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Três devedores obrigaram-se SOLIDARIAMENTE a pagar R$ 90.000,00 a um credor. O credor concedeu remissão (perdão) da cota de R$ 30.000,00 apenas a um dos codevedores, e outro codevedor incorreu em mora culposa no vencimento gerando juros de mora e perdas e danos suplementares. Quais os efeitos para os demais codevedores?",
    "options": [
      {
        "letter": "A",
        "text": "Na solidariedade passiva, perdoada a dívida de um só devedor, o credor ainda pode cobrar os R$ 90.000,00 integrais dos outros dois devedores. Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes."
      },
      {
        "letter": "B",
        "text": "Impossibilitando-se a prestação por culpa de um dos devedores solidários, todos respondem solidariamente pelas perdas e danos suplementares, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "A remissão obtida por um codevedor só exonera a sua própria quota-parte (R$ 30.000,00), não podendo o credor cobrar os outros codevedores senão deduzindo a parte remitida."
      },
      {
        "letter": "D",
        "text": "A solidariedade presume-se sempre que houver dois ou mais devedores no mesmo contrato de prestação de serviços, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      }
    ],
    "correctAnswer": "C",
    "justification": "Regras de ouro das obrigações solidárias passivas (Arts. 275–285 CC): solidariedade não se presume (Art. 265); remissão a um codevedor abate a cota dele na cobrança aos demais (Art. 277); perecimento com culpa de um: todos devem o equivalente, mas só o culpado paga perdas e danos (Art. 279); juros da mora: todos respondem perante o credor, com direito de regresso contra o culpado (Art. 280).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 277 do CC impõe a dedução da cota perdoada: o credor só pode acionar os demais codevedores abatendo a parte do remitido."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 279 do CC, subsiste para todos o encargo de pagar o equivalente, MAS pelas PERDAS E DANOS só responde o CULPADO (diferente dos juros de mora do Art. 280, pelos quais todos respondem, com regresso contra o culpado)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 265 do CC, a solidariedade NÃO se presume; resulta da lei ou da vontade das partes."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 257 a 285 do Código Civil",
        "textSnippet": "Regras de ouro das obrigações solidárias passivas (Arts. 275–285 CC): solidariedade não se presume (Art. 265); remissão a um codevedor abate a cota dele na cobrança aos demais (Art. 277); perecimento com culpa de um: todos devem o equivalente, mas só o culpado paga perdas e danos (Art. 279); juros da mora: todos respondem perante o credor, com direito de regresso contra o culpado (Art. 280)."
      }
    ],
    "professorTip": "Solidariedade NÃO se presume (Art. 265)! Perdoou 1 = abate a cota dele (Art. 277)! Culpa de 1 = todos pagam o equivalente e juros, MAS só o culpado paga PERDAS E DANOS (Arts. 279–280)!"
  },
  {
    "id": "mig_civil_012",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Pagamento Indevido, Pagamento com Sub-rogação e Daçãо em Pagamento",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "ACADEMICA",
    "statement": "Um terceiro não interessado (amigo do devedor) pagou uma dívida vencida em seu próprio nome, sem sub-rogação convencional; em outro contrato, o credor aceitou receber um carro usado no lugar da dívida original em dinheiro, mas posteriormente o carro foi perdido pelo credor por evicção (pertencia a terceiro). Quais as consequências jurídicas?",
    "options": [
      {
        "letter": "A",
        "text": "O terceiro não interessado que paga em seu próprio nome sub-roga-se legalmente com todas as hipotecas e garantias do credor, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "B",
        "text": "Se o credor perder por evicção o bem recebido em dação em pagamento, a obrigação antiga permanece definitivamente extinta, restando apenas ação de garantia contra o devedor."
      },
      {
        "letter": "C",
        "text": "O terceiro não interessado que paga em seu próprio nome tem direito apenas ao reembolso do que pagar, mas não se sub-roga nos direitos/garantias do credor."
      },
      {
        "letter": "D",
        "text": "Na novação objetiva ou subjetiva, as garantias acessórias (como fiança ou hipoteca de terceiro) sobrevivem automaticamente na nova obrigação mesmo sem consentimento do garante."
      }
    ],
    "correctAnswer": "C",
    "justification": "Arts. 304–367 CC: Terceiro interessado que paga = sub-rogação legal (leva garantias); terceiro NÃO interessado em nome próprio = só reembolso (sem garantias — Art. 305); terceiro NÃO interessado em nome do devedor = nem reembolso tem (Art. 304, par. único). Dação em pagamento + evicção = restabelece obrigação primitiva (Art. 359). Novação = extingue garantias salvo pacto e anuência do terceiro.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A sub-rogação legal do Art. 346, III, protege o terceiro INTERESSADO (ex.: fiador, avalista, adquirente de imóvel hipotecado); o terceiro NÃO interessado que paga em nome próprio apenas tem reembolso simples (sem garantias — Art. 305 CC)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 359 do CC determina expressamente que, se o credor for evicto da coisa recebida em pagamento, restabelecer-se-á a obrigação primitiva, ficando sem efeito a quitação dada."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 364 do CC, a novação extingue os acessórios e garantias da dívida, sempre que não houver estipulação em contrário (e se os bens hipotecados/penhorados pertencerem a terceiros, não se mantêm sem sua anuência expressa — Art. 365)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 304 a 388 do Código Civil",
        "textSnippet": "Arts. 304–367 CC: Terceiro interessado que paga = sub-rogação legal (leva garantias); terceiro NÃO interessado em nome próprio = só reembolso (sem garantias — Art. 305); terceiro NÃO interessado em nome do devedor = nem reembolso tem (Art. 304, par. único). Dação em pagamento + evicção = restabelece obrigação primitiva (Art. 359). Novação = extingue garantias salvo pacto e anuência do terceiro."
      }
    ],
    "professorTip": "3º não interessado paga em seu próprio nome = só REEMBOLSO (sem sub-rogação!). Dação em pagamento com EVICÇÃO = volta a dívida original (Art. 359)! Novação = apaga garantias!"
  },
  {
    "id": "mig_civil_013",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Inadimplemento, Mora Ex Re vs. Ex Persona, Cláusula Penal e Arras",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Em compromisso de compra e venda de imóvel com vencimento certo para pagamento, ajustaram-se arras confirmatórias de R$ 50.000,00 e cláusula penal compensatória de 10% sobre o valor do contrato. Havendo inadimplemento absoluto do vendedor (que desistiu injustificadamente), o comprador pode exigir a devolução das arras em dobro cumulada com a cláusula penal compensatória integral?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, é sempre lícita a cumulação integral de arras confirmatórias dobradas com multa compensatória por terem naturezas absolutamente distintas."
      },
      {
        "letter": "B",
        "text": "O devedor em mora não responde pela impossibilidade da prestação resultante de caso fortuito ou força maior ocorrida durante o atraso em hipótese alguma."
      },
      {
        "letter": "C",
        "text": "Não pode cumular integralmente ambos os institutos com idêntica função reparatória sob pena de bis in idem."
      },
      {
        "letter": "D",
        "text": "A cláusula penal moratória impede o credor de exigir simultaneamente o cumprimento da obrigação principal, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      }
    ],
    "correctAnswer": "C",
    "justification": "Arts. 399–420 CC: Mora ex re (termo certo/obrigação negativa/ato ilícito — Art. 397 e 398 CC + Súmula 54 STJ) x Mora ex persona (interpelação). Devedor em mora responde pelo fortuito durante atraso (Art. 399). Cláusula penal: não excede obrigação principal (Art. 412); juiz DEVE reduzir se cumprimento parcial ou excesso (Art. 413). Arras + cláusula penal compensatória = inacumuláveis (STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STJ veda a cumulação de arras (penitenciais ou confirmatórias com função indenizatória) e cláusula penal compensatória pelo mesmo fato de inexecução (REsp 1.617.652)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 399 do CC, o devedor em mora RESPONDE pela impossibilidade da prestação ainda que resultante de caso fortuito ou força maior durante o atraso, salvo se provar isenção de culpa ou que o dano sobreviria mesmo que a obrigação tivesse sido oportunamente desempenhada."
      },
      {
        "letter": "D",
        "explanation": "Quando estipulada para o caso de MORA (cláusula penal moratória — Art. 411 CC), o credor tem o arbítrio de exigir a satisfação da pena cominada JUNTAMENTE com o desempenho da obrigação principal (diferente da compensatória do Art. 410)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 394 a 420 do Código Civil",
        "textSnippet": "Arts. 399–420 CC: Mora ex re (termo certo/obrigação negativa/ato ilícito — Art. 397 e 398 CC + Súmula 54 STJ) x Mora ex persona (interpelação). Devedor em mora responde pelo fortuito durante atraso (Art. 399). Cláusula penal: não excede obrigação principal (Art. 412); juiz DEVE reduzir se cumprimento parcial ou excesso (Art. 413). Arras + cláusula penal compensatória = inacumuláveis (STJ)."
      }
    ],
    "professorTip": "Devedor em mora responde até por fortuito (Art. 399)! Cláusula penal: teto = valor da obrigação principal (Art. 412); juiz reduz se cumprida em parte (Art. 413); NÃO cumula com arras pela mesma inexecução (STJ)!"
  },
  {
    "id": "mig_civil_014",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Teoria Geral dos Contratos - Evicção, Vícios Redibitórios e Revisão Contratual",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Comprador adquiriu automóvel seminovo de particular e, 15 dias depois, descobriu grave defeito oculto no câmbio já existente antes da venda; simultaneamente, outro comprador teve seu imóvel perdido em juízo por sentença favorável ao verdadeiro proprietário anterior apesar de o contrato conter cláusula genérica excluindo a garantia da evicção (sem ciência do risco específico). Analise os dois institutos:",
    "options": [
      {
        "letter": "A",
        "text": "Havendo cláusula expressa excluindo a garantia da evicção no contrato, o comprador que desconhecia o risco perde totalmente até o direito de receber de volta o preço pago, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "O prazo decadencial para reclamar de vício redibitório em bens imóveis no Código Civil é de 30 dias a contar da entrega, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "C",
        "text": "No vício oculto do câmbio, configura vício redibitório, cabendo ações edilícias no prazo decadencial de 30 dias para bem móvel; na evicção, a cláusula que exclui a garantia sem que o evicto soubesse do risco específico ou o tenha assumido não afasta o direito de receber de volta o preço pago."
      },
      {
        "letter": "D",
        "text": "A evicção só garante indenização se a perda da posse decorrer de sentença judicial proferida com trânsito em julgado, jamais por apreensão administrativa policial de veículo roubado, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      }
    ],
    "correctAnswer": "C",
    "justification": "Vícios redibitórios (Arts. 441–446): defeito oculto preexistente -> ação redibitória (desfaz) ou estimatória (abate preço); prazos decadenciais do Art. 445 (30d móvel / 1a imóvel). Evicção (Arts. 447–457): perda do bem por direito anterior de terceiro (sentença ou ato administrativo); cláusula excludente sem assunção/ciência do risco ainda devolve o preço (Art. 449).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 449 do CC, mesmo com cláusula de exclusão da garantia, se a evicção se der, o evicto tem direito de receber o PREÇO que pagou pela coisa evicta, salvo se foi informado do risco ou o assumiu expressamente."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 445 do CC: bem MÓVEL = 30 dias; bem IMÓVEL = 1 ano (a contar da entrega efetiva; ou se já estava na posse, pela metade; se vício só se revela depois, da ciência em até 180 dias para móveis / 1 ano para imóveis)."
      },
      {
        "letter": "D",
        "explanation": "Segundo jurisprudência consolidada do STJ, a apreensão administrativa do bem por autoridade policial/fiscal (ex.: veículo com chassi adulterado/roubado) também configura evicção e gera responsabilidade do alienante."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 441 a 480 do Código Civil",
        "textSnippet": "Vícios redibitórios (Arts. 441–446): defeito oculto preexistente -> ação redibitória (desfaz) ou estimatória (abate preço); prazos decadenciais do Art. 445 (30d móvel / 1a imóvel). Evicção (Arts. 447–457): perda do bem por direito anterior de terceiro (sentença ou ato administrativo); cláusula excludente sem assunção/ciência do risco ainda devolve o preço (Art. 449)."
      }
    ],
    "professorTip": "Vício redibitório no CC: 30 dias (móvel) / 1 ano (imóvel)! Evicção: cláusula que exclui garantia SEM ciência/assunção do risco = ainda devolve o PREÇO (Art. 449)! Apreensão policial de carro roubado = vale como evicção (STJ)!"
  },
  {
    "id": "mig_civil_015",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Compra e Venda - Venda entre Ascendente e Descendente, Ad Corpus vs. Ad Mensuram",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Um pai vendeu diretamente um apartamento ao seu filho mais velho sem o consentimento dos outros dois filhos e de sua esposa (casada sob comunhão parcial). Em outra negociação rural, comprou-se fazenda anunciada como \"aproximadamente 100 hectares\" com preço global estipulado pelo todo, verificando-se depois que possuía 96 hectares. Analise os dois contratos:",
    "options": [
      {
        "letter": "A",
        "text": "A venda de ascendente a descendente sem anuência dos demais herdeiros é nula de pleno direito e imprescritível, sem transmissão automática dos direitos obrigacionais ou reais antes da formalização registral."
      },
      {
        "letter": "B",
        "text": "O cônjuge do alienante precisa consentir na venda para o descendente ainda que o regime de bens seja o da separação obrigatória de bens, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "C",
        "text": "A venda de ascendente a descendente sem o expresso consentimento dos outros descendentes e do cônjuge do alienante é anulável no prazo decadencial de 2 anos a contar da conclusão do ato; quanto à fazenda com área enunciada como meramente referencial e preço global, presume-se venda ad corpus."
      },
      {
        "letter": "D",
        "text": "Na venda ad mensuram com área faltante superior a 5%, o comprador só pode exigir o desfazimento do negócio, não podendo pedir abatimento proporcional ou complemento da área. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 496 CC: venda de ascendente a descendente exige anuência dos demais descendentes e do cônjuge (salvo separação obrigatória), sob pena de ANULABILIDADE em 2 anos (Art. 179 CC e Súmula 494 STF — diferente da doação, que é válida e importa adiantamento de legítima pelo Art. 544!). Art. 500: ad mensuram tem presunção de tolerância até 1/20 (5%).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 496 do CC (superando antiga polêmica da Súmula 152 STF e consolidado na Súmula 494 STF e Art. 179 CC) estabelece expressamente que é ANULÁVEL, no prazo decadencial de 2 anos a contar da conclusão do ato."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 496, parágrafo único, do CC, dispensa-se o consentimento do cônjuge se o regime de bens for o da SEPARAÇÃO OBRIGATÓRIA."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 500, caput, do CC, na venda ad mensuram com diferença superior a 1/20 (5%), o comprador tem direito a exigir o complemento da área e, não sendo possível, reclamar a resolução do contrato OU abatimento proporcional do preço."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 496, 500 e 505 a 528 do Código Civil",
        "textSnippet": "Art. 496 CC: venda de ascendente a descendente exige anuência dos demais descendentes e do cônjuge (salvo separação obrigatória), sob pena de ANULABILIDADE em 2 anos (Art. 179 CC e Súmula 494 STF — diferente da doação, que é válida e importa adiantamento de legítima pelo Art. 544!). Art. 500: ad mensuram tem presunção de tolerância até 1/20 (5%)."
      }
    ],
    "jurisprudence": "Súmula 494 do STF",
    "professorTip": "Venda pai->filho sem anuência dos irmãos/cônjuge = ANULÁVEL em 2 ANOS (salvo cônjuge na separação obrigatória)! Doação pai->filho = VÁLIDA (adiantamento de legítima)! Ad mensuram = tolerância de 5% (1/20)!"
  },
  {
    "id": "mig_civil_016",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Doação - Revogação por Ingratidão, Doação Inoficiosa e Cláusula de Reversão",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Antes de falecer, um pai doou a um terceiro estranho imóvel que correspondia a 70% de todo o seu patrimônio líquido na data da liberalidade, deixando outros dois filhos como herdeiros necessários. Em outra doação feita a sobrinho sem encargo, o donatário atentou contra a vida do doador. Qual a consequência jurídica em cada caso?",
    "options": [
      {
        "letter": "A",
        "text": "A doação inoficiosa torna integralmente nulo todo o contrato de doação, revertendo 100% do bem ao patrimônio do doador, com ineficácia jurídica plena do negócio celebrado perante terceiros de boa-fé e credores."
      },
      {
        "letter": "B",
        "text": "As doações puramente remuneratórias e as oneradas com encargo já cumprido podem ser revogadas livremente por ingratidão do donatário."
      },
      {
        "letter": "C",
        "text": "A primeira doação é nula quanto à parte que exceder a metade disponível que o doador poderia dispor em testamento no momento da liberalidade."
      },
      {
        "letter": "D",
        "text": "O prazo para propor ação revocatória de doação por ingratidão é de 4 anos a contar da celebração da escritura pública, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "C",
    "justification": "Regras de doação (Arts. 538–564 CC): Doação universal (sem reserva de parte/renda suficiente para subsistência) = NULA (Art. 548). Doação inoficiosa (excede disponível no momento do ato) = NULA quanto ao excesso (Art. 549). Doação de ascendente a descendente ou de um cônjuge a outro = adiantamento da legítima (Art. 544). Revogação por ingratidão = prazo de 1 ANO do conhecimento do fato (Art. 559), inadmissível renúncia prévia e vedada nas hipóteses do Art. 564.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 549 declara nula a doação apenas quanto à PARTE que exceder a legítima disponível no momento da liberalidade (reduz-se o excesso inoficioso)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 564 do CC, NÃO se revogam por ingratidão: as doações puramente remuneratórias, as oneradas com encargo já cumprido, as feitas em cumprimento de obrigação natural e as feitas para determinado casamento."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 559 do CC, a revogação por ingratidão pleiteia-se dentro de 1 ANO, contado de que chegue ao conhecimento do doador o fato que a autorizar e de ter sido o donatário o seu autor."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 538 a 564 do Código Civil",
        "textSnippet": "Regras de doação (Arts. 538–564 CC): Doação universal (sem reserva de parte/renda suficiente para subsistência) = NULA (Art. 548). Doação inoficiosa (excede disponível no momento do ato) = NULA quanto ao excesso (Art. 549). Doação de ascendente a descendente ou de um cônjuge a outro = adiantamento da legítima (Art. 544). Revogação por ingratidão = prazo de 1 ANO do conhecimento do fato (Art. 559), inadmissível renúncia prévia e vedada nas hipóteses do Art. 564."
      }
    ],
    "professorTip": "Doação inoficiosa = NULA só no excesso (Art. 549)! Doação de tudo sem reserva para viver = NULA inteira (Art. 548)! Revogação por ingratidão = prazo de 1 ANO da ciência (não cabe nas remuneratórias/encargo cumprido)!"
  },
  {
    "id": "mig_civil_017",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Locação de Imóveis Urbanos (Lei 8.245/91) - Garantias, Benfeitorias e Preferência",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Em contrato de locação residencial urbana com cláusula expressa de renúncia à indenização por benfeitorias, o locador exigiu simultaneamente caução em dinheiro de três meses de aluguel E fiança pessoal prestada por terceiro proprietário de um único bem de família. Além disso, o imóvel foi vendido a terceiro sem que o locador notificasse o locatário, cujo contrato não estava averbado na matrícula. Analise os três pontos:",
    "options": [
      {
        "letter": "A",
        "text": "É nula a cláusula contratual que proíbe a indenização ou retenção por benfeitorias necessárias em contratos de locação urbana, com impedimento à compensação ou repetição dos valores prestados na relação negocial."
      },
      {
        "letter": "B",
        "text": "O bem de família pertencente ao fiador em contrato de locação comercial é absolutamente impenhorável por força do direito fundamental à moradia, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "C",
        "text": "É proibida a exigência de mais de uma modalidade de garantia no mesmo contrato de locação; a cláusula de renúncia à indenização e retenção por benfeitorias é válida na locação; a penhora do único imóvel residencial (bem de família) do fiador de locação residencial ou comercial é constitucional; e sem averbação do contrato na matrícula até 30 dias antes da alienação, o locatário preterido no direito de preferência só tem direito a perdas e danos, não à adjudicação do imóvel."
      },
      {
        "letter": "D",
        "text": "Mesmo sem registro ou averbação do contrato na matrícula imobiliária, o locatário preterido pode sempre anular a venda e adjudicar o imóvel depositando o preço em 6 meses, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "C",
    "justification": "Lei do Inquilinato (Lei 8.245/91): (1) Proibida dupla garantia (Art. 37, par. único — sob pena de nulidade da excedente e contravenção); (2) Válida renúncia a benfeitorias (Súmula 335 STJ); (3) Penhorável o bem de família do fiador em locação residencial e comercial (Súmula 549 STJ e Tema 1127 STF); (4) Preferência: adjudicar o bem só se contrato AVERBADO na matrícula >= 30 dias antes (sem averbação, só perdas e danos).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos termos do Art. 35 da Lei nº 8.245/91 e da Súmula 335 do STJ, nos contratos de locação, É VÁLIDA a cláusula de renúncia à indenização das benfeitorias e ao direito de retenção."
      },
      {
        "letter": "B",
        "explanation": "Na Súmula 549 do STJ e no Tema 1127 (RE 1.307.334), o STF reafirmou que é constitucional a penhora de bem de família pertencente a FIADOR de contrato de locação, seja RESIDENCIAL ou COMERCIAL."
      },
      {
        "letter": "D",
        "explanation": "O Art. 33 exige obrigatoriamente que o contrato de locação esteja AVERBADO pelo menos 30 dias antes da alienação junto à matrícula do imóvel para que o inquilino possa exercer adjudicação real; sem averbação prévia, cabe apenas perdas e danos."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 33 a 42 da Lei nº 8.245/1991 e Súmula 335 STJ",
        "textSnippet": "Lei do Inquilinato (Lei 8.245/91): (1) Proibida dupla garantia (Art. 37, par. único — sob pena de nulidade da excedente e contravenção); (2) Válida renúncia a benfeitorias (Súmula 335 STJ); (3) Penhorável o bem de família do fiador em locação residencial e comercial (Súmula 549 STJ e Tema 1127 STF); (4) Preferência: adjudicar o bem só se contrato AVERBADO na matrícula >= 30 dias antes (sem averbação, só perdas e danos)."
      }
    ],
    "jurisprudence": "Súmulas 335 e 549 STJ; Tema 1127 STF",
    "professorTip": "Locação: Súmula 335 STJ (vale renúncia a benfeitorias)! Súmula 549 STJ / Tema 1127 STF (penhora bem de família do FIADOR em residencial e comercial)! 1 garantia só! Adjudicar imóvel na preterição = só com averbação 30d antes na matrícula!"
  },
  {
    "id": "mig_civil_018",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Responsabilidade Civil - Fato de Terceiro, Fortuito Interno vs. Externo e Danos",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um passageiro de ônibus coletivo sofreu graves ferimentos porque outro motorista particular avançou sinal vermelho e colidiu violentamente contra o ônibus. Em outra hipótese, um correntista foi vítima de fraude bancária praticada por golpistas usando o sistema interno vulnerável de um banco. Como o STJ aplica o fortuito interno/externo e a culpa de terceiro nesses casos?",
    "options": [
      {
        "letter": "A",
        "text": "No transporte oneroso de passageiros, o fato exclusivo de terceiro motorista no trânsito exclui integralmente a responsabilidade da empresa de ônibus perante seus passageiros."
      },
      {
        "letter": "B",
        "text": "Na responsabilidade civil contratual, os juros moratórios fluem a partir da data do evento danoso, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "C",
        "text": "No contrato de transporte de passageiros, o fato exclusivo de terceiro não rompe a responsabilidade objetiva do transportador perante o passageiro."
      },
      {
        "letter": "D",
        "text": "São inacumuláveis as indenizações por dano material, dano moral e dano estético oriundos do mesmo acidente, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      }
    ],
    "correctAnswer": "C",
    "justification": "Súmulas vitais da Responsabilidade Civil: Súmula 187 STF (culpa de 3º no trânsito não exime transportador); Súmula 479 STJ (bancos respondem objetivamente por fortuito interno em fraudes/delitos bancários); Súmula 37 e 387 STJ (cumulam material + moral + estético); Súmula 54 STJ (juros desde evento só na extracontratual); Súmula 362 STJ (correção do dano moral desde o arbitramento).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela Súmula 187 do STF e Art. 735 do CC, a responsabilidade contratual do transportador pelo acidente com o passageiro NÃO é elidida por culpa de terceiro, contra o qual tem ação regressiva."
      },
      {
        "letter": "B",
        "explanation": "Cuidado! Súmula 54 STJ (\"juros moratórios fluem a partir do evento danoso\") aplica-se APENAS à responsabilidade EXTRACONTRATUAL; na responsabilidade CONTRATUAL os juros fluem da CITAÇÃO (Art. 405 CC), e a correção monetária do dano moral flui da data do arbitramento (Súmula 362 STJ)."
      },
      {
        "letter": "D",
        "explanation": "Súmulas 37 e 387 do STJ: são CUMULÁVEIS as indenizações por dano material e dano moral (Súm. 37), bem como as por dano estético e dano moral (Súm. 387) oriundos do mesmo fato."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 927 a 944 CC e Súmulas 37, 387, 479 e 54 STJ",
        "textSnippet": "Súmulas vitais da Responsabilidade Civil: Súmula 187 STF (culpa de 3º no trânsito não exime transportador); Súmula 479 STJ (bancos respondem objetivamente por fortuito interno em fraudes/delitos bancários); Súmula 37 e 387 STJ (cumulam material + moral + estético); Súmula 54 STJ (juros desde evento só na extracontratual); Súmula 362 STJ (correção do dano moral desde o arbitramento)."
      }
    ],
    "jurisprudence": "Súmulas 37, 54, 362, 387 e 479 STJ; Súmula 187 STF",
    "professorTip": "Súmula 479 STJ: fraude bancária = fortuito INTERNO (banco paga)! Súmula 187 STF: transportador paga e depois cobra do 3º! Súmula 37 + 387 STJ: Material + Moral + Estético CUMULAM! Juros extracontratual = evento (Súm. 54); correção dano moral = arbitramento (Súm. 362)!"
  },
  {
    "id": "mig_civil_019",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direitos Reais - Posse de Boa-fé vs. Má-fé, Usucapião e Direitos do Possuidor",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Um possuidor de MÁ-FÉ ocupou terreno urbano alheio, construiu benfeitorias necessárias de contenção de encosta, benfeitorias úteis de ampliação e realizou melhorias voluptuárias, colhendo ainda frutos naturais da terra durante o período. Ao ser vencido em ação reivindicatória pelo proprietário, quais direitos cabem ao possuidor de MÁ-FÉ?",
    "options": [
      {
        "letter": "A",
        "text": "O possuidor de má-fé perde integralmente o direito de ser ressarcido até mesmo pelas benfeitorias necessárias que evitaram o desabamento do imóvel."
      },
      {
        "letter": "B",
        "text": "O possuidor de boa-fé tem direito de retenção pelas benfeitorias necessárias, úteis e voluptuárias enquanto não indenizado, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "O possuidor de má-fé tem direito apenas ao ressarcimento das benfeitorias necessárias, e responde por todos os frutos colhidos e percebidos."
      },
      {
        "letter": "D",
        "text": "Na usucapião familiar, exige-se posse exclusiva direta de imóvel urbano de até 250m² por 5 anos após abandono do lar pelo ex-cônjuge."
      }
    ],
    "correctAnswer": "C",
    "justification": "Posse de Boa-fé x Má-fé (Arts. 1.214–1.220 CC): Boa-fé fica com frutos percebidos, indeniza necessárias + úteis (com retenção) e levanta voluptuárias (sem retenção); responde por deterioração só se deu causa. Má-fé responde por frutos colhidos/percebidos e perda (salvo se ocorreria também com reivindicante), indeniza SÓ as necessárias (SEM direito de retenção!). Súmula 237 STF: usucapião pode ser arguida como matéria de defesa.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Para evitar enriquecimento sem causa do proprietário, o Art. 1.220 garante ao possuidor de MÁ-FÉ o ressarcimento das benfeitorias NECESSÁRIAS (apenas não lhe dá direito de retenção nem paga úteis/voluptuárias)."
      },
      {
        "letter": "B",
        "explanation": "O possuidor de BOA-FÉ tem direito à indenização das necessárias e úteis (com direito de RETENÇÃO por ambas) e quanto às voluptuárias, se não forem pagas, apenas tem o direito de levantá-las sem detrimento da coisa (Art. 1.219 CC)."
      },
      {
        "letter": "D",
        "explanation": "A usucapião familiar (Art. 1.240-A) exige posse direta, exclusiva e sem oposição por apenas DOIS ANOS ininterruptos de imóvel urbano de até 250m² dividido com ex-cônjuge/ex-companheiro que abandonou o lar, para moradia sua ou da família."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.196 a 1.244 do Código Civil e Súmula 237 STF",
        "textSnippet": "Posse de Boa-fé x Má-fé (Arts. 1.214–1.220 CC): Boa-fé fica com frutos percebidos, indeniza necessárias + úteis (com retenção) e levanta voluptuárias (sem retenção); responde por deterioração só se deu causa. Má-fé responde por frutos colhidos/percebidos e perda (salvo se ocorreria também com reivindicante), indeniza SÓ as necessárias (SEM direito de retenção!). Súmula 237 STF: usucapião pode ser arguida como matéria de defesa."
      }
    ],
    "jurisprudence": "Súmula 237 do STF",
    "professorTip": "Possuidor de MÁ-FÉ: indeniza SÓ benfeitorias NECESSÁRIAS e SEM retenção (Art. 1.220)! Possuidor de BOA-FÉ: necessárias + úteis COM retenção + levanta voluptuárias! Usucapião familiar = 2 ANOS (até 250m²)!"
  },
  {
    "id": "mig_civil_020",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Civil",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito de Superfície, Direito Real de Laje e Multipropriedade Imobiliária",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "O proprietário de um imóvel térreo cedeu a outro familiar o direito real de construir e manter unidade imobiliária autônoma sobre a laje superior de sua construção, com matrícula imobiliária própria no Cartório de Registro de Imóveis. Em outra operação, um apartamento turístico foi vendido em frações de tempo anuais (multipropriedade). Quais regras civis regem esses dois direitos reais?",
    "options": [
      {
        "letter": "A",
        "text": "O titular do direito real de laje passa a ser automaticamente coproprietário em condomínio edilício de metade da fração ideal do terreno do solo, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "B",
        "text": "A laje configura direito real de laje; a multipropriedade é condomínio especial em que cada multiproprietário é titular de fração de tempo indivisível, com matrícula própria para cada fração de tempo."
      },
      {
        "letter": "C",
        "text": "Na multipropriedade imobiliária, cada fração de tempo pode ser estipulada por prazo mínimo de apenas 2 dias corridos por ano, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "D",
        "text": "O direito de superfície abrange automaticamente obras no subsolo em todas as hipóteses, mesmo sem relação com o objeto da concessão, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      }
    ],
    "correctAnswer": "B",
    "justification": "Novos Direitos Reais do CC (Art. 1.225): Direito Real de Laje (Art. 1.510-A a 1.510-E — matrícula autônoma, sem fração ideal do terreno, preferência recíproca de 30 dias na alienação); Multipropriedade (Arts. 1.358-B a 1.358-U — fração mínima de 7 dias/ano indivisível); Superfície (Art. 1.369 — prazo determinado, subsolo só se inerente ao objeto).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 1.510-A, § 4º, do CC, a instituição do direito real de laje NÃO implica a atribuição de fração ideal de terreno ao titular da laje ou a participação proporcional em áreas já edificadas."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.358-E, § 1º, do CC, cada fração de tempo na multipropriedade é indivisível e o período correspondente a cada fração de tempo será de, no mínimo, 7 (sete) dias, seguidos ou intercalados."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.369, parágrafo único, do CC, o direito de superfície NÃO autoriza obra no subsolo, salvo se for inerente ao objeto da concessão (diferente do Direito de Laje, que permite laje tanto sobre quanto SOB a superfície!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.358-B a 1.358-U, 1.369 e 1.510-A do Código Civil",
        "textSnippet": "Novos Direitos Reais do CC (Art. 1.225): Direito Real de Laje (Art. 1.510-A a 1.510-E — matrícula autônoma, sem fração ideal do terreno, preferência recíproca de 30 dias na alienação); Multipropriedade (Arts. 1.358-B a 1.358-U — fração mínima de 7 dias/ano indivisível); Superfície (Art. 1.369 — prazo determinado, subsolo só se inerente ao objeto)."
      }
    ],
    "professorTip": "Direito de Laje: matrícula própria, SEM fração ideal do terreno, preferência de 30 dias! Multipropriedade: mínimo 7 DIAS/ano! Superfície: subsolo só se inerente ao objeto!"
  },
  {
    "id": "mig_civil_021",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Condomínio Edilício - Quóruns de Assembleia, Obras e Alteração de Convenção",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Em condomínio edilício, o síndico deseja realizar: (1) obra necessária e urgente que importa em despesas excessivas; (2) obra útil para criação de bicicletário melhorando a serventia comum; (3) obra voluptuária de jardim ornamental; e (4) alteração da destinação do edifício (de comercial para residencial) após a Lei nº 14.405/2022. Quais os quóruns exigidos?",
    "options": [
      {
        "letter": "A",
        "text": "A mudança da destinação do edifício ou da unidade imobiliária exige ainda unanimidade absoluta (100%) de todos os condôminos pelo Código Civil, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "Obra necessária urgente pode ser realizada independentemente de autorização; obra útil exige voto da maioria dos condôminos; obra voluptuária exige voto de 2/3 dos condôminos; e após a Lei nº 14.405/2022, a mudança de destinação do edifício ou da unidade imobiliária exige voto de 2/3 dos condôminos."
      },
      {
        "letter": "C",
        "text": "As obras voluptuárias em condomínio edilício exigem aprovação de apenas maioria simples dos presentes na assembleia, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "D",
        "text": "O condômino que não cumpre reiteradamente seus deveres perante o condomínio só pode sofrer multa de até duas vezes o valor da taxa condominial, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Quóruns do Condomínio Edilício no CC: Alteração da Convenção e Mudança de Destinação (Art. 1.351 pós-Lei 14.405/22) = 2/3; Obra Voluptuária = 2/3; Obra Útil = Maioria dos condôminos; Multa de até 5x por descumprimento reiterado de deveres = 3/4 dos condôminos restantes; Multa até 10x por conduta antissocial = 3/4; Destituição de síndico = maioria absoluta dos presentes em assembleia convocada (Art. 1.349).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei nº 14.405/2022 alterou o Art. 1.351 do CC exatamente para exigir 2/3 (dois terços) dos votos dos condôminos (mesmo quórum da alteração da convenção), extinguindo a antiga exigência de unanimidade para mudança de destinação!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.341, I, do CC, obras VOLUPTUÁRIAS exigem voto de 2/3 dos condôminos (e ÚTEIS exigem maioria dos condôminos)."
      },
      {
        "letter": "D",
        "explanation": "Por reiterado comportamento antissocial que gere incompatibilidade de convivência, a assembleia por 3/4 (três quartos) dos condôminos pode impor multa de até 10 VEZES o valor atribuído à contribuição mensal (Art. 1.337, parágrafo único — até 5x no descumprimento reiterado comum do caput)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.331 a 1.356 do Código Civil (Lei 14.405/2022)",
        "textSnippet": "Quóruns do Condomínio Edilício no CC: Alteração da Convenção e Mudança de Destinação (Art. 1.351 pós-Lei 14.405/22) = 2/3; Obra Voluptuária = 2/3; Obra Útil = Maioria dos condôminos; Multa de até 5x por descumprimento reiterado de deveres = 3/4 dos condôminos restantes; Multa até 10x por conduta antissocial = 3/4; Destituição de síndico = maioria absoluta dos presentes em assembleia convocada (Art. 1.349)."
      }
    ],
    "professorTip": "Condomínio Edilício: Mudança de destinação (Lei 14.405/22) caiu de unanimidade para 2/3! Obras: Voluptuária = 2/3; Útil = maioria dos condôminos; Necessária urgente = faz logo! Condômino antissocial = multa até 10x por 3/4!"
  },
  {
    "id": "mig_civil_022",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito de Família - Regimes de Bens, Outorga Uxória e Súmula 332 STJ",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Casado sob o regime da comunhão parcial de bens, um empresário prestou FIANÇA em contrato comercial sem a assinatura nem autorização de sua esposa. Paralelamente, um homem de 72 anos de idade casou-se em 2024 e o STF julgou o Tema 1236 sobre o regime da separação obrigatória aos maiores de 70 anos. Analise ambas as questões:",
    "options": [
      {
        "letter": "A",
        "text": "A fiança prestada pelo cônjuge sem outorga uxória é válida ao menos quanto à sua própria meação de 50% nos bens comuns, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor."
      },
      {
        "letter": "B",
        "text": "A fiança prestada sem vênia conjugal é ineficaz totalmente; e quanto ao Art. 1.641, II, do CC, o STF no Tema 1236 decidiu que a separação obrigatória aos 70+ anos é facultativa/afastável mediante manifestação expressa das partes em escritura pública."
      },
      {
        "letter": "C",
        "text": "Na comunhão parcial de bens, exigem outorga conjugal a alienação de imóveis particulares, a fiança e o aval — salvo no regime da separação absoluta. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "D",
        "text": "Segundo o Tema 1236 do STF, os maiores de 70 anos permanecem absolutamente proibidos de optar pelo regime da comunhão parcial de bens, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      }
    ],
    "correctAnswer": "B",
    "justification": "Outorga conjugal (Art. 1.647 CC): indispensável salvo separação absoluta. Sem outorga na fiança = ineficácia TOTAL da fiança (Súmula 332 STJ — mas cuidado: no aval, o STJ tem tese específica diferenciando título de crédito circulável!). E no Tema 1236, o STF tornou o regime da separação aos 70+ anos meramente supletivo/afastável por escritura pública.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela Súmula 332 do STJ, a fiança prestada sem autorização de um dos cônjuges implica a INEFICÁCIA TOTAL da garantia (não compromete nem a meação do fiador!)."
      },
      {
        "letter": "C",
        "explanation": "Exigem outorga conjugal (Art. 1.647 CC, salvo separação absoluta ou participação final nos aquestos com pacto de livre disposição de imóveis particulares — Art. 1.656): alienar/gravar imóveis, pleitear sobre imóveis, prestar FIANÇA ou AVAL, e fazer doação não remuneratória de bens comuns."
      },
      {
        "letter": "D",
        "explanation": "No Tema 1236 (ARE 1.309.642 — fev/2024), o STF deu interpretação conforme ao Art. 1.641, II, do CC para permitir que pessoas com 70+ anos escolham outro regime de bens por escritura pública!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.639 a 1.688 CC e Súmula 332 STJ",
        "textSnippet": "Outorga conjugal (Art. 1.647 CC): indispensável salvo separação absoluta. Sem outorga na fiança = ineficácia TOTAL da fiança (Súmula 332 STJ — mas cuidado: no aval, o STJ tem tese específica diferenciando título de crédito circulável!). E no Tema 1236, o STF tornou o regime da separação aos 70+ anos meramente supletivo/afastável por escritura pública."
      }
    ],
    "jurisprudence": "Súmula 332 STJ e STF Tema 1236",
    "professorTip": "Súmula 332 STJ: Fiança sem assinatura do cônjuge = INEFICÁCIA TOTAL (salva até a meação do fiador)! Tema 1236 STF: maior de 70 anos PODE escolher outro regime por escritura pública!"
  },
  {
    "id": "mig_civil_023",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Alimentos - Prisão Civil, Irrepetibilidade e Obrigação Avoenga (Súmulas STJ)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Um pai deixou de pagar as últimas 10 prestações alimentícias fixadas judicialmente em favor do filho menor. A mãe ajuizou execução pelo rito da prisão civil cobrando todas as 10 parcelas em atraso e também pediu redirecionamento simultâneo contra os avós paternos porque o pai estava pagando com atraso. Como as súmulas do STJ disciplinam esses pedidos?",
    "options": [
      {
        "letter": "A",
        "text": "A prisão civil pelo inadimplemento de pensão alimentícia pode abranger todas as parcelas vencidas nos últimos dois anos anteriores à execução, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      },
      {
        "letter": "B",
        "text": "O débito alimentar que autoriza a prisão civil compreende apenas as 3 prestações anteriores ao ajuizamento da execução e as que se vencerem no curso do processo."
      },
      {
        "letter": "C",
        "text": "A exoneração de pensão alimentícia ocorre automaticamente no dia em que o filho completa 18 anos de idade, dispensando decisão judicial."
      },
      {
        "letter": "D",
        "text": "A redução ou exoneração de pensão alimentícia fixada em sentença anterior retroage à data da citação mesmo para exigir restituição de parcelas já pagas, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "B",
    "justification": "Súmulas essenciais de Alimentos no STJ: Súmula 309 (prisão civil = até 3 anteriores ao ajuizamento + vincendas); Súmula 358 (maioridade de 18 anos NÃO extingue automaticamente — precisa decisão judicial com contraditório); Súmula 596 (obrigação avoenga é subsidiária e complementar); Súmula 621 (revisional retroage à citação, mas alimentos pagos são irrepetíveis e incompensáveis).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 309 do STJ limita o rito da prisão civil às 3 últimas parcelas anteriores ao ajuizamento + as vincendas no curso da ação."
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 358 do STJ, o cancelamento de pensão alimentícia de filho que atingiu a maioridade está sujeito à DECISÃO JUDICIAL, mediante contraditório, ainda que nos próprios autos."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 621 do STJ, os efeitos da sentença que reduz, majora ou exonera o alimentante do pagamento retroagem à data da citação, VEDADAS a compensação e a repetibilidade (irrepetibilidade dos alimentos já pagos!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.694 a 1.710 CC e Súmulas 309, 596 e 621 STJ",
        "textSnippet": "Súmulas essenciais de Alimentos no STJ: Súmula 309 (prisão civil = até 3 anteriores ao ajuizamento + vincendas); Súmula 358 (maioridade de 18 anos NÃO extingue automaticamente — precisa decisão judicial com contraditório); Súmula 596 (obrigação avoenga é subsidiária e complementar); Súmula 621 (revisional retroage à citação, mas alimentos pagos são irrepetíveis e incompensáveis)."
      }
    ],
    "jurisprudence": "Súmulas 309, 358, 596 e 621 do STJ",
    "professorTip": "Súmulas de Alimentos (STJ): 309 (prisão = até 3 anteriores + vincendas); 358 (18 anos precisa de juiz com contraditório para cancelar); 596 (avós = subsidiária/complementar); 621 (retroage à citação, mas NÃO devolve alimentos já pagos)!"
  },
  {
    "id": "mig_civil_024",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito das Sucessões - Ordem da Vocação Hereditária e Concorrência do Cônjuge/Companheiro",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Roberto faleceu sem testamento deixando esposa (com quem era casado pelo regime da comunhão PARCIAL de bens), dois filhos comuns e patrimônio composto exclusivamente por um apartamento adquirido ONEROSAMENTE na constância do casamento (bem comum) e uma casa recebida por herança antes do casamento (bem particular). Como se divide a herança?",
    "options": [
      {
        "letter": "A",
        "text": "Na comunhão parcial de bens, o cônjuge sobrevivente herda 1/3 tanto sobre os bens comuns quanto sobre os bens particulares do falecido."
      },
      {
        "letter": "B",
        "text": "A viúva tem direito à meação (50%) do apartamento comum adquirido onerosamente no casamento, não concorrendo como herdeira sobre esse bem comum."
      },
      {
        "letter": "C",
        "text": "O companheiro sobrevivente em união estável herda menos que o cônjuge por aplicação, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "D",
        "text": "Concorrendo o cônjuge com os filhos comuns do casal sobre os bens particulares, tem ele reserva mínima garantida de 1/4 da herança ainda que haja apenas dois filhos."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 1.829, I, CC (concorrência com descendentes): Cônjuge/Companheiro (equiparados pelo Tema 809 STF) NÃO concorre na comunhão universal, nem na separação obrigatória, nem na comunhão parcial sem bens particulares; CONCORRE na separação convencional (STJ!) e na comunhão parcial apenas sobre os BENS PARTICULARES (STJ REsp 1.368.123). Na concorrência com ascendentes (Art. 1.837), herda sempre independente do regime (1/3 se 2 ascendentes de 1º grau; 1/2 se 1 só ou grau mais remoto).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Conforme tese consolidada pelo STJ (REsp 1.368.123), na comunhão parcial o cônjuge tem meação dos bens comuns e CONCORRE com os descendentes APENAS sobre os bens PARTICULARES do falecido (se não houver bens particulares, não herda nada em concorrência com filhos!)."
      },
      {
        "letter": "C",
        "explanation": "No Tema 809 (RE 878.694), o STF declarou INCONSTITUCIONAL a distinção sucessória do Art. 1.790 CC, equiparando integralmente o companheiro(a) de união estável ao cônjuge na sucessão do Art. 1.829 do CC!"
      },
      {
        "letter": "D",
        "explanation": "A reserva mínima de 1/4 para o cônjuge (Art. 1.832 CC) só se aplica quando ele concorrer com filhos COMUNS (sendo 4 ou mais filhos: 1/4 só garante mais que 1/5 quando houver 4+ descendentes comuns — com 2 filhos comuns, 1/3 já é maior que 1/4!). Quando concorre só com descendentes exclusivos do falecido (filiação híbrida), parte majoritária afasta a reserva de 1/4."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.790 e 1.829 do Código Civil e Tema 809 STF",
        "textSnippet": "Art. 1.829, I, CC (concorrência com descendentes): Cônjuge/Companheiro (equiparados pelo Tema 809 STF) NÃO concorre na comunhão universal, nem na separação obrigatória, nem na comunhão parcial sem bens particulares; CONCORRE na separação convencional (STJ!) e na comunhão parcial apenas sobre os BENS PARTICULARES (STJ REsp 1.368.123). Na concorrência com ascendentes (Art. 1.837), herda sempre independente do regime (1/3 se 2 ascendentes de 1º grau; 1/2 se 1 só ou grau mais remoto)."
      }
    ],
    "jurisprudence": "STF Tema 809 e STJ REsp 1.368.123",
    "professorTip": "Comunhão Parcial + Filhos: Meia nos bens comuns (não herda neles!) e HERDA junto com filhos nos BENS PARTICULARES (STJ)! União estável = mesmo direito do cônjuge (Tema 809 STF)! Separação Convencional = cônjuge concorre como herdeiro!"
  },
  {
    "id": "mig_civil_025",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Testamentos - Formas Ordinárias, Testamento Cerrado e Rompimento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Um testador solteiro e sem filhos elaborou testamento público deixando 100% de seus bens a um amigo. Três anos depois, nasceu-lhe um filho biológico que não existia nem era conhecido à época da elaboração do testamento. Por fim, outro testador deixou testamento cerrado cujo lacre foi rompido pelo próprio testador. Quais os efeitos em ambos os testamentos?",
    "options": [
      {
        "letter": "A",
        "text": "O nascimento superveniente de filho apenas reduz em 50% as disposições do testamento anterior, mantendo válida a outra metade, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "B",
        "text": "O nascimento de descendente sucessível que não tinha ou não conhecia quando testou rompe integralmente o testamento em todas as suas disposições; e o testamento cerrado aberto ou dilacerado pelo testador, ou com seu consentimento, presume-se revogado."
      },
      {
        "letter": "C",
        "text": "A capacidade ativa para fazer testamento válido no Brasil inicia-se apenas aos 18 anos completos com plena capacidade civil, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "D",
        "text": "O testamento conjuntivo (simultâneo ou recíproco feito por marido e mulher no mesmo instrumento) é válido no Brasil para economia cartorária, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 1.857–1.975 CC: Maiores de 16 anos podem testar pessoalmente (ato personalíssimo, proibido conjuntivo — Art. 1.863). Havendo herdeiros necessários (descendentes, ascendentes, cônjuge/companheiro), só pode dispor de 50% (legítima = 50%). Rompe-se todo o testamento se sobrevier descendente desconhecido/inexistente ao tempo do ato (Art. 1.973) ou ignorando outros herdeiros necessários existentes (Art. 1.974).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 1.973 do CC determina expressamente que sobrevindo descendente sucessível ao testador que não o tinha quando testou, ROMPE-SE o testamento em TODAS as suas disposições (se sobreviver ao testador)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.860, parágrafo único, do CC, podem testar os maiores de DEZESSEIS anos (16+ anos testam sozinhos sem assistência!)."
      },
      {
        "letter": "D",
        "explanation": "O Art. 1.863 do CC PROÍBE expressamente o testamento conjuntivo, seja simultâneo, recíproco ou correspectivo (\"pacto sucessório/corvina\")."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.857 a 1.990 do Código Civil",
        "textSnippet": "Arts. 1.857–1.975 CC: Maiores de 16 anos podem testar pessoalmente (ato personalíssimo, proibido conjuntivo — Art. 1.863). Havendo herdeiros necessários (descendentes, ascendentes, cônjuge/companheiro), só pode dispor de 50% (legítima = 50%). Rompe-se todo o testamento se sobrevier descendente desconhecido/inexistente ao tempo do ato (Art. 1.973) ou ignorando outros herdeiros necessários existentes (Art. 1.974)."
      }
    ],
    "professorTip": "Testamento: 16+ anos já testa sozinho! Proibido testamento conjuntivo! Filho inesperado depois = ROMPE TODO o testamento (Art. 1.973)! Testamento cerrado rasgado pelo testador = revogado!"
  },
  {
    "id": "mig_civil_026",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Indignidade vs. Deserdação e Aceitação/Renúncia da Herança",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um herdeiro legítimo (filho) cometeu homicídio doloso consumado contra seu próprio pai (autor da herança). Com a Lei nº 14.661/2023 (Art. 1.815-A CC), qual o procedimento para exclusão desse herdeiro por indignidade? Além disso, se outro filho simplesmente renunciar à herança antes de aceitá-la, seus próprios filhos (netos) herdam por representação?",
    "options": [
      {
        "letter": "A",
        "text": "Mesmo após condenação criminal definitiva por homicídio doloso contra o pai, a exclusão por indignidade sempre depende obrigatoriamente de ação civil autônoma proposta em até 4 anos, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "Nos termos, em casos de homicídio doloso ou tentativa contra o autor da herança, cônjuge, companheiro, ascendente ou descendente, a exclusão por indignidade ocorrerá automaticamente na sentença penal condenatória transitada em julgado; quanto à renúncia à herança, ninguém pode suceder representando herdeiro renunciante."
      },
      {
        "letter": "C",
        "text": "Se o filho renunciar à herança do pai, seus filhos (netos do falecido) assumem o lugar dele por representação automaticamente, dividindo com os tios. Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes."
      },
      {
        "letter": "D",
        "text": "É lícito aceitar a herança apenas quanto aos imóveis e renunciar às dívidas ou aos bens móveis do espólio, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor."
      }
    ],
    "correctAnswer": "B",
    "justification": "Indignidade (Arts. 1.814–1.818) atinge qualquer herdeiro ou legatário (prazo de 4 anos da abertura da sucessão; salvo homicídio doloso/tentativa contra o autor/familiares do I, que agora exclui automaticamente pela sentença penal transitada em julgado — Art. 1.815-A). Efeitos são pessoais: descendentes do indigno herdam por representação. Já na renúncia (Art. 1.806 — sempre por escritura pública ou termo judicial), NÃO há representação!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei nº 14.661/2023 inseriu o Art. 1.815-A determinando que o trânsito em julgado da sentença penal condenatória por homicídio doloso/tentativa (Art. 1.814, I) acarreta a imediata exclusão por indignidade (nos demais casos do Art. 1.814, mantém-se a ação declaratória cível em 4 anos da abertura da sucessão — Art. 1.815, § 1º)."
      },
      {
        "letter": "C",
        "explanation": "Na RENÚNCIA, NÃO há direito de representação (Art. 1.811 CC — a parte do renunciante acresce aos outros filhos do mesmo grau; só se TODOS os filhos renunciarem é que os netos herdam por cabeça/direito próprio!). Na INDIGNIDADE (Art. 1.816), o indigno é tratado como se morto fosse, e seus descendentes herdam POR REPRESENTAÇÃO!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.808 do CC, não se pode aceitar ou renunciar a herança em parte, sob condição ou a termo."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.804 a 1.818 e 1.961 a 1.965 do Código Civil",
        "textSnippet": "Indignidade (Arts. 1.814–1.818) atinge qualquer herdeiro ou legatário (prazo de 4 anos da abertura da sucessão; salvo homicídio doloso/tentativa contra o autor/familiares do I, que agora exclui automaticamente pela sentença penal transitada em julgado — Art. 1.815-A). Efeitos são pessoais: descendentes do indigno herdam por representação. Já na renúncia (Art. 1.806 — sempre por escritura pública ou termo judicial), NÃO há representação!"
      }
    ],
    "professorTip": "Indigno = como se morto fosse (filhos do indigno HERDAM por representação! Lei 14.661/23: homicídio doloso = exclusão automática na sentença penal!). Renunciante = NINGUÉM representa (Art. 1.811 — parte vai pros outros irmãos)!"
  },
  {
    "id": "mig_civil_027",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Civil",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Títulos de Crédito no Código Civil - Endosso, Aval e Título Atípico",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Em nota promissória emitida após o Código Civil de 2002 (regida subsidiariamente pela LUG e regras gerais), o portador realizou endosso parcial de metade do valor do título e colocou condição resolutiva ao endosso; em outro título, um terceiro deu aval sem consentimento do cônjuge no regime da comunhão parcial. Qual a validade desses atos no Código Civil?",
    "options": [
      {
        "letter": "A",
        "text": "Tanto o endosso parcial quanto o endosso condicional tornam integralmente nulo todo o título de crédito original, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "B",
        "text": "Pelo Código Civil, é nulo o endosso parcial, e qualquer condição lançada no endosso considera-se não escrita."
      },
      {
        "letter": "C",
        "text": "No regime geral do Código Civil, o endossante responde automaticamente pelo cumprimento da prestação pelo devedor principal, salvo cláusula em contrário."
      },
      {
        "letter": "D",
        "text": "O aval parcial (por parte da soma do título) é sempre proibido pelo Código Civil em qualquer circunstância, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "B",
    "justification": "Regras cambiais no CC (Arts. 887–926 — aplicação subsidiária quando não há lei especial): endosso condicional = condição não escrita; endosso parcial = nulo (Art. 912); endossante no CC não garante pagamento salvo cláusula expressa (Art. 914); aval parcial vedado no CC (Art. 897, par. único), mas admitido na LUG. E no STJ (REsp 1.526.560), falta de outorga uxória não anula aval em título cambial típico (cheque/NP/duplicata).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No Art. 912 CC: condição no endosso = reputa-se não escrita (vale o endosso puro); endosso parcial = nulo apenas o endosso parcial (o título continua válido)."
      },
      {
        "letter": "C",
        "explanation": "Cuidado! Diferente da LUG/Cheque/Duplicata (onde o endossante é coobrigado solidário), no regime geral atípico do Art. 914 do CC o endossante NÃO responde pelo cumprimento da prestação constante do título, salvo cláusula expressa em contrário!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 897, parágrafo único, do CC VEDA o aval parcial no regime geral do CC (embora a Lei Uniforme de Genebra — Art. 30 — admita aval parcial em letra de câmbio e nota promissória, prevalecendo a lei especial cambial!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 887 a 926 do Código Civil",
        "textSnippet": "Regras cambiais no CC (Arts. 887–926 — aplicação subsidiária quando não há lei especial): endosso condicional = condição não escrita; endosso parcial = nulo (Art. 912); endossante no CC não garante pagamento salvo cláusula expressa (Art. 914); aval parcial vedado no CC (Art. 897, par. único), mas admitido na LUG. E no STJ (REsp 1.526.560), falta de outorga uxória não anula aval em título cambial típico (cheque/NP/duplicata)."
      }
    ],
    "jurisprudence": "STJ REsp 1.526.560",
    "professorTip": "Endosso: condição = NÃO ESCRITA; parcial = NULO! Aval em título típico (cheque/NP/duplicata): falta de assinatura do cônjuge NÃO anula (STJ REsp 1.526.560 — diferente de fiança na Súmula 332)!"
  },
  {
    "id": "mig_civil_028",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Responsabilidade Civil dos Pais, Tutores, Empregadores e Hotéis",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um entregador empregado de farmácia causou acidente de trânsito culposo durante entrega comercial, ferindo um ciclista; paralelamente, um hóspede teve seu notebook furtado de dentro do quarto trancado de um hotel por falha da recepção, e um vaso caiu da janela de um apartamento atingindo pedestre sem que se identificasse de qual andar exato caiu (em prédio onde se sabe de qual fachada caiu). Como responde cada sujeito?",
    "options": [
      {
        "letter": "A",
        "text": "O empregador só responde civilmente pelos danos causados por seus empregados se a vítima provar culpa in eligendo ou culpa in vigilando do patrão, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "B",
        "text": "A farmácia empregadora responde objetivamente pelo ato culposo do seu empregado no exercício do trabalho; o hotel responde objetivamente pelos furtos/danos aos hóspedes."
      },
      {
        "letter": "C",
        "text": "Na responsabilidade dos pais pelos atos ilícitos dos filhos menores sob sua autoridade e companhia, não há direito de regresso dos pais contra os filhos incapazes."
      },
      {
        "letter": "D",
        "text": "Se o incapaz causar prejuízo e seus pais não tiverem obrigação de fazê-lo ou não dispuserem de meios suficientes, o patrimônio próprio do incapaz nunca responde pela indenização."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 928 e 932–938 CC: Pais, tutores, curadores, empregadores e hotéis têm responsabilidade OBJETIVA indireta (Art. 933). Quem paga tem regresso contra o causador, EXCETO pais contra descendente incapaz (Art. 934). Incapaz responde subsidiária e equitativamente (Art. 928). Coisa caída de prédio (Art. 938): responsabilidade objetiva de quem habitar (ou condomínio se impossível identificar).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 933 do CC (combinado com a antiga Súmula 341 STF superada pela objetivação) dispõe expressamente que os pais, tutores, curadores, empregadores e hotéis respondem pelos atos dos indicados no Art. 932 AINDA QUE NÃO HAJA CULPA DE SUA PARTE (responsabilidade objetiva do responsável, bastando culpa do preposto/empregado!)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 934 do CC, aquele que ressarcir o dano causado por outrem pode reaver o que houver pago daquele por quem pagou, SALVO se o causador do dano for DESCENDENTE seu, absoluta ou relativamente incapaz!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 928 do CC, o incapaz responde pelos prejuízos que causar, se as pessoas por ele responsáveis não tiverem obrigação de fazê-lo ou não dispuserem de meios suficientes (indenização equitativa, sem privá-lo do necessário)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 932 a 938 do Código Civil",
        "textSnippet": "Arts. 928 e 932–938 CC: Pais, tutores, curadores, empregadores e hotéis têm responsabilidade OBJETIVA indireta (Art. 933). Quem paga tem regresso contra o causador, EXCETO pais contra descendente incapaz (Art. 934). Incapaz responde subsidiária e equitativamente (Art. 928). Coisa caída de prédio (Art. 938): responsabilidade objetiva de quem habitar (ou condomínio se impossível identificar)."
      }
    ],
    "professorTip": "Art. 933 CC: patrão e pais respondem OBJETIVAMENTE (não precisa provar culpa do patrão/pais)! Art. 934: quem paga tem regresso, EXCETO contra filho incapaz! Coisa caída de prédio (Art. 938) = responsabilidade objetiva!"
  },
  {
    "id": "mig_civil_029",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Civil",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Mandato, Gestão de Negócios e Enriquecimento Sem Causa",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Antes da viagem de um amigo sem deixar procurador, um vizinho realizou reparos urgentes no telhado da casa daquele para evitar desabamento durante tempestade (gestão de negócios), e em outra situação um mandante outorgou procuração com cláusula \"em causa própria\" (in rem suam) para transferência de veículo, vindo o mandante a falecer antes da transferência administrativa. Quais as regras do Código Civil?",
    "options": [
      {
        "letter": "A",
        "text": "Qualquer mandato comum ou com cláusula em causa própria extingue-se automaticamente com a morte do mandante, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "Na gestão de negócios úteis ou necessários, o dono do negócio deve reembolsar o gestor das despesas necessárias ou úteis que houver feito e indenizá-lo dos prejuízos sofridos em razão da gestão."
      },
      {
        "letter": "C",
        "text": "A ação de enriquecimento sem causa (in rem verso) pode ser proposta livremente mesmo quando houver outra ação contratual ou legal específica para o lesado cobrar seu prejuízo, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "D",
        "text": "O mandatário que substabelece poderes sem autorização expressa no mandato não responde pelos atos do substabelecido se este agir com boa-fé, sem transmissão automática dos direitos obrigacionais ou reais antes da formalização registral."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 682–685, 869 e 886 CC: Mandato comum extingue por revogação, renúncia, morte/interdição, mudança de estado ou término do prazo; exceção = mandato \"em causa própria\" (Art. 685), irrevogável e sobrevivente à morte, dispensando prestação de contas. Enriquecimento sem causa (Art. 884–886) tem caráter estritamente subsidiário (prazo prescricional de 3 anos).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Embora o mandato comum se extinga com a morte ou interdição (Art. 682, II), o mandato conferido com cláusula \"em causa própria\" (Art. 685) é IRREVOGÁVEL e NÃO se extingue com a morte de qualquer das partes!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 886 do CC (princípio da subsidiariedade), NÃO caberá a restituição por enriquecimento se a lei conferir ao lesado outros meios para se ressarcir do prejuízo sofrido."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 667, § 1º, do CC, se o mandatário tinha proibição ou mesmo autorização silente? Cuidado: se autorizada a substituição, responde se agir com culpa na escolha/instruções; se PROIBIDA, responde até por caso fortuito; e se omissa a procuração (sem proibir nem autorizar), responde pelos prejuízos causados pelo substabelecido se este proceder culposamente (Art. 667, § 2º)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 653 a 692 e 884 a 886 do Código Civil",
        "textSnippet": "Arts. 682–685, 869 e 886 CC: Mandato comum extingue por revogação, renúncia, morte/interdição, mudança de estado ou término do prazo; exceção = mandato \"em causa própria\" (Art. 685), irrevogável e sobrevivente à morte, dispensando prestação de contas. Enriquecimento sem causa (Art. 884–886) tem caráter estritamente subsidiário (prazo prescricional de 3 anos)."
      }
    ],
    "professorTip": "Mandato em causa própria (Art. 685 CC): NÃO é revogável e NÃO morre com a morte do mandante! Enriquecimento sem causa (Art. 886) = subsidiário (3 anos)!"
  },
  {
    "id": "mig_civil_030",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Contrato de Seguro - Agravamento do Risco, Embriaguez e Prescrição",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um segurado emprestou seu carro ao filho maior habilitado que, dirigindo embriagado, causou acidente fatal a terceiro. Em outro seguro de vida, o segurado suicidou-se 14 meses após a contratação da apólice. Além disso, a vítima terceira de acidente de trânsito ajuizou ação diretamente apenas contra a seguradora do causador do dano (sem incluir o segurado no polo passivo). Avalie os três pontos segundo o STJ:",
    "options": [
      {
        "letter": "A",
        "text": "No seguro de vida, o suicídio ocorrido nos primeiros dois anos (24 meses) de vigência inicial do contrato não é coberto."
      },
      {
        "letter": "B",
        "text": "Para negar cobertura do seguro de vida em caso de suicídio nos dois primeiros anos do contrato, a seguradora precisa provar a premeditação do segurado."
      },
      {
        "letter": "C",
        "text": "A embriaguez do segurado ao volante afasta automaticamente a indenização do seguro de vida devida aos beneficiários, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "D",
        "text": "A vítima de acidente de trânsito pode processar diretamente apenas a seguradora facultativa (rcf-V) do motorista culpado, dispensando o segurado na lide."
      }
    ],
    "correctAnswer": "A",
    "justification": "Súmulas essenciais de Seguro no STJ: Súmula 610 (suicídio nos 2 primeiros anos do seguro de vida = sem cobertura, critério objetivo); Súmula 620 (embriaguez não afasta seguro de vida); Súmula 529 (terceiro não pode acionar SÓ a seguradora facultativa); Súmula 537 (seguradora denunciada à lide responde solidariamente nos limites da apólice); Súmula 616 (indenização securitária independe de comunicação prévia se não agravou/prejudicou).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Súmula 610 do STJ superou a antiga Súmula 105 STF e fixou critério temporal objetivo: o suicídio NÃO é coberto nos dois primeiros anos de vigência do contrato de seguro de vida, independentemente de prova de premeditação (mas o Art. 798, parágrafo único, veda cláusula que exclua cobertura após os 2 anos)."
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 620 do STJ, a embriaguez do segurado NÃO exime a seguradora do pagamento da indenização prevista em contrato de SEGURO DE VIDA (já no seguro de danos/automóvel, a embriaguez do próprio segurado pode configurar agravamento do risco do Art. 768 se houver nexo causal com o sinistro)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 529 do STJ, no seguro de responsabilidade civil facultativo, NÃO cabe o ajuizamento de ação pelo terceiro prejudicado direta e exclusivamente em face da seguradora do apontado causador do dano (precisa incluir o segurado, havendo condenação solidária — Súmula 537 STJ)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 757 a 802 do Código Civil e Súmulas 402, 465 e 616 STJ",
        "textSnippet": "Súmulas essenciais de Seguro no STJ: Súmula 610 (suicídio nos 2 primeiros anos do seguro de vida = sem cobertura, critério objetivo); Súmula 620 (embriaguez não afasta seguro de vida); Súmula 529 (terceiro não pode acionar SÓ a seguradora facultativa); Súmula 537 (seguradora denunciada à lide responde solidariamente nos limites da apólice); Súmula 616 (indenização securitária independe de comunicação prévia se não agravou/prejudicou)."
      }
    ],
    "jurisprudence": "Súmulas 529, 537, 610, 616 e 620 do STJ",
    "professorTip": "Súmulas Seguro STJ: 610 (suicídio < 2 anos no seguro de vida = NÃO paga, sem precisar provar premeditação); 620 (embriaguez NÃO tira seguro de vida); 529 (vítima NÃO pode processar SÓ a seguradora facultativa)!"
  },
  {
    "id": "mig_civil_031",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito das Coisas - Hipoteca, Penhor, Alienação Fiduciária e Súmula 308 STJ",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Uma construtora deu em hipoteca a um banco o terreno e os futuros apartamentos do empreendimento para financiar a obra. Posteriormente, vendeu uma unidade pronta ao adquirente consumidor final, que quitou o preço integralmente. Inadimplente a construtora perante o banco, o banco pretende executar a hipoteca contra o apartamento do comprador. O pedido bancário prospera?",
    "options": [
      {
        "letter": "A",
        "text": "Não prospera, pois a hipoteca firmada entre a construtora e o agente financeiro, anterior ou posterior à celebração da promessa de compra e venda, não tem eficácia perante os adquirentes do imóvel."
      },
      {
        "letter": "B",
        "text": "Prospera, porque a hipoteca regularmente registrada na matrícula possui sequela erga omnes absoluta sobre o imóvel vendido. A solução aplica-se de modo uniforme tanto às obrigações principais quanto às acessórias."
      },
      {
        "letter": "C",
        "text": "É perfeitamente válida a cláusula de pacto comissório permitindo que o credor hipotecário ou fiduciário fique automaticamente com o imóvel sem leilão ou avaliação caso haja inadimplemento."
      },
      {
        "letter": "D",
        "text": "Na alienação fiduciária de bem imóvel, se o leilão público extrajudicial atingir valor inferior ao saldo devedor no 2º leilão, o banco pode cobrar a diferença residual do devedor nos financiamentos habitacionais."
      }
    ],
    "correctAnswer": "A",
    "justification": "Nas garantias reais: Art. 1.428 CC proíbe pacto comissório (só permite acordo/dação após vencimento). Súmula 308 STJ protege comprador de imóvel contra hipoteca da construtora com o banco financiador. E na alienação fiduciária em garantia (DL 911/69 para móveis; Lei 9.514/97 para imóveis), há desdobramento da posse (direta com devedor, indireta com credor fiduciário) e execução extrajudicial constitucionalizada pelo STF (Tema 982).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Embora a hipoteca tenha direito de sequela como regra geral, a Súmula 308 do STJ cria proteção expressa ao adquirente da unidade imobiliária frente ao financiamento da construtora."
      },
      {
        "letter": "C",
        "explanation": "O Art. 1.428 do CC VEDA expressamente o pacto comissório (cláusula que autoriza o credor pignoratício, anticrético ou hipotecário a ficar com o objeto da garantia se a dívida não for paga no vencimento), admitindo apenas a dação em pagamento APÓS o vencimento (parágrafo único)."
      },
      {
        "letter": "D",
        "explanation": "Na Lei nº 9.514/97 (Art. 27, § 5º, com atualizações do Marco Legal das Garantias - Lei 14.711/2023), se no 2º leilão de alienação fiduciária residencial o maior lance for inferior ao valor da dívida (ou não houver licitantes), considera-se EXTINTA a dívida e exonerado o credor da obrigação de restituir (exceto nas operações não habitacionais/regras específicas da Lei 14.711/23)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.419 a 1.510 CC, Lei 9.514/97 e Súmula 308 STJ",
        "textSnippet": "Nas garantias reais: Art. 1.428 CC proíbe pacto comissório (só permite acordo/dação após vencimento). Súmula 308 STJ protege comprador de imóvel contra hipoteca da construtora com o banco financiador. E na alienação fiduciária em garantia (DL 911/69 para móveis; Lei 9.514/97 para imóveis), há desdobramento da posse (direta com devedor, indireta com credor fiduciário) e execução extrajudicial constitucionalizada pelo STF (Tema 982)."
      }
    ],
    "jurisprudence": "Súmula 308 do STJ e STF Tema 982",
    "professorTip": "Súmula 308 STJ: hipoteca da construtora com o banco NÃO atinge o comprador do apartamento! Art. 1.428 CC: PROIBIDO pacto comissório (credor ficar com o bem direto sem venda)!"
  },
  {
    "id": "mig_civil_032",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito de Família - União Estável, Namoro Qualificado e Regime de Bens",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um casal namora publicamente há 4 anos, dormindo frequentemente juntos nos finais de semana no apartamento de um deles, viajando e dividindo despesas eventuais, porém sem intenção atual de constituir família (\"contrato de namoro\" declarado e projetos de vida independentes). Em contrapartida, outro casal passou a conviver publicamente com ânimo atual de constituir família sem escritura pública de união estável, e um deles era separado de fato do cônjuge anterior. Analise ambos:",
    "options": [
      {
        "letter": "A",
        "text": "O primeiro caso configura namoro qualificado; o segundo caso configura união estável válida, aplicando-se na ausência de contrato escrito o regime da comunhão parcial de bens, sem retroatividade caso haja escritura ulterior (STJ)."
      },
      {
        "letter": "B",
        "text": "Qualquer relacionamento público, contínuo e duradouro por mais de dois anos converte-se automaticamente em união estável mesmo sem intenção de constituir família, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "Pessoa legalmente casada mas separada de fato há cinco anos está impedida de constituir união estável válida até a decretação formal do divórcio, com produção imediata de efeitos patrimoniais e pessoais independentemente de averbação registral."
      },
      {
        "letter": "D",
        "text": "O contrato escrito de união estável escolhendo separação total de bens pode produzir efeitos retroativos para excluir bens adquiridos onerosamente antes do documento durante a convivência, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor."
      }
    ],
    "correctAnswer": "A",
    "justification": "União Estável (Arts. 1.723–1.727 CC): exige convivência pública + contínua + duradoura + objetivo ATUAL de constituir família (dispensa coabitação física — Súmula 382 STF — e prazo mínimo fixo). Pessoa separada de fato pode constituir união estável. Na falta de contrato escrito, aplica-se comunhão parcial (e eventual contrato posterior tem efeito ex nunc — STJ).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 1.723 do CC exige expressamente que a convivência pública, contínua e duradoura seja \"estabelecida com o objetivo de constituição de família\" (sem esse elemento anímico atual, trata-se de namoro qualificado)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 1.723, § 1º, do CC autoriza expressamente que pessoa casada constituía união estável se estiver separada de fato ou judicialmente."
      },
      {
        "letter": "D",
        "explanation": "Segundo jurisprudência consolidada do STJ (REsp 1.383.624 / Tema), a eleição de regime de bens na escritura pública de união estável tem eficácia EX NUNC (não retroage para atingir patrimônio adquirido antes do pacto escrito sob a comunhão parcial tácita)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.723 a 1.727 do Código Civil e Jurisprudência STJ",
        "textSnippet": "União Estável (Arts. 1.723–1.727 CC): exige convivência pública + contínua + duradoura + objetivo ATUAL de constituir família (dispensa coabitação física — Súmula 382 STF — e prazo mínimo fixo). Pessoa separada de fato pode constituir união estável. Na falta de contrato escrito, aplica-se comunhão parcial (e eventual contrato posterior tem efeito ex nunc — STJ)."
      }
    ],
    "jurisprudence": "Súmula 382 do STF",
    "professorTip": "União estável: SEM prazo mínimo e SEM exigir mesma casa (Súmula 382 STF), MAS exige objetivo ATUAL de família (diferente de namoro qualificado)! Separado de fato PODE ter união estável! Escritura de bens = só vale para FRENTE (ex nunc)!"
  },
  {
    "id": "mig_civil_033",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Guarda Compartilhada, Adoção e Alienação Parental",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Em ação de divórcio litigioso em que os genitores não chegam a acordo sobre a guarda do filho menor de 8 anos, mas ambos estão aptos ao exercício do poder familiar (sem risco de violência doméstica ou familiar), qual regime de guarda o juiz deve aplicar segundo o Código Civil após a Lei nº 14.713/2023?",
    "options": [
      {
        "letter": "A",
        "text": "A guarda compartilhada é a regra obrigatória mesmo sem acordo entre os genitores, salvo se um deles declarar ao magistrado que não deseja a guarda da criança ou se houver elementos que evidenciem a probabilidade de risco de violência doméstica ou familiar."
      },
      {
        "letter": "B",
        "text": "Sem consenso amigável entre os pais, o juiz deve fixar obrigatoriamente a guarda unilateral materna, com produção imediata de efeitos patrimoniais e pessoais independentemente de averbação registral. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "C",
        "text": "Na guarda compartilhada, fica absolutamente proibido fixar pensão alimentícia entre os genitores e a residência física da criança deve alternar semanalmente entre as duas casas, sem transmissão automática dos direitos obrigacionais ou reais antes da formalização registral."
      },
      {
        "letter": "D",
        "text": "Constatada prática reiterada de alienação parental, o juiz deve decretar diretamente a perda imediata e definitiva do poder familiar do alienador na primeira decisão liminar, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor."
      }
    ],
    "correctAnswer": "A",
    "justification": "Pelo Art. 1.584, § 2º, do CC (redação da Lei nº 14.713/2023), quando não houver acordo entre a mãe e o pai quanto à guarda do filho, encontrando-se ambos os genitores aptos a exercer o poder familiar, será aplicada a guarda compartilhada, salvo se um dos genitores declarar ao magistrado que não deseja a guarda ou quando houver elementos que evidenciem a probabilidade de risco de violência doméstica ou familiar.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Desde a Lei nº 13.058/2014 (e reforçada pela Lei nº 14.713/2023), a guarda compartilhada aplica-se mesmo sem acordo entre os pais, salvo desinteresse de um ou risco de violência doméstica/familiar."
      },
      {
        "letter": "C",
        "explanation": "Guarda compartilhada significa divisão equilibrada de decisões e convívio, mantendo o filho uma residência base que melhor atenda seus interesses (Art. 1.583, § 3º — diferente da guarda alternada) e podendo haver pensão alimentícia normalmente conforme o binômio necessidade-possibilidade."
      },
      {
        "letter": "D",
        "explanation": "O Art. 6º da Lei nº 12.318/2010 prevê medidas graduais (advertência, ampliação de convivência, multa, acompanhamento psicológico, alteração para compartilhada/unilateral e suspensão da autoridade parental), não prevendo a destituição definitiva imediata como medida sumária inicial."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.583 a 1.590 CC e Leis 12.318/10 e 14.713/23",
        "textSnippet": "Pelo Art. 1.584, § 2º, do CC (redação da Lei nº 14.713/2023), quando não houver acordo entre a mãe e o pai quanto à guarda do filho, encontrando-se ambos os genitores aptos a exercer o poder familiar, será aplicada a guarda compartilhada, salvo se um dos genitores declarar ao magistrado que não deseja a guarda ou quando houver elementos que evidenciem a probabilidade de risco de violência doméstica ou familiar."
      }
    ],
    "professorTip": "Guarda Compartilhada (Art. 1.584, § 2º): REGRA mesmo sem acordo! Exceções: um genitor não quer a guarda OU risco de violência doméstica/familiar (Lei 14.713/2023)! E guarda compartilhada NÃO elimina pensão alimentícia!"
  },
  {
    "id": "mig_civil_034",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Contratos Civis - Fiança (Benefício de Ordem e Exoneração) e Corretagem",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Um fiador garantiu contrato de locação residencial por prazo indeterminado sem renunciar expressamente ao benefício de ordem. Após o término do prazo inicial determinado (prorrogação legal por prazo indeterminado), o fiador pretende desligar-se da garantia. Além disso, em contrato de corretagem imobiliária sem exclusividade, o proprietário concluiu a venda diretamente após encerrado o prazo de contrato sem participação útil do corretor. Analise ambos:",
    "options": [
      {
        "letter": "A",
        "text": "O fiador de contrato prorrogado por prazo indeterminado pode exonerar-se da fiança mediante notificação ao credor, ficando obrigado por todos os efeitos da fiança durante 120 dias após a notificação; na corretagem sem exclusividade, a comissão só é devida se o negócio se concluir como resultado útil do trabalho do corretor."
      },
      {
        "letter": "B",
        "text": "O fiador que notifica sua exoneração na fiança por prazo indeterminado desobriga-se no exato dia do recebimento da notificação pelo locador, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "C",
        "text": "Se a fiança for prestada em contrato de locação de prazo determinado, a prorrogação legal por prazo indeterminado exonera automaticamente o fiador mesmo havendo cláusula expressa garantindo até a entrega das chaves, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "D",
        "text": "Na corretagem com cláusula de exclusividade escrita, se o dono vender o imóvel diretamente sozinho dentro do prazo sem auxílio do corretor, não deve nenhuma comissão. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      }
    ],
    "correctAnswer": "A",
    "justification": "Fiança (Arts. 818–839 CC): forma escrita, interpretação restritiva (não admite extensiva — Súmula 214 STJ), benefício de ordem se não renunciado nem devedor solidário (Art. 827–828), exoneração em prazo indeterminado vale após 120 dias da notificação (Art. 835). Corretagem (Arts. 722–729): obrigação de resultado (resultado útil — Art. 725); se com exclusividade escrita, paga mesmo se dono vende direto sem inércia do corretor (Art. 726).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pelo Art. 835 do CC (e Art. 40, X, da Lei 8.245/91), o fiador continua obrigado por 120 DIAS após a notificação de exoneração ao credor."
      },
      {
        "letter": "C",
        "explanation": "Pela Lei 8.245/91 (Art. 39) e jurisprudência do STJ (superando a antiga Súmula 214 para esse caso específico quando há cláusula expressa), salvo disposição contratual em contrário, as garantias da locação estendem-se até a efetiva devolução do imóvel — podendo o fiador notificar sua exoneração em 120 dias após o prazo indeterminado!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 726 do CC, iniciado e concluído o negócio diretamente entre as partes, nenhuma remuneração será devida ao corretor; MAS se, por escrito, for ajustada a corretagem com EXCLUSIVIDADE, terá o corretor direito à remuneração integral ainda que realizado o negócio sem sua mediação (salvo comprovada inércia/ociosidade do corretor)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 722 a 729 e 818 a 839 do Código Civil",
        "textSnippet": "Fiança (Arts. 818–839 CC): forma escrita, interpretação restritiva (não admite extensiva — Súmula 214 STJ), benefício de ordem se não renunciado nem devedor solidário (Art. 827–828), exoneração em prazo indeterminado vale após 120 dias da notificação (Art. 835). Corretagem (Arts. 722–729): obrigação de resultado (resultado útil — Art. 725); se com exclusividade escrita, paga mesmo se dono vende direto sem inércia do corretor (Art. 726)."
      }
    ],
    "jurisprudence": "Súmula 214 do STJ",
    "professorTip": "Fiança por prazo indeterminado: notifica e responde por mais 120 DIAS (Art. 835)! Corretagem: regra = só paga se resultado útil; com EXCLUSIVIDADE escrita = paga até se dono vender sozinho (salvo ociosidade)!"
  },
  {
    "id": "mig_civil_035",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Civil",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Responsabilidade Civil Médica, Profissionais Liberais e Perda de uma Chance",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Um advogado deixou transcorrer in albis o prazo fatal para interposição de recurso de apelação em ação indenizatória na qual seu cliente tinha altíssima probabilidade de êxito segundo jurisprudência pacífica, frustrando definitivamente a oportunidade de reforma da sentença. Em outro caso, um cirurgião plástico realizou cirurgia estética meramente embelezadora com promessa de resultado estético determinado que restou insatisfatória. Analise:",
    "options": [
      {
        "letter": "A",
        "text": "O advogado responde civilmente pela teoria da perda de uma chance; quanto ao cirurgião plástico em cirurgia estética puramente embelezadora, o STJ considera tratar-se de obrigação de resultado, com presunção de culpa se o resultado prometido não for alcançado."
      },
      {
        "letter": "B",
        "text": "A perda de uma chance nunca gera dever de indenizar no Brasil por configurar mero dano hipotético eventual, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "C",
        "text": "Todo médico, em qualquer especialidade cirúrgica ou clínica, assume obrigação de resultado com responsabilidade objetiva pelo Código Civil. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "D",
        "text": "No cálculo da indenização pela perda de uma chance contra o advogado negligente, o juiz deve condenar sempre em 100% do valor integral da causa perdida, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      }
    ],
    "correctAnswer": "A",
    "justification": "Responsabilidade de profissionais liberais (Art. 951 CC e Art. 14, § 4º, CDC): regra subjetiva (culpa) e obrigação de meio (exceção: cirurgia plástica meramente estética = obrigação de resultado com culpa presumida — STJ). Teoria da Perda de uma Chance: dano autônomo indenizável quando a chance perdida é séria e real, avaliada em percentual proporcional ao dano final.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A jurisprudência consolidada do STJ admite amplamente a indenização pela perda de uma chance quando esta for SÉRIA e REAL (e não meramente hipotética/abstrata)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 951 do CC e Art. 14, § 4º, do CDC, a responsabilidade pessoal dos profissionais liberais (inclusive médicos em geral, obrigação de meio) apura-se mediante verificação de CULPA (responsabilidade subjetiva); somente a cirurgia plástica puramente estética embelezadora é enquadrada pelo STJ como obrigação de resultado (com culpa presumida)."
      },
      {
        "letter": "D",
        "explanation": "A indenização na perda de uma chance deve ser menor que o valor do benefício final esperado, arbitrada proporcionalmente à probabilidade real de êxito frustrada."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 948 a 951 do Código Civil e Art. 14, § 4º, CDC",
        "textSnippet": "Responsabilidade de profissionais liberais (Art. 951 CC e Art. 14, § 4º, CDC): regra subjetiva (culpa) e obrigação de meio (exceção: cirurgia plástica meramente estética = obrigação de resultado com culpa presumida — STJ). Teoria da Perda de uma Chance: dano autônomo indenizável quando a chance perdida é séria e real, avaliada em percentual proporcional ao dano final."
      }
    ],
    "professorTip": "Profissional liberal = responsabilidade SUBJETIVA (culpa — Art. 951 CC e Art. 14, § 4º, CDC)! Cirurgia plástica puramente estética = obrigação de RESULTADO (STJ)! Perda de uma chance = chance SÉRIA e REAL gera indenização proporcional!"
  },
  {
    "id": "mig_civil_036",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "LINDB - Vigência, Vacatio Legis e Repristinação",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Lei federal ordinária publicada no Diário Oficial sem mencionar data de início de vigência passou a vigorar e revogou expressamente a Lei A; dois anos depois, foi editada a Lei C, revogando expressamente a Lei B sem nada dispor sobre a Lei A. Qual a vacatio legis padrão da primeira lei e a Lei A voltou a vigorar?",
    "options": [
      {
        "letter": "A",
        "text": "Na omissão do texto legal, a lei começa a vigorar no Brasil em 45 dias após oficialmente publicada."
      },
      {
        "letter": "B",
        "text": "A lei entra em vigor na data de sua publicação e a Lei A volta a viger automaticamente com a revogação da Lei B, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "A vacatio legis no Brasil é de 30 dias úteis e a repristinação é presumida sempre que houver lacuna legislativa, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      },
      {
        "letter": "D",
        "text": "A lei posterior só revoga a anterior quando declarar expressamente os artigos revogados, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      }
    ],
    "correctAnswer": "A",
    "justification": "LINDB Arts. 1º e 2º: vacatio legis supletiva = 45 dias no Brasil / 3 meses no exterior. Repristinação = NÃO é automática (só se a lei nova expressamente restaurar a antiga).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Sem cláusula de vigência imediata, aplica-se a vacatio legis de 45 dias no Brasil (3 meses no exterior); e salvo disposição em contrário, a lei revogada não se restaura por ter a lei revogadora perdido a vigência."
      },
      {
        "letter": "C",
        "explanation": "Os prazos do Art. 1º da LINDB são de 45 dias no país e 3 meses no exterior (contados conforme LC 95/98: inclui data da publicação e último dia, entrando em vigor no dia subsequente à consumação integral)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 2º, § 1º, ocorre revogação expressa ou tácita (quando incompatível com a anterior ou regule inteiramente a matéria)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1º e 2º da LINDB (Decreto-Lei nº 4.657/1942)",
        "textSnippet": "LINDB Arts. 1º e 2º: vacatio legis supletiva = 45 dias no Brasil / 3 meses no exterior. Repristinação = NÃO é automática (só se a lei nova expressamente restaurar a antiga)."
      }
    ],
    "professorTip": "LINDB: Vacatio padrão = 45 dias (BR) e 3 meses (Exterior)! Repristinação = SÓ se houver previsão EXPRESSA!"
  },
  {
    "id": "mig_civil_037",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Pessoa Natural - Capacidade Civil, Emancipação e Comoriência",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Jovem de 17 anos colou grau em curso de ensino superior e, na mesma semana, seu pai outorgou-lhe escritura pública de emancipação voluntária enquanto a mãe discordava sem justificativa; em outro fato trágico, pai e filho faleceram no mesmo acidente de trânsito sem possibilidade de apurar quem morreu primeiro. Como o Código Civil resolve ambas as situações?",
    "options": [
      {
        "letter": "A",
        "text": "A colação de grau em curso de ensino superior emancipa automaticamente o menor de 16 a 18 anos independentemente de concordância dos pais; na emancipação voluntária pelos pais, exige-se concessão de ambos, não bastando a vontade unilateral de um deles havendo divergência sem suprimento judicial; e no acidente aplica-se a comoriência."
      },
      {
        "letter": "B",
        "text": "A colação de grau emancipa apenas aos 18 anos e na comoriência presume-se que o mais velho morreu primeiro, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "C",
        "text": "A emancipação voluntária outorgada por escritura pública pelos pais dispensa homologação judicial, mas torna os pais isentos de responsabilidade civil por ato ilícito anterior do filho, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "D",
        "text": "Os pródigos e ébrios habituais são considerados absolutamente incapazes no Código Civil atual, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      }
    ],
    "correctAnswer": "A",
    "justification": "CC Arts. 3º–8º: Absolutamente incapaz = apenas < 16 anos. Relativamente incapaz = 16–18, ébrios/viciados, impossibilitados de exprimir vontade, pródigos. Emancipação = pais juntos (escritura pública sem juiz), casamento, emprego público efetivo, colação de grau superior, economia própria (>=16). Comoriência = mortes simultâneas, sem herança entre comorientes.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 5º, parágrafo único, lista causas de emancipação entre 16 e 18 anos (entre elas colação de grau em ensino superior), e o Art. 8º estabelece a presunção de morte simultânea (comoriência)."
      },
      {
        "letter": "C",
        "explanation": "Mesmo na emancipação voluntária pelos pais (Art. 5º, p.u., I), segundo a jurisprudência consolidada do STJ, os pais continuam solidariamente responsáveis pelos atos ilícitos praticados pelo filho menor emancipado voluntariamente."
      },
      {
        "letter": "D",
        "explanation": "Desde o Estatuto da Pessoa com Deficiência (Lei 13.146/15), somente os menores de 16 anos são absolutamente incapazes (Art. 3º CC); pródigos, ébrios habituais e viciados em tóxicos são relativamente incapazes (Art. 4º)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 3º a 8º do Código Civil",
        "textSnippet": "CC Arts. 3º–8º: Absolutamente incapaz = apenas < 16 anos. Relativamente incapaz = 16–18, ébrios/viciados, impossibilitados de exprimir vontade, pródigos. Emancipação = pais juntos (escritura pública sem juiz), casamento, emprego público efetivo, colação de grau superior, economia própria (>=16). Comoriência = mortes simultâneas, sem herança entre comorientes."
      }
    ],
    "professorTip": "Absolutamente incapaz = SÓ < 16 anos! Emancipação voluntária pelos pais NÃO os livra da responsabilidade civil (STJ)! Comoriência = mortos ao mesmo tempo, NÃO herdam entre si!"
  },
  {
    "id": "mig_civil_038",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direitos da Personalidade e Desconsideração da Personalidade Jurídica",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa devedora transferiu todo seu estoque e imóveis para outra sociedade dos mesmos sócios sem contraprestação para frustrar execuções cíveis. O credor pode requerer a desconsideração da personalidade jurídica pelo simples inadimplemento ou exige requisitos específicos do Art. 50 do Código Civil?",
    "options": [
      {
        "letter": "A",
        "text": "O mero encerramento irregular ou simples inadimplemento (insolvência) não autoriza a desconsideração no Direito Civil: exige-se abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, estendendo os efeitos apenas aos sócios/administradores beneficiados direta ou indiretamente pelo abuso."
      },
      {
        "letter": "B",
        "text": "No Código Civil adota-se a Teoria Menor, bastando o inadimplemento ou a falência da sociedade para atingir o patrimônio dos sócios, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "C",
        "text": "A desconsideração da personalidade jurídica extingue definitivamente a pessoa jurídica e cancela seu registro na Junta Comercial, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "D",
        "text": "A mera existência de grupo econômico autoriza automaticamente a desconsideração da personalidade jurídica entre as empresas, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 50 CC (Teoria Maior): em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, pode o juiz decidir (a requerimento da parte ou MP, jamais de ofício) que os efeitos de certas obrigações sejam estendidos aos bens particulares de administradores ou sócios beneficiados pelo abuso.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Teoria Menor aplica-se apenas no Direito do Consumidor (Art. 28, § 5º, CDC) e Ambiental (Lei 9.605/98); no Código Civil (Art. 50) exige-se Teoria Maior (abuso = desvio de finalidade ou confusão patrimonial)."
      },
      {
        "letter": "C",
        "explanation": "A desconsideração não extingue a PJ; apenas afasta episódica e pontualmente o véu societário para alcançar bens no processo específico."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 50, § 4º, do CC, a mera existência de grupo econômico sem a presença dos requisitos do caput (desvio de finalidade ou confusão patrimonial) não autoriza a desconsideração."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 11 a 21 e Art. 50 do Código Civil (Lei da Liberdade Econômica)",
        "textSnippet": "Art. 50 CC (Teoria Maior): em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, pode o juiz decidir (a requerimento da parte ou MP, jamais de ofício) que os efeitos de certas obrigações sejam estendidos aos bens particulares de administradores ou sócios beneficiados pelo abuso."
      }
    ],
    "professorTip": "Desconsideração no CC = Teoria MAIOR (Art. 50): exige Desvio de Finalidade ou Confusão Patrimonial (inadimplemento/grupo econômico sozinhos NÃO bastam; CDC/Ambiental = Teoria Menor)!"
  },
  {
    "id": "mig_civil_039",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Bens Jurídicos - Bem de Família Legal vs. Convencional e Súmula 364/449/549 STJ",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Devedor possui único imóvel residencial onde mora, mas que foi dado em garantia de contrato de locação comercial de um amigo (fiança locatícia); além disso, possui uma vaga de garagem com matrícula própria separada no registro de imóveis. Ambos são impenhoráveis pelo bem de família legal?",
    "options": [
      {
        "letter": "A",
        "text": "Não, a vaga de garagem que possui matrícula própria no registro de imóveis não constitui bem de família para efeito de penhora; e o único imóvel residencial do fiador em contrato de locação é penhorável."
      },
      {
        "letter": "B",
        "text": "Ambos são impenhoráveis, pois a proteção do bem de família alcança o fiador de locação comercial. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "C",
        "text": "O imóvel residencial do devedor solteiro que mora sozinho não goza da proteção do bem de família legal, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "D",
        "text": "O bem de família legal previsto na Lei nº 8.009/1990 depende de registro prévio em cartório para existir, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "A",
    "justification": "Súmulas chave em Bem de Família (Lei 8.009/90): Súmula 364 STJ (protege solteiro/viúvo/separado); Súmula 449 STJ (vaga de garagem com matrícula própria É penhorável); Súmula 486 STJ (único imóvel locado a terceiros continua protegido se a renda reverter à subsistência); Súmula 549 STJ + STF Tema 1127 (bem de família de FIADOR de locação residencial ou comercial É penhorável).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O STF no RE 1.307.334 (Tema 1127) decidiu ser constitucional a penhora de bem de família pertencente a fiador de contrato de locação, seja residencial, seja COMERCIAL."
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 364 do STJ, o conceito de impenhorabilidade de bem de família abrange também o imóvel pertencente a pessoas solteiras, separadas e viúvas."
      },
      {
        "letter": "D",
        "explanation": "O registro em cartório é exigido apenas para o bem de família VOLUNTÁRIO/convencional do Código Civil (limite até 1/3 do patrimônio líquido); o legal da Lei 8.009/90 independe de escritura ou registro."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Lei nº 8.009/1990 e Arts. 1.711 a 1.722 do Código Civil",
        "textSnippet": "Súmulas chave em Bem de Família (Lei 8.009/90): Súmula 364 STJ (protege solteiro/viúvo/separado); Súmula 449 STJ (vaga de garagem com matrícula própria É penhorável); Súmula 486 STJ (único imóvel locado a terceiros continua protegido se a renda reverter à subsistência); Súmula 549 STJ + STF Tema 1127 (bem de família de FIADOR de locação residencial ou comercial É penhorável)."
      }
    ],
    "jurisprudence": "STF Tema 1127 e Súmulas 364, 449 e 549 STJ",
    "professorTip": "Bem de Família: Solteiro = PROTEGIDO (Súmula 364)! Único imóvel alugado cuja renda sustenta família = PROTEGIDO (Súmula 486)! Vaga com matrícula própria = PENHORÁVEL (Súmula 449)! Fiador locação (residencial ou comercial) = PENHORÁVEL (Tema 1127 STF)!"
  },
  {
    "id": "mig_civil_040",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Negócio Jurídico - Erro, Dolo, Coação, Estado de Perigo, Lesão e Fraude Contra Credores",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresário em grave crise de saúde compromete-se a pagar honorários dez vezes superiores ao mercado a hospital particular que sabe da gravidade e exige o valor; em outro caso, comprador adquire apartamento crendo erroneamente que tem 120 m² quando possui 100 m² em razão de informação enganosa intencional do vendedor; e um terceiro doa seu único imóvel a irmão deixando de ter patrimônio para pagar dívidas já vencidas. Quais vícios ocorreram?",
    "options": [
      {
        "letter": "A",
        "text": "Lesão no primeiro caso, erro substancial no segundo e simulação nula no terceiro, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "B",
        "text": "Os negócios celebrados em fraude contra credores são absolutamente nulos e imprescritíveis, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "C",
        "text": "Na lesão e no estado de perigo, nunca é possível revisar o negócio para mantê-lo válido, com impedimento à compensação ou repetição dos valores prestados na relação negocial."
      },
      {
        "letter": "D",
        "text": "Respectivamente: estado de perigo; dolo; e fraude contra credores. Todos são anuláveis no prazo decadencial de 4 anos."
      }
    ],
    "correctAnswer": "D",
    "justification": "Vícios do Negócio (Anuláveis em 4 anos - Art. 178): Erro (falsa percepção espontânea), Dolo (indução maliciosa), Coação (ameaça grave), Estado de Perigo (salvar de grave dano conhecido + onerosidade), Lesão (premente necessidade/inexperiência + desproporção), Fraude contra Credores (insolvência — Ação Pauliana). Simulação (Art. 167) = NULA (não convalesce nem decai).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na lesão (Art. 157) há premente necessidade ou inexperiência (sem necessidade de risco de dano físico conhecido); no estado de perigo (Art. 156) há necessidade de salvar-se ou a pessoa da família de grave dano conhecido pela outra parte. E na informação maliciosa intencional há dolo (não mero erro espontâneo)."
      },
      {
        "letter": "B",
        "explanation": "No Código Civil (Art. 171, II e Art. 178), fraude contra credores gera ANULABILIDADE (prazo decadencial de 4 anos), distinta da simulação (que gera nulidade absoluta — Art. 167)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 157, § 2º (e Enunciado 148 CJF para estado de perigo), evita-se a anulação se a parte favorecida concordar com a redução do proveito ou suplementação suficiente."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 138 a 165 do Código Civil",
        "textSnippet": "Vícios do Negócio (Anuláveis em 4 anos - Art. 178): Erro (falsa percepção espontânea), Dolo (indução maliciosa), Coação (ameaça grave), Estado de Perigo (salvar de grave dano conhecido + onerosidade), Lesão (premente necessidade/inexperiência + desproporção), Fraude contra Credores (insolvência — Ação Pauliana). Simulação (Art. 167) = NULA (não convalesce nem decai)."
      }
    ],
    "professorTip": "6 defeitos ANULÁVEIS em 4 anos (Ed, Co, Le, Es, Do, Fra): Erro, Dolo, Coação, Estado de perigo, Lesão, Fraude contra credores! Só SIMULAÇÃO (Art. 167) é NULA!"
  },
  {
    "id": "mig_civil_041",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Prescrição vs. Decadência - Prazos do Código Civil e Causas Impeditivas",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Sobre a prescrição e a decadência no Código Civil brasileiro, em quais hipóteses o prazo prescricional sofre impedimento/suspensão e qual o prazo prescricional para cobrança de dívida líquida constante de instrumento público ou particular e para pretensão de reparação civil contratual vs. extracontratual?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo prescricional de 3 anos aplica-se indistintamente à responsabilidade civil extracontratual e ao inadimplemento contratual, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "B",
        "text": "A prescrição não pode ser reconhecida de ofício pelo juiz, diferentemente da decadência convencional, com impedimento à compensação ou repetição dos valores prestados na relação negocial."
      },
      {
        "letter": "C",
        "text": "Os prazos de prescrição podem ser alterados livremente por acordo contratual das partes, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "D",
        "text": "Não corre prescrição entre cônjuges na constância da sociedade conjugal, entre ascendentes e descendentes durante o poder familiar e contra absolutamente incapazes."
      }
    ],
    "correctAnswer": "D",
    "justification": "Prescrição (extingue pretensão; juiz reconhece de ofício; não altera por acordo): 10 anos (geral/contratual - EREsp 1.280.825 STJ); 5 anos (dívida líquida em instrumento, honorários); 3 anos (reparação civil extracontratual, enriquecimento sem causa, aluguéis). Decadência legal (de ofício) vs. convencional (precisa alegação).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Corte Especial do STJ (EREsp 1.280.825) firmou que o Art. 206, § 3º, V (3 anos) aplica-se apenas à responsabilidade EXTRACONTRACTUAL; na contratual aplica-se a regra geral decenal (10 anos, Art. 205), salvo prazo específico."
      },
      {
        "letter": "B",
        "explanation": "É o oposto: pelo CPC/CC, o juiz PODE reconhecer de ofício a prescrição e a decadência LEGAL; a decadência CONVENCIONAL não pode ser reconhecida de ofício (Art. 211 CC)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 192 do Código Civil, os prazos de prescrição NÃO podem ser alterados por acordo das partes (diferente da decadência convencional)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 189 a 211 do Código Civil e STJ Tema 949",
        "textSnippet": "Prescrição (extingue pretensão; juiz reconhece de ofício; não altera por acordo): 10 anos (geral/contratual - EREsp 1.280.825 STJ); 5 anos (dívida líquida em instrumento, honorários); 3 anos (reparação civil extracontratual, enriquecimento sem causa, aluguéis). Decadência legal (de ofício) vs. convencional (precisa alegação)."
      }
    ],
    "jurisprudence": "STJ EREsp 1.280.825",
    "professorTip": "Prescrição (Art. 206): Reparação EXTRACONTRATUAL = 3 anos; Inadimplemento CONTRATUAL = 10 anos (STJ EREsp 1.280.825); Dívida líquida em contrato/alimentos = 5/2 anos! Decadência CONVENCIONAL nunca de ofício!"
  },
  {
    "id": "mig_civil_042",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Obrigações - Solidariedade Ativa e Passiva, Remissão e Renúncia",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "André, Bruno e Carlos são devedores solidários de uma dívida indivisível e pecuniária de R$ 90.000,00 perante o credor Davi. Davi perdoa (remite) integralmente a quota-parte de André e depois cobra os R$ 90.000,00 de Bruno. Qual é o valor devido por Bruno e qual a consequência se a dívida vencer com juros e um dos devedores for culpado pela impossibilidade da prestação?",
    "options": [
      {
        "letter": "A",
        "text": "Bruno responde ainda pelos R$ 90.000,00 integrais porque a solidariedade não se altera com o perdão parcial. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "A solidariedade presume-se sempre em contratos civis celebrados por mais de dois devedores, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "Se morrer um dos devedores solidários deixando dois herdeiros, cada herdeiro responde pela dívida inteira mesmo antes da partilha, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "D",
        "text": "Bruno responde apenas por R$ 60.000,00, pois a remissão concedida pelo credor a um dos codevedores extingue a solidariedade com relação a ele e abate sua quota da dívida comum."
      }
    ],
    "correctAnswer": "D",
    "justification": "Solidariedade Passiva (Arts. 275–285 CC): não se presume (Art. 265); remissão de um abate sua cota dos demais (Art. 277); juros da mora = todos respondem (Art. 280); impossibilidade por culpa de um = todos pelo equivalente, só culpado pelas perdas e danos (Art. 279); renúncia à solidariedade em favor de um = os demais continuam solidários pelo saldo abatida a quota do exonerado.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 277 do CC, o pagamento parcial feito por um dos devedores e a remissão por ele obtida não aproveitam aos outros devedores, senão até à concorrência da quantia paga ou relevada."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 265 do Código Civil, a solidariedade NÃO se presume; resulta da lei ou da vontade das partes."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 276 CC, cada herdeiro só será obrigado a pagar a quota que corresponder ao seu quinhão hereditário (salvo se a obrigação for indivisível), mas todos reunidos serão considerados como um devedor solidário em relação aos demais."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 264 a 285 do Código Civil",
        "textSnippet": "Solidariedade Passiva (Arts. 275–285 CC): não se presume (Art. 265); remissão de um abate sua cota dos demais (Art. 277); juros da mora = todos respondem (Art. 280); impossibilidade por culpa de um = todos pelo equivalente, só culpado pelas perdas e danos (Art. 279); renúncia à solidariedade em favor de um = os demais continuam solidários pelo saldo abatida a quota do exonerado."
      }
    ],
    "professorTip": "Solidariedade NÃO se presume (Art. 265)! Perdoou 1 devedor -> abate a cota dele! Culpa de 1 pela perda -> todos pagam o valor da coisa, SÓ o culpado paga perdas e danos (Art. 279)!"
  },
  {
    "id": "mig_civil_043",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Transmissão das Obrigações - Cessão de Crédito vs. Assunção de Dívida",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Credor cedeu crédito vencido a terceiro sem consultar o devedor (apenas notificando-o posteriormente); em situação oposta, um devedor transferiu sua dívida a um amigo sem obter o consentimento do credor. Qual a validade de cada negócio?",
    "options": [
      {
        "letter": "A",
        "text": "Ambas dependem de consentimento expresso da outra parte (devedor na cessão de crédito e credor na assunção), com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "Na cessão de crédito onerosa, o cedente responde sempre pela solvência do devedor cedido, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "C",
        "text": "Na assunção de dívida com consentimento do credor, o novo devedor sempre exonera o antigo, ainda que insolvente o substituto ao tempo da assunção e isso fosse ignorado pelo credor. Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes."
      },
      {
        "letter": "D",
        "text": "A cessão de crédito independe da anuência do devedor; já a assunção de dívida exige consentimento expresso do credor, sendo que o silêncio do credor notificado equivale em regra à recusa."
      }
    ],
    "correctAnswer": "D",
    "justification": "Cessão de crédito (Art. 286–298): dispensa anuência do devedor (exige notificação — Art. 290); regra = cedente garante apenas existência do crédito (pro soluto). Assunção de dívida (Art. 299–303): exige consentimento EXPRESSO do credor (silêncio = recusa, salvo adquirente de imóvel hipotecado que notifica o credor sem impugnação em 30 dias — Art. 303).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na cessão de crédito o devedor não precisa concordar (só ser notificado); na assunção de dívida a pessoa do devedor importa pela solvabilidade, exigindo consentimento expresso do credor."
      },
      {
        "letter": "B",
        "explanation": "Na cessão por título oneroso (Art. 295 CC), o cedente fica responsável apenas pela existência do crédito ao tempo em que o cedeu (cessão pro soluto); só responde pela solvência (pro solvendo) se houver estipulação expressa (Art. 296)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 299, caput, a exoneração do devedor primitivo não se opera se o terceiro substituto era insolvente ao tempo da assunção e o credor o ignorava."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 286 a 303 do Código Civil",
        "textSnippet": "Cessão de crédito (Art. 286–298): dispensa anuência do devedor (exige notificação — Art. 290); regra = cedente garante apenas existência do crédito (pro soluto). Assunção de dívida (Art. 299–303): exige consentimento EXPRESSO do credor (silêncio = recusa, salvo adquirente de imóvel hipotecado que notifica o credor sem impugnação em 30 dias — Art. 303)."
      }
    ],
    "professorTip": "Cessão de Crédito: NÃO precisa consentimento do devedor (só notificar)! Assunção de Dívida: PRECISA consentimento EXPRESSO do credor (silêncio = recusa, salvo hipoteca 30d Art. 303)!"
  },
  {
    "id": "mig_civil_044",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Civil",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Extinção das Obrigações - Pagamento em Consignação, Sub-rogação e Imputação",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Devedor possui três dívidas líquidas, vencidas e da mesma natureza (dinheiro) com o mesmo credor, todas vencidas em datas diversas e com taxas de juros diferentes. Ao entregar quantia insuficiente para quitar todas sem indicar qual está pagando, e o credor também nada declarando na quitação, como se faz a imputação legal do pagamento?",
    "options": [
      {
        "letter": "A",
        "text": "Imputa-se obrigatoriamente primeiro na dívida de maior valor principal, independentemente dos juros, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "Se todas as dívidas venceram na mesma data, imputa-se na menos onerosa ao devedor, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "Na dação em pagamento, o credor é obrigado a aceitar prestação diversa da devida se ela for mais valiosa, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "D",
        "text": "A imputação do pagamento faz-se primeiro nos juros vencidos e depois no capital; havendo várias dívidas líquidas e vencidas sem indicação pelo devedor nem pelo credor no recibo, imputa-se primeiro na mais antiga e, se todas venceram na mesma data, na mais onerosa."
      }
    ],
    "correctAnswer": "D",
    "justification": "Imputação do pagamento (Arts. 352–355 CC): escolha cabe primeiro ao devedor; no silêncio dele, ao credor na quitação; no silêncio de ambos: 1º juros vencidos, 2º dívida vencida há mais tempo, 3º mais onerosa se mesmo vencimento.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 354 CC, havendo capital e juros, o pagamento imputar-se-á primeiro nos juros vencidos, e depois no capital (salvo estipulação contrária ou quitação por conta do capital)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 355 determina que, sendo todas líquidas e vencidas ao mesmo tempo, a imputação far-se-á na MAIS ONEROSA (com maiores juros/encargos)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 313 CC, o credor não é obrigado a receber prestação diversa da que lhe é devida, ainda que mais valiosa; a dação em pagamento (Art. 356) depende de consentimento do credor."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 334 a 365 do Código Civil",
        "textSnippet": "Imputação do pagamento (Arts. 352–355 CC): escolha cabe primeiro ao devedor; no silêncio dele, ao credor na quitação; no silêncio de ambos: 1º juros vencidos, 2º dívida vencida há mais tempo, 3º mais onerosa se mesmo vencimento."
      }
    ],
    "professorTip": "Imputação legal: 1º Juros -> 2º Dívida mais ANTIGA -> 3º Dívida mais ONEROSA! E na dação em pagamento o credor NUNCA é obrigado a aceitar coisa diversa, mesmo mais valiosa!"
  },
  {
    "id": "mig_civil_045",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Inadimplemento - Mora, Cláusula Penal e Arras (Sinal)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em contrato de compra e venda imobiliária com estipulação de arras confirmatórias de R$ 50.000,00 entregues pelo comprador ao vendedor, este desiste injustificadamente do negócio antes da entrega das chaves. Além disso, o contrato previa multa penal compensatória adicional por inadimplemento absoluto. O que pode exigir o comprador?",
    "options": [
      {
        "letter": "A",
        "text": "Deve restituir apenas o valor simples de R$ 50.000,00 sem equivalente porque se trata de arras confirmatórias. Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes."
      },
      {
        "letter": "B",
        "text": "Caso houvesse cláusula expressa de direito de arrependimento (arras penitenciais), além da devolução em dobro, o comprador ainda teria direito à indenização suplementar."
      },
      {
        "letter": "C",
        "text": "A cláusula penal moratória não pode ser cumulada com a exigência do cumprimento da obrigação principal, sem transmissão automática dos direitos obrigacionais ou reais antes da formalização registral."
      },
      {
        "letter": "D",
        "text": "Nas arras confirmatórias, quem as recebeu (vendedor) dando causa à inexecução deve restituí-las mais o equivalente, com atualização monetária, juros e honorários."
      }
    ],
    "correctAnswer": "D",
    "justification": "Arras (Arts. 417–420): quem deu e desistiu perde; quem recebeu e desistiu devolve em DOBRO (mais equivalente). Confirmatórias admitem indenização suplementar (STJ: não acumulam com cláusula penal compensatória); Penitenciais (com direito de arrependimento) NÃO admitem indenização suplementar.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 418 CC, se a parte que recebeu as arras não executar o contrato, quem as deu pode tê-lo por desfeito e exigir a devolução MAIS o equivalente (em dobro)."
      },
      {
        "letter": "B",
        "explanation": "Nas arras PENITENCIAIS (Art. 420 CC — quando há direito de arrependimento estipulado), a perda ou devolução em dobro têm função unicamente indenizatória, NÃO cabendo indenização suplementar."
      },
      {
        "letter": "C",
        "explanation": "Cláusula penal MORATÓRIA (pelo atraso) cumula-se com a obrigação principal (Art. 411); a cláusula penal COMPENSATÓRIA (pelo inadimplemento total) converte-se em alternativa em benefício do credor (Art. 410)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 394 a 420 do Código Civil",
        "textSnippet": "Arras (Arts. 417–420): quem deu e desistiu perde; quem recebeu e desistiu devolve em DOBRO (mais equivalente). Confirmatórias admitem indenização suplementar (STJ: não acumulam com cláusula penal compensatória); Penitenciais (com direito de arrependimento) NÃO admitem indenização suplementar."
      }
    ],
    "professorTip": "Arras: quem deu e falhou PERDE; quem recebeu e falhou devolve em DOBRO! Penitenciais (com arrependimento) = SEM indenização extra! Cláusula penal: Moratória CUMULA com obrigação; Compensatória é ALTERNATIVA!"
  },
  {
    "id": "mig_civil_046",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Teoria Geral dos Contratos - Vícios Redibitórios e Evicção",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Comprador adquiriu automóvel seminovo de particular (fora de relação de consumo) e, 20 dias depois, constatou defeito oculto grave no motor; meses depois, descobriu que outro veículo que havia comprado em leilão judicial teve sua posse perdida por sentença judicial transitada em julgado em ação reivindicatória de terceiro. Quais institutos e prazos se aplicam?",
    "options": [
      {
        "letter": "A",
        "text": "Não cabe evicção quando o bem foi adquirido em hasta pública (leilão judicial), sem possibilidade de modificação unilateral das obrigações contratuais sem anuência expressa."
      },
      {
        "letter": "B",
        "text": "Nos vícios redibitórios de bem móvel oculto que só se revela depois, o prazo decadencial para o adquirente reclamar é de 1 ano contado da ciência, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "Para exercer o direito da evicção no CPC atual, é obrigatória a denunciação da lide ao alienante na ação reivindicatória, com produção imediata de efeitos patrimoniais e pessoais independentemente de averbação registral."
      },
      {
        "letter": "D",
        "text": "No motor com defeito oculto aplica-se o regime dos vícios redibitórios; na perda do bem adquirido em hasta pública por sentença judicial aplica-se a evicção."
      }
    ],
    "correctAnswer": "D",
    "justification": "Vícios redibitórios (Arts. 441–446 CC): defeitos ocultos em contratos comutativos (30d móvel / 1a imóvel; ciência tardia até 180d móvel / 1a imóvel). Evicção (Arts. 447–457 CC): perda por decisão judicial/ato administrativo anterior (vale em hasta pública e não exige denunciação da lide obrigatória no CPC/15).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 447 do Código Civil determina expressamente que subsiste a garantia contra a evicção ainda que a aquisição se tenha realizado em hasta pública."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 445, caput e § 1º, do CC: bem móvel = 30 dias; imóvel = 1 ano (se pela natureza só puder ser conhecido mais tarde, conta da ciência até o prazo máximo de 180 dias para móveis e 1 ano para imóveis)."
      },
      {
        "letter": "C",
        "explanation": "O CPC/2015 revogou o Art. 456 do CC que exigia denunciação da lide obrigatória: hoje o evicto pode acionar o alienante em ação autônoma mesmo sem denunciá-lo na demanda originária."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 441 a 457 do Código Civil",
        "textSnippet": "Vícios redibitórios (Arts. 441–446 CC): defeitos ocultos em contratos comutativos (30d móvel / 1a imóvel; ciência tardia até 180d móvel / 1a imóvel). Evicção (Arts. 447–457 CC): perda por decisão judicial/ato administrativo anterior (vale em hasta pública e não exige denunciação da lide obrigatória no CPC/15)."
      }
    ],
    "professorTip": "Vício redibitório (CC): 30d MÓVEL / 1a IMÓVEL (ciência tardia: até 180d móvel / 1a imóvel). Evicção: vale em HASTA PÚBLICA e NÃO obriga denunciação da lide!"
  },
  {
    "id": "mig_civil_047",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Contratos - Compra e Venda (Pactos Adjetos) e Doação",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Na compra e venda de imóvel com pacto de retrovenda e na venda de ascendente a descendente sem consentimento dos demais descendentes e do cônjuge, qual a validade dos atos e os respectivos prazos legais?",
    "options": [
      {
        "letter": "A",
        "text": "A retrovenda aplica-se a bens móveis e imóveis pelo prazo máximo de 5 anos, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "A venda de ascendente a descendente sem anuência dos demais descendentes é nula de pleno direito e imprescritível, com ineficácia jurídica plena do negócio celebrado perante terceiros de boa-fé e credores."
      },
      {
        "letter": "C",
        "text": "Na doação feita de ascendente a descendente, é igualmente exigida a anuência expressa dos demais descendentes sob pena de anulabilidade."
      },
      {
        "letter": "D",
        "text": "A retrovenda só é admitida para bens imóveis no prazo decadencial máximo de 3 anos para resgate."
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 496 CC: venda ascendente -> descendente sem anuência dos demais descendentes e do cônjuge = ANULÁVEL em 2 anos (Art. 179). Doação ascendente -> descendente (Art. 544) = VÁLIDA sem anuência (adiantamento da legítima). Retrovenda = só imóvel, máx. 3 anos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A retrovenda (Art. 505 CC) restringe-se exclusivamente a bens IMÓVEIS e tem prazo máximo improrrogável de 3 anos."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 496 do CC (superando antiga discussão da Súmula 152 STF), a venda de ascendente a descendente sem consentimento é ANULÁVEL (prazo decadencial de 2 anos — Art. 179 CC)."
      },
      {
        "letter": "C",
        "explanation": "A DOAÇÃO de ascendente a descendente é válida sem anuência dos irmãos, importando apenas adiantamento do que lhes cabe por herança (colação — Art. 544 CC), respeitada a legítima."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 505 a 564 do Código Civil",
        "textSnippet": "Art. 496 CC: venda ascendente -> descendente sem anuência dos demais descendentes e do cônjuge = ANULÁVEL em 2 anos (Art. 179). Doação ascendente -> descendente (Art. 544) = VÁLIDA sem anuência (adiantamento da legítima). Retrovenda = só imóvel, máx. 3 anos."
      }
    ],
    "professorTip": "VENDA pai -> filho sem anuência = ANULÁVEL (2 anos, Art. 496)! DOAÇÃO pai -> filho = VÁLIDA (adiantamento de legítima, Art. 544)! Retrovenda = só imóvel, até 3 anos!"
  },
  {
    "id": "mig_civil_048",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito Civil",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Doação - Restrições (Inoficiosa, Universal, Nascituro e Revogação)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Cidadão solteiro e sem herdeiros necessários doou a totalidade integral de seu patrimônio a instituição filantrópica, sem reservar bens ou renda suficiente para sua própria subsistência; em outro ato, pai casado sob regime de comunhão parcial doou imóvel à concubina (amante). Qual o vício de cada doação?",
    "options": [
      {
        "letter": "A",
        "text": "A doação universal é válida sempre que o doador não possuir filhos ou pais vivos, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "A doação inoficiosa (que excede a parte disponível havendo herdeiros necessários) anula integralmente todo o contrato de doação, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "C",
        "text": "A revogação da doação por ingratidão do donatário pode ser alegada mesmo nas doações puramente remuneratórias e com encargo já cumprido, com produção imediata de efeitos patrimoniais e pessoais independentemente de averbação registral."
      },
      {
        "letter": "D",
        "text": "A primeira configura doação universal; a segunda é anulável pelo cônjuge ou herdeiros necessários até dois anos depois de dissolvida a sociedade conjugal, e seria nula na parte excedente à legítima se fosse doação inoficiosa."
      }
    ],
    "correctAnswer": "D",
    "justification": "Regras da Doação (CC): Doação universal sem reserva de subsistência = NULA (Art. 548). Doação inoficiosa = NULA apenas na parte excedente à disponível (Art. 549). Doação de cônjuge adúltero a cúmplice = ANULÁVEL em até 2 anos após dissolução da sociedade conjugal (Art. 550). Revogação por ingratidão: prazo decadencial de 1 ano do conhecimento do fato (Art. 559).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 548 CC veda a doação de todos os bens sem reserva de parte ou renda suficiente para subsistência do doador, independentemente da existência de herdeiros."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 549 CC, é nula a doação quanto À PARTE que exceder a de que o doador, no momento da liberalidade, poderia dispor em testamento."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 564 CC, não se revogam por ingratidão as doações puramente remuneratórias, as oneradas com encargo já cumprido, as feitas em cumprimento de obrigação natural e as feitas para determinado casamento."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 542 a 564 do Código Civil",
        "textSnippet": "Regras da Doação (CC): Doação universal sem reserva de subsistência = NULA (Art. 548). Doação inoficiosa = NULA apenas na parte excedente à disponível (Art. 549). Doação de cônjuge adúltero a cúmplice = ANULÁVEL em até 2 anos após dissolução da sociedade conjugal (Art. 550). Revogação por ingratidão: prazo decadencial de 1 ano do conhecimento do fato (Art. 559)."
      }
    ],
    "professorTip": "Doação: Universal (sem sustento) = NULA (Art. 548); Inoficiosa = NULA só no excesso (Art. 549); Ao amante = ANULÁVEL em 2 anos após fim do casamento (Art. 550); Ingratidão = 1 ano!"
  },
  {
    "id": "mig_civil_049",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Locação de Imóveis Urbanos - Direito de Preferência, Denúncia e Garantias",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em contrato de locação residencial escrita de 30 meses, o locador vende o imóvel a terceiro durante a vigência sem dar direito de preferência ao locatário; o contrato NÃO possuía cláusula de vigência averbada na matrícula do imóvel. Além disso, o locador exigiu simultaneamente caução em dinheiro e fiador como garantias. Quais as consequências jurídicas?",
    "options": [
      {
        "letter": "A",
        "text": "O locatário pode adjudicar o imóvel do comprador mesmo sem averbação do contrato de locação na matrícula do Cartório de Registro de Imóveis."
      },
      {
        "letter": "B",
        "text": "São permitidas até duas modalidades de garantia locatícia cumulativamente em locações comerciais de grande porte, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "C",
        "text": "Na locação residencial com prazo inferior a 30 meses, o locador pode exigir a retomada imotivada (denúncia vazia) imediatamente ao fim do contrato."
      },
      {
        "letter": "D",
        "text": "A exigência de mais de uma modalidade de garantia num mesmo contrato de locação é nula e constitui contravenção penal."
      }
    ],
    "correctAnswer": "D",
    "justification": "Lei 8.245/91: (1) vedada dupla garantia (Art. 37, p.u.); (2) adjudicação por preterição na preferência exige averbação na matrícula >= 30 dias antes (Art. 33); (3) adquirente respeita vigência só se contrato com prazo determinado tiver cláusula de vigência averbada no RGI (Art. 8º); caso contrário, denuncia em 90 dias.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 33 da Lei 8.245/91, a adjudicação compulsória pelo preterido (ação em 6 meses com depósito do preço) exige que o contrato de locação esteja AVERBADO na matrícula do imóvel pelo menos 30 dias antes da alienação."
      },
      {
        "letter": "B",
        "explanation": "O Art. 37, parágrafo único, veda sob pena de nulidade mais de uma modalidade de garantia num mesmo contrato de locação."
      },
      {
        "letter": "C",
        "explanation": "Nos contratos residenciais ajustados por escrito por prazo INFERIOR a 30 meses, findo o prazo ajustado, a locação prorroga-se por tempo indeterminado e só cabe retomada por denúncia cheia (Art. 47) ou após 5 anos ininterruptos (V). Denúncia vazia imediata cabe no contrato >= 30 meses (Art. 46)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Lei nº 8.245/1991 (Lei do Inquilinato)",
        "textSnippet": "Lei 8.245/91: (1) vedada dupla garantia (Art. 37, p.u.); (2) adjudicação por preterição na preferência exige averbação na matrícula >= 30 dias antes (Art. 33); (3) adquirente respeita vigência só se contrato com prazo determinado tiver cláusula de vigência averbada no RGI (Art. 8º); caso contrário, denuncia em 90 dias."
      }
    ],
    "professorTip": "Lei do Inquilinato: 1 garantia só! Quer adjudicar imóvel vendido sem preferência ou impedir despejo pelo novo dono? Contrato tem que estar AVERBADO na matrícula! Contrato < 30 meses = NÃO cabe denúncia vazia!"
  },
  {
    "id": "mig_civil_050",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Contratos em Espécie - Mandato, Empréstimo (Comodato vs. Mútuo) e Fiança",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Emprestou-se gratuitamente um apartamento mobiliado por prazo determinado de 1 ano (comodato) e, em outro contrato, emprestaram-se 100 sacas de café para consumo e devolução de igual quantidade e qualidade (mútuo). Se o imóvel sofrer incêndio fortuito e o café se perder antes da entrega na devolução por caso fortuito, quem suporta cada prejuízo?",
    "options": [
      {
        "letter": "A",
        "text": "Em ambos os empréstimos os riscos correm sempre por conta de quem recebeu a coisa emprestada, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "O comodatário em mora pode cobrar aluguel ao comodante pelas despesas ordinárias de uso e gozo do bem, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "C",
        "text": "No comodato (coisa infungível), res perit domino; no mútuo (coisa fungível), transfere-se o domínio ao mutuário, correndo por conta do mutuário todos os riscos da coisa desde a tradição."
      },
      {
        "letter": "D",
        "text": "A fiança pode ser prestada verbalmente e interpreta-se extensivamente em favor do credor, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      }
    ],
    "correctAnswer": "C",
    "justification": "Comodato (Art. 579): empréstimo gratuito de coisa INFUNGÍVEL (não transfere domínio; despesas ordinárias são do comodatário). Mútuo (Art. 586): empréstimo de coisa FUNGÍVEL (transfere domínio -> riscos do mutuário). Fiança (Art. 819): sempre escrita, interpretação restritiva, exige outorga conjugal (salvo separação absoluta — Súmula 332 STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O comodato não transfere a propriedade (apenas posse direta), aplicando-se res perit domino; o mútuo transfere a propriedade do bem fungível ao mutuário."
      },
      {
        "letter": "B",
        "explanation": "O comodatário nunca pode recobrar despesas ordinárias feitas com o uso e gozo da coisa (Art. 584 CC); e se constituído em mora, paga aluguel arbitrado pelo comodante (Art. 582 CC)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 819 CC, a fiança dar-se-á por ESCRITO e NÃO admite interpretação extensiva (Súmula 214 STJ: fiador não responde por obrigações resultantes de aditamento sem sua anuência)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 579 a 592 e 818 a 839 do Código Civil",
        "textSnippet": "Comodato (Art. 579): empréstimo gratuito de coisa INFUNGÍVEL (não transfere domínio; despesas ordinárias são do comodatário). Mútuo (Art. 586): empréstimo de coisa FUNGÍVEL (transfere domínio -> riscos do mutuário). Fiança (Art. 819): sempre escrita, interpretação restritiva, exige outorga conjugal (salvo separação absoluta — Súmula 332 STJ)."
      }
    ],
    "professorTip": "Comodato = INFUNGÍVEL (não transfere domínio). Mútuo = FUNGÍVEL (transfere domínio -> risco do mutuário). Fiança = escrita, restritiva e com outorga conjugal (Súmula 332 STJ)!"
  },
  {
    "id": "mig_civil_051",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Responsabilidade Civil - Fato da Coisa/Animal, Teoria da Perda de uma Chance e Dano Moral PJ",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Cão de grande porte foge de residência e fere pedestre na calçada; paralelamente, advogado perde injustificadamente o prazo para interpor apelação em ação de alta probabilidade de êxito, frustrando a oportunidade do cliente de reformar sentença. Qual o regime de responsabilidade nos dois casos?",
    "options": [
      {
        "letter": "A",
        "text": "O dono do animal só responde se comprovada negligência na guarda da coleira ou do portão, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "B",
        "text": "A perda de uma chance exige que a probabilidade de vitória fosse 100% certa e indeniza integralmente o valor total da causa, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      },
      {
        "letter": "C",
        "text": "No ataque do animal aplica-se a responsabilidade objetiva do dono ou detentor; na perda do prazo pelo advogado aplica-se a teoria da perda de uma chance."
      },
      {
        "letter": "D",
        "text": "Pessoa jurídica não pode sofrer dano moral por ausência de honra subjetiva, com impedimento à compensação ou repetição dos valores prestados na relação negocial."
      }
    ],
    "correctAnswer": "C",
    "justification": "Responsabilidade objetiva pelo fato do animal (Art. 936), da ruína de edifício (Art. 937) e de objetos lançados de prédio (Art. 938 - actio de effusis et deiectis). Súmula 227 STJ (PJ sofre dano moral); Súmula 387 STJ (cumulação dano estético + dano moral).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 936 CC, o dono ou detentor do animal ressarcirá o dano por este causado, se não provar culpa da vítima ou força maior (responsabilidade objetiva)."
      },
      {
        "letter": "B",
        "explanation": "Na perda de uma chance a chance precisa ser SÉRIA e REAL (não hipotética), e o valor da indenização corresponde a um percentual proporcional ao grau de probabilidade da chance perdida."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 227 do STJ, a pessoa jurídica pode sofrer dano moral (atingimento à honra objetiva/imagem no mercado)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 927 a 944 do Código Civil e Súmulas 227 e 387 STJ",
        "textSnippet": "Responsabilidade objetiva pelo fato do animal (Art. 936), da ruína de edifício (Art. 937) e de objetos lançados de prédio (Art. 938 - actio de effusis et deiectis). Súmula 227 STJ (PJ sofre dano moral); Súmula 387 STJ (cumulação dano estético + dano moral)."
      }
    ],
    "jurisprudence": "Súmulas 227 e 387 do STJ",
    "professorTip": "Animal (Art. 936), Prédio em ruína (Art. 937) e Coisas caídas de edifício (Art. 938) = responsabilidade OBJETIVA! PJ = sofre dano moral (Súmula 227 STJ)! Dano estético + moral = CUMULÁVEIS (Súmula 387 STJ)!"
  },
  {
    "id": "mig_civil_052",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Civil",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Responsabilidade Civil - Presunção de Culpa / Responsabilidade por Fato de Terceiro",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Filho menor de 15 anos que reside com os pais causa dano grave a carro de vizinho usando bicicleta; paralelamente, empregado de transportadora durante o expediente causa acidente culposo contra terceiro. Os pais e o empregador respondem mesmo sem culpa própria na escolha ou vigilância?",
    "options": [
      {
        "letter": "A",
        "text": "Não, respondem apenas subjetivamente, podendo exonerar-se provando que educaram e fiscalizaram diligentemente o menor ou o empregado. A solução aplica-se de modo uniforme tanto às obrigações principais quanto às acessórias."
      },
      {
        "letter": "B",
        "text": "O empregador nunca tem direito de regresso contra o empregado que causou o dano culposamente, sem possibilidade de modificação unilateral das obrigações contratuais sem anuência expressa."
      },
      {
        "letter": "C",
        "text": "Sim combinado com o Art. 933 do Código Civil, os pais e o empregador/comitente respondem objetivamente pelos atos de terceiros, independentemente de culpa de sua parte."
      },
      {
        "letter": "D",
        "text": "Os pais têm direito de regresso contra o filho menor de 15 anos após indenizarem o vizinho, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "C",
    "justification": "Arts. 932–934 CC: Pais, tutores/curadores, empregadores, donos de hotéis/escolas respondem OBJETIVAMENTE pelos atos de terceiros indicados no Art. 932. Regresso cabe contra todos (empregado etc.), EXCETO contra descendente incapaz (Art. 934).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 933 do CC/2002 superou a antiga culpa presumida do CC/1916 (Súmula 341 STF), instituindo responsabilidade OBJETIVA indireta dos pais, tutores, curadores, empregadores, hotéis e escolas (basta provar culpa do agente direto, salvo se este também tiver resp. objetiva)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 934 do CC, aquele que ressarcir o dano causado por outrem pode reaver o que houver pago daquele por quem pagou (direito de regresso), SALVO se o causador do dano for descendente seu, absoluta ou relativamente incapaz."
      },
      {
        "letter": "D",
        "explanation": "O Art. 934 CC veda expressamente o direito de regresso dos pais contra o descendente incapaz!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 932 e 933 do Código Civil",
        "textSnippet": "Arts. 932–934 CC: Pais, tutores/curadores, empregadores, donos de hotéis/escolas respondem OBJETIVAMENTE pelos atos de terceiros indicados no Art. 932. Regresso cabe contra todos (empregado etc.), EXCETO contra descendente incapaz (Art. 934)."
      }
    ],
    "professorTip": "Art. 933 CC: Pais, escolas, hotéis e patrões têm responsabilidade OBJETIVA indireta! E patrão tem regresso; PAI NUNCA tem regresso contra filho incapaz (Art. 934)!"
  },
  {
    "id": "mig_civil_053",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direitos Reais - Posse Justa/Injusta, Boa-Fé/Má-Fé e Efeitos sobre Frutos e Benfeitorias",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Possuidor de BOA-FÉ de imóvel rural realizou benfeitorias necessárias, úteis e voluptuárias, e colheu frutos naturais durante sua posse; sobrevém ação reivindicatória procedente do legítimo proprietário. A quais benfeitorias e frutos esse possuidor de boa-fé tem direito?",
    "options": [
      {
        "letter": "A",
        "text": "O possuidor de boa-fé tem direito de retenção apenas pelas benfeitorias necessárias, nunca pelas úteis, com impedimento à compensação ou repetição dos valores prestados na relação negocial."
      },
      {
        "letter": "B",
        "text": "O possuidor de má-fé não tem direito sequer ao ressarcimento das benfeitorias necessárias realizadas para evitar a ruína do bem, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "C",
        "text": "O possuidor de boa-fé tem direito aos frutos percebidos durante a boa-fé, à indenização das benfeitorias necessárias e úteis e a levantar as voluptuárias se não lhe forem pagas e puder fazê-lo sem detrimento da coisa."
      },
      {
        "letter": "D",
        "text": "O possuidor de boa-fé responde pela perda ou deterioração da coisa mesmo que não lhe tenha dado causa, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      }
    ],
    "correctAnswer": "C",
    "justification": "Possuidor de BOA-FÉ: fica com frutos percebidos; recebe Necessárias + Úteis (COM retenção); levanta Voluptuárias (sem dano). Possuidor de MÁ-FÉ: devolve frutos colhidos e os que deixou de colher por culpa (descontadas despesas); recebe SÓ Necessárias (SEM retenção); nada por Úteis ou Voluptuárias.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Art. 1.219 CC: o possuidor de boa-fé tem direito à indenização das benfeitorias necessárias E úteis, podendo exercer o direito de retenção pelo valor delas."
      },
      {
        "letter": "B",
        "explanation": "Para evitar enriquecimento sem causa, o Art. 1.220 CC assegura ao possuidor de má-fé o ressarcimento apenas das benfeitorias NECESSÁRIAS (sem direito de retenção e sem direito às úteis ou voluptuárias)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.217 CC, o possuidor de boa-fé NÃO responde pela perda ou deterioração da coisa a que não der causa (ao contrário do possuidor de má-fé — Art. 1.218)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.200 a 1.222 do Código Civil",
        "textSnippet": "Possuidor de BOA-FÉ: fica com frutos percebidos; recebe Necessárias + Úteis (COM retenção); levanta Voluptuárias (sem dano). Possuidor de MÁ-FÉ: devolve frutos colhidos e os que deixou de colher por culpa (descontadas despesas); recebe SÓ Necessárias (SEM retenção); nada por Úteis ou Voluptuárias."
      }
    ],
    "professorTip": "Possuidor BOA-FÉ = Necessárias + Úteis (COM retenção) + levanta Voluptuárias! Possuidor MÁ-FÉ = SÓ Necessárias (SEM retenção)!"
  },
  {
    "id": "mig_civil_054",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direitos Reais - Usucapião (Modalidades e Requisitos)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Casal ocupa sem oposição e com animus domini há 6 anos um imóvel urbano de 200 m² com justo título e boa-fé, sendo proprietário de outro apartamento alugado; em outra situação, ex-cônjuge abandonado pelo lar permanece sozinho há 2 anos ininterruptos em imóvel urbano comum do ex-casal de 180 m² utilizando-o para sua moradia, sem ser proprietário de outro imóvel. Quais espécies de usucapião cabem?",
    "options": [
      {
        "letter": "A",
        "text": "No primeiro caso já se consumou a usucapião especial urbana constitucional de 5 anos por ter o imóvel menos de 250 m², com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "Na usucapião extraordinária de 15 anos exige-se justo título e boa-fé, com produção imediata de efeitos patrimoniais e pessoais independentemente de averbação registral."
      },
      {
        "letter": "C",
        "text": "No primeiro caso cabe usucapião ordinária; no segundo caso cabe usucapião familiar / por abandono de lar."
      },
      {
        "letter": "D",
        "text": "A usucapião familiar exige prazo de 5 anos de posse exclusiva após a separação de fato, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      }
    ],
    "correctAnswer": "C",
    "justification": "Usucapião Imobiliária: Extraordinária (15a / 10a c/ moradia-obra, sem título/boa-fé); Ordinária (10a / 5a c/ registro cancelado + moradia, exige justo título + boa-fé); Especial Urbana (5a, <=250 m², sem outro imóvel); Especial Rural (5a, <=50 ha, produtiva, sem outro imóvel); Familiar (2a, <=250 m², abandono de lar, sem outro imóvel).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A usucapião especial urbana (Art. 183 CF / Art. 1.240 CC, 5 anos, até 250 m²) exige expressamente que o possuidor NÃO seja proprietário de outro imóvel urbano ou rural."
      },
      {
        "letter": "B",
        "explanation": "A usucapião extraordinária (Art. 1.238: 15 anos, ou 10 anos se houver moradia habitual ou obras/serviços produtivos) INDEPENDE de título e boa-fé."
      },
      {
        "letter": "D",
        "explanation": "A usucapião familiar (Art. 1.240-A) tem o menor prazo imobiliário do ordenamento brasileiro: 2 ANOS de posse direta, exclusiva e ininterrupta sem oposição."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.238 a 1.242 do Código Civil e Arts. 183 e 191 da CF/88",
        "textSnippet": "Usucapião Imobiliária: Extraordinária (15a / 10a c/ moradia-obra, sem título/boa-fé); Ordinária (10a / 5a c/ registro cancelado + moradia, exige justo título + boa-fé); Especial Urbana (5a, <=250 m², sem outro imóvel); Especial Rural (5a, <=50 ha, produtiva, sem outro imóvel); Familiar (2a, <=250 m², abandono de lar, sem outro imóvel)."
      }
    ],
    "professorTip": "Prazos Usucapião: Familiar (2a) | Especial Urbana/Rural (5a, sem outro imóvel) | Ordinária (10a/5a, com título+boa-fé) | Extraordinária (15a/10a, sem título)!"
  },
  {
    "id": "mig_civil_055",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direitos Reais de Garantia - Hipoteca, Penhor, Anticrese e Pacto Comissório",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em contrato de financiamento imobiliário garantido por hipoteca, as partes inseriram cláusula prevendo que, no caso de inadimplemento, o credor hipotecário ficará automaticamente com o imóvel sem necessidade de leilão judicial ou avaliação. Além disso, em compra de imóvel na planta, a construtora havia hipotecado o terreno ao banco financiador antes de vender a unidade ao consumidor. Essas situações produzem quais efeitos?",
    "options": [
      {
        "letter": "A",
        "text": "A cláusula de pacto comissório é válida desde que celebrada por escritura pública com advogado, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "B",
        "text": "A hipoteca registrada pela construtora em favor do banco prevalece sobre os compradores das unidades do edifício por ser anterior, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "C",
        "text": "A cláusula que autoriza o credor pignoratício, anticrético ou hipotecário a ficar com o objeto da garantia se a dívida não for paga no vencimento (pacto comissório) é nula."
      },
      {
        "letter": "D",
        "text": "Na alienação fiduciária em garantia de bens imóveis, a execução da garantia exige obrigatoriamente ação judicial de execução hipotecária, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 1.428 CC: É nula a cláusula que autoriza o credor pignoratício, anticrético ou hipotecário a ficar com o objeto da garantia, se a dívida não for paga no vencimento (vedação ao pacto comissório; admite-se pacto marciano / dação posterior). Súmula 308 STJ: hipoteca da construtora não atinge adquirente.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 1.428 CC fulmina de nulidade absoluta o pacto comissório real (só admite a dação em pagamento POSTERIOR ao vencimento — parágrafo único)."
      },
      {
        "letter": "B",
        "explanation": "A Súmula 308 do STJ protege expressamente os adquirentes de unidades imobiliárias contra hipotecas firmadas pela construtora com o banco financiador."
      },
      {
        "letter": "D",
        "explanation": "A alienação fiduciária de imóvel permite a consolidação da propriedade e leilão extrajudicial no Cartório de Registro de Imóveis (Lei 9.514/97), diferente da hipoteca."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.419 a 1.510 do Código Civil e Súmula 308 STJ",
        "textSnippet": "Art. 1.428 CC: É nula a cláusula que autoriza o credor pignoratício, anticrético ou hipotecário a ficar com o objeto da garantia, se a dívida não for paga no vencimento (vedação ao pacto comissório; admite-se pacto marciano / dação posterior). Súmula 308 STJ: hipoteca da construtora não atinge adquirente."
      }
    ],
    "jurisprudence": "Súmula nº 308 do STJ",
    "professorTip": "Pacto Comissório Real (ficar com o bem se não pagar) = NULO (Art. 1.428 CC)! Súmula 308 STJ = hipoteca da construtora com banco NÃO vale contra comprador do imóvel!"
  },
  {
    "id": "mig_civil_056",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito Civil",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Condomínio Edilício e Condomínio de Lotes / Multipropriedade",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Morador de condomínio edilício reiteradamente descumpre deveres de convivência causando comportamento antissocial grave mesmo após multas ordinárias; em outra unidade, o apartamento vai a leilão por dívida condominial enquanto também há débito de IPTU do mesmo apartamento. Como o Código Civil e o STJ tratam ambos os temas?",
    "options": [
      {
        "letter": "A",
        "text": "A assembleia condominial pode expulsar definitivamente o proprietário antissocial proibindo-o de entrar em sua unidade sem intervenção judicial, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "B",
        "text": "O crédito hipotecário do banco prefere ao crédito das despesas condominiais na execução, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "C",
        "text": "Ao condômino com reiterado comportamento antissocial que gera incompatibilidade de convivência, a assembleia por 3/4 dos condôminos restantes pode aplicar multa de até 10 vezes o valor da contribuição mensal; e, pela natureza propter rem das despesas condominiais, o adquirente em arrematação ou venda responde pelos débitos do imóvel. 186 CTN."
      },
      {
        "letter": "D",
        "text": "A convenção de condomínio sem registro no Cartório de Registro de Imóveis não obriga sequer os próprios condôminos que a assinaram, sem transmissão automática dos direitos obrigacionais ou reais antes da formalização registral."
      }
    ],
    "correctAnswer": "C",
    "justification": "Condomínio Edilício: Convenção sem RGI vale entre condôminos (Súmula 260 STJ); antissocial reiterado = 3/4 dos restantes, multa até 10x (Art. 1.337, p.u.); cota condominial é propter rem (Art. 1.345) e prefere à hipoteca (Súmula 478 STJ).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Enunciado 508 CJF e a jurisprudência exigem que eventual restrição drástica ao direito de propriedade (exclusão) passe por ação judicial, limitando-se a assembleia à multa agravada de até 10x (Art. 1.337, p.u.)."
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 478 do STJ, na execução de crédito relativo a cotas condominiais, este tem preferência sobre o hipotecário (mas não sobre o crédito tributário/trabalhista)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 260 do STJ, a convenção de condomínio aprovada, ainda que sem registro, é eficaz para regular as relações entre os condôminos (o registro é necessário apenas para valer contra terceiros — Art. 1.333, p.u., CC)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.331 a 1.358-U do Código Civil e Súmula 478 STJ",
        "textSnippet": "Condomínio Edilício: Convenção sem RGI vale entre condôminos (Súmula 260 STJ); antissocial reiterado = 3/4 dos restantes, multa até 10x (Art. 1.337, p.u.); cota condominial é propter rem (Art. 1.345) e prefere à hipoteca (Súmula 478 STJ)."
      }
    ],
    "jurisprudence": "Súmulas 260 e 478 do STJ",
    "professorTip": "Condomínio: Antissocial = 3/4, multa até 10x! Convenção sem registro = vale entre moradores (Súmula 260 STJ)! Condomínio ganha da HIPOTECA (Súmula 478 STJ)!"
  },
  {
    "id": "mig_civil_057",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito de Laje e Multipropriedade Imobiliária",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Proprietário de casa térrea cedeu a superfície superior de sua construção para que terceiro edificasse e registrasse matrícula própria autônoma no Cartório de Registro de Imóveis como unidade distinta. Qual direito real foi constituído e o titular da laje passa a ser coproprietário do terreno do solo?",
    "options": [
      {
        "letter": "A",
        "text": "Foi constituído condomínio edilício comum, atribuindo-se ao titular da laje 50% de fração ideal do solo, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "B",
        "text": "O titular da laje pode vender livremente sua laje a terceiro sem oferecer direito de preferência ao titular da construção-base, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor."
      },
      {
        "letter": "C",
        "text": "Foi constituído o direito real de laje, que permite a abertura de matrícula própria distinta da matrícula da construção-base."
      },
      {
        "letter": "D",
        "text": "A ruína da construção-base não extingue o direito real de laje em hipótese alguma, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      }
    ],
    "correctAnswer": "C",
    "justification": "Direito Real de Laje (Arts. 1.510-A a 1.510-E CC): matrícula própria autônoma sobre superfície superior ou inferior de construção-base; sem fração ideal do solo; há direito de preferência recíproco na venda (30 dias).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 1.510-A, § 4º, estabelece expressamente que a instituição do direito real de laje NÃO implica a atribuição de fração ideal de terreno ao titular da laje ou a participação proporcional em áreas já edificadas."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 1.510-D, no caso de alienação de qualquer das unidades sobrepostas, terão direito de preferência em igualdade de condições o titular da construção-base e o titular da laje (30 dias)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.510-E, a ruína da construção-base extingue o direito real de laje, salvo se tiver sido instituído sobre o subsolo ou se reconstruída no prazo de 5 anos."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.510-A a 1.510-E e Arts. 1.358-B a 1.358-U do Código Civil",
        "textSnippet": "Direito Real de Laje (Arts. 1.510-A a 1.510-E CC): matrícula própria autônoma sobre superfície superior ou inferior de construção-base; sem fração ideal do solo; há direito de preferência recíproco na venda (30 dias)."
      }
    ],
    "professorTip": "Direito de Laje: tem matrícula PRÓPRIA, NÃO dá fração ideal do solo, tem direito de PREFERÊNCIA recíproco (30 dias)!"
  },
  {
    "id": "mig_civil_058",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Família - Regimes de Bens e Outorga Conjugal (Súmula 332 STJ)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Pessoa com 72 anos de idade casou-se sem pacto antenupcial; além disso, em outro casal submetido ao regime de comunhão parcial de bens, um dos cônjuges doou bem imóvel particular adquirido antes do casamento sem outorga do outro. Quais são as regras vigentes sobre o regime de bens do maior de 70 anos e sobre a outorga conjugal?",
    "options": [
      {
        "letter": "A",
        "text": "Para pessoa maior de 70 anos, a separação obrigatória de bens continua sendo absoluta e irrenunciável, proibindo qualquer pacto antenupcial. Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes."
      },
      {
        "letter": "B",
        "text": "Na comunhão parcial de bens, o cônjuge pode vender sozinho um imóvel particular adquirido antes do casamento sem outorga do outro, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "C",
        "text": "No julgamento do Tema 1236, o STF decidiu que nos casamentos e uniões estáveis envolvendo pessoa maior de 70 anos, o regime de separação obrigatória de bens pode ser afastado por expressa manifestação de vontade das partes mediante escritura pública."
      },
      {
        "letter": "D",
        "text": "A Súmula 377 do STF veda qualquer comunicação de bens adquiridos onerosamente durante o casamento na separação obrigatória, com extensão da responsabilidade patrimonial aos bens presentes e futuros do devedor."
      }
    ],
    "correctAnswer": "C",
    "justification": "Regimes de Bens: > 70 anos (Art. 1.641, II + STF Tema 1236) = separação de bens pode ser afastada por escritura pública! Outorga conjugal (Art. 1.647) = obrigatória para imóvel, fiança e aval em todos os regimes, salvo separação absoluta (convencional).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF no Tema 1236 deu interpretação conforme à CF para tornar o Art. 1.641, II, facultativo mediante escritura pública de escolha de outro regime."
      },
      {
        "letter": "B",
        "explanation": "O Art. 1.647, caput e I, exige vênia conjugal para alienar ou gravar de ônus real bens IMÓVEIS (mesmo particulares) em TODOS os regimes, EXCETO na separação absoluta (e participação final nos aquestos se pactuado)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 377 do STF (e interpretação do STJ nos EREsp 1.623.858), no regime de separação legal de bens comunicam-se os bens adquiridos onerosamente na constância do casamento desde que comprovado o esforço comum."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.639 a 1.688 do Código Civil e STF ARE 1.309.642 (Tema 1236)",
        "textSnippet": "Regimes de Bens: > 70 anos (Art. 1.641, II + STF Tema 1236) = separação de bens pode ser afastada por escritura pública! Outorga conjugal (Art. 1.647) = obrigatória para imóvel, fiança e aval em todos os regimes, salvo separação absoluta (convencional)."
      }
    ],
    "jurisprudence": "STF Tema 1236 (ARE 1.309.642) e Súmula 377 STF",
    "professorTip": "STF Tema 1236: Maior de 70 anos PODE escolher outro regime por escritura pública! Venda de imóvel PARTICULAR na comunhão parcial PRECISA de outorga (só separa absoluta dispensa)!"
  },
  {
    "id": "mig_civil_059",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Família - Alimentos, Prisão Civil e Irrepetibilidade (Súmula 621 STJ)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Devedor de pensão alimentícia deixou de pagar as últimas 12 prestações mensais; o credor executou todas as 12 parcelas sob o rito da prisão civil. Além disso, em ação revisional julgada procedente para reduzir o valor da pensão, o alimentante pediu retroativamente a devolução do que pagou a maior nos meses anteriores. Qual a solução correta?",
    "options": [
      {
        "letter": "A",
        "text": "Todas as 12 parcelas vencidas autorizam a prisão civil do devedor por até 90 dias, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "B",
        "text": "A sentença que reduz os alimentos permite compensar ou cobrar de volta todas as diferenças pagas desde a citação, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "C",
        "text": "A execução pelo rito da prisão civil só compreende as 3 prestações anteriores ao ajuizamento da execução e as que vencerem no curso do processo."
      },
      {
        "letter": "D",
        "text": "A obrigação de prestar alimentos é intransmissível e jamais obriga os avós, sem possibilidade de modificação unilateral das obrigações contratuais sem anuência expressa."
      }
    ],
    "correctAnswer": "C",
    "justification": "Alimentos: Rito da prisão = até 3 últimas parcelas + vincendas (Súmula 309 STJ / Art. 528, § 7º, CPC). Súmula 621 STJ = retroage à citação, mas alimentos são irrepetíveis e incompensáveis. Súmula 358 STJ = cancelamento por maioridade não é automático (exige contraditório).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 309 do STJ limita o rito da prisão civil às 3 últimas prestações anteriores ao ajuizamento + as vincendas no curso do processo."
      },
      {
        "letter": "B",
        "explanation": "Súmula 621 do STJ: Os efeitos da sentença que reduz, majora ou exonera o alimentante do pagamento retroagem à data da citação, vedadas a compensação e a repetibilidade."
      },
      {
        "letter": "D",
        "explanation": "Faltando os pais ou sendo insuficientes os seus recursos, os alimentos podem ser exigidos de forma complementar e subsidiária dos avós (Súmula 596 STJ)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.694 a 1.710 do Código Civil e Súmula 309 / 621 STJ",
        "textSnippet": "Alimentos: Rito da prisão = até 3 últimas parcelas + vincendas (Súmula 309 STJ / Art. 528, § 7º, CPC). Súmula 621 STJ = retroage à citação, mas alimentos são irrepetíveis e incompensáveis. Súmula 358 STJ = cancelamento por maioridade não é automático (exige contraditório)."
      }
    ],
    "jurisprudence": "Súmulas 309, 358, 596 e 621 do STJ",
    "professorTip": "Alimentos: Prisão = SÓ 3 últimas + vincendas (Súmula 309 STJ)! Maioridade NÃO cancela automático (Súmula 358 STJ)! Reduziu? Retroage à citação, mas NÃO devolve o pago (Súmula 621 STJ)!"
  },
  {
    "id": "mig_civil_060",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Sucessões - Sucessão do Cônjuge / Companheiro e Concorrência (Art. 1.829 CC)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Homem casado sob regime de comunhão parcial de bens faleceu deixando esposa (com quem não teve filhos), dois filhos exclusivos do primeiro casamento, bens comuns adquiridos durante o casamento e um imóvel particular herdado antes do casamento. Como se divide a herança à luz do Art. 1.829, I, do CC e do STJ?",
    "options": [
      {
        "letter": "A",
        "text": "Na comunhão parcial, a esposa herda 50% dos bens particulares e concorre com os filhos nos bens comuns, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "B",
        "text": "Na comunhão parcial, a esposa é meeira dos bens comuns e concorre como herdeira com os dois filhos exclusivos do falecido exclusivamente sobre os bens particulares, recebendo 1/3 dos bens particulares."
      },
      {
        "letter": "C",
        "text": "Por concorrer com descendentes, a esposa tem garantia legal de receber no mínimo 1/4 da herança dos bens particulares, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "D",
        "text": "O companheiro em união estável segue regras sucessórias mais restritivas previstas, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 1.829, I, CC + STF Tema 809 + STJ: Companheiro equiparado a cônjuge! Comunhão parcial -> meeiro nos comuns + herda nos particulares. Separação convencional -> herda com descendentes! Comunhão universal e separação obrigatória -> NÃO concorre com descendentes! Reserva de 1/4 só para filhos comuns.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Nos bens comuns na comunhão parcial, o cônjuge já tem a meação (não herda); nos bens particulares, concorre por cabeça com os descendentes (STJ REsp 1.368.123)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.832 CC, a reserva mínima de 1/4 só existe se o cônjuge for ascendente dos herdeiros com quem concorrer; sendo filhos exclusivos do falecido (filiação híbrida/exclusiva), divide-se igualmente (1/3 para cada)."
      },
      {
        "letter": "D",
        "explanation": "O STF declarou inconstitucional o Art. 1.790 CC no RE 878.694 (Tema 809), equiparando integralmente o companheiro ao cônjuge no Art. 1.829 do Código Civil!"
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.790 e 1.829 do Código Civil e STF RE 878.694 (Tema 809)",
        "textSnippet": "Art. 1.829, I, CC + STF Tema 809 + STJ: Companheiro equiparado a cônjuge! Comunhão parcial -> meeiro nos comuns + herda nos particulares. Separação convencional -> herda com descendentes! Comunhão universal e separação obrigatória -> NÃO concorre com descendentes! Reserva de 1/4 só para filhos comuns."
      }
    ],
    "jurisprudence": "STF Tema 809 e STJ REsp 1.368.123",
    "professorTip": "Comunhão Parcial (Sucessão): MEEIRO nos comuns + HERDA nos particulares! Reserva 1/4 = SÓ se filhos forem COMUNS! Companheiro = Cônjuge (STF Tema 809)!"
  },
  {
    "id": "mig_civil_061",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Sucessões - Indignidade vs. Deserdação e Aceitação/Renúncia",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Filho único praticou agressão física grave (tentativa de homicídio doloso) contra o pai, vindo este a falecer semanas depois sem deixar testamento. Os dois netos (filhos do agressor) serão excluídos da herança por indignidade junto com o pai, e a exclusão ocorre de pleno direito sem ação judicial?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, a indignidade opera automaticamente com a condenação penal e impede os netos de herdarem por representação, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "Não, a exclusão por indignidade exige sentença judicial declaratória em ação própria proposta no prazo decadencial de 4 anos da abertura da sucessão, e são pessoais os efeitos da exclusão: os descendentes do herdeiro excluído (netos) sucedem por representação, como se o indigno morto fosse antes da abertura da sucessão."
      },
      {
        "letter": "C",
        "text": "O indigno excluído pode posteriormente renunciar à herança para transferir seus bens a terceiro escolhido, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "D",
        "text": "Para a deserdação de herdeiro necessário, basta escritura pública isolada sem indicação de causa, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Indignidade (Arts. 1.814–1.818): atinge qualquer herdeiro ou legatário; exige ação judicial em 4 anos; efeitos pessoais (filhos do indigno representam como se pré-morto fosse). Deserdação (Arts. 1.961–1.965): só herdeiro necessário, mediante testamento com causa expressa e prova em juízo em 4 anos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A indignidade exige declaração por sentença civil (Art. 1.815) e é personalíssima — os filhos do indigno herdam por representação como se ele pré-morto fosse (diferente da renúncia pura, onde não há direito de representação!)."
      },
      {
        "letter": "C",
        "explanation": "Quem é declarado indigno é excluído como se morto fosse antes do autor da herança; e mesmo na renúncia à herança (Art. 1.811), ninguém sucede por representação ao renunciante (os filhos só herdam por direito próprio se não houver outro herdeiro na mesma classe)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.964 CC, a deserdação exige TESTAMENTO válido com expressa declaração de causa prevista em lei (Arts. 1.962/1.963), devendo a veracidade da causa ser provada em juízo."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.804 a 1.818 e 1.961 a 1.965 do Código Civil",
        "textSnippet": "Indignidade (Arts. 1.814–1.818): atinge qualquer herdeiro ou legatário; exige ação judicial em 4 anos; efeitos pessoais (filhos do indigno representam como se pré-morto fosse). Deserdação (Arts. 1.961–1.965): só herdeiro necessário, mediante testamento com causa expressa e prova em juízo em 4 anos."
      }
    ],
    "professorTip": "Indignidade = sentença em 4 anos + filhos do indigno HERDAM por representação! Renúncia = NÃO tem direito de representação (Art. 1.811)! Deserdação = TESTAMENTO + causa legal + prova!"
  },
  {
    "id": "mig_civil_062",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito Civil",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Sucessões - Testamentos (Ordinários e Especiais) e Codicilo",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Pessoa com 17 anos completos deseja lavrar testamento público dispondo de 40% de seu patrimônio para instituição de caridade (tendo dois filhos menores vivos), bem como redigir um codicilo privado indicando seu enterro e legando móveis e joias de pequeno valor. Esses dois atos são válidos?",
    "options": [
      {
        "letter": "A",
        "text": "Não, pois menor de 18 anos é relativamente incapaz e depende de assistência dos pais para testar. Os efeitos do negócio projetam-se diretamente sobre a esfera patrimonial dos contratantes."
      },
      {
        "letter": "B",
        "text": "Sim, podem testar os maiores de 16 anos independentemente de assistência dos pais; havendo descendentes, pode dispor livremente de até 50%; e o codicilo serve justamente para disposições especiais sobre enterro, esmolas de pouca monta e móveis/roupas/joias de pouco valor."
      },
      {
        "letter": "C",
        "text": "O testamento cerrado (místico) pode ser lido publicamente pelo tabelião antes de ser aprovado e cerrado, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual. A solução aplica-se de modo uniforme tanto às obrigações principais quanto às acessórias."
      },
      {
        "letter": "D",
        "text": "O codicilo exige reconhecimento de firma e registro em cartório de notas com cinco testemunhas, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Testamento (CC): capacidade ativa a partir de 16 anos (sem assistência); formas ordinárias = público (2 testemunhas), cerrado (2 testemunhas) e particular (3 testemunhas). Havendo herdeiros necessários (descendentes, ascendentes, cônjuge/companheiro), reserva-se 50% de legítima. Codicilo (Art. 1.881) = escrito particular datado e assinado para enterro e bens móveis de pequeno valor.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Exceção expressa no Art. 1.860, parágrafo único, do CC: os maiores de 16 anos podem testar sem assistência."
      },
      {
        "letter": "C",
        "explanation": "O testamento cerrado é sigiloso (escrito pelo testador ou a rogo e entregue ao tabelião para aprovação na presença de 2 testemunhas, sem que terceiros conheçam o conteúdo até a abertura judicial)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.881 CC, o codicilo exige apenas escrito particular datado e assinado pelo autor (sem testemunhas obrigatórias)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.857 a 1.911 do Código Civil",
        "textSnippet": "Testamento (CC): capacidade ativa a partir de 16 anos (sem assistência); formas ordinárias = público (2 testemunhas), cerrado (2 testemunhas) e particular (3 testemunhas). Havendo herdeiros necessários (descendentes, ascendentes, cônjuge/companheiro), reserva-se 50% de legítima. Codicilo (Art. 1.881) = escrito particular datado e assinado para enterro e bens móveis de pequeno valor."
      }
    ],
    "professorTip": "Testar pode aos 16 ANOS sem assistência (Art. 1.860, p.u.)! Testemunhas: Público (2), Cerrado (2), Particular (3), Codicilo (0 - só escrito, datado e assinado)!"
  },
  {
    "id": "mig_civil_063",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito das Obrigações - Novação, Compensação, Confusão e Remissão",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa A deve R$ 50.000,00 líquidos e vencidos à Empresa B (decorrentes de prestação de serviços), e a Empresa B deve R$ 50.000,00 líquidos e vencidos à Empresa A (decorrentes de compra de mercadoria). Em outra hipótese, um filho deve R$ 100.000,00 ao pai, que vem a falecer deixando o filho como único herdeiro universal. Quais formas de extinção operam-se respectivamente?",
    "options": [
      {
        "letter": "A",
        "text": "No primeiro caso há novação objetiva automática, e no segundo ocorre transação hereditária, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "B",
        "text": "No primeiro caso opera-se a compensação legal; no segundo caso opera-se a confusão."
      },
      {
        "letter": "C",
        "text": "A compensação legal opera-se mesmo quando uma das dívidas decorre de esbulho, furto ou pensão alimentícia, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "D",
        "text": "Na novação por substituição do devedor (expromissão), exige-se sempre o consentimento do devedor originário, com prevalência da força obrigatória do vínculo negocial e presunção de validade contratual."
      }
    ],
    "correctAnswer": "B",
    "justification": "Extinção sem pagamento direto: Compensação (Art. 368 — dívidas líquidas, vencidas e fungíveis; veda alimentos, furto/esbulho, impenhoráveis); Novação (Art. 360 — cria nova obrigação com animus novandi; expromissão dispensa consentimento do antigo devedor); Confusão (Art. 381 — mesmo sujeito vira credor e devedor).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Novação exige criação de obrigação nova com animus novandi para extinguir a anterior; dívidas recíprocas líquidas e vencidas extinguem-se por compensação."
      },
      {
        "letter": "C",
        "explanation": "O Art. 373 CC proíbe expressamente a compensação quando uma dívida provier de esbulho/furto/roubo, comodato/depósito ou coisa não suscetível de penhora (como alimentos)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 362 CC, a novação por substituição do devedor pode ser efetuada INDEPENDENTEMENTE de consentimento deste (expromissão)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 360 a 388 do Código Civil",
        "textSnippet": "Extinção sem pagamento direto: Compensação (Art. 368 — dívidas líquidas, vencidas e fungíveis; veda alimentos, furto/esbulho, impenhoráveis); Novação (Art. 360 — cria nova obrigação com animus novandi; expromissão dispensa consentimento do antigo devedor); Confusão (Art. 381 — mesmo sujeito vira credor e devedor)."
      }
    ],
    "professorTip": "Compensação = dívidas líquidas, vencidas e fungíveis (NÃO compensa esbulho/furto/alimentos)! Confusão = credor e devedor viram a MESMA pessoa! Expromissão = troca devedor SEM consentimento dele!"
  },
  {
    "id": "mig_civil_064",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito Civil",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Responsabilidade Civil - Dano Reflexo (Ricochete), Nexo e Excludentes",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Trabalhador morre em acidente causado por falha mecânica de ônibus, deixando esposa e filha menor que dele dependiam economicamente. Além do espólio, a esposa e a filha possuem legitimidade própria para pleitear dano moral e pensão mensal? E o que ocorre se motorista avançar contra muro privado para desviar de criança que surgiu subitamente na via (estado de necessidade)?",
    "options": [
      {
        "letter": "A",
        "text": "Como o estado de necessidade exclui a ilicitude, o motorista não precisa indenizar o proprietário do muro atingido, sem possibilidade de modificação unilateral das obrigações contratuais sem anuência expressa. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "Sim, a esposa e a filha têm legitimidade própria por dano moral em ricochete (dano reflexo) e pensão alimentícia indenizatória; e no estado de necessidade contra terceiro inocente (dono do muro), o ato é lícito, mas o motorista deve indenizar o dono do muro inocente, cabendo-lhe ação regressiva contra o culpado pelo perigo."
      },
      {
        "letter": "C",
        "text": "Apenas o espólio da vítima falecida pode pleitear indenização por danos morais decorrentes do óbito, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "D",
        "text": "Na legítima defesa real em que o agente atinge exatamente o agressor injusto sem excesso, subsiste o dever de indenizar o agressor, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 188, 929 e 930 CC: Estado de necessidade ou legítima defesa com erro na execução que atinja terceiro inocente = ato lícito, mas INDENIZA o terceiro inocente + REGRESSO contra o culpado pelo perigo/agressor! Dano em ricochete = direito próprio dos familiares.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Regra importantíssima do Código Civil (Arts. 929 e 930): embora lícito o ato em estado de necessidade, SE o dono da coisa danificada NÃO for culpado pelo perigo, o agente indeniza o inocente e depois cobra em regresso do verdadeiro causador do perigo!"
      },
      {
        "letter": "C",
        "explanation": "O dano moral pela morte (dano em ricochete ou reflexo) é direito próprio dos familiares próximos que sofrem diretamente o abalo pela perda."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 188, I, CC, os atos praticados em legítima defesa regular contra o próprio agressor não constituem atos ilícitos e NÃO geram dever de indenizar (só indeniza se errar o alvo e atingir terceiro inocente — Art. 930, p.u.)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 188, 927 e 948 do Código Civil",
        "textSnippet": "Arts. 188, 929 e 930 CC: Estado de necessidade ou legítima defesa com erro na execução que atinja terceiro inocente = ato lícito, mas INDENIZA o terceiro inocente + REGRESSO contra o culpado pelo perigo/agressor! Dano em ricochete = direito próprio dos familiares."
      }
    ],
    "professorTip": "Estado de Necessidade atingindo INOCENTE (Arts. 929–930 CC): Ato LÍCITO, mas INDENIZA o inocente e cobra REGRESSO do culpado!"
  },
  {
    "id": "mig_civil_065",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Civil",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Atos Unilaterais, Promessa de Recompensa e Enriquecimento Sem Causa",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "ACADEMICA",
    "statement": "Empresário anunciou publicamente recompensa de R$ 10.000,00 a quem localizasse seu cachorro perdido. Antes que qualquer pessoa encontrasse o animal, revogou o anúncio com a mesma publicidade; porém, um cidadão já havia gastado R$ 600,00 em passagens e anúncios para buscá-lo de boa-fé. Qual o direito desse cidadão?",
    "options": [
      {
        "letter": "A",
        "text": "O cidadão tem direito de exigir integralmente a recompensa de R$ 10.000,00 mesmo após a revogação válida antes do achado, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "B",
        "text": "A revogação antes da execução da tarefa é válida, mas o candidato que tiver feito despesas de boa-fé terá direito ao reembolso das despesas realizadas, salvo se quem prometeu provar a impossibilidade de obtenção do resultado."
      },
      {
        "letter": "C",
        "text": "A promessa de recompensa é irrevogável desde o primeiro instante de sua publicação, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "D",
        "text": "A ação de enriquecimento sem causa pode ser proposta livremente mesmo quando a lei conferir outro meio específico de ressarcimento, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      }
    ],
    "correctAnswer": "B",
    "justification": "Promessa de recompensa (Arts. 854–860 CC): obrigação unilateral; se dois acharem ao mesmo tempo, divide; se sucessivos, ganha quem primeiro cumpriu; revogável com mesma publicidade antes do ato (reembolsa despesas de boa-fé). Enriquecimento sem causa (Art. 886): ação subsidiária (3 anos — Art. 206, § 3º, IV).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Se revogada com a mesma publicidade antes de prestado o serviço, não é devida a recompensa, apenas o reembolso das despesas de boa-fé."
      },
      {
        "letter": "C",
        "explanation": "O Art. 856 CC admite revogação com a mesma publicidade antes da execução do fato, salvo se houver assinado prazo determinado para a execução."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 886 do Código Civil, a ação de in rem verso (enriquecimento sem causa) tem natureza SUBSIDIÁRIA: não caberá se a lei conferir ao lesado outros meios para se ressarcir do prejuízo."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 854 a 886 do Código Civil",
        "textSnippet": "Promessa de recompensa (Arts. 854–860 CC): obrigação unilateral; se dois acharem ao mesmo tempo, divide; se sucessivos, ganha quem primeiro cumpriu; revogável com mesma publicidade antes do ato (reembolsa despesas de boa-fé). Enriquecimento sem causa (Art. 886): ação subsidiária (3 anos — Art. 206, § 3º, IV)."
      }
    ],
    "professorTip": "Promessa de Recompensa revogada antes do achado (mesma mídia) = NÃO paga prêmio, mas REEMBOLSA despesas de boa-fé! Enriquecimento sem causa = ação SUBSIDIÁRIA (3 anos)!"
  },
  {
    "id": "mig_civil_066",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito das Coisas - Usucapião de Bens Móveis, Achado e Propriedade Resolúvel",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Colecionador compra quadro de pintura original de boa-fé e com justo título (recibo de galeria), descobrindo após 4 anos que o vendedor não era o legítimo dono; outro cidadão encontra relógio de terceiro furtado sem qualquer título ou boa-fé e o mantém consigo por 4 anos. Quem adquiriu a propriedade por usucapião de bem móvel?",
    "options": [
      {
        "letter": "A",
        "text": "Ambos já adquiriram a propriedade, pois o prazo único da usucapião de bens móveis é de 3 anos. A solução aplica-se de modo uniforme tanto às obrigações principais quanto às acessórias."
      },
      {
        "letter": "B",
        "text": "O primeiro colecionador adquiriu a propriedade por usucapião ordinária de bem móvel; o segundo não adquiriu ainda, pois a usucapião extraordinária de bem móvel exige posse contínua e incontestada por 5 anos."
      },
      {
        "letter": "C",
        "text": "Não existe usucapião para bens móveis no Código Civil brasileiro, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "D",
        "text": "Na descoberta, quem encontra tem direito automático à propriedade imediata se o dono não aparecer em 15 dias, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      }
    ],
    "correctAnswer": "B",
    "justification": "Aquisição de coisa móvel: Usucapião ordinária = 3 anos (justo título + boa-fé); Extraordinária = 5 anos (sem título/boa-fé). Descoberta (achado) = dever de entregar + recompensa mínima de 5% (achádego).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Art. 1.260 CC: usucapião ordinária de móvel (com justo título + boa-fé) = 3 anos; Art. 1.261 CC: usucapião extraordinária de móvel (sem título/boa-fé) = 5 anos."
      },
      {
        "letter": "C",
        "explanation": "Os Arts. 1.260 e 1.261 regulam expressamente a usucapião ordinária (3 anos) e extraordinária (5 anos) de coisa móvel."
      },
      {
        "letter": "D",
        "explanation": "Quem acha coisa alheia perdida tem dever de restituir ou entregar à autoridade, fazendo jus a recompensa não inferior a 5% do valor + indenização de despesas (Art. 1.234 CC)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.260 a 1.262 e 1.359 a 1.360 do Código Civil",
        "textSnippet": "Aquisição de coisa móvel: Usucapião ordinária = 3 anos (justo título + boa-fé); Extraordinária = 5 anos (sem título/boa-fé). Descoberta (achado) = dever de entregar + recompensa mínima de 5% (achádego)."
      }
    ],
    "professorTip": "Usucapião MÓVEL: Ordinária = 3 anos (título + boa-fé); Extraordinária = 5 anos (sem título)! Achado (Art. 1.234) = recompensa >= 5%!"
  },
  {
    "id": "mig_civil_067",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Família - Filiação, Adoção e Poder Familiar",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Genitor é condenado criminalmente em definitivo por homicídio doloso praticado contra o outro genitor de seu filho menor. Além da pena criminal, qual medida civil recai sobre o poder familiar e como se aplica o reconhecimento de paternidade socioafetiva segundo o STF?",
    "options": [
      {
        "letter": "A",
        "text": "A perda do poder familiar é apenas sanção temporária (suspensão) e jamais ocorre por crime contra o outro genitor, com ineficácia jurídica plena do negócio celebrado perante terceiros de boa-fé e credores. Essa consequência preserva a segurança jurídica e a estabilidade das relações privadas."
      },
      {
        "letter": "B",
        "text": "Do Código Civil, perderá por ato judicial o poder familiar aquele que praticar homicídio, feminicídio ou lesão corporal grave/seguida de morte contra outrem igualmente titular do mesmo poder familiar."
      },
      {
        "letter": "C",
        "text": "A existência de pai registral socioafetivo exclui juridicamente a possibilidade de reconhecimento da paternidade biológica (vedada multiparentalidade), em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "D",
        "text": "O reconhecimento voluntário de filho havido fora do casamento pode ser revogado livremente por arrependimento em escritura pública, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      }
    ],
    "correctAnswer": "B",
    "justification": "Poder Familiar (Art. 1.638, p.u.): perde judicialmente quem mata/lesiona gravemente o outro genitor ou descendente, ou pratica crimes sexuais contra vulnerável. Reconhecimento de filho = irrevogável (Art. 1.610). STF Tema 622 = admite multiparentalidade (socioafetivo + biológico).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 1.638, parágrafo único, prevê expressamente a PERDA definitiva do poder familiar por decisão judicial nessas hipóteses gravíssimas."
      },
      {
        "letter": "C",
        "explanation": "O STF no RE 898.060 (Tema 622) admitiu expressamente a MULTIPARENTALIDADE, coexistindo vínculo socioafetivo e biológico com plenos efeitos alimentares e sucessórios."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.609 e Art. 1.610 do CC, o reconhecimento dos filhos é IRREVOGÁVEL (salvo vício de consentimento/falsidade comprovada judicialmente) e não pode ser subordinado a condição ou termo."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.596 a 1.638 do Código Civil e Lei 13.715/2018",
        "textSnippet": "Poder Familiar (Art. 1.638, p.u.): perde judicialmente quem mata/lesiona gravemente o outro genitor ou descendente, ou pratica crimes sexuais contra vulnerável. Reconhecimento de filho = irrevogável (Art. 1.610). STF Tema 622 = admite multiparentalidade (socioafetivo + biológico)."
      }
    ],
    "jurisprudence": "STF Tema 622 (RE 898.060)",
    "professorTip": "STF Tema 622: Socioafetivo NÃO exclui biológico -> MULTIPARENTALIDADE! Reconhecimento de filho = IRREVOGÁVEL! Crime grave contra outro genitor/filho = PERDA do poder familiar!"
  },
  {
    "id": "mig_civil_068",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Responsabilidade Civil na Internet (Marco Civil da Internet) e Súmula 479 STJ",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Cliente de banco teve conta invadida por fraudadores que realizaram transferências via aplicativo bancário em razão de falha na segurança digital da instituição; em outra hipótese, usuário sofreu ofensa moral por postagem de terceiro em rede social e notificou extrajudicialmente a plataforma para remover o conteúdo difamatório (sem envolver nudez/sexo não autorizado). Como responde cada instituição?",
    "options": [
      {
        "letter": "A",
        "text": "O banco se exonera integralmente alegando culpa exclusiva de terceiro hacker, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      },
      {
        "letter": "B",
        "text": "A instituição financeira responde objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias."
      },
      {
        "letter": "C",
        "text": "Pelo texto vigente do Marco Civil, mesmo a divulgação não consentida de vídeo íntimo exige ordem judicial prévia para responsabilizar o provedor, com sujeição dos efeitos patrimoniais às regras gerais de prescrição e mora obrigacional."
      },
      {
        "letter": "D",
        "text": "A responsabilidade civil do banco por fortuito externo (como assalto à mão armada fora das dependências bancárias) também é objetiva, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      }
    ],
    "correctAnswer": "B",
    "justification": "Súmula 479 STJ: instituições financeiras respondem objetivamente por fraudes/delitos de terceiros em operações bancárias (fortuito interno). Marco Civil (Lei 12.965/14): Art. 19 (regra geral: ordem judicial para provedor de aplicação responder por conteúdo de terceiro); Art. 21 (nudez/ato sexual sem autorização: notificação extrajudicial).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Fraude bancária por vulnerabilidade/operação bancária é fortuito INTERNO (não exclui responsabilidade do banco — Súmula 479 STJ)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 21 do Marco Civil traz a exceção do \"notice and takedown\" extrajudicial: basta notificação do participante para conteúdo de nudez ou atos sexuais privados sem autorização."
      },
      {
        "letter": "D",
        "explanation": "A Súmula 479 STJ restringe-se a fortuito interno no âmbito de operações bancárias."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Art. 19 da Lei nº 12.965/2014 e Súmula 479 STJ",
        "textSnippet": "Súmula 479 STJ: instituições financeiras respondem objetivamente por fraudes/delitos de terceiros em operações bancárias (fortuito interno). Marco Civil (Lei 12.965/14): Art. 19 (regra geral: ordem judicial para provedor de aplicação responder por conteúdo de terceiro); Art. 21 (nudez/ato sexual sem autorização: notificação extrajudicial)."
      }
    ],
    "jurisprudence": "Súmula nº 479 do STJ",
    "professorTip": "Súmula 479 STJ = Fraude bancária é fortuito INTERNO (Banco responde OBJETIVO)! Marco Civil Art. 21 (nudez íntima) = notificação extrajudicial já obriga retirar!"
  },
  {
    "id": "mig_civil_069",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito Civil",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direito das Obrigações - Pagamento Indevido e Repetição",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Devedor pagou voluntariamente uma dívida que já estava prescrita (obrigação natural) e, dias depois, percebeu que o prazo prescricional havia se esgotado antes do pagamento, ajuizando ação para exigir a restituição do valor pago. O pedido procede?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, pois o pagamento de obrigação prescrita configura pagamento indevido restituível com juros. A solução aplica-se de modo uniforme tanto às obrigações principais quanto às acessórias."
      },
      {
        "letter": "B",
        "text": "Não procede. não se pode repetir o que se pagou para solver dívida prescrita, ou cumprir obrigação judicialmente inexigível."
      },
      {
        "letter": "C",
        "text": "Quem pagou dívida condicional antes de implementada a condição suspensiva jamais pode repetir o valor, com impedimento à compensação ou repetição dos valores prestados na relação negocial."
      },
      {
        "letter": "D",
        "text": "Não é permitida a restituição do pagamento indevido mesmo quando quem pagou provar erro essencial sobre a existência da dívida, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Arts. 876–883 CC: quem recebe o que lhe não era devido deve restituir (provado o erro por quem pagou voluntariamente). Exceções (não cabe repetição): pagamento de dívida prescrita ou obrigação inexigível (Art. 882) e pagamento para fim ilícito/imoral (Art. 883 — reverte a estabelecimento local de beneficência).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Dívida prescrita não é inexistente (extingue apenas a pretensão exigível em juízo — obrigação natural); quem paga dívida prescrita paga bem e não pode pedir devolução (soluti retentio)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 878 CC, aos frutos, acessões, benfeitorias e deteriorações sobrevindas à coisa dada em pagamento indevido aplica-se o regime da posse de boa/má-fé; e quem paga antes de implementada condição pode repetir por erro."
      },
      {
        "letter": "D",
        "explanation": "Quem recebeu indevidamente fica obrigado a restituir (Art. 876), incumbindo a quem pagou voluntariamente provar o erro (Art. 877 CC)."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 876 a 883 do Código Civil",
        "textSnippet": "Arts. 876–883 CC: quem recebe o que lhe não era devido deve restituir (provado o erro por quem pagou voluntariamente). Exceções (não cabe repetição): pagamento de dívida prescrita ou obrigação inexigível (Art. 882) e pagamento para fim ilícito/imoral (Art. 883 — reverte a estabelecimento local de beneficência)."
      }
    ],
    "professorTip": "Pagou dívida PRESCRITA ou de JOGO? NÃO pode pedir de volta (Art. 882 CC — obrigação natural)! Pagou por fim ilícito (Art. 883)? Também NÃO devolve (vai para beneficência)!"
  },
  {
    "id": "mig_civil_070",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direitos da Personalidade - Proteção ao Nome, Imagem e Direito ao Esquecimento",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Revista comercial publica fotografia de modelo profissional em anúncio publicitário sem autorização prévia para fins econômicos, sem qualquer conotação ofensiva à honra; paralelamente, ex-acusado absolvido décadas atrás pede remoção permanente de reportagens históricas verídicas sobre crime famoso com base no \"direito ao esquecimento\". Qual a decisão jurídica correta?",
    "options": [
      {
        "letter": "A",
        "text": "Independe de prova do prejuízo a indenização pela publicação não autorizada de imagem de pessoa com fins econômicos ou comerciais (dano in re ipsa)."
      },
      {
        "letter": "B",
        "text": "No uso comercial da foto sem autorização, não cabe indenização se não houver ofensa vexatória ou prova concreta de prejuízo financeiro, em conformidade com a boa-fé objetiva e a função social dos negócios jurídicos patrimoniais."
      },
      {
        "letter": "C",
        "text": "O STF consagrou o direito ao esquecimento como direito fundamental absoluto para apagar todos os registros jornalísticos após 10 anos, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "D",
        "text": "O pseudônimo adotado para atividades lícitas não goza da proteção legal atribuída ao nome civil, observada a distinção dogmática entre os planos da existência, validade e eficácia do ato."
      }
    ],
    "correctAnswer": "A",
    "justification": "Súmula 403 STJ: uso comercial/econômico de imagem sem autorização = dano moral in re ipsa (não precisa provar prejuízo). STF Tema 786: direito ao esquecimento genérico contra fatos verídicos lícitos é incompatível com a CF/88 (eventuais abusos são apurados caso a caso).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pela Súmula 403 STJ, a utilização não autorizada da imagem para fins econômicos/comerciais gera dever de indenizar independentemente de ofensa à honra ou prova de prejuízo."
      },
      {
        "letter": "C",
        "explanation": "No Tema 786 (RE 1.010.606), o STF fixou expressamente: \"É incompatível com a Constituição a ideia de um direito ao esquecimento, assim entendido o poder de obstar, em razão da passagem do tempo, a divulgação de fatos ou dados verídicos e licitamente obtidos.\""
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 19 do Código Civil, o pseudônimo adotado para atividades lícitas goza da proteção que se dá ao nome."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 11 a 21 do Código Civil, Súmula 403 STJ e STF Tema 786",
        "textSnippet": "Súmula 403 STJ: uso comercial/econômico de imagem sem autorização = dano moral in re ipsa (não precisa provar prejuízo). STF Tema 786: direito ao esquecimento genérico contra fatos verídicos lícitos é incompatível com a CF/88 (eventuais abusos são apurados caso a caso)."
      }
    ],
    "jurisprudence": "STF Tema 786 e Súmula 403 STJ",
    "professorTip": "Súmula 403 STJ: Foto em propaganda sem autorização = indeniza SEM provar prejuízo! STF Tema 786 = Direito ao Esquecimento genérico é INCOMPATÍVEL com a CF/88!"
  },
  {
    "id": "mig_civil_071",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito Civil",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito Civil",
    "topic": "Direitos Reais - Superfície, Usufruto, Uso e Habitação",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Viúva residia com o marido em imóvel único residencial da família ao tempo do óbito dele (regime de comunhão parcial). Independentemente do regime de bens e sem prejuízo da herança que lhe caiba, qual direito real ela titulariza sobre o imóvel de moradia da família e quando ele se extingue?",
    "options": [
      {
        "letter": "A",
        "text": "Direito real de habitação; já o usufruto convencional extingue-se sempre com a morte do usufrutuário ou termo ajustado, sendo inalienável."
      },
      {
        "letter": "B",
        "text": "A viúva só tem direito real de habitação se tiver sido casada pelo regime de comunhão universal de bens, com manutenção da vinculação jurídica das partes até a extinção regular da obrigação."
      },
      {
        "letter": "C",
        "text": "O direito de usufruto pode ser transmitido aos herdeiros do usufrutuário por testamento após sua morte, com autorização ao credor para exigir o adimplemento integral desde o vencimento pactuado."
      },
      {
        "letter": "D",
        "text": "O direito real de superfície admite que o superficiário plante ou construa em terreno alheio sem possibilidade de transferência a terceiros ou herdeiros."
      }
    ],
    "correctAnswer": "A",
    "justification": "Direito Real de Habitação Sucessório (Art. 1.831 CC): vitalício, gratuito, qualquer regime de bens, único imóvel residencial a inventariar (estendido a companheiro e oponível inclusive contra filhos exclusivos do de cujus — STJ). Usufruto: inalienável, intransmissível por herança (cede-se só o exercício). Superfície: transmissível inter vivos e mortis causa.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 1.831 CC garante o direito real de habitação ao cônjuge sobrevivente \"qualquer que seja o regime de bens\" (e ao companheiro sobrevivente por equiparação/Art. 7º Lei 9.278/96), desde que seja o único imóvel residencial a inventariar."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 1.393 e Art. 1.410, I, do CC, não se pode transferir o usufruto por alienação (apenas ceder gratuitamente ou onerosamente seu EXERCÍCIO), extinguindo-se pela morte do usufrutuário."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 1.372 CC, o direito de superfície pode transferir-se a terceiros e, por morte do superficiário, aos seus herdeiros."
      }
    ],
    "statuteReferences": [
      {
        "code": "Código Civil",
        "article": "Arts. 1.369 a 1.416 do Código Civil",
        "textSnippet": "Direito Real de Habitação Sucessório (Art. 1.831 CC): vitalício, gratuito, qualquer regime de bens, único imóvel residencial a inventariar (estendido a companheiro e oponível inclusive contra filhos exclusivos do de cujus — STJ). Usufruto: inalienável, intransmissível por herança (cede-se só o exercício). Superfície: transmissível inter vivos e mortis causa."
      }
    ],
    "professorTip": "Habitação do Viúvo (Art. 1.831): vitalício, gratuito, QUALQUER regime de bens! Usufruto: NUNCA passa para herdeiro nem se vende (só cede o exercício)! Superfície: passa a terceiros e herdeiros!"
  }
];
