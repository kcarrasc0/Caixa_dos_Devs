export const tiposDeDados = {
  id: "tipos-de-dados",
  titulo: "Tipos de Dados",
  cards: [
    {
      title: "Number (Números)",
      content: "São os números puros, que podem ser inteiros (10, 21) ou decimais.\n\nUm detalhe muito importante na programação: o separador de decimais em vez de ser uma vírgula (,) é um ponto (.).",
      type: "code",
      codeSnippet: `// R$ 2,50 vira 2.50 no código\nlet saldo = 2.50;\nlet idade = 21;\n\nconsole.log("Saldo da conta: R$", saldo);`,
      terminalOutput: "Saldo da conta: R$ 2.5"
    },
    {
      title: "Strings (Textos)",
      content: "Strings são sequências de caracteres usadas para representar textos.\n\nNo código, a gente avisa pro computador que aquilo é um texto envelopando as palavras. Existem três formas de fazer isso:",
      type: "code",
      codeSnippet: `// 1. Aspas Simples\nconst nome = 'Kcarrasquinho';\n\n// 2. Aspas Duplas\nlet cidade = "Recife";\n\n// 3. Crases (Template Literals - permite colocar variáveis)\nlet apresentacao = \`Olá, meu nome é \${nome} e sou de \${cidade}\`;\n\nconsole.log(apresentacao);`,
      terminalOutput: "Olá, meu nome é Kcarrasquinho e sou de Recife"
    },
    {
      title: "Booleans (Verdadeiro ou Falso)",
      content: "Possuem apenas dois valores possíveis: Verdadeiro (True) ou Falso (False).\n\nServem basicamente para responder perguntas de sim ou não no código. Exemplo: A luz está acesa? O usuário está logado?\n\nÉ como uma moeda: só tem dois lados! Clique na moeda abaixo para jogar:",
      type: "interactive",
      interactiveId: "mario-coin"
      // Sem terminal aqui porque o foco é a interação da moeda
    },
    {
      title: "Null (Vazio Intencional)",
      content: "Nada...\n\nÉ literalmente um valor vazio que você, desenvolvedor, colocou lá de propósito. É tipo aquele boy (ou garota) que visualiza e não te responde. A caixa de mensagem não tá vazia por acidente, a pessoa ESCOLHEU deixar o vácuo.",
      type: "code",
      codeSnippet: `let respostaDoCrush = null;\n\n// Eu defini que a resposta é 'nada'\nconsole.log(respostaDoCrush);`,
      terminalOutput: "null"
    },
    {
      title: "Undefined (Indefinido)",
      content: "Também é um valor vazio, mas NÃO é intencional. É quando o JavaScript cria a caixa, mas você esqueceu de colocar algo dentro dela.\n\nLembra do nosso terror antigo, o 'var' e o Hoisting? Quando o JS tenta ler uma variável antes da hora, ele cospe 'undefined' na tela, porque a caixa existe, mas o conteúdo ainda não.",
      type: "code",
      codeSnippet: `let pontuacao;\n\n// Resultado: undefined (você não colocou nada lá dentro)\nconsole.log(pontuacao);`,
      terminalOutput: "undefined"
    },
    {
      title: "BigInt (Números Gigantes)",
      content: "Lembra do tipo Number? Ele é forte, mas tem um limite: só aguenta guardar números até 9 quatrilhões. \n\nJá o BigInt (Big Integer = Número Inteiro Grande) é para quando a coisa fica absurda. Ele não tem limite prático.\n\nSe o Number é uma caixa de papelão, o BigInt é um contêiner de navio!",
      type: "interactive",
      interactiveId: "bigint-container",
      codeSnippet: `// Colocamos o 'n' no final para avisar que é um BigInt\nlet visualizacaoGeral = 9007199254740991n;\n\nconsole.log(visualizacaoGeral);`,
      terminalOutput: "9007199254740991n"
    },
    {
      title: "Symbol (A Impressão Digital)",
      content: "O Symbol cria um valor ÚNICO. É a impressão digital ou o CPF de um dado. \n\nMesmo que você crie duas variáveis com exatamente o mesmo nome e o mesmo texto, se elas forem do tipo Symbol, o computador vai olhar pra elas e dizer: 'Esses caras são pessoas diferentes'.",
      type: "interactive",
      interactiveId: "symbol-cpf",
      codeSnippet: `const k1 = Symbol('Kcarrasquinho');\nconst k2 = Symbol('Kcarrasquinho');\n\n// Se eu perguntar pro computador se eles são iguais:\nconsole.log(k1 === k2); // Retorna FALSE!`,
      terminalOutput: "false"
    }
  ]
};