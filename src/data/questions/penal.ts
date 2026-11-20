import { LegalQuestion } from '../../types';

export const PENAL_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab38_penal_04',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Penal',
    topic: 'Teoria do Crime - Ilicitude e Legítima Defesa',
    difficulty: 'Médio',
    statement: `Roberto caminhava tranquilamente por uma praça pública à noite quando foi abordado por Samuel, que, empunhando uma faca e em tom ameaçador, exigiu a entrega imediata de seu celular e carteira. Roberto, que é faixa preta em artes marciais, desferiu um único golpe certeiro no braço armado de Samuel, fazendo a faca cair. Imediatamente após desarmar Samuel e vê-lo caído ao solo atordoado e sem qualquer capacidade de reação imediata, Roberto, tomado por forte cólera, apanhou a faca e desferiu três golpes profundos no abdômen de Samuel, causando-lhe a morte.
Considerando estritamente os fatos narrados e o Código Penal brasileiro, a conduta de Roberto em relação à morte de Samuel configura:`,
    options: [
      {
        letter: 'A',
        text: 'Legítima defesa própria completa, excluindo a ilicitude de sua conduta, em face da agressão injusta inicial perpetrada pela vítima.'
      },
      {
        letter: 'B',
        text: 'Excesso doloso na legítima defesa, devendo Roberto responder pelo crime de homicídio doloso.'
      },
      {
        letter: 'C',
        text: 'Excesso culposo na legítima defesa, respondendo Roberto unicamente por homicídio culposo, em virtude da ausência de dolo originário.'
      },
      {
        letter: 'D',
        text: 'Exercício regular de direito, visto que todo cidadão tem a prerrogativa legal de reagir a assaltos em via pública.'
      }
    ],
    correctAnswer: 'B',
    justification: `A legítima defesa exige o uso moderado dos meios necessários para repelir injusta agressão 'atual ou iminente' (art. 25 do CP). No instante em que Roberto desarmou Samuel e este se encontrava no chão sem oferecer risco, cessou a atualidade da agressão. Ao pegar a faca e esfaquear a vítima caída com ânimo vingativo, Roberto incidiu em nítido excesso doloso na legítima defesa (art. 23, parágrafo único, do CP), respondendo por homicídio doloso.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. A legítima defesa cessa com a neutralização da agressão injusta. Golpes desferidos após a cessação caracterizam excesso punível.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O excesso culposo decorre de imprudência, imperícia ou negligência na contenção. Golpes reiterados com faca contra vítima inerme demonstram vontade livre e consciente de matar (dolo direto).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O exercício regular de direito não autoriza vindita privada nem execução sumária de agressor já desarmado.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 23, Parágrafo Único',
        textSnippet: 'O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo.'
      },
      {
        code: 'Código Penal',
        article: 'Art. 25',
        textSnippet: 'Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.'
      }
    ],
    professorTip: 'Atenção aos limites temporais da legítima defesa! Cessada a agressão ("vítima no chão atordoada"), qualquer ato subsequente configura EXCESSO. Se decorrente de dolo, responde pelo crime doloso!'
  },
  {
    id: 'oab39_penal_02',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Penal',
    topic: 'Desistência Voluntária e Arrependimento Eficaz (Art. 15 CP)',
    difficulty: 'Médio',
    statement: `Bruno, imbuído de animus necandi contra seu desafeto Caio, adquiriu um revólver calibre .38 municiado com 6 cartuchos. Bruno surpreendeu Caio em uma rua deserta e efetuou dois disparos em direção ao peito da vítima, atingindo-a. Caio caiu ao solo gemendo de dor, porém lúcido. Bruno ainda possuía quatro projéteis intactos no tambor da arma e plena condição física e material de prosseguir atirando até ceifar a vida de Caio. Contudo, ao ver a agonia do desafeto, Bruno guardou a arma, telefonou para o SAMU prestando socorro imediato e permaneceu no local até a chegada da ambulância. Em decorrência do socorro tempestivo, Caio sobreviveu, sofrendo apenas lesões corporais de natureza leve.
