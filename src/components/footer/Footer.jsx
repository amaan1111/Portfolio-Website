import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiNeovim} from 'react-icons/si'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'><SiNeovim/></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://discordapp.com/users/657983785949986826" target="_blank"><BsDiscord/></a>
        <a href="https://www.linkedin.com/in/amaan-bagalkote-684168148/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/amaan_719/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/amaanbagalkote" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Amaan Bagalkote </small>
      </div>
    </footer>
  )
}

export default Footer