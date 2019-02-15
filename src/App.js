import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './Components/ShoppingList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCarrot, faCheese, faSnowflake, faPepperHot, faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faCarrot, faCheese, faSnowflake, faPepperHot, faShoppingBasket, faTimes);

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
