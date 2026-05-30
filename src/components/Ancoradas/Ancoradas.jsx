export default function Ancoradas() {
  return (
    <section
      id="ancoradas"
      className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            Projeto Ancoradas
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#064d35] md:text-6xl">
            Mulheres fortalecidas pela fé, propósito e identidade
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-700">
            O Projeto Ancoradas nasceu com o propósito de acolher, fortalecer e
            conduzir mulheres em uma jornada de autoconhecimento,
            desenvolvimento emocional e crescimento espiritual.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2">
            <div className="text-5xl">⚓</div>

            <h3 className="mt-6 text-2xl font-black text-[#064d35]">
              Identidade
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Auxiliar mulheres a reconhecerem seu valor, sua história e sua
              verdadeira identidade.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2">
            <div className="text-5xl">❤️</div>

            <h3 className="mt-6 text-2xl font-black text-[#064d35]">
              Cura Emocional
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Um espaço seguro para acolher dores, restaurar emoções e
              reconstruir caminhos.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2">
            <div className="text-5xl">✨</div>

            <h3 className="mt-6 text-2xl font-black text-[#064d35]">
              Propósito
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Incentivar mulheres a viverem com mais confiança, direção e
              propósito em todas as áreas da vida.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[2rem] bg-[#064d35] p-10 text-center shadow-2xl">

          <p className="text-2xl font-semibold italic text-[#d6b26d]">
            "Uma mulher ancorada em sua identidade é capaz de atravessar qualquer tempestade."
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Se você deseja conhecer mais sobre o Projeto Ancoradas ou participar
            dessa jornada de fortalecimento emocional, entre em contato.
          </p>

          <a
  href="https://wa.me/5527996388960"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center rounded-2xl bg-[#d6b26d] px-8 py-4 text-lg font-bold text-[#064d35] shadow-lg transition hover:scale-105"
>
  Iniciar minha jornada
</a>

        </div>

      </div>
    </section>
  );
}