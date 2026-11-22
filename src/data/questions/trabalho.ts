import { LegalQuestion } from '../../types';

export const TRABALHO_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab36_trab_08',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito do Trabalho',
    topic: 'Equiparação Salarial e Reforma Trabalhista (Art. 461 CLT)',
    difficulty: 'Médio',
    statement: `Felipe e Gustavo exercem idêntica função em filial de rede varejista no mesmo município, prestando serviço de igual valor e produtividade à mesma empresa empregadora. Felipe trabalha na empresa há 5 anos, enquanto Gustavo foi admitido na mesma função há 2 anos e meio. Gustavo descobre que Felipe recebe salário base 40% superior e pleiteia equiparação salarial.
De acordo com o Art. 461 da CLT, com a redação dada pela Reforma Trabalhista (Lei 13.467/2017):`,
    options: [
      { letter: 'A', text: 'Gustavo tem direito à equiparação salarial, pois a diferença de tempo de serviço para o mesmo empregador não é superior a quatro anos e na mesma função não é superior a dois anos.' },
      { letter: 'B', text: 'Gustavo não tem direito, pois a diferença de tempo na função entre paradigma e paragonado é superior a 2 anos.' },
      { letter: 'C', text: 'A equiparação salarial exige que ambos tenham sido contratados no mesmo mês e ano, com sujeição aos prazos prescricionais trabalhistas aplicáveis após a extinção contratual.' },
      { letter: 'D', text: 'A mera identidade de função obriga à paridade salarial automática, sem qualquer limite temporal, em conformidade com o regime jurídico celetista e as garantias sociais constitucionais.' }
    ],
    correctAnswer: 'B',
    justification: `Com a Reforma Trabalhista (Lei 13.467/2017), o art. 461, § 1º da CLT fixou dois requisitos temporais cumulativos para a equiparação salarial: a diferença de tempo de serviço para o mesmo empregador não pode ser superior a 4 (quatro) anos E a diferença de tempo na MESMA FUNÇÃO não pode ser superior a 2 (dois) anos. Como a diferença de tempo na função entre Felipe e Gustavo é de 2 anos e meio (portanto, superior a dois anos), o pedido de equiparação salarial é improcedente.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A diferença na função é de 2 anos e meio, violando o teto de 2 anos do art. 461, § 1º da CLT.' },
      { letter: 'C', explanation: 'Incorreta. A lei não exige contratação na mesma data, apenas observância dos limites de 2 e 4 anos.' },
      { letter: 'D', explanation: 'Incorreta. O art. 461 prevê critérios expressos de produtividade, perfeição técnica e limitação temporal.' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 461, § 1º', textSnippet: 'Trabalho de igual valor, para os fins deste capítulo, será o que for feito com igual produtividade e com a mesma perfeição técnica, entre pessoas cuja diferença de tempo de serviço para o mesmo empregador não seja superior a quatro anos e a diferença de tempo na função não seja superior a dois anos.' }
    ],
    professorTip: 'Reforma Trabalhista (Art. 461, § 1º da CLT): Duas balizas temporais da equiparação: 1) Tempo no mesmo empregador: diferença ≤ 4 anos; 2) Tempo na mesma função: diferença ≤ 2 anos!'
  },
  {
    id: 'oab38_trab_02',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito do Trabalho',
    topic: 'Extinção do Contrato por Acordo Mútuo (Art. 484-A da CLT)',
    difficulty: 'Fácil',
    statement: `Empregado e empregador decidiram, de comum acordo amigável e sem qualquer vício de consentimento, extinguir o contrato de trabalho por prazo indeterminado que vigorava há 4 anos.
