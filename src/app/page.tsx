import Image from "next/image";
import styles from "./page.module.css";
import CountdownBar from "../components/CountdownBar";
import LiveViewersToast from "../components/LiveViewersToast";
import PreviewCarousel from "../components/PreviewCarousel";
import {
  Brain,
  Unlock,
  Zap,
  Eye,
  AlertTriangle,
  Dna,
  Moon,
  Leaf,
  FileText,
  BarChart2,
  Gift,
  CheckCircle2
} from "lucide-react";

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


      <main>
        {/* 1 ─ HERO */}
        <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={`${styles.badge} ${styles.badgeDark}`}>Para psicólogos, psiquiatras e terapeutas</span>
            <h1 className={styles.heroTitle}>
              +90 Protocolos Somáticos Para <span>Destravar o Corpo</span> Quando a Fala Chegou no Limite
            </h1>
            <p className={styles.heroSub}>
              A primeira biblioteca clínica que une Neurobiologia e Teoria Polivagal em protocolos prontos para aplicar em sessão.
            </p>
            <div className={styles.warningBlock}>
              <p className={styles.warningText}>
                <AlertTriangle size={18} className={styles.warningIcon} />
                <strong>AVISO IMPORTANTE:</strong> Se você ainda acredita que só a fala é suficiente para tratar trauma, NÃO adquira este material. Ele vai confrontar tudo que você aprendeu na graduação.
              </p>
            </div>
            <a href="#checkout" className={styles.cta}>
              Quero Acessar os Protocolos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <p className={styles.ctaSub}>Acesso imediato · Garantia de 7 dias</p>
          </div>
          <div className={styles.mockup}>
            <Image src="/herodasktop.webp" alt="Mockup do Kit de Protocolos Somáticos NeuroSoma - Desktop" width={800} height={400} className={styles.mockupDesktop} priority sizes="(max-width: 1024px) 100vw, 45vw" />
            <Image src="/heromobile.webp" alt="Mockup do Kit de Protocolos Somáticos NeuroSoma - Mobile" width={450} height={550} className={styles.mockupMobile} priority sizes="(max-width: 1024px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      {/* 2 ─ BENEFÍCIOS */}
      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2 className={styles.secTitle}>Tudo que você vai conseguir com esse material:</h2>
          </div>

          <div className={styles.benefitList}>
            <div className={styles.benefitItem}>
              <Brain className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Regulação Real</h3>
                <p className={styles.benefitDesc}>Acesse o sistema nervoso do seu paciente pelo único caminho que o trauma respeita — o corpo.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <Unlock className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Desbloqueio de Casos Travados</h3>
                <p className={styles.benefitDesc}>Pacientes que ficaram meses sem evoluir começam a se mover nas primeiras sessões com os protocolos.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <Zap className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Aplicação Imediata</h3>
                <p className={styles.benefitDesc}>Cada protocolo vem com script de fala pronto. Você abre, lê e aplica. Sem adaptação, sem improviso.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <Eye className={styles.benefitIcon} />
              <div>
                <h3 className={styles.benefitTitle}>Mapa Autonômico Completo</h3>
                <p className={styles.benefitDesc}>Saiba exatamente em qual estado o seu paciente está e qual protocolo usar — sem chute, sem tentativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ─ AVISO IMPORTANTE + PARA QUEM É */}
      <section className={`${styles.sectionSm} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={styles.importantNotice}>
            <p className={styles.importantTitle}>
              <AlertTriangle size={18} className={styles.importantIcon} />
              Importante:
            </p>
            <p className={styles.importantText}>
              Este material pode ser usado de forma flexível, de acordo com seu propósito clínico ou pessoal.
            </p>
            <p className={styles.importantText}>
              Se você é psicólogo, psiquiatra, terapeuta ou qualquer profissional que trabalha com sofrimento humano, esses protocolos vão se tornar sua ferramenta de maior impacto — especialmente com pacientes que verbalizaram tudo e ainda assim não se moveram.
            </p>
          </div>
        </div>
      </section>

      {/* 4 ─ AMOSTRA */}
      <section className={`${styles.sectionSm} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <h2 className={styles.secTitle}>Veja como é o material por dentro:</h2>
            <p className={styles.secSub}>Da regulação do sistema nervoso ao processamento completo do trauma somático.</p>
          </div>

          <PreviewCarousel />

          <div className={styles.materialContents}>
            <div className={styles.materialItem}>
              <Dna size={18} className={styles.materialIcon} />
              <span><strong>Protocolos Simpáticos</strong> — Para estados de hiperativação, luta e fuga</span>
            </div>
            <div className={styles.materialItem}>
              <Moon size={18} className={styles.materialIcon} />
              <span><strong>Protocolos Dorsais</strong> — Para colapso, congelamento e dissociação profunda</span>
            </div>
            <div className={styles.materialItem}>
              <Leaf size={18} className={styles.materialIcon} />
              <span><strong>Protocolos Ventrais</strong> — Para ancoragem, presença e reconexão segura</span>
            </div>
            <div className={styles.materialItem}>
              <FileText size={18} className={styles.materialIcon} />
              <span><strong>Scripts de Fala do Terapeuta</strong> — Prontos para uso, sessão a sessão</span>
            </div>
            <div className={styles.materialItem}>
              <BarChart2 size={18} className={styles.materialIcon} />
              <span><strong>Fichas de Rastreamento Somático</strong> — Para mapear evolução com precisão clínica</span>
            </div>
            <div className={styles.materialExtra}>
              E mais: Tabela de respostas fisiológicas, guia de avaliação rápida, manejo de dissociação e regulação do nervo vago.
            </div>
          </div>
        </div>
      </section>

      {/* 5 ─ BASE CIENTÍFICA */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <span className={`${styles.badge} ${styles.badgeDark}`}>Fundamentação</span>
            <h2 className={`${styles.secTitle}`} style={{ color: "#fff" }}>A Base Científica dos Nossos Protocolos</h2>
          </div>

          <p className={styles.authText}>
            São +90 protocolos somáticos estruturados sobre os pilares da Neurobiologia do Trauma e da Teoria Polivagal de Stephen Porges.
          </p>
          <p className={styles.authText}>
            Não são técnicas aleatórias. É uma metodologia clínica replicável, organizada para intervir diretamente no sistema nervoso autônomo — onde o trauma realmente mora — usando a precisão da ciência para liberar o que a fala não alcança.
          </p>

          <blockquote className={styles.scienceQuote}>
            &ldquo;O corpo guarda o placar.&rdquo; — Bessel van der Kolk
          </blockquote>

          <div className={styles.metricsBar}>
            <div className={styles.metric}>
              <p className={styles.metricValue}>+3.000</p>
              <p className={styles.metricLabel}>Profissionais certificados</p>
            </div>
            <div className={styles.metric}>
              <p className={styles.metricValue}>+90</p>
              <p className={styles.metricLabel}>Protocolos estruturados</p>
            </div>
            <div className={styles.metric}>
              <p className={styles.metricValue}>100%</p>
              <p className={styles.metricLabel}>Baseado em evidências</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ─ PARA QUEM É */}
      <section className={`${styles.sectionSm} ${styles.light}`}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <h2 className={styles.secTitle}>Para quem é?</h2>
          </div>

          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <h3 className={styles.audienceTitle}>Profissionais clínicos</h3>
              <p className={styles.audienceDesc}>
                Psicólogos, psiquiatras e terapeutas que querem ir além do insight verbal e produzir mudança real no estado do paciente.
              </p>
            </div>
            <div className={styles.audienceCard}>
              <h3 className={styles.audienceTitle}>Terapeutas corporais e integradores</h3>
              <p className={styles.audienceDesc}>
                Que buscam estrutura clínica, linguagem técnica e protocolos validados para elevar a credibilidade da sua prática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 ─ OFERTA / BÔNUS */}
      <section className={`${styles.section} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <span className={`${styles.badge} ${styles.badgeLight}`}>Conteúdo Completo</span>
            <h2 className={styles.secTitle}>Adquira hoje e leve 4 bônus exclusivos:</h2>
          </div>

          <div className={styles.bonusGrid}>
            <div className={styles.bonusCard}>
              <span className={styles.bonusLabel}><Gift size={14} className={styles.bonusIcon} /> Bônus 1</span>
              <h3 className={styles.bonusTitle}>Guia de Avaliação Somática Rápida</h3>
              <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 67</span> → Grátis</p>
              <p className={styles.bonusDescText}>Avalie o estado autonômico do paciente em menos de 5 minutos antes de escolher o protocolo certo.</p>
            </div>
            <div className={styles.bonusCard}>
              <span className={styles.bonusLabel}><Gift size={14} className={styles.bonusIcon} /> Bônus 2</span>
              <h3 className={styles.bonusTitle}>Manejo de Dissociação em Sessão</h3>
              <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 47</span> → Grátis</p>
              <p className={styles.bonusDescText}>Um guia clínico para reconhecer, nomear e trabalhar dissociação sem perder o paciente durante o processo.</p>
            </div>
            <div className={styles.bonusCard}>
              <span className={styles.bonusLabel}><Gift size={14} className={styles.bonusIcon} /> Bônus 3</span>
              <h3 className={styles.bonusTitle}>Regulando o Nervo Vago</h3>
              <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 47</span> → Grátis</p>
              <p className={styles.bonusDescText}>Técnicas diretas de estimulação vagal que você pode prescrever em sessão e como tarefa entre encontros.</p>
            </div>
            <div className={styles.bonusCard}>
              <span className={styles.bonusLabel}><Gift size={14} className={styles.bonusIcon} /> Bônus 4</span>
              <h3 className={styles.bonusTitle}>Baralho Somático Lúdico</h3>
              <p className={styles.bonusPrice}><span className={styles.bonusPriceOld}>De R$ 37</span> → Grátis</p>
              <p className={styles.bonusDescText}>Uma ferramenta visual e tátil para facilitar o acesso somático com pacientes resistentes, racionais ou com dificuldade de contato corporal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 ─ DEPOIMENTOS */}
      <section className={`${styles.sectionSm} ${styles.light}`} style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.secHeadCenter}`}>
            <span className={`${styles.badge} ${styles.badgeLight}`}>Depoimentos</span>
            <h2 className={styles.secTitle}>Nossas ferramentas já transformaram a prática de +3.000 profissionais certificados.</h2>
          </div>

          <div className={styles.testGrid}>
            <div className={styles.testCard}>
              <div className={styles.testStars}><Star /><Star /><Star /><Star /><Star /></div>
              <p className={styles.testQuote}>&ldquo;Destravou pacientes que estavam parados há meses. Vale cada centavo.&rdquo;</p>
              <p className={styles.testAuthor}>Ana M.</p>
              <p className={styles.testRole}>Psicóloga <span className={styles.verified}><CheckCircle2 size={12} className={styles.verifiedIcon} /> Verificada</span></p>
            </div>
            <div className={styles.testCard}>
              <div className={styles.testStars}><Star /><Star /><Star /><Star /><Star /></div>
              <p className={styles.testQuote}>&ldquo;O guia de dissociação me salvou em várias sessões. Nunca mais entro em sessão sem ele.&rdquo;</p>
              <p className={styles.testAuthor}>Carlos T.</p>
              <p className={styles.testRole}>Psiquiatra <span className={styles.verified}><CheckCircle2 size={12} className={styles.verifiedIcon} /> Verificado</span></p>
            </div>
            <div className={styles.testCard}>
              <div className={styles.testStars}><Star /><Star /><Star /><Star /><Star /></div>
              <p className={styles.testQuote}>&ldquo;Material riquíssimo. Uso tanto no individual quanto em grupo. As fichas de rastreamento são ouro.&rdquo;</p>
              <p className={styles.testAuthor}>Beatriz S.</p>
              <p className={styles.testRole}>Terapeuta Corporal <span className={styles.verified}><CheckCircle2 size={12} className={styles.verifiedIcon} /> Verificada</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 ─ GARANTIA & CHECKOUT */}
      <section id="checkout" className={styles.checkout}>
        <div className={styles.checkoutCard}>
          <span className={styles.guaranteeSeal}>
            <IconShield />
            Garantia Incondicional — 7 dias
          </span>
          <h2 className={styles.secTitle} style={{ color: "#fff", marginBottom: 12 }}>Preço promocional de lançamento somente por tempo limitado</h2>
          <p className={styles.guaranteeText}>
            Se nas próximas 7 sessões você não sentir que expandiu sua capacidade clínica de uma forma que nunca viveu antes, envie um e-mail e devolvemos cada centavo — sem perguntas.
          </p>

          <div className={styles.priceBlock}>
            <p className={styles.priceOld}>De R$ 197,00 por apenas</p>
            <p className={styles.priceMain}>R$ <span>29</span></p>
            <p className={styles.priceCash}>ou 5x de R$ 6,51 no cartão</p>
          </div>

          <div className={styles.ctaWrap}>
            <a href="https://pay.hotmart.com" className={`${styles.cta} ${styles.ctaFull}`}>
              <IconLock />
              CLIQUE AQUI E ACESSE AGORA
            </a>
            <p className={styles.ctaSub}>Acesso imediato. 7 dias de garantia.</p>
          </div>

          <div className={styles.trustRow}>
            <span className={styles.trustItem}><IconShield /> Compra Segura</span>
            <span className={styles.trustItem}><IconZap /> Acesso Imediato</span>
            <span className={styles.trustItem}><IconRefresh /> Atualizações Grátis</span>
          </div>
        </div>
      </section>

      {/* 10 ─ FAQ */}
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

      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>NeuroSoma © {new Date().getFullYear()} — Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
