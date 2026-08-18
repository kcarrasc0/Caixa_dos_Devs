export const forStrings = {
  id: "for-strings",
  titulo: "Laço For e Manipulação",
  cards: [
    {
      title: "A Repetição Determinada (for)",
      content: "O `while` é ótimo quando NÃO sabemos quantas vezes o laço vai rodar (ex: até o usuário acertar a senha). Mas quando sabemos o limite exato, o `for` é o rei absoluto. O laço `for` foi feito para percorrer listas, textos ou sequências de números elemento por elemento.",
      type: "text"
    },
    {
      title: "A Máquina de Números: range()",
      content: "A função `range()` gera uma lista de números no ar. A sintaxe completa é `range(início, fim, passo)`.\n\nAtenção à Pegadinha: Em Python, o número de 'fim' é SEMPRE excluído. O `range(1, 6)` vai contar do 1 ao 5!",
      type: "code",
      codeSnippet: `# Conta de 1 até 5, pulando de 2 em 2\nfor numero in range(1, 6, 2):\n    print(f"Passo: {numero}")\n\nprint("Acabou o for!")`,
      terminalOutput: "Passo: 1\nPasso: 3\nPasso: 5\nAcabou o for!"
    },
    {
      title: "Percorrendo Listas e Textos",
      content: "A verdadeira beleza do `for` em Python é como ele lê o português natural. A expressão `for item in compras:` faz o Python ir até a lista, pegar o primeiro item, jogar na variável temporária 'item' e rodar o bloco. E assim sucessivamente até a lista acabar.",
      type: "code",
      codeSnippet: `palavra_secreta = "DEV"\n\n# O for quebra a string letra por letra!\nfor letra in palavra_secreta:\n    print(f"Deletreando: {letra}")`,
      terminalOutput: "Deletreando: D\nDeletreando: E\nDeletreando: V"
    },
    {
      title: "Cirurgia de Strings (Textos)",
      content: "O Python é um gigante na análise de dados, e dominar o tratamento de textos é essencial. Como Strings são objetos, elas vêm com métodos super úteis embutidos:\n\n• `len()`: Conta o tamanho da string.\n• `.lower()`: Converte tudo para minúsculas.\n• `.upper()`: Converte tudo para MAIÚSCULAS.\n• `.split()`: Desmembra a string em uma lista.",
      type: "code",
      codeSnippet: `email_sujo = "   CONTATO@CAIXADOSDEVS.com   "\n\n# Vamos limpar, passar para minúscula e contar os caracteres!\nemail_limpo = email_sujo.strip().lower()\ntamanho = len(email_limpo)\n\nprint(f"Email tratado: '{email_limpo}'")\nprint(f"Possui {tamanho} caracteres.")`,
      terminalOutput: "Email tratado: 'contato@caixadosdevs.com'\nPossui 24 caracteres."
    }
  ]
};