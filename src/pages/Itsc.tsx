import type { IconType } from "react-icons";
import type { ReactNode } from "react";
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

const podiumAwards = [
    {
        place: "2nd Place",
        prize: "$2000",
        detail: "+ Certificate for 3,000 GHC tokens",
        icon: FaTrophy,
        iconClass: "bg-[#f1c40f] shadow-[0_0_20px_rgba(241,196,15,0.55)]",
    },
    {
        place: "1st Place",
        prize: "$3500",
        detail: "+ Certificate for 5,000 GHC tokens",
        icon: FaTrophy,
        iconClass: "bg-[#e74c3c] shadow-[0_0_20px_rgba(231,76,60,0.55)]",
    },
    {
        place: "3rd Place",
        prize: "$1000",
        detail: "+ Certificate for 2,000 GHC tokens",
        icon: FaTrophy,
        iconClass: "bg-[#bdc3c7] shadow-[0_0_20px_rgba(189,195,199,0.55)]",
    },
] as const;

const choiceAwards = [
    {
        place: "Media Choice",
        detail: "Certificate for 1,000 GHC tokens",
        icon: FaBullhorn,
        iconClass: "bg-[#5dade2] shadow-[0_0_20px_rgba(93,173,226,0.55)]",
    },
    {
        place: "Public Choice",
        detail: "Certificate for 1,000 GHC tokens",
        icon: FaUsers,
        iconClass: "bg-[#58d68d] shadow-[0_0_20px_rgba(88,214,141,0.55)]",
    },
] as const;

function AwardCard({
    place,
    detail,
    icon: Icon,
    iconClass,
    prize,
}: {
    place: string;
    detail: string;
    icon: IconType;
    iconClass: string;
    prize?: string;
}) {
    return (
        <article className="group flex min-h-[260px] flex-col items-center justify-center rounded-[20px] bg-gradient-to-tr from-gradient-blue to-gradient-green px-6 py-10 text-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(0,0,0,0.2)] sm:min-h-[280px]">
            <p className="text-xl">{place}</p>
            <span
                className={`my-6 flex h-[88px] w-[88px] items-center justify-center rounded-full text-[38px] text-black transition-transform duration-300 group-hover:scale-110 sm:h-[96px] sm:w-[96px] sm:text-[42px] ${iconClass}`}
            >
                <Icon aria-hidden="true" />
            </span>
            {prize ? (
                <>
                    <h3 className="text-[32px] font-bold leading-none sm:text-[34px]">
                        {prize}
                    </h3>
                    <p className="mt-4 text-base">{detail}</p>
                </>
            ) : (
                <p className="text-base">{detail}</p>
            )}
        </article>
    );
}

const timeline = [
    {
        id: "info-session-1",
        left: (
            <>
                September 28th – October 2nd
                <br />
                2026
            </>
        ),
        right: (
            <>
                Info Session
                <br />
                (Part 1)
            </>
        ),
        icon: FaInfo,
    },
    {
        id: "registration-deadline",
        left: "Registration deadline",
        right: "October 9, 2026",
        icon: FaFileAlt,
    },
    {
        id: "info-session-2",
        left: "October 12th – 16th, 2026",
        right: (
            <>
                Info Session
                <br />
                (Part 2)
            </>
        ),
        icon: FaInfo,
    },
    {
        id: "submissions-due",
        left: "Submissions Due",
        right: "October 30th, 2026",
        icon: FaFileAlt,
    },
    {
        id: "judging-period",
        left: "November 1st - 15th, 2026",
        right: "Judging period",
        icon: FaCheck,
    },
    {
        id: "winners-announced",
        left: "Winners Announced",
        right: "To be Determined",
        icon: FaTrophy,
    },
] as const;

function TimelineMobileCard({ children }: { children: ReactNode }) {
    return (
        <div className="relative z-10 box-border flex w-full items-center justify-center rounded-full border-2 border-dull-green bg-white px-4 py-2.5 shadow-[2px_4px_10px_rgba(0,0,0,0.12)]">
            <div className="w-full text-center text-xs font-semibold leading-snug text-body sm:text-sm">
                {children}
            </div>
        </div>
    );
}

function TimelineDesktopCard({ children }: { children: ReactNode }) {
    return (
        <div className="box-border flex min-h-[170px] w-[360px] shrink-0 items-center justify-center rounded-[18px] border-2 border-dull-green bg-white px-4 py-4 shadow-[2px_4px_10px_rgba(0,0,0,0.12)]">
            <div className="w-full text-center text-[35px] font-semibold leading-snug text-body">
                {children}
            </div>
        </div>
    );
}

function TimelineConnector({ visible = true }: { visible?: boolean }) {
    return (
        <span
            aria-hidden="true"
            className={`hidden shrink-0 lg:block lg:h-px lg:w-12 ${
                visible ? "bg-dull-green" : "bg-transparent"
            }`}
        />
    );
}

