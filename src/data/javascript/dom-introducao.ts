export const domIntroducao = {
  id: "dom-introducao",
  titulo: "Introdução ao DOM",
  cards: [
    {
      title: "O que é o DOM (A Ponte Mágica)?",
      content: "O Document Object Model (DOM) não é a linguagem JavaScript em si, mas sim uma API (Interface de Programação) que os navegadores fornecem. Quando o navegador lê o seu arquivo HTML, ele o transforma em uma 'árvore' gigante na memória do computador. O DOM é justamente essa árvore. Sem ele, o JavaScript seria completamente cego e não conseguiria ver, alterar ou interagir com os botões, textos e imagens da sua página.\n\n💡 Dica do KCarrasquinho: Pense no HTML como a planta de uma casa e no DOM como a casa já construída. O JavaScript é o eletricista que entra na casa pronta para acender e apagar as luzes!",
      type: "conceito",
      codeSnippet: `// Abra o DevTools (F12) no seu navegador, vá na aba Console e digite:
console.dir(document);

// Você verá um objeto gigante cheio de propriedades.
// Isso é o navegador te mostrando o DOM por debaixo dos panos!`
    },
    {
      title: "O Objeto Global 'document'",
      content: "No mundo do JavaScript rodando no navegador, o objeto `document` é o chefe de tudo. Ele é a porta de entrada para a sua página. Qualquer alteração que você queira fazer na interface precisa, obrigatoriamente, passar por ele. Ele guarda informações da aba aberta, da URL e de todo o conteúdo visível.\n\n💡 Dica do KCarrasquinho: O 'document' é o dono da festa. Quer mudar a cor do fundo da página? Tem que pedir para ele primeiro!",
      type: "pratica",
      codeSnippet: `// Lendo informações da página atual
console.log("Título da aba: ", document.title);
console.log("URL atual: ", document.URL);

// O JavaScript também pode sobrescrever informações!
// Trocando o título da aba do navegador dinamicamente:
document.title = "Caixa dos Devs - Hackeado!";

// Acessando diretamente o <body> do HTML:
document.body.style.backgroundColor = "#09090b"; // Fundo dark mode`
    }
  ]
};