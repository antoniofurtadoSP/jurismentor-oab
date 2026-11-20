import { LegalQuestion } from '../../types';

export const EMPRESARIAL_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab39_emp_01',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Empresarial',
    topic: 'Recuperação Judicial - Stay Period e Prorrogação (Lei 11.101/05 reformada)',
    difficulty: 'Difícil',
    statement: `Sociedade empresária em crise econômico-financeira teve seu pedido de recuperação judicial deferido pelo juízo competente, com a suspensão do curso de todas as ações e execuções contra a devedora pelo prazo de 180 dias (stay period). Escoado o prazo originário de 180 dias, o plano de recuperação ainda não havia sido submetido à Assembleia Geral de Credores por motivos imputáveis unicamente à morosidade do aparelho judiciário e sem culpa da devedora.
Considerando a Lei nº 11.101/2005, com as alterações da Lei nº 14.112/2020:`,
    options: [
      { letter: 'A', text: 'O stay period poderá ser prorrogado por igual período, uma única vez, de forma excepcional, desde que o devedor não haja concorrido com culpa para a mora.' },
      { letter: 'B', text: 'O stay period é improrrogável em qualquer hipótese, convolando-se automaticamente o processo em falência.' },
      { letter: 'C', text: 'O prazo de suspensão pode ser renovado indefinidamente por decisão monocrática do Administrador Judicial.' },
      { letter: 'D', text: 'As execuções trabalhistas e fiscais nunca são suspensas durante o stay period.' }
    ],
    correctAnswer: 'A',
    justification: `Com a reforma da Lei 14.112/2020, o art. 6º, § 4º da Lei nº 11.101/2005 passou a dispor expressamente que o prazo de suspensão de 180 dias (stay period) pode ser prorrogado por igual período (mais 180 dias), uma única vez, de forma excepcional, desde que o devedor não haja concorrido com culpa com o atraso no curso do procedimento.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A lei autoriza expressamente a prorrogação por igual período uma única vez.' },
      { letter: 'C', explanation: 'Incorreta. A prorrogação exige decisão do juiz competente, não mero ato do Administrador Judicial, e é limitada a uma única prorrogação.' },
      { letter: 'D', explanation: 'Incorreta. As execuções trabalhistas ficam suspensas durante o stay period (ressalvada a apuração do crédito na Justiça do Trabalho).' }
    ],
    statuteReferences: [
      { code: 'Lei nº 11.101/2005 (LFRE)', article: 'Art. 6º, § 4º', textSnippet: 'O prazo de suspensão de que trata o caput deste artigo não excederá a 180 (cento e oitenta) dias, admitida, extraordinariamente, uma única prorrogação por igual período, desde que o devedor não haja concorrido com culpa...' }
    ],
    professorTip: 'Stay Period da Recuperação Judicial (Art. 6º, § 4º): 180 dias + UMA ÚNICA prorrogação de mais 180 dias se a empresa não tiver culpa pelo atraso!'
  },
  {
    id: 'oab38_emp_02',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Empresarial',
    topic: 'Títulos de Crédito - Aval vs Fiança e Princípio da Autonomia',
    difficulty: 'Médio',
    statement: `Em nota promissória emitida regularmente por uma sociedade empresária em favor de instituição financeira, Roberto prestou aval em preto no anverso do título. Posteriormente, descobriu-se que a assinatura do sócio emitente da nota promissória era fruto de falsificação praticada por estelionatário (obrigação nula por falsidade de assinatura). O banco executou o avalista Roberto.
