import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function PythonTrack() {
  const modulos = [
    { 
      id: 'basico', 
      titulo: 'Conceitos Iniciais e Básico', 
      descricao: 'Ambiente, IDEs, Variáveis, Tipos de Dados e I/O.', 
      aula: 'Módulo 1' 
    },
    { 
      id: 'operadores', 
      titulo: 'Operadores e Formatação', 
      descricao: 'Aritmética, Atribuição Composta, F-strings e PEP 8.', 
      aula: 'Módulo 2' 
    },
    { 
      id: 'condicionais', 
      titulo: 'Lógica e Condicionais', 
      descricao: 'Tabela Verdade e Estruturas if, elif e else.', 
      aula: 'Módulo 3' 
    },
    { 
      id: 'while-loops', 
      titulo: 'Laços de Repetição (While)', 
      descricao: 'Condições de parada, acumuladores e menus interativos.', 
      aula: 'Módulo 4' 
    },
    { 
      id: 'for-strings', 
      titulo: 'Laço For e Manipulação', 
      descricao: 'A função range, break/continue e tratamento de strings.', 
      aula: 'Módulo 5' 
    },
    { 
      id: 'poo-intro', 
      titulo: 'Introdução à POO', 
      descricao: 'Abstração, Classes, Objetos e o construtor __init__.', 
      aula: 'Módulo 6' 
    },
    { 
      id: 'poo-metodos', 
      titulo: 'Métodos e Encapsulamento', 
      descricao: 'O parâmetro self, métodos e interação entre objetos.', 
      aula: 'Módulo 7' 
    },
    { 
      id: 'poo-avancado', 
      titulo: 'Revisão e Próximos Passos', 
      descricao: 'Herança, Polimorfismo e a retrospectiva da jornada.', 
      aula: 'Módulo 8' 
    },
    { 
      id: 'tkinter-desktop', 
      titulo: 'Interfaces Clássicas (Tkinter)', 
      descricao: 'Saindo do terminal. Criação de janelas, fluxogramas e botões.', 
      aula: 'Módulo 9' 
    },
    { 
      id: 'flet-interfaces', 
      titulo: 'Interfaces Modernas (Flet)', 
      descricao: 'Renderização web, manipulação da pasta assets, ft.Colors e componentes.', 
      aula: 'Módulo 10' 
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="python" 
      extensao=".py" 
      modulos={modulos} 
      corTema="#0206e6" // ← Azul Python
    />
  );
}