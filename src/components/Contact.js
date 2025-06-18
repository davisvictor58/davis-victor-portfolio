import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>If you'd like to connect or collaborate, feel free to reach out!</p>

      <div className="contact-links">
        <a href="mailto:dvktym@gmail.com" target="_blank" rel="noopener noreferrer">
          📧 dvktym@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/davis-victor-294688216/" target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>
        <a href="/Davis_Victor_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