function TimelineRow({
    left,
    right,
    icon: Icon,
    connectLeft,
}: {
    left: ReactNode;
    right: ReactNode;
    icon: IconType;
    connectLeft: boolean;
}) {
    return (
        <article className="relative">
            <div className="flex items-center lg:hidden">
                <div className="relative z-10 flex w-10 shrink-0 justify-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-dull-green text-sm text-white">
                        <Icon aria-hidden="true" />
                    </div>
                </div>
                <span
                    aria-hidden="true"
                    className="h-px w-3 shrink-0 bg-dull-green"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <TimelineMobileCard>{left}</TimelineMobileCard>
                    <TimelineMobileCard>{right}</TimelineMobileCard>
                </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                <div className="flex items-center justify-end">
                    <TimelineDesktopCard>{left}</TimelineDesktopCard>
                    <TimelineConnector visible={connectLeft} />
                </div>

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dull-green text-lg text-white">
                    <Icon aria-hidden="true" />
                </div>

                <div className="flex items-center justify-start">
                    <TimelineConnector />
                    <TimelineDesktopCard>{right}</TimelineDesktopCard>
                </div>
            </div>
        </article>
    );
}

export default function Itsc() {
    const { openRegister } = useModal();

    return (
        <section className="text-center">
            <div className="mx-auto max-w-[1200px] px-4 pt-5 sm:px-8 sm:pt-8">
                <div className="mb-6 flex justify-end sm:mb-10">
                    <button
                        type="button"
                        onClick={openRegister}
                        className="w-fit rounded-pill bg-gradient-to-r from-gradient-blue to-gradient-green px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 sm:px-8 sm:py-3 sm:text-base"
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
                        className="mt-2 inline-block rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:px-8 sm:py-6 sm:text-xl md:py-8 md:text-[35px]"
                    >
                        Download ITSC 2026 Booklet
                    </a>
                </div>

                <div className="mt-16 grid gap-8 sm:mt-20 lg:grid-cols-2">
                    <article className="flex min-h-[400px] flex-col items-center justify-center rounded-mission bg-dull-green p-8 text-white sm:min-h-[440px] sm:p-10">
                        <FaGlobe className="mb-4 text-2xl sm:text-3xl md:text-4xl" />
                        <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                            Worldwide Engagement
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed sm:text-base md:text-lg">
                            ITSC attracted participants from 120 countries and
                            704 post-secondary educational programs in 2024.
                            This global convergence of individuals and teams
                            fostered a dynamic exchange of ideas on
                            sustainability, turning the competition into a
                            powerful platform for innovation and
                            forward-thinking solutions.
                        </p>
                    </article>
                    <article className="flex min-h-[400px] flex-col items-center justify-center rounded-mission bg-dull-green p-8 text-white sm:min-h-[440px] sm:p-10">
                        <FaLeaf className="mb-4 text-2xl sm:text-3xl md:text-4xl" />
                        <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                            Environmental Science over Narratives and Hypes
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed sm:text-base md:text-lg">
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

            <div className="mx-auto mt-16 max-w-6xl space-y-6 px-5 sm:mt-20">
                <div className="grid gap-6 md:grid-cols-3">
                    {podiumAwards.map((award) => (
                        <AwardCard key={award.place} {...award} />
                    ))}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {choiceAwards.map((award) => (
                        <AwardCard key={award.place} {...award} />
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-6xl overflow-x-hidden px-5 py-14 sm:py-16">
                <h2 className="text-center text-[36px] font-bold tracking-wider text-dull-green sm:text-[42px]">
                    TIMELINE
                </h2>
                <hr className="mx-auto mt-6 max-w-5xl border-t border-soft-border" />
                <div className="relative mx-auto mt-8 max-w-6xl sm:mt-10 lg:mt-10">
                    <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-dull-green lg:hidden"
                    />
                    <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-dull-green lg:block"
                    />
                    <div className="flex flex-col gap-8 lg:gap-14">
                        {timeline.map(({ id, ...item }, index) => (
                            <TimelineRow
                                key={id}
                                {...item}
                                connectLeft={index % 2 === 1}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="-mx-4 -mb-4 bg-[#3e6b5a] px-5 pt-14 pb-[calc(3.5rem+1rem)] text-center text-white sm:-mx-5 sm:-mb-5 sm:pt-16 sm:pb-[calc(4rem+1.25rem)] md:pt-20 md:pb-[calc(5rem+1.25rem)]">
                <h2 className="text-[28px] font-bold italic sm:text-[32px]">
                    Want to participate?
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-base italic leading-relaxed text-white/90 sm:text-lg">
                    Be ready and join us for the 2026 edition on this wonderful
                    journey and experience to recreate a new and cleaner world
                    with Clean Recycling Initiative.
                </p>
                <button
                    type="button"
                    onClick={openRegister}
                    className="my-8 rounded-pill bg-gradient-to-r from-gradient-blue to-gradient-green px-10 py-3 text-base font-semibold not-italic text-white shadow-lg transition hover:scale-105 sm:my-10"
                >
                    Register
                </button>
                <div className="mx-auto max-w-3xl">
                    <h3 className="text-[22px] font-bold italic sm:text-[28px]">
                        The Pinnacle of Sustainable Innovation and Marketing
                        Brilliance
                    </h3>
                    <p className="mt-3 text-sm italic leading-relaxed text-white/90 sm:text-base">
                        The International Sustainability Marketing Competition
                        (ITSC), a hallmark event by the Clean Recycling
                        Initiative™, is more than just an event; it&apos;s a
                        movement towards integrating sustainability into the
                        fabric of our environmental sustainability efforts.
                    </p>
                </div>
            </div>
        </section>
    );
}
