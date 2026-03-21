import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { chapters } from "@/data/bookContent";

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Implicação",
    definition:
      "Relação lógica entre duas proposições na qual a verdade da primeira (antecedente) garante a verdade da segunda (consequente). Em lógica formal, é representada pelo conectivo →. Por exemplo: \"Se o usuário apresentou erro, então o sistema exibe uma mensagem de apoio\" é uma implicação.",
  },
  {
    term: "Máxima Verossimilhança",
    definition:
      "Método estatístico de estimação de parâmetros que busca encontrar os valores que tornam os dados observados mais prováveis. Dado um modelo estatístico com parâmetros desconhecidos, a estimativa de máxima verossimilhança (MLE) é aquela que maximiza a função de verossimilhança.",
  },
  {
    term: "Verossimilhança",
    definition:
      "Função que mede o quão compatíveis são os dados observados com um determinado conjunto de parâmetros de um modelo estatístico. Diferente da probabilidade, que vai do modelo para os dados, a verossimilhança vai dos dados para o modelo.",
  },
  {
    term: "Indução",
    definition:
      "Método de raciocínio que parte de observações particulares para formular uma conclusão geral. Por exemplo: ao observar que todos os cisnes encontrados até agora são brancos, conclui-se que \"todos os cisnes são brancos\". A indução não garante a verdade da conclusão, apenas a torna provável com base nas evidências disponíveis.",
  },
  {
    term: "Dedução",
    definition:
      "Método de raciocínio que parte de premissas gerais para chegar a uma conclusão particular necessariamente verdadeira, desde que as premissas sejam verdadeiras. Por exemplo: \"Todo ser humano é mortal. Sócrates é um ser humano. Logo, Sócrates é mortal.\" A dedução preserva a verdade das premissas na conclusão.",
  },
  {
    term: "Hipótese",
    definition:
      "Suposição provisória que serve como ponto de partida para uma investigação. É uma afirmação que pode ser testada e verificada por meio de evidências ou experimentos. Se confirmada, pode se tornar parte de uma teoria; se refutada, é descartada ou revisada.",
  },
  {
    term: "Inferência",
    definition:
      "Processo de chegar a uma conclusão a partir de premissas ou evidências disponíveis. É o ato de raciocinar logicamente, extraindo informações novas a partir do que já se sabe. Pode ser dedutiva, indutiva ou abdutiva.",
  },
  {
    term: "Implicação lógica válida",
    definition:
      "Relação entre premissas e conclusão em que, se todas as premissas forem verdadeiras, a conclusão é necessariamente verdadeira. Diferente da implicação material, aqui há uma conexão lógica genuína entre antecedente e consequente.",
  },
  {
    term: "Implicação material",
    definition:
      "Conectivo lógico (→) que é falso apenas quando o antecedente é verdadeiro e o consequente é falso. Diferente da implicação do dia a dia, não exige relação de causa entre as proposições — basta que a combinação V→F não ocorra.",
  },
  {
    term: "Tautologia",
    definition:
      "Proposição composta que é sempre verdadeira, independentemente dos valores lógicos de suas partes. Por exemplo: \"Chove ou não chove\" (P ∨ ¬P) é verdadeira em qualquer situação. Tautologias são fundamentais para identificar leis lógicas universais.",
  },
  {
    term: "Inferência indutiva",
    definition:
      "Tipo de inferência que generaliza a partir de casos particulares observados. Não garante certeza, mas oferece conclusões prováveis. Exemplo: após observar vários dias de sol no verão, infere-se que \"no verão geralmente faz sol\".",
  },
  {
    term: "Inferência abdutiva",
    definition:
      "Tipo de inferência que busca a melhor explicação para um fato observado. Parte de um efeito para propor a causa mais provável. Exemplo: \"A rua está molhada, então provavelmente choveu.\" É muito usada em diagnósticos e investigações.",
  },
  {
    term: "Implicação causal",
    definition:
      "Relação em que um evento (causa) produz ou influencia diretamente outro evento (efeito). Diferente da implicação lógica, exige uma conexão real de causa e efeito no mundo. Exemplo: \"Aquecer água a 100 °C causa sua ebulição.\"",
  },
  {
    term: "Demonstração",
    definition:
      "Sequência rigorosa de passos lógicos que parte de premissas aceitas (axiomas ou teoremas já provados) para estabelecer a verdade de uma conclusão. É o método formal usado em matemática e lógica para provar que algo é necessariamente verdadeiro.",
  },
  {
    term: "Forma Clausal",
    definition:
      "Representação de sentenças como conjunção de disjunções de literais. A conversão pode ser feita em 4 passos (proposicional) ou 7 passos (relacional, incluindo Skolemização).",
  },
  {
    term: "Resolução",
    definition:
      "Princípio de inferência em que, dadas duas cláusulas com literais complementares (χ e ¬χ), deriva-se uma nova cláusula (resolvente) com os literais restantes de ambas. É a única regra de inferência necessária para provas por refutação.",
  },
  {
    term: "Refutação",
    definition:
      "Método de prova em que, para demonstrar que Δ ⊨ φ, acrescenta-se ¬φ a Δ, converte-se para forma clausal e deriva-se a cláusula vazia. Se a cláusula vazia for derivada, a conclusão é válida.",
  },
  {
    term: "Unificação",
    definition:
      "Processo de encontrar uma substituição de variáveis que torna dois literais idênticos. O Unificador Mais Geral (UMG) é a substituição mais útil para resolução, pois preserva o máximo de generalidade.",
  },
  {
    term: "Skolemização",
    definition:
      "Eliminação de quantificadores existenciais por constantes e funções de Skolem. Preserva satisfatibilidade (não equivalência lógica). É um passo essencial na conversão para forma clausal na lógica relacional.",
  },
  {
    term: "Cláusula de Horn",
    definition:
      "Cláusula com no máximo um literal positivo. A resolução unitária é completa para cláusulas de Horn, que são a base de linguagens como Datalog e Prolog e de engines de regras.",
  },
  {
    term: "Extração de Respostas",
    definition:
      "Extensão da resolução para perguntas do tipo 'qual valor?', usando literais de resposta goal(x). Permite não apenas verificar se algo é verdadeiro, mas descobrir quais valores satisfazem a consulta.",
  },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Build flat list of all navigable pages
