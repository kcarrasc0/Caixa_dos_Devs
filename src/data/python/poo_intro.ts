export const pooIntro = {
  id: "poo-intro",
  titulo: "Introdução à POO",
  cards: [
    {
      title: "O Paradigma do Mundo Real (POO)",
      content: "Até agora, programamos no estilo 'Estruturado' (comandos em sequência). A Programação Orientada a Objetos (POO) muda essa visão: nós modelamos o código como se fossem coisas do mundo real.\n\nPara isso, fazemos uso da Abstração: um cliente de banco no mundo real tem altura, peso e time do coração, mas para o sistema do banco, nós 'abstraímos' o que não importa e focamos só em: Nome, CPF e Saldo.",
      type: "text"
    },
    {
      title: "Classes e Objetos: A Forma e o Bolo",
      content: "A `Classe` é a planta baixa de uma casa, o projeto arquitetônico. O `Objeto` é a casa física construída no terreno de verdade, pronta para morar (Instância).\n\nA partir de uma única Classe (Molde), podemos criar infinitos Objetos (Bolos) na memória.",
      type: "text"
    },
    {
      title: "A Sintaxe (class e __init__)",
      content: "Para criar o nosso molde, usamos a palavra `class`. Todo molde precisa de um método construtor: o famoso `__init__` (com duplos underlines). Ele é a primeira função que roda automaticamente no instante em que o objeto 'nasce'.",
      type: "code",
      codeSnippet: `class Carro:\n    # O construtor que define como o carro nasce\n    def __init__(self, modelo, cor):\n        self.modelo = modelo\n        self.cor = cor\n\n# Construindo os objetos físicos (Instanciando)\ncarro1 = Carro("Civic", "Prata")\ncarro2 = Carro("Fusca", "Vermelho")\n\nprint(f"Carro 1 é um {carro1.modelo} da cor {carro1.cor}.")`,
      terminalOutput: "Carro 1 é um Civic da cor Prata."
    },
    {
      title: "O Mistério do 'self'",
      content: "Por que todos os métodos em Python exigem aquele `self` no primeiro parâmetro? O `self` é o CPF do objeto! Ele significa 'Eu mesmo'.\n\nQuando o Fusca Vermelho chama um comando, o `self` garante que o Python altere a cor apenas do Fusca, e não mexa na cor do Civic Prata. Ele aponta para a própria instância que está executando a ação.",
      type: "text"
    }
  ]
};