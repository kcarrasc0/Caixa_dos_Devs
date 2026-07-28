export const introducao = {
  id: "introducao",
  titulo: "Fundamentos e Mercado",
  cards: [
    {
      title: "A Alma do Design (O que é CSS?)",
      content: "CSS (Cascading Style Sheets) significa Folhas de Estilo em Cascata.\n\nSe o HTML é o esqueleto (a estrutura), o CSS é a pele, a roupa e a maquiagem. Ele pega aquela página feia de texto preto e fundo branco e a transforma em interfaces belíssimas e modernas.",
      type: "text"
    },
    {
      title: "Como aplicar o CSS? (Inline vs Externo)",
      content: "Você pode dar estilo a um elemento de várias formas:\n\n1. CSS Inline: Colocando o estilo direto na tag HTML (Ex: `<h1 style='color: red;'>`). É rápido, mas vira uma bagunça se o site for grande.\n2. Arquivo Externo: Criamos um arquivo `.css` separado e 'linkamos' no HTML. Essa é a forma mais organizada e tradicional!",
      type: "text"
    },
    {
      title: "A Sintaxe: Seletores, Propriedades e Valores",
      content: "A gramática do CSS é muito simples, baseada em 3 pilares:\n\n• Seletor: QUEM você quer pintar? Pode ser uma tag (`h1`), uma classe (`.titulo`) ou um ID (`#principal`).\n• Propriedade: O QUE você quer mudar nele? (cor, tamanho, margem).\n• Valor: QUAL será o resultado? (azul, 20px, centralizado).",
      type: "code",
      codeSnippet: `<style>\n  /* Seletor { Propriedade: Valor; } */\n  .texto-bonito {\n    color: #8A2BE2;\n    font-size: 24px;\n    text-align: center;\n    font-family: sans-serif;\n  }\n</style>\n\n<p class="texto-bonito">\n  Seletor mira, Propriedade escolhe, Valor executa!\n</p>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "O Irmão Bombado: Tailwind CSS",
      content: "Lembra do CSS Inline? O Tailwind pegou essa ideia e criou um framework genial. Em vez de criar arquivos CSS externos enormes, você escreve 'classes mágicas' direto no HTML.\n\nVocê digita `text-blue-500 font-bold p-4` e ele já entende o recado. Ele é o queridinho do mercado moderno para desenvolvimento ágil!",
      type: "code",
      codeSnippet: `<div style="display: flex; justify-content: center; gap: 40px; align-items: center; height: 150px; background: #111;">\n  \n  <!-- O CSS Tradicional -->\n  <div style="text-align: center;">\n    <img src="/personagens/css.png" alt="Personagem CSS" width="80">\n    <p style="color: white; font-family: sans-serif; margin-top: 10px;">CSS Puro</p>\n  </div>\n\n  <span style="color: #8A2BE2; font-size: 30px; font-weight: bold;">VS</span>\n\n  <!-- O Tailwind CSS -->\n  <div style="text-align: center;">\n    <img src="/personagens/tailwindcss.png" alt="Personagem Tailwind" width="80">\n    <p style="color: white; font-family: sans-serif; margin-top: 10px;">Tailwind</p>\n  </div>\n\n</div>`,
      terminalOutput: "Preview CSS"
    },
    {
      title: "CSS no Mundo Real (React e Next.js)",
      content: "No mercado de trabalho usando React e Next.js, nós raramente usamos um 'arquivão' CSS gigantesco para o site todo. O CSS é organizado por *Componentes*.\n\nIsso significa que o botão tem o seu próprio CSS, o cabeçalho tem o dele, deixando tudo escalável. O mercado usa 3 grandes caminhos para isso:\n\n1. CSS Modules: Arquivos CSS normais, mas que só funcionam num componente específico.\n2. Styled Components: Escrevemos CSS DENTRO do JavaScript.\n3. Tailwind CSS: Aquele que acabamos de ver, líder absoluto no Next.js hoje.",
      type: "text"
    }
  ]
};