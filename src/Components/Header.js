import { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  const online=useOnlineStatus();
  return (
    <div className="flex justify-between border-2 bg-red-50 shadow-md">
      <img className="w-40 ml-0 h-30" src={logo} alt="logo" />
      
      <ul className="flex items-center" >
      <li className="p-2 bg-zinc-200 m-2 hover:shadow-md rounded-md cursor-pointer font-semibold hover:scale-105">
          Online Status: {online ? "online" : "offline" }
      </li>
      <li className="p-2 bg-zinc-200 m-2 hover:shadow-md rounded-md cursor-pointer font-semibold hover:scale-105">
          <Link to="/grocery">Grocery</Link>
      </li>
      <li className="p-2 bg-zinc-200 m-2 hover:shadow-md rounded-md cursor-pointer font-semibold hover:scale-105">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 bg-zinc-200 m-2 hover:shadow-md rounded-md cursor-pointer font-semibold hover:scale-105">
          <Link to="/about">AboutUs</Link>
        </li>
        <li className="p-2 bg-zinc-200 m-2 hover:shadow-md rounded-md cursor-pointer font-semibold hover:scale-105">
          <Link to="/contact">ContactUs</Link>
        </li>
        <li className="p-2 bg-zinc-200 m-2 hover:shadow-md rounded-md cursor-pointer font-semibold hover:scale-105">Cart</li>
        <button
          className="p-2 bg-zinc-200 m-2 hover:shadow-md rounded-md cursor-pointer font-semibold hover:scale-105"
          onClick={() => {
            loginButton === "Login"
              ? setLoginButton("Logout")
              : setLoginButton("Login");
          }}
        >
          {loginButton}
        </button>
      </ul>
      </div>
   
  );
};

export default Header;
