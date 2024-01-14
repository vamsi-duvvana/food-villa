import { imgCdnUrl } from "../constants";


const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.info
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
            <img className="" src={`${imgCdnUrl}/${cloudinaryImageId}`} alt="#" />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;
