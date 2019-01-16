import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './Components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <AddItem />
      </div>
    );
  }
}

export default App;
