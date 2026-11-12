export const fletTelaLogin = {
  id: "tela-login",
  titulo: "Construindo uma Tela de Login",
  cards: [
    {
      title: "O Padrão de Login Moderno",
      content: "Uma tela de login precisa ser limpa, centralizada e responsiva. No Flet, construímos isso usando uma Column (Coluna) alinhada ao centro da página, contendo campos de texto (TextField) para o e-mail e senha, e um botão de ação (ElevatedButton).",
      type: "conceito",
      codeSnippet: "# A lógica base para qualquer formulário no Flet:\n# 1. Criar as variáveis (inputs e botões)\n# 2. Criar a função de clique (evento)\n# 3. Adicionar tudo à página usando page.add()"
    },
    {
      title: "Inputs e Senhas Ocultas",
      content: "Para capturar os dados do usuário, usamos o ft.TextField. O segredo para o campo de senha é ativar a propriedade password=True e can_reveal_password=True, que cria automaticamente aquele ícone de 'olho' para mostrar ou esconder o texto digitado.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft

def main(page: ft.Page):
    page.bgcolor = "#18181b"
    page.title = "Acesso ao Sistema"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    email = ft.TextField(label="E-mail", width=300, color="white", border_color="#8A2BE2")
    senha = ft.TextField(label="Senha", width=300, password=True, can_reveal_password=True, color="white", border_color="#8A2BE2")
    
    def fazer_login(e):
        print(f"Tentativa de login: {email.value}")
        
    btn_entrar = ft.ElevatedButton("Entrar", on_click=fazer_login, width=300, bgcolor="#8A2BE2", color="white")

    page.add(email, senha, btn_entrar)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)`,
      // Simulação de um navegador Web renderizando os inputs limpos
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
        <!-- Conteúdo do Flet -->
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 15px; padding: 20px;">
          <div style="width: 300px; position: relative;">
            <label style="position: absolute; top: -8px; left: 10px; background-color: #18181b; padding: 0 5px; font-size: 12px; color: #8A2BE2;">E-mail</label>
            <input type="text" style="width: 100%; padding: 15px; border: 1px solid #8A2BE2; border-radius: 5px; background: transparent; color: white; box-sizing: border-box; outline: none;">
          </div>
          <div style="width: 300px; position: relative; margin-top: 5px;">
            <label style="position: absolute; top: -8px; left: 10px; background-color: #18181b; padding: 0 5px; font-size: 12px; color: #8A2BE2;">Senha</label>
            <input type="password" style="width: 100%; padding: 15px; border: 1px solid #8A2BE2; border-radius: 5px; background: transparent; color: white; box-sizing: border-box; outline: none;">
            <span style="position: absolute; right: 15px; top: 15px; color: #8A2BE2; cursor: pointer;">👁️</span>
          </div>
          <button style="width: 300px; padding: 15px; background-color: #8A2BE2; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; margin-top: 5px;">Entrar</button>
        </div>
      </div>`
    },
    {
      title: "Responsividade: Desktop vs Mobile",
      content: "No Desktop, inputs soltos ficam estranhos. A melhor prática é embalar tudo num Card (ft.Container). Limitamos a largura a 400px. Se rodar no PC, vira um cartão elegante no centro da tela; se rodar no celular, adapta-se perfeitamente às bordas.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft

def main(page: ft.Page):
    page.bgcolor = "#18181b"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    caixa_login = ft.Container(
        width=400,
        padding=40,
        bgcolor="#27272a",
        border_radius=10,
        content=ft.Column(
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                ft.Icon(name=ft.icons.ACCOUNT_CIRCLE, size=80, color="#8A2BE2"),
                ft.Text("Bem-vindo de volta!", size=20, weight=ft.FontWeight.BOLD, color="white"),
                ft.TextField(label="E-mail", color="white", border_color="#8A2BE2"),
                ft.TextField(label="Senha", password=True, can_reveal_password=True, color="white", border_color="#8A2BE2"),
                ft.ElevatedButton("Entrar", width=320, bgcolor="#8A2BE2", color="white")
            ]
        )
    )

    page.add(caixa_login)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)`,
      // Simulação do Navegador com o Card Centralizado
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
        <div style="flex: 1; display: flex; justify-content: center; align-items: center; padding: 20px; overflow-y: auto;">
          <div style="width: 100%; max-width: 400px; padding: 40px; background-color: #27272a; border-radius: 10px; display: flex; flex-direction: column; align-items: center; gap: 20px; box-sizing: border-box; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
            <div style="width: 80px; height: 80px; border-radius: 50%; background-color: #8A2BE2; display: flex; justify-content: center; align-items: center; color: white; font-size: 40px;">👤</div>
            <h2 style="color: white; margin: 0; font-size: 20px; font-weight: bold;">Bem-vindo de volta!</h2>
            
            <div style="width: 100%; position: relative; margin-top: 10px;">
              <label style="position: absolute; top: -8px; left: 10px; background-color: #27272a; padding: 0 5px; font-size: 12px; color: #8A2BE2;">E-mail</label>
              <input type="text" style="width: 100%; padding: 15px; border: 1px solid #8A2BE2; border-radius: 5px; background: transparent; color: white; box-sizing: border-box; outline: none;">
            </div>
            
            <div style="width: 100%; position: relative;">
              <label style="position: absolute; top: -8px; left: 10px; background-color: #27272a; padding: 0 5px; font-size: 12px; color: #8A2BE2;">Senha</label>
              <input type="password" style="width: 100%; padding: 15px; border: 1px solid #8A2BE2; border-radius: 5px; background: transparent; color: white; box-sizing: border-box; outline: none;">
              <span style="position: absolute; right: 15px; top: 15px; color: #8A2BE2; cursor: pointer;"></span>
            </div>
            
            <button style="width: 100%; padding: 15px; background-color: #8A2BE2; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; margin-top: 10px;">Entrar</button>
          </div>
        </div>
      </div>`
    },
    {
      title: "Dicionário de Formulários",
      content: "Consulte os principais parâmetros visuais e funcionais para telas de login e registro no Flet.",
      type: "tabela",
      tableData: {
        headers: ["Comando / Parâmetro", "Efeito na Interface"],
        rows: [
          ["prefix_icon=ft.icons.EMAIL", "Adiciona um ícone dentro da caixa de texto, no lado esquerdo."],
          ["password=True", "Substitui os caracteres digitados por pontinhos (oculta a senha)."],
          ["can_reveal_password=True", "Adiciona o botão nativo de 'olho' para mostrar a senha."],
          ["page.vertical_alignment", "Alinha todo o conteúdo da página verticalmente (ex: CENTER)."],
          ["Container(width=400)", "Limita a caixa de login a 400px, impedindo que estique no Desktop."],
          ["view=ft.AppView.WEB_BROWSER", "Força a aplicação a rodar no navegador web em vez de janela nativa do OS."]
        ]
      }
    }
  ]
};