export const tkinterGerenciadores = {
  id: "gerenciadores",
  titulo: "Gerenciadores de Layout (Grid e Place)",
  cards: [
    {
      title: "A Batalha dos Layouts (Analogia da Mudança)",
      content: "Desenhar interfaces no Tkinter é como fazer uma mudança para uma casa vazia. O Tkinter oferece três 'empresas de mudanças' diferentes (os Gerenciadores de Geometria):\n\n1. O .pack(): É o arrumador preguiçoso. Ele simplesmente empilha as caixas uma em cima da outra no centro da sala.\n2. O .grid(): É o arquiteto metódico. Ele desenha uma grelha no chão (como um tabuleiro de xadrez) e coloca os móveis perfeitamente alinhados.\n3. O .place(): É o atirador de elite. Ele recebe coordenadas de GPS exatas e prega o quadro na parede exatamente naquele milímetro.",
      type: "conceito",
      codeSnippet: "# Nunca misture .pack() e .grid() na mesma janela!\n# Se o fizer, o Tkinter entra num loop infinito tentando calcular quem tem razão e a aplicação trava.\n\nbtn1.pack()\nbtn2.grid(row=0, column=0) # ❌ ERRO FATAL!"
    },
    {
      title: "Dominando o Grid (O Excel do Python)",
      content: "O método `.grid()` transforma a sua janela numa folha de cálculo invisível. Funciona como o jogo da Batalha Naval: você indica em qual linha (row) e coluna (column) o botão vai morar. Se um elemento for muito grande, como o ecrã de uma calculadora, usamos o `columnspan` para dizer: 'Ei, estica-te e ocupa 4 colunas de espaço!'.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import tkinter as tk

janela = tk.Tk()
janela.title("Calculadora Grid")
janela.configure(bg="#202020")

# Visor ocupando 4 colunas (0, 1, 2 e 3)
visor = tk.Entry(janela, font=("Arial", 20), justify="right")
visor.grid(row=0, column=0, columnspan=4, sticky="we", padx=10, pady=10)

# Linha 1 de Botões
tk.Button(janela, text="7").grid(row=1, column=0, sticky="we")
tk.Button(janela, text="8").grid(row=1, column=1, sticky="we")
tk.Button(janela, text="9").grid(row=1, column=2, sticky="we")
tk.Button(janela, text="/").grid(row=1, column=3, sticky="we")

# Linha 2 de Botões
tk.Button(janela, text="4").grid(row=2, column=0, sticky="we")
tk.Button(janela, text="5").grid(row=2, column=1, sticky="we")
tk.Button(janela, text="6").grid(row=2, column=2, sticky="we")
tk.Button(janela, text="*").grid(row=2, column=3, sticky="we")

janela.mainloop()`,
      // Simulação Visual da Janela de Calculadora
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #202020; font-family: 'Segoe UI', Tahoma, sans-serif;">
        <div style="background-color: white; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #d1d5db;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 14px;">🪟</span><span style="font-size: 12px; color: black;">Calculadora Grid</span>
          </div>
          <div style="display: flex; gap: 15px; color: #6b7280; font-size: 12px;">
            <span>─</span><span>□</span><span style="color: #ef4444;">✕</span>
          </div>
        </div>
        
        <div style="flex: 1; padding: 15px; display: flex; flex-direction: column; align-items: center;">
          <div style="display: grid; grid-template-columns: repeat(4, 50px); gap: 5px;">
            <!-- Row 0: Visor -->
            <div style="grid-column: span 4; background-color: white; height: 40px; border: 1px solid #9ca3af; display: flex; justify-content: flex-end; align-items: center; padding: 0 10px; font-size: 20px; color: black; margin-bottom: 5px;">0</div>
            
            <!-- Row 1 -->
            <button style="height: 40px; background-color: #e5e7eb; border: 1px solid #9ca3af; cursor: pointer; color: black;">7</button>
            <button style="height: 40px; background-color: #e5e7eb; border: 1px solid #9ca3af; cursor: pointer; color: black;">8</button>
            <button style="height: 40px; background-color: #e5e7eb; border: 1px solid #9ca3af; cursor: pointer; color: black;">9</button>
            <button style="height: 40px; background-color: #d1d5db; border: 1px solid #9ca3af; cursor: pointer; color: black;">/</button>
            
            <!-- Row 2 -->
            <button style="height: 40px; background-color: #e5e7eb; border: 1px solid #9ca3af; cursor: pointer; color: black;">4</button>
            <button style="height: 40px; background-color: #e5e7eb; border: 1px solid #9ca3af; cursor: pointer; color: black;">5</button>
            <button style="height: 40px; background-color: #e5e7eb; border: 1px solid #9ca3af; cursor: pointer; color: black;">6</button>
            <button style="height: 40px; background-color: #d1d5db; border: 1px solid #9ca3af; cursor: pointer; color: black;">*</button>
          </div>
        </div>
      </div>`
    },
    {
      title: "Os Pontos Cardeais (Sticky)",
      content: "Uma das coisas mais frustrantes no Tkinter é colocar um botão largo numa grelha e ele encolher para o centro. Para resolver isso, usamos o parâmetro `sticky`. Ele usa os pontos cardeais em inglês: N (Norte), S (Sul), E (Este/Direita) e W (Oeste/Esquerda). Para esticar um botão de ponta a ponta na sua célula, mandamos ele colar-se a Oeste e a Este ao mesmo tempo: `sticky='we'`.",
      type: "conceito",
      codeSnippet: "# Dicas de Bússola no Tkinter:\n\n# btn.grid(sticky='w')  -> Cola o botão na parede esquerda da célula.\n# btn.grid(sticky='e')  -> Cola o botão na parede direita da célula.\n# btn.grid(sticky='we') -> Estica o botão horizontalmente.\n# btn.grid(sticky='ns') -> Estica o botão verticalmente.\n# btn.grid(sticky='nsew') -> Preenche 100% da célula em todas as direções."
    },
    {
      title: "O Perigoso Place (Posicionamento Absoluto)",
      content: "O `.place()` funciona como colar um Post-it no monitor. Você diz exatamente as coordenadas X (horizontal) e Y (vertical) em píxeis. É ótimo para fazer mapas ou dashboards super customizados. O perigo? Se o utilizador esticar ou maximizar a janela do programa, o seu botão vai continuar fixo na mesma coordenada original, o que pode estragar o design por completo.",
      type: "pratica",
      isHtmlPreview: true,
      codeSnippet: `import tkinter as tk

janela = tk.Tk()
janela.geometry("400x300")
janela.configure(bg="#0f172a") # Fundo noturno

# Desenhamos elementos usando coordenadas (X cresce para a direita, Y cresce para baixo)
tk.Label(janela, text="📍 Ponto A (x=50, y=50)", bg="#3b82f6", fg="white").place(x=50, y=50)

tk.Label(janela, text="📍 Ponto B (x=200, y=150)", bg="#ef4444", fg="white").place(x=200, y=150)

tk.Button(janela, text="Escondido no canto!").place(x=250, y=250)

janela.mainloop()`,
      terminalOutput: `
      <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background-color: #0f172a; font-family: 'Segoe UI', Tahoma, sans-serif; position: relative;">
        <div style="background-color: white; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #d1d5db; z-index: 10;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 14px;">🪟</span><span style="font-size: 12px; color: black;">Mapa Place</span>
          </div>
          <div style="display: flex; gap: 15px; color: #6b7280; font-size: 12px;">
            <span>─</span><span>□</span><span style="color: #ef4444;">✕</span>
          </div>
        </div>
        
        <!-- Plano Cartesiano do Place -->
        <div style="flex: 1; position: relative; background-image: radial-gradient(#334155 1px, transparent 1px); background-size: 20px 20px;">
          
          <div style="position: absolute; left: 50px; top: 50px; background-color: #3b82f6; color: white; padding: 4px 8px; font-size: 12px; border-radius: 2px;">
            📍 Ponto A (x=50, y=50)
          </div>
          
          <div style="position: absolute; left: 200px; top: 150px; background-color: #ef4444; color: white; padding: 4px 8px; font-size: 12px; border-radius: 2px;">
            📍 Ponto B (x=200, y=150)
          </div>
          
          <button style="position: absolute; left: 250px; top: 250px; background-color: #e5e7eb; border: 1px solid #9ca3af; padding: 4px 10px; font-size: 12px; color: black;">
            Escondido no canto!
          </button>

          <!-- Linhas Guia Decorativas -->
          <div style="position: absolute; left: 0; top: 50px; width: 50px; height: 1px; border-top: 1px dashed #64748b;"></div>
          <div style="position: absolute; left: 50px; top: 0; width: 1px; height: 50px; border-left: 1px dashed #64748b;"></div>
          
        </div>
      </div>`
    },
    {
      title: "Dicionário Avançado de Layouts",
      content: "Parâmetros cruciais para organizar a sua interface com precisão cirúrgica.",
      type: "tabela",
      tableData: {
        headers: ["Parâmetro", "Efeito Visual no Grid/Pack/Place"],
        rows: [
          ["padx=10", "Adiciona margem externa horizontal (esquerda e direita) como um campo de força invisível."],
          ["pady=10", "Adiciona margem externa vertical (cima e baixo) de 10 píxeis."],
          ["ipadx=5", "Internal Padding: Aumenta a 'barriga' do botão por dentro, deixando-o mais gordo."],
          ["columnspan=2", "No Grid, ignora as paredes da célula e estica-se invadindo a coluna vizinha."],
          ["rowspan=3", "No Grid, cai verticalmente como uma cascata, ocupando 3 linhas inteiras."],
          ["relx=0.5, rely=0.5", "No Place, usa porcentagens! 0.5 significa 50%. Coloca o item no centro da tela mesmo se ela for redimensionada."]
        ]
      }
    }
  ]
};