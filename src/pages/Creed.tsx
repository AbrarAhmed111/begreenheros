import { Link } from "react-router-dom";

const creedLines = [
    <>
        We reject <strong>superficial sustainability</strong>.
    </>,
    <>
        We reject <strong>misinformation</strong>.
    </>,
    <>
        We create <strong>knowledge as renewable energy</strong> on Earth.
    </>,
    <>
        We are <strong>the informed generation</strong>.
    </>,
    <>
        We are <strong>the green revolution</strong>.
    </>,
] as const;

export default function Creed() {
    return (
        <section className="mx-auto max-w-content px-2 py-6 sm:p-8">
            <h1 className="mb-8 text-center text-[32px] font-bold text-body sm:text-[40px] md:text-[48px]">
                Green Heroes Creed
            </h1>

            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
                <img
                    src="/img/bgh-heros.png"
                    alt="Be Green Heroes characters"
                    className="mx-auto max-h-[260px] w-full max-w-[320px] object-contain sm:max-h-[300px] md:max-h-none md:max-w-full"
                />

                <div className="space-y-4 text-center text-lg leading-relaxed text-body sm:space-y-5 sm:text-xl md:text-2xl">
                    {creedLines.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>

            <div className="mt-10 text-center">
                <Link
                    to="/home"
                    className="rounded-lg bg-blue px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
                >
                    Previous
                </Link>
            </div>
        </section>
    );
}
