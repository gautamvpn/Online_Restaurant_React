import { useState } from "react";
import { cdn_logo } from "../utils/constant";
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
             <li>Home</li>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Cart</li>
          <button className="loginBtn" onClick={()=>{
            setBtnReact('logout')
          }}>{btnNameReact}</button>
          </ul>
          </div>
       </div>
    )
 }

 export default Header;