import {
    FaBullhorn,
    FaCheck,
    FaFileAlt,
    FaGlobe,
    FaInfo,
    FaLeaf,
    FaTrophy,
    FaUsers,
} from "react-icons/fa";
import { useModal } from "../hooks/useModal";

const awards = [
    {
        place: "2nd Place",
        prize: "$2000",
        detail: "+ Certificate for 3,000 GHC tokens",
        icon: FaTrophy,
    },
    {
        place: "1st Place",
        prize: "$3500",
        detail: "+ Certificate for 5,000 GHC tokens",
        icon: FaTrophy,
    },
    {
        place: "3rd Place",
        prize: "$1000",
        detail: "+ Certificate for 2,000 GHC tokens",
        icon: FaTrophy,
    },
    {
        place: "Media Choice",
        prize: "",
        detail: "Certificate for 1,000 GHC tokens",
        icon: FaBullhorn,
    },
    {
        place: "Public Choice",
        prize: "",
        detail: "Certificate for 1,000 GHC tokens",
        icon: FaUsers,
    },
];

const timeline = [
    ["September 28th – October 2nd, 2026", "Info Session (Part 1)", FaInfo],
    ["October 9, 2026", "Registration deadline", FaFileAlt],
    ["October 12th – 16th, 2026", "Info Session (Part 2)", FaInfo],
    ["October 30th, 2026", "Submissions Due", FaFileAlt],
    ["November 1st – 15th, 2026", "Judging period", FaCheck],
    ["To be Determined", "Winners Announced", FaTrophy],
] as const;

