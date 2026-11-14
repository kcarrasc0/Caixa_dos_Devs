import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function FletTrack() {
  const modulos = [
    { 
      id: 'revisao', 
      titulo: 'Revisão e Conceitos de Flet', 
      descricao: 'A arquitetura do Flet, o motor do Flutter e o ciclo de vida page.update().', 
      aula: 'Módulo 1'
    },
    { 
      id: 'tela-login', 
      titulo: 'Construindo uma Tela de Login', 
      descricao: 'Inputs, botões, senhas ocultas e centralização responsiva no ecrã.', 
      aula: 'Módulo 2'
    },
    { 
      id: 'barra-navegacao', 
      titulo: 'Barras de Navegação e Abas', 
      descricao: 'Menu inferior (Mobile) e menu lateral (Desktop) com NavigationRail.', 
      aula: 'Módulo 3'
    },
    { 
      id: 'cards', 
      titulo: 'Construindo Cards Responsivos', 
      descricao: 'Cartões flutuantes com sombras e galerias que se adaptam ao tamanho da janela.', 
      aula: 'Módulo 4'
    },
    { 
      id: 'mapa-calendario', 
      titulo: 'Mapas, Calendários e Componentes', 
      descricao: 'Agendamento com DatePicker e mapas estáticos usando ft.Image.', 
      aula: 'Módulo 5'
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="flet" 
      extensao=".py" 
      modulos={modulos} 
      corTema="#0206e6" 
    />
  );
}