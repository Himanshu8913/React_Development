import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[4].card.card);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        );
    }

    const { loggedInUser, setUserName } = useContext(UserContext);

    // Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-2 p-0">
                    <input type="text" className="m-4 border border-solid border-black" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    } />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={
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

                <div className="search m-2 p-0 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        console.log(filteredList)
                        setFilteredRestaurant(filteredList);
                    }}>
                        Top Rated Restaurant
                    </button>
                </div>

                <div className="search m-2 p-0 flex items-center">
                    <label>UserName : </label>
                    <input
                        className="border border-black p-2 "
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

            </div>

            <div className="flex flex-wrap justify-start">
                {/* {console.log(filteredRestaurant)} */}
                {filteredRestaurant && filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant?.info.id} >
                        {console.log(restaurant.info)}
                        {restaurant.info.avgRatingString > "4.3" ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;