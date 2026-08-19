export const manipulandoHtml = [
  {
    id: 'man-01',
    titulo: 'Alterando Textos (innerText)',
    descricao: 'O atributo innerText serve para pegar ou alterar apenas o "texto puro" que está dentro de uma tag.',
    codigo: `const titulo = document.querySelector('h1');

// Trocando o texto do H1
titulo.innerText = "Bem-vindo ao Sistema!";`,
    dicaKCarrasquinho: 'Use o innerText sempre que quiser garantir que o usuário não consiga injetar códigos perigosos no seu site. Ele ignora tags HTML!'
  },
  {
    id: 'man-02',
    titulo: 'Injetando Tags (innerHTML)',
    descricao: 'Diferente do innerText, o innerHTML entende e renderiza tags HTML (como negritos, spans ou links) de verdade.',
    codigo: `const caixaMensagem = document.querySelector('.alerta');

// Colocando um texto em negrito dentro da div
caixaMensagem.innerHTML = "Atenção: <strong>Senha incorreta!</strong>";`,
    dicaKCarrasquinho: 'Muito poder exige muita responsabilidade. Cuidado ao usar innerHTML com dados que o usuário digitou!'
  },
  {
    id: 'man-03',
    titulo: 'Mudando a "Roupa" com classList',
    descricao: 'Se você usa Bootstrap ou Tailwind, o classList é seu melhor amigo. Ele permite adicionar ou remover classes no elemento via JavaScript.',
    codigo: `const botao = document.querySelector('.meu-btn');

// Adiciona uma classe nova
botao.classList.add('bg-green-500');

// Remove uma classe antiga
botao.classList.remove('bg-red-500');`,
    dicaKCarrasquinho: 'Dica de Ouro: o `.classList.toggle("classe")` funciona como um interruptor. Se a classe existir, ele tira. Se não existir, ele coloca!'
  }
];