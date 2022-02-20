import React from 'react'
import './about.css'
import ABOUT from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineCastForEducation} from 'react-icons/md'
import {IoLogoGameControllerA} from 'react-icons/io'
const About = () => {
  return (
    <section id='about'>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className='about__me-image'>
          <img src={ABOUT} alt="About Image" />
          </div>
          </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <MdOutlineCastForEducation className='about__icon'/>
              <h5>Qualifcations</h5>
              <small>B.Tech Comp Science</small>
            </article>

            <article className='about__card'>
              <IoLogoGameControllerA className='about__icon'/>
              <h5>Hobbies</h5>
              <ul>
              <li><small>Gaming</small></li>
              <li><small>Music</small></li>
              <li><small>Reading</small></li>
              </ul>
              
            </article>
            
          </div>
          <p>I am a reliable, flexible and passionate job seeker with strong
ability to work under pressure and eager to secure entry-level
front end developer position in competitive environment. Ready to
help team achieve company goals.

          </p>
          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
    
  )
}

export default About
