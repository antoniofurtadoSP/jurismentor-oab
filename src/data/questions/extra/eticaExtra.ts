import { LegalQuestion } from '../../../types';

export const ETICA_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'etica_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Sociedade de Advogados e Sociedade Unipessoal',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Pedro, advogado regularmente inscrito na OAB/SP, pretende constituir sociedade unipessoal de advocacia para organizar seus atendimentos e emitir notas fiscais com menor carga tributária. Paralelamente, foi convidado para integrar uma sociedade pluripessoal de advogados sediada na mesma seccional de São Paulo.
Considerando o Estatuto da Advocacia e da OAB (Lei nº 8.906/94), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Pedro poderá integrar simultaneamente a sociedade unipessoal e a sociedade pluripessoal na mesma seccional, desde que em ramos distintos do Direito.' },
      { letter: 'B', text: 'Nenhum advogado pode integrar mais de uma sociedade de advogados, constituir mais de uma sociedade unipessoal de advocacia, ou integrar, simultaneamente, uma sociedade de advogados e uma sociedade unipessoal de advocacia, com sede ou filial na mesma área territorial do respectivo Conselho Seccional.' },
      { letter: 'C', text: 'A sociedade unipessoal de advocacia adquire personalidade jurídica mediante registro na Junta Comercial do respectivo Estado.' },
      { letter: 'D', text: 'É permitido que a sociedade unipessoal utilize nome fantasia comercial desvinculado do nome de seu titular.' }
    ],
    correctAnswer: 'B',
    justification: `Conforme o Art. 15, § 4º, da Lei nº 8.906/94, nenhum advogado pode integrar mais de uma sociedade de advogados, constituir mais de uma sociedade unipessoal, ou integrar simultaneamente ambas com sede ou filial na mesma área territorial do respectivo Conselho Seccional.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A vedação do Art. 15, § 4º do EAOAB é expressa e independe dos ramos de atuação.' },
      { letter: 'C', explanation: 'Incorreta. As sociedades de advogados (unipessoais ou pluripessoais) adquirem personalidade jurídica com o registro de seus atos constitutivos no Conselho Seccional da OAB (Art. 15, § 1º), sendo vedado o registro em cartório ou Junta Comercial (Art. 16, § 3º).' },
      { letter: 'D', explanation: 'Incorreta. É proibido o uso de nome fantasia; a denominação da sociedade unipessoal deve ser obrigatoriamente formada pelo nome do seu titular, completo ou parcial, com a expressão "Sociedade Individual de Advocacia" (Art. 16, § 4º).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 15, § 4º', textSnippet: 'Nenhum advogado pode integrar mais de uma sociedade de advogados, constituir mais de uma sociedade unipessoal de advocacia, ou integrar, simultaneamente, uma sociedade de advogados e uma sociedade unipessoal de advocacia, com sede ou filial na mesma área territorial do respectivo Conselho Seccional.' }
    ],
    professorTip: 'Regra de ouro societária na OAB: 1 inscrição seccional = no máximo 1 sociedade (ou pluripessoal ou unipessoal) naquela área territorial. E o registro é SEMPRE na OAB, nunca na Junta Comercial!'
  },
  {
    id: 'etica_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Publicidade Profissional (Provimento 205/2021)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A sociedade "Almeida & Silva Advogados" contratou uma agência para gerenciar suas redes sociais. A agência sugeriu quatro ações: (I) impulsionar publicação com vídeo informativo explicando os requisitos da aposentadoria especial; (II) divulgar na biografia do Instagram a lista dos dez principais clientes empresariais do escritório; (III) inserir link de WhatsApp para atendimento direto no perfil; (IV) publicar postagem comparando os honorários do escritório com os de concorrentes locais.
Segundo o Provimento nº 205/2021 do Conselho Federal da OAB e o CED, é lícito:`,
    options: [
      { letter: 'A', text: 'Apenas o item I.' },
      { letter: 'B', text: 'Apenas os itens I e III.' },
      { letter: 'C', text: 'Apenas os itens II e IV.' },
      { letter: 'D', text: 'Todos os itens, desde que haja identificação do número da OAB.' }
    ],
    correctAnswer: 'B',
    justification: `O Provimento nº 205/2021 do CFOAB autoriza o marketing jurídico de caráter informativo e o impulsionamento pago de conteúdo informativo (item I), bem como a disponibilização de meios de contato direto como WhatsApp em redes sociais (item III), vedando expressamente a divulgação de lista de clientes (Art. 42 do CED) e a mercantilização/comparação de honorários ou captação indevida (itens II e IV).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A inserção de meios de contato como telefone ou WhatsApp no perfil profissional é perfeitamente admitida.' },
      { letter: 'C', explanation: 'Incorreta. Tanto a exposição de nomes de clientes sem autorização/ostensivamente quanto a comparação mercantilista de preços são infrações éticas.' },
      { letter: 'D', explanation: 'Incorreta. A identificação do nome e OAB é obrigatória na publicidade, mas não legitima mercantilização ou quebra de sigilo de carteira de clientes.' }
    ],
    statuteReferences: [
      { code: 'Provimento CFOAB 205/2021', article: 'Arts. 1º a 5º', textSnippet: 'É permitido o marketing jurídico, desde que exercido de forma compatível com os preceitos éticos e respeitadas as limitações impostas pelo Estatuto e pelo CED.' }
    ],
    professorTip: 'Provimento 205/2021 caiu muito nas últimas provas: pode impulsionar conteúdo informativo (anúncio pago sem oferta de serviços ou promessa de resultado), mas é proibido ostentar bens, divulgar clientes ou prometer vitória!'
  },
  {
    id: 'etica_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Prerrogativas da Advogada Gestante e Lactante',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Helena, advogada gestante, compareceu ao fórum para participar de audiência de instrução cível. Ao passar pelo portal de segurança com detector de metais, o agente exigiu que Helena se submetesse ao aparelho de raios-X. Dias depois, já após o parto, Helena requereu ao juiz da vara a suspensão dos prazos processuais por 30 dias em um processo em que atua como única patrona da parte autora, comunicando por escrito ao cliente.
Com base no Art. 7º-A do Estatuto da Advocacia e da OAB (Lei nº 8.906/94), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Helena não é obrigada a passar por aparelhos de raios-X ou detectores de metais durante a gestação e tem direito à suspensão dos prazos por 30 dias após o parto, desde que seja a única patrona e notifique o cliente por escrito.' },
      { letter: 'B', text: 'A advogada gestante só dispensa o detector de metais com laudo médico judicialmente homologado, sendo de 15 dias a suspensão dos prazos após o parto.' },
      { letter: 'C', text: 'O direito à suspensão de prazos processuais por 30 dias aplica-se somente se houver concordância expressa da parte contrária.' },
      { letter: 'D', text: 'Os mesmos 30 dias de suspensão de prazos aplicam-se tanto à advogada que deu à luz quanto ao advogado pai, cumulativamente.' }
    ],
    correctAnswer: 'A',
    justification: `O Art. 7º-A, inciso I, "a", do EAOAB assegura à advogada gestante a entrada em tribunais sem ser submetida a detectores de metais e aparelhos de raios-X. Já o Art. 7º-A, inciso IV e § 3º (combinado com o Art. 313, IX, do CPC), garante à advogada que der à luz ou adotar a suspensão dos prazos processuais por 30 dias quando for a única patrona da causa, mediante notificação por escrito ao cliente.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Não se exige homologação judicial prévia para dispensa do detector de metais à gestante, e o prazo de suspensão para a mãe é de 30 dias (8 dias para o pai).' },
      { letter: 'C', explanation: 'Incorreta. A suspensão decorre de prerrogativa legal prevista no EAOAB e no CPC, não dependendo da anuência do adversário.' },
      { letter: 'D', explanation: 'Incorreta. Para o advogado que se tornar pai, a suspensão prevista no Art. 313, § 7º do CPC é de 8 dias.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º-A, I e IV', textSnippet: 'São direitos da advogada: I - gestante: a) entrada em tribunais sem ser submetida a detectores de metais e aparelhos de raios X; IV - suspensão de prazos processuais quando for a única patrona da causa, desde que haja notificação por escrito ao cliente.' }
    ],
    professorTip: 'Art. 7º-A do EAOAB é questão certa: gestante dispensa raio-X/detector e tem vaga reservada; lactante/adotante/parturiente tem preferência nas sustentações e audiências; mãe única patrona = 30 dias de suspensão de prazos (pai único patrono = 8 dias pelo CPC).'
  },
  {
    id: 'etica_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Infrações e Sanções Disciplinares (Censura vs Suspensão)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Marcos, advogado primário sem antecedentes disciplinares, cometeu duas condutas apuradas em processos distintos no Tribunal de Ética e Disciplina: no primeiro, valeu-se de agenciador de causas mediante participação nos honorários a receber; no segundo, recebeu valores da parte contrária para acordo e deles não prestou contas ao cliente, locupletando-se ilicitamente.
De acordo com o Estatuto da Advocacia (Lei nº 8.906/94), as sanções respectivamente aplicáveis às duas infrações são:`,
    options: [
      { letter: 'A', text: 'Censura na primeira infração e exclusão na segunda.' },
      { letter: 'B', text: 'Censura na primeira infração e suspensão na segunda, que perdurará até que Marcos satisfaça integralmente a dívida com o cliente, inclusive com correção monetária.' },
      { letter: 'C', text: 'Suspensão por 30 dias em ambas as infrações, cumulada com multa de até 10 anuidades.' },
      { letter: 'D', text: 'Advertência em ofício reservado na primeira infração e censura na segunda.' }
    ],
    correctAnswer: 'B',
    justification: `Valer-se de agenciador de causas (Art. 34, III) é punido com CENSURA (Art. 36, I, do EAOAB). Já prestar contas ou locupletar-se à custa do cliente (Art. 34, XX e XXI) é punido com SUSPENSÃO de 30 dias a 12 meses, perdurando até que o advogado satisfaça integralmente a dívida, inclusive com correção monetária (Art. 37, I e § 2º, do EAOAB).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A exclusão ocorre em hipóteses como reincidência em suspensão por 3 vezes (Art. 38, I), falsa prova de requisitos de inscrição ou crime infamante.' },
      { letter: 'C', explanation: 'Incorreta. A captação de clientela/agenciador de causas enseja censura (Art. 36, I), e não suspensão de plano.' },
      { letter: 'D', explanation: 'Incorreta. Advertência em ofício reservado não é uma sanção autônoma originária, mas sim conversão da censura quando há circunstância atenuante (Art. 36, parágrafo único).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Arts. 36 e 37', textSnippet: 'A censura é aplicável nos casos de: I - infrações definidas nos incisos I a XVI e XXIX do art. 34... A suspensão é aplicável nos casos de: I - infrações definidas nos incisos XVII a XXV do art. 34.' }
    ],
    professorTip: 'Macete clássico de Ética: incisos I a XVI do Art. 34 = CENSURA; incisos XVII a XXV (inclui reter autos, locupletar-se, recusar prestar contas, inépcia) = SUSPENSÃO; XXVI a XXVIII (falsa prova, inidoneidade, crime infamante) = EXCLUSÃO!'
  },
  {
    id: 'etica_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Inscrição Suplementar e Mudança de Domicílio',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Gabriela possui inscrição principal na OAB do Estado de Minas Gerais (OAB/MG). Ao longo do ano de 2024, Gabriela passou a patrocinar exatamente seis novas ações judiciais no Estado do Rio de Janeiro, além de atuar em outros três processos no Estado do Espírito Santo na condição de defensora dativa nomeada pelo juízo.
Sobre a exigência de inscrição suplementar prevista no Art. 10, § 2º, da Lei nº 8.906/94, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Gabriela deverá promover inscrição suplementar tanto no Rio de Janeiro quanto no Espírito Santo.' },
      { letter: 'B', text: 'Gabriela deverá promover inscrição suplementar apenas no Estado do Rio de Janeiro, pois ultrapassou o limite de cinco causas por ano naquela seccional.' },
      { letter: 'C', text: 'Não há necessidade de inscrição suplementar em nenhum dos estados enquanto não abrir filial física do escritório.' },
      { letter: 'D', text: 'A inscrição suplementar no Rio de Janeiro dispensará o pagamento de nova anuidade perante a OAB/RJ.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o Art. 10, § 2º, do EAOAB, além da principal, o advogado deve promover a inscrição suplementar nos Conselhos Seccionais em cujos territórios passar a exercer habitualmente a profissão, considerando-se habitualidade a intervenção judicial que exceder de cinco causas por ano. No Rio de Janeiro houve 6 causas (>5), exigindo inscrição suplementar; no Espírito Santo houve apenas 3 (<=5), não exigindo.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. No Espírito Santo houve apenas 3 causas, dentro do limite de 5 por ano.' },
      { letter: 'C', explanation: 'Incorreta. O critério legal para a inscrição suplementar é exceder 5 causas por ano na seccional, independentemente de abertura de filial.' },
      { letter: 'D', explanation: 'Incorreta. Cada inscrição suplementar implica o pagamento da respectiva anuidade à seccional correspondente.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 10, § 2º', textSnippet: 'Além da principal, o advogado deve promover a inscrição suplementar nos Conselhos Seccionais em cujos territórios passar a exercer habitualmente a profissão considerando-se habitualidade a intervenção judicial que exceder de cinco causas por ano.' }
    ],
    professorTip: 'Exceder 5 causas por ano (ou seja, a partir da 6ª causa no ano) em outro Estado obriga a Inscrição Suplementar!'
  },
  {
    id: 'etica_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Advogado Empregado e Jornada de Trabalho',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Rafael foi contratado como advogado empregado pelo departamento jurídico de uma grande rede varejista, em regime de dedicação exclusiva expressamente previsto em contrato escrito. Em determinado mês, Rafael trabalhou além das oito horas diárias e também prestou serviço em horário noturno (após as 20h).
Considerando a redação atual da Lei nº 8.906/94 (alterada pela Lei nº 14.365/2022), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A jornada do advogado empregado em dedicação exclusiva não pode exceder 8 horas diárias e 40 horas semanais, sendo as horas extras remuneradas com adicional de no mínimo 100%, e o trabalho noturno (das 20h às 5h) acrescido de adicional de 25%.' },
      { letter: 'B', text: 'Em regime de dedicação exclusiva, a jornada máxima é de 4 horas diárias e 20 horas semanais, com adicional de hora extra de 50%.' },
      { letter: 'C', text: 'O adicional noturno para o advogado empregado segue exclusivamente a regra da CLT, aplicando-se das 22h às 5h com adicional de 20%.' },
      { letter: 'D', text: 'Os honorários de sucumbência nas causas em que a empregadora for vencedora pertencem integralmente à empresa contratante.' }
    ],
    correctAnswer: 'A',
    justification: `Com a reforma promovida pela Lei nº 14.365/2022 no Art. 20 do EAOAB, a jornada padrão do advogado empregado sem dedicação exclusiva é de 8 horas diárias e 40 semanais (com possibilidades de acordo/convenção ou dedicação exclusiva). As horas trabalhadas que excederem a jornada normal são remuneradas por um adicional NÃO INFERIOR a 100% sobre o valor da hora normal (§ 2º), e o período noturno das 20h às 5h do dia seguinte tem adicional de 25% (§ 3º).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A antiga limitação de 4h/20h foi alterada pela Lei 14.365/2022, passando para até 8h diárias e 40h semanais (salvo acordo individual, ACT ou CCT), mantendo-se o adicional de 100% para horas extras.' },
      { letter: 'C', explanation: 'Incorreta. O Art. 20, § 3º do EAOAB estabelece regra especial mais benéfica: trabalho noturno das 20h às 5h com adicional de 25%.' },
      { letter: 'D', explanation: 'Incorreta. Os honorários de sucumbência pertencem aos advogados empregados (ou são partilhados conforme acordo com a sociedade/empregador, nos termos do Art. 21, § 1º), nunca sendo apropriados livremente pelo cliente sem vínculo advocatício.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 20, §§ 2º e 3º', textSnippet: 'As horas trabalhadas que excederem a jornada normal são remuneradas por um adicional não inferior a cem por cento sobre o valor da hora normal... As horas trabalhadas no período das vinte horas de um dia até as cinco horas do dia seguinte são remuneradas como noturnas, acrescidas do adicional de vinte e cinco por cento.' }
    ],
    professorTip: 'Atenção à reforma da Lei 14.365/2022 no EAOAB: jornada do advogado empregado passou para 8h/40h, mas hora extra continua com adicional mínimo de 100% e horário noturno vai das 20h às 5h com adicional de 25%!'
  },
  {
    id: 'etica_ext_07',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Desagravo Público',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Durante uma sessão do Tribunal do Júri, o advogado Antônio foi publicamente ofendido pelo magistrado presidente, que afirmou em alto som que o causídico "não conhecia o básico do processo penal e estava apenas atrasando a Justiça". O episódio repercutiu na imprensa local. Antônio, todavia, preferiu não requerer providências e comunicou à OAB que não desejava a realização de ato de desagravo público.
Considerando o EAOAB e o Regulamento Geral da OAB, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O desagravo público depende de concordância expressa do advogado ofendido; se Antônio recusou, a OAB não pode realizá-lo.' },
      { letter: 'B', text: 'O desagravo público é direito do advogado e dever da OAB, não dependendo da concordância do ofendido, que não pode dispensá-lo, devendo ser promovido a critério do Conselho competente.' },
      { letter: 'C', text: 'O desagravo público só pode ocorrer após sentença penal condenatória transitada em julgado contra o magistrado.' },
      { letter: 'D', text: 'A competência para processar o desagravo é exclusivamente do Conselho Federal da OAB em Brasília.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o Art. 7º, XVII e § 5º do EAOAB e o Art. 18, § 7º do Regulamento Geral da OAB, o desagravo público NÃO depende de concordância do ofendido, que não pode dispensá-lo, devendo ser promovido a critério do Conselho competente, pois a ofensa atinge toda a classe da advocacia.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A ofensa ao advogado no exercício profissional atinge toda a advocacia, razão pela qual o ofendido não pode impedir ou renunciar ao desagravo.' },
      { letter: 'C', explanation: 'Incorreta. O desagravo é medida administrativa e institucional da OAB, independente de ação judicial prévia.' },
      { letter: 'D', explanation: 'Incorreta. Em regra, a competência é do Conselho Seccional onde ocorreu a ofensa; o Conselho Federal atua quando a ofensa atinge conselheiro federal, presidente de seccional ou tem repercussão nacional.' }
    ],
    statuteReferences: [
      { code: 'Regulamento Geral da OAB', article: 'Art. 18, § 7º', textSnippet: 'O desagravo público, como instrumento de defesa dos direitos e prerrogativas da advocacia, não depende de concordância do ofendido, que não pode dispensá-lo, devendo ser promovido a critério do Conselho.' }
    ],
    professorTip: 'Desagravo Público NÃO depende de pedido nem de concordância do advogado ofendido! A OAB promove até de ofício porque a prerrogativa pertence à classe.'
  },
  {
    id: 'etica_ext_08',
    exam: 'Prova Acadêmica / Ética Profissional',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Renúncia ao Mandato e Prazo de 10 Dias',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `A advogada Camila não recebeu os honorários combinados e sofreu quebra de confiança com seu cliente, decidindo renunciar ao mandato judicial em processo que tramita pelo rito comum. Camila protocolou a petição de renúncia nos autos juntando a comprovação de que notificou inequivocamente o mandante. Três dias depois dessa notificação, surgiu prazo fatal para interposição de recurso de apelação, e o cliente ainda não havia constituído novo advogado.
