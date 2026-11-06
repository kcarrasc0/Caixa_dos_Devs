export const administracaoArquitetura = {
  id: "administracao-arquitetura",
  titulo: "Administração e Arquitetura",
  cards: [
    {
      title: "Segurança de Acessos (ROLES)",
      content: "No PostgreSQL, usuários e grupos são chamados de ROLES. Em um ambiente corporativo, nunca usamos o usuário 'postgres' (superadministrador) para conectar uma aplicação web. A regra número 1 da segurança é o Princípio do Menor Privilégio: criar um usuário que tenha permissão apenas para o que for estritamente necessário.",
      type: "pratica",
      codeSnippet: "-- Criando um usuário seguro para o Back-end da nossa aplicação:\nCREATE ROLE app_backend WITH LOGIN PASSWORD 'senha_forte_123';\n\n-- Criando um usuário apenas para leitura (para a equipe de relatório):\nCREATE ROLE estagiario WITH LOGIN PASSWORD 'senha_leitura';"
    },
    {
      title: "Gerenciamento de Permissões (GRANTS)",
      content: "Após criar a ROLE, ela nasce cega e sem permissões. Usamos o comando GRANT para dar poderes específicos, e o REVOKE para removê-los. Assim, garantimos que um sistema de relatório não consiga usar um comando DELETE e apagar tabelas acidentalmente.",
      type: "pratica",
      codeSnippet: "-- Dando permissão total para a aplicação nas tabelas do sistema:\nGRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO app_backend;\n\n-- Limitando o estagiário a APENAS leitura (SELECT):\nGRANT SELECT ON clientes TO estagiario;"
    },
    {
      title: "A Arquitetura: postgresql.conf",
      content: "O cérebro da configuração do PostgreSQL fica em um arquivo de texto chamado postgresql.conf no servidor. É lá que o DBA (Administrador de Banco de Dados) ajusta limites cruciais, como a memória RAM dedicada (shared_buffers) e o limite máximo de usuários conectados simultaneamente (max_connections).",
      type: "conceito",
      codeSnippet: "-- Exemplo de parâmetros que ficam dentro do arquivo postgresql.conf:\n\n-- shared_buffers = 4GB (Diz quanto de RAM o banco pode consumir)\n-- max_connections = 200 (Impede que milhares de robôs travem o servidor)"
    },
    {
      title: "Manutenção Limpeza: O comando VACUUM",
      content: "Quando você faz um DELETE ou UPDATE, o PostgreSQL não apaga o dado do disco na hora. Ele apenas marca a linha como 'invisível' (chamada de tupla morta). Se não limparmos o banco, ele fica inchado e lento. O comando VACUUM entra varrendo a tabela, reciclando esses espaços vazios para novos dados.",
      type: "pratica",
      codeSnippet: "-- Rodando a limpeza manualmente (geralmente o Postgres faz isso sozinho em segundo plano):\nVACUUM clientes;\n\n-- Limpeza profunda (Trava a tabela, reorganiza tudo e devolve espaço pro HD):\nVACUUM FULL clientes;"
    },
    {
      title: "O Pior Aconteceu: pg_restore",
      content: "Se o servidor pegar fogo ou um hacker destruir os dados, o administrador usará a rotina de restauração. Se o backup foi feito gerando um script SQL comum, ele pode ser restaurado no terminal através da ferramenta psql ou utilizando utilitários focados como o pg_restore para formatos compactados.",
      type: "pratica",
      codeSnippet: "-- Comando no terminal (Linux/Windows) para restaurar um backup:\n\n-- Usando o psql para ler o arquivo de backup e jogar pro banco vazio:\npsql -U postgres -d nome_do_banco_novo -f backup_ontem.sql"
    },
    {
      title: "Dicionário de Administração",
      content: "As ferramentas e comandos focados em infraestrutura, controle de acesso e segurança da informação.",
      type: "tabela",
      tableData: {
        headers: ["Ferramenta / Comando", "Significado e Ação Prática"],
        rows: [
          ["CREATE ROLE", "Cria um novo usuário ou grupo de acesso no servidor."],
          ["GRANT", "Autoriza privilégios. Ex: Permite que um usuário faça SELECT ou UPDATE."],
          ["REVOKE", "Remove privilégios de um usuário instantaneamente."],
          ["postgresql.conf", "Arquivo mestre de configuração (Porta, RAM, Logs e Conexões)."],
          ["VACUUM", "O lixeiro do Postgres. Limpa linhas deletadas e recicla espaço em disco."],
          ["VACUUM FULL", "Desfragmenta toda a tabela, liberando espaço físico, mas bloqueia acessos."],
          ["pg_restore", "Ferramenta de terminal usada para ler arquivos de backup e restaurar dados."]
        ]
      }
    }
  ]
};