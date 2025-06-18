import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">

                <div className="project-card">
                    <h3>Vehicular Control Unit – Bruin Racing</h3>
                    <p><strong>Sep 2024 – Present</strong></p>
                    <ul>
                        <li>Automated VCU firmware builds using Python pipelines, reducing errors by 30%.</li>
                        <li>Streamlined configuration across hardware variants with version control.</li>
                        <li>Improved reliability in hardware-in-the-loop simulations.</li>
                    </ul>
                </div>

                <div className="project-card">
                    <h3>Machine Translation Platform – IEEE</h3>
                    <p><strong>May 2023</strong></p>
                    <ul>
                        <li>Built NLP-based educational tool for South Indian languages (5,000+ word pairs).</li>
                        <li>Implemented hybrid rule-based models with 90% accuracy.</li>
                        <li>Optimized trie search to boost lookup speed by 40%.</li>
                    </ul>
                    <a
                        href="https://ieeexplore.ieee.org/document/10126256"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View Paper on IEEE Xplore
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
