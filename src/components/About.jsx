import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header reveal">
          <div className="section-label">
            <span className="section-index">02</span>
            <span>/</span>
            <span>A LITTLE ABOUT ME</span>
          </div>
          <span className="section-meta-tag">[ PERSPECTIVE // 02 ]</span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="about-editorial-grid reveal">
          {/* Left Column: Editorial Statement & Education Callout */}
          <div className="about-col-left">
            <h2 className="about-hero-quote">
              Bridging foundational computer science principles with modern web engineering.
            </h2>

            <div className="education-editorial-callout">
              <div className="edu-callout-header">
                <span className="edu-tag">ACADEMIC CREDENTIAL</span>
                <span className="edu-year">2025–2028</span>
              </div>
              <p className="edu-degree-text">
                BCA · Manipal University Jaipur · 2025–2028
              </p>
              <span className="edu-sub">Bachelor of Computer Applications (Online)</span>
            </div>
          </div>

          {/* Right Column: Editorial Body & Foundations */}
          <div className="about-col-right">
            <div className="about-text-container">
              <p className="about-text-lead">
                I'm currently pursuing a Bachelor of Computer Applications at Manipal University Jaipur (Online), 
                actively learning and practicing web development, programming, database fundamentals, version control, and deployment.
              </p>

              <p className="about-text-body">
                My approach to software and the web is rooted in understanding how things operate under the hood. 
                Rather than jumping between disconnected frameworks, I spend deliberate hours practicing semantic HTML, 
                modern CSS layouts, and native JavaScript before structuring components in React.
              </p>

              <p className="about-text-body">
                Alongside frontend engineering, I study core programming logic with C++, database concepts with MongoDB, 
                and reliable workflows using Git, GitHub, and cloud deployments on Vercel. As a fresher, I approach 
                every challenge with high attention to detail, a humble learning mindset, and a desire to contribute meaningfully.
              </p>
            </div>

            {/* Academic & Professional Principles Grid */}
            <div className="about-principles-grid">
              <div className="principle-cell">
                <span className="principle-number">01</span>
                <span className="principle-title">WEB DEVELOPMENT</span>
                <p className="principle-desc">Clean semantic HTML, modern responsive CSS layouts, and dynamic React components.</p>
              </div>

              <div className="principle-cell">
                <span className="principle-number">02</span>
                <span className="principle-title">PROGRAMMING LOGIC</span>
                <p className="principle-desc">Strong problem-solving, algorithmic thinking, and core OOP fundamentals in C++.</p>
              </div>

              <div className="principle-cell">
                <span className="principle-number">03</span>
                <span className="principle-title">DATABASE & STORAGE</span>
                <p className="principle-desc">Document structures, collections, and foundational CRUD operations with MongoDB.</p>
              </div>

              <div className="principle-cell">
                <span className="principle-number">04</span>
                <span className="principle-title">GIT & DEPLOYMENT</span>
                <p className="principle-desc">Structured version control on GitHub and continuous frontend hosting on Vercel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
