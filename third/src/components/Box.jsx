import React from "react";

const Box = (props) => {
  return (
    <div>
      this is {props.color}
      <h1>{props?.student?.name}</h1>
      <h2>{props?.student?.rollno}</h2>
      <h2>{props?.student?.class}</h2>
    </div>
  );
};

export default Box;
