import Link from 'next/link';
import Image from 'next/image';

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
          Trilha de <span className="text-[#8A2BE2]">JavaScript</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Escolha um módulo abaixo para abrir a Caixa dos Devs.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((modulo) => (
            <Link 
              href={`/javascript/${modulo.id}`} 
              key={modulo.id}
              className="group flex flex-col p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#8A2BE2]/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-bold text-[#8A2BE2] bg-[#8A2BE2]/10 rounded-full uppercase tracking-wider">{modulo.aula}</span>
                <span className="text-zinc-500 group-hover:text-[#8A2BE2] transition-colors">➔</span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-200 mb-2 group-hover:text-white">{modulo.titulo}</h2>
              <p className="text-zinc-400">{modulo.descricao}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}