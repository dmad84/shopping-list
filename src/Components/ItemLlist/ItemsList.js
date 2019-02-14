import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from '../Item/Item';
import Icons from './Icons'
import './ItemList.css'

class ItemsList extends Component {
 
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <div key={item.value} className="card mb-4">
             <div key={item.value} className="card-header">
              <FontAwesomeIcon icon={Icons[item.label]} className="fa-icon" fixedWidth/>{item.label}
            </div>
            <Item items={item.items} category={item.value} />
          </div>
        ))}
      </div>
    );
  }
};

export default ItemsList;