'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import FlashCard from '@/components/Study/FlashCard';

import { mysqlFundamentos } from '@/data/mysql/fundamentos';
import { mysqlCrudBasico } from '@/data/mysql/crud-basico';
import { mysqlConsultasIntermediarias } from '@/data/mysql/consultas-intermediarias';
import { mysqlRestricoesChaves } from '@/data/mysql/restricoes-chaves';
import { mysqlPerformanceTransacoes } from '@/data/mysql/performance-transacoes';
import { mysqlProgramacaoAdm } from '@/data/mysql/programacao-adm';

const bancoDeAulas: Record<string, any> = {
  'fundamentos': mysqlFundamentos,
  'crud-basico': mysqlCrudBasico,
  'consultas-intermediarias': mysqlConsultasIntermediarias,
  'restricoes-chaves': mysqlRestricoesChaves,
  'performance-transacoes': mysqlPerformanceTransacoes,
  'programacao-adm': mysqlProgramacaoAdm
};

export default function AulaPageMySQL() {
  const params = useParams();
  const router = useRouter();
  
  const moduloSlug = params?.modulo as string;
  const aulaAtual = bancoDeAulas[moduloSlug];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!aulaAtual) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Módulo em construção!</h1>
        <Link href="/mysql" className="text-[#8A2BE2] hover:underline">
          Voltar para a lista de módulos
        </Link>
      </div>
    );
  }

  const totalCards = aulaAtual.cards.length;
  const cardData = aulaAtual.cards[currentIndex];

  const avancarCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/mysql');
    }
  };

  const voltarCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progresso = ((currentIndex + 1) / totalCards) * 100;

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#8A2BE2] selection:text-white pb-12">
      <nav className="w-full max-w-4xl mx-auto p-6 flex items-center justify-between border-b border-zinc-900 mb-12">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A2BE2]">
            MySQL • {aulaAtual.titulo}
          </span>
          <h1 className="text-xl font-bold text-zinc-100 hidden sm:block">
            {cardData.title}
          </h1>
        </div>

        <Link 
          href="/mysql" 
          className="px-4 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-xl hover:border-red-500/40 hover:text-red-400 transition-all"
        >
          Sair da Aula
        </Link>
      </nav>

      <section className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div className="w-full bg-zinc-900 h-1.5 rounded-full mb-8 overflow-hidden border border-zinc-800">
          <div 
            className="bg-[#8A2BE2] h-full transition-all duration-300 ease-out"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>

        <div className="w-full min-h-[420px] flex">
          <FlashCard 
            title={cardData.title}
            content={cardData.content}
            type={cardData.type}
            codeSnippet={cardData.codeSnippet}
            interactiveId={cardData.interactiveId}
            terminalOutput={cardData.terminalOutput}
            tableData={cardData.tableData}
          />
        </div>

        <div className="w-full flex items-center justify-between mt-8">
          <button
            onClick={voltarCard}
            disabled={currentIndex === 0}
            className={`px-5 py-3 rounded-xl border font-medium transition-all ${
              currentIndex === 0
                ? 'border-zinc-900 bg-zinc-950 text-zinc-600 cursor-not-allowed'
                : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            ← Anterior
          </button>

          <span className="text-sm font-mono text-zinc-500 bg-zinc-900/40 px-3 py-1.5 rounded-lg border border-zinc-900">
            Card {currentIndex + 1} de {totalCards}
          </span>

          <button
            onClick={avancarCard}
            className="px-6 py-3 bg-[#8A2BE2] hover:bg-[#7319c7] text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(138,43,226,0.3)] transition-all transform active:scale-95"
          >
            {currentIndex === totalCards - 1 ? 'Concluir Aula 🎉' : 'Próximo →'}
          </button>
        </div>
      </section>
    </main>
  );
}