'use client';

import React, { useState, useEffect } from 'react';
import { FiSun, FiMonitor, FiType, FiMousePointer, FiArrowUp } from 'react-icons/fi';
import { MdAccessibilityNew } from 'react-icons/md';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isA11yOpen, setIsA11yOpen] = useState(false);

  // Estados de Acessibilidade
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isLargeCursor, setIsLargeCursor] = useState(false);

  // Monitora o scroll para mostrar/esconder o botão "Voltar ao topo"
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Funções de Acessibilidade
  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode-a11y');
  };

  const toggleMonochrome = () => {
    setIsMonochrome(!isMonochrome);
    document.body.classList.toggle('monochrome-a11y');
  };

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    document.body.classList.toggle('large-text-a11y');
  };

  const toggleLargeCursor = () => {
    setIsLargeCursor(!isLargeCursor);
    document.body.classList.toggle('large-cursor-a11y');
  };

  // A MÁGICA: Deteta se há algum filtro visual ativo que bugue o Chrome
  const hasFilter = isLightMode || isMonochrome;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-[9999]">
      
      {/* MENU DE ACESSIBILIDADE */}
      <div 
        className={`w-60 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform origin-bottom-right transition-all duration-300 ease-out ${
          isA11yOpen 
            ? 'opacity-100 visible translate-y-0 scale-100' 
            : 'opacity-0 invisible translate-y-4 scale-95 pointer-events-none'
        } ${
          hasFilter 
            ? 'bg-zinc-900' // Fundo sólido (Contorna o Bug do Navegador)
            : 'bg-zinc-900/90 backdrop-blur-xl' // Vidro Fosco (Normal)
        }`}
      >
        <div className="flex flex-col gap-1 mb-2 pb-3 border-b border-white/5">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8A2BE2] bg-[#8A2BE2]/10 px-2 py-0.5 rounded w-fit border border-[#8A2BE2]/20">
            Inclusão
          </span>
          <h4 className="m-0 text-[1.1rem] text-zinc-100 font-extrabold tracking-tight">
            Acessibilidade
          </h4>
        </div>
        
        <div className="flex flex-col gap-2">
          <button 
            onClick={toggleLightMode} 
            className={`w-full bg-transparent border border-transparent text-zinc-400 text-sm font-semibold flex items-center gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 text-left hover:bg-white/5 hover:text-zinc-200 ${
              isLightMode ? '!bg-[#8A2BE2]/10 !text-white !border-[#8A2BE2]/30' : ''
            }`}
          >
            <FiSun className={`text-[1.1rem] ${isLightMode ? 'text-[#8A2BE2]' : ''}`} />
            <span>Modo Claro</span>
          </button>
          
          <button 
            onClick={toggleMonochrome} 
            className={`w-full bg-transparent border border-transparent text-zinc-400 text-sm font-semibold flex items-center gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 text-left hover:bg-white/5 hover:text-zinc-200 ${
              isMonochrome ? '!bg-[#8A2BE2]/10 !text-white !border-[#8A2BE2]/30' : ''
            }`}
          >
            <FiMonitor className={`text-[1.1rem] ${isMonochrome ? 'text-[#8A2BE2]' : ''}`} />
            <span>Monocromático</span>
          </button>
          
          <button 
            onClick={toggleLargeText} 
            className={`w-full bg-transparent border border-transparent text-zinc-400 text-sm font-semibold flex items-center gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 text-left hover:bg-white/5 hover:text-zinc-200 ${
              isLargeText ? '!bg-[#8A2BE2]/10 !text-white !border-[#8A2BE2]/30' : ''
            }`}
          >
            <FiType className={`text-[1.1rem] ${isLargeText ? 'text-[#8A2BE2]' : ''}`} />
            <span>Aumentar Texto</span>
          </button>
          
          <button 
            onClick={toggleLargeCursor} 
            className={`w-full bg-transparent border border-transparent text-zinc-400 text-sm font-semibold flex items-center gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 text-left hover:bg-white/5 hover:text-zinc-200 ${
              isLargeCursor ? '!bg-[#8A2BE2]/10 !text-white !border-[#8A2BE2]/30' : ''
            }`}
          >
            <FiMousePointer className={`text-[1.1rem] ${isLargeCursor ? 'text-[#8A2BE2]' : ''}`} />
            <span>Cursor Grande</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* BOTÃO 1: ACESSIBILIDADE */}
        <button 
          className={`w-[50px] h-[50px] flex justify-center items-center rounded-2xl border border-white/10 shadow-lg text-zinc-400 cursor-pointer transition-all duration-300 outline-none hover:-translate-y-1 hover:text-white group ${
            isA11yOpen 
              ? 'bg-[#8A2BE2]/20 border-[#8A2BE2]/50 !text-white shadow-[0_10px_25px_rgba(138,43,226,0.25)]' 
              : hasFilter 
                ? 'bg-zinc-950 hover:bg-[#8A2BE2]/15 hover:border-[#8A2BE2]/50' // Cor Sólida Protetora
                : 'bg-zinc-950/70 backdrop-blur-md hover:bg-[#8A2BE2]/15 hover:border-[#8A2BE2]/50' // Vidro Normal
          }`}
          onClick={() => setIsA11yOpen(!isA11yOpen)}
          title="Ferramentas de Acessibilidade"
        >
          <MdAccessibilityNew 
            size={24} 
            className={`transition-transform duration-300 group-hover:scale-110 group-hover:text-[#8A2BE2] ${
              isA11yOpen ? 'scale-110 text-[#8A2BE2]' : ''
            }`} 
          />
        </button>

        {/* BOTÃO 2: VOLTAR AO TOPO */}
        <button 
          className={`w-[50px] h-[50px] flex justify-center items-center rounded-full border border-white/10 shadow-lg text-zinc-400 cursor-pointer transition-all duration-300 outline-none hover:-translate-y-1 hover:text-white hover:shadow-[0_10px_25px_rgba(138,43,226,0.25)] group ${
            hasFilter 
              ? 'bg-zinc-950 hover:bg-[#8A2BE2]/15 hover:border-[#8A2BE2]/50' 
              : 'bg-zinc-950/70 backdrop-blur-md hover:bg-[#8A2BE2]/15 hover:border-[#8A2BE2]/50'
          } ${
            isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5 pointer-events-none'
          }`}
          onClick={scrollToTop}
          title="Voltar ao topo"
        >
          <FiArrowUp size={24} className="transition-transform duration-300 group-hover:scale-110 group-hover:text-[#8A2BE2]" />
        </button>
      </div>
      
    </div>
  );
};

export default FloatingButtons;