import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {  // props = {resName, cuisines, rating, deliveryTime} => destructuring
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        costForTwo,

    } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <div className="m-4 p-4 w-[220px] h-[380px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg w-full h-[140px]" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="text-sm">{(cuisines).join(", ")}</h4>
            <div className="flex justify-between">
                <span className="text-sm">⭐ {avgRatingString}</span> 
                <span className="text-sm">{costForTwo}</span>
            </div>
            <h4 className="text-sm">⏰ {deliveryTime} min</h4>
        </div>
    )
}

// Higher Order Component
// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 m-2">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
