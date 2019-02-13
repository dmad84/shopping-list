import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from './Item';
import Icons from './Icons'

class ItemsList extends Component {
 
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map((item, index) => (
          <div key={item.value}>
            <li className="list-group-item bg-light">
              <FontAwesomeIcon icon={Icons[item.label]} />{item.label}
            </li>
            <Item items={item.items} category={item.value} />
          </div>
        ))}
      </ul>
    );
  }
};

export default ItemsList;