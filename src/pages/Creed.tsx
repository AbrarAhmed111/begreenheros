import { Link } from "react-router-dom";

export default function Creed() {
  return (
    <section className="mx-auto max-w-content px-2 py-6 sm:p-8">
      <h1 className="mb-8 text-center text-[32px] font-bold sm:text-[40px] md:text-[64px]">Green Heroes Creed</h1>
      <div className="grid items-center gap-8 md:grid-cols-2"><img src="/img/bgh-heros.png" alt="Be Green Heroes characters" className="w-full object-contain" /><div className="space-y-5 text-lg sm:text-xl md:text-[28px]"><p>We reject <strong>superficial sustainability</strong>.</p><p>We reject <strong>misinformation</strong>.</p><p>We create <strong>knowledge as renewable energy</strong> on Earth.</p><p>We are <strong>the informed generation</strong>.</p><p>We are <strong>the green revolution</strong>.</p></div></div>
      <div className="mt-8 text-center"><Link to="/home" className="rounded-lg bg-blue px-5 py-2.5 font-semibold text-white">Previous</Link></div>
    </section>
  );
}
