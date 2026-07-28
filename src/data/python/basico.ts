export const basico = {
  id: "basico",
  titulo: "Conceitos Iniciais e Básico",
  cards: [
    {
      title: "Por que Python?",
      content: "Python é uma linguagem de alto nível criada no início dos anos 90 por Guido Van Rossum[cite: 2]. Um dos grandes diferenciais do Python em relação a outras linguagens de programação é o fato de ser uma linguagem interpretada, permitindo rodar o código de forma nativa e em tempo real[cite: 2].\n\nSua filosofia baseia-se na legibilidade: 'Simples é melhor que complexo'[cite: 2]. É por isso que o Python não usa ponto e vírgula no final das linhas ou chaves para abrir blocos de código.",
      type: "text"
    },
    {
      title: "Variáveis e Tipagem Dinâmica",
      content: "Em Python, uma variável é um espaço alocado na memória ao qual iremos armazenar um dado ou valor[cite: 2]. A linguagem possui tipagem dinâmica, o que significa que não é necessário declarar explicitamente o tipo de dado que será armazenado por cada variável[cite: 3].\n\nOs principais tipos primitivos (built-ins) são: `int` (inteiros), `float` (reais com ponto), `bool` (lógicos True/False) e `str` (textos e strings)[cite: 3].",
      type: "code",
      codeSnippet: `# O interpretador sabe automaticamente os tipos!\nidade = 25          # int\npeso = 72.5         # float\nlogado = True       # bool\nnome = "Kcarrasquinho" # str\n\n# f-strings: A forma mais moderna de exibir variáveis (Python 3.6+)\nprint(f"Olá, meu nome é {nome} e tenho {idade} anos.")`,
      terminalOutput: "Olá, meu nome é Kcarrasquinho e tenho 25 anos."
    },
    {
      title: "Operadores e Entradas",
      content: "A função `input()` é utilizada para receber dados digitados pelo usuário, mas preste atenção: ela sempre retornará o valor recebido no formato de uma string[cite: 3]. Se você precisar fazer contas matemáticas (+, -, *, /) com esse valor, precisará convertê-lo usando funções como `int()` ou `float()`[cite: 3].",
      type: "code",
      codeSnippet: `base = float(input("Digite a base: "))\naltura = float(input("Digite a altura: "))\n\n# Operador de multiplicação (*)\narea = base * altura\nprint(f"A área do retângulo é: {area:.2f}")`,
      terminalOutput: "Digite a base: 10\nDigite a altura: 5\nA área do retângulo é: 50.00"
    }
  ]
};