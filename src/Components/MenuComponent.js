// import React from "react";
// import Shimmer from "./Shimmer";
// import useMenuFetch from "../utils/useMenuFetch";
// import { useParams } from "react-router-dom";
// import { CDN_URL } from "../utils/constants";
// import { useState } from "react";

// const MenuComponent = () => {
//   const { resId } = useParams();

//   const resInfo = useMenuFetch(resId);
//   const[showMenu,setShowMenu]=useState(false);

//   const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
//   // const itemCardsPath =
//   //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
//   //     ?.card;

//       const itemCardsList =
//       resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
//         ?.card.itemCards;
//         // console.log(itemCardsList.length);
//         console.log(itemCardsList);
//     //  const {}=itemCardsList

//     const menuSet=()=>{
//       setShowMenu(true);
//     }

//   // const itemCards = itemCardsPath ? itemCardsPath.itemCards : [];
//   if (!restaurantInfo) {
//     return <Shimmer />;
//   }

//   // const { name, cuisines, costForTwoMessage } = restaurantInfo;


//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="bg-slate-50 flex flex-row justify-center">
//     <div className=" flex flex-col">
//       <h1 onClick={menu} className="font-bold cursor-pointer">{resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
//       ?.card.title}</h1>
//       ({showMenu} &&  )
//     <div className="">
//       <div className="min-w-full">
//           {
//             itemCardsList.map((list)=>{
//               return (
                
//                 <ul className=" m-5 rounded-md p-2 bg-slate-200 shadow-xl flex justify-between"key={list.card.info.id}>
//                   <div>
//                   <li className="p-3 font-semibold">{list.card.info.itemAttribute.vegClassifier}</li>
//                   <li>{list.card.info.name}</li>
//                   <li>{list.card.info.defaultPrice/100 ||list.card.info.price/100}</li>
//                   <li>{list.card.info.ratings.aggregatedRating.rating}</li>
//                   <li>{list.card.info.description}</li>
//                   </div>
//                     <div>
//                   <li><img className="h-auto w-20 rounded-md"src={CDN_URL+ list.card.info.imageId}></img></li>
//                   </div>
//                 </ul>
//               )
//             })
//           }
//       </div>
//     </div>
//     </div>
//     </div>
//   );
  
// };

// export default MenuComponent;

import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useMenuFetch from "../utils/useMenuFetch";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const MenuComponent = () => {
  const { resId } = useParams();

  const resInfo = useMenuFetch(resId);
  const [showMenu, setShowMenu] = useState(false);

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

  const itemCardsList =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card.itemCards;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-50 flex flex-row justify-center">
      <div className="w-full max-w-3xl flex flex-col">
        <div
          onClick={toggleMenu}
          className="flex justify-between items-center font-bold cursor-pointer bg-white p-4 rounded-md shadow-md h-16"
        >
          <span>
            {resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card.title}
          </span>
          <span
            className={`transform transition-transform ${
              showMenu ? "rotate-180" : ""
            }`}
          >
            ⬇️
          </span>
        </div>
        {showMenu && (
          <div className="min-w-full">
            {itemCardsList.map((list) => (
              <ul
                className="m-5 rounded-md p-2 bg-slate-200 shadow-xl flex justify-between"
                key={list.card.info.id}
              >
                <div>
                  <li className="p-3 font-semibold">
                    {list.card.info.itemAttribute.vegClassifier}
                  </li>
                  <li>{list.card.info.name}</li>
                  <li>
                    {list.card.info.defaultPrice / 100 || list.card.info.price / 100}
                  </li>
                  <li>{list.card.info.ratings.aggregatedRating.rating}</li>
                  <li>{list.card.info.description}</li>
                </div>
                <div>
                  <li>
                    <img
                      className="h-auto w-20 rounded-md"
                      src={CDN_URL + list.card.info.imageId}
                      alt={list.card.info.name}
                    />
                  </li>
                </div>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuComponent;
