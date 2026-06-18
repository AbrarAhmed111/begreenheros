import { Link } from "react-router-dom";
import { Quote } from "../components/ui/Quote";

export default function Bgh() {
  return (
    <section className="mx-auto max-w-content px-2 py-6 sm:p-8">
      <Quote>Sustainability requires shared knowledge</Quote>
      <h1 className="my-10 text-center text-3xl font-bold">Overview of BGH operations that matter to you</h1>
      <div className="flex flex-col items-center gap-5"><Link to="/bgh/official-documents" className="transition hover:scale-[1.02]"><img src="/img/bgh/official-doc.png" alt="Official BGH documents" className="max-w-full" /></Link><Link to="/brand-assets" className="transition hover:scale-[1.02]"><img src="/img/bgh/brand-assets.png" alt="BGH brand assets" className="max-w-full" /></Link>{[["personnel.png", "Personnel"], ["admin-control.png", "Admin Control"]].map(([image, label]) => <div key={image} className="relative cursor-not-allowed opacity-90"><img src={`/img/bgh/${image}`} alt={label} className="max-w-full" /><span className="absolute right-4 top-4 rounded-pill bg-green px-3 py-1 text-xs font-bold text-white shadow">Coming Soon</span></div>)}</div>
    </section>
  );
}

