export interface Chapter {
  id: string;
  title: string;
  sections?: { id: string; title: string }[];
}

export interface ChapterContent {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
}

export const chapters: Chapter[] = [
  {
    id: "intro",
    title: "Introdução",
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
    id: "cap1",
    title: "Capítulo 1 — Lógica Proposicional",
    sections: [
      { id: "cap1-sec1", title: "Sintaxe" },
      { id: "cap1-sec2", title: "Semântica" },
      { id: "cap1-sec3", title: "Avaliação ou Interpretação" },
      { id: "cap1-sec4", title: "Satisfatibilidade" },
      { id: "cap1-sec5", title: "Exemplos" },

    ],
  },
  {
    id: "cap2",
    title: "Capítulo 2 — Análise Proposicional",
    sections: [
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
    title: "Capítulo 3 — Provas em Lógica Proposicional",
    sections: [
      { id: "cap3-sec1", title: "Esquemas de Axiomas" },
      { id: "cap3-sec2", title: "Regras de Inferência" },
      { id: "cap3-sec3", title: "Provas Diretas" },
      { id: "cap3-sec4", title: "Sistemas de Prova" },
      { id: "cap3-sec5", title: "O Sistema de Hilbert" },
      { id: "cap3-sec6", title: "Correção e Completude" },
      { id: "cap3-sec7", title: "Resumo do Capítulo" }
    ]
  },
  {
    "id": "cap4",
    "title": "Capítulo 4 — Dedução Natural",
    "sections": [
      { "id": "cap4-sec1", "title": "Provas condicionais" },
      { "id": "cap4-sec2", "title": "Estrutura de subprovas" },
      { "id": "cap4-sec3", "title": "O sistema de Fitch" },
      { "id": "cap4-sec4", "title": "Regras de inferência na dedução natural" },
      { "id": "cap4-sec5", "title": "Correção e completude" },
      { "id": "cap4-sec6", "title": "Estratégias para encontrar provas" }
    ]
  },
  {
    id: "cap5",
    title: "Capítulo 5 — O Retorno",
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

  cap1: {
    id: "cap1",
    title: "Lógica Proposicional",
    subtitle: "Capítulo 1",
    paragraphs: [
      "A **Lógica Proposicional** é o ponto de partida formal para o estudo da lógica aplicada à ciência de dados. Ela se ocupa de **proposições** e das **relações lógicas** entre elas. De forma intuitiva, uma proposição pode ser entendida como uma possível condição do mundo que pode ser avaliada como **verdadeira ou falsa**. Exemplos simples incluem afirmações como “está chovendo”, “o usuário clicou no botão de ajuda” ou “o modelo classificou o aluno como em risco”.",
      "É importante notar que uma proposição **não precisa ser conhecida como verdadeira** para ser considerada uma proposição. Ela representa uma possibilidade sobre o estado do mundo e é definida justamente por **poder ser avaliada como verdadeira ou falsa em um determinado contexto**, ainda que não saibamos de antemão qual é o seu valor de verdade. Em muitos cenários (especialmente em ciência de dados), lidamos com proposições cujo valor ainda é desconhecido ou depende da verificação de outras proposições.",
      "Neste capítulo, introduzimos a Lógica Proposicional como uma **linguagem formal** para representar conhecimento de maneira precisa. Começamos apresentando os **elementos sintáticos** da linguagem (símbolos proposicionais e conectivos lógicos, como **e**, **ou**, **não** e **implica**). Em seguida, exploramos como atribuir significado a essas expressões por meio do conceito de **atribuição de valores de verdade**, que estabelece se cada proposição é verdadeira ou falsa em um determinado cenário.",
      "A partir disso, mostramos como é possível **avaliar mecanicamente** o valor de verdade de sentenças complexas, dadas determinadas atribuições. Esse processo está na base de técnicas como tabelas-verdade, verificação de modelos e resolução lógica. Também discutimos métodos sistemáticos para encontrar atribuições de verdade que **satisfazem** um conjunto de sentenças, conectando a lógica proposicional à ideia de busca por cenários coerentes com os dados disponíveis.",
      "Ao longo do capítulo, enfatizamos aplicações diretas da Lógica Proposicional em ciência de dados, como a formalização de regras de decisão, a explicação do comportamento de modelos baseados em regras, a análise de logs de sistemas interativos e a modelagem de condições em sistemas digitais. Mostramos ainda como essa lógica pode ser usada tanto para formalizar fragmentos da **linguagem natural** quanto para descrever o funcionamento de **circuitos digitais**, evidenciando seu papel fundamental na computação.",
      "A Lógica Proposicional ocupa um lugar especial por combinar **simplicidade conceitual** com **fortes garantias computacionais**. Embora sua capacidade expressiva seja limitada quando comparada a lógicas mais sofisticadas, ela permite compreender, de forma clara, conceitos centrais como **implicação lógica**, **consistência**, **satisfatibilidade** e **consequência lógica** (conceitos que servirão de base para os capítulos seguintes e para aplicações mais avançadas em ciência de dados e inteligência artificial)."
    ],
  },

  "cap1-sec1": {
    id: "cap1-sec1",
    title: "Sintaxe da Lógica Proposicional",
    subtitle: "Capítulo 1",
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
    subtitle: "Capítulo 1",
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
    subtitle: "Capítulo 1",
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
    subtitle: "Capítulo 1",
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


  cap2: {
    id: "cap2",
    title: "Propriedades e Relações Lógicas",
    subtitle: "Capítulo 2",
    paragraphs: [
      "No capítulo anterior, aprendemos a avaliar sentenças lógicas a partir de atribuições específicas de valores de verdade. Dado um cenário particular, era possível determinar se uma fórmula era verdadeira ou falsa naquele contexto. Esse tipo de análise é fundamental, mas naturalmente levanta uma nova questão: *o que podemos afirmar sobre uma sentença independentemente do cenário considerado?*",
      "Na prática científica (especialmente na Ciência de Dados) raramente estamos interessados em um único conjunto de valores. Modelos, regras e critérios precisam manter propriedades sob diferentes condições; por isso, a lógica passa a olhar menos para avaliações pontuais e mais para características que se preservam ao longo de todas as possíveis atribuições.",
      "Neste capítulo, começamos examinando propriedades lógicas de sentenças individuais. Algumas sentenças são verdadeiras em todos os cenários; outras variam conforme os dados; e há ainda aquelas que nunca podem ser verdadeiras. Essas distinções nos conduzem às noções de **validade**, **contingência** e **insatisfatibilidade**.",
      "Em seguida, ampliamos o foco para relações entre sentenças: quando uma sentença é consequência lógica de outra, quando duas sentenças são logicamente equivalentes e quando um conjunto de sentenças é logicamente consistente.",
      "Encerramos conectando propriedades e relações. Veremos que validade, consequência lógica, equivalência e consistência são aspectos complementares de uma mesma estrutura, importante para sustentar raciocínios corretos e modelos confiáveis."
    ]
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
      "```\\\np  q  ¬(p ∨ q)  ¬p ∧ ¬q\n1  1     0          0\n1  0     0          0\n0  1     0          0\n0  0     1          1\n```",
      "As colunas coincidem em todas as linhas; portanto, as sentenças são equivalentes.",
      
      "###Exemplo com não equivalência",
      "```\\\np  q  p ∧ q  p ∨ q\n1  1    1      1\n1  0    0      1\n0  1    0      1\n0  0    0      0\n```",
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
      "```\\\np  q  p  p ∨ q\n1  1  1    1\n1  0  1    1\n0  1  0    1\n0  0  0    0\n```",

      "###Exemplo: p ⊭ (p ∧ q)",
      "```\\\np  q  p  p ∧ q\n1  1  1    1\n1  0  1    0\n0  1  0    0\n0  0  0    0\n```",
      "A segunda linha mostra a falha: a premissa é verdadeira e a conclusão é falsa.",

      "###Exemplo com múltiplas premissas",
      "```\\\np  q  p  q  p ∧ q\n1  1  1  1    1\n1  0  1  0    0\n0  1  0  1    0\n0  0  0  0    0\n```",
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
      "```\\\np  q  p ∨ q  ¬p ∨ ¬q  ¬p ∧ ¬q\n1  1    1      0          0\n1  0    1      1          0\n0  1    1      1          0\n0  0    0      1          1\n```",
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
    "title": "Provas em Lógica Proposicional",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Até aqui, usamos principalmente **tabelas-verdade** para verificar propriedades e relações lógicas, como **consequência lógica** (⊨), **equivalência** e **satisfatibilidade**. Esse método é conceitualmente simples: basta enumerar todas as atribuições possíveis e verificar o comportamento das sentenças em cada cenário.",
      "O problema é que o número de cenários cresce muito rápido. Para *n* proposições atômicas, existem **2ⁿ** atribuições possíveis. Quando *n* é grande, construir e checar uma tabela-verdade completa pode ser impraticável (ou até impossível) em termos de tempo e memória.",
      "Para lidar com isso, introduzimos **métodos de prova**. Em vez de explorar todos os cenários, uma prova trabalha por **manipulação simbólica**, aplicando regras formais que preservam a verdade: começamos com premissas e derivamos conclusões passo a passo.",
      "Na prática, muitas vezes é possível produzir uma prova **muito menor** do que a tabela-verdade correspondente. Além disso, provas são naturalmente explicáveis: elas mostram *por que* uma conclusão segue das premissas.",
      "Neste capítulo, vamos construir esse caminho com calma. Primeiro, definimos **esquemas de axiomas** e **regras de inferência**. Depois, formalizamos o que é uma **prova direta** e apresentamos um sistema clássico de prova: o **Sistema de Hilbert**. Por fim, discutimos os critérios que julgam um sistema de prova: **correção (soundness)** e **completude (completeness)**."
    ]
  },

  "cap3-sec1": {
    "id": "cap3-sec1",
    "title": "Esquemas de Axiomas",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Um **esquema de axioma** (ou *axiom schema*) é uma expressão que segue as regras gramaticais da nossa linguagem, exceto pelo uso de **metavariáveis** (normalmente letras gregas) no lugar de partes da expressão.",
      "As metavariáveis funcionam como “espaços reservados”: podemos substituí-las por sentenças quaisquer, desde que a substituição seja feita de forma **consistente** (a mesma metavariável deve virar a mesma sentença em todas as ocorrências).",
      "Exemplo de esquema:",
      "```\\nφ ⇒ (ψ ⇒ φ)\\n```",
      "Algumas instâncias (substituindo φ e ψ por sentenças concretas):",
      "```\\np ⇒ (q ⇒ p)\np ⇒ (p ⇒ p)\n¬p ⇒ (q ⇒ ¬p)\n(p ⇒ q) ⇒ ((q ⇒ r) ⇒ (p ⇒ q))\\n```",
      "Um esquema é dito **válido** quando **todas** as suas instâncias são sentenças válidas (isto é, verdadeiras em todas as atribuições). O esquema acima é válido.",
      "Outros exemplos de esquemas úteis (muitos deles válidos):",
      "- **Reflexividade:** `φ ⇒ φ`\n- **Eliminação da dupla negação:** `¬¬φ ⇒ φ`\n- **Introdução da dupla negação:** `φ ⇒ ¬¬φ`\n- **Tautologia (terceiro excluído):** `φ ∨ ¬φ`",
      "Ao longo do capítulo, vamos usar esquemas válidos como “blocos de construção” dentro de provas."
    ]
  },

  "cap3-sec2": {
    "id": "cap3-sec2",
    "title": "Regras de Inferência",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Uma **regra de inferência** é um padrão de raciocínio que permite derivar uma conclusão a partir de premissas. Assim como nos esquemas, usamos metavariáveis para descrever o padrão geral.",
      "Escrevemos uma regra com as premissas “em cima da linha” e a conclusão “embaixo da linha”. Por exemplo, a regra abaixo é chamada **Eliminação da Implicação** (ou *Modus Ponens*):",
      "```\\nφ ⇒ ψ\nφ\n——————\nψ\\n```",
      "A leitura é: se temos `φ ⇒ ψ` e também temos `φ`, então podemos concluir `ψ`.",
      "Aqui estão outras regras importantes (apresentadas como padrões):",
      "###Criação da Implicação (IC)",
      "```\\nψ\n——————\nφ ⇒ ψ\\n```",
      "Ideia: se `ψ` é verdadeiro, então `φ ⇒ ψ` é verdadeiro para qualquer `φ`.",
      "###Distribuição da Implicação (ID)",
      "```\\nφ ⇒ (ψ ⇒ χ)\n———————————————\n(φ ⇒ ψ) ⇒ (φ ⇒ χ)\\n```",
      "###Reversão da Implicação (IR) (contraposição como regra)",
      "```\\n¬ψ ⇒ ¬φ\n———————\nφ ⇒ ψ\\n```",
      "Uma **instância** de uma regra é obtida substituindo as metavariáveis por sentenças concretas, de forma consistente. Exemplo de instância de IE:",
      "```\\np ⇒ q\np\n———\nq\\n```",
      "Um ponto crucial: **regras de inferência aplicam-se a sentenças no nível mais externo** (top-level), não a pedaços internos de uma fórmula.",
      "Exemplo de aplicação incorreta (um erro comum): alguém vê `p ⇒ q` e `p ⇒ r` e tenta “cancelar o p” para concluir `q ⇒ r`. Isso é **inválido**. A regra IE não permite esse tipo de manipulação interna."
    ]
  },

  "cap3-sec3": {
    "id": "cap3-sec3",
    "title": "Provas Diretas",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Aplicando regras de inferência e adicionando instâncias de esquemas de axiomas, conseguimos derivar conclusões que não surgem em um único passo. Isso nos leva ao conceito de **prova direta**.",
      "**Definição (Prova Direta).** Uma prova direta de uma conclusão a partir de um conjunto de premissas é uma sequência de sentenças que termina na conclusão, em que cada linha é:",
      "1) uma **premissa**;\n2) uma **instância de um esquema de axioma**;\n3) o resultado de aplicar uma **regra de inferência** a linhas anteriores.",
      "###Exemplo 1",
      "Premissas: `p`, `p ⇒ q`, `(p ⇒ q) ⇒ (q ⇒ r)`.\nObjetivo: provar `r`.",
      "```\\n1. p                         Premissa\n2. p ⇒ q                     Premissa\n3. (p ⇒ q) ⇒ (q ⇒ r)         Premissa\n4. q                         IE: 2, 1\n5. q ⇒ r                     IE: 3, 2\n6. r                         IE: 5, 4\\n```",
      "###Exemplo 2",
      "Premissas: `p ⇒ q` e `q ⇒ r`.\nObjetivo: provar `p ⇒ r`.",
      "A ideia é “encadear” as implicações, mas formalmente usamos regras permitidas:",
      "```\\n1. p ⇒ q                     Premissa\n2. q ⇒ r                     Premissa\n3. p ⇒ (q ⇒ r)               IC: 2\n4. (p ⇒ q) ⇒ (p ⇒ r)         ID: 3\n5. p ⇒ r                     IE: 4, 1\\n```",
      "Quando existe uma prova de `φ` a partir de `Δ` usando um conjunto de regras `R`, dizemos que `φ` é **provável** a partir de `Δ` e escrevemos:",
      "```\\nΔ ⊢_R φ\\n```",
      "Quando o conjunto de regras é claro pelo contexto, omitimos o índice e escrevemos apenas:",
      "```\\nΔ ⊢ φ\\n```"
    ]
  },

  "cap3-sec4": {
    "id": "cap3-sec4",
    "title": "Sistemas de Prova",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Um **sistema de prova** é um conjunto finito de **esquemas de axiomas** e **regras de inferência**. Ele define formalmente o que conta como uma derivação válida.",
      "É possível imaginar sistemas “estranhos” (com axiomas não válidos ou regras não corretas), mas aqui vamos focar em sistemas que queremos usar de forma confiável: aqueles com axiomas válidos e regras corretas.",
      "Entre os sistemas clássicos para Lógica Proposicional, um dos mais conhecidos é o **Sistema de Hilbert**."
    ]
  },

  "cap3-sec5": {
    "id": "cap3-sec5",
    "title": "O Sistema de Hilbert",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "O **Sistema de Hilbert** é interessante porque é extremamente compacto: ele usa apenas **uma regra de inferência** e um pequeno conjunto de **esquemas de axiomas**.",
      "A única regra é a **Eliminação da Implicação (IE)**:",
      "```\\nφ ⇒ ψ\nφ\n——————\nψ\\n```",
      "Além disso, o sistema usa três esquemas de axiomas (que capturam versões “axiomatizadas” de regras conhecidas):",
      "- **IC (Criação da Implicação):** `φ ⇒ (ψ ⇒ φ)`\n- **ID (Distribuição da Implicação):** `(φ ⇒ (ψ ⇒ χ)) ⇒ ((φ ⇒ ψ) ⇒ (φ ⇒ χ))`\n- **IR (Reversão da Implicação):** `(¬ψ ⇒ ¬φ) ⇒ (φ ⇒ ψ)`",
      "###Exemplo (Hilbert em ação)",
      "Premissas: `(p ⇒ q)` e `(q ⇒ r)`.\nObjetivo: provar `(p ⇒ r)`.",
      "```\\n1. p ⇒ q                                         Premissa\n2. q ⇒ r                                         Premissa\n3. (q ⇒ r) ⇒ (p ⇒ (q ⇒ r))                       IC\n4. p ⇒ (q ⇒ r)                                   IE: 3, 2\n5. (p ⇒ (q ⇒ r)) ⇒ ((p ⇒ q) ⇒ (p ⇒ r))           ID\n6. (p ⇒ q) ⇒ (p ⇒ r)                             IE: 5, 4\n7. p ⇒ r                                         IE: 6, 1\\n```",
      "Mesmo com poucas ferramentas, conseguimos provar resultados importantes. E, como veremos depois, existe uma técnica para reescrever sentenças proposicionais usando apenas `¬` e `⇒`, o que torna o Hilbert ainda mais relevante."
    ]
  },

  "cap3-sec6": {
    "id": "cap3-sec6",
    "title": "Correção e Completude",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "A partir daqui, passamos a lidar com **duas noções** diferentes para conectar premissas e conclusão:",
      "- **Consequência lógica** (semântica): `Δ ⊨ φ`\n- **Provabilidade** (sintática): `Δ ⊢ φ`",
      "A primeira fala de *todas as atribuições possíveis* (tabelas-verdade e semântica). A segunda fala de *existência de uma prova finita* (regras e manipulação simbólica).",
      "Um sistema de prova é **correto** (*sound*) se tudo que ele prova é de fato uma consequência lógica. Formalmente:",
      "```\\nSe Δ ⊢ φ, então Δ ⊨ φ\\n```",
      "Um sistema é **completo** (*complete*) se toda consequência lógica pode ser provada dentro do sistema. Formalmente:",
      "```\\nSe Δ ⊨ φ, então Δ ⊢ φ\\n```",
      "O **Sistema de Hilbert** é **correto e completo** para a Lógica Proposicional. Isso significa que, nesse sistema, **provabilidade e consequência lógica coincidem**: provar e verificar por tabela-verdade chegam às mesmas conclusões (embora por caminhos diferentes).",
      "O resultado é importante porque, em problemas grandes, um método de prova pode ser mais viável do que percorrer uma tabela-verdade gigantesca. (Ainda assim, no pior caso, provas podem ser longas — mas em muitos casos práticos são bem menores.)"
    ]
  },

  "cap3-sec7": {
    "id": "cap3-sec7",
    "title": "Resumo do Capítulo",
    "subtitle": "Capítulo 3",
    "paragraphs": [
      "Neste capítulo, saímos do método puramente semântico das tabelas-verdade e entramos no universo das **provas formais**.",
      "Vimos que:",
      "- **Esquemas** são “moldes” para gerar sentenças.\n- **Regras de inferência** descrevem padrões válidos de derivação.\n- Uma **prova direta** encadeia premissas, instâncias de axiomas e aplicações de regras.\n- Um **sistema de prova** define formalmente o que conta como derivação.\n- O **Sistema de Hilbert** é um sistema clássico, compacto e poderoso.\n- **Correção** e **completude** conectam provabilidade (⊢) e consequência lógica (⊨).",
      "No próximo capítulo, vamos avançar para formas mais estruturadas de prova e para técnicas que tornam provas mais práticas (inclusive quando a linguagem cresce)."
    ]
  },

  "cap4": {
      "id": "cap4",
      "title": "Dedução Natural",
      "subtitle": "Capítulo 4",
      "paragraphs": [
        "Nos capítulos anteriores, estudamos métodos formais para analisar consequências lógicas por meio de **tabelas-verdade** e **provas diretas**. Embora conceitualmente simples, esses métodos rapidamente se tornam impraticáveis à medida que o número de proposições cresce ou quando as provas envolvem muitas etapas intermediárias.",
        "A **Dedução Natural** surge como uma alternativa mais estruturada e próxima do raciocínio humano. Em vez de depender apenas de regras globais ou de enumeração exaustiva de cenários, ela permite construir provas de maneira **local**, **modular** e **hierárquica**, organizando o raciocínio em blocos bem definidos.",
        "A ideia central da Dedução Natural é permitir que façamos **suposições temporárias**, exploremos suas consequências e, em seguida, descarreguemos essas suposições para obter conclusões condicionais. Esse mecanismo resolve uma limitação fundamental das provas diretas: a dificuldade de justificar formalmente o uso de hipóteses auxiliares.",
        "Neste capítulo, introduzimos o conceito de **provas condicionais**, mostramos como elas são organizadas por meio de **subprovas**, e apresentamos o **sistema de Fitch**, um dos sistemas de dedução natural mais utilizados no ensino e na prática da lógica.",
        "Também discutimos as propriedades fundamentais do sistema — **correção (soundness)** e **completude (completeness)** — e apresentamos estratégias práticas para encontrar provas de forma mais eficiente. Ao final, o leitor estará apto a construir e interpretar provas formais de maneira sistemática e explicável, um aspecto essencial para aplicações em ciência de dados, verificação de regras e sistemas baseados em lógica."
      ]
    },

  "cap4-sec1": {
    "id": "cap4-sec1",
    "title": "Provas Condicionais",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "As **provas condicionais** estendem a ideia de prova direta ao permitir a introdução explícita de **suposições temporárias**. Diferentemente das provas diretas, uma prova condicional possui uma estrutura hierárquica, composta por **subprovas** aninhadas dentro de uma prova principal.",
      "Em uma prova condicional, podemos assumir uma sentença φ, derivar uma sentença ψ a partir dessa suposição e, então, concluir fora da subprova que **φ implica ψ**. Esse passo é formalizado pela regra de **Introdução da Implicação**.",
      "O uso de suposições não contamina a prova global, pois essas suposições só podem ser utilizadas dentro da subprova em que foram introduzidas. Fora dela, seu único efeito permitido é a geração de uma implicação.",
      "Esse mecanismo torna explícito um padrão comum de raciocínio informal: *“se φ fosse verdade, então ψ se seguiria; logo, φ ⇒ ψ”*."
    ]
  },

  "cap4-sec2": {
    "id": "cap4-sec2",
    "title": "Estrutura de Subprovas",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Uma característica central da Dedução Natural é o uso de **subprovas**. Uma subprova começa com uma suposição e termina quando essa suposição é descarregada por meio de uma regra condicional.",
      "Dentro de uma subprova, é permitido utilizar sentenças da própria subprova e de qualquer **superprova** que a contenha. No entanto, não é permitido utilizar sentenças provenientes de subprovas paralelas ou internas que já tenham sido encerradas.",
      "Essa restrição garante que o escopo das suposições seja respeitado, evitando inferências inválidas. Ela desempenha um papel semelhante ao escopo de variáveis em linguagens de programação.",
      "Erros comuns em provas condicionais surgem exatamente da violação dessas regras de escopo, como tentar usar um resultado derivado em uma subprova já encerrada como premissa em uma prova externa."
    ]
  },

  "cap4-sec3": {
    "id": "cap4-sec3",
    "title": "O Sistema de Fitch",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "O **sistema de Fitch** é um sistema de dedução natural amplamente utilizado por combinar **expressividade**, **simplicidade** e **clareza estrutural**. Ele se baseia no uso de subprovas e inclui regras ordinárias e regras condicionais.",
      "As regras ordinárias permitem manipular diretamente conectivos lógicos como conjunção, disjunção, negação, implicação e bicondicional. A principal regra condicional do sistema é a **Introdução da Implicação**, que permite sair de uma subprova.",
      "O sistema de Fitch é particularmente adequado para representar raciocínios explicáveis, pois cada passo da prova deixa claro **quais hipóteses estão em jogo** e **como cada conclusão foi obtida**.",
      "Além das regras formais, editores e ambientes de Fitch costumam incluir operações auxiliares como introdução de premissas, reiteração de sentenças e remoção de linhas desnecessárias, facilitando a construção e leitura das provas."
    ]
  },

  "cap4-sec4": {
    "id": "cap4-sec4",
    "title": "Regras de Inferência na Dedução Natural",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "O sistema de Fitch inclui regras de **introdução** e **eliminação** para cada conectivo lógico. As regras de introdução mostram como construir uma sentença com determinado conectivo; as regras de eliminação mostram como extrair informação de uma sentença já construída.",
      "Por exemplo, a introdução da conjunção permite inferir φ ∧ ψ a partir de φ e ψ. A eliminação da conjunção permite inferir qualquer um dos seus componentes.",
      "A disjunção possui regras assimétricas: para introduzi-la, basta provar um dos disjuntos; para eliminá-la, é necessário mostrar que todos os disjuntos levam à mesma conclusão.",
      "A negação é tratada por meio de provas por contradição, em que assumir φ leva simultaneamente a ψ e ¬ψ, permitindo concluir ¬φ."
    ]
  },

  "cap4-sec5": {
    "id": "cap4-sec5",
    "title": "Correção e Completude",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Ao estudar um sistema de provas, distinguimos duas noções fundamentais: **consequência lógica** e **provabilidade**. A primeira é definida semanticamente; a segunda, sintaticamente.",
      "Um sistema de prova é **correto (sound)** se tudo o que pode ser provado a partir de um conjunto de premissas é de fato uma consequência lógica dessas premissas. Formalmente, se Δ ⊢ φ, então Δ ⊨ φ.",
      "Um sistema de prova é **completo** se toda consequência lógica pode ser provada no sistema. Formalmente, se Δ ⊨ φ, então Δ ⊢ φ.",
      "O sistema de Fitch é **correto e completo** para a lógica proposicional, o que significa que provar e implicar logicamente são, nesse sistema, exatamente a mesma coisa."
    ]
  },

  "cap4-sec6": {
    "id": "cap4-sec6",
    "title": "Estratégias para Encontrar Provas",
    "subtitle": "Capítulo 4",
    "paragraphs": [
      "Embora as regras da Dedução Natural sejam simples, encontrar uma prova pode ser desafiador. Uma estratégia eficaz é observar a **forma da conclusão desejada** e escolher a regra de introdução correspondente.",
      "Se o objetivo é uma implicação, assume-se o antecedente e tenta-se provar o consequente. Se o objetivo é uma conjunção, prova-se cada componente separadamente. Se o objetivo é uma disjunção, basta provar um dos disjuntos.",
      "Também é útil observar a forma das premissas disponíveis. Implicações sugerem tentar provar seus antecedentes; disjunções sugerem o uso de eliminação por casos.",
      "Em provas mais complexas, é comum trabalhar **de trás para frente**, decompondo a conclusão em subobjetivos menores e, em seguida, conectando essas partes em uma prova única e coerente."
    ]
  },



  cap5: {
    id: "cap5",
    title: "O Retorno",
    subtitle: "Capítulo 5",
    paragraphs: [
      "Maria saiu da livraria carregando consigo mais do que um livro. Carregava uma certeza que antes lhe era estranha: a de que as histórias que contamos sobre nós mesmos são, ao mesmo tempo, a coisa mais verdadeira e mais inventada que possuímos.",
      "A cidade parecia diferente agora. As mesmas ruas de sempre, os mesmos edifícios, as mesmas pessoas apressadas — mas tudo havia ganhado uma textura nova, como se uma camada de verniz tivesse sido removida revelando cores mais vivas por baixo.",
      "Ela voltou para casa pelo caminho mais longo, passando por parques e praças que costumava ignorar. Em cada banco, em cada esquina, imaginava as histórias não contadas das pessoas que passavam por ali todos os dias.",
      "Ao chegar em casa, colocou o livro azul na estante, ao lado dos outros que colecionava desde a infância. Mas antes, abriu o envelope que trazia no bolso — um dos muitos que encontrara sobre o balcão da livraria — e copiou o endereço em uma folha de papel.",
      "Amanhã, pensou, seria a vez de outra pessoa receber sua carta. E assim a história continuaria, como sempre continua — passando de mãos em mãos, de coração em coração, infinitamente.",
      "Fim.",
    ],
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
