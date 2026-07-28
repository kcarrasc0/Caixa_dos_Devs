export const tipografia = {
  id: "tipografia-textos",
  titulo: "Textos e Tipografia",
  cards: [
    {
      title: "A Propriedade: font-family",
      content: "A propriedade `font-family` define o tipo de letra do texto. É uma boa prática fornecer uma lista de fontes (stack), terminando sempre com uma família genérica (como `sans-serif` ou `serif`), caso o computador do usuário não tenha a primeira fonte instalada.",
      type: "code",
      codeSnippet: `<style>\n  .texto-fonte {\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n  }\n</style>\n\n<p class="texto-fonte">\n  Este texto tenta usar Helvetica. Se não achar, tenta Arial. Se falhar, usa a fonte sem serifa padrão do sistema.\n</p>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "A Propriedade: font-size e font-weight",
      content: "O `font-size` controla o tamanho da fonte (usamos `px`, `em` ou `rem`). Já o `font-weight` controla a espessura da letra, variando de `normal` (400), `bold` (700) até `900` para fontes super grossas.",
      type: "code",
      codeSnippet: `<style>\n  .destaque {\n    font-size: 24px;\n    font-weight: 800; /* Extra negrito */\n  }\n</style>\n\n<p class="destaque">Texto grande e encorpado!</p>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "A Propriedade: text-transform e text-decoration",
      content: "`text-transform` muda as letras para MAIÚSCULAS (`uppercase`), minúsculas (`lowercase`) ou Capitalizadas (`capitalize`). O `text-decoration` é muito usado para tirar o sublinhado feio dos links (`none`) ou adicionar um risco (`line-through`).",
      type: "code",
      codeSnippet: `<style>\n  .titulo {\n    text-transform: uppercase;\n    text-decoration: underline;\n  }\n</style>\n\n<h3 class="titulo">eu fui digitado em minúsculas</h3>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "As Propriedades: line-height e letter-spacing",
      content: "Estas duas propriedades são os segredos dos designers para textos elegantes. `line-height` controla a altura da linha (o respiro entre uma linha e outra num parágrafo). `letter-spacing` controla o espaço entre cada letra da palavra.",
      type: "code",
      codeSnippet: `<style>\n  .leitura-confortavel {\n    line-height: 1.8; /* 80% a mais de espaço entre as linhas */\n    letter-spacing: 2px; /* Afasta as letras */\n  }\n</style>\n\n<p class="leitura-confortavel">\n  Textos com um bom line-height cansam menos a vista do leitor.\n</p>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "Exemplo Completo: Tipografia Profissional",
      content: "Juntando todas essas propriedades, podemos transformar um texto monótono em um título de revista elegante e um parágrafo perfeitamente legível.",
      type: "code",
      codeSnippet: `<style>\n  .artigo-titulo {\n    font-family: 'Georgia', serif;\n    font-size: 32px;\n    font-weight: 900;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    text-align: center;\n    color: #8A2BE2;\n  }\n\n  .artigo-corpo {\n    font-family: 'Arial', sans-serif;\n    font-size: 16px;\n    line-height: 1.6;\n    color: #333;\n    text-align: justify;\n  }\n</style>\n\n<h1 class="artigo-titulo">A Arte do CSS</h1>\n<p class="artigo-corpo">\n  O design não é apenas o que parece e o que se sente. O design é como funciona. Quando dominamos a tipografia, entregamos a melhor experiência de leitura ao usuário.\n</p>`,
      interactiveId: "preview-completo",
      terminalOutput: "Preview CSS"
    }
  ]
};