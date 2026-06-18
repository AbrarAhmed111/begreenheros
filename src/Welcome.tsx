import { FaDoorOpen, FaHome } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="welcome-page">
      <header className="site-header">
        <nav className="site-nav" aria-label="Welcome navigation">
          <a className="home-link" href="/">
            <FaHome aria-hidden="true" />
            <span>Home</span>
          </a>

          <p className="tagline">
            Knowledge is the renewable energy Green Heroes create.
          </p>

          <img
            src="/img/bgh-logo.jpeg"
            alt="Be Green Heroes"
            className="brand-logo"
          />
        </nav>
      </header>

      <main>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="intro-video"
          aria-label="Be Green Heroes introduction"
        >
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>

        <section className="intro-section">
          <div className="info-grid">
            <article className="info-card">
              <h1>What is BE GREEN HEROES?</h1>
              <p>
                BE GREEN HEROES (BGH) is a global learning platform, designed to
                provide environmental science in clear and accessible contents.
              </p>
            </article>

            <article className="info-card">
              <h2>How does it work?</h2>
              <p>
                The BGH ecosystem is founded on the innovative principle of{" "}
                <strong>Learn. Earn. Act.</strong> It emphasizes Web3-driven rewards
                and enables users to actively participate in decision-making
                processes as core features of the platform.
              </p>
            </article>
          </div>

          <a className="enter-link" href="/">
            <FaDoorOpen aria-hidden="true" />
            <span>Enter</span>
          </a>
        </section>
      </main>
    </div>
  );
}

