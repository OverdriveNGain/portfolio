import Navbar from './components/navbar/Navbar';
import AboutMe from './components/AboutMe';
import Landing from './components/Landing';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
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
        <Routes>
          <Route path="/aboutme" element={<GenericBackground />} />
          <Route path="/contact" element={<GenericBackground />} />
          <Route path="/projects/*" element={<GenericBackground />} />
          <Route path="/cv" element={<GenericBackground />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/cv" element={<Portfolio />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
