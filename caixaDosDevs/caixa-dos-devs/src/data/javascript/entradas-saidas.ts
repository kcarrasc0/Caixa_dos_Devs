export const entradasSaidas = {
  id: "entradas-saidas",
  titulo: "Comunicação e Interação",
  cards: [
    {
      title: "Console.log (A Boca do Computador)",
      content: "Você já viu ele em ação, mas vamos formalizar. O `console.log` é a forma mais direta do seu programa 'falar' com o mundo externo.\n\nEle pega o que está escondido na memória (dentro das nossas caixas/variáveis) e cospe na tela do terminal. Se o seu código der ruim e você não souber o motivo, o console.log é o seu melhor amigo: ele é o fofoqueiro que vai te contar exatamente o que o computador está pensando.",
      type: "code",
      codeSnippet: `let fofoca = "Você esqueceu de fechar a chave na linha 5!";\nconsole.log("Alerta do sistema:", fofoca);`,
      terminalOutput: "Alerta do sistema: Você esqueceu de fechar a chave na linha 5!"
    },
    {
      title: "Prompt (Ouvido do Navegador)",
      content: "O `prompt` é um método global do objeto `window` (a janela da internet). Ele abre aquela caixinha de diálogo no navegador para o usuário digitar algo.\n\nRegras do jogo no Navegador:\n• Tem um campo de texto e dois botões: 'OK' e 'Cancelar'.\n• Clicou em OK? Ele devolve um Texto (String).\n• Clicou em Cancelar? Devolve o nosso velho conhecido 'null'.\n\nATENÇÃO: Ele é muito útil para testes rápidos em páginas web, mas ele NÃO EXISTE no Node.js (terminal).",
      type: "code",
      codeSnippet: `// 🛑 ISSO NÃO RODA NO NODE.JS, SÓ NO NAVEGADOR!\n\nlet filme = prompt("Qual seu filme favorito?");\nconsole.log("Você digitou:", filme);\n\n/* \n  👉 FAÇA O TESTE AGORA:\n  1. Aperte F12 no seu teclado (ou botão direito -> Inspecionar)\n  2. Clique na aba 'Console'\n  3. Digite prompt('Qual seu nome?') e aperte Enter!\n*/`
    },
    {
      title: "Readline (Ouvido do Terminal)",
      content: "Se o `prompt` não funciona no Node.js, como a gente escuta o usuário na tela preta estilo hacker? Usando o `readline`!\n\nO `readline` é um módulo nativo (já vem instalado) do Node.js feito para ler dados digitados no terminal, lendo exatamente 'uma linha por vez'.\n\nMas, para usar o readline, a gente não pode simplesmente chamar o nome dele do nada. Precisamos avisar o Node que queremos usar essa ferramenta através de uma IMPORTAÇÃO.",
      type: "code",
      codeSnippet: `// Chamando a ferramenta nativa do Node.js para o nosso arquivo\nconst readline = require('readline');\n\nconsole.log("Ferramenta importada com sucesso!");`,
      terminalOutput: "Ferramenta importada com sucesso!"
    },
    {
      title: "Configurando o Readline",
      content: "Agora que a ferramenta chegou, precisamos configurar de onde ela vai ler a resposta e para onde ela vai mandar a pergunta.\n\nPara isso, criamos a interface (o controle remoto) do readline:\n• `process.stdin` → Significa Standard Input (Entrada Padrão). É daqui que o sistema lê (O Teclado).\n• `process.stdout` → Significa Standard Output (Saída Padrão). É pra cá que o sistema escreve (O Terminal).\n• `rl` → É o apelido carinhoso do objeto que vamos usar para fazer as perguntas.",
      type: "code",
      codeSnippet: `const readline = require('readline');\n\n// Criando o nosso 'ouvinte'\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\n// Agora o 'rl' está pronto para disparar perguntas e ouvir o teclado!`
    },
    {
      title: "Na Prática: Conversão de Tipos",
      content: "Aqui está o grande truque de mestre: TUDO que o usuário digita no terminal, o `readline` entende como Texto (String), mesmo que seja um número!\n\nSe você perguntar a idade e ele digitar 21, o computador vai ler \"21\". Se você tentar somar isso com outro número, vai dar erro de lógica (ele vai juntar os textos em vez de somar).\n\nPor isso, quando fazemos múltiplas perguntas e queremos fazer matemática, precisamos CONVERTER os tipos usando o `Number()`. Saca só esse exemplo de planejamento de viagem:",
      type: "code",
      codeSnippet: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\n// Pergunta 1\nrl.question("Qual o seu nome? ", (nome) => {\n  \n  // Pergunta 2 (Dentro da resposta da 1)\n  rl.question("Quantas pessoas vão na viagem para Pesqueira? ", (quantidade) => {\n    \n    // CONVERSÃO DE TIPO: Transformando a String 'quantidade' em Número de verdade\n    let numPessoas = Number(quantidade);\n    let valorFixo = 140;\n    let orcamentoTotal = numPessoas * valorFixo;\n    \n    console.log(\`Beleza, \${nome}! O orçamento para \${numPessoas} pessoas é R$ \${orcamentoTotal}.\`);\n    \n    // Fechando o ouvido do terminal, senão o programa fica rodando para sempre!\n    rl.close();\n  });\n});`,
      terminalOutput: "Qual o seu nome? Kcarrasquinho\nQuantas pessoas vão na viagem para Pesqueira? 5\nBeleza, Kcarrasquinho! O orçamento para 5 pessoas é R$ 700."
    }
  ]
};