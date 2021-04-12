import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CgClose, CgMenu } from "react-icons/cg";
import {FaUsers} from "react-icons/fa";
import {IoHome, IoConstructSharp} from "react-icons/io5"
import {IoMdPhotos} from "react-icons/io"
import {MdContactPhone} from "react-icons/md"
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
            <img src={"/assets/img/logoAzul.svg"} alt=""/>
          </NavLink>

          <div className='menu-icon' onClick={handleClick}>
            { click ? <CgClose style={{color:'#003B71'}}/> : <CgMenu style={{color:'#003B71'}}/>}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                <FaUsers className='nav-icon'/>  
                Nosotros
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/modelos'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >
                  <IoHome className='nav-icon'/>
                  Modelos
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/galeria'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >   
                  <IoMdPhotos className='nav-icon'/>
                  Galeria
              </NavLink>
            </li>
            <li className='nav-item'>
              <Menu>
                <MenuButton className='nav-dropdown' rightIcon={<ChevronDownIcon style={{color:'white'}}/>}>
                    <IoConstructSharp className='nav-icon'/>
                    Servicios
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
            <li className='nav-item'>
              <NavLink
                to='/contacto'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='navLink-active'
              >
                  <MdContactPhone className='nav-icon'/>
                  Contacto
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </header>
      
    </>
  );
}

export default Navbar;