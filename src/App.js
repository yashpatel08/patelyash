import './App.css';
import './contact.css';
import './footer.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import dp from './dp.jpg';
import Experience from './components/Experience';
import Skill from './components/Skills';
import Contact from './components/Contact';
import Dm from './components/Dm';
import Footer from './components/Footer';
// import Toogle from './portfolio';
function App() {
  return (
    <div className="App">
      {/* <Toogle /> */}
      <Navbar></Navbar>

      <div className='center'>
        <Home className="home"></Home>
        <img className="dp" src={dp} width="500" height="300" alt="dp" />
   
      <div className="exper">
      <Experience></Experience>
      </div>
      </div>
      <Skill></Skill>

      <Contact></Contact>
      <Dm></Dm>
      <Footer></Footer>
    </div>
  );
}

export default App;
