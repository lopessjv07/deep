import styles from "./page.module.css";

// Native SVG Icons
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.featureIcon}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.faqIcon}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707" />
  </svg>
);

export default function Home() {
  return (
    <div className={styles.page}>
      
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <a href="#" className={styles.logoContainer}>
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70" stroke="#5DCAA5" strokeWidth="3" strokeLinecap="round" />
              <circle cx="50" cy="50" r="10" fill="#ffffff" />
            </svg>
            <span className={styles.logoText}>NeuroSoma</span>
          </a>
          <a href="#checkout" className={styles.headerCTA}>Acessar Protocolos</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <div className={styles.heroGrid}>
            
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                <span className={styles.bullet}>●</span> Para psicólogos, psiquiatras e terapeutas
              </div>
              
              <h1 className={styles.heroTitle}>
                Quando a fala encontra o <span>limite da cura</span> no consultório.
              </h1>
              
              <p className={styles.heroSubtitle}>
                Acesse o mapeamento clínico e protocolos práticos baseados na neurobiologia do trauma. Vá além da cognição e alcance o sistema nervoso autônomo dos seus pacientes mais travados.
              </p>
              
              <div className={styles.heroCTAContainer}>
                <a href="#checkout" className={styles.primaryButton}>
                  Adquirir Kit de Protocolos Somáticos
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <span className={styles.buttonSubtext}>Acesso imediato e vitalício à plataforma científica.</span>
              </div>
            </div>

            {/* Scientific Autonomic Nervous System SVG Diagram */}
            <div className={styles.heroVisual}>
              <svg className={styles.somaticCircle} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Concentric rings representing Polyvagal Theory states */}
                <circle cx="200" cy="200" r="180" stroke="#85B7EB" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
                <circle cx="200" cy="200" r="140" stroke="#85B7EB" strokeWidth="1" opacity="0.2" />
                <circle cx="200" cy="200" r="100" stroke="#85B7EB" strokeWidth="1" opacity="0.1" />
                
                {/* Vagal Ventral (Green) */}
                <path d="M200 40C288.366 40 360 111.634 360 200" stroke="#5DCAA5" strokeWidth="3" strokeLinecap="round" />
                
                {/* Sympathetic (Orange/Yellow - mapped as neutral clinical tone here) */}
                <path d="M360 200C360 288.366 288.366 360 200 360" stroke="#85B7EB" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Vagal Dorsal (Blue/Grey) */}
                <path d="M200 360C111.634 360 40 288.366 40 200C40 111.634 111.634 40 200 40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                
                {/* Dynamic Somatic Wave */}
                <path d="M70 200 Q 135 120, 200 200 T 330 200" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.85" />
                
                {/* Core Node */}
                <circle cx="200" cy="200" r="8" fill="#5DCAA5" />
                <circle cx="200" cy="200" r="24" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Labels */}
                <text x="200" y="25" fill="#5DCAA5" fontSize="10" fontWeight="700" letterSpacing="0.1em" textAnchor="middle">VENTRAL VAGAL (SEGURANÇA)</text>
                <text x="365" y="205" fill="#85B7EB" fontSize="10" fontWeight="700" letterSpacing="0.1em" textAnchor="start">SIMPÁTICO (LUTA/FUGA)</text>
                <text x="200" y="385" fill="rgba(255,255,255,0.4)" fontSize="10" fontWeight="700" letterSpacing="0.1em" textAnchor="middle">DORSAL VAGAL (CONGELAMENTO)</text>
              </svg>
            </div>

          </div>

          {/* Statistics Bar */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+90</span>
              <span className={styles.statLabel}>Protocolos Clínicos Práticos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+800</span>
              <span className={styles.statLabel}>Profissionais Certificados</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Abordagens Integradas</span>
            </div>
          </div>

        </div>
      </section>

      {/* Pain Points Section */}
      <section id="dores" className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitleContainer}>
            <div className={`${styles.badge} ${styles.badgeLight}`}>O Gargalo Clínico</div>
            <h2 className={styles.sectionTitle}>5 cenários em que as terapias puramente cognitivas falham</h2>
            <p className={styles.sectionSubtitle}>Quando o trauma está impresso na fisiologia, argumentar com o córtex pré-frontal não altera a resposta de sobrevivência.</p>
          </div>

          <div className={styles.painGrid}>
            
            <div className={styles.painCard}>
              <div className={styles.painHeader}>
                <span className={styles.painNumber}>01</span>
              </div>
              <div>
                <h3 className={styles.painTitle}>Hipervigilância Crônica</h3>
                <p className={styles.painDescription}>O paciente compreende racionalmente que está seguro, mas seu batimento cardíaco, tônus muscular e respiração continuam sinalizando perigo iminente.</p>
              </div>
            </div>

            <div className={styles.painCard}>
              <div className={styles.painHeader}>
                <span className={styles.painNumber}>02</span>
              </div>
              <div>
                <h3 className={styles.painTitle}>Embotamento Emocional</h3>
                <p className={styles.painDescription}>Indivíduos que relatam eventos traumáticos severos de forma totalmente fria e dissociada, sem qualquer conexão somática ou emocional com a experiência.</p>
              </div>
            </div>

            <div className={styles.painCard}>
              <div className={styles.painHeader}>
                <span className={styles.painNumber}>03</span>
              </div>
              <div>
                <h3 className={styles.painTitle}>Resistência Involuntária</h3>
                <p className={styles.painDescription}>Sessões inteiras consumidas por defesas intelectuais estruturadas. O paciente "sabe de tudo", mas não consegue experienciar nenhuma mudança real no corpo.</p>
              </div>
            </div>

            <div className={styles.painCard}>
              <div className={styles.painHeader}>
                <span className={styles.painNumber}>04</span>
              </div>
              <div>
                <h3 className={styles.painTitle}>Somatizações Recorrentes</h3>
                <p className={styles.painDescription}>Sintomas físicos sem causa diagnóstica definida — dores crônicas, espasmos, distúrbios digestivos — que oscilam conforme as flutuações de estresse.</p>
              </div>
            </div>

            <div className={styles.painCard}>
              <div className={styles.painHeader}>
                <span className={styles.painNumber}>05</span>
              </div>
              <div>
                <h3 className={styles.painTitle}>Ciclos de Auto-sabotagem</h3>
                <p className={styles.painDescription}>Comportamentos repetitivos de autodefesa ativados pelo sistema nervoso primitivo de forma automática, sabotando decisões tomadas de maneira consciente.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Unique Mechanism Section */}
      <section className={styles.sectionLight} style={{ borderTop: "1px solid var(--border-light)", paddingTop: "80px" }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitleContainer}>
            <div className={`${styles.badge} ${styles.badgeLight}`}>Mecanismo Único</div>
            <h2 className={styles.sectionTitle}>A tríade da desregulação autonômica</h2>
            <p className={styles.sectionSubtitle}>Para desatar o nó do trauma, a intervenção precisa mapear e falar a linguagem do corpo.</p>
          </div>

          <div className={styles.mechanismGrid}>
            
            <div className={styles.mechanismCard}>
              <span className={styles.mechanismHighlight}>O Vilão Oculto</span>
              <h3 className={styles.mechanismTitle}>A Memória Implícita</h3>
              <p className={styles.mechanismDescription}>Antes mesmo que a mente consciente rotule uma situação, a amígdala e as vias aferentes do nervo vago já dispararam a cascata bioquímica do estresse. O corpo reage ao passado no tempo presente.</p>
            </div>

            <div className={styles.mechanismCard}>
              <span className={styles.mechanismHighlight}>Neurobiologia</span>
              <h3 className={styles.mechanismTitle}>A Hierarquia Autonômica</h3>
              <p className={styles.mechanismDescription}>Baseado na Teoria Polivagal, o sistema nervoso opera em três estados programados. A intervenção eficaz não força o paciente à calma, mas constrói degraus fisiológicos de autorregulação.</p>
            </div>

            <div className={styles.mechanismCard}>
              <span className={styles.mechanismHighlight}>A Virada</span>
              <h3 className={styles.mechanismTitle}>Processamento Bottom-Up</h3>
              <p className={styles.mechanismDescription}>Diferente do método Top-Down (onde tentamos controlar as sensações através dos pensamentos), o método somático envia sinais de segurança da periferia (corpo) para o centro (cérebro).</p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.sectionLight} style={{ borderTop: "1px solid var(--border-light)", paddingTop: "80px" }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitleContainer}>
            <div className={`${styles.badge} ${styles.badgeLight}`}>Passo a Passo</div>
            <h2 className={styles.sectionTitle}>A sequência clínica de intervenção somática</h2>
            <p className={styles.sectionSubtitle}>Uma metodologia replicável estruturada para ser aplicada desde a primeira sessão de avaliação.</p>
          </div>

          <div className={styles.timelineGrid}>
            
            <div className={styles.timelineStep}>
              <span className={styles.stepNumber}>01</span>
              <h3 className={styles.stepTitle}>Rastreamento</h3>
              <p className={styles.stepDescription}>Mapeamento da assinatura autonômica do paciente, identificando os gatilhos silenciosos que ativam a resposta simpática ou dorsal.</p>
            </div>

            <div className={styles.timelineStep}>
              <span className={styles.stepNumber}>02</span>
              <h3 className={styles.stepTitle}>Pacing Fisiológico</h3>
              <p className={styles.stepDescription}>Uso de micro-intervenções de respiração, co-regulação visual e ajuste postural para estabilizar o sistema nervoso antes de acessar memórias dolorosas.</p>
            </div>

            <div className={styles.timelineStep}>
              <span className={styles.stepNumber}>03</span>
              <h3 className={styles.stepTitle}>Descarga Direcionada</h3>
              <p className={styles.stepDescription}>Guiar o escoamento seguro de energia motora e tensão muscular retidas no corpo desde o evento traumático original.</p>
            </div>

            <div className={styles.timelineStep}>
              <span className={styles.stepNumber}>04</span>
              <h3 className={styles.stepTitle}>Integração</h3>
              <p className={styles.stepDescription}>Consolidação cognitiva da nova resposta somática de segurança, reescrevendo a narrativa interna com o corpo regulado.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className={styles.sectionDark} style={{ padding: "100px 24px" }}>
        <div className={styles.sectionInner}>
          <div className={styles.manifestoContent}>
            <div className={styles.badge}>Manifesto NeuroSoma</div>
            
            <blockquote className={styles.manifestoText}>
              "O corpo guarda o placar. Nenhuma palavra consegue reescrever o que a <span>neurobiologia registrou</span> como sobrevivência."
            </blockquote>

            <div className={styles.pillarsGrid}>
              
              <div className={styles.pillarCard}>
                <h3 className={styles.pillarTitle}>Ciência Baseada em Evidências</h3>
                <p className={styles.pillarDescription}>Todos os nossos protocolos derivam de estudos de neurociência clínica e da teoria polivagal. Sem misticismo, apenas biologia aplicada.</p>
              </div>

              <div className={styles.pillarCard}>
                <h3 className={styles.pillarTitle}>Segurança Fisiológica</h3>
                <p className={styles.pillarDescription}>Intervenções milimetricamente dosadas para evitar a retramatização e garantir que o paciente permaneça na sua janela de tolerância emocional.</p>
              </div>

              <div className={styles.pillarCard}>
                <h3 className={styles.pillarTitle}>Praticidade Clínica</h3>
                <p className={styles.pillarDescription}>Guias rápidos e estruturados para que o profissional saiba exatamente o que fazer, o que falar e como observar o corpo do paciente.</p>
              </div>

            </div>

            {/* Authority Card */}
            <div className={styles.authorityCard}>
              <div className={styles.authorityPhotoContainer}>
                <svg className={styles.authoritySVG} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M50 20C41.7157 20 35 26.7157 35 35C35 43.2843 41.7157 50 50 50C58.2843 50 65 43.2843 65 35C65 26.7157 58.2843 20 50 20Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M22 80C22 65.6406 33.6406 54 48 54H52C66.3594 54 78 65.6406 78 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="50" cy="35" r="5" fill="currentColor" />
                </svg>
              </div>
              <div className={styles.authorityInfo}>
                <span className={styles.authorityRole}>Desenvolvimento Técnico</span>
                <h3 className={styles.authorityName}>Dr. Henrique Castilho & Equipe NeuroSoma</h3>
                <p className={styles.authorityBio}>
                  Psiquiatra clínico e neurocientista com mais de 15 anos de atuação hospitalar e acadêmica. O projeto NeuroSoma nasceu da necessidade de traduzir a teoria polivagal complexa em guias de cabeceira acionáveis para clínicos de todas as linhas terapêuticas.
                </p>
                <ul className={styles.credentialsList}>
                  <li className={styles.credentialTag}>Especialista em Trauma pela Harvard Medical</li>
                  <li className={styles.credentialTag}>Pesquisador de Neurobiologia Autonômica</li>
                  <li className={styles.credentialTag}>+12.000 horas de atendimento clínico</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content & Bonuses Section */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          
          <div className={styles.sectionTitleContainer}>
            <div className={`${styles.badge} ${styles.badgeLight}`}>Conteúdo Exclusivo</div>
            <h2 className={styles.sectionTitle}>O que você vai receber no kit</h2>
            <p className={styles.sectionSubtitle}>Um arsenal clínico completo desenvolvido para a prática profissional diária.</p>
          </div>

          <div className={styles.contentLayout}>
            
            {/* Main Product Card */}
            <div className={styles.mainProductCard}>
              <span className={styles.badge} style={{ borderColor: "var(--highlight-light)", color: "var(--highlight-light)", backgroundColor: "rgba(15, 110, 86, 0.05)" }}>Produto Principal</span>
              <h3 className={styles.productHeadline}>O Livro de Protocolos Somáticos</h3>
              <p className={styles.productDescription}>
                Um manual metodológico encadernado digitalmente, contendo o passo a passo científico para mapear e regular o sistema nervoso autônomo dos seus pacientes.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <CheckIcon />
                  <span><strong>Guia de 90 Protocolos Somáticos:</strong> Divididos por estado autonômico (simpático, dorsal e co-regulação ventral).</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckIcon />
                  <span><strong>Matriz de Rastreamento de Sintomas:</strong> Questionários prontos de avaliação inicial corporal para aplicar aos pacientes.</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckIcon />
                  <span><strong>Scripts de Fala do Terapeuta:</strong> Linguagem exata para introduzir o trabalho corporal sem assustar o paciente de abordagem clássica.</span>
                </li>
                <li className={styles.featureItem}>
                  <CheckIcon />
                  <span><strong>Biblioteca de Respostas Fisiológicas:</strong> Tabela rápida de referência clínica para consultar durante as sessões.</span>
                </li>
              </ul>
            </div>

            {/* Bonuses Grid */}
            <div className={styles.bonusGrid}>
              
              <div className={styles.bonusCard}>
                <span className={styles.bonusBadge}>Bônus 01</span>
                <h4 className={styles.bonusTitle}>Fichas Clínicas Imprimíveis</h4>
                <p className={styles.bonusDescription}>Modelos em PDF de alta qualidade de preenchimento rápido para você acompanhar o tônus autonômico sessão a sessão.</p>
              </div>

              <div className={styles.bonusCard}>
                <span className={styles.bonusBadge}>Bônus 02</span>
                <h4 className={styles.bonusTitle}>Videoaulas de Aplicação Prática</h4>
                <p className={styles.bonusDescription}>Demonstrações guiadas em vídeo detalhando a aplicação dos 12 principais protocolos com atores simulando cenários clínicos reais.</p>
              </div>

              <div className={styles.bonusCard}>
                <span className={styles.bonusBadge}>Bônus 03</span>
                <h4 className={styles.bonusTitle}>Guia de Integração Psicoeducativa</h4>
                <p className={styles.bonusDescription}>Material visual didático explicativo para entregar aos pacientes para que eles compreendam o funcionamento de sua própria biologia.</p>
              </div>

              <div className={styles.bonusCard}>
                <span className={styles.bonusBadge}>Bônus 04</span>
                <h4 className={styles.bonusTitle}>Comunidade Científica Privada</h4>
                <p className={styles.bonusDescription}>Acesso permanente a um canal exclusivo de discussão de casos clínicos e trocas científicas supervisionadas pela equipe técnica.</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Offer Checkout Section */}
      <section id="checkout" className={styles.offerSection}>
        <div className={styles.sectionInner}>
          
          <div className={styles.offerCard}>
            <span className={styles.offerBadge}>Oferta Exclusiva de Lançamento</span>
            <h2 className={styles.offerTitle}>Kit de Protocolos NeuroSoma</h2>
            <p className={styles.offerSubtitle}>Incorpore a dimensão somática na sua prática clínica e destrave os resultados dos seus pacientes.</p>
            
            <div className={styles.offerIncludes}>
              <div className={styles.includeItem}><CheckIcon /> Livro de Protocolos Somáticos</div>
              <div className={styles.includeItem}><CheckIcon /> Fichas Clínicas de Acompanhamento</div>
              <div className={styles.includeItem}><CheckIcon /> Videoaulas de Aplicação Prática</div>
              <div className={styles.includeItem}><CheckIcon /> Guia de Integração Psicoeducativa</div>
              <div className={styles.includeItem}><CheckIcon /> Acesso Vitalício à Plataforma</div>
              <div className={styles.includeItem}><CheckIcon /> Suporte Científico NeuroSoma</div>
            </div>

            <div className={styles.pricingBlock}>
              <p className={styles.originalPrice}>De R$ 197,00 por apenas</p>
              <h3 className={styles.installmentPrice}>
                5x de <span>R$ 6,51</span>
              </h3>
              <p className={styles.cashPrice}>ou R$ 29,00 à vista no cartão/PIX</p>
            </div>

            <div className={styles.offerCTAContainer}>
              <a href="https://pay.hotmart.com" className={styles.primaryButton} style={{ width: "100%" }}>
                <LockIcon />
                Quero Acessar os Protocolos Agora
              </a>
              <span className={styles.buttonSubtext}>Garantia incondicional de 7 dias protegida por lei.</span>
            </div>

            <div className={styles.securityBadges}>
              <div className={styles.securityItem}>
                <ShieldIcon />
                <span>Compra 100% Segura</span>
              </div>
              <div className={styles.securityItem}>
                <SparklesIcon />
                <span>Garantia de 7 dias</span>
              </div>
              <div className={styles.securityItem}>
                <LockIcon />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          
          <div className={styles.sectionTitleContainer} style={{ textAlign: "center", margin: "0 auto 60px auto" }}>
            <div className={`${styles.badge} ${styles.badgeLight}`}>FAQ</div>
            <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
            <p className={styles.sectionSubtitle}>Esclareça suas dúvidas técnicas e práticas sobre o Kit NeuroSoma.</p>
          </div>

          <div className={styles.faqContainer}>
            
            <details className={styles.faqDetails}>
              <summary className={styles.faqSummary}>
                Os protocolos podem ser aplicados por terapeutas de qualquer abordagem?
                <PlusIcon />
              </summary>
              <div className={styles.faqContent}>
                Sim. A biologia do trauma e as respostas autonômicas são universais. Independentemente de você atuar com TCC, Psicanálise, Gestalt ou humanista, compreender e regular o tônus somático do paciente facilita a entrega da sua própria metodologia técnica.
              </div>
            </details>

            <details className={styles.faqDetails}>
              <summary className={styles.faqSummary}>
                É necessário ter formação em terapia somática para utilizar o kit?
                <PlusIcon />
              </summary>
              <div className={styles.faqContent}>
                Não. O kit foi desenhado especificamente para funcionar como uma ponte prática. As explicações neurobiológicas são diretas e os protocolos são descritos passo a passo, detalhando exatamente o que o clínico deve observar, falar e fazer em consultório.
              </div>
            </details>

            <details className={styles.faqDetails}>
              <summary className={styles.faqSummary}>
                Como funciona o bônus de videoaulas práticas?
                <PlusIcon />
              </summary>
              <div className={styles.faqContent}>
                Imediatamente após a confirmação da compra, você receberá por e-mail os dados de acesso à nossa plataforma de membros, onde o manual digital completo, as videoaulas práticas com simulações e os arquivos em PDF para impressão estarão disponíveis para download imediato.
              </div>
            </details>

            <details className={styles.faqDetails}>
              <summary className={styles.faqSummary}>
                Tenho alguma garantia caso sinta que não se adequa à minha prática?
                <PlusIcon />
              </summary>
              <div className={styles.faqContent}>
                Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você julgar que as intervenções não são aplicáveis aos seus pacientes ou não gostar do material, basta solicitar o reembolso na plataforma e faremos o estorno integral do seu pagamento.
              </div>
            </details>

            <details className={styles.faqDetails}>
              <summary className={styles.faqSummary}>
                O acesso à plataforma de membros expira em quanto tempo?
                <PlusIcon />
              </summary>
              <div className={styles.faqContent}>
                O seu acesso é vitalício. Isso significa que você poderá revisar o conteúdo, reassistir às videoaulas e baixar as fichas de acompanhamento sempre que precisar, incluindo todas as atualizações futuras sem custo adicional.
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50" stroke="#5DCAA5" strokeWidth="4" />
              </svg>
              <span>NeuroSoma</span>
            </div>
            <span style={{ fontSize: "0.85rem" }}>Cuidado Clínico de Base Científica</span>
          </div>

          <p className={styles.footerDisclaimer}>
            Aviso de Responsabilidade: As informações e protocolos presentes neste material são de caráter técnico-científico voltados para o aprimoramento profissional de psicoterapeutas devidamente credenciados. Eles servem como suporte adjuvante e não substituem o diagnóstico médico formal ou o tratamento psiquiátrico quando clinicamente indicado.
          </p>

          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} NeuroSoma. Todos os direitos reservados.</span>
            <span>Desenvolvido com foco científico e de alta performance.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
