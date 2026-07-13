export const funcoes = {
  id: "funcoes",
  titulo: "Funções e Métodos",
  cards: [
    {
      title: "A Fábrica de Código",
      content: "Uma Função (`function`) é como uma máquina numa fábrica ou uma receita de bolo. Você escreve um bloco de código que faz uma tarefa específica e dá um nome para ele.\n\nO código não roda sozinho! Ele fica guardado até que você 'chame' a função pelo nome. Você pode chamar a mesma função 100 vezes sem precisar reescrever o código.",
      type: "code",
      codeSnippet: `// 1. Ensinando a máquina a funcionar (Declarando)\nfunction darBoasVindas() {\n  console.log("Bem-vindo ao sistema da Caixa dos Devs!");\n}\n\n// 2. Apertando o botão para a máquina rodar (Chamando)\ndarBoasVindas();\ndarBoasVindas();`,
      terminalOutput: "Bem-vindo ao sistema da Caixa dos Devs!\nBem-vindo ao sistema da Caixa dos Devs!"
    },
    {
      title: "Parâmetros: A Matéria-Prima",
      content: "Uma máquina de suco não serve para nada se você não jogar as frutas lá dentro.\n\nOs **Parâmetros** são as variáveis que ficam dentro dos parênteses `( )`. Eles são a matéria-prima que você joga para dentro da função trabalhar. Na hora de chamar a função, o valor que você envia é chamado de **Argumento**.",
      type: "code",
      codeSnippet: `// Essa função PRECISA de duas matérias-primas (a, b)\nfunction somarValores(a, b) {\n  let resultado = a + b;\n  console.log("A soma deu: " + resultado);\n}\n\n// Jogando os ingredientes na máquina\nsomarValores(10, 5);\nsomarValores(50, 50);`,
      terminalOutput: "A soma deu: 15\nA soma deu: 100"
    },
    {
      title: "A Mágica do 'return'",
      content: "Aqui 90% dos iniciantes travam: `console.log` NÃO É o resultado da função. Ele só pinta letras na tela.\n\nO `return` é a ESTEIRA DE ENTREGA da fábrica. Ele pega o resultado que a função calculou e devolve para o programa usar em outra coisa. Atenção: Quando o JavaScript lê a palavra `return`, ele encerra a função na hora!",
      type: "code",
      codeSnippet: `function calcularDobro(numero) {\n  return numero * 2;\n}\n\n// O return me devolve o valor, então eu posso guardar numa variável!\nlet meuDobro = calcularDobro(15);\n\n// Agora sim eu mostro na tela ou uso pra outra coisa\nconsole.log("O produto entregue foi: " + meuDobro);`,
      terminalOutput: "O produto entregue foi: 30"
    },
    {
      title: "As Funções Nativas",
      content: "Você não precisa construir todas as máquinas do zero. O JavaScript já vem com um galpão lotado de ferramentas prontas, chamadas de Funções Nativas ou Métodos.\n\nQuer gerar um número aleatório? Quer transformar um texto em MAIÚSCULO? O JS já tem uma função nativa pronta para isso. Basta chamar!",
      type: "code",
      codeSnippet: `let texto = "caixa dos devs";\nlet nota = 7.8;\n\n// toUpperCase() converte tudo para maiúsculo\nconsole.log(texto.toUpperCase());\n\n// Math.round() arredonda o número\nconsole.log("Nota arredondada: " + Math.round(nota));\n\n// Math.random() gera um número aleatório entre 0 e 1\nconsole.log("Seu número da sorte: " + Math.random());`,
      terminalOutput: "CAIXA DOS DEVS\nNota arredondada: 8\nSeu número da sorte: 0.827364519"
    }
  ]
};