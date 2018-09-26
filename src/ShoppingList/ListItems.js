import React, { Component } from "react";

class ListItems extends Component {
  delete(id) {
    this.props.delete(id);
    console.log(id);
  }
  render() {

    return (
      <ul className="theList" className="list-group">
        {this.props.items.map(item => (
          <li key={item.id} onClick={() => this.delete(item.id)} className="list-group-item">{item.id} {item.text}</li>
        ))}
      </ul>
    );
  }
};

export default ListItems;