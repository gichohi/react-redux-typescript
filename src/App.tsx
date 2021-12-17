import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product/:productId"  element={<ProductDetail/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
