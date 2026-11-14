import VSCodeModuleHome from '@/components/VSCodeModuleHome';

export default function PostgreSQLTrack() {
  const modulos = [
    { 
      id: 'modelagem-conceitual', 
      titulo: 'Fundamentos e Operações', 
      descricao: 'Instalação, psql, DDL (CREATE, ALTER), Tipos de Dados e Restrições.', 
      aula: 'Módulo 1'
    },
    { 
      id: 'modelagem-fisica', 
      titulo: 'Modelagem Física', 
      descricao: 'Cardinalidade, fluxogramas lógicos e a estrutura física do SGBD.', 
      aula: 'Módulo 2'
    },
    { 
      id: 'linguagem-sql-crud', 
      titulo: 'SQL Clássico e CRUD', 
      descricao: 'O diagrama DER aplicado e os comandos fundamentais de manipulação.', 
      aula: 'Módulo 3'
    },
    { 
      id: 'manipulacao-consulta', 
      titulo: 'Manipulação e Consultas', 
      descricao: 'Filtros WHERE, ordenação, cruzamentos com JOINs e CTEs (WITH).', 
      aula: 'Módulo 4'
    },
    { 
      id: 'recursos-avancados', 
      titulo: 'Recursos Avançados', 
      descricao: 'Window Functions, banco NoSQL com JSONB, Procedures e Triggers.', 
      aula: 'Módulo 5'
    },
    { 
      id: 'otimizacao-desempenho', 
      titulo: 'Otimização e Desempenho', 
      descricao: 'Índices B-Tree/GIN, EXPLAIN ANALYZE, Transações ACID e Locks.', 
      aula: 'Módulo 6'
    },
    { 
      id: 'administracao-arquitetura', 
      titulo: 'Administração e Arquitetura', 
      descricao: 'Controle de acesso (ROLES), configurações no postgresql.conf e VACUUM.', 
      aula: 'Módulo 7'
    },
    { 
      id: 'importacao-exportacao', 
      titulo: 'Importação e Exportação', 
      descricao: 'Migrações com CSV, JSON, pg_dump e movimentação de dados.', 
      aula: 'Módulo 8'
    },
    { 
      id: 'seguranca-backup', 
      titulo: 'Segurança e Backup', 
      descricao: 'Cópia de segurança, rotinas e restauração de dados críticos.', 
      aula: 'Módulo 9'
    }
  ];

  return (
    <VSCodeModuleHome 
      tema="postgresql" 
      extensao=".sql" 
      modulos={modulos} 
      corTema="#1e3a8a" // Azul Marinho para PostgreSQL
    />
  );
}