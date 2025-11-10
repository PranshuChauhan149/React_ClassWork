import React from "react";
import FavFood from "./FavFood";

const Box = (props) => {
  const food = [
    "Pizza  Italian",
    "Noodles  Chinese",
    "Pav Bhaji  Indian",
  ];
  return (
    <div>
      <FavFood food={food} />
    </div>
  );
};

export default Box;
