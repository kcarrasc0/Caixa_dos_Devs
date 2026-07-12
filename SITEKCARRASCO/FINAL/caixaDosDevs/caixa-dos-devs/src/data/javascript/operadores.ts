export const operadores = {
  id: "operadores",
  titulo: "Operadores",
  cards: [
    {
      title: "Operadores de Atribuição",
      content: "Lembra das nossas caixas (variáveis)? O operador de atribuição é o entregador que coloca a encomenda lá dentro.\n\nNa programação, um único sinal de igual (=) NÃO SIGNIFICA 'igual'. Ele significa 'RECEBE'. Você está mandando a caixa receber um valor.\n\nE temos os 'encurtadores' (+=, -=). Eles servem para pegar o que já tem na caixa, fazer uma conta rápida e guardar de volta.",
      type: "code",
      codeSnippet: `// A caixa 'vaquinha' RECEBE 0\nlet vaquinha = 0;\n\n// Bora viajar! O pacote é R$ 140 fixo por cabeça.\n// Atalho da atribuição:\nvaquinha += 140; \nvaquinha += 140; // Mais um pagou\n\nconsole.log(vaquinha);`,
      terminalOutput: "280"
    },
    {
      title: "Operadores Aritméticos",
      content: "Aqui é a matemática pura da escola, sem mistério:\n\n• Somar (+)\n• Subtrair (-)\n• Multiplicar (*)\n• Dividir (/)\n\nMas na programação temos um diferentão: o MÓDULO (%). Ele não calcula a porcentagem! Ele te dá o RESTO de uma divisão. Pense no módulo como a fatia de pizza que sobrou na caixa porque não dava pra dividir igualzinho pra todo mundo.",
      type: "code",
      codeSnippet: `// Matemática clássica\nlet soma = 10 + 5;\nlet subtracao = 20 - 5;\nlet multiplicacao = 3 * 5;\nlet divisao = 30 / 2;\n\nconsole.log("Soma:", soma);\nconsole.log("Divisão:", divisao);\n\n// O Diferentão (Módulo/Resto)\nlet fatias = 8;\nlet pessoas = 3;\nlet sobrou = fatias % pessoas;\n\nconsole.log("Fatias que sobraram na caixa:", sobrou);`,
      terminalOutput: "Soma: 15\nDivisão: 15\nFatias que sobraram na caixa: 2"
    },
    {
      title: "Ordem de Precedência",
      content: "Imagina a fila de uma balada. Tem a galera normal e tem a fila VIP. Na matemática do código, quem é VIP entra primeiro na conta.\n\n1º VIP Supremo: O que está entre Parênteses ( )\n2º VIP: Multiplicação (*) e Divisão (/)\n3º Fila Normal: Soma (+) e Subtração (-)\n\nSe você não usar parênteses pra organizar o rolê, o JavaScript vai calcular a multiplicação primeiro e bagunçar seu resultado todo.",
      type: "code",
      codeSnippet: `// O JS faz 20 * 2 primeiro, depois soma 10.\nlet contaMaluca = 10 + 20 * 2;\nconsole.log("Conta Maluca:", contaMaluca);\n\n// O Parênteses fura a fila VIP! Primeiro soma, depois multiplica.\nlet contaCerta = (10 + 20) * 2;\nconsole.log("Conta Certa:", contaCerta);`,
      terminalOutput: "Conta Maluca: 50\nConta Certa: 60"
    },
    {
      title: "Operadores Relacionais",
      content: "Esses são os seguranças da balada. Eles comparam duas coisas e só podem te dar duas respostas: Sim (True) ou Não (False).\n\n• Maior (>), Menor (<)\n• Maior ou igual (>=), Menor ou igual (<=)\n\nMas cuidado com a Igualdade! O '==' compara só o valor. Ele é meio cego, deixa passar texto achando que é número. É um var disfarçado de operador, meio safado.\nJá o '===' é a Igualdade Estrita. O segurança linha dura que pede o RG. Ele compara o valor E o tipo de dado!",
      type: "code",
      codeSnippet: `let minhaIdade = 21;\nlet maioridade = 18;\n\n// Perguntas de Sim ou Não:\nconsole.log("É maior de idade?", minhaIdade >= maioridade);\nconsole.log("É criança?", minhaIdade < 12);\n\n// O cego (==) vs O linha dura (===)\nlet catraca = 18;\nlet texto = "18";\n\nconsole.log("Segurança Cego:", catraca == texto);\nconsole.log("Segurança Rigoroso:", catraca === texto);`,
      terminalOutput: "É maior de idade? true\nÉ criança? false\nSegurança Cego: true\nSegurança Rigoroso: false"
    },
    {
      title: "Operadores Lógicos",
      content: "Servem para juntar várias perguntas ao mesmo tempo. Pense neles como o comportamento dos seus pais:\n\n1. O 'E' (&&): Pai rigoroso. SÓ devolve True se TUDO for verdade. 'Você só vai pro rolê se lavar a louça && limpar o quarto'. Falhou em um? Fica em casa.\n\n2. O 'OU' (||): Mãe tranquila. Devolve True se PELO MENOS UMA coisa for verdade. 'Te dou dinheiro se você passar em Matemática || passar em Ciências'.\n\n3. O 'NÃO' (!): É o amigo do contra. Ele inverte tudo. Se era True, vira False.",
      type: "code",
      codeSnippet: `let loucaLavada = true;\nlet quartoArrumado = false;\n\n// Testando o && (Rigoroso):\nlet vaiSair = loucaLavada && quartoArrumado;\nconsole.log("Pai, posso sair?", vaiSair);\n\n// O do Contra (!):\nconsole.log("Invertendo a louça lavada:", !loucaLavada);`,
      terminalOutput: "Pai, posso sair? false\nInvertendo a louça lavada: false"
    },
    {
      title: "Operador Ternário",
      content: "O Operador Ternário é o atalho da preguiça (no bom sentido!). É o famoso 'if/else' que fez dieta e cabe em uma linha só.\n\nA regra é: PERGUNTA ? SE SIM : SE NÃO\n\nVocê faz a pergunta, coloca a interrogação. A primeira resposta é se der True, a segunda (depois dos dois pontos) é se der False. Direto e reto.",
      type: "code",
      codeSnippet: `let saldo = 50;\nlet precoCorte = 45;\n\n// PERGUNTA ? SE_SIM : SE_NÃO\nlet irNoCovilDosBarbeiros = saldo >= precoCorte ? "Bora lançar o degradê!" : "Vou ter que raspar em casa";\n\nconsole.log(irNoCovilDosBarbeiros);`,
      terminalOutput: "Bora lançar o degradê!"
    }
  ]
};