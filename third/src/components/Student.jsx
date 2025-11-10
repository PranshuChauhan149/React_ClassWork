import React from "react";

const Student = (props) => {
  return (
    <div>
      <p>{props?.name}</p>
      <p>{props?.age}</p>
      <p>{props?.state}</p>
      <p>{props?.course}</p>
    </div>
  );
};

export default Student;
