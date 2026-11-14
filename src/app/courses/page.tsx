import { CONFIG, IMAGES } from "./config";
import ImageSlot from "./_components/ImageSlot";
import Carousel from "./_components/Carousel";
import Zoomable from "./_components/Zoomable";

/* ==========================================================================
   Página /courses — 300 Pegadinhas Comentadas para Concursos
   Links, contatos e imagens ficam em ./config.ts
   ========================================================================== */

const SUBJECTS = [
  {
    count: "80",
    title: "80 pegadinhas de Português",
    text: "Crase, concordância, regência, pontuação, ortografia e interpretação de textos.",
    tone: "blue",
  },
  {
    count: "80",
    title: "80 pegadinhas de Matemática",
    text: "Porcentagens, operações, unidades, juros, estatística e probabilidade.",
    tone: "green",
  },
  {
    count: "60",
    title: "60 pegadinhas de Raciocínio Lógico",
    text: "Proposições, negações, condicionais, quantificadores, argumentos e conjuntos.",
    tone: "amber",
  },
  {
    count: "80",
    title: "80 pegadinhas de Informática",
    text: "Segurança, armazenamento, redes, arquivos, planilhas e aplicativos.",
    tone: "purple",
  },
];

const BENEFITS = [
  {
    title: "RECONHECER A CONFUSÃO",
    text: "Observe diferenças entre regras, operações e conceitos que parecem semelhantes, mas produzem respostas diferentes.",
  },
  {
    title: "ENTENDER O MOTIVO DA CORREÇÃO",
    text: "Leia uma explicação direta para compreender por que determinada construção ou conclusão está errada.",
  },
  {
    title: "REVISAR POR ASSUNTO",
    text: "Escolha a matéria que precisa de atenção e consulte os itens relacionados à sua dificuldade.",
  },
  {
    title: "DIRECIONAR OS PRÓXIMOS EXERCÍCIOS",
    text: "Use as dúvidas encontradas para selecionar questões e aprofundar os temas previstos no seu edital.",
  },
];

const STEPS = [
  { title: "Identifique a armadilha", text: "Leia a frase, a conta ou a afirmação apresentada." },
  { title: "Tente corrigir", text: "Pense no que mudaria antes de consultar o comentário." },
  { title: "Confira a explicação", text: "Compare seu raciocínio com a regra apresentada." },
  { title: "Resolva outra questão", text: "Pratique o assunto em questões do seu concurso." },
];

const STATS = [
  { value: "300", label: "Pegadinhas comentadas" },
  { value: "4", label: "Matérias de fundamentos" },
  { value: "80", label: "Páginas no guia principal" },
];

const AUDIENCE = [
  {
    title: "QUEM JÁ ESTUDA, MAS AINDA CONFUNDE AS REGRAS",
    text: "Para candidatos que conhecem o assunto, mas às vezes trocam uma condição, uma fórmula ou o sentido de uma afirmação.",
  },
  {
    title: "QUEM ESTÁ ORGANIZANDO A REVISÃO",
    text: "Para quem deseja consultar os fundamentos por matéria e identificar quais pontos precisam ser retomados.",
  },
  {
    title: "QUEM PREFERE EXEMPLOS E EXPLICAÇÕES DIRETAS",
    text: "Para quem procura uma ferramenta visual para complementar aulas, apostilas e exercícios.",
  },
];

const BONUSES = [
  {
    tag: "BÔNUS 1",
    title: "40 FLASHCARDS DE REVISÃO",
    img: IMAGES.bonus1,
    imgLabel: "Capa e um cartão real do bônus",
    description:
      "Teste sua memória com perguntas e respostas de Português, Matemática, Raciocínio Lógico e Informática.",
    howTo:
      "Cubra a resposta, tente explicar a regra e marque os cartões que precisam de uma nova rodada.",
    youGet: "40 cartões e controle de revisão em um PDF de 13 páginas.",
    note: null,
  },
  {
    tag: "BÔNUS 2",
    title: "MAPA DE FÓRMULAS E CONVERSÕES",
    img: IMAGES.bonus2,
    imgLabel: "Capa e uma página real do mapa",
    description:
      "Consulte 24 fórmulas com exemplos, condições de uso e cuidados para evitar trocas.",
    howTo: "Confira a situação, a unidade e o regime de cálculo antes de escolher a fórmula.",
    youGet: "Um PDF de 10 páginas com fórmulas e conversões.",
    note: null,
  },
  {
    tag: "BÔNUS 3",
    title: "PLANO DE REVISÃO DE 15 DIAS",
    img: IMAGES.bonus3,
    imgLabel: "Capa e uma página real da agenda",
    description:
      "Organize suas sessões com metas diárias, ficha de estudo e acompanhamento das dificuldades.",
    howTo: "Adapte a agenda ao seu tempo e às matérias previstas no edital.",
    youGet: "Um PDF de 10 páginas com agenda, fichas e orientações de reteste.",
    note: "A numeração sugerida acompanha o desafio de 100 questões, vendido separadamente. Sem ele, você pode selecionar questões do próprio edital.",
  },
];

