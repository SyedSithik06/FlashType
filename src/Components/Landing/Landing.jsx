import React from "react";
import './Landing.css';
import  hero from './../../assets/hero.png';
import Typewriter from 'typewriter-effect';



export default function Landing() {
  return (
    <div className="landing-container">
        <div data-aos="fade-right" className="landing-left"> 
         <h1 className="landing-header">Can You Type...</h1>
         <div className="typewriter-container">
        <Typewriter
             options={{
                     strings: ['Fast...?', 'Correct...?','Quick...?'],
                     autoStart: true,
                     loop: true,
             }}
       />
         </div>
        </div>
        <div className="landing-right">
            <img data-aos="fade-left"
                 className="flash-img"
                 src={hero}
                 alt="hero"
             />
        </div>
    </div>
  )
}
