export const boxModelCores = {
  id: "box-model-cores",
  titulo: "Box Model e Cores",
  cards: [
    {
      title: "Box Model (O Modelo de Caixa)",
      content: "A regra de ouro da Web: TODO elemento é uma caixa retangular invisível.\n\nEssa caixa tem 4 camadas exatas:\n1. Content (Conteúdo): O texto ou imagem no miolo.\n2. Padding (Preenchimento): É o 'algodão' por dentro da caixa. Afasta o conteúdo das bordas.\n3. Border (Borda): A casca da caixa. Pode ser visível ou não.\n4. Margin (Margem): O 'campo de força' por fora. Empurra as outras caixas para longe.",
      type: "code",
      codeSnippet: `<style>\n  .caixa-magica {\n    background-color: #8A2BE2;\n    color: white;\n    font-family: sans-serif;\n    text-align: center;\n    \n    /* A Mágica do Box Model: */\n    padding: 30px; /* Câmera de ar interna */\n    border: 5px dashed #000; /* Borda tracejada preta */\n    margin: 20px; /* Empurra as paredes externas */\n  }\n</style>\n\n<div class="caixa-magica">\n  Sou um conteúdo protegido pelo Padding, Border e Margin!\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "Sistemas de Cores",
      content: "Como o computador entende a cor 'Vermelho Queimado'? Através de sistemas matemáticos:\n\n• Hexadecimal: O mais usado! Começa com # e tem 6 caracteres (Ex: `#FF0000` = Vermelho, `#000000` = Preto, `#FFFFFF` = Branco).\n• RGB(a): Mistura Red (Vermelho), Green (Verde) e Blue (Azul) de 0 a 255. O 'a' no final é o Alpha (transparência).\n• HSL: Mais intuitivo para humanos. Define Matiz (Cor), Saturação e Luz.",
      type: "code",
      codeSnippet: `<style>\n  .box { padding: 15px; margin-bottom: 10px; font-family: sans-serif; font-weight: bold; }\n  .hex { background-color: #8A2BE2; color: white; }\n  .rgba { background-color: rgba(138, 43, 226, 0.4); color: black; }\n  .hsl { background-color: hsl(271, 76%, 53%); color: white; }\n</style>\n\n<div class="box hex">Cor Hexadecimal: #8A2BE2</div>\n<div class="box rgba">RGB com 40% de Transparência</div>\n<div class="box hsl">Cor feita com HSL</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "Variáveis CSS (O Poder da Reutilização)",
      content: "Imagine que seu site tem 50 botões com o mesmo tom de roxo. Se o chefe pedir para mudar para azul, você vai alterar 50 linhas de código?\n\nNão! Nós criamos uma Variável CSS (geralmente no `:root`). Você guarda a cor em um 'pote' e usa o pote pelo site todo. Se precisar mudar a cor, você só altera o pote!",
      type: "code",
      codeSnippet: `<style>\n  /* 1. Criando a variável na raiz do documento */\n  :root {\n    --cor-primaria: #8A2BE2;\n    --espacamento-padrao: 15px;\n  }\n\n  /* 2. Usando a variável (var) */\n  .botao-sistema {\n    background-color: var(--cor-primaria);\n    padding: var(--espacamento-padrao);\n    color: white;\n    border: none;\n    border-radius: 5px;\n  }\n</style>\n\n<button class="botao-sistema">Botão 1</button>\n<button class="botao-sistema">Botão 2</button>`,
      terminalOutput: "Preview CSS"
    }
  ]
};