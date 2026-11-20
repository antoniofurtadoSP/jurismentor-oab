import { LegalQuestion } from '../../../types';

export const TRABALHO_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'trab_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Grupo Econômico por Coordenação (Art. 2º, §§ 2º e 3º, CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Duas sociedades empresárias distintas têm os mesmos sócios em comum, porém não há relação de direção, controle ou administração de uma sobre a outra, mantendo cada qual autonomia administrativa e atuação em ramos diferentes, sem comunhão de interesses efetiva. Em reclamação trabalhista, o autor pede a responsabilidade solidária das empresas por grupo econômico. Segundo o Art. 2º, § 3º, da CLT:`,
    options: [
      { letter: 'A', text: 'A mera identidade de sócios é suficiente para caracterizar automaticamente o grupo econômico.' },
      { letter: 'B', text: 'Não caracteriza grupo econômico a mera identidade de sócios, sendo necessárias, para a configuração do grupo, a demonstração do interesse integrado, a efetiva comunhão de interesses e a atuação conjunta das empresas dele integrantes.' },
      { letter: 'C', text: 'O grupo econômico trabalhista gera responsabilidade meramente subsidiária entre as empresas.' },
      { letter: 'D', text: 'A CLT admite grupo econômico apenas por subordinação hierárquica, proibindo o grupo por coordenação.' }
    ],
    correctAnswer: 'B',
    justification: `Com a Reforma Trabalhista, o art. 2º, § 3º, da CLT passou a exigir, além da eventual identidade de sócios, a demonstração cumulativa de: (i) interesse integrado, (ii) efetiva comunhão de interesses e (iii) atuação conjunta das empresas integrantes (grupo econômico por coordenação, com responsabilidade solidária prevista no § 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A lei expressamente afasta a configuração automática pela mera identidade de sócios.' },
      { letter: 'C', explanation: 'Incorreta. No grupo econômico, a responsabilidade é SOLIDÁRIA (art. 2º, § 2º, CLT).' },
      { letter: 'D', explanation: 'Incorreta. O art. 2º, § 2º admite expressamente o grupo econômico mesmo quando cada empresa guarda sua autonomia (coordenação).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 2º, §§ 2º e 3º', textSnippet: 'Não caracteriza grupo econômico a mera identidade de sócios, sendo necessárias, para a configuração do grupo, a demonstração do interesse integrado, a efetiva comunhão de interesses e a atuação conjunta das empresas dele integrantes.' }
    ],
    professorTip: 'Grupo Econômico na CLT (Art. 2º, § 3º): Sócios iguais SOZINHO não basta! Precisa de interesse integrado + comunhão de interesses + atuação conjunta. Se configurar, responsabilidade é SOLIDÁRIA!'
  },
  {
    id: 'trab_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Sucessão Empresarial Trabalhista (Art. 448-A CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `A sociedade Alfa vendeu regularmente sua unidade produtiva e fundo de comércio para a sociedade Beta, continuando os empregados a trabalhar no mesmo local. Posteriormente, um ex-empregado dispensado antes da venda ajuizou ação cobrando verbas não pagas, requerendo a condenação de ambas. Não houve comprovação de fraude na transferência. À luz do Art. 448-A da CLT:`,
    options: [
      { letter: 'A', text: 'A empresa sucedida (Alfa) responde diretamente de forma principal, respondendo a sucessora (Beta) apenas subsidiariamente.' },
      { letter: 'B', text: 'Caracterizada a sucessão empresarial, as obrigações trabalhistas, inclusive as contraídas à época em que os empregados trabalhavam para a empresa sucedida, são de responsabilidade da sucessora (Beta), respondendo a sucedida solidariamente apenas se comprovada fraude na transferência.' },
      { letter: 'C', text: 'A mudança na propriedade da empresa rescinde automaticamente todos os contratos de trabalho.' },
      { letter: 'D', text: 'Cláusula contratual entre Alfa e Beta isentando Beta de dívidas trabalhistas impede a execução pelo empregado.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 448-A da CLT positiva que, caracterizada a sucessão empresarial ou de empregadores, as obrigações trabalhistas — inclusive as do período anterior à transferência — são de responsabilidade exclusiva da SUCESSORA. A empresa sucedida só responde solidariamente quando comprovada FRAUDE na transferência (parágrafo único).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A responsabilidade primária é integralmente da sucessora.' },
      { letter: 'C', explanation: 'Incorreta. Pelo princípio da continuidade e arts. 10 e 448 CLT, a alteração jurídica não afeta os contratos.' },
      { letter: 'D', explanation: 'Incorreta. Cláusula privada de não responsabilização é inoponível ao trabalhador, valendo apenas regressivamente no âmbito cível.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 448-A', textSnippet: 'Caracterizada a sucessão empresarial ou de empregadores prevista nos arts. 10 e 448 desta Consolidação, as obrigações trabalhistas, inclusive as contraídas à época em que os empregados trabalhavam para a empresa sucedida, são de responsabilidade da sucessora.' }
    ],
    professorTip: 'Sucessão na CLT (Art. 448-A): Regra = SÓ a SUCESSORA responde! A sucedida só responde SOLIDARIAMENTE se houver FRAUDE na venda!'
  },
  {
    id: 'trab_ext_03',
    exam: 'Prova Semestral Faculdade de Direito - Direito do Trabalho',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Teletrabalho / Home Office (Arts. 75-A a 75-F CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Marina foi contratada originalmente no regime presencial e, após dois anos, acordou com seu empregador por termo aditivo contratual a migração para o regime de teletrabalho por produção (sem controle de jornada). Seis meses depois, o empregador decidiu unilateralmente determinar o retorno de Marina ao trabalho presencial. Consoante o Art. 75-C, § 2º, da CLT:`,
    options: [
      { letter: 'A', text: 'O retorno ao presencial exige concordância prévia e expressa da empregada.' },
      { letter: 'B', text: 'Poderá ser realizada a alteração do regime de teletrabalho para o presencial por determinação do empregador, garantido prazo de transição mínimo de 15 dias, com correspondente registro em aditivo contratual.' },
      { letter: 'C', text: 'Todo empregado em teletrabalho tem direito automático a horas extras por estar sempre conectado.' },
      { letter: 'D', text: 'A migração inicial do presencial para o teletrabalho também independe de mútuo acordo.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 75-C da CLT: a ida do presencial para o teletrabalho exige MÚTUO ACORDO (§ 1º); já a volta do teletrabalho para o presencial pode ocorrer por DETERMINAÇÃO UNILATERAL do empregador, desde que garantido prazo de transição mínimo de 15 dias e formalizado aditivo contratual (§ 2º). Ademais, pelo art. 62, III, apenas o teletrabalhador por produção ou tarefa está dispensado do controle de jornada.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A exigência de mútuo acordo vale apenas para ir do presencial ao teletrabalho, não para retornar.' },
      { letter: 'C', explanation: 'Incorreta. Empregados em teletrabalho por produção/tarefa não se sujeitam a controle de jornada (art. 62, III CLT).' },
      { letter: 'D', explanation: 'Incorreta. A passagem para o teletrabalho depende de mútuo acordo em aditivo (art. 75-C, § 1º).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 75-C, §§ 1º e 2º', textSnippet: 'Poderá ser realizada a alteração do regime de teletrabalho para o presencial por determinação do empregador, garantido prazo de transição mínimo de quinze dias, com correspondente registro em aditivo contratual.' }
    ],
    professorTip: 'Regra de trânsito no Teletrabalho (Art. 75-C): Presencial -> Teletrabalho = Mútuo Acordo. Teletrabalho -> Presencial = Empregador decide sozinho + 15 dias de transição!'
  },
  {
    id: 'trab_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Fracionamento de Férias e Início (Art. 134 CLT)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Um empregado maior de 50 anos de idade solicita à empresa o fracionamento de suas férias anuais remuneradas de 30 dias em três períodos, sendo um de 14 dias e outros dois de 8 dias cada, iniciando o gozo em uma sexta-feira imediatamente anterior a um feriado nacional que cairá no sábado. Com base no Art. 134 da CLT:`,
    options: [
      { letter: 'A', text: 'É vedado o fracionamento de férias para maiores de 50 anos e menores de 18 anos.' },
      { letter: 'B', text: 'O fracionamento em até três períodos é permitido (desde que um deles seja de pelo menos 14 dias e os demais de no mínimo 5 dias), porém é vedado o início das férias no período de dois dias que antecede feriado ou dia de repouso semanal remunerado.' },
      { letter: 'C', text: 'As férias podem começar em qualquer dia da semana, inclusive na véspera de feriado ou domingo.' },
      { letter: 'D', text: 'O empregado pode vender integralmente os 30 dias de férias mediante acordo individual.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 134, § 1º, da CLT, desde que haja concordância do empregado, as férias podem ser usufruídas em até 3 períodos (inclusive para menores de 18 e maiores de 50 anos, pois a Reforma Trabalhista revogou o antigo § 2º), sendo um deles não inferior a 14 dias corridos e os demais não inferiores a 5 dias corridos cada um. Contudo, pelo § 3º, é VEDADO o início das férias no período de 2 dias que antecede feriado ou dia de repouso semanal remunerado!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A vedação etária foi revogada pela Reforma Trabalhista (Lei 13.467/2017).' },
      { letter: 'C', explanation: 'Incorreta. Viola o § 3º do art. 134 da CLT.' },
      { letter: 'D', explanation: 'Incorreta. O abono pecuniário limita-se a 1/3 (máximo 10 dias) das férias (art. 143 CLT).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 134, §§ 1º e 3º', textSnippet: 'É vedado o início das férias no período de dois dias que antecede feriado ou dia de repouso semanal remunerado.' }
    ],
    professorTip: 'Férias na CLT (Art. 134): Até 3 blocos (1 de ≥14 dias + os outros ≥5 dias cada), inclusive para menores de 18 e >50 anos! Mas NUNCA começa nos 2 dias antes de feriado ou DSR!'
  },
  {
    id: 'trab_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Banco de Horas Individual e Escrito (Art. 59 CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Empresa de tecnologia pretende implantar sistema de banco de horas diretamente com seus empregados, sem participação do sindicato da categoria profissional, pactuado por acordo individual escrito para compensação no prazo máximo de seis meses. Sobre a validade desse banco de horas nos termos do Art. 59 da CLT:`,
    options: [
      { letter: 'A', text: 'Banco de horas somente pode ser instituído por convenção ou acordo coletivo com participação sindical.' },
      { letter: 'B', text: 'O banco de horas pode ser pactuado por acordo individual escrito, desde que a compensação ocorra no período máximo de seis meses.' },
      { letter: 'C', text: 'O banco de horas individual escrito permite compensação em até um ano.' },
      { letter: 'D', text: 'A compensação dentro do mesmo mês exige obrigatoriamente acordo coletivo escrito.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 59, § 5º, da CLT autoriza expressamente a pactuação de banco de horas por ACORDO INDIVIDUAL ESCRITO, desde que a compensação ocorra no período máximo de 6 meses. Para banco de horas anual (até 1 ano), exige-se norma coletiva (§ 2º). Já a compensação dentro do mesmo mês pode ser ajustada por acordo individual, tácito ou escrito (§ 6º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A participação sindical só é obrigatória se o banco superar 6 meses (até 1 ano).' },
      { letter: 'C', explanation: 'Incorreta. O limite de 1 ano exige acordo ou convenção coletiva.' },
      { letter: 'D', explanation: 'Incorreta. Compensação no mesmo mês pode ser até tácita (§ 6º).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 59, §§ 2º, 5º e 6º', textSnippet: 'O banco de horas de que trata o § 2º deste artigo poderá ser pactuado por acordo individual escrito, desde que a compensação ocorra no período máximo de seis meses.' }
    ],
    professorTip: 'Escadinha do Banco de Horas (Art. 59 CLT): Mesmo mês = Acordo tácito ou escrito; Até 6 meses = Acordo individual ESCRITO; Até 1 ano = ACT ou CCT!'
  },
  {
    id: 'trab_ext_06',
    exam: 'Concurso Magistratura do Trabalho / MPT - Direito do Trabalho',
    examType: 'CONCURSO',
    board: 'FCC',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Prevalência do Negociado sobre o Legislado (Art. 611-A CLT e STF Tema 1046)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um sindicato laboral e um sindicato patronal firmaram Convenção Coletiva de Trabalho reduzindo o intervalo intrajornada para 30 minutos em jornada superior a 6 horas diárias, sem suprimi-lo, e mantendo o pagamento correspondente em contrapartida de outros benefícios. Conforme o Art. 611-A e Art. 611-B da CLT e o Tema 1046 do STF:`,
    options: [
      { letter: 'A', text: 'A cláusula é nula de pleno direito porque o intervalo intrajornada constitui norma de saúde inegociável nem mesmo por redução mínima.' },
      { letter: 'B', text: 'A convenção coletiva prevalece sobre a lei, sendo lícita a redução do intervalo intrajornada respeitado o limite mínimo de 30 minutos para jornadas superiores a seis horas.' },
      { letter: 'C', text: 'As normas coletivas podem inclusive reduzir ou suprimir o valor do FGTS e do 13º salário.' },
      { letter: 'D', text: 'A redução do intervalo depende de autorização individual do Auditor-Fiscal do Trabalho mesmo existindo norma coletiva.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 611-A, III, da CLT autoriza expressamente que a convenção ou acordo coletivo prevaleça sobre a lei quanto ao intervalo intrajornada, respeitado o limite mínimo de 30 minutos para jornadas superiores a 6 horas. Ademais, o STF no Tema 1046 (ARE 1.121.633) declarou serem constitucionais acordos e convenções coletivos que limitam ou afastam direitos trabalhistas, desde que respeitados os direitos absolutamente indisponíveis (rol exemplificado no art. 611-B, como FGTS, 13º salário, salário mínimo e licença-maternidade).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A própria CLT (art. 611-A, III) e o Tema 1046 STF validam a redução negociada até o piso de 30 minutos.' },
      { letter: 'C', explanation: 'Incorreta. FGTS e 13º salário estão protegidos no rol proibitivo do art. 611-B da CLT.' },
      { letter: 'D', explanation: 'Incorreta. Autorização ministerial (art. 71, § 3º) é exigível quando não há negociação coletiva nos termos do art. 611-A, III.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 611-A, III e Art. 611-B', textSnippet: 'A convenção coletiva e o acordo coletivo de trabalho têm prevalência sobre a lei quando, entre outros, dispuserem sobre: (...) III - intervalo intrajornada, respeitado o limite mínimo de trinta minutos para jornadas superiores a seis horas.' }
    ],
    jurisprudence: 'STF Tema 1046 (ARE 1.121.633).',
    professorTip: 'Tema 1046 STF + Art. 611-A CLT: Negociação Coletiva pode reduzir intervalo até 30 min! Mas NUNCA pode mexer em FGTS, 13º, salário mínimo, férias, licença-maternidade nem normas de segurança e saúde (Art. 611-B).'
  },
  {
    id: 'trab_ext_07',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Estabilidade da Gestante e Contrato de Experiência / Desconhecimento (Súmula 244 TST)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Amanda foi contratada por contrato de experiência de 90 dias. Ao término do contrato, foi dispensada pela empresa, que desconhecia o estado gravídico da empregada. Duas semanas depois, exame médico constatou que Amanda já estava grávida de 6 semanas no momento da dispensa. À luz do ADCT e da Súmula 244 do TST:`,
    options: [
      { letter: 'A', text: 'Não há estabilidade em contrato por prazo determinado como o de experiência.' },
      { letter: 'B', text: 'O desconhecimento do estado gravídico pelo empregador afasta o direito à indenização estabilitária.' },
      { letter: 'C', text: 'A empregada gestante tem direito à estabilidade provisória prevista no Art. 10, II, b, do ADCT mesmo na hipótese de admissão mediante contrato por tempo determinado e ainda que o empregador desconhecesse a gravidez.' },
      { letter: 'D', text: 'A estabilidade da gestante perdura apenas até a data do parto.' }
    ],
    correctAnswer: 'C',
    justification: `Segundo a Súmula 244 do TST e o Tema 497 do STF: o desconhecimento do estado gravídico pelo empregador não afasta o direito ao pagamento da indenização decorrente da estabilidade (item I); e a empregada gestante tem direito à estabilidade provisória mesmo na admissão por contrato por tempo determinado (item III), desde a confirmação da gravidez até 5 meses após o parto (art. 10, II, b, ADCT).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Contraria o item III da Súmula 244 do TST.' },
      { letter: 'B', explanation: 'Incorreta. A responsabilidade pela proteção à maternidade é objetiva (item I da Súmula 244 e Tema 497 STF).' },
      { letter: 'D', explanation: 'Incorreta. Perdura desde a confirmação da gravidez (concepção durante o vínculo) até 5 meses após o parto.' }
    ],
    statuteReferences: [
      { code: 'ADCT / CF/88', article: 'Art. 10, II, b', textSnippet: 'Fica vedada a dispensa arbitrária ou sem justa causa: (...) b) da empregada gestante, desde a confirmação da gravidez até cinco meses após o parto.' }
    ],
    jurisprudence: 'Súmula 244 do TST e STF Tema 497.',
    professorTip: 'Súmula 244 TST: Estabilidade da gestante = Desde a concepção até 5 meses após o parto! Vale até no contrato de experiência e mesmo que ninguém soubesse da gravidez na hora da demissão!'
  },
  {
    id: 'trab_ext_08',
    exam: 'Prova Semestral Faculdade de Direito - Direito do Trabalho',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Adicionais de Insalubridade x Periculosidade (Não Cumulatividade)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Um técnico em radiologia e alta tensão trabalha exposto simultaneamente a agente insalubre em grau máximo (40% sobre o salário mínimo) e a agente perigoso por energia elétrica (30% sobre o salário base). De acordo com o Art. 193, § 2º, da CLT e a jurisprudência consolidada do TST:`,
    options: [
      { letter: 'A', text: 'Os adicionais de insalubridade e periculosidade são obrigatoriamente cumuláveis por terem fatos geradores distintos.' },
      { letter: 'B', text: 'Não é possível a cumulação dos adicionais de insalubridade e periculosidade, ainda que decorrentes de fatos geradores distintos e autônomos, cabendo ao empregado optar pelo adicional que lhe for mais vantajoso.' },
      { letter: 'C', text: 'O adicional de periculosidade incide sempre sobre o salário mínimo nacional.' },
      { letter: 'D', text: 'A empresa escolhe unilateralmente o adicional de menor valor para pagar ao trabalhador.' }
    ],
    correctAnswer: 'B',
    justification: `O TST, no julgamento de Incidente de Recursos Repetitivos (IRR-239-55.2011.5.02.0319), reafirmou a literalidade do art. 193, § 2º, da CLT: o empregado NÃO pode cumular os adicionais de insalubridade e periculosidade, mesmo quando os agentes são distintos, devendo optar pelo que lhe for mais vantajoso.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A tese da cumulação foi rejeitada pelo TST em sede de recurso repetitivo.' },
      { letter: 'C', explanation: 'Incorreta. A periculosidade é de 30% sobre o SALÁRIO BASE do empregado (art. 193, § 1º CLT); a insalubridade (10%, 20% ou 40%) incide, em regra, sobre o salário mínimo.' },
      { letter: 'D', explanation: 'Incorreta. A escolha cabe ao empregado (o mais vantajoso).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 193, §§ 1º e 2º', textSnippet: 'O empregado poderá optar pelo adicional de insalubridade que porventura lhe seja devido.' }
    ],
    professorTip: 'Insalubridade (10/20/40% do salário mínimo) + Periculosidade (30% do salário base): NÃO ACUMULAM! O trabalhador escolhe o maior!'
  },
  {
    id: 'trab_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Rescisão Indireta do Contrato de Trabalho (Art. 483 CLT)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Há oito meses consecutivos, uma empresa deixou de depositar o FGTS mensal na conta vinculada de seu empregado, além de atrasar reiteradamente o pagamento dos salários por mais de 20 dias após o quinto dia útil. Desejando romper o vínculo por falta grave do empregador sem perder suas verbas rescisórias, o empregado deverá pleitear judicialmente:`,
    options: [
      { letter: 'A', text: 'Pedido de demissão simples com pagamento de aviso prévio à empresa.' },
      { letter: 'B', text: 'Rescisão indireta do contrato de trabalho (despedida indireta), com direito ao recebimento integral das verbas rescisórias como se dispensado sem justa causa fosse.' },
      { letter: 'C', text: 'Extinção por acordo mútuo com redução pela metade da multa do FGTS.' },
      { letter: 'D', text: 'Suspensão do contrato de trabalho por força maior.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 483, "d", da CLT, o empregado poderá considerar rescindido o contrato e pleitear a devida indenização quando não cumprir o empregador as obrigações do contrato. O TST pacifica que o descumprimento contumaz do recolhimento do FGTS e a mora salarial reiterada caracterizam falta grave patronal suficiente para a rescisão indireta.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Pedido de demissão faria o trabalhador perder aviso prévio indenizado, multa de 40% e seguro-desemprego.' },
      { letter: 'C', explanation: 'Incorreta. Não há acordo amigável, mas falta grave do empregador.' },
      { letter: 'D', explanation: 'Incorreta. Descumprimento contratual patronal não é força maior.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 483, d', textSnippet: 'O empregado poderá considerar rescindido o contrato e pleitear a devida indenização quando: (...) d) não cumprir o empregador as obrigações do contrato.' }
    ],
    professorTip: 'Rescisão Indireta (Art. 483 CLT) = "Justa Causa no Patrão"! Empregado sai recebendo TUDO como na dispensa sem justa causa (aviso prévio, 40% FGTS, saque FGTS e seguro-desemprego).'
  },
  {
    id: 'trab_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Contrato de Trabalho Intermitente (Art. 443, § 3º e Art. 452-A CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um garçom firmou contrato de trabalho intermitente por escrito com uma casa de eventos. Convocado com quatro dias de antecedência para trabalhar em um fim de semana, o empregado recusou a convocação. Sobre o trabalho intermitente na CLT (Art. 452-A):`,
    options: [
      { letter: 'A', text: 'A recusa da oferta pelo empregado caracteriza insubordinação e autoriza justa causa imediata.' },
      { letter: 'B', text: 'A recusa da oferta pelo empregado não descaracteriza a subordinação para fins do contrato de trabalho intermitente, tendo ele o prazo de 1 dia útil para responder ao chamado.' },
      { letter: 'C', text: 'A convocação do empregado intermitente pode ser feita com apenas duas horas de antecedência.' },
      { letter: 'D', text: 'O empregado intermitente não tem direito a férias proporcionais nem a 13º salário proporcional.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 452-A, §§ 1º a 3º, da CLT: o empregador convocará o empregado com pelo menos 3 dias corridos de antecedência (§ 1º); o empregado terá o prazo de 1 dia útil para responder, presumindo-se no silêncio a recusa (§ 2º); e a recusa da oferta NÃO descaracteriza a subordinação nem gera punição (§ 3º). Ao final de cada período de prestação, recebe remuneração, férias proporcionais + 1/3, 13º proporcional, DSR e adicionais (§ 6º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A liberdade de recusar a convocação é traço próprio do trabalho intermitente (art. 452-A, § 3º).' },
      { letter: 'C', explanation: 'Incorreta. A antecedência mínima legal da convocação é de 3 dias corridos (§ 1º).' },
      { letter: 'D', explanation: 'Incorreta. Recebe férias proporcionais com 1/3 e 13º proporcional imediatamente ao final de cada período trabalhado (§ 6º).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 452-A, §§ 1º a 3º', textSnippet: 'A recusa da oferta não descaracteriza a subordinação para fins do contrato de trabalho intermitente.' }
    ],
    professorTip: 'Prazos do Trabalho Intermitente (Art. 452-A CLT): Convocação com ≥ 3 DIAS CORRIDOS de antecedência; Empregado responde em 1 DIA ÚTIL (silêncio = recusa, sem punição!).'
  },
  {
    id: 'trab_ext_11',
    exam: 'Concurso Procurador / Magistratura - Direito do Trabalho',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Prescrição Quinquenal e Bienal Trabalhista (Art. 7º, XXIX, CF e Art. 11 CLT)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um empregado trabalhou em uma indústria de 01/02/2014 a 10/05/2022, data em que foi dispensado com aviso prévio indenizado (projetado até 09/06/2022? Não — considerando a projeção legal de 54 dias até 03/07/2022). Se o trabalhador ajuizar reclamação trabalhista em 15/06/2024, considerando a OJ 83 da SDI-1 do TST e o Art. 7º, XXIX, da CF/88:`,
    options: [
      { letter: 'A', text: 'Operou-se a prescrição bienal total porque se passaram mais de dois anos da data da dispensa em 10/05/2022.' },
      { letter: 'B', text: 'A prescrição bienal começa a fluir ao término do aviso prévio, inclusive o indenizado (OJ 83 SDI-1 TST), logo a ação é tempestiva, podendo cobrar parcelas dos 5 anos anteriores ao ajuizamento.' },
      { letter: 'C', text: 'A prescrição bienal corre contra menores de 18 anos desde a data da rescisão.' },
      { letter: 'D', text: 'Para depósitos não efetuados de FGTS aplica-se hoje prescrição trintenária em todos os casos.' }
    ],
    correctAnswer: 'B',
    justification: `Consoante a OJ 83 da SDI-1 do TST e art. 487, § 1º, CLT, a prescrição começa a fluir no final da data do término do aviso prévio, ainda que indenizado. Assim, projetado o término para julho/2022, a ação ajuizada em junho/2024 está dentro do biênio constitucional, preservando as parcelas dos últimos 5 anos contados do ajuizamento (Súmula 308, I, TST).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O aviso prévio integra o tempo de serviço para todos os efeitos, inclusive termo inicial da prescrição bienal.' },
      { letter: 'C', explanation: 'Incorreta. Contra menores de 18 anos não corre nenhum prazo de prescrição (art. 440 CLT).' },
      { letter: 'D', explanation: 'Incorreta. Desde o ARE 709.212 do STF e Súmula 362 TST, a prescrição do FGTS é quinquenal (observada a modulação antiga já superada pelo decurso de 5 anos após nov/2014).' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 7º, XXIX', textSnippet: 'Ação, quanto aos créditos resultantes das relações de trabalho, com prazo prescricional de cinco anos para os trabalhadores urbanos e rurais, até o limite de dois anos após a extinção do contrato de trabalho.' }
    ],
    jurisprudence: 'OJ 83 da SDI-1 do TST e Súmula 308 do TST.',
    professorTip: 'Prescrição Trabalhista: 2 ANOS após o fim do contrato (contando após a projeção do aviso prévio!) para entrar com a ação, cobrando os últimos 5 ANOS contados da data do ajuizamento! Menor de 18 anos = NÃO corre prescrição (Art. 440 CLT).'
  },
  {
    id: 'trab_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Súmula 331 TST e Tema 725 STF - Terceirização Lícita',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um banco contratou empresa especializada de tecnologia para prestar serviços ligados à própria atividade-fim bancária, em regime de terceirização regular. Inadimplente a prestadora quanto aos salários e FGTS dos empregados terceirizados, estes ajuizaram ação contra ambas. Conforme o entendimento vinculante do STF (ADPF 324 e Tema 725):`,
    options: [
      { letter: 'A', text: 'A terceirização da atividade-fim é ilícita e gera automaticamente vínculo direto com o banco tomador.' },
      { letter: 'B', text: 'É lícita a terceirização de qualquer atividade, meio ou fim, não se configurando relação de emprego entre a contratante e os empregados da contratada, subsistindo a responsabilidade subsidiária da tomadora privada pelos débitos trabalhistas.' },
      { letter: 'C', text: 'Na terceirização privada lícita, a empresa tomadora fica isenta até mesmo de responsabilidade subsidiária.' },
      { letter: 'D', text: 'O ente público tomador responde objetivamente de forma automática pelo mero inadimplemento da prestadora.' }
    ],
    correctAnswer: 'B',
    justification: `O STF na ADPF 324 e Tema 725 firmou que é lícita a terceirização em todas as etapas do processo produtivo (meio ou fim), mantendo-se a responsabilidade SUBSIDIÁRIA da empresa contratante privada (art. 5º-A, § 5º, da Lei 6.019/74). Já quanto ao ente público (Tema 246 STF), a responsabilidade subsidiária exige comprovação de culpa in vigilando (não é automática).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A proibição de terceirizar atividade-fim da Súmula 331, I, foi superada pelo STF e Lei 13.429/17.' },
      { letter: 'C', explanation: 'Incorreta. O tomador privado responde subsidiariamente pelas obrigações trabalhistas (Tema 725).' },
      { letter: 'D', explanation: 'Incorreta. O ente público responde apenas se comprovada falha na fiscalização (Súmula 331, V e Tema 246).' }
    ],
    statuteReferences: [
      { code: 'Lei 6.019/1974', article: 'Art. 4º-A e Art. 5º-A, § 5º', textSnippet: 'A empresa contratante é subsidiariamente responsável pelas obrigações trabalhistas referentes ao período em que ocorrer a prestação de serviços...' }
    ],
    jurisprudence: 'STF ADPF 324 e Tema 725.',
    professorTip: 'Terceirização hoje: Pode em atividade-meio E atividade-fim! Tomador PRIVADO = responsabilidade subsidiária objetiva. Tomador PÚBLICO = responsabilidade subsidiária SÓ se provar culpa na fiscalização!'
  },
  {
    id: 'trab_ext_13',
    exam: 'Prova Semestral Faculdade de Direito - Direito do Trabalho',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Jornada 12x36 e Pagamento de Feriados (Art. 59-A CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Um vigilante trabalha na escala de 12 horas seguidas por 36 horas ininterruptas de descanso (12x36), pactuada por acordo individual escrito após a Reforma Trabalhista. Durante o mês, dois de seus plantões caíram em feriados nacionais, sem concessão de folga extra. À luz do Art. 59-A da CLT:`,
    options: [
      { letter: 'A', text: 'A jornada 12x36 somente é válida mediante convenção ou acordo coletivo, jamais por acordo individual.' },
      { letter: 'B', text: 'A jornada 12x36 pode ser ajustada por acordo individual escrito, e a remuneração mensal pactuada já abrange os pagamentos devidos pelo descanso semanal remunerado e pelos feriados, sendo considerados compensados.' },
      { letter: 'C', text: 'Os feriados trabalhados na escala 12x36 devem ser pagos em dobro (Súmula 444 TST).' },
      { letter: 'D', text: 'A jornada 12x36 é proibida em qualquer atividade insalubre mesmo com autorização coletiva.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 59-A da CLT (declarado constitucional pelo STF na ADI 5994) permite estabelecer horário de 12x36 por acordo individual escrito, convenção ou acordo coletivo, dispondo expressamente no parágrafo único que a remuneração mensal já abrange os pagamentos pelo DSR e pelos feriados (superando a antiga Súmula 444 do TST quanto aos feriados).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O art. 59-A autoriza expressamente acordo individual escrito (confirmado pelo STF na ADI 5994).' },
      { letter: 'C', explanation: 'Incorreta. O parágrafo único do art. 59-A considera os feriados já compensados na remuneração mensal.' },
      { letter: 'D', explanation: 'Incorreta. O art. 60, parágrafo único, excepciona a jornada 12x36 da licença prévia ministerial em atividades insalubres.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 59-A, caput e parágrafo único', textSnippet: 'A remuneração mensal pactuada pelo horário previsto no caput deste artigo abrange os pagamentos devidos pelo descanso semanal remunerado e pelo descanso em feriados, e serão considerados compensados os feriados e as prorrogações de trabalho noturno...' }
    ],
    professorTip: 'Reforma Trabalhista mudou a Súmula 444 TST na escala 12x36: agora cabe acordo individual escrito e feriado trabalhado já está embutido no salário mensal (sem dobra)!'
  },
  {
    id: 'trab_ext_14',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Dano Extrapatrimonial Trabalhista e Tarifação (STF ADIs 6050, 6069 e 6082)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Em reclamação trabalhista com pedido de indenização por danos morais decorrentes de assédio moral no ambiente de trabalho, a reclamada alega que o juiz não pode arbitrar indenização superior ao teto de 50 vezes o último salário contratual do ofendido, previsto no Art. 223-G, § 1º, da CLT. Segundo o julgamento definitivo do STF (ADIs 6050, 6069 e 6082):`,
    options: [
      { letter: 'A', text: 'Os tetos previstos no art. 223-G da CLT são absolutos e intransponíveis pelo juiz.' },
      { letter: 'B', text: 'Os critérios de quantificação previstos no Art. 223-G da CLT são constitucionais como parâmetros orientadores, mas os valores ali estabelecidos NÃO constituem tetos limitadores, podendo o juiz fixar indenização superior em decisão fundamentada.' },
      { letter: 'C', text: 'Todo o Título II-A sobre dano extrapatrimonial foi declarado integralmente inconstitucional pelo STF.' },
      { letter: 'D', text: 'Empregados que recebem salários menores têm direito apenas à metade do dano moral sofrido por diretores no mesmo acidente.' }
    ],
    correctAnswer: 'B',
    justification: `O STF julgou parcialmente procedentes as ADIs 6050, 6069 e 6082 para conferir interpretação conforme à Constituição ao art. 223-G, § 1º, da CLT: os critérios do dispositivo são válidos apenas como parâmetros orientadores para a fundamentação judicial, mas NÃO estabelecem teto obrigatório que limite o valor da reparação pelo dano extrapatrimonial.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O STF rejeitou o caráter de teto tarifado limitador.' },
      { letter: 'C', explanation: 'Incorreta. O STF manteve os dispositivos usando interpretação conforme (parâmetros orientadores).' },
      { letter: 'D', explanation: 'Incorreta. Viola a dignidade humana e a isonomia limitar a dor pelo valor salarial.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 223-G, § 1º', textSnippet: 'Ao julgar procedente o pedido, o juízo fixará a indenização a ser paga, a cada um dos ofendidos, em um dos seguintes parâmetros...' }
    ],
    jurisprudence: 'STF ADIs 6050, 6069 e 6082.',
    professorTip: 'Tarifação do Dano Moral na CLT (Art. 223-G): Para o STF, os valores da tabela são apenas ORIENTADORES, NÃO são teto máximo!'
  },
  {
    id: 'trab_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Direito do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito do Trabalho',
    topic: 'Justa Causa por Embriaguez e Perda de Habilitação (Art. 482 CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um motorista profissional de caminhão teve sua Carteira Nacional de Habilitação (CNH) definitivamente cassada pelo órgão de trânsito em decorrência de multas graves cometidas em seu carro particular nos fins de semana por conduta dolosa própria, ficando impossibilitado de exercer sua profissão na empregadora. Conforme o Art. 482, alínea "m", da CLT:`,
    options: [
      { letter: 'A', text: 'Não cabe justa causa porque as infrações ocorreram fora do horário de trabalho.' },
      { letter: 'B', text: 'Configura justa causa a perda da habilitação ou dos requisitos estabelecidos em lei para o exercício da profissão, em decorrência de conduta dolosa do empregado.' },
      { letter: 'C', text: 'A empresa é obrigada a criar um cargo administrativo interno para realocar o motorista.' },
      { letter: 'D', text: 'Configura despedida sem justa causa por fato do príncipe.' }
    ],
    correctAnswer: 'B',
    justification: `A Reforma Trabalhista incluiu a alínea "m" ao art. 482 da CLT prevendo expressamente como justa causa a "perda da habilitação ou dos requisitos estabelecidos em lei para o exercício da profissão, em decorrência de conduta dolosa do empregado" (ex.: motorista com CNH cassada, advogado com inscrição na OAB cancelada por fraude dolosa).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Mesmo fora do expediente, se inviabilizar o requisito legal indispensável à função por ato doloso, aplica-se a alínea "m".' },
      { letter: 'C', explanation: 'Incorreta. Não há dever de readaptação nesse caso de perda dolosa da habilitação.' },
      { letter: 'D', explanation: 'Incorreta. Fato do príncipe (art. 486 CLT) decorre de ato da autoridade que paralisa a atividade empresarial, não de infração pessoal do trabalhador.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 482, m', textSnippet: 'Constituem justa causa para rescisão do contrato de trabalho pelo empregador: (...) m) perda da habilitação ou dos requisitos estabelecidos em lei para o exercício da profissão, em decorrência de conduta dolosa do empregado.' }
    ],
    professorTip: 'Alínea "m" do Art. 482 CLT: Perda dolosa da habilitação profissional (CNH, OAB, CRM) = JUSTA CAUSA!'
  },
  {
    id: 'proctrab_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Processo do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Honorários Sucumbenciais e Justiça Gratuita (ADI 5766 STF)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Trabalhador beneficiário da justiça gratuita obteve procedência parcial em reclamação trabalhista, ganhando R$ 15.000,00 referentes a horas extras, mas sucumbindo integralmente no pedido de adicional de insalubridade. Considerando o julgamento da ADI 5766 pelo STF sobre o Art. 791-A, § 4º, da CLT:`,
    options: [
      { letter: 'A', text: 'Os honorários devidos aos advogados da empresa serão automaticamente descontados dos créditos de R$ 15.000,00 obtidos pelo trabalhador nesta ação.' },
      { letter: 'B', text: 'O beneficiário da justiça gratuita não pode ter seus créditos obtidos no processo (ou em outro) utilizados para pagar honorários de sucumbência, ficando as obrigações decorrentes de sua sucumbência sob condição suspensiva de exigibilidade por dois anos.' },
      { letter: 'C', text: 'O beneficiário da justiça gratuita jamais pode ser condenado em honorários de sucumbência na sentença.' },
      { letter: 'D', text: 'Na Justiça do Trabalho não existem honorários de sucumbência, apenas assistenciais sindicais.' }
    ],
    correctAnswer: 'B',
    justification: `Na ADI 5766, o STF declarou inconstitucional a expressão do art. 791-A, § 4º, da CLT que permitia compensar os honorários sucumbenciais com créditos obtidos pelo beneficiário da justiça gratuita neste ou em outro processo (assim como inconstitucional a cobrança de honorários periciais do beneficiário). Mantém-se a condenação sob condição suspensiva de exigibilidade por 2 anos, só executável se o credor comprovar que deixou de existir a insuficiência de recursos.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Essa compensação direta foi declarada inconstitucional pelo STF na ADI 5766.' },
      { letter: 'C', explanation: 'Incorreta. A condenação existe na sentença, mas fica sob condição suspensiva de exigibilidade por 2 anos.' },
      { letter: 'D', explanation: 'Incorreta. Os honorários sucumbenciais (5% a 15%) foram instituídos pelo art. 791-A da CLT.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 791-A, caput e § 4º', textSnippet: 'Ao advogado, ainda que atue em causa própria, serão devidos honorários de sucumbência, fixados entre o mínimo de 5% (cinco por cento) e o máximo de 15% (quinze por cento)...' }
    ],
    jurisprudence: 'STF ADI 5766.',
    professorTip: 'ADI 5766 (cai muito na OAB!): Beneficiário da Justiça Gratuita NÃO paga honorários periciais nem tem desconto dos créditos ganhos para pagar advogado da outra parte! Fica suspenso por 2 anos!'
  },
  {
    id: 'proctrab_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Processo do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Ausência das Partes em Audiência (Art. 844 CLT e Preposto)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Na audiência una trabalhista, a empresa reclamada não enviou nenhum sócio nem preposto, fazendo-se representar exclusivamente por seu advogado regularmente constituído, munido de defesa e documentos. O reclamante compareceu normalmente com seu advogado. À luz do Art. 844, § 5º, da CLT:`,
    options: [
      { letter: 'A', text: 'A ausência do preposto gera revelia e confissão quanto à matéria de fato, não podendo a defesa escrita ser recebida.' },
      { letter: 'B', text: 'Ainda que ausente o reclamado, presente o advogado na audiência, serão aceitos a contestação e os documentos eventualmente apresentados, afastando-se apenas os efeitos materiais mais gravosos se a defesa for recebida (mantida a revelia se não justificada).' },
      { letter: 'C', text: 'O advogado pode acumular as funções de defensor e de preposto em qualquer ação trabalhista.' },
      { letter: 'D', text: 'O processo será arquivado sem resolução do mérito por ausência da reclamada.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 844, § 5º, da CLT (Reforma Trabalhista), ainda que ausente o reclamado, presente o advogado na audiência, serão aceitos a contestação e os documentos eventualmente apresentados! Contudo, o advogado não substitui o preposto para depor (o preposto não precisa mais ser empregado — art. 843, § 3º CLT —, mas o advogado não pode depor pela parte, conforme art. 3º do CED/OAB e jurisprudência do TST).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Súmula 122 do TST foi superada nessa parte pelo art. 844, § 5º, da CLT: a contestação e documentos são recebidos.' },
      { letter: 'C', explanation: 'Incorreta. É vedado acumular as funções de advogado e preposto no mesmo processo.' },
      { letter: 'D', explanation: 'Incorreta. Arquivamento ocorre pela ausência do RECLAMANTE (art. 844, caput), não da reclamada.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 843, § 3º e Art. 844, § 5º', textSnippet: 'Ainda que ausente o reclamado, presente o advogado na audiência, serão aceitos a contestação e os documentos eventualmente apresentados.' }
    ],
    professorTip: 'Audiência Trabalhista (Art. 844): Reclamante faltou = ARQUIVA (e paga custas se não justificar em 15 dias). Reclamada faltou, mas advogado foi = Juiz RECEBE a contestação e documentos (§ 5º)! E o preposto NÃO precisa mais ser empregado!'
  },
  {
    id: 'proctrab_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Processo do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Exceção de Incompetência Territorial (Art. 800 CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Empresa com sede em Curitiba/PR foi citada em reclamação trabalhista ajuizada em Salvador/BA, local onde o reclamante jamais residiu ou prestou serviços. Desejando arguir a incompetência territorial do juízo baiano antes da audiência, conforme o procedimento previsto no Art. 800 da CLT, a reclamada deverá:`,
    options: [
      { letter: 'A', text: 'Apresentar a arguição como preliminar no corpo da contestação diretamente na audiência.' },
      { letter: 'B', text: 'Apresentar exceção de incompetência territorial em peça apartada, no prazo de 5 dias a contar da notificação, antes da audiência, o que suspenderá o processo até sua decisão.' },
      { letter: 'C', text: 'Impetrar exceção de incompetência no prazo de 15 dias úteis segundo o CPC.' },
      { letter: 'D', text: 'Aguardar a prolação da sentença para recorrer ordinariamente.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 800 da CLT (Reforma Trabalhista), a exceção de incompetência territorial deve ser apresentada no prazo de 5 dias a contar da notificação, ANTES DA AUDIÊNCIA e em PEÇA QUE SINALIZE A EXISTÊNCIA DESTA EXCEÇÃO (não em preliminar da contestação), suspendendo-se o processo (§ 1º) para oitiva do exceto em 5 dias e decisão.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A apresentação em preliminar na audiência foi substituída pelo rito prévio em 5 dias do art. 800 CLT.' },
      { letter: 'C', explanation: 'Incorreta. O prazo específico da CLT é de 5 dias (não 15 do CPC).' },
      { letter: 'D', explanation: 'Incorreta. Não arguir no momento oportuno gera prorrogação da competência territorial (relativa).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 800, caput e § 1º', textSnippet: 'Apresentada exceção de incompetência territorial no prazo de cinco dias a contar da notificação, antes da audiência e em peça que sinalize a existência desta exceção, seguir-se-á o procedimento estabelecido neste artigo.' }
    ],
    professorTip: 'Exceção de Incompetência Territorial (Art. 800 CLT): Prazo de 5 DIAS da notificação, em peça própria ANTES da audiência, e SUSPENDE o processo!'
  },
  {
    id: 'proctrab_ext_04',
    exam: 'Prova Semestral Faculdade de Direito - Processo do Trabalho',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Competência Material da Justiça do Trabalho (Art. 114 CF/88 e Súmulas)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Considerando o Art. 114 da Constituição Federal e a jurisprudência vinculante do STF e STJ sobre a competência material da Justiça do Trabalho, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Compete à Justiça do Trabalho julgar ações de servidores públicos estatutários contra a Administração Pública.' },
      { letter: 'B', text: 'Compete à Justiça do Trabalho julgar ações de cobrança de honorários de profissionais liberais (como advogados ou médicos autônomos) contra seus clientes.' },
      { letter: 'C', text: 'Compete à Justiça do Trabalho processar e julgar as ações de indenização por dano moral ou patrimonial decorrentes da relação de trabalho, inclusive acidente de trabalho.' },
      { letter: 'D', text: 'Compete à Justiça do Trabalho executar de ofício todas as contribuições previdenciárias devidas a terceiros (Sistema S) e salários pretéritos não pagos em acordo sem vínculo reconhecido.' }
    ],
    correctAnswer: 'C',
    justification: `O art. 114, VI, da CF/88 e a Súmula Vinculante nº 22 do STF consolidam que compete à Justiça do Trabalho julgar as ações de indenização por dano moral ou patrimonial decorrentes da relação de trabalho, inclusive aquelas fundadas em acidente de trabalho movidas pelo empregado (ou seus sucessores/viúva, segundo o STF).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. ADI 3395 do STF: regime jurídico-administrativo / estatutário compete à Justiça Comum.' },
      { letter: 'B', explanation: 'Incorreta. Súmula 363 do STJ: cobrança de honorários de profissional liberal contra cliente compete à Justiça Comum Estadual.' },
      { letter: 'D', explanation: 'Incorreta. Súmula Vinculante 53 STF: a execução de ofício pela JT alcança apenas as contribuições previdenciárias incidentes sobre sentenças condenatórias em pecúnia ou acordos que integram o salário de contribuição, não abrangendo terceiros ou sentenças meramente declaratórias.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 114, VI', textSnippet: 'Compete à Justiça do Trabalho processar e julgar: (...) VI - as ações de indenização por dano moral ou patrimonial, decorrentes da relação de trabalho.' }
    ],
    jurisprudence: 'Súmula Vinculante nº 22 e nº 53 do STF; ADI 3395.',
    professorTip: 'SV 22 STF: Acidente do trabalho entre empregado e empregador = JUSTIÇA DO TRABALHO! Mas ação acidentária contra o INSS = Justiça Estadual (art. 109, I, CF).'
  },
  {
    id: 'proctrab_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Processo do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Recursos na Fase de Execução (Agravo de Petição e Garantia do Juízo)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Na fase de execução trabalhista contra sociedade empresária privada (não filantrópica), o juízo julgou improcedentes os Embargos à Execução opostos pela executada após garantia integral do juízo por seguro garantia judicial. Inconformada com a decisão dos embargos à execução, a executada poderá interpor:`,
    options: [
      { letter: 'A', text: 'Agravo de Instrumento, no prazo de 8 dias.' },
      { letter: 'B', text: 'Agravo de Petição, no prazo de 8 dias úteis, com delimitação justificada das matérias e dos valores impugnados.' },
      { letter: 'C', text: 'Recurso Ordinário, no prazo de 8 dias.' },
      { letter: 'D', text: 'Recurso de Revista imediatamente para o TST sobre matéria fática.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 897, "a", e § 1º da CLT, das decisões do juiz nas execuções (como a que julga embargos à execução ou impugnação à sentença de liquidação) cabe AGRAVO DE PETIÇÃO no prazo de 8 dias úteis, exigindo-se a delimitação justificada das matérias e dos valores impugnados (permitindo a execução definitiva imediata da parte incontroversa).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Agravo de Instrumento no Processo do Trabalho serve exclusivamente para destrancar recurso denegado (art. 897, b).' },
      { letter: 'C', explanation: 'Incorreta. RO cabe de decisões na fase de conhecimento.' },
      { letter: 'D', explanation: 'Incorreta. Recurso de Revista só cabe contra acórdão de TRT (e na execução apenas por ofensa direta à CF/88 — art. 896, § 2º).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 897, a e § 1º', textSnippet: 'Cabe agravo, no prazo de 8 (oito) dias: a) de petição, das decisões do Juiz ou Presidente, nas execuções; (...) § 1º O agravo de petição só será recebido quando o agravante delimitar, justificadamente, as matérias e os valores impugnados...' }
    ],
    professorTip: 'Agravo de PETIÇÃO = Recurso da EXECUÇÃO Trabalhista (8 dias + delimitar valores)! Agravo de INSTRUMENTO na CLT = SÓ para destrancar recurso barrado!'
  },
  {
    id: 'proctrab_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Processo do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Incidente de Desconsideração da Personalidade Jurídica (IDPJ - Art. 855-A CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Na execução definitiva de sentença trabalhista, frustrada a tentativa de penhora de bens da sociedade limitada executada, o exequente requer a inclusão imediata dos sócios no polo passivo para bloqueio de suas contas pessoais. Conforme o Art. 855-A da CLT:`,
    options: [
      { letter: 'A', text: 'O juiz deve redirecionar automaticamente a execução contra os sócios sem prévia oitiva, por força do impulso oficial.' },
      { letter: 'B', text: 'Aplica-se ao processo do trabalho o incidente de desconsideração da personalidade jurídica previsto no CPC, garantindo-se o contraditório prévio aos sócios antes da constrição definitiva.' },
      { letter: 'C', text: 'Da decisão interlocutória que acolhe ou rejeita o IDPJ na fase de conhecimento cabe agravo de petição imediato.' },
      { letter: 'D', text: 'O IDPJ suspende o curso do processo, não cabendo tutela de urgência cautelar em nenhuma hipótese.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 855-A da CLT tornou aplicável expressamente o IDPJ do CPC (arts. 133 a 137) ao Processo do Trabalho, assegurando citação dos sócios para manifestação em 15 dias antes da desconsideração. Pelo § 1º do art. 855-A: da decisão do IDPJ na fase de conhecimento NÃO cabe recurso imediato (irrecorribilidade das interlocutórias); na fase de execução, cabe agravo de petição; e se proferida pelo relator no TRT, agravo interno. O juiz pode conceder tutela de urgência cautelar (§ 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A instauração do IDPJ com contraditório prévio é obrigatória.' },
      { letter: 'C', explanation: 'Incorreta. Na fase de conhecimento, a decisão do IDPJ é irrecorrível de imediato (art. 855-A, § 1º, I); o agravo de petição cabe somente na execução (inciso II).' },
      { letter: 'D', explanation: 'Incorreta. O art. 855-A, § 2º, ressalva expressamente o poder geral de cautela para tutelas de urgência.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 855-A, §§ 1º e 2º', textSnippet: 'Aplica-se ao processo do trabalho o incidente de desconsideração da personalidade jurídica previsto nos arts. 133 a 137 da Lei nº 13.105, de 16 de março de 2015 (Código de Processo Civil).' }
    ],
    professorTip: 'IDPJ na CLT (Art. 855-A): Decisão na fase de CONHECIMENTO = irrecorrível de imediato! Decisão na EXECUÇÃO = Agravo de Petição (sem precisar garantir juízo)!'
  },
  {
    id: 'proctrab_ext_07',
    exam: 'Concurso Magistratura do Trabalho - Processo do Trabalho',
    examType: 'CONCURSO',
    board: 'FCC',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Irrecorribilidade Imediata das Decisões Interlocutórias (Súmula 214 TST)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `No Processo do Trabalho vigora a regra geral de irrecorribilidade imediata das decisões interlocutórias (Art. 893, § 1º, da CLT). Contudo, segundo a Súmula 214 do TST, admite-se excepcionalmente recurso imediato contra decisão interlocutória quando esta:`,
    options: [
      { letter: 'A', text: 'Indeferir oitiva de testemunha em audiência.' },
      { letter: 'B', text: 'Acolher exceção de incompetência territorial com a remessa dos autos para Tribunal Regional distinto daquele a que se vincula o juízo excepcionado.' },
      { letter: 'C', text: 'Rejeitar pedido de perícia contábil no rito ordinário.' },
      { letter: 'D', text: 'Fixar honorários periciais provisórios.' }
    ],
    correctAnswer: 'B',
    justification: `A Súmula 214 do TST excepciona a irrecorribilidade imediata em três hipóteses: a) decisão de TRT contrária à Súmula ou OJ do TST; b) decisão suscetível de impugnação mediante recurso para o mesmo Tribunal; c) decisão que acolhe exceção de incompetência territorial com remessa dos autos para TRT distinto daquele a que se vincula o juízo excepcionado.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Indeferimento de prova gera protesto em ata e discussão futura no Recurso Ordinário da sentença.' },
      { letter: 'C', explanation: 'Incorreta. Não integra as exceções da Súmula 214.' },
      { letter: 'D', explanation: 'Incorreta. Não desafia recurso ordinário imediato (cabe no recurso da sentença ou MS em caso de exigência ilegal de depósito prévio).' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 893, § 1º', textSnippet: 'Os incidentes do processo são resolvidos pelo próprio Juízo ou Tribunal, admitindo-se a apreciação do merecimento das decisões interlocutórias somente em recursos da decisão definitiva.' }
    ],
    jurisprudence: 'Súmula 214 do TST.',
    professorTip: 'Súmula 214 TST (cai muito!): Se a Vara de SP manda o processo para a Vara do RJ (outro TRT), cabe Recurso Ordinário IMEDIATO! Se manda para outra cidade de SP (mesmo TRT), não cabe recurso na hora!'
  },
  {
    id: 'proctrab_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Processo do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Atualização Monetária e Juros nos Débitos Trabalhistas (ADC 58 STF e Lei 14.905/2024)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Ao julgar as ADCs 58 e 59, o Supremo Tribunal Federal declarou inconstitucional a aplicação da Taxa Referencial (TR) para atualização de créditos trabalhistas. De acordo com o entendimento fixado pelo STF nas referidas ações declaratórias (antes de eventuais modificações legislativas supervenientes da Lei 14.905/2024 para o período posterior):`,
    options: [
      { letter: 'A', text: 'Na fase pré-judicial deve-se aplicar a TR e na judicial o IPCA-E.' },
      { letter: 'B', text: 'Até que sobrevenha solução legislativa, aplicam-se os mesmos índices das condenações cíveis em geral: IPCA-E (mais juros legais do art. 39, caput, da Lei 8.177/91) na fase pré-judicial e, a partir do ajuizamento da ação, a taxa SELIC (que já engloba correção e juros).' },
      { letter: 'C', text: 'Aplica-se o INPC somado a juros de 1% ao mês cumulativamente com a taxa SELIC.' },
      { letter: 'D', text: 'A atualização monetária trabalhista segue exclusivamente a poupança em todas as fases.' }
    ],
    correctAnswer: 'B',
    justification: `Na ADC 58, o STF estabeleceu que até edição de lei específica devem incidir: na fase pré-judicial, o IPCA-E + juros legais do art. 39, caput, da Lei 8.177/91; a partir do ajuizamento da ação, apenas a taxa SELIC (vedada cumulação da SELIC com outros juros de 1% ao mês). Posteriormente, com a Lei 14.905/2024 (alterando o CC), o TST passou a observar o IPCA na atualização + taxa legal SELIC deduzido o IPCA a partir da vigência da nova lei.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A TR foi expressamente afastada pelo STF.' },
      { letter: 'C', explanation: 'Incorreta. A SELIC já embute correção monetária e juros moratórios, proibindo-se bis in idem com juros de 1% ao mês.' },
      { letter: 'D', explanation: 'Incorreta. Poupança não é o índice fixado na ADC 58.' }
    ],
    statuteReferences: [
      { code: 'Código Civil / ADC 58 STF', article: 'Art. 406 CC e ADC 58', textSnippet: 'Aplicação do IPCA-E na fase pré-judicial e SELIC a partir do ajuizamento, nos termos da modulação da ADC 58/DF.' }
    ],
    jurisprudence: 'STF ADC 58 e ADC 59.',
    professorTip: 'ADC 58 STF: Fase pré-judicial = IPCA-E + TR/juros; Após ajuizamento = SELIC (sem somar juros de 1% por cima da SELIC!).'
  },
  {
    id: 'proctrab_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Processo do Trabalho',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Reconvenção, Pedido Contrário e Transcendência no Recurso de Revista',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Em recurso de revista interposto para o Tribunal Superior do Trabalho (TST), a recorrente busca o reexame da prova testemunhal sobre horas extras e deixa de demonstrar a existência de transcendência. Sobre o Recurso de Revista (Arts. 896 e 896-A da CLT):`,
    options: [
      { letter: 'A', text: 'O Recurso de Revista permite amplo reexame de fatos e provas colhidos na audiência de instrução.' },
      { letter: 'B', text: 'O Recurso de Revista exige prévio exame da transcendência (econômica, política, social ou jurídica) e não admite revolvimento de fatos e provas (Súmula 126 do TST).' },
      { letter: 'C', text: 'Nas causas sujeitas ao procedimento sumaríssimo cabe Recurso de Revista por divergência jurisprudencial entre TRTs.' },
      { letter: 'D', text: 'O prazo do Recurso de Revista é de 15 dias úteis.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 896-A da CLT impõe que o TST examine previamente se a causa oferece transcendência com relação aos reflexos gerais de natureza econômica, política, social ou jurídica. Ademais, pela Súmula 126 do TST, é incabível o recurso de revista (ou de embargos) para reexame de fatos e provas.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Vedado pela Súmula 126 do TST.' },
      { letter: 'C', explanation: 'Incorreta. No rito sumaríssimo (art. 896, § 9º), só cabe RR por contrariedade à Súmula do TST, Súmula Vinculante do STF ou violação direta da Constituição (não cabe por OJ nem por divergência entre TRTs).' },
      { letter: 'D', explanation: 'Incorreta. O prazo do Recurso de Revista também é de 8 dias úteis.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 896, § 9º e Art. 896-A', textSnippet: 'O Tribunal Superior do Trabalho, no recurso de revista, examinará previamente se a causa oferece transcendência com relação aos reflexos gerais de natureza econômica, política, social ou jurídica.' }
    ],
    jurisprudence: 'Súmula 126 do TST.',
    professorTip: 'Recurso de Revista no Sumaríssimo (Art. 896, § 9º): SÓ cabe por ofensa direta à CF, Súmula do TST ou Súmula Vinculante do STF (OJ NÃO abre RR no sumaríssimo!).'
  },
  {
    id: 'proctrab_ext_10',
    exam: 'Prova Semestral Faculdade de Direito - Processo do Trabalho',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Processual do Trabalho',
    topic: 'Ação Rescisória na Justiça do Trabalho e Depósito Prévio (Art. 836 CLT)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Uma empresa pretende ajuizar ação rescisória perante o TRT para desconstituir sentença trabalhista transitada em julgado há 10 meses. Nos termos do Art. 836 da CLT, para a propositura da ação rescisória na Justiça do Trabalho, a empresa autora deverá:`,
    options: [
      { letter: 'A', text: 'Efetuar depósito prévio de 5% sobre o valor da causa, seguindo o percentual do CPC.' },
      { letter: 'B', text: 'Efetuar depósito prévio de 20% (vinte por cento) do valor da causa, salvo prova de miserabilidade jurídica do autor.' },
      { letter: 'C', text: 'Obter autorização prévia do Ministério Público do Trabalho.' },
      { letter: 'D', text: 'Aguardar o prazo decadencial de 5 anos contado do trânsito em julgado.' }
    ],
    correctAnswer: 'B',
    justification: `Diferentemente do CPC (que exige 5%), o art. 836, caput, da CLT exige para a ação rescisória trabalhista o depósito prévio de 20% (vinte por cento) do valor da causa, salvo prova de miserabilidade jurídica do autor. O prazo decadencial é de 2 anos do trânsito em julgado (art. 975 CPC c/c Súmula 100 TST).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. 5% é a regra geral do CPC (art. 968, II), afastada pela regra especial de 20% da CLT.' },
      { letter: 'C', explanation: 'Incorreta. Não há exigência de autorização ministerial.' },
      { letter: 'D', explanation: 'Incorreta. O prazo decadencial para ajuizar ação rescisória é de 2 anos.' }
    ],
    statuteReferences: [
      { code: 'CLT', article: 'Art. 836', textSnippet: 'É vedado aos órgãos da Justiça do Trabalho conhecer de questões já decididas, excetuados os casos expressamente previstos neste Título e a ação rescisória, que será admitida na forma do disposto no Capítulo IV do Título IX da Lei nº 5.869, de 11 de janeiro de 1973 – Código de Processo Civil, sujeita ao depósito prévio de 20% (vinte por cento) do valor da causa...' }
    ],
    professorTip: 'Pegadinha clássica de comparação CLT x CPC: Depósito da Ação Rescisória no CPC = 5%; na CLT (Art. 836) = 20% do valor da causa!'
  }
];
