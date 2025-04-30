export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero */}
      <section className="home-hero">
        <div className="nav-bar"></div>
        <img src={""} alt="red rootz logo" />
      </section>

      {/* Contact Section */}
      <section className="contact"></section>

      {/* Book Now */}
      <section className="book-now"></section>

      {/* Services */}
      <section className="services"></section>

      {/* The Team */}
      <section className="team"></section>

      {/* Team Breakdown */}
      <section className="team-breakdown"></section>
      {/* Footer */}
      <footer className="footer-text">
        <p>Built by Clarissa Fuller &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
