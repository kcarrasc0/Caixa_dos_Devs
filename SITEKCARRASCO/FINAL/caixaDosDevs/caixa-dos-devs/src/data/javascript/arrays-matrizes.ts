export const arraysMatrizes = {
  id: "arrays-matrizes",
  titulo: "Arrays e Matrizes",
  cards: [
    {
      title: "A Caixa de Chocolates (Arrays)",
      content: "Se uma variável comum é uma caixa que só guarda 1 único objeto, um Array (vetor) é uma daquelas caixas organizadoras de chocolate. Ele usa uma única variável para guardar uma lista de itens em linha reta, separados por vírgula e protegidos dentro de colchetes `[ ]`.\n\nE lembre-se da regra de ouro que vimos na aula de repetição: o computador começa a contar as posições do ZERO. O primeiro chocolate da fileira está sempre no índice `[0]`.",
      type: "code",
      codeSnippet: `// Criando nossa caixa de chocolates (Array)\nlet estoqueDoces = ["Snickers", "KitKat", "Twix"];\n\n// Espiando o primeiro chocolate (índice 0)\nconsole.log(estoqueDoces[0]);\n\n// Trocando o Twix do índice 2 por um da Cacau Show\nestoqueDoces[2] = "Cacau Show";\nconsole.log(estoqueDoces);`,
      terminalOutput: "Snickers\n[ 'Snickers', 'KitKat', 'Cacau Show' ]"
    },
    {
      title: "Destrinchando a Caixa",
      content: "O JavaScript nos dá superpoderes para manipular nossos Arrays. Chamamos essas ferramentas de 'Métodos Natos'. Pense neles como ações automáticas que você faz na sua caixa de doces, como adicionar um bombom no fim da fila ou comer o último que sobrou.",
      type: "text",
      tableData: {
        headers: ["Método / Ação", "O que ele faz?", "Exemplo Prático na Caixa"],
        rows: [
          [".push()", "Coloca um chocolate novo no FINAL da caixa", "['Snickers', 'KitKat'].push('Twix') ➔ ['Snickers', 'KitKat', 'Twix']"],
          [".pop()", "Remove (ou come!) o ÚLTIMO chocolate da caixa", "['Snickers', 'KitKat', 'Twix'].pop() ➔ ['Snickers', 'KitKat']"],
          [".unshift()", "Empurra um chocolate novo para o INÍCIO da caixa", "['KitKat'].unshift('Cacau Show') ➔ ['Cacau Show', 'KitKat']"],
          [".length", "Conta QUANTOS chocolates têm na caixa agora", "['Snickers', 'KitKat'].length ➔ Retorna 2"]
        ]
      }
    },
    {
      title: "Matrizes: Caixas Organizadoras (2D)",
      content: "Se um Array comum é apenas uma fileira de chocolates, uma Matriz é uma caixa de bombons finos da Cacau Show, perfeitamente organizada em **Linhas e Colunas** (como uma planilha do Excel).\n\nNa prática, uma matriz é um Array que guarda outros Arrays dentro dele. Para o computador localizar o bombom exato que você quer comer, você precisa passar dois colchetes: o primeiro indica a Linha e o segundo indica a Coluna: `matriz[linha][coluna]`.",
      type: "code",
      codeSnippet: `// Uma caixa gourmet organizada em 2 linhas e 2 colunas\nlet caixaGourmet = [\n  ["Chocolate ao Leite", "Meio Amargo"], // Linha 0 (Tradicionais)\n  ["Bombom de Morango", "Crocante"]       // Linha 1 (Recheados)\n];\n\n// Quero pegar o 'Bombom de Morango' (Linha 1, Coluna 0)\nconsole.log("O bombom escolhido é: " + caixaGourmet[1][0]);`,
      terminalOutput: "O bombom escolhido é: Bombom de Morango"
    }
  ]
};