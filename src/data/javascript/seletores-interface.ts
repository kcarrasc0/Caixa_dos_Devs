export const seletoresInterface = [
  {
    id: 'sel-01',
    titulo: 'Caçando com querySelector',
    descricao: 'O querySelector é a forma mais moderna de encontrar um elemento. Ele funciona exatamente igual ao CSS (ponto para classes, hashtag para IDs). Ele sempre traz o PRIMEIRO elemento que encontrar.',
    codigo: `// Pega o elemento com o ID "meu-botao"
const botao = document.querySelector('#meu-botao');

// Pega o primeiro elemento com a classe "titulo-principal"
const titulo = document.querySelector('.titulo-principal');`,
    dicaKCarrasquinho: 'Não esqueça as aspas e o símbolo de classe (.) ou ID (#) dentro do parênteses! Senão, ele acha que você está procurando uma tag HTML.'
  },
  {
    id: 'sel-02',
    titulo: 'Caçando múltiplos elementos',
    descricao: 'Se você precisa pegar vários elementos de uma vez (como todos os itens de uma lista), o querySelectorAll é a ferramenta certa. Ele devolve uma lista (NodeList) de elementos.',
    codigo: `// Pega todas as tags <li> da página
const itensDaLista = document.querySelectorAll('li');

// Pega todos os botões que tem a classe "btn-danger"
const botoesApagar = document.querySelectorAll('.btn-danger');`,
    dicaKCarrasquinho: 'Cuidado! Você não pode mudar a cor de uma lista inteira de uma vez. Você terá que fazer um loop (como o forEach) para mudar um por um.'
  },
  {
    id: 'sel-03',
    titulo: 'O Clássico getElementById',
    descricao: 'Antes do querySelector existir, usávamos ferramentas específicas. O getElementById é super rápido, mas SÓ procura por IDs, por isso você não precisa usar a hashtag (#).',
    codigo: `// Pega o formulário pelo ID (Não precisa do #)
const formulario = document.getElementById('form-login');`,
    dicaKCarrasquinho: 'Hoje em dia, a maioria dos devs usa o `querySelector` pra tudo por ser mais versátil, mas é bom conhecer os clássicos!'
  }
];