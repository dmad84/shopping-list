import React, { Component } from "react";

class Categories extends Component {

    render() {

        return (
            <div className="form-group col-md-4">
                <select className="custom-select">
                    {this.props.items.map((item) => (
                        <option key={item.id} value={item.text}>{item.text}</option>
                    ))}
                </select>
            </div>
        );
    }
};

export default Categories;