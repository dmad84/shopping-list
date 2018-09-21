import React, { Component } from "react";

class ListItems extends Component {

  render() {

    return (
      <ul className="theList" class="list-group">
        {this.props.items.map(item => (
          <li key={item.id} class="list-group-item">{item.text}</li>
        ))}
      </ul>
    );
  }
};

export default ListItems;