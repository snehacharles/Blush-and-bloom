import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    number: "01",
    name: "Hair Care",
    description:
      "Haircuts, styling, colouring, smoothening and nourishing hair treatments.",
    image: "photo-1560869713-7d0a29430803",
  },
  {
    number: "02",
    name: "Skin Care",
    description:
      "Facials, clean-ups, skin treatments and refreshing beauty rituals.",
    image: "photo-1515377905703-c4788e51af15",
  },
  {
    number: "03",
    name: "Makeup",
    description:
      "Party makeup, special occasion looks and professional makeup styling.",
    image: "photo-1487412947147-5cebf100ffc2",
  },
  {
    number: "04",
    name: "Nail Care",
    description: "Manicure, pedicure, nail art and complete nail grooming.",
    image: "photo-1604654894610-df63bc536371",
  },
  {
    number: "05",
    name: "Hair Spa",
    description: "Relaxing hair spa experiences and conditioning treatments.",
    image: "photo-1522337360788-8b13dee7a37e",
  },
  {
    number: "06",
    name: "Bridal Beauty",
    description:
      "Special beauty and makeup experiences for your wedding celebrations.",
    image: "photo-1519741497674-611481863552",
  },
];

const galleryPhotos = [
  ["photo-1487412947147-5cebf100ffc2", "Beauty Portrait"],
  ["photo-1522337360788-8b13dee7a37e", "Hair Styling"],
  ["photo-1532712938310-34cb3982ef74", "Bridal Inspiration"],
  ["photo-1515377905703-c4788e51af15", "Beauty Care"],
  ["photo-1560869713-7d0a29430803", "Hair Transformation"],
  ["photo-1604654894610-df63bc536371", "Nail Art"],
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero" id="home" aria-labelledby="home-heading">
          <div className="hero-content">
            <p className="eyebrow">
              <span aria-hidden="true" /> WELCOME TO BLUSH &amp; BLOOM
            </p>

            <h1 id="home-heading">
              Beauty is an art.
              <br />
              <em>Let us create yours.</em>
            </h1>

            <p className="hero-description">
              Discover a world of beauty, elegance and self-care. Your journey
              to feeling confident and beautiful starts right here.
            </p>

            <div className="hero-actions">
              <a href="#booking" className="primary-btn">
                BOOK YOUR EXPERIENCE <span aria-hidden="true">↗</span>
              </a>
              <a href="#services" className="secondary-btn">
                EXPLORE SERVICES <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="hero-bottom">
              <div>
                <strong>Beauty</strong>
                <span>Designed around you</span>
              </div>
              <div>
                <strong>Elegance</strong>
                <span>In every detail</span>
              </div>
              <div>
                <strong>Confidence</strong>
                <span>Starts with self-care</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1100&q=90"
              alt="Beauty portrait"
              fetchPriority="high"
            />
            <div className="image-caption">
              <span>THE BEAUTY EDIT</span>
              <p>Feel beautiful. Be yourself.</p>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>YOUR MOMENT</span>
              <strong>
                TO
                <br />
                SHINE
              </strong>
            </div>
          </div>

          <div className="hero-side-text" aria-hidden="true">
            BEAUTY · CARE · CONFIDENCE
          </div>
        </section>

        <div className="intro-strip" aria-label="Beauty, self care, confidence, elegance">
          <span>BEAUTY</span>
          <i aria-hidden="true">✳</i>
          <span>SELF CARE</span>
          <i aria-hidden="true">✳</i>
          <span>CONFIDENCE</span>
          <i aria-hidden="true">✳</i>
          <span>ELEGANCE</span>
        </div>

        <section className="about-story" id="about" aria-labelledby="about-heading">
          <div className="page-container content-grid">
            <div className="content-image">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=85"
                alt="A calm, light-filled beauty studio"
                loading="lazy"
              />
            </div>

            <div className="content-copy">
              <p className="eyebrow">OUR STORY</p>
              <h2 id="about-heading">
                More than beauty.
                <br />A feeling of <em>being you.</em>
              </h2>
              <p>
                At Blush &amp; Bloom, we believe beauty is not about changing
                who you are. It is about celebrating what makes you unique.
              </p>
              <p>
                We imagined a beauty space where every individual can slow
                down, feel comfortable and enjoy a little time dedicated
                entirely to themselves.
              </p>
              <p>
                From everyday self-care to your most special occasions, our
                vision is to make every visit a beautiful experience filled
                with warmth, attention and care.
              </p>
              <a href="#services" className="editorial-button">
                DISCOVER OUR SERVICES <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="about-philosophy">
            <p className="eyebrow">OUR PHILOSOPHY</p>
            <h2>
              Your beauty. Your story.
              <br />
              <em>Your moment to shine.</em>
            </h2>
            <p>
              We celebrate individuality, encourage self-expression and
              believe that confidence is the most beautiful thing you can
              wear.
            </p>
          </div>

          <div className="about-values page-container">
            <div className="about-values-heading">
              <p className="eyebrow">WHAT MATTERS TO US</p>
              <h2>
                Beauty with <em>purpose.</em>
              </h2>
            </div>

            <div className="values-grid">
              <article>
                <span>01</span>
                <h3>Personal Care</h3>
                <p>
                  Every person is different. We believe beauty experiences
                  should feel personal, comfortable and thoughtful.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Quality First</h3>
                <p>
                  We value attention to detail, carefully selected products
                  and a commitment to quality.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Natural Confidence</h3>
                <p>
                  Our philosophy is simple: enhance your beauty while helping
                  you feel confident in your own skin.
                </p>
              </article>
            </div>
          </div>

          <div className="about-cta">
            <p>YOUR TIME. YOUR BEAUTY.</p>
            <h2>
              Ready for a little <em>self-love?</em>
            </h2>
            <a href="#booking" className="primary-btn">
              BOOK YOUR EXPERIENCE <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          className="page-container home-services"
          id="services"
          aria-labelledby="services-heading"
        >
          <div className="section-intro">
            <p className="section-label">A LITTLE SELF-CARE</p>
            <h2 className="section-heading" id="services-heading">
              Find your beauty ritual
            </h2>
            <p className="section-description">
              Thoughtful beauty experiences for your everyday rituals and
              special moments.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image-wrap">
                  <img
                    src={`https://images.unsplash.com/${service.image}?w=800&q=85`}
                    alt={service.name}
                    loading="lazy"
                  />
                  <span>{service.number}</span>
                </div>
                <div className="service-card-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <a href="#booking">
                    BOOK THIS SERVICE <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="home-gallery"
          id="gallery"
          aria-labelledby="gallery-heading"
        >
          <div className="page-container">
            <div className="section-intro">
              <p className="section-label">A WORLD OF BEAUTY</p>
              <h2 className="section-heading" id="gallery-heading">
                A little inspiration
              </h2>
              <p className="section-description">
                A collection of beauty inspiration, styling and special
                moments.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryPhotos.map(([photo, name], index) => (
                <div className="gallery-item" key={photo}>
                  <img
                    src={`https://images.unsplash.com/${photo}?w=900&q=85`}
                    alt={name}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span>0{index + 1}</span>
                    <h3>{name}</h3>
                  </div>
                </div>
              ))}
            </div>
            <p className="gallery-note">
              These are illustrative beauty photographs, not salon client work.
            </p>
          </div>
        </section>

        <section
          className="booking-section"
          id="booking"
          aria-labelledby="booking-heading"
        >
          <div className="page-container booking-layout">
            <div className="booking-info">
              <p className="section-label">LET&apos;S MAKE IT HAPPEN</p>
              <h2 className="section-heading" id="booking-heading">
                Your time. Your beauty. Your experience.
              </h2>
              <p className="section-description">
                Share your preferred service and timing. Your request will
                need to be confirmed directly with the salon.
              </p>
              <div className="booking-note">
                <span className="booking-note-icon" aria-hidden="true">
                  01
                </span>
                <div>
                  <strong>Appointment request</strong>
                  <p>
                    Your preferred date and time are subject to confirmation.
                    This form does not book an appointment.
                  </p>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </section>

        <section
          className="page-container contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="contact-heading">
            <p className="section-label">WE WOULD LOVE TO HEAR FROM YOU</p>
            <h2 className="section-heading" id="contact-heading">
              Let&apos;s connect.
            </h2>
            <p className="section-description">
              Follow us on Instagram or message us on WhatsApp. We would love
              to hear from you.
            </p>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <span className="contact-card-label">PHONE</span>
              <h3>Call Us</h3>
              <p>Salon phone number to be added</p>
            </article>
            <article className="contact-card">
              <span className="contact-card-label">EMAIL</span>
              <h3>Email Us</h3>
              <p>Salon email address to be added</p>
            </article>
            <article className="contact-card">
              <span className="contact-card-label">LOCATION</span>
              <h3>Visit Us</h3>
              <p>Salon location to be added</p>
            </article>
            <a
              className="contact-card"
              href="https://www.instagram.com/blushandbloom/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Blush and Bloom on Instagram"
            >
              <span className="contact-card-label">INSTAGRAM</span>
              <h3>Follow Us</h3>
              <p>@blushandbloom</p>
            </a>
            <a
              className="contact-card"
              href="https://wa.me/918765903460"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Blush and Bloom on WhatsApp"
            >
              <span className="contact-card-label">WHATSAPP</span>
              <h3>Chat With Us</h3>
              <p>+91 8765903460</p>
            </a>
          </div>

          <div className="contact-form-layout">
            <div>
              <p className="section-label">GET IN TOUCH</p>
              <h3 className="section-heading">
                What can we help you with?
              </h3>
              <p className="section-description">
                Send a message request. No message will be delivered until a
                contact integration is connected.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
