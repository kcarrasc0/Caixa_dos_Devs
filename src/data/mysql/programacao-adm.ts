export const mysqlProgramacaoAdm = {
  id: "programacao-adm",
  titulo: "Programação e Administração",
  cards: [
    {
      title: "Stored Procedures (Rotinas)",
      content: "Stored Procedures são blocos de código SQL com lógica de programação (IF/ELSE, variáveis, loops) que ficam salvos diretamente no banco de dados. Em vez do Back-end enviar dezenas de comandos pesados pela rede, ele simplesmente chama a rotina, o que melhora muito a performance e a segurança corporativa.",
      type: "pratica",
      codeSnippet: "-- Criando e chamando uma rotina no servidor:\nDELIMITER //\nCREATE PROCEDURE dar_desconto(IN produto_id INT, IN percentual FLOAT)\nBEGIN\n  UPDATE produtos SET preco = preco - (preco * percentual) WHERE id = produto_id;\nEND //\nDELIMITER ;\n\n-- Para usar na aplicação:\nCALL dar_desconto(5, 0.10);"
    },
    {
      title: "Gatilhos Automáticos (Triggers)",
      content: "Um Trigger (Gatilho) é uma função que dispara sozinha quando um evento acontece na tabela (INSERT, UPDATE ou DELETE). É a ferramenta perfeita para criar tabelas de log de auditoria: se alguém apagar um produto, o trigger percebe a ação e salva uma cópia oculta do que foi apagado.",
      type: "pratica",
      codeSnippet: "-- Criando um gatilho para salvar histórico antes de deletar um cliente:\nDELIMITER //\nCREATE TRIGGER log_cliente_apagado\nBEFORE DELETE ON clientes\nFOR EACH ROW\nBEGIN\n  INSERT INTO log_auditoria (acao, cliente_id, data)\n  VALUES ('Exclusão', OLD.id, NOW());\nEND //\nDELIMITER ;"
    },
    {
      title: "Segurança e Permissões",
      content: "Nunca devemos usar o usuário raiz ('root') na aplicação web. Um bom DBA cria usuários específicos e concede apenas as permissões necessárias (Princípio do Menor Privilégio). Usamos o comando GRANT para dar acesso e REVOKE para retirar.",
      type: "pratica",
      codeSnippet: "-- 1. Cria um usuário protegido por senha:\nCREATE USER 'app_nook'@'localhost' IDENTIFIED BY 'senha_segura';\n\n-- 2. Dá permissão só para ler e inserir (nunca apagar ou deletar tabelas):\nGRANT SELECT, INSERT ON sistema_db.* TO 'app_nook'@'localhost';"
    },
    {
      title: "Dicionário de Administração",
      content: "Comandos vitais de infraestrutura para o motor MySQL.",
      type: "tabela",
      tableData: {
        headers: ["Comando / Ferramenta", "Ação Prática"],
        rows: [
          ["START TRANSACTION", "Abre um bloco isolado de comandos no motor InnoDB."],
          ["COMMIT", "Salva definitivamente no HD todas as alterações de uma transação."],
          ["ROLLBACK", "Cancela a transação atual e desfaz todas as alterações ocorridas nela."],
          ["CREATE PROCEDURE", "Programa um script reutilizável que mora dentro do servidor MySQL."],
          ["CREATE TRIGGER", "Cria um ouvinte automático para reagir a mudanças nas tabelas."],
          ["GRANT", "Concede permissões a um usuário específico."],
          ["mysqldump", "Utilitário de terminal usado para fazer backup (exportar) bancos inteiros."]
        ]
      }
    }
  ]
};