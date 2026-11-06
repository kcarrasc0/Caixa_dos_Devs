export const importacaoExportacao = {
  id: "importacao-exportacao",
  titulo: "Importação e Exportação",
  cards: [
    {
      title: "Movimentando Dados",
      content: "A importação e exportação de dados permitem que o banco se comunique com o mundo externo. Isso tem diversas aplicabilidades: migrar um sistema de um servidor antigo para um novo, integrar seu banco com ferramentas de inteligência artificial ou compartilhar relatórios de vendas com a equipe de marketing em planilhas.",
      type: "conceito",
      codeSnippet: "-- Principais formatos de troca de dados:\n\n-- CSV: Planilhas e dados tabulares (Excel).\n-- JSON: Formato leve para comunicação na Web e APIs.\n-- XML: Formato clássico para notas fiscais.\n-- SQL Dump: Script inteiro do banco para clonagem."
    },
    {
      title: "Ferramentas do PostgreSQL",
      content: "O SGBD PostgreSQL oferece ferramentas robustas rodadas diretamente no terminal para extrair e inserir grandes volumes de dados de forma extremamente rápida, sem travar o servidor.",
      type: "tabela",
      tableData: {
        headers: ["Ferramenta", "O que faz?", "Comando no Terminal"],
        rows: [
          ["pg_dump", "Extrai o banco inteiro para um arquivo SQL Backup.", "pg_dump -U postgres meu_banco > backup.sql"],
          ["psql -f", "Lê e executa um arquivo SQL inteiro de fora para dentro.", "psql -U postgres meu_banco -f arquivo.sql"],
          ["COPY (Exportar)", "Exporta uma tabela específica para um arquivo CSV.", "COPY clientes TO 'caminho/clientes.csv' CSV;"],
          ["COPY (Importar)", "Importa dados de uma planilha CSV para dentro de uma tabela.", "COPY clientes FROM 'caminho/dados.csv' CSV;"]
        ]
      }
    }
  ]
};