const OFFER_ITEMS: { text: string; bonus?: boolean; sub?: boolean }[] = [
  { text: "Guia com 300 pegadinhas comentadas." },
  { text: "80 itens de Português.", sub: true },
  { text: "80 itens de Matemática.", sub: true },
  { text: "60 itens de Raciocínio Lógico.", sub: true },
  { text: "80 itens de Informática.", sub: true },
  { text: "Bônus: 40 Flashcards de Revisão.", bonus: true },
  { text: "Bônus: Mapa de Fórmulas e Conversões.", bonus: true },
  { text: "Bônus: Plano de Revisão de 15 Dias.", bonus: true },
  { text: "Quatro arquivos em PDF, totalizando 113 páginas." },
];

const FAQ = [
  {
    q: "O material é para concursos públicos?",
    a: "Sim. É um guia complementar de revisão de Português, Matemática, Raciocínio Lógico e Informática. Use os tópicos que constam do edital do seu concurso.",
  },
  {
    q: "Serve para CNU, INSS, Banco do Brasil, Caixa e Correios?",
    a: "Pode apoiar a revisão dos fundamentos exigidos nessas seleções. O programa varia por cargo e edição, e o guia não cobre todos os conhecimentos específicos.",
  },
  {
    q: "São as 300 pegadinhas que mais caem?",
    a: "O material reúne 300 pontos de atenção para revisão. Não foi realizado um levantamento estatístico para classificá-los como os 300 mais frequentes.",
  },
  {
    q: "É um curso completo?",
    a: "Não. É uma ferramenta complementar, para combinar com teoria e resolução de questões.",
  },
  {
    q: "O material é físico ou digital?",
    a: "Digital, em PDF. Não há envio de produto físico.",
  },
  {
    q: "Posso imprimir?",
    a: "Sim, para estudo pessoal. O guia foi diagramado em A4 horizontal.",
  },
  {
    q: "Posso consultar no celular?",
    a: "Sim, usando um leitor de PDF. Você pode girar o aparelho e ampliar as páginas para facilitar a leitura.",
  },
  {
    q: "Os três bônus estão incluídos?",
    a: "Sim. A oferta desta página inclui o guia principal e os três bônus apresentados.",
  },
  {
    q: "O desafio de 100 questões está incluído?",
    a: "Não. Ele é um complemento opcional oferecido no checkout.",
  },
  {
    q: "Como recebo os arquivos?",
    a: `Após a confirmação do pagamento, você recebe as instruções pelo ${CONFIG.deliveryChannel}.`,
  },
  {
    q: "O material garante aprovação?",
    a: "Não. É uma ferramenta de revisão. A aprovação depende da preparação, do desempenho e das regras do concurso.",
  },
  {
    q: "Como entro em contato?",
    a: `Pelo ${CONFIG.contactChannel}, para dúvidas sobre compra e acesso.`,
  },
];

