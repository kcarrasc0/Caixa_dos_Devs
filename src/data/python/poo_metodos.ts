export const pooMetodos = {
  id: "poo-metodos",
  titulo: "Métodos e Encapsulamento",
  cards: [
    {
      title: "Atributos vs Métodos",
      content: "Se os atributos são as características do objeto (substantivos), os métodos são as Ações que o objeto pode realizar (verbos). São funções declaradas dentro de uma classe.",
      type: "text"
    },
    {
      title: "Dando vida aos Objetos",
      content: "Nós criamos métodos definindo funções simples usando `def` DENTRO do bloco da Classe. Lembre-se sempre de colocar o `self` no parâmetro para poder acessar a identidade do objeto.",
      type: "code",
      codeSnippet: `class ContaBancaria:\n    def __init__(self, saldo_inicial):\n        self.saldo = saldo_inicial\n\n    # O Método 'sacar' (A Ação!)\n    def sacar(self, valor):\n        if self.saldo >= valor:\n            self.saldo -= valor\n            print(f"Saque de R$ {valor}. Saldo atual: R$ {self.saldo}")\n        else:\n            print("Saldo insuficiente para o saque!")\n\nconta_ze = ContaBancaria(100)\nconta_ze.sacar(40) # Chamando o método com o ponto (.)`,
      terminalOutput: "Saque de R$ 40. Saldo atual: R$ 60"
    },
    {
      title: "O uso obrigatório do self",
      content: "Note que em todos os métodos de uma classe, o primeiro parâmetro é o `self`. Isso garante que, ao usar `self.saldo`, o método saiba exatamente de qual conta ele deve ler ou alterar o dinheiro.",
      type: "text"
    },
    {
      title: "Encapsulamento (Privacidade)",
      content: "Diferente de outras linguagens onde o encapsulamento é restrito, o Python deixa o controle nas suas mãos. Usamos o duplo underline `__` (ex: `__saldo`) antes do nome do atributo para indicar que ele está encapsulado, reservado e não deve ser mexido livremente por fora da classe.",
      type: "code",
      codeSnippet: `class Cofre:\n    def __init__(self):\n        self.__senha_secreta = "12345" # Privado!\n\nmeu_cofre = Cofre()\n# O Python não deixa você acessar o atributo de fora da classe!\nprint(meu_cofre.__senha_secreta) # Isso vai causar um erro fatal!`,
      terminalOutput: "AttributeError: 'Cofre' object has no attribute '__senha_secreta'"
    },
    {
      title: "Interação entre Objetos",
      content: "As classes nunca vivem isoladas. A mágica da POO é colocar os objetos para conversarem entre si! Você pode perfeitamente passar um Objeto Cliente inteiro como parâmetro para compor um Objeto Conta.",
      type: "code",
      codeSnippet: `class Cliente:\n    def __init__(self, nome):\n        self.nome = nome\n\n# Passando o objeto inteiro pro construtor da Conta\nconta1 = ContaBancaria(saldo_inicial=100.0)\nprint("Conta criada com sucesso!")`,
      terminalOutput: "Conta criada com sucesso!"
    }
  ]
};