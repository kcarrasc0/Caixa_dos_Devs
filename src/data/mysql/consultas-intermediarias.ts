export const mysqlConsultasIntermediarias = {
  id: "consultas-intermediarias",
  titulo: "Consultas Intermediárias",
  cards: [
    {
      title: "Funções de Agregação",
      content: "Em sistemas reais, frequentemente precisamos de resumos matemáticos em vez de listar todos os dados. As funções de agregação do MySQL processam múltiplas linhas e retornam um único valor. As mais usadas são: COUNT (conta quantas linhas existem), SUM (soma os valores), AVG (calcula a média), MAX (maior valor) e MIN (menor valor).",
      type: "pratica",
      codeSnippet: "-- Calculando estatísticas de uma tabela de 'vendas':\nSELECT \n  COUNT(id) AS total_vendas,\n  SUM(valor) AS faturamento_total,\n  AVG(valor) AS ticket_medio,\n  MAX(valor) AS maior_venda\nFROM vendas;"
    },
    {
      title: "Agrupamentos (GROUP BY e HAVING)",
      content: "Se quisermos ver o faturamento separado por mês ou por vendedor, usamos o GROUP BY. Ele achata os dados em grupos antes de aplicar a matemática. E se você quiser filtrar o resultado desse grupo, o WHERE não vai funcionar (pois ele filtra antes de agrupar). Para filtrar grupos, usamos a cláusula HAVING.",
      type: "pratica",
      codeSnippet: "-- Somando vendas por vendedor, mostrando apenas os que faturaram mais de 5000:\nSELECT vendedor_id, SUM(valor) AS faturamento\nFROM vendas\nGROUP BY vendedor_id\nHAVING SUM(valor) > 5000;"
    },
    {
      title: "Conectando Tabelas (INNER JOIN)",
      content: "Bancos relacionais separam os dados para evitar repetição (Normalização). O JOIN é a cola que une as tabelas novamente na hora da leitura. O INNER JOIN é o mais rígido: ele só traz os registros que possuam correspondência perfeita nas duas tabelas conectadas.",
      type: "pratica",
      codeSnippet: "-- Trazendo o nome do cliente e o valor da compra (unindo 2 tabelas):\nSELECT clientes.nome, vendas.valor\nFROM vendas\nINNER JOIN clientes ON vendas.cliente_id = clientes.id;"
    },
    {
      title: "Expandindo Buscas (LEFT JOIN)",
      content: "Diferente do INNER JOIN, o LEFT JOIN traz todos os registros da tabela principal (a que fica à esquerda no código), mesmo que eles não tenham ligação na tabela da direita. Os campos vazios serão preenchidos com NULL. É perfeito para descobrir, por exemplo, quais clientes nunca fizeram uma compra.",
      type: "pratica",
      codeSnippet: "-- Traz todos os clientes. Se ele não tiver vendas, a coluna valor vem como NULL:\nSELECT clientes.nome, vendas.valor\nFROM clientes\nLEFT JOIN vendas ON clientes.id = vendas.cliente_id;"
    },
    {
      title: "Subconsultas (Subqueries)",
      content: "Uma Subquery é uma consulta SELECT aninhada dentro de outra consulta. Elas são muito úteis quando você precisa usar o resultado de uma busca como filtro para a busca principal, especialmente quando os dados mudam dinamicamente.",
      type: "pratica",
      codeSnippet: "-- Buscando produtos que custam MAIS do que a média geral da loja:\nSELECT nome, preco \nFROM produtos \nWHERE preco > (\n  SELECT AVG(preco) FROM produtos\n);"
    },
    {
      title: "Dicionário Intermediário",
      content: "Consulte esta tabela para dominar a manipulação avançada de textos, datas e agregações no MySQL.",
      type: "tabela",
      tableData: {
        headers: ["Comando / Função", "Ação Prática"],
        rows: [
          ["GROUP BY", "Agrupa registros iguais. Essencial quando usar SUM, COUNT ou AVG."],
          ["HAVING", "Filtra os dados depois que eles já foram agrupados (Substitui o WHERE nos grupos)."],
          ["INNER JOIN", "Cruza tabelas. Só traz a linha se a chave existir em ambos os lados."],
          ["LEFT JOIN", "Cruza tabelas. Força trazer tudo da tabela esquerda, preenchendo vazios com NULL."],
          ["SUBSTRING()", "Função de texto: Corta um pedaço de um texto longo."],
          ["LENGTH()", "Função de texto: Conta quantos caracteres uma string tem."],
          ["DATEDIFF()", "Função de data: Calcula a diferença de dias entre duas datas informadas."]
        ]
      }
    }
  ]
};