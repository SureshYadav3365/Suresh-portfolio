import React from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    categoryTag: 'CLIENT-SIDE & UI',
    skills: [
      {
        num: '01',
        name: 'HTML',
        focus: 'STRUCTURE & ACCESSIBILITY',
        desc: 'Semantic element architecture, accessible forms, document outline standards, and modern web best practices.'
      },
      {
        num: '02',
        name: 'CSS',
        focus: 'LAYOUT & DESIGN SYSTEMS',
        desc: 'Responsive layouts with Flexbox and CSS Grid, custom properties, media queries, and fluid typography.'
      },
      {
        num: '03',
        name: 'Bootstrap',
        focus: 'RESPONSIVE FRAMEWORK',
        desc: 'Grid layout systems, utility-first classes, and rapid responsive UI prototyping.'
      },
      {
        num: '04',
        name: 'JavaScript',
        focus: 'DYNAMIC SCRIPTING',
        desc: 'Core ES6+ syntax, DOM manipulation, asynchronous programming, event handling, and data structures.'
      },
      {
        num: '05',
        name: 'React',
        focus: 'COMPONENT ARCHITECTURE',
        desc: 'Component-based workflows, state management using React Hooks, JSX syntax, and modular interface design.'
      }
    ]
  },
  {
    category: 'Programming Language',
    categoryTag: 'SYSTEMS & LOGIC',
    skills: [
      {
        num: '06',
        name: 'C++',
        focus: 'CORE PROGRAMMING & OOP',
        desc: 'Object-oriented programming principles, memory management concepts, data structures fundamentals, and problem-solving.'
      }
    ]
  },
  {
    category: 'Database',
    categoryTag: 'DATA PERSISTENCE',
    skills: [
      {
        num: '07',
        name: 'MongoDB',
        focus: 'NOSQL DATABASE FUNDAMENTALS',
        desc: 'Document-oriented database concepts, JSON/BSON document structures, collections, and basic CRUD data operations.'
      }
    ]
  },
  {
    category: 'Development & Deployment Tools',
    categoryTag: 'WORKFLOW & HOSTING',
    skills: [
      {
        num: '08',
        name: 'GitHub',
        focus: 'VERSION CONTROL & COLLABORATION',
        desc: 'Git repository management, version tracking, commit workflows, branch management, and open-source practices.'
      },
      {
        num: '09',
        name: 'Vercel',
        focus: 'CLOUD DEPLOYMENT & CI',
        desc: 'Automated frontend builds, continuous preview deployments, production hosting, and domain configuration.'
      },
      {
        num: '10',
        name: 'Render',
        focus: 'WEB SERVICES & CLOUD HOSTING',
        desc: 'Deploying full-stack web applications, static sites, web services, and managing environment configurations.'
      }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header reveal">
          <div className="section-label">
            <span className="section-index">03</span>
            <span>/</span>
            <span>CURRENT TOOLKIT</span>
          </div>
          <span className="section-meta-tag">[ CAPABILITIES // 03 ]</span>
        </div>

        {/* Categorized Skills Showcase */}
        <div className="skills-editorial-wrapper reveal">
          {SKILL_CATEGORIES.map((catGroup) => (
            <div key={catGroup.category} className="skills-category-block">
              <div className="category-header-row">
                <div className="category-title-group">
                  <span className="category-indicator">//</span>
                  <h3 className="category-title">{catGroup.category}</h3>
                </div>
                <span className="category-meta-tag">{catGroup.categoryTag}</span>
              </div>

              <div className="skills-typographic-list">
                {catGroup.skills.map((skill) => (
                  <div key={skill.num} className="skill-row">
                    <div className="skill-row-left">
                      <span className="skill-index">{skill.num}</span>
                      <h4 className="skill-title">{skill.name}</h4>
                    </div>

                    <div className="skill-row-right">
                      <span className="skill-focus-tag">{skill.focus}</span>
                      <p className="skill-desc-text">{skill.desc}</p>
                    </div>

                    <div className="skill-row-arrow" aria-hidden="true">→</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Footnote */}
        <div className="skills-editorial-footer reveal">
          <span className="footer-bracket">//</span>
          <span>PRACTICING TECHNOLOGIES & TOOLS STUDIED THROUGH BCA COURSEWORK AND HANDS-ON PROJECTS.</span>
        </div>
      </div>
    </section>
  );
}
