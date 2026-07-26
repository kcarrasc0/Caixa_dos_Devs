import Link from 'next/link';

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
    <main className="min-h-screen bg-zinc-950 text-white font-sans p-6 pb-20 selection:bg-[#8A2BE2] selection:text-white">
      <nav className="w-full max-w-5xl mx-auto mb-12 mt-6">
        <Link href="/temas" className="group flex items-center gap-2 text-zinc-400 hover:text-[#8A2BE2] transition-colors font-medium w-fit">
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span> 
          Voltar para Temas
        </Link>
      </nav>

      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Trilha de <span className="text-[#8A2BE2]">Portugol</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((modulo) => (
            <Link 
              href={`/portugol/${modulo.id}`} 
              key={modulo.id}
              className="group flex flex-col justify-between p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-[#8A2BE2]/50 hover:bg-zinc-900 hover:-translate-y-1 transition-all duration-300 min-h-[200px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/0 to-[#8A2BE2]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col gap-3">
                <span className="w-fit px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8A2BE2] bg-[#8A2BE2]/10 rounded-md border border-[#8A2BE2]/20">
                  {modulo.aula}
                </span>
                <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {modulo.titulo}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {modulo.descricao}
                </p>
              </div>
              
              <div className="relative z-10 mt-6 flex items-center text-sm font-bold text-zinc-500 group-hover:text-[#8A2BE2] transition-colors">
                ACESSAR AULA <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}