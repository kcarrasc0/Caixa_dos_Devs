export const mysqlPerformanceTransacoes = {
  id: "performance-transacoes",
  titulo: "Performance e Transações",
  cards: [
    {
      title: "O Motor InnoDB",
      content: "Um SGBD precisa de um 'motor' para gravar os arquivos no HD. O motor padrão e mais poderoso do MySQL moderno é o InnoDB. Diferente dos motores antigos, ele suporta relacionamentos complexos, recuperação de falhas (crash recovery) e transações seguras (ACID).",
      type: "conceito",
      codeSnippet: "-- O MySQL usa o InnoDB por padrão desde a versão 5.5.\n-- A sigla ACID significa:\n-- Atomicity (Ou faz tudo, ou desfaz tudo)\n-- Consistency (Respeita as chaves e restrições)\n-- Isolation (Uma transação não interfere na outra)\n-- Durability (Se a energia cair, o dado salvo não se perde)"
    },
    {
      title: "Transações: COMMIT e ROLLBACK",
      content: "Uma Transação é um bloco isolado de comandos SQL. Imagine uma transferência bancária: tirar dinheiro da conta A e colocar na conta B. Se a luz cair no meio, o dinheiro some! Com transações (START TRANSACTION), as mudanças só são gravadas no disco quando você envia um COMMIT. Se houver erro, o ROLLBACK desfaz tudo.",
      type: "pratica",
      codeSnippet: "-- Protegendo uma transferência financeira no MySQL:\nSTART TRANSACTION;\n\nUPDATE contas SET saldo = saldo - 100 WHERE id = 1;\nUPDATE contas SET saldo = saldo + 100 WHERE id = 2;\n\nCOMMIT; -- Salva no disco. (Se desse erro no código, rodaríamos ROLLBACK)"
    },
    {
      title: "Acelerando Buscas (INDEX)",
      content: "Se uma tabela tem milhões de linhas, fazer um SELECT pelo nome vai demorar muito, pois o MySQL lerá linha por linha (Full Table Scan). A solução é criar um Índice (INDEX). O índice é como o sumário de um livro: ele cria uma estrutura ordenada nos bastidores que permite achar o registro em milissegundos.",
      type: "pratica",
      codeSnippet: "-- Criando um índice para buscas rápidas por e-mail:\nCREATE INDEX idx_usuario_email ON usuarios(email);\n\n-- Agora um SELECT buscando pelo email não trava o servidor."
    },
    {
      title: "Plano de Execução (EXPLAIN)",
      content: "O comando EXPLAIN é o Raio-X do desenvolvedor. Quando colocado na frente de qualquer consulta, em vez de retornar os dados, o MySQL devolve uma tabela explicando exatamente a estratégia que ele vai usar para achar a informação: se vai usar índices, quantas linhas vai ler e se há gargalos.",
      type: "pratica",
      codeSnippet: "-- Analisando o custo de uma busca:\nEXPLAIN SELECT * FROM usuarios WHERE email = 'teste@nook.com';\n\n-- Se na coluna 'type' do retorno estiver escrito 'ALL', você tem um problema (Leitura Total).\n-- Se estiver 'ref' ou 'const', a consulta está rápida e usando índices."
    }
  ]
};