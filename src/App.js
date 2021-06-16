import './App.css';
import About from './components/about/about';
import Events from './components/events/events';
import Menu from './components/menu/our-menu';
import NavBar from './components/navigation/nav-bar';
import Contact from './components/contact/contact';
import OurValues from './components/our_values/our_values';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      {/* <h1>Iqhude African Cuisine</h1> */}

      {/* <img src={IqhudeLogo} width="500" height="500" alt="Iqhude Logo" /> */}
      <NavBar />
      <About />
      <Menu />
      <OurValues />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
