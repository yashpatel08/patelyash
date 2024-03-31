import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './style.css'
import Home from './components/Home';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Work from './components/Work';
import Footer from './components/Footer';

const App = () => {
  return (
    <>

      <div>

        <Navbar />
        <Home />
        <About /> 
        <Skills />
         <Experience /> 
         <Work /> 
         <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;

