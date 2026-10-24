import React from 'react';
import './Work.css';

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header reveal">
          <div className="section-label">
            <span className="section-index">01</span>
            <span>/</span>
            <span>SELECTED WORK</span>
          </div>
          <span className="section-meta-tag">[ ARCHIVE // 01 ]</span>
        </div>

        {/* Large Editorial Project Showcase */}
        <div className="project-editorial-card reveal">
          {/* Card Top Meta */}
          <div className="project-top-meta">
            <div className="project-id-group">
              <span className="project-number">01</span>
              <span className="project-type-badge">PERSONAL PROJECT</span>
            </div>
            <div className="project-year-meta">
              <span className="meta-dot"></span>
              <span>2025–2026 // COMPLETED</span>
            </div>
          </div>

          <div className="project-body-grid">
            {/* Left Content Column */}
            <div className="project-content-col">
              <h3 className="project-title">Todo App</h3>
              
              <p className="project-description">
                A personal web development project focused on managing tasks through a simple interface.
              </p>

              <div className="project-details-block">
                <span className="details-heading">OBJECTIVE & ARCHITECTURE</span>
                <p className="details-text">
                  Engineered to solidify core frontend fundamentals — focusing on state management, 
                  DOM event handling, dynamic UI updates, and local persistence with a minimal footprint.
                </p>
              </div>

              {/* Specs & Tech Stack */}
              <div className="project-specs-table">
                <div className="project-spec-row">
                  <span className="spec-name">CORE STACK</span>
                  <span className="spec-data">HTML5 • CSS3 • JavaScript</span>
                </div>
                <div className="project-spec-row">
                  <span className="spec-name">FEATURES</span>
                  <span className="spec-data">Task Creation, Filter Tabs, State Persistence</span>
                </div>
                <div className="project-spec-row">
                  <span className="spec-name">STATUS</span>
                  <span className="spec-data status-live">Active Local Build</span>
                </div>
              </div>

              {/* Action / Preview Badge (No fake links) */}
              <div className="project-action-area">
                <div className="project-preview-tag" title="Project preview running locally">
                  <span className="preview-indicator" aria-hidden="true"></span>
                  <span>PROJECT PREVIEW</span>
                </div>
                <span className="preview-note">Source code cataloged in personal study repository</span>
              </div>
            </div>

            {/* Right Visual Mockup Column */}
            <div className="project-visual-col">
              <div className="app-mockup-frame">
                {/* Mockup Top Header */}
                <div className="mockup-header">
                  <div className="mockup-window-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="mockup-app-title">TodoApp // Workspace</div>
                  <div className="mockup-sync-badge">SYNCED</div>
                </div>

                {/* Mockup Interior UI */}
                <div className="mockup-interior">
                  {/* Task App Bar */}
                  <div className="mockup-search-row">
                    <div className="mockup-input-fake">
                      <span className="mockup-placeholder">Add a new task...</span>
                    </div>
                    <button type="button" className="mockup-add-btn" tabIndex="-1">
                      + ADD
                    </button>
                  </div>

                  {/* Filter Tabs */}
                  <div className="mockup-tabs">
                    <span className="mockup-tab active">All (4)</span>
                    <span className="mockup-tab">Active (2)</span>
                    <span className="mockup-tab">Completed (2)</span>
                  </div>

                  {/* Task Items */}
                  <div className="mockup-task-list">
                    <div className="mockup-task-item done">
                      <span className="task-check done-check">✓</span>
                      <span className="task-title strike">Design responsive grid system</span>
                      <span className="task-tag">CSS</span>
                    </div>

                    <div className="mockup-task-item done">
                      <span className="task-check done-check">✓</span>
                      <span className="task-title strike">Implement DOM state listeners</span>
                      <span className="task-tag">JS</span>
                    </div>

                    <div className="mockup-task-item active">
                      <span className="task-check active-check">○</span>
                      <span className="task-title">Build task filtering & local persistence</span>
                      <span className="task-tag lime-tag">IN PROGRESS</span>
                    </div>

                    <div className="mockup-task-item active">
                      <span className="task-check active-check">○</span>
                      <span className="task-title">Optimize mobile touch interactions</span>
                      <span className="task-tag">UI/UX</span>
                    </div>
                  </div>

                  {/* Mockup Bottom Bar */}
                  <div className="mockup-footer-bar">
                    <span>2 tasks remaining</span>
                    <span className="mockup-accent-state">● LOCAL STORAGE ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote on verified works */}
        <div className="work-footnote reveal">
          <span className="footnote-bracket">[</span>
          <span className="footnote-message">
            Additional practical web projects are currently in development and will be showcased here upon peer review.
          </span>
          <span className="footnote-bracket">]</span>
        </div>
      </div>
    </section>
  );
}
