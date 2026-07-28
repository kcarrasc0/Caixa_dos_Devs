export const controle = {
  id: "controle",
  titulo: "Estruturas de Controle",
  cards: [
    {
      title: "A Indentação Mágica e Condicionais",
      content: "Python é uma linguagem de forte indentação, ou seja, suas linhas de código não precisam de pontuação para demarcar blocos, mas sim de tabulação correta (espaços)[cite: 2].\n\nPara tomadas de decisão, usamos as palavras `if` (se), `elif` (se não se) e `else` (se não)[cite: 2].",
      type: "code",
      codeSnippet: `nota = 85\n\nif nota >= 90:\n    print("Conceito A")\nelif nota >= 70:\n    # Este bloco pertence ao elif graças à indentação!\n    print("Conceito B")\nelse:\n    print("Conceito C")`,
      terminalOutput: "Conceito B"
    },
    {
      title: "Estrutura de Repetição: while",
      content: "O comando `while` é muito simples e a sua ideia é a seguinte: enquanto uma condição (ou um conjunto delas) for verdadeira, uma instrução que está dentro do laço deverá ser executada[cite: 3]. Se a condição nunca virar falsa, você criará um 'loop infinito'![cite: 3]",
      type: "code",
      codeSnippet: `contador = 1\n\nwhile contador <= 3:\n    print(f"Repetição número {contador}")\n    contador += 1 # Atalho para: contador = contador + 1`,
      terminalOutput: "Repetição número 1\nRepetição número 2\nRepetição número 3"
    },
    {
      title: "Estrutura de Repetição: for e range()",
      content: "Quando o número de iterações é definido, a estrutura `for` é bastante adequada[cite: 3]. É bastante comum a utilização dessa estrutura em conjunto com a função `range()`, que gera uma sequência de números dentro de uma faixa especificada[cite: 3].",
      type: "code",
      codeSnippet: `# O range(1, 4) gera números a partir de 1 até ANTES de 4.\nfor numero in range(1, 4):\n    print(f"Contando: {numero}")`,
      terminalOutput: "Contando: 1\nContando: 2\nContando: 3"
    }
  ]
};