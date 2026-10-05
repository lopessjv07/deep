import './teatod.css';

export default function LandingPage() {
  return (
    <div className="teatod-container">
      <main>
        <section className="hero-section container">
          <div className="animate-fade-in">
            <div className="stars">★ ★ ★ ★ ★</div>
            <div className="reviews-count">+215 avaliações</div>

            <h1 className="hero-title">
              <span className="text-highlight">Protocolo de Diferenciação:</span><br />
              Manejo de Comportamento no TEA Nível 2 + TOD
            </h1>

            <p className="hero-subtitle">
              <em>O método para saber, em segundos, se aquela crise é sensorial ou é oposição — e o que fazer em cada uma sem reforçar o padrão errado.</em>
            </p>

            <div className="alert-box">
              <div className="alert-icon">⚠️</div>
              <div>
                <strong>AVISO IMPORTANTE:</strong> Se você não está disposto a parar de aplicar a mesma técnica para todos os comportamentos do seu filho, este material não é para você. Ele exige que você aprenda a diferenciar antes de agir — e isso muda a forma como você responde a cada crise a partir de hoje.
              </div>
            </div>
          </div>
        </section>

        <section className="container section-spacing animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title">O que você vai conseguir com este material</h2>

          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">🧩</div>
              <h3 className="feature-title">Protocolo de Triagem Imediata</h3>
              <p className="feature-desc">Descubra em menos de 2 minutos se o comportamento é sensorial (TEA), aprendido (TOD) ou misto — antes de reagir.</p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">🛑</div>
              <h3 className="feature-title">Fim do Reforço Sem Querer</h3>
              <p className="feature-desc">Pare de aplicar acomodação onde precisa de limite (e limite onde precisa de acolhimento) — o erro que mantém os dois padrões presos.</p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Scripts Prontos Para a Crise</h3>
              <p className="feature-desc">Frases e ações exatas para os primeiros 3 minutos de uma crise, sem depender de "pensar rápido" no calor do momento.</p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">📋</div>
              <h3 className="feature-title">Linguagem Única</h3>
              <p className="feature-desc">Um sistema para que pais, professores e terapeuta apliquem a mesma estratégia em casa, escola e clínica, sem contradição.</p>
            </div>
          </div>
        </section>

        <section className="container section-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card" style={{ borderLeft: '6px solid var(--warning)' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>⚠️</span> Importante
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Este material é um <strong>apoio complementar ao acompanhamento profissional</strong> (psicólogo, psiquiatra, terapeuta ABA). Ele não substitui avaliação ou tratamento — ele te dá clareza e linguagem prática para os momentos do dia a dia entre as sessões.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Se você é terapeuta, AT, professor de AEE ou profissional da educação/saúde, este protocolo se torna uma ferramenta de padronização entre você e a família, reduzindo retrabalho e contradição de estratégias.
            </p>
          </div>
        </section>

        <section className="container section-spacing">
          <h2 className="section-title">Veja como é o material por dentro</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>Da triagem do comportamento à generalização entre ambientes.</p>

          <ul className="content-list">
            <li>
              <div className="feature-icon">🧩</div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Apostila 1 — Diferencie Antes de Agir</strong>
                <p className="feature-desc">O protocolo de triagem TEA x TOD x misto</p>
              </div>
            </li>
            <li>
              <div className="feature-icon">🌊</div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Apostila 2 — Manejo Sensorial no Nível 2 de Suporte</strong>
                <p className="feature-desc">Acomodação, comunicação alternativa, prevenção de crise</p>
              </div>
            </li>
            <li>
              <div className="feature-icon">🔄</div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Apostila 3 — ABA Aplicada ao TOD</strong>
                <p className="feature-desc">Reforço, extinção, consistência sem punição</p>
              </div>
            </li>
            <li>
              <div className="feature-icon">⏱️</div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Apostila 4 — Scripts Para os Primeiros 3 Minutos de Crise</strong>
              </div>
            </li>
            <li>
              <div className="feature-icon">🗺️</div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Apostila 5 — Rotina e Generalização</strong>
                <p className="feature-desc">Mantendo ganhos em casa, escola e clínica</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="container section-spacing">
          <h2 className="section-title">A base técnica do nosso material</h2>
          <p style={{ marginBottom: '1.5rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Este protocolo cruza os princípios da <strong>Análise do Comportamento Aplicada (ABA)</strong> com critérios de avaliação funcional usados para diferenciar origem sensorial de origem comportamental — a mesma lógica usada em avaliações como o VB-MAPP, adaptada para uso prático no dia a dia.
          </p>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Não são orientações genéricas. É um protocolo de decisão: antes de qualquer intervenção, você identifica a origem real do comportamento — e só então escolhe a estratégia certa.
          </p>

          <div className="quote-block">
            "Um comportamento sem função identificada é apenas um sintoma tratado no escuro."
          </div>
        </section>

        <section className="container section-spacing">
          <h2 className="section-title">Para quem é?</h2>
          <div className="features-grid">
            <div className="card">
              <h3 className="feature-title" style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Pais e cuidadores</h3>
              <p className="feature-desc">De crianças de 4 a 10 anos com TEA nível 2 de suporte que também apresentam oposição, desafio ou traços de TOD — cansados de aplicar técnicas de autismo que "não funcionam" porque, naquele momento, o comportamento não era sensorial.</p>
            </div>
            <div className="card">
              <h3 className="feature-title" style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Profissionais</h3>
              <p className="feature-desc">Professores de AEE, acompanhantes terapêuticos e terapeutas que precisam de uma linguagem comum com a família para não perder consistência entre sessão, escola e casa.</p>
            </div>
          </div>
        </section>

        <section className="container section-spacing">
          <h2 className="section-title">Adquira hoje e leve 4 bônus exclusivos</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">🎁</div>
              <h3 className="feature-title">Bônus 1 — Protocolo de Triagem</h3>
              <p className="feature-desc">O checklist rápido de diferenciação, para usar em qualquer crise, a qualquer momento</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🎁</div>
              <h3 className="feature-title">Bônus 2 — Ficha de Registro de Crises</h3>
              <p className="feature-desc">Rastreie frequência, gatilho e duração — útil também para levar ao terapeuta ou psiquiatra</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🎁</div>
              <h3 className="feature-title">Bônus 3 — Cartões de Comunicação Visual</h3>
              <p className="feature-desc">Apoio para momentos de comunicação não-verbal ou sobrecarga sensorial</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🎁</div>
              <h3 className="feature-title">Bônus 4 — Checklist Casa-Escola-Clínica</h3>
              <p className="feature-desc">Para alinhar a mesma estratégia em todos os ambientes da criança</p>
            </div>
          </div>
        </section>

        <section className="container section-spacing">
          <div className="price-card">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Preço promocional de lançamento</h2>
            <div className="price-old">De R$ 97,00</div>
            <div className="price-new">
              <span className="price-currency">R$</span>47,90
            </div>
            <a href="#" className="cta-button">CLIQUE AQUI E BAIXE AGORA</a>
            <p className="guarantee-text">Acesso imediato. Garantia de 7 dias.</p>
          </div>
        </section>

        <section className="container section-spacing">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="stars">★ ★ ★ ★ ★</div>
            <p style={{ fontWeight: '600' }}>4.8/5 · 61 avaliações</p>
            <a href="#" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>Escreva uma avaliação</a>
          </div>

          <div className="testimonials-grid">
            <div className="card testimonial-card">
              <div className="testimonial-header">
                <div className="reviewer-info">
                  <strong>CS</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>— Camila S.</span>
                </div>
                <div className="verified-badge">✔️ Verificada</div>
              </div>
              <div className="stars" style={{ fontSize: '1rem', marginBottom: '1rem' }}>★ ★ ★ ★ ★</div>
              <p className="testimonial-text">"Eu vivia confundindo crise sensorial com birra de propósito. O protocolo de triagem mudou completamente como eu ajo nos primeiros segundos."</p>
            </div>

            <div className="card testimonial-card">
              <div className="testimonial-header">
                <div className="reviewer-info">
                  <strong>RF</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>— Rafael F.</span>
                </div>
                <div className="verified-badge">✔️ Verificado</div>
              </div>
              <div className="stars" style={{ fontSize: '1rem', marginBottom: '1rem' }}>★ ★ ★ ★ ★</div>
              <p className="testimonial-text">"Sou professor de AEE, uso com 3 famílias diferentes. Finalmente um material que fala a mesma língua da terapia ABA."</p>
            </div>

            <div className="card testimonial-card">
              <div className="testimonial-header">
                <div className="reviewer-info">
                  <strong>MP</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>— Marcela P.</span>
                </div>
                <div className="verified-badge">✔️ Verificada</div>
              </div>
              <div className="stars" style={{ fontSize: '1rem', marginBottom: '1rem' }}>★ ★ ★ ★ ★</div>
              <p className="testimonial-text">"Os scripts de crise salvaram meu domingo mais difícil em meses. Simples, direto, sem enrolação."</p>
            </div>

            <div className="card testimonial-card">
              <div className="testimonial-header">
                <div className="reviewer-info">
                  <strong>LT</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>— Luana T.</span>
                </div>
                <div className="verified-badge">✔️ Verificada</div>
              </div>
              <div className="stars" style={{ fontSize: '1rem', marginBottom: '1rem' }}>★ ★ ★ ★ ★</div>
              <p className="testimonial-text">"Uso com meu paciente como ferramenta de padronização entre casa e clínica. Os pais entenderam de cara."</p>
            </div>
          </div>
        </section>

        <section className="container section-spacing">
          <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--bg-secondary)', border: 'none' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Garantia incondicional</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)' }}>
              Se nas próximas 7 crises você não sentir mais clareza e mais controle sobre como agir, envie um e-mail e devolvemos cada centavo, sem perguntas.
            </p>
            <a href="#" className="cta-button cta-secondary" style={{ padding: '1.25rem 4rem' }}>BAIXAR AGORA</a>
          </div>
        </section>

        <footer className="footer container">
          <p style={{ marginBottom: '0.5rem' }}>Manejo TEA + TOD ©️ Copyright — Todos os direitos reservados.</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', maxWidth: '600px', margin: '0 auto' }}>
            Este material é um apoio complementar e não substitui acompanhamento médico, psicológico ou terapêutico profissional.
          </p>
        </footer>
      </main>
    </div>
  );
}
