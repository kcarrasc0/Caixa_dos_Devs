export const mysqlCrudBasico = {
  id: "crud-basico",
  titulo: "O Padrão CRUD e Filtros",
  cards: [
    {
      title: "O Início: Inserindo Dados (Create)",
      content: "O comando INSERT é o responsável pelo 'C' do CRUD (Create). Ele adiciona novas linhas (registros) na tabela. É crucial respeitar a ordem das colunas e colocar textos e datas sempre entre aspas simples, deixando números fora das aspas.",
      type: "pratica",
      codeSnippet: "-- Sintaxe básica de inserção:\nINSERT INTO usuarios (nome, email, idade)\nVALUES ('Erick Carrasco', 'erick@nook.com', 21);\n\n-- O MySQL permite inserir várias linhas de uma vez para economizar processamento:\nINSERT INTO usuarios (nome, email, idade) VALUES \n('Ruan', 'ruan@nook.com', 22),\n('Ivo', 'ivo@nook.com', 23);"
    },
    {
      title: "Consultando Dados (Read)",
      content: "O SELECT é o comando mais executado em qualquer banco de dados ('R' do CRUD). Ele extrai os dados armazenados para que o Front-end possa exibir ao usuário. Evite usar SELECT * (trazer todas as colunas) em produção, pois sobrecarrega o servidor de forma desnecessária.",
      type: "pratica",
      codeSnippet: "-- ❌ Ruim para a memória do servidor:\nSELECT * FROM usuarios;\n\n-- ✅ Profissional (Pede só as colunas que a tela vai usar):\nSELECT nome, email FROM usuarios;"
    },
    {
      title: "Filtros com WHERE e Operadores",
      content: "Para evitar carregar um milhão de registros de uma vez, usamos a cláusula WHERE para filtrar as consultas. O MySQL suporta operadores de comparação (=, >, <) e operadores lógicos (AND, OR, NOT) para cruzar múltiplas condições matemáticas e de texto.",
      type: "pratica",
      codeSnippet: "-- Buscando usuários maiores de 18 anos E que tenham o nome 'Ruan':\nSELECT email \nFROM usuarios \nWHERE idade >= 18 AND nome = 'Ruan';\n\n-- Trazendo usuários que sejam de PE (Pernambuco) OU SP (São Paulo):\nSELECT nome \nFROM usuarios \nWHERE estado = 'PE' OR estado = 'SP';"
    },
    {
      title: "Ordenação e Paginação (ORDER BY / LIMIT)",
      content: "A cláusula ORDER BY serve para organizar a resposta (ordem alfabética, cronológica ou numérica). O ASC ordena subindo (do A pro Z) e o DESC ordena descendo. Já o LIMIT é o que permite fazer paginação no front-end, cortando o resultado após um número exato de registros.",
      type: "pratica",
      codeSnippet: "-- Trazendo os 5 usuários mais velhos do sistema (ordem decrescente de idade):\nSELECT nome, idade \nFROM usuarios \nORDER BY idade DESC \nLIMIT 5;"
    },
    {
      title: "Atualizar e Deletar (Cuidado Extremo)",
      content: "O UPDATE ('U') e o DELETE ('D') encerram o ciclo CRUD. Eles modificam ou apagam dados permanentemente. A regra absoluta no MySQL é: NUNCA rode um desses comandos sem um WHERE apontando para um ID específico. Se esquecer o filtro, a ação afetará toda a tabela de uma só vez, causando desastres.",
      type: "pratica",
      codeSnippet: "-- Atualizando o email apenas do usuário com ID 10:\nUPDATE usuarios \nSET email = 'novo@nook.com' \nWHERE id = 10;\n\n-- Apagando a conta do usuário de ID 5:\nDELETE FROM usuarios \nWHERE id = 5;"
    },
    {
      title: "Dicionário do CRUD",
      content: "Consulte esta tabela para lembrar a anatomia dos comandos essenciais de manipulação de dados no MySQL.",
      type: "tabela",
      tableData: {
        headers: ["Comando SQL", "Operação CRUD", "Função e Comportamento"],
        rows: [
          ["INSERT INTO", "Create (Criar)", "Adiciona uma nova linha (registro) preenchendo as colunas especificadas."],
          ["SELECT", "Read (Ler)", "Busca e lê os dados. Sem o WHERE, ele lê a tabela inteira."],
          ["UPDATE", "Update (Atualizar)", "Modifica uma ou mais colunas de um registro já existente. Exige WHERE."],
          ["DELETE", "Delete (Deletar)", "Remove um registro inteiro (a linha completa). Exige WHERE."],
          ["WHERE", "Filtro", "Aplica condições (idade > 18) para limitar onde a ação do SQL vai acontecer."],
          ["ORDER BY", "Ordenação", "Organiza o retorno em ASC (Crescente) ou DESC (Decrescente)."],
          ["LIMIT", "Paginação", "Trava o retorno do MySQL em um número máximo de linhas. Ex: LIMIT 10."]
        ]
      }
    }
  ]
};