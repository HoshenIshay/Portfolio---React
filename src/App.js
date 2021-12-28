import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Services />
     <Project />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
