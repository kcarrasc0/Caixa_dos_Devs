export const estruturasFuncoes = {
  id: "estruturas-funcoes",
  titulo: "Estruturas de Dados e Funções",
  cards: [
    {
      title: "Listas (Os Arrays do Python)",
      content: "Listas são objetos que permitem guardar diversos dados dentro deles, de forma organizada e indexada[cite: 2]. Em Python, uma lista pode armazenar elementos de tipos distintos simultaneamente[cite: 3].\n\nUsamos os colchetes `[]` para criar uma lista. Você pode adicionar itens com `.append()` ou removê-los com `.remove()`[cite: 2].",
      type: "code",
      codeSnippet: `mochila = ["Corda", "Lanterna", 3, True]\nmochila.append("Mapa") # Adiciona ao final\n\nprint(mochila[0]) # Acessa o primeiro item (Índice 0)\nprint(f"Tamanho da lista: {len(mochila)}")`,
      terminalOutput: "Corda\nTamanho da lista: 5"
    },
    {
      title: "Dicionários (Chave e Valor)",
      content: "Diferentemente das listas, que utilizam índices para acessar os seus elementos, os dicionários utilizam chaves[cite: 3]. A sintaxe de um dicionário é definida por chaves `{}` e deve seguir a ordem `chave: valor`[cite: 2].\n\nEles são perfeitos para representar objetos da vida real, parecidos com o formato JSON.",
      type: "code",
      codeSnippet: `aluno = {\n    "nome": "Fernando",\n    "idade": 31,\n    "curso": "Computação"\n}\n\nprint(aluno["nome"])\nprint(aluno.get("idade"))`,
      terminalOutput: "Fernando\n31"
    },
    {
      title: "A Fábrica de Código: Funções",
      content: "Uma função é um bloco de códigos que podem ser executados e reutilizados livremente, quantas vezes forem necessárias[cite: 2].\n\nPara declarar uma função em Python, precisamos conhecer quatro coisas: a palavra-chave `def`, o nome da função, a lista de parâmetros (entre parênteses) e o corpo (bloco de comandos)[cite: 3].",
      type: "code",
      codeSnippet: `def calcular_media(nota1, nota2):\n    media = (nota1 + nota2) / 2\n    return media\n\nresultado = calcular_media(8.0, 10.0)\nprint(f"Sua média é {resultado:.1f}")`,
      terminalOutput: "Sua média é 9.0"
    }
  ]
};