import React, { Component } from "react";
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    );
  }
};

export default Loading;