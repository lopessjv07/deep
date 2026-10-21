import './kgr.css';
import {
  ScanSearch, NotebookPen, Wheat, Milk, BadgeDollarSign,
  PencilLine, SearchCheck, Handshake, Landmark,
  TriangleAlert, Smartphone, Printer, Tractor, ClipboardList, Gift, Zap, ShieldCheck,
} from 'lucide-react';

const CHECKOUT_URL = '#oferta'; // [trocar pelo link do checkout]

const materiais = [
  { icon: ScanSearch, nome: 'Raio-X da Roça', desc: 'Descobrir o custo real de cada cultura ou criação: semente, adubo, defensivo, diesel, diária, frete' },
  { icon: NotebookPen, nome: 'Caderno de Entradas e Saídas', desc: 'Anotar toda semana o que vendeu e o que gastou, sem precisar entender de contabilidade' },
  { icon: Wheat, nome: 'Lucro por Safra', desc: 'Ver quanto cada cultura deu de lucro ou prejuízo e decidir o que plantar na próxima' },
  { icon: Milk, nome: 'Controle do Rebanho', desc: 'Vacinas, partos, pesagem e produção de leite de gado, cabra e ovelha' },
  { icon: BadgeDollarSign, nome: 'Preço Justo', desc: 'Calcular o preço mínimo de venda para não aceitar qualquer oferta do atravessador' },
];

const beneficios = [
  { icon: PencilLine, t: 'Lucro na ponta do lápis', d: 'Descubra em 10 minutos se cada cultura ou criação está dando lucro ou prejuízo — antes de plantar de novo.' },
  { icon: SearchCheck, t: 'Fim do dinheiro que some', d: 'Veja exatamente onde vai cada real: o gasto escondido com diesel, frete e diária que come o seu lucro.' },
  { icon: Handshake, t: 'Força para negociar', d: 'Saiba seu preço mínimo de venda e pare de aceitar qualquer oferta do atravessador.' },
  { icon: Landmark, t: 'Números em ordem para o banco', d: 'Tenha custos e receitas organizados para apresentar na hora de pedir crédito ou financiamento.' },
];

const bonus = [
  { t: 'Calendário de Plantio por Região', d: 'Quando plantar cada cultura no Nordeste, Cerrado, Sudeste e Sul, pela época das chuvas.' },
  { t: 'Guia Pronaf Passo a Passo', d: 'Documentos, onde ir e como se organizar para pedir o crédito.' },
  { t: 'Como Vender para a Prefeitura e o Governo', d: 'O caminho para entrar no PNAE (merenda escolar) e no PAA sem atravessador.' },
  { t: 'Videoaulas de Preenchimento', d: 'Vídeos curtos mostrando como preencher cada material pelo celular.' },
];

const faq = [
  { q: 'Preciso saber mexer em computador?', a: 'Não. Dá para usar no celular ou imprimir e preencher à mão. As videoaulas mostram cada passo.' },
  { q: 'Serve para a minha cultura?', a: 'Sim. Funciona para lavoura (milho, feijão, mandioca, soja, hortaliças, frutas) e criação (gado, cabra, ovelha, galinha).' },
  { q: 'Serve para quem tem pouca terra?', a: 'Sim. O kit foi pensado para pequeno e médio produtor.' },
  { q: 'Como recebo?', a: 'Na hora, no seu e-mail e WhatsApp, logo após o pagamento.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia e recebe todo o dinheiro de volta.' },
];

const depoimentos = [
  { nome: 'Marcos Silveira, Unaí/MG', prod: 'Feijão e Milho', l1: 'Antes', l2: 'Depois', antes: 'Achava que o feijão dava lucro, mas faltava conta.', depois: 'Descobri que perdia R$ 4.200 só em frete não calculado. Ajustei a rota e salvei 14% de margem.' },
  { nome: 'Juliana Becker, Passo Fundo/RS', prod: 'Soja e Trigo', l1: 'Antes', l2: 'Depois', antes: 'Anotava tudo em caderno sem saber o custo por hectare.', depois: 'Cortei R$ 18.500 em defensivos mal aplicados e fechei a safra com 22% de margem real.' },
  { nome: 'Carlos Eduardo, Técnico Agrícola', prod: 'Coop. Vale do Paranapanema/SP', l1: 'Como organizava', l2: 'Resultado', antes: 'Gastava semanas tentando decifrar cadernos e planilhas de 30 produtores.', depois: 'Fecho o diagnóstico de 34 famílias em 3 dias e já reduzimos 11% do custo operacional do grupo.' },
];

