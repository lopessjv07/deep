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
  checkoutUrl: "https://pay.kiwify.com.br/xcahy6n",

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

  /** [CARROSSEL COM SEIS PÁGINAS REAIS DO GUIA] — 6 itens */
  gallery: [
    { src: "/imgsCourses/1.png", alt: "Página real do guia 1", width: 1100, height: 1514 },
    { src: "/imgsCourses/2.png", alt: "Página real do guia 2", width: 1100, height: 1514 },
    { src: "/imgsCourses/3.png", alt: "Página real do guia 3", width: 1100, height: 1514 },
    { src: "/imgsCourses/4.png", alt: "Página real do guia 4", width: 1100, height: 1514 },
    { src: "/imgsCourses/5.png", alt: "Página real do guia 5", width: 1100, height: 1514 },
    { src: "/imgsCourses/6.png", alt: "Página real do guia 6", width: 1100, height: 1514 },
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
  samplePortugues: null as Img,

  /** [UMA PÁGINA REAL DE MATEMÁTICA, AMPLIÁVEL] */
  sampleMatematica: null as Img,

  /** [UM FLASHCARD REAL, AMPLIÁVEL] */
  sampleFlashcard: null as Img,

  /** [MOCKUP DO PACOTE COMPLETO] */
  offerMockup: null as Img,
};

