import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Editorial Wordmark */}
        <a href="#hero" className="header-wordmark" onClick={closeMenu} aria-label="Suresh Yadav Home">
          <span className="wordmark-title">SURESH YADAV</span>
          <span className="wordmark-sub">PORTFOLIO / 2026</span>
        </a>

        {/* Status / Availability Label */}
        <div className="nav-status-badge" aria-label="Status: Open to opportunities">
          <span className="status-indicator-lime" aria-hidden="true"></span>
          <span className="status-text">OPEN TO OPPORTUNITIES</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#work" className="nav-item">WORK</a></li>
            <li><a href="#about" className="nav-item">ABOUT</a></li>
            <li><a href="#skills" className="nav-item">SKILLS</a></li>
            <li><a href="#contact" className="nav-item nav-item-cta">CONTACT</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`menu-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-label">// NAVIGATION</span>
            <div className="nav-status-badge">
              <span className="status-indicator-lime"></span>
              <span className="status-text">OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          <nav className="mobile-nav-links">
            <a href="#work" className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">01</span>
              <span className="mobile-link-text">WORK</span>
            </a>
            <a href="#about" className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">02</span>
              <span className="mobile-link-text">ABOUT</span>
            </a>
            <a href="#skills" className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">03</span>
              <span className="mobile-link-text">SKILLS</span>
            </a>
            <a href="#contact" className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">04</span>
              <span className="mobile-link-text">CONTACT</span>
            </a>
          </nav>

          <div className="mobile-drawer-footer">
            <span className="mobile-email-label">DIRECT INQUIRIES</span>
            <a href="mailto:ysuresh33002@gmail.com" className="mobile-email-link">
              ysuresh33002@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
