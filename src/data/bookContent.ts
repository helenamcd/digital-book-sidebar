export interface Chapter {
  id: string;
  title: string;
  sections?: { id: string; title: string }[];
}

// Capítulos ocultos (não excluídos, apenas invisíveis)
export const hiddenChapterPrefixes = ["cap9"];

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
      { id: "cap2-sec-intro", title: "Fundamentos" },
      { id: "cap1-sec1", title: "Sintaxe" },
      { id: "cap1-sec2", title: "Semântica" },
      { id: "cap1-sec3", title: "Avaliação ou Interpretação" },
      { id: "cap1-sec4", title: "Satisfatibilidade" },
      { id: "cap1-sec5", title: "Exemplos" },
      { id: "cap2-sec1", title: "Propriedades Lógicas" },
      { id: "cap2-sec2", title: "Equivalência Lógica" },
      { id: "cap2-sec3", title: "Consequência Lógica" },
      { id: "cap2-sec4", title: "Consistência Lógica" },
      { id: "cap2-sec5", title: "Relações entre Propriedades Lógicas" },
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
      { id: "cap3-sec3", title: "O Sistema de Fitch e Dedução Natural" },
      { id: "cap3-sec4", title: "Regras de Inferência do Sistema de Fitch" },
      { id: "cap3-sec5", title: "Exemplo Completo: Validação de Pipeline" },
      { id: "cap3-sec6", title: "Dicas para Construir Provas" },
      { id: "cap3-sec7", title: "Solidez e Completude" },
      { id: "cap3-sec8", title: "Aplicações em Ciência de Dados" },
      { id: "cap3-sec9", title: "Resumo do Capítulo" },
      
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
    title: "Capítulo 5 - Validação e Modelos",
    sections: [
      { id: "cap5-sec1", title: "O Método da Tabela-Verdade" },
      { id: "cap5-sec2", title: "Modelos Booleanos: Propagação de Restrições" },
      { id: "cap5-sec3", title: "Modelos Não-Booleanos: Representações Compactas" },
      { id: "cap5-sec4", title: "Verificação de Modelos na Prática" },
      { id: "cap5-sec5", title: "Resumo do Capítulo" },
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
    id: "cap7",
    title: "Capítulo 7 - Lógica de Primeira Ordem",
    sections: [
      { id: "cap7-sec1", title: "Conceitualização do Mundo" },
      { id: "cap7-sec2", title: "Sintaxe da Lógica de Primeira Ordem" },
      { id: "cap7-sec3", title: "Semântica: Interpretações e Atribuições" },
      { id: "cap7-sec4", title: "Exemplo: Mundo dos Blocos" },
      { id: "cap7-sec5", title: "Aritmética e Universos Infinitos" },
      { id: "cap7-sec6", title: "Igualdade em LPO" },
      { id: "cap7-sec7", title: "Propriedades Lógicas" },
      { id: "cap7-sec8", title: "Conexões com IA e Ciência de Dados" },
      { id: "cap7-sec9", title: "Exemplo Computacional: Z3" },
      { id: "cap7-sec10", title: "Resumo do Capítulo" },
    ]
  },
  {
    id: "cap8",
    title: "Capítulo 8 - Indução e Generalização",
    sections: [
      { id: "cap8-sec1", title: "Indução Incompleta e Indução Completa" },
      { id: "cap8-sec2", title: "Fechamento de Domínio" },
      { id: "cap8-sec3", title: "Indução Linear" },
      { id: "cap8-sec4", title: "Indução em Árvore" },
      { id: "cap8-sec5", title: "Indução Estrutural" },
      { id: "cap8-sec6", title: "Indução Multidimensional" },
      { id: "cap8-sec7", title: "Indução Embutida" },
      { id: "cap8-sec8", title: "Indução em IA e Ciência de Dados" },
      { id: "cap8-sec9", title: "Resumo do Capítulo" },
    ]
  },
  {
    id: "glossario",
    title: "Glossário",
  },
];

