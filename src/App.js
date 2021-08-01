import './css/Wrapper.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Landing from './components/Landing';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Landing />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
