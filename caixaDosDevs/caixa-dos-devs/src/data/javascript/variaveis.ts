export const variaveis = {
  id: "variaveis",
  titulo: "Variáveis e Constantes",
  cards: [
    {
      title: "Criação de Variáveis",
      content: "Para criar uma variável, fazemos duas coisas: Declaração e Atribuição.\n\n1. DECLARAÇÃO: É a etapa que cria e dá o nome à variável. Ela fica armazenada na memória do computador. Quando criamos a variável, o computador cria uma 'caixa' com o nome dela. Assim ele sabe onde está a informação e onde ir pegar para exibir.\n\n2. ATRIBUIÇÃO: É a etapa em que se armazena a informação dentro da variável que criamos.\n\nOBS: O JavaScript permite declarar e atribuir de uma única vez!",
      type: "code",
      codeSnippet: `// Declarando e atribuindo na mesma linha:\nlet nome = "Kcarrasquinho";\n\n// Declarando primeiro, atribuindo depois:\nlet idade;\nidade = 21;\n\nconsole.log(nome, idade);`,
      terminalOutput: "Kcarrasquinho 21"
    },
    {
      title: "A Bagunça do VAR",
      content: "O 'var' é o modelo antigo de se criar variáveis. Ele até funciona, mas é extremamente confuso em códigos mais completos. Ele permite a desorganização do código porque NÃO respeita blocos de código (como if, else, for, while).\n\nOu seja, ele permite o erro da lógica do desenvolvedor. O var é safado! Imagine que a escola é o programa e a sala é o bloco de código. O var pega o aviso que era pra ficar só na sala e coloca no corredor. Ele passeia pelo código todo, é global. Isso vira uma bagunça!",
      type: "code",
      codeSnippet: `if (true) {\n  var aviso = "Vazou pro corredor!";\n}\n\n// O sistema consegue ler o aviso fora do bloco! Ele passeou pelo código.\nconsole.log(aviso);`,
      terminalOutput: "Vazou pro corredor!"
    },
    {
      title: "A Organização do LET",
      content: "O 'let' veio para arrumar a casa. Ele cria a variável de forma organizada e estritamente dentro do bloco.\n\nSeguindo o exemplo da escola: se o aviso é \"Hoje tem prova\", o let coloca o aviso amarrado na porta, pro lado de dentro. Ninguém do corredor consegue ler. O let deixa tudo fixo em blocos e me obriga a pensar e especificar onde a informação vai estar.",
      type: "code",
      codeSnippet: `let novaRodada = 1;\n\n// O valor do 'let' muda, porque teremos várias rodadas:\nnovaRodada = 2;\nnovaRodada = 3;\n\nconsole.log("A rodada final é a:", novaRodada);`,
      terminalOutput: "A rodada final é a: 3"
    },
    {
      title: "A Firmeza do CONST",
      content: "Assim como o let, o 'const' é amarrado ao bloco e super seguro. A grande diferença é: o valor dela NÃO MUDA!\n\nVocê usa o 'let' quando sabe que a variável vai mudar de valor (como a rodada do jogo). Mas se é algo fixo, a gente tranca no 'const'.",
      type: "code",
      codeSnippet: `// 75 é um valor fixo, não vai mudar:\nconst TOTAL_NUMEROS = 75;\n\n// Se tentar mudar, o código estoura um erro:\nTOTAL_NUMEROS = 90;`,
      terminalOutput: "TypeError: Assignment to constant variable.\n    at Object.<anonymous> (/aula/script.js:5:15)\n    at Module._compile (node:internal/modules/cjs/loader)"
    },
    {
      title: "Hoisting (O Fantasma do JS)",
      content: "Hoisting é um comportamento do JavaScript onde ele 'prepara' e reserva as variáveis 'var' ANTES de executar o programa. Por isso o var é ruim: pode fazer o dev se confundir e o código não funcionar sem ele saber o porquê.\n\nEXEMPLO: É como o professor fazer a chamada antes dos alunos chegarem. Ou seja, ele registra a informação sem a execução de verdade!\n\nO que acontece? O JS guarda o valor de uma variável que nem existe ainda. E o pior: isso não dá erro de quebra de código (porque tem o var), ele só cospe na tela um 'indefinido'.",
      type: "code",
      codeSnippet: `// Imprimindo o nome ANTES da linha onde ele é criado:\nconsole.log(nome);\n\nvar nome = "Kcarrasquinho";\n\n// O JS preparou o terreno (Hoisting), mas o aluno ainda não estava lá.`,
      terminalOutput: "undefined"
    }
  ]
};