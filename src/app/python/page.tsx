import Link from 'next/link';
import Image from 'next/image';

export default function PythonTrack() {
  const modulos = [
    { id: 'basico', titulo: 'Conceitos Iniciais e Básico', descricao: 'Ambiente, IDEs, Variáveis, Tipos de Dados e I/O.', aula: 'Módulo 1' },
    { id: 'operadores', titulo: 'Operadores e Formatação', descricao: 'Aritmética, Atribuição Composta, F-strings e PEP 8.', aula: 'Módulo 2' },
    { id: 'condicionais', titulo: 'Lógica e Condicionais', descricao: 'Tabela Verdade e Estruturas if, elif e else.', aula: 'Módulo 3' },
    { id: 'while-loops', titulo: 'Laços de Repetição (While)', descricao: 'Condições de parada, acumuladores e menus interativos.', aula: 'Módulo 4' },
    { id: 'for-strings', titulo: 'Laço For e Manipulação', descricao: 'A função range, break/continue e tratamento de strings.', aula: 'Módulo 5' },
    { id: 'poo-intro', titulo: 'Introdução à POO', descricao: 'Abstração, Classes, Objetos e o construtor __init__.', aula: 'Módulo 6' },
    { id: 'poo-metodos', titulo: 'Métodos e Encapsulamento', descricao: 'O parâmetro self, métodos e interação entre objetos.', aula: 'Módulo 7' },
    { id: 'poo-avancado', titulo: 'Revisão e Próximos Passos', descricao: 'Herança, Polimorfismo e a retrospectiva da jornada.', aula: 'Módulo 8' },
    
    // Novos Módulos de Interface Gráfica
    { 
      id: 'tkinter-desktop', 
      titulo: 'Interfaces Clássicas (Tkinter)', 
      descricao: 'Saindo do terminal. Criação de janelas, fluxogramas e botões.', 
      aula: 'Módulo 9',
      novo: true 
    },
    { 
      id: 'flet-interfaces', 
      titulo: 'Interfaces Modernas (Flet)', 
      descricao: 'Renderização web, manipulação da pasta assets, ft.Colors e componentes.', 
      aula: 'Módulo 10',
      novo: true 
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
          Trilha de <span className="text-[#8A2BE2]">Python</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Escolha um módulo abaixo para abrir a Caixa dos Devs.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((modulo) => (
            <Link 
              href={`/python/${modulo.id}`} 
              key={modulo.id}
              className={`group flex flex-col p-6 rounded-2xl bg-zinc-900 border transition-all duration-300 hover:-translate-y-1 ${modulo.novo ? 'border-[#8A2BE2]/40 hover:border-[#8A2BE2] shadow-[0_0_15px_rgba(138,43,226,0.1)]' : 'border-zinc-800 hover:border-[#8A2BE2]/50 hover:bg-zinc-800/50'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold text-[#8A2BE2] bg-[#8A2BE2]/10 rounded-full uppercase tracking-wider">
                    {modulo.aula}
                  </span>
        
                </div>
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