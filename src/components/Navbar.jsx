import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/about">About</Link>
      <a href="#contact">Contact</a>
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
      <Link to="/" className="logo-link">
        <img
          src="./assets/tigers.png"
          alt="tiger logo"
          className="tiger-logo"
        />
      </Link>
    </nav>
  );
}
