import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Dashboard/Form';
import Header from './components/Dashboard/Header';
import Products from './components/Dashboard/Products';

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