Diante da dogmática penal brasileira, a conduta de Bruno configura:`,
    options: [
      {
        letter: 'A',
        text: 'Tentativa de homicídio qualificado, aplicando-se a causa de diminuição de pena de um a dois terços prevista no Art. 14, II do CP.'
      },
      {
        letter: 'B',
        text: 'Arrependimento eficaz, respondendo Bruno apenas pelos atos já praticados (crime de lesão corporal leve).'
      },
      {
        letter: 'C',
        text: 'Desistência voluntária, respondendo Bruno apenas pelo crime de porte ilegal de arma de fogo.'
      },
      {
        letter: 'D',
        text: 'Arrependimento posterior, com redução de pena na terceira fase de dosimetria pelo ressarcimento do dano hospitalar.'
      }
    ],
    correctAnswer: 'B',
    justification: `O caso é de clássico ARREPENDIMENTO EFICAZ (segunda parte do Art. 15 do CP - "ponte de ouro"). Como Bruno já havia efetuado os disparos aptos a causar a morte (esgotou os atos executórios imediatos de lesão vital), mas agiu ativamente prestando socorro e logrando impedir que o resultado morte se consumasse, afasta-se a tentativa de homicídio e o agente responde apenas pelos atos já praticados (lesão corporal consumada).`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. O art. 15 do CP expressamente desqualifica a tentativa de homicídio, aplicando a responsabilização apenas pelos atos consumados.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Na desistência voluntária o agente interrompe a execução antes de esgotar o potencial letal; quando já produziu o ferimento letal e atua para impedir a morte, trata-se de arrependimento eficaz.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O arrependimento posterior (art. 16 CP) pressupõe crime cometido sem violência ou grave ameaça à pessoa.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 15',
        textSnippet: 'O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados.'
      }
    ],
    professorTip: 'Fórmula de Frank do Professor JurisMentor: "Posso prosseguir, mas não quero" = Desistência Voluntária (Art. 15, 1ª parte). "Já executei o ataque, mas evitei a morte chamando o resgate" = Arrependimento Eficaz (Art. 15, 2ª parte). Nos dois, só responde pelos atos já praticados (lesão corporal)!'
  },
  {
    id: 'oab37_penal_03',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Penal',
    topic: 'Furto Qualificado mediante Fraude vs Estelionato',
    difficulty: 'Difícil',
    statement: `Viviane compareceu a uma concessionária de veículos de luxo passando-se falsamente por potencial compradora de um automóvel importado. Viviane solicitou ao vendedor para realizar um test drive acompanhada por ele. Durante o trajeto, Viviane pediu para o vendedor descer do veículo por um instante sob o pretexto de inspecionar um suposto ruído anormal no pneu traseiro. No momento em que o funcionário desembarcou e agachou-se para verificar o pneu, Viviane acelerou bruscamente o veículo em alta velocidade, fugindo do local e dele assenhoreando-se definitivamente.
