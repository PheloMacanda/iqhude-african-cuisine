import NavItem from './components/navigation/nav-item';
import About from './components/about/about';
import Events from './components/events/events';
import Menu from './components/menu/our-menu';
import Contact from './components/contact/contact';
import OurValues from './components/our_values/our_values';

const Home = () => {

    return (
        <>
            <NavItem />
            <About />
            <Menu />
            <OurValues />
            <Events />
            <Contact />
        </>
    );

}

export default Home;