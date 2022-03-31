import React from 'react';
import '../App.css';
import group2 from '../Group 190.png';
import group1 from '../Group 191.png' ;
import illustration from '../Illustration01.png';  
function Second() {
  return (
   <>
        <div className="midarea1">
      <div className="group1">
         <img src={group2} alt="group1"/>
      </div>
      <div className="midarea">
        <div className="area1">
          <h1>Keep the channge </h1>
          <h2>No, Literally!</h2>
          <p>
          Saving and Investing was never so fun and breeeezyyyy
                 Saving and Investing was never so fun and breeeezyyyy
                 Saving and Investing was never so fun and breeeezyyyy
          </p>
          <img src={illustration} alt="illustration"/>
        </div>
        <div className="area2">
          <h1>Invest Smart!</h1>
        </div>
        <div className="area3">
        <h1>Invest Smart!</h1>
        <h1>Invest Smart!</h1>
        </div>
      </div>
      <div className="group2">
      <img src={group1} alt="group2"/>
      </div>
      </div>
   </>
  );
}
export default Second;
