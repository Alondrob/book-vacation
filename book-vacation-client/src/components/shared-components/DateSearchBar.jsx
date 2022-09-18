import React from "react";

const DateSearchBar = ({name, handleDate }) => {

  const setDate = (e) => {
    handleDate(name, e.target.value)
  }
  return (
    <div>
      {/* fromDate */}
      <div className="mb-2">
        <input
          className="block text-center italic 
           hover:bg-purple-200 font-bold 
           rounded-2xl border-2
            border-sky-900 w-96 
            h-16 space-y-4 "
          type="date"
          onChange={setDate}
          
        />
      </div>
    </div>
  );
};

export default DateSearchBar;
