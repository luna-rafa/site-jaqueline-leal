export default function Contato() {
  return (
    <section className="bg-[#064d35] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
          Contato
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Dê o primeiro passo para cuidar de você
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/85">
          Se você sente que precisa de acolhimento, escuta e um espaço seguro
          para compreender sua história, entre em contato e saiba como iniciar
          sua jornada terapêutica.
        </p>

        {/* Botões */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="https://wa.me/5527996388960"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#d6b26d] px-8 py-4 text-lg font-bold text-[#064d35] shadow-lg transition hover:scale-105"
          >
            Agendar atendimento
          </a>

          <a
            href="mailto:ibmleal@gmail.com"
            className="rounded-2xl border border-[#d6b26d] px-8 py-4 text-lg font-bold text-[#d6b26d] transition hover:bg-[#d6b26d] hover:text-[#064d35]"
          >
            Enviar e-mail
          </a>

        </div>

        {/* Informações rápidas */}
        <div className="mt-8 flex flex-col items-center gap-2 text-white/80">
          
        </div>

        {/* Card Profissional */}
        <div className="mt-14 rounded-[2rem] border border-[#d6b26d]/40 bg-[#0b3b2c] p-10 shadow-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            Atendimento Clínico
          </p>

          <h3 className="mt-4 text-3xl font-black text-white">
            Jaqueline Leal
          </h3>

          <p className="mt-2 text-lg font-medium text-[#d6b26d]">
            Psicanalista Clínica
          </p>

          <p className="mt-2 text-sm tracking-wider text-white/70">
            CRP 000000514
          </p>

          <div className="mx-auto mt-8 h-px max-w-md bg-[#d6b26d]/30" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/85">
            Meu compromisso é oferecer um espaço seguro de escuta,
            acolhimento e reflexão, auxiliando cada pessoa a compreender
            sua história, fortalecer sua identidade e construir novos caminhos.
          </p>

          <p className="mt-8 text-xl italic text-[#d6b26d]">
            "Toda transformação começa quando você decide olhar para si."
          </p>

        </div>

      </div>
    </section>
  );
}