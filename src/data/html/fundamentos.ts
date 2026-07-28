export const fundamentos = {
  id: "fundamentos",
  titulo: "O Esqueleto da Web",
  cards: [
    {
      title: "O que é HTML?",
      content: "Vamos tirar o elefante da sala: HTML NÃO é linguagem de programação!\n\nHTML (HyperText Markup Language) é uma Linguagem de Marcação. Ele não toma decisões lógicas nem faz contas matemáticas. O trabalho dele é ser a 'planta baixa' de um site.\n\nPense no HTML como os tijolos e vigas de uma casa. Ele sobe as paredes e define onde fica a porta e a janela. A pintura e decoração (CSS) e a parte elétrica e hidráulica (JavaScript) vêm só depois!",
      type: "text"
    },
    {
      title: "Anatomia de uma Tag: A Teoria do Sanduíche",
      content: "No HTML, nós conversamos com o navegador usando 'Tags' (etiquetas). Pense nelas como um sanduíche: você precisa de uma fatia de pão embaixo e outra em cima para segurar o recheio.\n\n• Abertura (Fatia de baixo): Colocamos o nome entre sinais de menor e maior `<tag>`\n• Conteúdo (Recheio): É o texto ou imagem que vai aparecer na tela.\n• Fechamento (Fatia de cima): Igual à abertura, mas leva uma barra `</tag>`\n\nAtributos: São como o molho do sanduíche. Eles dão características extras (como cor, tamanho ou destino de um link) e ficam SEMPRE dentro da tag de abertura.",
      type: "code",
      codeSnippet: `<!-- Exemplo 1: Uma tag simples (Botão) -->\n<button> Clique em Mim </button>\n\n<!-- Exemplo 2: Tag com Atributo (Link) -->\n<!-- O atributo 'href' é o destino, o molho especial desta tag! -->\n<a href="https://google.com">\n  Ir para o Google\n</a>\n\n<!-- Exemplo 3: Tag com atributo de identificação (id) -->\n<p id="paragrafo-principal">\n  Este é o texto que aparece na tela do usuário.\n</p>`,
      terminalOutput: "Clique em Mim\n\nIr para o Google\n\nEste é o texto que aparece na tela do usuário."
    },
    {
      title: "A Estrutura Básica Obrigatória",
      content: "Você não pode simplesmente jogar tags em um arquivo e esperar que funcione. Todo site precisa de um esqueleto oficial para o navegador entender a página.\n\nImagine um corpo humano:\n1. `<!DOCTYPE html>`: É o crachá avisando: 'Olá, estou usando o HTML5 moderno!'.\n2. `<html>`: É a pele que envolve todo o corpo.\n3. `<head>` (Cabeça): Guarda os pensamentos e configurações invisíveis. O que vai aqui não aparece na tela, exceto o título da aba.\n4. `<body>` (Corpo): É aqui que a mágica acontece. Tudo que o usuário VÊ vai aqui dentro.",
      type: "code",
      codeSnippet: `<!DOCTYPE html>\n<html lang="pt-BR">\n  \n  <head>\n    <!-- Configurações para o navegador e o Google -->\n    <meta charset="UTF-8">\n    <title>Meu Primeiro Site</title>\n  </head>\n  \n  <body>\n    <!-- Todo o visual do site começa aqui -->\n    <h1>Bem-vindo à Caixa dos Devs</h1>\n    <p>Este é o primeiro passo para virar um programador de verdade.</p>\n  </body>\n\n</html>`,
      terminalOutput: "<h1>Bem-vindo à Caixa dos Devs</h1>\n<p>Este é o primeiro passo para virar um programador de verdade.</p>"
    },
    {
      title: "Elementos Vazios (As exceções)",
      content: "Lembra da nossa teoria do sanduíche? Toda regra tem sua exceção!\n\nAlgumas tags são 'solitárias' (ou elementos vazios). Elas não precisam de uma fatia de pão por cima para fechar, porque elas não abraçam nenhum texto. Elas mesmas já são o conteúdo completo.\n\nExemplos clássicos:\n• `<br>`: Break Row. Dá um 'Enter' e quebra a linha.\n• `<hr>`: Horizontal Rule. Desenha uma linha de fora a fora na tela.\n• `<img>`: Puxa uma imagem para a tela. Ela só precisa do atributo com o caminho da foto, e não de um fechamento.",
      type: "text"
    }
  ]
};