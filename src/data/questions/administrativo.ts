import { LegalQuestion } from '../../types';

export const ADMINISTRATIVO_QUESTIONS: LegalQuestion[] = [
  {
    id: 'cebraspe_adm_07',
    exam: 'Concurso Público - Procuradoria Geral do Estado / FGV',
    examType: 'CONCURSO',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Administrativo',
    topic: 'Atos Administrativos - Atributos e Extinção',
    difficulty: 'Médio',
    statement: `O Prefeito do Município Beta revogou unilateralmente autorização de uso de bem público concedida a particular para funcionamento de banca de jornais e revistas em praça pública, alegando razões supervenientes de interesse público e mobilidade urbana para revitalização da área.
Considerando os princípios do Direito Administrativo e os atributos dos atos administrativos:`,
    options: [
      { letter: 'A', text: 'A autorização de uso é ato administrativo discricionário e precário, passível de revogação a qualquer tempo pela Administração sem direito a indenização.' },
      { letter: 'B', text: 'A autorização de uso constitui direito adquirido irrevogável, cabendo obrigatoriamente ação de desapropriação.' },
      { letter: 'C', text: 'A revogação de ato administrativo gera efeitos retroativos (ex tunc), desfazendo todos os atos pretéritos.' },
      { letter: 'D', text: 'O Poder Judiciário pode revogar o ato administrativo com base em critérios de conveniência e oportunidade.' }
    ],
    correctAnswer: 'A',
    justification: `A autorização de uso de bem público é ato administrativo unilateral, discricionário e marcado pela precariedade. Por ser precário, pode ser revogado a qualquer tempo pela Administração Pública por razões supervenientes de conveniência e oportunidade (mérito administrativo), operando efeitos prospectivos (ex nunc) e sem gerar dever de indenizar o particular.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Atos precários não conferem estabilidade contratual nem direito adquirido contra o interesse público.' },
      { letter: 'C', explanation: 'Incorreta. A revogação opera efeitos prospectivos (ex nunc); a anulação é que tem efeitos retroativos (ex tunc).' },
      { letter: 'D', explanation: 'Incorreta. O Poder Judiciário só pode ANULAR atos administrativos ilegais, nunca REVOGAR com base em mérito/conveniência.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.784/99 (Processo Administrativo)', article: 'Art. 53', textSnippet: 'A Administração deve anular seus próprios atos, quando eivados de vício de legalidade, e pode revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.' }
    ],
    jurisprudence: 'Súmulas 346 e 473 do STF: A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, ou revogá-los, por motivo de conveniência ou oportunidade.',
    professorTip: 'Anulação = Ilegalidade = Efeito Ex Tunc (retroage). Revogação = Conveniência/Oportunidade = Efeito Ex Nunc (não retroage). O Judiciário NUNCA revoga ato alheio!'
  },
  {
    id: 'oab38_adm_02',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Administrativo',
    topic: 'Responsabilidade Civil do Estado e Direito de Regresso',
    difficulty: 'Médio',
    statement: `Um motorista oficial de viatura do Corpo de Bombeiros de determinado Estado, em desvio de rota para resolver assunto particular e dirigindo com excesso de velocidade, colidiu com o automóvel de particular que trafegava regularmente no sinal verde. A vítima pretende acionar a reparação dos danos materiais.
De acordo com o Art. 37, § 6º da CF/88 e a tese de Repercussão Geral do STF (Tema 940):`,
    options: [
      { letter: 'A', text: 'A vítima deve ajuizar a ação indenizatória em face do Estado, sendo vedado o ajuizamento direto ou litisconsórcio passivo contra o agente público causador do dano.' },
      { letter: 'B', text: 'A vítima pode ajuizar ação indenizatória facultativamente e diretamente contra o motorista oficial com base na culpa civil ordinária.' },
      { letter: 'C', text: 'O Estado responde civilmente de forma subjetiva, exigindo que o cidadão comprove o dolo do motorista na petição inicial.' },
      { letter: 'D', text: 'O Estado é isento de responsabilidade, pois o servidor agia em desvio de função para fins privados.' }
    ],
    correctAnswer: 'A',
    justification: `No Tema 940 de Repercussão Geral (RE 1.027.633/SP), o STF fixou a tese de que a ação de responsabilidade civil fundada no art. 37, § 6º, da CF/88 deve ser proposta exclusivamente contra a pessoa jurídica de direito público ou de direito privado prestadora de serviço público. É vedada a propositura da ação diretamente em face do agente público causador do dano, devendo o Poder Público acioná-lo posteriormente em via de regresso (dupla garantia).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Conforme o Tema 940 do STF, não é admitida a propositura direta contra o servidor público.' },
      { letter: 'C', explanation: 'Incorreta. A responsabilidade do Estado pelos atos de seus agentes é OBJETIVA (dispensa dolo ou culpa do servidor perante a vítima).' },
      { letter: 'D', explanation: 'Incorreta. A aparente qualidade de agente público atuando com bem público atrai a responsabilidade do Ente estatal.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 37, § 6º', textSnippet: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.' }
    ],
    jurisprudence: 'STF, RE 1.027.633/SP (Tema 940): A teor do art. 37, § 6º, da CF/88, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a concessionária, sendo parte ilegítima passiva o agente público.',
    professorTip: 'Dupla Garantia (Tema 940 STF): A vítima processa o ESTADO (responsabilidade objetiva). O Estado é quem depois entra em regresso contra o SERVIDOR (se houve dolo ou culpa).'
  },
  {
    id: 'oab39_adm_03',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Administrativo',
    topic: 'Nova Lei de Licitações (Lei 14.133/2021) e Modalidades',
    difficulty: 'Médio',
    statement: `O Município de Delta pretende contratar serviço de engenharia para o desenvolvimento de solução tecnológica inovadora e metodologias construtivas inéditas no país, para solucionar o problema crônico de deslizamento de encostas. A administração não possui a descrição técnica exata do projeto preliminar e necessita dialogar com o mercado para definir as melhores alternativas técnicas antes de receber as propostas finais.
De acordo com a Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021), a modalidade de licitação cabível é:`,
    options: [
      { letter: 'A', text: 'Diálogo Competitivo.' },
      { letter: 'B', text: 'Tomada de Preços.' },
      { letter: 'C', text: 'Convite.' },
      { letter: 'D', text: 'Concurso.' }
    ],
    correctAnswer: 'A',
    justification: `O Diálogo Competitivo é a nova modalidade licitatória introduzida pela Lei nº 14.133/2021 (Art. 6º, XLII e Art. 32), destinada expressamente a contratações que envolvam inovação tecnológica ou técnica, impossibilidade de o órgão definir com precisão as especificações técnicas, ou quando a administração necessita identificar as melhores alternativas antes das propostas. As modalidades Tomada de Preços e Convite foram extintas pela nova lei.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A Tomada de Preços foi extinta do ordenamento pela Lei 14.133/2021.' },
      { letter: 'C', explanation: 'Incorreta. A modalidade Convite também foi extinta pela Nova Lei de Licitações.' },
      { letter: 'D', explanation: 'Incorreta. O Concurso destina-se à escolha de trabalho técnico, científico ou artístico mediante prêmio ou remuneração.' }
    ],
    statuteReferences: [
      { code: 'Lei nº 14.133/2021', article: 'Art. 28 e Art. 32', textSnippet: 'São modalidades de licitação: I - pregão; II - concorrência; III - concurso; IV - leilão; V - diálogo competitivo.' }
    ],
    professorTip: 'Atenção aos novatos: Convite e Tomada de Preços NÃO EXISTEM MAIS na Lei 14.133/21! A nova modalidade estrela é o Diálogo Competitivo para inovação e soluções complexas!'
  },
  {
    id: 'oab36_adm_04',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Administrativo',
    topic: 'Nova Lei de Improbidade Administrativa (Lei 14.230/2021) e Exigência de Dolo',
    difficulty: 'Difícil',
    statement: `Servidor público municipal responsável pela fiscalização de obras aprovou a medição de uma escola sem realizar vistoria in loco presencial com o rigor técnico recomendável, agindo com evidente negligência e imprudência. Constatou-se posterior dano ao erário decorrente de defeitos estruturais na alvenaria. O Ministério Público ajuizou Ação de Improbidade Administrativa com base em dano culposo ao patrimônio público (antigo art. 10 da Lei 8.429/92).
Considerando as alterações introduzidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa:`,
    options: [
      { letter: 'A', text: 'Não configura ato de improbidade administrativa, pois a nova legislação revogou a modalidade culposa, exigindo dolo específico para todos os atos de improbidade.' },
      { letter: 'B', text: 'Configura improbidade culposa grave, aplicando-se suspensão de direitos políticos por até 12 anos.' },
      { letter: 'C', text: 'A culpa grave equipara-se automaticamente ao dolo para fins de condenação por improbidade administrativa.' },
      { letter: 'D', text: 'O mero prejuízo financeiro apurado presume a intenção desonesta do agente público.' }
    ],
    correctAnswer: 'A',
    justification: `Com a vigência da Lei nº 14.230/2021, o ordenamento jurídico brasileiro aboliu a figura do ato de improbidade administrativa culposo. O Art. 1º, §§ 1º, 2º e 3º, e o Art. 10 da LIA passaram a exigir expressamente o DOLO ESPECÍFICO (a vontade consciente de alcançar o resultado ilícito tipificado nos artigos 9º, 10 e 11), não bastando a voluntariedade do agente, a culpa grave ou a inaptidão técnica. O STF confirmou a irretroatividade da nova lei para casos transitados em julgado, mas sua aplicação imediata às ações em curso (Tema 1.199).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Não existe mais improbidade culposa no Direito brasileiro após a reforma da Lei 14.230/2021.' },
      { letter: 'C', explanation: 'Incorreta. O art. 1º, § 2º e § 3º veda expressamente equiparar mera negligência, imprudência ou imperícia a dolo.' },
      { letter: 'D', explanation: 'Incorreta. É vedada a presunção de dolo no novo regime jurídico da probidade.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.429/92 (com redação da Lei 14.230/21)', article: 'Art. 1º, § 1º e § 2º', textSnippet: 'Consideram-se atos de improbidade administrativa as condutas dolosas tipificadas nos arts. 9º, 10 e 11 desta Lei, ressalvados os tipos previstos em leis especiais. § 2º Considera-se dolo a vontade livre e consciente de alcançar o resultado ilícito...' }
    ],
    jurisprudence: 'STF, RE 865.455/SP (Tema 1.199): Todos os atos de improbidade administrativa passam a exigir dolo, não mais subsistindo atos culposos no sistema nacional.',
    professorTip: 'Tatuagem na mente para a OAB: Improbidade culposa MORREU! Hoje qualquer ato de improbidade exige DOLO ESPECÍFICO comprovado cabalmente!'
  },
  {
    id: 'oab37_adm_05',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Administrativo',
    topic: 'Poderes Administrativos - Poder de Polícia e Delegação',
    difficulty: 'Difícil',
    statement: `Empresa pública municipal com personalidade jurídica de direito privado e capital exclusivamente público foi autorizada por lei a fiscalizar o trânsito e aplicar multas a veículos que excederem o limite de velocidade nas vias municipais. Um motorista autuado contestou judicialmente a multa, alegando que o poder de polícia estatal não pode ser exercido por entidade dotada de personalidade jurídica de direito privado.
De acordo com o entendimento vinculante firmado pelo STF no Tema 532 da Repercussão Geral:`,
    options: [
      { letter: 'A', text: 'É constitucional a delegação do poder de polícia para aplicar sanções de trânsito a estatais de capital social majoritariamente público que prestem serviço público exclusivo e não concorrencial.' },
      { letter: 'B', text: 'É inconstitucional qualquer delegação de poder punitivo de polícia a pessoas jurídicas de direito privado em qualquer hipótese.' },
      { letter: 'C', text: 'O poder de polícia só pode ser exercido diretamente por servidores públicos militares ou policiais civis.' },
      { letter: 'D', text: 'Apenas a fase de consentimento e fiscalização pode ser delegada, nunca a aplicação de multas pecuniárias.' }
    ],
    correctAnswer: 'A',
    justification: `O STF, no julgamento do RE 633.782/MG (Tema 532 de Repercussão Geral), superou entendimento restritivo anterior e fixou a tese: É constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da administração pública indireta de capital social majoritariamente público, que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial, inclusive quanto à aplicação de sanções administrativas (multas).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O STF expressamente autorizou a delegação de fiscalização e sanção no Tema 532 para estatais públicas não concorrenciais.' },
      { letter: 'C', explanation: 'Incorreta. Agentes de trânsito e guardas municipais exercem regularmente polícia de trânsito.' },
      { letter: 'D', explanation: 'Incorreta. O STF autorizou inclusive a fase sancionatória (multa de trânsito).' }
    ],
    statuteReferences: [
      { code: 'Código Tributário Nacional', article: 'Art. 78', textSnippet: 'Considera-se poder de polícia atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato...' }
    ],
    jurisprudence: 'STF, RE 633.782/MG (Tema 532): É constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da administração pública indireta...',
    professorTip: 'Evolução histórica: Antes o STJ dizia que a sanção não podia ser delegada. Mas no TEMA 532 o STF autorizou a aplicação de multas de trânsito por estatais não concorrenciais (ex: CET/SP, BHTrans)!'
  },
  {
    id: 'oab38_adm_06',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Administrativo',
    topic: 'Desapropriação e Intervenção do Estado na Propriedade',
    difficulty: 'Médio',
    statement: `O Estado 'X' declarou, por decreto expropriatório, um imóvel rural de propriedade de José como de utilidade pública para a construção de um hospital regional. José não concordou com o valor da indenização oferecido administrativamente e o Estado ajuizou ação de desapropriação. No curso do processo, antes da realização de qualquer obra e antes do pagamento integral do preço, o Estado constatou a inviabilidade financeira do hospital e editou decreto revogando a declaração expropriatória anterior, requerendo a extinção da ação.
Diante da sistemática jurídica da desapropriação e da jurisprudência pacífica do STJ:`,
    options: [
      { letter: 'A', text: 'A desistência da desapropriação é lícita e admissível até o pagamento integral da indenização, desde que o imóvel possa ser devolvido ao expropriado no estado em que se encontrava, respondendo o Estado por eventuais prejuízos causados.' },
      { letter: 'B', text: 'A edição do decreto declaratório inicial torna o ato irretratável, sendo obrigatório prosseguir na compra forçada do bem.' },
      { letter: 'C', text: 'O Estado só poderia desistir da desapropriação se houvesse expressa anuência do proprietário José.' },
      { letter: 'D', text: 'A desistência é impossível a partir da citação do réu na ação judicial de desapropriação.' }
    ],
    correctAnswer: 'A',
    justification: `A jurisprudência pacífica do Superior Tribunal de Justiça (STJ) e do STF estabelece que o Poder Público pode desistir da desapropriação a qualquer momento antes do pagamento integral do preço ou da imutabilidade da afetação pública definitiva, desde que o imóvel possa ser devolvido nas mesmas condições anteriores e o ente indenize eventuais prejuízos causados ao proprietário.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O decreto de desapropriação não gera aquisição imediata da propriedade nem impede a revogação por conveniência pública.' },
      { letter: 'C', explanation: 'Incorreta. A desistência é ato potestativo da Administração Pública e independe do consentimento do expropriado.' },
      { letter: 'D', explanation: 'Incorreta. É cabível mesmo após a citação e a instrução probatória.' }
    ],
    statuteReferences: [
      { code: 'Decreto-Lei nº 3.365/1941', article: 'Art. 10', textSnippet: 'A desapropriação deverá efetivar-se mediante acordo ou intentar-se judicialmente...' }
    ],
    jurisprudence: 'STJ, REsp 1.368.773/MS: É admitida a desistência da desapropriação até o pagamento integral da indenização, desde que o imóvel possa ser restituído no estado em que se achava.',
    professorTip: 'Bizu de Desapropriação: O Estado pode desistir? SIM! Até quando? Até o pagamento final do precatório/indenização, se puder devolver o imóvel inteiro!'
  },
  {
    id: 'oab36_adm_07',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Direito Administrativo',
    topic: 'Serviços Públicos - Concessão e Caducidade vs. Encampação',
    difficulty: 'Médio',
    statement: `Determinada concessionária de transporte público coletivo interestadual passou a descumprir de modo reiterado e grave as cláusulas contratuais de pontualidade, segurança veicular e higiene, gerando inúmeros acidentes e reclamações de passageiros. O Poder Concedente, após instaurar processo administrativo e assegurar ampla defesa e contraditório à concessionária, pretende extinguir unilateralmente o contrato antes do prazo estipulado por inadimplemento contratual culposo da prestadora.
Nos termos da Lei Geral de Concessões (Lei nº 8.987/95), essa modalidade de extinção do contrato de concessão denomina-se:`,
    options: [
      { letter: 'A', text: 'Caducidade.' },
      { letter: 'B', text: 'Encampação.' },
      { letter: 'C', text: 'Rescisão amigável.' },
      { letter: 'D', text: 'Anulação.' }
    ],
    correctAnswer: 'A',
    justification: `A caducidade (art. 38 da Lei nº 8.987/95) é a declaração de extinção unilateral da concessão decretada pelo Poder Concedente em virtude da inexecução total ou parcial do contrato por culpa da concessionária (inadimplemento). Já a encampação (art. 37) é a retomada do serviço por motivos de interesse público durante o prazo da concessão, exigindo lei autorizativa específica e indenização prévia.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Encampação ocorre por razões de conveniência e interesse público (sem culpa da concessionária), exigindo lei prévia e indenização.' },
      { letter: 'C', explanation: 'Incorreta. Houve inadimplemento culposo unilateral e decretação pelo poder público, não acordo amigável.' },
      { letter: 'D', explanation: 'Incorreta. Anulação decorre de ilegalidade originária na licitação ou contratação.' }
    ],
    statuteReferences: [
      { code: 'Lei nº 8.987/95', article: 'Art. 38', textSnippet: 'A inexecução total ou parcial do contrato acarretará, a critério do poder concedente, a declaração de caducidade da concessão ou a aplicação das sanções contratuais...' }
    ],
    professorTip: 'Mnemônico supremo das concessões da FGV: Culpa da Concessionária = CADUCIDADE (começa com C de Culpa!). Interesse do Estado = ENCAMPação (E de Estado)!'
  },
  {
    id: 'oab38_adm_08',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Administrativo',
    topic: 'Nova Lei de Licitações (Lei 14.133/21) e Modalidades Licitatórias',
    difficulty: 'Fácil',
    statement: `Um Município necessita contratar o desenvolvimento de uma solução tecnológica inovadora e complexa para gestão integrada de tráfego inteligente com inteligência artificial, inexistindo no mercado uma solução padrão pré-formatada. A Administração precisa dialogar com os particulares previamente qualificados para definir as alternativas técnicas mais vantajosas antes da apresentação das propostas finais.
Sob a égide da Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021), a modalidade de licitação adequada para essa contratação inovadora é o:`,
    options: [
      {
        letter: 'A',
        text: 'Diálogo Competitivo.'
      },
      {
        letter: 'B',
        text: 'Tomada de Preços.'
      },
      {
        letter: 'C',
        text: 'Convite Especial.'
      },
      {
        letter: 'D',
        text: 'Pregão Eletrônico por Menor Preço.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 28 da Nova Lei de Licitações (Lei 14.133/2021) elenca as 5 modalidades licitatórias vigentes: I - Pregão; II - Concorrência; III - Concurso; IV - Leilão; V - Diálogo Competitivo. O Diálogo Competitivo (definido no Art. 6º, XLII e Art. 32) é a nova modalidade introduzida para contratações que envolvam inovação tecnológica ou técnica, impossibilidade de o órgão definir as especificações técnicas com precisão suficiente ou necessidade de adaptar soluções disponíveis no mercado mediante diálogo prévio com licitantes selecionados. Registre-se que Tomada de Preços e Convite foram EXTINTOS pelo novo diploma.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A Tomada de Preços foi formalmente extinta pela Lei 14.133/21.' },
      { letter: 'C', explanation: 'Incorreta. O Convite foi formalmente extinto pela Lei 14.133/21.' },
      { letter: 'D', explanation: 'Incorreta. O pregão destina-se obrigatoriamente à aquisição de bens e serviços comuns (art. 6º, XLI).' }
    ],
    statuteReferences: [
      { code: 'Lei 14.133/2021 (Nova Lei de Licitações)', article: 'Art. 28 e Art. 32', textSnippet: 'Art. 28. São modalidades de licitação: I - pregão; II - concorrência; III - concurso; IV - leilão; V - diálogo competitivo. Art. 32. A modalidade diálogo competitivo é restrita a contratações em que a Administração: I - vise a contratar objeto que envolva as seguintes condições: a) inovação tecnológica ou técnica;' }
    ],
    jurisprudence: 'TCU, Acórdão 2.458/2023-Plenário: O diálogo competitivo representa inovação fundamental da Lei 14.133/21 para objetos complexos que exigem interação dialógica técnica com o mercado.',
    professorTip: 'Decore as modalidades da NOVA LEI DE LICITAÇÕES (Lei 14.133/21): Pregão, Concorrência, Concurso, Leilão e DIÁLOGO COMPETITIVO! Tomada de Preços e Convite MORRERAM! Inovação complexa? Marca DIÁLOGO COMPETITIVO!'
  },
  {
    id: 'faculdade_adm_09',
    exam: 'Exame Semestral de Regime Jurídico Administrativo e Probidade - Faculdade de Direito',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Nova Lei de Improbidade (Lei 14.230/21) e Exigência de Dolo Específico',
    difficulty: 'Médio',
    statement: `Um Secretário Municipal de Saúde, em razão de evidente desorganização burocrática, falta de fiscalização e imperícia técnica de sua equipe, permitiu culposamente o vencimento do prazo de validade de lotes de medicamentos estocados no almoxarifado municipal, gerando prejuízo ao erário de R$ 50.000,00. Ficou cabalmente demonstrado nos autos que o Secretário não agiu com má-fé, não obteve qualquer vantagem indevida para si ou para outrem e não teve a intenção deliberada de causar o dano ou violar a lei.
