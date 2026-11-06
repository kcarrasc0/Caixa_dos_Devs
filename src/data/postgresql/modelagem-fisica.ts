export const modelagemFisica = {
  id: "modelagem-fisica",
  titulo: "Modelagem Física",
  cards: [
    {
      title: "Cardinalidade e Combinações",
      content: "Aplicando a lógica matemática aos fluxogramas, a cardinalidade define o número total de linhas (combinações possíveis) que uma tabela pode conectar com outra. Ela estabelece o limite numérico de um relacionamento, impedindo o cadastro de dados que quebrem as regras da empresa.",
      type: "conceito",
      codeSnippet: "-- Os 3 tipos fundamentais de Cardinalidade nos fluxogramas:\n\n-- (1:1) Conexão direta de Um para Um.\n-- (1:N) Ramificação de Um para Muitos.\n-- (N:N) Conexões cruzadas de Muitos para Muitos."
    },
    {
      title: "Cardinalidade: Um para Um (1:1)",
      content: "Representa conexões simples e diretas. Uma linha da Tabela A só pode se ligar a uma única linha da Tabela B, e vice-versa. Este formato é muito utilizado por questões de segurança, para dividir tabelas gigantescas ou isolar dados sensíveis de usuários.",
      type: "pratica",
      codeSnippet: "-- Leitura do Fluxograma (1:1):\n\n-- [USUÁRIO] (1) ----- possui ----- (1) [CARTEIRA DE HABILITAÇÃO]\n-- Um usuário possui apenas uma habilitação ativa, e uma habilitação pertence a um único usuário."
    },
    {
      title: "Cardinalidade: Um para Muitos (1:N)",
      content: "Representa ramificações de um elemento central para múltiplos filhos. É o cenário mais comum no desenvolvimento de software. Uma linha da Tabela A pode se relacionar com várias linhas da Tabela B, estabelecendo uma hierarquia clara.",
      type: "pratica",
      codeSnippet: "-- Leitura do Fluxograma (1:N):\n\n-- [DEPARTAMENTO] (1) ----- emprega ----- (N) [FUNCIONÁRIOS]\n-- Um departamento possui dezenas de funcionários, mas cada funcionário responde a apenas um departamento."
    },
    {
      title: "Cardinalidade: Muitos para Muitos (N:N)",
      content: "Representa conexões cruzadas. Múltiplas linhas da Tabela A conectam-se a múltiplas linhas da Tabela B. SGBDs relacionais não suportam isso fisicamente, então a regra de ouro determina que o fluxo seja quebrado, criando uma terceira tabela intermediária (tabela associativa) para guardar as combinações.",
      type: "pratica",
      codeSnippet: "-- Leitura do Fluxograma Original (N:N):\n-- [PACIENTE] (N) ----- consulta ----- (N) [MÉDICO]\n\n-- Leitura Física Corrigida para o SGBD (1:N -> Tabela Nova <- 1:N):\n-- [PACIENTE] (1) ----- (N) [AGENDAMENTO] (N) ----- (1) [MÉDICO]"
    },
    {
      title: "Sistemas Gerenciadores (SGBD)",
      content: "O Sistema Gerenciador de Banco de Dados (SGBD) é o software responsável por transformar os diagramas teóricos em armazenamento físico no disco rígido. O PostgreSQL é um SGBD avançado que recebe scripts SQL, cria as tabelas, gerencia a memória, impede falhas na cardinalidade e entrega os dados para a sua aplicação.",
      type: "pratica",
      codeSnippet: "-- Após instalar o PostgreSQL e configurar os usuários de acesso:\n-- Acessamos o núcleo do SGBD via terminal usando a ferramenta psql:\n\npsql -U postgres\n\n-- A partir daqui, o SGBD assume o controle e espera comandos estruturados."
    }
  ]
};