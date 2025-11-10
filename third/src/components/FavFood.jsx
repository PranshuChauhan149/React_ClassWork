import React from "react";
import "./Fav.css";
const FavFood = ({ food }) => {
  console.log(food);

  return (
    <div className="main">
      <p className="heading">My Favorite Food</p>
      <div className="con">
        {food.map((item) => (
          <div className="in">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default FavFood;