export default function Itsc() {
    const { openRegister } = useModal();

    return (
        <section className="text-center">
            <div className="mx-auto max-w-[1200px] px-4 pt-5 sm:px-8 sm:pt-8">
                <div className="mb-6 flex justify-end sm:mb-10">
                    <button
                        type="button"
                        onClick={openRegister}
                        className="rounded-pill bg-gradient-to-r from-gradient-blue to-gradient-green px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105"
                    >
                        Register
                    </button>
                </div>

                <div className="mx-auto max-w-full space-y-5">
                    <h1 className="text-[28px] font-semibold leading-tight text-body sm:text-[36px] md:text-[61px]">
                        International True Sustainability Competition (ITSC)
                        2026
                    </h1>
                    <h2 className="text-[24px] font-semibold leading-snug text-dull-green sm:text-[28px] md:text-[38px]">
                        Uniting Visionaries for Environmental Stewardship
                    </h2>
                    <p className="mx-auto text-[base] leading-relaxed text-body sm:text-[20px]">
                        The ITSC is not just a competition; it&apos;s a global
                        classroom where participants delve into the pressing
                        environmental issues of our time, learn about the
                        pitfalls of greenwashing, and emerge with a solid
                        foundation in sustainable marketing strategies. Our
                        mission is clear: to imbue the public and next
                        generation of professionals with a sustainability-first
                        approach to their future endeavors.
                    </p>
                    <a
                        href="/pdf/ITSC 2026 Post Secondary Guideline Booklet FINALv1.pdf"
                        download
                        className="mt-2 inline-block rounded-lg bg-black px-8 py-8 text-[35px] font-semibold text-white transition hover:opacity-90"
                    >
                        Download ITSC 2026 Booklet
                    </a>
                </div>

                <div className="mt-16 grid gap-8 sm:mt-20 lg:grid-cols-2">
                    <article className="flex min-h-[400px] flex-col items-center justify-center rounded-mission bg-dull-green p-8 text-white sm:min-h-[440px] sm:p-10">
                        <FaGlobe className="mb-4 text-4xl" />
                        <h3 className="text-3xl font-semibold">
                            Worldwide Engagement
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed">
                            ITSC attracted participants from 120 countries and
                            704 post-secondary educational programs in 2024. This
                            global convergence of individuals and teams fostered a
                            dynamic exchange of ideas on sustainability, turning
                            the competition into a powerful platform for
                            innovation and forward-thinking solutions.
                        </p>
                    </article>
                    <article className="flex min-h-[400px] flex-col items-center justify-center rounded-mission bg-dull-green p-8 text-white sm:min-h-[440px] sm:p-10">
                        <FaLeaf className="mb-4 text-4xl" />
                        <h3 className="text-3xl font-semibold">
                            Environmental Science over Narratives and Hypes
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed">
                            BE GREEN HEROES platform provides valuable learning
                            opportunities on environmental science, expanding
                            knowledge beyond surface level perception and
                            fighting against widespread misinformation.
                        </p>
                    </article>
                </div>
            </div>

            <div className="-mx-4 mt-16 mb-12 flex min-h-[320px] flex-col items-center justify-between gap-6 bg-gradient-to-r from-gradient-blue to-gradient-green px-8 py-12 text-white sm:-mx-5 sm:mt-20 sm:px-12 sm:py-14 sm:mb-16 lg:min-h-[360px] lg:flex-row lg:items-center lg:gap-8 lg:py-16">
                <img
                    src="/img/itsc/networking.webp"
                    alt="Students networking"
                    className="w-full max-w-[180px] shrink-0 object-contain lg:max-w-[200px]"
                />
                <div className="w-full max-w-4xl flex-1">
                    <div className="text-left">
                        <h3 className="text-[28px] font-bold leading-tight text-dull-green sm:text-[32px]">
                            Networking Galore
                        </h3>
                        <p className="mt-2 text-lg leading-relaxed sm:text-xl">
                            The ITSC is a golden opportunity for participants to
                            forge connections with peers, discover potential
                            collaborators, and find mentors among the
                            sustainability elites. The relationships built here
                            span the globe and last a lifetime, fostering a
                            community committed to environmental stewardship.
                        </p>
                    </div>
                    <div className="mt-5 text-right sm:mt-6">
                        <h3 className="text-[28px] font-bold leading-tight text-dull-green sm:text-[32px]">
                            Awards for Innovation
                        </h3>
                        <p className="mt-2 text-lg leading-relaxed sm:text-xl">
                            Exceptional entries receive not only accolades but
                            also cash prizes, celebrating the teams that
                            brilliantly weave sustainability into their
                            narratives. These awards spotlight the innovators
                            and pioneers of tomorrow, showcasing their
                            contributions to a greener planet.
                        </p>
                    </div>
                </div>
                <img
                    src="/img/itsc/reward.webp"
                    alt="ITSC innovation reward"
                    className="hidden w-full max-w-[180px] shrink-0 object-contain lg:block lg:max-w-[200px]"
                />
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-6">
                {awards.map(({ place, prize, detail, icon: Icon }, index) => (
                    <article
                        key={place}
                        className={`rounded-mission p-7 text-white shadow-lg transition hover:-translate-y-2 bg-gradient-to-br from-gradient-blue to-gradient-green ${
                            index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                        }`}
                    >
                        <p className="text-xl">{place}</p>
                        <span className="mx-auto my-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 text-3xl text-black">
                            <Icon />
                        </span>
                        {prize && (
                            <h3 className="text-3xl font-bold">{prize}</h3>
                        )}
                        <p>{detail}</p>
                    </article>
                ))}
            </div>

            <div className="mx-auto max-w-5xl px-5 py-14">
                <h2 className="mb-10 text-4xl font-bold tracking-wider text-dull-green">
                    TIMELINE
                </h2>
                <div className="relative before:absolute before:bottom-0 before:left-5 before:top-0 before:w-1 before:bg-dull-green md:before:left-1/2">
                    {timeline.map(([date, event, Icon], index) => (
                        <article
                            key={event}
                            className={`relative mb-8 grid items-center gap-5 pl-16 md:grid-cols-2 md:pl-0 ${
                                index % 2 ? "" : ""
                            }`}
                        >
                            <span className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-dull-green text-white md:left-1/2 md:-translate-x-1/2">
                                <Icon />
                            </span>
                            <div
                                className={`rounded-xl border-2 border-dull-green p-4 ${
                                    index % 2
                                        ? "md:col-start-2 md:text-left"
                                        : "md:text-right"
                                }`}
                            >
                                <h3 className="text-xl font-semibold">
                                    {index % 2 ? event : date}
                                </h3>
                            </div>
                            <div
                                className={`rounded-xl border-2 border-dull-green p-4 ${
                                    index % 2
                                        ? "md:col-start-1 md:row-start-1 md:text-right"
                                        : "md:text-left"
                                }`}
                            >
                                <h3 className="text-xl font-semibold">
                                    {index % 2 ? date : event}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="px-5 py-16">
                <h2 className="text-4xl font-bold">Want to participate?</h2>
                <p className="mx-auto mt-3 max-w-4xl">
                    Be ready and join us for the 2026 edition on this wonderful
                    journey to recreate a new and cleaner world with Clean
                    Recycling Initiative.
                </p>
                <button
                    type="button"
                    onClick={openRegister}
                    className="my-7 rounded-pill px-10 py-3 font-semibold text-white bg-gradient-to-br from-gradient-blue to-gradient-green"
                >
                    Register
                </button>
                <div className="mx-auto max-w-5xl">
                    <h3 className="text-2xl font-bold">
                        The Pinnacle of Sustainable Innovation and Marketing
                        Brilliance
                    </h3>
                    <p className="mt-3">
                        The International Sustainability Marketing Competition,
                        a hallmark event by the Clean Recycling Initiative™, is
                        more than an event; it is a movement toward integrating
                        sustainability into environmental efforts.
                    </p>
                </div>
            </div>
        </section>
    );
}
