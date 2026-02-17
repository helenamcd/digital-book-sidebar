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
      { id: "intro-sec1", title: "Lógica como base para modelos, regras e decisões" },
      { id: "intro-sec2", title: "Do raciocínio humano ao raciocínio computacional" },
      { id: "intro-sec3", title: "Por que aprender lógica no curso de Ciência de Dados?" },
      { id: "intro-sec4", title: "Sentenças Lógicas na Ciência de Dados" },
      { id: "intro-sec5", title: "Mundos possíveis e dados" },

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
    ],
  },
  "intro-sec1": {
    id: "intro-sec1",
    title: "Lógica como base para modelos, regras e decisões",
    subtitle: "Introdução",
    paragraphs: [
      "Em cursos de ciência de dados, é comum que os alunos aprendam rapidamente ferramentas, linguagens e bibliotecas. No entanto, sem uma base lógica sólida, surge um problema recorrente: **modelos funcionam, mas as decisões não são bem compreendidas**. A lógica ajuda o estudante a responder perguntas como:",
      "- O que exatamente meu modelo está afirmando?\n- Em quais condições essa conclusão é válida?\n- Que suposições estou fazendo sobre os dados?\n- Que inferências são justificadas — e quais não são?",
      "Considere um exemplo típico em IHC e análise de comportamento do usuário:",
      "```\\nSE (Tempo_de_tarefa > esperado)\\nE  (Número_de_erros alto)\\nENTÃO (Usuário está confuso)\\n```",
      "Sem lógica, essa regra parece intuitiva. Com lógica, o aluno aprende a questionar:\n\n- Essa condição é suficiente ou apenas necessária?\n- O inverso é verdadeiro?\n- Existem exceções?\n- O que acontece se apenas uma das condições ocorrer?",
      "Essas perguntas são lógicas antes de serem estatísticas. Elas ajudam a construir sistemas mais explicáveis, algo crucial em áreas como **IHC, computação afetiva e sistemas educacionais inteligentes**, onde decisões precisam ser compreendidas e justificadas.",
    ],
  },
  "intro-sec2": {
    id: "intro-sec2",
    title: "Do raciocínio humano ao raciocínio computacional",
    subtitle: "Introdução",
    paragraphs: [
      "Uma das grandes contribuições da lógica é permitir que o raciocínio humano seja **externalizado**, analisado e automatizado. Quando transformamos uma intuição em uma proposição lógica, damos um passo importante:",
      "```\\nIntuição humana\\n       ↓\\nExpressão lógica\\n       ↓\\nImplementação computacional\\n```",
      "Esse processo é central na ciência de dados. Um pipeline de dados pode ser visto como uma sequência de inferências:",
      "```\\nDados brutos\\n   ↓\\nPré-processamento (regras)\\n   ↓\\nModelo (hipóteses)\\n   ↓\\nInferência (conclusões)\\n```",
      "Cada etapa envolve decisões lógicas, mesmo quando usamos modelos probabilísticos. A lógica não compete com a estatística ou o aprendizado de máquina — ela **organiza o pensamento que dá sentido a essas ferramentas**.",
    ],
  },
  "intro-sec3": {
    id: "intro-sec3",
    title: "Por que aprender lógica no curso de Ciência de Dados?",
    subtitle: "Introdução",
    paragraphs: [
      "Aprender lógica ajuda o aluno a:",
      "- **Pensar com precisão**, evitando ambiguidades em definições e análises.\n- **Interpretar resultados**, distinguindo correlação, implicação e causalidade.\n- **Projetar regras e sistemas explicáveis**, especialmente em contextos de IHC.\n- **Comunicar decisões**, tornando argumentos claros para equipes multidisciplinares.\n- **Detectar falácias**, tanto em análises próprias quanto em resultados automatizados.",
      "Em vez de ver a lógica como um conjunto abstrato de símbolos, este livro a apresenta como uma **ferramenta prática para estruturar o raciocínio em ciência de dados**, conectando formalismo e aplicação. Ao longo dos capítulos, o leitor verá como proposições, operadores lógicos, inferência e provas aparecem, de forma explícita ou implícita, em tarefas cotidianas da área.",
      "Aprender lógica, portanto, não é apenas aprender a \"provar coisas\", mas aprender a **pensar melhor sobre dados, modelos e decisões** — uma habilidade essencial para qualquer cientista de dados contemporâneo.",
      "\"Pensar logicamente é aprender a transformar dados em decisões justificáveis.\" — Fundamentos de Lógica Aplicada à Ciência de Dados",
    ],
  },

    "intro-sec4": {
    id: "intro-sec4",
    title: "Sentenças Lógicas na Ciência de Dados",
    subtitle: "Introdução",
    paragraphs: [
      "Para muitos estudantes, a lógica ainda parece um tema distante e excessivamente teórico, associada apenas a demonstrações matemáticas formais ou a provas abstratas sem ligação aparente com a prática profissional. Na ciência de dados, porém, essa percepção não poderia estar mais equivocada. Sempre que lidamos com dados reais, estamos cercados por **incerteza, múltiplas possibilidades e informação incompleta** — exatamente o tipo de cenário para o qual as sentenças lógicas foram criadas.",
      "Na ciência de dados, uma **sentença lógica** é uma afirmação que pode ser verdadeira ou falsa sobre o mundo representado pelos dados. Por exemplo:",
      "- “O usuário clicou no botão de ajuda”\n- “O tempo de execução da tarefa foi maior que o esperado”\n- “O modelo classificou o usuário como em risco de evasão”.",
      "Cada uma dessas afirmações descreve um aspecto do sistema ou do comportamento do usuário e, assim como na lógica clássica, pode ser avaliada como verdadeira ou falsa em diferentes situações.",
    ],
  },

    "intro-sec5": {
    id: "intro-sec5",
    title: "Mundos possíveis e dados",
    subtitle: "Introdução",
    paragraphs: [
      "Considere um sistema interativo analisado por uma equipe de ciência de dados em um contexto de IHC. Suponha que estamos observando quatro usuários — U1, U2, U3 e U4 — e queremos modelar se cada usuário:",
      "- clicou no botão de ajuda;\n- apresentou erro na tarefa;\n- concluiu a atividade.",
      "Cada uma dessas relações pode ser verdadeira ou falsa para cada usuário. Assim como no exemplo clássico de relações interpessoais, não conhecemos inicialmente o estado real do sistema, apenas sabemos que existem várias configurações possíveis.",
      "Cada configuração possível desses fatos corresponde a um mundo possível. Um mundo é simplesmente uma maneira específica de o sistema estar naquele momento.",
      "Por exemplo:",
      "- Em um mundo possível, U1 clicou no botão de ajuda e concluiu a tarefa sem erros.\n- Em outro, U1 não clicou no botão de ajuda e abandonou a tarefa após vários erros.",
      "A ciência de dados raramente começa sabendo qual desses mundos é o real. Em vez disso, começamos com dados parciais, registros incompletos e observações limitadas.",
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
};
