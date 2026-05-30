export default function Expectativas() {
  const itens = [
    {
      titulo: "Escuta acolhedora",
      texto: "Um espaço seguro para falar sobre dores, conflitos, dúvidas e emoções sem julgamentos.",
    },
    {
      titulo: "Clareza emocional",
      texto: "Compreensão dos padrões, sentimentos e comportamentos que se repetem na sua história.",
    },
    {
      titulo: "Autoconhecimento",
      texto: "Reconexão com sua identidade, seus limites, suas escolhas e sua forma de se posicionar no mundo.",
    },
    {
      titulo: "Construção interior",
      texto: "Um processo gradual de fortalecimento emocional para viver com mais consciência e propósito.",
    },
  ];

  return (
    <section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            O que esperar da terapia
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-6xl">
            Um processo de escuta, consciência e transformação
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-700">
            A terapia é uma jornada de cuidado emocional. Não se trata de ter
            respostas prontas, mas de construir, passo a passo, mais clareza,
            consciência e força para lidar com sua própria história.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {itens.map((item) => (
            <div
              key={item.titulo}
              className="rounded-[2rem] bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 h-1 w-16 rounded-full bg-[#d6b26d]" />

              <h3 className="text-2xl font-black text-[#064d35]">
                {item.titulo}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#d6b26d]/40 bg-white p-10 text-center shadow-xl">
          <p className="text-2xl font-semibold text-[#064d35]">
            Terapia é um lugar para se ouvir com mais verdade.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            É um processo para olhar para dentro, compreender suas dores e
            reconstruir caminhos com mais maturidade emocional.
          </p>
        </div>
      </div>
    </section>
  );
}