import React from "react";
import Box from "./components/box";

const App = () => {
  const student = {
    name: "pranshu chauhan",
    class: 12,
    rollno: 45,
  };
  return (
    <div>
      <Box color="blue" />
      <Box color="green" student={student} />
    </div>
  );
};

export default App;
