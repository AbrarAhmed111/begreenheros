import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { HeroDetailPageProps } from "../../types/models";
import { Quote } from "./Quote";

export default function HeroDetailPage({ hero }: HeroDetailPageProps) {
  return (
    <section className="mx-auto max-w-content px-2 py-6 sm:p-8">
      <Quote>Sustainability requires shared knowledge</Quote>
      <h1 className="my-7 text-center text-[29px] font-bold sm:text-4xl md:text-[53px]">Our faces and representatives</h1>
      <div className="grid items-center gap-8 md:grid-cols-[minmax(260px,42%)_1fr]">
        <img src={hero.image} alt={`${hero.name}, ${hero.role}`} className="mx-auto max-h-[560px] w-full object-contain" />
        <div>
          <h2 className="text-4xl font-bold text-dull-green">{hero.symbol} {hero.name}</h2>
          <h3 className="mt-3 text-2xl font-bold text-blue">Role: {hero.role}</h3>
          <h4 className="mt-6 text-xl font-bold">Descriptor:</h4>
          <p className="mt-2">{hero.descriptor}</p>
          <h4 className="mt-6 text-xl font-bold">Used in contexts:</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6">{hero.contexts.map((context) => <li key={context}>{context}</li>)}</ul>
        </div>
      </div>
      <p className="my-8 text-center text-sm italic">* For full details of the brand assets displayed on this page, including usage limitations, refer to BGH Brand Usage Guidelines (BBUS).</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/brand-assets" className="rounded-lg bg-blue px-5 py-2.5 font-semibold text-white transition hover:scale-105">Previous</Link>
        <a href={hero.image} download className="flex items-center gap-2 rounded-lg bg-green px-5 py-2.5 font-semibold text-white transition hover:scale-105"><FaDownload /> Download PNG File</a>
      </div>
    </section>
  );
}

