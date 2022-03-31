import React from 'react';
import '../App.css';
import asset from '../Asset 8.png';
import vector from '../Vector.png';
function Fivth() {
  return (
   <>
    <div className="fivtharea">
        <h1>Changing the World's Outlook</h1>
        <img src={vector} alt="Vector"/>
        <h2>Towards Saving and Investing</h2>
        <h3>Cuz this time it's</h3>
        <h4>Fun,Rewarding,and Simple</h4>
        <button>Sign up Now</button>
        <img className="img" src={asset} alt="asset"/>
      </div>
   </>
  );
}
export default Fivth;