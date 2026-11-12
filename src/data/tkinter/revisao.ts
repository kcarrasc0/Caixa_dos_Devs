export const tkinterRevisao = {
  id: "revisao",
  titulo: "Revisão e Conceitos (Tkinter)",
  cards: [
    {
      title: "O Clássico do Python",
      content: "O Tkinter (Tk Interface) é a biblioteca built-in do Python para Interfaces Gráficas de Utilizador (GUI). Como já vem instalada com o Python, não precisa de usar o 'pip install'. É a ferramenta perfeita para criar scripts internos rápidos, ferramentas de automação e janelas nativas de Desktop.",
      type: "conceito",
      codeSnippet: "import tkinter as tk\n\n# 1. Cria a janela base\njanela = tk.Tk()\njanela.title('A Minha App')\njanela.geometry('400x300')\n\n# 2. Mantém o programa rodando (Loop de Eventos)\njanela.mainloop()"
    },
    {
      title: "Widgets e Layouts",
      content: "No Tkinter, os elementos visuais são chamados de 'Widgets' (Label, Button, Entry). Diferente da Web (onde o CSS posiciona tudo), no Tkinter nós criamos a peça e depois dizemos como ela deve ser empacotada na tela usando um Gerenciador de Layout, sendo o '.pack()' o mais simples (empilha de cima para baixo).",
      type: "conceito",
      codeSnippet: "import tkinter as tk\n\njanela = tk.Tk()\n\n# Criamos o Widget de Texto\ntexto = tk.Label(janela, text='Olá, Desktop!', font=('Arial', 16))\n\n# Desenhamos o Widget na tela\ntexto.pack(pady=20)\n\njanela.mainloop()"
    },
    {
      title: "Dicionário Tkinter",
      content: "Os termos fundamentais para a criação de janelas clássicas.",
      type: "tabela",
      tableData: {
        headers: ["Termo / Função", "Ação Prática"],
        rows: [
          ["tk.Tk()", "Cria o objeto da janela raiz do sistema operativo."],
          ["janela.mainloop()", "Inicia o ciclo que mantém a janela aberta e à escuta de cliques."],
          ["tk.Label()", "Ferramenta de texto estático (rótulo)."],
          ["tk.Entry()", "Caixa de input para o utilizador digitar textos ou senhas."],
          ["tk.Button(command=...)", "Botão clicável. O parâmetro 'command' recebe a função que será disparada."],
          [".pack()", "Organiza os widgets numa pilha vertical centralizada automaticamente."]
        ]
      }
    }
  ]
};