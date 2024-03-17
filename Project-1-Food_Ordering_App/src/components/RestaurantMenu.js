import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { id } = useParams();
    // console.log(id);

    const resInfo = useRestaurantMenu(id);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    // console.log(resInfo?.cards[0]?.card?.card?.info);
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => (
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        )
    );
    // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="text-lg font-bold">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordians */}
            {categories.map(
                (category) => (
                    <RestaurantCategory data={category?.card} />
                )
            )}
        </div>
    );
};

export default RestaurantMenu;