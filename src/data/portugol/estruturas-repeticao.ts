export const estruturasRepeticao = {
  id: "estruturas-repeticao",
  titulo: "Estruturas de Repetição",
  cards: [
    {
      title: "O Estagiário Incansável",
      content: "Imagine que você é o professor e precisa escrever 'Não vou jogar bolinha de papel' 100 vezes no quadro negro. Você ficaria exausto.\n\nPara o computador, isso não é problema. As estruturas de repetição (ou 'Laços' / 'Loops') ensinam o computador a pegar um pedaço de código e executá-lo repetidas vezes de forma automática. O computador faz o trabalho duro por você!",
      type: "text"
    },
    {
      title: "Laço Enquanto (While)",
      content: "Use o 'enquanto' quando você NÃO SABE exatamente quantas vezes vai repetir algo, mas sabe a condição de parada.\n\nAnalogia: Comer um prato de comida. Você não diz 'Vou dar 34 garfadas'. Você diz: ENQUANTO o prato não estiver vazio, vou dar mais uma garfada.\n\nCUIDADO com o Loop Infinito: Se você não mudar a condição dentro do laço (como esquecer de somar +1 na variável), o computador vai repetir aquilo para sempre até travar a máquina!",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    inteiro fatiasPizza = 4\n\n    // Enquanto ainda tiver pizza na caixa...\n    enquanto (fatiasPizza > 0) {\n      escreva("Comendo uma fatia! Restam: ", fatiasPizza - 1, "\\n")\n      \n      // Fundamental: diminuir a fatia, senão é loop infinito!\n      fatiasPizza = fatiasPizza - 1\n    }\n    escreva("Estou cheio. A pizza acabou!")\n  }\n}`,
      terminalOutput: "Comendo uma fatia! Restam: 3\nComendo uma fatia! Restam: 2\nComendo uma fatia! Restam: 1\nComendo uma fatia! Restam: 0\nEstou cheio. A pizza acabou!"
    },
    {
      title: "Laço Para (For)",
      content: "Use o 'para' quando você SABE EXATAMENTE quantas vezes quer que o código repita. \n\nAnalogia: Correr em uma pista de atletismo. Você sabe onde começa (largada = 1), onde termina (chegada = 10 voltas) e de quanto em quanto você conta (de 1 em 1 volta).\n\nA sintaxe do 'para' tem três partes: INÍCIO; FIM; PASSO.",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    escreva("Preparar para decolagem em:\\n")\n\n    // (Cria a contagem no 5; Vai até o 1; Subtrai 1 por vez)\n    para (inteiro contador = 5; contador >= 1; contador--) {\n      escreva(contador, "...\\n")\n    }\n    \n    escreva("🚀 FOGO!")\n  }\n}`,
      terminalOutput: "Preparar para decolagem em:\n5...\n4...\n3...\n2...\n1...\n🚀 FOGO!"
    },
    {
      title: "Exercício Prático: A Tabuada",
      content: "Vamos juntar a leitura de dados (variáveis) com a repetição. Se o usuário digitar o número 7, vamos criar a tabuada do 7 de forma automática usando o laço 'para' do 1 ao 10.",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    inteiro numeroDigitado = 7\n    inteiro resultado\n\n    escreva("=== TABUADA DO ", numeroDigitado, " ===\\n")\n\n    para (inteiro multiplicador = 1; multiplicador <= 10; multiplicador++) {\n      resultado = numeroDigitado * multiplicador\n      escreva(numeroDigitado, " x ", multiplicador, " = ", resultado, "\\n")\n    }\n  }\n}`,
      terminalOutput: "=== TABUADA DO 7 ===\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
    }
  ]
};