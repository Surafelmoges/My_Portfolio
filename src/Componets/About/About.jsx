import React from 'react'
import './About.css'
import teme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
export default function About() {
  return (
   <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={teme_pattern} alt="pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Surafel profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I'm Surafel, a passionate front-end developer with a strong eye for design and clean code.</p>
            <p>Currently working at Ahadu Bank and remotely on side projects that blend creativity and performance.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next.js</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}
