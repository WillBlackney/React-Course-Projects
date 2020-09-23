import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("useEffect");

    setTimeout(() => {
      alert("Alert!");
    }, 1000);
  }, []);

  const classes = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    classes.push("red");
  }

  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button
        alt={props.showPersons}
        onClick={props.clicked}
        className={btnClass}
      >
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
