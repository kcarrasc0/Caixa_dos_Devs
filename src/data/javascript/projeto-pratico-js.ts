export const projetoPraticoJs = {
  id: "projeto-pratico-js",
  titulo: "Projeto Final e Boas Práticas",
  cards: [
    {
      title: "A Trindade da Web",
      content: "A regra de ouro de um projeto profissional: O HTML estrutura, o CSS veste e o JavaScript orquestra. Não use o JavaScript para injetar dezenas de estilos e cores complexas diretamente no elemento (`style.backgroundColor`). O correto é criar classes bem definidas no seu Tailwind ou arquivo CSS, e usar o JS apenas como um maestro, ativando e desativando classes quando o usuário interagir.",
      type: "conceito",
      codeSnippet: `// ❌ Jeito Frágil (Hardcoded)
function exibirErroHardcoded() {
  const modal = document.querySelector('#modal');
  modal.style.display = 'block';
  modal.style.backgroundColor = 'red';
  modal.style.color = 'white';
}

// ✅ Jeito Escalável (Tailwind ou Bootstrap gerenciam a beleza)
function exibirErroElegante() {
  const modal = document.querySelector('#modal');
  // O JS só diz "Adicione a classe de erro animado"
  modal.classList.add('alerta-erro-vermelho', 'fade-in'); 
}`
    },
    {
      title: "Desacoplamento: A Fábrica de Funções",
      content: "Quando estamos começando, é comum escrever todo o código do projeto inteiro dentro de um único `addEventListener` gigante. Isso torna o código impossível de ler e consertar depois. Acostume-se a extrair blocos lógicos para Funções separadas. O seu ouvinte de eventos deve ser como um 'índice' de livro: quem bate o olho nele, entende os passos da aplicação imediatamente.",
      type: "pratica",
      codeSnippet: `const formApp = document.querySelector('#app-form');

// As regras lógicas estão guardadas do lado de fora!
function senhaEValida(senha) {
  return senha.length >= 8;
}

function exibirAvisoNaTela(msg) {
  document.querySelector('#aviso').innerText = msg;
}

// O Ouvinte de Evento fica extremamente limpo e legível
formApp.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const senha = document.querySelector('#input-senha').value;
  
  if (senhaEValida(senha)) {
    exibirAvisoNaTela("Cadastro Realizado!");
    formApp.reset();
  } else {
    exibirAvisoNaTela("A senha precisa ter no mínimo 8 dígitos.");
  }
});`
    }
  ]
};  