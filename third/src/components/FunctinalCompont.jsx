import React, { useState } from "react";

const FunctinalCompont = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    review: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const ohsubmit = (e) => {
    e.preventDefault();

    alert(
      `Name: ${student.firstName} ${student.lastName}\nReview: ${student.review}`
    );
  };

  return (
    <div className=" mt-5 flex items-center justify-center flex-col gap-3">
      <input
        type="text"
        name="firstName"
        value={student.firstName}
        onChange={handleInput}
        placeholder="First Name"
        className="border-2"
      />

      <input
        type="text"
        name="lastName"
        value={student.lastName}
        onChange={handleInput}
        placeholder="Last Name"
        className="border-2"
      />

      <input
        type="text"
        name="review"
        value={student.review}
        onChange={handleInput}
        placeholder="Review"
        className="border-2"
      />

      <button onClick={ohsubmit} className="border-2 px-4 py-1">
        Submit
      </button>
    </div>
  );
};

export default FunctinalCompont;
