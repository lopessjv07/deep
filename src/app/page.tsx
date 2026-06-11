import Image from "next/image";
import styles from "./page.module.css";
import CountdownBar from "../components/CountdownBar";
import LiveViewersToast from "../components/LiveViewersToast";

const IconX = () => (
  <svg className={styles.painIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const IconCheck = () => (
  <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconPlus = () => (
  <svg className={styles.faqIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconRefresh = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

const Star = () => <span>★</span>;

export default function Home() {
  return (
    <>
      <CountdownBar />
      <LiveViewersToast />
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="44" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M28 50C28 37.85 37.85 28 50 28C62.15 28 72 37.85 72 50" stroke="#5DCAA5" strokeWidth="3" strokeLinecap="round" />
              <circle cx="50" cy="50" r="8" fill="#fff" />
            </svg>
            NeuroSoma
          </div>
          <a href="#checkout" className={styles.navCta}>Acessar Protocolos</a>
        </nav>
      </header>

      {/* 1 ─ HERO */}
      <section className={`${styles.hero} ${styles.dark}`}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={`${styles.badge} ${styles.badgeDark}`}>Para psicólogos, psiquiatras e terapeutas</span>
            <h1 className={styles.heroTitle}>
              +90 Protocolos Somáticos — Para <span>Destravar o Corpo</span> Quando a Fala Chega no Limite
            </h1>
            <p className={styles.heroSub}>
              Seu paciente fez anos de terapia verbal e ainda carrega o trauma. A mente entende. O corpo não liberou. Acesse a ferramenta certa para mudar isso.
            </p>
            <a href="#checkout" className={styles.cta}>
              Quero Acessar os Protocolos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <p className={styles.ctaSub}>Acesso imediato · Garantia de 7 dias</p>
          </div>
          <div className={styles.mockup}>
            <Image src="/mockup.webp" alt="Mockup do Kit de Protocolos Somáticos NeuroSoma" width={550} height={779} className={styles.mockupImg} preload sizes="(max-width: 1024px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      {/* 2 ─ DORES */}
      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2 className={styles.secTitle}>Você já viveu alguma dessas situações?</h2>
          </div>

          <div className={styles.painList}>
            <div className={styles.painItem}>
              <IconX />
              <span>Paciente que verbaliza o trauma perfeitamente, mas o corpo continua em estado de alerta.</span>
            </div>
            <div className={styles.painItem}>
              <IconX />
              <span>Sessões que chegam num teto: o insight está lá, mas a melhora não vem.</span>
            </div>
            <div className={styles.painItem}>
              <IconX />
              <span>Sintomas somáticos (dor crônica, tensão) que não respondem à fala.</span>
            </div>
            <div className={styles.painItem}>
              <IconX />
              <span>Paciente em constante dissociação e distanciamento emocional.</span>
            </div>
          </div>

          <p className={styles.painImpact}>
            Você não chegou no limite.<br />Você só está usando a ferramenta errada.
          </p>
        </div>
      </section>

      {/* 3 ─ MECANISMO */}
      <section className={`${styles.sectionSm} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2 className={styles.secTitle}>Por que a fala trava no trauma?</h2>
          </div>

          <div className={styles.cardGrid3}>
            <div className={styles.mechCard}>
              <h3 className={styles.mechTitle}>O trauma não mora nas memórias.</h3>
              <p className={styles.mechDesc}>A pesquisa mostra que o trauma codifica no sistema nervoso. O paciente entende tudo, mas o corpo ainda sinaliza perigo.</p>
            </div>
            <div className={styles.mechCard}>
              <h3 className={styles.mechTitle}>Insight não é regulação.</h3>
              <p className={styles.mechDesc}>O processamento verbal não se comunica diretamente com a resposta de estresse. Para mudar o estado, é preciso entrar pelo corpo.</p>
            </div>
            <div className={styles.mechCard}>
              <h3 className={styles.mechTitle}>A Arte Somática.</h3>
              <p className={styles.mechDesc}>Técnicas corporais acessam o sistema nervoso autônomo diretamente, liberando o que a fala não alcança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 ─ AMOSTRA */}
      <section className={`${styles.sectionSm} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <h2 className={styles.secTitle}>Veja os protocolos por dentro</h2>
            <p className={styles.secSub}>Uma metodologia clínica replicável e estruturada</p>
          </div>

          <div className={styles.previewGrid}>
            <div className={styles.previewSlot}>
              <Image src="/1.webp" alt="Protocolo Somático - Página de exemplo 01" width={500} height={707} className={styles.previewImg} sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className={styles.previewSlot}>
              <Image src="/2.webp" alt="Protocolo Somático - Página de exemplo 02" width={500} height={708} className={styles.previewImg} sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className={styles.previewSlot}>
              <Image src="/3.webp" alt="Protocolo Somático - Página de exemplo 03" width={500} height={750} className={styles.previewImg} sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className={styles.previewSlot}>
              <Image src="/4.webp" alt="Protocolo Somático - Página de exemplo 04" width={500} height={707} className={styles.previewImg} sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          </div>
        </div>
      </section>

      {/* 5 ─ OFERTA */}
      <section className={`${styles.section} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <span className={`${styles.badge} ${styles.badgeLight}`}>Conteúdo Completo</span>
            <h2 className={styles.secTitle}>Tudo que você vai receber</h2>
          </div>

          <div className={styles.offerLayout}>
            <div className={styles.mainProduct}>
              <span className={styles.mainProductTag}>Produto Principal</span>
              <h3 className={styles.mainProductTitle}>Livro de Protocolos Somáticos</h3>
              <p className={styles.mainProductDesc}>+90 técnicas corporais organizadas por estado autonômico, com scripts de fala, fichas de acompanhamento e guias visuais prontos para aplicar em sessão.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><IconCheck /><span>Protocolos divididos por simpático, dorsal e ventral</span></li>
                <li className={styles.checkItem}><IconCheck /><span>Scripts de fala do terapeuta prontos para uso</span></li>
                <li className={styles.checkItem}><IconCheck /><span>Fichas de rastreamento de sintomas somáticos</span></li>
                <li className={styles.checkItem}><IconCheck /><span>Tabela de respostas fisiológicas de referência rápida</span></li>
              </ul>
            </div>

            <div className={styles.bonusGrid}>
              <div className={styles.bonusCard}>
                <span className={styles.bonusLabel}>Bônus 01</span>
                <h4 className={styles.bonusTitle}>Guia de Avaliação Somática Rápida</h4>
                <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 67</span> → Grátis</p>
              </div>
              <div className={styles.bonusCard}>
                <span className={styles.bonusLabel}>Bônus 02</span>
                <h4 className={styles.bonusTitle}>Manejo de Dissociação em Sessão</h4>
                <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 47</span> → Grátis</p>
              </div>
              <div className={styles.bonusCard}>
                <span className={styles.bonusLabel}>Bônus 03</span>
                <h4 className={styles.bonusTitle}>Regulando o Nervo Vago</h4>
                <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 47</span> → Grátis</p>
              </div>
              <div className={styles.bonusCard}>
                <span className={styles.bonusLabel}>Bônus 04</span>
                <h4 className={styles.bonusTitle}>Baralho Somático Lúdico</h4>
                <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 37</span> → Grátis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ─ DEPOIMENTOS */}
      <section className={`${styles.sectionSm} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <span className={`${styles.badge} ${styles.badgeLight}`}>Depoimentos</span>
            <h2 className={styles.secTitle}>O que dizem os profissionais</h2>
          </div>

          <div className={styles.testGrid}>
            <div className={styles.testCard}>
              <div className={styles.testStars}><Star /><Star /><Star /><Star /><Star /></div>
              <p className={styles.testQuote}>&ldquo;Destravou pacientes que estavam parados há meses. Vale cada centavo.&rdquo;</p>
              <p className={styles.testAuthor}>Ana M.</p>
              <p className={styles.testRole}>Psicóloga</p>
            </div>
            <div className={styles.testCard}>
              <div className={styles.testStars}><Star /><Star /><Star /><Star /><Star /></div>
              <p className={styles.testQuote}>&ldquo;Ajudou demais na minha clínica. O guia de dissociação me salvou em várias sessões.&rdquo;</p>
              <p className={styles.testAuthor}>Carlos T.</p>
              <p className={styles.testRole}>Psiquiatra</p>
            </div>
            <div className={styles.testCard}>
              <div className={styles.testStars}><Star /><Star /><Star /><Star /><Star /></div>
              <p className={styles.testQuote}>&ldquo;Material riquíssimo, uso tanto no individual quanto em grupo.&rdquo;</p>
              <p className={styles.testAuthor}>Beatriz S.</p>
              <p className={styles.testRole}>Terapeuta Corporal</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 ─ AUTORIDADE */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <span className={`${styles.badge} ${styles.badgeDark}`}>Sobre nós</span>
            <h2 className={`${styles.secTitle}`} style={{ color: "#fff" }}>A Ciência por trás da NeuroSoma</h2>
          </div>

          <p className={styles.authText}>
            Nascemos da pergunta que todo clínico já fez: por que a fala não é suficiente? O Instituto NeuroSoma reúne especialistas dedicados a traduzir a neurobiologia e a teoria polivagal em ferramentas de consultório práticas, seguras e baseadas em evidências.
          </p>

          <div className={styles.metricsBar}>
            <div className={styles.metric}>
              <p className={styles.metricValue}>+12.000</p>
              <p className={styles.metricLabel}>Horas de pesquisa clínica</p>
            </div>
            <div className={styles.metric}>
              <p className={styles.metricValue}>+3.000</p>
              <p className={styles.metricLabel}>Profissionais certificados</p>
            </div>
            <div className={styles.metric}>
              <p className={styles.metricValue}>100%</p>
              <p className={styles.metricLabel}>Baseado em evidências</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 ─ GARANTIA & CHECKOUT */}
      <section id="checkout" className={styles.checkout}>
        <div className={styles.checkoutCard}>
          <span className={styles.guaranteeSeal}>
            <IconShield />
            Garantia de 7 dias — Risco Zero
          </span>
          <h2 className={styles.secTitle} style={{ color: "#fff", marginBottom: 12 }}>Kit de Protocolos NeuroSoma</h2>
          <p className={styles.guaranteeText}>
            Use os protocolos. Se sentir que não transformou sua prática, devolvemos 100% do valor. Sem perguntas.
          </p>

          <div className={styles.priceBlock}>
            <p className={styles.priceOld}>De R$ 197,00 por apenas</p>
            <p className={styles.priceMain}>5x de <span>R$ 6,51</span></p>
            <p className={styles.priceCash}>ou R$ 29,00 à vista no cartão/PIX</p>
          </div>

          <div className={styles.ctaWrap}>
            <a href="https://pay.hotmart.com" className={`${styles.cta} ${styles.ctaFull}`}>
              <IconLock />
              Quero acessar os protocolos agora
            </a>
            <p className={styles.ctaSub}>Acesso imediato após confirmação do pagamento</p>
          </div>

          <div className={styles.trustRow}>
            <span className={styles.trustItem}><IconShield /> Compra Segura</span>
            <span className={styles.trustItem}><IconZap /> Acesso Imediato</span>
            <span className={styles.trustItem}><IconRefresh /> Atualizações Grátis</span>
          </div>
        </div>
      </section>

      {/* 9 ─ FAQ */}
      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <span className={`${styles.badge} ${styles.badgeLight}`}>FAQ</span>
            <h2 className={styles.secTitle}>Perguntas Frequentes</h2>
          </div>

          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>Preciso ter formação prévia em terapia somática? <IconPlus /></summary>
              <div className={styles.faqA}>Não. Os guias são inteiramente passo a passo e foram desenhados para profissionais de qualquer linha terapêutica (TCC, Psicanálise, Gestalt, Humanista). Tudo é explicado com clareza e pronto para aplicar.</div>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>Funciona para atendimentos online? <IconPlus /></summary>
              <div className={styles.faqA}>Sim. Os protocolos foram adaptados para aplicação tanto presencial quanto remota, com indicações específicas de como guiar o paciente verbalmente durante sessões por vídeo.</div>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>Qual o formato do material? <IconPlus /></summary>
              <div className={styles.faqA}>100% digital em PDF de alta qualidade, pronto para leitura em qualquer dispositivo ou para impressão. Acesso disponibilizado imediatamente após a confirmação do pagamento.</div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerBrand}>NeuroSoma</span>
          <span>© {new Date().getFullYear()} NeuroSoma — Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
