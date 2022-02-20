import React from 'react'
import CTA from './CTA'
import ME from '../../assets/ME.jpg'
import HeaderSocials from './HeaderSocials'
import './header.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm </h5>
            <h1>Amaan</h1>
            <h5 className="text-light">
                Full Stack Developer
            </h5>
            <CTA/>
            <HeaderSocials/>
            <div >
                <img src={ME} alt='me' className="me"/>
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down<AiOutlineArrowRight/></a>
        </div>
    </header>
  )
}

export default Header