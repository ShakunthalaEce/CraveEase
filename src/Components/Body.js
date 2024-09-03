import Rescard,{withPromotedlabel} from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdList, setFilteredList] = useState([]);
//  const RestaurantPromoted=withPromotedlabel(Rescard) ;
  

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);

        const restaurant=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        setRestaurantList(restaurant);
        setFilteredList(restaurant);
        
      } catch (err) {
        console.log("Error fetching the data", err);
      }
    };
    fetchdata();
  }, []);


  return restaurantList.length=== 0 ?(
    <Shimmer />
  ):(
    <div className="body-container">
      <div className="m-3">
        <input className="border-solid-2 p-2 m-3 bg-slate-200 rounded-md w-60"
        placeholder="Search Restaurant"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="bg-zinc-200 px-3 py-2 rounded-md mr-2 font-semibold hover:shadow-md"
          onClick={() => {
            // console.log(searchText);
            const filterdList = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            // console.log(filterdList);
            setFilteredList(filterdList);
          }}
        >
          Search
        </button>

        <button
          className="bg-zinc-200 px-3 py-2 rounded-md font-semibold hover:shadow-md"
          onClick={() => {
            const filteredData = restaurantList.filter(
              (res) => res.info.avgRating>4
            );
            alert("Filtered restaurants")
            setRestaurantList(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className=" grid grid-cols-5 flex-wrap">
        {filterdList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/menu/"+restaurant.info.id} > <Rescard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

//{restaurant.data.promoted?(<RestaurantPromoted resData={restaurant}/>):(<Rescard resData={restaurant} />) }

export default Body;
