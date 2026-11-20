import { LegalQuestion } from '../../../types';

export const CONSTITUCIONAL_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'const_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Controle de Constitucionalidade e ADPF',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Determinado Município editou decreto autônomo criando restrições à circulação de livros didáticos em escolas locais, contrariando diretamente a liberdade de cátedra e o pluralismo de ideias previstos na Constituição Federal de 1988. Uma confederação sindical de âmbito nacional pretende impugnar diretamente o ato perante o Supremo Tribunal Federal.
À luz da Constituição Federal e da Lei nº 9.882/99, a medida cabível no controle concentrado é:`,
    options: [
      { letter: 'A', text: 'Ação Direta de Inconstitucionalidade (ADI), pois a norma municipal violou diretamente preceito da Constituição Federal.' },
      { letter: 'B', text: 'Arguição de Descumprimento de Preceito Fundamental (ADPF), por se tratar de ato normativo municipal em face de preceito fundamental da CF/88, observada a subsidiariedade.' },
      { letter: 'C', text: 'Ação Declaratória de Constitucionalidade (ADC), para que o STF fixe interpretação conforme à Constituição.' },
      { letter: 'D', text: 'Mandado de Injunção coletivo originário no STF contra o Prefeito Municipal.' }
    ],
    correctAnswer: 'B',
    justification: `Não cabe ADI contra lei ou ato normativo municipal em face da Constituição Federal (Art. 102, I, "a", CF/88 limita a ADI a lei/ato normativo federal ou estadual). O instrumento adequado no controle concentrado perante o STF para impugnar ato municipal ou norma pré-constitucional lesiva a preceito fundamental é a ADPF (Art. 102, § 1º, CF/88 e Art. 1º, parágrafo único, I, da Lei nº 9.882/99).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Lei ou decreto municipal não pode ser objeto de ADI perante o STF (apenas normas federais e estaduais).' },
      { letter: 'C', explanation: 'Incorreta. A ADC tem por objeto exclusivo lei ou ato normativo FEDERAL, visando confirmar sua constitucionalidade diante de controvérsia judicial relevante.' },
      { letter: 'D', explanation: 'Incorreta. O Mandado de Injunção destina-se a suprir omissão normativa que inviabilize o exercício de direitos constitucionais.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 102, § 1º', textSnippet: 'A arguição de descumprimento de preceito fundamental, decorrente desta Constituição, será apreciada pelo Supremo Tribunal Federal, na forma da lei.' }
    ],
    professorTip: 'Norma MUNICIPAL ou PRÉ-CONSTITUCIONAL (antes de 05/10/1988) violando a CF/88 no controle concentrado do STF = SEMPRE ADPF! Nunca cabe ADI nem ADC para lei municipal.'
  },
  {
    id: 'const_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Direitos Políticos e Inelegibilidades',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Mariana foi eleita Prefeita do Município Alfa em 2020 e reeleita em 2024. Em 2026, durante seu segundo mandato consecutivo, divorciou-se judicialmente de seu marido, Lucas, que nunca havia ocupado cargo eletivo e pretende candidatar-se a Vereador no mesmo Município Alfa nas eleições de 2028.
Considerando o Art. 14, § 7º, da CF/88 e a Súmula Vinculante 18 do STF, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A dissolução do vínculo conjugal no curso do mandato afasta a inelegibilidade reflexa, podendo Lucas candidatar-se normalmente.' },
      { letter: 'B', text: 'A dissolução da sociedade ou do vínculo conjugal, no curso do mandato, NÃO afasta a inelegibilidade prevista no § 7º do art. 14 da Constituição Federal.' },
      { letter: 'C', text: 'Lucas é elegível apenas porque Mariana já está em seu segundo mandato.' },
      { letter: 'D', text: 'A inelegibilidade reflexa aplica-se apenas a cargos do Poder Executivo, jamais a Vereador.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos da Súmula Vinculante 18 do STF e do Art. 14, § 7º, da CF/88, o cônjuge e os parentes até o segundo grau de Prefeito são inelegíveis no território de jurisdição do titular, salvo se já titulares de mandato eletivo e candidatos à reeleição. Ademais, a dissolução do vínculo conjugal no curso do mandato NÃO afasta a inelegibilidade (SV 18).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A SV 18 existe justamente para impedir divórcios simulados no curso do mandato para burlar a inelegibilidade reflexa.' },
      { letter: 'C', explanation: 'Incorreta. O fato de estar no segundo mandato não libera parentes para o mesmo território; apenas se Mariana renunciasse 6 meses antes do pleito (e como ela não pode tentar um 3º mandato, Lucas ainda dependeria de ela não estar no cargo nos 6 meses anteriores — mas durante o mandato e até 6 meses antes sem renúncia, permanece inelegível).' },
      { letter: 'D', explanation: 'Incorreta. A inelegibilidade reflexa abrange qualquer cargo eletivo (Executivo ou Legislativo) no território de jurisdição do titular.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 14, § 7º', textSnippet: 'São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o segundo grau ou por adoção, do Presidente da República, de Governador de Estado ou Território, do Distrito Federal, de Prefeito ou de quem os haja substituído dentro dos seis meses anteriores ao pleito...' }
    ],
    jurisprudence: 'Súmula Vinculante 18 do STF: A dissolução da sociedade ou do vínculo conjugal, no curso do mandato, não afasta a inelegibilidade prevista no § 7º do artigo 14 da Constituição Federal.',
    professorTip: 'SV 18 STF: Divórcio durante o mandato NÃO afasta inelegibilidade reflexa! Atenção à exceção: só afasta por morte do titular (entendimento do STF).'
  },
  {
    id: 'const_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Nacionalidade Brasileira e Extradição',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Jean nasceu na França, filho de pai francês e mãe brasileira que estava em Paris a turismo. Ao completar 20 anos, Jean mudou-se para o Brasil, passou a residir em Florianópolis e optou pela nacionalidade brasileira perante a Justiça Federal. Dois anos depois, o governo da França solicitou ao Brasil a extradição de Jean pela prática de crime comum praticado em Paris antes da mudança.
Considerando o Art. 12 e o Art. 5º, LI, da CF/88, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Jean é brasileiro naturalizado e pode ser extraditado pelo crime comum praticado antes da naturalização.' },
      { letter: 'B', text: 'Jean é brasileiro nato (por critério sanguíneo com residência no Brasil e opção confirmatória), razão pela qual não pode ser extraditado em nenhuma hipótese.' },
      { letter: 'C', text: 'A opção pela nacionalidade brasileira aos 20 anos gera efeitos ex nunc apenas para direitos políticos, permitindo extradição por fatos anteriores.' },
      { letter: 'D', text: 'A extradição de brasileiro nato é admitida em caso de tráfico ilícito de entorpecentes.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 12, I, "c", da CF/88, são brasileiros NATOS os nascidos no estrangeiro de pai brasileiro ou de mãe brasileira, desde que sejam registrados em repartição brasileira competente OU venham a residir na República Federativa do Brasil e optem, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira. Como brasileiro nato, Jean não pode ser extraditado em nenhuma hipótese (Art. 5º, LI).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Filho de mãe brasileira nascido no exterior que reside no Brasil e opta após a maioridade é brasileiro NATO, e não naturalizado.' },
      { letter: 'C', explanation: 'Incorreta. A opção confirmatória possui eficácia declaratória retroativa (ex tunc), reconhecendo a nacionalidade originária.' },
      { letter: 'D', explanation: 'Incorreta. O tráfico ilícito de entorpecentes autoriza a extradição do brasileiro NATURALIZADO (a qualquer tempo), jamais do nato.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 12, I, "c" e Art. 5º, LI', textSnippet: 'nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins...' }
    ],
    professorTip: 'Brasileiro NATO: NUNCA é extraditado. Naturalizado: só por crime comum ANTES da naturalização ou tráfico de drogas (a qualquer tempo).'
  },
  {
    id: 'const_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Repartição de Competências Legislativas',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A Assembleia Legislativa de determinado Estado promulgou lei estadual obrigando as empresas de telefonia móvel a instalar equipamentos bloqueadores de sinal nos estabelecimentos prisionais estaduais, sob pena de multa diária. Inconformada, a associação nacional das operadoras ajuizou ADI no STF.
À luz da repartição de competências da CF/88 e da jurisprudência do STF, essa lei estadual é:`,
    options: [
      { letter: 'A', text: 'Constitucional, por se tratar de competência concorrente sobre direito penitenciário e segurança pública.' },
      { letter: 'B', text: 'Inconstitucional por vício formal, pois compete privativamente à União legislar sobre telecomunicações.' },
      { letter: 'C', text: 'Constitucional, por tratar de matéria de interesse regional e proteção ao consumidor.' },
      { letter: 'D', text: 'Inconstitucional apenas se houver lei federal proibindo o bloqueio.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do Art. 22, IV, da CF/88 e da jurisprudência reiterada do STF (ADI 5.356 e ADIs sobre bloqueadores de celular em presídios), compete PRIVATIVAMENTE à União legislar sobre telecomunicações, sendo formalmente inconstitucional lei estadual que imponha obrigações às operadoras de telefonia móvel, ainda que sob justificativa de segurança penitenciária.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Apesar de direito penitenciário estar na competência concorrente (Art. 24, I), impor obrigação operacional às concessionárias de telecomunicações invade a competência privativa da União (Art. 22, IV).' },
      { letter: 'C', explanation: 'Incorreta. Não se trata de competência suplementar consumerista.' },
      { letter: 'D', explanation: 'Incorreta. A competência privativa da União do Art. 22 veda a atuação estadual mesmo na inércia federal, salvo lei complementar federal autorizadora (Art. 22, parágrafo único).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 22, IV', textSnippet: 'Compete privativamente à União legislar sobre: IV - águas, energia, informática, telecomunicações e radiodifusão.' }
    ],
    jurisprudence: 'STF - ADI 5.356: É inconstitucional lei estadual que obriga operadoras de telefonia a instalar bloqueadores de sinal celular em presídios, por invadir competência privativa da União sobre telecomunicações.',
    professorTip: 'Macete FGV: qualquer lei estadual criando obrigação para operadoras de telefonia/energia/correios/trânsito/direito do trabalho/direito civil invade competência PRIVATIVA da União (Art. 22 CF)!'
  },
  {
    id: 'const_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Medidas Provisórias e Limitações Materiais',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Diante de grave crise econômica, o Presidente da República editou Medida Provisória alterando regras sobre: (I) alíquotas do Imposto de Importação; (II) tipificação penal de crimes contra o sistema financeiro; e (III) requisitos para criação de cargos em comissão na Administração Federal.
Considerando o Art. 62, § 1º, da CF/88, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A Medida Provisória é válida quanto aos itens I e III, mas vedada quanto ao item II, pois é proibido editar MP sobre direito penal.' },
      { letter: 'B', text: 'É vedada a edição de Medida Provisória em matéria tributária, tornando nulo também o item I.' },
      { letter: 'C', text: 'A Medida Provisória é válida em todos os itens em razão da urgência e relevância.' },
      { letter: 'D', text: 'É vedada Medida Provisória sobre direito penal apenas quando agravar a pena, sendo admitida para criar tipos penais brandos.' }
    ],
    correctAnswer: 'A',
    justification: `O Art. 62, § 1º, inciso I, alínea "b", da CF/88 proíbe expressamente a edição de Medida Provisória relativa a direito penal, processual penal e processual civil. Já matéria tributária (respeitada a anterioridade do Art. 62, § 2º, quando aplicável) e organização administrativa (criação de cargos públicos na estrutura executiva, não reservada a lei complementar) são admitidas.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Medida Provisória PODE instituir ou majorar tributos que não exijam lei complementar (Art. 62, § 2º).' },
      { letter: 'C', explanation: 'Incorreta. As vedações materiais do Art. 62, § 1º são absolutas e não podem ser afastadas nem por urgência.' },
      { letter: 'D', explanation: 'Incorreta. A vedação constitucional a direito penal via MP é ampla (embora o STF já tenha aceito excepcionalmente norma benéfica em caso isolado de prazo de entrega de armas, a letra constitucional proíbe direito penal por MP).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 62, § 1º, I, "b"', textSnippet: 'É vedada a edição de medidas provisórias sobre matéria: I - relativa a: ... b) direito penal, processual penal e processual civil;' }
    ],
    professorTip: 'Proibido em MP (Art. 62, § 1º): Nacionalidade/Cidadania/Direitos Políticos, Penal, Processual Penal, Processual Civil (atenção: Direito CIVIL PODE!), organização do Judiciário/MP, planos plurianuais/orçamento (salvo crédito extraordinário), matéria de Lei Complementar.'
  },
  {
    id: 'const_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Remédios Constitucionais (Mandado de Segurança e Habeas Data)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Carlos solicitou por escrito a um órgão público estadual acesso às informações pessoais constantes em seu prontuário funcional, bem como a retificação de um dado cadastral incorreto sobre sua filiação. Passados 25 dias úteis, a autoridade administrativa indeferiu formalmente o pedido de retificação e acesso aos dados pessoais de Carlos.
Para assegurar o conhecimento e a retificação dessas informações pessoais, o remédio constitucional adequado é:`,
    options: [
      { letter: 'A', text: 'Mandado de Segurança individual.' },
      { letter: 'B', text: 'Habeas Data.' },
      { letter: 'C', text: 'Mandado de Injunção.' },
      { letter: 'D', text: 'Ação Popular.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 5º, LXXII, da CF/88 prevê o Habeas Data para: a) assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público; b) para a retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo. Como houve recusa administrativa prévia (Súmula 2 do STJ), cabe Habeas Data.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O Mandado de Segurança tem caráter residual ("não amparado por habeas corpus ou habeas data" - Art. 5º, LXIX).' },
      { letter: 'C', explanation: 'Incorreta. Mandado de Injunção serve para suprir ausência de norma regulamentadora.' },
      { letter: 'D', explanation: 'Incorreta. Ação Popular tutela o patrimônio público, a moralidade administrativa, o meio ambiente e o patrimônio histórico-cultural.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 5º, LXXII', textSnippet: 'Conceder-se-á habeas data: a) para assegurar o conhecimento de informações relativas à pessoa do impetrante... b) para a retificação de dados...' }
    ],
    jurisprudence: 'Súmula 2 do STJ: Não cabe o habeas data se não houve recusa de informações por parte da autoridade administrativa.',
    professorTip: 'Dica clássica: Informação PESSOAL do próprio impetrante (+ recusa prévia) = Habeas Data. Informação de interesse geral/certidão sobre terceiro ou ato público = Mandado de Segurança!'
  },
  {
    id: 'const_ext_07',
    exam: 'Prova Acadêmica / Direito Constitucional',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Teoria da Constituição e Aplicabilidade das Normas',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Segundo a clássica classificação de José Afonso da Silva sobre a eficácia e aplicabilidade das normas constitucionais, o Art. 5º, XIII, da CF/88 ("é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer") classifica-se como norma constitucional de eficácia:`,
    options: [
      { letter: 'A', text: 'Plena, pois não admite qualquer restrição por lei infraconstitucional.' },
      { letter: 'B', text: 'Contida (ou restringível), pois possui aplicabilidade direta e imediata, mas o legislador infraconstitucional pode restringir seu alcance ao estabelecer qualificações profissionais.' },
      { letter: 'C', text: 'Limitada de princípio institutivo, dependendo integralmente de lei complementar para produzir qualquer efeito.' },
      { letter: 'D', text: 'Programática, servindo apenas como meta futura ao legislador ordinário.' }
    ],
    correctAnswer: 'B',
    justification: `Normas de eficácia CONTIDA (ou prospectiva/restringível) têm aplicabilidade direta, imediata e integral desde a promulgação da Constituição, mas permitem que lei infraconstitucional (ou conceitos éticos/técnicos) restrinja sua abrangência, exatamente como o Art. 5º, XIII (livre exercício profissional até que lei exija qualificação, como o Exame da OAB).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A norma de eficácia plena não prevê redução de seu campo de incidência por lei ordinária posterior.' },
      { letter: 'C', explanation: 'Incorreta. Enquanto não houver lei restringindo, a profissão já pode ser exercida livremente — prova de que sua aplicabilidade é imediata, e não limitada.' },
      { letter: 'D', explanation: 'Incorreta. Normas programáticas definem programas e metas estatais (como erradicação da pobreza, direito à saúde em políticas públicas), sendo espécie de eficácia limitada.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 5º, XIII', textSnippet: 'é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer.' }
    ],
    professorTip: 'Classificação de José Afonso da Silva cai em TODA prova de graduação: Plena = imediata e não restringível; Contida = imediata, mas a lei pode conter/restringir (ex: Art. 5º, XIII); Limitada = mediata/indireta, depende de lei para produzir efeitos plenos.'
  },
  {
    id: 'const_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Comissões Parlamentares de Inquérito (CPI)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Uma Comissão Parlamentar de Inquérito (CPI) instaurada pela Câmara dos Deputados determinou, por deliberação fundamentada da maioria de seus membros: (I) a quebra do sigilo bancário e fiscal de um empresário investigado; (II) a decretação de prisão preventiva do empresário; e (III) a interceptação telefônica das ligações do investigado.
À luz do Art. 58, § 3º, da CF/88 e da jurisprudência do STF sobre reserva de jurisdição, a CPI possui poderes para determinar:`,
    options: [
      { letter: 'A', text: 'Apenas o item I (quebra de sigilo bancário, fiscal e de dados), dependendo os itens II e III de ordem judicial.' },
      { letter: 'B', text: 'Os itens I e III, cabendo ao juiz apenas a prisão preventiva.' },
      { letter: 'C', text: 'Todos os três itens, pois tem poderes de investigação próprios das autoridades judiciais.' },
      { letter: 'D', text: 'Nenhum dos três itens sem autorização prévia do Presidente da Câmara.' }
    ],
    correctAnswer: 'A',
    justification: `As CPIs têm poderes de investigação próprios das autoridades judiciais (Art. 58, § 3º, CF/88), podendo decretar fundamentadamente a quebra de sigilo bancário, fiscal e de registros telefônicos (dados já passados). Contudo, estão sujeitas à cláusula constitucional de RESERVA DE JURISDIÇÃO quanto à prisão (salvo flagrante), busca e apreensão domiciliar e interceptação telefônica (escuta em tempo real - Art. 5º, XII, CF/88).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Interceptação telefônica (comunicação em curso) depende exclusivamente de ordem judicial (Art. 5º, XII).' },
      { letter: 'C', explanation: 'Incorreta. A reserva constitucional de jurisdição impede que CPIs decretem prisão preventiva, busca domiciliar ou interceptação.' },
      { letter: 'D', explanation: 'Incorreta. A CPI tem autonomia para deliberar pela maioria de seus membros a quebra motivada de sigilo bancário e fiscal.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 58, § 3º', textSnippet: 'As comissões parlamentares de inquérito, que terão poderes de investigação próprios das autoridades judiciais... serão criadas pela Câmara dos Deputados e pelo Senado Federal, em conjunto ou separadamente, mediante requerimento de um terço de seus membros...' }
    ],
    professorTip: 'O que CPI PODE: quebrar sigilo bancário, fiscal e registro de ligações passadas, conduzir testemunha coercitivamente. O que CPI NÃO PODE (Reserva de Jurisdição): prisão preventiva, busca e apreensão domiciliar, interceptação telefônica e indisponibilidade de bens!'
  },
  {
    id: 'const_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Imunidade Parlamentar Formal e Material',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um Deputado Federal, após a diplomação, foi preso em flagrante pela prática de crime inafiançável de tráfico de drogas fora do Congresso Nacional. No dia seguinte, um Senador da República proferiu discurso na tribuna do Senado imputando fatos políticos graves a um Ministro de Estado no exercício do mandato.
Considerando o Art. 53 da CF/88, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A prisão do Deputado é ilegal porque parlamentares federais nunca podem ser presos antes da sentença transitada em julgado.' },
      { letter: 'B', text: 'Em caso de flagrante de crime inafiançável, os autos serão remetidos dentro de 24 horas à Câmara dos Deputados, para que, pelo voto da maioria de seus membros, resolva sobre a prisão; quanto ao Senador, ele é inviolável civil e penalmente por suas opiniões, palavras e votos proferidos da tribuna.' },
      { letter: 'C', text: 'Os autos da prisão em flagrante do Deputado devem ser remetidos ao STF, que decidirá definitivamente sem participação da Câmara.' },
      { letter: 'D', text: 'A imunidade material do Senador cobre apenas responsabilidade penal, mantendo-se a responsabilidade civil por danos morais.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 53, caput, da CF/88 estabelece a imunidade material (inviolabilidade civil E penal por quaisquer opiniões, palavras e votos ligados ao exercício parlamentar). Já o Art. 53, § 2º, determina que desde a expedição do diploma os membros do Congresso Nacional não poderão ser presos, salvo em flagrante de crime inafiançável, caso em que os autos serão remetidos dentro de 24 horas à Casa respectiva para que, pelo voto da maioria de seus membros, resolva sobre a prisão.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Flagrante de crime inafiançável autoriza a prisão do parlamentar, submetida ao crivo da Casa em 24h.' },
      { letter: 'C', explanation: 'Incorreta. A deliberação sobre a manutenção ou relaxamento da prisão cabe à Casa Legislativa respectiva (maioria absoluta dos membros).' },
      { letter: 'D', explanation: 'Incorreta. O Art. 53, caput expressamente prevê inviolabilidade CIVIL e PENAL.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 53, caput e § 2º', textSnippet: 'Os Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos... § 2º Desde a expedição do diploma, os membros do Congresso Nacional não poderão ser presos, salvo em flagrante de crime inafiançável.' }
    ],
    professorTip: 'Imunidades parlamentares começam da DIPLOMAÇÃO (e não da posse!). Prisão só em flagrante de crime inafiançável -> autos vão à Casa em 24h para decidir pela maioria dos membros!'
  },
  {
    id: 'const_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Ação Popular e Legitimidade Ativa',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um contrato administrativo firmado sem licitação por determinado Prefeito causou evidente prejuízo ao patrimônio público municipal e violação à moralidade administrativa. Desejam propor Ação Popular visando anular o ato lesivo: (1) Joana, brasileira de 17 anos com título de eleitor regular; (2) uma associação civil de proteção ao patrimônio; e (3) Pedro, português equiparado residente no Brasil sem alistamento eleitoral brasileiro.
Nos termos do Art. 5º, LXXIII, da CF/88 e da Lei nº 4.717/65, possuem legitimidade ativa para propor a Ação Popular:`,
    options: [
      { letter: 'A', text: 'Apenas Joana, por ser cidadã (eleitora no gozo dos direitos políticos).' },
      { letter: 'B', text: 'Joana e a associação civil.' },
      { letter: 'C', text: 'Todos os três, pois a defesa do patrimônio público é aberta a qualquer interessado.' },
      { letter: 'D', text: 'Apenas pessoas maiores de 18 anos com título de eleitor, excluindo Joana e a associação.' }
    ],
    correctAnswer: 'A',
    justification: `A legitimidade ativa da Ação Popular é privativa do CIDADÃO (pessoa física no gozo dos direitos políticos, comprovada pelo título de eleitor — Art. 5º, LXXIII, CF/88 e Art. 1º, § 3º, Lei 4.717/65). O menor entre 16 e 18 anos facultativamente alistado como eleitor é cidadão ativo e pode ajuizar Ação Popular (assistido). Pessoa jurídica (associação) não tem legitimidade (Súmula 365 do STF).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme a Súmula 365 do STF, pessoa jurídica não tem legitimidade para propor ação popular.' },
      { letter: 'C', explanation: 'Incorreta. Estrangeiro sem cidadania eleitoral e pessoa jurídica são ilegítimos.' },
      { letter: 'D', explanation: 'Incorreta. Aos 17 anos com título de eleitor regular já há cidadania ativa.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 5º, LXXIII', textSnippet: 'qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural...' }
    ],
    jurisprudence: 'Súmula 365 do STF: Pessoa jurídica não tem legitimidade para propor ação popular.',
    professorTip: 'Ação Popular = só CIDADÃO (título de eleitor!), inclusive menor de 16-17 anos eleitor. Pessoa jurídica NUNCA (Súmula 365 STF), nem Ministério Público na propositura inicial (o MP atua como fiscal e pode assumir se o autor desistir!).'
  },
  {
    id: 'const_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Tratados Internacionais de Direitos Humanos',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `O Brasil ratificou determinado tratado internacional de proteção aos direitos humanos aprovado no Congresso Nacional pelo quórum de maioria simples em turno único nas duas Casas. Posteriormente, verificou-se conflito entre um dispositivo desse tratado e uma lei ordinária federal anterior.
Segundo a jurisprudência consolidada do STF e o Art. 5º, § 3º, da CF/88, esse tratado possui hierarquia:`,
    options: [
      { letter: 'A', text: 'Equivalente às emendas constitucionais.' },
      { letter: 'B', text: 'Supralegal (acima das leis ordinárias e abaixo da Constituição Federal), paralisando a eficácia da lei ordinária com ele incompatível.' },
      { letter: 'C', text: 'De lei ordinária comum, devendo prevalecer a norma que tratar do tema de modo mais específico.' },
      { letter: 'D', text: 'De lei complementar tributária.' }
    ],
    correctAnswer: 'B',
    justification: `Os tratados internacionais de direitos humanos aprovados pelo quórum qualificado do Art. 5º, § 3º (3/5 em dois turnos em cada Casa) equivalem às emendas constitucionais. Já os tratados de direitos humanos aprovados pelo rito comum (ou anteriores à EC 45/2004, como o Pacto de San José da Costa Rica) possuem status SUPRALEGAL (acima das leis, abaixo da CF/88), conforme decidiu o STF no RE 466.343.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Status constitucional exige aprovação em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos.' },
      { letter: 'C', explanation: 'Incorreta. Tratados comuns (que não versam sobre direitos humanos) têm status de lei ordinária; os de direitos humanos sem quórum qualificado têm status supralegal.' },
      { letter: 'D', explanation: 'Incorreta. Não existe equiparação à lei complementar para tratados de direitos humanos.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 5º, § 3º', textSnippet: 'Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.' }
    ],
    jurisprudence: 'STF - RE 466.343: Os tratados internacionais de direitos humanos não aprovados pelo rito do Art. 5º, § 3º da CF possuem hierarquia supralegal.',
    professorTip: 'Pirâmide dos tratados no STF: 1) Direitos Humanos com 3/5 em 2 turnos = Emenda Constitucional; 2) Direitos Humanos sem esse rito = Supralegal (acima da lei, abaixo da CF); 3) Demais tratados = Lei Ordinária.'
  },
  {
    id: 'const_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Estado de Defesa e Estado de Sítio',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Diante de calamidade de grandes proporções na natureza atingindo dois Estados da Federação, o Presidente da República pretende decretar medida excepcional para restringir temporariamente o sigilo de correspondência e o direito de reunião em locais determinados.
Comparando o Estado de Defesa (Art. 136) e o Estado de Sítio (Art. 137), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O Presidente pode decretar o Estado de Defesa ouvidos o Conselho da República e o Conselho de Defesa Nacional, submetendo o decreto em 24 horas ao Congresso Nacional, que decidirá por maioria absoluta.' },
      { letter: 'B', text: 'Tanto o Estado de Defesa quanto o Estado de Sítio dependem de autorização prévia do Congresso Nacional antes da decretação presidencial.' },
      { letter: 'C', text: 'O Estado de Defesa pode durar até 60 dias prorrogáveis indefinidamente.' },
      { letter: 'D', text: 'Durante a vigência do Estado de Defesa é permitida emenda constitucional visando à reforma política.' }
    ],
    correctAnswer: 'A',
    justification: `No Estado de Defesa (Art. 136, CF/88), o Presidente decreta diretamente após ouvir o Conselho da República e o Conselho de Defesa Nacional, e submete o ato com justificativa ao Congresso Nacional dentro de 24 horas (Art. 136, § 4º), que decide por maioria absoluta (§ 6º). Já no Estado de Sítio (Art. 137), o Presidente solicita autorização PRÉVIA ao Congresso Nacional.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Só o Estado de Sítio exige autorização prévia do Congresso; o Estado de Defesa é decretado e submetido em 24h para aprovação posterior.' },
      { letter: 'C', explanation: 'Incorreta. O prazo do Estado de Defesa não pode ser superior a 30 dias, podendo ser prorrogado uma única vez por igual período (máximo total de 60 dias).' },
      { letter: 'D', explanation: 'Incorreta. O Art. 60, § 1º proíbe emendar a Constituição durante intervenção federal, estado de defesa ou estado de sítio.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Arts. 136 e 137', textSnippet: 'O Presidente da República pode, ouvidos o Conselho da República e o Conselho de Defesa Nacional, decretar estado de defesa... § 4º Decretado o estado de defesa ou sua prorrogação, o Presidente da República, dentro de vinte e quatro horas, submeterá o ato com a respectiva justificação ao Congresso Nacional, que decidirá por maioria absoluta.' }
    ],
    professorTip: 'Estado de DEFESA = DEcreta primeiro e avisa o Congresso em 24h (prazo 30 + 30 dias). Estado de SÍTIO = SOlicita autorização prévia ao Congresso!'
  },
  {
    id: 'const_ext_13',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Cláusulas Pétreas e Poder Constituinte Reformador',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Um grupo de Senadores apresentou Proposta de Emenda à Constituição (PEC) com o objetivo de tornar facultativo o voto nas eleições gerais no Brasil, bem como extinguir a periodicidade das eleições municipais, prorrogando mandatos de prefeitos por prazo indeterminado.
Considerando o Art. 60, § 4º, da Constituição Federal de 1988, a PEC deve ser considerada:`,
    options: [
      { letter: 'A', text: 'Integralmente inconstitucional, pois tanto a obrigatoriedade do voto quanto a periodicidade são cláusulas pétreas.' },
      { letter: 'B', text: 'Inconstitucional na parte que extingue a periodicidade das eleições (pois viola o voto direto, secreto, universal e periódico), mas constitucional quanto à discussão sobre obrigatoriedade ou facultatividade do voto.' },
      { letter: 'C', text: 'Integralmente constitucional caso seja aprovada por três quintos em dois turnos.' },
      { letter: 'D', text: 'Inconstitucional apenas porque PEC só pode ser proposta pelo Presidente da República.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 60, § 4º, II, da CF/88 protege como cláusula pétrea o voto direto, secreto, universal e PERIÓDICO — não incluindo a obrigatoriedade do voto no rol imutável (a doutrina e o STF distinguem o voto obrigatório das características protegidas no inciso II). Prorrogar mandatos indefinidamente violaria a periodicidade e a forma republicana/democrática.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A obrigatoriedade do voto não consta do Art. 60, § 4º, II (apenas direto, secreto, universal e periódico).' },
      { letter: 'C', explanation: 'Incorreta. Nem mesmo com 3/5 em dois turnos uma PEC pode abolir cláusula pétrea.' },
      { letter: 'D', explanation: 'Incorreta. Um terço, no mínimo, dos membros do Senado Federal pode propor PEC (Art. 60, I).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 60, § 4º, II', textSnippet: 'Não será objeto de deliberação a proposta de emenda tendente a abolir: ... II - o voto direto, secreto, universal e periódico;' }
    ],
    professorTip: 'Cláusulas pétreas do voto (Art. 60, § 4º, II): Di-Se-U-Pe (Direto, Secreto, Universal, Periódico). OBRIGATÓRIO não é cláusula pétrea!'
  },
  {
    id: 'const_ext_14',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Cláusula de Reserva de Plenário (Súmula Vinculante 10)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Ao julgar apelação cível interposta por contribuinte, uma Câmara Cível (órgão fracionário) de Tribunal de Justiça estadual, sem declarar formalmente a inconstitucionalidade de lei estadual vigente, afastou sua aplicação no caso concreto por entendê-la incompatível com o princípio constitucional da igualdade, sem submeter a questão ao Órgão Especial ou Plenário do Tribunal.
Segundo o Art. 97 da CF/88 e a Súmula Vinculante 10 do STF, essa decisão fracionária é:`,
    options: [
      { letter: 'A', text: 'Válida, pois não houve declaração expressa de inconstitucionalidade.' },
      { letter: 'B', text: 'Nula por violar a cláusula de reserva de plenário, mesmo que o órgão fracionário não tenha declarado expressamente a inconstitucionalidade.' },
      { letter: 'C', text: 'Válida, porque o controle difuso dispensa reserva de plenário nos tribunais estaduais.' },
      { letter: 'D', text: 'Nula apenas se envolver lei federal, não se aplicando a lei estadual.' }
    ],
    correctAnswer: 'B',
    justification: `A Súmula Vinculante 10 do STF dispõe expressamente que viola a cláusula de reserva de plenário (CF, Art. 97) a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Afastar a incidência da norma com fundamento constitucional equivale a declarar-lhe a inconstitucionalidade de modo oblíquo.' },
      { letter: 'C', explanation: 'Incorreta. O Art. 97 da CF aplica-se justamente ao controle difuso nos tribunais (órgãos colegiados), não se aplicando ao juiz singular de 1º grau nem quando já há decisão anterior do Plenário ou STF (Art. 949, parágrafo único, CPC).' },
      { letter: 'D', explanation: 'Incorreta. Abrange leis e atos normativos federais, estaduais e municipais.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 97', textSnippet: 'Somente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público.' }
    ],
    jurisprudence: 'Súmula Vinculante 10 do STF: Viola a cláusula de reserva de plenário (CF, artigo 97) a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.',
    professorTip: 'SV 10 cai demais! Quando NÃO precisa ir ao Plenário: 1) juiz de 1º grau; 2) turma recursal do JEC (não é tribunal); 3) norma pré-constitucional (não recepção); 4) já existir decisão do Plenário do tribunal ou do STF sobre a matéria.'
  },
  {
    id: 'const_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Direito à Saúde e Fornecimento de Medicamentos',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um cidadão portador de doença grave ajuizou ação de obrigação de fazer contra o Município visando ao fornecimento de medicamento de alto custo registrado na ANVISA, porém ainda não incorporado às listas oficiais do SUS (RENAME).
De acordo com a jurisprudência consolidada do STF (Temas 793 e 500 de Repercussão Geral) e do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Os entes da federação respondem solidariamente nas demandas prestacionais na área da saúde, competindo à autoridade judicial direcionar o cumprimento conforme as regras de repartição de competências e determinar o ressarcimento a quem suportou o ônus financeiro.' },
      { letter: 'B', text: 'O Poder Público está obrigado a fornecer gratuitamente qualquer medicamento experimental ainda sem registro na ANVISA em qualquer hipótese.' },
      { letter: 'C', text: 'O Município não possui legitimidade passiva em demandas de saúde, que cabem exclusivamente à União.' },
      { letter: 'D', text: 'A ausência na lista do SUS impede definitivamente o acesso judicial ao medicamento, mesmo diante de comprovação médica de imprescindibilidade.' }
    ],
    correctAnswer: 'A',
    justification: `No Tema 793 da Repercussão Geral, o STF reafirmou que os entes da Federação (União, Estados, DF e Municípios) são solidariamente responsáveis nas demandas de saúde, cabendo ao juiz direcionar o cumprimento de acordo com as competências administrativas e determinar o ressarcimento. Para medicamentos sem registro na ANVISA, a regra geral é a negativa (Tema 500), com exceções estritas.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Pelo Tema 500 do STF, o Estado não pode ser obrigado a fornecer medicamento experimental ou sem registro na ANVISA, salvo exceções rigorosíssimas (mora da Anvisa em doença rara/órfã com registro no exterior).' },
      { letter: 'C', explanation: 'Incorreta. A responsabilidade entre União, Estados e Municípios é solidária (Art. 23, II e Art. 196, CF/88).' },
      { letter: 'D', explanation: 'Incorreta. A jurisprudência admite o fornecimento de fármaco fora da lista do SUS desde que preenchidos requisitos cumulativos (laudo médico circunstanciado de imprescindibilidade, incapacidade financeira do paciente, registro na ANVISA e evidência científica/CONITEC conforme Temas STJ 106 e STF 1234).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 196 e Art. 23, II', textSnippet: 'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário...' }
    ],
    jurisprudence: 'STF - Tema 793: Os entes da federação, em decorrência da competência comum, são solidariamente responsáveis nas demandas prestacionais na área da saúde.',
    professorTip: 'Saúde = competência COMUM (Art. 23, II) e responsabilidade SOLIDÁRIA (Tema 793 STF). Medicamento sem registro na ANVISA = regra geral NÃO fornece (Tema 500 STF).'
  },
  {
    id: 'const_ext_16',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Ordem Social, Educação e Ensino Religioso',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um Estado da Federação aprovou lei estabelecendo que o ensino religioso nas escolas públicas de ensino fundamental será de matrícula facultativa, porém de conteúdo confessional vinculado a uma religião específica escolhida pelos alunos, custeado sem discriminação.
Segundo o Art. 210, § 1º, da CF/88 e o entendimento do STF na ADI 4.439, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O ensino religioso nas escolas públicas é proibido pela laicidade do Estado.' },
      { letter: 'B', text: 'O ensino religioso, de matrícula facultativa, constituirá disciplina dos horários normais das escolas públicas de ensino fundamental, sendo admitido pelo STF o ensino inclusive em caráter confessional, desde que respeitada a matrícula facultativa e vedado o proselitismo estatal impositivo.' },
      { letter: 'C', text: 'O ensino religioso é obrigatório até o ensino médio, com dispensa apenas mediante declaração judicial.' },
      { letter: 'D', text: 'Apenas o Município pode ofertar ensino religioso na rede privada.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 210, § 1º, da CF/88 dispõe que o ensino religioso, de matrícula facultativa, constituirá disciplina dos horários normais das escolas públicas de ensino fundamental. Na ADI 4.439, o STF decidiu que não ofende a laicidade estatal o ensino religioso de caráter confessional nas escolas públicas, desde que preservada a matrícula facultativa e o pluralismo.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A própria Constituição prevê expressamente a oferta da disciplina de matrícula facultativa.' },
      { letter: 'C', explanation: 'Incorreta. A matrícula é facultativa e a previsão constitucional refere-se ao ensino fundamental.' },
      { letter: 'D', explanation: 'Incorreta. A previsão constitucional aplica-se às escolas públicas de ensino fundamental.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 210, § 1º', textSnippet: 'O ensino religioso, de matrícula facultativa, constituirá disciplina dos horários normais das escolas públicas de ensino fundamental.' }
    ],
    jurisprudence: 'STF - ADI 4.439: O ensino religioso nas escolas públicas de ensino fundamental, de matrícula facultativa, pode ter natureza confessional.',
    professorTip: 'Art. 210, § 1º: Ensino religioso = matrícula FACULTATIVA + horários NORMAIS + ensino FUNDAMENTAL!'
  },
  {
    id: 'const_ext_17',
    exam: 'Prova Acadêmica / Direito Constitucional',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Liberdade de Reunião e Aviso Prévio',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Um movimento estudantil organizou passeata pacífica e sem armas na principal avenida da cidade para reivindicar passe livre estudantil. O movimento divulgou amplamente o evento pelas redes sociais e imprensa com uma semana de antecedência, mas não protocolou ofício formal de comunicação na prefeitura. A polícia municipal tentou dispersar a passeata alegando ausência de autorização prévia.
À luz do Art. 5º, XVI, da CF/88 e da jurisprudência do STF (RE 806.339), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A passeata é ilegal porque exige autorização prévia da autoridade policial.' },
      { letter: 'B', text: 'Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada, bastando prévio aviso — que o STF entende cumprido mesmo quando o evento ganha publicidade suficiente para ciência do poder público.' },
      { letter: 'C', text: 'O direito de reunião aplica-se apenas a sindicatos e partidos políticos registrados.' },
      { letter: 'D', text: 'Qualquer reunião em via pública pode ser dissolvida livremente pelo prefeito por decreto municipal.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 5º, XVI, da CF/88 garante o direito de reunião pacífica e sem armas em locais abertos ao público, independentemente de autorização (exige apenas prévio aviso, nunca autorização!). No RE 806.339 (Tema 855), o STF fixou que a exigência de prévio aviso não condiciona o direito à notificação formal burocrática se o poder público pôde tomar ciência prévia do evento para organizar o trânsito e a segurança.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Constituição veda expressamente a exigência de autorização prévia ("independentemente de autorização").' },
      { letter: 'C', explanation: 'Incorreta. É direito fundamental assegurado a "todos".' },
      { letter: 'D', explanation: 'Incorreta. O decreto municipal não pode suprimir o exercício do direito constitucional de reunião pacífica.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 5º, XVI', textSnippet: 'todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente.' }
    ],
    jurisprudence: 'STF - Tema 855 (RE 806.339): A exigência constitucional de aviso prévio relativamente ao direito de reunião é satisfeita com a veiculação de informação que permita ao poder público zelar para que seu exercício se dê de forma pacífica.',
    professorTip: 'Direito de Reunião: NUNCA precisa de AUTORIZAÇÃO! Exige apenas PRÉVIO AVISO (que segundo o STF se cumpre inclusive por divulgação pública/redes sociais permitindo organização estatal).'
  },
  {
    id: 'const_ext_18',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Federalismo e Intervenção Federal / Estadual',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Determinado Estado-membro deixou de aplicar o mínimo exigido da receita resultante de impostos estaduais na manutenção e desenvolvimento do ensino (princípio constitucional sensível previsto no Art. 34, VII, "e", da CF/88).
Para a decretação da Intervenção Federal nessa hipótese específica de violação a princípio constitucional sensível, o Art. 36, III, da CF/88 exige:`,
    options: [
      { letter: 'A', text: 'Apenas decreto espontâneo do Presidente da República, ouvido o Conselho da República.' },
      { letter: 'B', text: 'Provimento, pelo Supremo Tribunal Federal, de representação do Procurador-Geral da República (Ação Direta Interventiva).' },
      { letter: 'C', text: 'Requisição direta do Tribunal de Justiça estadual ao Governador.' },
      { letter: 'D', text: 'Autorização prévia de dois terços dos Deputados Federais antes de qualquer medida judicial.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do Art. 36, III, da CF/88, a decretação de intervenção federal para assegurar a observância dos princípios constitucionais sensíveis (Art. 34, VII) depende de provimento, pelo Supremo Tribunal Federal, de representação do Procurador-Geral da República (conhecida como Ação Direta Interventiva ou Representação Interventiva).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Intervenção espontânea ocorre em casos como invasão estrangeira, guerra civil ou grave comprometimento da ordem pública (Art. 34, I, II, III e V), nunca nos princípios sensíveis.' },
      { letter: 'C', explanation: 'Incorreta. O TJ requisita ao STF em caso de descumprimento de ordem judicial estadual ou ao próprio STF/STJ/TSE conforme o caso (Art. 36, II).' },
      { letter: 'D', explanation: 'Incorreta. No caso dos princípios sensíveis, o decreto presidencial fica dispensado de apreciação política pelo Congresso (Art. 36, § 3º), limitando-se a suspender a execução do ato impugnado se essa medida bastar.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 36, III e § 3º', textSnippet: 'A decretação da intervenção dependerá: III - de provimento, pelo Supremo Tribunal Federal, de representação do Procurador-Geral da República, na hipótese do art. 34, VII...' }
    ],
    professorTip: 'Intervenção por Princípio Sensível (Art. 34, VII): legitimado exclusivo = PGR! Julgamento = STF! Se bastar, o Presidente só suspende o ato estadual e nem submete ao Congresso Nacional!'
  },
  {
    id: 'const_ext_19',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Poder Executivo e Crimes de Responsabilidade',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `O Presidente da República foi formalmente acusado da prática de crime de responsabilidade (impeachment) por ato atentatório à lei orçamentária, bem como da prática de crime comum estranho ao exercício das funções cometido antes da posse no mandato atual.
De acordo com o Art. 86 e o § 4º da CF/88, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Ambos os processos tramitam imediatamente no STF desde o recebimento da queixa pela Câmara.' },
      { letter: 'B', text: 'Admitida a acusação contra o Presidente por dois terços da Câmara dos Deputados, será submetido a julgamento perante o Senado Federal nos crimes de responsabilidade; quanto ao crime comum estranho ao exercício das funções, o Presidente goza de imunidade temporária e não pode ser responsabilizado na vigência do mandato.' },
      { letter: 'C', text: 'O Senado Federal julga tanto os crimes comuns quanto os crimes de responsabilidade do Presidente.' },
      { letter: 'D', text: 'O Presidente só é afastado de suas funções após a condenação definitiva pelo Senado.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o Art. 86 da CF/88: admitida a acusação por 2/3 da Câmara dos Deputados, o Presidente é julgado pelo STF nos crimes comuns (relacionados ao cargo em curso) e pelo Senado Federal nos crimes de responsabilidade. Pelo § 4º do Art. 86, o Presidente, na vigência de seu mandato, NÃO pode ser responsabilizado por atos estranhos ao exercício de suas funções (imunidade formal temporária à persecução penal).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Crime de responsabilidade é julgado pelo Senado Federal (presidido pelo Presidente do STF); crime estranho ao mandato fica suspenso até o término do mandato.' },
      { letter: 'C', explanation: 'Incorreta. Crimes comuns praticados in officio são julgados pelo STF.' },
      { letter: 'D', explanation: 'Incorreta. Instaurado o processo pelo Senado (no crime de responsabilidade) ou recebida a denúncia pelo STF (no crime comum), o Presidente fica suspenso de suas funções por até 180 dias (Art. 86, § 1º e § 2º).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 86, caput e § 4º', textSnippet: '§ 4º O Presidente da República, na vigência de seu mandato, não pode ser responsabilizado por atos estranhos ao exercício de suas funções.' }
    ],
    professorTip: 'Juízo de admissibilidade (2/3 da Câmara) -> Crime comum = STF; Crime de responsabilidade = Senado! E ato estranho ao cargo fica suspenso durante o mandato (só vale para Presidente, não para Governador ou Prefeito!).'
  },
  {
    id: 'const_ext_20',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Direito de Propriedade e Desapropriação Sancionatória',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um grande proprietário urbano mantém imóvel ocioso em área incluída no plano diretor municipal há anos, descumprindo sucessivamente as etapas de parcelamento/edificação compulsórios e a cobrança do IPTU progressivo no tempo por 5 anos consecutivos sem atingir a função social da propriedade.
Nos termos do Art. 182, § 4º, III, da CF/88, o Município poderá promover:`,
    options: [
      { letter: 'A', text: 'Desapropriação com pagamento em dinheiro prévio e justo, acrescido de juros compensatórios.' },
      { letter: 'B', text: 'Desapropriação com pagamento mediante títulos da dívida pública de emissão previamente aprovada pelo Senado Federal, com prazo de resgate de até dez anos, em parcelas anuais, iguais e sucessivas.' },
      { letter: 'C', text: 'Confisco imediato do imóvel sem qualquer indenização ao proprietário.' },
      { letter: 'D', text: 'Desapropriação com pagamento em títulos da dívida agrária resgatáveis em até vinte anos.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 182, § 4º, da CF/88 prevê a sequência sancionatória urbana: 1) parcelamento/edificação compulsórios; 2) IPTU progressivo no tempo (até 5 anos); 3) desapropriação com pagamento mediante TÍTULOS DA DÍVIDA PÚBLICA (emissão aprovada pelo Senado Federal), resgatáveis em até 10 anos, em parcelas anuais, iguais e sucessivas.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Pagamento prévio e em dinheiro ocorre na desapropriação comum por utilidade/necessidade pública ou interesse social (Art. 5º, XXIV).' },
      { letter: 'C', explanation: 'Incorreta. Confisco sem indenização (expropriação do Art. 243 da CF) aplica-se apenas a terras com cultivo de plantas psicotrópicas ilegais ou exploração de trabalho escravo.' },
      { letter: 'D', explanation: 'Incorreta. Títulos da Dívida Agrária (TDA) em até 20 anos aplicam-se à desapropriação rural para fins de reforma agrária pela União (Art. 184).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 182, § 4º, III', textSnippet: 'desapropriação com pagamento mediante títulos da dívida pública de emissão previamente aprovada pelo Senado Federal, com prazo de resgate de até dez anos, em parcelas anuais, iguais e sucessivas, assegurados o valor real da indenização e os juros legais.' }
    ],
    professorTip: 'Compare as 3 desapropriações na CF: Comum (Art. 5º XXIV) = dinheiro prévio. Urbana sancionatória (Art. 182) = Títulos da Dívida Pública até 10 anos. Agrária (Art. 184) = TDA até 20 anos. Expropriação drogas/trabalho escravo (Art. 243) = SEM indenização!'
  },
  {
    id: 'const_ext_21',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Direitos Sociais dos Trabalhadores Domésticos',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A Emenda Constitucional nº 72/2013 ampliou o rol de direitos constitucionais assegurados aos trabalhadores domésticos no parágrafo único do Art. 7º da CF/88.
Assinale a alternativa que apresenta APENAS direitos constitucionalmente estendidos à categoria dos trabalhadores domésticos:`,
    options: [
      { letter: 'A', text: 'Salário mínimo, décimo terceiro salário, férias anuais acrescidas de 1/3, FGTS e seguro-desemprego.' },
      { letter: 'B', text: 'Participação nos lucros ou resultados da residência e adicional de periculosidade.' },
      { letter: 'C', text: 'Piso salarial proporcional à extensão do trabalho e adicional de penosidade.' },
      { letter: 'D', text: 'Aviso prévio proporcional de no máximo 15 dias e jornada máxima de 36 horas semanais.' }
    ],
    correctAnswer: 'A',
    justification: `O Art. 7º, parágrafo único, da CF/88 assegura expressamente aos trabalhadores domésticos salário mínimo, 13º salário, férias + 1/3, FGTS, seguro-desemprego, salário-família, adicional noturno, hora extra de no mínimo 50%, jornada de 8h/44h semanais, licença-maternidade, aviso prévio proporcional e proteção contra dispensa arbitrária.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Participação nos lucros ou resultados (PLR) e adicional de periculosidade/insalubridade não foram estendidos ao doméstico no parágrafo único do Art. 7º.' },
      { letter: 'C', explanation: 'Incorreta. Piso salarial proporcional (inciso V) e adicional de penosidade não integram o parágrafo único do Art. 7º.' },
      { letter: 'D', explanation: 'Incorreta. O aviso prévio é de no mínimo 30 dias (proporcional ao tempo de serviço) e a jornada padrão é 8h diárias / 44h semanais.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 7º, parágrafo único', textSnippet: 'São assegurados à categoria dos trabalhadores domésticos os direitos previstos nos incisos IV, VI, VII, VIII, X, XIII, XV, XVI, XVII, XVIII, XIX, XXI, XXII, XXIV, XXVI, XXX, XXXI e XXXIII e, atendidas as condições estabelecidas em lei... os previstos nos incisos I, II, III, IX, XII, XXV e XXVIII...' }
    ],
    professorTip: 'O que doméstico NÃO tem no Art. 7º § único: piso salarial proporcional (V), PLR (XI), jornada de 6h em turnos ininterruptos (XIV), adicional de insalubridade/periculosidade/penosidade (XXIII) e proteção em face da automação (XXVII)!'
  },
  {
    id: 'const_ext_22',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Veto Presidencial e Processo Legislativo',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Após aprovação de projeto de lei ordinária pela Câmara dos Deputados e pelo Senado Federal, o texto seguiu para sanção presidencial. O Presidente da República vetou apenas uma expressão específica dentro de um inciso do Art. 4º do projeto, por considerá-la contrária ao interesse público, sancionando todo o restante.
Nos termos do Art. 66 da Constituição Federal de 1988, a conduta presidencial é:`,
    options: [
      { letter: 'A', text: 'Constitucional, pois o Presidente tem liberdade para vetar qualquer palavra isolada do projeto.' },
      { letter: 'B', text: 'Inconstitucional, pois o veto parcial somente abrangerá texto integral de artigo, de parágrafo, de inciso ou de alínea, vedado o veto de palavra ou expressão isolada.' },
      { letter: 'C', text: 'Constitucional, mas a derrubada pelo Congresso dependerá de quórum de três quintos.' },
      { letter: 'D', text: 'Inconstitucional apenas porque não existe veto político por interesse público, apenas veto jurídico.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 66, § 2º, da CF/88 proíbe o veto de palavra isolada para evitar que o Presidente altere o sentido da norma legislando positivamente: o veto parcial somente abrangerá texto INTEGRAL de artigo, de parágrafo, de inciso ou de alínea.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Vetar palavra solta (como o advérbio "não") inverteria a vontade do Legislativo, violando o Art. 66, § 2º.' },
      { letter: 'C', explanation: 'Incorreta. Além de o veto de palavra ser vedado, a rejeição (derrubada) do veto no Congresso ocorre pelo voto da MAIORIA ABSOLUTA dos Deputados e Senadores, em sessão conjunta (Art. 66, § 4º).' },
      { letter: 'D', explanation: 'Incorreta. Existem exatamente dois fundamentos constitucionais de veto: inconstitucionalidade (veto jurídico) e contrariedade ao interesse público (veto político).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 66, §§ 1º, 2º e 4º', textSnippet: '§ 2º O veto parcial somente abrangerá texto integral de artigo, de parágrafo, de inciso ou de alínea. § 4º O veto será apreciado em sessão conjunta, dentro de trinta dias a contar de seu recebimento, só podendo ser rejeitado pelo voto da maioria absoluta dos Deputados e Senadores.' }
    ],
    professorTip: 'Veto parcial: só texto INTEGRAL de artigo, parágrafo, inciso ou alínea (nunca palavra solta!). Prazo do Presidente para vetar = 15 dias úteis; derrubada no Congresso = sessão conjunta, maioria ABSOLUTA em votação aberta!'
  },
  {
    id: 'const_ext_23',
    exam: 'Prova Acadêmica / Direito Constitucional',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Direito à Privacidade, Domicílio e Provas no Processo',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Agentes policiais em patrulhamento noturno receberam denúncia anônima genérica de que um morador guardava entorpecentes em casa. Sem mandado judicial e sem observar qualquer movimentação suspeita externa ou tentativa de fuga, arrombaram a porta da residência às 23h e encontraram pequena quantidade de droga no quarto.
Segundo o Art. 5º, XI, da CF/88 e o entendimento firmado pelo STF no RE 603.616 (Tema 280), a prova obtida é:`,
    options: [
      { letter: 'A', text: 'Lícita, porque o tráfico de drogas é crime permanente, autorizando o ingresso domiciliar a qualquer hora por mera denúncia anônima.' },
      { letter: 'B', text: 'Ilícita, pois o ingresso forçado em domicílio sem mandado judicial só se legitima quando amparado em fundadas razões, devidamente justificadas a posteriori, que indiquem situação de flagrante delito — o que não é suprido por denúncia anônima isolada.' },
      { letter: 'C', text: 'Lícita, porque a garantia da inviolabilidade domiciliar só protege o imóvel próprio, não alcançando imóvel alugado.' },
      { letter: 'D', text: 'Ilícita apenas quanto ao período noturno, tornando-se válida se fosse às 14h sem mandado.' }
    ],
    correctAnswer: 'B',
    justification: `No Tema 280 da Repercussão Geral (RE 603.616), o STF definiu que a entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em FUNDADAS RAZÕES, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito. Denúncia anônima isolada não configura fundada razão.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A permanência do crime não autoriza devassa domiciliar baseada apenas em denúncia anônima sem diligência prévia.' },
      { letter: 'C', explanation: 'Incorreta. "Casa" no conceito constitucional abrange qualquer compartimento habitado, alugado, quarto de hotel ocupado ou consultório privado.' },
      { letter: 'D', explanation: 'Incorreta. Sem mandado judicial nem flagrante com fundadas razões, o ingresso forçado é ilícito tanto de dia quanto à noite.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 5º, XI', textSnippet: 'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.' }
    ],
    jurisprudence: 'STF - Tema 280: A entrada forçada em domicílio sem mandado judicial só é lícita quando amparada em fundadas razões justificadas a posteriori que indiquem flagrante delito.',
    professorTip: 'Ordem judicial = só DURANTE O DIA! Flagrante delito, desastre ou socorro = qualquer hora (dia ou noite), mas flagrante exige FUNDADAS RAZÕES (denúncia anônima isolada não basta!).'
  },
  {
    id: 'const_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Conselho Nacional de Justiça (CNJ) e Súmula Vinculante',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sobre a composição e as atribuições constitucionais do Conselho Nacional de Justiça (CNJ), previstas no Art. 103-B da CF/88, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O CNJ é órgão do Poder Judiciário composto por 15 membros com mandato de 2 anos, admitida uma recondução, cabendo-lhe o controle da atuação administrativa e financeira do Judiciário e do cumprimento dos deveres funcionais dos juízes, sem exercer jurisdição.' },
      { letter: 'B', text: 'O CNJ tem competência para anular sentenças e acórdãos judiciais com trânsito em julgado quando considerar a tese jurídica equivocada.' },
      { letter: 'C', text: 'O CNJ é presidido pelo Procurador-Geral da República e conta com dois cidadãos escolhidos pelo Presidente da República.' },
      { letter: 'D', text: 'Compete ao CNJ editar Súmula Vinculante em matéria processual civil.' }
    ],
    correctAnswer: 'A',
    justification: `O CNJ integra o Poder Judiciário (Art. 92, I-A, CF/88), compõe-se de 15 membros para mandato de 2 anos (admitida 1 recondução), é presidido pelo Presidente do STF e exerce o controle administrativo, financeiro e disciplinar do Judiciário, jamais exercendo função jurisdicional nem revisando conteúdo de decisões judiciais.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O CNJ não exerce função jurisdicional e não pode rever ou desconstituir decisões judiciais.' },
      { letter: 'C', explanation: 'Incorreta. O CNJ é presidido pelo Presidente do STF; o PGR apenas oficia perante o Conselho sem direito a voto.' },
      { letter: 'D', explanation: 'Incorreta. Apenas o Supremo Tribunal Federal (por 2/3 dos membros) pode aprovar Súmula Vinculante (Art. 103-A).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 103-B, caput e § 4º', textSnippet: 'O Conselho Nacional de Justiça compõe-se de 15 (quinze) membros com mandato de 2 (dois) anos, admitida 1 (uma) recondução... Compete ao Conselho o controle da atuação administrativa e financeira do Poder Judiciário e do cumprimento dos deveres funcionais dos juízes...' }
    ],
    professorTip: 'CNJ = 15 membros, mandato 2 anos (+1 recondução), presidido pelo Presidente do STF, NÃO julga processos judiciais (só controle administrativo, financeiro e disciplinar).'
  },
  {
    id: 'const_ext_25',
    exam: 'Simulado FGV / OAB Unificado - Constitucional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Constitucional',
    topic: 'Tribunal de Contas da União e Auxílio ao Legislativo',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Ao apreciar o ato inicial de concessão de aposentadoria de um servidor público federal, o Tribunal de Contas da União (TCU), passados 7 anos desde que o processo administrativo chegou à Corte de Contas sem qualquer decisão, julgou ilegal o registro da aposentadoria sem garantir contraditório prévio ao interessado.
Considerando a jurisprudência vinculante do STF (Tema 445 - RE 636.553) e o Art. 71 da CF/88, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O ato do TCU é válido, pois a apreciação de legalidade de aposentadorias é ato complexo e imprescritível.' },
      { letter: 'B', text: 'Os Tribunais de Contas estão sujeitos ao prazo de 5 anos para o julgamento da legalidade do ato de concessão inicial de aposentadoria, reforma ou pensão, a contar da chegada do processo à respectiva Corte de Contas, após o qual considera-se definitivamente registrado o ato.' },
      { letter: 'C', text: 'O TCU não tem competência para apreciar a legalidade de aposentadorias federais, competindo apenas ao STF.' },
      { letter: 'D', text: 'A Súmula Vinculante 3 obriga o contraditório prévio do servidor já no registro inicial mesmo dentro do primeiro ano.' }
    ],
    correctAnswer: 'B',
    justification: `No Tema 445 da Repercussão Geral (RE 636.553), o STF fixou tese vinculante estabelecendo que, em atenção aos princípios da segurança jurídica e da confiança legítima, os Tribunais de Contas estão sujeitos ao prazo decadencial de 5 anos para julgar a legalidade do ato de concessão inicial de aposentadoria, reforma ou pensão, contados da chegada do processo à Corte de Contas; transcorrido o quinquênio in albis, o ato considera-se definitivamente registrado.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Embora o ato seja complexo, o STF limitou a apreciação pelo Tribunal de Contas ao prazo decadencial de 5 anos.' },
      { letter: 'C', explanation: 'Incorreta. A competência consta expressamente do Art. 71, III, da CF/88.' },
      { letter: 'D', explanation: 'Incorreta. A parte final da SV 3 excetua expressamente da exigência de contraditório prévio no TCU a apreciação da legalidade do ato de concessão inicial de aposentadoria, reforma e pensão.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 71, III', textSnippet: 'O controle externo, a cargo do Congresso Nacional, será exercido com o auxílio do Tribunal de Contas da União, ao qual compete: III - apreciar, para fins de registro, a legalidade dos atos de admissão de pessoal... bem como a das concessões de aposentadorias, reformas e pensões...' }
    ],
    jurisprudence: 'STF - Tema 445: Os Tribunais de Contas estão sujeitos ao prazo de 5 anos para o julgamento da legalidade do ato de concessão inicial de aposentadoria, reforma ou pensão, a contar da chegada do processo à respectiva Corte de Contas.',
    professorTip: 'Tema 445 STF + SV 3: Registro inicial de aposentadoria no TCU dispensa contraditório prévio dentro dos 5 anos (SV 3), mas se o TCU demorar mais de 5 anos da chegada do processo, o registro torna-se tácito e definitivo!'
  }
];
