import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Navigation from './components/Navigation';
import  BottomNav  from './components/BottomNav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
      
        <Router>
        <Header>
          <Navigation/>
        </Header>
        <Route exact path="/R-Portfolio">
        <About />
        </Route>
        <Route exact path='/Portfolio'>
        <Portfolio>
          <Project />
        </Portfolio>
        </Route>
        <Route exact path='/Contact'>
        <Contact/>
        </Route>
        <Route exact path='/Resume'>
        <Resume/>
        </Route>
        <Footer>
          <BottomNav/>
        </Footer>
        </Router>
      
      
    
  );
}

export default App;