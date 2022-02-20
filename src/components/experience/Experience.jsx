import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {SiBootstrap} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
const Experience = () => {
  return (
    <section id='experience'>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <AiOutlineHtml5 className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <DiCss3 className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiJavascript className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiBootstrap className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiTailwindcss className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        
        <div className="experience__frontend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaNode className='experience__details-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <FaPython className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiMongodb className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiMysql className='experience__details-icon'/>
            <div>
            <h4>Mysql</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default Experience