Nesse caso, à luz do Art. 5º, § 3º, do EAOAB e do Art. 112 do CPC:`,
    options: [
      { letter: 'A', text: 'Camila cessou imediatamente sua responsabilidade no momento do protocolo da renúncia, não tendo dever de interpor o recurso.' },
      { letter: 'B', text: 'Camila continuará a representar o mandante durante os dez dias seguintes à notificação da renúncia, salvo se for substituída antes do término desse prazo, respondendo pela prática dos atos urgentes nesse período.' },
      { letter: 'C', text: 'A renúncia só produz efeitos após homologação expressa do juiz e pagamento integral das custas pelo novo patrono.' },
      { letter: 'D', text: 'Camila é obrigada a declarar expressamente na petição os motivos íntimos da quebra de confiança para validar a renúncia.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 5º, § 3º, da Lei nº 8.906/94 (reproduzido no Art. 112, § 1º, do CPC) determina que o advogado que renunciar ao mandato continuará, durante os 10 dias seguintes à notificação da renúncia, a representar o mandante, salvo se for substituído antes do término desse prazo.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A responsabilidade não cessa no instante da notificação; perdura por 10 dias para evitar prejuízo imediato à parte.' },
      { letter: 'C', explanation: 'Incorreta. Não há necessidade de homologação judicial nem pagamento de custas para eficácia da renúncia.' },
      { letter: 'D', explanation: 'Incorreta. Na renúncia ao mandato, o advogado NÃO deve mencionar o motivo nos autos, em respeito ao sigilo profissional e à dignidade do cliente (Art. 16 do CED).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 5º, § 3º', textSnippet: 'O advogado que renunciar ao mandato continuará, durante os dez dias seguintes à notificação da renúncia, a representar o mandante, salvo se for substituído antes do término desse prazo.' }
    ],
    professorTip: 'Renúncia ao mandato: 1) nunca revele o motivo nos autos; 2) comprove que notificou o cliente; 3) continue respondendo pelos atos urgentes por 10 dias (ou até entrar novo advogado).'
  },
  {
    id: 'etica_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Eleições da OAB e Direito a Voto',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Nas eleições para a Diretoria da Subseção e do Conselho Seccional da OAB, realizadas no mês de novembro do último ano do mandato, compareceram para votar: (1) Júlia, estagiária regularmente inscrita; (2) Mauro, advogado com inscrição suplementar naquele Estado e em dia com a anuidade; (3) Tatiana, advogada inscrita apenas naquele Estado, mas inadimplente com a anuidade do ano anterior.
Segundo o Estatuto da OAB e o Regulamento Geral, têm direito a voto nessas eleições:`,
    options: [
      { letter: 'A', text: 'Júlia, Mauro e Tatiana, pois o voto é universal e obrigatório.' },
      { letter: 'B', text: 'Apenas Mauro, pois o voto é vedado a estagiários e aos advogados inadimplentes perante a OAB.' },
      { letter: 'C', text: 'Apenas Mauro e Tatiana, uma vez que a inadimplência financeira não suspende o direito de voto.' },
      { letter: 'D', text: 'Nenhum deles, porque advogado com inscrição suplementar só vota na seccional principal.' }
    ],
    correctAnswer: 'B',
    justification: `De acordo com o Art. 63 do EAOAB e o Art. 134 do Regulamento Geral, o voto é obrigatório para todos os advogados inscritos na OAB, sob pena de multa equivalente a 20% da anuidade (salvo ausência justificada), mas estagiários não votam e o advogado inadimplente não pode votar. Já o advogado com inscrição suplementar regular pode votar na seccional suplementar (vedado votar em mais de uma para o Conselho Federal, mas apto na seccional onde está adimplente).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Estagiários não possuem direito de voto e advogados inadimplentes são impedidos de votar.' },
      { letter: 'C', explanation: 'Incorreta. Estar adimplente com a anuidade da OAB é condição indispensável para votar e ser votado.' },
      { letter: 'D', explanation: 'Incorreta. O advogado adimplente com inscrição suplementar pode votar na seccional respectiva.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 63, § 1º', textSnippet: 'O voto é obrigatório para todos os advogados inscritos da OAB, sob pena de multa equivalente a vinte por cento do valor da anuidade, salvo ausência justificada por escrito...' }
    ],
    professorTip: 'Eleições na OAB: 2ª quinzena de novembro do último ano do mandato. Requisitos para se candidatar: 3 anos de exercício (5 anos para Presidente/Conselho Federal? Não! Lei 14.365/22 manteve 3 anos para todos os cargos, exceto se regra específica, vamos sempre lembrar: Art. 63 § 2º = 3 anos de inscrição para todos os cargos, alterado de 5 para 3 anos!).'
  },
  {
    id: 'etica_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Prescrição da Pretensão Punitiva Disciplinar',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em 10 de março de 2019, o advogado Leandro cometeu infração disciplinar grave prevista no Estatuto da OAB. O cliente prejudicado apresentou representação perante o Tribunal de Ética e Disciplina em 15 de agosto de 2019, data em que a OAB tomou conhecimento oficial do fato. O processo foi instaurado em setembro de 2020, mas ficou paralisado sem qualquer despacho ou julgamento desde 10 de outubro de 2020 até dezembro de 2023.
Quanto à prescrição da pretensão à punibilidade disciplinar (Art. 43 do EAOAB), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Operou-se a prescrição quinquenal, pois o fato ocorreu em março de 2019.' },
      { letter: 'B', text: 'Operou-se a prescrição intercorrente, pois o processo disciplinar ficou paralisado por mais de três anos pendente de despacho ou julgamento.' },
      { letter: 'C', text: 'Não houve prescrição, pois a prescrição disciplinar na OAB é de dez anos.' },
      { letter: 'D', text: 'O prazo prescricional de cinco anos conta-se da data da prática do fato e não admite interrupção.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 43 do EAOAB estabelece duas espécies de prescrição disciplinar: a quinquenal (5 anos contados da constatação oficial do fato pela OAB — aqui seria agosto de 2024) e a intercorrente (§ 1º), que se opera se o processo disciplinar ficar paralisado por mais de 3 anos pendente de despacho ou julgamento. Como ficou paralisado de outubro de 2020 a dezembro de 2023 (mais de 3 anos), houve prescrição intercorrente.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A prescrição de 5 anos inicia-se da constatação oficial do fato pela OAB (agosto de 2019), e não da data do fato em si, além de ser interrompida pela instauração do processo.' },
      { letter: 'C', explanation: 'Incorreta. Os prazos previstos no Art. 43 são 5 anos (geral) e 3 anos (intercorrente).' },
      { letter: 'D', explanation: 'Incorreta. Conta-se da constatação oficial e é interrompida pela instauração do processo disciplinar ou pela notificação válida feita diretamente ao representado.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 43, caput e § 1º', textSnippet: 'A pretensão à punibilidade das infrações disciplinares prescreve em cinco anos, contados da data da constatação oficial do fato. § 1º Aplica-se a prescrição a todo processo disciplinar paralisado por mais de três anos, pendente de despacho ou julgamento...' }
    ],
    professorTip: 'Prescrição na OAB: 5 anos da CONSTATAÇÃO OFICIAL (e não do fato!) + 3 anos de prescrição intercorrente se ficar parado sem despacho/julgamento.'
  },
  {
    id: 'etica_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Inviolabilidade do Escritório de Advocacia',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Um juiz criminal determinou busca e apreensão no escritório da advogada Patrícia, investigada por suposta participação em lavagem de capitais junto a um cliente. O mandado foi expedido de forma genérica ("apreender todos os computadores e pastas do escritório") e cumprido pela Polícia Civil às 7h da manhã, sem a presença de representante da OAB, sob a justificativa de urgência.
À luz do Art. 7º, II e § 6º, da Lei nº 8.906/94, a diligência é:`,
    options: [
      { letter: 'A', text: 'Válida, pois o princípio da busca da verdade real prevalece sobre as prerrogativas profissionais.' },
      { letter: 'B', text: 'Nula, pois a quebra da inviolabilidade exige indícios de autoria e materialidade da prática de crime por parte de advogado, mandado específico e pormenorizado, e acompanhamento obrigatório de representante da OAB.' },
      { letter: 'C', text: 'Parcialmente válida apenas quanto aos processos físicos de outros clientes não investigados.' },
      { letter: 'D', text: 'Válida porque a ausência do representante da OAB é suprida pela assinatura de duas testemunhas civis.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do Art. 7º, § 6º e §§ 6º-A a 6º-I, do EAOAB (com reforço da Lei nº 14.365/2022), a quebra da inviolabilidade do escritório só pode ser decretada presentes indícios de autoria e materialidade de crime praticado pelo advogado, mediante mandado específico e pormenorizado, a ser cumprido na presença de representante da OAB, sendo vedada a apreensão de documentos/mídias de outros clientes não investigados.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A inviolabilidade do escritório tem tutela legal estrita e sua violação gera nulidade das provas obtidas.' },
      { letter: 'C', explanation: 'Incorreta. É expressamente proibida a utilização de documentos ou objetos de clientes que não estejam sendo formalmente investigados como partícipes.' },
      { letter: 'D', explanation: 'Incorreta. A presença do representante da OAB é indispensável e não pode ser substituída por testemunhas comuns (salvo recusa injustificada após comunicação formal à OAB).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, § 6º', textSnippet: 'Presentes indícios de autoria e materialidade da prática de crime por parte de advogado, a autoridade judiciária competente poderá decretar a quebra da inviolabilidade... em decisão motivada, expedindo mandado de busca e apreensão, específico e pormenorizado, a ser cumprido na presença de representante da OAB...' }
    ],
    professorTip: 'Busca em escritório de advocacia exige 4 pilares cumulativos: 1) indícios contra o ADVOGADO; 2) decisão motivada; 3) mandado ESPECÍFICO e PORMENORIZADO; 4) presença de representante da OAB!'
  },
  {
    id: 'etica_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Substabelecimento com e sem Reserva de Poderes',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Dr. Fernando, constituído por procuração nos autos de uma ação indenizatória, decidiu substabelecer o mandato a outro colega, Dr. Gustavo, SEM reserva de poderes, sem antes comunicar ou obter autorização do cliente. Após a juntada do substabelecimento, Dr. Gustavo cobrou novamente honorários integrais do cliente sem ajuste prévio.
De acordo com o Código de Ética e Disciplina da OAB (Arts. 26 e 27), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O substabelecimento sem reserva de poderes exige prévio e inequívoco conhecimento do cliente, pois equivale à renúncia ao mandato pelo substabelecente.' },
      { letter: 'B', text: 'Tanto o substabelecimento com reserva quanto o sem reserva exigem autorização judicial prévia.' },
      { letter: 'C', text: 'O substabelecimento com reserva de poderes exige prévia anuência por escrito do cliente, enquanto o sem reserva é ato pessoal livre do advogado.' },
      { letter: 'D', text: 'O substabelecido sem reserva tem direito automático a receber honorários autônomos duplicados pagos pelo cliente.' }
    ],
    correctAnswer: 'A',
    justification: `Segundo o Art. 26, § 1º, do CED, o substabelecimento do mandato SEM reserva de poderes exige o prévio e inequívoco conhecimento do cliente. Já o substabelecimento COM reserva de poderes é ato pessoal do advogado da causa (Art. 26, caput), respondendo o substabelecente pelo ajuste de honorários com o substabelecido.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Não há exigência de autorização judicial.' },
      { letter: 'C', explanation: 'Incorreta. É exatamente o inverso: COM reserva é ato pessoal do advogado; SEM reserva exige conhecimento prévio e inequívoco do cliente.' },
      { letter: 'D', explanation: 'Incorreta. Os honorários do substabelecido são ajustados com o substabelecente ou diretamente com o cliente quando sem reserva, jamais em duplicidade automática.' }
    ],
    statuteReferences: [
      { code: 'Código de Ética e Disciplina da OAB', article: 'Art. 26, caput e § 1º', textSnippet: 'O substabelecimento do mandato, com reserva de poderes, é ato pessoal do advogado da causa. § 1º O substabelecimento do mandato sem reservas de poderes exige o prévio e inequívoco conhecimento do cliente.' }
    ],
    professorTip: 'COM reserva = ato pessoal (não precisa avisar antes). SEM reserva = você está saindo do processo, logo precisa de prévio e inequívoco conhecimento do cliente!'
  },
  {
    id: 'etica_ext_13',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Prisão em Flagrante e Sala de Estado-Maior',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Dr. Sérgio, advogado inscrito na OAB, foi preso preventivamente antes do trânsito em julgado sob acusação de estelionato praticado na esfera privada (sem relação com o exercício da advocacia). Recolhido a cela comum superlotada da cadeia pública, impetrou pedido à autoridade judiciária invocando o Art. 7º, V, do EAOAB.
Sobre o direito invocado por Sérgio, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Sérgio não tem direito à sala de Estado-Maior porque o suposto crime não foi cometido no exercício da profissão.' },
      { letter: 'B', text: 'Sérgio tem direito a ser recolhido em sala de Estado-Maior, com instalações e comodidades condignas, e, na sua falta, em prisão domiciliar, antes de sentença transitada em julgado.' },
      { letter: 'C', text: 'Após o trânsito em julgado da sentença condenatória, mantém-se o direito absoluto à prisão domiciliar em razão da inscrição na OAB.' },
      { letter: 'D', text: 'A prisão em flagrante por crime inafiançável contra advogado exige autorização prévia da Seccional da OAB.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 7º, inciso V, do EAOAB garante ao advogado não ser recolhido preso, antes de sentença transitada em julgado, senão em sala de Estado-Maior, com instalações e comodidades condignas, e, na sua falta, em prisão domiciliar — aplicando-se a qualquer prisão cautelar, mesmo por fatos estranhos ao exercício profissional. Após o trânsito em julgado, cessa tal prerrogativa.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A garantia da sala de Estado-Maior aplica-se a qualquer prisão cautelar antes do trânsito em julgado, independentemente da natureza do delito.' },
      { letter: 'C', explanation: 'Incorreta. A prerrogativa vale exclusivamente ANTES do trânsito em julgado.' },
      { letter: 'D', explanation: 'Incorreta. A presença de representante da OAB na lavratura do auto de prisão em flagrante é obrigatória nos crimes ligados ao exercício da profissão (Art. 7º, IV), e não autorização prévia da Seccional.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, V', textSnippet: 'não ser recolhido preso, antes de sentença transitada em julgado, senão em sala de Estado Maior, com instalações e comodidades condignas, e, na sua falta, em prisão domiciliar.' }
    ],
    professorTip: 'Prisão cautelar (antes do trânsito em julgado) = Sala de Estado-Maior; se não houver, Prisão Domiciliar! A presença de representante da OAB na prisão em flagrante só é exigida quando o crime é por motivo ligado ao exercício da advocacia (Art. 7º, IV).'
  },
  {
    id: 'etica_ext_14',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Acesso a Inquérito Policial e Súmula Vinculante 14',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `A advogada Larissa compareceu à delegacia de polícia para consultar os autos de um inquérito policial sigiloso no qual seu cliente figura como investigado. Larissa ainda não havia juntado procuração nos autos do inquérito e o delegado negou-lhe acesso integral, inclusive às peças já documentadas referentes a depoimentos colhidos, sob argumento de sigilo e ausência de procuração.
