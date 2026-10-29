import type { Metadata } from "next";
import s from "./dinamic.module.css";

export const metadata: Metadata = {
  title: "Kit Amigo Secreto Sem Climão | +10 jogos e dinâmicas para imprimir",
  description:
    "O kit pronto para imprimir com +10 jogos e dinâmicas para o amigo secreto da família ou da empresa: bingo, amigo secreto roubado, mímica, certificados e mais.",
};

// TODO: troque pelo link real do checkout
const CHECKOUT_URL = "#oferta";

function Cta({ label = "QUERO MEU KIT AGORA", id }: { label?: string; id: string }) {
  return (
    <div className={s.ctaWrap}>
      <a id={id} href={CHECKOUT_URL} className={s.cta}>
        {label}
      </a>
      <p className={s.ctaNote}>🔒 Acesso imediato · 7 dias de garantia</p>
    </div>
  );
}

const pages = [
  { t: "Amigo Secreto Roubado", e: "🎁" },
  { t: "Cartas de Reviravolta", e: "🔄" },
  { t: "Dado do Presente", e: "🎲" },
  { t: "História do Direita e Esquerda", e: "↔️" },
  { t: "Bingo com 30 cartelas", e: "🔢" },
  { t: "Quem é mais provável?", e: "🤔" },
  { t: "Mímica natalina", e: "🎭" },
  { t: "Certificados divertidos", e: "🏆" },
];

const includes = [
  "Organização: convites, fichas de sorteio e lista de desejos",
  "Amigo Secreto Roubado com 12 Cartas de Reviravolta",
  "Dado do Presente para recortar e montar",
  "2 histórias de direita e esquerda (família e firma)",
  "Bingo de Natal com 30 cartelas diferentes",
  "Encontre alguém que… o quebra-gelo perfeito",
  "24 cartas de Quem é mais provável?",
  "60 cartas de mímica em 3 níveis",
];

const benefits = [
  ["Festa animada do começo ao fim", "Um roteiro de 1h30 com jogo para a chegada, para o meio e para o encerramento. Ninguém fica mexendo no celular."],
  ["Quebra-gelo de verdade", "Até a equipe que só se fala por e-mail e o primo que você vê uma vez por ano entram na brincadeira."],
  ["Pronto em 10 minutos", "Regras explicadas, cartas prontas e materiais para recortar. É só imprimir e jogar."],
  ["Você vira o organizador nota 10", "Aquele que todo mundo comenta no grupo no dia seguinte: “quem organizou essa festa?”"],
];

const timeline = [
  ["Chegada", "15 min", "Encontre alguém que… para quebrar o gelo enquanto o pessoal chega"],
  ["Aquecimento", "20 min", "Bingo de Natal, em que todo mundo joga junto, até quem é tímido"],
  ["Agito", "20 min", "Mímica ou Desafio de 1 minuto, em times"],
  ["Troca", "30 min", "Cartas de Pistas e Amigo Secreto Roubado"],
  ["Encerramento", "10 min", "Certificados, risada e foto boa"],
];

const bonuses = [
  { n: 1, t: "Mensagens de Natal prontas", d: "42 mensagens para copiar no WhatsApp ou escrever no cartão: família, amigos, equipe, clientes e Ano Novo.", v: "R$ 17", e: "💌" },
  { n: 2, t: "Guia de presentes do amigo secreto", d: "Ideias até R$ 30, R$ 50 e R$ 100, por perfil e de faça você mesmo. Acaba com o “não sei o que dar”.", v: "R$ 17", e: "🛍️" },
  { n: 3, t: "Kit Réveillon Sem Climão", d: "Retrospectiva 2026, previsões para 2027, metas, carta para o futuro e pote da gratidão.", v: "R$ 27", e: "🥂" },
];

