import React from 'react';
import './App.css';
import List from './containers/testListContainer';
import Top from './Top/Top.js';
function App() {
  return (
    <div>
      <div>
        <Top/> 
      </div>
      <div>
        <List/>
      </div>
    </div>
   
  );
}

export default App;
