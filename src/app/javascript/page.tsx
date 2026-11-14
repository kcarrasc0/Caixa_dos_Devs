import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function JavaScriptTrack() {
  const modulos = [
    { 
      id: 'conceitos-iniciais', 
      titulo: 'Conceitos Iniciais', 
      descricao: 'O que é a JavaScript, algoritmos e a mecânica da Caixa dos Devs.',
      aula: 'Aula 1'
    },
    { 
      id: 'variaveis', 
      titulo: 'Variáveis e Constantes', 
      descricao: 'var, let, const e como o computador guarda informações na memória.',
      aula: 'Aula 2'
    },
    { 
      id: 'tipos-de-dados', 
      titulo: 'Tipos de Dados', 
      descricao: 'String, Number, Boolean, Null e Undefined trazidos para o mundo físico.',
      aula: 'Aula 3'
    },
    { 
      id: 'operadores', 
      titulo: 'Operadores Matemáticos e Lógicos', 
      descricao: 'Atribuição, precedência, relacionais e o famoso atalho do Operador Ternário.',
      aula: 'Aula 4'
    },
    { 
      id: 'entradas-saidas', 
      titulo: 'Entradas e Saídas', 
      descricao: 'Como o computador fala (console) e como ele te escuta (prompt e readline).',
      aula: 'Aula 5'
    },
    { 
      id: 'condicionais', 
      titulo: 'Condicionais na Tomada de Decisão', 
      descricao: 'Ensinando o computador a pensar. Tabela Verdade e as estruturas if / else.',
      aula: 'Aula 6'
    },
    { 
      id: 'repeticao', 
      titulo: 'Estruturas de Repetição', 
      descricao: 'For, while, loops e o botão de pânico com o comando break.',
      aula: 'Aula 7'
    },
    { 
      id: 'arrays-matrizes', 
      titulo: 'Arrays e Matrizes', 
      descricao: 'Trabalhando com listas de dados e estruturas bidimensionais (tabelas).',
      aula: 'Aula 8'
    },
    { 
      id: 'funcoes', 
      titulo: 'Funções e Métodos', 
      descricao: 'A fábrica de código. Parâmetros, a mágica do return e funções nativas.',
      aula: 'Aula 9'
    },
    { 
      id: 'dom-introducao', 
      titulo: 'Introdução ao DOM (A Ponte)', 
      descricao: 'O que é o Document Object Model e como o JavaScript enxerga o seu HTML.',
      aula: 'Aula 10'
    },
    { 
      id: 'seletores-interface', 
      titulo: 'Caçadores de Elementos', 
      descricao: 'Aprenda a pescar elementos da tela usando querySelector e getElementById.',
      aula: 'Aula 11'
    },
    { 
      id: 'manipulando-html', 
      titulo: 'O Poder da Transformação', 
      descricao: 'Alterando textos, tags com innerHTML e classes CSS dinamicamente.',
      aula: 'Aula 12'
    },
    { 
      id: 'eventos-ouvintes', 
      titulo: 'Eventos (O Gatilho)', 
      descricao: 'Dando vida à página com addEventListener. Cliques, mouses e teclados.',
      aula: 'Aula 13'
    },
    { 
      id: 'arrays-dinamicos', 
      titulo: 'Renderização com Arrays', 
      descricao: 'Como percorrer listas (forEach) e desenhar HTML diretamente no JS.',
      aula: 'Aula 14'
    },
    { 
      id: 'formularios', 
      titulo: 'Domando Formulários', 
      descricao: 'Capturando inputs, validando dados e travando a tela com preventDefault.',
      aula: 'Aula 15'
    },
    { 
      id: 'projeto-pratico-js', 
      titulo: 'O Grande Quebra-Cabeça', 
      descricao: 'Projeto final unindo HTML, CSS e JS para criar uma aplicação real.',
      aula: 'Aula 16'
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="javascript" 
      extensao=".js" 
      modulos={modulos} 
      corTema="#eab308" // ← Amarelo ouro, muito mais suave e confortável!
    />
  );
}