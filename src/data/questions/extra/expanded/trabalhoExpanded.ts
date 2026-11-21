// Arquivo gerado automaticamente por scripts/migrateQuestions.ts — NÃO editar manualmente.
import type { LegalQuestion } from '../../../../types';

export const TRABALHO_EXPANDED_QUESTIONS: LegalQuestion[] = [
  {
    "id": "mig_trab_001",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Princípios do Direito do Trabalho e Fontes Normativas",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado assinou aditivo contratual reduzindo seu salário nominal em 15% sem acordo ou convenção coletiva de trabalho, sob argumento empresarial de dificuldade financeira passageira. Essa alteração contratual individual é válida?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, porque o princípio da autonomia da vontade permite redução salarial mediante acordo escrito individual com qualquer empregado."
      },
      {
        "letter": "B",
        "text": "Não. Pelo princípio da irredutibilidade salarial (Art. 7º, VI, CF) e pelo princípio da inalterabilidade contratual lesiva (Art. 468 CLT), a redução salarial só é lícita mediante CONVENÇÃO OU ACORDO COLETIVO DE TRABALHO, sendo nula a cláusula individual prejudicial ao trabalhador ainda que formalmente consentida."
      },
      {
        "letter": "C",
        "text": "Apenas empregados hipersuficientes (nível superior + salário >= 2x teto INSS) podem reduzir salário por acordo individual sem sindicato."
      },
      {
        "letter": "D",
        "text": "Pelo princípio da norma mais favorável, havendo conflito entre convenção coletiva e acordo coletivo, prevalece sempre a convenção coletiva."
      }
    ],
    "correctAnswer": "B",
    "justification": "Princípios Trabalhistas: Proteção (in dubio pro operario, norma mais favorável, condição mais benéfica), Irrenunciabilidade, Primazia da Realidade e Continuidade da Relação de Emprego. Redução salarial exige ACT ou CCT (Art. 7º, VI, CF). Art. 620 CLT = ACT prevalece sempre sobre CCT.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No Direito do Trabalho vigora a irrenunciabilidade/indisponibilidade de direitos: acordo individual não reduz salário (exige norma coletiva — Art. 7º, VI, CF)."
      },
      {
        "letter": "C",
        "explanation": "Mesmo para o empregado hipersuficiente (Art. 444, parágrafo único, CLT), a negociação individual tem os mesmos limites do Art. 611-A e NÃO pode violar direitos constitucionais irrenunciáveis como a irredutibilidade salarial sem negociação coletiva (Art. 7º, VI, CF)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 620 da CLT (após a Reforma Trabalhista — Lei 13.467/17), as condições estabelecidas em ACORDO coletivo de trabalho sempre prevalecerão sobre as estipuladas em CONVENÇÃO coletiva de trabalho (princípio da especialidade, sem depender da teoria do conglobamento!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 8º, 444 e 468 da CLT",
        "textSnippet": "Princípios Trabalhistas: Proteção (in dubio pro operario, norma mais favorável, condição mais benéfica), Irrenunciabilidade, Primazia da Realidade e Continuidade da Relação de Emprego. Redução salarial exige ACT ou CCT (Art. 7º, VI, CF). Art. 620 CLT = ACT prevalece sempre sobre CCT."
      }
    ],
    "professorTip": "Redução salarial = SÓ por ACT ou CCT (Art. 7º, VI, CF)! Art. 620 CLT = Acordo Coletivo (ACT) SEMPRE prevalece sobre Convenção (CCT)!"
  },
  {
    "id": "mig_trab_002",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Requisitos da Relação de Emprego e Pejotização / Trabalho Autônomo",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa contrata profissional como trabalhador autônomo exclusivo e contínuo, mediante emissão de notas fiscais como MEI, mas lhe impõe horário fixo rígido, ordens diretas diárias de gerente, metas e proibição de enviar substituto. Pelo princípio da primazia da realidade, qual o vínculo jurídico existente?",
    "options": [
      {
        "letter": "A",
        "text": "Não há vínculo de emprego porque o Art. 442-B da CLT veda o reconhecimento de emprego sempre que houver contrato de autônomo assinado."
      },
      {
        "letter": "B",
        "text": "Vínculo de EMPREGO (Art. 3º CLT), pois estão presentes todos os 5 requisitos fático-jurídicos (SHOPP: Subordinação jurídica, Habitualidade/não eventualidade, Onerosidade, Pessoa física e Pessoalidade); pelo Art. 9º da CLT, são nulos os atos destinados a desvirtuar ou fraudar a aplicação da legislação trabalhista (mesmo que o Art. 442-B admita autônomo exclusivo e contínuo, a existência de SUBORDINAÇÃO descaracteriza a autonomia e reconhece o vínculo!)."
      },
      {
        "letter": "C",
        "text": "A exclusividade na prestação de serviços é requisito legal obrigatório previsto no Art. 3º da CLT para caracterizar o empregado."
      },
      {
        "letter": "D",
        "text": "O trabalho prestado em domicílio ou em regime de teletrabalho exclui a relação de emprego por ausência de subordinação presencial."
      }
    ],
    "correctAnswer": "B",
    "justification": "Requisitos do empregado (Art. 3º CLT — SHOPP): Subordinação jurídica, Habitualidade (não eventualidade), Onerosidade, Pessoa Física e Pessoalidade. Exclusividade NÃO é requisito! Primazia da realidade + Art. 9º CLT anulam fraudes (\"pejotização\" subordinada).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 442-B esclarece apenas que exclusividade e continuidade isoladas não afastam a autonomia, desde que não haja SUBORDINAÇÃO jurídica; presentes ordens e subordinação, reconhece-se o vínculo (primazia da realidade)."
      },
      {
        "letter": "C",
        "explanation": "Cuidado: EXCLUSIVIDADE NÃO é requisito do vínculo de emprego! Um empregado pode ter dois ou mais empregos concomitantes compatíveis no horário!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 6º da CLT, não se distingue entre o trabalho realizado no estabelecimento, no domicílio ou a distância (teletrabalho), desde que caracterizados os pressupostos da relação de emprego (meios telemáticos equiparam-se aos meios pessoais de comando/supervisão)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 2º, 3º e 442-B da CLT",
        "textSnippet": "Requisitos do empregado (Art. 3º CLT — SHOPP): Subordinação jurídica, Habitualidade (não eventualidade), Onerosidade, Pessoa Física e Pessoalidade. Exclusividade NÃO é requisito! Primazia da realidade + Art. 9º CLT anulam fraudes (\"pejotização\" subordinada)."
      }
    ],
    "professorTip": "Empregado = SHOPP (Subordinação, Habitualidade, Onerosidade, Pessoa física, Pessoalidade)! EXCLUSIVIDADE NÃO é requisito! Teletrabalho/Domicílio = tem vínculo normal (Art. 6º CLT)!"
  },
  {
    "id": "mig_trab_003",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Grupo Econômico, Sucessão Trabalhista e Responsabilidade de Sócios Retirantes",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Sócio retirou-se regularmente da sociedade empresária mediante alteração contratual averbada na Junta Comercial em janeiro de 2022. Em março de 2025 (mais de 3 anos depois), ex-empregado ajuíza reclamação trabalhista pleiteando verbas de 2021. E em outra situação, duas empresas possuem apenas sócios em comum sem direção integrada nem interesse integrado. Qual a responsabilidade de ambos?",
    "options": [
      {
        "letter": "A",
        "text": "O sócio retirante responde solidariamente por prazo indeterminado mesmo em ações propostas 4 anos após sua saída averbada."
      },
      {
        "letter": "B",
        "text": "O sócio retirante responde SUBSIDIARIAMENTE pelas obrigações relativas ao período em que figurou como sócio, SOMENTE em ações ajuizadas até 2 ANOS depois de averbada a modificação do contrato (Art. 10-A CLT — logo, após 3 anos NÃO responde, salvo comprovada fraude na alteração societária!); e a mera identidade de sócios NÃO caracteriza grupo econômico (Art. 2º, § 3º, CLT — exige demonstração do interesse integrado, efetiva comunhão de interesses e atuação conjunta das empresas integrantes!)."
      },
      {
        "letter": "C",
        "text": "A simples presença dos mesmos sócios em duas empresas distintas já basta para caracterizar grupo econômico solidário pela CLT atual."
      },
      {
        "letter": "D",
        "text": "Na sucessão trabalhista lícita (Arts. 10, 448 e 448-A CLT), a empresa sucedida responde sempre solidariamente com a sucessora por todas as obrigações."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 10-A CLT (Sócio Retirante): ordem = empresa -> sócios atuais -> sócios retirantes (só ações até 2 anos da averbação da saída; solidária se fraude). Art. 2º, § 3º = grupo econômico exige atuação conjunta/interesse integrado (só sócios comuns não basta). Art. 448-A = sucessora responde (sucedida só se fraude).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 10-A CLT, a responsabilidade do sócio retirante é SUBSIDIÁRIA (ordem: 1º empresa devedora -> 2º sócios atuais -> 3º sócios retirantes) e limita-se às ações ajuizadas até 2 ANOS após a averbação da saída (salvo fraude -> solidária)."
      },
      {
        "letter": "C",
        "explanation": "O Art. 2º, § 3º, CLT (Reforma Trabalhista) dispôs expressamente que não caracteriza grupo econômico a mera identidade de sócios, exigindo interesse integrado, comunhão de interesses e atuação conjunta."
      },
      {
        "letter": "D",
        "explanation": "Na sucessão empresarial lícita (Art. 448-A CLT), as obrigações trabalhistas, inclusive as contraídas à época em que os empregados trabalhavam para a sucedida, são de responsabilidade da SUCESSORA (a sucedida só responde solidariamente se comprovada FRAUDE na transferência!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 2º, §§ 2º e 3º, 10, 10-A e 448-A da CLT",
        "textSnippet": "Art. 10-A CLT (Sócio Retirante): ordem = empresa -> sócios atuais -> sócios retirantes (só ações até 2 anos da averbação da saída; solidária se fraude). Art. 2º, § 3º = grupo econômico exige atuação conjunta/interesse integrado (só sócios comuns não basta). Art. 448-A = sucessora responde (sucedida só se fraude)."
      }
    ],
    "professorTip": "Sócio Retirante (Art. 10-A): 1º Empresa -> 2º Sócios atuais -> 3º Retirantes (SÓ ações até 2 ANOS da averbação)! Sócios em comum NÃO bastam p/ grupo econômico! Sucessão = só SUCESSORA paga (sucedida só se fraude)!"
  },
  {
    "id": "mig_trab_004",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Contrato de Trabalho - Terceirização Lícita, Quarentena e Responsabilidade (Lei 6.019/74)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa industrial demite empregado efetivo sem justa causa e, 6 meses depois, o mesmo trabalhador retorna para prestar serviços na mesma fábrica na qualidade de empregado de uma empresa terceirizada contratada pela indústria para atividade-fim. À luz da Lei nº 6.019/74 (alterada pela Lei 13.467/17) e do STF, o que está lícito e o que é ilícito?",
    "options": [
      {
        "letter": "A",
        "text": "É ilícita a terceirização de atividade-fim da empresa contratante, gerando vínculo direto automático."
      },
      {
        "letter": "B",
        "text": "A terceirização de atividade-FIM é plenamente LÍCITA (Art. 4º-A Lei 6.019/74 e STF ADPF 324 / Tema 725); CONTUDO, é vedada a recontratação de ex-empregado demitido como empregado de empresa prestadora de serviços (terceirizada) antes do decurso do prazo de quarentena de 18 MESES contados da demissão (Art. 5º-D da Lei 6.019/74 — e também não pode figurar como titular/sócio de PJ contratada antes de 18 meses pelo Art. 5º-C, salvo aposentados)!"
      },
      {
        "letter": "C",
        "text": "Não existe prazo de quarentena legal para recontratar ex-empregado por meio de empresa terceirizada."
      },
      {
        "letter": "D",
        "text": "Na terceirização lícita privada, a tomadora responde solidariamente pelas verbas trabalhistas inadimplidas pela prestadora."
      }
    ],
    "correctAnswer": "B",
    "justification": "Terceirização (Lei 6.019/74 + STF): lícita em atividade-meio e atividade-fim; responsabilidade subsidiária da tomadora privada; quarentena de 18 MESES após demissão para voltar via PJ ou empresa terceirizada (exceto aposentado); tomadora deve assegurar condições de segurança/higiene/alimentação/ambulatório no local.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF na ADPF 324 e Tema 725 declarou lícita a terceirização em quaisquer atividades (meio ou fim), mantida a responsabilidade subsidiária da tomadora."
      },
      {
        "letter": "C",
        "explanation": "Os Arts. 5º-C e 5º-D da Lei nº 6.019/74 impõem quarentena expressa de 18 MESES da demissão do empregado para contratá-lo como PJ ou empregado de empresa prestadora de serviços (salvo se o titular/sócio da PJ for aposentado)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 5º-A, § 5º, da Lei 6.019/74 e Súmula 331, IV, do TST, a responsabilidade da empresa contratante privada é SUBSIDIÁRIA (na Administração Pública, exige-se prova de culpa na fiscalização — Súmula 331, V, TST e STF Tema 246 / Tema 1118!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 4º-A, 5º-A, 5º-C e 5º-D da Lei nº 6.019/1974 e STF ADPF 324",
        "textSnippet": "Terceirização (Lei 6.019/74 + STF): lícita em atividade-meio e atividade-fim; responsabilidade subsidiária da tomadora privada; quarentena de 18 MESES após demissão para voltar via PJ ou empresa terceirizada (exceto aposentado); tomadora deve assegurar condições de segurança/higiene/alimentação/ambulatório no local."
      }
    ],
    "jurisprudence": "STF ADPF 324 e Tema 725",
    "professorTip": "Terceirização: Pode atividade-FIM! Responsabilidade = SUBSIDIÁRIA! Quarentena para ex-empregado voltar terceirizado ou PJ = 18 MESES (salvo aposentado)!"
  },
  {
    "id": "mig_trab_005",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Intermitente e Teletrabalho (Home Office / Híbrido)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado contratado por escrito na modalidade de trabalho intermitente recebe convocação com 4 dias corridos de antecedência, aceita o serviço e falta injustificadamente no dia combinado; paralelamente, outro empregado trabalha em regime de teletrabalho com controle de jornada por produção/tarefa. Como a CLT disciplina ambos?",
    "options": [
      {
        "letter": "A",
        "text": "No trabalho intermitente, o silêncio do empregado após a convocação presume aceitação automática do serviço."
      },
      {
        "letter": "B",
        "text": "No contrato intermitente (sempre ESCRITO — Art. 452-A CLT): convocação com pelo menos 3 dias corridos de antecedência; empregado tem 1 dia útil para responder (silêncio presume recusa); aceita a oferta, a parte que descumprir sem justo motivo paga à outra, em 30 dias, multa de 50% da remuneração devida (Art. 452-A, § 4º); quanto ao teletrabalho (Lei 14.442/2022 — Art. 62, III, CLT), só estão excluídos do controle de jornada/horas extras os teletrabalhadores que prestam serviço POR PRODUÇÃO OU TAREFA (os contratados por jornada têm direito a horas extras!)."
      },
      {
        "letter": "C",
        "text": "Todos os empregados em teletrabalho estão automaticamente excluídos das regras de duração do trabalho e horas extras."
      },
      {
        "letter": "D",
        "text": "No teletrabalho, o empregador pode alterar livremente o regime presencial para o teletrabalho sem consentimento do empregado, mas também pode reverter imediatamente em 24 horas."
      }
    ],
    "correctAnswer": "B",
    "justification": "Intermitente (Art. 452-A): contrato escrito; avisa >= 3d corridos; responde em 1d útil (silêncio = recusa); descumpriu após aceitar = multa 50% em 30d; paga férias+1/3, 13º, DSR e adicionais ao final de cada período. Teletrabalho (Lei 14.442/22): sem controle de jornada SÓ se for por produção/tarefa; retorno ao presencial = unilateral com aviso de 15 dias.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 452-A, § 2º, CLT, o silêncio do empregado no prazo de 1 dia útil presume RECUSA à oferta (e a recusa não descaracteriza a subordinação!)."
      },
      {
        "letter": "C",
        "explanation": "Atenção à Lei nº 14.442/2022 que alterou o Art. 62, III, CLT: apenas o empregado em regime de teletrabalho ou trabalho remoto que presta serviço POR PRODUÇÃO OU TAREFA está excluído do controle de jornada (quem trabalha por jornada tem controle e horas extras)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 75-C da CLT: Presencial -> Teletrabalho exige MÚTUO ACORDO em aditivo; Teletrabalho -> Presencial pode por determinação unilateral do empregador, garantindo prazo de transição mínimo de 15 DIAS!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 75-A a 75-F e Arts. 443, § 3º, e 452-A da CLT",
        "textSnippet": "Intermitente (Art. 452-A): contrato escrito; avisa >= 3d corridos; responde em 1d útil (silêncio = recusa); descumpriu após aceitar = multa 50% em 30d; paga férias+1/3, 13º, DSR e adicionais ao final de cada período. Teletrabalho (Lei 14.442/22): sem controle de jornada SÓ se for por produção/tarefa; retorno ao presencial = unilateral com aviso de 15 dias."
      }
    ],
    "professorTip": "Intermitente: avisa 3d -> responde 1d útil (silêncio = RECUSA) -> faltou após aceitar = multa 50%! Teletrabalho: SEM hora extra SÓ se for por PRODUÇÃO ou TAREFA (Lei 14.442/22)! Volta ao presencial = 15 dias!"
  },
  {
    "id": "mig_trab_006",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Duração do Trabalho - Jornada, Banco de Horas, Turnos Ininterruptos e 12x36",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregador ajusta diretamente com empregado, por acordo INDIVIDUAL escrito, jornada de 12x36 horas (12 de trabalho por 36 de descanso) e banco de horas com compensação semestral. Ambos são válidos por acordo individual escrito após a Reforma Trabalhista?",
    "options": [
      {
        "letter": "A",
        "text": "A jornada de 12x36 só pode ser instituída por convenção ou acordo coletivo de trabalho, sendo nulo o acordo individual escrito."
      },
      {
        "letter": "B",
        "text": "Sim! Pelo Art. 59-A da CLT (e validado pelo STF na ADI 5994!), é facultado às partes, mediante ACORDO INDIVIDUAL ESCRITO, convenção coletiva ou acordo coletivo, estabelecer horário de trabalho de 12x36 (observados os intervalos para repouso/alimentação ou indenizados — e abrangendo feriados e prorrogação noturna!); e o banco de horas pode ser pactuado por acordo individual escrito SE a compensação ocorrer no período máximo de 6 MESES (Art. 59, § 5º — se anual de 12 meses, exige ACT/CCT; se compensação no mesmo mês, pode até acordo tácito!)."
      },
      {
        "letter": "C",
        "text": "Na jornada 12x36, os feriados trabalhados e as prorrogações do trabalho noturno devem ser pagos obrigatoriamente em dobro à parte."
      },
      {
        "letter": "D",
        "text": "O tempo despendido pelo empregado da portaria da empresa até o posto de trabalho ou em transporte fornecido pelo empregador (horas in itinere) continua computado na jornada."
      }
    ],
    "correctAnswer": "B",
    "justification": "Jornada (Arts. 58–62 CLT): Banco de horas anual (1 ano) = ACT/CCT; semestral (6 meses) = acordo individual escrito; mensal = tácito/escrito. 12x36 = acordo individual escrito ou norma coletiva (compensa feriados e prorrogação noturna). Horas in itinere extintas (Art. 58, § 2º). Exceções ao controle (Art. 62): trabalho externo incompatível com controle, cargos de confiança (gratificação >= 40%), teletrabalho por produção/tarefa.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 59-A da CLT autorizou expressamente a jornada 12x36 por acordo individual escrito (confirmado pelo STF na ADI 5994), e nos turnos ininterruptos de revezamento (6h), a ampliação até 8h exige negociação coletiva (Súmula 423 TST)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 59-A, parágrafo único, da CLT, a remuneração mensal pactuada no 12x36 já abrange os pagamentos devidos pelo descanso semanal remunerado e pelo descanso em feriados, sendo considerados compensados os feriados e as prorrogações de trabalho noturno."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 58, § 2º, da CLT (Reforma Trabalhista), o tempo despendido desde a residência até a efetiva ocupação do posto de trabalho e para o seu retorno (por qualquer meio de transporte, inclusive fornecido pelo empregador) NÃO será computado na jornada de trabalho (extintas as horas in itinere)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 58 a 62 e Art. 59-A da CLT e Súmula 423 TST",
        "textSnippet": "Jornada (Arts. 58–62 CLT): Banco de horas anual (1 ano) = ACT/CCT; semestral (6 meses) = acordo individual escrito; mensal = tácito/escrito. 12x36 = acordo individual escrito ou norma coletiva (compensa feriados e prorrogação noturna). Horas in itinere extintas (Art. 58, § 2º). Exceções ao controle (Art. 62): trabalho externo incompatível com controle, cargos de confiança (gratificação >= 40%), teletrabalho por produção/tarefa."
      }
    ],
    "jurisprudence": "STF ADI 5994 e Súmula 423 TST",
    "professorTip": "Banco de Horas: 12 meses = ACT/CCT | 6 meses = Individual escrito | Mesmo mês = até Tácito! Jornada 12x36 = pode individual escrito e JÁ compensa feriados! Acabou horas in itinere!"
  },
  {
    "id": "mig_trab_007",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Intervalos Intrajornada e Interjornada, Sobreaviso e Prontidão",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregador concedeu apenas 30 minutos de intervalo para refeição e descanso a empregado com jornada diária de 8 horas (sem autorização em norma coletiva), mantendo essa prática durante o contrato de trabalho vigente em 2024. Qual a consequência financeira da supressão parcial desse intervalo intrajornada após a Reforma Trabalhista?",
    "options": [
      {
        "letter": "A",
        "text": "Deve pagar a hora integral (60 minutos) acrescida de 50% com natureza salarial e reflexos em férias, 13º e FGTS."
      },
      {
        "letter": "B",
        "text": "A não concessão ou concessão PARCIAL do intervalo intrajornada implica o pagamento de NATUREZA INDENIZATÓRIA (não integra salário para reflexos!), com acréscimo de 50% sobre o valor da remuneração da hora normal, APENAS DO PERÍODO SUPRIMIDO (no caso, os 30 minutos faltantes — Art. 71, § 4º, CLT — diferente da antiga Súmula 437 do TST que pagava a hora cheia com natureza salarial!)."
      },
      {
        "letter": "C",
        "text": "Por acordo individual escrito entre patrão e empregado com jornada de 8h, o intervalo intrajornada pode ser reduzido livremente para 30 minutos."
      },
      {
        "letter": "D",
        "text": "O simples uso de telefone celular corporativo fornecido pela empresa fora do expediente caracteriza automaticamente regime de sobreaviso."
      }
    ],
    "correctAnswer": "B",
    "justification": "Intervalo Intrajornada (Art. 71 CLT): > 6h = 1h a 2h (ACT/CCT pode reduzir até mínimo 30 min); > 4h até 6h = 15 min; <= 4h = 0. Supressão (Art. 71, § 4º) = paga SÓ o suprimido + 50%, natureza INDENIZATÓRIA. Interjornada (Art. 66) = mínimo 11h seguidas (OJ 355 SDI-1 TST: violação paga horas faltantes como extras). Sobreaviso = 1/3 (máx 24h); Prontidão = 2/3 (máx 12h).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 71, § 4º, alterado pela Lei 13.467/17 superou os itens I e III da Súmula 437 TST: hoje paga-se SÓ o período suprimido, com natureza INDENIZATÓRIA!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 611-A, III, da CLT, a redução do intervalo intrajornada (respeitado o limite mínimo absoluto de 30 minutos para jornadas superiores a 6 horas) exige CONVENÇÃO OU ACORDO COLETIVO (nunca acordo individual!)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 428 do TST, o uso de instrumentos telemáticos ou informatizados fornecidos pela empresa ao empregado, POR SI SÓ, não caracteriza regime de sobreaviso (exige-se que o empregado permaneça em regime de plantão/escala aguardando chamado a qualquer momento, restringindo sua locomoção — 1/3 da hora normal, máx. 24h por escala!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 66, 71 e 244 da CLT e Súmula 428 TST",
        "textSnippet": "Intervalo Intrajornada (Art. 71 CLT): > 6h = 1h a 2h (ACT/CCT pode reduzir até mínimo 30 min); > 4h até 6h = 15 min; <= 4h = 0. Supressão (Art. 71, § 4º) = paga SÓ o suprimido + 50%, natureza INDENIZATÓRIA. Interjornada (Art. 66) = mínimo 11h seguidas (OJ 355 SDI-1 TST: violação paga horas faltantes como extras). Sobreaviso = 1/3 (máx 24h); Prontidão = 2/3 (máx 12h)."
      }
    ],
    "jurisprudence": "Súmula 428 do TST",
    "professorTip": "Intervalo suprimido (Art. 71, § 4º): paga SÓ os minutos faltantes + 50% com natureza INDENIZATÓRIA (sem reflexos)! Reduzir para 30 min = SÓ por ACT/CCT! Celular da empresa sozinho NÃO é sobreaviso (Súmula 428 TST)!"
  },
  {
    "id": "mig_trab_008",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Noturno, Adicional Noturno e Horas Extras",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Vigia urbano trabalhou das 22h de um dia até as 7h da manhã seguinte (em escala habitual noturna, cumprindo integralmente o horário noturno e prorrogando-o). Como se calcula a hora noturna urbana e incide adicional noturno sobre as horas trabalhadas entre 5h e 7h da manhã?",
    "options": [
      {
        "letter": "A",
        "text": "Na zona rural (lavoura e pecuária), também se aplica a hora noturna reduzida de 52m30s e o mesmo horário das 22h às 5h."
      },
      {
        "letter": "B",
        "text": "Na zona urbana, o trabalho noturno ocorre das 22h às 5h com hora ficta reduzida de 52 minutos e 30 segundos e adicional mínimo de 20% (Art. 73, §§ 1º e 2º, CLT); e pela Súmula 60, II, do TST, cumprida integralmente a jornada no período noturno e prorrogada esta, É DEVIDO também o adicional noturno quanto às horas prorrogadas após as 5h da manhã (5h às 7h) — lembrando que o adicional noturno pago com habitualidade integra o salário para todos os efeitos (Súmula 60, I)!"
      },
      {
        "letter": "C",
        "text": "Após as 5h da manhã cessa automaticamente a incidência do adicional noturno mesmo havendo prorrogação da jornada noturna integral."
      },
      {
        "letter": "D",
        "text": "Na transferência definitiva do empregado do turno noturno para o diurno, ele mantém o direito adquirido de continuar recebendo o adicional noturno."
      }
    ],
    "correctAnswer": "B",
    "justification": "Trabalho Noturno: Urbano = 22h–5h, hora = 52m30s, adicional 20% (prorrogou após 5h -> continua adicional pela Súmula 60, II, TST). Rural = hora normal 60m, adicional 25%, lavoura 21h–5h, pecuária 20h–4h. Mudou para o turno diurno = perde adicional (Súmula 265 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na zona rural (Lei 5.889/73), NÃO há hora noturna reduzida (hora normal de 60 min!), o adicional é de 25%, e os horários são 21h–5h (lavoura) e 20h–4h (pecuária)!"
      },
      {
        "letter": "C",
        "explanation": "Súmula 60, II, TST: cumprida integralmente a jornada no período noturno e prorrogada esta, devido é também o adicional quanto às horas prorrogadas (inclusive em jornada mista segundo a jurisprudência da SDI-1 TST!)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 265 do TST, a transferência para o período diurno de trabalho implica a PERDA do direito ao adicional noturno (salário-condição)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 73 da CLT e Súmula 60 e OJ 395 TST",
        "textSnippet": "Trabalho Noturno: Urbano = 22h–5h, hora = 52m30s, adicional 20% (prorrogou após 5h -> continua adicional pela Súmula 60, II, TST). Rural = hora normal 60m, adicional 25%, lavoura 21h–5h, pecuária 20h–4h. Mudou para o turno diurno = perde adicional (Súmula 265 TST)."
      }
    ],
    "jurisprudence": "Súmulas 60 e 265 do TST",
    "professorTip": "Noturno Urbano: 22h–5h, 52m30s, +20% (prorrogação após 5h TAMBÉM ganha adicional — Súmula 60, II)! Rural: hora cheia 60m, +25% (Lavoura 21h–5h / Pecuária 20h–4h)! Foi pro dia -> perde (Súmula 265)!"
  },
  {
    "id": "mig_trab_009",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Férias - Aquisição, Faltas Injustificadas, Fracionamento e Dobra (STF ADPF 501)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado teve 15 faltas injustificadas durante o período aquisitivo; no período concessivo, pretende fracionar suas férias em 3 períodos e iniciar o gozo numa quinta-feira. Além disso, em outro contrato, a empresa pagou o terço constitucional das férias fora do prazo de 2 dias antes do gozo (mas concedeu o gozo dentro do prazo concessivo). Incide dobra pela Súmula 450 TST?",
    "options": [
      {
        "letter": "A",
        "text": "Com 15 faltas injustificadas, o empregado perde integralmente o direito às férias."
      },
      {
        "letter": "B",
        "text": "Com 15 faltas injustificadas, o empregado terá direito a 18 DIAS corridos de férias (Art. 130, III, CLT); pode fracionar em até 3 períodos se concordar (Art. 134, § 1º — um >= 14 dias e os outros >= 5 dias cada); É VEDADO iniciar férias no período de 2 dias que antecede feriado ou dia de repouso semanal remunerado (Art. 134, § 3º — logo, se DSR é domingo, quinta-feira não pode porque sexta/sábado são 2 dias antes do domingo!); e quanto ao atraso apenas no pagamento (sem atraso na concessão), o STF na ADPF 501 declarou INCONSTITUCIONAL a Súmula 450 do TST, afastando a dobra automática pelo mero atraso no pagamento antes da fruição!"
      },
      {
        "letter": "C",
        "text": "Mesmo após a ADPF 501 do STF, o atraso de 1 dia no pagamento antecipado das férias (quando gozadas na época certa) obriga o pagamento em dobro da Súmula 450 TST."
      },
      {
        "letter": "D",
        "text": "O fracionamento das férias em até 3 períodos exige obrigatoriamente autorização de sindicato ou restrição etária para menores de 18 e maiores de 50 anos."
      }
    ],
    "correctAnswer": "B",
    "justification": "Férias (Arts. 130–145 CLT): Faltas 0–5 (30d), 6–14 (24d), 15–23 (18d), 24–32 (12d), >32 (0). Fracionamento em até 3 períodos com concordância (um >=14d, outros >=5d). Proibido iniciar 2 dias antes de DSR ou feriado (Art. 134, § 3º). STF ADPF 501 = derrubou Súmula 450 TST (dobra só se gozar após período concessivo!).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Tabela Art. 130 CLT: até 5 faltas = 30d; 6–14 = 24d; 15–23 = 18d; 24–32 = 12d; > 32 = 0d."
      },
      {
        "letter": "C",
        "explanation": "O STF na ADPF 501 cassou expressamente a Súmula 450 TST: a dobra do Art. 137 CLT aplica-se apenas quando as férias forem CONCEDIDAS fora do período concessivo de 12 meses (e não pelo simples atraso do pagamento 2 dias antes)!"
      },
      {
        "letter": "D",
        "explanation": "A Reforma Trabalhista revogou o § 2º do Art. 134 que proibia fracionamento para < 18 e > 50 anos: hoje TODOS os empregados podem fracionar em até 3 períodos mediante concordância (1 >= 14d, demais >= 5d)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 129 a 153 da CLT e STF ADPF 501",
        "textSnippet": "Férias (Arts. 130–145 CLT): Faltas 0–5 (30d), 6–14 (24d), 15–23 (18d), 24–32 (12d), >32 (0). Fracionamento em até 3 períodos com concordância (um >=14d, outros >=5d). Proibido iniciar 2 dias antes de DSR ou feriado (Art. 134, § 3º). STF ADPF 501 = derrubou Súmula 450 TST (dobra só se gozar após período concessivo!)."
      }
    ],
    "jurisprudence": "STF ADPF 501",
    "professorTip": "STF ADPF 501 derrubou Súmula 450 TST (sem dobra por atraso no pagamento se gozou no prazo)! Faltas: até 5=30d | 6–14=24d | 15–23=18d | 24–32=12d! Proibido iniciar férias 2d antes de DSR/feriado!"
  },
  {
    "id": "mig_trab_010",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Remuneração, Salário-Utilidade (In Natura), Gorjetas e Parcelas Indenizatórias (Art. 457 CLT)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregador paga salário fixo mensal acrescido de prêmios por desempenho extraordinário superior ao ordinariamente esperado, auxílio-alimentação não pago em dinheiro (vale-alimentação/PAT), diárias de viagem e plano de assistência médica, além de fornecer veículo exclusivamente para realização das visitas a clientes e fins de semana por mera conveniência do trabalho. Quais parcelas integram o salário?",
    "options": [
      {
        "letter": "A",
        "text": "Nenhuma dessas verbas integra o salário! Pelo Art. 457, § 2º, da CLT (Reforma Trabalhista), as importâncias pagas a título de ajuda de custo, auxílio-alimentação (vedado pagamento em dinheiro), diárias para viagem, prêmios e abonos NÃO integram a remuneração e não constituem base de incidência trabalhista ou previdenciária; e pelo Art. 458, § 2º, assistência médica/odontológica e veículo indispensável PARA o trabalho (Súmula 367 TST — mesmo se usado eventualmente nos fins de semana!) também NÃO configuram salário in natura!"
      },
      {
        "letter": "B",
        "text": "O prêmio habitual e as diárias para viagem que excederem 50% do salário integram integralmente o salário para todos os reflexos."
      },
      {
        "letter": "C",
        "text": "As gorjetas pagas espontaneamente pelos clientes integram a remuneração do empregado e servem de base de cálculo para aviso prévio, adicional noturno, horas extras e repouso semanal remunerado."
      },
      {
        "letter": "D",
        "text": "O vale-alimentação pago em dinheiro diretamente no contracheque sem previsão em norma coletiva tem natureza indenizatória pelo Art. 457, § 2º."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 457, § 2º, CLT: ajuda de custo, auxílio-alimentação (proibido em dinheiro), diárias para viagem, prêmios e abonos = NÃO têm natureza salarial (mesmo habituais). Art. 458, § 2º: plano saúde, educação, seguro, previdência privada e bens fornecidos PARA o trabalho (Súmula 367 TST) = NÃO são salário in natura. Súmula 354 TST: gorjetas NÃO integram aviso prévio, adicional noturno, HE e DSR.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Reforma Trabalhista revogou o critério dos 50% para diárias de viagem e excluiu expressamente prêmios (liberalidade por desempenho superior ao ordinário — § 4º) e auxílio-alimentação (exceto em dinheiro) da natureza salarial!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 354 do TST, as gorjetas integram a REMUNERAÇÃO (não o salário stricto sensu), servindo para FGTS, férias e 13º, MAS NÃO servem de base para aviso prévio, adicional noturno, horas extras e DSR!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 457, § 2º, veda expressamente o pagamento do auxílio-alimentação EM DINHEIRO (se pago em dinheiro ou sem adesão ao PAT/previsão específica, assume natureza salarial — Súmula 241 TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 457 e 458 da CLT e Súmulas 241, 354 e 367 TST",
        "textSnippet": "Art. 457, § 2º, CLT: ajuda de custo, auxílio-alimentação (proibido em dinheiro), diárias para viagem, prêmios e abonos = NÃO têm natureza salarial (mesmo habituais). Art. 458, § 2º: plano saúde, educação, seguro, previdência privada e bens fornecidos PARA o trabalho (Súmula 367 TST) = NÃO são salário in natura. Súmula 354 TST: gorjetas NÃO integram aviso prévio, adicional noturno, HE e DSR."
      }
    ],
    "jurisprudence": "Súmulas 241, 354 e 367 do TST",
    "professorTip": "Art. 457, § 2º CLT = Ajuda custo, Diárias, Prêmios, Abonos e Auxílio-alimentação (não em dinheiro) = SEM natureza salarial! Gorjetas (Súmula 354 TST) = NÃO entram em Aviso Prévio, Noturno, HE e DSR!"
  },
  {
    "id": "mig_trab_011",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Equiparação Salarial - Requisitos Após a Reforma Trabalhista e Lei 14.611/2023",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregada exercendo idêntica função com mesma perfeição técnica e produtividade que colega paradigma homem na mesma filial do empregador pleiteia equiparação salarial. Sabe-se que o paradigma trabalha na empresa há 5 anos a mais (embora na mesma função há apenas 1 ano e meio) e a empresa adota plano de cargos e salários interno sem homologação no Ministério do Trabalho. A equiparação é devida?",
    "options": [
      {
        "letter": "A",
        "text": "Não é devida a equiparação salarial! Com a Reforma Trabalhista (Art. 461, § 1º, CLT), além da diferença máxima de 2 anos NA FUNÇÃO, criou-se o requisito cumulativo de que a diferença de tempo DE SERVIÇO PARA O MESMO EMPREGADOR NÃO seja superior a 4 ANOS (aqui o paradigma tem 5 anos a mais na empresa!); ademais, pelo Art. 461, § 2º, o plano de cargos e salários ou quadro de carreira válido para obstar equiparação NÃO precisa mais de homologação em órgão público, bastando norma interna da empresa ou negociação coletiva!"
      },
      {
        "letter": "B",
        "text": "É devida a equiparação salarial porque a diferença de tempo na mesma função é inferior a 2 anos e o quadro de carreira não foi homologado no Ministério do Trabalho."
      },
      {
        "letter": "C",
        "text": "A equiparação salarial continua admitindo paradigma remoto em outra cidade da mesma região metropolitana, mesmo após a Lei nº 13.467/2017."
      },
      {
        "letter": "D",
        "text": "Em caso de discriminação comprovada por motivo de sexo ou etnia na remuneração, o empregador paga apenas as diferenças salariais simples."
      }
    ],
    "correctAnswer": "A",
    "justification": "Equiparação Salarial (Art. 461 CLT): mesma função, mesmo empregador, MESMO ESTABELECIMENTO empresarial, trabalho de igual valor (mesma produtividade e perfeição técnica), diferença <= 2 anos na função E <= 4 anos na empresa. Plano de cargos dispensa homologação/registro público e não exige promoção alternada por antiguidade e merecimento. Discriminação sexo/etnia -> +multa 50% teto RGPS.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Art. 461, §§ 1º e 2º, CLT: exige diferença <= 4 anos na empresa E <= 2 anos na função (ambos no mesmo estabelecimento empresarial!), além de dispensar homologação pública do plano de carreira."
      },
      {
        "letter": "C",
        "explanation": "O Art. 461, caput, restringiu expressamente a equiparação salarial ao trabalho prestado ao mesmo empregador NO MESMO ESTABELECIMENTO EMPRESARIAL (não basta mais mesma região metropolitana!)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 461, § 6º, CLT (e reforçado pela Lei 14.611/2023 da Igualdade Salarial), comprovada discriminação por sexo ou etnia, além do pagamento das diferenças salariais devidas, o juízo aplicará MULTA em favor do empregado discriminado equivalente a 50% do limite máximo dos benefícios do RGPS (10 vezes o salário ou multa específica administrativa da Lei 14.611/23 conforme hipótese)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 461 da CLT e Súmula 6 do TST",
        "textSnippet": "Equiparação Salarial (Art. 461 CLT): mesma função, mesmo empregador, MESMO ESTABELECIMENTO empresarial, trabalho de igual valor (mesma produtividade e perfeição técnica), diferença <= 2 anos na função E <= 4 anos na empresa. Plano de cargos dispensa homologação/registro público e não exige promoção alternada por antiguidade e merecimento. Discriminação sexo/etnia -> +multa 50% teto RGPS."
      }
    ],
    "jurisprudence": "Súmula nº 6 do TST",
    "professorTip": "Equiparação (Art. 461): Mesmo ESTABELECIMENTO + <= 2 anos na FUNÇÃO + <= 4 anos na EMPRESA! Plano de carreira NÃO precisa homologar no MTE! Discriminação sexo/etnia = multa de 50% do teto RGPS!"
  },
  {
    "id": "mig_trab_012",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Adicionais de Insalubridade e Periculosidade - Bases, Cumulação e Perícia",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado trabalha exposto simultaneamente a agente insalubre químico em grau médio (20%) e a risco acentuado com inflamáveis/energia elétrica (periculosidade de 30%), e outro trabalhador desempenha funções como motociclista em entregas diárias. O empregado pode acumular os dois adicionais e quais as respectivas bases de cálculo?",
    "options": [
      {
        "letter": "A",
        "text": "NÃO pode acumular os adicionais de insalubridade e periculosidade (Súmula/tese vinculante do TST no IRR-239-55.2011 e Art. 193, § 2º, CLT): o empregado deve optar pelo mais favorável; a INSALUBRIDADE (10%, 20% ou 40%) calcula-se sobre o SALÁRIO MÍNIMO (Súmula Vinculante nº 4 STF até nova lei), enquanto a PERICULOSIDADE (30%) calcula-se sobre o SALÁRIO-BASE (sem acréscimos de gratificações/prêmios — Súmula 191, I, TST); e atividades em motocicleta geram periculosidade (Art. 193, § 4º, CLT)!"
      },
      {
        "letter": "B",
        "text": "O empregado pode receber cumulativamente o adicional de insalubridade (20%) e o de periculosidade (30%) quando exposto a fatos geradores distintos."
      },
      {
        "letter": "C",
        "text": "O adicional de insalubridade é calculado sobre o salário contratual base do empregado e incorpora-se definitivamente ao salário após 5 anos."
      },
      {
        "letter": "D",
        "text": "O contato eventual por tempo extremamente reduzido com inflamáveis ainda assim assegura integralmente o adicional de periculosidade de 30%."
      }
    ],
    "correctAnswer": "A",
    "justification": "Insalubridade: 10% / 20% / 40% sobre salário mínimo; cessa com eliminação ou EPI eficaz (Súmulas 80 e 248 TST); exige previsão na NR do MTE (Súmula 448 TST). Periculosidade: 30% sobre salário-base (inflamáveis, explosivos, energia elétrica, roubos/violência física segurança pessoal/patrimonial, motocicleta — Art. 193); contato eventual/tempo reduzido = não devido (Súmula 364). Vedada cumulação!",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O TST em Incidente de Recurso Repetitivo (IRR-239-55.2011) manteve a vedação do Art. 193, § 2º, da CLT: é impossível cumular insalubridade e periculosidade, devendo optar por um deles."
      },
      {
        "letter": "C",
        "explanation": "Base da insalubridade = salário mínimo (SV 4 STF / súmula vinculante impede fixar outro índice judicialmente); ademais, pela Súmula 248 TST, a reclassificação ou eliminação do agente (ou fornecimento eficaz de EPI — Súmula 80 TST) faz CESSAR o direito ao adicional (não há direito adquirido!)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 364, I, do TST, faz jus ao adicional de periculosidade o empregado exposto permanentemente ou de forma intermitente; sendo INDEVIDO quando o contato se dá de forma EVENTUAL (fortuita) ou por tempo extremamente reduzido."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 189 a 196 da CLT e Súmulas 80, 191, 248, 364 e 448 TST",
        "textSnippet": "Insalubridade: 10% / 20% / 40% sobre salário mínimo; cessa com eliminação ou EPI eficaz (Súmulas 80 e 248 TST); exige previsão na NR do MTE (Súmula 448 TST). Periculosidade: 30% sobre salário-base (inflamáveis, explosivos, energia elétrica, roubos/violência física segurança pessoal/patrimonial, motocicleta — Art. 193); contato eventual/tempo reduzido = não devido (Súmula 364). Vedada cumulação!"
      }
    ],
    "jurisprudence": "Súmulas 80, 191, 248, 364 e 448 do TST e SV 4 STF",
    "professorTip": "Insalubridade (10/20/40% do Salário Mínimo) vs. Periculosidade (30% do Salário-Base): NÃO acumulam (opta por um)! Contato eventual/curtíssimo = sem periculosidade (Súmula 364 TST)! EPI eficaz/fim do risco = cessa (Súmulas 80 e 248)!"
  },
  {
    "id": "mig_trab_013",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Suspensão vs. Interrupção do Contrato de Trabalho",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado sofre acidente de trabalho típico e entra em gozo de auxílio por incapacidade temporária acidentário (antigo auxílio-doença acidentário — B91) pelo INSS por 8 meses; paralelamente, outro empregado é eleito diretor sindical e afasta-se do trabalho sem remuneração da empresa para exercer o mandato (Art. 543, § 2º, CLT). Como se classificam esses afastamentos quanto aos salários, FGTS e tempo de serviço?",
    "options": [
      {
        "letter": "A",
        "text": "Afastamento por acidente de trabalho (após os 15 primeiros dias pagos pela empresa) gera regras próprias: embora não haja pagamento de salário pela empresa após o 15º dia, computa-se o tempo de serviço para indenização/estabilidade e é OBRIGATÓRIO o depósito mensal do FGTS pelo empregador durante todo o afastamento acidentário (Art. 15, § 5º, Lei 8.036/90) + manutenção do plano de saúde (Súmula 440 TST)! Já a licença não remunerada para mandato sindical (Art. 543, § 2º) configura SUSPENSÃO pura do contrato (sem salário, sem FGTS, sem cômputo de tempo de serviço, salvo norma coletiva)!"
      },
      {
        "letter": "B",
        "text": "Durante o auxílio-doença COMUM (doença não relacionada ao trabalho, após o 15º dia), o empregador também continua obrigado a depositar o FGTS mensal."
      },
      {
        "letter": "C",
        "text": "Os primeiros 15 dias de afastamento por doença ou acidente de trabalho caracterizam suspensão do contrato sem salário."
      },
      {
        "letter": "D",
        "text": "Na greve deflagrada legalmente, como regra da Lei 7.783/89 (Art. 7º), o contrato fica interrompido com obrigação incondicional de pagar os dias parados."
      }
    ],
    "correctAnswer": "A",
    "justification": "Interrupção (recebe salário + conta tempo + FGTS): 15 primeiros dias de doença/acidente, férias, DSR, feriados, licença-maternidade (salário pago/compensado), faltas justificadas do Art. 473 CLT, aviso prévio trabalhado. Suspensão (sem salário/tempo/FGTS): falta injustificada, suspensão disciplinar, aposentadoria por invalidez (mantém plano de saúde — Súmula 440 TST), licença não remunerada, greve, auxílio-doença comum > 15d. Acidentário > 15d = híbrido (sem salário, MAS tem FGTS + tempo de serviço + estabilidade 12m após alta).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Diferença clássica de prova: no auxílio-doença ACIDENTÁRIO (ou serviço militar obrigatório) o empregador CONTINUA depositando o FGTS; no auxílio-doença COMUM (após o 15º dia) ocorre suspensão pura — NÃO há depósito de FGTS nem contagem de tempo (mas mantém plano de saúde pela Súmula 440 TST)!"
      },
      {
        "letter": "C",
        "explanation": "Nos primeiros 15 dias de afastamento por doença/acidente, o empregador paga integralmente o salário e computa o tempo (INTERRUPÇÃO do contrato)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 7º da Lei nº 7.783/89, a participação pacífica em greve SUSPENDE o contrato de trabalho, ficando as relações obrigacionais durante o período regidas por acordo, convenção, laudo arbitral ou decisão da Justiça do Trabalho."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 471 a 476-A da CLT e Súmula 440 TST",
        "textSnippet": "Interrupção (recebe salário + conta tempo + FGTS): 15 primeiros dias de doença/acidente, férias, DSR, feriados, licença-maternidade (salário pago/compensado), faltas justificadas do Art. 473 CLT, aviso prévio trabalhado. Suspensão (sem salário/tempo/FGTS): falta injustificada, suspensão disciplinar, aposentadoria por invalidez (mantém plano de saúde — Súmula 440 TST), licença não remunerada, greve, auxílio-doença comum > 15d. Acidentário > 15d = híbrido (sem salário, MAS tem FGTS + tempo de serviço + estabilidade 12m após alta)."
      }
    ],
    "jurisprudence": "Súmula nº 440 do TST",
    "professorTip": "Doença COMUM (>15d) = SUSPENSÃO pura (SEM FGTS)! Acidente TRABALHO (>15d) = TEM FGTS e conta tempo! Plano de Saúde = mantido em ambos (Súmula 440 TST)!"
  },
  {
    "id": "mig_trab_014",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Faltas Justificadas (Art. 473 CLT) e Alteração Contratual (Transferência)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado teve sua primeira filha (licença-paternidade) e também acompanhou a esposa grávida em 2 consultas médicas durante a gestação; em outro momento, foi transferido provisoriamente para outra cidade com mudança de domicílio por real necessidade de serviço. Quais os prazos das faltas justificadas e qual o adicional na transferência provisória?",
    "options": [
      {
        "letter": "A",
        "text": "A licença-paternidade é de 5 dias (Art. 7º, XIX, CF c/c Art. 10, § 1º, ADCT — ou 20 dias em empresa cidadã!); pode faltar até 6 vezes ao ano (Art. 473, X, CLT — ampliado pela Lei 14.457/2022!) para acompanhar esposa/companheira em consultas e exames complementares durante a gravidez (além de 1 dia por ano para acompanhar filho de até 6 anos em consulta médica — XI); e na transferência PROVISÓRIA com mudança de domicílio, o empregador deve pagar adicional mínimo de 25% sobre os salários enquanto durar a situação (Art. 469, § 3º, CLT — mesmo em cargo de confiança pela OJ 113 SDI-1 TST!)."
      },
      {
        "letter": "B",
        "text": "O adicional de transferência de 25% é devido tanto na transferência provisória quanto na transferência definitiva com mudança de domicílio."
      },
      {
        "letter": "C",
        "text": "Para acompanhar filho de até 6 anos ao médico, o empregado tem direito a 5 dias por ano de falta justificada."
      },
      {
        "letter": "D",
        "text": "Se a transferência não acarretar mudança de domicílio do empregado, o adicional de 25% ainda assim é devido se o trajeto aumentar em 30 minutos."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 473 CLT (faltas justificadas): 2d falecimento (I); 3d casamento (II); 5d paternidade (III / ADCT); 1d/ano sangue (IV); 6x gravidez esposa/companheira (X — Lei 14.457/22); 1d/ano filho até 6 anos médico (XI); 3d/ano exame câncer (XII). Transferência provisória com mudança de domicílio = +25% (mesmo cargo de confiança — OJ 113 SDI-1 TST).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pela OJ 113 da SDI-1 do TST e Art. 469, § 3º, CLT, o adicional de transferência de 25% é devido EXCLUSIVAMENTE na transferência PROVISÓRIA (jamais na definitiva!)."
      },
      {
        "letter": "C",
        "explanation": "Art. 473 CLT: até 6 vezes durante a gravidez da esposa/companheira (X); 1 dia por ano para acompanhar filho de até 6 anos em consulta médica (XI); até 3 dias a cada 12 meses para exame preventivo de câncer (XII); 2 dias consecutivos em falecimento de cônjuge/ascendente/descendente/irmão/dependente (I); 3 dias consecutivos em virtude de casamento (II); 1 dia a cada 12 meses por doação voluntária de sangue (IV)."
      },
      {
        "letter": "D",
        "explanation": "Transferência sem mudança de domicílio não é tecnicamente transferência do Art. 469 CLT (só gera direito ao suplemento de despesas de transporte pelo Art. 470 / Súmula 29 TST — jamais adicional de 25%!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 468 a 473 da CLT e Súmula 29 e 43 TST",
        "textSnippet": "Art. 473 CLT (faltas justificadas): 2d falecimento (I); 3d casamento (II); 5d paternidade (III / ADCT); 1d/ano sangue (IV); 6x gravidez esposa/companheira (X — Lei 14.457/22); 1d/ano filho até 6 anos médico (XI); 3d/ano exame câncer (XII). Transferência provisória com mudança de domicílio = +25% (mesmo cargo de confiança — OJ 113 SDI-1 TST)."
      }
    ],
    "jurisprudence": "OJ 113 SDI-1 e Súmula 29 do TST",
    "professorTip": "Art. 473: Casamento = 3d | Luto = 2d | Paternidade = 5d | Acompanhar esposa grávida = até 6x | Filho <= 6a = 1d/ano! Adicional Transferência 25% = SÓ na PROVISÓRIA com mudança de domicílio (OJ 113)!"
  },
  {
    "id": "mig_trab_015",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Estabilidades Provisórias - Gestante, CIPA, Acidentado e Dirigente Sindical",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregada contratada por prazo determinado (contrato de experiência de 90 dias) descobre estar grávida durante a vigência do contrato e é dispensada ao término dos 90 dias; paralelamente, outro empregado é eleito membro suplente da CIPA (representante dos empregados) e sofre dispensa sem justa causa durante o mandato. Ambos têm estabilidade provisória?",
    "options": [
      {
        "letter": "A",
        "text": "Sim para AMBOS! Pela Súmula 244, III, do TST e STF (Tema 497 — RE 629.053), a empregada gestante tem direito à estabilidade provisória prevista no Art. 10, II, \"b\", do ADCT (da confirmação da gravidez até 5 meses após o parto) MESMO na hipótese de admissão mediante contrato por tempo determinado (experiência/prazo certo — e mesmo que o empregador desconhecesse a gravidez ou ocorresse durante o aviso prévio, Art. 391-A CLT!); e quanto à CIPA, a estabilidade estende-se tanto ao titular quanto ao SUPLENTE eleito dos empregados (Súmula 339, I, TST)!"
      },
      {
        "letter": "B",
        "text": "A empregada gestante não possui estabilidade em contrato de experiência por tratar-se de contrato por prazo determinado."
      },
      {
        "letter": "C",
        "text": "Na CIPA, apenas o membro titular e o presidente indicado pelo empregador possuem estabilidade provisória até 1 ano após o mandato."
      },
      {
        "letter": "D",
        "text": "O dirigente sindical tem estabilidade mesmo se for o 9º suplente eleito pela chapa sindical."
      }
    ],
    "correctAnswer": "A",
    "justification": "Estabilidades: Gestante = confirmação até 5m após parto (vale em experiência e aviso prévio; independe ciência do patrão — STF Tema 497). CIPA = só representantes dos empregados (titular + suplente), registro até 1a após mandato. Dirigente sindical = máx 7 titulares + 7 suplentes (não vale se registro no aviso prévio; falta grave exige inquérito judicial — Súmula 379 TST). Acidentado = 12m após cessação do auxílio-doença acidentário (exige afastamento > 15d e percepção do benefício, salvo doença ocupacional constatada após demissão — Súmula 378, II, TST).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Súmula 244, III, TST: a empregada gestante tem direito à estabilidade provisória mesmo no contrato por prazo determinado (salvo trabalho temporário da Lei 6.019/74 segundo tese do TST no IAC-5639-31.2013!)."
      },
      {
        "letter": "C",
        "explanation": "O presidente da CIPA é designado pelo empregador e NÃO tem estabilidade! Apenas os representantes dos EMPREGADOS (titulares e suplentes) têm estabilidade do registro da candidatura até 1 ano após o final do mandato (Súmula 339, I, TST)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 522 CLT e Súmula 369, II, TST, a estabilidade do dirigente sindical fica limitada a no máximo 7 dirigentes titulares e igual número de 7 suplentes (do registro da candidatura até 1 ano após o mandato — e não se aplica se o registro da candidatura ocorrer no curso do aviso prévio, Súmula 369, V!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 10, II, ADCT e Arts. 118 Lei 8.213/91, 391-A e 543 CLT e Súmulas 244, 369, 378 e 396 TST",
        "textSnippet": "Estabilidades: Gestante = confirmação até 5m após parto (vale em experiência e aviso prévio; independe ciência do patrão — STF Tema 497). CIPA = só representantes dos empregados (titular + suplente), registro até 1a após mandato. Dirigente sindical = máx 7 titulares + 7 suplentes (não vale se registro no aviso prévio; falta grave exige inquérito judicial — Súmula 379 TST). Acidentado = 12m após cessação do auxílio-doença acidentário (exige afastamento > 15d e percepção do benefício, salvo doença ocupacional constatada após demissão — Súmula 378, II, TST)."
      }
    ],
    "jurisprudence": "STF Tema 497 e Súmulas 244, 339, 369 e 378 do TST",
    "professorTip": "Estabilidades: Gestante (experiência/aviso prévio = TEM, salvo temporário 6.019)! CIPA (empregados titular+suplente = TEM; presidente = NÃO)! Sindical (7+7; precisa Inquérito p/ justa causa)! Acidentado (12m após alta do B91)!"
  },
  {
    "id": "mig_trab_016",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Extinção do Contrato - Justa Causa, Rescisão Indireta, Culpa Recíproca e Distrato (Acordo)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado e empregador resolvem encerrar amigavelmente o contrato de trabalho por comum acordo (distrato do Art. 484-A CLT); em outro contrato, o empregador deixa de depositar o FGTS por vários meses consecutivos e comete rigor excessivo, levando o empregado a pedir rescisão indireta na Justiça do Trabalho. Quais verbas são devidas no distrato (acordo) e quais são devidas na rescisão indireta?",
    "options": [
      {
        "letter": "A",
        "text": "No DISTRATO por acordo (Art. 484-A CLT): são devidos pela METADE (50%) o aviso prévio (se indenizado) e a indenização sobre o saldo do FGTS (multa de 20% em vez de 40%), e na integralidade as demais verbas (saldo salário, férias + 1/3, 13º), permitindo movimentar até 80% do FGTS, MAS SEM direito ao Seguro-Desemprego!; já na RESCISÃO INDIRETA (Art. 483 CLT — justa causa do empregador), o empregado recebe TODAS as verbas idênticas à dispensa sem justa causa (100% aviso prévio, multa 40% FGTS, saque 100% FGTS, seguro-desemprego)!"
      },
      {
        "letter": "B",
        "text": "No distrato do Art. 484-A, o empregado pode sacar 100% do FGTS e tem direito ao benefício do seguro-desemprego integral."
      },
      {
        "letter": "C",
        "text": "Na culpa recíproca reconhecida em juízo (Art. 484 CLT e Súmula 14 TST), o empregado perde totalmente o direito ao 13º salário e às férias proporcionais."
      },
      {
        "letter": "D",
        "text": "A perda da habilitação profissional (CNH) exigida para o exercício da profissão por conduta dolosa do empregado (motorista) não pode ensejar justa causa na CLT."
      }
    ],
    "correctAnswer": "A",
    "justification": "Modalidades de Extinção: (1) Sem justa causa = 100% verbas + 40% FGTS + seguro-desemprego; (2) Distrato (Art. 484-A) = 50% aviso indenizado + 20% FGTS + saque até 80% + SEM seguro-desemprego; (3) Rescisão Indireta (Art. 483) = igual sem justa causa; (4) Culpa recíproca (Súmula 14 TST) = 50% aviso/13º/férias prop + 20% FGTS; (5) Justa causa empregado (Art. 482) = apenas saldo de salário e férias vencidas + 1/3 (sem 13º prop., sem férias prop. pela Súmula 171 TST!).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Art. 484-A, §§ 1º e 2º, CLT: no distrato, o saque do FGTS limita-se a até 80% do saldo dos depósitos e NÃO autoriza o ingresso no programa de Seguro-Desemprego!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 14 do TST, reconhecida a culpa recíproca na rescisão do contrato de trabalho (Art. 484 CLT), o empregado tem direito a 50% do valor do aviso prévio, do décimo terceiro salário e das férias proporcionais (e 20% multa FGTS!)."
      },
      {
        "letter": "D",
        "explanation": "A Reforma Trabalhista inseriu expressamente a alínea \"m\" no Art. 482 da CLT: constitui justa causa a perda da habilitação ou dos requisitos estabelecidos em lei para o exercício da profissão, em decorrência de conduta dolosa do empregado!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 482, 483, 484 e 484-A da CLT e Súmula 14 TST",
        "textSnippet": "Modalidades de Extinção: (1) Sem justa causa = 100% verbas + 40% FGTS + seguro-desemprego; (2) Distrato (Art. 484-A) = 50% aviso indenizado + 20% FGTS + saque até 80% + SEM seguro-desemprego; (3) Rescisão Indireta (Art. 483) = igual sem justa causa; (4) Culpa recíproca (Súmula 14 TST) = 50% aviso/13º/férias prop + 20% FGTS; (5) Justa causa empregado (Art. 482) = apenas saldo de salário e férias vencidas + 1/3 (sem 13º prop., sem férias prop. pela Súmula 171 TST!)."
      }
    ],
    "jurisprudence": "Súmulas 14 e 171 do TST",
    "professorTip": "Distrato (Art. 484-A): 50% aviso indenizado + 20% FGTS + saca 80% + SEM Seguro-Desemprego! Justa Causa = perde 13º prop. e férias prop. (Súmula 171 TST)! Perda dolosa da CNH = justa causa (Art. 482, \"m\")!"
  },
  {
    "id": "mig_trab_017",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Aviso Prévio - Proporcionalidade, Redução de Jornada e Reconsideração",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado com 4 anos completos de serviço na mesma empresa é dispensado sem justa causa com aviso prévio trabalhado; nos últimos 7 dias do aviso, falta por conta do direito de redução de jornada ou escolhe redução diária. Quantos dias totais de aviso prévio proporcional tem direito, e essa proporcionalidade aplica-se também em benefício do empregador quando o empregado pede demissão?",
    "options": [
      {
        "letter": "A",
        "text": "O aviso prévio proporcional (Lei nº 12.506/2011) é de 30 dias base + 3 dias por ano completo de serviço prestado na mesma empresa (até o máximo de +60 dias = teto de 90 dias); logo, com 4 anos completos são 30 + (4x3) = 42 dias! Porém, segundo a jurisprudência consolidada do TST (SDI-1), a proporcionalidade da Lei 12.506/2011 aplica-se EXCLUSIVAMENTE EM BENEFÍCIO DO EMPREGADO (no pedido de demissão, o empregado cumpre apenas 30 dias)!"
      },
      {
        "letter": "B",
        "text": "No pedido de demissão, o empregado com 4 anos de empresa também é obrigado a trabalhar ou indenizar 42 dias de aviso prévio ao empregador."
      },
      {
        "letter": "C",
        "text": "É lícito substituir a redução de 2 horas diárias (ou 7 dias corridos) no aviso prévio trabalhado pelo pagamento equivalente dessas horas em dinheiro."
      },
      {
        "letter": "D",
        "text": "A obtenção de novo emprego pelo empregado durante o cumprimento do aviso prévio trabalhado na dispensa sem justa causa obriga-o a pagar multa ao ex-patrão."
      }
    ],
    "correctAnswer": "A",
    "justification": "Aviso Prévio: 30d + 3d/ano completo até 90d (só em favor do empregado; nunca no pedido de demissão). Súmula 230 TST (proibido pagar em dinheiro a redução de 2h/7d). Súmula 276 TST (novo emprego libera sem indenizar dias restantes). Art. 489 CLT (reconsideração depende de aceitação da outra parte).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 7º, XXI, CF e a Lei 12.506/2011 asseguram a proporcionalidade como direito do trabalhador; em pedido de demissão, o aviso prévio do empregado ao empregador continua limitado a 30 dias (TST)."
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 230 do TST, é ILEGAL substituir o período que se reduz da jornada de trabalho no aviso prévio pelo pagamento das horas correspondentes (importa nulidade do aviso prévio, devendo ser pago novo aviso indenizado integral!)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 276 do TST, o direito ao aviso prévio é irrenunciável pelo empregado; porém, o pedido de dispensa de cumprimento não exime o empregador de pagar o respectivo valor, SALVO comprovação de haver o prestador dos serviços obtido novo emprego (libera o empregado sem pagar dias restantes e libera o patrão dos dias não trabalhados!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 487 a 491 da CLT, Lei nº 12.506/2011 e Súmulas 276, 305 e 441 TST",
        "textSnippet": "Aviso Prévio: 30d + 3d/ano completo até 90d (só em favor do empregado; nunca no pedido de demissão). Súmula 230 TST (proibido pagar em dinheiro a redução de 2h/7d). Súmula 276 TST (novo emprego libera sem indenizar dias restantes). Art. 489 CLT (reconsideração depende de aceitação da outra parte)."
      }
    ],
    "jurisprudence": "Súmulas 230 e 276 do TST",
    "professorTip": "Aviso Prévio = 30d + 3d/ano (máx 90d) SÓ em favor do empregado! Pedido de demissão = sempre 30d! Trocar redução 2h/7d por dinheiro = NULO (Súmula 230 TST)! Novo emprego = dispensa pagar dias restantes (Súmula 276 TST)!"
  },
  {
    "id": "mig_trab_018",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Verbas Rescisórias - Prazos do Art. 477 CLT, Multas do 477 e 467 e Baixa na CTPS",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado foi dispensado sem justa causa com aviso prévio indenizado no dia 10 de junho. Até qual data o empregador deve pagar as verbas rescisórias e entregar os documentos de baixa/guias sob pena da multa do Art. 477, § 8º, da CLT? E quando incide a multa do Art. 467 da CLT?",
    "options": [
      {
        "letter": "A",
        "text": "Com a Reforma Trabalhista (Art. 477, § 6º, CLT), o prazo foi UNIFICADO para 10 DIAS contados a partir do término do contrato (tanto no aviso prévio trabalhado quanto no indenizado ou pedido de demissão!) tanto para pagamento das verbas quanto para entrega dos documentos rescisórios, sob pena de multa equivalente a 1 salário do empregado (Art. 477, § 8º — cabível mesmo quando o vínculo é reconhecido apenas em juízo, Súmula 462 TST!); já a multa de 50% do Art. 467 incide sobre as verbas rescisórias INCONTROVERSAS não pagas na data do comparecimento à Justiça do Trabalho (1ª audiência)!"
      },
      {
        "letter": "B",
        "text": "No aviso prévio trabalhado, o pagamento das verbas rescisórias deve ocorrer até o primeiro dia útil imediato ao término do contrato."
      },
      {
        "letter": "C",
        "text": "Se a empresa contestar integralmente o vínculo de emprego em juízo, o reconhecimento posterior da relação de emprego na sentença afasta a multa do Art. 477, § 8º."
      },
      {
        "letter": "D",
        "text": "A multa de 50% do Art. 467 da CLT aplica-se inclusive contra a União, Estados, Distrito Federal e Municípios."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 477, §§ 6º e 8º CLT: prazo único de 10 dias do término do contrato (entrega guias + baixa CTPS + pagamento); descumprimento = multa de 1 salário (Súmula 462 TST; extinta homologação obrigatória no sindicato para > 1 ano!). Art. 467 CLT: parte incontroversa não paga na 1ª audiência = +50% (não se aplica a Fazenda Pública — p.u.).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O antigo prazo do primeiro dia útil imediato foi REVOGADO pela Lei 13.467/2017: hoje o prazo é ÚNICO de 10 dias do término do contrato para pagamento e entrega de documentos!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 462 do TST, a circunstância de a relação de emprego ter sido reconhecida apenas em juízo NÃO tem o condão de afastar a incidência da multa do Art. 477, § 8º, da CLT (salvo se o próprio empregado der causa à mora)."
      },
      {
        "letter": "D",
        "explanation": "O parágrafo único do Art. 467 da CLT isenta expressamente a União, Estados, DF, Municípios e suas autarquias/fundações públicas da multa de 50% do Art. 467 (atenção: empresas públicas e SEM pagam normal; Fazenda Pública não paga a do 467, mas paga a do 477 pela OJ 238 SDI-1!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 467 e 477 da CLT e Súmula 462 TST",
        "textSnippet": "Art. 477, §§ 6º e 8º CLT: prazo único de 10 dias do término do contrato (entrega guias + baixa CTPS + pagamento); descumprimento = multa de 1 salário (Súmula 462 TST; extinta homologação obrigatória no sindicato para > 1 ano!). Art. 467 CLT: parte incontroversa não paga na 1ª audiência = +50% (não se aplica a Fazenda Pública — p.u.)."
      }
    ],
    "jurisprudence": "Súmula nº 462 do TST",
    "professorTip": "Prazo Rescisão (Art. 477) = 10 DIAS SEMPRE (acabou 1º dia útil e acabou homologação no sindicato)! Multa 477 = 1 salário (aplica mesmo com vínculo reconhecido em juízo — Súmula 462)! Multa 467 (+50% incontroverso) = Fazenda Pública NÃO paga!"
  },
  {
    "id": "mig_trab_019",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Negociação Coletiva - Prevalência do Negociado sobre o Legislado (Art. 611-A vs. 611-B e STF Tema 1046)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Convenção coletiva de trabalho reduziu o intervalo intrajornada de 1 hora para 30 minutos (sem redução salarial) e, em outro parágrafo, determinou que a empresa não pagaria o terço constitucional de férias nem o FGTS aos empregados admitidos no ano vigente. Qual cláusula é válida e qual é ilícita?",
    "options": [
      {
        "letter": "A",
        "text": "A redução do intervalo intrajornada para até 30 minutos é VÁLIDA (Art. 611-A, III, CLT); já a supressão ou redução do 1/3 constitucional de férias e do FGTS é absolutamente ILÍCITA (Art. 611-B, III e XI, CLT — objeto ilícito!), pois o STF (Tema 1046) validou a prevalência de normas coletivas que restringem direitos trabalhistas infraconstitucionais, DESDE QUE respeitados os direitos absolutamente INDISPONÍVEIS assegurados na Constituição (Art. 611-B)!"
      },
      {
        "letter": "B",
        "text": "Nenhuma cláusula coletiva pode reduzir intervalo intrajornada abaixo de 1 hora sem portaria prévia do Ministério do Trabalho."
      },
      {
        "letter": "C",
        "text": "Por força do Tema 1046 do STF, acordo ou convenção coletiva pode suprimir inclusive o pagamento de FGTS, 13º salário e salário mínimo."
      },
      {
        "letter": "D",
        "text": "O prazo de vigência máxima de convenção ou acordo coletivo é de 2 anos, operando-se automaticamente a ultratividade enquanto não houver nova norma."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 611-A vs 611-B CLT + STF Tema 1046 + ADPF 323: Negociado prevalece sobre legislado quanto a jornada, banco de horas, intervalo >= 30m, teletrabalho, enquadramento de insalubridade, adesão ao PSE; PROIBIDO suprimir direitos absolutamente indisponíveis (FGTS, 13º, férias+1/3, salário mínimo, normas de saúde/segurança). Vigência máx = 2 anos, VEDADA ultratividade (ADPF 323 STF).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 611-A, III, da CLT permite expressamente pactuação coletiva do intervalo intrajornada respeitado o limite mínimo de 30 minutos para jornadas superiores a 6 horas."
      },
      {
        "letter": "C",
        "explanation": "O Art. 611-B da CLT elenca taxativamente os direitos de patamar civilizatório mínimo que NÃO podem ser suprimidos ou reduzidos por negociação coletiva (FGTS, salário mínimo, 13º, férias + 1/3, licença-maternidade, aviso prévio proporcional, normas de saúde/segurança — salvo enquadramento de insalubridade e prorrogação em ambiente insalubre conforme 611-A, XII e XIII!)."
      },
      {
        "letter": "D",
        "explanation": "O Art. 614, § 3º, da CLT fixa o prazo máximo de 2 anos para vigência de ACT/CCT e VEDA expressamente a ULTRATIVIDADE (confirmada a vedação pela STF ADPF 323!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 611-A e 611-B da CLT e STF ARE 1.121.633 (Tema 1046)",
        "textSnippet": "Art. 611-A vs 611-B CLT + STF Tema 1046 + ADPF 323: Negociado prevalece sobre legislado quanto a jornada, banco de horas, intervalo >= 30m, teletrabalho, enquadramento de insalubridade, adesão ao PSE; PROIBIDO suprimir direitos absolutamente indisponíveis (FGTS, 13º, férias+1/3, salário mínimo, normas de saúde/segurança). Vigência máx = 2 anos, VEDADA ultratividade (ADPF 323 STF)."
      }
    ],
    "jurisprudence": "STF Tema 1046 e ADPF 323",
    "professorTip": "Art. 611-A (pode negociar) vs. 611-B (PROIBIDO tirar: FGTS, 13º, Férias+1/3, Salário Mínimo, Licença)! STF ADPF 323 = VEDADA ultratividade de norma coletiva (máx 2 anos)!"
  },
  {
    "id": "mig_trab_020",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Prescrição Trabalhista - Bienal, Quinquenal, Intercorrente e FGTS (STF ARE 709.212)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado trabalhou por 10 anos na mesma empresa, sendo dispensado em 10/01/2023 (com aviso prévio indenizado projetando o término para 09/03/2023). Ajuizou reclamação trabalhista em 20/02/2025 cobrando horas extras e depósitos de FGTS não recolhidos durante os 10 anos de contrato. A ação está prescrita? E qual a prescrição do FGTS segundo o STF?",
    "options": [
      {
        "letter": "A",
        "text": "A prescrição bienal conta-se sempre do último dia efetivamente trabalhado na empresa, desconsiderando o aviso prévio indenizado."
      },
      {
        "letter": "B",
        "text": "O prazo prescricional para cobrança de depósitos de FGTS não recolhidos continua sendo de 30 anos."
      },
      {
        "letter": "C",
        "text": "Contra trabalhadores menores de 18 anos e para ações declaratórias de reconhecimento de vínculo para fins previdenciários corre normalmente a prescrição bienal trabalhista."
      },
      {
        "letter": "D",
        "text": "A ação NÃO está totalmente prescrita pela prescrição bienal porque a projeção do aviso prévio indenizado integra o tempo de serviço para todos os efeitos (logo, o contrato encerrou-se em 09/03/2023 -> prazo bienal vai até 09/03/2025 — OJ 83 SDI-1 TST!); contudo, pela prescrição quinquenal, alcançam-se apenas as parcelas dos 5 anos anteriores ao ajuizamento (de 20/02/2020 em diante — Súmula 308, I, TST)! Quanto ao FGTS, o STF no ARE 709.212 (Súmula 362 TST) definiu que a prescrição do FGTS é QUINQUENAL (5 anos, observada a modulação de 2014 já encerrada em 2019)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Prescrição Trabalhista: 5 anos durante contrato até o limite de 2 anos após extinção (contando projeção do aviso prévio indenizado — OJ 83). Menor de 18 anos = não corre prescrição (Art. 440). Ação declaratória = imprescritível. FGTS = 5 anos (Súmula 362 TST / STF). Prescrição intercorrente na execução = 2 anos (Art. 11-A CLT).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela OJ 83 da SDI-1 do TST e Art. 487, § 1º, CLT, a prescrição começa a fluir no final da data do término do aviso prévio, ainda que indenizado!"
      },
      {
        "letter": "B",
        "explanation": "Desde o julgamento do ARE 709.212 pelo STF (e nova redação da Súmula 362 TST), o prazo prescricional do FGTS é de 5 ANOS (bienal de 2 anos após extinção, respeitada a quinquenal; a regra de transição de 30 anos encerrou-se em 13/11/2019!)."
      },
      {
        "letter": "C",
        "explanation": "Art. 440 CLT: contra os menores de 18 anos NÃO corre nenhum prazo de prescrição! E ações meramente declaratórias (ex.: anotação de CTPS para fins previdenciários — Art. 11, § 1º, CLT) são imprescritíveis!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 7º, XXIX, CF/88, Art. 11 e 11-A CLT e Súmulas 308, 362 e 368 TST",
        "textSnippet": "Prescrição Trabalhista: 5 anos durante contrato até o limite de 2 anos após extinção (contando projeção do aviso prévio indenizado — OJ 83). Menor de 18 anos = não corre prescrição (Art. 440). Ação declaratória = imprescritível. FGTS = 5 anos (Súmula 362 TST / STF). Prescrição intercorrente na execução = 2 anos (Art. 11-A CLT)."
      }
    ],
    "jurisprudence": "STF ARE 709.212 e Súmulas 308 e 362 TST",
    "professorTip": "Prescrição CLT: 2 anos após fim do contrato (CONTA projeção do aviso prévio indenizado!) + volta 5 anos do ajuizamento! FGTS = 5 anos! Menor de 18 = SEM prescrição! Intercorrente = 2 anos!"
  },
  {
    "id": "mig_trab_021",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Dano Extrapatrimonial Trabalhista (Tarifação vs. STF ADI 6050) e Assédio",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Em reclamação trabalhista por acidente de trabalho grave, o juiz condena a empresa a pagar indenização por dano moral em valor equivalente a 60 vezes o último salário do ofendido, superando o teto de 50 vezes previsto no Art. 223-G, § 1º, IV, da CLT. À luz da decisão do STF nas ADIs 6.050, 6.069 e 6.082, essa condenação acima do teto da CLT é válida?",
    "options": [
      {
        "letter": "A",
        "text": "Não, pois o STF julgou constitucional a tarifação estrita do Art. 223-G como teto máximo absoluto intransponível."
      },
      {
        "letter": "B",
        "text": "A pessoa jurídica empregadora não possui legitimidade para sofrer ou pleitear dano extrapatrimonial nas relações de trabalho."
      },
      {
        "letter": "C",
        "text": "Na condenação por dano moral decorrente de acidente de trabalho que causou morte de empregado, é vedado à viúva e filhos pleitearem dano moral em ricochete na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Sim! No julgamento das ADIs 6.050, 6.069 e 6.082 (2023), o STF decidiu que os critérios de quantificação do Art. 223-G, § 1º, da CLT (3x, 5x, 20x, 50x o último salário) são parâmetros meramente ORIENTADORES para o juiz, e NÃO tetos máximos vinculantes intransponíveis, podendo o magistrado fixar indenização superior mediante decisão fundamentada!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Dano Extrapatrimonial (Arts. 223-A a 223-G CLT + STF ADIs 6050/6069/6082): abrange PF e PJ (Art. 223-D); cumula danos materiais, morais e estéticos; patamares de 3x a 50x do último salário são meramente ORIENTADORES (não são tetos absolutos!).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF deu interpretação conforme à Constituição: os valores do Art. 223-G servem apenas como critérios orientadores (não tetos rígidos), proibindo o tarifamento absoluto que viole a reparação integral!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 223-B e Art. 223-D da CLT, tanto a pessoa física quanto a pessoa JURÍDICA (ex.: honra objetiva/imagem/segredo empresarial) podem ser titulares do direito à reparação por dano extrapatrimonial!"
      },
      {
        "letter": "C",
        "explanation": "Tanto o STF (Súmula Vinculante 22) quanto o STJ/TST reconhecem a competência da Justiça do Trabalho para julgar danos morais e materiais em ricochete ajuizados por herdeiros/viúva em decorrência de acidente de trabalho com óbito!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 223-A a 223-G da CLT e STF ADIs 6.050, 6.069 e 6.082",
        "textSnippet": "Dano Extrapatrimonial (Arts. 223-A a 223-G CLT + STF ADIs 6050/6069/6082): abrange PF e PJ (Art. 223-D); cumula danos materiais, morais e estéticos; patamares de 3x a 50x do último salário são meramente ORIENTADORES (não são tetos absolutos!)."
      }
    ],
    "jurisprudence": "STF ADIs 6.050, 6.069 e 6.082",
    "professorTip": "STF ADIs 6050/6069/6082: Tetos do dano moral da CLT (3x a 50x) são só ORIENTADORES (juiz PODE condenar acima fundamentando)! PJ também sofre dano extrapatrimonial trabalhista!"
  },
  {
    "id": "mig_trab_022",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho da Mulher, Gestante, Adotante e Proteção à Maternidade",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregada gestante trabalha em atividade considerada insalubre em grau MÉDIO; paralelamente, outra empregada adota criança de 7 anos de idade, e uma terceira sofre aborto não criminoso comprovado por atestado médico oficial. Quais os direitos específicos de cada uma?",
    "options": [
      {
        "letter": "A",
        "text": "A gestante só deve ser afastada de atividades insalubres em grau médio ou mínimo se apresentar atestado médico particular recomendando o afastamento."
      },
      {
        "letter": "B",
        "text": "A empregada que adota criança com mais de 4 anos de idade tem licença-maternidade reduzida de apenas 30 dias."
      },
      {
        "letter": "C",
        "text": "Para amamentar seu filho até os 6 meses de idade, a mulher tem direito a apenas um descanso diário de 15 minutos durante a jornada."
      },
      {
        "letter": "D",
        "text": "A empregada gestante deve ser AFASTADA de quaisquer atividades insalubres (graus máximo, médio e mínimo) durante a gestação — independentemente de atestado médico, com percepção integral do salário e adicional de insalubridade — e se não houver local salubre na empresa, aplica-se gravidez de risco com salário-maternidade pelo INSS (Art. 394-A CLT c/c STF ADI 5938!); a mãe ADOTANTE tem exatamente a mesma licença-maternidade de 120 dias e estabilidade da mãe biológica (Art. 392-A CLT); e no aborto NÃO criminoso tem direito a repouso remunerado de 2 semanas (Art. 395 CLT)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Proteção à Maternidade (CLT): Gestante -> afastamento automático de TODA insalubridade (STF ADI 5938 — lactante precisa atestado para médio/mínimo). Licença-maternidade = 120d (biológica ou adotante, qualquer idade). Aborto não criminoso = 2 semanas de repouso (Art. 395). Amamentação até 6 meses = 2 intervalos de 30 min por dia (Art. 396).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF na ADI 5938 declarou inconstitucional a exigência de atestado médico nos incisos II e III do Art. 394-A: hoje a gestante é afastada AUTOMATICAMENTE de QUALQUER grau de insalubridade (máximo, médio ou mínimo — para lactante continua exigido atestado médico apenas nos graus médio e mínimo!)."
      },
      {
        "letter": "B",
        "explanation": "A Lei nº 12.873/13 e a Lei nº 13.509/17 unificaram a licença-maternidade da adotante para 120 dias independentemente da idade da criança ou adolescente adotado (e estendida ao empregado do sexo masculino que adotar/obtiver guarda judicial para fins de adoção — Art. 392-A, § 5º)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 396 CLT, para amamentar o próprio filho (inclusive advindo de adoção) até que complete 6 meses de idade, a mulher terá direito, durante a jornada, a 2 (dois) descansos especiais de meia hora (30 min) cada um!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 372 a 401 da CLT e Lei nº 14.457/2022",
        "textSnippet": "Proteção à Maternidade (CLT): Gestante -> afastamento automático de TODA insalubridade (STF ADI 5938 — lactante precisa atestado para médio/mínimo). Licença-maternidade = 120d (biológica ou adotante, qualquer idade). Aborto não criminoso = 2 semanas de repouso (Art. 395). Amamentação até 6 meses = 2 intervalos de 30 min por dia (Art. 396)."
      }
    ],
    "jurisprudence": "STF ADI 5938",
    "professorTip": "Gestante = sai automático de TODA insalubridade (STF ADI 5938; lactante precisa atestado p/ médio/mínimo)! Adoção = 120 dias qualquer idade! Aborto não criminoso = 2 semanas! Amamentação = 2x 30 min!"
  },
  {
    "id": "mig_trab_023",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito do Trabalho",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho do Menor e Contrato de Aprendizagem",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Adolescente com 15 anos completos é contratado regularmente como aprendiz em escritório administrativo por 2 anos. Qual a idade mínima constitucional para trabalho comum, aprendiz e noturno/perigoso/insalubre, qual a alíquota do FGTS do aprendiz e qual a duração máxima do contrato de aprendizagem?",
    "options": [
      {
        "letter": "A",
        "text": "O menor aprendiz entre 14 e 16 anos pode exercer atividade insalubre em grau mínimo desde que receba adicional e EPIs."
      },
      {
        "letter": "B",
        "text": "A alíquota de FGTS recolhida no contrato de aprendizagem é a mesma de 8% aplicada aos demais contratos de trabalho."
      },
      {
        "letter": "C",
        "text": "O contrato de aprendizagem pode durar até 4 anos consecutivos para qualquer jovem sem deficiência, com jornada máxima de 8 horas prorrogáveis."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 7º, XXXIII, da CF/88, é proibido trabalho noturno, perigoso ou insalubre a menores de 18 anos e qualquer trabalho a menores de 16 anos, SALVO na condição de APRENDIZ a partir dos 14 anos; no contrato de aprendizagem (Art. 428 CLT — faixa de 14 a 24 anos, sem limite de 24 anos para PcD), o prazo máximo do contrato é de 2 ANOS (salvo PcD!), a alíquota do FGTS é reduzida para 2% (Art. 15, § 7º, Lei 8.036/90) e é vedada a compensação e a prorrogação de jornada (Art. 432)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Menor e Aprendiz: Trabalho comum >= 16 anos; Aprendiz = 14 a 24 anos (PcD sem limite máximo); Noturno/Perigoso/Insalubre >= 18 anos. Aprendizagem: máx 2 anos (salvo PcD); FGTS = 2%; jornada 6h (8h se concluiu fundamental c/ teóricas); proibidas horas extras e prorrogação. Art. 440 = sem prescrição para < 18 anos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A CF/88 proíbe absolutamente trabalho noturno (22h–5h), perigoso ou insalubre para qualquer menor de 18 anos (inclusive aprendizes!)."
      },
      {
        "letter": "B",
        "explanation": "O FGTS do menor aprendiz tem alíquota reduzida de 2% (e nos contratos comuns = 8%)."
      },
      {
        "letter": "C",
        "explanation": "Prazo máximo de aprendizagem = 2 anos (exceto pessoa com deficiência, sem teto de idade ou de 2 anos — Art. 428, §§ 3º e 5º CLT); jornada máxima = 6h diárias (8h só para quem já completou ensino fundamental e computadas as horas de aprendizagem teórica), vedadas horas extras e compensação!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 7º, XXXIII, CF/88 e Arts. 402 a 441 da CLT",
        "textSnippet": "Menor e Aprendiz: Trabalho comum >= 16 anos; Aprendiz = 14 a 24 anos (PcD sem limite máximo); Noturno/Perigoso/Insalubre >= 18 anos. Aprendizagem: máx 2 anos (salvo PcD); FGTS = 2%; jornada 6h (8h se concluiu fundamental c/ teóricas); proibidas horas extras e prorrogação. Art. 440 = sem prescrição para < 18 anos."
      }
    ],
    "professorTip": "Idades Trabalho: 14 (Aprendiz) | 16 (Comum) | 18 (Noturno/Perigoso/Insalubre)! Aprendiz = FGTS 2%, máx 2 anos (PcD sem limite), SEM hora extra!"
  },
  {
    "id": "mig_trab_024",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Doméstico - LC 150/2015 vs. Diarista (Continuidade > 2 Dias)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Trabalhadora realiza faxina e preparo de refeições em residência familiar três vezes por semana (segundas, quartas e sextas-feiras) mediante salário mensal fixo e subordinação à dona da casa. Configura relação de emprego doméstica ou prestação autônoma de diarista?",
    "options": [
      {
        "letter": "A",
        "text": "Só se caracteriza vínculo de emprego doméstico quando o trabalho ocorre a partir de 4 dias por semana na mesma residência."
      },
      {
        "letter": "B",
        "text": "O empregado doméstico não faz jus ao adicional noturno, ao FGTS obrigatório nem ao seguro-desemprego."
      },
      {
        "letter": "C",
        "text": "Ao empregado doméstico aplicam-se automaticamente os adicionais de insalubridade e periculosidade previstos na CLT."
      },
      {
        "letter": "D",
        "text": "Configura vínculo de EMPREGO DOMÉSTICO! Pelo Art. 1º da LC nº 150/2015, é empregado doméstico aquele que presta serviços de forma contínua, subordinada, onerosa e pessoal e de finalidade não lucrativa à pessoa ou à família, no âmbito residencial destas, por MAIS DE 2 (DOIS) DIAS POR SEMANA (logo, 3 dias ou mais por semana = empregada doméstica; até 2 dias por semana = diarista autônoma)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "LC 150/2015 (Doméstico): >= 18 anos (proibido < 18 anos em trabalho doméstico — Dec. 6.481/08 Lista TIP); âmbito residencial sem fins lucrativos; > 2 dias por semana (3 ou mais). Tem FGTS (8% + 3,2% reserva indenizatória — sem multa de 40% rescisória separada!), horas extras, noturno, salário-família, seguro-desemprego (3 parcelas de 1 SM).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O critério objetivo legal fixado no Art. 1º da LC 150/2015 é MAIS DE 2 DIAS por semana (ou seja, >= 3 dias semanais = doméstica)!"
      },
      {
        "letter": "B",
        "explanation": "Desde a EC 72/2013 e a LC 150/2015, o doméstico tem direito a jornada de 8h/44h, horas extras (50%), adicional noturno (20%), FGTS obrigatório (8%), seguro-desemprego (3 parcelas de 1 SM), salário-família e recolhimento adicional de 3,2% para indenização compensatória da perda do emprego!"
      },
      {
        "letter": "C",
        "explanation": "Atenção à exceção da LC 150/2015: embora tenha quase todos os direitos da CLT, o empregado doméstico NÃO tem direito a adicionais de insalubridade/periculosidade (nem participação nos lucros ou jornada diferenciada de categorias), salvo previsão contratual!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Lei Complementar nº 150/2015",
        "textSnippet": "LC 150/2015 (Doméstico): >= 18 anos (proibido < 18 anos em trabalho doméstico — Dec. 6.481/08 Lista TIP); âmbito residencial sem fins lucrativos; > 2 dias por semana (3 ou mais). Tem FGTS (8% + 3,2% reserva indenizatória — sem multa de 40% rescisória separada!), horas extras, noturno, salário-família, seguro-desemprego (3 parcelas de 1 SM)."
      }
    ],
    "professorTip": "Doméstico (LC 150/15): > 2 dias/semana (3+ = vínculo; 1 ou 2 = diarista)! Idade mínima = 18 anos! FGTS = 8% + 3,2% antecipado (NÃO paga multa 40% na demissão)!"
  },
  {
    "id": "mig_trab_025",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Rural - Peculiaridades, Moradia e Prescrição",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado rural residente em casa fornecida pelo fazendeiro dentro da propriedade agrícola para viabilizar o trabalho recebe salário mínimo legal e desconto de moradia ajustado em contrato escrito com ciência ao sindicato. Além disso, trabalha em cultura de safra por prazo determinado. Qual o limite do desconto da moradia/alimentação no salário do rural e o que ocorre com a casa se ele for demitido?",
    "options": [
      {
        "letter": "A",
        "text": "No contrato de trabalho rural aplicam-se os mesmos limites máximos de desconto de habitação (25%) e alimentação (20%) da CLT urbana."
      },
      {
        "letter": "B",
        "text": "Ao trabalhador rural com contrato de trabalho por pequeno prazo (Art. 14-A da Lei 5.889/73) exige-se anotação formal em CTPS física mesmo para colheita de 15 dias."
      },
      {
        "letter": "C",
        "text": "O intervalo interjornada no trabalho rural também é de 11 horas, não cabendo intervalos intrajornada especiais para trabalho contínuo."
      },
      {
        "letter": "D",
        "text": "Pelo Art. 9º da Lei nº 5.889/1973, o desconto no salário pela moradia do trabalhador rural (com autorização prévia) limita-se a no máximo 20% do salário mínimo (e alimentação até 25% do salário mínimo); além disso, se a moradia for fornecida gratuitamente sem contrato de comodato salarial, NÃO integra o salário para nenhum efeito (Art. 9º, § 5º — bastando contrato escrito notificado ao sindicato!) e, rescindido o contrato, o trabalhador tem 30 dias para desocupar a moradia!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Lei 5.889/73 (Rural): Noturno = +25% sem hora reduzida (lavoura 21h–5h / pecuária 20h–4h). Descontos sobre o salário mínimo = até 20% moradia / até 25% alimentação (Art. 9º). Moradia desocupada em 30 dias após rescisão. Pequeno prazo = até 2 meses em 1 ano.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Atenção à inversão entre CLT urbana e Lei Rural: na CLT URBANA (Art. 458, § 3º), habitação = até 25% e alimentação = até 20% do salário contratual; na LEI RURAL (Art. 9º Lei 5.889/73), moradia = até 20% e alimentação = até 25% do SALÁRIO MÍNIMO!"
      },
      {
        "letter": "B",
        "explanation": "O contrato por pequeno prazo (até 2 meses no período de 1 ano — Art. 14-A Lei 5.889/73) dispensa anotação na CTPS se firmado por escrito ou registro simplificado equivalente, convertendo-se em contrato por prazo indeterminado se ultrapassar 2 meses em 1 ano."
      },
      {
        "letter": "C",
        "explanation": "O intervalo intrajornada rural segue os usos e costumes da região (Art. 5º Lei 5.889/73), mantidas as 11h de descanso interjornada."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Lei nº 5.889/1973 e Decreto nº 73.626/1974",
        "textSnippet": "Lei 5.889/73 (Rural): Noturno = +25% sem hora reduzida (lavoura 21h–5h / pecuária 20h–4h). Descontos sobre o salário mínimo = até 20% moradia / até 25% alimentação (Art. 9º). Moradia desocupada em 30 dias após rescisão. Pequeno prazo = até 2 meses em 1 ano."
      }
    ],
    "professorTip": "Rural vs. Urbano (Descontos): Rural = Moradia 20% / Alimentação 25% (do Salário Mínimo)! Urbano = Habitação 25% / Alimentação 20% (do Salário Contratual)! Rural Noturno = +25%, hora 60 min!"
  },
  {
    "id": "mig_trab_026",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Greve no Setor Privado e Serviços Essenciais (Lei 7.783/89)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Sindicato de trabalhadores de empresa de transporte coletivo urbano (atividade essencial) pretende deflagrar greve por melhores salários. Qual o prazo mínimo de aviso prévio obrigatório aos empregadores e usuários nas atividades essenciais vs. não essenciais e é lícito o lockout pelo empregador?",
    "options": [
      {
        "letter": "A",
        "text": "Tanto em atividades essenciais quanto em não essenciais, o aviso prévio da greve deve ser dado com 48 horas de antecedência."
      },
      {
        "letter": "B",
        "text": "Durante a greve legítima, o empregador pode contratar trabalhadores substitutos livremente para substituir os grevistas na fábrica."
      },
      {
        "letter": "C",
        "text": "O lockout patronal é lícito se precedido de aviso prévio de 72 horas ao sindicato obreiro."
      },
      {
        "letter": "D",
        "text": "Nas atividades ESSENCIAIS, a entidade sindical ou os trabalhadores ficam obrigados a comunicar a decisão aos empregadores e aos usuários com antecedência mínima de 72 HORAS da paralisação (Art. 13 Lei 7.783/89 — nas atividades não essenciais, o aviso prévio aos empregadores é de apenas 48 HORAS, Art. 3º, parágrafo único!), mantendo prestação dos serviços indispensáveis; quanto ao LOCKOUT (paralisação das atividades pelo próprio empregador para frustrar negociação), é EXPRESSAMENTE PROIBIDO pelo Art. 17 da Lei 7.783/89 (assegurando pagamento integral dos salários aos trabalhadores durante o lockout)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Lei de Greve (Lei 7.783/89): aviso prévio = 48h (comum) / 72h (essenciais, para patrão e usuários). Suspende contrato (Art. 7º). Veda demissão e contratação de substitutos durante greve regular (salvo abuso/serviços inadiáveis sem equipe). Lockout = PROIBIDO (Art. 17 — paga salários).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Prazos da Lei de Greve: atividade NÃO essencial = 48 horas ao empregador; atividade ESSENCIAL (saúde, água, luz, transporte coletivo, funerário etc.) = 72 horas ao empregador E aos usuários!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 7º, parágrafo único, da Lei 7.783/89, é VEDADA a rescisão de contrato de trabalho durante a greve, bem como a contratação de trabalhadores substitutos, SALVO se não houver manutenção de serviços cuja paralisação cause prejuízo irreparável ou em caso de abuso do direito de greve após manutenção não atendida!"
      },
      {
        "letter": "C",
        "explanation": "O Art. 17 da Lei 7.783/89 veda terminantemente a paralisação das atividades por iniciativa do empregador (lockout), garantindo aos empregados o direito à percepção dos salários durante o período."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 1º a 17 da Lei nº 7.783/1989",
        "textSnippet": "Lei de Greve (Lei 7.783/89): aviso prévio = 48h (comum) / 72h (essenciais, para patrão e usuários). Suspende contrato (Art. 7º). Veda demissão e contratação de substitutos durante greve regular (salvo abuso/serviços inadiáveis sem equipe). Lockout = PROIBIDO (Art. 17 — paga salários)."
      }
    ],
    "professorTip": "Greve: Comum = 48h | Essencial = 72h (patrão + usuários)! Proibido contratar substituto durante greve lícita! Lockout (greve do patrão) = PROIBIDO (paga salários)!"
  },
  {
    "id": "mig_trab_027",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "FGTS - Saque, Prescrição, Multa e Responsabilidade em Culpa Recíproca/Força Maior",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Em qual das hipóteses extintivas do contrato de trabalho o percentual da indenização compensatória (multa) sobre os depósitos do FGTS cai para 20%, em qual é de 40%, e em qual é zero?",
    "options": [
      {
        "letter": "A",
        "text": "Na força maior que determine a extinção da empresa, a multa do FGTS permanece integral em 40%."
      },
      {
        "letter": "B",
        "text": "No término regular de contrato por prazo determinado (experiência), o empregado não saca os depósitos do FGTS."
      },
      {
        "letter": "C",
        "text": "O empregado aposentado que continua trabalhando na mesma empresa não faz jus ao saque do FGTS nem à multa de 40% se for posteriormente dispensado sem justa causa."
      },
      {
        "letter": "D",
        "text": "A multa do FGTS é de 40% na dispensa sem justa causa e na rescisão indireta (Art. 18, § 1º, Lei 8.036/90); cai para 20% na CULPA RECÍPROCA, na FORÇA MAIOR reconhecida (Art. 18, § 2º) e no DISTRATO por comum acordo (Art. 484-A CLT — além do empregado sacar até 80% no distrato); e é ZERO (não há multa nem saque!) no pedido de demissão, no término normal de contrato por prazo determinado e na dispensa por justa causa do empregado!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Multas FGTS: 40% (sem justa causa / rescisão indireta); 20% (culpa recíproca, força maior, distrato Art. 484-A); 0% (pedido de demissão, justa causa, término normal de prazo determinado — neste último saca sem multa). Aposentadoria espontânea não extingue o contrato (OJ 361 SDI-1 TST -> 40% sobre todo período na dispensa posterior).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 18, § 2º, da Lei 8.036/90 e Art. 502 CLT, quando ocorrer despedida por culpa recíproca ou força maior, reconhecida pela Justiça do Trabalho, o percentual da multa do FGTS reduz-se à metade (20%)."
      },
      {
        "letter": "B",
        "explanation": "No término normal de contrato por prazo determinado, NÃO há multa de 40%, MAS o trabalhador TEM direito a sacar os depósitos acumulados na conta vinculada (Art. 20, IX, Lei 8.036/90)!"
      },
      {
        "letter": "C",
        "explanation": "A aposentadoria espontânea NÃO extingue o contrato de trabalho (STF ADIs 1721/1770 e OJ 361 SDI-1 TST): o aposentado pode sacar o FGTS já existente e, continuando a trabalhar e sendo depois dispensado sem justa causa, recebe multa de 40% sobre TODOS os depósitos daquele contrato!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Lei nº 8.036/1990 (Arts. 15, 18 e 20)",
        "textSnippet": "Multas FGTS: 40% (sem justa causa / rescisão indireta); 20% (culpa recíproca, força maior, distrato Art. 484-A); 0% (pedido de demissão, justa causa, término normal de prazo determinado — neste último saca sem multa). Aposentadoria espontânea não extingue o contrato (OJ 361 SDI-1 TST -> 40% sobre todo período na dispensa posterior)."
      }
    ],
    "jurisprudence": "OJ 361 SDI-1 do TST e STF ADIs 1721/1770",
    "professorTip": "Multa FGTS: 40% (Sem JC / Indireta) | 20% (Culpa Recíproca / Força Maior / Distrato) | 0% (Demissão / JC / Fim Prazo Determinado — neste saca tudo sem multa)!"
  },
  {
    "id": "mig_trab_028",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Comissões, Salário Complessivo, Alteração de Cargo de Confiança e Quebra de Caixa",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Gerente bancário recebeu gratificação de função de 40% durante 12 anos ininterruptos (sendo o último ano já sob vigência da Reforma Trabalhista — Lei 13.467/2017) e foi revertido ao cargo efetivo anterior sem justo motivo por decisão organizacional da empresa. A empresa pode suprimir a gratificação de função?",
    "options": [
      {
        "letter": "A",
        "text": "Não pode suprimir a gratificação porque, após 10 anos de recebimento contínuo, há incorporação definitiva garantida pela Súmula 372 do TST."
      },
      {
        "letter": "B",
        "text": "O salário complessivo (pagamento de verba única englobando salário + horas extras + adicional sem discriminação) é plenamente válido no contrato de trabalho."
      },
      {
        "letter": "C",
        "text": "Em caso de venda a prazo realizada por empregado comissionista, se o comprador tornar-se inadimplente ou cancelar a compra, o empregado sempre perde o direito às comissões."
      },
      {
        "letter": "D",
        "text": "Sim! A Reforma Trabalhista inseriu o Art. 468, § 2º, da CLT dispondo expressamente que a reversão ao cargo efetivo, COM OU SEM justo motivo, NÃO assegura ao empregado a manutenção do pagamento da gratificação correspondente, que NÃO será incorporada, INDEPENDENTEMENTE do tempo de exercício da respectiva função (superando a antiga Súmula 372, I, do TST para novos casos não completados antes de 11/11/2017)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 468, §§ 1º e 2º CLT: reversão do cargo de confiança ao efetivo é lícita (jus variandi) e NÃO incorpora a gratificação de função, independentemente do tempo (superou Súmula 372 TST para períodos não completados até 10/11/2017). Súmula 91 TST: veda salário complessivo.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 468, § 2º, da CLT (Lei 13.467/17), a gratificação de cargo de confiança NÃO se incorpora mais ao salário, independentemente do tempo de exercício (só mantendo incorporação quem já havia completado os 10 anos ANTES da vigência da reforma em 11/11/2017, conforme jurisprudência do TST!)."
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 91 do TST, é NULA a cláusula contratual que fixa determinada importância ou percentagem para atender englobadamente vários direitos legais ou contratuais (vedação ao salário complessivo)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 466 da CLT, ultimada a transação (aceito o negócio pelo empregador), o risco do negócio é do empregador: o empregado NÃO perde a comissão por inadimplência do comprador (só se verifica insolvência para estorno ou cancelamento conforme Art. 7º da Lei 3.207/57 para vendedores-viajantes se provada insolvência antes da entrega/prazo)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 457, 466 e 468, §§ 1º e 2º, da CLT e Súmulas 91 e 372 TST",
        "textSnippet": "Art. 468, §§ 1º e 2º CLT: reversão do cargo de confiança ao efetivo é lícita (jus variandi) e NÃO incorpora a gratificação de função, independentemente do tempo (superou Súmula 372 TST para períodos não completados até 10/11/2017). Súmula 91 TST: veda salário complessivo."
      }
    ],
    "jurisprudence": "Súmulas 91 e 372 do TST",
    "professorTip": "Art. 468, § 2º CLT: Reverteu do cargo de confiança -> PERDE a gratificação (NÃO incorpora mais, nem após 10 anos)! Salário complessivo = NULO (Súmula 91 TST)!"
  },
  {
    "id": "mig_trab_029",
    "exam": "Prova Acadêmica / Graduação em Direito (USP/SANFRAN) - Direito do Trabalho",
    "examType": "FACULDADE",
    "board": "USP/SANFRAN",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Descontos Salariais - Princípio da Intangibilidade Salarial (Art. 462 CLT / Súmula 342 TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Frentista de posto de combustíveis causou culposamente prejuízo ao empregador ao abastecer veículo com combustível errado (dano culposo, sem dolo). O contrato de trabalho continha cláusula autorizadora prévia para descontos por danos culposos? Não havia cláusula prévia alguma. O patrão pode descontar o valor do prejuízo no salário do empregado?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, pois o empregador pode descontar qualquer dano material causado culposamente pelo empregado no serviço independentemente de previsão contratual."
      },
      {
        "letter": "B",
        "text": "Mesmo com autorização prévia por escrito do empregado, é ilegal qualquer desconto no salário para plano de saúde, seguro de vida ou associação recreativa."
      },
      {
        "letter": "C",
        "text": "Na hipótese de recebimento de cheque sem fundos por frentista ou caixa que observou rigorosamente as normas da empresa, o empregado responde pelos prejuízos."
      },
      {
        "letter": "D",
        "text": "Não! Pelo Art. 462, § 1º, da CLT, em caso de dano causado pelo empregado, o desconto será lícito APENAS na ocorrência de DOLO do empregado ou quando essa possibilidade de desconto tiver sido PREVIAMENTE ACORDADA entre as partes (para dano culposo); sem acordo prévio, dano meramente culposo não autoriza desconto salarial!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Intangibilidade Salarial (Art. 462 CLT): veda descontos, salvo adiantamentos, dispositivos de lei (INSS, IR, pensão, empréstimo consignado) ou norma coletiva. Dano ao empregador: se DOLO = sempre desconta; se CULPA = SÓ se previamente acordado. Súmula 342 TST: autorização escrita para benefícios (plano saúde/seguro) é válida.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Dano DOLOSO: desconta sempre (com ou sem previsão no contrato). Dano CULPOSO: só pode descontar se houver previsão/acordo prévio no contrato!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 342 do TST, descontos salariais efetuados pelo empregador com autorização prévia e por escrito do empregado, para ser integrado em planos de assistência odontológica, médico-hospitalar, de seguro, de previdência privada ou cooperativa/recreativa em seu benefício e de dependentes, NÃO afrontam o Art. 462 da CLT (salvo prova de coação/vício!)."
      },
      {
        "letter": "C",
        "explanation": "Pela OJ 251 da SDI-1 do TST (e Precedente Normativo 14), não se pode descontar do frentista/empregado cheques sem fundos recebidos quando cumpridas as recomendações/normas da empresa (alteridade — riscos do negócio são do empregador!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 462 da CLT e Súmula 342 TST",
        "textSnippet": "Intangibilidade Salarial (Art. 462 CLT): veda descontos, salvo adiantamentos, dispositivos de lei (INSS, IR, pensão, empréstimo consignado) ou norma coletiva. Dano ao empregador: se DOLO = sempre desconta; se CULPA = SÓ se previamente acordado. Súmula 342 TST: autorização escrita para benefícios (plano saúde/seguro) é válida."
      }
    ],
    "jurisprudence": "Súmula 342 e OJ 251 SDI-1 do TST",
    "professorTip": "Dano do empregado (Art. 462, § 1º): DOLO -> sempre desconta; CULPA -> SÓ se tiver cláusula prévia! Autorização escrita p/ plano saúde/seguro = VÁLIDA (Súmula 342 TST)!"
  },
  {
    "id": "mig_trab_030",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Contratos por Prazo Determinado (Experiência / CLT Art. 443) e Indenizações",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado assina contrato de experiência de 45 dias, prorrogado por mais 45 dias (total 90 dias). Após 60 dias de contrato (faltando 30 dias para o término), o empregador dispensa-o antecipadamente sem justa causa, não havendo cláusula assecuratória do direito recíproco de rescisão antecipada. Quanto o empregador paga de indenização pelo Art. 479 da CLT e como funciona a prorrogação?",
    "options": [
      {
        "letter": "A",
        "text": "O contrato de experiência pode durar até 2 anos e ser prorrogado por até três vezes consecutivas."
      },
      {
        "letter": "B",
        "text": "Se for o empregado quem pede demissão antecipadamente no contrato por prazo determinado sem cláusula assecuratória, paga ao empregador metade dos dias restantes incondicionalmente."
      },
      {
        "letter": "C",
        "text": "A prorrogação de 45 + 45 dias é perfeitamente válida (Art. 445, parágrafo único, CLT: experiência máximo 90 dias; uma única prorrogação permitida pelo Art. 451 CLT!); na rescisão antecipada imotivada pelo empregador sem cláusula assecuratória, o empregador paga indenização correspondente à METADE (50%) da remuneração a que teria direito até o termo do contrato (no caso, 15 dias = metade dos 30 dias faltantes — Art. 479 CLT, SEM aviso prévio, mas com multa de 40% FGTS!); se houvesse cláusula assecuratória do Art. 481, aplicam-se os princípios do contrato indeterminado (inclusive aviso prévio — Súmula 163 TST)!"
      },
      {
        "letter": "D",
        "text": "Mesmo após o término de contrato por prazo determinado de 1 ano, o empregador pode celebrar novo contrato determinado com o mesmo empregado no dia seguinte."
      }
    ],
    "correctAnswer": "C",
    "justification": "Prazo Determinado (CLT): Experiência = máx 90 dias (1 prorrogação); Geral = máx 2 anos (1 prorrogação); intervalo para novo determinado com mesmo empregado = 6 meses (Art. 452). Rescisão antecipada sem Art. 481: patrão paga 50% do tempo restante (Art. 479); empregado paga prejuízo comprovado até teto de 50% (Art. 480). Com cláusula do Art. 481 -> cabe aviso prévio (Súmula 163 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Contrato por prazo determinado comum (Art. 443, § 2º) = máx. 2 anos; Contrato de EXPERIÊNCIA = máx. 90 DIAS (sempre admitindo no máximo 1 prorrogação — se prorrogar 2x vira prazo indeterminado, Art. 451 CLT)!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 480 CLT, na saída antecipada do empregado, ele responde pelos prejuízos que efetivamente comprovar o empregador ter sofrido, NÃO podendo a indenização exceder àquela a que teria direito o empregado em idênticas condições (teto = metade dos dias restantes, se comprovado dano!)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 452 CLT, considera-se por prazo INDETERMINADO todo contrato que suceder, dentro de 6 MESES, a outro contrato por prazo determinado, salvo se a expiração deste dependeu da execução de serviços especializados ou realização de certos acontecimentos."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 443, 445, 451, 479 e 480 da CLT e Súmula 163 TST",
        "textSnippet": "Prazo Determinado (CLT): Experiência = máx 90 dias (1 prorrogação); Geral = máx 2 anos (1 prorrogação); intervalo para novo determinado com mesmo empregado = 6 meses (Art. 452). Rescisão antecipada sem Art. 481: patrão paga 50% do tempo restante (Art. 479); empregado paga prejuízo comprovado até teto de 50% (Art. 480). Com cláusula do Art. 481 -> cabe aviso prévio (Súmula 163 TST)."
      }
    ],
    "jurisprudence": "Súmula nº 163 do TST",
    "professorTip": "Experiência = máx 90d (só 1 prorrogação)! Novo determinado = só após 6 meses (Art. 452)! Saiu antes sem cláusula assecuratória: Patrão paga 50% do restante (Art. 479); Empregado paga prejuízo comprovado até 50% (Art. 480)!"
  },
  {
    "id": "mig_trab_031",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Externo (Art. 62, I), Cargo de Confiança (Art. 62, II) e Bancários (Art. 224)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Gerente comercial de loja varejista possui poderes reais de mando, gestão, contratação e punição, recebendo gratificação de função equivalente a 30% do salário do cargo efetivo (enquanto outro gerente recebe 45% de gratificação com idênticos poderes). Quanto à jornada dos bancários (Art. 224 CLT), qual a jornada padrão do caixa bancário vs. gerente com fidúcia especial?",
    "options": [
      {
        "letter": "A",
        "text": "Para enquadramento no Art. 62, II, da CLT (exclusão de horas extras), basta possuir cargo intitulado \"gerente\" com gratificação mínima de 20%."
      },
      {
        "letter": "B",
        "text": "O caixa bancário tem jornada normal de 8 horas diárias por lidar com numerário."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 62, II e parágrafo único, da CLT, o cargo de confiança geral só exclui o controle de jornada e horas extras quando cumulativamente houver poderes de gestão E o acréscimo salarial da gratificação de função for NO MÍNIMO 40% do salário do cargo efetivo (logo, quem ganha apenas 30% TEM direito a horas extras!); já para BANCÁRIOS (Art. 224 CLT), a jornada padrão é de 6h diárias / 30h semanais (para quem exerce cargo de confiança bancário com fidúcia média — Art. 224, § 2º, gratificação >= 1/3 — a jornada é de 8h, recebendo horas extras apenas após a 8ª hora; e só o gerente-geral de agência com amplos poderes e >= 40% cai no Art. 62, II — Súmula 287 TST)!"
      },
      {
        "letter": "D",
        "text": "O sábado do bancário é considerado dia de repouso semanal remunerado (DSR) para cálculo do divisor de horas extras."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 62, II, CLT: Gerente geral = poderes reais de gestão + gratificação >= 40% -> sem horas extras. Bancário (Art. 224 CLT): regra = 6h/30h (divisor 180); cargo confiança médio (§ 2º, gratificação >= 1/3) = 8h/40h (divisor 220); gerente-geral de agência (Súmula 287 TST) = Art. 62, II (sem HE). Sábado bancário = dia útil não trabalhado (Súmula 113 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 62, parágrafo único, exige cumulativamente poderes reais de mando/gestão (primazia da realidade) E gratificação de função >= 40% (1/3 aplica-se apenas ao cargo de confiança bancário do Art. 224, § 2º, que passa de 6h para 8h)!"
      },
      {
        "letter": "B",
        "explanation": "Caixa bancário (sem fidúcia especial de direção/fiscalização/chefia) cumpre jornada de 6 HORAS diárias e 30 semanais (Súmula 102, VI, TST)."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 113 do TST, o sábado do bancário é dia ÚTIL NÃO TRABALHADO, não dia de repouso remunerado (salvo norma coletiva expressa em sentido contrário), e o divisor de horas extras é 180 (6h) ou 220 (8h) — Súmula 124 TST!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 62 e 224 da CLT e Súmula 102 TST",
        "textSnippet": "Art. 62, II, CLT: Gerente geral = poderes reais de gestão + gratificação >= 40% -> sem horas extras. Bancário (Art. 224 CLT): regra = 6h/30h (divisor 180); cargo confiança médio (§ 2º, gratificação >= 1/3) = 8h/40h (divisor 220); gerente-geral de agência (Súmula 287 TST) = Art. 62, II (sem HE). Sábado bancário = dia útil não trabalhado (Súmula 113 TST)."
      }
    ],
    "jurisprudence": "Súmulas 102, 113, 124 e 287 do TST",
    "professorTip": "Gerente Geral (Art. 62, II) = poderes + >= 40% (sem HE)! Bancário comum = 6h (div. 180) | Confiança Bancária (>= 1/3) = 8h (div. 220) | Gerente-Geral Agência = Art. 62, II (Súmula 287 TST)!"
  },
  {
    "id": "mig_trab_032",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito do Trabalho",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Décimo Terceiro Salário, Salário-Família e Vale-Transporte",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "ACADEMICA",
    "statement": "Empregado pede demissão no dia 14 de julho de determinado ano após trabalhar normalmente desde janeiro. Ele faz jus ao 13º salário proporcional pelos meses trabalhados até a rescisão e qual fração de dias no mês conta como 1/12 avos? E qual o desconto máximo do vale-transporte?",
    "options": [
      {
        "letter": "A",
        "text": "No pedido de demissão, o empregado perde integralmente o direito ao 13º salário proporcional e às férias proporcionais."
      },
      {
        "letter": "B",
        "text": "O pagamento da primeira parcela do 13º salário deve ocorrer até 30 de dezembro, e a segunda parcela até 20 de janeiro."
      },
      {
        "letter": "C",
        "text": "Sim! Mesmo no PEDIDO DE DEMISSÃO, o empregado faz jus ao 13º salário proporcional (Súmula 157 TST — só perde na dispensa por JUSTA CAUSA!); conta-se 1/12 avos por mês trabalhado igual ou superior a 15 DIAS no mês (logo, saindo dia 14 de julho, trabalhou 14 dias em julho -> computa apenas 6/12 avos referentes a janeiro–junho!); quanto ao vale-transporte (Lei 7.418/85), o empregador desconta até 6% do salário-base (não tem natureza salarial!)."
      },
      {
        "letter": "D",
        "text": "O vale-transporte pago em dinheiro habitualmente no contracheque possui natureza indenizatória automática segundo a lei."
      }
    ],
    "correctAnswer": "C",
    "justification": "13º Salário: 1ª parcela até 30/nov (ou férias se pedir em jan); 2ª até 20/dez; fração >= 15 dias = mês integral; devido no pedido de demissão (Súmula 157 TST); perdido na justa causa. Vale-transporte: desconto máximo de 6% do salário-base (sem encargos trabalhistas).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "No pedido de demissão o empregado RECEBE tanto o 13º proporcional (Súmula 157 TST) quanto as férias proporcionais + 1/3 (Súmula 261 TST)! Só na justa causa do empregado é que ele perde ambos!"
      },
      {
        "letter": "B",
        "explanation": "Prazos do 13º salário (Lei 4.749/65): 1ª parcela (adiantamento de 50%) entre 1º de fevereiro e 30 de NOVEMBRO (ou por ocasião das férias se requerido em janeiro); 2ª parcela até 20 de DEZEMBRO!"
      },
      {
        "letter": "D",
        "explanation": "O Dec. 10.854/21 / Lei 7.418/85 veda em regra a substituição do vale-transporte por dinheiro (salvo falta de estoque ou previsão em norma coletiva/jurisprudência específica em caso de impossibilidade); e quando concedido regularmente com desconto de até 6% do salário básico, não tem natureza salarial."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Leis nº 4.090/62, 4.749/65, 7.418/85 e 8.213/91",
        "textSnippet": "13º Salário: 1ª parcela até 30/nov (ou férias se pedir em jan); 2ª até 20/dez; fração >= 15 dias = mês integral; devido no pedido de demissão (Súmula 157 TST); perdido na justa causa. Vale-transporte: desconto máximo de 6% do salário-base (sem encargos trabalhistas)."
      }
    ],
    "jurisprudence": "Súmulas 157 e 261 do TST",
    "professorTip": "13º Salário: 1ª até 30/NOV | 2ª até 20/DEZ | >= 15 dias = 1/12! Pedido de demissão = GANHA 13º prop. (157) e Férias prop. (261)! Vale-Transporte = desconto máx 6%!"
  },
  {
    "id": "mig_trab_033",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Comissões de Conciliação Prévia, Termo de Quitação Anual e Arbitragem Individual",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado cuja remuneração mensal é de R$ 20.000,00 (superior a 2x o teto do RGPS) assina cláusula compromissória de arbitragem por sua iniciativa/concordância expressa no contrato individual de trabalho; em outra empresa, outro empregado assina termo de quitação anual de obrigações trabalhistas diretamente no departamento pessoal sem presença do sindicato. Ambos os atos são válidos?",
    "options": [
      {
        "letter": "A",
        "text": "A arbitragem nos contratos individuais de trabalho é sempre proibida na CLT, mesmo para altos executivos."
      },
      {
        "letter": "B",
        "text": "O termo de quitação anual (Art. 507-B CLT) pode ser firmado diretamente entre empregado e empregador com duas testemunhas, sem participação sindical."
      },
      {
        "letter": "C",
        "text": "A cláusula de arbitragem é VÁLIDA pelo Art. 507-A da CLT (exige remuneração > 2x o limite máximo dos benefícios do RGPS E pactuação por iniciativa do empregado ou mediante sua concordância expressa); já o TERMO DE QUITAÇÃO ANUAL DE OBRIGAÇÕES TRABALHISTAS (Art. 507-B CLT) exige obrigatoriamente que seja firmado PERANTE O SINDICATO DOS EMPREGADOS DA CATEGORIA (logo, sem o sindicato é NULO!) — lembrando ainda que a submissão à Comissão de Conciliação Prévia é FACULTATIVA (STF ADIs 2139/2160)!"
      },
      {
        "letter": "D",
        "text": "O empregado é obrigado a submeter sua demanda primeiro à Comissão de Conciliação Prévia antes de ingressar com reclamação trabalhista."
      }
    ],
    "correctAnswer": "C",
    "justification": "Inovações da Reforma (CLT): Arbitragem individual (Art. 507-A) = remuneração > 2x teto INSS + iniciativa/concordância expressa. Termo de quitação anual (Art. 507-B) = obrigatório perante o SINDICATO (eficácia liberatória quanto às parcelas especificadas). CCP (Art. 625-D + STF) = facultativa.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 507-A da CLT autorizou expressamente a cláusula compromissória de arbitragem nos contratos individuais com remuneração superior a duas vezes o teto do RGPS (mediante iniciativa/concordância expressa do empregado)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 507-B CLT exige expressamente que o termo de quitação anual seja firmado perante o SINDICATO dos empregados da categoria, discriminando as obrigações de dar e fazer cumpridas mensalmente."
      },
      {
        "letter": "D",
        "explanation": "O STF nas ADIs 2139, 2160 e 2237 deu interpretação conforme ao Art. 625-D CLT para tornar a passagem pela CCP meramente FACULTATIVA (princípio da inafastabilidade da jurisdição)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 507-A, 507-B e 625-A a 625-H da CLT e STF ADIs 2139/2160",
        "textSnippet": "Inovações da Reforma (CLT): Arbitragem individual (Art. 507-A) = remuneração > 2x teto INSS + iniciativa/concordância expressa. Termo de quitação anual (Art. 507-B) = obrigatório perante o SINDICATO (eficácia liberatória quanto às parcelas especificadas). CCP (Art. 625-D + STF) = facultativa."
      }
    ],
    "jurisprudence": "STF ADIs 2139 e 2160",
    "professorTip": "Arbitragem CLT (Art. 507-A) = Salário > 2x teto INSS + concordância expressa! Quitação Anual (Art. 507-B) = OBRIGATÓRIO no SINDICATO! CCP = FACULTATIVA (STF)!"
  },
  {
    "id": "mig_trab_034",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Estabilidade Pré-Aposentadoria, Dano Existencial, Repouso Semanal e Trabalho aos Domingos",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado do comércio varejista trabalha em domingo sem folga compensatória na mesma semana; além disso, outro empregado faltou injustificadamente na terça-feira da mesma semana. Quais as consequências sobre a remuneração do domingo trabalhado e sobre o Repouso Semanal Remunerado (DSR)?",
    "options": [
      {
        "letter": "A",
        "text": "Se o empregado faltar injustificadamente na terça-feira, perde o salário da terça-feira e o direito de gozar a folga física no domingo."
      },
      {
        "letter": "B",
        "text": "O pagamento em dobro pelo trabalho em domingo não compensado já inclui o valor do repouso semanal remunerado, recebendo o empregado apenas +100% total."
      },
      {
        "letter": "C",
        "text": "O trabalho em domingos e feriados não compensado deve ser pago em DOBRO, sem prejuízo da remuneração relativa ao repouso semanal (Súmula 146 TST — e no comércio em geral, o repouso semanal deve coincidir com o domingo pelo menos uma vez a cada 3 semanas pela Lei 10.101/2000, mantendo-se a fruição após no máximo 6 dias consecutivos de trabalho — OJ 410 SDI-1 TST!); já a falta injustificada na terça-feira faz o empregado PERDER apenas a remuneração do DSR (domingo), MAS NÃO o direito ao descanso físico e nem o salário dos outros dias trabalhados (Art. 6º Lei 605/49)!"
      },
      {
        "letter": "D",
        "text": "O empregador pode conceder o repouso semanal remunerado no 10º dia de trabalho consecutivo sem pagar em dobro desde que dê duas folgas na semana seguinte."
      }
    ],
    "correctAnswer": "C",
    "justification": "DSR (Lei 605/49 + TST): preferencialmente aos domingos; concessão após o 7º dia consecutivo = paga em dobro (OJ 410 SDI-1). Domingo/feriado trabalhado e não compensado = pago em dobro sem prejuízo do DSR (Súmula 146). Falta injustificada na semana = perde remuneração do DSR (Art. 6º Lei 605/49). Comércio: domingo pelo menos 1x a cada 3 semanas (Lei 10.101/00).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A falta injustificada na semana faz perder a REMUNERAÇÃO do dia de repouso (DSR), mas o empregado mantém seu direito ao descanso físico semanal (e o desconto por atraso/falta do empregador deve respeitar a integralidade semanal)."
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 146 do TST, o trabalho prestado em domingos e feriados, não compensado, deve ser pago em dobro, SEM PREJUÍZO da remuneração relativa ao repouso semanal (ou seja, ganha o DSR normal + o dia trabalhado em dobro = 200% extras além do salário mensal!)."
      },
      {
        "letter": "D",
        "explanation": "Pela OJ 410 da SDI-1 do TST, viola o Art. 7º, XV, da CF a concessão de repouso semanal remunerado após o 7º dia consecutivo de trabalho, importando no seu pagamento em dobro!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 7º, XV, CF/88, Lei nº 605/1949 e Lei nº 10.101/2000",
        "textSnippet": "DSR (Lei 605/49 + TST): preferencialmente aos domingos; concessão após o 7º dia consecutivo = paga em dobro (OJ 410 SDI-1). Domingo/feriado trabalhado e não compensado = pago em dobro sem prejuízo do DSR (Súmula 146). Falta injustificada na semana = perde remuneração do DSR (Art. 6º Lei 605/49). Comércio: domingo pelo menos 1x a cada 3 semanas (Lei 10.101/00)."
      }
    ],
    "jurisprudence": "Súmula 146 e OJ 410 SDI-1 do TST",
    "professorTip": "Faltou sem motivo = perde REMUNERAÇÃO do DSR (não o descanso físico)! Trabalhou 7+ dias seguidos sem folga = paga em DOBRO (OJ 410)! Domingo no comércio = folga ao menos 1x a cada 3 semanas!"
  },
  {
    "id": "mig_trab_035",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Contribuição Sindical, Direito de Oposição e Ultratividade das Normas Coletivas",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Sobre o custeio sindical no Brasil após a Reforma Trabalhista e as decisões recentes do STF (ADI 5794 e Tema 935), qual a distinção atual entre a Contribuição Sindical legal (imposto sindical) e a Contribuição Assistencial negociada em acordo ou convenção coletiva?",
    "options": [
      {
        "letter": "A",
        "text": "Ambas as contribuições — sindical e assistencial — exigem sempre autorização prévia e individual por escrito de cada empregado não sindicalizado."
      },
      {
        "letter": "B",
        "text": "As cláusulas de convenção ou acordo coletivo vencidas mantêm sua eficácia indefinidamente até que novo instrumento seja assinado."
      },
      {
        "letter": "C",
        "text": "A Contribuição SINDICAL (Arts. 578/579 CLT — antigo imposto sindical de 1 dia de trabalho) tornou-se absolutamente FACULTATIVA dependendo de autorização prévia e expressa dos empregados (constitucionalizada pelo STF na ADI 5794); diversamente, a Contribuição ASSISTENCIAL prevista em acordo ou convenção coletiva de trabalho pode ser cobrada de todos os empregados da categoria (inclusive não sindicalizados), desde que assegurado o direito de OPOSIÇÃO (STF Tema 935 — ARE 1.018.459)!"
      },
      {
        "letter": "D",
        "text": "A contribuição sindical obrigatória continua vigente para os servidores públicos estatutários mesmo após a Lei 13.467/2017."
      }
    ],
    "correctAnswer": "C",
    "justification": "Custeio Sindical (STF): (1) Contribuição Sindical (Art. 579 CLT) = facultativa, exige autorização prévia e expressa (ADI 5794); (2) Contribuição Confederativa (Art. 8º, IV, CF) = só para filiados ao sindicato (SV 40 STF); (3) Contribuição Assistencial em norma coletiva = devida por todos da categoria desde que garantido direito de oposição (Tema 935 STF).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Cuidado com a distinção do STF: Contribuição SINDICAL (Art. 579 CLT) = exige autorização PRÉVIA e expressa (opt-in — ADI 5794); Contribuição ASSISTENCIAL em ACT/CCT = válida para toda a categoria se assegurado o direito de OPOSIÇÃO (opt-out — Tema 935)!"
      },
      {
        "letter": "B",
        "explanation": "O Art. 614, § 3º, da CLT (validado pelo STF na ADPF 323) veda expressamente a ultratividade das normas coletivas."
      },
      {
        "letter": "D",
        "explanation": "O STF na ADI 5794 confirmou o fim da compulsoriedade da contribuição sindical de forma ampla para trabalhadores privados e públicos."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 545, 578, 579 e 614 da CLT e STF ADI 5794 / Tema 935",
        "textSnippet": "Custeio Sindical (STF): (1) Contribuição Sindical (Art. 579 CLT) = facultativa, exige autorização prévia e expressa (ADI 5794); (2) Contribuição Confederativa (Art. 8º, IV, CF) = só para filiados ao sindicato (SV 40 STF); (3) Contribuição Assistencial em norma coletiva = devida por todos da categoria desde que garantido direito de oposição (Tema 935 STF)."
      }
    ],
    "jurisprudence": "STF ADI 5794, ADPF 323, SV 40 e Tema 935",
    "professorTip": "Sindical (1 dia) = só com autorização PRÉVIA (ADI 5794)! Confederativa = SÓ filiados (SV 40 STF)! Assistencial em ACT/CCT = TODOS pagam se houver direito de OPOSIÇÃO (Tema 935 STF)!"
  },
  {
    "id": "mig_trab_036",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Suspensão do Contrato para Qualificação Profissional (Lay-Off) e Acordo de Redução",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Indústria automobilística enfrentando retração temporária de mercado pretende suspender os contratos de trabalho de um setor por 4 meses para participação dos empregados em curso ou programa de qualificação profissional (lay-off), pagando bolsa de qualificação via FAT/ajuda compensatória mensal sem natureza salarial. Quais requisitos legais do Art. 476-A da CLT são indispensáveis?",
    "options": [
      {
        "letter": "A",
        "text": "O lay-off do Art. 476-A pode ser instituído por acordo individual escrito por até 12 meses sem participação sindical."
      },
      {
        "letter": "B",
        "text": "A ajuda compensatória mensal paga pelo empregador durante o lay-off tem natureza salarial e integra o cálculo do FGTS e 13º."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 476-A da CLT, o lay-off (suspensão para qualificação profissional) tem prazo de 2 a 5 meses, exige previsão em CONVENÇÃO OU ACORDO COLETIVO DE TRABALHO, aquiescência formal do empregado e notificação ao sindicato com antecedência mínima de 15 dias da suspensão; além disso, se o empregado for dispensado durante a suspensão ou nos 3 meses subsequentes ao retorno, o empregador pagará multa prevista em norma coletiva de no mínimo 100% do último salário mensal, além das verbas rescisórias!"
      },
      {
        "letter": "D",
        "text": "Não existe qualquer penalidade adicional se a empresa demitir o empregado logo após o término do curso de qualificação profissional."
      }
    ],
    "correctAnswer": "C",
    "justification": "Lay-off (Art. 476-A CLT): suspensão por 2 a 5 meses para qualificação profissional; exige ACT/CCT + aquiescência do empregado + aviso ao sindicato >= 15d; ajuda compensatória sem natureza salarial; proteção contra dispensa durante e até 3 meses após (multa >= 100% do salário).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Art. 476-A CLT: exige norma coletiva (ACT ou CCT) + concordância formal do empregado + prazo de 2 a 5 meses + notificação ao sindicato 15 dias antes."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 476-A, § 3º, a ajuda compensatória mensal concedida durante o período de suspensão NÃO tem natureza salarial."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 476-A, § 5º, se ocorrer dispensa no trajeto da suspensão ou nos 3 meses subsequentes ao retorno ao trabalho, incide multa em favor do empregado estabelecida na norma coletiva (de no mínimo 100% do valor da última remuneração mensal)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 476-A da CLT",
        "textSnippet": "Lay-off (Art. 476-A CLT): suspensão por 2 a 5 meses para qualificação profissional; exige ACT/CCT + aquiescência do empregado + aviso ao sindicato >= 15d; ajuda compensatória sem natureza salarial; proteção contra dispensa durante e até 3 meses após (multa >= 100% do salário)."
      }
    ],
    "professorTip": "Lay-off (Art. 476-A): 2 a 5 meses, exige ACT/CCT + aceite do empregado + aviso 15d ao sindicato! Demitir durante ou até 3 meses depois = multa mínima de 100% do salário!"
  },
  {
    "id": "mig_trab_037",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "CIPA, SESMT e Estabilidade do Trabalhador Reabilitado / PcD (Art. 93 Lei 8.213/91)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa com 150 empregados pretende dispensar sem justa causa um trabalhador reabilitado pela Previdência Social contratado na cota legal do Art. 93 da Lei nº 8.213/91, sem contratar outro trabalhador em condição semelhante (PcD ou reabilitado). Essa dispensa é válida?",
    "options": [
      {
        "letter": "A",
        "text": "Sim, pois o empregado reabilitado ou PcD contratado pela cota legal não possui qualquer proteção contra dispensa sem justa causa."
      },
      {
        "letter": "B",
        "text": "A obrigação legal de reserva de cargos para PcD ou reabilitados (2% a 5%) aplica-se a todas as empresas a partir de 20 empregados."
      },
      {
        "letter": "C",
        "text": "Não! Pelo Art. 93, § 1º, da Lei nº 8.213/1991, a dispensa de pessoa com deficiência ou de beneficiário reabilitado da Previdência Social ao final de contrato por prazo determinado de mais de 90 dias e a dispensa imotivada em contrato por prazo indeterminado SOMENTE poderão ocorrer após a contratação de outro trabalhador com deficiência ou beneficiário reabilitado do INSS (garantia indireta de emprego que gera reintegração se descumprida, segundo o TST)!"
      },
      {
        "letter": "D",
        "text": "O membro titular da CIPA eleito pelos empregados não pode ser dispensado nem mesmo por motivo econômico, técnico ou financeiro da empresa."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 93 Lei 8.213/91: empresas com >= 100 empregados (cotas 2% a 5% de PcD/reabilitados); dispensa imotivada ou fim de contrato > 90d exige contratação prévia de substituto PcD/reabilitado (sob pena de reintegração). Súmula 339, II, TST: CIPA extinta com fechamento do estabelecimento cessa estabilidade.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Embora não seja estabilidade individual clássica, o Art. 93, § 1º, cria uma garantia objetiva de manutenção da cota (exigindo contratação substituta prévia de outro PcD/reabilitado), impondo reintegração caso violada."
      },
      {
        "letter": "B",
        "explanation": "A cota do Art. 93 da Lei 8.213/91 aplica-se às empresas com 100 (cem) ou mais empregados: 100–200 (2%); 201–500 (3%); 501–1000 (4%); 1001+ (5%)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 165 da CLT, o titular da CIPA não pode sofrer despedida arbitrária, entendendo-se como tal a que não se fundar em motivo disciplinar, técnico, econômico ou financeiro (sendo extinto o estabelecimento, cessa a garantia — Súmula 339, II, TST!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 163–165 CLT e Art. 93 da Lei nº 8.213/1991",
        "textSnippet": "Art. 93 Lei 8.213/91: empresas com >= 100 empregados (cotas 2% a 5% de PcD/reabilitados); dispensa imotivada ou fim de contrato > 90d exige contratação prévia de substituto PcD/reabilitado (sob pena de reintegração). Súmula 339, II, TST: CIPA extinta com fechamento do estabelecimento cessa estabilidade."
      }
    ],
    "jurisprudence": "Súmula nº 339 do TST",
    "professorTip": "Cota PcD (>= 100 empregados): 2% a 5%; SÓ pode demitir sem justa causa se contratar OUTRO PcD/reabilitado antes (Art. 93, § 1º Lei 8.213/91)! Fechou estabelecimento -> acaba estabilidade da CIPA (Súmula 339, II)!"
  },
  {
    "id": "mig_trab_038",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Empregado Hipersuficiente e Limites da Negociação Individual",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Diretor financeiro com diploma de nível superior e salário mensal igual a 3 vezes o limite máximo dos benefícios do RGPS celebra aditivo individual escrito estipulando banco de horas anual e cláusula compromissória de arbitragem (Art. 507-A CLT), mas pretende também afastar o depósito do FGTS em acordo individual. O que é válido?",
    "options": [
      {
        "letter": "A",
        "text": "O empregado hipersuficiente pode negociar livremente inclusive a supressão de FGTS e férias por acordo individual."
      },
      {
        "letter": "B",
        "text": "Basta salário igual a 2x o teto do RGPS, sendo dispensável diploma de nível superior para caracterizar o hipersuficiente."
      },
      {
        "letter": "C",
        "text": "O banco de horas anual e a cláusula compromissória de arbitragem SÃO válidos no acordo individual com o hipersuficiente (diploma superior + salário >= 2x teto RGPS — Arts. 444, parágrafo único, e 507-A CLT); porém a supressão do FGTS é NULA de pleno direito por violar o Art. 611-B da CLT (objeto ilícito mesmo em norma coletiva!)."
      },
      {
        "letter": "D",
        "text": "A cláusula compromissória de arbitragem prevista no Art. 507-A da CLT pode ser imposta unilateralmente pelo empregador a qualquer empregado."
      }
    ],
    "correctAnswer": "C",
    "justification": "Empregado hipersuficiente (Art. 444, § único CLT): nível superior + salário >= 2x teto RGPS. Sua estipulação individual prevalece sobre a lei nos limites do Art. 611-A, jamais violando o Art. 611-B. Arbitragem (Art. 507-A): salário > 2x teto + concordância/iniciativa do empregado.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 444, parágrafo único, da CLT limita a negociação individual às hipóteses do Art. 611-A, vedando expressamente os direitos irrenunciáveis do Art. 611-B (FGTS, 13º, férias, aviso prévio mínimo)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 444, parágrafo único, CLT exige DOIS requisitos cumulativos: portador de diploma de nível superior E salário mensal igual ou superior a duas vezes o teto do RGPS."
      },
      {
        "letter": "D",
        "explanation": "A arbitragem individual exige salário superior a 2x o teto do RGPS (dispensa diploma no Art. 507-A) E iniciativa ou concordância expressa do empregado."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 444, parágrafo único, e Art. 611-A da CLT",
        "textSnippet": "Empregado hipersuficiente (Art. 444, § único CLT): nível superior + salário >= 2x teto RGPS. Sua estipulação individual prevalece sobre a lei nos limites do Art. 611-A, jamais violando o Art. 611-B. Arbitragem (Art. 507-A): salário > 2x teto + concordância/iniciativa do empregado."
      }
    ],
    "professorTip": "Hipersuficiente = Superior + >= 2x teto INSS (pode Art. 611-A, NUNCA 611-B)! Arbitragem = > 2x teto + concordância!"
  },
  {
    "id": "mig_trab_039",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Tempo à Disposição do Empregador e Troca de Uniforme (Art. 4º, § 2º CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Operário permanece na sede da empresa após o expediente por 40 minutos aguardando cessar forte tempestade que alagou as ruas e também troca de uniforme por opção pessoal antes de ir embora, embora a empresa não exija a troca no estabelecimento. Esse período conta como tempo à disposição?",
    "options": [
      {
        "letter": "A",
        "text": "Todo período em que o empregado permanecer dentro das dependências físicas da empresa após o ponto conta como hora extra pela Súmula 366 TST."
      },
      {
        "letter": "B",
        "text": "As variações de horário no registro de ponto de até 10 minutos na entrada e 10 minutos na saída são sempre desprezadas."
      },
      {
        "letter": "C",
        "text": "Não! Pelo Art. 4º, § 2º, da CLT (Reforma Trabalhista), NÃO se considera tempo à disposição do empregador — e não será computado como período extraordinário — o tempo em que o empregado permanece nas dependências por escolha própria para buscar proteção pessoal contra insegurança ou condições climáticas desfavoráveis, nem para troca de roupa ou uniforme quando NÃO houver obrigatoriedade de realizar a troca na empresa."
      },
      {
        "letter": "D",
        "text": "Se a empresa proibir que o empregado leve o uniforme para casa, exigindo a troca no vestiário, ainda assim esse tempo não entra na jornada."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 4º, § 2º CLT: não é tempo à disposição a permanência por escolha própria (chuva, insegurança, estudo, higiene, alimentação, lazer) ou troca de uniforme NÃO obrigatória na empresa. Art. 58, § 1º CLT: tolerância de ponto de 5 min por marcação / máximo 10 min diários.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Lei 13.467/17 inseriu o § 2º no Art. 4º da CLT excluindo atividades particulares (descanso, estudo, alimentação, higiene pessoal, proteção climática e troca de uniforme facultativa)."
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 58, § 1º, da CLT e Súmula 366 do TST, não serão descontadas nem computadas como jornada extraordinária as variações que não excedam de 5 MINUTOS, observado o limite máximo de 10 MINUTOS DIÁRIOS (se ultrapassar 10 min/dia, computa-se a totalidade do tempo excedente!)."
      },
      {
        "letter": "D",
        "explanation": "Quando há OBRIGATORIEDADE de realizar a troca de uniforme na empresa (Art. 4º, § 2º, VIII, a contrario sensu), o tempo despendido integra a jornada de trabalho!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 4º, § 2º, da CLT e Súmula 366 TST",
        "textSnippet": "Art. 4º, § 2º CLT: não é tempo à disposição a permanência por escolha própria (chuva, insegurança, estudo, higiene, alimentação, lazer) ou troca de uniforme NÃO obrigatória na empresa. Art. 58, § 1º CLT: tolerância de ponto de 5 min por marcação / máximo 10 min diários."
      }
    ],
    "jurisprudence": "Súmula nº 366 do TST",
    "professorTip": "Permanecer por chuva, lazer, estudo ou troca de roupa facultativa = NÃO é hora extra (Art. 4º, § 2º)! Tolerância de ponto = 5 min por batida / 10 min no dia!"
  },
  {
    "id": "mig_trab_040",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Acordo de Compensação de Jornada vs. Horas Extras Habituais (Súmula 85 e Art. 59-B CLT)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado assinou acordo individual escrito de compensação semanal de jornada (trabalhando 48 minutos extras de segunda a sexta para folgar aos sábados), porém o empregador exigia rotineiramente horas extras habituais aos sábados e além das 10 horas diárias. Após a Reforma Trabalhista, a prestação habitual de horas extras anula todo o acordo de compensação?",
    "options": [
      {
        "letter": "A",
        "text": "As horas extras habituais anulam todo o regime compensatório, devendo a empresa pagar novamente o valor da hora cheia + adicional sobre todas as horas compensadas na semana."
      },
      {
        "letter": "B",
        "text": "Não descaracteriza integralmente o acordo de compensação! Pelo Art. 59-B, parágrafo único, da CLT (inserido pela Lei 13.467/2017, superando em parte a Súmula 85, IV, do TST), a prestação de horas extras habituais NÃO descaracteriza o acordo de compensação de jornada e o banco de horas; no entanto, o não atendimento das exigências legais para compensação gera pagamento apenas do ADICIONAL das horas destinadas à compensação, se não ultrapassada a duração máxima semanal (Art. 59-B, caput)!"
      },
      {
        "letter": "C",
        "text": "O acordo de compensação semanal de jornada exige obrigatoriamente convenção coletiva ou acordo coletivo, não cabendo acordo individual."
      },
      {
        "letter": "D",
        "text": "No banco de horas inválido, paga-se apenas o adicional de 50% sem o valor da hora normal."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 59-B CLT: se descumpridas exigências da compensação semanal sem exceder 44h semanais, paga SÓ o adicional das horas compensadas; parágrafo único = horas extras habituais NÃO descaracterizam acordo de compensação nem banco de horas. Compensação no mesmo mês = até acordo tácito (Art. 59, § 6º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 59-B, parágrafo único, da CLT modificou o entendimento tradicional da Súmula 85, IV: horas extras habituais não invalidam automaticamente o acordo de compensação nem o banco de horas."
      },
      {
        "letter": "C",
        "explanation": "A compensação semanal (ou no mesmo mês) pode ser pactuada por acordo individual TÁCITO ou escrito (Art. 59, § 6º, CLT); banco de horas até 6 meses = individual escrito; banco de 1 ano = ACT/CCT."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 85, V, TST, as disposições sobre pagamento apenas do adicional não se aplicam ao regime compensatório na modalidade \"banco de horas\" (se inválido o banco de horas, paga-se hora + adicional!)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 59-B, parágrafo único, da CLT e Súmula 85 TST",
        "textSnippet": "Art. 59-B CLT: se descumpridas exigências da compensação semanal sem exceder 44h semanais, paga SÓ o adicional das horas compensadas; parágrafo único = horas extras habituais NÃO descaracterizam acordo de compensação nem banco de horas. Compensação no mesmo mês = até acordo tácito (Art. 59, § 6º)."
      }
    ],
    "jurisprudence": "Súmula nº 85 do TST",
    "professorTip": "Art. 59-B, parágrafo único: HE habituais NÃO descaracterizam acordo de compensação nem banco de horas! Compensação no mês = pode até acordo tácito!"
  },
  {
    "id": "mig_trab_041",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Motorista Profissional Empregado - Jornada, Tempo de Espera e Repouso (STF ADI 5322)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Motorista de caminhão empregado em transporte rodoviário de cargas passa horas parado na fila de descarga do porto aguardando fiscalização/carregamento e usufrui descanso interjornada de 11 horas fracionado em 8h + 3h dentro da cabine com o caminhão estacionado. Como o STF julgou esses dispositivos da Lei 13.103/2015 na ADI 5322?",
    "options": [
      {
        "letter": "A",
        "text": "O tempo de espera de motorista para carga/descarga continua indenizado a 30% da hora normal e jamais integra a jornada."
      },
      {
        "letter": "B",
        "text": "O STF na ADI 5322 declarou INCONSTITUCIONAIS o fracionamento do intervalo interjornada de 11h (exigindo 11h contínuas sem parcelamento), o cômputo do \"tempo de espera\" fora da jornada (logo, o tempo de espera em carga/descarga/fiscalização DEVE integrar a jornada de trabalho e ser pago como hora normal ou extra se exceder a jornada!) e a possibilidade de gozar o descanso semanal de 35h dentro do veículo em movimento em dupla de motoristas!"
      },
      {
        "letter": "C",
        "text": "É válido o fracionamento do intervalo interjornada de 11 horas do motorista em 8 horas contínuas mais 3 horas no mesmo dia."
      },
      {
        "letter": "D",
        "text": "É permitida a cumulação de descansos semanais remunerados em viagens de longa distância por até 4 semanas consecutivas."
      }
    ],
    "correctAnswer": "B",
    "justification": "Motorista Profissional (ADI 5322 STF sobre Arts. 235-C e ss. CLT): (1) tempo de espera integra a jornada; (2) interjornada de 11h deve ser contínua (sem fracionamento 8+3); (3) vedada acumulação de DSR e repouso semanal em veículo em movimento; (4) intervalo de 30 min a cada 5h30/6h de direção foi mantido.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na ADI 5322 (julgada em 2023), o STF derrubou o Art. 235-C, §§ 8º e 9º, decidindo que o tempo de espera integra a jornada efetiva por ser tempo à disposição do empregador."
      },
      {
        "letter": "C",
        "explanation": "A ADI 5322 declarou inconstitucional o fracionamento do repouso interjornada de 11h do motorista, garantindo 11h ininterruptas de descanso."
      },
      {
        "letter": "D",
        "explanation": "O STF também invalidou na ADI 5322 a acumulação indiscriminada de DSR e a fruição do repouso semanal em veículo em movimento com dois motoristas."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 235-C a 235-E da CLT e STF ADI 5322",
        "textSnippet": "Motorista Profissional (ADI 5322 STF sobre Arts. 235-C e ss. CLT): (1) tempo de espera integra a jornada; (2) interjornada de 11h deve ser contínua (sem fracionamento 8+3); (3) vedada acumulação de DSR e repouso semanal em veículo em movimento; (4) intervalo de 30 min a cada 5h30/6h de direção foi mantido."
      }
    ],
    "jurisprudence": "STF ADI 5322",
    "professorTip": "STF ADI 5322 (Motorista): tempo de espera ENTRA na jornada! Interjornada de 11h NÃO pode fracionar! DSR NÃO pode acumular nem cumprir em movimento!"
  },
  {
    "id": "mig_trab_042",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Bancário - Jornada de 6h, Cargo de Confiança (Art. 224, § 2º) e Gerente-Geral (Súmula 287)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Funcionário de banco privado exerce cargo com fidúcia especial intermediária (supervisor com subordinados) recebendo gratificação de função de 35% sobre o salário do cargo efetivo; na mesma agência atua o Gerente-Geral da agência, autoridade máxima local com amplos poderes de mando e gratificação de 60%. Qual a jornada de cada um?",
    "options": [
      {
        "letter": "A",
        "text": "Ambos possuem jornada de 6 horas diárias porque todo empregado bancário submete-se ao teto do Art. 224, caput, da CLT."
      },
      {
        "letter": "B",
        "text": "O supervisor com fidúcia especial e gratificação >= 1/3 (33,33%) enquadra-se no Art. 224, § 2º, da CLT e tem jornada de 8 HORAS diárias (faz jus a horas extras a partir da 8ª hora — Súmula 102 TST); já o Gerente-Geral de agência bancária enquadra-se no Art. 62, II, da CLT (Súmula 287 TST), NÃO estando sujeito a controle de jornada nem fazendo jus a horas extras!"
      },
      {
        "letter": "C",
        "text": "Se o banco atribuir a denominação \"supervisor\" sem nenhuma fidúcia especial e pagar gratificação de 40%, a 7ª e 8ª horas extras poderão ser compensadas com a gratificação recebida."
      },
      {
        "letter": "D",
        "text": "O divisor de horas extras do bancário com jornada de 6 horas é 150 e o do bancário de 8 horas é 200."
      }
    ],
    "correctAnswer": "B",
    "justification": "Bancário (Art. 224 CLT): regra = 6h/dia (divisor 180; sábado = dia útil não trabalhado, Súmula 113). Confiança bancária (§ 2º + gratificação >= 1/3) = 8h/dia (divisor 220). Gerente-Geral da agência = Art. 62, II (Súmula 287 — sem horas extras). Súmula 109 = sem fidúcia não compensa gratificação com 7ª/8ª hora.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Regra bancária: caixa/escriturário = 6h (30h sem.); cargo de confiança bancário (§ 2º, gratificação >= 1/3 + fidúcia real) = 8h; Gerente-Geral da agência (Súmula 287 TST) = Art. 62, II (sem controle/sem horas extras)."
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 109 do TST, o bancário NÃO enquadrado no § 2º do Art. 224 que receba gratificação de função NÃO pode ter o valor dessa gratificação compensado com as horas extraordinárias (7ª e 8ª horas)!"
      },
      {
        "letter": "D",
        "explanation": "O TST no IRR-849-83.2013 (alterando a Súmula 124 TST) fixou que o divisor do bancário é 180 (para jornada de 6h) e 220 (para jornada de 8h), pois sábado é dia útil não trabalhado (Súmula 113 TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 224 da CLT e Súmulas 102, 109 e 287 do TST",
        "textSnippet": "Bancário (Art. 224 CLT): regra = 6h/dia (divisor 180; sábado = dia útil não trabalhado, Súmula 113). Confiança bancária (§ 2º + gratificação >= 1/3) = 8h/dia (divisor 220). Gerente-Geral da agência = Art. 62, II (Súmula 287 — sem horas extras). Súmula 109 = sem fidúcia não compensa gratificação com 7ª/8ª hora."
      }
    ],
    "jurisprudence": "Súmulas 102, 109, 113, 124 e 287 do TST",
    "professorTip": "Bancário: Comum = 6h (div. 180) | Confiança Art. 224, § 2º (grat. >= 1/3) = 8h (div. 220) | Gerente-Geral = Art. 62, II (sem HE — Súmula 287)!"
  },
  {
    "id": "mig_trab_043",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Responsabilidade Objetiva em Acidente de Trabalho (STF Tema 932) e Dano Moral",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado vigilante armado ou motorista de transporte de cargas pesadas em rodovia federal sofre grave acidente típico de trabalho durante a prestação de serviço sem culpa comprovada do empregador. A responsabilidade civil do empregador por acidente do trabalho pode ser objetiva?",
    "options": [
      {
        "letter": "A",
        "text": "Não, porque o Art. 7º, XXVIII, da CF exige sempre comprovação de dolo ou culpa do empregador em qualquer acidente de trabalho."
      },
      {
        "letter": "B",
        "text": "Sim! No Tema 932 da Repercussão Geral (RE 828.040), o STF fixou tese de que o Art. 927, parágrafo único, do Código Civil é plenamente aplicável ao Direito do Trabalho: o empregador responde OBJETIVAMENTE (independentemente de culpa!) quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco especial/acentuado à integridade do trabalhador!"
      },
      {
        "letter": "C",
        "text": "O recebimento de benefício previdenciário acidentário pelo INSS abate ou exclui a indenização civil devida pelo empregador."
      },
      {
        "letter": "D",
        "text": "Em caso de dano extrapatrimonial trabalhista, os tetos do Art. 223-G, § 1º, da CLT são absolutos e vinculam o juiz de forma insuperável."
      }
    ],
    "correctAnswer": "B",
    "justification": "Acidente do trabalho: regra = responsabilidade subjetiva (Art. 7º, XXVIII, CF); exceção = responsabilidade OBJETIVA (Art. 927, § único CC + STF Tema 932) em atividades de risco especial. Seguro INSS não compensa indenização civil. Dano moral CLT (ADI 6050 STF) = valores do Art. 223-G são apenas orientativos.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF no Tema 932 harmonizou o Art. 7º, XXVIII, CF (regra geral subjetiva) com o Art. 927, parágrafo único, CC: em atividades de risco inerente acentuado, aplica-se a responsabilidade objetiva!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 7º, XXVIII, da CF e Súmula 229 do STF, o seguro contra acidentes de trabalho pago pelo INSS NÃO exclui nem compensa a indenização devida pelo empregador (fontes distintas: previdenciária e civil)."
      },
      {
        "letter": "D",
        "explanation": "Na ADI 6050, o STF decidiu que os valores previstos no Art. 223-G, § 1º, da CLT (3x a 50x o salário) funcionam apenas como critérios orientativos, NÃO constituindo teto intransponível ao arbitramento judicial fundamentado!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 7º, XXVIII, CF, Art. 927, parágrafo único, CC e STF Tema 932",
        "textSnippet": "Acidente do trabalho: regra = responsabilidade subjetiva (Art. 7º, XXVIII, CF); exceção = responsabilidade OBJETIVA (Art. 927, § único CC + STF Tema 932) em atividades de risco especial. Seguro INSS não compensa indenização civil. Dano moral CLT (ADI 6050 STF) = valores do Art. 223-G são apenas orientativos."
      }
    ],
    "jurisprudence": "STF Tema 932 e ADI 6050",
    "professorTip": "STF Tema 932: atividade de risco = responsabilidade OBJETIVA do patrão! STF ADI 6050: tabela dano moral da CLT (Art. 223-G) NÃO é teto absoluto (só parâmetro orientativo)!"
  },
  {
    "id": "mig_trab_044",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Empregado Público de Empresa Estatal - Dispensa e Motivação (STF Tema 1022)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado público contratado por concurso público para emprego em sociedade de economia mista (Banco do Brasil / Petrobras) sob regime da CLT é demitido sem justa causa e sem apresentação de qualquer motivação formal pelo ente estatal. À luz do STF no Tema 1022 (julgado em 2024), a dispensa é válida?",
    "options": [
      {
        "letter": "A",
        "text": "Empregados de sociedades de economia mista que exploram atividade econômica têm exatamente a mesma estabilidade do Art. 41 da CF que os servidores estatutários."
      },
      {
        "letter": "B",
        "text": "Não! No Tema 1022 (RE 688.267, julgado em 2024 com modulação de efeitos para dispensas posteriores à publicação da ata), o STF decidiu que as empresas públicas e sociedades de economia mista (prestadoras de serviços públicos ou exploradoras de atividade econômica) têm o dever jurídico de MOTIVAR, em ato formal, a demissão de seus empregados concursados, embora não exija processo administrativo disciplinar completo nem confira estabilidade estatutária do Art. 41 CF!"
      },
      {
        "letter": "C",
        "text": "Por se submeterem ao regime próprio das empresas privadas (Art. 173, § 1º, II, CF), as estatais podem dispensar seus empregados concursados imotivadamente sem qualquer justificativa."
      },
      {
        "letter": "D",
        "text": "Para empregado público de fundação pública de direito público ou autarquia contratado sob CLT, também não existe estabilidade do Art. 41 da CF."
      }
    ],
    "correctAnswer": "B",
    "justification": "Administração Direta / Autarquia / Fundação Pública (celetista concursado) = TEM estabilidade do Art. 41 CF (Súmula 390, I, TST). Empresa Pública e Sociedade de Economia Mista = NÃO têm estabilidade do Art. 41 CF (Súmula 390, II), MAS sua dispensa exige MOTIVAÇÃO formal (STF Tema 1022 — RE 688.267/2024).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela Súmula 390, II, do TST e STF Tema 1022, empregados de empresas públicas e sociedades de economia mista NÃO gozam da estabilidade do Art. 41 da CF — mas sua dispensa exige motivação formal impessoal e razoável!"
      },
      {
        "letter": "C",
        "explanation": "No Tema 1022 (2024), o STF superou a dispensa puramente imotivada: embora não haja estabilidade, os princípios da impessoalidade e moralidade impõem motivação formal acessível e sindicável!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 390, I, do TST, o servidor público celetista da administração DIRETA, AUTÁRQUICA ou FUNDACIONAL de direito público TEM direito à estabilidade do Art. 41 da CF (após 3 anos)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 173, § 1º, II, CF e STF Tema 1022 (RE 688.267)",
        "textSnippet": "Administração Direta / Autarquia / Fundação Pública (celetista concursado) = TEM estabilidade do Art. 41 CF (Súmula 390, I, TST). Empresa Pública e Sociedade de Economia Mista = NÃO têm estabilidade do Art. 41 CF (Súmula 390, II), MAS sua dispensa exige MOTIVAÇÃO formal (STF Tema 1022 — RE 688.267/2024)."
      }
    ],
    "jurisprudence": "STF Tema 1022 e Súmula 390 do TST",
    "professorTip": "Estatais (EP/SEM): SEM estabilidade do Art. 41, MAS dispensa EXIGE motivação formal (STF Tema 1022)! Direta/Autarquia/Fundação celetista = TEM estabilidade Art. 41 (Súmula 390, I)!"
  },
  {
    "id": "mig_trab_045",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Contrato de Estágio - Requisitos e Descaracterização (Lei nº 11.788/2008)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Estudante universitário celebra Termo de Compromisso de Estágio não obrigatório com escritório privado, com jornada fixada em 8 horas diárias e 40 horas semanais, sem previsão de bolsa-auxílio nem auxílio-transporte e sem acompanhamento por supervisor com formação na área. Esse estágio é válido ou gera vínculo de emprego?",
    "options": [
      {
        "letter": "A",
        "text": "A duração máxima do estágio para ensino superior é de 8 horas diárias e 40 horas semanais em qualquer período do ano."
      },
      {
        "letter": "B",
        "text": "Descaracteriza o estágio e gera VÍNCULO DE EMPREGO com a concedente (Art. 3º, § 2º, c/c Art. 15 da Lei nº 11.788/2008)! A jornada máxima de estágio para educação superior/ensino médio é de 6 HORAS diárias e 30 HORAS semanais (Art. 10, II — e 4h/20h para educação especial/fundamental); no estágio NÃO obrigatório são compulsórios a bolsa/contraprestação E o auxílio-transporte (Art. 12); e o prazo máximo na mesma parte concedente é de 2 anos (exceto estagiário PcD — Art. 11)!"
      },
      {
        "letter": "C",
        "text": "No estágio obrigatório (curricular), a concessão de bolsa-auxílio e auxílio-transporte é sempre obrigatória por lei."
      },
      {
        "letter": "D",
        "text": "O estagiário pode permanecer vinculado à mesma empresa concedente pelo prazo máximo de 4 anos."
      }
    ],
    "correctAnswer": "B",
    "justification": "Estágio (Lei 11.788/08): TCE obrigatório (3 partes: estudante, concedente, IE); máx 6h/30h (educação especial 4h/20h); máx 2 anos na mesma concedente (exceto PcD); estágio não obrigatório = bolsa + auxílio-transporte obrigatórios; recesso de 30d/ano; seguro acidentes sempre obrigatório. Descumprimento gera vínculo de emprego.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Regra geral (Art. 10, II): máx 6h/dia e 30h/semana (só pode chegar a 40h/semana nos períodos de férias escolares para cursos que alternam teoria e prática previstos no projeto pedagógico!)."
      },
      {
        "letter": "C",
        "explanation": "No estágio OBRIGATÓRIO, a bolsa e o auxílio-transporte são FACULTATIVOS; já no estágio NÃO OBRIGATÓRIO, a bolsa (ou outra contraprestação) E o auxílio-transporte são OBRIGATÓRIOS (Art. 12)! Em ambos é obrigatório o seguro contra acidentes pessoais e o recesso remunerado (de 30 dias a cada 1 ano, preferencialmente nas férias escolares, se receber bolsa)."
      },
      {
        "letter": "D",
        "explanation": "O Art. 11 da Lei 11.788/2008 limita a duração do estágio na mesma concedente a 2 ANOS, EXCETO quando se tratar de estagiário portador de deficiência (PcD)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 3º, 10, 11 e 12 da Lei nº 11.788/2008",
        "textSnippet": "Estágio (Lei 11.788/08): TCE obrigatório (3 partes: estudante, concedente, IE); máx 6h/30h (educação especial 4h/20h); máx 2 anos na mesma concedente (exceto PcD); estágio não obrigatório = bolsa + auxílio-transporte obrigatórios; recesso de 30d/ano; seguro acidentes sempre obrigatório. Descumprimento gera vínculo de emprego."
      }
    ],
    "professorTip": "Estágio: máx 6h/30h | máx 2 anos (salvo PcD) | NÃO obrigatório = bolsa + transporte OBRIGATÓRIOS | Recesso = 30d! Descumprir requisito = vínculo de emprego!"
  },
  {
    "id": "mig_trab_046",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Temporário (Lei nº 6.019/1974) - Hipóteses, Prazo Máximo e Direitos",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Indústria contrata trabalhador temporário por meio de empresa de trabalho temporário para atender à demanda complementar previsível e contínua do setor durante 180 dias, prorrogando o contrato por mais 180 dias (total de 360 dias). O prazo e os direitos aplicáveis observam a Lei nº 6.019/74?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo máximo do contrato de trabalho temporário é de 180 dias improrrogáveis."
      },
      {
        "letter": "B",
        "text": "Não quanto ao prazo nem à hipótese! Trabalho temporário (Art. 2º) só se admite para: (1) substituição transitória de pessoal permanente ou (2) demanda COMPLEMENTAR de serviços (imprevisível ou sazonal/intermitente, não permanente); o prazo máximo é de 180 DIAS (consecutivos ou não), prorrogável por até MAIS 90 DIAS (total máximo = 270 dias — Art. 10, §§ 1º e 2º), com quarentena de 90 dias para nova contratação do mesmo temporário na mesma tomadora!"
      },
      {
        "letter": "C",
        "text": "O trabalhador temporário tem direito ao aviso prévio e à multa de 40% sobre o FGTS ao término regular do prazo."
      },
      {
        "letter": "D",
        "text": "Em caso de falência da empresa de trabalho temporário, a empresa tomadora responde subsidiariamente apenas pelo FGTS."
      }
    ],
    "correctAnswer": "B",
    "justification": "Trabalho Temporário (Lei 6.019/74): substituição transitória ou demanda complementar; prazo 180d + até 90d = máx 270 dias; quarentena 90 dias; isonomia salarial com categoria da tomadora; falência da ETT = tomadora responde SOLIDARIAMENTE (Art. 16); sem multa 40% FGTS no termo normal.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Após a Lei 13.429/2017, o prazo máximo do trabalho temporário é de 180 dias + prorrogação de até 90 dias (total = 270 dias), comprovada a manutenção das condições."
      },
      {
        "letter": "C",
        "explanation": "Por ser contrato a termo especial regido pela Lei 6.019/74 (Art. 12), o trabalhador temporário tem direito a remuneração equivalente aos empregados da mesma categoria da tomadora, jornada de 8h, férias proporcionais + 1/3, 13º proporcional e FGTS (sem aviso prévio nem multa de 40% no termo final normal!), além de quarentena de 90 dias (Art. 10, § 5º)."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 16 da Lei nº 6.019/74, no caso de FALÊNCIA da empresa de trabalho temporário, a empresa tomadora ou cliente responde SOLIDARIAMENTE pela remuneração, contribuições previdenciárias e indenizações devidas!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 2º, 10 e 12 da Lei nº 6.019/1974",
        "textSnippet": "Trabalho Temporário (Lei 6.019/74): substituição transitória ou demanda complementar; prazo 180d + até 90d = máx 270 dias; quarentena 90 dias; isonomia salarial com categoria da tomadora; falência da ETT = tomadora responde SOLIDARIAMENTE (Art. 16); sem multa 40% FGTS no termo normal."
      }
    ],
    "professorTip": "Temporário (6.019/74): 180 + 90 = máx 270 dias! Quarentena = 90 dias! Falência da intermediadora = tomadora responde SOLIDARIAMENTE (Art. 16)!"
  },
  {
    "id": "mig_trab_047",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Salário Substituição vs. Salário Complessivo (Súmulas 91 e 159 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado assume integralmente a função de colega gerente que saiu de férias por 30 dias (substituição não eventual), sem receber acréscimo salarial; simultaneamente, no contracheque de outro empregado consta cláusula contratual fixando salário global único abrangendo salário-base, horas extras pré-contratadas e adicional de periculosidade sem discriminação de parcelas. O que diz a jurisprudência do TST?",
    "options": [
      {
        "letter": "A",
        "text": "A substituição durante as férias de 30 dias de um colega é considerada meramente eventual e não gera direito ao salário do substituído."
      },
      {
        "letter": "B",
        "text": "Enquanto perdurar a substituição que NÃO tenha caráter meramente eventual (inclusive nas férias!), o empregado substituto fará jus ao salário contratual do substituído (Súmula 159, I, do TST — não se aplicando apenas se o cargo estiver vago definitivamente, Súmula 159, II!); já a cláusula que engloba vários direitos num único pagamento global sem discriminar cada parcela configura SALÁRIO COMPLESSIVO, sendo NULA de pleno direito pela Súmula 91 do TST!"
      },
      {
        "letter": "C",
        "text": "Quando o cargo fica definitivamente vago por pedido de demissão do titular, o empregado designado interinamente passa a ter direito ao salário do antecessor."
      },
      {
        "letter": "D",
        "text": "O salário complessivo é lícito sempre que o empregado concordar por escrito no momento da admissão."
      }
    ],
    "correctAnswer": "B",
    "justification": "Súmula 159 TST: (I) substituição não eventual (inclusive férias) = ganha salário do substituído; (II) cargo vago em definitivo = NÃO dá direito ao salário do antecessor. Súmula 91 TST: salário complessivo (pagar tudo englobado sem discriminar no holerite) = NULO!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 159, I, do TST garante expressamente o salário do substituído nas substituições não eventuais, INCLUSIVE durante as férias do titular!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 159, II, do TST, vago o cargo em definitivo, o empregado que passa a ocupá-lo NÃO tem direito ao salário igual ao do antecessor (salvo preenchidos os requisitos da equiparação salarial do Art. 461 CLT!)."
      },
      {
        "letter": "D",
        "explanation": "A Súmula 91 do TST veda expressamente o salário complessivo: nula é a cláusula contratual que fixa determinada importância ou percentagem para atender englobadamente vários direitos legais ou contratuais do trabalhador."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 450 e 457 da CLT e Súmulas 91 e 159 do TST",
        "textSnippet": "Súmula 159 TST: (I) substituição não eventual (inclusive férias) = ganha salário do substituído; (II) cargo vago em definitivo = NÃO dá direito ao salário do antecessor. Súmula 91 TST: salário complessivo (pagar tudo englobado sem discriminar no holerite) = NULO!"
      }
    ],
    "jurisprudence": "Súmulas 91 e 159 do TST",
    "professorTip": "Substituição nas férias = ganha salário do substituído (Súmula 159, I)! Cargo vago em definitivo = NÃO ganha (159, II)! Salário complessivo = NULO (Súmula 91)!"
  },
  {
    "id": "mig_trab_048",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Equiparação Salarial em Cadeia e Trabalho Intelectual (Súmula 6 TST)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado ingressa com pedido de equiparação salarial indicando paradigma remoto cujo salário resultou de decisão judicial anterior em favor de outro colega (\"equiparação em cadeia\"); além disso, a função envolve trabalho estritamente intelectual de engenharia de projetos. À luz do Art. 461, § 5º, da CLT (Reforma Trabalhista) e da Súmula 6 do TST, cabe equiparação em cadeia e no trabalho intelectual?",
    "options": [
      {
        "letter": "A",
        "text": "A equiparação salarial em cadeia continua permitida após a Reforma Trabalhista quando o paradigma remoto teve vantagem reconhecida por sentença judicial."
      },
      {
        "letter": "B",
        "text": "Cabe equiparação salarial no trabalho INTELECTUAL (desde que atendidos os requisitos de igual valor e produtividade — Súmula 6, VII, TST); CONTUDO, o Art. 461, § 5º, da CLT (inserido pela Reforma Trabalhista, superando a Súmula 6, VI, do TST!) PROIBIU expressamente a equiparação salarial EM CADEIA, determinando que a equiparação só será possível entre empregados contemporâneos no cargo ou função, vedada a indicação de paradigmas remotos mesmo que o paradigma contemporâneo tenha obtido vantagem em ação judicial!"
      },
      {
        "letter": "C",
        "text": "O trabalho predominantemente intelectual não comporta equiparação salarial por impossibilidade de aferição objetiva."
      },
      {
        "letter": "D",
        "text": "Na ação de equiparação salarial, incumbe ao empregado reclamante o ônus de provar os fatos impeditivos, modificativos ou extintivos alegados pela empresa."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 461, § 5º CLT: vedada equiparação em cadeia e paradigmas remotos (exige contemporaneidade no cargo/função). Súmula 6 TST: trabalho intelectual admite equiparação (VII); ônus dos fatos impeditivos é do empregador (VIII); denominação formal do cargo é irrelevante (III).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 461, § 5º, da CLT vedou expressamente a equiparação em cadeia e exigiu contemporaneidade entre equiparando e paradigma no mesmo estabelecimento."
      },
      {
        "letter": "C",
        "explanation": "Súmula 6, VII, do TST: desde que atendidos os requisitos do Art. 461 CLT, é possível a equiparação salarial de trabalho intelectual, que pode ser avaliado por sua perfeição técnica."
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 6, VIII, do TST, é do EMPREGADOR o ônus da prova do fato impeditivo, modificativo ou extintivo da equiparação salarial (ex.: maior produtividade, diferença > 2 anos na função ou > 4 anos na empresa, quadro de carreira)."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 461 da CLT e Súmula 6, itens III, VI e VII, do TST",
        "textSnippet": "Art. 461, § 5º CLT: vedada equiparação em cadeia e paradigmas remotos (exige contemporaneidade no cargo/função). Súmula 6 TST: trabalho intelectual admite equiparação (VII); ônus dos fatos impeditivos é do empregador (VIII); denominação formal do cargo é irrelevante (III)."
      }
    ],
    "jurisprudence": "Súmula nº 6 do TST",
    "professorTip": "Art. 461, § 5º CLT: ACABOU equiparação em cadeia / paradigma remoto! Trabalho intelectual = PODE equiparar (Súmula 6, VII)! Ônus de impedir equiparação = EMPREGADOR!"
  },
  {
    "id": "mig_trab_049",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Indenização Adicional do Trintídio da Data-Base (Lei nº 7.238/84)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "A data-base da categoria profissional é 1º de novembro. O empregador dispensa empregado sem justa causa em 20 de setembro, concedendo aviso prévio indenizado de 30 dias, cuja projeção (20 de outubro) recai dentro dos 30 dias que antecedem a data-base (entre 2 e 31 de outubro). Qual verba adicional é devida?",
    "options": [
      {
        "letter": "A",
        "text": "Não é devida a indenização porque a comunicação da dispensa ocorreu em 20 de setembro, fora dos 30 dias anteriores a 1º de novembro."
      },
      {
        "letter": "B",
        "text": "É devida a INDENIZAÇÃO ADICIONAL equivalente a 1 (um) salário mensal do empregado (Art. 9º da Lei nº 7.238/1984), porque o tempo do aviso prévio, mesmo INDENIZADO, conta-se para efeito da indenização adicional (Súmula 182 do TST) e, recaindo seu término dentro do trintídio anterior à data-base (02/10 a 31/10), incide a multa de 1 salário!"
      },
      {
        "letter": "C",
        "text": "Se a projeção do aviso prévio recair exatamente no mês da data-base (após 1º de novembro), o empregado terá direito cumulativo ao reajuste e à indenização adicional."
      },
      {
        "letter": "D",
        "text": "A indenização adicional corresponde a 2 salários mensais acrescidos de FGTS e férias proporcionais."
      }
    ],
    "correctAnswer": "B",
    "justification": "Indenização Adicional (Art. 9º Lei 7.238/84): dispensa sem justa causa nos 30 dias anteriores à data-base (computando projeção do aviso prévio — Súmula 182 TST) = 1 salário mensal. Se o término projetado cair NA data-base ou após = só diferenças do reajuste (Súmula 314 TST).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela Súmula 182 do TST, o tempo do aviso prévio, mesmo indenizado, projeta o término do contrato para efeitos da indenização do Art. 9º da Lei 7.238/84!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 314 do TST, se a rescisão (com projeção do aviso prévio) ocorrer já DENTRO ou APÓS a data-base (a partir de 1º/11), NÃO cabe a indenização adicional — cabe apenas o pagamento das diferenças das verbas rescisórias com o salário reajustado!"
      },
      {
        "letter": "D",
        "explanation": "O valor exato da indenização adicional do Art. 9º da Lei 7.238/84 é de 1 (um) salário mensal (Súmula 242 TST inclui salário + adicionais habituais), sem incidência de FGTS por ter natureza indenizatória."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 9º da Lei nº 7.238/1984 e Súmulas 182, 242 e 314 do TST",
        "textSnippet": "Indenização Adicional (Art. 9º Lei 7.238/84): dispensa sem justa causa nos 30 dias anteriores à data-base (computando projeção do aviso prévio — Súmula 182 TST) = 1 salário mensal. Se o término projetado cair NA data-base ou após = só diferenças do reajuste (Súmula 314 TST)."
      }
    ],
    "jurisprudence": "Súmulas 182, 242 e 314 do TST",
    "professorTip": "Dispensa nos 30 dias antes da data-base (contando aviso prévio projetado — Súmula 182) = Indenização de 1 SALÁRIO! Se cair na/após data-base = SÓ reajuste (Súmula 314)!"
  },
  {
    "id": "mig_trab_050",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Revista Íntima vs. Revista Visual de Pertences (Art. 373-A, VI, CLT e TST)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Supermercado adota procedimento padrão aplicável indistintamente a todos os empregados (homens e mulheres) na saída do turno: abertura visual de bolsas e mochilas pelo setor de segurança, sem qualquer contato físico ou exposição vexatória, nem revista corporal/íntima. Essa prática enseja indenização por dano moral?",
    "options": [
      {
        "letter": "A",
        "text": "Não! A jurisprudência consolidada do TST (SDI-1) distingue: a REVISTA ÍNTIMA / corporal (com contato físico ou desnudamento) é expressamente PROIBIDA a mulheres e homens (Art. 373-A, VI, CLT e Lei 13.271/2016), gerando dano moral in re ipsa; já a revista meramente VISUAL de bolsas/mochilas/pertences, realizada de forma IMPESSOAL, geral, sem contato físico e sem caráter discriminatório ou vexatório, situa-se no poder diretivo/fiscalizador do empregador e NÃO configura dano moral!"
      },
      {
        "letter": "B",
        "text": "Qualquer inspeção visual em bolsas ou mochilas de empregados é ilegal e gera dano moral automático independentemente de contato físico."
      },
      {
        "letter": "C",
        "text": "A proibição de revista íntima do Art. 373-A, VI, CLT restringe-se às mulheres, sendo permitida revista corporal com toque em empregados do sexo masculino."
      },
      {
        "letter": "D",
        "text": "A Lei nº 13.271/2016 autoriza revista íntima em trabalhadoras desde que realizada por segurança do mesmo sexo."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 373-A, VI CLT e Lei 13.271/16: vedada revista íntima/corporal. Jurisprudência TST: revista meramente visual em bolsas/sacolas, impessoal, geral e sem contato físico ou constrangimento = lícita (exercício regular do poder diretivo).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O TST distingue revista íntima/corporal (ilícita sempre) de revista puramente visual de bolsas/pertences sem contato físico e impessoal (lícita no poder diretivo)."
      },
      {
        "letter": "C",
        "explanation": "Pelo princípio da isonomia e dignidade da pessoa humana (Art. 5º, I e X, CF), a proibição de revista íntima aplica-se igualmente a homens e mulheres!"
      },
      {
        "letter": "D",
        "explanation": "A Lei nº 13.271/2016 veda expressamente às empresas privadas e órgãos públicos a adoção de qualquer prática de revista íntima em funcionárias e clientes do sexo feminino (sujeita a multa de R$ 20 mil + dano moral)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 373-A, VI, da CLT e Lei nº 13.271/2016",
        "textSnippet": "Art. 373-A, VI CLT e Lei 13.271/16: vedada revista íntima/corporal. Jurisprudência TST: revista meramente visual em bolsas/sacolas, impessoal, geral e sem contato físico ou constrangimento = lícita (exercício regular do poder diretivo)."
      }
    ],
    "professorTip": "Revista ÍNTIMA (contato/corpo) = PROIBIDA e dá dano moral! Revista VISUAL impessoal em bolsas sem contato físico = LÍCITA (SDI-1 TST)!"
  },
  {
    "id": "mig_trab_051",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Descontos Salariais - Adiantamentos, Danos Culposos/Dolosos e Autorização Prévia",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado caixa de loja gera quebra de caixa/prejuízo financeiro ao empregador por descuido meramente culposo (não doloso), sem que houvesse qualquer cláusula contratual autorizando o desconto por culpa; ademais, outro colega aderiu espontaneamente por escrito ao plano de saúde familiar com desconto em folha, sem vício de consentimento. Quais descontos são lícitos?",
    "options": [
      {
        "letter": "A",
        "text": "O desconto pelo dano CULPOSO sem prévia previsão contratual é ILÍCITO (Art. 462, § 1º, CLT — no DOLO o desconto independe de previsão prévia; na CULPA, exige-se acordo prévio autorizando o desconto!); já o desconto em folha para plano de saúde/seguro/clube/previdência com autorização prévia e por escrito do empregado, sem comprovação de vício de consentimento, é plenamente VÁLIDO pela Súmula 342 do TST!"
      },
      {
        "letter": "B",
        "text": "O empregador pode descontar livremente qualquer prejuízo causado por culpa simples do empregado mesmo sem previsão contratual anterior."
      },
      {
        "letter": "C",
        "text": "Os descontos para planos de saúde e seguros de vida são sempre ilícitos por violarem o princípio da intangibilidade salarial (Art. 462 CLT)."
      },
      {
        "letter": "D",
        "text": "O empregado vendedor que recebe comissões assume o risco de inadimplência do cliente, podendo o empregador estornar a comissão se o comprador não pagar as parcelas após aceita a venda."
      }
    ],
    "correctAnswer": "A",
    "justification": "Intangibilidade Salarial (Art. 462 CLT): proíbe descontos salvo adiantamentos, dispositivos de lei, norma coletiva, dano DOLOSO, dano CULPOSO previamente acordado (§ 1º) e benefícios autorizados por escrito sem vício (Súmula 342 TST). Descontos no TRCT não podem exceder 1 mês de remuneração (Art. 477, § 5º CLT).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Art. 462, § 1º, CLT: Dano DOLOSO = pode descontar sempre; Dano CULPOSO = SÓ pode descontar se essa possibilidade tiver sido previamente acordada!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 342 do TST, descontos salariais efetuados com autorização prévia e por escrito do empregado para planos de assistência médico-odontológica, seguro, previdência privada ou cooperativa NÃO violam o Art. 462 (salvo prova de coação/vício!)."
      },
      {
        "letter": "D",
        "explanation": "Pelos Arts. 2º e 466 CLT e Lei 3.207/57, o risco do negócio é do empregador (alteridade): ultimada a transação (aceito o negócio), a insolvência/inadimplência do comprador NÃO autoriza o estorno da comissão do vendedor (só autoriza estorno se houver cancelamento/insolvência comprovada antes de ultimada ou devolução nos termos legais específicos de vendas a prazo)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 462 da CLT e Súmula 342 e OJ 160 SDI-1 do TST",
        "textSnippet": "Intangibilidade Salarial (Art. 462 CLT): proíbe descontos salvo adiantamentos, dispositivos de lei, norma coletiva, dano DOLOSO, dano CULPOSO previamente acordado (§ 1º) e benefícios autorizados por escrito sem vício (Súmula 342 TST). Descontos no TRCT não podem exceder 1 mês de remuneração (Art. 477, § 5º CLT)."
      }
    ],
    "jurisprudence": "Súmula nº 342 do TST",
    "professorTip": "Dano DOLOSO = desconta! Dano CULPOSO = SÓ se previamente acordado (Art. 462, § 1º)! Plano saúde/seguro autorizado por escrito = VÁLIDO (Súmula 342)! Teto desconto rescisório = 1 salário!"
  },
  {
    "id": "mig_trab_052",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito do Trabalho",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Cláusula de Não Concorrência Pós-Contratual e Inventos do Empregado",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "ACADEMICA",
    "statement": "Engenheiro empregado desenvolve nova patente tecnológica utilizando exclusivamente recursos, dados, máquinas e horário de trabalho do empregador (sendo contratado exatamente para pesquisa/invenção); além disso, assina cláusula de não concorrência válida após o término do contrato. A quem pertence a patente e o que valida a não concorrência pós-contratual?",
    "options": [
      {
        "letter": "A",
        "text": "Quando a invenção decorre de contrato de trabalho cuja natureza envolve pesquisa ou atividade inventiva (ou com natureza prevista no contrato), a propriedade da patente pertence EXCLUSIVAMENTE ao EMPREGADOR (Art. 88 da Lei 9.279/96 — salvo se desenvolvida sem relação com o contrato nem uso de recursos da empresa, quando é exclusiva do empregado pelo Art. 90, ou propriedade COMUM se fora do contrato mas com uso de recursos/instalações da empresa pelo Art. 91!); e a cláusula de não concorrência pós-contratual só é válida no Brasil se tiver limitação TEMPORAL (geralmente até 2 anos), limitação ESPACIAL/SEGMENTO e CONTRAPRESTAÇÃO FINANCEIRA compensatória!"
      },
      {
        "letter": "B",
        "text": "Toda invenção criada por empregado durante a vigência do contrato pertence sempre em copropriedade igualitária (50%/50%) ao empregado e ao empregador."
      },
      {
        "letter": "C",
        "text": "A cláusula de não concorrência após a extinção do contrato de trabalho é válida por prazo indeterminado e sem pagamento de indenização compensatória."
      },
      {
        "letter": "D",
        "text": "A multa por descumprimento da obrigação de não concorrência pelo ex-empregado é de competência da Justiça Comum Estadual, mesmo oriunda do contrato de trabalho."
      }
    ],
    "correctAnswer": "A",
    "justification": "LPI (Arts. 88–91): invenção contratada = empregador (100%); sem relação + sem recursos = empregado (100%); sem relação + com recursos/dados da empresa = comum (50%/50%). Não concorrência pós-contratual exige limite temporal, territorial/material e compensação financeira.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Regra da LPI (Arts. 88–91): contratado para inventar/pesquisar = 100% do EMPREGADOR; fora do contrato E sem recursos da empresa = 100% do EMPREGADO; fora do contrato COM recursos/meios da empresa = propriedade COMUM em partes iguais!"
      },
      {
        "letter": "C",
        "explanation": "Pela jurisprudência consolidada do TST, impedir o ex-empregado de trabalhar no seu ramo após a saída exige: prazo determinado razoável, objeto específico e indenização financeira correspondente!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 114, I e IX, da CF e jurisprudência do TST/STJ, ações decorrentes de cláusula pós-contratual inserida no contrato de trabalho (inclusive não concorrência) pertencem à competência da JUSTIÇA DO TRABALHO!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 88 a 92 da Lei nº 9.279/1996 (LPI) e Princípios Trabalhistas",
        "textSnippet": "LPI (Arts. 88–91): invenção contratada = empregador (100%); sem relação + sem recursos = empregado (100%); sem relação + com recursos/dados da empresa = comum (50%/50%). Não concorrência pós-contratual exige limite temporal, territorial/material e compensação financeira."
      }
    ],
    "professorTip": "Invenção: Contratado p/ pesquisar = Patrão 100%! Fora + Sem recursos = Empregado 100%! Fora + Com recursos = 50/50! Não concorrência pós-contrato = precisa prazo + compensação $!"
  },
  {
    "id": "mig_trab_053",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Salário-Maternidade - Prorrogação por Internação Hospitalar (STF ADI 6327)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Recém-nascido prematuro ou sua mãe empregada permanece internado em UTI neonatal durante 45 dias logo após o parto por complicações decorrentes do nascimento. Qual o marco inicial da contagem dos 120 dias da licença-maternidade e do salário-maternidade segundo o STF?",
    "options": [
      {
        "letter": "A",
        "text": "Na ADI 6327 (referendada pelo Plenário do STF), o Supremo Tribunal Federal fixou interpretação conforme a Constituição determinando que o termo inicial da licença-maternidade (120 dias) e do respectivo salário-maternidade deve ser a ALTA HOSPITALAR da mãe ou do recém-nascido — o que ocorrer POR ÚLTIMO — prorrogando o benefício quando a internação decorrente do parto exceder duas semanas!"
      },
      {
        "letter": "B",
        "text": "Os 120 dias da licença-maternidade contam-se sempre da data do parto ou do atestado médico anterior, sem qualquer ampliação por internação neonatal."
      },
      {
        "letter": "C",
        "text": "Em caso de aborto NÃO criminoso comprovado por atestado médico oficial, a empregada tem direito a 120 dias integrais de licença-maternidade."
      },
      {
        "letter": "D",
        "text": "A empregada que adota criança com 10 anos de idade não tem direito à licença-maternidade de 120 dias."
      }
    ],
    "correctAnswer": "A",
    "justification": "Licença-maternidade (120 dias — Art. 392 CLT): regra = início 28d antes ou no parto; STF ADI 6327 = internação pós-parto > 2 semanas desloca início dos 120d para a ALTA (da mãe ou do bebê, a última); aborto não criminoso = 2 semanas; natimorto = 120 dias; adoção de criança = 120 dias (unificado sem distinção de idade da criança); Empresa Cidadã = +60d (180d).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "Pela ADI 6327 do STF, se houver internação hospitalar relacionada ao parto superior a 2 semanas, o marco inicial dos 120 dias passa a ser a ALTA HOSPITALAR (do bebê ou da mãe, o que ocorrer por último)!"
      },
      {
        "letter": "C",
        "explanation": "No aborto NÃO criminoso (Art. 395 CLT), a mulher terá um repouso remunerado de 2 SEMANAS (14 dias); já no parto de NATIMORTO (feto morto com >= 20 semanas / 500g), aplica-se a licença-maternidade integral de 120 dias (IN INSS)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 392-A da CLT (e Lei 12.873/13), a empregada ou o empregado (ou cônjuge sobrevivente em caso de falecimento da genitora — Art. 392-B!) que adotar ou obtiver guarda judicial para fins de adoção de criança (até 12 anos incompletos no ECA) faz jus à licença-maternidade INTEGRAL de 120 dias!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 392 da CLT, Art. 71 da Lei nº 8.213/1991 e STF ADI 6327",
        "textSnippet": "Licença-maternidade (120 dias — Art. 392 CLT): regra = início 28d antes ou no parto; STF ADI 6327 = internação pós-parto > 2 semanas desloca início dos 120d para a ALTA (da mãe ou do bebê, a última); aborto não criminoso = 2 semanas; natimorto = 120 dias; adoção de criança = 120 dias (unificado sem distinção de idade da criança); Empresa Cidadã = +60d (180d)."
      }
    ],
    "jurisprudence": "STF ADI 6327",
    "professorTip": "STF ADI 6327: internação parto > 2 sem -> 120 dias começam da ALTA HOSPITALAR (última)! Aborto não criminoso = 2 semanas | Natimorto = 120 dias | Adoção criança = 120 dias!"
  },
  {
    "id": "mig_trab_054",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Rural (Lei nº 5.889/73) - Moradia, Prescrição e Aviso Prévio",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Trabalhador rural (safrista ou permanente) reside em casa fornecida pelo empregador na fazenda para tornar possível a realização do trabalho e cumpre aviso prévio trabalhado quando é demitido sem justa causa. Como a Lei nº 5.889/73 disciplina o desconto de habitação, a redução no aviso prévio e a prescrição?",
    "options": [
      {
        "letter": "A",
        "text": "No trabalho rural: (1) a moradia fornecida para viabilizar o trabalho NÃO integra o salário (desde que pactuado em contrato escrito com notificação ao sindicato — Art. 9º, § 5º, Lei 5.889/73), e o teto de desconto por habitação (quando cabível) é de até 20% e por alimentação até 25% do SALÁRIO MÍNIMO (Art. 9º, \"a\" e \"b\" — não do salário contratual!); (2) no aviso prévio trabalhado dado pelo empregador rural, o empregado tem direito a faltar 1 DIA POR SEMANA sem prejuízo do salário (Art. 15 Lei 5.889/73 — diferente da opção de 2h/dia ou 7d corridos do urbano!); e (3) a prescrição rural foi equiparada à urbana pela EC 28/2000 (5 anos / 2 anos)!"
      },
      {
        "letter": "B",
        "text": "O trabalhador rural continua imprescritível durante a vigência do contrato até 2 anos após a extinção, não se aplicando a prescrição quinquenal."
      },
      {
        "letter": "C",
        "text": "No aviso prévio trabalhado do rurícola demitido sem justa causa, aplica-se a redução de 2 horas diárias ou 7 dias corridos do Art. 488 da CLT."
      },
      {
        "letter": "D",
        "text": "O contrato de trabalho rural por pequeno prazo (até 2 meses dentro de 1 ano — Art. 14-A Lei 5.889/73) exige obrigatoriamente anotação tradicional na CTPS física e gera FGTS sem multa na saída."
      }
    ],
    "correctAnswer": "A",
    "justification": "Rural (Lei 5.889/73): Noturno = lavoura 21h–5h / pecuária 20h–4h (+25%, hora de 60 min); descontos sobre salário mínimo = até 20% habitação / até 25% alimentação (moradia escrita c/ notificação sindical não é salário); aviso prévio trabalhado dado pelo patrão = 1 dia livre por semana (Art. 15); prescrição = 5a / 2a (EC 28/00).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A EC 28/2000 alterou o Art. 7º, XXIX, da CF unificando a prescrição trabalhista urbana e RURAL: 5 anos durante o contrato até o limite de 2 anos após a extinção!"
      },
      {
        "letter": "C",
        "explanation": "Regra específica do Art. 15 da Lei nº 5.889/73: durante o aviso prévio rural promovido pelo empregador, o empregado rural tem direito a 1 DIA POR SEMANA para procurar outro trabalho!"
      },
      {
        "letter": "D",
        "explanation": "O contrato por pequeno prazo do Art. 14-A dispensa anotação da CTPS se celebrado por escrito/GFIP/eSocial, mas inclui FGTS (Art. 14-A, § 3º, II) e previdência, convertendo-se em prazo indeterminado se ultrapassar 2 meses no período de 1 ano!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 7º, 9º e 15 da Lei nº 5.889/1973 e CF Art. 7º, XXIX",
        "textSnippet": "Rural (Lei 5.889/73): Noturno = lavoura 21h–5h / pecuária 20h–4h (+25%, hora de 60 min); descontos sobre salário mínimo = até 20% habitação / até 25% alimentação (moradia escrita c/ notificação sindical não é salário); aviso prévio trabalhado dado pelo patrão = 1 dia livre por semana (Art. 15); prescrição = 5a / 2a (EC 28/00)."
      }
    ],
    "professorTip": "Rural: Aviso prévio trabalhado = 1 dia/semana livre (Art. 15)! Desconto (sobre Salário Mínimo!) = 20% moradia / 25% comida! Prescrição = igual urbano (5a/2a)!"
  },
  {
    "id": "mig_trab_055",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho do Menor e Contrato de Aprendizagem (Arts. 402–433 CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Adolescente de 15 anos é contratado como aprendiz em estabelecimento comercial para jornada de 6 horas diárias (cursando ensino fundamental completo e frequentando ensino médio); paralelamente, outro empregado de 17 anos assina sozinho recibo mensal de salário e posteriormente o termo de quitação das verbas rescisórias sem assistência de seus pais. O que é válido?",
    "options": [
      {
        "letter": "A",
        "text": "O contrato de aprendizagem a partir dos 14 anos é VÁLIDO (até 24 anos, ou sem limite máximo para PcD — Art. 428, § 5º, CLT), com jornada máxima de 6 horas diárias para quem ainda não completou o ensino fundamental (podendo chegar a 8h para quem já concluiu o fundamental SE computadas horas de aprendizagem teórica — Art. 432 CLT!) e alíquota de FGTS de apenas 2% (Art. 15, § 7º, Lei 8.036/90)! Quanto ao menor de 18 anos: ele PODE assinar recibo de pagamento dos salários mensais (Art. 439 CLT), MAS É PROIBIDO dar quitação das indenizações/verbas na RESCISÃO sem assistência dos responsáveis legais!"
      },
      {
        "letter": "B",
        "text": "O aprendiz de 15 anos pode trabalhar normalmente em horário noturno (22h às 5h) desde que autorizado pelos pais."
      },
      {
        "letter": "C",
        "text": "O menor de 18 anos é absolutamente incapaz no Direito do Trabalho e não pode sequer assinar recibo de salário mensal."
      },
      {
        "letter": "D",
        "text": "Contra o trabalhador menor de 18 anos corre normalmente a prescrição bienal e quinquenal trabalhista."
      }
    ],
    "correctAnswer": "A",
    "justification": "Menor / Aprendiz: >= 14 anos (até 24 anos, exceto PcD sem limite); proibido noturno/insalubre/perigoso (< 18); FGTS aprendiz = 2%; prazo contrato aprendizagem <= 2 anos (exceto PcD); salário mensal = menor assina sozinho (Art. 439); rescisão = exige assistência dos responsáveis; prescrição = NÃO corre contra menor de 18 anos (Art. 440).",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 7º, XXXIII, CF e o Art. 404 CLT PROÍBEM terminantemente o trabalho noturno, perigoso ou insalubre a menores de 18 anos (e qualquer trabalho a < 16 anos, salvo aprendiz a partir dos 14)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 439 da CLT, é LÍCITO ao menor firmar recibo pelo pagamento dos salários; porém, tratando-se de RESCISÃO do contrato de trabalho, é vedado dar quitação ao empregador pelo recebimento da indenização devida sem assistência dos pais ou responsáveis!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 440 da CLT, contra os menores de 18 anos NÃO corre nenhum prazo de prescrição (a contagem prescricional só se inicia quando completarem 18 anos)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 7º, XXXIII, CF e Arts. 402 a 433 da CLT",
        "textSnippet": "Menor / Aprendiz: >= 14 anos (até 24 anos, exceto PcD sem limite); proibido noturno/insalubre/perigoso (< 18); FGTS aprendiz = 2%; prazo contrato aprendizagem <= 2 anos (exceto PcD); salário mensal = menor assina sozinho (Art. 439); rescisão = exige assistência dos responsáveis; prescrição = NÃO corre contra menor de 18 anos (Art. 440)."
      }
    ],
    "professorTip": "Menor (<18): SEM prescrição (Art. 440)! Assina salário sozinho, MAS rescisão precisa dos pais (Art. 439)! Aprendiz (>=14 até 24, PcD sem teto): FGTS = 2%, máx 2 anos!"
  },
  {
    "id": "mig_trab_056",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Doméstico - LC nº 150/2015 e Distinção da Diarista",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Trabalhadora presta serviços de limpeza residencial para família 3 vezes por semana (segundas, quartas e sextas), de forma contínua e subordinada; além disso, viaja acompanhando os empregadores durante 5 dias em viagem familiar, prestando serviços no destino. Como a LC 150/2015 trata o vínculo, o acompanhamento em viagem e o FGTS?",
    "options": [
      {
        "letter": "A",
        "text": "Há vínculo de EMPREGO DOMÉSTICO porque o serviço é prestado no âmbito residencial sem fins lucrativos por MAIS DE 2 DIAS POR SEMANA (Art. 1º da LC 150/2015 — até 2 dias/semana é diarista autônoma sem vínculo!); quanto ao acompanhamento em viagem, a remuneração-hora do serviço em viagem será, no mínimo, 25% SUPERIOR ao valor do salário-hora normal (Art. 11, § 2º — podendo alternativamente ser convertido em banco de horas mediante acordo escrito!); e o empregador recolhe mensalmente 8% de FGTS + 3,2% de depósito compensatório antecipado da perda do emprego (em substituição à multa de 40% — Art. 22 LC 150/15)!"
      },
      {
        "letter": "B",
        "text": "Caracteriza-se como diarista autônoma qualquer trabalhadora que preste serviços em residência até 3 dias por semana."
      },
      {
        "letter": "C",
        "text": "Ao ser dispensado sem justa causa, o empregado doméstico recebe multa rescisória de 40% sobre o FGTS paga integralmente no TRCT."
      },
      {
        "letter": "D",
        "text": "A empregada doméstica gestante não possui estabilidade provisória prevista na LC 150/2015."
      }
    ],
    "correctAnswer": "A",
    "justification": "Doméstico (LC 150/15): > 2 dias/semana (sem fins lucrativos); jornada 8h/44h (admite 12x36 por acordo escrito — Art. 10); viagem = +25% hora (ou banco horas escrito); FGTS 8% + 3,2% mensal antecipado; seguro-desemprego = máx 3 parcelas de 1 SM (exige 15 meses trabalhados nos últimos 24 meses); estabilidade gestante garantida.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O critério legal objetivo do Art. 1º da LC 150/2015 é MAIS DE 2 DIAS POR SEMANA (3 ou mais dias por semana de forma contínua/subordinada = empregado doméstico; até 2 dias = diarista sem vínculo)!"
      },
      {
        "letter": "C",
        "explanation": "Na LC 150/2015 (Art. 22), o empregador doméstico deposita todo mês 3,2% a título de indenização compensatória na conta vinculada (que saca em dispensa sem justa causa/culpa recíproca, ou volta ao empregador em pedido de demissão/justa causa!), NÃO pagando multa de 40% na saída!"
      },
      {
        "letter": "D",
        "explanation": "O Art. 25, parágrafo único, da LC 150/2015 e o Art. 10, II, \"b\", ADCT asseguram expressamente à empregada doméstica gestante a estabilidade da confirmação da gravidez até 5 meses após o parto (inclusive durante o contrato de experiência)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 1º, 2º, 10, 22 e 27 da LC nº 150/2015",
        "textSnippet": "Doméstico (LC 150/15): > 2 dias/semana (sem fins lucrativos); jornada 8h/44h (admite 12x36 por acordo escrito — Art. 10); viagem = +25% hora (ou banco horas escrito); FGTS 8% + 3,2% mensal antecipado; seguro-desemprego = máx 3 parcelas de 1 SM (exige 15 meses trabalhados nos últimos 24 meses); estabilidade gestante garantida."
      }
    ],
    "professorTip": "Doméstico (LC 150): > 2 dias/semana! FGTS = 8% + 3,2% mensal (sem multa 40% no fim)! Viagem = +25% na hora! Seguro-desemprego = 3 parcelas de 1 SM!"
  },
  {
    "id": "mig_trab_057",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho do Professor - Duração da Aula, Férias Escolares e Redução de Carga Horária",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Professor de escola privada tem sua carga horária reduzida unilateralmente pelo empregador em virtude da diminuição do número de alunos matriculados no início do ano letivo; paralelamente, outro professor é dispensado sem justa causa ao término do ano letivo (dezembro) com aviso prévio indenizado. Como a CLT e o TST decidem ambos os casos?",
    "options": [
      {
        "letter": "A",
        "text": "Pela OJ 244 da SDI-1 do TST, a redução da carga horária do professor em virtude da diminuição do número de alunos NÃO constitui alteração contratual ilícita, uma vez que não implica redução do valor da hora-aula (mantém o valor unitário da hora-aula!); e quanto à dispensa ao término do ano letivo ou durante as férias escolares, pela Súmula 10 do TST, é assegurado ao professor o pagamento dos salários no período das férias escolares se despedido sem justa causa ao término do ano letivo ou no curso dessas férias!"
      },
      {
        "letter": "B",
        "text": "Qualquer redução de número de aulas do professor, mesmo por queda de matrículas, viola a irredutibilidade salarial e é nula."
      },
      {
        "letter": "C",
        "text": "Os professores têm direito a receber apenas as verbas rescisórias comuns sem garantia dos salários das férias escolares se dispensados em dezembro."
      },
      {
        "letter": "D",
        "text": "No período de exames ou férias escolares, o professor pode prestar serviços de coordenação administrativa sem acréscimo salarial nem limite de horas."
      }
    ],
    "correctAnswer": "A",
    "justification": "Professor (Arts. 317–324 CLT): máximo 4 aulas consecutivas ou 6 intercaladas no mesmo estabelecimento (Art. 318 CLT após Lei 13.415/17 permite > 1 turno/jornada na mesma escola desde que não ultrapasse a jornada legal e sem exceder intervalo); OJ 244 SDI-1 = redução de alunos permite reduzir aulas; Súmula 10 TST = dispensa no fim do ano letivo garante salários das férias escolares.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A OJ 244 da SDI-1 do TST admite a redução da carga horária por diminuição do número de alunos sem alteração do valor da hora-aula."
      },
      {
        "letter": "C",
        "explanation": "A Súmula 10 do TST (c/c Art. 322, § 3º, CLT) garante expressamente o pagamento dos salários relativos ao período de férias escolares quando a dispensa sem justa causa ocorrer ao término do ano letivo ou no curso das férias escolares."
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 322, § 2º, da CLT, no período de férias escolares, não se pode exigir dos professores outro serviço senão o relacionado com a realização de exames."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 317 a 324 da CLT e OJ 244 SDI-1 e Súmula 10 TST",
        "textSnippet": "Professor (Arts. 317–324 CLT): máximo 4 aulas consecutivas ou 6 intercaladas no mesmo estabelecimento (Art. 318 CLT após Lei 13.415/17 permite > 1 turno/jornada na mesma escola desde que não ultrapasse a jornada legal e sem exceder intervalo); OJ 244 SDI-1 = redução de alunos permite reduzir aulas; Súmula 10 TST = dispensa no fim do ano letivo garante salários das férias escolares."
      }
    ],
    "jurisprudence": "Súmula nº 10 e OJ 244 SDI-1 do TST",
    "professorTip": "Professor: Queda de alunos pode reduzir aulas sem mexer no valor da hora-aula (OJ 244)! Dispensa no fim do ano letivo = paga salários das férias escolares (Súmula 10 TST)!"
  },
  {
    "id": "mig_trab_058",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Desconsideração da Personalidade Jurídica e Sucessão na Recuperação Judicial / Falência",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa em recuperação judicial aliena regularmente uma unidade produtiva isolada (UPI) em leilão judicial aprovado pelo juízo recuperacional conforme o plano de recuperação homologado. O arrematante da UPI sucede nas dívidas trabalhistas da empresa em recuperação judicial?",
    "options": [
      {
        "letter": "A",
        "text": "NÃO! Pelos Arts. 60, parágrafo único, e 141, II, da Lei nº 11.101/2005 (declarados constitucionais pelo STF na ADI 3934!), o objeto da alienação judicial de unidade produtiva isolada (UPI) na recuperação judicial ou dos bens na falência estará LIVRE de qualquer ônus e NÃO haverá sucessão do arrematante nas obrigações do devedor, INCLUSIVE as de natureza tributária, derivadas da legislação do trabalho e decorrentes de acidentes de trabalho (salvo fraude/simulação em favor de sócio/parente prevista no § 1º do Art. 141)!"
      },
      {
        "letter": "B",
        "text": "No Direito do Trabalho vigora a responsabilidade objetiva absoluta, de modo que o adquirente de UPI em recuperação judicial sempre responde pelas dívidas trabalhistas."
      },
      {
        "letter": "C",
        "text": "A execução trabalhista pode redirecionar diretamente contra o patrimônio dos sócios sem instaurar o Incidente de Desconsideração da Personalidade Jurídica (IDPJ)."
      },
      {
        "letter": "D",
        "text": "O crédito trabalhista na falência não tem limite algum na classe privilegiada de pagamento."
      }
    ],
    "correctAnswer": "A",
    "justification": "Sucessão em RJ / Falência (Arts. 60 e 141 LRF + STF ADI 3934): NÃO há sucessão trabalhista do adquirente de UPI ou ativo em leilão judicial! Crédito trabalhista na falência = preferência até 150 SM/credor (Art. 83, I). IDPJ na JT (Art. 855-A CLT) = aplica Arts. 133–137 CPC.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "A Lei de Falências (Arts. 60 e 141, II) e a ADI 3934 do STF afastam expressamente a sucessão trabalhista e tributária na alienação judicial de UPI na recuperação judicial e na falência!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 855-A da CLT (inserido pela Reforma Trabalhista), aplica-se integralmente ao Processo do Trabalho o Incidente de Desconsideração da Personalidade Jurídica (IDPJ) dos Arts. 133 a 137 do CPC (suspende o processo principal e cita o sócio para manifestação em 15 dias — cabendo agravo de petição na fase de execução)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 83, I, da Lei nº 11.101/2005 (validado na ADI 3934), os créditos derivados da legislação trabalhista na falência têm preferência limitados a até 150 SALÁRIOS MÍNIMOS por credor (o excedente vai para a classe quirografária; e salários atrasados dos 3 meses anteriores à falência até 5 salários mínimos são pagos tão logo haja disponibilidade em caixa — Art. 151)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 855-A da CLT e Arts. 60, parágrafo único, e 141, II, da Lei nº 11.101/2005",
        "textSnippet": "Sucessão em RJ / Falência (Arts. 60 e 141 LRF + STF ADI 3934): NÃO há sucessão trabalhista do adquirente de UPI ou ativo em leilão judicial! Crédito trabalhista na falência = preferência até 150 SM/credor (Art. 83, I). IDPJ na JT (Art. 855-A CLT) = aplica Arts. 133–137 CPC."
      }
    ],
    "jurisprudence": "STF ADI 3934",
    "professorTip": "Venda de UPI na Recuperação Judicial ou Falência = SEM sucessão trabalhista (ADI 3934 STF)! Preferência na falência = teto de 150 Salários Mínimos! Sócio = exige IDPJ (Art. 855-A CLT)!"
  },
  {
    "id": "mig_trab_059",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Multas dos Arts. 467 e 477, § 8º, da CLT - Falência, Reversão de Justa Causa e Parcelas Incontroversas",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregador contesta integralmente em audiência o pedido de vínculo de emprego ou dispensa por justa causa aplicada a ex-empregado; porém, em outra reclamação, a empresa reconhece na contestação dever R$ 4.000,00 de saldo de salário e férias vencidas, mas não os paga na data do comparecimento à Justiça do Trabalho; e uma terceira empresa teve falência decretada antes da rescisão. Em quais casos incidem as multas dos Arts. 467 e 477, § 8º?",
    "options": [
      {
        "letter": "A",
        "text": "A multa do Art. 467 (acréscimo de 50% sobre as verbas rescisórias INCONTROVERSAS não pagas na primeira audiência) incide apenas na segunda empresa (que reconheceu dever R$ 4.000 e não pagou em audiência — NÃO incide quando há controvérsia séria sobre vínculo ou justa causa, nem à Fazenda Pública pelo parágrafo único, nem à massa falida pela Súmula 388 TST!); já a multa do Art. 477, § 8º (1 salário pelo atraso além de 10 dias do término do contrato) incide inclusive quando a relação de emprego ou reversão de justa causa for reconhecida apenas em juízo (Súmula 462 TST), NÃO se aplicando apenas à massa falida se a falência foi decretada ANTES da rescisão (Súmula 388)!"
      },
      {
        "letter": "B",
        "text": "A multa do Art. 467 da CLT (50%) aplica-se mesmo às verbas controvertidas quando a empresa perde a ação ao final."
      },
      {
        "letter": "C",
        "text": "Reconhecida em juízo a nulidade de justa causa ou o vínculo de emprego antes negado, fica afastada a multa do Art. 477, § 8º, por existir controvérsia prévia."
      },
      {
        "letter": "D",
        "text": "A Fazenda Pública (União, Estados e Municípios) submete-se normalmente à multa de 50% do Art. 467 da CLT."
      }
    ],
    "correctAnswer": "A",
    "justification": "Art. 467 CLT (+50% sobre verbas incontroversas não pagas na 1ª audiência): não se aplica à Fazenda Pública (parágrafo único) nem à massa falida (Súmula 388 TST), mas aplica-se em caso de revelia (Súmula 69 TST). Art. 477, § 8º (1 salário por atraso > 10 dias): aplica-se mesmo com vínculo reconhecido só em juízo (Súmula 462 TST), salvo culpa do empregado ou massa falida anterior.",
    "whyWrong": [
      {
        "letter": "B",
        "explanation": "O Art. 467 da CLT refere-se exclusivamente à parte INCONTROVERSA das verbas rescisórias não paga à data do comparecimento à Justiça do Trabalho (em caso de revelia na audiência inaugural, porém, as verbas tornam-se incontroversas pela Súmula 69 TST!)."
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 462 do TST, a circunstância de a relação de emprego ter sido reconhecida apenas em juízo NÃO tem o condão de afastar a incidência da multa prevista no Art. 477, § 8º, da CLT (salvo culpa exclusiva do trabalhador no atraso)!"
      },
      {
        "letter": "D",
        "explanation": "O parágrafo único do Art. 467 da CLT exclui expressamente a União, os Estados, o Distrito Federal, os Municípios e suas autarquias e fundações públicas da aplicação da multa de 50% do Art. 467!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 467 e 477, §§ 6º e 8º, da CLT e Súmulas 388 e 462 TST",
        "textSnippet": "Art. 467 CLT (+50% sobre verbas incontroversas não pagas na 1ª audiência): não se aplica à Fazenda Pública (parágrafo único) nem à massa falida (Súmula 388 TST), mas aplica-se em caso de revelia (Súmula 69 TST). Art. 477, § 8º (1 salário por atraso > 10 dias): aplica-se mesmo com vínculo reconhecido só em juízo (Súmula 462 TST), salvo culpa do empregado ou massa falida anterior."
      }
    ],
    "jurisprudence": "Súmulas 69, 388 e 462 do TST",
    "professorTip": "Art. 467 (+50%): só sobre INCONTROVERSAS na 1ª audiência (NÃO vale p/ Fazenda Pública nem Massa Falida)! Art. 477, § 8º (1 salário): vale até se vínculo for reconhecido em juízo (Súmula 462 TST)!"
  },
  {
    "id": "mig_trab_060",
    "exam": "Prova Acadêmica / Graduação em Direito (PUC) - Direito do Trabalho",
    "examType": "FACULDADE",
    "board": "PUC",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Atleta Profissional e Direito de Arena vs. Direito de Imagem (Lei Geral do Esporte)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "ACADEMICA",
    "statement": "Clube de futebol contrata jogador profissional por contrato especial de trabalho desportivo e também ajusta contrato civil de cessão do uso de sua imagem; paralelamente, os direitos de transmissão televisiva dos jogos do campeonato geram receita de Direito de Arena distribuída aos atletas participantes. Qual a natureza jurídica do Direito de Arena e do Direito de Imagem?",
    "options": [
      {
        "letter": "A",
        "text": "O direito de arena repassado aos atletas integra o salário para todos os efeitos trabalhistas, inclusive FGTS e 13º salário."
      },
      {
        "letter": "B",
        "text": "O contrato de trabalho do atleta profissional pode ser celebrado por prazo indeterminado."
      },
      {
        "letter": "C",
        "text": "O jogador profissional de futebol possui direito ao pagamento de aviso prévio se o contrato a termo terminar regularmente."
      },
      {
        "letter": "D",
        "text": "O Direito de Arena (parcela de 5% da receita proveniente da exploração dos direitos desportivos audiovisuais repassada via sindicato aos atletas participantes do espetáculo) possui NATUREZA CIVIL (não salarial — Art. 42, § 1º, Lei 9.615/98 e Art. 160 Lei 14.597/2023, não refletindo em férias/13º/FGTS!); e o Direito de Imagem contratado civilmente também tem natureza civil (desde que limitado legalmente — até 50% da remuneração total pela Lei Geral do Esporte, antiga trava de 40% na Lei Pelé — e não usado como fraude para dissimular salário)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Atleta Profissional (Lei Geral do Esporte 14.597/23): contrato SEMPRE por prazo determinado (3 meses a 5 anos); Direito de Arena (5% transmissão TV via sindicato) = natureza CIVIL; Direito de Imagem = natureza civil até teto de 50% da remuneração total (se fraudar salário, integra).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Tanto a Lei Pelé (após a Lei 12.395/11) quanto a nova Lei Geral do Esporte (Lei 14.597/23) definem expressamente o direito de arena (5% divididos igualmente entre os atletas relacionados) como parcela de NATUREZA CIVIL!"
      },
      {
        "letter": "B",
        "explanation": "O contrato especial de trabalho desportivo tem obrigatoriamente PRAZO DETERMINADO, com vigência nunca inferior a 3 MESES nem superior a 5 ANOS (Art. 86, § 1º, Lei Geral do Esporte)!"
      },
      {
        "letter": "C",
        "explanation": "Por ser contrato especial por prazo determinado com cláusulas indenizatória e compensatória desportivas próprias, não incide aviso prévio no advento do termo final regular."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Lei nº 14.597/2023 (Arts. 86 e 160–164) e Lei nº 9.615/1998 (Art. 42)",
        "textSnippet": "Atleta Profissional (Lei Geral do Esporte 14.597/23): contrato SEMPRE por prazo determinado (3 meses a 5 anos); Direito de Arena (5% transmissão TV via sindicato) = natureza CIVIL; Direito de Imagem = natureza civil até teto de 50% da remuneração total (se fraudar salário, integra)."
      }
    ],
    "professorTip": "Atleta: contrato determinado (3 meses a 5 anos)! Direito de Arena (5% TV) = natureza CIVIL (sem reflexo em FGTS/13º)! Direito de Imagem = até 50% da remuneração (Lei 14.597/23)!"
  },
  {
    "id": "mig_trab_061",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Atividades Insalubres em Jornada 12x36 e Prorrogação em Ambiente Insalubre",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "OFICIAL_OAB",
    "statement": "Hospital firma acordo individual escrito instituindo jornada de 12x36 horas para técnicos de enfermagem expostos a agentes biológicos insalubres (grau médio), sem licença prévia das autoridades do Ministério do Trabalho; ao mesmo tempo, outra empresa exige horas extras habituais diárias (10h/dia em jornada normal) de operário em setor insalubre sem licença do MTE, com base apenas em acordo individual. Ambas as situações são válidas?",
    "options": [
      {
        "letter": "A",
        "text": "A jornada de 12x36 horas em atividades insalubres exige sempre autorização prévia do Ministério do Trabalho sob pena de nulidade."
      },
      {
        "letter": "B",
        "text": "A empregada gestante pode trabalhar normalmente em atividades insalubres em grau mínimo ou médio sem afastamento, desde que a empresa forneça EPI."
      },
      {
        "letter": "C",
        "text": "O acordo individual escrito substitui a licença do MTE para prorrogação de jornada em ambiente insalubre fora do regime 12x36."
      },
      {
        "letter": "D",
        "text": "A jornada 12x36 em ambiente insalubre DISPENSA licença prévia das autoridades competentes do Ministério do Trabalho por autorização expressa do Art. 60, parágrafo único, da CLT (inserido pela Reforma Trabalhista — validado inclusive pelo STF na ADI 5994!); JÁ na jornada ordinária em atividades insalubres, quaisquer prorrogações (inclusive compensação de jornada comum!) só podem ser acordadas mediante LICENÇA PRÉVIA das autoridades competentes (Art. 60, caput, CLT), ou mediante CONVENÇÃO OU ACORDO COLETIVO DE TRABALHO (Art. 611-A, XIII, CLT — jamais por mero acordo individual)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 60 CLT: prorrogação em atividade insalubre exige licença prévia do MTE OU ACT/CCT (Art. 611-A, XIII); EXCEÇÃO = jornada 12x36 dispensa licença prévia (Art. 60, § único). Gestante (ADI 5938 STF): afastamento automático de QUALQUER grau de insalubridade, mantendo salário + adicional!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O parágrafo único do Art. 60 da CLT (inserido pela Lei 13.467/17) excepcionou expressamente a jornada 12x36 da exigência de licença prévia do MTE em atividades insalubres!"
      },
      {
        "letter": "B",
        "explanation": "Atenção à ADI 5938 do STF! O Supremo declarou INCONSTITUCIONAL a expressão da Reforma Trabalhista no Art. 394-A, II e III, da CLT que exigia atestado médico para afastar a gestante da insalubridade média/mínima: hoje, a empregada GESTANTE deve ser afastada AUTOMATICAMENTE de QUALQUER atividade insalubre (máximo, médio ou mínimo), sem prejuízo da remuneração (inclusive adicional de insalubridade)! E a LACTANTE é afastada quando apresentar atestado de saúde recomendando o afastamento!"
      },
      {
        "letter": "C",
        "explanation": "Fora da jornada 12x36, a prorrogação em ambiente insalubre sem licença prévia do MTE só pode ser autorizada por ACT ou CCT (Art. 611-A, XIII, CLT e Súmula 85, VI, TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 60, caput e parágrafo único, da CLT e STF ADI 5938",
        "textSnippet": "Art. 60 CLT: prorrogação em atividade insalubre exige licença prévia do MTE OU ACT/CCT (Art. 611-A, XIII); EXCEÇÃO = jornada 12x36 dispensa licença prévia (Art. 60, § único). Gestante (ADI 5938 STF): afastamento automático de QUALQUER grau de insalubridade, mantendo salário + adicional!"
      }
    ],
    "jurisprudence": "STF ADI 5938 e Súmula 85, VI, TST",
    "professorTip": "12x36 em insalubre = DISPENSA licença do MTE (Art. 60, § único)! Prorrogação comum em insalubre = precisa licença MTE ou ACT/CCT! Gestante (ADI 5938) = afasta de QUALQUER insalubridade mantendo adicional!"
  },
  {
    "id": "mig_trab_062",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Justa Causa - Tipificação de Ato de Improbidade, Desídia, Insubordinação e Indisciplina",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado desobedece reiteradamente a uma regra geral contida no regulamento interno da empresa (proibição de uso de aparelho pessoal na linha de produção), enquanto outro colega desrespeita ordem direta e específica verbal de seu gerente imediato para executar tarefa de sua função. Qual a tipificação exata na justa causa do Art. 482 da CLT?",
    "options": [
      {
        "letter": "A",
        "text": "Desobedecer à ordem direta do chefe caracteriza indisciplina, e violar regra geral do regulamento interno caracteriza insubordinação."
      },
      {
        "letter": "B",
        "text": "Para aplicar justa causa por ato grave de improbidade (furto comprovado), o empregador deve obrigatoriamente aplicar antes advertência e suspensão."
      },
      {
        "letter": "C",
        "text": "O empregador pode aplicar suspensão disciplinar superior a 30 dias consecutivos sem rescindir o contrato."
      },
      {
        "letter": "D",
        "text": "O descumprimento de regra geral/norma impessoal do regulamento da empresa configura INDISCIPLINA, enquanto a desobediência à ordem direta e pessoal do superior hierárquico configura INSUBORDINAÇÃO (ambas no Art. 482, \"h\", CLT); já o ato desonesto que atenta contra o patrimônio (furto, fraude de ponto/atestados) configura IMPROBIDADE (\"a\"), e a repetição de faltas leves/negligência/atrasos reiterados caracteriza DESÍDIA (\"e\")!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Art. 482 CLT: Improbidade (desonestidade/patrimônio); Desídia (negligência reiterada); Indisciplina (norma geral/regulamento); Insubordinação (ordem pessoal/direta). Requisitos: gravidade, atualidade/imediatidade, nexo causal, proporcionalidade, non bis in idem. Art. 474: suspensão > 30 dias seguidos = rescisão injusta pelo empregador!",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "É exatamente o inverso: INDISCIPLINA = regra geral/estatuto/regulamento; INSUBORDINAÇÃO = ordem direta e pessoal do chefe/superior."
      },
      {
        "letter": "B",
        "explanation": "Não existe obrigatoriedade legal absoluta de gradação para faltas gravíssimas (como improbidade ou agressão física): um único ato grave rompe a fidúcia e autoriza a justa causa imediata, exigindo apenas proporcionalidade, atualidade/imediatidade e non bis in idem!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 474 da CLT, a suspensão do empregado por MAIS DE 30 DIAS consecutivos importa na RESCISÃO INJUSTA do contrato de trabalho (equivalente à dispensa sem justa causa)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 482, alíneas \"a\", \"e\" e \"h\", da CLT",
        "textSnippet": "Art. 482 CLT: Improbidade (desonestidade/patrimônio); Desídia (negligência reiterada); Indisciplina (norma geral/regulamento); Insubordinação (ordem pessoal/direta). Requisitos: gravidade, atualidade/imediatidade, nexo causal, proporcionalidade, non bis in idem. Art. 474: suspensão > 30 dias seguidos = rescisão injusta pelo empregador!"
      }
    ],
    "professorTip": "Indisciplina = norma GERAL | Insubordinação = ordem DIRETA | Improbidade = desonestidade | Desídia = preguiça/faltas reiteradas! Suspensão > 30 dias = rescisão injusta (Art. 474)!"
  },
  {
    "id": "mig_trab_063",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Abandono de Emprego e Justa Causa por Embriaguez (Art. 482 CLT / Súmula 32 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado falta injustificadamente por 30 dias consecutivos após cessar seu benefício previdenciário sem retornar ao trabalho nem justificar a ausência; e outro empregado apresenta quadro médico comprovado de alcoolismo crônico fora do serviço. Como o TST trata ambos os casos?",
    "options": [
      {
        "letter": "A",
        "text": "Bastam 15 dias consecutivos de faltas injustificadas para presumir automaticamente o abandono de emprego pela Súmula 32 do TST."
      },
      {
        "letter": "B",
        "text": "A embriaguez habitual decorrente de dependência química alcoólica crônica autoriza justa causa imediata sem encaminhamento previdenciário."
      },
      {
        "letter": "C",
        "text": "Na condenação criminal com pena privativa de liberdade em regime aberto ou com sursis, o empregador pode dispensar por justa causa com base no Art. 482, \"d\"."
      },
      {
        "letter": "D",
        "text": "Pela Súmula 32 do TST, presume-se o ABANDONO DE EMPREGO (Art. 482, \"i\", CLT) se o trabalhador não retornar ao serviço no prazo de 30 DIAS após a cessação do benefício previdenciário nem justificar o motivo de não o fazer (exigindo ânimo de abandonar + ausência prolongada > 30d); quanto à embriaguez habitual (Art. 482, \"f\"), a jurisprudência consolidada do TST entende que o alcoolismo crônico é DOENÇA (CID-10 F10.2), devendo o empregado ser encaminhado ao INSS/tratamento médico em vez de sofrer justa causa imediata (diferente da embriaguez em serviço eventual/episódica)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Abandono de emprego (Art. 482, \"i\"): elemento objetivo (> 30 dias — Súmula 32 TST) + elemento subjetivo (animus abandonandi). Alcoolismo crônico = doença (encaminhar ao INSS). Condenação criminal (Art. 482, \"d\") = exige trânsito em julgado SEM sursis/impossibilidade de trabalhar.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O prazo jurisprudencial consolidado para presunção de abandono de emprego (inclusive na Súmula 32 do TST após alta previdenciária) é de 30 DIAS de ausência injustificada."
      },
      {
        "letter": "B",
        "explanation": "O TST consolida o entendimento de que o alcoolismo crônico é patologia grave que exige tratamento e encaminhamento ao INSS, afastando a justa causa punitiva."
      },
      {
        "letter": "C",
        "explanation": "A justa causa do Art. 482, \"d\", CLT exige condenação criminal PASSADA EM JULGADO, caso NÃO tenha havido suspensão da execução da pena (sursis) ou se a pena inviabilizar o comparecimento ao serviço (regime fechado)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 482, alíneas \"f\" e \"i\", da CLT e Súmula 32 do TST",
        "textSnippet": "Abandono de emprego (Art. 482, \"i\"): elemento objetivo (> 30 dias — Súmula 32 TST) + elemento subjetivo (animus abandonandi). Alcoolismo crônico = doença (encaminhar ao INSS). Condenação criminal (Art. 482, \"d\") = exige trânsito em julgado SEM sursis/impossibilidade de trabalhar."
      }
    ],
    "jurisprudence": "Súmula nº 32 do TST",
    "professorTip": "Abandono de emprego = 30 dias (Súmula 32)! Alcoolismo crônico = doença (NÃO é justa causa automática)! Condenação criminal = trânsito em julgado SEM sursis!"
  },
  {
    "id": "mig_trab_064",
    "exam": "Simulado Carreiras Jurídicas (CEBRASPE) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "CEBRASPE",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Força Maior e Factum Principis (Fato do Príncipe) na Extinção do Contrato",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "O prefeito municipal desapropria ou revoga definitivamente a licença de funcionamento de determinado estabelecimento comercial por ato administrativo de interesse público sem culpa do empregador, paralisando a empresa; paralelamente, outro empregador sofre incêndio inevitável sem culpa sua que extingue o estabelecimento empresarial (força maior). Quem paga as indenizações rescisórias?",
    "options": [
      {
        "letter": "A",
        "text": "Em caso de fato do príncipe (Art. 486 CLT), a pessoa jurídica de direito público responde integralmente por todas as verbas rescisórias, inclusive saldo de salário, férias e 13º."
      },
      {
        "letter": "B",
        "text": "Na força maior que leva à extinção da empresa, o empregador fica isento de pagar qualquer multa sobre o FGTS."
      },
      {
        "letter": "C",
        "text": "A crise econômica financeira decorrente de má gestão ou retração de mercado configura força maior trabalhista para reduzir a multa do FGTS à metade."
      },
      {
        "letter": "D",
        "text": "No FATO DO PRÍNCIPE (factum principis — Art. 486 CLT: paralisação temporária ou definitiva do trabalho motivada por ato de autoridade municipal, estadual ou federal, ou promulgação de lei que impossibilite a continuação da atividade), prevalece o pagamento normal das verbas pelo empregador, MAS a INDENIZAÇÃO (multa do FGTS) ficará a cargo do GOVERNO responsável pelo ato (chamado ao processo na JT em defesa no prazo do § 1º)! Já na FORÇA MAIOR que extingue a empresa/estabelecimento (Arts. 501–502 CLT), a multa indenizatória do FGTS cai pela METADE (20% em vez de 40%)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Factum Principis (Art. 486 CLT): ato de autoridade pública que paralisa a atividade = ente público paga a INDENIZAÇÃO (multa FGTS); patrão paga salários/férias/13º. Força Maior com extinção da empresa (Arts. 501–502): multa FGTS reduz à metade (20%). Risco econômico não é força maior.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Cuidado clássico de prova! No factum principis (Art. 486 CLT), o Poder Público responsável paga APENAS a INDENIZAÇÃO devida (multa fundiária); as demais verbas contratuais (saldo salário, férias, 13º) continuam devidas pelo EMPREGADOR!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 502, II, da CLT c/c Art. 18, § 2º, da Lei 8.036/90, na extinção por força maior (ou culpa recíproca), a multa do FGTS reduz-se à METADE (20%)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 501, §§ 1º e 2º, da CLT, a imprevidência do empregador exclui a razão de força maior, e a crise de mercado insere-se no risco da atividade econômica (alteridade — Art. 2º CLT)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 486, 501 e 502 da CLT",
        "textSnippet": "Factum Principis (Art. 486 CLT): ato de autoridade pública que paralisa a atividade = ente público paga a INDENIZAÇÃO (multa FGTS); patrão paga salários/férias/13º. Força Maior com extinção da empresa (Arts. 501–502): multa FGTS reduz à metade (20%). Risco econômico não é força maior."
      }
    ],
    "professorTip": "Fato do Príncipe (Art. 486): Governo paga SÓ a indenização (multa FGTS), patrão paga o resto! Força Maior que fecha a empresa = multa FGTS pela metade (20%)!"
  },
  {
    "id": "mig_trab_065",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Aviso Prévio - Cumprido em Casa, Reconsideração e Falta Grave no Curso do Aviso",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregador comunica dispensa sem justa causa determinando que o empregado cumpra o aviso prévio trabalhando em casa (\"aviso prévio cumprido em casa\"); em outro contrato, durante o aviso prévio trabalhado, o empregado comete ato de improbidade ou agressão física contra colega. Quais as consequências jurídicas?",
    "options": [
      {
        "letter": "A",
        "text": "O empregador pode reconsiderar unilateralmente o aviso prévio antes de expirado o prazo, obrigando o empregado a retornar ao trabalho."
      },
      {
        "letter": "B",
        "text": "Se o empregado conseguir novo emprego durante o cumprimento do aviso prévio concedido pelo empregador, terá direito a dispensar o cumprimento mas receberá os dias restantes mesmo sem trabalhar."
      },
      {
        "letter": "C",
        "text": "Se o empregado adquirir doença comum ou sofrer acidente de trabalho durante o aviso prévio indenizado ou trabalhado, não há nenhum efeito sobre a data da rescisão."
      },
      {
        "letter": "D",
        "text": "O \"aviso prévio cumprido em casa\" equivale ao aviso prévio INDENIZADO, obrigando o empregador a quitar as verbas rescisórias no prazo de 10 DIAS da notificação da dispensa (OJ 14 da SDI-1 do TST e Art. 477, § 6º, CLT — hoje unificado em 10 dias do término do contrato para ambos!); e se durante o aviso prévio o empregado cometer qualquer falta grave (salvo abandono de emprego!), o empregador pode converter a dispensa em JUSTA CAUSA (Súmula 73 TST), perdendo o empregado o direito ao restante do aviso prévio e às indenizações rescisórias (multa 40%, 13º e férias proporcionais)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Aviso prévio: cumprido em casa = indenizado (OJ 14 SDI-1); reconsideração exige aceitação da outra parte (Art. 489); novo emprego dispensa cumprimento e pagamento dos dias faltantes (Súmula 276); falta grave no aviso (exceto abandono) converte em justa causa (Súmula 73); proporcionalidade de +3d/ano até máx 90d (Lei 12.506/11) beneficia SÓ o empregado (nunca aumenta aviso dado pelo empregado ao pedir demissão).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 489 da CLT, dado o aviso prévio, a rescisão torna-se efetiva depois de expirado o respectivo prazo; se a parte notificante reconsiderar o ato antes de seu termo, à outra parte é FACULTADO aceitar ou não a reconsideração (exige aceitação bilateral)!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 276 do TST, o direito ao aviso prévio é irrenunciável pelo empregado, SALVO se comprovar ter obtido NOVO EMPREGO — caso em que fica dispensado de cumprir os dias restantes, mas o empregador NÃO é obrigado a pagar os dias não trabalhados!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 371 do TST, os efeitos da projeção do aviso prévio indenizado limitam-se às vantagens econômicas (exceto se auxílio-doença comum ocorrer no curso do aviso, caso em que a rescisão se efetiva apenas após expirado o benefício!); já a gestante ou acidentado no aviso prévio adquirem estabilidade (Art. 391-A CLT / Súmula 378 TST)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 489 a 491 da CLT, Súmulas 73 e 276 e OJ 14 SDI-1 TST",
        "textSnippet": "Aviso prévio: cumprido em casa = indenizado (OJ 14 SDI-1); reconsideração exige aceitação da outra parte (Art. 489); novo emprego dispensa cumprimento e pagamento dos dias faltantes (Súmula 276); falta grave no aviso (exceto abandono) converte em justa causa (Súmula 73); proporcionalidade de +3d/ano até máx 90d (Lei 12.506/11) beneficia SÓ o empregado (nunca aumenta aviso dado pelo empregado ao pedir demissão)."
      }
    ],
    "jurisprudence": "Súmulas 73, 276, 371 e OJ 14 SDI-1 do TST",
    "professorTip": "Aviso em casa = indenizado (OJ 14)! Reconsiderar = depende do outro aceitar (Art. 489)! Novo emprego = sai sem cumprir e não ganha os dias restantes (Súmula 276)! Falta grave no aviso = justa causa (Súmula 73)!"
  },
  {
    "id": "mig_trab_066",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Cotas para PcD e Trabalhador Reabilitado - Dispensa Condicionada (Art. 93 Lei 8.213/91)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empresa com 250 empregados dispensa sem justa causa trabalhador contratado dentro da cota legal de Pessoa com Deficiência (PcD), sem contratar previamente substituto em condição semelhante (PcD ou reabilitado). A dispensa é válida?",
    "options": [
      {
        "letter": "A",
        "text": "A obrigatoriedade de preenchimento de cota PcD aplica-se a qualquer empresa com mais de 20 empregados."
      },
      {
        "letter": "B",
        "text": "Mesmo que a empresa mantenha a cota global cumprida ou não, pode demitir empregado PcD imotivadamente sem contratar substituto semelhante."
      },
      {
        "letter": "C",
        "text": "O empregado com deficiência que seja demitido por justa causa grave também depende de contratação prévia de outro PcD antes da rescisão."
      },
      {
        "letter": "D",
        "text": "NÃO! Pelo Art. 93, § 1º, da Lei nº 8.213/1991, a dispensa de pessoa com deficiência ou de beneficiário reabilitado da Previdência Social ao final de contrato por prazo determinado de mais de 90 dias e a dispensa imotivada em contrato por prazo indeterminado SOMENTE poderão ocorrer após a contratação de outro trabalhador com deficiência ou beneficiário reabilitado do INSS (em empresa com >= 100 empregados, nas cotas de 2% a 5%) — sob pena de nulidade da dispensa e REINTEGRAÇÃO (salvo comprovação de esforços frustrados de recrutamento segundo a SDI-1 TST)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Cotas PcD/Reabilitados (Art. 93 Lei 8.213/91): empresas com >= 100 empregados (2% até 200; 3% até 500; 4% até 1000; 5% acima de 1000). Dispensa sem justa causa ou término de prazo > 90d só é válida após contratação de outro PcD/reabilitado (se cota não cumprida), gerando reintegração se descumprida.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Tabela Art. 93 Lei 8.213/91: exige >= 100 empregados: 100–200 (2%); 201–500 (3%); 501–1000 (4%); 1001+ (5%). Abaixo de 100 empregados não há cota obrigatória legal."
      },
      {
        "letter": "B",
        "explanation": "O Art. 93, § 1º, impõe garantia indireta de emprego: a dispensa imotivada de trabalhador PcD/reabilitado exige contratação prévia de substituto em condição análoga (se a cota não estiver excedida)!"
      },
      {
        "letter": "C",
        "explanation": "A restrição do Art. 93, § 1º, aplica-se à dispensa IMOTIVADA (sem justa causa) e ao fim de contrato a termo > 90 dias, NÃO impedindo a dispensa por justa causa nem o pedido de demissão."
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 93 da Lei nº 8.213/1991",
        "textSnippet": "Cotas PcD/Reabilitados (Art. 93 Lei 8.213/91): empresas com >= 100 empregados (2% até 200; 3% até 500; 4% até 1000; 5% acima de 1000). Dispensa sem justa causa ou término de prazo > 90d só é válida após contratação de outro PcD/reabilitado (se cota não cumprida), gerando reintegração se descumprida."
      }
    ],
    "professorTip": "Cota PcD (>= 100 empregados: 2% a 5%): NÃO pode demitir sem justa causa sem contratar outro PcD/reabilitado antes (Art. 93, § 1º, Lei 8.213/91)!"
  },
  {
    "id": "mig_trab_067",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Enquadramento Sindical - Atividade Preponderante e Categoria Diferenciada (Súmula 374 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Metalúrgica contrata motorista empregado para dirigir os caminhões de entrega da fábrica e não participa (nem seu sindicato patronal) da negociação da convenção coletiva celebrada pelo sindicato dos motoristas rodoviários (categoria profissional diferenciada). O motorista tem direito às vantagens da CCT dos motoristas?",
    "options": [
      {
        "letter": "A",
        "text": "Todo empregado de categoria profissional diferenciada (motorista, secretária, técnico de segurança) aplica automaticamente a CCT de seu sindicato mesmo sem participação da empresa."
      },
      {
        "letter": "B",
        "text": "O enquadramento sindical do empregado comum é definido pela função individual que ele exerce dentro da empresa, e não pela atividade econômica do empregador."
      },
      {
        "letter": "C",
        "text": "A contribuição sindical obrigatória anual voltou a ser compulsória para todos os trabalhadores em decorrência do Tema 935 do STF."
      },
      {
        "letter": "D",
        "text": "NÃO! Pela Súmula 374 do TST, o empregado integrante de CATEGORIA PROFISSIONAL DIFERENCIADA NÃO tem o direito de haver de seu empregador vantagens previstas em instrumento coletivo no qual a empresa NÃO foi representada por órgão de classe de sua categoria! Quanto aos demais empregados da empresa, o enquadramento sindical define-se pela atividade econômica PREPONDERANTE do empregador (Art. 581, § 2º, CLT)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Enquadramento sindical = atividade preponderante da empresa (Art. 581, § 2º), salvo categoria diferenciada (Art. 511, § 3º). Súmula 374 TST: categoria diferenciada só recebe benefícios de CCT se a empresa foi representada pelo seu sindicato patronal! STF Tema 935: contribuição assistencial cabe p/ não sindicalizados COM direito de oposição; contribuição sindical (Art. 578) segue facultativa (ADI 5794).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "A Súmula 374 do TST é taxativa: sem representação patronal da empresa (direta em ACT ou pelo seu sindicato patronal na CCT), não se impõe norma coletiva à empresa!"
      },
      {
        "letter": "B",
        "explanation": "No Brasil (Art. 511 c/c Art. 581, § 2º, CLT), a regra geral é o enquadramento pela ATIVIDADE PREPONDERANTE DA EMPRESA — sendo exceção apenas as categorias profissionais diferenciadas (§ 3º)!"
      },
      {
        "letter": "C",
        "explanation": "Distinção essencial do STF! Contribuição SINDICAL (imposto sindical — Art. 578 CLT) continua FACULTATIVA mediante autorização prévia e expressa (ADI 5794 STF)! Já a contribuição ASSISTENCIAL (negocial — Art. 513, \"e\", CLT) foi admitida pelo STF no Tema 935 para todos os trabalhadores da categoria (sindicalizados ou não), desde que prevista em ACT/CCT e garantido o DIREITO DE OPOSIÇÃO!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 511, 570 e 581 da CLT e Súmula 374 do TST",
        "textSnippet": "Enquadramento sindical = atividade preponderante da empresa (Art. 581, § 2º), salvo categoria diferenciada (Art. 511, § 3º). Súmula 374 TST: categoria diferenciada só recebe benefícios de CCT se a empresa foi representada pelo seu sindicato patronal! STF Tema 935: contribuição assistencial cabe p/ não sindicalizados COM direito de oposição; contribuição sindical (Art. 578) segue facultativa (ADI 5794)."
      }
    ],
    "jurisprudence": "Súmula nº 374 do TST e STF Tema 935",
    "professorTip": "Súmula 374 TST: categoria diferenciada só ganha CCT se patrão foi representado! STF Tema 935: Contribuição ASSISTENCIAL = pode p/ todos desde que tenha DIREITO DE OPOSIÇÃO (Sindical segue facultativa)!"
  },
  {
    "id": "mig_trab_068",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Greve no Setor Privado e Interdito Proibitório (Lei nº 7.783/89 e SV 23 STF)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Sindicato de categoria de serviços essenciais (transporte coletivo / energia elétrica / hospital) deflagra greve comunicando empregadores e usuários com apenas 24 horas de antecedência e realizando piquete que bloqueia fisicamente a entrada de clientes e colegas não aderentes. O empregador ajuíza interdito proibitório para desobstruir o acesso. Qual a Justiça competente e a legalidade da greve?",
    "options": [
      {
        "letter": "A",
        "text": "O prazo de aviso prévio de greve em serviços essenciais é de 48 horas, igual ao das demais categorias privadas."
      },
      {
        "letter": "B",
        "text": "A ação possessória (interdito proibitório) proposta pelo empregador privado durante greve para proteger a posse da fábrica é de competência da Justiça Comum Estadual."
      },
      {
        "letter": "C",
        "text": "Durante greve legítima, o empregador pode contratar imediatamente trabalhadores substitutos para ocupar o lugar dos grevistas desde o primeiro dia."
      },
      {
        "letter": "D",
        "text": "A greve é ABUSIVA porque em serviços ou atividades ESSENCIAIS (Art. 10) a comunicação prévia aos empregadores e aos usuários deve ocorrer com antecedência mínima de 72 HORAS (Art. 13 — diferente das 48h das atividades comuns!), além da manutenção obrigatória dos serviços indispensáveis às necessidades inadiáveis da comunidade (Art. 11) e vedação de bloqueio/violência ao livre acesso (Art. 6º, §§ 1º e 3º); e pela Súmula Vinculante nº 23 do STF, a JUSTIÇA DO TRABALHO é competente para processar e julgar ação possessória (interdito proibitório) ajuizada em decorrência do exercício do direito de greve pelos trabalhadores da iniciativa privada!"
      }
    ],
    "correctAnswer": "D",
    "justification": "Lei de Greve (7.783/89): aviso prévio = 48h (comum) / 72h (essencial — empregadores + usuários); greve pacífica suspende contrato (Art. 7º); vedada demissão ou substituição na greve não abusiva; meios pacíficos de persuasão permitidos, bloqueio físico proibido (Art. 6º); SV 23 STF = JT julga interdito proibitório oriundo de greve.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Prazos da Lei 7.783/89: atividades não essenciais = 48h de antecedência aos empregadores; serviços ESSENCIAIS = 72h de antecedência aos empregadores E aos usuários!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula Vinculante nº 23 do STF, ações possessórias decorrentes do exercício do direito de greve na iniciativa privada pertencem à competência da JUSTIÇA DO TRABALHO (Art. 114, II, CF)!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 7º, parágrafo único, da Lei 7.783/89, é VEDADA a rescisão de contrato durante a greve legítima, bem como a contratação de trabalhadores substitutos, SALVO em caso de greve abusiva ou descumprimento da manutenção de serviços essenciais/bens irreparáveis (Art. 9º e 14)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 6º, 7º, 10, 11 e 14 da Lei nº 7.783/1989 e SV 23 STF",
        "textSnippet": "Lei de Greve (7.783/89): aviso prévio = 48h (comum) / 72h (essencial — empregadores + usuários); greve pacífica suspende contrato (Art. 7º); vedada demissão ou substituição na greve não abusiva; meios pacíficos de persuasão permitidos, bloqueio físico proibido (Art. 6º); SV 23 STF = JT julga interdito proibitório oriundo de greve."
      }
    ],
    "jurisprudence": "Súmula Vinculante nº 23 do STF",
    "professorTip": "Greve: aviso 48h (comum) vs 72h (essenciais + usuários)! Proibido substituir ou demitir na greve lícita! SV 23 STF = JT julga interdito proibitório da greve!"
  },
  {
    "id": "mig_trab_069",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Ultratividade das Normas Coletivas (STF ADPF 323) e Negociado sobre Legislado (Tema 1046)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Convenção Coletiva de Trabalho teve vigência fixada de 1º/05/2022 a 30/04/2024 sem renovação posterior até outubro de 2024; paralelamente, outra CCT vigente pactuou redução do intervalo intrajornada de 1h para 40 minutos em troca de benefício de cesta básica e plano médico. As cláusulas da primeira CCT continuam vigentes após abril de 2024? E a redução do intervalo é válida?",
    "options": [
      {
        "letter": "A",
        "text": "Pela Súmula 277 do TST ainda vigente, as cláusulas benéficas de convenção coletiva integram definitivamente os contratos individuais até nova CCT."
      },
      {
        "letter": "B",
        "text": "O prazo máximo de duração de uma convenção ou acordo coletivo de trabalho é de 4 anos."
      },
      {
        "letter": "C",
        "text": "Pelo STF no Tema 1046, qualquer norma coletiva pode suprimir integralmente o pagamento de FGTS, 13º salário, férias e normas de medicina e segurança do trabalho."
      },
      {
        "letter": "D",
        "text": "As cláusulas da CCT expirada NÃO permanecem vigentes! O Art. 614, § 3º, da CLT proíbe expressamente a ULTRATIVIDADE (prazo máximo de vigência de ACT/CCT = 2 anos), e o STF na ADPF 323 julgou INCONSTITUCIONAL a Súmula 277 do TST, afastando qualquer prorrogação automática após o fim da vigência! Já a redução do intervalo intrajornada para 40 minutos por CCT é plenamente VÁLIDA (Art. 611-A, III, CLT — mínimo 30 min — e STF Tema 1046, que valida negociação coletiva que limita/afasta direitos trabalhistas não absolutamente indisponíveis mesmo sem contrapartida explícita individual)!"
      }
    ],
    "correctAnswer": "D",
    "justification": "STF ADPF 323 + Art. 614, § 3º CLT: prazo máximo ACT/CCT = 2 anos; VEDADA ultratividade (Súmula 277 TST cancelada/inconstitucional). STF Tema 1046 + Arts. 611-A/611-B: norma coletiva pode limitar/reduzir direitos disponíveis (ex.: intervalo até 30 min), respeitando patamar civilizatório mínimo (Art. 611-B).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Na ADPF 323 (2022), o STF declarou inconstitucional a Súmula 277 do TST e proibiu a ultratividade das normas coletivas!"
      },
      {
        "letter": "B",
        "explanation": "Pelo Art. 614, § 3º, da CLT, NÃO será permitido estipular duração de convenção coletiva ou acordo coletivo de trabalho superior a 2 ANOS, sendo vedada a ultratividade!"
      },
      {
        "letter": "C",
        "explanation": "O Tema 1046 do STF (e o Art. 611-B da CLT) ressalva expressamente os direitos absolutamente indisponíveis (patamar civilizatório mínimo constitucional: FGTS, 13º, salário mínimo, férias + 1/3, licença-maternidade, normas de saúde, higiene e segurança do trabalho — Art. 611-B, XVII)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 614, § 3º, e Arts. 611-A e 611-B da CLT; STF ADPF 323 e Tema 1046",
        "textSnippet": "STF ADPF 323 + Art. 614, § 3º CLT: prazo máximo ACT/CCT = 2 anos; VEDADA ultratividade (Súmula 277 TST cancelada/inconstitucional). STF Tema 1046 + Arts. 611-A/611-B: norma coletiva pode limitar/reduzir direitos disponíveis (ex.: intervalo até 30 min), respeitando patamar civilizatório mínimo (Art. 611-B)."
      }
    ],
    "jurisprudence": "STF ADPF 323 e Tema 1046",
    "professorTip": "ADPF 323 STF: FIM da ultratividade (Súmula 277 derrubada)! Teto de vigência ACT/CCT = 2 ANOS! Tema 1046 = Negociado vale sobre legislado (respeitando Art. 611-B)!"
  },
  {
    "id": "mig_trab_070",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Comissões de Conciliação Prévia (CCP) e Termo de Quitação Anual (Art. 507-B CLT)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado busca ajuizar reclamação trabalhista diretamente na Vara do Trabalho sem submeter previamente sua demanda à Comissão de Conciliação Prévia (CCP) existente no sindicato; e em outro caso, empregado ativo assina Termo de Quitação Anual de obrigações trabalhistas perante o sindicato dos empregados. Qual a validade de ambos?",
    "options": [
      {
        "letter": "A",
        "text": "A submissão da demanda à Comissão de Conciliação Prévia é pressuposto processual obrigatório de admissibilidade da reclamação trabalhista onde houver CCP."
      },
      {
        "letter": "B",
        "text": "O Termo de Quitação Anual do Art. 507-B da CLT pode ser validamente homologado apenas entre empregador e empregado na empresa sem assistência sindical."
      },
      {
        "letter": "C",
        "text": "A reclamação trabalhista pode ser ajuizada DIRETAMENTE na Justiça do Trabalho! O STF (ADIs 2139 e 2160) conferiu interpretação conforme ao Art. 625-D da CLT tornando FACULTATIVA (não obrigatória) a passagem prévia pela CCP (garantia da inafastabilidade da jurisdição)! Quanto ao Termo de Quitação Anual (Art. 507-B CLT), é facultado na vigência ou não do contrato firmar termo perante o SINDICATO DOS EMPREGADOS da categoria discriminando as obrigações de dar e fazer cumpridas mensalmente, com eficácia liberatória das parcelas nele especificadas!"
      },
      {
        "letter": "D",
        "text": "O termo de conciliação firmado na CCP possui eficácia liberatória parcial e nunca constitui título executivo."
      }
    ],
    "correctAnswer": "C",
    "justification": "CCP (Arts. 625-A e ss.): passagem facultativa (ADIs 2139/2160); acordo na CCP = título executivo extrajudicial (eficácia liberatória geral salvo ressalvas); provocação da CCP suspende o prazo prescricional (Art. 625-G). Termo de Quitação Anual (Art. 507-B) = firmado perante o SINDICATO dos empregados, libera parcelas discriminadas.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O STF (ADIs 2139, 2160 e 2237) decidiu que a passagem pela CCP é meramente FACULTATIVA."
      },
      {
        "letter": "B",
        "explanation": "O Art. 507-B da CLT exige obrigatoriamente que o Termo de Quitação Anual seja firmado perante o SINDICATO dos empregados da categoria!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 625-E, parágrafo único, da CLT, o termo de conciliação na CCP é TÍTULO EXECUTIVO EXTRAJUDICIAL (executado na Justiça do Trabalho — Art. 876 CLT) e tem eficácia liberatória geral, EXCETO quanto às parcelas expressamente ressalvadas!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 507-B e 625-A a 625-H da CLT e STF ADIs 2139 e 2160",
        "textSnippet": "CCP (Arts. 625-A e ss.): passagem facultativa (ADIs 2139/2160); acordo na CCP = título executivo extrajudicial (eficácia liberatória geral salvo ressalvas); provocação da CCP suspende o prazo prescricional (Art. 625-G). Termo de Quitação Anual (Art. 507-B) = firmado perante o SINDICATO dos empregados, libera parcelas discriminadas."
      }
    ],
    "jurisprudence": "STF ADIs 2139 e 2160",
    "professorTip": "CCP = FACULTATIVA (STF) e suspende prescrição (625-G)! Termo na CCP = título executivo extrajudicial! Quitação Anual (Art. 507-B) = exige SINDICATO dos empregados!"
  },
  {
    "id": "mig_trab_071",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Proteção à Amamentação (Art. 396 CLT) e Intervalo da Mulher (Art. 384 Revogado)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregada lactante retorna ao trabalho após a licença-maternidade quando seu filho está com 4 meses de idade e necessita amamentá-lo durante o expediente; em outra ação, empregada pleiteia o intervalo de 15 minutos antes de iniciar horas extras (antigo Art. 384 CLT) relativo a contrato executado integralmente em 2023. Quais são os direitos aplicáveis?",
    "options": [
      {
        "letter": "A",
        "text": "A empregada lactante tem direito a apenas 1 intervalo diário de 30 minutos até o filho completar 1 ano de idade."
      },
      {
        "letter": "B",
        "text": "O intervalo de 15 minutos do Art. 384 da CLT antes das horas extras da mulher continua obrigatório em 2023 e 2024 por decisão do STF no Tema 528."
      },
      {
        "letter": "C",
        "text": "Para amamentar o filho (inclusive advindo de adoção!), até que complete 6 MESES de idade (prorrogável se exigir a saúde do filho), a mulher tem direito, durante a jornada de trabalho, a 2 (dois) descansos especiais de MEIA HORA (30 minutos) CADA UM, cujos horários são definidos em acordo individual entre a mulher e o empregador (Art. 396, §§ 1º e 2º, CLT)! Já o intervalo de 15 minutos antes das horas extras (antigo Art. 384 CLT) foi REVOGADO pela Reforma Trabalhista (11/11/2017) — o STF no RE 658.312 (Tema 528) manteve a constitucionalidade do Art. 384 APENAS para contratos/períodos anteriores à revogação pela Lei 13.467/2017!"
      },
      {
        "letter": "D",
        "text": "O empregador pode exigir da empregada mulher força muscular contínua de até 40 quilos e trabalho eventual de até 50 quilos."
      }
    ],
    "correctAnswer": "C",
    "justification": "Amamentação (Art. 396 CLT): 2 descansos de 30 min/dia durante a jornada até 6 meses (horários combinados por acordo individual). Art. 384 CLT (15 min antes da HE da mulher) = revogado pela Lei 13.467/17 (só devido até 10/11/2017 — STF Tema 528). Peso máximo mulher (Art. 390) = 20 kg contínuo / 25 kg ocasional.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Art. 396 CLT: são DOIS descansos especiais de MEIA HORA cada um durante a jornada, até o filho completar 6 MESES (podendo ser dilatado se a saúde do filho exigir)!"
      },
      {
        "letter": "B",
        "explanation": "A Lei nº 13.467/2017 REVOGOU expressamente o Art. 384 da CLT a partir de 11/11/2017: o STF no Tema 528 validou o Art. 384 apenas até a entrada em vigor da Reforma Trabalhista!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 390 da CLT, é vedado empregar a mulher em serviço que demande força muscular superior a 20 QUILOS para trabalho contínuo ou 25 QUILOS para trabalho ocasional (salvo remoção por impulsão/tração de vagonetes/carros de mão)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 384 (revogado), 390, 396 e 401 da CLT e STF RE 658.312",
        "textSnippet": "Amamentação (Art. 396 CLT): 2 descansos de 30 min/dia durante a jornada até 6 meses (horários combinados por acordo individual). Art. 384 CLT (15 min antes da HE da mulher) = revogado pela Lei 13.467/17 (só devido até 10/11/2017 — STF Tema 528). Peso máximo mulher (Art. 390) = 20 kg contínuo / 25 kg ocasional."
      }
    ],
    "jurisprudence": "STF Tema 528 (RE 658.312)",
    "professorTip": "Amamentação = 2 pausas de 30 min até 6 meses (Art. 396)! Art. 384 (15 min pré-HE mulher) = REVOGADO pela Reforma (Tema 528 só até 11/2017)! Peso mulher = 20kg / 25kg!"
  },
  {
    "id": "mig_trab_072",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Câmaras Frigoríficas e Movimentação Térmica (Art. 253 CLT e Súmula 438 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado trabalha continuamente dentro de câmara frigorífica artificialmente fria de abatedouro avícola, ou entra e sai frequentemente de ambiente artificialmente frio para o quente com temperatura abaixo da zona climática de conforto, sem usufruir pausa térmica. Qual o intervalo legal devido?",
    "options": [
      {
        "letter": "A",
        "text": "O intervalo de recuperação térmica de 20 minutos a cada 1h40 não é computado na jornada nem remunerado como trabalho efetivo."
      },
      {
        "letter": "B",
        "text": "A Súmula 438 do TST restringiu o direito à pausa do Art. 253 exclusivamente ao empregado que labora trancado dentro da câmara frigorífica fechada."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 253 da CLT e Súmula 438 do TST, os empregados que trabalham no interior de câmaras frigoríficas ou movimentam mercadorias de ambiente quente/normal para frio e vice-versa têm direito a uma PAUSA DE 20 MINUTOS DE REPOUSO A CADA 1 HORA E 40 MINUTOS de trabalho contínuo — computado esse intervalo como de TRABALHO EFETIVO para todos os efeitos (incluindo quem trabalha em ambiente artificialmente frio fora da câmara propriamente dita — Súmula 438 TST)!"
      },
      {
        "letter": "D",
        "text": "Os digitadores e operadores de telemarketing possuem exatamente o mesmo intervalo de 20 minutos a cada 1h40."
      }
    ],
    "correctAnswer": "C",
    "justification": "Intervalos especiais computados na jornada: (1) Frigorífico / ambiente artificialmente frio (Art. 253 CLT + Súmula 438 TST) = 20 min a cada 1h40; (2) Digitação / mecanografia (Art. 72 CLT + Súmula 346 TST) = 10 min a cada 90 min; (3) Minas subsolo (Art. 298 CLT) = 15 min a cada 3 horas (jornada de 6h/36h).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo próprio caput do Art. 253 da CLT, a pausa de 20 minutos após 1h40 de trabalho contínuo É COMPUTADA COMO DE TRABALHO EFETIVO (remunerada)!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 438 do TST, o empregado submetido a trabalho contínuo em ambiente artificialmente frio (abaixo de 15ºC / 12ºC / 10ºC conforme mapa oficial da zona climática), ainda que NÃO labore em câmara frigorífica, tem direito ao intervalo de 20 min a cada 1h40!"
      },
      {
        "letter": "D",
        "explanation": "Para serviços permanentes de mecanografia/digitação (Art. 72 CLT e Súmula 346 TST), o intervalo é de 10 MINUTOS DE REPOUSO A CADA 90 MINUTOS trabalhados (também sem dedução da jornada); e nas minas de subsolo (Art. 298 CLT), 15 minutos a cada 3 horas!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 253 da CLT e Súmula 438 do TST",
        "textSnippet": "Intervalos especiais computados na jornada: (1) Frigorífico / ambiente artificialmente frio (Art. 253 CLT + Súmula 438 TST) = 20 min a cada 1h40; (2) Digitação / mecanografia (Art. 72 CLT + Súmula 346 TST) = 10 min a cada 90 min; (3) Minas subsolo (Art. 298 CLT) = 15 min a cada 3 horas (jornada de 6h/36h)."
      }
    ],
    "jurisprudence": "Súmulas 346 e 438 do TST",
    "professorTip": "Frio/Frigorífico (Art. 253 / Súmula 438) = 20 min a cada 1h40 (conta na jornada)! Digitação (Art. 72 / Súmula 346) = 10 min a cada 90 min! Subsolo = 15 min a cada 3h!"
  },
  {
    "id": "mig_trab_073",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Prescrição em Ação Meramente Declaratória e Prescrição Intercorrente (Art. 11 e 11-A CLT)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Ex-empregado dispensado em 2018 ajuíza em 2024 ação trabalhista postulando: (I) apenas o reconhecimento declaratório do vínculo de emprego de 2015–2018 para fins de contagem de tempo previdenciário no INSS; e (II) cobrança das diferenças de horas extras daquele período. Ademais, em processo de execução arquivado provisoriamente após a Reforma Trabalhista, o exequente deixa de cumprir determinação judicial por 3 anos. O que prescreve?",
    "options": [
      {
        "letter": "A",
        "text": "A ação declaratória de vínculo de emprego para fins de prova junto à Previdência Social prescreve em 2 anos após o término do contrato."
      },
      {
        "letter": "B",
        "text": "A prescrição intercorrente na execução trabalhista é de 5 anos e nunca pode ser pronunciada de ofício pelo juiz."
      },
      {
        "letter": "C",
        "text": "A pretensão meramente DECLARATÓRIA de vínculo empregatício (para fins de anotação na CTPS/INSS) é IMPRESCRITÍVEL (Art. 11, § 1º, CLT); porém, a cobrança condenatória das diferenças de horas extras está PRESCRITA (passaram mais de 2 anos da extinção do contrato — Art. 7º, XXIX, CF); e na execução, após a Reforma Trabalhista (Art. 11-A CLT), ocorre a PRESCRIÇÃO INTERCORRENTE no prazo de 2 ANOS quando o exequente deixa de cumprir determinação judicial no curso da execução (podendo ser declarada inclusive DE OFÍCIO em qualquer grau de jurisdição — superando a Súmula 114 do TST)!"
      },
      {
        "letter": "D",
        "text": "No protesto interruptivo de prescrição ou em demanda trabalhista arquivada por ausência do reclamante, a interrupção só alcança os pedidos expressamente idênticos e pode ocorrer ilimitadas vezes."
      }
    ],
    "correctAnswer": "C",
    "justification": "Prescrição Trabalhista: Bienal (2a pós-término) e Quinquenal (5a retroativos do ajuizamento — Súmula 308 TST). Declaratória p/ CTPS/INSS (Art. 11, § 1º) = IMPRESCRITÍVEL. Alteração por ato único de parcela não assegurada em lei = prescrição TOTAL (Art. 11, § 2º / Súmula 294 TST). Prescrição Intercorrente (Art. 11-A) = 2 anos, inclusive de ofício.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pelo Art. 11, § 1º, da CLT, o disposto sobre prescrição bienal/quinquenal NÃO se aplica às ações que tenham por objeto anotações para fins de prova junto à Previdência Social (pretensão meramente declaratória é imprescritível!)."
      },
      {
        "letter": "B",
        "explanation": "O Art. 11-A da CLT fixou a prescrição intercorrente em 2 ANOS (contados de quando o exequente descumpre determinação judicial na execução) e permitiu sua declaração DE OFÍCIO em qualquer grau (§ 2º)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 11, § 3º, da CLT, a interrupção da prescrição somente ocorrerá pelo ajuizamento de reclamação trabalhista (mesmo arquivada) SOMENTE em relação aos pedidos IDÊNTICOS (Súmula 268 TST), contando-se os 2 anos da data do trânsito em julgado da decisão de arquivamento — e para protesto judicial também há regra de unicidade (Art. 202 CC)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 11, § 1º, e 11-A da CLT e Súmulas 114 e 327 STF/TST",
        "textSnippet": "Prescrição Trabalhista: Bienal (2a pós-término) e Quinquenal (5a retroativos do ajuizamento — Súmula 308 TST). Declaratória p/ CTPS/INSS (Art. 11, § 1º) = IMPRESCRITÍVEL. Alteração por ato único de parcela não assegurada em lei = prescrição TOTAL (Art. 11, § 2º / Súmula 294 TST). Prescrição Intercorrente (Art. 11-A) = 2 anos, inclusive de ofício."
      }
    ],
    "jurisprudence": "Súmulas 268, 294 e 308 do TST",
    "professorTip": "Declaratória p/ INSS/CTPS = IMPRESCRITÍVEL (Art. 11, § 1º)! Prescrição Intercorrente = 2 ANOS e pode DE OFÍCIO (Art. 11-A)! Ato único não previsto em lei = prescrição TOTAL (Art. 11, § 2º)!"
  },
  {
    "id": "mig_trab_074",
    "exam": "Simulado Carreiras Jurídicas (FCC) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "FCC",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho aos Domingos e Feriados, Repouso Semanal Remunerado (RSR) e Comércio",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Vendedor do comércio varejista trabalha em feriado nacional sem folga compensatória e também trabalha 7 dias seguidos na mesma semana sem concessão de repouso semanal remunerado dentro do ciclo semanal (concedendo a folga apenas no 8º dia). Como se calculam os pagamentos pela jurisprudência do TST?",
    "options": [
      {
        "letter": "A",
        "text": "Trabalhar 7 dias consecutivos e folgar apenas no 8º dia é válido desde que o empregador conceda duas folgas na semana seguinte."
      },
      {
        "letter": "B",
        "text": "O trabalho prestado em feriado nacional não compensado enseja adicional de apenas 50% (igual a hora extra comum)."
      },
      {
        "letter": "C",
        "text": "Pela Súmula 146 do TST, o trabalho prestado em domingos e feriados NÃO compensado deve ser pago EM DOBRO (+100% sobre o dia normal), sem prejuízo da remuneração relativa ao repouso semanal; além disso, pela OJ 410 da SDI-1 do TST, viola o Art. 7º, XV, da CF a concessão de repouso semanal remunerado após o sétimo dia consecutivo de trabalho, importando no seu pagamento EM DOBRO; e no comércio em geral (Art. 6º, parágrafo único, Lei 10.101/2000), o repouso semanal remunerado deverá coincidir, pelo menos UMA VEZ no período máximo de TRÊS semanas, com o domingo (para trabalho da mulher em geral, Art. 386 CLT / STF reconheceu escala quinzenal — a cada 2 semanas — ou conforme setor!)."
      },
      {
        "letter": "D",
        "text": "O trabalho no comércio varejista em feriados pode ser imposto unilateralmente pelo empregador sem autorização em convenção coletiva."
      }
    ],
    "correctAnswer": "C",
    "justification": "RSR (Lei 605/49): preferencialmente aos domingos (Art. 7º, XV, CF); folga só após 7º dia seguido = paga em dobro (OJ 410 SDI-1); trabalho em domingo/feriado não compensado = em dobro (Súmula 146 TST); comércio aos domingos = 1 domingo a cada 3 semanas (Art. 6º Lei 10.101/00); comércio em feriados = exige CCT + lei municipal (Art. 6º-A).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela OJ 410 da SDI-1 do TST, o repouso semanal deve ser concedido dentro de no máximo 6 dias trabalhados (no máximo até o 7º dia): folgar só após o 7º dia consecutivo gera pagamento em dobro desse RSR!"
      },
      {
        "letter": "B",
        "explanation": "Pela Súmula 146 do TST e Art. 9º da Lei 605/49, trabalho em domingo ou feriado sem folga compensatória paga-se EM DOBRO (adicional de 100%)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 6º-A da Lei nº 10.101/2000, é permitido o trabalho em FERIADOS nas atividades do comércio em geral, desde que autorizado em CONVENÇÃO COLETIVA DE TRABALHO e observada a legislação municipal!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 7º, XV, CF, Lei nº 605/1949, Lei nº 10.101/2000 e Súmula 146 e OJ 410 TST",
        "textSnippet": "RSR (Lei 605/49): preferencialmente aos domingos (Art. 7º, XV, CF); folga só após 7º dia seguido = paga em dobro (OJ 410 SDI-1); trabalho em domingo/feriado não compensado = em dobro (Súmula 146 TST); comércio aos domingos = 1 domingo a cada 3 semanas (Art. 6º Lei 10.101/00); comércio em feriados = exige CCT + lei municipal (Art. 6º-A)."
      }
    ],
    "jurisprudence": "Súmula 146 e OJ 410 SDI-1 do TST",
    "professorTip": "Domingo/feriado não compensado = EM DOBRO (Súmula 146)! Folga só no 8º dia = RSR em DOBRO (OJ 410)! Comércio em feriados = exige CCT (Art. 6º-A Lei 10.101/00)!"
  },
  {
    "id": "mig_trab_075",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Estabilidade Pré-Aposentadoria, Dano Existencial e Desvio/Acúmulo de Função",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Auxiliar administrativo passa a desempenhar, dentro da mesma jornada de trabalho, pequenas tarefas correlatas compatíveis com sua condição pessoal além de suas atividades originais, sem qualquer pactuação de acréscimo salarial; paralelamente, outro empregado é submetido a jornadas exaustivas diárias de 14 horas por anos seguidos, ficando privado do convívio familiar e social. O que decide o TST?",
    "options": [
      {
        "letter": "A",
        "text": "Qualquer tarefa acessória atribuída ao empregado além da descrição estrita de seu cargo gera automaticamente adicional salarial de 40% por acúmulo de função."
      },
      {
        "letter": "B",
        "text": "A estabilidade pré-aposentadoria prevista na CLT impede qualquer empresa brasileira de demitir empregado nos últimos 24 meses anteriores à aposentadoria."
      },
      {
        "letter": "C",
        "text": "Pelo Art. 456, parágrafo único, da CLT, à falta de prova ou inexistindo cláusula expressa a tal respeito, entender-se-á que o empregado se obrigou a TODO E QUALQUER SERVIÇO COMPATÍVEL COM A SUA CONDIÇÃO PESSOAL (logo, pequenas tarefas correlatas na mesma jornada NÃO geram acúmulo de função nem adicional salarial — só há acúmulo ou desvio quando exigidas tarefas totalmente alheias/mais complexas que rompem o equilíbrio contratual!); já a exigência habitual de jornadas exaustivas que anulam o convívio familiar, descanso e lazer do trabalhador configura DANO EXISTENCIAL (embora a jurisprudência do TST exija demonstração do prejuízo concreto ao projeto de vida/convívio, não bastando mero inadimplemento eventual de horas extras)!"
      },
      {
        "letter": "D",
        "text": "O mero descumprimento pontual de horas extras ou atraso salarial de 5 dias gera automaticamente dano existencial in re ipsa."
      }
    ],
    "correctAnswer": "C",
    "justification": "Art. 456, § único CLT: ausência de cláusula = obriga-se a todo serviço compatível com condição pessoal dentro da jornada. Estabilidade pré-aposentadoria = só se houver ACT/CCT/regulamento. Dano existencial = privação crônica do projeto de vida/lazer/família por jornada extenuante habitual.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 456, parágrafo único, da CLT presume que, na mesma jornada e compatível com a condição pessoal do trabalhador, a execução de tarefas acessórias compõe o contrato sem plus salarial automático."
      },
      {
        "letter": "B",
        "explanation": "Atenção: NÃO existe estabilidade pré-aposentadoria prevista na CLT ou na Constituição! A estabilidade pré-aposentadoria existe APENAS quando expressamente prevista em CONVENÇÃO OU ACORDO COLETIVO (ou regulamento interno) da categoria!"
      },
      {
        "letter": "D",
        "explanation": "O TST distingue horas extras eventuais (reparadas com adicional de 50%) do dano existencial (que pressupõe jornada extenuante reiterada capaz de comprometer concretamente o convívio social/familiar ou projeto de vida)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 456, parágrafo único, CLT e Jurisprudência do TST",
        "textSnippet": "Art. 456, § único CLT: ausência de cláusula = obriga-se a todo serviço compatível com condição pessoal dentro da jornada. Estabilidade pré-aposentadoria = só se houver ACT/CCT/regulamento. Dano existencial = privação crônica do projeto de vida/lazer/família por jornada extenuante habitual."
      }
    ],
    "professorTip": "Art. 456, § único = serviço compatível na mesma jornada NÃO gera acúmulo automático! Estabilidade pré-aposentadoria = SÓ existe se prevista em ACT/CCT!"
  },
  {
    "id": "mig_trab_076",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Descontos por Quebra de Caixa, Danos e Vale-Transporte / Salário-Família / 13º Salário",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Bancário ou operador de caixa recebe mensalmente a parcela \"quebra de caixa\"; em outro caso, empregador fornece vale-transporte e desconta 8% do salário-base do empregado; e por fim, empregado é demitido por justa causa em novembro antes do pagamento da 2ª parcela do 13º salário. Quais são as regras legais corretas?",
    "options": [
      {
        "letter": "A",
        "text": "A parcela \"quebra de caixa\" tem natureza meramente indenizatória e nunca integra o salário para cálculo de férias, 13º e FGTS."
      },
      {
        "letter": "B",
        "text": "O empregador pode descontar até 10% do salário do empregado para custear o vale-transporte fornecido."
      },
      {
        "letter": "C",
        "text": "A parcela \"quebra de caixa\" paga habitualmente tem NATUREZA SALARIAL e integra a remuneração do empregado para todos os efeitos (Súmula 247 TST); o vale-transporte custeado pelo empregado limita-se ao máximo de 6% de seu salário básico/vencimento (Art. 4º, parágrafo único, Lei 7.418/85 — o empregador arca com o excedente, e o benefício tem natureza NÃO salarial); e na dispensa POR JUSTA CAUSA, o empregado PERDE o direito ao 13º salário proporcional do ano (Art. 3º da Lei 4.090/62 — devendo inclusive devolver/compensar eventual 1ª parcela adiantada no TRCT até o limite de 1 mês de remuneração)!"
      },
      {
        "letter": "D",
        "text": "O vale-transporte pago em dinheiro diretamente no contracheque por liberalidade continua isento de natureza salarial e de encargos."
      }
    ],
    "correctAnswer": "C",
    "justification": "Quebra de caixa = natureza salarial (Súmula 247 TST). Vale-transporte = não salarial; desconto máximo = 6% do salário-base. 13º salário (Leis 4.090/62 e 4.749/65): 1ª parcela entre fev e 30 nov (50%); 2ª parcela até 20 dez; perde 13º proporcional na justa causa; fração >= 15 dias no mês conta 1/12.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela Súmula 247 do TST, a parcela paga aos bancários ou caixas sob a denominação \"quebra de caixa\" possui natureza SALARIAL, integrando o salário para todos os efeitos legais."
      },
      {
        "letter": "B",
        "explanation": "O teto legal de participação do empregado no vale-transporte é de exatamente 6% sobre o seu salário-base (excluídos adicionais e vantagens — Art. 4º, parágrafo único, Lei 7.418/85)!"
      },
      {
        "letter": "D",
        "explanation": "O vale-transporte deve ser fornecido em vales/cartão (Lei 7.418/85): se pago habitualmente EM DINHEIRO sem previsão coletiva específica, a jurisprudência tende a manter natureza indenizatória em alguns julgados se comprovada a destinação ao transporte, mas a regra legal do Art. 5º do Decreto 10.854/21 veda substituição em pecúnia salvo falta de vale/emergência!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Súmula 247 TST, Lei nº 7.418/1985 (Art. 4º) e Leis nº 4.090/62 e 8.213/91",
        "textSnippet": "Quebra de caixa = natureza salarial (Súmula 247 TST). Vale-transporte = não salarial; desconto máximo = 6% do salário-base. 13º salário (Leis 4.090/62 e 4.749/65): 1ª parcela entre fev e 30 nov (50%); 2ª parcela até 20 dez; perde 13º proporcional na justa causa; fração >= 15 dias no mês conta 1/12."
      }
    ],
    "jurisprudence": "Súmula nº 247 do TST",
    "professorTip": "Quebra de caixa = SALARIAL (Súmula 247 TST)! Vale-transporte = desconto máx 6% do salário-base! Justa causa = PERDE 13º proporcional (1ª parcela adiantada pode compensar)!"
  },
  {
    "id": "mig_trab_077",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Trabalho Portuário Avulso, Cooperativas (Lei 12.690/12) e Terceirização na Administração (Tema 246 / 1118)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Trabalhador avulso portuário intermedia suas fainas pelo OGMO (Órgão Gestor de Mão de Obra) e busca isonomia com o trabalhador com vínculo permanente; paralelamente, trabalhador terceirizado de empresa privada contratada por Município mediante licitação reclama verbas rescisórias inadimplidas contra o ente público. Quais as regras constitucionais e do STF?",
    "options": [
      {
        "letter": "A",
        "text": "A Administração Pública responde objetiva e automaticamente de forma subsidiária pelo simples inadimplemento das verbas trabalhistas pela empresa terceirizada."
      },
      {
        "letter": "B",
        "text": "O trabalhador avulso portuário não tem direito a férias nem a 13º salário nem a FGTS por não possuir vínculo de emprego."
      },
      {
        "letter": "C",
        "text": "A Constituição garante IGUALDADE DE DIREITOS entre o trabalhador com vínculo empregatício permanente e o trabalhador avulso (Art. 7º, XXXIV, CF), respondendo o OGMO solidariamente com o operador portuário pela remuneração devida (Art. 33, § 2º, Lei 12.815/13); já na terceirização pela Administração Pública (Art. 71, § 1º, Lei 8.666/93 e Art. 121, § 2º, Lei 14.133/2021 c/c Súmula 331, V, TST e STF Tema 246), o inadimplemento da contratada NÃO transfere automaticamente a responsabilidade ao ente público — a responsabilidade subsidiária do ente público exige comprovação de CULPA IN VIGILANDO (omissão na fiscalização do contrato)!"
      },
      {
        "letter": "D",
        "text": "Nas cooperativas de trabalho reguladas pela Lei nº 12.690/2012, os sócios cooperados estão sujeitos à subordinação hierárquica da tomadora como regra lícita."
      }
    ],
    "correctAnswer": "C",
    "justification": "Avulso (OGMO — Art. 7º, XXXIV, CF): igualdade de direitos com empregado permanente; OGMO + operador portuário têm responsabilidade solidária pela remuneração. Terceirização na Administração (Tema 246 / Art. 121, § 2º Lei 14.133/21): subsidiária SÓ com culpa comprovada na fiscalização.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Tanto na ADC 16 quanto no Tema 246 (e Súmula 331, V, TST), o STF vedou a responsabilidade automática do Poder Público: exige-se prova de falha na fiscalização (culpa in vigilando — observada a nova Lei 14.133/21, Art. 121, § 2º, em obras/serviços contínuos com dedicação exclusiva de mão de obra)!"
      },
      {
        "letter": "B",
        "explanation": "O Art. 7º, XXXIV, da CF assegura igualdade plena de direitos entre o trabalhador avulso e o empregado permanente (incluindo férias+1/3, 13º, FGTS e adicionais)!"
      },
      {
        "letter": "D",
        "explanation": "Na cooperativa autêntica (Art. 442, § único CLT e Lei 12.690/12), vigora dupla qualidade e autogestão (proibida fraude para mascarar subordinação de empregados, o que gera vínculo direto com o tomador pelo Art. 9º CLT)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 7º, XXXIV, CF, Lei nº 12.815/2013, Lei nº 12.690/2012 e STF Tema 246",
        "textSnippet": "Avulso (OGMO — Art. 7º, XXXIV, CF): igualdade de direitos com empregado permanente; OGMO + operador portuário têm responsabilidade solidária pela remuneração. Terceirização na Administração (Tema 246 / Art. 121, § 2º Lei 14.133/21): subsidiária SÓ com culpa comprovada na fiscalização."
      }
    ],
    "jurisprudence": "STF ADC 16, Tema 246 e Súmula 331, V, TST",
    "professorTip": "Avulso = IGUALDADE de direitos com permanente (Art. 7º, XXXIV, CF)! Terceirização na Adm. Pública = subsidiária NÃO é automática (exige culpa na fiscalização — Tema 246)!"
  },
  {
    "id": "mig_trab_078",
    "exam": "Simulado Carreiras Jurídicas (VUNESP) - Direito do Trabalho",
    "examType": "CONCURSO",
    "board": "VUNESP",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Suspensão do Contrato para Qualificação Profissional (Lay-Off - Art. 476-A CLT)",
    "difficulty": "Difícil",
    "difficultyLevel": 3,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Indústria automotiva enfrenta forte queda de vendas e propõe suspender temporariamente os contratos de trabalho de parte de sua linha de produção por 4 meses para participação em curso ou programa de qualificação profissional (lay-off). Quais os requisitos legais obrigatórios do Art. 476-A da CLT?",
    "options": [
      {
        "letter": "A",
        "text": "O lay-off (Art. 476-A CLT) pode ser imposto unilateralmente pelo empregador por até 12 meses sem negociação coletiva."
      },
      {
        "letter": "B",
        "text": "Durante o lay-off, o empregador continua obrigado a pagar integralmente o salário mensal com FGTS e 13º."
      },
      {
        "letter": "C",
        "text": "A suspensão do contrato para qualificação profissional (lay-off — Art. 476-A CLT) tem duração de 2 a 5 MESES, exige previsão em CONVENÇÃO OU ACORDO COLETIVO DE TRABALHO, aquiescência FORMAL (expressa) do empregado e notificação ao respectivo sindicato com antecedência mínima de 15 DIAS antes da suspensão! Se o empregado for dispensado durante a suspensão ou nos 3 MESES subsequentes ao retorno, o empregador pagará multa prevista em norma coletiva de no MÍNIMO 100% sobre a última remuneração mensal (além das parcelas rescisórias)!"
      },
      {
        "letter": "D",
        "text": "O contrato pode ser suspenso novamente para qualificação profissional do mesmo empregado após 6 meses do término da primeira suspensão."
      }
    ],
    "correctAnswer": "C",
    "justification": "Lay-Off (Art. 476-A CLT): prazo 2 a 5 meses; exige ACT/CCT + concordância formal do empregado + aviso ao sindicato >= 15 dias; trabalhador recebe bolsa do FAT (+ ajuda compensatória facultativa sem natureza salarial); vedada nova suspensão antes de 16 meses; dispensa durante ou até 3 meses após retorno = multa mínima de 100% da última remuneração.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Requisitos cumulativos do Art. 476-A CLT: prazo de 2 a 5 meses; ACT ou CCT obrigatório; concordância formal do empregado; notificação prévia ao sindicato de no mínimo 15 dias."
      },
      {
        "letter": "B",
        "explanation": "No lay-off do Art. 476-A ocorre SUSPENSÃO do contrato: o trabalhador recebe bolsa de qualificação profissional custeada pelo FAT (seguro-desemprego), podendo o empregador conceder ajuda compensatória mensal SEM natureza salarial!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 476-A, § 2º, da CLT, o contrato de trabalho NÃO poderá ser suspenso na forma deste artigo mais de uma vez no período de 16 MESES!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 476-A da CLT",
        "textSnippet": "Lay-Off (Art. 476-A CLT): prazo 2 a 5 meses; exige ACT/CCT + concordância formal do empregado + aviso ao sindicato >= 15 dias; trabalhador recebe bolsa do FAT (+ ajuda compensatória facultativa sem natureza salarial); vedada nova suspensão antes de 16 meses; dispensa durante ou até 3 meses após retorno = multa mínima de 100% da última remuneração."
      }
    ],
    "professorTip": "Lay-off (Art. 476-A): 2 a 5 meses | ACT/CCT + aceite formal + aviso 15d ao sindicato | repete só após 16 meses | demitiu durante ou em até 3m após = multa mínima 100% do salário!"
  },
  {
    "id": "mig_trab_079",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Garantia de Emprego na CIPA - Extinção do Estabelecimento e Eleição (Súmula 339 TST)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado membro eleito titular da CIPA (representante dos empregados) é dispensado sem justa causa 4 meses após o fim de seu mandato porque a empresa alegou motivo disciplinar sem comprovar falta grave; paralelamente, outra filial onde atuava outro cipeiro eleito encerra totalmente suas atividades e fecha as portas definitivamente. Em qual caso subsiste a estabilidade?",
    "options": [
      {
        "letter": "A",
        "text": "Extinto o estabelecimento onde atua o membro eleito da CIPA, ele conserva o direito pessoal à indenização integral dos salários até 1 ano após o mandato."
      },
      {
        "letter": "B",
        "text": "Para dispensar membro da CIPA por falta grave, o empregador é obrigado a ajuizar prévio Inquérito para Apuração de Falta Grave."
      },
      {
        "letter": "C",
        "text": "No primeiro caso a dispensa é NULA (garantia de emprego vai do registro da candidatura até 1 ANO após o final do mandato, e o Art. 165 CLT exige motivo disciplinar, técnico, econômico ou financeiro — ônus de prova do empregador no processo!); já no segundo caso (EXTINÇÃO DO ESTABELECIMENTO onde o cipeiro trabalha), pela Súmula 339, II, do TST, a estabilidade provisória do cipeiro NÃO constitui vantagem pessoal, mas garantia para as atividades dos membros da CIPA, que SOMENTE tem razão de ser quando em atividade a empresa — extinguindo-se o estabelecimento, NÃO se verifica a despedida arbitrária, sendo impossível a reintegração e INDEVIDA a indenização do período estabilitário!"
      },
      {
        "letter": "D",
        "text": "Os empregados indicados pelo empregador para compor a CIPA (inclusive o presidente) possuem a mesma estabilidade até 1 ano após o mandato."
      }
    ],
    "correctAnswer": "C",
    "justification": "CIPA: estabilidade só para eleitos dos empregados (titulares e suplentes), do registro até 1 ano após mandato (inclusive suplente — Súmula 339, I). Extinção do estabelecimento = cessa estabilidade sem indenização (Súmula 339, II). Não exige inquérito judicial p/ falta grave (diferente do dirigente sindical).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Diferença clássica da jurisprudência do TST! Na extinção do estabelecimento, o CIPEIRO perde a estabilidade sem indenização (Súmula 339, II, TST — tal qual o dirigente sindical na Súmula 369, IV!); JÁ a GESTANTE mantém o direito à indenização mesmo com fechamento da filial/empresa!"
      },
      {
        "letter": "B",
        "explanation": "Cuidado com a pegadinha clássica! O INQUÉRITO JUDICIAL para apuração de falta grave (Art. 853 CLT) é obrigatório para DIRIGENTE SINDICAL (Súmula 379 TST) e empregado decenal antigo — NÃO é obrigatório para CIPEIRO nem para gestante ou acidentado!"
      },
      {
        "letter": "D",
        "explanation": "Os representantes do EMPREGADOR na CIPA (entre eles o Presidente) NÃO possuem garantia provisória de emprego — apenas os representantes eleitos dos EMPREGADOS (titulares e suplentes)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 163 a 165 da CLT, Art. 10, II, \"a\", ADCT e Súmula 339 do TST",
        "textSnippet": "CIPA: estabilidade só para eleitos dos empregados (titulares e suplentes), do registro até 1 ano após mandato (inclusive suplente — Súmula 339, I). Extinção do estabelecimento = cessa estabilidade sem indenização (Súmula 339, II). Não exige inquérito judicial p/ falta grave (diferente do dirigente sindical)."
      }
    ],
    "jurisprudence": "Súmulas 339 e 369 do TST",
    "professorTip": "Extinção do estabelecimento: CIPEIRO e SINDICAL perdem estabilidade sem indenização (Súmula 339, II e 369, IV); GESTANTE mantém indenização! Cipeiro NÃO precisa de inquérito judicial p/ justa causa!"
  },
  {
    "id": "mig_trab_080",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Teletrabalho Transnacional, Prioridade PcD/Pais e Controle de Custos (Lei 14.442/2022)",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado brasileiro contratado no Brasil para trabalhar em regime de teletrabalho decide, por conveniência própria, mudar-se para Portugal e continuar trabalhando remotamente para a empresa situada em São Paulo; além disso, a empresa paga mensalmente auxílio de infraestrutura (internet/energia) previsto em contrato. Qual lei trabalhista rege o contrato e qual a natureza do auxílio?",
    "options": [
      {
        "letter": "A",
        "text": "Mudando-se para o exterior por decisão própria durante o teletrabalho, o contrato passa automaticamente a ser regido exclusivamente pela lei estrangeira local."
      },
      {
        "letter": "B",
        "text": "Pelo Art. 75-B, § 8º, da CLT (inserido pela Lei 14.442/2022), ao contrato de trabalho do empregado admitido no Brasil que optar pela realização de teletrabalho fora do território nacional aplica-se a LEGISLAÇÃO BRASILEIRA (salvo disposição em contrário estipulada entre as partes e observada a Lei nº 7.064/82!); ademais, pelo Art. 75-D, parágrafo único, da CLT, as utilidades/equipamentos e reembolsos de infraestrutura fornecidos ao teletrabalhador NÃO integram a remuneração do empregado!"
      },
      {
        "letter": "C",
        "text": "O comparecimento habitual às dependências da empresa para reuniões ou atividades presenciais específicas descaracteriza automaticamente o regime de teletrabalho."
      },
      {
        "letter": "D",
        "text": "A CLT não prevê qualquer critério de preferência na alocação de vagas em teletrabalho."
      }
    ],
    "correctAnswer": "B",
    "justification": "Teletrabalho (Lei 14.442/22): (1) modelo híbrido com idas habituais à empresa NÃO descaracteriza (Art. 75-B, § 1º); (2) no exterior por opção do empregado = lei brasileira salvo pacto diverso (§ 8º); (3) equipamentos/internet não são salário (Art. 75-D); (4) prioridade para PcD e pais/responsáveis de crianças até 4 anos (Art. 75-F); (5) despesas do retorno presencial por opção do empregado fora da base não são custeadas pelo empregador (§ 7º).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 75-B, § 8º, CLT determina expressamente que se aplica a legislação BRASILEIRA ao empregado contratado no Brasil que optar pelo teletrabalho fora do território nacional (salvo pactuação diversa!)."
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 75-B, § 1º, da CLT (Lei 14.442/22), o comparecimento, ainda que de modo HABITUAL, às dependências do empregador para a realização de atividades específicas que exijam a presença do empregado no estabelecimento NÃO descaracteriza o regime de teletrabalho (modelo híbrido)!"
      },
      {
        "letter": "D",
        "explanation": "Pelo Art. 75-F da CLT (Lei 14.442/22), os empregadores deverão conferir PRIORIDADE aos empregados com deficiência (PcD) e aos empregados com filhos ou crianças sob guarda judicial até 4 ANOS de idade na alocação em vagas para atividades que possam ser efetuadas por meio de teletrabalho!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Arts. 75-B a 75-F da CLT (Lei nº 14.442/2022)",
        "textSnippet": "Teletrabalho (Lei 14.442/22): (1) modelo híbrido com idas habituais à empresa NÃO descaracteriza (Art. 75-B, § 1º); (2) no exterior por opção do empregado = lei brasileira salvo pacto diverso (§ 8º); (3) equipamentos/internet não são salário (Art. 75-D); (4) prioridade para PcD e pais/responsáveis de crianças até 4 anos (Art. 75-F); (5) despesas do retorno presencial por opção do empregado fora da base não são custeadas pelo empregador (§ 7º)."
      }
    ],
    "professorTip": "Teletrabalho (14.442/22): Híbrido = PODE ir habitualmente sem descaracterizar! Morando fora por opção = lei BRASILEIRA! Prioridade = PcD e filhos até 4 ANOS (Art. 75-F)!"
  },
  {
    "id": "mig_trab_081",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Auxílio-Creche, Programa Empresa Cidadã e Licença-Paternidade Ampliada (Lei 14.457/2022)",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empresa privada possui 40 empregadas mulheres maiores de 16 anos trabalhando no mesmo estabelecimento sem local apropriado para amamentação e guarda de bebês no período de amamentação. À luz da CLT e da Lei nº 14.457/2022 (Programa Emprega + Mulheres), quais as obrigações da empresa e as regras de reembolso-creche?",
    "options": [
      {
        "letter": "A",
        "text": "A exigência de local apropriado para guarda e amamentação aplica-se somente a empresas com mais de 100 empregados."
      },
      {
        "letter": "B",
        "text": "Nos estabelecimentos em que trabalharem pelo menos 30 MULHERES com mais de 16 anos de idade, é obrigatório ter local apropriado onde seja permitido às empregadas guardar sob vigilância e assistência os seus filhos no período da amamentação (Art. 389, § 1º, CLT — podendo ser suprido por creches mantidas diretamente ou mediante convênios pelo § 2º, ou pelo benefício de REEMBOLSO-CRECHE previsto na Lei nº 14.457/2022 para crianças de até 5 anos e 11 meses sem natureza salarial quando pactuado por ACT/CCT ou acordo individual onde autorizado)!"
      },
      {
        "letter": "C",
        "text": "O reembolso-creche pago regularmente pelo empregador nos termos da Lei nº 14.457/2022 integra o salário para incidência de FGTS e INSS."
      },
      {
        "letter": "D",
        "text": "A prorrogação da licença-maternidade (+60 dias = 180d) e da licença-paternidade (+15 dias = 20d) no Programa Empresa Cidadã é obrigatória para todas as empresas tributadas pelo Simples Nacional."
      }
    ],
    "correctAnswer": "B",
    "justification": "Art. 389, § 1º CLT: >= 30 mulheres > 16 anos = local apropriado p/ filhos na amamentação (ou convênio / reembolso-creche da Lei 14.457/22, sem natureza salarial). Empresa Cidadã (facultativa): +60d maternidade (180d) e +15d paternidade (20d).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O Art. 389, § 1º, da CLT fixa o patamar exato de pelo menos 30 MULHERES com mais de 16 anos no estabelecimento!"
      },
      {
        "letter": "C",
        "explanation": "Pelo Art. 3º da Lei nº 14.457/2022 (e Súmula 310 STJ / CLT), os valores pagos a título de reembolso-creche NÃO têm natureza salarial, não se incorporam à remuneração e não constituem base de incidência de INSS ou FGTS!"
      },
      {
        "letter": "D",
        "explanation": "O Programa Empresa Cidadã (Lei 11.770/2008) é de adesão FACULTATIVA (com incentivo fiscal para empresas tributadas pelo lucro real): prorroga maternidade em +60d (180d) e paternidade em +15d (20d — exigindo requerimento do empregado em 2 dias úteis após o parto para paternidade e até o fim do 1º mês após o parto para maternidade)!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 389, §§ 1º e 2º, CLT, Lei nº 11.770/2008 e Lei nº 14.457/2022",
        "textSnippet": "Art. 389, § 1º CLT: >= 30 mulheres > 16 anos = local apropriado p/ filhos na amamentação (ou convênio / reembolso-creche da Lei 14.457/22, sem natureza salarial). Empresa Cidadã (facultativa): +60d maternidade (180d) e +15d paternidade (20d)."
      }
    ],
    "professorTip": "Creche obrigatória (Art. 389, § 1º) = >= 30 MULHERES (>16 anos) no estabelecimento (ou reembolso-creche sem natureza salarial)! Empresa Cidadã = 180d mãe / 20d pai!"
  },
  {
    "id": "mig_trab_082",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Competência Material da Justiça do Trabalho (Art. 114 CF) vs. Competência Comum",
    "difficulty": "Médio",
    "difficultyLevel": 2,
    "originType": "AUTORAL_PROFESSOR",
    "statement": "Empregado aciona empresa na Justiça do Trabalho pleiteando indenização por acidente de trabalho; servidor estatutário de Município ajuíza ação cobrando gratificação; e autor de ação trabalhista cobra complementação de aposentadoria privada contra entidade fechada de previdência complementar (PREVI/PETROS). O que pertence à competência da Justiça do Trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "A Justiça do Trabalho julga as ações de servidores públicos estatutários contra a Administração Pública."
      },
      {
        "letter": "B",
        "text": "Apenas a ação de indenização por acidente de trabalho proposta pelo empregado contra o empregador pertence à JUSTIÇA DO TRABALHO (Art. 114, VI, CF e Súmula Vinculante nº 22 do STF)! A ação de servidor estatutário pertence à Justiça Comum (STF ADI 3395 — inclusive quanto a contratações temporárias jurídico-administrativas ou cargos comissionados!); e a ação contra entidade fechada de previdência complementar visando complementação de aposentadoria também pertence à JUSTIÇA COMUM (STF RE 586.453 — Tema 190, salvo causas com sentença de mérito anterior a 20/02/2013)!"
      },
      {
        "letter": "C",
        "text": "A ação de cobrança de honorários de profissional autônomo (advogado, médico ou arquiteto) contra seu cliente pessoa física tramita na Justiça do Trabalho."
      },
      {
        "letter": "D",
        "text": "Compete à Justiça do Trabalho executar de ofício as contribuições previdenciárias incidentes sobre todo o período do vínculo empregatício reconhecido em sentença declaratória."
      }
    ],
    "correctAnswer": "B",
    "justification": "Competência JT (Art. 114 CF): acidente trabalho empregado x patrão (SV 22); interdito proibitório greve privada (SV 23); penalidades administrativas auditores (VII); execução previdenciária só de condenação em pecúnia/acordo (SV 53). FORA da JT: servidor estatutário/temporário adm. (ADI 3395); previdência complementar (Tema 190); cobrança profissional liberal (Súmula 363 STJ); crimes trabalhistas (Justiça Federal — STF).",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "Pela ADI 3395 do STF, a Justiça do Trabalho NÃO tem competência para julgar causas entre o Poder Público e servidores estatutários ou temporários administrativo-especiais (pertencem à Justiça Comum)!"
      },
      {
        "letter": "C",
        "explanation": "Pela Súmula 363 do STJ, compete à JUSTIÇA ESTADUAL (Comum) processar e julgar a ação de cobrança ajuizada por profissional liberal (autônomo) contra cliente (relação de consumo/civil, não relação de trabalho protegida pelo Art. 114, I, CF)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula Vinculante nº 53 do STF, a competência da Justiça do Trabalho prevista no Art. 114, VIII, da CF limita-se à execução de ofício das contribuições previdenciárias resultantes das SENTENÇAS CONDENATÓRIAS EM PECÚNIA e dos acordos homologados — NÃO alcançando sentenças meramente declaratórias de vínculo ou salários pagos no curso do contrato!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Art. 114, I a IX, da CF e Súmulas Vinculantes 22, 23 e 53 e Tema 1092 STF",
        "textSnippet": "Competência JT (Art. 114 CF): acidente trabalho empregado x patrão (SV 22); interdito proibitório greve privada (SV 23); penalidades administrativas auditores (VII); execução previdenciária só de condenação em pecúnia/acordo (SV 53). FORA da JT: servidor estatutário/temporário adm. (ADI 3395); previdência complementar (Tema 190); cobrança profissional liberal (Súmula 363 STJ); crimes trabalhistas (Justiça Federal — STF)."
      }
    ],
    "jurisprudence": "SVs 22, 23 e 53 STF e Súmula 363 STJ",
    "professorTip": "JT julga: Acidente trabalho (SV 22) + Greve interdito (SV 23) + Execução INSS SÓ de pecúnia/acordo (SV 53)! FORA da JT: Estatutário (ADI 3395), Previdência Privada (Tema 190) e Honorários Autônomo (Súmula 363 STJ)!"
  },
  {
    "id": "mig_trab_083",
    "exam": "Simulado FGV / Exame de Ordem Unificado - Direito do Trabalho",
    "examType": "OAB",
    "board": "FGV",
    "year": 2024,
    "subject": "Direito do Trabalho",
    "topic": "Aviso Prévio Proporcional (Lei 12.506/2011), Projeção e FGTS",
    "difficulty": "Fácil",
    "difficultyLevel": 1,
    "originType": "OFICIAL_OAB",
    "statement": "Empregado trabalha na mesma empresa por 6 anos e 4 meses completos e é demitido sem justa causa. Qual a quantidade exata de dias de aviso prévio proporcional a que ele faz jus, e esse acréscimo de dias sofre incidência de FGTS e projeta para férias/13º?",
    "options": [
      {
        "letter": "A",
        "text": "A proporcionalidade de 3 dias por ano completo aplica-se também em desfavor do empregado quando este pede demissão."
      },
      {
        "letter": "B",
        "text": "Pela Lei nº 12.506/2011 (nota técnica MTE nº 184/2012 e jurisprudência pacífica do TST): 30 dias no primeiro ano (ou até completar 1 ano) + 3 dias por ano COMPLETO de serviço prestado na mesma empresa até o máximo de +60 dias (teto total = 90 dias para >= 20 anos!). Com 6 anos completos, tem direito a 30 + (6 x 3) = 48 DIAS de aviso prévio! Esse aviso prévio projetado INTEGRA o tempo de serviço para todos os efeitos legais (férias, 13º, multa e depósitos do FGTS — Art. 487, § 1º, CLT, OJ 82 SDI-1 e Súmula 305 TST)!"
      },
      {
        "letter": "C",
        "text": "Com 6 anos completos, somam-se 5 x 3 = 15 dias aos 30 dias iniciais (45 dias), porque o primeiro ano não é contado na fórmula da Lei 12.506/2011."
      },
      {
        "letter": "D",
        "text": "Sobre o aviso prévio indenizado não incide FGTS nem projeção na CTPS."
      }
    ],
    "correctAnswer": "B",
    "justification": "Lei 12.506/11: 30d + 3d por ano completo (máx +60d = 90d totais); beneficia SÓ o empregado (pedido de demissão = 30d). Aviso indenizado tem FGTS (Súmula 305 TST) e projeta data da baixa na CTPS (OJ 82 SDI-1), além de contar para férias e 13º.",
    "whyWrong": [
      {
        "letter": "A",
        "explanation": "O TST pacificou que a proporcionalidade da Lei 12.506/2011 é direito EXCLUSIVO do empregado demitido sem justa causa: quando o empregado pede demissão, o aviso prévio trabalhado devido ao empregador limita-se a 30 DIAS!"
      },
      {
        "letter": "C",
        "explanation": "A fórmula já pacificada pelo TST (após revisão da NT 184/12 MTE) garante 30 dias no ano inicial + 3 dias POR CADA ANO COMPLETO na empresa (com 6 anos = 30 + 18 = 48 dias; com 20 anos completos = 30 + 60 = 90 dias)!"
      },
      {
        "letter": "D",
        "explanation": "Pela Súmula 305 do TST, o pagamento relativo ao período de aviso prévio, trabalhado OU não (indenizado), está sujeito à contribuição para o FGTS! E pela OJ 82 da SDI-1, a data de saída na CTPS deve corresponder à do término do prazo do aviso prévio, ainda que indenizado!"
      }
    ],
    "statuteReferences": [
      {
        "code": "CLT / Constituição Federal",
        "article": "Lei nº 12.506/2011, Art. 487, § 1º, CLT e Súmula 305 e OJ 82 SDI-1 TST",
        "textSnippet": "Lei 12.506/11: 30d + 3d por ano completo (máx +60d = 90d totais); beneficia SÓ o empregado (pedido de demissão = 30d). Aviso indenizado tem FGTS (Súmula 305 TST) e projeta data da baixa na CTPS (OJ 82 SDI-1), além de contar para férias e 13º."
      }
    ],
    "jurisprudence": "Súmula 305 e OJ 82 SDI-1 do TST",
    "professorTip": "Aviso Proporcional: 30d + 3d/ano completo (teto 90d em 20 anos)! Pedido de demissão = máx 30d! Aviso indenizado = TEM FGTS (Súmula 305) e projeta baixa na CTPS (OJ 82)!"
  }
];
