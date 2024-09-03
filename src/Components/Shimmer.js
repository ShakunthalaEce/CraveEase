
// const Shimmer= () => {
//   return (
//     <div className="shimmer-container">
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>

//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
//         <div className="shimmer-card">
//             <div className="image"></div>
//             <div className="header"></div>
//             <div className="para1"></div>
//             <div className="para2"></div>
//             <div className="para3"></div>
//         </div>
        
        
//     </div>
//   )
// }
// export default Shimmer;

import React from "react";
const Shimmer = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="animate-pulse space-y-4">
        {/* Header Shimmer */}
        <div className="h-8 bg-gray-300 rounded-md mb-4"></div>

        {/* Body Shimmer */}
        <div className="space-y-4">
          {/* Line shimmers */}
          <div className="h-4 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>

          {/* Image shimmer */}
          <div className="h-48 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
