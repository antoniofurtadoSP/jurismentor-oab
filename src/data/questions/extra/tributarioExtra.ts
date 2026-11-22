import { LegalQuestion } from '../../../types';

export const TRIBUTARIO_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'trib_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Imunidade Tributária de Livros, Jornais e E-books (Súmula Vinculante 57)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Uma editora passou a comercializar exclusivamente livros digitais (e-books) e leitores digitais dedicados exclusivamente à leitura (e-readers), além de importar papel especial destinado à impressão de periódicos. O Fisco estadual exigiu o recolhimento de ICMS sobre a circulação dos e-books e e-readers sob a alegação de que a imunidade constitucional exige suporte físico em papel. À luz da Súmula Vinculante nº 57 do STF:`,
    options: [
      { letter: 'A', text: 'A cobrança do ICMS é legítima porque a imunidade cultural restringe-se ao papel impresso. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' },
      { letter: 'B', text: 'A imunidade tributária aplica-se à importação e comercialização, no mercado interno, do livro eletrônico (e-book) e dos suportes exclusivamente utilizados para fixá-los, como os leitores de livros eletrônicos (e-readers).' },
      { letter: 'C', text: 'A imunidade dos livros digitais alcança também o Imposto de Renda sobre o lucro da editora e as contribuições sociais, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador.' },
      { letter: 'D', text: 'Tablets multifuncionais com acesso amplo à internet e aplicativos também gozam integralmente da imunidade de livros, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' }
    ],
    correctAnswer: 'B',
    justification: `A Súmula Vinculante nº 57 do STF estendeu a imunidade objetiva do art. 150, VI, "d", da CF/88 aos livros eletrônicos (e-books) e aos aparelhos leitores confeccionados exclusivamente para essa finalidade (e-readers), ainda que equipados com funcionalidades acessórias. Contudo, trata-se de imunidade apenas a IMPOSTOS (não alcança contribuições nem o IR da editora, pois é imunidade objetiva do produto/insumo, não subjetiva da empresa).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O STF adotou interpretação teleológica na SV 57.' },
      { letter: 'C', explanation: 'Incorreta. A imunidade do art. 150, VI, d alcança impostos sobre o livro/insumo (II, IPI, ICMS), não o IRPJ ou contribuições da editora.' },
      { letter: 'D', explanation: 'Incorreta. Aparelhos multifuncionais comuns (tablets/smartphones genéricos) não se confundem com e-readers dedicados.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 150, VI, d', textSnippet: 'Sem prejuízo de outras garantias asseguradas ao contribuinte, é vedado à União, aos Estados, ao Distrito Federal e aos Municípios: (...) VI - instituir impostos sobre: (...) d) livros, jornais, periódicos e o papel destinado a sua impressão.' }
    ],
    jurisprudence: 'Súmula Vinculante nº 57 do STF.',
    professorTip: 'SV 57 STF: E-book e Kindle (e-reader exclusivo) TÊM IMUNIDADE de impostos (ICMS, IPI, II)! Mas atenção: imunidade é só de IMPOSTO sobre o livro — editora continua pagando IRPJ, CSLL, PIS/COFINS e IPTU!'
  },
  {
    id: 'trib_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Anterioridade Anual x Anterioridade Nonagesimal (Exceções Constitucionais)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Em 20 de dezembro de determinado ano, foi publicada lei ordinária federal majorando a alíquota do Imposto sobre a Renda (IR) e outra lei aumentando a alíquota do IPI. Considerando o princípio da anterioridade tributária (anual e nonagesimal) previsto no Art. 150, III, b e c, e § 1º, da CF/88:`,
    options: [
      { letter: 'A', text: 'O aumento do IR poderá ser exigido já em 1º de janeiro do ano seguinte; o aumento do IPI poderá ser exigido após 90 dias da publicação.' },
      { letter: 'B', text: 'Tanto o IR quanto o IPI devem respeitar cumulativamente a anterioridade anual e a nonagesimal, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador.' },
      { letter: 'C', text: 'Ambos os impostos podem ser cobrados imediatamente no dia seguinte à publicação por força da urgência fiscal, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' },
      { letter: 'D', text: 'A fixação da base de cálculo do IPVA e do IPTU também se submete à anterioridade nonagesimal, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' }
    ],
    correctAnswer: 'A',
    justification: `Nos termos do art. 150, § 1º, da CF/88: o Imposto de Renda (IR) é exceção à NOVENTENA (vale apenas a anterioridade anual — publicado em 20/dez, já vale em 1º/jan!). Já o IPI é exceção à ANTERIORIDADE ANUAL (respeita apenas a noventena de 90 dias). Somente II, IE, IOF, Imposto Extraordinário de Guerra e Empréstimo Compulsório por calamidade/guerra têm cobrança imediata sem anual e sem noventena.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Cada um possui regra própria no art. 150, § 1º.' },
      { letter: 'C', explanation: 'Incorreta. Cobrança imediata só vale para II, IE, IOF, IEG e EC de guerra/calamidade.' },
      { letter: 'D', explanation: 'Incorreta. Fixação da base de cálculo do IPTU e do IPVA é exceção à noventena (respeita apenas a anual).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 150, III, b, c e § 1º', textSnippet: 'A vedação do inciso III, b, não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, IV e V; e 154, II; e a vedação do inciso III, c, não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, III e V; e 154, II, nem à fixação da base de cálculo dos impostos previstos nos arts. 155, III, e 156, I.' }
    ],
    professorTip: 'Tabela infalível da Anterioridade: Imediato = II, IE, IOF, IEG, EC (guerra/calamidade). Só Anual (sem 90 dias) = IR + Base de cálculo de IPTU/IPVA. Só 90 dias (sem anual) = IPI + Contribuições Sociais (art. 195, § 6º)!'
  },
  {
    id: 'trib_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Decadência no Lançamento por Homologação (Art. 150, § 4º vs Art. 173, I, CTN)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Um contribuinte realizou o fato gerador do ICMS em 15/03/2018, mas apresentou declaração a menor (apenas parte do tributo) e efetuou pagamento parcial antecipado de boa-fé, sem dolo, fraude ou simulação. Não houve lançamento de ofício complementar pelo Fisco estadual até 20/04/2023. À luz da Súmula 555 do STJ e do CTN:`,
    options: [
      { letter: 'A', text: 'Aplica-se o prazo de 5 anos contado do primeiro dia do exercício seguinte, não tendo ocorrido decadência, observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais.' },
      { letter: 'B', text: 'Havendo pagamento antecipado parcial sem dolo, fraude ou simulação, aplica-se a regra (5 anos contados da data do fato gerador), operando-se a decadência em 15/03/2023.' },
      { letter: 'C', text: 'A declaração a menor autoriza a cobrança imprescritível da diferença a qualquer tempo, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador.' },
      { letter: 'D', text: 'O prazo decadencial no lançamento por homologação é sempre de 10 anos (tese dos 5 + 5), com legitimação do lançamento de ofício e inscrição imediata do débito em dívida ativa. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o STJ (REsp 973.733 e Súmula 555): se houve pagamento antecipado (mesmo que parcial ou a menor) sem dolo, fraude ou simulação, o prazo decadencial para o Fisco constituir eventual diferença segue o Art. 150, § 4º, do CTN: 5 anos contados DO FATO GERADOR (logo decaiu em 15/03/2023). Só vai para o Art. 173, I (5 anos do 1º dia do exercício seguinte) quando NÃO há nenhum pagamento antecipado ou há dolo/fraude/simulação.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O art. 173, I só incide se não houver pagamento antecipado nem declaração (Súmula 555 STJ).' },
      { letter: 'C', explanation: 'Incorreta. O poder de constituir o crédito extingue-se em 5 anos.' },
      { letter: 'D', explanation: 'Incorreta. A tese dos 5+5 foi superada pelo STJ e LC 118/2005.' }
    ],
    statuteReferences: [
      { code: 'Código Tributário Nacional (CTN)', article: 'Art. 150, § 4º e Art. 173, I', textSnippet: 'Se a lei não fixar prazo à homologação, será ele de cinco anos, a contar da ocorrência do fato gerador; expirado esse prazo sem que a Fazenda Pública se tenha pronunciado, considera-se homologado o lançamento e definitivamente extinto o crédito, salvo se comprovada a ocorrência de dolo, fraude ou simulação.' }
    ],
    jurisprudence: 'Súmula 555 do STJ.',
    professorTip: 'Decadência no Tributo por Homologação: PAGOU A MENOR (sem fraude) = 5 anos do FATO GERADOR (Art. 150, § 4º). NÃO PAGOU NADA (nem declarou) ou TEVE FRAUDE = 5 anos do 1º DIA DO EXERCÍCIO SEGUINTE (Art. 173, I)!'
  },
  {
    id: 'trib_ext_04',
    exam: 'Prova Semestral Faculdade de Direito - Direito Tributário',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Declaração do Contribuinte e Súmula 436 do STJ',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Determinada empresa entregou tempestivamente a Guia de Informação e Apuração do ICMS (GIA) confessando um débito tributário de R$ 100.000,00, mas não realizou qualquer pagamento na data de vencimento. Um ano depois, sem que o Fisco tenha emitido qualquer notificação formal de lançamento de ofício, a Procuradoria inscreveu o valor em dívida ativa e ajuizou execução fiscal. Segundo a Súmula 436 do STJ:`,
    options: [
      { letter: 'A', text: 'A execução fiscal é nula porque faltou prévio processo administrativo e notificação de lançamento. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' },
      { letter: 'B', text: 'A entrega de declaração pelo contribuinte reconhecendo débito fiscal constitui o crédito tributário, dispensada qualquer outra providência por parte do Fisco.' },
      { letter: 'C', text: 'A confissão em gia gera apenas presunção relativa, impedindo inscrição imediata em dívida ativa, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' },
      { letter: 'D', text: 'O contribuinte tem direito à expedição de Certidão Negativa de Débitos enquanto não houver lançamento de ofício, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos da Súmula 436 do STJ: "A entrega de declaração pelo contribuinte reconhecendo débito fiscal constitui o crédito tributário, dispensada qualquer outra providência por parte do Fisco". Com isso, não há mais falar em decadência (o crédito já está constituído!), iniciando-se imediatamente a contagem do prazo prescricional de 5 anos para a execução fiscal a partir do vencimento ou da entrega da declaração (o que ocorrer por último).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A própria declaração do contribuinte equivale ao lançamento (Súmula 436 STJ).' },
      { letter: 'C', explanation: 'Incorreta. Autoriza inscrição imediata em dívida ativa e execução fiscal.' },
      { letter: 'D', explanation: 'Incorreta. Havendo débito declarado e não pago sem suspensão de exigibilidade, não cabe CND nem CPEN (Súmula 446 STJ exige penhora/suspensão).' }
    ],
    statuteReferences: [
      { code: 'Código Tributário Nacional (CTN)', article: 'Art. 150 e Art. 174', textSnippet: 'A ação para a cobrança do crédito tributário prescreve em cinco anos, contados da data da sua constituição definitiva.' }
    ],
    jurisprudence: 'Súmula 436 do STJ.',
    professorTip: 'Súmula 436 STJ: Declarou e NÃO pagou (DCTF, GIA, GFIP) = Crédito JÁ ESTÁ CONSTITUÍDO! Não tem decadência; já começa a correr a PRESCRIÇÃO de 5 anos!'
  },
  {
    id: 'trib_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Responsabilidade Tributária dos Sócios e Dissolução Irregular (Súmulas 430 e 435 STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Execução fiscal foi proposta contra sociedade limitada comercial para cobrança de ICMS declarado e não pago. Durante a tramitação, o oficial de justiça certificou que a empresa fechou as portas sem comunicar aos órgãos competentes nem deixar bens, caracterizando encerramento irregular de atividades. Diante das Súmulas 430 e 435 do STJ:`,
    options: [
      { letter: 'A', text: 'O simples inadimplemento da obrigação tributária basta para responsabilizar pessoalmente os sócios gerentes, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' },
      { letter: 'B', text: 'O inadimplemento por si só não gera responsabilidade solidária do sócio-gerente, mas presume-se dissolvida irregularmente a empresa que deixar de funcionar no seu domicílio fiscal sem comunicação aos órgãos competentes, legitimando o redirecionamento da execução fiscal para o sócio-gerente.' },
      { letter: 'C', text: 'O redirecionamento atinge inclusive sócios meramente cotistas sem poderes de gerência, observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' },
      { letter: 'D', text: 'Para redirecionar a execução fiscal por dissolução irregular é necessária a instauração prévia de IDPJ do CPC em todos os casos de redirecionamento de sócio-gerente constante na CDA ou por art. 135 CTN, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' }
    ],
    correctAnswer: 'B',
    justification: `O binômio clássico das Súmulas do STJ no art. 135, III, do CTN: pela Súmula 430, "O inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade solidária do sócio-gerente"; contudo, pela Súmula 435, "Presume-se dissolvida irregularmente a empresa que deixar de funcionar no seu domicílio fiscal, sem comunicação aos órgãos competentes, legitimando o redirecionamento da execução fiscal para o sócio-gerente" (que exercia a administração na época da dissolução irregular — Tema 981 STJ).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Viola frontalmente a Súmula 430 do STJ.' },
      { letter: 'C', explanation: 'Incorreta. Atinge apenas os diretores, gerentes ou representantes com poder de gestão (art. 135, III, CTN).' },
      { letter: 'D', explanation: 'Incorreta. O STJ (Tema 962 / 981) entende que a responsabilidade direta do art. 135 CTN prescinde de IDPJ quando imputada diretamente ao administrador infrator (IDPJ se aplica em caso de grupo econômico / confusão patrimonial não prevista na CDA).' }
    ],
    statuteReferences: [
      { code: 'Código Tributário Nacional (CTN)', article: 'Art. 135, III', textSnippet: 'São pessoalmente responsáveis pelos créditos correspondentes a obrigações tributárias resultantes de atos praticados com excesso de poderes ou infração de lei, contrato social ou estatutos: (...) III - os diretores, gerentes ou representantes de pessoas jurídicas de direito privado.' }
    ],
    jurisprudence: 'Súmulas 430 e 435 do STJ.',
    professorTip: 'Súmula 430 STJ = Não pagar tributo sozinho NÃO autoriza cobrar do sócio! Súmula 435 STJ = Fechar as portas sem dar baixa (dissolução irregular) = Infração à lei, pode redirecionar para o sócio-gerente da época!'
  },
  {
    id: 'trib_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Suspensão da Exigibilidade vs Extinção vs Exclusão (Arts. 151, 156 e 175 CTN)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Um contribuinte que questiona judicialmente determinado imposto federal pretende obter Certidão Positiva com Efeitos de Negativa (CPEN) para participar de licitação pública. Para suspender a exigibilidade do crédito tributário com base no Art. 151 do CTN e Súmula 112 do STJ, o contribuinte deverá:`,
    options: [
      { letter: 'A', text: 'Apresentar fiança bancária ou seguro garantia no processo judicial, o que já suspende a exigibilidade do crédito tributário, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador.' },
      { letter: 'B', text: 'Realizar o depósito do montante integral em dinheiro, ou obter concessão de medida liminar em mandado de segurança ou tutela provisória em outra ação judicial, além das hipóteses de parcelamento ou moratória.' },
      { letter: 'C', text: 'Requerer anistia judicial mediante simples petição inicial, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' },
      { letter: 'D', text: 'Ajuizar ação anulatória sem tutela liminar nem depósito integral, com impedimento à fruição imediata de imunidade ou isenção condicionada no caso concreto.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 151 do CTN traz rol taxativo de causas de suspensão da exigibilidade ("MO.DE.RE.CO.PA"): Moratória; Depósito do seu montante integral; Reclamações e recursos administrativos; Concessão de liminar em MS; Concessão de liminar/tutela em outras ações; Parcelamento. Pela Súmula 112 do STJ, o depósito somente suspende a exigibilidade se for INTEGRAL e EM DINHEIRO (fiança bancária e seguro garantia apenas garantem a execução fiscal para fins de CPEN do art. 206, mas NÃO suspendem a exigibilidade!).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Fiança bancária e seguro garantia garantem a execução (permitindo CPEN se penhorados/aceitos na execução), mas não constam do art. 151 do CTN (Súmula 112 STJ exige depósito integral em dinheiro).' },
      { letter: 'C', explanation: 'Incorreta. Anistia é causa de EXCLUSÃO (art. 175) e depende de lei específica.' },
      { letter: 'D', explanation: 'Incorreta. O mero ajuizamento de ação judicial sem liminar ou depósito integral não suspende o crédito (art. 38 LEF).' }
    ],
    statuteReferences: [
      { code: 'Código Tributário Nacional (CTN)', article: 'Art. 151', textSnippet: 'Suspendem a exigibilidade do crédito tributário: I - moratória; II - o depósito do seu montante integral; III - as reclamações e os recursos, nos termos das leis reguladoras do processo tributário administrativo; IV - a concessão de medida liminar em mandado de segurança; V - a concessão de medida liminar ou de tutela antecipada... VI - o parcelamento.' }
    ],
    jurisprudence: 'Súmula 112 do STJ.',
    professorTip: 'Mnemônico infalível do Art. 151 CTN (Suspensão): MO-DE-RE-CO-PA (MOratória, DEpósito integral em dinheiro, REcurso administrativo, COncessão de liminar/tutela, PArcelamento)! EXCLUSÃO (Art. 175) = Isenção e Anistia!'
  },
  {
    id: 'trib_ext_07',
    exam: 'Concurso Procuradoria / Magistratura - Direito Tributário',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'ITBI - Base de Cálculo (Tema 1113 STJ) e Momento do Fato Gerador (STF)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Pedro firmou compromisso particular de compra e venda de imóvel urbano pelo valor real de mercado de R$ 600.000,00. O Município exigiu o pagamento antecipado do ITBI já na lavratura do contrato particular, arbitrando unilateralmente como base de cálculo o valor venal de referência de R$ 850.000,00 fixado em decreto municipal, superior ao declarado por Pedro e superior ao valor do IPTU. À luz da jurisprudência do STF e do STJ (Tema 1113):`,
    options: [
      { letter: 'A', text: 'O fato gerador do ITBI ocorre no momento da assinatura da escritura pública ou contrato de gaveta, antes mesmo do registro imobiliário, observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais.' },
      { letter: 'B', text: 'O fato gerador do ITBI ocorre somente com a efetiva transferência da propriedade imobiliária mediante registro no Cartório de Registro de Imóveis, e a base de cálculo é o valor do imóvel transmitido em condições normais de mercado.' },
      { letter: 'C', text: 'A base de cálculo do ITBI deve ser obrigatoriamente idêntica ao valor venal do IPTU, com exigibilidade imediata do tributo no mesmo exercício financeiro sem anterioridade.' },
      { letter: 'D', text: 'O Município pode arbitrar unilateralmente o valor de referência sem processo administrativo contraditório, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' }
    ],
    correctAnswer: 'B',
    justification: `O STF (ARE 1.294.969 - Tema 1124) consolidou que o fato gerador do ITBI somente ocorre com a efetiva transferência da propriedade imobiliária, que se dá pelo REGISTRO em cartório (não no compromisso particular). E o STJ (REsp 1.937.821 - Tema 1113) fixou que: (a) a base de cálculo do ITBI é o valor venal de mercado real do negócio; (b) não está vinculada à base do IPTU; (c) presume-se verdadeiro o valor declarado pelo contribuinte, só podendo o Fisco afastá-lo via processo administrativo individualizado (art. 148 CTN), sendo ilegal a tabela prévia unilateral ("valor venal de referência").`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Contraria o Tema 1124 do STF.' },
      { letter: 'C', explanation: 'Incorreta. Tema 1113 STJ distingue expressamente as bases de IPTU e ITBI.' },
      { letter: 'D', explanation: 'Incorreta. O arbitramento exige processo administrativo específico com contraditório (art. 148 CTN).' }
    ],
    statuteReferences: [
      { code: 'CTN', article: 'Art. 35, Art. 38 e Art. 148', textSnippet: 'A base de cálculo do imposto é o valor venal dos bens ou direitos transmitidos.' }
    ],
    jurisprudence: 'STF Tema 1124 e STJ Tema 1113.',
    professorTip: 'Combo imobiliário de ITBI: Fato gerador = REGISTRO no Cartório (Tema 1124 STF)! Base de cálculo = Valor de mercado declarado (Tema 1113 STJ), Município NÃO pode impor tabela fixa sem processo do art. 148 CTN!'
  },
  {
    id: 'trib_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Substituição Tributária Progressiva ("Para Frente") - Restituição (Tema 201 STF)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um posto de combustíveis adquire gasolina submetida ao regime de substituição tributária progressiva ("para frente"), tendo sido o ICMS retido antecipadamente pela refinaria com base em uma pauta fiscal presumida de R$ 6,50 por litro. Na venda ao consumidor final, porém, o posto praticou preço efetivo menor, de R$ 5,80 por litro. Conforme a tese de Repercussão Geral do STF (RE 593.849 - Tema 201):`,
    options: [
      { letter: 'A', text: 'A base de cálculo presumida é definitiva, cabendo restituição apenas se a operação final jamais se realizar, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' },
      { letter: 'B', text: 'É devida a restituição da diferença do ICMS pago a mais no regime de substituição tributária para a frente se a base de cálculo efetiva da operação for inferior à presumida.' },
      { letter: 'C', text: 'O regime de substituição tributária para frente foi declarado inconstitucional pelo STF, com impedimento à fruição imediata de imunidade ou isenção condicionada no caso concreto. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' },
      { letter: 'D', text: 'Somente a refinaria substituta pode pleitear a restituição, nunca o posto substituído, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador.' }
    ],
    correctAnswer: 'B',
    justification: `No RE 593.849 (Tema 201), o STF superou antigo precedente e firmou que: "É devida a restituição da diferença do Imposto sobre Circulação de Mercadorias e Serviços (ICMS) pago a mais no regime de substituição tributária para a frente se a base de cálculo efetiva da operação for inferior à presumida".`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Esse era o entendimento antigo (ADI 1851) expressamente superado pelo Tema 201 STF.' },
      { letter: 'C', explanation: 'Incorreta. A substituição para frente é constitucional (art. 150, § 7º, CF/88).' },
      { letter: 'D', explanation: 'Incorreta. O substituído tributário (que suportou o encargo na operação final) tem legitimidade para pleitear a restituição.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 150, § 7º', textSnippet: 'A lei poderá atribuir a sujeito passivo de obrigação tributária a condição de responsável pelo pagamento de imposto ou contribuição, cujo fato gerador deva ocorrer posteriormente, assegurada a imediata e preferencial restituição da quantia paga, caso não se realizem o fato gerador presumido.' }
    ],
    jurisprudence: 'STF Tema 201 (RE 593.849).',
    professorTip: 'Tema 201 STF: Na substituição tributária para frente, se vendeu mais barato que o preço presumido pelo Fisco = TEM DIREITO à restituição da diferença!'
  },
  {
    id: 'trib_ext_09',
    exam: 'Prova Semestral Faculdade de Direito - Direito Tributário',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Repartição de Receitas Tributárias Constitucionais (Arts. 157 a 159 CF/88)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Sobre a repartição constitucional das receitas tributárias entre os entes federativos prevista nos Arts. 157 e 158 da Constituição Federal de 1988, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Pertence aos Municípios 50% do produto da arrecadação do ITR em regra geral, podendo chegar a 100% caso o Município opte por fiscalizá-lo e cobrá-lo na forma da lei.' },
      { letter: 'B', text: 'Pertence aos Municípios 25% do IPVA arrecadado pelo Estado, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' },
      { letter: 'C', text: 'Pertence aos Estados 50% do ICMS arrecadado e 50% aos Municípios, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' },
      { letter: 'D', text: 'O imposto de renda retido na fonte pelos Municípios sobre rendimentos pagos a seus servidores pertence integralmente à União, observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais.' }
    ],
    correctAnswer: 'A',
    justification: `Nos termos do art. 158, II, da CF/88: pertence aos Municípios 50% do produto da arrecadação do ITR relativamente aos imóveis neles situados — cabendo a TOTALIDADE (100%) na hipótese da opção do art. 153, § 4º, III (quando o Município fiscaliza e cobra o ITR). Já o IPVA reparte-se 50% ao Município do licenciamento (art. 158, III), o ICMS 25% aos Municípios (art. 158, IV) e o IRRF de servidores estaduais/municipais pertence integralmente ao respectivo Estado/Município (art. 157, I e 158, I).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Do IPVA pertencem aos Municípios 50% (cinquenta por cento).' },
      { letter: 'C', explanation: 'Incorreta. Do ICMS pertencem aos Municípios 25% (vinte e cinco por cento).' },
      { letter: 'D', explanation: 'Incorreta. O IRRF sobre rendimentos pagos diretamente pelos Estados, DF e Municípios pertence integralmente a esses entes (arts. 157, I e 158, I).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 158, I a IV', textSnippet: 'Pertencem aos Municípios: I - o produto da arrecadação do imposto da União sobre renda e proventos de qualquer natureza, incidente na fonte, sobre rendimentos pagos, a qualquer título, por eles... II - cinquenta por cento do produto da arrecadação do imposto da União sobre a propriedade territorial rural...' }
    ],
    professorTip: 'Percentuais que pertencem aos MUNICÍPIOS (Art. 158 CF): IRRF dos seus pagamentos = 100%; ITR = 50% (ou 100% se fiscalizar/cobrar); IPVA = 50%; ICMS = 25%!'
  },
  {
    id: 'trib_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Prescrição Intercorrente na Execução Fiscal (Art. 40 LEF e Tema 566-571 STJ)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Em execução fiscal, não foram localizados o devedor nem bens penhoráveis. O juiz determinou a suspensão do processo pelo prazo de 1 ano (Art. 40, § 2º, da Lei nº 6.830/80). Decorrido o prazo de 1 ano de suspensão sem manifestação da Fazenda Pública nem localização de bens, e transcorridos mais 5 anos de arquivamento provisório, o juiz decretou a prescrição intercorrente. Segundo a Súmula 314 do STJ e os Temas 566-571:`,
    options: [
      { letter: 'A', text: 'O juiz não pode reconhecer de ofício a prescrição intercorrente na execução fiscal, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' },
      { letter: 'B', text: 'Em execução fiscal, não localizados bens penhoráveis, suspende-se o processo por um ano, findo o qual se inicia o prazo da prescrição quinquenal intercorrente automaticamente, independentemente de intimação ou despacho formal de arquivamento.' },
      { letter: 'C', text: 'A apresentação de pedido de nova tentativa de penhora infrutífera sem encontrar bens interrompe o prazo da prescrição intercorrente, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' },
      { letter: 'D', text: 'A prescrição intercorrente tributária é de 3 anos, observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo a Súmula 314 do STJ e a tese vinculante do REsp 1.340.553/RS (Temas 566-571): o prazo de 1 ano de suspensão inicia-se automaticamente com a ciência da Fazenda da não localização do devedor ou bens; findo 1 ano, inicia-se AUTOMATICAMENTE o prazo prescricional de 5 anos (sem depender de despacho de arquivamento!). Ademais, petições com diligências infrutíferas não interrompem a prescrição intercorrente — somente a efetiva constrição patrimonial ou citação válida tem esse efeito — e o juiz pode declará-la de ofício, ouvida previamente a Fazenda (art. 40, § 4º, LEF).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O art. 40, § 4º, LEF autoriza expressamente a decretação de ofício após oitiva da Fazenda.' },
      { letter: 'C', explanation: 'Incorreta. Tema 568/569 STJ: só a efetiva penhora/constrição de bens ou citação interrompe a prescrição intercorrente.' },
      { letter: 'D', explanation: 'Incorreta. O prazo é de 5 anos após o ano de suspensão (1 + 5 anos).' }
    ],
    statuteReferences: [
      { code: 'Lei 6.830/80 (LEF)', article: 'Art. 40, §§ 2º e 4º', textSnippet: 'Decorrido o prazo máximo de 1 (um) ano, sem que seja localizado o devedor ou encontrados bens penhoráveis, o Juiz ordenará o arquivamento dos autos. § 4º Se da decisão que ordenar o arquivamento tiver decorrido o prazo prescricional, o juiz, depois de ouvida a Fazenda Pública, poderá, de ofício, reconhecer a prescrição intercorrente...' }
    ],
    jurisprudence: 'Súmula 314 do STJ e Temas 566-571 STJ.',
    professorTip: 'Prescrição Intercorrente Fiscal (1 + 5): Não achou bens -> Fisco intimado -> corre 1 ano de suspensão automático -> findo esse 1 ano, corre automaticamente 5 anos de prescrição intercorrente!'
  },
  {
    id: 'trib_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Exceção de Pré-Executividade na Execução Fiscal (Súmula 393 STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Executado fiscalmente por débito de IPTU de exercício já prescrito há sete anos, o contribuinte não possui bens para oferecer em garantia do juízo visando aos embargos à execução. Diante disso, pretende arguir a prescrição diretamente nos autos sem garantir o juízo. À luz da Súmula 393 do STJ:`,
    options: [
      { letter: 'A', text: 'Toda e qualquer defesa em execução fiscal depende de garantia prévia do juízo, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador.' },
      { letter: 'B', text: 'A exceção de pré-executividade é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que não demandem dilação probatória, dispensando a garantia do juízo.' },
      { letter: 'C', text: 'A prescrição exige perícia contábil complexa, não cabendo em exceção de pré-executividade, em observância ao princípio da estrita legalidade tributária e da tipicidade cerrada fiscal.' },
      { letter: 'D', text: 'Se acolhida a exceção de pré-executividade, a Fazenda Pública fica isenta de honorários advocatícios, observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' }
    ],
    correctAnswer: 'B',
    justification: `Consoante a Súmula 393 do STJ: "A exceção de pré-executividade é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que não demandem dilação probatória". Prescrição, decadência, ilegitimidade passiva evidente e imunidade documental patente dispensam garantia do juízo e desafiam EPE.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Os embargos à execução exigem garantia (art. 16, § 1º LEF), mas a EPE dispensa garantia.' },
      { letter: 'C', explanation: 'Incorreta. Se a prescrição decorre do simples exame de datas nos autos (sem dilação probatória), cabe perfeitamente via EPE.' },
      { letter: 'D', explanation: 'Incorreta. Acolhida a EPE com extinção da execução fiscal, são devidos honorários sucumbenciais pela Fazenda (princípio da causalidade).' }
    ],
    statuteReferences: [
      { code: 'Lei 6.830/80 (LEF)', article: 'Art. 16, § 1º (interpretação jurisprudencial)', textSnippet: 'Não são admissíveis embargos do executado antes de garantida a execução.' }
    ],
    jurisprudence: 'Súmula 393 do STJ.',
    professorTip: 'Súmula 393 STJ: Embargos = PRECISA garantir o juízo. Exceção de Pré-Executividade (EPE) = NÃO precisa garantir o juízo, desde que seja matéria de ordem pública/conhecível de ofício SEM necessidade de produzir provas!'
  },
  {
    id: 'trib_ext_12',
    exam: 'Prova Semestral Faculdade de Direito - Direito Tributário',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Denúncia Espontânea e Súmula 360 do STJ',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Um contribuinte percebeu que deixou de declarar e recolher determinado imposto estadual antes de qualquer procedimento fiscalizatório da Secretaria da Fazenda. Decidiu apresentar declaração retificadora e pagar integralmente o tributo atualizado com juros moratórios, mas o Fisco exigiu ainda a multa moratória de 20%. À luz do Art. 138 do CTN e da Súmula 360 do STJ:`,
    options: [
      { letter: 'A', text: 'A denúncia espontânea exclui exclusivamente a multa punitiva, mantendo-se a multa moratória, com responsabilidade solidária automática dos sócios e administradores da pessoa jurídica.' },
      { letter: 'B', text: 'Se o tributo não havia sido declarado previamente e foi integralmente pago com juros antes do início de qualquer procedimento administrativo ou medida de fiscalização, a denúncia espontânea afasta tanto a multa punitiva quanto a multa moratória.' },
      { letter: 'C', text: 'O benefício da denúncia espontânea aplica-se mesmo quando o débito já estava declarado em gia/dctf e pago em atraso, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' },
      { letter: 'D', text: 'O parcelamento do débito também produz os efeitos da denúncia espontânea para afastar multas, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 138 do CTN e jurisprudência do STJ, quando o contribuinte confessa infração desconhecida pelo Fisco (tributo NÃO declarado antes) e paga integralmente o tributo + juros antes de qualquer fiscalização, há denúncia espontânea que afasta TODAS as multas (punitiva e moratória). Contudo, pela Súmula 360 do STJ, "O benefício da denúncia espontânea não se aplica aos tributos sujeitos a lançamento por homologação regularmente declarados, mas pagos a destempo" (e o parcelamento não equivale a pagamento integral, art. 155-A, § 1º CTN).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O STJ pacifica que a denúncia espontânea afasta tanto a multa punitiva quanto a moratória.' },
      { letter: 'C', explanation: 'Incorreta. A Súmula 360 do STJ nega denúncia espontânea se o tributo já foi declarado e apenas pago em atraso.' },
      { letter: 'D', explanation: 'Incorreta. Parcelamento suspende a exigibilidade, não extingue o débito, logo não configura denúncia espontânea (STJ Tema 101).' }
    ],
    statuteReferences: [
      { code: 'Código Tributário Nacional (CTN)', article: 'Art. 138', textSnippet: 'A responsabilidade é excluída pela denúncia espontânea da infração, acompanhada, se for o caso, do pagamento do tributo devido e dos juros de mora...' }
    ],
    jurisprudence: 'Súmula 360 do STJ.',
    professorTip: 'Denúncia Espontânea (Art. 138 CTN): Tira TODAS as multas (punitiva e moratória), se pagar TUDO à vista (parcelamento não vale!) ANTES da fiscalização e desde que NÃO tenha declarado o débito antes (Súmula 360 STJ)!'
  },
  {
    id: 'trib_ext_13',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'IPTU Progressivo, Alíquotas Diferenciadas e Súmula 668 STF',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um Município editou lei ordinária instituindo alíquotas progressivas do IPTU em razão do valor do imóvel, além de alíquotas diferentes conforme a localização e o uso (residencial ou comercial) do imóvel, sem se tratar de sanção urbanística pelo não cumprimento da função social da propriedade. À luz do Art. 156, § 1º, da CF/88 (após EC 29/2000):`,
    options: [
      { letter: 'A', text: 'É inconstitucional qualquer progressividade fiscal de IPTU baseada no valor do imóvel, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal. A definição impacta diretamente os limites de cobrança e as garantias do contribuinte.' },
      { letter: 'B', text: 'Sem prejuízo da progressividade extrafiscal no tempo, o IPTU pode ser progressivo em razão do valor do imóvel e ter alíquotas diferentes de acordo com a localização e o uso do imóvel.' },
      { letter: 'C', text: 'O Município pode atualizar a base de cálculo do IPTU por simples decreto muito acima dos índices oficiais de correção monetária, com possibilidade de instituição ou majoração de alíquota mediante ato normativo infralegal.' },
      { letter: 'D', text: 'A progressividade no tempo (extrafiscal) exige apenas decreto do prefeito, dispensando plano diretor, com exigibilidade imediata do tributo no mesmo exercício financeiro sem anterioridade.' }
    ],
    correctAnswer: 'B',
    justification: `Desde a Emenda Constitucional 29/2000 (que alterou o art. 156, § 1º, da CF/88), o IPTU admite expressamente: (i) progressividade fiscal em razão do valor do imóvel (inciso I); e (ii) alíquotas diferenciadas por localização e uso (inciso II), além da progressividade extrafiscal no tempo (art. 182, § 4º, II). A Súmula 668 do STF refere-se apenas às leis ANTERIORES à EC 29/2000! Quanto à base de cálculo, a Súmula 160 do STJ proíbe atualização por decreto acima da correção monetária oficial (exige lei).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A EC 29/2000 passou a autorizar expressamente a progressividade em razão do valor do imóvel.' },
      { letter: 'C', explanation: 'Incorreta. Súmula 160 do STJ: é defeso ao Município atualizar o IPTU mediante decreto em percentual superior ao índice oficial de correção monetária.' },
      { letter: 'D', explanation: 'Incorreta. A progressividade extrafiscal no tempo exige lei específica para área incluída no plano diretor.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 156, § 1º, I e II', textSnippet: 'Sem prejuízo da progressividade no tempo a que se refere o art. 182, § 4º, inciso II, o imposto previsto no inciso I poderá: I - ser progressivo em razão do valor do imóvel; e II - ter alíquotas diferentes de acordo com a localização e o uso do imóvel.' }
    ],
    jurisprudence: 'Súmula 668 do STF e Súmula 160 do STJ.',
    professorTip: 'IPTU hoje (pós-EC 29/2000): Pode ser progressivo pelo VALOR do imóvel, diferenciado por LOCALIZAÇÃO/USO e progressivo no TEMPO! E correção por DECRETO só até o índice de inflação (Súmula 160 STJ)!'
  },
  {
    id: 'trib_ext_14',
    exam: 'Concurso Procuradoria / Fiscal - Direito Tributário',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Reforma Tributária (EC 132/2023) - IBS, CBS e Imposto Seletivo',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A Emenda Constitucional nº 132/2023 promoveu ampla reforma do sistema tributário nacional sobre o consumo, instituindo o Imposto sobre Bens e Serviços (IBS), a Contribuição sobre Bens e Serviços (CBS) e o Imposto Seletivo (IS). Com base no texto constitucional reformado:`,
    options: [
      { letter: 'A', text: 'O ibs terá competência compartilhada entre Estados, Distrito Federal e Municípios, regido por lei complementar única e baseado no princípio da não cumulatividade plena e tributação no destino.' },
      { letter: 'B', text: 'A cbs será instituída pelos Municípios em substituição ao IPTU e ao ITBI, observadas as limitações ao poder de tributar e as normas gerais tributárias nacionais.' },
      { letter: 'C', text: 'O Imposto Seletivo incidirá cumulativamente sobre exportações e energia elétrica essencial, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal. A definição impacta diretamente os limites de cobrança e as garantias do contribuinte.' },
      { letter: 'D', text: 'A EC 132/2023 extinguiu imediatamente o ICMS e o ISS no mesmo ano de 2023 sem período de transição, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' }
    ],
    correctAnswer: 'A',
    justification: `A EC 132/2023 criou o IVA Dual brasileiro: (i) IBS (art. 156-A CF/88), de competência compartilhada entre Estados, DF e Municípios, substituindo gradualmente o ICMS e o ISS com legislação uniforme, não cumulatividade plena e cobrança no local de destino; (ii) CBS federal (substituindo PIS/COFINS); e (iii) Imposto Seletivo federal sobre bens e serviços prejudiciais à saúde ou ao meio ambiente (art. 153, VIII), não incidente sobre exportações nem sobre energia elétrica/telecomunicações.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A CBS é contribuição federal (art. 195, V) que substitui PIS e COFINS; IPTU e ITBI permanecem.' },
      { letter: 'C', explanation: 'Incorreta. Exportações e operações com energia elétrica e telecomunicações são imunes ao Imposto Seletivo (art. 153, § 6º, I).' },
      { letter: 'D', explanation: 'Incorreta. A EC 132/2023 estabeleceu transição gradual de vários anos (2026 a 2033) no ADCT.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988 (EC 132/2023)', article: 'Art. 156-A e Art. 153, VIII', textSnippet: 'Lei complementar instituirá imposto sobre bens e serviços de competência compartilhada entre Estados, Distrito Federal e Municípios.' }
    ],
    professorTip: 'EC 132/2023 (Reforma Tributária): IBS (Estados + Municípios) substitui ICMS + ISS; CBS (União) substitui PIS/COFINS; IS (União) = "imposto do pecado" (cigarro, bebidas, etc.), mas NÃO incide em exportação!'
  },
  {
    id: 'trib_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Repetição de Indébito Tributário - Prazo e Legitimidade (Arts. 165 a 168 CTN)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um contribuinte pagou indevidamente um tributo sujeito a lançamento por homologação em 10/06/2020 por erro na interpretação da lei fiscal. Desejando ajuizar ação de repetição de indébito tributário, deve observar o prazo prescricional do Art. 168 do CTN e da Lei Complementar nº 118/2005, que é de:`,
    options: [
      { letter: 'A', text: '10 anos contados da data do pagamento indevido, com preservação da natureza jurídica específica determinada pelo respectivo fato gerador. Essa regra orienta a constituição regular do crédito e a fiscalização fazendária.' },
      { letter: 'B', text: '5 anos contados da data da extinção do crédito tributário, que no tributo sujeito a lançamento por homologação ocorre no momento do pagamento antecipado.' },
      { letter: 'C', text: '2 anos contados da decisão administrativa que indeferir a restituição em qualquer hipótese, sujeita à repartição constitucional de receitas e à competência tributária do ente federado.' },
      { letter: 'D', text: '3 anos segundo o Código Civil para enriquecimento sem causa, com reflexo direto sobre os prazos de decadência para constituição e prescrição fiscal.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 168, I, do CTN c/c art. 3º da LC 118/2005 (e tese do STF no RE 566.621), o direito de pleitear a restituição extingue-se com o decurso do prazo de 5 (cinco) anos contados da extinção do crédito tributário — considerando-se extinto o crédito no tributo sujeito a lançamento por homologação NO MOMENTO DO PAGAMENTO ANTECIPADO. (Obs.: 2 anos do art. 169 aplicam-se à ação anulatória de decisão administrativa que denegar restituição).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O prazo de 10 anos (5+5) foi encerrado pela LC 118/2005 para pagamentos posteriores a 09/06/2005.' },
      { letter: 'C', explanation: 'Incorreta. O prazo de 2 anos do art. 169 é específico para anular decisão administrativa denegatória após já ter sido pedido na via administrativa dentro dos 5 anos.' },
      { letter: 'D', explanation: 'Incorreta. Matéria tributária segue a regra especial de 5 anos do CTN.' }
    ],
    statuteReferences: [
      { code: 'CTN e LC 118/2005', article: 'Art. 168, I CTN e Art. 3º LC 118/05', textSnippet: 'O direito de pleitear a restituição extingue-se com o decurso do prazo de 5 (cinco) anos, contados: I - nas hipótese dos incisos I e II do art. 165, da data da extinção do crédito tributário.' }
    ],
    professorTip: 'Repetição de Indébito (Art. 168 CTN): 5 anos contados do PAGAMENTO INDEVIDO (inclusive nos tributos por homologação após a LC 118/2005)!'
  }
];
