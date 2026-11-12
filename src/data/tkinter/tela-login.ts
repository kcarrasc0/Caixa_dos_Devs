export const tkinterTelaLogin = {
  id: "tela-login",
  titulo: "Construindo uma Tela de Login",
  cards: [
    {
      title: "O Padrão Clássico",
      content: "Uma tela de login nativa do Windows ou macOS costuma ter caixas de texto limpas. No Tkinter, usamos `tk.Entry`. Para esconder a senha com asteriscos, usamos o parâmetro `show='*'`.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import tkinter as tk

def fazer_login():
    # .get() extrai o texto que o utilizador digitou
    usuario = input_user.get()
    print(f"Login efetuado: {usuario}")

janela = tk.Tk()
janela.title("Acesso Seguro")
janela.geometry("300x250")
janela.configure(bg="#f0f0f0") # Cor clássica de Desktop

tk.Label(janela, text="Usuário:", bg="#f0f0f0").pack(pady=(20, 0))
input_user = tk.Entry(janela, width=25)
input_user.pack(pady=5)

tk.Label(janela, text="Senha:", bg="#f0f0f0").pack()
input_senha = tk.Entry(janela, width=25, show="*") # Oculta a senha
input_senha.pack(pady=5)

btn = tk.Button(janela, text="Entrar", command=fazer_login)
btn.pack(pady=20)

janela.mainloop()`,
      // Simulação Visual de uma Janela do Windows Clássica
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #ffffff; font-family: 'Segoe UI', Tahoma, sans-serif;">
        <!-- Barra de Título Estilo Windows -->
        <div style="background-color: #ffffff; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #d1d5db; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 14px;">🪟</span>
            <span style="font-size: 12px; color: #111827;">Acesso Seguro</span>
          </div>
          <div style="display: flex; gap: 15px; color: #6b7280; font-size: 12px;">
            <span style="cursor: default;">─</span>
            <span style="cursor: default;">□</span>
            <span style="cursor: default; color: #ef4444;">✕</span>
          </div>
        </div>
        
        <!-- Conteúdo do Tkinter (.pack()) -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 30px; background-color: #f0f0f0; border: 1px solid #e5e7eb;">
          
          <span style="color: #374151; font-size: 13px; margin-bottom: 2px;">Usuário:</span>
          <div style="background-color: white; border: 1px solid #9ca3af; padding: 3px; width: 180px; margin-bottom: 10px; height: 22px;"></div>
          
          <span style="color: #374151; font-size: 13px; margin-bottom: 2px;">Senha:</span>
          <div style="background-color: white; border: 1px solid #9ca3af; padding: 3px; width: 180px; margin-bottom: 20px; height: 22px; display: flex; align-items: center; overflow: hidden;">
            <span style="line-height: 10px; font-size: 20px; letter-spacing: 2px; color: black; margin-top: 8px;">********</span>
          </div>
          
          <button style="background-color: #e5e7eb; border: 1px solid #9ca3af; padding: 4px 20px; font-size: 13px; color: black; cursor: pointer; border-radius: 2px;">Entrar</button>
          
        </div>
      </div>`
    },
    {
      title: "Interatividade (Atualizar Textos)",
      content: "Para alterar um texto no Tkinter após o programa estar a rodar, não podemos reatribuir a variável. Devemos usar o método `.config()` daquele widget específico para sobrepor o seu parâmetro `text`.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import tkinter as tk

def verificar_senha():
    if input_senha.get() == "1234":
        # .config() permite alterar a interface dinamicamente
        msg_erro.config(text="Acesso Permitido!", fg="green")
    else:
        msg_erro.config(text="Senha Incorreta!", fg="red")

janela = tk.Tk()
janela.geometry("300x200")

input_senha = tk.Entry(janela, show="*")
input_senha.pack(pady=20)

tk.Button(janela, text="Validar", command=verificar_senha).pack()

# Label vazia, esperando para ser atualizada
msg_erro = tk.Label(janela, text="")
msg_erro.pack(pady=15)

janela.mainloop()`,
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #f0f0f0; font-family: 'Segoe UI', Tahoma, sans-serif;">
        <div style="background-color: white; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #d1d5db;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 14px;">tk</span>
          </div>
          <div style="display: flex; gap: 15px; color: #6b7280; font-size: 12px;">
            <span>─</span><span>□</span><span style="color: #ef4444;">✕</span>
          </div>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 30px;">
          <div style="background-color: white; border: 1px solid #9ca3af; width: 150px; margin-bottom: 10px; height: 22px; display: flex; align-items: center;">
            <span style="line-height: 10px; font-size: 20px; letter-spacing: 2px; color: black; margin-top: 8px; margin-left: 5px;">****</span>
          </div>
          <button style="background-color: #e5e7eb; border: 1px solid #9ca3af; padding: 4px 20px; font-size: 13px; color: black; margin-bottom: 20px;">Validar</button>
          
          <span style="color: #ef4444; font-size: 13px; font-weight: bold;">Senha Incorreta!</span>
        </div>
      </div>`
    }
  ]
};