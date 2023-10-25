import React from 'react';
import './Feedback.css'; // Assuming Feedback.css is in the same directory

export default function Feedback(props) {
  // Check the value of props.mode.backgroundColor and set styles accordingly
  let myStyle = {
    color: props.mode.backgroundColor === "light"? "black": "white",
    backgroundColor: props.mode.backgroundColor === 'light' ? 'dark' : 'light'
  };

  return (
    <form>
      <div className="my-3 text-center" style={myStyle}>
        <div className="form-group d-inline-block mx-auto">
          <label htmlFor="exampleSelect">Select an Option:</label>
          <select className="form-control" id="exampleSelect" >
            <option>{props.one}</option>
            <option>{props.two}</option>
            <option>{props.three}</option>
          </select>
        </div>
      </div>
      <div className="btn-container"> {/* Use className instead of class for HTML elements */}
      <button type="button" className="btn btn-primary" onClick={props.submitAlert}>Submit</button>
      </div>
    </form>
  );
}
