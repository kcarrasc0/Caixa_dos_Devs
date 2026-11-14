import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function PortugolPage() {
  const modulos = [
    { 
      id: 'a-base-de-tudo', 
      titulo: 'A Base de Tudo', 
      descricao: 'O que é programação, pensamento computacional, algoritmos e a estrutura de um código no Portugol.', 
      aula: 'Módulo 1' 
    },
    { 
      id: 'variaveis-tipos', 
      titulo: 'Variáveis e Tipos Primitivos', 
      descricao: 'Entenda como armazenar dados (caixas) e quais os tipos (inteiro, real, cadeia, caracter e logico).', 
      aula: 'Módulo 2' 
    },
    { 
      id: 'operadores', 
      titulo: 'Operadores', 
      descricao: 'A caixa de ferramentas. Contas matemáticas, módulo (%) e comparações lógicas (maior, menor, igual).', 
      aula: 'Módulo 3' 
    },
    { 
      id: 'estruturas-condicao', 
      titulo: 'Estruturas de Condição', 
      descricao: 'O poder de tomar decisões com se, senao, senao se e a estrutura escolha caso (o cardápio).', 
      aula: 'Módulo 4' 
    },
    { 
      id: 'estruturas-repeticao', 
      titulo: 'Estruturas de Repetição', 
      descricao: 'Faça o computador trabalhar por você usando os laços Enquanto (while) e Para (for).', 
      aula: 'Módulo 5' 
    },
    { 
      id: 'vetores', 
      titulo: 'Vetores (Arrays)', 
      descricao: 'Evolua suas variáveis criando listas e armários com várias posições de memória.', 
      aula: 'Módulo 6' 
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="portugol" 
      extensao=".alg" 
      modulos={modulos} 
      corTema="#E5D3B3" 
    />
  );
}