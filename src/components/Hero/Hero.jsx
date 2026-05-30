import jak from "../../assets/images/jak.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#064d35] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#d6b26d]">
            Psicanalista Clínica
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Jaqueline Leal
          </h1>

          <h2 className="mt-5 text-3xl font-bold text-[#d6b26d] md:text-4xl">
            Cuidando de pessoas com escuta, propósito e acolhimento.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
            Capixaba de origem, esposa, mãe, pastora há mais de 18 anos e
            psicanalista clínica, Jaqueline une sua experiência de vida à sua
            vocação: cuidar de pessoas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a className="rounded-2xl bg-[#d6b26d] px-6 py-4 text-center font-bold text-[#064d35] transition hover:scale-105">
              Método Mulher Ancoradas
            </a>

            <a className="rounded-2xl border border-[#d6b26d] px-6 py-4 text-center font-bold text-[#d6b26d] transition hover:bg-[#d6b26d] hover:text-[#064d35]">
              Como funciona o atendimento
            </a>

            <a
              href="/nr1-empresas"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-6 py-4 text-center font-bold text-[#064d35] transition hover:scale-105"
            >
              NR-1 para Empresas
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#d6b26d] opacity-30 blur-2xl" />

            <img
              src={jak}
              alt="Jaqueline Leal"
              className="relative w-[320px] rounded-[2rem] border-4 border-[#d6b26d] object-cover shadow-2xl md:w-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}