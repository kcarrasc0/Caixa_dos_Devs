export const operadores = {
  id: "operadores",
  titulo: "Operadores e Formatação",
  cards: [
    {
      title: "A Matemática do Python",
      content: "O Python é uma calculadora superpoderosa nativa. Ele respeita a regra matemática: multiplicações e divisões são feitas antes de somas e subtrações. Se quiser alterar a ordem, use parênteses `()`.\n\n• `+`, `-`, `*`, `/` : Operações normais.\n• `//` (Divisão Inteira): Descarta os quebrados e traz só a parte inteira.\n• `%` (Módulo): Traz apenas o RESTO de uma divisão (Muito útil para saber se um número é par ou ímpar!).\n• `**` (Potência): Eleva um número ao outro.",
      type: "code",
      codeSnippet: `conta_normal = 10 / 3\ndivisao_inteira = 10 // 3\nresto = 10 % 3\npotencia = 2 ** 3  # 2 elevado ao cubo (2*2*2)\n\nprint(f"Normal: {conta_normal}")\nprint(f"Inteira: {divisao_inteira}")\nprint(f"Resto: {resto}")\nprint(f"Potência: {potencia}")`,
      terminalOutput: "Normal: 3.3333333333333335\nInteira: 3\nResto: 1\nPotência: 8"
    },
    {
      title: "Atribuição Composta (O Atalho)",
      content: "Em jogos ou contadores, é muito comum precisarmos somar um valor à variável que já existe (Ex: adicionar 50 pontos ao score atual). Fazer `score = score + 50` é chato de ler.\n\nO Python nos dá o atalho da Atribuição Composta: `+=`, `-=`, `*=`, `/=`. Ele faz a conta e já salva o novo valor na própria variável em um golpe só.",
      type: "code",
      codeSnippet: `vida_jogador = 100\nprint(f"Vida inicial: {vida_jogador}")\n\n# Sofreu dano\nvida_jogador -= 20 \nprint(f"Tomou um hit! Vida atual: {vida_jogador}")\n\n# Achou uma poção de cura dupla\nvida_jogador *= 2\nprint(f"Curou em dobro! Vida atual: {vida_jogador}")`,
      terminalOutput: "Vida inicial: 100\nTomou um hit! Vida atual: 80\nCurou em dobro! Vida atual: 160"
    },
    {
      title: "A Revolução das F-Strings",
      content: "No passado, juntar texto com variáveis em Python dava trabalho. Com o Python 3.6, nasceram as f-strings (Literal Strings Interpolation). É a forma mais elegante e moderna do mercado!\n\nBasta colocar a letra `f` minúscula ou maiúscula colada antes das aspas da string. A partir daí, qualquer variável ou até contas matemáticas podem ser jogadas diretamente dentro de chaves `{}` no meio do texto.",
      type: "code",
      codeSnippet: `produto = "Teclado Mecânico"\npreco = 250.50\nquantidade = 3\n\n# O 'f' antes das aspas libera o uso das chaves {}\n# O ':.2f' formata o preço para ter sempre 2 casas decimais!\nprint(f"Você comprou {quantidade} unidades de {produto}.")\nprint(f"O total a pagar é R$ {preco * quantidade:.2f}")`,
      terminalOutput: "Você comprou 3 unidades de Teclado Mecânico.\nO total a pagar é R$ 751.50"
    },
    {
      title: "Boas Práticas de Escrita (A Famosa PEP 8)",
      content: "O Python é uma comunidade forte e padronizada. O documento chamado PEP 8 dita as regras de como um código Python profissional deve ser escrito, para que um dev na China entenda facilmente o código de um dev no Brasil.\n\nRegras de ouro:\n1. Nomes de variáveis devem usar `snake_case` (letras minúsculas separadas por underline). Ex: `salario_base`, e nunca `salarioBase`.\n2. Evite linhas gigantes, limite-se a 79 caracteres por linha.\n3. Deixe sempre um espaço em branco antes e depois de operadores matemáticos (Ex: `a = b + c`, e não `a=b+c`).",
      type: "text"
    }
  ]
};