import React from "react";

class LaptopComponent extends React.Component {
  constructor() {
    super();
   
    this.s = {
      message: "Hello, this is your laptop component!"
    };
  }

 
  changeMessage = () => {
    this.setState({
      message: "State updated! You clicked the button."
    });
  };

  render() {
    return (
      <div>
        <h2>{this.s.message}</h2>
        <button className="bg-red-500" onClick={this.changeMessage}>
          Change Message
        </button>
      </div>
    );
  }
}

export default LaptopComponent;
