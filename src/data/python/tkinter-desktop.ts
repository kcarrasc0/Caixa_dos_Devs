export const tkinterDesktop = {
  id: "tkinter-desktop",
  titulo: "Interfaces Clássicas (Tkinter)",
  cards: [
    {
      title: "Saindo da Tela Preta",
      content: "Chegou a hora de dar um rosto ao seu programa. O Tkinter é a biblioteca padrão do Python para criar Interfaces Gráficas. Com ele, você constrói janelas, botões e formulários. Aviso de Ambiente: O Tkinter foi feito para rodar no seu sistema operacional. No VS Code local, ele funciona perfeitamente. Já no Google Colab, por ser um servidor na nuvem sem monitor, o Tkinter nativo vai falhar e dar erro. Recomendamos testar este módulo no seu VS Code.",
      type: "conceito",
      codeSnippet: "# Instalação\n# O Tkinter já vem embutido no Python!\n# No seu VS Code, basta importar no topo do arquivo:\nimport tkinter as tk"
    },
    {
      title: "Fluxograma: Passo 1 e 2",
      content: "Diferente dos scripts de terminal que rodam e acabam, uma Interface Gráfica fica viva aguardando o usuário. A montagem segue uma ordem lógica. O primeiro passo é importar a biblioteca. O segundo passo é criar a Janela Principal, que chamamos de raiz. Ela é a base onde tudo será construído.",
      type: "pratica",
      codeSnippet: "import tkinter as tk\n\n# Passo 2: Criando a janela raiz\njanela = tk.Tk()\njanela.title('Meu App')\njanela.geometry('400x300') # Largura x Altura"
    },
    {
      title: "Fluxograma: Passo 3 e 4",
      content: "Com a janela criada, o terceiro passo é instanciar os Widgets, que são as peças da sua interface: botões, rótulos de texto e caixas. O quarto passo é posicionar esses Widgets na tela. Atenção: se você criar a peça mas esquecer de posicioná-la, ela ficará invisível para o usuário.",
      type: "pratica",
      codeSnippet: "# Passo 3: Criando a peça (Widget de Texto)\ntexto = tk.Label(janela, text='Olá, Mundo Visual!')\n\n# Passo 4: Posicionando na tela com o gerenciador 'pack'\ntexto.pack(pady=50)"
    },
    {
      title: "Fluxograma: Passo 5 (Mainloop)",
      content: "O quinto e último passo é ligar o motor da interface. O método mainloop cria um laço infinito que mantém a janela aberta na sua tela, ouvindo cliques e movimentos do mouse. Dica do KCarrasquinho: Se você esquecer este passo, o programa vai abrir e fechar tão rápido que você não vai conseguir ver nada.",
      type: "pratica",
      codeSnippet: "# Passo 5: Ligando o motor da interface\n# Este comando sempre deve ser a última linha do seu código\njanela.mainloop()"
    },
    {
      title: "Botões e Eventos (Interatividade)",
      content: "Uma janela de verdade precisa reagir ao usuário. O widget de Botão possui um parâmetro chamado command. É nele que você passa o nome da função que será executada no exato momento do clique. Dica importante: Nunca coloque os parênteses na frente da função dentro do command, senão ela será ativada sozinha ao iniciar o app.",
      type: "pratica",
      codeSnippet: `import tkinter as tk\n\ndef avisar_clique():\n    mensagem.config(text='Clicado com sucesso!', fg='green')\n\njanela = tk.Tk()\njanela.geometry('300x200')\n\nmensagem = tk.Label(janela, text='Esperando ação...')\nmensagem.pack(pady=20)\n\nbotao = tk.Button(janela, text='Clique Aqui', command=avisar_clique)\nbotao.pack()\n\njanela.mainloop()`
    },
    {
      title: "Dicionário de Comandos Tkinter",
      content: "Para fixar o aprendizado, montamos um resumo com os principais métodos do Tkinter. Use esta tabela como um guia rápido (Cheat Sheet) de consulta para a construção das suas telas e layouts.",
      type: "tabela",
      tableData: {
        headers: ["Código Tkinter", "Significado e Ação Visual"],
        rows: [
          ["tk.Tk()", "Inicia a Janela Principal. É o frame base (raiz) do seu sistema."],
          ["janela.geometry('500x400')", "Tamanho inicial. Define a largura e altura da janela em pixels."],
          ["tk.Label(text='...')", "Rótulo de Texto. Serve para mostrar frases, instruções ou títulos."],
          ["tk.Entry()", "Caixa de Entrada (Input). Permite que o usuário digite textos ou números."],
          ["tk.Button(command=...)", "Botão Interativo. Dispara uma ação (função) quando o usuário clica."],
          [".pack(pady=10)", "Layout em Pilha. Posiciona o elemento centralizado, um embaixo do outro."],
          [".grid(row=0, column=1)", "Layout em Grade. Posiciona de forma exata usando formato de tabela (Excel)."],
          [".place(x=50, y=50)", "Posicionamento Absoluto. Coloca numa coordenada exata (arrastar livremente)."],
          ["widget.config(...)", "Configuração posterior. Muda atributos (cor, texto) de um item já criado."],
          ["janela.mainloop()", "O motor. Mantém a janela aberta em loop aguardando interações."]
        ]
      }
    }
  ]
};