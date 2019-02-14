import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from '../Item/Item';
import Icons from './Icons'
import './ItemList.css'

class ItemsList extends Component {
 
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map((item) => (
          <div key={item.value}>
            <li className="list-group-item bg-light">
              <FontAwesomeIcon icon={Icons[item.label]} className="fa-icon" fixedWidth/>{item.label}
            </li>
            <Item items={item.items} category={item.value} />
          </div>
        ))}
      </ul>
    );
  }
};

export default ItemsList;