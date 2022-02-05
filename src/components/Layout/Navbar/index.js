import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { authActions } from '../../../store/auth-slice.js';
import { showsActions } from '../../../store/shows-slice.js';
import { useLocation, useHistory } from 'react-router-dom';

import * as S from './NavbarElements.jsx';
import { FaBars } from 'react-icons/fa';
import { searchActions } from '../../../store/search-slice.js';

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const queryNameRef = useRef();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const searchActive = useSelector((state) => state.search.active);

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

  const searchHandler = (query) => {
    if (location.pathname === '/search') {
      history.replace({
        pathname: '/search',
        search: `?q=${query}`,
      });
    } else {
      history.push({
        pathname: '/search',
        search: `?q=${query}`,
      });
    }
  };

  return (
    <>
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
              <S.NavLinks to="/about" activeClassName="current" exact>
                About
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavSearchLink
                onClick={() => {
                  dispatch(searchActions.toggleSearch());
                }}
              >
                Search
              </S.NavSearchLink>
            </S.NavItem>
          </S.NavMenu>
          <S.NavBtn>{authBtn}</S.NavBtn>
        </S.NavbarContainer>
      </S.Nav>
      {searchActive && (
        <S.NavSearchContainer>
          <S.SearchInput
            type="search"
            name="search"
            placeholder="Search for a TV show..."
            autoFocus
            ref={queryNameRef}
            onChange={() => {
              searchHandler(queryNameRef.current.value);
            }}
            onBlur={() => {
              if (queryNameRef.current.value.length === 0) {
                dispatch(searchActions.hide());
              }
            }}
          />
        </S.NavSearchContainer>
      )}
    </>
  );
};

export default Navbar;