export default function CoursesPage() {
  return (
    <main className="cnc-page">
      {/* ==================================================================
          1. APRESENTAÇÃO PRINCIPAL
      ================================================================== */}
      <header className="cnc-section cnc-hero">
        <div className="cnc-container cnc-narrow cnc-center">
          <p className="cnc-eyebrow">Para quem está se preparando para concursos públicos</p>

          <h1 className="cnc-h1">
            300 PEGADINHAS COMENTADAS PARA CONCURSOS:{" "}
            <span className="cnc-highlight">
              ENTENDA OS DETALHES QUE PODEM CUSTAR PONTOS NA PROVA
            </span>
          </h1>

          <p className="cnc-lead">
            Um guia visual de Português, Matemática, Raciocínio Lógico e Informática para
            reconhecer armadilhas, compreender a regra correta e direcionar sua revisão.
          </p>

          <div className="cnc-hero-media">
            <ImageSlot
              img={IMAGES.heroMockup}
              label="Mockup do guia com a capa e duas páginas internas reais"
              ratio="16 / 10"
              sizes="(max-width: 768px) 92vw, 760px"
              priority
            />
          </div>

          <p className="cnc-text-lg">
            Uma crase, uma palavra no enunciado ou uma mudança na base do cálculo pode alterar
            sua resposta. Este guia reúne 300 pontos de atenção, com exemplos e explicações
            diretas, para complementar seus estudos para concursos públicos.
          </p>

          <div className="cnc-alert">
            <p>
              <strong>IMPORTANTE:</strong> decorar a alternativa não é o objetivo. Use os
              comentários para entender o motivo da correção e depois aplique a regra em novas
              questões.
            </p>
          </div>
        </div>
      </header>

      {/* ==================================================================
          2. VEJA COMO É O MATERIAL POR DENTRO
      ================================================================== */}
      <section className="cnc-section cnc-bg-soft">
        <div className="cnc-container">
          <div className="cnc-section-head">
            <h2 className="cnc-h2">VEJA O GUIA DE REVISÃO PARA CONCURSOS POR DENTRO</h2>
            <p className="cnc-sub">
              Da interpretação de uma frase à escolha da fórmula: revise pequenas diferenças
              que mudam a resposta.
            </p>
          </div>

          <Carousel images={IMAGES.gallery} labelPrefix="Página real do guia" />

          <div className="cnc-grid cnc-grid-4 cnc-mt-xl">
            {SUBJECTS.map((s) => (
              <article key={s.title} className={`cnc-card cnc-subject cnc-tone-${s.tone}`}>
                <span className="cnc-subject-count">{s.count}</span>
                <h3 className="cnc-h3">{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>

          <p className="cnc-extra">
            <strong>E mais:</strong> orientações de estudo e um plano de revisão incluídos no
            guia.
          </p>

          <p className="cnc-closing">
            Cada item apresenta a armadilha e explica como corrigi-la. Você encontra o assunto,
            confere o detalhe e identifica o que precisa retomar.
          </p>
        </div>
      </section>

      {/* ==================================================================
          3. O QUE VOCÊ PODERÁ FAZER COM O MATERIAL
      ================================================================== */}
      <section className="cnc-section">
        <div className="cnc-container">
          <div className="cnc-section-head">
            <h2 className="cnc-h2">UMA REVISÃO PARA IR ALÉM DE “EU ACHEI QUE SABIA”</h2>
          </div>

          <div className="cnc-grid cnc-grid-2 cnc-max-900">
            {BENEFITS.map((b) => (
              <article key={b.title} className="cnc-card cnc-benefit">
                <span className="cnc-check" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h3 className="cnc-h3">{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="cnc-callout cnc-max-900">
            O guia é uma ferramenta complementar de revisão. Combine seu uso com estudo teórico
            e resolução de questões oficiais.
          </p>
        </div>
      </section>

      {/* ==================================================================
          4. COMO A REVISÃO FOI ORGANIZADA
      ================================================================== */}
      <section className="cnc-section cnc-bg-dark">
        <div className="cnc-container">
          <div className="cnc-section-head">
            <span className="cnc-tag cnc-tag-dark">A ESTRUTURA DO MATERIAL</span>
            <h2 className="cnc-h2">LEIA A ARMADILHA. ENTENDA A REGRA. PRATIQUE A APLICAÇÃO.</h2>
            <p className="cnc-sub">
              O conteúdo foi organizado em unidades curtas. Em cada item, você encontra um erro
              possível e uma explicação para corrigi-lo. A proposta é ajudar você a perceber o
              detalhe, explicar a regra com suas palavras e conferir se consegue aplicá-la em
              outro exemplo.
            </p>
          </div>

          <ol className="cnc-steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="cnc-step">
                <span className="cnc-step-num">{i + 1}</span>
                <h3 className="cnc-h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <dl className="cnc-stats">
            {STATS.map((s) => (
              <div key={s.label} className="cnc-stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <p className="cnc-note cnc-center">
            Os exemplos são didáticos e autorais. A seleção não é um ranking estatístico das
            pegadinhas mais frequentes.
          </p>
        </div>
      </section>

      {/* ==================================================================
          5. PARA QUEM É?
      ================================================================== */}
      <section className="cnc-section">
        <div className="cnc-container">
          <div className="cnc-section-head">
            <h2 className="cnc-h2">
              PARA QUEM ESTUDA PARA CONCURSOS E QUER REVISAR COM MAIS ATENÇÃO
            </h2>
          </div>

          <div className="cnc-grid cnc-grid-3">
            {AUDIENCE.map((a) => (
              <article key={a.title} className="cnc-card cnc-audience">
                <h3 className="cnc-h3">{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>

          <div className="cnc-frame cnc-max-900">
            <p>
              Pode apoiar a preparação para seleções como CNU, Correios, Banco do Brasil, Caixa
              e INSS, <strong>nos assuntos efetivamente exigidos pelo edital</strong>. O conteúdo
              das provas varia conforme o concurso, o cargo e a edição.
            </p>
            <p className="cnc-note">
              Não substitui um curso completo nem os conhecimentos específicos do seu cargo.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          6. CONTEÚDO COMPLETO + TRÊS BÔNUS
      ================================================================== */}
      <section className="cnc-section cnc-bg-soft">
        <div className="cnc-container">
          <div className="cnc-section-head">
            <span className="cnc-tag">MAIS FERRAMENTAS PARA SUA PREPARAÇÃO</span>
            <h2 className="cnc-h2">RECEBA O GUIA E LEVE TRÊS BÔNUS PARA CONTINUAR A REVISÃO</h2>
          </div>

          <div className="cnc-media-center">
            <ImageSlot
              img={IMAGES.bonusMockup}
              label="Mockup do guia com os três bônus"
              ratio="16 / 9"
              sizes="(max-width: 768px) 92vw, 760px"
            />
          </div>

          <div className="cnc-grid cnc-grid-3 cnc-mt-xl">
            {BONUSES.map((b) => (
              <article key={b.tag} className="cnc-card cnc-bonus">
                <ImageSlot img={b.img} label={b.imgLabel} ratio="4 / 3" sizes="(max-width: 768px) 92vw, 360px" />
                <div className="cnc-bonus-body">
                  <span className="cnc-bonus-tag">{b.tag}</span>
                  <h3 className="cnc-h3">{b.title}</h3>
                  <p>{b.description}</p>
                  <dl className="cnc-bonus-details">
                    <div>
                      <dt>Como usar</dt>
                      <dd>{b.howTo}</dd>
                    </div>
                    <div>
                      <dt>Você recebe</dt>
                      <dd>{b.youGet}</dd>
                    </div>
                  </dl>
                  {b.note && <p className="cnc-note">{b.note}</p>}
                  <span className="cnc-included">✓ INCLUÍDO NO PACOTE</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          7. CONFIRA ANTES DE ESCOLHER
          Orientação: quando houver depoimentos reais e autorizados, eles podem
          ser acrescentados neste bloco. Até lá, mantenha a demonstração do
          produto, sem números de alunos ou avaliações inventadas.
      ================================================================== */}
      <section className="cnc-section">
        <div className="cnc-container">
          <div className="cnc-section-head">
            <h2 className="cnc-h2">VEJA UM EXEMPLO COMPLETO DO QUE VOCÊ VAI RECEBER</h2>
            <p className="cnc-sub">
              Leia uma armadilha, confira a explicação e avalie se esse formato combina com sua
              revisão.
            </p>
          </div>

          <div className="cnc-grid cnc-grid-3">
            <Zoomable
              img={IMAGES.samplePortugues}
              label="Página real de Português"
              caption="Página de Português"
            />
            <Zoomable
              img={IMAGES.sampleMatematica}
              label="Página real de Matemática"
              caption="Página de Matemática"
            />
            <Zoomable
              img={IMAGES.sampleFlashcard}
              label="Flashcard real"
              caption="Flashcard de revisão"
            />
          </div>

          <p className="cnc-closing">
            As imagens mostram o conteúdo e a organização dos arquivos. Assim, você pode
            conhecer o material antes de decidir pela compra.
          </p>
        </div>
      </section>

      {/* ==================================================================
          8. OFERTA
          Orientação: configure a política e o processo de reembolso antes de
          publicar. Não anuncie entrega instantânea, suporte pedagógico ou
          atualizações gratuitas sem ter essas entregas definidas.
      ================================================================== */}
      <section id="oferta" className="cnc-section cnc-bg-dark">
        <div className="cnc-container">
          <div className="cnc-section-head">
            <span className="cnc-tag cnc-tag-dark">PACOTE DE REVISÃO PARA CONCURSOS PÚBLICOS</span>
            <h2 className="cnc-h2">300 PEGADINHAS COMENTADAS + TRÊS BÔNUS</h2>
          </div>

          <div className="cnc-offer">
            <div className="cnc-offer-media">
              <ImageSlot
                img={IMAGES.offerMockup}
                label="Mockup do pacote completo"
                ratio="4 / 3"
                sizes="(max-width: 768px) 92vw, 600px"
              />
            </div>

            <div className="cnc-offer-body">
              <h3 className="cnc-offer-title">Você recebe:</h3>
              <ul className="cnc-offer-list">
                {OFFER_ITEMS.map((item) => (
                  <li
                    key={item.text}
                    className={`${item.bonus ? "is-bonus" : ""} ${item.sub ? "is-sub" : ""}`}
                  >
                    <span aria-hidden="true">{item.bonus ? "★" : "✓"}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="cnc-price-box">
                <p className="cnc-price">{CONFIG.price}</p>
                <p className="cnc-price-cond">Pagamento único.</p>
                {CONFIG.installments && (
                  <p className="cnc-price-inst">{CONFIG.installments}</p>
                )}
              </div>

              <a href={CONFIG.checkoutUrl} className="cnc-btn cnc-btn-block">
                QUERO O GUIA PARA CONCURSOS + OS 3 BÔNUS
              </a>

              <p className="cnc-after-btn">
                📲 Material digital. Confira as instruções de acesso após a confirmação do
                pagamento.
              </p>

              <ul className="cnc-indicators">
                <li>📚 Conteúdo organizado por matéria</li>
                <li>📄 Arquivos em PDF</li>
                <li>🖨️ Possibilidade de impressão</li>
              </ul>
            </div>
          </div>

          {/* Garantia */}
          <div className="cnc-guarantee">
            <div className="cnc-guarantee-seal" aria-hidden="true">
              <strong>7</strong>
              <span>DIAS</span>
            </div>
            <div>
              <h3 className="cnc-h3">7 DIAS PARA CONHECER O MATERIAL</h3>
              <p>
                Confira os arquivos e avalie se o formato atende à sua necessidade de revisão.
                Para solicitar reembolso dentro do prazo de sete dias, utilize o canal informado
                na compra.
              </p>
              <p className="cnc-guarantee-support">
                <strong>Atendimento:</strong> {CONFIG.supportChannel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          9. PERGUNTAS FREQUENTES
      ================================================================== */}
      <section className="cnc-section">
        <div className="cnc-container cnc-narrow">
          <div className="cnc-section-head">
            <h2 className="cnc-h2">PERGUNTAS FREQUENTES</h2>
          </div>

          <div className="cnc-faq">
            {FAQ.map((item) => (
              <details key={item.q} className="cnc-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="cnc-faq-icon" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <div className="cnc-center cnc-mt-xl">
            <a href="#oferta" className="cnc-btn">
              QUERO COMEÇAR MINHA REVISÃO PARA CONCURSOS
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================================
          10. RODAPÉ
      ================================================================== */}
      <footer className="cnc-footer">
        <div className="cnc-container cnc-center">
          <p className="cnc-footer-name">Concursos na Prática</p>
          <p className="cnc-footer-text">
            Material educativo de estudo e revisão. Sem vínculo ou endosso dos órgãos e das
            bancas mencionados.
          </p>
          <nav className="cnc-footer-links" aria-label="Links institucionais">
            <a href={CONFIG.links.terms}>Termos de uso</a>
            <span aria-hidden="true">•</span>
            <a href={CONFIG.links.privacy}>Política de privacidade</a>
            <span aria-hidden="true">•</span>
            <a href={CONFIG.links.contact}>Contato</a>
            <span aria-hidden="true">•</span>
            <a href={CONFIG.links.refund}>Política de reembolso</a>
          </nav>
          <p className="cnc-footer-supplier">{CONFIG.supplier}</p>
        </div>
      </footer>
    </main>
  );
}
