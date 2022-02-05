import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -22px;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 40px;

  .current {
    margin-bottom: -1px;
    margin-top: 1px;
    border-bottom: 2px solid ${(p) => p.theme.colors.myPurpleHover};
    transition: all 0.3s ease-in;
  }
`;

export const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  cursor: pointer;
`;

export const NavSearchLink = styled.button`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 1px 0.5rem 0;
  padding: 0 0.5rem;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: 400;
  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #6301bf;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

//
// SEARCH FORM
//

export const NavSearchContainer = styled.div`
  position: fixed;
  top: 80px;
  height: 60px;
  width: 100%;
  background-color: #1f1f21;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  z-index: 1000;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border-color: transparent;
  border: none;
  color: #ccc;
  font-size: 1.2rem;
  width: 95%;
  max-width: 1500px;
  margin: 0 auto;
  letter-spacing: 0.7px;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;
