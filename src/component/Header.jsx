/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import UxPertLogo from '../assets/uxpertlogo.png';
const Header = () => {
  return (
    <div className="head-container h-[20%]">
      <div className="logo-container">
        <img src={UxPertLogo}/>
      </div> 
          <button className='design-bttn'><i className="fa  fa-paint-brush" aria-hidden="true"></i>Create a design</button>
        <button className='login'><i className="fa fa-user-circle" aria-hidden="true"></i>Login</button>
    </div>
  )
}

export default Header