import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="about-wrapper">
      <section className="header">
        <Navbar />
        <p>EVERYTHING YOU NEED TO KNOW</p>
      </section>
      <section className="cancellation-policy">
        <h1>CANCELLATION POLICY</h1>
        <p>
          Failure to cancel less than 48 hour notice, client is responsible to
          pay 25% of their scheduled service cost.
        </p>
        <p>
          Failure to cancel less than 24 hour notice, client is responsible to
          pay 50% of their scheduled service cost.
        </p>
        <p>
          No-shows or same day cancellation, client is responsible for paying
          100% of their scheduled service cost.
        </p>
        <p>Booking deposits are nonrefundable.</p>
      </section>
      <section className="our-story">
        <h1>OUR STORY</h1>
        <p>
          Hello there! I'm Makayla Miller, and I'm the creative force behind Red
          Rootz. I have a passion for transforming everyday hair into stunning
          works of art through my specialty in creative dimensional color.
        </p>
        <h3>A JOURNEY IN HAIR</h3>
        <p>
          My journey in the world of hair started back in 2015, and it has been
          an incredible adventure ever since. Alongside pursuing formal
          education in hair services, I've had the privilege of traveling
          internationally to hone my craft. These experiences have allowed me to
          bring a global perspective to my work, incorporating trends and
          techniques from around the world into every cut, color, and style I
          create.
        </p>
        <h3>A PASSION FOR TRAVEL</h3>
        <p>
          Traveling isn't just a part of my education; it's a significant part
          of who I am. Exploring new cultures, meeting diverse people, and
          soaking in the beauty of different landscapes fuels my creativity. I
          find inspiration in the world around me, and I love translating that
          inspiration into unique, personalized looks for my clients. Whether
          you're seeking a subtle change or a bold transformation, I'm here to
          make your hair dreams a reality. Let's embark on a journey of
          self-expression and confidence together at Red Rootz. Thank you for
          considering me as your trusted hair stylist. I can't wait to work with
          you!
        </p>
      </section>
    </div>
  );
}
