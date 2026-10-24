import React from 'react';
import './Ticker.css';

const SKILLS_LIST = [
  'HTML',
  'CSS',
  'BOOTSTRAP',
  'JAVASCRIPT',
  'REACT',
  'RESPONSIVE UI',
  'CLEAN CODE',
];

export default function Ticker() {
  // Duplicate list to guarantee seamless infinite scroll
  const items = [...SKILLS_LIST, ...SKILLS_LIST, ...SKILLS_LIST];

  return (
    <div className="ticker-wrapper" aria-label="Skills & Technologies Marquee">
      <div className="ticker-track">
        {items.map((skill, idx) => (
          <span key={idx} className="ticker-item">
            <span className="ticker-text">{skill}</span>
            <span className="ticker-divider" aria-hidden="true">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
