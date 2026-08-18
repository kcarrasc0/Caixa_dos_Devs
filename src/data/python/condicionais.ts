export const condicionais = {
  id: "condicionais",
  titulo: "Lógica e Condicionais",
  cards: [
    {
      title: "Operadores Relacionais (A Balança)",
      content: "Antes de tomar uma decisão, o computador precisa comparar coisas. Os operadores relacionais funcionam como uma balança, e a resposta será sempre `True` (Verdadeiro) ou `False` (Falso).\n\n• `==` (Igual a. Cuidado: um `=` só, serve para atribuir valor. Dois `==` servem para comparar!)\n• `!=` (Diferente de)\n• `>`, `<`, `>=`, `<=` (Maior, Menor, Maior ou Igual, Menor ou Igual).",
      type: "code",
      codeSnippet: `senha_banco = 1234\nsenha_digitada = 1234\n\nprint(senha_digitada == senha_banco) # True\nprint(senha_digitada != senha_banco) # False\nprint(10 >= 10)                      # True`,
      terminalOutput: "True\nFalse\nTrue"
    },
    {
      title: "A Tabela Verdade (and, or, not)",
      content: "Às vezes, uma condição só não basta. Para doar sangue, você precisa ter mais de 16 anos **E** menos de 69 anos. Usamos a Tabela Verdade para combinar testes lógicos:\n\n• `and` (E): O guarda rigoroso. SÓ libera se TODOS os testes forem verdadeiros.\n• `or` (OU): O guarda flexível. Libera se PELO MENOS UM teste for verdadeiro.\n• `not` (NÃO): O do contra. Inverte o resultado (se era True, vira False).",
      type: "code",
      codeSnippet: `idade = 20\npeso = 65\n\n# AND: Ambos precisam ser True\npode_doar = (idade >= 16) and (peso > 50)\nprint(f"Pode doar sangue? {pode_doar}")`,
      terminalOutput: "Pode doar sangue? True"
    },
    {
      title: "A Bifurcação: if e else",
      content: "O comando `if` (se) é a grande tomada de decisão. O interpretador avalia o teste: se for `True`, ele entra no bloco indentado (recuado para a direita) e executa os comandos.\n\nO `else` (senão) é o 'plano B'. Ele captura TUDO o que for falso no `if`. O `else` nunca leva uma condição do lado dele, ele simplesmente abraça o que sobrou.",
      type: "code",
      codeSnippet: `idade_usuario = int(input("Qual sua idade? "))\n\nif idade_usuario >= 18:\n    # Indentação (TAB) diz que este print pertence ao IF\n    print("Acesso Permitido ao sistema.")\nelse:\n    # Esta linha só roda se a idade for menor que 18\n    print("Acesso Negado. Volte quando crescer!")`,
      terminalOutput: "Qual sua idade? 15\nAcesso Negado. Volte quando crescer!"
    },
    {
      title: "A Escada Inteligente: if, elif, else",
      content: "Se tivermos várias opções (como faixas de nota: A, B, C, D), usar vários `if`s soltos faz o computador perder tempo testando coisas desnecessárias. E usar `else` dentro de `else` deixa o código torto e feio.\n\nA solução é o `elif` (else if / senão se). Ele cria uma escada: o interpretador desce degrau por degrau; quando acha um verdadeiro, ele executa e ignora o resto da escada instantaneamente!",
      type: "code",
      codeSnippet: `nota = 7.5\n\nif nota >= 9.0:\n    print("Nota A: Excelente!")\nelif nota >= 7.0:\n    print("Nota B: Muito bom!")\nelif nota >= 5.0:\n    print("Nota C: Recuperação.")\nelse:\n    print("Nota D: Reprovado direto.")`,
      terminalOutput: "Nota B: Muito bom!"
    }
  ]
};