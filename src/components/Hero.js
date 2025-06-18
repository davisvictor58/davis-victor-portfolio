import { Link } from 'react-scroll';
import './Hero.css'; // for styles

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Davis Victor</span></h1>
                <h2>Software Engineer | AI @ UCLA</h2>
                <p>
                    I build scalable backend systems, intuitive interfaces, and AI-powered solutions. Previously at Accenture.
                </p>
                <Link to="contact" smooth={true} duration={500} className="contact-btn">
                    Contact Me
                </Link>
            </div>
        </section>
    );
}

export default Hero;
