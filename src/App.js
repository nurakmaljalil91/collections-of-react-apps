import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name='Sakura'/>
      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
