export const arraysDinamicos = {
  id: "arrays-dinamicos",
  titulo: "Arrays e Renderização Dinâmica",
  cards: [
    {
      title: "A Fábrica de Tags: createElement",
      content: "No mundo real, sites como a Shopee não têm 10.000 tags <div> escritas manualmente no HTML. O próprio JavaScript lê os dados do servidor e constrói as tags em tempo real. O comando `createElement` funciona como uma fábrica: ele forja uma nova tag do zero diretamente na memória do seu computador.",
      type: "conceito",
      codeSnippet: `// 1. Criando a tag <li>
const novaTarefa = document.createElement('li');

// 2. Customizando a nossa nova tag
novaTarefa.innerText = "Estudar Next.js";
novaTarefa.classList.add('px-4', 'py-2', 'bg-zinc-800', 'text-white');

// Até este ponto, o <li> existe na memória, 
// mas ainda NÃO está aparecendo na tela do usuário!`
    },
    {
      title: "Colando na Tela: appendChild",
      content: "Depois de forjar e customizar o seu elemento, ele fica 'flutuando' invisível na memória. Para ele aparecer na tela, você precisa escolher um elemento PAI que já existe no seu HTML e usar o método `appendChild` (que significa 'anexar filho'). O novo elemento sempre vai aparecer como o último item da lista.\n\n💡 Dica do KCarrasquinho: É como pendurar um quadro. O createElement compra o quadro, o classList pinta a moldura, e o appendChild pendura ele na parede do seu HTML!",
      type: "pratica",
      codeSnippet: `// 1. Achar a Parede (A <ul> que já está no HTML)
const listaUl = document.querySelector('#minhas-tarefas');

// 2. Criar o Quadro
const li = document.createElement('li');
li.innerText = "Tarefa Pendurada!";

// 3. Pendurar na parede
listaUl.appendChild(li);`
    },
    {
      title: "O Padrão de Ouro: forEach + DOM",
      content: "Esta é a técnica mais importante que você vai usar em frameworks no futuro! Nós combinamos o poder dos Arrays com o DOM. Pegamos uma lista de dados, fazemos um laço de repetição (`forEach`), e para CADA item da lista, o JS forja um elemento, preenche e pendura na tela automaticamente.",
      type: "pratica",
      codeSnippet: `// Array simulando dados vindo de um Banco de Dados
const pokemons = ["Pikachu", "Charmander", "Squirtle"];
const containerLista = document.querySelector('#pokedex');

// Para cada nome dentro da lista...
pokemons.forEach((pokemon) => {
  // 1. Cria a tag
  const elementoLi = document.createElement('li');
  
  // 2. Preenche com a variável do Array
  elementoLi.innerText = pokemon;
  elementoLi.classList.add('text-yellow-500', 'font-bold');
  
  // 3. Joga na tela
  containerLista.appendChild(elementoLi);
});
// Resultado: 3 novas tags <li> aparecerão na página!`
    }
  ]
};