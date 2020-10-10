import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/generics/Header';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Catalog />     
    </div>
  );
}

export default App;
