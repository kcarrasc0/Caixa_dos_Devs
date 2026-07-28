export const efeitosVisuais = {
  id: "efeitos-visuais",
  titulo: "Efeitos Visuais e Bordas",
  cards: [
    {
      title: "A Propriedade: border-radius",
      content: "A propriedade `border-radius` arredonda os cantos de uma caixa. O valor pode ser em pixels ou porcentagem. Uma dica de ouro: se você tiver uma caixa perfeitamente quadrada (ex: 100x100px) e aplicar `border-radius: 50%`, ela se transforma em um círculo perfeito!",
      type: "code",
      codeSnippet: `<style>\n  .circulo {\n    width: 80px; height: 80px;\n    background: #8A2BE2;\n    border-radius: 50%; /* Transforma em círculo */\n  }\n</style>\n\n<div class="circulo"></div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "As Propriedades de Sombra: box-shadow e text-shadow",
      content: "O CSS permite criar sombras para dar a ilusão de que o elemento está flutuando (profundidade). Os valores seguem a ordem: `Eixo X`, `Eixo Y`, `Desfoque (Blur)`, `Espalhamento` e `Cor`.\n\nO `text-shadow` funciona igual, mas é aplicado diretamente nas letras.",
      type: "code",
      codeSnippet: `<style>\n  .caixa-sombra {\n    padding: 20px; background: white;\n    /* X Y Blur Espalhamento Cor */\n    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);\n  }\n  .texto-sombra {\n    text-shadow: 2px 2px 4px #8A2BE2;\n  }\n</style>\n\n<div class="caixa-sombra">\n  <h3 class="texto-sombra">Sombra em tudo!</h3>\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "Pintando com Degradê: linear-gradient",
      content: "No CSS moderno, não precisamos mais de imagens para fazer degradês. A função `linear-gradient()` é passada dentro da propriedade `background-image`. Você pode definir a direção (ex: `to right`, `45deg`) e a lista de cores que vão se mesclar.",
      type: "code",
      codeSnippet: `<style>\n  .fundo-degrade {\n    height: 100px;\n    /* Degradê indo para a direita, do Roxo para o Rosa */\n    background-image: linear-gradient(to right, #8A2BE2, #ff1493);\n    color: white; padding: 20px;\n    font-family: sans-serif; font-weight: bold;\n  }\n</style>\n\n<div class="fundo-degrade">Degradê Dinâmico!</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "A Propriedade Mágica: filter",
      content: "O `filter` aplica efeitos gráficos como desfoque (blur) ou mudança de cor antes do elemento ser renderizado, muito usado em imagens. Valores comuns: `blur()`, `grayscale()`, `brightness()`, `invert()`.",
      type: "code",
      codeSnippet: `<style>\n  .foto-desfocada {\n    filter: blur(4px) grayscale(80%); /* Desfoca e tira quase toda a cor */\n  }\n</style>\n\n<img src="/personagens/kcarrasquinho.png" alt="Avatar" width="80" class="foto-desfocada">`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "Exemplo Completo: O Botão Neumórfico",
      content: "Juntando bordas arredondadas, degradês e um uso duplo de sombras (uma clara e uma escura), podemos criar efeitos tridimensionais avançados, como botões que parecem estar sendo ejetados da tela.",
      type: "code",
      codeSnippet: `<style>\n  .container-fundo {\n    background: #e0e5ec; padding: 40px; display: flex; justify-content: center;\n  }\n  .btn-neumorfico {\n    padding: 15px 40px;\n    border: none; border-radius: 30px;\n    background: #e0e5ec;\n    color: #8A2BE2; font-weight: bold; font-family: sans-serif;\n    /* O segredo: duas sombras, uma escura embaixo direita, uma clara em cima esquerda */\n    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);\n    cursor: pointer;\n  }\n</style>\n\n<div class="container-fundo">\n  <button class="btn-neumorfico">Clica em Mim</button>\n</div>`,
      interactiveId: "preview-completo",
      terminalOutput: "Preview CSS"
    }
  ]
};