import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="projects-page">

      <Navbar />

      <div className="projects-content">

        <h1>My Projects</h1>

        <div className="project-container">

          {/* SigmaGPT */}
<div className="project-card">

  <div className="project-icon">
    🤖
  </div>

  <h2>
    SigmaGPT
  </h2>

  <p className="project-subtitle">
    AI Chat Application
  </p>

  <p>
    Full-stack AI chat application powered by OpenAI API
    with secure backend proxy, responsive chat UI,
    conversation history and real-time AI responses.
  </p>

  <p className="tech">
    React.js (Vite) • Node.js • Express.js • OpenAI API • CSS
  </p>

  <a
    href="https://sigma-gpt-ruddy-three.vercel.app/"
    target="_blank"
    className="project-btn"
  >
    View Project →
  </a>

</div>

{/* FinFlow */}
<div className="project-card">

  <div className="project-icon">
    💰
  </div>

  <h2>
    FinFlow
  </h2>

  <p className="project-subtitle">
    Personal Finance Management Platform
  </p>

  <p>
    Personal finance platform with JWT authentication,
    income & expense tracking, budget planning,
    financial goal monitoring and REST APIs.
  </p>

  <p className="tech">
    React.js • Node.js • Express.js • MongoDB Atlas • JWT • REST APIs
  </p>

  <a
    href="https://finflow-web-ivory.vercel.app/login"
    target="_blank"
    className="project-btn"
  >
    View Project →
  </a>

</div>

          {/* Wanderlust */}
          <div className="project-card">

            <div className="project-icon">
              🏡
            </div>

            <h2>
              Wanderlust
            </h2>

            <p className="project-subtitle">
             Full-Stack Travel Listing Web Application 
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
              href="https://wanderlust-1-l3k4.onrender.com/listings"
              target="_blank"
              className="project-btn"
            >
              View Project →
            </a>

          </div>

<<<<<<< HEAD
          {/* TradeView */}
          <div className="project-card">

            <div className="project-icon">
              📈
            </div>

            <h2>
              FinFlow 
            </h2>

            <p className="project-subtitle">
               Personal Finance Management Application
            </p>

            <p>
             FinFlow – a personal finance and budgeting application 
              that helps users manage expenses, track income,
              and plan monthly budgets 
            </p>

            <p className="tech">
              React.js • JavaScript • HTML • CSS •
              Node.js • MongoDB •   ExpressJS
            </p>

            <a
              href="https://finflow-web-ivory.vercel.app/"
              target="_blank"
              className="project-btn"
            >
              View Project →
            </a>

          </div>
=======
          
>>>>>>> 013ec99 (Update portfolio projects and resume)

          {/* Spotify Clone */}
          <div className="project-card">

            <div className="project-icon">
              🎵
            </div>

            <h2>
              Netflix 
            </h2>

            <p className="project-subtitle">
              Netflix UI Clone 
            </p>

            <p>
              A responsive front-end project
              replicating Netflix’s interface with modern layouts,
              reusable components, and smooth user experience.
            </p>

            <p className="tech">
              • React.js   • TailwindCSS  • HTML
            </p>

            <a
              href="https://netflix-psi-sooty.vercel.app/"
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
