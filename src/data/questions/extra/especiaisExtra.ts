import { LegalQuestion } from '../../../types';

export const ESPECIAIS_EXTRA_QUESTIONS: LegalQuestion[] = [
  // DIREITOS HUMANOS (+4)
  {
    id: 'esp_ext_dh_01',
    exam: 'Simulado FGV / OAB Unificado - Direitos Humanos',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direitos Humanos',
    topic: 'Incidente de Deslocamento de Competência (Federalização de Graves Violações)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Nas hipóteses de grave violação de direitos humanos em que haja risco de descumprimento de obrigações decorrentes de tratados internacionais dos quais o Brasil seja parte, o Art. 109, § 5º, da Constituição Federal prevê o Incidente de Deslocamento de Competência (IDC) para a Justiça Federal. A legitimidade exclusiva para suscitar esse incidente perante o Superior Tribunal de Justiça pertence ao:`,
    options: [
      { letter: 'A', text: 'Presidente da República.' },
      { letter: 'B', text: 'Procurador-Geral da República (PGR).' },
      { letter: 'C', text: 'Conselho Nacional de Justiça.' },
      { letter: 'D', text: 'Defensor Público-Geral Federal.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 109, § 5º, da CF/88, apenas o Procurador-Geral da República (PGR) tem legitimidade para suscitar, perante o STJ, em qualquer fase do inquérito ou processo, o incidente de deslocamento de competência para a Justiça Federal.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não compete ao Chefe do Executivo.' },
      { letter: 'C', explanation: 'Incorreta. O CNJ não possui legitimidade no art. 109, § 5º.' },
      { letter: 'D', explanation: 'Incorreta. A legitimidade constitucional é exclusiva do PGR.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 109, § 5º', textSnippet: 'Nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais de direitos humanos dos quais o Brasil seja parte, poderá suscitar, perante o Superior Tribunal de Justiça, em qualquer fase do inquérito ou processo, incidente de deslocamento de competência para a Justiça Federal.' }
    ],
    professorTip: 'IDC (Federalização de Graves Violações de DH): Quem pede = PGR! Quem julga = STJ! Para onde vai = Justiça Federal!'
  },
  {
    id: 'esp_ext_dh_02',
    exam: 'Simulado FGV / OAB Unificado - Direitos Humanos',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direitos Humanos',
    topic: 'Sistema Interamericano - Comissão x Corte Interamericana',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um advogado pretende apresentar denúncia de violação de direitos humanos praticada pelo Estado brasileiro perante o Sistema Interamericano de Direitos Humanos. Consoante a Convenção Americana sobre Direitos Humanos (Pacto de San José):`,
    options: [
      { letter: 'A', text: 'O indivíduo vítima ou qualquer ONG legalmente reconhecida pode peticionar diretamente perante a Corte Interamericana de Direitos Humanos, com aplicabilidade imediata e força vinculante das garantias fundamentais no plano interno.' },
      { letter: 'B', text: 'Qualquer pessoa ou grupo de pessoas, ou entidade não governamental legalmente reconhecida, pode apresentar petições à Comissão Interamericana (CIDH), exigindo-se em regra o prévio esgotamento dos recursos internos.' },
      { letter: 'C', text: 'A Comissão Interamericana profere sentenças judiciais condenatórias imediatas contra o Estado, observada a complementariedade entre o sistema global e o sistema interamericano de proteção.' },
      { letter: 'D', text: 'O prazo para peticionar à Comissão após a notificação da decisão interna definitiva é de 2 anos, em sintonia com a universalidade, indivisibilidade e inalienabilidade dos direitos humanos.' }
    ],
    correctAnswer: 'B',
    justification: `Na arquitetura do Pacto de San José da Costa Rica (arts. 44, 46 e 61): cidadãos e ONGs peticionam à COMISSÃO Interamericana (CIDH) após esgotamento dos recursos internos (salvo demora injustificada ou ineficácia) no prazo de 6 meses (art. 46, 1, b). Já à CORTE IDH (art. 61) somente a Comissão e os Estados Partes podem submeter o caso.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Indivíduos e ONGs não têm jus standi direto para iniciar processo contencioso na Corte IDH (art. 61).' },
      { letter: 'C', explanation: 'Incorreta. A Comissão emite relatórios e recomendações; quem profere sentença vinculante é a Corte.' },
      { letter: 'D', explanation: 'Incorreta. O prazo é de 6 meses da notificação da decisão definitiva interna.' }
    ],
    statuteReferences: [
      { code: 'Pacto de San José da Costa Rica', article: 'Art. 44, Art. 46 e Art. 61', textSnippet: 'Somente os Estados Partes e a Comissão têm direito de submeter caso à decisão da Corte.' }
    ],
    professorTip: 'Fluxo no Sistema Interamericano: Cidadão/ONG -> peticiona em 6 meses para a COMISSÃO (CIDH) -> Comissão ou Estado -> submete à CORTE IDH!'
  },
  {
    id: 'esp_ext_dh_03',
    exam: 'Prova Semestral Faculdade de Direito - Direitos Humanos',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direitos Humanos',
    topic: 'Tratados de Direitos Humanos com Status de Emenda Constitucional',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Atualmente, possuem formalmente status equivalente ao de Emenda Constitucional no ordenamento jurídico brasileiro (aprovados pelo quórum do Art. 5º, § 3º, da CF/88):`,
    options: [
      { letter: 'A', text: 'Apenas o Pacto de San José da Costa Rica e a Declaração Universal de 1948, observada a complementariedade entre o sistema global e o sistema interamericano de proteção. Essa diretriz orienta o diálogo entre a jurisdição interna e os órgãos internacionais.' },
      { letter: 'B', text: 'A Convenção sobre os Direitos das Pessoas com Deficiência, o Tratado de Marraqueche, a Convenção Interamericana contra o Racismo, a Discriminação Racial e Formas Correlatas de Intolerância.' },
      { letter: 'C', text: 'Todos os tratados internacionais ratificados pelo Brasil sobre qualquer matéria comercial ou ambiental, com prevalência da interpretação mais favorável à efetiva proteção da pessoa humana.' },
      { letter: 'D', text: 'Apenas as convenções da OIT anteriores a 1988, em sintonia com a universalidade, indivisibilidade e inalienabilidade dos direitos humanos.' }
    ],
    correctAnswer: 'B',
    justification: `Aprovados sob o rito qualificado do art. 5º, § 3º, da CF/88 (dois turnos por 3/5 em cada Casa do Congresso Nacional), têm status constitucional equivalente a Emendas Constitucionais a Convenção da ONU sobre os Direitos das Pessoas com Deficiência e seu Protocolo (Decreto 6.949/2009), o Tratado de Marraqueche (Decreto 9.522/2018) e a Convenção Interamericana contra o Racismo (Decreto 10.932/2022).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A DUDH é resolução da ONU (soft law/costume) e o Pacto de San José foi ratificado em 1992 sem o rito de emenda (status supralegal).' },
      { letter: 'C', explanation: 'Incorreta. Tratados comuns têm status de lei ordinária; só tratados de DH aprovados por 3/5 em 2 turnos têm status constitucional.' },
      { letter: 'D', explanation: 'Incorreta. Tratados anteriores à EC 45/2004 não passaram pelo rito do § 3º.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, § 3º', textSnippet: 'Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.' }
    ],
    professorTip: '3 tratados de DH famosos com status de Emenda Constitucional (3/5 em 2 turnos): 1) Pessoas com Deficiência; 2) Tratado de Marraqueche (obras acessíveis a cegos); 3) Convenção Interamericana contra o Racismo!'
  },
  {
    id: 'esp_ext_dh_04',
    exam: 'Concurso Defensoria Pública - Direitos Humanos',
    examType: 'CONCURSO',
    board: 'FCC',
    year: 2024,
    subject: 'Direitos Humanos',
    topic: 'Estatuto da Pessoa com Deficiência e Capacidade Civil (Lei nº 13.146/2015)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `À luz da Convenção sobre os Direitos das Pessoas com Deficiência e da Lei Brasileira de Inclusão (Lei nº 13.146/2015), a deficiência em si não afeta a plena capacidade civil da pessoa, de modo que:`,
    options: [
      { letter: 'A', text: 'As pessoas com deficiência mental ou intelectual continuam sendo consideradas absolutamente incapazes no Código Civil, em sintonia com a universalidade, indivisibilidade e inalienabilidade dos direitos humanos.' },
      { letter: 'B', text: 'A pessoa com deficiência tem assegurado o direito ao exercício de sua capacidade legal em igualdade de condições, podendo adotar o mecanismo de tomada de decisão apoiada ou, excepcionalmente, a curatela limitada aos atos de natureza patrimonial e negocial.' },
      { letter: 'C', text: 'A curatela atinge os direitos existenciais de casar-se, constituir união estável e exercer o direito ao próprio corpo, sujeita à responsabilidade internacional objetiva do Estado por violações de seus agentes.' },
      { letter: 'D', text: 'A pessoa com deficiência não pode votar nem ser votada caso esteja sob curatela, com impedimento à aplicação de sanções ou medidas contrárias à dignidade da pessoa humana. Essa diretriz orienta o diálogo entre a jurisdição interna e os órgãos internacionais.' }
    ],
    correctAnswer: 'B',
    justification: `A Lei 13.146/2015 (arts. 6º e 84 a 85) e as alterações no art. 3º do CC excluíram as pessoas com deficiência do rol de absolutamente incapazes (hoje apenas menores de 16 anos são absolutamente incapazes). A curatela passou a constituir medida extraordinária, proporcional às necessidades e restrita aos atos de natureza PATRIMONIAL e negocial (não alcança direito ao próprio corpo, sexualidade, matrimônio, voto ou trabalho), existindo ainda a Tomada de Decisão Apoiada (art. 1.783-A CC).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Somente os menores de 16 anos são absolutamente incapazes no art. 3º do CC atual.' },
      { letter: 'C', explanation: 'Incorreta. Direitos existenciais e personalíssimos não são alcançados pela curatela (art. 85, § 1º LBI).' },
      { letter: 'D', explanation: 'Incorreta. É assegurado o direito de votar e ser votado (art. 76 LBI).' }
    ],
    statuteReferences: [
      { code: 'Lei 13.146/2015 (LBI)', article: 'Art. 6º e Art. 85', textSnippet: 'A curatela afetará tão somente os atos relacionados aos direitos de natureza patrimonial e negocial.' }
    ],
    professorTip: 'LBI (Lei 13.146/2015): Deficiência NÃO gera incapacidade absoluta! Curatela é EXCEÇÃO, temporária e SÓ atinge atos PATRIMONIAIS e NEGOCIAIS!'
  },

  // DIREITO DO CONSUMIDOR (+4)
  {
    id: 'esp_ext_cdc_01',
    exam: 'Simulado FGV / OAB Unificado - Direito do Consumidor',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Consumidor',
    topic: 'Direito de Arrependimento nas Compras Fora do Estabelecimento (Art. 49 CDC)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Lucas adquiriu um aparelho de ar-condicionado pelo site oficial de uma loja de eletrodomésticos. O produto chegou perfeitamente funcionando em sua residência no dia 10 de junho, mas, ao abrir a caixa, Lucas percebeu que não combinava com o ambiente e decidiu desistir da compra no dia 15 de junho. Nos termos do Art. 49 do CDC:`,
    options: [
      { letter: 'A', text: 'Lucas só pode desistir da compra se comprovar defeito técnico de fabricação no produto, com proteção à legítima expectativa de segurança e adequação do produto no mercado. Essa proteção orienta a interpretação dos contratos de adesão e a oferta ao mercado.' },
      { letter: 'B', text: 'Lucas pode desistir do contrato no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto, independentemente de justificativa, devendo os valores eventualmente pagos serem devolvidos de imediato e monetariamente atualizados.' },
      { letter: 'C', text: 'Os custos de logística reversa (frete de devolução) devem ser arcados pelo consumidor, sujeita ao controle administrativo e judicial de cláusulas abusivas no microssistema.' },
      { letter: 'D', text: 'O direito de arrependimento aplica-se igualmente às compras feitas presencialmente dentro da loja física, em consonância com a boa-fé objetiva, transparência e equilíbrio nas relações de consumo.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 49 do CDC assegura o prazo de reflexão de 7 dias corridos sempre que a contratação ocorrer fora do estabelecimento comercial (internet, telefone, domicílio), contados da assinatura ou do recebimento do produto, sem necessidade de motivação e com devolução integral e imediata dos valores pagos — correndo os custos de devolução por conta do fornecedor (risco do empreendimento).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não precisa de defeito nem justificativa.' },
      { letter: 'C', explanation: 'Incorreta. Segundo o STJ, toda despesa de logística reversa/frete na desistência do art. 49 é do fornecedor.' },
      { letter: 'D', explanation: 'Incorreta. Só vale para compras fora do estabelecimento comercial.' }
    ],
    statuteReferences: [
      { code: 'Código de Defesa do Consumidor', article: 'Art. 49', textSnippet: 'O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial...' }
    ],
    professorTip: 'Art. 49 CDC: Comprou pela internet/telefone -> 7 DIAS corridos do RECEBIMENTO para desistir SEM precisar de defeito e SEM pagar frete de volta!'
  },
  {
    id: 'esp_ext_cdc_02',
    exam: 'Simulado FGV / OAB Unificado - Direito do Consumidor',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Consumidor',
    topic: 'Bancos de Dados, Negativação Indevida e Súmulas do STJ (359, 385, 548)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Sobre a inscrição de nome de consumidores em cadastros restritivos de crédito (SPC/Serasa) à luz do Art. 43 do CDC e das Súmulas do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Cabe ao credor que solicitou a negativação enviar a notificação prévia escrita ao consumidor, sujeita ao controle administrativo e judicial de cláusulas abusivas no microssistema.' },
      { letter: 'B', text: 'Cabe ao órgão mantenedor do cadastro de proteção ao crédito a notificação prévia do devedor antes de proceder à inscrição, e a preexistência de inscrição legítima afasta indenização por dano moral em nova inscrição indevida.' },
      { letter: 'C', text: 'Quitada a dívida, o consumidor deve providenciar pessoalmente a baixa junto ao órgão de cadastro em até 30 dias, com proteção à legítima expectativa de segurança e adequação do produto no mercado.' },
      { letter: 'D', text: 'Informações negativas podem permanecer nos cadastros por até 10 anos, observados os prazos específicos para reclamação de vícios e pretensão reparatória por defeito.' }
    ],
    correctAnswer: 'B',
    justification: `Pacote sumular clássico do STJ sobre cadastros do art. 43 CDC: Súmula 359 (quem notifica previamente é o ÓRGÃO MANTENEDOR — SPC/Serasa — não o credor); Súmula 385 (quem já tem negativação legítima prévia não faz jus a dano moral por nova inscrição indevida, ressalvado o direito ao cancelamento); Súmula 548 (quitado o débito, incumbe ao CREDOR requerer a exclusão do registro em 5 dias úteis); prazo máximo de manutenção = 5 anos (art. 43, § 1º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A obrigação é do órgão mantenedor do cadastro (Súmula 359 STJ).' },
      { letter: 'C', explanation: 'Incorreta. Pela Súmula 548 STJ, incumbe ao CREDOR requerer a exclusão no prazo de 5 dias úteis.' },
      { letter: 'D', explanation: 'Incorreta. O teto legal é de 5 anos (art. 43, § 1º CDC e Súmula 323 STJ).' }
    ],
    statuteReferences: [
      { code: 'Código de Defesa do Consumidor', article: 'Art. 43, §§ 1º e 2º', textSnippet: 'Os bancos de dados e cadastros relativos a consumidores (...) não podendo conter informações negativas referentes a período superior a cinco anos.' }
    ],
    jurisprudence: 'Súmulas 323, 359, 385 e 548 do STJ.',
    professorTip: 'Súmulas de SPC/Serasa no STJ: Notificação prévia = ÓRGÃO (359); Baixa após pagar em 5 dias úteis = CREDOR (548); Já estava sujo legitimamente = Sem dano moral (385); Prazo máximo no cadastro = 5 anos (323)!'
  },
  {
    id: 'esp_ext_cdc_03',
    exam: 'Prova Semestral Faculdade de Direito - Consumidor',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Consumidor',
    topic: 'Superendividamento do Consumidor (Lei nº 14.181/2021 - Arts. 54-A a 104-C CDC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `A Lei nº 14.181/2021 inseriu no Código de Defesa do Consumidor o tratamento preventivo e judicial do superendividamento do consumidor pessoa natural de boa-fé. Sobre o processo de repactuação de dívidas previsto nos Arts. 104-A e 104-B do CDC:`,
    options: [
      { letter: 'A', text: 'Permite-se a repactuação inclusive de dívidas oriundas de produtos de luxo de alto valor e contratos com garantia real, em consonância com a boa-fé objetiva, transparência e equilíbrio nas relações de consumo.' },
      { letter: 'B', text: 'O consumidor pessoa natural de boa-fé pode requerer a instauração de processo de repactuação de dívidas visando a plano de pagamento com prazo máximo de 5 anos, preservado o mínimo existencial, excluídas dívidas com garantia real, financiamentos imobiliários e crédito rural.' },
      { letter: 'C', text: 'A ausência injustificada de qualquer credor à audiência de conciliação acarreta a extinção imediata de sua dívida sem pagamento, com afastamento de qualquer cláusula que exonere ou atenue o dever legal de indenizar.' },
      { letter: 'D', text: 'A repactuação de dívidas por superendividamento aplica-se também a sociedades limitadas empresárias, observados os prazos específicos para reclamação de vícios e pretensão reparatória por defeito. Essa proteção orienta a interpretação dos contratos de adesão e a oferta ao mercado.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 54-A e os arts. 104-A a 104-C do CDC tratam exclusivamente do consumidor PESSOA NATURAL de boa-fé. Na audiência conciliatória, busca-se plano de pagamento com prazo máximo de 5 anos, preservando-se o mínimo existencial, ficando excluídos créditos com garantia real, financiamentos imobiliários, crédito rural e produtos/serviços de luxo de alto valor (art. 54-A, § 1º e art. 104-A, § 1º). O não comparecimento injustificado do credor gera suspensão da exigibilidade e interrupção de encargos moratórios (art. 104-A, § 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Estão expressamente excluídos os bens/serviços de luxo de alto valor e contratos com garantia real.' },
      { letter: 'C', explanation: 'Incorreta. Gera suspensão da exigibilidade, interrupção dos encargos da mora e sujeição compulsória ao plano após os credores presentes (não perdão total).' },
      { letter: 'D', explanation: 'Incorreta. Só beneficia pessoa natural (física) de boa-fé.' }
    ],
    statuteReferences: [
      { code: 'Código de Defesa do Consumidor', article: 'Art. 54-A e Art. 104-A', textSnippet: 'A requerimento do consumidor superendividado pessoa natural, o juiz poderá instaurar processo de repactuação de dívidas, com vistas à realização de audiência conciliatória... para pagamento com prazo máximo de 5 (cinco) anos, preservados o mínimo existencial...' }
    ],
    professorTip: 'Lei do Superendividamento (14.181/21): Só PESSOA FÍSICA de boa-fé! Plano em até 5 ANOS preservando o mínimo existencial! Ficam FORA: garantia real, financiamento imobiliário, crédito rural e itens de luxo!'
  },
  {
    id: 'esp_ext_cdc_04',
    exam: 'Simulado FGV / OAB Unificado - Direito do Consumidor',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Consumidor',
    topic: 'Vício de Qualidade em Produto Durável e Prazo de 30 Dias (Art. 18 CDC)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Beatriz comprou uma televisão nova que apresentou defeito na tela 20 dias após a entrega. Levou o aparelho à assistência técnica autorizada pelo fabricante, onde o produto permaneceu por 35 dias sem que o problema fosse solucionado. Diante do Art. 18, § 1º, do CDC:`,
    options: [
      { letter: 'A', text: 'Beatriz deve aguardar mais 30 dias antes de optar pela restituição do valor pago, observados os prazos específicos para reclamação de vícios e pretensão reparatória por defeito.' },
      { letter: 'B', text: 'Não sendo o vício sanado no prazo máximo de 30 dias, pode o consumidor exigir, alternativamente e à sua escolha: a substituição do produto por outro da mesma espécie, a restituição imediata da quantia paga atualizada ou o abatimento proporcional do preço.' },
      { letter: 'C', text: 'A responsabilidade pelo vício é exclusiva do fabricante, não podendo a loja vendedora ser acionada solidariamente, com afastamento de qualquer cláusula que exonere ou atenue o dever legal de indenizar.' },
      { letter: 'D', text: 'O prazo decadencial para reclamar de vício aparente em produto durável é de 30 dias, sujeita ao controle administrativo e judicial de cláusulas abusivas no microssistema.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 18 do CDC, os fornecedores (fabricante e comerciante solidariamente) respondem pelos vícios de qualidade. Não sanado o vício em até 30 dias, o consumidor tem escolha livre entre: I) substituição por outro igual; II) restituição imediata do valor pago + perdas e danos; III) abatimento proporcional do preço. E tratando-se de bem durável (TV), o prazo decadencial para reclamar de vício aparente é de 90 dias (art. 26, II).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Ultrapassados os 30 dias, nasce imediatamente o direito de escolha do consumidor.' },
      { letter: 'C', explanation: 'Incorreta. No VÍCIO do produto (art. 18), fabricante e loja respondem SOLIDARIAMENTE.' },
      { letter: 'D', explanation: 'Incorreta. 30 dias é para produto NÃO durável; para produto DURÁVEL são 90 dias (art. 26, I e II).' }
    ],
    statuteReferences: [
      { code: 'Código de Defesa do Consumidor', article: 'Art. 18, § 1º e Art. 26, II', textSnippet: 'Não sendo o vício sanado no prazo máximo de trinta dias, pode o consumidor exigir, alternativamente e à sua escolha...' }
    ],
    professorTip: 'Decadência no Vício (Art. 26 CDC): 30 dias = Não durável; 90 dias = Durável! E o prazo máximo da assistência técnica para consertar é de 30 dias (se passar ou se for produto essencial, o consumidor escolhe outro novo, dinheiro de volta ou desconto)!'
  },

  // DIREITO AMBIENTAL (+4)
  {
    id: 'esp_ext_amb_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Ambiental',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Ambiental',
    topic: 'Responsabilidade Civil Ambiental Objetiva, Solidária e Propter Rem (Súmulas 613 e 623 STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Pedro adquiriu uma fazenda que já havia sido integralmente desmatada em sua Área de Preservação Permanente (APP) pelo antigo proprietário há cinco anos. Notificado pelo órgão ambiental para recuperar a vegetação nativa, Pedro alegou não ter sido o autor do desmatamento. Conforme a Súmula 623 do STJ e o Código Florestal:`,
    options: [
      { letter: 'A', text: 'A responsabilidade civil pela reparação ambiental é subjetiva e pessoal, não alcançando o adquirente de boa-fé, sem admissão de fato consumado ou boa-fé para afastar o dever de recuperação do dano.' },
      { letter: 'B', text: 'As obrigações ambientais possuem natureza propter rem, sendo admissível cobrá-las do proprietário ou possuidor atual e/ou dos anteriores, à escolha do credor.' },
      { letter: 'C', text: 'Admite-se a aplicação da teoria do fato consumado em matéria de degradação ambiental em APP, com preservação da imprescritibilidade da pretensão voltada à reparação do dano ecológico.' },
      { letter: 'D', text: 'A pretensão de reparação civil por dano ambiental prescreve em 5 anos, sujeita ao regime constitucional de bem de uso comum do povo e equidade intergeracional.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo a Súmula 623 do STJ: "As obrigações ambientais possuem natureza propter rem, sendo admissível cobrá-las do proprietário ou possuidor atual e/ou dos anteriores, à escolha do credor". Ademais, a responsabilidade civil ambiental é objetiva sob a teoria do risco integral, não se admite fato consumado ambiental (Súmula 613 STJ) e a pretensão de reparação civil do dano ambiental é IMPRESCRITÍVEL (STF Tema 999).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Por ser propter rem e objetiva, acompanha a coisa e vincula o novo dono.' },
      { letter: 'C', explanation: 'Incorreta. Súmula 613 do STJ expressamente PROÍBE a teoria do fato consumado em direito ambiental.' },
      { letter: 'D', explanation: 'Incorreta. STF Tema 999: é imprescritível a pretensão de reparação civil de dano ambiental.' }
    ],
    statuteReferences: [
      { code: 'Lei 12.651/2012 (Código Florestal)', article: 'Art. 2º, § 2º e Art. 7º', textSnippet: 'As obrigações previstas nesta Lei têm natureza real e são transmitidas ao sucessor, de qualquer natureza, no caso de transferência de domínio ou posse do imóvel rural.' }
    ],
    jurisprudence: 'Súmulas 613 e 623 do STJ; STF Tema 999.',
    professorTip: 'Combo imbatível de Direito Ambiental: Obrigação PROPTER REM (Súmula 623 STJ) + Responsabilidade OBJETIVA pelo Risco Integral (não aceita caso fortuito!) + SEM Fato Consumado (Súmula 613 STJ) + Reparação Civil IMPRESCRITÍVEL (Tema 999 STF)!'
  },
  {
    id: 'esp_ext_amb_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Ambiental',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Ambiental',
    topic: 'Licenciamento Ambiental Trifásico e EIA/RIMA (Art. 225, § 1º, IV, CF)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Sobre o Estudo Prévio de Impacto Ambiental (EIA/RIMA) e as fases do licenciamento ambiental ordinário no Direito Ambiental Brasileiro, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O EIA/RIMA é exigido para obra ou atividade potencialmente causadora de significativa degradação do meio ambiente, a que se dará publicidade, e o licenciamento trifásico compreende Licença Prévia (lp), Licença de Instalação (li) e Licença de Operação (lo).' },
      { letter: 'B', text: 'A Licença Prévia autoriza o início imediato das obras de construção e terraplanagem, com preservação da imprescritibilidade da pretensão voltada à reparação do dano ecológico.' },
      { letter: 'C', text: 'O EIA/RIMA tem caráter sigiloso em proteção ao segredo industrial, vedada audiência pública, com repercussão autônoma e cumulativa nas esferas administrativa, cível e penal ambiental.' },
      { letter: 'D', text: 'Concedida a Licença de Operação, o empreendedor adquire direito adquirido perpétuo contra qualquer revisão ou cancelamento pelo órgão ambiental, sujeita ao regime constitucional de bem de uso comum do povo e equidade intergeracional.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 225, § 1º, IV, da CF/88 exige estudo prévio de impacto ambiental com publicidade para atividades potencialmente causadoras de significativa degradação. No licenciamento trifásico (CONAMA 237/97): 1) LP aprova a localização e concepção; 2) LI autoriza a instalação/obras; 3) LO autoriza a operação após verificação das condicionantes — sempre com prazo determinado e passível de modificação, suspensão ou cancelamento (art. 19 da Res. CONAMA 237/97).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Quem autoriza o início da obra/instalação é a Licença de Instalação (LI).' },
      { letter: 'C', explanation: 'Incorreta. A publicidade do EIA/RIMA é exigência constitucional expressa (art. 225, § 1º, IV).' },
      { letter: 'D', explanation: 'Incorreta. Não há direito adquirido perpétuo em licença ambiental precária/sujeita ao poder de polícia (art. 19 CONAMA 237).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 225, § 1º, IV', textSnippet: 'Exigir, na forma da lei, para instalação de obra ou atividade potencialmente causadora de significativa degradação do meio ambiente, estudo prévio de impacto ambiental, a que se dará publicidade.' }
    ],
    professorTip: 'Ordem das Licenças (LP -> LI -> LO): LP = planeja/localiza; LI = autoriza construir/instalar; LO = autoriza ligar e operar!'
  },
  {
    id: 'esp_ext_amb_03',
    exam: 'Concurso MP / Magistratura - Direito Ambiental',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Ambiental',
    topic: 'Competência Ambiental Administrativa e LC nº 140/2011',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um empreendimento localizado em único município causou impacto ambiental estritamente local, licenciado pelo órgão ambiental municipal competente. Posteriormente, um fiscal do IBAMA lavrou outro auto de infração pelo mesmo fato ilícito administrativo, impondo segunda multa ao empreendedor antes de qualquer omissão municipal. Nos termos da Lei Complementar nº 140/2011:`,
    options: [
      { letter: 'A', text: 'Todos os entes federativos devem aplicar multas simultâneas que se somam pelo mesmo fato, observada a competência comum material dos entes federativos para fiscalização e proteção.' },
      { letter: 'B', text: 'Compete ao órgão responsável pelo licenciamento ou autorização lavrar auto de infração ambiental e instaurar processo administrativo, prevalecendo o auto lavrado por órgão detentor da atribuição de licenciamento caso haja atuação concorrente supletiva ou iminente.' },
      { letter: 'C', text: 'Os Municípios não têm competência administrativa para licenciar empreendimentos de impacto local, em consonância com os princípios da prevenção, precaução e vedação ao retrocesso ecológico.' },
      { letter: 'D', text: 'A competência legislativa em matéria ambiental pertence privativamente à União, sendo vedada aos Estados, sujeita ao regime constitucional de bem de uso comum do povo e equidade intergeracional.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 17 da LC 140/2011: compete ao órgão responsável pelo licenciamento lavrar auto de infração (§ 3º: a atuação comum de fiscalização pelos demais entes em caso de iminência de dano ou omissão subsiste, mas o auto lavrado pelo órgão licenciador competente PREVALECE sobre eventuais autos de outros entes pelo mesmo fato, evitando o bis in idem administrativo).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A LC 140/2011 prevê a prevalência do auto do ente licenciador justamente para evitar dupla punição administrativa pelo mesmo fato (art. 17, § 3º).' },
      { letter: 'C', explanation: 'Incorreta. Compete aos Municípios promover o licenciamento ambiental de atividades de impacto local (art. 9º, XIV, a, LC 140/2011).' },
      { letter: 'D', explanation: 'Incorreta. A competência legislativa ambiental é concorrente entre União, Estados e DF (art. 24, VI e VIII, CF/88).' }
    ],
    statuteReferences: [
      { code: 'Lei Complementar 140/2011', article: 'Art. 17, caput e § 3º', textSnippet: 'Nos casos de iminência ou ocorrência de degradação da qualidade ambiental, o ente federativo que tiver conhecimento do fato deverá determinar medidas para evitá-la... prevalecendo o auto de infração ambiental lavrado por órgão que detenha a atribuição de licenciamento ou autorização...' }
    ],
    professorTip: 'LC 140/2011 (Art. 17): Qualquer ente pode fiscalizar na urgência, mas o auto de infração do ÓRGÃO LICENCIADOR PREVALECE!'
  },
  {
    id: 'esp_ext_amb_04',
    exam: 'Simulado FGV / OAB Unificado - Direito Ambiental',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Ambiental',
    topic: 'Unidades de Conservação - Proteção Integral x Uso Sustentável (SNUC - Lei 9.985/2000)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Sobre o Sistema Nacional de Unidades de Conservação (SNUC - Lei nº 9.985/2000), assinale a afirmativa correta acerca das categorias de Unidades de Conservação e de sua desafetação:`,
    options: [
      { letter: 'A', text: 'O Parque Nacional é unidade de uso sustentável, admitindo exploração comercial de madeira, com repercussão autônoma e cumulativa nas esferas administrativa, cível e penal ambiental.' },
      { letter: 'B', text: 'A Área de Proteção Ambiental (apa) é unidade de proteção integral de posse exclusivamente pública, sem necessidade de manifestação técnica do órgão ambiental diante de urgência econômica local. Essa exigência vincula tanto empreendimentos privados quanto obras executadas pelo poder público.' },
      { letter: 'C', text: 'As Unidades de Conservação podem ser criadas por ato do Poder Público (inclusive decreto), mas a desafetação ou redução dos limites de uma unidade de conservação só pode ser feita mediante lei específica.' },
      { letter: 'D', text: 'A Reserva Extrativista é unidade de proteção integral que proíbe a presença de populações tradicionais, com preservação da imprescritibilidade da pretensão voltada à reparação do dano ecológico.' }
    ],
    correctAnswer: 'C',
    justification: `Consoante o art. 22, § 7º, da Lei 9.985/2000 e art. 225, § 1º, III, da CF/88: a criação de uma Unidade de Conservação pode ser feita por decreto ou lei (após estudos técnicos e consulta pública, dispensada consulta na Estação Ecológica e Reserva Biológica), mas a DESAFETAÇÃO ou REDUÇÃO de seus limites exige obrigatoriamente LEI ESPECÍFICA (mesmo se criada por decreto!).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Parque Nacional é de Proteção Integral (art. 8º, III).' },
      { letter: 'B', explanation: 'Incorreta. APA é de Uso Sustentável e é constituída por terras públicas ou privadas (art. 15).' },
      { letter: 'D', explanation: 'Incorreta. Reserva Extrativista é de Uso Sustentável destinada especificamente às populações extrativistas tradicionais (art. 18).' }
    ],
    statuteReferences: [
      { code: 'Lei 9.985/2000 (SNUC)', article: 'Art. 22, § 7º', textSnippet: 'A desafetação ou redução dos limites de uma unidade de conservação só pode ser feita mediante lei específica.' }
    ],
    professorTip: 'SNUC (Lei 9.985/2000): Para CRIAR ou AMPLIAR UC = pode por Decreto! Para REDUZIR ou EXTINGUIR (desafetar) = SÓ POR LEI ESPECÍFICA! Proteção Integral = Es.Re.Pa.Mo.Re (Estação Ecológica, Reserva Biológica, Parque Nacional, Monumento Natural, Refúgio de Vida Silvestre).'
  },

  // ECA (+3)
  {
    id: 'esp_ext_eca_01',
    exam: 'Simulado FGV / OAB Unificado - ECA',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito da Criança e do Adolescente (ECA)',
    topic: 'Ato Infracional e Medidas Socioeducativas - Prazo da Internação (Art. 121 ECA)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Um adolescente de 16 anos praticou ato infracional equiparado a roubo com emprego de arma de fogo e recebeu medida socioeducativa de internação por prazo indeterminado. Considerando o Art. 121 do Estatuto da Criança e do Adolescente (Lei nº 8.069/90):`,
    options: [
      { letter: 'A', text: 'A internação deve ser reavaliada no máximo a cada 6 meses, não podendo exceder 3 anos, sendo compulsória a liberação ao completar 21 anos de idade.' },
      { letter: 'B', text: 'O juiz fixa na sentença um prazo exato e imutável de 5 anos de internação, com garantia de assistência jurídica integral, contraditório e ampla defesa no procedimento.' },
      { letter: 'C', text: 'A internação pode ser aplicada para qualquer ato infracional, inclusive furto simples praticado por adolescente primário, sujeita à revisão periódica obrigatória das medidas protetivas e socioeducativas aplicadas.' },
      { letter: 'D', text: 'A liberação compulsória do socioeducando ocorre aos 18 anos completos em qualquer hipótese, observadas as atribuições próprias entre Conselho Tutelar, Ministério Público e Judiciário.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 121 do ECA dispõe que a medida de internação sujeita-se aos princípios da brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento: não comporta prazo determinado, devendo sua manutenção ser reavaliada mediante decisão fundamentada NO MÁXIMO A CADA 6 MESES (§ 2º); o período máximo não excederá a 3 ANOS (§ 3º); e a liberação será compulsória aos 21 ANOS de idade (§ 5º).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A internação não comporta prazo determinado na sentença e tem teto de 3 anos.' },
      { letter: 'C', explanation: 'Incorreta. Pelo art. 122 do ECA e Súmula 492 STJ, o ato infracional análogo ao tráfico de drogas ou furto simples isolado não autoriza internação por si só — só cabe mediante grave ameaça/violência, reiteração de infrações graves ou descumprimento reiterado e injustificável de medida anterior (internação-sanção de até 3 meses).' },
      { letter: 'D', explanation: 'Incorreta. A liberação compulsória ocorre aos 21 anos (excepcionalidade prevista no art. 2º, parágrafo único, ECA).' }
    ],
    statuteReferences: [
      { code: 'ECA (Lei 8.069/90)', article: 'Art. 121, §§ 2º, 3º e 5º', textSnippet: 'Em nenhuma hipótese o período máximo de internação excederá a três anos. (...) A liberação será compulsória aos vinte e um anos de idade.' }
    ],
    professorTip: 'Números mágicos da Internação no ECA (Art. 121): Reavaliação a cada 6 MESES; Prazo máximo de 3 ANOS; Liberação compulsória aos 21 ANOS! Internação-sanção (descumpriu medida anterior) = máximo 3 MESES!'
  },
  {
    id: 'esp_ext_eca_02',
    exam: 'Simulado FGV / OAB Unificado - ECA',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito da Criança e do Adolescente (ECA)',
    topic: 'Adoção - Requisitos Etários e Irrevogabilidade (Arts. 39 a 52 ECA)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Marina, com 24 anos de idade e solteira, pretende adotar uma criança de 10 anos de idade com quem não possui parentesco prévio. Conforme o Estatuto da Criança e do Adolescente:`,
    options: [
      { letter: 'A', text: 'Somente casais casados ou em união estável podem adotar segundo o ECA, sujeita à revisão periódica obrigatória das medidas protetivas e socioeducativas aplicadas.' },
      { letter: 'B', text: 'Marina não preenche o requisito legal de diferença etária mínima, pois o adotante há de ser pelo menos dezesseis anos mais velho do que o adotando.' },
      { letter: 'C', text: 'Os avós podem adotar livremente seus netos em qualquer circunstância, considerada a condição peculiar de pessoa em desenvolvimento e o convívio familiar protegido.' },
      { letter: 'D', text: 'A adoção pode ser realizada diretamente por procuração lavrada em cartório, com prioridade absoluta de atendimento e oitiva regular na instância protetiva ou judicial.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 42 do ECA: podem adotar os maiores de 18 anos, independentemente do estado civil (solteiros podem adotar!); contudo, pelo § 3º do art. 42, o adotante há de ser, pelo menos, 16 (dezesseis) anos mais velho do que o adotando. Como Marina tem 24 anos e a criança tem 10 anos (diferença de 14 anos), falta o requisito de 16 anos de diferença. Além disso, é vedada adoção por ascendentes e irmãos (art. 42, § 1º) e por procuração (art. 39, § 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Qualquer maior de 18 anos pode adotar independentemente de estado civil.' },
      { letter: 'C', explanation: 'Incorreta. O art. 42, § 1º do ECA proíbe expressamente a adoção por ascendentes e irmãos do adotando.' },
      { letter: 'D', explanation: 'Incorreta. É expressamente vedada a adoção por procuração (art. 39, § 2º).' }
    ],
    statuteReferences: [
      { code: 'ECA (Lei 8.069/90)', article: 'Art. 42, caput, §§ 1º e 3º', textSnippet: 'O adotante há de ser, pelo menos, dezesseis anos mais velho do que o adotando.' }
    ],
    professorTip: 'Adoção no ECA: Idade mínima do adotante = 18 anos; Diferença mínima entre adotante e adotando = 16 anos; Se adotando tem ≥ 12 anos = precisa do CONSENTIMENTO dele! Avós e irmãos NÃO podem adotar; PROIBIDO por procuração; e é IRREVOGÁVEL!'
  },
  {
    id: 'esp_ext_eca_03',
    exam: 'Prova Semestral Faculdade de Direito - ECA',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito da Criança e do Adolescente (ECA)',
    topic: 'Viagem de Criança e Adolescente ao Exterior e no Território Nacional (Arts. 83 a 85 ECA)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Um adolescente de 15 anos pretende viajar sozinho de avião dentro do território nacional (de São Paulo para Salvador) para visitar amigos, sem acompanhantes e sem autorização judicial. Nos termos do Art. 83 do ECA (alterado pela Lei nº 13.812/2019):`,
    options: [
      { letter: 'A', text: 'A viagem é permitida livremente sem autorização judicial porque apenas menores de 12 anos dependem de autorização para viagens nacionais. A medida deve respeitar o princípio da proporcionalidade e a condição de pessoa em formação.' },
      { letter: 'B', text: 'Nenhuma criança ou adolescente menor de 16 anos poderá viajar para fora da comarca onde reside desacompanhado dos pais ou dos responsáveis sem expressa autorização judicial, salvo as exceções legais.' },
      { letter: 'C', text: 'A viagem ao exterior dispensa autorização judicial quando realizada com apenas um dos genitores sem anuência do outro, sujeita à revisão periódica obrigatória das medidas protetivas e socioeducativas aplicadas.' },
      { letter: 'D', text: 'A autorização judicial é exigida inclusive para viajar com os próprios pais para comarca contígua na mesma região metropolitana, com garantia de assistência jurídica integral, contraditório e ampla defesa no procedimento.' }
    ],
    correctAnswer: 'B',
    justification: `A Lei 13.812/2019 alterou o art. 83 do ECA elevando a faixa etária de 12 para MENOR DE 16 ANOS! Hoje, nenhuma criança ou adolescente menor de 16 anos pode viajar para fora da comarca onde reside desacompanhado dos pais/responsáveis sem expressa autorização judicial (salvo comarca contígua no mesmo Estado/região metropolitana ou acompanhado de parente até 3º grau ou maior autorizado expressamente pelos pais). Para o exterior (art. 84), se viajar com 1 dos pais, precisa de autorização do outro com firma reconhecida.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A antiga idade de 12 anos foi alterada para 16 anos pela Lei 13.812/2019.' },
      { letter: 'C', explanation: 'Incorreta. Viagem ao exterior com apenas um dos pais exige autorização expressa do outro genitor com firma reconhecida (art. 84, I).' },
      { letter: 'D', explanation: 'Incorreta. Comarca contígua ou na mesma região metropolitana e viagem com os pais dispensam autorização (art. 83, § 1º).' }
    ],
    statuteReferences: [
      { code: 'ECA (Lei 8.069/90)', article: 'Art. 83 e Art. 84', textSnippet: 'Nenhuma criança ou adolescente menor de 16 (dezesseis) anos poderá viajar para fora da comarca onde reside desacompanhado dos pais ou dos responsáveis sem expressa autorização judicial.' }
    ],
    professorTip: 'Atualização do ECA (Art. 83): Viagem NACIONAL desacompanhado exige autorização até MENOR DE 16 ANOS (quem tem 16 ou 17 anos viaja sozinho dentro do Brasil!). Viagem INTERNACIONAL = regra de autorização vale para todos menores de 18 anos!'
  },

  // DIREITO INTERNACIONAL (+3)
  {
    id: 'esp_ext_int_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Internacional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Internacional',
    topic: 'Homologação de Sentença Estrangeira no Brasil (STJ e CPC/15)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um cidadão residente no Brasil foi condenado em ação cível de cobrança por tribunal francês em decisão definitiva. Para que essa sentença judicial estrangeira possa ser executada no território brasileiro, exige-se prévia homologação (juízo de delibação), cuja competência pertence ao:`,
    options: [
      { letter: 'A', text: 'Supremo Tribunal Federal (STF), sendo executada na Justiça Estadual, em harmonia com os costumes internacionais consolidados e os princípios gerais de direito.' },
      { letter: 'B', text: 'Superior Tribunal de Justiça (STJ), competindo a posterior execução aos Juízes Federais; dispensando-se a homologação apenas para sentença estrangeira de divórcio consensual simples ou puro.' },
      { letter: 'C', text: 'Tribunal Regional Federal da 1ª Região, sujeita à jurisdição contenciosa consensual e às prerrogativas diplomáticas reconhecidas.' },
      { letter: 'D', text: 'Ministério da Justiça, mediante exequatur administrativo, com preservação das garantias asseguradas pelo estatuto migratório aos residentes estrangeiros. Essa solução disciplina os conflitos de leis no espaço e a cooperação interestatal.' }
    ],
    correctAnswer: 'B',
    justification: `Desde a EC 45/2004, compete ao STJ processar e julgar a homologação de sentenças estrangeiras e a concessão de exequatur às cartas rogatórias (art. 105, I, i, CF/88). Uma vez homologada pelo STJ, o cumprimento/execução da sentença estrangeira compete ao Juiz Federal de primeira instância (art. 109, X, CF/88). Exceção: sentença estrangeira de divórcio consensual simples ou puro produz efeitos no Brasil independentemente de homologação pelo STJ (art. 961, § 5º, CPC).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Desde a EC 45/2004 a competência foi transferida do STF para o STJ, e a execução é da Justiça Federal.' },
      { letter: 'C', explanation: 'Incorreta. Não pertence ao TRF.' },
      { letter: 'D', explanation: 'Incorreta. Exequatur e homologação são atos jurisdicionais do STJ.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988 e CPC', article: 'Art. 105, I, i CF e Art. 961, § 5º CPC', textSnippet: 'A sentença estrangeira de divórcio consensual produz efeitos no Brasil, independentemente de homologação pelo Superior Tribunal de Justiça.' }
    ],
    professorTip: 'Sentença Estrangeira: Homologa no STJ -> Executa na Justiça FEDERAL! Exceção famosa: Divórcio consensual SIMPLES/PURO NÃO precisa homologar no STJ (vai direto no cartório)!'
  },
  {
    id: 'esp_ext_int_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Internacional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Internacional',
    topic: 'Condição Jurídica do Migrante, Expulsão, Deportação e Extradição (Lei 13.445/2017)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um cidadão estrangeiro sem visto ou regularização migratória é encontrado trabalhando em situação irregular no Brasil, sem ter cometido crime nem estar sendo procurado por justiça estrangeira. Consoante a Lei de Migração (Lei nº 13.445/2017), a medida de retirada compulsória eventualmente aplicável após notificação para regularização em prazo mínimo de 60 dias denomina-se:`,
    options: [
      { letter: 'A', text: 'Extradição.' },
      { letter: 'B', text: 'Deportação.' },
      { letter: 'C', text: 'Expulsão.' },
      { letter: 'D', text: 'Repatriação.' }
    ],
    correctAnswer: 'B',
    justification: `Na Lei de Migração (Lei 13.445/2017): (i) Repatriação (art. 49) = devolução na fronteira/aeroporto de quem foi impedido de entrar; (ii) Deportação (art. 50) = retirada compulsória de quem está em situação migratória IRREGULAR no território nacional (após notificação com prazo mínimo de 60 dias para regularizar ou sair voluntariamente); (iii) Expulsão (art. 54) = retirada por condenação criminal com trânsito em julgado; (iv) Extradição (art. 81) = entrega a outro Estado para responder a processo penal ou cumprir pena (julgada pelo STF; brasileiro nato jamais é extraditado).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Extradição pressupõe pedido de Estado estrangeiro por crime cometido fora do Brasil.' },
      { letter: 'C', explanation: 'Incorreta. Expulsão pressupõe sentença condenatória transitada em julgado por crime praticado no Brasil.' },
      { letter: 'D', explanation: 'Incorreta. Repatriação ocorre no ponto de entrada (impedimento de ingresso), não após o migrante já estar residindo internamente.' }
    ],
    statuteReferences: [
      { code: 'Lei 13.445/2017 (Lei de Migração)', article: 'Arts. 49, 50, 54 e 81', textSnippet: 'A deportação é medida decorrente de procedimento administrativo que consiste na retirada compulsória de pessoa que se encontre em situação migratória irregular em território nacional.' }
    ],
    professorTip: 'As 4 medidas de retirada de estrangeiro: Barrado no aeroporto = REPATRIAÇÃO; Entrou e ficou irregular = DEPORTAÇÃO; Cometeu crime no Brasil = EXPULSÃO; Cometeu crime fora e outro país pediu = EXTRADIÇÃO (STF)!'
  },
  {
    id: 'esp_ext_int_03',
    exam: 'Simulado FGV / OAB Unificado - Direito Internacional',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Internacional',
    topic: 'Direito Internacional Privado - Lei de Introdução às Normas do Direito Brasileiro (LINDB)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Cidadão italiano domiciliado há vinte anos na cidade de São Paulo/SP falece no Brasil, deixando bens imóveis situados no Brasil e uma conta bancária no Brasil, sendo casado pelo regime legal italiano. De acordo com o Art. 10 da LINDB (Decreto-Lei nº 4.657/42) e Art. 5º, XXXI, da CF/88:`,
    options: [
      { letter: 'A', text: 'A sucessão por morte obedece sempre à lei da nacionalidade do falecido (lei italiana), com preservação das garantias asseguradas pelo estatuto migratório aos residentes estrangeiros.' },
      { letter: 'B', text: 'A sucessão por morte ou por ausência obedece à lei do país em que domiciliado o defunto ou o desaparecido, qualquer que seja a natureza e a situação dos bens, ressalvada a aplicação da lei mais favorável ao cônjuge ou filhos brasileiros.' },
      { letter: 'C', text: 'Os contratos entre ausentes reputam-se constituídos no lugar da aceitação da proposta, observadas as regras de conexão aplicáveis e os tratados multilaterais vigentes na matéria. Essa solução disciplina os conflitos de leis no espaço e a cooperação interestatal.' },
      { letter: 'D', text: 'As obrigações qualificam-se pela lei do domicílio do devedor em qualquer país, sujeita à jurisdição contenciosa consensual e às prerrogativas diplomáticas reconhecidas.' }
    ],
    correctAnswer: 'B',
    justification: `O Brasil adota o critério da LEX DOMICILII (Art. 10 da LINDB) tanto para o estatuto pessoal/família (art. 7º) quanto para a sucessão por morte: aplica-se a lei do país onde era DOMICILIADO o defunto (salvo quanto aos bens de estrangeiros situados no Brasil, caso em que se aplica a lei brasileira em benefício do cônjuge ou dos filhos brasileiros se não lhes for mais favorável a lei pessoal do de cujus — art. 5º, XXXI, CF e art. 10, § 1º). Já as obrigações regem-se pela lei do país em que se constituírem (art. 9º) e entre ausentes reputa-se constituída no lugar de residência do PROPONENTE (art. 9º, § 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A LINDB adota o critério do DOMICÍLIO (lex domicilii), não da nacionalidade.' },
      { letter: 'C', explanation: 'Incorreta. Pelo art. 9º, § 2º da LINDB, a obrigação resultante do contrato reputa-se constituída no lugar em que residir o PROPONENTE.' },
      { letter: 'D', explanation: 'Incorreta. Qualificam-se e regem-se pela lei do país onde se constituírem (lex loci celebrationis — art. 9º LINDB).' }
    ],
    statuteReferences: [
      { code: 'LINDB (Decreto-Lei 4.657/42)', article: 'Arts. 7º, 9º e 10', textSnippet: 'A sucessão por morte ou por ausência obedece à lei do país em que domiciliado o defunto ou o desaparecido, qualquer que seja a natureza e a situação dos bens.' }
    ],
    professorTip: 'LINDB na OAB: Pessoa, Família e Sucessão = Lei do DOMICÍLIO! Contrato/Obrigação = Lei do local de constituição (entre ausentes = residência do PROPONENTE)! Bens = Lei de onde estão situados!'
  },

  // DIREITO ELEITORAL (+4)
  {
    id: 'esp_ext_eleit_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Eleitoral',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Eleitoral',
    topic: 'Princípio da Anterioridade Eleitoral / Anualidade (Art. 16 CF/88)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Em março de um ano eleitoral (a sete meses da eleição marcada para outubro), o Congresso Nacional promulga lei alterando as regras de cálculo de distribuição das sobras partidárias e os prazos de filiação partidária. Considerando o Art. 16 da Constituição Federal de 1988:`,
    options: [
      { letter: 'A', text: 'A lei entra em vigor imediatamente e já se aplica às eleições de outubro do mesmo ano, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder.' },
      { letter: 'B', text: 'A lei que alterar o processo eleitoral entrará em vigor na data de sua publicação, não se aplicando à eleição que ocorra até um ano da data de sua vigência.' },
      { letter: 'C', text: 'A anterioridade eleitoral exige apenas 90 dias antes do pleito, com convocação imediata de eleições suplementares antes do trânsito em julgado da decisão. Essa regra garante a paridade de armas e a regularidade do processo democrático.' },
      { letter: 'D', text: 'O princípio da anualidade eleitoral aplica-se apenas por meio de emenda constitucional, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 16 da CF/88 consagra o princípio da anualidade/anterioridade eleitoral: "A lei que alterar o processo eleitoral entrará em vigor na data de sua publicação, não se aplicando à eleição que ocorra até um ano da data de sua vigência". Atenção: a lei ENTRA EM VIGOR na publicação, mas só tem EFICÁCIA/APLICABILIDADE para eleições realizadas após 1 ano!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não se aplica a eleições que ocorram em menos de 1 ano da vigência.' },
      { letter: 'C', explanation: 'Incorreta. O prazo constitucional eleitoral é de 1 ano (90 dias é noventena tributária).' },
      { letter: 'D', explanation: 'Incorreta. Vale para leis eleitorais e até emendas constitucionais que alterem o processo eleitoral (STF).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 16', textSnippet: 'A lei que alterar o processo eleitoral entrará em vigor na data de sua publicação, não se aplicando à eleição que ocorra até um ano da data de sua vigência.' }
    ],
    professorTip: 'Art. 16 CF/88 (Anterioridade Eleitoral): Mudou regra do processo eleitoral? Entra em vigor na publicação, mas SÓ vale para eleição que ocorrer DEPOIS DE 1 ANO!'
  },
  {
    id: 'esp_ext_eleit_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Eleitoral',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Eleitoral',
    topic: 'Condições de Elegibilidade e Inelegibilidade Reflexa (Art. 14 CF/88)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Mariana é cônjuge do atual Governador do Estado, que se encontra no primeiro mandato e pretende concorrer à reeleição no próximo pleito estadual. Mariana nunca ocupou cargo eletivo e deseja se candidatar pela primeira vez ao cargo de Deputada Estadual pelo mesmo Estado. Considerando o Art. 14, § 7º, da Constituição Federal e a Súmula Vinculante 18 do STF:`,
    options: [
      { letter: 'A', text: 'Mariana é plenamente elegível para Deputada Estadual porque a inelegibilidade reflexa alcança somente cargos do Poder Executivo. A inobservância do preceito submete o candidato e a agremiação às sanções da Justiça Eleitoral.' },
      { letter: 'B', text: 'Mariana é inelegível no território de jurisdição do titular (o Estado), pois cônjuge e parentes até o segundo grau do chefe do Executivo são inelegíveis no respectivo território, salvo se já titular de mandato eletivo e candidato à reeleição.' },
      { letter: 'C', text: 'Caso o Governador renuncie 3 meses antes da eleição, Mariana torna-se elegível, sujeita à fiscalização contábil das contas de campanha e ao controle de abuso de poder. Essa regra garante a paridade de armas e a regularidade do processo democrático.' },
      { letter: 'D', text: 'A dissolução da sociedade conjugal no curso do mandato afasta imediatamente a inelegibilidade reflexa, com reflexo imediato sobre o cálculo do quociente eleitoral e a diplomação dos eleitos.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 14, § 7º, da CF/88 prevê a inelegibilidade reflexa: são inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes até o 2º grau (ou por adoção) do Presidente, Governador ou Prefeito (para qualquer cargo — executivo ou legislativo — naquela circunscrição!), SALVO se já titular de mandato eletivo e candidato à reeleição. Para tornar Mariana elegível à 1ª candidatura, o Governador teria que renunciar ao menos 6 meses antes do pleito (art. 14, § 6º) — e pela SV 18, a dissolução do casamento no curso do mandato NÃO afasta a inelegibilidade!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A inelegibilidade reflexa abrange qualquer cargo eletivo no território de jurisdição do chefe do Executivo.' },
      { letter: 'C', explanation: 'Incorreta. A desincompatibilização por renúncia exige pelo menos 6 meses antes do pleito.' },
      { letter: 'D', explanation: 'Incorreta. A Súmula Vinculante nº 18 do STF diz exatamente o oposto: a dissolução da sociedade conjugal no curso do mandato NÃO afasta a inelegibilidade!' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 14, §§ 6º e 7º', textSnippet: 'São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o segundo grau ou por adoção, do Presidente da República, de Governador de Estado ou Território, do Distrito Federal, de Prefeito ou de quem os haja substituído dentro dos seis meses anteriores ao pleito, salvo se já titular de mandato eletivo e candidato à reeleição.' }
    ],
    jurisprudence: 'Súmula Vinculante nº 18 do STF.',
    professorTip: 'Inelegibilidade Reflexa (Art. 14, § 7º CF + SV 18): Parentes até 2º grau / cônjuge do Chefe do Executivo NÃO podem se candidatar no mesmo território pela 1ª vez! Divórcio no curso do mandato NÃO salva (SV 18)!'
  },
  {
    id: 'esp_ext_eleit_03',
    exam: 'Simulado FGV / OAB Unificado - Direito Eleitoral',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Eleitoral',
    topic: 'Alistamento Eleitoral, Prazos de Filiação e Domicílio Eleitoral (Lei 9.504/97)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Um jovem de 22 anos pretende concorrer pela primeira vez ao cargo de Vereador nas próximas eleições municipais. De acordo com a Constituição Federal e a Lei das Eleições (Lei nº 9.504/97), ele deve possuir domicílio eleitoral na respectiva circunscrição e estar com sua filiação deferida pelo partido político no prazo mínimo de:`,
    options: [
      { letter: 'A', text: '1 ano antes das eleições.' },
      { letter: 'B', text: '6 meses antes das eleições.' },
      { letter: 'C', text: '3 meses antes das eleições.' },
      { letter: 'D', text: '45 dias antes das eleições.' }
    ],
    correctAnswer: 'B',
    justification: `Tanto a filiação partidária quanto o domicílio eleitoral na respectiva circunscrição devem estar satisfeitos pelo prazo mínimo de 6 (seis) meses antes da data das eleições (art. 9º da Lei 9.504/97). Além disso, a idade mínima para Vereador é de 18 anos (aferida na data da posse, salvo para Vereador, cuja idade mínima de 18 anos é verificada na data-limite para o pedido de registro — art. 11, § 2º, Lei 9.504/97).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O antigo prazo de 1 ano foi reduzido para 6 meses pela Minirreforma Eleitoral (Lei 13.165/2015 e Lei 13.488/2017).' },
      { letter: 'C', explanation: 'Incorreta. O prazo legal é de 6 meses.' },
      { letter: 'D', explanation: 'Incorreta. Não há prazo de 45 dias.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.504/97', article: 'Art. 9º', textSnippet: 'Para concorrer às eleições, o candidato deverá possuir domicílio eleitoral na respectiva circunscrição pelo prazo de seis meses e estar com a filiação deferida pelo partido no mesmo prazo.' }
    ],
    professorTip: 'Filiação + Domicílio Eleitoral = 6 MESES antes da eleição! Idades mínimas (35-30-21-18): 35 (Presidente/Vice/Senador); 30 (Governador/Vice); 21 (Deputados, Prefeito, Juiz de Paz); 18 (Vereador — única aferida na data do registro!).'
  },
  {
    id: 'esp_ext_eleit_04',
    exam: 'Concurso TRE / Eleitoral - Direito Eleitoral',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Eleitoral',
    topic: 'Ações Eleitorais - AIJE x AIME x RCED',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Após a diplomação dos eleitos em pleito municipal, um partido político descobre provas robustas de abuso do poder econômico, corrupção e fraude ocorridos durante a campanha e pretende impugnar o mandato eletivo do prefeito diplomado. A ação constitucional prevista no Art. 14, §§ 10 e 11, da CF/88, que tramita em segredo de justiça e deve ser proposta no prazo decadencial de 15 dias contados da diplomação, é a:`,
    options: [
      { letter: 'A', text: 'Ação de Investigação Judicial Eleitoral (aije).' },
      { letter: 'B', text: 'Ação de Impugnação de Mandato Eletivo (aime).' },
      { letter: 'C', text: 'Ação de Impugnação de Registro de Candidatura (airc).' },
      { letter: 'D', text: 'Recurso Contra Expedição de Diploma (rced).' }
    ],
    correctAnswer: 'B',
    justification: `A AIME (Art. 14, §§ 10 e 11, da CF/88) cabe após a diplomação, no prazo decadencial de 15 dias contados da diplomação, instruída com provas de abuso do poder econômico, corrupção ou fraude, tramitando em SEGREDO DE JUSTIÇA (julgamento público). Já a AIJE (art. 22 da LC 64/90) pode ser proposta desde o registro até a diplomação; a AIRC (art. 3º LC 64/90) em 5 dias da publicação do edital do pedido de registro; e o RCED (art. 262 CE) em 3 dias da diplomação.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A AIJE só pode ser ajuizada até a data da diplomação e não tem previsão constitucional específica de tramitação em segredo de justiça.' },
      { letter: 'C', explanation: 'Incorreta. A AIRC impugna o registro antes da eleição (prazo de 5 dias do edital).' },
      { letter: 'D', explanation: 'Incorreta. O RCED tem prazo de 3 dias da diplomação e trata de inelegibilidade superveniente/constitucional ou falta de condição de elegibilidade.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 14, §§ 10 e 11', textSnippet: 'O mandato eletivo poderá ser impugnado ante a Justiça Eleitoral no prazo de quinze dias contados da diplomação, instruída a ação com provas de abuso do poder econômico, corrupção ou fraude.' }
    ],
    professorTip: 'Linha do tempo das Ações Eleitorais: AIRC (5 dias do edital do registro) -> AIJE (até a diplomação) -> RCED (3 dias da diplomação) -> AIME (15 dias da diplomação, em SEGREDO de justiça)!'
  },

  // DIREITO PREVIDENCIÁRIO (+4)
  {
    id: 'esp_ext_prev_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Previdenciário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Previdenciário',
    topic: 'Segurados Obrigatórios e Facultativos do RGPS e Período de Graça (Lei 8.213/91)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `João trabalhou como empregado de carteira assinada ininterruptamente por 12 anos, pagando todas as contribuições ao INSS, até ser demitido sem justa causa. Desempregado, recebeu seguro-desemprego e permaneceu em situação de desemprego involuntário comprovado no órgão do Ministério do Trabalho, sem contribuir como facultativo. Conforme o Art. 15 da Lei nº 8.213/91, por quanto tempo máximo João manterá a qualidade de segurado (período de graça) sem contribuir?`,
    options: [
      { letter: 'A', text: '12 meses em qualquer hipótese, com repercussão direta sobre o cálculo do salário de benefício e a data de início do pagamento.' },
      { letter: 'B', text: 'Até 36 meses (12 meses iniciais + 12 meses por ter mais de 120 contribuições mensais sem interrupção que gere perda + 12 meses por comprovar desemprego involuntário).' },
      { letter: 'C', text: '6 meses, por ser o prazo máximo do seguro-desemprego, observado o equilíbrio financeiro e atuarial exigido para a sustentabilidade do sistema. Essa sistemática assegura a sustentabilidade financeira do regime protetivo correspondente.' },
      { letter: 'D', text: '24 meses intransponíveis, vedada cumulação dos acréscimos, em razão do princípio da prévia fonte de custeio total e do caráter contributivo obrigatório.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 15, II e §§ 1º e 2º, da Lei 8.213/91: quem deixa de exercer atividade remunerada mantém a qualidade de segurado por 12 meses; esse prazo é prorrogado para até 24 meses se já tiver pago mais de 120 contribuições mensais sem perda da qualidade (§ 1º); e acresce-se de MAIS 12 meses para o segurado desempregado, desde que comprovada a situação de desemprego (§ 2º / Tema 239 TNU / STJ) — totalizando até 36 meses! Já o segurado facultativo tem apenas 6 meses de período de graça (inciso VI).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Ignora as duas prorrogações legais cumulativas de 12 meses dos §§ 1º e 2º.' },
      { letter: 'C', explanation: 'Incorreta. 6 meses é o prazo do segurado facultativo (art. 15, VI).' },
      { letter: 'D', explanation: 'Incorreta. Os acréscimos dos §§ 1º e 2º são cumuláveis até 36 meses.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.213/91', article: 'Art. 15, II, §§ 1º e 2º', textSnippet: 'Mantém a qualidade de segurado, independentemente de contribuições: (...) II - até 12 (doze) meses após a cessação das contribuições, o segurado que deixar de exercer atividade remunerada abrangida pela Previdência Social...' }
    ],
    professorTip: 'Período de Graça (Art. 15 Lei 8.213/91): Facultativo = 6 meses; Obrigatório = 12 meses (+12 se tiver >120 contribuições; +12 se desemprego involuntário = até 36 meses!).'
  },
  {
    id: 'esp_ext_prev_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Previdenciário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Previdenciário',
    topic: 'Carência nos Benefícios Previdenciários (Arts. 25 e 26 Lei 8.213/91)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Sobre o número mínimo de contribuições mensais exigidas a título de carência no Regime Geral de Previdência Social (Lei nº 8.213/91), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A pensão por morte e o auxílio-acidente exigem carência mínima de 12 contribuições mensais, observado o equilíbrio financeiro e atuarial exigido para a sustentabilidade do sistema.' },
      { letter: 'B', text: 'Independem de carência a pensão por morte, o salário-família, o auxílio-acidente e o auxílio por incapacidade temporária decorrente de acidente de qualquer natureza ou doença grave especificada em lista.' },
      { letter: 'C', text: 'O salário-maternidade da segurada empregada exige 10 contribuições mensais de carência, com acumulação integral e irrestrita das prestações sem redução proporcional de valor. Essa sistemática assegura a sustentabilidade financeira do regime protetivo correspondente.' },
      { letter: 'D', text: 'O auxílio-doença comum (incapacidade temporária não acidentária) exige 24 contribuições mensais, com repercussão direta sobre o cálculo do salário de benefício e a data de início do pagamento.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 26 da Lei 8.213/91 enumera os benefícios que INDEPENDEM DE CARÊNCIA: I - pensão por morte, salário-família e auxílio-acidente (além do auxílio-reclusão que passou a exigir 24 meses pela Lei 13.846/2019!); II - auxílio-doença e aposentadoria por invalidez nos casos de acidente de qualquer natureza ou doença profissional/do trabalho ou lista grave do MS/MTPS; III - salário-maternidade para empregada, trabalhadora avulsa e empregada doméstica (10 meses exige-se apenas para contribuinte individual, facultativa e segurada especial).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Pensão por morte (atenção: tem requisito de duração para cônjuge de 18 contribuições para durar mais de 4 meses, mas NÃO tem carência inicial) e auxílio-acidente independem de carência.' },
      { letter: 'C', explanation: 'Incorreta. A empregada, doméstica e avulsa são isentas de carência para salário-maternidade (STF inclusive declarou inconstitucional exigir 10 meses na ADI 2110 até para autônomas!).' },
      { letter: 'D', explanation: 'Incorreta. A carência comum do auxílio por incapacidade temporária e permanente é de 12 contribuições mensais.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.213/91', article: 'Art. 25 e Art. 26', textSnippet: 'Independe de carência a concessão das seguintes prestações: I - pensão por morte, salário-família e auxílio-acidente...' }
    ],
    professorTip: 'Tabela de Carência (Arts. 25 e 26): 0 meses = Pensão por morte, Auxílio-acidente, Salário-família, Acidente/Doença grave; 12 meses = Auxílio-doença/Invalidez comuns; 24 meses = Auxílio-reclusão; 180 meses = Aposentadorias programadas!'
  },
  {
    id: 'esp_ext_prev_03',
    exam: 'Simulado FGV / OAB Unificado - Direito Previdenciário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Previdenciário',
    topic: 'Seguridade Social - Princípios Constitucionais (Art. 194 e Art. 195 CF/88)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Com relação à organização constitucional da Seguridade Social (Saúde, Previdência Social e Assistência Social), prevista nos Arts. 194 a 204 da Constituição Federal, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A Saúde, a Previdência Social e a Assistência Social têm caráter contributivo e filiação obrigatória, com livre aproveitamento ou desaposentação sem sujeição às regras constitucionais de transição. Essa sistemática assegura a sustentabilidade financeira do regime protetivo correspondente.' },
      { letter: 'B', text: 'Nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total, e as contribuições sociais somente podem ser exigidas após decorridos 90 dias da publicação da lei.' },
      { letter: 'C', text: 'O Benefício de Prestação Continuada (BPC/LOAS) exige no mínimo 15 anos de contribuição ao INSS e gera direito a 13º salário, com preservação da irredutibilidade do valor nominal dos benefícios mantidos pelo regime.' },
      { letter: 'D', text: 'A seguridade social é financiada exclusivamente pelos trabalhadores e empregadores, sem participação do poder público, com acumulação integral e irrestrita das prestações sem redução proporcional de valor.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 195, § 5º, da CF/88 consagra o princípio da preexistência do custeio (regra da contrapartida): nenhum benefício pode ser criado, majorado ou estendido sem a correspondente fonte de custeio total. E pelo § 6º, as contribuições sociais da seguridade submetem-se exclusivamente à anterioridade nonagesimal (90 dias), não à anual. Apenas a Previdência tem caráter contributivo; Saúde e Assistência independem de contribuição.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Apenas a Previdência Social tem caráter contributivo (art. 201).' },
      { letter: 'C', explanation: 'Incorreta. O BPC/LOAS (art. 203, V) é benefício assistencial de 1 salário mínimo a idoso ≥ 65 anos ou pessoa com deficiência de baixa renda, INDEPENDE de contribuição e NÃO paga 13º salário nem gera pensão por morte.' },
      { letter: 'D', explanation: 'Incorreta. É financiada por toda a sociedade, de forma direta e indireta, inclusive mediante recursos dos orçamentos dos entes federativos (art. 195, caput).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 195, §§ 5º e 6º', textSnippet: 'Nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total.' }
    ],
    professorTip: 'Tripé da Seguridade: Saúde (para todos), Assistência Social (para quem precisar — ex. BPC/LOAS sem 13º e sem contribuição), Previdência (só para quem contribuir)!'
  },
  {
    id: 'esp_ext_prev_04',
    exam: 'Concurso Procuradoria / INSS - Direito Previdenciário',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Previdenciário',
    topic: 'Dependentes no RGPS e Presunção de Dependência Econômica (Art. 16 Lei 8.213/91)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um segurado faleceu deixando: sua companheira com quem vivia em união estável, um filho menor de 16 anos e sua mãe idosa que dele dependia economicamente. Com base nas classes de dependentes do Art. 16 da Lei nº 8.213/91:`,
    options: [
      { letter: 'A', text: 'A mãe e a companheira concorrem em igualdade de condições no rateio da pensão por morte, sujeita às regras de filiação obrigatória ou facultativa e aos prazos decadenciais próprios.' },
      { letter: 'B', text: 'A existência de dependentes de classe anterior exclui do direito às prestações os das classes seguintes; assim, a companheira e o filho menor recebem a pensão, excluindo a mãe (Classe 2).' },
      { letter: 'C', text: 'A dependência econômica do cônjuge ou companheiro deve ser comprovada documentalmente, não sendo presumida, com perda da qualidade de segurado após o esgotamento integral do período de graça legal.' },
      { letter: 'D', text: 'O irmão maior de 21 anos não inválido é dependente de primeira classe, sem cômputo de tempo fictício nem possibilidade de acumulação indevida vedada em lei.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 16 da Lei 8.213/91 divide os dependentes em 3 classes preferenciais: Classe 1 (cônjuge, companheiro e filho < 21 anos ou inválido/deficiente) — cuja dependência econômica é PRESUMIDA (§ 4º); Classe 2 (pais — dependência comprovada); Classe 3 (irmão < 21 ou inválido/deficiente — dependência comprovada). Pelo § 1º, a existência de dependente de qualquer das classes exclui do direito às prestações os das classes seguintes!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Classe 1 exclui integralmente Classe 2 e Classe 3.' },
      { letter: 'C', explanation: 'Incorreta. A dependência econômica das pessoas indicadas no inciso I (Classe 1) é presumida (art. 16, § 4º).' },
      { letter: 'D', explanation: 'Incorreta. Irmão < 21 ou inválido/deficiente integra a Classe 3.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.213/91', article: 'Art. 16, §§ 1º e 4º', textSnippet: 'A existência de dependente de qualquer das classes deste artigo exclui do direito às prestações os das classes seguintes. (...) A dependência econômica das pessoas indicadas no inciso I é presumida e a das demais deve ser comprovada.' }
    ],
    professorTip: 'Classes de Dependentes (Art. 16): Classe 1 (Cônjuge/Companheiro/Filhos) -> Classe 2 (Pais) -> Classe 3 (Irmãos). Só Classe 1 tem dependência PRESUMIDA, e Classe 1 exclui Classe 2!'
  },

  // DIREITO FINANCEIRO (+4)
  {
    id: 'esp_ext_fin_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Financeiro',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Financeiro',
    topic: 'Leis Orçamentárias - PPA, LDO e LOA (Art. 165 CF/88)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Sobre o sistema orçamentário brasileiro disciplinado no Art. 165 da Constituição Federal (PPA, LDO e LOA), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A Lei Orçamentária Anual (LOA) pode conter dispositivo autorizando a criação de cargos públicos ou alterando alíquota de tributo, sem exigência de estimativa de impacto financeiro e compensação prévia para benefício fiscal.' },
      { letter: 'B', text: 'As leis orçamentárias (PPA, LDO e LOA) são de iniciativa privativa do Poder Executivo, cabendo à LDO compreender as metas e prioridades da administração pública federal, estabelecer as diretrizes de política fiscal e orientar a elaboração da LOA.' },
      { letter: 'C', text: 'O Plano Plurianual (PPA) tem vigência idêntica ao mandato do Presidente da República, iniciando-se em 1º de janeiro do primeiro ano de mandato, com observância estrita dos limites de despesa com pessoal e equilíbrio das contas públicas.' },
      { letter: 'D', text: 'É permitida a vinculação irrestrita de receita de impostos a qualquer órgão ou despesa pública, com abertura direta de créditos extraordinários para custeio ordinário permanente de pessoal.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 165 da CF/88: leis orçamentárias (PPA, LDO, LOA) têm iniciativa privativa do Chefe do Executivo. A LDO define metas, prioridades, diretrizes fiscais e orienta a LOA (§ 2º). Pelo princípio da exclusividade (art. 165, § 8º), a LOA não conterá dispositivo estranho à previsão da receita e à fixação da despesa (salvo autorização para créditos suplementares e operações de crédito). O PPA vigora do 2º ano do mandato até o fim do 1º ano do mandato subsequente (ADCT art. 35, § 2º, I).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Viola o princípio da exclusividade orçamentária (art. 165, § 8º CF).' },
      { letter: 'C', explanation: 'Incorreta. O PPA entra em vigor no segundo ano do mandato do chefe do Executivo até o término do primeiro ano do mandato seguinte.' },
      { letter: 'D', explanation: 'Incorreta. O art. 167, IV, CF veda a vinculação de receita de impostos (salvo repartição, saúde, educação, administração tributária e garantias).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 165, §§ 1º, 2º, 5º e 8º', textSnippet: 'A lei orçamentária anual não conterá dispositivo estranho à previsão da receita e à fixação da despesa...' }
    ],
    professorTip: 'Tríade Orçamentária (Art. 165 CF): PPA = Planejamento estratégico (4 anos, do 2º ano de um mandato ao 1º do próximo); LDO = Ponte (metas, prioridades e alterações tributárias); LOA = Execução anual (orçamento fiscal, investimento das estatais e seguridade)!'
  },
  {
    id: 'esp_ext_fin_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Financeiro',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Financeiro',
    topic: 'Créditos Adicionais (Suplementares, Especiais e Extraordinários - Art. 167 CF e Lei 4.320/64)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Diante de uma catástrofe climática súbita e imprevisível (enchentes severas que destruíram pontes e hospitais em dezenas de municípios), a União precisa abrir urgentemente despesas orçamentárias não previstas na LOA para atendimento imediato à população. De acordo com o Art. 167, § 3º, da CF/88:`,
    options: [
      { letter: 'A', text: 'Deve-se abrir crédito suplementar mediante prévia autorização legislativa ordinária, com remanejamento e suplementação orçamentária direta por ato exclusivo do Poder Executivo. Essa norma garante transparência e equilíbrio intertemporal na gestão dos recursos públicos.' },
      { letter: 'B', text: 'A abertura de crédito extraordinário somente será admitida para atender a despesas imprevisíveis e urgentes, como as decorrentes de guerra, comoção interna ou calamidade pública, podendo ser feita mediante medida provisória.' },
      { letter: 'C', text: 'Créditos especiais e suplementares também podem ser abertos por medida provisória sem indicação de recursos disponíveis, sujeita ao controle interno administrativo e à fiscalização contábil dos tribunais de contas.' },
      { letter: 'D', text: 'Os créditos extraordinários não podem ser reabertos no exercício financeiro seguinte em nenhuma hipótese, em obediência aos princípios da legalidade orçamentária, anualidade e responsabilidade fiscal.' }
    ],
    correctAnswer: 'B',
    justification: `Os créditos adicionais dividem-se em: Suplementares (reforçam dotação já existente na LOA), Especiais (criam dotação nova sem prévia previsão) e Extraordinários (despesas imprevisíveis e urgentes: guerra, comoção interna ou calamidade pública — art. 167, § 3º, CF/88). Apenas os Extraordinários podem ser abertos por Medida Provisória (art. 62, § 1º, I, d) e dispensam indicação prévia de fonte de recursos.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Crédito suplementar apenas reforça dotação existente.' },
      { letter: 'C', explanation: 'Incorreta. Créditos suplementares e especiais exigem prévia autorização legislativa e indicação dos recursos correspondentes (art. 167, V), proibida MP.' },
      { letter: 'D', explanation: 'Incorreta. Créditos especiais e extraordinários promulgados nos últimos 4 meses do exercício podem ser reabertos no exercício seguinte nos limites de seus saldos (art. 167, § 2º CF).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 167, §§ 2º e 3º', textSnippet: 'A abertura de crédito extraordinário somente será admitida para atender a despesas imprevisíveis e urgentes, como as decorrentes de guerra, comoção interna ou calamidade pública, observado o disposto no art. 62.' }
    ],
    professorTip: 'Créditos Adicionais: Suplementar = reforça verba existente; Especial = cria verba nova (ambos precisam de lei + fonte!); Extraordinário = urgência/calamidade (pode ser por MP e sem indicar fonte na hora!).'
  },
  {
    id: 'esp_ext_fin_03',
    exam: 'Concurso Procuradoria / Contas - Direito Financeiro',
    examType: 'CONCURSO',
    board: 'FCC',
    year: 2024,
    subject: 'Direito Financeiro',
    topic: 'Lei de Responsabilidade Fiscal (LC nº 101/2000) - Despesa com Pessoal e Regra de Ouro',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sobre os limites da Despesa Total com Pessoal na Lei de Responsabilidade Fiscal (LC nº 101/2000 - Art. 19) e a "Regra de Ouro" constitucional (Art. 167, III, CF/88), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O limite máximo da despesa total com pessoal em relação à Receita Corrente Líquida (rcl) é de 50% para a União e 60% para os Estados e Municípios.' },
      { letter: 'B', text: 'O limite máximo de despesa com pessoal é de 60% igualmente para União, Estados e Municípios, com respeito à ordem cronológica constitucional para quitação de débitos em precatório.' },
      { letter: 'C', text: 'A Regra de Ouro permite a realização de operações de crédito superiores ao montante das despesas de capital para pagamento de folha salarial sem restrições.' },
      { letter: 'D', text: 'É permitido ao ente público realizar operação de crédito por antecipação de receita orçamentária (aro) no último ano de mandato do prefeito, sujeita ao controle interno administrativo e à fiscalização contábil dos tribunais de contas.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 19 da LRF fixa os tetos máximos da despesa total com pessoal em cada período de apuração sobre a Receita Corrente Líquida (RCL): 50% na União; 60% nos Estados; e 60% nos Municípios. Já a Regra de Ouro (art. 167, III, CF) proíbe operações de crédito que excedam o montante das despesas de capital (salvo autorizadas mediante créditos suplementares/especiais com finalidade precisa por maioria absoluta do Legislativo). E o art. 38, IV, "b", da LRF PROÍBE ARO no último ano de mandato!`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A União tem limite de 50% (Estados e Municípios, 60%).' },
      { letter: 'C', explanation: 'Incorreta. Isso viola diretamente a Regra de Ouro do art. 167, III, CF/88.' },
      { letter: 'D', explanation: 'Incorreta. Operação de crédito por ARO é expressamente proibida no último ano de mandato (art. 38, IV, b, LRF).' }
    ],
    statuteReferences: [
      { code: 'Lei Complementar 101/2000 (LRF)', article: 'Art. 19 e Art. 38, IV, b', textSnippet: 'Para os fins do disposto no caput do art. 169 da Constituição, a despesa total com pessoal, em cada período de apuração e em cada ente da Federação, não poderá exceder os percentuais da receita corrente líquida, a seguir discriminados: I - União: 50%; II - Estados: 60%; III - Municípios: 60%.' }
    ],
    professorTip: 'Tetos de Pessoal na LRF (sobre a RCL): União = 50%; Estados = 60%; Municípios = 60%! Alerta = 90% do teto; Prudencial = 95% do teto! E ARO no último ano de mandato = PROIBIDO!'
  },
  {
    id: 'esp_ext_fin_04',
    exam: 'Simulado FGV / OAB Unificado - Direito Financeiro',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Financeiro',
    topic: 'Precatórios Judiciais e Requisição de Pequeno Valor - RPV (Art. 100 CF/88)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um cidadão obteve condenação judicial transitada em julgado contra um Estado-membro ao pagamento de indenização de natureza alimentar no valor correspondente a R$ 400.000,00 (acima do teto estadual de RPV). Conforme o Art. 100 da Constituição Federal:`,
    options: [
      { letter: 'A', text: 'É permitido fracionar ou repartir o valor da execução para que parte seja paga por RPV e outra por precatório, com abertura direta de créditos extraordinários para custeio ordinário permanente de pessoal. Essa norma garante transparência e equilíbrio intertemporal na gestão dos recursos públicos.' },
      { letter: 'B', text: 'Os débitos de natureza alimentícia serão pagos com preferência sobre todos os demais débitos, exceto sobre os créditos superpreferenciais de titulares com 60 anos ou mais, portadores de doença grave ou pessoas com deficiência até o triplo do valor fixado para RPV.' },
      { letter: 'C', text: 'A apresentação do precatório até 2 de abril garante pagamento no mesmo exercício financeiro em curso, com respeito à ordem cronológica constitucional para quitação de débitos em precatório.' },
      { letter: 'D', text: 'Honorários advocatícios sucumbenciais não possuem natureza alimentar, sem vinculação genérica da receita de impostos a órgão ou despesa fora das exceções legais.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 100, §§ 1º, 2º e 8º, da CF/88: os débitos alimentares preferem aos comuns; dentro dos alimentares, há superpreferência (até o triplo da RPV) para credores com 60+ anos, doença grave ou deficiência (§ 2º). É vedado fracionar o crédito para fugir do precatório (§ 8º). Pela Súmula Vinculante 47, honorários advocatícios incluídos na condenação têm natureza ALIMENTAR. E os precatórios apresentados até 2 de abril são incluídos no orçamento do exercício SEGUINTE (§ 5º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O art. 100, § 8º veda expressamente o fracionamento de crédito para uso simultâneo de RPV e precatório.' },
      { letter: 'C', explanation: 'Incorreta. Inclusão até 2 de abril garante pagamento no exercício seguinte (não no mesmo ano).' },
      { letter: 'D', explanation: 'Incorreta. A Súmula Vinculante 47 do STF reconheceu natureza alimentar aos honorários advocatícios.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 100, §§ 1º, 2º, 5º e 8º', textSnippet: 'Os débitos de natureza alimentícia cujos titulares, originários ou por sucessão hereditária, tenham 60 (sessenta) anos de idade, ou sejam portadores de doença grave, ou pessoas com deficiência (...) serão pagos com preferência sobre todos os demais débitos, até o valor equivalente ao triplo fixado em lei para os fins do disposto no § 3º deste artigo...' }
    ],
    jurisprudence: 'Súmula Vinculante nº 47 do STF.',
    professorTip: 'Precatórios (Art. 100 CF): Data de corte = 2 de ABRIL (para orçamento do ano seguinte); Superpreferência (60+, doença grave, PCD) = até 3x o teto de RPV! Honorários = natureza ALIMENTAR (SV 47)!'
  },

  // FILOSOFIA DO DIREITO (+3)
  {
    id: 'esp_ext_fil_01',
    exam: 'Simulado FGV / OAB Unificado - Filosofia do Direito',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Filosofia do Direito',
    topic: 'Teoria Pura do Direito (Hans Kelsen) vs Pós-Positivismo (Dworkin e Alexy)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `No debate entre o positivismo normativista de Hans Kelsen e o pós-positivismo contemporâneo de Ronald Dworkin e Robert Alexy, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Para Hans Kelsen, a validade jurídica de uma norma depende necessariamente de seu conteúdo moral justo, conforme o modelo epistemológico estruturado para explicar coerência e completude do sistema.' },
      { letter: 'B', text: 'Para Ronald Dworkin, o Direito é composto apenas por regras jurídicas no modelo do tudo-ou-nada, excluindo princípios morais nos casos difíceis. Tal perspectiva orienta a compreensão estrutural das normas e da autoridade interpretativa.' },
      { letter: 'C', text: 'Para Robert Alexy, as regras funcionam como mandados definitivos aplicáveis por subsunção, enquanto os princípios são mandados de otimização que exigem ponderação diante de colisão no caso concreto.' },
      { letter: 'D', text: 'Para Kelsen, a Norma Fundamental (Grundnorm) é uma lei positiva votada pelo Parlamento, no interior da tradição teórica voltada à distinção metodológica entre ser e dever-ser normativo.' }
    ],
    correctAnswer: 'C',
    justification: `Na teoria de Robert Alexy, princípios são "mandados de otimização" (normas que ordenam que algo seja realizado na maior medida possível dentro das possibilidades jurídicas e fáticas), resolvidos em caso de colisão mediante ponderação (princípio da proporcionalidade). Já as regras são mandados definitivos aplicáveis na lógica do tudo-ou-nada (subsunção). Para Kelsen, o Direito é autônomo em relação à moral e a Grundnorm é uma norma pressuposta lógico-transcendental.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Teoria Pura do Direito separa estritamente Direito e Moral (positivismo metodológico).' },
      { letter: 'B', explanation: 'Incorreta. Dworkin critica justamente Hart por reduzir o direito a regras e defende a força normativa obrigatória dos princípios.' },
      { letter: 'D', explanation: 'Incorreta. A Norma Fundamental (Grundnorm) não é posta por autoridade humana, mas pressuposta como fundamento lógico de validade da Constituição.' }
    ],
    statuteReferences: [
      { code: 'Filosofia e Teoria Geral do Direito', article: 'Alexy / Kelsen / Dworkin', textSnippet: 'Princípios como mandados de otimização (Alexy) vs Teoria Pura do Direito (Kelsen).' }
    ],
    professorTip: 'Resumo de Ouro em Filosofia na OAB: KELSEN = Pirâmide + Grundnorm pressuposta + separação Moral/Direito; HART = Regras primárias e secundárias + Regra de Reconhecimento; DWORKIN = Regras (tudo-ou-nada) + Princípios (dimensão de peso) + Juiz Hércules; ALEXY = Princípios = Mandados de Otimização (ponderação)!'
  },
  {
    id: 'esp_ext_fil_02',
    exam: 'Prova Semestral Faculdade de Direito - Filosofia do Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Filosofia do Direito',
    topic: 'Teoria da Justiça de John Rawls (Véu da Ignorância e Princípio da Diferença)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Em sua obra "Uma Teoria da Justiça", John Rawls desenvolve o conceito de justiça como equidade por meio de um experimento contratualista hipotético ("posição original"). Segundo Rawls, na posição original sob o "véu da ignorância":`,
    options: [
      { letter: 'A', text: 'Os indivíduos conhecem plenamente sua classe social, riqueza, talentos e crenças para negociar vantagens máximas para seu grupo. Tal perspectiva orienta a compreensão estrutural das normas e da autoridade interpretativa.' },
      { letter: 'B', text: 'As partes ignoram sua posição social, dons naturais e concepção de bem, o que garante a imparcialidade na escolha dos dois princípios de justiça: igualdade de liberdades básicas e admissão de desigualdades econômicas apenas quando beneficiarem os menos favorecidos.' },
      { letter: 'C', text: 'Rawls defende o utilitarismo clássico como critério máximo da justiça social, conforme o modelo epistemológico estruturado para explicar coerência e completude do sistema.' },
      { letter: 'D', text: 'O princípio da diferença exige a supressão de todas as liberdades individuais em prol da igualdade absoluta de bens, como expressão sistemática das relações entre poder soberano, norma, interpretação e justiça. A análise teórica evidencia o papel da argumentação racional na justificação das decisões.' }
    ],
    correctAnswer: 'B',
    justification: `Em Rawls, o "véu da ignorância" impede que os indivíduos conheçam sua sorte social ou natural na posição original, assegurando justiça procedimental imparcial. Disso resultam dois princípios em ordem lexicográfica: 1º Princípio da Liberdade Igual (prioritário); 2º Princípio da Diferença e Igualdade Equitativa de Oportunidades (desigualdades sociais e econômicas só são justas se beneficiarem os menos favorecidos da sociedade).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O véu da ignorância oculta justamente classe social, riqueza e talentos.' },
      { letter: 'C', explanation: 'Incorreta. Rawls é um crítico direto do utilitarismo por sacrificar minorias em prol da soma agregada.' },
      { letter: 'D', explanation: 'Incorreta. O 1º princípio (liberdades básicas) tem prioridade lexicográfica sobre o 2º.' }
    ],
    statuteReferences: [
      { code: 'Teoria da Justiça (John Rawls)', article: 'Posição Original e Véu da Ignorância', textSnippet: 'Justiça como equidade e proteção aos menos favorecidos.' }
    ],
    professorTip: 'John Rawls na OAB: Véu da Ignorância -> Imparcialidade -> 1º Liberdades Básicas iguais para todos + 2º Princípio da Diferença (desigualdade só se melhorar a vida dos mais vulneráveis)!'
  },
  {
    id: 'esp_ext_fil_03',
    exam: 'Simulado FGV / OAB Unificado - Filosofia do Direito',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Filosofia do Direito',
    topic: 'H. L. A. Hart e o Conceito de Direito (Regras Primárias e Secundárias)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Em "O Conceito de Direito", H. L. A. Hart critica a teoria imperativista de John Austin (que reduzia o direito a ordens coercitivas apoiadas em ameaças de um soberano) e propõe a união de regras primárias e regras secundárias. Segundo Hart, a regra secundária que fornece o critério definitivo para identificar quais normas pertencem validamente a um sistema jurídico denomina-se:`,
    options: [
      { letter: 'A', text: 'Regra de adjudicação.' },
      { letter: 'B', text: 'Regra de reconhecimento.' },
      { letter: 'C', text: 'Regra de alteração.' },
      { letter: 'D', text: 'Norma hipotética fundamental pressuposta.' }
    ],
    correctAnswer: 'B',
    justification: `Para H. L. A. Hart, os sistemas jurídicos evoluídos combinam regras primárias (de conduta/obrigação) com três regras secundárias: (i) Regra de Reconhecimento (identifica quais normas são válidas no sistema); (ii) Regra de Alteração (permite criar/revogar normas); e (iii) Regra de Adjudicação (autoriza juízes a decidir conflitos). Além disso, Hart identifica a "textura aberta" (open texture) da linguagem jurídica, permitindo discricionariedade judicial nos casos difíceis.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Regra de adjudicação confere competência para julgar infrações.' },
      { letter: 'C', explanation: 'Incorreta. Regra de alteração disciplina o processo de criação e modificação normativa.' },
      { letter: 'D', explanation: 'Incorreta. Norma fundamental pressuposta é conceito de Kelsen, não de Hart (em Hart, a regra de reconhecimento é prática social fática aceita pelos operadores).' }
    ],
    statuteReferences: [
      { code: 'Filosofia do Direito (H. L. A. Hart)', article: 'O Conceito de Direito', textSnippet: 'União de regras primárias de obrigação e regras secundárias de reconhecimento, alteração e julgamento.' }
    ],
    professorTip: 'H.L.A. Hart = Regras Primárias (mandam/proíbem condutas) + Regras Secundárias (Reconhecimento [validade], Alteração [mudança] e Adjudicação [juízo]) + Textura Aberta!'
  }
];
