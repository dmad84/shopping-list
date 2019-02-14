import React, { Component } from "react";
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import Swipeout from 'rc-swipeout';
import 'rc-swipeout/assets/index.css';
import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map((item, index) => (
          <Swipeout
          key={index}
            right={[
              {
                text: 'delete',
                onPress: () => this.deleteItem(item.id, this.props.category),
                style: { backgroundColor: 'red', color: 'white' },
                className: 'custom-class-2'
              }
            ]}
          >
            <li  onClick={() => this.deleteItem(item.id, this.props.category)} className="list-group-item content-desktop">{index + 1} {item.name}</li>
            <li className="list-group-item content-mobile">{index + 1} {item.name}</li>
          </Swipeout>
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