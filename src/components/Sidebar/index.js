import React from 'react';
import  {SidebarContainer , Icon, CloseIcon, SidebarLink, SidebarWrap, SidebarMenu,SidebtnWrap, SidebarRoute} from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrap>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}> About</SidebarLink>
         <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
        </SidebtnWrap>
        </SidebarWrap>
    </SidebarContainer>
  )
}

export default Sidebar