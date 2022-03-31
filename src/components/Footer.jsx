import React from 'react';
import '../App.css';
import logo from '../image 21.png';
import twit from '../Twitter.png';
import insta from '../Instagram.png';
import linkdin from '../Linkdin.png';
function Footer() {
  return (
   <>
       <div className="footer">
      <img src={logo} alt="logo"/>
      <button>Sign up Now</button>
      <div className='media'>
      <img className='twit' src={twit} alt="twitter"/>
      <img className='insta' src={insta} alt="insta"/>
      <img className='link' src={linkdin} alt="link"/>
      </div>
      <p>Copyright 2022. RuDo Wealth. All rights reserved.</p>
      </div>
   </>
  );
}
export default Footer;