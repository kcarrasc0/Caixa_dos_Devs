export const estilizacao = {
  id: "estilizacao",
  titulo: "Cores, Fontes e Backgrounds",
  cards: [
    {
      title: "Cores e Códigos",
      content: "No CSS, não dizemos apenas 'azul' ou 'vermelho'. Usamos códigos exatos para alcançar milhões de tons.\n\n• Palavras-chave: `red`, `blue` (Básico, pouco usado profissionalmente).\n• Hexadecimal: O mais famoso! Começa com # seguido de 6 letras/números (Ex: `#FF0000` é vermelho).\n• RGB(a): Mistura Red, Green e Blue. O 'a' no final é o Alpha (transparência).",
      type: "code",
      codeSnippet: `<style>\n  .btn-hex {\n    background-color: #8A2BE2; /* Nosso roxo oficial */\n    color: white;\n    padding: 10px;\n    border: none;\n  }\n  \n  .btn-rgba {\n    background-color: rgba(228, 77, 38, 0.5); /* Laranja com 50% de transparência */\n    color: black;\n    padding: 10px;\n    border: none;\n    margin-top: 10px;\n  }\n</style>\n\n<button class="btn-hex">Botão Hexadecimal</button><br>\n<button class="btn-rgba">Botão Transparente (RGBA)</button>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "A Arte da Tipografia",
      content: "A leitura é a principal atividade na internet. O CSS te dá controle total sobre os textos:\n\n• `font-family`: Muda o tipo da letra (Arial, Roboto, etc).\n• `font-size`: O tamanho. Profissionais usam 'rem' ou 'em' em vez de 'px' para acessibilidade.\n• `font-weight`: A grossura da letra (normal, bold, ou números de 100 a 900).\n• `text-align`: Alinha à esquerda, direita ou centro.",
      type: "code",
      codeSnippet: `<style>\n  .titulo-elegante {\n    font-family: 'Georgia', serif;\n    font-size: 24px;\n    font-weight: bold;\n    color: #333;\n    text-align: center;\n    letter-spacing: 2px; /* Espaço entre as letras */\n  }\n</style>\n\n<h2 class="titulo-elegante">A Caixa dos Devs</h2>\n<p style="text-align: center;">Transformando código em magia.</p>`,
      terminalOutput: "Preview CSS"
    }
  ]
};