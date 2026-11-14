import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function CSSTrack() {
  const modulos = [
    { 
      id: 'introducao', 
      titulo: 'Fundamentos e Mercado', 
      descricao: 'O que é CSS, Tipos de aplicação, Tailwind CSS e como o mercado usa com React e Next.js.',
      aula: 'Módulo 1'
    },
    { 
      id: 'box-model-cores', 
      titulo: 'Box Model e Cores', 
      descricao: 'A anatomia invisível de todo site. Margens, bordas, preenchimentos e sistemas de cores.',
      aula: 'Módulo 2'
    },
    { 
      id: 'layouts', 
      titulo: 'Layouts: Flexbox e Grid', 
      descricao: 'Domine o alinhamento moderno. O duelo entre o mestre de uma dimensão e o rei das duas dimensões.',
      aula: 'Módulo 3'
    },
    { 
      id: 'responsividade-animacoes', 
      titulo: 'Responsividade e Transições', 
      descricao: 'Mobile First, Media Queries, Unidades Relativas e como dar vida e movimento aos elementos.',
      aula: 'Módulo 4'
    },
    { 
      id: 'tipografia-textos', 
      titulo: 'Textos e Tipografia', 
      descricao: 'Fontes, alinhamentos, espaçamentos, line-height e decoração de texto.', 
      aula: 'Módulo 5' 
    },
    { 
      id: 'posicionamento-zindex', 
      titulo: 'Posicionamento e Z-Index', 
      descricao: 'Tire os elementos do fluxo normal usando relative, absolute e fixed.', 
      aula: 'Módulo 6' 
    },
    { 
      id: 'efeitos-visuais', 
      titulo: 'Efeitos Visuais e Bordas', 
      descricao: 'Border-radius, gradientes lineares, box-shadow e filtros de imagem.', 
      aula: 'Módulo 7' 
    },
    { 
      id: 'exemplo-geral', 
      titulo: 'Showcase: O CSS na Prática', 
      descricao: 'Uma página interativa mostrando visualmente e a nível de código todos os conceitos dos módulos anteriores.', 
      aula: 'Módulo Final' 
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="css" 
      extensao=".css" 
      modulos={modulos} 
      corTema="#3b82f6" 
    />
  );
}