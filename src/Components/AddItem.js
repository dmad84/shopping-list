import React, { Component } from "react";
import firebase from '../firebase';
import ListItems from './ListItems';
import Loading from './Loading';
import Categories from './Categories';
import './AddItem.css';


class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: '',
            categories: [],
            category: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
        const categoriesRef = firebase.database().ref('shopping-items').child('categories');
        categoriesRef.on('value', (snapshot) => {
            let categories = snapshot.val();
            let newCategory = [];
            let newItems = [];
            for (let item in categories) {
                let category = {
                    id: item,
                    text: categories[item].name
                };
                if(categories[item].items) {
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
                <form onSubmit={this.handleSubmit} className="my-3 col-lg-8">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="sr-only">Item</label>
                            <input placeholder="enter Item" onChange={this.handleChange} value={this.state.text} className="form-control">
                            </input>
                        </div>
                        <Categories items={this.state.categories} />
                        <div className="form-group col-md-2">
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </div>
                </form>
                {this.state.items.length > 0 ? (
                    <div className="col-lg-8">
                        <ListItems items={this.state.items} />
                    </div>
                ) : (
                        <div className="col-lg-8">
                            <Loading />
                        </div>
                    )}

            </div>
        );
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('shopping-items').child('categories');

        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            name: this.state.text
        };
        itemsRef.child("-LWq4zi73h0wVpz3GfSx").child("items").push(newItem);
        this.setState(state => ({
            text: ''
        }));
    }
   
}

export default AddItem;
