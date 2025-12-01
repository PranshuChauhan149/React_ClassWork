import React, { useState } from "react";

const FunctinalCompont = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    review: "",
    country: "",
    gender: "",      // radio
    agree: false     // checkbox
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const ohsubmit = (e) => {
    e.preventDefault();

    if (!student.gender) {
      return alert("Please select gender");
    }

    if (!student.agree) {
      return alert("Please accept terms & conditions");
    }

    alert(
      `Name: ${student.firstName} ${student.lastName}
Review: ${student.review}
Country: ${student.country}
Gender: ${student.gender}
Accepted Terms: ${student.agree ? "Yes" : "No"}`
    );
  };

  return (
    <div className="mt-5 flex items-center justify-center flex-col gap-3">

      <input
        type="text"
        name="firstName"
        value={student.firstName}
        onChange={handleInput}
        placeholder="First Name"
        className="border-2 px-2 py-1"
      />

      <input
        type="text"
        name="lastName"
        value={student.lastName}
        onChange={handleInput}
        placeholder="Last Name"
        className="border-2 px-2 py-1"
      />

      <input
        type="text"
        name="review"
        value={student.review}
        onChange={handleInput}
        placeholder="Review"
        className="border-2 px-2 py-1"
      />

      {/* Country Dropdown */}
      <select
        name="country"
        value={student.country}
        onChange={handleInput}
        className="border-2 px-2 py-1 w-48"
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      {/* Radio Button - Gender */}
      <div className="flex gap-3">
        <p>Gender:</p>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={student.gender === "Male"}
            onChange={handleInput}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={student.gender === "Female"}
            onChange={handleInput}
          />
          Female
        </label>
      </div>

      {/* Checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={student.agree}
            onChange={handleInput}
          />
          I agree to the terms & conditions
        </label>
      </div>

      <button onClick={ohsubmit} className="border-2 px-4 py-1">
        Submit
      </button>

    </div>
  );
};

export default FunctinalCompont;
