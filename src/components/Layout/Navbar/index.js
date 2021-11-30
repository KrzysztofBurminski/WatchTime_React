import React from 'react';
import { FaBars } from 'react-icons/fa';
import * as Styled from './NavbarElements.jsx';

const Navbar = ({ toggle }) => {
  return (
    <Styled.Nav>
      <Styled.NavbarContainer>
        <Styled.NavLogo to="/">WatchTime</Styled.NavLogo>
        <Styled.MobileIcon onClick={toggle}>
          <FaBars />
        </Styled.MobileIcon>
        <Styled.NavMenu>
          <Styled.NavItem>
            <Styled.NavLinks to="/about" activeClassName="current" exact>
              About
            </Styled.NavLinks>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.NavLinks to="/contact" activeClassName="current" exact>
              Contact
            </Styled.NavLinks>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.NavLinks to="/services" activeClassName="current" exact>
              Services
            </Styled.NavLinks>
          </Styled.NavItem>
        </Styled.NavMenu>
        <Styled.NavBtn>
          <Styled.NavBtnLink to="/auth">Sign In</Styled.NavBtnLink>
        </Styled.NavBtn>
      </Styled.NavbarContainer>
    </Styled.Nav>
  );
};

export default Navbar;
