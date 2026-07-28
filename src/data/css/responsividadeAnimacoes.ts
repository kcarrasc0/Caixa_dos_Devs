export const responsividadeAnimacoes = {
  id: "responsividade-animacoes",
  titulo: "Responsividade e Transições",
  cards: [
    {
      title: "O que é Responsividade e Mobile First?",
      content: "Antigamente, as pessoas faziam um site pro Computador e um site separado pro Celular. Hoje, fazemos UM site que 'responde' e se adapta ao tamanho da tela (Design Responsivo).\n\nA filosofia atual é o Mobile First: Você cria o CSS pensando no celular primeiro, e só depois adiciona regras para telas maiores. Tudo começa pela tag `<meta name=\"viewport\">` colocada no HTML para avisar o celular para não dar zoom forçado.",
      type: "text"
    },
    {
      title: "O Radar da Tela: Media Queries",
      content: "A mágica da responsividade acontece com o `@media`. Ele funciona como um 'Se/Então' (If) do CSS.\n\nVocê avisa o navegador: 'Mude a cor de fundo apenas se a tela tiver pelo menos 600px de largura'.",
      type: "code",
      codeSnippet: `<style>\n  .caixa-inteligente {\n    background-color: #8A2BE2; /* Começa Roxo (Mobile) */\n    color: white;\n    padding: 20px;\n    text-align: center;\n    font-family: sans-serif;\n    transition: background-color 0.5s; /* Suaviza a troca */\n  }\n\n  /* Só ativa quando a tela for maior que 600px */\n  @media (min-width: 600px) {\n    .caixa-inteligente {\n      background-color: #22c55e; /* Vira Verde! */\n    }\n  }\n</style>\n\n<div class="caixa-inteligente">\n  Aumente a janela do seu navegador! \n  <br><small>(Num PC real ela ficaria verde!)</small>\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "Esqueça os Pixels! (Unidades Relativas)",
      content: "Se você usa 'px' (Pixels) para tudo, seu site quebra em telas gigantes ou pequenas. Profissionais usam unidades elásticas:\n\n• `%` (Porcentagem): Ocupa X% do espaço do pai.\n• `vw` e `vh`: Viewport Width/Height. 100vh significa '100% da altura da tela que o usuário está vendo'.\n• `rem`: Relative to Root. Baseado no tamanho da fonte padrão do navegador (geralmente 16px). Ótimo para acessibilidade, pois se o usuário tem problema de visão e aumenta a fonte do Windows, seu site cresce junto!",
      type: "text"
    },
    {
      title: "Dando Vida: Transições CSS",
      content: "Uma mudança bruta (um botão ficar cinza do nada ao passar o mouse) parece site antigo. O CSS3 trouxe as Transições para suavizar os efeitos.\n\nVocê define 3 coisas: \n1. `transition-property`: O que vai animar? (background, tamanho, ou 'all' para tudo).\n2. `duration`: Quanto tempo demora? (ex: 0.3s).\n3. `timing-function`: O ritmo da animação. (ex: 'ease-in-out' começa devagar, acelera e termina devagar).",
      type: "code",
      codeSnippet: `<style>\n  .botao-animado {\n    background-color: #333;\n    color: white;\n    padding: 15px 30px;\n    border: none;\n    border-radius: 8px;\n    font-size: 16px;\n    cursor: pointer;\n    \n    /* A Mágica da Transição */\n    transition: all 0.4s ease-in-out;\n  }\n\n  /* O estado de 'Hover' (Quando o mouse passa por cima) */\n  .botao-animado:hover {\n    background-color: #8A2BE2; /* Fica Roxo */\n    transform: scale(1.1); /* Cresce 10% */\n  }\n</style>\n\n<div style="display: flex; justify-content: center; padding: 40px;">\n  <button class="botao-animado">Passe o Mouse em Mim!</button>\n</div>`,
      terminalOutput: "Preview CSS"
    }
  ]
};