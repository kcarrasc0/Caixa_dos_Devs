export const manipulandoHtml = {
  id: "manipulando-html",
  titulo: "Manipulando a Interface",
  cards: [
    {
      title: "Alterando Textos (innerText e textContent)",
      content: "Uma vez que o elemento está nas suas mãos, você pode reescrever o que tem dentro dele. A propriedade `innerText` serve para alterar o 'texto puro'. A grande vantagem dessa ferramenta é a segurança: ela ignora qualquer tag HTML. Se você tentar injetar um link malicioso usando innerText, ele vai imprimir o link em formato de texto, sem transformá-lo em um link clicável.",
      type: "pratica",
      codeSnippet: `const titulo = document.querySelector('.titulo-aula');

// Reescrevendo o texto da tela
titulo.innerText = "Bem-vindo à Aula de DOM!";

// Tentativa de ataque hacker que vai FALHAR no innerText:
const inputDoUsuario = "<button>Vírus</button>";
const divResultado = document.querySelector('#resultado');

// O botão não vai aparecer! O texto vai aparecer escrito literalmente:
divResultado.innerText = inputDoUsuario;`
    },
    {
      title: "Injetando Estruturas (innerHTML)",
      content: "Diferente do anterior, o `innerHTML` é poderoso: ele entende, lê e renderiza tags HTML reais. Com ele, você pode pegar uma div vazia e criar formulários, imagens e textos formatados inteiros lá dentro.\n\n💡 Dica do KCarrasquinho: Muito poder exige muita responsabilidade! NUNCA use innerHTML com dados que o próprio usuário digitou (como comentários ou inputs), pois um usuário mal intencionado pode injetar códigos na sua página.",
      type: "pratica",
      codeSnippet: `const caixaAviso = document.querySelector('.alerta-container');

// O innerHTML reconhece a tag <strong> e renderiza o negrito na tela:
caixaAviso.innerHTML = "Atenção: A sua <strong>senha</strong> está incorreta!";

// Criando múltiplos elementos de uma vez:
caixaAviso.innerHTML = \`
  <h3>Erro Crítico</h3>
  <p>Tente novamente mais tarde.</p>
  <button class="bg-red-500 text-white">Fechar</button>
\`;`
    },
    {
      title: "O Guarda-Roupa do Elemento: classList",
      content: "Hoje em dia, com frameworks como Tailwind CSS, nós raramente mudamos o estilo direto no JS (como `elemento.style.color`). O jeito profissional é criar as classes no CSS e usar o JavaScript apenas para ADICIONAR ou REMOVER essas classes dos elementos dependendo do que acontecer na tela.",
      type: "pratica",
      codeSnippet: `const modalBox = document.querySelector('.meu-modal');
const btnFechar = document.querySelector('#fechar');

// ADICIONA uma nova classe de estilo
modalBox.classList.add('bg-zinc-900', 'border-red-500');

// REMOVE uma classe de estilo
modalBox.classList.remove('hidden'); // Faz o modal aparecer

// O INTERRUPTOR (toggle):
// Se tem a classe, ele tira. Se não tem, ele coloca!
btnFechar.addEventListener('click', () => {
  modalBox.classList.toggle('hidden'); 
});`
    }
  ]
};