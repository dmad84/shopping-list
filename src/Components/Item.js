import React, { Component } from "react";
import firebase from '../firebase';

class Item extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
}
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map((item, index) => (
          <li key={index} onClick={() => this.deleteItem(item.id)} className="list-group-item">{index + 1} {item.name}</li>
        ))}
      </ul>
    );
  }

  deleteItem(id) {
    const itemRef = firebase.database().ref('shopping-items').child('categories');
    itemRef.child("2").child("items").child(id).remove();
  }
};

export default Item;