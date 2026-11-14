import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function HTMLTrack() {
  const modulos = [
    { 
      id: 'fundamentos', 
      titulo: 'O Esqueleto da Web', 
      descricao: 'Entenda a planta baixa. A diferença entre marcação e programação, tags head, body e atributos básicos.',
      aula: 'Módulo 1'
    },
    { 
      id: 'semantica-textos', 
      titulo: 'Textos e a Arte da Semântica', 
      descricao: 'Pare de usar <div> para tudo! Aprenda a estruturar textos, listas e usar as tags semânticas do HTML5.',
      aula: 'Módulo 2'
    },
    { 
      id: 'multimidia-links', 
      titulo: 'Navegação e Multimídia', 
      descricao: 'Como a internet se conecta. A tag de âncora, imagens, vídeos e a importância vital do atributo alt.',
      aula: 'Módulo 3'
    },
    { 
      id: 'tabelas-formularios', 
      titulo: 'Formulários e Tabelas', 
      descricao: 'Colete informações dos usuários. Textareas, selects, checkboxes, botões de rádio e estruturação de dados.',
      aula: 'Módulo 4'
    },
    { 
      id: 'boas-praticas', 
      titulo: 'SEO e Acessibilidade', 
      descricao: 'O toque profissional. Como deixar seu site amigável para o Google, leitores de tela e preparar o terreno para o CSS.',
      aula: 'Módulo 5'
    },
    { 
      id: 'formatacao-texto', 
      titulo: 'Formatação e Citações', 
      descricao: 'Tags strong, em, blockquote, q, mark e manipulação nativa de textos.', 
      aula: 'Módulo 6' 
    },
    { 
      id: 'listas', 
      titulo: 'Estruturas de Listas', 
      descricao: 'Tags ul, ol, li, hr e organização de conteúdo em tópicos.', 
      aula: 'Módulo 7' 
    },
    { 
      id: 'interatividade-embutidos', 
      titulo: 'Interatividade e Iframes', 
      descricao: 'Crie abas nativas com details/summary e embuta páginas com iframes.', 
      aula: 'Módulo 8' 
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="html" 
      extensao=".html" 
      modulos={modulos} 
      corTema="#e11d48" // ← Vermelho mais suave, sem ofuscar
    />
  );
}