import React, { Component } from "react";
import firebase from '../firebase';
import ListItems from './ListItems';
import Loading from './Loading';
import './AddItem.css';


class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('shopping-items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    text: items[item].text
                });
            }
            this.setState({
                items: newState
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
                        <div className="form-group col-md-4">
                            <select className="custom-select">
                                <option value="0" defaultValue>Category</option>
                                <option value="1">Featured</option>
                                <option value="2">Most popular</option>
                                <option value="3">Top rated</option>
                                <option value="4">Most commented</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </div>
                </form>
                { this.state.items.length > 0 ? (
                    <div className="col-lg-8">
                        <ListItems items={this.state.items} delete={this.deleteItem} />
                    </div>
                 ) : (
                    <Loading />
                 )}

            </div>
        );
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('shopping-items');

        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text
        };
        itemsRef.push(newItem);
        this.setState(state => ({
            text: ''
        }));
    }
    deleteItem(id) {
        const itemRef = firebase.database().ref('shopping-items');
        itemRef.child(id).remove();
    }
}

export default AddItem;
