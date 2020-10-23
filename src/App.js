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

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarPage />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Router>

    </div>
  );
}

export default App;
