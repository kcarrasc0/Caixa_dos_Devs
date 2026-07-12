export const condicionais = {
  id: "condicionais",
  titulo: "Condicionais na Tomada de Decisão",
  cards: [
    {
      title: "O Mapa Mental: Tabela Verdade",
      content: "Antes de tomar uma decisão, o computador precisa saber as regras do jogo. A Tabela Verdade é o mapa visual para prever o resultado dos operadores (&& e ||).\n\nSuponha que você esteja planejando aquela viagem de fim de semana para Pesqueira com a galera e precisa tomar decisões lógicas. Vamos ver como o computador processa isso nas tabelas a seguir!",
      type: "code",
      codeSnippet: `// O computador cruzando os dados na cabeça dele:\nconsole.log(true && true);   // Sim e Sim = SIM\nconsole.log(true && false);  // Sim e Não = NÃO\nconsole.log(false || true);  // Não ou Sim = SIM`,
      terminalOutput: "true\nfalse\ntrue"
    },
    {
      title: "Tabela 1: O Rigoroso 'E' (&&)",
      content: "DECISÃO 1: Você só vai viajar SE tiver os R$ 140 do dinheiro da sua parte (A) E a galera estiver disponível (B).\n\nO operador '&&' é exclusivista: ele exige que TUDO seja verdade.",
      type: "code",
      tableData: {
        headers: ["Dinheiro (A)", "Galera (B)", "Viajar? (A && B)"],
        rows: [
          ["🟢 SIM (True)", "🟢 SIM (True)", "✅ VAI VIAJAR"],
          ["🟢 SIM (True)", "🔴 NÃO (False)", "❌ FICA EM CASA"],
          ["🔴 NÃO (False)", "🟢 SIM (True)", "❌ FICA EM CASA"],
          ["🔴 NÃO (False)", "🔴 NÃO (False)", "❌ FICA EM CASA"]
        ]
      },
      codeSnippet: `let temDinheiro = true;\nlet galeraDisponivel = false;\n\n// Pro rolê acontecer, os DOIS precisam ser true\nconsole.log("Vai pra Pesqueira?", temDinheiro && galeraDisponivel);`,
      terminalOutput: "Vai pra Pesqueira? false"
    },
    {
      title: "Tabela 2: O Flexível 'OU' (||)",
      content: "DECISÃO 2: Mudança de planos! Você vai viajar SE tiver dinheiro (A) OU a galera estiver disponível pra rachar (B).\n\nO operador '||' salva a pátria se PELO MENOS UM for verdade. Ele só dá False se tudo der errado de vez.",
      type: "code",
      tableData: {
        headers: ["Dinheiro (A)", "Galera (B)", " Viajar? (A || B)"],
        rows: [
          ["🟢 SIM (True)", "🟢 SIM (True)", "✅ VAI VIAJAR"],
          ["🟢 SIM (True)", "🔴 NÃO (False)", "✅ VAI VIAJAR"],
          ["🔴 NÃO (False)", "🟢 SIM (True)", "✅ VAI VIAJAR"],
          ["🔴 NÃO (False)", "🔴 NÃO (False)", "❌ FICA EM CASA"]
        ]
      },
      codeSnippet: `let temDinheiro = false;\nlet galeraDisponivel = true;\n\n// O '||' é salvador. Um True já resolve o problema.\nconsole.log("Vai viajar?", temDinheiro || galeraDisponivel);`,
      terminalOutput: "Vai viajar? true"
    },
    {
      title: "Condicional Simples: Estrutura IF",
      content: "Agora que sabemos as regras, vamos tomar a decisão. O famoso 'Se' (em inglês, 'if') é o que chamamos de Condicional Simples.\n\nAqui, a gente diz para o computador: 'Ei, SE essa condição for verdade, faça essa ação e siga a vida'. Se for falsa, ele apenas ignora.\n\n• PARÊNTESES ( ) guardam a Pergunta.\n• CHAVES { } guardam a Ação.",
      type: "code",
      codeSnippet: `let dia = "sexta";\n\n// if ( pergunta ) { ação }\nif (dia === "sexta") {\n  console.log("Hoje é dia de codar até de madrugada!");\n}`,
      terminalOutput: "Hoje é dia de codar até de madrugada!"
    },
    {
      title: "Condicional Composta: O 'Senão' (ELSE)",
      content: "Na vida real, quando um plano dá errado, a gente tem um Plano B. No código, quando juntamos o `if` com um `else`, criamos uma Estrutura Condicional Composta.\n\nÉ uma bifurcação exata: ou vai para a direita, ou para a esquerda. O 'else' NUNCA tem parênteses com pergunta. Ele é a lixeira das condições: se a pergunta do 'if' der Falso, o código cai automaticamente no 'else' sem nem pensar duas vezes.",
      type: "code",
      codeSnippet: `let saldo = 30;\nlet precoCorte = 45;\n\n// Condição Composta: Tenta o IF, se falhar cai no ELSE\nif (saldo >= precoCorte) {\n  console.log("Hoje tem degradê no Covil dos Barbeiros!");\n} else {\n  console.log("Vish, o saldo não deu. Vai ter que raspar em casa mesmo.");\n}`,
      terminalOutput: "Vish, o saldo não deu. Vai ter que raspar em casa mesmo."
    },
    {
      title: "Múltiplos Caminhos (ELSE IF)",
      content: "A grande dúvida: qual a diferença do `else` pro `else if`?\n\n• O `else` finaliza a decisão. É o 'qualquer outra coisa que sobrar'.\n• O `else if` (senão se) adiciona uma NOVA pergunta no meio do caminho. É como uma rotatória com várias saídas.\n\nO computador lê de cima para baixo. A primeira condição que for Verdadeira ele entra, executa as chaves e **ignora todo o resto** do bloco.",
      type: "code",
      codeSnippet: `let nota = 6.5;\n\nif (nota >= 7) {\n  console.log("Aprovado direto! 🎉");\n} \nelse if (nota >= 5) {\n  console.log("Atenção: Você está de Recuperação. 📚");\n} \nelse {\n  console.log("Reprovado. Nos vemos ano que vem. 😭");\n}`,
      terminalOutput: "Atenção: Você está de Recuperação. 📚"
    }
  ]
};