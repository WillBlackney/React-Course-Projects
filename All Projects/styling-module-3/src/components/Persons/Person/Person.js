import React from "react";
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

const person = (props) => {
  return (
    //<div className = "Person">
    <StyledDiv>
      '
      <p onClick={props.click}>
        i'm {props.name}, and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </StyledDiv>
  );
};

export default person;
