'use client';

import Link from 'next/link';
import Image from 'next/image';

// Componente auxiliar para os blocos de código estilo macOS
const CodeWindow = ({ code, filename }: { code: string, filename?: string }) => (
  <div className="bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl w-full border border-zinc-800/50 mt-6">
    <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-zinc-800/50">
      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      {filename && <span className="text-xs text-zinc-500 ml-2 font-mono">{filename}</span>}
    </div>
    <div className="p-5 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
      <pre><code>{code}</code></pre>
    </div>
  </div>
);

export default function ExemploGeralCSS() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-zinc-800 font-sans selection:bg-[#8A2BE2] selection:text-white">
      
      {/* CSS PURO EMBUTIDO PARA OS EXEMPLOS EXTRAS RENDERIZAREM */}
      <style>{`
        :root {
          --cor-primaria: #8A2BE2;
          --espacamento-padrao: 15px;
        }

        /* Box Model e Cores */
        .caixa-magica {
          background-color: #8A2BE2; color: white; text-align: center;
          padding: 30px; border: 5px dashed #000; margin: 20px auto;
          font-family: sans-serif; font-weight: bold; border-radius: 8px;
        }
        .box-cor { padding: 15px; margin-bottom: 10px; font-family: sans-serif; font-weight: bold; border-radius: 8px; text-align: center;}
        .hex { background-color: #8A2BE2; color: white; }
        .rgba { background-color: rgba(138, 43, 226, 0.4); color: black; }
        .hsl { background-color: hsl(271, 76%, 53%); color: white; }
        .botao-sistema {
          background-color: var(--cor-primaria); padding: var(--espacamento-padrao);
          color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; width: 100%;
        }

        /* Efeitos Visuais */
        .circulo-fx {
          width: 100px; height: 100px; background: #8A2BE2; border-radius: 50%; margin: 0 auto;
        }
        .caixa-sombra-fx {
          padding: 20px; background: white; border-radius: 12px;
          box-shadow: 5px 5px 20px 0px rgba(138,43,226, 0.3); text-align: center;
        }
        .texto-sombra-fx { text-shadow: 2px 2px 4px #8A2BE2; color: #333; font-size: 24px; font-weight: bold; margin: 0;}
        .fundo-degrade-fx {
          height: 100px; border-radius: 12px;
          background-image: linear-gradient(to right, #8A2BE2, #ff1493);
          color: white; padding: 20px; font-family: sans-serif; font-weight: bold;
          display: flex; align-items: center; justify-content: center;
        }
        .btn-neumorfico-fx {
          padding: 15px 40px; border: none; border-radius: 30px;
          background: #e0e5ec; color: #8A2BE2; font-weight: bold;
          box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
          cursor: pointer; transition: 0.3s;
        }
        .btn-neumorfico-fx:active {
          box-shadow: inset 6px 6px 10px 0 rgba(163,177,198,0.6), inset -6px -6px 10px 0 rgba(255,255,255, 0.5);
        }

        /* Transições e Animações */
        .botao-animado-fx {
          background-color: #333; color: white; padding: 15px 30px; border: none; border-radius: 8px;
          font-weight: bold; cursor: pointer; transition: all 0.4s ease-in-out; width: 100%;
        }
        .botao-animado-fx:hover {
          background-color: #8A2BE2; transform: scale(1.05);
        }
        @keyframes flutuar-fx {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .fantasma-fx {
          background: #8A2BE2; color: white; padding: 20px; text-align: center; font-weight: bold;
          width: 150px; border-radius: 10px; margin: 0 auto;
          animation: flutuar-fx 3s infinite ease-in-out;
        }

        /* Posicionamento */
        .pai-relativo-fx { position: relative; height: 150px; background: #eee; border-radius: 12px; border: 2px dashed #ccc; overflow: hidden; }
        .filho-absoluto-fx {
          position: absolute; top: 10px; right: 10px;
          background: #8A2BE2; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; z-index: 10;
        }
        .caixa1-fx { position: absolute; top: 20px; left: 20px; background: #ff1493; padding: 30px; z-index: 1; border-radius: 8px; color: white; font-weight: bold;}
        .caixa2-fx { position: absolute; top: 40px; left: 40px; background: #8A2BE2; padding: 30px; z-index: 99; border-radius: 8px; color: white; font-weight: bold; box-shadow: 0 10px 20px rgba(0,0,0,0.2);}
      `}</style>

      {/* NAVEGAÇÃO SUPERIOR */}
      <nav className="w-full p-6 bg-zinc-950 text-white flex items-center justify-between sticky top-0 z-50 shadow-md">
        <Link href="/css" className="text-zinc-400 hover:text-[#8A2BE2] transition-colors font-bold flex items-center gap-2">
          <span>←</span> Voltar para a Trilha
        </Link>
        <span className="text-[#8A2BE2] font-mono text-sm border border-[#8A2BE2]/30 px-3 py-1 rounded-full bg-[#8A2BE2]/10">
          Laboratório Interativo CSS
        </span>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-4 block">Módulo Final</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 mb-6 leading-tight">
            Domine CSS na <br/>Prática
          </h1>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-lg">
            Aprenda a criar layouts incríveis, do posicionamento às animações, usando os superpoderes do Flexbox e CSS Grid. Escreva menos código e crie interfaces modernas.
          </p>
          <div className="flex gap-4">
            <a href="#duelo" className="px-8 py-3 bg-[#8A2BE2] hover:bg-[#7319c7] text-white font-bold rounded-xl shadow-lg shadow-[#8A2BE2]/30 transition-all transform active:scale-95">
              Começar Agora
            </a>
            <Link href="/css" className="px-8 py-3 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 font-bold rounded-xl transition-all shadow-sm">
              Ver Documentação
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full bg-white p-6 rounded-3xl shadow-xl border border-zinc-100">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Preview: Grid Responsivo</span>
          </div>
          {/* Visual Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-[#8A2BE2] text-white h-16 rounded-lg flex items-center justify-center font-bold shadow-sm">
                {i}
              </div>
            ))}
          </div>
          <CodeWindow 
            filename="style.css"
            code={`.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}`} 
          />
        </div>
      </section>

      {/* SEÇÃO EXTRA 1: BOX MODEL E CORES */}
      <section className="bg-zinc-900 py-24 border-y border-zinc-800 shadow-sm text-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Estrutura</span>
            <h2 className="text-4xl font-extrabold text-white mb-4">Box Model e Cores</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A regra de ouro da web: Todo elemento é uma caixa retangular. Entenda as camadas invisíveis e os sistemas matemáticos de cor.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Box Model */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">O Modelo de Caixa</h3>
              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800">
                <div className="caixa-magica">
                  Sou um conteúdo protegido pelo Padding, Border e Margin!
                </div>
                <CodeWindow code={`.caixa-magica {\n  padding: 30px; /* Câmera de ar interna */\n  border: 5px dashed #000; /* Borda visível */\n  margin: 20px; /* Campo de força externo */\n}`} />
              </div>
            </div>

            {/* Cores e Variáveis */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Sistemas de Cores & Variáveis</h3>
              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800">
                <div className="box-cor hex">Hexadecimal: #8A2BE2</div>
                <div className="box-cor rgba text-white border border-zinc-700">RGB(a): 40% de Transparência</div>
                
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-sm font-bold text-zinc-500 mb-3 uppercase tracking-wider">Variável CSS (:root)</p>
                  <button className="botao-sistema">Botão com var(--cor-primaria)</button>
                </div>
                
                <CodeWindow code={`:root {\n  --cor-primaria: #8A2BE2;\n}\n.botao {\n  background-color: var(--cor-primaria);\n}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: DUELO DE LAYOUTS (Do Figma) */}
      <section id="duelo" className="bg-white py-24 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Conceito</span>
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">Flexbox vs Grid: O Duelo de Layouts</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Entenda de uma vez por todas a diferença entre os dois maiores aliados da estilização moderna no CSS.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Flexbox */}
            <div className="bg-[#f8f9fa] rounded-3xl p-8 border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center">
                  <span className="text-[#8A2BE2] font-bold text-xl">☰</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-800">O Uso Flexbox</h3>
              </div>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Ideal para <strong>alinhamentos unidimensionais</strong> (uma linha ou uma coluna de cada vez). Perfeito para menus de navegação, botões e barras de ferramentas.
              </p>
              
              <div className="flex gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
                <div className="w-12 h-12 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">1</div>
                <div className="w-12 h-12 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">2</div>
                <div className="w-12 h-12 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">3</div>
              </div>

              <CodeWindow 
                filename="flex.css"
                code={`.menu {\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n}`} 
              />
            </div>

            {/* Card Grid */}
            <div className="bg-[#f8f9fa] rounded-3xl p-8 border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center">
                  <span className="text-[#8A2BE2] font-bold text-xl">⊞</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-800">O Uso Grid</h3>
              </div>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                O mestre <strong>bidimensional</strong>. Projetado para criar o esqueleto completo da página, controlando linhas e colunas simultaneamente de forma robusta.
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-8 bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
                <div className="bg-[#8A2BE2] h-10 rounded flex items-center justify-center text-white font-bold">1</div>
                <div className="bg-[#8A2BE2] h-10 rounded flex items-center justify-center text-white font-bold">2</div>
                <div className="bg-[#8A2BE2] h-10 rounded flex items-center justify-center text-white font-bold">3</div>
                <div className="bg-[#8A2BE2] h-10 rounded flex items-center justify-center text-white font-bold">4</div>
                <div className="bg-[#8A2BE2] h-10 rounded flex items-center justify-center text-white font-bold">5</div>
                <div className="bg-[#8A2BE2] h-10 rounded flex items-center justify-center text-white font-bold">6</div>
              </div>

              <CodeWindow 
                filename="grid.css"
                code={`.layout {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}`} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: FLEXBOX EM AÇÃO (Do Figma) */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Mão na Massa</span>
          <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">Flexbox em Ação</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Esqueça os "hacks" de antigamente. Centralize elementos e distribua espaços com duas linhas de código.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2">1. Centralização Perfeita</h3>
            <p className="text-zinc-500 mb-6 text-sm">O Santo Graal do CSS antigo, resolvido com justify-content e align-items.</p>
            
            <div className="bg-white h-32 rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center mb-6">
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">1</div>
                <div className="w-10 h-10 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">2</div>
                <div className="w-10 h-10 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">3</div>
              </div>
            </div>
            
            <CodeWindow code={`.box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-zinc-800 mb-2">2. Distribuição Equitativa</h3>
            <p className="text-zinc-500 mb-6 text-sm">Empurre os elementos para as bordas perfeitamente usando space-between.</p>
            
            <div className="bg-white h-32 rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-between px-6 mb-6">
              <div className="w-10 h-10 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">1</div>
              <div className="w-10 h-10 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">2</div>
              <div className="w-10 h-10 bg-[#8A2BE2] rounded flex items-center justify-center text-white font-bold">3</div>
            </div>
            
            <CodeWindow code={`.box {\n  display: flex;\n  justify-content: space-between;\n}`} />
          </div>
        </div>
      </section>

      {/* SEÇÃO: GRID EM AÇÃO (Do Figma) */}
      <section className="bg-white py-24 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Mão na Massa</span>
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">CSS Grid em Ação</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Construa o esqueleto de toda a sua aplicação criando áreas de layout perfeitas e responsivas.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-zinc-800 mb-2">1. Colunas Responsivas Automáticas</h3>
              <p className="text-zinc-500 mb-6 text-sm">Use o auto-fit e minmax para criar grids que se adaptam sem media queries.</p>
              
              <div className="bg-[#f8f9fa] rounded-2xl border border-zinc-200 p-4 grid grid-cols-2 gap-2 mb-6 h-[180px] overflow-hidden">
                <div className="bg-[#8A2BE2] rounded text-white flex items-center justify-center font-bold">1</div>
                <div className="bg-[#8A2BE2] rounded text-white flex items-center justify-center font-bold">2</div>
                <div className="bg-[#8A2BE2] rounded text-white flex items-center justify-center font-bold">3</div>
                <div className="bg-[#8A2BE2] rounded text-white flex items-center justify-center font-bold">4</div>
              </div>
              
              <CodeWindow code={`.grid-auto {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 10px;\n}`} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-zinc-800 mb-2">2. Áreas Nomeadas (Grid Areas)</h3>
              <p className="text-zinc-500 mb-6 text-sm">Crie o mapa da sua página dando nomes as áreas. Extremamente visual e intuitivo.</p>
              
              <div className="bg-[#f8f9fa] rounded-2xl border border-zinc-200 p-2 grid grid-cols-3 gap-2 mb-6 h-[180px]">
                <div className="col-span-3 bg-[#8A2BE2]/20 text-[#8A2BE2] rounded flex items-center justify-center font-bold text-xs">header</div>
                <div className="col-span-1 bg-[#8A2BE2]/40 text-[#8A2BE2] rounded flex items-center justify-center font-bold text-xs">sidebar</div>
                <div className="col-span-2 bg-[#8A2BE2]/10 text-[#8A2BE2] rounded flex items-center justify-center font-bold text-xs">main</div>
                <div className="col-span-3 bg-[#8A2BE2]/20 text-[#8A2BE2] rounded flex items-center justify-center font-bold text-xs">footer</div>
              </div>
              
              <CodeWindow code={`.pagina {\n  display: grid;\n  grid-template-areas: \n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n}`} />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO EXTRA 2: POSICIONAMENTO E ANIMAÇÃO */}
      <section className="bg-[#f8f9fa] py-24 border-y border-zinc-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Movimento</span>
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">Posicionamento e Animações</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Tire elementos do fluxo normal, controle a sobreposição (Z-Index) e crie vida com @keyframes e Transições.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Posicionamento */}
            <div>
              <h3 className="text-xl font-bold text-zinc-800 mb-4">Absolute & Z-Index</h3>
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm h-full">
                <div className="pai-relativo-fx mb-8">
                  <span className="absolute bottom-2 right-2 text-xs text-zinc-400">Pai (Relative)</span>
                  <div className="filho-absoluto-fx">Absoluto (Filho)</div>
                  <div className="caixa1-fx">Z-index: 1</div>
                  <div className="caixa2-fx">Z-index: 99</div>
                </div>
                <CodeWindow code={`.pai { position: relative; }\n.filho { \n  position: absolute; \n  top: 10px; \n  right: 10px;\n}\n.camada-frente { z-index: 99; }`} />
              </div>
            </div>

            {/* Animações */}
            <div>
              <h3 className="text-xl font-bold text-zinc-800 mb-4">Transitions & @Keyframes</h3>
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm h-full">
                <div className="flex flex-col items-center gap-6 py-4 mb-4">
                  <button className="botao-animado-fx">Passe o mouse (Hover)</button>
                  <div className="fantasma-fx">Animando Infinito!</div>
                </div>
                <CodeWindow code={`.botao { transition: all 0.4s; }\n.botao:hover { transform: scale(1.05); }\n\n@keyframes flutuar {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-15px); }\n}\n.item { animation: flutuar 3s infinite; }`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO EXTRA 3: EFEITOS VISUAIS E NEUMORFISMO */}
      <section className="bg-zinc-900 py-24 border-y border-zinc-800 shadow-sm text-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Aparência</span>
            <h2 className="text-4xl font-extrabold text-white mb-4">Efeitos Visuais e Sombras</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Dê profundidade, arredonde cantos e crie texturas modernas sem usar uma única imagem externa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Border Radius e Sombras */}
            <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Formas & Profundidade</h3>
                <div className="circulo-fx mb-8"></div>
                <div className="caixa-sombra-fx mb-6">
                  <h3 className="texto-sombra-fx">Sombra 3D!</h3>
                </div>
              </div>
              <CodeWindow code={`border-radius: 50%;\n\nbox-shadow: 5px 5px 20px rgba(...);\ntext-shadow: 2px 2px 4px #8A2BE2;`} />
            </div>

            {/* Degradês */}
            <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Degradês & Filtros</h3>
                <div className="fundo-degrade-fx mb-8">Linear Gradient</div>
                <div className="flex justify-center mb-6">
                  <Image src="/personagens/kcarrasquinho.png" alt="Avatar" width={80} height={80} className="rounded-full bg-zinc-800" style={{ filter: 'blur(2px) grayscale(80%)' }} />
                </div>
              </div>
              <CodeWindow code={`background-image: \n  linear-gradient(to right, #8A2BE2, #ff1493);\n\nfilter: blur(2px) grayscale(80%);`} />
            </div>

            {/* Neumorfismo */}
            <div className="bg-[#e0e5ec] rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-800 mb-6 text-center">O Neumorfismo</h3>
                <div className="flex justify-center py-10">
                  <button className="btn-neumorfico-fx">Clique em Mim</button>
                </div>
              </div>
              <CodeWindow code={`background: #e0e5ec;\nbox-shadow: \n  9px 9px 16px rgba(163,177,198,0.6), \n  -9px -9px 16px rgba(255,255,255,0.5);`} />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: GUIA DE DECISÃO (Do Figma) */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Resumo</span>
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">Guia de Decisão: Quando usar qual?</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white border border-[#8A2BE2]/30 p-8 rounded-3xl shadow-[0_10px_30px_rgba(138,43,226,0.05)]">
            <h3 className="text-xl font-bold text-[#8A2BE2] mb-6">Use Flexbox se você precisa de:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#8A2BE2] font-bold mt-0.5">✓</span>
                <span className="text-zinc-600">Alinhamento vertical ou horizontal simples.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8A2BE2] font-bold mt-0.5">✓</span>
                <span className="text-zinc-600">Distribuir espaço entre botões ou itens de menu.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8A2BE2] font-bold mt-0.5">✓</span>
                <span className="text-zinc-600">Layout fluido onde os itens ditam o tamanho.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[#8A2BE2]/30 p-8 rounded-3xl shadow-[0_10px_30px_rgba(138,43,226,0.05)]">
            <h3 className="text-xl font-bold text-[#8A2BE2] mb-6">Use CSS Grid se você precisa de:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#8A2BE2] font-bold mt-0.5">✓</span>
                <span className="text-zinc-600">Controle simultâneo de linhas e colunas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8A2BE2] font-bold mt-0.5">✓</span>
                <span className="text-zinc-600">Criar o esqueleto base de uma página web inteira.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8A2BE2] font-bold mt-0.5">✓</span>
                <span className="text-zinc-600">Sobreposição de elementos na mesma célula.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEÇÃO: TABELA DE PROPRIEDADES (Do Figma) */}
      <section className="bg-white py-24 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Dicionário</span>
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">Propriedades Essenciais</h2>
            <p className="text-zinc-500">Um resumo rápido das propriedades mais usadas no dia a dia da formatação de layouts.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <table className="w-full text-left text-sm text-zinc-600">
              <thead className="bg-[#f4f0fa] text-zinc-800">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-zinc-200">Propriedade</th>
                  <th className="px-6 py-4 font-bold border-b border-zinc-200">Contexto</th>
                  <th className="px-6 py-4 font-bold border-b border-zinc-200">O que faz?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 bg-white">
                <tr>
                  <td className="px-6 py-4 font-mono font-bold text-zinc-800">justify-content</td>
                  <td className="px-6 py-4"><span className="bg-[#8A2BE2]/10 text-[#8A2BE2] px-2 py-1 rounded text-xs font-bold">Flexbox</span></td>
                  <td className="px-6 py-4">Alinha os itens no eixo principal (horizontal por padrão).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono font-bold text-zinc-800">align-items</td>
                  <td className="px-6 py-4"><span className="bg-[#8A2BE2]/10 text-[#8A2BE2] px-2 py-1 rounded text-xs font-bold">Flexbox</span></td>
                  <td className="px-6 py-4">Alinha os itens no eixo secundário (vertical por padrão).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono font-bold text-zinc-800">grid-template-columns</td>
                  <td className="px-6 py-4"><span className="bg-blue-500/10 text-blue-600 px-2 py-1 rounded text-xs font-bold">Grid</span></td>
                  <td className="px-6 py-4">Define a quantidade e a largura das colunas da malha.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono font-bold text-zinc-800">gap</td>
                  <td className="px-6 py-4"><span className="bg-zinc-800/10 text-zinc-800 px-2 py-1 rounded text-xs font-bold">Ambos</span></td>
                  <td className="px-6 py-4">Cria um espaçamento perfeito e simétrico entre os itens.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO: DICAS E BOAS PRÁTICAS (Do Figma) */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-sm mb-2 block">Boas Práticas</span>
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">Dicas de Engenharia Front-end</h2>
          <p className="text-zinc-500">Escrever CSS é fácil. Escrever um CSS sustentável e escalável que não quebra no futuro exige técnica.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-zinc-800 mb-3">1. Evite alturas fixas (height)</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Deixe que o conteúdo e os paddings determinem a altura dos elementos. Ao travar um `height: 100px;`, seu texto vai transbordar quando a tela diminuir no celular.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-zinc-800 mb-3">2. Mobile First</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Sempre escreva o CSS base pensando no celular primeiro. Use os `@media queries` (ex: `min-width: 768px`) apenas para adaptar e expandir o layout para telas maiores.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-zinc-800 mb-3">3. Use Unidades Relativas</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Esqueça os Pixels (`px`) absolutos. Acostume-se a usar `rem` e `em` para tamanhos de fontes e margens. Isso garante acessibilidade e um design elástico.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA (Do Figma) */}
      <section className="bg-zinc-900 text-center py-20 border-t-4 border-[#8A2BE2]">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-[#8A2BE2] font-bold tracking-wider uppercase text-xs mb-4 block bg-[#8A2BE2]/10 w-fit mx-auto px-3 py-1 rounded-full">Finalização</span>
          <h2 className="text-4xl font-extrabold text-white mb-6">Pronto para dominar CSS de verdade?</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Você acabou de ver a fundação dos layouts e os conceitos visuais em tempo real. Agora é a sua vez de colocar a mão no código.
          </p>
          <Link href="/css" className="px-10 py-4 bg-[#8A2BE2] hover:bg-[#7319c7] text-white font-bold rounded-xl shadow-lg shadow-[#8A2BE2]/20 transition-all transform active:scale-95 inline-block">
            Retornar aos Módulos da Caixa
          </Link>
        </div>
      </section>

    </main>
  );
}