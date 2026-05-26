import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="contact-page">

      <Navbar />

      <div className="contact-content">

        <p className="contact-tag">
          LET'S CONNECT
        </p>

        <h1>
          Contact Me
        </h1>

        <p className="contact-text">
          Interested in working together or building
          something amazing? Feel free to connect with me.
        </p>

        {/* Contact Cards */}
        <div className="contact-cards">

          {/* Email */}
          <a
            href="mailto:shrutipatnaikwork@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              📧
            </div>

            <h2>Email</h2>

            <p className="contact-info">
              patnaik.shruti123@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Shruticode-ctrl"
            target="_blank"
            className="contact-card"
          >
            <div className="contact-icon">
              💻
            </div>

            <h2>GitHub</h2>

            <p className="contact-info">
              github.com/Shruticode-ctrl
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shruti-patnaik01"
            target="_blank"
            className="contact-card"
          >
            <div className="contact-icon">
              🔗
            </div>

            <h2>LinkedIn</h2>

            <p className="contact-info">
              linkedin.com/in/shruti-patnaik01
            </p>
          </a>

        </div>

      </div>

    </div>
  );
}