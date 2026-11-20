import { LegalQuestion } from '../../types';

export const TRIBUTARIO_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab35_trib_10',
    exam: 'XXXV Exame de Ordem Unificado (OAB 35) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Tributário',
    topic: 'Princípio da Anterioridade Anual e Nonagesimal',
    difficulty: 'Médio',
    statement: `O Município "Alfa" instituiu, por lei publicada em 15 de dezembro de 2023, novo Imposto sobre Serviços de Qualquer Natureza (ISS) incidente sobre atividades de hospedagem e eventos, majorando a respectiva alíquota de 2% para 4%, determinando sua cobrança imediata a partir de 1º de janeiro de 2024. Determinada rede hoteleira consulta seu advogado sobre a constitucionalidade da cobrança pretendida pelo Fisco Municipal logo no primeiro dia do novo ano civil.
Diante das limitações constitucionais ao poder de tributar, assinale a afirmativa correta:`,
    options: [
      {
        letter: 'A',
        text: 'A cobrança é inconstitucional, pois o ISS sujeita-se cumulativamente à anterioridade anual (exercício financeiro seguinte) e à anterioridade nonagesimal (noventena).'
      },
      {
        letter: 'B',
        text: 'A cobrança é constitucional, porque a majoração de impostos municipais se submete apenas ao princípio da anterioridade anual ordinária.'
      },
      {
        letter: 'C',
        text: 'A cobrança é inconstitucional unicamente pelo desrespeito à anterioridade anual, visto que o ISS é exceção constitucional expressa à noventena.'
      },
      {
        letter: 'D',
        text: 'A cobrança é constitucional, porquanto o ISS é tributo extrafiscal, equiparado ao II, IE e IPI, dispensado de ambas as anterioridades.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Imposto sobre Serviços de Qualquer Natureza (ISS) sujeita-se à regra geral da anterioridade tributária, devendo respeitar CUMULATIVAMENTE a anterioridade anual (CF/88, art. 150, III, "b") e a anterioridade nonagesimal ou noventena (CF/88, art. 150, III, "c"). Como a lei que majorou a alíquota foi publicada em 15 de dezembro de 2023, o Município só poderá exigir a nova alíquota após decorridos 90 dias da publicação (portanto, a partir de meados de março de 2024), sendo inconstitucional a exigência a partir de 1º de janeiro.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Desde a Emenda Constitucional nº 42/2003, a noventena é a regra geral para tributos, e o ISS não está inserido nas exceções do art. 150, § 1º, da CF/88.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O ISS NÃO é exceção à noventena; ele deve obrigatoriamente aguardar os 90 dias.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O ISS é imposto eminentemente fiscal de competência municipal e não goza de qualquer dispensa de anterioridade.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, III, "b" e "c"',
        textSnippet: 'Sem prejuízo de outras garantias asseguradas ao contribuinte, é vedado à União, aos Estados, ao Distrito Federal e aos Municípios: III - cobrar tributos: b) no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou; c) antes de decorridos noventa dias da data em que haja sido publicada a lei...'
      }
    ],
    professorTip: 'Mnemônico dos Tributos em Tributário: O ISS respeita as DUAS anterioridades (Anual E Noventena)! Só são exceções à noventena: II, IE, IR, IOF, Empréstimo Compulsório (guerra/calamidade) e fixação da base de cálculo do IPTU e IPVA!'
  },
  {
    id: 'oab38_trib_02',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Tributário',
    topic: 'Responsabilidade Tributária dos Sócios e Súmula 430 do STJ',
    difficulty: 'Médio',
    statement: `A sociedade empresária Metalúrgica Aço Forte Ltda. deixou de recolher o Imposto sobre Produtos Industrializados (IPI) incidente sobre suas operações no ano fiscal de 2022. Em razão do inadimplemento, a Procuradoria da Fazenda Nacional ajuizou Execução Fiscal e requereu imediatamente o redirecionamento da cobrança em face de Carlos, sócio-administrador, sob a alegação de que a falta de pagamento do tributo no vencimento caracteriza infração à lei nos termos do Art. 135, III, do CTN.
À luz da legislação tributária e da jurisprudência consolidada do Superior Tribunal de Justiça (STJ), assinale a afirmativa correta:`,
    options: [
      {
        letter: 'A',
        text: 'O mero inadimplemento da obrigação tributária não gera, por si só, a responsabilidade pessoal e solidária do sócio-administrador.'
      },
      {
        letter: 'B',
        text: 'O redirecionamento é automático em face de todos os sócios cotistas de sociedades de responsabilidade limitada, independentemente de exercerem gerência.'
      },
      {
        letter: 'C',
        text: 'O não recolhimento de tributo declarado constitui crime e autoriza a penhora imediata dos bens particulares dos administradores sem necessidade de citação prévia.'
      },
      {
        letter: 'D',
        text: 'O sócio-administrador responde objetivamente por quaisquer débitos fiscais da sociedade constituídos durante o período em que constava no contrato social.'
      }
    ],
    correctAnswer: 'A',
    justification: `A Súmula nº 430 do STJ consolidou o entendimento pacífico de que o mero inadimplemento da obrigação tributária não gera, por si só, a responsabilidade pessoal do sócio-administrador prevista no Art. 135 do Código Tributário Nacional. Para haver o redirecionamento da execução fiscal, é imprescindível comprovar que o administrador agiu com excesso de poderes, infração à lei ou ao estatuto, ou praticou dissolução irregular da sociedade (Súmula 435 STJ).`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Sócios que não exercem gerência jamais respondem pelos débitos fiscais com base no Art. 135 do CTN.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Conforme a Súmula 430/STJ, a simples falta de pagamento não é ilícito apto a romper a personalidade jurídica.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A responsabilidade do art. 135 do CTN é subjetiva e depende de comprovação de dolo ou fraude qualificada.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional (CTN)',
        article: 'Art. 135, III',
        textSnippet: 'São pessoalmente responsáveis pelos créditos correspondentes a obrigações tributárias resultantes de atos praticados com excesso de poderes ou infração de lei, contrato social ou estatutos: (...) III - os diretores, gerentes ou representantes de pessoas jurídicas de direito privado.'
      }
    ],
    jurisprudence: 'Súmula 430 do STJ: O inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade solidária do sócio-gerente.',
    professorTip: 'Citação obrigatória no Exame da OAB: NÃO CONFUNDA mero inadimplemento (Súmula 430 - NÃO gera responsabilidade) com dissolução irregular ou encerramento clandestino das atividades (Súmula 435 - GERA redirecionamento)!'
  },
  {
    id: 'oab37_trib_03',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Tributário',
    topic: 'Suspensão da Exigibilidade do Crédito Tributário',
    difficulty: 'Fácil',
    statement: `A sociedade empresária Ômega Comércio de Bebidas Ltda. foi autuada pela Receita Estadual pelo não recolhimento de ICMS. Inconformada com os valores lançados de ofício, a contribuinte deseja impedir a inscrição do débito em Dívida Ativa e ajuizamento de execução fiscal, além de necessitar de Certidão Positiva com Efeitos de Negativa (CPEN) para participar de licitação.
Com base no Código Tributário Nacional, assinale a opção que apresenta exclusivamente causas de SUSPENSÃO da exigibilidade do crédito tributário:`,
    options: [
      {
        letter: 'A',
        text: 'A moratória, o depósito do seu montante integral e a concessão de liminar em mandado de segurança.'
      },
      {
        letter: 'B',
        text: 'A compensação, a dação em pagamento em bens imóveis e o parcelamento.'
      },
      {
        letter: 'C',
        text: 'A remissão, a anistia e os recursos tempestivos no processo administrativo-tributário.'
      },
      {
        letter: 'D',
        text: 'A prescrição, a decadência e a tutela antecipada em ação anulatória.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 151 do Código Tributário Nacional traz o rol taxativo das causas de suspensão da exigibilidade do crédito tributário: I - moratória; II - o depósito do seu montante integral; III - as reclamações e os recursos, nos termos das leis reguladoras do processo tributário administrativo; IV - a concessão de medida liminar em mandado de segurança; V - a concessão de medida liminar ou de tutela antecipada, em outras espécies de ação judicial; VI - o parcelamento.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Compensação e dação em pagamento em bens imóveis são modalidades de EXTINÇÃO do crédito tributário (Art. 156 do CTN).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A remissão extingue o crédito (Art. 156, IV) e a anistia é causa de EXCLUSÃO do crédito tributário (Art. 175, II do CTN).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Prescrição e decadência são hipóteses de EXTINÇÃO do crédito tributário (Art. 156, V do CTN).'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional (CTN)',
        article: 'Art. 151',
        textSnippet: 'Suspendem a exigibilidade do crédito tributário: I - moratória; II - o depósito do seu montante integral; III - as reclamações e os recursos administrativos; IV - a liminar em MS; V - a liminar ou tutela antecipada em outras ações judiciais; VI - o parcelamento.'
      }
    ],
    professorTip: 'Mnemônico Clássico do Professor JurisMentor para Gabaritar Tributário: MODEREPALITE! MO-ratória, DE-pósito integral, RE-clamações e recursos, PA-rcelamento, LI-minar e TE-tela antecipada. Quem suspende garante Certidão Positiva com Efeito de Negativa (Art. 206 CTN)!'
  },
  {
    id: 'oab39_trib_04',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Tributário',
    topic: 'Imunidade Tributária Religiosa e Súmula Vinculante 52',
    difficulty: 'Médio',
    statement: `Determinada entidade religiosa é proprietária de três imóveis contíguos na cidade de São Paulo: no imóvel "A" funciona o templo sede onde são realizados os cultos; o imóvel "B" foi alugado a uma livraria comercial privada, sendo o valor dos aluguéis integralmente revertido para a manutenção das atividades religiosas e de assistência social da igreja; o imóvel "C" é um lote vago mantido cercado para futura ampliação do santuário. A Secretaria de Finanças do Município lançou IPTU sobre os imóveis "B" e "C", sustentando que a imunidade só alcança o templo em que ocorrem os ritos religiosos (imóvel A).
À luz da Constituição Federal e da jurisprudência vinculante do Supremo Tribunal Federal (STF), a conduta do Município é:`,
    options: [
      {
        letter: 'A',
        text: 'Inconstitucional em relação aos imóveis "B" e "C", pois a imunidade religiosa alcança o patrimônio vinculado às finalidades essenciais da entidade, inclusive imóveis alugados cujas rendas sejam aplicadas na atividade religiosa.'
      },
      {
        letter: 'B',
        text: 'Constitucional quanto ao imóvel "B", porque a locação a terceiros descaracteriza a destinação religiosa e atrai a incidência normal do IPTU.'
      },
      {
        letter: 'C',
        text: 'Constitucional quanto aos imóveis "B" e "C", pois a imunidade de templos restringe-se estritamente ao altar e ao local de culto presencial.'
      },
      {
        letter: 'D',
        text: 'Inconstitucional apenas quanto ao imóvel "A" e "B", incidindo o IPTU no imóvel "C" por se tratar de bem não edificado sujeito a IPTU progressivo.'
      }
    ],
    correctAnswer: 'A',
    justification: `A imunidade tributária dos templos de qualquer culto (CF/88, art. 150, VI, "b" e § 4º) abrange não apenas o edifício onde se realizam as celebrações religiosas, mas todo o patrimônio, renda e serviços relacionados com as suas finalidades essenciais. Conforme a Súmula Vinculante nº 52 do STF, a imunidade tributária estende-se aos imóveis de propriedade da entidade que estejam alugados a terceiros, desde que o valor dos aluguéis seja integralmente aplicado nas atividades essenciais da instituição. Quanto ao lote vago mantido para ampliação futura, o STF também reconhece a imunidade enquanto não for dada destinação incompatível.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Contraria frontalmente a Súmula Vinculante nº 52 do STF.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A interpretação do STF sobre templos de qualquer culto é teleológica e finalística, não se restringindo ao prédio da igreja.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O STF pacificou que imóveis vagos pertencentes a entidades imunes continuam imunes, presumindo-se a destinação institucional salvo prova em contrário pelo Fisco.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, VI, "b" e § 4º',
        textSnippet: 'É vedado instituir impostos sobre: (...) b) templos de qualquer culto; § 4º As vedações do inciso VI, alíneas "b" e "c", compreendem somente o patrimônio, a renda e os serviços, relacionados com as finalidades essenciais das entidades nelas mencionadas.'
      }
    ],
    jurisprudence: 'Súmula Vinculante nº 52 do STF: Ainda quando alugado a terceiros, permanece imune ao IPTU o imóvel pertencente a qualquer das entidades referidas pelo art. 150, VI, "c", da Constituição Federal, desde que o valor dos aluguéis seja aplicado nas atividades para as quais tais entidades foram constituídas.',
    professorTip: 'Preste atenção: A Súmula Vinculante 52 do STF aplica-se tanto às entidades de assistência social e educação (alínea c) quanto aos templos religiosos (alínea b). Se a renda do aluguel é reinvestida na igreja, NÃO PAGA IPTU!'
  },
  {
    id: 'oab36_trib_05',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Tributário',
    topic: 'Execução Fiscal e Prescrição Intercorrente (Tema 568 STJ)',
    difficulty: 'Difícil',
    statement: `A Fazenda Nacional ajuizou Execução Fiscal contra a sociedade empresária Beta Ltda. em 2012 para cobrar débito de PIS e COFINS devidamente inscrito em dívida ativa. Citada a executada, não foram localizados bens penhoráveis em seu patrimônio. O juiz determinou a suspensão do feito nos termos do Art. 40 da Lei nº 6.830/80 (LEF) em 10 de fevereiro de 2013, findo o qual os autos foram arquivados sem baixa na distribuição. Em março de 2021, sem que a Fazenda tenha localizado qualquer patrimônio ou requerido diligências úteis durante 7 anos de arquivamento, o magistrado decretou a prescrição intercorrente de ofício.
Considerando o regime da Lei de Execução Fiscal e o entendimento fixado no Tema Repetitivo 568 pelo Superior Tribunal de Justiça (STJ), a decisão do magistrado:`,
    options: [
      {
        letter: 'A',
        text: 'Foi correta, pois após o prazo de suspensão de 1 ano do Art. 40 da LEF, inicia-se automaticamente a contagem da prescrição intercorrente quinquenal (5 anos), podendo o juiz reconhecê-la de ofício após prévia oitiva da Fazenda Pública.'
      },
      {
        letter: 'B',
        text: 'Foi incorreta, porque créditos inscritos em dívida ativa e cobrados em juízo são imprescritíveis enquanto o devedor não comprovar falência ou insolvência.'
      },
      {
        letter: 'C',
        text: 'Foi incorreta, pois a prescrição intercorrente em execução fiscal depende de requerimento expresso e unânime de todos os sócios da empresa.'
      },
      {
        letter: 'D',
        text: 'Foi correta no prazo, porém o juiz cometeu nulidade absoluta insanável por não ter determinado a realização de leilão judicial de bens futuros.'
      }
    ],
    correctAnswer: 'A',
    justification: `No julgamento do Recurso Especial Repetitivo 1.340.553/RS (Tema 568/STJ), a 1ª Seção do STJ fixou as seguintes diretrizes para o Art. 40 da Lei 6.830/80: não localizados bens penhoráveis, o processo suspende-se por 1 (um) ano. Findo esse prazo anual, inicia-se automaticamente o prazo de 5 (cinco) anos da prescrição intercorrente, independentemente de despacho judicial. Decorridos os 5 anos de inércia da Fazenda (total de 1 + 5 = 6 anos), o juiz pode decretar a prescrição intercorrente de ofício, ouvindo previamente a Fazenda Pública nos termos do art. 40, § 4º da LEF.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Créditos tributários prescrevem em 5 anos (Art. 174 CTN), inclusive na modalidade de prescrição intercorrente.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A prescrição intercorrente pode ser reconhecida de ofício pelo magistrado após prévia ouvida da Fazenda Pública (Art. 40, § 4º, LEF).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Não havendo bens, inexiste base fática para leilão.'
      }
    ],
    statuteReferences: [
      {
        code: 'Lei de Execuções Fiscais (Lei 6.830/80)',
        article: 'Art. 40, § 2º e § 4º',
        textSnippet: 'Decorridos o prazo máximo de 1 (um) ano, sem que seja localizado o devedor ou encontrados bens penhoráveis, o Juiz ordenará o arquivamento dos autos. § 4º Se da decisão que ordenar o arquivamento tiver decorrido o prazo prescricional, o juiz, depois de ouvida a Fazenda Pública, poderá, de ofício, reconhecer a prescrição intercorrente...'
      }
    ],
    jurisprudence: 'STJ, Tema 568 (REsp 1.340.553/RS - Repetitivo): O prazo de 1 ano de suspensão do art. 40 da LEF tem início automático. Findo este prazo, inicia-se automaticamente o prazo prescricional de 5 anos.',
    professorTip: 'Fórmula de Ouro do Tema 568 do STJ: 1 ano de suspensão + 5 anos de arquivamento = 6 anos sem bens! O juiz intima a Fazenda para dar oportunidade de demonstrar causa interruptiva e, não havendo, decreta a prescrição intercorrente!'
  },
  {
    id: 'oab39_trib_06',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Tributário',
    topic: 'Taxas de Polícia vs Preço Público e Súmula Vinculante 19',
    difficulty: 'Médio',
    statement: `O Município "Gama" instituiu, por lei ordinária municipal, dois tributos: (1) uma taxa de conservação e limpeza de logradouros públicos (varrição de ruas e calçadas e asfalto), calculada com base na metragem da testada do imóvel; e (2) uma taxa de coleta domiciliar de lixo urbano, cobrada especificamente dos proprietários de imóveis residenciais atendidos pela coleta regular de resíduos da municipalidade.
Considerando as regras constitucionais pertinentes às taxas e a jurisprudência sumulada do STF, assinale a opção correta:`,
    options: [
      {
        letter: 'A',
        text: 'A taxa de limpeza de logradouros públicos é inconstitucional (serviço universal e indivisível), mas a taxa de coleta domiciliar de lixo é constitucional (serviço específico e divisível).'
      },
      {
        letter: 'B',
        text: 'Ambas as taxas são perfeitamente constitucionais, porque decorrem do poder de polícia sanitária do Município.'
      },
      {
        letter: 'C',
        text: 'Ambas as taxas são inconstitucionais, pois serviços de limpeza urbana devem ser remunerados unicamente por meio de tarifas ou preços públicos contratuais.'
      },
      {
        letter: 'D',
        text: 'A taxa de coleta domiciliar de lixo é inconstitucional, enquanto a taxa de limpeza de logradouros é constitucional por beneficiar toda a coletividade.'
      }
    ],
    correctAnswer: 'A',
    justification: `A Constituição da República (art. 145, II) e o CTN (art. 77) exigem que a taxa pelo serviço público decorra de serviços 'específicos e divisíveis' (uti singuli). A limpeza e conservação de logradouros públicos (varrição de ruas) é serviço universal (uti universi) e indivisível, não admitindo cobrança de taxa (Súmula Vinculante nº 41 do STF). Por outro lado, a coleta de lixo domiciliar é serviço específico e divisível em relação a cada imóvel, sendo sua taxa plenamente constitucional, conforme a Súmula Vinculante nº 19 do STF.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. A taxa de varrição de ruas viola o princípio da especificidade e divisibilidade tributária.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O serviço de coleta de lixo domiciliar pode ser remunerado por taxa (Súmula Vinculante 19).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. É o exato oposto do pacificado pelo Supremo Tribunal Federal.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 145, II',
        textSnippet: 'A União, os Estados, o Distrito Federal e os Municípios poderão instituir os seguintes tributos: (...) II - taxas, em razão do exercício do poder de polícia ou pela utilização, efetiva ou potencial, de serviços públicos específicos e divisíveis, prestados ao contribuinte ou postos a sua disposição;'
      }
    ],
    jurisprudence: 'Súmula Vinculante nº 19 do STF: A taxa cobrada exclusivamente em razão dos serviços públicos de coleta, remoção e tratamento ou destinação de lixo ou resíduos provenientes de imóveis, não viola o artigo 145, II, da Constituição Federal. / Súmula Vinculante nº 41: O serviço de iluminação pública não pode ser remunerado mediante taxa.',
    professorTip: 'Regra de ouro das taxas municipais: Coleta de lixo da SUA casa = TAXA VÁLIDA (SV 19). Varrição geral da rua / calçada = TAXA INCONSTITUCIONAL (serviço indivisível, uti universi)!'
  },
  {
    id: 'oab38_trib_07',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Tributário',
    topic: 'Imunidade Cultural dos Livros e E-readers (Súmula Vinculante 57)',
    difficulty: 'Fácil',
    statement: `Uma empresa importadora e distribuidora de tecnologia comercializa no mercado nacional aparelhos eletrônicos leitores de livros digitais (e-readers) que possuem função exclusiva de exibição, armazenamento e leitura de textos em formato digital, além dos próprios arquivos eletrônicos contendo obras literárias e científicas (e-books). O Fisco Estadual autuou a empresa exigindo o recolhimento de ICMS sobre as operações, alegando que o texto constitucional (Art. 150, VI, "d") contempla apenas livros físicos de papel.
À luz da jurisprudência vinculante do Supremo Tribunal Federal (STF), a autuação fiscal:`,
    options: [
      {
        letter: 'A',
        text: 'É manifestamente inconstitucional, pois a imunidade tributária do art. 150, VI, "d", alcança os livros eletrônicos e os suportes exclusivos para sua leitura (Súmula Vinculante 57).'
      },
      {
        letter: 'B',
        text: 'É constitucional para os aparelhos de leitura (hardware), aplicando-se a imunidade apenas aos arquivos digitais (software).'
      },
      {
        letter: 'C',
        text: 'É devida, visto que a imunidade tributária exige previsão expressa em lei complementar em respeito à estrita legalidade.'
      },
      {
        letter: 'D',
        text: 'É válida somente se a editora não auferir lucro na comercialização das obras literárias.'
      }
    ],
    correctAnswer: 'A',
    justification: `O STF editou a Súmula Vinculante nº 57, estabelecendo: "A imunidade tributária constante do art. 150, VI, d, da CF/88 aplica-se à importação e à comercialização, no mercado interno, do livro eletrônico (e-book) e dos suportes exclusivamente utilizados para fixá-lo, como leitores de livros eletrônicos (e-readers), ainda que possuam funcionalidades acessórias". A finalidade constitucional da norma é difundir a cultura e o conhecimento, devendo acompanhar a evolução tecnológica.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Conforme a SV 57 do STF, os aparelhos dedicados exclusivamente à leitura de e-books (suportes) também gozam da imunidade.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A imunidade é garantia constitucional de eficácia plena que independe de lei complementar integradora.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A imunidade da alínea "d" é de natureza objetiva (reai), recaindo sobre o bem independentemente do lucro do comerciante.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, VI, "d"',
        textSnippet: 'Sem prejuízo de outras garantias asseguradas ao contribuinte, é vedado à União, aos Estados, ao Distrito Federal e aos Municípios: (...) VI - instituir impostos sobre: d) livros, jornais, periódicos e o papel destinado a sua impressão.'
      }
    ],
    jurisprudence: 'Súmula Vinculante 57 do STF: A imunidade tributária constante do art. 150, VI, "d", da CF/88 aplica-se à importação e à comercialização, no mercado interno, do livro eletrônico (e-book) e dos suportes exclusivamente utilizados para fixá-lo...',
    professorTip: 'Cai em todas as bancas: Livro físico, livro digital (e-book), áudio-livro e o aparelho leitor exclusivo (Kindle/e-reader) NÃO PAGAM IMPOSTOS (SV 57 STF)! Atenção: Tablets multifuncionais (ex: iPad) NÃO têm a imunidade, apenas aparelhos com foco exclusivo na leitura!'
  },
  {
    id: 'faculdade_trib_08',
    exam: 'Prova Acadêmica de Direito Tributário - Sistema Constitucional Tributário / Faculdade',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Princípio da Anterioridade Anual e Nonagesimal e Exceções',
    difficulty: 'Difícil',
    statement: `Em 20 de dezembro de 2023, o Presidente da República editou Medida Provisória majorando as alíquotas de três tributos federais: o Imposto sobre Produtos Industrializados (IPI), o Imposto sobre Importação (II) e a Contribuição para Financiamento da Seguridade Social (COFINS). A Medida Provisória estabeleceu que os novos valores entrariam em vigor no primeiro dia útil subsequente à publicação.
Considerando o princípio da anterioridade tributária anual (exercício financeiro seguinte) e nonagesimal (90 dias) positivado na CF/88, assinale a opção correta:`,
    options: [
      {
        letter: 'A',
        text: 'O II pode ser cobrado imediatamente (exceção a ambas as anterioridades); o IPI deve respeitar a noventena mas não o exercício; e a COFINS deve respeitar a noventena especial do Art. 195, § 6º da CF/88.'
      },
      {
        letter: 'B',
        text: 'Nenhum dos três tributos pode ser cobrado de imediato, devendo todos aguardar obrigatoriamente 1º de janeiro do ano subsequente e mais 90 dias.'
      },
      {
        letter: 'C',
        text: 'O IPI não se submete a nenhuma anterioridade por se tratar de tributo eminentemente extrafiscal e regulatório.'
      },
      {
        letter: 'D',
        text: 'A COFINS, por ser contribuição social, submete-se cumulativamente à anterioridade anual de exercício e à noventena.'
      }
    ],
    correctAnswer: 'A',
    justification: `Pelo Art. 150, § 1º da CF/88: o Imposto sobre Importação (II) é exceção total a AMBAS as anterioridades (anual e nonagesimal), podendo ter vigência imediata devido ao seu caráter extrafiscal de controle do comércio exterior. O IPI é exceção à anterioridade anual, mas SUBMETE-SE OBRIGATORIAMENTE à anterioridade nonagesimal (90 dias). Já a COFINS, sendo contribuição de seguridade social (Art. 195, § 6º da CF/88), submete-se exclusivamente à anterioridade mitigada de 90 dias (noventena), não precisando esperar a virada do exercício.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. O II é exceção a ambas, e o IPI e a COFINS não aguardam a virada do exercício anual.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O IPI submete-se expressamente à anterioridade nonagesimal (90 dias) pelo Art. 150, § 1º in fine.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. As contribuições para a seguridade social possuem regra própria no art. 195, § 6º (apenas 90 dias).'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, § 1º e Art. 195, § 6º',
        textSnippet: 'A vedação do inciso III, b, não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, IV e V; e a vedação do inciso III, c, não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, III e V...'
      }
    ],
    jurisprudence: 'STF, ADI 4.661/DF: O IPI deve observância estrita ao prazo de 90 dias estabelecido no art. 150, III, "c" da CF/88, sendo vedada sua cobrança imediata após a majoração de alíquotas.',
    professorTip: 'Tabela mental obrigatória do JurisMentor: NÃO ESPERA NADA (Nem ano nem 90 dias) = II, IE, IOF e Impostos Extraordinários de Guerra. ESPERA SÓ 90 DIAS = IPI, Contribuições de Seguridade (Art. 195, § 6º), Cide-Combustíveis e ICMS-Combustíveis. ESPERA SÓ O ANO = IR e Base de cálculo do IPTU/IPVA. ESPERA OS DOIS (Ano + 90 dias) = REGRA GERAL!'
  },
  {
    id: 'oab37_trib_09',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Tributário',
    topic: 'Suspensão vs Extinção do Crédito Tributário (Art. 151 e 156 CTN)',
    difficulty: 'Médio',
    statement: `Um empresário devedor de crédito tributário regularmente lançado pela Receita Federal busca orientação jurídica com seu advogado para evitar a inscrição em dívida ativa e a consequente execução fiscal. O empresário propõe quatro medidas distintas:
I. Efetuar o depósito judicial do montante integral em dinheiro;
II. Ajuizar impugnação administrativa tempestiva perante o CARF;
III. Realizar a dação em pagamento de bens imóveis na forma prevista em lei;
IV. Obter parcelamento ordinário do débito.
Conforme as regras do Código Tributário Nacional, constituem causas de SUSPENSÃO da exigibilidade do crédito tributário:`,
    options: [
      {
        letter: 'A',
        text: 'Apenas os itens I, II e IV, pois a dação em pagamento de bens imóveis é causa de EXTINÇÃO do crédito tributário.'
      },
      {
        letter: 'B',
        text: 'Todos os itens (I, II, III e IV) suspendem a exigibilidade até a quitação final.'
      },
      {
        letter: 'C',
        text: 'Apenas o item I, pois o parcelamento e os recursos administrativos não impedem a execução fiscal.'
      },
      {
        letter: 'D',
        text: 'Apenas os itens III e IV, visto que o depósito judicial extingue a obrigação sob condição resolutiva.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 151 do CTN prevê taxativamente as causas de SUSPENSÃO da exigibilidade do crédito tributário: I - Moratória; II - Depósito do seu montante integral; III - Reclamações e recursos administrativos tempestivos; IV - Concessão de medida liminar em mandado de segurança; V - Concessão de liminar ou tutela antecipada em outras ações judiciais; VI - Parcelamento. Por outro lado, a 'dação em pagamento em bens imóveis, na forma e condições estabelecidas em lei' (Art. 156, XI do CTN) é causa de EXTINÇÃO do crédito tributário, e não mera suspensão.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. A dação em pagamento (Art. 156, XI) extingue o crédito tributário.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Recursos administrativos tempestivos e parcelamento são expressamente elencados no Art. 151 do CTN como causas suspensivas.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O depósito do montante integral suspende a exigibilidade (Art. 151, II c/c Súmula 112 do STJ).'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional',
        article: 'Art. 151 e Art. 156, XI',
        textSnippet: 'Art. 151. Suspendem a exigibilidade do crédito tributário: I - moratória; II - o depósito do seu montante integral; III - as reclamações e os recursos, nos termos das leis reguladoras do processo tributário administrativo; IV - a concessão de medida liminar em mandado de segurança; V - a concessão de medida liminar ou de tutela antecipada, em outras espécies de ação judicial; VI - o parcelamento.'
      }
    ],
    jurisprudence: 'Súmula 112 do STJ: O depósito somente suspende a exigibilidade do crédito tributário se for integral e em dinheiro.',
    professorTip: 'Mnemônico infalível do Professor para o Art. 151 do CTN (SUSPENSÃO): M-O-D-E-L-A-P-O! M-oratórias, D-epósito integral em dinheiro, R-eclamações/Recursos administrativos, L-iminares/Tutelas, P-arcelamento! Dação em pagamento, decadência e prescrição EXTIGUEM o crédito (Art. 156)!'
  },
  {
    id: 'faculdade_trib_10',
    exam: 'Exame de Responsabilidade Tributária e Execução Fiscal / Faculdade e Magistratura',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Responsabilidade dos Sócios e Súmula 435 do STJ',
    difficulty: 'Difícil',
    statement: `A sociedade empresária "Delta Comércio de Roupas Ltda." acumulou débitos expressivos de ICMS devidamente constituídos. Sem promover a liquidação regular e sem dar baixa perante os órgãos de registro do comércio ou fisco, a empresa encerrou suas atividades, desocupando o imóvel locado. A Fazenda Estadual ajuizou Execução Fiscal e o oficial de justiça certificou que a empresa não mais funcionava no seu domicílio fiscal registrado. Diante disso, a Fazenda requereu o redirecionamento da execução contra o sócio-gerente Pedro com base no Art. 135 do CTN.
À luz da legislação tributária e da jurisprudência consolidada do STJ:`,
    options: [
      {
        letter: 'A',
        text: 'O redirecionamento é legítimo, pois presume-se dissolvida irregularmente a empresa que deixa de funcionar no seu domicílio fiscal sem comunicação aos órgãos competentes (Súmula 435 do STJ).'
      },
      {
        letter: 'B',
        text: 'O mero inadimplemento da obrigação tributária basta para autorizar o redirecionamento automático contra qualquer sócio, inclusive o sócio sem poderes de gerência.'
      },
      {
        letter: 'C',
        text: 'O redirecionamento é expressamente vedado no direito tributário brasileiro, devendo a Fazenda propor ação falimentar.'
      },
      {
        letter: 'D',
        text: 'A dissolução irregular exige prévia comprovação de desvio de finalidade por meio de incidente de desconsideração da personalidade jurídica no CPC, sem exceções.'
      }
    ],
    correctAnswer: 'A',
    justification: `A Súmula 435 do Superior Tribunal de Justiça consolida o tema: "Presume-se dissolvida irregularmente a empresa que deixar de funcionar no seu domicílio fiscal, sem comunicação aos órgãos competentes, legitimando o redirecionamento da execução fiscal para o sócio-gerente". O encerramento irregular caracteriza infração à lei nos termos do Art. 135, III do CTN, viabilizando a responsabilização pessoal do gestor à época da dissolução (Tema 962/STJ). Já o mero inadimplemento tributário NÃO gera redirecionamento (Súmula 430 do STJ).`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Conforme a Súmula 430 do STJ: "O inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade solidária do sócio-gerente".'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O Art. 135 do CTN autoriza expressamente a responsabilidade tributária dos gestores por atos praticados com infração da lei.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A presunção da Súmula 435 do STJ autoriza o redirecionamento com esteio na certidão do Oficial de Justiça informando a não localização da empresa.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional',
        article: 'Art. 135, III',
        textSnippet: 'São pessoalmente responsáveis pelos créditos correspondentes a obrigações tributárias resultantes de atos praticados com excesso de poderes ou infração de lei, contrato social ou estatutos: (...) III - os diretores, gerentes ou representantes de pessoas jurídicas de direito privado.'
      }
    ],
    jurisprudence: 'Súmula 435 do STJ: Presume-se dissolvida irregularmente a empresa que deixar de funcionar no seu domicílio fiscal, sem comunicação aos órgãos competentes, legitimando o redirecionamento da execução fiscal para o sócio-gerente. / Súmula 430 do STJ: O inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade solidária do sócio-gerente.',
    professorTip: 'Contraste clássico que despenca na OAB: Só deixar de pagar tributo (inadimplemento) NÃO coloca a conta na pessoa física do sócio (Súmula 430 STJ). Mas fechar as portas no calada da noite sem dar baixa nos órgãos oficiais (dissolução irregular) PRESUME INFRAÇÃO À LEI e coloca a execução no CPF do sócio-administrador (Súmula 435 STJ)!'
  },

  // =========================================================================
  // BANCO EXAUSTIVO: AULAS 1 E 3 (CONCEITO DE TRIBUTO & PRINCÍPIOS CONSTITUCIONAIS)
  // PREPARAÇÃO DUAL: GRADUAÇÃO / FACULDADE & EXAME DE ORDEM (OAB / FGV)
  // =========================================================================

  {
    id: 'faculdade_trib_conceito_01',
    exam: 'Exame de Direito Tributário I / Faculdade de Direito - Teoria Geral da Obrigação Tributária',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Conceito de Tributo (Art. 3º do CTN) e Meios de Extinção',
    difficulty: 'Médio',
    statement: `No Direito Positivo brasileiro, o Artigo 3º do Código Tributário Nacional (CTN) estabelece a definição analítica de tributo como "toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada". 
Acerca da elementar "em moeda ou cujo valor nela se possa exprimir" e dos meios extintivos do crédito tributário, assinale a afirmativa juridicamente correta:`,
    options: [
      {
        letter: 'A',
        text: 'A prestação pecuniária veda a instituição de tributos *in labore* (prestação de serviços pelo sujeito passivo) ou *in natura* (entrega de bens agrícolas/produtos), admitindo-se, contudo, na forma e condições estabelecidas em lei, a dação em pagamento em bens imóveis para extinguir o crédito tributário (Art. 156, XI, do CTN).'
      },
      {
        letter: 'B',
        text: 'O caráter pecuniário do tributo autoriza que Estados e Municípios prevejam livremente a prestação de serviços civis comunitários como forma originária de quitação da obrigação tributária principal.'
      },
      {
        letter: 'C',
        text: 'A dação em pagamento de bens móveis ou serviços é modalidade expressa de extinção do crédito tributário admitida irrestritamente pelo Código Tributário Nacional desde a sua redação original de 1966.'
      },
      {
        letter: 'D',
        text: 'O tributo pode ter como fato imponível a prestação de serviços forçados pelo devedor, sendo a pecuniariedade mera recomendação doutrinária não cogente aos entes federados.'
      }
    ],
    correctAnswer: 'A',
    justification: `O conceito de tributo no Art. 3º do CTN exige prestação pecuniária ("em moeda ou cujo valor nela se possa exprimir"), o que proíbe terminantemente no Brasil os tributos *in labore* (pagamento com serviços/trabalho pessoal) e tributos *in natura* (pagamento com a entrega direta de grãos, gado ou mercadorias). A única exceção que permite a extinção do crédito mediante entrega de bem não monetário é a "dação em pagamento em bens imóveis", introduzida no Art. 156, XI, do CTN pela Lei Complementar nº 104/2001, desde que na forma e sob as condições expressamente estabelecidas em lei do respectivo ente federado.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. Serviços civis comunitários configurariam tributo *in labore*, vedado pelo princípio da pecuniariedade do Art. 3º do CTN e pela dignidade humana/vedação ao trabalho forçado.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O CTN apenas admite dação em pagamento de bens IMÓVEIS (Art. 156, XI), não admitindo bens móveis ou serviços como regra de extinção do crédito tributário.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A pecuniariedade é elemento essencial e vinculante da própria definição de tributo do Art. 3º do CTN, recepcionado com força de Lei Complementar pela CF/88.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional',
        article: 'Art. 3º e Art. 156, XI',
        textSnippet: 'Art. 3º Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir (...) Art. 156. Extinguem o crédito tributário: (...) XI - a dação em pagamento em bens imóveis, na forma e condições estabelecidas em lei.'
      }
    ],
    professorTip: 'Cai muito em prova acadêmica e na OAB: No Brasil NÃO EXISTE tributo *in labore* (trabalho) nem *in natura* (produtos da colheita). A extinção deve ser em dinheiro, com a ÚNICA ressalva da dação em pagamento de BENS IMÓVEIS (prevista em lei, Art. 156, XI, do CTN).'
  },

  {
    id: 'oab_trib_pecunia_non_olet_02',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Caso Prático de Direito Tributário',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Princípio do Pecunia Non Olet e Não Sanção de Ato Ilícito',
    difficulty: 'Médio',
    statement: `Rodrigo foi autuado pela Receita Federal do Brasil por não declarar rendimentos expressivos obtidos no exercício de 2023. Em sua defesa administrativa perante o CARF, o advogado de Rodrigo sustentou que tais valores decorreram exclusivamente da exploração clandestina de jogos de azar (jogo do bicho e caça-níqueis), atividade considerada contravenção penal no ordenamento brasileiro. Argumentou a defesa que, sendo o tributo uma prestação que "não constitui sanção de ato ilícito" (Art. 3º do CTN), o Fisco não poderia cobrar Imposto de Renda sobre rendas oriundas de atos ilícitos, sob pena de convalidar ou se associar à conduta criminosa.
Considerando o Código Tributário Nacional e a jurisprudência pacificada do Supremo Tribunal Federal, assinale a afirmativa correta:`,
    options: [
      {
        letter: 'A',
        text: 'A autuação fiscal é ilegítima, visto que a ilicitude do negócio jurídico anula retroativamente qualquer obrigação tributária dele decorrente.'
      },
      {
        letter: 'B',
        text: 'A autuação é perfeitamente legítima, pois a definição legal do fato gerador é interpretada com abstração da validade jurídica dos atos efetivamente praticados e da ilicitude de seu objeto, incidindo o princípio do *pecunia non olet* (o dinheiro não tem cheiro).'
      },
      {
        letter: 'C',
        text: 'A cobrança do Imposto de Renda é nula, convertendo-se o débito fiscal automaticamente em confisco de bens na esfera penal sem necessidade de lançamento.'
      },
      {
        letter: 'D',
        text: 'O Fisco só poderia exigir o tributo caso Rodrigo fosse absolvido na esfera criminal, dependendo o crédito tributário de decisão penal absolutória transitada em julgado.'
      }
    ],
    correctAnswer: 'B',
    justification: `A afirmação do Art. 3º do CTN ("que não constitui sanção de ato ilícito") significa que o tributo incide sobre fatos econômicos lícitos (auferir renda, circular mercadorias, prestar serviços), e não como penalidade/castigo. Por outro lado, o Art. 118, I, do CTN positiva expressamente o princípio do *non olet* ("pecunia non olet"): a definição do fato gerador é interpretada com abstração da validade jurídica dos atos efetivamente praticados, bem como da natureza do seu objeto ou dos seus efeitos. O STF (HC 77.530 e RHC 122.635) assentou que a renda auferida em atividade ilícita ou criminosa é plenamente tributável, pois a imunidade aos criminosos violaria a isonomia tributária em relação aos cidadãos que auferem renda lícita.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. Conforme o Art. 118, I, do CTN, a invalidade ou ilicitude civil/penal é irrelevante para a ocorrência do fato gerador da obrigação tributária.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A tributação de rendimentos de atos ilícitos não se confunde com confisco de bens; o tributo é cobrado com base na capacidade contributiva revelada pelo acréscimo patrimonial.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. As instâncias administrativa/tributária e criminal são autônomas, e a cobrança fiscal independe de absolvição ou condenação penal prévia.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional',
        article: 'Art. 118, I e Art. 3º',
        textSnippet: 'Art. 118. A definição legal do fato gerador é interpretada com abstração: I - da validade jurídica dos atos efetivamente praticados pelos contribuintes, responsáveis, ou terceiros, bem como da natureza do seu objeto ou dos seus efeitos.'
      }
    ],
    jurisprudence: 'STF, HC 77.530/RS (Min. Sepúlveda Pertence) e STF, RHC 122.635: "A exoneração tributária dos resultados econômicos de fato criminoso - antes de constituir consagração de moralidade - redundaria em odiosa e inaceitável discriminação em detrimento dos que atuam na legalidade (*pecunia non olet*).',
    professorTip: 'Pegadinha predileta da FGV na OAB: O fato gerador do tributo NÃO é o crime; o fato gerador é "auferir renda" ou "adquirir patrimônio". Não importa a origem do dinheiro (lícita ou ilícita), a capacidade contributiva manifestada é tributada. Se assim não fosse, o criminoso teria incentivo fiscal sobre o trabalhador honesto!'
  },

  {
    id: 'faculdade_trib_sancao_03',
    exam: 'Exame de Teoria Geral do Direito Tributário / Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Distinção Dogmática entre Tributo e Multa (Sanção de Ato Ilícito)',
    difficulty: 'Difícil',
    statement: `Sob a ótica da doutrina brasileira de Direito Tributário (Geraldo Ataliba, Paulo de Barros Carvalho, Roque Carrazza), a elementar negativa do Artigo 3º do CTN — "não constitua sanção de ato ilícito" — desempenha função ontológica na separação entre as receitas derivadas tributárias e as receitas decorrentes de penalidades.
Sobre essa distinção fundamental entre tributo e sanção (multa), assinale a afirmativa correta:`,
    options: [
      {
        letter: 'A',
        text: 'A hipótese de incidência do tributo é necessariamente a descrição de um fato lícito (comportamento permitido ou situação de fato neutra), enquanto a hipótese da multa é a descrição de uma conduta antijurídica (descumprimento de dever legal ou obrigação tributária).'
      },
      {
        letter: 'B',
        text: 'A multa fiscal converte-se juridicamente em espécie do gênero tributo a partir do momento em que é inscrita em Dívida Ativa da Fazenda Pública.'
      },
      {
        letter: 'C',
        text: 'O legislador ordinário possui liberdade discricionária para instituir tributos com o objetivo primordial de punir o contribuinte pelo cometimento de infrações administrativas.'
      },
      {
        letter: 'D',
        text: 'As garantias constitucionais da anterioridade e da legalidade estrita aplicam-se exclusivamente às multas punitivas, ficando os tributos sujeitos apenas ao princípio da anualidade orçamentária.'
      }
    ],
    correctAnswer: 'A',
    justification: `A doutrina tributária ensina que a hipótese de incidência do tributo descreve sempre um comportamento lícito ou uma situação neutra de conteúdo econômico (ex.: auferir renda, ser proprietário de imóvel, prestar serviço). Já a multa (sanção) tem por hipótese de incidência exatamente a prática de uma ilicitude (descumprir a lei, atrasar pagamento, omitir declaração). Conforme o Art. 3º do CTN, tributo JAMAIS é penalidade; sua finalidade é arrecadar recursos para o custeio do Estado com base na capacidade contributiva, e não punir o infrator.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. A inscrição em dívida ativa da multa a torna "crédito não tributário" (Lei 4.320/64, art. 39, § 2º); ela jamais se converte em tributo.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A lei não pode utilizar o tributo como instrumento de punição por ilicitude, sob pena de vício de inconstitucionalidade e desvirtuamento do Art. 3º do CTN.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A legalidade estrita e as anterioridades são garantias magnas aplicadas originariamente aos tributos (CF/88, art. 150).'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional',
        article: 'Art. 3º e Art. 4º',
        textSnippet: 'Art. 3º Tributo é toda prestação pecuniária compulsória (...) que não constitua sanção de ato ilícito...'
      }
    ],
    professorTip: 'Macete para a prova: Se o fato descrito for LICITO (ter carro, comprar casa, vender roupa), o que nasce é TRIBUTO. Se o fato for ILÍCITO (ultrapassar sinal vermelho, sonegar imposto, atrasar declaração), o que nasce é MULTA/SANÇÃO. Tributo não é castigo!'
  },

  {
    id: 'oab_trib_taxa_tarifa_04',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Espécies Tributárias',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Taxa de Serviço Público vs. Preço Público (Tarifa) e Súmula 545/STF',
    difficulty: 'Médio',
    statement: `O Município "Beta" celebrou contrato de concessão comum com uma empresa privada para a exploração dos serviços de abastecimento de água encanada e tratamento de esgoto sanitário. Determinado morador, proprietário de um imóvel residencial ligado à rede pública, ajuizou ação sob o argumento de que a remuneração cobrada pela concessionária possui natureza tributária de "taxa" e, por isso, deveria ter sido instituída por lei municipal específica e submeter-se ao regime tributário de estrita legalidade e anterioridade.
Diante da jurisprudência sumulada do Supremo Tribunal Federal e do Superior Tribunal de Justiça:`,
    options: [
      {
        letter: 'A',
        text: 'A remuneração dos serviços de água e esgoto prestados por concessionária de serviço público possui natureza jurídica de tarifa ou preço público, e não de taxa, sujeitando-se ao regime de direito público-contratual e prescrição decenal.'
      },
      {
        letter: 'B',
        text: 'Qualquer serviço de saneamento básico e água é indelegável à iniciativa privada e deve obrigatoriamente ser custeado por imposto municipal sobre a propriedade predial.'
      },
      {
        letter: 'C',
        text: 'A contraprestação de serviços de água e esgoto é necessariamente taxa tributária, aplicando-se o prazo prescricional quinquenal do Art. 174 do CTN mesmo quando cobrada por concessionária privada.'
      },
      {
        letter: 'D',
        text: 'O preço público não admite corte no fornecimento por inadimplemento, prerrogativa conferida unicamente às taxas tributárias.'
      }
    ],
    correctAnswer: 'A',
    justification: `A Súmula 545 do STF e a Súmula Vinculante 40/STF, conjugadas com o Tema Repetitivo 252 do STJ (Súmula 412/STJ), assentam que a contraprestação cobrada por concessionária pela prestação dos serviços de água e esgoto possui natureza jurídica de TARIFA ou PREÇO PÚBLICO (regime contratual de Direito Administrativo), e não tributária (taxa). Por não ser tributo, submete-se ao prazo prescricional decenal do Código Civil (art. 205), e não à prescrição tributária de 5 anos do art. 174 do CTN.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. O serviço de saneamento e água pode perfeitamente ser concedido a concessionárias nos termos do Art. 175 da CF/88 e da Lei 8.987/95.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Conforme a Súmula 412 do STJ e jurisprudência pacífica do STF, trata-se de tarifa/preço público, não de taxa.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Concessionárias de serviços públicos podem suspender o fornecimento em razão de inadimplemento de tarifa, com aviso prévio (art. 6º, § 3º, II da Lei 8.987/95).'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 145, II e Art. 175',
        textSnippet: 'Art. 145. A União, os Estados, o Distrito Federal e os Municípios poderão instituir os seguintes tributos: (...) II - taxas, em razão do exercício do poder de polícia ou pela utilização, efetiva ou potencial, de serviços públicos específicos e divisíveis...'
      }
    ],
    jurisprudence: 'Súmula 545 do STF: "Preços de serviços públicos e taxas não se confundem, porque estas, diferentemente daqueles, são compulsórias e têm sua cobrança condicionada a prévia autorização orçamentária, em relação à lei que as instituiu." / Súmula 412 do STJ: "A ação de repetição de indébito de tarifas de água e esgoto sujeita-se ao prazo prescricional estabelecido no Código Civil."',
    professorTip: 'Tabela de Ouro para a OAB: TAXA = Compulsória, instituída em lei, atividade estatal vinculada, regime tributário (CTN). TARIFA / PREÇO PÚBLICO = Facultativa, contratual, pode ser cobrada por concessionária privada, regida pelo Direito Civil/Administrativo.'
  },

  {
    id: 'faculdade_trib_policia_05',
    exam: 'Exame de Direito Tributário / Faculdade de Direito - Poder de Polícia e Taxas',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Taxa de Fiscalização e Poder de Polícia (Arts. 77 e 78 do CTN)',
    difficulty: 'Médio',
    statement: `Determinada sociedade empresária instalou uma filial em município paulista e recolheu a Taxa de Fiscalização, Localização e Funcionamento (TFLF) no momento da abertura do estabelecimento. Nos anos subsequentes, a prefeitura continuou a lançar anualmente a taxa de renovação de licença. A empresa impugnou a exigência sob o fundamento de que os fiscais municipais nunca compareceram fisicamente às instalações para realizar qualquer vistoria concreta durante o período.
À luz dos Artigos 77 e 78 do CTN e da tese firmada pelo Supremo Tribunal Federal em Repercussão Geral (Tema 217 / RE 588.322):`,
    options: [
      {
        letter: 'A',
        text: 'A cobrança é inconstitucional, pois a taxa pelo exercício do poder de polícia exige comprovação em juízo de fiscalização física e presencial individualizada a cada ano em cada estabelecimento comercial.'
      },
      {
        letter: 'B',
        text: 'A exigência anual da taxa de fiscalização é constitucional, sendo legítima sua cobrança quando demonstrada a existência de órgão administrativo competente e estrutura em efetivo funcionamento para a fiscalização, sem necessidade de vistoria física permanente (fiscalização potencial pelo poder de polícia).'
      },
      {
        letter: 'C',
        text: 'Taxas pelo exercício do poder de polícia são exclusivas da União Federal, sendo vedado aos Municípios cobrar taxas de localização e funcionamento de estabelecimentos.'
      },
      {
        letter: 'D',
        text: 'O poder de polícia somente pode ser remunerado mediante preço público e com concordância expressa do fiscalizado.'
      }
    ],
    correctAnswer: 'B',
    justification: `O STF, no julgamento do RE 588.322/RO (Tema 217 da Repercussão Geral), consolidou a tese de que é constitucional a taxa de renovação de funcionamento e fiscalização municipal, desde que haja órgão administrativo competente com estrutura em efetivo funcionamento para realizar o controle. O exercício do poder de polícia não exige a comprovação de atos concretos de inspeção física presencial periódica em cada contribuinte; a notoriedade e existência do aparelho de fiscalização do Município já caracterizam o exercício regular da polícia administrativa para fins tributários.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. O STF pacificou que NÃO é necessária comprovação de inspeção presencial diária ou periódica em cada loja.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O Art. 145, II da CF autoriza expressamente todos os entes federados (inclusive Municípios) a instituir taxas de polícia nas matérias de seu interesse local.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O poder de polícia é indelegável e típico de Estado, devendo ser remunerado privativamente por taxa, jamais por preço público.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional',
        article: 'Art. 77 e Art. 78',
        textSnippet: 'Art. 78. Considera-se poder de polícia atividade da administração pública que, limitando ou disciplinando direito, interêsse ou liberdade, regula a prática de ato ou abstenção de fato, em razão de intêresse público...'
      }
    ],
    jurisprudence: 'STF, RE 588.322/RO (Tema 217 de Repercussão Geral): "É constitucional a taxa de renovação de localização e de fiscalização em razão da constatação da existência de órgão administrativo municipal competente."',
    professorTip: 'Tese consagrada: Para a Taxa de Polícia ser válida, basta ter ÓRGÃO COMPETENTE E ESTRUTURA ADMINISTRATIVA operando. Não precisa o fiscal bater ponto na porta da empresa todo ano!'
  },

  {
    id: 'oab_trib_cosip_06',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Serviços Gerais e Iluminação Pública',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Taxa para Serviços Gerais (Uti Universi) e a Criação da COSIP (Art. 149-A)',
    difficulty: 'Fácil',
    statement: `O Município "Gama" instituiu por lei a "Taxa Municipal de Manutenção e Ampliação da Iluminação de Vias e Logradouros Públicos (TIP)", a ser cobrada mensalmente de todos os proprietários de imóveis na fatura de energia elétrica. Um contribuinte ingressou em juízo para declarar a inconstitucionalidade da cobrança.
Considerando o entendimento pacificado no Supremo Tribunal Federal (Súmula Vinculante 41) e o Artigo 149-A da Constituição Federal, assinale a opção correta:`,
    options: [
      {
        letter: 'A',
        text: 'A cobrança da taxa é válida, pois a iluminação de vias públicas é serviço individualizado que aproveita especificamente a cada proprietário lindeiro à rua.'
      },
      {
        letter: 'B',
        text: 'A taxa de iluminação pública é inconstitucional, pois o serviço de iluminação pública não pode ser remunerado mediante taxa, facultando-se aos Municípios e ao DF instituir a Contribuição para o Custeio da Iluminação Pública (COSIP/CIP).'
      },
      {
        letter: 'C',
        text: 'O serviço de iluminação pública somente pode ser custeado por Empréstimo Compulsório federal, vedada qualquer espécie tributária local.'
      },
      {
        letter: 'D',
        text: 'Tanto a taxa de iluminação pública quanto a COSIP foram declaradas integralmente inconstitucionais pelo Supremo Tribunal Federal em sede de controle concentrado.'
      }
    ],
    correctAnswer: 'B',
    justification: `A iluminação pública é serviço público geral e indivisível (*uti universi*), aproveitando a toda a coletividade de modo indistinto, sem possibilidade de medição individual da fruição. Por isso, NÃO atende aos requisitos do Art. 145, II da CF (especificidade e divisibilidade), sendo inconstitucional a remuneração por taxa (Súmula Vinculante 41 do STF). Em razão disso, a Emenda Constitucional nº 39/2002 incluiu o Art. 149-A na CF/88, autorizando expressamente os Municípios e o Distrito Federal a instituir a contribuição para o custeio do serviço de iluminação pública (COSIP), que é uma contribuição especial válida (RE 573.675 / Tema 44 do STF).`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. Conforme a Súmula Vinculante 41, a iluminação pública é insuscetível de remuneração por taxa.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A União não institui empréstimo compulsório para iluminação pública; quem arrecada a COSIP são Municípios e DF.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A COSIP (Art. 149-A) é plenamente constitucional segundo o STF (Tema 44).'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 149-A e Art. 145, II',
        textSnippet: 'Art. 149-A. Os Municípios e o Distrito Federal poderão instituir contribuição, na forma das respectivas leis, para o custeio do serviço de iluminação pública, observado o disposto no art. 150, I e III.'
      }
    ],
    jurisprudence: 'Súmula Vinculante 41 do STF: "O serviço de iluminação pública não pode ser remunerado mediante taxa." / Súmula Vinculante 19 do STF: "A taxa cobrada exclusivamente em razão dos serviços públicos de coleta, remoção e tratamento ou destinação de lixo ou resíduos provenientes de imóveis, não viola o artigo 145, II, da Constituição Federal."',
    professorTip: 'O contraste da Súmula Vinculante que todo examinador adora: Coleta de lixo domiciliar É constitucional como TAXA (Súmula Vinculante 19). Já Iluminação pública NÃO pode ser taxa (Súmula Vinculante 41), precisando da COSIP (art. 149-A)!'
  },

  {
    id: 'faculdade_trib_melhoria_07',
    exam: 'Exame de Direito Tributário / Faculdade de Direito - Contribuição de Melhoria',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Contribuição de Melhoria e o Princípio do Duplo Limite (Art. 145, III da CF)',
    difficulty: 'Difícil',
    statement: `O Município "Delta" realizou obras de pavimentação e canalização de um córrego em determinado bairro residencial, cujo custo total devidamente comprovado foi de R$ 1.000.000,00 (um milhão de reais). Para ressarcir os cofres públicos, o Prefeito enviou projeto de lei instituindo contribuição de melhoria cobrada dos 100 proprietários beneficiados, dividindo o valor integral da obra em quotas iguais de R$ 10.000,00 por imóvel. Todavia, perícia técnica imobiliária comprovou que os imóveis de um dos quarteirões tiveram uma valorização real de mercado de apenas R$ 4.000,00 por residência em virtude da obra.
À luz da disciplina constitucional (Art. 145, III) e do Decreto-Lei nº 195/1967:`,
    options: [
      {
        letter: 'A',
        text: 'A cobrança das quotas de R$ 10.000,00 é plenamente legal, haja vista que a contribuição de melhoria tem por único limite o ressarcimento integral do custo total da obra pública pelo ente federado.'
      },
      {
        letter: 'B',
        text: 'A cobrança é inconstitucional e ilegítima no valor pretendido, pois a contribuição de melhoria está sujeita ao princípio do duplo limite: o limite total (gasto total com a obra) e o limite individual (a efetiva valorização imobiliária auferida por cada imóvel em decorrência da obra).'
      },
      {
        letter: 'C',
        text: 'O fato gerador da contribuição de melhoria é a mera conclusão da obra pública, sendo irrelevante se houve valorização ou desvalorização do imóvel do contribuinte.'
      },
      {
        letter: 'D',
        text: 'A contribuição de melhoria não exige prévio edital contendo memorial descritivo da obra e previsão dos custos, bastando o lançamento direto da guia de pagamento após o término.'
      }
    ],
    correctAnswer: 'B',
    justification: `A contribuição de melhoria (CF/88, art. 145, III e CTN, art. 81) possui dois requisitos cumulativos essenciais: (1) realização de obra pública; e (2) efetiva valorização imobiliária do bem do contribuinte decorrente dessa obra. Vigora o dogma do DUPLO LIMITE: Limite Global/Total (a soma de todas as contribuições não pode superar o custo real da obra) e Limite Individual (o valor cobrado de cada proprietário jamais pode ultrapassar o montante em dinheiro da valorização efetiva que o seu respectivo imóvel experimentou). Como os imóveis valorizaram apenas R$ 4.000,00, o Município jamais pode exigir R$ 10.000,00 desse contribuinte.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. Viola o limite individual; cobrar acima da valorização causaria confisco e enriquecimento sem causa do Estado.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Conforme firme jurisprudência do STJ e STF, o fato gerador NÃO é a obra, mas sim o acréscimo de valor (plus) imobiliário dela decorrente.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O Decreto-Lei 195/67 (art. 5º) e o CTN (art. 82) exigem expressamente a prévia publicação de edital com memorial descritivo, orçamento e delimitação da zona beneficiada.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional e CF/88',
        article: 'Art. 81 do CTN e Art. 145, III da CF',
        textSnippet: 'Art. 81. A contribuição de melhoria cobrada pela União, pelos Estados, pelo Distrito Federal ou pelos Municípios, no âmbito de suas respectivas atribuições, é instituída para fazer face ao custo de obras públicas de que decorra valorização imobiliária, tendo como limite total a despesa realizada e como limite individual o acréscimo de valor...'
      }
    ],
    professorTip: 'Memorize para a prova da faculdade e OAB: Contribuição de Melhoria = Obra Pública + Valorização Imobiliária. Se fez obra mas NÃO valorizou, NÃO PODE cobrar contribuição de melhoria! E tem DUPLO LIMITE: teto da obra (global) e teto da valorização daquele imóvel (individual).'
  },

  {
    id: 'oab_trib_emprestimo_08',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Empréstimos Compulsórios',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Empréstimos Compulsórios e Requisitos Constitucionais (Art. 148 da CF)',
    difficulty: 'Médio',
    statement: `Em virtude de graves inundações que assolaram diversos municípios do Estado "X", causando destruição de pontes e rodovias estaduais, o Governador do Estado promulgou Lei Ordinária Estadual instituindo "Empréstimo Compulsório Estadual para Reconstrução e Calamidade", exigindo uma contribuição temporária de 2% sobre os rendimentos dos servidores e empresas locais, prevendo resgate dos valores corrigidos após 5 anos.
Assinale a alternativa que indica a conformidade constitucional da medida:`,
    options: [
      {
        letter: 'A',
        text: 'A instituição é constitucional, já que situações de calamidade pública autorizam qualquer ente federado a criar empréstimo compulsório por lei ordinária para socorrer suas finanças.'
      },
      {
        letter: 'B',
        text: 'A lei é flagrantemente inconstitucional, pois a competência para instituir empréstimo compulsório é privativa da União Federal, mediante Lei Complementar, com vinculação obrigatória da aplicação dos recursos à despesa que fundamentou sua instituição.'
      },
      {
        letter: 'C',
        text: 'A lei é válida apenas se aprovada por quórum qualificado de dois terços da Assembleia Legislativa Estadual.'
      },
      {
        letter: 'D',
        text: 'A inconstitucionalidade decorre apenas do prazo de resgate em 5 anos, pois a CF/88 exige devolução imediata em até 12 meses.'
      }
    ],
    correctAnswer: 'B',
    justification: `O Artigo 148 da Constituição Federal estabelece que os Empréstimos Compulsórios: (1) são de competência EXCLUSIVA da União Federal (Estados, DF e Municípios NÃO possuem competência tributária para instituí-los); (2) exigem LEI COMPLEMENTAR (jamais lei ordinária ou medida provisória); (3) só podem ser instituídos em duas hipóteses taxativas: calamidade pública ou guerra externa/sua iminência (inciso I) OU investimento público urgente e de relevante interesse nacional (inciso II); e (4) possuem vinculação obrigatória de toda a receita à despesa correspondente (parágrafo único). Portanto, a lei estadual é nula de pleno direito.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. Estados não têm competência para empréstimos compulsórios, e a espécie exige Lei Complementar.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Nenhum quórum da Assembleia Legislativa pode sanar a incompetência absoluta do Estado.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O vício central é de competência federativa e de veículo legislativo (ausência de LC federal).'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 148, I, II e Parágrafo Único',
        textSnippet: 'Art. 148. A União, mediante lei complementar, poderá instituir empréstimos compulsórios: I - para atender a despesas extraordinárias, decorrentes de calamidade pública, de guerra externa ou sua iminência; II - no caso de investimento público de caráter urgente e de relevante interesse nacional...'
      }
    ],
    professorTip: 'Três "NÃOS" do Empréstimo Compulsório para a OAB: NÃO pode ser criado por Estado ou Município (SÓ União). NÃO pode ser por Lei Ordinária (SÓ Lei Complementar). NÃO pode receita livre (receita é estritamente vinculada à finalidade).'
  },

  {
    id: 'faculdade_trib_pentapartida_09',
    exam: 'Exame de Direito Tributário / Faculdade de Direito - Teoria das Espécies Tributárias',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Teoria Pentapartida (STF) vs. Tripartida (Art. 5º do CTN)',
    difficulty: 'Médio',
    statement: `O Artigo 5º do Código Tributário Nacional, editado sob a égide da Carta de 1946, preceitua que "os tributos são impostos, taxas e contribuições de melhoria" (Teoria Tripartida ou Tricotômica). Por outro lado, o Artigo 4º, II do CTN dispõe que a destinação legal do produto da arrecadação é irrelevante para determinar a natureza jurídica específica do tributo.
Contudo, após a promulgação da Constituição de 1988, o Supremo Tribunal Federal (RE 146.733/SP) pacificou o entendimento de que:`,
    options: [
      {
        letter: 'A',
        text: 'A teoria tripartite foi plenamente mantida pelo constituinte de 1988, sendo os empréstimos compulsórios considerados meros contratos de mútuo civil.'
      },
      {
        letter: 'B',
        text: 'Vige no Brasil a Teoria Pentapartida ou Quinquipartida (impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais), restando superada a irrelevância da destinação da receita para essas duas últimas espécies tributárias constitucionais.'
      },
      {
        letter: 'C',
        text: 'As contribuições especiais têm natureza jurídica de preço privado, subordinando-se ao Código de Defesa do Consumidor.'
      },
      {
        letter: 'D',
        text: 'O rol de espécies tributárias é ilimitado, podendo cada Município criar categorias autônomas não previstas na Carta Magna.'
      }
    ],
    correctAnswer: 'B',
    justification: `Sob a Constituição Federal de 1988, o STF consagrou definitivamente a TEORIA PENTAPARTIDA (ou quinquipartida), reconhecendo cinco espécies tributárias autônomas: 1) Impostos (art. 145, I); 2) Taxas (art. 145, II); 3) Contribuições de melhoria (art. 145, III); 4) Empréstimos compulsórios (art. 148); e 5) Contribuições especiais ou parafiscais (art. 149). Nessa esteira, o art. 4º, II do CTN (que dizia ser irrelevante a destinação da arrecadação) restou parcialmente não recepcionado pela CF/88, pois nos empréstimos compulsórios e contribuições a vinculação constitucional da receita à finalidade pública é elemento essencial para a sua própria caracterização jurídica.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. O STF rejeitou a teoria tripartite e firmou que empréstimo compulsório é tributo autônomo (RE 146.733).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. As contribuições especiais do art. 149 são tributos de natureza pública compulsória e não relações de consumo.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A competência tributária e as espécies são numerus clausus estipuladas rigidamente na CF/88.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional e CF/88',
        article: 'Art. 5º do CTN e Arts. 145, 148 e 149 da CF/88',
        textSnippet: 'Art. 5º Os tributos são impostos, taxas e contribuições de melhoria. (Dispositivo ampliado pela CF/88)'
      }
    ],
    jurisprudence: 'STF, Pleno, RE 146.733/SP (Rel. Min. Moreira Alves): Consagração definitiva da Teoria Pentapartida (5 espécies tributárias no direito constitucional brasileiro).',
    professorTip: 'Questão certeira em prova de faculdade: Por que o art. 4º, II do CTN foi superado? Porque nas contribuições e nos empréstimos compulsórios a destinação da receita É SIM elemento caracterizador essencial da espécie!'
  },

  {
    id: 'oab_trib_legalidade_mitigada_10',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Princípio da Legalidade e Decretos',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Princípio da Legalidade Tributária Estrita e Exceções Constitucionais',
    difficulty: 'Médio',
    statement: `Visando conter pressões inflacionárias sobre a cesta básica e proteger a balança de pagamentos comercial, o Presidente da República editou Decreto Presidencial reduzindo as alíquotas do Imposto de Importação (II) e do Imposto sobre Produtos Industrializados (IPI), e majorando, no mesmo ato, as alíquotas do Imposto sobre Operações Financeiras (IOF) e da Contribuição Social sobre o Lucro Líquido (CSLL).
Consultado por uma associação de contribuintes sobre a validade do decreto:`,
    options: [
      {
        letter: 'A',
        text: 'O Presidente da República agiu em estrita conformidade constitucional em todas as alterações, pois o Poder Executivo pode alterar por decreto as alíquotas de qualquer imposto ou contribuição.'
      },
      {
        letter: 'B',
        text: 'A alteração das alíquotas do II, IPI e IOF por decreto é válida (exceção mitigada à legalidade estrita nos limites da lei), porém a majoração da CSLL por decreto é flagrantemente inconstitucional, pois a CSLL exige indispensavelmente lei em sentido formal.'
      },
      {
        letter: 'C',
        text: 'Todas as modificações são inconstitucionais, visto que a Constituição de 1988 não admite nenhuma exceção ao princípio da legalidade estrita (Art. 150, I da CF).'
      },
      {
        letter: 'D',
        text: 'O decreto é válido unicamente quanto à CSLL, sendo nulo no que se refere aos impostos regulatórios.'
      }
    ],
    correctAnswer: 'B',
    justification: `O Artigo 150, I da CF consagra o Princípio da Legalidade Estrita (reserva legal). Contudo, o Artigo 153, § 1º da CF prevê exceções expressas que permitem ao Poder Executivo alterar as alíquotas, atendidas as condições e os limites estabelecidos em lei, para os impostos de caráter extrafiscal e regulatório: II (Importação), IE (Exportação), IPI (Produtos Industrializados) e IOF (Operações Financeiras), além da CIDE-Combustíveis e ICMS-Combustíveis monofásico. A CSLL (Contribuição Social sobre o Lucro Líquido), por sua vez, NÃO integra esse rol taxativo de exceções, exigindo estritamente LEI em sentido formal para a majoração de sua alíquota.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. A CSLL não pode ter alíquota majorada por decreto; submete-se à legalidade estrita.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A CF/88 consagra exceções expressas no Art. 153, § 1º, Art. 177, § 4º, I, "b" e Art. 155, § 4º, IV, "c".'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. A situação é justamente a inversa: os impostos extrafiscais podem ter alíquota alterada por decreto; a CSLL jamais.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, I e Art. 153, § 1º',
        textSnippet: 'Art. 153, § 1º É facultado ao Poder Executivo, atendidas as condições e os limites estabelecidos em lei, alterar as alíquotas dos impostos enumerados nos incisos I, II, IV e V [II, IE, IPI e IOF].'
      }
    ],
    professorTip: 'Mnemônico dos tributos que o Presidente pode mexer na alíquota por DECRETO: II, IE, IPI, IOF (os 4 regulatórios do art. 153, § 1º) + CIDE-Combustível e ICMS-Combustível. Qualquer outro tributo (como CSLL, IR ou ITBI) exige LEI!'
  },

  {
    id: 'faculdade_trib_anterioridade_regra_11',
    exam: 'Exame de Direito Tributário Constitucional / Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Anterioridade Anual e Nonagesimal - Regra Geral Cumulativa',
    difficulty: 'Médio',
    statement: `Em 20 de dezembro de 2024, foi publicada no Diário Oficial lei ordinária de determinado Estado instituindo nova taxa pelo exercício regular do poder de polícia sobre fiscalização de recursos hídricos e minerais, com início da exigibilidade fixado pelo texto da lei para 15 de janeiro de 2025.
Sob a sistemática constitucional inaugurada pela Emenda Constitucional nº 42/2003 no Artigo 150, III, "b" e "c" da CF/88:`,
    options: [
      {
        letter: 'A',
        text: 'A cobrança a partir de 15 de janeiro de 2025 é inconstitucional, pois a regra geral do sistema tributário nacional impõe o cumprimento cumulativo da anterioridade anual (exercício seguinte) e da anterioridade nonagesimal (mínimo de 90 dias da publicação).'
      },
      {
        letter: 'B',
        text: 'A taxa é válida a partir de 15 de janeiro, visto que taxas pelo poder de polícia não se submetem a nenhuma anterioridade constitucional.'
      },
      {
        letter: 'C',
        text: 'Bastava respeitar a virada do exercício financeiro em 1º de janeiro de 2025, sendo a noventena dispensada para tributos estaduais.'
      },
      {
        letter: 'D',
        text: 'A taxa só poderá ser cobrada em 1º de janeiro de 2026, pois a noventena sempre empurra a exigência para o segundo exercício subsequente.'
      }
    ],
    correctAnswer: 'A',
    justification: `A partir da EC 42/2003, a regra geral do Direito Constitucional Tributário brasileiro é a cumulatividade das garantias da anterioridade: o tributo instituído ou majorado só pode ser cobrado (1) no exercício financeiro seguinte (CF/88, art. 150, III, "b") E (2) após decorridos 90 dias da publicação da lei (CF/88, art. 150, III, "c"). Publicada a lei em 20 de dezembro de 2024, a noventena se encerra apenas por volta de 20 de março de 2025. Portanto, exigir a taxa em 15 de janeiro de 2025 fere a anterioridade nonagesimal.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. As taxas submetem-se plenamente a AMBAS as anterioridades (anual e noventena).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Desde a EC 42/2003, a noventena aplica-se a todos os entes federados (União, Estados, DF e Municípios).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Vencida a noventena em março de 2025 (já dentro do exercício seguinte), o tributo torna-se imediatamente exigível, sem necessidade de aguardar 2026.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, III, "b" e "c"',
        textSnippet: 'Art. 150. Sem prejuízo de outras garantias asseguradas ao contribuinte, é vedado à União, aos Estados, ao Distrito Federal e aos Municípios: III - cobrar tributos: b) no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou; c) antes de decorridos noventa dias da data em que haja sido publicada a lei...'
      }
    ],
    professorTip: 'Regra de Ouro da Anterioridade: A regra geral é CUMULATIVA (respeita o ano seguinte E respeita 90 dias). Aplica-se a data que for MAIS LONGA para proteger o contribuinte da surpresa tributária!'
  },

  {
    id: 'oab_trib_anterioridade_excecoes_12',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Exceções da Anterioridade',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Exceções Cruzadas da Anterioridade Anual e da Anterioridade Nonagesimal',
    difficulty: 'Difícil',
    statement: `No dia 10 de dezembro de 2024, a União Federal publicou no Diário Oficial da União dois diplomas normativos:
1. Decreto majorando as alíquotas do Imposto sobre Produtos Industrializados (IPI) incidente sobre bebidas alcoólicas;
2. Lei Ordinária majorando as alíquotas do Imposto de Renda da Pessoa Física (IRPF).
Ambos os atos normativos previram cobrança a partir de 1º de janeiro de 2025.
À luz do sistema de limitações constitucionais ao poder de tributar (Art. 150, § 1º da CF/88):`,
    options: [
      {
        letter: 'A',
        text: 'Tanto o IPI quanto o Imposto de Renda podem ser cobrados a partir de 1º de janeiro de 2025, pois ambos respeitam apenas a anterioridade do exercício financeiro.'
      },
      {
        letter: 'B',
        text: 'A cobrança do Imposto de Renda em 1º de janeiro de 2025 é constitucional (é exceção à noventena, respeitando apenas a anterioridade anual), enquanto a cobrança do IPI em 1º de janeiro de 2025 é inconstitucional (é exceção à anterioridade anual, mas deve obrigatoriamente respeitar os 90 dias da noventena).'
      },
      {
        letter: 'C',
        text: 'Nenhum dos tributos poderá ser cobrado antes de 90 dias, porquanto a noventena é absoluta para todos os impostos da União.'
      },
      {
        letter: 'D',
        text: 'O IPI pode ser cobrado imediatamente no dia seguinte à publicação, visto que não respeita nenhuma anterioridade.'
      }
    ],
    correctAnswer: 'B',
    justification: `O Artigo 150, § 1º da CF consagra as famosas exceções cruzadas:
1) O IPI NÃO respeita a anterioridade anual, mas DEVE OBRIGATORIAMENTE respeitar a anterioridade nonagesimal (noventena). Como o decreto saiu em 10/12/2024, o IPI só poderá ser exigido após 90 dias (março de 2025), sendo inconstitucional a cobrança em 01/01/2025.
2) O IR (Imposto de Renda) DEVE respeitar a anterioridade anual, mas NÃO se submete à noventena (é exceção expressa à noventena). Como a lei saiu em 10/12/2024, o IR já pode ser cobrado no primeiro dia do exercício seguinte (01/01/2025).`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. O IPI é obrigado a cumprir os 90 dias (CF, art. 150, § 1º).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O Imposto de Renda é exceção constitucional expressa à noventena (art. 150, § 1º).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O IPI não cobra de imediato; precisa aguardar rigorosamente 90 dias.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, § 1º',
        textSnippet: 'Art. 150, § 1º A vedação do inciso III, "b" [anterioridade anual], não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, IV e V; e a vedação do inciso III, "c" [noventena], não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, III e V, nem à fixação da base de cálculo dos impostos previstos nos arts. 155, III e 156, I.'
      }
    ],
    professorTip: 'Essa é a pegadinha que mais reprova na FGV: "IPI e IR são irmãos siameses invertidos". O IPI NÃO espera o ano novo, mas ESPERA 90 dias! O IR ESPERA o ano novo, mas NÃO espera 90 dias! Grave isso!'
  },

  {
    id: 'oab_trib_iptu_noventena_13',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / IPTU e Súmula 160 do STJ',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Majoração de IPTU, Planta de Valores e Súmula 160 do STJ',
    difficulty: 'Médio',
    statement: `No dia 15 de dezembro de 2024, o Prefeito Municipal de uma capital editou dois atos:
