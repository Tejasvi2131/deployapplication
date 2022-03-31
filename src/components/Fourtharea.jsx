import React from 'react';
import '../App.css';
import side1 from '../Group 946.png';
import side2 from '../Frame 138.png';
import side3 from '../Frame 137.png';
import side4 from '../Frame 101.png';
function Fourth() {
  return (
   <>
      <div className="fourtharea">
        <div className="side1">
      <img src={side1} alt="side1"/>
      </div>
      <div className="side2">
      <img src={side2} alt="side2"/>
      </div>
      <h1>Launching Soon!</h1>
      <p>Saving and Investing was never so fun and breeeezyyyy
         Saving and Investing was never so fun and breeeezyyy</p>
      <button>Sign Up Now</button>
      <div className="side3">
      <img src={side3} alt="side3"/>
      </div>
      <div className="side4">
      <img src={side4} alt="side4"/>
      </div>
      </div>
   </>
  );
}
export default Fourth;
