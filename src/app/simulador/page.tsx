'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Editor from '@monaco-editor/react'; // ← O Motor oficial do VS Code!

// Importação dos ícones
import { SiHtml5, SiCss, SiJavascript, SiPython } from 'react-icons/si';
import { VscFileCode, VscDatabase } from 'react-icons/vsc';

// Configuração atualizada com as linguagens do Monaco Editor
const arquivosConfig = {
  'index.html': { 
    lang: 'HTML', monacoLang: 'html', color: '#e11d48', icon: SiHtml5, 
    initial: '<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <title>Caixa dos Devs</title>\n</head>\n<body>\n  <h1>Salve família!</h1>\n  <p>Edite este código para ver a mágica.</p>\n</body>\n</html>' 
  },
  'style.css': { 
    lang: 'CSS', monacoLang: 'css', color: '#3b82f6', icon: SiCss, 
    initial: 'body {\n  background-color: #09090b;\n  color: white;\n  font-family: sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\nh1 {\n  color: #8A2BE2;\n}' 
  },
  'script.js': { 
    lang: 'JavaScript', monacoLang: 'javascript', color: '#eab308', icon: SiJavascript, 
    initial: 'console.log("Iniciando a Caixa dos Devs...");\n\nfunction calcularXp(aulas) {\n  return aulas * 100;\n}\n\nconsole.log("Seu XP atual é:", calcularXp(5));' 
  },
  'main.py': { 
    lang: 'Python', monacoLang: 'python', color: '#0206e6', icon: SiPython, 
    initial: 'print("Salve família! Maximo do rexxpeitinho!")\n\ndef saudacao(nome):\n    return f"Seja bem-vindo, {nome}!"\n\nprint(saudacao("Dev"))' 
  },
  'algoritmo.alg': { 
    lang: 'Portugol', monacoLang: 'plaintext', color: '#E5D3B3', icon: VscFileCode, 
    initial: 'algoritmo "PrimeiroPrograma"\nvar\n  mensagem: caractere\ninicio\n  mensagem <- "Bora codar!"\n  escreval(mensagem)\nfimalgoritmo' 
  },
  'query.sql': { 
    lang: 'SQL', monacoLang: 'sql', color: '#1e3a8a', icon: VscDatabase, 
    initial: 'SELECT nome, xp \nFROM alunos \nWHERE status = \'ativo\' \nORDER BY xp DESC;' 
  }
};

type NomeArquivo = keyof typeof arquivosConfig;

