import React, { Component } from "react";

class ListItems extends Component {
  delete(id) {
    this.props.delete(id);
  }
  render() {

    return (
      <ul className="theList" className="list-group">
        {this.props.items.map((item,index) => (
          <li key={index} onClick={() => this.delete(item.id)} className="list-group-item">{index + 1} {item.text}</li>
        ))}
      </ul>
    );
  }
};

export default ListItems;