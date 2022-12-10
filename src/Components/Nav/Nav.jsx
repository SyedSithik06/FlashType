import React from "react";
import logo from './../../assets/logo.png';
import './Nav.css';


export default function Nav() {
  return (
    <div className="nav-container">
        <div className="nav-left">
             <img className="flash-logo"  src={logo} alt="logo" />
             <p className="flash-logo-text">FlashType</p>
        </div>
        <div className="nav-right">
            <a
               target="blank"
               className="nav-git-link"
               href="https://github.com/SyedSithik06"
               rel="noreferrer"
               >
                  GIT
               </a>
        </div>
    </div>
  )
}
