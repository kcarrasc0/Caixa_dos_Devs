export const eventosOuvintes = {
  id: "eventos-ouvintes",
  titulo: "Eventos e Ouvintes",
  cards: [
    {
      title: "O Gatilho: addEventListener",
      content: "Um site estático é um site chato. Para torná-lo interativo, precisamos espalhar 'ouvintes' pela página. O `addEventListener` é um radar: ele fica escutando um elemento específico 24h por dia. Quando algo acontece (o evento), ele dispara a sua lógica.\n\n💡 Dica do KCarrasquinho: Ele sempre pede dois ingredientes: O NOME da ação (em formato de texto) e uma FUNÇÃO dizendo o que ele deve fazer quando a ação ocorrer.",
      type: "conceito",
      codeSnippet: `const botaoMagico = document.querySelector('.btn-magico');

// Parâmetro 1: Qual é a ação? ('click')
// Parâmetro 2: O que fazer? (uma arrow function)
botaoMagico.addEventListener('click', () => {
  alert('Incrível! Você clicou no botão!');
  botaoMagico.innerText = "Fui Clicado";
});`
    },
    {
      title: "Um Mundo Além do Clique",
      content: "O JavaScript é capaz de rastrear quase tudo que o usuário faz. O evento de 'click' é o mais famoso, mas existem dezenas de outros: duplo clique, pressionar uma tecla, passar o mouse em cima de uma foto, ou rolar a barra de scroll da página.",
      type: "pratica",
      codeSnippet: `const campoDeBusca = document.querySelector('#pesquisa');
const cardProduto = document.querySelector('.card');

// Dispara cada vez que o usuário SOLTA uma tecla no teclado
campoDeBusca.addEventListener('keyup', () => {
  console.log("Pesquisando no banco de dados: ", campoDeBusca.value);
});

// Dispara quando o ponteiro do mouse ENTRA na área do elemento
cardProduto.addEventListener('mouseenter', () => {
  cardProduto.classList.add('shadow-2xl', '-translate-y-2');
});

// Dispara quando o ponteiro do mouse SAI do elemento
cardProduto.addEventListener('mouseleave', () => {
  cardProduto.classList.remove('shadow-2xl', '-translate-y-2');
});`
    },
    {
      title: "O Informante: O Objeto Event",
      content: "Sempre que o `addEventListener` dispara, o navegador joga um presente invisível para dentro da sua função. É o 'Objeto de Evento' (geralmente chamamos a variável de `event` ou apenas `e`). Esse objeto é um relatório completo: diz as coordenadas X e Y do mouse, qual tecla exata do teclado foi apertada e, principalmente, em quem o usuário clicou (`e.target`).",
      type: "pratica",
      codeSnippet: `// Capturando cliques em qualquer lugar da tela inteira
document.addEventListener('click', (evento) => {
  
  // Imprime exatamente a tag HTML que sofreu o clique
  console.log("Você clicou no alvo:", evento.target);
  
  // Imprime as coordenadas do mouse na tela
  console.log(\`Posição: X: \${evento.clientX} | Y: \${evento.clientY}\`);
});

// Detectando qual tecla foi pressionada
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    fecharTodosOsModais();
  }
});`
    }
  ]
};