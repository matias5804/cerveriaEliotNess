import React from 'react';
import './scss/styles.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from "./components/navBar/NavBar";
////import {ItemListContainer} from "./components/itemListContainer/ItemListContainer";
//import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
//import { Categories } from './components/mock/Categorias';
import Footer from './components/footer/Footer';
import LaFabrica from './components/pages/LaFabrica';
import Contacto from './components/pages/Contacto';
import Cart from './components/cart/Cart';
//import Aside from './components/aside/Aside';
//import ComoComprar from './components/pages/ComoComprar';
//import ComoPagar from './components/pages/ComoPagar';
import Delivery from './components/pages/Delivery';
import Home from './components/pages/Home';
import Tienda from './components/pages/Tienda';
//import { CartProvider } from './components/context/useContext';

function App () {
  
  return  (
      <BrowserRouter>


          <NavBar/>


          <Routes> 
            

          <Route path="/" element={<Home greeting={'HOME'} />} />
            <Route path="/pages/LaFabrica" element={<LaFabrica/>}/>
            <Route path="/pages/Contacto" element={<Contacto/>}/>
            <Route path="/cart/Cart" element={<Cart/>}/>
            <Route path="/pages/Tienda" element={<Tienda/>}/>

            <Route path="/pages/Delivery" element={<Delivery/>}/>
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
          

          <Footer/>


      </BrowserRouter>
  );

};

export default App