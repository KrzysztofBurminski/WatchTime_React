import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getFavShowsList, getShowsList } from './store/shows-actions';
import { getCurrentUser } from './store/auth-actions';

import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/SideBar';
import HomePage from './pages';
import NotFoundPage from './pages/NotFoundPage';
import ShowDetailsPage from './pages/ShowDetailsPage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import ChoosingShowsPage from './pages/ChoosingShowsPage';
import SearchPage from './pages/SearchPage';

import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Layout/Footer';

const theme = {
  colors: {
    nav: '#010606',
    bodyBg: '#0a0a0a',
    bodyText: '#ccc',
    myPurple: '#6301bf',
    myPurpleDark: '#352047',
    myPurpleHover: '#4e0296',
    onDark: '#ccc',
  },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const userId = useSelector((state) => state.auth.userId);
  if (userId !== null) {
    dispatch(getShowsList(userId));
    dispatch(getFavShowsList(userId));
  }

  const PrivateRoute = ({ children }) => {
    return userId !== null ? children : <Redirect to="/auth" />;
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shows/:showId">
            <ShowDetailsPage />
          </Route>
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/choosing" exact>
            <PrivateRoute>
              <ChoosingShowsPage />
            </PrivateRoute>
          </Route>
          <Route path="/profile" exact>
            <PrivateRoute>
              <ProfilePage userId={userId} />
            </PrivateRoute>
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
