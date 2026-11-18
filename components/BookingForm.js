"use client";

import { useEffect, useState } from "react";

const services = [
  "Hair Care",
  "Skin Care",
  "Makeup",
  "Nail Care",
  "Hair Spa",
  "Bridal Beauty",
];

export default function BookingForm() {
  const [minimumDate, setMinimumDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const now = new Date();
    const localDate = new Date(
      now.getTime() - now.getTimezoneOffset() * 60_000,
    )
      .toISOString()
      .slice(0, 10);
    setMinimumDate(localDate);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(
      "Your details passed frontend validation. This site is not connected to a booking service, so nothing has been sent or booked.",
    );
  }

  return (
    <div className="booking-form-wrap">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h3>Appointment Details</h3>

        <label htmlFor="booking-name">Full Name</label>
        <input
          id="booking-name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
        />

        <label htmlFor="booking-phone">Phone Number</label>
        <input
          id="booking-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          minLength={7}
          maxLength={20}
          placeholder="Your contact number"
          required
        />

        <label htmlFor="booking-email">Email Address</label>
        <input
          id="booking-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          required
        />

        <label htmlFor="booking-service">Select Service</label>
        <select id="booking-service" name="service" defaultValue="" required>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        <div className="form-row">
          <div>
            <label htmlFor="booking-date">Preferred Date</label>
            <input
              id="booking-date"
              type="date"
              name="date"
              min={minimumDate || undefined}
              required
            />
          </div>
          <div>
            <label htmlFor="booking-time">Preferred Time</label>
            <input id="booking-time" type="time" name="time" required />
          </div>
        </div>

        <label htmlFor="booking-message">Additional Message</label>
        <textarea
          id="booking-message"
          name="message"
          placeholder="Tell us more about your requirements..."
          rows="4"
        />

        <button type="submit" className="form-submit">
          REVIEW APPOINTMENT REQUEST <span aria-hidden="true">→</span>
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </div>
  );
}
