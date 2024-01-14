import { useEffect, useState, useContext } from 'react';
// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import UserContext from '../utils/UserContext';
// import useOnline from '../utils/useOnline';


const Body = () => {

    // searchTxt is a local state variable.
    const [restaurants, setRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getRestaurantData();
    }, []);

    const getRestaurantData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (!restaurants) return null; //Early return--> before rendering the actual component

    // if (filteredRestaurants?.length === 0) return <h1>No Restaurant Found...</h1>

    return restaurants?.length === 0 ? <Shimmer /> : (
        <>
            <div className="search-container p-5 bg-pink-200 my-2">
                <input
                    type="test"
                    placeholder="search..."
                    value={searchInput}
                    className="px-2 py-0.5 ml-2 rounded-sm"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="px-2 py-0.5 m-2 bg-purple-500 hover:bg-purple-700 text-white rounded-lg"
                    onClick={() => {
                        const data = filterData(searchInput, restaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
                <input value={user.name} onChange={
                    e => setUser({
                        name: e.target.value,
                        email: "newEmail@gmail.com"
                    })
                }></input>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.length === 0 ? (
                    <h1>No Restaurant Found...</h1>
                ) : (
                    filteredRestaurants.map(restaurant => (
                        <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            <RestaurantCard {...restaurant?.info} />
                        </Link>
                    ))
                )}
            </div>
        </>
    )
}

export default Body;
