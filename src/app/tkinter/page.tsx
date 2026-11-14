import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function TkinterTrack() {
  const modulos = [
    { 
      id: 'revisao', 
      titulo: 'Revisão e Conceitos', 
      descricao: 'O fluxo de janelas nativas, mainloop e os widgets fundamentais.', 
      aula: 'Módulo 1'
    },
    { 
      id: 'tela-login', 
      titulo: 'Construindo uma Tela de Login', 
      descricao: 'Caixas de texto dinâmicas, senhas ocultas e extração de dados.', 
      aula: 'Módulo 2'
    },
    { 
      id: 'abas-menus', 
      titulo: 'Abas e Menus de Topo', 
      descricao: 'Uso do módulo moderno ttk.Notebook e barras de navegação desktop.', 
      aula: 'Módulo 3'
    },
    { 
      id: 'gerenciadores', 
      titulo: 'Gerenciadores de Layout (Grid)', 
      descricao: 'Posicionamento em formato de grelha para matrizes e calculadoras.', 
      aula: 'Módulo 4'
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="tkinter" 
      extensao=".py" 
      modulos={modulos} 
      corTema="#0206e6" // ← Azul (Python/Tkinter base)
    />
  );
}