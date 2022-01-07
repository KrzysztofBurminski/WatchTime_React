import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/auth-slice.js';
import { getAuth, signOut } from 'firebase/auth';

import * as S from './NavbarElements.jsx';
import { FaBars } from 'react-icons/fa';
import { showsActions } from '../../../store/shows-slice.js';

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(authActions.removeCurrentUser());
      dispatch(showsActions.resetList());
    } catch (err) {
      console.log(err);
    }
  };

  let authBtn = <S.NavBtnLink to="/auth">Log In</S.NavBtnLink>;

  if (isLogged) {
    authBtn = (
      <S.NavBtnLink to="/" onClick={logoutHandler}>
        Log Out
      </S.NavBtnLink>
    );
  }

  return (
    <S.Nav>
      <S.NavbarContainer>
        <S.NavLogo to="/">WatchTime</S.NavLogo>
        <S.MobileIcon onClick={toggle}>
          <FaBars />
        </S.MobileIcon>
        <S.NavMenu>
          {isLogged && (
            <S.NavItem>
              <S.NavLinks to="/profile" activeClassName="current" exact>
                Profile
              </S.NavLinks>
            </S.NavItem>
          )}
          {!isLogged && (
            <S.NavItem>
              <S.NavLinks to="/auth">Profile</S.NavLinks>
            </S.NavItem>
          )}
          <S.NavItem>
            <S.NavLinks to="/contact" activeClassName="current" exact>
              About
            </S.NavLinks>
          </S.NavItem>
          <S.NavItem>
            <S.NavLinks to="/services" activeClassName="current" exact>
              Contact
            </S.NavLinks>
          </S.NavItem>
        </S.NavMenu>
        <S.NavBtn>{authBtn}</S.NavBtn>
      </S.NavbarContainer>
    </S.Nav>
  );
};

export default Navbar;
