export const fletBarraNavegacao = {
  id: "barra-navegacao",
  titulo: "Barras de Navegação e Abas",
  cards: [
    {
      title: "O Padrão Mobile (NavigationBar)",
      content: "Em aplicações Mobile, o padrão de navegação fica na parte inferior do ecrã (Bottom Navigation). O Flet tem um componente nativo chamado NavigationBar que se fixa automaticamente no fundo da página e gere a transição dos ícones de menu.",
      type: "conceito",
      codeSnippet: "# A lógica de navegação exige capturar o evento de mudança de aba\n# e redesenhar o conteúdo central do ecrã usando page.update().\n\n# A propriedade selected_index controla qual botão começa aceso (0, 1, 2...)."
    },
    {
      title: "Construindo a NavigationBar",
      content: "Para criar a barra inferior, definimos a propriedade page.navigation_bar. A barra recebe uma lista de destinos (NavigationDestination). Quando o utilizador clica, o evento on_change dispara e diz-nos qual foi o índice (0, 1 ou 2) escolhido.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft

def main(page: ft.Page):
    page.title = "App Mobile Simulado"
    page.bgcolor = "#18181b"
    
    # Texto que vai mudar conforme a aba escolhida
    conteudo = ft.Text("Página Inicial", size=30, color="white")
    
    def mudar_aba(e):
        if e.control.selected_index == 0:
            conteudo.value = "Página Inicial"
        elif e.control.selected_index == 1:
            conteudo.value = "Estatísticas do Perfil"
        elif e.control.selected_index == 2:
            conteudo.value = "Configurações do Sistema"
        page.update()

    page.navigation_bar = ft.NavigationBar(
        bgcolor="#27272a",
        destinations=[
            ft.NavigationDestination(icon=ft.icons.HOME, label="Início"),
            ft.NavigationDestination(icon=ft.icons.PIE_CHART, label="Gráficos"),
            ft.NavigationDestination(icon=ft.icons.SETTINGS, label="Ajustes"),
        ],
        on_change=mudar_aba
    )

    # O Container é usado aqui apenas para centralizar o texto solto
    page.add(ft.Container(content=conteudo, alignment=ft.alignment.center, expand=True))

ft.app(target=main, view=ft.AppView.WEB_BROWSER)`,
      // Simulação Visual Mobile
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #18181b; border-radius: 8px; overflow: hidden; font-family: sans-serif; border: 1px solid #3f3f46; position: relative;">
        
        <!-- Falso Celular Status Bar -->
        <div style="background-color: #18181b; padding: 5px 15px; display: flex; justify-content: space-between; align-items: center; color: white; font-size: 10px;">
          <span>09:41</span>
          <div style="display: flex; gap: 5px;">
            <span>📶</span><span>🔋</span>
          </div>
        </div>
        
        <!-- Conteúdo do App Flet -->
        <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <h1 style="color: white; font-size: 28px; margin: 0; font-weight: normal;">Página Inicial</h1>
        </div>
        
        <!-- ft.NavigationBar Simulada -->
        <div style="height: 70px; background-color: #27272a; display: flex; justify-content: space-around; align-items: center; border-top: 1px solid #3f3f46;">
          <div style="display: flex; flex-direction: column; align-items: center; color: #00BCD4; cursor: pointer;">
            <span style="font-size: 24px; margin-bottom: 2px;">🏠</span>
            <span style="font-size: 11px; font-weight: bold;">Início</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; color: #a1a1aa; cursor: pointer;">
            <span style="font-size: 24px; margin-bottom: 2px;">📊</span>
            <span style="font-size: 11px;">Gráficos</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; color: #a1a1aa; cursor: pointer;">
            <span style="font-size: 24px; margin-bottom: 2px;">⚙️</span>
            <span style="font-size: 11px;">Ajustes</span>
          </div>
        </div>

      </div>`
    },
    {
      title: "O Padrão Desktop (NavigationRail)",
      content: "Em telas largas (Desktop e Tablets), a barra de navegação no fundo fica esticada. O padrão ideal para computadores é a NavigationRail, uma barra vertical fixada na lateral esquerda do sistema. Usamos um ft.Row para colocar o menu esquerdo e o conteúdo central lado a lado.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft

def main(page: ft.Page):
    page.bgcolor = "#18181b"
    conteudo = ft.Text("Dashboard de Vendas", size=30, color="white")
    
    # Menu lateral padrão para Desktop
    menu_lateral = ft.NavigationRail(
        bgcolor="#27272a",
        selected_index=0,
        label_type=ft.NavigationRailLabelType.ALL,
        min_width=100,
        destinations=[
            ft.NavigationRailDestination(icon=ft.icons.DASHBOARD, label="Dashboard"),
            ft.NavigationRailDestination(icon=ft.icons.GROUP, label="Clientes"),
            ft.NavigationRailDestination(icon=ft.icons.INVENTORY, label="Produtos"),
        ]
    )

    # Layout usando Row: Menu Lateral + Divisória + Conteúdo Central
    layout_desktop = ft.Row(
        controls=[
            menu_lateral,
            ft.VerticalDivider(width=1, color="#3f3f46"),
            ft.Container(content=conteudo, alignment=ft.alignment.center, expand=True)
        ],
        expand=True
    )

    page.add(layout_desktop)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)`,
      // Simulação Visual Desktop (Navegador Clássico)
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

        <!-- Conteúdo do Flet (ft.Row com Menu e Conteúdo) -->
        <div style="flex: 1; display: flex; flex-direction: row; height: 100%;">
          
          <!-- ft.NavigationRail -->
          <div style="width: 100px; background-color: #27272a; display: flex; flex-direction: column; align-items: center; padding-top: 30px; gap: 30px; border-right: 1px solid #3f3f46;">
            <div style="display: flex; flex-direction: column; align-items: center; color: #00BCD4; cursor: pointer;">
              <span style="font-size: 28px; margin-bottom: 5px;">📊</span>
              <span style="font-size: 11px; font-weight: bold;">Dashboard</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; color: #a1a1aa; cursor: pointer;">
              <span style="font-size: 28px; margin-bottom: 5px;">👥</span>
              <span style="font-size: 11px;">Clientes</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; color: #a1a1aa; cursor: pointer;">
              <span style="font-size: 28px; margin-bottom: 5px;">📦</span>
              <span style="font-size: 11px;">Produtos</span>
            </div>
          </div>
          
          <!-- Conteúdo Principal -->
          <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: white; font-size: 30px; margin: 0; font-weight: normal;">Dashboard de Vendas</h1>
          </div>
          
        </div>
      </div>`
    },
    {
      title: "Dicionário de Navegação",
      content: "Componentes nativos do Flet para transição e roteamento de páginas.",
      type: "tabela",
      tableData: {
        headers: ["Componente Flet", "Aplicação Principal"],
        rows: [
          ["ft.NavigationBar()", "Barra inferior clássica de aplicações Mobile (Bottom Menu)."],
          ["ft.NavigationDestination()", "O botão clicável dentro da NavigationBar (Ícone + Texto)."],
          ["ft.NavigationRail()", "Barra lateral vertical (Sidebar), padrão ouro para sistemas Desktop."],
          ["ft.Tabs()", "Abas horizontais no topo do ecrã, excelentes para dividir formulários."],
          ["e.control.selected_index", "Propriedade que informa qual o número da aba que foi clicada (0, 1, 2...)."],
          ["ft.VerticalDivider()", "Uma linha visual sutil usada para separar o menu lateral do conteúdo direito."]
        ]
      }
    }
  ]
};