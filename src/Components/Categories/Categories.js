import React, { Component } from "react";
import Select from 'react-select';

class Categories extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.update(selectedOption.value);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="form-group col-md-4">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.props.items}
        />
      </div>
    );
  }
}

export default Categories;