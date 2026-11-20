import { LegalQuestion } from '../../types';

export const PROCESSUAL_CIVIL_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab37_proc_civil_05',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Civil',
    topic: 'Tutela Provisória e Cabimento do Agravo de Instrumento',
    difficulty: 'Médio',
    statement: `Em ação de procedimento comum, o magistrado proferiu decisão interlocutória indeferindo o pedido de tutela provisória de urgência antecipada requerida pela autora para fornecimento imediato de cirurgia ortopédica de alto custo. A autora, inconformada com o provimento desfavorável, deseja recorrer imediatamente da decisão interlocutória.
À luz do Código de Processo Civil de 2015, assinale a opção que indica o recurso cabível e o respectivo prazo:`,
    options: [
      { letter: 'A', text: 'Agravo de Instrumento, a ser interposto perante o Tribunal competente, no prazo de 15 dias úteis.' },
      { letter: 'B', text: 'Apelação, a ser interposta perante o juízo de primeiro grau no prazo de 15 dias úteis.' },
      { letter: 'C', text: 'Agravo Retido nos próprios autos, a ser reiterado nas razões de apelação ao final do processo.' },
      { letter: 'D', text: 'Mandado de Segurança direto ao Presidente do Tribunal de Justiça por ausência de previsão recursal.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 1.015, inciso I, do CPC/2015 prevê expressamente o cabimento do Agravo de Instrumento contra decisões interlocutórias que versarem sobre "tutelas provisórias" (seja concessão, modificação ou indeferimento). O recurso deve ser protocolado diretamente no Tribunal de segundo grau no prazo de 15 dias úteis (arts. 1.003, § 5º e 219 do CPC). O agravo retido foi extinto do ordenamento pelo CPC/2015.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A apelação é o recurso cabível contra SENTENÇA (art. 1.009), e não contra decisão interlocutória que aprecia tutela provisória.' },
      { letter: 'C', explanation: 'Incorreta. O Agravo Retido foi extinto com a entrada em vigor do CPC de 2015.' },
      { letter: 'D', explanation: 'Incorreta. O Agravo de Instrumento é expressamente previsto no rol do art. 1.015, I, afastando o cabimento do MS como sucedâneo recursal.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 1.015, I', textSnippet: 'Cabe agravo de instrumento contra as decisões interlocutórias que versarem sobre: I - tutelas provisórias;' },
      { code: 'Código de Processo Civil', article: 'Art. 1.003, § 5º', textSnippet: 'Excetuados os embargos de declaração, o prazo para interpor os recursos e para responder-lhes é de 15 (quinze) dias.' }
    ],
    professorTip: 'Memorize para o CPC: Decisão interlocutória sobre TUTELA PROVISÓRIA (concedeu, negou, revogou) cabe AGRAVO DE INSTRUMENTO na veia (Art. 1.015, I)! Prazo: 15 dias úteis.'
  },
  {
    id: 'oab39_proc_civil_02',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Civil',
    topic: 'Julgamento Antecipado Parcial do Mérito e Recurso Cabível',
    difficulty: 'Difícil',
    statement: `Em ação de cobrança cumulada com reparação de danos morais, o réu contestou impugnando veementemente o pedido de indenização moral, mas reconheceu expressamente a procedência do pedido de cobrança da dívida contratual de R$ 50.000,00. O magistrado proferiu decisão acolhendo e julgando de plano o pedido de cobrança incontverso (art. 356 do CPC), determinando o prosseguimento do feito com perícia apenas quanto aos danos morais.
Contra essa decisão que julga antecipadamente parcela do mérito, cabe qual recurso segundo o CPC/2015:`,
    options: [
      { letter: 'A', text: 'Agravo de Instrumento.' },
      { letter: 'B', text: 'Apelação.' },
      { letter: 'C', text: 'Recurso Ordinário Constitucional.' },
      { letter: 'D', text: 'Apenas Embargos Infringentes.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 356, § 5º do CPC/2015 estabelece expressamente que a decisão proferida com base no julgamento antecipado parcial do mérito é impugnável mediante AGRAVO DE INSTRUMENTO. Não cabe apelação porque o processo principal continua em curso para instrução e julgamento dos pedidos restantes.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A apelação é cabível apenas contra o provimento que extingue a fase cognitiva integralmente (sentença do art. 203, § 1º).' },
      { letter: 'C', explanation: 'Incorreta. O ROC cabe em causas constitucionais de competência originária de tribunais.' },
      { letter: 'D', explanation: 'Incorreta. Os Embargos Infringentes foram abolidos pelo CPC/2015 (substituídos pela técnica de julgamento do art. 942).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 356, § 5º', textSnippet: 'A decisão proferida com base neste artigo é impugnável por agravo de instrumento.' },
      { code: 'Código de Processo Civil', article: 'Art. 1.015, II', textSnippet: 'Cabe agravo de instrumento contra as decisões interlocutórias que versarem sobre: II - mérito do processo;' }
    ],
    professorTip: 'Super clássico da FGV: Juiz julgou antecipadamente uma parte do pedido (Art. 356)? Isso é decisão interlocutória de mérito! O recurso cabível é AGRAVO DE INSTRUMENTO (e não apelação)!'
  },
  {
    id: 'oab38_proc_civil_03',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Civil',
    topic: 'Competência Relativa, Eleição de Foro e Prorrogação',
    difficulty: 'Médio',
    statement: `Duas sociedades empresárias de grande porte celebraram contrato de compra e venda de equipamentos industriais e elegeram, por cláusula expressa, a Comarca de Belo Horizonte como foro competente para dirimir litígios. Contudo, em razão de inadimplemento, a vendedora ajuizou ação de cobrança na Comarca de Salvador (domicílio da ré). A ré foi citada e apresentou contestação, porém não arguiu a preliminar de incompetência territorial.
Com base no art. 64 e 65 do CPC/2015, ocorreu:`,
    options: [
      { letter: 'A', text: 'Prorrogação da competência territorial, tornando o juízo de Salvador plenamente competente para processar e julgar a causa.' },
      { letter: 'B', text: 'Nulidade absoluta e insanável do processo por violação da cláusula de eleição de foro.' },
      { letter: 'C', text: 'Dever do juiz de declinar de ofício a qualquer momento da marcha processual.' },
      { letter: 'D', text: 'Preclusão do direito de cobrar a dívida contratual.' }
    ],
    correctAnswer: 'A',
    justification: `A incompetência territorial é de natureza relativa. Nos termos do art. 64 do CPC/2015, a incompetência relativa deve ser alegada como preliminar de contestação. Se o réu não alegar a incompetência relativa no prazo da resposta, opera-se a prorrogação da competência (art. 65 do CPC), fixando-se a jurisdição do juízo prevento e convalidando todos os atos.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A incompetência relativa gera mera anulabilidade preclusiva, não nulidade absoluta.' },
      { letter: 'C', explanation: 'Incorreta. Em contratos civis/empresariais paritários, o juiz não pode declinar de incompetência territorial relativa de ofício após a citação (Súmula 33 STJ).' },
      { letter: 'D', explanation: 'Incorreta. A preclusão diz respeito apenas à faculdade de alegar a incompetência do foro, não ao direito material.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 65', textSnippet: 'Prorrogar-se-á a competência relativa se o réu não alegar a incompetência em preliminar de contestação.' }
    ],
    jurisprudence: 'Súmula 33 do STJ: A incompetência relativa não pode ser declarada de ofício.',
    professorTip: 'Incompetência Relativa (território/valor) não foi alegada na contestação? PRORROGOU A COMPETÊNCIA! O juiz que não era o do contrato agora virou o juiz competente!'
  },
  {
    id: 'oab36_proc_civil_04',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Processual Civil',
    topic: 'Cumprimento de Sentença e Defesa do Executado',
    difficulty: 'Médio',
    statement: `No curso de um cumprimento de sentença definitivo para pagamento de quantia certa (R$ 100.000,00), o executado foi regularmente intimado na pessoa de seu advogado para pagar o débito no prazo legal de 15 dias. O executado não realizou o pagamento voluntário e pretende impugnar a execução alegando excesso na planilha de cálculo dos juros de mora.
Diante das normas que disciplinam a fase de cumprimento de sentença no CPC/2015:`,
    options: [
      { letter: 'A', text: 'O executado tem novo prazo de 15 dias para apresentar Impugnação ao Cumprimento de Sentença, devendo declarar de imediato na petição o valor que entende correto sob pena de não conhecimento do excesso.' },
      { letter: 'B', text: 'A via processual adequada é a interposição de Embargos à Execução com efeito suspensivo automático.' },
      { letter: 'C', text: 'O executado só pode impugnar se depositar previamente a quantia total executada sem qualquer ressalva.' },
      { letter: 'D', text: 'Não incide multa de 10% se o devedor manifestar intenção de parcelar a dívida na impugnação.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 525, caput do CPC/2015 estabelece que, transcorrido o prazo de 15 dias para pagamento voluntário sem a sua realização, inicia-se automaticamente outro prazo sucessivo de 15 dias para que o executado, independentemente de penhora ou garantia do juízo, apresente Impugnação ao Cumprimento de Sentença. Quando alegar excesso de execução, o executado deve obrigatoriamente declarar o valor incontroverso correto acompanhado de demonstrativo de cálculo discriminado (art. 525, § 4º e § 5º), sob pena de não conhecimento deste fundamento.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Embargos à Execução é a defesa no processo de execução de título EXTRAJUDICIAL (Art. 914), não no cumprimento de sentença.' },
      { letter: 'C', explanation: 'Incorreta. O CPC/2015 eliminou a garantia do juízo prévia obrigatória para oferecimento da impugnação.' },
      { letter: 'D', explanation: 'Incorreta. A multa de 10% e honorários de 10% (art. 523, § 1º) incidem automaticamente pelo não pagamento no prazo inicial.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 525, § 4º e § 5º', textSnippet: 'Quando o executado alegar que o exequente, em excesso de execução, pleiteia quantia superior à resultante da sentença, cumprir-lhe-á declarar de imediato o valor que entende correto, apresentando demonstrativo discriminado e atualizado de seu cálculo. § 5º Não apontado o valor correto... a impugnação será liminarmente rejeitada...' }
    ],
    professorTip: 'Atenção com os prazos: Cumprimento de Sentença = 15 dias para PAGAR. Não pagou? +10% multa + 10% honorários. E a partir daí tem mais 15 dias para IMPUGNAR (declarando quanto acha que deve se alegar excesso)!'
  },
  {
    id: 'oab40_proc_civil_05',
    exam: 'XL Exame de Ordem Unificado (OAB 40) - FGV / 2024',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Teoria Geral dos Recursos - Apelação e Efeito Devolutivo Amplo (Art. 1.013, § 3º)',
    difficulty: 'Difícil',
    statement: `O juiz de primeiro grau extinguiu a petição inicial sem resolução de mérito com base em suposta ilegitimidade passiva ad causam do réu. O autor interpôs apelação demonstrando a evidente pertinência subjetiva do polo passivo. O Tribunal de Justiça, ao analisar a apelação, constatou que o juiz de primeira instância de fato incorreu em erro e afastou a ilegitimidade. A causa já estava madura, com todas as provas produzidas e respeitado o contraditório.
Diante da Teoria da Causa Madura insculpida no Art. 1.013, § 3º do CPC/2015, o Tribunal deve:`,
    options: [
      { letter: 'A', text: 'Julgar desde logo o mérito da ação sem devolver os autos à primeira instância, pois o processo já está em condições de imediato julgamento.' },
      { letter: 'B', text: 'Anular a sentença e obrigatoriamente devolver os autos à comarca de origem para o magistrado proferir nova decisão sob pena de supressão de instância.' },
      { letter: 'C', text: 'Suspender o julgamento e suscitar incidente de assunção de competência perante o Órgão Especial.' },
      { letter: 'D', text: 'Rejeitar a apelação e converter o procedimento em arbitragem obrigatória.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 1.013, § 3º, inciso I do CPC/2015 consagra expressamente a TEORIA DA CAUSA MADURA. Se o Tribunal reformar sentença fundada no art. 485 (sem resolução do mérito) e o processo estiver em condições de imediato julgamento (todas as provas documentadas e respeitado o contraditório), o próprio Tribunal DEVE julgar desde logo o mérito, privilegiando a celeridade e a razoável duração do processo, não ocorrendo vedada supressão de instância.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Devolver os autos quando a causa está madura viola frontalmente o art. 1.013, § 3º do CPC.' },
      { letter: 'C', explanation: 'Incorreta. O IAC pressupõe relevante questão de direito com grande repercussão sem repetição em múltiplos processos, não simples causa madura.' },
      { letter: 'D', explanation: 'Incorreta. A arbitragem exige expressa convenção/cláusula compromissória das partes.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 1.013, § 3º, I', textSnippet: 'Se o processo estiver em condições de imediato julgamento, o tribunal deve decidir desde logo o mérito quando: I - reformar sentença fundada no art. 485;' }
    ],
    professorTip: 'Teoria da Causa Madura: O Tribunal derrubou a extinção sem mérito? Se a causa já está pronta e provada, o Tribunal NÃO DEVOLVE para o juiz, ele mesmo JULGA O MÉRITO NA HORA!'
  },
  {
    id: 'oab38_proc_civil_06',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Civil',
    topic: 'Tutela Provisória de Urgência Antecipada Antecedente (Art. 303 e 304)',
    difficulty: 'Difícil',
    statement: `Diante de urgência contemporânea à propositura da ação (necessidade imediata de cirurgia cardíaca vital recusada por plano de saúde), o advogado ajuizou pedido de tutela antecipada antecedente nos termos do Art. 303 do CPC/2015, limitando-se ao requerimento da tutela e à indicação sucinta do direito. O magistrado deferiu a liminar e intimou o réu para cumprimento. O plano de saúde cumpriu a ordem, forneceu o tratamento, mas NÃO interpôs qualquer recurso contra a decisão liminar.
De acordo com o Art. 304 do CPC/2015, o que ocorre com a tutela antecipada concedida?`,
    options: [
      { letter: 'A', text: 'A tutela antecipada torna-se estável, extinguindo-se o processo sem resolução de mérito, podendo qualquer das partes intentar ação própria para rever, reformar ou invalidar a tutela no prazo decadencial de 2 anos.' },
      { letter: 'B', text: 'A tutela converte-se automaticamente em coisa julgada material irrecorrível e imutável.' },
      { letter: 'C', text: 'O processo é compulsoriamente remetido ao Tribunal de Justiça para reexame necessário.' },
      { letter: 'D', text: 'O autor é obrigado a aditar a petição inicial sob pena de revogação da tutela já concedida.' }
    ],
    correctAnswer: 'A',
    justification: `Nos termos do Art. 304 do CPC/2015, a tutela antecipada concedida em caráter antecedente ESTABILIZA-SE se da decisão que a conceder não for interposto o respectivo recurso (agravo de instrumento). Uma vez estabilizada a tutela, o processo será extinto sem resolução de mérito (§ 1º). A tutela estável NÃO faz coisa julgada material (§ 6º), mas qualquer das partes pode ajuizar ação autônoma para rever, reformar ou invalidá-la no prazo decadencial de 2 (dois) anos (§ 2º e § 5º).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O art. 304, § 6º do CPC afirma expressamente que a estabilização da tutela não faz coisa julgada material.' },
      { letter: 'C', explanation: 'Incorreta. Não há reexame necessário em favor de pessoa jurídica de direito privado.' },
      { letter: 'D', explanation: 'Incorreta. Diante da inércia recursal do réu, opera-se a estabilização e extinção do processo, dispensando o aditamento da inicial.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 304, caput e § 5º', textSnippet: 'A tutela antecipada, concedida nos termos do art. 303, torna-se estável se da decisão que a conceder não for interposto o respectivo recurso... O direito de rever, reformar ou invalidar a tutela antecipada, fixado no § 2º, extingue-se após decorridos 2 (dois) anos...' }
    ],
    professorTip: 'Cai muito na OAB: Tutela antecedente não recorrida ESTABILIZA! Faz coisa julgada? NÃO! Cabe ação para rever em até 2 anos!'
  },
  {
    id: 'oab36_proc_civil_07',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Processual Civil',
    topic: 'Intervenção de Terceiros - Denunciação da Lide e Chamamento ao Processo',
    difficulty: 'Médio',
    statement: `Em ação indenizatória por acidente de trânsito proposta por Paula em face de Rodrigo, este pretende trazer aos autos sua seguradora, com a qual mantém contrato de seguro com cobertura contra danos a terceiros com apólice vigente.
Nos moldes do CPC/2015 e da Súmula 537 do STJ, a modalidade de intervenção de terceiros adequada a ser requerida por Rodrigo é:`,
    options: [
      { letter: 'A', text: 'Denunciação da lide, sendo admitida a condenação direta e solidária da seguradora perante o autor nos limites da apólice.' },
      { letter: 'B', text: 'Chamamento ao processo, por se tratar de fiança contratual consumerista.' },
      { letter: 'C', text: 'Amicus curiae, em razão do interesse difuso no equilíbrio financeiro atuarial securitário.' },
      { letter: 'D', text: 'Oposição, formulada em autos apartados contra ambas as partes da lide.' }
    ],
    correctAnswer: 'A',
    justification: `A denunciação da lide (art. 125, II do CPC/2015) é cabível contra aquele que estiver obrigado, por lei ou pelo contrato, a indenizar, em ação regressiva, o prejuízo de quem for vencido no processo. A Súmula 537 do STJ consagrou que 'em ação de reparação de danos, a seguradora denunciada, se aceitar a denunciação ou contestar o pedido do autor, pode ser condenada, direta e solidariamente junto com o segurado, a pagar a indenização devida à vítima, nos limites contratados na apólice'.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Chamamento ao processo (art. 130 do CPC) aplica-se a devedores solidários e fiança, não a seguro de responsabilidade civil.' },
      { letter: 'C', explanation: 'Incorreta. Amicus curiae visa pluralizar o debate sobre matérias com grande relevância social/geral.' },
      { letter: 'D', explanation: 'Incorreta. Oposição é ação de quem pretende a coisa disputada por autor e réu.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 125, II', textSnippet: 'É admissível a denunciação da lide, promovida por qualquer das partes: II - àquele que estiver obrigado, por lei ou pelo contrato, a indenizar, em ação regressiva, o prejuízo de quem for vencido no processo.' }
    ],
    jurisprudence: 'Súmula 537 do STJ: Em ação de reparação de danos, a seguradora denunciada, se aceitar a denunciação ou contestar o pedido do autor, pode ser condenada, direta e solidariamente junto com o segurado...',
    professorTip: 'Mnemônico: Seguradora que deve indenizar regressivamente = DENUNCIAÇÃO DA LIDE (Art. 125, II do CPC)! E a Súmula 537 do STJ autoriza condenação DIRETA dela no limite da apólice!'
  },
  {
    id: 'oab38_proc_civ_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Civil',
    topic: 'Agravo de Instrumento e Taxatividade Mitigada (Tema 988 STJ)',
    difficulty: 'Difícil',
    statement: `Em uma ação ordinária de indenização, o juiz de primeiro grau proferiu decisão interlocutória indeferindo o pedido de redistribuição dinâmica do ônus da prova formulado pelo réu, bem como rejeitando a preliminar de incompetência territorial relativa. O advogado do réu pretende recorrer imediatamente de ambas as decisões interlocutórias via Agravo de Instrumento.
Considerando o rol do Art. 1.015 do CPC/2015 e a tese vinculante do Tema 988 do STJ:`,
    options: [
      {
        letter: 'A',
        text: 'A decisão sobre redistribuição do ônus da prova consta expressamente no art. 1.015, XI do CPC; quanto à competência, admite-se o Agravo de Instrumento pela taxatividade mitigada se comprovada a inutilidade de julgar a questão apenas na futura apelação.'
      },
      {
        letter: 'B',
        text: 'Nenhuma decisão interlocutória pode ser agravada, cabendo agravo apenas contra concessão de tutela de urgência.'
      },
      {
        letter: 'C',
        text: 'O rol do art. 1.015 do CPC é meramente exemplificativo, cabendo Agravo contra toda e qualquer decisão interlocutória sem restrições.'
      },
      {
        letter: 'D',
        text: 'O único remédio cabível contra decisões interlocutórias fora do rol é a impetração imediata de Mandado de Segurança perante o Tribunal.'
      }
    ],
    correctAnswer: 'A',
    justification: `A redistribuição do ônus probatório nos termos do art. 373, § 1º, é hipótese expressa de Agravo de Instrumento no Art. 1.015, inciso XI do CPC. Já para as hipóteses não expressas (como competência territorial), a Corte Especial do STJ fixou no Tema Repetitivo 988 a tese da "taxatividade mitigada do art. 1.015 do CPC": o rol admite Agravo de Instrumento quando verificada a urgência decorrente da inutilidade do julgamento da questão no recurso de apelação.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O art. 1.015 traz diversas hipóteses além das tutelas, incluindo o inciso XI.' },
      { letter: 'C', explanation: 'Incorreta. O rol é de taxatividade mitigada em caráter excepcional (Tema 988/STJ), não puramente exemplificativo.' },
      { letter: 'D', explanation: 'Incorreta. O Mandado de Segurança é via residualíssima que não substitui a sistemática recursal do CPC.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 1.015, XI', textSnippet: 'Cabe agravo de instrumento contra as decisões interlocutórias que versarem sobre: (...) XI - redistribuição do ônus da prova nos termos do art. 373, § 1º;' }
    ],
    jurisprudence: 'STJ, Tema 988 (REsp 1.704.520/MG e REsp 1.696.396/MT): O rol do art. 1.015 do CPC é de taxatividade mitigada, por isso admite a interposição de agravo de instrumento quando verificada a urgência decorrente da inutilidade do julgamento da questão no recurso de apelação.',
    professorTip: 'Tese campeã da OAB e Concursos: Art. 1.015 do CPC NÃO É exemplificativo e NÃO É fechado a ferro e fogo: é TAXATIVIDADE MITIGADA (Tema 988 do STJ)! Se esperar a apelação for inútil e causar prejuízo irreparável, cabe Agravo de Instrumento!'
  },
  {
    id: 'faculdade_proc_civ_09',
    exam: 'Prova Semestral de Processo de Conhecimento - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Tutela da Evidência e Dispensa do Periculum in Mora',
    difficulty: 'Médio',
    statement: `O autor ajuizou ação de cobrança fundada em prova documental robusta de crédito líquido, acompanhada de petição com tese jurídica firmada em julgamento de Casos Repetitivos e Súmula Vinculante do STF. O réu, citado, limitou-se a apresentar contestação genérica e protelatória, sem opor qualquer fato impeditivo, modificativo ou extintivo plausível. Diante do quadro, o autor requereu a concessão de tutela provisória da evidência liminarmente.
Conforme as regras do Art. 311 do CPC/2015 que regem a Tutela da Evidência:`,
    options: [
      {
        letter: 'A',
        text: 'A tutela da evidência será concedida independentemente da demonstração de perigo de dano ou de risco ao resultado útil do processo (periculum in mora).'
      },
      {
        letter: 'B',
        text: 'A tutela da evidência exige cumulativamente o fumus boni iuris e o periculum in mora em todas as suas hipóteses.'
      },
      {
        letter: 'C',
        text: 'É cabível apenas na fase de execução forçada, sendo vedada no procedimento comum de conhecimento.'
      },
      {
        letter: 'D',
        text: 'Exige necessariamente a prestação de caução idônea em dinheiro no valor total do crédito cobrado.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 311, caput, do CPC/2015 dispõe expressamente: 'A tutela da evidência será concedida, independentemente da demonstração de perigo de dano ou de risco ao resultado útil do processo', quando caracterizado abuso do direito de defesa/manifesto propósito protelatório do réu (inciso I) ou as alegações de fato puderem ser comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou em súmula vinculante (inciso II).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A marca distintiva da tutela da evidência é justamente dispensar o perigo de dano.' },
      { letter: 'C', explanation: 'Incorreta. É típica do processo de conhecimento.' },
      { letter: 'D', explanation: 'Incorreta. O art. 311 não impõe caução obrigatória em dinheiro.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 311, caput e incisos I e II', textSnippet: 'A tutela da evidência será concedida, independentemente da demonstração de perigo de dano ou de risco ao resultado útil do processo, quando: I - ficar caracterizado o abuso do direito de defesa ou o manifesto propósito protelatório da parte; II - as alegações de fato puderem ser comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou em súmula vinculante;' }
    ],
    jurisprudence: 'STJ, REsp 1.776.438/SP: Na tutela da evidência a plausibilidade do direito é tão contundente que o legislador autorizou a antecipação dos efeitos materiais do provimento sem a exigência de perigo na demora.',
    professorTip: 'Super Dica do Professor: Urgência (Art. 300) = PRECISA de Periculum in mora (risco de perecimento). Evidência (Art. 311) = DISPENSA perigo na demora! O direito é tão evidente que a parte não precisa provar urgência para levar a tutela!'
  },
  {
    id: 'oab37_proc_civ_10',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Civil',
    topic: 'Cumprimento Definitivo de Sentença e Multa do Art. 523',
    difficulty: 'Médio',
    statement: `Transitada em julgado sentença condenatória que fixou obrigação de pagar a quantia certa de R$ 100.000,00 em desfavor da empresa Ômega, o credor requereu o cumprimento definitivo de sentença. O juiz intimou o devedor na pessoa de seu advogado para pagar o débito no prazo legal de 15 dias. Transcorrido o prazo in albis sem qualquer depósito ou manifestação da empresa devedora:
Nos moldes do Art. 523, § 1º e Art. 525 do CPC/2015, qual a consequência imediata e qual o prazo para a empresa apresentar impugnação ao cumprimento de sentença?`,
    options: [
      {
        letter: 'A',
        text: 'O débito será acrescido de multa de 10% e honorários advocatícios de 10%, iniciando-se prazo autônomo de 15 dias para impugnação, sem necessidade de prévia garantia do juízo.'
      },
      {
        letter: 'B',
        text: 'O juiz decretará a prisão civil dos administradores e bloqueará as contas com acréscimo de 50% a título de astreintes.'
      },
      {
        letter: 'C',
        text: 'A impugnação deve ser apresentada dentro dos mesmos 15 dias do pagamento, sob pena de preclusão absoluta.'
      },
      {
        letter: 'D',
        text: 'Apresentada a impugnação, os honorários e a multa de 10% são cancelados retroativamente de pleno direito.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 523, § 1º do CPC/2015 estabelece que, não ocorrendo pagamento voluntário no prazo de 15 dias, o débito será acrescido de multa de 10% (dez por cento) e, também, de honorários de advogado de 10% (dez por cento). Em seguida, pelo Art. 525, caput, do CPC, 'transcorrido o prazo previsto no art. 523 sem o pagamento voluntário, inicia-se o prazo de 15 (quinze) dias para que o executado, independentemente de penhora ou nova intimação, apresente, nos próprios autos, sua impugnação'.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Não cabe prisão civil por dívida de obrigação de pagar quantia em regra geral (vedação do art. 5º, LXVII da CF/88, salvo alimentos).' },
      { letter: 'C', explanation: 'Incorreta. O prazo de 15 dias da impugnação inicia-se APÓS o término do prazo de 15 dias de pagamento voluntário (regra 15 + 15).' },
      { letter: 'D', explanation: 'Incorreta. A multa e os honorários do art. 523 incidem pelo simples fato do não pagamento voluntário no prazo quinzenal inicial.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 523, § 1º e Art. 525, caput', textSnippet: 'Art. 523, § 1º Não ocorrendo pagamento voluntário no prazo do caput, o débito será acrescido de multa de dez por cento e, também, de honorários de advogado de dez por cento. Art. 525. Transcorrido o prazo previsto no art. 523 sem o pagamento voluntário, inicia-se o prazo de 15 (quinze) dias para que o executado, independentemente de penhora ou nova intimação, apresente, nos próprios autos, sua impugnação.' }
    ],
    jurisprudence: 'Súmula 517 do STJ: São devidos honorários advocatícios no cumprimento de sentença, haja ou não impugnação, depois de escoado o prazo para pagamento voluntário.',
    professorTip: 'A famosa regra do "15 + 15" do CPC/2015: 1º) Intimou: 15 dias para PAGAR sem multa. Não pagou? Ganha 10% de multa + 10% de honorários! 2º) Automaticamente iniciam-se +15 dias para IMPUGNAR (sem precisar penhorar antes)!'
  }
];
