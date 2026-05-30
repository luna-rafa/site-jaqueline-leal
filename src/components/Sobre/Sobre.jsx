export default function Sobre() {
  const cards = [
    {
      numero: "18+",
      titulo: "anos de ministério pastoral",
      texto: "Vivência no cuidado, acolhimento e orientação de pessoas.",
    },
    {
      numero: "01",
      titulo: "Psicanalista Clínica",
      texto: "Atuação voltada à escuta, análise e autoconhecimento.",
    },
    {
      numero: "100%",
      titulo: "atendimento humanizado",
      texto: "Olhar acolhedor para histórias, dores e processos individuais.",
    },
    {
      numero: "∞",
      titulo: "propósito",
      texto: "Auxiliar pessoas na reconstrução de suas jornadas emocionais.",
    },
  ];

  return (
    <section className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            Sobre
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-6xl">
            Sobre Jaqueline Leal
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Capixaba de origem, Jaqueline Leal é uma mulher que transborda
            propósito. Esposa, mãe, pastora há mais de 18 anos e psicanalista
            clínica, ela une sua experiência de vida à sua vocação: cuidar de
            pessoas.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Com um olhar acolhedor e uma escuta transformadora, Jaqueline ajuda
            pessoas a reconstruírem suas jornadas através da análise, da terapia
            e do autoconhecimento.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Sua missão é iluminar caminhos, revelando a identidade real de cada
            indivíduo. Se você busca transformação de dentro para fora, ela está
            aqui para te guiar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.titulo}
              className="rounded-[2rem] border border-[#d6b26d]/40 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-5xl font-black text-[#d6b26d]">
                {card.numero}
              </p>

              <h3 className="mt-4 text-xl font-black text-[#064d35]">
                {card.titulo}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {card.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}