import React from 'react';
import UxPertLogo from '../assets/uxpertlogo.png';
const Header = () => {
  return (
    <div className="head-container">
      <div className="logo-container">
        <img src={UxPertLogo}/>
      </div> 
          <button className='design-bttn'><i className="fa  fa-paint-brush" aria-hidden="true"></i>Create a design</button>
        <button class='login'><i class="fa fa-user-circle" aria-hidden="true"></i>Login</button>
    </div>
  )
}

export default Header