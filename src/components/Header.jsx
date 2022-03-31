import React from 'react';
import '../App.css';
import logo from '../image 21.png';
import arrow from '../Arrow.png';
import banner2 from '../Banner 2.png';
import banner3 from '../Banner 3.png';
import star from '../Star 3.png';
function Header() {
    return(
   <>
     <div className="header">
        <h1>Get A chance To Win Up To AED 50,000 Every Month!</h1>
     </div>
    <div className="logo">
      <img src={logo} alt="logo"/>
     <button>Sign Up Now</button>
      </div>
      <div className="midpart">
        <h1>Making Saving and</h1>
        <h2>Investing <strong>Fun</strong></h2>
        <img src={arrow} alt="arrow"/>
      </div>
      <div className="endpart">
        <img src={banner3} alt="banner3"/>
        <img src={banner2} alt="banner2"/>
      </div>
      <div className="crawlingtext">
        <div className="animation">
        <h1>Get a chance to win up to <strong>AED 50,000</strong> Every Month!</h1>
        <img src={star} alt="star"/>
        <h2>Get a chance to win up to <strong>AED 50,000</strong> Every Month!</h2>
        </div>
      </div>
</>
    );
}
export default Header;