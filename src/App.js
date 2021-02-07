import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
