export const estrutura = {
  id: "estrutura",
  titulo: "O Esqueleto do Portfólio",
  cards: [
    {
      title: "Passo 1: A Planta Baixa (HTML)",
      content: "Nesta trilha, vamos construir um portfólio real. O primeiro passo é criar a estrutura semântica usando HTML5. Precisaremos de um Cabeçalho (Header) com menu de navegação, uma seção Sobre Mim (Main/Section) e um Rodapé (Footer).",
      type: "text"
    },
    {
      title: "A Estrutura Semântica",
      content: "Em vez de usar `<div>` para tudo, vamos usar as tags corretas. Isso garante que os buscadores (Google) e leitores de tela entendam exatamente o que é o menu e o que é o conteúdo principal.",
      type: "code",
      codeSnippet: `<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <title>Meu Portfólio</title>\n</head>\n<body>\n  <header>\n    <h1>João Dev</h1>\n    <nav>\n      <a href="#sobre">Sobre Mim</a> | \n      <a href="#projetos">Projetos</a>\n    </nav>\n  </header>\n\n  <main>\n    <section id="sobre">\n      <h2>Olá, eu sou um Desenvolvedor!</h2>\n      <p>Apaixonado por tecnologia e criação de interfaces.</p>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 - Feito com a Caixa dos Devs</p>\n  </footer>\n</body>\n</html>`,
      isHtmlPreview: true,
      terminalOutput: "Preview HTML"
    }
  ]
};