import Link from 'next/link';
import Image from 'next/image';

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
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#8A2BE2] selection:text-white relative pb-24">
      <nav className="w-full max-w-5xl mx-auto p-6 flex items-center justify-between relative z-10">
        <Link href="/temas" className="group flex items-center gap-2 text-zinc-400 hover:text-[#8A2BE2] transition-colors font-medium">
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span> Voltar aos Temas
        </Link>
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden image-pixelated">
          <Image src="/personagens/kcarrasquinho.png" alt="Kcarrasquinho" width={35} height={35} className="object-contain" />
        </div>
      </nav>

      <header className="max-w-3xl mx-auto px-6 pt-10 pb-16 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-100">
          Trilha de <span className="text-[#8A2BE2]">PostgreSQL</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Da modelagem teórica à administração segura de dados. Escolha um módulo abaixo para iniciar.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((modulo) => (
            <Link 
              href={`/postgresql/${modulo.id}`} 
              key={modulo.id}
              className="group flex flex-col p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#8A2BE2]/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-bold text-[#8A2BE2] bg-[#8A2BE2]/10 rounded-full uppercase tracking-wider">
                  {modulo.aula}
                </span>
                <span className="text-zinc-500 group-hover:text-[#8A2BE2] transition-colors">➔</span>
              </div>
              <h2 className="text-xl font-bold text-zinc-200 mb-2 group-hover:text-white">{modulo.titulo}</h2>
              <p className="text-sm text-zinc-400 line-clamp-3">{modulo.descricao}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}