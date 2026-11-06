export const otimizacaoDesempenho = {
  id: "otimizacao-desempenho",
  titulo: "Otimização e Desempenho",
  cards: [
    {
      title: "O Problema da Lentidão (Seq Scan)",
      content: "Quando você faz um SELECT buscando um cliente por CPF em uma tabela com 10 milhões de linhas, o SGBD, por padrão, lê linha por linha desde a primeira até encontrar. Isso é chamado de Busca Sequencial (Seq Scan). Em sistemas de larga escala, isso trava o servidor inteiro e causa lentidão.",
      type: "conceito",
      codeSnippet: "-- Uma consulta inofensiva, mas que pode derrubar um servidor sem índices:\nSELECT nome, email FROM clientes WHERE cpf = '11122233344';"
    },
    {
      title: "A Solução: Índices (B-Tree)",
      content: "A solução para a lentidão é criar um Índice (Index). Pense no índice como o sumário de um livro: em vez de ler o livro todo para achar um capítulo, você olha no sumário e vai direto para a página. O PostgreSQL usa por padrão o índice B-Tree (Árvore Balanceada), ideal para buscas exatas e comparações matemáticas (maior que, menor que).",
      type: "pratica",
      codeSnippet: "-- Criando um índice na coluna CPF para buscas ultrarrápidas:\nCREATE INDEX idx_clientes_cpf ON clientes(cpf);\n\n-- A partir de agora, o SELECT pelo CPF usará o 'Index Scan' e será imediato."
    },
    {
      title: "Índices Avançados (Hash, GIN e GiST)",
      content: "O PostgreSQL oferece tipos diferentes de índices para necessidades diferentes. O Hash é ainda mais rápido que o B-Tree, mas serve APENAS para igualdade absoluta (=). O GIN (Generalized Inverted Index) é a estrela do Postgres para buscar palavras específicas dentro de textos gigantes ou navegar dentro de documentos JSONB complexos.",
      type: "conceito",
      codeSnippet: "-- Criando um índice focado em buscar textos dentro de um JSONB:\nCREATE INDEX idx_produtos_json ON produtos USING GIN (atributos);"
    },
    {
      title: "O Raio-X do Banco (EXPLAIN ANALYZE)",
      content: "Como o Desenvolvedor sabe se a sua consulta está rápida de verdade? Usando o comando EXPLAIN ANALYZE na frente do SELECT. O SGBD não apenas executa a consulta, mas gera um relatório detalhado mostrando milissegundos gastos, qual estratégia usou e se o índice foi acionado.",
      type: "pratica",
      codeSnippet: "-- Verificando o plano de execução e o custo de processamento:\nEXPLAIN ANALYZE SELECT nome FROM clientes WHERE cpf = '11122233344';\n\n-- O resultado mostrará se ele usou 'Seq Scan' (Ruim) ou 'Index Scan' (Ótimo)."
    },
    {
      title: "Transações e Concorrência (ACID)",
      content: "Imagine duas pessoas clicando em 'Comprar' no último ingresso de um show ao mesmo tempo. Para evitar que o sistema venda 2 ingressos existindo apenas 1, usamos as Transações. Uma transação cria um bloco de isolamento. Iniciamos com BEGIN. Se tudo der certo, usamos COMMIT. Se houver falha de rede ou lógica no meio, usamos ROLLBACK para desfazer tudo.",
      type: "pratica",
      codeSnippet: "-- Bloco de transação financeira segura:\nBEGIN;\n\nUPDATE contas SET saldo = saldo - 100 WHERE id = 1; -- Tira do João\nUPDATE contas SET saldo = saldo + 100 WHERE id = 2; -- Põe na Maria\n\nCOMMIT; -- Salva no disco. Se desse erro, usaríamos ROLLBACK."
    },
    {
      title: "Bloqueios (Locks)",
      content: "Durante uma transação, o PostgreSQL aplica 'Locks' (cadeados) nas linhas que estão sendo alteradas. Enquanto o COMMIT não acontecer, o SGBD congela qualquer outro usuário que tente alterar aquela mesma linha. Isso garante a consistência absoluta dos dados.",
      type: "conceito",
      codeSnippet: "-- Em uma transação manual, você pode forçar um bloqueio na linha:\nSELECT * FROM ingressos WHERE id = 5 FOR UPDATE;\n-- Outros usuários terão que esperar essa transação acabar para comprar."
    },
    {
      title: "Dicionário de Performance",
      content: "Resumo dos comandos fundamentais para manter as consultas do seu sistema rodando em milissegundos.",
      type: "tabela",
      tableData: {
        headers: ["Comando / Recurso", "Significado e Ação Prática"],
        rows: [
          ["CREATE INDEX", "Gera uma estrutura de dados extra no HD para acelerar buscas (como um sumário)."],
          ["Índice B-Tree", "Padrão do sistema. Ótimo para textos comuns e buscas maiores/menores (> e <)."],
          ["Índice GIN", "Obrigatório para buscas de alta performance dentro de colunas JSONB ou Arrays."],
          ["EXPLAIN ANALYZE", "Roda a consulta e devolve o tempo gasto e o plano de execução exato."],
          ["BEGIN", "Inicia uma transação segura. Nenhuma mudança é salva no disco até o fechamento."],
          ["COMMIT", "Confirma e escreve todas as alterações da transação no disco rígido definitivamente."],
          ["ROLLBACK", "Botão de pânico. Desfaz todas as ações feitas desde o último BEGIN."]
        ]
      }
    }
  ]
};