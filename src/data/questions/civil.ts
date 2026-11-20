import { LegalQuestion } from '../../types';

export const CIVIL_QUESTIONS: LegalQuestion[] = [
  {
    id: 'tjsp_civil_06',
    exam: 'Concurso da Magistratura Estadual - TJSP / VUNESP',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Prescrição e Decadência / Regras Gerais',
    difficulty: 'Difícil',
    statement: `João ajuizou ação de cobrança em face de seu irmão Pedro, fundada em dívida líquida constante de instrumento particular de confissão de dívida vencida há 6 anos, sem que nenhuma causa interruptiva ou suspensiva tivesse ocorrido. Pedro apresentou contestação, porém seu patrono não arguiu a prejudicial de prescrição. O juiz de primeira instância verificou os prazos e documentos constantes dos autos.
Consoante o Código Civil (Lei nº 10.406/2002) e o CPC/2015, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O juiz pode pronunciar a prescrição de ofício, desde que ouça previamente as partes em observância ao princípio da não surpresa.' },
      { letter: 'B', text: 'A prescrição somente pode ser conhecida se expressamente alegada pela parte a quem aproveita.' },
      { letter: 'C', text: 'O prazo prescricional para cobrança de dívida líquida constante de instrumento particular é de 10 anos.' },
      { letter: 'D', text: 'A decadência legal não pode ser conhecida de ofício pelo magistrado.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 332, § 1º e art. 487, II do CPC/2015, combinados com o art. 206, § 5º, I do Código Civil, estabelecem que o prazo prescricional para cobrança de dívidas líquidas constantes de instrumento particular é de 5 anos. Desde a Lei 11.280/2006 e consolidado no CPC/2015 (arts. 9º, 10 e 487, parágrafo único), o juiz pode decretar a prescrição de ofício, mas é OBRIGATÓRIA a prévia oitiva das partes (vedação à decisão surpresa).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O juiz pode reconhecer a prescrição de ofício (Art. 487, II do CPC).' },
      { letter: 'C', explanation: 'Incorreta. O prazo para instrumento particular líquido é de 5 anos (Art. 206, § 5º, I do CC).' },
      { letter: 'D', explanation: 'Incorreta. A decadência fixada em lei DEVE ser conhecida de ofício pelo juiz (Art. 210 do CC).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 206, § 5º, I', textSnippet: 'Prescreve: Em 5 anos: I - a pretensão de cobrança de dívidas líquidas constantes de instrumento público ou particular;' },
      { code: 'Código de Processo Civil', article: 'Art. 10 e Art. 487', textSnippet: 'O juiz não pode decidir, em grau algum de jurisdição, com base em fundamento a respeito do qual não se tenha dado às partes oportunidade de se manifestar.' }
    ],
    professorTip: 'Lembre-se: O juiz PODE reconhecer prescrição de ofício, MAS NÃO PODE dar decisão surpresa! Tem que intimar as partes antes para se manifestarem (Art. 10 do CPC)!'
  },
  {
    id: 'oab38_civil_02',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Direito das Sucessões - Sucessão do Companheiro vs Cônjuge (Tema 498 e 809 STF)',
    difficulty: 'Médio',
    statement: `Mariana viveu em união estável contínua e pública com Cláudio durante 12 anos, sob o regime da comunhão parcial de bens, até a data do falecimento dele em 2023. O de cujus deixou dois filhos havidos de relacionamento anterior e patrimônio composto exclusivamente por bens particulares adquiridos antes do início da convivência marital.
À luz do entendimento do Supremo Tribunal Federal (Temas 498 e 809 de Repercussão Geral):`,
    options: [
      { letter: 'A', text: 'É inconstitucional a distinção de regimes sucessórios entre cônjuges e companheiros, aplicando-se ao companheiro o regramento do art. 1.829 do Código Civil.' },
      { letter: 'B', text: 'O companheiro sobrevivo herda apenas sobre os bens adquiridos onerosamente na vigência da união estável conforme o art. 1.790 do CC.' },
      { letter: 'C', text: 'A união estável não confere qualquer direito hereditário se existirem descendentes exclusivos do falecido.' },
      { letter: 'D', text: 'O companheiro sobrevivente é meeiro necessário de todos os bens particulares sem direito à herança.' }
    ],
    correctAnswer: 'A',
    justification: `O STF, no julgamento conjunto dos REs 646.721 e 878.694 (Temas 498 e 809 de Repercussão Geral), declarou a inconstitucionalidade do art. 1.790 do Código Civil por violar o princípio da isonomia familiar. Fixou-se a tese: no sistema constitucional vigente, é inconstitucional a diferenciação de regime sucessório entre cônjuges e companheiros, devendo ser aplicado em ambos os casos o regime do art. 1.829 do CC/2002.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O art. 1.790 do CC foi declarado inconstitucional pelo STF.' },
      { letter: 'C', explanation: 'Incorreta. O companheiro concorre com os descendentes nos termos do art. 1.829, I do CC.' },
      { letter: 'D', explanation: 'Incorreta. Na comunhão parcial, o companheiro não tem meação sobre bens particulares, mas concorre na condição de HERDEIRO.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.829, I', textSnippet: 'A sucessão legítima defere-se na ordem seguinte: I - aos descendentes, em concorrência com o cônjuge sobrevivente...' }
    ],
    jurisprudence: 'STF, RE 878.694/MG (Tema 809): É inconstitucional a distinção de regimes sucessórios entre cônjuges e companheiros prevista no art. 1.790 do CC/2002, devendo ser aplicado, em ambos os casos, o art. 1.829 do CC/2002.',
    professorTip: 'O art. 1.790 do Código Civil FOI EXTIRPADO pelo STF! Para a herança, União Estável = Casamento (aplica o art. 1.829 do CC para os dois)!'
  },
  {
    id: 'oab39_civil_03',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Direitos Reais - Usucapião Especial Urbana Pro Moradia',
    difficulty: 'Fácil',
    statement: `Carlos possui, como sua, área urbana de 180 metros quadrados há 5 anos ininterruptos e sem oposição de quem quer que seja, utilizando-a para sua moradia e de sua família. Carlos não é proprietário de nenhum outro imóvel urbano ou rural e nunca foi beneficiado por qualquer modalidade de usucapião anteriormente. O titular do registro imobiliário ajuizou ação reivindicatória.
Conforme as disposições do Art. 183 da CF/88 e Art. 1.240 do Código Civil:`,
    options: [
      { letter: 'A', text: 'Carlos adquiriu a propriedade por usucapião especial urbana (pro moradia), podendo alegá-la em defesa na ação reivindicatória.' },
      { letter: 'B', text: 'Carlos necessitaria de posse contínua de no mínimo 10 anos com justo título e boa-fé para usucapir o imóvel.' },
      { letter: 'C', text: 'A usucapião constitucional urbana exige justo título transcrito em cartório imobiliário.' },
      { letter: 'D', text: 'Apenas a usucapião extraordinária de 15 anos dispensa a demonstração de justo título.' }
    ],
    correctAnswer: 'A',
    justification: `A usucapião especial urbana (constitucional ou pro moradia - Art. 183 da CF e Art. 1.240 do CC) exige: área urbana de até 250 m², posse mansa e pacífica de 5 anos, utilização ininterrupta para moradia própria ou da família, e o possuidor não ser proprietário de outro imóvel urbano ou rural. Não exige justo título nem boa-fé formal. Pode ser arguida em matéria de defesa (Súmula 237 do STF).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Na usucapião urbana especial o prazo é de apenas 5 anos.' },
      { letter: 'C', explanation: 'Incorreta. A modalidade especial urbana pro moradia NÃO exige justo título.' },
      { letter: 'D', explanation: 'Incorreta. Tanto a extraordinária (15 anos) quanto a especial urbana/rural (5 anos) dispensam justo título.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.240', textSnippet: 'Aquele que possuir, como sua, área urbana de até duzentos e cinquenta metros quadrados, por cinco anos ininterruptamente e sem oposição, utilizando-a para sua moradia ou de sua família, adquirir-lhe-á o domínio, desde que não seja proprietário de outro imóvel urbano ou rural.' }
    ],
    jurisprudence: 'Súmula 237 do STF: O usucapião pode ser argüido em defesa.',
    professorTip: 'Requisitos da Usucapião Especial Urbana: Até 250m² + 5 anos de posse + para MORADIA + não ter outro imóvel. Sem justo título e sem frescura!'
  },
  {
    id: 'oab37_civil_04',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Direito das Obrigações - Teoria do Adimplemento Substancial',
    difficulty: 'Difícil',
    statement: `Empresa comprou maquinário industrial em 60 parcelas mensais de R$ 10.000,00, com reserva de domínio. A compradora pagou com pontualidade 58 parcelas e, por motivos de crise setorial, deixou de adimplir as 2 últimas parcelas restantes. O vendedor recusou renegociação e ajuizou de plano ação de resolução contratual cumulada com reintegração de posse para retomar o maquinário.
À luz da doutrina e da jurisprudência consolidada do Superior Tribunal de Justiça (STJ) sobre a boa-fé objetiva:`,
    options: [
      { letter: 'A', text: 'Aplica-se a teoria do adimplemento substancial (substantial performance), vedando-se a rescisão do contrato e preservando o negócio, restando ao credor cobrar o saldo devedor pelas vias executivas/ordinárias.' },
      { letter: 'B', text: 'O credor tem direito potestativo absoluto de extinguir o negócio diante de qualquer mora de parcela, independentemente do percentual quitado.' },
      { letter: 'C', text: 'A inadimplência de qualquer parcela acarreta perda integral de tudo o que foi pago a título de indenização punitiva.' },
      { letter: 'D', text: 'O adimplemento substancial extingue a dívida restante do comprador, desonerando-o do saldo devedor.' }
    ],
    correctAnswer: 'A',
    justification: `Com esteio no princípio da boa-fé objetiva (art. 422 do CC) e na função social do contrato (art. 421 do CC), o STJ aplica a teoria do adimplemento substancial para impedir a rescisão do contrato e a perda do bem quando a prestação foi quase integralmente cumprida (adimplemento em torno de 95% a 98%). O credor não fica prejudicado, pois mantém intacto o direito de cobrar o débito restante pelas vias de execução de quantia certa.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O direito de resolução é limitado pela boa-fé objetiva e pela vedação ao abuso de direito (Art. 187 do CC).' },
      { letter: 'C', explanation: 'Incorreta. A perda das parcelas pagas configura enriquecimento ilícito expressamente vedado pelo art. 884 do CC.' },
      { letter: 'D', explanation: 'Incorreta. O adimplemento substancial NÃO perdoa a dívida remanescente; apenas impede a rescisão do contrato.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 422', textSnippet: 'Os contratantes são obrigados a guardar, assim na conclusão do contrato, como em sua execução, os princípios de probidade e a boa-fé.' }
    ],
    jurisprudence: 'STJ, REsp 1.581.505/SC: A teoria do adimplemento substancial atua como instrumento de moderação das consequências resolutórias, preservando o vínculo quando a prestação faltante for de escassa relevância.',
    professorTip: 'O Adimplemento Substancial NÃO perdoa a dívida! Ele apenas impede que o credor dê uma de "drástico" e rescinda o contrato levando o bem embora. O credor tem que cobrar o saldo na justiça!'
  },
  {
    id: 'oab40_civil_05',
    exam: 'XL Exame de Ordem Unificado (OAB 40) - FGV / 2024',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direito de Família - Guarda Compartilhada e Regra Geral',
    difficulty: 'Fácil',
    statement: `Rodrigo e Vanessa se divorciaram litigiosamente e possuem um filho menor de 6 anos de idade. Vanessa requer a guarda unilateral exclusiva, alegando que o ex-casal não mantém uma convivência harmoniosa e que há constantes divergências de opinião entre eles. Nenhum dos genitores apresenta inaptidão para o exercício do poder familiar.
Consoante o Art. 1.584, § 2º do Código Civil e a jurisprudência do STJ:`,
    options: [
      { letter: 'A', text: 'A guarda compartilhada é a regra geral no ordenamento brasileiro, sendo obrigatória mesmo em havendo desavenças entre os pais, salvo se um deles declarar expressamente que não deseja a guarda ou for inapto ao poder familiar.' },
      { letter: 'B', text: 'A ausência de harmonia e o litígio entre os genitores autorizam a imposição imediata da guarda unilateral em favor da mãe.' },
      { letter: 'C', text: 'A guarda compartilhada pressupõe necessariamente que a criança resida metade da semana na casa de cada genitor (custódia física alternada obrigatória).' },
      { letter: 'D', text: 'O juiz só pode determinar a guarda compartilhada quando houver consenso amigável entre as partes em audiência prévia.' }
    ],
    correctAnswer: 'A',
    justification: `A Lei 13.058/2014 estabeleceu que a guarda compartilhada é a REGRA GERAL (Art. 1.584, § 2º do CC). A jurisprudência consolidada da 2ª Seção do STJ pacificou que a desavença, beligerância ou falta de harmonia entre os pais não obsta a fixação da guarda compartilhada. Somente não se aplica a guarda compartilhada se um dos pais declarar ao magistrado que não a deseja ou se um deles estiver incapacitado de exercer o poder familiar.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme o STJ, a mera animosidade dos pais não afasta a regra da guarda compartilhada.' },
      { letter: 'C', explanation: 'Incorreta. Guarda compartilhada diz respeito à tomada conjunta de decisões na vida do menor, não se confundindo com residência alternada.' },
      { letter: 'D', explanation: 'Incorreta. O juiz pode e deve impor a guarda compartilhada mesmo de ofício e em processo litigioso.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.584, § 2º', textSnippet: 'Quando não houver acordo entre a mãe e o pai quanto à guarda do filho, encontrando-se ambos os genitores aptos a exercer o poder familiar, será aplicada a guarda compartilhada, salvo se um dos genitores declarar ao magistrado que não deseja a guarda do menor.' }
    ],
    jurisprudence: 'STJ, REsp 1.626.495/PR: A guarda compartilhada é a regra e deve ser estabelecida mesmo em caso de divergência entre os pais, prioritariamente resguardando o melhor interesse da criança.',
    professorTip: 'Cai muito: Briga entre pai e mãe NÃO impede a guarda compartilhada! Guarda compartilhada é a regra do art. 1.584, § 2º do CC.'
  },
  {
    id: 'oab38_civil_06',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Direito das Sucessões - Concorrência Sucessória do Cônjuge e Companheiro',
    difficulty: 'Difícil',
    statement: `Lucas faleceu em 2023, deixando patrimônio avaliado em R$ 1.200.000,00, composto por R$ 600.000,00 de bens adquiridos antes do casamento (bens particulares) e R$ 600.000,00 de bens adquiridos a título oneroso na constância da união. Lucas era casado com Beatriz sob o regime da Comunhão Parcial de Bens e deixou dois filhos vivos concebidos com a própria Beatriz. Não deixou testamento.
De acordo com o Código Civil brasileiro e o entendimento fixado pelo Superior Tribunal de Justiça (Segunda Seção):`,
    options: [
      { letter: 'A', text: 'Beatriz tem direito à meação sobre os bens comuns (R$ 300.000,00) e concorre como herdeira com os descendentes exclusivamente sobre os bens particulares deixados pelo autor da herança.' },
      { letter: 'B', text: 'Beatriz concorre com os descendentes sobre a integralidade de todo o patrimônio deixado por Lucas, independentemente da meação.' },
      { letter: 'C', text: 'Beatriz é apenas meeira dos bens comuns, não concorrendo em nenhuma hipótese com os descendentes no regime de comunhão parcial.' },
      { letter: 'D', text: 'Beatriz herda a totalidade dos bens comuns e nada recebe quanto aos bens particulares.' }
    ],
    correctAnswer: 'A',
    justification: `No regime da comunhão parcial de bens, o cônjuge sobrevivente é meeiro dos bens comuns (recebe 50% dos bens aquestos por direito de meação, e não de herança) e concorre como HERDEIRO com os descendentes EXCLUSIVAMENTE sobre os BENS PARTICULARES deixados pelo falecido (Art. 1.829, I do CC e tese uniformizada da Segunda Seção do STJ no REsp 1.368.123/SP).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme a pacífica tese do STJ, não há concorrência sucessória sobre os bens comuns quando há meação, evitando bis in idem protetivo.' },
      { letter: 'C', explanation: 'Incorreta. Sobre os bens particulares, o cônjuge concorre obrigatoriamente com os descendentes.' },
      { letter: 'D', explanation: 'Incorreta. Os bens comuns são herdados pelos filhos (a viúva fica apenas com a sua meação pré-existente).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.829, I', textSnippet: 'A sucessão legítima defere-se na ordem seguinte: I - aos descendentes, em concorrência com o cônjuge sobrevivente, salvo se casado este com o falecido no regime da comunhão universal, ou no da separação obrigatória de bens; ou se, no regime da comunhão parcial, o autor da herança não houver deixado bens particulares;' }
    ],
    jurisprudence: 'STJ, REsp 1.368.123/SP: No regime da comunhão parcial de bens, o cônjuge sobrevivo concorre com os descendentes apenas quanto aos bens particulares do de cujus.',
    professorTip: 'Regra de Ouro da Sucessão na Comunhão Parcial: "Onde o cônjuge meia, ele não herda; onde o cônjuge não meia (bens particulares), ele herda em concorrência com os filhos!"'
  },
  {
    id: 'oab37_civil_07',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Direitos Reais - Usucapião Especial Urbana Pro Misero',
    difficulty: 'Médio',
    statement: `Carlos possui a posse mansa, pacífica, contínua e sem oposição de um terreno urbano de 220 m² com uma pequena casa construída, utilizando-o para sua moradia e de sua família há 5 anos ininterruptos. Carlos não é proprietário de nenhum outro imóvel urbano ou rural e nunca foi beneficiado anteriormente por declaração de usucapião.
À luz da Constituição Federal de 1988 (art. 183) e do Código Civil (art. 1.240), Carlos tem direito à aquisição da propriedade pela:`,
    options: [
      { letter: 'A', text: 'Usucapião especial urbana (ou pro misero), sendo inexigível justo título ou boa-fé.' },
      { letter: 'B', text: 'Usucapião ordinária, sendo indispensável a apresentação de escritura pública ou justo título idôneo.' },
      { letter: 'C', text: 'Usucapião extraordinária, sendo exigido o decurso do prazo mínimo de 15 anos de posse contínua.' },
      { letter: 'D', text: 'Nenhuma espécie de usucapião, pois imóveis urbanos exigem área mínima de 250 m² para reconhecimento do instituto.' }
    ],
    correctAnswer: 'A',
    justification: `A usucapião especial urbana (CF/88, art. 183 e CC, art. 1.240) exige: imóvel urbano de até 250 m², posse mansa e ininterrupta de 5 anos, utilizado para moradia própria ou da família, não ser proprietário de outro imóvel urbano ou rural e não ter sido beneficiado anteriormente. Nessa modalidade, a lei NÃO exige justo título nem boa-fé (são presumidos pela função social da moradia).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Usucapião ordinária exige 10 anos de posse (ou 5 anos com aquisição onerosa cancelada) e justo título e boa-fé.' },
      { letter: 'C', explanation: 'Incorreta. Usucapião extraordinária tem prazo geral de 15 anos (ou 10 com moradia).' },
      { letter: 'D', explanation: 'Incorreta. O limite de 250 m² é MÁXIMO, e o imóvel de Carlos tem 220 m², perfeitamente apto.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.240', textSnippet: 'Aquele que possuir, como sua, área urbana de até duzentos e cinquenta metros quadrados, por cinco anos ininterruptamente e sem oposição, utilizando-a para sua moradia ou de sua família, adquirir-lhe-á o domínio, desde que não seja proprietário de outro imóvel urbano ou rural.' }
    ],
    professorTip: 'Requisitos da Usucapião Especial Urbana: 5 anos + até 250m² + moradia + não ter outro imóvel + 1 única vez na vida! Não precisa de justo título!'
  },
  {
    id: 'oab38_civil_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Contratos em Espécie - Evicção e Direitos do Evicto (Art. 447 a 457 CC)',
    difficulty: 'Médio',
    statement: `Juliana adquiriu de Marcos, mediante contrato oneroso de compra e venda com pagamento à vista de R$ 80.000,00, um automóvel seminovo. Dois meses após a tradição, o veículo foi apreendido por força de decisão judicial transitada em julgado proferida em ação reivindicatória ajuizada por terceiro (legítimo proprietário que havia sido vítima de furto anterior à venda). O contrato firmado entre Juliana e Marcos continha cláusula expressa excluindo a garantia da evicção, mas Marcos não informou a Juliana sobre o risco específico da demanda reivindicatória pendente.
À luz das normas que disciplinam a evicção no Código Civil:`,
    options: [
      {
        letter: 'A',
        text: 'Não obstante a cláusula que exclui a garantia contra a evicção, se Juliana não foi informada do risco da evicção, ou se, informada, não o assumiu expressamente, tem direito de recobrar o preço que pagou pelo bem (Art. 449 CC).'
      },
      {
        letter: 'B',
        text: 'Juliana nada pode pleitear de Marcos, pois a cláusula de não garantia contra evicção exime o alienante de qualquer devolução em contratos onerosos.'
      },
      {
        letter: 'C',
        text: 'A evicção só se aplica a contratos gratuitos como a doação pura.'
      },
      {
        letter: 'D',
        text: 'Juliana deve ajuizar queixa-crime contra o terceiro reivindicante para anular a ordem de apreensão.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 449 do Código Civil prevê uma das regras mais cobradas pela FGV: 'Não obstante a cláusula que exclui a garantia contra a evicção, se esta se der, tem direito o evicto a recobrar o preço que pagou pela coisa evicta, se não soube do risco da evicção, ou, dele informado, não o assumiu'. Ou seja, para que o alienante fique 100% isento inclusive de devolver o preço da coisa, são necessários dois requisitos cumulativos: cláusula expressa de exclusão da garantia E assunção expressa do risco específico pelo adquirente. Como Juliana não assumiu o risco específico, faz jus à restituição do preço pago.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme o Art. 449 do CC, a simples cláusula de exclusão geral não exonera o alienante de devolver o preço pago.' },
      { letter: 'C', explanation: 'Incorreta. A evicção é garantia típica dos contratos ONEROSOS (Art. 447 CC).' },
      { letter: 'D', explanation: 'Incorreta. O terceiro é o legítimo proprietário reconhecido judicialmente; o direito de regresso da adquirente dá-se em face do alienante.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 449 e Art. 447', textSnippet: 'Art. 447. Nos contratos onerosos, o alienante responde pela evicção. Subsiste esta garantia ainda que a aquisição se tenha realizado em hasta pública. Art. 449. Não obstante a cláusula que exclui a garantia contra a evicção, se esta se der, tem direito o evicto a recobrar o preço que pagou pela coisa evicta, se não soube do risco da evicção, ou, dele informado, não o assumiu.' }
    ],
    jurisprudence: 'STJ, REsp 1.332.312/MS: Para que a cláusula de exoneração da evicção tenha eficácia plena de afastar a restituição do preço, exige-se a ciência prévia e a assunção explícita do risco específico da perda pelo adquirente.',
    professorTip: 'Cuidado com a Pegadinha da Evicção: Cláusula "sem garantia de evicção" tira a indenização por perdas e danos, MAS NÃO TIRA a devolução do dinheiro pago (preço), a menos que o comprador tenha dito expressamente: "Sei do risco e assumo o risco" (Art. 449 CC)!'
  },
  {
    id: 'faculdade_civil_09',
    exam: 'Exame de Direito das Sucessões e Família - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Concorrência Sucessória do Cônjuge Sobrevivente (Art. 1.829, I CC)',
    difficulty: 'Difícil',
    statement: `Eduardo faleceu deixando dois filhos de um relacionamento anterior e sua viúva, Beatriz, com quem era casado sob o regime da comunhão parcial de bens. Ao tempo do falecimento, o patrimônio de Eduardo era composto por: (1) um imóvel residencial de R$ 600.000,00 adquirido onerosamente na constância do casamento com Beatriz; e (2) um apartamento de R$ 400.000,00 que Eduardo herdara de seu pai antes do casamento (bem particular).
À luz do Art. 1.829, I do Código Civil e da jurisprudência consolidada da 2ª Seção do STJ (REsp 1.368.123/SP):`,
    options: [
      {
        letter: 'A',
        text: 'Beatriz tem direito à meação sobre o imóvel comum (R$ 300.000,00) sem concorrer como herdeira neste bem, e concorre como herdeira com os dois enteados apenas sobre o bem particular (o apartamento de R$ 400.000,00).'
      },
      {
        letter: 'B',
        text: 'Beatriz concorre como herdeira sobre a totalidade do patrimônio, somando meação e herança sobre os bens comuns e particulares indistintamente.'
      },
      {
        letter: 'C',
        text: 'O cônjuge casado na comunhão parcial nunca herda em concorrência com descendentes sob qualquer hipótese.'
      },
      {
        letter: 'D',
        text: 'Beatriz perde a meação por não ser mãe biológica de todos os filhos de Eduardo.'
      }
    ],
    correctAnswer: 'A',
    justification: `A 2ª Seção do Superior Tribunal de Justiça (REsp 1.368.123/SP, Rel. Min. Sidnei Beneti) pacificou a interpretação do Art. 1.829, I do Código Civil quanto à comunhão parcial de bens: onde há meação, não há concorrência sucessória; onde não há meação (bens particulares), há concorrência sucessória. Portanto: sobre o patrimônio comum (adquirido na constância), o viúvo é meeiro de metade (R$ 300.000,00) e os filhos herdam a outra metade; sobre os bens particulares (apartamento de R$ 400.000,00 deixado pelo de cujus), a viúva concorre em igualdade de cotas como herdeira com os descendentes.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme a tese pacífica do STJ, não há concorrência sucessória sobre os bens comuns dos quais o cônjuge já seja meeiro.' },
      { letter: 'C', explanation: 'Incorreta. O art. 1.829, I assegura a concorrência se o autor da herança houver deixado bens particulares.' },
      { letter: 'D', explanation: 'Incorreta. A meação decorre do regime matrimonial de bens e independe da filiação dos herdeiros.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.829, I', textSnippet: 'A sucessão legítima defere-se na ordem seguinte: I - aos descendentes, em concorrência com o cônjuge sobrevivente, salvo se casado este com o falecido no regime da comunhão universal, ou no da separação obrigatória de bens; ou se, no regime da comunhão parcial, o autor da herança não houver deixado bens particulares;' }
    ],
    jurisprudence: 'STJ, REsp 1.368.123/SP (2ª Seção): No regime da comunhão parcial de bens, o cônjuge sobrevivente concorre com os descendentes apenas sobre os bens particulares do de cujus, não havendo concorrência sobre os bens comuns.',
    professorTip: 'Tese consagrada pelo STJ que despenca em provas: "Onde meia, NÃO herda! Onde NÃO meia, HERDA!" No bem comum do casal: leva 50% de meação e NÃO concorre na outra metade. No bem particular exclusivo do falecido: NÃO tem meação, logo HERDA em concorrência com os filhos!'
  },
  {
    id: 'oab37_civil_10',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Civil',
    topic: 'Responsabilidade Civil Indireta dos Pais por Fatos de Filhos Menores (Art. 932 e 933 CC)',
    difficulty: 'Fácil',
    statement: `Lucas, adolescente de 15 anos de idade, enquanto passeava de bicicleta no condomínio onde reside, desrespeitou as normas internas de velocidade e colidiu violentamente contra o veículo de um morador que se encontrava estacionado, provocando avarias orçadas em R$ 8.000,00. O proprietário do veículo lesado ajuizou ação de indenização contra os pais de Lucas. Em contestação, os genitores alegaram que educaram o filho com zelo exemplar e que não tiveram qualquer culpa ou omissão no momento do acidente (ausência de culpa in vigilando).
À luz das normas que disciplinam a responsabilidade civil no Código Civil brasileiro (Art. 932, I e Art. 933):`,
    options: [
      {
        letter: 'A',
        text: 'Os pais respondem objetivamente pela reparação civil dos atos praticados pelos filhos menores que estiverem sob sua autoridade e em sua companhia, ainda que não haja culpa de sua parte.'
      },
      {
        letter: 'B',
        text: 'Os pais são isentos de qualquer obrigação indenizatória se comprovarem que não estavam presentes no local no exato momento da colisão.'
      },
      {
        letter: 'C',
        text: 'A responsabilidade dos pais é puramente subjetiva, dependendo de prova de dolo ou culpa grave na educação.'
      },
      {
        letter: 'D',
        text: 'Apenas o adolescente pode figurar no polo passivo da ação executiva, respondendo com seus bens futuros após completar 18 anos.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 932, I do Código Civil estabelece que são também responsáveis pela reparação civil: 'os pais, pelos filhos menores que estiverem sob sua autoridade e em sua companhia'. E o Art. 933 do Código Civil consagra expressamente que essas pessoas 'responderão pelos atos praticados pelos terceiros ali referidos, AINDA QUE NÃO HAJA CULPA DE SUA PARTE'. Trata-se de hipótese legal de responsabilidade civil OBJETIVA dos pais pelos danos causados pelos filhos menores.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme o Art. 933 do CC, a ausência de culpa ou de presença física não exclui a responsabilidade objetiva parental.' },
      { letter: 'C', explanation: 'Incorreta. O CC/2002 superou a culpa in vigilando/in educando, transformando a responsabilidade do art. 932 em objetiva pelo art. 933.' },
      { letter: 'D', explanation: 'Incorreta. A responsabilidade primária perante a vítima é dos pais; a responsabilidade do menor do art. 928 é apenas subsidiária e mitigada.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 932, I e Art. 933', textSnippet: 'Art. 932. São também responsáveis pela reparação civil: I - os pais, pelos filhos menores que estiverem sob sua autoridade e em sua companhia... Art. 933. As pessoas indicadas nos incisos I a V do artigo antecedente, ainda que não haja culpa de sua parte, responderão pelos atos praticados pelos terceiros ali referidos.' }
    ],
    jurisprudence: 'STJ, REsp 1.433.566/RS: A responsabilidade civil dos pais pelos atos ilícitos cometidos pelos filhos menores sob sua autoridade é objetiva (independe de culpa), por força do art. 933 do Código Civil.',
    professorTip: 'Evolução histórica fundamental: No Código Civil de 1916 os pais respondiam por culpa in vigilando. No Código Civil de 2002 (Art. 933), a responsabilidade dos pais virou OBJETIVA (não adianta provar que é bom pai ou educou bem, responde mesmo sem culpa)!'
  }
];
