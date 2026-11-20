import { LegalQuestion } from '../../types';

export const CONSTITUCIONAL_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab39_const_03',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Constitucional',
    topic: 'Controle Concentrado de Constitucionalidade e Legitimidade Ativa',
    difficulty: 'Difícil',
    statement: `Determinada confederação sindical representativa dos trabalhadores em estabelecimentos de ensino ajuizou perante o Supremo Tribunal Federal Ação Direta de Inconstitucionalidade (ADI) questionando lei federal que instituiu diretrizes gerais para o sistema financeiro nacional e o mercado de capitais.
À luz da jurisprudência consolidada do STF sobre a legitimidade ativa e o controle abstrato de normas (Art. 103 da CF/88), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A confederação sindical é legitimada especial e carece de pertinência temática para impugnar a referida lei federal no STF.' },
      { letter: 'B', text: 'A confederação sindical é legitimada universal, podendo impugnar qualquer lei federal ou estadual sem demonstrar pertinência temática.' },
      { letter: 'C', text: 'Apenas os partidos políticos com representação no Congresso Nacional dependem de demonstração de pertinência temática.' },
      { letter: 'D', text: 'O STF admite ADI proposta por confederação sindical independentemente do conteúdo da norma impugnada.' }
    ],
    correctAnswer: 'A',
    justification: `O STF classifica os legitimados do art. 103 da CF/88 em universais e especiais. São legitimados especiais: Mesa da Assembleia Legislativa/CLDF, Governador de Estado/DF e Confederação Sindical ou Entidade de Classe de âmbito nacional. Esses legitimados precisam comprovar PERTINÊNCIA TEMÁTICA entre seus objetivos estatutários e a matéria veiculada na lei atacada. Como a entidade representa trabalhadores da educação e a lei versa sobre o sistema financeiro, falta pertinência temática.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Confederação sindical é legitimada especial, não universal.' },
      { letter: 'C', explanation: 'Incorreta. Partidos políticos com representação no Congresso são legitimados universais e não exigem pertinência temática.' },
      { letter: 'D', explanation: 'Incorreta. O STF exige rigorosa correlação entre os fins da entidade e a lei questionada.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 103, IX', textSnippet: 'Podem propor a ação direta de inconstitucionalidade e a ação declaratória de constitucionalidade: IX - confederação sindical ou entidade de classe de âmbito nacional.' }
    ],
    jurisprudence: 'STF, ADI 1.157/DF: As confederações sindicais e entidades de classe de âmbito nacional qualificam-se como legitimadas ativas especiais, dependendo de demonstração de pertinência temática direta.',
    professorTip: 'Mnemônico dos Legitimados Ativos Especiais da ADI: Mesa da ALESP/CLDF, Governadores e Confederações/Entidades de Classe. Todos os demais do art. 103 são Universais!'
  },
  {
    id: 'oab38_const_02',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Constitucional',
    topic: 'Repartição de Competências Federativas (Art. 22 e 24 CF/88)',
    difficulty: 'Médio',
    statement: `Lei promulgada pelo Estado Alfa estabeleceu a proibição de que concessionárias de telefonia móvel e serviços de telecomunicações cobrem tarifas adicionais pelo envio de notificações bancárias aos usuários residentes no território do respectivo Estado, fixando multa administrativa em caso de descumprimento.
Considerando a sistemática constitucional de repartição de competências da CF/88 e a jurisprudência pacífica do STF:`,
    options: [
      { letter: 'A', text: 'A lei estadual é inconstitucional por invadir a competência privativa da União para legislar sobre telecomunicações (Art. 22, IV, da CF/88).' },
      { letter: 'B', text: 'A lei estadual é plenamente constitucional com fundamento na competência concorrente sobre direito do consumidor (Art. 24, V).' },
      { letter: 'C', text: 'A competência para legislar sobre tarifas de telecomunicações é compartilhada entre União e Municípios com base no interesse local.' },
      { letter: 'D', text: 'Os Estados possuem competência privativa e exclusiva para fiscalizar e tabelar tarifas de serviços prestados em seu território.' }
    ],
    correctAnswer: 'A',
    justification: `É pacífica e sumulada a jurisprudência do STF (Súmula Vinculante nº 46 e tese reiterada de Repercussão Geral): leis estaduais que impõem obrigações, gratuidades ou regras tarifárias a concessionárias de telefonia e telecomunicações invadem a competência legislativa privativa da União estabelecida no Art. 22, inciso IV, da CF/88.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Embora o Estado invoque direito do consumidor, o STF entende que a norma atinge o núcleo do regime de telecomunicações (matéria privativa federal).' },
      { letter: 'C', explanation: 'Incorreta. Telecomunicações é monopólio/competência privativa da União Federal (Art. 21, XI e Art. 22, IV).' },
      { letter: 'D', explanation: 'Incorreta. Não há competência privativa estadual para disciplinar concessões da União.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 22, IV', textSnippet: 'Compete privativamente à União legislar sobre: IV - águas, energia, informática, telecomunicações e radiodifusão;' }
    ],
    jurisprudence: 'STF, ADI 5.610/BA: É inconstitucional lei estadual que disponha sobre regras de serviços de telecomunicações, por usurpação da competência privativa da União (CF, art. 22, IV).',
    professorTip: 'Toda vez que a prova da FGV trouxer lei de Estado ou Município querendo regular ou proibir cobrança de telefonia celular/telecomunicações: É INCONSTITUCIONAL por violar a competência da União (Art. 22, IV)!'
  },
  {
    id: 'oab36_const_03',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Constitucional',
    topic: 'Remédios Constitucionais - Habeas Data vs Mandado de Segurança',
    difficulty: 'Fácil',
    statement: `Cidadão requereu formalmente perante a Receita Federal acesso a certidão comprobatória de recolhimento de tributos federais efetuados por terceiro estranho (empresa concorrente), para fins de instrução de ação cível de indenização privada. O pedido foi indeferido na via administrativa por violação de sigilo fiscal de terceiro.
Diante da negativa e do ordenamento constitucional, assinale o instrumento adequado:`,
    options: [
      { letter: 'A', text: 'Não cabe Habeas Data, pois este remédio constitucional é personalíssimo e destina-se a assegurar o conhecimento de informações relativas à pessoa do próprio impetrante.' },
      { letter: 'B', text: 'Cabe Habeas Data, pois qualquer cidadão pode obter dados de quaisquer pessoas constantes de bancos de entidades governamentais.' },
      { letter: 'C', text: 'Cabe Mandado de Injunção por ausência de lei regulamentadora do acesso à informação.' },
      { letter: 'D', text: 'Cabe Ação Popular direta contra o agente fiscal que negou a exibição de dados de terceiros.' }
    ],
    correctAnswer: 'A',
    justification: `O Habeas Data (Art. 5º, LXXII, 'a' da CF/88) possui natureza personalíssima: presta-se para assegurar o conhecimento ou retificação de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados governamentais ou de caráter público. Não serve para bisbilhotar ou obter dados fiscais de terceiros.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O Habeas Data não pode ser impetrado para obter informações de terceiros (caráter personalíssimo).' },
      { letter: 'C', explanation: 'Incorreta. A matéria do Habeas Data já é amplamente regulamentada pela Lei 9.507/97.' },
      { letter: 'D', explanation: 'Incorreta. Ação popular visa anular ato lesivo ao patrimônio público, não obter dados de concorrente.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, LXXII, "a"', textSnippet: 'conceder-se-á habeas data: a) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público;' }
    ],
    professorTip: 'Lembre-se: O Habeas Data é PERSONALÍSSIMO. Se for sobre dado próprio = HD. Se for certidão em repartição pública sobre defesa de direito em geral = Mandado de Segurança (Art. 5º, XXXIV, b).'
  },
  {
    id: 'oab37_const_04',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Constitucional',
    topic: 'Processo Legislativo e Cláusulas Pétreas',
    difficulty: 'Médio',
    statement: `Grupo de Deputados Federais apresentou Proposta de Emenda à Constituição (PEC) com o objetivo de abolir o voto obrigatório, instituindo o voto facultativo para todos os cidadãos brasileiros maiores de 18 anos.
Considerando os limites materiais ao poder constituinte derivado reformador (Art. 60 da CF/88), a referida PEC:`,
    options: [
      { letter: 'A', text: 'É constitucionalmente admissível, pois a cláusula pétrea resguarda o voto direto, secreto, universal e periódico, não incluindo a sua obrigatoriedade.' },
      { letter: 'B', text: 'É inconstitucional, pois o caráter obrigatório do sufrágio é cláusula pétrea expressa da CF/88.' },
      { letter: 'C', text: 'Não pode sequer ser deliberada pelo plenário sem prévia aprovação em plebiscito popular.' },
      { letter: 'D', text: 'Depende de aprovação por maioria absoluta em sessão conjunta das duas casas do Congresso Nacional.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 60, § 4º, inciso II, da CF/88 prevê como cláusula pétrea "o voto direto, secreto, universal e periódico". A OBRIGATORIEDADE do voto NÃO constitui cláusula pétrea. Portanto, nada impede que Emenda Constitucional altere o voto no Brasil para o modelo facultativo.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O art. 60, § 4º, II resguarda as características do voto (direto, secreto, universal e periódico), mas NÃO a obrigatoriedade.' },
      { letter: 'C', explanation: 'Incorreta. Não há exigência constitucional de plebiscito prévio para tramitação de PEC regular.' },
      { letter: 'D', explanation: 'Incorreta. PEC exige aprovação em 2 turnos, por 3/5 dos votos dos membros de cada Casa separadamente (Art. 60, § 2º).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 60, § 4º, II', textSnippet: 'Não será objeto de deliberação a proposta de emenda tendente a abolir: II - o voto direto, secreto, universal e periódico;' }
    ],
    professorTip: 'Pegadinha clássica da FGV: O voto OBRIGATÓRIO não é cláusula pétrea! Cláusula pétrea é o voto DIRETO, SECRETO, UNIVERSAL e PERIÓDICO (D-S-U-P).'
  },
  {
    id: 'oab40_const_05',
    exam: 'XL Exame de Ordem Unificado (OAB 40) - FGV / 2024',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Direitos Fundamentais e Inviolabilidade de Domicílio',
    difficulty: 'Médio',
    statement: `Policiais militares, durante patrulhamento rotineiro noturno em área de alta incidência de criminalidade, avistaram um indivíduo em atitude suspeita em frente a uma residência. Ao notar a aproximação da viatura, o suspeito correu para o quintal da casa. Sem mandado judicial e sem fundadas razões prévias de flagrante delito documentadas, os policiais arrombaram a porta da residência e apreenderam drogas no armário do quarto.
Consoante a tese fixada pelo STF no Tema 280 da Repercussão Geral:`,
    options: [
      { letter: 'A', text: 'A entrada forçada em domicílio sem mandado judicial só é lícita quando amparada em fundadas razões, devidamente justificadas pelas circunstâncias prévias do caso concreto, sob pena de nulidade das provas.' },
      { letter: 'B', text: 'A constatação posterior de drogas no interior da residência legitima retroativamente a invasão policial domiciliar.' },
      { letter: 'C', text: 'O estado de flagrante delito em crime permanente autoriza o ingresso domiciliar a qualquer hora do dia ou da noite, independentemente de justa causa prévia.' },
      { letter: 'D', text: 'A mera fuga ao avistar a viatura policial constitui justa causa suficiente e inquestionável para violação do domicílio.' }
    ],
    correctAnswer: 'A',
    justification: `No julgamento do RE 603.616 (Tema 280), o STF pacificou a tese: a entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em crime permanente, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente e de nulidade dos atos praticados.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A descoberta de ilícito a posteriori NÃO convalida a invasão ilegítima realizada sem justa causa prévia.' },
      { letter: 'C', explanation: 'Incorreta. A natureza permanente do delito não confere carta branca para invasões sem elementos prévios objetivos.' },
      { letter: 'D', explanation: 'Incorreta. O STJ e o STF pacificaram que a simples fuga descontextualizada não autoriza a invasão da residência.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, XI', textSnippet: 'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial;' }
    ],
    jurisprudence: 'STF, RE 603.616/RO (Tema 280): A entrada forçada em domicílio sem mandado judicial só é lícita quando amparada em fundadas razões, justificadas pelas circunstâncias do caso concreto.',
    professorTip: 'Tema 280 do STF é questão certa na OAB! "O fim não justifica os meios": achar droga depois NÃO cura a invasão ilegal sem justa causa prévia!'
  },
  {
    id: 'oab38_const_06',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Constitucional',
    topic: 'Remédios Constitucionais - Habeas Data e Mandado de Segurança',
    difficulty: 'Fácil',
    statement: `Mariana, servidora pública estadual, solicitou administrativamente à Secretaria de Administração certidão funcional contendo informações sobre períodos de licença e averbação de tempo de contribuição para fins de aposentadoria. Decorridos 60 dias sem qualquer resposta do órgão competente, Mariana procura assistência jurídica pretendendo ajuizar medida judicial célere para ter acesso aos registros sobre sua pessoa constantes do banco de dados governamental.
À luz da Constituição da República de 1988 e da jurisprudência do STF (Súmula Vinculante 2), o remédio constitucional cabível é:`,
    options: [
      { letter: 'A', text: 'Habeas Data, sendo imprescindível a comprovação da recusa da autoridade administrativa em fornecer a informação ou da decorrência de mais de 10 dias sem resposta.' },
      { letter: 'B', text: 'Mandado de Segurança, pois o Habeas Data destina-se exclusivamente a obter dados de caráter penal ou policial.' },
      { letter: 'C', text: 'Ação Popular, por se tratar de violação direta ao princípio da publicidade administrativa.' },
      { letter: 'D', text: 'Habeas Corpus preventivo, em razão de potencial prejuízo à liberdade de locomoção previdenciária.' }
    ],
    correctAnswer: 'A',
    justification: `O Habeas Data (CF/88, art. 5º, LXXII, 'a' e Lei nº 9.507/97) é a ação constitucional adequada para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais. A Súmula Vinculante nº 2 do STF estabelece que o não atendimento do pedido de informações no prazo legal de 10 dias configura recusa tácita e legitima o ajuizamento de habeas data.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O habeas data protege quaisquer dados personalíssimos, civis, funcionais ou fiscais em poder do Estado.' },
      { letter: 'C', explanation: 'Incorreta. Ação popular visa anular atos lesivos ao patrimônio público, moralidade ou meio ambiente, e exige condição de cidadão eleitor.' },
      { letter: 'D', explanation: 'Incorreta. Habeas corpus protege unicamente a liberdade de locomoção.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, LXXII, "a"', textSnippet: 'conceder-se-á habeas data: a) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público;' }
    ],
    jurisprudence: 'Súmula Vinculante nº 2 do STF: O não atendimento de requisição de informações formulada pelo cidadão ao poder público no prazo legal justifica a impetração de habeas data.',
    professorTip: 'Bizu do Habeas Data: É personalíssimo ("minhas informações") e exige RECUSA PRÉVIA (expressa ou pelo decurso de prazo da SV 2).'
  },
  {
    id: 'oab37_const_07',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Constitucional',
    topic: 'Direitos Políticos - Elegibilidade e Inelegibilidades Reflexas',
    difficulty: 'Médio',
    statement: `O Governador de determinado Estado da Federação, encontrando-se no primeiro biênio de seu primeiro mandato eletivo, decide se divorciar de sua esposa, Patrícia. No ano seguinte, Patrícia decide se candidatar ao cargo de Deputada Estadual na mesma circunscrição territorial (o próprio Estado).
À luz da Constituição Federal de 1988 e da Súmula Vinculante 18 do STF:`,
    options: [
      { letter: 'A', text: 'Patrícia é inelegível no território de jurisdição do titular, pois a dissolução da sociedade conjugal no curso do mandato não afasta a inelegibilidade reflexa.' },
      { letter: 'B', text: 'Patrícia é plenamente elegível, porque o divórcio extingue de plano todos os efeitos da afinidade e do parentesco eleitoral.' },
      { letter: 'C', text: 'Patrícia só seria inelegível se pretendesse concorrer ao mesmo cargo de Governadora, podendo disputar o Poder Legislativo.' },
      { letter: 'D', text: 'Patrícia poderia se candidatar somente se o Governador renunciasse com pelo menos 6 meses de antecedência.' }
    ],
    correctAnswer: 'A',
    justification: `Nos termos do art. 14, § 7º da CF/88, são inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes até o segundo grau. A Súmula Vinculante nº 18 do STF consolidou a tese de que a dissolução da sociedade ou do vínculo conjugal, no curso do mandato, NÃO afasta a inelegibilidade prevista no § 7º do art. 14 da Constituição Federal, justamente para evitar fraudes eleitorais mediante 'divórcio de conveniência'.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme a SV 18, o divórcio no curso do mandato não cessa a inelegibilidade reflexa.' },
      { letter: 'C', explanation: 'Incorreta. A inelegibilidade reflexa incide sobre QUALQUER cargo eletivo dentro da jurisdição do titular do Executivo (no caso, todo o Estado).' },
      { letter: 'D', explanation: 'Incorreta. A renúncia do titular para desincompatibilização não elide a inelegibilidade de seus parentes no mesmo pleito.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 14, § 7º', textSnippet: 'São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o segundo grau ou por adoção, do Presidente da República, de Governador de Estado ou Território, do Distrito Federal, de Prefeito ou de quem os haja substituído...' }
    ],
    jurisprudence: 'Súmula Vinculante nº 18 do STF: A dissolução da sociedade ou do vínculo conjugal, no curso do mandato, não afasta a inelegibilidade prevista no § 7º do artigo 14 da Constituição Federal.',
    professorTip: 'Memorize a SV 18: "Divórcio no mandato não elege ex-cônjuge!" O STF criou a súmula expressamente para impedir fraudes eleitorais em casamentos de fachada.'
  },
  {
    id: 'oab38_const_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Constitucional',
    topic: 'Controle Concentrado e Pertinência Temática (Art. 103 CF/88)',
    difficulty: 'Difícil',
    statement: `Uma Confederação Sindical de âmbito nacional que congrega os trabalhadores da indústria metalúrgica ajuizou perante o Supremo Tribunal Federal Ação Direta de Inconstitucionalidade (ADI) impugnando lei federal que disciplina regras estritas sobre aposentadoria especial de magistrados e membros do Ministério Público da União.
À luz da jurisprudência consolidada do STF quanto à legitimidade ativa no controle concentrado (Art. 103 da CF/88):`,
    options: [
      {
        letter: 'A',
        text: 'A Confederação Sindical não possui legitimidade ativa ad causam, pois é legitimada especial (interessada), exigindo a comprovação de pertinência temática direta entre seus objetivos institucionais e a norma impugnada.'
      },
      {
        letter: 'B',
        text: 'A Confederação Sindical é legitimada universal, podendo impugnar qualquer lei federal ou estadual sobre qualquer assunto perante o STF.'
      },
      {
        letter: 'C',
        text: 'Apenas partidos políticos com representação no Congresso Nacional exigem prova de pertinência temática.'
      },
      {
        letter: 'D',
        text: 'O Governador de Estado e o Conselho Federal da OAB são os únicos legitimados especiais do art. 103.'
      }
    ],
    correctAnswer: 'A',
    justification: `O STF divide os 9 legitimados do Art. 103 da CF/88 em dois grupos: (1) LEGITIMADOS UNIVERSAIS (neutros, que podem impugnar qualquer matéria sem precisar provar interesse): Presidente da República, Mesa do Senado, Mesa da Câmara, Procurador-Geral da República, Conselho Federal da OAB e Partidos Políticos com representação no Congresso Nacional; (2) LEGITIMADOS ESPECIAIS (interessados, que DEVEM comprovar o vínculo de pertinência temática direta entre a norma e suas atribuições): Governador de Estado/DF, Mesa de Assembleia Legislativa/Câmara Legislativa e Confederação Sindical ou Entidade de Classe de âmbito nacional. Como a previdência de magistrados não guarda relação com os trabalhadores metalúrgicos, a petição inicial deve ser indeferida por ilegitimidade.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Confederações sindicais são legitimadas especiais do inciso IX do art. 103.' },
      { letter: 'C', explanation: 'Incorreta. Partidos políticos são legitimados universais (não precisam de pertinência temática).' },
      { letter: 'D', explanation: 'Incorreta. O Conselho Federal da OAB é legitimado universal.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 103, IX', textSnippet: 'Podem propor a ação direta de inconstitucionalidade e a ação declaratória de constitucionalidade: (...) IX - confederação sindical ou entidade de classe de âmbito nacional.' }
    ],
    jurisprudence: 'STF, ADI 4.722/DF: A exigência de pertinência temática é requisito de admissibilidade para a atuação dos legitimados especiais no controle concentrado de constitucionalidade perante a Suprema Corte.',
    professorTip: 'Mnemônico dos 3 Legitimados Especiais (precisam de Pertinência Temática): G-M-C! G-overnador, M-esa da Assembleia Legislativa, C-onfederação Sindical / Entidade de Classe Nacional! Todos os outros 6 são UNIVERSAIS (incluindo CFOAB e Partidos Políticos)!'
  },
  {
    id: 'faculdade_const_09',
    exam: 'Exame de Teoria da Constituição e Poder Constituinte - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Cláusulas Pétreas e Limitações Materiais ao Poder Constituinte Derivado',
    difficulty: 'Médio',
    statement: `Um terço dos membros do Senado Federal apresentou Proposta de Emenda à Constituição (PEC) com o objetivo de substituir o sistema de voto direto e periódico nas eleições presidenciais por uma eleição indireta a ser realizada pelo Congresso Nacional em sessão unicameral. A proposta também estabelecia a supressão do princípio da presunção de inocência para crimes funcionais.
Conforme as limitações materiais explícitas impostas ao poder constituinte derivado reformador no Art. 60, § 4º da Constituição Federal de 1988:`,
    options: [
      {
        letter: 'A',
        text: 'Não será objeto de deliberação a proposta de emenda tendente a abolir a forma federativa de Estado, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais.'
      },
      {
        letter: 'B',
        text: 'A PEC é plenamente constitucional, pois o Poder Constituinte Derivado é ilimitado, autônomo e incondicionado.'
      },
      {
        letter: 'C',
        text: 'As cláusulas pétreas podem ser revogadas se a emenda for aprovada por unanimidade em três turnos de votação.'
      },
      {
        letter: 'D',
        text: 'Apenas a forma republicana e o sistema presidencialista constituem cláusulas pétreas no Brasil.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 60, § 4º da CF/88 positiva as limitações materiais explícitas (cláusulas pétreas) ao poder reformador: 'Não será objeto de deliberação a proposta de emenda tendente a abolir: I - a forma federativa de Estado; II - o voto direto, secreto, universal e periódico; III - a separação dos Poderes; IV - os direitos e garantias individuais'. Propostas que atinjam o voto direto ou garantias individuais (como a presunção de inocência) padecem de inconstitucionalidade material flagrante, sendo vedada inclusive a sua mera deliberação nas Casas Legislativas (cabendo Mandado de Segurança impetrado por parlamentar perante o STF para trancar a tramitação).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O poder derivado é condicionado, subordinado e limitado pela própria Constituição originária.' },
      { letter: 'C', explanation: 'Incorreta. As cláusulas pétreas são intangíveis pelo poder reformador, independentemente do quórum de aprovação.' },
      { letter: 'D', explanation: 'Incorreta. A forma republicana é princípio sensível (art. 34, VII), mas as cláusulas pétreas expressas são as do art. 60, § 4º.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 60, § 4º', textSnippet: 'Não será objeto de deliberação a proposta de emenda tendente a abolir: I - a forma federativa de Estado; II - o voto direto, secreto, universal e periódico; III - a separação dos Poderes; IV - os direitos e garantias individuais.' }
    ],
    jurisprudence: 'STF, MS 20.257/DF: O parlamentar tem direito público subjetivo à observância do devido processo legislativo constitucional, assistindo-lhe legitimidade para impetrar mandado de segurança visando obstaculizar proposta de emenda tendente a violar cláusula pétrea.',
    professorTip: 'Mnemônico das Cláusulas Pétreas do Art. 60, § 4º: FO-VO-SE-DI! FO-rma federativa de Estado, VO-to direto, secreto, universal e periódico, SE-paração dos poderes, DI-reitos e garantias individuais! Atenção: Voto OBRIGATÓRIO NÃO é cláusula pétrea (pode virar facultativo); o que é pétreo é voto DIRETO, SECRETO, UNIVERSAL e PERIÓDICO!'
  },
  {
    id: 'oab37_const_10',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Constitucional',
    topic: 'Remédios Constitucionais e Habeas Data (Súmula 2 do STJ)',
    difficulty: 'Fácil',
    statement: `Rodrigo formulou requerimento por escrito perante uma autarquia federal previdenciária requerendo acesso e certidão de seus dados cadastrais e tempo de contribuição constantes do banco de dados governamental. Decorridos mais de 60 dias sem qualquer resposta ou justificativa da autoridade responsável pelo banco de dados, Rodrigo procurou um advogado para ajuizar a ação constitucional cabível.
À luz da Constituição Federal de 1988, da Lei nº 9.507/1997 e da Súmula nº 2 do STJ:`,
    options: [
      {
        letter: 'A',
        text: 'É cabível a impetração de Habeas Data, pois a prova do decurso do prazo legal sem manifestação da autoridade administrativa configura recusa implícita e preenche o interesse de agir.'
      },
      {
        letter: 'B',
        text: 'O Habeas Data não é cabível, sendo obrigatório ajuizar Ação Popular com pagamento de preparo e custas iniciais.'
      },
      {
        letter: 'C',
        text: 'Rodrigo deve impetrar Mandado de Injunção, pois não existe lei que discipline o acesso a dados cadastrais no Brasil.'
      },
      {
        letter: 'D',
        text: 'Habeas Data só pode ser utilizado para retificar dados, sendo vedado para o mero conhecimento de informações pessoais.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Habeas Data (Art. 5º, LXXII da CF/88 e Lei 9.507/97) é a ação constitucional destinada a assegurar o conhecimento de registros relativos à pessoa do impetrante constantes de bancos de dados públicos ou governamentais, ou para retificação desses dados. A Súmula nº 2 do Superior Tribunal de Justiça exige a prévia recusa administrativa: 'Não cabe o habeas data (CF, art. 5º, LXXII, letra a) se não houve recusa de informações por parte da autoridade administrativa'. A Lei 9.507/97 considera recusa tanto a negativa expressa quanto o decurso do prazo de 10 dias sem resposta. Havendo a omissão/recusa, o Habeas Data (que é gratuito - art. 5º, LXXIII) é a via límpida e adequada.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Ação popular visa anular ato lesivo ao patrimônio público, moralidade, meio ambiente ou patrimônio histórico (art. 5º, LXXIII).' },
      { letter: 'C', explanation: 'Incorreta. Mandado de injunção pressupõe falta de norma regulamentadora que torne inviável exercício de direito (art. 5º, LXXI).' },
      { letter: 'D', explanation: 'Incorreta. O Habeas Data serve expressamente para conhecer informações (alínea "a") e para retificá-las (alínea "b").' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, LXXII e LXXVII', textSnippet: 'LXXII - conceder-se-á habeas data: a) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público; b) para a retificação de dados... LXXVII - são gratuitas as ações de habeas corpus e habeas data, e, na forma da lei, os atos necessários ao exercício da cidadania.' }
    ],
    jurisprudence: 'Súmula 2 do STJ: Não cabe o habeas data (CF, art. 5º, LXXII, letra a) se não houve recusa de informações por parte da autoridade administrativa.',
    professorTip: 'Bizu dos Remédios: Para impetrar Habeas Data precisa de PROVA DA RECUSA da administração (Súmula 2 do STJ)! E lembre-se: Habeas Corpus e Habeas Data são GRATUITOS (Art. 5º, LXXVII CF/88)!'
  }
];
