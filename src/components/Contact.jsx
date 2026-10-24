import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'ysuresh33002@gmail.com';
  const currentYear = new Date().getFullYear();

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header reveal">
          <div className="section-label">
            <span className="section-index">04</span>
            <span>/</span>
            <span>CONTACT</span>
          </div>
          <span className="section-meta-tag">[ TRANSMISSION // 04 ]</span>
        </div>

        {/* Contact Hero Presentation */}
        <div className="contact-editorial-card reveal">
          <div className="contact-content-block">
            <span className="contact-overhead-tag">// INQUIRIES & COLLABORATIONS</span>

            <h2 className="contact-headline">HAVE A PROJECT IN MIND?</h2>

            <p className="contact-supporting-text">
              I'm open to suitable entry-level opportunities and learning-focused collaborations.
            </p>

            {/* Direct Email Hero Display */}
            <div className="contact-email-wrapper">
              <a 
                href={`mailto:${email}`} 
                className="contact-email-link"
                aria-label={`Send email to ${email}`}
              >
                <span className="email-text">{email}</span>
                <span className="email-arrow" aria-hidden="true">↗</span>
              </a>

              <button
                type="button"
                className="btn-copy-email"
                onClick={handleCopy}
                aria-label="Copy email address to clipboard"
              >
                {copied ? '✓ COPIED TO CLIPBOARD' : 'COPY EMAIL'}
              </button>
            </div>
          </div>

          {/* Contact Specifications Matrix */}
          <div className="contact-matrix-grid">
            <div className="matrix-item">
              <span className="matrix-label">DIRECT INBOX</span>
              <span className="matrix-value">{email}</span>
            </div>
            <div className="matrix-item">
              <span className="matrix-label">AVAILABILITY</span>
              <span className="matrix-value matrix-lime">Immediate / Internships</span>
            </div>
            <div className="matrix-item">
              <span className="matrix-label">LOCATION</span>
              <span className="matrix-value">India • Remote & On-Site</span>
            </div>
            <div className="matrix-item">
              <span className="matrix-label">RESPONSE TIME</span>
              <span className="matrix-value">&lt; 24 Hours</span>
            </div>
          </div>
        </div>

        {/* Editorial Footer */}
        <footer className="editorial-footer reveal">
          <div className="footer-left">
            <span className="footer-brand">DESIGNED & BUILT BY SURESH YADAV</span>
            <span className="footer-sep">—</span>
            <span className="footer-year">{currentYear}</span>
          </div>

          <div className="footer-right">
            <span className="footer-status-pill">
              <span className="footer-dot-lime"></span>
              <span>ALL SYSTEMS OPERATIONAL</span>
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
