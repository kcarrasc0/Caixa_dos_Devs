export const fletInterfaces = {
  id: "flet-interfaces",
  titulo: "Interfaces Modernas (Flet)",
  cards: [
    {
      title: "O que é o Flet? (A Evolução)",
      content: "O Tkinter é ótimo para aprender o básico, mas seu visual é antiquado. É aqui que entra o Flet. Ele é um framework moderno baseado em Flutter. Com o Flet, você cria aplicativos web, desktop e mobile usando Python. O grande diferencial para os estudos é que o Flet renderiza a tela direto no navegador. Isso significa que ele funciona perfeitamente se você estiver programando na nuvem, como no GitHub Codespaces ou Google Colab.",
      type: "conceito",
      codeSnippet: "# O Flet não vem embutido no Python, precisa instalar.\n# No terminal do VS Code ou Codespaces, digite:\npip install flet\n\n# E no topo do seu arquivo:\nimport flet as ft"
    },
    {
      title: "A Estrutura de um App Flet",
      content: "A lógica principal do Flet é diferente do Tkinter. Em vez de criar uma janela solta, todo o seu aplicativo deve estar contido dentro de uma função principal. Essa função recebe o objeto page como parâmetro, que é a sua tela em branco pronta para ser estruturada.",
      type: "conceito",
      codeSnippet: `import flet as ft\n\n# A função principal (o coração do app)\ndef main(page: ft.Page):\n    page.title = "Meu App Moderno"\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n    \n    # O conteúdo vai aqui dentro\n    pass\n\n# Executando o aplicativo\nft.app(target=main)`
    },
    {
      title: "Adicionando Componentes",
      content: "No Tkinter você criava o texto e usava o pack. No Flet, a sua page possui o método add. Tudo o que você colocar dentro desse método vai aparecer na tela. Os componentes no Flet recebem parâmetros visuais poderosos para cores, tamanhos e alinhamentos de forma nativa.",
      type: "pratica",
      codeSnippet: `import flet as ft\n\ndef main(page: ft.Page):\n    # Criando os componentes visuais\n    titulo = ft.Text(value="Bem-vindo ao Flet!", size=30, color=ft.colors.PURPLE)\n    subtitulo = ft.Text("Renderização limpa e rápida")\n\n    # Adicionando-os diretamente à página\n    page.add(titulo, subtitulo)\n\nft.app(target=main)`
    },
    {
      title: "Interatividade e Atualização de Tela",
      content: "A interatividade é feita conectando funções aos botões. O detalhe crucial do Flet é que a tela não se atualiza sozinha. Sempre que você mudar o valor de algum texto ou componente via código, você precisa avisar a interface chamando o método page.update() para que ela redesenhe a tela e mostre a mudança.",
      type: "pratica",
      codeSnippet: `import flet as ft\n\ndef main(page: ft.Page):\n    def saudar_click(e):\n        resultado.value = f"Olá, {caixa_nome.value}!"\n        # Avisa a tela para se redesenhar com o novo valor\n        page.update() \n\n    caixa_nome = ft.TextField(label="Qual o seu nome?", width=300)\n    btn_enviar = ft.ElevatedButton(text="Enviar", on_click=saudar_click)\n    resultado = ft.Text(size=20, color=ft.colors.GREEN)\n\n    page.add(caixa_nome, btn_enviar, resultado)\n\nft.app(target=main)`
    },
    {
      title: "Dicionário Flet vs Figma",
      content: "Uma das melhores formas de entender o Flet é compará-lo com ferramentas de design visual como o Figma. Abaixo, mapeamos os comandos do Flet para os seus conceitos equivalentes no mundo do Design UI/UX.",
      type: "tabela",
      tableData: {
        headers: ["Código Python / Flet", "Significado / Equivalência no Figma"],
        rows: [
          ["def nome_da_funcao():", "Componente Figma. Cria a lógica uma vez e reutiliza em várias partes."],
          ["ft.Row([ ... ])", "Auto Layout Horizontal. Alinha elementos lado a lado (esquerda para direita)."],
          ["ft.Column([ ... ])", "Auto Layout Vertical. Empilha os elementos um embaixo do outro."],
          ["ft.Container(...)", "Frame / Retângulo. Cria uma caixa base para cores, bordas e margens."],
          ["alignment=ft.MainAxisAlignment.CENTER", "Justify Content. Centraliza no eixo principal (ex: no meio exato da linha)."],
          ["horizontal_alignment=...", "Align Items. Alinha no eixo oposto (ex: centraliza textos dentro da Coluna)."],
          ["padding=10", "Margem Interna (Padding). Espaço entre a borda da caixa e o conteúdo."],
          ["bgcolor=ft.colors.BLUE", "Fill / Cor de Fundo. Cores nativas exigem o C maiúsculo em versões atuais."],
          ["border_radius=10", "Corner Radius. Arredonda as quinas da caixa, botão ou imagem."],
          ["expand=True", "Fill Container. Manda o elemento esticar para ocupar todo o espaço vazio."],
          ["on_click=...", "Prototipagem (On Click). Define a ação ao tocar no componente."],
          ["page.update()", "Refresh de Tela. Comando obrigatório para mostrar as atualizações ao usuário."]
        ]
      }
    }
  ]
};