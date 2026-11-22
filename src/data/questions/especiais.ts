import { LegalQuestion } from '../../types';

export const ESPECIAIS_QUESTIONS: LegalQuestion[] = [
  // DIREITOS HUMANOS
  {
    id: 'oab34_dh_11',
    exam: 'XXXIV Exame de Ordem Unificado (OAB 34) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direitos Humanos',
    topic: 'Pacto de San José da Costa Rica e Prisão Civil (Súmula Vinculante 25 STF)',
    difficulty: 'Fácil',
    statement: `O Pacto de San José da Costa Rica (Convenção Americana sobre Direitos Humanos), ratificado pelo Brasil em 1992 sem o rito especial do Art. 5º, § 3º da CF/88, estabelece que ninguém deve ser detido por dívidas, ressalvada a obrigação de prestar alimentos.
De acordo com a jurisprudência vinculante do Supremo Tribunal Federal (RE 466.343 e Súmula Vinculante nº 25):`,
    options: [
      { letter: 'A', text: 'Os tratados de direitos humanos ratificados sem rito de emenda possuem status supralegal, paralisando a eficácia de leis ordinárias que previam a prisão civil do depositário infiel.' },
      { letter: 'B', text: 'Todos os tratados de direitos humanos possuem automaticamente hierarquia constitucional irrevogável independentemente do quórum de aprovação, sujeita à responsabilidade internacional objetiva do Estado por violações de seus agentes.' },
      { letter: 'C', text: 'O Pacto de San José tem hierarquia estritamente de lei ordinária, devendo prevalecer a literalidade do texto originário da CF/88 sobre o depositário infiel.' },
      { letter: 'D', text: 'A prisão civil do depositário infiel continua admitida na alienação fiduciária em garantia, com equivalência constitucional automática de qualquer declaração subscrita pelo Executivo. Essa diretriz orienta o diálogo entre a jurisdição interna e os órgãos internacionais.' }
    ],
    correctAnswer: 'A',
    justification: `No julgamento histórico do RE 466.343/SP, o STF firmou a tese de que os tratados internacionais de direitos humanos ratificados pelo Brasil antes da EC 45/2004 (ou sem o rito do art. 5º, § 3º) possuem estatura SUPRALEGAL (abaixo da Constituição, mas acima de toda a legislação ordinária). Isso paralisou a eficácia do Código Civil e do Decreto-Lei 911/69 quanto à prisão do depositário infiel, culminando na Súmula Vinculante nº 25 do STF.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Para ter status de Emenda Constitucional, o tratado de DH deve ser aprovado em dois turnos, por 3/5 dos votos dos membros de cada Casa do Congresso Nacional (Art. 5º, § 3º, da CF/88).' },
      { letter: 'C', explanation: 'Incorreta. A tese da legalidade ordinária foi expressamente superada pelo STF no RE 466.343.' },
      { letter: 'D', explanation: 'Incorreta. A Súmula Vinculante nº 25 proíbe qualquer prisão civil de depositário infiel, inclusive em alienação fiduciária.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 5º, § 3º', textSnippet: 'Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.' }
    ],
    jurisprudence: 'Súmula Vinculante nº 25 do STF: É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.',
    professorTip: 'Cai em TODA prova: Súmula Vinculante nº 25 do STF! Não existe prisão de depositário infiel no Brasil (apenas do devedor voluntário de alimentos)!'
  },
  {
    id: 'oab39_dh_02',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direitos Humanos',
    topic: 'Sistema Interamericano e Controle de Convencionalidade',
    difficulty: 'Médio',
    statement: `Um juiz de Direito de primeira instância, ao analisar litígio que envolve proteção a povos indígenas e comunidades tradicionais, depara-se com antinomia entre uma lei ordinária federal brasileira e as garantias da Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica).
À luz da doutrina dos Direitos Humanos e da jurisprudência da Corte Interamericana de Direitos Humanos:`,
    options: [
      { letter: 'A', text: 'O juiz tem o poder-dever de exercer o controle difuso de convencionalidade ex officio, deixando de aplicar a lei interna que contrarie o tratado de direitos humanos.' },
      { letter: 'B', text: 'O controle de convencionalidade no Brasil é de competência exclusiva do plenário do Supremo Tribunal Federal, em sintonia com a universalidade, indivisibilidade e inalienabilidade dos direitos humanos.' },
      { letter: 'C', text: 'Os juízes nacionais devem sempre aplicar a lei ordinária interna mesmo que viole flagrantemente o tratado internacional ratificado, com possibilidade de mitigação temporária da garantia por simples decreto regulamentar.' },
      { letter: 'D', text: 'O controle de convencionalidade depende de prévia consulta diplomática ao Ministério das Relações Exteriores, sujeita à responsabilidade internacional objetiva do Estado por violações de seus agentes.' }
    ],
    correctAnswer: 'A',
    justification: `Conforme estabelecido pela Corte Interamericana de Direitos Humanos (Caso Almonacid Arellano vs. Chile e sedimentado no Brasil pelo STF e CNJ - Recomendação 123/2022), todos os juízes e tribunais nacionais exercem o CONTROLE DIFUSO DE CONVENCIONALIDADE, devendo zelar ex officio pela compatibilidade das normas domésticas com os tratados internacionais de direitos humanos vigentes no país.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O controle de convencionalidade pode ser exercido difusamente por qualquer juiz de qualquer grau de jurisdição.' },
      { letter: 'C', explanation: 'Incorreta. Os tratados de DH têm estatura supralegal/constitucional e paralisam leis contrárias.' },
      { letter: 'D', explanation: 'Incorreta. O controle é estritamente judicial e não político/diplomático.' }
    ],
    statuteReferences: [
      { code: 'Convenção Americana sobre Direitos Humanos', article: 'Art. 1º e Art. 2º', textSnippet: 'Os Estados Partes nesta Convenção comprometem-se a respeitar os direitos e liberdades nela reconhecidos...' }
    ],
    jurisprudence: 'Corte IDH, Caso Almonacid Arellano: O Poder Judiciário deve exercer uma espécie de "controle de convencionalidade" entre as normas jurídicas internas e a Convenção Americana sobre Direitos Humanos.',
    professorTip: 'Controle de Convencionalidade é exercido por QUALQUER juiz de primeiro grau no Brasil! Se a lei interna violar tratado de direitos humanos, o juiz deixa de aplicar a lei!'
  },

  // DIREITO DO CONSUMIDOR
  {
    id: 'oab38_cdc_01',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito do Consumidor',
    topic: 'Fato do Produto vs Vício do Produto (Art. 12 vs Art. 18 CDC)',
    difficulty: 'Fácil',
    statement: `Consumidor adquiriu um liquidificador novo em loja de departamentos. Ao ligar o aparelho pela primeira vez em sua residência, a lâmina soltou-se do eixo central, estilhaçou o copo de vidro e causou cortes profundos na mão do consumidor, exigindo sutura hospitalar e gerando despesas médicas.
Diante das normas de proteção e defesa do consumidor (Lei nº 8.078/90 - CDC):`,
    options: [
      { letter: 'A', text: 'Trata-se de acidente de consumo (fato do produto), respondendo o fabricante de forma objetiva pelos danos físicos e materiais causados pela falta de segurança do produto, com prazo prescricional de 5 anos.' },
      { letter: 'B', text: 'Trata-se de mero vício do produto, devendo o consumidor conceder prazo de 30 dias para a assistência técnica consertar o aparelho sob pena de decadência em 90 dias, observados os prazos específicos para reclamação de vícios e pretensão reparatória por defeito.' },
      { letter: 'C', text: 'A loja comerciante responde prioritariamente, ficando o fabricante isento de responsabilidade direta, com configuração de prática abusiva e nulidade absoluta em face da vulnerabilidade contratual.' },
      { letter: 'D', text: 'O dever de indenizar do fabricante depende da comprovação cabal de sua culpa ou dolo na fabricação da lâmina, com proteção à legítima expectativa de segurança e adequação do produto no mercado.' }
    ],
    correctAnswer: 'A',
    justification: `Houve um acidente de consumo (FATO DO PRODUTO - Art. 12 do CDC), pois o defeito extrapolou o bem e atingiu a integridade física do consumidor (dano corporal/patrimonial intrínseco e extrínseco). A responsabilidade do fabricante é OBJETIVA (dispensa culpa) e o prazo para reparação dos danos é PRESCRICIONAL de 5 (cinco) anos (art. 27 do CDC). O comerciante só responderia subsidiariamente nas hipóteses do art. 13 do CDC.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Vício do produto é mero problema de funcionamento ou quantidade (Art. 18); quando atinge a integridade física do consumidor, é FATO do produto (Art. 12).' },
      { letter: 'C', explanation: 'Incorreta. No fato do produto, o fabricante responde diretamente; o comerciante só responde se o fabricante não for identificado ou se não conservar produtos perecíveis (Art. 13).' },
      { letter: 'D', explanation: 'Incorreta. A responsabilidade no CDC é OBJETIVA (Art. 12, caput).' }
    ],
    statuteReferences: [
      { code: 'Código de Defesa do Consumidor', article: 'Art. 12 e Art. 27', textSnippet: 'O fabricante, o produtor, o construtor, nacional ou estrangeiro, e o importador respondem, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos decorrentes de projeto, fabricação... Art. 27: Prescreve em cinco anos a pretensão à reparação pelos danos causados por fato do produto...' }
    ],
    professorTip: 'Diferença que mais cai na OAB: Vício = problema no aparelho que não machucou ninguém (prazo de 30 ou 90 dias). Fato/Defeito = explodiu e machucou o consumidor! É responsabilidade objetiva do fabricante e o prazo de indenização é de 5 ANOS!'
  },
  {
    id: 'oab39_cdc_02',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito do Consumidor',
    topic: 'Desconsideração da Personalidade Jurídica no CDC - Teoria Menor (Art. 28, § 5º)',
    difficulty: 'Médio',
    statement: `Em execução de sentença de ação consumerista, constatou-se que a pessoa jurídica fornecedora condenada não possui bens penhoráveis suficientes para saldar a dívida com o consumidor, embora não tenha havido desvio de finalidade ou confusão patrimonial dolosa pelos sócios. O consumidor requereu a desconsideração da personalidade jurídica para atingir bens dos sócios.
Segundo o Art. 28, § 5º do CDC e a jurisprudência consolidada do STJ:`,
    options: [
      { letter: 'A', text: 'Aplica-se a Teoria Menor da desconsideração, bastando a mera insolvência da pessoa jurídica ou que a personalidade seja obstáculo ao ressarcimento do consumidor.' },
      { letter: 'B', text: 'Aplica-se a Teoria Maior, sendo indispensável a demonstração inequívoca de fraude, dolo e confusão patrimonial dolosa. Tal critério define o alcance dos deveres anexos de informação e segurança ao destinatário.' },
      { letter: 'C', text: 'A desconsideração é vedada no processo de execução civil contra sociedades limitadas, com proteção à legítima expectativa de segurança e adequação do produto no mercado.' },
      { letter: 'D', text: 'Apenas os administradores não-sócios podem ter seus patrimônios atingidos, sem possibilidade de transferir os riscos da atividade econômica ao consumidor final.' }
    ],
    correctAnswer: 'A',
    justification: `Diferente do Código Civil (art. 50, que adota a Teoria Maior exigindo abuso, desvio de finalidade ou confusão patrimonial), o Direito do Consumidor adota a TEORIA MENOR da desconsideração (Art. 28, § 5º do CDC). Conforme reiterada jurisprudência do STJ, basta que a personalidade jurídica seja obstáculo ao ressarcimento dos prejuízos causados aos consumidores (mera insolvência ou falta de bens) para autorizar a constrição dos bens dos sócios.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A Teoria Maior é a do Código Civil (Art. 50); o CDC adota a Teoria Menor (Art. 28, § 5º).' },
      { letter: 'C', explanation: 'Incorreta. A desconsideração é plenamente aplicável na execução sob o rito do incidente de desconsideração.' },
      { letter: 'D', explanation: 'Incorreta. Os bens dos sócios respondem diretamente pela aplicação da teoria menor.' }
    ],
    statuteReferences: [
      { code: 'Código de Defesa do Consumidor', article: 'Art. 28, § 5º', textSnippet: 'Também poderá ser desconsiderada a pessoa jurídica sempre que sua personalidade for, de alguma forma, obstáculo ao ressarcimento de prejuízos causados aos consumidores.' }
    ],
    jurisprudence: 'STJ, REsp 1.766.093/SP: No âmbito das relações de consumo, adota-se a Teoria Menor da desconsideração da personalidade jurídica, bastando a prova da insolvência da pessoa jurídica para a responsabilização dos sócios.',
    professorTip: 'Comparativo clássico: Código Civil = TEORIA MAIOR (precisa de fraude/confusão patrimonial). CDC = TEORIA MENOR (não tem dinheiro na conta da empresa? Os sócios pagam!).'
  },

  // DIREITO AMBIENTAL
  {
    id: 'oab37_amb_01',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Ambiental',
    topic: 'Princípios do Direito Ambiental - Precaução vs Prevenção',
    difficulty: 'Médio',
    statement: `Órgão ambiental competente indeferiu a licença para instalação de empreendimento agroindustrial que pretendia lançar efluente químico inédito em corpo hídrico de preservação, fundamentando a recusa no fato de que não existem ainda estudos científicos conclusivos que assegurem a ausência de riscos irreversíveis ao ecossistema local. O empreendedor impetrou Mandado de Segurança alegando que a ausência de certeza científica não pode justificar a proibição.
À luz dos princípios estruturantes do Direito Ambiental consagrados pela Rio-92 e jurisprudência do STF/STJ:`,
    options: [
      { letter: 'A', text: 'O indeferimento é legítimo com base no Princípio da Precaução, segundo o qual a incerteza científica sobre dano grave e irreversível milita em favor do meio ambiente.' },
      { letter: 'B', text: 'A autoridade ambiental agiu com desvio de poder, pois o princípio da prevenção só autoriza medidas restritivas quando há certeza científica absoluta prévia.' },
      { letter: 'C', text: 'A livre iniciativa prepondera sempre sobre receios ambientais sem prova pericial imediata, com validação da transferência do passivo ambiental ao poder público por declaração unilateral.' },
      { letter: 'D', text: 'O princípio da precaução aplica-se exclusivamente a atividades nucleares e radiológicas, com responsabilidade civil ambiental objetiva e solidária sob a modalidade de risco integral.' }
    ],
    correctAnswer: 'A',
    justification: `O PRINCÍPIO DA PRECAUÇÃO (Princípio 15 da Declaração Rio-92) estabelece que, diante da ameaça de danos graves ou irreversíveis, a ausência de absoluta certeza científica não deve ser utilizada como razão para postergar a adoção de medidas eficazes para impedir a degradação ambiental. Incerteza científica = Precaução (in dubio pro natura). Já a Prevenção atua quando o perigo é conhecido e cientificamente mensurável.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A distinção fundamental é: quando há incerteza científica, aplica-se a PRECAUÇÃO.' },
      { letter: 'C', explanation: 'Incorreta. O direito fundamental ao meio ambiente ecologicamente equilibrado (Art. 225) limita a livre iniciativa econômica.' },
      { letter: 'D', explanation: 'Incorreta. A precaução é princípio de aplicação geral no direito ambiental.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 225, § 1º, IV e V', textSnippet: 'Para assegurar a efetividade desse direito, incumbe ao Poder Público: IV - exigir... estudo prévio de impacto ambiental... V - controlar a produção, a comercialização e o emprego de técnicas, métodos e substâncias que comportem risco para a vida...' }
    ],
    jurisprudence: 'STF, ADI 3.540/DF: O princípio da precaução traduz imposição cogente, de modo que a dúvida científica deve ser resolvida em favor da proteção ao meio ambiente (in dubio pro salute / in dubio pro natura).',
    professorTip: 'Diferença chave que a FGV adora: PREVENÇÃO = Risco conhecido/certo (faço estudo para prevenir). PRECAUÇÃO = Risco incerto/desconhecido (na dúvida científica, NÃO FAZ!).'
  },
  {
    id: 'oab39_amb_02',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Ambiental',
    topic: 'Responsabilidade Civil Ambiental e Teoria do Risco Integral (Súmulas STJ)',
    difficulty: 'Difícil',
    statement: `Indústria química causou vazamento de produtos tóxicos em rio navegável, contaminando a fauna e a água de consumo da comunidade ribeirinha. Em sua contestação, a empresa sustentou a ausência do dever de indenizar alegando que o rompimento da tubulação decorreu de caso fortuito/força maior provocado por tempestade de chuvas atípicas históricas.
Consoante o Art. 225, § 3º da CF/88 e a jurisprudência pacífica do Superior Tribunal de Justiça (STJ):`,
    options: [
      { letter: 'A', text: 'A responsabilidade civil por dano ambiental é informada pela Teoria do Risco Integral, não admitindo excludentes de culpabilidade ou de nexo de causalidade como o caso fortuito, força maior ou fato de terceiro.' },
      { letter: 'B', text: 'O caso fortuito e a força maior são excludentes universais de responsabilidade civil, aplicáveis indistintamente ao direito ambiental, com repercussão autônoma e cumulativa nas esferas administrativa, cível e penal ambiental.' },
      { letter: 'C', text: 'A empresa só responde se a comunidade comprovar culpa exclusiva ou dolo de seus diretores, sujeita ao regime constitucional de bem de uso comum do povo e equidade intergeracional.' },
      { letter: 'D', text: 'A reparação ambiental submete-se ao prazo prescricional de 3 anos do Código Civil, com preservação da imprescritibilidade da pretensão voltada à reparação do dano ecológico. Essa exigência vincula tanto empreendimentos privados quanto obras executadas pelo poder público.' }
    ],
    correctAnswer: 'A',
    justification: `A responsabilidade civil por danos ambientais é OBJETIVA e lastreada na TEORIA DO RISCO INTEGRAL (Art. 14, § 1º da Lei 6.938/81 e Tema 681 do STJ). Por adotar o risco integral, NÃO são admitidas excludentes de nexo causal como caso fortuito, força maior ou fato de terceiro. Ademais, conforme o Tema 999 do STF (RE 654.833), a pretensão de reparação civil por dano ambiental é IMPRESCRITÍVEL.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. No risco integral (meio ambiente), caso fortuito e força maior NÃO excluem o dever de indenizar.' },
      { letter: 'C', explanation: 'Incorreta. A responsabilidade é objetiva, prescindindo de comprovação de culpa.' },
      { letter: 'D', explanation: 'Incorreta. A reparação de danos ambientais é IMPRESCRITÍVEL (Súmula STF e Tema 999).' }
    ],
    statuteReferences: [
      { code: 'Lei 6.938/81 (Política Nacional do Meio Ambiente)', article: 'Art. 14, § 1º', textSnippet: '...é o poluidor obrigado, independentemente da existência de culpa, a indenizar ou reparar os danos causados ao meio ambiente e a terceiros, afetados por sua atividade.' }
    ],
    jurisprudence: 'STJ, Tema 681 (REsp 1.374.284/MG): A responsabilidade por dano ambiental é objetiva e fundamentada na teoria do risco integral, sendo incabível a alegação de excludentes como caso fortuito, força maior ou fato de terceiro.',
    professorTip: 'Direito Ambiental = TEORIA DO RISCO INTEGRAL! Poluiu? Paga! Tempestade, raio, enchente (força maior)? NÃO COLA! E a indenização ambiental é IMPRESCRITÍVEL (Tema 999 STF)!'
  },
  {
    id: 'oab38_cdc_03',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito do Consumidor',
    topic: 'Direito de Arrependimento nas Compras Fora do Estabelecimento Comercial (Art. 49 CDC)',
    difficulty: 'Fácil',
    statement: `Mariana comprou um notebook pela internet através do site de uma loja de comércio eletrônico. Três dias após receber o produto lacrado em sua residência e testar suas funcionalidades, Mariana constatou que a cor e o teclado não atenderam às suas expectativas estéticas pessoais, sem que houvesse qualquer defeito ou vício no aparelho. Mariana entrou em contato com o fornecedor requerendo a devolução do produto e o reembolso integral dos valores pagos, incluindo o frete. O fornecedor recusou o cancelamento alegando que o notebook funciona perfeitamente e que o frete não pode ser estornado.
À luz do Art. 49 do Código de Defesa do Consumidor e da jurisprudência consolidada do STJ:`,
    options: [
      { letter: 'A', text: 'Mariana tem o direito potestativo de desistir da compra no prazo de 7 dias a contar do recebimento do produto, com devolução imediata de todos os valores pagos, inclusive o frete, atualizados monetariamente.' },
      { letter: 'B', text: 'O direito de arrependimento só existe se o consumidor comprovar defeito oculto de fabricação, sujeita ao controle administrativo e judicial de cláusulas abusivas no microssistema.' },
      { letter: 'C', text: 'O fornecedor pode reter o valor do frete e aplicar taxa de reestocagem de 20% sobre o produto, em consonância com a boa-fé objetiva, transparência e equilíbrio nas relações de consumo.' },
      { letter: 'D', text: 'O direito de arrependimento aplica-se exclusivamente a compras de valor inferior a 1 salário mínimo, com validação da estipulação padrão independentemente de destaque expresso no contrato. Essa proteção orienta a interpretação dos contratos de adesão e a oferta ao mercado.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 49 do CDC consagra o PRAZO DE REFLEXÃO ou DIREITO DE ARREPENDIMENTO: o consumidor pode desistir do contrato, no prazo de 7 (sete) dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento ocorrer fora do estabelecimento comercial (pela internet, telefone ou a domicílio). O parágrafo único assegura que os valores eventualmente pagos, a qualquer título (inclusive frete), serão devolvidos de imediato e monetariamente atualizados. Não é necessária qualquer justificativa ou defeito no produto.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O direito de arrependimento independe de defeito ou vício; é um direito potestativo imotivado.' },
      { letter: 'C', explanation: 'Incorreta. O STJ veda expressamente a cobrança de frete ou taxa de reestocagem do consumidor que exerce o art. 49 do CDC.' },
      { letter: 'D', explanation: 'Incorreta. O art. 49 não impõe nenhum teto de valor.' }
    ],
    statuteReferences: [
      { code: 'Código de Defesa do Consumidor', article: 'Art. 49', textSnippet: 'O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio.' }
    ],
    professorTip: 'Direito de Arrependimento (Art. 49 CDC): Comprou pela internet/fora da loja? Tem 7 DIAS para devolver por qualquer motivo! Recebe 100% do dinheiro de volta, INCLUSIVE O FRETE!'
  },
  {
    id: 'oab37_dh_04',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direitos Humanos',
    topic: 'Sistema Interamericano de Direitos Humanos - Comissão vs. Corte Interamericana',
    difficulty: 'Médio',
    statement: `Determinada organização não governamental de defesa dos direitos humanos pretende submeter um caso de grave e reiterada violação estatal de direitos humanos ocorrida no Brasil diretamente à apreciação judicial da Corte Interamericana de Direitos Humanos (Corte IDH).
De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica de 1969):`,
    options: [
      { letter: 'A', text: 'Somente os Estados Partes e a Comissão Interamericana de Direitos Humanos têm a faculdade de submeter um caso à decisão da Corte, não dispondo os indivíduos ou ONGs de legitimidade processual direta perante o tribunal internacional.' },
      { letter: 'B', text: 'Qualquer indivíduo ou ONG tem legitimidade direta de acesso à Corte idh sem necessidade de passar pela Comissão, em sintonia com a universalidade, indivisibilidade e inalienabilidade dos direitos humanos. Essa diretriz orienta o diálogo entre a jurisdição interna e os órgãos internacionais.' },
      { letter: 'C', text: 'Apenas o Procurador-Geral da República tem legitimidade para acionar a Corte idh em matéria de direitos humanos, com prevalência da interpretação mais favorável à efetiva proteção da pessoa humana.' },
      { letter: 'D', text: 'A Corte idh só pode julgar controvérsias de natureza comercial internacional entre Estados signatários, com autorização de acionamento direto das cortes internacionais sem requisito prévio.' }
    ],
    correctAnswer: 'A',
    justification: `O Art. 61, parágrafo 1 da Convenção Americana de Direitos Humanos (CADH) dispõe com clareza cristalina: 'Somente os Estados Partes e a Comissão têm direito de submeter um caso à decisão da Corte'. Os indivíduos, vítimas ou entidades não governamentais não possuem o chamado jus postulandi direto perante a Corte IDH; eles apresentam petições perante a COMISSÃO Interamericana (Art. 44). E é a Comissão que, após trâmite prévio e esgotamento das vias internas, decide submeter o caso a julgamento perante a Corte.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O acesso de particulares à Corte é indireto (mediado pela Comissão Interamericana).' },
      { letter: 'C', explanation: 'Incorreta. A legitimação é da Comissão ou de outros Estados-membros da OEA.' },
      { letter: 'D', explanation: 'Incorreta. A competência da Corte IDH é estritamente vinculada aos direitos civis, políticos e humanos fundamentais previstos na CADH.' }
    ],
    statuteReferences: [
      { code: 'Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica)', article: 'Art. 61, item 1', textSnippet: 'Somente os Estados Partes e a Comissão têm direito de submeter um caso à decisão da Corte.' },
      { code: 'Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica)', article: 'Art. 44', textSnippet: 'Qualquer pessoa ou grupo de pessoas, ou entidade não governamental legalmente reconhecida em um ou mais Estados membros da Organização, pode apresentar à Comissão petições...' }
    ],
    professorTip: 'Bizu do Sistema Interamericano (OAB FGV ama!): O cidadão comum e as ONGs batem na porta da COMISSÃO (em Washington). Só a COMISSÃO ou um ESTADO podem bater na porta da CORTE (em San José da Costa Rica)!'
  },
  {
    id: 'oab38_amb_05',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Ambiental',
    topic: 'Princípio da Precaução e Inversão do Ônus da Prova (Súmula 618 STJ)',
    difficulty: 'Médio',
    statement: `Um empreendimento petroquímico pretende instalar uma nova planta industrial em área limítrofe a um manguezal de preservação permanente. O órgão ambiental exigiu a realização de estudo prévio de impacto ambiental. Paralelamente, em Ação Civil Pública ajuizada pelo Ministério Público para paralisar as obras preliminares, surgiu dúvida científica sobre o risco de contaminação irreparável do lençol freático pelas novas substâncias que serão manipuladas.
À luz dos princípios estruturantes do Direito Ambiental e da jurisprudência sumulada do STJ:`,
    options: [
      {
        letter: 'A',
        text: 'Aplica-se o princípio da precaução, impondo-se a inversão do ônus da prova ao empreendedor poluidor, diante da incerteza científica sobre o perigo de dano grave e irreversível.'
      },
      {
        letter: 'B',
        text: 'Na dúvida científica, vigora o princípio da livre iniciativa econômica, competindo ao Ministério Público provar cabalmente o dano futuro. Tal regime jurídico reflete a proteção constitucional atribuída aos recursos ecológicos.'
      },
      {
        letter: 'C',
        text: 'O princípio da precaução aplica-se apenas a desastres nucleares já consumados, sujeita ao regime constitucional de bem de uso comum do povo e equidade intergeracional.'
      },
      {
        letter: 'D',
        text: 'A responsabilidade por dano ambiental é puramente subjetiva, dependendo de prova de dolo do empresário, observada a competência comum material dos entes federativos para fiscalização e proteção.'
      }
    ],
    correctAnswer: 'A',
    justification: `O princípio da precaução orienta que, havendo ameaça de danos graves ou irreversíveis ao meio ambiente, a ausência de certeza científica absoluta não deve ser utilizada como razão para postergar a adoção de medidas eficazes para impedir a degradação ambiental (Declaração do Rio/92, Princípio 15). Corolário direto dessa diretriz, a Súmula 618 do STJ consolidou que: 'A inversão do ônus da prova aplica-se às ações de degradação ambiental', cabendo ao empreendedor demonstrar a inofensividade de sua atividade (princípio in dubio pro natura).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Em Direito Ambiental vigora a primazia da proteção ecológica e a inversão do ônus da prova contra o poluidor.' },
      { letter: 'C', explanation: 'Incorreta. A precaução atua preventivamente diante de incertezas científicas em qualquer atividade potencialmente lesiva.' },
      { letter: 'D', explanation: 'Incorreta. A responsabilidade civil ambiental é OBJETIVA pela teoria do risco integral (Art. 14, § 1º da Lei 6.938/81 e Tema 681/STJ).' }
    ],
    statuteReferences: [
      { code: 'Lei da Política Nacional do Meio Ambiente (Lei 6.938/81)', article: 'Art. 14, § 1º', textSnippet: 'Sem obstar a aplicação das penalidades previstas neste artigo, é o poluidor obrigado, independentemente da existência de culpa, a indenizar ou reparar os danos causados ao meio ambiente e a terceiros, afetados por sua atividade.' }
    ],
    jurisprudence: 'Súmula 618 do STJ: A inversão do ônus da prova aplica-se às ações de degradação ambiental.',
    professorTip: 'Precaução vs Prevenção: Prevenção = O perigo é CONHECIDO e CERTO cientificamente. Precaução = O perigo é INCERTO cientificamente! E gravou: Súmula 618 do STJ inverte o ônus da prova contra o degradador!'
  },
  {
    id: 'faculdade_eca_06',
    exam: 'Prova Semestral de Direitos da Criança e Adolescente - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito da Criança e do Adolescente (ECA)',
    topic: 'Medida Socioeducativa de Internação e Rol Taxativo do Art. 122',
    difficulty: 'Difícil',
    statement: `Lucas, adolescente de 16 anos, foi apreendido em flagrante praticando ato infracional análogo ao crime de tráfico ilícito de entorpecentes (portando 50g de substância ilícita). Lucas não possui qualquer registro de ato infracional pretérito no seu histórico. O Ministério Público representou pela aplicação da medida socioeducativa de internação, sustentando a gravidade social abstrata do tráfico de drogas e o clamor público da comunidade local.
De acordo com o Art. 122 do Estatuto da Criança e do Adolescente (Lei 8.069/90) e a Súmula 492 do STJ:`,
    options: [
      {
        letter: 'A',
        text: 'A imposição de medida de internação é ilegal, pois o ato infracional análogo ao tráfico de drogas não envolve violência ou grave ameaça à pessoa, e Lucas não é reincidente em infrações graves.'
      },
      {
        letter: 'B',
        text: 'A internação é obrigatória em qualquer caso de tráfico de entorpecentes pela equiparação a crime hediondo, com garantia de assistência jurídica integral, contraditório e ampla defesa no procedimento. Essa diretriz assegura a prioridade absoluta no atendimento protetivo e jurisdicional.'
      },
      {
        letter: 'C',
        text: 'A internação pode ser aplicada discricionariamente pelo juiz independentemente do rol, observadas as atribuições próprias entre Conselho Tutelar, Ministério Público e Judiciário.'
      },
      {
        letter: 'D',
        text: 'Lucas pode ser submetido a prisão temporária comum em presídio de adultos até completar 18 anos, com autorização para atuação autônoma do órgão tutelar na aplicação imediata da medida.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 122 do ECA prevê taxativamente que a aplicação de medida de internação só é permitida em três hipóteses estritas: I - ato infracional cometido mediante grave ameaça ou violência a pessoa; II - reiteração no cometimento de outras infrações graves; III - descumprimento reiterado e injustificável de medida anteriormente imposta. Como o tráfico de drogas não envolve, por si só, violência ou grave ameaça à pessoa, e Lucas não ostenta reiteração em infrações graves, a internação é vedada, conforme expressa redação da Súmula 492 do STJ: 'O ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação do adolescente'.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O STJ veda a aplicação automática de internação ao tráfico (Súmula 492).' },
      { letter: 'C', explanation: 'Incorreta. O rol do art. 122 do ECA é taxativo (numerus clausus).' },
      { letter: 'D', explanation: 'Incorreta. É vedada a permanência de adolescentes em estabelecimentos penais para adultos (Art. 185, § 2º do ECA).' }
    ],
    statuteReferences: [
      { code: 'Estatuto da Criança e do Adolescente (Lei 8.069/90)', article: 'Art. 122', textSnippet: 'A medida de internação só poderá ser aplicada quando: I - tratar-se de ato infracional cometido mediante grave ameaça ou violência a pessoa; II - por reiteração no cometimento de outras infrações graves; III - por descumprimento reiterado e injustificável da medida anteriormente imposta.' }
    ],
    jurisprudence: 'Súmula 492 do STJ: O ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação do adolescente.',
    professorTip: 'Cai em TODAS as provas da OAB: Tráfico de drogas autoriza internação de adolescente primário? NÃO! Não tem violência à pessoa e não é reincidente. Aplica-se liberdade assistida ou semiliberdade (Súmula 492 STJ)!'
  }
];
