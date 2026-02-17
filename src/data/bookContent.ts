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
  subtitle: "Por que lógica em Ciência de Dados?",
  paragraphs: [
    "A lógica é o estudo formal do raciocínio correto. Desde a Antiguidade, com Aristóteles, ela surgiu da tentativa de responder a uma pergunta fundamental: quando um argumento é válido? Ao longo dos séculos, a lógica evoluiu de um campo filosófico para um dos pilares do pensamento científico e computacional.",
    
    "Na ciência de dados, a lógica aparece de forma constante, mesmo quando não é explicitamente mencionada. Sempre que definimos condições, regras, hipóteses ou critérios de decisão, estamos lidando com proposições que podem ser verdadeiras ou falsas e com inferências que conectam essas proposições.",
    
    "Dados, por si só, não produzem conclusões. Eles precisam ser organizados, interpretados e conectados por regras de raciocínio. A lógica fornece exatamente esse arcabouço, permitindo transformar observações em decisões consistentes.",
    
    "Esse processo pode ser entendido como uma passagem gradual do raciocínio humano para o raciocínio computacional:",
    
    "Intuição humana\n↓\nExpressão lógica\n↓\nImplementação computacional",
    
    "Em aplicações de Ciência de Dados e Interação Humano-Computador, essa estrutura aparece com frequência. Por exemplo, um sistema pode decidir recomendar uma intervenção quando certas condições de uso são atendidas. Essa decisão segue uma forma lógica simples do tipo SE condição ENTÃO ação.",
    
    "Esse tipo de raciocínio pode ser representado da seguinte maneira:",
    
    "Interagiu com o sistema\n∧\nApresentou queda de desempenho\n↓\nRecomendar intervenção",
    
    "Ao explicitar essas relações, o cientista de dados consegue analisar se as condições são suficientes, se existem exceções e se a conclusão realmente se sustenta. Isso reduz ambiguidades e evita decisões automáticas mal fundamentadas.",
    
    "A lógica também é essencial para distinguir conceitos frequentemente confundidos, como correlação, implicação e causalidade. Dois eventos podem ocorrer juntos sem que um cause o outro. Compreender essas diferenças é fundamental para interpretar modelos e resultados de forma responsável.",
    
    "Em áreas como IHC, computação afetiva e sistemas educacionais inteligentes, a lógica tem um papel central. Sistemas que interagem com pessoas precisam tomar decisões compreensíveis, explicáveis e alinhadas às intenções do projeto. A lógica oferece a base para especificar esses comportamentos de maneira clara e verificável.",
    
    "Aprender lógica no curso de Ciência de Dados não significa apenas aprender símbolos ou regras formais. Significa desenvolver a capacidade de estruturar o pensamento, analisar suposições, justificar conclusões e comunicar decisões com clareza — habilidades essenciais no trabalho cotidiano com dados.",
    
    "Ao longo deste livro, a lógica será apresentada como uma ferramenta prática, conectada a exemplos reais da ciência de dados. O objetivo é mostrar que pensar logicamente é tão fundamental quanto programar, modelar dados ou visualizar informações.",
    
    "Referência: Stanford University. Introduction to Logic, Capítulo 1 – Introduction. Disponível em: http://intrologic.stanford.edu/chapters/chapter_01.html",

    "\"Dados não pensam sozinhos. É a lógica que dá sentido às conclusões.\""

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
