export const linguagemSqlCrud = {
  id: "linguagem-sql-crud",
  titulo: "Linguagem SQL e Manipulação",
  cards: [
    {
      title: "O Diagrama Entidade-Relacionamento",
      content: "O DER (Diagrama Entidade-Relacionamento) é a representação gráfica final do seu banco de dados. Ele mapeia visualmente as Entidades, seus Atributos e os Relacionamentos com suas devidas cardinalidades (1:1, 1:N, N:N). Ter o DER em mãos garante organização e eficiência, pois você tem a planta baixa exata antes de escrever qualquer código SQL.",
      type: "conceito",
      codeSnippet: "-- O DER serve como base para a criação estrutural (DDL):\n\n-- Entidade [ALUNO] vira a Tabela 'alunos'\n-- Atributo (Nome) vira a Coluna 'nome'\n-- Relacionamento [MATRICULA] vira a Chave Estrangeira 'id_curso'"
    },
    {
      title: "Introdução ao CRUD",
      content: "O acrônimo CRUD representa as quatro operações fundamentais que qualquer sistema ou banco de dados precisa fazer: Create (Criar), Read (Ler), Update (Atualizar) e Delete (Apagar). Dominar essas quatro ações significa que você consegue manipular 100% dos dados de um software.",
      type: "conceito",
      codeSnippet: "-- O ciclo de vida da informação no software:\n\n-- 1. Create: Cadastrar um usuário.\n-- 2. Read: Fazer o login (ler se ele existe).\n-- 3. Update: Trocar a senha ou foto de perfil.\n-- 4. Delete: Encerrar a conta."
    },
    {
      title: "Dicionário SQL x CRUD",
      content: "A linguagem SQL utiliza comandos específicos (DML - Data Manipulation Language) para executar as operações do CRUD no banco de dados. Consulte a tabela abaixo para relacionar o conceito à prática.",
      type: "tabela",
      tableData: {
        headers: ["Operação CRUD", "Comando SQL", "Exemplo de Uso Prático"],
        rows: [
          ["Create (Criar)", "INSERT INTO", "INSERT INTO clientes (nome) VALUES ('Ana');"],
          ["Read (Ler)", "SELECT", "SELECT nome, email FROM clientes WHERE id = 1;"],
          ["Update (Atualizar)", "UPDATE", "UPDATE clientes SET email = 'novo@email' WHERE id = 1;"],
          ["Delete (Apagar)", "DELETE", "DELETE FROM clientes WHERE id = 1;"]
        ]
      }
    },
    {
      title: "A Regra de Ouro do SQL",
      content: "Cuidado ao manipular dados. Os comandos UPDATE e DELETE alteram informações de forma definitiva. Se você executar um UPDATE sem especificar a condição (usando a cláusula WHERE), o SGBD vai alterar todas as linhas da tabela de uma só vez, causando um desastre nos dados da empresa.",
      type: "pratica",
      codeSnippet: "-- ❌ JEITO ERRADO E PERIGOSO:\nUPDATE produtos SET preco = 0;\n-- (Acabou de colocar TUDO de graça na loja)\n\n-- ✅ JEITO CERTO E SEGURO:\nUPDATE produtos SET preco = 0 WHERE id = 5;"
    }
  ]
};