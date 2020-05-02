import React, {useEffect, ReactDOM} from 'react'

import './Header.scss'

export default function Header() {

    function openNav() {
        document.getElementById('side-nav-wrapper').style.width = "100%"
    }

    function closeNav() {
        document.getElementById('side-nav-wrapper').style.width = "0"
    }


    

 
    return (
        <div className="Header-div">
            <header className="Header">
            <div className="logo">
                <a href="#">tommypurkiss</a>
            </div>
            <span className="menu-btn hidden" onClick={openNav}>&#9776;</span>
            <nav>
                <ul>
                    <li><a href="#projects-title">Projects</a></li>
                    {/* <li><a href="#about">About</a></li> */}
                    <li><a href="#skills">Skills</a></li>

                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="side-nav-wrapper hidden" id="side-nav-wrapper" >
                {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
                <span className="closebtn" onClick={closeNav}>&times;</span>

                <a href="#projects-title" onClick={closeNav}>Projects</a>
                {/* <a href="#about" onClick={closeNav}>About</a> */}
                <a href="#skills" onClick={closeNav}>Skills</a>

                <a href="#contact" onClick={closeNav}>Contact</a>
            </div>
        </header>
        </div>
    )
}
