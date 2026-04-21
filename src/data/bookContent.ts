export interface Chapter {
  id: string;
  title: string;
  sections?: { id: string; title: string }[];
}

// Capítulos ocultos (não excluídos, apenas invisíveis)
export const hiddenChapterPrefixes: string[] = [];

export interface ChapterTable {
  headers: string[];
  rows: (string | number)[][];
}

export interface ChapterContent {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  table?: ChapterTable;
  paragraphs_after_table?: string[];
}

export const chapters: Chapter[] = [
  {
    id: "capa",
    title: "Capa",
  },
  {
    id: "prefacio",
    title: "Prefácio",
  },
  {
    id: "intro",
    title: "Capítulo 1 - Introdução",
    sections: [
      { id: "intro-sec1", title: "Sentenças Lógicas" },
      { id: "intro-sec2", title: "Consequência lógica" },
      { id: "intro-sec3", title: "Demonstrações Lógicas" },
      { id: "intro-sec4", title: "Lógica Simbólica" },
      { id: "intro-sec5", title: "Automação do Raciocínio Lógico" },
      { id: "intro-sec6", title: "Guia de Leitura" },
      { id: "intro-sec7", title: "Resumo do Capítulo" },
    ],
  },
  {
    id: "cap2",
    title: "Capítulo 2 - Lógica Proposicional",
    sections: [
      { id: "cap1-sec1", title: "Sintaxe" },
      { id: "cap1-sec2", title: "Semântica" },
      { id: "cap1-sec3", title: "Avaliação ou Interpretação" },
      { id: "cap1-sec4", title: "Satisfatibilidade" },
      { id: "cap2-sec1", title: "Propriedades Lógicas das Sentenças" },
      { id: "cap2-sec2", title: "Equivalência Lógica" },
      { id: "cap2-sec3", title: "Consequência Lógica" },
      { id: "cap2-sec4", title: "Consistência Lógica" },
      { id: "cap2-sec5", title: "Conexões entre Propriedades" },
      { id: "cap2-sec6", title: "Reescritas por Equivalência" },
      { id: "cap2-sec7", title: "Resumo do Capítulo" },
    ],
  },
  {
    id: "cap3",
    title: "Capítulo 3 - Inferência e Prova",
    sections: [
      { id: "cap3-sec1", title: "Esquemas de Axiomas e Regras de Inferência" },
      { id: "cap3-sec2", title: "Provas Diretas" },
      { id: "cap3-sec3", title: "O Sistema de Fitch e a Dedução Natural" },
      { id: "cap3-sec4", title: "Exemplo Completo: Validação de Pipeline de Dados" },
      { id: "cap3-sec5", title: "Dicas para Construir Provas" },
      { id: "cap3-sec6", title: "Solidez e Completude" },
      { id: "cap3-sec7", title: "Aplicações em Ciência de Dados" },
      { id: "cap3-sec8", title: "Resumo do Capítulo" },
    ]
  },
  {
    "id": "cap4",
    "title": "Capítulo 4 - Lógica Relacional",
    "sections": [
      { "id": "cap4-sec1", "title": "Vocabulário: Constantes, Variáveis e Relações" },
      { "id": "cap4-sec2", "title": "Três Tipos de Sentenças" },
      { "id": "cap4-sec3", "title": "Variáveis Livres e Ligadas" },
      { "id": "cap4-sec4", "title": "Base de Herbrand" },
      { "id": "cap4-sec5", "title": "Atribuições de Verdade" },
      { "id": "cap4-sec6", "title": "Propriedades Lógicas de Sentenças" },
      { "id": "cap4-sec7", "title": "Relações Lógicas entre Sentenças" },
      { "id": "cap4-sec8", "title": "Formalizando Cenários de Dados" },
      { "id": "cap4-sec9", "title": "Equivalência e Decidibilidade" },
      { "id": "cap4-sec10", "title": "Resumo do Capítulo" }
    ]
  },
  {
    id: "cap5",
    title: "Capítulo 5 - Validação, Modelos e Provas Relacionais",
    sections: [
      
      { id: "cap5-sec2", title: "Consequência lógica e verificação de modelos" },
      { id: "cap5-sec3", title: "Provas, demonstrabilidade, correção e completude" },
      { id: "cap5-sec4", title: "O sistema de Fitch e as regras de inferência" },
      { id: "cap5-sec5", title: "Quantificador universal" },
      { id: "cap5-sec6", title: "Quantificador existencial" },
      { id: "cap5-sec7", title: "Provas e validação na prática" },
      { id: "cap5-sec8", title: "Resumo do Capítulo" },
    ]
  },

  {
    id: "cap6",
    title: "Capítulo 6 - Resolução Automática",
    sections: [
      { id: "cap6-sec1", title: "Forma Clausal" },
      { id: "cap6-sec2", title: "O Princípio da Resolução Proposicional" },
      { id: "cap6-sec3", title: "Raciocínio por Refutação" },
      { id: "cap6-sec4", title: "Estratégias de Resolução" },
      { id: "cap6-sec5", title: "Resolução Relacional e Unificação" },
      { id: "cap6-sec6", title: "O Princípio da Resolução Relacional" },
      { id: "cap6-sec7", title: "Forma Clausal Relacional: Skolemização" },
      { id: "cap6-sec8", title: "Extração de Respostas" },
      { id: "cap6-sec9", title: "Aplicações em Ciência de Dados" },
      { id: "cap6-sec10", title: "Resumo do Capítulo" },
    ]
  },
  {
    id: "cap9",
    title: "Capítulo 9 - Conclusão",
    sections: [
      { id: "cap9-sec1", title: "Introdução" },
      { id: "cap9-sec2", title: "Revisão Integrada: Uma Lógica, Três Perspectivas" },
      { id: "cap9-sec3", title: "Mapa Conceitual do Livro" },
      { id: "cap9-sec4", title: "Tipos de Raciocínio em IA" },
      { id: "cap9-sec5", title: "Lógica e Aprendizado de Máquina" },
      { id: "cap9-sec6", title: "Limites Fundamentais do Raciocínio Formal" },
      { id: "cap9-sec7", title: "Caminhos para Estudo Avançado" },
      { id: "cap9-sec8", title: "Princípios para o Profissional de IA" },
      { id: "cap9-sec9", title: "Palavras Finais" },
    ]
  },
  {
    id: "mapa-mental",
    title: "Mapa Mental do Livro",
  },
  {
    id: "glossario",
    title: "Glossário",
  },
];

