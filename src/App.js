import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import About from './components/about.component';
import Contact from './components/contact.component';
import Home from './components/home.component';
import Resume from './components/resume.component';
import Projects from './components/projects.component';
import NavbarPage from './components/navbarpage.component';
import FooterPage from './components/footerpage.component';
import ScrollToTop from './components/topscroll.component';

function App() {

  return (
    <div className="App">
      <Router>
        <NavbarPage />
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/resume" component={Resume} />
        <FooterPage />
      </Router>

    </div>
  );
}

export default App;
