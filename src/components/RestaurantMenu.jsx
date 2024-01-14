// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgCdnUrl } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { id } = useParams();
    // const [restaurant, setRestaurant] = useState(null);
    // const [menuObject, setMenuObject] = useState({});

    const restaurant = useRestaurant(id);
    console.log("testRestaurant : ", restaurant);

    // const getRestaurantMenuData = async () => {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    //     const json = await data.json();
    //     setRestaurant(json.data?.cards[0]?.card?.card?.info);
    //     const itemsArray = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
    //     const menuDataObj = itemsArray.map((item, index) => {
    //         let menuItemsObj = {};
    //         const menuItems = item?.card?.info;
    //         return menuItemsObj[index] = menuItems;
    //     })
    //     console.log(menuDataObj);
    //     setMenuObject(menuDataObj);
    // }

    // useEffect(() => {
    //     getRestaurantMenuData();
    // }, [])

    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
            <h1>Restaurant Id:{id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={`${imgCdnUrl}/${restaurant?.cloudinaryImageId}`} alt="" />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMessage}</h3>
            {/* <div className="menu-container">
                <h2>Menu</h2>
                {Object.values(menuObject).map((item) => {
                    return (
                        <div key={item.id}>
                            <ul >
                                <li>{item?.name}</li>
                                <li>Rs:{item?.price / 100}</li>
                            </ul>
                        </div>
                    )
                })}
            </div> */}
        </div>

    )
}

export default RestaurantMenu;
