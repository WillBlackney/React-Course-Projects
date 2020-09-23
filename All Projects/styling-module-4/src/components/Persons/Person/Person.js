import React, { Component } from "react";
import "./Person.css";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          i'm {this.props.name}, and i am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Aux>
    );
  }
}

export default Person;
