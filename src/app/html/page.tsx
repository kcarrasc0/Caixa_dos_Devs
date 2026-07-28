import Link from 'next/link';
import Image from 'next/image';

export default function HTMLTrack() {
  const modulos = [
    { 
      id: 'fundamentos', 
      titulo: 'O Esqueleto da Web', 
      descricao: 'Entenda a planta baixa. A diferença entre marcação e programação, tags head, body e atributos básicos.',
      aula: 'Módulo 1'
    },
    { 
      id: 'semantica-textos', 
      titulo: 'Textos e a Arte da Semântica', 
      descricao: 'Pare de usar <div> para tudo! Aprenda a estruturar textos, listas e usar as tags semânticas do HTML5.',
      aula: 'Módulo 2'
    },
    { 
      id: 'multimidia-links', 
      titulo: 'Navegação e Multimídia', 
      descricao: 'Como a internet se conecta. A tag de âncora, imagens, vídeos e a importância vital do atributo alt.',
      aula: 'Módulo 3'
    },
    { 
      id: 'tabelas-formularios', 
      titulo: 'Formulários e Tabelas', 
      descricao: 'Colete informações dos usuários. Textareas, selects, checkboxes, botões de rádio e estruturação de dados.',
      aula: 'Módulo 4'
    },
    { 
      id: 'boas-praticas', 
      titulo: 'SEO e Acessibilidade', 
      descricao: 'O toque profissional. Como deixar seu site amigável para o Google, leitores de tela e preparar o terreno para o CSS.',
      aula: 'Módulo 5'
    },
    { id: 'formatacao-texto', titulo: 'Formatação e Citações', descricao: 'Tags strong, em, blockquote, q, mark e manipulação nativa de textos.', aula: 'Módulo 6' },
    { id: 'listas', titulo: 'Estruturas de Listas', descricao: 'Tags ul, ol, li, hr e organização de conteúdo em tópicos.', aula: 'Módulo 7' },
    { id: 'interatividade-embutidos', titulo: 'Interatividade e Iframes', descricao: 'Crie abas nativas com details/summary e embuta páginas com iframes.', aula: 'Módulo 8' }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#8A2BE2] selection:text-white relative pb-24">
      <nav className="w-full max-w-5xl mx-auto p-6 flex items-center justify-between relative z-10">
        <Link href="/temas" className="group flex items-center gap-2 text-zinc-400 hover:text-[#8A2BE2] transition-colors font-medium">
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span> Voltar aos Temas
        </Link>
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden image-pixelated">
          <Image src="/personagens/kcarrasquinho.png" alt="Kcarrasquinho" width={35} height={35} className="object-contain" />
        </div>
      </nav>

      <header className="max-w-3xl mx-auto px-6 pt-10 pb-16 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-100">
          Trilha de <span className="text-[#8A2BE2]">HTML5</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Escolha um módulo abaixo para abrir a Caixa dos Devs.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modulos.map((modulo) => (
            <Link 
              href={`/html/${modulo.id}`} 
              key={modulo.id}
              className="group flex flex-col p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#8A2BE2]/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-bold text-[#8A2BE2] bg-[#8A2BE2]/10 rounded-full uppercase tracking-wider">{modulo.aula}</span>
                <span className="text-zinc-500 group-hover:text-[#8A2BE2] transition-colors">➔</span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-200 mb-2 group-hover:text-white">{modulo.titulo}</h2>
              <p className="text-zinc-400">{modulo.descricao}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}