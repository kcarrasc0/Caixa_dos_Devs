export const modelagemConceitual = {
  id: "modelagem-conceitual",
  titulo: "Modelagem Conceitual",
  cards: [
    {
      title: "O que é um Banco de Dados?",
      content: "Um Banco de Dados (BD) é uma coleção organizada de informações. A história começou com arquivos de texto simples, evoluiu para modelos hierárquicos e chegou ao modelo Relacional, que organiza os dados em tabelas interligadas. A principal diferença técnica hoje é entre Bancos Relacionais (estruturados em linhas e colunas, como o PostgreSQL) e Não Relacionais (focados em documentos flexíveis e sem esquema fixo, como o MongoDB).",
      type: "conceito",
      codeSnippet: "-- Exemplos de aplicabilidade prática:\n\n-- Relacional (PostgreSQL): Sistemas financeiros, controle de estoques, ERPs corporativos.\n-- Não Relacional (MongoDB): Redes sociais, catálogos de produtos dinâmicos, Big Data."
    },
    {
      title: "Entidades e Relacionamentos",
      content: "Na modelagem de dados, toda a estrutura gira em torno de duas peças fundamentais. Uma Entidade é qualquer coisa ou objeto do mundo real que precisamos guardar dados sobre ele (um Cliente, um Produto, um Funcionario). O Relacionamento dita como essas entidades interagem entre si dentro da lógica de negócio (um Cliente 'Compra' um Produto).",
      type: "conceito",
      codeSnippet: "-- Identificando peças no mundo real:\n\n-- Entidade 1: ALUNO (Guarda o Nome, CPF, Matricula)\n-- Entidade 2: CURSO (Guarda o Nome do curso, Carga Horaria)\n-- Relacionamento: MATRICULA (A ação que conecta o Aluno ao Curso)"
    },
    {
      title: "Símbolos Lógicos de Fluxograma",
      content: "Para organizar as ideias antes de escrever códigos, desenhamos a estrutura usando o Diagrama Entidade-Relacionamento (DER). Cada símbolo gráfico possui um significado estrito e lógico.",
      type: "tabela",
      tableData: {
        headers: ["Símbolo no Fluxograma", "Significado Lógico"],
        rows: [
          ["Retângulo", "Representa uma Entidade. O que no futuro será uma Tabela principal."],
          ["Elipse (Oval)", "Representa um Atributo. O que no futuro será uma Coluna da tabela."],
          ["Losango", "Representa o Relacionamento. A ação verbal que conecta as entidades."],
          ["Linhas de Conexão", "Representam a ligação direta e a direção do fluxo de dados."]
        ]
      }
    },
    {
      title: "A Lógica da Tabela Verdade",
      content: "A Tabela Verdade é uma ferramenta matemática usada para representar todas as combinações possíveis de valores (Verdadeiro ou Falso). Na engenharia de software, aplicamos esse raciocínio para prever como os dados se comportarão ao combinar duas tabelas, ajudando a definir os limites das regras de negócio.",
      type: "conceito",
      codeSnippet: "-- Exemplo de raciocínio lógico (AND) no banco de dados:\n\n-- Premissa A: O status do Cliente é Ativo?\n-- Premissa B: O Produto está em Estoque?\n-- Resultado: O relacionamento (Compra) só acontece se ambas as premissas forem verdadeiras."
    }
  ]
};