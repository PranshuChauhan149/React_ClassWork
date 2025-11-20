import React, { Component } from "react";

export default class ControllerCompunt extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      review: "",
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,   
    });
  };

  ohsubmit = (e) => {
    e.preventDefault();

    alert(
      `Name: ${this.state.firstName} ${this.state.lastName}\nReview: ${this.state.review}`
    );
  };

  render() {
    return (
      <div className="flex items-center justify-center flex-col gap-3">
        
        <input
          type="text"
          name="firstName"
          onChange={this.handleInput}
          value={this.state.firstName}
          className="border-2"
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          onChange={this.handleInput}
          value={this.state.lastName}
          className="border-2"
          placeholder="Last Name"
        />

        <input
          type="text"
          name="review"
          onChange={this.handleInput}
          value={this.state.review}
          className="border-2"
          placeholder="Review"
        />

        <button onClick={this.ohsubmit} className="border-2 px-4 py-1">
          Submit
        </button>

      </div>
    );
  }
}
