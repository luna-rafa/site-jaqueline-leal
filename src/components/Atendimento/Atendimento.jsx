export default function Atendimento() {
  const etapas = [
    {
      numero: "01",
      titulo: "Primeiro contato",
      texto: "Você entra em contato pelo WhatsApp para tirar dúvidas, entender os horários disponíveis e receber as primeiras orientações.",
    },
    {
      numero: "02",
      titulo: "Primeira sessão",
      texto: "Um momento inicial de escuta acolhedora para compreender sua história, suas dores e o que você busca transformar.",
    },
    {
      numero: "03",
      titulo: "Processo terapêutico",
      texto: "A jornada acontece com escuta, análise, reflexão e construção de consciência sobre emoções, padrões e escolhas.",
    },
    {
      numero: "04",
      titulo: "Autoconhecimento",
      texto: "O objetivo é fortalecer sua identidade, ampliar sua clareza emocional e apoiar sua caminhada de transformação.",
    },
  ];

  return (
    <section
      id="atendimento"
      className="bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            Atendimento clínico
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-6xl">
            Como funciona o atendimento?
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-700">
            O atendimento é um espaço de escuta, acolhimento e construção
            emocional, pensado para ajudar você a compreender sua história,
            elaborar dores e desenvolver uma relação mais consciente consigo
            mesma.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="rounded-[2rem] border border-[#d6b26d]/40 bg-[#f8f6f2] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <p className="text-5xl font-black text-[#d6b26d]">
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

        <div className="mt-16 rounded-[2rem] bg-[#064d35] p-10 text-center shadow-2xl">
          <p className="text-2xl font-semibold italic text-[#d6b26d]">
            “Você não precisa ter todas as respostas para começar. Basta dar o
            primeiro passo.”
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            O processo terapêutico é construído com respeito ao seu tempo, à sua
            história e às suas necessidades emocionais.
          </p>

          <a
            href="https://wa.me/5527996388960"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-2xl bg-[#d6b26d] px-8 py-4 text-lg font-bold text-[#064d35] shadow-lg transition hover:scale-105"
          >
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}