import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function MySQLTrack() {
  const modulos = [
    { 
      id: 'fundamentos', 
      titulo: 'Fundamentos e Tipos', 
      descricao: 'Introdução aos SGBDs relacionais, estrutura de tabelas e tipos de dados nativos do MySQL.', 
      aula: 'Módulo 1'
    },
    { 
      id: 'crud-basico', 
      titulo: 'O Padrão CRUD e Filtros', 
      descricao: 'Manipulação essencial de dados com INSERT, SELECT, UPDATE, DELETE e operadores lógicos.', 
      aula: 'Módulo 2'
    },
    { 
      id: 'consultas-intermediarias', 
      titulo: 'Consultas Intermediárias', 
      descricao: 'Agrupamentos, funções matemáticas, manipulação de texto e cruzamentos com JOINs.', 
      aula: 'Módulo 3'
    },
    { 
      id: 'restricoes-chaves', 
      titulo: 'Restrições e Chaves (Constraints)', 
      descricao: 'Definição de Primary Keys, Foreign Keys, UNIQUE e a integridade do banco.', 
      aula: 'Módulo 4'
    },
    { 
      id: 'performance-transacoes', 
      titulo: 'Performance e Transações', 
      descricao: 'Motor InnoDB, ACID, criação de Índices, plano de execução (EXPLAIN) e controle de falhas.', 
      aula: 'Módulo 5'
    },
    { 
      id: 'programacao-adm', 
      titulo: 'Programação e Administração', 
      descricao: 'Stored Procedures, Triggers, segurança, controle de usuários e rotinas de backup.', 
      aula: 'Módulo 6'
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="mysql" 
      extensao=".sql" 
      modulos={modulos} 
      corTema="#1e3a8a" // Azul Marinho para SGBDs (MySQL)
    />
  );
}