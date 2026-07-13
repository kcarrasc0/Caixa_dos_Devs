export const vetores = {
  id: "vetores",
  titulo: "Vetores (Arrays)",
  cards: [
    {
      title: "O Armário de Gavetas",
      content: "Até agora, você aprendeu que uma variável é uma caixa que guarda 1 único valor. Mas imagine criar um sistema escolar para guardar a nota de 50 alunos. Você criaria 50 caixas diferentes? (nota1, nota2, nota3...)\n\nClaro que não! É para isso que existem os Vetores (também conhecidos como Arrays). Um vetor não é uma caixa, é um ARMÁRIO inteiro. Ele tem um único nome, mas possui várias gavetas numeradas por dentro para guardar uma lista de coisas do mesmo tipo.",
      type: "text"
    },
    {
      title: "A Regra do Zero",
      content: "Na vida real, nós começamos a contar do número 1. Na programação, o computador começa a contar do número ZERO.\n\nSe você criar um vetor com 5 posições (5 gavetas), os números dessas gavetas (que chamamos de ÍNDICES) não serão 1, 2, 3, 4, 5. Eles serão: 0, 1, 2, 3, 4.\n\nA primeira gaveta é SEMPRE a posição [0]!",
      type: "text"
    },
    {
      title: "Criando e Acessando um Vetor",
      content: "Para criar um armário, usamos os colchetes [ ] e dizemos quantas gavetas ele vai ter. Para colocar ou pegar algo lá de dentro, chamamos o nome do armário e apontamos o número da gaveta entre os colchetes.",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    // Cria um armário de textos com 3 gavetas\n    cadeia alunos[3]\n\n    // Guardando valores em gavetas específicas\n    alunos[0] = "Ana"\n    alunos[1] = "Carlos"\n    alunos[2] = "Beatriz"\n\n    // Abrindo a gaveta 1 (que é o segundo aluno!)\n    escreva("O aluno na posição 1 é: ", alunos[1])\n  }\n}`,
      terminalOutput: "O aluno na posição 1 é: Carlos"
    },
    {
      title: "O Combo Perfeito: Vetores + Laço Para",
      content: "Vetores e o Laço 'Para' nasceram um para o outro. \n\nEm vez de você abrir gaveta por gaveta manualmente escrevendo dezenas de linhas de código, você manda a Estrutura de Repetição ir do número 0 até o final do armário, abrindo uma por uma automaticamente e mostrando na tela. É assim que o Facebook carrega a sua lista de amigos!",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    cadeia convidados[4] = {"Ana", "João", "Bia", "Leo"}\n\n    escreva("=== LISTA VIP ===\\n")\n\n    // O contador 'i' vai ser o número da gaveta!\n    // Ele começa na 0 e vai até a 3.\n    para (inteiro i = 0; i < 4; i++) {\n      escreva("Posição ", i, ": ", convidados[i], "\\n")\n    }\n  }\n}`,
      terminalOutput: "=== LISTA VIP ===\nPosição 0: Ana\nPosição 1: João\nPosição 2: Bia\nPosição 3: Leo"
    }
  ]
};