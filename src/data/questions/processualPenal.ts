import { LegalQuestion } from '../../types';

export const PROCESSUAL_PENAL_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab39_proc_penal_12',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Acordo de Não Persecução Penal (ANPP - Art. 28-A do CPP)',
    difficulty: 'Médio',
    statement: `Marcos, primário e com bons antecedentes, confessou formal e circunstanciadamente perante a autoridade policial a prática de estelionato simples (pena de 1 a 5 anos de reclusão), conduta praticada sem violência ou grave ameaça à pessoa. O inquérito policial foi concluído e os autos remetidos ao Ministério Público. A defesa requereu formalmente ao Parquet a propositura de Acordo de Não Persecução Penal (ANPP).
Conforme o disposto no Art. 28-A do Código de Processo Penal:`,
    options: [
      { letter: 'A', text: 'Marcos preenche os requisitos objetivos e subjetivos, sendo cabível o ANPP desde que a infração tenha pena mínima inferior a 4 anos e tenha havido confissão formal.' },
      { letter: 'B', text: 'O ANPP é expressamente vedado para crimes contra o patrimônio mesmo praticados sem violência, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'C', text: 'O ANPP somente pode ser celebrado após o recebimento formal da denúncia na audiência de instrução, sem necessidade de prévia intimação pessoal da defesa técnica ou anuência ministerial.' },
      { letter: 'D', text: 'A celebração e homologação do ANPP gera reincidência e registro na certidão de antecedentes criminais do agente, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 28-A do CPP (introduzido pelo Pacote Anticrime - Lei 13.964/2019) autoriza o Ministério Público a propor o ANPP não sendo caso de arquivamento e tendo o investigado confessado formal e circunstanciadamente a prática de infração penal sem violência ou grave ameaça e com pena mínima cominada inferior a 4 (quatro) anos. Como a pena mínima do estelionato é de 1 ano, Marcos é elegível ao acordo.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Crimes patrimoniais sem violência (furto simples, estelionato, apropriação indébita) são o principal campo de aplicação do ANPP.' },
      { letter: 'C', explanation: 'Incorreta. O ANPP é negócio pré-processual, proposto ANTES do recebimento da denúncia.' },
      { letter: 'D', explanation: 'Incorreta. O cumprimento do ANPP extingue a punibilidade sem gerar reincidência nem antecedentes criminais (Art. 28-A, § 13).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 28-A, caput', textSnippet: 'Não sendo caso de arquivamento e tendo o investigado confessado formal e circunstanciadamente a prática de infração penal sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos, o Ministério Público poderá propor acordo de não persecução penal...' }
    ],
    jurisprudence: 'STF, HC 185.913/DF: O ANPP é aplicável aos processos em curso antes da Lei 13.964/2019 desde que ainda não recebida a denúncia ou observados os critérios de transição fixados pela Corte.',
    professorTip: 'Requisitos do ANPP: Sem violência ou grave ameaça + Pena mínima < 4 anos + Confissão formal + Não arquivamento. Cumprido o ANPP = EXTINÇÃO DA PUNIBILIDADE LIMPA!'
  },
  {
    id: 'usp_proc_penal_09',
    exam: 'Concurso Público - Delegado de Polícia Civil / VUNESP',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Provas Ilícitas e Teoria dos Frutos da Árvore Envenenada',
    difficulty: 'Difícil',
    statement: `Policiais realizaram interceptação telefônica clandestina sem autorização judicial no aparelho de um suspeito. Com base exclusivamente nas informações obtidas na escuta ilegal, os policiais descobriram o endereço de um galpão clandestino e apreenderam 20 fuzis no local. A denúncia foi oferecida amparada na apreensão dos armamentos.
Considerando o Art. 5º, LVI da CF/88 e o Art. 157, § 1º do Código de Processo Penal:`,
    options: [
      { letter: 'A', text: 'A apreensão dos fuzis é prova ilícita por derivação (fruits of the poisonous tree), devendo ser desentranhada dos autos por contaminação causal direta.' },
      { letter: 'B', text: 'A apreensão das armas é plenamente válida porque se trata de corpo de delito autônomo e de apreensão física palpável. A inobservância dessa regra repercute diretamente na validade dos atos processuais subsequentes.' },
      { letter: 'C', text: 'A prova ilícita original é convalidada caso o crime imputado seja equiparado a hediondo, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'A ilicitude atinge os policiais na esfera administrativa, mas preserva a total integridade de todas as provas no processo penal, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' }
    ],
    correctAnswer: 'A',
    justification: `Pelo art. 157, § 1º do CPP e art. 5º, LVI da CF/88, são também inadmissíveis as provas derivadas das ilícitas (Teoria dos Frutos da Árvore Envenenada / Fruits of the Poisonous Tree). Como a localização do galpão e a apreensão das armas decorreram causal e unicamente da interceptação telefônica ilegal, não se aplicando as exceções da fonte independente ou descoberta inevitável, a prova derivada está contaminada e é nula.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Prova material ou corpo de delito descoberto unicamente por meio de prova ilícita é ilícita por derivação.' },
      { letter: 'C', explanation: 'Incorreta. A gravidade abstrata do delito não legitima a admissão de prova ilícita.' },
      { letter: 'D', explanation: 'Incorreta. O art. 5º, LVI da CF é expresso: são inadmissíveis NO PROCESSO as provas obtidas por meios ilícitos.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 157, § 1º', textSnippet: 'São também inadmissíveis as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente da primeira.' },
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, LVI', textSnippet: 'são inadmissíveis, no processo, as provas obtidas por meios ilícitos;' }
    ],
    jurisprudence: 'STF, RHC 90.376/RJ: A ilicitude originária da interceptação sem ordem judicial contamina, por repercussão causal, todas as demais provas que dela derivaram.',
    professorTip: 'Teoria dos Frutos da Árvore Envenenada: Se a raiz é podre (escuta sem ordem judicial), o fruto que nasceu dela (apreensão do armamento) também é nulo!'
  },
  {
    id: 'oab38_proc_penal_03',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Prisão Preventiva - Requisitos e Vedação à Decretação de Ofício',
    difficulty: 'Médio',
    statement: `Durante a instrução criminal de processo penal por roubo qualificado, o magistrado, sem qualquer requerimento do Ministério Público ou representação da autoridade policial, converteu de ofício as medidas cautelares diversas da prisão em prisão preventiva do acusado, alegando garantia da ordem pública.
À luz das alterações do Pacote Anticrime (Lei 13.964/2019) no CPP e da jurisprudência pacífica do STF e STJ:`,
    options: [
      { letter: 'A', text: 'A decisão do magistrado é ilegal, pois é expressamente vedada a decretação da prisão preventiva de ofício pelo juiz, tanto na fase investigatória quanto na fase judicial.' },
      { letter: 'B', text: 'A decisão é válida, pois na fase processual (ação penal em curso) o magistrado goza de poderes para decretar a preventiva de ofício. O juízo competente deve observar esse rito ao examinar a admissibilidade da acusação.' },
      { letter: 'C', text: 'O juiz pode decretar a preventiva de ofício em crimes graves cuja pena máxima cominada supere 8 anos de reclusão, com prosseguimento regular da persecução penal independentemente de manifestação prévia do ofendido.' },
      { letter: 'D', text: 'A decretação de ofício é facultada sempre que houver descumprimento de cautelar anterior sem necessidade de provocação das partes, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' }
    ],
    correctAnswer: 'A',
    justification: `Com a vigência da Lei nº 13.964/2019 (Pacote Anticrime) e a consolidação do sistema acusatório (art. 3º-A do CPP), o art. 282, § 2º e o art. 311 do CPP foram alterados para SUPRIMIR a possibilidade de decretação de prisão preventiva de ofício pelo magistrado. O STF e o STJ pacificaram que em NENHUMA fase (nem inquérito, nem ação penal) o juiz pode decretar preventiva sem requerimento do MP, do querelante ou representação policial.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O art. 311 do CPP foi alterado para retirar a expressão "ou de ofício pelo juiz no curso da ação penal".' },
      { letter: 'C', explanation: 'Incorreta. A gravidade do crime não autoriza o juiz a violar o princípio acusatório e agir de ofício.' },
      { letter: 'D', explanation: 'Incorreta. Mesmo em caso de descumprimento de cautelares, o juiz depende de prévia provocação (Tema STJ/STF).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 311', textSnippet: 'Em qualquer fase da investigação policial ou do processo penal, caberá a prisão preventiva decretada pelo juiz, a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial.' }
    ],
    jurisprudence: 'STF, HC 188.888/MG: A Lei 13.964/2019 suprimiu de modo absoluto a possibilidade de decretação da prisão preventiva de ofício pelo julgador no ordenamento jurídico brasileiro.',
    professorTip: 'Regra basilar do Sistema Acusatório: O JUIZ NÃO DECRETA PRISÃO PREVENTIVA DE OFÍCIO NUNCA MAIS! Nem no inquérito e nem no processo. Tem que ter provocação!'
  },
  {
    id: 'oab37_proc_penal_04',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Procedimento do Tribunal do Júri - Decisão de Pronúncia e Recurso Cabível',
    difficulty: 'Fácil',
    statement: `Ao final da primeira fase do procedimento especial do Tribunal do Júri (judicium accusationis), o magistrado se convenceu da materialidade do fato delituoso doloso contra a vida e da existência de indícios suficientes de autoria e proferiu decisão de Pronúncia, remetendo o réu a julgamento em plenário popular. A defesa pretende recorrer dessa decisão.
Qual é o recurso processual cabível e previsto expressamente no Código de Processo Penal?`,
    options: [
      { letter: 'A', text: 'Recurso em Sentido Estrito (rese).' },
      { letter: 'B', text: 'Apelação.' },
      { letter: 'C', text: 'Agravo de Instrumento Criminal.' },
      { letter: 'D', text: 'Carta Testemunhável.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 581, inciso IV, do CPP estabelece expressamente que caberá RECURSO EM SENTIDO ESTRITO (RESE) contra a decisão do juiz que "pronunciar o réu". Por outro lado, caso o magistrado impronunciar o réu ou julgar extinta a punibilidade, o recurso cabível seria Apelação (art. 416 do CPP).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Contra pronúncia cabe RESE (Art. 581, IV); apelação caberia contra impronúncia ou absolvição sumária (Art. 416).' },
      { letter: 'C', explanation: 'Incorreta. Não existe agravo de instrumento contra decisão de pronúncia no CPP.' },
      { letter: 'D', explanation: 'Incorreta. A carta testemunhável serve para destrancar recurso cujo seguimento foi denegado (Art. 639).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 581, IV', textSnippet: 'Caberá recurso, no sentido estrito, da decisão, despacho ou sentença: IV - que pronunciar o réu;' },
      { code: 'Código de Processo Penal', article: 'Art. 416', textSnippet: 'Contra a sentença de impronúncia ou de absolvição sumária caberá apelação.' }
    ],
    professorTip: 'Mnemônico do Júri: Pronunciou = RESE (Art. 581, IV). Impronunciou ou Absolveu Sumariamente = APELAÇÃO (Art. 416 do CPP)!'
  },
  {
    id: 'oab40_proc_penal_05',
    exam: 'XL Exame de Ordem Unificado (OAB 40) - FGV / 2024',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Competência Penal e Foro por Prerrogativa de Função (Questão de Ordem no AP 937 STF)',
    difficulty: 'Difícil',
    statement: `Deputado Federal, durante o exercício de seu mandato parlamentar, praticou crime de homicídio em razão de desentendimento puramente pessoal e passional ocorrido em churrasco de família em sua cidade natal, sem qualquer liame funcional com os seus deveres de parlamentar.
Conforme a tese fixada pelo Plenário do STF na Questão de Ordem na Ação Penal nº 937:`,
    options: [
      { letter: 'A', text: 'O processo deve tramitar perante o Tribunal do Júri da Justiça de primeiro grau, pois o foro por prerrogativa de função no STF exige que o crime seja praticado durante o mandato e relacionado às funções do cargo parlamentar.' },
      { letter: 'B', text: 'O processo tramitará obrigatoriamente perante o STF, pois deputados federais possuem foro absoluto para quaisquer delitos praticados durante a legislatura. A inobservância dessa regra repercute diretamente na validade dos atos processuais subsequentes.' },
      { letter: 'C', text: 'O processo é julgado pelo Superior Tribunal de Justiça (STJ) por ser autoridade com foro federal, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum. O juízo competente deve observar esse rito ao examinar a admissibilidade da acusação.' },
      { letter: 'D', text: 'Apenas após a renúncia ou cassação do mandato é que o parlamentar pode ser processado criminalmente, com prosseguimento regular da persecução penal independentemente de manifestação prévia do ofendido.' }
    ],
    correctAnswer: 'A',
    justification: `O STF, no julgamento da QO na AP 937/RJ, restringiu o foro por prerrogativa de função para deputados federais e senadores aos crimes praticados DURANTE o mandato e que tenham RELAÇÃO com o exercício da função parlamentar (critério da contemporaneidade + pertinência funcional). Como o crime é de natureza estritamente privada/familiar e desvinculado do cargo, o parlamentar é julgado na primeira instância (Vara do Júri).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O critério do foro universal e absoluto foi expressamente abandonado pelo STF na AP 937.' },
      { letter: 'C', explanation: 'Incorreta. Deputados não possuem prerrogativa perante o STJ.' },
      { letter: 'D', explanation: 'Incorreta. Desde a EC 35/2001, parlamentares podem ser processados penalmente sem necessidade de licença prévia do Congresso.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 102, I, "b"', textSnippet: 'Compete ao Supremo Tribunal Federal, precipuamente, a guarda da Constituição, cabendo-lhe: I - processar e julgar, originariamente: b) nas infrações penais comuns, o Presidente da República, o Vice-Presidente, os membros do Congresso Nacional...' }
    ],
    jurisprudence: 'STF, AP 937 QO/RJ: O foro por prerrogativa de função aplica-se apenas aos crimes cometidos durante o exercício do cargo e relacionados às funções desempenhadas.',
    professorTip: 'Tese da AP 937 do STF: Para ter foro privilegiado no STF tem que ter dois requisitos cumulativos: 1) Durante o mandato; 2) EM RAZÃO DAS FUNÇÕES parlamentares! Se bateu no vizinho no churrasco = Juiz de 1º Grau!'
  },
  {
    id: 'oab38_proc_penal_06',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Cadeia de Custódia da Prova (Lei Anticrime - Art. 158-A a 158-F)',
    difficulty: 'Difícil',
    statement: `Em investigação de homicídio qualificado, policiais civis apreenderam uma arma de fogo na residência do investigado sem lacre numerado, sem registro no formulário de cadeia de custódia e sem documentação do agente público responsável pelo transporte até o instituto de criminalística. O perito realizou exame balístico confrontando projéteis colhidos na vítima, concluindo pela compatibilidade. A defesa técnica requer o desentranhamento do laudo pericial por quebra ostensiva da cadeia de custódia.
Segundo os Arts. 158-A a 158-F do Código de Processo Penal e a jurisprudência do Superior Tribunal de Justiça (Sexta Turma):`,
    options: [
      { letter: 'A', text: 'A quebra da cadeia de custódia compromete a idoneidade, confiabilidade e higidez da prova pericial, podendo levar à sua inadmissibilidade ou à imprestabilidade de seu valor probatório se verificada a quebra de rastreabilidade ou potencial contaminação do vestígio.' },
      { letter: 'B', text: 'A cadeia de custódia é mera formalidade administrativa interna e sua inobservância jamais contamina a validade judicial da prova, com preclusão imediata da oportunidade de produção probatória após a fase postulatória.' },
      { letter: 'C', text: 'O desrespeito à cadeia de custódia acarreta automaticamente e em qualquer caso a extinção da punibilidade do réu, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'Apenas a autoridade judicial tem o dever legal de documentar as etapas de fixação, coleta e isolamento do vestígio criminal, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.' }
    ],
    correctAnswer: 'A',
    justification: `A Lei 13.964/2019 (Pacote Anticrime) positivou a Cadeia de Custódia nos arts. 158-A a 158-F do CPP como o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio. Conforme jurisprudência do STJ (RHC 147.884/PR e HC 653.515/RJ), a quebra da cadeia de custódia afeta a confiabilidade e idoneidade da prova, ensejando sua inadmissibilidade ou desconsideração valorativa caso haja fundada dúvida sobre a integridade e rastreabilidade da evidência.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A cadeia de custódia é garantia legal do devido processo e da paridade de armas, não mera praxe burocrática.' },
      { letter: 'C', explanation: 'Incorreta. A nulidade ou imprestabilidade da prova isolada não extingue de plano a punibilidade se houver outros elementos autônomos.' },
      { letter: 'D', explanation: 'Incorreta. O dever de preservar a cadeia de custódia recai sobre todo e qualquer agente público que primeiro tomar contato com o corpo de delito.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 158-A', textSnippet: 'Considera-se cadeia de custódia o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, para rastrear sua posse e manuseio...' }
    ],
    jurisprudence: 'STJ, Sexta Turma, HC 653.515/RJ: O descumprimento do procedimento da cadeia de custódia da prova acarreta a falta de confiabilidade do elemento probatório, devendo ser sopesado pelo juiz.',
    professorTip: 'Cadeia de Custódia na OAB: Introduzida pela Lei Anticrime (Art. 158-A do CPP). Tem 10 etapas (reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte).'
  },
  {
    id: 'oab37_proc_penal_07',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Liberdade Provisória e Prisão Preventiva de Ofício (Lei 13.964/19)',
    difficulty: 'Fácil',
    statement: `Durante a audiência de custódia, o Ministério Público manifestou-se pela concessão de liberdade provisória com fiança a Marcos, preso em flagrante por furto simples. Não houve qualquer requerimento de prisão preventiva pelo parquet nem representação da autoridade policial. O juiz, no entanto, considerando a gravidade abstrata do delito e os antecedentes do custodiado, converteu de ofício a prisão em flagrante em preventiva.
De acordo com o sistema acusatório delineado pelo Pacote Anticrime (Lei nº 13.964/19) e a jurisprudência pacífica do STF e STJ:`,
    options: [
      { letter: 'A', text: 'A decisão judicial é manifestamente ilegal, pois é vedada a decretação de prisão preventiva de ofício pelo magistrado em qualquer fase da persecução penal, inclusive na audiência de custódia.' },
      { letter: 'B', text: 'A decisão é válida, pois o art. 310 do CPP confere ao juiz poder geral de cautela para prender de ofício na audiência de custódia. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.' },
      { letter: 'C', text: 'A conversão só seria ilegal se o crime fosse culposo, sob pena de nulidade processual absoluta insanável por violação às garantias do devido processo.' },
      { letter: 'D', text: 'O juiz pode decretar prisão de ofício desde que justifique na garantia da ordem pública, sem necessidade de prévia intimação pessoal da defesa técnica ou anuência ministerial.' }
    ],
    correctAnswer: 'A',
    justification: `Com o advento da Lei nº 13.964/2019 e a interpretação constitucional pelo STF e STJ (RHC 131.263/GO e HC 590.039/GO), NÃO É MAIS POSSÍVEL a decretação ou conversão de prisão preventiva de ofício pelo juiz sob o império do sistema acusatório (art. 3º-A e 311 do CPP). Para que haja conversão da prisão em flagrante em preventiva na audiência de custódia, é INDISPENSÁVEL a prévia representação policial ou requerimento formal do Ministério Público.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O poder geral de cautela não autoriza a decretação de prisão cautelar de ofício sem provocação acusatória.' },
      { letter: 'C', explanation: 'Incorreta. A vedação é absoluta em crimes dolosos e culposos.' },
      { letter: 'D', explanation: 'Incorreta. A fundamentação não supre o vício formal intransponível da ausência de requerimento ministerial ou policial.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 311', textSnippet: 'Em qualquer fase da investigação policial ou do processo penal, caberá a prisão preventiva decretada pelo juiz, a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial.' }
    ],
    jurisprudence: 'STF, RHC 131.263/GO: É inadmissível a conversão da prisão em flagrante em preventiva de ofício, sem requerimento do Ministério Público ou representação policial, em atenção ao sistema acusatório.',
    professorTip: 'Lema Supremo do Processo Penal Atual: JUIZ NÃO PRENDE DE OFÍCIO NUNCA MAIS! Nem em inquérito, nem no processo, nem na audiência de custódia! Sem pedido do MP ou da Polícia = ILEGAL!'
  },
  {
    id: 'oab38_proc_penal_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Acordo de Não Persecução Penal (ANPP - Art. 28-A do CPP)',
    difficulty: 'Médio',
    statement: `Mateus foi indiciado pela prática de crime de estelionato simples (pena de reclusão de 1 a 5 anos e multa), sem violência ou grave ameaça à pessoa. Mateus é réu primário, ostenta excelentes antecedentes, confessou formal e circunstancialmente o crime perante a autoridade policial e ressarciu voluntariamente os prejuízos causados à vítima. O Ministério Público, no entanto, sem justificar de forma idônea, recusou-se a propor o Acordo de Não Persecução Penal (ANPP) e ofereceu denúncia direta.
Conforme o Art. 28-A, § 14 do CPP e a jurisprudência das Cortes Superiores, qual providência defensiva assiste a Mateus?`,
    options: [
      {
        letter: 'A',
        text: 'Requerer ao juiz a remessa dos autos ao órgão superior do Ministério Público (Procuradoria-Geral de Justiça) para revisão da recusa, nos moldes.'
      },
      {
        letter: 'B',
        text: 'O juiz pode substituir a vontade ministerial e conceder diretamente o ANPP à revelia do promotor de justiça, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.'
      },
      {
        letter: 'C',
        text: 'Nenhuma providência cabe, pois o oferecimento do ANPP é ato discricionário imune a qualquer controle jurisdicional ou administrativo. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.'
      },
      {
        letter: 'D',
        text: 'Impetrar Mandado de Injunção no STF para que o Conselho Nacional do Ministério Público firme o acordo de ofício, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 28-A, § 14 do CPP prevê expressamente: 'No caso de recusa, por parte do Ministério Público, em propor o acordo, o investigado poderá requerer a remessa dos autos a órgão superior, na forma do art. 28 deste Código'. O Supremo Tribunal Federal e o STJ pacificaram que o investigado tem direito à reavaliação da recusa ministerial pelo Procurador-Geral de Justiça ou Câmara de Coordenação e Revisão do MP, assegurando o controle da legalidade dos motivos declinados pelo promotor natural.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O juiz não pode impor o ANPP de ofício, sob pena de violação ao princípio acusatório e titularidade exclusiva da ação penal (STF).' },
      { letter: 'C', explanation: 'Incorreta. A recusa imotivada sujeita-se ao controle do órgão revisor superior do parquet (art. 28-A, § 14).' },
      { letter: 'D', explanation: 'Incorreta. Não se trata de hipótese de mandado de injunção por ausência de norma regulamentadora.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 28-A, § 14', textSnippet: 'No caso de recusa, por parte do Ministério Público, em propor o acordo, o investigado poderá requerer a remessa dos autos a órgão superior, na forma do art. 28 deste Código.' }
    ],
    jurisprudence: 'STF, HC 204.606/RS: Em caso de recusa de oferecimento do ANPP pelo Ministério Público, cabe a aplicação por analogia do mecanismo de controle do Art. 28 do CPP.',
    professorTip: 'Mnemônico do ANPP (Art. 28-A): Sem violência/ameaça + Pena MÍNIMA inferior a 4 anos + Confissão formal e circunstanciada. Se o promotor recusar sem motivo idôneo: NÃO pede pro juiz conceder; pede pro juiz ENVIAR PRO PGJ (Art. 28-A, § 14)!'
  },
  {
    id: 'faculdade_proc_penal_09',
    exam: 'Prova de Direito Probatório e Teoria do Processo Penal - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Cadeia de Custódia da Prova Pericial (Art. 158-A a 158-F)',
    difficulty: 'Difícil',
    statement: `Em local de crime de homicídio, policiais militares apreenderam uma faca ensanguentada e um aparelho celular da vítima. Sem isolar o perímetro, acondicionaram os objetos em sacola plástica de supermercado sem lacre numerado ou termo circunstanciado de busca e apreensão. Três dias após, os itens foram entregues ao Instituto de Criminalística sem discriminação de quem esteve em posse dos objetos nesse intervalo. O laudo pericial concluiu pela presença de vestígios genéticos do acusado.
A defesa suscitou a nulidade e imprestabilidade probatória por violação da cadeia de custódia. Nos termos do CPP:`,
    options: [
      {
        letter: 'A',
        text: 'A cadeia de custódia visa assegurar a idoneidade e rastreabilidade dos vestígios; a sua quebra compromete a confiabilidade e pode acarretar a ilicitude ou imprestabilidade do elemento probatório.'
      },
      {
        letter: 'B',
        text: 'A cadeia de custódia só é obrigatória na Justiça Federal e em crimes contra o sistema financeiro nacional, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.'
      },
      {
        letter: 'C',
        text: 'A quebra da cadeia de custódia é mera irregularidade formal que jamais afeta o valor probatório pericial, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.'
      },
      {
        letter: 'D',
        text: 'O Código de Processo Penal não contém normas sobre cadeia de custódia, sendo tema exclusivo de regulamento policial interno, sem possibilidade de atuação judicial de ofício para suprir omissão técnica da acusação.'
      }
    ],
    correctAnswer: 'A',
    justification: `A Lei 13.964/19 introduziu os artigos 158-A a 158-F no CPP, definindo a cadeia de custódia como o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio, garantindo sua autenticidade e rastreabilidade desde o isolamento até o descarte. A jurisprudência do STJ e do STF estabelece que a violação substancial da cadeia de custódia macula a idoneidade da prova pericial, podendo gerar sua imprestabilidade e exclusão do acervo probatório (HC 653.515/RJ).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Aplica-se a toda e qualquer persecução penal no território nacional.' },
      { letter: 'C', explanation: 'Incorreta. Conforme o STJ, a quebra da cadeia de custódia pode desqualificar a força probante e levar à ilicitude da prova.' },
      { letter: 'D', explanation: 'Incorreta. O CPP disciplina minuciosamente o tema nos artigos 158-A a 158-F.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 158-A e 158-B', textSnippet: 'Art. 158-A. Considera-se cadeia de custódia o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, para rastrear sua posse e manuseio...' }
    ],
    jurisprudence: 'STJ, RHC 147.857/SP: A higidez da cadeia de custódia é garantia essencial do contraditório e da ampla defesa, visando evitar fraudes, contaminações e adulterações nos vestígios materiais.',
    professorTip: 'Etapas da Cadeia de Custódia (Art. 158-B CPP): Reconhecimento -> Isolamento -> Fixação -> Coleta -> Acondicionamento -> Transporte -> Recebimento -> Processamento -> Armazenamento -> Descarte. Se quebrou o elo, a defesa argui a ilicitude da prova!'
  },
  {
    id: 'oab37_proc_penal_10',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual Penal',
    topic: 'Tribunal do Júri e Soberania dos Veredictos (Quesito Genérico de Absolvição)',
    difficulty: 'Difícil',
    statement: `Juliano foi levado a julgamento perante o Tribunal do Júri pela prática de homicídio qualificado. Durante a votação na sala secreta, os jurados responderam "SIM" aos dois primeiros quesitos (materialidade e autoria). Em seguida, ao responderem ao 3º quesito ("O jurado absolve o acusado?", Art. 483, III do CPP), a maioria respondeu "SIM", absolvendo Juliano. O Ministério Público interpôs Recurso de Apelação com base no Art. 593, III, "d" do CPP, sustentando que a absolvição foi manifestamente contrária à prova dos autos, pois a tese de legítima defesa não encontrava qualquer respaldo pericial.
À luz da jurisprudência do Supremo Tribunal Federal (Tema 1087 com Repercussão Geral):`,
    options: [
      {
        letter: 'A',
        text: 'Não cabe apelação do Ministério Público por decisão manifestamente contrária à prova dos autos fundada na absolvição pelo quesito genérico, em respeito à soberania dos veredictos.'
      },
      {
        letter: 'B',
        text: 'A apelação ministerial é sempre provida automaticamente, remetendo o réu a cumprimento imediato de pena, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.'
      },
      {
        letter: 'C',
        text: 'O Tribunal pode, desde logo, reformar o mérito do veredicto e condenar o réu em grau de apelação. A inobservância dessa regra repercute diretamente na validade dos atos processuais subsequentes.'
      },
      {
        letter: 'D',
        text: 'O quesito genérico de absolvição foi revogado e não pode ser formulado aos jurados, sem possibilidade de atuação judicial de ofício para suprir omissão técnica da acusação. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.'
      }
    ],
    correctAnswer: 'A',
    justification: `No histórico julgamento do Tema 1.087 da Repercussão Geral (ARE 1.225.185/MG), o Supremo Tribunal Federal fixou a tese de que a soberania dos veredictos do Tribunal do Júri (art. 5º, XXXVIII, "c", da CF/88) impede a interposição de recurso de apelação ministerial com base na alegação de decisão manifestamente contrária à prova dos autos (art. 593, III, "d", do CPP) contra a absolvição do acusado fundada no quesito genérico (art. 483, III, do CPP). O jurado julga por íntima convicção e clemência.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme a tese vinculante do STF no Tema 1.087, tal apelação do parquet é inadmissível.' },
      { letter: 'C', explanation: 'Incorreta. Em nenhuma hipótese o Tribunal pode condenar o réu no mérito em recurso do júri, sob pena de usurpação da competência constitucional.' },
      { letter: 'D', explanation: 'Incorreta. O quesito genérico é obrigatório por expressa determinação do art. 483, § 2º do CPP.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal e CPP', article: 'Art. 5º, XXXVIII, "c" CF/88 e Art. 483, III CPP', textSnippet: 'Art. 483. Os quesitos serão formulados na seguinte ordem, indagando sobre: I - a materialidade do fato; II - a autoria ou participação; III - se o acusado deve ser absolvido;' }
    ],
    jurisprudence: 'STF, Tema 1.087/RG (ARE 1.225.185/MG): É vedada a interposição de apelação fundada no art. 593, III, d, do CPP contra absolvição do réu com base no quesito genérico do art. 483, III, do CPP, em observância ao princípio constitucional da soberania dos veredictos.',
    professorTip: 'Tese do Século no Júri (Tema 1087 STF): Se os jurados responderem SIM no quesito obrigatório "O jurado absolve o acusado?", o MP NÃO PODE recorrer alegando que contrariou as provas! O jurado pode absolver por clemência, perdão ou convicção íntima!'
  }
];
