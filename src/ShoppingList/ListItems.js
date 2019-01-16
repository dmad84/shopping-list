import React, { Component } from "react";
import Item from './Item';

class ListItems extends Component {
  delete(id) {
    this.props.delete(id);
  }
  render() {

    return (
      <ul className="list-group">
        {this.props.items.map((item,index) => (
          <div key={item.id}>
          <li onClick={() => this.delete(item.id)} className="list-group-item">{item.text}</li>
            <Item items={item.items} />
          </div>
        ))}
      </ul>
    );
  }
};

export default ListItems;