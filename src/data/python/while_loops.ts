export const whileLoops = {
  id: "while-loops",
  titulo: "Laços de Repetição (While)",
  cards: [
    {
      title: "Por que repetir o código?",
      content: "Na programação, somos avessos ao trabalho braçal. Se você precisa imprimir 'Olá!' 4.000 vezes, você não vai escrever 4.000 linhas de `print`. Nós usamos estruturas de repetição (Loops ou Laços) para ensinar o computador a fazer o trabalho duro por nós.",
      type: "text"
    },
    {
      title: "O Laço 'Enquanto' (while)",
      content: "A estrutura `while` verifica uma condição. ENQUANTO essa condição for verdadeira, o bloco de código dentro dela será executado repetidas vezes, num ciclo contínuo. Quando a condição virar falsa, o laço é quebrado e o código segue a vida.",
      type: "code",
      codeSnippet: `vidas_boss = 3\n\nwhile vidas_boss > 0:\n    print(f"O Boss tem {vidas_boss} vidas. Atacando!")\n    vidas_boss -= 1 # Tira 1 vida a cada rodada\n\nprint("O Boss foi derrotado!")`,
      terminalOutput: "O Boss tem 3 vidas. Atacando!\nO Boss tem 2 vidas. Atacando!\nO Boss tem 1 vidas. Atacando!\nO Boss foi derrotado!"
    },
    {
      title: "O Perigo do Loop Infinito",
      content: "Sabe quando um programa de computador trava e a tela congela? Muitas vezes é culpa de um loop infinito! Se você esquece de atualizar a variável que o `while` está testando (por exemplo, esquecer de tirar a vida do Boss), a condição sempre será verdadeira, rodando o laço até a memória explodir.",
      type: "text"
    },
    {
      title: "O Botão de Pânico (break)",
      content: "Em Python, nós temos uma válvula de escape de emergência chamada `break` (quebrar). Quando o interpretador lê a palavra `break` dentro de um laço, ele destrói o loop imediatamente, independentemente da condição lá de cima.",
      type: "code",
      codeSnippet: `print("=== CAIXA ELETRÔNICO ===")\n\nwhile True: # O loop roda para sempre por padrão\n    senha = input("Digite sua senha (ou '0' para sair): ")\n    \n    if senha == '0':\n        print("Saindo do sistema...")\n        break # Quebra o loop!\n    elif senha == '1234':\n        print("Acesso Liberado!")\n        break # Quebra o loop também!\n    else:\n        print("Senha incorreta. Tente novamente.")`,
      terminalOutput: "=== CAIXA ELETRÔNICO ===\nDigite sua senha (ou '0' para sair): 1111\nSenha incorreta. Tente novamente.\nDigite sua senha (ou '0' para sair): 1234\nAcesso Liberado!"
    }
  ]
};