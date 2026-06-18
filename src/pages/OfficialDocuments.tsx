import { Quote } from "../components/ui/Quote";
import { officialDocuments } from "../utils/content";

export default function OfficialDocuments() {
  return (
    <section className="mx-auto max-w-[1500px] px-2 py-6 sm:p-8"><Quote>Sustainability begins with collective learning</Quote><h1 className="my-10 text-center text-3xl font-bold">Learn everything about BGH from A to Z</h1><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{officialDocuments.map(([file, image, title]) => <a key={file} href={`/pdf/BGH/${file}`} download className="group rounded-mission bg-white p-3 shadow-md transition hover:-translate-y-1 hover:shadow-card"><img src={`/img/bgh/official-docs/${image}`} alt={`${title} document cover`} className="h-full max-h-[520px] w-full rounded-lg object-cover" /></a>)}</div></section>
  );
}

