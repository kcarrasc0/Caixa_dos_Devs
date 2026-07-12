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
}

export default function FlashCard({ title, content, type, codeSnippet, interactiveId, terminalOutput, tableData }: FlashCardProps) {
  const [moedaState, setMoedaState] = useState(true);
  const [animando, setAnimando] = useState(false);

  const flipMoeda = () => {
    if (animando) return;
    setAnimando(true);
    setMoedaState(!moedaState);
    setTimeout(() => setAnimando(false), 500);
  };

  return (
    <div className="flex w-full flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl transition-all hover:border-[#8A2BE2]/30 min-h-[400px]">
      
      <div>
        <h2 className="mb-4 text-3xl font-bold text-[#8A2BE2]">
          {title}
        </h2>
        <p className="whitespace-pre-wrap text-lg leading-relaxed text-zinc-300">
          {content}
        </p>
    
        {tableData && tableData.headers && tableData.rows && (
          <div className="my-8 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-300">
                <thead className="bg-zinc-900 border-b border-zinc-700 text-xs uppercase tracking-wider text-[#8A2BE2]">
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
              <div className="flex h-16 w-16 items-center justify-center border-2 border-[#8A2BE2]/50 bg-zinc-950 p-2 shadow-lg">
                <span className="text-[10px] font-bold text-[#8A2BE2]">Number</span>
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

        {type === 'interactive' && interactiveId === 'symbol-cpf' && (
          <div className="my-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex w-64 flex-col rounded-xl border-2 border-blue-500/30 bg-[#0a192f] p-4 shadow-xl">
              <div className="flex justify-between border-b border-blue-500/20 pb-2">
                <span className="text-[10px] font-bold uppercase text-blue-400">Identidade Única</span>
                <span className="text-[10px] font-mono text-zinc-500">ID: Symbol_01</span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-lg bg-zinc-900 border border-blue-500/50 image-pixelated">
                  <Image src="/personagens/kcarrasquinho.png" alt="Kcarrasquinho" width={56} height={56} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500">Nome</span>
                  <span className="text-sm font-bold text-zinc-200">Kcarrasquinho</span>
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-red-500">!==</span>
            <div className="flex w-64 flex-col rounded-xl border-2 border-emerald-500/30 bg-[#0a2f1f] p-4 shadow-xl">
              <div className="flex justify-between border-b border-emerald-500/20 pb-2">
                <span className="text-[10px] font-bold uppercase text-emerald-400">Identidade Única</span>
                <span className="text-[10px] font-mono text-zinc-500">ID: Symbol_31</span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-lg bg-zinc-900 border border-emerald-500/50 image-pixelated">
                  <Image src="/personagens/kcarrasquinho.png" alt="Kcarrasquinho" width={56} height={56} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500">Nome</span>
                  <span className="text-sm font-bold text-zinc-200">Kcarrasquinho</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {codeSnippet && (
          <CodeBlock code={codeSnippet} />
        )}

        {terminalOutput && (
          <div className="mt-2 overflow-hidden rounded-lg bg-[#0d1117] border border-zinc-800 font-mono text-sm shadow-inner">
            <div className="flex items-center bg-[#161b22] px-4 py-2 border-b border-zinc-800">
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Terminal Output</span>
            </div>
            <div className="p-4 flex flex-col">
              <div className="mb-2">
                <span className="text-green-400 font-semibold">kcarrasquinho@notebook</span>
                <span className="text-pink-500 font-semibold">:</span>
                <span className="text-blue-400 font-semibold">~/aula</span>
                <span className="text-zinc-300">$ node script.js</span>
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
        )}
      </div>

    </div>
  );
}