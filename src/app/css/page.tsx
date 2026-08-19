import Link from 'next/link';
import Image from 'next/image';

export default function CSSTrack() {
  const modulos = [
    { 
      id: 'introducao', 
      titulo: 'Fundamentos e Mercado', 
      descricao: 'O que é CSS, Tipos de aplicação, Tailwind CSS e como o mercado usa com React e Next.js.',
      aula: 'Módulo 1'
    },
    { 
      id: 'box-model-cores', 
      titulo: 'Box Model e Cores', 
      descricao: 'A anatomia invisível de todo site. Margens, bordas, preenchimentos e sistemas de cores.',
      aula: 'Módulo 2'
    },
    { 
      id: 'layouts', 
      titulo: 'Layouts: Flexbox e Grid', 
      descricao: 'Domine o alinhamento moderno. O duelo entre o mestre de uma dimensão e o rei das duas dimensões.',
      aula: 'Módulo 3'
    },
    { 
      id: 'responsividade-animacoes', 
      titulo: 'Responsividade e Transições', 
      descricao: 'Mobile First, Media Queries, Unidades Relativas e como dar vida e movimento aos elementos.',
      aula: 'Módulo 4'
    },
  { id: 'tipografia-textos', titulo: 'Textos e Tipografia', descricao: 'Fontes, alinhamentos, espaçamentos, line-height e decoração de texto.', aula: 'Módulo 5' },
    { id: 'posicionamento-zindex', titulo: 'Posicionamento e Z-Index', descricao: 'Tire os elementos do fluxo normal usando relative, absolute e fixed.', aula: 'Módulo 6' },
    { id: 'efeitos-visuais', titulo: 'Efeitos Visuais e Bordas', descricao: 'Border-radius, gradientes lineares, box-shadow e filtros de imagem.', aula: 'Módulo 7' },
    { id: 'exemplo-geral', titulo: 'Showcase: O CSS na Prática', descricao: 'Uma página interativa mostrando visualmente e a nível de código todos os conceitos dos módulos anteriores.', aula: 'Módulo Final', especial: true }
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
          Trilha de <span className="text-[#8A2BE2]">CSS3</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Escolha um módulo abaixo para abrir a Caixa dos Devs.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((modulo) => (
            <Link 
              href={`/css/${modulo.id}`} 
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