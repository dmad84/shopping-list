import React, { Component } from 'react';
import './App.css';
import AddItem from './ShoppingList/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App" class="container">
        <AddItem />
      </div>
    );
  }
}

export default App;
