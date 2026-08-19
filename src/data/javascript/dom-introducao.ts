export const domIntroducao = [
  {
    id: 'intro-01',
    titulo: 'O que é o DOM?',
    descricao: 'O Document Object Model (DOM) não é a linguagem JavaScript. Ele é uma representação do seu HTML (uma "árvore" de elementos) que o navegador cria na memória.',
    codigo: `// Digite isso no console do seu navegador:
console.dir(document);`,
    dicaKCarrasquinho: 'O DOM é como um mapa da sua página. O JavaScript usa esse mapa para encontrar os elementos e brincar com eles!'
  },
  {
    id: 'intro-02',
    titulo: 'O Objeto Global "document"',
    descricao: 'O "document" é a porta de entrada. É a partir dessa palavra-chave que você acessa absolutamente tudo que existe na sua página web.',
    codigo: `// Pegando o título da aba do navegador
console.log(document.title);

// Trocando o título da aba via JS
document.title = "Fui Hackeado!";`,
    dicaKCarrasquinho: 'O `document` é o chefe. Quer mudar o body? Quer mudar o título? Você tem que pedir permissão pra ele primeiro!'
  }
];