import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navigation/nav-bar';
import Home from './Home';
import FullEvents from './components/events/full-events';
import FullMenu from './components/menu/full-menu';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path="/full-menu" component={FullMenu} />
        <Route exact={true} path="/events" component={FullEvents} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
