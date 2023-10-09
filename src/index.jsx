import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homes';
import Header from './components/Header';
import Error from './pages/Error';
import { createGlobalStyle } from 'styled-components';
import About from './pages/About';
import HomeInfo from './pages/HomeInfo';

const GlobalStyle = createGlobalStyle`
* {
  font-family: Montserrat,'Trebuchet MS', Helvetica, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/homeinfo/:id" element={<HomeInfo />}/>
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);


