import React, { useState } from "react";

const Formvalidation = () => {
  const [error, setError] = useState({
    firstNameError: "",
    lastNameError: "",
  });

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

  
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "firstName") {
      if (value.trim() === "") {
        setError((prev) => ({
          ...prev,
          firstNameError: "First name is required",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          firstNameError: "",
        }));
      }
    }

    if (name === "lastName") {
      if (value.trim() === "") {
        setError((prev) => ({
          ...prev,
          lastNameError: "Last name is required",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          lastNameError: "",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let firstNameError = "";
    let lastNameError = "";

    if (student.firstName.trim() === "") {
      firstNameError = "First name is required";
    }

    if (student.lastName.trim() === "") {
      lastNameError = "Last name is required";
    }

    if (firstNameError || lastNameError) {
      setError({
        firstNameError,
        lastNameError,
      });
      return;
    }

    alert(`Full Name: ${student.firstName} ${student.lastName}`);
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-10">

      <input
        type="text"
        name="firstName"
        placeholder="Enter First Name"
        value={student.firstName}
        onChange={handleChange}
        className={`border px-3 py-1 ${
          error.firstNameError ? "border-red-500" : "border-black"
        }`}
      />
      {error.firstNameError && (
        <span className="text-red-500 text-sm">
          {error.firstNameError}
        </span>
      )}

      <input
        type="text"
        name="lastName"
        placeholder="Enter Last Name"
        value={student.lastName}
        onChange={handleChange}
        className={`border px-3 py-1 ${
          error.lastNameError ? "border-red-500" : "border-black"
        }`}
      />
      {error.lastNameError && (
        <span className="text-red-500 text-sm">
          {error.lastNameError}
        </span>
      )}

      <button
        onClick={handleSubmit}
        className="border px-4 py-1 bg-black text-white"
      >
        Submit
      </button>

    </div>
  );
};

export default Formvalidation;
