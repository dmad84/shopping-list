import React, { Component } from "react";

class Item extends Component {
  delete(id) {
    this.props.delete(id);
  }
  render() {

    return (
        
      <ul className="list-group">
        {this.props.items.map((item,index) => (
          <li key={index} onClick={() => this.delete(item.id)} className="list-group-item">{index + 1} {item.name}</li>
          
        ))}
      </ul>
    );
  }
};

export default Item;