Conforme o Art. 484-A da CLT, incluído pela Reforma Trabalhista, o trabalhador terá direito a receber:`,
    options: [
      { letter: 'A', text: 'Por metade: o aviso prévio indenizado e a indenização sobre o saldo do FGTS (20%); e na integralidade as demais verbas rescisórias, podendo sacar até 80% do FGTS, sem direito ao seguro-desemprego.' },
      { letter: 'B', text: 'A integralidade de todas as verbas rescisórias, incluindo multa de 40% do FGTS e habilitação no seguro-desemprego, com reflexo direto sobre o cálculo de férias, décimo terceiro salário e depósitos fundiários.' },
      { letter: 'C', text: 'Apenas o saldo de salário e férias vencidas, perdendo o direito a qualquer saque do FGTS, com sujeição aos prazos prescricionais trabalhistas aplicáveis após a extinção contratual.' },
      { letter: 'D', text: 'Metade de todas as verbas rescisórias, inclusive das férias e do 13º salário, em conformidade com o regime jurídico celetista e as garantias sociais constitucionais. Essa diretriz repercute na apuração das verbas contratuais e rescisórias do trabalhador.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 484-A da CLT disciplina a extinção contratual por mútuo acordo entre as partes. Nessa modalidade, são pagos pela METADE: o aviso prévio (se indenizado) e a indenização sobre o FGTS (que fica em 20%, metade dos 40%). As demais verbas (férias, 13º salário, saldo de salário) são pagas INTEGRALMENTE. O trabalhador pode movimentar até 80% do saldo do FGTS, mas NÃO terá direito ao benefício do seguro-desemprego (§ 2º).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A multa do FGTS cai para 20% e não há direito ao seguro-desemprego.' },
      { letter: 'C', explanation: 'Incorreta. O trabalhador tem direito ao saque de 80% do saldo da conta vinculada do FGTS.' },
      { letter: 'D', explanation: 'Incorreta. Férias e 13º salário são verbas de direito adquirido pagas na integralidade.' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 484-A, I e II', textSnippet: 'O contrato de trabalho poderá ser extinto por acordo entre empregado e empregador, caso em que serão devidas as seguintes verbas trabalhistas: I - por metade: a) o aviso prévio, se indenizado; e b) a indenização sobre o saldo do Fundo de Garantia do Tempo de Serviço... II - na integralidade, as demais verbas trabalhistas.' }
    ],
    professorTip: 'Acordo Mútuo Trabalhista (Art. 484-A): Metade do Aviso Indenizado + Metade da Multa FGTS (20%) + Saque de até 80% do FGTS. Sem seguro-desemprego!'
  },
  {
    id: 'oab39_proctrab_03',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual do Trabalho',
    topic: 'Recursos Trabalhistas - Recurso Ordinário e Depósito Recursal',
    difficulty: 'Médio',
    statement: `Em reclamatória trabalhista proposta por ex-empregado, a Vara do Trabalho proferiu sentença condenando a reclamada ao pagamento de R$ 30.000,00 a título de horas extras. A reclamada, empresa de pequeno porte em regular funcionamento (não em recuperação judicial), pretende interpor Recurso Ordinário (RO) para reformar a decisão perante o Tribunal Regional do Trabalho (TRT).
