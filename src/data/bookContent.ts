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
      { id: "cap2-sec2b", title: "Proposições como Conjuntos" },
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
      { id: "cap3-sec1", title: "Três maneiras de verificar se uma conclusão é válida" },
      { id: "cap3-sec2", title: "O que é um sistema de prova?" },
      { id: "cap3-sec3", title: "Esquemas — regras que valem para qualquer fórmula" },
      { id: "cap3-sec4", title: "Sistema de Hilbert — o sistema clássico" },
      { id: "cap3-sec5", title: "Sistema de Fitch — a Dedução Natural" },
      { id: "cap3-sec6", title: "Exemplos completos de provas em Fitch" },
      { id: "cap3-sec7", title: "Hilbert e Fitch lado a lado" },
      { id: "cap3-sec8", title: "Como construir provas na prática" },
      { id: "cap3-sec9", title: "Correção e Completude" },
      { id: "cap3-sec10", title: "Resumo do Capítulo" },
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
      { id: "cap5-sec2", title: "Consequência Lógica e Verificação por Modelos" },
      { id: "cap5-sec3", title: "Provas, Demonstrabilidade, Correção e Completude" },
      { id: "cap5-sec4", title: "O Sistema de Fitch — Regras para Quantificadores" },
      { id: "cap5-sec5", title: "Quantificador Universal — Provas e Exemplos" },
      { id: "cap5-sec6", title: "Quantificador Existencial — Provas e Exemplos" },
      { id: "cap5-sec7", title: "Provas e Validação na Prática" },
      { id: "cap5-sec8", title: "Resumo do Capítulo" },
    ]
  },

  {
    id: "cap6",
    title: "Capítulo 6 - Resolução e Prova por Refutação",
    sections: [
      { id: "cap6-sec1", title: "O que é Resolução?" },
      { id: "cap6-sec2", title: "Forma Clausal" },
      { id: "cap6-sec3", title: "A Regra de Resolução" },
      { id: "cap6-sec4", title: "Prova por Refutação" },
      { id: "cap6-sec5", title: "Resolução com Variáveis" },
      { id: "cap6-sec6", title: "Aplicações em Ciência de Dados" },
      { id: "cap6-sec7", title: "Resumo do Capítulo" },
    ]
  },
  {
    id: "cap7",
    title: "Capítulo 7 - Raciocínio Não-Clássico",
    sections: [
      { id: "cap7-sec1", title: "A Lógica Não Resolve Tudo, e Tudo Bem" },
      { id: "cap7-sec2", title: "Probabilidade: o Quanto Você Acredita?" },
      { id: "cap7-sec3", title: "Teorema de Bayes" },
      { id: "cap7-sec4", title: "Redes Bayesianas" },
      { id: "cap7-sec5", title: "Naive Bayes no Machine Learning" },
      { id: "cap7-sec6", title: "Lógica Fuzzy" },
      { id: "cap7-sec7", title: "Resumo do Capítulo" },
    ]
  },
  {
    id: "cap8",
    title: "Capítulo 8 - Ética e Argumentação",
    sections: [
      { id: "cap8-sec1", title: "Lógica não é só matemática" },
      { id: "cap8-sec2", title: "Argumentos: validade e solidez" },
      { id: "cap8-sec3", title: "Falácias formais" },
      { id: "cap8-sec4", title: "Falácias informais" },
      { id: "cap8-sec5", title: "Viés algorítmico" },
      { id: "cap8-sec6", title: "Lógica da Argumentação" },
      { id: "cap8-sec7", title: "Resumo do Capítulo" },
    ]
  },
  {
    id: "cap9",
    title: "Capítulo 9 - Conclusão",
    sections: [
      { id: "cap9-sec1", title: "O que foi construído ao longo destes capítulos" },
      { id: "cap9-sec2", title: "A progressão: dois eixos em diálogo constante" },
      { id: "cap9-sec3", title: "Conceitos centrais: uma recapitulação articulada" },
      { id: "cap9-sec4", title: "A lógica como competência transversal" },
      { id: "cap9-sec5", title: "Limites e extensões: o que este livro não cobre" },
      { id: "cap9-sec6", title: "Palavras finais" },
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
      "O desenvolvimento deste trabalho apoiou-se em referências consolidadas da área. Em língua portuguesa, recorreu-se a {{ref:alencar|Alencar Filho (2000)|ALENCAR FILHO, E. Iniciação a lógica matemática. São Paulo: Nobel, 2000.}}, cuja obra *Iniciação à Lógica Matemática* oferece uma introdução acessível e sistemática aos fundamentos da disciplina, e a {{ref:souza|Souza (2002)|SOUZA, J. N. Lógica para Ciência da Computação. São Paulo: Campus, 2002.}}, com *Lógica para Ciência da Computação*, voltado especificamente ao contexto computacional. Para as discussões envolvendo inteligência artificial e representação do conhecimento, utilizou-se {{ref:russell|Russell e Norvig (2004)|RUSSEL, R.; NORVIG, P. Inteligência Artificial. 2a ed. Rio de Janeiro: Campus, 2004.}}, referência clássica no campo. Por fim, incorporou-se a contribuição de {{ref:vargas|Vargas, Silva e Finger (2022)|VARGAS, Ketrin Diovana Alves Rodrigues; DA SILVA, João Pablo Silva; FINGER, Alice Fonseca. Estratégias para o ensino de lógica matemática com pensamento computacional: Uma revisão sistemática da literatura. Simpósio Brasileiro de Informática na Educação (SBIE), p. 1391-1403, 2022.}}, estudo de revisão sistemática que investiga estratégias para o ensino de lógica matemática articuladas ao pensamento computacional, trazendo uma perspectiva contemporânea e educacional ao conjunto bibliográfico.",
      "Esta obra é organizada em três dimensões principais: (1) *apresentação rigorosa e acessível* para estudantes de graduação em IA e Ciência de Dados, com maior ênfase em intuições e motivações; (2) *organização progressiva dos capítulos*, condensando conteúdo onde apropriado e aprofundando onde relevante para o público-alvo; e (3) *introdução sistemática de conexões com IA e Ciência de Dados*, incluindo exemplos em Python, discussões sobre aprendizado de máquina, grafos de conhecimento, raciocínio neurossimbólico e limites computacionais.",
      
      "## Para Quem é Este Livro",
      "Este livro é dirigido a estudantes de graduação em Inteligência Artificial, Ciência de Dados, Ciência da Computação e áreas afins que buscam uma fundamentação lógica sólida. Presume-se familiaridade com pensamento algorítmico básico e noções elementares de matemática discreta, mas não se exige experiência prévia com lógica formal.",
      "A progressão dos capítulos é deliberadamente gradual:",
      "- **Capítulos 1-3:** Lógica Proposicional, conectivos, tabelas-verdade, sistema Fitch, satisfatibilidade\n- **Capítulos 4-5:** Lógica Relacional, variáveis, quantificadores, modelos e completude\n- **Capítulo 6:** Resolução automática e fundamentos da programação lógica\n- **Capítulo 7:** Raciocínio sob incerteza — probabilidade, Bayes e lógica fuzzy\n- **Capítulo 8:** Ética e argumentação — falácias, viés algorítmico e lógica da argumentação\n- **Capítulo 9:** Conclusão integrativa — síntese da jornada lógica e horizontes futuros",
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
      "Os autores agradecem aos estudantes de graduação que utilizaram versões preliminares deste material em sala de aula, suas dúvidas, críticas e sugestões foram indispensáveis para moldar a versão final. A vocês, este livro é dedicado.",
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
      "Por exemplo, para três proposições (**p**, **q** e **r**), temos 2³ = 8 atribuições possíveis. A **Tabela 2.1** enumera todas elas.",
      "```\\n| p | q | r |\\n|---|---|---|\\n| 1 | 1 | 1 |\\n| 1 | 1 | 0 |\\n| 1 | 0 | 1 |\\n| 1 | 0 | 0 |\\n| 0 | 1 | 1 |\\n| 0 | 1 | 0 |\\n| 0 | 0 | 1 |\\n| 0 | 0 | 0 |\\nTabela 2.1: Todas as atribuições possíveis para três proposições atômicas (p, q, r).\\n```",
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
      "Esses dois conceitos permitem reagrupar as três propriedades anteriores. A **Tabela 2.2** sintetiza essa correspondência, indicando para cada propriedade se a sentença é satisfatível e/ou falsificável.",
      "```\n| Propriedade | Satisfatível? | Falsificável? |\n|---|---|---|\n| Válida | Sim | Não |\n| Contingente | Sim | Sim |\n| Insatisfatível | Não | Sim |\nTabela 2.2: Classificação das propriedades lógicas das sentenças quanto à satisfatibilidade e à falsificabilidade.\n```",
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
      "Para ilustrar um caso de equivalência, comparamos `¬(p ∨ q)` e `¬p ∧ ¬q` em todas as quatro atribuições possíveis. A **Tabela 2.3** apresenta o resultado dessa comparação.",
      "```\n| p | q | ¬(p ∨ q) | ¬p ∧ ¬q |\n|---|---|----------|----------|\n| 1 | 1 |    0     |    0     |\n| 1 | 0 |    0     |    0     |\n| 0 | 1 |    0     |    0     |\n| 0 | 0 |    1     |    1     |\nTabela 2.3: Tabela-verdade comparando `¬(p ∨ q)` e `¬p ∧ ¬q`.\n```",
      "Como mostra a Tabela 2.3, as colunas coincidem em todas as linhas; portanto, as sentenças são equivalentes.",
      "Em contraste, comparamos agora `p ∧ q` e `p ∨ q`, cuja diferença pretendemos evidenciar. A **Tabela 2.4** apresenta as avaliações lado a lado.",
      "```\n| p | q | p ∧ q | p ∨ q |\n|---|---|-------|-------|\n| 1 | 1 |   1   |   1   |\n| 1 | 0 |   0   |   1   |\n| 0 | 1 |   0   |   1   |\n| 0 | 0 |   0   |   0   |\nTabela 2.4: Tabela-verdade comparando `p ∧ q` e `p ∨ q`.\n```",
      "Conforme indicado na Tabela 2.4, as colunas diferem nas linhas intermediárias; portanto, não há equivalência.",
      "###Substituibilidade e reescrita de regras",
      "Uma propriedade central da equivalência lógica é a **substituibilidade**: se φ e ψ são logicamente equivalentes (isto é, φ ⇔ ψ é sempre verdadeiro), então podemos substituir uma pela outra dentro de qualquer expressão proposicional sem alterar o comportamento lógico do sistema.",
      "Isso permite reescrever regras, simplificar expressões e otimizar validações, mantendo exatamente o mesmo conjunto de cenários aceitos. (Em lógicas mais expressivas, como a de predicados, essa substituição exige cuidados adicionais.)",
    ]
  },

  "cap2-sec2b": {
    id: "cap2-sec2b",
    title: "Proposições como Conjuntos",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Até agora, trabalhamos com proposições de forma simbólica — analisando sua estrutura e suas propriedades lógicas. Existe, porém, uma forma alternativa e muito intuitiva de enxergar essas proposições: interpretá-las como **conjuntos de situações**. Essa visão geométrica torna conceitos abstratos como equivalência, tautologia e contradição imediatamente visuais.",
      "###Ideia central",
      "Imagine que existem inúmeras situações possíveis no mundo — dias ensolarados, dias chuvosos, ruas molhadas ou secas, e assim por diante. Chamamos o conjunto de **todas** essas situações possíveis de **Universo (U)**.",
      "Cada proposição — uma afirmação que pode ser verdadeira ou falsa — corresponde a um **subconjunto** desse universo:",
      "| **Proposição = conjunto das situações em que ela é verdadeira** |",
      "###Exemplo concreto",
      "Considere duas proposições simples:",
      "- **p**: \"Está chovendo\"\n- **q**: \"A rua está molhada\"",
      "Podemos interpretar cada uma como um conjunto:",
      "- **p** → conjunto de todas as situações em que chove\n- **q** → conjunto de todas as situações em que a rua está molhada",
      "A **Figura 2.1** ilustra essa ideia: a proposição **p** é representada por um círculo dentro do retângulo que representa o universo U.",
      "![Figura 2.1 — A proposição p como um subconjunto do Universo U](conjuntos-fig1)",
      "###Conectivos lógicos como operações de conjuntos",
      "A grande vantagem dessa interpretação é que cada conectivo lógico passa a ter uma correspondência direta com uma operação de conjuntos.",
      "####1. Conjunção — E (p ∧ q)",
      "Quando dizemos `p ∧ q`, queremos as situações em que as duas proposições são verdadeiras ao mesmo tempo. Isso corresponde exatamente à **interseção** dos dois conjuntos — a parte que **p** e **q** compartilham. Em símbolos: `p ∧ q = p ∩ q`. A **Figura 2.2** mostra a região destacada.",
      "![Figura 2.2 — Conjunção: a área comum entre p e q (interseção)](conjuntos-fig2)",
      "####2. Disjunção — OU (p ∨ q)",
      "Quando dizemos `p ∨ q`, queremos as situações em que pelo menos uma das proposições é verdadeira. Isso corresponde à **união** dos dois conjuntos — tudo que está em **p**, em **q**, ou nos dois ao mesmo tempo. Em símbolos: `p ∨ q = p ∪ q`. A **Figura 2.3** ilustra essa região.",
      "![Figura 2.3 — Disjunção: tudo que está em p ou em q (união)](conjuntos-fig3)",
      "####3. Negação — NÃO (¬p)",
      "A negação de **p** reúne todas as situações em que **p** não é verdadeiro — ou seja, tudo que está fora do círculo de **p** dentro do universo. Trata-se do **complemento** de **p** em relação a U: `¬p = U ∖ p`. A **Figura 2.4** destaca essa região externa.",
      "![Figura 2.4 — Negação: tudo que está fora de p no universo U](conjuntos-fig4)",
      "###Resumo: conectivos e operações",
      "A **Tabela 2.X** sintetiza a correspondência entre conectivos lógicos e operações de conjuntos.",
      "| **Conectivo** | **Símbolo** | **Operação** | **Notação** |\n|---|---|---|---|\n| Conjunção (E) | p ∧ q | Interseção | p ∩ q |\n| Disjunção (OU) | p ∨ q | União | p ∪ q |\n| Negação (NÃO) | ¬p | Complemento | U ∖ p |",
      "###Equivalência lógica como igualdade de conjuntos",
      "Duas fórmulas são logicamente equivalentes quando são verdadeiras exatamente nas mesmas situações. Em termos de conjuntos, isso significa que elas representam **o mesmo conjunto**: `φ ≡ ψ` se, e somente se, **φ** e **ψ** representam o mesmo conjunto de situações.",
      "| **Consequência prática:**<br/>Se φ ≡ ψ, então podemos substituir uma pela outra em qualquer contexto sem alterar o resultado lógico. Isso é o que chamamos de **substituibilidade**. |",
      "###Tautologia e contradição",
      "Uma **tautologia** é verdadeira em todas as situações possíveis. Em termos de conjuntos, ela corresponde ao **universo inteiro U** — não há nenhuma situação de fora. A **Figura 2.5** ilustra essa cobertura total.",
      "![Figura 2.5 — Tautologia: proposição que cobre todo o universo U](conjuntos-fig5)",
      "####Contradição — nunca verdadeira",
      "Uma **contradição** é falsa em todas as situações possíveis. Em termos de conjuntos, ela corresponde ao **conjunto vazio ∅** — não há nenhuma situação onde ela seja verdadeira. A **Figura 2.6** apresenta essa visualização.",
      "![Figura 2.6 — Contradição: conjunto vazio, nenhuma situação satisfaz](conjuntos-fig6)",
      "###Por que essa visão é útil?",
      "Interpretar proposições como conjuntos torna a lógica mais concreta e visual. Em vez de trabalhar apenas com tabelas-verdade e símbolos abstratos, passamos a enxergar o que cada proposição **cobre** no espaço de todas as situações possíveis:",
      "- **Equivalências** viram igualdades de áreas — duas proposições equivalentes cobrem exatamente o mesmo espaço.\n- **Operações lógicas** viram operações geométricas — E é interseção, OU é união, NÃO é complemento.\n- **Tautologias** e **contradições** ganham uma imagem clara — universo cheio ou universo vazio.",
      "| **Ideia central do tópico:**<br/>A lógica proposicional pode ser vista como uma **álgebra de conjuntos**: proposições são conjuntos de situações, e conectivos lógicos são operações sobre esses conjuntos. |",
    ]
  },

  "cap2-sec3": {
    id: "cap2-sec3",
    title: "Consequência Lógica",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Em Ciência de Dados, partimos frequentemente de premissas (regras, hipóteses, restrições) e queremos saber o que pode ser afirmado com garantia. A noção que formaliza isso é a **consequência lógica**.",
      "Dizemos que φ **logicamente implica** ψ (φ ⊨ ψ) quando toda atribuição que satisfaz φ também satisfaz ψ. Mais geralmente, usamos a letra grega **Δ** (delta maiúsculo) para representar um *conjunto de sentenças* (tipicamente, o conjunto de premissas em consideração). Assim, dizemos que um conjunto Δ implica ψ (Δ ⊨ ψ) quando toda atribuição que satisfaz todas as sentenças em Δ também satisfaz ψ.",
      "###Consequência lógica como garantia",
      "A sentença `p` implica `p ∨ q`, pois sempre que **p** é verdadeiro, a disjunção também é, independentemente de **q**.",
      "Por outro lado, `p` não implica `p ∧ q`, já que **q** pode ser falso.",
      "###Consequência lógica não é verdade empírica",
      "Se uma premissa não implica uma conclusão, isso não torna a conclusão falsa; apenas significa que ela não é garantida em todos os cenários. É possível que a conclusão seja verdadeira em um conjunto de dados específico, mas falhe em outro.",
      "###Verificando consequência lógica com tabelas-verdade",
      "O método da tabela-verdade pode ser usado para verificar consequência: avaliamos premissas e conclusão em todas as atribuições e verificamos se existe alguma linha em que as premissas sejam verdadeiras e a conclusão seja falsa.",
      "###Exemplo: p ⊨ (p ∨ q)",
      "Para verificar se `p ⊨ (p ∨ q)`, avaliamos premissa e conclusão em todas as atribuições possíveis e checamos se há alguma linha em que a premissa seja verdadeira e a conclusão falsa. A **Tabela 2.5** apresenta essa avaliação.",
      "```\n| p | q | p | p ∨ q |\n|---|---|---|-------|\n| 1 | 1 | 1 |   1   |\n| 1 | 0 | 1 |   1   |\n| 0 | 1 | 0 |   1   |\n| 0 | 0 | 0 |   0   |\nTabela 2.5: Avaliação de `p` (premissa) e `p ∨ q` (conclusão) em todas as atribuições.\n```",
      "Como mostra a Tabela 2.5, toda linha em que a premissa é verdadeira tem a conclusão também verdadeira. A consequência lógica vale.",
      "###Exemplo: p ⊭ (p ∧ q)",
      "De forma análoga, testamos se `p ⊨ (p ∧ q)` enumerando todas as atribuições. A **Tabela 2.6** apresenta a avaliação correspondente.",
      "```\n| p | q | p | p ∧ q |\n|---|---|---|-------|\n| 1 | 1 | 1 |   1   |\n| 1 | 0 | 1 |   0   |\n| 0 | 1 | 0 |   0   |\n| 0 | 0 | 0 |   0   |\nTabela 2.6: Avaliação de `p` (premissa) e `p ∧ q` (conclusão) em todas as atribuições.\n```",
      "Conforme observado na Tabela 2.6, a segunda linha mostra a falha: a premissa é verdadeira e a conclusão é falsa. A consequência lógica não vale.",
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
      "Para tornar essas relações explícitas, a **Tabela 2.7** avalia simultaneamente `p ∨ q`, `¬p ∨ ¬q` e `¬p ∧ ¬q` em todas as atribuições, permitindo identificar em quais cenários cada par é satisfeito conjuntamente.",
      "```\n| p | q | p ∨ q | ¬p ∨ ¬q | ¬p ∧ ¬q |\n|---|---|-------|---------|----------|\n| 1 | 1 |   1   |    0    |    0     |\n| 1 | 0 |   1   |    1    |    0     |\n| 0 | 1 |   1   |    1    |    0     |\n| 0 | 0 |   0   |    1    |    1     |\nTabela 2.7: Avaliação de `p ∨ q`, `¬p ∨ ¬q` e `¬p ∧ ¬q` em todas as atribuições.\n```",
      "Como evidenciado na Tabela 2.7, as duas primeiras sentenças coexistem nas linhas 2 e 3 (consistentes), enquanto a terceira nunca é verdadeira junto da primeira (inconsistentes).",
      "###Consistência não é equivalência nem consequência",
      "Duas sentenças podem ser consistentes sem serem equivalentes e sem que uma implique a outra. No exemplo anterior, `p ∨ q` e `¬p ∨ ¬q` coexistem em alguns cenários, mas não dizem a mesma coisa e não garantem uma à outra.",
      "###Consequência lógica por vacuidade",
      "Um resultado importante, e contraintuitivo à primeira vista, surge quando o conjunto de premissas é **insatisfatível**.",
      "Se um conjunto Δ é insatisfatível, não existe nenhuma atribuição que o satisfaça. Portanto, não existe nenhuma atribuição que satisfaça Δ e ao mesmo tempo falsifique qualquer conclusão φ. Pela definição de consequência lógica, isso significa que Δ ⊨ φ para **qualquer** φ, um conjunto insatisfatível implica logicamente qualquer coisa.",
      "Esse resultado é chamado de **consequência por vacuidade**: a implicação vale não porque as premissas garantem a conclusão, mas porque não existe nenhum contraexemplo possível.",
      "Considere o conjunto `{p, ¬p}`. Não existe atribuição que satisfaça simultaneamente `p` e `¬p`. Logo, esse conjunto implica logicamente `q`, `¬q`, `r ∧ s`, qualquer sentença que queiramos.",
      "A **Tabela 2.8** sintetiza o comportamento da consequência lógica conforme a situação semântica do conjunto de premissas.",
      "```\n| Situação das premissas | O que acontece |\n|---|---|\n| Conjunto vazio {} | Só tautologias são consequências |\n| Conjunto satisfatível | A consequência depende do conteúdo |\n| Conjunto insatisfatível | Toda sentença é consequência |\nTabela 2.8: Comportamento da consequência lógica conforme a satisfatibilidade do conjunto de premissas.\n```",
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
      "> *Lê-se: Δ implica logicamente φ se, e somente se, o conjunto formado por Δ unido à negação de φ é insatisfatível.*",
      "Esse resultado é a base da prova por refutação: para mostrar que uma conclusão é consequência lógica das premissas, negamos a conclusão, adicionamos ao conjunto de premissas e verificamos se o conjunto resultante é inconsistente. Esse é o princípio por trás dos SAT solvers e dos sistemas de prova automática estudados nos próximos capítulos.",
      "###Teorema da Consistência",
      "φ é consistente com ψ se, e somente se, `φ ∧ ψ` é satisfatível. Para {φ₁, …, φₙ}, φ é consistente com o conjunto se, e somente se, `φ₁ ∧ … ∧ φₙ ∧ φ` é satisfatível.",
      "###Teorema da Monotonicidade",
      "Se Γ ⊨ φ, então para qualquer conjunto Δ ⊇ Γ, também Δ ⊨ φ.",
      "> *Lê-se: se Γ implica logicamente φ, então para qualquer conjunto Δ que contenha Γ, também temos que Δ implica logicamente φ.*",
      "**Acrescentar premissas nunca invalida conclusões já garantidas.** Saber mais não faz você perder conclusões anteriores.",
      "Em ciência de dados, isso significa que adicionar novas regras de negócio a um sistema existente não quebra as inferências que já eram válidas, desde que o conjunto permaneça consistente. Se uma nova regra introduz inconsistência, o problema não é a monotonicidade, mas a própria inconsistência.",
      "###Teorema da Ramificação",
      "Se φ₁ ⊨ ψ e φ₂ ⊨ ψ, então (φ₁ ∨ φ₂) ⊨ ψ.",
      "> *Lê-se: se φ₁ implica logicamente ψ e φ₂ implica logicamente ψ, então a disjunção de φ₁ e φ₂ também implica logicamente ψ.*",
      "Se dois caminhos diferentes levam à mesma conclusão, então a disjunção dos dois também leva. Muito usado em sistemas de regras com múltiplos caminhos para a mesma decisão, por exemplo, um cliente pode ser negado por score baixo *ou* por histórico negativo, e em ambos os casos a conclusão é a mesma.",
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
      "```\n¬¬φ ⇔ φ\n¬(φ ∧ ψ) ⇔ (¬φ ∨ ¬ψ)\n¬(φ ∨ ψ) ⇔ (¬φ ∧ ¬ψ)\n(φ ⇒ ψ) ⇔ (¬φ ∨ ψ)\n(φ ⇔ ψ) ⇔ (φ ⇒ ψ) ∧ (ψ ⇒ φ)\n```",
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
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Proposição | Afirmação que pode ser verdadeira ou falsa; unidade básica da lógica proposicional |\n| Conectivos lógicos | Operadores (¬, ∧, ∨, ⇒, ⇔) que combinam proposições em sentenças compostas |\n| Tabela-verdade | Enumeração de todas as atribuições possíveis para avaliar sentenças |\n| Válida (tautologia) | Verdadeira em toda atribuição; nunca falha |\n| Insatisfatível (contradição) | Falsa em toda atribuição; indica erro no modelo |\n| Contingente | Verdadeira em algumas atribuições e falsa em outras; a mais informativa |\n| Satisfatível | Verdadeira em ao menos uma atribuição (válidas + contingentes) |\n| Falsificável | Falsa em ao menos uma atribuição (contingentes + insatisfatíveis) |\n| Equivalência lógica | Duas sentenças com os mesmos valores em toda atribuição |\n| Consequência lógica (⊨) | Toda atribuição que satisfaz as premissas também satisfaz a conclusão |\n| Consequência por vacuidade | Conjunto insatisfatível implica logicamente qualquer sentença |\n| Consistência lógica | Existe ao menos uma atribuição que satisfaz todas as sentenças simultaneamente |\n| Monotonicidade | Acrescentar premissas nunca invalida conclusões já garantidas |\n| Ramificação | Se φ₁⊨ψ e φ₂⊨ψ, então (φ₁∨φ₂)⊨ψ |\n| Forma Normal Conjuntiva | Conjunção de disjunções, base para resolução e SAT solvers |",
      "###Tabela comparativa dos conceitos fundamentais",
      "Para destacar as diferenças entre as quatro relações semânticas centrais, a tabela a seguir apresenta uma comparação focada nos critérios que cada uma verifica e na ideia que captura.",
      "| Conceito | O que verifica | Quantas atribuições? | Ideia central | Exemplo |\n|---|---|---|---|---|\n| Validade | Se uma sentença é sempre verdadeira | Todas | Nunca falha | {} ⊨ p∨¬p |\n| Consistência | Se sentenças podem ser verdadeiras juntas | Pelo menos uma | Coexistem em algum cenário | p é consistente com q |\n| Consequência lógica | Se a verdade é preservada das premissas à conclusão | Todas as que satisfazem Δ | Premissas garantem a conclusão | {p, p⇒q} ⊨ q |\n| Equivalência lógica | Se duas sentenças têm o mesmo valor em todo cenário | Todas | Sempre concordam | p⇒q ≡ ¬p∨q |",
    ]
  },

  "cap3": {
    id: "cap3",
    title: "Inferência e Prova",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Em ciência de dados, raramente lidamos com verdades absolutas. Em vez disso, trabalhamos com dados, regras e hipóteses para chegar a conclusões. Modelos preditivos estimam resultados a partir de dados, pipelines transformam informações de entrada em saídas e sistemas de recomendação inferem preferências com base no comportamento dos usuários. Em todos esses contextos, surge uma questão fundamental: como garantir que uma conclusão está correta a partir das informações disponíveis?",
      "A lógica formal oferece uma resposta para essa questão por meio dos conceitos de **inferência** e **prova**. A inferência é o ato de tirar uma conclusão a partir de premissas conhecidas; a prova é o registro detalhado e justificado desse processo, em que cada passo precisa ter uma razão clara. Em outras palavras, inferir é chegar a um resultado; provar é justificar, passo a passo, por que esse resultado está correto. No capítulo anterior conhecemos regras básicas como o **Modus Ponens** ('se p é verdade, e p implica q, então q é verdade') e o **Modus Tollens**, e vimos que uma prova válida garante que, se as premissas forem verdadeiras, a conclusão é inevitável.",
      "Agora surge a pergunta natural: como organizar essas provas de forma sistemática? Existe mais de uma maneira de fazer isso. Chamamos cada uma dessas maneiras de **sistema de prova**. Neste capítulo, vamos conhecer os dois principais — o **Sistema de Hilbert** e o **Sistema de Fitch** — e ao longo do texto conectaremos os conceitos a situações típicas da ciência de dados, evidenciando sua aplicação prática.",
      "| **Inferência** é tirar conclusões a partir de premissas; **prova** é demonstrar que essas conclusões estão corretas. |",
    ],
  },

  "cap3-sec1": {
    id: "cap3-sec1",
    title: "Três maneiras de verificar se uma conclusão é válida",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Imagine que alguém te apresenta um argumento — algumas premissas e uma conclusão — e te pede para verificar se o argumento é válido. Existem pelo menos três estratégias que você pode usar. Cada uma tem seus pontos fortes e suas limitações.",
      "##Tabelas-verdade — o método mais garantido, mas também o mais trabalhoso",
      "A tabela-verdade é como um teste exaustivo: você lista todas as combinações possíveis de verdadeiro/falso para cada variável e verifica, em cada combinação, se as premissas sendo verdadeiras forçam a conclusão a ser verdadeira também.",
      "O problema é que o tamanho da tabela cresce muito rápido. Com 2 variáveis, são 4 linhas. Com 5 variáveis, são 32 linhas. Com 20 variáveis, são mais de 1 milhão de linhas. Na prática, para argumentos complexos, tabelas-verdade se tornam impossíveis de usar à mão.",
      "##Reescrita com equivalências — às vezes funciona, às vezes não",
      "Outra abordagem é usar equivalências lógicas conhecidas para simplificar as fórmulas. Por exemplo, sabemos que ¬(p ∧ q) é equivalente a (¬p ∨ ¬q). Às vezes, reescrever as expressões de forma mais simples torna a validade evidente.",
      "O problema dessa abordagem é que ela não é garantida: às vezes funciona rapidamente, às vezes você fica preso sem saber qual equivalência aplicar. Não existe um roteiro fixo a seguir.",
      "##Sistemas de prova — sistemático e sempre funciona",
      "A terceira abordagem é usar um **sistema de prova**. Um sistema de prova define um conjunto de regras permitidas. Se você seguir essas regras passo a passo, partindo das premissas, vai chegar à conclusão de forma garantida e verificável.",
      "É como aprender as regras de um jogo: uma vez que você conhece os movimentos permitidos, pode construir qualquer 'jogada' (prova) de forma organizada. E outra pessoa pode verificar seu trabalho passo a passo, sem precisar confiar na sua intuição.",
      "| **📊 Ciência de Dados — O problema da explosão de combinações** |\n| Na ciência de dados, é muito comum precisar verificar regras sobre clientes ou registros. Por exemplo: 'cliente aprovado SE renda alta E score bom E sem dívidas'. Parece simples — mas o problema aparece quando as condições aumentam. |\n| Cada condição pode ser Verdadeira ou Falsa. Com 2 condições, temos 4 combinações possíveis para checar. Com 5 condições, já são 32. Com 20 condições — algo comum em análise de crédito real — são mais de 1 milhão de combinações. É inviável verificar tudo manualmente. |",
      "Para ter dimensão concreta do problema, a Tabela 3.1 mostra como o número de combinações cresce exponencialmente com a quantidade de condições — passando rapidamente do gerenciável para o impossível.",
      "| **Nº de condições** | **Combinações a verificar** | **É viável?** |\n| 2 (ex: renda alta E score bom) | 4 | Fácil |\n| 5 (ex: + sem dívidas + empregado + idade) | 32 | Trabalhoso |\n| 10 condições | 1.024 | Difícil |\n| 20 condições | 1.048.576 | Inviável à mão |\n| 30 condições | 1.073.741.824 | Impossível |\nTabela 3.1 — Crescimento exponencial das combinações de verdade conforme aumenta o número de condições lógicas.",
      "| **Por que sistemas de prova são importantes?** As provas costumam ser muito menores e mais rápidas de construir do que tabelas-verdade. Cada passo é justificado — qualquer pessoa pode verificar se a prova está correta. O processo é sistemático: existe um roteiro a seguir, mesmo que exija criatividade. E são a base dos verificadores automáticos de lógica usados em computação. |",
    ],
  },

  "cap3-sec2": {
    id: "cap3-sec2",
    title: "O que é um sistema de prova?",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Pense em um sistema de prova como um livro de regras para um jogo lógico. Esse livro define:",
      "- Quais são os 'movimentos' permitidos — ou seja, quais padrões de raciocínio você pode usar.\n- Como cada movimento deve ser registrado — ou seja, como escrever cada passo da prova.\n- O que conta como início (as premissas) e o que conta como fim (a conclusão).",
      "Seguindo essas regras, você constrói a prova passo a passo. Cada passo é uma nova fórmula que você escreve, junto com a explicação de por que ela pode ser escrita naquele momento.",
      "Existem vários sistemas de prova para a lógica proposicional. Os mais conhecidos são:",
      "- **Sistema de Hilbert** — o mais antigo, usa axiomas fixos e apenas uma regra de inferência.\n- **Sistema de Fitch (Dedução Natural)** — mais moderno, mais intuitivo, permite hipóteses temporárias.\n- **Resolução** — usado em computação, especialmente em inteligência artificial (veremos em capítulo posterior).",
      "A boa notícia: todos esses sistemas chegam às mesmas conclusões. A diferença entre eles é apenas o estilo e a facilidade de uso — é como escrever um texto em português ou em inglês: a ideia é a mesma, a forma é diferente.",
    ],
  },

  "cap3-sec3": {
    id: "cap3-sec3",
    title: "Esquemas — regras que valem para qualquer fórmula",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Antes de estudar os sistemas em si, precisamos entender uma ideia simples e fundamental: o conceito de **esquema**.",
      "Um esquema é como uma receita genérica. Em vez de dizer 'se você tem p e tem p ⇒ q, então você pode concluir q', um esquema diz: 'se você tem qualquer fórmula φ, e tem φ ⇒ ψ (sendo ψ qualquer outra fórmula), então você pode concluir ψ'.",
      "As letras gregas φ (phi) e ψ (psi) são chamadas de **metavariáveis**. Elas funcionam como coringas: representam qualquer fórmula — simples ou complexa.",
      "| **Exemplo de esquema — Modus Ponens generalizado:**<br/><br/>Antes de ver o esquema, vale apresentar um símbolo que aparecerá com frequência: o **⊢** (chamado de *“traço de asserção”* ou *“turnstile”*). Ele significa **'deriva'** ou **'prova'** — à esquerda ficam as premissas (o ponto de partida) e, à direita, a conclusão obtida a partir delas.<br/><br/>**Esquema:**  `φ` ,  `φ ⇒ ψ`   ⊢   `ψ`<br/><br/>Lê-se: *“a partir das premissas φ e φ ⇒ ψ, deriva-se ψ”*. Este esquema funciona para qualquer fórmula no lugar de φ e ψ. Por exemplo:<br/><br/>**Exemplo 1** — substituindo φ por `p` e ψ por `q`:<br/>premissas:  `p` ,  `p ⇒ q`<br/>conclusão:  `q`<br/><br/>**Exemplo 2** — substituindo φ por `(p ∧ r)` e ψ por `(q ∨ s)`:<br/>premissas:  `(p ∧ r)` ,  `(p ∧ r) ⇒ (q ∨ s)`<br/>conclusão:  `(q ∨ s)`<br/><br/>Em ambos os casos, a mesma regra se aplica — apenas com fórmulas diferentes no lugar dos coringas. |",
      "##Atenção: regras só valem para a fórmula toda, não para partes dela",
      "Este é um erro muito comum quando se está aprendendo. Regras de inferência se aplicam a fórmulas completas — não a pedaços de uma fórmula maior.",
      "Imagine que você tem a premissa (p ∧ q) ⇒ r. Você poderia pensar: 'tenho uma conjunção aqui, vou extrair o p'. Mas não pode! A conjunção (p ∧ q) não é uma fórmula de nível superior — ela está aninhada dentro de uma implicação. A fórmula de nível superior é a implicação inteira.",
      "| **Regra importante:**<br/><br/>As regras de inferência só se aplicam a fórmulas que estejam no nível mais externo da linha em que aparecem — nunca a subfórmulas escondidas dentro de operadores maiores.<br/><br/>**Permitido:** você tem `p ∧ q` como premissa → pode extrair `p` ou `q`.<br/>**Não permitido:** você tem `(p ∧ q) ⇒ r` → não pode extrair `p` diretamente daqui. |",
      "| **📊 Ciência de Dados — Esquemas como modelos de decisão reutilizáveis** |\n| Um esquema lógico com metavariáveis (φ, ψ) funciona como um modelo de decisão genérico: a estrutura é sempre a mesma, o que muda são as informações que você coloca nela. |\n| Pense em um formulário de aprovação de crédito. O formulário é o esquema — ele sempre pede as mesmas informações (renda, score, histórico). O que muda é quem preenche. O raciocínio aplicado é idêntico para todos os clientes, só os valores mudam. |",
      "A Tabela 3.2 ilustra esse paralelo: o mesmo esquema lógico (φ, φ⇒ψ ⊢ ψ) é instanciado para dois clientes diferentes — Ana e Bob — produzindo conclusões distintas conforme o valor concreto de φ se confirma ou não.",
      "| **Esquema lógico (geral)** | **Instância 1 (cliente Ana)** | **Instância 2 (cliente Bob)** |\n| φ = condição de renda | renda > 5.000 | renda > 5.000 |\n| ψ = conclusão | Ana está aprovada | Bob está aprovado |\n| φ é verdadeiro? | Sim (renda = 8.000) | Não (renda = 3.000) |\n| Conclusão (Modus Ponens) | Ana aprovada | Regra não se aplica |\nTabela 3.2 — Duas instâncias do mesmo esquema lógico aplicado a clientes diferentes em uma decisão de crédito.",
      "| **A ideia central:**<br/><br/>O esquema φ, φ ⇒ ψ ⊢ ψ é como uma régua de decisão. Você a aplica para Ana, para Bob, para qualquer cliente. A régua não muda — o que muda são os valores concretos colocados no lugar de φ e ψ. Isso é o que chamamos de instância do esquema. |",
    ],
  },

  "cap3-sec4": {
    id: "cap3-sec4",
    title: "Sistema de Hilbert — o sistema clássico",
    subtitle: "Capítulo 3",
    paragraphs: [
      "O **Sistema de Hilbert** é o mais antigo dos sistemas de prova formais. Foi desenvolvido pelo matemático David Hilbert no início do século XX. Sua ideia é elegante na teoria, mas um pouco difícil na prática.",
      "##A filosofia do sistema de Hilbert",
      "A ideia central de Hilbert é: comece com verdades óbvias e derive tudo mais a partir delas usando um único tipo de regra de raciocínio.",
      "Para isso, o sistema usa dois ingredientes:",
      "- **Esquemas de axiomas**: fórmulas que são sempre verdadeiras — tautologias genéricas. O sistema as aceita como ponto de partida sem precisar provar. São como 'fatos óbvios demais para questionar'.\n- **Uma única regra de inferência**: o Modus Ponens. A partir de qualquer premissa ou axioma, você só pode avançar usando Modus Ponens.",
      "Assim, uma prova em Hilbert é uma lista de fórmulas onde cada linha é ou uma premissa do problema, ou uma instância de um axioma, ou o resultado de aplicar Modus Ponens a duas linhas anteriores.",
      "##O problema: como começar do zero?",
      "Aqui surge um ponto curioso. Imagine que você quer provar que uma certa tautologia é verdadeira — sem ter nenhuma premissa. Ou seja, você quer começar absolutamente do zero.",
      "O Modus Ponens precisa de pelo menos uma linha anterior para funcionar. E se não há premissas, não há linhas anteriores. Então como a prova começa?",
      "A solução de Hilbert é exatamente os esquemas de axiomas: fórmulas que podem ser escritas a qualquer momento, sem justificativa, porque são sempre verdadeiras. É como ter um estoque de 'verdades gratuitas' disponíveis a qualquer hora.",
      "| **Analogia simples:** pense nos axiomas como as peças de um jogo de dominó que já estão sobre a mesa desde o início. Você não precisa justificar por que elas estão lá — elas são o ponto de partida do jogo. A partir delas, usando Modus Ponens, você vai encaixando novas peças até chegar à conclusão que quer provar. |",
      "##O Teorema da Dedução — um atalho fundamental",
      "Trabalhar diretamente com os axiomas de Hilbert é muito trabalhoso. Por isso, existe um resultado matemático chamado **Teorema da Dedução** que funciona como um atalho útil. Ele diz o seguinte:",
      "| **Teorema da Dedução:**<br/><br/>`Δ ⊢ (φ ⇒ ψ)`   equivale a   `Δ ∪ {φ} ⊢ ψ`<br/><br/>Em português simples: para provar que *“φ implica ψ”* a partir das premissas Δ, basta adicionar φ como premissa extra e provar ψ a partir daí.<br/><br/>Em outras palavras: em vez de provar a consequência lógica inteira de uma vez, você pode simplesmente assumir o *“se”* (o antecedente) e mostrar que o *“então”* (o consequente) é verdadeiro. |",
      "Esse teorema é tão útil que o Sistema de Fitch o incorpora diretamente como uma regra de inferência — tornando tudo muito mais simples. Mas antes de chegar lá, veja um exemplo completo em Hilbert.",
      "##Exemplo: Transitividade das implicações",
      "Objetivo: dado que 'p implica q' e que 'q implica r', provar que 'p implica r'. Em símbolos:",
      "**Premissas:** (p ⇒ q) e (q ⇒ r). **Conclusão:** (p ⇒ r).",
      "Pelo Teorema da Dedução, em vez de provar p ⇒ r diretamente, podemos assumir p como premissa extra e provar r. A Tabela 3.3 apresenta a prova passo a passo, mostrando cada linha com a fórmula derivada e a justificativa correspondente.",
      "| Linha | Fórmula | Por quê? (justificativa) |\n|---|---|---|\n| 1 | p ⇒ q | Premissa do problema |\n| 2 | q ⇒ r | Premissa do problema |\n| 3 | p | Hipótese extra (via Teorema da Dedução) |\n| 4 | q | Modus Ponens nas linhas 1 e 3 (temos p⇒q e temos p) |\n| 5 | r | Modus Ponens nas linhas 2 e 4 (temos q⇒r e temos q) |\n| ∴ | p ⇒ r | Conclusão — fechando a hipótese da linha 3 |\nTabela 3.3 — Prova em Hilbert da transitividade das implicações: de p ⇒ q e q ⇒ r, deriva-se p ⇒ r.",
      "Lendo em voz alta: 'Sabemos que p implica q (linha 1) e que q implica r (linha 2). Se assumirmos p (linha 3), então por Modus Ponens temos q (linha 4). E de q, por Modus Ponens novamente, temos r (linha 5). Logo, assumir p leva a r — ou seja, p implica r.'",
      "| **📊 Ciência de Dados — Transitividade em regras de aprovação de crédito** |\n| O raciocínio encadeado da transitividade aparece o tempo todo em ciência de dados: uma sequência de critérios onde cada um depende do anterior. Se o cliente passar em todos, chega ao resultado final. Se falhar em qualquer etapa, o processo para. |",
      "A Tabela 3.4 acompanha três clientes (Ana, Bob e Carla) por três etapas encadeadas de aprovação. Cada etapa corresponde a uma implicação lógica, e a transitividade garante que apenas quem passa em todas as etapas chega ao resultado final positivo.",
      "| **Etapa** | **Regra (lógica)** | **Cliente Ana** | **Cliente Bob** | **Cliente Carla** |\n| 1ª | Renda alta (p) ⇒ elegível básico (q) | R$ 8.000 | R$ 2.000 | R$ 6.000 |\n| 2ª | Elegível básico (q) ⇒ score bom (r) | 750 pts | — parou | 680 pts |\n| 3ª | Score bom (r) ⇒ sem dívidas (s) | limpa | — parou | tem dívida |\n| Final | p ⇒ s (transitividade das 3 regras) | Aprovada | Negado | Negado |\nTabela 3.4 — Aplicação da transitividade lógica a um pipeline de aprovação de crédito com três clientes.",
      "| **Conexão com a lógica:**<br/><br/>A tabela acima implementa exatamente a transitividade provada na seção 4.3: p ⇒ q ⇒ r ⇒ s, logo p ⇒ s. Ana passa em todas as etapas (a cadeia completa é satisfeita). Bob falha na primeira (a cadeia quebra logo de início). Carla passa nas duas primeiras mas falha na terceira — a cadeia também quebra. O resultado final é consequência inevitável das regras — assim como na prova formal. |",
      "##Avaliação do Sistema de Hilbert",
      "**O que é bom no sistema de Hilbert:**",
      "- É teoricamente muito elegante — usa pouquíssimas regras primitivas.\n- Serve como base para muitos resultados matemáticos importantes.\n- Permite estudar a estrutura da lógica de forma precisa e rigorosa.",
      "**O que não é tão bom:**",
      "- As provas ficam muito longas e mecânicas — às vezes dezenas de linhas para algo simples.\n- É difícil para humanos trabalharem diretamente com ele — a intuição não ajuda muito.\n- Na prática, seu valor é mais pedagógico e teórico do que de uso direto.",
    ],
  },

  "cap3-sec5": {
    id: "cap3-sec5",
    title: "Sistema de Fitch — a Dedução Natural",
    subtitle: "Capítulo 3",
    paragraphs: [
      "O **Sistema de Fitch** — também chamado de **Dedução Natural** — foi desenvolvido para resolver exatamente o problema do Sistema de Hilbert: ser mais próximo de como humanos realmente raciocinam.",
      "A ideia central de Fitch é simples: ao invés de ter axiomas fixos, você pode fazer hipóteses temporárias. Você assume algo, trabalha dentro desse contexto, e quando termina, descarta a hipótese — mas guarda o que aprendeu.",
      "| **Analogia do dia a dia:** imagine que um advogado em um tribunal diz: *“Suponhamos, por um momento, que o réu estava no local do crime. Se isso fosse verdade, então ele teria acesso à arma, teria motivo para o crime, e estaria presente na hora certa. Logo, o crime seria dele.”*<br/><br/>O advogado não está afirmando que o réu estava lá — está fazendo uma hipótese temporária para ver aonde ela leva. Ao final, conclui: *“SE o réu estava lá, ENTÃO ele cometeu o crime”*. O *“se”* é exatamente o que Fitch chama de introdução da implicação. |",
      "##Subprovas: o coração do Sistema de Fitch",
      "A estrutura mais importante em Fitch são as **subprovas** — blocos internos dentro de uma prova maior. Uma subprova começa com uma hipótese (uma suposição temporária) e termina quando essa hipótese é descartada.",
      "Visualmente, as subprovas são representadas por uma barra vertical à esquerda que delimita o bloco. Tudo dentro da barra está 'sob a hipótese'. Ao sair da barra, a hipótese deixa de valer — mas geramos uma implicação que captura o que foi provado dentro.",
      "Como funciona uma subprova:",
      "1. Você **abre** a subprova escrevendo uma hipótese (assunção) — algo que você quer supor temporariamente.\n2. Dentro da subprova, você trabalha normalmente, usando as premissas externas e a hipótese como se fossem fatos.\n3. Você **fecha** a subprova quando chega à fórmula que queria. Ao fechar, a hipótese é descartada, e o resultado é uma implicação: hipótese ⇒ conclusão.",
      "##Uma regra crucial: o escopo das subprovas",
      "Existe uma regra de ouro no Sistema de Fitch que não pode ser violada:",
      "| **Regra de escopo:** você só pode usar uma fórmula de uma linha anterior se ela estiver no mesmo nível da subprova atual, ou em um nível externo (mais acima). Nunca em uma subprova paralela. Em outras palavras: você pode ver 'para fora' da sua subprova atual, mas não pode espiar o interior de outras subprovas que já foram fechadas. |",
      "Por exemplo: se você abriu uma subprova para hipótese A e, dentro dela, derivou uma fórmula X, essa fórmula X não existe mais quando a subprova fecha. O que sobra é a implicação A ⇒ X — não X sozinha.",
      "##As regras de inferência do Sistema de Fitch",
      "Fitch tem regras organizadas em pares: uma **regra de introdução** (como criar uma fórmula com um dado conectivo) e uma **regra de eliminação** (como usar uma fórmula que já tem aquele conectivo). Veja cada uma:",
      "###Regras da Implicação (⇒)",
      "**Introdução da Implicação — ⇒I** (incorpora o Teorema da Dedução). Se dentro de uma subprova com hipótese φ você conseguiu derivar ψ, então ao fechar a subprova você gera φ ⇒ ψ no nível externo. *Exemplo:* você abriu uma subprova assumindo *“p”* e dentro dela provou *“q”*. Ao fechar, você tem: p ⇒ q.",
      "**Eliminação da Implicação — ⇒E** (é o Modus Ponens que já conhecemos). Se você tem φ e também tem φ ⇒ ψ, pode concluir ψ. *Exemplo:* você tem *“Está chovendo”* e *“Se chove, a rua molha”*. Logo: *“A rua está molhada”*.",
      "###Regras da Conjunção (∧ — o E lógico)",
      "**Introdução da Conjunção — ∧I.** Se você tem φ e também tem ψ separadamente, pode juntá-las: φ ∧ ψ. *Exemplo:* você provou 'está chovendo' e também provou 'está frio'. Logo: 'está chovendo e está frio'.",
      "**Eliminação da Conjunção — ∧E.** Se você tem φ ∧ ψ, pode extrair φ sozinha ou ψ sozinha. *Exemplo:* você tem 'está chovendo e está frio'. Logo: pode concluir 'está chovendo' ou 'está frio' separadamente.",
      "###Regras da Disjunção (∨ — o OU lógico)",
      "**Introdução da Disjunção — ∨I.** Se você tem φ, pode concluir φ ∨ ψ para qualquer ψ que quiser. *Exemplo:* você tem 'está chovendo'. Logo: pode concluir 'está chovendo OU está nevando' — mesmo sem saber nada sobre neve.",
      "**Eliminação da Disjunção — ∨E.** Se você tem φ ∨ ψ, e prova que φ ⇒ χ e também que ψ ⇒ χ, pode concluir χ. *Exemplo:* 'ou vai chover ou vai ventar'. Se chuva implica levar guarda-chuva, e vento implica levar guarda-chuva, então de qualquer forma você vai levar guarda-chuva.",
      "###Regras da Negação (¬ — o NÃO lógico)",
      "**Introdução da Negação — ¬I.** Se assumir φ como hipótese leva a uma contradição (φ ⇒ ψ e φ ⇒ ¬ψ ao mesmo tempo), então ¬φ é verdadeiro. Intuitivo: se supor que algo é verdade leva a uma impossibilidade, então não pode ser verdade — é falso.",
      "**Eliminação da Negação — ¬E** (dupla negação). Se você tem ¬¬φ (não-não-φ), pode concluir simplesmente φ. *Exemplo:* 'não é verdade que não está chovendo' equivale a 'está chovendo'.",
      "###Regras do Bicondicional (↔ — o SE E SOMENTE SE)",
      "**Introdução do Bicondicional — ↔I.** Se você provou φ ⇒ ψ e também provou ψ ⇒ φ, pode combinar as duas em φ ↔ ψ.",
      "**Eliminação do Bicondicional — ↔E.** Se você tem φ ↔ ψ, pode separar em φ ⇒ ψ e ψ ⇒ φ para usar separadamente.",
      "###Regras auxiliares: False Introduction e False Elimination",
      "Fitch usa duas regras extras que tornam as provas por contradição mais diretas e legíveis:",
      "**False Introduction — FI** (criar uma contradição explícita). Se você tem φ e ¬φ ao mesmo tempo, pode escrever **false** — uma contradição explícita. Isso é útil quando você quer mostrar que uma hipótese leva a uma situação impossível.",
      "**False Elimination — FE** (usar uma contradição para provar a negação). Se dentro de uma subprova com hipótese φ você chegou a **false**, então ao fechar a subprova você conclui ¬φ no nível externo.",
      "*Nota: essas regras não aumentam o poder do sistema — tudo que se prova com elas poderia ser provado sem elas. Mas tornam as provas por contradição muito mais curtas e claras.*",
      "##Tabela-resumo: todas as regras do Sistema de Fitch",
      "Depois de ver cada regra em detalhes, a Tabela 3.5 apresenta uma visão completa de todas elas — útil como referência rápida na hora de construir provas. Cada linha traz o conectivo envolvido, o nome da regra, o que é preciso ter para aplicá-la, o que se conclui e um exemplo em linguagem natural.",
      "| Conectivo | Regra | O que precisa ter | O que conclui | Exemplo em palavras |\n|---|---|---|---|---|\n| Implicação ⇒ | ⇒E | φ e φ ⇒ ψ | ψ | Está chovendo + chuva molha rua → rua fica molhada |\n| Implicação ⇒ | ⇒I | Subprova [φ … ψ] | φ ⇒ ψ | Suponha chuva, provei rua molhada → chuva ⇒ rua molhada |\n| Conjunção ∧ | ∧I | φ e ψ separadas | φ ∧ ψ | Tenho 'frio' e 'chuva' → posso juntar: 'frio e chuva' |\n| Conjunção ∧ | ∧E | φ ∧ ψ | φ (ou ψ) | Tenho 'frio e chuva' → posso extrair só 'frio' |\n| Disjunção ∨ | ∨I | φ | φ ∨ ψ | Tenho 'chovendo' → posso concluir 'chovendo ou nevando' |\n| Disjunção ∨ | ∨E | φ∨ψ, φ⇒χ, ψ⇒χ | χ | Chuva ou vento; os dois implicam levar guarda-chuva → levo |\n| Negação ¬ | ¬I | Subprova [φ → contradição] | ¬φ | Supor que o sol aparece leva ao absurdo → não é sol |\n| Negação ¬ | ¬E | ¬¬φ | φ | 'Não é verdade que não chove' → 'está chovendo' |\n| Bicondicional ↔ | ↔I | φ⇒ψ e ψ⇒φ | φ ↔ ψ | Provei os dois lados da implicação → uno com ↔I |\n| Bicondicional ↔ | ↔E | φ ↔ ψ | φ⇒ψ e ψ⇒φ | Tenho 'chuva ↔ atraso' → separo nas duas implicações |\n| False | FI | φ e ¬φ ao mesmo tempo | false | Tenho 'chove' e 'não chove' juntos → contradição! |\n| False | FE | Subprova [φ → false] | ¬φ | Supor X e chegar ao absurdo → X é falso (¬X) |\nTabela 3.5 — Resumo das regras de inferência do Sistema de Fitch, organizadas por conectivo lógico.",
      "**Como usar esta tabela:** as regras de Introdução (I) criam novas fórmulas com aquele conectivo. As regras de Eliminação (E) usam fórmulas que já têm aquele conectivo para extrair informação delas. *Dica:* na coluna 'O que precisa ter', as subprovas indicam que é necessário abrir um bloco com hipótese antes de aplicar a regra.",
      "| **📊 Ciência de Dados — Subprovas como análises condicionais** |\n| O conceito de subprova em Fitch — assumir algo temporariamente, trabalhar com essa suposição e depois concluir uma implicação — aparece o tempo todo em análise de dados quando fazemos raciocínio do tipo 'se isso for verdade, então...'. |",
      "A Tabela 3.6 traduz as principais regras de Fitch para situações típicas do trabalho de um analista de dados, mostrando que cada movimento lógico tem um equivalente direto em raciocínios cotidianos sobre dados, modelos e métricas.",
      "| **Regra de Fitch** | **O que significa** | **Equivalente em análise de dados** |\n| ⇒I (Introdução da implicação) | Assumo φ, provo ψ dentro, concluo φ ⇒ ψ | Analista assume 'dados completos' → verifica modelo → conclui 'se dados ok, modelo ok' |\n| ⇒E (Eliminação da implicação) | Tenho φ e tenho φ⇒ψ, logo tenho ψ | Dado cliente com renda alta (φ) + regra 'renda alta ⇒ elegível' → cliente elegível (ψ) |\n| ∧I (Introdução da conjunção) | Tenho φ e ψ separados, junto em φ ∧ ψ | Calculei acurácia (φ) e calculei recall (ψ) → relatório com ambas as métricas (φ ∧ ψ) |\n| ∧E (Eliminação da conjunção) | Tenho φ ∧ ψ, extraio apenas φ (ou apenas ψ) | Relatório com várias métricas → extraio só a acurácia para comparar modelos |\n| ∨E (Eliminação da disjunção) | Seja φ ou ψ, ambos levam a χ, logo tenho χ | Cliente veio do CSV ou do banco de dados → em ambos os casos, aplica-se a mesma análise |\n| ¬I (Introdução da negação) | Assumo φ, chego ao absurdo, logo ¬φ é verdadeiro | Suponho que modelo está correto → contradição com dados reais → modelo está errado |\nTabela 3.6 — Correspondência entre as regras de inferência do Sistema de Fitch e situações cotidianas em análise de dados.",
      "| **Exemplo narrado — Regra ⇒I em análise de dados:**<br/><br/>Um analista diz: 'Vou supor que os dados estão completos e sem erros (hipótese φ). Com essa suposição, aplico o modelo e obtenho uma previsão confiável (ψ). Portanto: SE os dados estiverem completos e sem erros, ENTÃO a previsão será confiável (φ ⇒ ψ).'<br/><br/>Isso é exatamente ⇒I: o analista abriu uma 'subprova' mental (a suposição), trabalhou dentro dela, e ao final gerou uma implicação. Não afirmou que os dados são perfeitos — apenas concluiu o que aconteceria SE fossem. |",
    ],
  },

  "cap3-sec6": {
    id: "cap3-sec6",
    title: "Exemplos completos de provas em Fitch",
    subtitle: "Capítulo 3",
    paragraphs: [
      "##Exemplo simples: p implica p (Reflexividade)",
      "Objetivo: provar que qualquer proposição implica ela mesma. Em símbolos: p ⇒ p. Isso parece óbvio, mas vamos provar formalmente.",
      "A estratégia: para provar uma implicação, usamos ⇒I. Então abrimos uma subprova com hipótese p e tentamos derivar p dentro dela. Mas p já é a própria hipótese — não precisamos fazer nada mais! A Tabela 3.7 apresenta a prova completa em uma única linha de subprova.",
      "| Linha | Fórmula | Por quê? (justificativa) |\n|---|---|---|\n| 1 | \│ p | Hipótese (assunção da subprova) |\n| ∴ | p ⇒ p | ⇒I — fechando a subprova da linha 1 a 1 |\nTabela 3.7 — Prova em Fitch da reflexividade da implicação (p ⇒ p).",
      "Simples assim: assumimos p (linha 1) e dentro da subprova já temos p. Ao fechar com ⇒I, geramos p ⇒ p. A prova tem apenas um passo interno.",
      "##Exemplo médio: Transitividade",
      "Objetivo: dado que p implica q, e q implica r, provar que p implica r. Estratégia: para provar p ⇒ r, vamos usar ⇒I — abrimos uma subprova assumindo p e tentamos provar r dentro dela. A Tabela 3.8 apresenta a prova completa, com a subprova destacada pela barra vertical.",
      "| Linha | Fórmula | Por quê? (justificativa) |\n|---|---|---|\n| 1 | p ⇒ q | Premissa |\n| 2 | q ⇒ r | Premissa |\n| 3 | \│ p | Hipótese (vamos assumir p para provar r) |\n| 4 | \│ q | ⇒E nas linhas 1 e 3 (temos p⇒q e temos p) |\n| 5 | \│ r | ⇒E nas linhas 2 e 4 (temos q⇒r e temos q) |\n| ∴ | p ⇒ r | ⇒I — fechando a subprova (linhas 3 a 5) |\nTabela 3.8 — Prova em Fitch da transitividade da implicação a partir das premissas p ⇒ q e q ⇒ r.",
      "Lendo em português: assumimos p (linha 3). Como temos p⇒q (linha 1), concluímos q por Modus Ponens (linha 4). Como temos q⇒r (linha 2), concluímos r (linha 5). Logo, assumir p levou a r — ou seja, p implica r.",
      "##Exemplo com disjunção: o problema das três pessoas",
      "Cenário: Maria, Pat e Quincy estão em uma sala. Sabe-se que:",
      "- Se Pat está na sala (p), então Quincy está na sala (q). → p ⇒ q\n- Se Maria está na sala (m), então Pat ou Quincy está na sala (p ∨ q). → m ⇒ (p ∨ q)",
      "Objetivo: provar que se Maria está na sala, então Quincy está na sala. → m ⇒ q. Estratégia: para provar m ⇒ q, vamos usar ⇒I: abrimos uma subprova assumindo m e tentamos provar q. A Tabela 3.9 apresenta a prova completa, combinando ⇒E e ∨E para tratar a disjunção que aparece como consequência da hipótese.",
      "| Linha | Fórmula | Por quê? (justificativa) |\n|---|---|---|\n| 1 | p ⇒ q | Premissa |\n| 2 | m ⇒ (p ∨ q) | Premissa |\n| 3 | \│ m | Hipótese (assumimos que Maria está na sala) |\n| 4 | \│ p ∨ q | ⇒E nas linhas 2 e 3 (temos m⇒(p∨q) e temos m) |\n| 5 | \│ q ⇒ q | Reflexividade (p ⇒ p para qualquer p; aqui q ⇒ q) |\n| 6 | \│ q | ∨E nas linhas 4, 1 e 5 (p∨q; se p→q; se q→q; logo q) |\n| ∴ | m ⇒ q | ⇒I — fechando a subprova (linhas 3 a 6) |\nTabela 3.9 — Prova em Fitch de m ⇒ q a partir das premissas p ⇒ q e m ⇒ (p ∨ q).",
      "Em português: assumimos que Maria está na sala (linha 3). Pela premissa 2, Pat ou Quincy está lá (linha 4). Se for Pat (p), então pela premissa 1 Quincy está lá. Se já for Quincy (q), está resolvido. Em qualquer caso, Quincy está na sala — logo, Maria implica Quincy.",
      "| **📊 Ciência de Dados — As três provas em situações reais de dados** |\n| Cada prova formal que fizemos tem um paralelo direto em situações de análise de dados. Veja como o raciocínio lógico aparece de forma natural: |",
      "###Prova 6.1 — Reflexividade em dados",
      "A prova de que p ⇒ p — 'qualquer coisa implica ela mesma' — parece trivial na lógica. Em dados, ela representa etapas de passagem ou auditoria: um registro entra, é validado como ele mesmo, e sai sem alteração. A Tabela 3.10 mostra o paralelo passo a passo entre a prova formal e a etapa equivalente no fluxo de dados.",
      "| **Prova lógica** | **Situação em dados** |\n| Linha 1: hipótese p | Analista recebe um conjunto de dados como entrada |\n| Dentro da subprova: p já é verdadeiro | Os dados são verificados — e continuam sendo os mesmos dados |\n| Conclusão: p ⇒ p | Resultado: 'SE os dados entraram, ENTÃO os dados saíram' — etapa de passagem confirmada |\nTabela 3.10 — Paralelo entre a prova formal de p ⇒ p e uma etapa de auditoria de dados.",
      "###Prova 6.2 — Transitividade em dados",
      "A transitividade p ⇒ q ⇒ r, logo p ⇒ r aparece em pipelines de transformação de dados: cada etapa transforma o dado e passa para a próxima. A Tabela 3.11 alinha as etapas de um pipeline típico com as regras de inferência usadas em uma prova transitiva.",
      "| **Etapa do pipeline** | **Lógica (prova)** | **O que acontece com os dados** |\n| Entrada | Hipótese: p | Dados brutos chegam (ex: planilha de clientes) |\n| Transformação 1 | p ⇒ q por ⇒E | Dados são normalizados (ex: renda padronizada) |\n| Transformação 2 | q ⇒ r por ⇒E | Novas variáveis são calculadas (ex: índice renda×score) |\n| Conclusão | ∴ p ⇒ r por ⇒I | Dados brutos ⇒ dados prontos para o modelo (pulando etapas intermediárias) |\nTabela 3.11 — Correspondência entre as etapas de um pipeline de dados e as regras de inferência da transitividade.",
      "###Prova 6.3 — Disjunção em dados (∨E)",
      "A Eliminação da Disjunção (∨E) — 'seja φ ou ψ, ambos levam a χ' — aparece quando temos múltiplas fontes ou critérios que levam à mesma conclusão. A Tabela 3.12 mostra como dois motivos diferentes para negar crédito convergem para a mesma decisão final.",
      "| **Situação** | **Lógica (prova)** | **Resultado em dados** |\n| Cliente inadimplente com score baixo (p) | p ⇒ q (negar crédito) | Crédito negado pelo score |\n| Cliente inadimplente com histórico ruim (ψ) | ψ ⇒ q (negar crédito) | Crédito negado pelo histórico |\n| Cliente inadimplente (p ∨ ψ — um dos dois casos) | ∨E: qualquer caso leva a q | Crédito negado — independente do motivo |\nTabela 3.12 — Aplicação da regra ∨E a uma decisão de crédito com dois critérios alternativos que levam à mesma conclusão.",
      "| **Conclusão geral:**<br/><br/>As três provas mostram que lógica formal e raciocínio sobre dados compartilham a mesma estrutura. A diferença é apenas a linguagem: na lógica usamos φ, ψ e símbolos; em dados usamos nomes de variáveis e condições de negócio. O raciocínio subjacente é o mesmo. |",
    ],
  },

  "cap3-sec7": {
    id: "cap3-sec7",
    title: "Hilbert e Fitch lado a lado",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Os dois sistemas chegam às mesmas conclusões — são equivalentes em poder. Mas funcionam de formas bem diferentes. A Tabela 3.13 apresenta uma comparação direta entre Hilbert e Fitch segundo critérios como uso de axiomas, hipóteses temporárias, facilidade de uso e tamanho típico das provas.",
      "| Aspecto | Sistema de Hilbert | Sistema de Fitch |\n|---|---|---|\n| Precisa de axiomas? | Sim — vários esquemas de axiomas fixos | Não — parte apenas das premissas |\n| Hipóteses temporárias? | Não (usa Teorema da Dedução indiretamente) | Sim — subprovas com assunções |\n| Fácil de usar? | Não — mecânico e contra-intuitivo | Sim — próximo do raciocínio humano |\n| Tamanho das provas | Geralmente muito longo | Geralmente curto |\n| Uso prático | Principalmente teórico | Pedagógico e prático |\n| Correto e completo? | Sim | Sim — prova tudo que Hilbert prova |\nTabela 3.13 — Comparação entre o Sistema de Hilbert e o Sistema de Fitch.",
      "**Conclusão:** o Sistema de Fitch consegue fazer tudo que o Sistema de Hilbert faz — sem precisar de axiomas, com provas geralmente mais curtas e de forma muito mais natural para quem está aprendendo. É por isso que ele é preferido no ensino e na prática.",
    ],
  },

  "cap3-sec8": {
    id: "cap3-sec8",
    title: "Como construir provas na prática",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Construir uma prova exige criatividade e prática. Não existe um algoritmo simples que sempre diga qual passo dar. Mas existem **heurísticas** — dicas que funcionam com frequência e ajudam a não ficar perdido.",
      "A dica mais geral de todas: sempre comece pelo objetivo. A forma da fórmula que você quer provar quase sempre sugere qual regra usar como último passo.",
      "##Quando olhar para o objetivo",
      "- **Se o objetivo é (φ ⇒ ψ):** use ⇒I. Abra uma subprova com hipótese φ e tente derivar ψ.\n- **Se o objetivo é (φ ∧ ψ):** prove φ e ψ separadamente e use ∧I.\n- **Se o objetivo é (φ ∨ ψ):** prove φ ou ψ e use ∨I.\n- **Se o objetivo é (¬φ):** use ¬I ou FE — abra uma subprova com hipótese φ e derive uma contradição.\n- **Se o objetivo é (φ ↔ ψ):** prove φ ⇒ ψ e ψ ⇒ φ separadamente, depois use ↔I.",
      "##Quando olhar para as premissas",
      "- **Se há uma premissa (φ ⇒ ψ) e o objetivo é ψ:** tente provar φ. Se conseguir, aplique ⇒E.\n- **Se há uma premissa (φ ∨ ψ) e o objetivo é χ:** prove (φ ⇒ χ) e (ψ ⇒ χ); aplique ∨E.\n- **Se há uma premissa (φ ∧ ψ):** use ∧E para extrair φ e ψ separadamente.\n- **Se há uma premissa (φ ↔ ψ):** use ↔E para obter as duas implicações.",
      "Com prática, essas dicas se tornam instintivas. No início, vale a pena seguir o checklist: olhe para o objetivo, identifique o conectivo principal, escolha a regra de introdução correspondente, e trabalhe para trás.",
    ],
  },

  "cap3-sec9": {
    id: "cap3-sec9",
    title: "Correção e Completude",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Uma pergunta legítima: como sabemos que esses sistemas de prova são confiáveis? O que garante que eles não nos enganam — seja provando coisas falsas, seja deixando de provar coisas verdadeiras?",
      "Para responder isso, usamos dois conceitos que revisitam o que vimos no capítulo anterior, agora aplicados diretamente aos sistemas:",
      "##Correção — o sistema não mente",
      "Um sistema de prova é **correto** (em inglês: *sound*) se ele nunca prova algo que seja logicamente falso. Em outras palavras: tudo que pode ser derivado pelas regras do sistema é de fato uma consequência lógica das premissas.",
      "| **Correção garante:** se o sistema disse que φ pode ser provado a partir de Δ, então φ é de fato verdadeiro em toda situação onde Δ é verdadeiro. O sistema não fabrica conclusões. |",
      "##Completude — o sistema não perde nada",
      "Um sistema de prova é **completo** se ele consegue provar tudo que é logicamente verdadeiro. Em outras palavras: se algo é uma consequência lógica das premissas, o sistema consegue construir uma prova para isso.",
      "| **Completude garante:** se φ é uma consequência lógica das premissas Δ, então existe uma prova de φ a partir de Δ no sistema. Nada de verdadeiro fica de fora. |",
      "##Boa notícia: Fitch e Hilbert são os dois",
      "Para a lógica proposicional — que é o que estudamos neste curso — tanto Hilbert quanto Fitch são ao mesmo tempo **corretos e completos**. Em símbolos: Δ ⊢ φ (é derivável pelo sistema) ⟺ Δ ⊨ φ (é consequência lógica).",
      "Isso significa que os dois lados são equivalentes: algo só pode ser provado se for verdade, e tudo que é verdade pode ser provado. O sistema é totalmente confiável.",
    ],
  },

  "cap3-sec10": {
    id: "cap3-sec10",
    title: "Resumo do Capítulo",
    subtitle: "Capítulo 3",
    paragraphs: [
      "Vimos bastante coisa neste capítulo. Aqui está um mapa do que foi estudado:",
      "| Conceito | O que significa em palavras simples |\n|---|---|\n| Sistema de prova | Um conjunto de regras que define o que pode ser derivado e como registrar cada passo. |\n| Esquema | Uma regra genérica com coringas (φ, ψ…) que vale para qualquer fórmula no lugar dos coringas. |\n| Instância de esquema | O resultado de substituir os coringas por fórmulas concretas. |\n| Subprova (Fitch) | Um bloco interno com uma hipótese temporária; ao fechar, gera uma implicação. |\n| Regra de introdução | Como criar uma fórmula com um dado conectivo (ex: ∧I junta duas fórmulas numa conjunção). |\n| Regra de eliminação | Como usar uma fórmula que já tem aquele conectivo (ex: ∧E extrai partes de uma conjunção). |\n| Sistema de Hilbert | Usa axiomas fixos e só Modus Ponens. Correto e completo, mas difícil de usar. |\n| Sistema de Fitch | Usa subprovas com hipóteses temporárias. Mais natural e intuitivo. Correto e completo. |\n| Correção (soundness) | O sistema não prova coisas falsas — tudo que ele deriva é verdadeiro. |\n| Completude | O sistema não perde nada — toda verdade pode ser provada nele. |",
      "Um sistema de prova é um conjunto de regras que transforma o processo de raciocínio lógico em algo verificável passo a passo. O Sistema de Fitch é o mais prático: você assume hipóteses temporárias, trabalha dentro de subprovas, e ao fechar cada subprova, gera implicações. A estratégia principal é sempre olhar para o objetivo e escolher a regra de introdução correspondente ao conectivo principal.",
      "No próximo capítulo, veremos uma terceira abordagem — **Provas por Refutação (método da Resolução)** — especialmente adequada para computadores. Em vez de provar φ diretamente, assume-se ¬φ e mostra-se que isso leva a uma contradição inevitável.",
    ],
  },

  "cap4": {
    "id": "cap4",
    "title": "Lógica Relacional",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "## Além do verdadeiro e falso — raciocínio sobre objetos, propriedades e relações",
      "Nos capítulos anteriores estudamos a lógica proposicional: aprendemos a representar afirmações simples como p e q, a combiná-las com conectivos (E, OU, NÃO, SE...ENTÃO), a verificar equivalências, e a construir provas formais usando sistemas como Fitch e Hilbert.",
      "Toda essa lógica trabalha com proposições inteiras — afirmações que são simplesmente verdadeiras ou falsas. Mas a lógica proposicional tem uma limitação importante: ela não enxerga o interior das proposições. Para ela, *“Ana tem renda alta”* e *“Bob tem renda alta”* são duas coisas completamente diferentes, sem nenhuma relação entre si.",
      "A **Lógica Relacional** — também chamada de **Lógica de Primeira Ordem** ou **Lógica de Predicados** — vai além. Ela nos permite falar sobre objetos, suas propriedades e as relações entre eles. Com ela, podemos expressar coisas como *“todo cliente com renda alta é elegível”* — uma afirmação que vale para qualquer cliente, não apenas para um específico."
    ]
  },

  "cap4-sec1": {
    "id": "cap4-sec1",
    "title": "Vocabulário: Constantes, Variáveis e Relações",
    "subtitle": "Capítulo 4, Sintaxe da Lógica Relacional",
    "paragraphs": [
      "Para raciocinar sobre objetos, precisamos de um vocabulário mais rico do que o da lógica proposicional. A lógica relacional introduz três tipos de elementos fundamentais: **constantes**, **variáveis** e **relações**.",
      "### 1.1 Constantes — nomes de objetos específicos",
      "Uma **constante** é um nome que se refere a um objeto particular e fixo do mundo. É como um substantivo próprio: sempre aponta para a mesma coisa.",
      "Exemplos de constantes: `ana`, `bob`, `produto_x`, `brasil`, `2024`. Cada um desses nomes representa um objeto específico. Quando usamos `ana` em uma fórmula lógica, estamos sempre falando da mesma pessoa.",
      "### 1.2 Variáveis — coringas que representam qualquer objeto",
      "Uma **variável** não representa um objeto fixo — ela é um *coringa* que pode representar qualquer objeto do domínio. Usamos letras como `x`, `y`, `z` para variáveis.",
      "A diferença é sutil, mas crucial: uma constante sempre se refere ao mesmo objeto; uma variável pode ser substituída por qualquer constante.",
      "| **Constante vs. Variável — a diferença em prática:**<br/><br/>`RendaAlta(ana)` → afirmação sobre a Ana especificamente (constante)<br/>`RendaAlta(x)` → afirmação sobre *“algum x qualquer”* (variável) — quem é x depende do contexto |",
      "### 1.3 Relações (Predicados) — propriedades e conexões",
      "Uma **relação** — também chamada de **predicado** — é uma propriedade ou conexão entre objetos. Ela recebe um ou mais objetos como argumentos e resulta em verdadeiro ou falso.",
      "O número de argumentos que uma relação aceita é chamado de **aridade**:",
      "1. **Aridade 1 (unária)**: descreve uma propriedade de um único objeto. Ex: `Aprovado(ana)` — *“Ana está aprovada”*.\n2. **Aridade 2 (binária)**: descreve uma conexão entre dois objetos. Ex: `MaiorQue(renda_ana, renda_bob)` — *“a renda de Ana é maior que a de Bob”*.\n3. **Aridade n (n-ária)**: conexão entre n objetos. Ex: `Transferiu(ana, bob, 500)` — *“Ana transferiu 500 para Bob”*.",
      "| **📊 Ciência de Dados — Constantes, Variáveis e Relações em dados tabulares** |\n| Uma tabela de banco de dados é uma relação no sentido lógico! Cada coluna é um predicado, cada linha é uma instância, e cada célula é uma constante. A **Tabela 4.1** ilustra a correspondência entre os conceitos lógicos e os elementos de um banco de dados. |",
      "```\n| Conceito lógico | Equivalente em dados | Exemplo |\n| Constante | Valor fixo numa célula | ana, 7000, 'aprovado' |\n| Variável | Nome de coluna (parâmetro) | cliente, renda, status |\n| Relação unária | Coluna booleana ou filtro | Aprovado(x) → coluna 'aprovado = true' |\n| Relação binária | JOIN entre tabelas / comparação | MaiorQue(x, y) → renda_x > renda_y |\n| Relação n-ária | Tabela com n colunas | Transacao(cliente, valor, data, tipo) |\nTabela 4.1 — Correspondência entre conceitos da lógica relacional e elementos de bancos de dados.\n```"
    ]
  },

  "cap4-sec2": {
    "id": "cap4-sec2",
    "title": "Três Tipos de Sentenças",
    "subtitle": "Capítulo 4, Sintaxe da Lógica Relacional",
    "paragraphs": [
      "Na lógica relacional, uma **sentença** é uma afirmação que pode ser verdadeira ou falsa. Existem três tipos fundamentais.",
      "### 2.1 Sentenças atômicas — os tijolos básicos",
      "Uma **sentença atômica** é a forma mais simples possível: uma relação aplicada a objetos específicos (constantes). Ela não pode ser decomposta em partes menores que ainda façam sentido lógico.",
      "| **Forma:** `Relação(arg1, arg2, ...)`<br/><br/>`Aprovado(ana)` → *“Ana está aprovada”*<br/>`MaiorQue(7000, 5000)` → *“7000 é maior que 5000”*<br/>`Amigo(ana, bob)` → *“Ana e Bob são amigos”* |",
      "Note que sentenças atômicas só usam constantes — nenhuma variável. Quando há variáveis, a sentença pode ser verdadeira para alguns objetos e falsa para outros, e precisa de quantificadores (que veremos em breve) para ser completamente interpretada.",
      "### 2.2 Sentenças complexas — combinando com conectivos",
      "Sentenças atômicas podem ser combinadas com os mesmos conectivos da lógica proposicional que já estudamos: ∧ (E), ∨ (OU), ¬ (NÃO), ⇒ (SE...ENTÃO), ↔ (SE E SOMENTE SE).",
      "| **Exemplos de sentenças complexas:**<br/><br/>`Aprovado(ana) ∧ RendaAlta(ana)` → *“Ana está aprovada E tem renda alta”*<br/>`¬Inadimplente(bob) ⇒ Elegivel(bob)` → *“Se Bob não é inadimplente, então é elegível”*<br/>`RendaAlta(x) ∨ ScoreAlto(x)` → *“x tem renda alta OU score alto”* (ainda depende de x) |",
      "### 2.3 Sentenças quantificadas — afirmações sobre conjuntos de objetos",
      "Este é o grande salto da lógica relacional em relação à proposicional. Os **quantificadores** permitem fazer afirmações sobre *todos* os objetos ou sobre a *existência* de pelo menos um objeto — sem precisar listar cada um individualmente.",
      "#### O quantificador universal — ∀ (*“para todo”*)",
      "O símbolo ∀ (lê-se: *“para todo”*) indica que uma afirmação vale para todos os objetos do domínio.",
      "| **Forma:** `∀x Condição(x)`<br/><br/>`∀x (RendaAlta(x) ⇒ Elegivel(x))` → *“Todo cliente com renda alta é elegível”*<br/>`∀x (Cliente(x) ⇒ TemCPF(x))` → *“Todo cliente tem CPF”*<br/><br/>*Lembre-se: o ∀ sozinho não afirma que algo existe. `∀x Voador(x)` diz “tudo que existe é voador” — mas se o domínio for vazio, a sentença é trivialmente verdadeira.* |",
      "#### O quantificador existencial — ∃ (*“existe pelo menos um”*)",
      "O símbolo ∃ (lê-se: *“existe”*) indica que há pelo menos um objeto no domínio que satisfaz a condição.",
      "| **Forma:** `∃x Condição(x)`<br/><br/>`∃x (Cliente(x) ∧ Inadimplente(x))` → *“Existe pelo menos um cliente inadimplente”*<br/>`∃x (Produto(x) ∧ Preco(x, 0))` → *“Existe pelo menos um produto gratuito”* |",
      "#### Combinando quantificadores",
      "Quantificadores podem ser aninhados para expressar afirmações mais sofisticadas. **A ordem importa.** A **Tabela 4.2** apresenta exemplos de sentenças com quantificadores combinados.",
      "```\n| Sentença lógica | Leitura em português | Verdadeiro se... |\n| ∀x ∃y MaiorQue(y, x) | 'Para todo x, existe um y maior que x' | Não existe máximo no domínio |\n| ∃x ∀y MaiorQue(x, y) | 'Existe um x maior que todo y' | Existe um máximo no domínio |\n| ∀x ∀y (Amigo(x,y) ⇒ Amigo(y,x)) | 'Amizade é simétrica' | A relação Amigo é simétrica |\n| ∃x ∃y (Cliente(x) ∧ Cliente(y) ∧ x≠y) | 'Existem pelo menos dois clientes' | O domínio tem ≥ 2 clientes |\nTabela 4.2 — Exemplos de sentenças com quantificadores aninhados e sua leitura em português.\n```",
      "| **📊 Ciência de Dados — Quantificadores como consultas** |\n| Os quantificadores têm equivalentes diretos em consultas de dados. O ∀ corresponde a verificar se uma condição vale para todos os registros; o ∃ corresponde a verificar se há pelo menos um registro que satisfaz a condição. A **Tabela 4.3** apresenta exemplos dessa correspondência. |",
      "```\n| Lógica relacional | Pergunta em dados | Como verificar |\n| ∀x (Cliente(x) ⇒ TemEmail(x)) | 'Todos os clientes têm e-mail?' | Verificar se há algum cliente sem e-mail (zero registros = verdadeiro) |\n| ∃x (Compra(x) ∧ Valor(x) > 10000) | 'Existe alguma compra acima de R$10.000?' | Verificar se o filtro retorna ao menos 1 resultado |\n| ∀x ∀y (Pedido(x,y) ⇒ Cliente(x)) | 'Todo pedido pertence a um cliente válido?' | Checar integridade referencial — nenhum pedido órfão |\n| ∃x ∀y (Score(x) ≥ Score(y)) | 'Existe cliente com maior score de todos?' | Encontrar o máximo da coluna score |\nTabela 4.3 — Correspondência entre quantificadores lógicos e consultas em ciência de dados.\n```"
    ]
  },

  "cap4-sec3": {
    "id": "cap4-sec3",
    "title": "Variáveis Livres e Ligadas",
    "subtitle": "Capítulo 4, Sintaxe da Lógica Relacional",
    "paragraphs": [
      "Quando usamos variáveis em fórmulas lógicas, precisamos distinguir dois estados diferentes: uma variável pode estar **ligada** a um quantificador ou **livre** — sem quantificador nenhum. Essa distinção muda completamente o significado da fórmula.",
      "### 3.1 Variável ligada — controlada por um quantificador",
      "Uma variável é **ligada** quando está dentro do escopo de um quantificador que a captura. O quantificador define o domínio da variável — ela percorre todos os objetos (∀) ou representa um objeto que existe (∃).",
      "| **Exemplo:**<br/><br/>`∀x (RendaAlta(x) ⇒ Elegivel(x))`<br/><br/>Aqui, `x` é **ligada** — ela está sob o controle do ∀x. Não faz sentido perguntar *“qual é o valor de x?”* porque x percorre todos os objetos do domínio. |",
      "### 3.2 Variável livre — sem quantificador",
      "Uma variável é **livre** quando aparece na fórmula sem nenhum quantificador controlando-a. Fórmulas com variáveis livres não são sentenças completas — elas dependem de um valor externo para ter sentido.",
      "| **Exemplo:**<br/><br/>`RendaAlta(x) ⇒ Elegivel(x)`<br/><br/>Aqui, `x` é **livre** — não há ∀ nem ∃ controlando-a. Essa fórmula não é verdadeira nem falsa por si só: ela é como uma função que aguarda um valor para x. Se substituirmos x = ana, vira `RendaAlta(ana) ⇒ Elegivel(ana)`, que pode ser avaliada. |",
      "### 3.3 Escopo do quantificador",
      "O **escopo** de um quantificador é a parte da fórmula que ele controla — geralmente delimitada por parênteses. Uma mesma variável pode ser livre em uma parte da fórmula e ligada em outra. A **Tabela 4.4** ilustra diferentes casos de escopo.",
      "```\n| Fórmula | Status de x | Status de y |\n| ∀x Aprovado(x) | Ligada (por ∀x) | — |\n| Aprovado(x) | Livre | — |\n| ∀x (Aprovado(x) ∧ Elegivel(y)) | Ligada (por ∀x) | Livre |\n| ∀x ∃y MaiorQue(y, x) | Ligada (por ∀x) | Ligada (por ∃y) |\n| ∃y Amigo(x, y) | Livre | Ligada (por ∃y) |\nTabela 4.4 — Exemplos de variáveis livres e ligadas em fórmulas da lógica relacional.\n```",
      "| **⚠️ Por que isso importa?**<br/><br/>Uma **sentença** (afirmação completa) não pode ter variáveis livres. Toda variável deve estar sob o controle de algum quantificador. Se uma fórmula tem variáveis livres, ela é uma **fórmula aberta** — útil como parte de expressões maiores, mas incapaz de ser avaliada como verdadeira ou falsa por si só. |",
      "| **📊 Ciência de Dados — Variáveis livres como parâmetros de função** |\n| Em análise de dados, uma fórmula com variável livre é como uma expressão de filtro com parâmetro:<br/><br/>`RendaAlta(x) ∧ ScoreAlto(x)` → expressão de filtro com parâmetro x<br/><br/>Para avaliá-la, precisamos substituir x por um cliente concreto — assim como uma consulta parametrizada em banco de dados recebe o valor do parâmetro antes de executar. A fórmula sozinha é a receita; a instância concreta é a aplicação da receita. |"
    ]
  },

  "cap4-sec4": {
    "id": "cap4-sec4",
    "title": "Base de Herbrand",
    "subtitle": "Capítulo 4, Semântica",
    "paragraphs": [
      "Quando trabalhamos com lógica relacional, precisamos saber qual é o universo de objetos sobre os quais nossas afirmações se referem. A **Base de Herbrand** é uma forma sistemática de definir esse universo.",
      "### 4.1 O que é a Base de Herbrand?",
      "A **Base de Herbrand** de um conjunto de fórmulas é o conjunto de todas as sentenças atômicas que podem ser formadas com as constantes e relações presentes nessas fórmulas. Ela representa o espaço completo de afirmações básicas possíveis sobre aquele mundo.",
      "| **Exemplo:**<br/><br/>Suponha que temos as constantes `ana` e `bob`, e as relações `Aprovado` e `Amigo` (binária).<br/><br/>**Base de Herbrand:**<br/>`Aprovado(ana)`, `Aprovado(bob)`, `Amigo(ana, ana)`, `Amigo(ana, bob)`, `Amigo(bob, ana)`, `Amigo(bob, bob)`<br/><br/>Esse é o conjunto de todas as afirmações atômicas possíveis. Cada uma pode ser verdadeira ou falsa — a base apenas enumera as possibilidades. |",
      "### 4.2 Para que serve?",
      "A Base de Herbrand define o **espaço de interpretações possíveis** para um conjunto de fórmulas. Cada interpretação é uma atribuição de verdadeiro ou falso para cada elemento da base.",
      "Ela é especialmente útil para:",
      "1. **Verificar se uma fórmula é satisfazível** — existe alguma interpretação que a torna verdadeira?\n2. **Verificar consequência lógica** — uma conclusão é verdadeira em todas as interpretações que satisfazem as premissas?\n3. **Definir o espaço de busca** para provadores automáticos de teoremas.",
      "| **📊 Ciência de Dados — A Base de Herbrand como esquema de dados** |\n| A Base de Herbrand é análoga ao **esquema de um banco de dados**: ela define todas as afirmações possíveis sobre o domínio, assim como um esquema define todas as colunas e tabelas possíveis. Os dados concretos (linhas da tabela) correspondem às afirmações que são verdadeiras na interpretação atual.<br/><br/>Por exemplo: se a base contém `Aprovado(ana)`, `Aprovado(bob)`, `Aprovado(carla)`, e os dados dizem que apenas Ana e Carla estão aprovadas, então a interpretação é: `Aprovado(ana)` = V, `Aprovado(bob)` = F, `Aprovado(carla)` = V. |"
    ]
  },

  "cap4-sec5": {
    "id": "cap4-sec5",
    "title": "Atribuições de Verdade",
    "subtitle": "Capítulo 4, Semântica",
    "paragraphs": [
      "Na lógica proposicional, uma interpretação era simplesmente uma atribuição de V ou F para cada variável proposicional. Na lógica relacional, o conceito se expande: uma interpretação precisa definir um **domínio de objetos** e especificar quais relações valem para quais objetos.",
      "### 5.1 Componentes de uma interpretação",
      "Uma interpretação na lógica relacional tem dois componentes:",
      "1. **Domínio (D)**: o conjunto de todos os objetos sobre os quais as fórmulas falam. Ex: o conjunto de todos os clientes de um banco.\n2. **Interpretação das relações**: para cada relação R de aridade n, define-se o conjunto de tuplas de objetos para os quais R é verdadeira. Ex: `Aprovado = {ana, carla, davi}` — a relação Aprovado é verdadeira para esses três objetos.",
      "### 5.2 Satisfação de sentenças",
      "Dizemos que uma interpretação I **satisfaz** uma sentença φ quando φ é verdadeira nessa interpretação. A notação é:",
      "`I ⊨ φ` (*“I satisfaz φ”*)",
      "As regras de satisfação seguem a intuição e estão resumidas na **Tabela 4.5**.",
      "```\n| Tipo de sentença | Quando é satisfeita por I |\n| R(a₁, ..., aₙ) (atômica) | A tupla (a₁,...,aₙ) pertence à extensão de R em I |\n| ¬φ | I não satisfaz φ |\n| φ ∧ ψ | I satisfaz φ E I satisfaz ψ |\n| φ ∨ ψ | I satisfaz φ OU I satisfaz ψ (ou ambos) |\n| φ ⇒ ψ | Se I satisfaz φ, então I satisfaz ψ |\n| ∀x φ(x) | Para todo objeto d em D: I satisfaz φ(x) com x = d |\n| ∃x φ(x) | Existe pelo menos um objeto d em D: I satisfaz φ(x) com x = d |\nTabela 4.5 — Regras de satisfação para cada tipo de sentença na lógica relacional.\n```",
      "### 5.3 Exemplo completo",
      "**Domínio:** `{ana, bob, carla}`<br/>**Aprovado** = `{ana, carla}` (ana e carla estão aprovadas; bob não)<br/>**RendaAlta** = `{ana, bob}` (ana e bob têm renda alta; carla não)",
      "Avaliando `∀x (RendaAlta(x) ⇒ Aprovado(x))`:",
      "1. **x = ana**: RendaAlta(ana) = V, Aprovado(ana) = V → V ⇒ V = **V**\n2. **x = bob**: RendaAlta(bob) = V, Aprovado(bob) = F → V ⇒ F = **F** ← a sentença é FALSA nesta interpretação\n3. **x = carla**: RendaAlta(carla) = F → F ⇒ qualquer = **V**",
      "Como há pelo menos um objeto (bob) para o qual a implicação é falsa, a sentença universal é **falsa** nesta interpretação."
    ]
  },

  "cap4-sec6": {
    "id": "cap4-sec6",
    "title": "Propriedades Lógicas de Sentenças",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "As propriedades que estudamos na lógica proposicional — **validade**, **satisfazibilidade**, **contradição** — continuam existindo na lógica relacional, com definições análogas mas aplicadas ao espaço mais rico de interpretações.",
      "### 6.1 Sentença válida — verdadeira em toda interpretação",
      "Uma sentença é **válida** (tautologia) se é verdadeira em qualquer interpretação possível — independente de quais objetos existem e de como as relações são definidas.",
      "**Exemplo:** `∀x (P(x) ⇒ P(x))` → *“todo objeto que é P, é P”* — trivialmente verdadeira em qualquer mundo.",
      "### 6.2 Sentença satisfazível — verdadeira em alguma interpretação",
      "Uma sentença é **satisfazível** se existe pelo menos uma interpretação que a torna verdadeira. Toda sentença válida é satisfazível, mas nem toda satisfazível é válida.",
      "**Exemplo:** `∃x RendaAlta(x)` → *“Existe alguém com renda alta”*. Essa sentença é satisfazível: ela é verdadeira se o domínio contiver ao menos um objeto com renda alta. Mas não é válida: se o domínio só contiver pessoas com renda baixa, ela seria falsa.",
      "### 6.3 Sentença insatisfazível — contradição",
      "Uma sentença é **insatisfazível** (contradição) se não existe nenhuma interpretação que a torne verdadeira — ela é falsa em qualquer mundo possível.",
      "**Exemplo:** `∃x (Aprovado(x) ∧ ¬Aprovado(x))` → *“Existe algo que está e não está aprovado ao mesmo tempo”*. Isso nunca pode ser verdade — é uma contradição direta.",
      "Essas três propriedades aparecem diretamente na validação de dados e regras de negócio, conforme a **Tabela 4.6**.",
      "```\n| Propriedade | Em lógica | Em dados — o que verificar |\n| Válida (tautologia) | Verdadeira em toda interpretação | Regra de negócio que sempre vale — ex: 'todo pedido tem data' → integridade estrutural |\n| Satisfazível | Verdadeira em alguma interpretação | Regra que pode ser satisfeita — ex: 'existe cliente inadimplente' → verificar se há registros |\n| Insatisfazível | Falsa em toda interpretação | Regra contraditória — ex: 'cliente ativo E inativo ao mesmo tempo' → detectar inconsistência nos dados |\nTabela 4.6 — Propriedades lógicas de sentenças e sua aplicação na validação de dados.\n```"
    ]
  },

  "cap4-sec7": {
    "id": "cap4-sec7",
    "title": "Relações Lógicas entre Sentenças",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Assim como na lógica proposicional, podemos comparar sentenças entre si. As relações mais importantes são a **equivalência lógica** e a **consequência lógica** — que já conhecemos, mas agora operam no espaço mais rico da lógica relacional.",
      "### 7.1 Equivalência lógica — mesmas condições, mesma verdade",
      "Duas sentenças são **logicamente equivalentes** se são verdadeiras exatamente nas mesmas interpretações. A notação é `φ ≡ ψ`.",
      "Algumas equivalências importantes envolvendo quantificadores estão listadas na **Tabela 4.7**.",
      "```\n| Sentença original | Equivalente | Nome / intuição |\n| ¬∀x P(x) | ∃x ¬P(x) | Negar 'todos' = 'existe algum que não' |\n| ¬∃x P(x) | ∀x ¬P(x) | Negar 'existe' = 'nenhum satisfaz' |\n| ∀x (P(x) ∧ Q(x)) | ∀x P(x) ∧ ∀x Q(x) | Universal distribui sobre conjunção |\n| ∃x (P(x) ∨ Q(x)) | ∃x P(x) ∨ ∃x Q(x) | Existencial distribui sobre disjunção |\nTabela 4.7 — Equivalências lógicas envolvendo quantificadores universais e existenciais.\n```",
      "### 7.2 Consequência lógica — o que segue necessariamente",
      "Uma sentença φ é **consequência lógica** de um conjunto de premissas Δ — escrevemos `Δ ⊨ φ` — se toda interpretação que satisfaz todas as premissas de Δ também satisfaz φ. Já conhecemos esse conceito; agora ele opera sobre interpretações da lógica relacional.",
      "| **Exemplo:**<br/><br/>**Premissa 1:** `∀x (RendaAlta(x) ⇒ Elegivel(x))` → *“Todo cliente com renda alta é elegível”*<br/>**Premissa 2:** `RendaAlta(ana)` → *“Ana tem renda alta”*<br/>**Conclusão:** `Elegivel(ana)` → *“Ana é elegível”*<br/><br/>Essa conclusão é consequência lógica das premissas: em toda interpretação onde as duas premissas são verdadeiras, a conclusão também é. Reconhece o padrão? É o **Modus Ponens** — agora com quantificadores. |",
      "### 7.3 Inferência na lógica relacional",
      "Assim como na lógica proposicional (Capítulo 2), também podemos realizar inferências na lógica relacional. A diferença é que agora as premissas podem envolver quantificadores e relações entre objetos — o que torna as regras muito mais expressivas.",
      "O exemplo abaixo mostra o padrão mais comum: aplicar uma **regra geral a um caso específico**.",
      "**Premissa 1 (regra geral):** `∀x (RendaAlta(x) ⇒ Elegivel(x))`<br/>**Premissa 2 (caso específico):** `RendaAlta(ana)`<br/>**Conclusão:** `Elegivel(ana)`",
      "Esse padrão é uma generalização do Modus Ponens: a regra universal fornece uma implicação válida para qualquer objeto; ao instanciar x = ana, obtemos uma implicação concreta e aplicamos eliminação da implicação (⇒E) normalmente.",
      "**Conexão com o Capítulo 3:** as regras do Sistema de Fitch — em especial ⇒E — continuam se aplicando. A novidade é que o antecedente agora pode conter quantificadores.",
      "Os quantificadores ∀ e ∃ têm também uma leitura computacional direta. O código abaixo mostra como verificar sentenças quantificadas sobre uma lista de clientes em Python — cada linha é a tradução literal de uma fórmula lógica:",
      "```python\nclientes = ['ana', 'bob', 'carla']\nrenda_alta = lambda c: c in {'ana', 'bob'}\nelegivel  = lambda c: c in {'ana', 'carla'}\n\n# ∃x RendaAlta(x)\nany(renda_alta(c) for c in clientes)        # True\n\n# ∀x (RendaAlta(x) ⇒ Elegivel(x))\nall((not renda_alta(c)) or elegivel(c)\n    for c in clientes)                       # False (Bob viola)\n\n# Modus Ponens instanciado para Ana\nif renda_alta('ana'):\n    print('Elegivel(ana)')\n```",
      "**Lendo o código como lógica:** `any(...)` implementa ∃ — verdadeiro se ao menos um elemento satisfaz a condição. `all(...)` implementa ∀ — verdadeiro somente se todos os elementos satisfazem a condição. O bloco `if renda_alta('ana')` é o Modus Ponens: verificamos a premissa concreta e, se verdadeira, concluímos `Elegivel(ana)`."
    ]
  },

  "cap4-sec8": {
    "id": "cap4-sec8",
    "title": "Formalizando Cenários de Dados",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Uma das aplicações mais diretas da lógica relacional é a **formalização de cenários do mundo real** — transformar descrições em linguagem natural em fórmulas precisas e verificáveis. Isso é especialmente valioso em ciência de dados para definir regras de negócio, validações e consultas.",
      "### 8.1 Do texto à fórmula — o processo de formalização",
      "Formalizar um cenário envolve três etapas:",
      "1. **Identificar o domínio:** quais objetos existem? Clientes, produtos, transações...\n2. **Definir as relações:** quais propriedades e conexões são relevantes? Aprovado, RendaAlta, Comprou...\n3. **Traduzir as afirmações:** converter cada regra em linguagem natural para uma fórmula com quantificadores e conectivos.",
      "### 8.2 Exemplos de formalização",
      "Considere o cenário de aprovação de crédito de um banco. Em linguagem natural, temos as seguintes regras:",
      "1. *“Todo cliente com renda alta e bom histórico é elegível para crédito.”*\n2. *“Existe pelo menos um cliente inadimplente.”*\n3. *“Nenhum cliente inadimplente é elegível.”*\n4. *“Se um cliente é elegível, então não é inadimplente.”*",
      "Formalizando:",
      "```\n1. ∀x ((RendaAlta(x) ∧ BomHistorico(x)) ⇒ Elegivel(x))\n2. ∃x Inadimplente(x)\n3. ¬∃x (Inadimplente(x) ∧ Elegivel(x))\n4. ∀x (Elegivel(x) ⇒ ¬Inadimplente(x))\n```",
      "Note que as regras 3 e 4 são **logicamente equivalentes** — pelas leis de De Morgan quantificadas: `¬∃x (P(x) ∧ Q(x)) ≡ ∀x (P(x) ⇒ ¬Q(x))`. A escolha entre uma forma ou outra é apenas estilística.",
      "### 8.3 Verificando consistência das regras",
      "Uma vez formalizadas, podemos verificar se o conjunto de regras é **consistente** — ou seja, se existe alguma interpretação que satisfaz todas elas simultaneamente. Se não existir, as regras se contradizem.",
      "**Exemplo de inconsistência:**",
      "```\n1. ∀x (Cliente(x) ⇒ Aprovado(x))   -- 'todo cliente é aprovado'\n2. Cliente(bob)                      -- 'bob é cliente'\n3. ¬Aprovado(bob)                    -- 'bob não é aprovado'\n```",
      "Esse conjunto é **insatisfazível**: as regras 1 e 2 forçam `Aprovado(bob)`, mas a regra 3 afirma o contrário. Detectar esse tipo de contradição é fundamental antes de implementar regras de negócio em sistemas reais."
    ]
  },

  "cap4-sec9": {
    "id": "cap4-sec9",
    "title": "Equivalência e Decidibilidade",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Chegamos a um dos tópicos mais importantes — e mais surpreendentes — da lógica relacional: a questão de **o que é possível verificar automaticamente**.",
      "### 9.1 Equivalência entre sentenças",
      "Duas sentenças da lógica relacional são equivalentes se são verdadeiras nas mesmas interpretações. Para verificar isso, podemos usar as mesmas técnicas que aprendemos nos capítulos anteriores — substituindo equivalências conhecidas — agora incluindo as equivalências dos quantificadores.",
      "### 9.2 O problema da decidibilidade",
      "Na lógica proposicional, qualquer questão lógica é **decidível**: existe sempre um algoritmo que termina com a resposta certa (por exemplo, a tabela-verdade). Mas na lógica relacional, a situação é mais complexa.",
      "| **⚠️ Resultado fundamental de Church e Turing (anos 1930):**<br/><br/>Verificar se uma sentença da lógica de primeira ordem é consequência lógica de um conjunto de premissas é, em geral, **indecidível** — não existe algoritmo que sempre termine com a resposta certa para qualquer sentença. |",
      "**Nota:** mencionamos esse resultado brevemente no Capítulo 3 ao falar sobre os limites do Sistema de Fitch. Aqui entendemos por que: o espaço de interpretações da lógica relacional é infinito (o domínio pode ter qualquer número de objetos), e não há como enumerá-lo completamente em tempo finito.",
      "### 9.3 Semi-decidibilidade — o que ainda é possível",
      "Embora a lógica de primeira ordem seja indecidível em geral, ela é **semi-decidível** para consequência lógica positiva:",
      "1. Se φ é de fato consequência lógica das premissas, um provador automático sempre encontrará a prova em tempo finito.\n2. Se φ não é consequência lógica, o provador pode rodar indefinidamente sem conseguir provar nem refutar.",
      "Sistemas de raciocínio automático — como os usados em IA e bancos de dados — se aproveitam da semi-decidibilidade: para consultas bem comportadas (que terminam), eles funcionam perfeitamente. Para consultas que envolvem raciocínio aberto sobre domínios infinitos, é preciso impor restrições (como limitar a profundidade de inferência) para garantir terminação.",
      "### 9.4 Casos decidíveis — fragmentos úteis",
      "Existem **fragmentos** da lógica de primeira ordem que são decidíveis — ou seja, subconjuntos de fórmulas para os quais existe um algoritmo completo. A **Tabela 4.8** apresenta os principais fragmentos usados na prática.",
      "```\n| Fragmento | Restrição | Uso típico em dados |\n| Lógica proposicional | Sem quantificadores, sem relações | Avaliação de expressões booleanas |\n| Lógica monádica de primeira ordem | Apenas predicados unários (1 argumento) | Consultas sobre propriedades individuais |\n| Datalog | Regras sem funções, domínio finito | Consultas recursivas em bancos de dados |\n| Lógicas de descrição (DL) | Fragmentos controlados | Ontologias, Web Semântica, OWL |\nTabela 4.8 — Fragmentos decidíveis da lógica de primeira ordem e seus usos em ciência de dados.\n```"
    ]
  },

  "cap4-sec10": {
    "id": "cap4-sec10",
    "title": "Resumo do Capítulo",
    "paragraphs": [
      "A **Tabela 4.9** apresenta um mapa completo de todos os conceitos estudados neste capítulo e como cada um se conecta ao restante.",
      "```\n| Conceito | Definição Resumida |\n| Constante | Nome de um objeto específico e fixo (ex: ana, produto_x) |\n| Variável | Coringa que representa qualquer objeto do domínio (ex: x, y) |\n| Relação (predicado) | Propriedade ou conexão entre objetos, com aridade definida |\n| Sentença atômica | Relação aplicada a constantes (ex: Aprovado(ana)) |\n| Sentença complexa | Sentenças combinadas por ∧, ∨, ¬, ⇒, ↔ |\n| Quantificador universal (∀) | 'Para todo x': afirmação vale para todos os objetos |\n| Quantificador existencial (∃) | 'Existe x': afirmação vale para ao menos um objeto |\n| Variável ligada | Sob o controle de um quantificador |\n| Variável livre | Sem quantificador — fórmula aberta |\n| Base de Herbrand | Conjunto de todas as sentenças atômicas possíveis |\n| Interpretação | Domínio + atribuição de verdade para cada relação |\n| Sentença válida | Verdadeira em toda interpretação (tautologia) |\n| Sentença satisfazível | Verdadeira em alguma interpretação |\n| Sentença insatisfazível | Falsa em toda interpretação (contradição) |\n| Consequência lógica (⊨) | Conclusão verdadeira sempre que premissas são |\n| Decidibilidade | Em geral, indecidível; semi-decidível para consequência positiva |\nTabela 4.9 — Resumo dos conceitos centrais do Capítulo 4 — Lógica Relacional.\n```",
      "### A mensagem central deste capítulo",
      "A lógica relacional estende a proposicional em uma direção fundamental: ela nos permite falar sobre **objetos, propriedades e relações** entre eles, usando quantificadores para expressar regras que valem para qualquer objeto (∀) ou para a existência de algum objeto (∃). Isso torna a linguagem muito mais expressiva — e também mais desafiadora de verificar automaticamente.",
      "Em ciência de dados, essa expressividade aparece naturalmente: tabelas são relações, consultas são quantificadores, regras de negócio são implicações universais, e a verificação de integridade é consequência lógica. A lógica relacional é, em essência, a **linguagem formal dos dados estruturados**.",
      "**Próximo capítulo:** *Validação, Modelos e Provas Relacionais* — aprofundamento em interpretações, modelos e o sistema de prova para lógica relacional."
    ]
  },


  cap5: {
    id: "cap5",
    title: "Validação, Modelos e Provas Relacionais",
    subtitle: "Capítulo 5",
    paragraphs: [
      "## Dois eixos da lógica — o que é verdadeiro e o que pode ser provado",
      "No Capítulo 4 aprendemos o vocabulário da lógica relacional: constantes, variáveis, relações, quantificadores ∀ e ∃, variáveis livres e ligadas, e a Base de Herbrand. Aprendemos também o que é uma interpretação — uma *“fotografia do mundo”* que atribui verdadeiro ou falso a cada sentença atômica — e como avaliar se uma sentença é válida, satisfazível ou insatisfazível.",
      "Neste capítulo aprofundamos dois eixos complementares: o **eixo semântico** (verificação por modelos — o que é verdadeiro?) e o **eixo sintático** (provas formais — o que é demonstrável?). Veremos como o **Sistema de Fitch** — que estudamos no Capítulo 3 — se estende para a lógica relacional com quatro novas regras envolvendo quantificadores.",
      "Ao final, conectamos os dois eixos com os teoremas de **correção e completude**, e introduzimos técnicas avançadas usadas em sistemas automáticos de prova."
    ]
  },

  "cap5-sec2": {
    id: "cap5-sec2",
    title: "Consequência Lógica e Verificação por Modelos",
    subtitle: "Capítulo 5, Seção 1",
    paragraphs: [
      "### 1.1 Modelos — interpretações que tornam algo verdadeiro",
      "No Capítulo 4 usamos o termo **interpretação** para designar uma atribuição de verdadeiro ou falso a cada sentença atômica. Neste capítulo introduzimos um termo mais preciso: **modelo**.",
      "| **Definição:**<br/><br/>Uma interpretação `I` é um **modelo** de uma sentença φ — escrevemos `I ⊨ φ` — quando φ é verdadeira nessa interpretação.<br/><br/>Uma interpretação `I` é um **modelo de um conjunto Δ** de sentenças quando `I` satisfaz **todas** as sentenças de Δ simultaneamente. |",
      "A palavra *“modelo”* vem da ideia de que a interpretação **modela** — representa — um estado de coisas no qual as afirmações são verdadeiras. Um banco de dados de clientes, por exemplo, é um modelo: ele representa um estado do mundo (quem existe, quem está aprovado, quem tem renda alta) e podemos verificar se regras lógicas são verdadeiras ou falsas nele.",
      "### 1.2 Consequência lógica revisitada",
      "Com o conceito de modelo em mãos, podemos dar uma definição precisa e definitiva de consequência lógica:",
      "| **Definição formal:**<br/><br/>**Δ ⊨ φ**<br/><br/>Lê-se: *“φ é consequência lógica de Δ”*. Significa: **todo modelo de Δ também é modelo de φ**. Ou seja, não existe nenhuma interpretação que satisfaça todas as premissas de Δ e ao mesmo tempo torne φ falsa. |",
      "Note a diferença entre os dois símbolos que usamos neste curso. A **Tabela 5.1** apresenta essa distinção fundamental.",
      "```\n| Símbolo | Nome | Significado | Eixo |\n| ⊨ | Duplo torniquete | Consequência lógica — relação semântica (sobre modelos) | Semântico |\n| ⊢ | Torniquete simples | Demonstrabilidade — relação sintática (sobre provas) | Sintático |\nTabela 5.1 — Diferença entre consequência lógica (⊨) e demonstrabilidade (⊢).\n```",
      "O grande resultado da lógica — que veremos na seção 3 — é que para a lógica proposicional e relacional (de primeira ordem), esses dois símbolos **coincidem**: tudo que é consequência lógica pode ser provado, e tudo que pode ser provado é consequência lógica.",
      "### 1.3 Verificação por modelos — como funciona na prática",
      "Verificar se `Δ ⊨ φ` por modelos significa **verificar todas as interpretações possíveis**. Para domínios finitos e pequenos, isso é viável. O processo é:",
      "1. Enumerar todas as interpretações possíveis (atribuições de V/F a cada sentença atômica).\n2. Para cada interpretação: verificar se ela é modelo de Δ (satisfaz todas as premissas).\n3. Se for modelo de Δ: verificar se também é modelo de φ (satisfaz a conclusão).\n4. Se toda interpretação que satisfaz Δ também satisfaz φ: então `Δ ⊨ φ`.",
      "| **📊 Ciência de Dados — Verificação por modelos como validação de dados** |\n| Em ciência de dados, *“verificar por modelos”* é o que fazemos quando testamos regras de negócio contra um conjunto de dados. O dataset é um modelo (uma interpretação concreta), e verificamos se as regras são satisfeitas nele. |",
      "```python\nclientes = [\n    {'nome': 'Ana',   'renda_alta': True,  'inadimplente': False, 'elegivel': True },\n    {'nome': 'Bob',   'renda_alta': False, 'inadimplente': True,  'elegivel': False},\n    {'nome': 'Carla', 'renda_alta': True,  'inadimplente': True,  'elegivel': False},\n]\n\n# Regra (premissa Δ): ∀x (RendaAlta(x) ∧ ¬Inadimplente(x) ⇒ Elegivel(x))\n# Conclusão (φ):      ∀x (Elegivel(x) ⇒ RendaAlta(x))\n\n# Verificar Δ ⊨ φ: toda interpretação que satisfaz Δ também satisfaz φ?\ndelta_ok = all(\n    (not c['renda_alta'] or c['inadimplente'] or c['elegivel'])\n    for c in clientes\n)\nphi_ok = all(\n    (not c['elegivel'] or c['renda_alta'])\n    for c in clientes\n)\n\nprint('Δ satisfeito:', delta_ok)   # True\nprint('φ satisfeita:', phi_ok)     # True — consequência lógica confirmada\n```"
    ]
  },

  "cap5-sec3": {
    id: "cap5-sec3",
    title: "Provas, Demonstrabilidade, Correção e Completude",
    subtitle: "Capítulo 5, Seção 2",
    paragraphs: [
      "### 2.1 Demonstrabilidade na lógica relacional",
      "No Capítulo 3 definimos **demonstrabilidade** para a lógica proposicional: φ é demonstrável a partir de Δ (escrevemos `Δ ⊢ φ`) se existe uma **prova formal** — uma sequência de passos justificados por regras de inferência — que parte de Δ e chega a φ.",
      "Na lógica relacional, a definição é a mesma. O que muda são as regras disponíveis: além das regras proposicionais (⇒E, ⇒I, ∧I, ∧E, ∨I, ∨E, ¬I, ¬E), temos **quatro novas regras** para lidar com quantificadores — que estudaremos na próxima seção.",
      "### 2.2 Correção — o sistema não prova falsidades",
      "Um sistema de prova é **correto** (*sound*) se toda sentença que pode ser provada é de fato consequência lógica das premissas. Em símbolos:",
      "> Se `Δ ⊢ φ`, então `Δ ⊨ φ`.",
      "Isso garante que o sistema **nunca nos leva a uma conclusão falsa** a partir de premissas verdadeiras. É a propriedade mínima que qualquer sistema de prova precisa ter para ser confiável.",
      "### 2.3 Completude — o sistema prova tudo que é verdadeiro",
      "Um sistema de prova é **completo** se toda sentença que é consequência lógica das premissas pode ser provada no sistema. Em símbolos:",
      "> Se `Δ ⊨ φ`, então `Δ ⊢ φ`.",
      "Completude garante que **não existe verdade perdida**: se algo é logicamente verdadeiro, o sistema consegue demonstrá-lo.",
      "### 2.4 O grande resultado: correção e completude do Fitch",
      "| **Teorema de Gödel (Completude, 1930):**<br/><br/>Para a lógica de primeira ordem, o Sistema de Fitch é ao mesmo tempo **correto** e **completo**:<br/><br/>**Δ ⊢ φ ⟺ Δ ⊨ φ**<br/><br/>Demonstrabilidade e consequência lógica coincidem exatamente. Tudo que é verdadeiro pode ser provado; tudo que pode ser provado é verdadeiro.<br/><br/>*Atenção: como vimos no Capítulo 4, verificar `Δ ⊨ φ` na lógica de primeira ordem é indecidível — não existe algoritmo que sempre termine. Mas isso não contradiz a completude: existe sempre uma prova, mas encontrá-la pode levar tempo indefinido.* |",
      "A **Tabela 5.2** sintetiza correção, completude e decidibilidade.",
      "```\n| Propriedade | Direção | Significado prático |\n| Correção | ⊢ φ implica ⊨ φ | Se o sistema provou, pode confiar — é verdadeiro |\n| Completude | ⊨ φ implica ⊢ φ | Se é verdadeiro, o sistema consegue provar |\n| Decidibilidade | Algoritmo sempre termina | Lógica proposicional: sim. Primeira ordem: não |\nTabela 5.2 — Correção, completude e decidibilidade — síntese das propriedades dos sistemas de prova.\n```"
    ]
  },

  "cap5-sec4": {
    id: "cap5-sec4",
    title: "O Sistema de Fitch — Regras para Quantificadores",
    subtitle: "Capítulo 5, Seção 3",
    paragraphs: [
      "No Capítulo 3 estudamos as regras do Sistema de Fitch para conectivos proposicionais (⇒, ∧, ∨, ¬, ↔). Para lidar com quantificadores na lógica relacional, precisamos de **quatro regras adicionais** — duas para o universal (∀) e duas para o existencial (∃).",
      "O padrão é o mesmo que já conhecemos: uma **regra de introdução** (como criar uma fórmula com aquele quantificador) e uma **regra de eliminação** (como usar uma fórmula que já tem aquele quantificador).",
      "### 3.1 Eliminação do Universal — ∀E (Instanciação Universal)",
      "Esta é a regra mais usada em provas com lógica relacional. Ela permite pegar uma afirmação geral sobre todos os objetos e aplicá-la a um objeto específico.",
      "| **Regra ∀E — Eliminação do Universal:**<br/><br/>`∀x φ(x) ⊢ φ(c)`<br/><br/>Se temos `∀x φ(x)` (a fórmula vale para todo x), podemos concluir `φ(c)` para qualquer constante `c` do domínio.<br/><br/>**Exemplo:**<br/>`∀x (RendaAlta(x) ⇒ Elegivel(x))` → podemos concluir `RendaAlta(ana) ⇒ Elegivel(ana)`<br/><br/>*Intuição: se uma regra vale para todo mundo, vale para Ana em particular.* |",
      "| **Restrição importante:**<br/><br/>A constante `c` substituída por `x` deve ser uma constante existente no domínio — não pode ser uma variável livre. E a substituição deve ser **consistente**: toda ocorrência de `x` em φ(x) deve ser substituída pela mesma constante `c`. |",
      "### 3.2 Introdução do Universal — ∀I (Generalização Universal)",
      "Esta regra permite concluir uma afirmação universal a partir de uma prova que vale para um **objeto arbitrário** — um objeto sobre o qual não fizemos nenhuma suposição especial.",
      "| **Regra ∀I — Introdução do Universal:**<br/><br/>Se provamos `φ(c)` para uma constante `c` que **não aparece em nenhuma premissa nem hipótese ativa**, podemos concluir `∀x φ(x)`.<br/><br/>**Exemplo:**<br/>Suponha que provamos, sem nenhuma suposição sobre quem é `c`: *“c é elegível”*. Como `c` é completamente arbitrário — não dissemos nada de especial sobre ele — podemos concluir: *“todo objeto é elegível”*.<br/><br/>*A lógica do argumento: se a prova funciona para um objeto qualquer, sem usar nada de particular sobre ele, então funciona para qualquer objeto.* |",
      "| **Restrição crítica — a mais importante desta seção:**<br/><br/>A constante `c` usada na prova **não pode aparecer em nenhuma premissa nem em nenhuma hipótese aberta**. Se `c` tiver sido mencionada antes (*“Ana tem renda alta”*), a prova não vale para todos os objetos — vale apenas para Ana.<br/><br/>**Erro clássico:** provar algo sobre *“ana”* e concluir `∀x φ(x)`. Isso só seria válido se *“ana”* fosse um objeto completamente arbitrário — o que normalmente não é. |",
      "### 3.3 Eliminação do Existencial — ∃E (Instanciação Existencial)",
      "Se sabemos que existe pelo menos um objeto com certa propriedade, podemos dar um nome a esse objeto e trabalhar com ele — desde que **não assumamos mais nada sobre ele** além do que a existência nos garante.",
      "| **Regra ∃E — Eliminação do Existencial:**<br/><br/>Se temos `∃x φ(x)` e, a partir de `φ(c)` (para alguma constante nova `c`), conseguimos provar ψ (sem `c` aparecer em ψ), então podemos concluir ψ.<br/><br/>**Exemplo:**<br/>`∃x Inadimplente(x)` → introduzimos `c`: *“seja c o objeto inadimplente que sabemos existir”*.<br/>Se a partir de `Inadimplente(c)` provamos ψ sem mencionar `c`, então ψ vale independente de quem é `c`.<br/><br/>*Intuição: é como dizer “existe alguém inadimplente, vou chamá-lo de c. Se a partir de c (sem saber mais nada sobre quem é) consigo provar alguma conclusão, essa conclusão vale de forma geral.”* |",
      "### 3.4 Introdução do Existencial — ∃I (Generalização Existencial)",
      "Esta é a regra mais simples das quatro. Se provamos que um objeto específico tem certa propriedade, podemos concluir que **existe pelo menos um** objeto com essa propriedade.",
      "| **Regra ∃I — Introdução do Existencial:**<br/><br/>`φ(c) ⊢ ∃x φ(x)`<br/><br/>Se temos `φ(c)` para alguma constante `c`, podemos concluir `∃x φ(x)`.<br/><br/>**Exemplo:**<br/>`RendaAlta(ana)` → podemos concluir `∃x RendaAlta(x)`.<br/><br/>*Intuição: se Ana tem renda alta, então existe (pelo menos) alguém com renda alta.* |",
      "### 3.5 Tabela-resumo das quatro regras para quantificadores",
      "A **Tabela 5.3** reúne as quatro novas regras do Fitch para lógica relacional, complementando as regras proposicionais já estudadas no Capítulo 3.",
      "```\n| Regra | Nome | O que precisa ter | O que conclui | Restrição |\n| ∀E | Eliminação do Universal (Instanciação Universal) | ∀x φ(x) | φ(c) para qualquer c | c deve ser constante do domínio |\n| ∀I | Introdução do Universal (Generalização Universal) | φ(c) para c arbitrário | ∀x φ(x) | c não pode estar em premissas ou hipóteses abertas |\n| ∃E | Eliminação do Existencial (Instanciação Existencial) | ∃x φ(x) e φ(c) ⊢ ψ | ψ | c deve ser nova; não pode aparecer em ψ |\n| ∃I | Introdução do Existencial (Generalização Existencial) | φ(c) para alguma c | ∃x φ(x) | Nenhuma |\nTabela 5.3 — As quatro regras de inferência para quantificadores no Sistema de Fitch.\n```"
    ]
  },

  "cap5-sec5": {
    id: "cap5-sec5",
    title: "Quantificador Universal — Provas e Exemplos",
    subtitle: "Capítulo 5, Seção 4",
    paragraphs: [
      "Vamos ver como as regras ∀E e ∀I funcionam em provas concretas.",
      "### 4.1 Usando ∀E — aplicando uma regra geral a um caso específico",
      "Este é o padrão mais comum em provas com lógica relacional. Dada uma regra universal, instanciamos para um objeto específico e aplicamos o raciocínio já conhecido.",
      "**Objetivo:** dado que todo cliente com renda alta é elegível, e que Ana tem renda alta, provar que Ana é elegível. A **Tabela 5.4** mostra a prova passo a passo.",
      "```\n| Linha | Fórmula | Justificativa |\n| 1 | ∀x (RendaAlta(x) ⇒ Elegivel(x)) | Premissa |\n| 2 | RendaAlta(ana) | Premissa |\n| 3 | RendaAlta(ana) ⇒ Elegivel(ana) | ∀E na linha 1, instanciando x = ana |\n| ∴ | Elegivel(ana) | ⇒E nas linhas 3 e 2 (Modus Ponens) |\nTabela 5.4 — Prova de Elegivel(ana) usando ∀E e Modus Ponens.\n```",
      "Lendo o raciocínio: a regra geral (linha 1) é instanciada para Ana por ∀E (linha 3), gerando uma implicação concreta. Em seguida, Modus Ponens (⇒E) nos dá a conclusão.",
      "### 4.2 Usando ∀I — generalizando a partir de um caso arbitrário",
      "**Objetivo:** provar que todo objeto é igual a si mesmo — `∀x Igual(x, x)`.",
      "**Estratégia:** tomamos uma constante completamente arbitrária `c` (sem nenhuma premissa sobre ela) e mostramos que `Igual(c, c)`. Como `c` é arbitrária, podemos generalizar. A **Tabela 5.5** apresenta a prova.",
      "```\n| Linha | Fórmula | Justificativa |\n| 1 | Igual(c, c) | Axioma da reflexividade da igualdade (vale para qualquer constante) |\n| ∴ | ∀x Igual(x, x) | ∀I na linha 1 — c não aparece em nenhuma premissa ou hipótese |\nTabela 5.5 — Prova de ∀x Igual(x, x) usando ∀I a partir de uma constante arbitrária.\n```",
      "| **📊 Ciência de Dados — ∀E e ∀I em validação de regras** |\n| O padrão **∀E (instanciação)** é o que fazemos quando aplicamos uma regra de negócio a um cliente específico. O padrão **∀I (generalização)** é o que fazemos quando testamos que uma transformação funciona para qualquer registro e então a aplicamos ao dataset inteiro. |",
      "```python\nclientes = [\n    {'nome': 'Ana',   'renda_alta': True,  'inadimplente': False},\n    {'nome': 'Bob',   'renda_alta': True,  'inadimplente': False},\n    {'nome': 'Carla', 'renda_alta': False, 'inadimplente': False},\n]\n\n# ∀E — instanciação: aplicar regra geral a um caso específico\ndef elegivel(c):\n    return c['renda_alta'] and not c['inadimplente']  # regra geral\n\nana = clientes[0]\nprint(elegivel(ana))   # ∀E: instancia a regra para Ana → True\n\n# ∀I — generalização: se a regra vale para c arbitrário, aplica a todos\n# (c não tem premissa especial — a função elegivel vale para qualquer dict)\ntodos_elegiveis = [c for c in clientes if elegivel(c)]\nprint([c['nome'] for c in todos_elegiveis])  # ['Ana', 'Bob']\n# Generalizamos: varremos todo o domínio aplicando a mesma regra\n```"
    ]
  },

  "cap5-sec6": {
    id: "cap5-sec6",
    title: "Quantificador Existencial — Provas e Exemplos",
    subtitle: "Capítulo 5, Seção 5",
    paragraphs: [
      "### 5.1 Usando ∃I — de um caso específico para a existência",
      "**Objetivo:** dado que Ana tem renda alta, provar que existe alguém com renda alta. A **Tabela 5.6** mostra a prova.",
      "```\n| Linha | Fórmula | Justificativa |\n| 1 | RendaAlta(ana) | Premissa |\n| ∴ | ∃x RendaAlta(x) | ∃I na linha 1 — substituímos 'ana' por variável x |\nTabela 5.6 — Prova de ∃x RendaAlta(x) usando ∃I a partir de um caso concreto.\n```",
      "Simples e direto: basta ter uma prova concreta para introduzir a existência.",
      "### 5.2 Usando ∃E — trabalhando com um objeto existente sem saber quem é",
      "**Objetivo:** dado que existe algum cliente inadimplente, e que todo inadimplente tem score baixo, provar que existe alguém com score baixo. A **Tabela 5.7** apresenta a prova completa.",
      "```\n| Linha | Fórmula | Justificativa |\n| 1 | ∃x Inadimplente(x) | Premissa |\n| 2 | ∀x (Inadimplente(x) ⇒ ScoreBaixo(x)) | Premissa |\n| 3 | │ Inadimplente(c) | Hipótese para ∃E — c é nome novo, arbitrário |\n| 4 | │ Inadimplente(c) ⇒ ScoreBaixo(c) | ∀E na linha 2, instanciando x = c |\n| 5 | │ ScoreBaixo(c) | ⇒E nas linhas 4 e 3 (Modus Ponens) |\n| 6 | │ ∃x ScoreBaixo(x) | ∃I na linha 5 — c tem score baixo |\n| ∴ | ∃x ScoreBaixo(x) | ∃E nas linhas 1 e 3–6 — c não aparece na conclusão |\nTabela 5.7 — Prova de ∃x ScoreBaixo(x) combinando ∃E, ∀E, Modus Ponens e ∃I.\n```",
      "Lendo o raciocínio: sabemos que existe um inadimplente (linha 1). Chamamos esse inadimplente de `c` (linha 3 — nome novo). A partir de `c`, aplicamos a regra geral por ∀E (linha 4), deduzimos que `c` tem score baixo por Modus Ponens (linha 5), e introduzimos a existência por ∃I (linha 6). Como a conclusão não menciona `c`, podemos fechar por ∃E.",
      "| **📊 Ciência de Dados — ∃I e ∃E em raciocínio sobre dados** |\n| **∃I** é o que fazemos quando encontramos um exemplo concreto e concluímos *“existe pelo menos um caso”*. **∃E** é o que fazemos quando sabemos que existe algum caso (sem saber qual), nomeamos esse caso e raciocinamos sobre ele — desde que a conclusão final não dependa de quem ele é especificamente. |",
      "```python\nclientes = [\n    {'nome': 'Ana',   'inadimplente': False, 'score_baixo': False},\n    {'nome': 'Bob',   'inadimplente': True,  'score_baixo': True },\n    {'nome': 'Carla', 'inadimplente': False, 'score_baixo': False},\n]\n\n# ∃I — de um caso específico para a existência\nbob = clientes[1]\nexiste_inadimplente = bob['inadimplente']  # ∃I: Bob é inadimplente\nprint('Existe inadimplente:', existe_inadimplente)  # True\n\n# ∃E — encontrar o 'c' (o objeto que satisfaz a condição) e trabalhar com ele\nc = next((cl for cl in clientes if cl['inadimplente']), None)  # 'c' = Bob\nif c:  # ∃E: c existe\n    # Regra geral: ∀x (Inadimplente(x) ⇒ ScoreBaixo(x))\n    score_baixo_de_c = c['inadimplente'] and c['score_baixo']\n    # Conclusão: ∃x ScoreBaixo(x) — c não precisa ser mencionado\n    existe_score_baixo = any(cl['score_baixo'] for cl in clientes)\n    print('Existe score baixo:', existe_score_baixo)  # True\n```"
    ]
  },

  "cap5-sec7": {
    id: "cap5-sec7",
    title: "Provas e Validação na Prática",
    subtitle: "Capítulo 5, Seção 6",
    paragraphs: [
      "Com todas as regras em mãos — as proposicionais do Capítulo 3 mais as quatro novas —, podemos construir provas completas na lógica relacional. Esta seção apresenta exemplos mais elaborados, discute estratégias práticas e introduz técnicas avançadas usadas em sistemas automáticos de prova.",
      "### 6.1 Estratégia geral para provas relacionais",
      "As dicas do Capítulo 3 continuam valendo. A **Tabela 5.8** adiciona as estratégias específicas para quantificadores.",
      "```\n| Objetivo ou premissa | Estratégia recomendada |\n| Objetivo: ∀x φ(x) | Use ∀I: tome c arbitrário (sem premissas sobre ele) e prove φ(c) |\n| Objetivo: ∃x φ(x) | Use ∃I: encontre (ou construa) uma constante c e prove φ(c) |\n| Premissa: ∀x φ(x) | Use ∀E: instancie para a constante que você precisa — aplique imediatamente |\n| Premissa: ∃x φ(x) | Use ∃E: nomeie o objeto com uma constante nova c e trabalhe com φ(c) |\n| Objetivo: ∀x (P(x) ⇒ Q(x)) | Abra subprova com c arbitrário e hipótese P(c); prove Q(c); feche com ⇒I; generalize com ∀I |\n| Travado com ∃x φ(x) | Extraia o objeto com ∃E e veja se as regras universais disponíveis se aplicam a ele |\nTabela 5.8 — Estratégias de prova para sentenças com quantificadores.\n```",
      "### 6.2 Exemplo completo — prova com ∀ e ∃ combinados",
      "**Objetivo:** dado que todo cliente com renda alta tem score alto, e que existe um cliente com renda alta, provar que existe um cliente com score alto. A **Tabela 5.9** apresenta a prova.",
      "```\n| Linha | Fórmula | Justificativa |\n| 1 | ∀x (RendaAlta(x) ⇒ ScoreAlto(x)) | Premissa |\n| 2 | ∃x RendaAlta(x) | Premissa |\n| 3 | │ RendaAlta(c) | Hipótese para ∃E — c é nome novo |\n| 4 | │ RendaAlta(c) ⇒ ScoreAlto(c) | ∀E na linha 1, instanciando x = c |\n| 5 | │ ScoreAlto(c) | ⇒E nas linhas 4 e 3 |\n| 6 | │ ∃x ScoreAlto(x) | ∃I na linha 5 |\n| ∴ | ∃x ScoreAlto(x) | ∃E nas linhas 2 e 3–6 — conclusão não menciona c |\nTabela 5.9 — Prova combinando ∀E, ∃E, Modus Ponens e ∃I.\n```",
      "### 6.3 Exemplo — prova de uma regra universal",
      "**Objetivo:** dado que todo cliente elegível tem score alto e que todo cliente com score alto recebe limite premium, provar que todo cliente elegível recebe limite premium. A **Tabela 5.10** mostra a prova.",
      "```\n| Linha | Fórmula | Justificativa |\n| 1 | ∀x (Elegivel(x) ⇒ ScoreAlto(x)) | Premissa |\n| 2 | ∀x (ScoreAlto(x) ⇒ LimitePremium(x)) | Premissa |\n| 3 | │ Elegivel(c) | Hipótese — c arbitrário |\n| 4 | │ Elegivel(c) ⇒ ScoreAlto(c) | ∀E na linha 1 |\n| 5 | │ ScoreAlto(c) | ⇒E nas linhas 4 e 3 |\n| 6 | │ ScoreAlto(c) ⇒ LimitePremium(c) | ∀E na linha 2 |\n| 7 | │ LimitePremium(c) | ⇒E nas linhas 6 e 5 |\n| 8 | Elegivel(c) ⇒ LimitePremium(c) | ⇒I — fechando subprova (3–7) |\n| ∴ | ∀x (Elegivel(x) ⇒ LimitePremium(x)) | ∀I na linha 8 — c não está em premissas |\nTabela 5.10 — Prova de uma regra universal combinando ∀E, ⇒I e ∀I.\n```",
      "Esta prova combina ∀E (três vezes), ⇒E, ⇒I e ∀I. A estrutura é: tomar `c` arbitrário, provar a implicação para `c` usando subprova, e generalizar. É o padrão canônico para provar afirmações universais condicionais.",
      "### 6.4 Para Saber Mais — Técnicas Avançadas",
      "Esta subseção apresenta três técnicas usadas em sistemas automáticos de prova e em disciplinas avançadas de lógica e IA. Não são cobradas nas provas básicas, mas entender a ideia geral ajuda quem seguirá em computação.",
      "#### Unificação — como o sistema *“casa”* variáveis com constantes",
      "Quando aplicamos ∀E, escolhemos manualmente qual constante substituir por `x`. Sistemas automáticos de prova precisam fazer essa escolha sozinhos. O algoritmo que resolve esse problema chama-se **unificação**.",
      "| **O problema da unificação:**<br/><br/>Dadas duas expressões, como `RendaAlta(x)` e `RendaAlta(ana)`, encontrar uma substituição σ tal que `σ(RendaAlta(x)) = RendaAlta(ana)`. A solução é `σ = {x → ana}`.<br/><br/>Para expressões mais complexas: `Amigo(x, f(y))` e `Amigo(ana, f(bob))` → `σ = {x → ana, y → bob}`.<br/><br/>Unificação é o coração dos provadores automáticos de teoremas, do Prolog e de muitos sistemas de IA baseados em lógica. |",
      "#### Forma Normal Prenex — organizando os quantificadores",
      "Uma fórmula está na **Forma Normal Prenex** quando todos os quantificadores aparecem no início, antes de qualquer conectivo. Qualquer fórmula da lógica de primeira ordem pode ser convertida para essa forma sem perda de significado.",
      "A forma Prenex é usada como etapa preparatória para algoritmos de prova automática, pois facilita o tratamento sistemático dos quantificadores.",
      "#### Skolemização — eliminando o quantificador existencial",
      "**Skolemização** é uma técnica que elimina quantificadores existenciais substituindo-os por constantes ou funções especiais — chamadas **constantes** e **funções de Skolem**.",
      "| **Como funciona:**<br/><br/>A fórmula `∃x P(x)` é substituída por `P(sk)`, onde `sk` é uma nova constante (constante de Skolem) que representa *“o objeto que sabemos existir”*.<br/><br/>Se o existencial está dentro de um universal: `∀x ∃y P(x, y)` vira `∀x P(x, f(x))`, onde `f` é uma função de Skolem que, dado `x`, retorna o `y` que satisfaz `P(x, y)`.<br/><br/>**Para que serve?** Skolemização é usada no **método da Resolução** — um sistema de prova por refutação usado em IA e em provadores automáticos. Ela transforma fórmulas em uma forma que o algoritmo de resolução consegue processar. |",
      "A **Tabela 5.11** sintetiza as três técnicas avançadas.",
      "```\n| Técnica | O que faz | Onde é usada |\n| Unificação | Encontra substituições que tornam duas expressões idênticas | Prolog, provadores automáticos, IA baseada em lógica |\n| Forma Normal Prenex | Move todos os quantificadores para o início da fórmula | Pré-processamento para algoritmos de prova |\n| Skolemização | Elimina ∃ substituindo por constantes/funções de Skolem | Método da Resolução, SAT solvers, IA |\nTabela 5.11 — Técnicas avançadas usadas em sistemas automáticos de prova.\n```"
    ]
  },

  "cap5-sec8": {
    id: "cap5-sec8",
    title: "Resumo do Capítulo",
    subtitle: "Capítulo 5, Seção 7",
    paragraphs: [
      "Neste capítulo, conectamos os dois eixos da lógica relacional: o **semântico** (verificação por modelos — o que é verdadeiro?) e o **sintático** (provas formais — o que é demonstrável?). Vimos que, graças aos teoremas de **correção** e **completude** de Gödel, esses dois eixos coincidem para a lógica de primeira ordem.",
      "Para construir provas relacionais, o Sistema de Fitch ganhou **quatro novas regras**: ∀E e ∀I para o quantificador universal, ∃I e ∃E para o existencial. A restrição mais importante é a de ∀I e ∃E: o objeto usado na prova deve ser **genuinamente arbitrário** — sem premissas especiais sobre ele.",
      "A **Tabela 5.12** apresenta um mapa completo dos conceitos estudados neste capítulo.",
      "```\n| Conceito | O que é | Onde aparece |\n| Modelo | Interpretação que satisfaz um conjunto de sentenças | Base para verificação semântica |\n| Consequência lógica (⊨) | φ é verdadeira em todo modelo de Δ | Verificação por modelos |\n| Demonstrabilidade (⊢) | φ pode ser derivada de Δ por regras formais | Provas sintáticas |\n| Correção | ⊢ implica ⊨ — o sistema não prova falsidades | Confiabilidade do sistema de prova |\n| Completude | ⊨ implica ⊢ — toda verdade pode ser provada | Poder expressivo do sistema |\n| ∀E (Instanciação Universal) | De ∀x φ(x) conclui φ(c) para qualquer c | Aplicar regras gerais a casos específicos |\n| ∀I (Generalização Universal) | De φ(c) arbitrário conclui ∀x φ(x) | Provar regras universais |\n| ∃I (Introdução Existencial) | De φ(c) conclui ∃x φ(x) | Mostrar que algo existe |\n| ∃E (Eliminação Existencial) | De ∃x φ(x) introduz c novo e trabalha com φ(c) | Usar objetos cuja existência foi provada |\n| Unificação | Algoritmo que casa variáveis com constantes | Provadores automáticos, Prolog |\n| Forma Normal Prenex | Quantificadores todos no início da fórmula | Pré-processamento para algoritmos |\n| Skolemização | Elimina ∃ com constantes/funções de Skolem | Resolução, SAT solvers |\nTabela 5.12 — Resumo dos conceitos centrais do Capítulo 5.\n```",
      "Com isso, encerramos a parte de **fundamentos manuais** da lógica relacional. No próximo capítulo, veremos como os computadores fazem essas provas automaticamente, através do **método da Resolução** — uma técnica que combina forma clausal, unificação e refutação para resolver problemas lógicos sem necessidade de guiar cada passo."
    ]
  },

  "cap6": {
    id: "cap6",
    title: "Resolução e Prova por Refutação",
    subtitle: "Capítulo 6",
    paragraphs: [
      "## Como o computador prova por contradição",
      "Nos capítulos anteriores estudamos dois sistemas de prova: Hilbert e Fitch. Ambos exigem que um humano construa a prova passo a passo, escolhendo cada regra com intuição.",
      "No Capítulo 3, o Sistema de Fitch incluía uma estratégia chamada prova por contradição: assumir que a conclusão é falsa e mostrar que isso leva ao absurdo. Essa estratégia funcionava — mas ainda dependia da intuição do estudante para escolher os passos.",
      "A **Resolução** é um sistema de prova que automatiza exatamente esse processo. Ela usa uma única regra simples, aplicada repetidamente por um computador, até encontrar a contradição. Sem intuição. Sem escolha criativa. Só mecânica."
    ]
  },

  "cap6-sec1": {
    id: "cap6-sec1",
    title: "O que é Resolução?",
    subtitle: "Capítulo 6, Uma única regra aplicada mecanicamente",
    paragraphs: [
      "Resolução é um método de prova automática. Em vez de construir a prova diretamente — como fazemos no Fitch —, ela trabalha ao contrário: assume que a conclusão é falsa e tenta derivar uma contradição a partir daí.",
      "Se chegar à contradição, a prova está feita: a conclusão é verdadeira. Se não chegar, a conclusão não se segue das premissas.",
      "| **Ideia central:**<br/><br/>A resolução não constrói a prova diretamente. Ela mostra que negar a conclusão leva a um absurdo.<br/><br/>*Se é impossível que a conclusão seja falsa, então ela é necessariamente verdadeira.* |\n|---|",
      "### Conexão com o Capítulo 3 — Sistema de Fitch",
      "No Fitch, a regra **¬I (Introdução da Negação)** usava exatamente esse raciocínio: assumia φ como hipótese, derivava uma contradição dentro da subprova, e concluía ¬φ.",
      "A Resolução automatiza esse processo inteiro. Em vez de um humano construindo a subprova e escolhendo os passos, um algoritmo aplica uma única regra repetidamente até encontrar a contradição.",
      "*É o mesmo raciocínio — agora executado por uma máquina.*",
      "A Resolução é a base dos principais sistemas automáticos de raciocínio lógico: verificadores de programas, sistemas especialistas, bancos de dados dedutivos e a linguagem de programação Prolog."
    ]
  },

  "cap6-sec2": {
    id: "cap6-sec2",
    title: "Forma Clausal",
    subtitle: "Capítulo 6, Literais, cláusulas e conversão",
    paragraphs: [
      "Para que o algoritmo de Resolução funcione, todas as fórmulas precisam estar em um formato específico: a **forma clausal**. Esse formato simplifica o problema ao máximo — tudo vira listas de alternativas.",
      "### 2.1 Literais e cláusulas",
      "- **Literal:** uma proposição simples (p) ou sua negação (¬p). É a unidade mínima.\n- **Cláusula:** uma lista de literais ligados por OU. Pelo menos um deve ser verdadeiro. Exemplo: `{ ¬p, q }` significa 'ou não-p, ou q'.\n- **Conjunto de cláusulas:** o problema representado como várias cláusulas que precisam ser satisfeitas ao mesmo tempo — ligadas por E.",
      "### 2.2 Como converter uma fórmula para cláusulas",
      "Três transformações cobrem a maioria dos casos. Em problemas mais complexos, outras podem ser necessárias — mas essas três são suficientes para todos os exemplos deste capítulo:",
      "1. **Eliminar ⇒**: trocar `p ⇒ q` por `¬p ∨ q`.\n2. **De Morgan**: empurrar ¬ para dentro — `¬(p ∨ q)` vira `¬p ∧ ¬q`; `¬(p ∧ q)` vira `¬p ∨ ¬q`.\n3. **Separar**: cada parte de uma conjunção vira uma cláusula separada — `A ∧ B` vira `{ A }` e `{ B }`.",
      "A Tabela 6.1 mostra um exemplo completo de conversão, passo a passo.",
      "```\n| Passo | Expressão |\n|---|---|\n| Original | p ⇒ (q ∧ r) |\n| Elimina ⇒ | ¬p ∨ (q ∧ r) |\n| Distribui ∨ sobre ∧ | (¬p ∨ q) ∧ (¬p ∨ r) |\n| Separa em cláusulas | { ¬p, q } e { ¬p, r } |\nTabela 6.1 — Conversão de `p ⇒ (q ∧ r)` para forma clausal.\n```",
      "### 2.3 A cláusula vazia — □",
      "| **A cláusula vazia □ é sempre falsa — é um OU sem termos.**<br/><br/>Quando o algoritmo de Resolução deriva □, ele chegou à contradição. Isso significa que o conjunto de cláusulas é impossível de satisfazer — e a prova por refutação está completa. |\n|---|"
    ]
  },

  "cap6-sec3": {
    id: "cap6-sec3",
    title: "A Regra de Resolução",
    subtitle: "Capítulo 6, Uma única regra para todo o sistema",
    paragraphs: [
      "O sistema inteiro usa apenas uma regra. Ela combina duas cláusulas que têm literais opostos — cancela esses literais e produz uma nova cláusula com o que sobrou das duas.",
      "| **Regra de Resolução:**<br/><br/>Se uma cláusula tem `p` e outra tem `¬p`, cancela-se o par e une-se o restante:<br/><br/>**{ A, p }   +   { ¬p, B }   ⟹   { A, B }**<br/><br/>*p e ¬p se cancelam. O resultado — chamado de resolvente — é a união do que sobrou.* |\n|---|",
      "A Tabela 6.2 mostra a regra em ação em diferentes situações típicas.",
      "```\n| Cláusula 1 | Cláusula 2 | Cancela | Resolvente |\n|---|---|---|---|\n| { p } | { ¬p } | p e ¬p | □ — contradição! |\n| { p, q } | { ¬p } | p e ¬p | { q } |\n| { p, q } | { ¬p, r } | p e ¬p | { q, r } |\n| { ¬p, q } | { p } | p e ¬p | { q } |\nTabela 6.2 — Exemplos da regra de resolução.\n```",
      "**Quando descartar um resolvente:** se o resolvente contém `p` e `¬p` juntos — como `{ p, ¬p }` — ele é sempre verdadeiro e não ajuda a provar nada. Pode ser descartado."
    ]
  },

  "cap6-sec4": {
    id: "cap6-sec4",
    title: "Prova por Refutação",
    subtitle: "Capítulo 6, A estratégia em três passos",
    paragraphs: [
      "### 4.1 A estratégia",
      "A prova por refutação segue sempre três passos:",
      "1. **Negar a conclusão:** se quer provar φ, adicione ¬φ ao conjunto de premissas. Estamos assumindo temporariamente que a conclusão é falsa.\n2. **Converter tudo para cláusulas:** todas as premissas e ¬φ viram cláusulas usando as transformações da seção anterior.\n3. **Resolver até □:** aplique a regra de resolução repetidamente. Se derivar □, chegou à contradição — a conclusão φ é verdadeira.",
      "### Reforçando a conexão com o Capítulo 3",
      "No Sistema de Fitch, a prova por contradição funcionava assim: assumia-se ¬φ como hipótese de subprova, derivava-se *false* dentro dela, e concluía-se φ pela regra ¬E.",
      "A Resolução faz exatamente o mesmo — mas de forma mecânica e automatizável. A 'subprova' vira o conjunto de cláusulas. O *false* vira a cláusula vazia □. E a regra única de resolução substitui todas as escolhas que o estudante faria manualmente.",
      "**Fitch:** prova por contradição feita por humanos. | **Resolução:** prova por contradição feita por máquinas.",
      "### 4.2 Exemplo 1 — Modus Ponens",
      "**Objetivo:** provar `q`, dado `p` e `p ⇒ q`.",
      "**Passo 1** — Negamos `q` e listamos tudo:",
      "- `p` (premissa)\n- `p ⇒ q` (premissa)\n- `¬q` (negação da conclusão — assumimos que q é falso)",
      "**Passo 2** — Convertemos para cláusulas:",
      "- `{ p }` (já é cláusula)\n- `{ ¬p, q }` (`p ⇒ q` vira `¬p ∨ q`)\n- `{ ¬q }` (já é cláusula)",
      "**Passo 3** — Resolução, mostrada na Tabela 6.3.",
      "```\n| Passo | Cláusula 1 | Cláusula 2 | Resolvente |\n|---|---|---|---|\n| 1 | { p } | { ¬p, q } | { q } (cancelamos p e ¬p) |\n| 2 | { q } | { ¬q } | □ — contradição! q é verdadeiro. |\nTabela 6.3 — Modus Ponens por refutação — 2 passos.\n```",
      "**Conclusão:** assumimos que `q` era falso. Em 2 passos chegamos a uma contradição. Logo, `q` não pode ser falso — `q` é verdadeiro.",
      "### 4.3 Exemplo 2 — Três premissas encadeadas",
      "**Objetivo:** provar que Ana está aprovada, dado que renda alta implica elegível, elegível implica aprovado, e Ana tem renda alta.",
      "- Renda alta ⇒ elegível: `{ ¬p, q }`\n- Elegível ⇒ aprovado: `{ ¬q, r }`\n- Ana tem renda alta: `{ p }`\n- Negação da conclusão: `{ ¬r }`",
      "A derivação completa está na Tabela 6.4.",
      "```\n| Passo | Cláusula 1 | Cláusula 2 | Resolvente |\n|---|---|---|---|\n| 1 | { p } | { ¬p, q } | { q } (cancela p e ¬p) |\n| 2 | { q } | { ¬q, r } | { r } (cancela q e ¬q) |\n| 3 | { r } | { ¬r } | □ — Ana está aprovada. |\nTabela 6.4 — Três premissas encadeadas — 3 passos.\n```",
      "### 4.4 Exemplo 3 — Com OU nas premissas",
      "**Objetivo:** provar `r`, dado que (p ou q), (p implica r) e (q implica r).",
      "- p ou q: `{ p, q }`\n- p ⇒ r: `{ ¬p, r }`\n- q ⇒ r: `{ ¬q, r }`\n- Negação: `{ ¬r }`",
      "A Tabela 6.5 mostra como a resolução lida naturalmente com a disjunção.",
      "```\n| Passo | Cláusula 1 | Cláusula 2 | Resolvente |\n|---|---|---|---|\n| 1 | { ¬p, r } | { ¬r } | { ¬p } (cancela r e ¬r) |\n| 2 | { ¬q, r } | { ¬r } | { ¬q } (cancela r e ¬r) |\n| 3 | { p, q } | { ¬p } | { q } (cancela p e ¬p) |\n| 4 | { q } | { ¬q } | □ — r é verdadeiro. |\nTabela 6.5 — Disjunção nas premissas — 4 passos.\n```",
      "**O que esse exemplo mostra:** a Resolução lidou naturalmente com o 'ou' na premissa. Sem nenhuma regra especial — a mesma regra única explorou os dois casos e chegou à contradição."
    ]
  },

  "cap6-sec5": {
    id: "cap6-sec5",
    title: "Resolução com Variáveis",
    subtitle: "Capítulo 6, Estendendo o método para a lógica relacional",
    paragraphs: [
      "Até aqui trabalhamos apenas com proposições simples — p, q, r. Agora estendemos o método para lidar com objetos e variáveis, conectando com o que estudamos nos Capítulos 4 e 5.",
      "### 5.1 O problema",
      "Na lógica relacional, as cláusulas podem conter variáveis. Para cancelar dois literais opostos, eles precisam ser idênticos. A **unificação** encontra a substituição que os iguala.",
      "Para cancelar `RendaAlta(x)` com `RendaAlta(ana)`, aplicamos a substituição `x = ana`.",
      "### 5.2 Dois exemplos de unificação",
      "A Tabela 6.6 mostra como a unificação atua em casos simples.",
      "```\n| Expressão 1 | Expressão 2 | Substituição | Resultado |\n|---|---|---|---|\n| RendaAlta(x) | RendaAlta(ana) | x = ana | RendaAlta(ana) |\n| Amigo(x, y) | Amigo(ana, bob) | x = ana, y = bob | Amigo(ana, bob) |\nTabela 6.6 — Exemplos de unificação.\n```",
      "### 5.3 Exemplo completo",
      "**Objetivo:** provar `Elegivel(ana)` a partir de:",
      "- Regra geral: `∀x (RendaAlta(x) ⇒ Elegivel(x))`\n- Fato concreto: `RendaAlta(ana)`",
      "Cláusulas (após converter e negar a conclusão):",
      "- `{ ¬RendaAlta(x), Elegivel(x) }` (x é variável — vale para qualquer objeto)\n- `{ RendaAlta(ana) }`\n- `{ ¬Elegivel(ana) }` (negação da conclusão)",
      "A derivação completa está na Tabela 6.7, mostrando a unificação em ação.",
      "```\n| Passo | Cláusula 1 | Cláusula 2 | Substituição | Resolvente |\n|---|---|---|---|---|\n| 1 | { ¬RendaAlta(x), Elegivel(x) } | { RendaAlta(ana) } | x = ana | { Elegivel(ana) } |\n| 2 | { Elegivel(ana) } | { ¬Elegivel(ana) } | — | □ — prova completa! |\nTabela 6.7 — Resolução com variáveis: unificação em ação.\n```",
      "**Quando há variáveis:** o processo é o mesmo — mas antes de cancelar os literais opostos, o algoritmo encontra automaticamente a substituição que os iguala. Em implementações reais, existem estratégias para tornar essa busca mais eficiente."
    ]
  },

  "cap6-sec6": {
    id: "cap6-sec6",
    title: "Aplicações em Ciência de Dados",
    subtitle: "Capítulo 6, Da teoria à prática",
    paragraphs: [
      "### 6.1 Verificando consistência de regras de negócio",
      "| **📊 Ciência de Dados — Consistência de regras**<br/><br/>Um conjunto de regras de negócio é consistente se não leva a contradições. A Resolução detecta automaticamente quando regras se contradizem — derivando □.<br/><br/>**Cenário:** duas regras coexistem em um sistema de crédito: (R1) cliente inadimplente não é elegível; (R2) cliente VIP é sempre elegível. Quando aplicadas a um cliente inadimplente e VIP ao mesmo tempo, a Resolução deriva □ — sinal de inconsistência. |\n|---|",
      "### 6.2 Resolução em Python",
      "O código abaixo é uma versão simplificada do algoritmo de refutação por resolução, com fins didáticos. Em sistemas reais, implementações otimizadas são muito mais complexas — mas a lógica central é exatamente essa. Cada cláusula é um conjunto de strings — positivas (`'p'`) ou negadas (`'-p'`):",
      "```python\ndef resolver(c1, c2):\n    \"\"\"Tenta resolver duas cláusulas. Retorna o resolvente ou None.\"\"\"\n    for lit in c1:\n        complemento = lit[1:] if lit.startswith('-') else '-' + lit\n        if complemento in c2:\n            novo = (c1 - {lit}) | (c2 - {complemento})\n            return frozenset(novo)\n    return None\n\ndef refutacao(clausulas):\n    \"\"\"Aplica resolução até derivar a cláusula vazia ou esgotar.\"\"\"\n    clausulas = set(map(frozenset, clausulas))\n    while True:\n        novos = set()\n        pares = [(c1, c2) for c1 in clausulas for c2 in clausulas if c1 != c2]\n        for c1, c2 in pares:\n            res = resolver(c1, c2)\n            if res is None:\n                continue\n            if len(res) == 0:\n                return True   # cláusula vazia: contradição!\n            novos.add(res)\n        if novos.issubset(clausulas):\n            return False      # nenhum progresso: não há prova\n        clausulas |= novos\n\n# Exemplo: provar q a partir de p e (p ⇒ q)\nclausulas = [{'p'}, {'-p', 'q'}, {'-q'}]  # inclui ¬q (negação da conclusão)\nprint(refutacao(clausulas))  # True: q é consequência\n```",
      "### 6.3 Verificação de integridade de dados",
      "| **📊 Ciência de Dados — Regras de negócio com pandas**<br/><br/>Regras de integridade em bancos de dados são, na prática, cláusulas lógicas. O código abaixo verifica automaticamente se registros violam regras de negócio. |\n|---|",
      "```python\nimport pandas as pd\n\nclientes = pd.DataFrame({\n    'nome':         ['Ana',  'Bob',  'Carla', 'Davi'],\n    'inadimplente': [False,  True,   False,   True ],\n    'vip':          [True,   False,  False,   True ],\n    'elegivel':     [True,   False,  False,   False],\n})\n\n# Regra: inadimplente ⇒ ¬elegivel  (cláusula: {¬inadimplente, ¬elegivel})\nviolacoes = clientes[clientes['inadimplente'] & clientes['elegivel']]\nprint(violacoes)\n# Saída: Davi viola a regra — está inadimplente E elegível.\n```",
      "A Resolução é a base dos principais sistemas automáticos de raciocínio: verificadores de programas, sistemas especialistas, bancos de dados dedutivos e a linguagem Prolog. Em todos esses casos, o motor por trás é o mesmo — uma única regra, aplicada repetidamente, até derivar a contradição."
    ]
  },

  "cap6-sec7": {
    id: "cap6-sec7",
    title: "Resumo do Capítulo",
    subtitle: "Capítulo 6, Conceitos centrais",
    paragraphs: [
      "**A Resolução automatiza a prova por contradição** — o mesmo raciocínio que o Fitch usa com ¬I, agora executado mecanicamente por um computador. Uma única regra, aplicada repetidamente, até derivar a contradição (□).",
      "O processo sempre segue três passos: (1) negar a conclusão, (2) converter tudo para cláusulas, (3) resolver até □. A Tabela 6.8 reúne os conceitos centrais do capítulo.",
      "```\n| Conceito | O que é | Para que serve |\n|---|---|---|\n| Resolução | Sistema de prova automático baseado em uma única regra | Provar conclusões sem intervenção humana |\n| Refutação | Assumir ¬conclusão e derivar □ por contradição | Mecanismo central da Resolução |\n| Literal | Proposição simples (p) ou sua negação (¬p) | Bloco mínimo de uma cláusula |\n| Cláusula | Disjunção de literais — pelo menos um deve ser verdadeiro | Formato padrão para a Resolução |\n| Cláusula vazia □ | Disjunção sem literais — sempre falsa | Derivar □ conclui a refutação |\n| Regra de resolução | Cancela literais opostos de duas cláusulas e une o restante | Única regra de inferência do sistema |\n| Unificação | Substituição que iguala duas expressões com variáveis | Extensão da Resolução para lógica relacional |\nTabela 6.8 — Resumo dos conceitos do Capítulo 6.\n```",
      "Esses fundamentos sustentam aplicações modernas em verificação de regras de negócio, validação de integridade de dados e nos sistemas de raciocínio automático que estão por trás de motores de inferência, SAT solvers e linguagens declarativas como Prolog e Datalog."
    ]
  },

  cap7: {
    id: "cap7",
    title: "Raciocínio Não-Clássico",
    subtitle: "Capítulo 7",
    paragraphs: [
      "## Lógica Probabilística · Teorema de Bayes · Redes Bayesianas · Lógica Fuzzy",
      "Imagine que você acorda de manhã e olha pela janela: o céu está nublado. Você pensa: *“pode chover hoje”*. Mas não tem certeza. Você não sabe se vai chover de verdade. Mesmo assim, toma uma decisão: leva o guarda-chuva.",
      "Isso é **raciocínio sob incerteza**, e os humanos fazem isso o tempo todo. O problema é que a lógica clássica que estudamos até aqui não consegue lidar com isso muito bem.",
      "Na lógica clássica, toda proposição é verdadeira (1) ou falsa (0), sem meio-termo. Mas e quando não sabemos? E quando algo é *“provável mas não certo”*? E quando uma frase como *“está quente”* não tem uma fronteira clara?",
      "Este capítulo apresenta duas extensões da lógica clássica criadas exatamente para esses casos: a **lógica probabilística**, que substitui o verdadeiro/falso por um número entre 0 e 1, representando o quanto acreditamos que algo é verdade; e a **lógica fuzzy**, que permite que uma proposição seja parcialmente verdadeira, como *“a água está um pouco quente”*."
    ]
  },

  "cap7-sec1": {
    id: "cap7-sec1",
    title: "A Lógica Não Resolve Tudo, e Tudo Bem",
    subtitle: "Capítulo 7, Quando o mundo não cabe em verdadeiro ou falso",
    paragraphs: [
      "Na lógica clássica, toda proposição é verdadeira (1) ou falsa (0), sem meio-termo. Mas e quando não sabemos? E quando algo é *“provável mas não certo”*? E quando uma frase como *“está quente”* não tem uma fronteira clara?",
      "Este capítulo apresenta duas extensões da lógica clássica criadas exatamente para esses casos:",
      "- A **lógica probabilística**, que substitui o verdadeiro/falso por um número entre 0 e 1, representando o quanto acreditamos que algo é verdade.\n- A **lógica fuzzy**, que permite que uma proposição seja parcialmente verdadeira, como *“a água está um pouco quente”*.",
      "| **Conexão com o que já vimos**<br/><br/>*A lógica clássica é o caso especial em que a probabilidade é exatamente 0 ou exatamente 1. Quando não temos certeza, precisamos de algo mais flexível, mas que ainda siga regras precisas.* |\n|---|"
    ]
  },

  "cap7-sec2": {
    id: "cap7-sec2",
    title: "Probabilidade: o Quanto Você Acredita?",
    subtitle: "Capítulo 7, A ideia central e suas regras",
    paragraphs: [
      "### 2.1 A ideia principal",
      "Em vez de dizer *“isso é verdade”* ou *“isso é mentira”*, a lógica probabilística diz: *“acredito nisso com 70% de confiança”*, ou 80%, ou 30%.",
      "Esse número é chamado de **probabilidade** e sempre fica entre 0 e 1:",
      "- P = 0: impossível, 0% de confiança\n- P = 1: certeza absoluta, 100% de confiança\n- P = 0,7: provável, mas não garantido",
      "Exemplo do dia a dia: um médico olha seus exames e diz *“há 80% de chance de ser algo benigno”*. Ele não sabe com certeza — está usando probabilidade para comunicar seu grau de confiança no diagnóstico.",
      "### 2.2 As três regras que tudo governam",
      "Toda atribuição de probabilidades que faz sentido precisa seguir três regras básicas. São tão simples que parecem óbvias, mas são a fundação de tudo. A Tabela 7.1 as resume.",
      "```\n| Regra | O que diz | Exemplo |\n|---|---|---|\n| Não pode ser negativo | Qualquer probabilidade é ≥ 0 | P(chover) = −0,3 não faz sentido |\n| O total é sempre 1 | A soma de tudo que pode acontecer é 100% | P(chover) + P(não chover) = 1 |\n| Eventos separados somam | Se A e B não acontecem juntos: P(A ou B) = P(A) + P(B) | P(cara ou coroa) = 0,5 + 0,5 = 1 |\nTabela 7.1 — As três regras básicas da probabilidade.\n```",
      "A segunda regra ecoa a lei do terceiro excluído: algo ou é verdade ou é falso. Aqui: ou acontece ou não acontece, e as chances somam 1. A lógica probabilística respeita esse princípio, mas o generaliza para quando ainda não sabemos o resultado.",
      "### 2.3 Probabilidade condicional: aprender com evidências",
      "Imagine que você quer saber a chance de chover. Aí você olha para fora e vê que o céu está nublado. Essa nova informação muda sua estimativa.",
      "Isso se chama **probabilidade condicional**: a probabilidade de algo dado que já sabemos outra coisa.",
      "| **Notação:** **P(A | B)** — lê-se *“probabilidade de A dado B”*.<br/><br/>Exemplo: qual a probabilidade de você pegar guarda-chuva, dado que o céu está nublado? Certamente maior do que sem saber nada sobre o tempo. A evidência *“céu nublado”* atualiza sua crença. |\n|---|",
      "Essa ideia de atualizar crenças com base em evidências é o coração de toda a lógica probabilística — e vai aparecer em todo algoritmo de aprendizado de máquina que você estudar."
    ]
  },

  "cap7-sec3": {
    id: "cap7-sec3",
    title: "Teorema de Bayes",
    subtitle: "Capítulo 7, A lógica da atualização de crenças",
    paragraphs: [
      "### 3.1 O que é e de onde vem",
      "O **Teorema de Bayes** é uma consequência direta das regras da probabilidade. Ele emerge naturalmente quando combinamos a probabilidade condicional com as regras básicas.",
      "Lembra que a lógica clássica tem regras de inferência, como o Modus Ponens? O Teorema de Bayes faz algo parecido, mas para o mundo das probabilidades. Ele é a **regra de inferência da lógica probabilística**.",
      "A pergunta que ele responde é: *“Eu tinha uma crença inicial. Observei uma evidência nova. Como atualizo minha crença de forma racional?”*",
      "| **A fórmula:**<br/><br/>*P(H | E) = P(E | H) × P(H) ÷ P(E)* |\n|---|",
      "Cada pedaço tem um nome e um papel bem definido, conforme a Tabela 7.2.",
      "```\n| Parte da fórmula | Nome | Significa na prática |\n|---|---|---|\n| P(H) | Priori | O que você acreditava ANTES de ver a evidência |\n| P(E | H) | Verossimilhança | Se H fosse verdade, qual a chance de E aparecer? |\n| P(E) | Evidência total | Qual a chance de E aparecer em qualquer cenário? |\n| P(H | E) | Posteriori | O que você passa a acreditar DEPOIS de ver a evidência |\nTabela 7.2 — Os componentes do Teorema de Bayes.\n```",
      "### 3.2 Conexão direta com a lógica",
      "Na lógica clássica, o Modus Ponens parte de premissas certas e chega a uma conclusão certa. O Teorema de Bayes faz o mesmo raciocínio em graus: parte de uma crença inicial e de uma evidência, e calcula o grau de confiança que devo ter depois.",
      "| **Conexão com a lógica**<br/><br/>*Assim como o Modus Ponens é a regra fundamental de inferência na lógica proposicional, o Teorema de Bayes é a regra fundamental na lógica probabilística. Os dois fazem a mesma coisa: dado o que sabemos, o que podemos concluir? A diferença é apenas o tipo de conhecimento: certeza na lógica clássica, graus de confiança na probabilística.* |\n|---|",
      "### 3.3 Um exemplo do começo ao fim",
      "**Situação:** uma doença afeta 1 em cada 100 pessoas. Um teste existe para detectá-la. Se a pessoa está doente, o teste dá positivo em 99% dos casos. Se a pessoa é saudável, o teste dá positivo por engano em 5% dos casos. Você fez o teste e deu positivo. Qual a chance real de você estar doente?",
      "A maioria das pessoas chuta *“99%”*. A resposta real é cerca de **17%**.",
      "Por que tão baixo? Porque a doença é rara. A grande maioria das pessoas que fazem o teste é saudável, e mesmo com 5% de falso positivo, isso gera muitos alarmes falsos. O Teorema de Bayes captura exatamente isso: pondera a evidência contra o que já sabíamos antes.",
      "| **Por que isso importa**<br/><br/>*Sistemas de IA que ignoram a raridade de um evento fazem exatamente esse erro: confundem “o modelo disse X” com “X é verdade”. Bayes nos lembra que a priori sempre precisa ser levada em conta.* |\n|---|",
      "| **📊 Ciência de Dados — Calculando Bayes na prática**<br/><br/>O exemplo do teste médico acima pode ser calculado diretamente em Python. |\n|---|",
      "```python\n# Dados do problema\np_doente = 0.01                     # P(H): 1% da população tem a doença\np_positivo_dado_doente = 0.99       # P(E|H): teste acerta doentes em 99%\np_positivo_dado_saudavel = 0.05     # falso positivo: 5%\n\n# P(E): probabilidade total de testar positivo\np_saudavel = 1 - p_doente\np_positivo = (p_positivo_dado_doente * p_doente +\n              p_positivo_dado_saudavel * p_saudavel)\n\n# P(H|E): probabilidade de estar doente dado positivo\np_doente_dado_positivo = (p_positivo_dado_doente * p_doente) / p_positivo\n\nprint(f'Chance de estar doente dado teste positivo: {p_doente_dado_positivo:.1%}')\n# Saída: Chance de estar doente dado teste positivo: 16.7%\n```",
      "### 3.4 Atualização sequencial: aprender passo a passo",
      "Uma das características mais elegantes do framework bayesiano é que ele permite **aprendizado incremental**. A posteriori de hoje se torna a priori de amanhã.",
      "Exemplo: após um primeiro teste positivo, sua crença na doença sobe de 1% para 17%. Se você fizer um segundo teste independente e ele também der positivo, você usa 17% como nova priori e aplica Bayes novamente — o resultado será próximo de 80%. Dois testes positivos seguidos são muito mais informativos do que um só.",
      "Esse comportamento — atualizar crenças à medida que novas evidências chegam — é exatamente o que acontece no treinamento de modelos de Machine Learning."
    ]
  },

  "cap7-sec4": {
    id: "cap7-sec4",
    title: "Redes Bayesianas",
    subtitle: "Capítulo 7, Quando as causas se encadeiam",
    paragraphs: [
      "### 4.1 O problema",
      "O Teorema de Bayes funciona muito bem quando temos uma hipótese e uma evidência. Mas e quando o mundo é mais complexo? Quando várias causas influenciam vários efeitos ao mesmo tempo?",
      "Exemplo: fumar aumenta a chance de câncer de pulmão. Câncer de pulmão aumenta a chance de tosse. Mas tosse também pode ter outras causas, como uma gripe. E gripe também causa febre. Como modelar todas essas relações ao mesmo tempo?",
      "### 4.2 A ideia de uma rede",
      "Uma **Rede Bayesiana** é um diagrama que representa as relações de causa e efeito entre variáveis, junto com as probabilidades associadas a cada relação. Cada variável é um **nó** no diagrama. As **setas** mostram quem influencia quem.",
      "No exemplo acima, a rede teria:",
      "- Fumar → Câncer de Pulmão (fumar aumenta a chance de câncer)\n- Câncer de Pulmão → Tosse (câncer aumenta a chance de tosse)\n- Gripe → Tosse (gripe também causa tosse)\n- Gripe → Febre (gripe causa febre)",
      "Cada seta carrega uma tabela de probabilidades condicionais: dado que o nó pai tem determinado valor, qual a probabilidade do nó filho?",
      "### 4.3 Para que serve na prática?",
      "Redes Bayesianas permitem dois tipos de raciocínio:",
      "- **Predição (para frente):** dado que alguém é fumante, qual a chance de desenvolver câncer e ter tosse? A rede propaga as probabilidades da causa para os efeitos.\n- **Diagnóstico (para trás):** dado que alguém está com tosse, qual a chance de ser por câncer? A rede *“sobe”* pelas setas para estimar as causas a partir dos sintomas.",
      "| **Conexão com a lógica**<br/><br/>*Redes Bayesianas são a versão probabilística dos sistemas de regras da lógica clássica. Em vez de “SE fumante ENTÃO certamente risco de câncer”, temos “SE fumante ENTÃO com probabilidade P risco de câncer”. A estrutura do raciocínio — encadear causas e efeitos — é a mesma. O que muda é o tratamento da incerteza.* |\n|---|"
    ]
  },

  "cap7-sec5": {
    id: "cap7-sec5",
    title: "Naive Bayes no Machine Learning",
    subtitle: "Capítulo 7, Do teorema ao algoritmo",
    paragraphs: [
      "### 5.1 Da teoria ao algoritmo",
      "O Teorema de Bayes diz como atualizar uma crença quando vemos uma evidência. O **Naive Bayes** é um algoritmo que aplica esse teorema de forma direta e simplificada para classificação de dados.",
      "Ele aparece em filtros de spam, na classificação automática de notícias, na análise de sentimentos em redes sociais e em sistemas de recomendação.",
      "### 5.2 O problema que ele resolve",
      "Exemplo: você recebe um e-mail com as palavras *“promoção”*, *“grátis”* e *“clique aqui”*. Qual a probabilidade de ser spam?",
      "Usando o Teorema de Bayes, queremos calcular P(spam | *“promoção”*, *“grátis”*, *“clique aqui”*). O problema é que precisaríamos saber a probabilidade de um e-mail conter exatamente essa combinação de palavras — com milhares de palavras possíveis, isso é inviável.",
      "### 5.3 A suposição “ingênua”",
      "O Naive Bayes resolve isso tratando cada palavra como **independente** das outras. Com essa suposição, o cálculo se torna:",
      "*P(spam | palavras) ∝ P(spam) × P(“promoção”|spam) × P(“grátis”|spam) × P(“clique aqui”|spam)*",
      "Cada fator pode ser estimado separadamente a partir dos dados de treinamento: basta contar quantas vezes cada palavra aparece em e-mails de spam e em e-mails legítimos.",
      "| **Por que “ingênuo”?**<br/><br/>*Na prática, palavras não são independentes. “Banco” e “senha” juntas são mais suspeitas do que cada uma separada. Mas ignorar essa dependência simplifica muito o cálculo, e mesmo assim o algoritmo funciona bem para classificação de texto.* |\n|---|",
      "### 5.4 Naive Bayes versus Teorema de Bayes",
      "Essa é uma confusão frequente. A Tabela 7.3 esclarece a diferença.",
      "```\n| Aspecto | Teorema de Bayes | Naive Bayes |\n|---|---|---|\n| O que é | Uma fórmula matemática, uma regra lógica de inferência | Um algoritmo de ML baseado nessa fórmula |\n| Para que serve | Atualizar uma crença com base em uma evidência | Classificar exemplos com múltiplas evidências |\n| Sobre as evidências | Nenhuma suposição — usa probabilidade conjunta exata | Assume independência entre as evidências |\n| Quando aparece | Em qualquer raciocínio probabilístico | Classificadores de texto, spam, sentimentos |\n| Exatidão | Exato dentro do modelo probabilístico | Aproximado, mas eficiente e preciso na prática |\nTabela 7.3 — Diferença entre o Teorema de Bayes e o algoritmo Naive Bayes.\n```",
      "| **📊 Ciência de Dados — Naive Bayes para spam**<br/><br/>O esqueleto abaixo mostra a estrutura básica de um classificador Naive Bayes contando palavras por classe. |\n|---|",
      "```python\nfrom collections import defaultdict\n\n# Contar palavras por classe\ncontagem = {'spam': defaultdict(int), 'ham': defaultdict(int)}\ntotais  = {'spam': 0, 'ham': 0}\n\nfor email, classe in dados_treino:\n    for palavra in email.split():\n        contagem[classe][palavra] += 1\n        totais[classe] += 1\n\ndef prob_palavra(palavra, classe):\n    # Suavização de Laplace evita probabilidade zero\n    return (contagem[classe][palavra] + 1) / (totais[classe] + len(vocabulario))\n```"
    ]
  },

  "cap7-sec6": {
    id: "cap7-sec6",
    title: "Lógica Fuzzy",
    subtitle: "Capítulo 7, E quando não há linha clara?",
    paragraphs: [
      "### 6.1 O problema da fronteira",
      "Responda rápido: uma pessoa com 1,75m é alta?",
      "Depende do contexto. Alta para uma mulher brasileira, talvez. Baixa para um jogador de basquete. Mediana para muita gente.",
      "A lógica clássica te obrigaria a escolher: alto = verdadeiro (1) ou alto = falso (0). Mas *“alto”* é uma propriedade gradual, não binária.",
      "A **lógica fuzzy**, criada pelo matemático Lotfi Zadeh em 1965, resolve isso: ela permite que uma proposição seja parcialmente verdadeira. Em vez de 0 ou 1, qualquer valor entre 0 e 1 é válido.",
      "### 6.2 Grau de pertinência",
      "Na lógica fuzzy, em vez de perguntar *“X pertence ao conjunto A?”*, perguntamos: *“em que grau X pertence ao conjunto A?”*",
      "Exemplo — o conjunto *“água quente”*:",
      "- Água a 20°C: grau de pertinência 0,0 (não é quente)\n- Água a 40°C: grau de pertinência 0,4 (um pouco quente)\n- Água a 60°C: grau de pertinência 0,8 (bastante quente)\n- Água a 80°C: grau de pertinência 1,0 (muito quente)",
      "Essa gradação é muito mais fiel à linguagem humana e à realidade.",
      "### 6.3 Como operar com lógica fuzzy",
      "As operações lógicas que já conhecemos (E, OU, NÃO) também existem na lógica fuzzy, adaptadas para valores entre 0 e 1. A Tabela 7.4 mostra a comparação.",
      "```\n| Operação | Na lógica clássica | Na lógica fuzzy | Exemplo |\n|---|---|---|---|\n| E (AND) | Ambos verdadeiros | Pega o menor dos dois graus | 'quente'(0,8) E 'salgada'(0,6): resultado 0,6 |\n| OU (OR) | Pelo menos um verdadeiro | Pega o maior dos dois graus | 'quente'(0,8) OU 'salgada'(0,6): resultado 0,8 |\n| NÃO (NOT) | Inverte verdadeiro/falso | Subtrai de 1 | NÃO 'quente'(0,8): resultado 0,2 |\nTabela 7.4 — Operações lógicas na lógica clássica versus lógica fuzzy.\n```",
      "Se os graus forem 0 ou 1, a lógica fuzzy se comporta exatamente como a lógica clássica. Ela é uma **generalização**, não uma substituição.",
      "### 6.4 Lógica fuzzy em sistemas de controle",
      "A aplicação mais consolidada da lógica fuzzy está em **sistemas de controle** — situações em que uma máquina precisa tomar decisões baseadas em informações imprecisas:",
      "- **Ar-condicionado inteligente:** decide a potência com base em *“a temperatura está um pouco quente”*, não em um limiar rígido de 25°C exatos.\n- **Câmera fotográfica:** ajusta o foco com base em *“a imagem está razoavelmente desfocada”*.\n- **Máquina de lavar roupa:** decide o tempo de lavagem com base em *“a roupa está bastante suja”*.",
      "### 6.5 Lógica fuzzy e linguagem natural",
      "Talvez a aplicação mais rica da lógica fuzzy em IA seja o **Processamento de Linguagem Natural**. Palavras têm fronteiras naturalmente vagas: *“bom”*, *“perto”*, *“rápido”* — tudo depende do contexto.",
      "A lógica fuzzy é especialmente útil em:",
      "- **Análise de sentimentos:** classificar um texto como *“0,7 positivo”* e *“0,3 neutro”*, capturando ambiguidade real.\n- **Recuperação de informação:** interpretar *“restaurantes bons e baratos”* como conceitos graduais, não limiares rígidos.\n- **Tradução automática:** palavras em uma língua frequentemente não têm equivalente exato em outra.",
      "### 6.6 Fuzzy não é probabilidade",
      "É comum confundir as duas ideias. A diferença é sutil, mas importante, conforme a Tabela 7.5.",
      "```\n| Aspecto | Probabilidade | Lógica Fuzzy |\n|---|---|---|\n| Pergunta que responde | Com que frequência isso acontece? | Em que grau isso é verdade agora? |\n| Fonte da incerteza | Não sabemos o resultado ainda | A linguagem é imprecisa por natureza |\n| Exemplo | '30% de chance de chover amanhã' | 'Está 0,7 nublado agora' |\nTabela 7.5 — Diferença entre probabilidade e lógica fuzzy.\n```",
      "| **📊 Ciência de Dados — Fuzzy em análise de sentimentos**<br/><br/>Em vez de classificar um comentário como positivo ou negativo (0 ou 1), podemos usar graus fuzzy para capturar nuances. |\n|---|",
      "```python\ndef sentimento_fuzzy(texto, palavras_pos, palavras_neg):\n    tokens = texto.lower().split()\n    pos = sum(1 for t in tokens if t in palavras_pos)\n    neg = sum(1 for t in tokens if t in palavras_neg)\n    total = max(pos + neg, 1)\n    return {\n        'positivo': pos / total,\n        'negativo': neg / total,\n    }\n\nprint(sentimento_fuzzy('o produto é bom mas a entrega foi ruim',\n                       palavras_pos={'bom', 'ótimo'},\n                       palavras_neg={'ruim', 'péssimo'}))\n# Saída: {'positivo': 0.5, 'negativo': 0.5}\n```"
    ]
  },

  "cap7-sec7": {
    id: "cap7-sec7",
    title: "Resumo do Capítulo",
    subtitle: "Capítulo 7, Conceitos centrais",
    paragraphs: [
      "A lógica clássica funciona bem quando as coisas são certas e precisas. Mas o mundo real é cheio de dúvidas e imprecisões. Este capítulo apresentou quatro formas de lidar com isso:",
      "- A **lógica probabilística** trata a incerteza como um número entre 0 e 1. O **Teorema de Bayes** é a regra de inferência dessa lógica: diz exatamente como atualizar uma crença quando novas evidências aparecem.\n- As **Redes Bayesianas** estendem o Teorema de Bayes para situações com múltiplas variáveis interligadas, permitindo raciocinar sobre causas e efeitos encadeados com incerteza.\n- O **Naive Bayes** aplica o Teorema de Bayes em algoritmos de Machine Learning, com uma simplificação (independência entre evidências) que o torna viável computacionalmente.\n- A **lógica fuzzy** trata a imprecisão da linguagem, permitindo que proposições sejam *“mais ou menos”* verdadeiras. Isso é especialmente valioso no Processamento de Linguagem Natural.",
      "Todas essas abordagens são extensões da lógica clássica. Quando temos certeza absoluta e precisão total, elas se comportam exatamente como a lógica que já conhecemos. A Tabela 7.6 reúne os conceitos centrais.",
      "```\n| Conceito | O que é | Para que serve |\n|---|---|---|\n| Probabilidade | Número entre 0 e 1 que representa grau de crença | Raciocinar sob incerteza |\n| Probabilidade condicional | P(A|B): chance de A dado que B ocorreu | Atualizar crenças com base em evidências |\n| Teorema de Bayes | Regra que combina priori, verossimilhança e evidência | Inferência probabilística racional |\n| Rede Bayesiana | Grafo de variáveis com probabilidades condicionais | Modelar causas e efeitos múltiplos |\n| Naive Bayes | Algoritmo de classificação que assume independência | Classificar texto, spam, sentimentos |\n| Lógica fuzzy | Lógica com valores de verdade entre 0 e 1 | Lidar com fronteiras vagas e linguagem natural |\nTabela 7.6 — Resumo dos conceitos do Capítulo 7.\n```"
    ]
  },

  cap8: {
    id: "cap8",
    title: "Ética e Argumentação",
    subtitle: "Capítulo 8",
    paragraphs: [
      "## Argumentos válidos · Falácias · Viés em IA · Lógica da Argumentação",
      "Vamos começar com uma cena do cotidiano: *“Esse algoritmo de contratação usa dados históricos. Dados históricos são objetivos. Portanto, o algoritmo é justo.”*",
      "Parece razoável? Para muita gente parece. Mas esse argumento tem um problema sério, e a lógica consegue mostrar exatamente onde ele falha.",
      "Este capítulo conecta os fundamentos lógicos a uma habilidade essencial: identificar quando um argumento é válido, quando ele é sólido, e quando ele está usando uma falácia — uma armadilha que parece lógica mas não é.",
      "Isso importa quando você analisa dados, lê um artigo científico, avalia um modelo de IA ou ouve uma justificativa técnica para uma decisão importante."
    ]
  },

  "cap8-sec1": {
    id: "cap8-sec1",
    title: "Lógica não é só matemática",
    subtitle: "Capítulo 8, O fio condutor",
    paragraphs: [
      "Tudo o que veremos neste capítulo parte da mesma pergunta central da lógica: dado o que sabemos, o que podemos concluir com segurança? Quando essa pergunta é mal formulada, surgem os erros de raciocínio que chamamos de falácias.",
      "A lógica, mais do que uma ferramenta matemática, é um instrumento ético: ela nos permite distinguir entre argumentos que merecem nossa confiança e argumentos que apenas se disfarçam de racionais. Em um mundo em que decisões importantes são cada vez mais delegadas a sistemas automatizados, essa distinção se torna parte essencial da responsabilidade técnica."
    ]
  },

  "cap8-sec2": {
    id: "cap8-sec2",
    title: "Argumentos: validade e solidez",
    subtitle: "Capítulo 8, A estrutura básica do raciocínio",
    paragraphs: [
      "### 2.1 O que é um argumento?",
      "No sentido lógico, um argumento não é uma briga. É uma estrutura composta de duas partes:",
      "- **Premissas**: as afirmações que apresentamos como ponto de partida.\n- **Conclusão**: a afirmação que queremos provar a partir das premissas.",
      "Exemplo simples:",
      "- Premissa 1: Todo ser humano é mortal.\n- Premissa 2: Sócrates é um ser humano.\n- Conclusão: Sócrates é mortal.",
      "Esse argumento funciona porque a conclusão segue necessariamente das premissas. Mas nem todo argumento funciona assim tão bem.",
      "### 2.2 Argumento válido",
      "Um argumento é **válido** quando sua estrutura lógica está correta: se as premissas fossem verdadeiras, a conclusão seria obrigatoriamente verdadeira também. A validade é uma propriedade da forma do argumento, não do conteúdo.",
      "Exemplo de argumento válido (mas com premissa falsa):",
      "- Premissa 1: Todo brasileiro fala mandarim.\n- Premissa 2: Renato é brasileiro.\n- Conclusão: Renato fala mandarim.",
      "A estrutura é válida. Se P1 e P2 fossem verdadeiras, a conclusão seguiria sem dúvida. Mas P1 é claramente falsa — o que nos leva ao próximo conceito.",
      "### 2.3 Argumento sólido",
      "Um argumento é **sólido** quando é válido e as premissas são verdadeiras de fato. Só argumentos sólidos merecem nossa confiança. A Tabela 8.1 organiza os tipos.",
      "```\n| Tipo de argumento | Estrutura correta? | Premissas verdadeiras? | Conclusão confiável? |\n|---|---|---|---|\n| Válido e sólido | Sim | Sim | Sim |\n| Válido mas não sólido | Sim | Não | Não |\n| Inválido | Não | Pode ser | Não |\nTabela 8.1 — Tipos de argumento: validade versus solidez.\n```",
      "Um argumento válido com premissas falsas pode chegar a qualquer conclusão, inclusive absurdas. Por isso, na prática, sempre precisamos checar duas coisas separadamente: a estrutura lógica e a verdade das premissas.",
      "### 2.4 Por que isso importa em IA?",
      "Muitos argumentos sobre sistemas de IA são tecnicamente válidos, mas não são sólidos. A conclusão parece seguir, mas uma das premissas é questionável. Voltando ao exemplo do início:",
      "- Premissa 1: Esse algoritmo usa dados históricos. (verdadeira)\n- Premissa 2: Dados históricos são objetivos. (questionável)\n- Conclusão: O algoritmo é justo. (não garantida)",
      "O argumento é válido: se P2 fosse verdadeira, a conclusão seguiria. Mas P2 é discutível: dados históricos registram o passado, inclusive práticas discriminatórias. O problema está na premissa, não na forma."
    ]
  },

  "cap8-sec3": {
    id: "cap8-sec3",
    title: "Falácias formais: erros na estrutura do argumento",
    subtitle: "Capítulo 8, Quando a forma falha",
    paragraphs: [
      "Uma **falácia formal** é um erro na forma do argumento. O argumento parece válido mas não é: a conclusão não segue das premissas, mesmo que você não perceba à primeira vista.",
      "### 3.1 Afirmação do consequente",
      "Esta é uma das falácias mais frequentes em argumentos técnicos. Para entendê-la, precisamos recordar a estrutura do condicional *“Se P, então Q”*.",
      "Forma correta — Modus Ponens:",
      "- Se está chovendo, então a rua está molhada.\n- Está chovendo.\n- Portanto: a rua está molhada. ✓",
      "A falácia — afirmar Q para concluir P:",
      "- Se está chovendo, então a rua está molhada.\n- A rua está molhada.\n- Portanto: está chovendo. ✗",
      "A rua pode estar molhada por um caminhão-pipa, por uma torneira aberta. Ter Q não garante P.",
      "Em sistemas de IA: um modelo aprende que inadimplentes costumam ter renda baixa. Aí o sistema inverte: essa pessoa tem renda baixa, portanto vai ser inadimplente. É a mesma falácia, com consequências reais para a vida de alguém.",
      "### 3.2 Negação do antecedente",
      "A falácia nega o antecedente diretamente para concluir a negação do consequente:",
      "- Se você estudou, então vai bem na prova.\n- Você não estudou.\n- Portanto: não vai bem na prova. ✗",
      "Pode ser que você já dominasse o conteúdo antes. Não estudar não garante o fracasso.",
      "A forma válida seria o **Modus Tollens**:",
      "- Se você estudou, então vai bem na prova.\n- Você não foi bem na prova.\n- Portanto: você não estudou. ✓",
      "O Modus Tollens é a forma válida de raciocinar *“de trás para frente”* num condicional. As duas falácias acima erram exatamente por tentar ir de trás para frente de forma inválida."
    ]
  },

  "cap8-sec4": {
    id: "cap8-sec4",
    title: "Falácias informais: erros no conteúdo do argumento",
    subtitle: "Capítulo 8, Quando o conteúdo falha",
    paragraphs: [
      "As **falácias informais** não são erros de estrutura lógica. A forma do argumento pode até estar correta. O problema está no conteúdo: premissas escondidas, distorcidas, insuficientes, ou que apelam para o emocional em vez do racional.",
      "### 4.1 Generalização indevida",
      "Consiste em tirar uma conclusão geral a partir de um número insuficiente de casos ou de casos que não representam bem o todo.",
      "- Com 3 casos: *“os três últimos candidatos contratados eram homens → o processo favorece homens.”* ✗\n- Com evidência suficiente: *“87% dos contratados em 5 anos eram homens, desproporcional ao mercado.”* ✓",
      "Em ciência de dados, chamamos isso de problema de amostragem: uma amostra pequena ou enviesada leva a generalizações indevidas, e os modelos aprendem os preconceitos das amostras que recebem.",
      "### 4.2 Petição de princípio",
      "Também chamada de argumento circular. Acontece quando a conclusão já está escondida dentro de uma das premissas.",
      "Exemplo: *“Esse modelo é justo porque foi desenvolvido com práticas justas.”* O que são *“práticas justas”*? Se a resposta é *“práticas que produzem modelos justos”*, então a justificativa é circular.",
      "Em IA: *“Nosso algoritmo é objetivo porque usa dados.”* Mas e se os dados refletem décadas de discriminação? A premissa *“dados são objetivos”* é justamente o que precisaria ser provado, não assumido.",
      "### 4.3 Espantalho",
      "Consiste em distorcer o argumento do outro para atacar uma versão mais fraca ou mais extrema do que foi dito.",
      "- Argumento original: *“Devemos auditar os algoritmos usados em decisões de crédito.”*\n- Espantalho: *“Meu oponente quer eliminar a tecnologia das empresas.”* ✗",
      "Auditar não é eliminar. Pedir transparência não é rejeitar a tecnologia.",
      "### 4.4 Apelo à autoridade",
      "Consiste em aceitar algo como verdadeiro simplesmente porque uma pessoa importante disse, sem avaliar as evidências por conta própria.",
      "Exemplo: *“O diretor de tecnologia da empresa disse que o modelo não tem viés. Portanto, não tem.”* Cargo não é evidência.",
      "A Tabela 8.2 resume as principais falácias informais.",
      "```\n| Falácia | Resumo | Sinal de alerta |\n|---|---|---|\n| Generalização indevida | Poucos casos para uma grande conclusão | 'Todo mundo faz assim' com base em 3 exemplos |\n| Petição de princípio | A conclusão está escondida nas premissas | A justificativa usa as mesmas palavras da conclusão |\n| Espantalho | Ataca versão distorcida do argumento | A resposta vai para um extremo que ninguém defendeu |\n| Apelo à autoridade | Cargo substitui evidência | 'Fulano disse, então é verdade' sem outras provas |\nTabela 8.2 — Resumo das principais falácias informais.\n```"
    ]
  },

  "cap8-sec5": {
    id: "cap8-sec5",
    title: "Viés algorítmico: falácias dentro das máquinas",
    subtitle: "Capítulo 8, Quando o argumento técnico esconde o viés",
    paragraphs: [
      "### 5.1 O que é viés algorítmico?",
      "Viés algorítmico acontece quando um sistema de IA trata grupos de pessoas de forma sistematicamente diferente e injustificada. O problema central é que esse viés frequentemente se esconde atrás de argumentos que parecem lógicos e técnicos.",
      "Exemplo real documentado: um sistema de reconhecimento facial apresentava taxas de erro muito maiores na identificação de rostos de mulheres negras do que de homens brancos. A empresa argumentou que o modelo foi *“treinado com dados reais e passou por testes rigorosos”*.",
      "O que estava errado? Os dados de treinamento tinham muito mais fotos de homens brancos. O modelo aprendeu a reconhecer bem o grupo super-representado. Chamar isso de *“objetivo”* é uma generalização indevida.",
      "### 5.2 Dissecando o argumento com lógica",
      "Voltando ao argumento do início do capítulo:",
      "- Premissa 1: Esse algoritmo usa dados históricos. (verdadeira)\n- Premissa 2: Dados históricos são objetivos. (questionável)\n- Conclusão: O algoritmo é justo. (não garantida)",
      "Dados históricos registram o passado, incluindo discriminações passadas. Se no passado mulheres eram sistematicamente preteridas em promoções, os dados vão registrar exatamente isso. Um algoritmo treinado nesses dados vai perpetuar esse padrão.",
      "Chamar dados de *“objetivos”* sem verificar o que eles registram é uma generalização indevida. Concluir *“justo”* a partir de *“usa dados”* é uma petição de princípio: a objetividade dos dados é justamente o que precisaria ser provado, não assumido.",
      "### 5.3 Catálogo de argumentos enganosos sobre IA",
      "A Tabela 8.3 lista os argumentos mais comuns sobre sistemas de IA e as falácias que eles escondem.",
      "```\n| Argumento comum | Falácia presente | O que está errado |\n|---|---|---|\n| 'O modelo acerta 95%, então é confiável para todos' | Generalização indevida | 95% geral pode esconder 60% para grupos específicos. A média esconde a desigualdade. |\n| 'A IA não tem preconceito porque não tem emoções' | Afirmação do consequente | Preconceito em IA vem dos dados, não de emoções. Ausência de emoções não garante ausência de viés. |\n| 'Esse sistema foi aprovado por especialistas renomados' | Apelo à autoridade | Aprovação inicial não substitui monitoramento contínuo nem avaliação de todos os grupos afetados. |\n| 'Quem questiona o algoritmo quer parar o progresso' | Espantalho | Auditar e questionar um sistema não é rejeitar tecnologia. São posturas completamente diferentes. |\nTabela 8.3 — Argumentos enganosos comuns sobre sistemas de IA e as falácias associadas.\n```",
      "| **📊 Ciência de Dados — Detectando generalização indevida em dados**<br/><br/>Uma das formas mais comuns de generalização indevida em ML é avaliar um modelo apenas pela acurácia geral, ignorando o desempenho por grupo. |\n|---|",
      "```python\nimport pandas as pd\n\n# Resultados de um modelo de crédito\ndados = pd.DataFrame({\n    'grupo':    ['A','A','A','B','B','B','B','B'],\n    'previsto': [1,  1,  0,  1,  1,  0,  0,  0],\n    'real':     [1,  1,  1,  0,  0,  0,  0,  0],\n})\n\nacuracia_geral = (dados['previsto'] == dados['real']).mean()\nprint(f'Acurácia geral: {acuracia_geral:.0%}')  # 75%\n\n# Mas por grupo:\nfor grupo, df in dados.groupby('grupo'):\n    acc = (df['previsto'] == df['real']).mean()\n    print(f'Acurácia grupo {grupo}: {acc:.0%}')\n# Acurácia grupo A: 67%  ← pior\n# Acurácia grupo B: 80%  ← melhor\n\n# Conclusão: a acurácia geral escondia desigualdade entre grupos.\n# 'O modelo acerta 75%' é uma generalização indevida.\n```"
    ]
  },

  "cap8-sec6": {
    id: "cap8-sec6",
    title: "Lógica da Argumentação: quando dois lados têm razão em partes",
    subtitle: "Capítulo 8, Argumentos em conflito",
    paragraphs: [
      "### 6.1 O problema de argumentos conflitantes",
      "Até aqui, tratamos argumentos isolados. Mas na vida real, situações complexas envolvem múltiplos argumentos que apontam em direções diferentes, e alguns se contradizem.",
      "Exemplo: uma empresa quer usar reconhecimento facial para controle de acesso:",
      "- Argumento A: *“O sistema aumenta a segurança e elimina crachás físicos.”*\n- Argumento B: *“O sistema tem taxas de erro maiores para trabalhadores de pele mais escura.”*\n- Argumento C: *“Houve atualizações no modelo desde os estudos de viés. As taxas foram equiparadas.”*\n- Argumento D: *“Mesmo sem viés técnico, a vigilância biométrica contínua levanta questões de privacidade.”*",
      "Como raciocinar sobre isso? A lógica clássica não resolve facilmente — não há uma premissa única que decida o debate.",
      "### 6.2 A teoria de Dung",
      "Em 1995, o cientista da computação Phan Minh Dung propôs uma estrutura formal para lidar com exatamente esse tipo de situação. A **Lógica da Argumentação** pergunta quais argumentos conseguem sobreviver ao debate.",
      "Formalmente:",
      "- Cada argumento pode atacar outro argumento.\n- Um argumento é *“aceito”* se todos os argumentos que o atacam são derrotados por outros argumentos.\n- Um argumento é *“derrotado”* se existe pelo menos um argumento que o ataca e que não foi derrubado.",
      "Aplicando ao exemplo: B ataca A. C ataca B. Se C for aceito, B perde força e A volta a ter mais peso. Mas D não é derrubado por nenhum dos outros — a questão da privacidade continua de pé mesmo que o viés técnico tenha sido resolvido.",
      "### 6.3 Conexão com a lógica não-monotônica",
      "A lógica clássica é monotônica: adicionar mais premissas não desfaz conclusões. Mas a argumentação real não funciona assim. Um novo argumento pode mudar completamente o cenário.",
      "A lógica da argumentação formaliza o raciocínio não-monotônico: conclusões podem ser revistas quando novas informações chegam. Isso é muito mais próximo de como decisões reais são tomadas — em ética, em direito, em política de IA — do que a lógica clássica sozinha permite.",
      "### 6.4 Para que serve em IA explicável?",
      "A lógica da argumentação é uma das ferramentas teóricas para IA Explicável (XAI):",
      "- Um sistema de crédito poderia mostrar: *“Aprovei esse pedido com base nos argumentos X e Y. O argumento Z sugeria rejeição, mas foi superado por W.”*\n- Um sistema de diagnóstico médico poderia apresentar os fatores que pesaram para cada hipótese, permitindo que o médico avalie e conteste.",
      "Em todos esses casos, o objetivo é o mesmo: não esconder o raciocínio dentro de uma caixa preta, mas torná-lo auditável, contestável e compreensível.",
      "Uma forma simples de implementar o conceito de argumentação em ML é registrar os fatores que levaram a cada decisão e quais regras se *“atacam”*:",
      "```python\n# Simulando argumentos para uma decisão de crédito\ndef avaliar_credito(cliente):\n    argumentos_favor = []\n    argumentos_contra = []\n\n    if cliente['renda'] > 5000:\n        argumentos_favor.append('Renda alta (argumento A)')\n    if cliente['score'] >= 700:\n        argumentos_favor.append('Score de crédito bom (argumento B)')\n    if cliente['inadimplente']:\n        argumentos_contra.append('Histórico de inadimplência (argumento C)')\n    if cliente['tempo_emprego'] < 6:\n        argumentos_contra.append('Emprego recente – risco (argumento D)')\n\n    aprovado = len(argumentos_favor) > len(argumentos_contra)\n    return aprovado, argumentos_favor, argumentos_contra\n```"
    ]
  },

  "cap8-sec7": {
    id: "cap8-sec7",
    title: "Resumo do Capítulo",
    subtitle: "Capítulo 8",
    paragraphs: [
      "A lógica não existe em um vácuo. Ela aparece em toda decisão, debate e sistema técnico que você vai encontrar. Este capítulo mostrou como usar as ferramentas lógicas para analisar argumentos reais:",
      "- Um argumento **válido** tem estrutura correta: se as premissas fossem verdadeiras, a conclusão seria verdadeira. Um argumento **sólido** precisa também de premissas verdadeiras — só ele garante conclusões confiáveis.\n- **Falácias formais** são erros de estrutura: afirmação do consequente e negação do antecedente são os casos mais frequentes, e aparecem constantemente em argumentos sobre sistemas de IA.\n- **Falácias informais** são erros de conteúdo: generalização indevida, petição de princípio, espantalho e apelo à autoridade costumam se disfarçar de argumentos técnicos.\n- **Viés algorítmico** é frequentemente sustentado por argumentos que parecem sólidos mas escondem falácias nas premissas. Identificar essas falácias é uma competência técnica e ética essencial para quem trabalha com dados e IA.\n- A **Lógica da Argumentação**, desenvolvida por Dung, oferece uma estrutura formal para lidar com múltiplos argumentos em conflito — muito mais próximo da complexidade das decisões reais do que a lógica clássica sozinha.",
      "Saber lógica não é só resolver problemas formais com símbolos. É ter um instrumento para pensar com clareza, identificar manipulação e exigir qualidade nos argumentos que guiam decisões — especialmente quando essas decisões são tomadas por máquinas e afetam vidas."
    ]
  },

  cap9: {
    id: "cap9",
    title: "Conclusão — Da Proposição à Ação Racional",
    subtitle: "Capítulo 9",
    paragraphs: [
      "## Uma síntese da jornada lógica percorrida",
      "Este livro percorreu, de forma progressiva e interligada, os fundamentos do raciocínio formal. Cada capítulo não existiu isoladamente: cada um aprofundou e ampliou o anterior, formando uma estrutura coerente que vai da sentença mais simples até o raciocínio ético sobre sistemas de inteligência artificial.",
      "Da proposição mais simples (*\"está chovendo\"*) até a questão mais complexa (*\"esse sistema de IA é justo?\"*), o instrumento foi sempre o mesmo: regras precisas, aplicadas com consistência, em diálogo constante com a realidade que queremos compreender.",
    ],
  },
  "cap9-sec1": {
    id: "cap9-sec1",
    title: "O que foi construído ao longo destes capítulos",
    subtitle: "Capítulo 9, Seção 9.1",
    paragraphs: [
      "O ponto de partida foi a **Lógica Proposicional (Capítulo 2)**. Ali aprendemos a representar afirmações do mundo como proposições — entidades que podem ser verdadeiras ou falsas — e a combiná-las com conectivos lógicos. A semântica formal, expressa pelas tabelas-verdade, revelou que o significado de uma sentença composta depende exclusivamente dos valores de verdade de suas partes, de forma mecânica e precisa. O suplemento sobre proposições como conjuntos mostrou que esse mesmo formalismo pode ser visualizado geometricamente: conectivos lógicos são operações sobre conjuntos de situações possíveis, e tautologias são proposições que cobrem todo o universo.",
      "O **Capítulo 3** introduziu o lado dinâmico da lógica: a inferência e a prova. Se a semântica diz o que é verdadeiro, a prova mostra como chegar até lá por passos justificados. Regras como Modus Ponens e Modus Tollens são os movimentos permitidos dentro do sistema — e uma prova formal é a sequência rigorosa desses movimentos, sem pular etapas nem confiar na intuição. Dois conceitos cruciais foram apresentados: **correção** (o sistema não prova falsidades) e **completude** (o sistema consegue provar tudo que é verdadeiro). A lógica proposicional clássica satisfaz ambas.",
      "O **Capítulo 4** rompeu um limite fundamental. A lógica proposicional trata afirmações como blocos opacos; a Lógica Relacional — ou Lógica de Primeira Ordem — abre esses blocos. Com constantes, variáveis e predicados, passamos a raciocinar sobre objetos e suas propriedades. Os quantificadores ∀ e ∃ permitem enunciar leis gerais (*\"todo cliente com renda alta é elegível\"*) e verificar existências (*\"existe pelo menos um produto gratuito\"*). A correspondência com bancos de dados e consultas tornou esses conceitos imediatamente aplicáveis à ciência de dados.",
      "O **Capítulo 5** aprofundou os dois eixos complementares da lógica relacional: o semântico (verificação por modelos — o que é verdadeiro em uma interpretação?) e o sintático (provas formais — o que é demonstrável?). A distinção entre ⊨ e ⊢ — consequência lógica versus demonstrabilidade — foi apresentada com precisão. O Sistema de Fitch foi estendido com quatro regras para quantificadores, e o Teorema de Completude de Gödel estabeleceu que, na lógica de primeira ordem, esses dois eixos coincidem: tudo que é verdadeiro pode ser provado, e tudo que pode ser provado é verdadeiro.",
      "O **Capítulo 6** deu o passo decisivo em direção à automação. A Resolução é um sistema de prova que opera por refutação: em vez de construir diretamente a prova de uma conclusão, assume que ela é falsa e demonstra que isso gera contradição. Uma única regra, aplicada mecanicamente, substitui toda a intuição humana na construção de provas. Isso é a base dos sistemas de raciocínio automático, verificadores de programas e da linguagem Prolog.",
      "O **Capítulo 7** expandiu o horizonte além da certeza. A lógica clássica trabalha com verdadeiro e falso absolutos; o mundo real frequentemente exige raciocinar sob incerteza. A lógica probabilística introduz graus de crença, e o Teorema de Bayes é sua regra de inferência fundamental: dado o que sabíamos antes (priori) e uma nova evidência (verossimilhança), como atualizar racionalmente nossa crença (posteriori)? Redes Bayesianas estendem esse raciocínio para múltiplas variáveis interdependentes, e a lógica fuzzy lida com predicados graduais — como *\"está quente\"* — que não têm fronteiras nítidas.",
      "O **Capítulo 8** fechou o círculo conectando o rigor formal ao uso responsável do raciocínio. Validade e solidez de argumentos, falácias formais e informais, viés algorítmico como problema lógico — tudo isso mostrou que a lógica não é apenas matemática abstrata. É uma ferramenta de análise crítica, essencial para avaliar argumentos técnicos, identificar premissas ocultas e reconhecer quando um raciocínio aparentemente correto encobre uma falácia.",
    ],
  },
  "cap9-sec2": {
    id: "cap9-sec2",
    title: "A progressão: dois eixos em diálogo constante",
    subtitle: "Capítulo 9, Seção 9.2",
    paragraphs: [
      "Uma das ideias mais estruturantes deste livro é a distinção — e o diálogo — entre dois eixos do pensamento lógico:",
      "| **Eixo** | **Trajetória ao longo do livro** |\n|---|---|\n| **Eixo semântico** (o que é verdadeiro?) | Tabelas-verdade (Cap. 2) → Interpretações e modelos (Cap. 4 e 5) → Verificação por modelos → Probabilidades e graus de verdade (Cap. 7) |\n| **Eixo sintático** (o que é demonstrável?) | Regras de inferência (Cap. 3) → Sistema de Fitch para proposições → Fitch estendido para quantificadores (Cap. 5) → Resolução automática (Cap. 6) |",
      "O grande resultado teórico — o **Teorema de Completude de Gödel**, discutido no Capítulo 5 — é que esses dois eixos coincidem para a lógica clássica: Δ ⊨ φ se e somente se Δ ⊢ φ. Tudo que é verdadeiro pode ser provado; tudo que pode ser provado é verdadeiro. Esse resultado não é trivial: ele garante que o sistema formal não perde nenhuma verdade e não inventa nenhuma.",
      "| *A lógica probabilística (Cap. 7) e a lógica fuzzy estendem o eixo semântico para além do binário — mas mantêm o mesmo compromisso com regras precisas e verificáveis. A incerteza é tratada com rigor, não com imprecisão.* |\n|---|",
    ],
  },
  "cap9-sec3": {
    id: "cap9-sec3",
    title: "Conceitos centrais: uma recapitulação articulada",
    subtitle: "Capítulo 9, Seção 9.3",
    paragraphs: [
      "A tabela a seguir sintetiza os conceitos mais importantes de cada capítulo, mostrando como eles se articulam ao longo da obra:",
      "| **Capítulo** | **Conceito nuclear** | **Contribuição para o todo** |\n|---|---|---|\n| **Cap. 2** | Proposição e conectivos | Linguagem básica: como representar o conhecimento de forma precisa e não ambígua. |\n| **Suplemento** | Proposições como conjuntos | Interpretação geométrica: conectivos lógicos como operações sobre espaços de situações. |\n| **Cap. 3** | Inferência e prova | Movimento: como derivar conhecimento novo a partir do que já se sabe, passo a passo. |\n| **Cap. 4** | Lógica relacional | Expressividade: raciocínio sobre objetos, propriedades e relações — não apenas sobre verdades globais. |\n| **Cap. 5** | Modelos e completude | Garantia: ⊨ e ⊢ coincidem; o sistema formal captura toda a verdade lógica. |\n| **Cap. 6** | Resolução | Automação: uma única regra mecanizável substitui a intuição humana na construção de provas. |\n| **Cap. 7** | Raciocínio probabilístico | Extensão: lógica sob incerteza, com regras tão precisas quanto as da lógica clássica. |\n| **Cap. 8** | Ética e argumentação | Aplicação crítica: identificar falácias, avaliar solidez e reconhecer viés em sistemas de IA. |",
    ],
  },
  "cap9-sec4": {
    id: "cap9-sec4",
    title: "A lógica como competência transversal",
    subtitle: "Capítulo 9, Seção 9.4",
    paragraphs: [
      "Um fio condutor percorre todos os capítulos: a lógica não é um fim em si mesma. Ela é uma **ferramenta de pensamento**, aplicável sempre que precisamos raciocinar com rigor — independentemente do domínio.",
      "📊 **Ciência de Dados**: tabelas são relações no sentido lógico (Cap. 4); consultas SQL são instâncias de quantificadores (Cap. 4 e 5); validação de dados é verificação por modelos (Cap. 5); sistemas de recomendação usam raciocínio probabilístico (Cap. 7); e a avaliação crítica de resultados de modelos de IA exige distinguir argumentos válidos de falácias (Cap. 8).",
      "Na **inteligência artificial**, o caminho é ainda mais direto: o Sistema de Resolução (Cap. 6) é a base de sistemas especialistas e de Prolog; Redes Bayesianas (Cap. 7) estão no coração de algoritmos de aprendizado; e a análise de viés algorítmico (Cap. 8) é hoje uma das questões mais prementes da área.",
      "| *A lógica ensina a fazer duas perguntas fundamentais antes de aceitar qualquer conclusão: (1) a estrutura do argumento é válida? e (2) as premissas são verdadeiras? Sistemas de IA podem falhar em qualquer uma dessas dimensões — e saber identificar onde a falha ocorre é uma competência insubstituível.* |\n|---|",
    ],
  },
  "cap9-sec5": {
    id: "cap9-sec5",
    title: "Limites e extensões: o que este livro não cobre",
    subtitle: "Capítulo 9, Seção 9.5",
    paragraphs: [
      "Este livro cobriu os fundamentos — mas a lógica é um campo vasto. Vale explicitar o que ficou de fora, não como lacuna, mas como horizonte:",
      "| **Área** | **Descrição** |\n|---|---|\n| **Lógica modal** | Raciocínio sobre necessidade e possibilidade (*\"é necessariamente verdade que...\"*, *\"é possível que...\"*). Fundamental em verificação formal de sistemas. |\n| **Lógica temporal** | Raciocínio sobre sequências no tempo (*\"em algum momento futuro...\"*, *\"sempre que...\"*). Base de linguagens de especificação como LTL e CTL. |\n| **Lógica de descrição** | Fragmento decidível da lógica de primeira ordem; fundamento das ontologias OWL e da Web Semântica. |\n| **Lógica paraconsistente** | Extensão que tolera contradições sem colapsar — relevante em bases de dados com informações conflitantes. |\n| **Indecidibilidade** | O Teorema de Gödel (incompletude) e o problema da parada mostram os limites absolutos do raciocínio formal — um aprofundamento natural após este livro. |",
    ],
  },
  "cap9-sec6": {
    id: "cap9-sec6",
    title: "Palavras finais",
    subtitle: "Capítulo 9, Seção 9.6",
    paragraphs: [
      "A lógica é, antes de tudo, uma **disciplina da clareza**. Ela nos ensina a separar o que sabemos do que inferimos, a distinção entre a forma de um argumento e o conteúdo de suas premissas, e a diferença entre o que é verdadeiro e o que é apenas plausível.",
      "Ao longo destes capítulos, você aprendeu a escrever fórmulas, construir provas, avaliar modelos, automatizar raciocínios e pensar probabilisticamente. Mais do que técnicas, esses são **modos de pensar** — habituais em matemáticos, cientistas da computação e pesquisadores de IA que precisam, a cada passo, justificar suas conclusões com precisão.",
      "A jornada que este livro propôs vai da proposição mais simples (*\"está chovendo\"*) até a questão mais complexa (*\"esse sistema de IA é justo?\"*). Em todos os pontos desse caminho, o instrumento é o mesmo: regras precisas, aplicadas com consistência, em diálogo constante com a realidade que queremos compreender.",
      "| *A lógica não responde a todas as perguntas — mas é indispensável para formulá-las bem. E uma pergunta bem formulada já é, em larga medida, metade da resposta.* |\n|---|",
      "— *Fim dos capítulos* —",
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
