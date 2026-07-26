import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl bg-[#1e1e1e] shadow-2xl ring-1 ring-white/10">
      {/* Barra superior estilo macOS */}
      <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs font-medium text-zinc-400">
          {language === 'javascript' ? 'script.js' : 'codigo'}
        </span>
      </div>
      
      {/* Área do Código */}
      <div className="p-4 text-sm md:text-base">
        <SyntaxHighlighter 
          language={language} 
          style={vscDarkPlus}
          customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}