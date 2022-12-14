import React from 'react'; 
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu,NavLinks, NavBtn, NavBtnLink} from './NavbarElement'

const Navbar = ( {toggle} ) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Dolla</NavLogo>
            <MobileIcon onClick={toggle} >
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Sign Up</NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnLink to='/signin'>Sign in</NavBtnLink>
              </NavBtn>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar