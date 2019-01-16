import React, { Component } from "react";
import Item from './Item';

class ListItems extends Component {
 
  render() {

    return (
      <ul className="list-group">
        {this.props.items.map((item,index) => (
          <div key={item.id}>
          <li  className="list-group-item">{item.text}</li>
            <Item items={item.items}  />
          </div>
        ))}
      </ul>
    );
  }
};

export default ListItems;