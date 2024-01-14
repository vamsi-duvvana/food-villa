import { useEffect, useState } from "react";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    // const [menuObject, setMenuObject] = useState(null);


    const getRestaurantMenuData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log("Json : ", json);
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
        console.log("restaurant inside useRestaurant: ", restaurant);
        // const itemsArray = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
        // const menuDataObj = itemsArray.map((item, index) => {
        //     let menuItemsObj = {};
        //     const menuItems = item?.card?.info;
        //     return menuItemsObj[index] = menuItems;
        // })
        // setMenuObject(menuDataObj);

        // console.log("menuObject : ", menuObject);
        return restaurant;
    }

    useEffect(() => {
        getRestaurantMenuData();
    }, [])


}

export default useRestaurant;
