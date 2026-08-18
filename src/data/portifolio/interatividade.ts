export const interatividade = {
  id: "interatividade",
  titulo: "A Magia do JavaScript",
  cards: [
    {
      title: "Passo 3: Ganhando Vida (JavaScript)",
      content: "Um portfólio profissional precisa interagir com o usuário. Com o JavaScript, podemos manipular os elementos da tela (o DOM - Document Object Model). Vamos criar um script para alterar o texto da página ao clique de um botão.",
      type: "text"
    },
    {
      title: "Manipulando o DOM",
      content: "Neste exemplo integrado, usamos HTML para o botão, CSS para o design dele e JavaScript (dentro da tag `<script>`) para escutar o evento de clique (`onclick`) e modificar o conteúdo da página dinamicamente.",
      type: "code",
      codeSnippet: `<style>\n  .btn-js {\n    padding: 12px 24px;\n    background: #8A2BE2;\n    color: white;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n    font-weight: bold;\n  }\n</style>\n\n<div style="text-align: center; font-family: sans-serif; padding: 40px;">\n  <h2 id="mensagem-titulo">Bem-vindo ao meu Portfólio!</h2>\n  <p id="mensagem-texto">Clique no botão abaixo para me contratar.</p>\n  \n  <button class="btn-js" onclick="contratarDev()">Contratar Dev</button>\n</div>\n\n<script>\n  function contratarDev() {\n    const titulo = document.getElementById('mensagem-titulo');\n    const texto = document.getElementById('mensagem-texto');\n    \n    titulo.innerHTML = "Obrigado pela oportunidade! 🚀";\n    titulo.style.color = "#8A2BE2";\n    texto.innerHTML = "Entrarei em contato em breve.";\n  }\n</script>`,
      isHtmlPreview: true,
      terminalOutput: "Preview Interativo"
    },
    {
      title: "Jornada Concluída!",
      content: "Parabéns! Você acaba de unir a tríade da Web: estruturou com HTML, embelezou com CSS e deu vida com JavaScript. Este é o alicerce absoluto de todo o desenvolvimento Front-end mundial.",
      type: "text"
    }
  ]
};