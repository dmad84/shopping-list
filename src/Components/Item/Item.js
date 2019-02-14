import React, { Component } from "react";
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import './Item.scss'

class Item extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
}
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map((item, index) => (
          <li key={index} onClick={() => this.deleteItem(item.id, this.props.category)} className="list-group-item">{index + 1} {item.name}</li>
        ))}
      </ul>
    );
  }

  deleteItem(id, category) {
    const itemRef = firebase.database().ref('shopping-items').child('categories');
    itemRef.child(category).child("items").child(id).remove();
  }
};

Item.propTypes = {
  items: PropTypes.array.isRequired
};

export default Item;