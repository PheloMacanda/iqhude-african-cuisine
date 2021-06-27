import './nav-styles.css';
import { Link } from 'react-scroll';

const NavBar = () => {

    return (
        <>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
                <div className="menuToggle">
                </div>
            </label>
            <header className="header">
                <a href="/" className="logo">Iqhude African Cuisine<span>.</span></a>
                <ul className="navigation">
                    <li><Link to="banner" spy={true} smooth={true}>Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                    <li><Link to="menu" spy={true} smooth={true}>Menu</Link></li>
                    <li><Link to="our_values" spy={true} smooth={true}>Our Values</Link></li>
                    <li><Link to="events" spy={true} smooth={true}>Events</Link></li>
                    <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                </ul>
            </header>
        </>
    );
}

export default NavBar;