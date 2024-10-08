import Navbar from './components/navbar/Navbar';
import AboutMe from './components/AboutMe';
import Landing from './components/Landing';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import GenericBackground from './components/sketches/GenericBackground';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/aboutme", "/contact", "/projects", "/cv"]}>
            <GenericBackground />
          </Route>
        </Switch>
        <Switch>
        </Switch>
        <Navbar />
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/cv">
            <Portfolio />
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
