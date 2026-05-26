export default function Hero() {
  return (
    <div className="hero">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">SP.</h2>

        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <p className="tagline">FRONTEND DEVELOPER • CREATIVE CODER</p>

        <h1>
          I am <span>Shruti Patnaik</span>
        </h1>

        <p className="quote">
          Creating beautiful and responsive web experiences while hustling every
          day to turn ideas into reality.
        </p>

        {/* Buttons */}
        <div className="buttons">
          {/* Resume */}
         <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn resume"
>
  📄 Resume
</a>
          {/* GitHub */}
          <a
            href="https://github.com/Shruticode-ctrl"
            target="_blank"
            className="btn github"
          >
            💻 GitHub
          </a>

          {/* LinkedIn */}
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
