import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './Components/ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <ShoppingList />
      </div>
    );
  }
}

export default App;
