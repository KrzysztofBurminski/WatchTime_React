import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/auth-slice.js';

import * as S from './SidebarElements.jsx';

const Sidebar = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  let authBtn = <S.SidebarRoute to="/auth">Log In</S.SidebarRoute>;

  if (isLogged) {
    authBtn = (
      <S.SidebarRoute to="/" onClick={logoutHandler}>
        Log Out
      </S.SidebarRoute>
    );
  }

  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.Icon onClick={toggle}>
        <S.CloseIcon />
      </S.Icon>
      <S.SidebarWrapper>
        <S.SidebarMenu>
          <S.SidebarLink to="/" onClick={toggle}>
            Home
          </S.SidebarLink>
          {isLogged && (
            <S.SidebarLink to="/profile" onClick={toggle}>
              Profile
            </S.SidebarLink>
          )}
          {!isLogged && (
            <S.SidebarLink to="/auth" onClick={toggle}>
              Profile
            </S.SidebarLink>
          )}
          <S.SidebarLink to="/about" onClick={toggle}>
            About
          </S.SidebarLink>
          <S.SidebarLink to="/contact" onClick={toggle}>
            Contact
          </S.SidebarLink>
        </S.SidebarMenu>
        <S.SideBtnWrap isOpen={isOpen} onClick={toggle}>
          {authBtn}
          {/* <S.SidebarRoute to="/auth/login">Log In</S.SidebarRoute> */}
        </S.SideBtnWrap>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
};

export default Sidebar;
