export interface Chapter {
  id: string;
  title: string;
  sections?: { id: string; title: string }[];
}

// Capítulos ocultos (não excluídos, apenas invisíveis)
export const hiddenChapterPrefixes = ["cap4", "cap5", "cap6", "cap7", "cap8"];

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
    title: "Capítulo 5 — Provas por Resolução",
      "sections": [
      { "id": "cap5-sec1", "title": "Forma Clausal" },
      { "id": "cap5-sec2", "title": "Conversão para Forma Clausal" },
      { "id": "cap5-sec3", "title": "O Princípio da Resolução" },
      { "id": "cap5-sec4", "title": "Resolução como Processo de Raciocínio" },
      { "id": "cap5-sec5", "title": "Provas por Contradição com Resolução" },
    ]
  },

  {
    id: "cap6",
    title: "Capítulo 6 — Lógica Relacional",
    sections: [
      { id: "cap6-sec1", title: "Sintaxe" },
      { id: "cap6-sec2", title: "Semântica" },
      { id: "cap6-sec3", title: "Avaliação" },
      { id: "cap6-sec4", title: "Satisfatibilidade" },
      { id: "cap6-sec5", title: "Exemplos em Ciência de Dados" },
      { id: "cap6-sec6", title: "Fechamento" },
    ]
  },
  {
    id: "cap7",
    title: "Capítulo 7 — Análise da Lógica Relacional",
    sections: [
      { id: "cap7-sec1", title: "Propriedades Lógicas" },
      { id: "cap7-sec2", title: "Relações Lógicas" },
      { id: "cap7-sec3", title: "Lógica Relacional e Lógica Relacional" },
      { id: "cap7-sec4", title: "Resumo" },
    ]
  },
  {
    id: "cap8",
    title: "Capítulo 8 — Verificação de Modelos (Model Checking)",
    sections: [
      { id: "cap8-sec1", title: "Tabelas-Verdade em Lógica Relacional" },
      { id: "cap8-sec2", title: "Modelos Booleanos Estruturados" },
      { id: "cap8-sec3", title: "Modelos Não-Booleanos" },
      { id: "cap8-sec4", title: "Importância para Ciência de Dados" }
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

  cap2: {
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

  "cap3": {
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
    title: "Provas por Resolução",
    subtitle: "Capítulo 5",
    "paragraphs": [
      "A **Resolução Proposicional** é uma das regras de inferência mais importantes da Lógica Proposicional. Com ela, é possível construir procedimentos automáticos de prova que são **corretos** (sound) e **completos** para toda a lógica proposicional.",
      "Do ponto de vista computacional, a resolução é especialmente atraente porque reduz drasticamente o espaço de busca quando comparada a métodos baseados em tabelas-verdade ou enumeração explícita de cenários.",
      "Em Ciência de Dados, a resolução aparece implicitamente em tarefas como verificação automática de regras, detecção de inconsistências em políticas, validação de constraints e checagem de hipóteses lógicas em sistemas explicáveis.",
      "Neste capítulo, estudamos a resolução passo a passo. Começamos pela **forma clausal**, depois apresentamos o **princípio da resolução** e, por fim, mostramos como a resolução pode ser usada como um **método de prova por contradição**, inclusive sem premissas explícitas."
    ]
  },

  "cap5-sec1": {
    "id": "cap5-sec1",
    "title": "Forma Clausal",
    "subtitle": "Capítulo 5",
    "paragraphs": [
      "A Resolução Proposicional opera apenas sobre expressões em **forma clausal**. Antes de aplicar a regra, todas as sentenças precisam ser convertidas para esse formato.",
      "Essa restrição não é uma limitação prática, pois existe um procedimento sistemático que transforma qualquer sentença proposicional em um conjunto equivalente de cláusulas.",

      "###Literais",
      "Um **literal** é uma proposição atômica ou a negação de uma proposição atômica.",
      "Por exemplo, se:",
      "```\\\nfraude\n```",
      "representa *\"o registro é fraudulento\"*, então os literais são:",
      "```\\\nfraude\n¬fraude\n```",

      "###Sentenças clausais",
      "Uma **sentença clausal** é um literal isolado ou uma disjunção de literais.",
      "Exemplos:",
      "```\\\nfraude\n¬fraude ∨ alerta\n```",
      "onde **alerta** pode significar *\"o sistema gera um alerta\"*.",

      "###Cláusulas",
      "Uma **cláusula** é o conjunto de literais que compõem uma sentença clausal.",
      "Os exemplos anteriores correspondem às cláusulas:",
      "```\\\n{fraude}\n{¬fraude, alerta}\n```",

      "###A cláusula vazia",
      "O conjunto vazio:",
      "```\\\n{}\n```",
      "é uma cláusula especial. Ela representa uma disjunção vazia e é **insatisfatível**.",
      "Na resolução, derivar a cláusula vazia significa que o conjunto de regras contém uma **contradição explícita**."
    ]
  },

  "cap5-sec2": {
    "id": "cap5-sec2",
    "title": "Conversão para Forma Clausal",
    "subtitle": "Capítulo 5",
    "paragraphs": [
      "A conversão para forma clausal segue quatro etapas aplicadas em ordem fixa: eliminação de implicações, empurrar negações, distribuir disjunções e, por fim, extrair cláusulas.",

      "###1. Eliminação de implicações (I)",
      "```\\\nφ ⇒ ψ   →   ¬φ ∨ ψ\nφ ⇔ ψ   →   (¬φ ∨ ψ) ∧ (φ ∨ ¬ψ)\n```",

      "###2. Tratamento de negações (N)",
      "```\\\n¬¬φ        → φ\n¬(φ ∧ ψ)   → ¬φ ∨ ¬ψ\n¬(φ ∨ ψ)   → ¬φ ∧ ¬ψ\n```",

      "###3. Distribuição (D)",
      "```\\\nφ ∨ (ψ ∧ χ) → (φ ∨ ψ) ∧ (φ ∨ χ)\n```",

      "###4. Extração de cláusulas (O)",
      "```\\\nφ₁ ∨ ... ∨ φₙ → {φ₁, ..., φₙ}\nφ₁ ∧ ... ∧ φₙ → {φ₁}, ..., {φₙ}\n```",

      "###Exemplo aplicado",
      "Considere a regra:",
      "```\\\ndados_completos ∧ (modelo_treinado ⇒ previsao_confiavel)\n```",
      "Após eliminação da implicação:",
      "```\\\ndados_completos ∧ (¬modelo_treinado ∨ previsao_confiavel)\n```",
      "A forma clausal final é:",
      "```\\\n{dados_completos}\n{¬modelo_treinado, previsao_confiavel}\n```",

      "Mesmo pequenas variações sintáticas podem gerar cláusulas bem diferentes, o que afeta diretamente o processo de resolução."
    ]
  },

  "cap5-sec3": {
    "id": "cap5-sec3",
    "title": "O Princípio da Resolução",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "O **Princípio da Resolução** formaliza um raciocínio simples: se uma cláusula afirma que algo é verdadeiro *ou* outra coisa é verdadeira, e outra cláusula afirma que essa segunda coisa é falsa *ou* uma terceira coisa é verdadeira, então podemos eliminar a incerteza intermediária.",

      "Formalmente, dadas as cláusulas:",
      "```\\\n{φ₁, ..., χ, ..., φₘ}\n{ψ₁, ..., ¬χ, ..., ψₙ}\n```",
      "podemos inferir:",
      "```\\\n{φ₁, ..., φₘ, ψ₁, ..., ψₙ}\n```",

      "###Exemplo em Ciência de Dados",
      "```\\\n{erro_dados, outlier}\n{¬outlier, remover_registro}\n```",
      "Podemos resolver sobre **outlier** e obter:",
      "```\\\n{erro_dados, remover_registro}\n```",

      "Isso expressa uma inferência segura: se o registro não for um outlier, então ele deve ser removido; se for, há erro nos dados.",

      "###Resolução com cláusulas unitárias",
      "```\\\n{modelo_viesado, dados_insuficientes}\n{¬modelo_viesado}\n```",
      "Resolvendo, obtemos:",
      "```\\\n{dados_insuficientes}\n```",

      "###A cláusula vazia",
      "```\\\n{fraude}\n{¬fraude}\n{}\n```",
      "A derivação da cláusula vazia indica que o conjunto de regras é inconsistente."
    ]
  },

  "cap5-sec4": {
    "id": "cap5-sec4",
    "title": "Resolução como Processo de Raciocínio",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Raciocinar com resolução significa aplicar repetidamente o princípio da resolução a cláusulas existentes até que uma conclusão seja obtida ou que nenhuma nova cláusula possa ser gerada.",
      "Uma **derivação por resolução** é uma sequência finita de cláusulas em que cada cláusula é uma premissa ou o resultado da resolução de cláusulas anteriores.",

      "###Exemplo",
      "Considere:",
      "```\\\n{¬erro, alerta}\n{¬outlier, alerta}\n{erro, outlier}\n```",
      "Derivação:",
      "```\\\n1. {¬erro, alerta}\n2. {¬outlier, alerta}\n3. {erro, outlier}\n4. {outlier, alerta}   (1,3)\n5. {alerta}            (2,4)\n```",

      "O resultado mostra que, independentemente de erro ou outlier, o sistema **necessariamente gera um alerta**.",

      "###Limitação importante",
      "A resolução não é generativamente completa: nem toda cláusula logicamente implicada pode ser derivada.",
      "Por exemplo, de:",
      "```\\\n{p}\n{q}\n```",
      "não é possível derivar:",
      "```\\\n{p, q}\n```",

      "Ainda assim, a resolução é suficiente para detectar inconsistência — e isso é o ponto crucial."
    ]
  },

  "cap5-sec5": {
    "id": "cap5-sec5",
    "title": "Provas por Contradição com Resolução",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "O poder real da resolução aparece quando combinamos esse método com o **Teorema da Insatisfatibilidade**.",
      "Um conjunto Δ implica logicamente φ se, e somente se, o conjunto Δ ∪ {¬φ} é insatisfatível.",

      "###Definição",
      "Uma **prova por resolução** de φ a partir de Δ é uma derivação da cláusula vazia a partir da forma clausal de Δ ∪ {¬φ}.",

      "###Exemplo aplicado",
      "Premissas:",
      "```\\\ndados_validos\n(dados_validos ⇒ modelo_confiavel)\n(modelo_confiavel ⇒ decisao_segura)\n```",
      "Queremos provar:",
      "```\\\ndecisao_segura\n```",

      "Negamos o objetivo:",
      "```\\\n¬decisao_segura\n```",

      "Forma clausal:",
      "```\\\n{dados_validos}\n{¬dados_validos, modelo_confiavel}\n{¬modelo_confiavel, decisao_segura}\n{¬decisao_segura}\n```",

      "Derivação:",
      "```\\\n{modelo_confiavel}\n{decisao_segura}\n{}\n```",

      "A cláusula vazia confirma que **decisao_segura é logicamente implicada** pelas premissas.",

      "###Validade sem premissas",
      "A resolução também permite provar sentenças válidas sem premissas.",
      "Por exemplo:",
      "```\\\nmodelo ⇒ (dados ⇒ modelo)\n```",
      "Negando e convertendo para cláusulas, obtemos um conjunto inconsistente, o que confirma a validade da sentença.",

      "###Por que a resolução é tão usada",
      "A resolução é local, mecânica e finita. Não exige escolher instâncias nem explorar infinitos cenários.",
      "Por isso, ela está na base de verificadores automáticos, SAT solvers e sistemas de prova usados em verificação, IA simbólica e raciocínio explicável."
    ]
  },


  "cap6": {
    "id": "cap6-intro",
    "title": "Lógica relacional",
    "subtitle": "Capítulo 6",
    "paragraphs": [
      "Na **Lógica Proposicional**, cada afirmação é tratada como um bloco indivisível: *“o usuário está confuso”*, *“houve erro”*, *“o sistema exibiu ajuda”*. Isso é suficiente quando queremos raciocinar sobre poucas proposições bem definidas.",
      "Em ciência de dados, porém, quase sempre precisamos falar de **muitos objetos** (usuários, sessões, itens, mensagens, eventos) e de **relações entre eles** (clicou, acessou, respondeu, comprou, recebeu feedback). Aí surge um problema: a lógica proposicional não consegue expressar de forma compacta frases do tipo *“para qualquer usuário, se acontecer X então acontece Y”* sem listar usuário por usuário.",
      "A **Lógica Relacional (Relational Logic)** resolve isso ao adicionar duas ferramentas essenciais: **variáveis** (para representar “um usuário qualquer”, “um evento qualquer”) e **quantificadores** (para dizer “para todo” e “existe”). Com isso, conseguimos escrever regras gerais que se aplicam ao dataset inteiro, sem enumerar casos.",
      "Pense na diferença prática: em vez de criar uma proposição para cada usuário (*U1_errou*, *U2_errou*, *U3_errou*...), escrevemos uma única regra:",
      "```\\n∀x.(Erro(x) ⇒ RecebeuFeedback(x))\\n```",
      "Esse tipo de sentença é extremamente próximo do dia a dia em ciência de dados: **regras de qualidade**, **validação de logs**, **critérios de segmentação**, **sistemas explicáveis** e até **consultas em bancos de dados**.",
      "Ao longo deste capítulo, vamos construir essa linguagem passo a passo: sintaxe (como escrever), semântica (como interpretar em dados), avaliação (como calcular verdadeiro/falso) e exemplos reais com cara de ciência de dados."
    ]
  },

  "cap6-sec1": {
    id: "cap6-sec1",
    title: "Sintaxe",
    subtitle: "Como escrever sentenças sobre dados, objetos e relações",
    paragraphs: [
      "Na Lógica Relacional, não usamos proposições atômicas como \(p, q\). Em vez disso, trabalhamos com:",
      "- **Constantes de objeto**: representam entidades específicas (*ana*, *bruno*, *sessao17*, *item42*).\n- **Variáveis**: representam entidades genéricas (*x, y, z*).\n- **Constantes de relação (predicados)**: representam propriedades e relações (*Ativo(x)*, *Comprou(x,y)*, *Acessou(x,y)*).",
      "Uma relação tem **aridade**: quantos argumentos recebe. Em ciência de dados, isso costuma aparecer naturalmente:",
      "- **Unária (1 argumento)**: `Ativo(x)`, `Confuso(x)`, `Evadido(x)`.\n- **Binária (2 argumentos)**: `Acessou(x,s)`, `Comprou(x,item)`, `Segue(x,y)`.\n- **Ternária (3 argumentos)**: `Avaliou(x,item,nota)`, `Ocorreu(evento,usuario,tempo)`.",
      "Chamamos de **termo** qualquer variável ou constante. E chamamos de **átomo** uma relação aplicada a termos. Exemplos:",
      "```\\nAtivo(ana)\\nAcessou(ana, sessao17)\\nComprou(x, item42)\\n```",
      "A partir dos átomos, construímos sentenças com os mesmos conectivos de antes: **¬, ∧, ∨, ⇒, ⇔**. Exemplo de regra de validação (muito comum em dados):",
      "```\\nPago(pedido) ⇒ TemDataPagamento(pedido)\\n```",
      "Por fim, entram os quantificadores:",
      "- **Universal**: `∀x` (para todo x)\n- **Existencial**: `∃x` (existe algum x)",
      "Exemplos no estilo ciência de dados:",
      "```\\n∀x.(Ativo(x) ⇒ ∃s.Acessou(x,s))\\n```",
      "Leitura: *Todo usuário ativo tem pelo menos um acesso registrado.*",
      "```\\n∃x.(Ativo(x) ∧ ¬∃s.Acessou(x,s))\\n```",
      "Leitura: *Existe usuário ativo sem nenhum acesso (possível problema de log, cadastro ou evento faltando).*"
    ]
  },

  "cap6-sec2": {
    id: "cap6-sec2",
    title: "Semântica",
    subtitle: "Como a lógica vira verdadeiro ou falso a partir de um dataset",
    paragraphs: [
      "Escrever fórmulas é só metade do caminho. A pergunta central é: **como uma sentença lógica é avaliada usando dados reais?**",
      "Vamos usar a ideia de **semântica de Herbrand**, que combina muito bem com ciência de dados quando temos um conjunto finito de objetos (usuários, itens, eventos).",
      "Dado um vocabulário com constantes e relações, formamos a **Base de Herbrand**: o conjunto de todos os átomos **sem variáveis** (ground) que podem ser construídos.",
      "Exemplo: constantes `{ana, bruno}` e relações `Ativo(x)` (unária) e `Acessou(x,s)` (binária), com sessões `{s1, s2}`.",
      "A Base de Herbrand inclui átomos como:",
      "```\\nAtivo(ana), Ativo(bruno)\\nAcessou(ana,s1), Acessou(ana,s2), Acessou(bruno,s1), Acessou(bruno,s2)\\n```",
      "Um **dataset** funciona como uma atribuição de verdade para esses átomos: ele diz quais fatos são verdadeiros (presentes) e quais são falsos (ausentes).",
      "Exemplo de atribuição (pense como uma tabela de fatos):",
      "```\\nAtivo(ana)=1\\nAtivo(bruno)=0\\nAcessou(ana,s1)=1\\nAcessou(ana,s2)=0\\nAcessou(bruno,s1)=0\\nAcessou(bruno,s2)=0\\n```",
      "Com essa base, os conectivos funcionam como na lógica proposicional, e os quantificadores são avaliados por **instâncias**: substituímos variáveis por constantes e verificamos o resultado."
    ]
  },

  "cap6-sec3": {
    id: "cap6-sec3",
    title: "Avaliação",
    subtitle: "Quantificadores como checagens de consistência e detecção de anomalias",
    paragraphs: [
      "Em ciência de dados, duas perguntas aparecem o tempo todo:",
      "- **Regra global (para todo)**: *isso vale para todos os registros?*\n- **Detecção (existe)**: *existe algum caso que viola a regra?*",
      "Isso é exatamente a diferença entre `∀` e `∃`.",
      "### A implicação como regra (com tabela-verdade)",
      "A implicação é o conectivo mais usado em regras. A única violação é quando a condição acontece e a consequência não acontece:",
      "```\\nTabela-verdade de p ⇒ q\\n\\np  q  p⇒q\\n1  1   1\\n1  0   0   ← violação\\n0  1   1\\n0  0   1\\n```",
      "Exemplo de regra de qualidade:",
      "```\\nPago(p) ⇒ TemDataPagamento(p)\\n```",
      "Violação: existe pedido `p` tal que `Pago(p)=1` e `TemDataPagamento(p)=0`.",
      "### Exemplo 1 — Regra universal (contrato de dados)",
      "Regra: *Todo usuário ativo tem pelo menos um acesso.*",
      "```\\n∀x.(Ativo(x) ⇒ ∃s.Acessou(x,s))\\n```",
      "Como avaliar: para cada usuário `x`, se `Ativo(x)` for verdadeiro, procure ao menos uma sessão `s` com `Acessou(x,s)` verdadeiro. Se falhar para algum ativo, a sentença toda é falsa.",
      "### Exemplo 2 — Detecção existencial (alerta)",
      "Pergunta: *Existe usuário ativo sem acesso?*",
      "```\\n∃x.(Ativo(x) ∧ ¬∃s.Acessou(x,s))\\n```",
      "Aqui basta **um único caso** para a sentença ser verdadeira — e isso já acende um alerta no pipeline de dados."
    ]
  },

  "cap6-sec4": {
    id: "cap6-sec4",
    title: "Satisfatibilidade e tabelas em miniatura",
    subtitle: "Quando os dados permitem múltiplos “mundos” coerentes",
    paragraphs: [
      "Em dados reais, muitas vezes não sabemos tudo. Falta log, há atraso de sincronização, eventos podem ser perdidos. A lógica ajuda a separar três situações:",
      "- **Certo**: verdadeiro em todos os mundos compatíveis.\n- **Impossível**: falso em todos os mundos compatíveis.\n- **Indeterminado**: verdadeiro em alguns e falso em outros.",
      "Vamos usar um cenário pequeno (para caber numa tabela) e ver como isso funciona.",
      "Considere constantes `{ana, bruno}` e relações unárias `Erro(x)` e `RecebeuFeedback(x)`.",
      "E considere o conjunto de sentenças (regras + fatos parciais):",
      "1) `Erro(ana) ∨ Erro(bruno)`\n2) `∀x.(Erro(x) ⇒ RecebeuFeedback(x))`\n3) `∃x.RecebeuFeedback(x)`",
      "A Base de Herbrand aqui é `{Erro(ana), Erro(bruno), RecebeuFeedback(ana), RecebeuFeedback(bruno)}`. Podemos montar uma tabela de verdade pequena e identificar quais atribuições satisfazem o conjunto. A ideia prática é: **nem toda combinação de valores é permitida**, porque a regra (2) corta mundos inconsistentes.",
      "Em pipelines, isso aparece como: *“meus dados podem estar assim?”* Se um ‘mundo’ viola regras de negócio, ele é descartado."
    ]
  },

  "cap6-sec5": {
    id: "cap6-sec5",
    title: "Exemplos em Ciência de Dados",
    subtitle: "Regras sobre logs, usuários e decisões explicáveis",
    paragraphs: [
      "Vamos trabalhar com um exemplo bem típico em plataformas educacionais (LMS), análise de comportamento e IHC.",
      "### Vocabulário (entidades e relações)",
      "Constantes de objeto (exemplos): usuários `u1, u2, u3`, atividades `a1`, mensagens `m1`.",
      "Relações (predicados):\n- `Erro(u,a)` — usuário `u` cometeu erro na atividade `a`\n- `Apoio(u,a)` — sistema enviou apoio para `u` em `a`\n- `Abandonou(u,a)` — usuário abandonou\n- `Concluiu(u,a)` — usuário concluiu\n- `Confuso(u)` — rótulo (manual ou inferido) de confusão",
      "### Exemplo 1 — Sistema “apoio quando há erro” (bidirecional)",
      "Regra forte (equivalência):",
      "```\\n∀u∀a.(Apoio(u,a) ⇔ Erro(u,a))\\n```",
      "Leitura: *o sistema envia apoio exatamente e apenas quando ocorre erro*. Isso é útil para auditoria: se a equivalência falhar, ou o apoio está sendo disparado indevidamente, ou erros não estão sendo tratados.",
      "Forma de detecção de problema (bem usada em dados):",
      "```\\n∃u∃a.(Apoio(u,a) ∧ ¬Erro(u,a))\\n```",
      "Leitura: *existe apoio sem erro* (falso positivo do gatilho, ou erro de log).",
      "E o outro lado:",
      "```\\n∃u∃a.(Erro(u,a) ∧ ¬Apoio(u,a))\\n```",
      "Leitura: *existe erro sem apoio* (falha no disparo, evento perdido ou regra incompleta).",
      "### Exemplo 2 — Regra de interpretação (explicabilidade)",
      "Uma regra explicável típica em análise de interação:",
      "```\\n∀u.( (∃a.Erro(u,a)) ∧ (∃a.Abandonou(u,a)) ⇒ Confuso(u) )\\n```",
      "Leitura: *se o usuário tem evidência de erro e abandono, classificamos como confuso.*",
      "Aqui vale a reflexão lógica (muito importante): essa regra define uma **condição suficiente** para `Confuso(u)`, mas não diz que é a única causa. O aluno aprende a perguntar: o inverso vale? Provavelmente não.",
      "### Exemplo 3 — “Existe uma atividade problemática” (analytics)",
      "Pergunta investigativa:",
      "```\\n∃a.∀u.( Matriculado(u,a) ⇒ ¬Concluiu(u,a) )\\n```",
      "Leitura: *existe uma atividade em que ninguém conclui*. Isso pode indicar problema de design, enunciado confuso ou bug."
    ]
  },

  "cap6-sec6": {
    id: "cap6-sec6",
    title: "Fechamento",
    subtitle: "Do formalismo à prática: regras, consultas e qualidade de dados",
    paragraphs: [
      "A Lógica Relacional é, na prática, uma linguagem de alto nível para falar de **estruturas de dados** e **regras sobre registros**.",
      "O que você deve levar deste capítulo:",
      "- `∀` aparece como **contrato de consistência** (*para todo registro…*).\n- `∃` aparece como **detector de exceção** (*existe algum registro que…*).\n- Implicação modela regras e a tabela-verdade mostra exatamente quando há violação.\n- Muitas tarefas de ciência de dados (qualidade, auditoria, regras explicáveis) são naturalmente expressas nessa linguagem.",
      "Uma forma útil de pensar é: **toda regra universal tem uma forma existencial de violação**. Isso conecta lógica diretamente a monitoramento de pipelines:",
      "```\\nRegra:  ∀x.(P(x) ⇒ Q(x))\\nErro:   ∃x.(P(x) ∧ ¬Q(x))\\n```",
      "No próximo capítulo, isso vai nos ajudar a formalizar melhor inferências e a discutir quando uma conclusão é realmente garantida pelos dados e regras — e quando é apenas uma hipótese."
    ]
  },

  cap7: {
    id: "cap7",
    title: "Análise da Lógica Relacional",
    subtitle: "Capítulo 7",
    paragraphs: [
      "A **Lógica Relacional** amplia significativamente o poder expressivo da Lógica Proposicional ao permitir que falemos sobre **objetos, propriedades e relações entre entidades**. No entanto, escrever sentenças não é suficiente. Precisamos compreender como essas sentenças se comportam do ponto de vista lógico: quando são sempre verdadeiras, quando podem falhar, quando entram em conflito e quando realmente implicam outras conclusões. É esse exame sistemático que chamamos de **Análise da Lógica Relacional**.",
      "Neste capítulo, investigamos primeiro as **propriedades lógicas das sentenças individuais**, classificando-as como válidas, contingentes ou insatisfatíveis. Essas categorias já foram estudadas na Lógica Proposicional, mas aqui ganham novas camadas de complexidade devido à presença de **variáveis e quantificadores**. Em ciência de dados, essa distinção é fundamental para avaliar regras de consistência, hipóteses formais e restrições que se aplicam a conjuntos inteiros de registros.",
      "Em seguida, analisamos as **relações entre sentenças**, como equivalência lógica, implicação lógica (entailment) e consistência. Essas noções permitem responder perguntas centrais no contexto de sistemas baseados em regras e validação de dados: uma regra realmente garante outra? Duas formulações diferentes expressam a mesma restrição? Um conjunto de regras pode ser satisfeito simultaneamente ou contém contradições?",
      "Embora as definições formais dessas noções sejam paralelas às da Lógica Proposicional, surgem diferenças importantes decorrentes da estrutura sintática e semântica da Lógica Relacional. A presença de quantificadores introduz fenômenos como distribuição de negação, reversão de quantificadores do mesmo tipo e implicações envolvendo variáveis livres — aspectos que não aparecem na lógica proposicional simples.",
      "Por fim, discutimos um resultado teórico relevante: a **equivalência expressiva entre Lógica Relacional e Lógica Proposicional em domínios finitos**, obtida por meio do processo de grounding. Mostramos como sentenças relacionais podem ser transformadas em fórmulas proposicionais equivalentes, o que garante decidibilidade de satisfatibilidade e permite a aplicação de técnicas automáticas de verificação.",
      "Ao longo do capítulo, enfatizamos aplicações em ciência de dados, como auditoria de regras, validação de logs, verificação de integridade de bancos de dados e análise formal de pipelines decisórios. A Análise da Lógica Relacional não é apenas um exercício teórico: ela fornece as bases para construir sistemas mais consistentes, explicáveis e confiáveis.",
      "Se a Lógica Relacional nos permite **expressar relações complexas sobre dados**, a sua análise nos permite **avaliar rigorosamente as consequências dessas expressões** — distinguindo o que é necessariamente verdadeiro, o que é possível e o que é logicamente impossível."
    ],
  },

  "cap7-sec1": {
    id: "cap7-sec1",
    title: "Propriedades Lógicas",
    subtitle: "Capítulo 7",
    paragraphs: [

      "##Classificação das sentenças",
      "Assim como na Lógica Proposicional, uma sentença pode ser:",
      "- **Válida**: verdadeira em toda atribuição de verdade.\n- **Insatisfatível**: falsa em toda atribuição.\n- **Contingente**: verdadeira em algumas atribuições e falsa em outras.",
      "Alternativamente:",
      "- **Satisfatível**: verdadeira em pelo menos uma atribuição.\n- **Falsificável**: falsa em pelo menos uma atribuição.",

      "##Exemplo em ciência de dados",
      "Considere a regra:",
      "```\\n∀x.(Erro(x) ⇒ RecebeuFeedback(x))\\n```",
      "Essa sentença **não é válida**, pois depende do dataset. Se existir um erro sem feedback, ela será falsa. Portanto, ela é contingente.",
      
      "Agora considere:",
      "```\\np(a) ∨ ¬p(a)\\n```",
      "Essa é a Lei do Terceiro Excluído. É válida — independentemente dos dados.",
      
      "Outro exemplo clássico:",
      "```\\np(a) ⇔ ¬¬p(a)\\n```",
      "Dupla negação — também válida.",
      
      "Leis de De Morgan:",
      "```\\n¬(p(a) ∧ q(a,b)) ⇔ (¬p(a) ∨ ¬q(a,b))\\n¬(p(a) ∨ q(a,b)) ⇔ (¬p(a) ∧ ¬q(a,b))\\n```",
      "Essas equivalências continuam válidas mesmo em Lógica Relacional quando tratamos sentenças ground como proposições.",

      "##Reversão de quantificadores do mesmo tipo",
      "```\\n∀x.∀y.q(x,y) ⇔ ∀y.∀x.q(x,y)\\n∃x.∃y.q(x,y) ⇔ ∃y.∃x.q(x,y)\\n```",
      "Reordenar quantificadores do mesmo tipo não altera o significado.",
      
      "##Distribuição existencial",
      "```\\n∃y.∀x.q(x,y) ⇒ ∀x.∃y.q(x,y)\\n```",
      "Se existe um único objeto que se relaciona com todos, então cada objeto tem pelo menos um parceiro.",
      "Exemplo em dados:",
      "Se existe um tutor que responde a todos os alunos, então todo aluno tem algum tutor que responde (o mesmo tutor).",

      "##Distribuição da negação",
      "```\\n¬∀x.p(x) ⇔ ∃x.¬p(x)\\n¬∃x.p(x) ⇔ ∀x.¬p(x)\\n```",
      "Essas regras são fundamentais em detecção de inconsistências.",
      "Exemplo:",
      "```\\n¬∀x.(Ativo(x)) ⇔ ∃x.(¬Ativo(x))\\n```",
      "Dizer que 'nem todos estão ativos' é o mesmo que dizer que 'existe alguém inativo'."
    ]
  },

  "cap7-sec2": {
    id: "cap7-sec2",
    title: "Relações Lógicas",
    subtitle: "Capítulo 7",
    paragraphs: [

      "##Equivalência lógica",
      "Duas sentenças φ e ψ são logicamente equivalentes se sempre possuem o mesmo valor de verdade.",
      "Exemplo em dados:",
      "```\\n¬∀x.Erro(x) ⇔ ∃x.¬Erro(x)\\n```",
      "Ambas expressam exatamente a mesma restrição sobre o dataset.",

      "##Implicação lógica (entailment)",
      "φ implica ψ (φ ⊨ ψ) se toda atribuição que satisfaz φ também satisfaz ψ.",
      "Exemplo ground:",
      "```\\np(a) ⊨ (p(a) ∨ p(b))\\n```",
      "Se p(a) é verdadeiro, então a disjunção é verdadeira.",
      "Mas:",
      "```\\np(a) ⊭ (p(a) ∧ p(b))\\n```",
      "Pois p(b) pode ser falso.",

      "##Implicação com quantificadores",
      "```\\n∃y.∀x.q(x,y) ⊨ ∀x.∃y.q(x,y)\\n```",
      "Se existe um único servidor que atende todos os usuários, então cada usuário tem pelo menos um servidor que o atende.",
      
      "```\\n∀x.∀y.q(x,y) ⊨ ∀x.∀y.q(y,x)\\n```",
      "Se a relação vale para todos os pares, então também vale invertendo variáveis.",

      "##Variáveis livres",
      "Uma sentença com variáveis livres é interpretada como universalmente quantificada.",
      "Exemplo:",
      "```\\nq(x,y)\\n```",
      "Equivale semanticamente a:",
      "```\\n∀x.∀y.q(x,y)\\n```",
      "Portanto, q(x,y) implica q(y,x) apenas se a relação for universal."
    ]
  },

  "cap7-sec3": {
    id: "cap7-sec3",
    title: "Lógica Relacional e Lógica Relacional",
    subtitle: "Capítulo 7",
    paragraphs: [

      "##Equivalência expressiva",
      "A Lógica Relacional é expressivamente equivalente à Lógica Proposicional quando consideramos apenas sentenças ground.",
      "Para isso, realizamos três etapas:",
      "1) Converter para forma prenex.\n2) Realizar grounding.\n3) Substituir cada átomo ground por uma proposição.",

      "##Exemplo passo a passo",
      "Linguagem com constantes {a,b} e sentenças:",
      "```\\n{p(a), ∀x.(p(x) ⇒ q(x)), ∃x.¬q(x)}\\n```",

      "Grounding resulta em:",
      "```\\np(a)\\np(a) ⇒ q(a)\\np(b) ⇒ q(b)\\n¬q(a) ∨ ¬q(b)\\n```",

      "Substituindo por proposições:",
      "```\\npa\\npa ⇒ qa\\npb ⇒ qb\\n¬qa ∨ ¬qb\\n```",

      "Agora o problema virou puramente proposicional.",
      "Isso é importante porque:",
      "- A satisfatibilidade proposicional é decidível.\n- Logo, a satisfatibilidade relacional também é decidível em domínios finitos.\n- RL é **compacta**: qualquer inconsistência pode ser demonstrada com um subconjunto finito.",

      "##Importância para ciência de dados",
      "Essa equivalência permite:",
      "- Verificação automática de regras.\n- Model checking.\n- Validação formal de restrições.\n- Provas automatizadas de consistência.",
      "Na prática, sistemas de integridade de dados e motores de regras fazem exatamente isso: transformam regras gerais em instâncias concretas sobre registros."
    ]
  },

  "cap7-sec4": {
    id: "cap7-sec4",
    title: "Resumo",
    subtitle: "Capítulo 7",
    paragraphs: [
      "Análise da Lógica Relacional fornece ferramentas para responder perguntas fundamentais:",
      "- Minha regra é sempre verdadeira?\n- Existe cenário que a viola?\n- Duas regras dizem a mesma coisa?\n- Uma regra implica outra?",
      "Em ciência de dados, isso significa:",
      "- Garantir consistência de logs.\n- Detectar contradições em pipelines.\n- Validar modelos explicáveis.\n- Demonstrar formalmente que decisões seguem das premissas.",
      "Mais do que um exercício teórico, Análise da Lógica Relacional é a base lógica de auditorias, verificações automáticas e sistemas confiáveis.",
      "Pensar logicamente sobre relações é aprender a transformar estruturas de dados em conclusões justificáveis."
    ]
  },

  cap8: {
    id: "cap8",
    title: "Verificação de Modelos (Model Checking)",
    subtitle: "Capítulo 8",
    paragraphs: [
      "A **Verificação de Modelos** é o processo de analisar sentenças da Lógica Relacional verificando diretamente suas possíveis atribuições de verdade. Assim como na Lógica Proposicional, podemos determinar se uma sentença é **válida**, **satisfatível** ou se um conjunto de premissas implica uma conclusão examinando os modelos possíveis.",
      "No entanto, na Lógica Relacional o número de possibilidades cresce rapidamente. Se tivermos n objetos e m relações de aridade k, a base de Herbrand terá m·n^k átomos ground. Isso significa que existem 2^(m·n^k) possíveis atribuições de verdade.",
      "Por exemplo, com 10 objetos e 5 relações binárias (aridade 2), temos 5·10² = 500 átomos ground e 2^500 possíveis modelos — um número astronômico.",
      "Felizmente, existem métodos que permitem analisar sentenças sem examinar todas as possibilidades. Começamos com o método de **tabela-verdade relacional** e depois introduzimos abordagens mais eficientes, como modelos booleanos estruturados e modelos não-booleanos."
    ]
  },

  "cap8-sec1": {
    id: "cap8-sec1",
    title: "Tabelas-Verdade em Lógica Relacional",
    paragraphs: [
      "Em princípio, podemos construir uma tabela-verdade para qualquer conjunto de sentenças relacionais, assim como fazemos na Lógica Proposicional.",
      "Considere uma linguagem com dois objetos {a, b} e duas relações unárias p e q.",
      "Premissas:",
      "p(a) ∨ p(b)",
      "∀x.(p(x) ⇒ q(x))",
      "Conclusão:",
      "∃x.q(x)",
      "A tabela-verdade relacional correspondente é:"
    ],
    table: {
      headers: ["p(a)", "p(b)", "q(a)", "q(b)", "p(a)∨p(b)", "∀x(p(x)⇒q(x))", "∃x q(x)"],
      rows: [
        [1,1,1,1,1,1,1],
        [1,1,1,0,1,0,1],
        [1,1,0,1,1,0,1],
        [1,1,0,0,1,0,0],
        [1,0,1,1,1,1,1],
        [1,0,1,0,1,1,1],
        [1,0,0,1,1,0,1],
        [1,0,0,0,1,0,0],
        [0,1,1,1,1,1,1],
        [0,1,1,0,1,0,1],
        [0,1,0,1,1,1,1],
        [0,1,0,0,1,0,0],
        [0,0,1,1,0,1,1],
        [0,0,1,0,0,1,1],
        [0,0,0,1,0,1,1],
        [0,0,0,0,0,1,0]
      ]
    },
    paragraphs_after_table: [
      "Observando a tabela, vemos que toda atribuição que torna ambas as premissas verdadeiras também torna a conclusão verdadeira.",
      "Portanto, as premissas **implicam logicamente** a conclusão.",
      "Esse método é conceitualmente simples, mas cresce exponencialmente."
    ]
  },

  "cap8-sec2": {
    id: "cap8-sec2",
    title: "Modelos Booleanos Estruturados",
    paragraphs: [
      "Em vez de listar todas as atribuições possíveis, podemos construir o modelo diretamente preenchendo uma matriz para cada relação.",
      "Considere a relação likes(x,y) entre quatro pessoas.",
      "Criamos uma matriz 4x4 inicialmente vazia e preenchemos com base nas restrições.",
      "Restrições unitárias são aplicadas primeiro.",
      "Novas inferências surgem a partir dessas entradas.",
      "Esse método reduz drasticamente o espaço de busca.",
      "Mesmo quando há múltiplos modelos possíveis, a parte preenchida da tabela pode ser suficiente para verificar se uma conclusão é consequência lógica."
    ]
  },

  "cap8-sec3": {
    id: "cap8-sec3",
    title: "Modelos Não-Booleanos",
    paragraphs: [
      "Em alguns casos, podemos representar relações não como valores booleanos independentes, mas como variáveis com múltiplos valores possíveis.",
      "Por exemplo, se cada relação unária deve ser verdadeira para exatamente um objeto, podemos tratá-la como uma variável que assume um dos objetos como valor.",
      "Isso reduz significativamente o número de possibilidades.",
      "Essa técnica é usada em problemas de restrição, como quebra-cabeças lógicos.",
      "Considere uma formalização do jogo Sukoshi usando a relação cell(linha,coluna,valor).",
      "Restrições podem ser expressas como:",
      "∀x∀y∀z∀w.(cell(x,y,w) ∧ cell(x,z,w) ⇒ y=z)",
      "∀x∀y∀z∀w.(cell(x,z,w) ∧ cell(y,z,w) ⇒ x=y)",
      "∀x∀y∃w.cell(x,y,w)",
      "A cada preenchimento dedutivo do tabuleiro estamos realizando model checking relacional.",
      "Esse mesmo princípio aparece em validação de dados, verificação de integridade de banco de dados e resolução de restrições em ciência de dados."
    ]
  },

  "cap8-sec4": {
    id: "cap8-sec4",
    title: "Importância para Ciência de Dados",
    paragraphs: [
      "Verificação de Modelos permite:",
      "- Testar consistência de regras.",
      "- Confirmar implicações formais.",
      "- Detectar inconsistências automaticamente.",
      "- Validar pipelines baseados em restrições.",
      "Embora o espaço de busca possa ser grande, técnicas estruturadas tornam o problema tratável.",
      "Model Checking conecta lógica formal com aplicações práticas como auditoria algorítmica, explicabilidade e verificação de sistemas inteligentes."
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
