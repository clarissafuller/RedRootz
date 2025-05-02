import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <a href="/about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-right">
        <a
          href="https://hairbyredrootz.glossgenius.com/services"
          target="_blank"
          rel="noopener noreferrer"
        >
          Services
        </a>
        <a
          href="https://hairbyredrootz.glossgenius.com/booking-flow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Appointments
        </a>
      </div>
      <Link to="/" className="logo-link">
        <img
          src="src/assets/tigers.png"
          alt="tiger logo"
          className="tiger-logo"
        />
      </Link>
    </nav>
  );
}
