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

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/f01666ac73626461d7455d9c24005cd4" />
            <h3>KFC</h3>
            <h4>North Indian, Food Bucket</h4>
            <h4>4.4 star</h4>
            <h4>38 min</h4>
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
                <RestaurantCard />
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