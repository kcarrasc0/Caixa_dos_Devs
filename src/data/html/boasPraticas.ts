export const boasPraticas = {
  id: "boas-praticas",
  titulo: "SEO e Acessibilidade",
  cards: [
    {
      title: "O que é SEO na Prática?",
      content: "SEO (Search Engine Optimization) é a arte de 'fazer o Google gostar do seu site' para ele aparecer na primeira página das buscas.\n\nO robô do Google é cego para o design. Ele não liga se a sua letra está gigante, vermelha e em negrito. Ele entra no seu site e lê APENAS o código HTML.\n\nSe você usar uma `<div>` (caixa genérica) para o seu título, o Google vai achar que é só um texto qualquer. Mas se você usar a tag correta `<h1>`, você está gritando para o robô: 'ESTE É O ASSUNTO PRINCIPAL DA PÁGINA!'.",
      type: "code",
      codeSnippet: `<!-- ❌ O jeito ERRADO (O Google ignora a importância): -->\n<div class="texto-gigante-negrito-vermelho">\n  Compre Celulares Baratos Aqui\n</div>\n\n<!-- ✅ O jeito CERTO (O Google entende e ranqueia seu site): -->\n<header>\n  <h1>Compre Celulares Baratos Aqui</h1>\n  <p>Encontre as melhores ofertas de smartphones com garantia.</p>\n</header>`,
      terminalOutput: "Compre Celulares Baratos Aqui\n\nEncontre as melhores ofertas de smartphones com garantia."
    },
    {
      title: "Hierarquia de Títulos (H1 ao H6)",
      content: "Ainda falando de SEO e organização, o HTML possui 6 níveis de títulos, do `<h1>` (mais importante) ao `<h6>` (menos importante). \n\nRegra de Ouro do SEO: NUNCA tenha mais de um `<h1>` na mesma página! Ele é o título do livro. O `<h2>` são os capítulos, o `<h3>` são os subtítulos dos capítulos, e assim por diante.\n\nPular a ordem (ir de um H1 direto para um H4) confunde os leitores de tela e prejudica a sua nota com os buscadores.",
      type: "code",
      codeSnippet: `<!-- Exemplo de uma estrutura perfeita para um Blog -->\n<article>\n  <!-- Título principal da página (ÚNICO) -->\n  <h1>Como aprender a programar em 2024</h1>\n  \n  <!-- Subtítulo da seção -->\n  <h2>1. Escolha uma linguagem base</h2>\n  <p>Recomendamos começar com lógica e JavaScript...</p>\n\n  <!-- Sub-tópico dentro da seção -->\n  <h3>Por que JavaScript?</h3>\n  <p>Porque ele roda em qualquer navegador moderno...</p>\n</article>`,
      terminalOutput: "<h1>Como aprender a programar em 2024</h1>\n<h2>1. Escolha uma linguagem base</h2>\n<p>Recomendamos começar com lógica e JavaScript...</p>\n<h3>Por que JavaScript?</h3>\n<p>Porque ele roda em qualquer navegador moderno...</p>"
    },
    {
      title: "Acessibilidade (a11y) e o Atributo 'alt'",
      content: "Desenvolver com acessibilidade é garantir que qualquer pessoa, independente de deficiências (como cegueira ou baixa visão), consiga usar o seu site.\n\nMilhões de pessoas navegam usando 'Leitores de Tela' (programas que narram o site). O leitor de tela não sabe o que tem numa foto, a não ser que você conte para ele usando o atributo `alt` (Texto Alternativo).\n\nSe você deixa o `alt` vazio, o deficiente visual perde a informação daquela imagem. É um detalhe simples no código que muda a vida do usuário.",
      type: "code",
      codeSnippet: `<!-- ❌ ERRADO: O leitor de tela vai ler apenas "Imagem" -->\n<img src="grafico-vendas-2024.png" />\n\n<!-- ✅ CERTO: O leitor de tela vai narrar a descrição para o usuário -->\n<img \n  src="grafico-vendas-2024.png" \n  alt="Gráfico de barras mostrando um aumento de 30% nas vendas de dezembro"\n/>`,
      terminalOutput: "[ Imagem Renderizada na Tela ]"
    }
  ]
};