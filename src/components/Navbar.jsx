import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        SP.
      </h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  );
}