const faq = [
  ["Preciso imprimir colorido?", "Não. O material foi pensado para ficar bonito colorido, mas funciona perfeitamente em impressão preto e branco, em casa ou na gráfica."],
  ["Funciona para quantas pessoas?", "Para grupos pequenos (5 pessoas) até grandes confraternizações (50+). O bingo tem 30 cartelas diferentes e os jogos em times se adaptam a qualquer tamanho."],
  ["Serve para a festa da empresa e para a família?", "Sim! Os materiais que mudam de um contexto para o outro, como as histórias de direita e esquerda e os certificados, vêm em duas versões: família e firma."],
  ["Qual o formato do material?", "É um PDF de 60 páginas em tamanho A4, pronto para imprimir e recortar. Você recebe o acesso no seu e-mail logo após a compra."],
  ["Dá tempo de usar este ano?", "Dá sim. O acesso é imediato e tudo fica pronto em uns 10 minutos: é só imprimir, recortar e jogar."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia incondicional. Peça o reembolso e devolvemos 100% do valor, sem perguntas."],
];

export default function DinamicPage() {
  return (
    <main className={s.page}>
      <div className={s.snow} aria-hidden="true" />

      {/* HERO */}
      <header className={s.hero}>
        <div className={s.container}>
          <span className={s.eyebrow}>Para quem vai organizar o amigo secreto da família ou da empresa</span>
          <h1 className={s.h1}>
            <span className={s.gold}>+10 jogos e dinâmicas</span> para o seu amigo secreto virar a melhor festa do ano
          </h1>
          <p className={s.lead}>
            O kit pronto para imprimir que anima a confraternização do começo ao fim, sem você precisar inventar nada.
          </p>

          <div className={s.mockup} role="img" aria-label="Kit Amigo Secreto Sem Climão: capa, cartela de bingo e certificado">
            <div className={`${s.sheet} ${s.sheetLeft}`}>
              <b>BINGO</b>
              <div className={s.bingoGrid}>
                {[7, 12, 33, 41, 58, 3, 19, "★", 44, 60, 9, 25, 37, 50, 71].map((n, i) => <span key={i}>{n}</span>)}
              </div>
            </div>
            <div className={`${s.sheet} ${s.sheetCenter}`}>
              <span className={s.sheetEmoji}>🎄</span>
              <b>Kit Amigo Secreto</b>
              <em>Sem Climão</em>
              <small>+10 jogos e dinâmicas</small>
            </div>
            <div className={`${s.sheet} ${s.sheetRight}`}>
              <span className={s.sheetEmoji}>🏆</span>
              <b>Certificado</b>
              <small>Rei do Pavê</small>
            </div>
          </div>

          <div className={s.alert}>
            <strong>⚠️ AVISO IMPORTANTE:</strong> se você gosta daquele amigo secreto em que todo mundo troca presente em
            10 minutos, come um salgadinho e vai embora, este kit não é para você. Aqui tem roubo de presente, bingo
            valendo bombom e certificado de “Rei do Pavê”.
          </div>
          <Cta id="cta-hero" />
        </div>
      </header>

      {/* INSIDE */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.h2}>Veja como é o material por dentro:</h2>
          <p className={s.sub}>Da organização do sorteio aos certificados do fim da festa. São 60 páginas, tudo pronto para imprimir e recortar.</p>
          <div className={s.pagesGrid}>
            {pages.map((p) => (
              <figure key={p.t} className={s.pageCard}>
                <div className={s.pageThumb} role="img" aria-label={`Página do kit: ${p.t}`}>
                  <span>{p.e}</span>
                </div>
                <figcaption>{p.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className={`${s.section} ${s.alt}`}>
        <div className={s.container}>
          <h2 className={s.h2}>O que vem no kit</h2>
          <ul className={s.checkList}>
            {includes.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <p className={s.more}>
            <strong>E mais:</strong> quiz de Natal com gabarito, Cartas de Pistas para a revelação, 10 Desafios de 1 minuto,
            20 certificados divertidos e etiquetas de presente.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.h2}>Tudo que você vai conseguir com esse kit:</h2>
          <div className={s.benefits}>
            {benefits.map(([t, d], i) => (
              <article key={t} className={s.benefit}>
                <span className={s.num}>{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <div className={s.note}>
            <strong>Importante:</strong> você não precisa usar tudo numa festa só. Escolha 3 ou 4 atividades conforme o
            tamanho do grupo. O kit serve para a família, para a empresa e para a turma da escola. Os materiais que mudam de
            uma para a outra vêm em duas versões.
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.container}>
          <h2 className={s.h2}>Por que o seu amigo secreto vai ser diferente</h2>
          <p className={s.sub}>Festa morna acontece quando ninguém planejou o que fazer depois da troca de presentes. O kit já traz o roteiro pronto:</p>
          <ol className={s.timeline}>
            {timeline.map(([t, m, d]) => (
              <li key={t}>
                <div className={s.tlHead}><b>{t}</b><span>{m}</span></div>
                <p>{d}</p>
              </li>
            ))}
          </ol>
          <div className={s.stats}>
            {[["60", "páginas prontas"], ["10", "jogos e dinâmicas"], ["30", "cartelas de bingo"], ["20", "certificados"]].map(([n, l]) => (
              <div key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
          <p className={s.quote}>“Quem organizou essa festa?” <span className={s.gold}>Você.</span></p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.h2}>Para quem é este kit</h2>
          <div className={s.audience}>
            <article className={s.audCard}>
              <span className={s.audIcon}>👨‍👩‍👧‍👦</span>
              <h3>Para a família</h3>
              <p>Para a mãe, a tia ou o primo que sempre acaba organizando o Natal.</p>
              <ul className={s.checkList}>
                <li>Natal em família sem ninguém no celular</li>
                <li>Jogos para crianças, adultos e avós</li>
                <li>Certificados como “Rei do Pavê”</li>
              </ul>
            </article>
            <article className={s.audCard}>
              <span className={s.audIcon}>🏢</span>
              <h3>Para a empresa e a escola</h3>
              <p>Para o líder, o RH ou a professora que ficou responsável pela confraternização.</p>
              <ul className={s.checkList}>
                <li>Quebra-gelo para equipes que mal se falam</li>
                <li>Quiz e certificados da firma</li>
                <li>Mensagens prontas para clientes</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className={`${s.section} ${s.alt}`}>
        <div className={s.container}>
          <h2 className={s.h2}>Adquira hoje e leve <span className={s.red}>3 bônus exclusivos:</span></h2>
          <div className={s.bonusGrid}>
            {bonuses.map((b) => (
              <article key={b.n} className={s.bonus}>
                <div className={s.bonusCover} role="img" aria-label={`Capa do Bônus ${b.n}: ${b.t}`}>
                  <span>{b.e}</span>
                </div>
                <span className={s.tag}>Bônus {b.n}</span>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
                <p className={s.bonusVal}>Valor: <s>{b.v}</s> <b>GRÁTIS</b></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.h2}>Quem já usou, aprovou:</h2>
          <div className={s.reviews}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={s.review}>Cole aqui o print de uma avaliação real</div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className={`${s.section} ${s.alt}`}>
        <div className={`${s.container} ${s.guarantee}`}>
          <div className={s.seal}><strong>7</strong><span>DIAS</span></div>
          <div>
            <h2 className={s.h2} style={{ textAlign: "left" }}>Garantia incondicional de 7 dias</h2>
            <p>
              Baixe, imprima e use. Se por qualquer motivo não gostar, peça o reembolso em até 7 dias e devolvemos 100% do
              valor. Sem perguntas e sem burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className={`${s.section} ${s.dark}`}>
        <div className={s.container}>
          <div className={s.offer}>
            <span className={s.ribbon}>🎅 Oferta de Natal</span>
            <h2 className={s.h2}>Leve tudo isso hoje:</h2>
            <ul className={s.priceList}>
              <li><span>Kit Amigo Secreto Sem Climão</span><s>R$ 47</s></li>
              <li><span>Bônus 1: Mensagens de Natal prontas</span><s>R$ 17</s></li>
              <li><span>Bônus 2: Guia de presentes</span><s>R$ 17</s></li>
              <li><span>Bônus 3: Kit Réveillon Sem Climão</span><s>R$ 27</s></li>
              <li className={s.total}><span>Total</span><s>R$ 108</s></li>
            </ul>
            <p className={s.from}>De <s>R$ 108,00</s> por apenas</p>
            <p className={s.price}>R$19,90</p>
            <p className={s.payNote}>à vista no Pix ou parcelado no cartão</p>
            <a id="cta-offer" href={CHECKOUT_URL} className={`${s.cta} ${s.ctaBig}`}>CLIQUE AQUI E GARANTA AGORA</a>
            <p className={s.ctaNote}>Acesso imediato no seu e-mail · 7 dias de garantia</p>
            <div className={s.trust}>
              <span>🔒 Compra segura</span><span>⚡ Acesso imediato</span><span>🖨️ PDF pronto para imprimir</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.h2}>Perguntas frequentes</h2>
          <div className={s.faq}>
            {faq.map(([q, a]) => (
              <details key={q} name="faq">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <Cta id="cta-faq" />
        </div>
      </section>

      <footer className={s.footer}>Amigo Secreto Sem Climão © 2026 · Todos os direitos reservados</footer>
    </main>
  );
}
