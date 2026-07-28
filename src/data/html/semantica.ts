export const semantica = {
  id: "semantica-textos",
  titulo: "Textos e a Arte da Semântica",
  cards: [
    {
      title: "O Fim das Caixas Misteriosas (<div>)",
      content: "Imagine que você vai fazer uma mudança de casa. Você guarda tudo em caixas de papelão e escreve 'Coisas' em todas elas. Quando chegar na casa nova, como você vai saber onde estão os pratos e onde estão os sapatos?\n\nNo HTML antigo, os programadores faziam isso: usavam a tag genérica `<div>` para embrulhar tudo. O navegador não sabia o que era um menu, o que era um texto ou o que era o rodapé.\n\nCom o HTML5, ganhamos as Etiquetas de Mudança (Tags Semânticas). Elas funcionam como as `<div>`, mas já vêm com o nome do cômodo escrito nelas!",
      type: "text"
    },
    {
      title: "As Zonas da Página",
      content: "Um site bem feito é dividido em blocos lógicos. O Google e os leitores de tela procuram exatamente por esses blocos para entender o seu conteúdo:\n\n• `<header>`: O cabeçalho. Fica no topo e geralmente guarda a logo e o título.\n• `<nav>` (Navigation): Onde colocamos os links do menu principal.\n• `<main>`: O recheio principal! Só pode existir UM `<main>` por página.\n• `<footer>`: O rodapé. Fica lá no final, com direitos autorais e links de contato.",
      type: "code",
      codeSnippet: `<!-- Um layout de site semanticamente perfeito -->\n<header style="background: #333; color: white; padding: 10px;">\n  <h2>Meu Site Incrível</h2>\n  <nav>\n    <a href="#" style="color: #8A2BE2;">Início</a> |\n    <a href="#" style="color: #8A2BE2;">Sobre</a>\n  </nav>\n</header>\n\n<main style="padding: 20px;">\n  <h3>Bem-vindo ao conteúdo principal!</h3>\n  <p>Aqui o Google sabe que está a informação mais valiosa.</p>\n</main>\n\n<footer style="background: #ddd; padding: 10px; font-size: 12px;">\n  <p>© 2024 Caixa dos Devs. Todos os direitos reservados.</p>\n</footer>`,
      terminalOutput: "[ O Mini Navegador vai renderizar um layout completo aqui ]"
    },
    {
      title: "Seções e Artigos",
      content: "Dentro do nosso `<main>`, nós também precisamos organizar a casa. Para isso usamos duas tags muito confusas para iniciantes, mas fáceis se você usar esta analogia:\n\n• `<article>` (Artigo): É uma postagem independente. Se você arrancar ele do seu site e colar em outro lugar, ele ainda faz sentido sozinho (ex: um post de blog, um card de produto ou um tweet).\n\n• `<section>` (Seção): Agrupa coisas do mesmo assunto. Não faz sentido sozinha. É como a seção de 'Esportes' de um jornal.",
      type: "code",
      codeSnippet: `<main>\n  <!-- Uma seção agrupando os produtos -->\n  <section>\n    <h2>Nossos Produtos</h2>\n    \n    <!-- Cada produto é um artigo independente -->\n    <article style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">\n      <h3>Teclado Mecânico</h3>\n      <p>Teclado RGB com switches azuis.</p>\n      <button>Comprar</button>\n    </article>\n\n    <article style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">\n      <h3>Mouse Gamer</h3>\n      <p>Mouse com 12.000 DPI e botões laterais.</p>\n      <button>Comprar</button>\n    </article>\n  </section>\n</main>`,
      terminalOutput: "[ O Mini Navegador vai renderizar uma lista de produtos ]"
    }
  ]
};