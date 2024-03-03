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
        <div className="res-card">
            <img className="res-logo" src={ CDN_URL + cloudinaryImageId } />
            <h3>{name}</h3>
            <h4>{(cuisines).join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} min</h4>
        </div>
    )
}