Diante da distinção dogmática entre os crimes patrimoniais no Código Penal, a conduta de Viviane tipifica:`,
    options: [
      {
        letter: 'A',
        text: 'Furto qualificado mediante fraude (Art. 155, § 4º, II do CP).'
      },
      {
        letter: 'B',
        text: 'Estelionato comum (Art. 171, caput do CP).'
      },
      {
        letter: 'C',
        text: 'Apropriação indébita (Art. 168 do CP).'
      },
      {
        letter: 'D',
        text: 'Roubo impróprio (Art. 157, § 1º do CP).'
      }
    ],
    correctAnswer: 'A',
    justification: `A jurisprudência pacífica do Superior Tribunal de Justiça (STJ) e do STF estabelece o critério distintivo: no FURTO MEDIANTE FRAUDE, a fraude é empregada para burlar a vigilância da vítima e subtrair a coisa sem que ela perceba ou consinta na entrega da posse definitiva. No ESTELIONATO, a fraude induz a vítima a erro, e a própria vítima entrega espontaneamente a posse definitiva e desvencilha-se do bem. Como a vítima desceu apenas para olhar o pneu e não entregou a posse definitiva à ré, Viviane subtraiu o carro aproveitando-se da distração criada pela fraude (Furto Qualificado).`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. No estelionato, a vítima entrega voluntariamente a posse e propriedade iludida pela fraude.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Na apropriação indébita, o agente já detém a posse mansa, pacífica e lícita desvencilhada da vigilância imediata.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Não houve violência ou grave ameaça à pessoa.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 155, § 4º, II',
        textSnippet: 'A pena é de reclusão de dois a oito anos, e multa, se o crime é cometido: (...) II - com abuso de confiança, ou mediante fraude, escalada ou destreza;'
      }
    ],
    jurisprudence: 'STJ, CC 164.254/SP: No furto mediante fraude, o ardil é utilizado para diminuir a vigilância da vítima e viabilizar a subtração da res; no estelionato, a fraude faz com que a vítima, ludibriada, entregue voluntariamente o bem.',
    professorTip: 'Macete definitivo da FGV: A vítima entregou o bem achando que era negócio legítimo? = ESTELIONATO. A fraude foi um golpe para o agente pegar a coisa escondido ou na distração? = FURTO MEDIANTE FRAUDE!'
  },
  {
    id: 'oab36_penal_04',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Penal',
    topic: 'Crimes contra a Administração Pública - Peculato vs Concussão vs Corrupção',
    difficulty: 'Médio',
    statement: `Marcos, fiscal de posturas do Município, durante fiscalização em estabelecimento comercial regular, exigiu do proprietário, o comerciante Sílvio, o pagamento da quantia de R$ 5.000,00 para não aplicar uma penalidade administrativa inventada. Sílvio, atemorizado pela autoridade do cargo de Marcos, efetuou o pagamento via Pix no dia seguinte. Marcos utilizou a quantia para despesas pessoais.
