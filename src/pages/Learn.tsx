import { Link } from "react-router-dom";
import { Quote } from "../components/ui/Quote";

export default function Learn() {
  return (
    <section className="p-2 py-6 sm:p-10">
      <Quote>Those who study, shape the future</Quote>
      <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-2 md:gap-0">
        <article className="text-center md:pr-5">
          <h2 className="mb-5 text-3xl font-bold">
            Download Chapter I of
            <br />
            BE GREEN HEROES for free
          </h2>
          <Link to="/learn/download">
            <img
              src="/img/Learn/english-cover-learn.png"
              alt="BE GREEN HEROES Chapter I English cover"
              className="mx-auto max-h-[550px] w-full object-contain transition hover:scale-[1.02]"
            />
          </Link>
        </article>
        <article className="text-center md:border-l md:border-black md:pl-5">
          <h2 className="mb-5 text-3xl font-bold">
            Download Case Study:
            <br />
            Plastic Degradation Myth for free
          </h2>
          <Link to="/learn/case-study">
            <img
              src="/img/Learn/case-study.png"
              alt="Plastic Degradation Myth case study cover"
              className="mx-auto max-h-[550px] w-full object-contain transition hover:scale-[1.02]"
            />
          </Link>
        </article>
      </div>
    </section>
  );
}