1. Decreto Executivo atualizando o valor venal dos imóveis para fins de IPTU com base no índice oficial de inflação acumulada no ano (IPCA);
2. Projeto de lei aprovado pela Câmara Municipal majorando a alíquota geral do IPTU de 1% para 1,5%, publicado no Diário Oficial em 22 de dezembro de 2024, para vigorar em 1º de janeiro de 2025.
Diante da disciplina constitucional e da Súmula 160 do STJ:`,
    options: [
      {
        letter: 'A',
        text: 'Ambos os atos são ilegítimos, pois o IPTU exige sempre noventena e anterioridade anual tanto para alíquotas quanto para atualização monetária.'
      },
      {
        letter: 'B',
        text: 'A atualização do valor venal por decreto é válida (não constitui aumento de tributo a mera atualização monetária - art. 97, § 2º do CTN), mas a majoração da alíquota exige respeito à anterioridade anual E à noventena, só podendo ser exigida após decorridos 90 dias da publicação da lei.'
      },
      {
        letter: 'C',
        text: 'A majoração da alíquota do IPTU é exceção tanto à anterioridade anual quanto à noventena, sendo válida já a partir de 1º de janeiro de 2025.'
      },
      {
        letter: 'D',
        text: 'O Prefeito pode majorar a alíquota por decreto executivo, desde que a base de cálculo seja mantida inalterada.'
      }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 97, § 2º do CTN, a mera recomposição do valor da moeda (atualização pelo IPCA) não constitui aumento de tributo, podendo ser feita por decreto. Por outro lado, a CF/88 (art. 150, § 1º) dispensou da noventena APENAS a fixação da base de cálculo do IPTU e do IPVA. A MAJORACAO DE ALÍQUOTAS do IPTU submete-se à REGRA GERAL (respeita tanto a anterioridade anual quanto a noventena). Assim, a lei de 22/12 só pode produzir efeitos após 90 dias (março de 2025), sendo inconstitucional exigi-la em 1º de janeiro.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. A atualização monetária por decreto é expressamente permitida (CTN, art. 97, § 2º).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O art. 150, § 1º excepcionou da noventena a BASE DE CÁLCULO do IPTU, e NÃO a sua alíquota.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Majoração de alíquota do IPTU exige estrita reserva de lei em sentido formal.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional e CF/88',
        article: 'Art. 97, § 2º do CTN e Art. 150, § 1º da CF',
        textSnippet: 'Art. 97, § 2º Não constitui majoração de tributo, para os efeitos do inciso II dêste artigo, a atualização do valor monetário da respectiva base de cálculo.'
      }
    ],
    jurisprudence: 'Súmula 160 do STJ: "É defeso, ao Município, atualizar o IPTU, mediante decreto, em percentual superior ao índice oficial de correção monetária."',
    professorTip: 'Atenção ao detalhe sutil da CF: O IPTU só tem dispensa de noventena para a sua BASE DE CÁLCULO (planta de valores)! Se a lei aumentou a ALÍQUOTA, TEM QUE CUMPRIR A NOVENTENA!'
  },

  {
    id: 'faculdade_trib_irretroatividade_14',
    exam: 'Exame de Direito Tributário / Faculdade de Direito - Aplicação da Lei no Tempo',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Princípio da Irretroatividade (Art. 150, III, a) e a Retroatividade Benéfica (Art. 106 do CTN)',
    difficulty: 'Difícil',
    statement: `O Princípio da Irretroatividade Tributária (CF/88, Art. 150, III, "a") veda aos entes federados cobrar tributos em relação a fatos geradores ocorridos antes do início da vigência da lei que os houver instituído ou aumentado. Todavia, o Artigo 106 do Código Tributário Nacional elenca hipóteses em que a lei tributária aplica-se a ato ou fato pretérito.
