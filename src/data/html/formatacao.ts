export const formatacao = {
  id: "formatacao-texto",
  titulo: "Formatação de Texto e Citações",
  cards: [
    {
      title: "A Tag <strong>",
      content: "A tag `<strong>` define um texto de forte importância, seriedade ou urgência. O navegador renderiza esse texto em negrito (bold). Ao contrário da antiga tag `<b>`, o `<strong>` carrega valor semântico para os leitores de tela.",
      type: "code",
      codeSnippet: `<p>\n  Atenção: A prova será na <strong>próxima segunda-feira</strong>!\n</p>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <em>",
      content: "A tag `<em>` (Emphasis) marca o texto que tem ênfase (tom de voz diferente) na leitura. O navegador renderiza o conteúdo em itálico. Assim como o `<strong>`, ela tem peso semântico, diferentemente da antiga tag `<i>`.",
      type: "code",
      codeSnippet: `<p>\n  Eu <em>realmente</em> preciso de um café agora.\n</p>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <blockquote>",
      content: "A tag `<blockquote>` especifica uma seção que é citada de outra fonte (uma citação em bloco). O navegador costuma adicionar um recuo (margem) à esquerda e à direita do texto.",
      type: "code",
      codeSnippet: `<blockquote>\n  O computador nasceu para resolver problemas que antes não existiam.\n  <br>- Bill Gates\n</blockquote>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <mark>",
      content: "A tag `<mark>` representa um texto marcado ou destacado para fins de referência ou notação, devido à sua relevância noutro contexto. É como passar uma caneta marca-texto amarela na tela.",
      type: "code",
      codeSnippet: `<p>\n  Não se esqueça de trazer o <mark>documento de identidade</mark> original.\n</p>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "Exemplo Completo: Formatação em Ação",
      content: "Aqui juntamos todas as tags de formatação e citação que vimos neste módulo. Veja como o navegador processa o texto puro, transformando-o em uma estrutura rica, com ênfases, marcações e citações corretas.",
      type: "code",
      codeSnippet: `<h2>Artigo: A Revolução da Máquina</h2>\n\n<p>\n  Foi <strong>fundamental</strong> para o progresso humano a invenção dos computadores. Como disse um famoso empreendedor:\n</p>\n\n<blockquote>\n  "Hardware é a parte do computador que você <em>chuta</em>. Software é a parte que você <em>xinga</em>."\n</blockquote>\n\n<p>\n  Lembre-se que você <mark>não deve</mark> levar isso ao pé da letra!\n</p>`,
      interactiveId: "preview-completo",
      terminalOutput: "Preview HTML"
    }
  ]
};