export const fletRevisao = {
  id: "revisao",
  titulo: "Revisão e Conceitos de Flet",
  cards: [
    {
      title: "O que é o Flet?",
      content: "O Flet é um framework que permite construir interfaces web, desktop e mobile interativas usando apenas Python. Por baixo dos panos, ele usa o motor do Google Flutter. A grande vantagem é que não precisa de escrever HTML, CSS ou JavaScript: o Flet traduz os seus componentes Python (como ft.Text e ft.Container) para uma interface gráfica real e moderna.",
      type: "conceito",
      codeSnippet: "import flet as ft\n\ndef main(page: ft.Page):\n    page.title = 'Revisão Flet'\n    page.add(ft.Text('O Flet converte Python em interfaces visuais!'))\n\nft.app(target=main)"
    },
    {
      title: "O Ciclo de Vida (page.update)",
      content: "O conceito mais importante do Flet é a reatividade manual. Ao contrário de outras bibliotecas que redesenham a tela automaticamente, no Flet VOCÊ está no controlo. Se mudar a cor, o texto ou o tamanho de um botão após a tela ter carregado, deve sempre chamar o `page.update()` para que as alterações fiquem visíveis.",
      type: "conceito",
      codeSnippet: "def mudar_texto(e):\n    # 1. Alteramos a propriedade do componente\n    meu_texto.value = 'Clicou!'\n    \n    # 2. Avisamos o ecrã para se redesenhar\n    page.update()"
    },
    {
      title: "Dicionário de Fundamentos",
      content: "Termos vitais que você usará em todos os aplicativos Flet.",
      type: "tabela",
      tableData: {
        headers: ["Termo Flet", "Significado na Arquitetura"],
        rows: [
          ["ft.Page", "A tela principal (janela ou aba do navegador) onde tudo acontece."],
          ["page.add()", "Insere componentes diretamente na tela e faz o update automático na primeira vez."],
          ["page.update()", "Força a tela a renderizar novamente os dados atualizados das variáveis."],
          ["ft.app(target=main)", "O motor que inicia o servidor Flet e abre a aplicação gráfica."],
          ["view=ft.AppView.WEB_BROWSER", "Parâmetro do ft.app que força a aplicação a abrir no navegador."]
        ]
      }
    }
  ]
};