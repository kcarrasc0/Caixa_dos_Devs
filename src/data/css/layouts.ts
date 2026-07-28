export const layouts = {
  id: "layouts",
  titulo: "Layouts: Flexbox e Grid",
  cards: [
    {
      title: "O Conceito Flexbox (Container vs Items)",
      content: "O Flexbox revolucionou a web. Ele permite alinhar e distribuir espaços entre elementos de forma inteligente.\n\nA regra MÁXIMA do Flexbox: Ele é uma relação de Pai (Container) e Filhos (Items). Você não aplica flexbox na caixinha que quer mover, você aplica `display: flex;` na CAIXA MAIOR que abraça todas elas.",
      type: "text"
    },
    {
      title: "Flexbox: Eixos e Alinhamentos",
      content: "O pai usa dois 'controles remotos' para mover os filhos:\n\n• Eixo Principal (justify-content): Como os itens se espalham na horizontal. (center, space-between, space-around).\n• Eixo Cruzado (align-items): Como os itens se comportam na vertical. (center, flex-start, stretch).",
      type: "code",
      codeSnippet: `<style>\n  .container-flex {\n    display: flex;\n    justify-content: space-between; /* Espalha as pontas */\n    align-items: center; /* Centraliza na vertical */\n    background: #333;\n    height: 120px;\n    padding: 10px;\n  }\n  \n  .item {\n    background: #8A2BE2;\n    color: white;\n    padding: 20px;\n    font-family: sans-serif;\n  }\n</style>\n\n<div class="container-flex">\n  <div class="item">Esquerda</div>\n  <div class="item">Meio</div>\n  <div class="item">Direita</div>\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "CSS Grid: O Mestre das Duas Dimensões",
      content: "Se o Flexbox é ótimo para alinhar coisas numa LINHA, o Grid nasceu para fazer TABULEIROS de xadrez (Linhas E Colunas ao mesmo tempo).\n\nNós criamos colunas usando a função `repeat()` e a unidade `fr` (fração). Um `repeat(3, 1fr)` significa: Crie 3 colunas, e cada uma ocupa 1 fração (tamanhos iguais). O espaço entre elas é o famoso `gap`.",
      type: "code",
      codeSnippet: `<style>\n  .tabuleiro-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr); /* 3 Colunas iguais */\n    gap: 15px; /* Espaço entre as caixas */\n    background: #222;\n    padding: 15px;\n  }\n\n  .celula {\n    background: #8A2BE2;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    font-family: sans-serif;\n  }\n</style>\n\n<div class="tabuleiro-grid">\n  <div class="celula">1</div>\n  <div class="celula">2</div>\n  <div class="celula">3</div>\n  <div class="celula">4</div>\n  <div class="celula">5</div>\n  <div class="celula">6</div>\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "O Duelo: Flexbox vs Grid",
      content: "Quando usar um ou o outro?\n\n• Flexbox: Use para micro-layouts. Alinhar o ícone com o texto no botão, espalhar os links do menu do topo. Ele pensa em UMA dimensão de cada vez (linha ou coluna).\n\n• Grid Layout: Use para macro-layouts (a estrutura da página). Criar a Galeria de Fotos, dividir a barra lateral do conteúdo principal. Ele pensa em DUAS dimensões (linhas e colunas simultaneamente).",
      type: "text"
    }
  ]
};