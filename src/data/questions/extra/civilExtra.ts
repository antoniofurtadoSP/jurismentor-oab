import { LegalQuestion } from '../../../types';

export const CIVIL_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'civ_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Capacidade Civil e Estatuto da Pessoa com Deficiência',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Com as alterações promovidas pelo Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015) no Código Civil, assinale a afirmativa correta sobre incapacidade absoluta e relativa:`,
    options: [
      { letter: 'A', text: 'São absolutamente incapazes os menores de 16 anos e as pessoas com deficiência mental severa.' },
      { letter: 'B', text: 'São absolutamente incapazes apenas os menores de 16 anos; aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade são relativamente incapazes.' },
      { letter: 'C', text: 'A pessoa com deficiência intelectual não pode contrair casamento ou exercer o poder familiar.' },
      { letter: 'D', text: 'A tomada de decisão apoiada substituiu completamente a curatela em todos os casos.' }
    ],
    correctAnswer: 'B',
    justification: `Com a Lei nº 13.146/2015, o Art. 3º do Código Civil passou a prever como absolutamente incapazes APENAS os menores de 16 anos. Quem, por causa transitória ou permanente, não puder exprimir sua vontade é relativamente incapaz (Art. 4º, III).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Deficiência por si só não gera incapacidade civil (Art. 6º e Art. 84 da Lei 13.146/15).' },
      { letter: 'C', explanation: 'Incorreta. A pessoa com deficiência tem plena capacidade para casar, constituir união estável e exercer direitos sexuais/reprodutivos e familiares.' },
      { letter: 'D', explanation: 'Incorreta. A curatela subsiste como medida extraordinária proporcional às necessidades patrimoniais/negociais.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 3º e 4º, III', textSnippet: 'São absolutamente incapazes de exercer pessoalmente os atos da vida civil os menores de 16 anos.' }
    ],
    professorTip: 'No CC atual: Absolutamente incapaz = SÓ menor de 16 anos! Quem não pode exprimir vontade (ex: em coma) = Relativamente incapaz!'
  },
  {
    id: 'civ_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Prescrição vs Decadência e Prazos do Art. 206 CC',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Mariana sofreu dano material e moral em acidente de trânsito causado por imprudência de outro motorista. Passados 2 anos e 8 meses do acidente, ainda não ajuizou ação indenizatória.
Considerando o Art. 206, § 3º, V, do Código Civil, o prazo prescricional para a pretensão de reparação civil é de:`,
    options: [
      { letter: 'A', text: '1 ano.' },
      { letter: 'B', text: '3 anos (logo a pretensão ainda não prescreveu).' },
      { letter: 'C', text: '5 anos.' },
      { letter: 'D', text: '10 anos.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 206, § 3º, inciso V, do Código Civil, prescreve em TRÊS ANOS a pretensão de reparação civil (responsabilidade extracontratual; atenção que na responsabilidade contratual o STJ no EREsp 1.280.825 fixou o prazo decenal do Art. 205 quando não houver regra específica).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. 1 ano aplica-se a hospedeiros, segurado vs segurador (regra geral), tabeliães etc.' },
      { letter: 'C', explanation: 'Incorreta. 5 anos aplica-se a cobrança de dívidas líquidas constantes de instrumento público/particular e CDC (fato do produto/serviço).' },
      { letter: 'D', explanation: 'Incorreta. 10 anos é o prazo geral subsidiário (Art. 205) e o prazo da responsabilidade contratual segundo o STJ.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 206, § 3º, V', textSnippet: 'Prescreve em três anos: V - a pretensão de reparação civil;' }
    ],
    professorTip: 'Reparação civil extracontratual no CC = 3 ANOS! Responsabilidade contratual no CC = 10 ANOS (STJ)! Acidente de consumo no CDC = 5 ANOS!'
  },
  {
    id: 'civ_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Defeitos do Negócio Jurídico (Fraude contra Credores vs Simulação)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Já endividado e em estado de insolvência, Roberto doou seu único apartamento valioso ao irmão, frustrando a garantia de seus credores quirografários anteriores. Em outra negociação, simulou uma venda fictícia a um amigo apenas para ocultar bens no divórcio.
Quanto aos defeitos desses dois negócios jurídicos no Código Civil, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A doação em fraude contra credores é anulável mediante ação pauliana (prazo decadencial de 4 anos); já o negócio simulado é nulo de pleno direito (sem prazo decadencial).' },
      { letter: 'B', text: 'Ambos os negócios são nulos de pleno direito.' },
      { letter: 'C', text: 'Ambos os negócios são anuláveis em 2 anos.' },
      { letter: 'D', text: 'Na doação gratuita em fraude contra credores, exige-se prova de má-fé do donatário.' }
    ],
    correctAnswer: 'A',
    justification: `Fraude contra credores (Arts. 158 a 165 CC) torna o negócio ANULÁVEL em 4 anos via Ação Pauliana (e em negócios gratuitos como doação basta a insolvência/eventus damni, dispensando prova de consilium fraudis). Já a simulação (Art. 167 CC) gera NULIDADE ABSOLUTA, não se convalescendo pelo decurso do tempo (Art. 169).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Fraude contra credores gera anulabilidade (Art. 171, II).' },
      { letter: 'C', explanation: 'Incorreta. Prazo dos vícios é de 4 anos (Art. 178), e simulação gera nulidade imprescritível.' },
      { letter: 'D', explanation: 'Incorreta. Na transmissão gratuita de bens em fraude contra credores dispensa-se a má-fé do donatário (Art. 158 CC).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 158, 167 e 178', textSnippet: 'É nulo o negócio jurídico simulado, mas subsistirá o que se dissimulou, se válido for na substância e na forma.' }
    ],
    professorTip: 'Tabela dos defeitos: Erro, Dolo, Coação, Estado de Perigo, Lesão e Fraude contra Credores = ANULÁVEIS em 4 anos! Simulação = NULO (único defeito que gera nulidade absoluta)!'
  },
  {
    id: 'civ_ext_04',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Desconsideração da Personalidade Jurídica (Art. 50 CC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Uma sociedade limitada fechou as portas deixando dívidas trabalhistas e cíveis por simples má gestão econômica, sem desvio de finalidade e sem confusão patrimonial entre bens dos sócios e da empresa. O credor cível requereu a desconsideração da personalidade jurídica nos termos do Art. 50 do Código Civil (alterado pela Lei da Liberdade Econômica).
Esse pedido deve ser:`,
    options: [
      { letter: 'A', text: 'Deferido, pois a mera insuficiência de patrimônio da empresa basta no Código Civil.' },
      { letter: 'B', text: 'Indeferido, pois no Código Civil vigora a Teoria Maior, exigindo abuso da personalidade jurídica caracterizado pelo desvio de finalidade ou pela confusão patrimonial.' },
      { letter: 'C', text: 'Deferido contra todos os sócios, mesmo os que nunca exerceram administração e não se beneficiaram.' },
      { letter: 'D', text: 'Indeferido apenas porque o Código Civil não admite desconsideração inversa.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 50 do CC adota a TEORIA MAIOR da desconsideração: não basta o mero encerramento ou inadimplemento; exige-se abuso da personalidade jurídica caracterizado por desvio de finalidade ou confusão patrimonial (atingindo apenas os sócios/administradores beneficiados direta ou indiretamente).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Insolvência simples basta na Teoria Menor (Art. 28, § 5º do CDC e Direito Ambiental), não no CC.' },
      { letter: 'C', explanation: 'Incorreta. Atinge apenas bens particulares de administradores ou sócios beneficiados pelo abuso.' },
      { letter: 'D', explanation: 'Incorreta. O Art. 50, § 3º do CC prevê expressamente a desconsideração inversa.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 50', textSnippet: 'Em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial...' }
    ],
    professorTip: 'Código Civil = Teoria MAIOR (exige desvio de finalidade ou confusão patrimonial!). CDC (consumidor) e Ambiental = Teoria MENOR (basta obstáculo ao ressarcimento)!'
  },
  {
    id: 'civ_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Obrigações Solidárias e Remissão de Dívida',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Ana, Bruno e Carla são devedores solidários de uma dívida indivisível em dinheiro de R$ 90.000,00 (quota de R$ 30.000,00 cada) perante o credor Davi. Davi perdoou (remitiu) expressamente a dívida apenas em relação a Ana, mantendo a solidariedade em relação aos demais.
Nos termos do Art. 277 e do Art. 388 do Código Civil, Davi poderá cobrar de Bruno ou Carla o valor máximo de:`,
    options: [
      { letter: 'A', text: 'R$ 90.000,00.' },
      { letter: 'B', text: 'R$ 60.000,00 (abatida a quota-parte de R$ 30.000,00 da devedora remitida).' },
      { letter: 'C', text: 'R$ 30.000,00 de cada um, extinguindo a solidariedade.' },
      { letter: 'D', text: 'Nada, pois o perdão a um codevedor extingue toda a obrigação.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o Art. 277 e Art. 388 do Código Civil, a remissão (perdão) concedida a um dos codevedores extingue a dívida na parte a ele correspondente (R$ 30.000,00), de modo que o credor só poderá acionar os outros codevedores solidários abatendo do débito a quota do remitido (R$ 90.000 - R$ 30.000 = R$ 60.000,00).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não se pode cobrar a quota perdoada dos outros, sob pena de frustrar o perdão em eventual direito de regresso.' },
      { letter: 'C', explanation: 'Incorreta. A remissão pessoal não extingue a solidariedade entre Bruno e Carla pelo restante (R$ 60.000,00).' },
      { letter: 'D', explanation: 'Incorreta. Só extingue a quota correspondente ao devedor beneficiado.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 277 e 388', textSnippet: 'A remissão concedida a um dos co-devedores extingue a dívida na parte a ele correspondente; de modo que, ainda reservando o credor a solidariedade contra os outros, já lhes não pode cobrar o débito sem dedução da parte remitida.' }
    ],
    professorTip: 'Perdão (remissão) ou renúncia à solidariedade em favor de 1 codevedor: abate a quota dele da cobrança solidária restante (Art. 277 e 388 CC).'
  },
  {
    id: 'civ_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Vícios Redibitórios e Evicção',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Lucas comprou um veículo usado de um particular (sem relação de consumo) e, 20 dias após a entrega, descobriu um defeito oculto grave no motor preexistente à compra, que o tornava impróprio ao uso.
De acordo com os Arts. 441 a 446 do Código Civil sobre vícios redibitórios, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Lucas só pode pedir devolução do dinheiro se provar que o vendedor sabia do defeito.' },
      { letter: 'B', text: 'Lucas pode rejeitar o veículo, rescindindo o contrato (ação redibitória), ou reclamar abatimento no preço (ação estimatória / quanti minoris), dentro do prazo decadencial de 30 dias para bem móvel.' },
      { letter: 'C', text: 'O prazo decadencial para vício redibitório de bem móvel no Código Civil é de 90 dias.' },
      { letter: 'D', text: 'Não cabe responsabilidade por vício oculto entre particulares fora do CDC.' }
    ],
    correctAnswer: 'B',
    justification: `Nos contratos comutativos regidos pelo Código Civil, o adquirente pode enjeitar a coisa (ação redibitória) ou pedir abatimento do preço (ação estimatória) em 30 dias se móvel e 1 ano se imóvel (Art. 445). O conhecimento prévio do alienante apenas o obriga a pagar também perdas e danos além da restituição (Art. 443).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A ignorância do alienante não o exime de restituir o preço + despesas; só exclui perdas e danos.' },
      { letter: 'C', explanation: 'Incorreta. 90 dias é prazo de vício aparente/oculto de bem durável no CDC; no Código Civil são 30 dias (móvel) e 1 ano (imóvel).' },
      { letter: 'D', explanation: 'Incorreta. Os Arts. 441 a 446 regulam exatamente os vícios redibitórios nos contratos civis.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 441 a 445', textSnippet: 'O adquirente decai do direito de obter a redibição ou abatimento no preço no prazo de trinta dias se a coisa for móvel, e de um ano se for imóvel, contado da entrega efetiva...' }
    ],
    professorTip: 'Vício redibitório no CC: Móvel = 30 dias; Imóvel = 1 ano! Se vício só puder ser conhecido depois: conta da ciência, até máximo de 180 dias (móvel) ou 1 ano (imóvel).'
  },
  {
    id: 'civ_ext_07',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Contrato de Compra e Venda entre Ascendente e Descendente / Cônjuges',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sr. Antônio, viúvo com três filhos maiores (Pedro, Maria e João), decidiu vender uma casa de sua propriedade exclusivamente ao filho Pedro por preço justo de mercado. Maria e João não concordaram e não assinaram a escritura.
Nos termos do Art. 496 do Código Civil, essa venda é:`,
    options: [
      { letter: 'A', text: 'Nula de pleno direito.' },
      { letter: 'B', text: 'Anulável, salvo se os outros descendentes (e o cônjuge do alienante, se houver, exceto regime de separação obrigatória) expressamente houverem consentido.' },
      { letter: 'C', text: 'Plenamente válida sem anuência dos demais filhos se o preço for de mercado.' },
      { letter: 'D', text: 'Inexistente juridicamente.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 496 do Código Civil estabelece que é ANULÁVEL a venda de ascendente a descendente, salvo se os outros descendentes e o cônjuge do alienante expressamente houverem consentido (dispensado o consentimento do cônjuge se o regime de bens for o da separação obrigatória). O prazo decadencial para anular é de 2 anos a contar da conclusão do ato (Art. 179).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Pela Súmula 494 do STF e Art. 496 do CC atual, é ANULÁVEL (não mais nula).' },
      { letter: 'C', explanation: 'Incorreta. A lei exige consentimento expresso dos outros descendentes (salvo na troca de valores desiguais? Não, venda exige anuência).' },
      { letter: 'D', explanation: 'Incorreta. O negócio existe e produz efeitos até ser anulado no prazo decadencial de 2 anos (Art. 179).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 496', textSnippet: 'É anulável a venda de ascendente a descendente, salvo se os outros descendentes e o cônjuge do alienante expressamente houverem consentido.' }
    ],
    professorTip: 'Venda de ascendente a descendente sem anuência = ANULÁVEL em 2 anos (Art. 179 CC)! (Atenção: DOAÇÃO de ascendente a descendente NÃO precisa de anuência dos outros irmãos — apenas conta como adiantamento da legítima!).'
  },
  {
    id: 'civ_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Contrato de Fiança e Outorga Uxória / Benefício de Ordem',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Rafael, casado sob o regime da comunhão parcial de bens, prestou fiança em contrato de locação comercial de um amigo sem a autorização (outorga) de sua esposa, Camila.
À luz do Código Civil (Art. 1.647, III) e da Súmula 332 do STJ, essa fiança é:`,
    options: [
      { letter: 'A', text: 'Válida em relação à meação de Rafael.' },
      { letter: 'B', text: 'Totalmente ineficaz (nula/ineficaz em sua integralidade), não respondendo sequer a meação do cônjuge que a prestou.' },
      { letter: 'C', text: 'Válida, pois na comunhão parcial dispensa-se outorga conjugal.' },
      { letter: 'D', text: 'Válida se o locador desconhecia que Rafael era casado.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo a Súmula 332 do STJ: "A fiança prestada sem autorização de um dos cônjuges implica a ineficácia total da garantia." Apenas no regime de separação absoluta de bens (Art. 1.647 CC) é dispensada a outorga conjugal para fiança/aval.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Súmula 332 do STJ afasta a validade até mesmo quanto à meação do fiador.' },
      { letter: 'C', explanation: 'Incorreta. Somente o regime da separação absoluta (ou participação final nos aquestos com pacto específico) dispensa outorga.' },
      { letter: 'D', explanation: 'Incorreta. A ausência da assinatura do cônjuge no instrumento torna a garantia totalmente ineficaz.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.647, III', textSnippet: 'Ressalvado o disposto no art. 1.648, nenhum dos cônjuges pode, sem autorização do outro, exceto no regime da separação absoluta: III - prestar fiança ou aval;' }
    ],
    jurisprudence: 'Súmula 332 do STJ: A fiança prestada sem autorização de um dos cônjuges implica a ineficácia total da garantia.',
    professorTip: 'Súmula 332 STJ = Fiança sem outorga conjugal (salvo separação absoluta) gera INEFICÁCIA TOTAL! E lembre: bem de família do fiador de locação (comercial ou residencial) PODE ser penhorado (Tema 1127 STF e Súmula 549 STJ).'
  },
  {
    id: 'civ_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Responsabilidade Civil Objetiva por Fato de Terceiro e Animais',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Enquanto caminhava pela calçada, uma criança de 10 anos (incapaz) arremessou uma pedra e quebrou o para-brisa de um automóvel estacionado. Em outro ponto da rua, o cachorro de grande porte de um morador escapou pelo portão aberto por descuido e mordeu um pedestre.
De acordo com os Arts. 928, 932 e 936 do Código Civil, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Os pais respondem objetivamente pelos atos dos filhos menores que estiverem sob sua autoridade e em sua companhia; o dono do animal responde objetivamente pelo dano, salvo se provar culpa exclusiva da vítima ou força maior.' },
      { letter: 'B', text: 'Os pais só respondem se o lesado comprovar que educaram mal o filho (culpa in vigilando provada pela vítima).' },
      { letter: 'C', text: 'O incapaz responde solidariamente em igualdade de condições com os pais.' },
      { letter: 'D', text: 'O dono do animal só responde se o animal já tivesse histórico de ataques.' }
    ],
    correctAnswer: 'A',
    justification: `Os Arts. 932, I e 933 do CC estabelecem responsabilidade OBJETIVA (independente de culpa) dos pais pelos filhos menores sob sua autoridade e companhia. O incapaz só responde de forma subsidiária e equitativa se os responsáveis não tiverem obrigação ou meios suficientes (Art. 928). Já o dono/detentor de animal responde objetivamente (Art. 936), salvo culpa exclusiva da vítima ou força maior.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A responsabilidade dos pais pelo Art. 933 do CC atual é objetiva (independentemente de culpa deles).' },
      { letter: 'C', explanation: 'Incorreta. A responsabilidade do incapaz (Art. 928) é subsidiária e mitigada/equitativa.' },
      { letter: 'D', explanation: 'Incorreta. Não se exige periculosidade prévia do animal no Art. 936.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 928, 932, 933 e 936', textSnippet: 'O dono, ou detentor, do animal ressarcirá o dano por este causado, se não provar culpa da vítima ou força maior.' }
    ],
    professorTip: 'Responsabilidade por ato de terceiro (pais, tutores, curadores, empregadores - Art. 933 CC) = OBJETIVA! Dono do animal (Art. 936) = OBJETIVA (só exime se culpa da vítima ou força maior).'
  },
  {
    id: 'civ_ext_10',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direitos Reais: Posse, Detenção e Usucapião Familiar',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Joana e Carlos eram coproprietários de um único imóvel urbano de 180 m², onde residiam com os filhos. Carlos abandonou o lar voluntariamente e desapareceu sem prestar assistência. Joana permaneceu residindo no imóvel de forma ininterrupta, sem oposição, por 2 anos e 4 meses, arcando sozinha com todas as despesas da moradia, e não possui nenhum outro imóvel.
Nos termos do Art. 1.240-A do Código Civil, Joana:`,
    options: [
      { letter: 'A', text: 'Não adquiriu a propriedade integral, pois o menor prazo de usucapião no Brasil é de 5 anos.' },
      { letter: 'B', text: 'Adquiriu o domínio integral do imóvel por usucapião familiar (especial urbana por abandono de lar), preenchido o prazo de 2 anos de posse direta com exclusividade.' },
      { letter: 'C', text: 'Precisa aguardar 10 anos por já ser coproprietária condômina do imóvel.' },
      { letter: 'D', text: 'Só teria direito à usucapião se o imóvel tivesse até 100 m².' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 1.240-A do Código Civil prevê a Usucapião Familiar: aquele que exercer, por 2 (dois) anos ininterruptamente e sem oposição, posse direta, com exclusividade, sobre imóvel urbano de até 250 m² cuja propriedade divida com ex-cônjuge ou ex-companheiro que abandonou o lar, utilizando-o para sua moradia ou de sua família, adquirir-lhe-á o domínio integral, desde que não seja proprietário de outro imóvel urbano ou rural.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A usucapião familiar do Art. 1.240-A tem o menor prazo imobiliário do ordenamento: apenas 2 anos!' },
      { letter: 'C', explanation: 'Incorreta. A regra específica do Art. 1.240-A aplica-se justamente ao ex-cônjuge/ex-companheiro coproprietário.' },
      { letter: 'D', explanation: 'Incorreta. O limite máximo de área é de até 250 m².' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.240-A', textSnippet: 'Aquele que exercer, por 2 (dois) anos ininterruptamente e sem oposição, posse direta, com exclusividade, sobre imóvel urbano de até 250m² cuja propriedade divida com ex-cônjuge ou ex-companheiro que abandonou o lar...' }
    ],
    professorTip: 'Prazos de Usucapião Imobiliária: Familiar = 2 anos (até 250m²); Especial Urbana/Rural = 5 anos (até 250m² urbana / 50ha rural); Ordinária = 10 anos (com justo título e boa-fé; cai para 5 se moradia/investimento); Extraordinária = 15 anos (cai para 10 se moradia/obras)!'
  },
  {
    id: 'civ_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direito das Sucessões: Ordem de Vocação Hereditária e Cônjuge',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Marcos faleceu deixando sua esposa Cláudia (casados pelo regime da comunhão parcial de bens) e dois filhos exclusivos do casal. Durante a constância do casamento, adquiriram onerosamente um apartamento avaliado em R$ 600.000,00 (bem comum). Marcos também possuía uma fazenda herdada de seu pai antes do casamento, avaliada em R$ 400.000,00 (bem particular).
De acordo com o Art. 1.829, I, do Código Civil e o entendimento consolidado do STJ, como se dará a divisão desses bens para Cláudia?`,
    options: [
      { letter: 'A', text: 'Cláudia é meeira e também herdeira sobre o apartamento, não herdando nada na fazenda.' },
      { letter: 'B', text: 'No apartamento (bem comum), Cláudia é apenas MEEIRA (fica com 50% por meação, sem herdar na outra metade); na fazenda (bem particular), Cláudia concorre como HERDEIRA em igualdade com os dois filhos (1/3 para cada).' },
      { letter: 'C', text: 'Cláudia não tem meação nem herança sobre a fazenda por ser bem particular.' },
      { letter: 'D', text: 'Cláudia recebe meação nos dois bens e herança nos dois bens.' }
    ],
    correctAnswer: 'B',
    justification: `Na comunhão parcial de bens, quando o falecido deixa descendentes (Art. 1.829, I, CC + REsp 1.368.123 STJ): nos bens COMUNS, o cônjuge sobrevivente tem MEAÇÃO (50%) e NÃO concorre como herdeiro (os outros 50% vão só aos filhos). Nos bens PARTICULARES, o cônjuge NÃO tem meação, mas CONCORRE como herdeiro em igualdade com os descendentes (aqui 1/3 da fazenda para Cláudia e 1/3 para cada um dos 2 filhos)!`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. É exatamente o oposto na interpretação pacífica do STJ sobre o Art. 1.829, I!' },
      { letter: 'C', explanation: 'Incorreta. Ela concorre exatamente nos bens particulares na comunhão parcial.' },
      { letter: 'D', explanation: 'Incorreta. Meação não incide sobre bem particular herdado antes do casamento.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.829, I', textSnippet: 'A sucessão legítima defere-se na ordem seguinte: I - aos descendentes, em concorrência com o cônjuge sobrevivente, salvo se casado este com o falecido no regime da comunhão universal, ou no da separação obrigatória de bens... ou se, no regime da comunhão parcial, o autor da herança não houver deixado bens particulares;' }
    ],
    jurisprudence: 'STJ - REsp 1.368.123: Na comunhão parcial de bens, o cônjuge sobrevivente concorre com os descendentes apenas nos bens particulares do falecido.',
    professorTip: 'Macete de ouro em Sucessões (Comunhão Parcial + Descendentes): Bem COMUM = só Meação (50%). Bem PARTICULAR = só Herança (concorre com os filhos)!'
  },
  {
    id: 'civ_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direito Real de Habitação do Cônjuge / Companheiro',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Após o falecimento de seu marido, com quem vivia no único imóvel residencial de propriedade exclusiva do falecido (que deixou filhos de um casamento anterior), a viúva Helena continuou morando na casa. Os filhos exclusivos do falecido exigem que Helena pague aluguel pela ocupação exclusiva ou desocupe o imóvel para venda e partilha imediata.
À luz do Art. 1.831 do Código Civil e da jurisprudência do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Os filhos têm razão porque Helena era casada em separação de bens e o imóvel pertencia exclusivamente ao pai.' },
      { letter: 'B', text: 'Ao cônjuge (ou companheiro) sobrevivente, qualquer que seja o regime de bens, é assegurado, sem prejuízo da participação que lhe caiba na herança, o direito real de habitação relativamente ao imóvel destinado à residência da família, desde que seja o único daquela natureza a inventariar, não podendo os herdeiros cobrar aluguel.' },
      { letter: 'C', text: 'O direito real de habitação dura apenas 2 anos após o óbito.' },
      { letter: 'D', text: 'Os filhos podem exigir aluguel proporcional à fração ideal deles enquanto durar a moradia da madrasta.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 1.831 do CC garante ao cônjuge sobrevivente (e o STF/STJ estendem integralmente ao companheiro em união estável), QUALQUER QUE SEJA O REGIME DE BENS, o direito real de habitação vitalício e gratuito sobre o imóvel destinado à residência da família, desde que seja o único daquela natureza a inventariar — sem cobrança de aluguel pelos demais herdeiros.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O direito real de habitação independe do regime de bens.' },
      { letter: 'C', explanation: 'Incorreta. O direito real de habitação é vitalício (enquanto viver o cônjuge/companheiro sobrevivente).' },
      { letter: 'D', explanation: 'Incorreta. O STJ pacifica que o direito real de habitação é gratuito, afastando cobrança de aluguel pelos herdeiros.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.831', textSnippet: 'Ao cônjuge sobrevivente, qualquer que seja o regime de bens, será assegurado, sem prejuízo da participação que lhe caiba na herança, o direito real de habitação relativamente ao imóvel destinado à residência da família, desde que seja o único daquela natureza a inventariar.' }
    ],
    professorTip: 'Direito Real de Habitação (Art. 1.831 CC): Vitalício, Gratuito (sem aluguel!), Qualquer regime de bens, vale para Cônjuge e Companheiro!'
  },
  {
    id: 'civ_ext_13',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direito de Família: União Estável e Regime de Bens',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Bruno e Fernanda passaram a viver em união estável pública, contínua e duradoura, com objetivo de constituir família, sem firmar contrato escrito de convivência. Durante a união, Bruno recebeu R$ 200.000,00 de herança de sua avó e comprou um veículo à vista com parte desse dinheiro, além de adquirirem juntos um apartamento com salário dos dois.
Na dissolução da união estável, nos termos do Art. 1.725 do Código Civil:`,
    options: [
      { letter: 'A', text: 'Aplica-se o regime da comunhão universal, partilhando-se o apartamento e a herança.' },
      { letter: 'B', text: 'Aplica-se, no que couber, o regime da comunhão parcial de bens: partilha-se o apartamento adquirido onerosamente na constância da união, mas não se comunica a herança recebida por Bruno nem o bem sub-rogado exclusivamente com ela.' },
      { letter: 'C', text: 'Sem contrato escrito, presume-se a separação total de bens.' },
      { letter: 'D', text: 'Na união estável o companheiro não tem os mesmos direitos sucessórios do cônjuge.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 1.725 do Código Civil, na união estável, salvo contrato escrito entre os companheiros, aplica-se às relações patrimoniais, no que couber, o regime da COMUNHÃO PARCIAL de bens. Nesse regime, excluem-se da comunhão os bens recebidos por doação ou sucessão (herança) e os sub-rogados em seu lugar (Art. 1.659, I e II).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O regime supletivo é o da comunhão parcial, não o da universal.' },
      { letter: 'C', explanation: 'Incorreta. Só se aplica separação obrigatória se presentes as causas do Art. 1.641 CC (ex: maior de 70 anos, ressalvada a possibilidade de escolha diversa fixada pelo STF no ARE 1.309.642!).' },
      { letter: 'D', explanation: 'Incorreta. O STF no Tema 809 declarou inconstitucional o Art. 1.790 CC, equiparando a sucessão do companheiro à do cônjuge (Art. 1.829).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.725 e Art. 1.659, I', textSnippet: 'Na união estável, salvo contrato escrito entre os companheiros, aplica-se às relações patrimoniais, no que couber, o regime da comunhão parcial de bens.' }
    ],
    professorTip: 'União estável sem contrato = Comunhão Parcial! E atenção à atualização do STF (Tema 1236 / ARE 1.309.642 em 2024): pessoas com mais de 70 anos PODEM escolher outro regime de bens por escritura pública!'
  },
  {
    id: 'civ_ext_14',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Alimentos e Prisão Civil do Devedor (Súmula 309 STJ)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um pai deixou de pagar a pensão alimentícia devida ao filho menor nos últimos 8 meses consecutivos. O advogado da criança pretende pedir a prisão civil do devedor pelo rito do Art. 528, § 3º, do CPC.
De acordo com a Súmula 309 do STJ e o Art. 528, § 7º, do CPC, o débito alimentar que autoriza a prisão civil do alimentante é o que compreende:`,
    options: [
      { letter: 'A', text: 'Todas as 8 prestações vencidas integralmente.' },
      { letter: 'B', text: 'Até as 3 prestações anteriores ao ajuizamento da execução e as que se vencerem no curso do processo.' },
      { letter: 'C', text: 'Apenas as prestações vencidas nos últimos 12 meses.' },
      { letter: 'D', text: 'Somente prestações futuras, vedada prisão por parcelas anteriores ao ajuizamento.' }
    ],
    correctAnswer: 'B',
    justification: `Conforme a Súmula 309 do STJ e o Art. 528, § 7º, do CPC, o débito alimentar que autoriza a prisão civil do alimentante é o que compreende até as **3 prestações anteriores ao ajuizamento da execução** e as que se vencerem no curso do processo. As parcelas mais antigas (os outros 5 meses) devem ser cobradas pelo rito da penhora/expropriação.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Parcelas anteriores às últimas 3 perdem o caráter de urgência alimentar imediata para fins de prisão civil.' },
      { letter: 'C', explanation: 'Incorreta. O limite é de até 3 prestações anteriores ao ajuizamento (+ as vincendas no curso).' },
      { letter: 'D', explanation: 'Incorreta. Abrange até as 3 anteriores ao ajuizamento e as que vencerem depois.' }
    ],
    statuteReferences: [
      { code: 'Código de Processo Civil / CC', article: 'Art. 528, § 7º CPC', textSnippet: 'O débito alimentar que autoriza a prisão civil do alimentante é o que compreende até as 3 (três) prestações anteriores ao ajuizamento da execução e as que se vencerem no curso do processo.' }
    ],
    jurisprudence: 'Súmula 309 do STJ.',
    professorTip: 'Prisão civil por alimentos: até 3 parcelas anteriores + as que vencerem no curso do processo! E o cumprimento da pena NÃO quita a dívida!'
  },
  {
    id: 'civ_ext_15',
    exam: 'Prova Acadêmica / Direito Civil',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Boa-fé Objetiva e Institutos Correlatos (Venire, Supressio, Tu Quoque)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Um locador tolerou, por mais de quatro anos consecutivos, que o inquilino pagasse o aluguel todo dia 15 de cada mês em vez do dia 5 previsto em contrato, sem jamais aplicar multa ou reclamar. Repentinamente, no 50º mês, notificou o inquilino exigindo resolução contratual imediata e cobrança retroativa de todas as multas moratórias dos últimos quatro anos.
A defesa do inquilino fundamentada na boa-fé objetiva (Art. 422 CC) invoca o instituto denominado:`,
    options: [
      { letter: 'A', text: 'Exceptio non adimpleti contractus.' },
      { letter: 'B', text: 'Supressio (perda de uma posição jurídica pelo não exercício prolongado que gerou legítima expectativa na contraparte) e Venire contra factum proprium (proibição de comportamento contraditório).' },
      { letter: 'C', text: 'Cláusula rebus sic stantibus.' },
      { letter: 'D', text: 'Duty to mitigate the loss.' }
    ],
    correctAnswer: 'B',
    justification: `Na doutrina civilista da boa-fé objetiva (Art. 422 CC): **Supressio** (Verwirkung) é a perda de um direito/posição jurídica pelo seu não exercício durante lapso temporal prolongado, gerando na outra parte a legítima confiança de que não seria mais exercido (criando paralelamente a *surrectio* em favor do devedor). O rompimento brusco dessa confiança caracteriza também **venire contra factum proprium**.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Exceção do contrato não cumprido refere-se a não cumprir sua prestação enquanto o outro não cumprir a dele (Art. 476).' },
      { letter: 'C', explanation: 'Incorreta. Rebus sic stantibus fundamenta a revisão contratual por onerosidade excessiva superveniente (Art. 478).' },
      { letter: 'D', explanation: 'Incorreta. Duty to mitigate the loss é o dever do credor de não agravar deliberadamente o próprio prejuízo.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 113, 187 e 422', textSnippet: 'Os contratantes são obrigados a guardar, assim na conclusão do contrato, como em sua execução, os princípios de probidade e boa-fé.' }
    ],
    professorTip: 'Funções parcelares da Boa-fé Objetiva em provas: Venire contra factum proprium (contradição); Supressio (perda do direito pelo não uso longo) + Surrectio (surgimento do direito); Tu quoque (não exigir do outro o que você mesmo descumpriu)!'
  },
  {
    id: 'civ_ext_16',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Cláusula Penal Compensatória vs Moratória',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Em contrato de prestação de serviços de R$ 100.000,00, as partes pactuaram cláusula penal compensatória para o caso de inadimplemento total no valor de R$ 150.000,00. O contratado cumpriu 70% do serviço antes de se tornar inadimplente.
À luz dos Arts. 412 e 413 do Código Civil, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A cláusula penal de R$ 150.000,00 é devida integralmente pelo princípio do pacta sunt servanda.' },
      { letter: 'B', text: 'O valor da cominação imposta na cláusula penal não pode exceder o da obrigação principal (Art. 412), e a penalidade deve ser reduzida equitativamente pelo juiz tendo em vista que a obrigação principal foi cumprida em parte (Art. 413).' },
      { letter: 'C', text: 'O juiz nunca pode reduzir de ofício o valor da cláusula penal.' },
      { letter: 'D', text: 'Para exigir a cláusula penal compensatória, o credor deve provar o prejuízo efetivo.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 412 do CC limita o teto da cláusula penal ao valor da obrigação principal (R$ 100.000,00). Além disso, o Art. 413 impõe ao juiz ("deverá ser reduzida equitativamente") reduzir a penalidade se a obrigação principal tiver sido cumprida em parte ou se o montante for manifestamente excessivo. E pelo Art. 416, para exigir a pena convencional não é necessário que o credor alegue prejuízo.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Viola frontalmente o teto do Art. 412 e o dever de redução proporcional do Art. 413.' },
      { letter: 'C', explanation: 'Incorreta. O Art. 413 usa verbo imperativo ("deverá"), sendo norma de ordem pública cognoscível de ofício.' },
      { letter: 'D', explanation: 'Incorreta. Pelo Art. 416 CC, dispensa-se prova de prejuízo.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 412, 413 e 416', textSnippet: 'O valor da cominação imposta na cláusula penal não pode exceder o da obrigação principal. A penalidade deve ser reduzida eqüitativamente pelo juiz se a obrigação principal tiver sido cumprida em parte...' }
    ],
    professorTip: 'Cláusula Penal: 1) Teto = valor da obrigação principal (Art. 412); 2) Cumprimento parcial ou excesso = juiz DEVE reduzir equitativamente (Art. 413); 3) Não precisa provar prejuízo (Art. 416)!'
  },
  {
    id: 'civ_ext_17',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Testamento e Limite da Legítima dos Herdeiros Necessários',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Pedro, solteiro, sem filhos nem netos, possui mãe viva (herdeira necessária) e dois irmãos. Seu patrimônio líquido é de R$ 1.000.000,00. Pedro deseja fazer testamento público deixando toda a sua herança para uma instituição de caridade, sem contemplar sua mãe nem seus irmãos.
Nos termos dos Arts. 1.789, 1.845 e 1.846 do Código Civil, esse testamento:`,
    options: [
      { letter: 'A', text: 'É válido em relação a 100% do patrimônio, pois Pedro não tem filhos.' },
      { letter: 'B', text: 'É válido apenas quanto à parte disponível (50% = R$ 500.000,00), devendo ser preservada a legítima de 50% da mãe (ascendente é herdeira necessária); os irmãos são colaterais e não têm legítima.' },
      { letter: 'C', text: 'É nulo por completo porque herdeiro necessário impede qualquer testamento.' },
      { letter: 'D', text: 'Deve reservar 25% para a mãe e 25% para os irmãos.' }
    ],
    correctAnswer: 'B',
    justification: `São herdeiros necessários (Art. 1.845 CC): os DESCENDENTES, os ASCENDENTES e o CÔNJUGE (e companheiro, conforme STF). A eles pertence de pleno direito a metade dos bens da herança, constituindo a LEGÍTIMA (Art. 1.846). Como Pedro tem mãe viva (ascendente), só pode dispor livremente por testamento de 50% (R$ 500.000,00), reduzindo-se a disposição testamentária excedente (Art. 1.967). Irmãos são colaterais e NÃO são herdeiros necessários.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A mãe (ascendente) é herdeira necessária.' },
      { letter: 'C', explanation: 'Incorreta. O excesso não anula o testamento; apenas sofre redução até caber na metade disponível (Art. 1.967).' },
      { letter: 'D', explanation: 'Incorreta. Irmãos são herdeiros facultativos (colaterais), podendo ser livremente excluídos por testamento.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 1.845, 1.846 e 1.850', textSnippet: 'São herdeiros necessários os descendentes, os ascendentes e o cônjuge. Pertence aos herdeiros necessários, de pleno direito, a metade dos bens da herança, constituindo a legítima.' }
    ],
    professorTip: 'Herdeiros Necessários (50% garantido): Descendentes, Ascendentes, Cônjuge/Companheiro (DAC). Irmãos/Tios/Sobrinhos = Colaterais -> NÃO são herdeiros necessários (basta testar 100% para excluí-los)!'
  },
  {
    id: 'civ_ext_18',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direito de Vizinhança: Passagem Forçada vs Servidão de Passagem',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Um imóvel rural tornou-se naturalmente encravado, sem qualquer saída para via pública, nascente ou porto. O proprietário pleiteia judicialmente acesso através do terreno vizinho mediante pagamento de indenização cabal.
Nos termos do Art. 1.285 do Código Civil, esse instituto denomina-se:`,
    options: [
      { letter: 'A', text: 'Servidão predial voluntária.' },
      { letter: 'B', text: 'Passagem forçada (direito de vizinhança decorrente da lei, independentemente de registro, mediante indenização cabal).' },
      { letter: 'C', text: 'Usucapião de trânsito.' },
      { letter: 'D', text: 'Comodato imobiliário legal.' }
    ],
    correctAnswer: 'B',
    justification: `Passagem forçada (Art. 1.285 CC) é direito de vizinhança imposto por lei quando o prédio está encravado (sem acesso à via pública, nascente ou porto), impondo ao vizinho constranger-se a dar passagem mediante indenização cabal. Não se confunde com servidão de passagem (direito real sobre coisa alheia constituído por contrato/usucapião quando o imóvel já tem saída, mas quer uma mais cômoda).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Servidão depende de negócio jurídico ou usucapião + registro e visa maior comodidade, não encravamento absoluto.' },
      { letter: 'C', explanation: 'Incorreta. O direito decorre diretamente da lei pelo encravamento.' },
      { letter: 'D', explanation: 'Incorreta. Comodato é empréstimo gratuito de coisa infungível.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.285', textSnippet: 'O dono do prédio que não tiver acesso a via pública, nascente ou porto, pode, mediante pagamento de indenização cabal, constranger o vizinho a lhe dar passagem...' }
    ],
    professorTip: 'Imóvel ENCRAVADO (sem saída) = Passagem Forçada (direito de vizinhança, decorre da lei). Imóvel COM saída que busca atalho mais cômodo = Servidão (direito real, exige acordo/registro)!'
  },
  {
    id: 'civ_ext_19',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Bem de Família Legal (Lei nº 8.009/90) e Exceções à Impenhorabilidade',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Marcos reside com sua família em seu único imóvel residencial próprio, que possui valor elevado (R$ 3 milhões). Contra Marcos tramitam três execuções distintas: (1) cobrança de cotas condominiais do próprio imóvel; (2) cobrança de IPTU do próprio imóvel; e (3) dívida de empréstimo pessoal bancário comum sem garantia hipotecária.
À luz da Lei nº 8.009/90 (Art. 3º), o imóvel de Marcos:`,
    options: [
      { letter: 'A', text: 'É impenhorável nas três execuções, porque vale proteção absoluta da moradia.' },
      { letter: 'B', text: 'Pode ser penhorado nas execuções de cotas condominiais e de IPTU (obrigações propter rem do próprio prédio), mas é impenhorável na execução do empréstimo pessoal comum (independentemente de seu alto valor).' },
      { letter: 'C', text: 'É penhorável também no empréstimo bancário por valer mais de R$ 1 milhão.' },
      { letter: 'D', text: 'Só é protegido se tiver sido instituído por escritura pública no Cartório de Imóveis.' }
    ],
    correctAnswer: 'B',
    justification: `O bem de família legal da Lei nº 8.009/90 independe de escritura pública e não possui teto de valor (STJ protege até imóveis suntuosos!). Contudo, a impenhorabilidade não é oponível contra créditos de IPTU, taxas e contribuições devidas em função do próprio imóvel familiar (incluindo despesas condominiais, conforme Art. 3º, IV, da Lei 8.009/90).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. IPTU e condomínio do próprio imóvel são exceções clássicas do Art. 3º, IV.' },
      { letter: 'C', explanation: 'Incorreta. A Lei nº 8.009/90 não fixa limite máximo de valor para o único imóvel residencial.' },
      { letter: 'D', explanation: 'Incorreta. Registro em cartório é exigido apenas para o bem de família voluntário do Código Civil (Art. 1.711).' }
    ],
    statuteReferences: [
      { code: 'Lei 8.009/90', article: 'Art. 1º e Art. 3º, IV', textSnippet: 'A impenhorabilidade é oponível em qualquer processo de execução... salvo se movido: IV - para cobrança de impostos, predial ou territorial, taxas e contribuições devidas em função do imóvel familiar;' }
    ],
    professorTip: 'Exceções ao Bem de Família (Art. 3º Lei 8.009/90) mais cobradas: Condomínio/IPTU do próprio imóvel, pensão alimentícia, financiamento do próprio imóvel, hipoteca dada pelo casal, FIADOR de locação e produto de crime!'
  },
  {
    id: 'civ_ext_20',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direito de Laje e Propriedade Superficiária',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sobre o direito real de laje disciplinado nos Arts. 1.510-A a 1.510-E do Código Civil (incluído pela Lei nº 13.465/2017), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A instituição do direito real de laje atribui ao titular fração ideal do terreno subjacente.' },
      { letter: 'B', text: 'O titular do direito real de laje responderá pelos encargos e tributos que incidirem sobre a sua unidade autônoma, podendo aliená-la livremente, mas o direito real de laje NÃO contempla atribuição de fração ideal de terreno.' },
      { letter: 'C', text: 'O direito de laje só pode ser instituído sobre a superfície superior da construção-base, jamais no subsolo.' },
      { letter: 'D', text: 'Não existe direito de preferência do titular da construção-base em caso de venda da laje.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 1.510-A, §§ 2º e 3º, do CC dispõe que o direito real de laje abre matrícula própria, autoriza o titular a usar, gozar e dispor da unidade autônoma (suportando seus encargos/tributos), MAS a instituição do direito real de laje NÃO implica a atribuição de fração ideal de terreno ao titular da laje (diferenciando-se do condomínio edilício). Pode ser instituído sobre o espaço aéreo OU sobre o subsolo.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O Art. 1.510-A, § 4º veda expressamente a atribuição de fração ideal de terreno.' },
      { letter: 'C', explanation: 'Incorreta. O Art. 1.510-A, § 1º permite expressamente em superfície superior OU inferior (subsolo).' },
      { letter: 'D', explanation: 'Incorreta. O Art. 1.510-D assegura direito de preferência recíproco (prazo de 30 dias).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 1.510-A e 1.510-D', textSnippet: 'A instituição do direito real de laje não implica a atribuição de fração ideal de terreno ao titular da laje ou a participação proporcional em áreas já edificadas.' }
    ],
    professorTip: 'Direito Real de Laje: matrícula própria + NÃO tem fração ideal do terreno + pode em cima ou no subsolo + tem direito de preferência recíproco (30 dias)!'
  },
  {
    id: 'civ_ext_21',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Contrato de Locação (Lei 8.245/91) e Cláusula de Vigência',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Gustavo alugou uma sala comercial pelo prazo determinado de 5 anos. O contrato escrito continha cláusula de vigência em caso de alienação do imóvel, mas NÃO foi averbado na matrícula do imóvel no Cartório de Registro de Imóveis. No 2º ano do contrato, o proprietário vendeu o imóvel a uma empresa compradora, que notificou Gustavo para desocupar em 90 dias.
Segundo o Art. 8º da Lei de Locações (Lei nº 8.245/91), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A compradora deve respeitar os 5 anos porque o contrato contém cláusula de vigência.' },
      { letter: 'B', text: 'A compradora poderá denunciar o contrato concedendo o prazo de 90 dias para desocupação, pois a oponibilidade da cláusula de vigência contra o adquirente exige que o contrato esteja averbado junto à matrícula do imóvel.' },
      { letter: 'C', text: 'O prazo de desocupação nesse caso é de 30 dias.' },
      { letter: 'D', text: 'A venda de imóvel alugado sem prévia consulta ao locatário sempre anula a compra e venda.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 8º da Lei nº 8.245/91 exige três requisitos cumulativos para que o novo adquirente seja obrigado a respeitar o contrato de locação: 1) prazo determinado; 2) cláusula de vigência em caso de alienação; e 3) estar AVERBADO junto à matrícula do imóvel no Registro de Imóveis. Sem a averbação na matrícula, o adquirente pode denunciar o contrato com prazo de 90 dias para desocupação.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Cláusula de vigência sem averbação na matrícula não produz eficácia real contra terceiro adquirente.' },
      { letter: 'C', explanation: 'Incorreta. O prazo legal do Art. 8º da Lei 8.245/91 é de 90 dias.' },
      { letter: 'D', explanation: 'Incorreta. A adjudicação por preterição ao direito de preferência (Art. 33) também exige que o contrato de locação tenha sido averbado pelo menos 30 dias antes da alienação; sem averbação, cabe no máximo perdas e danos.' }
    ],
    statuteReferences: [
      { code: 'Lei 8.245/91 (Lei do Inquilinato)', article: 'Art. 8º', textSnippet: 'Se o imóvel for alienado durante a locação, o adquirente poderá denunciar o contrato, com o prazo de noventa dias para a desocupação, salvo se a locação for por tempo determinado e o contrato contiver cláusula de vigência em caso de alienação e estiver averbado junto à matrícula do imóvel.' }
    ],
    professorTip: 'Trinca do Art. 8º da Lei de Locações: Prazo determinado + Cláusula de vigência + AVERBAÇÃO na matrícula = comprador respeita. Faltou um dos 3 = comprador denuncia dando 90 dias!'
  },
  {
    id: 'civ_ext_22',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Teoria da Imprevisão e Resolução por Onerosidade Excessiva',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Em contrato de fornecimento de execução continuada, um evento extraordinário e imprevisível disparou o custo da matéria-prima em 300%, tornando a prestação excessivamente onerosa para o fornecedor e gerando extrema vantagem para a outra parte. O fornecedor pediu a resolução do contrato em juízo (Art. 478 CC), mas o comprador ofereceu modificar equitativamente as condições contratuais para restabelecer o equilíbrio.
Nos termos do Art. 479 do Código Civil:`,
    options: [
      { letter: 'A', text: 'O contrato deve ser obrigatoriamente resolvido, não cabendo revisão.' },
      { letter: 'B', text: 'A resolução poderá ser evitada, oferecendo-se o réu a modificar equitativamente as condições do contrato.' },
      { letter: 'C', text: 'A onerosidade excessiva aplica-se também aos contratos aleatórios de risco por natureza.' },
      { letter: 'D', text: 'O devedor em mora também pode invocar a teoria da imprevisão para cancelar dívida antiga.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo Art. 479 do Código Civil, diante do pedido de resolução por onerosidade excessiva (Art. 478), a resolução poderá ser evitada oferecendo-se o réu a modificar equitativamente as condições do contrato (princípio da conservação dos negócios jurídicos).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A conservação mediante revisão equitativa (Art. 479) evita a resolução.' },
      { letter: 'C', explanation: 'Incorreta. Aplica-se a contratos de execução continuada ou diferida comutativos.' },
      { letter: 'D', explanation: 'Incorreta. Quem já está em mora não pode se beneficiar da superveniência de onerosidade (Art. 399 CC).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 478 e 479', textSnippet: 'A resolução poderá ser evitada, oferecendo-se o réu a modificar eqüitativamente as condições do contrato.' }
    ],
    professorTip: 'Compare CC vs CDC na revisão: No Código Civil (Art. 478), exige fato extraordinário E IMPREVISÍVEL + extrema vantagem da outra parte. No CDC (Art. 6º, V), basta fato superveniente excessivamente oneroso (NÃO exige imprevisibilidade!).'
  },
  {
    id: 'civ_ext_23',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direito de Família: Guarda Compartilhada como Regra',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `No divórcio litigioso de Paulo e Ana, não há consenso sobre a guarda da filha comum de 7 anos. Ambos estão aptos a exercer o poder familiar e moram na mesma cidade, sem histórico de violência doméstica. Ana pleiteia a guarda unilateral alegando que os pais não se dão bem.
De acordo com o Art. 1.584, § 2º, do Código Civil, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A ausência de consenso amigável entre os pais impede a guarda compartilhada.' },
      { letter: 'B', text: 'Quando não houver acordo entre a mãe e o pai quanto à guarda do filho, encontrando-se ambos os genitores aptos a exercer o poder familiar, será aplicada a guarda compartilhada, salvo se um dos genitores declarar que não deseja a guarda ou se houver elementos de risco de violência doméstica/familiar.' },
      { letter: 'C', text: 'A guarda compartilhada significa obrigatoriamente divisão exata de metade dos dias da semana em cada casa, extinguindo os alimentos.' },
      { letter: 'D', text: 'A guarda unilateral é a regra legal sempre que houver litígio.' }
    ],
    correctAnswer: 'B',
    justification: `O Art. 1.584, § 2º, do CC (com alteração da Lei 13.058/14 e Lei 14.713/23 sobre risco de violência doméstica) estabelece a GUARDA COMPARTILHADA como regra legal mesmo sem acordo entre os pais, bastando aptidão de ambos ao poder familiar, salvo se um deles não desejar a guarda ou houver probabilidade de risco de violência doméstica ou familiar.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A jurisprudência do STJ e o Art. 1.584, § 2º determinam guarda compartilhada mesmo sem diálogo harmônico, salvo risco de violência.' },
      { letter: 'C', explanation: 'Incorreta. Guarda compartilhada significa responsabilização conjunta nas decisões da vida do filho (base de moradia única com convivência equilibrada), não implicando alternância rígida de casas nem dispensa de pensão alimentícia.' },
      { letter: 'D', explanation: 'Incorreta. A guarda unilateral é exceção.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.584, § 2º', textSnippet: 'Quando não houver acordo entre a mãe e o pai quanto à guarda do filho, encontrando-se ambos os genitores aptos a exercer o poder familiar, será aplicada a guarda compartilhada, salvo se um dos genitores declarar ao magistrado que não deseja a guarda da criança ou do adolescente ou quando houver elementos que evidenciem a probabilidade de risco de violência doméstica ou familiar.' }
    ],
    professorTip: 'Guarda Compartilhada = REGRA mesmo sem acordo! Exceções novas (Lei 14.713/23): 1) um genitor declarar não desejar a guarda; 2) risco de violência doméstica/familiar!'
  },
  {
    id: 'civ_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Direitos da Personalidade e Dano Moral da Pessoa Jurídica',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Uma pessoa jurídica teve seu nome empresarial protestado indevidamente por uma instituição financeira em razão de dívida inexistente, sofrendo abalo de crédito perante fornecedores. Além disso, após o falecimento de um escritor famoso, um jornal publicou falsidades ofensivas à sua memória.
À luz dos Arts. 12, 20 e 52 do Código Civil e da Súmula 227 do STJ, assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'Pessoa jurídica não sofre dano moral por não possuir sentimentos íntimos.' },
      { letter: 'B', text: 'Aplica-se às pessoas jurídicas, no que couber, a proteção dos direitos da personalidade (Súmula 227 do STJ admite dano moral à PJ); e os familiares próximos têm legitimidade para defender os direitos da personalidade do falecido.' },
      { letter: 'C', text: 'Os direitos da personalidade extinguem-se totalmente com a morte, impedindo qualquer ação dos herdeiros.' },
      { letter: 'D', text: 'Protesto indevido de pessoa jurídica não gera dano moral presumido (in re ipsa).' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do Art. 52 do CC e da Súmula 227 do STJ, a pessoa jurídica pode sofrer dano moral (honra objetiva / reputação no mercado). E pelo Art. 12, parágrafo único, do CC, em se tratando de morto, terá legitimação para exigir reparação de lesão aos direitos da personalidade o cônjuge sobrevivente, ou qualquer parente em linha reta, ou colateral até o quarto grau.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Embora não tenha honra subjetiva, a PJ tem honra objetiva (reputação/bom nome), tutelada pela Súmula 227 do STJ.' },
      { letter: 'C', explanation: 'Incorreta. O Art. 12, parágrafo único tutela os lesados indiretos da memória do falecido.' },
      { letter: 'D', explanation: 'Incorreta. O STJ reconhece que protesto indevido de título gera dano moral in re ipsa (presumido), inclusive para PJ (salvo Súmula 385 se já houver outra negativação legítima prévia).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 12, parágrafo único e Art. 52', textSnippet: 'Aplica-se às pessoas jurídicas, no que couber, a proteção dos direitos da personalidade.' }
    ],
    jurisprudence: 'Súmula 227 do STJ: A pessoa jurídica pode sofrer dano moral.',
    professorTip: 'Súmula 227 STJ = PJ sofre dano moral (honra objetiva). Súmula 385 STJ = se já havia negativação legítima prévia, nova inscrição indevida NÃO gera dano moral!'
  },
  {
    id: 'civ_ext_25',
    exam: 'Simulado FGV / OAB Unificado - Civil',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Civil',
    topic: 'Transmissão das Obrigações: Cessão de Crédito vs Assunção de Dívida',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Comparando a cessão de crédito (Arts. 286 a 298 do CC) com a assunção de dívida (Arts. 299 a 303 do CC), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A cessão de crédito exige consentimento expresso do devedor para ter validade.' },
      { letter: 'B', text: 'Na cessão de crédito não se exige consentimento do devedor (basta notificá-lo para eficácia perante ele); já a assunção de dívida (transmissão do polo passivo) exige consentimento expresso do credor.' },
      { letter: 'C', text: 'Na cessão de crédito a título oneroso, o cedente responde sempre pela solvência do devedor, mesmo sem estipulação.' },
      { letter: 'D', text: 'O silêncio do credor na assunção de dívida importa aceitação tácita sempre.' }
    ],
    correctAnswer: 'B',
    justification: `Na cessão de crédito (Art. 290 CC), o credor troca de lugar sem precisar pedir autorização ao devedor (basta notificá-lo para que não pague ao credor primitivo). Já na assunção de dívida (Art. 299 CC), muda o devedor — portanto, é indispensável o consentimento EXPRESSO do credor (e o silêncio do credor, quando notificado para dizer em prazo assinado se aceita, interpreta-se como RECUSA!).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A cessão de crédito prescinde de consentimento do devedor; a notificação serve apenas para eficácia do pagamento.' },
      { letter: 'C', explanation: 'Incorreta. Regra geral (cessão pro soluto), o cedente responde apenas pela EXISTÊNCIA do crédito, NÃO pela solvência do devedor (Art. 296 CC, salvo pacto expresso pro solvendo).' },
      { letter: 'D', explanation: 'Incorreta. Pelo Art. 299, parágrafo único do CC, o silêncio do credor interpreta-se como RECUSA!' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Arts. 290, 296 e 299', textSnippet: 'É facultado a terceiro assumir a obrigação do devedor, com o consentimento expresso do credor, ficando exonerado o devedor primitivo...' }
    ],
    professorTip: 'Cessão de crédito = NÃO precisa autorização do devedor (só notificar); cedente garante existência, não solvência. Assunção de dívida = PRECISA consentimento expresso do credor; silêncio = RECUSA!'
  }
];
