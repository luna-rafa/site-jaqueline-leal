import jak from "../assets/images/jak.jpg";

export default function NR1Empresas() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      <section className="min-h-screen bg-[#06291f] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
             Jaqueline Leal (CRP 000000514) Psicanalista Clinica
            </p>
        
            <h1 className="mt-6 text-8xl font-black leading-none text-[#d6b26d] md:text-9xl">
              NR-1
            </h1>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Saúde Mental <br /> nas Empresas
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
              Conformidade legal, gestão de riscos psicossociais e ambientes
              emocionalmente seguros, produtivos e sustentáveis.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={jak}
              alt="Jaqueline Leal"
              className="h-[520px] w-[390px] rounded-[2rem] border-4 border-[#d6b26d] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
          O cenário atual
        </p>

        <h2 className="mt-4 text-4xl font-black leading-tight text-[#064d35] md:text-5xl">
          A saúde mental no trabalho nunca foi tão estratégica
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          A saúde mental dos colaboradores deixou de ser apenas uma pauta de
          bem-estar e passou a ser um fator crítico para a sustentabilidade,
          produtividade e competitividade das empresas.
        </p>
      </div>

      <div className="rounded-[2rem] bg-[#064d35] p-10 text-white shadow-2xl">
        <p className="text-6xl font-black text-[#d6b26d]">+70%</p>

        <p className="mt-5 text-xl font-semibold leading-8">
          dos afastamentos do trabalho no Brasil estão relacionados a
          transtornos mentais e comportamentais.
        </p>

        <p className="mt-5 text-sm text-white/70">
          Indicador usado como alerta estratégico para empresas.
        </p>
      </div>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        "Aumento dos casos de ansiedade, estresse e burnout",
        "Ambientes tóxicos e sobrecarga emocional elevam o turnover",
        "Impactos diretos na produtividade e nos resultados financeiros",
        "Exigência legal e fiscalização cada vez mais rigorosa",
      ].map((item) => (
        <div
          key={item}
          className="rounded-[2rem] border border-[#d6b26d]/30 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-6 h-1 w-16 rounded-full bg-[#d6b26d]" />

          <p className="font-bold leading-7 text-[#064d35]">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section> 

<section className="bg-white px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
    <div className="rounded-[2rem] border border-[#d6b26d]/30 bg-[#f8f6f2] p-10 shadow-xl">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
        O que mudou?
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight text-[#064d35] md:text-5xl">
        A nova NR-1 exige gestão dos riscos psicossociais
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        A saúde mental passa a integrar a gestão de riscos ocupacionais,
        exigindo que empresas identifiquem, monitorem e implementem ações
        preventivas relacionadas aos fatores psicossociais no ambiente de
        trabalho.
      </p>

      <div className="mt-8 space-y-4">
        {[
          "Identificação dos riscos psicossociais",
          "Monitoramento contínuo dos fatores de risco",
          "Ações preventivas e corretivas",
          "Evidências de conformidade e adequação",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white p-5 shadow-md"
          >
            <p className="font-bold text-[#064d35]">✔ {item}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-[2rem] bg-[#064d35] p-10 text-white shadow-2xl">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
        Atenção empresarial
      </p>

      <h3 className="mt-4 text-3xl font-black text-[#d6b26d]">
        Riscos psicossociais incluem:
      </h3>

      <div className="mt-8 grid gap-4">
        {[
          "Sobrecarga de trabalho",
          "Assédio moral e psicológico",
          "Conflitos interpessoais",
          "Falta de reconhecimento",
          "Insegurança no trabalho",
          "Pressão excessiva por resultados",
          "Ambiente organizacional tóxico",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[#d6b26d]/30 bg-[#0b3b2c] p-5"
          >
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 rounded-2xl bg-[#d6b26d] p-5 text-center font-black text-[#064d35]">
        Prevenir é mais estratégico do que remediar.
      </p>
    </div>
  </div>
</section>

<section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
        Impactos Empresariais
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-5xl">
        Riscos para as empresas
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        A não adequação à NR-1 pode gerar impactos financeiros,
        jurídicos, operacionais e reputacionais para a organização.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="mb-6 text-5xl">⚖️</div>

        <h3 className="text-xl font-black text-[#064d35]">
          Multas e Penalidades
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Empresas não conformes podem sofrer autuações e sanções legais.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="mb-6 text-5xl">📄</div>

        <h3 className="text-xl font-black text-[#064d35]">
          Ações Trabalhistas
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Crescimento de processos relacionados ao adoecimento ocupacional.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="mb-6 text-5xl">📉</div>

        <h3 className="text-xl font-black text-[#064d35]">
          Queda de Produtividade
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Absenteísmo, presenteísmo e rotatividade impactam diretamente os resultados.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="mb-6 text-5xl">🏢</div>

        <h3 className="text-xl font-black text-[#064d35]">
          Danos à Reputação
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Empresas adoecedoras perdem credibilidade perante colaboradores e mercado.
        </p>
      </div>

    </div>

    <div className="mt-14 rounded-[2rem] bg-[#064d35] p-8 text-center shadow-2xl">
      <p className="text-2xl font-black text-[#d6b26d]">
        Prevenir é sempre mais estratégico e econômico do que remediar.
      </p>
    </div>

  </div>
</section>
<section className="bg-white px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
        Metodologia
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-5xl">
        Como funciona a implementação?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        Uma jornada estruturada para adequação à NR-1, redução de riscos
        psicossociais e fortalecimento da cultura organizacional.
      </p>
    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          numero: "01",
          titulo: "Diagnóstico Inicial",
          texto: "Mapeamento da realidade da empresa, estrutura organizacional e riscos existentes."
        },
        {
          numero: "02",
          titulo: "Avaliação Psicossocial",
          texto: "Identificação dos fatores de risco que impactam a saúde mental dos colaboradores."
        },
        {
          numero: "03",
          titulo: "Plano de Ação",
          texto: "Definição de estratégias preventivas, corretivas e de desenvolvimento organizacional."
        },
        {
          numero: "04",
          titulo: "Implementação",
          texto: "Aplicação das ações planejadas junto às lideranças e equipes."
        },
        {
          numero: "05",
          titulo: "Monitoramento",
          texto: "Acompanhamento contínuo dos indicadores e resultados obtidos."
        },
        {
          numero: "06",
          titulo: "Cultura Sustentável",
          texto: "Consolidação de práticas que promovam bem-estar, segurança e produtividade."
        }
      ].map((etapa) => (
        <div
          key={etapa.numero}
          className="rounded-[2rem] border border-[#d6b26d]/30 bg-[#f8f6f2] p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <p className="text-6xl font-black text-[#d6b26d]">
            {etapa.numero}
          </p>

          <h3 className="mt-6 text-2xl font-black text-[#064d35]">
            {etapa.titulo}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {etapa.texto}
          </p>
        </div>
      ))}

    </div>

    <div className="mt-16 rounded-[2rem] bg-[#064d35] p-8 text-center shadow-2xl">
      <p className="text-2xl font-black text-[#d6b26d]">
        Conformidade + Prevenção + Cultura = Resultados Sustentáveis
      </p>
    </div>

  </div>
</section>

<section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
          Soluções Corporativas
        </p>

        <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-5xl">
          Serviços oferecidos
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Soluções completas para empresas que desejam se adequar à NR-1,
          prevenir riscos psicossociais e fortalecer a saúde mental no ambiente
          corporativo.
        </p>
      </div>

      <div className="rounded-[2rem] bg-[#064d35] p-8 text-white shadow-2xl">
        <p className="text-2xl font-black text-[#d6b26d]">
          Uma abordagem técnica, humana e estratégica.
        </p>

        <p className="mt-5 leading-8 text-white/85">
          Cada solução é adaptada à realidade da empresa, considerando cultura,
          liderança, riscos identificados e necessidades organizacionais.
        </p>
      </div>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        "Diagnóstico de riscos psicossociais",
        "Avaliação do clima organizacional",
        "Plano de ação preventivo e corretivo",
        "Programas de saúde mental corporativa",
        "Capacitação de lideranças",
        "Prevenção ao burnout e estresse ocupacional",
        "Prevenção ao assédio moral e psicológico",
        "Relatórios e evidências de conformidade",
        "Acompanhamento e monitoramento contínuo",
      ].map((servico) => (
        <div
          key={servico}
          className="rounded-[2rem] bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-5 h-1 w-16 rounded-full bg-[#d6b26d]" />

          <p className="text-lg font-black text-[#064d35]">
            {servico}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-white px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
        Benefícios Estratégicos
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-5xl">
        O que sua empresa ganha com a implementação?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        A adequação à NR-1 fortalece a segurança jurídica, reduz riscos,
        melhora o clima organizacional e contribui para equipes mais saudáveis,
        produtivas e engajadas.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          titulo: "Conformidade Legal",
          texto: "Adequação às exigências da NR-1 com registros, ações e evidências organizacionais.",
        },
        {
          titulo: "Redução de Afastamentos",
          texto: "Prevenção de adoecimentos emocionais que impactam diretamente a operação.",
        },
        {
          titulo: "Mais Produtividade",
          texto: "Ambientes saudáveis favorecem foco, desempenho e colaboração entre equipes.",
        },
        {
          titulo: "Fortalecimento da Cultura",
          texto: "Construção de uma cultura corporativa mais humana, segura e sustentável.",
        },
        {
          titulo: "Retenção de Talentos",
          texto: "Colaboradores permanecem mais engajados em ambientes emocionalmente seguros.",
        },
        {
          titulo: "Reputação Corporativa",
          texto: "Empresas que cuidam de pessoas fortalecem sua marca empregadora no mercado.",
        },
      ].map((beneficio) => (
        <div
          key={beneficio.titulo}
          className="rounded-[2rem] border border-[#d6b26d]/30 bg-[#f8f6f2] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#064d35] text-2xl font-black text-[#d6b26d]">
            +
          </div>

          <h3 className="text-2xl font-black text-[#064d35]">
            {beneficio.titulo}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {beneficio.texto}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-16 rounded-[2rem] bg-[#064d35] p-10 text-center shadow-2xl">
      <p className="text-2xl font-black text-[#d6b26d]">
        Saúde mental corporativa não é custo. É estratégia de proteção,
        produtividade e crescimento.
      </p>
    </div>
  </div>
</section>
<section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
        Programas Corporativos
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-5xl">
        Soluções que geram transformação
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        Programas desenvolvidos para promover saúde mental,
        fortalecer lideranças e criar ambientes organizacionais
        mais seguros e produtivos.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2">
        <div className="text-5xl">🧠</div>

        <h3 className="mt-6 text-2xl font-black text-[#064d35]">
          Mente Segura
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Programa focado na prevenção dos riscos psicossociais e fortalecimento da saúde mental.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2">
        <div className="text-5xl">👥</div>

        <h3 className="mt-6 text-2xl font-black text-[#064d35]">
          Líderes que Cuidam
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Desenvolvimento de lideranças emocionalmente inteligentes e preparadas para cuidar de pessoas.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2">
        <div className="text-5xl">🌱</div>

        <h3 className="mt-6 text-2xl font-black text-[#064d35]">
          Bem-estar 360°
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Estratégias integradas para promover equilíbrio, qualidade de vida e produtividade.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2">
        <div className="text-5xl">🎯</div>

        <h3 className="mt-6 text-2xl font-black text-[#064d35]">
          Escuta Ativa
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Estruturação de canais de acolhimento e escuta para fortalecer a cultura organizacional.
        </p>
      </div>

    </div>

    <div className="mt-16 rounded-[2rem] bg-[#064d35] p-10 text-center shadow-2xl">
      <p className="text-2xl font-black text-[#d6b26d]">
        Programas personalizados para a realidade da sua empresa.
      </p>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/85">
        Cada organização possui desafios únicos. Por isso, as soluções são
        construídas de forma estratégica, considerando cultura,
        liderança, equipe e objetivos empresariais.
      </p>
    </div>

  </div>
</section>
<section className="bg-[#06291f] px-6 py-24 text-white md:px-12 lg:px-20">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
    <div>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d6b26d]">
        Vamos agir agora?
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
        Prepare sua empresa para a NR-1 com estratégia, cuidado e segurança.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
        Entre em contato para estruturar uma implementação personalizada,
        alinhada à realidade da sua empresa e às exigências da nova NR-1.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="https://wa.me/5527988775979"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-[#d6b26d] px-8 py-4 text-center text-lg font-black text-[#064d35] shadow-lg transition hover:scale-105"
        >
          Solicitar diagnóstico inicial
        </a>

        <a
          href="mailto:ibmleal@gmail.com"
          className="rounded-2xl border border-[#d6b26d] px-8 py-4 text-center text-lg font-black text-[#d6b26d] transition hover:bg-[#d6b26d] hover:text-[#064d35]"
        >
          Enviar e-mail
        </a>
      </div>
    </div>

    <div className="rounded-[2rem] border border-[#d6b26d]/40 bg-[#0b3b2c] p-10 shadow-2xl">
      <h3 className="text-4xl font-black text-[#d6b26d]">
        Jaqueline Leal
      </h3>

      <p className="mt-3 text-xl font-semibold text-white">
        Psicanalista Clínica
      </p>

      <p className="mt-2 text-white/70">
        CRP 000000514
      </p>

      <div className="my-8 h-px bg-[#d6b26d]/30" />

      <p className="text-lg leading-8 text-white/85">
        “Auxiliando empresas na construção de ambientes emocionalmente seguros,
        produtivos e sustentáveis.”
      </p>

      <div className="mt-8 space-y-3 text-white/80">
        <p>📞 (27) 98877-5979</p>
        <p>✉️ ibmleal@gmail.com</p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}