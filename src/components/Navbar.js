import {React,useState} from "react";
import './index.css';
import './Navbar.css';
import pic from './1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fabars} from '@fortawesome/free-brands-svg-icons'

import {
  Link
} from "react-router-dom";



const NavBar = () => {
 const [mobile,setMobile]=useState(false);

  const handleClickMobile=()=>{
    setMobile(!mobile);
  }
  const handleClickMobileClose=()=>{
    setMobile(false);
  }


  
  return (
    <>
      <div className="containerNav">
        <div className={mobile?"navbar-mobile":"navbar"}>
          <div className="jungle">
          <img className="frontIMG" src={pic} alt="logo" />
          <input type="checkbox" id="click"  />
          <label htmlFor="click" className="barsIcon"  onClick={handleClickMobile}>
            <i class="fas fa-bars" ></i>
          </label>
          </div>
          <ul>

          <Link className="navLinks" to="/"  onClick={handleClickMobileClose}>Home</Link>
          <Link className="navLinks" to="/blogs" onClick={handleClickMobileClose}>Blogs</Link>
          <Link className="navLinks" to="/books" onClick={handleClickMobileClose}>Books Corner</Link>
          <Link className="navLinks" to="/work" onClick={handleClickMobileClose}>Projects</Link>
          <Link className="navLinks" to="/resume" onClick={handleClickMobileClose}>Resume</Link>
          <Link className="navLinks" to="/about" onClick={handleClickMobileClose}>About</Link>
          </ul>
        </div>
      </div>
    </>
  );
};
 

export default NavBar;
