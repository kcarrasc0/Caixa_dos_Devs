export const multimidia = {
  id: "multimidia-links",
  titulo: "Navegação e Multimídia",
  cards: [
    {
      title: "A Mágica da Âncora (Links)",
      content: "A internet se chama 'Teia' (Web) justamente porque as páginas estão todas conectadas. Fazemos isso usando a tag `<a>` (Âncora).\n\nO superpoder dela está no atributo `href`, que é o endereço de destino. Além dele, usamos muito o atributo `target='_blank'`, que avisa o navegador para abrir o link em uma NOVA aba (sem tirar o usuário do nosso site).",
      type: "code",
      codeSnippet: `<h3>Navegando pela Teia</h3>\n\n<!-- Link simples para a mesma aba -->\n<p>\n  Acesse nossa página de <a href="/contato">Contato</a>.\n</p>\n\n<!-- Link para abrir em outra aba (Cuidado para não sair da aula!) -->\n<p>\n  Pesquise mais no \n  <a href="https://google.com" target="_blank">Google</a>.\n</p>`,
      terminalOutput: "[ O Mini Navegador exibirá os links clicáveis ]"
    },
    {
      title: "Pintando a Tela: Imagens",
      content: "A tag `<img>` é um Elemento Vazio (solitário, sem fechamento). Ela usa o atributo `src` (source/fonte) para buscar a foto e colar na página.\n\nAtenção: O atributo `alt` (texto alternativo) é obrigatório! Ele não só ajuda deficientes visuais (acessibilidade), mas é o texto que aparece se a imagem falhar ao carregar.",
      type: "code",
      codeSnippet: `<h3>Perfil do Instrutor</h3>\n\n<div style="display: flex; align-items: center; gap: 15px;">\n  <!-- Imagem com largura limitada e texto alternativo -->\n  <img \n    src="https://github.com/kcarrasc0.png" \n    alt="Foto de perfil do Kcarrasquinho"\n    width="80"\n    style="border-radius: 50%;"\n  />\n  \n  <div>\n    <h4>Mestre Carrasquinho</h4>\n    <p>Especialista em Bugs e Café.</p>\n  </div>\n</div>`,
      terminalOutput: "[ O Mini Navegador exibirá a foto de perfil e os textos ao lado ]"
    }
  ]
};