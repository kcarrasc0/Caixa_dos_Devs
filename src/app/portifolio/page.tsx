'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PortifolioTrack() {
  // Controle de estado para o fluxo da página: 'pergunta', 'nao', 'sim', 'modulos'
  const [fase, setFase] = useState<'pergunta' | 'nao' | 'sim' | 'modulos'>('pergunta');

  const modulos = [
    { 
      id: 'estrutura', 
      titulo: 'O Esqueleto do Portfólio', 
      descricao: 'Construindo o HTML semântico: Cabeçalho, Sobre Mim, Projetos e Contato.',
      aula: 'Módulo 1'
    },
    { 
      id: 'estilizacao', 
      titulo: 'Design e Aparência', 
      descricao: 'Aplicando CSS3 com Flexbox e Grid para deixar o portfólio moderno e responsivo.',
      aula: 'Módulo 2'
    },
    { 
      id: 'interatividade', 
      titulo: 'A Magia do JavaScript', 
      descricao: 'Adicionando interatividade: Menu mobile, rolagem suave e validação de formulário.',
      aula: 'Módulo 3'
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#8A2BE2] selection:text-white relative pb-24">
      <nav className="w-full max-w-5xl mx-auto p-6 flex items-center justify-between relative z-10">
        <Link href="/temas" className="group flex items-center gap-2 text-zinc-400 hover:text-[#8A2BE2] transition-colors font-medium">
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span> Voltar aos Temas
        </Link>
      </nav>

      {fase !== 'modulos' ? (
        <section className="max-w-3xl mx-auto px-6 pt-12 flex flex-col items-center justify-center text-center relative z-10 min-h-[60vh]">
          <div className="w-32 h-32 rounded-full bg-zinc-900 border-4 border-[#8A2BE2] flex items-center justify-center overflow-hidden image-pixelated mb-6 shadow-[0_0_30px_rgba(138,43,226,0.4)]">
            <Image src="/personagens/kcarrasquinho.png" alt="Kcarrasquinho" width={100} height={100} className="object-cover" />
          </div>

          {fase === 'pergunta' && (
            <div className="animate-fade-in w-full">
              
              {/* Balão de fala do Kcarrasquinho */}
              <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl mb-10 relative text-left shadow-lg">
                {/* Triângulo do balão apontando para cima */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-zinc-900 border-l border-t border-zinc-800 rotate-45"></div>
                
                <p className="text-zinc-300 italic mb-4 border-l-4 border-[#8A2BE2] pl-4 text-lg">
                  "Professor, entendi lógica de programação, consigo fazer interações via terminal, mas como isso vira um site real? Como na prática eu integro tudo?"
                </p>
                <p className="text-zinc-400 text-lg">
                  Após dúvidas de alguns estudantes como essa, resolvi criar uma trilha só para <span className="text-[#8A2BE2] font-bold">projetos!</span>
                </p>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-zinc-100">
                Mas antes, estudante: Você já estudou os conceitos básicos de <span className="text-[#8A2BE2]">HTML, CSS e JavaScript?</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button 
                  onClick={() => setFase('sim')}
                  className="px-8 py-3 bg-[#8A2BE2] hover:bg-[#7319c7] text-white font-bold rounded-xl transition-all transform active:scale-95"
                >
                  Sim, já estudei!
                </button>
                <button 
                  onClick={() => setFase('nao')}
                  className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold rounded-xl transition-all transform active:scale-95"
                >
                  Ainda não
                </button>
              </div>
            </div>
          )}

          {fase === 'nao' && (
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-zinc-100">
                Poxa...
              </h1>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Então sugiro que você estude os temas anteriores antes de vir para esse módulo. Precisamos da base forte para construir nosso projeto!
              </p>
              <Link 
                href="/temas"
                className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold rounded-xl transition-all inline-block"
              >
                Voltar aos Temas Anteriores
              </Link>
            </div>
          )}

          {fase === 'sim' && (
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-zinc-100">
                Perfeito! 🚀
              </h1>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Então inicie nossa jornada de aprendizado! Nos próximos módulos, aprenderemos a construir uma <span className="text-[#8A2BE2] font-bold">Landing Page Portfólio Simples</span> juntando as três tecnologias.
              </p>
              <button 
                onClick={() => setFase('modulos')}
                className="px-8 py-3 bg-[#8A2BE2] hover:bg-[#7319c7] text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(138,43,226,0.3)] transition-all transform active:scale-95"
              >
                Iniciar Projeto Portfólio
              </button>
            </div>
          )}
        </section>
      ) : (
        <div className="animate-fade-in">
          <header className="max-w-3xl mx-auto px-6 pt-10 pb-16 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-100">
              Projeto <span className="text-[#8A2BE2]">Portfólio</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Vamos construir sua presença digital unindo HTML, CSS e JavaScript.
            </p>
          </header>

          <section className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {modulos.map((modulo) => (
                <Link 
                  href={`/portifolio/${modulo.id}`} 
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
        </div>
      )}
    </main>
  );
}