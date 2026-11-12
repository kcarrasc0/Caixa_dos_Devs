export const fletMapaCalendario = {
  id: "mapa-calendario",
  titulo: "Mapas, Calendários e Componentes",
  cards: [
    {
      title: "Construindo um Calendário (DatePicker)",
      content: "Selecionar datas digitando texto é propenso a erros. O Flet tem um componente nativo chamado DatePicker, que abre um calendário interativo sobrepondo o ecrã (overlay). Para o usar, precisamos de o adicionar à camada invisível da página e chamar a função pick_date() quando o utilizador clica num botão.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft
import datetime

def main(page: ft.Page):
    page.title = "Agendamento"
    page.bgcolor = "#18181b"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    
    texto_data = ft.Text("Nenhuma data selecionada.", size=20, color="white")

    # O que acontece quando o utilizador escolhe num dia:
    def data_escolhida(e):
        if calendario.value:
            # Formata a data para Dia/Mês/Ano
            data_formatada = calendario.value.strftime("%d/%m/%Y")
            texto_data.value = f"Data escolhida: {data_formatada}"
            page.update()

    # Criação da lógica do calendário
    calendario = ft.DatePicker(
        on_change=data_escolhida,
        first_date=datetime.datetime(2026, 1, 1),
        last_date=datetime.datetime(2027, 12, 31)
    )
    
    # Adicionamos o calendário à camada de pop-up da página
    page.overlay.append(calendario)

    # Botão que força o calendário aparecer no ecrã
    botao = ft.ElevatedButton(
        "Abrir Calendário",
        icon=ft.icons.CALENDAR_MONTH,
        bgcolor="#8A2BE2",
        color="white",
        on_click=lambda _: calendario.pick_date()
    )

    page.add(botao, texto_data)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)`,
      // Simulação visual de um pop-up de DatePicker sendo aberto no navegador
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #18181b; border-radius: 8px; overflow: hidden; font-family: sans-serif; border: 1px solid #3f3f46; position: relative;">
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

        <!-- Conteúdo do Flet centralizado -->
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;">
          <button style="padding: 15px 25px; background-color: #8A2BE2; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 10px; font-size: 16px;">
            <span>📅</span> Abrir Calendário
          </button>
          <span style="color: white; font-size: 20px;">Nenhuma data selecionada.</span>
        </div>

        <!-- Simulação do Overlay (Camada escura + Pop-up do Calendário) -->
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; z-index: 10;">
          <div style="background-color: #27272a; border-radius: 12px; padding: 20px; width: 280px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <div style="display: flex; justify-content: space-between; align-items: center; color: white; border-bottom: 1px solid #3f3f46; padding-bottom: 15px; margin-bottom: 15px;">
              <span style="cursor: pointer; font-size: 18px;">&lt;</span>
              <span style="font-weight: bold; font-size: 16px;">Novembro 2026</span>
              <span style="cursor: pointer; font-size: 18px;">&gt;</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; text-align: center;">
              <span style="color: #a1a1aa; font-size: 12px;">D</span><span style="color: #a1a1aa; font-size: 12px;">S</span><span style="color: #a1a1aa; font-size: 12px;">T</span><span style="color: #a1a1aa; font-size: 12px;">Q</span><span style="color: #a1a1aa; font-size: 12px;">Q</span><span style="color: #a1a1aa; font-size: 12px;">S</span><span style="color: #a1a1aa; font-size: 12px;">S</span>
              <span style="color: white; padding: 8px 0; border-radius: 50%;">1</span><span style="color: white; padding: 8px 0; border-radius: 50%;">2</span><span style="color: white; padding: 8px 0; border-radius: 50%;">3</span><span style="color: white; padding: 8px 0; border-radius: 50%;">4</span><span style="color: white; padding: 8px 0; border-radius: 50%;">5</span><span style="color: white; padding: 8px 0; border-radius: 50%;">6</span><span style="color: white; padding: 8px 0; border-radius: 50%;">7</span>
              <span style="color: white; background-color: #8A2BE2; padding: 8px 0; border-radius: 50%; font-weight: bold;">8</span><span style="color: white; padding: 8px 0; border-radius: 50%;">9</span><span style="color: white; padding: 8px 0; border-radius: 50%;">10</span>
              <span style="color: transparent;">-</span><span style="color: transparent;">-</span><span style="color: transparent;">-</span><span style="color: transparent;">-</span>
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 15px; margin-top: 20px;">
              <span style="color: #8A2BE2; font-weight: bold; cursor: pointer;">CANCELAR</span>
              <span style="color: #8A2BE2; font-weight: bold; cursor: pointer;">OK</span>
            </div>
          </div>
        </div>
      </div>`
    },
    {
      title: "Construindo um Card de Mapa",
      content: "O Flet não possui um widget nativo de Google Maps interativo por padrão. A solução profissional para exibir localizações (como a sede de uma empresa) em aplicações web é usar a API de Mapas Estáticos (exibindo uma ft.Image formatada) embalada num Card, mantendo a aplicação leve e rápida.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import flet as ft

def main(page: ft.Page):
    page.title = "Localização da Empresa"
    page.bgcolor = "#18181b"
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    # Em vez de um mapa pesado, usamos uma imagem da web (Static Map)
    mapa_imagem = ft.Image(
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Recife_-_Pernambuco_-_Brasil.jpg/800px-Recife_-_Pernambuco_-_Brasil.jpg",
        width=500,
        height=250,
        fit=ft.ImageFit.COVER,
        border_radius=ft.border_radius.only(top_left=10, top_right=10)
    )

    card_mapa = ft.Card(
        color="#27272a",
        elevation=8,
        content=ft.Container(
            width=500,
            content=ft.Column(
                spacing=0, # Remove o espaço entre a foto e o texto
                controls=[
                    mapa_imagem,
                    ft.Container(
                        padding=15,
                        content=ft.ListTile(
                            leading=ft.Icon(ft.icons.LOCATION_ON, color="#ef4444"),
                            title=ft.Text("Recife, Pernambuco", weight="bold", color="white"),
                            subtitle=ft.Text("Brasil - Base de Operações", color="#a1a1aa")
                        )
                    )
                ]
            )
        )
    )

    page.add(card_mapa)

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

        <!-- Conteúdo do Flet Centralizado (Card com Imagem) -->
        <div style="flex: 1; display: flex; justify-content: center; align-items: center; padding: 20px;">
          <div style="width: 100%; max-width: 500px; background-color: #27272a; border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); overflow: hidden; display: flex; flex-direction: column;">
            
            <!-- Imagem do Mapa -->
            <div style="width: 100%; height: 250px; background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Recife_-_Pernambuco_-_Brasil.jpg/800px-Recife_-_Pernambuco_-_Brasil.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- ListTile inferior -->
            <div style="padding: 15px 20px; display: flex; align-items: center; gap: 15px;">
              <div style="color: #ef4444; font-size: 28px;">📍</div>
              <div style="display: flex; flex-direction: column;">
                <span style="color: white; font-weight: bold; font-size: 18px;">Recife, Pernambuco</span>
                <span style="color: #a1a1aa; font-size: 14px;">Brasil - Base de Operações</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>`
    },
    {
      title: "Dicionário de Componentes Avançados",
      content: "Propriedades cruciais ao trabalhar com datas, imagens e caixas complexas no Flet.",
      type: "tabela",
      tableData: {
        headers: ["Componente / Propriedade", "Efeito Visual"],
        rows: [
          ["ft.DatePicker()", "Inicia a estrutura lógica do calendário (não o desenha no ecrã de imediato)."],
          ["page.overlay.append()", "Guarda componentes na camada invisível da tela para os chamar como Pop-ups depois."],
          [".pick_date()", "Ação que força o calendário do DatePicker a saltar para a frente do ecrã."],
          ["ft.ImageFit.COVER", "Faz com que a imagem preencha toda a área disponível sem distorcer."],
          ["spacing=0", "Removido do ft.Column, elimina qualquer vão vazio entre a imagem e o texto no Card."],
          ["elevation=8", "Aumenta a sombra projetada pelo Card. Zero significa colado na parede, 8 é flutuante."]
        ]
      }
    }
  ]
};