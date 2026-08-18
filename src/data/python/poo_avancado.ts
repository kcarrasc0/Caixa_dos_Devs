export const pooAvancado = {
  id: "poo-avancado",
  titulo: "Revisão e Próximos Passos",
  cards: [
    {
      title: "Revisão de Ouro",
      content: "Você aprendeu a espinha dorsal da POO! Recapitulando:\n\n• Classes: O molde.\n• Objetos: A instância física.\n• Atributos: O que o objeto TEM.\n• Métodos: O que o objeto FAZ.",
      type: "text"
    },
    {
      title: "Boas Práticas em POO",
      content: "Mantenha o escopo isolado: uma classe não deve fazer o papel de duas. Use encapsulamento (`__`) para proteger dados sensíveis e mantenha seu construtor `__init__` organizado apenas com o necessário para o objeto nascer vivo.",
      type: "text"
    },
    {
      title: "Herança e Polimorfismo",
      content: "Nos seus próximos passos, você estudará a Herança: A capacidade de uma classe 'Filha' herdar atributos e métodos de uma classe 'Mãe'. O Polimorfismo vai te permitir reescrever essas ações para que o filho tenha comportamentos únicos.",
      type: "text"
    },
    {
      title: "Tracebacks e Tratamento de Exceções",
      content: "No mundo real, os usuários inserem textos em campos de números e a internet cai no meio de um download. Se você não tratar isso, o Python emite um 'Traceback' vermelho e o programa 'crasha'.\n\nUsamos a estrutura `try...except` (Tente isso, caso dê erro, faça aquilo) para interceptar o erro e exibir uma mensagem amigável, salvando a vida do sistema.",
      type: "code",
      codeSnippet: `try:\n    divisor = int(input("Digite um divisor para 100: "))\n    print(100 / divisor)\nexcept ZeroDivisionError:\n    print("Ops! A matemática proíbe a divisão por ZERO.")\nexcept ValueError:\n    print("Você digitou um texto ao invés de um número!")`,
      terminalOutput: "Digite um divisor para 100: 0\nOps! A matemática proíbe a divisão por ZERO."
    },
    {
      title: "O Horizonte da Concorrência (Threads)",
      content: "O seu sistema operacional faz muitas coisas ao mesmo tempo. Na programação avançada com Python, usamos 'Threads' para rodar blocos de código em paralelo, resolvendo problemas complexos do mercado como o do Produtor/Consumidor sem travar o processador.",
      type: "text"
    }
  ]
};