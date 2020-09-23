import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
`;

class Person extends Component {
  render() {
    return (
      <StyledDiv>       
        <p onClick={this.props.click}>
          i'm {this.props.name}, and i am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </StyledDiv>
    );
  }
}

export default Person;
