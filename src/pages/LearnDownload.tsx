import { FormEvent, useState } from "react";
import { FaDownload, FaLock, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { Quote } from "../components/ui/Quote";
import { languageDocuments } from "../utils/content";

export default function LearnDownload() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info("Static chapter download form submitted", new FormData(event.currentTarget));
    if (selectedFile) window.location.href = `/pdf/BGH/${selectedFile}`;
    setSelectedFile(null);
  };

  return (
    <section className="mx-auto max-w-[1500px] px-2 py-6 sm:p-8">
      <Quote>Sustainability begins with collective learning</Quote>
      <h1 className="mt-10 text-center text-3xl font-bold">Download Chapter I of BE GREEN HEROES for free</h1>
      <h2 className="mt-4 text-center text-2xl">Different Language Versions</h2>
      <div className="my-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">{languageDocuments.map(([language, image, file]) => <article key={language} className="rounded-lg border border-gray-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:shadow-lg"><h3 className="mb-3 text-2xl font-bold">{language}</h3><img src={`/img/Learn/${image}`} alt={`${language} Chapter I book cover`} className="h-[500px] w-full rounded object-cover" /><button type="button" onClick={() => setSelectedFile(file)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-dull-green p-3 font-semibold text-white transition hover:bg-hover-green"><FaDownload /> Download PDF</button></article>)}</div>
      <p className="text-center italic text-blue">* Other language versions will be made available at a later date</p>
      <Link to="/learn" className="mt-6 inline-block rounded-lg bg-blue px-5 py-2.5 font-semibold text-white">Previous</Link>

      <Modal
        open={Boolean(selectedFile)}
        labelledBy="download-title"
        panelClassName="relative max-w-lg overflow-hidden rounded-mission bg-white shadow-modal"
      >
        <div className="rounded-t-mission bg-gradient-to-br from-dull-blue to-green p-6 text-white">
          <button
            type="button"
            onClick={() => setSelectedFile(null)}
            className="absolute right-4 top-4 p-2"
            aria-label="Close download form"
          >
            <FaTimes />
          </button>
          <h2 id="download-title" className="text-2xl font-bold">
            Download Chapter
          </h2>
          <p>Enter your details to continue</p>
        </div>
        <form onSubmit={submit} className="space-y-4 p-6">
          <label className="block font-semibold">
            Full Name
            <input
              required
              name="name"
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 font-normal"
            />
          </label>
          <label className="block font-semibold">
            Email Address
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 font-normal"
            />
          </label>
          <p className="flex gap-2 rounded-xl bg-light-muted p-4 text-sm text-navy">
            <FaLock className="mt-1 shrink-0" /> Your information is safe. We only use it to track
            downloads and improve resources.
          </p>
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" onClick={() => setSelectedFile(null)}>
              Cancel
            </Button>
            <Button type="submit">Continue Download</Button>
          </div>
        </form>
      </Modal>
    </section>
  );
}

