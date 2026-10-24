import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-editorial-section">
      {/* Decorative Architectural Grid Coordinates */}
      <div className="hero-geo-marker top-left" aria-hidden="true">+</div>
      <div className="hero-geo-marker top-right" aria-hidden="true">+</div>
      <div className="hero-geo-marker bottom-left" aria-hidden="true">+</div>
      <div className="hero-geo-marker bottom-right" aria-hidden="true">+</div>

      <div className="container hero-editorial-container">
        {/* Left Column: Asymmetrical Editorial Narrative */}
        <div className="hero-narrative-col">
          <div className="hero-meta-bar">
            <span className="hero-index-tag">SYS // 00</span>
            <span className="hero-meta-sep">/</span>
            <span className="hero-status-pill">
              <span className="status-dot-lime"></span>
              <span>AVAILABLE FOR INTERNSHIPS</span>
            </span>
          </div>

          <h1 className="hero-editorial-title">
            <span className="hero-title-line">DESIGNING</span>
            <span className="hero-title-line">
              AND <span className="hero-accent-text">BUILDING</span>
            </span>
            <span className="hero-title-line">FOR THE WEB.</span>
          </h1>

          <p className="hero-intro-text">
            I'm Suresh Yadav — a BCA student and aspiring web developer focused on building clean, 
            responsive and useful digital experiences.
          </p>

          <div className="hero-action-row">
            <a href="#work" className="btn-editorial-primary">
              <span>EXPLORE MY WORK</span>
              <span className="btn-arrow" aria-hidden="true">↘</span>
            </a>
            <a href="#contact" className="btn-editorial-secondary">
              <span>LET'S CONNECT</span>
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Quick Technical Specs Strip */}
          <div className="hero-specs-strip">
            <div className="spec-item">
              <span className="spec-label">EDUCATION</span>
              <span className="spec-value">BCA (2025–2028)</span>
            </div>
            <div className="spec-divider"></div>
            <div className="spec-item">
              <span className="spec-label">INSTITUTION</span>
              <span className="spec-value">Manipal Univ Jaipur</span>
            </div>
            <div className="spec-divider"></div>
            <div className="spec-item">
              <span className="spec-label">LOCATION</span>
              <span className="spec-value">India (Remote Ready)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Code Editor Panel */}
        <div className="hero-panel-col">
          <div className="editor-panel-frame">
            {/* Panel Top Bar */}
            <div className="editor-top-bar">
              <div className="editor-controls">
                <span className="ctrl-dot"></span>
                <span className="ctrl-dot"></span>
                <span className="ctrl-dot"></span>
              </div>
              <div className="editor-tab-active">
                <span className="editor-tab-icon">#</span>
                <span className="editor-tab-name">portfolio.css</span>
              </div>
              <div className="editor-geo-coord" aria-hidden="true">
                SYS.SPEC.01
              </div>
            </div>

            {/* Code Body with Blinking Cursor */}
            <div className="editor-code-body">
              <div className="code-line-numbers" aria-hidden="true">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
              </div>

              <pre className="code-snippet-pre">
                <code>
                  <span className="syntax-comment">/* Developer Specification */</span>{'\n'}
                  <span className="syntax-selector">.developer</span> &#123;{'\n'}
                  {'  '}<span className="syntax-property">name</span>: <span className="syntax-string">'Suresh Yadav'</span>;{'\n'}
                  {'  '}<span className="syntax-property">status</span>: <span className="syntax-string">'BCA Student'</span>;{'\n'}
                  {'  '}<span className="syntax-property">university</span>: <span className="syntax-string">'Manipal University Jaipur'</span>;{'\n'}
                  {'  '}<span className="syntax-property">focus</span>: <span className="syntax-value">frontend-web</span>;{'\n'}
                  {'  '}<span className="syntax-property">stack</span>: <span className="syntax-lime">[HTML, CSS, JS, React]</span>;{'\n'}
                  {'  '}<span className="syntax-property">responsive</span>: <span className="syntax-value">true</span>;{'\n'}
                  {'  '}<span className="syntax-property">accessibility</span>: <span className="syntax-value">first-class</span>;{'\n'}
                  {'  '}<span className="syntax-property">passion</span>: <span className="syntax-string">'Clean & Useful UI'</span>;{'\n'}
                  {'  '}<span className="syntax-property">active-build</span>: <span className="syntax-value">in-progress</span>;{'\n'}
                  &#125;<span className="blinking-cursor" aria-hidden="true"></span>
                </code>
              </pre>
            </div>

            {/* Panel Bottom Meta */}
            <div className="editor-footer-bar">
              <div className="editor-status-item">
                <span className="footer-lime-indicator" aria-hidden="true"></span>
                <span>READY // CLEAN COMPILATION</span>
              </div>
              <div className="editor-format-item">UTF-8 • CSS3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