export const chapterContents: Record<string, ChapterContent> = {
  prefacio: {
    id: "prefacio",
    title: "Prefácio",
    paragraphs: [
      "## Origem e Motivação",
      "Este livro nasceu de uma necessidade concreta: apresentar os fundamentos da lógica formal a estudantes de graduação em Inteligência Artificial e Ciência de Dados de forma rigorosa, mas sem perder de vista as aplicações que motivam o estudo dessas ferramentas. A lógica, frequentemente relegada a um papel secundário nos currículos modernos de computação, é na verdade o substrato conceitual de alguns dos sistemas de IA mais sofisticados, de provadores automáticos de teoremas a grafos de conhecimento, de programação lógica a sistemas de verificação formal de modelos de aprendizado de máquina.",
      "A literatura existente sobre lógica formal para computação divide-se, em geral, entre obras altamente abstratas (inacessíveis para a maioria dos estudantes de IA e Ciência de Dados) e introduções superficiais que tratam a lógica como mero pré-requisito. Este livro ocupa um espaço até então vazio: uma obra rigorosa e orientada à prática, que conecta os fundamentos da lógica formal a tecnologias e problemas concretos do ecossistema contemporâneo, como SAT solvers, bancos de dados relacionais, ontologias, grafos de conhecimento, programação lógica e IA neurossimbólica. Trata-se, ao nosso conhecimento, do primeiro texto em língua portuguesa a reunir esses tópicos em uma progressão pedagógica coerente, pensada especificamente para formar profissionais nas áreas de Inteligência Artificial e Ciência de Dados capazes de raciocinar com precisão sobre dados, modelos e decisões automatizadas.",
      "O ponto de partida foi a obra seminal *Introduction to Logic* (*Synthesis Lectures on Computer Science*, Volume 8, 3ª edição), de {{ref:genesereth|Michael Genesereth e Eric J. Kao|GENESERETH, M.; KAO, E. J. Introduction to Logic. 3rd ed. Synthesis Lectures on Computer Science, Vol. 8. Morgan & Claypool Publishers, 2017. Disponível em: https://intrologic.stanford.edu}}, publicada pela Morgan & Claypool. Complementarmente, o desenvolvimento deste trabalho também se apoiou em outras referências consolidadas da área. Em língua portuguesa, recorreu-se a {{ref:alencar|Alencar Filho (2000)|ALENCAR FILHO, E. Iniciação a lógica matemática. São Paulo: Nobel, 2000.}}, cuja obra *Iniciação à Lógica Matemática* oferece uma introdução acessível e sistemática aos fundamentos da disciplina, e a {{ref:souza|Souza (2002)|SOUZA, J. N. Lógica para Ciência da Computação. São Paulo: Campus, 2002.}}, com *Lógica para Ciência da Computação*, voltado especificamente ao contexto computacional. Para as discussões envolvendo inteligência artificial e representação do conhecimento, utilizou-se {{ref:russell|Russell e Norvig (2004)|RUSSEL, R.; NORVIG, P. Inteligência Artificial. 2a ed. Rio de Janeiro: Campus, 2004.}}, referência clássica no campo. Por fim, incorporou-se a contribuição de {{ref:vargas|Vargas, Silva e Finger (2022)|VARGAS, Ketrin Diovana Alves Rodrigues; DA SILVA, João Pablo Silva; FINGER, Alice Fonseca. Estratégias para o ensino de lógica matemática com pensamento computacional: Uma revisão sistemática da literatura. Simpósio Brasileiro de Informática na Educação (SBIE), p. 1391-1403, 2022.}}, estudo de revisão sistemática que investiga estratégias para o ensino de lógica matemática articuladas ao pensamento computacional, trazendo uma perspectiva contemporânea e educacional ao conjunto bibliográfico.",
      "Esta obra é organizada em três dimensões principais: (1) *adaptação do nível de apresentação* para estudantes de graduação em IA e Ciência de Dados, com maior ênfase em intuições e motivações; (2) *fusão e reorganização de capítulos*, condensando conteúdo onde apropriado e aprofundando onde relevante para o público-alvo; e (3) *introdução sistemática de conexões com IA e Ciência de Dados*, incluindo exemplos em Python, discussões sobre aprendizado de máquina, grafos de conhecimento, raciocínio neurossimbólico e limites computacionais.",
      
      "## Para Quem é Este Livro",
      "Este livro é dirigido a estudantes de graduação em Inteligência Artificial, Ciência de Dados, Ciência da Computação e áreas afins que buscam uma fundamentação lógica sólida. Presume-se familiaridade com pensamento algorítmico básico e noções elementares de matemática discreta, mas não se exige experiência prévia com lógica formal.",
      "A progressão dos capítulos é deliberadamente gradual:",
      "- **Capítulos 1-4:** Lógica Proposicional, conectivos, tabelas-verdade, sistema Fitch, satisfatibilidade\n- **Capítulos 5-6:** Lógica Relacional, variáveis, quantificadores, modelos de Herbrand\n- **Capítulo 7:** Lógica de Primeira Ordem, interpretações, igualdade, universos infinitos\n- **Capítulo 8:** Indução e Generalização, formas de indução completa e suas aplicações\n- **Capítulo 9:** Conclusão integrativa, panorama do raciocínio em IA, limites formais e fronteiras de pesquisa",
      "## Termo de Uso de Inteligência Artificial na Produção deste Livro",
      "Em consonância com os valores de transparência e rigor que norteiam esta obra, os autores declaram explicitamente o uso de ferramentas de Inteligência Artificial Generativa no processo de produção deste livro. A seguir, descrevemos o processo adotado e os papéis desempenhados por humanos e sistemas de IA em cada etapa.",
      "### Descrição do Processo de Produção",
      "O processo de produção deste livro envolveu oito fases sequenciais, combinando trabalho humano especializado com assistência de IA. As fases foram as seguintes:",
      "1. **Leitura e compreensão do material original.** Os autores docentes realizaram leitura integral e detalhada das obras referenciadas anteriormente, identificando os conceitos centrais, a progressão pedagógica e os exemplos mais relevantes para o público-alvo desta adaptação.\n2. **Uso de IA para resumo e fusão de capítulos.** Capítulos do material original foram submetidos a um sistema de IA generativa (Claude, da Anthropic) para produção de resumos, identificação de conceitos redundantes e propostas de fusão de seções, visando adequação ao currículo de IA e Ciência de Dados.\n3. **Revisão do material por docente.** Um professor especialista revisou criticamente o material produzido pela IA, corrigindo imprecisões, ajustando o nível de rigor formal, e aprovando ou rejeitando sugestões de reestruturação.\n4. **Expansão de conceitos e introdução de exemplos de IA e Ciência de Dados.** Os docentes identificaram lacunas e oportunidades de enriquecimento do conteúdo, especificando quais conexões com IA/ML deveriam ser introduzidas, quais exemplos computacionais incluir e quais caixas de destaque criar.\n5. **Uso de IA para a escrita.** Com base nas especificações dos docentes, o sistema de IA generativa produziu os rascunhos dos capítulos, incluindo texto dissertativo, exemplos formais, tabelas, caixas de destaque e exercícios com gabarito.\n6. **Revisão do material.** Os docentes revisaram cada capítulo produzido, verificando correção técnica, clareza pedagógica, adequação do nível de formalismo e coerência com os capítulos anteriores. Correções foram aplicadas iterativamente.\n7. **Material ensinado em sala de aula.** Os capítulos revisados foram utilizados em disciplinas de graduação, obtendo-se feedback direto de estudantes sobre dificuldades de compreensão, exemplos pouco claros e exercícios com grau de dificuldade inadequado.\n8. **Revisão final com auxílio de IA.** O feedback coletado em sala de aula foi incorporado em uma rodada final de revisão, com auxílio do sistema de IA para reescrita de passagens problemáticas, adição de exemplos complementares e ajuste de exercícios.",
      "### Diagrama Resumido do Processo",
      "O diagrama a seguir resume as oito fases, distinguindo as etapas conduzidas primariamente por **humanos** (em verde), por **IA** (em laranja) e por **colaboração humano-IA** (em azul):",
      ":::diagrama-processo:::",
      "### Princípios que Guiaram o Uso de IA",
      "O uso de IA neste projeto foi pautado por três princípios fundamentais, alinhados com boas práticas emergentes em publicação acadêmica assistida por IA:",
      "- **Supervisão humana em todas as fases.** Nenhum conteúdo técnico foi publicado sem revisão por um docente especialista. A IA atuou como ferramenta de produtividade e escrita, não como autoridade epistêmica.\n- **Transparência plena.** O uso de IA é declarado explicitamente neste prefácio, com descrição detalhada das fases e dos papéis de cada agente. Os autores consideram que a opacidade sobre o uso de IA em materiais didáticos é eticamente inaceitável.\n- **Responsabilidade pelos erros.** Eventuais imprecisões técnicas, pedagógicas ou conceituais são de responsabilidade dos autores humanos, que fizeram as escolhas finais em cada etapa do processo.",
      "| **Nota sobre Limitações da IA Generativa**<br/>Sistemas de IA generativa como o utilizado neste projeto podem produzir conteúdo incorreto, incompleto ou impreciso, especialmente em domínios que exigem raciocínio formal rigoroso. O processo de revisão humana descrito acima foi desenhado precisamente para mitigar esses riscos. Leitores que identificarem imprecisões técnicas são encorajados a comunicá-las aos autores. |\n|---|",
      "## Agradecimentos",
      "Os autores expressam profunda gratidão aos professores **Michael Genesereth** e **Eric J. Kao**, cujo trabalho pioneiro em lógica formal para ciência da computação tornou este projeto possível. A clareza e a precisão da obra original foram o padrão que buscamos manter e superar em cada página desta adaptação.",
      "Agradecemos também aos estudantes de graduação que utilizaram versões preliminares deste material em sala de aula, suas dúvidas, críticas e sugestões foram indispensáveis para moldar a versão final. A vocês, este livro é dedicado.",
      "*Os Autores*",
      "## Nota sobre esta Edição em PDF",
      "Esta edição em formato PDF foi gerada automaticamente pelo sistema de Inteligência Artificial Claude (Anthropic) a partir do escaneamento e processamento do conteúdo do livro digital disponível em logica.livros.alicce.com.br. O processo envolveu a leitura estruturada do código-fonte da aplicação web, a extração do conteúdo textual, a conversão de formatações e a composição tipográfica do documento. Por ser um processo automatizado, esta versão pode conter inconsistências de formatação, quebras de página inesperadas, caracteres mal renderizados ou pequenas divergências em relação à versão digital interativa. Em caso de dúvida sobre o conteúdo, recomenda-se consultar a versão online, que é a versão oficial e continuamente atualizada do livro.",
      ":::download-pdf:::",
    ],
  },
  intro: {
    id: "intro",
    title: "Introdução",
    subtitle: "Da intuição ao raciocínio estruturado",
    paragraphs: [
      "A lógica é o estudo formal do raciocínio correto. Desde a Antiguidade, com Aristóteles, ela surgiu como uma tentativa de responder a uma pergunta simples: **quando um argumento é válido?** Ao longo dos séculos, esse estudo evoluiu para sistemas formais capazes de representar afirmações, relações e inferências de maneira precisa. Hoje, embora muitas vezes invisível, a lógica está no coração dos sistemas computacionais, dos algoritmos de aprendizado de máquina e das decisões automatizadas que moldam a ciência de dados.",
      "Na ciência de dados, raramente lidamos apenas com números. Lidamos com **afirmações sobre dados**, **condições**, **regras**, **hipóteses** e **conclusões**. Sempre que um cientista de dados escreve uma regra de filtragem, define critérios para classificar usuários ou interpreta a saída de um modelo, está implicitamente usando lógica. Por exemplo, ao definir que *\"usuários que interagiram com o sistema e apresentaram queda de desempenho devem receber uma intervenção\"*, estamos lidando com uma estrutura lógica do tipo **SE condição ENTÃO ação**. Entender essa estrutura de forma explícita ajuda a evitar erros, ambiguidades e inferências incorretas.",
      "Podemos representar esse tipo de raciocínio de maneira simples:",
      "```\\nInteragiu_com_o_sistema  ∧  Queda_de_desempenho\\n                ↓\\n        Recomendar_intervenção\\\n```",
      "Esse diagrama mostra algo fundamental: **dados não 'falam sozinhos'**. Eles precisam ser organizados em proposições e conectados por regras de inferência. A lógica fornece exatamente esse arcabouço.",
    
      "##Lógica como base para modelos, regras e decisões",
      "Em cursos de ciência de dados, é comum que os alunos aprendam rapidamente ferramentas, linguagens e bibliotecas. No entanto, sem uma base lógica sólida, surge um problema recorrente: **modelos funcionam, mas as decisões não são bem compreendidas**. A lógica ajuda o estudante a responder perguntas como:",
      "- O que exatamente meu modelo está afirmando?\n- Em quais condições essa conclusão é válida?\n- Que suposições estou fazendo sobre os dados?\n- Que inferências são justificadas, e quais não são?",
      "Considere um exemplo típico em IHC e análise de comportamento do usuário:",
      "```\\nSE (Tempo_de_tarefa > esperado)\\nE  (Número_de_erros alto)\\nENTÃO (Usuário está confuso)\\n```",
      "Sem lógica, essa regra parece intuitiva. Com lógica, o aluno aprende a questionar:\n\n- Essa condição é suficiente ou apenas necessária?\n- O inverso é verdadeiro?\n- Existem exceções?\n- O que acontece se apenas uma das condições ocorrer?",
      "Essas perguntas são lógicas antes de serem estatísticas. Elas ajudam a construir sistemas mais explicáveis, algo crucial em áreas como **IHC, computação afetiva e sistemas educacionais inteligentes**, onde decisões precisam ser compreendidas e justificadas.",
      
      "##Do raciocínio humano ao raciocínio computacional",
      "Uma das grandes contribuições da lógica é permitir que o raciocínio humano seja **externalizado**, analisado e automatizado. Quando transformamos uma intuição em uma proposição lógica, damos um passo importante:",
      "```\\nIntuição humana\\n       ↓\\nExpressão lógica\\n       ↓\\nImplementação computacional\\n```",
      "Esse processo é central na ciência de dados. Um pipeline de dados pode ser visto como uma sequência de inferências:",
      "```\\nDados brutos\\n   ↓\\nPré-processamento (regras)\\n   ↓\\nModelo (hipóteses)\\n   ↓\\nInferência (conclusões)\\n```",
      "Cada etapa envolve decisões lógicas, mesmo quando usamos modelos probabilísticos. A lógica não compete com a estatística ou o aprendizado de máquina, ela **organiza o pensamento que dá sentido a essas ferramentas**.",

      "##Por que aprender lógica no curso de Ciência de Dados?",
      "Aprender lógica ajuda o aluno a:",
      "- **Pensar com precisão**, evitando ambiguidades em definições e análises.\n- **Interpretar resultados**, distinguindo correlação, implicação e causalidade.\n- **Projetar regras e sistemas explicáveis**, especialmente em contextos de IHC.\n- **Comunicar decisões**, tornando argumentos claros para equipes multidisciplinares.\n- **Detectar falácias**, tanto em análises próprias quanto em resultados automatizados.",
      "Em vez de ver a lógica como um conjunto abstrato de símbolos, este livro a apresenta como uma **ferramenta prática para estruturar o raciocínio em ciência de dados**, conectando formalismo e aplicação. Ao longo dos capítulos, o leitor verá como proposições, operadores lógicos, inferência e provas aparecem, de forma explícita ou implícita, em tarefas cotidianas da área.",
      "Aprender lógica, portanto, não é apenas aprender a \"provar coisas\", mas aprender a **pensar melhor sobre dados, modelos e decisões**, uma habilidade essencial para qualquer cientista de dados contemporâneo.",
      "\"Pensar logicamente é aprender a transformar dados em decisões justificáveis.\", Fundamentos de Lógica Aplicada à Ciência de Dados",

    ],
  },

  "intro-sec1": {
    id: "intro-sec1",
    title: "Sentenças Lógicas na Ciência de Dados",
    subtitle: "Introdução",
    paragraphs: [
      "Para muitos estudantes, a lógica ainda parece um tema distante e excessivamente teórico, associada apenas a demonstrações matemáticas formais ou a provas abstratas sem ligação aparente com a prática profissional. Na ciência de dados, porém, essa percepção não poderia estar mais equivocada. Sempre que lidamos com dados reais, estamos cercados por **incerteza, múltiplas possibilidades e informação incompleta**, exatamente o tipo de cenário para o qual as sentenças lógicas foram criadas.",
      "Na ciência de dados, uma **sentença lógica** é uma afirmação que pode ser verdadeira ou falsa sobre o mundo representado pelos dados. Por exemplo:",
      "- “O usuário clicou no botão de ajuda”\n- “O tempo de execução da tarefa foi maior que o esperado”\n- “O modelo classificou o usuário como em risco de evasão”.",
      "Cada uma dessas afirmações descreve um aspecto do sistema ou do comportamento do usuário e, assim como na lógica clássica, pode ser avaliada como verdadeira ou falsa em diferentes situações.",
    
      "##Mundos possíveis e dados",
      "Considere um sistema interativo analisado por uma equipe de ciência de dados em um contexto de IHC. Suponha que estamos observando quatro usuários (**U1, U2, U3 e U4**) e queremos modelar se cada usuário:",
      "- clicou no botão de ajuda;\n- apresentou erro na tarefa;\n- concluiu a atividade.",
      "Cada uma dessas relações pode ser verdadeira ou falsa para cada usuário. **Não conhecemos inicialmente o estado real do sistema**, apenas sabemos que existem várias configurações possíveis.",
      "Cada configuração possível desses fatos corresponde a um **mundo possível**. Um mundo é simplesmente uma maneira específica de o sistema estar naquele momento.",
      "Por exemplo:",
      "- Em um mundo possível, U1 clicou no botão de ajuda e concluiu a tarefa sem erros.\n- Em outro, U1 não clicou no botão de ajuda e abandonou a tarefa após vários erros.",
      "A ciência de dados raramente começa sabendo qual desses mundos é o real. Em vez disso, começamos com **dados parciais**, registros incompletos e observações limitadas.",
    
      "##Sentenças como restrições sobre os dados",
      "É nesse ponto que as sentenças lógicas passam a desempenhar um papel central na ciência de dados. Cada sentença lógica expressa uma **restrição** sobre quais mundos possíveis são compatíveis com aquilo que sabemos a partir dos dados.",
      "Considere as seguintes sentenças em um sistema educacional digital:",
      "- O usuário U2 concluiu a tarefa.\n- O usuário U1 apresentou erro ou abandonou a tarefa.\n- Todo usuário que apresentou erro recebeu uma mensagem de apoio.\n- Nenhum usuário recebe mensagem de apoio sem ter apresentado erro.",
      "Cada uma dessas sentenças elimina certos mundos possíveis e mantém outros. Por exemplo, qualquer mundo em que U2 não tenha concluído a tarefa é automaticamente descartado se acreditamos na primeira sentença.",
      "Para visualizar esse processo, vamos definir as proposições envolvidas:",
      "- **p₁**: U2 concluiu a tarefa\n- **p₂**: U1 apresentou erro\n- **p₃**: U1 abandonou a tarefa\n- **p₄**: U1 recebeu mensagem de apoio",
      "####Passo 1 — Todos os mundos possíveis (antes de qualquer restrição)",
      "Com 4 proposições, temos exatamente 2⁴ = 16 mundos possíveis. Cada linha representa uma combinação distinta de valores-verdade para p₁, p₂, p₃ e p₄, conforme apresentado na **Tabela 1**.",
      "```\n:::caption: Tabela 1 — Os 16 mundos possíveis para 4 proposições, antes de qualquer restrição.:::\n| Mundo | p₁ | p₂ | p₃ | p₄ | Status |\n| M1  | V | V | V | V | — |\n| M2  | V | V | V | F | — |\n| M3  | V | V | F | V | — |\n| M4  | V | V | F | F | — |\n| M5  | V | F | V | V | — |\n| M6  | V | F | V | F | — |\n| M7  | V | F | F | V | — |\n| M8  | V | F | F | F | — |\n| M9  | F | V | V | V | — |\n| M10 | F | V | V | F | — |\n| M11 | F | V | F | V | — |\n| M12 | F | V | F | F | — |\n| M13 | F | F | V | V | — |\n| M14 | F | F | V | F | — |\n| M15 | F | F | F | V | — |\n| M16 | F | F | F | F | — |\n```",
      "####Passo 2 — Aplicando S1: \"U2 concluiu a tarefa\" (p₁ = V)",
      "A primeira sentença afirma que U2 concluiu a tarefa, ou seja, p₁ deve ser verdadeira. Portanto, todo mundo em que p₁ = F é incompatível com essa restrição e precisa ser eliminado. A **Tabela 2** mostra o resultado dessa filtragem, marcando quais mundos sobrevivem e quais são descartados.",
      "```\n:::caption: Tabela 2 — Aplicação da restrição p₁ = V (sentença S1): mundos com p₁ falso são eliminados.:::\n| Mundo | p₁ | p₂ | p₃ | p₄ | Status |\n| M1  | V | V | V | V | ✓ |\n| M2  | V | V | V | F | ✓ |\n| M3  | V | V | F | V | ✓ |\n| M4  | V | V | F | F | ✓ |\n| M5  | V | F | V | V | ✓ |\n| M6  | V | F | V | F | ✓ |\n| M7  | V | F | F | V | ✓ |\n| M8  | V | F | F | F | ✓ |\n| M9  | F | V | V | V | ✗ Eliminado |\n| M10 | F | V | V | F | ✗ Eliminado |\n| M11 | F | V | F | V | ✗ Eliminado |\n| M12 | F | V | F | F | ✗ Eliminado |\n| M13 | F | F | V | V | ✗ Eliminado |\n| M14 | F | F | V | F | ✗ Eliminado |\n| M15 | F | F | F | V | ✗ Eliminado |\n| M16 | F | F | F | F | ✗ Eliminado |\n```",
      "Como pode ser observado na Tabela 2, os mundos M9 a M16 são descartados porque neles U2 não concluiu a tarefa.",
      "####Passo 3 — Aplicando S2: \"U1 apresentou erro ou abandonou a tarefa\" (p₂ ∨ p₃ = V)",
      "A segunda sentença é uma disjunção: U1 apresentou erro (p₂) ou abandonou a tarefa (p₃). Para satisfazê-la, ao menos uma das duas proposições deve ser verdadeira. Logo, eliminamos todo mundo em que tanto p₂ = F quanto p₃ = F. A **Tabela 3** apresenta o efeito dessa restrição sobre os mundos remanescentes.",
      "```\n:::caption: Tabela 3 — Aplicação da restrição p₂ ∨ p₃ = V (sentença S2): mundos sem erro nem abandono são eliminados.:::\n| Mundo | p₁ | p₂ | p₃ | p₄ | Status |\n| M1  | V | V | V | V | ✓ |\n| M2  | V | V | V | F | ✓ |\n| M3  | V | V | F | V | ✓ |\n| M4  | V | V | F | F | ✓ |\n| M5  | V | F | V | V | ✓ |\n| M6  | V | F | V | F | ✓ |\n| M7  | V | F | F | V | ✗ Eliminado |\n| M8  | V | F | F | F | ✗ Eliminado |\n```",
      "Conforme indicado na Tabela 3, os mundos M7 e M8 são descartados porque neles U1 não apresentou erro nem abandonou a tarefa.",
      "####Passo 4 — Aplicando S3: \"Todo usuário que apresentou erro recebeu mensagem de apoio\" (p₂ → p₄)",
      "A terceira sentença é uma implicação: se U1 apresentou erro (p₂), então deve ter recebido mensagem de apoio (p₄). Portanto, mundos em que p₂ = V e p₄ = F violam a regra e são eliminados. Quando p₂ = F, a implicação é trivialmente satisfeita. A **Tabela 4** ilustra a aplicação dessa regra aos mundos restantes.",
      "```\n:::caption: Tabela 4 — Aplicação da implicação p₂ → p₄ (sentença S3): mundos com erro mas sem apoio são eliminados.:::\n| Mundo | p₁ | p₂ | p₃ | p₄ | Status |\n| M1  | V | V | V | V | ✓ |\n| M2  | V | V | V | F | ✗ Eliminado |\n| M3  | V | V | F | V | ✓ |\n| M4  | V | V | F | F | ✗ Eliminado |\n| M5  | V | F | V | V | ✓ (p₂=F, regra não se aplica) |\n| M6  | V | F | V | F | ✓ (p₂=F, regra não se aplica) |\n```",
      "Como evidenciado na Tabela 4, os mundos M2 e M4 são descartados porque neles U1 apresentou erro mas não recebeu apoio.",
      "####Passo 5 — Aplicando S4: \"Nenhum usuário recebe mensagem sem ter apresentado erro\" (p₄ → p₂)",
      "A quarta sentença estabelece a implicação inversa: se U1 recebeu mensagem de apoio (p₄), então deve ter apresentado erro (p₂). Sendo assim, mundos em que p₄ = V e p₂ = F são incompatíveis com essa restrição. A **Tabela 5** mostra o resultado da aplicação dessa regra.",
      "```\n:::caption: Tabela 5 — Aplicação da implicação p₄ → p₂ (sentença S4): mundos com apoio mas sem erro são eliminados.:::\n| Mundo | p₁ | p₂ | p₃ | p₄ | Status |\n| M1  | V | V | V | V | ✓ |\n| M3  | V | V | F | V | ✓ |\n| M5  | V | F | V | V | ✗ Eliminado |\n| M6  | V | F | V | F | ✓ |\n```",
      "Conforme observado na Tabela 5, o mundo M5 é descartado porque nele U1 recebeu apoio sem ter apresentado erro.",
      "####Resultado final — Mundos compatíveis com todas as sentenças",
      "Após a aplicação sucessiva de todas as sentenças, restam apenas três mundos possíveis compatíveis com o conjunto de restrições. Cada um deles representa uma interpretação distinta do estado do sistema, conforme sintetizado na **Tabela 6**.",
      "```\n:::caption: Tabela 6 — Mundos compatíveis com todas as sentenças e suas interpretações.:::\n| Mundo | p₁ | p₂ | p₃ | p₄ | Interpretação |\n| M1 | V | V | V | V | U1 errou e abandonou, recebeu apoio |\n| M3 | V | V | F | V | U1 errou (sem abandono) e recebeu apoio |\n| M6 | V | F | V | F | U1 abandonou (sem erro) e não recebeu apoio |\n```",
      "Como mostra a Tabela 6, das 16 combinações iniciais restam apenas **3 mundos possíveis** compatíveis com todas as sentenças. O mundo real deve ser um deles. Esse é o poder das sentenças lógicas como **restrições**: cada nova informação reduz o espaço de possibilidades, aproximando-nos progressivamente da verdade sobre os dados.",
      "Acreditar em uma sentença equivale a afirmar que o mundo real está **entre aqueles em que essa sentença é verdadeira**. Assim, as sentenças funcionam como filtros: elas reduzem o espaço de possibilidades compatíveis com os dados observados.",
      "Quando combinamos várias sentenças, o conjunto de mundos possíveis vai se tornando cada vez menor. Cada nova informação adiciona uma nova restrição, refinando nossa compreensão do sistema.",
      "O mundo real, portanto, deve estar na **interseção dos mundos compatíveis com todas as sentenças conhecidas**. Esse processo de restrição progressiva está na base do raciocínio lógico, da inferência e, mais adiante, da modelagem estatística e probabilística em ciência de dados.",
      
      "##Conhecimento incompleto e raciocínio lógico",
      "Um ponto central da ciência de dados é o fato de que **raramente dispomos de todas as informações relevantes** sobre um fenômeno. Em muitos cenários, sabemos apenas parte do que ocorreu: por exemplo, podemos identificar que um usuário apresentou erro durante uma tarefa, mas não saber se ele buscou ajuda no sistema ou tentou resolver o problema de forma autônoma.",
      "A lógica oferece um **instrumento fundamental para lidar com esse tipo de situação**, pois permite expressar com precisão não apenas **o que sabemos**, mas também **aquilo que permanece desconhecido**. Essa distinção é crucial para evitar interpretações equivocadas dos dados e para preservar a **integridade do raciocínio analítico**.",
      "Ao explicitar os **limites do nosso conhecimento**, a lógica sustenta atividades essenciais da ciência de dados, como:",
      "- a interpretação correta de logs de interação;\n- a definição de regras de decisão em sistemas adaptativos;\n- a construção de modelos mais **transparentes e explicáveis**;\n- a prevenção de **inferências indevidas** baseadas em informações incompletas.",
      "Em vez de impor conclusões apressadas, o **raciocínio lógico** orienta o analista a trabalhar com **conjuntos de possibilidades** consistentes com as evidências disponíveis, mantendo abertas apenas aquelas que **não entram em contradição com os dados observados**.",
      
    ],
  },


"intro-sec2": {
    id: "intro-sec2",
    title: "Consequência lógica",
    subtitle: "Introdução",
    paragraphs: [
      "##Consequência lógica na ciência de dados",
      "Como vimos anteriormente, na ciência de dados, raramente trabalhamos com informações completas. Em geral, temos um conjunto de sentenças derivadas de dados, como registros, logs e rótulos, ou de regras e modelos construídos sobre esses dados. Essas sentenças descrevem apenas parcialmente o sistema que estamos analisando. A partir delas, queremos responder perguntas fundamentais: *o que pode ser concluído com certeza?* O que é apenas possível? E o que não pode ser verdadeiro de forma alguma?",
      "Antes de avançar, é útil fixar um termo que aparecerá com frequência: **premissa**. Uma premissa é uma sentença que assumimos como verdadeira no início de um raciocínio, seja porque foi observada nos dados, seja porque corresponde a uma regra, hipótese ou restrição do problema. As premissas formam o ponto de partida a partir do qual buscamos extrair conclusões.",
      "É nesse contexto que surge a noção de **consequência lógica**: quando uma conclusão é verdadeira em *todo* cenário compatível com o que sabemos, dizemos que ela é uma consequência lógica das nossas premissas. Em outras palavras, não é possível aceitar as premissas como verdadeiras e ao mesmo tempo rejeitar a conclusão.",
      "##Exemplo: sistema educacional digital",
      "Considere um sistema educacional digital em que mensagens de apoio são enviadas exatamente quando um estudante comete erro, nada mais, nada menos. A partir dos dados, sabemos que:",
      "- Todo estudante que cometeu erro recebeu mensagem de apoio.\n- Todo estudante que recebeu mensagem de apoio cometeu erro.\n- O estudante U2 recebeu uma mensagem de apoio.",
      "As duas primeiras sentenças estabelecem uma equivalência: cometer erro e receber mensagem de apoio são condições que sempre ocorrem juntas. Dado isso, os dados não precisam dizer diretamente que U2 cometeu erro, não é possível que U2 tenha recebido uma mensagem sem tê-lo cometido. Logo, \"U2 cometeu erro\" é uma consequência lógica das três premissas, derivada apenas pela estrutura lógica das sentenças, sem nenhum cálculo estatístico.",
      "##Quando as premissas não determinam completamente o que é verdadeiro",
      "Na prática, um conjunto de premissas costuma ser compatível com vários cenários ao mesmo tempo. Suponha que os dados indiquem apenas:",
      "- U1 cometeu erro ou abandonou a tarefa.\n- U1 não recebeu mensagem de apoio.",
      "Isso é compatível com mais de um cenário: U1 pode ter cometido erro e o sistema falhou em enviar a mensagem; ou U1 pode ter abandonado a tarefa antes de qualquer erro ser registrado. Como não sabemos qual cenário é o real, não podemos afirmar com certeza se U1 cometeu erro ou não.",
      "Isso nos leva a três situações possíveis diante de qualquer conclusão:",
      "- **Certa:** verdadeira em todos os cenários compatíveis com as premissas. Podemos afirmá-la.\n- **Impossível:** falsa em todos os cenários. Podemos negá-la.\n- **Indeterminada:** verdadeira em alguns cenários e falsa em outros. Não podemos nem afirmar nem negar.",
      "##Verificando consequência lógica",
      "Uma forma de verificar se uma conclusão é consequência lógica das premissas é avaliá-la em todos os cenários compatíveis com as premissas e checar se ela é verdadeira em cada um. Essa ideia corresponde à verificação por modelos (*model checking*), onde avaliamos a conclusão em todos os cenários possíveis de forma sistemática.",
      "Para problemas pequenos isso é viável. Mas em ciência de dados real o número de cenários cresce rapidamente, às vezes até ao infinito, tornando a enumeração impraticável. Por isso, nos próximos capítulos veremos como usar *regras formais de inferência* para chegar às mesmas conclusões de forma simbólica, sem precisar listar todos os cenários possíveis.",
    ],
  },

  
  "intro-sec3": {
    id: "intro-sec3",
    title: "Demonstrações Lógicas",
    subtitle: "Introdução",
    paragraphs: [
      "##Demonstrações lógicas na ciência de dados",
      "Na ciência de dados, muitas perguntas podem ser respondidas de duas maneiras distintas. Podemos tentar testar todos os cenários possíveis ou podemos **raciocinar logicamente** a partir de regras já conhecidas. As **demonstrações lógicas** surgem como uma alternativa mais eficiente ao exame exaustivo de possibilidades.",
      "Esse raciocínio é análogo ao que fazemos em álgebra. Em vez de testar valores aleatórios até encontrar uma solução, manipulamos simbolicamente as equações. De forma semelhante, em lógica, partimos de **premissas** e aplicamos **regras formais de inferência** para obter conclusões que já estão implicitamente contidas nessas premissas.",

      "##Regras de inferência e padrões de raciocínio",
      "Uma contribuição central da lógica clássica foi a identificação de **regras de inferência**, padrões corretos de raciocínio que preservam a verdade.",
      "Considere um exemplo simples em ciência de dados educacionais:",
      "- Todo estudante que cometeu erro recebeu feedback automático.\n- Todo estudante que recebeu feedback automático teve sua atividade registrada no log.",
      "Portanto:\n- Todo estudante que cometeu erro teve sua atividade registrada no log.",
      "Essa conclusão decorre apenas da **estrutura lógica** das sentenças.",
      "O mesmo raciocínio pode ser expresso de forma abstrata:",
      "- Todos os x são y.\n- Todos os y são z.\n- Portanto, todos os x são z.",

      "##Correção lógica não depende do conteúdo",
      "A correção do raciocínio lógico é determinada pela **forma das sentenças**, e não pelos objetos específicos nelas mencionados. Se as premissas forem verdadeiras, a conclusão obtida por uma regra dedutiva correta **necessariamente será verdadeira**.",

      "##Padrões corretos e padrões incorretos",
      "Nem todo padrão de raciocínio é válido. Alguns parecem intuitivos, mas podem levar a conclusões incorretas.",
      "Considere o seguinte padrão:",
      "- Todos os x são y.\n- Alguns y são z.\n- Portanto, alguns x são z.",
      "Esse padrão **não garante** conclusões corretas em todos os casos. Um raciocínio só é dedutivamente válido se **nunca produzir conclusões falsas quando as premissas forem verdadeiras**.",

      "##Dedução, indução e ciência de dados",
      "Na ciência de dados, utilizamos diferentes formas de raciocínio para compreender fenômenos e tomar decisões. Entre elas, destacam-se a **dedução** e a **indução**, que desempenham papéis distintos.",
      "A **dedução** parte de princípios gerais ou regras já aceitas e chega a conclusões específicas. Quando as premissas são verdadeiras e o raciocínio é válido, a conclusão é **garantidamente verdadeira**. Por esse motivo, a dedução é o objeto central de estudo da Lógica.",
      "A **indução**, por outro lado, parte de observações particulares para formular generalizações. Por exemplo:",
      "- Observei muitos usuários com esse comportamento.\n- Nunca observei um caso contrário.\n- Portanto, esse comportamento sempre ocorre.",
      "Esse tipo de raciocínio é a base da **Ciência empírica e da aprendizagem de máquina**. No entanto, quando a indução é incompleta, isto é, quando não observamos todos os casos possíveis -, ela **não oferece garantias absolutas**. Sempre pode existir um caso ainda não observado que contradiga a conclusão.",
      "Essa distinção esteve no cerne de uma famosa divergência entre o físico **Albert Einstein** e seu contemporâneo **Niels Bohr**. Bohr ridicularizou a ênfase de Einstein na dedução em vez da indução, afirmando: *“Você não está pensando; você está apenas sendo lógico”*. Bohr defendia a indução como motor da descoberta científica, enquanto Einstein atribuía grande valor à dedução e à coerência lógica.",
      "Na ciência de dados, essa tensão permanece atual: **a indução permite descobrir padrões**, enquanto **a dedução garante a correção das conclusões extraídas a partir de regras e modelos**.",

      "##Demonstrações, implicação lógica e mundos possíveis",
      "Uma conclusão é **logicamente implicada** quando é verdadeira em todos os mundos possíveis compatíveis com as premissas.",
      "Uma conclusão é **demonstrável** quando pode ser obtida por uma sequência finita de aplicações de regras de inferência.",
      "Em sistemas lógicos bem definidos, essas duas noções coincidem, permitindo verificar implicações **sem enumerar todos os mundos possíveis**, mesmo quando esse conjunto é enorme ou infinito.",

    ],
  },

  "intro-sec4": {
    id: "intro-sec4",
    title: "Formalização Simbólica e Implicação Lógica",
    subtitle: "Introdução",
    paragraphs: [

      "##Formalização simbólica em ciência de dados",
      "Assim como em problemas algébricos, o primeiro passo para o raciocínio lógico rigoroso em ciência de dados é a **formalização**. Em vez de trabalhar diretamente com frases em linguagem natural, identificamos os fatos relevantes e os representamos por **símbolos**.",

      "Considere as seguintes definições:",
      "- `e`: o estudante apresentou erro\n- `f`: o estudante recebeu feedback\n- `a`: o estudante abandonou a atividade\n- `r`: o registro foi armazenado no log",

      "Com essas abreviações, podemos escrever sentenças como:",
      "``` \ne ⇒ f\nf ⇒ r\n```",

      "##Implicação lógica como encadeamento simbólico",
      "A lógica permite encadear implicações por meio de regras de inferência. Antes de ver um exemplo, é importante entender o símbolo **⇒**, lido como *“implica”* ou *“então”*. Quando escrevemos `p ⇒ q`, estamos dizendo que **sempre que p for verdadeiro, q também será verdadeiro**. Ou seja, p é uma condição suficiente para q. A linha horizontal (────────) separa as **premissas** (acima) da **conclusão** (abaixo): se aceitamos as premissas, então a conclusão segue necessariamente.",
      "Um exemplo clássico desse encadeamento é a **transitividade**:",
      "``` \np ⇒ q\nq ⇒ s\n────────\np ⇒ s\n```",
      "Lendo linha a linha:\n- **p ⇒ q**: se p é verdadeiro, então q também é.\n- **q ⇒ s**: se q é verdadeiro, então s também é.\n- **p ⇒ s**: portanto, se p é verdadeiro, s também é. A relação “atravessa” q e conecta diretamente p a s.",
      "Agora, aplicando esse mesmo raciocínio ao nosso contexto de ciência de dados:",
      "``` \ne ⇒ f\nf ⇒ r\n────────\ne ⇒ r\n```",
      "Lendo linha a linha:\n- **e ⇒ f**: se o estudante apresentou erro, então recebeu feedback.\n- **f ⇒ r**: se o estudante recebeu feedback, então o registro foi armazenado no log.\n- **e ⇒ r**: logo, se o estudante apresentou erro, então sua interação foi registrada no log.",

      "##Conjunções e disjunções",
      "Muitos cenários envolvem múltiplas condições combinadas. Para isso, usamos dois conectivos: a **conjunção**, representada por **∧** (lida como *“e”*), que exige que **todas** as condições sejam verdadeiras ao mesmo tempo, e a **disjunção**, representada por **∨** (lida como *“ou”*), que exige que **pelo menos uma** das condições seja verdadeira. Vejamos o primeiro caso, com conjunção:",
      "``` \n(e ∧ a) ⇒ i\ni ⇒ r\n```",
      "Lendo linha a linha:\n\n**(e ∧ a) ⇒ i**: se o estudante apresentou erro **e** pediu ajuda, então houve uma interação.\n\n**i ⇒ r**: se houve interação, então o registro foi armazenado no log.\n\nEncadeando as duas premissas pela transitividade vista antes, concluímos:",
      "``` \n(e ∧ a) ⇒ r\n```",
      "Ou seja: **se ocorreram erro e pedido de ajuda simultaneamente, então o log foi registrado**, sem precisar mencionar a interação intermediária.",

      "Também podemos representar **alternativas** com a disjunção. No exemplo abaixo, basta que uma das condições aconteça para que a conclusão valha:",
      "``` \n(e ∨ a) ⇒ i\n```",
      "Leitura: se o estudante apresentou erro **ou** pediu ajuda (não importa qual dos dois, podendo ser até os dois), então houve uma interação. A disjunção é útil para capturar situações em que diferentes gatilhos levam ao mesmo efeito.",

      "##Esquema geral de inferência",
      "Generalizando os padrões anteriores, podemos representar qualquer regra de inferência envolvendo conjunções e disjunções no seguinte esquema abstrato:",
      "``` \np₁ ∧ … ∧ pₖ ⇒ q₁ ∨ … ∨ qₗ\nr₁ ∧ … ∧ rₘ ⇒ s₁ ∨ … ∨ sₙ\n────────────────────────\np₁ ∧ … ∧ pₖ ∧ r₁ ∧ … ∧ rₘ ⇒ q₁ ∨ … ∨ qₗ ∨ s₁ ∨ … ∨ sₙ\n```",
      "Lendo linha a linha:\n- **p₁ ∧ … ∧ pₖ ⇒ q₁ ∨ … ∨ qₗ**: a primeira premissa diz que, se todas as condições p₁, …, pₖ forem verdadeiras ao mesmo tempo, então pelo menos uma das alternativas q₁, …, qₗ se realiza.\n- **r₁ ∧ … ∧ rₘ ⇒ s₁ ∨ … ∨ sₙ**: a segunda premissa segue a mesma estrutura, com outro conjunto de condições (r₁, …, rₘ) levando a outras alternativas (s₁, …, sₙ).\n- **p₁ ∧ … ∧ pₖ ∧ r₁ ∧ … ∧ rₘ ⇒ q₁ ∨ … ∨ qₗ ∨ s₁ ∨ … ∨ sₙ**: a conclusão combina os dois lados — se **todas** as condições das duas premissas valerem juntas, então **alguma** das alternativas das duas conclusões necessariamente valerá.",
      "Em outras palavras: ao juntar as hipóteses de duas regras (com **∧**), também juntamos as possíveis consequências (com **∨**). Esse esquema é a base para descrever sistemas com muitas variáveis, como conjuntos de regras de negócio, políticas de acesso ou modelos de decisão.",

      "Esse tipo de formalização permite aplicar a lógica a **regras, logs, sistemas educacionais e modelos de decisão**, eliminando ambiguidades e garantindo conclusões corretas.",

    ],
  },

"intro-sec5": {
  id: "intro-sec5",
  title: "Automação do Raciocínio Lógico",
  subtitle: "Introdução",
  paragraphs: [

    "##Automação do raciocínio lógico",
    "A existência de uma **linguagem formal** combinada com um conjunto de **regras mecânicas de inferência** torna possível a **automação do raciocínio lógico** por meio de computadores.",
    "Em ciência de dados, isso significa que fatos, regras e hipóteses podem ser representados simbolicamente e processados de forma automática para gerar conclusões.",

    "##Automação como verificação de implicação lógica",
    "Para entender essa ideia, vamos retomar um exemplo que já foi trabalhado anteriormente.",
    "Considere as seguintes proposições:",
    "- `p`: U2 apresentou erro\n- `q`: U2 recebeu feedback\n- `r`: U2 abandonou a atividade",
    "E as regras:",
    "- Se um estudante apresenta erro, então recebe feedback.\n- Se um estudante recebe feedback, então ele não abandona a atividade.",
    "Em linguagem lógica:",
    "``` \np → q\nq → ¬r\n```",
    "Sabemos que, se os dados indicam que **p** é verdadeiro, podemos concluir:",
    "``` \nq\n¬r\n```",
    "Até aqui, esse raciocínio foi apresentado como um processo feito por uma pessoa, aplicando regras lógicas para chegar a uma conclusão. No entanto, esse mesmo processo pode ser realizado de forma automática por um sistema computacional.",
    "Ou seja, ao receber a informação de que **p** é verdadeiro, o sistema pode aplicar mecanicamente as regras e inferir que **q** e **¬r** também são verdadeiros. Essas conclusões são logicamente implicadas pelas premissas e podem ser obtidas sem intervenção humana, apenas pela aplicação das regras formais.",

    "##Da história à prática",
    "A ideia de automatizar o raciocínio lógico remonta a **Gottfried Wilhelm Leibniz**, que imaginava uma forma de mecanizar o pensamento por meio de símbolos e cálculos.",
    "Posteriormente, **George Boole** desenvolveu a álgebra booleana, que serviu de base para a lógica utilizada nos computadores modernos.",
    "Com o avanço da computação, essas ideias passaram a ser implementadas em sistemas reais.",

    "##Aplicações em ciência de dados",
    "A automação do raciocínio lógico é aplicada em diversas áreas, como:",
    "- bancos de dados;\n- integração de dados;\n- sistemas baseados em regras;\n- planilhas lógicas;\n- análise de normas e regulamentos.",

    "##Automação e explicabilidade",
    "A lógica automatizada complementa métodos estatísticos ao garantir que certas conclusões sejam **necessariamente verdadeiras**, e não apenas prováveis.",
    "Isso contribui para sistemas de ciência de dados **mais explicáveis, auditáveis e confiáveis**.",

  ],
},

  "intro-sec6": {
    id: "intro-sec-reading-guide",
    title: "Guia de Leitura",
    subtitle: "Introdução",
    paragraphs: [

      "##Um guia para as lógicas estudadas",
      "Embora a lógica seja frequentemente apresentada como um único campo, existem **vários sistemas lógicos distintos**, cada um com capacidades e limitações próprias. Neste livro, exploramos três grandes famílias de lógica, organizadas de forma progressiva.",

      "**Lógica Proposicional:** é a lógica das proposições, nas quais símbolos representam condições globais sobre o mundo. Em ciência de dados, ela aparece naturalmente em regras IF-THEN, árvores de decisão, validações e sistemas baseados em regras, sendo computacionalmente bem comportada e totalmente decidível.",

      "**Lógica Relacional:** amplia a lógica proposicional ao permitir falar sobre objetos individuais e suas relações. Ela introduz variáveis, quantificadores e predicados, sendo fundamental para modelar bases de dados e regras gerais.",

      "**Lógica Funcional:** permite descrever mundos com infinitos objetos, aumentando significativamente o poder expressivo da linguagem. Esse ganho vem acompanhado de um custo: algumas propriedades computacionais desejáveis são perdidas.",

      "##Expressividade versus complexidade",
      "Todas essas lógicas compartilham uma linguagem formal, uma semântica precisa e uma noção clara de **implicação lógica**.",
      "Elas ilustram o trade-off fundamental entre **o que pode ser expresso** e **o que pode ser computado**.",

      "##Tópicos fora do escopo",
      "Alguns temas relevantes, como probabilidade, indução, paradoxos e raciocínio não monotônico, não são tratados em profundidade neste livro, embora estejam intimamente ligados à ciência de dados.",

      "##Uma observação final",
      "Este livro opera em um nível meta-lógico: contém sentenças sobre sentenças e provas sobre provas.",
      "Estamos usando a **lógica para estudar a própria lógica**, o que pode gerar confusão, mas também evidencia seu poder como ferramenta intelectual.",

    ],
  },

  "intro-sec7": {
    id: "intro-sec7",
    title: "Resumo do Capítulo",
    paragraphs: [
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Sentença lógica | Afirmação declarativa que pode ser avaliada como verdadeira ou falsa |\n| Mundos possíveis | Configurações distintas de valores-verdade compatíveis com o que sabemos |\n| Premissa | Sentença assumida como verdadeira no início de um raciocínio |\n| Consequência lógica | Relação em que a verdade das premissas garante a verdade da conclusão |\n| Demonstração lógica | Sequência finita de passos que estabelece a validade de uma conclusão |\n| Regras de inferência | Padrões corretos de raciocínio que preservam a verdade das premissas |\n| Dedução | Raciocínio que parte de regras gerais e garante conclusões verdadeiras |\n| Indução | Raciocínio que generaliza a partir de observações particulares, sem garantias absolutas |\n| Lógica simbólica | Uso de símbolos formais para representar sentenças e raciocínios |\n| Conectivos lógicos | Símbolos como ∧ (e), ∨ (ou) e ⇒ (implica) que combinam sentenças |\n| Automação do raciocínio | Uso de algoritmos para verificar ou derivar conclusões lógicas |\n| Lógica Proposicional | Lógica das proposições com conectivos; decidível e computável |\n| Lógica Relacional | Extensão com variáveis e quantificadores sobre domínios finitos |\n| Lógica Funcional | Extensão com funções e domínios infinitos; maior expressividade |"
    ]
  },

  cap2: {
    id: "cap2",
    title: "Lógica Proposicional",
    subtitle: "Capítulo 2",
    paragraphs: [
      "A **Lógica Proposicional** é o ponto de partida formal para o estudo da lógica aplicada à ciência de dados. Ela se ocupa de **proposições** e das **relações lógicas** entre elas. Uma proposição é uma possível condição do mundo que pode ser avaliada como **verdadeira ou falsa**, exemplos simples incluem 'está chovendo', 'o usuário clicou no botão de ajuda' ou 'o modelo classificou o aluno como em risco'.",
      "É importante notar que uma proposição **não precisa ser conhecida como verdadeira** para ser considerada uma proposição. Ela representa uma possibilidade sobre o estado do mundo, definida justamente por poder ser avaliada em um determinado contexto. Em ciência de dados, frequentemente lidamos com proposições cujo valor ainda é desconhecido ou depende da verificação de outras condições.",
      "Neste capítulo, apresentamos a Lógica Proposicional como uma **linguagem formal** para representar conhecimento de maneira precisa. Começamos pelos **elementos sintáticos** da linguagem (símbolos proposicionais e conectivos lógicos) e pela **semântica** (atribuições de valores de verdade e tabelas-verdade). Em seguida, avançamos para a **avaliação** mecânica de sentenças, o processo de calcular o valor de verdade de uma sentença a partir de uma atribuição, e para a noção de **satisfatibilidade**, que investiga quais atribuições tornam uma sentença verdadeira.",
      "Ao longo dessas seções, mostramos como a Lógica Proposicional pode formalizar tanto fragmentos da **linguagem natural** quanto o funcionamento de **circuitos digitais**, evidenciando seu papel fundamental na computação.",
      "Na segunda parte do capítulo, mudamos o foco de sentenças individuais para **propriedades e relações entre sentenças**. Investigamos quando uma sentença é válida, contingente ou insatisfatível; quando duas sentenças são logicamente equivalentes; quando uma conclusão é consequência lógica de premissas; e quando um conjunto de regras é consistente. Encerramos conectando essas noções por meio dos principais metateoremas e mostrando como reescritas por equivalência permitem simplificar e transformar expressões lógicas.",
      "A Lógica Proposicional ocupa um lugar especial por combinar **simplicidade conceitual** com **fortes garantias computacionais**. Embora sua capacidade expressiva seja limitada quando comparada a lógicas mais sofisticadas, ela permite compreender, de forma clara, conceitos centrais como **implicação lógica**, **consistência**, **satisfatibilidade** e **consequência lógica**, conceitos que servirão de base para os capítulos seguintes e para aplicações mais avançadas em ciência de dados e inteligência artificial.",
    ],
  },

  "cap1-sec1": {
    id: "cap1-sec1",
    title: "Sintaxe da Lógica Proposicional",
    subtitle: "Capítulo 2",
    paragraphs: [
      "A Lógica Proposicional não trata apenas do significado das sentenças, mas também da maneira como elas são construídas. Essa parte relacionada à estrutura é chamada de **sintaxe**. A sintaxe estabelece regras que dizem quais expressões são válidas (bem formadas) e como podemos construir sentenças mais complexas a partir de sentenças simples.",
      "Na ciência de dados, a sintaxe desempenha um papel semelhante ao da gramática em uma linguagem de programação: ela garante que regras, hipóteses e condições sejam expressas de maneira **precisa, não ambígua e verificável**.",
      "##Sentenças simples e sentenças compostas",
      "Na Lógica Proposicional, distinguimos dois tipos fundamentais de sentenças: **sentenças simples (ou proposições atômicas)** e **sentenças compostas**.",
      "As sentenças simples expressam fatos elementares sobre o mundo. Elas não contêm conectivos lógicos e, do ponto de vista da Lógica Proposicional, são tratadas como **unidades atômicas**, isto é, sua estrutura interna não é analisada.",
      "Exemplos em ciência de dados educacionais:",
      "- `erro`: o estudante cometeu erro\n- `ajuda`: o estudante clicou no botão de ajuda\n- `abandono`: o estudante abandonou a atividade\n- `log`: a interação foi registrada no log",
      "Cada uma dessas proposições pode ser avaliada como verdadeira ou falsa em um determinado cenário.",
      "Formalmente, essas sentenças são representadas por **símbolos proposicionais (ou variáveis proposicionais)**, normalmente escritos como identificadores simples, compostos por letras, números e sublinhados, iniciados por letra minúscula. Essa restrição sintática evita ambiguidades e aproxima a lógica das linguagens formais usadas em computação.",
      "##Conectivos lógicos e sentenças compostas",
      "As sentenças compostas são construídas a partir de sentenças simples por meio de **conectivos lógicos**, que expressam relações entre proposições. Os principais conectivos da Lógica Proposicional são:",
      "- Negação (¬)\n- Conjunção (∧)\n- Disjunção (∨)\n- Implicação (⇒)\n- Bicondicional (⇔)",
      "Cada conectivo possui um papel semântico claro, mas também obedece a regras sintáticas rigorosas.",
      "###Negação",
      "A negação inverte o valor lógico de uma sentença.",
      "```\\n¬erro\\n```",
      "(é falso que o estudante cometeu erro)",
      "###Conjunção",
      "A conjunção representa a ocorrência simultânea de condições.",
      "```\\n(erro ∧ ajuda)\\n```",
      "(o estudante cometeu erro e clicou no botão de ajuda)",
      "###Disjunção",
      "A disjunção representa alternativas possíveis.",
      "```\\n(erro ∨ abandono)\\n```",
      "(o estudante cometeu erro ou abandonou a atividade)",
      "###Implicação",
      "A implicação expressa relações condicionais entre sentenças.",
      "```\\n(erro ⇒ ajuda)\\n```",
      "(se o estudante cometeu erro, então recebeu ajuda)",
      "###Bicondicional",
      "O bicondicional expressa equivalência lógica entre sentenças.",
      "```\\n(aprovado ⇔ media≥7)\\n```",
      "(o estudante está aprovado se, e somente se, a média é maior ou igual a 7)",
      "##Composição e aninhamento de sentenças",
      "Uma característica importante da sintaxe da Lógica Proposicional é que sentenças compostas podem ser usadas como partes de outras sentenças compostas. Isso permite construir expressões complexas que modelam situações realistas em ciência de dados.",
      "Exemplo:",
      "```\\n((erro ∨ abandono) ⇒ log)\\n```",
      "Essa sentença afirma que, se ocorreu erro ou abandono, então houve registro no log.",
      "##Parênteses e ambiguidade",
      "Os parênteses desempenham um papel crucial na sintaxe, pois indicam explicitamente como as sentenças devem ser agrupadas. Sem eles, muitas expressões se tornam ambíguas.",
      "Considere a expressão:",
      "```\\nerro ∨ ajuda ⇒ log\\n```",
      "Ela pode representar estruturas distintas:",
      "```\\n((erro ∨ ajuda) ⇒ log)\\n```",
      "ou",
      "```\\n(erro ∨ (ajuda ⇒ log))\\n```",
      "Como essas leituras têm significados diferentes, a sintaxe exige regras adicionais para evitar ambiguidades.",
      "##Precedência e associatividade",
      "Para reduzir o uso excessivo de parênteses, a Lógica Proposicional adota regras de precedência entre os conectivos. A ordem usual (da maior para a menor precedência) é:",
      "```\\n¬\n∧\n∨\n⇒\n⇔\\n```",
      "Essa convenção é amplamente adotada, mas o uso explícito de parênteses é sempre recomendado quando houver qualquer dúvida sobre a estrutura da sentença.",
      "Exemplos:",
      "```\\n¬ erro ∧ ajuda     ≡ ((¬ erro) ∧ ajuda)\nerro ∧ ajuda ∨ log ≡ ((erro ∧ ajuda) ∨ log)\nerro ⇒ ajuda ⇔ log ≡ ((erro ⇒ ajuda) ⇔ log)\\n```",
      "Nos exemplos acima, o símbolo **≡** representa **equivalência**: indica que a sentença à esquerda e a sentença à direita têm exatamente o mesmo significado lógico, ou seja, a versão sem parênteses (à esquerda) deve ser interpretada como a versão totalmente parentizada (à direita).",
      "Quando operadores de mesma precedência aparecem em sequência, adotam-se **convenções de associatividade (à esquerda ou à direita)**, garantindo uma interpretação única da sentença.",
      "##Vocabulário e linguagem proposicional",
      "Um **vocabulário proposicional** é o conjunto de todos os símbolos proposicionais disponíveis (por exemplo, `{erro, ajuda, abandono, log}`).",
      "Uma **linguagem proposicional** é o conjunto de todas as sentenças bem formadas que podem ser construídas a partir desse vocabulário, seguindo as regras sintáticas da lógica.",
      "A sintaxe fornece o alicerce formal sobre o qual se apoiam a semântica, a inferência lógica e as aplicações da lógica em ciência de dados, inteligência artificial e sistemas computacionais.",
    ],
  },

  "cap1-sec2": {
    id: "cap1-sec2",
    title: "Semântica",
    subtitle: "Capítulo 2",
    paragraphs: [
      "A **semântica** trata do significado formal das sentenças lógicas. Em lógica, assim como em álgebra, esse significado não está relacionado ao conteúdo concreto das variáveis, mas às **relações entre seus valores**.",
      "Na álgebra, não nos importamos se uma variável representa idade, temperatura ou dinheiro. O que importa são as relações expressas pelas equações. De modo análogo, na **Lógica Proposicional**, não nos interessa o significado real das proposições, mas **como os valores de verdade das sentenças simples determinam o valor de verdade das sentenças compostas**.",
      "Essa abstração é fundamental para a **ciência de dados**. Ela permite que regras, modelos simbólicos e sistemas de decisão sejam avaliados de forma **independente do domínio específico**, garantindo consistência, verificabilidade e automatização do raciocínio.",
      "##Proposições e atribuições de verdade",
      "Uma **proposição** representa uma possibilidade sobre o estado do mundo que pode ser avaliada como verdadeira ou falsa em um determinado cenário. A lógica não fixa se uma proposição é verdadeira ou falsa, isso depende do contexto observado ou assumido.",
      "Para tornar esse contexto explícito, utilizamos o conceito de **atribuição de verdade**.",
      "Formalmente, uma atribuição de verdade associa a cada símbolo proposicional um valor de verdade. Neste livro, adotamos a convenção:",
      "- **1** para verdadeiro\n- **0** para falso",
      "Considere os seguintes símbolos proposicionais em um sistema educacional digital:",
      "- `e`: o estudante apresentou erro\n- `f`: o estudante recebeu feedback\n- `r`: a interação foi registrada no log",
      "Uma possível atribuição de verdade pode ser:",
      "- e = 1\n- f = 0\n- r = 1",
      "Outra atribuição, igualmente válida do ponto de vista lógico, poderia ser:",
      "- e = 0\n- f = 0\n- r = 1",
      "Essas atribuições **não são sentenças da lógica proposicional**, mas afirmações em nível meta (isto é, estamos falando *sobre* a lógica). Ainda assim, elas são essenciais para compreender a semântica.",
      "##Avaliação semântica de sentenças compostas",
      "Embora a lógica não determine os valores das proposições simples, **ela determina completamente o valor de qualquer sentença composta**, uma vez que a atribuição de verdade esteja definida.",
      "Essa avaliação é feita por meio de regras semânticas, tradicionalmente representadas por **tabelas-verdade**.",
      "##Negação (¬)",
      "A negação inverte o valor de verdade da sentença original. A **Tabela 1** apresenta sua semântica:",
      "```\\n| φ | ¬φ |\n|---|----|\n| 1 | 0  |\n| 0 | 1  |\nTabela 1: Tabela-verdade da negação (¬).\\n```",
      "*Exemplo em ciência de dados:* se \"o estudante apresentou erro\" é verdadeiro, então \"o estudante não apresentou erro\" é falso.",
      "##Conjunção (∧)",
      "Uma conjunção é verdadeira **somente quando todas as sentenças envolvidas são verdadeiras**. Como mostra a **Tabela 2**, das quatro combinações possíveis, apenas a primeira linha resulta em valor verdadeiro:",
      "```\\n| φ | ψ | φ ∧ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 0     |\n| 0 | 1 | 0     |\n| 0 | 0 | 0     |\nTabela 2: Tabela-verdade da conjunção (∧).\\n```",
      "*Exemplo:* \"O estudante apresentou erro **e** abandonou a atividade\" só é verdadeiro se ambos os eventos ocorreram.",
      "##Disjunção (∨)",
      "Uma disjunção é verdadeira quando **ao menos uma** das sentenças é verdadeira. Trata-se do **ou inclusivo**. A **Tabela 3** evidencia que apenas a última linha (com ambas falsas) resulta em valor falso:",
      "```\\n| φ | ψ | φ ∨ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 1     |\n| 0 | 1 | 1     |\n| 0 | 0 | 0     |\nTabela 3: Tabela-verdade da disjunção (∨).\\n```",
      "*Exemplo:* \"O estudante apresentou erro **ou** abandonou a atividade\" é verdadeiro se qualquer uma das situações ocorreu.",
      "##Implicação (⇒)",
      "A implicação é falsa **apenas quando o antecedente é verdadeiro e o consequente é falso**. Em todos os outros casos, ela é verdadeira. Essa definição é conhecida como **implicação material**. Conforme exibido na **Tabela 4**, apenas a segunda linha (φ verdadeiro e ψ falso) torna a implicação falsa:",
      "```\\n| φ | ψ | φ ⇒ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 0     |\n| 0 | 1 | 1     |\n| 0 | 0 | 1     |\nTabela 4: Tabela-verdade da implicação (⇒).\\n```",
      "*Exemplo:* \"Se o estudante apresentou erro, então recebeu feedback\". A lógica não afirma que o erro ocorreu, apenas verifica se, **caso tenha ocorrido**, a consequência foi respeitada.",
      "##Bicondicional (⇔)",
      "O bicondicional é verdadeiro quando as duas sentenças possuem **o mesmo valor de verdade**. A **Tabela 5** mostra que ele é verdadeiro nas linhas em que φ e ψ coincidem (ambos 1 ou ambos 0):",
      "```\\n| φ | ψ | φ ⇔ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 0     |\n| 0 | 1 | 0     |\n| 0 | 0 | 1     |\nTabela 5: Tabela-verdade do bicondicional (⇔).\\n```",
      "*Exemplo em ciência de dados educacionais:* \"O estudante está aprovado **se, e somente se**, a média final é maior ou igual a 7\".",
      "##Satisfação e falsificação",
      "Dizemos que uma atribuição de verdade **satisfaz** uma sentença quando essa sentença é avaliada como verdadeira sob aquela atribuição. Da mesma forma, uma atribuição **falsifica** uma sentença quando ela é avaliada como falsa.",
      "Uma atribuição satisfaz um **conjunto de sentenças** se satisfaz todas elas simultaneamente. Se falsificar ao menos uma, o conjunto como um todo não é satisfeito.",
      "Esses conceitos são centrais para atividades como:",
      "- verificação de consistência de regras\n- validação de modelos simbólicos\n- análise de hipóteses em ciência de dados\n- explicabilidade de sistemas baseados em regras",
      "Ao separar **forma lógica** de **conteúdo empírico**, a semântica torna possível automatizar o raciocínio, auditar decisões e construir sistemas de ciência de dados mais **transparentes, confiáveis e explicáveis**.",
    ]
  },

  "cap1-sec3": {
    id: "cap1-sec3",
    title: "Avaliação ou Interpretação",
    subtitle: "Capítulo 2",
    paragraphs: [
      "A **avaliação** é o processo de determinar o valor de verdade de uma sentença lógica composta a partir de uma atribuição de valores de verdade às proposições atômicas. Em ciência de dados, isso corresponde a responder perguntas como: **essa regra é verdadeira para este conjunto de dados?** ou **este registro atende à condição definida por uma regra?**",
      "Assim como na lógica formal, partimos de uma atribuição de valores (verdadeiro ou falso) para cada proposição básica e, a partir dela, calculamos o valor de verdade das sentenças mais complexas que combinam essas proposições por meio de operadores lógicos.",
      "##A ideia central da avaliação",
      "O procedimento de avaliação segue uma ideia simples e sistemática:",
      "- Substituímos cada proposição atômica pelo seu valor de verdade.\n- Avaliamos as subexpressões usando a semântica dos operadores lógicos.\n- Repetimos o processo (do interior para o exterior da fórmula) até obter o valor final da sentença.",
      "Esse processo é **mecânico** e **determinístico**. Ele não depende do significado real das proposições, apenas dos valores de verdade atribuídos e das regras semânticas da lógica.",
      "##Exemplo em ciência de dados",
      "Considere um cenário em um sistema educacional digital. Definimos:",
      "- **p**: o estudante concluiu a atividade\n- **q**: o estudante cometeu erro\n- **r**: o sistema registrou a interação no log",
      "Suponha a sentença lógica:",
      "```\\n(p ∨ q) ∧ (¬q ∨ r)\\n```",
      "Essa sentença pode ser lida informalmente como: \"o estudante concluiu a atividade ou cometeu erro, e ou não cometeu erro ou a interação foi registrada\".",
      "##Avaliação com uma atribuição de valores",
      "Considere a seguinte atribuição de valores (atribuição *i*):",
      "```\\np = 1\nq = 0\nr = 1\\n```",
      "Aplicando o procedimento de avaliação (substituição e simplificação passo a passo):",
      "```\\n(p ∨ q) ∧ (¬q ∨ r)\n(1 ∨ 0) ∧ (¬0 ∨ 1)\n1 ∧ (1 ∨ 1)\n1 ∧ 1\n1\n```",
      "Nesse caso, a sentença avalia como **verdadeira**.",
      "##Um segundo exemplo de avaliação",
      "Agora considere outra atribuição de valores (atribuição *j*):",
      "```\\np = 0\nq = 1\nr = 0\\n```",
      "Avaliando a mesma sentença:",
      "```\\n(p ∨ q) ∧ (¬q ∨ r)\n(0 ∨ 1) ∧ (¬1 ∨ 0)\n1 ∧ (0 ∨ 0)\n1 ∧ 0\n0\n```",
      "Nesse caso, a sentença avalia como **falsa**. A mesma regra lógica, aplicada a valores diferentes, pode produzir resultados diferentes, e isso é central em ciência de dados: **a validade de uma regra depende do estado dos dados**, não da regra isoladamente.",
      "##Avaliação como processo computacional",
      "O custo da avaliação de uma sentença lógica é proporcional ao tamanho da própria sentença. Em termos práticos, isso significa que regras lógicas podem ser avaliadas de forma eficiente mesmo em sistemas computacionais.",
      "Além disso, existem otimizações naturais:",
      "- Em uma **conjunção** (∧), se um dos termos for falso, não é necessário avaliar os demais.\n- Em uma **disjunção** (∨), se um dos termos for verdadeiro, o resultado já está determinado.",
      "Esses princípios aparecem o tempo todo em filtros, validação de dados, motores de regras e sistemas de decisão baseados em lógica.",
      "##Avaliação e explicabilidade em ciência de dados",
      "Um aspecto particularmente importante da avaliação lógica é sua **transparência**. Diferentemente de muitos modelos estatísticos ou de aprendizado de máquina, o processo de avaliação lógica permite explicar exatamente **por que** uma condição foi considerada verdadeira ou falsa.",
      "Por esse motivo, a avaliação semântica de sentenças lógicas é útil em: sistemas baseados em regras, validação de dados, detecção de inconsistências, sistemas educacionais inteligentes e mecanismos de decisão explicáveis.",
      "Na próxima seção, vamos avançar para o conceito de **satisfatibilidade** (a existência ou não de atribuições de verdade que tornam uma sentença verdadeira).",
    ]
  },

  "cap1-sec4": {
    id: "cap1-sec4",
    title: "Satisfatibilidade",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Enquanto a **avaliação** parte de uma atribuição específica de valores de verdade para verificar se uma sentença é verdadeira, a **satisfatibilidade** segue o caminho oposto. Nela, começamos com uma ou mais sentenças lógicas e buscamos descobrir **quais atribuições de valores tornam essas sentenças verdadeiras**.",
      "Em ciência de dados, a satisfatibilidade aparece quando fazemos perguntas como: **existe algum cenário possível em que essa regra seja verdadeira?**, **há alguma configuração de dados que respeite todas essas condições?** ou **essas restrições são coerentes entre si?**",
      "##A ideia central da satisfatibilidade",
      "Uma sentença (ou conjunto de sentenças) é **satisfatível** se existe pelo menos uma atribuição de valores de verdade que a torne verdadeira. Caso contrário, dizemos que ela é **insatisfatível**.",
      "Diferentemente da avaliação, que analisa um cenário específico, a satisfatibilidade investiga o **espaço de todos os cenários possíveis**.",
      "##Tabelas-verdade e atribuições possíveis",
      "Uma forma clássica de estudar satisfatibilidade em Lógica Proposicional é por meio de **tabelas-verdade**. Uma tabela-verdade enumera todas as atribuições possíveis de valores de verdade para as proposições atômicas de uma linguagem.",
      "Cada coluna corresponde a uma proposição, e cada linha representa uma atribuição distinta de valores.",
      "Por exemplo, para três proposições (**p**, **q** e **r**), temos:",
      "```\\n| p | q | r |\\n|---|---|---|\\n| 1 | 1 | 1 |\\n| 1 | 1 | 0 |\\n| 1 | 0 | 1 |\\n| 1 | 0 | 0 |\\n| 0 | 1 | 1 |\\n| 0 | 1 | 0 |\\n| 0 | 0 | 1 |\\n| 0 | 0 | 0 |\\n```",
      "De forma geral, para uma linguagem com **n proposições**, existem **2ⁿ atribuições possíveis**.",
      "##Verificando satisfatibilidade com tabelas-verdade",
      "Para resolver um problema de satisfatibilidade usando tabelas-verdade, seguimos um procedimento sistemático:",
      "- Construímos a tabela com todas as atribuições possíveis.\n- Avaliamos a sentença para cada linha.\n- Eliminamos as linhas em que a sentença é falsa.\n- As linhas restantes representam todas as atribuições que satisfazem a sentença.",
      "##Exemplo em ciência de dados",
      "Considere a sentença lógica:",
      "```\\n(p ∨ q) ⇒ (q ∧ r)\\n```",
      "Essa sentença pode representar, por exemplo: \"se o estudante concluiu a atividade ou cometeu erro, então ele cometeu erro e a interação foi registrada\".",
      "Ao avaliarmos essa sentença em todas as linhas da tabela-verdade, descartamos as atribuições que a tornam falsa e mantemos apenas aquelas que a satisfazem.",
      "O conjunto final de linhas restantes corresponde exatamente aos **cenários possíveis compatíveis com essa regra**.",
      "##Custo computacional da satisfatibilidade",
      "O principal problema do método de tabelas-verdade é seu **custo computacional**. O número de atribuições cresce exponencialmente com o número de proposições.",
      "Mesmo para problemas aparentemente simples, o número de cenários possíveis pode se tornar muito grande. Por exemplo, com apenas 16 proposições, existem **65.536 atribuições diferentes**.",
      "Por esse motivo, embora tabelas-verdade sejam excelentes para fins didáticos e problemas pequenos, elas se tornam impraticáveis em aplicações reais de ciência de dados.",
      "##Além das tabelas-verdade",
      "Em contextos reais, a satisfatibilidade é tratada por meio de **manipulação simbólica**, raciocínio lógico e algoritmos especializados, em vez da enumeração explícita de todos os cenários possíveis.",
      "Essas técnicas permitem verificar coerência, detectar inconsistências e analisar regras mesmo quando o espaço de possibilidades é enorme.",
      "A satisfatibilidade estabelece, assim, uma ponte direta entre **semântica**, **implicação lógica** e **provas**, preparando o terreno para métodos mais eficientes de raciocínio lógico em ciência de dados.",
    ]
  },

  "cap2-sec1": {
    id: "cap2-sec1",
    title: "Propriedades Lógicas das Sentenças",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Nas seções anteriores, vimos que uma mesma sentença pode ser verdadeira em alguns cenários e falsa em outros, dependendo da atribuição de valores às variáveis proposicionais. Aqui, vamos além: queremos classificar sentenças pelo seu comportamento ao longo de **todas** as atribuições possíveis.",
      "Essa classificação é útil para Ciência de Dados porque regras de validação, restrições e critérios de decisão precisam ser analisados não apenas em um caso observado, mas em termos do que eles permitem (ou impedem) em geral.",
      "A partir dessa perspectiva, as sentenças se organizam em três categorias mutuamente exclusivas, chamadas de **propriedades lógicas**: validade, insatisfatibilidade e contingência.",
      "###Sentenças válidas",
      "Uma sentença é **válida** quando é satisfeita por **todas** as atribuições de valores de verdade. Em termos práticos, isso significa que ela nunca falha, independentemente do cenário.",
      "Por exemplo, `p ∨ ¬p` é válida: se **p** for verdadeiro, a disjunção é verdadeira; se **p** for falso, **¬p** é verdadeiro.",
      "Do ponto de vista aplicado, sentenças válidas se comportam como tautologias: não impõem restrições reais e, portanto, não ajudam a discriminar cenários. Por outro lado, são úteis como base para transformações corretas, simplificações e verificações automáticas, não servem para decidir, mas servem para garantir.",
      "###Sentenças insatisfatíveis",
      "Uma sentença é **insatisfatível** quando nenhuma atribuição consegue torná-la verdadeira; ela falha em qualquer cenário possível.",
      "Por exemplo, `p ∧ ¬p` é insatisfatível: **p** não pode ser verdadeiro e falso ao mesmo tempo.",
      "Em aplicações, insatisfatibilidade indica contradição: regras incompatíveis, restrições impossíveis ou erros de modelagem. Se todas as atribuições falham, algo está errado no modelo.",
      "###Sentenças contingentes",
      "Uma sentença é **contingente** quando é verdadeira em alguns cenários e falsa em outros; seu valor depende efetivamente dos dados.",
      "Por exemplo, `p ∧ q` é verdadeira quando **p** e **q** são verdadeiros e falsa quando pelo menos um deles é falso.",
      "Sentenças contingentes são as únicas que realmente informam: separam casos, filtram cenários e distinguem situações aceitáveis de situações problemáticas. São a base de filtros, regras de decisão e hipóteses testáveis em ciência de dados.",
      "###Satisfatibilidade e falsificabilidade",
      "Para muitos propósitos, agrupamos essas propriedades em dois conceitos mais gerais.",
      "Uma sentença é **satisfatível** se existe pelo menos uma atribuição que a torna verdadeira (inclui válidas e contingentes). Ela responde: *existe algum cenário em que esta regra funciona?*",
      "Uma sentença é **falsificável** se existe pelo menos uma atribuição que a torna falsa (inclui contingentes e insatisfatíveis). Ela responde: *é possível violar esta restrição?*",
      "Esses dois conceitos permitem reagrupar as três propriedades anteriores. A **Tabela 2.1** sintetiza essa correspondência, indicando para cada propriedade se a sentença é satisfatível e/ou falsificável.",
      "```\n| Propriedade | Satisfatível? | Falsificável? |\n|---|---|---|\n| Válida | Sim | Não |\n| Contingente | Sim | Sim |\n| Insatisfatível | Não | Sim |\nTabela 2.1: Classificação das propriedades lógicas das sentenças quanto à satisfatibilidade e à falsificabilidade.\n```",
    ]
  },

  "cap2-sec2": {
    id: "cap2-sec2",
    title: "Equivalência Lógica",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Dizemos que duas sentenças são equivalentes quando expressam a mesma ideia, ainda que escritas de formas diferentes. Em termos formais, isso significa que elas são verdadeiras exatamente nos mesmos cenários. Denotamos essa relação pelo símbolo **≡**: escrevemos `φ ≡ ψ` para indicar que φ e ψ são logicamente equivalentes.",
      "Mais precisamente, uma sentença φ é **logicamente equivalente** a uma sentença ψ (em símbolos, `φ ≡ ψ`) se, e somente se, toda atribuição que satisfaz φ também satisfaz ψ, e vice-versa. Assim, as duas sentenças aceitam e rejeitam exatamente os mesmos cenários.",
      "###Equivalência como identidade comportamental",
      "Considere `¬(p ∨ q)` e `¬p ∧ ¬q`. Ambas são verdadeiras somente quando **p** e **q** são falsos; nos demais casos, são falsas. Como são satisfeitas pelas mesmas atribuições, são logicamente equivalentes.",
      "Em termos aplicados, isso corresponde a duas regras de filtragem distintas que selecionam exatamente o mesmo subconjunto de registros.",
      "###Exemplo de não equivalência",
      "Considere `p ∧ q` e `p ∨ q`. A conjunção exige que ambas sejam verdadeiras; a disjunção exige apenas uma. Como os conjuntos de atribuições que as satisfazem diferem, elas não são equivalentes.",
      "###Verificando equivalência com tabelas-verdade",
      "Podemos testar equivalência com o **método da tabela-verdade**: listamos todas as atribuições possíveis, avaliamos as sentenças e comparamos coluna a coluna. Se os valores coincidirem em todas as linhas, há equivalência.",
      "Para ilustrar um caso de equivalência, comparamos `¬(p ∨ q)` e `¬p ∧ ¬q` em todas as quatro atribuições possíveis. A **Tabela 2.2** apresenta o resultado dessa comparação.",
      "```\n| p | q | ¬(p ∨ q) | ¬p ∧ ¬q |\n|---|---|----------|----------|\n| 1 | 1 |    0     |    0     |\n| 1 | 0 |    0     |    0     |\n| 0 | 1 |    0     |    0     |\n| 0 | 0 |    1     |    1     |\nTabela 2.2: Tabela-verdade comparando `¬(p ∨ q)` e `¬p ∧ ¬q`.\n```",
      "Como mostra a Tabela 2.2, as colunas coincidem em todas as linhas; portanto, as sentenças são equivalentes.",
      "Em contraste, comparamos agora `p ∧ q` e `p ∨ q`, cuja diferença pretendemos evidenciar. A **Tabela 2.3** apresenta as avaliações lado a lado.",
      "```\n| p | q | p ∧ q | p ∨ q |\n|---|---|-------|-------|\n| 1 | 1 |   1   |   1   |\n| 1 | 0 |   0   |   1   |\n| 0 | 1 |   0   |   1   |\n| 0 | 0 |   0   |   0   |\nTabela 2.3: Tabela-verdade comparando `p ∧ q` e `p ∨ q`.\n```",
      "Conforme indicado na Tabela 2.3, as colunas diferem nas linhas intermediárias; portanto, não há equivalência.",
      "###Substituibilidade e reescrita de regras",
      "Uma propriedade central da equivalência é a **substituibilidade**: se φ ⇔ ψ, podemos trocar uma pela outra dentro de qualquer expressão proposicional sem alterar o comportamento lógico do sistema.",
      "Isso permite reescrever regras, simplificar expressões e otimizar validações, mantendo exatamente o mesmo conjunto de cenários aceitos. (Em lógicas mais expressivas, como a de predicados, essa substituição exige cuidados adicionais.)",
    ]
  },

  "cap2-sec3": {
    id: "cap2-sec3",
    title: "Consequência Lógica",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Em Ciência de Dados, partimos frequentemente de premissas (regras, hipóteses, restrições) e queremos saber o que pode ser afirmado com garantia. A noção que formaliza isso é a **consequência lógica**.",
      "Dizemos que φ **logicamente implica** ψ (φ ⊨ ψ) quando toda atribuição que satisfaz φ também satisfaz ψ. Mais geralmente, um conjunto Δ implica ψ (Δ ⊨ ψ) quando toda atribuição que satisfaz todas as sentenças em Δ também satisfaz ψ.",
      "###Consequência lógica como garantia",
      "A sentença `p` implica `p ∨ q`, pois sempre que **p** é verdadeiro, a disjunção também é, independentemente de **q**.",
      "Por outro lado, `p` não implica `p ∧ q`, já que **q** pode ser falso.",
      "###Consequência lógica não é verdade empírica",
      "Se uma premissa não implica uma conclusão, isso não torna a conclusão falsa; apenas significa que ela não é garantida em todos os cenários. É possível que a conclusão seja verdadeira em um conjunto de dados específico, mas falhe em outro.",
      "###Verificando consequência lógica com tabelas-verdade",
      "O método da tabela-verdade pode ser usado para verificar consequência: avaliamos premissas e conclusão em todas as atribuições e verificamos se existe alguma linha em que as premissas sejam verdadeiras e a conclusão seja falsa.",
      "###Exemplo: p ⊨ (p ∨ q)",
      "Para verificar se `p ⊨ (p ∨ q)`, avaliamos premissa e conclusão em todas as atribuições possíveis e checamos se há alguma linha em que a premissa seja verdadeira e a conclusão falsa. A **Tabela 2.4** apresenta essa avaliação.",
      "```\n| p | q | p | p ∨ q |\n|---|---|---|-------|\n| 1 | 1 | 1 |   1   |\n| 1 | 0 | 1 |   1   |\n| 0 | 1 | 0 |   1   |\n| 0 | 0 | 0 |   0   |\nTabela 2.4: Avaliação de `p` (premissa) e `p ∨ q` (conclusão) em todas as atribuições.\n```",
      "Como mostra a Tabela 2.4, toda linha em que a premissa é verdadeira tem a conclusão também verdadeira. A consequência lógica vale.",
      "###Exemplo: p ⊭ (p ∧ q)",
      "De forma análoga, testamos se `p ⊨ (p ∧ q)` enumerando todas as atribuições. A **Tabela 2.5** apresenta a avaliação correspondente.",
      "```\n| p | q | p | p ∧ q |\n|---|---|---|-------|\n| 1 | 1 | 1 |   1   |\n| 1 | 0 | 1 |   0   |\n| 0 | 1 | 0 |   0   |\n| 0 | 0 | 0 |   0   |\nTabela 2.5: Avaliação de `p` (premissa) e `p ∧ q` (conclusão) em todas as atribuições.\n```",
      "Conforme observado na Tabela 2.5, a segunda linha mostra a falha: a premissa é verdadeira e a conclusão é falsa. A consequência lógica não vale.",
      "###Consequência lógica versus equivalência",
      "Consequência lógica não é simétrica: φ ⊨ ψ não implica ψ ⊨ φ. A relação expressa inclusão de comportamentos, é mais próxima de uma desigualdade do que de uma igualdade.",
      "###Exemplo aplicado: inferência segura em regras",
      "Considere as premissas `m ⇒ (p ∨ q)` e `p ⇒ q`. Podemos concluir `m ⇒ q`, pois toda atribuição que satisfaz as duas premissas torna a conclusão verdadeira.",
    ]
  },

  "cap2-sec4": {
    id: "cap2-sec4",
    title: "Consistência Lógica",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Modelos, políticas, hipóteses e validações costumam aparecer em conjunto. Antes de inferir conclusões, é essencial verificar algo mais básico: **as regras são compatíveis?**. Essa pergunta é formalizada pela noção de **consistência lógica**.",
      "Uma sentença φ é consistente com ψ se existe pelo menos uma atribuição que satisfaz ambas. Mais geralmente, ψ é consistente com um conjunto Δ se existe alguma atribuição que satisfaz todas as sentenças de Δ e também ψ.",
      "###Exemplos de consistência e inconsistência",
      "`p ∨ q` e `¬p ∨ ¬q` são consistentes: por exemplo, com **p = 1** e **q = 0**, ambas ficam verdadeiras.",
      "Já `¬p ∧ ¬q` não é consistente com `p ∨ q`, pois não existe cenário em que as duas sejam verdadeiras simultaneamente.",
      "Para tornar essas relações explícitas, a **Tabela 2.6** avalia simultaneamente `p ∨ q`, `¬p ∨ ¬q` e `¬p ∧ ¬q` em todas as atribuições, permitindo identificar em quais cenários cada par é satisfeito conjuntamente.",
      "```\n| p | q | p ∨ q | ¬p ∨ ¬q | ¬p ∧ ¬q |\n|---|---|-------|---------|----------|\n| 1 | 1 |   1   |    0    |    0     |\n| 1 | 0 |   1   |    1    |    0     |\n| 0 | 1 |   1   |    1    |    0     |\n| 0 | 0 |   0   |    1    |    1     |\nTabela 2.6: Avaliação de `p ∨ q`, `¬p ∨ ¬q` e `¬p ∧ ¬q` em todas as atribuições.\n```",
      "Como evidenciado na Tabela 2.6, as duas primeiras sentenças coexistem nas linhas 2 e 3 (consistentes), enquanto a terceira nunca é verdadeira junto da primeira (inconsistentes).",
      "###Consistência não é equivalência nem consequência",
      "Duas sentenças podem ser consistentes sem serem equivalentes e sem que uma implique a outra. No exemplo anterior, `p ∨ q` e `¬p ∨ ¬q` coexistem em alguns cenários, mas não dizem a mesma coisa e não garantem uma à outra.",
      "###Consequência lógica por vacuidade",
      "Um resultado importante, e contraintuitivo à primeira vista, surge quando o conjunto de premissas é **insatisfatível**.",
      "Se um conjunto Δ é insatisfatível, não existe nenhuma atribuição que o satisfaça. Portanto, não existe nenhuma atribuição que satisfaça Δ e ao mesmo tempo falsifique qualquer conclusão φ. Pela definição de consequência lógica, isso significa que Δ ⊨ φ para **qualquer** φ, um conjunto insatisfatível implica logicamente qualquer coisa.",
      "Esse resultado é chamado de **consequência por vacuidade**: a implicação vale não porque as premissas garantem a conclusão, mas porque não existe nenhum contraexemplo possível.",
      "Considere o conjunto `{p, ¬p}`. Não existe atribuição que satisfaça simultaneamente `p` e `¬p`. Logo, esse conjunto implica logicamente `q`, `¬q`, `r ∧ s`, qualquer sentença que queiramos.",
      "A **Tabela 2.7** sintetiza o comportamento da consequência lógica conforme a situação semântica do conjunto de premissas.",
      "```\n| Situação das premissas | O que acontece |\n|---|---|\n| Conjunto vazio {} | Só tautologias são consequências |\n| Conjunto satisfatível | A consequência depende do conteúdo |\n| Conjunto insatisfatível | Toda sentença é consequência |\nTabela 2.7: Comportamento da consequência lógica conforme a satisfatibilidade do conjunto de premissas.\n```",
      "###Por que isso é importante em Ciência de Dados",
      "Inconsistência costuma indicar regras incompatíveis, restrições impossíveis ou falhas de modelagem. O resultado da vacuidade mostra **por que** conjuntos inconsistentes são perigosos: deles é possível inferir qualquer coisa, tornando o raciocínio completamente inútil. Um sistema de decisão com regras contraditórias pode justificar qualquer conclusão, inclusive conclusões opostas para o mesmo caso.",
      "Por isso, checar consistência é um passo fundamental antes de inferir, otimizar ou explicar regras.",
    ]
  },

  "cap2-sec5": {
    id: "cap2-sec5",
    title: "Conexões entre Propriedades e Relações Lógicas",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Até aqui, estudamos propriedades de sentenças individuais (validade, satisfatibilidade, insatisfatibilidade) e relações entre sentenças (equivalência, consequência, consistência) como conceitos separados. Nesta seção, vemos como eles se conectam, e por que essas conexões são úteis na prática.",
      "É importante distinguir dois níveis: o **nível lógico**, onde vivem os conectivos (∧, ∨, ¬, ⇒, ⇔) e as sentenças da nossa linguagem formal; e o **metanível**, onde fazemos afirmações *sobre* sentenças, equivalência, consequência e consistência são conceitos do metanível. O que os teoremas a seguir mostram é que podemos expressar relações do metanível indiretamente, construindo sentenças compostas e verificando suas propriedades.",
      "###Teorema da Equivalência",
      "φ e ψ são logicamente equivalentes se, e somente se, `φ ⇔ ψ` é válida.",
      "Isso significa que verificar equivalência entre duas sentenças é o mesmo que verificar a validade do bicondicional que as conecta.",
      "###Teorema da Dedução",
      "φ ⊨ ψ se, e somente se, `φ ⇒ ψ` é válida. Para um conjunto finito {φ₁, …, φₙ}, temos {φ₁, …, φₙ} ⊨ ψ se, e somente se, `(φ₁ ∧ … ∧ φₙ) ⇒ ψ` é válida.",
      "###Teorema da Insatisfatibilidade",
      "Δ ⊨ φ se, e somente se, `Δ ∪ {¬φ}` é insatisfatível.",
      "Esse resultado é a base da prova por refutação: para mostrar que uma conclusão é consequência lógica das premissas, negamos a conclusão, adicionamos ao conjunto de premissas e verificamos se o conjunto resultante é inconsistente. Esse é o princípio por trás dos SAT solvers e dos sistemas de prova automática estudados nos próximos capítulos.",
      "###Teorema da Consistência",
      "φ é consistente com ψ se, e somente se, `φ ∧ ψ` é satisfatível. Para {φ₁, …, φₙ}, φ é consistente com o conjunto se, e somente se, `φ₁ ∧ … ∧ φₙ ∧ φ` é satisfatível.",
      "###Teorema da Monotonicidade",
      "Se Γ ⊨ φ, então para qualquer conjunto Δ ⊇ Γ, também Δ ⊨ φ.",
      "Em palavras: **acrescentar premissas nunca invalida conclusões já garantidas**. Saber mais não faz você perder conclusões anteriores.",
      "Em ciência de dados, isso significa que adicionar novas regras de negócio a um sistema existente não quebra as inferências que já eram válidas, desde que o conjunto permaneça consistente. Se uma nova regra introduz inconsistência, o problema não é a monotonicidade, mas a própria inconsistência.",
      "###Teorema da Ramificação",
      "Se φ₁ ⊨ ψ e φ₂ ⊨ ψ, então (φ₁ ∨ φ₂) ⊨ ψ.",
      "Em palavras: se dois caminhos diferentes levam à mesma conclusão, então a disjunção dos dois também leva. Muito usado em sistemas de regras com múltiplos caminhos para a mesma decisão, por exemplo, um cliente pode ser negado por score baixo *ou* por histórico negativo, e em ambos os casos a conclusão é a mesma.",
    ]
  },

  "cap2-sec6": {
    id: "cap2-sec6",
    title: "Reescritas por Equivalência",
    subtitle: "Capítulo 2",
    paragraphs: [
      "As conexões do capítulo permitem transformar um tipo de problema em outro equivalente. Por exemplo, para verificar a validade de `φ ⇒ ψ`, podemos usar o Teorema da Dedução e verificar se φ ⊨ ψ. Isso foca a análise apenas nos cenários em que φ é verdadeira.",
      "###Reescrevendo sentenças em formas equivalentes",
      "Também podemos transformar um problema em outro do mesmo tipo reescrevendo sentenças por equivalência. Considere `((¬p ∨ q) ⇒ (p ⇒ q)) ∧ q`. Como `¬p ∨ q` é equivalente a `p ⇒ q`, reescrevemos como `((p ⇒ q) ⇒ (p ⇒ q)) ∧ q`. A primeira parte é válida; **q** é contingente; logo, a sentença completa é contingente.",
      "###Equivalências lógicas fundamentais",
      "```\\\n¬¬φ ⇔ φ\n¬(φ ∧ ψ) ⇔ (¬φ ∨ ¬ψ)\n¬(φ ∨ ψ) ⇔ (¬φ ∧ ¬ψ)\n(φ ⇒ ψ) ⇔ (¬φ ∨ ψ)\n(φ ⇔ ψ) ⇔ (φ ⇒ ψ) ∧ (ψ ⇒ φ)\n```",
      "Essas equivalências são base para normalização e conversão para formas padronizadas, como a forma clausal estudada no Capítulo 6.",
      "###Reescritas aplicadas a conjuntos de sentenças",
      "Também é possível reescrever conjuntos. Por exemplo, `{p, p ⇒ q}` é equivalente a `{p, q}`, o que reduz redundância sem mudar o significado lógico.",
      "###Reescritas, provas e métodos automáticos",
      "Provas podem ser vistas como um caso especial desse processo: começamos com premissas e adicionamos consequências até obter a conclusão. A resolução segue a mesma ideia, adicionando consequências até produzir uma contradição explícita ao testar insatisfatibilidade.",
    ]
  },

  "cap2-sec7": {
    id: "cap2-sec7",
    title: "Resumo do Capítulo",
    paragraphs: [
      "A **Tabela 2.8** consolida os principais conceitos vistos no capítulo, com suas definições resumidas, servindo como referência rápida para revisão.",
      "```\n| **Conceito** | **Definição Resumida** |\n|---|---|\n| Proposição | Afirmação que pode ser verdadeira ou falsa; unidade básica da lógica proposicional |\n| Conectivos lógicos | Operadores (¬, ∧, ∨, ⇒, ⇔) que combinam proposições em sentenças compostas |\n| Tabela-verdade | Enumeração de todas as atribuições possíveis para avaliar sentenças |\n| Válida (tautologia) | Verdadeira em toda atribuição; nunca falha |\n| Insatisfatível (contradição) | Falsa em toda atribuição; indica erro no modelo |\n| Contingente | Verdadeira em algumas atribuições e falsa em outras; a mais informativa |\n| Satisfatível | Verdadeira em ao menos uma atribuição (válidas + contingentes) |\n| Falsificável | Falsa em ao menos uma atribuição (contingentes + insatisfatíveis) |\n| Equivalência lógica | Duas sentenças com os mesmos valores em toda atribuição |\n| Consequência lógica (⊨) | Toda atribuição que satisfaz as premissas também satisfaz a conclusão |\n| Consequência por vacuidade | Conjunto insatisfatível implica logicamente qualquer sentença |\n| Consistência lógica | Existe ao menos uma atribuição que satisfaz todas as sentenças simultaneamente |\n| Monotonicidade | Acrescentar premissas nunca invalida conclusões já garantidas |\n| Ramificação | Se φ₁⊨ψ e φ₂⊨ψ, então (φ₁∨φ₂)⊨ψ |\n| Forma Normal Conjuntiva | Conjunção de disjunções, base para resolução e SAT solvers |\nTabela 2.8: Resumo dos principais conceitos do Capítulo 2.\n```",
      "###Tabela comparativa dos conceitos fundamentais",
      "Para destacar as diferenças entre as quatro relações semânticas centrais, a **Tabela 2.9** apresenta uma comparação focada nos critérios que cada uma verifica e na ideia que captura.",
      "```\n| Conceito | O que verifica | Quantas atribuições? | Ideia central | Exemplo |\n|---|---|---|---|---|\n| Validade | Se uma sentença é sempre verdadeira | Todas | Nunca falha | {} ⊨ p∨¬p |\n| Consistência | Se sentenças podem ser verdadeiras juntas | Pelo menos uma | Coexistem em algum cenário | p é consistente com q |\n| Consequência lógica | Se a verdade é preservada das premissas à conclusão | Todas as que satisfazem Δ | Premissas garantem a conclusão | {p, p⇒q} ⊨ q |\n| Equivalência lógica | Se duas sentenças têm o mesmo valor em todo cenário | Todas | Sempre concordam | p⇒q ≡ ¬p∨q |\nTabela 2.9: Comparação entre validade, consistência, consequência e equivalência lógicas.\n```",
    ]
  },

  "cap3": {
    id: "cap3",
    title: "Inferência e Prova",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Em ciência de dados, raramente trabalhamos com verdades absolutas. Modelos preditivos geram hipóteses, pipelines de dados transformam premissas em conclusões, e sistemas de recomendação inferem preferências a partir de comportamentos observados. Em todos esses cenários, a mesma questão fundamental se repete: como garantir que uma conclusão é válida a partir de um conjunto de dados e suposições?",
      "A lógica formal oferece uma resposta rigorosa por meio dos conceitos de **inferência** e **prova**. Neste capítulo, exploraremos dois mecanismos complementares: as **provas diretas** e o **sistema de dedução natural de Fitch**. Ao longo do texto, traduziremos sistematicamente os conceitos lógicos para o vocabulário e os desafios típicos da ciência de dados.",
      "Considere um pipeline de decisão em produção: você tem regras de negócio (premissas), dados de entrada e precisa garantir que as saídas sejam corretas. Verificar essa corretude por enumeração exaustiva, equivalente a examinar todas as linhas de uma tabela-verdade, torna-se computacionalmente inviável quando o número de variáveis cresce. Métodos de prova oferecem um caminho alternativo: derivar a corretude de forma simbólica, em muito menos passos.",
    ],
  },

  "cap3-sec1": {
    id: "cap3-sec1",
    title: "Esquemas de Axiomas e Regras de Inferência",
    subtitle: "Capítulo 3",
    paragraphs: [
      "##Esquemas de Axiomas",
      "Um **esquema de axioma** é uma expressão que satisfaz as regras gramaticais da linguagem, exceto pela presença de **metavariáveis**, variáveis que representam sentenças arbitrárias. Uma instância de um esquema é obtida substituindo-se as metavariáveis por sentenças concretas de forma consistente.",
      "Para o cientista de dados, esquemas de axiomas funcionam como *templates de raciocínio*. Considere o esquema abaixo, em que φ e ψ são metavariáveis:",
      "```\nφ ⇒ (ψ ⇒ φ)\n```",
      "Este esquema diz que qualquer proposição verdadeira permanece verdadeira mesmo sob hipóteses adicionais. Em termos de modelagem: se um modelo aprovou um cliente (φ), essa aprovação permanece válida mesmo que introduzamos condições extras (ψ). Instâncias concretas incluem:",
      "```\naprovado ⇒ (idade_valida ⇒ aprovado)\nnao_fraude ⇒ (saldo_positivo ⇒ nao_fraude)\nscore_alto ⇒ (historico_limpo ⇒ score_alto)\n```",
      "Um esquema é **válido** se e somente se toda instância sua é uma tautologia. Os esquemas clássicos válidos incluem:",
      "| Nome | Esquema | Analogia em Dados |\n|---|---|---|\n| Reflexividade | φ ⇒ φ | Uma regra de negócio implica ela mesma |\n| Eliminação da Negação | ¬¬φ ⇒ φ | Não-não-fraude equivale a fraude |\n| Tautologia | φ ∨ ¬φ | Um cliente é aprovado ou não é aprovado |",
      "##Regras de Inferência",
      "Uma **regra de inferência** é um padrão de raciocínio composto por premissas (acima de uma linha) e conclusões (abaixo da linha). A regra mais fundamental é a **Eliminação da Implicação** (também chamada de Modus Ponens):",
      "```\n  φ ⇒ ψ\n  φ\n  ─────────\n  ψ\n```",
      "Para o cientista de dados, essa regra é onipresente. Se temos a regra 'cliente com score > 700 recebe aprovação' e sabemos que o cliente X tem score = 750, podemos derivar que X recebe aprovação, sem precisar consultar toda a base de dados.",
      "> tipo:aviso\n**Atenção: Aplicação Incorreta de Regras de Inferência**\nUm erro comum é aplicar regras de inferência a subcomponentes de sentenças, e não a sentenças completas. Por exemplo: de (p ⇒ q) e (p ⇒ r), não se pode inferir (q ⇒ r). Sempre verifique que as premissas da regra correspondem a sentenças inteiras, não a partes delas.",
      "Além da Eliminação da Implicação, o **sistema de Hilbert** faz uso de três esquemas adicionais:",
      "- **Criação de Implicação (IC):** Se ψ é verdadeiro, então (φ ⇒ ψ) para qualquer φ.\n- **Distribuição de Implicação (ID):** (φ ⇒ (ψ ⇒ χ)) implica ((φ ⇒ ψ) ⇒ (φ ⇒ χ)).\n- **Reversão de Implicação (IR):** (¬ψ ⇒ ¬φ) implica (φ ⇒ ψ).",
      "Esses três esquemas, combinados com a Eliminação da Implicação, são suficientes para provar qualquer consequência lógica expressável com os operadores ¬ e ⇒.",
    ],
  },

  "cap3-sec2": {
    id: "cap3-sec2",
    title: "Provas Diretas",
    subtitle: "Capítulo 3",
    paragraphs: [
      "##Definição Formal",
      "Uma **prova direta** de uma conclusão φ a partir de um conjunto de premissas Δ é uma sequência finita de sentenças que termina em φ, onde cada sentença é:",
      "- Uma premissa (membro de Δ);\n- Uma instância de um esquema de axioma válido; ou\n- O resultado da aplicação de uma regra de inferência a sentenças anteriores na sequência.",
      "A notação Δ ⊢ φ indica que existe tal sequência. O conceito de **provabilidade** (⊢) é distinto do de **implicação lógica** (⊨). A implicação lógica é semântica, baseia-se em atribuições de valores-verdade. A provabilidade é sintática, baseia-se em manipulação simbólica. A ponte entre esses dois mundos é garantida pelas propriedades de solidez e completude, discutidas na Seção 3.7.",
      "##Exemplo: Pipeline de Decisão de Crédito",
      "Considere um sistema de concessão de crédito com as seguintes regras formalizadas como premissas:",
      "```\nPremissa 1: score_alto ⇒ pre_aprovado\nPremissa 2: pre_aprovado ⇒ liberado\nPremissa 3: (score_alto ⇒ liberado) ⇒ enviar_oferta\n```",
      "Queremos provar que, se um cliente tem score alto, devemos enviar uma oferta:",
      "| Linha | Sentença | Justificativa |\n|---|---|---|\n| 1 | score_alto ⇒ pre_aprovado | Premissa |\n| 2 | pre_aprovado ⇒ liberado | Premissa |\n| 3 | (score_alto ⇒ liberado) ⇒ enviar_oferta | Premissa |\n| 4 | score_alto ⇒ (pre_aprovado ⇒ liberado) | Criação de Implicação: 2 |\n| 5 | (score_alto ⇒ pre_aprovado) ⇒ (score_alto ⇒ liberado) | Distribuição de Implicação: 4 |\n| 6 | score_alto ⇒ liberado | Eliminação de Implicação: 5, 1 |\n| 7 | enviar_oferta | Eliminação de Implicação: 3, 6 |",
      "A prova é uma sequência determinística: cada passo é justificado por premissas ou por passos anteriores. Isso é exatamente o que queremos de um sistema de decisão auditável: uma cadeia de raciocínio rastreável, onde cada conclusão pode ser verificada independentemente.",
      "##Limitações das Provas Diretas",
      "As provas diretas têm uma limitação estrutural: não permitem fazer suposições temporárias dentro da prova. Toda sentença deve ser uma premissa ou derivada de premissas e axiomas anteriores. Isso torna certos resultados, como provar implicações a partir de implicações, verbosos e contraintuitivos. O sistema de Fitch, apresentado a seguir, resolve essa limitação de maneira elegante.",
    ],
  },

  "cap3-sec3": {
    id: "cap3-sec3",
    title: "O Sistema de Fitch e a Dedução Natural",
    subtitle: "Capítulo 3",
    paragraphs: [
      "##Provas Condicionais",
      "O sistema de Fitch introduz o conceito de **prova condicional**: uma prova estruturada em subprovas aninhadas, onde é permitido fazer suposições temporárias. A ideia fundamental é: se, ao assumir φ, conseguimos derivar ψ, podemos concluir (φ ⇒ ψ) fora da subprova.",
      "Essa operação é formalizada pela regra de **Introdução da Implicação (II)**:",
      "```\n  [ φ  (suposição)\n    ...\n    ψ ]\n  ─────────────────────\n  φ ⇒ ψ\n```",
      "Para o cientista de dados, isso corresponde ao raciocínio hipotético tão comum na análise exploratória: 'Suponha que esta feature seja relevante. O que podemos concluir?' Ao final, formalizamos a conclusão como uma implicação condicionada à hipótese.",
      "> tipo:info\n**Regra de Escopo em Subprovas**\nSentenças derivadas dentro de uma subprova não podem ser usadas diretamente em subprovas externas, apenas como antecedentes de implicações criadas pela regra II. Isso é análogo ao escopo de variáveis em programação: uma variável local não é acessível fora de sua função.",
      "##As Regras de Inferência do Sistema de Fitch",
      "O sistema de Fitch para lógica proposicional possui **dez regras de inferência**. Nove são regras ordinárias (aplicáveis diretamente a sentenças disponíveis); uma é condicional (a Introdução da Implicação).",
      "###Introdução e Eliminação da Conjunção (E)",
      "```\n  Introdução:          Eliminação:\n  φ₁                   φ₁ ∧ ... ∧ φₙ\n  ...                  ─────────────\n  φₙ                   φᵢ\n  ─────────────\n  φ₁ ∧ ... ∧ φₙ\n```",
      "*Exemplo em dados:* Se temos 'dados_completos', 'sem_outliers' e 'sem_duplicatas', podemos conjuntá-los em 'dataset_limpo'. E, dado 'dataset_limpo', podemos extrair qualquer um dos três atributos individualmente.",
      "###Introdução e Eliminação da Disjunção (OU)",
      "```\n  Introdução:    Eliminação:\n  φᵢ             φ₁ ∨ ... ∨ φₙ\n  ──────────     φ₁ ⇒ ψ\n  φ₁ ∨...∨ φₙ   ...\n                 φₙ ⇒ ψ\n                 ─────────────\n                 ψ\n```",
      "*Exemplo em dados:* Um cliente pode ser classificado como 'inadimplente' por score baixo (A) ou por histórico negativo (B). Se tanto A quanto B implicam 'negar_crédito', então, independentemente de qual condição disparou, a conclusão é 'negar_crédito'.",
      "###Introdução e Eliminação da Negação",
      "```\n  Introdução:         Eliminação:\n  φ ⇒ ψ               ¬¬φ\n  φ ⇒ ¬ψ             ─────\n  ──────────          φ\n  ¬φ\n```",
      "*Exemplo em dados:* Suponha que uma hipótese de modelagem (φ) implica que a média da variável-alvo é simultaneamente maior que 0,5 (ψ) e menor que 0,5 (¬ψ). Isso é contraditório, logo a hipótese deve ser rejeitada (¬φ). Esse é o fundamento lógico dos testes de hipótese por absurdo.",
      "###Introdução e Eliminação da Implicação",
      "**Eliminação da Implicação (Modus Ponens):** Se φ ⇒ ψ e φ, então ψ. Esta é a regra mais usada em sistemas de inferência e engines de regras de negócio.",
      "**Introdução da Implicação (regra condicional):** Se, dentro de uma subprova com suposição φ, derivamos ψ, então podemos concluir (φ ⇒ ψ) fora da subprova.",
      "###Introdução e Eliminação do Bicondicional",
      "O bicondicional (φ ⇔ ψ) é introduzido a partir de duas implicações opostas (φ ⇒ ψ e ψ ⇒ φ). A eliminação extrai essas duas implicações de um bicondicional dado.",
      "*Exemplo em dados:* 'cliente_premium ⇔ score > 800 ∧ sem_inadimplência' é um bicondicional típico de política de crédito. Da regra bidirecional, extraímos tanto 'se premium então score > 800 e sem_inadimplência' quanto o inverso.",
      "##Regras Auxiliares: False Introduction e False Elimination",
      "Para simplificar provas por contradição, o sistema de Fitch pode ser estendido com duas regras auxiliares:",
      "```\n  False Introduction:    False Elimination:\n  φ                      [ φ  (suposição)\n  ¬φ                       ...\n  ──────                   false ]\n  false                  ──────────\n                         ¬φ\n```",
      "Essas regras não adicionam poder expressivo ao sistema, tudo que se prova com elas pode ser provado sem elas, mas tornam as provas mais curtas e legíveis. Em termos de código, são equivalentes a funções auxiliares que encapsulam padrões repetitivos.",
    ],
  },

  "cap3-sec4": {
    id: "cap3-sec4",
    title: "Exemplo Completo: Validação de Pipeline de Dados",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Para ilustrar o poder do sistema de Fitch, considere o seguinte cenário: queremos provar que, se um conjunto de dados é considerado confiável, então ele é utilizável para treinamento.",
      "Formalizamos as premissas da seguinte forma:",
      "- **p:** Os dados são completos (sem valores faltantes críticos)\n- **p ⇒ q:** Dados completos implicam pré-processamento bem-sucedido\n- **q ⇒ r:** Pré-processamento bem-sucedido implica dados utilizáveis para treinamento",
      "Queremos provar **(p ⇒ r)**: se os dados são completos, então são utilizáveis para treinamento.",
      "| Linha | Sentença | Justificativa |\n|---|---|---|\n| 1 | p ⇒ q | Premissa |\n| 2 | q ⇒ r | Premissa |\n| 3 | p | Suposição (início de subprova) |\n| 4 | q | Eliminação de Impl.: 1, 3 |\n| 5 | r | Eliminação de Impl.: 2, 4 |\n| 6 | p ⇒ r | Introdução de Impl.: 3, 5 |",
      "Observe a estrutura: nas linhas 1 e 2 estão as premissas. Na linha 3, abrimos uma subprova com a suposição p. Dentro da subprova (linhas 3-5), derivamos r aplicando as regras de eliminação da implicação em cadeia. Na linha 6, saímos da subprova com a Introdução da Implicação, concluindo (p ⇒ r) no nível externo.",
      "Esse padrão, supor o antecedente, derivar o consequente, concluir a implicação, é o esqueleto da maioria das provas de propriedades de pipelines. Em ciência de dados, ele aparece sempre que precisamos demonstrar que uma transformação preserva alguma propriedade do dado.",
      "> tipo:dica\n**Analogia com Testes Automatizados**\nUma prova no sistema de Fitch é, em essência, um teste formal de corretude. Assim como um teste unitário verifica que uma função produz o output esperado dado um input específico, uma prova verifica que uma conclusão segue necessariamente de um conjunto de premissas, para qualquer instância de dados, não apenas para os casos testados. Provas são, portanto, uma forma de 'cobertura de 100%' logicamente garantida.",
    ],
  },

  "cap3-sec5": {
    id: "cap3-sec5",
    title: "Dicas para Construir Provas",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Construir provas pode ser desafiador, especialmente para problemas complexos. A experiência prática revela um conjunto de heurísticas que aceleram o processo significativamente.",
      "##Trabalhar a Partir da Conclusão",
      "A estratégia mais eficaz frequentemente é raciocinar de trás para frente: olhar para a conclusão desejada e perguntar 'como posso chegar aqui?'.",
      "- **Se a conclusão tem a forma (φ ⇒ ψ):** suponha φ em uma subprova e tente derivar ψ. Use Introdução de Implicação para fechar.\n- **Se a conclusão tem a forma (φ ∧ ψ):** prove φ e ψ separadamente e use Introdução de Conjunção.\n- **Se a conclusão tem a forma (φ ∨ ψ):** prove qualquer um dos disjuntos e use Introdução de Disjunção.\n- **Se a conclusão tem a forma (¬φ):** suponha φ e derive uma contradição; use Eliminação do False ou Introdução da Negação.",
      "##Explorar as Premissas",
      "Além de trabalhar a partir da conclusão, é útil examinar as premissas disponíveis:",
      "- **Se há uma premissa (φ ⇒ ψ) e o objetivo é ψ:** tente provar φ. Se bem-sucedido, use Eliminação da Implicação.\n- **Se há uma premissa (φ ∨ ψ) e o objetivo é χ:** prove (φ ⇒ χ) e (ψ ⇒ χ); aplique Eliminação da Disjunção.\n- **Se há uma premissa (φ ∧ ψ):** use Eliminação da Conjunção para extrair φ e ψ separadamente.",
      "##Provas por Contradição",
      "Quando nenhuma das abordagens anteriores funciona diretamente, a prova por contradição é uma alternativa poderosa. Para provar φ:",
      "- Assuma ¬φ em uma subprova.\n- Derive uma contradição (qualquer sentença ψ e sua negação ¬ψ).\n- Use False Introduction para derivar 'false' dentro da subprova.\n- Use False Elimination (ou Introdução da Negação) para concluir φ fora da subprova.",
      "Em ciência de dados, esse padrão aparece ao validar hipóteses nulas: assumimos que a hipótese nula é verdadeira e mostramos que ela leva a uma contradição com os dados observados, a base lógica do teste de hipótese estatístico.",
    ],
  },

  "cap3-sec6": {
    id: "cap3-sec6",
    title: "Solidez e Completude",
    subtitle: "Capítulo 3",
    paragraphs: [
      "O valor prático de um sistema de prova depende de duas propriedades fundamentais que relacionam provabilidade sintática e implicação lógica semântica:",
      "| Propriedade | Definição Formal | Implicação Prática |\n|---|---|---|\n| Solidez (Soundness) | Se Δ ⊢ φ, então Δ ⊨ φ | Toda conclusão provada é de fato verdadeira. O sistema não gera falsos positivos. |\n| Completude (Completeness) | Se Δ ⊨ φ, então Δ ⊢ φ | Toda verdade lógica pode ser provada. O sistema não tem lacunas. |",
      "Tanto o sistema de Hilbert quanto o sistema de Fitch são **sólidos e completos para a lógica proposicional**. Isso significa que, para esses sistemas, provabilidade e implicação lógica são noções equivalentes: Δ ⊢ φ se e somente se Δ ⊨ φ.",
      "> tipo:aviso\n**Atenção: essa garantia é válida para a lógica proposicional.**\nNos Capítulos 4 e 7, veremos que o sistema de Fitch é estendido com regras para quantificadores. Para a Lógica Relacional (Herbrand), a completude ainda se mantém. Para a Lógica de Primeira Ordem completa (com universos infinitos), a situação muda: o sistema permanece sólido e completo para derivar consequências, mas verificar se uma sentença é consequência lógica torna-se indecidível, não existe algoritmo que sempre termine com a resposta certa. Esse resultado, demonstrado por Church e Turing, será discutido no Capítulo 9.",
      "Para o cientista de dados, a equivalência entre ⊢ e ⊨ tem uma consequência prática importante: ao escrever uma prova formal das propriedades de um pipeline ou modelo, você tem a garantia de que:",
      "- Qualquer conclusão derivada na prova é de fato válida (solidez, sem falsos positivos lógicos).\n- Se uma propriedade é logicamente verdadeira, é possível em princípio construir uma prova para ela (completude, sem lacunas de cobertura).",
      "*Vantagem prática sobre tabelas-verdade:* provas são tipicamente muito menores do que as tabelas-verdade correspondentes, cujo tamanho cresce exponencialmente com o número de variáveis. Para problemas com dezenas de features booleanas, uma prova de meia página substitui uma tabela com bilhões de linhas.",
    ],
  },

  "cap3-sec7": {
    id: "cap3-sec7",
    title: "Aplicações em Ciência de Dados",
    subtitle: "Capítulo 3",
    paragraphs: [
      "##Verificação de Regras de Negócio",
      "Sistemas de decisão automatizada, como aprovação de crédito, detecção de fraude ou recomendação de produtos, frequentemente implementam dezenas ou centenas de regras de negócio. Garantir que essas regras sejam consistentes (sem contradições) e completas (sem casos não tratados) é um problema de verificação formal.",
      "Usando o sistema de Fitch, é possível:",
      "- Representar cada regra de negócio como uma implicação ou bicondicional.\n- Provar que determinadas combinações de regras nunca geram contradições.\n- Verificar que todas as categorias de entrada estão cobertas por alguma regra de saída.",
      "##Auditoria e Explicabilidade de Modelos",
      "Regulamentações como a LGPD e o GDPR europeu exigem que decisões automatizadas sejam explicáveis. Uma prova formal oferece a forma mais rigorosa de explicação: uma cadeia de passos logicamente válidos que conecta as premissas (dados de entrada e regras) à conclusão (decisão do modelo).",
      "Cada linha de uma prova no sistema de Fitch é uma justificativa auditável. Isso é superior a abordagens de explicabilidade baseadas em importância de features (como SHAP ou LIME), que são aproximações estatísticas, não garantias formais.",
      "##Validação de Hipóteses em Análise de Dados",
      "Na análise exploratória, frequentemente construímos cadeias de raciocínio: 'Se a variável X é relevante e o modelo Y captura relações não-lineares, então o modelo Y com a variável X deve superar o baseline.' Esse raciocínio pode ser formalizado como uma prova, tornando explícita cada suposição (premissa) e cada passo de inferência.",
      "Isso é especialmente útil em ciência de dados reproduzível: ao documentar não apenas o código, mas também o raciocínio lógico por trás das escolhas de modelagem, criamos artefatos que podem ser verificados e questionados por outros membros da equipe.",
    ],
  },

  "cap3-sec8": {
    id: "cap3-sec8",
    title: "Resumo do Capítulo",
    subtitle: "Capítulo 3",
    paragraphs: [
      "| Conceito | Definição resumida |\n|---|---|\n| Esquema de axioma | Template de raciocínio com metavariáveis; válido quando todas as instâncias são tautologias. |\n| Regra de inferência | Padrão de raciocínio com premissas e conclusões; aplica-se apenas a sentenças completas. |\n| Prova direta | Sequência de sentenças onde cada item é premissa, instância de axioma ou resultado de regra de inferência. |\n| Sistema de Hilbert | Sistema minimalista com uma regra (Eliminação da Implicação) e três esquemas (IC, ID, IR); completo para lógica proposicional. |\n| Sistema de Fitch | Sistema de dedução natural com dez regras que suporta subprovas e suposições temporárias; mais intuitivo que Hilbert. |\n| Solidez | Toda conclusão provável é logicamente válida (sem falsos positivos). |\n| Completude | Toda verdade lógica é provável (sem lacunas), válido para lógica proposicional e relacional. |\n| Δ ⊢ φ ⟺ Δ ⊨ φ | Para sistemas sólidos e completos, provabilidade e implicação lógica são equivalentes. |",
    ],
  },




  "cap4": {
    "id": "cap4",
    "title": "Lógica Relacional",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "A Lógica Proposicional, estudada nos capítulos anteriores, é poderosa para expressar relações entre proposições fixas. Contudo, ela apresenta uma limitação fundamental: é impossível enunciar afirmações gerais sobre objetos sem enumerá-los explicitamente. Em ciência de dados, esse problema é onipresente. Queremos dizer coisas como 'todo registro com valor ausente deve ser imputado' ou 'existe algum cliente cujo score supera o limiar', sem precisar escrever uma regra separada para cada registro ou cada cliente.",
      "A Lógica Relacional resolve essa limitação ao introduzir dois recursos linguísticos essenciais: **variáveis** e **quantificadores**. Com eles, podemos expressar informações sobre múltiplos objetos sem enumerá-los, e afirmar a existência de objetos que satisfazem certas condições sem especificar quais são. Esse salto expressivo é decisivo para a formalização de regras de negócio, restrições de qualidade de dados e propriedades de modelos.",
      "Neste capítulo, percorremos a Lógica Relacional em quatro etapas: **sintaxe** (como escrever sentenças), **semântica** (o que elas significam), **avaliação** (como verificar se são verdadeiras) e **análise** (como determinar propriedades lógicas e relações entre sentenças). Em cada etapa, ancoramos os conceitos em exemplos diretamente relevantes para a prática de ciência de dados."
    ]
  },

  "cap4-sec1": {
    "id": "cap4-sec1",
    "title": "Vocabulário: Constantes, Variáveis e Relações",
    "subtitle": "Capítulo 4, Sintaxe da Lógica Relacional",
    "paragraphs": [
      "Na Lógica Proposicional, o vocabulário é composto por constantes proposicionais. Na Lógica Relacional, o vocabulário é estruturado em três categorias distintas:",
      "- **Constantes de objeto**: representam entidades individuais do domínio. Por convenção, começam com letras que não sejam u, v, w, x, y, z ou com dígitos. Exemplos: `cliente_001`, `produto_42`, `regiao_sul`.\n- **Constantes de relação**: representam predicados ou propriedades. Cada constante de relação tem uma *aridade*, o número de argumentos que aceita. Exemplos: `ativo` (unário), `comprou` (binário), `transferiu` (ternário).\n- **Variáveis**: começam por letras do final do alfabeto (u, v, w, x, y, z). Funcionam como placeholders para objetos arbitrários do domínio. Exemplos: `x`, `y`, `cliente_var`.",
      "Um **vocabulário** é um conjunto finito e não vazio de constantes de objeto, um conjunto finito e não vazio de constantes de relação, e uma atribuição de aridade para cada constante de relação. Um **termo** é uma variável ou uma constante de objeto, os 'substantivos' da linguagem."
    ]
  },

  "cap4-sec2": {
    "id": "cap4-sec2",
    "title": "Três Tipos de Sentenças",
    "subtitle": "Capítulo 4, Sintaxe da Lógica Relacional",
    "paragraphs": [
      "A Lógica Relacional possui três tipos de sentenças, que se combinam para formar expressões cada vez mais ricas:",
      "### Sentenças Relacionais (Átomos)",
      "Uma sentença relacional é formada por uma constante de relação n-ária seguida de n termos. É o elemento atômico da linguagem, o equivalente das constantes proposicionais, mas com estrutura interna. Exemplos:",
      "```\nativo(cliente_001)                    -- cliente_001 é um cliente ativo\ncomprou(joao, produto_42)             -- joao comprou produto_42\ntransferiu(alice, bob, valor_x)       -- alice transferiu valor_x para bob\n```",
      "### Sentenças Lógicas",
      "Sentenças lógicas são formadas combinando sentenças menores com os mesmos operadores da Lógica Proposicional: negação (~), conjunção (∧), disjunção (∨), implicação (⇒), e bicondicional (⇔). A sintaxe é idêntica, apenas os átomos são mais ricos.",
      "```\n~inadimplente(x)                      -- x não é inadimplente\nativo(x) ∧ sem_divida(x)              -- x é ativo E sem dívida\nscore_alto(x) ⇒ pre_aprovado(x)       -- score alto implica pré-aprovação\naprovado(x) ⇔ score_alto(x) ∧ ativo(x)  -- bicondicional de aprovação\n```",
      "### Sentenças Quantificadas",
      "Sentenças quantificadas são o grande diferencial da Lógica Relacional. Há dois tipos:",
      "- **Quantificador Universal** (para todo, ∀): afirma que todos os objetos do domínio satisfazem uma propriedade.\n- **Quantificador Existencial** (existe algum, ∃): afirma que pelo menos um objeto do domínio satisfaz uma propriedade.",
      "```\n∀x.(ativo(x) ⇒ score_valido(x))       -- todo cliente ativo tem score válido\n∃x.(score_alto(x) ∧ inadimplente(x))  -- existe cliente com score alto e inadimplente\n∀x.∃y.(comprou(x,y))                  -- todo cliente comprou algum produto\n∃y.∀x.(recomendado(x,y))              -- existe produto recomendado para todos\n```",
      "A ordem dos quantificadores é crítica. As duas últimas sentenças acima expressam conceitos radicalmente diferentes: a terceira diz que cada cliente tem seu próprio produto comprado (pode ser um produto diferente para cada um); a quarta diz que existe um único produto que é recomendado para todos os clientes simultaneamente.",
      "#### Precedência de Operadores na Lógica Relacional",
      "Os quantificadores têm precedência sobre os operadores lógicos. Isso significa que `∀x.p(x) ⇒ q(x)` é lido como `(∀x.p(x)) ⇒ q(x)`, e não como `∀x.(p(x) ⇒ q(x))`. Para aplicar um quantificador a uma sentença composta, use parênteses explicitamente: `∀x.(p(x) ⇒ q(x))`. Em ciência de dados, esse erro de parênteses é equivalente a um erro de escopo em programação, a variável quantificada não alcança a subexpressão desejada."
    ]
  },

  "cap4-sec3": {
    "id": "cap4-sec3",
    "title": "Variáveis Livres e Ligadas",
    "subtitle": "Capítulo 4, Sintaxe da Lógica Relacional",
    "paragraphs": [
      "Uma ocorrência de variável é **ligada** se está dentro do escopo de um quantificador daquela variável; caso contrário, é **livre**. Uma sentença é **aberta** se tem variáveis livres, e **fechada** (ou sentença) caso contrário.",
      "```\n∃x.comprou(x, y)             -- x é ligada; y é livre ⇒ sentença aberta\n∀y.(∃x.comprou(x,y))         -- x e y são ambas ligadas ⇒ sentença fechada\nscore_alto(x)                -- x é livre ⇒ sentença aberta\n```",
      "Em ciência de dados, sentenças abertas correspondem a templates parametrizados de regras. Uma sentença aberta como `score_alto(x)` pode ser lida como uma função de x para um valor booleano, ela representa uma condição aplicável a qualquer cliente específico. Sentenças fechadas, por sua vez, fazem afirmações completas sobre o domínio, sem dependência de parâmetros externos.",
      "Para sintetizar essas distinções, a **Tabela 4.1** apresenta os três tipos de sentenças com suas definições e analogias em dados.",
      "```\n| Tipo de Sentença | Definição | Analogia em Dados |\n|---|---|---|\n| Sentença ground | Sem variáveis | Registro específico: score_alto(cliente_007) |\n| Sentença aberta | Com variáveis livres | Template de regra: score_alto(x) |\n| Sentença fechada | Sem variáveis livres | Afirmação geral: ∀x.(ativo(x) ⇒ score_valido(x)) |\nTabela 4.1: Tipos de sentenças relacionais quanto à presença de variáveis livres.\n```"
    ]
  },

  "cap4-sec4": {
    "id": "cap4-sec4",
    "title": "Base de Herbrand",
    "subtitle": "Capítulo 4, Semântica",
    "paragraphs": [
      "A semântica da Lógica Relacional adotada aqui é chamada de **Semântica de Herbrand**, em homenagem ao lógico Jacques Herbrand. Sua ideia central é que o universo de discurso é exatamente o conjunto de constantes de objeto presentes no vocabulário, nada mais, nada menos.",
      "A **base de Herbrand** de um vocabulário é o conjunto de todas as sentenças relacionais ground (sem variáveis) que podem ser formadas com as constantes do vocabulário. Formalmente, para cada constante de relação r de aridade n e cada n-upla de constantes de objeto (t1,...,tn), a sentença r(t1,...,tn) pertence à base de Herbrand.",
      "#### Tamanho da Base de Herbrand",
      "Para b constantes de objeto e uma constante de relação de aridade n, há **b^n** sentenças atômicas ground. O total da base de Herbrand é a soma sobre todas as constantes de relação.",
      "Exemplo: com 3 objetos {a, b, c} e uma relação binária q, há 3² = 9 sentenças ground: `q(a,a)`, `q(a,b)`, `q(a,c)`, `q(b,a)`, `q(b,b)`, `q(b,c)`, `q(c,a)`, `q(c,b)`, `q(c,c)`.",
      "Em bases de dados reais, cada linha de uma tabela corresponde a um átomo ground positivo, e cada ausência de linha corresponde a um átomo ground negativo (hipótese do mundo fechado)."
    ]
  },

  "cap4-sec5": {
    "id": "cap4-sec5",
    "title": "Atribuições de Verdade",
    "subtitle": "Capítulo 4, Semântica",
    "paragraphs": [
      "Uma **atribuição de verdade** para uma linguagem relacional é uma função que mapeia cada sentença ground da base de Herbrand a um valor booleano (0 ou 1). Isso é exatamente análogo a uma linha de uma tabela-verdade na Lógica Proposicional, mas agora as 'proposições' têm estrutura interna (um predicado aplicado a constantes).",
      "Uma vez fixada a atribuição para os átomos ground, a verdade de sentenças mais complexas é determinada recursivamente pelos mesmos operadores lógicos da Lógica Proposicional. A novidade está nos quantificadores:",
      "- `∀x.φ(x)` é verdadeira se e somente se φ(t) é verdadeira para **toda** constante de objeto t do vocabulário.\n- `∃x.φ(x)` é verdadeira se e somente se φ(t) é verdadeira para **pelo menos uma** constante de objeto t do vocabulário.",
      "Em outras palavras, o universal age como uma conjunção sobre todas as instâncias, e o existencial age como uma disjunção sobre todas as instâncias. Essa correspondência é fundamental para entender a avaliação de sentenças quantificadas.",
      "### Exemplo Detalhado: Dataset de Clientes",
      "Considere um vocabulário com constantes de objeto {alice, bob, carol} e constantes de relação `ativo` (unário), `comprou` (binário). A atribuição de verdade abaixo representa um estado parcial de um sistema de CRM:",
      "```\nativo(alice) = 1    ativo(bob) = 1    ativo(carol) = 0\n\ncomprou(alice, alice) = 0   comprou(alice, bob) = 0   comprou(alice, carol) = 1\ncomprou(bob, alice) = 1     comprou(bob, bob) = 0     comprou(bob, carol) = 1\ncomprou(carol, alice) = 0   comprou(carol, bob) = 0   comprou(carol, carol) = 0\n```",
      "Avaliemos a sentença `∀x. ∃y.comprou(x,y)`: 'todo cliente comprou algum produto (representado por outro cliente no vocabulário)'. Expandindo:",
      "```\n∃y.comprou(alice, y): comprou(alice,alice)=0, comprou(alice,bob)=0, comprou(alice,carol)=1 ⇒ TRUE\n∃y.comprou(bob, y):   comprou(bob,alice)=1 ⇒ TRUE\n∃y.comprou(carol, y): comprou(carol,alice)=0, comprou(carol,bob)=0, comprou(carol,carol)=0 ⇒ FALSE\n\nComo nem todas as instâncias do universal são verdadeiras, ∀x.∃y.comprou(x,y) ⇒ FALSE\n```",
      "Carol nunca comprou nada, portanto a afirmação universal falha. Em ciência de dados, esse tipo de avaliação é o que ocorre quando validamos uma restrição de integridade: verificamos se ela vale para todos os registros do dataset."
    ]
  },

  "cap4-sec6": {
    "id": "cap4-sec6",
    "title": "Propriedades Lógicas de Sentenças",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "No Capítulo 2, definimos três propriedades que classificam sentenças pelo seu comportamento em todas as atribuições possíveis: **validade**, **insatisfatibilidade** e **contingência**. Essas mesmas categorias se aplicam integralmente à Lógica Relacional, a diferença está no que conta como 'todas as atribuições possíveis'.",
      "Em lógica proposicional, uma atribuição era um mapeamento de símbolos para {0,1}. Na Lógica Relacional, uma atribuição é um subconjunto da base de Herbrand, uma escolha de quais átomos ground são verdadeiros. O espaço é exponencialmente maior, mas a estrutura das três propriedades é idêntica:",
      "```\n| Propriedade | Definição | Exemplo |\n|---|---|---|\n| Válida (tautologia) | Verdadeira em toda atribuição | ∀x.p(x) ⇒ ∃x.p(x) |\n| Contingente | Verdadeira em algumas, falsa em outras | ∃x.ativo(x) |\n| Insatisfatível | Falsa em toda atribuição | ∀x.(p(x) ∧ ~p(x)) |\n| Satisfatível | Verdadeira em ao menos uma atribuição | ativo(alice) ∧ ativo(bob) |\n```",
      "O que a Lógica Relacional acrescenta são **valididades que não existem na lógica proposicional**, tautologias que envolvem a interação entre quantificadores. Essas são as novidades genuínas desta seção.",
      "### Reversão de quantificadores do mesmo tipo",
      "A ordem de quantificadores do mesmo tipo pode ser invertida sem alterar o valor de verdade, análogo a trocar a ordem de iteração em loops aninhados:",
      "```\n∀x.∀y.q(x,y) ⇔ ∀y.∀x.q(x,y)    -- válido\n∃x.∃y.q(x,y) ⇔ ∃y.∃x.q(x,y)    -- válido\n```",
      "Esse resultado não tem equivalente em lógica proposicional, é exclusivo de linguagens com variáveis e quantificadores.",
      "### Distribuição existencial",
      "Um existencial pode ser movido para dentro de um universal, mas o inverso não é válido. Essa **assimetria** é uma das propriedades mais importantes da Lógica Relacional:",
      "```\n∃y.∀x.q(x,y) ⇒ ∀x.∃y.q(x,y)    -- válido (o inverso NÃO é válido)\n\nInterpretação em dados:\n∃y.∀x.q(x,y): existe um produto recomendado para TODOS os clientes\n∀x.∃y.q(x,y): cada cliente tem ALGUM produto recomendado (pode ser diferente)\n```",
      "A sentença da esquerda é mais forte: garante um único testemunho para todos. A da direita permite testemunhos distintos para cada indivíduo. Essa distinção não tem paralelo em lógica proposicional e é frequentemente fonte de erros na formalização de regras de negócio.",
      "### Distribuição da negação sobre quantificadores (Leis de De Morgan quantificadas)",
      "A negação distribui sobre quantificadores invertendo seu tipo, generalização direta das leis de De Morgan do Capítulo 2:",
      "```\n~∀x.p(x) ≡ ∃x.~p(x)    -- não é verdade que todos são p ⇔ existe algum que não é p\n~∃x.p(x) ≡ ∀x.~p(x)    -- não existe nenhum p ⇔ todos não são p\n```",
      "Compare com De Morgan proposicional: `~(p ∧ q) ≡ (~p ∨ ~q)`. O universal se comporta como conjunção infinita e o existencial como disjunção infinita, a negação inverte ambos exatamente como esperado. Em ciência de dados, essa equivalência permite reformular restrições de qualidade em formas mais convenientes para implementação sem alterar seu significado.",
    ]
  },

  "cap4-sec7": {
    "id": "cap4-sec7",
    "title": "Relações Lógicas entre Sentenças",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "No Capítulo 2, definimos três relações entre sentenças: **equivalência lógica**, **consequência lógica** e **consistência**. As definições formais são idênticas na Lógica Relacional, o que muda é o espaço de atribuições sobre o qual essas relações são verificadas.",
      "| **Relação** | **Definição (igual ao Cap. 2)** | **Diferença na Lógica Relacional** |\n|---|---|---|\n| Equivalência lógica (φ ≡ ψ) | Mesmas atribuições satisfazem φ e ψ | Atribuições agora incluem átomos com quantificadores |\n| Consequência lógica (Δ ⊨ φ) | Toda atribuição que satisfaz Δ satisfaz φ | Premissas e conclusões podem conter ∀ e ∃ |\n| Consistência (φ consistente com Δ) | Existe atribuição que satisfaz ambos | Verificação pode requerer instanciar variáveis |",
      "O valor desta seção não está em redefinir esses conceitos, mas em mostrar **como eles se comportam com quantificadores**, situações que não existem em lógica proposicional.",
      "### Exemplos de consequência lógica com quantificadores",
      "Os exemplos a seguir ilustram implicações que dependem essencialmente da interação entre quantificadores:",
      "```\n-- 'existe produto único para todos' implica 'produto para cada um'\n∃y.∀x.q(x,y) |= ∀x.∃y.q(x,y)\n\n-- relação total implica sua simétrica\n∀x.∀y.q(x,y) |= ∀x.∀y.q(y,x)\n\n-- fato específico implica sua disjunção\np(a) |= p(a) ∨ p(b)\n\n-- dois fatos implicam sua conjunção\np(a), p(b) |= p(a) ∧ p(b)\n```",
      "O primeiro exemplo é o mais importante: a implicação é estritamente unidirecional, o inverso não vale. Em ciência de dados, 'existe um modelo de ML adequado para todos os datasets' é uma afirmação muito mais forte do que 'para cada dataset existe algum modelo adequado'.",
      "### Consistência e adição de regras de negócio",
      "A situação mais comum em que a consistência é testada é ao **adicionar uma nova regra de negócio** a um sistema existente. A nova regra é consistente com o conjunto anterior se existe ao menos uma atribuição de verdade que satisfaça simultaneamente todas as regras antigas e a nova.",
      "Se a nova regra for inconsistente, o sistema não terá nenhum estado válido possível, e qualquer conclusão poderá ser derivada dele, tornando o raciocínio inútil. Esse princípio é idêntico ao do Capítulo 2; o que a Lógica Relacional acrescenta é a capacidade de expressar essas regras com quantificadores, tornando a verificação computacionalmente mais desafiadora mas conceitualmente equivalente.",
    ]
  },

  "cap4-sec8": {
    "id": "cap4-sec8",
    "title": "Formalizando Cenários de Dados",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "### Sistema de Recomendação",
      "Considere um sistema de recomendação com quatro usuários (alice, bob, carol, dana) e um conjunto de itens. Queremos formalizar diversas propriedades do sistema usando a Lógica Relacional. Adotamos as constantes de relação: `curtiu` (binário: usuário × item), `recomendado` (binário: usuário × item), `ativo` (unário: usuário).",
      "```\n-- Alice curtiu o item i_001 ou o item i_002\ncurtiu(alice, i_001) ∨ curtiu(alice, i_002)\n\n-- Todo usuário ativo recebe ao menos uma recomendação\n∀x.(ativo(x) ⇒ ∃y.recomendado(x, y))\n\n-- Se um usuário curtiu um item, esse item pode ser recomendado para ele\n∀x.∀y.(curtiu(x,y) ⇒ recomendado(x,y))\n\n-- Nenhum usuário recebe recomendações de itens que já curtiu\n~∃x.∃y.(curtiu(x,y) ∧ recomendado(x,y))\n```",
      "Observe que a última sentença é uma restrição de negócio comum em sistemas de recomendação: não faz sentido recomendar algo que o usuário já gosta. Usando as leis de De Morgan quantificadas, podemos reescrever essa restrição em uma forma equivalente:",
      "```\n~∃x.∃y.(curtiu(x,y) ∧ recomendado(x,y))\n≡ ∀x.∀y.~(curtiu(x,y) ∧ recomendado(x,y))\n≡ ∀x.∀y.(curtiu(x,y) ⇒ ~recomendado(x,y))\n```",
      "### Pipeline de Qualidade de Dados",
      "Um caso de uso central em ciência de dados é a verificação de qualidade de dados. Considere um dataset com registros representados por constantes de objeto e propriedades representadas por constantes de relação unárias: `completo`, `sem_outlier`, `normalizado`, `valido_para_treino`.",
      "```\n-- Todo registro completo e sem outlier pode ser normalizado\n∀x.(completo(x) ∧ sem_outlier(x) ⇒ normalizado(x))\n\n-- Um registro é válido para treino se e somente se estiver normalizado\n∀x.(valido_para_treino(x) ⇔ normalizado(x))\n\n-- Existe ao menos um registro válido para treino\n∃x.valido_para_treino(x)\n\n-- Nenhum registro com outlier é válido para treino\n∀x.(sem_outlier(x) ∨ ~valido_para_treino(x))\n-- equivalente a: ∀x.(valido_para_treino(x) ⇒ sem_outlier(x))\n```",
      "### Relações Hierárquicas em Dados",
      "Muitos problemas de dados envolvem relações hierárquicas ou transitivas: árvores de categorias de produtos, hierarquias organizacionais, grafos de dependência entre tarefas. A Lógica Relacional permite definir tais relações de forma concisa usando quantificadores.",
      "Considere uma relação de dependência entre tarefas de um pipeline de dados, onde `depende_de(x,y)` significa 'a tarefa x depende diretamente da tarefa y'. Podemos definir a relação de dependência transitiva recursivamente:",
      "```\n-- Dependência transitiva: x depende de z se depende diretamente\n-- ou depende de alguma tarefa intermediária que depende de z\n∀x.∀z.(antecede(x,z) ⇔\n  depende_de(x,z) ∨\n  ∃y.(depende_de(x,y) ∧ antecede(y,z)))\n\n-- Restrição de aciclicidade: nenhuma tarefa antecede a si mesma\n~∃x.antecede(x,x)\n```"
    ]
  },

  "cap4-sec9": {
    "id": "cap4-sec9",
    "title": "Equivalência e Decidibilidade",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "### O Processo de Grounding",
      "Um resultado teórico fundamental é que a Lógica Relacional com um vocabulário finito é expressivamente equivalente à Lógica Proposicional. Isso significa que, para qualquer conjunto de sentenças relacionais, podemos construir um conjunto equivalente de sentenças proposicionais.",
      "O procedimento envolve três etapas: (1) converter as sentenças para a **forma prenex** (todos os quantificadores na parte externa), (2) realizar o **grounding** (instanciar variáveis com todas as constantes de objeto possíveis), e (3) substituir os átomos ground por constantes proposicionais.",
      "#### Forma Prenex",
      "Uma sentença está em forma prenex se é fechada e todos os quantificadores estão fora de todos os operadores lógicos. Para converter uma sentença para a forma prenex, renomeamos variáveis para evitar conflitos e aplicamos as regras de distribuição de quantificadores em reverso.",
      "```\nOriginal:  ∀y.p(x,y) ∨ ∃y.q(y)\nRenomear:  ∀y.p(x,y) ∨ ∃z.q(z)         -- evitar conflito de variáveis\nMover:     ∀y.∃z.(p(x,y) ∨ q(z))        -- distribuição reversa\nFechar:    ∀x.∀y.∃z.(p(x,y) ∨ q(z))     -- quantificar variáveis livres\n```",
      "#### Grounding: Instanciação de Variáveis",
      "O grounding substitui cada sentença quantificada por um conjunto de sentenças ground. As regras são:",
      "- **Sentença ground**: mover diretamente para o conjunto de saída.\n- **∀v.φ(v)**: substituir por uma cópia de φ para cada constante de objeto.\n- **∃v.φ(v)**: substituir por uma disjunção de φ para cada constante de objeto.",
      "Exemplo com vocabulário {a, b} e sentenças {p(a), ∀x.(p(x) ⇒ q(x)), ∃x.~q(x)}:",
      "```\n| Passo | Δ (a processar) | Γ (resultado) |\n|---|---|---|\n| 0 | {p(a), ∀x.(p(x)⇒q(x)), ∃x.~q(x)} | {} |\n| 1 | {∀x.(p(x)⇒q(x)), ∃x.~q(x)} | {p(a)} |\n| 2 | {p(a)⇒q(a), p(b)⇒q(b), ∃x.~q(x)} | {p(a)} |\n| 3 | {p(b)⇒q(b), ∃x.~q(x)} | {p(a), p(a)⇒q(a)} |\n| 4 | {∃x.~q(x)} | {p(a), p(a)⇒q(a), p(b)⇒q(b)} |\n| 5 | {~q(a) ∨ ~q(b)} | {p(a), p(a)⇒q(a), p(b)⇒q(b)} |\n| 6 | {} | {p(a), p(a)⇒q(a), p(b)⇒q(b), ~q(a) ∨ ~q(b)} |\n```",
      "Após o grounding, substituímos cada átomo ground por uma constante proposicional: p(a) → pa, q(a) → qa, etc. O resultado é um conjunto de sentenças puramente proposicionais equivalente ao original.",
      "### Consequências Teóricas: Decidibilidade e Compacidade",
      "A equivalência entre Lógica Relacional (com vocabulário finito) e Lógica Proposicional tem duas consequências teóricas de grande importância prática:",
      "- **Decidibilidade**: como a insatisfatibilidade da Lógica Proposicional é decidível (verificável em tempo finito via tabelas-verdade ou algoritmos de SAT), a insatisfatibilidade da Lógica Relacional com vocabulário finito também é decidível. Isso garante que podemos, em princípio, verificar automaticamente se um conjunto de regras de negócio é consistente.\n- **Compacidade**: assim como a Lógica Proposicional, a Lógica Relacional (com vocabulário finito) é compacta: todo conjunto insatisfatível de sentenças contém um subconjunto finito insatisfatível. Isso é importante porque garante que a insatisfatibilidade pode sempre ser demonstrada analisando apenas um número finito de sentenças.",
      "Essas propriedades, decidibilidade e compacidade, distinguem a Lógica Relacional com vocabulário finito da Lógica de Primeira Ordem (que permite funções e vocabulários infinitos). Quando introduzimos termos funcionais (que geram vocabulários infinitos), perdemos a decidibilidade e, com ela, a garantia de provas finitas."
    ]
  },

  "cap4-sec10": {
    "id": "cap4-sec10",
    "title": "Resumo do Capítulo",
    "paragraphs": [
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Constante de objeto | Entidade individual do domínio (ex: cliente_001, produto_42) |\n| Constante de relação | Predicado com aridade definida (ex: comprou/2, ativo/1) |\n| Variável | Placeholder para objetos arbitrários do domínio |\n| Sentença relacional | Átomo formado por constante de relação aplicada a termos |\n| Quantificador universal (∀) | \"Para todo x\": afirmação vale para todos os objetos do domínio |\n| Quantificador existencial (∃) | \"Existe x\": afirmação vale para ao menos um objeto |\n| Semântica de Herbrand | Interpretação sobre universo finito de constantes nomeadas |\n| Grounding | Substituição de variáveis por todas as constantes do vocabulário |\n| Decidibilidade | Possibilidade de determinar algoritmicamente qualquer propriedade lógica |"
    ]
  },


  cap5: {
    id: "cap5",
    title: "Validação, Modelos e Provas Relacionais",
    subtitle: "Capítulo 5",
    paragraphs: [
      "Nos capítulos anteriores, a lógica foi apresentada como uma ferramenta para analisar sentenças, conectivos e formas básicas de raciocínio. Agora entramos em uma etapa mais rica: a lógica relacional. Nela, deixamos de trabalhar apenas com proposições isoladas e passamos a considerar objetos, relações entre objetos, interpretações e modelos.",
      "Essa mudança é importante porque muitos problemas reais exigem esse tipo de estrutura. Em ciência de dados, queremos expressar regras como \"todo registro aprovado deve ter data de aprovação\" ou \"existe pelo menos um caso com erro grave\". Em inteligência artificial, queremos representar dependências entre entidades, restrições de decisão e propriedades que valem para todos os elementos de um domínio ou para pelo menos um deles. Em contextos sociais e organizacionais, também raciocinamos sobre relações: quem apoia quem, quem depende de quem, quem satisfaz determinadas condições.",
      "Neste capítulo, apresentamos dois caminhos complementares para responder perguntas lógicas:",
      "1. verificar diretamente os modelos possíveis;\n2. construir provas formais por meio de regras de inferência.",
      "A ideia central é que esses dois caminhos estão conectados. Quando uma conclusão decorre logicamente de um conjunto de premissas, isso significa que não existe interpretação em que as premissas sejam verdadeiras e a conclusão falsa. Ao mesmo tempo, se o sistema de prova for adequado, essa mesma conclusão pode ser demonstrada por um raciocínio finito e estruturado."
    ]
  },


  "cap5-sec2": {
    id: "cap5-sec2",
    title: "Consequência lógica, verificação de modelos e o limite da tabela-verdade",
    subtitle: "Capítulo 5",
    paragraphs: [
      "A noção central deste capítulo é a de **consequência lógica**. Dizemos que um conjunto de premissas Δ implica logicamente uma fórmula φ, e escrevemos **Δ ⊨ φ**, quando toda interpretação que satisfaz Δ também satisfaz φ. Em linguagem simples: sempre que as premissas forem verdadeiras, a conclusão também será verdadeira. Não pode existir nenhum cenário em que as premissas sejam verdadeiras e a conclusão falsa.",
      "Essa noção expressa uma garantia forte. Não estamos dizendo que a conclusão costuma ocorrer, nem que ela parece plausível. Estamos dizendo que ela é inevitável, dada a estrutura lógica das premissas.",
      "## Exemplo intuitivo",
      "Considere as seguintes afirmações:\n- todo registro com erro grave precisa ser revisado;\n- existe ao menos um registro com erro grave.",
      "Dessas premissas segue logicamente a conclusão:\n- existe ao menos um registro que precisa ser revisado.",
      "Podemos pensar também em um exemplo humano:\n- toda pessoa que sofre uma injustiça merece apoio;\n- existe alguém nessa situação.",
      "Daí segue:\n- existe alguém que merece apoio.",
      "Em ambos os casos, a conclusão não depende de opinião. Ela decorre da forma lógica das premissas.",
      "## Verificação por modelos",
      "Uma maneira de verificar se Δ ⊨ φ é analisar os modelos possíveis. A pergunta é:",
      "> existe alguma interpretação em que as premissas sejam verdadeiras e a conclusão falsa?",
      "Se existir, então não há consequência lógica. Se não existir, então a consequência lógica está confirmada.",
      "Esse processo é chamado de **verificação de modelos**. Em muitos sistemas computacionais, validar significa exatamente isso: verificar se uma estrutura satisfaz um conjunto de restrições.",
      "## O método da tabela-verdade",
      "O método mais direto de verificação é a enumeração exaustiva. Construímos todas as interpretações possíveis e verificamos uma a uma. Esse método é conceitualmente importante porque explicita, de forma muito clara, o significado de consequência lógica.",
      "Considere o exemplo:\n- p(a) ∨ p(b)\n- ∀x (p(x) → q(x))",
      "Queremos saber se segue:\n- ∃x q(x)",
      "A primeira premissa diz que ao menos um dos objetos satisfaz p. A segunda diz que todo objeto que satisfaz p também satisfaz q. Portanto, a conclusão natural é que existe ao menos um objeto que satisfaz q. Isso pode ser verificado listando todas as atribuições possíveis para os átomos relevantes p(a), p(b), q(a) e q(b), e conferindo se há alguma linha em que as premissas sejam verdadeiras e a conclusão falsa. Se não houver, a implicação está validada.",
      "## A explosão combinatória",
      "O problema da tabela-verdade é que ela cresce muito rapidamente. Se temos `n` constantes de objeto e `k` relações binárias, então a base de Herbrand cresce com `k · n²`, e o número de interpretações possíveis cresce como:",
      "**2^(k · n²)**",
      "Esse crescimento exponencial torna o método inviável muito cedo. Mesmo com poucos objetos e poucas relações, o número de cenários já pode ser gigantesco. Por isso, embora a tabela-verdade seja teoricamente correta e importante como fundamento semântico, ela não escala bem para problemas maiores."
    ]
  },

  "cap5-sec3": {
    id: "cap5-sec3",
    title: "Provas, demonstrabilidade, correção e completude",
    subtitle: "Capítulo 5",
    paragraphs: [
      "A lógica oferece uma alternativa poderosa à enumeração exaustiva: a construção de provas. A boa notícia é que, se uma conclusão realmente decorre logicamente das premissas, então existe uma prova finita dela. Melhor ainda: essas provas costumam ser muito menores do que as tabelas correspondentes.",
      "Aqui surge uma distinção importante entre duas ideias relacionadas, mas diferentes:",
      "- **Δ ⊨ φ**: consequência lógica, isto é, verdade em todos os modelos;\n- **Δ ⊢ φ**: demonstrabilidade, isto é, existência de uma prova formal de φ a partir de Δ.",
      "A primeira noção é semântica; a segunda é sintática. Em outras palavras:",
      "- **⊨** fala sobre significado e verdade em interpretações;\n- **⊢** fala sobre derivação e regras de prova.",
      "O objetivo de um bom sistema lógico é fazer essas duas noções se encontrarem.",
      "## Correção e completude",
      "Dois conceitos fundamentais entram aqui:",
      "**Correção**: tudo o que pode ser provado é logicamente válido.\nEm símbolos: se **Δ ⊢ φ**, então **Δ ⊨ φ**.",
      "**Completude**: tudo o que é logicamente válido pode ser provado.\nEm símbolos: se **Δ ⊨ φ**, então **Δ ⊢ φ**.",
      "Esses dois conceitos mostram por que um sistema de prova é confiável. Se ele é correto, não prova coisas erradas. Se é completo, não deixa de fora verdades lógicas. Nos slides, essa ideia aparece como uma das justificativas centrais para trocar a tabela-verdade pelo método de provas: ambos levam aos mesmos casos de sucesso, mas a prova é muito mais eficiente."
    ]
  },

  "cap5-sec4": {
    id: "cap5-sec4",
    title: "O sistema de Fitch e as regras de inferência",
    subtitle: "Capítulo 5",
    paragraphs: [
      "Para escrever provas de forma organizada, usamos o **sistema de Fitch**. Ele estrutura as demonstrações em linhas e subprovas, deixando claro:",
      "- quais premissas estão disponíveis;\n- quais suposições temporárias foram abertas;\n- qual regra justifica cada passo.",
      "Didaticamente, o sistema de Fitch funciona como um roteiro de raciocínio. Em vez de apenas afirmar que uma conclusão segue das premissas, mostramos como ela é construída.",
      "Na lógica relacional, além das regras conhecidas dos conectivos, precisamos de regras para os quantificadores.",
      "## Regras ligadas aos conectivos",
      "As provas usam as regras usuais para:\n- introdução e eliminação da conjunção;\n- introdução e eliminação da disjunção;\n- introdução e eliminação da implicação;\n- introdução e eliminação da negação;\n- introdução e eliminação do bicondicional.",
      "Essas regras já eram importantes na lógica proposicional e continuam valendo aqui.",
      "## Novas regras da lógica relacional",
      "Agora entram as regras específicas para os quantificadores:\n- eliminação universal;\n- fechamento do domínio;\n- introdução universal;\n- introdução existencial;\n- eliminação existencial.",
      "Os slides também destacam a ideia de **raciocínio universal** e **raciocínio existencial**, que não são apenas regras isoladas, mas padrões de pensamento:",
      "- no raciocínio universal, trabalhamos com um objeto arbitrário e depois generalizamos;\n- no raciocínio existencial, trabalhamos com um caso que sabemos existir, mas com cuidado para não transformar esse caso em algo arbitrário ou específico demais."
    ]
  },

  "cap5-sec5": {
    id: "cap5-sec5",
    title: "Quantificador universal: eliminação, fechamento e introdução",
    subtitle: "Capítulo 5",
    paragraphs: [
      "O quantificador universal, **∀**, expressa a ideia de que uma propriedade vale para todos os elementos do domínio. Há três ideias importantes aqui: eliminação universal, fechamento do domínio e introdução universal.",
      "## Eliminação universal",
      "A eliminação universal formaliza a ideia intuitiva de que, se algo vale para todo mundo, então vale para um caso específico.",
      "Se temos:\n**∀v φ**\npodemos obter uma instância específica de φ substituindo `v` por um termo **ground**, isto é, um termo fechado, sem variáveis.",
      "Por exemplo, se sabemos:\n**∀x hates(jane, x)**\npodemos concluir:\n- hates(jane, jill)\n- hates(jane, jane)",
      "Mas não podemos concluir diretamente algo como:\n- hates(jane, y)\nse `y` ainda estiver funcionando como variável livre. Esse é um erro importante: na eliminação universal, o termo usado precisa ser concreto.",
      "A intuição didática é simples: vamos do geral para o específico.",
      "## Fechamento do domínio",
      "Em alguns contextos, o domínio é finito e completamente conhecido. Nesses casos, podemos usar o fechamento do domínio: se conseguimos provar uma propriedade para todas as constantes do domínio, então podemos concluir a versão universal da propriedade.",
      "Suponha que o domínio seja exatamente: abby, bess, cody, dana\ne que já tenhamos:\n- likes(abby, cody)\n- likes(bess, cody)\n- likes(cody, cody)\n- likes(dana, cody)",
      "Então podemos concluir:\n**∀x likes(x, cody)**",
      "Isso é válido porque o domínio está fechado. Não existem outros elementos escondidos além dessas constantes.",
      "## Introdução universal e objetos arbitrários",
      "A introdução universal é a forma mais importante de provar conclusões universais. Em vez de testar todos os casos individualmente, escolhemos um objeto arbitrário, provamos que a propriedade vale para ele e então generalizamos.",
      "Esse padrão é muito comum em matemática:\n1. escolha um objeto arbitrário;\n2. prove algo sobre ele;\n3. conclua que isso vale para todos.",
      "## Placeholders",
      "No sistema de Fitch, usamos **placeholders** para representar esses objetos arbitrários. Um placeholder não é uma constante real do domínio. Ele é apenas um marcador temporário usado dentro da prova.",
      "Esse placeholder:\n- deve ser diferente das constantes reais do domínio;\n- só existe dentro do procedimento de prova;\n- precisa permanecer realmente arbitrário.",
      "## Exemplo de prova com introdução universal",
      "Considere as premissas:\n- ∀x (p(x) → q(x))\n- ∀x (q(x) → r(x))",
      "Queremos provar:\n- ∀x (p(x) → r(x))",
      "A estratégia é:\n1. escolher um objeto arbitrário `c`;\n2. instanciar as duas premissas para `c`;\n3. assumir `p(c)`;\n4. obter `q(c)` pela primeira premissa;\n5. obter `r(c)` pela segunda;\n6. concluir `p(c) → r(c)`;\n7. generalizar para `∀x (p(x) → r(x))`.",
      "## Dois erros clássicos",
      "**Primeiro erro: generalizar a partir de uma constante específica.**\nSe sabemos `happy(abby)`, não podemos concluir `∀x happy(x)`. Abby é um caso particular, não um objeto arbitrário.",
      "**Segundo erro: generalizar enquanto ainda há suposições ativas envolvendo o placeholder.**\nSe assumimos `p(c)` e, dentro dessa hipótese, provamos `q(c)`, não podemos sair imediatamente para `∀x q(x)` enquanto a suposição `p(c)` continua ativa. Nesse caso, `c` não está livre; ele está preso à hipótese.",
      "Esses erros aparecem como exemplos de \"prova ruim\" e \"conflito de nomes\", justamente para mostrar que introdução universal exige bastante cuidado."
    ]
  },

  "cap5-sec6": {
    id: "cap5-sec6",
    title: "Quantificador existencial: introdução e eliminação",
    subtitle: "Capítulo 5",
    paragraphs: [
      "O quantificador existencial, **∃**, expressa a ideia de que existe pelo menos um elemento com certa propriedade. Aqui aparecem duas regras principais: introdução existencial e eliminação existencial.",
      "## Introdução existencial",
      "A introdução existencial é relativamente simples. Se conseguimos provar um caso específico, então podemos concluir que existe pelo menos um caso que satisfaz aquela propriedade.",
      "Se sabemos, por exemplo:\n- hates(jill, jill)\nentão podemos concluir:\n- ∃x hates(x, x)\n- ∃x hates(jill, x)\n- ∃x hates(x, jill)",
      "A ideia é intuitiva: um exemplo concreto já basta para garantir uma afirmação existencial.",
      "## Eliminação existencial",
      "A eliminação existencial é uma das regras mais delicadas da lógica relacional. A dificuldade está em não transformar indevidamente um \"alguém que existe\" em uma constante comum ou em um objeto arbitrário.",
      "A estrutura correta é:\n1. sabemos que existe um elemento com certa propriedade;\n2. introduzimos um representante novo para esse elemento;\n3. raciocinamos dentro de uma subprova;\n4. obtemos uma conclusão que não depende da identidade desse representante;\n5. então concluímos essa afirmação fora da subprova.",
      "A condição essencial é:\n> o representante escolhido não pode aparecer livre na conclusão final.",
      "Essa exigência garante que a conclusão não depende de quem era, exatamente, o indivíduo escolhido.",
      "## Exemplo intuitivo",
      "Suponha:\n- existe alguém que Jane odeia;\n- se Jane odeia alguém, então Jane é má.",
      "Então podemos concluir:\n- Jane é má.",
      "A conclusão não depende de saber quem é essa pessoa. Basta saber que existe alguém com a propriedade relevante.",
      "## A equivalência importante ligada à EE",
      "Um metateorema útil para entender a eliminação existencial:",
      "**∀ν (φ ⇒ ψ)** é equivalente a **(∃ν φ ⇒ ψ)**, desde que `ψ` seja livre de `ν`.",
      "Essa equivalência ajuda a entender por que a eliminação existencial funciona. Se, para qualquer valor de `ν`, de `φ` segue `ψ`, e `ψ` não depende especificamente de `ν`, então basta saber que existe um `ν` tal que `φ` vale para concluir `ψ`.",
      "## EE e eliminação da disjunção",
      "Uma maneira bastante didática de entender a eliminação existencial é compará-la com a eliminação da disjunção.",
      "Na eliminação da disjunção, se temos `φ ∨ ψ` e conseguimos chegar a `χ` a partir de `φ` e também a partir de `ψ`, então concluímos `χ`.",
      "Na eliminação existencial, a ideia é parecida: saber que \"existe alguém com a propriedade φ\" funciona como saber que há pelo menos um caso possível entre vários. Se qualquer representante adequado desse caso leva à mesma conclusão `ψ`, e essa conclusão não depende da identidade específica do representante, então podemos concluir `ψ`.",
      "Por isso a EE é uma espécie de \"eliminação da disjunção turbinada\": o raciocínio é análogo, mas agora o número de casos possíveis não está explicitamente listado.",
      "## Exemplo análogo, mais concreto",
      "Considere:\n- ∃x passou(x)\ne suponha também:\n- se alguém passou, então a prova não estava impossível.",
      "Podemos escolher um representante temporário `c`, assumir `passou(c)`, e a partir daí concluir que a prova não estava impossível. Como essa conclusão não depende de quem é `c`, podemos sair da subprova e concluir:\n- a prova não estava impossível.",
      "Esse é exatamente o tipo de raciocínio existencial que procuramos tornar intuitivo."
    ]
  },

  "cap5-sec7": {
    id: "cap5-sec7",
    title: "Provas e validação na prática",
    subtitle: "Capítulo 5",
    paragraphs: [
      "Até aqui, vimos dois grandes caminhos: verificar modelos por enumeração e construir provas formais. Na prática, porém, muitas aplicações usam ideias intermediárias e mais eficientes, como a propagação de restrições e representações mais compactas.",
      "## Propagação de restrições",
      "Em muitos problemas, algumas restrições já determinam diretamente certos valores, e esses valores permitem deduzir outros. Isso evita a enumeração completa.",
      "Por exemplo, suponha:\n- Alice está no projeto Alpha;\n- todo analista em Alpha também está em Beta;\n- Alice não está em Gamma.",
      "Daí já concluímos que Alice está em Beta e que parte do problema foi resolvida sem testar todas as combinações possíveis.",
      "Em IA e análise de risco, pense nas regras:\n- todo cliente com score alto é aprovado;\n- quem não tem histórico limpo não é aprovado;\n- existe pelo menos um aprovado.",
      "Se sabemos:\n- x1 tem score alto;\n- x2 não tem histórico limpo;\n- x3 não foi aprovado,",
      "podemos propagar:\n- x1 é aprovado;\n- x2 não é aprovado;\n- x3 não é aprovado.",
      "E, como `x1` já satisfaz a existência de um aprovado, a pergunta \"existe algum aprovado?\" já está resolvida.",
      "## Modelos não booleanos",
      "Outra ideia útil é usar representações mais compactas quando a relação é funcional. Em vez de tratar tudo como várias variáveis booleanas independentes, podemos usar uma variável com domínio finito.",
      "Por exemplo, em vez de representar:\n- alocado(d1, regressão)\n- alocado(d1, árvore)\n- alocado(d1, rede_neural)\n- alocado(d1, ensemble)",
      "podemos representar diretamente:\n- modelo(d1) = regressão",
      "Isso reduz muito o espaço de busca.",
      "## Aplicações simples",
      "Essas ideias aparecem em muitos contextos:\n- **validação de dados**: garantir unicidade, integridade, obrigatoriedade de campos;\n- **sistemas de decisão em IA**: impor restrições antes de classificar ou recomendar;\n- **engenharia de atributos**: detectar combinações inconsistentes de features;\n- **regras sociais e organizacionais**: representar relações de cuidado, apoio, dependência ou permissão.",
      "Por exemplo:\n- toda pessoa que sofre violência merece acolhimento;\n- existe alguém nessa situação;\nlogo:\n- existe alguém que precisa de acolhimento.",
      "Ou ainda:\n- toda mulher que apoia outra fortalece a rede de cuidado;\n- Ana apoia Beatriz;\nlogo:\n- existe ao menos uma relação de cuidado nessa rede.",
      "Esses exemplos mostram que a lógica relacional não serve apenas para exercícios formais. Ela é uma ferramenta geral para raciocinar sobre estruturas, restrições e consequências em diferentes áreas."
    ]
  },

  "cap5-sec8": {
    id: "cap5-sec8",
    title: "Resumo do Capítulo",
    subtitle: "Capítulo 5",
    paragraphs: [
      "Neste capítulo, vimos que a lógica relacional amplia nossa capacidade de representar e analisar problemas porque nos permite trabalhar com objetos, relações, interpretações e quantificadores.",
      "Aprendemos que a consequência lógica, escrita como **Δ ⊨ φ**, significa que toda interpretação que satisfaz as premissas também satisfaz a conclusão. Vimos também que a verificação por modelos pode ser feita por tabela-verdade, mas que esse método sofre com explosão combinatória e, por isso, não escala bem.",
      "Em seguida, estudamos a alternativa das provas formais. Distinguimos consequência lógica (**⊨**) de demonstrabilidade (**⊢**), e vimos que um bom sistema de prova deve ser correto e completo. O sistema de Fitch apareceu como um modo estruturado de organizar demonstrações.",
      "No núcleo do capítulo, estudamos as regras da lógica relacional: eliminação universal, fechamento do domínio, introdução universal, introdução existencial e eliminação existencial. Vimos o papel dos placeholders, o raciocínio sobre objetos arbitrários, o cuidado necessário para generalizar corretamente e os erros mais comuns quando essas condições não são respeitadas.",
      "Também vimos que a eliminação existencial exige que a conclusão não dependa do indivíduo escolhido, e que sua intuição pode ser relacionada ao raciocínio por casos e à eliminação da disjunção.",
      "Por fim, conectamos tudo isso a aplicações práticas, como validação de dados, propagação de restrições, sistemas de decisão em IA e representações compactas de problemas funcionais.",
      "| **Conceito** | **Ideia central** | **Palavra-chave** |\n|---|---|---|\n| Consequência lógica | premissas verdadeiras garantem conclusão verdadeira | garantia |\n| Verificação de modelos | testar interpretações possíveis | validação |\n| Tabela-verdade | método exaustivo de verificação | enumeração |\n| Explosão combinatória | número de interpretações cresce muito rápido | exponencial |\n| Demonstrabilidade | provar formalmente uma conclusão | prova |\n| Correção | o sistema não prova coisas falsas | segurança |\n| Completude | o sistema consegue provar tudo que é logicamente válido | cobertura |\n| Sistema de Fitch | organiza provas em linhas e subprovas | estrutura |\n| Eliminação universal | do geral para o caso específico | instanciação |\n| Fechamento do domínio | provar para todas as constantes do domínio | domínio |\n| Introdução universal | provar para um objeto arbitrário e generalizar | generalização |\n| Placeholder | marcador temporário de objeto arbitrário | arbitrariedade |\n| Introdução existencial | um caso concreto garante um existencial | exemplo |\n| Eliminação existencial | usar um caso existente sem deixar sua identidade vazar | cuidado |\n| EE e disjunção | raciocínio existencial análogo a raciocínio por casos | analogia |\n| Propagação de restrições | deduzir novos valores sem testar tudo | eficiência |\n| Modelos não booleanos | usar domínios finitos em vez de muitos booleanos | compactação |"
    ]
  },


  "cap6": {
    id: "cap6",
    title: "Resolução Automática",
    subtitle: "Capítulo 6",
    paragraphs: [
      "Os métodos de prova estudados nos capítulos anteriores, o sistema de Hilbert e o sistema de Fitch, são poderosos, mas exigem que o humano guie cada passo da derivação: escolher qual regra aplicar, a quais sentenças, em que ordem. Para problemas de pequeno porte, isso é gerenciável. Para sistemas de dados com centenas de regras de negócio ou pipelines com dezenas de restrições encadeadas, o processo manual se torna inviável.",
      "O **Princípio da Resolução** oferece uma solução elegante: uma única regra de inferência que, aplicada sistematicamente, é suficiente para verificar qualquer propriedade lógica expressável, sem necessidade de axiomas adicionais ou de guia humano nos passos intermediários. Esse é o fundamento teórico dos modernos motores de inferência automática, dos SAT solvers e dos sistemas de verificação formal utilizados em produção.",
      "Neste capítulo, estudamos a Resolução em duas versões progressivamente mais ricas: primeiro para a Lógica Proposicional (Seções 6.2 a 6.5), depois estendida para a Lógica Relacional com o uso de unificação (Seções 6.6 a 6.10). Em cada versão, cobrimos a forma clausal, a regra de inferência, o raciocínio por refutação, a extração de respostas e as estratégias de otimização. Ao longo do capítulo, ancoramos cada conceito em exemplos aplicados à ciência de dados."
    ]
  },

  "cap6-sec1": {
    id: "cap6-sec1",
    title: "Forma Clausal",
    subtitle: "6.2, Literais, Cláusulas e Conversão",
    paragraphs: [
      "### Literais, Cláusulas e Conjuntos de Cláusulas",
      "O Princípio da Resolução opera exclusivamente sobre expressões em **forma clausal**. Antes de aplicar a regra, todas as premissas e conclusões devem ser convertidas para esse formato. As definições são:",
      "- **Literal**: uma sentença atômica ou sua negação. Exemplos: `score_alto(x)`, `~inadimplente(cliente_7)`, `p(a,b)`.\n- **Cláusula**: um conjunto de literais, interpretado como sua disjunção. Exemplo: `{~p(x), q(x)}` representa `p(x) ⇒ q(x)`.\n- **Cláusula vazia {}**: disjunção de zero literais, sempre falsa. Sua derivação sinaliza uma contradição no conjunto de premissas.\n- **Conjunto de cláusulas**: um conjunto de cláusulas, interpretado como sua conjunção.",
      "A tradução entre a notação habitual e a forma clausal é direta para literais e disjunções. Para implicações, usamos a equivalência `(φ ⇒ ψ) ≡ (~φ ∨ ψ)`, que transforma a implicação em uma cláusula de dois literais. Isso é fundamental: a maioria das regras de negócio e restrições de pipelines tem a forma de implicação, e a forma clausal as representa compactamente.",
      "```\n| Sentença Original | Forma Clausal | Interpretação |\n|---|---|---|\n| p | {p} | p é verdadeiro |\n| ~p | {~p} | p é falso |\n| p ∨ q | {p, q} | p ou q |\n| p ⇒ q | {~p, q} | se p então q |\n| p ⇔ q | {~p, q} e {p, ~q} | p se e somente se q |\n| p ∧ q | {p} e {q} | dois fatos separados |\n| {} | {} | contradição (cláusula vazia) |\n```",
      "### Procedimento de Conversão para a Forma Clausal",
      "Qualquer sentença proposicional pode ser convertida para um conjunto equivalente de cláusulas seguindo quatro passos em ordem. Os passos são aplicados de forma mecânica e sempre terminam em tempo finito.",
      "```\n| Passo | Operação e Regras |\n|---|---|\n| I, Impl. | Eliminar ⇒ e ⇔: (φ⇒ψ) → (~φ ∨ ψ); (φ⇔ψ) → (~φ ∨ ψ) ∧ (φ ∨ ~ψ) |\n| N, Neg. | Mover negações para dentro: ~~φ→φ; ~(φ∧ψ)→(~φ ∨ ~ψ); ~(φ ∨ ψ)→(~φ ∧ ~ψ) |\n| D, Dist. | Distribuir ∨ sobre ∧: φ ∨ (ψ∧χ) → (φ ∨ ψ) ∧ (φ ∨ χ); e variantes simétricas |\n| O, Oper. | Eliminar operadores: separar conjunções em cláusulas; escrever cada disjunção como conjunto |\n```",
      "A seguir, dois exemplos de conversão lado a lado, um para uma sentença e outro para sua negação, que ilustram como uma pequena diferença na entrada pode gerar resultados muito diferentes na forma clausal:",
      "### Exemplo A: g ∧ (r ⇒ f)",
      "```\n| Passo | Expressão |\n|---|---|\n| Original | g ∧ (r ⇒ f) |\n| I | g ∧ (~r ∨ f) |\n| N | g ∧ (~r ∨ f) [sem mudança] |\n| D | g ∧ (~r ∨ f) [sem mudança] |\n| O | {g} e {~r, f} |\n```",
      "### Exemplo B: ~(g ∧ (r ⇒ f)), negação do Exemplo A",
      "```\n| Passo | Expressão |\n|---|---|\n| Original | ~(g ∧ (r ⇒ f)) |\n| I | ~(g ∧ (~r ∨ f)) |\n| N | ~g ∨ (~(~r ∨ f)) ⇒ ~g ∨ (~~r ∧ ~f) ⇒ ~g ∨ (r ∧ ~f) |\n| D | (~g ∨ r) ∧ (~g ∨ ~f) |\n| O | {~g, r} e {~g, ~f} |\n```",
      "Observe que, apesar de diferirem em apenas uma negação, os dois exemplos resultam em conjuntos de cláusulas completamente distintos. Isso ilustra por que a conversão para forma clausal deve ser feita cuidadosamente, passo a passo.",
      "#### Analogia com Filtros em SQL",
      "A forma clausal é, em essência, a **Forma Normal Conjuntiva (CNF)**, uma conjunção de disjunções. Em SQL, a cláusula `WHERE` de uma query complexa pode ser vista como uma CNF: cada condição de filtragem é uma 'cláusula', e o conjunto de todas elas é satisfeito quando cada cláusula individualmente é satisfeita. A conversão para CNF em lógica é o análogo formal de reescrever uma condição SQL complexa em uma forma em que cada subcondição pode ser avaliada independentemente, base dos otimizadores de query modernos."
    ]
  },

  "cap6-sec2": {
    id: "cap6-sec2",
    title: "O Princípio da Resolução Proposicional",
    subtitle: "6.3, A Regra e Exemplo Prático",
    paragraphs: [
      "### A Regra",
      "O Princípio da Resolução é surpreendentemente simples: dadas duas cláusulas que contêm um par de literais complementares (um positivo e um negativo sobre o mesmo átomo), podemos derivar uma nova cláusula contendo todos os demais literais de ambas, excluindo o par complementar.",
      "```\n{φ₁, ..., χ, ..., φₘ}\n{ψ₁, ..., ~χ, ..., ψₙ}\n--------------------------------\n{φ₁, ..., φₘ, ψ₁, ..., ψₙ}\n```",
      "A cláusula derivada é chamada de **resolvente**. Como cláusulas são conjuntos, literais duplicados aparecem apenas uma vez no resolvente. Quando as duas cláusulas de entrada são singleton com literais complementares, o resolvente é a cláusula vazia, sinal de contradição.",
      "```\n| Cláusula 1 | Cláusula 2 | Resolvente | Observação |\n|---|---|---|---|\n| {p, q} | {~q, r} | {p, r} | Eliminação de q e ~q |\n| {~p, q} | {p, q} | {q} | Literal q aparece uma vez (união de conjuntos) |\n| {p, q, r} | {~p} | {q, r} | Cláusula unitária elimina p |\n| {p} | {~p} | {} | Cláusula vazia: contradição detectada |\n| {~p, q, r} | {p, ~q, ~r} | {q, r, ~q, ~r} ou {r, ~r} | Múltiplos resolventes possíveis |\n```",
      "#### Atenção: Uma Resolução por Vez",
      "Quando duas cláusulas têm múltiplos pares de literais complementares, apenas **UM** par pode ser resolvido por vez. Por exemplo, de `{p, q}` e `{~p, ~q}`, podemos derivar `{q, ~q}` ou `{p, ~p}`, mas NÃO a cláusula vazia `{}` diretamente. Tentar resolver dois pares simultaneamente é um erro lógico: `{p ∨ q}` e `{~p ∨ ~q}` são satisfatíveis (basta p=1, q=0), portanto não implicam a cláusula vazia.",
      "### Exemplo: Regras de Negócio em Pipeline",
      "Considere um pipeline de decisão de crédito com as seguintes regras (já em forma clausal):",
      "```\n| Linha | Cláusula | Origem |\n|---|---|---|\n| 1 | {~p, r} | Se score_alto(p) então pré_aprovado(r) [Premissa] |\n| 2 | {~q, r} | Se histórico_limpo(q) então pré_aprovado(r) [Premissa] |\n| 3 | {p, q} | Score alto OU histórico limpo [Premissa] |\n| 4 | {~r} | Negação do objetivo: ~pré_aprovado [Meta negada] |\n| 5 | {q, r} | Resolução: 1 e 3 (cancelar p e ~p) |\n| 6 | {r} | Resolução: 2 e 5 (cancelar q e ~q) |\n| 7 | {} | Resolução: 4 e 6 (cancelar r e ~r), CONTRADIÇÃO |\n```",
      "A cláusula vazia na linha 7 demonstra que a negação do objetivo é inconsistente com as premissas, portanto, o objetivo (pré_aprovado) é uma consequência lógica inevitável das regras. Essa técnica de negar o objetivo e buscar uma contradição é chamada de **refutação por resolução**."
    ]
  },

  "cap6-sec3": {
    id: "cap6-sec3",
    title: "Raciocínio por Refutação",
    subtitle: "6.4, O Teorema da Refutação",
    paragraphs: [
      "### O Teorema da Refutação",
      "A Resolução não é gerativalmente completa: nem toda cláusula logicamente implicada pelas premissas pode ser derivada diretamente por resolução. Por exemplo, de `{p}` e `{q}`, não se pode derivar `{p, q}` por resolução, mesmo que essa cláusula seja implicada.",
      "Porém, a Resolução é **completa por refutação**: um conjunto de cláusulas Δ é insatisfatível se e somente se existe uma derivação por resolução da cláusula vazia a partir de Δ. Combinando esse resultado com o Teorema da Refutação (Δ ⊨ φ se e somente se Δ ∪ {~φ} é insatisfatível), obtemos um procedimento completo para verificar implicação lógica.",
      "```\nProcedimento de Refutação por Resolução:\n\n1. Negar a conclusão desejada φ ⇒ obter ~φ\n2. Converter Δ ∪ {~φ} para forma clausal\n3. Aplicar o Princípio da Resolução até:\n   (a) Derivar a cláusula vazia {} ⇒ φ é implicado por Δ\n   (b) Não haver mais resoluções possíveis ⇒ φ não é implicado\n```",
      "Esse procedimento é a base de todos os sistemas de prova automática modernos. A negação da conclusão é adicionada ao conjunto de premissas para criar uma 'tensão' que, se a conclusão for de fato implicada, necessariamente leva a uma contradição detectável pela resolução.",
      "#### Por que Refutação Funciona",
      "A lógica por trás da refutação é elegante: se φ é verdadeiro em todo modelo que satisfaz Δ, então ~φ é falso em todo modelo que satisfaz Δ. Logo, Δ ∪ {~φ} não tem nenhum modelo, é insatisfatível. A resolução detecta essa insatisfatibilidade derivando a cláusula vazia. Em ciência de dados, isso corresponde a testar uma hipótese por contraposição: em vez de provar diretamente que 'todo modelo treinado em dados limpos generaliza bem', negamos a conclusão ('existe um modelo treinado em dados limpos que não generaliza') e mostramos que essa afirmação é inconsistente com as premissas do sistema.",
      "### Exemplo Completo de Refutação",
      "Demonstremos a validade de `(p ⇒ (q ⇒ p))`, o esquema de Criação de Implicação, sem nenhuma premissa. A prova é puramente por refutação: negamos a sentença, convertemos para forma clausal e derivamos a cláusula vazia.",
      "**Passo 1 — Negar a conclusão e converter para forma clausal**",
      "```\n| Passo | Expressão |\n|---|---|\n| Original | ~(p ⇒ (q ⇒ p)) |\n| I | ~(~p ∨ (~q ∨ p)) |\n| N | ~~p ∧ ~(~q ∨ p) ⇒ p ∧ (~~q ∧ ~p) ⇒ p ∧ q ∧ ~p |\n| D | p ∧ q ∧ ~p |\n| O | {p} e {q} e {~p} |\n```",
      "**Passo 2 — Derivação por resolução**",
      "```\n| Linha | Cláusula | Origem |\n|---|---|---|\n| 1 | {p} | Premissa (da negação) |\n| 2 | {q} | Premissa (da negação) |\n| 3 | {~p} | Premissa (da negação) |\n| 4 | {} | Resolução: 1 e 3 (cancelar p e ~p), CONTRADIÇÃO |\n```",
      "A cláusula vazia é derivada em um único passo, confirmando que a sentença é uma **tautologia**, verdadeira independentemente de qualquer premissa."
    ]
  },

  "cap6-sec4": {
    id: "cap6-sec4",
    title: "Estratégias de Resolução",
    subtitle: "6.5, Otimizações para Reduzir o Espaço de Busca",
    paragraphs: [
      "Sem restrições, a resolução pode gerar um número muito grande de cláusulas intermediárias, muitas delas redundantes ou irrelevantes para a conclusão desejada. As estratégias a seguir reduzem o espaço de busca sem comprometer a completude por refutação.",
      "### Eliminação de Literais Puros",
      "Um literal é **puro** em um conjunto de cláusulas se ele aparece sempre com o mesmo sinal (sempre positivo ou sempre negativo), nunca há um complementar. Cláusulas com literais puros nunca contribuem para a derivação da cláusula vazia (pois o literal nunca será cancelado) e podem ser removidas com segurança.",
      "```\nExemplo: {~p, ~q, r}, {~p, s}, {~q, s}, {p}, {q}, {~r}\n\nO literal 's' aparece apenas positivo ⇒ 's' é puro ⇒ remover {~p, s} e {~q, s}\nO conjunto restante {~p, ~q, r}, {p}, {q}, {~r} ainda é insatisfatível e suficiente.\n```",
      "### Eliminação de Tautologias",
      "Uma cláusula é uma **tautologia** se contém um par de literais complementares (por exemplo, `{p, ~p, q}`). Tautologias são sempre verdadeiras e, portanto, não afetam a satisfatibilidade do conjunto, podem ser removidas sem consequências.",
      "### Eliminação por Subsunção",
      "Uma cláusula Φ **subsume** uma cláusula Ψ se existe uma substituição σ tal que Φ·σ é um subconjunto de Ψ. Cláusulas mais específicas (subsumíveis) podem ser eliminadas, pois a cláusula mais geral (que as subsume) já cobre toda a informação relevante.",
      "```\nExemplo: {p(x), q(y)} subsume {p(a), q(v), r(w)}\npois {p(x), q(y)}{x←a, y←v} = {p(a), q(v)} ⊆ {p(a), q(v), r(w)}\n\nLogo {p(a), q(v), r(w)} pode ser eliminada, ela é redundante.\n```",
      "### Resolução Unitária e Resolução Linear",
      "A **resolução unitária** restringe cada passo a usar ao menos uma cláusula unitária (com um único literal). Isso garante que cada resolução reduz o tamanho das cláusulas, focando a busca em direção à cláusula vazia. A resolução unitária é completa para cláusulas de Horn (ao máximo um literal positivo por cláusula), exatamente o formato de regras de negócio do tipo 'se... então...'.",
      "A **resolução linear** (ou resolução filtrada por ancestralidade) é uma generalização: cada resolução deve ter ao menos um pai que seja uma cláusula inicial ou um ancestral do outro pai. Ela gera provas com estrutura linear, mais fáceis de inspecionar e auditável, e é refutativamente completa para qualquer conjunto de cláusulas.",
      "### Resolução com Conjunto de Suporte",
      "A estratégia de **conjunto de suporte** é especialmente útil quando as premissas são satisfatíveis e apenas a adição da conclusão negada cria a insatisfatibilidade. Nesse caso, designamos as cláusulas derivadas da conclusão negada como o conjunto de suporte: cada resolução deve envolver ao menos uma cláusula do conjunto de suporte ou descendente dele. O efeito prático é orientar a busca a partir da conclusão negada (raciocínio regressivo), evitando resoluções entre premissas que não têm relação com o objetivo.",
      "```\n| Estratégia | Completude | Eficiência | Uso Típico |\n|---|---|---|---|\n| Irrestrita | Completa | Baixa (muitas cláusulas redundantes) | Referência teórica |\n| Lit. puro | Completa | Média (poupa cláusulas inúteis) | Pré-processamento |\n| Tautologia | Completa | Média | Pré-processamento |\n| Subsunção | Completa | Alta (elimina redundâncias) | Sistemas de produção |\n| Unitária | Incompleta (geral) / Completa (Horn) | Alta | Regras de negócio (Horn) |\n| Linear | Completa | Alta (provas lineares) | Auditoria e explicabilidade |\n| Conj. suporte | Completa | Alta (orientada ao objetivo) | Verificação de propriedades |\n```"
    ]
  },

  "cap6-sec5": {
    id: "cap6-sec5",
    title: "Resolução Relacional e Unificação",
    subtitle: "6.6, O Salto para a Lógica Relacional",
    paragraphs: [
      "### O Salto para a Lógica Relacional",
      "A Resolução Proposicional opera sobre átomos ground, sem variáveis. Para aplicar o mesmo princípio à Lógica Relacional, precisamos de um mecanismo que identifique literais 'essencialmente complementares', mesmo quando expressos com variáveis diferentes. Esse mecanismo é a **unificação**.",
      "Na Resolução Proposicional, dois literais são complementares se um é a negação exata do outro: `p` e `~p`. Na Resolução Relacional, a condição é relaxada: φ e ~ψ são complementares se existe uma substituição de variáveis que os torna idênticos. A busca por essa substituição é o processo de unificação.",
      "#### Analogia com Casamento de Padrões em Dados",
      "A unificação é o análogo lógico do casamento de padrões (*pattern matching*) em linguagens de programação e do `JOIN` em SQL. Em SQL, ao fazer `tabela_a JOIN tabela_b ON a.id = b.id`, estamos 'unificando' as colunas de chave. Na Resolução Relacional, ao unificar `p(x,a)` com `p(b,y)`, estamos encontrando os valores `(x=b, y=a)` que fazem as duas expressões coincidirem. A diferença crucial: o casamento de padrões em SQL opera sobre valores concretos; a unificação opera sobre expressões com variáveis, e o resultado é a substituição mais geral que realiza o casamento.",
      "### Substituições e Unificadores",
      "Uma **substituição** é um mapeamento finito de variáveis para termos, escrito como um conjunto de regras de reescrita. Quando aplicada a uma expressão, cada variável no domínio da substituição é substituída pelo termo correspondente.",
      "```\nSubstituição σ = {x←a, y←f(b), z←v}\n\nq(x, y) aplicada a σ ⇒ q(a, f(b))\nq(x, x) aplicada a σ ⇒ q(a, a)\nq(z, v) aplicada a σ ⇒ q(v, v) [z→v; v sem binding, permanece v]\n```",
      "Uma substituição σ é um **unificador** de φ e ψ se φ·σ = ψ·σ, ou seja, aplicar σ a ambas as expressões produz o mesmo resultado. Se duas expressões têm um unificador, são unificáveis; caso contrário, não-unificáveis. Entre todos os unificadores de um par de expressões, o mais útil é o **Unificador Mais Geral (UMG)**: aquele que faz as substituições mínimas necessárias, preservando o máximo de liberdade nas variáveis restantes.",
      "```\n| Expressão 1 | Expressão 2 | Unificável? | UMG |\n|---|---|---|---|\n| p(x, b) | p(a, y) | Sim | {x←a, y←b} |\n| p(x, x) | p(a, y) | Sim | {x←a, y←a} |\n| p(x, f(x)) | p(a, y) | Sim | {x←a, y←f(a)} |\n| p(x, x) | p(f(y), y) | Não (occur check) |, |\n| p(a, b) | p(b, a) | Não (constantes diferentes) |, |\n| p(x) | q(x) | Não (predicados diferentes) |, |\n```",
      "#### O Occur Check",
      "Antes de unificar uma variável `x` com um termo `t`, é necessário verificar se `x` não ocorre dentro de `t`. Sem essa verificação, a unificação de `p(x)` e `p(f(x))` produziria a substituição `{x←f(x)}`, que ao ser aplicada gera `p(f(x))`, depois `p(f(f(x)))`, ad infinitum, uma substituição circular sem solução finita. Na prática, muitos sistemas de produção omitem o occur check por razões de desempenho. Em sistemas críticos de verificação formal, o occur check deve ser mantido.",
      "### O Algoritmo de Unificação",
      "O algoritmo de unificação é recursivo: compara as duas expressões subexpressão por subexpressão, acumulando a substituição à medida que avança. Em cada passo:",
      "- Se as subexpressões (após aplicar a substituição acumulada) são idênticas: sucesso, nada a fazer.\n- Se uma é uma variável e a outra não a contém (occur check): adicionar o binding variável ← expressão à substituição.\n- Se nenhuma é variável e pelo menos uma é uma constante diferente da outra: falha, não unificáveis.\n- Se ambas são termos compostos com o mesmo símbolo de função: comparar recursivamente os argumentos.",
      "A seguir, um trace completo para a unificação de `p(x, b)` e `p(a, y)`:",
      "```\n| Passo | Comparação e Resultado |\n|---|---|\n| Início | Comparar p(x,b) com p(a,y), σ={} |\n| Nível 1 | Comparar 'p' com 'p' ⇒ idênticos, σ={} |\n| Nível 1 | Comparar x com a ⇒ x é variável, não ocorre em a ⇒ σ={x←a} |\n| Nível 1 | Comparar b com y (após aplicar σ) ⇒ y é variável, não ocorre em b ⇒ σ={x←a, y←b} |\n| Resultado | UMG = {x←a, y←b}; p(x,b){x←a,y←b}=p(a,b)=p(a,y){x←a,y←b} |\n```"
    ]
  },

  "cap6-sec6": {
    id: "cap6-sec6",
    title: "O Princípio da Resolução Relacional",
    subtitle: "6.7, A Regra com Unificação",
    paragraphs: [
      "### A Regra com Unificação",
      "O Princípio da Resolução para a Lógica Relacional é análogo ao proposicional, com a adição da unificação. Dados uma cláusula com um literal φ e outra cláusula com um literal ~ψ tais que φ e ψ têm um UMG σ, o resolvente é obtido aplicando σ ao conjunto dos literais restantes de ambas as cláusulas.",
      "```\n{φ₁, ..., φ, ..., φₘ}\n{ψ₁, ..., ~ψ, ..., ψₙ}\n------------------------------------------\n{φ₁, ..., φₘ, ψ₁, ..., ψₙ} · σ\n\nonde σ = mgu(φ, ψ)\ne as cláusulas foram renomeadas para evitar variáveis em comum\n```",
      "Dois refinamentos são necessários em relação à versão proposicional: (1) antes de tentar a resolução, uma das cláusulas tem suas variáveis renomeadas para evitar conflitos com as da outra; (2) para lidar com casos em que múltiplos literais em uma mesma cláusula podem ser unificados entre si, usa-se o conceito de **fator**, uma cláusula derivada aplicando um UMG a um subconjunto de seus próprios literais.",
      "### Exemplo: Derivação em Relações de Parentesco",
      "Considere uma base de conhecimento sobre relações de parentesco e o objetivo de provar que Art é avô de Coe:",
      "```\n| Lin | Cláusula | Origem |\n|---|---|---|\n| 1 | {p(art, bob)} | Art é pai de Bob [Premissa] |\n| 2 | {p(art, bud)} | Art é pai de Bud [Premissa] |\n| 3 | {p(bob, cal)} | Bob é pai de Cal [Premissa] |\n| 4 | {p(bud, coe)} | Bud é pai de Coe [Premissa] |\n| 5 | {~p(x,y), ~p(y,z), g(x,z)} | Avô = pai do pai [Premissa] |\n| 6 | {~p(bob, z), g(art, z)} | Resolução 1 e 5: σ={x←art, y←bob} |\n| 7 | {g(art, cal)} | Resolução 3 e 6: σ={z←cal} [avô de Cal, caminho morto] |\n| 8 | {~p(bud, z), g(art, z)} | Resolução 2 e 5: σ={x←art, y←bud} |\n| 9 | {g(art, coe)} | Resolução 4 e 8: σ={z←coe}, OBJETIVO ATINGIDO |\n```",
      "Observe que a linha 7 é um caminho morto, Art também é avô de Cal, mas esse não era o objetivo. A resolução explora o espaço de consequências sem necessidade de guia humano, terminando ao atingir o objetivo. Note também que, ao contrário do sistema de Fitch, nenhuma suposição arbitrária foi feita, as substituições de variáveis foram todas determinadas pela unificação."
    ]
  },

  "cap6-sec7": {
    id: "cap6-sec7",
    title: "Forma Clausal Relacional: Skolemização",
    subtitle: "6.8, Eliminação de Quantificadores Existenciais",
    paragraphs: [
      "Para aplicar a resolução a sentenças relacionais com quantificadores, é necessário um passo adicional na conversão para a forma clausal: a eliminação dos quantificadores existenciais por **Skolemização**.",
      "### O Procedimento Completo de Conversão",
      "A conversão de sentenças relacionais para forma clausal segue sete passos, em ordem:",
      "```\n| Passo | Nome | Operação |\n|---|---|---|\n| I | Implicações fora | Eliminar ⇒, ⇐, ⇔ usando equivalências booleanas |\n| N | Negações dentro | Mover negações até literais atômicos (De Morgan + quantificadores) |\n| S | Padronizar variáveis | Renomear variáveis para que cada quantificador use uma variável única |\n| E | Existenciais fora | Skolemização: substituir variáveis existenciais por constantes/funções de Skolem |\n| A | Universais fora | Remover todos os quantificadores universais (variáveis ficam implicitamente universais) |\n| D | Disjunções dentro | Distribuir ∨ sobre ∧ para atingir a forma normal conjuntiva |\n| O | Operadores fora | Separar conjunções em cláusulas e escrever disjunções como conjuntos |\n```",
      "### Skolemização: A Chave para Eliminar Existenciais",
      "A Skolemização é o passo menos intuitivo, mas conceitualmente elegante. A ideia: um quantificador existencial ∃y dentro do escopo de universais ∀x₁,...,∀xₙ diz que 'existe um y que depende dos valores de x₁,...,xₙ'. Esse y pode ser representado por uma **função de Skolem** f(x₁,...,xₙ).",
      "A Skolemização não preserva equivalência lógica, o conjunto de cláusulas resultante está em um vocabulário expandido e pode ter modelos diferentes. Porém, ela preserva a **satisfatibilidade**: o conjunto original é satisfatível se e somente se o conjunto skolemizado é satisfatível. Para a resolução por refutação, isso é tudo que precisamos."
    ]
  },

  "cap6-sec8": {
    id: "cap6-sec8",
    title: "Extração de Respostas",
    subtitle: "6.9, Respondendo Perguntas com Resolução",
    paragraphs: [
      "Até aqui, usamos a resolução para responder perguntas do tipo verdadeiro/falso: 'o conjunto de premissas implica esta conclusão?'. Mas a resolução também pode ser usada para responder perguntas do tipo **preencha-o-espaço**: 'quais valores satisfazem esta condição?'.",
      "### Literais de Resposta",
      "Para extrair respostas, adicionamos ao processo um literal especial de resposta: `goal(v₁,...,vₙ)`, onde v₁,...,vₙ são as variáveis livres da pergunta. Esse literal acompanha a cláusula derivada da pergunta negada e é propagado pelas resoluções. O processo termina não quando a cláusula vazia é derivada, mas quando uma cláusula contendo apenas literais de resposta é produzida.",
      "Exemplo: 'Quem é o pai de Jon?' A pergunta é `p(x, jon)`. O literal de resposta é `goal(x)`. A cláusula objetivo é `{~p(x, jon), goal(x)}`.",
      "```\n| Linha | Cláusula | Origem |\n|---|---|---|\n| 1 | {p(art, jon)} | Art é pai de Jon [Premissa] |\n| 2 | {p(bob, kim)} | Bob é pai de Kim [Premissa] |\n| 3 | {~p(x,y), pai(x,y)} | Definição de pai [Premissa] |\n| 4 | {~p(x,jon), goal(x)} | Pergunta negada com literal de resposta |\n| 5 | {~p(x,jon), goal(x)} | Resolução 3 e 4: σ={y←jon} |\n| 6 | {goal(art)} | Resolução 1 e 5: σ={x←art}, RESPOSTA: art |\n```",
      "### Respostas Múltiplas e Ambiguidade",
      "Quando o problema tem múltiplas respostas corretas, diferentes caminhos de resolução produzem diferentes literais de resposta. O processo pode ser continuado até que respostas suficientes sejam encontradas.",
      "Em casos de incerteza, quando se sabe que uma de várias respostas é correta, mas não qual delas, a resolução pode produzir cláusulas com múltiplos literais de resposta, como `{goal(art), goal(bob)}`. Isso não significa duas respostas simultâneas, mas sim a informação de que ao menos uma das opções é correta.",
      "#### Extração de Respostas em Sistemas de Recomendação",
      "A extração de respostas por resolução é o fundamento lógico de sistemas de busca e recomendação baseados em regras. Em vez de filtrar um dataset linha por linha, o sistema deriva as respostas possíveis por encadeamento de regras, equivalente a um `JOIN` com resolução automática de variáveis. Por exemplo: dado um sistema de regras de elegibilidade para crédito e um conjunto de clientes, a extração de respostas identifica automaticamente o conjunto de clientes elegíveis sem inspeção exaustiva de cada combinação possível de atributos."
    ]
  },

  "cap6-sec9": {
    id: "cap6-sec9",
    title: "Aplicações em Ciência de Dados",
    subtitle: "6.10, Verificação, Cláusulas de Horn e Sistemas de Regras",
    paragraphs: [
      "### Verificação Automática de Restrições de Qualidade",
      "A aplicação mais direta da resolução em ciência de dados é a verificação automática de restrições de qualidade. Cada restrição de qualidade, unicidade de chaves, integridade referencial, ausência de nulos, faixas de valores, pode ser expressa como um conjunto de cláusulas. A verificação de que o dataset satisfaz todas as restrições equivale a verificar que o conjunto cláusulas `{restrições} ∪ {~propriedade_desejada}` é insatisfatível.",
      "```\nRestrição: nenhum cliente aprovado tem histórico negativo\n  Formal: ∀x.(aprovado(x) ⇒ ~histórico_negativo(x))\n  Clausal: {~aprovado(x), ~histórico_negativo(x)}\n\nDados: aprovado(c42), histórico_negativo(c42)\n  Clausal: {aprovado(c42)}, {histórico_negativo(c42)}\n\nNegação da propriedade: 'existe cliente aprovado com histórico negativo'\n  Clausal: {aprovado(a)}, {histórico_negativo(a)}  [a: constante de Skolem]\n\nDerivação:\n  {~aprovado(x), ~histórico_negativo(x)} + {aprovado(c42)} ⇒\n{~histórico_negativo(c42)}\n  {~histórico_negativo(c42)} + {histórico_negativo(c42)} ⇒ {}\n\nCláusula vazia derivada ⇒ VIOLAÇÃO DETECTADA em c42.\n```",
      "### Cláusulas de Horn e Sistemas de Regras",
      "Uma **cláusula de Horn** é uma cláusula com no máximo um literal positivo. Toda regra do tipo 'se A e B então C' pode ser escrita como a cláusula de Horn `{~A, ~B, C}`. Conjuntos de cláusulas de Horn têm propriedades especiais: a resolução unitária é completa para eles, e o algoritmo de resolução é equivalente ao encadeamento progressivo (*forward chaining*) de sistemas de regras.",
      "Esse é o fundamento teórico de linguagens como **Datalog** e **Prolog**, e das engines de regras (como Drools) usadas em sistemas de decisão automatizada. Cada regra de negócio é uma cláusula de Horn; a resolução automática é o mecanismo de inferência que deriva conclusões.",
      "```\nRegras de negócio em cláusulas de Horn:\n\n  {~dados_limpos(x), ~modelo_treinado(x), pronto_para_deploy(x)}\n    'se dados limpos E modelo treinado, então pronto para deploy'\n\n  {~pronto_para_deploy(x), ~aprovado_equipe(x), em_produção(x)}\n    'se pronto para deploy E aprovado pela equipe, então em produção'\n\n  {dados_limpos(pipeline_v3)}  [fato]\n  {modelo_treinado(pipeline_v3)} [fato]\n  {aprovado_equipe(pipeline_v3)} [fato]\n\nDerivação automática:\n  Passo 1: {pronto_para_deploy(pipeline_v3)}\n  Passo 2: {em_produção(pipeline_v3)}\n```"
    ]
  },

  "cap6-sec10": {
    id: "cap6-sec10",
    title: "Resumo do Capítulo",
    paragraphs: [
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Forma Clausal | Representação de sentenças como conjunção de disjunções de literais |\n| Princípio da Resolução | De duas cláusulas com literais complementares, deriva-se uma nova cláusula |\n| Completude por Refutação | Cláusula vazia é derivável sse o conjunto é insatisfatível |\n| Prova por Refutação | Para provar Δ⊨φ, acrescentar ¬φ e derivar contradição |\n| Unificação | Substituição de variáveis que torna dois literais idênticos (UMG) |\n| Skolemização | Eliminação de ∃ por constantes/funções de Skolem; preserva satisfatibilidade |\n| Extração de Respostas | Extensão da resolução para perguntas \"qual valor?\" com literais goal(x) |\n| Cláusulas de Horn | Cláusulas com no máximo um literal positivo; base de Datalog e Prolog |\n| Estratégias de Resolução | Eliminação de literais puros, subsunção, resolução unitária e linear |"
    ]
  },

  cap9: {
    id: "cap9",
    title: "Conclusão: Lógica, Raciocínio e Inteligência Artificial",
    subtitle: "Capítulo 9",
    paragraphs: [
      "Chegamos ao final de uma jornada pelo fundamento lógico da Inteligência Artificial e da Ciência de Dados. Ao longo dos oito capítulos anteriores, construímos progressivamente uma teoria formal do raciocínio, da Lógica Proposicional às formas mais sofisticadas de indução, sempre mantendo em perspectiva as aplicações práticas que motivam o estudo dessas ferramentas.",
      "Este capítulo final tem três objetivos. Primeiro, **revisar e integrar** os conceitos centrais do livro, mostrando como eles se articulam em uma estrutura coerente. Segundo, **situar a lógica formal** no panorama mais amplo dos tipos de raciocínio usados em IA, incluindo indução, abdução e analogia. Terceiro, **apontar caminhos** para estudo e pesquisa futuros, especialmente nas fronteiras entre lógica clássica e aprendizado de máquina moderno.",
      "| **Como usar este capítulo**<br/>Este capítulo é de natureza integrativa e reflexiva. Não introduz nova notação formal, mas exige que o leitor relacione ativamente os conceitos vistos. Recomenda-se relê-lo após uma revisão dos capítulos anteriores, e utilizá-lo como guia de estudo para avaliações e para a transição a tópicos avançados. |\n|---|",
    ],
  },
  "cap9-sec1": {
    id: "cap9-sec1",
    title: "Introdução",
    subtitle: "Capítulo 9, Seção 9.1",
    paragraphs: [
      "Chegamos ao final de uma jornada pelo fundamento lógico da Inteligência Artificial e da Ciência de Dados. Ao longo dos oito capítulos anteriores, construímos progressivamente uma teoria formal do raciocínio, da Lógica Proposicional às formas mais sofisticadas de indução, sempre mantendo em perspectiva as aplicações práticas que motivam o estudo dessas ferramentas.",
      "Este capítulo final tem três objetivos. Primeiro, **revisar e integrar** os conceitos centrais do livro, mostrando como eles se articulam em uma estrutura coerente. Segundo, **situar a lógica formal** no panorama mais amplo dos tipos de raciocínio usados em IA, incluindo indução, abdução e analogia. Terceiro, **apontar caminhos** para estudo e pesquisa futuros, especialmente nas fronteiras entre lógica clássica e aprendizado de máquina moderno.",
      "| **Como usar este capítulo**<br/>Este capítulo é de natureza integrativa e reflexiva. Não introduz nova notação formal, mas exige que o leitor relacione ativamente os conceitos vistos. Recomenda-se relê-lo após uma revisão dos capítulos anteriores, e utilizá-lo como guia de estudo para avaliações e para a transição a tópicos avançados. |\n|---|",
    ],
  },
  "cap9-sec2": {
    id: "cap9-sec2",
    title: "Revisão Integrada: Uma Lógica, Três Perspectivas",
    subtitle: "Capítulo 9, Seção 9.2",
    paragraphs: [
      "Os sistemas lógicos estudados neste livro, Lógica Proposicional, Lógica Relacional (Herbrand) e Lógica de Primeira Ordem (com Igualdade e Indução), não são teorias independentes. São *camadas progressivas* de um único edifício formal, cada uma estendendo a anterior em expressividade.",
      "| **Sistema Lógico** | **O que adiciona** | **Limitação principal** |\n|---|---|---|\n| Lógica Proposicional | Conectivos lógicos (¬, ∧, ∨, ⇒, ⇔) sobre átomos | Sem variáveis nem quantificadores; não generaliza |\n| Lógica Relacional / Herbrand | Variáveis, quantificadores (∀, ∃), relações n-árias | Universo fixo pelos termos base; domínio finito ou contável |\n| Term Logic (Herbrand + funções) | Termos compostos; universo de Herbrand potencialmente infinito | Semi-decidível; sem separação nomes/objetos |\n| Lógica de Primeira Ordem (LPO) | Universo independente dos termos; múltiplos modelos | Indecidível; provas podem não terminar |\n| LPO + Igualdade | Co-referencialidade; substituição de iguais por iguais | Requer axiomas extras ou regras especiais |\n| LPO + Indução | Provas sobre universos infinitos em finitos passos | Incompletude de Gödel para aritmética e além |",
      "### A Arquitetura Semântica",
      "Em todos os sistemas, a semântica segue a mesma arquitetura tripartida: (1) uma **linguagem** com sintaxe precisa; (2) uma **estrutura semântica** que dá significado às expressões (atribuição de verdade em lógica proposicional, modelo de Herbrand em lógica relacional, interpretação em LPO); e (3) uma **noção de satisfação** que define quando uma sentença é verdadeira em uma estrutura. Essa arquitetura, linguagem, estrutura, satisfação, é o padrão universal da lógica matemática moderna.",
      "### A Arquitetura Sintática: O Sistema Fitch",
      "Do lado sintático, o **sistema de prova Fitch** oferece um mecanismo uniforme de derivação formal. As regras básicas (Eliminação/Introdução de Implicação, Eliminação/Introdução Universal, etc.) se acumulam ao longo dos capítulos, com extensões para igualdade (EI, EE) e indução (DC, Ind Linear, Ind em Árvore, Ind Estrutural). A **solidez** garante que toda prova produz uma conclusão logicamente verdadeira; a **completude** garante (quando existe) que toda verdade logicamente entailada pode ser provada.",
      "| **Propriedade do Sistema de Prova** | **Lógica Proposicional** | **Lógica Relacional** | **Herbrand (Term) Logic** | **LPO** |\n|---|---|---|---|---|\n| Solidez | ✓ | ✓ | ✓ | ✓ |\n| Completude | ✓ | ✓ | ✗ (parcial) | ✗ (semi-decidível) |\n| Decidibilidade do entailment | ✓ | ✓ | ✗ | ✗ |",
      "| **Solidez vs. Completude: a distinção que importa**<br/>**Solidez** significa que o sistema nunca mente: se provamos φ a partir de Δ, então Δ ⊨ φ.<br/>**Completude** significa que o sistema nunca perde uma verdade: se Δ ⊨ φ, então podemos provar φ a partir de Δ.<br/>Em sistemas incompletos (como Herbrand Logic e LPO), pode haver verdades que são logicamente consequências das premissas mas que *jamais serão alcançadas por nenhuma prova finita*, um limite fundamental, não uma falha de implementação. |\n|---|",
    ],
  },
  "cap9-sec3": {
    id: "cap9-sec3",
    title: "Mapa Conceitual do Livro",
    subtitle: "Capítulo 9, Seção 9.3",
    paragraphs: [
      "A tabela a seguir consolida os conceitos essenciais de todos os capítulos, funcionando como guia de referência rápida e roteiro de revisão.",
      "| **Conceito** | **Definição Essencial e Localização** |\n|---|---|\n| Átomo / Sentença atômica | Expressão indivisível de valor verdadeiro; base da Herbrand base (Cap. 1-2) |\n| Conectivos lógicos | ¬, ∧, ∨, ⇒, ⇔: operadores que combinam sentenças (Cap. 2-3) |\n| Atribuição de verdade | Mapeamento de átomos para {V, F}; determina verdade de sentenças complexas (Cap. 2) |\n| Validade / Tautologia | Sentença verdadeira em toda atribuição/interpretação (Cap. 2, 7, 8) |\n| Insatisfatibilidade | Sentença falsa em toda atribuição/interpretação (Cap. 2, 7) |\n| Consequência lógica (⊨) | Δ ⊨ φ: toda atribuição que satisfaz Δ satisfaz φ (Cap. 2-9) |\n| Equivalência lógica | Duas sentenças satisfeitas pelos mesmos modelos (Cap. 2) |\n| Variáveis e quantificadores | ∀x.φ e ∃x.φ: generalização sobre objetos do domínio (Cap. 5-6) |\n| Herbrand base / modelo | Conjunto de átomos ground; subconjunto verdadeiro = modelo (Cap. 6) |\n| Termos compostos / funções | Construção de infinitos nomes com vocabulário finito (Cap. 6, 8) |\n| Interpretação em LPO | Mapeamento de nomes para objetos/funções/relações do universo ∀ᵢ (Cap. 7) |\n| Igualdade | Relação de equivalência + substituição; regras EI/EE em Fitch (Cap. 7) |\n| Indução completa | Prova de ∀x.φ(x) via caso base + caso indutivo estrutural (Cap. 8) |\n| Fortalecimento indutivo | Provar conclusão mais forte como passo intermediário (Cap. 8) |\n| Solidez / Completude | Propriedades do sistema de prova; LPO é sólida mas incompleta (Cap. 3, 9) |",
    ],
  },
  "cap9-sec4": {
    id: "cap9-sec4",
    title: "Tipos de Raciocínio em Inteligência Artificial",
    subtitle: "Capítulo 9, Seção 9.4",
    paragraphs: [
      "A lógica dedutiva formal, foco deste livro, é apenas um dos modos de raciocínio relevantes para a IA. Compreender como ela se relaciona com outras formas de inferência é essencial para construir sistemas inteligentes robustos.",
      "### Dedução",
      "A **dedução** é o raciocínio das premissas para conclusões que são *necessariamente* verdadeiras sempre que as premissas o são. É o único tipo de raciocínio que garante suas conclusões em todos os casos. Todo o aparato formal deste livro, sistema Fitch, consequência lógica, validade, é dedicado à dedução.",
      "| **Exemplo clássico de dedução (silogismo de Aristóteles):**<br/>     `∀x. (humano(x) ⇒ mortal(x))`<br/>     `humano(sócrates)`<br/>     ─────────────────────────<br/>     `mortal(sócrates)           [garantido]` |\n|---|",
      "### Indução",
      "A **indução** raciocina do *particular para o geral*. Como vimos no Capítulo 8, há dois tipos: a indução *incompleta* (inferência a partir de amostras, sem garantia, base do aprendizado de máquina) e a indução *completa* (indução matemática, com garantia formal). A ciência empírica opera fundamentalmente por indução incompleta, conjectura e refutação, na formulação de Karl Popper.",
      "| **Exemplo de indução incompleta (heurística):**<br/>     `Observei 10.000 corvos. Todos eram pretos.`<br/>     `Nunca vi um corvo não-preto.`<br/>     ─────────────────────────────────<br/>     `Todo corvo é preto.    [plausível, mas não garantido]` |\n|---|",
      "### Abdução",
      "A **abdução** raciocina dos *efeitos para as causas*: dada uma observação e um conjunto de hipóteses explicativas, infere-se a causa mais provável ou mais simples. Diferentemente da dedução, a conclusão abdutiva pode ser falsa mesmo que as premissas sejam verdadeiras, há sempre causas alternativas não consideradas.",
      "| **Exemplo de abdução:**<br/>     `Se não há combustível, o carro não liga.`<br/>     `Se não há centelha, o carro não liga.`<br/>     `Há centelha. O carro não liga.`<br/>     ──────────────────────────────────<br/>     `Provavelmente: não há combustível.  [mas pode haver outro motivo]` |\n|---|",
      "A abdução é o mecanismo central do diagnóstico médico, da depuração de software e dos sistemas de diagnóstico baseados em conhecimento. Em IA, aparece formalmente em **Probabilistic Graphical Models** (como redes Bayesianas com inferência MAP) e em **sistemas de explicação de modelos de ML** (XAI, Explainable AI).",
      "### Raciocínio por Analogia",
      "O **raciocínio por analogia** infere uma conclusão com base na *semelhança estrutural* entre duas situações. É poderoso e ubíquo no pensamento humano, mas sujeito a erros quando a analogia é superficial. Em IA, manifesta-se em:",
      "- **Case-Based Reasoning (CBR):** sistemas que recuperam casos similares de uma base de conhecimento e adaptam suas soluções\n- **Transfer Learning:** reutilização de representações aprendidas em uma tarefa para resolver outra similar\n- **Few-Shot Learning:** generalização a partir de poucos exemplos, por analogia com exemplos de suporte",
      "| **Tipo de Raciocínio** | **Direção** | **Garante conclusão?** | **Principal uso em IA** |\n|---|---|---|---|\n| Dedução | Premissas → Conclusão necessária | Sim | Sistemas especialistas, verificação formal, LPO/Prolog |\n| Indução completa | Casos estruturais → Universal | Sim (formalmente) | Prova de correção de algoritmos |\n| Indução incompleta | Amostras → Geral | Não | Aprendizado de máquina (toda a área) |\n| Abdução | Efeitos → Causa provável | Não | Diagnóstico, XAI, redes Bayesianas |\n| Analogia | Similar → Similar | Não | CBR, transfer learning, few-shot |",
      "| **Reflexão: IA Moderna e os Tipos de Raciocínio**<br/>Os grandes modelos de linguagem (LLMs) como GPT-4, Claude e Gemini realizam primariamente **indução incompleta em escala massiva**, aprendem padrões estatísticos de trilhões de tokens. Há evidências de que emergem capacidades de raciocínio analógico e até dedutivo em contexto (*chain-of-thought prompting*). Contudo, esses sistemas são propensos a *alucinações*, justamente porque não possuem um mecanismo formal de verificação de consequência lógica. A integração de LLMs com provadores de teoremas formais (como Lean e Coq) é uma das fronteiras mais ativas da pesquisa em IA (**neurosymbolic AI**). |\n|---|",
    ],
  },
  "cap9-sec5": {
    id: "cap9-sec5",
    title: "Lógica e Aprendizado de Máquina: Tensões e Convergências",
    subtitle: "Capítulo 9, Seção 9.5",
    paragraphs: [
      "A lógica formal e o aprendizado de máquina representam duas tradições distintas dentro da IA, e por décadas foram tratadas como abordagens concorrentes. Hoje, a comunidade reconhece que elas são *complementares*: cada uma supre exatamente as limitações da outra.",
      "| **Dimensão** | **Lógica Formal** | **Aprendizado de Máquina** |\n|---|---|---|\n| Conhecimento | Explícito, simbólico, interpretável | Implícito, distribuído, opaco |\n| Generalização | Por axiomas gerais (dedução) | Por padrões estatísticos (indução incompleta) |\n| Robustez a ruído | Frágil (um axioma errado invalida tudo) | Robusta (aprende com dados ruidosos) |\n| Escalabilidade | Limitada (espaço de busca exponencial) | Alta (redes neurais escalam com dados) |\n| Garantias | Provas formais de corretude | Garantias probabilísticas (PAC, VC) |\n| Dados | Não necessita (razão pura) | Essencial (depende de dados de treino) |\n| Incerteza | Tratada por lógica modal / probabilística | Modelada por distribuições de probabilidade |",
      "### Áreas de Convergência",
      "Várias linhas de pesquisa ativas buscam integrar as duas abordagens:",
      "#### Programação Lógica Indutiva (ILP)",
      "A **Programação Lógica Indutiva** (Inductive Logic Programming, ILP) aprende regras lógicas de primeira ordem a partir de exemplos positivos e negativos. Sistemas como FOIL, Progol e mais recentemente ∂ILP (differentiable ILP) combinam o poder expressivo da LPO com o aprendizado por dados. ILP é particularmente útil quando os dados são escassos e o conhecimento de domínio é rico.",
      "#### Redes Neurais com Restrições Lógicas",
      "Frameworks como **Logic Tensor Networks** (LTN) e **DeepProbLog** permitem incorporar restrições lógicas diretamente na função de perda de redes neurais. A ideia central é que sentenças lógicas podem ser interpretadas como restrições de otimização, permitindo que o treinamento respeite conhecimento simbólico a priori.",
      "#### Grafos de Conhecimento e Raciocínio por Embeddings",
      "Grafos de conhecimento (Wikidata, Freebase, YAGO) são essencialmente bases de fatos em LPO. Sistemas de **completamento de grafos** como TransE, RotatE e ComplEx aprendem embeddings vetoriais de entidades e relações que preservam propriedades lógicas implícitas (transitividade, simetria, inversão). Há resultados teóricos mostrando que certas famílias de embeddings conseguem capturar exatamente as relações expressáveis em fragmentos de LPO.",
      "#### LLMs como Motores de Raciocínio",
      "Uma das descobertas mais surpreendentes dos últimos anos é que LLMs treinados em escala suficiente exibem capacidades emergentes de raciocínio formal, resolução de problemas matemáticos, verificação de argumentos, geração de provas. Técnicas como **chain-of-thought**, **tree-of-thought** e **self-consistency decoding** estruturam o raciocínio do modelo de forma análoga a uma prova formal. Embora não haja garantias de corretude, a integração com verificadores formais externos (como Lean) começa a produzir sistemas de prova automática com nível de confiança sem precedentes.",
      "| **Fronteira de Pesquisa: IA Neurossimbólica**<br/>A **IA neurossimbólica** (neurosymbolic AI) é atualmente uma das áreas de pesquisa mais promissoras. O objetivo é criar sistemas que combinam a *aprendizagem perceptiva* das redes neurais com o *raciocínio estruturado* da lógica formal. Exemplos de sistemas representativos: **AlphaGeometry** (DeepMind, 2024), resolve problemas de geometria olímpica combinando um LLM com um provador formal de Gelfand; **AlphaProof** (DeepMind, 2024), prova teoremas matemáticos formais usando aprendizado por reforço sobre Lean; **Eudoxus/FunSearch**, descobre novos resultados matemáticos combinando busca evolutiva com verificação formal. |\n|---|",
    ],
  },
  "cap9-sec6": {
    id: "cap9-sec6",
    title: "Limites Fundamentais do Raciocínio Formal",
    subtitle: "Capítulo 9, Seção 9.6",
    paragraphs: [
      "Dois resultados teóricos do século XX definem os limites absolutos do que qualquer sistema formal pode alcançar. Todo profissional de IA deve conhecê-los.",
      "### Indecidibilidade de Church-Turing (1936)",
      "Alan Turing e Alonzo Church provaram independentemente, em 1936, que **não existe algoritmo que determine, para toda sentença de LPO, se ela é válida ou não**. Isso implica que nenhum sistema de IA baseado em LPO pode ser simultaneamente completo e garantir terminação. Na prática:",
      "- Provadores automáticos de teoremas (como Prolog, E, Vampire) são **semi-decidíveis**: se a conclusão é consequência lógica, eventualmente provam; se não é, podem não terminar\n- Estratégias como **cláusulas de Horn** (subconjunto de LPO) tornam a inferência decidível ao custo de expressividade reduzida\n- A indecidibilidade não é uma falha de engenharia, é um limite matemático absoluto",
      "### Teoremas de Incompletude de Gödel (1931)",
      "Kurt Gödel provou dois resultados devastadores sobre sistemas axiomáticos suficientemente expressivos (como a Aritmética de Peano, vista no Capítulo 8):",
      "- **Primeiro Teorema:** em qualquer sistema consistente e suficientemente expressivo, existem sentenças verdadeiras que não podem ser provadas dentro do sistema\n- **Segundo Teorema:** nenhum sistema suficientemente expressivo pode provar sua própria consistência",
      "A consequência prática para IA é profunda: qualquer IA baseada em um sistema lógico formal suficientemente rico não pode ser ao mesmo tempo *completa* (provar tudo que é verdadeiro) e *consistente* (nunca provar o falso). Essa tensão fundamenta o debate filosófico sobre os limites da inteligência artificial, e sobre se sistemas cognitivos humanos, que parecem superar esses limites, operam por princípios radicalmente diferentes.",
      "| **Perspectiva para o Cientista de Dados**<br/>Os limites de Gödel e Church-Turing aplicam-se a sistemas *formais determinísticos*. Sistemas de aprendizado de máquina não são sistemas axiomáticos no sentido de Gödel, eles operam com indução incompleta, probabilidade e otimização. Isso não os torna *superiores* aos sistemas formais, mas sim *diferentes*: fazem afirmações probabilísticas, não garantidas. O profissional rigoroso deve saber **quando cada abordagem é apropriada** e quais garantias cada uma oferece. |\n|---|",
    ],
  },
  "cap9-sec7": {
    id: "cap9-sec7",
    title: "Caminhos para Estudo Avançado",
    subtitle: "Capítulo 9, Seção 9.7",
    paragraphs: [
      "Os fundamentos construídos neste livro abrem portas para diversas áreas de estudo avançado. A seguir, apresentamos um mapa de continuidade para o leitor que deseja aprofundar seu conhecimento.",
      "### Lógicas Avançadas",
      "| **Área** | **Descrição e Relevância para IA/CD** |\n|---|---|\n| Lógica Modal | Raciocínio sobre possibilidade e necessidade (□φ, ◇φ). Base para verificação de sistemas reativos, planning em IA e raciocínio temporal |\n| Lógica Temporal (LTL, CTL) | Especificação e verificação de propriedades ao longo do tempo. Usada em model checking de software e hardware; crescente uso em verificação de sistemas de IA |\n| Lógicas de Descrição (DL) | Fragmentos decidíveis de LPO usados em ontologias (OWL). Base da Web Semântica, grafos de conhecimento e sistemas de raciocínio biomédico |\n| Lógica Probabilística | Integração de probabilidade com lógica (Markov Logic Networks, ProbLog). Permite raciocínio sob incerteza com garantias formais parciais |\n| Lógica de Segunda Ordem | Quantificação sobre relações e funções, não apenas objetos. Mais expressiva que LPO, mas completamente indecidível; usada em teoria de modelos |\n| Lógica Linear | Raciocínio sobre recursos consumíveis (premissas usadas exatamente uma vez). Aplicações em controle de memória, sistemas concorrentes e teoria de tipos |",
      "### Raciocínio Automatizado",
      "| **Tópico** | **Descrição** |\n|---|---|\n| Resolução e unificação | Base algorítmica do Prolog e de provadores automáticos; algoritmo de unificação de Robinson (1965) |\n| SAT e SMT solvers | Resolução de satisfatibilidade proposicional (SAT) e módulo teorias (SMT); ferramentas: Z3, CVC5, MiniSat |\n| Model checking | Verificação exaustiva de propriedades de sistemas finitos; ferramentas: SPIN, NuSMV, TLA+ |\n| Demonstração interativa | Provadores assistidos por computador onde humano e máquina colaboram; Coq, Lean 4, Isabelle/HOL |\n| Answer Set Programming (ASP) | Paradigma de programação declarativa baseado em semântica de modelos estáveis; clingo, DLV |",
      "### Aprendizado e Lógica",
      "| **Tópico** | **Descrição** |\n|---|---|\n| Programação Lógica Indutiva (ILP) | Aprende regras de LPO a partir de exemplos; FOIL, Progol, ∂ILP, ILASP |\n| Statistical Relational Learning | Modelos que combinam estrutura relacional com probabilidade; MLN, BLOG, ProbFOIL |\n| Graph Neural Networks (GNNs) | Aprendizado em grafos; conexão teórica com fragmentos de lógica modal e de contagem |\n| Neurosymbolic AI | Integração de redes neurais com raciocínio simbólico; LTN, DeepProbLog, NS-CL, AlphaGeometry |\n| Formal verification of ML | Verificação de propriedades de redes neurais (robustez, fairness); ferramentas: Marabou, α,β-CROWN |",
    ],
  },
  "cap9-sec8": {
    id: "cap9-sec8",
    title: "Princípios para o Profissional de IA e Ciência de Dados",
    subtitle: "Capítulo 9, Seção 9.8",
    paragraphs: [
      "Encerramos o livro com um conjunto de princípios práticos, síntese dos fundamentos lógicos estudados, formulados como orientações para o profissional em formação.",
      "| **Dez Princípios do Raciocínio Rigoroso em IA**<br/>1. **Distinga sintaxe de semântica.** Uma sentença bem-formada não é necessariamente verdadeira. A validade é uma propriedade semântica, não sintática.<br/>2. **Distinga entailment de implicação material.** φ ⇒ ψ é uma sentença; φ ⊨ ψ é uma relação entre sentenças. Confundi-las é um erro comum e grave.<br/>3. **Saiba o que seu modelo garante.** Um modelo de ML com 99% de acurácia faz indução incompleta. Um provador formal com prova verificada faz dedução. São garantias de natureza radicalmente distinta.<br/>4. **Respeite os limites da decidibilidade.** Para qualquer sistema suficientemente expressivo, há perguntas que não podem ser respondidas algoritmicamente. Reconhecer esses limites previne a busca de soluções impossíveis.<br/>5. **Use o formalismo certo para o problema certo.** LPO para raciocínio simbólico garantido; aprendizado estatístico para padrões em dados ruidosos; lógica probabilística para a zona intermediária.<br/>6. **Formalize antes de implementar.** Sistemas críticos (medicina, direito, infraestrutura) devem ter suas propriedades formalmente especificadas antes de implementados. A verificação formal detecta erros que testes nunca encontrariam.<br/>7. **Hipótese indutiva não é verdade.** Qualquer conjectura derivada de dados é uma hipótese, não um fato. Buscar contraexemplos é tão importante quanto confirmar instâncias.<br/>8. **Abdução exige revisão.** Quando novos dados contradizem uma explicação abduída, ela deve ser revisada, não defendida a todo custo. Sistemas de manutenção da verdade (TMS) formalizam esse processo.<br/>9. **Interpretabilidade tem base lógica.** Explicar um modelo é, em parte, encontrar uma representação lógica de seu comportamento. As ferramentas de XAI mais rigorosas (SHAP, LIME, contrastive explanations) têm conexões formais com a lógica.<br/>10. **A lógica é a linguagem da precisão.** Quando a imprecisão de linguagem natural causa ambiguidade em uma especificação, a formalização lógica é o remédio. Toda vez que alguém diz \"sempre que X então Y\", há uma sentença de LPO esperando para ser escrita. |\n|---|",
    ],
  },
  "cap9-sec9": {
    id: "cap9-sec9",
    title: "Palavras Finais",
    subtitle: "Capítulo 9, Seção 9.9",
    paragraphs: [
      "A lógica é, em última instância, a ciência do raciocínio correto. Estudá-la não é um exercício de abstração acadêmica, é construir a *infraestrutura mental* necessária para pensar com precisão sobre problemas complexos, especificar sistemas sem ambiguidade, reconhecer o que pode e o que não pode ser garantido, e dialogar com rigor na fronteira entre o que as máquinas podem computar e o que a inteligência, humana ou artificial, pode raciocinar.",
      "Os grandes desafios da IA contemporânea, confiabilidade, interpretabilidade, alinhamento de valores, raciocínio causal, têm, em seu núcleo, problemas que a lógica formal ajuda a precisar, mesmo quando não resolve completamente. O profissional que domina tanto o rigor formal quanto o poder empírico do aprendizado de máquina está excepcionalmente bem posicionado para contribuir com essas questões.",
      "\"A matemática é a linguagem na qual Deus escreveu o universo.\", Galileu Galilei",
      "\"A lógica é a anatomia do pensamento.\", John Locke",
      "- Fim do Livro -",
    ],
  },
  glossario: {
    id: "glossario",
    title: "Glossário",
    subtitle: "Termos e Definições",
    paragraphs: [
      "Este glossário reúne os principais termos utilizados ao longo do livro, com definições voltadas ao contexto da ciência de dados e da lógica aplicada.",
      "**Implicação**, Relação lógica entre duas proposições na qual a verdade da primeira (antecedente) garante a verdade da segunda (consequente). Em lógica formal, é representada pelo conectivo →. Por exemplo: *\"Se o usuário apresentou erro, então o sistema exibe uma mensagem de apoio\"* é uma implicação. É importante notar que a implicação lógica não exige relação causal entre as proposições, ela apenas estabelece que não pode ocorrer o caso em que o antecedente é verdadeiro e o consequente é falso.",
      "**Máxima Verossimilhança**, Método estatístico de estimação de parâmetros que busca encontrar os valores que tornam os dados observados mais prováveis. Dado um modelo estatístico com parâmetros desconhecidos, a estimativa de máxima verossimilhança (MLE) é aquela que maximiza a função de verossimilhança. É amplamente utilizado em aprendizado de máquina, regressão logística e modelos probabilísticos em ciência de dados.",
      "**Verossimilhança**, Função que mede o quão compatíveis são os dados observados com um determinado conjunto de parâmetros de um modelo estatístico. Diferente da probabilidade, que vai do modelo para os dados, a verossimilhança vai dos dados para o modelo: ela avalia quão \"plausíveis\" são os parâmetros à luz das observações. É um conceito fundamental para inferência estatística e para a construção de modelos preditivos em ciência de dados.",
    ],
  },
};
