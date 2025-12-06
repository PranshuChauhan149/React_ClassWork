import React, { useState } from "react";
import Counter from "./Components/Counter";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="border-2 px-4 bg-red-500" onClick={() => setShow((prev) => !prev)}>
        {show ? "unmounted" : "mounted"}
      </button>
      {show && (
        <Counter/>
      )}
    </div>
  );
};

export default App;
