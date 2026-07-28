export const flexbox = {
  id: "flexbox",
  titulo: "Layouts com Flexbox",
  cards: [
    {
      title: "O Fim do Sofrimento para Centralizar",
      content: "No passado, colocar uma caixa do lado da outra ou centralizar algo era um pesadelo. O Flexbox nasceu para resolver isso.\n\nA regra de ouro do Flexbox é: Ele funciona em uma relação de PAI e FILHOS. Você não aplica o Flexbox no item que quer mover, você aplica no CONTÊINER (A caixa pai) que abraça os itens.",
      type: "text"
    },
    {
      title: "Justify-Content e Align-Items",
      content: "Quando você declara `display: flex;` numa caixa, os itens dentro dela ficam em linha automaticamente.\n\nPara mover esses filhos, o pai usa dois controles remotos:\n• `justify-content`: Move os itens no eixo PRINCIPAL (horizontalmente, por padrão). Ex: center, space-between.\n• `align-items`: Move os itens no eixo SECUNDÁRIO (verticalmente).",
      type: "code",
      codeSnippet: `<style>\n  .pai-flex {\n    display: flex;\n    justify-content: space-between; /* Espalha as caixas com espaço no meio */\n    align-items: center; /* Centraliza na vertical */\n    background-color: #222;\n    height: 150px;\n    padding: 10px;\n  }\n  \n  .filho {\n    background-color: #3b82f6;\n    color: white;\n    padding: 20px;\n    border-radius: 8px;\n  }\n</style>\n\n<div class="pai-flex">\n  <div class="filho">Caixa 1</div>\n  <div class="filho">Caixa 2</div>\n  <div class="filho">Caixa 3</div>\n</div>`,
      terminalOutput: "Preview CSS"
    }
  ]
};