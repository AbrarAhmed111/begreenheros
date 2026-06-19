import { Link } from "react-router-dom";
import { Quote } from "../components/ui/Quote";

const heroLinks = [["mia", "mia.png"], ["elio", "elio.png"], ["lina", "lina.png"], ["niko", "niko.png"]] as const;
const marketMarks = [["mc", "mc.jpeg"], ["mcc", "mcc.jpeg"], ["mco", "mco.jpeg"]] as const;
const utilityMarks = [["uc", "uc.jpeg"], ["muc", "muc.jpeg"], ["puc", "puc.jpeg"], ["vuc", "vuc.jpeg"]] as const;

export default function BrandAssets() {
  return (
    <section className="mx-auto max-w-content px-2 py-6 text-center sm:p-8"><Quote>Sustainability requires shared knowledge</Quote><h1 className="my-7 text-[32px] font-bold sm:text-[40px] md:text-[64px]">Brand Assets</h1>
      <div className="mx-auto flex max-w-5xl items-end justify-center px-2 py-7">{heroLinks.map(([name, image]) => <Link key={name} to={`/hero-${name}`} className="flex-1 transition hover:-translate-y-2"><img src={`/img/${image}`} alt={`${name} character`} className="max-h-[360px] w-full object-contain" /></Link>)}</div>
      <Link to="/asset-bgh"><img src="/img/bgh-logo.jpeg" alt="BGH circular emblem" className="mx-auto h-[150px] w-[150px] rounded-full object-cover transition hover:scale-105" /></Link><p className="mt-3 text-sm italic">* For complete usage limitations, refer to BGH Brand Usage Guidelines (BBUS).</p>
      <h2 className="mb-6 mt-12 text-3xl font-bold">Lettermarks</h2><div className="flex flex-wrap items-center justify-center gap-8">{[1, 2, 3].map((number) => <Link key={number} to={`/asset-bgh-${number}`}><img src={`/img/bgh-${number}.png`} alt={`BGH lettermark ${number}`} className="max-h-[180px] max-w-[220px] object-contain transition hover:scale-105" /></Link>)}</div>
      <div className="my-16 grid gap-10 md:grid-cols-2"><div><h3 className="mb-5 text-2xl font-bold">Token-Optimized</h3><Link to="/asset-g-token"><img src="/img/g-leaf-logo.png" alt="Token-optimized BGH coin symbol" className="mx-auto max-h-[260px] object-contain transition hover:scale-105" /></Link></div><div className="md:border-l md:border-gray-300"><h3 className="mb-5 text-2xl font-bold">Ecosystem Coin Symbol<br />(Non-Token)</h3><Link to="/asset-g-non-token"><img src="/img/G-logo.jpeg" alt="Non-token BGH ecosystem coin symbol" className="mx-auto max-h-[260px] rounded-full object-contain transition hover:scale-105" /></Link></div></div>
      <div className="grid gap-10 md:grid-cols-2"><div><h3 className="mb-6 text-2xl font-bold">Market Coin (MC) Marks</h3><div className="grid grid-cols-2 gap-5">{marketMarks.map(([slug, image]) => <Link key={slug} to={`/asset-${slug}`}><img src={`/img/${image}`} alt={`${slug} mark`} className="mx-auto max-h-[190px] rounded-full object-contain transition hover:scale-105" /></Link>)}</div></div><div className="md:border-l md:border-gray-300"><h3 className="mb-6 text-2xl font-bold">Utility Coin (UC) Marks</h3><div className="grid grid-cols-2 gap-5">{utilityMarks.map(([slug, image]) => <Link key={slug} to={`/asset-${slug}`}><img src={`/img/${image}`} alt={`${slug} mark`} className="mx-auto max-h-[190px] rounded-full object-contain transition hover:scale-105" /></Link>)}</div></div></div>
    </section>
  );
}

