import React from "react";

const DateSearchBar = ({ handleDate }) => {
  return (
    <div>
      {/* fromDate */}
      <div className="text-center">
        <input
          className="block text-center italic  hover:bg-purple-200 font-bold rounded-2xl border-2 border-sky-900 w-96 h-16 space-y-4"
          type="date"
      
          
        />
     
      </div>
    </div>
  );
};

export default DateSearchBar;
