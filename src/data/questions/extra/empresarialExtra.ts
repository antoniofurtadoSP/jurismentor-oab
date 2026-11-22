import { LegalQuestion } from '../../../types';

export const EMPRESARIAL_EXTRA_QUESTIONS: LegalQuestion[] = [
  {
    id: 'emp_ext_01',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Empresário Rural e Registro Facultativo (Art. 971 CC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Antônio explora profissionalmente atividade econômica organizada de cultivo de soja em larga escala em sua propriedade rural, há cinco anos, sem nunca ter se inscrito na Junta Comercial. Desejando acessar os institutos da Recuperação Judicial previstos na Lei nº 11.101/2005, Antônio consulta um advogado. À luz do Código Civil e da Lei 14.112/2020:`,
    options: [
      { letter: 'A', text: 'O produtor rural é obrigado a registrar-se na Junta Comercial antes do início de suas atividades, sob pena de ser empresário irregular sem acesso à recuperação judicial, em consonância com a preservação da empresa e a função social da atividade econômica.' },
      { letter: 'B', text: 'O registro do empresário rural na Junta Comercial é facultativo; contudo, uma vez inscrito, equipara-se ao empresário sujeito a registro, podendo requerer recuperação judicial comprovando o exercício da atividade rural por mais de 2 anos mediante documentos contábeis e fiscais.' },
      { letter: 'C', text: 'O produtor rural pessoa física nunca pode requerer recuperação judicial, apenas sociedades anônimas rurais, sem produção de efeitos oponíveis contra terceiros de boa-fé nem habilitação privilegiada.' },
      { letter: 'D', text: 'O cômputo dos 2 anos para recuperação judicial do produtor rural exige obrigatoriamente que o registro na Junta Comercial tenha sido feito há mais de 2 anos, com desconsideração direta da personalidade jurídica sem instauração prévia de incidente.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 971 do Código Civil, o empresário cuja atividade rural constitua sua principal profissão pode requerer inscrição no Registro Público de Empresas Mercantis (Junta Comercial), caso em que ficará equiparado ao empresário comum. Ademais, a Lei 14.112/2020 alterou o art. 48, §§ 2º e 3º, da Lei 11.101/2005 para permitir que o produtor rural comprove o prazo de 2 anos de exercício regular da atividade por meio da Escrituração Contábil Fiscal (ECF) ou livro caixa/DIRPF, mesmo que tenha se registrado na Junta Comercial recentemente.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A inscrição do produtor rural é facultativa (natureza constitutiva da condição de empresário registral, art. 971 CC).' },
      { letter: 'C', explanation: 'Incorreta. O art. 48, § 3º, LRF admite expressamente a recuperação judicial do produtor rural pessoa física.' },
      { letter: 'D', explanation: 'Incorreta. O STJ e o art. 48, § 3º LRF admitem a comprovação do biênio anterior ao registro por documentos fiscais e contábeis.' }
    ],
    statuteReferences: [
      { code: 'Código Civil e Lei 11.101/2005', article: 'Art. 971 CC e Art. 48, § 3º LRF', textSnippet: 'Para a comprovação do prazo estabelecido no caput deste artigo, o cálculo do período de exercício de atividade rural por pessoa física é feito com base no Livro Caixa Digital do Produtor Rural (LCDPR), ou por meio de obrigação legal de registros contábeis...' }
    ],
    professorTip: 'Empresário Rural: Registro na Junta é FACULTATIVO (Art. 971 CC). Se quiser Recuperação Judicial, registra na Junta e prova os 2 anos anteriores pelo Livro Caixa / Imposto de Renda!'
  },
  {
    id: 'emp_ext_02',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Sociedade Limitada Unipessoal (Art. 1.052, §§ 1º e 2º, CC)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Camila pretende constituir sozinha uma sociedade empresária de responsabilidade limitada para abrir uma clínica veterinária, dispondo de capital inicial de R$ 20.000,00 para integralizar à vista. Considerando a legislação societária vigente após a Lei nº 13.874/2019 e a Lei nº 14.195/2021:`,
    options: [
      { letter: 'A', text: 'Camila deverá constituir uma EIRELI e integralizar capital mínimo de 100 salários mínimos, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' },
      { letter: 'B', text: 'Camila poderá constituir uma Sociedade Limitada Unipessoal (slu), não havendo exigência de capital social mínimo nem necessidade de segundo sócio.' },
      { letter: 'C', text: 'A sociedade limitada unipessoal só pode existir temporariamente por até 180 dias até o ingresso de novo sócio, com desconsideração direta da personalidade jurídica sem instauração prévia de incidente.' },
      { letter: 'D', text: 'Na slu, a responsabilidade da única sócia é sempre ilimitada perante os credores, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 1.052, §§ 1º e 2º, do Código Civil (incluído pela Lei da Liberdade Econômica) passou a admitir expressamente a Sociedade Limitada constituída por uma única pessoa (SLU), sem capital mínimo e com plena limitação de responsabilidade ao capital integralizado. Ademais, a Lei 14.195/2021 extinguiu a antiga EIRELI, transformando todas as existentes em SLUs.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A EIRELI foi extinta e substituída pela SLU (Lei 14.195/2021 e Lei 14.382/2022).' },
      { letter: 'C', explanation: 'Incorreta. O antigo prazo de 180 dias para unipessoalidade acidental não impede a SLU permanente.' },
      { letter: 'D', explanation: 'Incorreta. A responsabilidade do sócio único na SLU é limitada ao valor de suas quotas integralizadas.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.052, §§ 1º e 2º', textSnippet: 'A sociedade limitada pode ser constituída por 1 (uma) ou mais pessoas.' }
    ],
    professorTip: 'Adeus EIRELI! Hoje existe a Sociedade Limitada Unipessoal (SLU): 1 único sócio, SEM capital mínimo de 100 salários e COM proteção patrimonial limitada!'
  },
  {
    id: 'emp_ext_03',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Quóruns de Deliberação na Sociedade Limitada (Lei nº 14.451/2022)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Em uma sociedade limitada composta por três sócios, pretende-se deliberar sobre a alteração do contrato social para ampliar o objeto social da empresa e, ainda, sobre a designação de administrador não sócio quando o capital social já está totalmente integralizado. Considerando as alterações promovidas pela Lei nº 14.451/2022 no Código Civil (Arts. 1.061 e 1.076):`,
    options: [
      { letter: 'A', text: 'A modificação do contrato social continua exigindo 3/4 do capital social e a nomeação de administrador não sócio exige unanimidade, com inaplicabilidade automática dos efeitos falimentares fora das hipóteses legais taxativas.' },
      { letter: 'B', text: 'Tanto a modificação do contrato social quanto a designação de administrador não sócio exigem aprovação por votos correspondentes a mais de metade do capital social.' },
      { letter: 'C', text: 'A alteração do contrato social exige unanimidade dos sócios em qualquer hipótese, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' },
      { letter: 'D', text: 'O administrador não sócio não precisa de aprovação em reunião ou assembleia se o contrato for omisso, em consonância com a preservação da empresa e a função social da atividade econômica.' }
    ],
    correctAnswer: 'B',
    justification: `A Lei nº 14.451/2022 reduziu os quóruns societários da Sociedade Limitada no Código Civil: (i) a modificação do contrato social (art. 1.076, II, c/c art. 1.071, V), antes de 3/4, passou a exigir MAIORIA ABSOLUTA (mais da metade do capital social); (ii) a designação de administrador não sócio com capital totalmente integralizado (art. 1.061), antes de 2/3, também passou a exigir MAIS DA METADE do capital social (e 2/3 se o capital ainda não estiver integralizado).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Os quóruns antigos de 3/4 e unanimidade foram reduzidos pela Lei 14.451/2022.' },
      { letter: 'C', explanation: 'Incorreta. A regra hoje é maioria absoluta (> 50% do capital social).' },
      { letter: 'D', explanation: 'Incorreta. Exige aprovação formal segundo o quórum do art. 1.061 do CC.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.061 e Art. 1.076, II', textSnippet: 'A designação de administradores não sócios dependerá da aprovação de, no mínimo, 2/3 (dois terços) dos sócios, enquanto o capital não estiver integralizado, e da aprovação de titulares de quotas correspondentes a mais da metade do capital social, após a integralização.' }
    ],
    professorTip: 'Atualização quentíssima (Lei 14.451/2022): Na LTDA, acabou o quórum de 3/4! Alteração do contrato social = MAIS DA METADE do capital! Administrador não sócio = 2/3 (se capital NÃO integralizado) ou MAIS DA METADE (se JÁ integralizado)!'
  },
  {
    id: 'emp_ext_04',
    exam: 'Prova Semestral Faculdade de Direito - Direito Societário',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Desconsideração da Personalidade Jurídica e Grupo Econômico (Art. 50 CC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Credor quirografário de uma sociedade limitada que encerrou suas atividades sem pagar dívidas pede a desconsideração da personalidade jurídica alegando apenas a insolvência da empresa e o fato de pertencer a um grupo econômico. Conforme o Art. 50 do Código Civil:`,
    options: [
      { letter: 'A', text: 'A mera existência de grupo econômico ou o simples encerramento irregular sem desvio de finalidade autoriza imediatamente a desconsideração civil, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' },
      { letter: 'B', text: 'A desconsideração civil exige abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, não bastando a mera existência de grupo econômico sem a presença desses requisitos.' },
      { letter: 'C', text: 'A desconsideração atinge inclusive sócios minoritários que não tenham sido beneficiados direta ou indiretamente pelo abuso, com inaplicabilidade automática dos efeitos falimentares fora das hipóteses legais taxativas.' },
      { letter: 'D', text: 'Não existe desconsideração inversa da personalidade jurídica no Código Civil, em consonância com a preservação da empresa e a função social da atividade econômica.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 50 do CC adota a Teoria Maior da Desconsideração: é indispensável comprovar abuso da personalidade (desvio de finalidade ou confusão patrimonial), atingindo apenas os sócios ou administradores beneficiados direta ou indiretamente. O § 4º expressamente dispõe que a mera existência de grupo econômico sem tais requisitos não autoriza a desconsideração. O § 3º prevê a desconsideração inversa.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Contraria o § 4º do art. 50 do CC e a Súmula 435 STJ (a dissolução irregular gera responsabilidade de sócio gerente na execução fiscal tributária, mas na cível exige abuso).' },
      { letter: 'C', explanation: 'Incorreta. O caput do art. 50 restringe o alcance aos bens particulares de administradores ou sócios beneficiados direta ou indiretamente pelo abuso.' },
      { letter: 'D', explanation: 'Incorreta. A desconsideração inversa está expressa no § 3º do art. 50 do CC.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 50, caput e §§ 1º a 4º', textSnippet: 'A mera existência de grupo econômico sem a presença dos requisitos de que trata o caput deste artigo não autoriza a desconsideração da personalidade da pessoa jurídica.' }
    ],
    professorTip: 'Teoria MAIOR (Art. 50 CC): Precisa provar Desvio de Finalidade OU Confusão Patrimonial, e só atinge o sócio/administrador BENEFICIADO!'
  },
  {
    id: 'emp_ext_05',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Estabelecimento Empresarial - Trespasse e Sucessão (Art. 1.146 CC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `João vendeu o estabelecimento empresarial (trespasse) de sua padaria para Marcos por instrumento averbado no Registro Público e publicado na imprensa oficial. Consta na escrituração contábil regular da padaria uma dívida de R$ 50.000,00 com o fornecedor de farinha, vencida há 30 dias. Acerca da responsabilidade pelo pagamento dessa dívida segundo o Art. 1.146 do Código Civil:`,
    options: [
      { letter: 'A', text: 'Apenas João (alienante) responde, pois o contrato de trespasse não transmite passivo ao adquirente. Tal entendimento preserva o regime próprio das obrigações empresariais e cambiárias.' },
      { letter: 'B', text: 'O adquirente (Marcos) responde pelo pagamento dos débitos anteriores à transferência, desde que regularmente contabilizados, continuando João solidariamente obrigado pelo prazo de um ano, contado da publicação quanto aos créditos vencidos.' },
      { letter: 'C', text: 'Marcos responde mesmo pelas dívidas ocultas não lançadas na contabilidade, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' },
      { letter: 'D', text: 'A cláusula de não restabelecimento impede João de concorrer com Marcos pelo prazo legal de 10 anos, se omisso o contrato, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' }
    ],
    correctAnswer: 'B',
    justification: `Nos termos do art. 1.146 do CC, no trespasse o adquirente responde pelo pagamento dos débitos anteriores à transferência, DESDE QUE REGULARMENTE CONTABILIZADOS, continuando o devedor primitivo (alienante) SOLIDARIAMENTE obrigado pelo prazo de 1 ANO — contado, quanto aos créditos vencidos, da publicação, e, quanto aos outros, da data do vencimento.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O passivo contabilizado acompanha o trespasse nos termos do art. 1.146.' },
      { letter: 'C', explanation: 'Incorreta. Dívidas cíveis/comerciais não contabilizadas não vinculam o adquirente (ressalvadas dívidas trabalhistas e tributárias que seguem regras próprias).' },
      { letter: 'D', explanation: 'Incorreta. Na omissão do contrato, a proibição de concorrência (cláusula de não restabelecimento) perdura por 5 ANOS subsequentes à transferência (art. 1.147 CC).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.146 e Art. 1.147', textSnippet: 'O adquirente do estabelecimento responde pelo pagamento dos débitos anteriores à transferência, desde que regularmente contabilizados, continuando o devedor primitivo solidariamente obrigado pelo prazo de um ano...' }
    ],
    professorTip: 'Trespasse no CC: Passivo CONTABILIZADO passa para o comprador, e vendedor fica SOLIDÁRIO por 1 ANO! Proibição de concorrência no silêncio do contrato = 5 ANOS (Art. 1.147)!'
  },
  {
    id: 'emp_ext_06',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Cheque Pós-Datado (Súmula 370 STJ) e Prescrição (Súmula 600 STF)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'OFICIAL_OAB',
    statement: `Lúcia emitiu um cheque no valor de R$ 8.000,00 com data de emissão de 10 de janeiro, mas combinou por escrito no próprio título e com o lojista que a apresentação só seria feita em 10 de março ("bom para"). Contudo, o lojista depositou o cheque imediatamente em 12 de janeiro, gerando devolução por insuficiência de fundos e inclusão indevida do nome de Lúcia em cadastro restritivo. Segundo a Súmula 370 do STJ:`,
    options: [
      { letter: 'A', text: 'Por ser o cheque ordem de pagamento à vista, o ajuste de pós-datação não gera qualquer efeito nem indenização.' },
      { letter: 'B', text: 'Caracteriza dano moral a apresentação antecipada de cheque pré-datado.' },
      { letter: 'C', text: 'A apresentação antecipada só gera dano material, exigindo prova de falência da emitente.' },
      { letter: 'D', text: 'O cheque pré-datado perde a qualidade de título executivo extrajudicial.' }
    ],
    correctAnswer: 'B',
    justification: `Embora perante a instituição financeira o cheque seja ordem de pagamento à vista (art. 32 da Lei 7.357/85), entre o emitente e o tomador vige a boa-fé contratual. Assim, a Súmula 370 do STJ firmou que "Caracteriza dano moral a apresentação antecipada de cheque pré-datado".`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Apesar de o banco pagar à vista se houver fundos, a quebra do pacto entre as partes gera responsabilidade civil (Súmula 370 STJ).' },
      { letter: 'C', explanation: 'Incorreta. O dano moral é reconhecido pela Súmula 370 STJ.' },
      { letter: 'D', explanation: 'Incorreta. Mantém plenamente a força executiva.' }
    ],
    statuteReferences: [
      { code: 'Lei do Cheque (Lei 7.357/85)', article: 'Art. 32', textSnippet: 'O cheque é pagável à vista. Considera-se não-escrita qualquer menção em contrário.' }
    ],
    jurisprudence: 'Súmula 370 do STJ.',
    professorTip: 'Súmula 370 STJ: Depositou cheque pré-datado antes do dia combinado = DANO MORAL! E lembre os prazos do cheque: Apresentação = 30 dias (mesma praça) / 60 dias (praça distinta); Execução = 6 meses após o fim do prazo de apresentação!'
  },
  {
    id: 'emp_ext_07',
    exam: 'Prova Semestral Faculdade de Direito - Títulos de Crédito',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Endosso x Cessão Civil de Crédito e Aval x Fiança',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Sobre as garantias e formas de transferência nos títulos de crédito típicos (Decreto nº 57.663/66 - LUG e Código Civil), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O avalista goza do benefício de ordem previsto na fiança civil, respondendo apenas subsidiariamente após excutidos os bens do devedor principal, com manutenção da estrutura de governança societária e da limitação de responsabilidade.' },
      { letter: 'B', text: 'O aval é garantia cambiária autônoma cujo obrigado equipara-se àquele cujo nome indicar, sendo solidária sua responsabilidade e inoponíveis as exceções pessoais do avalizado.' },
      { letter: 'C', text: 'O endosso parcial é válido até o limite expressamente lançado no verso do título, em consonância com a preservação da empresa e a função social da atividade econômica. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'D', text: 'O endosso posterior ao protesto por falta de pagamento produz os mesmos efeitos do endosso cambiário comum, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' }
    ],
    correctAnswer: 'B',
    justification: `O aval (art. 32 da LUG) é garantia autônoma e solidária típica dos títulos de crédito: o dador de aval é responsável da mesma maneira que a pessoa por ele afiançada, mantendo-se sua obrigação mesmo que a obrigação garantida seja nula (salvo vício de forma). Não há benefício de ordem como na fiança.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O benefício de ordem pertence à fiança (contrato civil), não ao aval cambiário.' },
      { letter: 'C', explanation: 'Incorreta. O endosso parcial é NULO (art. 12 da LUG e art. 912, parágrafo único, CC).' },
      { letter: 'D', explanation: 'Incorreta. O endosso póstumo/tardio (após o protesto ou após o prazo para protesto) produz apenas efeitos de CESSÃO ORDINÁRIA de crédito (art. 20 da LUG).' }
    ],
    statuteReferences: [
      { code: 'Decreto 57.663/66 (LUG)', article: 'Art. 12, Art. 20 e Art. 32', textSnippet: 'O dador de aval é responsável da mesma maneira que a pessoa por ele afiançada.' }
    ],
    professorTip: 'Aval x Fiança: AVAL é autônomo, solidário, não tem benefício de ordem (mas exige outorga conjugal no CC se casado fora da separação absoluta — salvo Súmula 540 STJ sobre título típico, que a dispensa nos títulos regulados por lei especial!).'
  },
  {
    id: 'emp_ext_08',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Duplicata Mercantil e Protesto por Indicação (Lei nº 5.474/68 e Lei nº 13.775/18)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Uma indústria vendeu mercadorias a prazo para uma loja varejista, entregou os produtos mediante assinatura no canhoto da nota fiscal e emitiu uma duplicata mercantil. A loja recebeu o título para aceite, porém reteve-o injustificadamente sem devolvê-lo nem pagar no vencimento. Para instruir a execução judicial contra a loja compradora, a indústria deverá:`,
    options: [
      { letter: 'A', text: 'Ajuizar ação monitória exclusivamente, pois duplicata sem assinatura de aceite não pode ser executada. Tal entendimento preserva o regime próprio das obrigações empresariais e cambiárias.' },
      { letter: 'B', text: 'Realizar o protesto por indicações do portador e instruir a execução com o instrumento de protesto acompanhado do comprovante de entrega e recebimento da mercadoria.' },
      { letter: 'C', text: 'Ingressar com pedido de falência imediato sem necessidade de protesto, com manutenção da estrutura de governança societária e da limitação de responsabilidade.' },
      { letter: 'D', text: 'Ajuizar execução baseada somente no boleto bancário sem comprovante de entrega, em consonância com a preservação da empresa e a função social da atividade econômica. Os efeitos da medida vinculam os administradores e os credores sujeitos ao concurso.' }
    ],
    correctAnswer: 'B',
    justification: `Segundo o art. 15, II, da Lei das Duplicatas (Lei 5.474/68), a duplicata não aceita constitui título executivo extrajudicial desde que reúna três requisitos cumulativos: (i) haja sido protestada (inclusive por indicação quando retida ou escritural); (ii) esteja acompanhada de documento hábil comprobatório da entrega e recebimento da mercadoria; e (iii) o sacado não tenha recusado o aceite pelos motivos legais dos arts. 7º e 8º.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A duplicata não aceita tem força executiva se protestada + acompanhada do comprovante de entrega.' },
      { letter: 'C', explanation: 'Incorreta. Pedido de falência por impontualidade injustificada exige dívida líquida superior a 40 salários mínimos e protesto específico para fim falimentar.' },
      { letter: 'D', explanation: 'Incorreta. Sem o comprovante de entrega/recebimento e protesto, o boleto não é título executivo (Súmula 248 STJ exige documento hábil com protesto).' }
    ],
    statuteReferences: [
      { code: 'Lei 5.474/68', article: 'Art. 15, II', textSnippet: 'A cobrança judicial de duplicata ou triplicata será efetuada de conformidade com o processo aplicável aos títulos executivos extrajudiciais (...) II - de duplicata ou triplicata não aceita, contanto que, cumulativamente: a) haja sido protestada; b) esteja acompanhada de documento hábil comprobatório da entrega e recebimento da mercadoria...' }
    ],
    professorTip: 'Execução de Duplicata SEM ACEITE = Protesto + Comprovante de entrega da mercadoria + ausência de recusa justificada (Art. 15, II, Lei 5.474/68)!'
  },
  {
    id: 'emp_ext_09',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Sociedade Anônima - Valores Mobiliários (Ações e Debêntures)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Uma Companhia Aberta pretende captar recursos de longo prazo no mercado de capitais mediante emissão de valores mobiliários que conferem aos seus titulares direito de crédito contra a companhia, com garantia flutuante sobre seu ativo, sem atribuir-lhes inicialmente a qualidade de sócios. O instrumento adequado previsto na Lei nº 6.404/76 é:`,
    options: [
      { letter: 'A', text: 'Ação preferencial sem direito a voto.' },
      { letter: 'B', text: 'Debênture.' },
      { letter: 'C', text: 'Bônus de subscrição.' },
      { letter: 'D', text: 'Parte beneficiária.' }
    ],
    correctAnswer: 'B',
    justification: `As debêntures (art. 52 da Lei 6.404/76) são valores mobiliários representativos de empréstimo/direito de crédito contra a sociedade anônima, nas condições constantes da escritura de emissão e, se houver, do certificado. Podem contar com garantia real, flutuante, quirografária ou subordinada (art. 58).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Ação confere status de sócio (acionista), não direito de crédito de mútuo.' },
      { letter: 'C', explanation: 'Incorreta. Bônus de subscrição confere direito de subscrever ações no aumento de capital.' },
      { letter: 'D', explanation: 'Incorreta. Partes beneficiárias são títulos negociáveis sem valor nominal que conferem direito de crédito eventual consistente na participação nos lucros anuais (proibidas em companhias abertas — art. 47, par. único).' }
    ],
    statuteReferences: [
      { code: 'Lei das S.A. (Lei 6.404/76)', article: 'Art. 52 e Art. 58', textSnippet: 'A companhia poderá emitir debêntures que conferirão aos seus titulares direito de crédito contra ela, nas condições constantes da escritura de emissão e, se houver, do certificado.' }
    ],
    professorTip: 'Valores mobiliários da S.A.: Ação = sócio; Debênture = empréstimo/crédito; Parte beneficiária = participação nos lucros (PROIBIDA na S.A. aberta!); Bônus de subscrição = opção de subscrever futuras ações.'
  },
  {
    id: 'emp_ext_10',
    exam: 'Concurso Magistratura / MP - Direito Empresarial',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Sociedade Anônima - Órgãos Sociais e Conselho de Administração',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Sobre a estrutura administrativa e fiscalizatória das sociedades anônimas na Lei nº 6.404/76 (com as alterações da Lei 14.195/2021), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'O Conselho de Administração é órgão facultativo tanto nas companhias abertas quanto nas fechadas, com manutenção da estrutura de governança societária e da limitação de responsabilidade. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'B', text: 'O Conselho de Administração é obrigatório nas companhias abertas, nas de capital autorizado e nas sociedades de economia mista, enquanto a Diretoria pode ser composta por no mínimo 1 diretor.' },
      { letter: 'C', text: 'O Conselho Fiscal é órgão de funcionamento permanente obrigatório em todas as companhias fechadas, com exclusão integral do crédito garantido dos efeitos da recuperação judicial em curso.' },
      { letter: 'D', text: 'A diretoria da sociedade anônima precisa ser composta por no mínimo 3 diretores residentes no Brasil, em consonância com a preservação da empresa e a função social da atividade econômica.' }
    ],
    correctAnswer: 'B',
    justification: `O Conselho de Administração é obrigatório nas companhias abertas, nas de capital autorizado (arts. 138, § 2º e 168) e nas sociedades de economia mista (art. 239). Ademais, a Lei 14.195/2021 alterou o art. 143 da LSA reduzindo o número mínimo de diretores de 2 para 1 (um) diretor e dispensou a exigência de residência no país (desde que mantenha procurador residente no Brasil para receber citações — art. 146, § 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. É obrigatório nas companhias abertas e de capital autorizado.' },
      { letter: 'C', explanation: 'Incorreta. O Conselho Fiscal é de existência obrigatória, mas seu funcionamento pode ser permanente ou apenas nos exercícios sociais em que for instalado a pedido de acionistas (art. 161).' },
      { letter: 'D', explanation: 'Incorreta. Desde a Lei 14.195/2021 basta 1 diretor, e o diretor não precisa mais residir no Brasil.' }
    ],
    statuteReferences: [
      { code: 'Lei 6.404/76', article: 'Art. 138, § 2º e Art. 143', textSnippet: 'As companhias abertas e as de capital autorizado terão, obrigatoriamente, conselho de administração.' }
    ],
    professorTip: 'Atualização da Lei das S.A.: Diretoria agora pode ter apenas 1 DIRETOR (não são mais 2), e conselheiro/diretor NÃO precisa residir no Brasil!'
  },
  {
    id: 'emp_ext_11',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Recuperação Judicial - Stay Period e Prorrogação (Lei nº 14.112/2020)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Deferido o processamento da recuperação judicial da sociedade empresária Beta, iniciou-se o chamado "stay period" (suspensão do curso da prescrição e de todas as ações e execuções em face do devedor). Segundo o Art. 6º, § 4º, da Lei nº 11.101/2005 (com redação dada pela Lei nº 14.112/2020):`,
    options: [
      { letter: 'A', text: 'O stay period é de 180 dias improrrogáveis em qualquer circunstância, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' },
      { letter: 'B', text: 'A suspensão perdurará pelo prazo de 180 dias, contado do deferimento do processamento da recuperação, prorrogável por igual período uma única vez em caráter excepcional, desde que o devedor não haja concorrido com a superação do lapso temporal.' },
      { letter: 'C', text: 'O stay period suspende inclusive as execuções fiscais tributárias pelo mesmo prazo, em consonância com a preservação da empresa e a função social da atividade econômica. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'D', text: 'Durante o stay period ficam suspensas até mesmo as ações que demandarem quantia ilíquida em fase de conhecimento, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 6º, § 4º, da Lei 11.101/2005 (alterado pela Lei 14.112/2020) fixa o stay period em 180 dias, prorrogável por igual período UMA ÚNICA VEZ em caráter excepcional, se o devedor não tiver dado causa ao atraso. Ações de quantia ilíquida continuam tramitando (§ 1º) e execuções fiscais não são suspensas pelo deferimento (§ 7º-B), embora o juízo da recuperação possa controlar atos de constrição sobre bens de capital essenciais.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A Lei 14.112/2020 positivou a possibilidade de uma única prorrogação de 180 dias.' },
      { letter: 'C', explanation: 'Incorreta. As execuções fiscais não se suspendem (art. 6º, § 7º-B).' },
      { letter: 'D', explanation: 'Incorreta. Ações que demandam quantia ilíquida prosseguem normalmente no juízo de origem (§ 1º).' }
    ],
    statuteReferences: [
      { code: 'Lei 11.101/2005 (LRF)', article: 'Art. 6º, § 4º', textSnippet: 'Na recuperação judicial, as suspensões e a proibição de que tratam os incisos I, II e III do caput deste artigo perdurarão pelo prazo de 180 (cento e oitenta) dias, contado do deferimento do processamento da recuperação, prorrogável por igual período, uma única vez, em caráter excepcional...' }
    ],
    professorTip: 'Stay Period (Art. 6º, § 4º, LRF): 180 dias + 1 única prorrogação de 180 dias (se o devedor não deu causa). Execução fiscal e quantia ilíquida NÃO suspendem!'
  },
  {
    id: 'emp_ext_12',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Créditos Não Sujeitos à Recuperação Judicial e Trava Bancária (Art. 49, § 3º, LRF)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Uma empresa em recuperação judicial adquiriu uma máquina industrial essencial à sua linha de produção mediante contrato de alienação fiduciária em garantia firmado com um banco, antes do pedido de recuperação. Sobre os efeitos da recuperação judicial em face desse crédito fiduciário (Art. 49, § 3º, LRF):`,
    options: [
      { letter: 'A', text: 'O credor fiduciário submete-se integralmente ao plano de recuperação judicial como credor com garantia real, em consonância com a preservação da empresa e a função social da atividade econômica.' },
      { letter: 'B', text: 'O credor proprietário fiduciário não se submete aos efeitos da recuperação judicial; contudo, não é permitida durante o stay period a venda ou retirada do estabelecimento do devedor dos bens de capital essenciais a sua atividade empresarial.' },
      { letter: 'C', text: 'A máquina pode ser apreendida pelo banco já no dia seguinte ao deferimento da recuperação judicial, com produção de efeitos cambiários autônomos e literais para execução contra coobrigados. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'D', text: 'Créditos trabalhistas também ficam excluídos dos efeitos da recuperação judicial, com manutenção da estrutura de governança societária e da limitação de responsabilidade.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 49, § 3º, da LRF exclui da recuperação judicial o credor titular da posição de proprietário fiduciário de bens móveis ou imóveis, arrendador mercantil, proprietário/promitente vendedor com reserva de domínio e adiantamento a contrato de câmbio (ACC). Porém, em sua parte final, proíbe a retirada dos bens de capital essenciais à atividade durante o prazo de suspensão (stay period).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Não se submete ao plano (crédito extraconcursal / não sujeito — "trava bancária").' },
      { letter: 'C', explanation: 'Incorreta. Por ser bem de capital essencial à atividade, fica protegido contra retirada durante o stay period.' },
      { letter: 'D', explanation: 'Incorreta. Créditos trabalhistas sujeitam-se à RJ na Classe I (art. 41, I).' }
    ],
    statuteReferences: [
      { code: 'Lei 11.101/2005 (LRF)', article: 'Art. 49, § 3º', textSnippet: 'Tratando-se de credor titular da posição de proprietário fiduciário de bens móveis ou imóveis (...) seu crédito não se submeterá aos efeitos da recuperação judicial (...) não se permitindo, contudo, durante o prazo de suspensão a que se refere o § 4º do art. 6º desta Lei, a venda ou a retirada do estabelecimento do devedor dos bens de capital essenciais a sua atividade empresarial.' }
    ],
    professorTip: 'Art. 49, § 3º da LRF ("Trava Bancária"): Alienação Fiduciária, Leasing, Reserva de Domínio e ACC NÃO entram na recuperação judicial — mas se o bem for ESSENCIAL à empresa, não pode ser tirado no stay period!'
  },
  {
    id: 'emp_ext_13',
    exam: 'Concurso Magistratura / Procurador - Direito Empresarial',
    examType: 'CONCURSO',
    board: 'CEBRASPE',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Ordem de Classificação de Créditos na Falência (Art. 83 LRF pós-2020)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Decretada a falência de uma sociedade empresária, após pagos os créditos extraconcursais do Art. 84, inicia-se o pagamento dos créditos concursais conforme a ordem atual do Art. 83 da Lei nº 11.101/2005 (após a Lei 14.112/2020). Assinale a opção que apresenta corretamente a ordem dos créditos concursais:`,
    options: [
      { letter: 'A', text: '1º Tributários; 2º Trabalhistas até 150 salários mínimos; 3º Garantia Real. Tal entendimento preserva o regime próprio das obrigações empresariais e cambiárias.' },
      { letter: 'B', text: '1º Trabalhistas e acidentários; 2º Garantia Real; 3º Tributários; 4º Quirografários.' },
      { letter: 'C', text: '1º Garantia Real; 2º Trabalhistas; 3º Quirografários; 4º Tributários. Os efeitos da medida vinculam os administradores e os credores sujeitos ao concurso.' },
      { letter: 'D', text: 'As multas contratuais e penas pecuniárias possuem preferência sobre os créditos quirografários.' }
    ],
    correctAnswer: 'B',
    justification: `Com a reforma da Lei 14.112/2020 no art. 83 da LRF, as antigas classes de privilégio especial e privilégio geral foram revogadas e incorporadas aos quirografários. A ordem concursal atual é: I - Trabalhistas até 150 SM e acidentários; II - Garantia real até o limite do bem; III - Tributários; VI - Quirografários; VII - Multas contratuais e penas pecuniárias; VIII - Subordinados; IX - Juros vencidos após a decretação da falência.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Trabalhistas (até 150 SM) e garantia real preferem aos tributários concursais.' },
      { letter: 'C', explanation: 'Incorreta. Trabalhistas (até 150 SM) vêm antes da garantia real.' },
      { letter: 'D', explanation: 'Incorreta. Multas vêm DEPOIS dos quirografários (inciso VII).' }
    ],
    statuteReferences: [
      { code: 'Lei 11.101/2005 (LRF)', article: 'Art. 83', textSnippet: 'A classificação dos créditos na falência obedece à seguinte ordem: I - os créditos derivados da legislação trabalhista, limitados a 150 (cento e cinquenta) salários-mínimos por credor, e aqueles decorrentes de acidentes de trabalho; II - os créditos gravados com direito real de garantia... III - os créditos tributários...' }
    ],
    professorTip: 'Ordem Concursal da Falência (Art. 83 pós-2020 — acabou privilégio especial/geral!): 1º Trabalhista (150 SM) + Acidente; 2º Garantia Real; 3º Tributário; 4º Quirografário; 5º Multas; 6º Subordinados!'
  },
  {
    id: 'emp_ext_14',
    exam: 'Prova Semestral Faculdade de Direito - Contratos Empresariais',
    examType: 'FACULDADE',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Contrato de Franquia Empresarial (Lei nº 13.966/2019)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Uma rede de cafeterias pretende expandir sua marca por meio do sistema de franquia empresarial. De acordo com a Lei de Franquias vigente (Lei nº 13.966/2019), a Circular de Oferta de Franquia (COF) deve ser entregue ao candidato a franqueado com antecedência mínima de:`,
    options: [
      { letter: 'A', text: '30 dias antes da assinatura do contrato ou pagamento de qualquer taxa, gerando a inobservância nulidade absoluta insanável, com inaplicabilidade automática dos efeitos falimentares fora das hipóteses legais taxativas.' },
      { letter: 'B', text: '10 dias antes da assinatura do contrato ou pré-contrato de franquia ou do pagamento de qualquer tipo de taxa, sob pena de o franqueado poder arguir anulabilidade ou nulidade e exigir restituição corrigida das quantias pagas.' },
      { letter: 'C', text: '5 dias antes da inauguração da loja franqueada, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'D', text: 'O franqueador possui vínculo trabalhista presumido com os empregados contratados pelo franqueado, com manutenção da estrutura de governança societária e da limitação de responsabilidade.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 2º, §§ 1º e 2º, da Lei 13.966/2019 determina a entrega obrigatória da COF com no mínimo 10 dias de antecedência da assinatura de contrato/pré-contrato ou pagamento de taxa, sob pena de anulabilidade/nulidade e devolução corrigida dos valores pagos. Além disso, o art. 1º deixa expresso que a franquia não caracteriza relação de consumo nem vínculo empregatício entre franqueador e franqueado ou seus empregados.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. O prazo legal é de 10 dias (não 30).' },
      { letter: 'C', explanation: 'Incorreta. Conta-se antes da assinatura ou pagamento inicial, no mínimo 10 dias antes.' },
      { letter: 'D', explanation: 'Incorreta. O art. 1º expressamente afasta relação de consumo e vínculo empregatício.' }
    ],
    statuteReferences: [
      { code: 'Lei 13.966/2019', article: 'Art. 1º e Art. 2º, §§ 1º e 2º', textSnippet: 'A Circular de Oferta de Franquia deverá ser entregue ao candidato a franqueado, no mínimo, 10 (dez) dias antes da assinatura do contrato ou pré-contrato de franquia ou, ainda, do pagamento de qualquer tipo de taxa pelo franqueado...' }
    ],
    professorTip: 'Franquia (Lei 13.966/2019): Entrega da COF com ≥ 10 DIAS antes de assinar ou pagar qualquer taxa! Não cria vínculo trabalhista nem relação de consumo!'
  },
  {
    id: 'emp_ext_15',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Propriedade Industrial - Prazo de Patente e Registro de Marca (Lei 9.279/96)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Uma empresa farmacêutica brasileira desenvolveu uma molécula inédita de medicamento e depositou o pedido de patente de invenção junto ao INPI. Considerando a Lei nº 9.279/96 (LPI) e a decisão do STF na ADI 5529 sobre os prazos de vigência das patentes e das marcas:`,
    options: [
      { letter: 'A', text: 'A patente de invenção vigora por 20 anos contados da data do depósito, não se aplicando mais o antigo prazo mínimo de 10 anos contados da concessão.' },
      { letter: 'B', text: 'O registro de marca vigora pelo prazo de 15 anos improrrogáveis, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' },
      { letter: 'C', text: 'A patente de modelo de utilidade vigora por 20 anos contados da concessão, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' },
      { letter: 'D', text: 'Tanto a patente de invenção quanto o registro de marca são renováveis indefinidamente por períodos sucessivos, em consonância com a preservação da empresa e a função social da atividade econômica.' }
    ],
    correctAnswer: 'A',
    justification: `Pelo art. 40 da LPI, a patente de invenção vigora por 20 anos e a de modelo de utilidade por 15 anos, contados da data do depósito. Na ADI 5529, o STF declarou inconstitucional o parágrafo único do art. 40 (que estendia o prazo para no mínimo 10 anos após a concessão), eliminando a prorrogação automática. Já a marca vigora por 10 anos da concessão, prorrogáveis por períodos iguais e sucessivos indefinidamente (art. 133).`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. Marca vigora por 10 anos da concessão e É prorrogável indefinidamente (art. 133 LPI).' },
      { letter: 'C', explanation: 'Incorreta. Modelo de utilidade vigora por 15 anos contados do depósito.' },
      { letter: 'D', explanation: 'Incorreta. Apenas a marca é renovável indefinidamente; patentes caem em domínio público ao fim de 20 ou 15 anos.' }
    ],
    statuteReferences: [
      { code: 'Lei 9.279/96 (LPI)', article: 'Art. 40 e Art. 133', textSnippet: 'A patente de invenção vigorará pelo prazo de 20 (vinte) anos e a de modelo de utilidade pelo prazo 15 (quinze) anos contados da data de depósito.' }
    ],
    jurisprudence: 'STF ADI 5529.',
    professorTip: 'Prazos de PI na ponta da língua: Patente de Invenção = 20 anos (do depósito, sem extensão pela ADI 5529 STF); Modelo de Utilidade = 15 anos (do depósito); Marca = 10 anos (da concessão, prorrogável para sempre)!'
  },
  {
    id: 'emp_ext_16',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Alienação Fiduciária em Garantia (Decreto-Lei nº 911/69 e Lei 14.711/2023)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Em financiamento de veículo garantido por alienação fiduciária, o devedor fiduciante atrasou três parcelas mensais consecutivas. Para constituir o devedor em mora e viabilizar a busca e apreensão do bem conforme o Decreto-Lei nº 911/69 e a Súmula 72 do STJ:`,
    options: [
      { letter: 'A', text: 'A mora decorre automaticamente do vencimento, comprovada por carta registrada com aviso de recebimento enviada ao endereço do devedor no contrato ou por protesto do título.' },
      { letter: 'B', text: 'A comprovação da mora exige notificação pessoal exclusivamente por oficial do cartório, assinada de próprio punho pelo devedor, com desconsideração direta da personalidade jurídica sem instauração prévia de incidente.' },
      { letter: 'C', text: 'Após a execução da liminar de busca e apreensão, o devedor tem 30 dias para purgar a mora pagando apenas as parcelas vencidas, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' },
      { letter: 'D', text: 'A propriedade resolúvel do bem pertence originalmente ao devedor fiduciante, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' }
    ],
    correctAnswer: 'A',
    justification: `Segundo o art. 2º, § 2º, do DL 911/69, a mora decorre do simples vencimento do prazo para pagamento e poderá ser comprovada por carta registrada com aviso de recebimento, não se exigindo que a assinatura constante do AR seja a do próprio destinatário (ou por protesto). Após a execução da liminar, o devedor tem 5 dias para pagar a integralidade da dívida pendente (Súmula 72 STJ / Tema 722) para reaver o bem livre de ônus.`,
    whyWrong: [
      { letter: 'B', explanation: 'Incorreta. A lei dispensa explicitamente que a assinatura no AR seja do próprio devedor.' },
      { letter: 'C', explanation: 'Incorreta. O prazo para purgação da mora após executada a liminar é de 5 DIAS mediante pagamento da integralidade da dívida pendente (art. 3º, §§ 1º e 2º).' },
      { letter: 'D', explanation: 'Incorreta. A propriedade resolúvel pertence ao credor fiduciário; o devedor fica com a posse direta.' }
    ],
    statuteReferences: [
      { code: 'Decreto-Lei 911/69', article: 'Art. 2º, § 2º e Art. 3º, §§ 1º e 2º', textSnippet: 'A mora decorrerá do simples vencimento do prazo para pagamento e poderá ser comprovada por carta registrada com aviso de recebimento, não se exigindo que a assinatura constante do referido aviso seja a do próprio destinatário.' }
    ],
    professorTip: 'DL 911/69: Mora provada por AR no endereço do contrato (qualquer pessoa pode assinar!). Executou busca e apreensão -> devedor tem 5 DIAS para pagar a DÍVIDA INTEGRAL!'
  },
  {
    id: 'emp_ext_17',
    exam: 'Prova Semestral Faculdade de Direito - Direito Falimentar',
    examType: 'FACULDADE',
    board: 'USP/SANFRAN',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Pedido de Falência por Impontualidade Injustificada (Art. 94, I, LRF)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'ACADEMICA',
    statement: `Um credor titular de nota promissória vencida no valor de R$ 42.000,00 (inferior a 40 salários mínimos vigentes à época) pretende requerer a falência de uma sociedade empresária devedora. Nos termos do Art. 94, I, da Lei nº 11.101/2005:`,
    options: [
      { letter: 'A', text: 'Qualquer dívida protestada autoriza o pedido de falência por impontualidade, independentemente do valor, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'B', text: 'O pedido de falência fundado na impontualidade injustificada exige obrigação líquida materializada em título executivo protestado cuja soma ultrapasse o equivalente a 40 salários mínimos na data do pedido.' },
      { letter: 'C', text: 'Os credores não podem reunir-se em litisconsórcio para alcançar o piso de 40 salários mínimos, com afastamento da responsabilidade pessoal dos sócios sem prévia demonstração de abuso.' },
      { letter: 'D', text: 'A execução frustrada também exige o piso mínimo de 40 salários mínimos, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 94, I, da LRF exige para o pedido de falência por impontualidade injustificada que a obrigação líquida materializada em título(s) executivo(s) protestado(s) ultrapasse o equivalente a 40 salários mínimos na data do pedido (admitido o litisconsórcio de credores no § 1º para somar o piso). Já a execução frustrada (inciso II) e os atos de falência (inciso III) NÃO dependem desse piso de 40 salários mínimos.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Há o piso expresso superior a 40 salários mínimos no inciso I.' },
      { letter: 'C', explanation: 'Incorreta. O art. 94, § 1º permite expressamente o litisconsórcio para perfazer o valor mínimo.' },
      { letter: 'D', explanation: 'Incorreta. O piso de 40 SM aplica-se apenas ao inciso I (impontualidade injustificada).' }
    ],
    statuteReferences: [
      { code: 'Lei 11.101/2005 (LRF)', article: 'Art. 94, I e § 1º', textSnippet: 'Será decretada a falência do devedor que: I - sem relevante razão de direito, não paga, no vencimento, obrigação líquida materializada em título ou títulos executivos protestados cuja soma ultrapasse o equivalente a 40 (quarenta) salários-mínimos na data do pedido de falência.' }
    ],
    professorTip: 'Falência por Impontualidade (94, I) = > 40 salários mínimos + protesto especial! Já Execução Frustrada (94, II) e Ato de Falência (94, III) = NÃO exigem os 40 SM!'
  },
  {
    id: 'emp_ext_18',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Sociedade Limitada - Cessão de Quotas e Retirada do Sócio (Arts. 1.029 e 1.057 CC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Na omissão do contrato social de uma sociedade limitada, um dos sócios deseja ceder suas quotas sociais a um terceiro estranho ao quadro societário. De acordo com o Art. 1.057 do Código Civil:`,
    options: [
      { letter: 'A', text: 'Na omissão do contrato, a cessão de quotas a estranho é livre e independe de audiência dos demais sócios, com manutenção da estrutura de governança societária e da limitação de responsabilidade.' },
      { letter: 'B', text: 'Na omissão do contrato, o sócio pode ceder sua quota, total ou parcialmente, a quem seja sócio independentemente de audiência dos outros, ou a estranho, se não houver oposição de titulares de mais de um quarto (1/4) do capital social.' },
      { letter: 'C', text: 'A cessão a estranho exige unanimidade absoluta mesmo que o contrato seja omisso, com produção de efeitos cambiários autônomos e literais para execução contra coobrigados. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'D', text: 'Após averbada a alteração da saída do sócio cedente, ele fica imediatamente livre de qualquer responsabilidade pelas obrigações sociais anteriores, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 1.057 do CC determina que, na omissão do contrato social: entre sócios a cessão é livre; para estranho, é permitida se NÃO houver oposição de titulares de mais de 1/4 (25%) do capital social. E quanto às obrigações sociais anteriores à averbação, o cedente responde solidariamente com o cessionário perante a sociedade e terceiros até 2 anos depois de averbada a modificação (art. 1.003, parágrafo único).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A liberdade plena sem audiência ocorre apenas na cessão para quem JÁ é sócio.' },
      { letter: 'C', explanation: 'Incorreta. Exige apenas que não haja oposição de mais de 1/4 do capital social.' },
      { letter: 'D', explanation: 'Incorreta. Persiste a responsabilidade solidária do cedente por até 2 anos após a averbação (art. 1.003, parágrafo único).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.057 e Art. 1.003, par. único', textSnippet: 'Na omissão do contrato, o sócio pode ceder sua quota, total ou parcialmente, a quem seja sócio, independentemente de audiência dos outros, ou a estranho, se não houver oposição de titulares de mais de um quarto do capital social.' }
    ],
    professorTip: 'Cessão de quotas na omissão do contrato (Art. 1.057): Para SÓCIO = livre! Para ESTRANHO = se não houver oposição de mais de 1/4! Responsabilidade do sócio que sai = 2 ANOS após a averbação!'
  },
  {
    id: 'emp_ext_19',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Nome Empresarial e Transformação / Proteção Territorial (Art. 1.166 CC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `A sociedade limitada "Horizonte Alimentos Ltda." registrou seu nome empresarial exclusivamente na Junta Comercial do Estado de Minas Gerais. Um ano depois, constatou que outra empresa registrou o mesmo nome "Horizonte Alimentos Ltda." na Junta Comercial do Estado de Pernambuco. Sobre a proteção jurídica do nome empresarial segundo o Código Civil:`,
    options: [
      { letter: 'A', text: 'O registro na Junta Comercial de um Estado garante proteção automática e exclusiva ao nome empresarial em todo o território nacional, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' },
      { letter: 'B', text: 'A inscrição do empresário ou dos atos constitutivos das pessoas jurídicas na Junta Comercial assegura o uso exclusivo do nome nos limites do respectivo Estado, podendo o titular estender a proteção a todo o território nacional mediante registro especial ou registro de marca no inpi.' },
      { letter: 'C', text: 'A sociedade limitada só pode usar denominação, sendo-lhe proibido adotar firma social, sem produção de efeitos oponíveis contra terceiros de boa-fé nem habilitação privilegiada.' },
      { letter: 'D', text: 'O registro de marca no inpi confere proteção apenas municipal, em consonância com a preservação da empresa e a função social da atividade econômica. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' }
    ],
    correctAnswer: 'B',
    justification: `Conforme o art. 1.166 do Código Civil, a inscrição na Junta Comercial assegura o uso exclusivo do nome empresarial nos limites do respectivo Estado. Para estender a todo o país, deve requerer arquivamento nas demais Juntas (DNRC/DREI) ou registrar o sinal distintivo como marca no INPI (âmbito nacional — art. 129 da LPI). Além disso, a sociedade limitada pode adotar firma OU denominação (art. 1.158).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A proteção da Junta Comercial é estadual, diferentemente da marca no INPI que é nacional.' },
      { letter: 'C', explanation: 'Incorreta. A sociedade limitada pode optar por firma ou denominação, sempre com a palavra "limitada" ou "Ltda.".' },
      { letter: 'D', explanation: 'Incorreta. O registro de marca no INPI tem abrangência em todo o território nacional.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 1.166', textSnippet: 'A inscrição do empresário, ou dos atos constitutivos das pessoas jurídicas, ou as respectivas averbações, no registro próprio, asseguram o uso exclusivo do nome nos limites do respectivo Estado.' }
    ],
    professorTip: 'Nome Empresarial (Junta Comercial) = proteção ESTADUAL (Art. 1.166 CC)! Marca (INPI) = proteção NACIONAL!'
  },
  {
    id: 'emp_ext_20',
    exam: 'Concurso Defensoria / Procuradoria - Direito Empresarial',
    examType: 'CONCURSO',
    board: 'FCC',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Aprovação do Plano de Recuperação Judicial e Cramdown (Art. 58, § 1º, LRF)',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Submetido o Plano de Recuperação Judicial à Assembleia Geral de Credores, este obteve aprovação nas classes I (trabalhistas), II (garantia real) e IV (ME/EPP), mas foi rejeitado por pequena margem na classe III (quirografários), onde recebeu aprovação de 45% dos credores presentes por valor e por cabeça. O juiz poderá ainda assim conceder a recuperação judicial por "cramdown" (Art. 58, § 1º, LRF)?`,
    options: [
      { letter: 'A', text: 'Não, pois a rejeição em uma única classe impõe sempre a decretação imediata da falência. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'B', text: 'Sim, desde que cumpridos cumulativamente os requisitos: voto favorável de credores que representem mais da metade do valor de todos os créditos presentes à assembleia, aprovação da maioria das classes, e na classe que rejeitou, voto favorável de mais de 1/3 dos credores.' },
      { letter: 'C', text: 'Sim, independentemente da votação obtida na classe dissidente, em consonância com a preservação da empresa e a função social da atividade econômica.' },
      { letter: 'D', text: 'O cramdown é permitido inclusive quando o plano impõe tratamento diferenciado desfavorável à classe que o rejeitou, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' }
    ],
    correctAnswer: 'B',
    justification: `O art. 58, § 1º, da LRF autoriza o juiz a conceder a recuperação judicial mesmo sem aprovação em todas as classes (cramdown) quando cumulativamente: I - voto favorável de credores que representem mais da metade do valor de todos os créditos presentes, independentemente de classes; II - aprovação de 3 das classes (ou 2 se houver 3, ou ao menos 1 se houver 2); III - na classe que rejeitou, voto favorável de MAIS DE 1/3 dos credores (computados por valor e cabeça conforme art. 45), além de não implicar tratamento diferenciado entre credores da classe dissidente (§ 2º).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A LRF prevê expressamente a superação do veto pelo juiz via cramdown.' },
      { letter: 'C', explanation: 'Incorreta. Exige no mínimo voto favorável de mais de 1/3 na classe que o rejeitou.' },
      { letter: 'D', explanation: 'Incorreta. O § 2º proíbe tratamento diferenciado entre os credores da classe que houver rejeitado o plano.' }
    ],
    statuteReferences: [
      { code: 'Lei 11.101/2005 (LRF)', article: 'Art. 58, §§ 1º e 2º', textSnippet: 'O juiz poderá conceder a recuperação judicial com base em plano que não obteve aprovação na forma do art. 45 desta Lei, desde que, na mesma assembleia, tenha obtido, de forma cumulativa...' }
    ],
    professorTip: 'Cramdown na Recuperação Judicial (Art. 58, § 1º): Maioria do valor total presente + Aprovação da maioria das classes + > 1/3 na classe que disse NÃO + Sem discriminação!'
  },
  {
    id: 'emp_ext_21',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Sociedade em Conta de Participação (Arts. 991 a 996 CC)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Pedro (investidor oculto) e Lucas (empreendedor) constituíram uma Sociedade em Conta de Participação (SCP) para realizar um empreendimento imobiliário específico, no qual apenas Lucas atua em seu próprio nome perante fornecedores e compradores. Com base no Código Civil (Arts. 991 a 996):`,
    options: [
      { letter: 'A', text: 'A Sociedade em Conta de Participação adquire personalidade jurídica própria após registro obrigatório na Junta Comercial, com livre alienação e circulação do título ou participação societária entre os interessados.' },
      { letter: 'B', text: 'A atividade constitutiva do objeto social é exercida unicamente pelo sócio ostensivo (Lucas), em seu nome individual e sob sua própria e exclusiva responsabilidade, participando os demais dos resultados correspondentes.' },
      { letter: 'C', text: 'O contrato social da scp produz efeitos imediatos perante terceiros mesmo sem participação do sócio participante nas relações externas, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' },
      { letter: 'D', text: 'A falência do sócio participante acarreta automaticamente a falência do sócio ostensivo, em consonância com a preservação da empresa e a função social da atividade econômica.' }
    ],
    correctAnswer: 'B',
    justification: `A Sociedade em Conta de Participação (art. 991 do CC) é sociedade NÃO PERSONIFICADA: eventual registro de seu contrato social no cartório não lhe confere personalidade jurídica (art. 993). A atividade é exercida unicamente pelo sócio ostensivo em nome próprio e sob sua exclusiva responsabilidade; os sócios participantes (antigos ocultos) não se obrigam perante terceiros, salvo se tomarem parte nas relações do ostensivo com terceiros (art. 993, par. único).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A SCP é sociedade despersonificada, e eventual registro do contrato em cartório não lhe atribui personalidade jurídica (art. 993).' },
      { letter: 'C', explanation: 'Incorreta. O contrato produz efeito somente entre os sócios (art. 993).' },
      { letter: 'D', explanation: 'Incorreta. A falência do sócio ostensivo acarreta a dissolução da SCP (art. 994, § 2º), mas a do participante sujeita o contrato apenas às normas dos contratos bilaterais do falido (§ 3º).' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 991 e Art. 993', textSnippet: 'Na sociedade em conta de participação, a atividade constitutiva do objeto social é exercida unicamente pelo sócio ostensivo, em seu nome individual e sob sua própria e exclusiva responsabilidade, participando os demais dos resultados correspondentes.' }
    ],
    professorTip: 'SCP (Art. 991 CC): NÃO tem personalidade jurídica! Só o sócio OSTENSIVO aparece para terceiros. Se o sócio participante se meter nos negócios com terceiros, passa a responder SOLIDARIAMENTE!'
  },
  {
    id: 'emp_ext_22',
    exam: 'Prova Semestral Faculdade de Direito - Contratos Empresariais',
    examType: 'FACULDADE',
    board: 'PUC',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Representação Comercial Autônoma (Lei nº 4.886/65)',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'ACADEMICA',
    statement: `Um representante comercial autônomo com contrato por prazo indeterminado há 5 anos foi rescindido imotivadamente pela empresa representada sem justa causa nem aviso prévio de 30 dias. Conforme a Lei nº 4.886/65:`,
    options: [
      { letter: 'A', text: 'Não há qualquer indenização mínima legal na rescisão sem justa causa de representante comercial, sem produção de efeitos oponíveis contra terceiros de boa-fé nem habilitação privilegiada.' },
      { letter: 'B', text: 'É devida indenização mínima legal não inferior a 1/12 (um doze avos) do total da retribuição auferida durante o tempo em que exerceu a representação, além de aviso prévio de 30 dias.' },
      { letter: 'C', text: 'É permitida a inclusão de cláusula del credere responsabilizando automaticamente o representante pelo inadimplemento do comprador, com livre alienação e circulação do título ou participação societária entre os interessados.' },
      { letter: 'D', text: 'As ações de cobrança de comissões prescrevem em 10 anos, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 27, "j", da Lei 4.886/65, na rescisão sem justa causa do contrato por tempo indeterminado, a indenização devida ao representante não poderá ser inferior a 1/12 do total das retribuições auferidas durante todo o contrato, somada ao aviso prévio de 30 dias ou 1/3 das comissões auferidas nos últimos 3 meses (art. 34). Além disso, o art. 43 PROÍBE expressamente a cláusula del credere.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Há piso inderrogável de 1/12 (art. 27, j).' },
      { letter: 'C', explanation: 'Incorreta. A cláusula del credere é expressamente vedada nos contratos de representação comercial (art. 43).' },
      { letter: 'D', explanation: 'Incorreta. O prazo prescricional na representação comercial é de 5 anos (art. 44, parágrafo único).' }
    ],
    statuteReferences: [
      { code: 'Lei 4.886/65', article: 'Art. 27, j, Art. 34 e Art. 43', textSnippet: 'É vedada no contrato de representação comercial a inclusão de cláusulas del credere.' }
    ],
    professorTip: 'Representação Comercial (Lei 4.886/65): Indenização na demissão imotivada (prazo indeterminado) ≥ 1/12 de TUDO que ganhou + Aviso Prévio (30 dias ou 1/3 dos últimos 3 meses)! Cláusula del credere = PROIBIDA!'
  },
  {
    id: 'emp_ext_23',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Letra de Câmbio e Nota Promissória - Aceite e Vencimento',
    difficulty: 'Médio',
    difficultyLevel: 2,
    originType: 'OFICIAL_OAB',
    statement: `Sobre a estrutura cambiária da Letra de Câmbio e da Nota Promissória regidas pelo Decreto nº 57.663/66 (Lei Uniforme de Genebra), assinale a afirmativa correta:`,
    options: [
      { letter: 'A', text: 'A nota promissória exige apresentação para aceite pelo beneficiário, em consonância com a preservação da empresa e a função social da atividade econômica. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'B', text: 'A letra de câmbio é uma ordem de pagamento, na qual o sacado só se torna obrigado cambiário principal caso dê o aceite; já a nota promissória é uma promessa direta de pagamento que dispensa aceite.' },
      { letter: 'C', text: 'A recusa de aceite na letra de câmbio pelo sacado impede o vencimento antecipado do título contra o sacador, com manutenção da estrutura de governança societária e da limitação de responsabilidade.' },
      { letter: 'D', text: 'A cláusula "não à ordem" impede a circulação do título até mesmo por cessão ordinária, com afastamento da responsabilidade pessoal dos sócios sem prévia demonstração de abuso.' }
    ],
    correctAnswer: 'B',
    justification: `Na letra de câmbio há três figuras originárias (sacador, sacado e tomador), sendo uma ORDEM de pagamento: o sacado só ingressa na relação cambiária se aceitar (art. 28 LUG). Na nota promissória há apenas duas figuras (emitente/subscritor e beneficiário), configurando PROMESSA direta de pagamento, motivo pelo qual não comporta aceite (art. 78 LUG).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. Como é promessa direta do emitente, a nota promissória não tem aceite.' },
      { letter: 'C', explanation: 'Incorreta. A recusa do aceite (comprovada pelo protesto por falta de aceite) gera o vencimento antecipado da letra de câmbio contra o sacador e endossantes (art. 43 LUG).' },
      { letter: 'D', explanation: 'Incorreta. A cláusula "não à ordem" veda o endosso cambiário, mas permite a transmissão pela forma e com os efeitos da cessão ordinária de crédito (art. 11 LUG).' }
    ],
    statuteReferences: [
      { code: 'Decreto 57.663/66 (LUG)', article: 'Art. 28, Art. 43 e Art. 78', textSnippet: 'O subscritor de uma nota promissória é responsável da mesma forma que o aceitante de uma letra.' }
    ],
    professorTip: 'Letra de Câmbio = ORDEM de pagamento (3 pessoas; precisa de aceite para vincular o sacado; recusa do aceite vence antecipadamente!). Nota Promissória = PROMESSA de pagamento (2 pessoas; NÃO tem aceite!).'
  },
  {
    id: 'emp_ext_24',
    exam: 'Simulado FGV / OAB Unificado - Direito Empresarial',
    examType: 'OAB',
    board: 'FGV',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Factoring (Fomento Mercantil) e Direito de Regresso',
    difficulty: 'Difícil',
    difficultyLevel: 3,
    originType: 'OFICIAL_OAB',
    statement: `Uma faturizadora (empresa de factoring) adquiriu duplicatas mercantis sacadas por uma indústria contra um supermercado, pagando o valor com deságio. No vencimento, o supermercado tornou-se insolvente e deixou de pagar os títulos válidos e regulares. Desejando recuperar o valor, a faturizadora pretende cobrar regressivamente da indústria faturizada. Segundo a jurisprudência consolidada do STJ:`,
    options: [
      { letter: 'A', text: 'A faturizadora possui direito de regresso irrestrito contra o faturizado em razão da simples inadimplência do sacado, observados os princípios cambiários da cartularidade, literalidade e autonomia das obrigações.' },
      { letter: 'B', text: 'No contrato de factoring, o risco pela solvência dos títulos adquiridos é assumido pela faturizadora, sendo nula a cláusula de regresso ou garantia pela simples inadimplência, salvo se o título for viciado ou inexistente (fria).' },
      { letter: 'C', text: 'O contrato de factoring submete-se às taxas de juros bancárias reguladas pelo Banco Central, em consonância com a preservação da empresa e a função social da atividade econômica.' },
      { letter: 'D', text: 'A indústria faturizada responde solidariamente por aval em qualquer operação de fomento mercantil, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' }
    ],
    correctAnswer: 'B',
    justification: `O STJ pacifica que é da essência do contrato de factoring a transferência definitiva do risco do inadimplemento (insolvência do sacado) à faturizadora — razão pela qual ela cobra o deságio (fator). Portanto, é nula estipulação que responsabilize o faturizado pela solvência do devedor; o faturizado só responde pela EXISTÊNCIA e LEGITIMIDADE (veritas nominis) do crédito cedido (ex.: duplicata simulada ou já quitada antes da cessão).`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A ausência de direito de regresso pela insolvência diferencia o factoring do desconto bancário.' },
      { letter: 'C', explanation: 'Incorreta. Factoring não é instituição financeira e não empresta dinheiro a juros.' },
      { letter: 'D', explanation: 'Incorreta. Aval ou nota promissória dados pelo faturizado para garantir solvência em factoring são considerados nulos pelo STJ.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 295 e Art. 296', textSnippet: 'Na cessão por título oneroso, o cedente, ainda que não se responsabilize, fica responsável ao cessionário pela existência do crédito ao tempo em que lhe cedeu...' }
    ],
    jurisprudence: 'STJ REsp 1.711.412/MG e jurisprudência pacífica.',
    professorTip: 'Factoring x Desconto Bancário: No FACTORING, a faturizadora ASSUME o risco do calote (sem regresso se o devedor falir, salvo se a duplicata era falsa/viciada!). No Desconto Bancário, o banco TEM regresso!'
  },
  {
    id: 'emp_ext_25',
    exam: 'Concurso Magistratura / MP - Direito Empresarial',
    examType: 'CONCURSO',
    board: 'VUNESP',
    year: 2024,
    subject: 'Direito Empresarial',
    topic: 'Sociedade Cooperativa - Natureza Civil Simples (Art. 982, par. único, CC)',
    difficulty: 'Fácil',
    difficultyLevel: 1,
    originType: 'AUTORAL_PROFESSOR',
    statement: `Independentemente do seu objeto social (mesmo que realize compra e venda de mercadorias ou serviços agrícolas em larga escala), a Sociedade Cooperativa classifica-se juridicamente no Direito Brasileiro como:`,
    options: [
      { letter: 'A', text: 'Sociedade empresária sujeita à falência e recuperação judicial, com manutenção da estrutura de governança societária e da limitação de responsabilidade. Essa disciplina assegura previsibilidade nas operações societárias e na circulação de crédito.' },
      { letter: 'B', text: 'Sociedade simples por força de lei, inscrita na Junta Comercial por previsão legal específica, salvo as cooperativas médicas sujeitas a regras próprias ou autorização especial na LRF.' },
      { letter: 'C', text: 'Associação civil sem finalidade econômica, sujeita ao registro regular na Junta Comercial e à ordem legal de classificação concursal.' },
      { letter: 'D', text: 'Sociedade por ações de capital fechado, em consonância com a preservação da empresa e a função social da atividade econômica.' }
    ],
    correctAnswer: 'B',
    justification: `Pelo art. 982, parágrafo único, do CC: "Independentemente de seu objeto, considera-se empresária a sociedade por ações; e, simples, a cooperativa". Por expressa disposição da Lei 5.764/71, seus atos são arquivados na Junta Comercial (exceção procedimental à regra do RCPJ), e as cooperativas médicas operadoras de planos de saúde passaram a ter previsão especial de recuperação judicial no art. 6º, § 13, LRF (Lei 14.112/2020), mantendo a regra geral de não sujeição das cooperativas à falência.`,
    whyWrong: [
      { letter: 'A', explanation: 'Incorreta. A regra geral do art. 982, parágrafo único é que toda cooperativa é sociedade SIMPLES (e não empresária), não se sujeitando à falência (art. 2º LRF).' },
      { letter: 'C', explanation: 'Incorreta. Tem natureza societária (sociedade simples), não de associação.' },
      { letter: 'D', explanation: 'Incorreta. Sociedade por ações é sempre empresária, exatamente o oposto da cooperativa.' }
    ],
    statuteReferences: [
      { code: 'Código Civil', article: 'Art. 982, parágrafo único', textSnippet: 'Independentemente de seu objeto, considera-se empresária a sociedade por ações; e, simples, a cooperativa.' }
    ],
    professorTip: 'Regra de ouro do Art. 982, par. único, CC: S.A. = SEMPRE EMPRESÁRIA! Cooperativa = SEMPRE SIMPLES!'
  }
];