A respeito das exceções legais que permitem a aplicação retroativa da lei tributária, assinale a opção correta:`,
    options: [
      {
        letter: 'A',
        text: 'A lei tributária aplica-se retroativamente para majorar alíquotas de tributos pretéritos caso o sujeito passivo ainda não tenha sido notificado do lançamento.'
      },
      {
        letter: 'B',
        text: 'Aplica-se retroativamente a lei expressamente interpretativa (salvo aplicação de penalidade pelo descumprimento do dispositivo interpretado) e a lei que deixe de definir ato como infração ou lhe comine penalidade menos severa (*lex mitior*), desde que o ato não esteja definitivamente julgado.'
      },
      {
        letter: 'C',
        text: 'O princípio da *lex mitior* tributária autoriza a repetição de indébito de multas administrativas já pagas e extintas com trânsito em julgado material administrativo e judicial.'
      },
      {
        letter: 'D',
        text: 'A retroatividade da lei interpretativa permite a criação de novas obrigações acessórias com efeitos ex tunc.'
      }
    ],
    correctAnswer: 'B',
    justification: `O Artigo 106 do CTN consagra as duas exceções estritas à irretroatividade:
1) Art. 106, I: Lei expressamente interpretativa (que esclarece o sentido de norma anterior duvidosa), excluída a aplicação de penalidade à infração dos dispositivos interpretados;
2) Art. 106, II: Em matéria de infrações e penalidades, a lei nova aplica-se a fato pretérito quando for mais benéfica (*lex mitior*): se deixa de definir como infração (abolitio), se deixa de tratá-lo como contrário a qualquer exigência de ação/omissão, ou se comina penalidade menos severa que a lei vigente à época do fato — DESDE QUE o ato NÃO esteja definitivamente julgado. Se já transitou em julgado ou foi pago, não há retroatividade.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. Majoração de tributo pretérito é vedada de forma absoluta pela CF/88 (art. 150, III, a).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Se o ato já foi definitivamente julgado ou pago, a lei nova benigna NÃO retroage (art. 106, II, c do CTN).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Lei interpretativa não pode inovar no ordenamento jurídico criando obrigações originárias.'
      }
    ],
    statuteReferences: [
      {
        code: 'Código Tributário Nacional',
        article: 'Art. 106, I e II',
        textSnippet: 'Art. 106. A lei aplica-se a ato ou fato pretérito: I - em qualquer caso, quando seja expressamente interpretativa, excluída a aplicação de penalidade à infração dos dispositivos interpretados; II - tratando-se de ato não definitivamente julgado: a) quando deixe de defini-lo como infração; (...) c) quando lhe comine penalidade menos severa...'
      }
    ],
    professorTip: 'Fórmula do Art. 106 do CTN: Tributo (imposto, taxa, etc.) NUNCA retroage para prejudicar. Já MULTA / INFRAÇÃO retroage se for MAIS BENÉFICA (igual ao Direito Penal), mas COM UMA CONDIÇÃO: o processo ainda não pode estar definitivamente julgado!'
  },

  {
    id: 'oab_trib_confisco_multas_15',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Princípio do Não-Confisco e Multas',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Princípio da Vedação ao Confisco (Art. 150, IV da CF) e Limites do STF para Multas',
    difficulty: 'Médio',
    statement: `Determinada empresa deixou de recolher ICMS no vencimento legal. O Estado lavrou auto de infração cobrando o tributo devido acrescido de uma "multa punitiva por sonegação e dolo" fixada pela lei estadual em 250% (duzentos e cinquenta por cento) do valor do imposto não recolhido, além de juros moratórios. A empresa ajuizou ação anulatória alegando violação ao Princípio da Vedação ao Efeito de Confisco (Art. 150, IV da CF/88).
Com base na jurisprudência vinculante do Supremo Tribunal Federal (Temas 214 e 863 de Repercussão Geral):`,
    options: [
      {
        letter: 'A',
        text: 'A vedação constitucional ao confisco aplica-se exclusivamente aos impostos, não alcançando penalidades pecuniárias ou multas fiscais.'
      },
      {
        letter: 'B',
        text: 'A multa punitiva de 250% é inconstitucional por possuir caráter confiscatório, tendo o STF firmado a tese de que o teto constitucional para multas tributárias punitivas é de 100% (cem por cento) do valor do tributo devido.'
      },
      {
        letter: 'C',
        text: 'Qualquer multa superior a 10% do valor do débito é automaticamente nula no ordenamento jurídico brasileiro.'
      },
      {
        letter: 'D',
        text: 'O STF autorizou que multas punitivas alcancem até 500% do imposto nos casos em que comprovada a má-fé societária.'
      }
    ],
    correctAnswer: 'B',
    justification: `O Supremo Tribunal Federal firmou em sede de repercussão geral (Tema 863 / RE 736.090) que a cláusula da vedação ao confisco (CF/88, art. 150, IV) estende-se também às MULTAS fiscais. O Pretório Excelso fixou parâmetros objetivos:
- Multas punitivas / isoladas / de ofício (aplicadas pelo descumprimento qualificado): o teto máximo constitucional é de 100% (cem por cento) do valor do tributo devido; valores superiores têm caráter confiscatório;
- Multas moratórias (decorrentes do mero atraso no pagamento): o teto máximo admitido pelo STF é de 20% (vinte por cento) do tributo (ADI 551).
Portanto, a multa de 250% é manifestamente confiscatória e inconstitucional.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. O STF pacificou que a vedação ao confisco incide tanto sobre o tributo quanto sobre as multas (Tema 863).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O teto de 100% aplica-se às punitivas; não há regra limitando multas a 10% no âmbito tributário geral.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Nenhuma multa pode ultrapassar 100% do valor do tributo, mesmo havendo fraude ou sonegação.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, IV',
        textSnippet: 'Art. 150. Sem prejuízo de outras garantias asseguradas ao contribuinte, é vedado à União, aos Estados, ao Distrito Federal e aos Municípios: (...) IV - utilizar tributo com efeito de confisco;'
      }
    ],
    jurisprudence: 'STF, Tema 863 de Repercussão Geral (RE 736.090) e ADI 551: "É inconstitucional a fixação de multa punitiva em montante superior a 100% do valor do tributo devido, por violação ao princípio da vedação ao confisco." Para multas moratórias, limite de 20%.',
    professorTip: 'Parâmetros de Ouro do STF sobre Multas: Multa de Mora (atraso) = limite de 20%. Multa Punitiva (auto de infração/sonegação) = limite de 100% do imposto. Passou de 100%, É CONFISCO!'
  },

  {
    id: 'faculdade_trib_capacidade_contributiva_16',
    exam: 'Exame de Direito Tributário / Faculdade de Direito - Princípios e Imunidades',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Capacidade Contributiva e Impostos Reais (Art. 145, § 1º da CF)',
    difficulty: 'Médio',
    statement: `O Artigo 145, § 1º da Constituição Federal preceitua que: "Sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte, facultado à administração tributária (...) identificar o patrimônio, os rendimentos e as atividades econômicas do sujeito passivo".
Historicamente, parte da doutrina clássica sustentava que a progressividade com base na capacidade contributiva aplicava-se exclusivamente aos impostos pessoais (ex.: Imposto de Renda), sendo vedada para impostos reais (ex.: IPTU, ITCMD, ITBI).
Sobre a evolução jurisprudencial desse princípio no Supremo Tribunal Federal:`,
    options: [
      {
        letter: 'A',
        text: 'O STF manteve a interpretação restritiva e proibiu qualquer progressividade fiscal em impostos reais como o ITCMD e o IPTU.'
      },
      {
        letter: 'B',
        text: 'O STF pacificou que o princípio da capacidade contributiva aplica-se a todos os impostos (reais ou pessoais), sendo constitucional a fixação de alíquotas progressivas para o ITCMD (Súmula 656 superada pelo RE 562.045) e para o IPTU com base no valor venal do imóvel (Art. 156, § 1º, I da CF).'
      },
      {
        letter: 'C',
        text: 'A capacidade contributiva foi revogada da Constituição pela Emenda Constitucional da Reforma Tributária.'
      },
      {
        letter: 'D',
        text: 'Apenas a União Federal pode instituir impostos com alíquotas progressivas, sendo a proporcionalidade estrita obrigatória para Estados e Municípios.'
      }
    ],
    correctAnswer: 'B',
    justification: `A cláusula "sempre que possível" do Art. 145, § 1º da CF foi interpretada pelo STF como um comando de expansão da capacidade contributiva para todas as espécies de impostos. O Pretório Excelso superou o antigo entendimento restritivo e firmou que mesmo os impostos reais (cujo fato gerador é uma coisa/bem, e não uma qualidade subjetiva do sujeito passivo) podem adotar alíquotas progressivas:
1) O IPTU pode ser progressivo em razão do valor do imóvel (EC 29/2000, art. 156, § 1º, I);
2) O ITCMD é plenamente progressivo em razão do montante da herança ou doação (STF, RE 562.045 / Tema 31 de Repercussão Geral).`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. O STF reconheceu a progressividade fiscal do ITCMD e do IPTU.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A capacidade contributiva permanece pilar intocável do Sistema Tributário Nacional.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Estados (ITCMD) e Municípios (IPTU) utilizam regularmente alíquotas progressivas.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 145, § 1º e Art. 156, § 1º, I',
        textSnippet: 'Art. 145, § 1º Sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte...'
      }
    ],
    jurisprudence: 'STF, Pleno, RE 562.045/RS (Tema 31): "Todos os impostos estão sujeitos ao princípio da capacidade contributiva, mesmo os que não têm caráter pessoal. É constitucional a fixação de alíquotas progressivas para o ITCMD."',
    professorTip: 'Tese doutrinária indispensável na faculdade: O STF superou a barreira entre impostos pessoais e reais para fins de capacidade contributiva. Quem tem patrimônio maior ou herança mais valiosa manifesta maior capacidade de contribuir e pode pagar alíquotas progressivas maiores!'
  },

  {
    id: 'oab_trib_trafego_pedagio_17',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Liberdade de Tráfego e Pedágio',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Princípio da Liberdade de Tráfego e Cobrança de Pedágio (Art. 150, V da CF)',
    difficulty: 'Fácil',
    statement: `Um motorista trafegava por rodovia federal pedagiada e se recusou a pagar a tarifa na praça de pedágio. Em sua defesa, alegou que o Artigo 150, V da CF/88 veda expressamente à União, aos Estados, ao DF e aos Municípios "estabelecer limitações ao tráfego de pessoas ou bens, por meio de tributos interestaduais ou intermunicipais".
