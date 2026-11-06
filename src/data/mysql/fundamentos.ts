export const mysqlFundamentos = {
  id: "fundamentos",
  titulo: "Fundamentos e Tipos",
  cards: [
    {
      title: "O Universo Relacional",
      content: "Um Sistema Gerenciador de Banco de Dados (SGBD) é o cérebro que guarda as informações do seu aplicativo de forma segura e organizada. O MySQL é um dos SGBDs relacionais mais famosos do mundo. Ele é chamado de relacional porque armazena dados em tabelas interligadas, possuindo regras rígidas para evitar que informações falsas ou corrompidas entrem no sistema.",
      type: "conceito",
      codeSnippet: "-- Uma tabela de banco de dados é muito parecida com uma planilha do Excel:\n\n-- COLUNA (Campos): Nome, Email, Idade (Definem a categoria da informação)\n-- LINHA (Registros): João, joao@gmail.com, 25 (A informação real)"
    },
    {
      title: "Tipos de Dados Numéricos",
      content: "No MySQL, ao criar uma coluna, você precisa informar exatamente que tipo de dado vai morar ali. Para números, temos os inteiros e os decimais. O INT é perfeito para IDs, quantidades ou idades. Para números quebrados (como dinheiro ou peso), usamos o FLOAT ou DECIMAL, que garantem a precisão após a vírgula.",
      type: "conceito",
      codeSnippet: "-- Exemplos de uso de dados numéricos:\n\n-- INT: 1, 150, 10000 (Usado para contar curtidas)\n-- FLOAT: 1.5, 7.85 (Usado para avaliações de estrelas)\n-- DECIMAL(10,2): 1500.50 (Perfeito para dinheiro, significa 10 dígitos totais e 2 casas decimais)"
    },
    {
      title: "Tipos de Dados Textuais",
      content: "Para textos, o MySQL oferece opções baseadas no tamanho esperado da mensagem. O CHAR tem tamanho fixo (ideal para siglas como PE, SP, RJ). O VARCHAR é dinâmico, crescendo conforme o necessário (ideal para nomes e senhas). Já o TEXT é usado para blocos gigantes de palavras, como um artigo de blog ou um longo comentário.",
      type: "conceito",
      codeSnippet: "-- Exemplos de uso de dados de texto:\n\n-- CHAR(2): Ocupa sempre 2 espaços exatos. Ex: 'PE'\n-- VARCHAR(100): Cresce até 100 caracteres. Ex: 'KCarrasquinho'\n-- TEXT: Sem limite prático. Ex: Todo o conteúdo de uma redação do ENEM."
    },
    {
      title: "Tipos de Data e Hora",
      content: "Lidar com o tempo é vital em qualquer sistema, seja para saber quando um usuário se cadastrou ou quando um pedido foi feito. O MySQL trata datas de forma americana (Ano-Mês-Dia). O formato DATE guarda apenas o calendário, enquanto o DATETIME junta o calendário com o relógio.",
      type: "conceito",
      codeSnippet: "-- Exemplos de armazenamento temporal:\n\n-- DATE: '2026-11-04' (Data de nascimento)\n-- DATETIME: '2026-11-04 14:30:00' (Momento exato da aprovação do pagamento)\n-- TIMESTAMP: Similar ao Datetime, mas ajusta automaticamente ao fuso horário do servidor."
    },
    {
      title: "Dicionário de Estrutura",
      content: "Sempre que for modelar um banco de dados novo no MySQL, consulte esta tabela para escolher o tipo de dado correto e otimizar o uso da memória do servidor.",
      type: "tabela",
      tableData: {
        headers: ["Termo / Tipo", "Significado e Uso Prático"],
        rows: [
          ["SGBD", "Sistema Gerenciador de Banco de Dados. O software (MySQL) que processa as tabelas."],
          ["Registro (Row)", "Uma linha inteira da tabela contendo os dados reais de um único item."],
          ["Campo (Column)", "Uma coluna da tabela, determinando qual categoria de dado será guardada."],
          ["INT", "Número inteiro sem casa decimal. Máximo de 2.1 bilhões."],
          ["VARCHAR(n)", "Texto de tamanho variável até o limite 'n'. Padrão para quase todos os textos curtos."],
          ["TEXT", "Texto longo. Usado para descrições de produtos, posts e artigos."],
          ["DATETIME", "Guarda a data e hora no formato YYYY-MM-DD HH:MM:SS."]
        ]
      }
    }
  ]
};