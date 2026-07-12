export const variaveisTipos = {
  id: "variaveis-tipos",
  titulo: "Variáveis e Tipos",
  cards: [
    {
      title: "Para que servem as Variáveis?",
      content: "Imagine que a memória do computador é um galpão gigante e vazio. Você precisa guardar a idade de um cliente lá dentro. Se jogar no chão, nunca mais vai achar.\n\nUma variável é uma CAIXA DE MUDANÇA. Você pega uma caixa vazia, coloca uma etiqueta de canetão nela (o nome da variável) e joga a idade lá dentro. Sempre que precisar da idade, é só chamar pelo nome da etiqueta!",
      type: "text"
    },
    {
      title: "Os Tipos Primitivos",
      content: "Você não guarda sopa numa caixa de papelão, certo? Cada tipo de produto exige um recipiente diferente. No Portugol, você precisa avisar ao computador QUAL O FORMATO da caixa que ele deve preparar antes de guardar o dado.",
      type: "text",
      tableData: {
        headers: ["Tipo da Caixa", "O que guarda?", "Exemplo no dia a dia"],
        rows: [
          ["inteiro", "Números sem vírgula", "Sua idade, Quantidade de filhos, Estoque"],
          ["real", "Números com vírgula (quebrados)", "Seu salário, Altura, Preço de um produto"],
          ["cadeia", "Textos longos ou palavras (usa aspas)", "Seu Nome, Endereço, Placa do Carro"],
          ["caracter", "Apenas uma única letra ou símbolo", "Sexo (M/F), Alternativa da prova (A,B,C)"],
          ["logico", "Apenas Verdadeiro ou Falso", "Maior de idade? (Verdadeiro), Tem saldo? (Falso)"]
        ]
      }
    },
    {
      title: "Nomeando Variáveis",
      content: "Para criar a etiqueta da caixa, temos regras rígidas:\n1. NUNCA pode começar com número (1nome é errado, nome1 é certo).\n2. NUNCA pode ter espaço em branco ('nome do cliente' é errado).\n3. Dê nomes que façam sentido! Criar variáveis chamadas 'x', 'y' ou 'a' vai te deixar maluco semanas depois quando for reler o código.\n\nUse o padrão camelCase: primeira palavra minúscula, as seguintes com inicial maiúscula (ex: nomeDoCliente).",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    // CRIANDO AS CAIXAS E COLOCANDO DADOS DENTRO:\n    cadeia nomeHeroi = "Batman"\n    inteiro idade = 45\n    real dinheiroNaConta = 999999.99\n    logico temPoderes = falso\n\n    escreva("O herói ", nomeHeroi, " tem ", idade, " anos.")\n  }\n}`,
      terminalOutput: "O herói Batman tem 45 anos."
    },
    {
      title: "Ouvindo o Usuário (Comando LEIA)",
      content: "Se o 'escreva' é a boca do computador, o 'leia' é o ouvido!\n\nDe nada adianta um programa onde os dados já estão fixos no código. Precisamos perguntar as informações para quem está usando o sistema. O comando 'leia' abre o microfone, escuta o que a pessoa digitou no teclado e guarda direto na variável.",
      type: "code",
      codeSnippet: `programa {\n  funcao inicio() {\n    cadeia nome\n\n    // 1. O Computador faz a pergunta (boca)\n    escreva("Qual é o seu nome, guerreiro? ")\n    \n    // 2. O Computador pausa e espera você digitar (ouvido)\n    leia(nome)\n\n    // 3. Ele responde usando o que estava na caixa 'nome'\n    escreva("Bem-vindo ao sistema, ", nome, "!")\n  }\n}`,
      terminalOutput: "Qual é o seu nome, guerreiro? Kcarrasquinho\nBem-vindo ao sistema, Kcarrasquinho!"
    }
  ]
};