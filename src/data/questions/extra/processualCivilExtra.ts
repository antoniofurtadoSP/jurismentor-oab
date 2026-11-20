import { LegalQuestion } from '../../../types';

export const PROCESSUAL_CIVIL_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'pcv_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Tutela Provisória de Urgência Antecipada Antecedente (Estabilização)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Marina requereu tutela antecipada em caráter antecedente (Art. 303 do CPC) para compelir seu plano de saúde a autorizar cirurgia cardíaca imediata. O juiz concedeu a liminar determinando a cirurgia. O plano de saúde cumpriu a decisão e NÃO interpôs agravo de instrumento no prazo de 15 dias, limitando-se a protocolar uma contestação simples sem recorrer.
Nos termos do Art. 304 do CPC e da jurisprudência do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A tutela torna-se estável e o processo será extinto sem resolução do mérito, formando-se coisa julgada material definitiva imediatamente.' },
      { letter: 'B', text: 'A tutela antecipada torna-se estável (conservando seus efeitos enquanto não revista, reformada ou invalidada por ação própria), e o processo será extinto; qualquer das partes poderá demandar a outra com o intuito de rever, reformar ou invalidar a tutela estabilizada no prazo de 2 anos.' },
      { letter: 'C', text: 'A apresentação de contestação isolada impede a estabilização porque o STJ entende que contestar equivale a recorrer.' },
      { letter: 'D', text: 'O juiz deve prosseguir normalmente com a fase instrutória até a sentença de mérito.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o Art. 304 do CPC, a tutela antecipada concedida nos termos do Art. 303 torna-se ESTÁVEL se da decisão que a conceder não for interposto o respectivo recurso (agravo de instrumento), caso em que o processo será extinto sem formação de coisa julgada material (§ 6º), cabendo ação revisional/anulatória própria no prazo decadencial de 2 anos (§ 5º). (Nota: Embora haja debate entre turmas do STJ, a literalidade absoluta da FGV no Art. 304 exige interposição do respectivo recurso para obstar a estabilização, e nunca forma coisa julgada material — § 6º!).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O Art. 304, § 6º afirma expressamente que a decisão que concede a tutela estabilizada NÃO fará coisa julgada material.' },
      { letter: 'C', explanation: 'Incorreta. Para a prova objetiva da OAB/FGV, prevalece o texto expresso do Art. 304 caput ("não for interposto o respectivo recurso").' },
      { letter: 'D', explanation: 'Incorreta. Estabilizada a tutela, o processo é extinto (Art. 304, § 1º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 304, caput e §§ 1º, 5º e 6º', textSnippet: 'A tutela antecipada, concedida nos termos do art. 303, torna-se estável se da decisão que a conceder não for interposto o respectivo recurso... § 5º O direito de rever, reformar ou invalidar a tutela antecipada... extingue-se após 2 (dois) anos... § 6º A decisão que concede a tutela não fará coisa julgada.' }
    ],
    professorTip: 'Estabilização (Art. 304 CPC): SÓ se aplica à tutela ANTECIPADA ANTECEDENTE (não à cautelar!). Sem recurso -> estabiliza e extingue o processo! Prazo para ação revisional = 2 anos (não faz coisa julgada!).'
  },
  {
    id: 'pcv_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Agravo de Instrumento e Taxatividade Mitigada (Tema 988 STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Durante a fase de conhecimento pelo procedimento comum, o juiz proferiu decisão interlocutória: (I) rejeitando a alegação de incompetência absoluta; e (II) rejeitando a arguição de convenção de arbitragem.
À luz do Art. 1.015 do CPC e da tese fixada pelo STJ no Tema 988, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Ambas as decisões são irrecorríveis de imediato, só podendo ser impugnadas em apelação.' },
      { letter: 'B', text: 'A decisão que rejeita a alegação de convenção de arbitragem é expressamente agravável de instrumento (Art. 1.015, III); quanto à decisão sobre competência (não listada no Art. 1.015), o STJ fixou a tese da taxatividade mitigada, cabendo agravo de instrumento quando verificada a urgência decorrente da inutilidade do julgamento da questão no recurso de apelação.' },
      { letter: 'C', text: 'O rol do Art. 1.015 é absolutamente fechado e nunca admite agravo fora de suas hipóteses.' },
      { letter: 'D', text: 'Contra rejeição de convenção de arbitragem cabe recurso em sentido estrito.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 1.015, inciso III, prevê expressamente agravo de instrumento contra decisão que rejeita alegação de convenção de arbitragem. Quanto às demais hipóteses não listadas (como competência), o STJ (Tema 988) definiu que o rol do Art. 1.015 tem TAXATIVIDADE MITIGADA, admitindo agravo de instrumento quando houver urgência decorrente da inutilidade do julgamento futuro na apelação.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Rejeição de convenção de arbitragem está expressamente no Art. 1.015, III.' },
      { letter: 'C', explanation: 'Incorreta. O Tema 988 do STJ consolidou a taxatividade mitigada.' },
      { letter: 'D', explanation: 'Incorreta. Recurso em sentido estrito é do Processo Penal.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 1.015, III', textSnippet: 'Cabe agravo de instrumento contra as decisões interlocutórias que versarem sobre: ... III - rejeição da alegação de convenção de arbitragem;' }
    ],
    jurisprudence: 'STJ - Tema 988: O rol do art. 1.015 do CPC é de taxatividade mitigada, por isso admite a interposição de agravo de instrumento quando verificada a urgência decorrente da inutilidade do julgamento da questão no recurso de apelação.',
    professorTip: 'Agravo de Instrumento no Art. 1.015: cabe SEMPRE em liquidação/cumprimento de sentença, execução e inventário (parágrafo único!). Na fase de conhecimento: rol do Art. 1.015 + urgência (Tema 988 STJ)!'
  },
  {
    id: 'pcv_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Intervenção de Terceiros: IDPJ (Arts. 133 a 137 CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em fase de cumprimento de sentença cível, o exequente instaurou Incidente de Desconsideração da Personalidade Jurídica (IDPJ) requerendo a inclusão de dois sócios da executada por confusão patrimonial.
Segundo os Arts. 133 a 137 do CPC, sobre o processamento desse incidente é correto afirmar que:`,
    options: [
      { letter: 'A', text: 'O juiz pode incluir os sócios diretamente sem citá-los previamente para defesa.' },
      { letter: 'B', text: 'Instaurado o incidente, o processo principal será suspenso (salvo se requerido na petição inicial), o sócio ou a pessoa jurídica será citado para manifestar-se e requerer provas no prazo de 15 dias, e a decisão interlocutória que o resolve é impugnável por agravo de instrumento.' },
      { letter: 'C', text: 'O IDPJ é cabível apenas na fase de cumprimento de sentença, nunca no processo de conhecimento.' },
      { letter: 'D', text: 'Da decisão do juiz que acolhe ou rejeita o IDPJ não cabe recurso imediato.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 134, § 3º, do CPC, a instauração do incidente suspenderá o processo (salvo se requerida já na petição inicial - § 2º). Pelo Art. 135, o sócio/PJ será citado para se manifestar e requerer provas em 15 dias. E pelo Art. 1.015, IV, contra a decisão interlocutória do IDPJ cabe agravo de instrumento (ou agravo interno se decidida pelo relator em tribunal - Art. 136, parágrafo único).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Exige-se citação prévia para contraditório em 15 dias (Art. 135 CPC).' },
      { letter: 'C', explanation: 'Incorreta. Cabe em TODAS as fases do processo de conhecimento, no cumprimento de sentença e na execução de título extrajudicial (Art. 134 caput).' },
      { letter: 'D', explanation: 'Incorreta. Cabe agravo de instrumento expressamente previsto no Art. 1.015, IV do CPC.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 133 a 137 e 1.015, IV', textSnippet: 'Instaurado o incidente, o sócio ou a pessoa jurídica será citado para manifestar-se e requerer as provas cabíveis no prazo de 15 (quinze) dias.' }
    ],
    professorTip: 'IDPJ (Arts. 133-137 CPC): cabe em qualquer fase; suspende o processo (salvo se pedido na inicial); citação do sócio com prazo de 15 dias; recurso = Agravo de Instrumento!'
  },
  {
    id: 'pcv_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Contagem de Prazos Processuais e Feriados Locais',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sobre a contagem dos prazos processuais no CPC (Arts. 219, 224 e 1.003, § 6º, com a atualização da Lei nº 14.939/2024), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Todos os prazos processuais e materiais do CPC contam-se em dias corridos.' },
      { letter: 'B', text: 'Na contagem de prazo em dias estabelecido por lei ou pelo juiz, computar-se-ão somente os dias úteis; e caso o recorrente deixe de comprovar feriado local no ato da interposição do recurso, o tribunal determinará a correção do vício antes de considerar inadmissível o recurso.' },
      { letter: 'C', text: 'A falta de comprovação de feriado local no ato da interposição gera inadmissibilidade imediata sem possibilidade de intimação para sanar.' },
      { letter: 'D', text: 'O prazo em dias úteis aplica-se também aos prazos prescricionais e decadenciais do Código Civil.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 219 do CPC fixa a contagem em DIAS ÚTEIS apenas para prazos processuais (excluindo prazos de direito material como prescrição/decadência). E atenção à importantíssima atualização da Lei nº 14.939/2024 no Art. 1.003, § 6º, do CPC: se o recorrente não comprovar feriado local na interposição, o tribunal DEVERÁ determinar a correção do vício (ou o desconsiderará caso já conste no processo eletrônico), superando a antiga jurisprudência restritiva!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Prazos processuais em dias contam-se apenas em dias úteis (Art. 219 CPC).' },
      { letter: 'C', explanation: 'Incorreta. A Lei nº 14.939/2024 alterou o Art. 1.003, § 6º do CPC para garantir o dever de intimação prévia para comprovar o feriado local.' },
      { letter: 'D', explanation: 'Incorreta. Prazos materiais (prescrição e decadência) contam-se em dias corridos (Art. 219, parágrafo único).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 219 e Art. 1.003, § 6º (Lei 14.939/2024)', textSnippet: 'Na contagem de prazo em dias, estabelecido por lei ou pelo juiz, computar-se-ão somente os dias úteis.' }
    ],
    professorTip: 'Novidade quente (Lei 14.939/2024): Feriado local esquecido na interposição do recurso NÃO gera mais inadmissão automática — o tribunal deve abrir prazo para o advogado comprovar (Art. 1.003, § 6º CPC)!'
  },
  {
    id: 'pcv_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Audiência de Conciliação/Mediação e Sanção por Ausência',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em ação de cobrança pelo procedimento comum sobre direito disponível, o autor declarou na petição inicial que NÃO tinha interesse na audiência de conciliação. O réu, porém, não se manifestou previamente pela dispensa. Mesmo assim, o autor não compareceu injustificadamente à audiência designada pelo juízo.
Nos termos do Art. 334, §§ 4º e 8º, do CPC, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A audiência não deveria ter ocorrido porque bastava a recusa do autor na inicial.' },
      { letter: 'B', text: 'A audiência de conciliação só é dispensada quando AMBAS as partes manifestarem expressamente desinteresse; logo, o não comparecimento injustificado do autor constitui ato atentatório à dignidade da justiça e será sancionado com multa de até 2% da vantagem econômica pretendida ou do valor da causa, revertida em favor da União ou do Estado.' },
      { letter: 'C', text: 'A ausência injustificada do autor acarreta a extinção imediata do processo sem resolução do mérito.' },
      { letter: 'D', text: 'A multa pelo não comparecimento reverte-se em favor da parte contrária.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 334, § 4º, I, do CPC determina que a audiência só não se realiza se AMBAS as partes manifestarem expressamente desinteresse (ou se não se admitir autocomposição). A ausência injustificada de qualquer das partes (Art. 334, § 8º) é ato atentatório à dignidade da justiça, sancionado com multa de até 2% da vantagem econômica pretendida ou do valor da causa, revertida em favor da UNIÃO ou do ESTADO.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Na ausência de manifestação do réu (até 10 dias antes), a audiência ocorre normalmente.' },
      { letter: 'C', explanation: 'Incorreta. A ausência no rito comum gera multa de até 2% (e não extinção do processo — atenção: nos Juizados Especiais Lei 9.099/95, Art. 51, I, aí sim a ausência do autor extingue o processo!).' },
      { letter: 'D', explanation: 'Incorreta. A multa do Art. 334, § 8º reverte para a União ou para o Estado (e não para a parte contrária).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 334, §§ 4º e 8º', textSnippet: 'O não comparecimento injustificado do autor ou do réu à audiência de conciliação é considerado ato atentatório à dignidade da justiça e será sancionado com multa de até dois por cento da vantagem econômica pretendida ou do valor da causa, revertida em favor da União ou do Estado.' }
    ],
    professorTip: 'Diferença crucial FGV: No rito comum (CPC), falta injustificada na audiência = multa de até 2% para a União/Estado. No JEC (Lei 9.099/95), falta do autor = extinção + custas; falta do réu = revelia!'
  },
  {
    id: 'pcv_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Reconvenção e Litisconsórcio com Terceiro',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Ao apresentar contestação em ação indenizatória proposta por Bruno, o réu Carlos pretende formular pedido reconvencional tanto contra Bruno quanto em litisconsórcio passivo com um terceiro estranho ao processo (um fiador de Bruno). Além disso, indaga se pode reconvir mesmo sem apresentar contestação.
Nos termos do Art. 343 do CPC, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A reconvenção deve ser apresentada em peça autônoma separada e nunca pode incluir terceiro estranho à lide.' },
      { letter: 'B', text: 'A reconvenção é proposta na própria contestação, pode ser deduzida contra o autor e terceiro, e o réu pode propor reconvenção independentemente de oferecer contestação.' },
      { letter: 'C', text: 'A desistência da ação principal pelo autor extingue automaticamente a reconvenção.' },
      { letter: 'D', text: 'Se o autor for substituto processual, não cabe reconvenção em nenhuma hipótese.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 343 do CPC modernizou a reconvenção: apresenta-se na própria contestação; permite ampliar o polo passivo ou ativo com terceiro (§§ 3º e 4º); independe de oferecimento de contestação (§ 6º); e a desistência da ação ou causa extintiva que impeça o exame de seu mérito NÃO obsta o prosseguimento do processo quanto à reconvenção (§ 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Hoje é na própria contestação e admite terceiro (Art. 343, §§ 3º e 4º).' },
      { letter: 'C', explanation: 'Incorreta. A reconvenção é ação autônoma incidental e prossegue mesmo se o autor desistir da ação principal (§ 2º).' },
      { letter: 'D', explanation: 'Incorreta. Cabe reconvenção contra o substituto processual se o reconvinte afirmar ser titular de direito em face do substituído (§ 5º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 343, §§ 2º, 3º e 6º', textSnippet: 'A reconvenção pode ser proposta contra o autor e terceiro... § 6º O réu pode propor reconvenção independentemente de oferecer contestação.' }
    ],
    professorTip: 'Reconvenção no CPC: 1) dentro da própria contestação; 2) pode incluir terceiro; 3) pode reconvir mesmo sem contestar; 4) desistência da principal NÃO extingue a reconvenção!'
  },
  {
    id: 'pcv_ext_07',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Julgamento Antecipado Parcial do Mérito e Recurso Cabível',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em uma única petição inicial, a autora formulou dois pedidos cumulativos: (1) restituição de quantia incontroversa de R$ 50.000,00 (já confessada pelo réu na contestação); e (2) indenização por danos morais (que ainda exige prova testemunhal). O juiz decidiu julgar desde já procedente o primeiro pedido (R$ 50.000,00) e determinou instrução probatória para o segundo pedido.
Nos termos do Art. 356 do CPC, essa decisão do juiz é impugnável por:`,
    options: [
      { letter: 'A', text: 'Apelação imediata.' },
      { letter: 'B', text: 'Agravo de instrumento (Art. 356, § 5º e Art. 1.015, II, do CPC).' },
      { letter: 'C', text: 'Agravo interno.' },
      { letter: 'D', text: 'Correição parcial.' }
    ],
    correctAnswer: 'B',
    justification: `O julgamento antecipado PARCIAL do mérito (Art. 356 do CPC) ocorre quando um dos pedidos (ou parcela dele) mostra-se incontroverso ou pronto para julgamento enquanto outro demanda instrução. Como o processo continua para o pedido remanescente, a decisão tem natureza interlocutória de mérito e é impugnável por AGRAVO DE INSTRUMENTO (Art. 356, § 5º e Art. 1.015, II, do CPC), admitindo inclusive execução definitiva se transitar em julgado.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Apelação cabe apenas de sentença que põe fim à fase cognitiva ou extingue a execução (Art. 1.009).' },
      { letter: 'C', explanation: 'Incorreta. Agravo interno impugna decisão monocrática de relator em tribunal.' },
      { letter: 'D', explanation: 'Incorreta. Existe previsão recursal expressa no Art. 356, § 5º do CPC.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 356, § 5º', textSnippet: 'A decisão proferida com base neste artigo é impugnável por agravo de instrumento.' }
    ],
    professorTip: 'Decisão parcial de mérito (Art. 356 CPC) = NÃO é sentença, é interlocutória de mérito! Recurso = Agravo de Instrumento (15 dias), faz coisa julgada material e gera honorários!'
  },
  {
    id: 'pcv_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Coisa Julgada sobre Questão Prejudicial Incidental',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `No CPC/2015, além do dispositivo da sentença quanto ao pedido principal, é possível que a resolução de questão prejudicial decidida expressa e incidentemente no processo passe a fazer coisa julgada material (Art. 503, § 1º).
Para que a questão prejudicial se torne indiscutível pela coisa julgada, exige-se cumulativamente que:`,
    options: [
      { letter: 'A', text: 'Baste que tenha sido mencionada na fundamentação, mesmo à revelia do réu.' },
      { letter: 'B', text: 'Da resolução dependa o julgamento do mérito; a seu respeito tenha havido contraditório prévio e efetivo (não se aplicando no caso de revelia); e o juízo tenha competência em razão da matéria e da pessoa para resolvê-la como questão principal.' },
      { letter: 'C', text: 'Tenha sido formulada ação declaratória incidental autônoma, obrigatoriamente.' },
      { letter: 'D', text: 'Haja concordância expressa do Ministério Público em causas privadas.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 503, § 1º, do CPC aboliu a antiga ação declaratória incidental e passou a estender a coisa julgada à questão prejudicial expressamente decidida se preenchidos 3 requisitos cumulativos (e ausentes restrições probatórias do § 2º): I - dela depender o julgamento do mérito; II - houver contraditório prévio e efetivo (NÃO se aplicando em caso de revelia!); III - o juízo tiver competência em razão da matéria e da pessoa para resolvê-la como questão principal.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A revelia impede expressamente a formação de coisa julgada sobre questão prejudicial (Art. 503, § 1º, II).' },
      { letter: 'C', explanation: 'Incorreta. O CPC/2015 eliminou a necessidade de ação declaratória incidental.' },
      { letter: 'D', explanation: 'Incorreta. Não há essa exigência legal.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 503, § 1º', textSnippet: 'O disposto no caput aplica-se à resolução de questão prejudicial, decidida expressa e incidentemente no processo, se: I - dessa resolução depender o julgamento do mérito; II - a seu respeito tiver havido contraditório prévio e efetivo, não se aplicando no caso de revelia; III - o juízo tiver competência em razão da matéria e da pessoa para resolvê-la como questão principal.' }
    ],
    professorTip: 'Coisa julgada na questão prejudicial (Art. 503, § 1º CPC): 1) depender o mérito; 2) contraditório efetivo (NUNCA na revelia!); 3) competência material e pessoal do juiz; 4) sem restrição probatória (§ 2º).'
  },
  {
    id: 'pcv_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Embargos de Declaração e Efeito Interruptivo',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Publicada a sentença no Diário da Justiça, o advogado da parte autora identificou clara omissão sobre um dos pedidos formulados e opôs embargos de declaração no 4º dia útil do prazo de 5 dias.
Sobre os embargos de declaração no CPC (Arts. 1.022 a 1.026), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Os embargos de declaração suspendem o prazo para apelação, contando-se apenas o dia restante após o julgamento.' },
      { letter: 'B', text: 'Os embargos de declaração possuem prazo de 5 dias úteis, não estão sujeitos a preparo, e interrompem o prazo para a interposição de recurso por qualquer das partes.' },
      { letter: 'C', text: 'Só interrompem o prazo para a própria parte que os opôs.' },
      { letter: 'D', text: 'Mesmo se os embargos tiverem efeito modificativo (infringente), dispensa-se intimação do embargado.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo os Arts. 1.023 e 1.026 do CPC, os embargos de declaração são opostos no prazo de 5 dias úteis, independem de preparo e INTERROMPEM (zeram!) o prazo para a interposição de recurso por AMBAS as partes (salvo se intempestivos). Além disso, havendo possibilidade de efeito modificativo, é obrigatória a intimação do embargado para manifestar-se em 5 dias (Art. 1.023, § 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Eles INTERROMPEM (recomeça do zero o prazo de 15 dias da apelação), e não apenas suspendem.' },
      { letter: 'C', explanation: 'Incorreta. A interrupção aproveita a todas as partes (Art. 1.026 caput).' },
      { letter: 'D', explanation: 'Incorreta. Efeito infringente/modificativo exige intimação prévia do embargado em 5 dias (Art. 1.023, § 2º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 1.023 e 1.026', textSnippet: 'Os embargos de declaração não possuem efeito suspensivo e interrompem o prazo para a interposição de recurso.' }
    ],
    professorTip: 'Embargos de Declaração: 5 dias úteis; SEM preparo; INTERROMPEM (zeram!) o prazo para TODOS! (Cuidado: no JEC Lei 9.099/95, com o CPC/15 também passou a INTERROMPER, Art. 50 da Lei 9.099 alterado pelo CPC!).'
  },
  {
    id: 'pcv_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Honorários Sucumbenciais Recursais (Art. 85, § 11, CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em ação cível de cobrança, o réu foi condenado em 1º grau ao pagamento da dívida e de honorários advocatícios fixados em 12% sobre o valor da condenação. Inconformado, o réu interpôs apelação buscando a reforma integral da sentença, mas o Tribunal de Justiça negou provimento ao recurso por unanimidade.
Nos termos do Art. 85, § 11, do CPC e da jurisprudência do STJ (Tema 1059), o tribunal:`,
    options: [
      { letter: 'A', text: 'Não pode majorar os honorários na fase recursal se o advogado do apelado não apresentou pedido expresso.' },
      { letter: 'B', text: 'Ao julgar o recurso desprovido, majorará os honorários fixados anteriormente levando em conta o trabalho adicional realizado em grau recursal, respeitado o limite máximo total de 20% na fase de conhecimento.' },
      { letter: 'C', text: 'Pode elevar os honorários sucumbenciais para 30% somados em razão do recurso protelatório.' },
      { letter: 'D', text: 'Só pode majorar honorários se o recurso tiver sido provido.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 85, § 11, do CPC impõe ao tribunal majorar os honorários fixados anteriormente (de ofício, mesmo sem pedido!) quando o recurso não é conhecido integralmente ou é desprovido (conforme Tema 1059 STJ), respeitados os limites de 10% a 20% na fase de conhecimento (Art. 85, §§ 2º e 3º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A majoração recursal é dever legal do tribunal, aplicável de ofício.' },
      { letter: 'C', explanation: 'Incorreta. O teto global na fase de conhecimento é de 20%.' },
      { letter: 'D', explanation: 'Incorreta. A majoração ocorre quando o recorrente perde o recurso (inadmissão ou desprovimento integral, conforme Tema 1059 STJ).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 85, § 11', textSnippet: 'O tribunal, ao julgar recurso, majorará os honorários fixados anteriormente levando em conta o trabalho adicional realizado em grau recursal...' }
    ],
    jurisprudence: 'STJ - Tema 1059: A majoração dos honorários de sucumbência prevista no art. 85, § 11, do CPC pressupõe que o recurso tenha sido integralmente desprovido ou não conhecido.',
    professorTip: 'Honorários recursais (Art. 85, § 11 CPC): só quando o recorrente perde tudo (não conhecido ou desprovido integralmente), respeitando teto de 20% (e se não houve honorários na origem — ex: MS — não cabe majoração recursal, Súmula 512 STF / Art. 25 LMS!).'
  },
  {
    id: 'pcv_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Cumprimento de Sentença e Multa de 10% (Art. 523 CPC)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Transitada em julgado sentença condenatória de quantia certa (R$ 80.000,00), o exequente apresentou requerimento de cumprimento definitivo de sentença. O devedor foi regularmente intimado na pessoa de seu advogado pelo Diário da Justiça para pagar em 15 dias úteis, mas permaneceu inerte sem efetuar o depósito nem garantir o juízo.
Nos termos do Art. 523, § 1º, do CPC, transcorrido o prazo de 15 dias sem pagamento voluntário:`,
    options: [
      { letter: 'A', text: 'O débito será acrescido de multa de 10% e, também, de honorários de advogado de 10%.' },
      { letter: 'B', text: 'Aplica-se apenas multa de 10%, sendo vedados novos honorários nessa fase.' },
      { letter: 'C', text: 'Inicia-se novo prazo de 15 dias úteis para impugnação apenas após a penhora de bens.' },
      { letter: 'D', text: 'A multa pelo não pagamento em cumprimento de sentença é de 20%.' }
    ],
    correctAnswer: 'A',
    justification: `O Art. 523, § 1º, do CPC é claríssimo: não ocorrendo pagamento voluntário no prazo de 15 dias (úteis), o débito será acrescido de MULTA DE 10% e, também, de HONORÁRIOS DE ADVOGADO DE 10%. Em seguida, inicia-se automaticamente (independentemente de penhora ou nova intimação!) o prazo de 15 dias úteis para o executado apresentar impugnação (Art. 525).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Incidem cumulativamente multa de 10% + honorários de 10%.' },
      { letter: 'C', explanation: 'Incorreta. Pelo Art. 525 do CPC, o prazo de 15 dias para impugnação inicia-se automaticamente após o término dos 15 dias de pagamento voluntário, sem depender de garantia do juízo ou penhora.' },
      { letter: 'D', explanation: 'Incorreta. A multa é de 10% (+ 10% de honorários).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 523, § 1º e 525', textSnippet: 'Não ocorrendo pagamento voluntário no prazo do caput, o débito será acrescido de multa de dez por cento e, também, de honorários de advogado de dez por cento.' }
    ],
    professorTip: 'Cumprimento de sentença: 15 dias úteis para pagar -> não pagou = +10% multa +10% honorários -> correm mais 15 dias úteis automaticamente para impugnação (SEM precisar garantir juízo!).'
  },
  {
    id: 'pcv_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Penhora de Salário para Dívida Não Alimentar (STJ)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um credor comum de nota promissória (dívida não alimentar) requereu em execução a penhora de 15% dos vencimentos líquidos de um devedor que ganha mensalmente valor modesto próximo ao salário mínimo, alegando que toda renda admite penhora parcial.
Considerando o Art. 833, IV e § 2º, do CPC e a jurisprudência atual da Corte Especial do STJ (EREsp 1.582.475 e EREsp 1.874.222), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Salários são absolutamente impenhoráveis em qualquer circunstância, mesmo para pensão alimentícia.' },
      { letter: 'B', text: 'Embora o Art. 833, § 2º permita exceção expressa à impenhorabilidade salarial para pagamento de prestação alimentícia e importâncias excedentes a 50 salários mínimos mensais, a Corte Especial do STJ admite excepcionalmente a mitigação da impenhorabilidade salarial também para dívidas não alimentares, desde que preservada a subsistência digna do devedor e de sua família — o que veda a penhora sobre renda próxima ao mínimo vital.' },
      { letter: 'C', text: 'Para dívidas não alimentares, o limite automático é sempre 30% de qualquer salário.' },
      { letter: 'D', text: 'A poupança de até 40 salários mínimos não goza de proteção legal de impenhorabilidade.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 833, IV e § 2º, do CPC, os salários são em regra impenhoráveis, exceto para prestação alimentícia e ganhos acima de 50 salários mínimos mensais. Contudo, a Corte Especial do STJ flexibilizou a regra excepcionalmente para dívidas não alimentares somente quando preservado percentual capaz de assegurar a dignidade e subsistência do devedor e família (inviável quando a remuneração está próxima ao mínimo existencial).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Prestação alimentícia (até 50% líquidos) e ganhos superiores a 50 salários mínimos são exceções literais do Art. 833, § 2º.' },
      { letter: 'C', explanation: 'Incorreta. Não há percentual automático de 30%; a regra legal continua sendo a impenhorabilidade com mitigação excepcional condicionada à dignidade.' },
      { letter: 'D', explanation: 'Incorreta. O Art. 833, X do CPC protege expressamente quantia depositada em caderneta de poupança (e, segundo o STJ, em conta-corrente/aplicações até o limite global de 40 salários mínimos).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 833, IV, X e § 2º', textSnippet: 'O disposto nos incisos IV e X do caput não se aplica à hipótese de penhora para pagamento de prestação alimentícia, independentemente de sua origem, bem como às importâncias excedentes a 50 (cinquenta) salários-mínimos mensais...' }
    ],
    jurisprudence: 'STJ - EREsp 1.874.222: Mitigação excepcional da impenhorabilidade de salários exige preservação do mínimo existencial e dignidade do devedor.',
    professorTip: 'Art. 833 CPC: Impenhorável salário (IV) e reserva até 40 salários mínimos (X). Exceções legais: alimentos e excedente a 50 SM (e mitigação excepcional no STJ garantindo mínimo digno).'
  },
  {
    id: 'pcv_ext_13',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Ação Rescisória e Prazo Decadencial (Art. 975 CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um acórdão condenatório transitou em julgado em 10 de maio de 2023. Em abril de 2025, a parte vencida descobriu documento novo, cuja existência ignorava ou de que não pôde fazer uso na época do processo, capaz de assegurar-lhe pronunciamento favorável.
À luz dos Arts. 966 e 975 do CPC sobre Ação Rescisória, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O prazo da ação rescisória é sempre de 2 anos improrrogáveis contados do primeiro dia de trânsito em julgado, sem exceção.' },
      { letter: 'B', text: 'Regra geral, o direito à rescisão extingue-se em 2 anos contados do trânsito em julgado da última decisão proferida no processo; contudo, se fundada em prova nova, o termo inicial será a data de descoberta da prova nova, observado o prazo máximo de 5 anos contados do trânsito em julgado.' },
      { letter: 'C', text: 'Não cabe ação rescisória com base em prova nova no CPC/2015.' },
      { letter: 'D', text: 'O depósito prévio obrigatório da ação rescisória é de 10% sobre o valor da causa.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 975, caput e § 2º, do CPC traz a regra de ouro: prazo geral de 2 anos do trânsito em julgado da última decisão; MAS se fundada em PROVA NOVA (Art. 966, VII), o termo inicial passa a ser a data de DESCOBERTA da prova nova, limitado ao teto máximo de 5 anos do trânsito em julgado! Além disso, o depósito prévio é de 5% sobre o valor da causa (Art. 968, II), limitado a 1.000 salários mínimos.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Há exceções expressas no Art. 975, §§ 1º a 3º (prorrogação até o 1º dia útil seguinte se recair em recesso/férias, prova nova até 5 anos, simulação/colusão da ciência do terceiro).' },
      { letter: 'C', explanation: 'Incorreta. Prova nova é hipótese expressa do Art. 966, VII do CPC (ampliado em relação ao antigo "documento novo").' },
      { letter: 'D', explanation: 'Incorreta. O depósito da ação rescisória é de 5% (cinco por cento) sobre o valor da causa (dispensado para Fazenda Pública, MP, Defensoria e beneficiário de gratuidade).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 966, VII e Art. 975, § 2º', textSnippet: 'Se fundada a ação no inciso VII do art. 966, o termo inicial do prazo será a data de descoberta da prova nova, observado o prazo máximo de 5 (cinco) anos, contado do trânsito em julgado da última decisão proferida no processo.' }
    ],
    professorTip: 'Ação Rescisória: Prazo geral = 2 anos (última decisão); Prova Nova = 2 anos da DESCOBERTA, até máximo de 5 anos do trânsito! Depósito prévio = 5%!'
  },
  {
    id: 'pcv_ext_14',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Juizados Especiais Cíveis (Lei nº 9.099/95)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Pedro ajuizou ação indenizatória no Juizado Especial Cível estadual no valor de 18 salários mínimos, sem advogado. Na audiência de instrução, o juiz proferiu sentença julgando o pedido improcedente. Pedro deseja recorrer à Turma Recursal.
Considerando a Lei nº 9.099/95, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Como a causa é inferior a 20 salários mínimos, Pedro pode interpor recurso inominado sozinho, sem advogado.' },
      { letter: 'B', text: 'Em primeiro grau, até 20 salários mínimos a assistência por advogado é facultativa; porém, no recurso inominado (prazo de 10 dias), a assistência por advogado é sempre obrigatória, independentemente do valor da causa.' },
      { letter: 'C', text: 'O recurso cabível contra sentença do JEC é a apelação no prazo de 15 dias úteis.' },
      { letter: 'D', text: 'A sentença do JEC pode ser impugnada por Recurso Especial ao STJ.' }
    ],
    correctAnswer: 'B',
    justification: `Na Lei nº 9.099/95: Art. 9º dispensa advogado apenas em 1º grau nas causas até 20 salários mínimos (entre 20 e 40 SM é obrigatório desde o início). Já no recurso (Recurso Inominado, prazo de 10 dias úteis, Art. 42), as partes serão OBRIGATORIAMENTE representadas por advogado (Art. 41, § 2º). E conforme a Súmula 203 do STJ, não cabe Recurso Especial contra decisão de Turma Recursal.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O Art. 41, § 2º da Lei 9.099/95 exige advogado obrigatoriamente no recurso.' },
      { letter: 'C', explanation: 'Incorreta. O recurso no JEC é o Recurso Inominado no prazo de 10 dias (úteis pela Lei 13.728/18).' },
      { letter: 'D', explanation: 'Incorreta. Súmula 203 do STJ: não cabe REsp contra decisão de Turma Recursal de Juizado Especial (apenas Recurso Extraordinário ao STF se houver matéria constitucional).' }
    ],
    statuteReferences: [
      { code: 'Lei 9.099/95', article: 'Arts. 9º, 41, § 2º e 42', textSnippet: 'No recurso, as partes serão obrigatoriamente representadas por advogado.' }
    ],
    jurisprudence: 'Súmula 203 do STJ.',
    professorTip: 'JEC Estadual: Teto = 40 SM; até 20 SM dispensa advogado em 1º grau; Recurso Inominado = 10 dias úteis e EXIGE advogado; NÃO cabe REsp ao STJ!'
  },
  {
    id: 'pcv_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Negócios Jurídicos Processuais Atípicos (Art. 190 CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Em contrato empresarial paritário celebrado entre duas grandes empresas capazes, as partes inseriram cláusula estabelecendo que, em eventual litígio judicial, os prazos processuais para réplica e memoriais seriam ampliados para 20 dias úteis e seria dispensada a audiência inicial de conciliação.
Nos termos do Art. 190 do Código de Processo Civil, essa cláusula é:`,
    options: [
      { letter: 'A', text: 'Nula, porque normas processuais são sempre cogentes e indisponíveis.' },
      { letter: 'B', text: 'Válida, pois versando o processo sobre direitos que admitam autocomposição, é lícito às partes plenamente capazes estipular mudanças no procedimento para ajustá-lo às especificidades da causa e convencionar sobre seus ônus, poderes, faculdades e deveres processuais.' },
      { letter: 'C', text: 'Válida somente se homologada previamente pelo Ministério Público.' },
      { letter: 'D', text: 'Válida apenas para mudar o foro competente, jamais prazos ou procedimento.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 190 do CPC consagra a cláusula geral dos negócios jurídicos processuais atípicos: em causas sobre direitos que admitam autocomposição, partes plenamente capazes podem ajustar mudanças procedimentais, ônus e prazos disponíveis antes ou durante o processo, cabendo ao juiz controlar apenas a validade (recusando em nulidade ou inserção abusiva em contrato de adesão/vulnerabilidade).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O CPC/2015 ampliou a autonomia privada das partes no processo (modelo cooperativo).' },
      { letter: 'C', explanation: 'Incorreta. Não depende de homologação pelo MP.' },
      { letter: 'D', explanation: 'Incorreta. Abrange mudanças amplas no procedimento, ônus probatórios e faculdades processuais.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 190', textSnippet: 'Versando o processo sobre direitos que admitam autocomposição, é lícito às partes plenamente capazes estipular mudanças no procedimento para ajustá-lo às especificidades da causa e convencionar sobre os seus ônus, poderes, faculdades e deveres processuais, antes ou durante o processo.' }
    ],
    professorTip: 'Negócio Processual (Art. 190 CPC): Direitos que admitem autocomposição + partes capazes. O juiz controla nulidade e vulnerabilidade/contrato de adesão (não pode pactuar contra poderes de ordem pública do juiz como segredo de justiça ou incompetência absoluta!).'
  },
  {
    id: 'pcv_ext_16',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Ônus da Prova e Distribuição Dinâmica (Art. 373 CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Em ação judicial de responsabilidade civil médica contra um hospital privado, a autora (paciente) encontra extrema dificuldade técnica para produzir prova sobre o protocolo interno da sala cirúrgica no momento da infecção, enquanto o hospital detém prontuários eletrônicos completos e registros de esterilização.
À luz do Art. 373, § 1º, do CPC, o juiz poderá:`,
    options: [
      { letter: 'A', text: 'Julgar improcedente o pedido na sentença por falta de prova da autora, sem avisar antes.' },
      { letter: 'B', text: 'Aplicar a distribuição dinâmica do ônus da prova em decisão fundamentada (antes da instrução), atribuindo o ônus ao hospital que tem maior facilidade de obtenção da prova do fato contrário, assegurando-lhe oportunidade de se desincumbir do ônus.' },
      { letter: 'C', text: 'Inverter o ônus da prova somente na sentença de mérito, de surpresa.' },
      { letter: 'D', text: 'Proibir a inversão do ônus da prova fora do Código de Defesa do Consumidor.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 373, § 1º, do CPC consagrou a distribuição dinâmica do ônus da prova por decisão fundamentada, diante de peculiaridades da causa relacionadas à impossibilidade/excessiva dificuldade de cumprir o encargo ou à maior facilidade de obtenção da prova do fato contrário — sempre garantindo à parte oportunidade de se desincumbir do ônus que lhe foi atribuído (regra de instrução, nunca na sentença de surpresa!).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A distribuição dinâmica existe exatamente para evitar decisões injustas por impossibilidade probatória.' },
      { letter: 'C', explanation: 'Incorreta. Inverter na sentença viola o contraditório e a parte final do Art. 373, § 1º ("dará à parte a oportunidade de se desincumbir do ônus").' },
      { letter: 'D', explanation: 'Incorreta. O CPC/2015 trouxe a teoria dinâmica para todo processo civil.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 373, § 1º', textSnippet: 'poderá o juiz atribuir o ônus da prova de modo diverso, desde que o faça por decisão fundamentada, caso em que deverá dar à parte a oportunidade de se desincumbir do ônus que lhe foi atribuído.' }
    ],
    professorTip: 'Distribuição dinâmica (Art. 373 § 1º CPC): é regra de INSTRUÇÃO (decidida no saneamento antes das provas, nunca de surpresa na sentença) e NÃO pode gerar prova diabólica ao adversário!'
  },
  {
    id: 'pcv_ext_17',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Produção Antecipada de Provas (Art. 381 CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Uma construtora deseja realizar perícia judicial de engenharia para documentar o estado atual de um muro vizinho antes do início de escavações, mesmo sem haver urgência de desabamento imediato, apenas para evitar futuro litígio ou viabilizar eventual acordo extrajudicial.
Nos termos do Art. 381 do CPC, esse requerimento de produção antecipada de provas:`,
    options: [
      { letter: 'A', text: 'Deve ser indeferido porque exige obrigatoriamente risco de perecimento imediato (urgência).' },
      { letter: 'B', text: 'É plenamente cabível independentemente de urgência, quando a prova a ser produzida seja suscetível de viabilizar a autocomposição ou quando o prévio conhecimento dos fatos possa justificar ou evitar o ajuizamento de ação.' },
      { letter: 'C', text: 'Previne obrigatoriamente a competência do juízo para eventual ação principal futura.' },
      { letter: 'D', text: 'Permite ampla discussão e julgamento do mérito da responsabilidade civil na própria sentença.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 381 do CPC ampliou o cabimento da Produção Antecipada de Provas para além da urgência (inciso I), admitindo-a também sem urgência quando: II - a prova possa viabilizar autocomposição ou outro meio adequado de solução de conflito; III - o prévio conhecimento dos fatos possa justificar ou evitar o ajuizamento de ação. E pelo § 3º, NÃO previne a competência do juízo para a ação futura!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Os incisos II e III do Art. 381 dispensam urgência.' },
      { letter: 'C', explanation: 'Incorreta. O Art. 381, § 3º dispõe expressamente que a produção antecipada NÃO previne a competência do juízo para a ação que vier a ser proposta.' },
      { letter: 'D', explanation: 'Incorreta. O juiz não se pronunciará sobre a ocorrência ou inocorrência do fato nem sobre suas consequências jurídicas (Art. 382, § 2º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 381 e 382', textSnippet: '§ 3º A produção antecipada da prova não previne a competência do juízo para a ação que venha a ser proposta.' }
    ],
    professorTip: 'Produção Antecipada de Provas (Art. 381 CPC): cabe SEM urgência (acordo / evitar ação); NÃO previne o juízo; NÃO julga o mérito dos fatos; e NÃO admite defesa ou recurso contra produção (salvo indeferimento total - Art. 382, § 4º)!'
  },
  {
    id: 'pcv_ext_18',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Ação Monitória (Arts. 700 a 702 CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Paula possui um cheque prescrito há mais de um ano (que perdeu a força executiva cambial), emitido por Marcos no valor de R$ 25.000,00. Para cobrar a dívida de forma célere, Paula pretende ajuizar ação monitória.
De acordo com os Arts. 700 a 702 do CPC e a Súmula 531 do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Cheque prescrito não serve como prova escrita para instruir ação monitória.' },
      { letter: 'B', text: 'Em ação monitória fundada em cheque prescrito, dispensa-se que Paula mencione o negócio jurídico subjacente; citado, Marcos tem 15 dias para pagar (com isenção de custas processuais e honorários de 5%) ou opor embargos monitórios.' },
      { letter: 'C', text: 'Os embargos monitórios exigem garantia prévia do juízo mediante penhora.' },
      { letter: 'D', text: 'A ação monitória só serve para cobrança de quantia em dinheiro, não cabendo para entrega de coisa.' }
    ],
    correctAnswer: 'B',
    justification: `Pela Súmula 531 do STJ, em ação monitória fundada em cheque prescrito ajuizada contra o emitente, é dispensável a menção ao negócio jurídico subjacente à emissão da cártula. Citado o réu, tem 15 dias para cumprir (ficando isento de custas processuais e pagando honorários de 5% - Art. 701, § 1º) ou opor embargos monitórios, independentemente de prévia segurança do juízo (Art. 702).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Súmulas 299 e 531 do STJ consagram o cheque prescrito como documento hábil para monitória.' },
      { letter: 'C', explanation: 'Incorreta. Embargos monitórios independem de prévia segurança do juízo (Art. 702 caput).' },
      { letter: 'D', explanation: 'Incorreta. Cabe monitória para pagamento de quantia, entrega de coisa fungível/infungível ou bem móvel/imóvel, e adimplemento de obrigação de fazer/não fazer (Art. 700).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 700 a 702', textSnippet: 'A ação monitória pode ser proposta por aquele que afirmar, com base em prova escrita sem eficácia de título executivo, ter direito de exigir do devedor capaz...' }
    ],
    jurisprudence: 'Súmula 531 do STJ: Em ação monitória fundada em cheque prescrito ajuizada contra o emitente, é dispensável a menção ao negócio jurídico subjacente à emissão da cártula.',
    professorTip: 'Monitória: se o réu pagar nos 15 dias -> ISENTO de custas e honorários reduzidos para 5%! Se embargar -> não precisa garantir o juízo!'
  },
  {
    id: 'pcv_ext_19',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Incidente de Resolução de Demandas Repetitivas (IRDR)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Diante de dezenas de processos idênticos tramitando em varas cíveis de determinado Estado discutindo exclusivamente a mesma questão unicamente de direito com decisões conflitantes, um juiz de 1º grau enviou ofício ao Presidente do Tribunal de Justiça requerendo a instauração de Incidente de Resolução de Demandas Repetitivas (IRDR).
De acordo com os Arts. 976 a 987 do CPC, sobre o IRDR assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Somente as partes do processo podem pedir a instauração do IRDR.' },
      { letter: 'B', text: 'O juiz ou relator pode requerer por ofício a instauração do IRDR ao presidente do tribunal; contudo, é incabível o IRDR quando um dos tribunais superiores (STF ou STJ), no âmbito de sua respectiva competência, já tiver afetado recurso para definição de tese sobre questão de direito material ou processual repetitiva.' },
      { letter: 'C', text: 'O IRDR admite instauração para resolver controvérsia exclusivamente sobre matéria de fato.' },
      { letter: 'D', text: 'A desistência do recurso que originou o incidente impede o exame do mérito da tese pelo tribunal.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 977 do CPC, podem pedir a instauração do IRDR: I - juiz ou relator, por ofício; II - partes, por petição; III - MP ou Defensoria Pública, por petição. Exige-se questão UNICAMENTE de direito (Art. 976, I) + risco à isonomia/segurança jurídica (II), sendo incabível quando STF ou STJ já tiver afetado recurso repetitivo sobre a matéria (Art. 976, § 4º). A desistência ou abandono não impede o exame do mérito do incidente (Art. 976, § 1º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Juiz/relator, partes, MP e Defensoria são legitimados (Art. 977).' },
      { letter: 'C', explanation: 'Incorreta. Apenas questão UNICAMENTE DE DIREITO (Art. 976, I).' },
      { letter: 'D', explanation: 'Incorreta. Se a parte desistir, o Ministério Público assume e o tribunal fixa a tese mesmo assim (Art. 976, §§ 1º e 2º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 976 e 977', textSnippet: 'É incabível o incidente de resolução de demandas repetitivas quando um dos tribunais superiores, no âmbito de sua respectiva competência, já tiver afetado recurso para definição de tese sobre questão de direito material ou processual repetitiva.' }
    ],
    professorTip: 'IRDR no CPC: 1) questão UNICAMENTE de direito; 2) pedido por juiz, relator, partes, MP ou Defensoria; 3) sem custas (Art. 976 § 5º); 4) desistência não impede julgar a tese; 5) recurso do mérito do IRDR vai direto ao STJ/STF com efeito suspensivo!'
  },
  {
    id: 'pcv_ext_20',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Competência Absoluta vs Relativa e Eleição de Foro',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Duas empresas firmaram contrato comercial em São Paulo elegeram o foro da Comarca de Curitiba/PR como competente para eventuais litígios, sem qualquer justificativa ou vínculo territorial das partes ou do negócio jurídico com o Paraná. Proposta a ação em Curitiba, o juiz analisou a cláusula de eleição de foro antes da citação.
Considerando a atualização promovida pela Lei nº 14.879/2024 no Art. 63 do CPC, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A eleição de foro é sempre válida livremente e nunca pode ser recusada de ofício pelo juiz por se tratar de competência territorial.' },
      { letter: 'B', text: 'A eleição de foro deve guardar pertinência com o domicílio ou a residência de uma das partes ou com o local da obrigação (ressalvada pactuação consumerista mais favorável); o ajuizamento em juízo aleatório, sem vinculação com o domicílio ou negócio, constitui prática abusiva que justifica a declinação de competência de ofício pelo juiz.' },
      { letter: 'C', text: 'A incompetência relativa nunca pode ser conhecida de ofício em nenhuma hipótese pela Súmula 33 do STJ.' },
      { letter: 'D', text: 'Cláusula de eleição de foro só vale para causas de família.' }
    ],
    correctAnswer: 'B',
    justification: `A recente Lei nº 14.879/2024 alterou o Art. 63, §§ 1º e 5º, do CPC para coibir o "forum shopping": exige-se que o foro eleito guarde pertinência com o domicílio/residência de uma das partes ou com o local da obrigação, dispondo o § 5º que o ajuizamento de ação em juízo aleatório, entendido como aquele sem vinculação com o domicílio ou residência das partes ou com o negócio jurídico discutido na demanda, constitui prática abusiva que justifica a declinação de competência de ofício!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Lei 14.879/2024 criou regra expressa permitindo a declinação de ofício diante de foro aleatório abusivo.' },
      { letter: 'C', explanation: 'Incorreta. A regra geral da Súmula 33 do STJ sofre mitigação expressa nos casos do Art. 63, §§ 3º e 5º do CPC.' },
      { letter: 'D', explanation: 'Incorreta. A eleição de foro aplica-se a direitos disponíveis/negócios contratuais patrimoniais.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil (Lei 14.879/2024)', article: 'Art. 63, §§ 1º e 5º', textSnippet: 'O ajuizamento de ação em juízo aleatório, entendido como aquele sem vinculação com o domicílio ou a residência das partes ou com o negócio jurídico discutido na demanda, constitui prática abusiva que justifica a declinação de competência de ofício.' }
    ],
    professorTip: 'Atualização legislativa fresquíssima (Lei 14.879/2024): Foro eleito precisa ter pertinência com domicílio/residência das partes ou local da obrigação! Foro aleatório = prática abusiva = juiz declina DE OFÍCIO!'
  },
  {
    id: 'pcv_ext_21',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Embargos à Execução vs Impugnação ao Cumprimento de Sentença',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Executado em processo autônomo de execução de título extrajudicial (nota promissória) pretende apresentar embargos à execução para alegar excesso de execução.
Nos termos dos Arts. 914 a 919 do CPC, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Os embargos à execução dependem de prévia garantia integral do juízo por penhora ou depósito.' },
      { letter: 'B', text: 'Os embargos à execução independem de penhora, depósito ou caução (para serem recebidos), têm prazo de 15 dias úteis, porém a concessão de efeito suspensivo exige requerimento, requisitos da tutela provisória E garantia do juízo.' },
      { letter: 'C', text: 'Ao alegar excesso de execução, o embargante não precisa apontar o valor que entende correto.' },
      { letter: 'D', text: 'Os embargos à execução possuem automaticamente efeito suspensivo automático.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 914 do CPC, o executado, independentemente de penhora, depósito ou caução, poderá se opor à execução por meio de embargos no prazo de 15 dias úteis (Art. 915). Contudo, os embargos NÃO têm efeito suspensivo automático (Art. 919); para obter efeito suspensivo, o embargante precisa de: 1) requerimento; 2) relevância dos fundamentos + risco de dano grave; e 3) garantia do juízo por penhora, depósito ou caução suficientes (Art. 919, § 1º)!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A garantia do juízo só é exigida para o EFEITO SUSPENSIVO (Art. 919, § 1º), não para o ajuizamento/recebimento dos embargos (Art. 914).' },
      { letter: 'C', explanation: 'Incorreta. Quando alegar excesso de execução, deve declarar na petição inicial o valor correto com demonstrativo de cálculo, sob pena de rejeição liminar (Art. 917, §§ 3º e 4º).' },
      { letter: 'D', explanation: 'Incorreta. Não possuem efeito suspensivo automático.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 914, 915, 917 e 919', textSnippet: 'O executado, independentemente de penhora, depósito ou caução, poderá se opor à execução por meio de embargos... § 1º O juiz poderá, a requerimento do embargante, atribuir efeito suspensivo aos embargos quando verificados os requisitos para a concessão da tutela provisória e desde que a execução já esteja garantida por penhora, depósito ou caução suficientes.' }
    ],
    professorTip: 'Para EMBARGAR (15 dias) = NÃO precisa garantir o juízo! Para conseguir EFEITO SUSPENSIVO nos embargos = PRECISA garantir o juízo + fumus + periculum!'
  },
  {
    id: 'pcv_ext_22',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Recurso Adesivo e Requisitos (Art. 997 CPC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em ação de indenização por danos materiais e morais, o juiz julgou procedente em parte o pedido (sucumbência recíproca), condenando o réu apenas aos danos materiais. O autor não recorreu no prazo dos primeiros 15 dias úteis. O réu, todavia, interpôs apelação tempestiva buscando a improcedência total. Intimado para apresentar contrarrazões, o autor quer aproveitar para pedir a condenação em danos morais via recurso adesivo.
Nos termos do Art. 997, § 2º, do CPC, sobre o recurso adesivo assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Não cabe recurso adesivo em apelação.' },
      { letter: 'B', text: 'O recurso adesivo é admissível na apelação, no recurso extraordinário e no recurso especial, devendo ser interposto no prazo de contrarrazões (15 dias), mas ficará subordinado ao recurso principal — não sendo conhecido se houver desistência do recurso principal ou se este for considerado inadmissível.' },
      { letter: 'C', text: 'O recurso adesivo independe de preparo mesmo quando a parte não tem gratuidade.' },
      { letter: 'D', text: 'Cabe recurso adesivo também no agravo de instrumento e nos embargos de declaração.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 997, § 2º, do CPC admite recurso adesivo APENAS em 3 recursos: Apelação, Recurso Extraordinário e Recurso Especial (quando houver sucumbência recíproca). Ele segue o prazo das contrarrazões, exige preparo próprio (salvo isenção/gratuidade), e é subordinado ao recurso principal: se o principal desistir ou não for conhecido, o adesivo não é conhecido.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A apelação é uma das 3 hipóteses expressas do Art. 997, § 2º, II.' },
      { letter: 'C', explanation: 'Incorreta. O recurso adesivo está sujeito ao mesmo preparo e requisitos do recurso independente (Art. 997, § 2º, I).' },
      { letter: 'D', explanation: 'Incorreta. Não cabe recurso adesivo em agravo de instrumento nem em embargos de declaração.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 997, §§ 1º e 2º', textSnippet: 'O recurso adesivo fica subordinado ao recurso independente, sendo-lhe aplicáveis as mesmas regras deste quanto aos requisitos de admissibilidade e julgamento no tribunal... II - será admissível na apelação, no recurso extraordinário e no recurso especial;' }
    ],
    professorTip: 'Recurso Adesivo só cabe em: APELAÇÃO, REsp e RE (A-RE-RE)! Fica subordinado ao principal: se o principal desistir ou não subir, o adesivo morre junto!'
  },
  {
    id: 'pcv_ext_23',
    exam: 'Prova Acadêmica / Processo Civil',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Condições da Ação (Legitimidade e Interesse) e Teoria da Asserção',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Pela Teoria da Asserção, amplamente adotada pelo Superior Tribunal de Justiça e pelo CPC/2015, como deve o magistrado aferir a presença da legitimidade das partes e do interesse de agir?`,
    options: [
      { letter: 'A', text: 'Somente após o término da instrução probatória e oitiva de testemunhas, extinguindo o processo sem mérito.' },
      { letter: 'B', text: 'À luz das afirmações deduzidas pelo autor na petição inicial (in status assertionis); caso o juiz precise aprofundar a análise probatória para concluir que o réu não participou do evento danoso, a decisão será de improcedência com resolução do mérito (coisa julgada material).' },
      { letter: 'C', text: 'A legitimidade e o interesse de agir foram extintos pelo CPC/2015, restando apenas a possibilidade jurídica do pedido.' },
      { letter: 'D', text: 'A ilegitimidade passiva apurada após prova pericial gera extinção sem resolução do mérito.' }
    ],
    correctAnswer: 'B',
    justification: `Na Teoria da Asserção, as condições da ação (legitimidade e interesse processual — já que a possibilidade jurídica do pedido deixou de ser condição autônoma no CPC/2015) são aferidas em cognição sumária a partir das alegações da petição inicial. Se, após instrução probatória ou cognição exauriente, constatar-se que o réu não é devedor ou não praticou o fato, o juiz julga o mérito IMPROCEDENTE (Art. 487, I, CPC), e não carência de ação.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Aferição superficial pela inicial; se depender de provas profundas, já é exame de mérito.' },
      { letter: 'C', explanation: 'Incorreta. Foi exatamente a "possibilidade jurídica do pedido" que deixou de figurar no Art. 17 do CPC/2015 (mantendo-se interesse e legitimidade).' },
      { letter: 'D', explanation: 'Incorreta. Apurada após prova profunda, resolve o mérito por improcedência.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 17 e Art. 485, VI', textSnippet: 'Para postular em juízo é necessário ter interesse e legitimidade.' }
    ],
    professorTip: 'Condições da ação no CPC/15: só Interesse e Legitimidade (Possibilidade Jurídica virou mérito!). Teoria da Asserção = olha a petição inicial em abstrato; se precisar de prova para descobrir, já é mérito (improcedência)!'
  },
  {
    id: 'pcv_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Fraude à Execução vs Fraude contra Credores (Súmula 375 STJ)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Após ser citado em processo de execução cível já em curso, o devedor vendeu seu único automóvel a um terceiro comprador, reduzindo-se à insolvência. O veículo não possuía restrição de penhora nem averbação da execução no prontuário do DETRAN, e o comprador agiu de boa-fé sem saber da demanda.
À luz do Art. 792 do CPC e da Súmula 375 do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A venda é automaticamente ineficaz contra o exequente independentemente de registro ou má-fé.' },
      { letter: 'B', text: 'O reconhecimento da fraude à execução depende do registro da penhora do bem alienado (ou averbação premonitória da execução - Art. 828 CPC) OU da prova de má-fé do terceiro adquirente (Súmula 375 STJ).' },
      { letter: 'C', text: 'A fraude à execução torna a alienação nula, exigindo ação pauliana autônoma.' },
      { letter: 'D', text: 'Não existe presunção absoluta de fraude à execução mesmo após averbada a penhora na matrícula do imóvel.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo a Súmula 375 do STJ (recepcionada pelo Art. 792, § 2º, do CPC): o reconhecimento da fraude à execução depende do registro da penhora do bem alienado (ou averbação da existência da ação/execução no registro do bem) OU da prova de má-fé do terceiro adquirente. Caso contrário, protege-se o terceiro de boa-fé (cabendo ao exequente provar que o adquirente não adotou cautelas ou sabia da ação).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Sem registro público nem prova de má-fé, protege-se o terceiro adquirente de boa-fé (Súmula 375 STJ).' },
      { letter: 'C', explanation: 'Incorreta. A fraude à execução gera INEFICÁCIA perante a execução e é reconhecida incidentalmente nos próprios autos (dispensando ação pauliana, que é para fraude contra credores).' },
      { letter: 'D', explanation: 'Incorreta. Havendo averbação de penhora ou premonitória (Art. 828 CPC), a presunção de fraude é absoluta (Art. 792, § 1º / Art. 828, § 4º).' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Art. 792 e Art. 828', textSnippet: 'No caso de aquisição de bem não sujeito a registro, o terceiro adquirente tem o ônus de provar que adotou as cautelas necessárias para a aquisição, mediante a exibição das certidões pertinentes...' }
    ],
    jurisprudence: 'Súmula 375 do STJ: O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova de má-fé do terceiro adquirente.',
    professorTip: 'Súmula 375 STJ: Fraude à execução = registro da penhora/averbação OU má-fé do comprador (reconhece nos próprios autos, gera INEFICÁCIA!).'
  },
  {
    id: 'pcv_ext_25',
    exam: 'Simulado FGV / OAB Unificado - Processo Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Processual Civil',
    topic: 'Ação de Consignação em Pagamento e Dúvida sobre Credor',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um inquilino deseja pagar pontualmente o aluguel vencido, mas duas pessoas distintas (o ex-cônjuge e a irmã do locador falecido, sem inventário aberto) cobram o aluguel simultaneamente afirmando serem as legítimas credoras.
Nos termos dos Arts. 539 a 548 do CPC, o instrumento processual adequado para o inquilino livrar-se da mora é:`,
    options: [
      { letter: 'A', text: 'Ação de depósito.' },
      { letter: 'B', text: 'Ação de consignação em pagamento fundada em dúvida sobre quem deva legitimamente receber o objeto do pagamento, requerendo a citação de ambos os pretensos credores.' },
      { letter: 'C', text: 'Mandado de segurança cível.' },
      { letter: 'D', text: 'Ação monitória passiva.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 335, IV, do CC e o Art. 547 do CPC preveem a ação de consignação em pagamento quando ocorrer dúvida fundada sobre quem deva legitimamente receber. Nesse caso, o autor requer o depósito e a citação dos possíveis titulares para provarem seu direito; se ambos comparecerem, o juiz declarará efetuado o depósito e extinguirá a obrigação do devedor, prosseguindo o processo apenas entre os credores disputantes (Art. 548, III).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Ação de depósito destina-se a exigir a restituição de bem depositado.' },
      { letter: 'C', explanation: 'Incorreta. Não há ato de autoridade pública.' },
      { letter: 'D', explanation: 'Incorreta. Monitória é utilizada pelo credor para cobrar dívida com prova escrita sem força executiva.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil', article: 'Arts. 547 e 548', textSnippet: 'Se ocorrer dúvida sobre quem deva legitimamente receber o pagamento, o autor requererá o depósito e a citação dos possíveis titulares do crédito para provarem o seu direito.' }
    ],
    professorTip: 'Consignação em pagamento por dúvida sobre o credor: o devedor deposita e sai livre do processo (extingue sua obrigação), ficando os dois supostos credores brigando pelo dinheiro nos mesmos autos (Art. 548, III CPC)!'
  }
];
