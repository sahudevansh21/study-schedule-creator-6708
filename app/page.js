"use client";

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Personalized Study Schedule Creator</h1>
        <p className="hero-subtitle">Conquer your studies with a tailored plan.</p>
      </header>

      <section className="problem-solution-section glass-card">
        <div className="section-content">
          <h2 className="section-title">The Problem</h2>
          <p className="section-description">
            Students often struggle to organize their study time effectively across multiple subjects and topics,
            leading to inefficient learning and increased stress. They need a structured approach to allocate time
            without manual calculation or external tools.
          </p>
        </div>
        <div className="section-content">
          <h2 className="section-title">Our Solution</h2>
          <p className="section-description">
            A web application where users can input their subjects, specific topics, estimated time required for each,
            and their weekly availability. The site then generates a personalized, color-coded study schedule,
            allowing users to intuitively adjust time slots via drag-and-drop functionality.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <Link href="/schedule-builder" className="cta-button">
          Start Building Your Schedule
        </Link>
      </section>
    </div>
  );
}
