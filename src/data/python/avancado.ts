export const avancado = {
  id: "avancado",
  titulo: "Tópicos Avançados",
  cards: [
    {
      title: "Orientação a Objetos (Classes)",
      content: "Uma classe é a representação de um conjunto de objetos com características em comum (atributos e comportamentos), sendo uma abstração desses objetos no mundo real[cite: 3].\n\nUsamos a palavra `class` para criar esse 'molde'. O método especial `__init__()` (chamado de construtor) é utilizado na criação e configuração dos atributos dos objetos[cite: 3].",
      type: "code",
      codeSnippet: `class Cachorro:\n    # Construtor: o 'self' é obrigatório e representa o próprio objeto\n    def __init__(self, nome, raca):\n        self.nome = nome\n        self.raca = raca\n\n    def latir(self):\n        print(f"{self.nome} disse: Au Au!")\n\n# Instanciando o objeto\nmeu_pet = Cachorro("Rex", "Pug")\nmeu_pet.latir()`,
      terminalOutput: "Rex disse: Au Au!"
    },
    {
      title: "Tratamento de Exceções",
      content: "Através do comando `try` (tentar), podemos fazer com que o interpretador tente executar uma operação arriscada. Se não for possível, será executado o comando `except` (exceção), evitando que o programa trave e quebre na frente do usuário[cite: 2].",
      type: "code",
      codeSnippet: `try:\n    divisor = int(input("Digite um divisor para 10: "))\n    resultado = 10 / divisor\n    print(f"O resultado é {resultado}")\nexcept ZeroDivisionError:\n    print("Erro: É impossível dividir um número por zero!")\nexcept ValueError:\n    print("Erro: Você deve digitar um número inteiro.")`,
      terminalOutput: "Digite um divisor para 10: 0\nErro: É impossível dividir um número por zero!"
    }
  ]
};