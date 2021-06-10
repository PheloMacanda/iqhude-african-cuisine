import './nav-styles.css';

const NavBar = () => {

    return (
        <>
            <header>
                <a href="/" className="logo">Iqhude African Cuisine<span>.</span></a>
                <div className="menuToggle">
                    
                </div>
                <ul className="navigation">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </header>
            <section className="banner" id="banner">
                <div className="content">
                    <h2>Always Serve The African Best!</h2>
                    <p>
                        At Iqhude African Cuisine we have our secret ingredient which makes us a very special african cuisine in South Africa.
                        We always know our customer's needs and what they prefer, we make various african dishes in which you can choose from,
                        we promise you once you taste our food you will definitely want more.
                </p>
                    <a href="/" className="btn">Our Menu</a>
                </div>
            </section>
        </>
    );
}

export default NavBar;