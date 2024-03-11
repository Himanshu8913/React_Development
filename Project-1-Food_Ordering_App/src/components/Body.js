import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.234249&lng=77.440926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[4].card.card);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    } />
                    <button onClick={
                        () => {
                            // console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => 
                                    res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                                // console.log(res.info.name.includes(searchText))
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }
                    }>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.1
                    );
                    console.log(filteredList)
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {/* {console.log(filteredRestaurant)} */}
                {filteredRestaurant && filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant?.info.id} >
                        {console.log(restaurant.info.id)}
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;