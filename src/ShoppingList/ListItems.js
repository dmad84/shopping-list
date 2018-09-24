import React, { Component } from "react";

class ListItems extends Component {
  delete(key) {
    this.props.delete(key);
  }
  render() {

    return (
      <ul className="theList" className="list-group">
        {this.props.items.map(item => (
          <li key={item.id} onClick={() => this.delete(item.key)} className="list-group-item">{item.id} {item.text}</li>
        ))}
      </ul>
    );
  }
};

export default ListItems;