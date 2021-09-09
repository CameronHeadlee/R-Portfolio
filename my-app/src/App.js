import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import PortfolioContainer from './components/PortfolioContainer';


function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Navigation />
      <Project />
      <PortfolioContainer />
    </div>
  );
}

export default App;
