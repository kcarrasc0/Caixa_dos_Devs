export const recursosAvancados = {
  id: "recursos-avancados",
  titulo: "Recursos Avançados no Postgres",
  cards: [
    {
      title: "Além do Básico: Window Functions",
      content: "As Funções de Janela (Window Functions) permitem fazer cálculos matemáticos entre diferentes linhas da tabela, mas sem agrupá-las e achatá-las (como faz o GROUP BY). Elas são perfeitas para criar rankings, números de linha e comparar uma venda com a venda do mês anterior, mantendo cada registro individual visível.",
      type: "conceito",
      codeSnippet: "-- A cláusula mágica é a palavra OVER(). Ela define o escopo (janela) da função.\n\n-- Comparando o salário individual com a média salarial da empresa:\nSELECT \n  nome,\n  salario,\n  AVG(salario) OVER() as media_empresa\nFROM funcionarios;"
    },
    {
      title: "Criando Rankings e Posições",
      content: "O PostgreSQL possui funções analíticas embutidas. A ROW_NUMBER() enumera as linhas, enquanto o RANK() cria posições (com empates pulando números, tipo olimpíadas). Usamos a palavra PARTITION BY dentro do OVER() para resetar o ranking a cada categoria.",
      type: "pratica",
      codeSnippet: "-- Rankeando os funcionários por maior salário, separados por departamento:\nSELECT \n  nome, \n  departamento, \n  salario,\n  RANK() OVER(PARTITION BY departamento ORDER BY salario DESC) as ranking_setor\nFROM funcionarios;"
    },
    {
      title: "PostgreSQL como Banco NoSQL (JSON/JSONB)",
      content: "O PostgreSQL é tão avançado que ele engoliu os bancos não relacionais. Ele possui um tipo de dado nativo chamado JSONB (JSON Binário). Isso permite que você salve estruturas flexíveis, objetos aninhados e arrays diretamente dentro de uma coluna de uma tabela relacional, unindo o melhor dos dois mundos.",
      type: "conceito",
      codeSnippet: "-- Criando uma tabela híbrida (Relacional + NoSQL):\nCREATE TABLE produtos (\n  id SERIAL PRIMARY KEY,\n  nome VARCHAR(100),\n  atributos JSONB -- Aqui podemos salvar qualquer estrutura dinâmica!\n);"
    },
    {
      title: "Consultando Dados JSONB",
      content: "O Postgres possui operadores especiais (`->` e `->>`) para navegar dentro dos objetos JSONB e extrair informações diretamente pelo SQL, permitindo até criar índices para que essas buscas em documentos dinâmicos sejam ultrarrápidas.",
      type: "pratica",
      codeSnippet: "-- Inserindo um dado JSON flexível:\nINSERT INTO produtos (nome, atributos)\nVALUES ('Monitor Gamer', '{\"resolucao\": \"4k\", \"frequencia\": \"144hz\", \"cores\": [\"preto\", \"branco\"]}');\n\n-- Buscando produtos filtrando de dentro do JSON:\nSELECT nome \nFROM produtos \nWHERE atributos->>'resolucao' = '4k';"
    },
    {
      title: "Stored Procedures (Procedimentos Armazenados)",
      content: "Stored Procedures são blocos de código complexo (com lógica if/else e loops) que ficam salvos dentro do próprio banco de dados, em vez de ficarem na aplicação Front-end/Back-end. Isso centraliza as regras de negócio sensíveis no servidor de dados.",
      type: "pratica",
      codeSnippet: "-- Criando uma Procedure no PostgreSQL (Linguagem PL/pgSQL):\nCREATE OR REPLACE PROCEDURE transferir_fundos(remetente INT, destinatario INT, valor NUMERIC) \nLANGUAGE plpgsql AS $$\nBEGIN\n    UPDATE contas SET saldo = saldo - valor WHERE id = remetente;\n    UPDATE contas SET saldo = saldo + valor WHERE id = destinatario;\n    COMMIT; -- Garante que as duas ações aconteçam juntas\nEND;\n$$;\n\n-- Para executar via código:\nCALL transferir_fundos(1, 2, 500.00);"
    },
    {
      title: "Triggers (Gatilhos Automáticos)",
      content: "Triggers são eventos automáticos. Você configura o PostgreSQL para 'escutar' a tabela. Se ocorrer um INSERT, UPDATE ou DELETE, o banco automaticamente dispara uma função. É muito utilizado para gerar logs de auditoria e tabelas de histórico sem depender do código do desenvolvedor.",
      type: "pratica",
      codeSnippet: "-- 1. Criando a função a ser disparada:\nCREATE FUNCTION registrar_log() RETURNS TRIGGER AS $$\nBEGIN\n    INSERT INTO log_auditoria (acao, data) VALUES ('Novo registro inserido', NOW());\n    RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\n-- 2. Criando o Gatilho atrelado à tabela 'vendas':\nCREATE TRIGGER trigger_venda_feita\nAFTER INSERT ON vendas\nFOR EACH ROW EXECUTE PROCEDURE registrar_log();"
    },
    {
      title: "Dicionário de Comandos Avançados",
      content: "Consulta rápida para as funções analíticas e ferramentas não-relacionais incorporadas ao PostgreSQL moderno.",
      type: "tabela",
      tableData: {
        headers: ["Comando / Recurso", "Significado e Aplicação"],
        rows: [
          ["OVER()", "Abre a janela de análise. Necessário para todas as Window Functions."],
          ["PARTITION BY", "Atua como o GROUP BY das funções de janela, reiniciando o cálculo a cada categoria."],
          ["ROW_NUMBER()", "Atribui um número sequencial único para cada linha retornada no select."],
          ["JSONB", "Tipo de dado para salvar documentos no formato JSON de forma binária e otimizada."],
          ["operador ->>", "Extrai o valor de uma chave JSONB e o converte em texto limpo para o SQL ler."],
          ["CREATE PROCEDURE", "Define um bloco de código complexo com regras de negócio salvo no servidor."],
          ["CREATE TRIGGER", "Cria um ouvinte que dispara uma ação automaticamente antes ou depois de mudanças na tabela."]
        ]
      }
    }
  ]
};