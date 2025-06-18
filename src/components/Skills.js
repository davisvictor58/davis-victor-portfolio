import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">

                <div className="skills-category">
                    <h3>Languages</h3>
                    <p>Python, Java, C++, C, JavaScript, SQL, TypeScript, R</p>
                </div>

                <div className="skills-category">
                    <h3>Frameworks</h3>
                    <p>React, Node.js, Angular, Next.js, NiceGUI, PyTorch, TensorFlow, Spring (basic)</p>
                </div>

                <div className="skills-category">
                    <h3>Cloud / DevOps</h3>
                    <p>AWS, Azure, Docker, Kubernetes, Git, CI/CD pipelines</p>
                </div>

                <div className="skills-category">
                    <h3>Databases</h3>
                    <p>Snowflake, MongoDB, Firestore, MySQL</p>
                </div>

            </div>
        </section>
    );
}

export default Skills;
