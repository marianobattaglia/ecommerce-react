import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter.js';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Button from './components/Button/Button'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  {/*
  const [show, setShow] = useState(true)

  const handleAdd = () => {
    console.log('se ejecuto')
  }
  */}

  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      </style>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>

      {/*
      <NavBar className="navBar"/>
      <ItemListContainer saludo={"Hola coders"}/>
      */}

      {/* show && <Counter initial={10} stock={50} onAdd={handleAdd}/> */}
    </div>
  );
}

export default App;
