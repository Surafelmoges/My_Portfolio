import React from 'react'
import './About.css'
import teme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
export default function About() {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={teme_pattern} alt="" />
        </div>
      
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a creative and detail-oriented developer with a passion for front-end technologies.</p>
                <p>I enjoy turning ideas into interactive and visually appealing web applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React Js</p><hr style={{width: "70%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width: "60%"}}/>
                </div>
                <div className="about-skill">
                    <p>Next Js</p><hr style={{width: "50%"}}/>
                </div>
            </div>
        </div>
      </div>

      <div className="about-achivements">
        <div className="about-achivment">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
         <div className="about-achivment">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
         <div className="about-achivment">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}
