import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetails from "./ItemDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import img from './img/background.png';


function App() {
  'use strict';
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ItemDetails />}/>
        </Routes>
      </div>
    </Router>
  );
}

const cupImage = new URL("./img/background.png", import.meta.url);
const Home = () => (
  
  <section className='bgimg-1'>
    <img src={img} className="App-logo" alt="logo" />
    <div className="caption">
      <span className="border">Drink Condiment</span><br/>
    </div>
  </section>
);

export default App;
