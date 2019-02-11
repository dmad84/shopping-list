import React, { Component } from 'react';
import firebase from '../../firebase';
import PropTypes from 'prop-types';
import Categories from '../Categories/Categories';
import './AddItem.css';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      selectedCategory: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    const categories = this.props.categories;
    return (
      <form onSubmit={this.handleSubmit} className="my-3 col-lg-8">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="sr-only">Item</label>
            <input placeholder="enter Item" onChange={this.handleTextChange} value={this.state.text} className="form-control">
            </input>
          </div>
          <Categories items={categories} update={this.handleSelectChange} />
          <div className="form-group col-md-2">
            <button type="submit" className="btn btn-primary">add</button>
          </div>
        </div>
      </form>
    )
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSelectChange(id) {
    this.setState({ selectedCategory: id });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('shopping-items').child('categories');

    if (!this.state.text.length && !this.state.selectedCategory.length) {
      return;
    }
    const newItem = {
      name: this.state.text
    };
    itemsRef.child(this.state.selectedCategory).child("items").push(newItem);
    this.setState(state => ({
      text: ''
    }));
  }
}
AddItem.propTypes = {
  categories: PropTypes.array.isRequired
};
AddItem.defaultProps = {
  categories: []
};