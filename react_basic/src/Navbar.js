import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
  <>
  <div className="navbar">
    <div className="site-name" >
        <img src="https://intoneconnect.com/images/Logo.png" alt="Google" width="200" height="70"></img>
    </div>
    {/* <div className="site-menu">
        <a href="#">About</a>
    </div>
    <div className='site-menu'>
      <a href="#">My Profile</a>
    </div> */}
  </div>
  </>
  )
};

export default Navbar;