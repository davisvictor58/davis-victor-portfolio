import { Link } from 'react-scroll';
import './NavBar.css'; // optional for styling

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;