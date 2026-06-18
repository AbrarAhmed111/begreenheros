import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Quote } from "../components/ui/Quote";

export default function CaseStudy() {
  return (
    <section className="mx-auto max-w-content px-2 py-6 text-center sm:p-8">
      <Quote>Sustainability begins with collective learning</Quote>
      <h1 className="mt-10 text-3xl font-bold">Download Case Study: Recycled Fiber of The AI Planet</h1>
      <h2 className="mt-4 text-2xl">Available in English*</h2>
      <img src="/img/Learn/case-study.png" alt="Recycled Fiber of The AI Planet case study" className="mx-auto my-6 max-h-[650px] w-full object-contain transition hover:scale-[1.02]" />
      <a href="/pdf/BGH/51 The AI Planet Case Study 1 Plastic Decomposition FINAL.pdf" download className="mx-auto inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 font-semibold text-white"><FaDownload /> Download PDF</a>
      <p className="my-6 italic text-blue">* Other language versions will be made available at a later date</p>
      <Link to="/learn" className="inline-block rounded-lg bg-blue px-5 py-2.5 font-semibold text-white">Previous</Link>
    </section>
  );
}

