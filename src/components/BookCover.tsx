import React from "react";

interface BookCoverProps {
  onNavigate: (id: string) => void;
}

const BookCover = ({ onNavigate }: BookCoverProps) => {
  return (
    <main className="flex-1 flex items-center justify-center min-h-screen overflow-auto py-4" style={{ background: "#1a1a2e" }}>
      <div
        className="relative overflow-hidden w-full max-w-[600px] mx-4 min-h-0"
        style={{
          aspectRatio: window.innerWidth < 640 ? undefined : "600 / 850",
          minHeight: window.innerWidth < 640 ? "100vh" : undefined,
          background: "#0d1b3e",
          boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
        }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, #081632 0%, #0d2259 40%, #0a1a45 70%, #050e26 100%)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,160,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow effects */}
        <div
          className="absolute rounded-full"
          style={{
            top: "15%",
            right: "-10%",
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(30,100,220,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-5%",
            left: "20%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(0,180,255,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Circuit SVG */}
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-[0.18]"
          viewBox="0 0 600 850"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#4eb8ff" strokeWidth="1" fill="none">
            <circle cx="480" cy="120" r="8" fill="#4eb8ff" />
            <line x1="480" y1="128" x2="420" y2="190" />
            <line x1="480" y1="128" x2="540" y2="190" />
            <circle cx="420" cy="190" r="6" fill="#4eb8ff" />
            <circle cx="540" cy="190" r="6" fill="#4eb8ff" />
            <line x1="420" y1="196" x2="390" y2="260" />
            <line x1="420" y1="196" x2="450" y2="260" />
            <line x1="540" y1="196" x2="510" y2="260" />
            <line x1="540" y1="196" x2="570" y2="260" />
            <circle cx="390" cy="260" r="5" fill="#4eb8ff" />
            <circle cx="450" cy="260" r="5" fill="#4eb8ff" />
            <circle cx="510" cy="260" r="5" fill="#4eb8ff" />
            <circle cx="570" cy="260" r="5" fill="#4eb8ff" />
            <line x1="390" y1="265" x2="370" y2="320" />
            <line x1="390" y1="265" x2="410" y2="320" />
            <line x1="450" y1="265" x2="430" y2="320" />
            <line x1="450" y1="265" x2="470" y2="320" />
            <circle cx="370" cy="320" r="4" fill="#4eb8ff" />
            <circle cx="410" cy="320" r="4" fill="#4eb8ff" />
            <circle cx="430" cy="320" r="4" fill="#4eb8ff" />
            <circle cx="470" cy="320" r="4" fill="#4eb8ff" />
          </g>
          <g fill="#00b4ff" opacity="0.6">
            <circle cx="80" cy="200" r="3" />
            <circle cx="120" cy="350" r="2" />
            <circle cx="60" cy="480" r="4" />
            <circle cx="150" cy="600" r="2" />
            <circle cx="95" cy="700" r="3" />
            <circle cx="560" cy="450" r="3" />
            <circle cx="530" cy="550" r="2" />
            <circle cx="575" cy="650" r="4" />
          </g>
          <g stroke="#00b4ff" strokeWidth="0.5" opacity="0.4">
            <line x1="80" y1="200" x2="120" y2="350" />
            <line x1="120" y1="350" x2="60" y2="480" />
            <line x1="60" y1="480" x2="150" y2="600" />
            <line x1="150" y1="600" x2="95" y2="700" />
          </g>
          <text x="55" y="155" fontFamily="monospace" fontSize="11" fill="#4eb8ff" opacity="0.7">p ∧ q</text>
          <text x="55" y="415" fontFamily="monospace" fontSize="11" fill="#4eb8ff" opacity="0.5">¬p ∨ q</text>
          <text x="510" y="390" fontFamily="monospace" fontSize="11" fill="#4eb8ff" opacity="0.5">∀x P(x)</text>
          <text x="490" y="500" fontFamily="monospace" fontSize="10" fill="#4eb8ff" opacity="0.4">∃y Q(y)</text>
          <g fill="#4eb8ff" opacity="0.15">
            <rect x="30" y="760" width="80" height="4" rx="2" />
            <rect x="30" y="772" width="55" height="4" rx="2" />
            <rect x="30" y="784" width="95" height="4" rx="2" />
            <rect x="30" y="796" width="40" height="4" rx="2" />
          </g>
        </svg>

        {/* Top & bottom accent bars */}
        <div
          className="absolute top-0 left-0 right-0 h-[5px]"
          style={{ background: "linear-gradient(90deg, #1a5ccc, #00b4ff, #1a5ccc)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[5px]"
          style={{ background: "linear-gradient(90deg, #1a5ccc, #00b4ff, #1a5ccc)" }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col p-5 sm:p-8 md:p-12 overflow-y-auto">
          {/* ALICCE Logo */}
          <div className="flex items-center gap-3 mb-auto">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: "0 4px 20px rgba(0,180,255,0.3)" }}
            >
              <svg width="44" height="44" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <text
                  x="50%"
                  y="58%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial, sans-serif"
                  fontWeight="800"
                  fontSize="46"
                  fill="#1a4fa0"
                  letterSpacing="1"
                >
                  ALICCE
                </text>
              </svg>
            </div>
            <div>
              <div
                className="text-[11px] font-light tracking-[1.5px] uppercase"
                style={{ color: "rgba(160,200,255,0.75)" }}
              >
                Série Ciência de Dados
              </div>
            </div>
          </div>

          {/* Central visual symbol */}
          <div className="flex justify-center items-center my-3 sm:my-5 flex-shrink-0">
            <svg className="w-[180px] h-[120px] sm:w-[280px] sm:h-[190px]" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
              <circle cx="160" cy="110" r="95" fill="none" stroke="rgba(78,184,255,0.15)" strokeWidth="1.5" />
              <circle cx="160" cy="110" r="75" fill="none" stroke="rgba(78,184,255,0.2)" strokeWidth="1" />
              <circle cx="135" cy="100" r="50" fill="rgba(26,92,204,0.2)" stroke="rgba(78,184,255,0.5)" strokeWidth="1.5" />
              <circle cx="185" cy="100" r="50" fill="rgba(0,180,255,0.15)" stroke="rgba(0,180,255,0.5)" strokeWidth="1.5" />
              <path
                d="M160,55 C175,65 175,135 160,145 C145,135 145,65 160,55Z"
                fill="rgba(78,184,255,0.25)"
                stroke="rgba(120,210,255,0.6)"
                strokeWidth="1"
              />
              <circle cx="160" cy="100" r="8" fill="#00b4ff" filter="url(#glow)" />
              <text x="120" y="103" textAnchor="middle" fontFamily="serif" fontSize="13" fill="rgba(200,225,255,0.85)" fontStyle="italic">
                Lógica
              </text>
              <text x="200" y="103" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(200,225,255,0.85)" fontStyle="italic">
                Ciência
              </text>
              <text x="200" y="116" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(200,225,255,0.85)" fontStyle="italic">
                de Dados
              </text>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <line x1="160" y1="92" x2="160" y2="15" stroke="rgba(78,184,255,0.3)" strokeWidth="1" strokeDasharray="3,4" />
              <line x1="160" y1="108" x2="160" y2="205" stroke="rgba(78,184,255,0.3)" strokeWidth="1" strokeDasharray="3,4" />
              <line x1="152" y1="96" x2="80" y2="50" stroke="rgba(78,184,255,0.2)" strokeWidth="1" strokeDasharray="3,4" />
              <line x1="168" y1="96" x2="240" y2="50" stroke="rgba(78,184,255,0.2)" strokeWidth="1" strokeDasharray="3,4" />
              <circle cx="160" cy="14" r="4" fill="rgba(78,184,255,0.6)" />
              <circle cx="160" cy="205" r="4" fill="rgba(78,184,255,0.6)" />
              <circle cx="79" cy="50" r="4" fill="rgba(78,184,255,0.6)" />
              <circle cx="241" cy="50" r="4" fill="rgba(78,184,255,0.6)" />
            </svg>
          </div>

          {/* Title */}
          <div className="mb-4 sm:mb-7">
            <div
              className="text-[11px] font-light tracking-[4px] uppercase mb-4 flex items-center gap-2.5"
              style={{ color: "#00b4ff" }}
            >
              <span className="inline-block w-7 h-px" style={{ background: "#00b4ff" }} />
              Fundamentos
            </div>
            <h1
              className="font-serif-book text-2xl sm:text-3xl md:text-[40px] font-black leading-[1.1] text-white tracking-tight mb-2 sm:mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lógica Aplicada
              <br />
              à <span style={{ color: "#4eb8ff" }}>Ciência de</span>
              <br />
              <span style={{ color: "#4eb8ff" }}>Dados</span>
            </h1>
            <div
              className="w-12 h-[3px] mt-4"
              style={{ background: "linear-gradient(90deg, #00b4ff, #1a5ccc)" }}
            />
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-6"
            style={{ background: "linear-gradient(90deg, transparent, rgba(100,180,255,0.4), transparent)" }}
          />

          {/* Author */}
          <div className="mt-auto">
            <div
              className="text-[10px] font-light tracking-[3px] uppercase mb-1.5"
              style={{ color: "rgba(160,200,255,0.6)" }}
            >
              Autores
            </div>
            <div className="text-sm sm:text-[17px] italic" style={{ color: "rgba(220,235,255,0.92)", letterSpacing: "0.5px" }}>
              Helena Macedo Reis
            </div>
            <div className="text-sm sm:text-[17px] italic" style={{ color: "rgba(220,235,255,0.92)", letterSpacing: "0.5px" }}>
              Anderson da Silva Marcolino
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 self-center flex flex-wrap gap-4 items-center justify-center">
            <button
              onClick={() => onNavigate("prefacio")}
              className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1a5ccc, #00b4ff)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,180,255,0.3)",
                letterSpacing: "2px",
              }}
            >
              Iniciar Leitura →
            </button>
            <div className="relative group">
              <a
                href="/logica_ia_cd_v5.pdf"
                download
                className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 text-center"
                style={{
                  background: "linear-gradient(135deg, #1a5ccc, #00b4ff)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(0,180,255,0.3)",
                  letterSpacing: "2px",
                }}
              >
                Download do Livro ↓
              </a>
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[340px] p-4 rounded-lg text-xs leading-relaxed opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50"
                style={{
                  background: "rgba(10,20,50,0.95)",
                  border: "1px solid rgba(78,184,255,0.3)",
                  color: "rgba(200,220,255,0.9)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                <strong className="block mb-1" style={{ color: "#4eb8ff" }}>Nota sobre esta Edição em PDF</strong>
                Esta edição em formato PDF foi gerada automaticamente pelo sistema de Inteligência Artificial Claude (Anthropic) a partir do escaneamento e processamento do conteúdo do livro digital disponível em logica.livros.alicce.com.br. O processo envolveu a leitura estruturada do código-fonte da aplicação web, a extração do conteúdo textual, a conversão de formatações e a composição tipográfica do documento. Por ser um processo automatizado, esta versão pode conter inconsistências de formatação, quebras de página inesperadas, caracteres mal renderizados ou pequenas divergências em relação à versão digital interativa. Em caso de dúvida sobre o conteúdo, recomenda-se consultar a versão online, que é a versão oficial e continuamente atualizada do livro.
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{ borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "8px solid rgba(10,20,50,0.95)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookCover;
