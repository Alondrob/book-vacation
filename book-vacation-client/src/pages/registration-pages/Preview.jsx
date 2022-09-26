import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Preview = ({ propertyData }) => {
  console.log(propertyData);
  const [propertyDataArr, setPropertyDataArr] = useState([]);

//   useEffect(() => {
   
//       for (const item in propertyData) {
//         console.log(item);
//         setPropertyDataArr({...propertyDataArr, item});
//       }
    
//   },[]);

  console.log(propertyDataArr);
  return (
    <div className="grid grid-cols-3">
      <div></div>

      <div
        className="border-2 border-black
          "
      >
        {/* {for (const item in propertyData) {
                  <p className='ml-36'>{item.toUpperCase()}: {propertyData[item]}</p>
              }
            }
             */}
      </div>
      <div></div>
    </div>
  );
};

export default Preview;
