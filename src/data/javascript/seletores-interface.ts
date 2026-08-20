export const seletoresInterface = {
  id: "seletores-interface",
  titulo: "Caçadores de Elementos",
  cards: [
    {
      title: "A Precisão do querySelector",
      content: "Antes de mudar um botão, você precisa 'pescá-lo' do HTML e guardá-lo numa variável. O `querySelector` é a forma mais moderna de fazer isso. A grande vantagem dele é usar a mesma sintaxe do CSS: você usa ponto (.) para buscar Classes e hashtag (#) para buscar IDs. Mas atenção: se existirem 5 botões iguais, ele vai trazer apenas o PRIMEIRO que encontrar na página de cima para baixo.",
      type: "pratica",
      codeSnippet: `// 🎯 Buscando pelo ID (Usa-se a #)
const botaoEnviar = document.querySelector('#btn-enviar');

// 🎯 Buscando pela Classe (Usa-se o .)
const tituloSecundario = document.querySelector('.subtitulo');

// 🎯 Buscando pela Tag HTML (Não usa símbolo)
const primeiroParagrafo = document.querySelector('p');`
    },
    {
      title: "A Rede de Pesca: querySelectorAll",
      content: "E se você quiser pegar TODOS os itens de uma lista ou TODOS os botões de apagar da tela? Para isso, usamos o `querySelectorAll`. Diferente do anterior, ele devolve uma coleção (parecida com um Array) chamada NodeList. \n\n💡 Dica do KCarrasquinho: Você não pode simplesmente mandar uma NodeList mudar de cor inteira de uma vez. Vai dar erro! Você precisará usar um laço de repetição (como o forEach) para mudar um de cada vez.",
      type: "pratica",
      codeSnippet: `// Pega absolutamente todas as tags <li> do site
const todosOsItens = document.querySelectorAll('li');

console.log(todosOsItens); // Retorna uma NodeList(5) [li, li, li...]

// O jeito ERRADO (Vai dar erro no console):
// todosOsItens.innerText = "Hackeado"; ❌

// O jeito CERTO (Laço de repetição):
todosOsItens.forEach(function(item) {
  item.innerText = "Fui alterado pelo JS!";
});`
    },
    {
      title: "Os Clássicos: getElementById",
      content: "Antes do querySelector dominar o mercado, nós usávamos ferramentas específicas para cada tipo de busca. O `getElementById` é um clássico. Ele é levemente mais rápido que os outros, mas SÓ procura por IDs. Justamente por isso, você NÃO coloca a hashtag (#) dentro dele, senão o JavaScript vai procurar por um ID chamado literalmente '#meu-botao'.",
      type: "conceito",
      codeSnippet: `// ❌ Jeito ERRADO com getElementById:
// const form = document.getElementById('#form-login');

// ✅ Jeito CERTO:
const form = document.getElementById('form-login');

// Outro clássico antigo (Traz uma coleção de elementos):
const cards = document.getElementsByClassName('card-produto');`
    }
  ]
};