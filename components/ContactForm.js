"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(
      "Your message passed frontend validation, but has not been sent. A contact service still needs to be connected.",
    );
  }

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Full Name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
        />

        <label htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          required
        />

        <label htmlFor="contact-message">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="How can we help?"
          rows="5"
          required
        />

        <button type="submit" className="form-submit">
          REVIEW MESSAGE <span aria-hidden="true">→</span>
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </div>
  );
}
