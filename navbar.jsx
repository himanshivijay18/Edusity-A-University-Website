import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

import { Link } from 'react-scroll'

const Navbar = () => {
  const [MobileMenu , SetMobileMenu] = useState(false);
  const Togglemenu = () => {
    MobileMenu? SetMobileMenu(false) : SetMobileMenu(true);
  }
  return (
   <nav className = 'container  dark-nav'>
    <img src = {logo} alt = "logo" className='logo' />
    <ul className={MobileMenu? '' : 'hide-mobile-menu'}>
        <li><Link to ='hero' smooth = {true} offset = {0} duration={500}>home</Link></li>
        <li><Link to ='programs' smooth = {true} offset = {-260} duration={500}>program</Link></li>
        <li><Link to ='campus' smooth = {true} offset = {-220} duration={500}>campus</Link></li>
        <li><Link to ='testimonials' smooth = {true} offset = {-260} duration={500}>testimonials</Link></li>
        <li><Link to ='contactus' smooth = {true} offset = {-260} duration={500}  className='btn'>contact us</Link></li>
    </ul>
    <img src= {menu_icon} alt="" className='menu-icon' onClick={ Togglemenu}/>
   </nav>
    
   
  )
} 

export default Navbar;