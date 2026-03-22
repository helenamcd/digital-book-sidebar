import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { chapters } from "@/data/bookContent";

export interface GlossaryTerm {
  term: string;
  definition: string;
  firstAppearance?: string; // section/chapter id
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Implicação",
    definition:
      "Relação lógica entre duas proposições na qual a verdade da primeira (antecedente) garante a verdade da segunda (consequente). Em lógica formal, é representada pelo conectivo →. Por exemplo: \"Se o usuário apresentou erro, então o sistema exibe uma mensagem de apoio\" é uma implicação.",
    firstAppearance: "intro",
  },
  {
    term: "Máxima Verossimilhança",
    definition:
      "Método estatístico de estimação de parâmetros que busca encontrar os valores que tornam os dados observados mais prováveis. Dado um modelo estatístico com parâmetros desconhecidos, a estimativa de máxima verossimilhança (MLE) é aquela que maximiza a função de verossimilhança.",
    firstAppearance: "cap7",
  },
  {
    term: "Verossimilhança",
    definition:
      "Função que mede o quão compatíveis são os dados observados com um determinado conjunto de parâmetros de um modelo estatístico. Diferente da probabilidade, que vai do modelo para os dados, a verossimilhança vai dos dados para o modelo.",
    firstAppearance: "cap7",
  },
  {
    term: "Indução",
    definition:
      "Método de raciocínio que parte de observações particulares para formular uma conclusão geral. Por exemplo: ao observar que todos os cisnes encontrados até agora são brancos, conclui-se que \"todos os cisnes são brancos\". A indução não garante a verdade da conclusão, apenas a torna provável com base nas evidências disponíveis.",
    firstAppearance: "intro-sec1",
  },
  {
    term: "Dedução",
    definition:
      "Método de raciocínio que parte de premissas gerais para chegar a uma conclusão particular necessariamente verdadeira, desde que as premissas sejam verdadeiras. Por exemplo: \"Todo ser humano é mortal. Sócrates é um ser humano. Logo, Sócrates é mortal.\" A dedução preserva a verdade das premissas na conclusão.",
    firstAppearance: "intro-sec1",
  },
  {
    term: "Hipótese",
    definition:
      "Suposição provisória que serve como ponto de partida para uma investigação. É uma afirmação que pode ser testada e verificada por meio de evidências ou experimentos. Se confirmada, pode se tornar parte de uma teoria; se refutada, é descartada ou revisada.",
    firstAppearance: "intro",
  },
  {
    term: "Inferência",
    definition:
      "Processo de chegar a uma conclusão a partir de premissas ou evidências disponíveis. É o ato de raciocinar logicamente, extraindo informações novas a partir do que já se sabe. Pode ser dedutiva, indutiva ou abdutiva.",
    firstAppearance: "intro",
  },
  {
    term: "Implicação lógica válida",
    definition:
      "Relação entre premissas e conclusão em que, se todas as premissas forem verdadeiras, a conclusão é necessariamente verdadeira. Diferente da implicação material, aqui há uma conexão lógica genuína entre antecedente e consequente.",
    firstAppearance: "intro-sec2",
  },
  {
    term: "Implicação material",
    definition:
      "Conectivo lógico (→) que é falso apenas quando o antecedente é verdadeiro e o consequente é falso. Diferente da implicação do dia a dia, não exige relação de causa entre as proposições — basta que a combinação V→F não ocorra.",
    firstAppearance: "cap2",
  },
  {
    term: "Tautologia",
    definition:
      "Proposição composta que é sempre verdadeira, independentemente dos valores lógicos de suas partes. Por exemplo: \"Chove ou não chove\" (P ∨ ¬P) é verdadeira em qualquer situação. Tautologias são fundamentais para identificar leis lógicas universais.",
    firstAppearance: "cap1-sec3",
  },
  {
    term: "Inferência indutiva",
    definition:
      "Tipo de inferência que generaliza a partir de casos particulares observados. Não garante certeza, mas oferece conclusões prováveis. Exemplo: após observar vários dias de sol no verão, infere-se que \"no verão geralmente faz sol\".",
    firstAppearance: "intro-sec1",
  },
  {
    term: "Inferência abdutiva",
    definition:
      "Tipo de inferência que busca a melhor explicação para um fato observado. Parte de um efeito para propor a causa mais provável. Exemplo: \"A rua está molhada, então provavelmente choveu.\" É muito usada em diagnósticos e investigações.",
    firstAppearance: "intro-sec1",
  },
  {
    term: "Implicação causal",
    definition:
      "Relação em que um evento (causa) produz ou influencia diretamente outro evento (efeito). Diferente da implicação lógica, exige uma conexão real de causa e efeito no mundo. Exemplo: \"Aquecer água a 100 °C causa sua ebulição.\"",
    firstAppearance: "intro-sec2",
  },
  {
    term: "Demonstração",
    definition:
      "Sequência rigorosa de passos lógicos que parte de premissas aceitas (axiomas ou teoremas já provados) para estabelecer a verdade de uma conclusão. É o método formal usado em matemática e lógica para provar que algo é necessariamente verdadeiro.",
    firstAppearance: "intro",
  },
  {
    term: "Forma Clausal",
    definition:
      "Representação de sentenças como conjunção de disjunções de literais. A conversão pode ser feita em 4 passos (proposicional) ou 7 passos (relacional, incluindo Skolemização).",
    firstAppearance: "cap6-sec1",
  },
  {
    term: "Resolução",
    definition:
      "Princípio de inferência em que, dadas duas cláusulas com literais complementares (χ e ¬χ), deriva-se uma nova cláusula (resolvente) com os literais restantes de ambas. É a única regra de inferência necessária para provas por refutação.",
    firstAppearance: "cap6-sec2",
  },
  {
    term: "Refutação",
    definition:
      "Método de prova em que, para demonstrar que Δ ⊨ φ, acrescenta-se ¬φ a Δ, converte-se para forma clausal e deriva-se a cláusula vazia. Se a cláusula vazia for derivada, a conclusão é válida.",
    firstAppearance: "cap6-sec4",
  },
  {
    term: "Unificação",
    definition:
      "Processo de encontrar uma substituição de variáveis que torna dois literais idênticos. O Unificador Mais Geral (UMG) é a substituição mais útil para resolução, pois preserva o máximo de generalidade.",
    firstAppearance: "cap6-sec6",
  },
  {
    term: "Skolemização",
    definition:
      "Eliminação de quantificadores existenciais por constantes e funções de Skolem. Preserva satisfatibilidade (não equivalência lógica). É um passo essencial na conversão para forma clausal na lógica relacional.",
    firstAppearance: "cap6-sec3",
  },
  {
    term: "Cláusula de Horn",
    definition:
      "Cláusula com no máximo um literal positivo. A resolução unitária é completa para cláusulas de Horn, que são a base de linguagens como Datalog e Prolog e de engines de regras.",
    firstAppearance: "cap6-sec9",
  },
  {
    term: "Extração de Respostas",
    definition:
      "Extensão da resolução para perguntas do tipo 'qual valor?', usando literais de resposta goal(x). Permite não apenas verificar se algo é verdadeiro, mas descobrir quais valores satisfazem a consulta.",
    firstAppearance: "cap6-sec8",
  },
  // Cap 1 - Introdução
  {
    term: "Sentença lógica",
    definition: "Afirmação declarativa que pode ser avaliada como verdadeira ou falsa. É a unidade fundamental da lógica formal.",
    firstAppearance: "intro-sec1",
  },
  {
    term: "Lógica simbólica",
    definition: "Uso de símbolos formais para representar sentenças e raciocínios, permitindo manipulação mecânica e precisa de argumentos lógicos.",
    firstAppearance: "intro-sec4",
  },
  {
    term: "Lógica Proposicional",
    definition: "Sistema lógico que opera sobre proposições e conectivos lógicos (¬, ∧, ∨, ⇒, ⇔). É decidível e computacionalmente bem comportada.",
    firstAppearance: "cap2",
  },
  {
    term: "Lógica Relacional",
    definition: "Extensão da Lógica Proposicional com variáveis e quantificadores sobre domínios finitos, permitindo falar sobre objetos individuais e suas relações.",
    firstAppearance: "cap4",
  },
  // Cap 2 - Lógica Proposicional
  {
    term: "Proposição",
    definition: "Afirmação que pode ser verdadeira ou falsa; unidade básica da lógica proposicional. Representa uma condição do mundo avaliável como V ou F.",
    firstAppearance: "cap2",
  },
  {
    term: "Conectivos lógicos",
    definition: "Operadores (¬, ∧, ∨, ⇒, ⇔) que combinam proposições simples em sentenças compostas, formando a base da linguagem proposicional.",
    firstAppearance: "cap2-sec-intro",
  },
  {
    term: "Tabela-verdade",
    definition: "Enumeração sistemática de todas as atribuições possíveis de valores-verdade para avaliar sentenças lógicas. Método exaustivo de verificação.",
    firstAppearance: "cap1-sec2",
  },
  {
    term: "Contradição",
    definition: "Sentença que é falsa em toda atribuição de valores-verdade possível. Oposto da tautologia. Exemplo: P ∧ ¬P.",
    firstAppearance: "cap1-sec3",
  },
  {
    term: "Contingência",
    definition: "Sentença que é verdadeira em algumas atribuições de valores-verdade e falsa em outras. Nem tautologia nem contradição.",
    firstAppearance: "cap1-sec3",
  },
  {
    term: "Satisfatibilidade",
    definition: "Propriedade de uma sentença para a qual existe ao menos uma atribuição de valores-verdade que a torna verdadeira.",
    firstAppearance: "cap1-sec4",
  },
  {
    term: "Equivalência lógica",
    definition: "Relação entre duas sentenças que possuem os mesmos valores-verdade em toda atribuição possível. Escritas como φ ≡ ψ.",
    firstAppearance: "cap2-sec2",
  },
  {
    term: "Consequência lógica",
    definition: "Relação em que toda atribuição que satisfaz as premissas também satisfaz a conclusão. Notação: Δ ⊨ φ.",
    firstAppearance: "intro-sec2",
  },
  {
    term: "Consistência lógica",
    definition: "Propriedade de um conjunto de sentenças para o qual existe ao menos uma atribuição que satisfaz todas as sentenças simultaneamente.",
    firstAppearance: "cap2-sec4",
  },
  {
    term: "Forma Normal Conjuntiva",
    definition: "Representação de sentenças como conjunção de disjunções (CNF). Base para resolução, SAT solvers e otimizadores de query SQL.",
    firstAppearance: "cap2-sec6",
  },
  // Cap 3 - Inferência e Prova
  {
    term: "Esquema de axioma",
    definition: "Template de raciocínio com metavariáveis que, ao ser instanciado com sentenças concretas, gera sentenças logicamente válidas.",
    firstAppearance: "cap3-sec1",
  },
  {
    term: "Regra de inferência",
    definition: "Padrão válido de derivação composto por premissas e conclusão. Cada regra captura um passo logicamente válido, como Modus Ponens.",
    firstAppearance: "cap3-sec1",
  },
  {
    term: "Prova direta",
    definition: "Sequência finita de sentenças que encadeia premissas, instâncias de axiomas e aplicações de regras de inferência até atingir a conclusão.",
    firstAppearance: "cap3-sec2",
  },
  {
    term: "Sistema de Fitch",
    definition: "Sistema de dedução natural que amplia as provas diretas com subprovas e suposições temporárias, permitindo provar implicações e negações.",
    firstAppearance: "cap3-sec3",
  },
  {
    term: "Solidez",
    definition: "Propriedade de um sistema de prova em que todo teorema provável é de fato consequência lógica das premissas. Garante que o sistema não prova falsidades.",
    firstAppearance: "cap3-sec7",
  },
  {
    term: "Completude",
    definition: "Propriedade de um sistema de prova em que toda consequência lógica pode ser efetivamente provada dentro do sistema.",
    firstAppearance: "cap3-sec7",
  },
  // Cap 4 - Lógica Relacional
  {
    term: "Constante de objeto",
    definition: "Símbolo que representa uma entidade individual do domínio na Lógica Relacional. Exemplos: cliente_001, produto_42.",
    firstAppearance: "cap4-sec1",
  },
  {
    term: "Constante de relação",
    definition: "Predicado com aridade definida que expressa propriedades ou relações entre objetos. Exemplos: ativo/1, comprou/2.",
    firstAppearance: "cap4-sec1",
  },
  {
    term: "Quantificador universal",
    definition: "Símbolo ∀ que expressa \"para todo x\": a afirmação vale para todos os objetos do domínio de discurso.",
    firstAppearance: "cap4-sec2",
  },
  {
    term: "Quantificador existencial",
    definition: "Símbolo ∃ que expressa \"existe x\": a afirmação vale para ao menos um objeto do domínio de discurso.",
    firstAppearance: "cap4-sec2",
  },
  {
    term: "Semântica de Herbrand",
    definition: "Interpretação de sentenças sobre um universo finito de constantes nomeadas, avaliando quantificadores como conjunções (∀) ou disjunções (∃).",
    firstAppearance: "cap4-sec5",
  },
  {
    term: "Grounding",
    definition: "Processo de substituição de variáveis por todas as constantes do vocabulário, convertendo sentenças quantificadas em proposicionais.",
    firstAppearance: "cap4-sec5",
  },
  // Cap 5 - Validação e Modelos
  {
    term: "Verificação de modelos",
    definition: "Processo de determinar quais atribuições de verdade satisfazem um conjunto de sentenças — o problema central de validação em sistemas lógicos.",
    firstAppearance: "cap5",
  },
  {
    term: "Propagação de restrições",
    definition: "Técnica que determina valores de átomos a partir de restrições unitárias e simplifica iterativamente o espaço de busca sem enumeração exaustiva.",
    firstAppearance: "cap5-sec2",
  },
  // Cap 7 - LPO
  {
    term: "Conceitualização",
    definition: "Tripla (objetos, funções, relações) que estrutura um domínio de conhecimento na Lógica de Primeira Ordem.",
    firstAppearance: "cap7-sec1",
  },
  {
    term: "Universo de discurso",
    definition: "Conjunto de todos os objetos sobre os quais as afirmações de uma interpretação são feitas. Pode ser finito ou infinito.",
    firstAppearance: "cap7-sec1",
  },
  {
    term: "Interpretação",
    definition: "Mapeamento de constantes da linguagem para objetos, funções e relações do universo de discurso.",
    firstAppearance: "cap7-sec2",
  },
  {
    term: "Modelo",
    definition: "Interpretação que satisfaz uma sentença φ para toda atribuição de variáveis. Notação: ⊨ᵢ φ.",
    firstAppearance: "cap7-sec2",
  },
  // Cap 8 - Indução e Generalização
  {
    term: "Indução incompleta",
    definition: "Generalização a partir de uma amostra não-exaustiva de casos. Útil na ciência empírica e aprendizado de máquina, mas não garante a validade da conclusão.",
    firstAppearance: "cap8-sec1",
  },
  {
    term: "Indução completa",
    definition: "Indução que cobre todos os casos de forma estruturada, garantindo a validade lógica da conclusão. Quando aplicada a números, é denominada indução matemática.",
    firstAppearance: "cap8-sec1",
  },
  {
    term: "Fechamento de Domínio",
    definition: "Regra de inferência (DC) que, para domínios finitos, permite concluir ∀ν.φ[ν] a partir da verificação de φ para cada constante do domínio individualmente.",
    firstAppearance: "cap8-sec2",
  },
  {
    term: "Indução Linear",
    definition: "Forma clássica de indução completa para sequências: prova-se o caso base φ[a] e o caso indutivo ∀μ.(φ[μ]⇒φ[s(μ)]) para concluir ∀ν.φ[ν].",
    firstAppearance: "cap8-sec3",
  },
  {
    term: "Indução em Árvore",
    definition: "Extensão da indução linear para linguagens com múltiplas funções unárias, onde os termos formam uma árvore e é necessário um caso indutivo para cada função.",
    firstAppearance: "cap8-sec4",
  },
  {
    term: "Indução Estrutural",
    definition: "Forma mais geral de indução completa, que acomoda múltiplas constantes de objeto e funções com aridade arbitrária. Generaliza indução linear e em árvore.",
    firstAppearance: "cap8-sec5",
  },
  {
    term: "Indução Multidimensional",
    definition: "Técnica de indução para provar propriedades com múltiplos quantificadores universais, aplicando induções aninhadas sobre cada variável.",
    firstAppearance: "cap8-sec6",
  },
  {
    term: "Fortalecimento da hipótese",
    definition: "Técnica de prova em que se demonstra uma afirmação mais forte que a desejada como passo intermediário, e então se extrai a conclusão original.",
    firstAppearance: "cap8-sec7",
  },
  {
    term: "Glossário",
    definition:
      "Lista organizada de termos técnicos e suas definições, utilizada como referência rápida para o vocabulário especializado de uma área do conhecimento. Neste livro, o glossário reúne os principais conceitos de lógica formal, inferência e inteligência artificial apresentados ao longo dos capítulos.",
    firstAppearance: "glossario",
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

  // Map of page id -> title for quick lookup
  const pageTitleMap = useMemo(() => {
    const map: Record<string, string> = {};
    allPages.forEach((p) => { map[p.id] = p.title; });
    return map;
  }, []);

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
                {term.firstAppearance && pageTitleMap[term.firstAppearance] && (
                  <button
                    onClick={() => onNavigate(term.firstAppearance!)}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-sans-book text-accent hover:text-accent/80 transition-colors group"
                  >
                    <BookOpen size={12} className="opacity-70" />
                    <span className="group-hover:underline">
                      Apresentado em: {pageTitleMap[term.firstAppearance]}
                    </span>
                  </button>
                )}
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
