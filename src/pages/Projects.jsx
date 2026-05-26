import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="projects-page">

      <Navbar />

      <div className="projects-content">

        <h1>My Projects</h1>

        <div className="project-container">

          {/* Wanderlust */}
          <div className="project-card">

            <div className="project-icon">
              🏡
            </div>

            <h2>
              Wanderlust
            </h2>

            <p className="project-subtitle">
              Property Listing App (Airbnb-inspired)
            </p>

            <p>
              Full-stack property listing platform
              with authentication, CRUD operations,
              image uploads and REST APIs.
            </p>

            <p className="tech">
              HTML • CSS • JavaScript • Node.js •
              Express.js • MongoDB
            </p>

            <a
              href="https://major-project-w65u.onrender.com/listings"
              target="_blank"
              className="project-btn"
            >
              View Project →
            </a>

          </div>

          {/* TradeView */}
          <div className="project-card">

            <div className="project-icon">
              📈
            </div>

            <h2>
              TradeView
            </h2>

            <p className="project-subtitle">
              Stock Trading Dashboard
            </p>

            <p>
              Zerodha-inspired stock trading dashboard
              with routing, reusable components and
              responsive UI.
            </p>

            <p className="tech">
              React.js • JavaScript • HTML • CSS •
              Node.js • MongoDB
            </p>

            <a
              href="https://zerodha-clone-5w83.vercel.app/"
              target="_blank"
              className="project-btn"
            >
              View Project →
            </a>

          </div>

          {/* Spotify Clone */}
          <div className="project-card">

            <div className="project-icon">
              🎵
            </div>

            <h2>
              Spotify Clone
            </h2>

            <p className="project-subtitle">
              Music Streaming UI Clone
            </p>

            <p>
              Modern Spotify-inspired music streaming
              frontend with responsive UI and clean design.
            </p>

            <p className="tech">
              React.js • CSS • JavaScript
            </p>

            <a
              href="https://spotifyclone-sandy-three.vercel.app"
              target="_blank"
              className="project-btn"
            >
              View Project →
            </a>

          </div>

          {/* Camera Project */}
          <div className="project-card">

            <div className="project-icon">
              📷
            </div>

            <h2>
              Camera Landing Page
            </h2>

            <p className="project-subtitle">
              Animated Product Landing Page
            </p>

            <p>
              Responsive camera product landing page
              with modern animations and aesthetic UI.
            </p>

            <p className="tech">
              HTML • CSS • JavaScript
            </p>

            <a
              href="https://camera-nine-cyan.vercel.app/"
              target="_blank"
              className="project-btn"
            >
              View Project →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}