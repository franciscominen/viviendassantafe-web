import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { RiPencilRuler2Line, RiContactsBook2Line } from "react-icons/ri";
import {HiOutlinePhotograph, HiOutlineUserGroup} from "react-icons/hi";
import {FiTool} from "react-icons/fi"
import {AiOutlineHome} from "react-icons/ai"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from "@chakra-ui/react"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <header>
        <nav>

          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={"/assets/img/logo.png"} alt=""/>
          </NavLink>

          {/* <div className='menu-icon' onClick={handleClick}>
            { click ? <CgClose style={{color:'#003B71'}}/> : <CgMenu style={{color:'#003B71'}}/>}
          </div> */}

          <ul className='nav-menu'>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >
                <AiOutlineHome className='nav-icon'/>  
                <span>Nosotros</span> 
              </NavLink>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to='/nosotros'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >
                <HiOutlineUserGroup className='nav-icon'/>  
                <span>Nosotros</span> 
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/modelos'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >
                  <RiPencilRuler2Line className='nav-icon'/>
                  <span>Modelos</span> 
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/galeria'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >   
                  <HiOutlinePhotograph className='nav-icon'/>
                  <span>Galeria</span> 
              </NavLink>
            </li>
            <li className='nav-item'>
              <Menu>
                <MenuButton className='nav-dropdown' rightIcon={<ChevronDownIcon style={{color:'white'}}/>}>
                    <FiTool className='nav-icon'/>
                    <span>Servicios</span> 
                </MenuButton>
                <MenuList className='nav-dropdown-list'>
                    <MenuItem>Etapas de construccion</MenuItem>
                    <hr className='divider'/>
                    <MenuItem>Wood Frame</MenuItem>
                    <hr className='divider'/>
                    <MenuItem>Steel Frame</MenuItem>
                    <hr className='divider'/>
                    <MenuItem>Cotiza tu hogar</MenuItem>
                </MenuList>
              </Menu>
            </li>
            <li className='nav-item' style={{border:'none'}}>
              <NavLink
                to='/contacto'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >
                  <RiContactsBook2Line className='nav-icon'/>
                  <span>Contacto</span> 
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </header>
      
    </>
  );
}

export default Navbar;