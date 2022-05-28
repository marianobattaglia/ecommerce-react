import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter.js';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button/Button'

function App() {
  
  {/*
  const [show, setShow] = useState(true)

  const handleAdd = () => {
    console.log('se ejecuto')
  }
  */}

  return (
    <div className="App">
      <NavBar className="navBar"/>
      <ItemListContainer saludo={"Hola coders"}/>

      {/* show && <Counter initial={10} stock={50} onAdd={handleAdd}/> */}
    </div>
  );
}

export default App;
