import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Componente Interno para gerar as formas geométricas que vão flutuar pela página
const BackgroundGeometry = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-[#8A2BE2]/10 blur-[150px] rounded-full"></div>
    <div className="absolute top-[30%] right-[5%] w-[600px] h-[600px] bg-[#00BCD4]/5 blur-[150px] rounded-full"></div>
    <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-[#F29111]/5 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#8A2BE2]/15 blur-[200px] rounded-full"></div>

    <div className="absolute top-[10%] left-[5%] w-10 h-10 border-4 border-[#ff5ebd] rounded-full opacity-30 animate-[bounce_5s_infinite]"></div>
    <div className="absolute top-[15%] right-[15%] w-16 h-16 border-[4px] border-dashed border-[#00BCD4] opacity-20 animate-[spin_15s_linear_infinite]"></div>
    <div className="absolute top-[40%] left-[8%] w-8 h-8 bg-[#ffe600] rounded-sm opacity-20 animate-[spin_8s_linear_infinite_reverse]"></div>
    <div className="absolute top-[45%] right-[8%] w-24 h-24 border-2 border-[#8A2BE2] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-20 animate-[spin_20s_linear_infinite]"></div>
    <div className="absolute bottom-[30%] left-[15%] w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full animate-[pulse_6s_infinite]"></div>
    <div className="absolute bottom-[35%] right-[12%] w-10 h-10 border-[3px] border-[#ff0000] rounded-full opacity-20 animate-[bounce_6s_infinite]"></div>
    <div className="absolute bottom-[10%] left-[40%] w-6 h-6 bg-[#00BCD4] rounded-sm opacity-30 animate-[spin_10s_linear_infinite]"></div>
  </div>
);

export default function Home() {
  const trilhasCarrossel = [
    { nome: "Python", cor: "#8A2BE2", tag: "Backend" },
    { nome: "Flet", cor: "#00BCD4", tag: "Interfaces" },
    { nome: "Tkinter", cor: "#8A2BE2", tag: "Desktop" },
    { nome: "PostgreSQL", cor: "#3b82f6", tag: "Banco de Dados" },
    { nome: "MySQL", cor: "#F29111", tag: "Banco de Dados" },
    { nome: "JavaScript", cor: "#eab308", tag: "Lógica" },
    { nome: "HTML & CSS", cor: "#ef4444", tag: "Estrutura" },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-[#8A2BE2] selection:text-white overflow-x-hidden relative">
      
      <BackgroundGeometry />
      
      {/* 
        =========================================
        SEÇÃO 1: HERO
        =========================================
      */}
      <section className="relative min-h-[90vh] flex items-center px-6 border-b border-zinc-900/50 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
          
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 w-fit mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A2BE2]">A Caixa foi aberta</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-[1.1] drop-shadow-sm">
              Abra a mente, <br /> o código vem <br /> para o <span className="text-[#8A2BE2]">mundo real</span>.
            </h1>
            
            <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-lg font-medium leading-relaxed">
              Esqueça a teoria maçante. Uma plataforma visual, interativa e direta ao ponto para você dominar as tecnologias mais exigidas do mercado.
            </p>

            <Link 
              href="/temas" 
              className="mt-10 group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#8A2BE2] text-white font-bold text-lg rounded-2xl overflow-hidden transition-transform active:scale-95 shadow-[0_10px_30px_rgba(138,43,226,0.3)] hover:shadow-[0_10px_40px_rgba(138,43,226,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span>Comece Agora</span>
              <span className="group-hover:translate-x-1 transition-transform">➔</span>
            </Link>
          </div>

          <div className="relative flex justify-center items-center h-[500px] lg:h-[600px] mt-12 lg:mt-0">
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-[#8A2BE2] to-[#00BCD4] rounded-full opacity-15 blur-3xl animate-[pulse_4s_infinite]"></div>
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] border-[2px] border-dashed border-[#8A2BE2]/40 rounded-3xl animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#ffe600] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-30 animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="relative z-20 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2 group/balao cursor-default">
              
              <div className="absolute -top-16 -right-4 md:-right-12 w-48 md:w-56 bg-white text-zinc-950 text-sm md:text-base font-bold text-center p-4 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] opacity-0 scale-75 origin-bottom-left transition-all duration-300 ease-out group-hover/balao:opacity-100 group-hover/balao:scale-100 z-30 pointer-events-none">
                "Aprenda, se divirta e pratique, agora depende de você!"
                <div className="absolute -bottom-2 left-8 w-5 h-5 bg-white rotate-45 rounded-sm"></div>
              </div>

              <Image 
                src="/personagens/kcarrasquinho-caixa.png" 
                alt="Kcarrasquinho segurando a Caixa dos Devs" 
                width={500} 
                height={500}
                className="object-contain image-pixelated relative z-20"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        =========================================
        SEÇÃO 1.5: APRESENTAÇÃO (VÍDEO YOUTUBE)
        =========================================
      */}
      <section className="relative py-32 flex flex-col items-center justify-center px-6 border-b border-zinc-900/50 z-10 overflow-hidden">
        
        {/* Efeitos de Fundo Locais do Vídeo - Opacidade e blur mais sutis */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8A2BE2]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-20 right-[15%] w-16 h-16 border-4 border-[#00BCD4] opacity-20 animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute bottom-20 left-[15%] w-12 h-12 bg-[#ff5ebd] rounded-full opacity-20 blur-md animate-[pulse_4s_infinite]"></div>
        
        <div className="z-10 flex flex-col items-center w-full max-w-5xl text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12">
            Mas afinal, o que é a <span className="text-[#8A2BE2]">Caixa dos Devs?</span>
          </h2>

          {/* Container do Vídeo com Borda Brilhante Reduzida */}
          <div className="relative w-full max-w-4xl aspect-video rounded-3xl p-[2px] bg-gradient-to-br from-[#8A2BE2]/30 via-zinc-800 to-[#00BCD4]/30 shadow-[0_0_20px_rgba(138,43,226,0.1)] group hover:shadow-[0_0_30px_rgba(138,43,226,0.2)] transition-shadow duration-500">
            
            {/* Efeito Glow Interno - Mais suave */}
            <div className="absolute inset-0 bg-[#8A2BE2]/10 blur-xl rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0"></div>
            
            {/* O iFrame do YouTube */}
            <div className="relative z-10 w-full h-full rounded-[22px] overflow-hidden bg-zinc-950 border border-zinc-900 shadow-inner">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/4K_C1n6FpPM?t=3s" 
                title="Apresentação Caixa dos Devs" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* 
        =========================================
        SEÇÃO 2: O CRIADOR (COM GLASSMORPHISM)
        =========================================
      */}
      <section className="relative py-28 border-b border-zinc-900/50 z-10 bg-zinc-950/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative flex justify-center items-center order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="absolute top-4 -left-4 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-[#ffe600] rounded-full z-0 shadow-lg"></div>
            
            <div className="relative w-[300px] h-[350px] md:w-[380px] md:h-[450px] bg-[#00BCD4] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden z-10 shadow-2xl transition-transform duration-700 hover:rotate-2">
              <Image 
                src="/colabkcarrasco.png" 
                alt="Erick Carrasco e Avatar" 
                fill
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            <div className="absolute bottom-4 -right-4 md:-right-8 w-32 h-32 md:w-40 md:h-40 border-4 border-[#ff5ebd] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-20 opacity-80 pointer-events-none animate-[spin_20s_linear_infinite]"></div>
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2 z-10">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              A mente<br/>por trás da<br/><span className="text-[#8A2BE2]">Caixa.</span>
            </h2>
            
            <div className="mt-4 flex flex-col gap-4 text-zinc-300 text-lg leading-relaxed max-w-lg">
              <p>
                <strong>Olá, eu sou o Erick Carrasco.</strong> Sou instrutor técnico de desenvolvimento de software no Senac PE e fundador da NOOK Corporation.
              </p>
              <p>
                A Caixa dos Devs nasceu de uma necessidade real das minhas salas de aula: transformar documentações técnicas densas e conceitos abstratos num formato altamente visual, mastigado e direto ao ponto.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="px-4 py-1.5 bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 text-[#8A2BE2] rounded-full text-sm font-bold uppercase tracking-wider">Educação</span>
              <span className="px-4 py-1.5 bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] rounded-full text-sm font-bold uppercase tracking-wider">Front-end</span>
              <span className="px-4 py-1.5 bg-[#F29111]/10 border border-[#F29111]/30 text-[#F29111] rounded-full text-sm font-bold uppercase tracking-wider">Python</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a 
                href="https://kcarrasco.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-lg"
              >
                Ver Portfólio
              </a>
              <Link 
                href="/temas" 
                className="px-8 py-3 bg-transparent border border-zinc-500 text-white font-bold rounded-xl hover:border-white transition-colors flex items-center gap-2"
              >
                Acessar Cursos <span>↗</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 
        =========================================
        SEÇÃO 3: O QUE VOCÊ ENCONTRA AQUI?
        =========================================
      */}
      <section className="w-full bg-zinc-950 pt-24 border-b border-zinc-900/50 z-10 relative">
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">O que você encontra aqui?</h2>
          <p className="text-zinc-400 text-lg">Um ecossistema completo guiado pelos nossos personagens.</p>
        </div>

        <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px]">
          
          <div className="group relative flex-1 bg-[#0206e6] flex flex-col items-center pt-10 pb-48 md:pb-0 overflow-hidden transition-all duration-500 ease-out hover:flex-[1.3] border-b md:border-b-0 md:border-r border-zinc-950/20 cursor-default">
            <div className="flex flex-col items-center z-10 text-white drop-shadow-md">
              <span className="text-4xl font-black mb-3 tracking-tighter">{'</>'}</span>
              <span className="font-bold tracking-widest uppercase text-xs">Backend</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[240px] transition-transform duration-500 group-hover:scale-110 origin-bottom image-pixelated drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
              <Image src="/personagens/python.png" alt="Python" width={240} height={240} className="object-contain" />
            </div>
          </div>

          <div className="group relative flex-1 bg-[#ffe600] flex flex-col items-center pt-10 pb-48 md:pb-0 overflow-hidden transition-all duration-500 ease-out hover:flex-[1.3] border-b md:border-b-0 md:border-r border-zinc-950/20 cursor-default">
            <div className="flex flex-col items-center z-10 text-black drop-shadow-sm">
              <span className="text-4xl font-black mb-3 tracking-tighter">{'{ }'}</span>
              <span className="font-bold tracking-widest uppercase text-xs">Lógica</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[240px] transition-transform duration-500 group-hover:scale-110 origin-bottom image-pixelated drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]">
              <Image src="/personagens/javascript.png" alt="JavaScript" width={240} height={240} className="object-contain" />
            </div>
          </div>

          <div className="group relative flex-1 bg-[#ff0000] flex flex-col items-center pt-10 pb-48 md:pb-0 overflow-hidden transition-all duration-500 ease-out hover:flex-[1.3] border-b md:border-b-0 md:border-r border-zinc-950/20 cursor-default">
            <div className="flex flex-col items-center z-10 text-white drop-shadow-md">
              <span className="text-4xl font-black mb-3 tracking-tighter">{'< >'}</span>
              <span className="font-bold tracking-widest uppercase text-xs">Estrutura</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[240px] transition-transform duration-500 group-hover:scale-110 origin-bottom image-pixelated drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
              <Image src="/personagens/html.png" alt="HTML" width={240} height={240} className="object-contain" />
            </div>
          </div>

          <div className="group relative flex-1 bg-[#ff5ebd] flex flex-col items-center pt-10 pb-48 md:pb-0 overflow-hidden transition-all duration-500 ease-out hover:flex-[1.3] border-b md:border-b-0 md:border-r border-zinc-950/20 cursor-default">
            <div className="flex flex-col items-center z-10 text-white drop-shadow-md">
              <span className="text-4xl font-black mb-3 tracking-tighter">{'# .'}</span>
              <span className="font-bold tracking-widest uppercase text-xs">Estilização</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[240px] transition-transform duration-500 group-hover:scale-110 origin-bottom image-pixelated drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
              <Image src="/personagens/css.png" alt="CSS" width={240} height={240} className="object-contain" />
            </div>
          </div>

          <div className="group relative flex-1 bg-[#000000] flex flex-col items-center pt-10 pb-48 md:pb-0 overflow-hidden transition-all duration-500 ease-out hover:flex-[1.3] cursor-default">
            <div className="flex flex-col items-center z-10 text-white drop-shadow-md">
              <span className="text-4xl font-black mb-3 tracking-tighter">SQL</span>
              <span className="font-bold tracking-widest uppercase text-xs">Dados</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[240px] transition-transform duration-500 group-hover:scale-110 origin-bottom image-pixelated drop-shadow-[0_15px_15px_rgba(255,255,255,0.1)]">
              <Image src="/personagens/mysql.png" alt="MySQL" width={240} height={240} className="object-contain" />
            </div>
          </div>

        </div>
      </section>

      {/* 
        =========================================
        SEÇÃO 4: CARROSSEL DE CURSOS
        =========================================
      */}
      <section className="py-24 relative overflow-hidden z-10 bg-zinc-950/80 backdrop-blur-sm border-t border-zinc-900/50">
        
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        
        <div className="text-center mb-12 relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Domine o Stack Completo</h2>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex w-max animate-marquee space-x-6 px-6 group-hover:[animation-play-state:paused]">
            
            {[...trilhasCarrossel, ...trilhasCarrossel].map((trilha, idx) => (
              <div 
                key={idx} 
                className="w-72 flex-shrink-0 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-950 border border-zinc-800 shadow-inner">
                    <span className="text-xl font-bold" style={{ color: trilha.cor }}>{'</>'}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-950 border border-zinc-800 text-zinc-400">
                    {trilha.tag}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white">{trilha.nome}</h3>
                  <Link href="/temas" className="text-sm mt-2 inline-block font-medium hover:underline" style={{ color: trilha.cor }}>
                    Acessar Módulos →
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </main>
  );
}