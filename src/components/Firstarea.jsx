import React from 'react';
import '../App.css';
import banner4 from '../Banner illustration01.png'; 
function First() {
  return (
   <>
       <div className="threecards">
            <div className="card1">
              <p>Saving and Investing was never so fun and breeeezyyyy
                 Saving and Investing was never so fun and breeeezyyyy
                 Saving and Investing was never so fun and breeeezyyyy
              </p>
              <button>Sign Up Now</button>
              <h1>01</h1>
              <img src={banner4} alt="banner"/>
            </div>
            <div className="card2">
              <h1>02</h1>
            </div>
            <div className="card3">
              <h1>03</h1>
            </div>
      </div>
   </>
  );
}
export default First;
