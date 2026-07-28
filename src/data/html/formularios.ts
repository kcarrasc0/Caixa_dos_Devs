export const formularios = {
  id: "tabelas-formularios",
  titulo: "Formulários e Tabelas",
  cards: [
    {
      title: "Ensinando o site a escutar: <form>",
      content: "Até agora nosso site só fala. Para ele começar a escutar o usuário, usamos formulários. A tag mãe de tudo isso é a `<form>`.\n\nDentro dela, a estrela principal é a tag `<input>`. Ao trocar o atributo `type` (tipo), ela se transforma: pode virar uma caixa de texto, uma caixa de senha, um calendário ou até uma caixinha de marcar (checkbox).",
      type: "text"
    },
    {
      title: "Construindo um Formulário Completo",
      content: "Regra de ouro da acessibilidade: NUNCA deixe um `<input>` solto! Ele sempre precisa de uma tag `<label>` (rótulo) de mãos dadas com ele. Assim, o leitor de tela sabe do que se trata, e se você clicar no nome, a caixa já é ativada.\n\nPara textos muito grandes (como a mensagem de um e-mail), usamos a tag `<textarea>` no lugar do input.",
      type: "code",
      codeSnippet: `<form style="display: flex; flex-direction: column; gap: 15px; max-width: 300px;">\n  <!-- Campo de Nome (Tipo Texto) -->\n  <div>\n    <label for="nome"><b>Seu Nome:</b></label><br>\n    <input type="text" id="nome" placeholder="Digite aqui" style="padding: 5px; width: 100%;">\n  </div>\n\n  <!-- Campo de Senha (Oculta os caracteres) -->\n  <div>\n    <label for="senha"><b>Senha Secreta:</b></label><br>\n    <input type="password" id="senha" style="padding: 5px; width: 100%;">\n  </div>\n\n  <!-- Checkbox (Caixinha de marcar) -->\n  <div>\n    <input type="checkbox" id="termos">\n    <label for="termos">Aceito os termos de uso</label>\n  </div>\n\n  <!-- Botão de Envio do Formulário -->\n  <button type="submit" style="background: #8A2BE2; color: white; padding: 10px; border: none; cursor: pointer;">\n    Cadastrar Conta\n  </button>\n</form>`,
      terminalOutput: "[ O Mini Navegador vai renderizar um formulário funcional e interativo ]"
    },
    {
      title: "Dados Tabulares (<table>)",
      content: "Nos anos 2000, as tabelas eram usadas para criar o visual do site inteiro (uma loucura!). Hoje, a regra é clara: Tabelas servem EXCLUSIVAMENTE para exibir dados estruturados, como uma planilha do Excel ou um boletim escolar.\n\nComo montar essa estrutura:\n• `<table>`: A caixa mãe da tabela.\n• `<thead>` e `<tbody>`: Separam o cabeçalho do corpo dos dados.\n• `<tr>` (Table Row): Cria uma linha horizontal.\n• `<th>` (Table Header): Cria uma célula de título (já fica em negrito).\n• `<td>` (Table Data): Cria uma célula de dado comum.",
      type: "code",
      codeSnippet: `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">\n  <!-- Cabeçalho da Tabela -->\n  <thead style="background: #333; color: white;">\n    <tr>\n      <th style="padding: 10px; text-align: left;">Aluno</th>\n      <th style="padding: 10px;">Lógica</th>\n      <th style="padding: 10px;">HTML</th>\n    </tr>\n  </thead>\n  \n  <!-- Corpo de Dados -->\n  <tbody>\n    <tr style="border-bottom: 1px solid #ccc;">\n      <td style="padding: 10px;">Ana</td>\n      <td style="padding: 10px; text-align: center;">9.5</td>\n      <td style="padding: 10px; text-align: center;">10</td>\n    </tr>\n    <tr>\n      <td style="padding: 10px;">Carlos</td>\n      <td style="padding: 10px; text-align: center;">7.0</td>\n      <td style="padding: 10px; text-align: center;">8.5</td>\n    </tr>\n  </tbody>\n</table>`,
      terminalOutput: "[ O Mini Navegador renderizará uma tabela de notas estruturada ]"
    }
  ]
};