const allPages = chapters.flatMap((ch) => {
  const pages = [{ id: ch.id, title: ch.title }];
  if (ch.sections) {
    pages.push(...ch.sections.map((s) => ({ id: s.id, title: s.title })));
  }
  return pages;
});

interface GlossaryContentProps {
  onNavigate: (id: string) => void;
}

const GlossaryContent = ({ onNavigate }: GlossaryContentProps) => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const lettersWithTerms = new Set(
    glossaryTerms.map((t) => t.term[0].toUpperCase())
  );

  const filteredTerms = activeLetter
    ? glossaryTerms.filter(
        (t) => t.term[0].toUpperCase() === activeLetter
      )
    : glossaryTerms;

  const sortedTerms = [...filteredTerms].sort((a, b) =>
    a.term.localeCompare(b.term, "pt-BR")
  );

  const currentIndex = allPages.findIndex((p) => p.id === "glossario");
  const prevChapter = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto scrollbar-thin bg-background">
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <p className="text-xs font-sans-book font-semibold tracking-[0.25em] uppercase text-accent mb-3">
          Termos e Definições
        </p>
        <h2 className="font-serif-book text-3xl md:text-4xl font-bold text-[hsl(var(--book-heading))] mb-2">
          Glossário
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-8" />

        {/* Alphabet bar */}
        <div className="flex flex-wrap gap-1 mb-10">
          <button
            onClick={() => setActiveLetter(null)}
            className={`
              w-8 h-8 rounded text-xs font-sans-book font-semibold transition-all duration-200
              ${activeLetter === null
                ? "bg-accent text-white shadow-md"
                : "bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent"
              }
            `}
          >
            Todos
          </button>
          {ALPHABET.map((letter) => {
            const hasTerms = lettersWithTerms.has(letter);
            return (
              <button
                key={letter}
                onClick={() => hasTerms && setActiveLetter(letter)}
                disabled={!hasTerms}
                className={`
                  w-8 h-8 rounded text-xs font-sans-book font-semibold transition-all duration-200
                  ${activeLetter === letter
                    ? "bg-accent text-white shadow-md"
                    : hasTerms
                      ? "bg-muted text-foreground hover:bg-accent/20 hover:text-accent cursor-pointer"
                      : "bg-muted/50 text-muted-foreground/30 cursor-not-allowed"
                  }
                `}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Terms */}
        <div className="space-y-6">
          {sortedTerms.length === 0 ? (
            <p className="text-muted-foreground font-serif-book text-sm italic">
              Nenhum termo encontrado para a letra "{activeLetter}".
            </p>
          ) : (
            sortedTerms.map((term, i) => (
              <div
                key={i}
                className="border-b border-border pb-5 last:border-b-0"
              >
                <h3 className="font-serif-book text-lg font-bold text-accent mb-2">
                  {term.term}
                </h3>
                <p className="font-serif-book text-sm md:text-[0.95rem] leading-[1.85] text-[hsl(var(--book-text))]">
                  {term.definition}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          {prevChapter ? (
            <button
              onClick={() => onNavigate(prevChapter.id)}
              className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-accent transition-colors group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-widest">Anterior</span>
                <span className="block font-medium text-foreground">{prevChapter.title}</span>
              </div>
            </button>
          ) : <div />}

          {nextChapter ? (
            <button
              onClick={() => onNavigate(nextChapter.id)}
              className="flex items-center gap-2 text-sm font-sans-book text-muted-foreground hover:text-accent transition-colors group text-right"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-widest">Próximo</span>
                <span className="block font-medium text-foreground">{nextChapter.title}</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </div>
    </main>
  );
};

export default GlossaryContent;