export const chapterContents: Record<string, ChapterContent> = {
  intro: {
    id: "intro",
    title: "Introdução",
    subtitle: "Da intuição ao raciocínio estruturado",
    paragraphs: [
      "A lógica é o estudo formal do raciocínio correto. Desde a Antiguidade, com Aristóteles, ela surgiu como uma tentativa de responder a uma pergunta simples e poderosa: **quando um argumento é válido?** Ao longo dos séculos, esse estudo evoluiu para sistemas formais capazes de representar afirmações, relações e inferências de maneira precisa. Hoje, embora muitas vezes invisível, a lógica está no coração dos sistemas computacionais, dos algoritmos de aprendizado de máquina e das decisões automatizadas que moldam a ciência de dados.",
      "Na ciência de dados, raramente lidamos apenas com números. Lidamos com **afirmações sobre dados**, **condições**, **regras**, **hipóteses** e **conclusões**. Sempre que um cientista de dados escreve uma regra de filtragem, define critérios para classificar usuários ou interpreta a saída de um modelo, está implicitamente usando lógica. Por exemplo, ao definir que *\"usuários que interagiram com o sistema e apresentaram queda de desempenho devem receber uma intervenção\"*, estamos lidando com uma estrutura lógica do tipo **SE condição ENTÃO ação**. Entender essa estrutura de forma explícita ajuda a evitar erros, ambiguidades e inferências incorretas.",
      "Podemos representar esse tipo de raciocínio de maneira simples:",
      "```\\nInteragiu_com_o_sistema  ∧  Queda_de_desempenho\\n                ↓\\n        Recomendar_intervenção\\\n```",
      "Esse diagrama mostra algo fundamental: **dados não 'falam sozinhos'**. Eles precisam ser organizados em proposições e conectados por regras de inferência. A lógica fornece exatamente esse arcabouço.",
    
      "##Lógica como base para modelos, regras e decisões",
      "Em cursos de ciência de dados, é comum que os alunos aprendam rapidamente ferramentas, linguagens e bibliotecas. No entanto, sem uma base lógica sólida, surge um problema recorrente: **modelos funcionam, mas as decisões não são bem compreendidas**. A lógica ajuda o estudante a responder perguntas como:",
      "- O que exatamente meu modelo está afirmando?\n- Em quais condições essa conclusão é válida?\n- Que suposições estou fazendo sobre os dados?\n- Que inferências são justificadas — e quais não são?",
      "Considere um exemplo típico em IHC e análise de comportamento do usuário:",
      "```\\nSE (Tempo_de_tarefa > esperado)\\nE  (Número_de_erros alto)\\nENTÃO (Usuário está confuso)\\n```",
      "Sem lógica, essa regra parece intuitiva. Com lógica, o aluno aprende a questionar:\n\n- Essa condição é suficiente ou apenas necessária?\n- O inverso é verdadeiro?\n- Existem exceções?\n- O que acontece se apenas uma das condições ocorrer?",
      "Essas perguntas são lógicas antes de serem estatísticas. Elas ajudam a construir sistemas mais explicáveis, algo crucial em áreas como **IHC, computação afetiva e sistemas educacionais inteligentes**, onde decisões precisam ser compreendidas e justificadas.",
      
      "##Do raciocínio humano ao raciocínio computacional",
      "Uma das grandes contribuições da lógica é permitir que o raciocínio humano seja **externalizado**, analisado e automatizado. Quando transformamos uma intuição em uma proposição lógica, damos um passo importante:",
      "```\\nIntuição humana\\n       ↓\\nExpressão lógica\\n       ↓\\nImplementação computacional\\n```",
      "Esse processo é central na ciência de dados. Um pipeline de dados pode ser visto como uma sequência de inferências:",
      "```\\nDados brutos\\n   ↓\\nPré-processamento (regras)\\n   ↓\\nModelo (hipóteses)\\n   ↓\\nInferência (conclusões)\\n```",
      "Cada etapa envolve decisões lógicas, mesmo quando usamos modelos probabilísticos. A lógica não compete com a estatística ou o aprendizado de máquina — ela **organiza o pensamento que dá sentido a essas ferramentas**.",

      "##Por que aprender lógica no curso de Ciência de Dados?",
      "Aprender lógica ajuda o aluno a:",
      "- **Pensar com precisão**, evitando ambiguidades em definições e análises.\n- **Interpretar resultados**, distinguindo correlação, implicação e causalidade.\n- **Projetar regras e sistemas explicáveis**, especialmente em contextos de IHC.\n- **Comunicar decisões**, tornando argumentos claros para equipes multidisciplinares.\n- **Detectar falácias**, tanto em análises próprias quanto em resultados automatizados.",
      "Em vez de ver a lógica como um conjunto abstrato de símbolos, este livro a apresenta como uma **ferramenta prática para estruturar o raciocínio em ciência de dados**, conectando formalismo e aplicação. Ao longo dos capítulos, o leitor verá como proposições, operadores lógicos, inferência e provas aparecem, de forma explícita ou implícita, em tarefas cotidianas da área.",
      "Aprender lógica, portanto, não é apenas aprender a \"provar coisas\", mas aprender a **pensar melhor sobre dados, modelos e decisões** — uma habilidade essencial para qualquer cientista de dados contemporâneo.",
      "\"Pensar logicamente é aprender a transformar dados em decisões justificáveis.\" — Fundamentos de Lógica Aplicada à Ciência de Dados",

    ],
  },

  "intro-sec1": {
    id: "intro-sec1",
    title: "Sentenças Lógicas na Ciência de Dados",
    subtitle: "Introdução",
    paragraphs: [
      "Para muitos estudantes, a lógica ainda parece um tema distante e excessivamente teórico, associada apenas a demonstrações matemáticas formais ou a provas abstratas sem ligação aparente com a prática profissional. Na ciência de dados, porém, essa percepção não poderia estar mais equivocada. Sempre que lidamos com dados reais, estamos cercados por **incerteza, múltiplas possibilidades e informação incompleta** — exatamente o tipo de cenário para o qual as sentenças lógicas foram criadas.",
      "Na ciência de dados, uma **sentença lógica** é uma afirmação que pode ser verdadeira ou falsa sobre o mundo representado pelos dados. Por exemplo:",
      "- “O usuário clicou no botão de ajuda”\n- “O tempo de execução da tarefa foi maior que o esperado”\n- “O modelo classificou o usuário como em risco de evasão”.",
      "Cada uma dessas afirmações descreve um aspecto do sistema ou do comportamento do usuário e, assim como na lógica clássica, pode ser avaliada como verdadeira ou falsa em diferentes situações.",
    
      "##Mundos possíveis e dados",
      "Considere um sistema interativo analisado por uma equipe de ciência de dados em um contexto de IHC. Suponha que estamos observando quatro usuários (**U1, U2, U3 e U4**) e queremos modelar se cada usuário:",
      "- clicou no botão de ajuda;\n- apresentou erro na tarefa;\n- concluiu a atividade.",
      "Cada uma dessas relações pode ser verdadeira ou falsa para cada usuário. Assim como no exemplo clássico de relações interpessoais, **não conhecemos inicialmente o estado real do sistema**, apenas sabemos que existem várias configurações possíveis.",
      "Cada configuração possível desses fatos corresponde a um **mundo possível**. Um mundo é simplesmente uma maneira específica de o sistema estar naquele momento.",
      "Por exemplo:",
      "- Em um mundo possível, U1 clicou no botão de ajuda e concluiu a tarefa sem erros.\n- Em outro, U1 não clicou no botão de ajuda e abandonou a tarefa após vários erros.",
      "A ciência de dados raramente começa sabendo qual desses mundos é o real. Em vez disso, começamos com **dados parciais**, registros incompletos e observações limitadas.",
    
      "##Sentenças como restrições sobre os dados",
      "É nesse ponto que as sentenças lógicas passam a desempenhar um papel central na ciência de dados. Cada sentença lógica expressa uma **restrição** sobre quais mundos possíveis são compatíveis com aquilo que sabemos a partir dos dados.",
      "Considere as seguintes sentenças em um sistema educacional digital:",
      "- O usuário U2 concluiu a tarefa.\n- O usuário U3 não clicou no botão de ajuda.\n- O usuário U1 apresentou erro ou abandonou a tarefa.\n- Todo usuário que apresentou erro recebeu uma mensagem de apoio.\n- Nenhum usuário recebe mensagem de apoio sem ter apresentado erro.",
      "Cada uma dessas sentenças elimina certos mundos possíveis e mantém outros. Por exemplo, qualquer mundo em que U2 não tenha concluído a tarefa é automaticamente descartado se acreditamos na primeira sentença.",
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
      "Na ciência de dados, raramente trabalhamos com informações completas. Em geral, temos um conjunto de **sentenças extraídas dos dados** — registros, logs, rótulos ou regras — que descrevem apenas parcialmente o sistema que estamos analisando. A partir dessas sentenças, queremos responder perguntas fundamentais: *o que pode ser concluído com certeza?* O que é apenas possível? E o que não pode ser verdadeiro de forma alguma?",
      "É nesse contexto que surge a noção de **implicação lógica**, entendida aqui como consequência lógica, e não apenas como o conectivo ‘se… então’",
      "Considere um sistema educacional digital idealizado, no qual observamos o comportamento de estudantes durante uma atividade e no qual mensagens de apoio são enviadas exatamente e apenas quando ocorre um erro. Suponha que, a partir dos dados coletados, sabemos que:",
      "- Todo estudante que apresentou erro recebeu uma mensagem de apoio.\n- Todo estudante que recebeu mensagem de apoio apresentou erro.\n- O estudante U2 recebeu uma mensagem de apoio.",
      "Essas sentenças não descrevem completamente o sistema, mas impõem restrições claras sobre os cenários possíveis. Mesmo que os dados **não afirmem explicitamente** que U2 apresentou erro, podemos concluir algo importante: se todo erro gera mensagem de apoio, e somente estudantes que erraram recebem essa mensagem, então **U2 necessariamente apresentou erro**. Essa conclusão não está escrita nos dados, mas é uma **consequência lógica** das sentenças conhecidas.",
      "Esse tipo de inferência não depende de probabilidades, modelos estatísticos ou aprendizado de máquina — depende apenas da estrutura lógica das sentenças envolvidas.",
      "Formalmente, se denotarmos o conjunto de sentenças conhecidas por Γ e a conclusão por φ, dizemos que φ é consequência lógica de Γ quando:\nΓ ⊨ φ\nisto é, quando φ é verdadeira em **todos os mundos possíveis** que satisfazem Γ.",

      "##Quando os dados não determinam um único cenário",
      "Na prática, um conjunto de sentenças raramente determina um único estado possível do sistema. Em vez disso, ele costuma ser compatível com **vários mundos possíveis**. Cada mundo representa uma forma coerente de os dados serem verdadeiros ao mesmo tempo.",
      "Por exemplo, suponha que os dados indiquem apenas que:",
      "- U1 apresentou erro ou abandonou a tarefa.\n- U1 não recebeu mensagem de apoio.",
      "Essas informações permitem mais de um cenário logicamente possível:",
      "- Em um mundo possível, U1 apresentou erro, mas o sistema falhou em enviar a mensagem.\n- Em outro, U1 abandonou a tarefa antes de qualquer erro ser registrado.\n- Em outro ainda, houve erro de registro nos logs.",
      "Como existem vários mundos compatíveis com os dados, **nem toda pergunta pode ser respondida com certeza**. Ainda assim, **algumas conclusões podem ser verdadeiras em todos esses mundos** — e são exatamente essas conclusões que caracterizam a consequência lógica.",

      "##O que significa implicação lógica (consequência lógica)",
      "Dizemos que um conjunto de sentenças **implica logicamente** uma conclusão quando **essa conclusão é verdadeira em todos os mundos possíveis compatíveis com as sentenças conhecidas**.",
      "Em termos formais, Γ implica logicamente φ se, e somente se, **não existe nenhum mundo** que satisfaça Γ e no qual φ seja falsa.",
      "Em termos de ciência de dados, isso significa:",
      "- Uma conclusão é **certa** se é verdadeira em todos os mundos compatíveis com os dados.\n- Uma conclusão é **impossível** se é falsa em todos os mundos.\n- Uma conclusão é **indeterminada** se é verdadeira em alguns mundos e falsa em outros.",
      "Por exemplo:",
      "- Se em todos os mundos possíveis U2 apresentou erro, então podemos afirmar com certeza que U2 apresentou erro.\n- Se em alguns mundos U3 concluiu a tarefa e em outros não, então não podemos afirmar nem que concluiu nem que não concluiu — apenas que **é possível**.",
      "Assim, a consequência lógica separa claramente três situações comuns na análise de dados: conclusões **certas**, **impossíveis** e **indeterminadas**.",

      "##Consequência lógica e verificação de modelos",
      "Uma maneira conceitual de verificar consequência lógica é examinar **todos os mundos possíveis compatíveis com os dados** e verificar se a conclusão é verdadeira em todos eles.Esse procedimento corresponde à ideia central da verificação semântica de modelos, que está na base do que mais tarde se formaliza como *model checking*.",
      "Em problemas pequenos — com poucas variáveis e poucas sentenças — essa abordagem é viável e até intuitiva. No entanto, em ciência de dados real, o número de mundos possíveis cresce rapidamente e pode se tornar **enorme ou até infinito**, tornando inviável a enumeração explícita de todos os cenários.",
      "É por isso que, em vez de listar mundos, recorremos ao **raciocínio lógico**: usamos **regras formais de inferência e provas lógicas** para demonstrar que uma conclusão é consequência das premissas, sem precisar examinar cada mundo possível individualmente."
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
      "Uma contribuição central da lógica clássica foi a identificação de **regras de inferência** — padrões corretos de raciocínio que preservam a verdade.",
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
      "Esse tipo de raciocínio é a base da **Ciência empírica e da aprendizagem de máquina**. No entanto, quando a indução é incompleta — isto é, quando não observamos todos os casos possíveis —, ela **não oferece garantias absolutas**. Sempre pode existir um caso ainda não observado que contradiga a conclusão.",
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
      "- e: o estudante apresentou erro\n- f: o estudante recebeu feedback\n- a: o estudante abandonou a atividade\n- r: o registro foi armazenado no log",

      "Com essas abreviações, podemos escrever sentenças como:",
      "``` \ne ⇒ f\nf ⇒ r\n```",

      "##Implicação lógica como encadeamento simbólico",
      "A lógica permite encadear implicações por meio de regras de inferência. Um exemplo clássico é a transitividade:",
      "``` \np ⇒ q\nq ⇒ s\n────────\np ⇒ s\n```",

      "Aplicando ao contexto de ciência de dados:",
      "``` \ne ⇒ f\nf ⇒ r\n────────\ne ⇒ r\n```",
      "Isso significa que, se o estudante apresentou erro, então sua interação foi registrada.",

      "##Conjunções e disjunções",
      "Muitos cenários envolvem múltiplas condições. Por exemplo:",
      "``` \n(e ∧ a) ⇒ i\ni ⇒ r\n```",
      "Nesse caso, concluímos:",
      "``` \n(e ∧ a) ⇒ r\n```",

      "Também podemos representar alternativas:",
      "``` \n(e ∨ a) ⇒ i\n```",

      "##Esquema geral de inferência",
      "De forma abstrata, podemos representar um padrão geral de raciocínio:",
      "``` \np₁ ∧ … ∧ pₖ ⇒ q₁ ∨ … ∨ qₗ\nr₁ ∧ … ∧ rₘ ⇒ s₁ ∨ … ∨ sₙ\n────────────────────────\np₁ ∧ … ∧ pₖ ∧ r₁ ∧ … ∧ rₘ ⇒ q₁ ∨ … ∨ qₗ ∨ s₁ ∨ … ∨ sₙ\n```",

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
    "Considere as seguintes definições:",
    "- e(x): o estudante x apresentou erro\n- f(x): o estudante x recebeu feedback\n- a(x): o estudante x abandonou a atividade",
    "E as regras:",
    "``` \n∀x ( e(x) ⇒ f(x) )\n∀x ( f(x) ⇒ ¬a(x) )\n```",
    "Se os dados indicam:",
    "``` \ne(U2)\n```",
    "Um sistema automatizado pode concluir:",
    "``` \nf(U2)\n¬a(U2)\n```",
    "Essas conclusões são **logicicamente implicadas** pelas premissas.",

    "##Da história à prática",
    "A ideia de automatizar o raciocínio lógico remonta a **Leibniz**, que sonhava com uma álgebra universal capaz de mecanizar o pensamento.",
    "**Boole** forneceu as bases formais com a álgebra booleana, e avanços posteriores em lógica e computação tornaram a automação viável.",

    "##Aplicações em ciência de dados",
    "A automação do raciocínio lógico é aplicada em:",
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

      "##Lógica Proposicional",
      "A **Lógica Proposicional** é a lógica das proposições, nas quais símbolos representam **condições globais sobre o mundo**.",
      "Em ciência de dados, ela aparece naturalmente em regras IF–THEN, árvores de decisão, validações e sistemas baseados em regras.",
      "Essa lógica é computacionalmente bem comportada e totalmente decidível.",

      "##Lógica Relacional",
      "A **Lógica Relacional** amplia a lógica proposicional ao permitir falar sobre **objetos individuais e suas relações**.",
      "Ela introduz variáveis, quantificadores e predicados, sendo fundamental para modelar bases de dados e regras gerais.",

      "##Lógica Funcional",
      "A **Lógica Funcional** permite descrever mundos com **infinitos objetos**, aumentando significativamente o poder expressivo da linguagem.",
      "Esse ganho vem acompanhado de um custo: algumas propriedades computacionais desejáveis são perdidas.",

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
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Sentença lógica | Afirmação declarativa que pode ser verdadeira ou falsa |\n| Consequência lógica | Relação em que a verdade das premissas garante a verdade da conclusão |\n| Demonstração lógica | Sequência finita de passos que estabelece a validade de uma conclusão |\n| Lógica simbólica | Uso de símbolos formais para representar sentenças e raciocínios |\n| Automação do raciocínio | Uso de algoritmos para verificar ou derivar conclusões lógicas |\n| Lógica Proposicional | Lógica das proposições com conectivos; decidível e computável |\n| Lógica Relacional | Extensão com variáveis e quantificadores sobre domínios finitos |\n| Lógica Funcional | Extensão com funções e domínios infinitos; maior expressividade |"
    ]
  },
    id: "cap2",
    title: "Lógica Proposicional",
    subtitle: "Capítulo 2",
    paragraphs: [
      "A **Lógica Proposicional** é o ponto de partida formal para o estudo da lógica aplicada à ciência de dados. Ela se ocupa de **proposições** e das **relações lógicas** entre elas. De forma intuitiva, uma proposição pode ser entendida como uma possível condição do mundo que pode ser avaliada como **verdadeira ou falsa**. Exemplos simples incluem afirmações como 'está chovendo', 'o usuário clicou no botão de ajuda' ou 'o modelo classificou o aluno como em risco'.",
      "Neste capítulo, apresentamos a Lógica Proposicional como uma **linguagem formal** para representar conhecimento de maneira precisa. Começamos pelos **elementos sintáticos** da linguagem (símbolos proposicionais e conectivos lógicos) e pela **semântica** (atribuições de valores de verdade e tabelas-verdade). Em seguida, avançamos para a **avaliação** mecânica de sentenças, a noção de **satisfatibilidade** e aplicações práticas em linguagem natural e circuitos digitais.",
      "Na segunda parte do capítulo, mudamos o foco de sentenças individuais para **propriedades e relações entre sentenças**. Investigamos quando uma sentença é válida, contingente ou insatisfatível; quando duas sentenças são logicamente equivalentes; quando uma conclusão é consequência lógica de premissas; e quando um conjunto de regras é consistente. Encerramos conectando essas noções e mostrando como reescritas por equivalência permitem simplificar e transformar expressões lógicas.",
      "A Lógica Proposicional ocupa um lugar especial por combinar **simplicidade conceitual** com **fortes garantias computacionais**. Embora sua capacidade expressiva seja limitada quando comparada a lógicas mais sofisticadas, ela permite compreender, de forma clara, conceitos centrais como **implicação lógica**, **consistência**, **satisfatibilidade** e **consequência lógica** — conceitos que servirão de base para os capítulos seguintes e para aplicações mais avançadas em ciência de dados e inteligência artificial."
    ],
  },

  "cap2-sec-intro": {
    id: "cap2-sec-intro",
    title: "Fundamentos da Lógica Proposicional",
    subtitle: "Capítulo 2",
    paragraphs: [
      "É importante notar que uma proposição **não precisa ser conhecida como verdadeira** para ser considerada uma proposição. Ela representa uma possibilidade sobre o estado do mundo e é definida justamente por **poder ser avaliada como verdadeira ou falsa em um determinado contexto**, ainda que não saibamos de antemão qual é o seu valor de verdade. Em muitos cenários (especialmente em ciência de dados), lidamos com proposições cujo valor ainda é desconhecido ou depende da verificação de outras proposições.",
      "A partir da definição formal de proposições, mostramos como é possível **avaliar mecanicamente** o valor de verdade de sentenças complexas, dadas determinadas atribuições. Esse processo está na base de técnicas como tabelas-verdade, verificação de modelos e resolução lógica. Também discutimos métodos sistemáticos para encontrar atribuições de verdade que **satisfazem** um conjunto de sentenças, conectando a lógica proposicional à ideia de busca por cenários coerentes com os dados disponíveis.",
      "Ao longo desta seção, enfatizamos aplicações diretas da Lógica Proposicional em ciência de dados, como a formalização de regras de decisão, a explicação do comportamento de modelos baseados em regras, a análise de logs de sistemas interativos e a modelagem de condições em sistemas digitais. Mostramos ainda como essa lógica pode ser usada tanto para formalizar fragmentos da **linguagem natural** quanto para descrever o funcionamento de **circuitos digitais**, evidenciando seu papel fundamental na computação."
    ],
  },

  "cap1-sec1": {
    id: "cap1-sec1",
    title: "Sintaxe da Lógica Proposicional",
    subtitle: "Capítulo 2",
    paragraphs: [
      "A Lógica Proposicional não se ocupa apenas do significado das sentenças, mas também da sua **forma**. Essa dimensão formal é chamada de **sintaxe**. A sintaxe define quais expressões são sentenças bem formadas e como sentenças mais complexas podem ser construídas a partir de sentenças simples.",
      "Na ciência de dados, a sintaxe desempenha um papel semelhante ao da gramática em uma linguagem de programação: ela garante que regras, hipóteses e condições sejam expressas de maneira **precisa, não ambígua e verificável**.",

      "##Sentenças simples e sentenças compostas",
      "Na Lógica Proposicional, distinguimos dois tipos fundamentais de sentenças: **sentenças simples (ou proposições atômicas)** e **sentenças compostas**.",
      "As sentenças simples expressam fatos elementares sobre o mundo. Elas não contêm conectivos lógicos e, do ponto de vista da Lógica Proposicional, são tratadas como **unidades atômicas**, isto é, sua estrutura interna não é analisada.",

      "Exemplos em ciência de dados educacionais:",
      "- `erro` (o estudante cometeu erro)\n- `ajuda` (o estudante clicou no botão de ajuda)\n- `abandono` (o estudante abandonou a atividade)\n- `log` (a interação foi registrada no log)",
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
      "```\\(erro ∧ ajuda)\n```",
      "(o estudante cometeu erro e clicou no botão de ajuda)",

      "###Disjunção",
      "A disjunção representa alternativas possíveis.",
      "```\\(erro ∨ abandono)\\n```",
      "(o estudante cometeu erro ou abandonou a atividade)",

      "###Implicação",
      "A implicação expressa relações condicionais entre sentenças.",
      "```\\(erro ⇒ ajuda)\\n```",
      "(se o estudante cometeu erro, então recebeu ajuda)",

      "###Bicondicional",
      "O bicondicional expressa equivalência lógica entre sentenças.",
      "```\\(aprovado ⇔ media≥7)\\n```",
      "(o estudante está aprovado se, e somente se, a média é maior ou igual a 7)",

      "##Composição e aninhamento de sentenças",
      "Uma característica importante da sintaxe da Lógica Proposicional é que sentenças compostas podem ser usadas como partes de outras sentenças compostas. Isso permite construir expressões complexas que modelam situações realistas em ciência de dados.",

      "Exemplo:",
      "```\\((erro ∨ abandono) ⇒ log)\\n```",
      "Essa sentença afirma que, se ocorreu erro ou abandono, então houve registro no log.",

      "##Parênteses e ambiguidade",
      "Os parênteses desempenham um papel crucial na sintaxe, pois indicam explicitamente como as sentenças devem ser agrupadas. Sem eles, muitas expressões se tornam ambíguas.",

      "Considere a expressão:",
      "```\\erro ∨ ajuda ⇒ log\\n```",
      "Ela pode representar estruturas distintas:",
      "```\\((erro ∨ ajuda) ⇒ log)\\n```",
      "ou",
      "```\\(erro ∨ (ajuda ⇒ log))\\n```",
      "Como essas leituras têm significados diferentes, a sintaxe exige regras adicionais para evitar ambiguidades.",

      "##Precedência e associatividade",
      "Para reduzir o uso excessivo de parênteses, a Lógica Proposicional adota regras de precedência entre os conectivos. A ordem usual (da maior para a menor precedência) é:",
      "```\\¬\n∧\n∨\n⇒\n⇔\\n```",
      "Essa convenção é amplamente adotada, mas o uso explícito de parênteses é sempre recomendado quando houver qualquer dúvida sobre a estrutura da sentença.",

      "Exemplos:",
      "```\\¬ erro ∧ ajuda     ≡ ((¬ erro) ∧ ajuda)\nerro ∧ ajuda ∨ log ≡ ((erro ∧ ajuda) ∨ log)\nerro ⇒ ajuda ⇔ log ≡ ((erro ⇒ ajuda) ⇔ log)\\n```",

      "Quando operadores de mesma precedência aparecem em sequência, adotam-se **convenções de associatividade (à esquerda ou à direita)**, garantindo uma interpretação única da sentença.",

      "##Vocabulário e linguagem proposicional",
      "Um **vocabulário proposicional** é o conjunto de todos os símbolos proposicionais disponíveis (por exemplo, `{erro, ajuda, abandono, log}`).",
      "Uma **linguagem proposicional** é o conjunto de todas as sentenças bem formadas que podem ser construídas a partir desse vocabulário, seguindo as regras sintáticas da lógica.",

      "A sintaxe fornece o alicerce formal sobre o qual se apoiam a semântica, a inferência lógica e as aplicações da lógica em ciência de dados, inteligência artificial e sistemas computacionais."
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
      "Uma **proposição** representa uma possibilidade sobre o estado do mundo que pode ser avaliada como verdadeira ou falsa em um determinado cenário. A lógica não fixa se uma proposição é verdadeira ou falsa — isso depende do contexto observado ou assumido.",
      
      "Para tornar esse contexto explícito, utilizamos o conceito de **atribuição de verdade**.",
      
      "Formalmente, uma atribuição de verdade associa a cada símbolo proposicional um valor de verdade. Neste livro, adotamos a convenção:",
      
      "- **1** para verdadeiro\n- **0** para falso",
      
      "Considere os seguintes símbolos proposicionais em um sistema educacional digital:",
      
      "- **e**: o estudante apresentou erro\n- **f**: o estudante recebeu feedback\n- **r**: a interação foi registrada no log",
      
      "Uma possível atribuição de verdade pode ser:",
      
      "- e = 1\n- f = 0\n- r = 1",
      
      "Outra atribuição, igualmente válida do ponto de vista lógico, poderia ser:",
      
      "- e = 0\n- f = 0\n- r = 1",
      
      "Essas atribuições **não são sentenças da lógica proposicional**, mas afirmações em nível meta (isto é, estamos falando *sobre* a lógica). Ainda assim, elas são essenciais para compreender a semântica.",

      "##Avaliação semântica de sentenças compostas",
      "Embora a lógica não determine os valores das proposições simples, **ela determina completamente o valor de qualquer sentença composta**, uma vez que a atribuição de verdade esteja definida.",
      
      "Essa avaliação é feita por meio de regras semânticas, tradicionalmente representadas por **tabelas-verdade**.",

      "##Negação (¬)",
      "A negação inverte o valor de verdade da sentença original:",
      
      "```\\n| φ | ¬φ |\n|---|----|\n| 1 | 0  |\n| 0 | 1  |\\n```",
      
      "*Exemplo em ciência de dados:* se “o estudante apresentou erro” é verdadeiro, então “o estudante não apresentou erro” é falso.",

      "##Conjunção (∧)",
      "Uma conjunção é verdadeira **somente quando todas as sentenças envolvidas são verdadeiras**:",
      
      "```\\n| φ | ψ | φ ∧ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 0     |\n| 0 | 1 | 0     |\n| 0 | 0 | 0     |\\n```",
      
      "*Exemplo:* “O estudante apresentou erro **e** abandonou a atividade” só é verdadeiro se ambos os eventos ocorreram.",

      "##Disjunção (∨)",
      "Uma disjunção é verdadeira quando **ao menos uma** das sentenças é verdadeira. Trata-se do **ou inclusivo**:",
      
      "```\\n| φ | ψ | φ ∨ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 1     |\n| 0 | 1 | 1     |\n| 0 | 0 | 0     |\\n```",
      
      "*Exemplo:* “O estudante apresentou erro **ou** abandonou a atividade” é verdadeiro se qualquer uma das situações ocorreu.",

      "##Implicação (⇒)",
      "A implicação é falsa **apenas quando o antecedente é verdadeiro e o consequente é falso**. Em todos os outros casos, ela é verdadeira. Essa definição é conhecida como **implicação material**:",
      
      "```\\n| φ | ψ | φ ⇒ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 0     |\n| 0 | 1 | 1     |\n| 0 | 0 | 1     |\\n```",
      
      "*Exemplo:* “Se o estudante apresentou erro, então recebeu feedback”. A lógica não afirma que o erro ocorreu — apenas verifica se, **caso tenha ocorrido**, a consequência foi respeitada.",

      "##Bicondicional (⇔)",
      "O bicondicional é verdadeiro quando as duas sentenças possuem **o mesmo valor de verdade**:",
      
      "```\\n| φ | ψ | φ ⇔ ψ |\n|---|---|-------|\n| 1 | 1 | 1     |\n| 1 | 0 | 0     |\n| 0 | 1 | 0     |\n| 0 | 0 | 1     |\\n```",
      
      "*Exemplo em ciência de dados educacionais:* “O estudante está aprovado **se, e somente se**, a média final é maior ou igual a 7”.",

      "##Satisfação e falsificação",
      "Dizemos que uma atribuição de verdade **satisfaz** uma sentença quando essa sentença é avaliada como verdadeira sob aquela atribuição. Da mesma forma, uma atribuição **falsifica** uma sentença quando ela é avaliada como falsa.",
      
      "Uma atribuição satisfaz um **conjunto de sentenças** se satisfaz todas elas simultaneamente. Se falsificar ao menos uma, o conjunto como um todo não é satisfeito.",

      "Esses conceitos são centrais para atividades como:",
      
      "- verificação de consistência de regras\n- validação de modelos simbólicos\n- análise de hipóteses em ciência de dados\n- explicabilidade de sistemas baseados em regras",

      "Ao separar **forma lógica** de **conteúdo empírico**, a semântica torna possível automatizar o raciocínio, auditar decisões e construir sistemas de ciência de dados mais **transparentes, confiáveis e explicáveis**."
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
      "Esse processo é **mecânico** e **determinístico**. Ele não depende do significado “real” das proposições, apenas dos valores de verdade atribuídos e das regras semânticas da lógica.",

      "##Exemplo em ciência de dados",
      "Considere um cenário em um sistema educacional digital. Definimos:",
      "- **p**: o estudante concluiu a atividade\n- **q**: o estudante cometeu erro\n- **r**: o sistema registrou a interação no log",
      "Suponha a sentença lógica:",
      "```\\n(p ∨ q) ∧ (¬q ∨ r)\\n```",
      "Essa sentença pode ser lida informalmente como: “o estudante concluiu a atividade ou cometeu erro, e ou não cometeu erro ou a interação foi registrada”.",

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
      "Nesse caso, a sentença avalia como **falsa**. A mesma regra lógica, aplicada a valores diferentes, pode produzir resultados diferentes — e isso é central em ciência de dados: **a validade de uma regra depende do estado dos dados**, não da regra isoladamente.",

      "##Avaliação como processo computacional",
      "O custo da avaliação de uma sentença lógica é proporcional ao tamanho da própria sentença. Em termos práticos, isso significa que regras lógicas podem ser avaliadas de forma eficiente mesmo em sistemas computacionais.",
      "Além disso, existem otimizações naturais:",
      "- Em uma **conjunção** (∧), se um dos termos for falso, não é necessário avaliar os demais.\n- Em uma **disjunção** (∨), se um dos termos for verdadeiro, o resultado já está determinado.",
      "Esses princípios aparecem o tempo todo em filtros, validação de dados, motores de regras e sistemas de decisão baseados em lógica.",

      "##Avaliação e explicabilidade em ciência de dados",
      "Um aspecto particularmente importante da avaliação lógica é sua **transparência**. Diferentemente de muitos modelos estatísticos ou de aprendizado de máquina, o processo de avaliação lógica permite explicar exatamente **por que** uma condição foi considerada verdadeira ou falsa.",
      "Por esse motivo, a avaliação semântica de sentenças lógicas é útil em: sistemas baseados em regras, validação de dados, detecção de inconsistências, sistemas educacionais inteligentes e mecanismos de decisão explicáveis.",
      "Na próxima seção, vamos avançar para o conceito de **satisfatibilidade** (a existência ou não de atribuições de verdade que tornam uma sentença verdadeira)."
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
      "Essa sentença pode representar, por exemplo: “se o estudante concluiu a atividade ou cometeu erro, então ele cometeu erro e a interação foi registrada”.",

      "Ao avaliarmos essa sentença em todas as linhas da tabela-verdade, descartamos as atribuições que a tornam falsa e mantemos apenas aquelas que a satisfazem.",
      "O conjunto final de linhas restantes corresponde exatamente aos **cenários possíveis compatíveis com essa regra**.",

      "##Custo computacional da satisfatibilidade",
      "O principal problema do método de tabelas-verdade é seu **custo computacional**. O número de atribuições cresce exponencialmente com o número de proposições.",
      "Mesmo para problemas aparentemente simples, o número de cenários possíveis pode se tornar muito grande. Por exemplo, com apenas 16 proposições, existem **65.536 atribuições diferentes**.",

      "Por esse motivo, embora tabelas-verdade sejam excelentes para fins didáticos e problemas pequenos, elas se tornam impraticáveis em aplicações reais de ciência de dados.",

      "##Além das tabelas-verdade",
      "Em contextos reais, a satisfatibilidade é tratada por meio de **manipulação simbólica**, raciocínio lógico e algoritmos especializados, em vez da enumeração explícita de todos os cenários possíveis.",
      "Essas técnicas permitem verificar coerência, detectar inconsistências e analisar regras mesmo quando o espaço de possibilidades é enorme.",
      
      "A satisfatibilidade estabelece, assim, uma ponte direta entre **semântica**, **implicação lógica** e **provas**, preparando o terreno para métodos mais eficientes de raciocínio lógico em ciência de dados."
    ]
  },

  "cap1-sec5": {
    id: "cap1-sec5",
    title: "Exemplos",
    subtitle: "Linguagem Natural e Circuitos Digitais",
    paragraphs: [
      "Nesta seção, apresentamos exemplos clássicos de aplicação da **Lógica Proposicional** em dois contextos distintos (linguagem natural e circuitos digitais). O objetivo é mostrar como sentenças informais e sistemas físicos podem ser formalizados de maneira rigorosa, permitindo análise, verificação e inferência.",
      "Para garantir clareza conceitual, os exemplos a seguir foram cuidadosamente estruturados, explicitando o papel de cada símbolo proposicional e o significado lógico de cada sentença.",

      "##Exemplo 1 (Linguagem Natural)",
      "Considere três propriedades associadas a uma mesma pessoa (ou entidade analisada):",
      "- **c**: a pessoa é confiável;\n- **f**: a pessoa é flexível;\n- **p**: a pessoa é produtiva.",
      "Cada símbolo proposicional representa uma **afirmação atômica** que pode ser verdadeira ou falsa em um determinado cenário.",

      "**Frase 1:** Se uma pessoa é confiável ou flexível, então ela é produtiva.",
      "A presença de *se… então* indica uma **implicação**, e *ou* indica uma **disjunção**:",
      "```\\\n(c ∨ f) ⇒ p\n```",

      "**Frase 2:** Uma pessoa é produtiva somente se ela for confiável ou flexível.",
      "A expressão *somente se* indica que a condição aparece no consequente:",
      "```\\\np ⇒ (c ∨ f)\n```",

      "**Frase 3:** Uma pessoa é produtiva se, e somente se, ela for confiável ou flexível.",
      "A expressão *se, e somente se* indica uma **bicondicional**, que equivale à conjunção das duas implicações anteriores:",
      "```\\\np ⇔ (c ∨ f)\n```",

      "**Frase 4 (negação):** Não existe pessoa que seja confiável e flexível ao mesmo tempo.",
      "Reescrevendo como *não é o caso que uma pessoa seja confiável e flexível*, obtemos:",
      "```\\\n¬(c ∧ f)\n```",

      "Embora a expressão *não existe* sugira quantificação em lógica de primeira ordem, a tradução acima é adequada no contexto proposicional, pois **c** e **f** representam propriedades da mesma entidade.",

      "###Avaliação de um cenário",
      "Considere o seguinte cenário:",
      "- c = 1;\n- f = 1;\n- p = 1.",

      "Avaliação da primeira sentença:",
      "```\\\n(c ∨ f) ⇒ p\n(1 ∨ 1) ⇒ 1\n1 ⇒ 1\n1\n```",

      "Avaliação da segunda sentença:",
      "```\\\np ⇒ (c ∨ f)\n1 ⇒ (1 ∨ 1)\n1 ⇒ 1\n1\n```",

      "Avaliação da bicondicional:",
      "```\\\np ⇔ (c ∨ f)\n1 ⇔ 1\n1\n```",

      "Avaliação da negação:",
      "```\\\n¬(c ∧ f)\n¬(1 ∧ 1)\n¬1\n0\n```",

      "Nesse cenário, três sentenças são verdadeiras e uma é falsa. Isso mostra que **formalizar sentenças não garante sua veracidade** — a lógica permite justamente verificar a consistência entre regras e dados.",

      "##Exemplo 2 (Circuitos Digitais)",
      "A Lógica Proposicional é amplamente utilizada para modelar sistemas físicos determinísticos, como **circuitos digitais**. Cada nó do circuito pode estar ligado (1) ou desligado (0), o que se alinha naturalmente à semântica proposicional.",

      "###Definição dos símbolos",
      "Considere um circuito com:",
      "- **p, q, r**: entradas do circuito;\n- **o, a, b, s, c**: saídas intermediárias ou finais.",
      "Cada símbolo proposicional representa o estado (ligado ou desligado) de um nó específico.",

      "###Porta XOR (definição explícita)",
      "Uma porta **XOR** tem saída verdadeira **se, e somente se**, suas entradas forem diferentes. Esse comportamento é definido pela bicondicional:",
      "```\\\n((p ∧ ¬q) ∨ (¬p ∧ q)) ⇔ o\n```",
      "Essa sentença estabelece que a saída **o** é verdadeira **se, e somente se**, exatamente uma das entradas **p** ou **q** for verdadeira.",

      "###Demais componentes do circuito",
      "As demais portas e conexões do circuito podem ser definidas da seguinte forma:",
      "- **AND entre r e o, saída a**:",
      "```\\\nr ∧ o ⇔ a\n```",
      "- **AND entre p e q, saída b**:",
      "```\\\np ∧ q ⇔ b\n```",
      "- **XOR entre o e r, saída s**:",
      "```\\\n((o ∧ ¬r) ∨ (¬o ∧ r)) ⇔ s\n```",
      "- **OR entre a e b, saída final c**:",
      "```\\\na ∨ b ⇔ c\n```",

      "Cada sentença define explicitamente o comportamento lógico de uma porta, conectando entradas e saídas por meio de **bicondicionais**, garantindo uma descrição determinística e verificável do circuito.",

      "###Análise lógica do circuito",
      "Uma vez formalizado, o circuito pode ser analisado por meio de:",
      "- avaliação, para verificar o comportamento sob entradas específicas;\n- análise de satisfatibilidade;\n- verificação de conformidade com uma especificação;\n- diagnóstico de falhas lógicas.",

      "Esses exemplos mostram como a Lógica Proposicional atua como uma **ponte entre sistemas formais e sistemas reais**, sendo fundamental para ciência de dados, computação, engenharia e inteligência artificial."
    ],
  },



  "cap2-sec1": {
    id: "cap2-sec1",
    title: "Propriedades Lógicas das Sentenças",
    subtitle: "Capítulo 2",
    paragraphs: [
      "No capítulo anterior, vimos que uma mesma sentença pode ser verdadeira em alguns cenários e falsa em outros, dependendo da atribuição de valores às variáveis proposicionais. Aqui, vamos além: queremos classificar sentenças pelo seu comportamento ao longo de **todas** as atribuições possíveis.",
      "Essa classificação é útil para Ciência de Dados porque regras de validação, restrições e critérios de decisão precisam ser analisados não apenas em um caso observado, mas em termos do que eles permitem (ou impedem) em geral.",
      "A partir dessa perspectiva, as sentenças se organizam em três categorias mutuamente exclusivas, chamadas de **propriedades lógicas**: validade, insatisfatibilidade e contingência.",

      "###Sentenças válidas",
      "Uma sentença é **válida** quando é satisfeita por **todas** as atribuições de valores de verdade. Em termos práticos, isso significa que ela nunca falha, independentemente do cenário.",
      "Por exemplo:",
      "```\\\np ∨ ¬p\n```",
      "é válida: se **p** for verdadeiro, a disjunção é verdadeira; se **p** for falso, **¬p** é verdadeiro.",
      "Do ponto de vista aplicado, sentenças válidas se comportam como tautologias: não impõem restrições reais e, portanto, não ajudam a discriminar cenários ou detectar inconsistências.",

      "###Sentenças insatisfatíveis",
      "Uma sentença é **insatisfatível** quando nenhuma atribuição consegue torná-la verdadeira; ela falha em qualquer cenário possível.",
      "Considere:",
      "```\\\np ∧ ¬p\n```",
      "Não importa como o cenário seja definido: **p** não pode ser verdadeiro e falso ao mesmo tempo.",
      "Em aplicações, insatisfatibilidade indica contradição: regras incompatíveis, restrições impossíveis ou erros de modelagem.",

      "###Sentenças contingentes",
      "Uma sentença é **contingente** quando é verdadeira em alguns cenários e falsa em outros; seu valor depende efetivamente dos dados.",
      "Por exemplo:",
      "```\\\np ∧ q\n```",
      "é verdadeira quando **p** e **q** são verdadeiros e falsa quando pelo menos um deles é falso.",
      "Essas sentenças são as mais informativas, pois filtram cenários e distinguem situações aceitáveis de situações problemáticas.",

      "###Utilidade prática das propriedades lógicas",
      "Sob uma perspectiva empírica, sentenças válidas e insatisfatíveis parecem pouco úteis: as primeiras aceitam tudo; as segundas rejeitam tudo.",
      "Ainda assim, elas são importantes do ponto de vista lógico e computacional, pois servem como base para transformações corretas, simplificações e verificações automáticas.",

      "###Satisfatibilidade e falsificabilidade",
      "Para muitos propósitos, agrupamos essas propriedades em dois conceitos mais gerais.",
      "Uma sentença é **satisfatível** se existe pelo menos uma atribuição que a torna verdadeira (inclui válidas e contingentes).",
      "Uma sentença é **falsificável** se existe pelo menos uma atribuição que a torna falsa (inclui contingentes e insatisfatíveis).",
      "Essas noções ajudam a responder perguntas práticas como: *existe algum cenário em que esta regra funciona?* e *é possível violar esta restrição?*."
    ]
  },

  "cap2-sec2": {
    id: "cap2-sec2",
    title: "Equivalência Lógica",
    subtitle: "Capítulo 2",
    paragraphs: [
      "Dizemos que duas sentenças são equivalentes quando expressam a mesma ideia, ainda que escritas de formas diferentes. Em termos formais, isso significa que elas são verdadeiras exatamente nos mesmos cenários.",
      "Mais precisamente, uma sentença φ é **logicamente equivalente** a uma sentença ψ se, e somente se, toda atribuição que satisfaz φ também satisfaz ψ, e vice-versa. Assim, as duas sentenças aceitam e rejeitam exatamente os mesmos cenários.",
      
      "###Equivalência como identidade comportamental",
      "Considere:",
      "```\\\n¬(p ∨ q)\n```",
      "e",
      "```\\\n¬p ∧ ¬q\n```",
      "Ambas são verdadeiras somente quando **p** e **q** são falsos; nos demais casos, são falsas. Como são satisfeitas pelas mesmas atribuições, são logicamente equivalentes.",
      "Em termos aplicados, isso corresponde a duas regras de filtragem distintas que selecionam exatamente o mesmo subconjunto de registros.",
      
      "###Exemplo de não equivalência",
      "Considere:",
      "```\\\np ∧ q\n```",
      "e",
      "```\\\np ∨ q\n```",
      "A conjunção exige que ambas sejam verdadeiras; a disjunção exige apenas uma. Como os conjuntos de atribuições que as satisfazem diferem, elas não são equivalentes.",
      
      "###Verificando equivalência com tabelas-verdade",
      "Podemos testar equivalência com o **método da tabela-verdade**: listamos todas as atribuições possíveis, avaliamos as sentenças e comparamos coluna a coluna. Se os valores coincidirem em todas as linhas, há equivalência.",
      
      "###Exemplo com equivalência",
      "```\n| p | q | ¬(p ∨ q) | ¬p ∧ ¬q |\n|---|---|----------|----------|\n| 1 | 1 |    0     |    0     |\n| 1 | 0 |    0     |    0     |\n| 0 | 1 |    0     |    0     |\n| 0 | 0 |    1     |    1     |\n```",
      "As colunas coincidem em todas as linhas; portanto, as sentenças são equivalentes.",
      
      "###Exemplo com não equivalência",
      "```\n| p | q | p ∧ q | p ∨ q |\n|---|---|-------|-------|\n| 1 | 1 |   1   |   1   |\n| 1 | 0 |   0   |   1   |\n| 0 | 1 |   0   |   1   |\n| 0 | 0 |   0   |   0   |\n```",
      "As colunas diferem; portanto, não há equivalência.",
      
      "###Substituibilidade e reescrita de regras",
      "Uma propriedade central da equivalência é a **substituibilidade**: se φ ⇔ ψ, podemos trocar uma pela outra dentro de qualquer expressão proposicional sem alterar o comportamento lógico do sistema.",
      "Isso permite reescrever regras, simplificar expressões e otimizar validações, mantendo exatamente o mesmo conjunto de cenários aceitos. (Em lógicas mais expressivas, como a de predicados, essa substituição exige cuidados adicionais.)"
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
      "Considere:",
      "```\\\np\n```",
      "Ela implica:",
      "```\\\np ∨ q\n```",
      "pois sempre que **p** é verdadeiro, a disjunção também é, independentemente de **q**.",
      "Por outro lado, **p** não implica:",
      "```\\\np ∧ q\n```",
      "já que **q** pode ser falso.",

      "###Consequência lógica não é verdade empírica",
      "Se uma premissa não implica uma conclusão, isso não torna a conclusão falsa; apenas significa que ela não é garantida em todos os cenários. É possível que a conclusão seja verdadeira em um conjunto de dados específico, mas falhe em outro.",

      "###Conjuntos de premissas",
      "O conjunto:",
      "```\\\n{p, q}\n```",
      "implica:",
      "```\\\np ∧ q\n```",
      "pois qualquer atribuição que satisfaça **p** e **q** simultaneamente satisfaz a conjunção.",

      "###Verificando consequência lógica com tabelas-verdade",
      "O método da tabela-verdade pode ser usado para verificar consequência: avaliamos premissas e conclusão em todas as atribuições e verificamos se existe alguma linha em que as premissas sejam verdadeiras e a conclusão seja falsa.",

      "###Exemplo: p ⊨ (p ∨ q)",
      "```\n| p | q | p | p ∨ q |\n|---|---|---|-------|\n| 1 | 1 | 1 |   1   |\n| 1 | 0 | 1 |   1   |\n| 0 | 1 | 0 |   1   |\n| 0 | 0 | 0 |   0   |\n```",

      "###Exemplo: p ⊭ (p ∧ q)",
      "```\n| p | q | p | p ∧ q |\n|---|---|---|-------|\n| 1 | 1 | 1 |   1   |\n| 1 | 0 | 1 |   0   |\n| 0 | 1 | 0 |   0   |\n| 0 | 0 | 0 |   0   |\n```",
      "A segunda linha mostra a falha: a premissa é verdadeira e a conclusão é falsa.",

      "###Exemplo com múltiplas premissas",
      "```\n| p | q | p | q | p ∧ q |\n|---|---|---|---|-------|\n| 1 | 1 | 1 | 1 |   1   |\n| 1 | 0 | 1 | 0 |   0   |\n| 0 | 1 | 0 | 1 |   0   |\n| 0 | 0 | 0 | 0 |   0   |\n```",
      "A única atribuição que satisfaz ambas as premissas satisfaz também a conclusão; portanto, a consequência lógica vale.",

      "###Exemplo aplicado: inferência segura em regras",
      "Considere:",
      "```\\\nm ⇒ (p ∨ q)\np ⇒ q\n```",
      "Podemos concluir:",
      "```\\\nm ⇒ q\n```",
      "pois toda atribuição que satisfaz as duas premissas torna a conclusão verdadeira.",

      "###Consequência lógica versus equivalência",
      "Consequência lógica não é simétrica: φ ⊨ ψ não implica ψ ⊨ φ. A relação expressa inclusão de comportamentos (mais próxima de uma desigualdade do que de uma igualdade)."
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
      "Considere:",
      "```\\\np ∨ q\n```",
      "e",
      "```\\\n¬p ∨ ¬q\n```",
      "Elas são consistentes: por exemplo, com **p = 1** e **q = 0**, ambas ficam verdadeiras.",
      "Já:",
      "```\\\n¬p ∧ ¬q\n```",
      "não é consistente com **p ∨ q**, pois não existe cenário em que as duas sejam verdadeiras simultaneamente.",

      "###Verificando consistência com tabelas-verdade",
      "```\n| p | q | p ∨ q | ¬p ∨ ¬q | ¬p ∧ ¬q |\n|---|---|-------|---------|----------|\n| 1 | 1 |   1   |    0    |    0     |\n| 1 | 0 |   1   |    1    |    0     |\n| 0 | 1 |   1   |    1    |    0     |\n| 0 | 0 |   0   |    1    |    1     |\n```",
      "Há linhas em que **p ∨ q** e **¬p ∨ ¬q** são verdadeiras ao mesmo tempo, mas nenhuma em que **p ∨ q** e **¬p ∧ ¬q** coincidam como verdade.",

      "###Consistência não é equivalência nem consequência",
      "Duas sentenças podem ser consistentes sem serem equivalentes e sem que uma implique a outra. No exemplo anterior, **p ∨ q** e **¬p ∨ ¬q** coexistem em alguns cenários, mas não dizem a mesma coisa e não garantem uma à outra.",

      "###Consequência lógica sem consistência",
      "A consequência lógica pode ocorrer mesmo sem consistência quando alguma premissa é insatisfatível. Se uma sentença é insatisfatível, não existe atribuição que a satisfaça; por isso, ela implica logicamente qualquer conclusão (um caso de implicação vacuamente verdadeira).",
      "Isso mostra por que conjuntos inconsistentes são perigosos: deles é possível inferir qualquer coisa, tornando o raciocínio inútil.",

      "###Por que evitar inconsistência em Ciência de Dados",
      "Inconsistência costuma indicar regras incompatíveis, restrições impossíveis ou falhas de modelagem. Por isso, checar consistência é um passo fundamental antes de inferir, otimizar ou explicar regras."
    ]
  },

  "cap2-sec5": {
    id: "cap2-sec5",
    title: "Conexões entre Propriedades e Relações Lógicas",
    subtitle: "Capítulo 2",
    paragraphs: [
      "As propriedades lógicas (validade, satisfatibilidade, insatisfatibilidade) e as relações lógicas (equivalência, consequência, consistência) se conectam de forma direta. Essas conexões permitem reduzir perguntas sobre relações entre sentenças a perguntas sobre propriedades de sentenças compostas, o que facilita verificação automática.",

      "###Equivalência lógica e validade",
      "**Teorema da Equivalência:** φ e ψ são logicamente equivalentes se, e somente se,",
      "```\\\nφ ⇔ ψ\n```",
      "for válida.",

      "###Consequência lógica e validade",
      "**Teorema da Dedução:** φ ⊨ ψ se, e somente se,",
      "```\\\nφ ⇒ ψ\n```",
      "for válida. Para um conjunto finito {φ₁, …, φₙ}, temos {φ₁, …, φₙ} ⊨ ψ se, e somente se,",
      "```\\\n(φ₁ ∧ … ∧ φₙ) ⇒ ψ\n```",
      "for válida.",

      "###Consequência lógica e insatisfatibilidade",
      "**Teorema da Insatisfatibilidade:** Δ ⊨ φ se, e somente se,",
      "```\\\nΔ ∪ {¬φ}\n```",
      "for insatisfatível.",

      "###Consistência lógica e satisfatibilidade",
      "**Teorema da Consistência:** φ é consistente com ψ se, e somente se,",
      "```\\\nφ ∧ ψ\n```",
      "for satisfatível. Para {φ₁, …, φₙ}, φ é consistente com o conjunto se, e somente se,",
      "```\\\nφ₁ ∧ … ∧ φₙ ∧ φ\n```",
      "for satisfatível.",

      "###Nível lógico versus metanível",
      "Propriedades e relações são afirmações de **metanível** (falamos *sobre* sentenças). Já ∧, ∨, ⇒ e ⇔ pertencem à linguagem formal (usamos *dentro* das sentenças). O ponto central é que podemos representar relações do metanível indiretamente construindo sentenças compostas e verificando suas propriedades."
    ]
  },

  "cap2-sec6": {
    id: "cap2-sec6",
    title: "Reescritas por Equivalência",
    subtitle: "Capítulo 2",
    paragraphs: [
      "As conexões do capítulo permitem transformar um tipo de problema em outro equivalente. Por exemplo, para verificar a validade de",
      "```\\\nφ ⇒ ψ\n```",
      "podemos usar o Teorema da Dedução e verificar se φ ⊨ ψ. Isso foca a análise apenas nos cenários em que φ é verdadeira.",
      
      "###Reescrevendo sentenças em formas equivalentes",
      "Também podemos transformar um problema em outro do mesmo tipo reescrevendo sentenças por equivalência. Considere:",
      "```\\\n((¬p ∨ q) ⇒ (p ⇒ q)) ∧ q\n```",
      "Como ¬p ∨ q é equivalente a p ⇒ q, reescrevemos como:",
      "```\\\n((p ⇒ q) ⇒ (p ⇒ q)) ∧ q\n```",
      "A primeira parte é válida; **q** é contingente; logo, a sentença completa é contingente.",

      "###Equivalências lógicas fundamentais",
      "```\\\n¬¬φ ⇔ φ\n¬(φ ∧ ψ) ⇔ (¬φ ∨ ¬ψ)\n¬(φ ∨ ψ) ⇔ (¬φ ∧ ¬ψ)\n(φ ⇒ ψ) ⇔ (¬φ ∨ ψ)\n(φ ⇔ ψ) ⇔ (φ ⇒ ψ) ∧ (ψ ⇒ φ)\n```",
      "Essas equivalências são base para normalização e conversão para formas padronizadas, como a forma clausal.",

      "###Reescritas aplicadas a conjuntos de sentenças",
      "Também é possível reescrever conjuntos. Por exemplo,",
      "```\\\n{p, p ⇒ q}\n```",
      "é equivalente a",
      "```\\\n{p, q}\n```",
      "o que reduz redundância sem mudar o significado lógico.",

      "###Reescritas, provas e métodos automáticos",
      "Provas podem ser vistas como um caso especial desse processo: começamos com premissas e adicionamos consequências até obter a conclusão. A resolução segue a mesma ideia, adicionando consequências até produzir uma contradição explícita ao testar insatisfatibilidade."
    ]
  },

  "cap2-sec7": {
    id: "cap2-sec7",
    title: "Resumo do Capítulo",
    paragraphs: [
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Proposição | Afirmação que pode ser verdadeira ou falsa; unidade básica da lógica proposicional |\n| Conectivos lógicos | Operadores (¬, ∧, ∨, ⇒, ⇔) que combinam proposições em sentenças compostas |\n| Tabela-verdade | Enumeração de todas as atribuições possíveis para avaliar sentenças |\n| Tautologia (validade) | Sentença verdadeira em toda atribuição de valores-verdade |\n| Contradição | Sentença falsa em toda atribuição de valores-verdade |\n| Contingência | Sentença verdadeira em algumas atribuições e falsa em outras |\n| Satisfatibilidade | Existência de ao menos uma atribuição que torna a sentença verdadeira |\n| Equivalência lógica | Duas sentenças com os mesmos valores-verdade em toda atribuição |\n| Consequência lógica | Toda atribuição que satisfaz as premissas também satisfaz a conclusão |\n| Consistência lógica | Existência de atribuição que satisfaz todas as sentenças simultaneamente |\n| Forma Normal Conjuntiva | Conjunção de disjunções — base para resolução e SAT solvers |"
    ]
  },
    "id": "cap3",
    "title": "Inferência e Prova",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Em ciência de dados, raramente trabalhamos com verdades absolutas. Modelos preditivos geram **hipóteses**, pipelines de dados transformam premissas em conclusões, e sistemas de recomendação inferem preferências a partir de comportamentos observados. Em todos esses cenários, a mesma questão fundamental se repete: como podemos garantir que uma conclusão é válida a partir de um conjunto de dados e suposições?",
      "A lógica formal oferece uma resposta rigorosa a essa questão por meio dos conceitos de **inferência** e **prova**. Neste capítulo, exploraremos dois mecanismos complementares: as **provas diretas** e o sistema de **dedução natural de Fitch**. Ao longo do texto, traduziremos sistematicamente os conceitos lógicos para o vocabulário e os desafios típicos da ciência de dados.",
      "Considere um pipeline de decisão em produção: você tem regras de negócio (**premissas**), dados de entrada e precisa garantir que as saídas sejam corretas. Verificar essa corretude por enumeração exaustiva — equivalente a examinar todas as linhas de uma tabela-verdade — torna-se computacionalmente inviável quando o número de variáveis cresce. Métodos de prova oferecem um caminho alternativo: derivar a corretude de forma simbólica, em muito menos passos."
    ]
  },

  "cap3-sec1": {
    "id": "cap3-sec1",
    "title": "Esquemas de Axiomas e Regras de Inferência",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "## Esquemas de Axiomas",
      "Um **esquema de axioma** é uma expressão que satisfaz as regras gramaticais da linguagem, exceto pela presença de **metavariáveis** — variáveis que representam sentenças arbitrárias. Formalmente, uma instância de um esquema é obtida substituindo-se as metavariáveis por sentenças concretas de forma consistente.",
      "Para o cientista de dados, esquemas de axiomas funcionam como *templates de raciocínio*. Considere o esquema abaixo, em que φ e ψ são metavariáveis:",
      "```\nφ ⇒ (ψ ⇒ φ)\n```",
      "Este esquema diz que qualquer proposição que seja verdadeira continua verdadeira mesmo sob hipóteses adicionais. Em termos de modelagem, isso equivale a dizer que, se um modelo aprovou um cliente (φ), essa aprovação permanece válida mesmo que introduzamos condições extras (ψ). Instâncias concretas desse esquema incluem:",
      "- `aprovado ⇒ (idade_válida ⇒ aprovado)`\n- `não_fraude ⇒ (saldo_positivo ⇒ não_fraude)`\n- `(score_alto) ⇒ (histórico_limpo ⇒ score_alto)`",
      "Um esquema é **válido** se e somente se toda instância sua é uma **tautologia** — uma sentença verdadeira em qualquer atribuição de valores-verdade.",
      "## Regras de Inferência",
      "Uma **regra de inferência** é um padrão de raciocínio composto por premissas (acima de uma linha) e conclusões (abaixo da linha). Cada regra captura um passo logicamente válido. A regra mais fundamental é a **Eliminação da Implicação** (também chamada de *Modus Ponens*):",
      "```\nφ ⇒ ψ\nφ\n——————\nψ\n```",
      "```\n| Nome | Esquema | Analogia em Dados |\n| --- | --- | --- |\n| Reflexividade | φ ⇒ φ | Uma regra de negócio implica ela mesma |\n| Eliminação da Negação | ¬¬φ ⇒ φ | Não-não-fraude equivale a fraude |\n| Tautologia | φ ∨ ¬φ | Um cliente é aprovado ou não é aprovado |\n```",
      "Para o cientista de dados, essa regra é onipresente. Se temos a regra 'cliente com score > 700 recebe aprovação' e sabemos que o cliente X tem score = 750, podemos derivar que X recebe aprovação — sem precisar consultar toda a base de dados.",
      "#### Atenção: Aplicação Incorreta de Regras de Inferência",
      "Um erro comum é aplicar regras de inferência a subcomponentes de sentenças, e não a sentenças completas. Por exemplo: de `(p ⇒ q)` e `(p ⇒ r)`, não se pode inferir `(q ⇒ r)`. Esse erro aparece frequentemente em pipelines de dados quando se confunde **implicação** com condicional de filtragem. Sempre verifique que as premissas da regra correspondem a sentenças inteiras, não a partes delas.",
      "Além da Eliminação da Implicação, o sistema de Hilbert faz uso de três esquemas adicionais que funcionam como regras derivadas:",
      "- **Criação de Implicação (IC):** Se ψ é verdadeiro, então `(φ ⇒ ψ)` para qualquer φ.\n- **Distribuição de Implicação (ID):** `(φ ⇒ (ψ ⇒ χ))` implica `((φ ⇒ ψ) ⇒ (φ ⇒ χ))`.\n- **Reversão de Implicação (IR):** `(¬ψ ⇒ ¬φ)` implica `(φ ⇒ ψ)`.",
      "Esses três esquemas, combinados com a Eliminação da Implicação, são suficientes para provar qualquer **consequência lógica** expressável com os operadores de negação (¬) e implicação (⇒)."
    ]
  },

  "cap3-sec2": {
    "id": "cap3-sec2",
    "title": "Provas Diretas",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "### Definição Formal",
      "Uma **prova direta** de uma conclusão φ a partir de um conjunto de premissas Δ é uma sequência finita de sentenças que termina em φ, onde cada sentença é:",
      "- Uma **premissa** (membro de Δ);\n- Uma instância de um **esquema de axioma** válido; ou\n- O resultado da aplicação de uma **regra de inferência** a sentenças anteriores na sequência.",
      "A notação `Δ ⊢ φ` (lida como 'φ é provável a partir de Δ') indica que existe tal sequência. O conceito de **provabilidade** é distinto do de **implicação lógica** (`Δ ⊨ φ`). A implicação lógica é semântica — baseia-se em atribuições de valores-verdade. A provabilidade é sintática — baseia-se em manipulação simbólica.",
      "### Exemplo: Pipeline de Decisão de Crédito",
      "Considere um sistema de concessão de crédito com as seguintes regras formalizadas como premissas:",
      "- Premissa 1: `score_alto ⇒ pré_aprovado`\n- Premissa 2: `pré_aprovado ⇒ liberado`\n- Premissa 3: `(score_alto ⇒ liberado) ⇒ enviar_oferta`",
      "Queremos provar que, se um cliente tem score alto, devemos enviar uma oferta. A prova direta é a seguinte:",
      "```\n| Linha | Sentença | Justificativa |\n| --- | --- | --- |\n| 1 | score_alto ⇒ pré_aprovado | Premissa |\n| 2 | pré_aprovado ⇒ liberado | Premissa |\n| 3 | (score_alto ⇒ liberado) ⇒ enviar_oferta | Premissa |\n| 4 | score_alto ⇒ (pré_aprovado ⇒ liberado) | Criação de Implicação: 2 |\n| 5 | (score_alto ⇒ pré_aprovado) ⇒ (score_alto ⇒ liberado) | Distribuição de Implicação: 4 |\n| 6 | score_alto ⇒ liberado | Eliminação de Implicação: 5, 1 |\n| 7 | enviar_oferta | Eliminação de Implicação: 3, 6 |\n```",
      "Observe que a prova é uma sequência determinística: cada passo é justificado por premissas ou por passos anteriores. Isso é exatamente o que queremos de um sistema de decisão auditável em produção: uma cadeia de raciocínio rastreável.",
      "### Limitações das Provas Diretas",
      "Apesar de sua utilidade, as provas diretas têm uma limitação estrutural: elas não permitem fazer **suposições temporárias** dentro da prova. Toda sentença deve ser ou uma premissa ou derivada de premissas e axiomas anteriores. Isso significa que certos resultados — como provar implicações a partir de implicações — requerem passos auxiliares verbosos e contraintuitivos.",
      "O sistema de Fitch, apresentado a seguir, resolve essa limitação de maneira mais elegante através das **provas condicionais**."
    ]
  },

  "cap3-sec3": {
    "id": "cap3-sec3",
    "title": "O Sistema de Fitch e Dedução Natural",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "### Provas Condicionais",
      "O sistema de Fitch introduz o conceito de **prova condicional**: uma prova estruturada em subprovas aninhadas, onde é permitido fazer suposições temporárias. A ideia fundamental é simples: se, ao assumir φ, conseguimos derivar ψ, então podemos concluir `(φ ⇒ ψ)` fora da subprova.",
      "Essa operação é formalizada pela regra de **Introdução da Implicação (II)**:",
      "```\n[ φ (suposição)\n  ...\n  ψ ]\n-------------------\nφ ⇒ ψ\n```",
      "Para o cientista de dados, isso corresponde ao raciocínio hipotético tão comum na análise exploratória: *'Suponha que esta feature seja relevante. O que podemos concluir?'* Ao final, formalizamos a conclusão como uma implicação condicionada à hipótese.",
      "#### Regra de Escopo em Subprovas",
      "Uma restrição crítica das provas condicionais: sentenças derivadas dentro de uma subprova **não podem** ser usadas diretamente em subprovas externas. Elas só podem aparecer como antecedentes de implicações criadas pela regra II. Isso é análogo ao escopo de variáveis em programação: uma variável local não é acessível fora de sua função."
    ]
  },

  "cap3-sec4": {
    "id": "cap3-sec4",
    "title": "Regras de Inferência do Sistema de Fitch",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "O sistema de Fitch para lógica proposicional possui dez regras de inferência. Nove são regras ordinárias (aplicáveis diretamente a sentenças disponíveis); uma é condicional (a Introdução da Implicação).",
      "### Introdução e Eliminação da Conjunção (E)",
      "A **Introdução da Conjunção (EI)** permite derivar uma conjunção a partir de seus conjuntos. A **Eliminação da Conjunção (EE)** permite extrair cada conjunto de uma conjunção.",
      "```\nIntrodução:          Eliminação:\nφ₁                   φ₁ ∧ ... ∧ φₙ\n...                  -------------------\nφₙ                   φᵢ\n-------------------\nφ₁ ∧ ... ∧ φₙ\n```",
      "Exemplo em dados: Se temos `dados_completos` e `sem_outliers` e `sem_duplicatas`, podemos conjuntar tudo em `dataset_limpo`. E, dado `dataset_limpo`, podemos extrair qualquer um dos três atributos individualmente.",
      "### Introdução e Eliminação da Disjunção (OU)",
      "A **Introdução da Disjunção** permite inferir uma disjunção arbitrária a partir de qualquer um de seus disjuntos. Já a **Eliminação da Disjunção** é mais rica: se temos uma disjunção e sabemos que cada disjunto implica uma mesma conclusão, então podemos inferir essa conclusão.",
      "```\nIntrodução:          Eliminação:\nφᵢ                   φ₁ ∨ ... ∨ φₙ\n----------           φ₁ ⇒ ψ\nφ₁ ∨ ... ∨ φₙ       ...\n                     φₙ ⇒ ψ\n                     -------------------\n                     ψ\n```",
      "Exemplo em dados: Um cliente pode ser classificado como 'inadimplente' por score baixo (A) ou por histórico negativo (B). Se tanto A quanto B implicam `negar_crédito`, então, independentemente de qual condição disparou, a conclusão é `negar_crédito`.",
      "### Introdução e Eliminação da Negação",
      "A **Introdução da Negação** permite derivar `¬φ` se φ leva a uma contradição: se φ implica ψ e também implica `¬ψ`, então φ é falso. A **Eliminação da Negação** remove duplas negações.",
      "```\nIntrodução:          Eliminação:\nφ ⇒ ψ               ¬¬φ\nφ ⇒ ¬ψ              -----\n-----------          φ\n¬φ\n```",
      "Exemplo em dados: Suponha que uma hipótese de modelagem (φ) implica que a média da variável-alvo é simultaneamente maior que 0.5 (ψ) e menor que 0.5 (¬ψ). Isso é contraditório, logo a hipótese deve ser rejeitada (¬φ). Esse é o fundamento lógico dos testes de hipótese por absurdo.",
      "### Introdução e Eliminação da Implicação",
      "**Eliminação da Implicação** (*Modus Ponens*): Se `φ ⇒ ψ` e φ, então ψ. Esta é a regra mais usada em sistemas de inferência e em engines de regras de negócio.",
      "**Introdução da Implicação** (regra condicional): Se, dentro de uma subprova com suposição φ, derivamos ψ, então podemos concluir `(φ ⇒ ψ)` fora da subprova.",
      "### Introdução e Eliminação do Bicondicional",
      "O **bicondicional** `(φ ⇔ ψ)` é introduzido a partir de duas implicações opostas `(φ ⇒ ψ)` e `(ψ ⇒ φ)`. A eliminação extrai essas duas implicações de um bicondicional dado.",
      "Exemplo em dados: `cliente_premium ⇔ score > 800 ∧ sem_inadimplência` é um bicondicional típico de política de crédito. Da regra bidirecional, extraímos tanto 'se premium então score > 800 e sem_inadimplência' quanto o inverso.",
      "### Regras Auxiliares: False Introduction e False Elimination",
      "Para simplificar provas por contradição, o sistema de Fitch pode ser estendido com duas regras auxiliares:",
      "```\nFalse Introduction:     False Elimination:\nφ                       [ φ (suposição)\n¬φ                        ...\n------                    false ]\n false                  --------\n                        ¬φ\n```"
    ]
  },

  "cap3-sec5": {
    "id": "cap3-sec5",
    "title": "Exemplo Completo: Validação de Pipeline",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Para ilustrar o poder do sistema de Fitch, considere o seguinte cenário de ciência de dados: queremos provar que, se um conjunto de dados é considerado confiável, então ele é utilizável para treinamento, dado um conjunto de regras de qualidade.",
      "Formalizamos as premissas da seguinte forma:",
      "- `p`: Os dados são completos (sem valores faltantes críticos)\n- `p ⇒ q`: Dados completos implicam pré-processamento bem-sucedido\n- `q ⇒ r`: Pré-processamento bem-sucedido implica dados utilizáveis para treinamento",
      "Queremos provar `(p ⇒ r)`: se os dados são completos, então são utilizáveis para treinamento.",
      "```\n| Linha | Sentença | Justificativa |\n| --- | --- | --- |\n| 1 | p ⇒ q | Premissa |\n| 2 | q ⇒ r | Premissa |\n| 3 | p | Suposição (início de subprova) |\n| 4 | q | Eliminação de Impl.: 1, 3 |\n| 5 | r | Eliminação de Impl.: 2, 4 |\n| 6 | p ⇒ r | Introdução de Impl.: 3, 5 |\n```",
      "Observe a estrutura: nas linhas 1 e 2 estão as premissas. Na linha 3, abrimos uma subprova com a suposição `p`. Dentro da subprova (linhas 3–5), derivamos `r` aplicando as regras de eliminação da implicação em cadeia. Na linha 6, saímos da subprova com a Introdução da Implicação, concluindo `(p ⇒ r)` no nível externo.",
      "Esse padrão — supor o antecedente, derivar o consequente, concluir a implicação — é o esqueleto da maioria das provas de propriedades de pipelines. Em ciência de dados, ele aparece sempre que precisamos demonstrar que uma transformação preserva alguma propriedade do dado."
    ]
  },

  "cap3-sec6": {
    "id": "cap3-sec6",
    "title": "Dicas para Construir Provas",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Construir provas pode ser desafiador, especialmente para problemas complexos. A experiência prática revela um conjunto de heurísticas que aceleram o processo significativamente.",
      "### Trabalhar a Partir da Conclusão",
      "A estratégia mais eficaz frequentemente é raciocinar de trás para frente: olhar para a conclusão desejada e perguntar 'como posso chegar aqui?'. As regras a seguir guiam essa busca:",
      "- Se a conclusão tem a forma `(φ ⇒ ψ)`: suponha φ em uma subprova e tente derivar ψ. Use Introdução de Implicação para fechar.\n- Se a conclusão tem a forma `(φ ∧ ψ)`: prove φ e ψ separadamente e use Introdução de Conjunção.\n- Se a conclusão tem a forma `(φ ∨ ψ)`: prove qualquer um dos disjuntos e use Introdução de Disjunção.\n- Se a conclusão tem a forma `(¬φ)`: suponha φ e derive uma contradição; use Eliminação do False ou Introdução da Negação.",
      "### Explorar as Premissas",
      "Além de trabalhar a partir da conclusão, é útil examinar as premissas disponíveis:",
      "- Se há uma premissa `(φ ⇒ ψ)` e o objetivo é ψ: tente provar φ. Se bem-sucedido, use Eliminação da Implicação.\n- Se há uma premissa `(φ ∨ ψ)` e o objetivo é χ: prove `(φ ⇒ χ)` e `(ψ ⇒ χ)`; aplique Eliminação da Disjunção.\n- Se há uma premissa `(φ ∧ ψ)`: use Eliminação da Conjunção para extrair φ e ψ separadamente.",
      "### Provas por Contradição",
      "Quando nenhuma das abordagens anteriores funciona diretamente, a prova por contradição é uma alternativa poderosa. Para provar φ:",
      "- Assuma `¬φ` em uma subprova.\n- Derive uma contradição (qualquer sentença ψ e sua negação `¬ψ`).\n- Use *False Introduction* para derivar 'false' dentro da subprova.\n- Use *False Elimination* (ou Introdução da Negação) para concluir φ fora da subprova.",
      "Em ciência de dados, esse padrão aparece ao validar **hipóteses** nulas: assumimos que a hipótese nula é verdadeira e mostramos que ela leva a uma contradição com os dados observados — a base lógica do teste de hipótese estatístico."
    ]
  },

  "cap3-sec7": {
    "id": "cap3-sec7",
    "title": "Solidez e Completude",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "O valor prático de um sistema de prova depende de duas propriedades fundamentais que relacionam **provabilidade** sintática e **implicação lógica** semântica:",
      "Um sistema de prova é **sólido** (*sound*) se tudo que ele prova é de fato uma **consequência lógica**:",
      "```\nSe Δ ⊢ φ, então Δ ⊨ φ\n```",
      "Um sistema é **completo** (*complete*) se toda consequência lógica pode ser provada dentro do sistema:",
      "```\nSe Δ ⊨ φ, então Δ ⊢ φ\n```",
      "Tanto o sistema de Hilbert quanto o sistema de Fitch são sólidos e completos para a lógica proposicional. Isso significa que, para esses sistemas, provabilidade e implicação lógica são noções equivalentes: `Δ ⊢ φ` se e somente se `Δ ⊨ φ`.",
      "Para o cientista de dados, essa **equivalência** tem uma consequência prática importante:",
      "- Qualquer conclusão derivada na prova é de fato válida (**solidez** — sem falsos positivos lógicos).\n- Se uma propriedade é logicamente verdadeira, é possível em princípio construir uma prova para ela (**completude** — sem lacunas de cobertura)."
    ]
  },

  "cap3-sec8": {
    "id": "cap3-sec8",
    "title": "Aplicações em Ciência de Dados",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "### Verificação de Regras de Negócio",
      "Sistemas de decisão automatizada — como aprovação de crédito, detecção de fraude ou recomendação de produtos — frequentemente implementam dezenas ou centenas de regras de negócio. Garantir que essas regras sejam consistentes (sem contradições) e completas (sem casos não tratados) é um problema de verificação formal.",
      "Usando o sistema de Fitch, é possível:",
      "- Representar cada regra de negócio como uma **implicação** ou **bicondicional**.\n- Provar que determinadas combinações de regras nunca geram contradições.\n- Verificar que todas as categorias de entrada estão cobertas por alguma regra de saída.",
      "### Auditoria e Explicabilidade de Modelos",
      "Regulamentações como a LGPD (Lei Geral de Proteção de Dados) e o GDPR europeu exigem que decisões automatizadas sejam explicáveis. Uma prova formal oferece a forma mais rigorosa de explicação: uma cadeia de passos logicamente válidos que conecta as premissas (dados de entrada e regras) à conclusão (decisão do modelo).",
      "Cada linha de uma prova no sistema de Fitch é uma justificativa auditável. Isso é superior a abordagens de explicabilidade baseadas em importância de features (como SHAP ou LIME), que são aproximações estatísticas — não garantias formais.",
      "### Validação de Hipóteses em Análise de Dados",
      "Na análise exploratória, frequentemente construímos cadeias de raciocínio: *'Se a variável X é relevante e o modelo Y captura relações não-lineares, então o modelo Y com a variável X deve superar o baseline.'* Esse raciocínio pode ser formalizado como uma prova, tornando explícita cada suposição (premissa) e cada passo de **inferência**.",
      "Isso é especialmente útil em ciência de dados reproduzível: ao documentar não apenas o código, mas também o raciocínio lógico por trás das escolhas de modelagem, criamos artefatos que podem ser verificados e questionados por outros membros da equipe."
    ]
  },

  "cap3-sec9": {
    "id": "cap3-sec9",
    "title": "Resumo do Capítulo",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Neste capítulo, exploramos os fundamentos da **inferência** e da **prova** formal no contexto da ciência de dados.",
      "Vimos que:",
      "- **Esquemas de axiomas** funcionam como templates de raciocínio que geram sentenças válidas.\n- **Regras de inferência** descrevem padrões válidos de derivação.\n- **Provas diretas** encadeiam premissas, instâncias de axiomas e aplicações de regras.\n- O **sistema de Fitch** amplia o repertório com subprovas e suposições temporárias.\n- As dez regras do Fitch cobrem conjunção, disjunção, negação, implicação e bicondicional.\n- **Solidez** e **completude** garantem que provabilidade e consequência lógica coincidem.\n- As aplicações vão da verificação de regras de negócio à explicabilidade de modelos.",
      "No próximo capítulo, avançaremos para formas mais estruturadas de prova e para técnicas que tornam provas mais práticas quando a linguagem cresce."
    ]
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
    "subtitle": "Capítulo 4 — Sintaxe da Lógica Relacional",
    "paragraphs": [
      "Na Lógica Proposicional, o vocabulário é composto por constantes proposicionais. Na Lógica Relacional, o vocabulário é estruturado em três categorias distintas:",
      "- **Constantes de objeto**: representam entidades individuais do domínio. Por convenção, começam com letras que não sejam u, v, w, x, y, z ou com dígitos. Exemplos: `cliente_001`, `produto_42`, `regiao_sul`.\n- **Constantes de relação**: representam predicados ou propriedades. Cada constante de relação tem uma *aridade* — o número de argumentos que aceita. Exemplos: `ativo` (unário), `comprou` (binário), `transferiu` (ternário).\n- **Variáveis**: começam por letras do final do alfabeto (u, v, w, x, y, z). Funcionam como placeholders para objetos arbitrários do domínio. Exemplos: `x`, `y`, `cliente_var`.",
      "Um **vocabulário** é um conjunto finito e não vazio de constantes de objeto, um conjunto finito e não vazio de constantes de relação, e uma atribuição de aridade para cada constante de relação. Um **termo** é uma variável ou uma constante de objeto — os 'substantivos' da linguagem."
    ]
  },

  "cap4-sec2": {
    "id": "cap4-sec2",
    "title": "Três Tipos de Sentenças",
    "subtitle": "Capítulo 4 — Sintaxe da Lógica Relacional",
    "paragraphs": [
      "A Lógica Relacional possui três tipos de sentenças, que se combinam para formar expressões cada vez mais ricas:",
      "### Sentenças Relacionais (Átomos)",
      "Uma sentença relacional é formada por uma constante de relação n-ária seguida de n termos. É o elemento atômico da linguagem — o equivalente das constantes proposicionais, mas com estrutura interna. Exemplos:",
      "```\nativo(cliente_001)                    -- cliente_001 é um cliente ativo\ncomprou(joao, produto_42)             -- joao comprou produto_42\ntransferiu(alice, bob, valor_x)       -- alice transferiu valor_x para bob\n```",
      "### Sentenças Lógicas",
      "Sentenças lógicas são formadas combinando sentenças menores com os mesmos operadores da Lógica Proposicional: negação (~), conjunção (∧), disjunção (∨), implicação (⇒), e bicondicional (⇔). A sintaxe é idêntica — apenas os átomos são mais ricos.",
      "```\n~inadimplente(x)                      -- x não é inadimplente\nativo(x) ∧ sem_divida(x)              -- x é ativo E sem dívida\nscore_alto(x) ⇒ pre_aprovado(x)       -- score alto implica pré-aprovação\naprovado(x) ⇔ score_alto(x) ∧ ativo(x)  -- bicondicional de aprovação\n```",
      "### Sentenças Quantificadas",
      "Sentenças quantificadas são o grande diferencial da Lógica Relacional. Há dois tipos:",
      "- **Quantificador Universal** (para todo, ∀): afirma que todos os objetos do domínio satisfazem uma propriedade.\n- **Quantificador Existencial** (existe algum, ∃): afirma que pelo menos um objeto do domínio satisfaz uma propriedade.",
      "```\n∀x.(ativo(x) ⇒ score_valido(x))       -- todo cliente ativo tem score válido\n∃x.(score_alto(x) ∧ inadimplente(x))  -- existe cliente com score alto e inadimplente\n∀x.∃y.(comprou(x,y))                  -- todo cliente comprou algum produto\n∃y.∀x.(recomendado(x,y))              -- existe produto recomendado para todos\n```",
      "A ordem dos quantificadores é crítica. As duas últimas sentenças acima expressam conceitos radicalmente diferentes: a terceira diz que cada cliente tem seu próprio produto comprado (pode ser um produto diferente para cada um); a quarta diz que existe um único produto que é recomendado para todos os clientes simultaneamente.",
      "#### Precedência de Operadores na Lógica Relacional",
      "Os quantificadores têm precedência sobre os operadores lógicos. Isso significa que `∀x.p(x) ⇒ q(x)` é lido como `(∀x.p(x)) ⇒ q(x)`, e não como `∀x.(p(x) ⇒ q(x))`. Para aplicar um quantificador a uma sentença composta, use parênteses explicitamente: `∀x.(p(x) ⇒ q(x))`. Em ciência de dados, esse erro de parênteses é equivalente a um erro de escopo em programação — a variável quantificada não alcança a subexpressão desejada."
    ]
  },

  "cap4-sec3": {
    "id": "cap4-sec3",
    "title": "Variáveis Livres e Ligadas",
    "subtitle": "Capítulo 4 — Sintaxe da Lógica Relacional",
    "paragraphs": [
      "Uma ocorrência de variável é **ligada** se está dentro do escopo de um quantificador daquela variável; caso contrário, é **livre**. Uma sentença é **aberta** se tem variáveis livres, e **fechada** (ou sentença) caso contrário.",
      "```\n∃x.comprou(x, y)             -- x é ligada; y é livre ⇒ sentença aberta\n∀y.(∃x.comprou(x,y))         -- x e y são ambas ligadas ⇒ sentença fechada\nscore_alto(x)                -- x é livre ⇒ sentença aberta\n```",
      "Em ciência de dados, sentenças abertas correspondem a templates parametrizados de regras. Uma sentença aberta como `score_alto(x)` pode ser lida como uma função de x para um valor booleano — ela representa uma condição aplicável a qualquer cliente específico. Sentenças fechadas, por sua vez, fazem afirmações completas sobre o domínio, sem dependência de parâmetros externos.",
      "```\n| Tipo de Sentença | Definição | Analogia em Dados |\n|---|---|---|\n| Sentença ground | Sem variáveis | Registro específico: score_alto(cliente_007) |\n| Sentença aberta | Com variáveis livres | Template de regra: score_alto(x) |\n| Sentença fechada | Sem variáveis livres | Afirmação geral: ∀x.(ativo(x) ⇒ score_valido(x)) |\n```"
    ]
  },

  "cap4-sec4": {
    "id": "cap4-sec4",
    "title": "Base de Herbrand",
    "subtitle": "Capítulo 4 — Semântica",
    "paragraphs": [
      "A semântica da Lógica Relacional adotada aqui é chamada de **Semântica de Herbrand**, em homenagem ao lógico Jacques Herbrand. Sua ideia central é que o universo de discurso é exatamente o conjunto de constantes de objeto presentes no vocabulário — nada mais, nada menos.",
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
    "subtitle": "Capítulo 4 — Semântica",
    "paragraphs": [
      "Uma **atribuição de verdade** para uma linguagem relacional é uma função que mapeia cada sentença ground da base de Herbrand a um valor booleano (0 ou 1). Isso é exatamente análogo a uma linha de uma tabela-verdade na Lógica Proposicional — mas agora as 'proposições' têm estrutura interna (um predicado aplicado a constantes).",
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
      "Assim como na Lógica Proposicional, as sentenças da Lógica Relacional se dividem em três categorias exclusivas com base em seu comportamento perante todas as atribuições de verdade possíveis:",
      "```\n| Propriedade | Definição | Exemplo |\n|---|---|---|\n| Válida (tautologia) | Verdadeira em toda atribuição de verdade | ∀x.p(x) ⇒ ∃x.p(x) |\n| Contingente | Verdadeira em algumas, falsa em outras | ∃x.ativo(x) |\n| Insatisfatível | Falsa em toda atribuição de verdade | ∀x.(p(x) ∧ ~p(x)) |\n| Satisfatível | Verdadeira em ao menos uma atribuição | ativo(alice) ∧ ativo(bob) |\n```",
      "### Valididades Características da Lógica Relacional",
      "A Lógica Relacional herda todas as tautologias da Lógica Proposicional aplicadas a átomos ground, mas também possui valididades próprias envolvendo quantificadores. As mais importantes para a prática de ciência de dados são:",
      "#### Reversão de Quantificadores do Mesmo Tipo",
      "A ordem de quantificadores do mesmo tipo pode ser invertida sem alterar o valor de verdade. Isso é análogo a trocar a ordem de iteração em loops aninhados sobre o mesmo domínio:",
      "```\n∀x.∀y.q(x,y) ⇔ ∀y.∀x.q(x,y)    -- válido\n∃x.∃y.q(x,y) ⇔ ∃y.∃x.q(x,y)    -- válido\n```",
      "#### Distribuição Existencial",
      "Um existencial pode ser movido para dentro de um universal, mas o inverso não é válido. Essa assimetria é crucial:",
      "```\n∃y.∀x.q(x,y) ⇒ ∀x.∃y.q(x,y)    -- válido (o inverso NÃO é válido)\n\nInterpretação em dados:\n∃y.∀x.q(x,y): existe um produto recomendado para TODOS os clientes\n∀x.∃y.q(x,y): cada cliente tem ALGUM produto recomendado (pode ser diferente)\n```",
      "#### Distribuição da Negação sobre Quantificadores (Leis de De Morgan Quantificadas)",
      "A negação distribui sobre quantificadores invertendo seu tipo — uma generalização direta das leis de De Morgan da Lógica Proposicional:",
      "```\n~∀x.p(x) ≡ ∃x.~p(x)    -- não é verdade que todos são p ⇔ existe algum que não é p\n~∃x.p(x) ≡ ∀x.~p(x)    -- não existe nenhum p ⇔ todos não são p\n```",
      "Em ciência de dados, essa equivalência é extremamente útil para reformular restrições. 'Não existe registro com valor nulo em todas as colunas' é equivalente a 'para todo registro, existe ao menos uma coluna sem valor nulo'. As duas formulações expressam a mesma restrição de qualidade de dados, mas podem ser mais ou menos convenientes dependendo do contexto de implementação."
    ]
  },

  "cap4-sec7": {
    "id": "cap4-sec7",
    "title": "Relações Lógicas entre Sentenças",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Além das propriedades de sentenças individuais, a Lógica Relacional permite analisar relações entre pares (ou conjuntos) de sentenças. As três relações fundamentais — equivalência lógica, implicação lógica e consistência — têm as mesmas definições da Lógica Proposicional, mas se aplicam a um espaço de sentenças muito mais rico.",
      "### Equivalência Lógica",
      "Duas sentenças φ e ψ são logicamente equivalentes se e somente se toda atribuição de verdade que satisfaz φ também satisfaz ψ, e vice-versa. Denotamos φ ≡ ψ. Em ciência de dados, equivalências lógicas permitem reformular restrições e regras de negócio em formas mais convenientes para implementação, sem alterar seu significado.",
      "### Implicação Lógica",
      "Um conjunto de sentenças Δ implica logicamente uma sentença φ (Δ |= φ) se e somente se toda atribuição de verdade que satisfaz Δ também satisfaz φ. Exemplos importantes:",
      "```\n∃y.∀x.q(x,y) |= ∀x.∃y.q(x,y)    -- 'produto único p/ todos' implica 'produto p/ cada um'\n∀x.∀y.q(x,y) |= ∀x.∀y.q(y,x)    -- relação total implica sua simétrica\np(a) |= p(a) ∨ p(b)               -- fato específico implica disjunção\np(a), p(b) |= p(a) ∧ p(b)         -- dois fatos implicam sua conjunção\n```",
      "### Consistência",
      "Uma sentença φ é consistente com um conjunto Δ se existe ao menos uma atribuição de verdade que satisfaz simultaneamente Δ e φ. Em outras palavras, φ não contradiz as premissas em Δ.",
      "Em ciência de dados, a consistência é a propriedade relevante ao adicionar uma nova regra de negócio a um sistema existente: precisamos verificar que a nova regra não contradiz as regras já estabelecidas. Se a nova regra for inconsistente com as anteriores, o sistema não terá nenhuma atribuição de verdade válida — será impossível satisfazer todas as restrições simultaneamente."
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
      "Essas propriedades — decidibilidade e compacidade — distinguem a Lógica Relacional com vocabulário finito da Lógica de Primeira Ordem (que permite funções e vocabulários infinitos). Quando introduzimos termos funcionais (que geram vocabulários infinitos), perdemos a decidibilidade e, com ela, a garantia de provas finitas."
    ]
  },

  "cap4-sec10": {
    "id": "cap4-sec10",
    "title": "Resumo do Capítulo",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Neste capítulo, apresentamos a **Lógica Relacional** como uma extensão expressiva da Lógica Proposicional, capaz de lidar com afirmações sobre múltiplos objetos por meio de variáveis e quantificadores.",
      "- A **sintaxe** da Lógica Relacional organiza o vocabulário em constantes de objeto, constantes de relação e variáveis, e define três tipos de sentenças: relacionais, lógicas e quantificadas.\n- A **semântica de Herbrand** interpreta sentenças sobre um universo finito de constantes, permitindo avaliar sentenças quantificadas como conjunções (∀) ou disjunções (∃) sobre todas as instâncias.\n- As **propriedades lógicas** — validade, contingência, satisfatibilidade e insatisfatibilidade — se aplicam de forma análoga à Lógica Proposicional.\n- As **relações lógicas** — equivalência, implicação e consistência — permitem analisar interações entre sentenças e conjuntos de sentenças.\n- A Lógica Relacional com vocabulário finito é **expressivamente equivalente** à Lógica Proposicional via grounding, e portanto **decidível** e **compacta**.",
      "No próximo capítulo, avançaremos para métodos de prova que operam diretamente sobre sentenças quantificadas, sem necessidade de grounding completo."
    ]
  },


  cap5: {
    id: "cap5",
    title: "Validação e Modelos",
    subtitle: "Capítulo 5",
    paragraphs: [
      "Todo modelo de dados ou sistema de regras opera sobre um universo de possibilidades. A questão central da validação é: dentre todas as atribuições de verdade possíveis para as variáveis do sistema, quais satisfazem simultaneamente todas as restrições impostas? Esse é o problema de **model checking** — a verificação de modelos — e ele aparece em inúmeras situações práticas de ciência de dados.",
      "Considere um pipeline de ingestão de dados com dezenas de restrições de qualidade: unicidade de chaves, integridade referencial, valores dentro de faixas válidas, dependências entre colunas. Verificar que um determinado estado do dataset satisfaz todas essas restrições é exatamente um problema de verificação de modelos. Da mesma forma, ao projetar um experimento A/B, queremos garantir que a atribuição de usuários a grupos satisfaz restrições de balanceamento e exclusividade — outro problema de model checking.",
      "Neste capítulo, estudamos três abordagens progressivamente mais eficientes para verificação de modelos: o **método da tabela-verdade** (exaustivo, porém sempre correto), o **método de modelos booleanos** (propagação de restrições para redução do espaço de busca) e o **método de modelos não-booleanos** (representações compactas para restrições de unicidade e funcionalidade). Para cada método, apresentamos a teoria formal e um exemplo aplicado ao contexto de ciência de dados."
    ]
  },

  "cap5-sec1": {
    id: "cap5-sec1",
    title: "O Método da Tabela-Verdade",
    subtitle: "Capítulo 5",
    paragraphs: [
      "## Fundamentos",
      "O método mais direto de verificação de modelos é a enumeração exaustiva: construir a tabela-verdade completa para o vocabulário e verificar, linha a linha, quais atribuições satisfazem o conjunto de sentenças de interesse. Como vimos no capítulo anterior, para uma linguagem com *b* constantes de objeto e *m* constantes de relação de aridade *k*, a base de Herbrand tem *m · b^k* elementos, resultando em *2^(m · b^k)* linhas na tabela-verdade.",
      "Essa explosão combinatorial é a principal limitação do método: com apenas 10 objetos e 5 relações binárias, temos 2⁵⁰⁰ possíveis atribuições de verdade — um número astronômico, inteiramente inviável para enumeração direta. Ainda assim, o método é conceitualmente fundamental e serve como referência de corretude para os métodos mais eficientes.",

      "## Exemplo: Verificação de Implicação Lógica",
      "Considere um vocabulário com dois objetos {a, b} e duas relações unárias p e q. Queremos verificar se as premissas abaixo implicam logicamente a conclusão ∃x.q(x):",
      "```\nPremissa 1: p(a) ∨ p(b) — ao menos um dos objetos satisfaz p\nPremissa 2: ∀x.(p(x) ⇒ q(x)) — todo objeto que satisfaz p também satisfaz q\nConclusão: ∃x.q(x) — existe algum objeto que satisfaz q\n```",
      "A tabela-verdade completa para esse problema tem 2⁴ = 16 linhas (quatro átomos ground: p(a), p(b), q(a), q(b)). A implicação lógica é verificada se e somente se toda linha que satisfaz ambas as premissas também satisfaz a conclusão:",
      "```\n| p(a) | p(b) | q(a) | q(b) | P1: p(a)∨p(b) | P2: ∀x(p⇒q) | C: ∃x.q(x) |\n| --- | --- | --- | --- | --- | --- | --- |\n| 1 | 1 | 1 | 1 | 1 | 1 | 1 |\n| 1 | 1 | 1 | 0 | 1 | 0 | 1 |\n| 1 | 1 | 0 | 1 | 1 | 0 | 1 |\n| 1 | 1 | 0 | 0 | 1 | 0 | 0 |\n| 1 | 0 | 1 | 1 | 1 | 1 | 1 |\n| 1 | 0 | 1 | 0 | 1 | 1 | 1 |\n| 1 | 0 | 0 | 1 | 1 | 0 | 1 |\n| 1 | 0 | 0 | 0 | 1 | 0 | 0 |\n| 0 | 1 | 1 | 1 | 1 | 1 | 1 |\n| 0 | 1 | 0 | 1 | 1 | 1 | 1 |\n| 0 | 0 | 1 | 1 | 0 | 1 | 1 |\n| 0 | 0 | 0 | 0 | 0 | 1 | 0 |\n```",
      "As linhas em que ambas as premissas são verdadeiras (P1=1 e P2=1) são as linhas 1, 5, 6, 9 e 10 da tabela completa. Em todas elas, a conclusão também é verdadeira. Portanto, as premissas implicam logicamente a conclusão.",

      "## Complexidade e Limitações Práticas",
      "A complexidade do método da tabela-verdade é exponencial no tamanho da base de Herbrand. Para problemas de ciência de dados reais, com milhares de atributos e registros, o método direto é inviável. O valor do método é duplo: (1) ele serve como fundamento teórico para os métodos mais eficientes, e (2) para problemas pequenos — como validação de lógica de regras de negócio com poucos objetos — ele é perfeitamente aplicável.",
      "Em ciência de dados, esse tipo de verificação aparece ao validar regras de derivação em pipelines: *'Se todo registro com flag X recebe tratamento Y, e existe ao menos um registro com flag X, então existe ao menos um registro com tratamento Y.'* A tabela-verdade garante formalmente que essa conclusão é inevitável, independentemente de qualquer dado específico."
    ]
  },

  "cap5-sec2": {
    id: "cap5-sec2",
    title: "Modelos Booleanos: Propagação de Restrições",
    subtitle: "Capítulo 5",
    paragraphs: [
      "## A Ideia Central",
      "O método de modelos booleanos explora uma propriedade fundamental de muitos problemas práticos: as restrições não são todas independentes. Cada restrição que se torna determinada (tem valor de verdade fixo) pode propagar informação para outras restrições, eventualmente determinando o valor de verdade de átomos que ainda não foram fixados. Esse processo é chamado de **propagação de restrições** ou **unit propagation**.",
      "O algoritmo é incremental: partimos de uma tabela vazia (todos os valores indeterminados), aplicamos as restrições mais simples primeiro (aquelas que determinam diretamente o valor de um único átomo), e usamos as conclusões derivadas para simplificar as restrições restantes. Em muitos casos práticos, esse processo converge para uma solução única sem necessidade de tentativa e erro.",
      "```\n| Objetos (b) | Relações binárias (m) | Átomos ground | Linhas na tabela |\n| --- | --- | --- | --- |\n| 2 | 2 | 8 | 256 |\n| 3 | 2 | 18 | 262.144 |\n| 5 | 3 | 75 | ~3,78 × 10²² |\n| 10 | 5 | 500 | ~3,27 × 10¹⁵⁰ |\n```",

      "## Exemplo Detalhado: Validação de Atribuição em Dataset",
      "Para ilustrar o método de forma sistemática, considere um cenário de atribuição de analistas a projetos em uma equipe de dados. Temos quatro analistas (alice, bob, carol, dana) e uma relação binária trabalha_em(analista, projeto). As restrições do problema são:",
      "- 1. alice trabalha no projeto alpha.\n- 2. bob não trabalha no projeto beta.\n- 3. dana não trabalha no projeto alpha.\n- 4. Todo analista que trabalha no projeto alpha também trabalha no beta: ∀x.(trabalha_em(x,alpha) ⇒ trabalha_em(x,beta)).\n- 5. carol ou dana trabalha no projeto gamma.\n- 6. alice e bob não trabalham no projeto gamma.\n- 7. Nenhum analista trabalha em mais de um projeto simultaneamente.",
      "Iniciamos com uma tabela de atribuição vazia, onde cada célula representa o valor de verdade do átomo trabalha_em(analista, projeto):",

      "#### Passo 0 — Tabela inicial (todos os valores indeterminados)",
      "```\n| | Alpha | Beta | Gamma |\n| --- | --- | --- | --- |\n| Alice | ? | ? | ? |\n| Bob | ? | ? | ? |\n| Carol | ? | ? | ? |\n| Dana | ? | ? | ? |\n```",

      "#### Passo 1 — Aplicar restrições unitárias (1, 2, 3 e 6)",
      "As restrições 1, 2, 3 e 6 são unitárias: determinam diretamente o valor de um único átomo. Preenchemos imediatamente:",
      "```\n| | Alpha | Beta | Gamma |\n| --- | --- | --- | --- |\n| Alice | 1 | ? | 0 |\n| Bob | ? | 0 | 0 |\n| Carol | ? | ? | ? |\n| Dana | 0 | ? | ? |\n```",

      "#### Passo 2 — Propagar restrição 4 (universal: alpha ⇒ beta)",
      "A restrição 4 diz que todo analista em alpha também está em beta. Alice está em alpha (valor 1), portanto alice também deve estar em beta. Propagamos:",
      "```\n| | Alpha | Beta | Gamma |\n| --- | --- | --- | --- |\n| Alice | 1 | 1 | 0 |\n| Bob | ? | 0 | 0 |\n| Carol | ? | ? | ? |\n| Dana | 0 | ? | ? |\n```",

      "#### Passo 3 — Aplicar restrição 7 (nenhum analista em mais de um projeto)",
      "Alice já está em alpha e beta. Pela restrição 7, ela não pode estar em gamma (já determinado como 0 pela restrição 6 — consistente). Para os demais analistas, continuamos propagando.",

      "#### Passo 4 — Propagar restrição 5 (carol ou dana em gamma)",
      "A restrição 5 diz que carol ou dana trabalha em gamma. Como bob não está em gamma (0) e alice não está em gamma (0), a restrição 5 restringe a escolha a carol ou dana.",
      "Neste ponto, o método sinalizaria que o problema ainda tem ambiguidade residual (carol e dana em gamma, e bob e carol em alpha). Em muitas aplicações práticas, essa ambiguidade é suficiente para responder à pergunta de interesse — por exemplo, *'alice trabalha em beta?'* já foi determinado como verdadeiro sem necessidade de resolver toda a atribuição.",

      "## Exemplo Completo: Consistência de Regras de Negócio",
      "Considere agora um cenário mais próximo de produção: um sistema de aprovação de crédito com três clientes (x1, x2, x3) e três relações unárias: score_alto, historico_limpo, aprovado. As regras de negócio são:",
      "```\nR1: score_alto(x1) — x1 tem score alto (fato)\nR2: ~historico_limpo(x2) — x2 não tem histórico limpo (fato)\nR3: ~aprovado(x3) — x3 não é aprovado (fato)\nR4: ∀x.(score_alto(x) ⇒ aprovado(x)) — score alto ⇒ aprovação\nR5: ∀x.(~historico_limpo(x) ⇒ ~aprovado(x)) — sem histórico ⇒ negação\nR6: ∃x.aprovado(x) — existe ao menos um aprovado\n```",
      "Iniciamos a propagação:",
      "- De R1 e R4: score_alto(x1) = 1 e a regra R4 determinam aprovado(x1) = 1.\n- De R2 e R5: ~historico_limpo(x2) = 1 e a regra R5 determinam aprovado(x2) = 0.\n- De R3: aprovado(x3) = 0 diretamente.\n- De R6: ∃x.aprovado(x) = 1. Como aprovado(x1) = 1, o existencial é satisfeito.",
      "O sistema é consistente: existe exatamente uma atribuição (para os átomos determinados) que satisfaz todas as regras. A resposta às perguntas de interesse — *'x1 é aprovado?'*, *'existe algum aprovado?'* — foram respondidas sem nenhuma busca exaustiva, apenas por propagação direta de restrições.",
      "Uma propriedade fundamental do método de modelos booleanos é que ele pode ser usado mesmo quando não existe um único modelo. Se a propriedade de interesse é determinada antes de resolver toda a ambiguidade, já temos a resposta — sem precisar enumerar todos os modelos possíveis. Em ciência de dados, isso é análogo a **early stopping** em validação: paramos assim que temos informação suficiente para a decisão."
    ]
  },

  "cap5-sec3": {
    id: "cap5-sec3",
    title: "Modelos Não-Booleanos: Representações Compactas",
    subtitle: "Capítulo 5",
    paragraphs: [
      "## Limitações da Representação Booleana",
      "O método de modelos booleanos trata cada átomo ground como uma variável binária independente. Essa representação é adequada para a maioria dos problemas, mas é ineficiente quando as restrições do problema impõem que cada relação seja funcional — ou seja, quando cada objeto deve ser mapeado a exatamente um valor.",
      "Considere, por exemplo, uma restrição de atribuição exclusiva: cada tarefa deve ser atribuída a exatamente um analista. Em termos booleanos, isso significa que, para cada tarefa t, exatamente um dos átomos atribuido(t, a1), atribuido(t, a2), ..., atribuido(t, an) é verdadeiro. Com *n* analistas e *m* tarefas, há *n·m* variáveis booleanas, mas as restrições de unicidade eliminam a grande maioria das *2^(n·m)* combinações possíveis.",
      "Em vez de representar cada átomo ground como uma variável booleana independente, podemos representar uma relação funcional como uma variável com domínio finito. Se cada tarefa pode ser atribuída a um de *n* analistas, representamos a atribuição de cada tarefa como uma variável com *n* possíveis valores — reduzindo o espaço de *n·m* variáveis booleanas para *m* variáveis com domínio de tamanho *n*. Para m=5, n=4: booleano = 2²⁰ ≈ 10⁶; não-booleano = 4⁵ = 1024. Uma redução dramática.",

      "## Formalização: Restrições de Funcionalidade",
      "Uma relação é funcional em seu primeiro argumento se para cada valor do primeiro argumento existe no máximo um valor do segundo argumento para o qual a relação é verdadeira.",
      "Formalmente:",
      "```\nFuncionalidade: ∀x.∀y.∀z.(rel(x,y) ∧ rel(x,z) ⇒ same(y,z))\n\nOnde same é a relação de identidade: same(a,b) é verdadeira se e somente se a e b\nsão a mesma constante de objeto.\n```",
      "Com essa restrição, a relação rel se comporta como uma função: dado o primeiro argumento, o segundo é determinado de forma única.",

      "## Exemplo Aplicado: Alocação de Modelos de Machine Learning",
      "Considere um problema de alocação: temos quatro datasets (d1, d2, d3, d4) e quatro modelos de ML (regressão, árvore, rede_neural, ensemble). Cada dataset deve ser alocado a exatamente um modelo para treinamento. Usamos a relação binária alocado(dataset, modelo), com a restrição de funcionalidade:",
      "```\n∀d.∀m1.∀m2.(alocado(d,m1) ∧ alocado(d,m2) ⇒ same(m1,m2)) — funcionalidade\n∀d.∃m.alocado(d,m) — totalidade\n\nRestrições adicionais do problema:\nalocado(d1, regressão) — d1 usa regressão (fato inicial)\nalocado(d3, árvore) — d3 usa árvore (fato inicial)\n~alocado(d2, regressão) — d2 não pode usar regressão\n~alocado(d4, rede_neural) — d4 não pode usar rede_neural\n```",
      "Em vez de rastrear 4 × 4 = 16 variáveis booleanas, representamos o estado como quatro variáveis com domínio {regressão, árvore, rede_neural, ensemble}:",
      "```\n| Dataset | Modelo Alocado | Estado |\n| --- | --- | --- |\n| d1 | regressão | Determinado (fato) |\n| d2 | ? (não regressão) | Parcialmente determinado |\n| d3 | árvore | Determinado (fato) |\n| d4 | ? (não rede_neural) | Parcialmente determinado |\n```",
      "A propagação continua: como d1 usa regressão e d3 usa árvore, e cada modelo só pode ser alocado a um dataset (supondo alocação bijetiva), os modelos regressão e árvore ficam indisponíveis para d2 e d4.",
      "- d2 deve ser alocado a rede_neural ou ensemble.\n- d4 não pode usar rede_neural, logo d4 deve usar ensemble ou regressão (mas regressão está alocado). Logo d4 usa ensemble.\n- Portanto d2 usa rede_neural.",
      "A solução única é encontrada por propagação, sem nenhuma busca: d1=regressão, d2=rede_neural, d3=árvore, d4=ensemble. O espaço de busca efetivo foi apenas 4⁴ = 256 combinações (modelo não-booleano), versus 2¹⁶ = 65536 (modelo booleano puro)."
    ]
  },

  "cap5-sec4": {
    id: "cap5-sec4",
    title: "Verificação de Modelos na Prática",
    subtitle: "Capítulo 5",
    paragraphs: [
      "## SAT Solvers e SMT Solvers",
      "Os métodos de verificação de modelos estudados neste capítulo são os fundamentos teóricos de uma classe importante de ferramentas computacionais: os **SAT solvers** (para satisfatibilidade booleana) e os **SMT solvers** (Satisfiability Modulo Theories, para satisfatibilidade com teorias adicionais como aritmética ou igualdade).",
      "Ferramentas como Z3 (Microsoft Research), CVC5 e MiniSAT implementam versões altamente otimizadas dos algoritmos de propagação de restrições, estendidos com técnicas de backtracking inteligente (DPLL, CDCL). Elas são capazes de resolver instâncias com milhões de variáveis em segundos — um salto quantitativo impressionante sobre a enumeração exaustiva, mas construído sobre os mesmos princípios lógicos estudados aqui.",
      "Aplicações de SAT/SMT em Ciência de Dados:",
      "- **Verificação de hiperparâmetros**: garantir que combinações de hiperparâmetros satisfazem restrições de compatibilidade antes de executar o grid search.\n- **Otimização de pipelines**: determinar se existe uma ordenação de etapas de um pipeline que satisfaz todas as dependências e restrições de recursos.\n- **Detecção de inconsistências em schemas**: verificar automaticamente se um schema de banco de dados contém restrições contraditórias.\n- **Geração de dados sintéticos**: gerar registros que satisfazem um conjunto especificado de restrições lógicas — útil para testes de software e balanceamento de datasets.",

      "## Restrições como Especificações Executáveis",
      "Uma perspectiva poderosa é tratar restrições lógicas como especificações executáveis do comportamento esperado de um sistema de dados. Nessa visão, o processo de verificação de modelos não é apenas uma ferramenta de análise — é uma forma de documentação formal que pode ser verificada automaticamente.",
      "Ferramentas de qualidade de dados como **Great Expectations**, **dbt tests** e **Pandera** implementam, em essência, um subconjunto das técnicas de verificação de modelos estudadas neste capítulo. Cada 'expectativa' ou 'teste' é uma restrição lógica; o processo de validação é a verificação de que o dataset atual (o modelo) satisfaz esse conjunto de restrições.",
      "```\n-- Restrição formal (Lógica Relacional):\n∀x.(registro(x) ⇒ ~nulo(x, coluna_id)) — nenhum registro tem ID nulo\n\n-- Implementação em Great Expectations (Python):\n# expect_column_values_to_not_be_null('id')\n\n-- Restrição formal:\n∀x.∀y.(registro(x) ∧ registro(y) ∧ mesmo_id(x,y) ⇒ mesmo_registro(x,y))\n\n-- Implementação em dbt:\n# tests: - unique (sobre a coluna id)\n```",
      "A correspondência entre restrições lógicas formais e implementações práticas não é apenas pedagógica: ela permite que cientistas de dados raciocinem sobre a completude e consistência de seus testes, identifiquem restrições redundantes, e detectem casos não cobertos pelos testes existentes.",

      "## Propagação de Restrições em Feature Engineering",
      "Outra aplicação direta da propagação de restrições é o processo de feature engineering guiado por restrições. Em muitos domínios, as features não são independentes: restrições de negócio implicam relações lógicas entre elas que podem ser exploradas para derivar novas features ou detectar inconsistências.",
      "Por exemplo, em um dataset de transações financeiras:",
      "```\nR1: ∀x.(tipo_pix(x) ⇒ ~tipo_boleto(x)) — transação não pode ser pix E boleto\nR2: ∀x.(valor_alto(x) ⇒ requer_autorizacao(x)) — alto valor requer autorização\nR3: ∀x.(internacional(x) ⇒ ~tipo_pix(x)) — pix não existe para trans. internacionais\n\nDado: transação t com tipo_pix(t)=1 e internacional(t)=1\nPropagação de R3: ~tipo_pix(t) ⇒ CONTRADIÇÃO com tipo_pix(t)=1\nConclusão: o registro contém uma inconsistência — deve ser sinalizado para revisão.\n```",
      "Esse processo de detecção de inconsistências por propagação é o que sistemas de monitoramento de dados fazem continuamente em produção. A base lógica formal garante que nenhuma inconsistência coberta pelas restrições passa despercebida."
    ]
  },

  "cap5-sec5": {
    id: "cap5-sec5",
    title: "Resumo",
    subtitle: "Capítulo 5",
    paragraphs: [
      "**Verificação de modelos (model checking)**: determinar quais atribuições de verdade satisfazem um conjunto de sentenças — o problema central de validação em sistemas lógicos.",
      "**Método da tabela-verdade**: enumeração exaustiva de todas as 2ⁿ atribuições possíveis. Correto, porém exponencial — inviável para problemas grandes.",
      "**Método de modelos booleanos**: propagação incremental de restrições. Cada restrição unitária determina um átomo e simplifica as demais restrições. Converge sem busca exaustiva em muitos casos práticos.",
      "**Propriedade chave da propagação**: a resposta a uma pergunta específica pode ser determinada antes de resolver toda a ambiguidade do modelo.",
      "**Modelos não-booleanos**: para relações funcionais (cada objeto mapeado a um único valor), representar cada objeto como uma variável com domínio finito reduz o espaço de busca de 2^(n·m) para nⁿ.",
      "**Restrições de funcionalidade**: ∀x.∀y.∀z.(rel(x,y) ∧ rel(x,z) ⇒ same(y,z)) formalizam relações funcionais.",
      "**Conexão com ferramentas**: SAT/SMT solvers, Great Expectations, dbt tests e Pandera implementam versões dessas técnicas em escala industrial."
    ]
  },


  "cap6": {
    id: "cap6",
    title: "Resolução Automática",
    subtitle: "Capítulo 6",
    paragraphs: [
      "Os métodos de prova estudados nos capítulos anteriores — o sistema de Hilbert e o sistema de Fitch — são poderosos, mas exigem que o humano guie cada passo da derivação: escolher qual regra aplicar, a quais sentenças, em que ordem. Para problemas de pequeno porte, isso é gerenciável. Para sistemas de dados com centenas de regras de negócio ou pipelines com dezenas de restrições encadeadas, o processo manual se torna inviável.",
      "O **Princípio da Resolução** oferece uma solução elegante: uma única regra de inferência que, aplicada sistematicamente, é suficiente para verificar qualquer propriedade lógica expressável — sem necessidade de axiomas adicionais ou de guia humano nos passos intermediários. Esse é o fundamento teórico dos modernos motores de inferência automática, dos SAT solvers e dos sistemas de verificação formal utilizados em produção.",
      "Neste capítulo, estudamos a Resolução em duas versões progressivamente mais ricas: primeiro para a Lógica Proposicional (Seções 6.2 a 6.5), depois estendida para a Lógica Relacional com o uso de unificação (Seções 6.6 a 6.10). Em cada versão, cobrimos a forma clausal, a regra de inferência, o raciocínio por refutação, a extração de respostas e as estratégias de otimização. Ao longo do capítulo, ancoramos cada conceito em exemplos aplicados à ciência de dados."
    ]
  },

  "cap6-sec1": {
    id: "cap6-sec1",
    title: "Forma Clausal",
    subtitle: "6.2 — Literais, Cláusulas e Conversão",
    paragraphs: [
      "### Literais, Cláusulas e Conjuntos de Cláusulas",
      "O Princípio da Resolução opera exclusivamente sobre expressões em **forma clausal**. Antes de aplicar a regra, todas as premissas e conclusões devem ser convertidas para esse formato. As definições são:",
      "- **Literal**: uma sentença atômica ou sua negação. Exemplos: `score_alto(x)`, `~inadimplente(cliente_7)`, `p(a,b)`.\n- **Cláusula**: um conjunto de literais, interpretado como sua disjunção. Exemplo: `{~p(x), q(x)}` representa `p(x) ⇒ q(x)`.\n- **Cláusula vazia {}**: disjunção de zero literais — sempre falsa. Sua derivação sinaliza uma contradição no conjunto de premissas.\n- **Conjunto de cláusulas**: um conjunto de cláusulas, interpretado como sua conjunção.",
      "A tradução entre a notação habitual e a forma clausal é direta para literais e disjunções. Para implicações, usamos a equivalência `(φ ⇒ ψ) ≡ (~φ ∨ ψ)`, que transforma a implicação em uma cláusula de dois literais. Isso é fundamental: a maioria das regras de negócio e restrições de pipelines tem a forma de implicação, e a forma clausal as representa compactamente.",
      "```\n| Sentença Original | Forma Clausal | Interpretação |\n|---|---|---|\n| p | {p} | p é verdadeiro |\n| ~p | {~p} | p é falso |\n| p ∨ q | {p, q} | p ou q |\n| p ⇒ q | {~p, q} | se p então q |\n| p ⇔ q | {~p, q} e {p, ~q} | p se e somente se q |\n| p ∧ q | {p} e {q} | dois fatos separados |\n| {} | {} | contradição (cláusula vazia) |\n```",
      "### Procedimento de Conversão para a Forma Clausal",
      "Qualquer sentença proposicional pode ser convertida para um conjunto equivalente de cláusulas seguindo quatro passos em ordem. Os passos são aplicados de forma mecânica e sempre terminam em tempo finito.",
      "```\n| Passo | Operação e Regras |\n|---|---|\n| I — Impl. | Eliminar ⇒ e ⇔: (φ⇒ψ) → (~φ ∨ ψ); (φ⇔ψ) → (~φ ∨ ψ) ∧ (φ ∨ ~ψ) |\n| N — Neg. | Mover negações para dentro: ~~φ→φ; ~(φ∧ψ)→(~φ ∨ ~ψ); ~(φ ∨ ψ)→(~φ ∧ ~ψ) |\n| D — Dist. | Distribuir ∨ sobre ∧: φ ∨ (ψ∧χ) → (φ ∨ ψ) ∧ (φ ∨ χ); e variantes simétricas |\n| O — Oper. | Eliminar operadores: separar conjunções em cláusulas; escrever cada disjunção como conjunto |\n```",
      "A seguir, dois exemplos de conversão lado a lado — um para uma sentença e outro para sua negação — que ilustram como uma pequena diferença na entrada pode gerar resultados muito diferentes na forma clausal:",
      "### Exemplo A: g ∧ (r ⇒ f)",
      "```\n| Passo | Expressão |\n|---|---|\n| Original | g ∧ (r ⇒ f) |\n| I | g ∧ (~r ∨ f) |\n| N | g ∧ (~r ∨ f) [sem mudança] |\n| D | g ∧ (~r ∨ f) [sem mudança] |\n| O | {g} e {~r, f} |\n```",
      "### Exemplo B: ~(g ∧ (r ⇒ f)) — negação do Exemplo A",
      "```\n| Passo | Expressão |\n|---|---|\n| Original | ~(g ∧ (r ⇒ f)) |\n| I | ~(g ∧ (~r ∨ f)) |\n| N | ~g ∨ (~(~r ∨ f)) ⇒ ~g ∨ (~~r ∧ ~f) ⇒ ~g ∨ (r ∧ ~f) |\n| D | (~g ∨ r) ∧ (~g ∨ ~f) |\n| O | {~g, r} e {~g, ~f} |\n```",
      "Observe que, apesar de diferirem em apenas uma negação, os dois exemplos resultam em conjuntos de cláusulas completamente distintos. Isso ilustra por que a conversão para forma clausal deve ser feita cuidadosamente, passo a passo.",
      "#### Analogia com Filtros em SQL",
      "A forma clausal é, em essência, a **Forma Normal Conjuntiva (CNF)** — uma conjunção de disjunções. Em SQL, a cláusula `WHERE` de uma query complexa pode ser vista como uma CNF: cada condição de filtragem é uma 'cláusula', e o conjunto de todas elas é satisfeito quando cada cláusula individualmente é satisfeita. A conversão para CNF em lógica é o análogo formal de reescrever uma condição SQL complexa em uma forma em que cada subcondição pode ser avaliada independentemente — base dos otimizadores de query modernos."
    ]
  },

  "cap6-sec2": {
    id: "cap6-sec2",
    title: "O Princípio da Resolução Proposicional",
    subtitle: "6.3 — A Regra e Exemplo Prático",
    paragraphs: [
      "### A Regra",
      "O Princípio da Resolução é surpreendentemente simples: dadas duas cláusulas que contêm um par de literais complementares (um positivo e um negativo sobre o mesmo átomo), podemos derivar uma nova cláusula contendo todos os demais literais de ambas, excluindo o par complementar.",
      "```\n{φ₁, ..., χ, ..., φₘ}\n{ψ₁, ..., ~χ, ..., ψₙ}\n--------------------------------\n{φ₁, ..., φₘ, ψ₁, ..., ψₙ}\n```",
      "A cláusula derivada é chamada de **resolvente**. Como cláusulas são conjuntos, literais duplicados aparecem apenas uma vez no resolvente. Quando as duas cláusulas de entrada são singleton com literais complementares, o resolvente é a cláusula vazia — sinal de contradição.",
      "```\n| Cláusula 1 | Cláusula 2 | Resolvente | Observação |\n|---|---|---|---|\n| {p, q} | {~q, r} | {p, r} | Eliminação de q e ~q |\n| {~p, q} | {p, q} | {q} | Literal q aparece uma vez (união de conjuntos) |\n| {p, q, r} | {~p} | {q, r} | Cláusula unitária elimina p |\n| {p} | {~p} | {} | Cláusula vazia: contradição detectada |\n| {~p, q, r} | {p, ~q, ~r} | {q, r, ~q, ~r} ou {r, ~r} | Múltiplos resolventes possíveis |\n```",
      "#### Atenção: Uma Resolução por Vez",
      "Quando duas cláusulas têm múltiplos pares de literais complementares, apenas **UM** par pode ser resolvido por vez. Por exemplo, de `{p, q}` e `{~p, ~q}`, podemos derivar `{q, ~q}` ou `{p, ~p}`, mas NÃO a cláusula vazia `{}` diretamente. Tentar resolver dois pares simultaneamente é um erro lógico: `{p ∨ q}` e `{~p ∨ ~q}` são satisfatíveis (basta p=1, q=0), portanto não implicam a cláusula vazia.",
      "### Exemplo: Regras de Negócio em Pipeline",
      "Considere um pipeline de decisão de crédito com as seguintes regras (já em forma clausal):",
      "```\n| Linha | Cláusula | Origem |\n|---|---|---|\n| 1 | {~p, r} | Se score_alto(p) então pré_aprovado(r) [Premissa] |\n| 2 | {~q, r} | Se histórico_limpo(q) então pré_aprovado(r) [Premissa] |\n| 3 | {p, q} | Score alto OU histórico limpo [Premissa] |\n| 4 | {~r} | Negação do objetivo: ~pré_aprovado [Meta negada] |\n| 5 | {q, r} | Resolução: 1 e 3 (cancelar p e ~p) |\n| 6 | {r} | Resolução: 2 e 5 (cancelar q e ~q) |\n| 7 | {} | Resolução: 4 e 6 (cancelar r e ~r) — CONTRADIÇÃO |\n```",
      "A cláusula vazia na linha 7 demonstra que a negação do objetivo é inconsistente com as premissas — portanto, o objetivo (pré_aprovado) é uma consequência lógica inevitável das regras. Essa técnica de negar o objetivo e buscar uma contradição é chamada de **refutação por resolução**."
    ]
  },

  "cap6-sec3": {
    id: "cap6-sec3",
    title: "Raciocínio por Refutação",
    subtitle: "6.4 — O Teorema da Refutação",
    paragraphs: [
      "### O Teorema da Refutação",
      "A Resolução não é gerativalmente completa: nem toda cláusula logicamente implicada pelas premissas pode ser derivada diretamente por resolução. Por exemplo, de `{p}` e `{q}`, não se pode derivar `{p, q}` por resolução, mesmo que essa cláusula seja implicada.",
      "Porém, a Resolução é **completa por refutação**: um conjunto de cláusulas Δ é insatisfatível se e somente se existe uma derivação por resolução da cláusula vazia a partir de Δ. Combinando esse resultado com o Teorema da Refutação (Δ ⊨ φ se e somente se Δ ∪ {~φ} é insatisfatível), obtemos um procedimento completo para verificar implicação lógica.",
      "```\nProcedimento de Refutação por Resolução:\n\n1. Negar a conclusão desejada φ ⇒ obter ~φ\n2. Converter Δ ∪ {~φ} para forma clausal\n3. Aplicar o Princípio da Resolução até:\n   (a) Derivar a cláusula vazia {} ⇒ φ é implicado por Δ\n   (b) Não haver mais resoluções possíveis ⇒ φ não é implicado\n```",
      "Esse procedimento é a base de todos os sistemas de prova automática modernos. A negação da conclusão é adicionada ao conjunto de premissas para criar uma 'tensão' que, se a conclusão for de fato implicada, necessariamente leva a uma contradição detectável pela resolução.",
      "#### Por que Refutação Funciona",
      "A lógica por trás da refutação é elegante: se φ é verdadeiro em todo modelo que satisfaz Δ, então ~φ é falso em todo modelo que satisfaz Δ. Logo, Δ ∪ {~φ} não tem nenhum modelo — é insatisfatível. A resolução detecta essa insatisfatibilidade derivando a cláusula vazia. Em ciência de dados, isso corresponde a testar uma hipótese por contraposição: em vez de provar diretamente que 'todo modelo treinado em dados limpos generaliza bem', negamos a conclusão ('existe um modelo treinado em dados limpos que não generaliza') e mostramos que essa afirmação é inconsistente com as premissas do sistema.",
      "### Exemplo Completo de Refutação",
      "Demonstremos a validade de `(p ⇒ (q ⇒ p))` — o esquema de Criação de Implicação — sem nenhuma premissa. A prova é puramente por refutação: negamos a sentença, convertemos para forma clausal e derivamos a cláusula vazia.",
      "**Passo 1 — Negar a conclusão e converter para forma clausal**",
      "```\n| Passo | Expressão |\n|---|---|\n| Original | ~(p ⇒ (q ⇒ p)) |\n| I | ~(~p ∨ (~q ∨ p)) |\n| N | ~~p ∧ ~(~q ∨ p) ⇒ p ∧ (~~q ∧ ~p) ⇒ p ∧ q ∧ ~p |\n| D | p ∧ q ∧ ~p |\n| O | {p} e {q} e {~p} |\n```",
      "**Passo 2 — Derivação por resolução**",
      "```\n| Linha | Cláusula | Origem |\n|---|---|---|\n| 1 | {p} | Premissa (da negação) |\n| 2 | {q} | Premissa (da negação) |\n| 3 | {~p} | Premissa (da negação) |\n| 4 | {} | Resolução: 1 e 3 (cancelar p e ~p) — CONTRADIÇÃO |\n```",
      "A cláusula vazia é derivada em um único passo, confirmando que a sentença é uma **tautologia** — verdadeira independentemente de qualquer premissa."
    ]
  },

  "cap6-sec4": {
    id: "cap6-sec4",
    title: "Estratégias de Resolução",
    subtitle: "6.5 — Otimizações para Reduzir o Espaço de Busca",
    paragraphs: [
      "Sem restrições, a resolução pode gerar um número muito grande de cláusulas intermediárias — muitas delas redundantes ou irrelevantes para a conclusão desejada. As estratégias a seguir reduzem o espaço de busca sem comprometer a completude por refutação.",
      "### Eliminação de Literais Puros",
      "Um literal é **puro** em um conjunto de cláusulas se ele aparece sempre com o mesmo sinal (sempre positivo ou sempre negativo) — nunca há um complementar. Cláusulas com literais puros nunca contribuem para a derivação da cláusula vazia (pois o literal nunca será cancelado) e podem ser removidas com segurança.",
      "```\nExemplo: {~p, ~q, r}, {~p, s}, {~q, s}, {p}, {q}, {~r}\n\nO literal 's' aparece apenas positivo ⇒ 's' é puro ⇒ remover {~p, s} e {~q, s}\nO conjunto restante {~p, ~q, r}, {p}, {q}, {~r} ainda é insatisfatível e suficiente.\n```",
      "### Eliminação de Tautologias",
      "Uma cláusula é uma **tautologia** se contém um par de literais complementares (por exemplo, `{p, ~p, q}`). Tautologias são sempre verdadeiras e, portanto, não afetam a satisfatibilidade do conjunto — podem ser removidas sem consequências.",
      "### Eliminação por Subsunção",
      "Uma cláusula Φ **subsume** uma cláusula Ψ se existe uma substituição σ tal que Φ·σ é um subconjunto de Ψ. Cláusulas mais específicas (subsumíveis) podem ser eliminadas, pois a cláusula mais geral (que as subsume) já cobre toda a informação relevante.",
      "```\nExemplo: {p(x), q(y)} subsume {p(a), q(v), r(w)}\npois {p(x), q(y)}{x←a, y←v} = {p(a), q(v)} ⊆ {p(a), q(v), r(w)}\n\nLogo {p(a), q(v), r(w)} pode ser eliminada — ela é redundante.\n```",
      "### Resolução Unitária e Resolução Linear",
      "A **resolução unitária** restringe cada passo a usar ao menos uma cláusula unitária (com um único literal). Isso garante que cada resolução reduz o tamanho das cláusulas, focando a busca em direção à cláusula vazia. A resolução unitária é completa para cláusulas de Horn (ao máximo um literal positivo por cláusula) — exatamente o formato de regras de negócio do tipo 'se... então...'.",
      "A **resolução linear** (ou resolução filtrada por ancestralidade) é uma generalização: cada resolução deve ter ao menos um pai que seja uma cláusula inicial ou um ancestral do outro pai. Ela gera provas com estrutura linear — mais fáceis de inspecionar e auditável — e é refutativamente completa para qualquer conjunto de cláusulas.",
      "### Resolução com Conjunto de Suporte",
      "A estratégia de **conjunto de suporte** é especialmente útil quando as premissas são satisfatíveis e apenas a adição da conclusão negada cria a insatisfatibilidade. Nesse caso, designamos as cláusulas derivadas da conclusão negada como o conjunto de suporte: cada resolução deve envolver ao menos uma cláusula do conjunto de suporte ou descendente dele. O efeito prático é orientar a busca a partir da conclusão negada (raciocínio regressivo), evitando resoluções entre premissas que não têm relação com o objetivo.",
      "```\n| Estratégia | Completude | Eficiência | Uso Típico |\n|---|---|---|---|\n| Irrestrita | Completa | Baixa (muitas cláusulas redundantes) | Referência teórica |\n| Lit. puro | Completa | Média (poupa cláusulas inúteis) | Pré-processamento |\n| Tautologia | Completa | Média | Pré-processamento |\n| Subsunção | Completa | Alta (elimina redundâncias) | Sistemas de produção |\n| Unitária | Incompleta (geral) / Completa (Horn) | Alta | Regras de negócio (Horn) |\n| Linear | Completa | Alta (provas lineares) | Auditoria e explicabilidade |\n| Conj. suporte | Completa | Alta (orientada ao objetivo) | Verificação de propriedades |\n```"
    ]
  },

  "cap6-sec5": {
    id: "cap6-sec5",
    title: "Resolução Relacional e Unificação",
    subtitle: "6.6 — O Salto para a Lógica Relacional",
    paragraphs: [
      "### O Salto para a Lógica Relacional",
      "A Resolução Proposicional opera sobre átomos ground — sem variáveis. Para aplicar o mesmo princípio à Lógica Relacional, precisamos de um mecanismo que identifique literais 'essencialmente complementares', mesmo quando expressos com variáveis diferentes. Esse mecanismo é a **unificação**.",
      "Na Resolução Proposicional, dois literais são complementares se um é a negação exata do outro: `p` e `~p`. Na Resolução Relacional, a condição é relaxada: φ e ~ψ são complementares se existe uma substituição de variáveis que os torna idênticos. A busca por essa substituição é o processo de unificação.",
      "#### Analogia com Casamento de Padrões em Dados",
      "A unificação é o análogo lógico do casamento de padrões (*pattern matching*) em linguagens de programação e do `JOIN` em SQL. Em SQL, ao fazer `tabela_a JOIN tabela_b ON a.id = b.id`, estamos 'unificando' as colunas de chave. Na Resolução Relacional, ao unificar `p(x,a)` com `p(b,y)`, estamos encontrando os valores `(x=b, y=a)` que fazem as duas expressões coincidirem. A diferença crucial: o casamento de padrões em SQL opera sobre valores concretos; a unificação opera sobre expressões com variáveis, e o resultado é a substituição mais geral que realiza o casamento.",
      "### Substituições e Unificadores",
      "Uma **substituição** é um mapeamento finito de variáveis para termos, escrito como um conjunto de regras de reescrita. Quando aplicada a uma expressão, cada variável no domínio da substituição é substituída pelo termo correspondente.",
      "```\nSubstituição σ = {x←a, y←f(b), z←v}\n\nq(x, y) aplicada a σ ⇒ q(a, f(b))\nq(x, x) aplicada a σ ⇒ q(a, a)\nq(z, v) aplicada a σ ⇒ q(v, v) [z→v; v sem binding, permanece v]\n```",
      "Uma substituição σ é um **unificador** de φ e ψ se φ·σ = ψ·σ, ou seja, aplicar σ a ambas as expressões produz o mesmo resultado. Se duas expressões têm um unificador, são unificáveis; caso contrário, não-unificáveis. Entre todos os unificadores de um par de expressões, o mais útil é o **Unificador Mais Geral (UMG)**: aquele que faz as substituições mínimas necessárias, preservando o máximo de liberdade nas variáveis restantes.",
      "```\n| Expressão 1 | Expressão 2 | Unificável? | UMG |\n|---|---|---|---|\n| p(x, b) | p(a, y) | Sim | {x←a, y←b} |\n| p(x, x) | p(a, y) | Sim | {x←a, y←a} |\n| p(x, f(x)) | p(a, y) | Sim | {x←a, y←f(a)} |\n| p(x, x) | p(f(y), y) | Não (occur check) | — |\n| p(a, b) | p(b, a) | Não (constantes diferentes) | — |\n| p(x) | q(x) | Não (predicados diferentes) | — |\n```",
      "#### O Occur Check",
      "Antes de unificar uma variável `x` com um termo `t`, é necessário verificar se `x` não ocorre dentro de `t`. Sem essa verificação, a unificação de `p(x)` e `p(f(x))` produziria a substituição `{x←f(x)}`, que ao ser aplicada gera `p(f(x))`, depois `p(f(f(x)))`, ad infinitum — uma substituição circular sem solução finita. Na prática, muitos sistemas de produção omitem o occur check por razões de desempenho. Em sistemas críticos de verificação formal, o occur check deve ser mantido.",
      "### O Algoritmo de Unificação",
      "O algoritmo de unificação é recursivo: compara as duas expressões subexpressão por subexpressão, acumulando a substituição à medida que avança. Em cada passo:",
      "- Se as subexpressões (após aplicar a substituição acumulada) são idênticas: sucesso, nada a fazer.\n- Se uma é uma variável e a outra não a contém (occur check): adicionar o binding variável ← expressão à substituição.\n- Se nenhuma é variável e pelo menos uma é uma constante diferente da outra: falha — não unificáveis.\n- Se ambas são termos compostos com o mesmo símbolo de função: comparar recursivamente os argumentos.",
      "A seguir, um trace completo para a unificação de `p(x, b)` e `p(a, y)`:",
      "```\n| Passo | Comparação e Resultado |\n|---|---|\n| Início | Comparar p(x,b) com p(a,y), σ={} |\n| Nível 1 | Comparar 'p' com 'p' ⇒ idênticos, σ={} |\n| Nível 1 | Comparar x com a ⇒ x é variável, não ocorre em a ⇒ σ={x←a} |\n| Nível 1 | Comparar b com y (após aplicar σ) ⇒ y é variável, não ocorre em b ⇒ σ={x←a, y←b} |\n| Resultado | UMG = {x←a, y←b}; p(x,b){x←a,y←b}=p(a,b)=p(a,y){x←a,y←b} |\n```"
    ]
  },

  "cap6-sec6": {
    id: "cap6-sec6",
    title: "O Princípio da Resolução Relacional",
    subtitle: "6.7 — A Regra com Unificação",
    paragraphs: [
      "### A Regra com Unificação",
      "O Princípio da Resolução para a Lógica Relacional é análogo ao proposicional, com a adição da unificação. Dados uma cláusula com um literal φ e outra cláusula com um literal ~ψ tais que φ e ψ têm um UMG σ, o resolvente é obtido aplicando σ ao conjunto dos literais restantes de ambas as cláusulas.",
      "```\n{φ₁, ..., φ, ..., φₘ}\n{ψ₁, ..., ~ψ, ..., ψₙ}\n------------------------------------------\n{φ₁, ..., φₘ, ψ₁, ..., ψₙ} · σ\n\nonde σ = mgu(φ, ψ)\ne as cláusulas foram renomeadas para evitar variáveis em comum\n```",
      "Dois refinamentos são necessários em relação à versão proposicional: (1) antes de tentar a resolução, uma das cláusulas tem suas variáveis renomeadas para evitar conflitos com as da outra; (2) para lidar com casos em que múltiplos literais em uma mesma cláusula podem ser unificados entre si, usa-se o conceito de **fator** — uma cláusula derivada aplicando um UMG a um subconjunto de seus próprios literais.",
      "### Exemplo: Derivação em Relações de Parentesco",
      "Considere uma base de conhecimento sobre relações de parentesco e o objetivo de provar que Art é avô de Coe:",
      "```\n| Lin | Cláusula | Origem |\n|---|---|---|\n| 1 | {p(art, bob)} | Art é pai de Bob [Premissa] |\n| 2 | {p(art, bud)} | Art é pai de Bud [Premissa] |\n| 3 | {p(bob, cal)} | Bob é pai de Cal [Premissa] |\n| 4 | {p(bud, coe)} | Bud é pai de Coe [Premissa] |\n| 5 | {~p(x,y), ~p(y,z), g(x,z)} | Avô = pai do pai [Premissa] |\n| 6 | {~p(bob, z), g(art, z)} | Resolução 1 e 5: σ={x←art, y←bob} |\n| 7 | {g(art, cal)} | Resolução 3 e 6: σ={z←cal} [avô de Cal — caminho morto] |\n| 8 | {~p(bud, z), g(art, z)} | Resolução 2 e 5: σ={x←art, y←bud} |\n| 9 | {g(art, coe)} | Resolução 4 e 8: σ={z←coe} — OBJETIVO ATINGIDO |\n```",
      "Observe que a linha 7 é um caminho morto — Art também é avô de Cal, mas esse não era o objetivo. A resolução explora o espaço de consequências sem necessidade de guia humano, terminando ao atingir o objetivo. Note também que, ao contrário do sistema de Fitch, nenhuma suposição arbitrária foi feita — as substituições de variáveis foram todas determinadas pela unificação."
    ]
  },

  "cap6-sec7": {
    id: "cap6-sec7",
    title: "Forma Clausal Relacional: Skolemização",
    subtitle: "6.8 — Eliminação de Quantificadores Existenciais",
    paragraphs: [
      "Para aplicar a resolução a sentenças relacionais com quantificadores, é necessário um passo adicional na conversão para a forma clausal: a eliminação dos quantificadores existenciais por **Skolemização**.",
      "### O Procedimento Completo de Conversão",
      "A conversão de sentenças relacionais para forma clausal segue sete passos, em ordem:",
      "```\n| Passo | Nome | Operação |\n|---|---|---|\n| I | Implicações fora | Eliminar ⇒, ⇐, ⇔ usando equivalências booleanas |\n| N | Negações dentro | Mover negações até literais atômicos (De Morgan + quantificadores) |\n| S | Padronizar variáveis | Renomear variáveis para que cada quantificador use uma variável única |\n| E | Existenciais fora | Skolemização: substituir variáveis existenciais por constantes/funções de Skolem |\n| A | Universais fora | Remover todos os quantificadores universais (variáveis ficam implicitamente universais) |\n| D | Disjunções dentro | Distribuir ∨ sobre ∧ para atingir a forma normal conjuntiva |\n| O | Operadores fora | Separar conjunções em cláusulas e escrever disjunções como conjuntos |\n```",
      "### Skolemização: A Chave para Eliminar Existenciais",
      "A Skolemização é o passo menos intuitivo, mas conceitualmente elegante. A ideia: um quantificador existencial ∃y dentro do escopo de universais ∀x₁,...,∀xₙ diz que 'existe um y que depende dos valores de x₁,...,xₙ'. Esse y pode ser representado por uma **função de Skolem** f(x₁,...,xₙ).",
      "A Skolemização não preserva equivalência lógica — o conjunto de cláusulas resultante está em um vocabulário expandido e pode ter modelos diferentes. Porém, ela preserva a **satisfatibilidade**: o conjunto original é satisfatível se e somente se o conjunto skolemizado é satisfatível. Para a resolução por refutação, isso é tudo que precisamos."
    ]
  },

  "cap6-sec8": {
    id: "cap6-sec8",
    title: "Extração de Respostas",
    subtitle: "6.9 — Respondendo Perguntas com Resolução",
    paragraphs: [
      "Até aqui, usamos a resolução para responder perguntas do tipo verdadeiro/falso: 'o conjunto de premissas implica esta conclusão?'. Mas a resolução também pode ser usada para responder perguntas do tipo **preencha-o-espaço**: 'quais valores satisfazem esta condição?'.",
      "### Literais de Resposta",
      "Para extrair respostas, adicionamos ao processo um literal especial de resposta: `goal(v₁,...,vₙ)`, onde v₁,...,vₙ são as variáveis livres da pergunta. Esse literal acompanha a cláusula derivada da pergunta negada e é propagado pelas resoluções. O processo termina não quando a cláusula vazia é derivada, mas quando uma cláusula contendo apenas literais de resposta é produzida.",
      "Exemplo: 'Quem é o pai de Jon?' A pergunta é `p(x, jon)`. O literal de resposta é `goal(x)`. A cláusula objetivo é `{~p(x, jon), goal(x)}`.",
      "```\n| Linha | Cláusula | Origem |\n|---|---|---|\n| 1 | {p(art, jon)} | Art é pai de Jon [Premissa] |\n| 2 | {p(bob, kim)} | Bob é pai de Kim [Premissa] |\n| 3 | {~p(x,y), pai(x,y)} | Definição de pai [Premissa] |\n| 4 | {~p(x,jon), goal(x)} | Pergunta negada com literal de resposta |\n| 5 | {~p(x,jon), goal(x)} | Resolução 3 e 4: σ={y←jon} |\n| 6 | {goal(art)} | Resolução 1 e 5: σ={x←art} — RESPOSTA: art |\n```",
      "### Respostas Múltiplas e Ambiguidade",
      "Quando o problema tem múltiplas respostas corretas, diferentes caminhos de resolução produzem diferentes literais de resposta. O processo pode ser continuado até que respostas suficientes sejam encontradas.",
      "Em casos de incerteza — quando se sabe que uma de várias respostas é correta, mas não qual delas — a resolução pode produzir cláusulas com múltiplos literais de resposta, como `{goal(art), goal(bob)}`. Isso não significa duas respostas simultâneas, mas sim a informação de que ao menos uma das opções é correta.",
      "#### Extração de Respostas em Sistemas de Recomendação",
      "A extração de respostas por resolução é o fundamento lógico de sistemas de busca e recomendação baseados em regras. Em vez de filtrar um dataset linha por linha, o sistema deriva as respostas possíveis por encadeamento de regras — equivalente a um `JOIN` com resolução automática de variáveis. Por exemplo: dado um sistema de regras de elegibilidade para crédito e um conjunto de clientes, a extração de respostas identifica automaticamente o conjunto de clientes elegíveis sem inspeção exaustiva de cada combinação possível de atributos."
    ]
  },

  "cap6-sec9": {
    id: "cap6-sec9",
    title: "Aplicações em Ciência de Dados",
    subtitle: "6.10 — Verificação, Cláusulas de Horn e Sistemas de Regras",
    paragraphs: [
      "### Verificação Automática de Restrições de Qualidade",
      "A aplicação mais direta da resolução em ciência de dados é a verificação automática de restrições de qualidade. Cada restrição de qualidade — unicidade de chaves, integridade referencial, ausência de nulos, faixas de valores — pode ser expressa como um conjunto de cláusulas. A verificação de que o dataset satisfaz todas as restrições equivale a verificar que o conjunto cláusulas `{restrições} ∪ {~propriedade_desejada}` é insatisfatível.",
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
    subtitle: "6.11 — Conceitos-Chave do Capítulo 6",
    paragraphs: [
      "### Conceitos-Chave do Capítulo 6",
      "**Forma Clausal**: representação de sentenças como conjunção de disjunções de literais. Conversão em 4 passos (proposicional) ou 7 passos (relacional, incluindo Skolemização).",
      "**Princípio da Resolução**: dadas duas cláusulas com literais complementares (χ e ~χ), deriva-se uma nova cláusula com os literais restantes de ambas. Única regra de inferência necessária.",
      "**Completude por Refutação**: Δ é insatisfatível se e somente se a cláusula vazia pode ser derivada por resolução a partir de Δ. Não generativamente completo, mas completo para detectar insatisfatibilidade.",
      "**Prova por Refutação**: para provar que Δ ⊨ φ, acrescentar ~φ a Δ, converter para forma clausal e derivar a cláusula vazia.",
      "**Unificação**: processo de encontrar uma substituição de variáveis que torna dois literais idênticos. O Unificador Mais Geral (UMG) é o mais útil para resolução.",
      "**Skolemização**: eliminação de quantificadores existenciais por constantes e funções de Skolem. Preserva satisfatibilidade (não equivalência lógica).",
      "**Extração de Respostas**: extensão da resolução para perguntas do tipo 'qual valor?', usando literais de resposta `goal(x)`.",
      "**Cláusulas de Horn**: cláusulas com ao máximo um literal positivo. Resolução unitária é completa para elas — base de Datalog, Prolog e engines de regras.",
      "**Estratégias**: eliminação de literais puros, tautologias, subsunção; resolução unitária, linear e com conjunto de suporte. Reduzem o espaço de busca sem perder completude por refutação."
    ]
  },


  cap7: {
    id: "cap7",
    title: "Lógica de Primeira Ordem",
    subtitle: "Capítulo 7",
    paragraphs: [
      "Os capítulos anteriores apresentaram a Lógica Proposicional e a Lógica Relacional (também chamada de Lógica de Herbrand), ferramentas capazes de representar conhecimento em domínios finitos e bem delimitados. No entanto, à medida que os problemas de Inteligência Artificial e Ciência de Dados crescem em escala e complexidade, essas abordagens revelam limitações importantes: não conseguem, por si sós, expressar afirmações sobre todos os objetos de um domínio sem enumerá-los explicitamente, nem lidar naturalmente com universos infinitos ou com objetos que não possuem nomes únicos na linguagem.",
      "A **Lógica de Primeira Ordem (LPO)** — também denominada lógica de predicados de primeira ordem ou, em inglês, *First-Order Logic (FOL)* — supera essas limitações ao dissociar o universo de objetos do espaço de termos da linguagem. Em vez de supor uma correspondência biunívoca entre nomes e objetos, a LPO permite que o mesmo objeto tenha múltiplos nomes, que alguns objetos não tenham nome algum, e que o universo seja infinito. Essas características tornam a LPO a linguagem de representação de conhecimento mais amplamente utilizada em IA clássica, sendo o fundamento de sistemas como Prolog, OWL (Web Ontology Language) e motores de inferência para bases de conhecimento.",
      "Este capítulo apresenta a sintaxe, a semântica e as propriedades centrais da LPO, articulando-as com os conceitos de Lógica de Herbrand vistos anteriormente e destacando as conexões com problemas reais de IA e Ciência de Dados.",
      "| **Leitura do Capítulo** |\n|---|\n| Este capítulo pressupõe familiaridade com quantificadores (∀, ∃), lógica relacional e o sistema de prova de Fitch. Caso necessite revisar esses tópicos, consulte os Capítulos 5 e 6 antes de prosseguir. |"
    ],
  },

  "cap7-sec1": {
    id: "cap7-sec1",
    title: "Conceitualização do Mundo",
    subtitle: "7.2 — Objetos, Relações e Funções",
    paragraphs: [
      "A semântica da LPO é construída sobre a noção de uma **conceitualização**, que consiste em três componentes: objetos, funções e relações. Compreender cada um desses componentes é essencial para construir e interpretar corretamente modelos lógicos.",

      "### Objetos e Universo de Discurso",
      "Em LPO, um objeto pode ser qualquer entidade sobre a qual desejamos fazer afirmações: objetos concretos (um nó de uma rede neural, um registro em um banco de dados), objetos abstratos (o número 2, o conjunto dos inteiros) ou mesmo objetos fictícios. O conjunto de todos os objetos relevantes para um problema é denominado **universo de discurso** (∀ᵢ).",
      "A escolha do universo de discurso é uma decisão de modelagem. Em um sistema de recomendação, o universo pode ser o conjunto de usuários e itens; em um sistema de diagnóstico médico, pode ser o conjunto de pacientes e sintomas; em aritmética, pode ser o conjunto dos números naturais — um universo infinito.",
      "| **Definição: Universo de Discurso** |\n|---|\n| O universo de discurso (∀ᵢ) é o conjunto de todos os objetos sobre os quais as afirmações de uma interpretação são feitas. Pode ser finito ou infinito, concreto ou abstrato. |",

      "### Relações",
      "Uma relação de aridade n é um conjunto de n-uplas de objetos do universo de discurso. Formalmente, uma relação n-ária R sobre ∀ᵢ é um subconjunto do produto cartesiano ∀ᵢⁿ. Por exemplo, em um grafo de conhecimento sobre filmes, a relação binária `dirigidoPor(filme, diretor)` contém pares como [Inception, Nolan]; a relação unária `oscarizado(filme)` contém filmes que ganharam o Oscar.",
      "Na Lógica de Herbrand, uma relação era completamente determinada pela enumeração de suas tuplas, pois o universo era finito. Na LPO, relações sobre universos infinitos podem ser caracterizadas apenas por axiomas gerais — uma distinção fundamental.",

      "### Funções",
      "Uma função de aridade n associa a cada combinação de n objetos exatamente um objeto. Matematicamente, uma função n-ária é uma relação (n+1)-ária em que, para cada combinação de n argumentos, existe exatamente um valor. Por exemplo, a função `sucessor(s)` mapeia cada número natural n para n+1; a função `pai` mapeia cada pessoa para sua única mãe biológica.",
      "A representação tabular de funções e relações é intuitiva para universos pequenos, mas impraticável para universos grandes ou infinitos. Daí a importância da linguagem formal da LPO para expressar essas estruturas de modo compacto e geral."
    ],
  },

  "cap7-sec2": {
    id: "cap7-sec2",
    title: "Sintaxe da Lógica de Primeira Ordem",
    subtitle: "7.3 — Elementos Sintáticos",
    paragraphs: [
      "A sintaxe da LPO é uma extensão da Lógica Relacional com a incorporação de constantes de função e termos compostos. Os elementos sintáticos são os seguintes:",
      "| **Elemento Sintático** | **Descrição e Exemplos** |\n|---|---|\n| **Constantes de objeto** | Nomes para objetos específicos: a, b, joão, 0, nil |\n| **Variáveis** | Representam objetos arbitrários: x, y, z |\n| **Constantes de função** | Nomes para funções: s (sucessor), pai, cons |\n| **Termos compostos** | Aplicação de função a termos: s(0), pai(joão), cons(a, nil) |\n| **Constantes de relação** | Nomes para relações (predicados): on, plus, member |\n| **Sentenças atômicas** | Aplicação de relação a termos: on(a,b), plus(0,y,y) |\n| **Conectivos lógicos** | ¬, ∧, ∨, ⇒, ⇔ |\n| **Quantificadores** | ∀ (para todo), ∃ (existe) |",
      "Um **termo** em LPO é, recursivamente: uma variável, uma constante de objeto, ou um termo composto f(t₁, ..., tₙ) onde f é uma constante de função de aridade n e t₁, ..., tₙ são termos. A recursividade permite construir termos de profundidade arbitrária, como `s(s(s(0)))`, o que é essencial para representar universos infinitos com vocabulário finito.",
      "| **LPO vs. Lógica de Herbrand: a diferença sintática chave** |\n|---|\n| Na Lógica de Herbrand, o universo é fixado pelos termos base da linguagem. Na LPO, os termos da linguagem são apenas *nomes* que apontam para objetos em um universo independente. Isso permite que dois nomes distintos refiram o mesmo objeto (*não-unicidade de nomes*) e que existam objetos sem nome algum (*domínio aberto*). |"
    ],
  },

  "cap7-sec3": {
    id: "cap7-sec3",
    title: "Semântica: Interpretações e Atribuições",
    subtitle: "7.4 — Interpretações e Verdade",
    paragraphs: [
      "A semântica da LPO é definida por meio do conceito de **interpretação**. Uma interpretação i especifica:",
      "- ∀ᵢ — o universo de discurso (um conjunto não-vazio de objetos)\n- Para cada constante de objeto c: um objeto cᵢ ∈ ∀ᵢ\n- Para cada constante de função f de aridade n: uma função fᵢ : ∀ᵢⁿ → ∀ᵢ\n- Para cada constante de relação r de aridade n: um conjunto rᵢ ⊆ ∀ᵢⁿ",
      "Note que a interpretação é um mapeamento do nível sintático (nomes) para o nível semântico (objetos, funções e relações matemáticas). Diferentes interpretações do mesmo conjunto de sentenças correspondem a diferentes mundos possíveis.",

      "### Exemplo Concreto de Interpretação",
      "Considere uma linguagem com constantes de objeto a, b, c; constante de função unária f; e constante de relação binária r. Definimos a seguinte interpretação:",
      "- ∀ᵢ = {1, 2, 3}\n- aᵢ = 1,  bᵢ = 2,  cᵢ = 2 (b e c referenciam o mesmo objeto)\n- fᵢ = {1→2, 2→1, 3→3}\n- rᵢ = {[1,1], [1,2], [2,2]}",
      "Observe que b e c são dois nomes para o mesmo objeto (2), e o objeto 3 não tem nenhum nome na linguagem. A atribuição de variáveis v é um mapeamento das variáveis para ∀ᵢ, por exemplo: xᵥ = 1, yᵥ = 2. Dada uma interpretação i e uma atribuição v:",
      "```\nf(a)ᵢᵥ = fᵢ(aᵢ) = fᵢ(1) = 2\nf(f(a))ᵢᵥ = fᵢ(2) = 1\n```",

      "### Verdade de Sentenças",
      "A verdade de sentenças na LPO segue as mesmas regras dos conectivos lógicos da lógica proposicional. A novidade está na definição de verdade para sentenças quantificadas, que exige a noção de **versão de atribuição de variáveis**.",
      "Uma versão v:ν/x de uma atribuição v é uma atribuição idêntica a v em todas as variáveis, exceto pela variável ν, que é mapeada para o objeto x ∈ ∀ᵢ. Com isso:",
      "| **Quantificação Universal e Existencial** |\n|---|\n| ⊨ᵢ ∀ν.φ [v] sse ⊨ᵢ φ [v:ν/x] para **todo** x ∈ ∀ᵢ |\n| ⊨ᵢ ∃ν.φ [v] sse ⊨ᵢ φ [v:ν/x] para **algum** x ∈ ∀ᵢ |",
      "Uma interpretação i é um **modelo** de uma sentença φ (escrito ⊨ᵢ φ) se e somente se i satisfaz φ para toda atribuição de variáveis possível."
    ],
  },

  "cap7-sec4": {
    id: "cap7-sec4",
    title: "Exemplo: Mundo dos Blocos",
    subtitle: "7.5 — Diferenças entre Herbrand e LPO",
    paragraphs: [
      "Para ilustrar as diferenças fundamentais entre a Lógica de Herbrand e a LPO, retomamos o clássico **Mundo dos Blocos** (Blocks World). Considere uma cena com cinco blocos A, B, C, D e E, onde A está sobre B, B está sobre C, e D está sobre E. Usamos constantes de objeto a, b, c, d, e e a relação binária `on(x, y)` para representar \"x está diretamente sobre y\".",
      "```\n[A]   [D]\n[B]   [E]\n[C]   ____\n__________________________\non(a,b), on(b,c), on(d,e)\n```",
      "O conjunto de sentenças Σ que descreve este estado inclui literais positivos como on(a,b), on(b,c), on(d,e) e literais negativos como ¬on(a,a), ¬on(a,c), etc., para todos os pares.",

      "### A Diferença Central",
      "Na Lógica de Herbrand, as cinco constantes de objeto fixam exatamente um universo de cinco objetos. O conjunto Σ determina univocamente o estado do mundo.",
      "Na LPO, as constantes a, b, c, d, e são apenas nomes que apontam para objetos em um universo ∀ᵢ que pode ter qualquer cardinalidade. O conjunto Σ é satisfeito por **múltiplas interpretações distintas**:",
      "| **Interpretação** | **Característica** |\n|---|---|\n| ∀ᵢ = {o₁,o₂,o₃,o₄,o₅}; aᵢ=o₁, bᵢ=o₂, ... | Cinco objetos distintos — corresponde ao diagrama |\n| ∀ᵢ = {o₁,o₂,o₃}; aᵢ=dᵢ=o₁, bᵢ=eᵢ=o₂, cᵢ=o₃ | Três objetos: a e d são o mesmo bloco |\n| ∀ᵢ = {o₁,...,o₈}; aᵢ=dᵢ=o₁, bᵢ=eᵢ=o₂, cᵢ=o₃ | Oito objetos: universo tem objetos extras sem nome |",
      "Embora essas interpretações correspondam a mundos diferentes, todas compartilham a propriedade de que pelo menos três blocos estão empilhados. Isso reflete o fato de que Σ faz afirmações sobre os **nomes**, e não sobre a identidade dos objetos subjacentes — uma distinção filosófica e prática de grande importância em representação de conhecimento."
    ],
  },

  "cap7-sec5": {
    id: "cap7-sec5",
    title: "Aritmética e Universos Infinitos",
    subtitle: "7.6 — Axiomatizando o Infinito",
    paragraphs: [
      "Um dos maiores poderes da LPO é a capacidade de axiomatizar relações sobre universos infinitos com um vocabulário finito. A **Aritmética de Peano** é o exemplo paradigmático: representa todos os números naturais usando apenas a constante 0 e a função unária s (sucessor), onde s(0)=1, s(s(0))=2, e assim por diante.",

      "### Axiomas de Adição em LPO",
      "Os axiomas abaixo definem a relação `plus(x, y, z)`, que representa x + y = z:",
      "| Axioma | Fórmula |\n|---|---|\n| (1) | ∀y. plus(0, y, y) |\n| (2) | ∀x.∀y.∀z. (plus(x, y, z) ⇒ plus(s(x), y, s(z))) |\n| (3) | ∀x.∀y.∀z.∀w. (plus(x,y,z) ∧ ¬(z=w) ⇒ ¬plus(x,y,w)) |",
      "O axioma (1) diz que 0 + y = y para todo y. O axioma (2) é indutivo: se x + y = z, então (x+1) + y = z+1. O axioma (3) é o axioma de funcionalidade: a soma de dois números é única.",
      "Esses três axiomas são satisfeitos por múltiplas interpretações, incluindo:",
      "- Aritmética modular mod 2: ∀ᵢ = {0,1}, s = {0→1, 1→0}, plus = adição módulo 2\n- Aritmética modular mod 4: ∀ᵢ = {0,1,2,3}\n- Naturais padrão: ∀ᵢ = ℕ = {0,1,2,...}\n- Aritmética não-padrão: ∀ᵢ = {0,1}, s = {0→1, 1→1} (onde 1+1=1)",
      "| **Implicação para IA: Incompletude de Gödel** |\n|---|\n| O fato de que os axiomas de Peano têm múltiplos modelos está relacionado ao primeiro **Teorema de Incompletude de Gödel** (1931): qualquer sistema axiomático consistente e suficientemente expressivo para descrever a aritmética dos naturais não pode ser completo — existem verdades que não podem ser provadas dentro do sistema. Isso impõe limites fundamentais ao que qualquer sistema de IA baseado em lógica pode deduzir automaticamente. |"
    ],
  },

  "cap7-sec6": {
    id: "cap7-sec6",
    title: "Igualdade em LPO",
    subtitle: "7.7 — Co-referencialidade e Provas",
    paragraphs: [
      "A **igualdade** é uma relação binária especial que expressa co-referencialidade: dois termos são iguais se e somente se referem ao mesmo objeto no universo de discurso. Escrevemos τ₁ = τ₂ como açúcar sintático para equal(τ₁, τ₂).",

      "### Axiomas da Igualdade",
      "A relação de igualdade deve satisfazer três propriedades que a tornam uma relação de equivalência:",
      "- **Reflexividade:** ∀x. x = x\n- **Simetria:** ∀x.∀y. (x=y ⇒ y=x)\n- **Transitividade:** ∀x.∀y.∀z. (x=y ∧ y=z ⇒ x=z)",
      "Além dessas, existe o princípio da **substituição de iguais por iguais**: se dois termos são iguais, qualquer sentença verdadeira de um deve ser verdadeira do outro:",
      "- Subst. unária: ∀x.∀y. (p(x) ∧ x=y ⇒ p(y))\n- Subst. binária: ∀u.∀v.∀x.∀y. (q(u,v) ∧ u=x ∧ v=y ⇒ q(x,y))\n- Subst. função: ∀x.∀y.∀z. (f(x)=z ∧ x=y ⇒ f(y)=z)",

      "### Regras de Inferência para Igualdade (Fitch)",
      "Em vez de incluir todos os axiomas de igualdade como premissas, o sistema Fitch estendido incorpora duas regras de inferência especiais:",
      "| **Regra** | **Descrição** |\n|---|---|\n| **Introdução de Igualdade (EI)** | Permite inserir σ = σ para qualquer termo σ, sem premissas |\n| **Eliminação de Igualdade (EE)** | Dada φ[τ₁] e τ₁=τ₂, permite substituir τ₁ por τ₂ (ou vice-versa) |",

      "### Exemplo de Prova com Igualdade",
      "Considere: pai(pat) = quincy e ∀x. maisVelho(pai(x), x). Provemos que maisVelho(quincy, pat):",
      "```\n1. pai(pat) = quincy                  Premissa\n2. ∀x. maisVelho(pai(x), x)           Premissa\n3. maisVelho(pai(pat), pat)            Eliminação Universal: 2\n4. maisVelho(quincy, pat)              Eliminação de Igualdade: 3, 1\n```",

      "### Exemplo: Teoria de Grupos",
      "A teoria de grupos é um domínio clássico para raciocínio com igualdade. Um grupo é uma estrutura com uma operação binária *, um elemento identidade e e uma função de inverso inv, satisfazendo:",
      "- ∀x.∀y.∀z. (x*y)*z = x*(y*z)   [associatividade]\n- ∀x. x*e = x   [identidade à direita]\n- ∀x. e*x = x   [identidade à esquerda]\n- ∀x. x*inv(x) = e   [inverso à direita]\n- ∀x. inv(x)*x = e   [inverso à esquerda]",
      "A partir desses axiomas, é possível provar, por exemplo, que ∀x. inv(inv(x)) = x — o inverso do inverso é o próprio elemento. A prova usa repetidas aplicações de Eliminação Universal e Eliminação de Igualdade, e exemplifica como o raciocínio equacional em LPO permite derivar propriedades gerais de estruturas algébricas."
    ],
  },

  "cap7-sec7": {
    id: "cap7-sec7",
    title: "Propriedades Lógicas",
    subtitle: "7.8 — Classificação de Sentenças em LPO",
    paragraphs: [
      "As propriedades fundamentais das sentenças em LPO são análogas às da Lógica de Herbrand, porém referem-se agora a **interpretações de primeira ordem**:",
      "| **Propriedade** | **Definição** |\n|---|---|\n| Satisfatível | Existe ao menos uma interpretação (e atribuição) que satisfaz a sentença |\n| Falsificável | Existe ao menos uma interpretação que torna a sentença falsa |\n| Válida (tautologia) | Toda interpretação satisfaz a sentença — é necessariamente verdadeira |\n| Insatisfatível (contradição) | Nenhuma interpretação satisfaz a sentença |\n| Contingente | É simultaneamente satisfatível e falsificável |",

      "### Consequência Lógica",
      "Um conjunto de sentenças Δ **logicamente implica** uma sentença φ (escrito Δ ⊨ φ) se e somente se toda interpretação que satisfaz Δ também satisfaz φ. Isso generaliza diretamente a noção de consequência lógica da lógica proposicional e de Herbrand, mantendo a mesma estrutura conceitual com o universo de discurso variável."
    ],
  },

  "cap7-sec8": {
    id: "cap7-sec8",
    title: "Conexões com IA e Ciência de Dados",
    subtitle: "7.9 — Aplicações da LPO",
    paragraphs: [
      "A LPO é o substrato lógico de diversas tecnologias e paradigmas fundamentais em IA e Ciência de Dados.",

      "### Programação em Lógica e Prolog",
      "O **Prolog** é uma linguagem de programação baseada diretamente em LPO. Programas Prolog são conjuntos de cláusulas de Horn — um subconjunto restrito de sentenças de LPO — e a execução corresponde a busca por prova por refutação usando resolução SLD. Prolog foi amplamente utilizado em sistemas especialistas, análise de linguagem natural e planejamento automático.",

      "### Ontologias e Web Semântica",
      "**OWL** (Web Ontology Language), a linguagem padrão para ontologias na Web Semântica, é baseada em Lógicas de Descrição — fragmentos decidíveis da LPO. Bases de conhecimento como Wikidata, DBpedia e ontologias biomédicas (como Gene Ontology) são formalizadas nesse arcabouço, permitindo inferência automática de novos fatos.",

      "### Representação de Conhecimento e Grafos de Conhecimento",
      "**Grafos de conhecimento** (Knowledge Graphs), como o Google Knowledge Graph e o Freebase, são essencialmente bases de dados relacionais que podem ser interpretadas em LPO: nós são objetos, arestas são relações binárias. Sistemas de completamento de grafos (como TransE) aprendem embeddings que respeitam a estrutura relacional.",

      "### Aprendizado de Máquina Neuro-Simbólico",
      "Uma área emergente de pesquisa combina redes neurais com raciocínio lógico. Sistemas como **Neural Theorem Provers** (NTP) e **DeepProbLog** integram inferência em LPO com aprendizado por gradiente, buscando o melhor dos dois mundos: a capacidade de generalização das redes neurais e a interpretabilidade e rigor da lógica formal."
    ],
  },

  "cap7-sec9": {
    id: "cap7-sec9",
    title: "Exemplo Computacional: Z3",
    subtitle: "7.10 — LPO com a Biblioteca Z3",
    paragraphs: [
      "A biblioteca **Z3** (Microsoft Research) é um SMT solver (*Satisfiability Modulo Theories*) com suporte a LPO, disponível em Python. Pode ser utilizada para verificar a validade de sentenças sobre relações binárias.",
      "O princípio usado é **refutação por contradição**: se a negação da conclusão é insatisfatível junto com as premissas, então a conclusão é uma consequência lógica. Esse é exatamente o princípio da resolução por refutação, base do Prolog e de provadores automáticos de teoremas."
    ],
  },

  "cap7-sec10": {
    id: "cap7-sec10",
    title: "Resumo do Capítulo",
    subtitle: "7.11 — Conceitos-Chave",
    paragraphs: [
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Conceitualização | Tripla (objetos, funções, relações) que estrutura um domínio de conhecimento |\n| Universo de discurso (∀ᵢ) | Conjunto de objetos sobre os quais uma interpretação é definida |\n| Interpretação | Mapeamento de constantes da linguagem para objetos/funções/relações do universo |\n| Atribuição de variáveis | Mapeamento de variáveis para objetos do universo |\n| Modelo (⊨ᵢ φ) | Interpretação que satisfaz φ para toda atribuição de variáveis |\n| Igualdade | Relação reflexiva, simétrica, transitiva com substituição — axiomatizável em LPO |\n| Consequência lógica (Δ⊨φ) | Toda interpretação que satisfaz Δ também satisfaz φ |\n| Validade | Sentença satisfeita por toda interpretação |\n| Insatisfatibilidade | Sentença não satisfeita por nenhuma interpretação |"
    ],
  },

  cap8: {
    id: "cap8",
    title: "Indução e Generalização",
    subtitle: "Capítulo 8",
    paragraphs: [
      "No capítulo anterior, vimos como a Lógica de Primeira Ordem permite expressar afirmações sobre universos potencialmente infinitos de objetos usando um vocabulário finito. Mas como *provar* que uma propriedade vale para todos os elementos de um universo infinito? Não é possível verificar cada elemento individualmente — o processo jamais terminaria. A resposta a esse desafio é a **indução**, um dos princípios de raciocínio mais fundamentais da matemática e da ciência da computação.",
      "A indução é o processo de raciocinar do *específico para o geral*: a partir de um conjunto de casos particulares verdadeiros, conclui-se uma afirmação universal. Há, porém, uma distinção crucial entre dois tipos de indução:",
      "- **Indução incompleta:** generaliza a partir de uma amostra não-exaustiva. Útil na ciência empírica e no aprendizado de máquina, mas não garante a verdade da conclusão.\n- **Indução completa:** cobre todos os casos de forma estruturada e garante a validade da conclusão. É esta que estudamos neste capítulo.",
      "Em IA e Ciência de Dados, a tensão entre esses dois tipos de indução está no centro de debates fundamentais: modelos de aprendizado de máquina fazem indução incompleta (generalizam a partir de dados); sistemas de verificação formal utilizam indução completa para garantir propriedades de algoritmos. Compreender ambos é essencial para um profissional rigoroso da área.",
      "| **Pré-requisitos do Capítulo**<br/>Este capítulo pressupõe familiaridade com quantificadores universais, o sistema de prova Fitch (Eliminação Universal, Introdução de Implicação) e a noção de Herbrand base introduzida nos Capítulos 5, 6 e 7. |"
    ]
  },

  "cap8-sec1": {
    id: "cap8-sec1",
    title: "Indução Incompleta e Indução Completa",
    paragraphs: [
      "Para motivar a distinção, considere dois exemplos históricos. O primeiro é favorável: a função f definida por f(1)=1 e f(n+1)=f(n)+2n+1 produz, para os primeiros valores, o seguinte padrão:",
      "| **n** | **f(n)** | **n²** | **f(n) = n²?** |\n|---|---|---|---|\n| 1 | 1 | 1 | ✓ |\n| 2 | 4 | 4 | ✓ |\n| 3 | 9 | 9 | ✓ |\n| 4 | 16 | 16 | ✓ |\n| 5 | 25 | 25 | ✓ |",
      "A observação de que f(n) parece sempre ser n² é uma *conjectura indutiva incompleta*. Felizmente, neste caso ela é verdadeira — e *pode ser provada por indução completa*. O segundo exemplo, histórico, é um alerta: Fermat observou que 2^(2ⁿ)+1 era primo para n=1,2,3,4 e conjecturou que isso sempre ocorria. A conjectura foi refutada por Euler no caso n=5, onde 2^32+1 = 4.294.967.297 = 641 × 6.700.417.",
      "| **Lição para IA/ML**<br/>Em aprendizado de máquina, todo modelo treinado faz *indução incompleta*: generaliza de um conjunto de treinamento finito para um universo potencialmente infinito de exemplos. O erro de generalização (*generalization gap*) é exatamente a diferença entre o desempenho no treino e no mundo real. A teoria de aprendizado PAC (Probably Approximately Correct) formaliza as condições sob as quais essa indução incompleta tem garantias probabilísticas de sucesso. |",
      "| **Definição: Indução Completa**<br/>Indução onde o conjunto de instâncias verificadas é exaustivo — cobre todos os casos possíveis de forma estruturada. A validade da conclusão é garantida, não meramente plausível. Quando aplicada a números, é usualmente denominada indução matemática. |"
    ]
  },

  "cap8-sec2": {
    id: "cap8-sec2",
    title: "Fechamento de Domínio",
    paragraphs: [
      "O caso mais simples de indução completa ocorre quando o universo de discurso é *finito*. Se a linguagem possui apenas n constantes de objeto σ₁, ..., σₙ, e conseguimos provar que uma propriedade φ vale para cada uma delas individualmente, podemos concluir que φ vale para todo elemento do universo. Isso é formalizado pela regra de **Fechamento de Domínio (DC — Domain Closure)**:",
      "| **Regra de Fechamento de Domínio (DC)**<br/>**φ[σ₁]**<br/>**φ[σ₂]**<br/>**⋮**<br/>**φ[σₙ]**<br/>**──────────**<br/>**∀ν. φ[ν]** |",
      "Como exemplo, considere um domínio com quatro objetos: abby, bess, cody, dana. Se provarmos que cada um deles tem alguém de quem gosta, podemos concluir que todos gostam de alguém:",
      "| **Prova em Fitch** | | |\n|---|---|---|\n| 1. | ∃y. likes(abby, y) | Premissa |\n| 2. | ∃y. likes(bess, y) | Premissa |\n| 3. | ∃y. likes(cody, y) | Premissa |\n| 4. | ∃y. likes(dana, y) | Premissa |\n| 5. | ∀x. ∃y. likes(x, y) | DC: 1, 2, 3, 4 |",
      "O Fechamento de Domínio é direto, mas inaplicável quando o universo é infinito: haveria infinitas premissas a verificar, tornando qualquer prova finita impossível. Para universos infinitos, precisamos de regras de indução que capturem a estrutura do domínio em finitos passos."
    ]
  },

  "cap8-sec3": {
    id: "cap8-sec3",
    title: "Indução Linear",
    paragraphs: [
      "A forma mais clássica de indução completa para universos infinitos é a **Indução Linear**, também conhecida como *indução matemática* ou *indução sobre os naturais*. Ela se aplica a linguagens com uma única constante de objeto (o *elemento base*) e uma única constante de função unária (o *sucessor*), cujos termos formam uma sequência linear:",
      "```\na  →  s(a)  →  s(s(a))  →  s(s(s(a)))  →  ...\n```",
      "A intuição é a dos dominós em fila: se o primeiro cai (caso base), e sempre que um cai o próximo também cai (caso indutivo), então todos os dominós caem.",
      "| **Regra de Indução Linear (Ind)**<br/>**φ[a]                              (caso base)**<br/>**∀μ. (φ[μ] ⇒ φ[s(μ)])    (caso indutivo)**<br/>**──────────────────────────────**<br/>**∀ν. φ[ν]                          (conclusão geral)**<br/><br/>O antecedente do caso indutivo — φ[μ] — é a **hipótese indutiva**. O consequente φ[s(μ)] é a **conclusão indutiva**. |",
      "### 8.4.1 Exemplo: Zero como Identidade à Direita",
      "Nos axiomas de Peano, temos as seguintes propriedades da adição (onde plus(x,y,z) representa x+y=z):",
      "```\n(A1) ∀y. plus(0, y, y)\n(A2) ∀x.∀y.∀z. (plus(x,y,z) ⇒ plus(s(x), y, s(z)))\n(A3) ∀x.∀y.∀z.∀w. (plus(x,y,z) ∧ ¬same(z,w) ⇒ ¬plus(x,y,w))\n```",
      "O axioma (A1) afirma que 0 é identidade à *esquerda*: 0+y=y. Mas será que 0 também é identidade à *direita*, ou seja, que x+0=x para todo x? Isso não é um axioma — precisa ser *provado* por indução:",
      "| **Prova em Fitch** | | |\n|---|---|---|\n| 1. | ∀y. plus(0, y, y) | Premissa (A1) |\n| 2. | ∀x.∀y.∀z. (plus(x,y,z) ⇒ plus(s(x),y,s(z))) | Premissa (A2) |\n| 3. | ∀x.∀y.∀z.∀w. (plus(x,y,z) ∧ ¬same(z,w) ⇒ ¬plus(x,y,w)) | Premissa (A3) |\n| 4. | plus(0, 0, 0) | EU: 1 [y←0] — CASO BASE |\n| 5. | ∀y.∀z. (plus(c,y,z) ⇒ plus(s(c),y,s(z))) | EU: 2 [x←c] |\n| 6. | ∀z. (plus(c,0,z) ⇒ plus(s(c),0,s(z))) | EU: 5 [y←0] |\n| 7. | plus(c,0,c) ⇒ plus(s(c), 0, s(c)) | EU: 6 [z←c] |\n| 8. | ∀x. (plus(x,0,x) ⇒ plus(s(x),0,s(x))) | UI: 7 — CASO INDUTIVO |\n| 9. | ∀x. plus(x, 0, x) | Ind: 4, 8 |",
      "A estrutura da prova é sempre a mesma: (i) provar o caso base para o elemento zero; (ii) provar, usando um marcador arbitrário c, que se a propriedade vale para c então vale para s(c); (iii) aplicar a regra de Indução Linear. Esse padrão de três etapas é a espinha dorsal de toda prova por indução matemática.",
      "| **Conexão com IA: Recursão e Aprendizado em Sequências**<br/>A Indução Linear é o fundamento lógico da **recursão** e da **prova de corretude de algoritmos recursivos**. Em IA, modelos de linguagem autoregressivos (GPT, BERT causal) geram texto de forma análoga: token a token, usando o estado anterior para produzir o próximo — exatamente a estrutura s(s(...s(a)...)). A prova de que um RNN ou LSTM mantém uma invariante ao longo do tempo tipicamente usa um argumento de indução sobre os passos de tempo. |"
    ]
  },

  "cap8-sec4": {
    id: "cap8-sec4",
    title: "Indução em Árvore",
    paragraphs: [
      "Quando a linguagem possui uma única constante de objeto e *múltiplas* constantes de função unárias, os termos não formam uma sequência linear mas sim uma **árvore**. Considere uma linguagem com constante de objeto a e funções unárias f e g. A estrutura de seus termos se ramifica:",
      "| **Estrutura em árvore dos termos**<br/>a<br/>↙ ↘<br/>f(a)       g(a)<br/>↙ ↘     ↙ ↘<br/>f(f(a)) g(f(a)) f(g(a)) g(g(a)) |",
      "Para cobrir todos os termos desta árvore, a regra de indução precisa de um caso indutivo para *cada* função unária:",
      "| **Regra de Indução em Árvore (Ind)**<br/>**φ[a]                                        (caso base)**<br/>**∀μ. (φ[μ] ⇒ φ[f(μ)])            (caso indutivo para f)**<br/>**∀μ. (φ[μ] ⇒ φ[g(μ)])            (caso indutivo para g)**<br/>**────────────────────────────**<br/>**∀ν. φ[ν]** |",
      "### 8.5.1 Exemplo: Pureza de Raça em Árvore Genealógica",
      "Modelemos a árvore genealógica de um cão Rex. Usamos a constante rex, a função f para mapear um cão a seu pai, g para sua mãe, e a relação unária purebred. O axioma fundamental é:",
      "```\n∀x. (purebred(x) ⇒ purebred(f(x)) ∧ purebred(g(x)))\n```",
      "Se Rex é purebred, então todo antepassado de Rex também é. A prova por indução em árvore é:",
      "| **Prova em Fitch** | | |\n|---|---|---|\n| 1. | purebred(rex) | Premissa |\n| 2. | ∀x. (purebred(x) ⇒ purebred(f(x)) ∧ purebred(g(x))) | Premissa |\n| 3. | purebred(c) ⇒ purebred(f(c)) ∧ purebred(g(c)) | EU: 2 |\n| 4. | purebred(c) | Suposição |\n| 5. | purebred(f(c)) ∧ purebred(g(c)) | IE: 3, 4 |\n| 6. | purebred(f(c)) | EA: 5 |\n| 7. | purebred(c) ⇒ purebred(f(c)) | II: 4, 6 |\n| 8. | ∀x. (purebred(x) ⇒ purebred(f(x))) | UI: 7 — caso f |\n| 9. | purebred(c) | Suposição |\n| 10. | purebred(f(c)) ∧ purebred(g(c)) | IE: 3, 9 |\n| 11. | purebred(g(c)) | EA: 10 |\n| 12. | purebred(c) ⇒ purebred(g(c)) | II: 9, 11 |\n| 13. | ∀x. (purebred(x) ⇒ purebred(g(x))) | UI: 12 — caso g |\n| 14. | ∀x. purebred(x) | Ind: 1, 8, 13 |",
      "| **Conexão com IA: Árvores de Decisão e Grafos de Computação**<br/>Indução em árvore é o mecanismo lógico por trás da prova de propriedades de **árvores de decisão**, **grafos de computação** (como os de frameworks de autodiferenciação, e.g. PyTorch) e **parsers** de linguagem natural. A propriedade de que uma transformação preserva um invariante ao longo de toda uma árvore de derivação é tipicamente provada por indução estrutural sobre a árvore — exatamente o conteúdo desta seção. |"
    ]
  },

  "cap8-sec5": {
    id: "cap8-sec5",
    title: "Indução Estrutural",
    paragraphs: [
      "A forma mais geral de indução completa é a **Indução Estrutural**, que acomoda linguagens com múltiplas constantes de objeto e múltiplas constantes de função com aridade arbitrária. É a generalização natural das formas anteriores.",
      "Considere uma linguagem com duas constantes de objeto a, b e uma constante de função binária h. Seus termos incluem a, b, h(a,a), h(a,b), h(b,a), h(b,b), h(a,h(a,a)), ... — uma estrutura nem linear nem estritamente arbórea.",
      "| **Regra de Indução Estrutural (Ind)**<br/>**φ[a]                                                          (caso base a)**<br/>**φ[b]                                                          (caso base b)**<br/>**∀λ.∀μ. ((φ[λ] ∧ φ[μ]) ⇒ φ[h(λ,μ)])    (caso indutivo para h)**<br/>**────────────────────────────────────**<br/>**∀ν. φ[ν]** |",
      "### 8.6.1 Exemplo: Relações p e q sobre Estruturas Aninhadas",
      "Defina duas relações unárias sobre o domínio com constantes a, b e função binária h:",
      "- **p(x):** todo nó-folha da estrutura x é a\n- **q(x):** algum nó-folha da estrutura x é a",
      "Os axiomas para p são:",
      "```\np(a)\n∀u.∀v. (p(u) ∧ p(v)  ⇒ p(h(u,v)))\n¬p(b)\n∀u.∀v. (p(h(u,v)) ⇒  p(u))\n∀u.∀v. (p(h(u,v)) ⇒  p(v))\n```",
      "E para q:",
      "```\nq(a)\n∀u.∀v. (q(u) ⇒ q(h(u,v)))\n∀u.∀v. (q(v) ⇒ q(h(u,v)))\n¬q(b)\n∀u.∀v. (q(h(u,v)) ⇒  q(u)   ∨ q(v))\n```",
      "Queremos provar: **∀x. (p(x) ⇒ q(x))** — se todos os nós-folha são a, então pelo menos um é a. A estrutura da prova por Indução Estrutural tem três partes:",
      "| **Parte da Prova** | **O que provar** |\n|---|---|\n| Caso base para a | p(a) ⇒ q(a)  [trivial: q(a) é premissa] |\n| Caso base para b | p(b) ⇒ q(b)  [ex-falso: p(b) é falso, qualquer coisa se segue] |\n| Caso indutivo para h(c,d) | Se (p(c)⇒q(c)) ∧ (p(d)⇒q(d)), então p(h(c,d)) ⇒ q(h(c,d)) |",
      "O caso base para b merece atenção: como ¬p(b) é uma premissa, ao *supor* p(b) temos uma contradição imediata, da qual qualquer conclusão (incluindo q(b)) se segue — pelo princípio *ex contradictione quodlibet*. Isso mostra que provas formais podem lidar com hipóteses falsas de modo rigoroso.",
      "Para o caso indutivo, a prova assume que p(c)⇒q(c) e p(d)⇒q(d) (hipótese indutiva), supõe p(h(c,d)), e deriva q(h(c,d)) em quatro passos: (1) p(h(c,d)) ⇒ p(c) pelo axioma de p; (2) p(c) ⇒ q(c) pela hipótese; (3) q(c) ⇒ q(h(c,d)) pelo axioma de q; (4) portanto q(h(c,d)). A Indução Estrutural fecha a prova."
    ]
  },

  "cap8-sec6": {
    id: "cap8-sec6",
    title: "Indução Multidimensional",
    paragraphs: [
      "Em muitas situações práticas, queremos provar propriedades que envolvem *mais de uma* variável universalmente quantificada. A **indução multidimensional** — ou indução multivariada — trata desses casos aplicando induções aninhadas: primeiro sobre a variável mais externa, e dentro de cada caso sobre as variáveis internas.",
      "O princípio é direto: para provar ∀x.∀y. φ(x,y) por indução em x, basta provar o caso base ∀y. φ(a,y) e o caso indutivo ∀y. (φ(c,y) ⇒ φ(s(c),y)). Cada um desses subproblemas pode eles mesmos requerer indução em y.",
      "### 8.7.1 Exemplo: Simetria de uma Relação de Equivalência",
      "Considere uma linguagem com constante 0, sucessor s e relação binária e (de equidade), com os axiomas:",
      "```\ne(0,0)\n∀x. ¬e(0,s(x))\n∀x. ¬e(s(x),0)\n∀x.∀y. (e(x,y) ⇒ e(s(x),s(y)))\n∀x.∀y. (e(s(x),s(y)) ⇒ e(x,y))\n```",
      "A relação e é uma relação de equivalência. Vamos provar sua **simetria**: ∀x.∀y. (e(x,y) ⇒ e(y,x)). A estratégia é:",
      "- Indução em x para provar ∀x. [∀y. (e(x,y) ⇒ e(y,x))]\n- Caso base (x=0): provar ∀y. (e(0,y) ⇒ e(y,0)) — por indução em y\n- Caso indutivo (x=s(c)): assumindo ∀y.(e(c,y)⇒e(y,c)), provar ∀y.(e(s(c),y)⇒e(y,s(c))) — também por indução em y",
      "O caso base do caso base (y=0 na indução interna) usa o fato de que e(0,0)⇒e(0,0) é trivial. O caso indutivo interno para y=s(d) usa os axiomas de subida e descida da relação e para repassar a simetria de um nível ao próximo. A prova completa tem cerca de 49 passos — é tediosa, mas *completamente mecânica*, o que é exatamente o que queremos de um sistema formal."
    ]
  },

  "cap8-sec7": {
    id: "cap8-sec7",
    title: "Indução Embutida",
    paragraphs: [
      "Nem sempre é possível provar uma conclusão desejada diretamente por indução padrão. Em alguns casos, é necessário **fortalecer a hipótese indutiva** — provar uma afirmação mais forte como passo intermediário, e então derivar a conclusão original a partir dela.",
      "### 8.8.1 Exemplo: Passo de Dois em Dois",
      "Considere a linguagem com constante a, sucessor s e relação p, com os axiomas:",
      "```\np(a)\np(s(a))\n∀x. (p(x) ⇒ p(s(s(x))))\n```",
      "Intuitivamente, ∀x. p(x) deveria ser verdadeiro: p vale para 0 e 1, e se vale para n então vale para n+2. Mas a indução linear padrão exige provar ∀x.(p(x) ⇒ p(s(x))), ou seja, que o passo de 1 em 1 funciona — o que não é possível derivar diretamente dos axiomas (que dão saltos de 2).",
      "**Solução:** provar o fortalecimento ∀x. (p(x) ∧ p(s(x))) por indução, e então extrair ∀x. p(x) dessa conclusão intermediária.",
      "| **Prova em Fitch** | | |\n|---|---|---|\n| 1. | ∀x. (p(x) ⇒ p(s(s(x)))) | Premissa |\n| 2. | p(a) | Premissa |\n| 3. | p(s(a)) | Premissa |\n| 4. | p(a) ∧ p(s(a)) | EI: 2, 3 — CASO BASE do fortalecimento |\n| 5. | p(c) ∧ p(s(c)) | Suposição — hip. indutiva |\n| 6. | p(c) | EA: 5 |\n| 7. | p(s(c)) | EA: 5 |\n| 8. | p(c) ⇒ p(s(s(c))) | EU: 1 |\n| 9. | p(s(s(c))) | IE: 8, 6 |\n| 10. | p(s(c)) ∧ p(s(s(c))) | EI: 7, 9 — CONCLUSÃO INDUTIVA |\n| 11. | p(c)∧p(s(c)) ⇒ p(s(c))∧p(s(s(c))) | II: 5, 10 |\n| 12. | ∀x. (p(x)∧p(s(x)) ⇒ p(s(x))∧p(s(s(x)))) | UI: 11 — caso indutivo |\n| 13. | ∀x. (p(x) ∧ p(s(x))) | Ind: 4, 12 — CONCLUSÃO INTERMEDIÁRIA |\n| 14. | p(c) ∧ p(s(c)) | EU: 13 |\n| 15. | p(c) | EA: 14 |\n| 16. | ∀x. p(x) | UI: 15 — CONCLUSÃO GERAL |",
      "| **Por que o fortalecimento funciona?**<br/>Ao fortalecer a conclusão de p(x) para p(x)∧p(s(x)), incorporamos na hipótese indutiva a informação sobre dois elementos consecutivos. Isso torna o caso indutivo provável: de p(c)∧p(s(c)) podemos derivar p(s(s(c))) pelo axioma de salto, obtendo p(s(c))∧p(s(s(c))) — exatamente o que precisamos. Essa técnica de *fortalecimento da hipótese indutiva* é ubíqua em provas de correção de algoritmos. |"
    ]
  },

  "cap8-sec8": {
    id: "cap8-sec8",
    title: "Indução em IA e Ciência de Dados",
    paragraphs: [
      "A indução, nos seus diferentes sentidos, é um dos conceitos mais transversais em IA e Ciência de Dados. A tabela abaixo sistematiza as principais manifestações:",
      "| **Contexto em IA/CD** | **Tipo de Indução / Conceito Relacionado** |\n|---|---|\n| Aprendizado supervisionado | Indução incompleta: generalização de dados de treino para dados não vistos |\n| Verificação de algoritmos recursivos | Indução linear: provar invariante em cada passo recursivo |\n| Análise de árvores de decisão / parsers | Indução em árvore: propriedades preservadas em cada nó |\n| Processamento de grafos (GNNs) | Indução estrutural: propagação de mensagens em estruturas arbitrárias |\n| Prova de terminação de loops | Indução linear com medida decrescente (ordinal) |\n| Teoria PAC Learning | Limites de generalização com base no número de amostras |\n| LLMs autoregressivos | Geração token-a-token análoga ao passo s(s(...s(a)...)) |",
      "### 8.9.1 Exemplo Computacional: Verificação de Invariante em Python",
      "O código abaixo ilustra como uma prova por indução linear guia a verificação de que a soma dos primeiros n inteiros é n*(n+1)/2 — provando a base e o passo indutivo via teste:",
      "```\ndef soma_ate(n):\n    \"\"\"Soma 0+1+2+...+n (definição recursiva).\"\"\"\n    if n == 0:\n        return 0\n    return n + soma_ate(n - 1)\n\ndef formula(n):\n    \"\"\"Fórmula fechada: n*(n+1)/2.\"\"\"\n    return n * (n + 1) // 2\n\n# Caso base: n = 0\nassert soma_ate(0) == formula(0), 'Caso base falhou!'\n\n# Passo indutivo: se vale para n, vale para n+1\n# Verificação empírica para n = 0..99 (não substitui a prova formal!)\nfor n in range(100):\n    # Hipótese indutiva: soma_ate(n) == formula(n)\n    assert soma_ate(n) == formula(n), f'Falhou para n={n}'\n    # Conclusão indutiva: soma_ate(n+1) == formula(n+1)\n    assert soma_ate(n+1) == formula(n+1), f'Passo falhou para n={n}'\n\nprint('Verificação empírica aprovada para n=0..100.')\n# Nota: verificação empírica ≠ prova formal.\n# A prova formal requer o argumento de indução matemática.\n```",
      "| **Diferença Crucial para o Profissional de IA**<br/>Testes passando para n=0..99 é indução **incompleta** — não garante que a propriedade valha para n=10¹⁰⁰. A prova por indução matemática é **completa** e garante a propriedade para *todos* os naturais. Sistemas de verificação formal de software (Coq, Lean, Isabelle) utilizam exatamente as regras de indução deste capítulo para construir provas garantidas de propriedades de algoritmos. |"
    ]
  },

  "cap8-sec9": {
    id: "cap8-sec9",
    title: "Resumo do Capítulo",
    paragraphs: [
      "| **Conceito** | **Definição Resumida** |\n|---|---|\n| Indução incompleta | Generalização a partir de amostra não-exaustiva; não garante validade |\n| Indução completa | Cobre todos os casos estruturalmente; garante validade lógica |\n| Fechamento de Domínio (DC) | Para domínios finitos: enumera todos os casos individualmente |\n| Indução Linear | 1 base + 1 sucessor; cobrem toda sequência a, s(a), s(s(a)), ... |\n| Indução em Árvore | 1 base + k sucessores unários; cobrem toda árvore gerada |\n| Indução Estrutural | n bases + m funções n-árias; forma mais geral de indução |\n| Indução Multidimensional | Induções aninhadas para conclusões com múltiplos quantificadores |\n| Fortalecimento da hipótese | Provar conclusão mais forte como passo intermediário quando necessário |"
    ]
  },
  glossario: {
    id: "glossario",
    title: "Glossário",
    subtitle: "Termos e Definições",
    paragraphs: [
      "Este glossário reúne os principais termos utilizados ao longo do livro, com definições voltadas ao contexto da ciência de dados e da lógica aplicada.",
      "**Implicação** — Relação lógica entre duas proposições na qual a verdade da primeira (antecedente) garante a verdade da segunda (consequente). Em lógica formal, é representada pelo conectivo →. Por exemplo: *\"Se o usuário apresentou erro, então o sistema exibe uma mensagem de apoio\"* é uma implicação. É importante notar que a implicação lógica não exige relação causal entre as proposições — ela apenas estabelece que não pode ocorrer o caso em que o antecedente é verdadeiro e o consequente é falso.",
      "**Máxima Verossimilhança** — Método estatístico de estimação de parâmetros que busca encontrar os valores que tornam os dados observados mais prováveis. Dado um modelo estatístico com parâmetros desconhecidos, a estimativa de máxima verossimilhança (MLE) é aquela que maximiza a função de verossimilhança. É amplamente utilizado em aprendizado de máquina, regressão logística e modelos probabilísticos em ciência de dados.",
      "**Verossimilhança** — Função que mede o quão compatíveis são os dados observados com um determinado conjunto de parâmetros de um modelo estatístico. Diferente da probabilidade, que vai do modelo para os dados, a verossimilhança vai dos dados para o modelo: ela avalia quão \"plausíveis\" são os parâmetros à luz das observações. É um conceito fundamental para inferência estatística e para a construção de modelos preditivos em ciência de dados.",
    ],
  },
};
