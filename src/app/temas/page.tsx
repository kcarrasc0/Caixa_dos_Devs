'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Fundo global da página
const BackgroundGeometry = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-[#8A2BE2]/10 blur-[150px] rounded-full"></div>
    <div className="absolute top-[30%] right-[5%] w-[600px] h-[600px] bg-[#00BCD4]/5 blur-[150px] rounded-full"></div>
    <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-[#F29111]/5 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#8A2BE2]/15 blur-[200px] rounded-full"></div>
  </div>
);

export default function Temas() {
  const [saudacao, setSaudacao] = useState('Salve família!');

  useEffect(() => {
    const horaAtual = new Date().getHours();
    if (horaAtual >= 5 && horaAtual < 12) {
      setSaudacao('Salve família! No máximo do rexxpeitinho bom dia!!!');
    } else if (horaAtual >= 12 && horaAtual < 18) {
      setSaudacao('Salve família! No máximo do rexxpeitinho boa tarde!!!');
    } else {
      setSaudacao('Salve família! No máximo do rexxpeitinho boa noite!!!');
    }
  }, []);

  const temas = [
    { 
      id: 'portugol', 
      titulo: 'Portugol', 
      categoria: 'Pseudocódigo',
      descricao: 'A sua primeira bicicleta sem rodinhas. Aprenda algoritmos e lógica de programação em português puro, focando no raciocínio antes de decorar sintaxes rígidas.',
      personagens: ['/personagens/portugol.png'],
      corHover: 'hover:border-[#E5D3B3]/50 hover:shadow-[0_0_30px_rgba(229,211,179,0.15)] group-hover:bg-[#E5D3B3]/10',
      corTag: 'bg-[#E5D3B3] text-zinc-900 border-[#D4C3A3]', // Amarelo arenoso/linho
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'html', 
      titulo: 'HTML', 
      categoria: 'Linguagem de Marcação',
      descricao: 'O esqueleto de tudo. Entenda as tags estruturais e como a web é construída por baixo dos panos.',
      personagens: ['/personagens/html.png'],
      corHover: 'hover:border-[#e11d48]/50 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] group-hover:bg-[#e11d48]/10',
      corTag: 'bg-[#e11d48] text-white border-[#be123c]', // Vermelho HTML
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'css', 
      titulo: 'CSS', 
      categoria: 'Linguagem de Estilização',
      descricao: 'A artista visual. Domine cores, espaçamentos, flexbox e deixe o mundo real com a sua cara.',
      personagens: ['/personagens/css.png'],
      corHover: 'hover:border-[#3b82f6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:bg-[#3b82f6]/10',
      corTag: 'bg-[#3b82f6] text-white border-[#2563eb]', // Azul CSS
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'javascript', 
      titulo: 'JavaScript', 
      categoria: 'Linguagem de Programação',
      descricao: 'A mestre de cerimônias. Aprenda lógica de programação, variáveis, operadores e como dar vida às aplicações.',
      personagens: ['/personagens/javascript.png'],
      corHover: 'hover:border-[#ffe600]/50 hover:shadow-[0_0_30px_rgba(255,230,0,0.15)] group-hover:bg-[#ffe600]/10',
      corTag: 'bg-[#ffe600] text-black border-[#eab308]', // Amarelo JS
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
      corHover: 'hover:border-[#8A2BE2]/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] group-hover:bg-[#8A2BE2]/10',
      corTag: 'bg-[#8A2BE2] text-white border-[#9333ea]', // Roxo Padrão
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'python', 
      titulo: 'Python', 
      categoria: 'Linguagem de Programação',
      descricao: 'A serpente dos dados. Domine a linguagem ideal para criar scripts poderosos, sistemas internos e dashboards de gestão completos com uma sintaxe limpa.',
      personagens: ['/personagens/python.png'],
      corHover: 'hover:border-[#0206e6]/50 hover:shadow-[0_0_30px_rgba(2,6,230,0.15)] group-hover:bg-[#0206e6]/10',
      corTag: 'bg-[#0206e6] text-[#ffe600] border-[#ffe600]', // Azul com texto Amarelo
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'postgresql', 
      titulo: 'PostgreSQL', 
      categoria: 'Banco de Dados',
      descricao: 'Modelagem, SGBDs, linguagem SQL e segurança avançada para dominar bancos de dados relacionais.',
      personagens: ['/personagens/postgresql.png'],
      corHover: 'hover:border-[#1e3a8a]/50 hover:shadow-[0_0_30px_rgba(30,58,138,0.15)] group-hover:bg-[#1e3a8a]/10',
      corTag: 'bg-[#1e3a8a] text-white border-[#172554]', // Azul Marinho
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'mysql', 
      titulo: 'MySQL', 
      categoria: 'Banco de Dados',
      descricao: 'O banco de dados relacional mais popular da Web. Domine o padrão CRUD, cruzamentos complexos e o motor InnoDB.',
      personagens: ['/personagens/mysql.png'],
      corHover: 'hover:border-[#1e3a8a]/50 hover:shadow-[0_0_30px_rgba(30,58,138,0.15)] group-hover:bg-[#1e3a8a]/10',
      corTag: 'bg-[#1e3a8a] text-white border-[#172554]', // Azul Marinho
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'tkinter', 
      titulo: 'Tkinter', 
      categoria: 'Interface Gráfica',
      descricao: 'Construa aplicações desktop clássicas usando a biblioteca padrão do Python e entenda a lógica de janelas e eventos.',
      personagens: ['/personagens/tkinter.png'],
      corHover: 'hover:border-[#0206e6]/50 hover:shadow-[0_0_30px_rgba(2,6,230,0.15)] group-hover:bg-[#0206e6]/10',
      corTag: 'bg-[#0206e6] text-[#ffe600] border-[#ffe600]', // Azul com texto Amarelo
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'flet', 
      titulo: 'Flet', 
      categoria: 'Framework de Interface',
      descricao: 'Crie aplicações web, mobile e desktop responsivas e modernas com Python, baseadas no poderoso motor do Flutter.',
      personagens: ['/personagens/flet.png'],
      corHover: 'hover:border-[#0206e6]/50 hover:shadow-[0_0_30px_rgba(2,6,230,0.15)] group-hover:bg-[#0206e6]/10',
      corTag: 'bg-[#0206e6] text-[#ffe600] border-[#ffe600]', // Azul com texto Amarelo
      status: 'Disponível',
      ativo: true
    },
    { 
      id: 'typescript', 
      titulo: 'TypeScript', 
      categoria: 'Linguagem de Programação',
      descricao: 'O segurança linha dura do código. Adicione tipagem estática ao JavaScript, pegue erros antes de rodar e deixe suas aplicações blindadas.',
      personagens: ['/personagens/typescript.png'],
      corHover: '',
      corTag: 'bg-zinc-800 text-zinc-400',
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'tailwindcss', 
      titulo: 'Tailwind CSS', 
      categoria: 'Framework',
      descricao: 'Estilização em alta velocidade. Construa layouts modernos, responsivos e limpos direto no seu HTML usando classes utilitárias.',
      personagens: ['/personagens/tailwindcss.png'],
      corHover: '',
      corTag: 'bg-zinc-800 text-zinc-400',
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'bootstrap', 
      titulo: 'Bootstrap', 
      categoria: 'Framework',
      descricao: 'O construtor clássico. Monte interfaces responsivas rapidamente usando um sistema de grids imbatível e dezenas de componentes prontos para uso.',
      personagens: ['/personagens/bootstrap.png'],
      corHover: '',
      corTag: 'bg-zinc-800 text-zinc-400',
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'react', 
      titulo: 'React', 
      categoria: 'Biblioteca',
      descricao: 'A biblioteca que mudou o front-end. Crie interfaces de usuário interativas, dinâmicas e componentizadas.',
      personagens: ['/personagens/react.png'],
      corHover: '',
      corTag: 'bg-zinc-800 text-zinc-400',
      status: 'Em Breve',
      ativo: false
    },
    { 
      id: 'nextjs', 
      titulo: 'Next.js', 
      categoria: 'Framework',
      descricao: 'O maquinário pesado do React. Construa aplicações web full-stack super rápidas, com sistema de rotas avançado.',
      personagens: ['/personagens/next.png'],
      corHover: '',
      corTag: 'bg-zinc-800 text-zinc-400',
      status: 'Em Breve',
      ativo: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-[#8A2BE2] selection:text-white relative pb-24 overflow-x-hidden">
      
      <BackgroundGeometry />
      
      <nav className="w-full max-w-7xl mx-auto p-6 flex items-center justify-between relative z-20 border-b border-zinc-900/50 bg-[#09090b]/40 backdrop-blur-md">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-zinc-400 hover:text-[#8A2BE2] transition-colors font-bold text-sm uppercase tracking-wider"
        >
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span> 
          Início
        </Link>
      </nav>

      <section className="relative w-full pt-16 pb-20 z-10 border-b border-zinc-800 bg-zinc-900/40 backdrop-blur-sm mb-16 overflow-hidden">
        <div className="absolute top-10 left-[5%] w-12 h-12 border-4 border-[#00BCD4] rounded-full opacity-20 animate-[bounce_6s_infinite]"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border-[3px] border-dashed border-[#ff5ebd] opacity-20 animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute top-1/4 right-[45%] w-8 h-8 bg-[#ffe600] rounded-sm opacity-15 animate-[spin_8s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-10 right-[10%] w-20 h-20 border-2 border-[#8A2BE2] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-20 animate-[spin_20s_linear_infinite]"></div>
        
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#8A2BE2]/10 blur-[100px] rounded-full z-0"></div>
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00BCD4]/10 blur-[100px] rounded-full z-0"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative flex justify-center lg:justify-start items-end h-[450px]">
            <div className="absolute bottom-0 w-[300px] h-[300px] bg-[#8A2BE2]/20 blur-[80px] rounded-full z-0"></div>
            
            <div className="relative z-10 group cursor-default">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 md:translate-x-0 md:-right-10 md:left-auto w-64 bg-white text-zinc-950 font-bold text-center p-4 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] animate-[float_4s_ease-in-out_infinite] z-30">
                "{saudacao}"
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 w-6 h-6 bg-white rotate-45 rounded-sm"></div>
              </div>

              <Image 
                src="/personagens/kcarrasquinhopose.png" 
                alt="Kcarrasquinho" 
                width={380} 
                height={450} 
                className="object-contain image-pixelated drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 relative z-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Escolha a sua jornada
              </h1>
              <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                Antes de iniciar qualquer trilha, entenda como funciona a dinâmica da plataforma. 
                Assista ao vídeo abaixo para aproveitar ao máximo a sua experiência de aprendizagem.
              </p>
            </div>

            <div className="relative w-full max-w-lg aspect-video rounded-2xl p-[2px] bg-gradient-to-br from-[#8A2BE2]/30 via-zinc-800 to-[#00BCD4]/30 shadow-xl group hover:shadow-[0_0_25px_rgba(138,43,226,0.15)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-[#8A2BE2]/10 blur-xl rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity z-0"></div>
              
              <div className="relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-zinc-950 border border-zinc-900 shadow-inner">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/SEU_LINK_AQUI" 
                  title="Vídeo de Instrução" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Trilhas <span className="text-zinc-500 font-medium">Disponíveis</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 via-zinc-800/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {temas.map((tema) => (
            <Link 
              href={tema.ativo ? `/${tema.id}` : '#'} 
              key={tema.id}
              className={`group relative flex flex-col sm:flex-row items-center p-6 rounded-3xl border transition-all duration-500 overflow-hidden ${
                tema.ativo 
                  ? `bg-zinc-900/60 backdrop-blur-xl border-zinc-800 hover:-translate-y-2 ${tema.corHover}` 
                  : 'bg-zinc-900/40 backdrop-blur-sm border-zinc-800/60 cursor-default opacity-85 grayscale-[50%] hover:grayscale-0 hover:opacity-100 transition-all duration-500'
              }`}
            >
              {tema.ativo && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}

              <div className="relative z-10 flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 bg-[#09090b] border border-zinc-800 rounded-2xl flex items-center justify-center p-4 mb-6 sm:mb-0 sm:mr-8 image-pixelated group-hover:border-zinc-600 transition-colors overflow-hidden shadow-inner">
                <div className="flex items-center justify-center">
                  {tema.personagens.map((imgSrc, idx) => (
                    <div 
                      key={idx} 
                      className={`relative drop-shadow-2xl ${idx > 0 ? '-ml-6 sm:-ml-8' : ''}`}
                      style={{ zIndex: tema.personagens.length - idx }}
                    >
                      <Image 
                        src={imgSrc} 
                        alt={`Personagem ${tema.titulo}`} 
                        width={tema.personagens.length > 1 ? 65 : 90} 
                        height={tema.personagens.length > 1 ? 65 : 90} 
                        className={`object-contain transition-transform duration-500 ${tema.ativo ? 'group-hover:scale-110 group-hover:-translate-y-2' : ''}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                  <div className="flex flex-col gap-2">
                    <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors ${tema.ativo ? 'text-zinc-100 group-hover:text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                      {tema.titulo}
                    </h2>
                    
                    {/* A TAG AGORA PEGA A COR DIRETAMENTE DO ARRAY! */}
                    <span className={`w-fit px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm border ${tema.corTag}`}>
                      {tema.categoria}
                    </span>
                  </div>
                  <span className={`w-fit px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full flex-shrink-0 ${
                    tema.ativo 
                      ? 'text-green-400 bg-green-400/10 border border-green-400/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]' 
                      : 'text-zinc-500 bg-zinc-900 border border-zinc-700'
                  }`}>
                    {tema.status}
                  </span>
                </div>
                
                <p className={`text-sm sm:text-base line-clamp-3 leading-relaxed ${tema.ativo ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {tema.descricao}
                </p>

                {tema.ativo && (
                  <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-100 text-zinc-950 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Acessar Módulos <span className="transition-transform duration-300 group-hover:translate-x-1">➔</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        @media (min-width: 768px) {
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(0); }
          }
        }
      `}} />
    </main>
  );
}