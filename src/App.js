import React from 'react';
import logo from './logo.svg';
import Heading from './Components/Headings';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Heading heading="This heading" type="1" />
      <Heading heading="This heading" type="2" />
      <Heading heading="This heading" type="3" />
      <Heading heading="This heading" type="4" />
      <Heading heading="This heading" type="5" />
      <Heading heading="This heading" type="6" />
    </div>
  );
}

export default App;
