import React, { Component } from "react";
import ListItems from './ListItems';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{ 'text': 'name of', 'id': 1 }],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="enter Item" onChange={this.handleChange}
                            value={this.state.text}>
                        </input>
                        <button type="submit">add</button>
                    </form>
                    <ListItems items={this.state.items} delete = {this.deleteItem}/>
                </div>
            </div>
        );
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);

        });

        this.setState ({
            items:filteredItems
        });

    }
}

export default AddItem;