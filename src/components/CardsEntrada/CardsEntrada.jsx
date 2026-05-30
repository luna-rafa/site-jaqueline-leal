export default function CardsEntrada() {
  const cards = [
    {
      titulo: "Método Mulher Ancorada ",
      descricao:
        "A Jornada da Mulher Ancorada transforma feridas em aprendizado, inseguranças em força e sobrevivência em propósito, ajudando mulheres a se tornarem emocionalmente preparadas para viver a plenitude de quem realmente são.",
      botao: "Conhecer o método",
      link: "#ancoradas",
    },
    {
      titulo: "Como funciona o atendimento",
      descricao:
        "Entenda como acontece o processo terapêutico, o que esperar e como iniciar sua jornada.",
      botao: "Ver atendimento",
      link: "#atendimento",
    },
    {
      titulo: "NR-1 para Empresas",
      descricao:
        "Soluções corporativas para saúde mental, riscos psicossociais e ambientes emocionalmente seguros.",
      botao: "Acessar NR-1",
      link: "https://site-nr1-jaqueline.vercel.app/",
    },
  ];

  return (
    <section className="bg-[#064d35] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            Caminhos de cuidado
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Escolha por onde começar
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Cada jornada possui um ponto de partida. Conheça os caminhos de
            cuidado, acolhimento e transformação oferecidos por Jaqueline Leal.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.titulo}
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : undefined}
              rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-[2rem] border border-[#d6b26d]/40 bg-[#0b3b2c] p-8 shadow-xl transition hover:-translate-y-2 hover:bg-[#0f4a37]"
            >
              <div className="mb-6 h-1 w-16 rounded-full bg-[#d6b26d] transition group-hover:w-28" />

              <h3 className="text-2xl font-black text-[#d6b26d]">
                {card.titulo}
              </h3>

              <p className="mt-5 min-h-[120px] leading-8 text-white/80">
                {card.descricao}
              </p>

              <span className="mt-6 inline-block rounded-2xl bg-[#d6b26d] px-5 py-3 font-bold text-[#064d35]">
                {card.botao}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}