À luz do princípio da autonomia das obrigações cambiais e do Art. 899, § 2º do Código Civil e Lei Uniforme de Genebra (LUG):`,
    options: [
      { letter: 'A', text: 'O avalista Roberto continua obrigado ao pagamento, pois o aval é garantia autônoma e subsiste mesmo que nula a obrigação garantida, salvo se a nulidade decorrer de vício de forma.' },
      { letter: 'B', text: 'O aval segue a sorte do principal de forma acessória como a fiança, extinguindo-se a obrigação de Roberto em razão da falsidade originária.' },
      { letter: 'C', text: 'O avalista goza do benefício de ordem obrigatório para exigir a penhora prévia de bens do devedor principal.' },
      { letter: 'D', text: 'A nulidade da obrigação do emitente invalida integralmente o título cambial, exonerando todos os coobrigados.' }
    ],
    correctAnswer: 'A',
    justification: `Diferentemente da fiança (que é contrato acessório sujeito ao princípio da gravitação jurídica), o AVAL é declaração cambial unilateral, autônoma e substantiva. Conforme o art. 32 da Lei Uniforme de Genebra (LUG - Decreto 57.663/66) e o art. 899, § 2º do Código Civil, a obrigação do avalista mantém-se válida e eficaz mesmo quando a obrigação por ele garantida for nula por qualquer razão que não seja vício de forma intrínseco do título.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Quem é acessória é a FIANÇA. O AVAL é obrigação autônoma cambial.' },
      { letter: 'C', explanation: 'Incorreta. O avalista é devedor solidário e NÃO possui benefício de ordem.' },
      { letter: 'D', explanation: 'Incorreta. Pelo princípio da autonomia e independência das assinaturas, a falsidade de uma assinatura não invalida as demais.' }
    ],
    statuteReferences: [
      { code: 'Decreto 57.663/66 (LUG)', article: 'Art. 32', textSnippet: 'O dador de aval é responsável da mesma maneira que a pessoa por ele afiançada. A sua obrigação mantém-se, mesmo no caso de a obrigação que ele garantiu ser nula por qualquer razão que não seja um vício de forma.' },
      { code: 'Código Civil', article: 'Art. 899, § 2º', textSnippet: 'Subsiste a responsabilidade do avalista, ainda que nula a obrigação daquele a quem se equipara, a menos que a nulidade decorra de vício de forma.' }
    ],
    professorTip: 'Diferença brutal entre Aval e Fiança: Fiança é ACESSÓRIA (se a dívida é nula, a fiança cai). Aval é AUTÔNOMO: mesmo que a assinatura do devedor seja falsa, o avalista paga!'
  },
  {
    id: 'oab37_emp_03',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Empresarial',
    topic: 'Sociedade Limitada - Cessão de Quotas e Direito de Oposição',
    difficulty: 'Fácil',
    statement: `Em uma Sociedade Limitada composta por 3 sócios e com contrato social omisso sobre a cessão de quotas, o sócio Marcelo, detentor de 20% do capital social, pretende ceder integralmente suas quotas para um terceiro estranho ao quadro societário. O sócio majoritário, detentor de 55% do capital, manifestou formalmente sua oposição à entrada do terceiro estranho.
Segundo o Art. 1.057 do Código Civil:`,
    options: [
      { letter: 'A', text: 'A cessão para terceiro não poderá ser efetivada, pois o sócio com mais de um quarto (25%) do capital social manifestou oposição.' },
      { letter: 'B', text: 'Marcelo pode ceder livremente suas quotas a qualquer terceiro, pois a titularidade da quota confere direito de disposição absoluta.' },
      { letter: 'C', text: 'A oposição a terceiro exige unanimidade de todos os demais sócios.' },
      { letter: 'D', text: 'Apenas sócios com mais de 75% do capital poderiam vetar a cessão.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 1.057 do Código Civil preceitua que, na omissão do contrato social, o sócio pode ceder sua quota, total ou parcialmente, a quem seja sócio, independentemente de audiência dos outros, ou a ESTRANHO, se não houver oposição de titulares de mais de um quarto (mais de 25%) do capital social. Como o sócio que se opôs possui 55% do capital (muito superior a 25%), a cessão para o terceiro estranho é impedida.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Na sociedade limitada, prevalece o affectio societatis; para estranhos, titulares de mais de 25% podem vetar a entrada.' },
      { letter: 'C', explanation: 'Incorreta. Não se exige unanimidade, bastando mais de um quarto (25%) de oposição.' },
      { letter: 'D', explanation: 'Incorreta. O quórum de veto é de mais de 1/4 (25%), e não de 75%.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.057', textSnippet: 'Na omissão do contrato, o sócio pode ceder sua quota, total ou parcialmente, a quem seja sócio, independentemente de audiência dos outros, ou a estranho, se não se opuserem os titulares de mais de um quarto do capital social.' }
    ],
    professorTip: 'Regra de ouro da Cessão de Quotas na Ltda: Para outro sócio = LIVRE. Para estranho = Pode se NÃO houver veto de mais de 1/4 (25%) do capital social!'
  },
  {
    id: 'oab40_emp_04',
    exam: 'XL Exame de Ordem Unificado (OAB 40) - FGV / 2024',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Estabelecimento Empresarial - Trespasse e Cláusula de Não Restabelecimento',
    difficulty: 'Médio',
    statement: `Empresário alienou seu estabelecimento comercial (trespasse) para outro comerciante no mesmo bairro. No contrato de trespasse firmado entre as partes, não constou nenhuma cláusula a respeito de concorrência ou proibição de abertura de novo negócio pelo alienante. Três meses após a venda, o alienante abriu uma loja idêntica no mesmo quarteirão, desviando a clientela.
De acordo com o Art. 1.147 do Código Civil:`,
    options: [
      { letter: 'A', text: 'Não havendo autorização expressa no contrato, o alienante do estabelecimento não pode fazer concorrência ao adquirente nos cinco anos subsequentes à transferência.' },
      { letter: 'B', text: 'Como não havia cláusula de não concorrência, o alienante é livre para se restabelecer imediatamente em respeito à livre iniciativa.' },
      { letter: 'C', text: 'A proibição legal de concorrência vigora pelo prazo perpétuo de 20 anos.' },
      { letter: 'D', text: 'A vedação legal de concorrência aplica-se apenas no caso de arrendamento, mas não no trespasse definitivo.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 1.147 do Código Civil consagra a cláusula implícita de não restabelecimento: "Não havendo autorização expressa, o alienante do estabelecimento não pode fazer concorrência ao adquirente, nos cinco anos subseqüentes à transferência". Portanto, a proibição de concorrência é a REGRA GERAL da lei pelo prazo de 5 anos, necessitando de autorização expressa para ser afastada.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A regra do art. 1.147 do CC é a proibição legal de concorrência por 5 anos se o contrato for silente.' },
      { letter: 'C', explanation: 'Incorreta. O prazo legal é de 5 anos, não 20.' },
      { letter: 'D', explanation: 'Incorreta. O caput aplica-se à transferência (trespasse) e o parágrafo único estende a regra ao arrendamento ou usufruto.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.147', textSnippet: 'Não havendo autorização expressa, o alienante do estabelecimento não pode fazer concorrência ao adquirente, nos cinco anos subseqüentes à transferência.' }
    ],
    professorTip: 'Trespasse: Se o contrato NÃO falar nada, o vendedor NÃO PODE abrir concorrente por 5 ANOS! Para poder abrir concorrência, tem que ter autorização expressa no contrato!'
  },
  {
    id: 'oab38_emp_05',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Empresarial',
    topic: 'Títulos de Crédito - Letra de Câmbio, Nota Promissória e Aval vs. Fiança',
    difficulty: 'Fácil',
    statement: `Mariana figurou como avalista de uma nota promissória emitida por Bruno em favor de uma instituição financeira. Posteriormente, a obrigação principal constante do título de crédito revelou-se nula em virtude de incapacidade relativa do emitente não aparente no título, embora o título formalmente contenha todos os requisitos cambiários extrínsecos.
À luz do princípio da autonomia das obrigações cambiais e do Art. 899, § 2º do Código Civil (e Lei Uniforme de Genebra):`,
    options: [
      { letter: 'A', text: 'O aval mantém-se plenamente válido e eficaz, subsistindo a responsabilidade de Mariana, pois a obrigação do avalista é autônoma em relação à do avalizado, salvo vício de forma.' },
      { letter: 'B', text: 'O aval é extinto imediatamente, por ser obrigação estritamente acessória que segue a sorte da dívida principal (princípio da gravitação jurídica).' },
      { letter: 'C', text: 'Mariana pode invocar o benefício de ordem para que os bens do devedor principal sejam executados primeiro.' },
      { letter: 'D', text: 'O aval transmuta-se de pleno direito em fiança civil subordinada às regras do Código Civil.' }
    ],
    correctAnswer: 'A',
    justification: `O aval é dotado do atributo cambial da AUTONOMIA e SUBSTANTIAL INDEPENDÊNCIA (art. 899, § 2º do CC e art. 32 da LUG). A obrigação do avalista permanece válida ainda que a obrigação que ele garantiu seja nula por qualquer razão que não seja vício de forma intrínseco do próprio título. É a diferença fundamental em relação à fiança: a fiança é acessória (se a obrigação principal for nula, a fiança cai); o aval é autônomo (subsiste mesmo perante nulidade substancial da obrigação avalizada).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Quem segue a sorte do principal é a FIANÇA (acessória). O AVAL é autônomo.' },
      { letter: 'C', explanation: 'Incorreta. O avalista é devedor solidário e direto, não dispondo de benefício de ordem.' },
      { letter: 'D', explanation: 'Incorreta. Aval e fiança são institutos inconfundíveis com regimes jurídicos distintos.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 899, § 2º', textSnippet: 'Subsiste a responsabilidade do avalista, ainda que nula a obrigação daquele a quem se equipara, a menos que a nulidade decorra de vício de forma.' }
    ],
    professorTip: 'Diferença de ouro entre Aval e Fiança para a OAB: Fiança é ACESSÓRIA (tem benefício de ordem e cai se o principal for nulo). Aval é AUTÔNOMO (não tem benefício de ordem e continua de pé mesmo se a obrigação principal for nula)!'
  },
  {
    id: 'oab37_emp_06',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Empresarial',
    topic: 'Direito Falimentar - Pedido de Falência Fundado em Impontualidade Injustificada (Art. 94, I Lei 11.101/05)',
    difficulty: 'Médio',
    statement: `Credor munido de duplicatas mercantis vencidas, protestadas para fins falimentares e não pagas por sociedade empresária, cujo valor total soma 45 salários mínimos vigentes na data do pedido, pretende requerer a decretação da falência da devedora com base no art. 94, inciso I, da Lei nº 11.101/2005.
De acordo com os requisitos legais da impontualidade falimentar:`,
    options: [
      { letter: 'A', text: 'O pedido de falência é juridicamente viável, pois o valor dos títulos protestados supera o limite legal mínimo de 40 salários mínimos exigido pela Lei nº 11.101/2005.' },
      { letter: 'B', text: 'O pedido é nulo, pois a falência fundada em impontualidade exige valor mínimo superior a 100 salários mínimos.' },
      { letter: 'C', text: 'O pedido é inviável porque a duplicata não é título de crédito apto a embasar pedido falimentar.' },
      { letter: 'D', text: 'Apenas credores com garantia real podem ajuizar pedido de falência.' }
    ],
    correctAnswer: 'A',
    justification: `O Art. 94, inciso I da Lei nº 11.101/2005 (LFRE) prevê que será decretada a falência do devedor que, sem relevante razão de direito, não paga, no vencimento, obrigação líquida materializada em título ou títulos executivos protestados cuja soma ultrapasse o equivalente a 40 (quarenta) salários mínimos na data do pedido. Como a dívida líquida protestada atinge 45 salários mínimos, preenche rigorosamente o pressuposto objetivo.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O piso legal é de 40 salários mínimos, e não 100.' },
      { letter: 'C', explanation: 'Incorreta. A duplicata protestada acompanhada de comprovante de entrega de mercadorias é título executivo plenamente hábil.' },
      { letter: 'D', explanation: 'Incorreta. Qualquer credor quirografário ou privilegiado detentor de título protestado pode requerer a falência.' }
    ],
    statuteReferences: [
      { code: 'Lei nº 11.101/2005', article: 'Art. 94, I', textSnippet: 'Será decretada a falência do devedor que: I - sem relevante razão de direito, não paga, no vencimento, obrigação líquida materializada em título ou títulos executivos protestados cuja soma ultrapasse o equivalente a 40 (quarenta) salários-mínimos na data do pedido de falência;' }
    ],
    professorTip: 'Número mágico da falência por impontualidade: > 40 SALÁRIOS MÍNIMOS + Título Executivo + Protesto especial! Se a dívida for menor que 40 salários mínimos, o credor só pode cobrar via Execução comum, não pode pedir falência!'
  },
  {
    id: 'oab36_emp_07',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Empresarial',
    topic: 'Sociedades Anônimas - Ações Ordinárias, Preferenciais e Direito de Voto',
    difficulty: 'Médio',
    statement: `Em uma Companhia Fechada, os acionistas pretendem emitir ações preferenciais sem direito de voto ou com voto restrito.
Em consonância com a Lei das Sociedades por Ações (Lei nº 6.404/76):`,
    options: [
      { letter: 'A', text: 'O número de ações preferenciais sem direito a voto, ou sujeitas a restrição no exercício desse direito, não pode ultrapassar 50% (cinquenta por cento) do total das ações emitidas.' },
      { letter: 'B', text: 'É livre a emissão de ações preferenciais sem voto até o limite de 90% do capital social.' },
      { letter: 'C', text: 'Toda e qualquer ação de sociedade anônima confere obrigatoriamente direito a voto pleno e irrevogável.' },
      { letter: 'D', text: 'Apenas companhias abertas registradas na CVM podem emitir ações preferenciais.' }
    ],
    correctAnswer: 'A',
    justification: `Nos termos do Art. 15, § 2º da Lei nº 6.404/76 (com redação dada pela Lei nº 10.303/2001), o número de ações preferenciais sem direito a voto, ou sujeitas a restrição no exercício desse direito, não pode ultrapassar 50% (cinquenta por cento) do total das ações emitidas. Essa regra visa impedir a concentração excessiva de controle societário com baixo percentual de capital votante.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O limite de 2/3 vigorava no passado; a Lei 10.303/01 reduziu expressamente o teto para 50%.' },
      { letter: 'C', explanation: 'Incorreta. As ações preferenciais podem ter o direito de voto suprimido ou restrito em troca de vantagens patrimoniais.' },
      { letter: 'D', explanation: 'Incorreta. Tanto companhias abertas quanto fechadas podem emitir ações preferenciais.' }
    ],
    statuteReferences: [
      { code: 'Lei nº 6.404/1976', article: 'Art. 15, § 2º', textSnippet: 'O número de ações preferenciais sem direito a voto, ou sujeitas a restrição no exercício desse direito, não pode ultrapassar 50% (cinqüenta por cento) do total das ações emitidas.' }
    ],
    professorTip: 'Teto das Ações Preferenciais sem Voto em S.A.: 50% do total das ações! (Antes de 2001 era 2/3, não confunda regra antiga de livro desatualizado!)'
  },
  {
    id: 'oab38_emp_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Empresarial',
    topic: 'Recuperação Judicial, Stay Period e Lei 14.112/20',
    difficulty: 'Médio',
    statement: `O juízo da 1ª Vara Cível e Empresarial deferiu o processamento da recuperação judicial da sociedade empresária Calçados Conforto Ltda. Credores quirografários da devedora pretendem dar continuidade imediata aos atos expropriatórios em execuções individuais em andamento.
De acordo com a Lei nº 11.101/2005 (com as alterações cruciais da Lei nº 14.112/2020), o deferimento do processamento da recuperação judicial acarreta:`,
    options: [
      {
        letter: 'A',
        text: 'A suspensão de todas as ações e execuções contra o devedor pelo prazo de 180 dias (stay period), prorrogável por igual período, uma única vez, em caráter excepcional.'
      },
      {
        letter: 'B',
        text: 'A extinção imediata de todas as dívidas anteriores, exonerando os garantidores e avalistas dos títulos.'
      },
      {
        letter: 'C',
        text: 'A suspensão definitiva e perpétua de quaisquer cobranças até a conclusão do plano sem prazo limite.'
      },
      {
        letter: 'D',
        text: 'A conversão automática de todas as execuções cíveis em processos falimentares sumários.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 6º, II e § 4º da Lei nº 11.101/2005 (atualizado pela Lei nº 14.112/2020) determina que o deferimento do processamento da recuperação judicial suspende o curso de todas as ações e execuções contra o devedor pelo prazo de 180 (cento e oitenta) dias. Esse prazo de blindagem ('stay period') poderá ser prorrogado por igual período, uma única vez, em caráter excepcional, desde que o devedor não haja concorrido com a superação do lapso temporal.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O deferimento não extingue as dívidas nem exonera os coobrigados/avalistas (Art. 49, § 1º e Súmula 581 do STJ).' },
      { letter: 'C', explanation: 'Incorreta. O stay period é temporário (180 dias + prorrogação única de 180 dias).' },
      { letter: 'D', explanation: 'Incorreta. As execuções individuais ficam apenas suspensas, não convoladas em falência.' }
    ],
    statuteReferences: [
      { code: 'Lei 11.101/05 (Lei de Falências e Recuperação)', article: 'Art. 6º, § 4º', textSnippet: 'O prazo de suspensão previsto nos incisos I, II e III do caput deste artigo não excederá a 180 (cento e oitenta) dias, de curso improrrogável em qualquer hipótese, salvo se o devedor não houver concorrido com a superação do lapso temporal, hipótese em que poderá ser prorrogado por igual período, uma única vez, em caráter excepcional...' }
    ],
    jurisprudence: 'Súmula 581 do STJ: A recuperação judicial do devedor principal não impede o prosseguimento das ações e execuções ajuizadas contra terceiros devedores solidários ou coobrigados em geral, por garantia cambial, real ou fidejussória.',
    professorTip: 'Regra de ouro do Stay Period pós-Reforma da Lei 14.112/20: Prazo de 180 dias de suspensão! Pode prorrogar? SIM, por mais 180 dias, UMA ÚNICA VEZ e se o devedor não tiver culpa no atraso!'
  },
  {
    id: 'faculdade_emp_09',
    exam: 'Prova de Títulos de Crédito e Teoria Cambial - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Inoponibilidade das Exceções Pessoais e Autonomia Cambial',
    difficulty: 'Difícil',
    statement: `Mariana emitiu uma Nota Promissória no valor de R$ 30.000,00 em favor de Roberto para pagamento de um veículo usado que Roberto se comprometeu a entregar. Roberto não entregou o automóvel prometido, mas endossou em branco a Nota Promissória para Leonardo, terceiro de boa-fé, em pagamento de mercadorias legítimas. Na data do vencimento, Leonardo apresentou a Nota Promissória a Mariana exigindo o pagamento. Mariana recusou-se a pagar alegando a exceção do contrato não cumprido (exceptio non adimpleti contractus) por Roberto.
À luz dos princípios gerais do direito cambiário e do Art. 17 da Lei Uniforme de Genebra (Decreto 57.663/66):`,
    options: [
      {
        letter: 'A',
        text: 'Mariana não pode opor a Leonardo a exceção pessoal que tinha contra Roberto, em razão do princípio da inoponibilidade das exceções pessoais ao terceiro portador de boa-fé.'
      },
      {
        letter: 'B',
        text: 'Mariana está isenta do pagamento, pois a causa debendi originária vincula todos os sucessivos portadores cambiais sem exceção.'
      },
      {
        letter: 'C',
        text: 'O endosso em branco é nulo no ordenamento jurídico brasileiro, desprovendo o título de eficácia executiva.'
      },
      {
        letter: 'D',
        text: 'Leonardo só pode cobrar a dívida mediante ação declaratória prévia com litisconsórcio passivo necessário com Roberto.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 17 da Lei Uniforme de Genebra (LUG) e o Art. 916 do Código Civil consagram o princípio cardeal da inoponibilidade das exceções pessoais aos terceiros portadores de boa-fé. Pelos atributos cambiais da cartularidade, literalidade e, sobretudo, AUTONOMIA e ABSTRAÇÃO das obrigações cambiárias, os vícios da relação causal originária entre o emitente e o tomador primitivo não podem ser transferidos nem opostos contra o terceiro de boa-fé que adquiriu o título por endosso regular.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A autonomia e abstração do título de crédito desvinculam o crédito da sua causa geradora perante terceiros de boa-fé.' },
      { letter: 'C', explanation: 'Incorreta. O endosso em branco é plenamente válido (Art. 13 da LUG e art. 913 do CC).' },
      { letter: 'D', explanation: 'Incorreta. O título de crédito é título executivo extrajudicial autônomo (Art. 784, I do CPC).' }
    ],
    statuteReferences: [
      { code: 'Lei Uniforme de Genebra (Decreto 57.663/66)', article: 'Artigo 17', textSnippet: 'As pessoas accionadas em virtude de uma letra não podem opor ao portador as excepções fundadas sobre as relações pessoais delas com o sacador ou com os portadores anteriores, a menos que o portador, ao adquirir a letra, tenha procedido conscientemente em detrimento do devedor.' }
    ],
    jurisprudence: 'STJ, REsp 1.419.539/RS: O princípio da inoponibilidade das exceções pessoais ao terceiro de boa-fé constitui postulado basilar do direito cambiário, garantindo a circulação segura do crédito.',
    professorTip: 'A trindade cambial: Literalidade, Cartularidade e AUTONOMIA! Autonomia desdobra-se em: Abstração (título descola da causa) e Inoponibilidade das Exceções (Mariana não pode alegar "Roberto não me entregou o carro" contra Leonardo que é terceiro de boa-fé)!'
  },
  {
    id: 'oab37_emp_10',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Empresarial',
    topic: 'Trespasse de Estabelecimento e Cláusula de Não Restabelecimento',
    difficulty: 'Fácil',
    statement: `Guilherme vendeu para Patrícia o seu estabelecimento empresarial (uma padaria tradicional de bairro com toda a clientela, maquinário e ponto comercial). O contrato de trespasse foi devidamente averbado na Junta Comercial e publicado na imprensa oficial, mas as partes foram omissas e nada estipularam no contrato sobre a possibilidade de Guilherme abrir um novo negócio concorrente na mesma região. Seis meses após a venda, Guilherme alugou o imóvel vizinho e inaugurou uma padaria idêntica, captando toda a clientela anterior de Patrícia.
À luz das normas que disciplinam o estabelecimento no Código Civil (Art. 1.147):`,
    options: [
      {
        letter: 'A',
        text: 'A conduta de Guilherme é ilícita, pois, na omissão do contrato, o alienante não pode fazer concorrência ao adquirente nos 5 (cinco) anos subsequentes à transferência.'
      },
      {
        letter: 'B',
        text: 'A conduta de Guilherme é lícita, pois a vedação de concorrência exige cláusula contratual expressa e solene, inexistindo proibição legal tácita.'
      },
      {
        letter: 'C',
        text: 'O prazo legal de proibição de concorrência é perpétuo e intransponível.'
      },
      {
        letter: 'D',
        text: 'O trespasse de padarias é nulo de pleno direito sem intervenção do Ministério Público.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 1.147 do Código Civil consagra a cláusula de não concorrência (ou de não restabelecimento) implícita: 'Não havendo autorização expressa, o alienante do estabelecimento não pode fazer concorrência ao adquirente, nos cinco anos subseqüentes à transferência'. Assim, o silêncio do contrato não autoriza a concorrência; ao contrário, a lei proíbe o restabelecimento concorrencial pelo período legal de 5 anos para resguardar o aviamento e a boa-fé objetiva.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A proibição é ope legis pelo prazo de 5 anos; o que exige cláusula expressa é a AUTORIZAÇÃO para concorrer.' },
      { letter: 'C', explanation: 'Incorreta. O prazo legal supletivo é de 5 anos.' },
      { letter: 'D', explanation: 'Incorreta. O trespasse é negócio estritamente privado regulado pelos arts. 1.142 a 1.149 do Código Civil.' }
    ],
    statuteReferences: [
      { code: 'Código Civil Brasileiro', article: 'Art. 1.147, caput', textSnippet: 'Não havendo autorização expressa, o alienante do estabelecimento não pode fazer concorrência ao adquirente, nos cinco anos subseqüentes à transferência.' }
    ],
    jurisprudence: 'STJ, REsp 1.285.836/SP: A interdição da concorrência desleal pós-venda do estabelecimento por 5 anos visa proteger o aviamento (goodwill) e a integridade da clientela transferida.',
    professorTip: 'Pegadinha predileta da FGV em Empresarial: O contrato NÃO FALOU NADA sobre concorrer? Então É PROIBIDO CONCORRER por 5 anos (Art. 1.147 CC)! Para poder abrir padaria vizinha, teria que ter cláusula expressa no contrato autorizando!'
  }
];
