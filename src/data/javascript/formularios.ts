export const formularios = {
  id: "formularios",
  titulo: "Domando Formulários",
  cards: [
    {
      title: "Cuidado com o Clique! Use Submit",
      content: "O erro número 1 de quem está aprendendo a manipular formulários é tentar colocar um evento de 'click' direto no botão Enviar. Isso é uma falha de segurança e usabilidade, pois o usuário pode enviar o formulário apertando a tecla 'Enter' em vez de clicar no botão. O jeito profissional é colocar um evento de 'submit' (envio) diretamente na tag <form>.",
      type: "conceito",
      codeSnippet: `// ❌ Jeito Amador e arriscado:
// const btn = document.querySelector('#btn-enviar');
// btn.addEventListener('click', () => { ... });

// ✅ Jeito Profissional e seguro:
const formularioDeLogin = document.querySelector('#form-login');

formularioDeLogin.addEventListener('submit', (evento) => {
  console.log("Tentativa de envio detectada (por clique ou Enter)!");
});`
    },
    {
      title: "Travando a Engrenagem (preventDefault)",
      content: "Desde a década de 90, o comportamento padrão do HTML ao dar 'submit' num form é atualizar a página e apagar tudo que estava nela. Em aplicações modernas de Front-end (Single Page Applications), isso é terrível! Nós usamos o comando mágico `preventDefault()` para dizer ao navegador: 'Pare! Interrompa o comportamento padrão. Eu, o JavaScript, assumo o envio a partir daqui'.",
      type: "pratica",
      codeSnippet: `const formCadastro = document.querySelector('#cadastro');

formCadastro.addEventListener('submit', (e) => {
  // E é a variável do Evento.
  // preventDefault = Prevenir o padrão.
  e.preventDefault(); 
  
  // Sem a página recarregar, podemos validar a senha,
  // mostrar mensagens de erro e fazer requisições à API.
  console.log("A tela não piscou! Os dados estão salvos no JS.");
});`
    },
    {
      title: "Extraindo Valores (.value)",
      content: "Diferente de um <h1> ou <p>, as tags de <input> guardam o texto que o usuário digita de forma especial. Você nunca deve usar o innerText para ler um input. A propriedade correta é sempre a `.value`.\n\n💡 Dica do KCarrasquinho: Lembre-se que TUDO que vem de um .value vem no formato de String (texto). Se for um formulário de idade ou dinheiro, use `Number(input.value)` para conseguir fazer cálculos matemáticos!",
      type: "pratica",
      codeSnippet: `const form = document.querySelector('form');
const inputIdade = document.querySelector('#idade-usuario');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Pegando a idade e convertendo o texto para número matemático
  const idadeNumerica = Number(inputIdade.value);
  
  // Validação simples direto na tela
  if (idadeNumerica < 18) {
    alert("Erro: Você precisa ser maior de idade!");
  } else {
    alert("Cadastro aprovado!");
    form.reset(); // Comando útil para limpar todos os inputs
  }
});`
    }
  ]
};