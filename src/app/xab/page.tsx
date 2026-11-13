"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";
import "./xab.css";

const CHECKOUT_URL = "https://pay.kiwify.com.br/xcahy6n";

export default function XabPage() {
  const [today, setToday] = useState("13/11/2026");

  useEffect(() => {
    const now = new Date();
    const d = String(now.getDate()).padStart(2, "0");
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const y = now.getFullYear();
    setToday(`${d}/${m}/${y}`);
  }, []);

  const scrollToPlanos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Script
        id="packpronto-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: "window.__pvHeadInjected = 1;",
        }}
      />
      <Script
        id="packpronto-tracking"
        src="https://site.packpronto.com.br/t/p.js?w=387eea4d-2257-472f-b4ed-f4104c95473b&o=f1f979a7-f4af-4dde-88d6-caf925e688c9"
        data-offer="f1f979a7-f4af-4dde-88d6-caf925e688c9"
        strategy="afterInteractive"
      />

      <div id="root">
        <div className="min-h-screen">
          <div
            style={
              {
                "--pv-primary": "#1F2229",
                "--pv-accent": "#B25C18",
                "--pv-bg": "#FFFDF8",
                "--pv-text": "#181818",
                "--pv-text-muted": "#4A4A4A",
                "--pv-cream": "#FFF9EB",
                "--pv-cream-soft": "#F7F2ED",
                "--pv-tan": "#E6DCCB",
                "--pv-pink": "#FFD2EA",
                "--pv-mint": "#C7FFF3",
                "--pv-mint-border": "#BFE7CF",
                "--pv-blue-bg": "#EFF8FB",
                "--pv-success": "#178754",
                "--pv-gold": "#FFD81C",
                "--pv-danger": "#F22424",
                "--pv-radius": "12px",
                "--pv-container": "1200px",
                "--pv-font-heading": "'Oswald', 'Inter', system-ui, -apple-system, sans-serif",
                "--pv-font-body": "'Inter', system-ui, -apple-system, sans-serif",
                "--pv-heading-weight": "700",
                "--pv-heading-tracking": "-0.03em",
                backgroundColor: "var(--pv-bg)",
                color: "var(--pv-text)",
                fontFamily: "var(--pv-font-body)",
                fontSize: "18px",
                lineHeight: "1.6",
                "--pv-accent-claro": "#974E14",
                "--pv-accent-escuro": "#BF7940",
                "--pv-success-claro": "#136F45",
                "--pv-success-escuro": "#3A996E",
                "--pv-accent-txt": "#974E14",
                "--pv-success-txt": "#136F45",
              } as React.CSSProperties
            }
            className="w-full overflow-x-hidden"
            data-pv-mov="rico"
            data-pv-hero="cartaz"
            data-pv-borda="diagonal"
            data-pv-cartao="elevado"
            data-pv-fx="gradiente_animado revelar_palavras marquee brilho cta_fixo"
            data-pv-caixa="maiusculas"
          >
            {/* ======================================================================
                1. BARRA SUPERIOR FIXA
            ====================================================================== */}
            <header className="sticky top-0 z-50 w-full shadow-md">
              <div
                className="w-full text-center py-2.5 px-4 font-bold tracking-wide text-sm sm:text-base"
                style={{ background: "var(--pv-accent)", color: "#fff" }}
              >
                <span>⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <span className="underline">{today}</span></span>
              </div>
            </header>

            {/* ======================================================================
                2. HERO
            ====================================================================== */}
            <section
              data-pv-sup="escura"
              style={{
                background: "var(--pv-primary)",
                color: "#fff",
                transition: "opacity 600ms ease, transform 600ms ease",
              }}
              className="w-full px-4 pt-10 pb-16 sm:pt-14 sm:pb-20 pv-hero pv-hero-escuro"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto">
                <div className="pv-hero-deco" aria-hidden="true">
                  <span className="pv-gradiente"></span>
                </div>

                <div className="pv-hero-conteudo text-center max-w-5xl mx-auto">
                  <div
                    className="inline-block text-sm sm:text-base font-bold px-6 py-2.5 rounded-full mt-6 sm:mt-12 mb-6 sm:mb-8 shadow-md"
                    style={{ background: "var(--pv-cream)", color: "var(--pv-primary)" }}
                  >
                    🔒 Compra 100% Segura e Protegida
                  </div>

                  <h1
                    className="text-[28px] sm:text-[46px] lg:text-[54px] mt-0 font-extrabold uppercase"
                    style={{
                      fontFamily: "var(--pv-font-heading)",
                      letterSpacing: "-0.02em",
                      lineHeight: "1.1",
                      color: "#fff",
                    }}
                  >
                    CARTILHAS VISUAIS DE VENTILAÇÃO MECÂNICA + PLANTÃO SEM MEDO
                  </h1>

                  <p
                    className="pv-hero-sub text-[18px] sm:text-[22px] lg:text-[24px] max-w-3xl mx-auto mt-4 font-medium"
                    style={{ color: "rgba(255,255,255,0.92)", lineHeight: "1.4" }}
                  >
                    Entenda os modos, leia as curvas e saiba o que fazer quando o ventilador apitar.
                  </p>

                  <div className="my-6">
                    <img
                      src="https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/hero-mockup_hero-1793377125632.webp"
                      width="900"
                      height="900"
                      alt="Mockup Cartilhas Visuais de Ventilação Mecânica"
                      className="max-h-[480px] mx-auto object-contain rounded-[var(--pv-radius)] shadow-2xl"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>

                  <p
                    className="pv-hero-paragrafo text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mt-4"
                    style={{ color: "rgba(255,255,255,0.95)" }}
                  >
                    Você vai receber cartilhas visuais em PDF com fluxogramas, ilustrações e checklists de ventilação mecânica. Revise modos ventilatórios, curvas, gasometria, desmame e alarmes de forma rápida e organizada, sem precisar reler livros e apostilas extensas antes do estágio, da residência ou do plantão.
                  </p>

                  <div className="pv-hero-lista mt-8 flex justify-center">
                    <ul className="text-left space-y-3 max-w-xl mx-auto">
                      {[
                        "Modos ventilatórios explicados em fluxogramas",
                        "Leitura visual das curvas de pressão, fluxo e volume",
                        "Checklists para revisar antes do plantão",
                        "Guia dos alarmes mais comuns do ventilador",
                        "Pronto para imprimir ou consultar no celular",
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-center font-semibold text-base sm:text-lg text-white">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--pv-accent)", color: "#fff" }}>
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <a
                      href="#planos"
                      onClick={scrollToPlanos}
                      className="px-8 py-4 sm:px-10 sm:py-5 text-[18px] sm:text-[20px] font-bold inline-block text-center rounded-full transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98] pv-cta uppercase cursor-pointer"
                      style={{
                        background: "var(--pv-accent)",
                        color: "#fff",
                        boxShadow: "0 14px 30px -10px color-mix(in srgb, var(--pv-accent) 60%, transparent)",
                      }}
                    >
                      QUERO RECEBER AS CARTILHAS AGORA
                    </a>
                    <p className="mt-3 text-sm sm:text-base font-medium opacity-90 text-white">
                      📲 Você recebe tudo na hora, direto no seu e-mail
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ======================================================================
                3. FAIXA ROLANTE (MARQUEE)
            ====================================================================== */}
            <div className="pv-marquee py-3" style={{ background: "var(--pv-cream)", color: "var(--pv-text)" }}>
              <div className="pv-marquee-trilho">
                {[0, 1].map((copyIdx) => (
                  <div key={copyIdx} className="flex">
                    {[
                      "Modos ventilatórios explicados em fluxogramas",
                      "Leitura visual das curvas de pressão, fluxo e volume",
                      "Checklists para revisar antes do plantão",
                      "Guia dos alarmes mais comuns do ventilador",
                      "Pronto para imprimir ou consultar no celular",
                    ].map((benefit, bIdx) => (
                      <span key={bIdx} className="pv-marquee-item font-bold text-base sm:text-lg uppercase">
                        {benefit}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ======================================================================
                4. GALERIA
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-bg)", color: "var(--pv-text)" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto text-center">
                <h2
                  className="text-[32px] sm:text-[44px] lg:text-[50px] font-black uppercase"
                  style={{
                    fontFamily: "var(--pv-font-heading)",
                    lineHeight: "1.1",
                    color: "var(--pv-text)",
                  }}
                >
                  VEJA AS CARTILHAS VISUAIS QUE VOCÊ VAI RECEBER
                </h2>
                <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto mt-3">
                  Conteúdo organizado de forma visual para acelerar seu aprendizado e consulta rápida à beira do leito.
                </p>

                {/* Carrossel 1: Páginas internas */}
                <div className="overflow-hidden mt-10">
                  <div className="mvt-track-zdwkwj gap-4">
                    {[
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_1-1793375910281.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_2-1793376203018.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_3-1793376248948.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_4-1793376269451.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_42e6b2a8-1793376309175.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_4f8cdb48-1793376356600.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_1-1793375910281.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-mat_2-1793376203018.webp",
                    ].map((src, idx) => (
                      <div key={idx} className="shrink-0 w-64 sm:w-80 rounded-[var(--pv-radius)] overflow-hidden shadow-md">
                        <img src={src} alt="Exemplo de Cartilha" className="w-full h-auto object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carrossel 2: Detalhes, fluxogramas e curvas */}
                <div className="overflow-hidden mt-6">
                  <div className="mvt-track-1fyax9h gap-4">
                    {[
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_95c639-1793376442294.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_44e209-1793376462638.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_18e741-1793376499356.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_70c211-1793376523024.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_1896ff-1793376560072.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_c34ac1-1793376632534.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_95c639-1793376442294.webp",
                      "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/materiais-el_30719941_44e209-1793376462638.webp",
                    ].map((src, idx) => (
                      <div key={idx} className="shrink-0 w-64 sm:w-80 rounded-[var(--pv-radius)] overflow-hidden shadow-md">
                        <img src={src} alt="Exemplo de Detalhe" className="w-full h-auto object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ======================================================================
                5. AS CARTILHAS POSSUEM
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-cream-soft)", color: "var(--pv-text)" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto">
                <h2
                  className="text-[30px] sm:text-[44px] lg:text-[48px] text-center font-black uppercase mb-12"
                  style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                >
                  AS CARTILHAS VISUAIS DE VENTILAÇÃO MECÂNICA POSSUEM:
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {[
                    {
                      img: "https://site.packpronto.com.br/mvt/laser.png",
                      title: "Conteúdo visual e direto",
                      desc: "Fácil de entender e aplicar na prática diária.",
                    },
                    {
                      img: "https://site.packpronto.com.br/mvt/folders-1.png",
                      title: "Checklists de revisão rápida",
                      desc: "Para consultar antes de iniciar o plantão.",
                    },
                    {
                      img: "https://site.packpronto.com.br/mvt/scale.png",
                      title: "Fluxogramas de decisão",
                      desc: "Para organizar o raciocínio à beira do leito.",
                    },
                    {
                      img: "https://site.packpronto.com.br/mvt/manual-book.png",
                      title: "Ilustrações das curvas e do ventilador",
                      desc: "Facilitando a memorização dos padrões gráficos.",
                    },
                    {
                      img: "https://site.packpronto.com.br/mvt/download.png",
                      title: "Formatos prontos para impressão",
                      desc: "Para levar no bolso do jaleco ou usar no tablet/celular.",
                    },
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-[var(--pv-radius)] flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]"
                      style={{ background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                    >
                      <img src={feat.img} alt="" className="w-12 h-12 shrink-0 object-contain" />
                      <div>
                        <h3 className="font-bold text-lg sm:text-xl text-[var(--pv-text)]">{feat.title}</h3>
                        <p className="text-sm sm:text-base opacity-80 mt-1">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ======================================================================
                6. PROVA SOCIAL (Versão alternativa: Feito para quem está chegando na UTI)
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-primary)", color: "#fff" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto text-center">
                <span
                  className="inline-block text-xs sm:text-sm font-extrabold px-5 py-1.5 rounded-full uppercase mb-4"
                  style={{ background: "var(--pv-accent)", color: "#fff" }}
                >
                  À beira do leito
                </span>

                <h2
                  className="text-[32px] sm:text-[46px] lg:text-[52px] font-black uppercase"
                  style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                >
                  FEITO PARA QUEM ESTÁ CHEGANDO NA UTI
                </h2>

                <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
                  {[
                    {
                      icon: "⚠️",
                      text: "Insegurança ao assumir o leito com o paciente no ventilador.",
                    },
                    {
                      icon: "📉",
                      text: "Dificuldade de interpretar curvas e identificar assincronias em tempo real.",
                    },
                    {
                      icon: "🚨",
                      text: "Medo de travar quando o alarme toca ou a equipe pede uma conduta rápida.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-[var(--pv-radius)] flex flex-col items-center text-center gap-3"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className="text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mt-10"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Fisioterapeutas recém-formados, residentes e estudantes que usam as cartilhas visuais percebem a diferença logo nos primeiros plantões. Com a revisão rápida e visual, eles entendem o que está acontecendo no ventilador e conversam com a equipe com mais confiança.
                </p>
              </div>
            </section>

            {/* ======================================================================
                7. BLOCO DE URGÊNCIA
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-cream)", color: "var(--pv-text)" }}
              className="w-full px-4 py-16 sm:py-20 text-center"
            >
              <div style={{ maxWidth: "800px" }} className="mx-auto">
                <span
                  className="inline-block text-sm sm:text-base font-extrabold px-6 py-2 rounded-full uppercase mb-4"
                  style={{ background: "#FFE08A", color: "#2D1107" }}
                >
                  🔥 APENAS HOJE
                </span>

                <h2
                  className="text-[32px] sm:text-[46px] font-black uppercase mt-2"
                  style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                >
                  Aproveite enquanto a oferta está disponível!
                </h2>

                <p className="text-lg sm:text-2xl font-medium opacity-90 mt-3">
                  Garanta suas cartilhas e chegue ao próximo plantão preparado.
                </p>

                <div className="mt-8">
                  <a
                    href="#planos"
                    onClick={scrollToPlanos}
                    className="px-8 py-4 sm:px-10 sm:py-5 text-[18px] sm:text-[20px] font-bold inline-block text-center rounded-full transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] pv-cta uppercase cursor-pointer"
                    style={{
                      background: "var(--pv-accent)",
                      color: "#fff",
                      boxShadow: "0 14px 30px -10px color-mix(in srgb, var(--pv-accent) 60%, transparent)",
                    }}
                  >
                    QUERO GARANTIR AS MINHAS
                  </a>
                </div>
              </div>
            </section>

            {/* ======================================================================
                8. IDEAL PARA VOCÊ
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-bg)", color: "var(--pv-text)" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto">
                <h2
                  className="text-[30px] sm:text-[44px] lg:text-[48px] text-center font-black uppercase mb-12"
                  style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                >
                  ESTAS CARTILHAS SÃO IDEAIS PARA VOCÊ QUE DESEJA
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {[
                    {
                      num: "01",
                      title: "PERDER O MEDO DO VENTILADOR",
                      desc: "Entender de verdade o que cada modo faz e quando ele é usado.",
                    },
                    {
                      num: "02",
                      title: "SABER O QUE FAZER QUANDO O ALARME TOCA",
                      desc: "Ter um passo a passo visual para os alarmes mais comuns.",
                    },
                    {
                      num: "03",
                      title: "LER AS CURVAS COM SEGURANÇA",
                      desc: "Reconhecer na tela o que é normal e o que é sinal de alerta.",
                    },
                    {
                      num: "04",
                      title: "CONVERSAR DE IGUAL PARA IGUAL COM A EQUIPE",
                      desc: "Discutir parâmetros com médicos e colegas sem travar.",
                    },
                    {
                      num: "05",
                      title: "CONDUZIR O DESMAME COM ORGANIZAÇÃO",
                      desc: "Seguir critérios claros do teste de respiração espontânea até a extubação.",
                    },
                    {
                      num: "06",
                      title: "SE PREPARAR PARA RESIDÊNCIA E PROVAS",
                      desc: "Revisar os temas mais cobrados de ventilação mecânica em minutos.",
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-[var(--pv-radius)] flex flex-col gap-3 transition-transform duration-300 hover:scale-[1.02]"
                      style={{ background: "var(--pv-cream)", border: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <span className="font-extrabold text-2xl" style={{ color: "var(--pv-accent)" }}>
                        {card.num}
                      </span>
                      <h3 className="font-black text-xl leading-snug">{card.title}</h3>
                      <p className="text-base opacity-85 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ======================================================================
                9. TUDO O QUE VOCÊ VAI RECEBER
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-primary)", color: "#fff" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                  <span
                    className="inline-block text-xs sm:text-sm font-extrabold px-6 py-2 rounded-full uppercase mb-4"
                    style={{ background: "var(--pv-cream)", color: "var(--pv-primary)" }}
                  >
                    ⚡ ACESSO IMEDIATO
                  </span>

                  <h2
                    className="text-[32px] sm:text-[46px] lg:text-[52px] font-black uppercase mt-2"
                    style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                  >
                    TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE CONSULTAR
                  </h2>

                  <p className="text-lg sm:text-2xl font-medium mt-3" style={{ color: "rgba(255,255,255,0.9)" }}>
                    Você escolhe a cartilha que precisa e já pode começar a revisar.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-12">
                  <div className="flex justify-center">
                    <img
                      src="https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/pacote-mockup_pacote-1793376719912.webp"
                      alt="Mockup do pacote completo"
                      width="700"
                      height="700"
                      className="max-h-[460px] object-contain rounded-[var(--pv-radius)] shadow-2xl"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <ul className="space-y-3">
                      {[
                        "Cartilha 01: Fundamentos do Ventilador",
                        "Cartilha 02: Modos Ventilatórios em Fluxograma",
                        "Cartilha 03: Ajuste Inicial Passo a Passo",
                        "Cartilha 04: Leitura das Curvas de Pressão, Fluxo e Volume",
                        "Cartilha 05: Assincronias Paciente-Ventilador",
                        "Cartilha 06: Gasometria Arterial em Fluxograma",
                        "Cartilha 07: Ventilação Protetora",
                        "Cartilha 08: Situações Específicas (DPOC, Asma e Paciente Neurológico)",
                        "Cartilha 09: Desmame e Extubação",
                        "Cartilha 10: O Ventilador Apitou, e Agora? Guia Visual dos Alarmes",
                      ].map((cartilha, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-base sm:text-lg font-semibold py-2.5 border-b border-white/10"
                        >
                          <span
                            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
                            style={{ background: "var(--pv-success)", color: "#fff" }}
                          >
                            ✓
                          </span>
                          <span style={{ color: "rgba(255,255,255,0.95)" }}>{cartilha}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ======================================================================
                10. BÔNUS
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-pink)", color: "var(--pv-text)" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto text-center">
                <h2
                  className="text-[34px] sm:text-[48px] font-black uppercase"
                  style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                >
                  E NÃO PARA POR AÍ... TEM MAIS!
                </h2>

                <p className="text-xl sm:text-2xl italic font-bold opacity-90 mt-2">
                  Você também vai receber…
                </p>

                <div className="mt-5 mb-12">
                  <span
                    className="inline-block text-base sm:text-lg font-extrabold px-8 py-3 rounded-full"
                    style={{ background: "var(--pv-accent)", color: "#fff" }}
                  >
                    🎁 4 BÔNUS EXCLUSIVOS
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
                  {[
                    {
                      num: "BÔNUS #1",
                      img: "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/bonus-bonus_1_img-1793376807741.webp",
                      title: "CARTILHA VISUAL DE VNI",
                      content:
                        "O que é ventilação não invasiva. Indicações. Contraindicações. Tipos de interface. Modos mais usados. Ajustes iniciais de referência. Sinais de sucesso e de falha. Quando escalar para intubação. Fluxograma visual. Checklist de revisão rápida.",
                      benefit:
                        "Revisar com segurança quando indicar, como montar e como acompanhar o paciente em VNI.",
                    },
                    {
                      num: "BÔNUS #2",
                      img: "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/bonus-bonus_2_img-1793376816132.webp",
                      title: "CARTILHA VISUAL DE OXIGENOTERAPIA E ALTO FLUXO",
                      content:
                        "Dispositivos de baixo e alto fluxo. Cateter nasal, máscara simples, máscara com reservatório e Venturi. Cateter nasal de alto fluxo. Faixas de FiO2 de cada dispositivo. Como escolher o dispositivo. Tabela visual comparativa. Checklist de revisão rápida.",
                      benefit:
                        "Escolher e ajustar o dispositivo de oxigênio certo sem consultar várias fontes.",
                    },
                    {
                      num: "BÔNUS #3",
                      img: "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/bonus-bonus_3_img-1793376824765.webp",
                      title: "TABELA DE PESO PREDITO E VOLUME CORRENTE",
                      content:
                        "O que é peso predito e por que usar. Fórmulas para homens e mulheres. Tabela pronta por altura. Volume corrente correspondente em mL/kg. Exemplos de cálculo. Erros comuns no cálculo.",
                      benefit:
                        "Encontrar em segundos o volume corrente de referência para ventilação protetora.",
                    },
                    {
                      num: "BÔNUS #4",
                      img: "https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/bonus-bonus_4_img-1793376832127.webp",
                      title: "CHECKLIST DE PASSAGEM DE PLANTÃO EM UTI",
                      content:
                        "O que verificar no paciente ventilado. Parâmetros a registrar. Via aérea e fixação do tubo. Pressão do cuff. Gasometria e exames recentes. Plano de desmame. Modelo de passagem de plantão pronto para imprimir.",
                      benefit:
                        "Receber e passar o plantão de forma organizada, sem esquecer nada importante.",
                    },
                  ].map((bonus, idx) => (
                    <div
                      key={idx}
                      className="rounded-[14px] overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.03] shadow-md"
                      style={{ background: "var(--pv-cream)" }}
                    >
                      <div className="relative bg-black/[0.04] flex items-center justify-center p-3">
                        <img
                          src={bonus.img}
                          alt={bonus.title}
                          className="h-64 sm:h-72 w-full object-contain"
                          loading="lazy"
                        />
                        <span
                          className="absolute top-3 right-3 text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-md"
                          style={{ background: "#FFE08A", color: "#2D1107" }}
                        >
                          {bonus.num}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col gap-3">
                        <h3 className="font-black leading-tight text-lg sm:text-xl">
                          {bonus.title}
                        </h3>

                        <div className="text-sm opacity-85 space-y-2 flex-1">
                          <p>
                            <strong>Conteúdo:</strong> {bonus.content}
                          </p>
                          <p>
                            <strong>Benefício:</strong> {bonus.benefit}
                          </p>
                        </div>

                        <div className="mt-auto pt-3 flex justify-center">
                          <div
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 py-2 rounded-full"
                            style={{ background: "#1F1410", color: "#fff" }}
                          >
                            <span className="opacity-80">Valor:</span>
                            <s className="opacity-60">R$ 27</s>
                            <span className="font-extrabold text-[#FFE08A]">GRÁTIS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ======================================================================
                11. PLANOS (ÂNCORA #planos)
            ====================================================================== */}
            <section
              id="planos"
              style={{ background: "var(--pv-primary)", color: "#fff", scrollMarginTop: "60px" }}
              className="w-full px-4 py-16 sm:py-24"
            >
              <div style={{ maxWidth: "var(--pv-container)" }} className="mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2
                    className="text-[34px] sm:text-[48px] font-black uppercase"
                    style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                  >
                    ESCOLHA O MELHOR PLANO PARA VOCÊ
                  </h2>
                  <p className="text-lg sm:text-xl opacity-90 mt-2">
                    Acesso imediato e vitalício ao material completo em PDF.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                  {/* CARD 1: PLANO BÁSICO */}
                  <div
                    className="rounded-2xl p-7 sm:p-9 flex flex-col justify-between"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "2px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span
                          className="text-xs sm:text-sm font-extrabold px-3 py-1 rounded-md"
                          style={{ background: "#FFE08A", color: "#2D1107" }}
                        >
                          🔥 ÚLTIMA CHANCE
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-3xl font-extrabold uppercase mb-4"
                        style={{ fontFamily: "var(--pv-font-heading)" }}
                      >
                        PLANO BÁSICO
                      </h3>

                      <ul className="space-y-3 mb-8">
                        {[
                          "Acesso às 10 cartilhas visuais de ventilação mecânica",
                          "Material digital em PDF de alta qualidade",
                          "Fluxogramas e checklists para prática rápida",
                          "Acesso imediato após a compra",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span style={{ color: "rgba(255,255,255,0.9)" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10 text-center">
                      <p className="text-sm line-through opacity-60">de R$ 97,90 por:</p>
                      <p
                        className="text-4xl sm:text-5xl font-black my-1"
                        style={{ color: "var(--pv-success)", fontFamily: "var(--pv-font-heading)" }}
                      >
                        R$ 19,90
                      </p>
                      <p className="text-sm opacity-80 mb-2">ou 2x de R$ 10,38</p>
                      <p className="text-xs font-semibold text-emerald-300 mb-6">
                        Você economiza R$ 78,00
                      </p>

                      <a
                        href={CHECKOUT_URL}
                        className="w-full py-4 px-6 rounded-full font-bold text-lg inline-block uppercase transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                        style={{
                          background: "#fff",
                          color: "var(--pv-primary)",
                        }}
                      >
                        QUERO O PLANO BÁSICO
                      </a>
                    </div>
                  </div>

                  {/* CARD 2: PRODUTO + BÔNUS (DESTAQUE) */}
                  <div
                    className="rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative shadow-2xl"
                    style={{
                      background: "linear-gradient(180deg, #2A1D16 0%, #1A1412 100%)",
                      border: "3px solid var(--pv-accent)",
                    }}
                  >
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span
                        className="text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-lg"
                        style={{ background: "var(--pv-accent)", color: "#fff" }}
                      >
                        ⚡ MAIS VENDIDO · ⚡ MAIS CONTEÚDO
                      </span>
                    </div>

                    <div>
                      <div className="mt-3 mb-4">
                        <h3
                          className="text-2xl sm:text-3xl font-extrabold uppercase"
                          style={{ fontFamily: "var(--pv-font-heading)", color: "#fff" }}
                        >
                          PRODUTO + 4 BÔNUS
                        </h3>
                        <p className="text-sm text-[#FFE08A] font-semibold mt-1">
                          92% das pessoas escolhem este plano 👇
                        </p>
                      </div>

                      <div className="my-4 flex justify-center">
                        <img
                          src="https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/planos-completo_mockup-1793376921739.webp"
                          alt="Mockup Completo com Bônus"
                          className="h-32 object-contain"
                          loading="lazy"
                        />
                      </div>

                      <ul className="space-y-3 mb-8">
                        {[
                          "Acesso completo às 10 cartilhas visuais",
                          "Os 4 bônus exclusivos (VNI, Oxigenoterapia, Peso Predito e Passagem de Plantão)",
                          "Material digital em PDF de alta qualidade",
                          "Fluxogramas e checklists prontos para impressão",
                          "Acesso imediato e vitalício após a compra",
                          "Suporte exclusivo para dúvidas",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base">
                            <span className="text-[#FFE08A] font-bold">✓</span>
                            <span style={{ color: "rgba(255,255,255,0.95)" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10 text-center">
                      <p className="text-sm line-through opacity-60">de R$ 205,90 por:</p>
                      <p
                        className="text-5xl sm:text-6xl font-black my-1"
                        style={{ color: "#25D366", fontFamily: "var(--pv-font-heading)" }}
                      >
                        R$ 27,90
                      </p>
                      <p className="text-sm opacity-90 mb-2">ou 3x de R$ 9,90</p>
                      <p className="text-xs font-semibold text-emerald-300 mb-6">
                        Você economiza R$ 178,00
                      </p>

                      <a
                        href={CHECKOUT_URL}
                        className="w-full py-4 px-6 rounded-full font-extrabold text-lg sm:text-xl inline-block uppercase transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98] pv-cta shadow-xl"
                        style={{
                          background: "var(--pv-accent)",
                          color: "#fff",
                        }}
                      >
                        QUERO AS CARTILHAS + BÔNUS
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-8">
                  <img
                    src="https://site.packpronto.com.br/mvt/icons-meio-de-pagamento-e1738718378460-2-1.png"
                    alt="Meios de pagamento seguros"
                    className="h-8 object-contain opacity-95"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* ======================================================================
                12. GARANTIA
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-cream)", color: "var(--pv-text)" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "860px" }} className="mx-auto flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                <img
                  src="https://origin.mentoriaprocesso.com/img/3b4f349e-e5e5-48fb-b6b5-ef16c680c186/ea6f636e-1055-41a3-bf90-cba19f689d4f/garantia-selo-1793376985592.webp"
                  alt="Selo Garantia 7 Dias"
                  className="w-40 h-40 object-contain shrink-0"
                  loading="lazy"
                />

                <div>
                  <h2
                    className="text-[28px] sm:text-[38px] font-black uppercase leading-tight mb-4"
                    style={{ fontFamily: "var(--pv-font-heading)" }}
                  >
                    GARANTIA DE 7 DIAS: ZERO RISCO PARA VOCÊ
                  </h2>

                  <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-3">
                    Isso significa que, se dentro de 7 dias você achar que:
                  </p>

                  <ul className="space-y-1.5 text-base sm:text-lg mb-4">
                    <li className="flex items-center gap-2">
                      <span className="font-bold" style={{ color: "var(--pv-accent)" }}>•</span>
                      <span>o material não faz sentido para a sua rotina</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold" style={{ color: "var(--pv-accent)" }}>•</span>
                      <span>as cartilhas não atendem à sua necessidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold" style={{ color: "var(--pv-accent)" }}>•</span>
                      <span>ou simplesmente não quiser continuar</span>
                    </li>
                  </ul>

                  <p className="text-base sm:text-lg font-bold" style={{ color: "var(--pv-accent-txt)" }}>
                    Basta pedir o reembolso de 100% do valor. Sem perguntas e sem burocracia. O risco fica todo do nosso lado.
                  </p>
                </div>
              </div>
            </section>

            {/* ======================================================================
                13. PERGUNTAS FREQUENTES
            ====================================================================== */}
            <section
              style={{ background: "var(--pv-bg)", color: "var(--pv-text)" }}
              className="w-full px-4 py-16 sm:py-20"
            >
              <div style={{ maxWidth: "860px" }} className="mx-auto">
                <h2
                  className="text-[32px] sm:text-[46px] font-black uppercase text-center mb-10"
                  style={{ fontFamily: "var(--pv-font-heading)", lineHeight: "1.15" }}
                >
                  PERGUNTAS FREQUENTES
                </h2>

                <div className="divide-y divide-black/10">
                  {[
                    {
                      q: "As cartilhas estão disponíveis em formato físico?",
                      a: "Não. As cartilhas são digitais e podem ser acessadas no celular, tablet ou computador.",
                    },
                    {
                      q: "Posso imprimir as cartilhas?",
                      a: "Sim. Todas foram diagramadas para impressão e cabem no bolso do jaleco.",
                    },
                    {
                      q: "O acesso é imediato?",
                      a: "Sim. Assim que o pagamento é confirmado, você recebe o acesso no seu e-mail.",
                    },
                    {
                      q: "Serve para quem nunca trabalhou em UTI?",
                      a: "Sim. As cartilhas partem do básico do ventilador e avançam até desmame e alarmes, em linguagem simples.",
                    },
                    {
                      q: "Serve para enfermeiros e estudantes de medicina?",
                      a: "Sim. O foco é o fisioterapeuta, mas o conteúdo é útil para qualquer profissional que lida com o paciente ventilado.",
                    },
                    {
                      q: "As cartilhas substituem os protocolos do hospital?",
                      a: "Não. O material é de estudo e revisão, baseado nas diretrizes brasileiras de ventilação mecânica. Na prática, siga sempre os protocolos da sua instituição e a conduta da equipe.",
                    },
                    {
                      q: "E se eu tiver dúvidas sobre o conteúdo?",
                      a: "Você pode falar com o nosso suporte pelo e-mail ou WhatsApp oficial disponibilizado na área de membros.",
                    },
                    {
                      q: "Tem garantia?",
                      a: "Sim. Você tem 7 dias para testar as cartilhas. Se não gostar, devolvemos 100% do valor.",
                    },
                  ].map((faq, idx) => (
                    <details key={idx} className="group py-5">
                      <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none select-none">
                        <span>{faq.q}</span>
                        <span className="ml-4 text-2xl transition-transform duration-200 group-open:rotate-45 opacity-60">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-base sm:text-lg opacity-85 leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* ======================================================================
                14. RODAPÉ
            ====================================================================== */}
            <footer
              className="px-4 py-12 text-center text-sm sm:text-base space-y-4"
              style={{ background: "#111111", color: "#ffffff" }}
            >
              <p className="font-bold text-base sm:text-lg">
                © {new Date().getFullYear()} Cartilhas Visuais de Ventilação Mecânica. Todos os direitos reservados.
              </p>
              <p className="opacity-70 max-w-3xl mx-auto leading-relaxed text-xs sm:text-sm">
                Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e demonstrar as aplicações reais do produto. Não vendemos o seu e-mail ou dados a terceiros. Em caso de dúvidas, utilize os canais oficiais de suporte.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
