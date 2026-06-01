export default function FAQ() {
  const perguntas = [
    {
      pergunta: "Como funciona?",
      resposta:
        "O atendimento é um espaço seguro de escuta, acolhimento e autoconhecimento. Juntas, vamos identificar desafios, compreender emoções e construir caminhos mais saudáveis para sua vida.",
    },
    {
      pergunta: "É online?",
      resposta:
        "Sim. Os atendimentos podem acontecer online ou presencialmente, de acordo com a sua necessidade e disponibilidade.",
    },
    {
      pergunta: "Preciso falar da minha vida toda?",
      resposta:
        "Não. Você compartilha no seu tempo e apenas aquilo que se sentir confortável para falar. Cada processo tem seu ritmo.",
    },
    {
      pergunta: "Quanto tempo dura?",
      resposta:
        "Cada sessão dura aproximadamente 50 a 60 minutos. A frequência é definida de acordo com a sua necessidade e objetivos.",
    },
    {
      pergunta: "O que acontece na primeira sessão?",
      resposta:
        "Na primeira conversa, vou conhecer sua história, entender suas necessidades e alinhar com você os objetivos do acompanhamento. É um momento de acolhimento e direcionamento.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            Dúvidas Frequentes
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-5xl">
            Perguntas que você pode ter
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {perguntas.map((item) => (
            <div
              key={item.pergunta}
              className="rounded-[2rem] border border-[#d6b26d]/30 bg-[#f8f6f2] p-8 shadow-lg"
            >
              <h3 className="text-2xl font-black text-[#064d35]">
                {item.pergunta}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.resposta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
