import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homes';
import Header from './components/Header';
import Error from './components/Error';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: Montserrat,'Trebuchet MS', Helvetica, sans-serif;
}

body {
  margin-left: 100px;
  margin-right: 100px;
  
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
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);


