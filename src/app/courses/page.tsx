"use client";

import React, { useState } from "react";
import "./courses.css";

const CHECKOUT_URL = "https://pay.kiwify.com.br/xcahy6n";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<"portugues" | "matematica" | "flashcard">("portugues");

  const scrollToOferta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "var(--cnc-bg)",
        color: "var(--cnc-text)",
        fontFamily: "var(--cnc-font-body)",
        lineHeight: 1.6,
      }}
      className="min-h-screen antialiased selection:bg-amber-200 selection:text-amber-900"
    >
      {/* ======================================================================
          FAIXA TOPO AVISO
      ====================================================================== */}
      <div
        className="w-full text-center py-2.5 px-4 font-semibold text-xs sm:text-sm tracking-wide text-white"
        style={{ background: "var(--cnc-navy)" }}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="text-amber-400">⚡</span> MATERIAL COMPLEMENTAR DE REVISÃO ESTRATÉGICA PARA CONCURSOS PÚBLICOS
        </span>
      </div>

      {/* ======================================================================
          1. APRESENTAÇÃO PRINCIPAL (HERO)
      ====================================================================== */}
      <header className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="cnc-container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Frase acima do título */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 bg-amber-50 text-amber-900 border border-amber-200 shadow-sm">
              <span>🎯</span>
              <span>Para quem está se preparando para concursos públicos</span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] text-slate-900 uppercase"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              300 PEGADINHAS COMENTADAS PARA CONCURSOS:{" "}
              <span className="text-amber-600 block sm:inline">
                ENTENDA OS DETALHES QUE PODEM CUSTAR PONTOS NA PROVA
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-2xl font-normal text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Um guia visual de Português, Matemática, Raciocínio Lógico e Informática para reconhecer armadilhas, compreender a regra correta e direcionar sua revisão.
            </p>

            {/* Mockup visual */}
            <div className="mt-10 mb-8 max-w-3xl mx-auto">
              <div className="relative rounded-2xl p-6 sm:p-10 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700">
                <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-left">
                  <div className="space-y-3">
                    <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider border border-amber-500/40">
                      Guia Digital em PDF · 113 Páginas
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "var(--cnc-font-heading)" }}>
                      300 PEGADINHAS COMENTADAS
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base">
                      Português · Matemática · Raciocínio Lógico · Informática
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700">80 Português</span>
                      <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700">80 Matemática</span>
                      <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700">60 RLM</span>
                      <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700">80 Informática</span>
                    </div>
                  </div>

                  <div className="w-full md:w-auto shrink-0 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="text-center md:text-right">
                      <span className="text-xs text-amber-300 block font-semibold">+ 3 BÔNUS INCLUÍDOS</span>
                      <span className="text-xs text-slate-400 block mt-1">40 Flashcards</span>
                      <span className="text-xs text-slate-400 block">Mapa de Fórmulas</span>
                      <span className="text-xs text-slate-400 block">Plano de 15 Dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parágrafo de apresentação */}
            <p className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Uma crase, uma palavra no enunciado ou uma mudança na base do cálculo pode alterar sua resposta. Este guia reúne 300 pontos de atenção, com exemplos e explicações diretas, para complementar seus estudos para concursos públicos.
            </p>

            {/* Aviso em destaque */}
            <div className="mt-8 max-w-2xl mx-auto p-4 sm:p-5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-left text-amber-950 text-sm sm:text-base shadow-sm">
              <p className="leading-relaxed">
                <strong>IMPORTANTE:</strong> decorar a alternativa não é o objetivo. Use os comentários para entender o motivo da correção e depois aplique a regra em novas questões.
              </p>
            </div>

            {/* Botão de ação */}
            <div className="mt-10">
              <a
                href="#oferta"
                onClick={scrollToOferta}
                className="cnc-cta-btn cnc-btn-pulse inline-block px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-xl uppercase cursor-pointer"
              >
                QUERO O GUIA PARA CONCURSOS + OS 3 BÔNUS
              </a>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium">
                🔒 Acesso imediato ao material completo em PDF · Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ======================================================================
          2. VEJA COMO É O MATERIAL POR DENTRO
      ====================================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 block mb-2">
              Visão Detalhada
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-slate-900"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              VEJA O GUIA DE REVISÃO PARA CONCURSOS POR DENTRO
            </h2>
            <p className="mt-3 text-base sm:text-xl text-slate-600 leading-relaxed">
              Da interpretação de uma frase à escolha da fórmula: revise pequenas diferenças que mudam a resposta.
            </p>
          </div>

          {/* Cards das 4 matérias fundamentais */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="cnc-card-hover p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xl mb-4">
                  PT
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                  80 pegadinhas de Português
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Crase, concordância, regência, pontuação, ortografia e interpretação de textos.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600">
                80 itens comentados
              </span>
            </div>

            <div className="cnc-card-hover p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl mb-4">
                  MT
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                  80 pegadinhas de Matemática
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Porcentagens, operações, unidades, juros, estatística e probabilidade.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-600">
                80 itens comentados
              </span>
            </div>

            <div className="cnc-card-hover p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl mb-4">
                  RL
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                  60 pegadinhas de Raciocínio Lógico
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Proposições, negações, condicionais, quantificadores, argumentos e conjuntos.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-amber-600">
                60 itens comentados
              </span>
            </div>

            <div className="cnc-card-hover p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-xl mb-4">
                  INF
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                  80 pegadinhas de Informática
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Segurança, armazenamento, redes, arquivos, planilhas e aplicativos.
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-purple-600">
                80 itens comentados
              </span>
            </div>
          </div>

          <div className="mt-8 text-center max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-sm sm:text-base text-slate-700 font-medium">
            ✨ <strong>E mais:</strong> orientações de estudo e um plano de revisão incluídos no guia.
          </div>

          <p className="mt-8 text-center text-sm sm:text-base text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Cada item apresenta a armadilha e explica como corrigi-la. Você encontra o assunto, confere o detalhe e identifica o que precisa retomar.
          </p>
        </div>
      </section>

      {/* ======================================================================
          3. O QUE VOCÊ PODERÁ FAZER COM O MATERIAL
      ====================================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-600 block mb-2">
              Aplicação Prática
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-slate-900 leading-tight"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              UMA REVISÃO PARA IR ALÉM DE “EU ACHEI QUE SABIA”
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 font-extrabold flex items-center justify-center text-lg mb-4">
                01
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">
                RECONHECER A CONFUSÃO
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Observe diferenças entre regras, operações e conceitos que parecem semelhantes, mas produzem respostas diferentes.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center text-lg mb-4">
                02
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">
                ENTENDER O MOTIVO DA CORREÇÃO
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Leia uma explicação direta para compreender por que determinada construção ou conclusão está errada.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center text-lg mb-4">
                03
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">
                REVISAR POR ASSUNTO
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Escolha a matéria que precisa de atenção e consulte os itens relacionados à sua dificuldade.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 font-extrabold flex items-center justify-center text-lg mb-4">
                04
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">
                DIRECIONAR OS PRÓXIMOS EXERCÍCIOS
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Use as dúvidas encontradas para selecionar questões e aprofundar os temas previstos no seu edital.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-blue-50 border border-blue-200 text-center text-blue-900 text-sm sm:text-base font-medium">
            💡 O guia é uma ferramenta complementar de revisão. Combine seu uso com estudo teórico e resolução de questões oficiais.
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. COMO A REVISÃO FOI ORGANIZADA
      ====================================================================== */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block mb-3">
              A ESTRUTURA DO MATERIAL
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              LEIA A ARMADILHA. ENTENDA A REGRA. PRATIQUE A APLICAÇÃO.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              O conteúdo foi organizado em unidades curtas. Em cada item, você encontra um erro possível e uma explicação para corrigi-lo. A proposta é ajudar você a perceber o detalhe, explicar a regra com suas palavras e conferir se consegue aplicá-la em outro exemplo.
            </p>
          </div>

          {/* Passos da sequência visual */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-3xl font-black text-amber-400 block mb-2">1</span>
              <h3 className="font-bold text-lg text-white mb-2">Identifique a armadilha</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Leia a frase, a conta ou a afirmação apresentada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-3xl font-black text-amber-400 block mb-2">2</span>
              <h3 className="font-bold text-lg text-white mb-2">Tente corrigir</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pense no que mudaria antes de consultar o comentário.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-3xl font-black text-amber-400 block mb-2">3</span>
              <h3 className="font-bold text-lg text-white mb-2">Confira a explicação</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Compare seu raciocínio com a regra apresentada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-3xl font-black text-amber-400 block mb-2">4</span>
              <h3 className="font-bold text-lg text-white mb-2">Resolva outra questão</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pratique o assunto em questões do seu concurso.
              </p>
            </div>
          </div>

          {/* Números em destaque */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-slate-800 text-center">
            <div>
              <span className="text-4xl sm:text-6xl font-black text-amber-400" style={{ fontFamily: "var(--cnc-font-heading)" }}>
                300
              </span>
              <span className="block text-xs sm:text-sm text-slate-300 font-semibold uppercase mt-1">
                Pegadinhas comentadas
              </span>
            </div>

            <div>
              <span className="text-4xl sm:text-6xl font-black text-emerald-400" style={{ fontFamily: "var(--cnc-font-heading)" }}>
                4
              </span>
              <span className="block text-xs sm:text-sm text-slate-300 font-semibold uppercase mt-1">
                Matérias de fundamentos
              </span>
            </div>

            <div>
              <span className="text-4xl sm:text-6xl font-black text-blue-400" style={{ fontFamily: "var(--cnc-font-heading)" }}>
                80
              </span>
              <span className="block text-xs sm:text-sm text-slate-300 font-semibold uppercase mt-1">
                Páginas no guia principal
              </span>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-400 max-w-xl mx-auto">
            Os exemplos são didáticos e autorais. A seleção não é um ranking estatístico das pegadinhas mais frequentes.
          </p>
        </div>
      </section>

      {/* ======================================================================
          5. PARA QUEM É?
      ====================================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 block mb-2">
              Público-Alvo
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-slate-900 leading-tight"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              PARA QUEM ESTUDA PARA CONCURSOS E QUER REVISAR COM MAIS ATENÇÃO
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block">🎯</span>
                <h3 className="font-extrabold text-lg text-slate-900 uppercase mb-3">
                  QUEM JÁ ESTUDA, MAS AINDA CONFUNDE AS REGRAS
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Para candidatos que conhecem o assunto, mas às vezes trocam uma condição, uma fórmula ou o sentido de uma afirmação.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block">📋</span>
                <h3 className="font-extrabold text-lg text-slate-900 uppercase mb-3">
                  QUEM ESTÁ ORGANIZANDO A REVISÃO
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Para quem deseja consultar os fundamentos por matéria e identificar quais pontos precisam ser retomados.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block">🔍</span>
                <h3 className="font-extrabold text-lg text-slate-900 uppercase mb-3">
                  QUEM PREFERE EXEMPLOS E EXPLICAÇÕES DIRETAS
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Para quem procura uma ferramenta visual para complementar aulas, apostilas e exercícios.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-slate-100 border border-slate-200 text-center">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Pode apoiar a preparação para seleções como <strong>CNU, Correios, Banco do Brasil, Caixa e INSS</strong>,{" "}
              <strong>nos assuntos efetivamente exigidos pelo edital</strong>. O conteúdo das provas varia conforme o concurso, o cargo e a edição.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              * Não substitui um curso completo nem os conhecimentos específicos do seu cargo.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. CONTEÚDO COMPLETO + TRÊS BÔNUS
      ====================================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 inline-block mb-3">
              MAIS FERRAMENTAS PARA SUA PREPARAÇÃO
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-slate-900 leading-tight"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              RECEBA O GUIA E LEVE TRÊS BÔNUS PARA CONTINUAR A REVISÃO
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* BÔNUS 1 */}
            <div className="cnc-card-hover rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-amber-100 text-amber-800">
                    BÔNUS 1
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    INCLUÍDO NO PACOTE
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  40 FLASHCARDS DE REVISÃO
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Teste sua memória com perguntas e respostas de Português, Matemática, Raciocínio Lógico e Informática.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-2">
                  <p>
                    <strong>Como usar:</strong> Cubra a resposta, tente explicar a regra e marque os cartões que precisam de uma nova rodada.
                  </p>
                  <p>
                    <strong>Você recebe:</strong> 40 cartões e controle de revisão em um PDF de 13 páginas.
                  </p>
                </div>
              </div>
            </div>

            {/* BÔNUS 2 */}
            <div className="cnc-card-hover rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-blue-100 text-blue-800">
                    BÔNUS 2
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    INCLUÍDO NO PACOTE
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  MAPA DE FÓRMULAS E CONVERSÕES
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Consulte 24 fórmulas com exemplos, condições de uso e cuidados para evitar trocas.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-2">
                  <p>
                    <strong>Como usar:</strong> Confira a situação, a unidade e o regime de cálculo antes de escolher a fórmula.
                  </p>
                  <p>
                    <strong>Você recebe:</strong> Um PDF de 10 páginas com fórmulas e conversões.
                  </p>
                </div>
              </div>
            </div>

            {/* BÔNUS 3 */}
            <div className="cnc-card-hover rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-purple-100 text-purple-800">
                    BÔNUS 3
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    INCLUÍDO NO PACOTE
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  PLANO DE REVISÃO DE 15 DIAS
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Organize suas sessões com metas diárias, ficha de estudo e acompanhamento das dificuldades.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-2">
                  <p>
                    <strong>Como usar:</strong> Adapte a agenda ao seu tempo e às matérias previstas no edital.
                  </p>
                  <p>
                    <strong>Você recebe:</strong> Um PDF de 10 páginas com agenda, fichas e orientações de reteste.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto">
            * A numeração sugerida acompanha o desafio de 100 questões, vendido separadamente. Sem ele, você pode selecionar questões do próprio edital.
          </p>
        </div>
      </section>

      {/* ======================================================================
          7. CONFIRA ANTES DE ESCOLHER
      ====================================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
              Amostra Real
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-slate-900 leading-tight"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              VEJA UM EXEMPLO COMPLETO DO QUE VOCÊ VAI RECEBER
            </h2>
            <p className="mt-3 text-base sm:text-xl text-slate-600 leading-relaxed">
              Leia uma armadilha, confira a explicação e avalie se esse formato combina com sua revisão.
            </p>
          </div>

          {/* Abas interativas de visualização de exemplo */}
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-6 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab("portugues")}
                className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-colors ${
                  activeTab === "portugues"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Português (Crase)
              </button>
              <button
                onClick={() => setActiveTab("matematica")}
                className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-colors ${
                  activeTab === "matematica"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Matemática (Porcentagem)
              </button>
              <button
                onClick={() => setActiveTab("flashcard")}
                className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-colors ${
                  activeTab === "flashcard"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Flashcard (Raciocínio Lógico)
              </button>
            </div>

            {/* Conteúdo do exemplo */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-md">
              {activeTab === "portugues" && (
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded bg-blue-100 text-blue-900 text-xs font-bold uppercase">
                    Português · Pegadinha #14 · Crase e Pronomes
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-xs font-bold text-red-700 uppercase">Armadilha comum:</p>
                    <p className="text-base font-semibold text-red-950 mt-1">
                      &quot;Entreguei o documento à ela ontem.&quot;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 uppercase">Explicação da Regra:</p>
                    <p className="text-sm sm:text-base text-emerald-950 mt-1 leading-relaxed">
                      <strong>Incorreto.</strong> Não se usa crase antes de pronomes pessoais retos ou oblíquos (ela, ele, você, mim, etc.), pois eles não admitem artigo feminino definido &quot;a&quot;. Apenas a preposição está presente.
                    </p>
                    <p className="text-xs font-bold text-emerald-800 mt-2">
                      Forma correta: &quot;Entreguei o documento a ela ontem.&quot;
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "matematica" && (
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 text-xs font-bold uppercase">
                    Matemática · Pegadinha #32 · Aumentos Sucessivos
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-xs font-bold text-red-700 uppercase">Armadilha comum:</p>
                    <p className="text-base font-semibold text-red-950 mt-1">
                      &quot;Um produto que custava R$ 100 teve aumento de 20% e depois desconto de 20%. O preço final voltou a R$ 100.&quot;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 uppercase">Explicação da Regra:</p>
                    <p className="text-sm sm:text-base text-emerald-950 mt-1 leading-relaxed">
                      <strong>Incorreto.</strong> A base de cálculo do segundo evento mudou: após o aumento de 20%, o valor foi para R$ 120. O desconto de 20% incide sobre R$ 120 (desconto de R$ 24).
                    </p>
                    <p className="text-xs font-bold text-emerald-800 mt-2">
                      Valor final correto: R$ 120 - R$ 24 = R$ 96.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "flashcard" && (
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold uppercase">
                    Flashcard · Raciocínio Lógico · Conectivos
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white">
                    <p className="text-xs font-bold text-amber-400 uppercase">Frente do Cartão (Pergunta):</p>
                    <p className="text-base font-semibold mt-1">
                      Como se nega formalmente uma condicional do tipo &quot;Se P, então Q&quot; (P → Q)?
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 uppercase">Verso do Cartão (Regra Direta):</p>
                    <p className="text-sm sm:text-base text-emerald-950 mt-1 leading-relaxed">
                      <strong>Regra do &quot;MANÉ&quot;:</strong> Mantém a primeira parte e Nega a segunda.
                    </p>
                    <p className="text-xs font-bold text-emerald-800 mt-2">
                      ~(P → Q) ≡ P ∧ ~Q (P e não Q). A negação de uma condicional NUNCA é outra condicional.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <p className="mt-6 text-center text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              As imagens mostram o conteúdo e a organização dos arquivos. Assim, você pode conhecer o material antes de decidir pela compra.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. OFERTA (ÂNCORA #oferta)
      ====================================================================== */}
      <section id="oferta" className="py-16 sm:py-24 bg-slate-900 text-white scroll-mt-10">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block mb-3">
              PACOTE DE REVISÃO PARA CONCURSOS PÚBLICOS
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              300 PEGADINHAS COMENTADAS + TRÊS BÔNUS
            </h2>
          </div>

          <div className="max-w-2xl mx-auto rounded-3xl bg-slate-800 border-2 border-amber-500/60 p-7 sm:p-10 shadow-2xl relative">
            <div className="text-left mb-8">
              <h3 className="text-lg font-bold text-amber-400 uppercase tracking-wider mb-4">
                Você recebe acesso completo a:
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Guia com 300 pegadinhas comentadas</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>80 itens de Português</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>80 itens de Matemática</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>60 itens de Raciocínio Lógico</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>80 itens de Informática</span>
                </li>
                <li className="flex items-start gap-3 text-amber-300">
                  <span className="font-bold">★</span>
                  <span><strong>Bônus 1:</strong> 40 Flashcards de Revisão</span>
                </li>
                <li className="flex items-start gap-3 text-amber-300">
                  <span className="font-bold">★</span>
                  <span><strong>Bônus 2:</strong> Mapa de Fórmulas e Conversões</span>
                </li>
                <li className="flex items-start gap-3 text-amber-300">
                  <span className="font-bold">★</span>
                  <span><strong>Bônus 3:</strong> Plano de Revisão de 15 Dias</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 pt-2 border-t border-slate-700">
                  <span>📄</span>
                  <span>Quatro arquivos em PDF, totalizando 113 páginas</span>
                </li>
              </ul>
            </div>

            <div className="text-center pt-6 border-t border-slate-700">
              <span className="text-xs uppercase tracking-wider text-slate-400 block">Condição Especial: Pagamento Único</span>
              <div className="flex items-baseline justify-center gap-2 mt-2">
                <span className="text-sm sm:text-base text-slate-400">por apenas</span>
                <span className="text-5xl sm:text-6xl font-black text-emerald-400" style={{ fontFamily: "var(--cnc-font-heading)" }}>
                  R$ 29,90
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">ou em até 3x no cartão</p>

              <div className="mt-8">
                <a
                  href={CHECKOUT_URL}
                  className="cnc-cta-btn w-full block py-4 sm:py-5 px-6 rounded-full text-base sm:text-xl uppercase transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-xl font-black"
                >
                  QUERO O GUIA PARA CONCURSOS + OS 3 BÔNUS
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                📲 Material digital. Confira as instruções de acesso após a confirmação do pagamento.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-slate-700/60 text-xs text-slate-400">
                <span>📚 Conteúdo por matéria</span>
                <span>📄 Arquivos em PDF</span>
                <span>🖨️ Pronto para impressão</span>
              </div>
            </div>
          </div>

          {/* Bloco de garantia */}
          <div className="max-w-2xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl shrink-0 font-bold border border-emerald-500/30">
              🛡️
            </div>
            <div>
              <h4 className="text-lg font-bold text-white uppercase mb-2">
                7 DIAS PARA CONHECER O MATERIAL
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Confira os arquivos e avalie se o formato atende à sua necessidade de revisão. Para solicitar reembolso dentro do prazo de sete dias, utilize o canal informado na compra.
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Atendimento: suporte@concursosnaprattica.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          9. PERGUNTAS FREQUENTES
      ====================================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="cnc-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
              Tire Suas Dúvidas
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black uppercase text-slate-900"
              style={{ fontFamily: "var(--cnc-font-heading)" }}
            >
              PERGUNTAS FREQUENTES
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            {[
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
                a: "Após a confirmação do pagamento, você recebe as instruções de acesso direto no seu e-mail cadastrado.",
              },
              {
                q: "O material garante aprovação?",
                a: "Não. É uma ferramenta de revisão. A aprovação depende da preparação, do desempenho e das regras do concurso.",
              },
              {
                q: "Como entro em contato?",
                a: "Pelo e-mail suporte@concursosnaprattica.com, para dúvidas sobre compra e acesso.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="cnc-faq group py-5">
                <summary className="cursor-pointer text-base sm:text-lg font-bold text-slate-900 flex justify-between items-center list-none select-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-2xl text-slate-400 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#oferta"
              onClick={scrollToOferta}
              className="cnc-cta-btn inline-block px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg uppercase cursor-pointer"
            >
              QUERO COMEÇAR MINHA REVISÃO PARA CONCURSOS
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          10. RODAPÉ
      ====================================================================== */}
      <footer className="py-12 bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
        <div className="cnc-container text-center space-y-4">
          <p className="font-bold text-base text-white tracking-wide">
            Concursos na Prática
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed text-slate-400">
            Material educativo de estudo e revisão. Sem vínculo ou endosso dos órgãos e das bancas mencionados.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2 text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer">Termos de uso</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Política de privacidade</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Contato</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Política de reembolso</span>
          </div>
          <p className="text-slate-400 pt-4 border-t border-slate-900 text-xs">
            © {new Date().getFullYear()} Concursos na Prática. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

