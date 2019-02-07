import React, { Component } from "react";
import firebase from '../firebase';
import ItemsList from './ItemsList.js';
import Loading from './Loading/Loading';
import AddItem from './AddItem/AddItem.js';


class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      categories: [],
    };

  }

  componentDidMount() {
    const categoriesRef = firebase.database().ref('shopping-items').child('categories');
    categoriesRef.on('value', (snapshot) => {
      let categories = snapshot.val();
      let newCategory = [];
      let newItems = [];
      for (let item in categories) {
        let category = {
          value: item,
          label: categories[item].name
        };
        if (categories[item].items) {
          category.items = [];

          for (let i in categories[item].items) {

            let newC = {
              id: i,
              name: categories[item].items[i].name
            }
            category.items.push(newC);
          }

          newItems.push(category);

        }
        newCategory.push(category);

      }

      this.setState({
        categories: newCategory
      });
      this.setState({
        items: newItems
      });
    });
  }

  render() {
    return (
      <div className="row">
        <AddItem categories={this.state.categories} />
        {this.state.items.length > 0 ? (
          <div className="col-lg-8">
            <ItemsList items={this.state.items} />
          </div>
        ) : (
            <div className="col-lg-8">
              <Loading />
            </div>
          )}

      </div>
    );
  }


}

export default ShoppingList;
