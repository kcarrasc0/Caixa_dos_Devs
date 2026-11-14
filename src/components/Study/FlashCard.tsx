'use client';

import { useState } from 'react';
import Image from 'next/image';
import CodeBlock from './CodeBlock';

interface FlashCardProps {
  title: string;
  content: string;
  type: 'text' | 'code' | 'interactive';
  codeSnippet?: string;
  interactiveId?: string;
  terminalOutput?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  isHtmlPreview?: boolean;
  themeColor?: string;
}

export default function FlashCard({ 
  title, 
  content, 
  type, 
  codeSnippet, 
  interactiveId, 
  terminalOutput, 
  tableData, 
  isHtmlPreview = false,
  themeColor = "#8A2BE2" 
}: FlashCardProps) {
  const [moedaState, setMoedaState] = useState(true);
  const [animando, setAnimando] = useState(false);

  const flipMoeda = () => {
    if (animando) return;
    setAnimando(true);
    setMoedaState(!moedaState);
    setTimeout(() => setAnimando(false), 500);
  };

  // A LÓGICA MÁGICA DO NAVEGADOR:
  // Se o terminalOutput tiver tags HTML reais (<div), é a nossa simulação do Flet/Tkinter.
  // Se for apenas o texto de placeholder antigo "[ O Mini Navegador... ]", ignoramos e usamos o codeSnippet original das aulas de HTML!
  const isFakeBrowserUI = terminalOutput && terminalOutput.includes('<div');
  const iframeContent = isFakeBrowserUI ? terminalOutput : codeSnippet;

  return (
    <div 
      className="flex w-full flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl transition-all min-h-[400px]"
      style={{ borderColor: `var(--hover-border-color, #27272a)` }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${themeColor}40`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#27272a')}
    >
      <div>
        <h2 className="mb-4 text-3xl font-bold" style={{ color: themeColor }}>
          {title}
        </h2>
        <p className="whitespace-pre-wrap text-lg leading-relaxed text-zinc-300">
          {content}
        </p>
    
        {tableData && tableData.headers && tableData.rows && (
          <div className="my-8 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-300">
                <thead className="bg-zinc-900 border-b border-zinc-700 text-xs uppercase tracking-wider" style={{ color: themeColor }}>
                  <tr>
                    {tableData.headers.map((header, idx) => (
                      <th key={idx} className="px-6 py-4 font-bold border-r border-zinc-800 last:border-0">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-zinc-800/40 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-6 py-4 border-r border-zinc-800 last:border-0 whitespace-nowrap">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {type === 'interactive' && interactiveId === 'mario-coin' && (
          <div className="my-8 flex flex-col items-center justify-center">
            <button 
              onClick={flipMoeda}
              className={`relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-yellow-600 bg-yellow-400 text-2xl font-black text-yellow-900 shadow-[0_0_20px_rgba(250,204,21,0.5)] outline-none transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 ${
                animando ? '-translate-y-12 rotate-180 scale-110 shadow-[0_30px_30px_rgba(250,204,21,0.8)]' : 'translate-y-0'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-2 rounded-full border-2 border-yellow-500 opacity-50"></div>
              {moedaState ? 'TRUE' : 'FALSE'}
            </button>
            <span className="mt-6 text-sm text-zinc-500 animate-pulse">Clique na moeda para jogar</span>
          </div>
        )}

        {type === 'interactive' && interactiveId === 'bigint-container' && (
          <div className="my-8 flex items-end justify-center gap-12 border-b border-zinc-800 pb-8">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center border-2 bg-zinc-950 p-2 shadow-lg" style={{ borderColor: `${themeColor}80` }}>
                <span className="text-[10px] font-bold" style={{ color: themeColor }}>Number</span>
              </div>
              <span className="mt-2 text-xs font-mono text-zinc-500">Caixa Padrão</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-32 w-48 items-center justify-center border-4 border-green-500/50 bg-zinc-950 p-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <span className="text-xl font-bold text-green-500 tracking-widest">BIG INT</span>
              </div>
              <span className="mt-2 text-xs font-mono text-zinc-500">O Contêiner</span>
            </div>
          </div>
        )}

        {codeSnippet && (
          <CodeBlock code={codeSnippet} />
        )}

        {/* Renderiza o Navegador Falso usando a lógica que criámos acima */}
        {isHtmlPreview && iframeContent ? (
          <div className="mt-6 rounded-xl border border-zinc-300 overflow-hidden bg-white shadow-lg flex flex-col">
            <div className="bg-zinc-200 px-4 py-2 border-b border-zinc-300 flex items-center gap-2">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">
                🌐 Navegador
              </span>
              <div className="ml-2 bg-white px-3 py-0.5 rounded shadow-sm text-[10px] text-zinc-500 font-mono flex-1 truncate">
                localhost:8550
              </div>
            </div>
            <div className="w-full text-black flex-1 flex bg-[#18181b]">
              <iframe
                srcDoc={iframeContent}
                className="w-full min-h-[350px] border-none flex-1"
                title="HTML Preview"
                sandbox="allow-scripts"
              />
            </div>
          </div>
        ) : terminalOutput && !isHtmlPreview ? (
          <div className="mt-2 overflow-hidden rounded-lg bg-[#0d1117] border border-zinc-800 font-mono text-sm shadow-inner">
            <div className="flex items-center bg-[#161b22] px-4 py-2 border-b border-zinc-800">
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Terminal Output</span>
            </div>
            <div className="p-4 flex flex-col">
              <div className="mb-2">
                <span className="text-green-400 font-semibold">kcarrasquinho@notebook</span>
                <span className="text-pink-500 font-semibold">:</span>
                <span className="text-blue-400 font-semibold">~/aula</span>
                <span className="text-zinc-300">$ executar script</span>
              </div>
              <div className="text-zinc-300 whitespace-pre-wrap pl-2 border-l-2 border-zinc-700">
                {terminalOutput}
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-green-400 font-semibold">kcarrasquinho@notebook</span>
                <span className="text-pink-500 font-semibold">:</span>
                <span className="text-blue-400 font-semibold">~/aula</span>
                <span className="text-zinc-300">$ <span className="animate-pulse bg-zinc-400 w-2 h-4 inline-block ml-1 align-middle"></span></span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}