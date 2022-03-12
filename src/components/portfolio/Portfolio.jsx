import React from 'react'
import './portfolio.css'
import PROJ1 from '../../assets/Proj1.jpg'
import PROJ2 from '../../assets/Proj2.jpg'
import PROJ3 from '../../assets/Proj3.jpg'
import PROJ4 from '../../assets/Proj4.jpg'
import PROJ5 from '../../assets/Proj5.jpg'
import PROJ6 from '../../assets/Proj6.jpg'

const data = [
  {
    id: 1,
    image: PROJ1,
    title: "Personal Portfolio Website",
    github: "https://github.com/amaan1111/Portfolio-Website.",
    demo: "https://neosama.netlify.app/",
  },
  {
    id: 2,
    image: PROJ2,
    title: "Multi Calculator",
    github: "https://github.com/amaan1111/Multi-Calculator",
    demo: "https://multicalculator.netlify.app",
  },
  {
    id: 3,
    image: PROJ3,
    title: "Weather App",
    github: "https://github.com/amaan1111/Weather-App",
    demo: "https://github.com/amaan1111/Weather-App",
  },
  {
    id: 4,
    image: PROJ4,
    title: "2 Player Shooting game",
    github: "https://github.com/amaan1111/2-Player-shooting-game",
    demo: "https://github.com/amaan1111/2-Player-shooting-game",
  },
  {
    id: 5,
    image: PROJ5,
    title: "Form Validation",
    github: "https://github.com/amaan1111/Form-Validation",
    demo: "https://github.com/amaan1111/Form-Validation",
  },
  {
    id: 6,
    image: PROJ6,
    title: "Nobel Prize Winners",
    github: "https://github.com/amaan1111/Nobel-Prize-Winners",
    demo: "https://github.com/amaan1111/Nobel-Prize-Winners",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div >
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
