export const mysqlRestricoesChaves = {
  id: "restricoes-chaves",
  titulo: "Restrições e Chaves (Constraints)",
  cards: [
    {
      title: "A Lei do Banco (Constraints)",
      content: "Para que um banco de dados relacional seja confiável, ele não pode aceitar qualquer dado. As Constraints (Restrições) são regras invisíveis aplicadas às colunas durante a criação da tabela. Se o seu código Back-end tentar inserir um dado que quebre a regra, o MySQL recusa a inserção e devolve um erro.",
      type: "conceito",
      codeSnippet: "-- As regras são definidas no momento do CREATE TABLE ou através de um ALTER TABLE.\n-- Elas garantem a integridade e a consistência da informação."
    },
    {
      title: "Primary Key (Chave Primária)",
      content: "A PRIMARY KEY (PK) é o RG do seu registro. É uma restrição que garante duas coisas: a coluna não pode ser nula e seu valor nunca pode se repetir em outra linha. Geralmente usamos números inteiros com a regra AUTO_INCREMENT, para que o MySQL conte os IDs sozinho.",
      type: "pratica",
      codeSnippet: "-- Definindo a Chave Primária:\nCREATE TABLE departamentos (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nome VARCHAR(50)\n);"
    },
    {
      title: "Foreign Key (Chave Estrangeira)",
      content: "A FOREIGN KEY (FK) é a base do banco relacional. Ela é uma coluna que só aceita valores que já existam como Chave Primária em outra tabela. Isso impede que você cadastre uma venda para o 'Cliente ID 999' se o cliente 999 não existir no sistema (Integridade Referencial).",
      type: "pratica",
      codeSnippet: "-- Conectando um funcionário ao departamento correto:\nCREATE TABLE funcionarios (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nome VARCHAR(100),\n  departamento_id INT,\n  FOREIGN KEY (departamento_id) REFERENCES departamentos(id)\n);"
    },
    {
      title: "UNIQUE e NOT NULL",
      content: "Nem todas as regras envolvem chaves. A constraint NOT NULL obriga o sistema a preencher a coluna (ex: impossível cadastrar usuário sem senha). A constraint UNIQUE garante que nenhum valor se repita na tabela, sendo perfeita para colunas de E-mail, CPF ou CNPJ.",
      type: "pratica",
      codeSnippet: "-- Aplicando regras de negócio vitais:\nCREATE TABLE usuarios (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  cpf VARCHAR(14) UNIQUE,        -- Nunca haverá dois CPFs iguais\n  senha VARCHAR(255) NOT NULL    -- O campo senha não pode ficar vazio\n);"
    },
    {
      title: "Dicionário de Restrições",
      content: "Guia rápido de integridade do MySQL.",
      type: "tabela",
      tableData: {
        headers: ["Restrição (Constraint)", "Significado Lógico"],
        rows: [
          ["PRIMARY KEY", "Identificador único da linha. Junção automática de NOT NULL + UNIQUE."],
          ["FOREIGN KEY", "Conecta duas tabelas. Impede cadastro de referências fantasmas."],
          ["UNIQUE", "Garante que não haverá valores duplicados nesta coluna específica."],
          ["NOT NULL", "Impede que o campo seja salvo em branco (NULL) no banco."],
          ["DEFAULT", "Se o usuário não enviar um valor no INSERT, preenche com um valor padrão."],
          ["AUTO_INCREMENT", "Exclusivo do MySQL. Conta os números do ID automaticamente (1, 2, 3...)."]
        ]
      }
    }
  ]
};