import Link from 'next/link';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-black tracking-tighter text-white">
            CAIXA DOS <span className="text-[#8A2BE2]">DEVS</span>
          </span>
          <p className="text-sm text-zinc-500">
            Aprenda programação de forma visual, mastigada e direta.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="/temas" className="hover:text-[#8A2BE2] transition-colors">
            Cursos
          </Link>
          <a href="https://kcarrasco.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A2BE2] transition-colors">
            Portfólio do Criador
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
        <p>© {anoAtual} Caixa dos Devs. Todos os direitos reservados.</p>
        <p>Desenvolvido com 💜 por Erick Carrasco</p>
      </div>
    </footer>
  );
}