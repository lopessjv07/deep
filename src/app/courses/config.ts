/* ==========================================================================
   CONFIGURAÇÃO DA PÁGINA /courses
   Edite somente este arquivo para trocar links, contatos e imagens.
   ========================================================================== */

export type Img = {
  src: string;
  alt: string;
  width: number;
  height: number;
} | null;

export const CONFIG = {
  /** [LINK DO CHECKOUT] */
  checkoutUrl: "https://pay.kirvano.com/cc4f242f-045d-406d-95d3-832cc04610f6",

  /** Preço sugerido */
  price: "R$ 29,90",

  /**
   * [EXIBIR SOMENTE AS CONDIÇÕES DISPONÍVEIS NO CHECKOUT]
   * Deixe `null` para não exibir parcelamento.
   * Ex.: "ou em até 3x de R$ 10,46 no cartão"
   */
  installments: null as string | null,

  /** [E-MAIL OU CANAL DE SUPORTE] — exibido no bloco de garantia */
  supportChannel: "[E-MAIL OU CANAL DE SUPORTE]",

  /** [CANAL CONFIGURADO NA PLATAFORMA] — usado no FAQ "Como recebo os arquivos?" */
  deliveryChannel: "[CANAL CONFIGURADO NA PLATAFORMA]",

  /** [E-MAIL OU WHATSAPP DE ATENDIMENTO] — usado no FAQ "Como entro em contato?" */
  contactChannel: "[E-MAIL OU WHATSAPP DE ATENDIMENTO]",

  /** [NOME OU RAZÃO SOCIAL E DADOS DO FORNECEDOR] */
  supplier: "[NOME OU RAZÃO SOCIAL E DADOS DO FORNECEDOR]",

  /** Links do rodapé */
  links: {
    terms: "#",
    privacy: "#",
    contact: "#",
    refund: "#",
  },
};

/* --------------------------------------------------------------------------
   IMAGENS
   Enquanto um item estiver `null`, a página mostra um espaço reservado com
   a descrição da imagem esperada. Para publicar, coloque o arquivo em
   /public/courses/ e preencha { src, alt, width, height }.
   Ex.: { src: "/courses/hero.webp", alt: "Capa do guia", width: 1200, height: 800 }
   -------------------------------------------------------------------------- */
export const IMAGES = {
  /** [MOCKUP DO GUIA COM A CAPA E DUAS PÁGINAS INTERNAS REAIS] */
  heroMockup: {
    src: "/imgsCourses/mocved.png",
    alt: "Mockup do guia com a capa e duas páginas internas reais",
    width: 900,
    height: 1100,
  } as Img,

  /** [CARROSSEL COM OS BÔNUS DO GUIA: C7, C8, C9] */
  gallery: [
    { src: "/imgsCourses/c7.png", alt: "Bônus 1 - 40 Flashcards de Revisão", width: 1254, height: 1254 },
    { src: "/imgsCourses/c8.png", alt: "Bônus 2 - Mapa de Fórmulas e Conversões", width: 1254, height: 1254 },
    { src: "/imgsCourses/c9.png", alt: "Bônus 3 - Plano de Revisão de 15 Dias", width: 1254, height: 1254 },
  ] as Img[],

  /** [MOCKUP DO GUIA COM OS TRÊS BÔNUS] */
  bonusMockup: null as Img,

  /** [CAPA E UM CARTÃO REAL DO BÔNUS] */
  bonus1: null as Img,

  /** [CAPA E UMA PÁGINA REAL DO MAPA] */
  bonus2: null as Img,

  /** [CAPA E UMA PÁGINA REAL DA AGENDA] */
  bonus3: null as Img,

  /** [UMA PÁGINA REAL DE PORTUGUÊS, AMPLIÁVEL] */
  samplePortugues: {
    src: "/imgsCourses/portugues.png",
    alt: "Página real de Português",
    width: 1600,
    height: 1131,
  } as Img,

  /** [UMA PÁGINA REAL DE MATEMÁTICA, AMPLIÁVEL] */
  sampleMatematica: {
    src: "/imgsCourses/matematica.png",
    alt: "Página real de Matemática",
    width: 1600,
    height: 1131,
  } as Img,

  /** [UM FLASHCARD REAL, AMPLIÁVEL] */
  sampleFlashcard: {
    src: "/imgsCourses/revisa.png",
    alt: "Flashcard real de revisão",
    width: 1254,
    height: 1254,
  } as Img,

  /** [MOCKUP DO PACOTE COMPLETO] */
  offerMockup: {
    src: "/imgsCourses/mocved.png",
    alt: "Mockup do pacote completo de 300 Pegadinhas Comentadas",
    width: 900,
    height: 1100,
  } as Img,
};

