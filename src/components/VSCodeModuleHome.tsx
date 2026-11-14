import Link from 'next/link';
import React from 'react';

interface Modulo {
  id: string;
  aula: string;
  titulo: string;
  descricao: string;
}

interface VSCodeProps {
  tema: string;
  extensao: string;
  modulos: Modulo[];
  corTema?: string; 
}

export default function VSCodeModuleHome({ tema, extensao, modulos, corTema = '#8A2BE2' }: VSCodeProps) {
  const fileName = `${tema}${extensao}`;

  return (
    <div className="flex flex-col h-screen w-full bg-[#18181f] text-[#cccccc] font-sans overflow-hidden selection:bg-[#264f78]">
      
      {/* ================= BARRA SUPERIOR (HEADER) ================= */}
      <header className="flex items-center justify-between h-10 bg-[#111116] border-b border-[#2b2b36] px-4 select-none relative z-20">
        <div className="flex items-center gap-4 text-[13px]">
          <div className="w-5 h-5 flex items-center justify-center text-blue-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 0 1.478l1.323 1.203a.999.999 0 0 0 1.276.056l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
          </div>
          <nav className="hidden md:flex gap-4 text-[#cccccc] hover:*:text-white *:cursor-pointer">
            <span>File</span><span>Edit</span><span>Selection</span><span>View</span><span>Go</span><span>Run</span><span>Terminal</span>
          </nav>
        </div>
        
        {/* Barra de Pesquisa */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[#1d1d24] border border-[#3c3c4a] rounded-md px-3 py-1 w-[400px] text-[12px] text-[#cccccc] gap-3 shadow-inner hidden md:flex">
          <span className="opacity-50">←</span>
          <span className="opacity-50">→</span>
          <span className="flex-1 text-center">Caixa_dos_Devs</span>
        </div>

        {/* Botões do Topo */}
        <div className="flex gap-4 items-center">
          
          {/* NOVO: Botão para o Simulador (Abre em Nova Guia) */}
          <Link 
            href={`/simulador?lang=${tema}`} 
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 rounded-md text-[11px] font-bold uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(34,197,94,0.1)]"
          >
            ▶ Abrir Simulador
          </Link>

          {/* Botão de Sair Original */}
          <Link 
            href="/temas" 
            className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-md text-[11px] font-bold uppercase tracking-wider transition-colors"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Sair
          </Link>
          
          {/* Controlos Clássicos do VS Code */}
          <div className="hidden sm:flex gap-3 opacity-60 ml-2">
            <div className="w-3 h-3 border-b-2 border-white mt-1 cursor-pointer hover:opacity-100"></div>
            <div className="w-3 h-3 border border-white mt-0.5 cursor-pointer hover:opacity-100"></div>
            <div className="text-white text-xl leading-none -mt-1.5 cursor-pointer hover:text-red-400">×</div>
          </div>
        </div>
      </header>

      {/* ================= CORPO PRINCIPAL ================= */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Barra de Atividades (Sidebar) */}
        <aside className="w-12 bg-[#111116] border-r border-[#2b2b36] flex flex-col items-center py-4 justify-between z-10">
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="text-white cursor-pointer relative border-l-2 pl-1 -ml-1" style={{ borderColor: corTema }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
            </div>
            <div className="text-zinc-600 hover:text-white cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
            </div>
          </div>
        </aside>

        {/* EDITOR DE CÓDIGO (ÁREA CENTRAL COM FUNDO ORIGINAL) */}
        <div className="flex-1 flex flex-col bg-[#09090b] relative">
          
          {/* Guias (Tabs) */}
          <div className="flex h-10 bg-[#111116] border-b border-[#2b2b36]">
            <div 
              className="flex items-center gap-2 px-5 bg-[#09090b] border-t-2 text-white text-[13px] cursor-default"
              style={{ borderColor: corTema }}
            >
              <span className="font-mono text-sm" style={{ color: corTema }}>{'{ }'}</span>
              <span className="font-medium tracking-wide">{fileName}</span>
            </div>
          </div>

          {/* Caminho do Ficheiro (Breadcrumbs) */}
          <div className="flex items-center px-5 h-8 text-[12px] text-zinc-500 bg-[#09090b] shadow-sm border-b border-zinc-900/50">
            <span>Caixa_dos_Devs</span> <span className="mx-2">/</span> 
            <span style={{ color: corTema }}>{tema}</span> <span className="mx-2">/</span> 
            <span className="text-zinc-300">{fileName}</span>
          </div>

          {/* ÁREA DOS CARDS DE MÓDULOS */}
          <div className="flex-1 overflow-auto p-8 relative">
            
            {/* Texto decorativo inicial tipo comentário de código */}
            <div className="font-mono text-[14px] text-[#6A9955] mb-8">
              <p>/**</p>
              <p> * Trilha de Aprendizagem: {tema.toUpperCase()}</p>
              <p> * @description Selecione um dos módulos abaixo para compilar e iniciar a aula.</p>
              <p> */</p>
            </div>

            {/* Grid de Cards arredondados estilo extensão */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {modulos.map((modulo) => (
                <Link 
                  href={`/${tema}/${modulo.id}`} 
                  key={modulo.id}
                  className="group flex flex-col justify-between p-7 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl hover:-translate-y-1 hover:bg-zinc-900/80 transition-all duration-300 min-h-[200px] relative overflow-hidden shadow-lg"
                  style={{ '--hover-border': corTema } as React.CSSProperties}
                >
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: corTema }}
                  ></div>
                  <div 
                    className="absolute inset-0 border-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ borderColor: `${corTema}40` }}
                  ></div>
                  
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between mb-2 font-mono">
                      <span 
                        className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border"
                        style={{ color: corTema, backgroundColor: `${corTema}15`, borderColor: `${corTema}30` }}
                      >
                        {modulo.aula}
                      </span>
                      <span className="text-[10px] text-zinc-500">{modulo.id}{extensao}</span>
                    </div>

                    <h2 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors">
                      {modulo.titulo}
                    </h2>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {modulo.descricao}
                    </p>
                  </div>
                  
                  <div 
                    className="relative z-10 mt-6 flex items-center font-mono text-[11px] font-bold transition-colors uppercase tracking-wider"
                    style={{ color: corTema }}
                  >
                    ▶ Inicializar <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= BARRA DE ESTADO (STATUS BAR) ================= */}
      <footer 
        className="flex items-center h-7 border-t px-3 text-[11px] text-white justify-between select-none z-20 font-sans"
        style={{ backgroundColor: corTema, borderColor: corTema }}
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1.5 py-0.5 rounded transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span>main*</span>
          </div>
          <div className="hidden sm:flex cursor-pointer hover:bg-white/20 px-1.5 py-0.5 rounded transition-colors">
            kcarrasc0/CAIXA-DOS-DEVS
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <span className="cursor-pointer hover:bg-white/20 px-1.5 py-0.5 rounded">UTF-8</span>
          <span className="cursor-pointer hover:bg-white/20 px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
            <span className="font-mono text-[10px]">{'{ }'}</span> {tema.toUpperCase()}
          </span>
        </div>
      </footer>
    </div>
  );
}