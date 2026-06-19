import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { AssetDetailPageProps } from "../../types/models";
import { Quote } from "./Quote";

export default function AssetDetailPage({ asset }: AssetDetailPageProps) {
  return (
    <section className="mx-auto max-w-content px-2 py-6 sm:p-8">
      <Quote>Sustainability requires shared knowledge</Quote>
      <h1 className="my-7 text-center text-[29px] font-bold sm:text-4xl md:text-[53px]">Brand Assets</h1>
      <div className="grid items-center gap-8 md:grid-cols-[minmax(260px,42%)_1fr]">
        <img src={asset.image} alt={asset.title} className={`mx-auto max-h-[440px] w-full object-contain ${asset.circular ? "max-w-[390px] rounded-full" : ""}`} />
        <div>
          <h2 className="mb-5 text-3xl font-bold text-dull-green">{asset.title}</h2>
          {asset.sections.map((section, index) => <div key={`${section.heading ?? "overview"}-${index}`} className="mb-5">{section.heading && <h3 className="text-xl font-bold text-blue">{section.heading}:</h3>}<p className="mt-1">{section.body}</p></div>)}
        </div>
      </div>
      <p className="my-8 text-center text-sm italic">* For full details of the brand assets displayed on this page, including usage limitations, refer to BGH Brand Usage Guidelines (BBUS).</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/brand-assets" className="rounded-lg bg-blue px-5 py-2.5 font-semibold text-white transition hover:scale-105">Previous</Link>
        <a href={asset.image} download className="flex items-center gap-2 rounded-lg bg-blue px-5 py-2.5 font-semibold text-white transition hover:scale-105"><FaDownload /> Download PNG File</a>
      </div>
    </section>
  );
}

