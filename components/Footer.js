import Link from "next/link";

const exploreLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Gallery", "gallery"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/#home" className="brand">
            <span className="brand-name">blush &amp; bloom</span>
            <span className="brand-subtitle">BEAUTY STUDIO</span>
          </Link>
          <p>
            A little time for yourself. A beautiful feeling that stays with
            you.
          </p>
        </div>

        <nav className="footer-column" aria-label="Explore">
          <h4>EXPLORE</h4>
          {exploreLinks.map(([label, id]) => (
            <Link href={`/#${id}`} key={id}>
              {label}
            </Link>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Information">
          <h4>INFORMATION</h4>
          <Link href="/#booking">Book Appointment</Link>
          <Link href="/#contact">Contact Us</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Blush &amp; Bloom. All rights reserved.</p>
      </div>
    </footer>
  );
}
