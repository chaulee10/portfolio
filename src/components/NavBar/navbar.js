import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (

        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skilks' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenuBtn' smooth={true} duration={500} onClick={() => {
                document.getElementById("contact").scrollIntoView();
                }}>
                <img src={contactImg} alt="" className='desktopMenuImg' />Contact Me
            </button> 

            <img src={menu} alt="Menu" className='mobileMenu' onClick={() => setShowMenu(!showMenu)} />

            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skilks' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Portfolio</Link>
                {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Clients</Link> */}
            </div>
        </nav>



    )
}

export default Navbar;