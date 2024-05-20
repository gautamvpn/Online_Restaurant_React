import { useState } from "react";
import { cdn_logo } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnReact] = useState('login')
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-36" src={cdn_logo}
          alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status: {onlineStatus? '✅':'🔴' } 
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="cart">Cart</Link>
          </li>
          <button className="loginBtn" onClick={() => {
            setBtnReact('logout')
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;