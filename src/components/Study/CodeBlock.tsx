import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  
  // Detetor Automático de Linguagem (Lê o código e adivinha o que é!)
  const detectLanguage = () => {
    if (language) return language;
    
    const lowerCode = code.toLowerCase();
    if (lowerCode.includes('import flet') || lowerCode.includes('import tkinter') || lowerCode.includes('def ')) return 'python';
    if (lowerCode.includes('<html') || lowerCode.includes('<!doctype') || lowerCode.includes('<div') || lowerCode.includes('<body')) return 'html';
    if (lowerCode.includes('select ') && lowerCode.includes('from ')) return 'sql';
    if (lowerCode.includes('interface ') || lowerCode.includes('type ')) return 'typescript';
    
    return 'javascript'; // Padrão
  };

  const lang = detectLanguage();

  // Define o nome do arquivo falso na barra superior baseado na linguagem
  const getFileName = () => {
    switch (lang) {
      case 'html': return 'index.html';
      case 'css': return 'style.css';
      case 'javascript': return 'script.js';
      case 'typescript': return 'app.ts';
      case 'python': return 'main.py';
      case 'sql': return 'query.sql';
      default: return 'codigo';
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-[#1e1e1e] shadow-2xl ring-1 ring-white/10">
      {/* Barra superior estilo macOS */}
      <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs font-medium text-zinc-400 font-mono">
          {getFileName()}
        </span>
      </div>
      
      {/* Área do Código com realce de sintaxe dinâmico */}
      <div className="p-4 text-sm md:text-base">
        <SyntaxHighlighter 
          language={lang} 
          style={vscDarkPlus}
          customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}