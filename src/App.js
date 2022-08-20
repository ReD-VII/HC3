import React from 'react';
import logo from './HC3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{marginTop: "150px"}}>
          Estúdio digital HC3 House.
        </p>
        <a style={{marginTop: "150px"}}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
        </a>
      </header>
    </div>
  );
}

export default App;