function Cta({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <a href={CHECKOUT_URL} id={id} className="kgr-btn">
      {children}
    </a>
  );
}

export default function KgrPage() {
  return (
    <div className="kgr">
      <main>
        {/* 1. Topo */}
        <section className="kgr-hero">
          <div className="kgr-wrap">
            <h1>
              <span className="kgr-hl">Kit Gestão da Roça:</span> descubra quanto sua roça realmente lucra
            </h1>
            <p className="kgr-sub">
              O método simples para saber, em <strong>10 minutos por semana</strong>, para onde seu dinheiro está indo — e parar de
              trabalhar o ano inteiro para não sobrar nada no fim da safra.
            </p>
            {/* 2. Aviso */}
            <div className="kgr-alert">
              <TriangleAlert className="kgr-alert-ic" size={28} />
              <p>
                <strong>AVISO IMPORTANTE:</strong> Se você prefere continuar fazendo as contas de cabeça e torcer para sobrar dinheiro
                no fim da safra, este material não é para você. Ele pede 10 minutos por semana para anotar o que entra e o que sai — e
                isso muda como você decide o que plantar, por quanto vender e onde cortar gasto, a partir desta safra.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Material por dentro */}
        <section className="kgr-sec">
          <div className="kgr-wrap">
            <h2>Veja o material por dentro</h2>
            <p className="kgr-lead">Da primeira anotação ao lucro de cada safra na ponta do lápis.</p>
            <ol className="kgr-list">
              {materiais.map((m, i) => (
                <li key={m.nome} className="kgr-card">
                  <div className="kgr-num">{i + 1}</div>
                  <div>
                    <h3 className="kgr-ih">
                      <m.icon size={22} /> {m.nome}
                    </h3>
                    <p>{m.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="kgr-carousel" aria-label="Prévia das páginas do kit">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="kgr-slide">
                  <img
                    src={`/imagesKgr/k${n}.jpeg`}
                    alt={`Página ${n} do Kit Gestão da Roça`}
                    width={1131}
                    height={1600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <p className="kgr-note">
              <Smartphone size={20} className="kgr-inline" /> + <Printer size={20} className="kgr-inline" /> Cada material vem em duas versões: <strong>planilha</strong> (celular ou computador) e <strong>PDF para imprimir</strong>.
            </p>
          </div>
        </section>

        {/* 4. Base */}
        <section className="kgr-sec kgr-alt">
          <div className="kgr-wrap kgr-narrow">
            <h2>A base do material</h2>
            <p>
              O kit segue a mesma lógica de <strong>cálculo de custo de produção usada por técnicos de assistência rural</strong>,
              simplificada para quem nunca estudou contabilidade. Tudo em linguagem de roça: saco, hectare, tarefa, cabeça, litro.
            </p>
            <p className="kgr-muted">
              Não é teoria nem curso longo. É um sistema de decisão: antes de plantar, vender ou comprar insumo, você olha o número e
              decide com segurança.
            </p>
            <blockquote className="kgr-quote">
              “Quem não anota, não sabe se ganha. E quem não sabe se ganha, perde sem perceber.”
            </blockquote>
          </div>
        </section>

        {/* 5. Para quem é */}
        <section className="kgr-sec">
          <div className="kgr-wrap">
            <h2>Para quem é?</h2>
            <div className="kgr-grid2">
              <div className="kgr-card kgr-col">
                <h3 className="kgr-ih"><Tractor size={24} /> Pequeno e médio produtor</h3>
                <p>
                  Agricultor familiar, sitiante ou produtor de lavoura e criação que trabalha o ano inteiro e no fim não sabe dizer se
                  teve lucro. Quem vende para atravessador, feira, cooperativa ou prefeitura.
                </p>
              </div>
              <div className="kgr-card kgr-col">
                <h3 className="kgr-ih"><ClipboardList size={24} /> Profissionais do campo</h3>
                <p>
                  Técnicos agrícolas, extensionistas, associações e cooperativas que precisam de uma ferramenta simples para organizar
                  os números dos produtores que acompanham.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Benefícios */}
        <section className="kgr-sec kgr-alt">
          <div className="kgr-wrap kgr-wide">
            <h2>O que você vai conseguir</h2>
            <br />
            <div className="kgr-grid4">
              {beneficios.map((b) => (
                <div key={b.t} className="kgr-card kgr-col">
                  <div className="kgr-ic"><b.icon size={26} /></div>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Responsabilidade */}
        <section className="kgr-sec">
          <div className="kgr-wrap kgr-narrow">
            <div className="kgr-disclaimer">
              <p>
                <strong>Importante:</strong> Este material é uma ferramenta de organização e apoio à decisão. Ele não substitui
                contador, técnico agrícola ou agrônomo, e não garante aprovação de crédito — ele te dá clareza dos seus números para
                decidir melhor no dia a dia.
              </p>
              <p className="kgr-muted">
                Se você é técnico, extensionista ou trabalha em cooperativa, o kit vira uma ferramenta padrão para organizar os números
                de vários produtores do mesmo jeito.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Bônus */}
        <section className="kgr-sec kgr-alt">
          <div className="kgr-wrap kgr-wide">
            <h2>
              Adquira hoje e leve <span className="kgr-hl">4 bônus exclusivos</span>
            </h2>
            <br />
            <div className="kgr-grid4">
              {bonus.map((b, i) => (
                <div key={b.t} className="kgr-card kgr-col kgr-bonus">
                  <span className="kgr-tag">BÔNUS {i + 1}</span>
                  <h3 className="kgr-ih"><Gift size={22} /> {b.t}</h3>
                  <p>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Oferta */}
        <section className="kgr-sec" id="oferta">
          <div className="kgr-wrap kgr-narrow">
            <div className="kgr-offer">
              <div className="kgr-seal">Acesso vitalício · Pagamento único</div>
              <p className="kgr-from">
                De <s>R$ 97,00</s> por
              </p>
              <p className="kgr-price">R$ 37,90</p>
              <p className="kgr-install">ou 5x de R$ 7,58</p>
              <Cta id="cta-oferta">QUERO MEU KIT AGORA</Cta>
              <p className="kgr-small">
                <Zap size={16} className="kgr-inline" /> Acesso imediato pelo celular.{' '}
                <ShieldCheck size={16} className="kgr-inline" /> Garantia de 7 dias.
              </p>
            </div>
          </div>
        </section>

        {/* 10. Depoimentos */}
        <section className="kgr-sec kgr-alt">
          <div className="kgr-wrap">
            <h2>Quem já usa</h2>
            <div className="kgr-grid3">
              {depoimentos.map((d, i) => (
                <figure key={i} className="kgr-card kgr-col kgr-testi">
                  <div className="kgr-stars">★★★★★</div>
                  <blockquote>
                    <p><em>{d.l1}:</em> “{d.antes}”</p>
                    <p>
                      <em>{d.l2}:</em> <strong>“{d.depois}”</strong>
                    </p>
                  </blockquote>
                  <figcaption>
                    <strong>{d.nome}</strong>
                    <span>{d.prod}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Garantia */}
        <section className="kgr-sec">
          <div className="kgr-wrap kgr-narrow">
            <div className="kgr-guarantee">
              <div className="kgr-badge">
                <span>7</span>DIAS
              </div>
              <div>
                <h2>Garantia incondicional de 7 dias</h2>
                <p>
                  Preencha o Raio-X da sua roça. Se você não enxergar com clareza onde está seu lucro e para onde vai seu dinheiro,
                  mande uma mensagem e devolvemos cada centavo, sem perguntas.
                </p>
              </div>
            </div>
            <div className="kgr-center">
              <Cta id="cta-garantia">BAIXAR MEU KIT AGORA</Cta>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="kgr-sec kgr-alt">
          <div className="kgr-wrap kgr-narrow">
            <h2>Perguntas frequentes</h2>
            <div className="kgr-faq">
              {faq.map((f, i) => (
                <details key={f.q} id={`faq-${i + 1}`}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 13. Rodapé */}
      <footer className="kgr-footer">
        <p>Kit Gestão da Roça © Todos os direitos reservados.</p>
        <p>
          Este material é uma ferramenta de organização e não substitui orientação de contador, técnico agrícola ou agrônomo.
        </p>
      </footer>
    </div>
  );
}
