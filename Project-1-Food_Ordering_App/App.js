import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {  // props = {resName, cuisines, rating, deliveryTime} => destructuring
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/f01666ac73626461d7455d9c24005cd4" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
            <h4>{props.rating} star</h4>
            <h4>{props.deliveryTime} min</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                <RestaurantCard resName="KFC" cuisines="North Indian, Food Bucket" rating="4.4" deliveryTime="38" />
                <RestaurantCard resName="Burger King" cuisines="Burger, Fries, Fast Food" rating="4.2" deliveryTime="22" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)