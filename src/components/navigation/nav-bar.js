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
            <section className="banner" id="banner">
                <div className="content">
                    <h2>Always Serve The African Best!</h2>
                    <p>
                        At Iqhude African Cuisine we have our secret ingredient which makes us a very special african cuisine in South Africa.
                        We always know our customer's needs and what they prefer, we make various african dishes in which you can choose from,
                        we promise you once you taste our food you will definitely want more!
                    </p>
                    <Link to="menu" spy={true} smooth={true} className="btn">
                        Our Menu
                    </Link>
                </div>
            </section>
        </>
    );
}

export default NavBar;