import { LegalQuestion } from '../../../types';

export const PROCESSUAL_PENAL_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'procpenal_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Arquivamento do Inquérito Policial após Pacote Anticrime e STF',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Concluído o inquérito policial que apurava crime de furto qualificado sem encontrar indícios mínimos de autoria, o membro do Ministério Público decide pelo arquivamento da investigação. Considerando a redação vigente do Art. 28 do CPP após o julgamento das ADIs pelo STF:`,
    options: [
      { letter: 'A', text: 'O Ministério Público ordenará diretamente o arquivamento e comunicará à vítima, ao investigado e à autoridade policial, submetendo o ato à instância de revisão ministerial para homologação, com ciência à autoridade judicial.' },
      { letter: 'B', text: 'O Ministério Público pode arquivar sem comunicar absolutamente ninguém nem se submeter à revisão interna, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' },
      { letter: 'C', text: 'O juiz pode de ofício rejeitar o arquivamento e iniciar a ação penal diretamente, sem necessidade de prévia intimação pessoal da defesa técnica ou anuência ministerial.' },
      { letter: 'D', text: 'A vítima perde qualquer direito de recorrer do arquivamento, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' }
    ],
    correctAnswer: 'A',
    justification: `Com o Art. 28 do CPP (Lei 13.964/2019) e a interpretação conforme dada pelo STF nas ADIs 6298, 6299, 6300 e 6305, o membro do MP ordena o arquivamento, comunica à vítima, ao investigado e à autoridade policial, e encaminha os autos à instância de revisão ministerial para homologação (mantida a ciência ao juiz para verificação de eventual ilegalidade teratológica ou controle da vítima no prazo de 30 dias).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A comunicação à vítima/investigado/delegado e a revisão pela instância superior do MP são obrigatórias.' },
      { letter: 'C', explanation: 'Incorreta. No sistema acusatório, o juiz jamais inicia ação penal de ofício.' },
      { letter: 'D', explanation: 'Incorreta. A vítima pode submeter a matéria à instância de revisão ministerial no prazo de 30 dias (§ 1º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 28, caput e § 1º', textSnippet: 'Ordenado o arquivamento do inquérito policial ou de quaisquer elementos informativos da mesma natureza, o órgão do Ministério Público comunicará à vítima, ao investigado e à autoridade policial e encaminhará os autos para a instância de revisão ministerial para fins de homologação...' }
    ],
    professorTip: 'No Art. 28 do CPP atualizado: quem revisa o arquivamento é a INSTÂNCIA DE REVISÃO DO PRÓPRIO MP, e a vítima tem 30 DIAS para impugnar se discordar!'
  },
  {
    id: 'procpenal_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Acordo de Não Persecução Penal (ANPP - Art. 28-A CPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Pedro, primário e sem antecedentes criminais, confessou formal e circunstancialmente durante o inquérito policial a prática do crime de receptação simples (pena mínima de 1 ano de reclusão, sem violência ou grave ameaça). O Ministério Público deixou de oferecer Acordo de Não Persecução Penal (ANPP) sem fundamentação idônea e ajuizou denúncia. À luz do Art. 28-A do CPP:`,
    options: [
      { letter: 'A', text: 'Não cabe ANPP em crimes com pena mínima igual a um ano, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'B', text: 'Preenchidos os requisitos legais, se o MP se recusar injustificadamente a propor o ANPP, o investigado poderá requerer a remessa dos autos ao órgão superior do Ministério Público.' },
      { letter: 'C', text: 'O próprio juiz criminal deve redigir e homologar o ANPP de ofício contra a vontade do MP, com autorização para atuação instrutória suplementar do magistrado na busca da verdade real. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.' },
      { letter: 'D', text: 'O cumprimento integral do ANPP acarreta reincidência penal por cinco anos, com prosseguimento regular da persecução penal independentemente de manifestação prévia do ofendido.' }
    ],
    correctAnswer: 'B',
    justification: `O ANPP exige infração sem violência ou grave ameaça com pena mínima INFERIOR a 4 anos e confissão formal e circunstancial (art. 28-A CPP). Em caso de recusa do membro do MP em propor o acordo, o investigado pode requerer a remessa dos autos ao órgão superior ministerial, na forma do art. 28 (art. 28-A, § 14). Cumprido o acordo, extingue-se a punibilidade sem geração de antecedentes ou reincidência (§ 12 e § 13).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O limite é pena mínima INFERIOR a 4 anos (1 ano preenche perfeitamente).' },
      { letter: 'C', explanation: 'Incorreta. Por ser negócio jurídico pré-processual, o juiz não pode impor o ANPP de ofício (STF), cabendo remessa ao órgão superior do MP.' },
      { letter: 'D', explanation: 'Incorreta. Não gera reincidência nem maus antecedentes, servindo apenas para impedir novo ANPP nos 5 anos seguintes.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 28-A, caput e § 14', textSnippet: 'No caso de recusa, por parte do Ministério Público, em propor o acordo de não persecução penal, o investigado poderá requerer a remessa dos autos a órgão superior, na forma do art. 28 deste Código.' }
    ],
    professorTip: 'Requisitos do ANPP: Sem violência/grave ameaça + Pena MÍNIMA < 4 anos + Confissão formal e circunstancial! Não cabe na violência doméstica contra a mulher nem se já houve transação/ANPP nos últimos 5 anos.'
  },
  {
    id: 'procpenal_ext_03',
    exam: 'Prova Semestral Faculdade de Direito - Processo Penal I',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Ação Penal Privada e Princípios (Indivisibilidade e Renúncia)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Mariana foi vítima de difamação (crime de ação penal privada) praticada conjuntamente por dois colegas de trabalho, Caio e Lucas. Todavia, ao ajuizar a queixa-crime dentro do prazo decadencial, Mariana optou deliberadamente por processar apenas Lucas, deixando Caio de fora por amizade pessoal. Conforme o Código de Processo Penal:`,
    options: [
      { letter: 'A', text: 'A queixa-crime é válida apenas contra Lucas em razão do princípio da disponibilidade, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.' },
      { letter: 'B', text: 'A exclusão voluntária de um dos querelados viola o princípio da indivisibilidade, configurando renúncia tácita ao direito de queixa que se estende a todos os autores, extinguindo a punibilidade.' },
      { letter: 'C', text: 'O juiz deverá incluir Caio de ofício como réu sem o consentimento da querelante, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'O Ministério Público deverá aditar a queixa para incluir Caio como litisconsorte necessário, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' }
    ],
    correctAnswer: 'B',
    justification: `Na ação penal privada vigora o princípio da indivisibilidade (art. 48 do CPP): a queixa contra qualquer dos autores do crime obrigará ao processo de todos. Se a vítima renunciar tacitamente quanto a um deles deixando de incluí-lo propositalmente na queixa, a renúncia estende-se a todos (art. 49 do CPP), extinguindo a punibilidade.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O querelante pode desistir ou escolher não processar ninguém, mas se processar, deve incluir todos os conhecidos.' },
      { letter: 'C', explanation: 'Incorreta. O juiz não inclui réus de ofício.' },
      { letter: 'D', explanation: 'Incorreta. Ao MP cabe apenas zelar pela indivisibilidade (requerendo intimação ou manifestando-se pela extinção), não substituir a iniciativa privada.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 48 e Art. 49', textSnippet: 'Art. 48. A queixa contra qualquer dos autores do crime obrigará ao processo de todos, e o Ministério Público velará pela sua indivisibilidade. Art. 49. A renúncia ao exercício do direito de queixa, em relação a um dos autores do crime, a todos se estenderá.' }
    ],
    professorTip: 'Na ação penal PRIVADA: Renúncia ou Perdão concedido a 1 dos ofensores ESTENDE-SE A TODOS (e o perdão só produz efeito para quem aceitar)!'
  },
  {
    id: 'procpenal_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Prisão Preventiva - Requisitos e Vedação à Decretação de Ofício',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Durante a fase de investigação policial e sem qualquer requerimento prévio da autoridade policial ou do Ministério Público, o juiz criminal, ao receber o auto de comunicação de fatos, decreta de ofício a prisão preventiva do investigado alegando necessidade de garantia da ordem pública. À luz do Art. 311 do CPP:`,
    options: [
      { letter: 'A', text: 'A prisão é válida na fase processual, mas vedada apenas no inquérito, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'B', text: 'A prisão é ilegal porque o juiz não pode decretar prisão preventiva de ofício nem na fase de investigação, nem no curso da ação penal.' },
      { letter: 'C', text: 'O juiz pode decretar preventiva de ofício em crimes hediondos, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'D', text: 'A preventiva decretada de ofício convalida-se com o posterior oferecimento da denúncia, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' }
    ],
    correctAnswer: 'B',
    justification: `Desde o Pacote Anticrime (Lei 13.964/2019), o art. 311 do CPP proíbe terminantemente a decretação da prisão preventiva de ofício pelo juiz em qualquer fase (investigação OU instrução processual), dependendo sempre de requerimento do MP, do querelante, do assistente ou de representação da autoridade policial.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A proibição atual alcança tanto o inquérito quanto o curso do processo penal (sistema acusatório).' },
      { letter: 'C', explanation: 'Incorreta. Não há exceção pela natureza do delito.' },
      { letter: 'D', explanation: 'Incorreta. O ato nasce nulo por violação ao sistema acusatório e art. 311 CPP.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 311', textSnippet: 'Em qualquer fase da investigação policial ou do processo penal, caberá a prisão preventiva decretada pelo juiz, a requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial.' }
    ],
    professorTip: 'Juiz NUNCA decreta prisão preventiva de ofício (Art. 311 CPP), nem mesmo na audiência de custódia ao converter o flagrante!'
  },
  {
    id: 'procpenal_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Revisão Obrigatória da Prisão Preventiva a cada 90 dias (Art. 316, par. único)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `João está preso preventivamente há 110 dias sem que o órgão emissor da decisão tenha reexaminado a necessidade de manutenção da custódia cautelar. Diante da tese defensiva de ilegalidade da prisão pelo excesso previsto no Art. 316, parágrafo único, do CPP e da jurisprudência do STF:`,
    options: [
      { letter: 'A', text: 'O transcurso do prazo de 90 dias gera a soltura automática e imediata do preso sem necessidade de decisão judicial, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' },
      { letter: 'B', text: 'O órgão emissor da decisão deve revisar a necessidade da manutenção da preventiva a cada 90 dias mediante decisão fundamentada.' },
      { letter: 'C', text: 'O prazo de revisão de 90 dias aplica-se exclusivamente à prisão temporária, com eficácia preclusiva imediata quanto às questões processuais decididas interlocutoriamente.' },
      { letter: 'D', text: 'A revisão periódica é facultativa nos crimes de competência do Tribunal do Júri, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 316, parágrafo único, do CPP impõe a revisão da preventiva a cada 90 dias. Todavia, o STF (SL 1.395 / ADI 6581) firmou o entendimento de que a inobservância desse prazo não acarreta a soltura automática do custodiado, impondo-se que o juízo competente reavalie imediatamente a necessidade e adequação da medida.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O STF rejeitou a tese de soltura automática.' },
      { letter: 'C', explanation: 'Incorreta. A regra está no art. 316 do CPP e refere-se à prisão preventiva.' },
      { letter: 'D', explanation: 'Incorreta. A revisão a cada 90 dias é obrigatória em qualquer procedimento.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 316, parágrafo único', textSnippet: 'Decretada a prisão preventiva, deverá o órgão emissor da decisão revisar a necessidade de sua manutenção a cada 90 (noventa) dias, mediante decisão fundamentada, de ofício, sob pena de tornar a prisão ilegal.' }
    ],
    professorTip: 'Atenção à pegadinha da FGV: A lei diz que a revisão é a cada 90 dias "sob pena de tornar a prisão ilegal", mas o STF decidiu que NÃO há soltura automática — o juiz deve ser instado a fundamentar imediatamente!'
  },
  {
    id: 'procpenal_ext_06',
    exam: 'Prova Semestral Faculdade de Direito - Processo Penal',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Cadeia de Custódia da Prova (Arts. 158-A a 158-F CPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Durante busca pessoal realizada por policiais militares sem mandado e sem registro adequado de acondicionamento, um invólucro encontrado no bolso de um suspeito foi levado solto no porta-luvas da viatura até a delegacia, sem lacre numerado ou ficha de acompanhamento de vestígio. Sobre a cadeia de custódia (Art. 158-A do CPP) e o entendimento do STJ sobre sua quebra:`,
    options: [
      { letter: 'A', text: 'A quebra da cadeia de custódia gera sempre e automaticamente a nulidade absoluta de todo o processo penal, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'B', text: 'A cadeia de custódia compreende o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio, devendo a eventual quebra ser analisada no caso concreto quanto à confiabilidade e prejuízo da prova.' },
      { letter: 'C', text: 'A cadeia de custódia aplica-se somente às provas testemunhais, sem necessidade de prévia intimação pessoal da defesa técnica ou anuência ministerial.' },
      { letter: 'D', text: 'O descarte de vestígios pode ser feito pela autoridade policial sem autorização judicial prévia, com autorização para atuação instrutória suplementar do magistrado na busca da verdade real. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 158-A do CPP define a cadeia de custódia como o histórico cronológico documentado do vestígio (reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte). Segundo o STJ, eventual irregularidade na cadeia de custódia não torna a prova automaticamente ilícita em abstrato, devendo impactar na valoração/confiabilidade probatória ou gerar inadmissibilidade caso comprometida sua autenticidade.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O STJ analisa a integridade e confiabilidade no caso concreto.' },
      { letter: 'C', explanation: 'Incorreta. Refere-se a vestígios e provas periciais/materiais.' },
      { letter: 'D', explanation: 'Incorreta. O descarte ocorre após liberação judicial (art. 158-B, X).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 158-A', textSnippet: 'Considera-se cadeia de custódia o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes...' }
    ],
    professorTip: '10 etapas da Cadeia de Custódia (Art. 158-B): do Reconhecimento até o Descarte! Se quebrar a cadeia, o STJ examina a confiabilidade do vestígio.'
  },
  {
    id: 'procpenal_ext_07',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Prova Ilícita por Derivação e Teorias de Exceção (Art. 157 CPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Policiais invadem uma residência sem mandado judicial e sem fundada razão de flagrante, encontrando documentos que indicam a localização de uma conta bancária oculta utilizada para lavagem de capitais. Todavia, paralelamente e sem qualquer relação com a invasão domiciliar, a Receita Federal já havia encaminhado representação fiscal ao Ministério Público indicando exatamente a mesma conta bancária. Sobre a admissibilidade da prova relativa à conta bancária:`,
    options: [
      { letter: 'A', text: 'A prova é inadmissível pela teoria dos frutos da árvore envenenada sem exceções, com impossibilidade de utilização do elemento informativo como fundamento exclusivo da decisão.' },
      { letter: 'B', text: 'A prova relativa à conta bancária é admissível pela exceção da fonte independente, visto que obtida por trâmite típico e autônomo sem nexo causal com a ilicitude.' },
      { letter: 'C', text: 'A ilicitude da invasão torna nulo apenas o auto de busca, mantendo válidos os documentos ali apreendidos, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'D', text: 'As provas ilícitas devem permanecer nos autos para livre convencimento do juiz, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' }
    ],
    correctAnswer: 'B',
    justification: `Embora as provas derivadas das ilícitas sejam inadmissíveis (frutos da árvore envenenada — art. 157, § 1º), a lei prevê expressamente duas exceções: ausência de nexo de causalidade ou quando as provas puderem ser obtidas por fonte independente (§ 2º — e descoberta inevitável). Como a Receita Federal apurou os dados autonomamente, aplica-se a fonte independente.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O § 1º ressalva expressamente a fonte independente e ausência de nexo causal.' },
      { letter: 'C', explanation: 'Incorreta. A invasão ilícita contamina os bens diretamente apreendidos nela.' },
      { letter: 'D', explanation: 'Incorreta. As provas declaradas inadmissíveis devem ser desentranhadas do processo (§ 3º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 157, §§ 1º a 3º', textSnippet: 'São também inadmissíveis as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente das primeiras.' }
    ],
    professorTip: 'Frutos da Árvore Envenenada (Art. 157, § 1º CPP) tem duas exceções: Fonte Independente e Descoberta Inevitável. E prova ilícita reconhecida tem que ser DESENTRANHADA dos autos!'
  },
  {
    id: 'procpenal_ext_08',
    exam: 'Concurso Magistratura / Defensoria - Processo Penal',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Competência no Processo Penal (Súmulas STF e STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sobre a definição de competência criminal conforme a jurisprudência sumulada dos Tribunais Superiores, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Compete à Justiça Estadual comum processar e julgar crime em que o indígena figure como autor ou vítima, salvo quando envolver disputa sobre direitos indígenas.' },
      { letter: 'B', text: 'Compete à Justiça Federal julgar contravenções penais praticadas em detrimento de bens ou serviços da União, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'C', text: 'Compete à Justiça Federal processar e julgar crime cometido a bordo de qualquer embarcação pequena em rio estadual, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'D', text: 'O foro por prerrogativa de função do prefeito prevalece sobre a competência do Tribunal do Júri mesmo em crimes dolosos contra a vida sem relação com o cargo.' }
    ],
    correctAnswer: 'A',
    justification: `Consoante a Súmula 140 do STJ: "Compete à Justiça Comum Estadual processar e julgar crime em que o indígena figure como autor ou vítima". Só vai para a Justiça Federal quando houver disputa sobre direitos indígenas (art. 109, XI, CF/88).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Contravenções penais nunca são julgadas pela Justiça Federal (art. 109, IV, CF/88 e Súmula 38 STJ).' },
      { letter: 'C', explanation: 'Incorreta. A competência federal (art. 109, IX, CF) exige navios (embarcações de grande porte com autonomia em alto-mar/vias navegáveis) e aeronaves.' },
      { letter: 'D', explanation: 'Incorreta. Súmula Vinculante 45 do STF: se a competência especial for apenas da Constituição Estadual, prevalece o Tribunal do Júri!' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 109, IV e XI', textSnippet: 'Aos juízes federais compete processar e julgar: IV - os crimes políticos e as infrações penais praticadas em detrimento de bens, serviços ou interesse da União... excluídas as contravenções...' }
    ],
    jurisprudence: 'Súmula 140 STJ e Súmula 38 STJ.',
    professorTip: 'Clássicos de Competência Federal x Estadual: Contravenção Penal = SEMPRE Estadual! Crime envolvendo indígena isoladamente = Estadual (Súmula 140 STJ)!'
  },
  {
    id: 'procpenal_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Citação por Edital e Suspensão do Processo e da Prescrição (Art. 366 CPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Acusado regularmente citado por edital não compareceu ao interrogatório nem constituiu advogado defensor nos autos. O juiz aplicou o Art. 366 do CPP, determinando a suspensão do processo e do curso do prazo prescricional. Segundo a Súmula 415 do STJ e o CPP:`,
    options: [
      { letter: 'A', text: 'O prazo prescricional fica suspenso indefinidamente, por todo o tempo de vida do acusado, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' },
      { letter: 'B', text: 'O período de suspensão do prazo prescricional é regulado pelo máximo da pena cominada em abstrato ao crime, podendo o juiz determinar a produção antecipada de provas urgentes e decretar prisão preventiva se presentes os requisitos.' },
      { letter: 'C', text: 'Com a citação por edital, a revelia autoriza o julgamento imediato sem defesa técnica, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'A produção antecipada de provas pode ser decretada automaticamente apenas pelo mero decurso do tempo, com prosseguimento regular da persecução penal independentemente de manifestação prévia do ofendido. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 366 do CPP, se o acusado citado por edital não comparecer nem constituir advogado, ficam suspensos o processo e o curso da prescrição. A Súmula 415 do STJ fixa que o período de suspensão da prescrição regula-se pelo máximo da pena cominada (depois disso volta a correr!). Ademais, a Súmula 455 do STJ proíbe produção antecipada de provas baseada apenas no decurso do tempo, exigindo urgência concreta.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Prescrição imprescritível violaria a Constituição (Súmula 415 STJ).' },
      { letter: 'C', explanation: 'Incorreta. Não há revelia condenatória sem citação pessoal nem julgamento sem defensor.' },
      { letter: 'D', explanation: 'Incorreta. A Súmula 455 do STJ veda antecipação de prova baseada exclusivamente no decurso do tempo.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 366', textSnippet: 'Se o acusado, citado por edital, não comparecer, nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional, podendo o juiz determinar a produção antecipada das provas consideradas urgentes...' }
    ],
    jurisprudence: 'Súmulas 415 e 455 do STJ.',
    professorTip: 'Combo de Súmulas do Art. 366 CPP: Súmula 415 STJ (limite da suspensão da prescrição = prazo prescricional da pena máxima em abstrato); Súmula 455 STJ (mero decurso do tempo NÃO justifica prova antecipada)!'
  },
  {
    id: 'procpenal_ext_10',
    exam: 'Prova Semestral Faculdade de Direito - Procedimentos',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Interrogatório como Último Ato da Instrução e Ordem das Provas',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Em audiência de instrução e julgamento no rito ordinário (Art. 400 do CPP), antes de ouvidas as testemunhas arroladas pela acusação e pela defesa, o juiz procedeu ao interrogatório do réu sob o argumento de agilizar a pauta, ignorando o protesto da defesa. A medida judicial é:`,
    options: [
      { letter: 'A', text: 'Válida, pois o juiz tem ampla discricionariedade para inverter a ordem. A inobservância dessa regra repercute diretamente na validade dos atos processuais subsequentes.' },
      { letter: 'B', text: 'Nula, por ofender o contraditório e a ampla defesa, devendo o interrogatório ser realizado ao final da instrução após a oitiva das testemunhas, inclusive nos procedimentos especiais (conforme STF).' },
      { letter: 'C', text: 'Válida apenas nos crimes de competência originária dos tribunais, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum. O juízo competente deve observar esse rito ao examinar a admissibilidade da acusação.' },
      { letter: 'D', text: 'Inimpugnável por constituir mero despacho de expediente, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 400 do CPP coloca o interrogatório como o ÚLTIMO ato da instrução criminal (meio de defesa e autodefesa, após o réu conhecer toda a prova produzida contra si). O STF estendeu essa regra a todos os procedimentos penais, inclusive Lei de Drogas e processos originários (HC 127.900).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A inversão sem consentimento e com prejuízo viola a ampla defesa.' },
      { letter: 'C', explanation: 'Incorreta. O STF aplicou o art. 400 como último ato inclusive na ação penal originária e na Lei de Drogas.' },
      { letter: 'D', explanation: 'Incorreta. O cerceamento de defesa é arguível em preliminares e habeas corpus.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 400', textSnippet: 'Na audiência de instrução e julgamento, a ser realizada no prazo máximo de 60 (sessenta) dias, proceder-se-á à tomada de declarações do ofendido, à inquirição das testemunhas arroladas pela acusação e pela defesa, nesta ordem... interrogando-se, em seguida, o acusado.' }
    ],
    professorTip: 'Ordem da Audiência (Art. 400 CPP): Vítima -> Testemunhas Acusação -> Testemunhas Defesa -> Peritos/Acareação -> INTERROGATÓRIO DO RÉU POR ÚLTIMO!'
  },
  {
    id: 'procpenal_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Tribunal do Júri - Decisões da 1ª Fase (Pronúncia, Impronúncia, Desclassificação, Absolvição Sumária)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Encerrada a primeira fase do procedimento do Tribunal do Júri (judicium accusationis), o juiz sumariante conclui estar cabalmente provado que o réu agiu amparado por legítima defesa própria real e estrita, sem qualquer dúvida fática. Diante disso, o juiz deverá proferir decisão de:`,
    options: [
      { letter: 'A', text: 'Impronúncia, atacável por recurso em sentido estrito.' },
      { letter: 'B', text: 'Pronúncia, remetendo o exame da legítima defesa obrigatoriamente ao Conselho de Sentença.' },
      { letter: 'C', text: 'Absolvição sumária, atacável mediante recurso de apelação.' },
      { letter: 'D', text: 'Desclassificação própria para lesão corporal.' }
    ],
    correctAnswer: 'C',
    justification: `Conforme o art. 415, IV, do CPP, o juiz absolverá sumariamente o acusado quando demonstrada causa de isenção de pena ou de exclusão do crime (como legítima defesa comprovada de forma estreme de dúvida). Da sentença de absolvição sumária (ou impronúncia) cabe APELAÇÃO (art. 416 CPP); já da pronúncia ou desclassificação cabe Recurso em Sentido Estrito (art. 581, IV e II).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Impronúncia ocorre por falta de prova da materialidade ou de indícios suficientes de autoria (art. 414), e desafia apelação (art. 416).' },
      { letter: 'B', explanation: 'Incorreta. Havendo certeza probatória da excludente, impõe-se a absolvição sumária.' },
      { letter: 'D', explanation: 'Incorreta. Desclassificação ocorre quando o juiz entende inexistir crime doloso contra a vida.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 415 e Art. 416', textSnippet: 'Contra a sentença de impronúncia ou de absolvição sumária caberá apelação.' }
    ],
    professorTip: 'Recursos da 1ª Fase do Júri (macete das vogais): Impronúncia e Absolvição Sumária (A/I) = APELAÇÃO! Pronúncia e Desclassificação (P/D) = RESE!'
  },
  {
    id: 'procpenal_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Tribunal do Júri - Execução Imediata da Pena e Soberania dos Veredictos',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Em julgamento em plenário do Tribunal do Júri, o Conselho de Sentença condenou o réu à pena de 14 anos de reclusão por homicídio qualificado. O STF, ao julgar o Tema 1068 de Repercussão Geral (RE 1.235.340), consolidou o entendimento sobre a execução da pena imposta pelo Tribunal do Júri no sentido de que:`,
    options: [
      { letter: 'A', text: 'A prisão só pode ocorrer após o trânsito em julgado perante o STF em qualquer hipótese, sem necessidade de prévia intimação pessoal da defesa técnica ou anuência ministerial.' },
      { letter: 'B', text: 'A soberania dos veredictos do Tribunal do Júri autoriza a imediata execução de condenação imposta pelo corpo de jurados, independentemente do quantum da pena aplicada.' },
      { letter: 'C', text: 'A execução imediata continua restrita apenas a penas iguais ou superiores a 15 anos de reclusão, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'A apelação contra veredicto dos jurados tem efeito suspensivo automático integral, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' }
    ],
    correctAnswer: 'B',
    justification: `Ao julgar o RE 1.235.340 (Tema 1068, set/2024), o STF decidiu que a soberania dos veredictos do Tribunal do Júri (art. 5º, XXXVIII, c, CF/88) autoriza a imediata execução da pena imposta pelo Conselho de Sentença, independentemente do total da pena aplicada (inclusive inferior a 15 anos).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Essa regra aplica-se ao juiz singular comum (ADC 43/44/54), mas não ao Júri popular soberano.' },
      { letter: 'C', explanation: 'Incorreta. A limitação de 15 anos prevista na redação literal da Lei 13.964/19 foi superada pela tese ampla do Tema 1068.' },
      { letter: 'D', explanation: 'Incorreta. O tribunal não pode reverter o mérito condenatório, apenas anular em caso de decisão manifestamente contrária à prova dos autos (uma única vez).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, XXXVIII, c', textSnippet: 'É reconhecida a instituição do júri, com a organização que lhe der a lei, assegurados: (...) c) a soberania dos veredictos.' }
    ],
    jurisprudence: 'STF Tema 1068 (RE 1.235.340).',
    professorTip: 'Atualização importantíssima do STF (Tema 1068): Condenou no Tribunal do Júri = PODE EXECUTAR A PENA IMEDIATAMENTE, qualquer que seja o tempo de condenação!'
  },
  {
    id: 'procpenal_ext_13',
    exam: 'Prova Semestral Faculdade de Direito - Recursos Criminais',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Prazos Recursais e Fungibilidade no Processo Penal',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Intimada pessoalmente da sentença absolutória proferida pelo juízo singular, a acusação interpôs apelação no prazo de 5 dias, apresentando as razões recursais dentro do prazo subsequente de 8 dias. Contudo, contra decisão que rejeita a denúncia (Art. 581, I, CPP), o recurso cabível e o respectivo prazo de interposição no rito comum ordinário são:`,
    options: [
      { letter: 'A', text: 'Apelação, no prazo de 15 dias, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'B', text: 'Recurso em Sentido Estrito (rese), no prazo de 5 dias para interposição e 2 dias para razões.' },
      { letter: 'C', text: 'Agravo em Execução, no prazo de 5 dias, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'D', text: 'Carta Testemunhável, no prazo de 48 horas, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' }
    ],
    correctAnswer: 'B',
    justification: `Da decisão que não receber a denúncia ou a queixa no rito ordinário cabe Recurso em Sentido Estrito (art. 581, I, do CPP), com prazo de 5 dias para interposição (art. 586) e 2 dias para oferecimento das razões (art. 588). (Obs.: no Juizado Especial Criminal - Lei 9.099/95, da rejeição cabe Apelação em 10 dias).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não é apelação no rito comum e os prazos do CPP não são os de 15 dias do CPC.' },
      { letter: 'C', explanation: 'Incorreta. Agravo em execução (5 dias, Súmula 700 STF) cabe das decisões do juízo da execução penal.' },
      { letter: 'D', explanation: 'Incorreta. Carta testemunhável (48 horas) serve contra decisão que denegar ou obstar o seguimento do RESE ou agravo.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 581, I, Art. 586 e Art. 588', textSnippet: 'Caberá recurso, no sentido estrito, da decisão, despacho ou sentença: I - que não receber a denúncia ou a queixa...' }
    ],
    professorTip: 'Tabela de prazos do CPP: Apelação = 5 dias (interposição) + 8 dias (razões); RESE = 5 dias + 2 dias; Embargos de Declaração = 2 dias (5 dias no JECRIM); Agravo em Execução = 5 dias (Súmula 700 STF).'
  },
  {
    id: 'procpenal_ext_14',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Princípio da Vedação à Reformatio in Pejus (Art. 617 CPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Condenado em primeira instância a 4 anos de reclusão pelo crime de furto, o réu interpôs recurso de apelação exclusivo da defesa visando à absolvição ou redução da pena. O Ministério Público não recorreu da sentença. Ao julgar a apelação defensiva, o Tribunal de Justiça reconheceu nulidade absoluta não arguida pela defesa para majorar a pena ou determinou que o juiz de primeiro grau proferisse nova sentença com pena mais severa. Tal proceder:`,
    options: [
      { letter: 'A', text: 'É válido porque nulidade absoluta supera a proibição de agravamento.' },
      { letter: 'B', text: 'É ilegal por violar a proibição da reformatio in pejus direta e indireta.' },
      { letter: 'C', text: 'É permitido apenas quando o Ministério Público opina pelo agravamento em contrarrazões.' },
      { letter: 'D', text: 'Autoriza majoração apenas da pena de multa, nunca da privativa de liberdade.' }
    ],
    correctAnswer: 'B',
    justification: `Em recurso exclusivo da defesa, não pode a situação do réu ser agravada pelo tribunal (reformatio in pejus direta — art. 617 CPP), nem pode o juiz que proferir nova sentença após anulação por recurso exclusivo da defesa impor pena superior (reformatio in pejus indireta). Ademais, pela Súmula 160 do STF, é nula a decisão do tribunal que acolhe, contra o réu, nulidade não arguida no recurso da acusação.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Súmula 160 do STF veda expressamente o acolhimento de nulidade contra o réu sem recurso acusatório.' },
      { letter: 'C', explanation: 'Incorreta. Contrarrazões não possuem efeito devolutivo acusatório.' },
      { letter: 'D', explanation: 'Incorreta. A vedação alcança qualquer aspecto gravoso (pena privativa, multa, regime).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 617', textSnippet: 'O tribunal, câmara ou turma atenderá nas suas decisões ao disposto nos arts. 383, 386 e 387, no que for aplicável, não podendo, porém, ser agravada a pena, quando somente o réu houver apelado da sentença.' }
    ],
    jurisprudence: 'Súmula 160 do STF.',
    professorTip: 'Recurso exclusivo da defesa = NUNCA pode piorar a situação do réu! Nem no mesmo julgamento (direta), nem após anulação em novo julgamento (indireta)!'
  },
  {
    id: 'procpenal_ext_15',
    exam: 'Concurso Defensoria / MP - Processo Penal',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Embargos Infringentes e de Nulidade (Art. 609, par. único, CPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `No julgamento de recurso de apelação interposto pela defesa, a Câmara Criminal do Tribunal de Justiça negou provimento ao recurso por maioria de votos (2 x 1), vencido o desembargador revisor que votava pela absolvição do réu. O recurso cabível pela defesa para fazer prevalecer o voto vencido favorável ao acusado é:`,
    options: [
      { letter: 'A', text: 'Recurso Ordinário Constitucional, no prazo de 15 dias, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' },
      { letter: 'B', text: 'Embargos Infringentes e de Nulidade, privativos da defesa, no prazo de 10 dias a contar da publicação do acórdão.' },
      { letter: 'C', text: 'Agravo Interno, utilizável igualmente pelo Ministério Público e pela defesa, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'D', text: 'Revisão Criminal, por se tratar de divergência colegiada, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 609, parágrafo único, do CPP, quando não for unânime a decisão de segunda instância, DESFAVORÁVEL AO RÉU, admitem-se embargos infringentes e de nulidade, que poderão ser opostos dentro de 10 dias a contar da publicação do acórdão. Se o desacordo for parcial, os embargos serão restritos à matéria objeto de divergência. São privativos da defesa (o MP não pode opor).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. ROC cabe em denegação de HC ou MS nos tribunais.' },
      { letter: 'C', explanation: 'Incorreta. Não se trata de decisão monocrática de relator, mas de acórdão não unânime.' },
      { letter: 'D', explanation: 'Incorreta. Revisão criminal pressupõe trânsito em julgado.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 609, parágrafo único', textSnippet: 'Quando não for unânime a decisão de segunda instância, desfavorável ao réu, admitem-se embargos infringentes e de nulidade, que poderão ser opostos dentro de 10 (dez) dias...' }
    ],
    professorTip: 'Embargos Infringentes no Processo Penal: SÓ A DEFESA pode usar (não vale para o MP!), prazo de 10 DIAS, na Apelação/RESE/Agravo em Execução quando o placar for 2x1 contra o réu!'
  },
  {
    id: 'procpenal_ext_16',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Revisão Criminal (Arts. 621 a 631 CPP)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Após o falecimento de um condenado que teve sentença penal condenatória transitada em julgado anos antes, sua viúva e filhos descobrem documentos inéditos que comprovam cabalmente sua inocência. Quanto à revisão criminal prevista no Código de Processo Penal:`,
    options: [
      { letter: 'A', text: 'Não pode mais ser proposta após a morte do condenado nem após a extinção da pena, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' },
      { letter: 'B', text: 'Tem prazo decadencial de 2 anos a contar do trânsito em julgado, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'C', text: 'Pode ser requerida a qualquer tempo, antes ou após a extinção da pena, e mesmo após a morte do sentenciado pelo cônjuge, ascendente, descendente ou irmão.' },
      { letter: 'D', text: 'Admite também revisão pro societate requerida pelo Ministério Público quando surgir prova nova incriminadora após a absolvição, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' }
    ],
    correctAnswer: 'C',
    justification: `A revisão criminal é ação autônoma de impugnação imprescritível (pode ser ajuizada a qualquer tempo, antes ou após a extinção da pena — art. 622 CPP) e exclusiva pro reo. Falecido o condenado, têm legitimidade o cônjuge (ou companheiro), ascendente, descendente ou irmão (CADI) pelo art. 623 do CPP.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A legitimidade do CADI visa inclusive reabilitar a memória e gerar eventual indenização aos sucessores.' },
      { letter: 'B', explanation: 'Incorreta. Diferentemente da ação rescisória cível (2 anos), a revisão criminal NÃO tem prazo.' },
      { letter: 'D', explanation: 'Incorreta. O ordenamento brasileiro não admite revisão criminal pro societate.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 622 e Art. 623', textSnippet: 'A revisão poderá ser requerida em qualquer tempo, antes da extinção da pena ou após... A revisão poderá ser pedida pelo próprio réu ou por procurador legalmente habilitado ou, no caso de morte do réu, pelo cônjuge, ascendente, descendente ou irmão.' }
    ],
    professorTip: 'Revisão Criminal = Sem prazo! Só pró-réu! Após a morte, o C.A.D.I. (Cônjuge, Ascendente, Descendente, Irmão) pode ajuizar!'
  },
  {
    id: 'procpenal_ext_17',
    exam: 'Prova Semestral Faculdade de Direito - Prática Penal',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Nulidades no Processo Penal (Prejuízo e Súmula 523 STF)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Em ação penal condenatória, o réu esteve representado por advogado constituído que apresentou defesa prévia genérica, deixando de arrolar testemunhas e apresentando alegações finais sucintas sem explorar tese de absolvição mais ampla. À luz da Súmula 523 do STF:`,
    options: [
      { letter: 'A', text: 'A defesa meramente deficiente gera nulidade absoluta automática, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'B', text: 'A falta de defesa constitui nulidade absoluta, mas a sua deficiência só anulará o processo se houver prova de prejuízo para o réu.' },
      { letter: 'C', text: 'Tanto a falta quanto a deficiência dependem de arguição imediata antes do interrogatório sob pena de preclusão, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'O advogado constituído não pode ter sua atuação controlada pelo juiz em hipótese alguma, sob pena de nulidade processual absoluta insanável por violação às garantias do devido processo.' }
    ],
    correctAnswer: 'B',
    justification: `Reza a Súmula 523 do STF: "No processo penal, a falta da defesa constitui nulidade absoluta, mas a sua deficiência só o anulará se houver prova de prejuízo para o réu".`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A deficiência é nulidade relativa e exige demonstração concreta de prejuízo (pas de nullité sans grief).' },
      { letter: 'C', explanation: 'Incorreta. Falta total de defesa é nulidade absoluta, arguível em qualquer momento.' },
      { letter: 'D', explanation: 'Incorreta. Se o juiz verificar que o réu está indefeso, deve declará-lo e nomear defensor dativo/público (art. 265/263 CPP).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 563', textSnippet: 'Nenhum ato será declarado nulo, se da nulidade não resultar prejuízo para a acusação ou para a defesa.' }
    ],
    jurisprudence: 'Súmula 523 do STF.',
    professorTip: 'Súmula 523 STF: FALTA de defesa = nulidade absoluta (prejuízo presumido). DEFICIÊNCIA de defesa = nulidade relativa (precisa provar prejuízo)!'
  },
  {
    id: 'procpenal_ext_18',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Habeas Corpus e Hipóteses de Não Cabimento (Súmulas STF)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Sobre o cabimento do Habeas Corpus no direito processual penal brasileiro e as súmulas do Supremo Tribunal Federal, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Cabe habeas corpus contra decisão condenatória a pena de multa isolada, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'B', text: 'Não cabe habeas corpus quando já extinta a pena privativa de liberdade, nem contra decisão condenatória a pena exclusivamente de multa.' },
      { letter: 'C', text: 'O habeas corpus exige capacidade postulatória privativa de advogado inscrito na OAB, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'D', text: 'Cabe habeas corpus contra a imposição da pena de exclusão de militar, com preclusão imediata da oportunidade de produção probatória após a fase postulatória.' }
    ],
    correctAnswer: 'B',
    justification: `Consoante as Súmulas 693 e 695 do STF, "Não cabe habeas corpus contra decisão condenatória a pena de multa, ou relativo a processo em curso por infração penal a que a pena pecuniária seja a única cominada" (693) e "Não cabe habeas corpus quando já extinta a pena privativa de liberdade" (695). O HC tutela exclusivamente o direito de ir e vir (liberdade de locomoção).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Vedado pela Súmula 693 STF.' },
      { letter: 'C', explanation: 'Incorreta. Qualquer pessoa pode impetrar HC (não exige advogado).' },
      { letter: 'D', explanation: 'Incorreta. Vedado pela Súmula 694 STF ("Não cabe habeas corpus contra a imposição da pena de exclusão de militar ou de perda de patente ou de função pública").' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 647 e Art. 654', textSnippet: 'O habeas corpus poderá ser impetrado por qualquer pessoa, em seu favor ou de outrem, bem como pelo Ministério Público.' }
    ],
    jurisprudence: 'Súmulas 693, 694 e 695 do STF.',
    professorTip: 'Trio de Súmulas do HC no STF: 693 (não cabe para pena de multa), 694 (não cabe para perda de patente/exclusão militar), 695 (não cabe após extinta a pena)!'
  },
  {
    id: 'procpenal_ext_19',
    exam: 'Concurso Delegado / MP - Processo Penal',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Flagrante Preparado (Súmula 145 STF) x Flagrante Esperado',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Policial disfarçado entra em contato com suspeito e insiste reiteradamente para que ele consiga determinada droga ilícita para vender-lhe. Diante da provocação policial, o suspeito consegue pequena porção e comparece ao ponto combinado para entregar ao policial, ocasião em que é preso em flagrante. Segundo o STF (Súmula 145):`,
    options: [
      { letter: 'A', text: 'Trata-se de flagrante esperado plenamente válido, com autorização para atuação instrutória suplementar do magistrado na busca da verdade real.' },
      { letter: 'B', text: 'Trata-se de flagrante preparado (ou provocado), configurando crime impossível por obra do agente provocador, sendo ilegal a prisão em flagrante.' },
      { letter: 'C', text: 'Configura ação controlada válida ainda que sem comunicação prévia ao juízo, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'D', text: 'O agente provocador responde em coautoria pelo tráfico consumado, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' }
    ],
    correctAnswer: 'B',
    justification: `Na forma da Súmula 145 do STF: "Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação". Quando o agente policial induz/provoca a prática do delito e ao mesmo tempo controla o resultado para prender o agente, há crime impossível e o flagrante é nulo. Já no flagrante esperado, a polícia apenas aguarda a conduta espontânea do criminoso sem induzi-lo, sendo válido.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. No flagrante esperado não há induzimento nem provocação pelo policial.' },
      { letter: 'C', explanation: 'Incorreta. Ação controlada (flagrante prorrogado) consiste em retardar a prisão para melhor coleta probatória.' },
      { letter: 'D', explanation: 'Incorreta. Não há crime nem coautoria nesse caso.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 17', textSnippet: 'Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime.' }
    ],
    jurisprudence: 'Súmula 145 do STF.',
    professorTip: 'Flagrante PREPARADO (policial induz/provoca) = ILEGAL / Crime Impossível (Súmula 145 STF). Flagrante ESPERADO (policial recebe denúncia anônima e só espera) = VÁLIDO!'
  },
  {
    id: 'procpenal_ext_20',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Reconhecimento Pessoal de Pessoas (Art. 226 CPP e STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Em delegacia de polícia, a vítima de roubo foi chamada para realizar reconhecimento fotográfico de um suspeito por meio de foto isolada exibida no celular do agente policial (show-up), sem alinhamento com fotografias de outras pessoas semelhantes e sem lavratura de auto pormenorizado. Posteriormente, em juízo, a vítima apenas confirmou o reconhecimento feito na delegacia, não havendo nenhuma outra prova independente nos autos. Segundo a jurisprudência atual do STJ:`,
    options: [
      { letter: 'A', text: 'As formalidades são meras recomendações dispensáveis, autorizando a condenação, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'B', text: 'A inobservância do procedimento formal torna inválido o reconhecimento da pessoa suspeita, não podendo servir de lastro isolado para condenação nem mesmo se confirmado em juízo.' },
      { letter: 'C', text: 'O reconhecimento por fotografia isolada tem força probatória absoluta, com preservação da competência funcional do juízo natural fixada no recebimento da acusação. Essa diretriz orienta o procedimento desde a fase investigatória até o julgamento definitivo.' },
      { letter: 'D', text: 'O Art. 226 do CPP foi revogado pelo Pacote Anticrime, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' }
    ],
    correctAnswer: 'B',
    justification: `O STJ (HC 598.886 e HC 712.781) alterou sua antiga jurisprudência para fixar que o procedimento do art. 226 do CPP (descrição prévia pela vítima, alinhamento lado a lado com pessoas semelhantes e termo detalhado) constitui garantia mínima obrigatória. O descumprimento invalida o reconhecimento pessoal/fotográfico, impedindo condenação se não houver outras provas independentes.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A tese de "mera recomendação" foi expressamente superada pelo STJ.' },
      { letter: 'C', explanation: 'Incorreta. Reconhecimento fotográfico isolado não supre o rito legal.' },
      { letter: 'D', explanation: 'Incorreta. O art. 226 do CPP está plenamente vigente.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 226', textSnippet: 'Quando houver necessidade de fazer-se o reconhecimento de pessoa, proceder-se-á pela seguinte forma: I - a pessoa que tiver de fazer o reconhecimento será convidada a descrever a pessoa que deva ser reconhecida; II - a pessoa, cujo reconhecimento se pretender, será colocada, se possível, ao lado de outras que com ela tiverem qualquer semelhança...' }
    ],
    jurisprudence: 'STJ, HC 598.886/SC.',
    professorTip: 'Art. 226 do CPP agora é GARANTIA OBRIGATÓRIA segundo o STJ! Mostrou foto sozinha no WhatsApp sem descrever antes e sem outras fotos parecidas? Reconhecimento INVÁLIDO!'
  },
  {
    id: 'procpenal_ext_21',
    exam: 'Prova Semestral Faculdade de Direito - Execução Penal',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Lei de Execução Penal - Falta Grave, Remição e Súmulas',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Durante o cumprimento da pena em regime fechado, o apenado pratica falta disciplinar de natureza grave devidamente apurada em procedimento administrativo disciplinar (PAD) com advogado. Sobre os reflexos da falta grave na execução penal, segundo a LEP e as Súmulas do STJ:`,
    options: [
      { letter: 'A', text: 'A falta grave interrompe o prazo para obtenção do livramento condicional, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'B', text: 'A falta grave interrompe o prazo para progressão de regime, mas não interrompe o prazo para o livramento condicional nem para indulto/comutação.' },
      { letter: 'C', text: 'A falta grave acarreta a perda da integralidade de todos os dias remidos anteriormente pelo trabalho ou estudo, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'A apuração da falta grave dispensa defesa técnica por advogado no pad, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo as Súmulas 441, 534 e 535 do STJ: a prática de falta grave interrompe o prazo para a progressão de regime (art. 112, § 6º LEP), reiniciando o cômputo com base na pena remanescente, porém NÃO interrompe o prazo para livramento condicional (Súmula 441), nem para comutação/indulto (Súmula 535). Quanto aos dias remidos, o juiz pode revogar até 1/3 (art. 127 LEP), nunca a integralidade. E é obrigatória defesa técnica no PAD (Súmula 533 STJ e SV 5 não se aplica à execução penal).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Vedado pela Súmula 441 do STJ e art. 112, § 6º, LEP.' },
      { letter: 'C', explanation: 'Incorreta. A revogação da remição limita-se ao teto de até 1/3 (art. 127 LEP).' },
      { letter: 'D', explanation: 'Incorreta. A Súmula 533 do STJ exige defesa técnica no PAD disciplinar carcerário.' }
    ],
    statuteReferences: [
      { code: 'Lei de Execução Penal (Lei 7.210/84)', article: 'Art. 112, § 6º e Art. 127', textSnippet: 'Em caso de falta grave, o juiz poderá revogar até 1/3 (um terço) do tempo remido, observado o disposto no art. 57, recomeçando a contagem a partir da data da infração disciplinar.' }
    ],
    jurisprudence: 'Súmulas 441, 533, 534 e 535 do STJ.',
    professorTip: 'Falta grave na LEP: Reinicia contagem para PROGRESSÃO de regime; NÃO reinicia para Livramento Condicional nem Indulto; e só tira até 1/3 dos dias remidos!'
  },
  {
    id: 'procpenal_ext_22',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Audiência de Custódia e Prazo Legal (Art. 310 CPP)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Um cidadão é preso em flagrante pela prática de furto simples às 10h de segunda-feira. Nos termos do Art. 310 do Código de Processo Penal e da jurisprudência do STF sobre a audiência de custódia:`,
    options: [
      { letter: 'A', text: 'O preso deve ser apresentado ao juiz em audiência de custódia em até 24 horas após a realização da prisão, com presença do Ministério Público e de advogado ou defensor público.' },
      { letter: 'B', text: 'A audiência de custódia é realizada apenas quando solicitada formalmente pelo Delegado de Polícia, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'C', text: 'Se não for realizada a audiência em 24 horas sem motivação idônea, não há qualquer consequência legal sobre a prisão, sem possibilidade de atuação judicial de ofício para suprir omissão técnica da acusação.' },
      { letter: 'D', text: 'Na audiência de custódia, o juiz deverá interrogar o preso sobre o mérito detalhado do crime para fins de condenação antecipada, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 310, caput, do CPP determina que após receber o auto de prisão em flagrante, no prazo máximo de até 24 horas após a realização da prisão, o juiz deverá promover audiência de custódia com a presença do acusado, seu advogado constituído ou membro da Defensoria Pública e o membro do Ministério Público, verificando a legalidade da prisão, eventuais maus-tratos e a necessidade de cautelares.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. É ato obrigatório decorrente da lei e do Pacto de San José da Costa Rica.' },
      { letter: 'C', explanation: 'Incorreta. A não realização sem motivação idônea em 24h enseja ilegalidade da prisão, a ser relaxada pela autoridade competente (§ 4º).' },
      { letter: 'D', explanation: 'Incorreta. Na custódia não se colhe prova de mérito sobre a imputação, apenas sobre legalidade do flagrante, integridade física e condições cautelares.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 310, caput e § 4º', textSnippet: 'Após receber o auto de prisão em flagrante, no prazo máximo de até 24 (vinte e quatro) horas após a realização da prisão, o juiz deverá promover audiência de custódia...' }
    ],
    professorTip: 'Audiência de Custódia: prazo máximo de 24 horas da prisão; analisa legalidade do flagrante, tortura/maus-tratos e liberdade/preventiva — NUNCA o mérito do crime!'
  },
  {
    id: 'procpenal_ext_23',
    exam: 'Concurso Magistratura / MP - Processo Penal',
    examType: 'CONCURSO',
    board: 'FCC',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Mutatio Libelli x Emendatio Libelli (Arts. 383 e 384 CPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Na denúncia, o Ministério Público narrou que o réu subtraiu um celular mediante grave ameaça exercida com arma de fogo, mas, por equívoco técnico na capitulação, pediu a condenação pelo crime de furto simples (Art. 155 CP). Encerrada a instrução e comprovada a ameaça narrada na inicial, deseja o juiz condenar o réu por roubo (Art. 157 CP). Nessa situação:`,
    options: [
      { letter: 'A', text: 'Deve o juiz determinar aditamento obrigatório pelo Ministério Público (mutatio libelli), sob pena de nulidade, com preclusão imediata da oportunidade de produção probatória após a fase postulatória.' },
      { letter: 'B', text: 'Trata-se de emendatio libelli, podendo o juiz na própria sentença dar ao fato definição jurídica diversa sem modificar a descrição fática, ainda que aplique pena mais grave.' },
      { letter: 'C', text: 'O juiz é obrigado a absolver o réu em respeito à correlação estrita com o artigo de lei citado, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' },
      { letter: 'D', text: 'Em segundo grau, o tribunal pode aplicar a mutatio libelli pela primeira vez na apelação, com prosseguimento regular da persecução penal independentemente de manifestação prévia do ofendido.' }
    ],
    correctAnswer: 'B',
    justification: `O réu defende-se dos FATOS narrados na denúncia, não da capitulação legal dada pelo promotor. Quando o fato já está descrito na denúncia e o juiz apenas corrige a tipificação jurídica na sentença (ainda que imponha pena mais grave), aplica-se a emendatio libelli (art. 383 CPP). Já a mutatio libelli (art. 384) ocorre quando surge prova de circunstância elementar NÃO contida na denúncia, exigindo aditamento pelo MP (e é vedada em 2ª instância pela Súmula 453 do STF).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Como a grave ameaça já estava descrita na denúncia, não há fato novo a aditar.' },
      { letter: 'C', explanation: 'Incorreta. Não há vinculação ao artigo citado na peça inicial.' },
      { letter: 'D', explanation: 'Incorreta. Súmula 453 do STF proíbe mutatio libelli em segunda instância (já emendatio libelli é permitida em 2ª instância, respeitada a proibição de reformatio in pejus se só a defesa recorreu).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Penal', article: 'Art. 383', textSnippet: 'O juiz, sem modificar a descrição do fato contida na denúncia ou queixa, poderá atribuir-lhe definição jurídica diversa, ainda que, em consequência, tenha de aplicar pena mais grave.' }
    ],
    jurisprudence: 'Súmula 453 do STF.',
    professorTip: 'Emendatio (383) = Fato JÁ está na denúncia, só muda o artigo -> juiz faz direto na sentença! Mutatio (384) = Fato NOVO surgiu na instrução -> precisa de aditamento do MP (e nunca em 2ª instância, Súmula 453 STF)!'
  },
  {
    id: 'procpenal_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Processo Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Juizados Especiais Criminais (Lei nº 9.099/95)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Um cidadão foi autuado pela prática de contravenção penal de perturbação do sossego alheio (pena máxima de 3 meses). Recebido o termo circunstanciado no Juizado Especial Criminal, o juiz constatou que o autor não aceitou a proposta de transação penal oferecida pelo Ministério Público. Com base na Lei nº 9.099/95:`,
    options: [
      { letter: 'A', text: 'A não aceitação da transação penal implica o reconhecimento automático de culpa pelo autor do fato, em conformidade com a estrutura acusatória e com os prazos peremptórios do procedimento comum.' },
      { letter: 'B', text: 'A transação penal homologada e cumprida gera maus antecedentes criminais, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'C', text: 'Recusada a transação penal, o Ministério Público poderá oferecer denúncia oral em audiência, seguindo-se o procedimento sumaríssimo.' },
      { letter: 'D', text: 'Contra a sentença condenatória proferida no JECRIM caberá recurso de apelação para o Tribunal de Justiça no prazo de 5 dias, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' }
    ],
    correctAnswer: 'C',
    justification: `Não aceita a proposta de transação penal (nem havendo composição civil extintiva), o MP oferecerá denúncia oral (art. 77 da Lei 9.099/95), instaurando-se a ação penal pelo rito sumaríssimo. E das sentenças e rejeições de denúncia no JECRIM cabe Apelação no prazo de 10 dias para a Turma Recursal (art. 82).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A recusa apenas abre o processo normal com ampla defesa; e até mesmo a aceitação da transação não importa reconhecimento de culpa nem reincidência.' },
      { letter: 'B', explanation: 'Incorreta. A transação não gera antecedentes, reincidência nem efeitos civis (art. 76, §§ 4º e 6º).' },
      { letter: 'D', explanation: 'Incorreta. O prazo da apelação no JECRIM é de 10 dias (com razões inclusas) e o julgamento compete à Turma Recursal, não ao TJ.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.099/95', article: 'Art. 77 e Art. 82', textSnippet: 'Na ação penal de iniciativa pública, quando não houver aplicação de pena, pela ausência do autor do fato, ou pela não ocorrência da hipótese prevista no art. 76 desta Lei, o Ministério Público oferecerá ao Juiz, de imediato, denúncia oral, se não houver necessidade de diligências imprescindíveis.' }
    ],
    professorTip: 'JECRIM (INFRAÇÕES DE MENOR POTENCIAL OFENSIVO = Contravenções + Crimes com pena máxima ≤ 2 anos): Apelação em 10 DIAS para a Turma Recursal!'
  },
  {
    id: 'procpenal_ext_25',
    exam: 'Prova Semestral Faculdade de Direito - Processo Penal',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Penal',
    topic: 'Prerrogativa de Foro e Regra da Contemporaneidade (STF)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'ACADEMICA',
    statement: `Um Deputado Federal foi denunciado pela prática de crime de corrupção passiva cometido durante o exercício do atual mandato parlamentar e em razão das funções exercidas na Câmara dos Deputados. No decorrer da ação penal perante o STF, após encerrada a instrução processual, o deputado não se reelegeu e perdeu o mandato. Segundo o entendimento atualizado do Supremo Tribunal Federal sobre o foro por prerrogativa de função:`,
    options: [
      { letter: 'A', text: 'Com o fim do mandato, o processo deve ser imediatamente remetido ao juiz de primeira instância em qualquer fase, com manutenção regular da marcha procedimental até a prolação da sentença definitiva de mérito.' },
      { letter: 'B', text: 'A prerrogativa de foro abrange crimes cometidos durante o cargo e em razão dele, mas cessa com o término do mandato, salvo se já encerrada a instrução processual com publicação do despacho de intimação para alegações finais.' },
      { letter: 'C', text: 'O foro por prerrogativa de função acompanha vitaliciamente o ex-parlamentar após o fim do mandato, com preservação da competência funcional do juízo natural fixada no recebimento da acusação.' },
      { letter: 'D', text: 'O STF julga deputados federais mesmo por crimes cometidos antes da diplomação sem vínculo com o mandato, mediante controle de legalidade exercido apenas por ocasião do recurso ordinário cabível.' }
    ],
    correctAnswer: 'B',
    justification: `Na AP 937 (QO), o STF restringiu o foro por prerrogativa de função aos crimes cometidos NO CARGO e EM RAZÃO DO CARGO, fixando também que após o final da instrução processual — com a publicação do despacho de intimação para apresentação de alegações finais — a competência do STF se prorroga e não é mais deslocada se o agente deixar o cargo. (Nota: posteriormente, o STF reafirmou que a prerrogativa continua nos crimes funcionais quando há continuidade ou no marco da AP 937, devendo-se observar o marco final da instrução).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Encerrada a instrução com intimação para alegações finais, a competência não baixa mais para a 1ª instância (AP 937 QO).' },
      { letter: 'C', explanation: 'Incorreta. A Súmula 394 do STF (foro vitalício após cessar função) foi cancelada há décadas.' },
      { letter: 'D', explanation: 'Incorreta. Crimes anteriores à diplomação ou sem nexo funcional tramitam na 1ª instância.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 102, I, b', textSnippet: 'Compete ao Supremo Tribunal Federal, precipuamente, a guarda da Constituição, cabendo-lhe: I - processar e julgar, originariamente: b) nas infrações penais comuns, o Presidente da República, o Vice-Presidente, os membros do Congresso Nacional...' }
    ],
    jurisprudence: 'STF, Questão de Ordem na AP 937.',
    professorTip: 'Foro Privilegiado (AP 937 STF): 1) Crime cometido NO CARGO; 2) EM RAZÃO DAS FUNÇÕES; 3) Encerrada a instrução (alegações finais), a competência não desce mais!'
  }
];
