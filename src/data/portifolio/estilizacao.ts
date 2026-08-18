export const estilizacao = {
  id: "estilizacao",
  titulo: "Design e Aparência",
  cards: [
    {
      title: "Passo 2: Vestindo o Portfólio (CSS)",
      content: "O nosso HTML está puro e sem vida. Agora, vamos usar o CSS para adicionar cores, alinhar o menu usando Flexbox e estilizar a nossa tipografia. Vamos aplicar as regras diretamente usando a tag `<style>` para visualizarmos o resultado.",
      type: "text"
    },
    {
      title: "Aplicando Estilos Modernos",
      content: "Vamos definir um fundo escuro elegante, dar uma cor vibrante aos links e usar Flexbox no cabeçalho para separar a Logo do Menu de Navegação perfeitamente.",
      type: "code",
      codeSnippet: `<style>\n  body {\n    font-family: sans-serif;\n    background-color: #121214;\n    color: #e4e4e7;\n    margin: 0;\n    padding: 0;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #18181b;\n    padding: 20px 40px;\n    border-bottom: 2px solid #8A2BE2;\n  }\n  nav a {\n    color: #8A2BE2;\n    text-decoration: none;\n    margin-left: 20px;\n    font-weight: bold;\n  }\n  section {\n    padding: 60px 40px;\n    text-align: center;\n  }\n</style>\n\n<header>\n  <h1 style="margin:0;">João Dev</h1>\n  <nav>\n    <a href="#sobre">Sobre Mim</a>\n    <a href="#projetos">Projetos</a>\n  </nav>\n</header>\n<section id="sobre">\n  <h2>Olá, eu sou um Desenvolvedor!</h2>\n  <p>Apaixonado por tecnologia e criação de interfaces elegantes.</p>\n</section>`,
      isHtmlPreview: true,
      terminalOutput: "Preview CSS"
    }
  ]
};