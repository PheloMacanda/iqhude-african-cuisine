import './nav-styles.css';
import { Link } from 'react-scroll';

const NavItem = () => {

    return (
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
    );
}

export default NavItem;