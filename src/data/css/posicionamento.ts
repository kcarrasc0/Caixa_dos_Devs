export const posicionamento = {
  id: "posicionamento-zindex",
  titulo: "Posicionamento e Z-Index",
  cards: [
    {
      title: "O Fluxo Normal (position: static)",
      content: "Por padrão, todo elemento HTML tem `position: static`. Isso significa que ele segue o fluxo normal da página: um bloco vai empurrando o outro para baixo. Propriedades como `top` ou `left` não têm nenhum efeito aqui.",
      type: "text"
    },
    {
      title: "A Propriedade: position: relative",
      content: "Ao definir `position: relative`, o elemento AINDA ocupa seu espaço original na página (não quebra o fluxo), mas agora as propriedades de movimento (`top`, `bottom`, `left`, `right`) passam a funcionar. Ele se move **em relação a onde ele deveria estar inicialmente**.",
      type: "code",
      codeSnippet: `<style>\n  .caixa {\n    background: #8A2BE2; color: white; padding: 10px;\n    position: relative;\n    top: 20px; /* Desce 20px a partir da sua origem */\n    left: 40px; /* Vai 40px para a direita */\n  }\n</style>\n\n<div class="caixa">Fui empurrado, mas meu 'fantasma' ainda ocupa o espaço original!</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "A Propriedade: position: absolute",
      content: "Atenção: `position: absolute` arranca o elemento do fluxo da página (os outros elementos vão ignorá-lo como se ele não existisse). Ele se posiciona em relação à tela ou ao **primeiro elemento pai que tiver position: relative**.",
      type: "code",
      codeSnippet: `<style>\n  .pai-relativo {\n    position: relative;\n    height: 100px; background: #eee;\n  }\n  .filho-absoluto {\n    position: absolute;\n    top: 10px; right: 10px; /* Gruda no topo direito do PAI */\n    background: #e44d26; color: white; padding: 5px;\n  }\n</style>\n\n<div class="pai-relativo">\n  <div class="filho-absoluto">Sou Absoluto!</div>\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "As Propriedades: fixed e sticky",
      content: "`position: fixed` prende o elemento na TELA do usuário (como o menu superior de um site, que não some ao rolar a página).\n\nO `position: sticky` é um híbrido: ele se comporta como relative até a página rolar por ele, a partir daí, ele gruda na tela (fixed).",
      type: "text"
    },
    {
      title: "A Batalha das Camadas: z-index",
      content: "Quando tiramos os elementos do fluxo normal, eles podem se sobrepor. Como decidir quem fica por cima e quem fica por trás? Usamos o `z-index`. É o eixo Z (profundidade). Quanto maior o número, mais para frente o elemento fica.",
      type: "code",
      codeSnippet: `<style>\n  .caixa1 {\n    position: absolute; top: 10px; left: 10px;\n    background: red; padding: 30px;\n    z-index: 1; /* Fica atrás */\n  }\n  .caixa2 {\n    position: absolute; top: 30px; left: 30px;\n    background: blue; padding: 30px; color: white;\n    z-index: 99; /* Fica na frente! */\n  }\n</style>\n\n<div style="position: relative; height: 120px;">\n  <div class="caixa1">Z-index 1</div>\n  <div class="caixa2">Z-index 99</div>\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "Exemplo Completo: Card com Badge",
      content: "Vamos usar `relative` no card inteiro, e `absolute` em uma tag (badge de notificação) para prendê-la exatamente no canto superior direito do card, usando `z-index` para garantir que ela não seja ocultada.",
      type: "code",
      codeSnippet: `<style>\n  .produto-card {\n    position: relative;\n    width: 200px; padding: 20px;\n    background: #f4f4f5; border-radius: 8px;\n    margin: 20px auto;\n  }\n  .badge-novo {\n    position: absolute;\n    top: -10px; right: -10px;\n    background: #8A2BE2; color: white;\n    padding: 5px 10px; border-radius: 20px;\n    font-weight: bold; font-family: sans-serif;\n    z-index: 10;\n  }\n</style>\n\n<div class="produto-card">\n  <div class="badge-novo">NOVO!</div>\n  <h3>Teclado Mecânico</h3>\n  <p>Produto recém chegado ao estoque.</p>\n</div>`,
      interactiveId: "preview-completo",
      terminalOutput: "Preview CSS"
    }
  ]
};