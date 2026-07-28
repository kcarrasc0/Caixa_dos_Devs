export const operadores = {
  id: "operadores",
  titulo: "Operadores Matemáticos e Lógicos",
  cards: [
    {
      title: "Operadores de Atribuição",
      content:
        "Lembra das nossas caixas (variáveis)? O operador de atribuição é o entregador que coloca a encomenda lá dentro.\n\nNa programação, um único sinal de igual (=) NÃO SIGNIFICA 'igual'. Ele significa 'RECEBE'. Você está mandando a caixa receber um valor.\n\nNo Portugol, para somar um valor ao que já existe na caixa, nós repetimos o nome dela na conta. (Ex: `vaquinha = vaquinha + 140`).",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    // A caixa 'vaquinha' RECEBE 0\n    inteiro vaquinha = 0\n\n    // Bora viajar! O pacote é R$ 140 por cabeça.\n    vaquinha = vaquinha + 140\n    vaquinha = vaquinha + 140 // Mais um pagou\n\n    escreva(vaquinha)\n  }\n}`,
      terminalOutput: "280",
    },
    {
      title: "A Caixa de Ferramentas",
      content:
        "Se as Variáveis são as caixas onde guardamos nossos dados, os Operadores são as ferramentas que usamos para manipular o que está lá dentro.\n\nSem eles, o computador seria apenas um depósito de informações. Com eles, podemos fazer contas matemáticas, comparar valores e tomar decisões lógicas.",
      type: "text",
    },
    {
      title: "Operadores Matemáticos",
      content:
        "Eles fazem a matemática pura da escola. O asterisco (*) substitui o 'x' da multiplicação, e a barra (/) substitui o símbolo de divisão.",
      type: "text",
      tableData: {
        headers: ["Símbolo", "O que faz?", "Exemplo", "Resultado"],
        rows: [
          ["+", "Somar", "5 + 3", "8"],
          ["-", "Subtrair", "10 - 4", "6"],
          ["*", "Multiplicar", "4 * 2", "8"],
          ["/", "Dividir", "20 / 4", "5"],
          ["%", "Resto da Divisão", "5 % 2", "1"],
        ],
      },
    },
    {
      title: "O Famoso Módulo (%)",
      content:
        "O operador '%' (Módulo) costuma dar nó na cabeça dos iniciantes, porque ele NÃO calcula porcentagem! Ele calcula o RESTO de uma divisão inteira.\n\nAnalogia: Você tem 5 fatias de pizza para dividir igualmente entre 2 pessoas. Cada pessoa come 2 fatias (Divisão). Quantas fatias sobraram na caixa? 1 fatia! Esse é o resto (5 % 2 = 1).\n\nEle é muito usado para descobrir se um número é Par ou Ímpar (qualquer número % 2 que der 0, é par!).",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    inteiro fatias = 5\n    inteiro pessoas = 2\n    \n    escreva("Cada um come: ", fatias / pessoas, " fatias\\n")\n    escreva("Sobrou na caixa: ", fatias % pessoas, " fatia")\n  }\n}`,
      terminalOutput: "Cada um come: 2 fatias\nSobrou na caixa: 1 fatia",
    },
    {
      title: "Operadores Relacionais",
      content:
        "Essas são as ferramentas de COMPARAÇÃO. Elas pegam dois valores, colocam numa balança e o resultado sempre será uma resposta Lógica: Verdadeiro ou Falso.\n\nSão eles que dão 'visão' para as nossas Estruturas de Condição (o nosso segurança da balada) saberem se devem liberar a entrada ou não.",
      type: "text",
      tableData: {
        headers: ["Símbolo", "Significado", "Exemplo", "Resposta"],
        rows: [
          ["==", "É Exatamente Igual?", "5 == 5", "Verdadeiro"],
          ["!=", "É Diferente?", "10 != 5", "Verdadeiro"],
          [">", "Maior que?", "10 > 20", "Falso"],
          ["<", "Menor que?", "10 < 20", "Verdadeiro"],
          [">=", "Maior ou igual a?", "18 >= 18", "Verdadeiro"],
        ],
      },
    },
    {
      title: "Cuidado: Igualdade (==) vs Atribuição (=)",
      content:
        "Esse é o erro número 1 de quem está começando a programar!\n\n• Um sinal de igual (=) significa ATRIBUIR. É o entregador colocando a encomenda na caixa. (Ex: `idade = 21`)\n\n• Dois sinais de igual (==) significa COMPARAR. Você está fazendo uma pergunta ao computador. (Ex: `se (idade == 21)`).",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    // = Estou GUARDANDO o valor\n    inteiro senhaSecreta = 1234\n\n    // == Estou COMPARANDO os valores\n    se (senhaSecreta == 1234) {\n      escreva("Acesso Liberado!")\n    }\n  }\n}`,
      terminalOutput: "Acesso Liberado!",
    },
    {
      title: "Operadores Lógicos (e, ou, nao)",
      content:
        "Servem para juntar várias perguntas ao mesmo tempo. Pense neles como o comportamento dos seus pais:\n\n1. O 'e': Pai rigoroso. SÓ devolve Verdadeiro se TUDO for verdade.\n2. O 'ou': Mãe tranquila. Devolve Verdadeiro se PELO MENOS UMA for verdade.\n3. O 'nao': Amigo do contra. Inverte o resultado (se era verdadeiro, vira falso).",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    logico loucaLavada = verdadeiro\n    logico quartoLimpo = falso\n\n    // O Pai Rigoroso (e): Exige que as duas sejam verdadeiras\n    se (loucaLavada == verdadeiro e quartoLimpo == verdadeiro) {\n      escreva("Pode ir pro rolê!")\n    } senao {\n      escreva("Fica em casa limpando tudo.")\n    }\n  }\n}`,
      terminalOutput: "Fica em casa limpando tudo.",
    },
  ],
};