Sobre a cobrança de pedágio à luz da Constituição Federal e da jurisprudência do STF:`,
    options: [
      {
        letter: 'A',
        text: 'A cobrança de pedágio é expressamente ressalvada pela própria Constituição Federal (Art. 150, V, in fine) para vias conservadas pelo Poder Público, não havendo obrigatoriedade constitucional de oferecimento de via alternativa gratuita ao usuário.'
      },
      {
        letter: 'B',
        text: 'O pedágio é flagrantemente inconstitucional sempre que não houver rodovia vicinal pública gratuita e asfaltada disponível no mesmo trajeto.'
      },
      {
        letter: 'C',
        text: 'O pedágio possui natureza tributária de imposto sobre a circulação viária, sendo vedada sua exploração por concessionárias privadas.'
      },
      {
        letter: 'D',
        text: 'O pedágio só pode ser cobrado de veículos de transporte de cargas, sendo imunes os veículos de passeio particulares.'
      }
    ],
    correctAnswer: 'A',
    justification: `O próprio Artigo 150, V da CF/88 contém exceção expressa em sua parte final: "ressalvada a cobrança de pedágio pela utilização de vias conservadas pelo Poder Público". O Supremo Tribunal Federal (ADI 800 e RE 181.475) pacificou que a cobrança de pedágio é plenamente constitucional e NÃO está condicionada à existência de via alternativa gratuita para o usuário. Quando explorado por concessionária privada, possui natureza jurídica de tarifa/preço público decorrente de contrato de concessão de serviço público.`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. O STF já decidiu reiteradamente que o Estado não é obrigado a fornecer via alternativa gratuita.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Concessionárias privadas cobram tarifa/preço público legítimo pelo serviço público concedido.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. Não existe imunidade para veículos particulares no pagamento de pedágio.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 150, V',
        textSnippet: 'Art. 150, V - estabelecer limitações ao tráfego de pessoas ou bens, por meio de tributos interestaduais ou intermunicipais, ressalvada a cobrança de pedágio pela utilização de vias conservadas pelo Poder Público;'
      }
    ],
    jurisprudence: 'STF, ADI 800/RS e RE 181.475: "A cobrança de pedágio pela utilização de vias conservadas pelo Poder Público não viola o direito de ir e vir, sendo desnecessária a existência de via alternativa gratuita ao usuário."',
    professorTip: 'Pegadinha clássica da OAB: Precisa ter estrada de terra gratuita ao lado da rodovia pedagiada? NÃO! O STF já definiu que a cobrança do pedágio é legítima mesmo sem via alternativa!'
  },

  {
    id: 'faculdade_trib_uniformidade_18',
    exam: 'Exame de Direito Tributário / Faculdade de Direito - Princípios da Federação Fiscal',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Uniformidade Geográfica e Não Discriminação pela Origem/Destino (Arts. 151 e 152)',
    difficulty: 'Médio',
    statement: `O Estado "W", visando incentivar os produtores agrícolas de seu território e proteger a economia local contra a concorrência de Estados vizinhos, editou lei estadual fixando alíquota de ICMS de 7% para laticínios produzidos internamente no Estado "W", e alíquota de 18% para laticínios idênticos oriundos de qualquer outro Estado da Federação.
