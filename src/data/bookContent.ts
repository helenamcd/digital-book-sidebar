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
      { id: "intro-sec2", title: "Implicação Lógica" },
      { id: "intro-sec3", title: "Demonstrações Lógicas" },
      { id: "intro-sec4", title: "Lógica Simbólica" },
      { id: "intro-sec5", title: "Automação do Raciocínio Lógico" },
      { id: "intro-sec6", title: "Guia de Leitura" },
    ],
  },
  {
    id: "cap1",
    title: "Capítulo 1 — O Despertar",
    sections: [
      { id: "cap1-sec1", title: "A manhã silenciosa" },
      { id: "cap1-sec2", title: "Primeiros sinais" },
    ],
  },
  {
    id: "cap2",
    title: "Capítulo 2 — Caminhos",
    sections: [
      { id: "cap2-sec1", title: "A encruzilhada" },
      { id: "cap2-sec2", title: "Decisões" },
    ],
  },
  {
    id: "cap3",
    title: "Capítulo 3 — A Jornada",
    sections: [
      { id: "cap3-sec1", title: "Terras desconhecidas" },
      { id: "cap3-sec2", title: "Companheiros de viagem" },
    ],
  },
  {
    id: "cap4",
    title: "Capítulo 4 — Revelações",
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
      "```\\nInteragiu_com_o_sistema  ∧  Queda_de_desempenho\\n                ↓\\n        Recomendar_intervenção\\n```",
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
    title: "Implicação Lógica",
    subtitle: "Introdução",
    paragraphs: [
      "##Implicação lógica (consequência lógica) na ciência de dados",
      "Na ciência de dados, raramente trabalhamos com informações completas. Em geral, temos um conjunto de **sentenças extraídas dos dados** — registros, logs, rótulos ou regras — que descrevem apenas parcialmente o sistema que estamos analisando. A partir dessas sentenças, queremos responder perguntas fundamentais: *o que pode ser concluído com certeza?* O que é apenas possível? E o que não pode ser verdadeiro de forma alguma?",
      "É nesse contexto que surge a noção de **implicação lógica**, entendida tecnicamente como **consequência lógica**.",
      "Considere um sistema educacional digital no qual observamos o comportamento de estudantes durante uma atividade. Suponha que, a partir dos dados coletados, sabemos que:",
      "- Todo estudante que apresentou erro recebeu uma mensagem de apoio.\n- Todo estudante que recebeu mensagem de apoio apresentou erro.\n- O estudante U2 recebeu uma mensagem de apoio.\n- O estudante U3 não recebeu mensagem de apoio.",
      "Essas sentenças não descrevem completamente o sistema, mas impõem restrições claras sobre os cenários possíveis. Mesmo que os dados **não afirmem explicitamente** que U2 apresentou erro, podemos concluir algo importante: se todo erro gera mensagem de apoio, e somente estudantes que erraram recebem essa mensagem, então **U2 necessariamente apresentou erro**. Essa conclusão não está escrita nos dados, mas é uma **consequência lógica** das sentenças conhecidas.",
      "Esse tipo de inferência **não depende de probabilidades nem de modelos estatísticos** — depende apenas da **estrutura lógica das sentenças envolvidas**.",
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
      "Uma maneira conceitual de verificar consequência lógica é examinar **todos os mundos possíveis compatíveis com os dados** e verificar se a conclusão é verdadeira em todos eles. Esse procedimento é conhecido como **verificação de modelos** (*model checking*).",
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
    title: "O Despertar",
    subtitle: "Capítulo 1",
    paragraphs: [
      "O sol nascia lentamente por trás das montanhas, pintando o céu com tons de dourado e carmesim. Era uma manhã como tantas outras, mas algo no ar sugeria que aquele dia seria diferente.",
      "Maria abriu os olhos antes mesmo do despertador tocar. Havia um silêncio peculiar no apartamento — não era ausência de som, mas uma qualidade diferente de quietude, como se o mundo inteiro estivesse prendendo a respiração.",
      "Ela se levantou e caminhou até a janela. A cidade ainda dormia, envolta em uma névoa fina que suavizava os contornos dos edifícios. As ruas estavam vazias, exceto por um gato solitário que cruzava a calçada com passos deliberados e elegantes.",
      "Foi então que ela notou: sobre a mesa da cozinha, onde na noite anterior havia apenas uma xícara vazia e um livro aberto, agora repousava um envelope selado com cera vermelha. Não havia nome, nem endereço. Apenas um símbolo que ela não reconhecia — uma espiral que parecia girar sobre si mesma.",
      "As mãos tremeram levemente ao pegar o envelope. O papel era grosso, de uma qualidade que há muito não se via, e o selo de cera cedia sob seus dedos com um estalo satisfatório.",
    ],
  },
  cap2: {
    id: "cap2",
    title: "Caminhos",
    subtitle: "Capítulo 2",
    paragraphs: [
      "A carta continha apenas um endereço e uma data — hoje. Maria releu as palavras várias vezes, tentando encontrar alguma pista sobre o remetente, mas o texto era tão misterioso quanto o próprio envelope.",
      "Ela conhecia a rua mencionada na carta. Ficava no bairro antigo da cidade, onde as construções coloniais resistiam ao tempo como monumentos silenciosos de uma época esquecida. Era uma região que ela evitava — não por medo, mas por uma sensação inexplicável que a acometia sempre que se aproximava daquelas ruas estreitas.",
      "\"Talvez seja hora de enfrentar o que tenho evitado\", pensou, enquanto vestia o casaco e guardava a carta no bolso. O café foi deixado pela metade. Algumas decisões não esperam.",
      "A caminhada até o bairro antigo levou cerca de vinte minutos. Com cada passo, o cenário mudava sutilmente: o asfalto dava lugar a paralelepípedos, os prédios modernos cediam espaço para fachadas com azulejos portugueses desbotados pelo sol de décadas.",
      "Ao chegar ao endereço indicado, Maria encontrou uma livraria que não estava ali na última vez que passara por aquela rua — ou pelo menos ela não se lembrava de tê-la visto. A fachada era discreta, quase invisível entre os edifícios vizinhos, com uma porta de madeira escura e uma pequena placa de bronze: \"Livraria dos Caminhos\".",
    ],
  },
  cap3: {
    id: "cap3",
    title: "A Jornada",
    subtitle: "Capítulo 3",
    paragraphs: [
      "O interior da livraria era maior do que a fachada sugeria — muito maior. Prateleiras de mogno se estendiam do chão ao teto, carregadas de livros de todas as épocas e tamanhos. O ar tinha cheiro de papel antigo e baunilha, uma combinação que Maria associava imediatamente a conforto.",
      "\"Eu estava esperando por você\", disse uma voz suave. Atrás do balcão, um homem idoso a observava com olhos que pareciam conter bibliotecas inteiras. Seus cabelos brancos emolduravam um rosto marcado pelo tempo, mas iluminado por um sorriso acolhedor.",
      "\"Cada livro nesta livraria contém um caminho\", explicou o livreiro, fazendo um gesto amplo que abarcava toda a loja. \"Não são apenas histórias — são mapas. E você, minha cara, está prestes a descobrir o seu.\"",
      "Maria quis perguntar como ele sabia seu nome, como a carta havia chegado à sua mesa, por que ela havia sido escolhida. Mas antes que pudesse formular qualquer pergunta, o livreiro colocou em suas mãos um volume fino, encadernado em couro azul-marinho.",
      "\"Este é o seu\", disse ele simplesmente. \"As respostas estão dentro — mas lembre-se: ler é apenas o primeiro passo. O verdadeiro caminho começa quando você fecha o livro e abre os olhos.\"",
    ],
  },
  cap4: {
    id: "cap4",
    title: "Revelações",
    subtitle: "Capítulo 4",
    paragraphs: [
      "O livro azul continha páginas que pareciam escritas especialmente para ela. Cada linha descrevia momentos de sua vida que ela pensava ter esquecido — tardes de infância, conversas com avós já falecidos, sonhos abandonados que ainda pulsavam em algum canto escondido de sua memória.",
      "Mas havia mais. Entre as memórias familiares, surgiam passagens sobre lugares que ela nunca visitou e pessoas que nunca conheceu, escritas com a mesma intimidade e verdade. Era como se o livro conhecesse não apenas seu passado, mas todos os futuros que ela poderia ter vivido.",
      "\"Isso é impossível\", sussurrou, mas suas mãos se recusavam a fechar o livro. A cada página virada, uma nova camada de compreensão se revelava, como se toda a sua vida fosse um palimpsesto — texto sobre texto, história sobre história.",
      "Quando finalmente chegou à última página, encontrou apenas uma frase, escrita em uma caligrafia diferente do resto: \"A história nunca termina — ela apenas muda de narrador.\"",
      "Maria fechou o livro e olhou ao redor. A livraria estava vazia. O livreiro havia desaparecido, mas em seu lugar, sobre o balcão, havia dezenas de envelopes selados com cera vermelha, cada um esperando para ser entregue.",
    ],
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
