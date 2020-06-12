import React from 'react';
import './App.css';
import List from './containers/testListContainer';
import Test from './containers/singleTestContainer'
import Top from './Top/Top.js';
import {Route , BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Top/>
      <BrowserRouter>
        <Route exact path="/" component={List} />
        <Route exact path="/test/" component={Test} />
      </BrowserRouter>

    </React.Fragment>
      
   
  );
}

export default App;
