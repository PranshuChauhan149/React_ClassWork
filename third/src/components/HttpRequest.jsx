import React, { useEffect, useState } from "react";

const HttpRequest = () => {
  const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);

  // const secFun = () => {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // };

  // const getData = async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  //     const json = await res.json();
  //     setData(json);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const json = await res.json();
      console.log(json.users);

      setData(json.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getData();
    // secFun()
    getData();
  }, []);


  

  return (
    <div>
      <h1>
        Total Comments: {data.length}
        {data.map((ele, index) => (
          <div key={index}>
            {ele.firstName} {ele.lastName}
          </div>
        ))}
      </h1>
    </div>
  );
};

export default HttpRequest;