export default function SimuladorPage() {
  const [activeFile, setActiveFile] = useState<NomeArquivo>('script.js');
  const [codigos, setCodigos] = useState<Record<string, string>>({});
  const [terminalOutput, setTerminalOutput] = useState<string>('Caixa_dos_Devs_Compiler v1.0.0\nAmbiente virtual pronto. Aguardando execução...');
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  
  useEffect(() => {
    const iniciais: Record<string, string> = {};
    (Object.keys(arquivosConfig) as NomeArquivo[]).forEach(file => {
      iniciais[file] = arquivosConfig[file].initial;
    });
    setCodigos(iniciais);

    const urlParams = new URLSearchParams(window.location.search);
    const langUrl = urlParams.get('lang');
    if (langUrl) {
      if (langUrl === 'html') setActiveFile('index.html');
      else if (langUrl === 'css') setActiveFile('style.css');
      else if (langUrl === 'javascript') setActiveFile('script.js');
      else if (langUrl === 'python' || langUrl === 'flet' || langUrl === 'tkinter') setActiveFile('main.py');
      else if (langUrl === 'portugol') setActiveFile('algoritmo.alg');
      else if (langUrl === 'postgresql' || langUrl === 'mysql') setActiveFile('query.sql');
    }
  }, []);

  // Agora o Monaco Editor devolve apenas o texto, não um evento HTML
  const handleCodeChange = (value: string | undefined) => {
    setCodigos(prev => ({ ...prev, [activeFile]: value || '' }));
  };

  const handleRunCode = () => {
    setIsTerminalOpen(true);
    const time = new Date().toLocaleTimeString();
    setTerminalOutput(prev => prev + `\n\n[${time}] ~/Caixa_dos_Devs $ executar ${activeFile}\n> Compilação concluída com sucesso! (Modo Simulação)`);
  };

  const currentConfig = arquivosConfig[activeFile];
  const IconeAtivo = currentConfig.icon;

  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] text-[#cccccc] font-sans overflow-hidden selection:bg-[#264f78]">
      
      {/* HEADER */}
      <header className="flex items-center justify-between h-10 bg-[#111116] border-b border-[#2b2b36] px-4 select-none relative z-20">
        <div className="flex items-center gap-4 text-[13px]">
          <div className="w-5 h-5 flex items-center justify-center text-blue-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 0 1.478l1.323 1.203a.999.999 0 0 0 1.276.056l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
          </div>
          <nav className="hidden md:flex gap-4 text-[#cccccc] hover:*:text-white *:cursor-pointer">
            <span>File</span><span>Edit</span><span>Selection</span><span>View</span><span>Go</span><span>Run</span><span>Terminal</span>
          </nav>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[#1d1d24] border border-[#3c3c4a] rounded-md px-3 py-1 w-[400px] text-[12px] text-[#cccccc] gap-3 shadow-inner hidden md:flex">
          <span className="opacity-50">←</span>
          <span className="opacity-50">→</span>
          <span className="flex-1 text-center font-medium">Simulador - {activeFile}</span>
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={() => window.close()} 
            className="hidden sm:flex text-[11px] font-bold text-zinc-400 hover:text-white border border-zinc-700 hover:bg-zinc-800 px-3 py-1 rounded transition-colors"
          >
            Sair do Simulador
          </button>
          <div className="flex gap-3 opacity-60 ml-2">
            <div className="w-3 h-3 border-b-2 border-white mt-1 cursor-pointer hover:opacity-100"></div>
            <div className="w-3 h-3 border border-white mt-0.5 cursor-pointer hover:opacity-100"></div>
            <div className="text-white text-xl leading-none -mt-1.5 cursor-pointer hover:text-red-400">×</div>
          </div>
        </div>
      </header>

      {/* CORPO PRINCIPAL */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* ACTIVITY BAR */}
        <aside className="w-12 bg-[#111116] border-r border-[#2b2b36] flex-col items-center py-4 justify-between z-10 hidden md:flex">
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="text-white cursor-pointer relative border-l-2 pl-1 -ml-1" style={{ borderColor: currentConfig.color }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
            </div>
            <div className="text-zinc-500 hover:text-white cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
            </div>
            <div className="text-zinc-500 hover:text-white cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 1dc-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S8.88 1 7.5 1zM7.5 11.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM17.5 11.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM7.5 6v5.5M17.5 6v5.5"></path></svg>
            </div>
          </div>
        </aside>

        {/* EXPLORER LATERAL */}
        <aside className="w-60 bg-[#18181f] border-r border-[#2b2b36] flex-col hidden sm:flex">
          <div className="text-[11px] font-bold text-zinc-400 p-4 pb-2">
            EXPLORER
          </div>
          <div className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-bold text-zinc-200 cursor-pointer hover:bg-[#2a2d36] transition-colors">
            <span className="text-[10px]">▼</span> CAIXA_DOS_DEVS
          </div>
          
          <div className="mt-1 flex flex-col">
            {(Object.keys(arquivosConfig) as NomeArquivo[]).forEach(file => {
              const fileConfig = arquivosConfig[file];
              const FileIcon = fileConfig.icon;
              const isActive = activeFile === file;
              
              return (
                <button
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`flex items-center gap-2.5 px-8 py-1.5 text-[13px] text-left transition-colors ${
                    isActive ? 'bg-[#37373d] text-white' : 'text-zinc-400 hover:bg-[#2a2d36] hover:text-zinc-200'
                  }`}
                >
                  <FileIcon size={16} color={fileConfig.color} />
                  {file}
                </button>
              );
            })}
          </div>
        </aside>

        {/* EDITOR AREA */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] relative">
          
          {/* GUIAS (TABS) */}
          <div className="flex justify-between items-end bg-[#18181f] border-b border-[#2b2b36] pr-2">
            <div className="flex overflow-x-auto">
              <div 
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1e1e1e] border-t-2 text-white text-[13px] min-w-fit cursor-default" 
                style={{ borderColor: currentConfig.color }}
              >
                <IconeAtivo size={16} color={currentConfig.color} />
                <span className="font-medium">{activeFile}</span>
                <span className="ml-2 text-zinc-500 hover:text-white cursor-pointer hover:bg-zinc-700/50 rounded p-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
              </div>
            </div>

            {/* BOTÃO DE PLAY */}
            <div className="flex items-center gap-3 mb-1.5 mr-2 z-10">
              <button 
                onClick={handleRunCode}
                className="flex items-center gap-1.5 px-3 py-1 bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-green-400 border border-zinc-700 hover:border-green-500/50 rounded text-xs font-bold transition-all shadow-sm group"
              >
                <svg className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                Executar
              </button>
            </div>
          </div>

          {/* BREADCRUMBS */}
          <div className="flex items-center px-5 h-7 text-[12px] text-zinc-500 bg-[#1e1e1e] shadow-sm border-b border-zinc-800/50">
            <span>Caixa_dos_Devs</span> <span className="mx-2">{'>'}</span> 
            <span style={{ color: currentConfig.color }}>{currentConfig.lang}</span> <span className="mx-2">{'>'}</span> 
            <span className="text-zinc-300 flex items-center gap-1.5">
              <IconeAtivo size={12} color={currentConfig.color} />
              {activeFile}
            </span>
          </div>

          {/* ÁREA DE TEXTO (MONACO EDITOR) */}
          <div className="flex-1 overflow-hidden relative">
            <Editor
              height="100%"
              theme="vs-dark"
              language={currentConfig.monacoLang}
              value={codigos[activeFile]}
              onChange={handleCodeChange}
              options={{
                minimap: { enabled: false }, // Oculta o mapa lateral para manter mais limpo
                fontSize: 14,
                fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                padding: { top: 16 },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: "smooth",
                renderLineHighlight: "all"
              }}
            />
          </div>

          {/* TERMINAL INFERIOR */}
          {isTerminalOpen && (
            <div className="h-52 bg-[#1e1e1e] border-t border-[#2b2b36] flex flex-col shadow-[0_-10px_20px_rgba(0,0,0,0.15)] z-10">
              <div className="flex items-center justify-between px-4 h-9 border-b border-[#2b2b36]">
                <div className="flex gap-6 text-[11px] font-bold tracking-wider">
                  <span className="text-zinc-500 cursor-pointer hover:text-zinc-300">PROBLEMS</span>
                  <span className="text-zinc-500 cursor-pointer hover:text-zinc-300">OUTPUT</span>
                  <span className="text-zinc-500 cursor-pointer hover:text-zinc-300">DEBUG CONSOLE</span>
                  <span className="text-white cursor-pointer border-b border-blue-500 pb-2 -mb-[9px]">TERMINAL</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setTerminalOutput('')} className="text-zinc-500 hover:text-white" title="Limpar Terminal">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                  <button onClick={() => setIsTerminalOpen(false)} className="text-zinc-500 hover:text-white" title="Fechar Painel">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              </div>
              <div className="p-4 font-mono text-[13px] text-zinc-300 flex-1 overflow-y-auto whitespace-pre-wrap">
                <span className="text-green-400">~/Caixa_dos_Devs</span> <span className="text-blue-400">master</span><br/>
                {terminalOutput}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* STATUS BAR */}
      <footer 
        className="flex items-center h-6 px-3 text-[11px] text-white justify-between select-none z-20 font-sans" 
        style={{ backgroundColor: currentConfig.color }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span>main*</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            <span className="flex items-center gap-1"><span className="text-xs">⊗</span> 0</span>
            <span className="flex items-center gap-1"><span className="text-xs">⚠</span> 0</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <span className="cursor-pointer hover:bg-white/20 px-1 rounded">UTF-8</span>
          <span className="cursor-pointer hover:bg-white/20 px-1 rounded font-bold flex items-center gap-1">
            <IconeAtivo size={12} color="white" />
            {currentConfig.lang.toUpperCase()}
          </span>
          <span className="cursor-pointer hover:bg-white/20 px-1 rounded flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Go Live
          </span>
        </div>
      </footer>
    </div>
  );
}