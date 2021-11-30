import React from 'react';

import * as Styled from './SidebarElements.jsx';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Styled.SidebarContainer isOpen={isOpen}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink to="/" onClick={toggle}>
            Home
          </Styled.SidebarLink>
          <Styled.SidebarLink to="/about" onClick={toggle}>
            About
          </Styled.SidebarLink>
          <Styled.SidebarLink to="/contact" onClick={toggle}>
            Contact
          </Styled.SidebarLink>
          <Styled.SidebarLink to="/services" onClick={toggle}>
            Services
          </Styled.SidebarLink>
        </Styled.SidebarMenu>
        <Styled.SideBtnWrap isOpen={isOpen} onClick={toggle}>
          <Styled.SidebarRoute to="/auth">Sign In</Styled.SidebarRoute>
        </Styled.SideBtnWrap>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
