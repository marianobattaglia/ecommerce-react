import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button/Button'

function App() {
  
  return (
    <div className="App">
      <NavBar className="navBar"/>
      <ItemListContainer saludo={"Hola coders"}/>

      <Button label="asd"/>

    </div>
  );
}

export default App;
