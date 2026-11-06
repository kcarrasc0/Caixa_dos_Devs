export const segurancaBackup = {
  id: "seguranca-backup",
  titulo: "Segurança e Backups",
  cards: [
    {
      title: "A Importância do Backup",
      content: "Backup é uma cópia de segurança dos dados, e Restore é o processo de restaurar essa cópia. O Backup Completo faz uma cópia integral do banco. Implementar rotinas de segurança evita a falência da empresa em casos de falha de hardware, exclusões acidentais ou ataques de ransomware, além de permitir recuperar versões antigas para auditorias.",
      type: "conceito",
      codeSnippet: "-- Ferramentas equivalentes no mercado:\n\n-- PostgreSQL: pg_dump, pg_basebackup\n-- MySQL: mysqldump, mysqlhotcopy\n-- SQL Server: BACKUP DATABASE, RESTORE DATABASE"
    },
    {
      title: "Boas Práticas de Mercado",
      content: "Ter o backup não é o suficiente se ele estiver mal gerenciado. Existem regras estritas de infraestrutura para garantir que a cópia de segurança salve a aplicação quando o pior acontecer.",
      type: "tabela",
      tableData: {
        headers: ["Regra de Segurança", "Explicação Prática"],
        rows: [
          ["Redundância Geográfica", "Nunca guarde o backup no mesmo servidor do banco original. Salve em HDs externos ou serviços de nuvem diferentes."],
          ["Testes Periódicos de Restore", "Um backup só é válido se puder ser restaurado. Realize testes simulando panes frequentemente."],
          ["Automação", "Não dependa de ações manuais. Crie scripts (como Cron jobs no Linux) para rodar o pg_dump na madrugada."],
          ["Criptografia", "O arquivo do banco exportado deve ser criptografado para evitar que vazamentos exponham dados sensíveis."]
        ]
      }
    }
  ]
};