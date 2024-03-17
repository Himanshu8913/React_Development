import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { id } = useParams();
    // console.log(id);

    const resInfo = useRestaurantMenu(id);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;
    console.log(resInfo);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
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
                (category, index) => (
                    // Controlled Component
                    <RestaurantCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                )
            )}
        </div>
    );
};

export default RestaurantMenu;