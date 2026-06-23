import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="hero">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source
          src="/bg-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay"></div>

      <Navbar />

      <div className="hero-content">

        <p className="tagline">
          FRONTEND DEVELOPER • CREATIVE CODER
        </p>

        <h1>
          I am <span>Shruti Patnaik</span>
        </h1>

        <h2>
          Full Stack Developer
        </h2>

        <p className="quote">
          Creating beautiful and responsive web experiences
          while hustling every day to turn ideas into reality.
        </p>

        <div className="buttons">

          <a
            href="/ShrutiPatnaikResume.pdf"
            target="_blank"
            className="btn resume"
          >
            📄 Resume
          </a>

          <a
            href="https://github.com/Shruticode-ctrl"
            target="_blank"
            className="btn github"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shruti-patnaik01"
            target="_blank"
            className="btn linkedin"
          >
            🔗 LinkedIn
          </a>

        </div>

      </div>

    </div>
  );
}
