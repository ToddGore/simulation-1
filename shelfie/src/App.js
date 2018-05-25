import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [{ name: "Kitten1", price: 13, image: "https://www.flickr.com/photos/69302634@N02/15133405082" },
      { name: "Kitten2", price: 18, image: "https://www.flickr.com/photos/69302634@N02/15133405082" },
      { name: "Kitten3", price: 26, image: "https://www.flickr.com/photos/69302634@N02/15133405082" }]
    }

  }





  render() {

    // let mapped = this.state.products.map((x, i) => {
    //   return (
    //     <Dashboard key={i + x.name} event={x} editEvent={this.editEvent} />
    //   )
    // })

    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard appState={this.state.products}>
          <Product />
        </Dashboard>
      </div>
    );
  }
}

export default App;
