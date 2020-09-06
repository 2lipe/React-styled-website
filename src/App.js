import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import ScrollToTop from './services/scrollToTop';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
