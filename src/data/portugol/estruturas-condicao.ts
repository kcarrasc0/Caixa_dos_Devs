export const estruturasCondicao = {
  id: "estruturas-condicao",
  titulo: "Estruturas de Condição",
  cards: [
    {
      title: "Para que servem?",
      content: "Sem condições, o programa é um trem num trilho reto: ele vai do começo ao fim sem desviar.\n\nAs estruturas de condição são como o segurança na porta da balada. Elas analisam uma situação (Ex: O cliente tem 18 anos?) e decidem qual caminho o código deve seguir. O computador ganha 'inteligência' para tomar decisões.",
      type: "text"
    },
    {
      title: "A Dupla: Se / Senao",
      content: "É o feijão com arroz da lógica. O 'se' verifica uma condição. Se for verdadeira, ele executa o bloco de código. O 'senao' é o Plano B: é a lixeira para onde o código cai automaticamente caso a condição do 'se' tenha falhado.",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    inteiro idade = 16\n\n    // O segurança verificando o RG:\n    se (idade >= 18) {\n      escreva("Pode entrar na festa! 🎉")\n    } \n    senao {\n      escreva("Barrado! Vá tomar um achocolatado em casa. 🧃")\n    }\n  }\n}`,
      terminalOutput: "Barrado! Vá tomar um achocolatado em casa. 🧃"
    },
    {
      title: "Múltiplos Caminhos (Senao Se)",
      content: "E quando temos mais de duas opções? Imagine analisar as notas de um boletim escolar. Não é apenas 'Passou' ou 'Reprovou'. Existe a temida Recuperação no meio do caminho.\n\nUsamos o 'senao se' para emendar várias perguntas. O computador vai lendo de cima para baixo. A primeira condição que for verdadeira, ele entra, executa e ignora todo o resto.",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    real nota = 6.5\n\n    se (nota >= 7.0) {\n      escreva("Aprovado! Parabéns.")\n    }\n    senao se (nota >= 5.0) {\n      escreva("Atenção: Você está em Recuperação.")\n    }\n    senao {\n      escreva("Reprovado direto. Nos vemos ano que vem.")\n    }\n  }\n}`,
      terminalOutput: "Atenção: Você está em Recuperação."
    },
    {
      title: "Escolha Caso (O Cardápio)",
      content: "Se você tem um menu com dezenas de opções fixas (como o atendimento de um banco 'Digite 1 para Cartões, 2 para Empréstimos...'), usar vários 'se' fica feio e confuso.\n\nA estrutura 'escolha caso' analisa o conteúdo de uma variável e vai direto para a opção correspondente. Não esqueça do comando 'pare', senão o computador executa todos os casos de uma vez!",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    inteiro pedido = 2\n\n    escolha (pedido) {\n      caso 1:\n        escreva("Saindo um Hambúrguer!")\n        pare\n      caso 2:\n        escreva("Saindo uma Pizza!")\n        pare\n      caso contrario:\n        // O plano B caso o usuário digite um número maluco\n        escreva("Opção inválida no cardápio.")\n    }\n  }\n}`,
      terminalOutput: "Saindo uma Pizza!"
    }
  ]
};