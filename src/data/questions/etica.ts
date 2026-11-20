import { LegalQuestion } from '../../types';

export const ETICA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'oab39_etica_01',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Incompatibilidades e Impedimentos',
    difficulty: 'Médio',
    statement: `Lucas, advogado com dez anos de atuação profissional ilibada, foi aprovado em concurso público e tomou posse no cargo efetivo de Diretor-Geral de Secretaria de Vara Cível do Tribunal de Justiça do respectivo Estado. Lucas procura seu antigo sócio para saber como ficará sua inscrição nos quadros da OAB e se poderá continuar patrocinando as causas cíveis de seus familiares mais próximos.
Considerando o que dispõe a Lei nº 8.906/94 (Estatuto da Advocacia e da OAB), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Lucas terá sua inscrição cancelada perante a OAB, sendo vedada qualquer atividade de advocacia em caráter definitivo.' },
      { letter: 'B', text: 'Lucas terá sua inscrição suspensa perante a OAB, pois o exercício de cargo de direção no Poder Judiciário gera incompatibilidade temporária com a advocacia.' },
      { letter: 'C', text: 'Lucas terá sua inscrição cancelada perante a OAB, em razão de o cargo ser incompatível de modo definitivo, mesmo em causa própria ou de familiares.' },
      { letter: 'D', text: 'Lucas sofrerá apenas impedimento para advogar contra a Fazenda Pública estadual que o remunera, podendo atuar livremente na Justiça Federal e em causas familiares.' }
    ],
    correctAnswer: 'B',
    justification: `A investidura em cargo de direção ou chefia no Poder Judiciário acarreta incompatibilidade temporária com o exercício da advocacia (art. 28, inciso IV, da Lei nº 8.906/94). Como se trata de cargo público passível de exoneração voluntária, opera-se o licenciamento/suspensão do exercício (art. 12, inciso II, do EAOAB), e não o cancelamento definitivo (reservado às hipóteses do art. 11).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Cancelamento definitivo ocorre apenas nas hipóteses taxativas do Art. 11 (morte, cassação, ou cargos com incompatibilidade definitiva como magistratura ou MP).' },
      { letter: 'C', explanation: 'Incorreta. Cargos de servidores do Judiciário geram licenciamento (suspensão) da inscrição nos termos do Art. 12, II.' },
      { letter: 'D', explanation: 'Incorreta. Cargos de chefia no Judiciário geram incompatibilidade total (Art. 28, IV), e não mero impedimento.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 28, IV', textSnippet: 'A advocacia é incompatível, mesmo em causa própria, com as seguintes atividades: IV - ocupantes de cargos ou funções de direção em órgãos do Poder Judiciário...' },
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 12, II', textSnippet: 'Licencia-se o profissional que: II - passar a exercer, em caráter temporário, atividade incompatível com o exercício da advocacia.' }
    ],
    professorTip: 'Memorize para a OAB: Chefia e direção no Judiciário = Incompatibilidade TOTAL. Como é cargo de provimento efetivo/comissionado (não vitalício de juiz/promotor), a inscrição é SUSPENSA/LICENCIADA, e não cancelada!'
  },
  {
    id: 'oab38_etica_02',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Honorários Advocatícios e Cláusula Quota Litis',
    difficulty: 'Fácil',
    statement: `Mariana celebrou contrato de prestação de serviços advocatícios com o cliente Roberto para ajuizamento de reclamatória trabalhista. No contrato, convencionou-se a cláusula de quota litis (honorários de êxito no percentual de 30% do benefício econômico obtido). Ao final da execução vitoriosa, Roberto recebeu valores e Mariana reteve 30% acordados a título de honorários contratuais, além de levantar integralmente os honorários de sucumbência arbitrados pelo juiz em 15%. Roberto insurgiu-se alegando que Mariana não poderia cumular ambas as verbas.
Sobre os honorários advocatícios e a cláusula quota litis, assinale a afirmativa correta segundo o Código de Ética e Disciplina da OAB:`,
    options: [
      { letter: 'A', text: 'A cumulação é vedada em qualquer hipótese, devendo o advogado optar ou pelos honorários contratuais ou pelos sucumbenciais.' },
      { letter: 'B', text: 'A cláusula quota litis é admitida excepcionalmente, desde que a soma dos honorários contratuais com os sucumbenciais não ultrapasse as vantagens auferidas pelo próprio cliente.' },
      { letter: 'C', text: 'Os honorários de sucumbência pertencem com exclusividade ao cliente para recomposição de seus prejuízos contratuais.' },
      { letter: 'D', text: 'A cláusula quota litis é nula de pleno direito no processo trabalhista por envolver crédito de natureza estritamente alimentar.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do Art. 50 do Código de Ética e Disciplina da OAB (CED), a adoção da cláusula quota litis é admitida excepcionalmente quando o cliente não possuir condições financeiras, com a estrita limitação de que os honorários contratuais acrescidos dos honorários sucumbenciais não podem ser superiores aos valores líquidos percebidos pelo cliente.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O Estatuto da OAB e o CED autorizam expressamente a cumulação de honorários contratuais com sucumbenciais.' },
      { letter: 'C', explanation: 'Incorreta. Conforme o Art. 23 do EAOAB, os honorários de sucumbência pertencem exclusivamente ao advogado.' },
      { letter: 'D', explanation: 'Incorreta. A quota litis é amplamente praticada e válida na esfera trabalhista e cível.' }
    ],
    statuteReferences: [
      { code: 'Código de Ética e Disciplina da OAB', article: 'Art. 50', textSnippet: 'Na hipótese da adoção de cláusula quota litis... os honorários... quando acrescidos dos honorários da sucumbência, não podem ser superiores às vantagens advindas a favor do constituinte ou do cliente.' },
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 23', textSnippet: 'Os honorários incluídos na condenação, por arbitramento ou sucumbência, pertencem ao advogado, tendo este direito autônomo para executar a sentença nesta parte.' }
    ],
    professorTip: 'O advogado NUNCA pode auferir mais que o próprio cliente no resultado final (Honorários Contratuais + Sucumbência ≤ O que o cliente leva).'
  },
  {
    id: 'oab37_etica_03',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Sigilo Profissional e Inviolabilidade',
    difficulty: 'Médio',
    statement: `Um delegado de polícia intimou o advogado Felipe para prestar depoimento na condição de testemunha, sob pena de desobediência. O objeto do depoimento versava sobre confidências que o empresário investigado fez a Felipe em seu escritório durante consulta jurídica sigilosa para contratação de defesa. O cliente não o autorizou a depor.
Diante das prerrogativas da advocacia insculpidas na Lei nº 8.906/94 (EAOAB), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Felipe tem o direito e o dever de recusar-se a depor como testemunha sobre fatos de que tomou conhecimento no exercício profissional, mesmo se desobrigado pelo cliente.' },
      { letter: 'B', text: 'Felipe é obrigado a depor caso o constituinte o autorize formalmente por escrito, cessando de pronto o sigilo profissional.' },
      { letter: 'C', text: 'Felipe somente poderia recusar-se a depor se tivesse procuração com poderes especiais outorgada pelo investigado.' },
      { letter: 'D', text: 'A autoridade policial pode conduzir coercitivamente o advogado para depor caso a apuração verse sobre organização criminosa.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 7º, inciso XIX, do EAOAB assegura ao advogado o direito de recusar-se a depor como testemunha em processo no qual funcionou ou deva funcionar, ou sobre fatos relacionados com pessoa de quem seja ou foi advogado, mesmo quando autorizado ou desobrigado pelo constituinte. O sigilo profissional é de ordem pública.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Mesmo que o cliente autorize expressamente, o advogado pode e deve manter o sigilo se julgar necessário à honra e à ética profissional.' },
      { letter: 'C', explanation: 'Incorreta. A consulta jurídica prévia já é acobertada por sigilo absoluto, independentemente de procuração.' },
      { letter: 'D', explanation: 'Incorreta. Condução coercitiva de advogado para depor sobre fatos de cliente é flagrante abuso de autoridade e violação de prerrogativas.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, XIX', textSnippet: 'São direitos do advogado: XIX - recusar-se a depor como testemunha em processo no qual funcionou ou deva funcionar, ou sobre fato relacionado com pessoa de quem seja ou foi advogado, mesmo quando autorizado ou desobrigado pelo constituinte.' }
    ],
    professorTip: 'O sigilo da advocacia protege a cidadania, não apenas o advogado. Mesmo que o cliente diga "pode contar tudo", o advogado tem a PRERROGATIVA de se recusar a depor!'
  },
  {
    id: 'oab40_etica_04',
    exam: 'XL Exame de Ordem Unificado (OAB 40) - FGV / 2024',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Sociedade de Advogados e Exercício Profissional',
    difficulty: 'Médio',
    statement: `Os advogados Bruno e Carla desejam constituir uma Sociedade Simples de Advocacia no Estado de São Paulo. Bruno já integra outra sociedade de advogados sediada na mesma comarca da capital paulista. Carla, por sua vez, pretende registrar na sociedade o estudante de Direito Rodrigo como sócio de capital com 10% de participação para captação de recursos.
Consoante o Estatuto da Advocacia e da OAB (Lei 8.906/94):`,
    options: [
      { letter: 'A', text: 'Nenhum advogado pode integrar mais de uma sociedade de advogados na mesma área territorial do respectivo Conselho Seccional, e é vedada a participação de não-advogado como sócio.' },
      { letter: 'B', text: 'Bruno pode integrar quantas sociedades desejar no mesmo Estado, desde que não atue simultaneamente nos mesmos processos.' },
      { letter: 'C', text: 'Rodrigo pode ser sócio minoritário com poderes restritos de gestão administrativa e financeira.' },
      { letter: 'D', text: 'A sociedade pode ter natureza empresária se optar pelo registro na Junta Comercial do Estado.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 15, § 4º do EAOAB veda expressamente que o advogado integre mais de uma sociedade de advogados ou sociedade individual com sede na mesma base territorial do respectivo Conselho Seccional. Além disso, o art. 16, § 1º proíbe o registro de sociedade que contenha sócio não inscrito como advogado.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A vedação é expressa no art. 15, § 4º do EAOAB.' },
      { letter: 'C', explanation: 'Incorreta. É expressamente vedada a admissão de leigos ou estagiários como sócios (Art. 16, § 1º).' },
      { letter: 'D', explanation: 'Incorreta. Sociedades de advogados têm registro exclusivo na OAB e jamais na Junta Comercial (Art. 16).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 15, § 4º', textSnippet: 'Nenhum advogado pode integrar mais de uma sociedade de advogados, constituir mais de uma sociedade unipessoal de advocacia, ou integrar, simultaneamente, uma sociedade de advogados e uma sociedade unipessoal de advocacia, com sede ou filial na mesma área territorial do respectivo Conselho Seccional.' },
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 16, § 1º', textSnippet: 'A razão social deve ter, obrigatoriamente, o nome de, pelo menos, um advogado responsável pela sociedade, não podendo conter nome de pessoa não inscrita ou não autorizada a advogar.' }
    ],
    professorTip: 'Duas regras de ouro das sociedades da OAB: 1) Proibido estar em mais de uma sociedade no mesmo estado; 2) Proibido sócio investidor ou leigo. Sociedade de advogados é registrada na OAB, NUNCA na Junta Comercial!'
  },
  {
    id: 'oab39_etica_05',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Infrações Disciplinares e Locupletação',
    difficulty: 'Difícil',
    statement: `Advogado recebeu quantia de R$ 80.000,00 mediante alvará judicial expedido em nome de sua cliente. O advogado reteve o valor integral por mais de 8 meses, ignorando ligações e notificações da constituinte, prestando contas somente após a instauração de representação disciplinar no Tribunal de Ética e Disciplina (TED).
Diante da conduta do advogado, assinale a sanção disciplinar prevista no EAOAB:`,
    options: [
      { letter: 'A', text: 'Censura, conversível em advertência em caso de primariedade.' },
      { letter: 'B', text: 'Suspensão pelo prazo de 30 dias a 12 meses, prorrogável até a efetiva prestação de contas e devolução dos valores.' },
      { letter: 'C', text: 'Exclusão sumária imediata sem direito a recurso.' },
      { letter: 'D', text: 'Multa administrativa de até 10 anuidades, sem afastar a regularidade da inscrição.' }
    ],
    correctAnswer: 'B',
    justification: `A recusa injustificada em prestar contas ou o locupletamento à custa do cliente constitui infração disciplinar sancionada com SUSPENSÃO (art. 37, I do EAOAB). No caso de não prestação de contas e locupletamento (art. 34, XX e XXI), a suspensão perdura até que o profissional satisfaça integralmente a dívida (art. 37, § 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Locupletamento e retenção indevida são infrações graves punidas com suspensão, não mera censura.' },
      { letter: 'C', explanation: 'Incorreta. A exclusão exige processo administrativo regular com quórum qualificado de 2/3 do Conselho Seccional.' },
      { letter: 'D', explanation: 'Incorreta. A multa é sanção acessória cumulativa, não isolada para retenção indevida.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 37, § 2º', textSnippet: 'Nas hipóteses dos incisos XXI e XXIII do art. 34, a suspensão perdura até que satisfaça integralmente a dívida, inclusive com correção monetária.' }
    ],
    professorTip: 'A suspensão por "reter dinheiro do cliente" (locupletamento) tem uma característica que a FGV ama: ela NÃO ACABA no prazo normal de 12 meses enquanto o advogado não devolver cada centavo!'
  },
  {
    id: 'oab38_etica_06',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Direitos e Prerrogativas - Inviolabilidade do Escritório e Sigilo',
    difficulty: 'Médio',
    statement: `Determinada autoridade policial requereu judicialmente mandado de busca e apreensão a ser cumprido no escritório do advogado Felipe, sob a suspeita de que um de seus clientes, investigado por crimes contra o sistema financeiro, teria deixado documentos contábeis no local. O advogado Felipe não é investigado nem indiciado na referida persecução criminal. O magistrado expediu o mandado de forma genérica para 'apreensão de quaisquer documentos e computadores' existentes no endereço profissional.
À luz do Estatuto da Advocacia (Lei 8.906/94 com as alterações das Leis 14.365/22):`,
    options: [
      { letter: 'A', text: 'O mandado é ilegal, pois a inviolabilidade do escritório somente pode ser excepcionada quando houver indícios de autoria ou participação do próprio advogado em crime, sendo nula a ordem genérica ou voltada exclusivamente contra cliente não corréu do causídico.' },
      { letter: 'B', text: 'O mandado é plenamente válido, bastando que a diligência seja acompanhada por um representante da OAB nomeado pela comarca.' },
      { letter: 'C', text: 'A autoridade policial pode apreender todos os computadores do escritório sem restrição, desde que pericie apenas as pastas com o nome do cliente investigado.' },
      { letter: 'D', text: 'A inviolabilidade do escritório é absoluta e impassível de mitigação, nem mesmo na hipótese de o próprio advogado figurar como investigado.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 7º, II e § 6º da Lei 8.906/94 (com a redação dada pela Lei 14.365/2022) assegura a inviolabilidade de seu escritório, de seus instrumentos de trabalho e de sua correspondência. A quebra de inviolabilidade por mandado de busca e apreensão exige que haja indícios de autoria e materialidade de crime praticado pelo PRÓPRIO advogado, sendo expressamente vedada a expedição de mandado de busca e apreensão com o objetivo exclusivo de atingir cliente do advogado não investigado conjuntamente com ele, além de ser nula a ordem genérica (art. 7º, § 6º-F).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A presença de representante da OAB é requisito formal obrigatório, mas a quebra só é permitida se o advogado for investigado, e a ordem deve ser específica e pormenorizada.' },
      { letter: 'C', explanation: 'Incorreta. O art. 7º, § 6º-I veda a apreensão indiscriminada de computadores e equipamentos de trabalho de clientes estranhos à investigação.' },
      { letter: 'D', explanation: 'Incorreta. A inviolabilidade é relativa; se houver indícios contra o próprio advogado, a busca pode ser deferida sob estritos parâmetros legais.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, § 6º e § 6º-F', textSnippet: 'O mandado de busca e apreensão... deverá ser pormenorizado, vedada a sua expedição com o objetivo exclusivo de atingir o cliente do advogado...' }
    ],
    professorTip: 'Regra de Ouro da OAB pós-Lei 14.365/22: Não existe busca e apreensão em escritório de advocacia para pescar provas contra cliente! Só pode haver busca se o PRÓPRIO ADVOGADO for investigado por crime!'
  },
  {
    id: 'oab37_etica_07',
    exam: 'XXXVII Exame de Ordem Unificado (OAB 37) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Publicidade Profissional e Captação Indevida de Clientela',
    difficulty: 'Fácil',
    statement: `Júlia, jovem advogada recém-aprovada na OAB, deseja divulgar sua atuação jurídica. Para tanto, contratou um serviço de publicidade que distribuiu panfletos em pontos de ônibus oferecendo 'consultoria jurídica gratuita e rápida via WhatsApp' e afixou faixas com a frase 'Divórcio rápido e inventário barato: ligue agora'. Além disso, veiculou anúncio pago em rádio local convidando ouvintes a ajuizar ações contra bancos.
Sobre as regras de publicidade na advocacia (Provimento nº 205/2021 do CFOAB e Código de Ética e Disciplina), é correto afirmar que:`,
    options: [
      { letter: 'A', text: 'A conduta de Júlia viola a ética profissional, pois a publicidade jurídica deve ser meramente informativa, discreta e moderada, sendo vedada a mercantilização, distribuição de panfletos, faixas em vias públicas e a veiculação em rádio ou televisão.' },
      { letter: 'B', text: 'As condutas são lícitas com base na liberdade de concorrência e publicidade comercial assegurada pela Lei de Liberdade Econômica.' },
      { letter: 'C', text: 'Apenas a veiculação em rádio é vedada, sendo autorizada a panfletagem física se o advogado atuar no ramo do direito consumerista.' },
      { letter: 'D', text: 'Júlia pode divulgar livremente preços e descontos promocionais para facilitar o acesso à justiça dos hipossuficientes.' }
    ],
    correctAnswer: 'A',
    justification: `O Provimento CFOAB nº 205/2021 e os arts. 39 a 47-A do Código de Ética e Disciplina da OAB estabelecem que a publicidade profissional deve ter caráter meramente informativo e primar pela discrição e sobriedade, não podendo configurar captação indevida de clientela ou mercantilização da profissão. É expressamente vedada a veiculação de publicidade em rádio, cinema e televisão, o uso de outdoors, faixas, muros, a distribuição de panfletos e a menção a valores de serviços ou promessas de resultados.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A advocacia não é atividade mercantil e não se sujeita às regras comuns de publicidade comercial agressiva.' },
      { letter: 'C', explanation: 'Incorreta. Panfletagem em locais públicos é terminantemente proibida na advocacia em qualquer ramo.' },
      { letter: 'D', explanation: 'Incorreta. É vedada a mercantilização e a divulgação de tabelas de preços com fins de captação de clientes.' }
    ],
    statuteReferences: [
      { code: 'Código de Ética e Disciplina da OAB', article: 'Art. 39 e Art. 40', textSnippet: 'A publicidade profissional do advogado tem caráter meramente informativo e deve primar pela discrição e sobriedade, não podendo configurar captação de clientela ou mercantilização da profissão.' },
      { code: 'Provimento CFOAB nº 205/2021', article: 'Art. 6º', textSnippet: 'Fica vedada a publicidade por meio de rádio, cinema e televisão, outdoors, painéis luminosos ou formas assemelhadas, panfletos ou distribuição de brindes...' }
    ],
    professorTip: 'Memorize: Publicidade na advocacia é SÓ INFORMATIVA! Palavras proibidas: "gratuito", "barato", panfletos, rádio, faixas ou mercantilização.'
  },
  {
    id: 'oab36_etica_08',
    exam: 'XXXVI Exame de Ordem Unificado (OAB 36) - FGV / 2022',
    examType: 'OAB',
    board: 'FGV',
    year: 2022,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Mandato, Renúncia e Substabelecimento',
    difficulty: 'Médio',
    statement: `O advogado André recebeu procuração de Cláudio para representá-lo em uma ação indenizatória. No curso do processo, em razão de quebra de confiança, André comunicou formalmente ao cliente a renúncia ao mandato judicial. No dia seguinte à comunicação da renúncia, foi publicada no Diário da Justiça uma intimação para apresentação de apelação no prazo de 15 dias.
Conforme o art. 5º, § 3º da Lei 8.906/94 e o Código de Processo Civil:`,
    options: [
      { letter: 'A', text: 'André deve continuar a representar o constituinte durante os 10 (dez) dias seguintes à notificação da renúncia, salvo se for substituído antes do término desse prazo.' },
      { letter: 'B', text: 'André fica imediatamente exonerado de qualquer obrigação processual no momento exato em que subscrever a petição de renúncia.' },
      { letter: 'C', text: 'André deve obrigatoriamente patrocinar o processo até o trânsito em julgado se a renúncia ocorrer em fase recursal.' },
      { letter: 'D', text: 'O prazo de permanência compulsória de André após a renúncia é de 15 (quinze) dias úteis.' }
    ],
    correctAnswer: 'A',
    justification: `O art. 5º, § 3º do Estatuto da OAB (Lei 8.906/94) e o art. 112, § 1º do CPC/2015 preveem expressamente que o advogado que renunciar ao mandato continuará a representar o mandante nos 10 (dez) dias seguintes à notificação da renúncia, para evitar prejuízos ao cliente, salvo se for substituído antes desse prazo.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A exoneração imediata deixaria o cliente indefeso perante prazos processuais em curso.' },
      { letter: 'C', explanation: 'Incorreta. O direito de renunciar é potestativo e irretratável, respeitado o período de 10 dias de transição.' },
      { letter: 'D', explanation: 'Incorreta. O prazo legal fixado tanto pelo EAOAB quanto pelo CPC é de 10 dias corridos.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 5º, § 3º', textSnippet: 'O advogado que renunciar ao mandato continuará, durante os dez dias seguintes à notificação da renúncia, a representar o mandante, salvo se for substituído antes do término desse prazo.' }
    ],
    professorTip: 'Mnemônico da Renúncia: Renunciou? Fica mais 10 DIAS no processo, a menos que o novo advogado chegue antes! Se tiver prazo fatal nesses 10 dias, é dever do advogado praticar o ato!'
  },
  {
    id: 'oab39_etica_09',
    exam: 'XXXIX Exame de Ordem Unificado (OAB 39) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Honorários Advocatícios e Cláusula Quota Litis (Art. 50 CED)',
    difficulty: 'Médio',
    statement: `Mariana procurou o advogado Carlos para ajuizar uma ação de cobrança de indenização de R$ 200.000,00. Mariana declarou expressamente não dispor de recursos financeiros para arcar com honorários iniciais nem com as custas do processo. Carlos propôs, então, a celebração de contrato de honorários com a cláusula quota litis, estipulando que seus honorários contratuais seriam de 60% (sessenta por cento) do valor líquido auferido na condenação final, arcando Carlos com as custas da lide.
À luz do Código de Ética e Disciplina da OAB (Art. 50), a cláusula quota litis proposta por Carlos é:`,
    options: [
      {
        letter: 'A',
        text: 'Antiética e ilegítima no percentual, pois a participação do advogado em bens ou valores não pode ser superior às vantagens auferidas pelo próprio cliente, e os honorários devem ser representados preferencialmente em pecúnia.'
      },
      {
        letter: 'B',
        text: 'Plenamente válida, pois vigora a ampla autonomia da vontade contratual sem qualquer teto percentual em contratos de risco.'
      },
      {
        letter: 'C',
        text: 'Nula de pleno direito, pois a cláusula quota litis é terminantemente proibida em qualquer hipótese no direito brasileiro.'
      },
      {
        letter: 'D',
        text: 'Válida apenas se o advogado aceitar receber exclusivamente em bens imóveis.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 50 do Código de Ética e Disciplina da OAB autoriza a cláusula quota litis em caráter de excepcionalidade, quando o cliente comprovadamente não possuir condições financeiras para adiantar honorários. Todavia, o parágrafo único do art. 50 estabelece um limite intransponível: 'A participação do advogado em bens particulares do cliente, comprovadamente sem condições pecuniárias, não pode ser superior às vantagens auferidas por este, já computados os honorários sucumbenciais'. Fixar 60% para o advogado e 40% para a cliente viola frontalmente o teto ético, pois o advogado auferiria vantagem econômica maior que a do próprio titular do direito.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. O Código de Ética impõe teto expresso de que a cota do advogado não pode superar a do cliente.' },
      { letter: 'C', explanation: 'Incorreta. A cláusula quota litis é permitida em caráter excepcional quando o cliente for hipossuficiente (Art. 50 CED).' },
      { letter: 'D', explanation: 'Incorreta. A preferência legal é pela fixação em pecúnia.' }
    ],
    statuteReferences: [
      { code: 'Código de Ética e Disciplina da OAB', article: 'Art. 50', textSnippet: 'Na hipótese da adoção de cláusula quota litis, os honorários devem ser necessariamente representados por pecúnia e, quando acrescidos dos honorários da sucumbência, não podem ser superiores às vantagens advindas a favor do constituinte ou do cliente.' }
    ],
    jurisprudence: 'CFOAB, Tribunal de Ética e Disciplina: A contratação ad exitum com cláusula quota litis que reserva ao patrono percentual superior a 50% dos ganhos econômicos da causa configura infração ética disciplinar.',
    professorTip: 'Regra de ouro da Quota Litis (Art. 50 CED): O advogado NUNCA pode ganhar mais do que o cliente na causa! Somando honorários contratuais + sucumbência, o cliente tem que ficar com pelo menos a maioria (máximo 50% para o advogado)!'
  },
  {
    id: 'oab38_etica_10',
    exam: 'XXXVIII Exame de Ordem Unificado (OAB 38) - FGV / 2023',
    examType: 'OAB',
    board: 'FGV',
    year: 2023,
    subject: 'Ética Profissional e Estatuto da OAB',
    topic: 'Prerrogativas do Advogado - Inviolabilidade do Escritório (Lei 14.365/22)',
    difficulty: 'Difícil',
    statement: `Um magistrado de vara criminal expediu mandado genérico de busca e apreensão para ser cumprido no escritório do advogado Felipe, visando apreender documentos e mídias digitais relativos a um cliente de Felipe investigado por crimes contra o sistema financeiro. O mandado não detalhou quais documentos seriam alvo da medida nem fundamentou a necessidade de devassa no escritório, e a autoridade policial cumpriu o mandado sem comunicar previamente a OAB nem permitir a presença de representante da entidade.
À luz das prerrogativas da advocacia consagradas no Art. 7º, II e §§ 6º e 6º-I da Lei nº 8.906/94 (com a redação da Lei nº 14.365/2022):`,
    options: [
      {
        letter: 'A',
        text: 'A busca e apreensão é manifestamente ilegal e nula, pois a violação do escritório exige mandado motivado específico e pormenorizado, decorrente de indícios de autoria do próprio advogado, e deve ser acompanhada por representante da OAB sob pena de nulidade.'
      },
      {
        letter: 'B',
        text: 'A diligência é lícita, pois a inviolabilidade do escritório aplica-se unicamente ao domicílio residencial particular do advogado.'
      },
      {
        letter: 'C',
        text: 'A presença de representante da OAB é mera formalidade facultativa que não acarreta nulidade processual.'
      },
      {
        letter: 'D',
        text: 'O sigilo profissional do advogado cessa automaticamente se o crime investigado envolver crimes financeiros ou corrupção.'
      }
    ],
    correctAnswer: 'A',
    justification: `O Art. 7º, II e § 6º do EAOAB (reforçado pela Lei nº 14.365/2022) consagra a inviolabilidade do escritório ou local de trabalho do advogado, de seus instrumentos de trabalho, de sua correspondência e de suas comunicações. A busca e apreensão no escritório somente é admitida se houver indícios de autoria ou materialidade delitiva PRATICADA PELO PRÓPRIO ADVOGADO (e não por seu cliente), exigindo mandado motivado, específico e pormenorizado, expedido por juiz competente, sob pena de nulidade. Ademais, é OBRIGATÓRIA a presença de representante da OAB para acompanhar a diligência, sob pena de ilicitude probatória e nulidade absoluta de todos os elementos colhidos.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A inviolabilidade alcança expressamente o escritório, local de trabalho e instrumentos profissionais (Art. 7º, II).' },
      { letter: 'C', explanation: 'Incorreta. A presença do representante da OAB é cogente e essencial à validade do ato.' },
      { letter: 'D', explanation: 'Incorreta. O sigilo sobre documentos de clientes é inviolável e não pode ser devassado em investigação dirigida apenas contra o cliente.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.906/94 (EAOAB)', article: 'Art. 7º, II e § 6º', textSnippet: 'Art. 7º São direitos do advogado: II - a inviolabilidade de seu escritório ou local de trabalho, bem como de seus instrumentos de trabalho, de sua correspondência escrita, eletrônica, telefônica e telemática, desde que relativas ao exercício da advocacia... § 6º Presentes indícios de autoria e materialidade da prática de crime por parte de advogado, a autoridade judiciária competente poderá decretar a quebra da inviolabilidade de que trata o inciso II do caput deste artigo, em decisão motivada, expedindo mandado de busca e apreensão, específico e pormenorizado, a ser cumprido na presença de representante da OAB...' }
    ],
    jurisprudence: 'STF, Inq 4.781/DF e HC 186.296/SP: É nula a busca e apreensão em escritório de advocacia desprovida de mandado judicial individualizado e específico ou realizada sem a presença de delegado da Ordem dos Advogados do Brasil.',
    professorTip: 'Super Prerrogativa do Art. 7º, § 6º do EAOAB: Busca e apreensão em escritório de advogado EXIGE: 1) O advogado ser o investigado (não apenas o cliente); 2) Mandado ESPECÍFICO e PORMENORIZADO (nada de mandado genérico para "pescar" provas); 3) Presença OBRIGATÓRIA de Representante da OAB! Faltou um desses? Prova ILÍCITA!'
  }
];
