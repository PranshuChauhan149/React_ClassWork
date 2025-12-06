import React, { useEffect, useState } from "react";

const Counter = () => {
  const [step, SetStep] = useState(0);

  const StepWarning = () => {
    alert("Take a rest");
  };
  

  console.log("Component rendering.");

  useEffect(() => {
    if (step > 10) {
      StepWarning();
    }

    console.log("Updated Component: ",step);

    return () => {
      
      console.log("Component Unmounted");
    };
  }, [step]);

  return (
    <div>
      <p>{step}</p>
      <button
        className="border-2 px-4 bg-black text-white"
        onClick={() => SetStep(step + 1)}
      >
        Increase Step
      </button>
    </div>
  );
};

export default Counter;
