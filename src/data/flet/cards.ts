export const fletCards = {
  id: "cards",
  titulo: "Construindo Cards Responsivos",
  cards: [
    {
      title: "O Padrão Card (Cartão)",
      content: "No design moderno de interfaces, o Card é o componente rei. Ele serve para agrupar informações relacionadas numa caixa com bordas arredondadas e uma leve sombra (elevação), dando a sensação de que o elemento está a flutuar sobre o fundo. É perfeito para exibir produtos de uma loja, perfis de utilizadores ou notícias.",
      type: "conceito",
      codeSnippet: "# A anatomia de um Card no Flet:\n# ft.Card() fornece a sombra e a borda arredondada.\n# ft.Container() dentro do Card fornece o preenchimento interno (padding).\n# ft.Column() dentro do Container empilha as fotos, textos e botões."
    },
    {
      title: "Criando um Card de Perfil",
      content: "Para criar um cartão bonito, combinamos o ft.Card com um ft.ListTile (uma linha pré-formatada perfeita para títulos e ícones) e alguns botões de ação. Se abrir este código num telemóvel, o cartão ajusta-se naturalmente sem quebrar o layout.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft

def main(page: ft.Page):
    page.title = "Card de Utilizador"
    page.bgcolor = "#18181b"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    cartao = ft.Card(
        color="#27272a",
        elevation=10, # Intensidade da sombra
        content=ft.Container(
            width=350,
            padding=20,
            content=ft.Column([
                ft.ListTile(
                    leading=ft.Icon(name=ft.icons.ACCOUNT_CIRCLE, size=50, color="#8A2BE2"),
                    title=ft.Text("Kcarrasquinho", weight="bold", color="white"),
                    subtitle=ft.Text("Desenvolvedor Front-end", color="#a1a1aa")
                ),
                ft.Row([
                    ft.TextButton("Ver Perfil", icon=ft.icons.VISIBILITY, icon_color="#00BCD4"),
                    ft.TextButton("Contactar", icon=ft.icons.MAIL, icon_color="#00BCD4")
                ], alignment=ft.MainAxisAlignment.END)
            ])
        )
    )

    page.add(cartao)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)`,
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #18181b; border-radius: 8px; overflow: hidden; font-family: sans-serif; border: 1px solid #3f3f46;">
        <!-- Falso Cabeçalho de Navegador -->
        <div style="background-color: #27272a; padding: 10px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #3f3f46;">
          <div style="display: flex; gap: 6px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ef4444;"></div>
            <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #eab308;"></div>
            <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #22c55e;"></div>
          </div>
          <div style="flex: 1; background-color: #18181b; border-radius: 4px; padding: 4px 10px; color: #a1a1aa; font-size: 12px; text-align: center; font-family: monospace;">
            🔒 localhost:8550
          </div>
        </div>
        <!-- Conteúdo do Flet (Card Centralizado) -->
        <div style="flex: 1; display: flex; justify-content: center; align-items: center; padding: 20px;">
          <div style="width: 100%; max-width: 350px; padding: 20px; background-color: #27272a; border-radius: 10px; display: flex; flex-direction: column; gap: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
            
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #8A2BE2; display: flex; justify-content: center; align-items: center; color: white; font-size: 25px;">👤</div>
              <div style="display: flex; flex-direction: column;">
                <span style="color: white; font-weight: bold; font-size: 16px;">Kcarrasquinho</span>
                <span style="color: #a1a1aa; font-size: 14px;">Desenvolvedor Front-end</span>
              </div>
            </div>
            
            <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px;">
              <button style="background: transparent; border: none; color: #00BCD4; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 5px;">👁️ Ver Perfil</button>
              <button style="background: transparent; border: none; color: #00BCD4; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 5px;">✉️ Contactar</button>
            </div>
            
          </div>
        </div>
      </div>`
    },
    {
      title: "Grid de Cards (Grelha Responsiva)",
      content: "Como exibimos vários cartões ao mesmo tempo (como uma galeria do Pinterest)? Usamos o ft.Row com a propriedade wrap=True. Isto faz com que os cartões fiquem lado a lado no Desktop, mas se a janela encolher (ou rodar num telemóvel), eles saltam automaticamente para a linha de baixo para não espremer o conteúdo.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft

def main(page: ft.Page):
    page.title = "Galeria Responsiva"
    page.bgcolor = "#18181b"
    page.scroll = ft.ScrollMode.AUTO # Permite rolar a tela se houver muitos cards

    # Função para gerar cartões idênticos rapidamente
    def criar_card(titulo, cor_fundo, cor_texto):
        return ft.Card(
            color=cor_fundo,
            elevation=5,
            content=ft.Container(
                width=150, height=150, padding=15, 
                content=ft.Text(titulo, weight="bold", color=cor_texto)
            )
        )

    # Linha que quebra automaticamente (wrap=True)
    grelha = ft.Row(
        wrap=True,
        spacing=20, # Espaço horizontal entre os cards
        run_spacing=20, # Espaço vertical quando quebra a linha
        controls=[
            criar_card("Card 1", "#fef3c7", "#92400e"), # Amber
            criar_card("Card 2", "#dbeafe", "#1e40af"), # Blue
            criar_card("Card 3", "#dcfce3", "#166534"), # Green
            criar_card("Card 4", "#fce7f3", "#9d174d"), # Pink
            criar_card("Card 5", "#f3e8ff", "#6b21a8")  # Purple
        ]
    )

    page.add(grelha)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)`,
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #18181b; border-radius: 8px; overflow: hidden; font-family: sans-serif; border: 1px solid #3f3f46;">
        <!-- Falso Cabeçalho de Navegador -->
        <div style="background-color: #27272a; padding: 10px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #3f3f46;">
          <div style="display: flex; gap: 6px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ef4444;"></div>
            <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #eab308;"></div>
            <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #22c55e;"></div>
          </div>
          <div style="flex: 1; background-color: #18181b; border-radius: 4px; padding: 4px 10px; color: #a1a1aa; font-size: 12px; text-align: center; font-family: monospace;">
            🔒 localhost:8550
          </div>
        </div>
        <!-- Conteúdo do Flet (Grid com Wrap) -->
        <div style="flex: 1; padding: 20px; overflow-y: auto;">
          <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">
            
            <div style="width: 150px; height: 150px; background-color: #fef3c7; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); color: #92400e; font-size: 16px; font-weight: bold; box-sizing: border-box;">Card 1</div>
            
            <div style="width: 150px; height: 150px; background-color: #dbeafe; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); color: #1e40af; font-size: 16px; font-weight: bold; box-sizing: border-box;">Card 2</div>
            
            <div style="width: 150px; height: 150px; background-color: #dcfce3; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); color: #166534; font-size: 16px; font-weight: bold; box-sizing: border-box;">Card 3</div>
            
            <div style="width: 150px; height: 150px; background-color: #fce7f3; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); color: #9d174d; font-size: 16px; font-weight: bold; box-sizing: border-box;">Card 4</div>
            
            <div style="width: 150px; height: 150px; background-color: #f3e8ff; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); color: #6b21a8; font-size: 16px; font-weight: bold; box-sizing: border-box;">Card 5</div>
            
          </div>
        </div>
      </div>`
    }
  ]
};