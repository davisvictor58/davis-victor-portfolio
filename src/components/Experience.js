import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-timeline">

        <div className="experience-item">
          <h3>Advanced Software Engineer – Accenture</h3>
          <p><strong>Oct 2022 – Aug 2024 | Mumbai, India</strong></p>
          <ul>
            <li>Built AI-powered chatbots (React/Node.js), improving client decisions by 40% in MENA market.</li>
            <li>Deployed full-stack apps (Docker, Kubernetes, Azure) achieving 99.9% uptime.</li>
            <li>Trained 10+ associates; boosted team productivity by 50%.</li>
            <li>Developed REST APIs, increasing throughput by 45% with security compliance.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Engineer Intern – Zenys Digital Solutions</h3>
          <p><strong>Nov 2020 – Apr 2021 | Trivandrum, India</strong></p>
          <ul>
            <li>Built CRM SaaS app (Angular, Firebase); reduced load time by 30%.</li>
            <li>Delivered full product lifecycle: development to production support.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
