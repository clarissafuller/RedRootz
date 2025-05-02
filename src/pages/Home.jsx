import Map from "../components/Map";
import Navbar from "../components/Navbar";

export default function Home() {
  function visitPortfolio() {
    navigate("/portfolio");
  }
  function visitClarksTables() {
    navigate("/clarkstables");
  }

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="home-hero">
        <Navbar />
        <img src="src/assets/logo.png" alt="Red Rootz logo" className="logo" />
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <p>CONTACT</p>
        <div className="text-box">
          <a href="tel:+7175749844">CALL</a>
          <a href="sms:+7175749844">TEXT</a>
          <a href="mailto:info@redrootz.com">EMAIL</a>
          <a
            href="https://instagram.com/redrootz"
            target="_blank"
            rel="noopener noreferrer"
          >
            DM
          </a>
        </div>
      </section>

      {/* Book Now */}
      <section className="book-now">
        <a
          href="https://hairbyredrootz.glossgenius.com/booking-flow"
          target="_blank"
          rel="noopener noreferrer"
          className="book-link"
        >
          BOOK NOW
        </a>
      </section>
      <section className="business-hours">
        <div className="hours-list">
          <p>BUSINESS HOURS</p>
          <p>Monday 10 AM - 8 PM</p>
          <p>Tuesday 10 AM - 8 PM</p>
          <p>Wednesday CLOSED</p>
          <p>Thursday 9 AM - 7 PM</p>
          <p>Friday CLOSED</p>
          <p>Saturday CLOSED</p>
          <p>Sunday CLOSED</p>
        </div>
        <Map />
      </section>

      {/* The Team */}
      <section className="team">
        <p className="team-text">THE TEAM</p>
        <img src="src/assets/1P4A8235.jpg" alt="Team" className="team-pic" />
      </section>

      {/* Team Breakdown */}
      <section className="team-breakdown">
        <div className="makayla">
          <a
            href="https://www.instagram.com/red.rootz"
            target="_blank"
            rel="noopener noreferrer"
            className="member-text"
          >
            Makayla
          </a>
          <img src="src/assets/1P4A8356.jpg" alt="Makayla" />
        </div>
        <div className="ek">
          <a
            href="https://www.instagram.com/ekrosehair"
            target="_blank"
            rel="noopener noreferrer"
            className="member-text"
          >
            EK
          </a>
          <img src="src/assets/1P4A8275.jpg" alt="EK" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-text">
        <p>Built by Clarissa Fuller &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
