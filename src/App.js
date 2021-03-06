import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart';

function App() {
  
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      </style>

      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
