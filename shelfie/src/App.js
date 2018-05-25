import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Products from './components/Products/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
