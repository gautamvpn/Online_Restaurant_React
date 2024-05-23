import { useContext, useState } from "react";
import { cdn_logo } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnReact] = useState('login')
  const onlineStatus = useOnlineStatus()

  const { loggedInUser } = useContext(UserContext);

  // console.log(loggedInUser)

  // for reading the element into the cart can use Selector

  // Selector, this hook gives a access to the store
  // susbribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)





  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-36" src={cdn_logo}
          alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status: {onlineStatus ? '✅' : '🔴'}
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
          <li className="px-4 font-bold text-lg"> <Link to={"/cart"}>  Cart ({cartItems.length} items) </Link></li>
          <button className="loginBtn" onClick={() => {
            setBtnReact('logout')
          }}>{btnNameReact}</button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;