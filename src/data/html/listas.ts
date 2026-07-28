export const listas = {
  id: "listas",
  titulo: "Estruturas de Listas",
  cards: [
    {
      title: "A Tag <ul>",
      content: "A tag `<ul>` (Unordered List) cria uma lista não ordenada de itens. Geralmente, ela é renderizada como uma lista com marcadores (bolinhas, quadrados). O `<ul>` é a caixa mãe, ela não deve conter texto solto, apenas itens da lista.",
      type: "code",
      codeSnippet: `<ul>\n  <!-- Os itens virão aqui dentro -->\n</ul>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <ol>",
      content: "A tag `<ol>` (Ordered List) cria uma lista ordenada. Diferente do `<ul>`, os itens aqui seguem uma ordem alfabética ou numérica estrita (1, 2, 3... ou A, B, C...).",
      type: "code",
      codeSnippet: `<ol>\n  <!-- Os passos numerados virão aqui dentro -->\n</ol>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <li>",
      content: "A tag `<li>` (List Item) representa um item contido em uma lista. Ela DEVE ser filha direta de uma lista ordenada (`<ol>`) ou não ordenada (`<ul>`).",
      type: "code",
      codeSnippet: `<ul>\n  <li>Maçã</li>\n  <li>Banana</li>\n</ul>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <hr>",
      content: "A tag `<hr>` (Horizontal Rule) é um elemento vazio que cria uma quebra temática entre blocos no nível de parágrafo. Visualmente, o navegador exibe uma linha horizontal separando o conteúdo.",
      type: "code",
      codeSnippet: `<p>Conteúdo de cima</p>\n<hr>\n<p>Conteúdo de baixo</p>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "Exemplo Completo: Listas na Prática",
      content: "Juntando todas as tags, podemos criar hierarquias precisas. Usamos listas não ordenadas para ingredientes (a ordem não importa) e listas ordenadas para o modo de preparo (a ordem é vital).",
      type: "code",
      codeSnippet: `<h3>Receita de Bolo de Chocolate</h3>\n\n<p><strong>Ingredientes:</strong></p>\n<ul>\n  <li>3 Ovos</li>\n  <li>2 xícaras de Farinha de Trigo</li>\n  <li>1 xícara de Achocolatado</li>\n</ul>\n\n<hr>\n\n<p><strong>Modo de Preparo:</strong></p>\n<ol>\n  <li>Misture os ingredientes secos.</li>\n  <li>Adicione os ovos e mexa bem.</li>\n  <li>Leve ao forno por 40 minutos.</li>\n</ol>`,
      terminalOutput: "Preview HTML"
    }
  ]
};