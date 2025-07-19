import React from 'react'
import './Hero.css'
import profile from '../../assets/pro.svg'
export default function HeroSec() {
  return (
    <div className="hero">
  <img src={profile} alt="Surafel profile" />
  <h1><span>Hi, I'm Alex</span> — A Passionate Front-End Developer</h1>
  <p>
    I specialize in crafting clean, responsive, and user-friendly web interfaces. 
    Based in Ethiopia, and now working at Ahadu Bank and remotely.
  </p>
  <div className="hero-action">
    <div className="hero-connect">Connect Me</div>
  <div className="hero-resume">My Resume</div>
  </div>
  
</div>
  )
}
