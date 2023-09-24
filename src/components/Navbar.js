import React from 'react';
import yp from './yp.png';
import {GiHamburgerMenu} from "react-icons/gi";


export default function Navbar(props) {

    return (
        <div className="resnav">
            <div className="navbar" id="navbar">
                <div className="sticky">
                    <nav className="navbarr" id="Navbar">
                        <div  className="alllinks" id="Alllinks">
                            <ul> 
                                <li> <img className="logo-img" src={yp} alt="yp" /></li>
                                <li className="menu-list"><a href="#Home"><i className="fa-solid fa-house"> Home</i></a></li>
                                <li className="menu-list"><a href="#Experience"><i className="fa-solid fa-briefcase"> Experience</i></a></li>
                                <li className="menu-list"><a href="#skill1"><i className="fa-solid fa-code"> Skills</i></a></li>
                                <li className="menu-list"><a href="#contact"><i className="fa-solid fa-envelope"> Contact</i></a></li>
                                <li className="menu-list"><a href="#DM"><i className="fa-brands fa-telegram"> DM</i></a></li>
                            </ul>
                        </div>

                        <div className="search">
                            <input type="text" name="search" id="search" placeholder="Search --- patelyash.github.io" />
                        </div>
                        <div className="toggle_container" id="toggle">
                            <a className="hamburger" href='#'><GiHamburgerMenu />
                            </a>
                            <li><a className="toggle-items" href="#Home">Home</a></li>
                            <li><a className="toggle-items" href="#Experience">Experience</a></li>
                            <li><a className="toggle-items" href="#Skill">Skills</a></li>
                            <li><a className="toggle-items" href="#contact">Contact</a></li>
                            <li><a className="toggle-items" href="#DM">DM</a></li>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}


