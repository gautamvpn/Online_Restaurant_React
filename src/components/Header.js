import { useState } from "react";
import { cdn_logo } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
   const[btnNameReact,setBtnReact] = useState('login')
    return (
       <div className="header">
          <div className="logo-container">
          <img className="image-logo" src={cdn_logo}
             alt="" />
             </div>
             <div className="nav-items">
          <ul >
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/about">About Us</Link>
             </li>
             <li>
               <Link to="/contact">Contact Us</Link>
             </li>
             <li>
               <Link to="cart">Cart</Link>
             </li>
          <button className="loginBtn" onClick={()=>{
            setBtnReact('logout')
          }}>{btnNameReact}</button>
          </ul>
          </div>
       </div>
    )
 }

 export default Header;