Consoante as regras da CLT aplicáveis aos recursos trabalhistas:`,
    options: [
      { letter: 'A', text: 'O prazo para interposição do Recurso Ordinário é de 8 dias úteis, devendo recolher as custas e o depósito recursal pela metade, por se tratar de empresa de pequeno porte.' },
      { letter: 'B', text: 'O prazo do RO é de 15 dias úteis, conforme as regras subsidiárias do Código de Processo Civil, em harmonia com os princípios da oralidade, simplicidade e celeridade do processo laboral.' },
      { letter: 'C', text: 'A empresa de pequeno porte é totalmente isenta de realizar o depósito recursal, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa. Essa exigência condiciona o processamento regular do feito na Justiça do Trabalho.' },
      { letter: 'D', text: 'O depósito recursal deve ser recolhido no valor integral em qualquer hipótese, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal.' }
    ],
    correctAnswer: 'A',
    justification: `No processo do trabalho, a regra geral é que os prazos recursais são de 8 dias úteis (art. 6º da Lei 5.584/70 e art. 895, I da CLT). O art. 899, § 9º da CLT, introduzido pela Reforma Trabalhista, estabelece que o valor do depósito recursal será reduzido pela METADE para entidades sem fins lucrativos, empregadores domésticos, microempreendedores individuais, microempresas e EMPRESAS DE PEQUENO PORTE. A isenção total de depósito alcança beneficiários da justiça gratuita, entidades filantrópicas e empresas em recuperação judicial (art. 899, § 10).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O prazo recursal geral na CLT é de 8 dias (contados em dias úteis pelo art. 775 da CLT), não 15.' },
      { letter: 'C', explanation: 'Incorreta. EPP tem redução de 50% no depósito, não isenção integral.' },
      { letter: 'D', explanation: 'Incorreta. A EPP tem direito legal à redução pela metade do depósito.' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 895, I e Art. 899, § 9º', textSnippet: 'Cabe recurso ordinário para a instância superior: I - das decisões definitivas ou terminativas das Varas e Juízos, no prazo de 8 (oito) dias... § 9º O valor do depósito recursal será reduzido pela metade para entidades sem fins lucrativos, empregadores domésticos, microempreendedores individuais, microempresas e empresas de pequeno porte.' }
    ],
    professorTip: 'Prazos da CLT são quase todos de 8 DIAS ÚTEIS! E EPP/ME paga METADE do depósito recursal (Art. 899, § 9º). Quem é isento total é quem está em recuperação judicial!'
  },
  {
    id: 'oab37_proctrab_04',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual do Trabalho',
    topic: 'Procedimento Sumaríssimo e Limitações na Justiça do Trabalho',
    difficulty: 'Fácil',
    statement: `Um trabalhador pretende ajuizar reclamatória trabalhista cobrando diferenças de verbas rescisórias no valor total de 25 salários mínimos em face de autarquia federal prestadora de serviços de saúde.
De acordo com o Art. 852-A da Consolidação das Leis do Trabalho (CLT):`,
    options: [
      { letter: 'A', text: 'A reclamatória não poderá tramitar pelo procedimento sumaríssimo, pois estão excluídas desse rito as demandas em que é parte a Administração Pública direta, autárquica e fundacional.' },
      { letter: 'B', text: 'A demanda tramitará obrigatoriamente pelo rito sumaríssimo por ter valor inferior a 40 salários mínimos, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho.' },
      { letter: 'C', text: 'O procedimento sumaríssimo admite citação por edital de entidades da administração pública, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal.' },
      { letter: 'D', text: 'Demandas trabalhistas contra autarquias federais tramitam perante as Varas Federais cíveis, observada a contagem própria dos prazos trabalhistas e o rito aplicável ao valor da causa.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 852-A, parágrafo único, da CLT expressamente preceitua: "Estão excluídas do procedimento sumaríssimo as demandas em que é parte a Administração Pública direta, autárquica e fundacional". Logo, mesmo que o valor da causa seja inferior a 40 salários mínimos, a presença da autarquia atrai compulsoriamente o rito ordinário.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A presença de ente autárquico afasta peremptoriamente o rito sumaríssimo.' },
      { letter: 'C', explanation: 'Incorreta. No rito sumaríssimo é vedada citação por edital (Art. 852-B, II).' },
      { letter: 'D', explanation: 'Incorreta. Litígios oriundos de relação de trabalho entre empregados celetistas e autarquias competem à Justiça do Trabalho (Art. 114, I da CF).' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 852-A, parágrafo único', textSnippet: 'Estão excluídas do procedimento sumaríssimo as demandas em que é parte a Administração Pública direta, autárquica e fundacional.' }
    ],
    professorTip: 'Atenção máxima: Rito Sumaríssimo na CLT = causas até 40 salários mínimos. MAS se for contra Município, Estado, União ou Autarquia/Fundação: PROIBIDO RITO SUMARÍSSIMO!'
  },
  {
    id: 'oab40_trab_05',
    exam: 'XL Exame de Ordem Unificado (OAB 40) - FGV / 2024',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Teletrabalho (Home Office) e Controle de Jornada (Art. 62, III CLT)',
    difficulty: 'Médio',
    statement: `Empregada contratada sob a modalidade de teletrabalho (home office) presta serviços de redação e produção de conteúdo por produção/tarefa, conforme contrato formal escrito celebrado com a agência de publicidade. A empregada postula o recebimento de horas extraordinárias, alegando que trabalhava mais de 8 horas por dia em sua residência.
Conforme as alterações introduzidas pela Lei nº 14.442/2022 no Art. 62, III da CLT:`,
    options: [
      { letter: 'A', text: 'Não são abrangidos pelo regime de controle de jornada e horas extras os empregados em teletrabalho que prestam serviços por produção ou tarefa.' },
      { letter: 'B', text: 'Qualquer empregado em teletrabalho tem direito irrestrito ao pagamento de horas extras sem exceção, com possibilidade de alteração unilateral das condições laborais pelo poder diretivo patronal.' },
      { letter: 'C', text: 'O teletrabalho impede qualquer tipo de remuneração variável, observados os princípios da continuidade da relação de emprego e da primazia da realidade.' },
      { letter: 'D', text: 'O comparecimento habitual às dependências do empregador descaracteriza o regime de teletrabalho por completo, com sujeição aos prazos prescricionais trabalhistas aplicáveis após a extinção contratual.' }
    ],
    correctAnswer: 'A',
    justification: `Com a edição da Medida Provisória 1.108 convertida na Lei nº 14.442/2022, o inciso III do art. 62 da CLT foi expressamente modificado: passou a excluir do regime de controle de jornada apenas os empregados em teletrabalho que prestam serviços por PRODUÇÃO ou TAREFA. Já os empregados em teletrabalho contratados por jornada de tempo continuam submetidos ao controle de horário e fazem jus a horas extras.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Empregados por produção ou tarefa não se submetem a controle de ponto (Art. 62, III).' },
      { letter: 'C', explanation: 'Incorreta. A remuneração por tarefa ou comissão é perfeitamente admitida.' },
      { letter: 'D', explanation: 'Incorreta. O art. 75-C, § 1º da CLT diz que o comparecimento às dependências do empregador para realizar atividades específicas não descaracteriza o teletrabalho.' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 62, III', textSnippet: 'Não são abrangidos pelo regime deste capítulo: III - os empregados em regime de teletrabalho que prestam serviços por produção ou tarefa.' }
    ],
    professorTip: 'Atualização da Lei 14.442/22: Teletrabalho por PRODUÇÃO/TAREFA não tem hora extra (Art. 62, III). Teletrabalho por TEMPO/HORÁRIO TEM controle de jornada e hora extra normal!'
  },
  {
    id: 'oab38_trab_06',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito do Trabalho',
    topic: 'Extinção do Contrato de Trabalho - Demissão por Acordo Comum (Art. 484-A CLT)',
    difficulty: 'Fácil',
    statement: `Empregado com 5 anos de casa e empregador decidem, em comum acordo e sem qualquer coação, extinguir o vínculo de emprego nos moldes do art. 484-A da CLT (distrato introduzido pela Reforma Trabalhista).
Quanto às verbas rescisórias devidas ao trabalhador no distrato consensual por acordo mútuo:`,
    options: [
      { letter: 'A', text: 'O aviso prévio indenizado é pago pela metade (50%), a indenização sobre o saldo do FGTS é de 20% (metade de 40%), e o empregado pode sacar até 80% do saldo do FGTS, sendo vedado o ingresso no Seguro-Desemprego.' },
      { letter: 'B', text: 'O empregado recebe todas as verbas rescisórias integrais e habilita-se normalmente ao programa do Seguro-Desemprego, com reflexo direto sobre o cálculo de férias, décimo terceiro salário e depósitos fundiários. Essa diretriz repercute na apuração das verbas contratuais e rescisórias do trabalhador.' },
      { letter: 'C', text: 'O empregado perde qualquer indenização sobre o FGTS e nada recebe a título de aviso prévio, em conformidade com o regime jurídico celetista e as garantias sociais constitucionais.' },
      { letter: 'D', text: 'O empregado levanta 100% dos depósitos do FGTS e recebe 30% de multa rescisória, com sujeição aos prazos prescricionais trabalhistas aplicáveis após a extinção contratual.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 484-A da CLT estabelece que o contrato de trabalho pode ser extinto por acordo mútuo entre empregado e empregador, caso em que serão devidos por METADE: a) o aviso prévio indenizado (50%); b) a indenização rescisória sobre o FGTS (20%, que é metade de 40%). As demais verbas (férias, 13º e saldo de salário) são pagas na integralidade. O trabalhador pode sacar até 80% do FGTS depositado, mas NÃO tem direito a receber o seguro-desemprego (§ 2º).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O art. 484-A, § 2º veda expressamente o seguro-desemprego na demissão por acordo.' },
      { letter: 'C', explanation: 'Incorreta. Há pagamento de 50% do aviso prévio indenizado e 20% da multa do FGTS.' },
      { letter: 'D', explanation: 'Incorreta. O saque é limitado a 80% do saldo e a multa é de 20%.' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 484-A', textSnippet: 'O contrato de trabalho poderá ser extinto por acordo entre empregado e empregador, caso em que serão devidas as seguintes verbás trabalhistas: I - por metade: a) o aviso prévio, se indenizado; e b) a indenização sobre o saldo do Fundo de Garantia do Tempo de Serviço...' }
    ],
    professorTip: 'Fórmula do Acordo Trabalhista (Art. 484-A): Metade do aviso indenizado + metade da multa FGTS (20%) + saque de até 80% do FGTS + ZERO seguro-desemprego!'
  },
  {
    id: 'oab37_trab_07',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Processual do Trabalho',
    topic: 'Recursos Trabalhistas - Depósito Recursal e Isenção (Art. 899, § 9º e 10 da CLT)',
    difficulty: 'Médio',
    statement: `Empresa de pequeno porte (EPP) que se encontra em recuperação judicial deferida foi condenada pela Vara do Trabalho ao pagamento de diferenças salariais no valor de R$ 50.000,00. A empresa pretende interpor Recurso Ordinário (RO) para reformar a decisão perante o Tribunal Regional do Trabalho.
Segundo o que disciplina a CLT no Art. 899, § 10:`,
    options: [
      { letter: 'A', text: 'A empresa em recuperação judicial é isenta do recolhimento do depósito recursal, recolhendo apenas as custas processuais se não for beneficiária da justiça gratuita.' },
      { letter: 'B', text: 'A empresa é isenta de custas e de depósito recursal de forma incondicional e definitiva, com manutenção regular da fase instrutória ou executória até decisão definitiva do tribunal.' },
      { letter: 'C', text: 'A recuperação judicial não gera qualquer benefício no preparo de recursos trabalhistas, com afastamento das normas processuais comuns diante da disciplina própria da execução laboral.' },
      { letter: 'D', text: 'O depósito recursal deve ser recolhido pela metade, nos termos da regra geral de microempresas, sujeita aos pressupostos específicos de admissibilidade e à competência da Justiça do Trabalho.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 899, § 10 da CLT (introduzido pela Lei 13.467/2017) prevê expressamente: 'São isentos do depósito recursal os beneficiários da justiça gratuita, as entidades filantrópicas e as empresas em recuperação judicial'. Já as entidades sem fins lucrativos e EPPs/MEs comuns recolhem o depósito pela metade (§ 9º), mas a recuperação judicial confere ISENÇÃO TOTAL do depósito recursal (embora continue exigindo custas, salvo gratuidade de justiça ou Súmula 86 do TST para massa falida).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A recuperação judicial isenta do DEPÓSITO recursal, mas não das CUSTAS (a isenção de ambos ocorre para a massa falida - Súmula 86 do TST).' },
      { letter: 'C', explanation: 'Incorreta. O art. 899, § 10 da CLT confere expressa isenção do depósito.' },
      { letter: 'D', explanation: 'Incorreta. O recolhimento pela metade é para EPPs comuns; em recuperação judicial a isenção é integral.' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 899, § 10', textSnippet: 'São isentos do depósito recursal os beneficiários da justiça gratuita, as entidades filantrópicas e as empresas em recuperação judicial.' }
    ],
    professorTip: 'Pegadinha perigosa do TST: Empresa em recuperação judicial NÃO paga depósito recursal (Art. 899, § 10), mas ainda PAGA custas! Só a MASSA FALIDA é isenta de custas e depósito (Súmula 86 TST)!'
  },
  {
    id: 'oab38_trab_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito do Trabalho',
    topic: 'Terceirização de Atividade-Fim e Responsabilidade Subsidiária (Tema 725 STF)',
    difficulty: 'Médio',
    statement: `Um hospital privado celebrou contrato de prestação de serviços com uma empresa especializada para fornecimento de equipe de enfermeiros que atuam diretamente no atendimento médico-hospitalar aos pacientes internados (atividade nuclear da tomadora). Um enfermeiro terceirizado ajuizou reclamação trabalhista postulando o reconhecimento de vínculo de emprego direto com o hospital sob a alegação de terceirização ilícita de atividade-fim, ou, subsidiariamente, a responsabilidade subsidiária do hospital pelas verbas rescisórias inadimplidas.
À luz da tese vinculante do Tema 725 do STF (ADPF 324 e RE 958.252) e da Lei 13.429/2017:`,
    options: [
      {
        letter: 'A',
        text: 'É lícita a terceirização de qualquer atividade, meio ou fim, não se formando vínculo empregatício direto com o tomador, respondendo este subsidiariamente pelas obrigações trabalhistas.'
      },
      {
        letter: 'B',
        text: 'A terceirização de atividade-fim continua expressamente proibida, gerando vínculo direto obrigatório com o hospital, em conformidade com o regime jurídico celetista e as garantias sociais constitucionais.'
      },
      {
        letter: 'C',
        text: 'O hospital tomador responde solidariamente por todas as verbas rescisórias, inclusive multas dos arts. 467 e 477 da CLT, com reflexo direto sobre o cálculo de férias, décimo terceiro salário e depósitos fundiários.'
      },
      {
        letter: 'D',
        text: 'O tomador só responde se for pessoa jurídica de direito público, sendo empresas privadas isentas de qualquer responsabilidade, com sujeição aos prazos prescricionais trabalhistas aplicáveis após a extinção contratual.'
      }
    ],
    correctAnswer: 'A',
    justification: `O STF fixou a seguinte tese no Tema 725 da Repercussão Geral: 'É lícita a terceirização ou qualquer outra forma de divisão do trabalho entre pessoas jurídicas distintas, independentemente do objeto social das empresas envolvidas, mantida a responsabilidade subsidiária da empresa contratante'. Portanto, é plenamente lícita a terceirização de atividade-fim e de atividade-meio, não gerando vínculo de emprego com a tomadora (salvo se houver subordinação direta e pessoalidade com a tomadora), persistindo a responsabilidade SUBSIDIÁRIA da empresa contratante pelas verbas devidas ao trabalhador.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A Súmula 331 do TST foi superada pelo STF no que tange à distinção entre atividade-meio e atividade-fim.' },
      { letter: 'C', explanation: 'Incorreta. A responsabilidade da empresa contratante privada é subsidiária, não solidária (Art. 5º-A, § 5º da Lei 6.019/74).' },
      { letter: 'D', explanation: 'Incorreta. A empresa privada tomadora responde subsidiariamente pelo inadimplemento da prestadora.' }
    ],
    statuteReferences: [
      { code: 'Lei 6.019/74 (com redação da Lei 13.429/17)', article: 'Art. 4º-A e Art. 5º-A, § 5º', textSnippet: 'A empresa contratante é subsidiariamente responsável pelas obrigações trabalhistas referentes ao período em que ocorrer a prestação de serviços...' }
    ],
    jurisprudence: 'STF, Tema 725/RG (RE 958.252/MG) e ADPF 324: É lícita a terceirização de toda e qualquer atividade, meio ou fim, não se formando vínculo com o tomador de serviços, mantida a responsabilidade subsidiária.',
    professorTip: 'Tese consagrada: Pode terceirizar TUDO (atividade-meio ou atividade-fim)! Vínculo com o tomador? NÃO (a menos que haja subordinação direta ilícita). Responsabilidade do tomador? SUBSIDIÁRIA!'
  },
  {
    id: 'faculdade_trab_09',
    exam: 'Exame Semestral de Contratos e Duração do Trabalho - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Teletrabalho e Controle de Horário (Art. 62, III e 75-B CLT)',
    difficulty: 'Médio',
    statement: `Juliana foi admitida por uma instituição financeira para exercer suas atribuições em regime de teletrabalho (home office). O contrato de trabalho estipulou formalmente que Juliana cumpriria jornada ordinária de trabalho de 8 horas diárias, submetendo-se a controle estrito de horário de login/logout no sistema corporativo da empresa e envio diário de relatórios de produtividade por horário. No entanto, Juliana trabalhava frequentemente 10 a 11 horas por dia sem receber qualquer contraprestação adicional.
Ao ajuizar reclamação trabalhista postulando horas extras, a empresa contestou sustentando que empregados em teletrabalho são sumariamente excluídos do regime de horas extras pelo Art. 62, III da CLT.
À luz da Consolidação das Leis do Trabalho (Lei 14.442/22 que alterou o art. 62, III e art. 75-B da CLT):`,
    options: [
      {
        letter: 'A',
        text: 'Juliana tem direito às horas extras, pois a exclusão do controle de jornada aplica-se unicamente aos empregados em teletrabalho contratados por produção ou por tarefa, e não aos contratados por jornada.'
      },
      {
        letter: 'B',
        text: 'Nenhum empregado em teletrabalho tem direito a horas extras sob qualquer hipótese no direito brasileiro, com garantia de estabilidade provisória e pagamento integral dos reflexos durante o período.'
      },
      {
        letter: 'C',
        text: 'O controle de jornada em teletrabalho é expressamente proibido pela CLT, sendo ilícito o controle por login da empresa, com afastamento do reconhecimento de vínculo empregatício ou responsabilidade solidária.'
      },
      {
        letter: 'D',
        text: 'As horas excedentes devem ser pagas apenas como sobreaviso de 1/3, e não como horas extraordinárias, com sujeição aos prazos prescricionais trabalhistas aplicáveis após a extinção contratual.'
      }
    ],
    correctAnswer: 'A',
    justification: `Com a alteração do Art. 62, III da CLT pela Lei nº 14.442/2022 (fruto da conversão da MP 1.108/2022), restou expressamente estabelecido que são excluídos do regime de controle de jornada: 'os empregados em regime de teletrabalho que prestam serviços por produção ou tarefa'. Por interpretação a contrario sensu e expressa dicção do Art. 75-B, § 9º da CLT, os empregados em teletrabalho contratados POR JORNADA submetem-se ao regime geral de duração do trabalho e têm pleno direito ao recebimento de horas extraordinárias quando extrapolado o limite legal.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme a reforma da Lei 14.442/22, o teletrabalhador por jornada tem direito a horas extras.' },
      { letter: 'C', explanation: 'Incorreta. O empregador pode controlar a jornada de trabalho de seus teletrabalhadores (art. 75-B, § 9º CLT).' },
      { letter: 'D', explanation: 'Incorreta. O trabalho excedente efetivamente prestado sob fiscalização tipifica hora extraordinária remunerada com adicional mínimo de 50%.' }
    ],
    statuteReferences: [
      { code: 'CLT (com redação da Lei 14.442/22)', article: 'Art. 62, III e Art. 75-B, § 9º', textSnippet: 'Art. 62, III - os empregados em regime de teletrabalho que prestam serviços por produção ou tarefa. Art. 75-B, § 9º O regime de teletrabalho ou trabalho remoto não se confunde com nem se equipara à ocupação de operador de telemarketing ou de teleatendimento.' }
    ],
    jurisprudence: 'TST, RR 1000854-41.2020.5.02.0071: Constatada a existência de controle telemático de jornada do teletrabalhador, afasta-se a exceção do art. 62 da CLT, sendo devido o pagamento das horas extraordinárias.',
    professorTip: 'Atenção à pegadinha da Lei 14.442/22: Teletrabalhador tem direito a horas extras? DEPENDE! Se foi contratado por produção ou tarefa = NÃO tem direito (Art. 62, III). Se foi contratado POR JORNADA (e a empresa controla horário) = TEM DIREITO A HORAS EXTRAS sim!'
  },
  {
    id: 'oab37_trab_10',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito do Trabalho',
    topic: 'Rescisão Contratual por Acordo Mútuo (Art. 484-A da CLT)',
    difficulty: 'Fácil',
    statement: `Vinícius, empregado há 4 anos na empresa Beta, combinou de comum acordo com seu empregador a extinção do seu contrato de trabalho, utilizando o procedimento de rescisão consensual introduzido pela Reforma Trabalhista (Art. 484-A da CLT).
Conforme a disciplina legal do Art. 484-A da CLT, quais são os direitos devidos a Vinícius nessa modalidade de extinção do contrato de trabalho?`,
    options: [
      {
        letter: 'A',
        text: 'Metade do aviso prévio indenizado (50%), indenização de 20% sobre o saldo do FGTS, saque de até 80% do FGTS depositado, e não terá direito ao seguro-desemprego.'
      },
      {
        letter: 'B',
        text: 'Aviso prévio integral, multa de 40% do FGTS, levantamento de 100% dos depósitos e habilitação ao seguro-desemprego. A regra orienta tanto os contratos por prazo indeterminado quanto as contratações especiais.'
      },
      {
        letter: 'C',
        text: 'Apenas as verbas de pedido de demissão, sem saque do FGTS nem qualquer indenização compensatória, observados os princípios da continuidade da relação de emprego e da primazia da realidade.'
      },
      {
        letter: 'D',
        text: 'Multa de 10% do FGTS e parcelamento das demais verbas rescisórias em até 12 vezes sem juros, em conformidade com o regime jurídico celetista e as garantias sociais constitucionais.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 484-A da CLT prevê que o contrato de trabalho poderá ser extinto por acordo entre empregado e empregador, caso em que serão devidos por metade: o aviso prévio (se indenizado) e a indenização sobre o saldo do FGTS (20%, que é metade dos 40%). Na integralidade serão pagas as demais verbas (saldo de salário, férias e 13º). O empregado poderá movimentar até 80% do saldo do FGTS (§ 1º), e a extinção por acordo NÃO autoriza o ingresso no Programa de Seguro-Desemprego (§ 2º).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Essa é a demissão sem justa causa iniciada exclusivamente pelo empregador.' },
      { letter: 'C', explanation: 'Incorreta. No acordo mútuo há direito a saque de 80% do FGTS e indenização compensatória de 20%.' },
      { letter: 'D', explanation: 'Incorreta. A multa é de 20% e as verbas devem ser pagas no prazo de 10 dias (art. 477, § 6º da CLT).' }
    ],
    statuteReferences: [
      { code: 'Consolidação das Leis do Trabalho (CLT)', article: 'Art. 484-A, § 1º e § 2º', textSnippet: 'O contrato de trabalho poderá ser extinto por acordo entre empregado e empregador, caso em que serão devidas as seguintes verbas trabalhistas: I - por metade: a) o aviso prévio, se indenizado; e b) a indenização sobre o saldo do Fundo de Garantia do Tempo de Serviço... § 1º A extinção do contrato de trabalho prevista no caput deste artigo permite a movimentação da conta vinculada do trabalhador no FGTS na forma do inciso I-A do art. 20 da Lei nº 8.036/90, limitada a até 80% do valor dos depósitos. § 2º A extinção do contrato de trabalho por acordo prevista no caput deste artigo não autoriza o ingresso no Programa de Seguro-Desemprego.' }
    ],
    jurisprudence: 'TST, Súmula e precedentes: A rescisão por acordo mútuo decorre da manifestação volitiva de ambas as partes, observando o teto de 80% para movimentação do FGTS.',
    professorTip: 'Mnemônico do Acordo Mútuo do Art. 484-A: "Regra do Meio a Meio": Metade do Aviso Prévio (se indenizado), Metade da Multa do FGTS (20%). Saque do FGTS? Até 80%! Seguro-desemprego? ZERO (Não tem direito)!'
  }
];
