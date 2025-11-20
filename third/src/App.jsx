import s from "./App.module.css";
import { useState } from "react";
import ControllerCompunt from "./components/controllerCompunt";
import FunctinalCompont from "./components/FunctinalCompont";

function Toggle() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <p className={s.head}>
        {status ? "OFF" : "ON"}
      </p>

      <br />

      <button
        onClick={() => setStatus(prev => !prev)}
        className={s.btn}
      >
        {status ? "ON" : "OFF"}
      </button>
      <ControllerCompunt/>
<FunctinalCompont/>
    </div>
  );
}

export default Toggle;