À luz da Lei de Improbidade Administrativa atualizada pela Lei nº 14.230/2021 e da tese do Tema 1.199 do STF:`,
    options: [
      {
        letter: 'A',
        text: 'Não há ato de improbidade administrativa, pois a Lei 14.230/21 revogou expressamente todas as modalidades culposas de improbidade, exigindo-se dolo específico em todos os tipos legais (arts. 9º, 10 e 11).'
      },
      {
        letter: 'B',
        text: 'O Secretário deve ser condenado por improbidade culposa no art. 10 (dano ao erário), pois a culpa grave continua punível com perda da função pública.'
      },
      {
        letter: 'C',
        text: 'A conduta caracteriza improbidade administrativa presumida com base na culpa in vigilando objetiva.'
      },
      {
        letter: 'D',
        text: 'A improbidade administrativa dispensa dolo ou culpa, aplicando-se a teoria da responsabilidade estritamente objetiva aos agentes políticos.'
      }
    ],
    correctAnswer: 'A',
    justification: `A Lei nº 14.230/2021 promoveu profunda reforma na Lei 8.429/92, revogando expressamente a modalidade culposa do Art. 10 (lesão ao erário) e estipulando no Art. 1º, §§ 1º, 2º e 3º que 'considera-se ato de improbidade a conduta funcional dolosa', exigindo-se a vontade livre e consciente de alcançar o resultado ilícito (dolo específico), afastando-se o mero dolo genérico, a negligência ou a imperícia. O STF chancelou a tese no Tema 1.199/RG (ARE 843.989/PR): 'O novo regime prescricional e a revogação da modalidade culposa do ato de improbidade administrativa são aplicáveis aos atos praticados sob a vigência da legislação anterior sem condenação transitada em julgado'.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A culpa foi banida da Lei de Improbidade pela Lei 14.230/21.' },
      { letter: 'C', explanation: 'Incorreta. O art. 1º, § 3º veda categoricamente a responsabilização por ato de improbidade decorrente de culpa in elegendo ou in vigilando.' },
      { letter: 'D', explanation: 'Incorreta. A responsabilidade por improbidade é estritamente SUBJETIVA e DOLOSA.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.429/92 (com redação da Lei 14.230/21)', article: 'Art. 1º, §§ 1º, 2º e 3º', textSnippet: '§ 1º Consideram-se atos de improbidade administrativa as condutas estritamente dolosas tipificadas nos arts. 9º, 10 e 11 desta Lei, rechaçada a responsabilidade objetiva. § 2º Considera-se dolo a vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11 desta Lei, não bastando a voluntariedade do agente. § 3º O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, afasta a responsabilidade por ato de improbidade administrativa.' }
    ],
    jurisprudence: 'STF, Tema 1.199/RG (ARE 843.989/PR): É necessária a comprovação de responsabilidade subjetiva para a tipificação dos atos de improbidade administrativa, exigindo-se dolo em todas as modalidades tipificadas na Lei 8.429/1992.',
    professorTip: 'Tese Mais Cobrada do Brasil em Direito Administrativo: NÃO EXISTE MAIS IMPROBIDADE CULPOSA! Acabou, zerou, foi revogada! Toda improbidade hoje (arts. 9º, 10 e 11) EXIGE DOLO ESPECÍFICO (Tema 1199 STF)!'
  },
  {
    id: 'oab37_adm_10',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Direito Administrativo',
    topic: 'Responsabilidade Civil do Estado por Fuga de Preso (Tema 362 STF)',
    difficulty: 'Difícil',
    statement: `Um detento condenado cumpria pena em presídio estadual de segurança máxima e empreendeu fuga com sucesso. Três meses após a fuga e residindo em outro Estado da Federação, o foragido cometeu um assalto a mão armada a uma residência particular, ferindo gravemente o proprietário. A vítima ajuizou ação indenizatória em face do Estado sustentando a responsabilidade civil objetiva estatal decorrente da omissão na vigilância do estabelecimento prisional (Art. 37, § 6º da CF/88).
À luz da tese fixada pelo Supremo Tribunal Federal no Tema 362 da Repercussão Geral:`,
    options: [
      {
        letter: 'A',
        text: 'O Estado não responde civilmente, pois inexiste nexo de causalidade direto e imediato entre o crime praticado pelo foragido meses depois e a fuga do presídio, rompendo-se o nexo causal.'
      },
      {
        letter: 'B',
        text: 'O Estado responde objetivamente e com base na teoria do risco integral por todos os crimes cometidos pelo foragido até a sua recaptura.'
      },
      {
        letter: 'C',
        text: 'O Estado responde apenas se houver condenação criminal prévia do diretor do presídio por facilitação dolosa de fuga.'
      },
      {
        letter: 'D',
        text: 'A vítima só pode cobrar indenização da União por se tratar de matéria de segurança pública nacional.'
      }
    ],
    correctAnswer: 'A',
    justification: `O STF, no julgamento do Tema 362 da Repercussão Geral (RE 608.880/MT, Rel. Min. Marco Aurélio), fixou a seguinte tese vinculante: 'Nos termos do artigo 37, § 6º, da Constituição Federal, não se caracteriza a responsabilidade civil objetiva do Estado por danos decorrentes de crime praticado por pessoa foragida do sistema prisional, quando não demonstrado o nexo causal direto no momento da evasão'. O Brasil adotou a teoria do dano direto e imediato (art. 403 do CC); para o Estado responder, o crime deve ocorrer durante a fuga imediata ou em estreita proximidade temporal e causal com a evasão. Meses depois, cessa o nexo causal direto com a omissão estatal.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O Brasil não adota a teoria do risco integral nem responsabiliza o Estado ad aeternum por crimes futuros de foragidos.' },
      { letter: 'C', explanation: 'Incorreta. A responsabilidade civil do Estado independe da responsabilidade penal pessoal de seus servidores.' },
      { letter: 'D', explanation: 'Incorreta. O presídio em questão pertencia à administração do respectivo Estado-membro.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal de 1988', article: 'Art. 37, § 6º', textSnippet: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.' }
    ],
    jurisprudence: 'STF, Tema 362/RG (RE 608.880/MT): Não se caracteriza a responsabilidade civil objetiva do Estado por danos decorrentes de crime praticado por pessoa foragida do sistema prisional, quando não demonstrado o nexo causal direto no momento da evasão.',
    professorTip: 'Tese clássica de Responsabilidade Civil: Preso fugiu e assaltou alguém na esquina da prisão durante a fuga? Estado RESPONDE (nexo direto)! Preso fugiu e assaltou alguém semanas/meses depois em outro lugar? Estado NÃO RESPONDE (rompeu o nexo direto - Tema 362 STF)!'
  }
];
