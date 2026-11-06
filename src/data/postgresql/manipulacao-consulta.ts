export const manipulacaoConsulta = {
  id: "manipulacao-consulta",
  titulo: "Manipulação e Consulta de Dados",
  cards: [
    {
      title: "O Padrão CRUD",
      content: "O acrônimo CRUD representa as quatro operações vitais de qualquer sistema: Create (Criar), Read (Ler), Update (Atualizar) e Delete (Apagar). No SQL, usamos a linguagem de manipulação (DML) para realizar essas tarefas. O comando INSERT é o responsável pelo 'Create', permitindo adicionar novos registros informando as colunas e os valores correspondentes.",
      type: "pratica",
      codeSnippet: "-- Sintaxe básica de Inserção (Create):\nINSERT INTO clientes (nome, email, idade)\nVALUES ('Erick Carrasco', 'erick@nook.com', 21);\n\n-- Inserindo múltiplos registros de uma vez:\nINSERT INTO clientes (nome, email, idade)\nVALUES \n  ('Ana', 'ana@email.com', 25),\n  ('Carlos', 'carlos@email.com', 30);"
    },
    {
      title: "Consultas Básicas (SELECT)",
      content: "O comando SELECT é a ferramenta de leitura ('Read'). Ele permite extrair dados do banco. Você pode usar o asterisco para trazer todas as colunas de uma tabela, mas a boa prática em sistemas reais é declarar exatamente os nomes das colunas que você precisa, poupando memória e processamento do servidor.",
      type: "pratica",
      codeSnippet: "-- ❌ Jeito preguiçoso (Traz tudo, pesa o servidor):\nSELECT * FROM clientes;\n\n-- ✅ Jeito profissional (Traz só o necessário):\nSELECT nome, email FROM clientes;"
    },
    {
      title: "Filtros e Ordenação",
      content: "Raramente você vai querer listar todos os milhões de usuários de um sistema. A cláusula WHERE funciona como um filtro, usando operadores lógicos (AND, OR, >, <) para buscar registros específicos. Já o ORDER BY organiza os resultados, e o LIMIT restringe a quantidade de linhas retornadas, essencial para criar sistemas de paginação no Front-end.",
      type: "pratica",
      codeSnippet: "-- Filtrando clientes maiores de 18 anos, ordenados por nome de Z a A:\nSELECT nome, idade \nFROM clientes \nWHERE idade >= 18 AND ativo = true\nORDER BY nome DESC\nLIMIT 10; -- Traz apenas os 10 primeiros"
    },
    {
      title: "Atualização e Exclusão (Perigo)",
      content: "Os comandos UPDATE e DELETE alteram informações de forma definitiva. A regra de ouro no banco de dados é: nunca execute um UPDATE ou DELETE sem uma cláusula WHERE apontando para um ID específico. Se você esquecer o filtro, o PostgreSQL aplicará a mudança em todas as linhas da tabela de uma só vez.",
      type: "pratica",
      codeSnippet: "-- Atualizando o email do cliente de ID 5:\nUPDATE clientes \nSET email = 'novo_email@empresa.com' \nWHERE id = 5;\n\n-- Deletando o cliente de ID 10:\nDELETE FROM clientes \nWHERE id = 10;"
    },
    {
      title: "Funções de Agregação e Agrupamento",
      content: "Para gerar relatórios e dashboards, o SQL oferece funções matemáticas embutidas (COUNT, SUM, AVG, MAX, MIN). Quando combinamos essas funções com o GROUP BY, o banco agrupa os registros por categoria antes de fazer o cálculo. Se precisar filtrar o resultado de um agrupamento, não usamos o WHERE, mas sim a cláusula HAVING.",
      type: "pratica",
      codeSnippet: "-- Contando quantos clientes existem em cada estado (UF):\nSELECT uf, COUNT(*) as total_clientes\nFROM clientes\nGROUP BY uf\nHAVING COUNT(*) > 100; -- Mostra apenas estados com mais de 100 clientes"
    },
    {
      title: "Cruzamento de Tabelas (JOINs)",
      content: "Bancos relacionais brilham no cruzamento de dados. Quando precisamos unir informações de duas tabelas separadas, usamos os JOINs baseados nas chaves primárias e estrangeiras. O INNER JOIN traz apenas os registros que têm correspondência nas duas tabelas. O LEFT JOIN traz tudo da tabela da esquerda, mesmo que não haja correspondência na tabela da direita.",
      type: "pratica",
      codeSnippet: "-- Unindo Clientes e Pedidos (Trazendo o nome do cliente e o valor da compra):\nSELECT clientes.nome, pedidos.valor_total\nFROM clientes\nINNER JOIN pedidos ON clientes.id = pedidos.cliente_id;"
    },
    {
      title: "Subconsultas e CTEs (WITH)",
      content: "Quando consultas começam a ficar gigantescas e confusas, usamos Expressões de Tabela Comuns (CTEs). A cláusula WITH permite criar uma 'tabela temporária virtual' no topo do seu código, tornando a leitura muito mais limpa e organizada, parecida com a criação de variáveis no JavaScript.",
      type: "pratica",
      codeSnippet: "-- Criando uma CTE (Tabela temporária de bons clientes):\nWITH ClientesVIP AS (\n  SELECT id, nome FROM clientes WHERE total_compras > 5000\n)\n-- Usando a CTE na consulta principal:\nSELECT * FROM ClientesVIP;"
    },
    {
      title: "Dicionário de Manipulação (DML)",
      content: "Esta tabela serve como um guia rápido para relembrar as cláusulas essenciais e os operadores lógicos do SQL durante o desenvolvimento dos seus scripts.",
      type: "tabela",
      tableData: {
        headers: ["Comando SQL", "Finalidade", "Exemplo de Uso"],
        rows: [
          ["INSERT INTO", "Adiciona novas linhas na tabela.", "INSERT INTO usuarios (nome) VALUES ('João');"],
          ["SELECT", "Lê e extrai os dados.", "SELECT id, nome FROM usuarios;"],
          ["WHERE", "Filtra os registros com base em condições lógicas.", "WHERE idade > 18 AND status = 'ativo'"],
          ["UPDATE", "Altera dados existentes.", "UPDATE usuarios SET nome = 'José' WHERE id = 1;"],
          ["DELETE", "Remove linhas inteiras.", "DELETE FROM usuarios WHERE id = 5;"],
          ["ORDER BY", "Ordena os resultados (ASC para crescente, DESC para decrescente).", "ORDER BY data_cadastro DESC"],
          ["INNER JOIN", "Cruza tabelas retornando apenas as intersecções perfeitas.", "INNER JOIN perfil ON user.id = perfil.user_id"],
          ["LEFT JOIN", "Retorna tudo da tabela principal (esquerda) e as intersecções.", "LEFT JOIN vendas ON cliente.id = vendas.cliente_id"]
        ]
      }
    }
  ]
};