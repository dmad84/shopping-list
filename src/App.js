import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './Components/ShoppingList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faCheese, faSnowflake, faPepperHot, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

library.add(faCarrot)
library.add(faCheese, faSnowflake, faPepperHot, faShoppingBag)



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
