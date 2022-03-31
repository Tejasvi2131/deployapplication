import React from 'react';
import '../App.css';
import referal from '../Referral Offers@2x.png';
import star2 from '../Star 2.png';
import vector from '../Vector 1178.png'
function Third() {
  return (
   <>
     <div class="thirdarea">
<div className="thirdarea1">
<img className='imgstar' src={star2} alt="referal"/>
  <img src={vector} alt="referal"/>
  <h1>Referral Offers</h1>
</div>
<div className="thirdarea4">
  <div className="thirdarea2"></div>
  <div className="thirdarea3">
    <div className="thirdarea31">
    <h1>Refer and earn</h1>
    <p>Saving and Investing was never so fun and breeeezyyyy
       Saving and Investing was never so fun and breeeezyyy</p>
    <button>Sign Up Now</button>
    </div>
    <div className="thirdarea32">
    <img src={referal} alt="referal"/>
    </div>
  </div>
</div>
</div> 
   </>
  );
}
export default Third;
