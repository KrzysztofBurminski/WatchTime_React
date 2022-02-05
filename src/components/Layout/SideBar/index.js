import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/auth-slice.js';
import { getAuth, signOut } from 'firebase/auth';

import * as S from './SidebarElements.jsx';
import { searchActions } from '../../../store/search-slice.js';

const Sidebar = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(authActions.removeCurrentUser());
    } catch (err) {
      console.log(err);
    }
  };

  let authBtn = <S.SidebarRoute to="/auth">Log In</S.SidebarRoute>;

  if (isLogged) {
    authBtn = (
      <S.SidebarRoute to="/" onClick={logoutHandler}>
        Log Out
      </S.SidebarRoute>
    );
  }

  const searchBtnHandler = () => {
    toggle();
    dispatch(searchActions.toggleSearch());
  };

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
          <S.NavSearchLink onClick={searchBtnHandler}>Search</S.NavSearchLink>
        </S.SidebarMenu>
        <S.SideBtnWrap isOpen={isOpen} onClick={toggle}>
          {authBtn}
        </S.SideBtnWrap>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
};

export default Sidebar;
