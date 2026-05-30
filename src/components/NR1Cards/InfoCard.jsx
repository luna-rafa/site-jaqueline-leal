export default function InfoCard({ title, text, icon }) {
  return (
    <div className="group rounded-[28px] border border-[#d6b26d]/30 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#064d35] text-2xl text-[#d6b26d]">
        {icon}
      </div>

      <h3 className="text-xl font-black uppercase leading-tight text-[#064d35]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {text}
      </p>

      <div className="mt-6 h-1 w-14 rounded-full bg-[#d6b26d] transition-all duration-300 group-hover:w-24" />
    </div>
  );
}