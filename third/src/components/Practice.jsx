import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Practice = () => {
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      if (res) {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  },[]);
  return <div>Practice</div>;
};

export default Practice;
