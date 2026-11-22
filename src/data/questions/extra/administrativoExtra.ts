import { LegalQuestion } from '../../../types';

export const ADMINISTRATIVO_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'adm_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Improbidade Administrativa (Lei nº 14.230/2021)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `João, prefeito municipal, deixou de prestar contas de pequeno convênio no prazo regulamentar por desorganização contábil culposa de sua secretaria, sem qualquer desvio de recursos públicos, sem enriquecimento ilícito e sem intenção de prejudicar o erário. O Ministério Público ajuizou Ação Civil Pública por ato de improbidade administrativa imputando-lhe conduta culposa que atenta contra os princípios da Administração Pública.
Nos termos da Lei nº 8.429/92, com a redação dada pela Lei nº 14.230/2021, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A conduta caracteriza ato de improbidade administrativa por culpa grave, passível de suspensão dos direitos políticos, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' },
      { letter: 'B', text: 'Não configura ato de improbidade administrativa, pois a nova redação da LIA exige comprovação de dolo específico, não existindo improbidade culposa.' },
      { letter: 'C', text: 'A improbidade culposa permanece válida apenas para atos que causem prejuízo ao erário, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' },
      { letter: 'D', text: 'O Município não precisa comprovar dolo quando o agente público for ocupante de cargo eletivo, sob pena de nulidade absoluta do procedimento administrativo e apuração funcional da autoridade.' }
    ],
    correctAnswer: 'B',
    justification: `Com a reforma da Lei nº 14.230/2021 na Lei nº 8.429/92 (Art. 1º, §§ 1º e 2º), foi extinta a modalidade culposa de improbidade administrativa: exige-se a comprovação de DOLO específico (vontade livre e consciente de alcançar o resultado ilícito).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não existe mais improbidade administrativa culposa em nenhuma modalidade.' },
      { letter: 'C', explanation: 'Incorreta. O Art. 10 da LIA também exige expressamente conduta dolosa.' },
      { letter: 'D', explanation: 'Incorreta. A exigência de dolo específico vale para todo agente público ou terceiro.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.429/92 (LIA)', article: 'Art. 1º, §§ 1º e 2º', textSnippet: 'Consideram-se atos de improbidade administrativa as condutas dolosas tipificadas nos arts. 9º, 10 e 11 desta Lei.' }
    ],
    professorTip: 'Reforma da LIA (Lei 14.230/21): 1) NÃO existe improbidade culposa (exige DOLO específico); 2) Prescrição é de 8 anos do fato; 3) Rol do Art. 11 passou a ser TAXATIVO!'
  },
  {
    id: 'adm_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Nova Lei de Licitações (Lei nº 14.133/2021) - Modalidades',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A Administração Pública estadual pretende contratar soluções tecnológicas de alta complexidade e inovação, para as quais o mercado não possui especificação técnica padronizada pré-definida, necessitando debater alternativas técnicas com licitantes previamente selecionados antes de receber as propostas finais.
Segundo a Lei nº 14.133/2021, a modalidade licitatória adequada para esse objeto é:`,
    options: [
      { letter: 'A', text: 'Convite.' },
      { letter: 'B', text: 'Tomada de Preços.' },
      { letter: 'C', text: 'Diálogo Competitivo.' },
      { letter: 'D', text: 'Pregão Presencial simplificado.' }
    ],
    correctAnswer: 'C',
    justification: `A Lei nº 14.133/2021 extinguiu Convite e Tomada de Preços e criou o Diálogo Competitivo (Art. 28, V, e Art. 32) para contratar objetos com inovação tecnológica ou técnica em que a Administração dialoga com licitantes pré-selecionados.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A modalidade Convite foi extinta pela Lei nº 14.133/2021.' },
      { letter: 'B', explanation: 'Incorreta. A modalidade Tomada de Preços também foi extinta.' },
      { letter: 'D', explanation: 'Incorreta. Pregão destina-se a bens e serviços comuns padronizados.' }
    ],
    statuteReferences: [
      { code: 'Lei 14.133/2021', article: 'Arts. 28 e 32', textSnippet: 'São modalidades de licitação: pregão, concorrência, concurso, leilão e diálogo competitivo.' }
    ],
    professorTip: 'Na Lei 14.133/21 só existem 5 modalidades: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo!'
  },
  {
    id: 'adm_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Anulação vs Revogação de Atos Administrativos',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um Município concedeu licença definitiva de funcionamento para uma lanchonete após comprovação de todos os requisitos legais. Meses depois, nova gestão entendeu ser mais conveniente para o fluxo de pedestres não permitir lanchonetes naquela calçada e revogou a licença por oportunidade e conveniência.
À luz da teoria dos atos administrativos e da Súmula 473 do STF, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A revogação opera efeitos retroativos (ex tunc) e pode ser determinada pelo Poder Judiciário, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' },
      { letter: 'B', text: 'A revogação atinge atos válidos por conveniência e oportunidade com efeitos prospectivos (ex nunc), porém não alcança atos vinculados nem direitos adquiridos.' },
      { letter: 'C', text: 'A anulação decorre de conveniência e oportunidade, produzindo efeitos ex nunc, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' },
      { letter: 'D', text: 'A Administração não pode rever seus próprios atos sem prévia autorização judicial, sem possibilidade de convalidação posterior do ato administrativo por ausência de previsão regulamentar.' }
    ],
    correctAnswer: 'B',
    justification: `Pela Súmula 473 do STF, a Administração pode anular atos ilegais (ex tunc) ou revogar atos válidos por mérito com efeitos ex nunc, respeitados os direitos adquiridos. Atos vinculados e direitos adquiridos não admitem revogação discricionária livre.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Revogação tem efeitos ex nunc e é privativa da Administração.' },
      { letter: 'C', explanation: 'Incorreta. Anulação decorre de ilegalidade, com efeitos ex tunc.' },
      { letter: 'D', explanation: 'Incorreta. Autotutela dispensa autorização judicial prévia.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.784/99', article: 'Art. 53', textSnippet: 'A Administração deve anular seus próprios atos, quando eivados de vício de legalidade, e pode revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.' }
    ],
    jurisprudence: 'Súmula 473 do STF.',
    professorTip: 'ANULAÇÃO = ilegalidade (ex tunc). REVOGAÇÃO = mérito (ex nunc, só Administração, nunca ato vinculado ou direito adquirido!).'
  },
  {
    id: 'adm_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Responsabilidade Civil do Estado por Omissão (Dever de Custódia)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um detento recolhido a estabelecimento prisional estadual veio a óbito dentro da cela em decorrência de agressões físicas praticadas por outros presos durante rebelião, sem que o Estado tivesse garantido sua integridade física.
Segundo a jurisprudência vinculante do STF (Tema 592 - RE 841.526), a responsabilidade do Estado nesse caso é:`,
    options: [
      { letter: 'A', text: 'Subjetiva, cabendo à família comprovar dolo ou culpa grave dos agentes penitenciários.' },
      { letter: 'B', text: 'Objetiva, em razão da inobservância do dever específico de proteção e custódia.' },
      { letter: 'C', text: 'Inexistente, por configurar fato exclusivo de terceiro.' },
      { letter: 'D', text: 'Subsidiária, devendo os familiares acionar primeiro os outros presos.' }
    ],
    correctAnswer: 'B',
    justification: `No Tema 592 (RE 841.526), o STF assentou que, em caso de inobservância do dever específico de proteção previsto no Art. 5º, XLIX, da CF/88 (dever de custódia), a responsabilidade civil do Estado por morte de detento é OBJETIVA.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A custódia gera dever específico de garantia, atraindo responsabilidade objetiva.' },
      { letter: 'C', explanation: 'Incorreta. O dever de custódia impede alegar fato de outro preso como excludente automática.' },
      { letter: 'D', explanation: 'Incorreta. A responsabilidade estatal é direta e objetiva.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 37, § 6º e Art. 5º, XLIX', textSnippet: 'É assegurado aos presos o respeito à integridade física e moral.' }
    ],
    jurisprudence: 'STF - Tema 592 (RE 841.526): Responsabilidade objetiva do Estado pela morte de detento.',
    professorTip: 'Omissão genérica = Subjetiva. Omissão específica com custódia (preso / aluno em escola pública) = OBJETIVA!'
  },
  {
    id: 'adm_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Serviços Públicos e Concessão (Encampação vs Caducidade)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Uma concessionária de energia elétrica interrompeu o fornecimento residencial de consumidor inadimplente há 60 dias, após aviso prévio formal. Em outra frente, o Município concedente retomou o transporte coletivo antes do fim do prazo contratual por motivo de interesse público superveniente, mediante lei autorizativa específica e prévio pagamento de indenização.
À luz da Lei nº 8.987/95, as duas hipóteses configuram, respectivamente:`,
    options: [
      { letter: 'A', text: 'Interrupção ilícita e caducidade da concessão.' },
      { letter: 'B', text: 'Interrupção lícita por inadimplemento (após prévio aviso) e encampação da concessão.' },
      { letter: 'C', text: 'Corte abusivo e rescisão amigável.' },
      { letter: 'D', text: 'Suspensão automática e reversão gratuita.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 6º, § 3º, II, da Lei nº 8.987/95 permite a interrupção por inadimplemento do usuário após prévio aviso. Já a retomada durante o prazo por interesse público, com lei específica e indenização prévia, chama-se ENCAMPAÇÃO (Art. 37).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Caducidade decorre de inadimplemento da concessionária.' },
      { letter: 'C', explanation: 'Incorreta. Não há abusividade após aviso prévio regular.' },
      { letter: 'D', explanation: 'Incorreta. Encampação exige lei e indenização prévia.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.987/95', article: 'Art. 6º, § 3º, II e Art. 37', textSnippet: 'Considera-se encampação a retomada do serviço pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização.' }
    ],
    professorTip: 'Encampação = interesse público + lei + indenização PRÉVIA. Caducidade = culpa da concessionária!'
  },
  {
    id: 'adm_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Agentes Públicos e PAD (Súmula Vinculante 5)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Marcos, servidor federal estável, respondeu a PAD sem advogado, apresentando defesa escrita pessoalmente, e sofreu demissão. Paralelamente, foi absolvido na esfera criminal pelo mesmo fato por insuficiência de provas.
Considerando a Súmula Vinculante 5 do STF e a Lei nº 8.112/90, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O pad é nulo pela falta de advogado e a absolvição criminal vincula o administrativo, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes.' },
      { letter: 'B', text: 'A falta de defesa técnica por advogado no pad não ofende a Constituição, e a absolvição criminal por insuficiência de provas não afasta a punição disciplinar administrativa.' },
      { letter: 'C', text: 'A Súmula Vinculante 5 exige defensor dativo sob pena de nulidade, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal.' },
      { letter: 'D', text: 'Toda absolvição criminal gera reintegração automática, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' }
    ],
    correctAnswer: 'B',
    justification: `A SV 5 do STF estabelece que a falta de defesa técnica por advogado no PAD não ofende a Constituição. E pelo Art. 126 da Lei nº 8.112/90, apenas absolvição penal por inexistência do fato ou negativa de autoria vincula o administrativo.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Nem falta de advogado anula o PAD, nem falta de provas na esfera penal vincula o PAD.' },
      { letter: 'C', explanation: 'Incorreta. A SV 5 dispensa advogado obrigatório no PAD.' },
      { letter: 'D', explanation: 'Incorreta. Insuficiência de provas não repercute na demissão administrativa.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.112/90', article: 'Art. 126', textSnippet: 'A responsabilidade administrativa do servidor será afastada no caso de absolvição criminal que negue a existência do fato ou sua autoria.' }
    ],
    jurisprudence: 'Súmula Vinculante 5 do STF.',
    professorTip: 'SV 5: Advogado no PAD é facultativo! Absolvição penal por falta de provas não anula demissão!'
  },
  {
    id: 'adm_ext_07',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Decadência Administrativa (Lei nº 9.784/99)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em 2015, a Administração federal concedeu vantagem pecuniária a servidora aposentada de boa-fé por interpretação equivocada da lei. Em 2022, ao auditar a folha, anulou o benefício e determinou desconto dos valores recebidos.
Considerando a Lei nº 9.784/99 e a jurisprudência do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A Administração pode anular atos ilegais a qualquer tempo, mediante exercício regular do poder discricionário vinculado à finalidade administrativa primária.' },
      { letter: 'B', text: 'Decaiu o direito de anular o ato favorável após 5 anos da data em que foi praticado (salvo má-fé), além de ser incabível a devolução de verbas alimentares recebidas de boa-fé por erro da própria Administração.' },
      { letter: 'C', text: 'O prazo de decadência na Lei nº 9.784/99 é de 10 anos, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' },
      { letter: 'D', text: 'A servidora deve restituir integralmente os últimos cinco anos, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 54 da Lei nº 9.784/99 fixa prazo decadencial de 5 anos para anular atos favoráveis aos destinatários de boa-fé, além de valores alimentares recebidos de boa-fé por erro interpretativo da Administração serem irrepetíveis.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Há limite decadencial de 5 anos no Art. 54.' },
      { letter: 'C', explanation: 'Incorreta. O prazo é de 5 anos.' },
      { letter: 'D', explanation: 'Incorreta. Não há restituição de verba alimentar recebida de boa-fé por erro administrativo.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.784/99', article: 'Art. 54', textSnippet: 'O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.' }
    ],
    professorTip: 'Anular ato favorável de boa-fé = 5 ANOS (decadência)!'
  },
  {
    id: 'adm_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Terceiro Setor e MROSC (Lei nº 13.019/2014)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um Município deseja firmar parceria com Organização da Sociedade Civil (OSC) sob a Lei nº 13.019/2014 (MROSC), sem transferência de recursos financeiros públicos, para execução de projeto cultural proposto pela própria entidade.
O instrumento jurídico específico para essa parceria é:`,
    options: [
      { letter: 'A', text: 'Termo de Fomento.' },
      { letter: 'B', text: 'Termo de Colaboração.' },
      { letter: 'C', text: 'Acordo de Cooperação.' },
      { letter: 'D', text: 'Contrato de Gestão.' }
    ],
    correctAnswer: 'C',
    justification: `Na Lei nº 13.019/2014: Acordo de Cooperação formaliza parcerias SEM transferência de recursos financeiros (Art. 2º, VIII-A). Termo de Fomento (proposta OSC) e Termo de Colaboração (proposta Administração) envolvem repasse financeiro.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Termo de Fomento envolve transferência de recursos.' },
      { letter: 'B', explanation: 'Incorreta. Termo de Colaboração envolve transferência de recursos.' },
      { letter: 'D', explanation: 'Incorreta. Contrato de Gestão é para Organizações Sociais (Lei 9.637/98).' }
    ],
    statuteReferences: [
      { code: 'Lei 13.019/2014', article: 'Art. 2º, VIII-A', textSnippet: 'acordo de cooperação: parceria que não envolva a transferência de recursos financeiros.' }
    ],
    professorTip: 'MROSC sem dinheiro = Acordo de Cooperação!'
  },
  {
    id: 'adm_ext_09',
    exam: 'Prova Acadêmica / Direito Administrativo',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Bens Públicos e Desafetação',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Um prédio de antiga escola municipal foi desativado e desafetado por lei para bem dominical visando à venda. Um morador que ocupou o terreno por 6 anos pediu usucapião especial urbana.
Sobre o regime jurídico dos bens públicos, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Bens dominicais são passíveis de usucapião, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' },
      { letter: 'B', text: 'A desafetação permite a alienação (observados os requisitos legais), mas nenhum bem público, nem mesmo o dominical, é passível de usucapião.' },
      { letter: 'C', text: 'Bens públicos imóveis só podem ser vendidos por concorrência na Lei nº 14.133/2021, com amparo na autoexecutoriedade e na presunção de legitimidade inerentes aos atos administrativos.' },
      { letter: 'D', text: 'A ocupação irregular de bem público gera direito de retenção por benfeitorias, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes.' }
    ],
    correctAnswer: 'B',
    justification: `Bens dominicais podem ser alienados cumpridos os requisitos legais (Art. 76, Lei 14.133/21, na modalidade leilão), porém todos os bens públicos são imprescritíveis (CF, Arts. 183 § 3º e 191 parágrafo único; CC, Art. 102).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Todos os bens públicos são imprescritíveis.' },
      { letter: 'C', explanation: 'Incorreta. Na Lei 14.133/21 a alienação de imóveis públicos utiliza a modalidade LEILÃO.' },
      { letter: 'D', explanation: 'Incorreta. Súmula 619 do STJ afasta retenção ou indenização por benfeitorias.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 99 a 102', textSnippet: 'Os bens públicos não estão sujeitos a usucapião.' }
    ],
    jurisprudence: 'Súmula 619 do STJ.',
    professorTip: 'Bem público: Dominical vende (por leilão na Lei 14.133/21), mas NUNCA sofre usucapião!'
  },
  {
    id: 'adm_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Servidão Administrativa vs Requisição Administrativa',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Para passar fios de alta tensão sobre área rural privada sem retirar o dono do solo, o poder público instituiu ônus real público. Em outro caso, durante enchente, a Defesa Civil usou imediatamente um ginásio privado por 10 dias para abrigar desabrigados.
Essas duas intervenções na propriedade correspondem, respectivamente, a:`,
    options: [
      { letter: 'A', text: 'Desapropriação parcial e ocupação temporária, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' },
      { letter: 'B', text: 'Servidão administrativa (indenizável se houver prejuízo) e requisição administrativa (por perigo público iminente, com indenização ulterior se houver dano).' },
      { letter: 'C', text: 'Limitação administrativa e tombamento, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes.' },
      { letter: 'D', text: 'Tombamento e servidão, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' }
    ],
    correctAnswer: 'B',
    justification: `Passagem de redes/fios em imóvel alheio = servidão administrativa (indenização se houver dano). Uso emergencial em perigo público iminente = requisição administrativa (Art. 5º, XXV, CF/88, indenização ulterior se houver dano).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não há perda da propriedade nem se trata de obra programada.' },
      { letter: 'C', explanation: 'Incorreta. Limitação administrativa é geral/gratuita e tombamento é cultural.' },
      { letter: 'D', explanation: 'Incorreta. Conceitos incorretos.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 5º, XXV', textSnippet: 'no caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário indenização ulterior, se houver dano.' }
    ],
    professorTip: 'Fios/tubos = Servidão; Calamidade súbita = Requisição (indenização só depois se houver dano!).'
  },
  {
    id: 'adm_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Administração Indireta (Criação vs Autorização)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A União pretende criar uma autarquia reguladora (direito público) e uma sociedade anônima de economia mista com participação privada minoritária.
Nos termos do Art. 37, XIX, da CF/88, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A autarquia é criada diretamente por lei específica; a sociedade de economia mista tem sua instituição autorizada por lei específica, adquirindo personalidade jurídica com o registro de seus atos.' },
      { letter: 'B', text: 'Ambas exigem lei complementar, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' },
      { letter: 'C', text: 'A sociedade de economia mista é criada por decreto, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' },
      { letter: 'D', text: 'Autarquias possuem personalidade de direito privado, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal.' }
    ],
    correctAnswer: 'A',
    justification: `Art. 37, XIX, CF/88: somente por lei específica poderá ser CRIADA autarquia e AUTORIZADA a instituição de empresa pública, sociedade de economia mista e fundação.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Basta lei ordinária específica.' },
      { letter: 'C', explanation: 'Incorreta. Exige lei específica autorizadora.' },
      { letter: 'D', explanation: 'Incorreta. Autarquias têm personalidade de direito público.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 37, XIX', textSnippet: 'somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação.' }
    ],
    professorTip: 'Autarquia = CRIADA por lei. EP/SEM/Fundação privada = AUTORIZADAS por lei + registro!'
  },
  {
    id: 'adm_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Delegação do Poder de Polícia (Tema 532 STF)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um Município delegou por lei a uma sociedade de economia mista municipal não concorrencial, de capital majoritariamente público, a aplicação de multas de trânsito (sanção de polícia).
Segundo o STF no Tema 532 (RE 633.782), essa delegação é:`,
    options: [
      { letter: 'A', text: 'Inconstitucional porque poder de polícia nunca pode ser delegado a pessoa jurídica de direito privado. Tal entendimento decorre diretamente da submissão da Administração ao regime jurídico público.' },
      { letter: 'B', text: 'Constitucional, por tratar-se de estatal da Administração Indireta com capital majoritariamente público prestando serviço público próprio em regime não concorrencial.' },
      { letter: 'C', text: 'Constitucional inclusive se delegada diretamente a empresas particulares privadas via licitação, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal.' },
      { letter: 'D', text: 'Inconstitucional salvo se prevista em lei complementar federal, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes.' }
    ],
    correctAnswer: 'B',
    justification: `No Tema 532 (RE 633.782), o STF validou a delegação por lei das fases de consentimento, fiscalização e sanção a estatais não concorrenciais de capital majoritariamente público.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O STF admitiu a delegação a estatal não concorrencial.' },
      { letter: 'C', explanation: 'Incorreta. Empresas particulares fora do Estado não podem aplicar sanções de polícia.' },
      { letter: 'D', explanation: 'Incorreta. Lei ordinária do ente instituidor é suficiente.' }
    ],
    statuteReferences: [
      { code: 'Tema 532 STF', article: 'RE 633.782', textSnippet: 'É constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da Administração Pública indireta...' }
    ],
    jurisprudence: 'STF - Tema 532.',
    professorTip: 'Estatal não concorrencial + capital majoritariamente público + lei = PODE consentimento, fiscalização e sanção!'
  },
  {
    id: 'adm_ext_13',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Dispensa vs Inexigibilidade na Lei 14.133/2021',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A Prefeitura pretende contratar sem licitação: (I) equipamento médico de fornecedor exclusivo no país; e (II) compra de insumos dentro do pequeno valor legal.
Nos termos da Lei nº 14.133/2021 (Arts. 74 e 75), são respectivamente hipóteses de:`,
    options: [
      { letter: 'A', text: 'Licitação dispensada e inexigibilidade.' },
      { letter: 'B', text: 'Inexigibilidade de licitação e licitação dispensável.' },
      { letter: 'C', text: 'Licitação dispensável e inexigibilidade.' },
      { letter: 'D', text: 'Licitação deserta e fracassada.' }
    ],
    correctAnswer: 'B',
    justification: `Fornecedor exclusivo inviabiliza competição = INEXIGIBILIDADE (Art. 74, I, rol exemplificativo). Pequeno valor dentro do limite legal = LICITAÇÃO DISPENSÁVEL (Art. 75, I e II, rol taxativo).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Exclusividade não é licitação dispensada.' },
      { letter: 'C', explanation: 'Incorreta. Conceitos invertidos.' },
      { letter: 'D', explanation: 'Incorreta. Deserta é sem interessados; fracassada é quando todos são desclassificados/inabilitados.' }
    ],
    statuteReferences: [
      { code: 'Lei 14.133/2021', article: 'Arts. 74 e 75', textSnippet: 'É inexigível a licitação quando inviável a competição...' }
    ],
    professorTip: 'Art. 74 Inexigibilidade = rol exemplificativo. Art. 75 Dispensa = rol TAXATIVO!'
  },
  {
    id: 'adm_ext_14',
    exam: 'Prova Acadêmica / Direito Administrativo',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Teoria dos Motivos Determinantes',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Um Secretário exonerou servidor exclusivamente comissionado (ad nutum), declarando na portaria que o motivo era "ausência injustificada por 45 dias". Provou-se que o servidor estava em licença médica oficial em todo o período.
Pela Teoria dos Motivos Determinantes, o ato de exoneração é:`,
    options: [
      { letter: 'A', text: 'Válido porque cargo em comissão é de livre exoneração. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' },
      { letter: 'B', text: 'Nulo, pois ao declarar o motivo do ato, a Administração vincula a validade do ato à veracidade desse motivo.' },
      { letter: 'C', text: 'Válido, convertendo-se em licença, sem necessidade de prévia autorização judicial ou instauração de procedimento contraditório específico.' },
      { letter: 'D', text: 'Sanável automaticamente sem novo ato, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' }
    ],
    correctAnswer: 'B',
    justification: `Pela Teoria dos Motivos Determinantes, mesmo que a exoneração ad nutum dispensasse motivação, uma vez declarado o motivo, o ato só é válido se o motivo for verdadeiro.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A falsidade do motivo declarado vicia o ato.' },
      { letter: 'C', explanation: 'Incorreta. Gera nulidade absoluta.' },
      { letter: 'D', explanation: 'Incorreta. Motivo falso não se convalida.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.784/99', article: 'Art. 50', textSnippet: 'Os atos administrativos deverão ser motivados...' }
    ],
    professorTip: 'Declarou motivo falso em exoneração ad nutum? Ato NULO pela Teoria dos Motivos Determinantes!'
  },
  {
    id: 'adm_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Atraso da Administração na Lei nº 14.133/2021',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em contrato administrativo de obra regido pela Lei nº 14.133/2021, a Administração atrasou injustificadamente o pagamento das faturas por 75 dias (2 meses e meio).
Diante desse atraso, o contratado tem direito a:`,
    options: [
      { letter: 'A', text: 'Suportar atrasos de até 90 dias como na antiga Lei 8.666/93, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes.' },
      { letter: 'B', text: 'Optar pela suspensão do cumprimento de suas obrigações ou pela extinção do contrato, pois o prazo na Lei nº 14.133/2021 passou a ser superior a 2 meses.' },
      { letter: 'C', text: 'Paralisar desde o primeiro dia de atraso, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal.' },
      { letter: 'D', text: 'Jamais suspender o contrato administrativo, com vedação ao administrador público de suprir a exigência legal por juízo de conveniência.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 137, § 2º, IV, da Lei nº 14.133/2021 reduziu de 90 dias para **2 meses** o prazo de atraso de pagamento pelo Poder Público que autoriza a extinção ou suspensão contratual pelo contratado.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. 90 dias era o prazo da revogada Lei 8.666/93.' },
      { letter: 'C', explanation: 'Incorreta. Deve aguardar o prazo superior a 2 meses.' },
      { letter: 'D', explanation: 'Incorreta. O Art. 137, § 2º e § 3º asseguram expressamente a faculdade.' }
    ],
    statuteReferences: [
      { code: 'Lei 14.133/2021', article: 'Art. 137, § 2º, IV', textSnippet: 'atraso superior a 2 (dois) meses, contado da emissão da nota fiscal, dos pagamentos...' }
    ],
    professorTip: 'Na Lei 14.133/21, atraso de pagamento pela Administração = 2 MESES!'
  },
  {
    id: 'adm_ext_16',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Parcerias Público-Privadas (PPP)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um Estado celebrou PPP para operação de complexo hospitalar em que o próprio Estado é o usuário, sem cobrança de tarifa da população e com remuneração 100% estatal.
Nos termos da Lei nº 11.079/2004, trata-se de:`,
    options: [
      { letter: 'A', text: 'Concessão Patrocinada.' },
      { letter: 'B', text: 'Concessão Administrativa.' },
      { letter: 'C', text: 'Concessão Comum.' },
      { letter: 'D', text: 'Permissão Precária.' }
    ],
    correctAnswer: 'B',
    justification: `Concessão Administrativa (Art. 2º, § 2º, Lei 11.079/04) é a PPP em que a Administração é usuária direta ou indireta, sem cobrança de tarifa do usuário final.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Patrocinada soma tarifa de usuários + contraprestação pública.' },
      { letter: 'C', explanation: 'Incorreta. Concessão comum remunera-se por tarifa dos usuários.' },
      { letter: 'D', explanation: 'Incorreta. Permissão não é PPP.' }
    ],
    statuteReferences: [
      { code: 'Lei 11.079/2004', article: 'Art. 2º, § 2º', textSnippet: 'Concessão administrativa é o contrato de prestação de serviços de que a Administração Pública seja a usuária direta ou indireta...' }
    ],
    professorTip: 'PPP sem tarifa de usuário = Concessão Administrativa; com tarifa + subsídio = Patrocinada!'
  },
  {
    id: 'adm_ext_17',
    exam: 'Prova Acadêmica / Direito Administrativo',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Desconcentração vs Descentralização',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `A criação de uma nova Secretaria dentro de um Ministério e a delegação de serviço público a uma concessionária privada correspondem, respectivamente, a:`,
    options: [
      { letter: 'A', text: 'Descentralização e desconcentração, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' },
      { letter: 'B', text: 'Desconcentração (criação de órgão sem personalidade jurídica) e descentralização por colaboração (transferência a outra pessoa jurídica).' },
      { letter: 'C', text: 'Avocação e outorga legal, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' },
      { letter: 'D', text: 'Centralização e tutela hierárquica, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' }
    ],
    correctAnswer: 'B',
    justification: `Desconcentração distribui internamente na mesma pessoa jurídica (cria órgãos). Descentralização transfere para outra pessoa jurídica (por outorga legal ou colaboração contratual).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Conceitos invertidos.' },
      { letter: 'C', explanation: 'Incorreta. Avocação refere-se à atração temporária de competência.' },
      { letter: 'D', explanation: 'Incorreta. Entre ente central e descentralizado não há hierarquia, apenas controle/tutela.' }
    ],
    statuteReferences: [
      { code: 'Decreto-Lei 200/67', article: 'Arts. 4º e 6º', textSnippet: 'Administração Direta e Administração Indireta.' }
    ],
    professorTip: 'desCOnCentração = Órgão (com hierarquia); desCEntralização = Entidade/Empresa (sem hierarquia)!'
  },
  {
    id: 'adm_ext_18',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Convalidação de Atos Administrativos (Lei 9.784/99)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um chefe de setor praticou ato de autorização simples que cabia ao Diretor (competência não exclusiva). Antes de qualquer impugnação ou lesão, o Diretor ratificou o ato.
Segundo o Art. 55 da Lei nº 9.784/99, essa ratificação configura:`,
    options: [
      { letter: 'A', text: 'Anulação obrigatória, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' },
      { letter: 'B', text: 'Convalidação válida com efeitos retroativos (ex tunc), pois o vício de competência não exclusiva é sanável e não causou lesão ao interesse público nem prejuízo a terceiros.' },
      { letter: 'C', text: 'Revogação parcial, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' },
      { letter: 'D', text: 'Caducidade do ato, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' }
    ],
    correctAnswer: 'B',
    justification: `Art. 55 da Lei nº 9.784/99: defeitos sanáveis (como vício de competência não exclusiva e forma não essencial) podem ser convalidados pela Administração com efeitos ex tunc.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Vício de competência não exclusiva é sanável.' },
      { letter: 'C', explanation: 'Incorreta. Revogação extingue ato válido; convalidação mantém o ato.' },
      { letter: 'D', explanation: 'Incorreta. Não há lei superveniente extinguindo o ato.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.784/99', article: 'Art. 55', textSnippet: 'os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração.' }
    ],
    professorTip: 'Vício sanável = Competência (não exclusiva) e Forma (não essencial)!'
  },
  {
    id: 'adm_ext_19',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Desapropriação Indireta e Prescrição (Tema 1019 STJ)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sem decreto expropriatório prévio, o Estado invadiu área privada e nela construiu uma rodovia aberta ao tráfego. Passados 12 anos, o dono pediu a devolução do terreno ou indenização.
À luz do DL nº 3.365/41 e do Tema 1019 do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O proprietário pode reivindicar a posse fechando a rodovia, sem necessidade de prévia autorização judicial ou instauração de procedimento contraditório específico.' },
      { letter: 'B', text: 'Não cabe reivindicação do bem após afetação pública, resolvendo-se em indenização por desapropriação indireta, cujo prazo prescricional é de 10 anos quando há realização de obra pública no local.' },
      { letter: 'C', text: 'A prescrição da desapropriação indireta é sempre de 3 anos, em conformidade com os parâmetros de eficiência administrativa e continuidade do serviço público.' },
      { letter: 'D', text: 'Não há dever de indenizar por apossamento administrativo, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 35 do DL 3.365/41 veda a reivindicação após incorporação ao patrimônio público, resolvendo-se em perdas e danos. Pelo Tema 1019 do STJ, a prescrição da desapropriação indireta é de 10 anos quando há obra/serviço produtivo no imóvel.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Veda-se a reivindicação do bem afetado.' },
      { letter: 'C', explanation: 'Incorreta. O STJ fixou 10 anos (reduzido da usucapião extraordinária com obra).' },
      { letter: 'D', explanation: 'Incorreta. Deve indenizar integralmente.' }
    ],
    statuteReferences: [
      { code: 'Decreto-Lei 3.365/41', article: 'Art. 35', textSnippet: 'Os bens expropriados, uma vez incorporados à Fazenda Pública, não podem ser objeto de reivindicação...' }
    ],
    jurisprudence: 'STJ - Tema 1019.',
    professorTip: 'Desapropriação Indireta = não devolve bem afetado + indenização com prescrição de 10 anos (Tema 1019 STJ)!'
  },
  {
    id: 'adm_ext_20',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Acumulação de Cargos e Teto Constitucional',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Pedro é médico estadual (20h) e assumiu outro cargo efetivo de médico federal (20h), com compatibilidade de horários. Somados os salários, ultrapassa o teto dos Ministros do STF.
Segundo o STF (Temas 377 e 384), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A acumulação é proibida entre entes diferentes, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes.' },
      { letter: 'B', text: 'A acumulação dos dois cargos de médico é lícita, e o teto constitucional incide isoladamente sobre cada um dos vínculos.' },
      { letter: 'C', text: 'O corte do teto incide sobre a soma dos dois vencimentos, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal.' },
      { letter: 'D', text: 'Médicos não podem acumular cargos públicos, com vedação ao administrador público de suprir a exigência legal por juízo de conveniência.' }
    ],
    correctAnswer: 'B',
    justification: `Art. 37, XVI, "c", CF/88 autoriza dois cargos privativos de profissionais de saúde com compatibilidade de horários, e o STF (Temas 377 e 384) determinou que o teto incide separadamente sobre cada vínculo lícito.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Pode acumular entre União, Estados e Municípios.' },
      { letter: 'C', explanation: 'Incorreta. Incidência isolada por vínculo.' },
      { letter: 'D', explanation: 'Incorreta. Profissionais de saúde têm permissão constitucional expressa.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 37, XI e XVI, "c"', textSnippet: 'a de dois cargos ou empregos privativos de profissionais de saúde...' }
    ],
    jurisprudence: 'STF - Temas 377 e 384.',
    professorTip: 'Acumulação lícita = teto constitucional analisado SEPARADAMENTE para cada cargo!'
  },
  {
    id: 'adm_ext_21',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Seguro-Garantia em Obras de Grande Vulto (Lei 14.133/21)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em obra de grande vulto (acima de R$ 200 milhões) licitada pela Lei nº 14.133/2021, exigiu-se seguro-garantia com cláusula de retomada (step-in right).
O percentual máximo de garantia permitido nessa hipótese é:`,
    options: [
      { letter: 'A', text: 'Até 5% do valor inicial do contrato.' },
      { letter: 'B', text: 'Até 10% do valor inicial do contrato.' },
      { letter: 'C', text: 'Até 30% do valor inicial do contrato.' },
      { letter: 'D', text: 'Até 50% do valor inicial do contrato.' }
    ],
    correctAnswer: 'C',
    justification: `Na Lei nº 14.133/2021, o teto geral é 5% (ou 10% justificado), mas para obras de grande vulto com seguro-garantia e cláusula de retomada pode chegar a até 30% (Art. 99).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. 5% é a regra geral ordinária.' },
      { letter: 'B', explanation: 'Incorreta. 10% é para contratos complexos comuns.' },
      { letter: 'D', explanation: 'Incorreta. Não existe teto de 50%.' }
    ],
    statuteReferences: [
      { code: 'Lei 14.133/2021', article: 'Art. 99', textSnippet: 'em percentual equivalente a até 30% (trinta por cento) do valor inicial do contrato.' }
    ],
    professorTip: 'Garantias na 14.133/21: 5% -> 10% -> 30% (grande vulto com seguro-garantia e retomada)!'
  },
  {
    id: 'adm_ext_22',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Prescrição do Ressarcimento ao Erário (Temas 666, 897 e 899 STF)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sobre a prescritibilidade do ressarcimento ao erário no STF, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Toda ação de ressarcimento ao erário é imprescritível, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal.' },
      { letter: 'B', text: 'São imprescritíveis apenas as ações de ressarcimento fundadas na prática de ato doloso de improbidade administrativa.' },
      { letter: 'C', text: 'As ações de improbidade dolosas prescrevem em 5 anos quanto ao ressarcimento, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' },
      { letter: 'D', text: 'Acórdãos condenatórios do TCU são imprescritíveis, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' }
    ],
    correctAnswer: 'B',
    justification: `STF: Tema 666 (ilícito civil comum prescreve), Tema 897 (ato doloso de improbidade é imprescritível para ressarcir), Tema 899 (ressarcimento baseado em decisão de Tribunal de Contas prescreve em 5 anos).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Apenas ato doloso de improbidade é imprescritível.' },
      { letter: 'C', explanation: 'Incorreta. As sanções prescrevem em 8 anos, mas o ressarcimento por ato doloso é imprescritível.' },
      { letter: 'D', explanation: 'Incorreta. Tema 899 fixou a prescritibilidade.' }
    ],
    statuteReferences: [
      { code: 'Constituição Federal / 88', article: 'Art. 37, § 5º', textSnippet: 'ressalvadas as respectivas ações de ressarcimento.' }
    ],
    jurisprudence: 'STF - Temas 666, 897 e 899.',
    professorTip: 'Só é IMPRESCRITÍVEL o ressarcimento por ato DOLOSO de improbidade (Tema 897)!'
  },
  {
    id: 'adm_ext_23',
    exam: 'Prova Acadêmica / Direito Administrativo',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Atributos do Ato Administrativo (Autoexecutoriedade)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `A vigilância sanitária interditou restaurante e apreendeu carnes vencidas imediatamente sem ordem judicial.
Esse poder de execução direta pela própria Administração corresponde ao atributo da:`,
    options: [
      { letter: 'A', text: 'Imperatividade.' },
      { letter: 'B', text: 'Autoexecutoriedade.' },
      { letter: 'C', text: 'Presunção absoluta de legitimidade.' },
      { letter: 'D', text: 'Tipicidade.' }
    ],
    correctAnswer: 'B',
    justification: `Autoexecutoriedade permite à Administração executar diretamente suas decisões materiais sem prévia autorização judicial (nos casos previstos em lei ou urgência).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Imperatividade é impor obrigação unilateral, sem executar materialmente.' },
      { letter: 'C', explanation: 'Incorreta. Presunção de legitimidade é relativa (juris tantum).' },
      { letter: 'D', explanation: 'Incorreta. Tipicidade é adequação a figuras legais prévias.' }
    ],
    statuteReferences: [
      { code: 'Doutrina Administrativa', article: 'Atributos PATI', textSnippet: 'Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade.' }
    ],
    professorTip: 'Execução material sem juiz = Autoexecutoriedade! (Cobrança de multa NÃO tem autoexecutoriedade!)'
  },
  {
    id: 'adm_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Atos Indelegáveis (Art. 13 da Lei nº 9.784/99)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um Ministro pretende delegar a um diretor subordinado a edição de ato de caráter normativo e a decisão de recurso administrativo hierárquico.
Segundo o Art. 13 da Lei nº 9.784/99:`,
    options: [
      { letter: 'A', text: 'Ambas podem ser delegadas, sem necessidade de prévia autorização judicial ou instauração de procedimento contraditório específico. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' },
      { letter: 'B', text: 'Nenhuma das duas pode ser delegada, pois edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva são indelegáveis (CE-no-ra).' },
      { letter: 'C', text: 'Apenas a decisão de recursos é delegável, sujeita a revisão administrativa interna no exercício regular do poder de autotutela estatal.' },
      { letter: 'D', text: 'Apenas atos normativos são delegáveis, em vinculação direta da autoridade administrativa competente aos limites do regime de direito público.' }
    ],
    correctAnswer: 'B',
    justification: `Art. 13 da Lei nº 9.784/99 proíbe delegação de: I - atos normativos; II - decisão de recursos administrativos; III - competência exclusiva (CE-NO-RA).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Há proibição legal expressa.' },
      { letter: 'C', explanation: 'Incorreta. Decisão de recurso é indelegável.' },
      { letter: 'D', explanation: 'Incorreta. Ato normativo é indelegável.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.784/99', article: 'Art. 13', textSnippet: 'Não podem ser objeto de delegação: I - edição de atos de caráter normativo; II - decisão de recursos administrativos; III - matérias de competência exclusiva.' }
    ],
    professorTip: 'Mnemônico CE-NO-RA: Competência Exclusiva, atos NOrmativos, Recursos Administrativos = NÃO delegam!'
  },
  {
    id: 'adm_ext_25',
    exam: 'Simulado FGV / OAB Unificado - Administrativo',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Administrativo',
    topic: 'Lei de Acesso à Informação (LAI - Lei 12.527/2011)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um cidadão requereu acesso à folha nominal de remunerações dos servidores de uma autarquia sem explicar o motivo do pedido. O órgão negou alegando ausência de justificativa e sigilo salarial.
À luz da Lei nº 12.527/2011 e do STF (Tema 483), a negativa é:`,
    options: [
      { letter: 'A', text: 'Legítima porque a LAI exige motivação. A medida dispensa homologação judicial prévia para surtir regular eficácia administrativa.' },
      { letter: 'B', text: 'Ilegal, pois são vedadas exigências sobre os motivos do pedido e é legítima a divulgação nominal de vencimentos de servidores públicos.' },
      { letter: 'C', text: 'Legítima por proteção absoluta do sigilo bancário, sem alteração automática do equilíbrio econômico-financeiro originalmente pactuado entre as partes.' },
      { letter: 'D', text: 'Sujeita a prazo inicial de resposta de 90 dias, com observância dos atributos de imperatividade e exigibilidade próprios da atuação estatal. Nessa situação, o ato administrativo produz efeitos imediatos até eventual revisão de ofício.' }
    ],
    correctAnswer: 'B',
    justification: `Art. 10, § 3º, da LAI veda exigir os motivos determinantes da solicitação, e o STF (Tema 483) validou a publicação nominal de salários dos servidores públicos.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. É proibido exigir justificativa.' },
      { letter: 'C', explanation: 'Incorreta. Não viola intimidade ou sigilo bancário.' },
      { letter: 'D', explanation: 'Incorreta. Prazo da LAI é imediato ou até 20 dias (+10).' }
    ],
    statuteReferences: [
      { code: 'Lei 12.527/2011', article: 'Art. 10, § 3º', textSnippet: 'São vedadas quaisquer exigências relativas aos motivos determinantes da solicitação...' }
    ],
    jurisprudence: 'STF - Tema 483.',
    professorTip: 'LAI: sem motivação + resposta em até 20 dias (+10) + remuneração nominal é pública!'
  }
];