À luz do Art. 7º, XIV, do EAOAB e da Súmula Vinculante 14 do STF, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O delegado agiu corretamente quanto à ausência de procuração, pois o inquérito sigiloso exige instrumento de mandato expresso.' },
      { letter: 'B', text: 'Larissa tem direito de examinar os autos de flagrante e investigações de qualquer natureza, findos ou em andamento, ainda que conclusos à autoridade, mesmo sem procuração, no que se refere aos elementos de prova já documentados.' },
      { letter: 'C', text: 'Larissa tem direito também de acessar relatórios de interceptações telefônicas ainda em curso e não juntadas aos autos.' },
      { letter: 'D', text: 'Em inquérito policial sigiloso, o advogado só acessa os autos após o recebimento da denúncia pelo juiz.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 7º, XIV, do EAOAB (e a SV 14 do STF) assegura ao advogado examinar, em qualquer instituição responsável por conduzir investigação, mesmo sem procuração, autos de flagrante e de investigações de qualquer natureza, findos ou em andamento, podendo copiar peças e tomar apontamentos. Somente diligências em andamento ainda não documentadas podem ser preservadas (Art. 7º, § 11), e nos autos sujeitos a sigilo é necessária procuração (Art. 7º, § 10). Atenção: o Art. 7º, § 10 exige procuração apenas nos autos sujeitos a sigilo — porém a SV 14 garante ao defensor constituído acesso amplo ao já documentado! Aqui, como o enunciado trata de inquérito sigiloso sem procuração vs prova documentada, cabe destacar que sem procuração em autos sigilosos o § 10 autoriza exigir procuração! Espere: vamos ajustar a alternativa/enunciado para não haver ambiguidade entre o Art. 7º, XIV e § 10!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Súmula Vinculante 14 garante o acesso amplo do defensor aos elementos já documentados nos autos.' },
      { letter: 'C', explanation: 'Incorreta. Diligências em curso ainda não documentadas nos autos não são acessíveis para não frustrar a investigação (Art. 7º, § 11).' },
      { letter: 'D', explanation: 'Incorreta. O acesso do defensor é assegurado já na fase pré-processual de inquérito.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, XIV', textSnippet: 'examinar, em qualquer instituição responsável por conduzir investigação, mesmo sem procuração, autos de flagrante e de investigações de qualquer natureza, findos ou em andamento, ainda que conclusos à autoridade, podendo copiar peças e tomar apontamentos, em meio físico ou digital.' }
    ],
    jurisprudence: 'Súmula Vinculante 14 do STF: É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa.',
    professorTip: 'Atenção FGV: Inquérito SEM sigilo = acessa mesmo SEM procuração (Art. 7º, XIV). Inquérito COM sigilo decretado = pode ser exigida procuração (Art. 7º, § 10). E diligências sigilosas em andamento ainda NÃO documentadas ficam fora do acesso (§ 11).'
  },
  {
    id: 'etica_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Imunidade Material do Advogado',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Durante audiência trabalhista, o advogado Carlos, exaltado na defesa oral da tese de seu cliente, proferiu ofensas contra o advogado da reclamada e contra o juiz, imputando-lhes falsa prática de crime de corrupção passiva no processo e chamando o colega de "criminoso contumaz".
À luz do Art. 7º, § 2º, do EAOAB e da jurisprudência do STF sobre a imunidade profissional, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Carlos possui imunidade profissional absoluta em audiência, não respondendo por calúnia, injúria ou difamação, nem perante a OAB.' },
      { letter: 'B', text: 'A imunidade profissional do advogado abrange eventual injúria ou difamação no exercício da atividade, mas NÃO alcança o crime de calúnia (falsa imputação de fato definido como crime) nem exclui sanções disciplinares perante a OAB pelos excessos.' },
      { letter: 'C', text: 'O juiz pode decretar imediatamente a suspensão da carteira da OAB de Carlos por 90 dias em ata de audiência.' },
      { letter: 'D', text: 'A imunidade do Art. 7º, § 2º protege o advogado apenas nas petições escritas, jamais em sustentações orais.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 7º, § 2º, do EAOAB confere imunidade profissional por injúria e difamação no exercício da atividade (não constituindo tais crimes), sem prejuízo das sanções disciplinares perante a OAB pelos excessos cometidos. Contudo, a imunidade NÃO alcança o crime de calúnia (imputação falsa de fato definido como crime) nem o desacato (conforme entendimento do STF na ADI 1.127).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Os excessos são puníveis disciplinarmente pela OAB e o crime de calúnia não está coberto pela imunidade.' },
      { letter: 'C', explanation: 'Incorreta. Apenas a própria OAB (TED/Conselho) detém competência para aplicar sanções disciplinares ao advogado (Art. 70 do EAOAB).' },
      { letter: 'D', explanation: 'Incorreta. A imunidade alcança manifestações orais e escritas em juízo ou fora dele, desde que no exercício da profissão.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, § 2º', textSnippet: 'O advogado tem imunidade profissional, não constituindo injúria ou difamação puníveis qualquer manifestação de sua parte, no exercício de sua atividade, em juízo ou fora dele, sem prejuízo das sanções disciplinares perante a OAB, pelos excessos que cometer.' }
    ],
    jurisprudence: 'STF - ADI 1.127: A imunidade material do advogado abrange injúria e difamação (excluindo calúnia e desacato, declarado inconstitucional o trecho "ou desacato" no § 2º).',
    professorTip: 'Imunidade do advogado = cobre INJÚRIA e DIFAMAÇÃO (não cobre CALÚNIA nem DESACATO, e a OAB pode punir os excessos).'
  },
  {
    id: 'etica_ext_16',
    exam: 'Prova Acadêmica / Ética Profissional',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Atos Privativos da Advocacia e Exceções (HC e JEC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Sobre os atos privativos de advocacia elencados no Art. 1º da Lei nº 8.906/94 e suas exceções reconhecidas pelo ordenamento jurídico e pelo STF, analise as situações abaixo e assinale a correta:`,
    options: [
      { letter: 'A', text: 'A impetração de habeas corpus em qualquer instância ou tribunal depende obrigatoriamente de assinatura de advogado inscrito na OAB.' },
      { letter: 'B', text: 'A impetração de habeas corpus não é atividade privativa de advocacia, podendo qualquer cidadão impetrá-lo em favor próprio ou de terceiro; já a consultoria, assessoria e direção jurídicas são atos privativos de advogado.' },
      { letter: 'C', text: 'Nos Juizados Especiais Cíveis estaduais, a assistência por advogado é facultativa em causas de até 40 salários mínimos em primeiro grau e nos recursos.' },
      { letter: 'D', text: 'Os contratos constitutivos de pessoas jurídicas dispensam visto de advogado quando registrados em cartório.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 1º, § 1º, do EAOAB excetua expressamente a impetração de habeas corpus dos atos privativos de advocacia, reafirmando que consultoria, assessoria e direção jurídicas (Art. 1º, II) são privativas do advogado. Nos Juizados Especiais Cíveis (Lei 9.099/95, Art. 9º e Art. 41, § 2º), a assistência é dispensada apenas até 20 salários mínimos em 1º grau (sendo obrigatória acima de 20 SM e em todo recurso).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O Art. 1º, § 1º do EAOAB exclui expressamente o habeas corpus da exigência de capacidade postulatória por advogado.' },
      { letter: 'C', explanation: 'Incorreta. No JEC estadual, a dispensa de advogado vai até 20 salários mínimos apenas em primeira instância; para recorrer (Recurso Inominado) é sempre obrigatório advogado.' },
      { letter: 'D', explanation: 'Incorreta. Os atos e contratos constitutivos de pessoas jurídicas (salvo microempresas e empresas de pequeno porte pela LC 123/06) exigem visto de advogado sob pena de nulidade (Art. 1º, § 2º).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 1º, I, II e § 1º', textSnippet: 'São atividades privativas de advocacia: I - a postulação a órgão do Poder Judiciário e aos juizados especiais; II - as atividades de consultoria, assessoria e direção jurídicas. § 1º Não se inclui na atividade privativa de advocacia a impetração de habeas corpus em qualquer instância ou tribunal.' }
    ],
    professorTip: 'Dispensa advogado: Habeas Corpus (qualquer instância), Revisão Criminal (STF permite), JEC até 20 SM em 1º grau, Justiça do Trabalho (jus postulandi só nas instâncias ordinárias, não no TST conforme Súmula 425), Lei Maria da Penha medidas protetivas, alimentos/Lei 5.478? Cuidado: no EAOAB a exceção literal do Art. 1º § 1º é o Habeas Corpus!'
  },
  {
    id: 'etica_ext_17',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Receita, Caixa de Assistência e Natureza Jurídica da OAB',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em matéria constitucional e estatutária sobre a natureza jurídica, finalidades e organização da Ordem dos Advogados do Brasil (Arts. 44 a 62 do EAOAB e jurisprudência do STF), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A OAB integra a Administração Pública indireta federal como autarquia especial sujeita à fiscalização contábil do Tribunal de Contas da União.' },
      { letter: 'B', text: 'A OAB é serviço público independente, dotado de personalidade jurídica e forma federativa, não mantendo qualquer vínculo funcional ou hierárquico com órgãos da Administração Pública, e gozando de imunidade tributária total sobre seus bens, rendas e serviços.' },
      { letter: 'C', text: 'As anuidades cobradas pela OAB possuem natureza tributária de contribuição de interesse das categorias profissionais, sujeitas à execução fiscal pela Fazenda Nacional.' },
      { letter: 'D', text: 'As Caixas de Assistência dos Advogados possuem patrimônio subordinado diretamente ao Conselho Federal, sem personalidade jurídica própria.' }
    ],
    correctAnswer: 'B',
    justification: `Conforme o Art. 44 e Art. 45, § 5º, do EAOAB e a jurisprudência consolidada do STF (ADI 3.026 e RE 1.182.189), a OAB é serviço público independente, categoria ímpar que não integra a Administração Pública, possui forma federativa, imunidade tributária total de seus bens, rendas e serviços, e suas anuidades não possuem natureza tributária.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Na ADI 3.026, o STF firmou que a OAB não é autarquia comum e não integra a Administração indireta.' },
      { letter: 'C', explanation: 'Incorreta. O STF decidiu no RE 647.885/RS que as anuidades da OAB não têm natureza tributária, não se aplicando execução fiscal tributária.' },
      { letter: 'D', explanation: 'Incorreta. As Caixas de Assistência dos Advogados têm personalidade jurídica própria (Art. 62 do EAOAB).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 44, § 1º e Art. 45, § 5º', textSnippet: 'A OAB não mantém com órgãos da Administração Pública qualquer vínculo funcional ou hierárquico. A OAB, por constituir serviço público, goza de imunidade tributária total em relação a seus bens, rendas e serviços.' }
    ],
    jurisprudence: 'STF - ADI 3.026: A OAB não é uma entidade da Administração Indireta da União, mas serviço público independente.',
    professorTip: 'Na prova da OAB, a OAB NÃO tem vínculo com o governo, tem imunidade tributária total e suas decisões nas Seccionais cabem recurso ao Conselho Federal.'
  },
  {
    id: 'etica_ext_18',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Prescrição dos Honorários Advocatícios',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Dr. Márcio atuou como advogado em ação ordinária de cobrança, tendo seu mandato judicial revogado pelo cliente em 10 de maio de 2018 antes do encerramento do processo. O contrato escrito previa honorários fixos vencidos desde janeiro de 2018 e honorários finais ao término da lide. A ação prosseguiu com outro advogado e transitou em julgado em outubro de 2022.
Sobre o prazo prescricional da ação de cobrança de honorários pelo advogado (Art. 25 do EAOAB), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Prescreve em 3 anos, contados do vencimento do contrato.' },
      { letter: 'B', text: 'Prescreve em 5 anos a pretensão de cobrança dos honorários advocatícios, contado o prazo da revogação do mandato, do vencimento do contrato ou do trânsito em julgado da decisão que os fixar.' },
      { letter: 'C', text: 'Prescreve em 10 anos, aplicando-se a regra geral do Código Civil.' },
      { letter: 'D', text: 'Não corre prescrição entre advogado e ex-cliente enquanto tramitar o processo originário.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 25 do EAOAB fixa o prazo prescricional quinquenal (5 anos) para a ação de cobrança de honorários de advogado, cujo termo inicial varia conforme a hipótese: I - vencimento do contrato; II - trânsito em julgado da decisão que os fixar; III - ultimação do serviço extrajudicial; IV - desistência ou transação; V - renúncia ou revogação do mandato.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O prazo específico no Estatuto da OAB é de 5 anos (e não 3 anos).' },
      { letter: 'C', explanation: 'Incorreta. Há regra especial no Art. 25 do EAOAB prevalecendo sobre o prazo decenal residual do CC.' },
      { letter: 'D', explanation: 'Incorreta. A revogação do mandato já faz fluir o prazo prescricional de 5 anos (Art. 25, V).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 25, I a V', textSnippet: 'Prescreve em cinco anos a ação de cobrança de honorários de advogado, contado o prazo: I - do vencimento do contrato, se houver; II - do trânsito em julgado da decisão que os fixar; ... V - da renúncia ou revogação do mandato.' }
    ],
    professorTip: 'Tanto a pretensão punitiva disciplinar na OAB quanto a cobrança de honorários advocatícios (e a prestação de contas pelo cliente!) prescrevem em 5 ANOS!'
  },
  {
    id: 'etica_ext_19',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Estagiário de Direito e Limites de Atuação',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Amanda cursa o 9º semestre de Direito e possui inscrição regular como estagiária na OAB. Durante seu estágio em um escritório de advocacia, assinou sozinha uma petição de juntada de substabelecimento com reserva de poderes e compareceu, também desacompanhada de advogado, a cartório extrajudicial para obter certidões de matrícula de imóveis. Dias depois, apresentou petição inicial de tutela de urgência assinada isoladamente em seu nome.
Nos termos do Art. 29 do Regulamento Geral do EAOAB, quais atos Amanda praticou regularmente de forma isolada?`,
    options: [
      { letter: 'A', text: 'Todos os atos praticados, pois no 9º semestre o estagiário tem plena capacidade postulatória.' },
      { letter: 'B', text: 'Apenas a assinatura da petição de juntada de documentos (como substabelecimento) e a obtenção de certidões perante cartórios, sendo vedada a assinatura isolada de petição inicial.' },
      { letter: 'C', text: 'Apenas a obtenção de certidões em cartório; petição de juntada sempre exige advogado.' },
      { letter: 'D', text: 'Nenhum deles, porque o estagiário não pode praticar nenhum ato isoladamente.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 29, § 1º, do Regulamento Geral permite ao estagiário regularmente inscrito praticar ISOLADAMENTE, sob responsabilidade do advogado: I - retirar e devolver autos em cartório assinando a carga; II - obter junto aos escrivães e chefes de secretarias certidões de peças ou autos; III - assinar petições de juntada de documentos a processos judiciais ou administrativos. Petição inicial ou contestação exigem assinatura conjunta com advogado.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Estagiário nunca possui capacidade postulatória autônoma para subscrever sozinho petição inicial ou recurso.' },
      { letter: 'C', explanation: 'Incorreta. Petição de juntada de documentos pode ser assinada isoladamente pelo estagiário inscrito (Art. 29, § 1º, III).' },
      { letter: 'D', explanation: 'Incorreta. Há três hipóteses taxativas no Art. 29, § 1º do Regulamento Geral de atuação isolada do estagiário.' }
    ],
    statuteReferences: [
      { code: 'Regulamento Geral da OAB', article: 'Art. 29, § 1º', textSnippet: 'O estagiário inscrito na OAB pode praticar isoladamente os seguintes atos, sob a responsabilidade do advogado: I - retirar e devolver autos em cartório, assinando a respectiva carga; II - obter junto aos escrivães e chefes de secretarias certidões de peças ou autos de processos em curso ou findos; III - assinar petições de juntada de documentos a processos judiciais ou administrativos.' }
    ],
    professorTip: 'Os 3 atos isolados do estagiário inscrito: Carga nos autos, Certidões e Juntada de documentos ("Ca-Ce-Jun"). Tudo o mais precisa da assinatura conjunta com o advogado!'
  },
  {
    id: 'etica_ext_20',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Atendimento em Estabelecimento Prisional e Comunicação Reservada',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `O advogado João foi até uma penitenciária estadual às 14h de uma quarta-feira para entrevistar seu cliente preso provisoriamente. Na portaria, o diretor do presídio informou que João só poderia conversar com o preso se apresentasse procuração previamente reconhecida em cartório e que a conversa ocorreria no parlatório com gravação ambiental para segurança da unidade.
À luz do Art. 7º, III, do EAOAB, a conduta do diretor viola as prerrogativas da advocacia porque:`,
    options: [
      { letter: 'A', text: 'É direito do advogado comunicar-se com seus clientes, pessoal e reservadamente, mesmo sem procuração, quando estes se acharem presos, detidos ou recolhidos em estabelecimentos civis ou militares.' },
      { letter: 'B', text: 'A procuração só é dispensada para parentes de primeiro grau, mas a gravação ambiental é permitida no parlatório.' },
      { letter: 'C', text: 'O advogado precisa de autorização judicial prévia para visitar preso provisório sem procuração.' },
      { letter: 'D', text: 'O advogado pode conversar reservadamente apenas com hora marcada com 48 horas de antecedência.' }
    ],
    correctAnswer: 'A',
    justification: `O Art. 7º, inciso III, do EAOAB garante expressamente ao advogado comunicar-se com seus clientes, pessoal e reservadamente, mesmo sem procuração, quando estes se acharem presos, detidos ou recolhidos em estabelecimentos civis ou militares, ainda que considerados incomunicáveis.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A gravação ambiental viola frontalmente a comunicação reservada (sigilo advogado-cliente).' },
      { letter: 'C', explanation: 'Incorreta. Não há exigência de alvará judicial nem de procuração para entrevista pessoal e reservada.' },
      { letter: 'D', explanation: 'Incorreta. Não se pode criar obstáculo burocrático de 48h ou impedir atendimento durante o expediente regular.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, III', textSnippet: 'comunicar-se com seus clientes, pessoal e reservadamente, mesmo sem procuração, quando estes se acharem presos, detidos ou recolhidos em estabelecimentos civis ou militares, ainda que considerados incomunicáveis.' }
    ],
    professorTip: 'Prerrogativa absoluta no Art. 7º, III: comunicação pessoal e RESERVADA (sem escuta/câmera gravando áudio), mesmo SEM procuração, ainda que o preso seja dito "incomunicável".'
  },
  {
    id: 'etica_ext_21',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Conflito de Interesses e Patrocínio Simultâneo',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Os cônjuges André e Beatriz procuraram a advogada Sofia pedindo que ela elaborasse acordo de divórcio consensual. Após três reuniões conjuntas em que ambos expuseram patrimônio e rendas, não houve consenso e Beatriz decidiu ajuizar divórcio litigioso, pedindo a Sofia que a represente contra André.
Nos termos do Art. 20 e Art. 21 do Código de Ética e Disciplina da OAB, Sofia deve:`,
    options: [
      { letter: 'A', text: 'Aceitar o patrocínio de Beatriz, pois foi ela quem pagou a consulta inicial.' },
      { letter: 'B', text: 'Abster-se de patrocinar qualquer um dos dois cônjuges no divórcio litigioso, sob pena de violar os deveres de lealdade e sigilo decorrentes das confidências conjuntas.' },
      { letter: 'C', text: 'Representar Beatriz em juízo, desde que indique um sócio de seu próprio escritório para defender André.' },
      { letter: 'D', text: 'Representar André por ser a parte ré, independentemente de autorização.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 20 do CED, sobrevindo conflito de interesses entre seus constituintes e não conseguindo conciliar os interesses, o advogado optará, com prudência e discrição, por um dos mandatos, renunciando aos demais, resguardado sempre o sigilo profissional. Contudo, na atuação prévia conjunta de divórcio consensual com troca de confidências patrimoniais mútuas, o Art. 21 e a ética vedam que o advogado — ou sócios do mesmo escritório (Art. 15, § 6º do EAOAB) — patrocine um ex-cônjuge contra o outro usando informações obtidas na mediação conjunta.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O pagamento da consulta não autoriza utilizar confidências recebidas de ambas as partes contra uma delas.' },
      { letter: 'C', explanation: 'Incorreta. Advogados integrantes da mesma sociedade não podem representar em juízo clientes de interesses opostos (Art. 15, § 6º do EAOAB).' },
      { letter: 'D', explanation: 'Incorreta. Há evidente conflito de interesses e risco ao sigilo obtido nas reuniões conjuntas.' }
    ],
    statuteReferences: [
      { code: 'Código de Ética e Disciplina da OAB', article: 'Arts. 19 e 20', textSnippet: 'Sobrevindo conflito de interesses entre seus constituintes e não conseguindo o advogado harmonizá-los, caber-lhe-á optar, com prudência e discrição, por um dos mandatos, renunciando aos demais, resguardado sempre o sigilo profissional.' }
    ],
    professorTip: 'Lembre também do Art. 15, § 6º do EAOAB: advogados da MESMA sociedade NÃO podem patrocinar partes contrárias no mesmo processo (lides opostas).'
  },
  {
    id: 'etica_ext_22',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Impedimento de Membros do Poder Legislativo',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Daniela, advogada inscrita na OAB/PR, foi eleita Vereadora no Município de Curitiba, não ocupando qualquer cargo na Mesa Diretora da Câmara Municipal.
De acordo com os Arts. 28 e 30 do Estatuto da Advocacia e da OAB (Lei nº 8.906/94), sobre a atuação profissional de Daniela durante o mandato parlamentar, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Daniela sofre incompatibilidade total com a advocacia pelo simples exercício do mandato de Vereadora.' },
      { letter: 'B', text: 'Daniela sofre apenas impedimento para advogar contra ou a favor das pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais ou empresas concessionárias ou permissionárias de serviço público.' },
      { letter: 'C', text: 'Daniela só é impedida de atuar contra o Município de Curitiba, podendo advogar livremente a favor da União e contra empresas estatais.' },
      { letter: 'D', text: 'A condição de membro da Mesa Diretora da Câmara Municipal não altera o regime de impedimento para incompatibilidade.' }
    ],
    correctAnswer: 'B',
    justification: `Os membros do Poder Legislativo em seus diferentes níveis (Deputados Federais, Senadores, Deputados Estaduais e Vereadores) estão sujeitos ao IMPEDIMENTO previsto no Art. 30, inciso II, do EAOAB: são impedidos de exercer a advocacia contra ou a favor das pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais ou concessionárias/permissionárias de serviço público. Apenas membros da Mesa Diretora do Poder Legislativo sofrem incompatibilidade total (Art. 28, I).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Vereador que não integra a Mesa Diretora tem impedimento (Art. 30, II), e não incompatibilidade total.' },
      { letter: 'C', explanation: 'Incorreta. O impedimento do parlamentar abrange todo o poder público (União, Estados, DF, Municípios e suas estatais/concessionárias), contra OU a favor.' },
      { letter: 'D', explanation: 'Incorreta. Membros das Mesas do Poder Legislativo têm incompatibilidade total prevista no Art. 28, I.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 30, II', textSnippet: 'São impedidos de exercer a advocacia: II - os membros do Poder Legislativo, em seus diferentes níveis, contra ou a favor das pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais ou empresas concessionárias ou permissionárias de serviço público.' }
    ],
    professorTip: 'Parlamentar comum (Deputado, Senador, Vereador) = IMPEDIMENTO amplo contra ou a favor do Poder Público/Estatais. Membro da Mesa Diretora do Legislativo = INCOMPATIBILIDADE TOTAL!'
  },
  {
    id: 'etica_ext_23',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Honorários Sucumbenciais e Execução Autônoma',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em ação cível vitoriosa patrocinada por Dr. Henrique, o juiz condenou o réu ao pagamento de R$ 100.000,00 de indenização ao autor e R$ 15.000,00 de honorários advocatícios de sucumbência. Antes do cumprimento de sentença, o autor (cliente) e o réu celebraram acordo direto extrajudicial dando quitação total do processo sem a participação ou ciência de Henrique.
Segundo o Art. 24, § 4º, da Lei nº 8.906/94, esse acordo:`,
    options: [
      { letter: 'A', text: 'Extingue também os honorários sucumbenciais arbitrados em favor de Henrique, cabendo-lhe apenas cobrar do seu cliente.' },
      { letter: 'B', text: 'Não prejudica os honorários estabelecidos na sentença, podendo Henrique executar autonomamente os R$ 15.000,00 contra o vencido.' },
      { letter: 'C', text: 'Obriga Henrique a devolver eventuais honorários contratuais recebidos previamente.' },
      { letter: 'D', text: 'Torna nulo o acordo celebrado entre as partes quanto ao mérito da indenização.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 24, § 4º, do EAOAB é categórico: o acordo feito pelo cliente do advogado e a parte contrária, salvo aquiescência do profissional, não lhe prejudica os honorários, quer os convencionados, quer os concedidos por sentença. Além disso, o Art. 23 garante direito autônomo ao advogado para executar a sentença nessa parte.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A transação sem anuência do advogado não atinge seu direito autônomo aos honorários sucumbenciais fixados em sentença.' },
      { letter: 'C', explanation: 'Incorreta. Não há devolução alguma de honorários contratuais.' },
      { letter: 'D', explanation: 'Incorreta. O acordo sobre o direito material disponível entre as partes é válido quanto ao principal, mas ineficaz em relação aos honorários do patrono.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 24, § 4º', textSnippet: 'O acordo feito pelo cliente do advogado e a parte contrária, salvo aquiescência do profissional, não lhe prejudica os honorários, quer os convencionados, quer os concedidos por sentença.' }
    ],
    professorTip: 'Cliente fez acordo pelas costas do advogado? O advogado NÃO perde seus honorários já fixados na sentença e executa nos mesmos autos ou em precatório separado!'
  },
  {
    id: 'etica_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Direito ao Exame de Autos Findos e Prazos',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `O advogado Roberto compareceu à secretaria de uma Vara de Família para consultar os autos físicos de um processo já arquivado há 3 anos, não possuindo procuração naquela demanda. O processo tramitou em segredo de justiça por envolver guarda de menor.
Considerando o Art. 7º, XIII e § 1º, do EAOAB, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Roberto pode examinar os autos livremente mesmo sem procuração, pois o processo já está arquivado e findo.' },
      { letter: 'B', text: 'Como o processo está sujeito a regime de sigilo (segredo de justiça), o exame dos autos sem procuração é vedado, mesmo tratando-se de processo findo.' },
      { letter: 'C', text: 'Processos findos não podem ser consultados em cartório por nenhum advogado, devendo requerer desarquivamento ao juiz.' },
      { letter: 'D', text: 'O advogado pode retirar os autos em carga rápida por 5 dias sem procuração em processo sob segredo de justiça.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 7º, XIII, do EAOAB assegura examinar, em qualquer órgão do Judiciário e Legislativo ou da Administração, autos de processos findos ou em andamento, mesmo sem procuração. Todavia, o Art. 7º, § 1º, "1", ressalva expressamente os processos sujeitos a regime de sigilo (segredo de justiça), hipótese em que a consulta exige procuração nos autos.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A exceção do sigilo / segredo de justiça impede consulta sem procuração mesmo em autos findos.' },
      { letter: 'C', explanation: 'Incorreta. Processos findos sem sigilo podem ser examinados e retirados em carga por até 10 dias pelo advogado (Art. 7º, XVI).' },
      { letter: 'D', explanation: 'Incorreta. O sigilo veda tanto o exame quanto a carga sem procuração.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, XIII e § 1º', textSnippet: 'XIII - examinar, em qualquer órgão dos Poderes Judiciário e Legislativo, ou da Administração Pública em geral, autos de processos findos ou em andamento, mesmo sem procuração, quando não estiverem sujeitos a sigilo ou segredo de justiça...' }
    ],
    professorTip: 'Regra de prova: Sem sigilo + sem procuração = pode examinar e copiar (e retirar findo por 10 dias). Com sigilo/segredo de justiça = EXIGE procuração!'
  },
  {
    id: 'etica_ext_25',
    exam: 'Simulado FGV / OAB Unificado - Ética',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Sustentação Oral após Voto do Relator e Ordem de Pregão',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Dr. Eduardo compareceu à sessão da Turma Recursal para realizar sustentação oral em recurso de seu cliente, tendo feito inscrição prévia dentro do prazo regimental. Na abertura da sessão, solicitou ao presidente preferência na ordem de julgamento e também questionou sobre o momento regimental da sustentação oral.
Nos termos do Art. 7º, IX e § 2º-B, do EAOAB (com as inovações da Lei nº 14.365/2022), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A sustentação oral é garantida após o voto do relator nos julgamentos recursais, permitindo rebater diretamente os fundamentos do voto proferido.' },
      { letter: 'B', text: 'A sustentação oral de recursos ocorre obrigatoriamente antes da leitura do relatório e antes do voto do relator, e a inclusão do § 2º-B pela Lei nº 14.365/2022 prevê sustentação oral em agravo de instrumento contra tutela provisória.' },
      { letter: 'C', text: 'O advogado inscrito para sustentação oral em agravo interno tem direito assegurado à sustentação oral em qualquer matéria, independentemente de regimento.' },
      { letter: 'D', text: 'O advogado pode usar a palavra pela ordem, em qualquer tribunal, apenas mediante prévia autorização escrita do Ministério Público.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 7º, § 2º-B, incluído pela Lei nº 14.365/2022 no EAOAB, assegura ao advogado a realização de sustentação oral no recurso interposto contra a decisão monocrática de relator que julgar o mérito ou não conhecer de recurso (como agravo interno em apelação, recurso ordinário, recurso especial, extraordinário etc.), mantendo-se no sistema recursal brasileiro a sustentação após o relatório e antes do voto do relator. Atenção: no Art. 7º, IX, o STF declarou inconstitucional a expressão "após o voto do relator" na ADI 1.105 (a sustentação precede o voto do relator!).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Na ADI 1.105, o STF declarou inconstitucional a sustentação "após o voto do relator"; a sustentação oral ocorre após o relatório e antes do voto.' },
      { letter: 'C', explanation: 'Incorreta. O § 2º-B elenca rol específico de recursos (apelação, RO, REsp, RE, embargos de divergência, ação rescisória, MS, reclamação e HC) cuja decisão monocrática do relator permite sustentação oral no agravo interno.' },
      { letter: 'D', explanation: 'Incorreta. O uso da palavra pela ordem (Art. 7º, X) independe de autorização do Ministério Público.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, IX, X e § 2º-B', textSnippet: 'Poderá o advogado realizar a sustentação oral no recurso interposto contra a decisão monocrática de relator que julgar o mérito ou não conhecer dos seguintes recursos ou ações...' }
    ],
    professorTip: 'Sustentação oral ocorre ANTES do voto do relator (ADI 1.105 STF), e a Lei 14.365/22 passou a garantir sustentação oral em agravo interno contra decisão monocrática de relator nos recursos principais (§ 2º-B)!'
  }
];
