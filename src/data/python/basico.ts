export const basico = {
  id: "basico",
  titulo: "Conceitos Iniciais e Básico",
  cards: [
    {
      title: "O que é Python e a Filosofia Zen",
      content: "Criado em 1991 por Guido van Rossum, o Python nasceu com um objetivo claro: ser fácil de ler e de escrever. Ele é uma linguagem de Alto Nível, o que significa que seus comandos se parecem muito com o inglês comum, afastando você da complexidade da linguagem de máquina (zeros e uns).\n\nExiste até um poema secreto no Python chamado 'Zen of Python' de Tim Peters. Suas principais regras são: 'Simples é melhor que complexo' e 'A legibilidade conta'. É por isso que o Python domina o mercado moderno de Inteligência Artificial, Dados e Web!",
      type: "text"
    },
    {
      title: "O Tradutor Universal (O Interpretador)",
      content: "Como o computador entende o nosso código? Em Python, não precisamos 'compilar' o código inteiro antes de rodar. O Python usa um Interpretador: ele lê o seu código linha por linha, traduz para a máquina e já executa na mesma hora.\n\nPara escrevermos nossos códigos de forma profissional, usamos IDEs (Ambientes de Desenvolvimento Integrado), como o VS Code ou o PyCharm. Pense na IDE como uma oficina mecânica: ela tem o bloco de notas para escrever o código, ferramentas para achar erros e o interpretador embutido para rodar tudo no mesmo lugar.",
      type: "text"
    },
    {
      title: "Variáveis: As Caixas Dinâmicas",
      content: "Uma variável é uma caixa na memória do computador onde guardamos uma informação. Em muitas linguagens, você precisa avisar o tamanho e o tipo da caixa antes de usá-la.\n\nMas o Python tem Tipagem Dinâmica. Isso significa que a caixa é mágica: ela descobre sozinha o que você colocou dentro e se adapta. Se você colocar um texto, ela vira uma caixa de texto. Se trocar por um número, ela se transforma em uma caixa numérica instantaneamente!",
      type: "code",
      codeSnippet: `# O Python descobre os tipos automaticamente!\nnome_heroi = "Batman"  # Aqui a caixa guarda um texto\nano_nascimento = 1939  # Aqui a caixa guarda um número inteiro\n\n# Podemos mudar o tipo da variável a qualquer momento!\nano_nascimento = "Mil Novecentos e Trinta e Nove"\n\nprint(f"O herói {nome_heroi} nasceu em {ano_nascimento}.")`,
      terminalOutput: "O herói Batman nasceu em Mil Novecentos e Trinta e Nove."
    },
    {
      title: "Os Quatro Elementos (Tipos Primitivos)",
      content: "Apesar da tipagem dinâmica, por debaixo dos panos, o Python organiza os dados em 4 tipos fundamentais (built-ins):\n\n• `str` (String): Textos. Sempre devem estar entre aspas simples ('') ou duplas (\"\").\n• `int` (Integer): Números inteiros, sem vírgula, positivos ou negativos.\n• `float` (Ponto Flutuante): Números quebrados. Atenção: no padrão americano, usamos PONTO e não vírgula (Ex: 3.14).\n• `bool` (Boolean): Apenas dois valores lógicos, `True` (Verdadeiro) ou `False` (Falso). Sempre com a primeira letra maiúscula!",
      type: "code",
      codeSnippet: `heroi = "Homem-Aranha"  # str\nidade = 18              # int\npeso = 65.5             # float (usando ponto!)\nvingador = True         # bool (True maiúsculo)\n\n# A função type() revela qual é a verdadeira forma do dado\nprint(type(peso))\nprint(type(vingador))`,
      terminalOutput: "<class 'float'>\n<class 'bool'>"
    },
    {
      title: "Ouvindo e Falando: input() e print()",
      content: "A função `print()` é a 'boca' do programa, usada para falar com o usuário. A função `input()` são os 'ouvidos', ela pausa o programa e espera o usuário digitar algo e apertar ENTER.\n\nA Armadilha do Input: Tudo que o usuário digita no `input()` entra no Python como TEXTO (str), mesmo que ele digite um número! Se você quiser somar idades, precisa transformar (Fazer um Cast) esse texto em número usando `int()` ou `float()` em volta do input.",
      type: "code",
      codeSnippet: `nome = input("Qual o seu nome? ")\n\n# Sem o int(), o Python acharia que a idade é um texto!\nidade = int(input("Qual a sua idade? "))\n\nano_futuro = idade + 10\nprint(f"Legal, {nome}! Daqui a 10 anos você terá {ano_futuro} anos.")`,
      terminalOutput: "Qual o seu nome? Kcarrasquinho\nQual a sua idade? 20\nLegal, Kcarrasquinho! Daqui a 10 anos você terá 30 anos."
    }
  ]
};