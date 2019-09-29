import React from "react";

const Button = props => {
  return (
    <button onClick={props.clickHandler} className={props.cls}>
      {props.btnName}
    </button>
  );
};

export default Button;
