export const repeticao = {
  id: "repeticao",
  titulo: "Estruturas de Repetição",
  cards: [
    {
      title: "O Estagiário do Código",
      content: "Na programação, a regra número 1 é o DRY (Don't Repeat Yourself - Não se repita). Se você precisar mandar 100 e-mails, não vai escrever 100 linhas de código.\n\nAs Estruturas de Repetição (ou Loops) são como um estagiário incansável: você ensina a tarefa uma única vez e diz quantas vezes ele deve repetir. O computador faz o trabalho pesado em milissegundos.",
      type: "text"
    },
    {
      title: "O Laço 'while' (Enquanto)",
      content: "Usamos o `while` quando NÃO sabemos o número exato de vezes que o loop vai rodar, mas sabemos a condição para ele parar.\n\nLógica: 'Enquanto o tanque não estiver cheio, continue colocando gasolina'. Se você esquecer de colocar a regra para encher o tanque (como somar +1), você cria um LOOP INFINITO e trava o navegador!",
      type: "code",
      codeSnippet: `let fatiasPizza = 3;\n\n// Lê-se: Enquanto fatiasPizza for maior que 0\nwhile (fatiasPizza > 0) {\n  console.log("Comendo uma fatia... Restam: " + fatiasPizza);\n  // DIMINUIR é crucial para não gerar loop infinito!\n  fatiasPizza--; \n}\n\nconsole.log("A pizza acabou!");`,
      terminalOutput: "Comendo uma fatia... Restam: 3\nComendo uma fatia... Restam: 2\nComendo uma fatia... Restam: 1\nA pizza acabou!"
    },
    {
      title: "O Laço 'for' (Para)",
      content: "O `for` é o queridinho dos programadores. Usamos quando SABEMOS exatamente quantas vezes o loop deve rodar.\n\nA sintaxe dele concentra as 3 regras na mesma linha:\n1. INÍCIO (Onde começa: `let i = 0`)\n2. FIM (Até onde vai: `i <= 3`)\n3. PASSO (De quanto em quanto pula: `i++`)\n\nVocê notou a letra 'i'? Ela significa 'Índice' (index). Usar o 'i' como contador é uma convenção universal e a melhor prática no mercado.",
      type: "text"
    },
    {
      title: "Mas o que é um Índice (i)?",
      content: "Índice é simplesmente a posição de um elemento dentro de uma lista. Na programação, o índice sempre começa no ZERO.\n\nImagine uma fila de cadeiras:\n Índice: [ 0 ] --- [ 1 ] --- [ 2 ] --- [ 3 ]\n Alunos: João ---- Maria ---- Ana ---- Carlos\n\nO índice é como o número da cadeira! Quando o `for` roda e faz `i++`, o computador está apenas andando para a próxima cadeira.",
      type: "code",
      codeSnippet: `// O 'i' começa na cadeira 0 e vai até a cadeira 3\nfor (let i = 0; i <= 3; i++) {\n  console.log("Visitando a cadeira de índice: " + i);\n}\n\nconsole.log("Fim da fila!");`,
      terminalOutput: "Visitando a cadeira de índice: 0\nVisitando a cadeira de índice: 1\nVisitando a cadeira de índice: 2\nVisitando a cadeira de índice: 3\nFim da fila!"
    },
    {
      title: "O Botão de Parada: 'break'",
      content: "E se a fila tiver 100 cadeiras, você está procurando a Ana, e ela está sentada logo na cadeira 2? Você não vai olhar as outras 97 cadeiras à toa, certo?\n\nNão faz sentido o computador continuar trabalhando desnecessariamente. Usamos o comando `break` (quebrar/parar) para interromper o loop de dentro para fora na mesma hora, assim que achamos o que queríamos.",
      type: "code",
      codeSnippet: `for (let i = 0; i <= 3; i++) {\n  console.log("Olhando quem está na cadeira " + i);\n  \n  if (i === 2) {\n    console.log("Achei a Ana na cadeira 2! Parando a busca.");\n    break; // Encerra o 'for' na mesma hora\n  }\n}`,
      terminalOutput: "Olhando quem está na cadeira 0\nOlhando quem está na cadeira 1\nOlhando quem está na cadeira 2\nAchei a Ana na cadeira 2! Parando a busca."
    }
  ]
};