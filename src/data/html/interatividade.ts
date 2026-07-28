export const interatividade = {
  id: "interatividade-embutidos",
  titulo: "Interatividade e Embutidos",
  cards: [
    {
      title: "A Tag <details>",
      content: "A tag `<details>` cria um widget de revelação expansível no qual a informação só fica visível quando o widget é alternado para o estado 'aberto'. Funciona de forma nativa sem precisar de JavaScript!",
      type: "code",
      codeSnippet: `<details>\n  Aqui fica o conteúdo oculto que será revelado quando o usuário clicar!\n</details>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <summary>",
      content: "A tag `<summary>` serve como título para a tag `<details>`. Ao clicar no `<summary>`, o estado do elemento pai (`<details>`) altera entre aberto e fechado. Ela deve ser a PRIMEIRA filha da tag `<details>`.",
      type: "code",
      codeSnippet: `<details>\n  <summary>Clique para revelar o segredo</summary>\n  O HTML5 é incrível!\n</details>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "A Tag <iframe>",
      content: "A tag `<iframe>` (Inline Frame) representa um contexto de navegação aninhado. Ou seja, ela permite embutir outra página HTML completamente independente dentro da página atual (muito usado para vídeos do YouTube ou Google Maps).",
      type: "code",
      codeSnippet: `<!-- Embutindo a página da Wikipedia num quadrado de 300x150 pixels -->\n<iframe src="https://pt.wikipedia.org/" width="300" height="150"></iframe>`,
      terminalOutput: "Preview HTML"
    },
    {
      title: "Exemplo Completo: FAQ Interativo",
      content: "Este é o exemplo supremo do poder nativo do HTML5. Criamos uma seção de Perguntas Frequentes (FAQ) completamente interativa usando apenas `<details>` e `<summary>`, e, ao final, embutimos um mini-mapa com o `<iframe>`.",
      type: "code",
      codeSnippet: `<h2>Dúvidas Frequentes (FAQ)</h2>\n\n<details style="margin-bottom: 10px; cursor: pointer;">\n  <summary><strong>Qual é o horário de atendimento?</strong></summary>\n  <p>Nosso atendimento é de segunda a sexta, das 08h às 18h.</p>\n</details>\n\n<details style="margin-bottom: 20px; cursor: pointer;">\n  <summary><strong>Onde vocês ficam localizados?</strong></summary>\n  <p>Ficamos no centro da cidade, veja o mapa abaixo:</p>\n</details>\n\n<!-- Iframe meramente ilustrativo -->\n<iframe \n  src="https://example.com" \n  width="100%" \n  height="150" \n  style="border: 2px solid #8A2BE2; border-radius: 8px;">\n</iframe>`,
      terminalOutput: "Preview HTML"
    }
  ]
};