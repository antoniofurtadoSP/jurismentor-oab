import { LegalQuestion } from '../../../types';

export const PENAL_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'penal_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Aplicação da Lei Penal no Tempo - Novatio Legis in Mellius',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Marcos foi condenado definitivamente pela prática de determinado delito em sentença com trânsito em julgado, encontrando-se em cumprimento de pena privativa de liberdade. Posteriormente, entrou em vigor nova lei penal que diminuiu pela metade a pena máxima e mínima cominada ao referido crime, sem extinguir o tipo penal. Diante do exposto, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A nova lei retroagirá para beneficiar Marcos, cabendo ao juízo da execução penal aplicar a lei mais benigna mesmo após o trânsito em julgado.' },
      { letter: 'B', text: 'A coisa julgada material impede a aplicação da lei penal posterior mais benéfica.' },
      { letter: 'C', text: 'A retroatividade dependerá de ajuizamento de revisão criminal perante o Tribunal de Justiça competente.' },
      { letter: 'D', text: 'A lei posterior somente retroagirá se houver abolição completa do crime (abolitio criminis).' }
    ],
    correctAnswer: 'A',
    justification: `Nos termos do art. 5º, XL, da CF/88 e art. 2º, parágrafo único, do CP, a lei posterior que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado. Conforme a Súmula 611 do STF, transitada em julgado a sentença condenatória, compete ao juízo das execuções a aplicação de lei mais benigna.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A coisa julgada cede diante da retroatividade benéfica constitucional.' },
      { letter: 'C', explanation: 'Incorreta. Pela Súmula 611 do STF, basta requerimento simples ao juízo da execução penal.' },
      { letter: 'D', explanation: 'Incorreta. Qualquer lex mitior retroage, não apenas a abolitio criminis.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 2º, parágrafo único', textSnippet: 'A lei posterior, que de qualquer modo favorecer o agente, aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.' }
    ],
    jurisprudence: 'Súmula 611 do STF.',
    professorTip: 'Lex mitior vence a coisa julgada! E quem aplica após o trânsito em julgado é o Juiz da Execução Penal (Súmula 611 STF).'
  },
  {
    id: 'penal_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Desistência Voluntária e Arrependimento Eficaz',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Com intenção homicida, Caio desferiu dois disparos de arma de fogo contra seu desafeto Bruno, atingindo-o no ombro. Tendo ainda quatro munições intactas no tambor do revólver e plena possibilidade de prosseguir nos disparos para matar a vítima, Caio comove-se com os pedidos de clemência, guarda a arma e leva Bruno imediatamente ao pronto-socorro, onde a vítima recebe atendimento médico e sobrevive com lesão leve. Assinale a solução jurídica correta:`,
    options: [
      { letter: 'A', text: 'Caio responderá por tentativa de homicídio, com diminuição de pena pela metade em razão do socorro.' },
      { letter: 'B', text: 'Configura-se desistência voluntária, respondendo Caio apenas pelos atos já praticados (lesão corporal).' },
      { letter: 'C', text: 'Configura-se arrependimento posterior, causa de diminuição de pena de um a dois terços.' },
      { letter: 'D', text: 'Caio fica isento de qualquer responsabilidade penal em razão da extinção da punibilidade.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 15 do CP ("Ponte de Ouro"), o agente que, voluntariamente, desiste de prosseguir na execução (tinha mais 4 balas e podia continuar atirando) ou impede que o resultado se produza, só responde pelos atos já praticados — no caso, lesão corporal.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Afastada a tentativa porque a não consumação decorreu da própria vontade do agente.' },
      { letter: 'C', explanation: 'Incorreta. O arrependimento posterior (art. 16 CP) exige crime já consumado sem violência ou grave ameaça.' },
      { letter: 'D', explanation: 'Incorreta. Não há isenção total: subsiste a responsabilidade pelos atos já praticados.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 15', textSnippet: 'O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados.' }
    ],
    professorTip: 'Fórmula de Frank na Desistência Voluntária: "Posso prosseguir, mas não quero". Resultado: responde só pelos atos já praticados!'
  },
  {
    id: 'penal_ext_03',
    exam: 'Prova Semestral Faculdade de Direito - Penal I',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Arrependimento Posterior (Art. 16 CP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Lucas subtraiu, mediante fraude e sem qualquer violência ou grave ameaça, o notebook de um colega de faculdade. Antes do recebimento da denúncia pelo juiz, arrependido, Lucas restituiu integralmente o bem à vítima em perfeito estado de conservação. Diante do Código Penal, essa conduta configura:`,
    options: [
      { letter: 'A', text: 'Extinção da punibilidade pelo perdão judicial.' },
      { letter: 'B', text: 'Arrependimento eficaz, afastando o crime patrimonial.' },
      { letter: 'C', text: 'Arrependimento posterior, causa obrigatória de redução de pena de um a dois terços.' },
      { letter: 'D', text: 'Circunstância atenuante genérica, incapaz de reduzir a pena aquém do mínimo legal.' }
    ],
    correctAnswer: 'C',
    justification: `Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa até o recebimento da denúncia ou queixa, por ato voluntário do agente, a pena será reduzida de um a dois terços (art. 16 do CP).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não extingue a punibilidade, apenas reduz a pena na 3ª fase.' },
      { letter: 'B', explanation: 'Incorreta. O crime já estava consumado; o arrependimento eficaz ocorre antes da consumação.' },
      { letter: 'D', explanation: 'Incorreta. Trata-se de causa especial de diminuição de pena (3ª fase), podendo levar a pena abaixo do mínimo legal.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 16', textSnippet: 'Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, até o recebimento da denúncia ou da queixa, por ato voluntário do agente, a pena será reduzida de um a dois terços.' }
    ],
    professorTip: 'Atenção ao marco temporal do Art. 16 CP: reparação integral ATÉ O RECEBIMENTO da denúncia! Se for depois, vira apenas atenuante do art. 65, III, b.'
  },
  {
    id: 'penal_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Crime Impossível (Art. 17 CP e Súmula 567 STJ)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Joana ingressou em um supermercado monitorado por câmeras de segurança e seguranças à paisana, ocultando em sua bolsa um frasco de xampu avaliado em R$ 40,00. Antes de ultrapassar os caixas, foi abordada pela equipe de vigilância e detida. A defesa alegou crime impossível em razão da vigilância eletrônica e presencial. De acordo com a jurisprudência consolidada do STJ:`,
    options: [
      { letter: 'A', text: 'Configura-se crime impossível por ineficácia absoluta do meio.' },
      { letter: 'B', text: 'A existência de sistema de vigilância eletrônica ou de seguranças no estabelecimento não torna o furto impossível por si só.' },
      { letter: 'C', text: 'O furto se consumou no instante em que Joana colocou o produto na bolsa, ainda dentro da loja.' },
      { letter: 'D', text: 'A vigilância eletrônica afasta o dolo eventual do agente.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo a Súmula 567 do STJ, "Sistema de vigilância realizado por monitoramento eletrônico ou por existência de segurança no interior de estabelecimento comercial, por si só, não torna impossível a configuração do crime de furto". Trata-se de tentativa de furto (ou eventual exame do princípio da insignificância, se preenchidos os vetores do STF, mas não crime impossível).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Súmula 567 do STJ afasta a tese de crime impossível nessas condições.' },
      { letter: 'C', explanation: 'Incorreta. Embora adote-se a teoria da amotio, quando a vigilância impede a inversão tranquila da posse, há tentativa (sem prejuízo da Súmula 567).' },
      { letter: 'D', explanation: 'Incorreta. Vigilância externa não interfere na representação mental do dolo do agente.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 17', textSnippet: 'Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime.' }
    ],
    jurisprudence: 'Súmula 567 do STJ.',
    professorTip: 'Câmera de segurança em loja = NÃO é crime impossível (Súmula 567 STJ)!'
  },
  {
    id: 'penal_ext_05',
    exam: 'Prova Semestral Faculdade de Direito - Penal I',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Erro de Tipo x Erro de Proibição',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Em uma viagem de trabalho ao Brasil, um turista estrangeiro proveniente de país onde o porte recreativo da substância é lícito traz consigo pequena quantidade de droga para consumo próprio, supondo sinceramente que a conduta também não é proibida pela legislação brasileira. Sobre o instituto penal aplicável à hipótese, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Trata-se de erro de tipo essencial invencível, que exclui o dolo e a culpa.' },
      { letter: 'B', text: 'Trata-se de erro sobre a ilicitude do fato (erro de proibição), que, se inevitável, isenta de pena por excluir a culpabilidade.' },
      { letter: 'C', text: 'Trata-se de descriminante putativa por erro de tipo permissivo, aplicando-se a culpa imprópria.' },
      { letter: 'D', text: 'Trata-se de erro acidental sobre o objeto (error in objecto), irrelevante para fins penais.' }
    ],
    correctAnswer: 'B',
    justification: `O agente sabe exatamente o que está portando (não há falsa percepção sobre elemento fático do tipo), mas desconhece que a conduta é ilícita no ordenamento jurídico (erro de proibição direto, art. 21 do CP). Se inevitável, isenta de pena por excluir a potencial consciência da ilicitude (elemento da culpabilidade); se evitável, diminui a pena de um sexto a um terço.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. No erro de tipo (art. 20), o agente não sabe o que faz no plano fático (ex.: acha que leva açúcar, mas é droga).' },
      { letter: 'C', explanation: 'Incorreta. Não há suposição de situação fática que tornaria a ação legítima (como legítima defesa putativa).' },
      { letter: 'D', explanation: 'Incorreta. Error in objecto envolve confusão entre coisas materiais semelhantes.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 21', textSnippet: 'O desconhecimento da lei é inescusável. O erro sobre a ilicitude do fato, se inevitável, isenta de pena; se evitável, poderá diminuí-la de um sexto a um terço.' }
    ],
    professorTip: 'Macete clássico: Erro de TIPO = "não sei o que faço" (exclui DOLO -> tipicidade). Erro de PROIBIÇÃO = "sei o que faço, mas acho que é permitido" (exclui potencial consciência da ilicitude -> culpabilidade).'
  },
  {
    id: 'penal_ext_06',
    exam: 'Concurso Magistratura / MP - Direito Penal',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Concurso de Pessoas e Comunicabilidade de Circunstâncias (Art. 30 CP)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Servidor público estadual (funcionário público para fins penais) combina com seu irmão, particular sem vínculo com a Administração Pública, a subtração de computadores pertencentes à repartição pública onde o servidor trabalha, aproveitando-se das facilidades do cargo e da chave funcional. Ambos executam a subtração conjuntamente. Considerando o concurso de pessoas e o Art. 30 do Código Penal:`,
    options: [
      { letter: 'A', text: 'O servidor responderá por peculato-furto e o particular por furto simples, pois a qualidade de funcionário público é incomunicável.' },
      { letter: 'B', text: 'Ambos responderão por peculato-furto, desde que o particular tenha ciência da condição de funcionário público do irmão.' },
      { letter: 'C', text: 'Ambos responderão por furto qualificado pelo concurso de pessoas, afastando-se o peculato.' },
      { letter: 'D', text: 'A condição de funcionário público comunica-se ao particular ainda que este desconhecesse por completo o cargo ocupado pelo comparsa.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 30 do Código Penal, "Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime". No crime de peculato (art. 312 CP), a qualidade de funcionário público é elementar do tipo penal, comunicando-se ao coautor ou partícipe particular, desde que ingresse em sua esfera de conhecimento (dolo).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Por ser elementar do crime de peculato, a condição funcional comunica-se ao particular (art. 30 CP).' },
      { letter: 'C', explanation: 'Incorreta. Aplica-se o tipo especial do peculato-furto (art. 312, § 1º).' },
      { letter: 'D', explanation: 'Incorreta. Para evitar responsabilidade penal objetiva, a elementar precisa estar abrangida pelo dolo do particular.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 30', textSnippet: 'Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime.' }
    ],
    professorTip: 'Art. 30 do CP cai muito: circunstâncias pessoais NÃO se comunicam, SALVO quando ELEMENTARES do crime (e conhecidas pelo comparsa)!'
  },
  {
    id: 'penal_ext_07',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Estado de Necessidade x Legítima Defesa',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Durante um incêndio acidental em cinema lotado, Rafael quebra uma porta de vidro de alto valor pertencente a uma loja vizinha para salvar a si e outras pessoas que estavam presas na fumaça. No âmbito penal, a conduta de Rafael em relação ao delito de dano é:`,
    options: [
      { letter: 'A', text: 'Típica, ilícita e culpável, mas com isenção de pena por inexigibilidade de conduta diversa.' },
      { letter: 'B', text: 'Atípica por ausência de dolo.' },
      { letter: 'C', text: 'Lícita, por estar amparada pela excludente de ilicitude do estado de necessidade.' },
      { letter: 'D', text: 'Lícita, por estar amparada pela legítima defesa contra agressão injusta do fogo.' }
    ],
    correctAnswer: 'C',
    justification: `O art. 24 do CP define o estado de necessidade como a prática de fato típico para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se. Como a ação exclui a ilicitude, o fato é típico, porém lícito.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Estado de necessidade exclui a ilicitude (2º substrato do crime), não apenas a culpabilidade.' },
      { letter: 'B', explanation: 'Incorreta. Houve dolo de quebrar a porta; o fato é típico, mas justificado.' },
      { letter: 'D', explanation: 'Incorreta. Legítima defesa exige agressão injusta humana; fogo acidental gera situação de perigo (estado de necessidade).' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 24', textSnippet: 'Considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio...' }
    ],
    professorTip: 'Estado de necessidade = PERIGO atual (ex.: incêndio, animal bravio). Legítima defesa = AGRESSÃO INJUSTA humana (atual ou iminente)!'
  },
  {
    id: 'penal_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Coação Moral Irresistível e Obediência Hierárquica',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um gerente bancário tem sua filha sequestrada por criminosos armados, que exigem que ele transfira valores do cofre do banco para contas indicadas, sob pena de executarem a criança imediatamente. Atemorizado e sem qualquer alternativa, o gerente efetua a transferência. Segundo o Art. 22 do Código Penal:`,
    options: [
      { letter: 'A', text: 'O gerente responde em coautoria pelo crime patrimonial com pena reduzida pela metade.' },
      { letter: 'B', text: 'Há excludente de ilicitude por estado de necessidade de terceiro.' },
      { letter: 'C', text: 'Há coação moral irresistível, excluindo-se a culpabilidade do gerente por inexigibilidade de conduta diversa e respondendo apenas o autor da coação.' },
      { letter: 'D', text: 'Há coação física irresistível, excluindo-se a conduta e a própria tipicidade.' }
    ],
    correctAnswer: 'C',
    justification: `Na coação moral irresistível (vis compulsiva), prevista no art. 22 do CP, o coacto pratica conduta típica e ilícita, mas sem culpabilidade por inexigibilidade de conduta diversa. Responde pelo crime apenas o autor da coação (autoria mediata).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Quando irresistível, a coação isenta o coacto de pena (só seria atenuante se resistível).' },
      { letter: 'B', explanation: 'Incorreta. Trata-se de causa excludente da culpabilidade prevista expressamente no art. 22 do CP.' },
      { letter: 'D', explanation: 'Incorreta. Coação física irresistível (vis absoluta) ocorre quando há emprego de força corporal que suprime a vontade muscular; a ameaça grave sobre a filha é coação moral.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 22', textSnippet: 'Se o fato é cometido sob coação irresistível ou em estrita obediência a ordem, não manifestamente ilegal, de superior hierárquico, só é punível o autor da coação ou da ordem.' }
    ],
    professorTip: 'Coação FÍSICA irresistível exclui a CONDUTA (tipicidade). Coação MORAL irresistível exclui a CULPABILIDADE (inexigibilidade de conduta diversa)!'
  },
  {
    id: 'penal_ext_09',
    exam: 'Concurso Delegado / MP - Direito Penal',
    examType: 'CONCURSO',
    board: 'FCC',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Concurso Formal Próprio, Impróprio e Crime Continuado',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Motorista imprudente ultrapassa sinal vermelho em cruzamento movimentado e colide com um veículo em que viajavam duas vítimas, causando lesões corporais culposas graves em ambas por meio de uma única conduta negligente. Na dosimetria da pena, deverá o juiz aplicar a regra do:`,
    options: [
      { letter: 'A', text: 'Concurso material, somando integralmente as duas penas.' },
      { letter: 'B', text: 'Concurso formal próprio (perfeito), aplicando uma só pena aumentada de um sexto até metade.' },
      { letter: 'C', text: 'Concurso formal impróprio (imperfeito), cumulando as penas por existir desígnios autônomos.' },
      { letter: 'D', text: 'Crime continuado específico, aplicando a pena de um dos crimes aumentada até o triplo.' }
    ],
    correctAnswer: 'B',
    justification: `No concurso formal próprio (art. 70, 1ª parte, CP), o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes sem desígnios autônomos (o que sempre ocorre nos crimes culposos). Aplica-se a mais grave das penas, ou, se iguais, somente uma delas, aumentada em qualquer caso de um sexto até metade (exasperação).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Concurso material exige pluralidade de condutas (art. 69 CP).' },
      { letter: 'C', explanation: 'Incorreta. Concurso formal impróprio exige dolo direto e desígnios autônomos, incompatível com crime culposo.' },
      { letter: 'D', explanation: 'Incorreta. Crime continuado exige pluralidade de condutas nas mesmas condições de tempo, lugar e maneira de execução.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 70', textSnippet: 'Quando o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplica-se-lhe a mais grave das penas cabíveis ou, se iguais, somente uma delas, mas aumentada, em qualquer caso, de um sexto até metade.' }
    ],
    professorTip: 'Crime culposo com várias vítimas por uma só conduta (acidente de trânsito) = Concurso Formal Próprio (exasperação de 1/6 a 1/2), respeitando-se ainda o teto do cúmulo material benéfico (art. 70, parágrafo único).'
  },
  {
    id: 'penal_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Regimes de Cumprimento de Pena e Súmulas do STJ',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Réu primário, com todas as circunstâncias judiciais do Art. 59 do Código Penal valoradas favoravelmente, foi condenado à pena definitiva de 3 anos e 6 meses de reclusão por crime não hediondo praticado sem violência. Contudo, o juiz sentenciante fixou o regime inicial fechado invocando exclusivamente a "gravidade abstrata do delito e o clamor social". A defesa deve impugnar a fixação do regime com base:`,
    options: [
      { letter: 'A', text: 'Na Súmula 440 do STJ e nas Súmulas 718 e 719 do STF, pleiteando o regime aberto.' },
      { letter: 'B', text: 'Na vedação legal à progressão em penas inferiores a quatro anos.' },
      { letter: 'C', text: 'Na impossibilidade de o condenado primário iniciar em regime semiaberto.' },
      { letter: 'D', text: 'Na aplicação obrigatória do regime fechado em crimes contra o patrimônio.' }
    ],
    correctAnswer: 'A',
    justification: `Segundo as Súmulas 718 e 719 do STF e Súmula 440 do STJ, a opinião do julgador sobre a gravidade em abstrato do crime não constitui motivação idônea para a imposição de regime mais severo do que o permitido segundo a pena aplicada. Para réu primário, pena não superior a 4 anos e circunstâncias favoráveis, o regime inicial adequado é o aberto (art. 33, § 2º, c, CP).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Não existe vedação legal desse tipo.' },
      { letter: 'C', explanation: 'Incorreta. O primário pode iniciar no semiaberto se houver circunstâncias judiciais desfavoráveis (Súmula 269 STJ para reincidente com pena ≤ 4 anos).' },
      { letter: 'D', explanation: 'Incorreta. Não há obrigatoriedade de regime fechado pela mera natureza abstrata.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 33, § 2º, c e § 3º', textSnippet: 'O condenado não reincidente, cuja pena seja igual ou inferior a 4 (quatro) anos, poderá, desde o início, cumpri-la em regime aberto.' }
    ],
    jurisprudence: 'Súmulas 718 e 719 do STF e Súmula 440 do STJ.',
    professorTip: 'Gravidade ABSTRATA do crime NUNCA autoriza regime mais gravoso (Súmulas 718/719 STF e 440 STJ)!'
  },
  {
    id: 'penal_ext_11',
    exam: 'Prova Semestral Faculdade de Direito - Penal II',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Dosimetria da Pena - Súmula 231 do STJ',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Na segunda fase da dosimetria da pena (critério trifásico de Nelson Hungria), após fixar a pena-base no mínimo legal de 1 ano de reclusão, o juiz reconheceu a circunstância atenuante da confissão espontânea (art. 65, III, "d", CP). Conforme a jurisprudência consolidada do STJ (Súmula 231):`,
    options: [
      { letter: 'A', text: 'A atenuante reduzirá a pena abaixo do mínimo legal, fixando-a em 10 meses de reclusão.' },
      { letter: 'B', text: 'A incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal.' },
      { letter: 'C', text: 'A confissão espontânea é causa de diminuição de pena aplicável apenas na terceira fase.' },
      { letter: 'D', text: 'O juiz deve anular a pena-base e recalcular o mínimo legal.' }
    ],
    correctAnswer: 'B',
    justification: `A Súmula 231 do STJ dispõe categoricamente: "A incidência da circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal". Apenas causas de diminuição (3ª fase) podem levar a pena aquém do mínimo previsto no tipo.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Contraria diretamente a Súmula 231 do STJ.' },
      { letter: 'C', explanation: 'Incorreta. A confissão é atenuante genérica da 2ª fase (art. 65, III, d, CP).' },
      { letter: 'D', explanation: 'Incorreta. Não há recálculo nem anulação, apenas neutralização da atenuante se a pena já estiver no mínimo.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 68', textSnippet: 'A pena-base será fixada atendendo-se ao critério do art. 59 deste Código; em seguida serão consideradas as circunstâncias atenuantes e agravantes; por último, as causas de diminuição e de aumento.' }
    ],
    jurisprudence: 'Súmula 231 do STJ.',
    professorTip: 'Na 2ª fase (agravantes e atenuantes), a pena fica presa entre o mínimo e o máximo abstratos do tipo (Súmula 231 STJ). Só na 3ª fase é que rompe o mínimo ou o máximo!'
  },
  {
    id: 'penal_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Prescrição da Pretensão Punitiva e Marcos Interruptivos',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Em 10/03/2019, Tiago, então com 19 anos de idade na data do fato, praticou crime cuja pena máxima cominada em abstrato é de 4 anos de reclusão. A denúncia foi recebida em 10/05/2023. Considerando as normas do Código Penal sobre prescrição (arts. 109 e 115), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O prazo prescricional de 8 anos reduz-se pela metade (4 anos) porque o agente era menor de 21 anos ao tempo do crime, operando-se a prescrição da pretensão punitiva antes do recebimento da denúncia.' },
      { letter: 'B', text: 'Não houve prescrição, pois o prazo para pena de 4 anos é de 12 anos, não havendo redução etária.' },
      { letter: 'C', text: 'A redução etária do prazo prescricional só se aplica a menores de 18 anos.' },
      { letter: 'D', text: 'O prazo prescricional somente começa a correr a partir da sentença condenatória.' }
    ],
    correctAnswer: 'A',
    justification: `Para pena máxima de 4 anos, a tabela do art. 109, IV, do CP fixa prescrição em 8 anos (pois é superior a 2 e não excede a 4). Contudo, segundo o art. 115 do CP, são reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de 21 anos. Metade de 8 anos = 4 anos! Entre 10/03/2019 e 10/05/2023 transcorreram mais de 4 anos antes do primeiro marco interruptivo (recebimento da denúncia), extinguindo a punibilidade.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Pena de 4 anos prescreve em 8 anos (12 anos é apenas para máxima superior a 4 até 8 anos), e há redução do art. 115.' },
      { letter: 'C', explanation: 'Incorreta. Menor de 18 anos é inimputável; a redução do art. 115 abrange quem tem entre 18 e 20 anos na data do fato (ou maior de 70 na data da sentença).' },
      { letter: 'D', explanation: 'Incorreta. Em regra, inicia-se no dia em que o crime se consumou (art. 111, I, CP).' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 109, IV e Art. 115', textSnippet: 'São reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de 21 (vinte e um) anos, ou, na data da sentença, maior de 70 (setenta) anos.' }
    ],
    professorTip: 'Pegadinha favorita da FGV: idade do réu na data do fato (< 21 anos) ou na data da sentença (> 70 anos) = corta o prazo prescricional PELA METADE!'
  },
  {
    id: 'penal_ext_13',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Homicídio Privilegiado x Qualificado (Homicídio Híbrido)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Após descobrir que sua filha havia acabado de ser vítima de estupro, o pai, sob o domínio de violenta emoção logo após a injusta provocação da vítima, persegue o agressor e o mata mediante emprego de meio cruel (asfixia). Considerando a compatibilidade entre o homicídio privilegiado e o qualificado na jurisprudência do STF e STJ:`,
    options: [
      { letter: 'A', text: 'É inviável a coexistência de privilégio e qualificadora em qualquer hipótese.' },
      { letter: 'B', text: 'É possível a coexistência entre o privilégio (de natureza subjetiva) e a qualificadora de natureza objetiva (asfixia), mas o crime não é considerado hediondo.' },
      { letter: 'C', text: 'O privilégio afasta automaticamente a qualificadora objetiva, respondendo por homicídio simples.' },
      { letter: 'D', text: 'O homicídio privilegiado-qualificado é considerado crime hediondo por conter qualificadora.' }
    ],
    correctAnswer: 'B',
    justification: `Admite-se o homicídio privilegiado-qualificado (híbrido) quando a qualificadora for de caráter OBJETIVO (como o emprego de asfixia, fogo, veneno, traição), visto que o privilégio (art. 121, § 1º) é sempre subjetivo. Contudo, STF e STJ entendem que o homicídio privilegiado-qualificado NÃO ostenta natureza hedionda, pois o privilégio afasta a hediondez.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Só é incompatível com qualificadoras subjetivas (motivo fútil/torpe).' },
      { letter: 'C', explanation: 'Incorreta. A qualificadora objetiva subsiste na faixa de pena do § 2º com incidência da redução do § 1º.' },
      { letter: 'D', explanation: 'Incorreta. Jurisprudência pacífica do STJ e STF afasta o caráter hediondo no homicídio híbrido.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 121, §§ 1º e 2º', textSnippet: 'Se o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de um sexto a um terço.' }
    ],
    professorTip: 'Homicídio Privilegiado-Qualificado: Privilégio (subjetivo) + Qualificadora OBJETIVA = Possível, e NÃO é crime hediondo!'
  },
  {
    id: 'penal_ext_14',
    exam: 'Prova Semestral Faculdade de Direito - Parte Especial',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Furto x Apropriação Indébita x Estelionato',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Paula pediu emprestado o veículo de sua amiga Mariana para ir ao médico durante a tarde, agindo inicialmente de boa-fé. No dia seguinte, após já estar na posse lícita do automóvel, Paula decide não devolvê-lo e vende o veículo para terceiro como se fosse seu. A conduta de Paula tipifica o crime de:`,
    options: [
      { letter: 'A', text: 'Estelionato.' },
      { letter: 'B', text: 'Furto mediante fraude.' },
      { letter: 'C', text: 'Apropriação indébita.' },
      { letter: 'D', text: 'Receptação dolosa.' }
    ],
    correctAnswer: 'C',
    justification: `Na apropriação indébita (art. 168 do CP), o agente recebe a posse ou detenção da coisa móvel de forma LÍCITA e de boa-fé, passando posteriormente a inverter o ânimo sobre o bem (animus rem sibi habendi), apropriando-se dele como dono.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. No estelionato (art. 171), a fraude (dolo de enganar) é antecedente à entrega da coisa pela vítima.' },
      { letter: 'B', explanation: 'Incorreta. No furto mediante fraude (art. 155, § 4º, II), o agente usa o ardil para diminuir a vigilância e subtrair o bem.' },
      { letter: 'D', explanation: 'Incorreta. Receptação é praticada por quem adquire produto de crime anterior.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 168', textSnippet: 'Apropriar-se de coisa alheia móvel, de que tem a posse ou a detenção: Pena - reclusão, de um a quatro anos, e multa.' }
    ],
    professorTip: 'Dica infalível para diferenciar os três crimes patrimoniais: Apropriação indébita = posse inicial lícita + dolo posterior. Estelionato = fraude prévia + vítima entrega voluntariamente. Furto mediante fraude = fraude para distrair e agente subtrai.'
  },
  {
    id: 'penal_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Roubo Consumado e Emprego de Arma Branca (Súmula 582 STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Pedro abordou uma pedestre exibindo uma faca de cozinha e exigiu a entrega do celular. Assim que tomou o aparelho das mãos da vítima e empreendeu fuga correndo, Pedro foi perseguido por policiais que patrulhavam a via e preso três quarteirões depois, antes de conseguir obter a posse mansa e pacífica do bem. Segundo o Código Penal e a Súmula 582 do STJ:`,
    options: [
      { letter: 'A', text: 'Houve roubo tentado, pois não se consolidou a posse mansa e pacífica.' },
      { letter: 'B', text: 'Houve roubo consumado, pois a inversão da posse mediante violência ou grave ameaça consuma o crime, mesmo sem posse mansa e pacífica, incidindo a majorante do emprego de arma branca.' },
      { letter: 'C', text: 'Não incide majorante alguma porque a Lei 13.654/2018 aboliu definitivamente a majorante de arma branca sem reintrodução.' },
      { letter: 'D', text: 'O crime desclassifica-se para furto qualificado.' }
    ],
    correctAnswer: 'B',
    justification: `Consoante a Súmula 582 do STJ, consuma-se o crime de roubo com a inversão da posse do bem mediante emprego de violência ou grave ameaça, ainda que por breve tempo e em seguida à perseguição imediata ao agente e recuperação da coisa roubada, sendo prescindível a posse mansa e pacífica (teoria da amotio). Ademais, o Pacote Anticrime (Lei 13.964/2019) restabeleceu a majorante de 1/3 até metade para o emprego de arma branca no art. 157, § 2º, VII, do CP.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Súmula 582 dispensa expressamente a posse mansa e pacífica.' },
      { letter: 'C', explanation: 'Incorreta. A Lei 13.964/2019 inseriu o inciso VII no § 2º do art. 157 prevendo aumento de pena para arma branca.' },
      { letter: 'D', explanation: 'Incorreta. Houve grave ameaça com faca, configurando roubo.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 157, § 2º, VII', textSnippet: 'A pena aumenta-se de 1/3 (um terço) até metade: (...) VII - se a violência ou grave ameaça é exercida com emprego de arma branca.' }
    ],
    jurisprudence: 'Súmula 582 do STJ.',
    professorTip: 'Súmula 582 STJ: Encostou a mão e inverteu a posse no furto ou roubo = CONSUMADO! E lembre-se: arma branca aumenta 1/3 a 1/2 (Pacote Anticrime); arma de fogo comum aumenta 2/3; arma de uso restrito/proibido dobra a pena.'
  },
  {
    id: 'penal_ext_16',
    exam: 'Concurso MP / Defensoria - Direito Penal',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Estelionato - Ação Penal após o Pacote Anticrime',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Rafael foi vítima de estelionato simples cometido por um conhecido maior e capaz, não envolvendo a Administração Pública, idoso, criança ou pessoa com deficiência. Passados quatro meses da ciência inequívoca da autoria do crime, Rafael compareceu à delegacia exclusivamente para noticiar os fatos, mas recusou-se expressamente a oferecer representação contra o autor. À luz do Art. 171, § 5º, do Código Penal:`,
    options: [
      { letter: 'A', text: 'O Ministério Público deverá oferecer denúncia de ofício, pois o estelionato é de ação pública incondicionada.' },
      { letter: 'B', text: 'A ação penal no estelionato passou a ser pública condicionada à representação da vítima como regra geral, impedindo a deflagração da ação sem ela.' },
      { letter: 'C', text: 'A ação penal no estelionato é privada exclusiva, exigindo queixa-crime.' },
      { letter: 'D', text: 'O prazo decadencial para representar no estelionato é de cinco anos.' }
    ],
    correctAnswer: 'B',
    justification: `Com a Lei 13.964/2019 (art. 171, § 5º, CP), o estelionato passou a ser de ação penal pública condicionada à representação como regra, exceto quando a vítima for: I) Administração Pública direta ou indireta; II) criança ou adolescente; III) pessoa com deficiência mental; IV) maior de 70 anos ou incapaz.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A regra geral foi alterada para pública condicionada à representação.' },
      { letter: 'C', explanation: 'Incorreta. Não é ação privada.' },
      { letter: 'D', explanation: 'Incorreta. O prazo decadencial para representação é de 6 meses da ciência da autoria (art. 103 CP).' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 171, § 5º', textSnippet: 'Somente se procede mediante representação, salvo se a vítima for: I - a Administração Pública, direta ou indireta; II - criança ou adolescente; III - pessoa com deficiência mental; ou IV - maior de 70 (setenta) anos de idade ou incapaz.' }
    ],
    professorTip: 'Estelionato = Condicionada à REPRESENTAÇÃO, salvo ACIMA-70 (Administração, Criança, Incapaz, Deficiente Mental, Maior de 70 anos)!'
  },
  {
    id: 'penal_ext_17',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Crimes contra a Dignidade Sexual - Súmula 593 STJ',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Um homem de 22 anos manteve conjunção carnal consentida com sua namorada de 13 anos de idade, com anuência dos pais da adolescente. Processado por estupro de vulnerável (art. 217-A do CP), a defesa alegou ausência de violência, consentimento da vítima e relacionamento amoroso prévio. Conforme a legislação penal e a Súmula 593 do STJ:`,
    options: [
      { letter: 'A', text: 'O consentimento da adolescente de 13 anos afasta o crime quando há aprovação familiar.' },
      { letter: 'B', text: 'O crime de estupro de vulnerável configura-se com a conjunção carnal ou prática de ato libidinoso com menor de 14 anos, sendo irrelevante o eventual consentimento da vítima, sua experiência sexual anterior ou existência de relacionamento amoroso.' },
      { letter: 'C', text: 'A presunção de violência é meramente relativa, admitindo prova em contrário.' },
      { letter: 'D', text: 'A ação penal para o estupro de vulnerável depende de representação dos pais.' }
    ],
    correctAnswer: 'B',
    justification: `A Súmula 593 do STJ consagrou o entendimento absoluto do art. 217-A e § 5º do CP: "O crime de estupro de vulnerável se configura com a conjunção carnal ou prática de ato libidinoso com menor de 14 anos, sendo irrelevante eventual consentimento da vítima para a prática do ato, sua experiência sexual anterior ou existência de relacionamento amoroso com o agente". Além disso, todos os crimes contra a dignidade sexual são de ação penal pública incondicionada (art. 225 CP).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A vulnerabilidade etária (< 14 anos) é objetiva e absoluta.' },
      { letter: 'C', explanation: 'Incorreta. Não se trata mais de presunção relativa, e sim elementar objetiva.' },
      { letter: 'D', explanation: 'Incorreta. Todos os crimes contra a dignidade sexual procedem-se por ação penal pública incondicionada (Lei 13.718/2018).' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 217-A, § 5º e Art. 225', textSnippet: 'As penas previstas no caput e nos §§ 1º, 3º e 4º deste artigo aplicam-se independentemente do consentimento da vítima ou do fato de ela ter mantido relações sexuais anteriormente ao crime.' }
    ],
    jurisprudence: 'Súmula 593 do STJ.',
    professorTip: 'Menor de 14 anos (até a véspera do aniversário de 14) = Vulnerabilidade ABSOLUTA (Súmula 593 STJ). Todos os crimes sexuais hoje têm ação pública INCONDICIONADA!'
  },
  {
    id: 'penal_ext_18',
    exam: 'Concurso Carreiras Jurídicas - Direito Penal',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Corrupção Passiva x Concussão',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um auditor fiscal da receita estadual, durante fiscalização de rotina em estabelecimento comercial, afirma ao empresário: "Se o senhor não me entregar R$ 10.000,00 em espécie até amanhã, vou lavrar autos de infração milionários para fechar sua empresa". A exigência tem como núcleo a imposição intimidatória em razão da função pública. A conduta descrita amolda-se ao crime de:`,
    options: [
      { letter: 'A', text: 'Corrupção passiva.' },
      { letter: 'B', text: 'Prevaricação.' },
      { letter: 'C', text: 'Concussão.' },
      { letter: 'D', text: 'Peculato mediante erro de outrem.' }
    ],
    correctAnswer: 'C',
    justification: `Na concussão (art. 316 do CP), o funcionário público EXIGE vantagem indevida, valendo-se de sua autoridade e impondo temor à vítima (crime formal que se consuma com a mera exigência). Já na corrupção passiva (art. 317 CP), o verbo nuclear é solicitar, receber ou aceitar promessa.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Corrupção passiva envolve pedido/solicitação ou aceitação, sem exigência coativa.' },
      { letter: 'B', explanation: 'Incorreta. Prevaricação é retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal.' },
      { letter: 'D', explanation: 'Incorreta. Peculato mediante erro (art. 313) pressupõe entrega espontânea por equívoco da vítima.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 316', textSnippet: 'Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida: Pena - reclusão, de 2 (dois) a 12 (doze) anos, e multa.' }
    ],
    professorTip: 'Verbos nucleares que diferenciam os crimes funcionais: CONCUSSÃO = EXIGIR; CORRUPÇÃO PASSIVA = SOLICITAR, RECEBER, ACEITAR PROMESSA!'
  },
  {
    id: 'penal_ext_19',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Lei Maria da Penha e Impossibilidade de Penas Alternativas (Súmula 588 e 589 STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Condenado pelo crime de lesão corporal leve praticado no âmbito de violência doméstica e familiar contra sua companheira, o réu requereu a substituição da pena privativa de liberdade por prestação pecuniária ou o reconhecimento do princípio da insignificância, invocando primariedade. De acordo com a Lei nº 11.340/2006 e as Súmulas do STJ:`,
    options: [
      { letter: 'A', text: 'É cabível a substituição da pena privativa de liberdade por cesta básica ou multa isolada.' },
      { letter: 'B', text: 'A prática de crime ou contravenção penal contra a mulher com violência ou grave ameaça no ambiente doméstico impossibilita a substituição da pena privativa de liberdade por restritiva de direitos, além de ser inaplicável o princípio da insignificância e a suspensão condicional do processo.' },
      { letter: 'C', text: 'Aplica-se o princípio da insignificância por ser lesão leve.' },
      { letter: 'D', text: 'A ação penal na lesão corporal leve contra a mulher em âmbito doméstico depende de representação irretratável.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 41 da Lei 11.340/06, não se aplica a Lei 9.099/95 (transação penal, suspensão condicional do processo) aos crimes praticados com violência doméstica contra a mulher. Pela Súmula 588 do STJ, é vedada a substituição por penas restritivas de direitos quando houver violência ou grave ameaça; e pela Súmula 589 do STJ, é inaplicável o princípio da insignificância. Além disso, a lesão corporal contra a mulher em violência doméstica é de ação pública incondicionada (Súmula 542 STJ).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O art. 17 da Lei Maria da Penha veda expressamente penas de cesta básica ou pagamento isolado de multa.' },
      { letter: 'C', explanation: 'Incorreta. Vedado pela Súmula 589 do STJ.' },
      { letter: 'D', explanation: 'Incorreta. Na lesão corporal, a ação penal é pública INCONDICIONADA (Súmula 542 STJ).' }
    ],
    statuteReferences: [
      { code: 'Lei 11.340/2006', article: 'Art. 17 e Art. 41', textSnippet: 'É vedada a aplicação, nos casos de violência doméstica e familiar contra a mulher, de penas de cesta básica ou outras de prestação pecuniária, bem como a substituição de pena que implique o pagamento isolado de multa.' }
    ],
    jurisprudence: 'Súmulas 536, 542, 588 e 589 do STJ.',
    professorTip: 'Pacote de Súmulas da Lei Maria da Penha: 536 (sem sursis/transação), 542 (lesão = incondicionada), 588 (sem restritiva de direitos se há violência/grave ameaça), 589 (sem insignificância)!'
  },
  {
    id: 'penal_ext_20',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Lei de Drogas - Tráfico Privilegiado (Art. 33, § 4º)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Jovem primário, de bons antecedentes, sem qualquer vínculo com organização criminosa e que não se dedica a atividades delituosas, foi preso em flagrante transportando pequena quantidade de entorpecente, recebendo condenação pelo Art. 33, § 4º, da Lei nº 11.343/2006 (tráfico privilegiado). Com base na jurisprudência do STF e na Lei de Execução Penal:`,
    options: [
      { letter: 'A', text: 'O tráfico privilegiado possui natureza de crime hediondo, exigindo fração mais severa para progressão.' },
      { letter: 'B', text: 'O tráfico privilegiado não tem natureza hedionda ou equiparada, sendo admissível inclusive a substituição da pena privativa de liberdade por restritivas de direitos.' },
      { letter: 'C', text: 'A vedação legal à conversão em pena restritiva de direitos prevista no texto originário da Lei de Drogas permanece plenamente válida.' },
      { letter: 'D', text: 'A presença isolada de atos infracionais cometidos na adolescência impede por si só o reconhecimento do tráfico privilegiado.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 112, § 5º, da LEP (incluído pela Lei 13.964/2019) positivou o entendimento do STF (HC 118.533) e da Súmula 512 do STJ (cancelada): o tráfico privilegiado (art. 33, § 4º da Lei 11.343/06) NÃO é considerado crime hediondo ou equiparado. Ademais, o STF declarou inconstitucional a vedação de substituição por restritiva de direitos (Resolução 5/2012 do Senado Federal).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não é equiparado a hediondo (art. 112, § 5º, LEP).' },
      { letter: 'C', explanation: 'Incorreta. A vedação foi declarada inconstitucional pelo STF e suspensa pelo Senado.' },
      { letter: 'D', explanation: 'Incorreta. Atos infracionais não configuram maus antecedentes nem reincidência.' }
    ],
    statuteReferences: [
      { code: 'Lei 11.343/2006 e LEP', article: 'Art. 33, § 4º e Art. 112, § 5º da LEP', textSnippet: 'Não se considera hediondo ou equiparado, para os fins deste artigo, o crime de tráfico de drogas previsto no § 4º do art. 33 da Lei nº 11.343, de 23 de agosto de 2006.' }
    ],
    professorTip: 'Tráfico Privilegiado (art. 33, § 4º): NÃO é hediondo! Cabe regime inicial aberto e cabe pena restritiva de direitos!'
  },
  {
    id: 'penal_ext_21',
    exam: 'Prova Semestral Faculdade de Direito - Penal Especial',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Súmula Vinculante 24 - Crimes Tributários Materiais',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Empresário deixou de recolher ICMS declarado em guia própria? Não — na hipótese, foi acusado de suprimir tributo mediante fraude fiscal (Art. 1º, I, da Lei nº 8.137/1990). Antes mesmo de concluído o processo administrativo fiscal de lançamento do crédito tributário, o Ministério Público ofereceu denúncia criminal. À luz da Súmula Vinculante nº 24 do STF:`,
    options: [
      { letter: 'A', text: 'Os crimes contra a ordem tributária independem de prévio esgotamento da esfera administrativa.' },
      { letter: 'B', text: 'Não se tipifica crime material contra a ordem tributária antes do lançamento definitivo do tributo.' },
      { letter: 'C', text: 'A prescrição penal corre normalmente enquanto tramita o recurso administrativo no CARF ou conselho estadual.' },
      { letter: 'D', text: 'O pagamento integral após o recebimento da denúncia não gera extinção da punibilidade.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo a Súmula Vinculante nº 24 do STF, "Não se tipifica crime material contra a ordem tributária, previsto no art. 1º, incisos I a IV, da Lei 8.137/90, antes do lançamento definitivo do tributo". Enquanto não constituído definitivamente o crédito na via administrativa, falta justa causa para a ação penal e não corre a prescrição.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Para os crimes materiais do art. 1º, I a IV, o esgotamento administrativo com lançamento definitivo é condição objetiva de punibilidade / tipicidade.' },
      { letter: 'C', explanation: 'Incorreta. Como o crime sequer se tipifica antes do lançamento definitivo, não há início do prazo prescricional.' },
      { letter: 'D', explanation: 'Incorreta. Nos termos da Lei 10.684/2003 (art. 9º, § 2º) e jurisprudência do STF/STJ, o pagamento integral a qualquer tempo antes do trânsito em julgado extingue a punibilidade.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.137/1990', article: 'Art. 1º, I a IV', textSnippet: 'Constitui crime contra a ordem tributária suprimir ou reduzir tributo, ou contribuição social e qualquer acessório...' }
    ],
    jurisprudence: 'Súmula Vinculante nº 24 do STF.',
    professorTip: 'SV 24: Crime material tributário (Art. 1º, I a IV) SÓ EXISTE após o lançamento definitivo do tributo! Pagamento integral até antes do trânsito em julgado = extingue punibilidade.'
  },
  {
    id: 'penal_ext_22',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Princípio da Insignificância e Reincidência (Jurisprudência STF)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Sobre a aplicação do princípio da insignificância (bagatela) conforme os vetores estabelecidos pelo Supremo Tribunal Federal e Superior Tribunal de Justiça, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Exige mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada.' },
      { letter: 'B', text: 'Aplica-se amplamente aos crimes contra a Administração Pública, conforme a Súmula 599 do STJ.' },
      { letter: 'C', text: 'Exclui a culpabilidade do agente, mantendo intacta a tipicidade material.' },
      { letter: 'D', text: 'Aplica-se normalmente ao crime de roubo se a quantia subtraída for inferior a dez por cento do salário mínimo.' }
    ],
    correctAnswer: 'A',
    justification: `O STF consolidou os 4 vetores objetivos do princípio da insignificância (MARI): Mínima ofensividade da conduta; Ausência de periculosidade social da ação; Reduzido grau de reprovabilidade; Inexpressividade da lesão jurídica. Sua incidência exclui a tipicidade material.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A Súmula 599 do STJ estabelece exatamente o oposto: o princípio da insignificância é INAPLICÁVEL aos crimes contra a Administração Pública (salvo raríssima exceção de descaminho ≤ R$ 20 mil).' },
      { letter: 'C', explanation: 'Incorreta. A insignificância exclui a TIPICIDADE MATERIAL, não a culpabilidade.' },
      { letter: 'D', explanation: 'Incorreta. Crimes praticados com violência ou grave ameaça (como o roubo) nunca admitem insignificância.' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 155 (interpretação constitucional)', textSnippet: 'Princípio da intervenção mínima e fragmentariedade penal.' }
    ],
    jurisprudence: 'Súmula 599 do STJ e HC 84.412/SP (STF).',
    professorTip: 'Vetores da Bagatela = M.A.R.I. e exclui a TIPICIDADE MATERIAL! Súmula 599 STJ: NÃO se aplica a crimes contra a Administração Pública.'
  },
  {
    id: 'penal_ext_23',
    exam: 'Concurso Magistratura / MP - Direito Penal',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Teoria da Imputação Objetiva e Nexo Causal (Concausa Superveniente)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Durante briga em bar, Carlos desfere uma facada no braço de Paulo, produzindo lesão leve sem risco de morte. Paulo é socorrido por ambulância do município, mas, no trajeto ao hospital, um caminhão desgovernado colide violentamente contra a ambulância e Paulo morre instantaneamente em decorrência do traumatismo craniano provocado pelo acidente automobilístico. Nos termos do Art. 13, § 1º, do Código Penal:`,
    options: [
      { letter: 'A', text: 'Carlos responderá por homicídio consumado com base na teoria da equivalência dos antecedentes.' },
      { letter: 'B', text: 'Trata-se de concausa superveniente relativamente independente que por si só produziu o resultado, respondendo Carlos apenas pelos atos anteriores (lesão corporal).' },
      { letter: 'C', text: 'Carlos responderá por homicídio culposo em concurso com lesão corporal.' },
      { letter: 'D', text: 'Configura-se causa preexistente absolutamente independente, isentando Carlos de qualquer crime.' }
    ],
    correctAnswer: 'B',
    justification: `O acidente de trânsito envolvendo a ambulância é causa superveniente relativamente independente que POR SI SÓ produziu o resultado morte (saiu da linha normal de desdobramento da facada no braço). Nos termos do art. 13, § 1º, do CP, o evento rompe o nexo causal em relação à morte, imputando-se a Carlos apenas os fatos anteriores praticados (lesão corporal ou tentativa de homicídio, conforme o dolo inicial).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A conditio sine qua non sofre exceção expressa no art. 13, § 1º do CP.' },
      { letter: 'C', explanation: 'Incorreta. O acidente foi causado por terceiro caminhoneiro, não havendo previsibilidade ou culpa de Carlos quanto à batida.' },
      { letter: 'D', explanation: 'Incorreta. O acidente ocorreu após a facada (superveniente) e decorreu do socorro (relativamente independente).' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 13, § 1º', textSnippet: 'A superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado; os fatos anteriores, porém, imputam-se a quem os praticou.' }
    ],
    professorTip: 'Clássico das provas de faculdade e concursos: Se o sujeito morre por infecção hospitalar ou erro médico na cirurgia (desdobramento previsível), responde pela morte. Se morre por acidente com a ambulância ou incêndio no hospital ("por si só"), rompe o nexo!'
  },
  {
    id: 'penal_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Direito Penal',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Crime Continuado e Sucessão de Leis Penais (Súmula 711 STF)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um agente praticou uma sequência de cinco furtos em continuidade delitiva entre janeiro e junho de determinado ano. Em março (no meio da série delitiva), entrou em vigor nova lei penal majorando severamente a pena abstrata do crime praticado. De acordo com a Súmula 711 do Supremo Tribunal Federal:`,
    options: [
      { letter: 'A', text: 'Aplica-se a lei anterior mais benéfica a toda a série continuada.' },
      { letter: 'B', text: 'A lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência.' },
      { letter: 'C', text: 'Fica vedada a aplicação da continuidade delitiva se houver mudança legislativa no período.' },
      { letter: 'D', text: 'Aplica-se a lei mais nova apenas se mais benéfica ao réu.' }
    ],
    correctAnswer: 'B',
    justification: `A Súmula 711 do STF estabelece que "A lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência". Não há retroatividade maléfica porque o agente continuou praticando o crime já sob a vigência da lei nova.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Contraria a Súmula 711 do STF.' },
      { letter: 'C', explanation: 'Incorreta. A unidade jurídica da continuidade delitiva mantém-se, regida pela lei vigente ao término da prática.' },
      { letter: 'D', explanation: 'Incorreta. Aplica-se a lei nova mesmo sendo mais severa (in pejus).' }
    ],
    statuteReferences: [
      { code: 'Código Penal', article: 'Art. 71', textSnippet: 'Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes da mesma espécie...' }
    ],
    jurisprudence: 'Súmula 711 do STF.',
    professorTip: 'Súmula 711 STF: Sequestro (crime permanente) ou série de furtos (crime continuado) começou antes da lei pior e só parou DEPOIS dela? Aplica-se a LEI NOVA MAIS GRAVE!'
  },
  {
    id: 'penal_ext_25',
    exam: 'Prova Semestral Faculdade de Direito - Legislação Especial',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Penal',
    topic: 'Crimes de Abuso de Autoridade (Lei nº 13.869/2019)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Nos termos da Lei de Abuso de Autoridade (Lei nº 13.869/2019), a divergência na interpretação de lei ou na avaliação de fatos e provas por magistrado ou membro do Ministério Público:`,
    options: [
      { letter: 'A', text: 'Configura crime de abuso de autoridade na modalidade culposa se causar prejuízo ao investigado.' },
      { letter: 'B', text: 'Não configura abuso de autoridade, exigindo a lei o dolo específico de prejudicar outrem, beneficiar a si ou a terceiro, ou agir por mero capricho ou satisfação pessoal.' },
      { letter: 'C', text: 'Somente afasta o crime mediante homologação pelo Conselho Nacional de Justiça.' },
      { letter: 'D', text: 'Torna a ação penal privada personalíssima da parte prejudicada.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 1º, §§ 1º e 2º, da Lei 13.869/2019 veda o chamado "crime de hermenêutica": a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade. Ademais, todas as condutas exigem dolo específico de prejudicar, beneficiar ou satisfazer capricho pessoal (não há modalidade culposa).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não existem crimes culposos na Lei de Abuso de Autoridade.' },
      { letter: 'C', explanation: 'Incorreta. Não há necessidade de manifestação prévia do CNJ.' },
      { letter: 'D', explanation: 'Incorreta. Os crimes são de ação penal pública incondicionada, admitindo ação privada subsidiária apenas em caso de inércia do MP (art. 3º).' }
    ],
    statuteReferences: [
      { code: 'Lei 13.869/2019', article: 'Art. 1º, §§ 1º e 2º', textSnippet: 'As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.' }
    ],
    professorTip: 'Abuso de Autoridade exige SEMPRE DOLO ESPECÍFICO (prejudicar, beneficiar ou capricho pessoal). Divergência jurídica/interpretativa nunca é crime!'
  }
];
