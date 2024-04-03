import React, { useState } from 'react'
import yp from '../media/web-icon.png'

const Navbar = () => {
  // const [open,setOpen]=useState(false);
  // function toggle(){
  //   setOpen((open)=> !open);
  // }
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className='both-nav'>
      <div className='navbar'>
        <a href='#about' className='navlink'>About</a>
        <a href='#skill' className='navlink'>Skill</a>
        <a href='#education' className='navlink'>Education and Experience</a>
        <a href='#projects' className='navlink'>Projects</a>
        <a href='#contact' className='navlink'>Contact</a>
      </div>
      <div className='res-container'>
        <h3><img className='logo' src={yp} alt='yp' /></h3>
        <button className='toggle-btn' onClick={toggleMenu}>
          <i className={isMenuClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      <div className={`res-nav ${isMenuClicked ? 'active' : ''}`}>
        <a href='#about' className='navlink'>About</a>
        <a href='#skill' className='navlink'>Skill</a>
        <a href='#education' className='navlink'>Education and Experience</a>
        <a href='#projects' className='navlink'>Projects</a>
        <a href='#contact' className='navlink'>Contact</a>
      </div>
    </div>
  );
};


export default Navbar