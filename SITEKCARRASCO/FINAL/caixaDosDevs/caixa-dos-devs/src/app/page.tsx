import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#8A2BE2] selection:text-white">
      
      {/* Detalhes de iluminação de fundo (Glow) com o Roxo Principal */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8A2BE2]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center max-w-4xl px-6 text-center">
        
        {/* Bloco da Persona (Kcarrasquinho solto e flutuando livre na tela) */}
        {/* Bloco da Persona (Kcarrasquinho 100% livre e sem cortes) */}
        <div className="mb-6 flex flex-col items-center group/persona">
          
          {/* Removi o overflow-hidden e o w-32/h-32 rígidos. 
              Agora o contêiner se adapta ao tamanho real da imagem! */}
          <div className="relative flex items-center justify-center image-pixelated transform transition-transform duration-300 hover:scale-110 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
            <Image 
              src="/personagens/kcarrasquinho.png" 
              alt="Kcarrasquinho" 
              width={140} /* Você pode aumentar ou diminuir esse número livremente agora */
              height={140} 
              className="object-contain"
              priority
            />
          </div>
          
          <span className="mt-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-semibold tracking-wider text-[#8A2BE2] uppercase">
            Kcarrasquinho
          </span>
        </div>

        {/* A Frase Principal adaptada para a cor roxa */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-2xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          Abra a mente, o código vem para o <span className="text-[#8A2BE2]">mundo real</span>.
        </h1>
        
        <p className="mt-4 text-zinc-400 text-lg max-w-lg">
          Toque na caixa abaixo para liberar os módulos e iniciar nossa dinâmica de programação prática.
        </p>

        {/* Componente Interativo da Caixa dos Devs */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <Link href="/temas" className="group relative block">
            {/* Efeito de aura brilhante e o Box-Shadow intenso solicitado no hover */}
            <div className="absolute -inset-4 rounded-full bg-[#8A2BE2]/20 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_35px_rgba(138,43,226,0.4)]"></div>
            
            {/* Imagem da Caixa */}
            <div className="relative transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-3">
              <Image 
                src="/personagens/caixa.png" 
                alt="A Caixa dos Devs" 
                width={280} 
                height={280}
                className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </Link>
          
          {/* Indicador visual de clique pulsando em roxo */}
          <div className="mt-8 flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-500 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800/60 animate-pulse">
            <span className="h-2 w-2 rounded-full bg-[#8A2BE2]"></span>
            CLIQUE PARA INTERAGIR
          </div>
        </div>

      </div>
    </main>
  );
}