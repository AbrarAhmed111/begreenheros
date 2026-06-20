import { FaDoorOpen } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const introCardClass =
    "flex w-full max-w-[500px] flex-col items-center justify-start rounded-[20px] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:items-start sm:rounded-[24px] sm:p-8 md:p-14";

const introHeadingClass =
    "mb-3 text-center text-[22px] font-bold leading-tight text-black sm:text-left sm:text-[24px] md:text-[38px]";

const introBodyClass =
    "text-center text-[15px] font-normal leading-relaxed text-muted sm:text-left sm:text-[16px] hgeas";

export default function Welcome() {
    return (
        <div className="min-h-screen text-base leading-relaxed text-body md:text-lg">
            <header className="bg-dull-green px-3.5 py-2.5 text-white sm:px-7 sm:py-4">
                <nav
                    className="flex items-center justify-between gap-2.5"
                    aria-label="Welcome navigation"
                >
                    <Link
                        to="/home"
                        className="flex shrink-0 items-center gap-2 text-[25px] font-semibold text-white sm:text-[28px] md:text-[30px]"
                    >
                        <AiFillHome aria-hidden="true" />
                        <span>Home</span>
                    </Link>

                    <p className="hidden flex-1 text-center text-lg font-bold leading-snug sm:text-2xl md:block md:text-[34px]">
                        Knowledge is the renewable energy Green Heroes create.
                    </p>

                    <img
                        src="/img/bgh-logo.jpeg"
                        alt="Be Green Heroes"
                        className="h-[50px] w-[50px] shrink-0 rounded-full object-cover sm:h-16 sm:w-16 md:h-[76px] md:w-[76px]"
                    />
                </nav>
            </header>

            <main className="bg-gradient-to-r from-welcome-start to-welcome-end">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block h-auto w-full object-cover"
                    aria-label="Be Green Heroes introduction"
                >
                    <source src="/video/intro.mp4" type="video/mp4" />
                </video>

                <section className="flex flex-col items-center justify-center gap-6 px-4 py-6 sm:gap-7 sm:px-5 sm:py-10 md:py-16">
                    <div className="mx-auto grid w-full max-w-content grid-cols-1 justify-items-center gap-5 md:grid-cols-2 md:gap-7">
                        <article className={introCardClass}>
                            <h1 className={introHeadingClass}>
                                What is BE GREEN HEROES?
                            </h1>
                            <p className={introBodyClass}>
                                BE GREEN HEROES (BGH) is a global learning
                                platform, designed to provide environmental
                                science in clear and accessible contents.
                            </p>
                        </article>

                        <article className={introCardClass}>
                            <h2 className={introHeadingClass}>
                                How does it work?
                            </h2>
                            <p className={introBodyClass}>
                                The BGH ecosystem is founded on the innovative
                                principle of{" "}
                                <strong className="font-bold text-[#374151]">
                                    Learn. Earn. Act.
                                </strong>{" "}
                                It emphasizes Web3-driven rewards and enables
                                users to actively participate in decision-making
                                processes as core features of the platform.
                            </p>
                        </article>
                    </div>

                    <Link
                        to="/home"
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-pill bg-gradient-green px-8 py-3.5 text-[25px] font-bold text-white shadow-[0_10px_15px_-3px_rgba(39,174,96,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:text-black sm:w-auto sm:px-10 sm:py-4 sm:text-[28px] md:px-12 md:text-[30px]"
                    >
                        <FaDoorOpen aria-hidden="true" />
                        Enter
                    </Link>
                </section>
            </main>
        </div>
    );
}
