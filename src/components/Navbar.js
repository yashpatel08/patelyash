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

  const handleNavLinkClick = (e) => {
    const links = document.querySelectorAll('.navlink');
    links.forEach(link => link.classList.remove('clicked'));
    e.target.classList.add('clicked');
  };


  return (
    <div className='both-nav'>
      <div className='navbar'>
        <a href='#about' className='navlink' onClick={handleNavLinkClick}>About</a>
        <a href='#skill' className='navlink' onClick={handleNavLinkClick}>Skill</a>
        <a href='#education' className='navlink' onClick={handleNavLinkClick}>Education and Experience</a>
        <a href='#projects' className='navlink' onClick={handleNavLinkClick}>Projects</a>
        <a href='#contact' className='navlink' onClick={handleNavLinkClick}>Contact</a>
      </div>
      <div className='res-container'>
        <h3><img className='logo' src={yp} alt='yp' /></h3>
        <button className='toggle-btn' onClick={toggleMenu}>
          <i className={isMenuClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      <div className={`res-nav ${isMenuClicked ? 'active' : ''}`}>
        <a href='#about' className='navlink' onClick={handleNavLinkClick}>About</a>
        <a href='#skill' className='navlink' onClick={handleNavLinkClick}>Skill</a>
        <a href='#education' className='navlink' onClick={handleNavLinkClick}>Education and Experience</a>
        <a href='#projects' className='navlink' onClick={handleNavLinkClick}>Projects</a>
        <a href='#contact' className='navlink' onClick={handleNavLinkClick}>Contact</a>
      </div>
    </div>
  );
};


export default Navbar