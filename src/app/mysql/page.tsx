import Link from 'next/link';
import Image from 'next/image';

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
          Trilha de <span className="text-[#8A2BE2]">MySQL</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          O banco de dados relacional mais popular da Web. Do básico ao motor InnoDB.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((modulo) => (
            <Link 
              href={`/mysql/${modulo.id}`} 
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