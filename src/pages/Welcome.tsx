import { FaDoorOpen, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen text-[clamp(16px,1vw,18px)] leading-[1.7] text-body">
      <header className="bg-dull-green px-3.5 py-2.5 text-white sm:px-7 sm:py-4">
        <nav className="flex items-center justify-between gap-2.5" aria-label="Welcome navigation">
          <Link
            to="/home"
            className="flex shrink-0 items-center gap-2 text-[clamp(25px,1.5vw,30px)] font-semibold text-white"
          >
            <FaHome aria-hidden="true" />
            <span>Home</span>
          </Link>

          <p className="hidden flex-1 text-center text-[clamp(18px,1.8vw,34px)] font-bold leading-snug md:block">
            Knowledge is the renewable energy Green Heroes create.
          </p>

          <img
            src="/img/bgh-logo.jpeg"
            alt="Be Green Heroes"
            className="h-[clamp(50px,4vw,76px)] w-[clamp(50px,4vw,76px)] shrink-0 rounded-full object-cover"
          />
        </nav>
      </header>

      <main className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-welcome-start to-welcome-end">
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

        <section className="flex flex-col items-center justify-center gap-8 px-4 py-10 lg:gap-[54px] lg:pb-[60px] lg:pt-[80px]">
          <div className="grid w-full max-w-[1350px] gap-6 md:grid-cols-2 lg:gap-[50px]">
            <article className="rounded-[25px] border border-gray-100 bg-white p-[clamp(24px,3vw,58px)] shadow-lg lg:min-h-[405px]">
              <h1 className="text-[clamp(1.8rem,2.5vw,3rem)] font-bold leading-[1.3] text-black">
                What is BE GREEN HEROES?
              </h1>
              <p className="mt-5 max-w-[75ch] text-[clamp(16px,1.1vw,21px)] leading-[1.8] text-muted lg:mt-4">
                BE GREEN HEROES (BGH) is a global learning platform, designed to
                provide environmental science in clear and accessible contents.
              </p>
            </article>

            <article className="rounded-[25px] border border-gray-100 bg-white p-[clamp(24px,3vw,58px)] shadow-lg lg:min-h-[405px]">
              <h2 className="text-[clamp(1.8rem,2.5vw,3rem)] font-bold leading-[1.3] text-black">
                How does it work?
              </h2>
              <p className="mt-5 max-w-[75ch] text-[clamp(16px,1.1vw,21px)] leading-[1.8] text-muted lg:mt-4">
                The BGH ecosystem is founded on the innovative principle of{" "}
                <strong>Learn. Earn. Act.</strong> It emphasizes Web3-driven rewards
                and enables users to actively participate in decision-making
                processes as core features of the platform.
              </p>
            </article>
          </div>

          <Link
            to="/home"
            className="inline-flex min-h-[64px] min-w-[220px] items-center justify-center gap-3 rounded-pill bg-gradient-green px-8 py-4 text-3xl font-bold text-white shadow-lg transition hover:-translate-y-1 lg:h-[80px] lg:w-[280px] lg:text-[34px]"
          >
            <FaDoorOpen aria-hidden="true" />
            Enter
          </Link>
        </section>
      </main>
    </div>
  );
}
