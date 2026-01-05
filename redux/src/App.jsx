import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addByValue, decrement, increment } from "../redux/slice/counterSlice";
import { AddItem, RemoveItem } from "../redux/slice/cartSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const item = useSelector((state) => state.cart);
  console.log(item);
  
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input type="number" onChange={(e) => setVal(e.target.value)} />
        <button onClick={() => dispatch(AddItem(val))}>submit</button>
        <button onClick={() => dispatch(RemoveItem(val))}>submit</button>
      </div>
    </div>
  );
};

export default App;
