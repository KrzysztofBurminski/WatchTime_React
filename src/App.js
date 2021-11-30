import { useState } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/SideBar';
import { ThemeProvider } from 'styled-components';
import ShowDetailsPage from './pages/ShowDetailsPage';

const theme = {
  colors: {
    nav: '#010606',
    bodyBg: '#0a0a0a',
    bodyText: '#ccc',
    myPurple: '#6301bf',
    myPurpleDark: '#392A46',
    // myPurpleHover: '#8D37E7',
    // #725ac1
    myPurpleHover: '#725ac1',
    onDark: '#ccc',
  },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
          {/* <Route path="/auth" exact>
            <AuthPage />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route> */}
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
}

export default App;