Analisando a constitucionalidade da norma sob a ótica dos princípios federativos tributários:`,
    options: [
      {
        letter: 'A',
        text: 'A lei é constitucional, pois a autonomia federativa permite aos Estados fixar livremente alíquotas tributárias diferenciadas conforme a origem da mercadoria para proteger seus produtores locais.'
      },
      {
        letter: 'B',
        text: 'A lei é flagrantemente inconstitucional, pois o Artigo 152 da CF/88 consagra o Princípio da Não Discriminação Tributária em Razão da Procedência ou Destino, vedando aos entes estabelecer diferença tributária entre bens e serviços de qualquer natureza em virtude de sua origem.'
      },
      {
        letter: 'C',
        text: 'O princípio da não discriminação aplica-se apenas aos Municípios, possuindo os Estados soberania para criar barreiras alfandegárias internas.'
      },
      {
        letter: 'D',
        text: 'A diferenciação tributária somente seria inválida caso se tratasse de produtos industrializados, sendo permitida para produtos do setor agropecuário primário.'
      }
    ],
    correctAnswer: 'B',
    justification: `O Artigo 152 da Constituição Federal de 1988 positiva o Princípio da Não Discriminação Tributária pela Procedência ou Destino: "É vedado aos Estados, ao Distrito Federal e aos Municípios estabelecer diferença tributária entre bens e serviços, de qualquer natureza, em razão de sua procedência ou destino". Cobrar imposto mais alto apenas porque a mercadoria veio de outro Estado federado cria uma barreira fiscal interna (aduana interna), violando o pacto federativo, a livre concorrência e a unidade do mercado nacional.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. A autonomia dos Estados é limitada expressamente pelo art. 152 da Carta Magna.'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. Aplica-se expressamente a Estados, DF e Municípios.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O art. 152 proíbe a discriminação para bens e serviços "de qualquer natureza", sem distinção entre primários e industriais.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988',
        article: 'Art. 152 e Art. 151, I',
        textSnippet: 'Art. 152. É vedado aos Estados, ao Distrito Federal e aos Municípios estabelecer diferença tributária entre bens e serviços, de qualquer natureza, em razão de sua procedência ou destino.'
      }
    ],
    professorTip: 'Aduana interna é proibida no Brasil! Nenhum Estado ou Município pode cobrar mais imposto sobre o produto do vizinho só porque ele veio de fora. Isso fere mortalmente o Art. 152 da CF!'
  },

  {
    id: 'oab_trib_reforma_neutralidade_19',
    exam: 'Exame de Ordem Unificado (FGV) - 1ª Fase / Reforma Tributária (EC 132/2023)',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Princípio da Neutralidade Tributária e a Nova Ordem Constitucional (EC 132/2023)',
    difficulty: 'Difícil',
    statement: `A Emenda Constitucional nº 132/2023 (Reforma Tributária do Consumo) promoveu profundas modificações estruturais no Sistema Tributário Nacional, introduzindo expressamente o Princípio da Neutralidade Tributária no Artigo 145, § 3º da Carta Magna.
Sobre esse novo princípio constitucional e o modelo do Imposto sobre Bens e Serviços (IBS) e da Contribuição sobre Bens e Serviços (CBS), assinale a afirmativa correta:`,
    options: [
      {
        letter: 'A',
        text: 'A neutralidade tributária determina que a tributação deve interferir o mínimo possível nas decisões econômicas dos agentes de mercado, garantindo a não cumulatividade plena (crédito financeiro amplo) e a tributação no destino para eliminar guerras fiscais e distorções na cadeia produtiva.'
      },
      {
        letter: 'B',
        text: 'O princípio da neutralidade tributária proíbe a concessão de alíquotas reduzidas para quaisquer produtos, inclusive medicamentos e serviços de educação e saúde.'
      },
      {
        letter: 'C',
        text: 'Com a EC 132/2023, o IBS e a CBS passam a adotar o princípio da origem, arrecadando os tributos exclusivamente no local onde o bem ou serviço foi produzido.'
      },
      {
        letter: 'D',
        text: 'A neutralidade autoriza que o IBS substitua apenas tributos federais, mantendo o ICMS e o ISS em vigor permanente de forma cumulativa.'
      }
    ],
    correctAnswer: 'A',
    justification: `A EC 132/2023 inseriu o § 3º no Art. 145 da CF: "O Sistema Tributário Nacional observará os princípios da simplicidade, da transparência, da justiça tributária, da cooperação e da NEUTRALIDADE". O princípio da neutralidade busca garantir que as decisões de investimento, consumo e localização empresarial sejam pautadas pela eficiência econômica e mercado livre, e não por incentivos fiscais artificiais ou distorções tributárias. Isso é materializado pela não cumulatividade ampla do IBS/CBS (todo tributo pago na etapa anterior gera crédito) e pela adoção do princípio do DESTINO (o tributo pertence ao local onde ocorre o consumo).`,
    whyWrong: [
      {
        letter: 'B',
        explanation: 'Incorreta. A própria EC 132/2023 previu regimes diferenciados com alíquotas reduzidas (ex.: saúde, educação, cesta básica).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. A reforma consagrou o princípio do DESTINO (consumidor), extinguindo o princípio da origem.'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O IBS substitui o ICMS estadual e o ISS municipal; a CBS substitui o PIS e a COFINS federais.'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988 (Redação dada pela EC 132/2023)',
        article: 'Art. 145, § 3º e Art. 156-A',
        textSnippet: 'Art. 145, § 3º O Sistema Tributário Nacional observará os princípios da simplicidade, da transparência, da justiça tributária, da cooperação e da defesa do meio ambiente e da neutralidade.'
      }
    ],
    professorTip: 'Tópico QUENTÍSSIMO na OAB pós-reforma: Neutralidade Tributária significa que o imposto não deve distorcer a concorrência nem o mercado! O IBS e a CBS são IVA dual, não cumulativos, tributados no DESTINO.'
  },

  {
    id: 'faculdade_trib_reforma_seletivo_20',
    exam: 'Exame de Direito Tributário / Faculdade de Direito - Reforma Tributária e Extrafiscalidade',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Tributário',
    topic: 'Imposto Seletivo (Art. 153, VIII da CF - EC 132/2023) e Finalidade Extrafiscal',
    difficulty: 'Médio',
    statement: `A Emenda Constitucional nº 132/2023 instituiu o Imposto Seletivo (conhecido doutrinariamente como "Sin Tax" ou imposto sobre o pecado), atribuindo à União Federal a competência para instituir imposto sobre a produção, extração, comercialização ou importação de bens e serviços prejudiciais à saúde ou ao meio ambiente (Art. 153, VIII da CF/88).
Sobre a fisionomia jurídica e as regras constitucionais aplicáveis ao novo Imposto Seletivo:`,
    options: [
      {
        letter: 'A',
        text: 'O Imposto Seletivo possui natureza puramente fiscal e arrecadatória, devendo incidir sobre todos os bens e serviços de consumo de massa, inclusive energia elétrica e telecomunicações.'
      },
      {
        letter: 'B',
        text: 'O Imposto Seletivo possui natureza eminentemente extrafiscal (desestímulo ao consumo nocivo), integrará a base de cálculo do IBS e da CBS, não incidirá sobre exportações e sua alíquota poderá ser fixada em valor específico por unidade de medida ou ad valorem.'
      },
      {
        letter: 'C',
        text: 'O Imposto Seletivo é de competência concorrente de Estados e Municípios, podendo cada prefeito instituir alíquotas seletivas municipais.'
      },
      {
        letter: 'D',
        text: 'O Imposto Seletivo é imune ao princípio da legalidade estrita, podendo o Presidente da República criar novos fatos geradores tributáveis mediante portaria ministerial.'
      }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do Art. 153, VIII e § 6º da CF/88 (inserido pela EC 132/2023), o Imposto Seletivo tem finalidade extrafiscal clara: onerar bens e serviços nocivos à saúde (cigarros, bebidas alcoólicas, bebidas açucaradas) ou ao meio ambiente (extração de minérios e petróleo). O texto constitucional expressamente determina que: (1) não incidirá sobre as exportações nem sobre operações com energia elétrica e telecomunicações; (2) integrará a base de cálculo do IBS e da CBS; (3) poderá ter alíquotas ad valorem ou específicas; e (4) suas alíquotas poderão ser alteradas pelo Poder Executivo nas condições e limites fixados em Lei Complementar.`,
    whyWrong: [
      {
        letter: 'A',
        explanation: 'Incorreta. Energia elétrica e telecomunicações são expressamente IMUNES ao Imposto Seletivo (CF, art. 153, § 6º, VI).'
      },
      {
        letter: 'C',
        explanation: 'Incorreta. O Imposto Seletivo é de competência EXCLUSIVA da União (art. 153, VIII).'
      },
      {
        letter: 'D',
        explanation: 'Incorreta. O imposto exige Lei Complementar federal para sua instituição (art. 153, § 6º).'
      }
    ],
    statuteReferences: [
      {
        code: 'Constituição Federal de 1988 (Redação da EC 132/2023)',
        article: 'Art. 153, VIII e § 6º',
        textSnippet: 'Art. 153. Compete à União instituir impostos sobre: (...) VIII - produção, extração, comercialização ou importação de bens e serviços prejudiciais à saúde ou ao meio ambiente, nos termos de lei complementar.'
      }
    ],
    professorTip: 'Ponto chave da Reforma para exames de Direito: O Imposto Seletivo (Art. 153, VIII) NÃO incide sobre exportações e NÃO incide sobre energia elétrica e telecomunicações! Ele tem finalidade extrafiscal para desestimular produtos nocivos à saúde ou meio ambiente.'
  }
];
