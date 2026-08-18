import Link from 'next/link';
import Image from 'next/image';

export default function Temas() {
  const temas = [
    { 
      id: 'portugol', 
      titulo: 'Portugol', 
      categoria: 'Pseudocódigo',
      descricao: 'A sua primeira bicicleta sem rodinhas. Aprenda algoritmos e lógica de programação em português puro, focando no raciocínio antes de decorar sintaxes rígidas.',
      personagens: ['/personagens/portugol.png'],
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'html', 
      titulo: 'HTML', 
      categoria: 'Linguagem de Marcação',
      descricao: 'O esqueleto de tudo. Entenda as tags estruturais e como a web é construída por baixo dos panos.',
      personagens: ['/personagens/html.png'],
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'css', 
      titulo: 'CSS', 
      categoria: 'Linguagem de Estilização',
      descricao: 'A artista visual. Domine cores, espaçamentos, flexbox e deixe o mundo real com a sua cara.',
      personagens: ['/personagens/css.png'],
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'javascript', 
      titulo: 'JavaScript', 
      categoria: 'Linguagem de Programação',
      descricao: 'A mestre de cerimônias. Aprenda lógica de programação, variáveis, operadores e como dar vida às aplicações.',
      personagens: ['/personagens/javascript.png'],
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'portifolio', 
      titulo: 'Projeto Portfólio', 
      categoria: 'Projeto Prático',
      descricao: 'A Tríade Web na prática. Junte HTML, CSS e JavaScript para construir e estruturar o seu primeiro portfólio real do zero.',
      personagens: [
        '/personagens/html.png', 
        '/personagens/css.png', 
        '/personagens/javascript.png'
      ],
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'python', 
      titulo: 'Python', 
      categoria: 'Linguagem de Programação',
      descricao: 'A serpente dos dados. Domine a linguagem ideal para criar scripts poderosos, sistemas internos e dashboards de gestão completos com uma sintaxe limpa.',
      personagens: ['/personagens/python.png'],
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'typescript', 
      titulo: 'TypeScript', 
      categoria: 'Linguagem de Programação',
      descricao: 'O segurança linha dura do código. Adicione tipagem estática ao JavaScript, pegue erros antes de rodar e deixe suas aplicações blindadas.',
      personagens: ['/personagens/typescript.png'],
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'tailwindcss', 
      titulo: 'Tailwind CSS', 
      categoria: 'Framework',
      descricao: 'Estilização em alta velocidade. Construa layouts modernos, responsivos e limpos direto no seu HTML usando classes utilitárias.',
      personagens: ['/personagens/tailwindcss.png'],
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'bootstrap', 
      titulo: 'Bootstrap', 
      categoria: 'Framework',
      descricao: 'O construtor clássico. Monte interfaces responsivas rapidamente usando um sistema de grids imbatível e dezenas de componentes prontos para uso.',
      personagens: ['/personagens/bootstrap.png'],
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'react', 
      titulo: 'React', 
      categoria: 'Biblioteca',
      descricao: 'A biblioteca que mudou o front-end. Crie interfaces de usuário interativas, dinâmicas e componentizadas.',
      personagens: ['/personagens/react.png'],
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'nextjs', 
      titulo: 'Next.js', 
      categoria: 'Framework',
      descricao: 'O maquinário pesado do React. Construa aplicações web full-stack super rápidas, com sistema de rotas avançado.',
      personagens: ['/personagens/next.png'],
      status: 'Em Breve',
      ativo: false
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#8A2BE2] selection:text-white relative pb-20">
      
      {/* Navegação Superior */}
      <nav className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between relative z-10">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-zinc-400 hover:text-[#8A2BE2] transition-colors font-medium"
        >
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span> 
          Voltar para a Home
        </Link>
        
        {/* Avatar do Kcarrasquinho no Header */}
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden image-pixelated">
          <Image 
            src="/personagens/kcarrasquinho.png" 
            alt="Kcarrasquinho" 
            width={35} 
            height={35} 
            className="object-contain"
          />
        </div>
      </nav>

      {/* Cabeçalho da Página */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-zinc-100">
          Escolha o seu <span className="text-[#8A2BE2]">Tema</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          A Caixa dos Devs está aberta. Selecione uma das tecnologias abaixo para explorar os conceitos mastigados, conhecer os personagens e colocar a mão no código.
        </p>
      </header>

      {/* Grid de Temas */}
      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {temas.map((tema) => (
            <Link 
              href={tema.ativo ? `/${tema.id}` : '#'} 
              key={tema.id}
              className={`group relative flex flex-col sm:flex-row items-center p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
                tema.ativo 
                  ? 'bg-zinc-900 border-zinc-800 hover:border-[#8A2BE2]/60 hover:bg-zinc-800/80 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(138,43,226,0.2)]' 
                  : 'bg-zinc-950/50 border-zinc-900 cursor-default opacity-70'
              }`}
            >
              {tema.ativo && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/0 to-[#8A2BE2]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}

              {/* Box da Imagem */}
              <div className="relative z-10 flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center p-3 mb-4 sm:mb-0 sm:mr-6 image-pixelated group-hover:border-[#8A2BE2]/40 transition-colors overflow-hidden">
                <div className="flex items-center justify-center">
                  {tema.personagens.map((imgSrc, idx) => (
                    <div 
                      key={idx} 
                      className={`relative drop-shadow-xl ${idx > 0 ? '-ml-5 sm:-ml-6' : ''}`}
                      style={{ zIndex: tema.personagens.length - idx }}
                    >
                      <Image 
                        src={imgSrc} 
                        alt={`Personagem ${tema.titulo}`} 
                        width={tema.personagens.length > 1 ? 55 : 80} 
                        height={tema.personagens.length > 1 ? 55 : 80} 
                        className={`object-contain transition-transform duration-300 ${tema.ativo ? 'group-hover:scale-110' : ''}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Área de Textos e Badges */}
              <div className="relative z-10 flex-1 w-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-col gap-1.5">
                    <h2 className={`text-xl sm:text-2xl font-bold transition-colors ${tema.ativo ? 'text-zinc-100 group-hover:text-white' : 'text-zinc-500'}`}>
                      {tema.titulo}
                    </h2>
                    
                    {/* Bloquinho roxo de Categoria */}
                    <span className="w-fit px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#8A2BE2] text-white shadow-sm">
                      {tema.categoria}
                    </span>
                  </div>
                  
                  {/* Badge de Status (Disponível / Em Breve) */}
                  <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full flex-shrink-0 mt-1 sm:mt-0 ${
                    tema.ativo ? 'text-green-400 bg-green-400/10 border border-green-400/20' : 'text-zinc-500 bg-zinc-900 border border-zinc-800'
                  }`}>
                    {tema.status}
                  </span>
                </div>
                
                <p className={`text-sm line-clamp-2 ${tema.ativo ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {tema.descricao}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Efeito Glow de fundo */}
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8A2BE2]/10 blur-[150px] rounded-full pointer-events-none"></div>
    </main>
  );
}