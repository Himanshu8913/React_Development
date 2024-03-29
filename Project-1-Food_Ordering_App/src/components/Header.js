import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-32" alt="logo" src={LOGO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-8">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => {
                        // btnName = "Logout";
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;