Considerando estritamente os crimes praticados por funcionário público contra a administração em geral, a conduta de Marcos amolda-se perfeitamente ao tipo penal de:`,
    options: [
      {
        letter: 'A',
        text: 'Concussão (Art. 316 do Código Penal).'
      },
      {
        letter: 'B',
        text: 'Corrupção passiva (Art. 317 do Código Penal).'
      },
      {
        letter: 'C',
        text: 'Prevaricação (Art. 319 do Código Penal).'
      },
      {
        letter: 'D',
        text: 'Extorsão comum (Art. 158 do Código Penal).'
      }
    ],
    correctAnswer: 'A',
    justification: `O crime de CONCUSSÃO (Art. 316 do CP) consiste em 'exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida'. O verbo núcleo é EXIGIR em razão da função pública. Na corrupção passiva (Art. 317), os verbos são solicitar, receber ou aceitar promessa. Como o fiscal de posturas 'exigiu' expressamente a quantia com base no temor de sua autoridade funcional, cometeu concussão consumada.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Na corrupção passiva não há exigência impositiva com temor de autoridade, mas solicitação ou recebimento acordado.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Prevaricação é retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal, sem exigir dinheiro.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A extorsão do art. 158 exige violência ou grave ameaça comum física/moral, enquanto na concussão a coerção decorre do metus publicae potestatis (temor da autoridade pública).'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 316',
        textSnippet: 'Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida: Pena - reclusão, de 2 a 12 anos, e multa.'
      }
    ],
    professorTip: 'Tabela Mnemônica dos Verbos Funcionais: EXIGIR = CONCUSSÃO (Art. 316). SOLICITAR / RECEBER = CORRUPÇÃO PASSIVA (Art. 317). DEIXAR DE FAZER por preguiça/amizade = PREVARICAÇÃO (Art. 319)!'
  },
  {
    id: 'pcsp_penal_05',
    exam: 'Concurso Delegado de Polícia Civil - VUNESP / 2023',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2023,
    subject: 'Direito Penal',
    topic: 'Concurso de Pessoas e Cooperação Dolosamente Distinta (Art. 29, § 2º CP)',
    difficulty: 'Difícil',
    statement: `Leonardo e Thiago ajustaram a prática de furto em uma residência durante a madrugada, acertando expressamente que ingressariam no imóvel desarmados apenas enquanto os moradores estivessem viajando. Durante a execução, Leonardo permaneceu do lado de fora na calçada vigiando a aproximação de terceiros. Thiago entrou no imóvel e encontrou inesperadamente um dos moradores acordado na sala. Sem qualquer combinação prévia com Leonardo e sem que este soubesse, Thiago sacou uma faca que levava oculta nas roupas e desferiu golpe letal contra o morador para garantir a fuga com os pertences.
Diante da regra do concurso de pessoas e da cooperação dolosamente distinta no Código Penal, a responsabilidade penal de Leonardo pela morte do morador:`,
    options: [
      {
        letter: 'A',
        text: 'Será de latrocínio consumado em coautoria com Thiago, pois em crime de roubo ou furto todos respondem pelo resultado mais grave independente do dolo.'
      },
      {
        letter: 'B',
        text: 'Será pela pena do crime menos grave que quis participar (furto), aumentada até a metade se o resultado mais grave era previsível pelas circunstâncias fáticas.'
      },
      {
        letter: 'C',
        text: 'Ficará extinta por atipicidade da conduta, em razão da quebra do nexo causal decorrente de fato exclusivo de terceiro.'
      },
      {
        letter: 'D',
        text: 'Será desclassificada unicamente para favorecimento real, haja vista sua permanência fora do domicílio da vítima.'
      }
    ],
    correctAnswer: 'B',
    justification: `O Art. 29, § 2º, do Código Penal consagra o instituto do 'desvio subjetivo de conduta' ou 'cooperação dolosamente distinta': se algum dos concorrentes quis participar de crime menos grave (Leonardo combinou apenas furto sem arma), ser-lhe-á aplicada a pena deste; essa pena será aumentada até a metade, na hipótese de ter sido previsível o resultado mais grave. Trata-se de garantia individual do princípio da culpabilidade para evitar a responsabilidade penal objetiva pelo dolo de outrem.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. No direito penal brasileiro vige o princípio da culpabilidade (nullum crimen sine culpa), sendo vedada a responsabilidade penal objetiva.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Leonardo participou ativamente da subtração vigiando o local, havendo nexo causal e dolo de furto.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O favorecimento real ocorre após a consumação do crime para tornar seguro o proveito; Leonardo participou durante a execução (coautoria funcional).'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 29, § 2º',
        textSnippet: 'Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave.'
      }
    ],
    professorTip: 'Cai muito em concursos de Delegado e OAB: Cooperação Dolosamente Distinta (Art. 29, § 2º CP)! Se você combinou crime menos grave, responde por ele! Se a morte era previsível (ex: entrar em casa com pessoas), a sua pena do crime menos grave sobe até a metade!'
  },
  {
    id: 'oab39_penal_06',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Penal',
    topic: 'Princípio da Insignificância e Requisitos do STF',
    difficulty: 'Fácil',
    statement: `Daniel, primário, subtraiu de um grande hipermercado uma barra de chocolate avaliada em R$ 12,00. Daniel foi abordado ainda no interior do estacionamento pelos seguranças, sendo a mercadoria restituída de imediato e intacta ao patrimônio do estabelecimento comercial. Denunciado pelo Ministério Público por furto simples (Art. 155, caput do CP), a defesa técnica pugnou pela aplicação do princípio da insignificância (crime de bagatela).
À luz da jurisprudência consolidada do Supremo Tribunal Federal (STF) sobre os vetores da insignificância, assinale a afirmativa correta:`,
    options: [
      {
        letter: 'A',
        text: 'A conduta é formalmente típica, porém materialmente atípica, pois preenche cumulativamente a mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade e inexpressividade da lesão jurídica.'
      },
      {
        letter: 'B',
        text: 'O princípio da insignificância é causa de extinção da punibilidade, devendo o juiz aplicar perdão judicial na audiência de custódia.'
      },
      {
        letter: 'C',
        text: 'O princípio da insignificância é expressamente vedado em crimes patrimoniais pelo Código Penal, devendo Daniel ser condenado à pena mínima.'
      },
      {
        letter: 'D',
        text: 'A restituição da coisa afasta a tipicidade formal, configurando hipótese de arrependimento posterior obrigatório com absolvição sumária.'
      }
    ],
    correctAnswer: 'A',
    justification: `O STF (HC 84.412/SP) fixou quatro vetores cumulativos para o reconhecimento do princípio da insignificância no Direito Penal: (a) mínima ofensividade da conduta do agente; (b) nenhuma periculosidade social da ação; (c) reduzidíssimo grau de reprovabilidade do comportamento; e (d) inexpressividade da lesão jurídica provocada. Sua incidência exclui a tipicidade MATERIAL da conduta, tornando o fato um indiferente penal (absolvição por atipicidade com base no Art. 386, III do CPP).`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. A insignificância exclui a tipicidade material do fato, e não a punibilidade.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A bagatela é amplamente aceita pela jurisprudência pacífica do STF e STJ em crimes patrimoniais sem violência.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A restituição não afasta a tipicidade formal nem é arrependimento posterior que gere absolvição (o art. 16 é mera causa de diminuição de pena).'
      }
    ],
    statuteReferences: [
      {
        code: 'Código de Processo Penal',
        article: 'Art. 386, III',
        textSnippet: 'O juiz absolverá o réu, mencionando a causa na parte dispositiva, desde que reconheça: (...) III - não constituir o fato infração penal;'
      }
    ],
    jurisprudence: 'STF, HC 84.412/SP (Min. Celso de Mello): Vetores cumulativos da insignificância que afastam a tipicidade material penal: M.A.R.I. (Mínima ofensividade, Ausência de periculosidade, Reduzido grau de reprovabilidade, Inexpressividade da lesão).',
    professorTip: 'Mnemônico M.A.R.I. do Professor: M-ínima ofensividade, A-usência de periculosidade social, R-eduzida reprovabilidade, I-nexpressividade da lesão jurídica. Lembrar que a insignificância GERA ATIPICIDADE MATERIAL!'
  },
  {
    id: 'faculdade_penal_07',
    exam: 'Prova Semestral de Direito Penal - Teoria Geral do Crime / Faculdade',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Erro de Tipo Essencial (Inevitável vs Evitável)',
    difficulty: 'Médio',
    statement: `Durante uma caçada autorizada em mata fechada e sob intensa neblina, Carlos avista uma silhueta atrás de arbustos emitindo ruídos idênticos aos de um javali selvagem. Confiando plenamente na identificação visual após verificar o perímetro com cautela padrão, Carlos efetua um disparo com sua espingarda. Ao aproximar-se, constata com desespero que alvejou mortalmente seu amigo de caça Alberto, que havia se desgarrado do grupo vestindo camuflagem e rastejando no solo.
À luz da teoria finalista da ação adotada pelo Código Penal brasileiro (Art. 20), a situação descrita configura:`,
    options: [
      {
        letter: 'A',
        text: 'Erro de tipo essencial invencível (escusável), que exclui o dolo e a culpa, tornando o fato atípico.'
      },
      {
        letter: 'B',
        text: 'Erro de proibição escusável, que exclui a ilicitude do comportamento por legítima defesa putativa.'
      },
      {
        letter: 'C',
        text: 'Aberratio ictus (erro na execução), devendo Carlos responder por homicídio culposo com base no Art. 73 do CP.'
      },
      {
        letter: 'D',
        text: 'Erro sobre a pessoa (Art. 20, § 3º do CP), respondendo Carlos por homicídio doloso considerando as qualidades da vítima virtual.'
      }
    ],
    correctAnswer: 'A',
    justification: `Nos termos do Art. 20, caput, do CP, o erro sobre elemento constitutivo do tipo legal de crime (erro de tipo) exclui sempre o dolo. Se o erro for invencível (escusável, inevitável para o homem médio naquelas circunstâncias de neblina e camuflagem), exclui também a culpa, resultando na atipicidade total da conduta. Se fosse vencível (inescusável), permitiria a punição por crime culposo se previsto em lei. Na hipótese de cautela adotada e erro invencível, excluem-se dolo e culpa.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. O erro de proibição recai sobre a ilicitude da conduta ("sei o que faço, mas acho que é permitido por lei"); aqui o erro recai sobre a realidade fática (atirou pensando ser animal e era pessoa).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Na aberratio ictus o agente mira na pessoa certa e atinge terceira pessoa por desvio no tiro; aqui ele mirou exatamente no vulto que supunha ser animal.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. No erro sobre a pessoa o agente quer matar pessoa A e confunde com pessoa B; aqui não havia qualquer dolo de matar ser humano.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 20, caput',
        textSnippet: 'O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas permite a punição por crime culposo, se previsto em lei.'
      }
    ],
    jurisprudence: 'STJ, REsp 1.254.992/PR: A constatação do erro de tipo essencial invencível desconstitui a própria tipicidade penal por ausência do dolo e inviabilidade de imputação a título de culpa.',
    professorTip: 'Macete clássico do Professor JurisMentor: Erro de TIPO = "Não sei o que estou fazendo" (Falsa percepção da realidade -> atinge a tipicidade). Erro de PROIBIÇÃO = "Sei o que faço, mas acho que é lícito" (Falsa percepção da norma -> atinge a culpabilidade).'
  },
  {
    id: 'oab38_penal_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Penal',
    topic: 'Crime Impossível e Flagrante Preparado',
    difficulty: 'Difícil',
    statement: `Rogério, imbuído de ódio contra seu desafeto Bernardo, decide envenená-lo. Rogério adquire um frasco que acreditava conter dose letal de cianeto de potássio, quando na verdade, por engano do comerciante que lhe vendeu substância inócua, comprou puro açúcar refinado. Rogério dissolve todo o pó no café matinal de Bernardo e assiste com prazer ao desafeto ingerir a bebida. Bernardo apenas elogia a doçura do café e segue trabalhando sem qualquer alteração fisiológica.
Considerando a disciplina legal da tentativa e da consumação no Código Penal, a conduta de Rogério:`,
    options: [
      {
        letter: 'A',
        text: 'Configura crime impossível por ineficácia absoluta do meio (Art. 17 do CP), não sendo punível a tentativa.'
      },
      {
        letter: 'B',
        text: 'Configura tentativa de homicídio qualificado por envenenamento (Art. 121, § 2º, III c/c Art. 14, II do CP).'
      },
      {
        letter: 'C',
        text: 'Tipifica crime impossível por impropriedade absoluta do objeto material.'
      },
      {
        letter: 'D',
        text: 'Configura crime putativo por erro de tipo, punível como contravenção penal de perigo.'
      }
    ],
    correctAnswer: 'A',
    justification: `Dispõe o Art. 17 do Código Penal: "Não se pune a tentativa quando, por ineficácia absoluta do meio ou por impropriedade absoluta do objeto, é impossível consumar-se o crime". No caso, açúcar refinado é absolutamente ineficaz e incapaz de causar envenenamento e morte humana, tratando-se de ineficácia absoluta do meio de execução empregado. O Brasil adotou a teoria objetiva temperada (ou intermediária), segundo a qual o crime impossível só se configura quando a ineficácia ou impropriedade for absoluta (se fosse relativa, responderia por tentativa).`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Sendo a ineficácia do meio absoluta, a lei veda expressamente a punição da tentativa.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O objeto material era Bernardo, pessoa humana viva perfeitamente capaz de sofrer morte (o objeto era idôneo; o meio de execução é que era absolutamente ineficaz).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Não existe contravenção penal residual aplicável.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 17',
        textSnippet: 'Não se pune a tentativa quando, por ineficácia absoluta do meio ou por impropriedade absoluta do objeto, é impossível consumar-se o crime.'
      }
    ],
    jurisprudence: 'Súmula 145 do STF: Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação (aplicação do princípio do crime impossível).',
    professorTip: 'Dica do Professor: Distinga Objeto de Meio! Objeto = a pessoa ou coisa sobre a qual recai a conduta (ex: atirar em quem já está morto = impropriedade absoluta do objeto). Meio = a arma ou veneno empregado (açúcar no lugar de veneno, arma de brinquedo descarregada sem munição = ineficácia absoluta do meio)!'
  },
  {
    id: 'oab37_penal_09',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Penal',
    topic: 'Feminicídio e Concurso com Motivo Torpe',
    difficulty: 'Médio',
    statement: `Lucas, inconformado com a decisão de sua ex-esposa Mariana de pôr fim ao relacionamento matrimonial de dez anos, persegue Mariana até a saída de seu trabalho e desfere quatro facadas em seu abdômen em via pública, provocando-lhe a morte. Lucas vociferava durante a agressão que "mulher dele não se separava para ficar com ninguém". O Ministério Público denunciou Lucas por homicídio qualificado por motivo torpe (ciúme e sentimento de posse) e por feminicídio (razões da condição de sexo feminino em violência doméstica).
À luz da jurisprudência consolidada do Superior Tribunal de Justiça (STJ), quanto à capitulação jurídica:`,
    options: [
      {
        letter: 'A',
        text: 'É plenamente legítima a coexistência da qualificadora do feminicídio (natureza objetiva) com qualificadoras de natureza subjetiva, como o motivo torpe.'
      },
      {
        letter: 'B',
        text: 'Ocorre bis in idem indeclinável, pois o feminicídio possui natureza estritamente subjetiva, absorvendo o motivo torpe.'
      },
      {
        letter: 'C',
        text: 'O feminicídio constitui causa especial de aumento de pena da 3ª fase, e não qualificadora autônoma.'
      },
      {
        letter: 'D',
        text: 'A qualificadora do feminicídio somente se aplica se houver prévia concessão de medidas protetivas da Lei Maria da Penha.'
      }
    ],
    correctAnswer: 'A',
    justification: `A 3ª Seção do Superior Tribunal de Justiça (STJ) pacificou o entendimento de que a qualificadora do feminicídio (Art. 121, § 2º, VI do CP) possui NATUREZA OBJETIVA, pois decorre da circunstância de o crime ser cometido contra a mulher por razões da condição de sexo feminino (em contexto de violência doméstica e familiar ou menosprezo/discriminação). Por conseguinte, é plenamente compatível com qualificadoras de NATUREZA SUBJETIVA, tais como o motivo torpe (inciso I) ou o motivo fútil (inciso II), não configurando bis in idem.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Conforme a tese pacificada do STJ, o feminicídio tem natureza objetiva, de modo que não há bis in idem na cumulação com qualificadora subjetiva.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O feminicídio é qualificadora expressa inserida no § 2º, inciso VI, com pena de reclusão de 12 a 30 anos.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A incidência da qualificadora independe de medida protetiva previamente ajuizada ou deferida.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 121, § 2º, VI e § 2º-A',
        textSnippet: 'Considera-se que há razões de condição de sexo feminino quando o crime envolve: I - violência doméstica e familiar; II - menosprezo ou discriminação à condição de mulher.'
      }
    ],
    jurisprudence: 'STJ, AgRg no REsp 1.707.113/MG e Tema Repetitivo: As qualificadoras do motivo torpe (subjetiva) e do feminicídio (objetiva) não são incompatíveis entre si, de modo que sua cumulação não configura bis in idem.',
    professorTip: 'Cai muito na OAB e em Concursos: Feminicídio é qualificadora OBJETIVA! Por isso pode somar com motivo torpe/fútil (que são SUBJETIVOS). Grava isso: O (feminicídio) + S (torpe/fútil) = Pode coexistir!'
  },
  {
    id: 'faculdade_penal_10',
    exam: 'Exame Final de Teoria da Pena - Faculdade de Direito / Magistratura',
    examType: 'FACULDADE',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Aplicação da Pena e Critério Trifásico',
    difficulty: 'Difícil',
    statement: `No julgamento de um réu primário e com bons antecedentes condenado por crime de roubo circunstanciado pelo emprego de arma de fogo (Art. 157, § 2º-A, I do CP), o magistrado sentenciante estabeleceu a seguinte dosimetria: na 1ª fase, fixou a pena-base no mínimo legal de 4 anos; na 2ª fase, reconheceu a atenuante da confissão espontânea (Art. 65, III, "d"), mas manteve a pena em 4 anos afirmando que não pode reduzir aquém do piso legal nesta fase; na 3ª fase, aplicou a majorante de 2/3 pelo emprego de arma de fogo.
A respeito da técnica de individualização da pena adotada pelo magistrado:`,
    options: [
      {
        letter: 'A',
        text: 'A conduta do magistrado está estritamente correta e em consonância com a Súmula 231 do STJ.'
      },
      {
        letter: 'B',
        text: 'A conduta é nula, pois atenuantes legais têm caráter cogente e podem reduzir a pena aquém do mínimo na 2ª fase.'
      },
      {
        letter: 'C',
        text: 'Houve erro crasso, pois a confissão espontânea deveria ser computada na 3ª fase da dosimetria.'
      },
      {
        letter: 'D',
        text: 'O magistrado violou o sistema de Nelson Hungria, pois majorantes e minorantes devem incidir na 1ª fase.'
      }
    ],
    correctAnswer: 'A',
    justification: `O critério trifásico de Nelson Hungria, positivado no Art. 68 do Código Penal, divide-se em: 1ª Fase - fixação da pena-base conforme circunstâncias judiciais do Art. 59; 2ª Fase - cálculo sobre a pena-base considerando agravantes e atenuantes (Arts. 61 a 66); 3ª Fase - aplicação de causas de aumento e de diminuição da parte geral e especial. Conforme a consolidada Súmula 231 do STJ e Tema 190 do STF (RE 597.270/RS com Repercussão Geral), "a incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal". Portanto, o juiz agiu com perfeita legalidade técnica.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Conforme a Súmula 231 do STJ e o STF, a atenuante na 2ª fase não pode reduzir a pena aquém do mínimo legal (apenas causas de diminuição da 3ª fase podem fazê-lo).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A confissão espontânea é circunstância atenuante genérica do Art. 65, III, d do CP, processada exatamente na 2ª fase.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Majorantes e minorantes incidem na 3ª fase, exatamente como feito.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Penal',
        article: 'Art. 68',
        textSnippet: 'A pena-base será fixada atendendo-se ao critério do art. 59 deste Código; em seguida serão consideradas as circunstâncias atenuantes e agravantes; por último, as causas de aumento e de diminuição.'
      }
    ],
    jurisprudence: 'Súmula 231 do STJ: A incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal. (Tese reafirmada pelo STF no Tema 190/RG).',
    professorTip: 'Regra de ouro do Critério Trifásico: 1ª Fase (Pena-base) e 2ª Fase (Agravantes/Atenuantes) NÃO PODEM ULTRAPASSAR os limites mínimo e máximo da cominação legal abstrata (Súmula 231 STJ). SÓ NA 3ª FASE (majorantes e minorantes, ex: tentativa, arma de fogo) a pena pode furar o piso ou o teto!'
  },

  // =========================================================================
];
