export const tkinterAbasMenus = {
  id: "abas-menus",
  titulo: "Abas e Menus de Topo",
  cards: [
    {
      title: "Módulos Avançados (ttk)",
      content: "Para interfaces mais bonitas, o Tkinter possui um submódulo chamado `ttk` (Themed Tkinter). Ele fornece componentes com o visual moderno nativo do seu sistema operativo, incluindo barras de progresso, tabelas e o famoso sistema de abas (Notebook).",
      type: "conceito",
      codeSnippet: "import tkinter as tk\nfrom tkinter import ttk  # Importação vital para abas e tabelas"
    },
    {
      title: "Construindo Abas (Notebook)",
      content: "Para criar navegação, instanciamos um `ttk.Notebook()`. Depois, criamos Caixas (Frames) que representarão cada aba. Por fim, adicionamos essas caixas ao Notebook usando o comando `.add()`.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import tkinter as tk
from tkinter import ttk

janela = tk.Tk()
janela.title("Painel de Controlo")
janela.geometry("400x300")

# Cria o gerenciador de abas
abas = ttk.Notebook(janela)
abas.pack(fill="both", expand=True, padx=10, pady=10)

# Aba 1 (Frame)
aba_inicio = ttk.Frame(abas)
abas.add(aba_inicio, text="Início")
tk.Label(aba_inicio, text="Bem-vindo ao Sistema!").pack(pady=50)

# Aba 2 (Frame)
aba_config = ttk.Frame(abas)
abas.add(aba_config, text="Configurações")
tk.Label(aba_config, text="Ajuste os parâmetros aqui.").pack(pady=50)

janela.mainloop()`,
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #f0f0f0; font-family: 'Segoe UI', Tahoma, sans-serif;">
        <div style="background-color: white; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #d1d5db;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 14px;">🪟</span><span style="font-size: 12px; color: black;">Painel de Controlo</span>
          </div>
          <div style="display: flex; gap: 15px; color: #6b7280; font-size: 12px;">
            <span>─</span><span>□</span><span style="color: #ef4444;">✕</span>
          </div>
        </div>
        <div style="flex: 1; padding: 10px; display: flex; flex-direction: column;">
          
          <!-- Cabeçalho das Abas -->
          <div style="display: flex; border-bottom: 1px solid #9ca3af; margin-bottom: -1px; z-index: 10;">
            <div style="padding: 5px 15px; background-color: white; border: 1px solid #9ca3af; border-bottom: 1px solid white; font-size: 12px; color: black; border-radius: 3px 3px 0 0;">Início</div>
            <div style="padding: 5px 15px; background-color: #e5e7eb; border: 1px solid #9ca3af; border-bottom: none; font-size: 12px; color: #4b5563; border-radius: 3px 3px 0 0; margin-left: 2px;">Configurações</div>
          </div>
          
          <!-- Corpo da Aba (Frame) -->
          <div style="flex: 1; background-color: white; border: 1px solid #9ca3af; display: flex; justify-content: center; align-items: center;">
            <span style="color: black; font-size: 14px;">Bem-vindo ao Sistema!</span>
          </div>

        </div>
      </div>`
    },
    {
      title: "Menus de Topo (Menu Bar)",
      content: "Praticamente todo o software Desktop possui aquele menu superior (Arquivo, Editar, Ajuda). No Tkinter, configuramos a barra na janela usando `janela.config(menu=barra)` e penduramos os submenus nela através de cascata (add_cascade).",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import tkinter as tk

janela = tk.Tk()
janela.geometry("400x200")

# 1. Cria a Barra Principal
barra_menu = tk.Menu(janela)
janela.config(menu=barra_menu)

# 2. Cria o botão "Arquivo"
menu_arquivo = tk.Menu(barra_menu, tearoff=0)
menu_arquivo.add_command(label="Novo Projeto", command=lambda: print("Novo"))
menu_arquivo.add_separator()
menu_arquivo.add_command(label="Sair", command=janela.quit)

# 3. Pendura "Arquivo" na Barra Principal
barra_menu.add_cascade(label="Arquivo", menu=menu_arquivo)
barra_menu.add_cascade(label="Ajuda")

janela.mainloop()`,
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #f0f0f0; font-family: 'Segoe UI', Tahoma, sans-serif;">
        <div style="background-color: white; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 14px;">🪟</span><span style="font-size: 12px; color: black;">tk</span>
          </div>
          <div style="display: flex; gap: 15px; color: #6b7280; font-size: 12px;">
            <span>─</span><span>□</span><span style="color: #ef4444;">✕</span>
          </div>
        </div>
        
        <!-- Barra de Menu Windows Clássica -->
        <div style="background-color: #f9fafb; border-bottom: 1px solid #d1d5db; padding: 2px 10px; display: flex; gap: 15px;">
          
          <div style="position: relative;">
            <span style="font-size: 12px; color: black; background-color: #e5e7eb; padding: 2px 5px; cursor: default;">Arquivo</span>
            
            <!-- Dropdown Simulado -->
            <div style="position: absolute; top: 100%; left: 0; background-color: #f9fafb; border: 1px solid #9ca3af; box-shadow: 2px 2px 5px rgba(0,0,0,0.2); display: flex; flex-direction: column; width: 120px; z-index: 20;">
              <span style="font-size: 12px; padding: 5px 10px; color: black;">Novo Projeto</span>
              <div style="height: 1px; background-color: #d1d5db; margin: 2px 5px;"></div>
              <span style="font-size: 12px; padding: 5px 10px; color: black;">Sair</span>
            </div>
          </div>
          
          <span style="font-size: 12px; color: black; padding: 2px 5px; cursor: default;">Ajuda</span>
        </div>
        
        <div style="flex: 1;"></div>
      </div>`
    }
  ]
};