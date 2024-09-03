import { CDN_URL } from "../utils/constants";

const Rescard = (props) => {
  const { resData } = props;

  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId ,areaName} =
    resData?.info;

  // const{avgRatingString}=resData?.data;
  return (
    <div className="m-2 bg-slate-100 w-[270] h-[400]  hover:bg-slate-300 scale-20 hover:scale-105">
      
      <img 
        className="m-2 pt-2 pl-1 mt-2 content-center h-[200] w-11/12 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        // src={`${CDN_URL}${cloudinaryImageId}`}
        alt="food-logo" 
      />
      <div className="pl-2 m-2">
      <h3 className="font-bold text-lg mb-2 ">{name}</h3>
      <h5  className="m-1">{avgRating}</h5>
      <h5 className="m-1">{cuisines.join(", ")}</h5>
      <h5 className="m-1">{costForTwo}</h5>
      <h5 className="m-1">{areaName}</h5>
      </div>
    </div>
  );
};

//Higher Order Component

// export const withPromotedlabel=(Rescard)=>{
//   return (props)=>{
//     return(
//       <div>
//         <label>Promoted</label>
//         <Rescard {...props}/>
//       </div>
//     )
//   }
// };

export default Rescard;
