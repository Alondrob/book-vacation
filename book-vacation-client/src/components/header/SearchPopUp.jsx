import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { advanceSearch } from "../../features/misc-slices/searchSlice";
import DateSearchBar from "../shared-components/DateSearchBar";
const SearchPopUp = () => {
  const [searchForm, setSearchForm] = useState({
    destination: "",
    fromDate: "",
    untiDate: "",
  });
  
    const dispatch = useDispatch();
    
    let today = new Date()
    console.log(today)
  const handleSearch = () => {
    if (searchForm.untiDate < searchForm.fromDate) {
      alert("Return Date Can't Be Prior From Date");
    }
    if (searchForm.fromDate < today) {
      alert.apply("Leaving Date Can't Be In The Past");
    }
  };

  return (
    <div
      className="fixed  block  rounded-lg border-8 border-black 
           bg-gray-200  insent-20 w-2/3 h-2/3 mx-48 "
    >
      <div className="flex justify-center mt-4 mb-1">
        <input
          className=" block text-center italic  hover:bg-purple-200 font-bold rounded-2xl border-2 border-sky-900 w-96 h-16 space-y-4"
          placeholder="destination..."
          type="text"
          onChange={(e) =>
            setSearchForm({ ...searchForm, destination: e.target.value })
          }
        />
      </div>
      {/* *********************** */}
      <div className="flex justify-center mb-1">
        <label className="block font-extrabold text-lg">From</label>
      </div>
      <div className="flex justify-center  mb-1">
        <input
          className=" block text-center italic  hover:bg-purple-200 font-bold rounded-2xl border-2 border-sky-900 w-96 h-16 space-y-4"
          type="date"
          onChange={(e) =>
            setSearchForm({ ...searchForm, fromDate: e.target.value })
          }
        />
      </div>
      {/* *********************** */}
      <div className="flex justify-center mb-1">
        <label className="block font-extrabold text-lg">Until</label>
      </div>

      <div className="flex justify-center mb-1">
        <input
          className=" block text-center italic  hover:bg-purple-200 font-bold rounded-2xl border-2 border-sky-900 w-96 h-16 space-y-4"
          type="date"
          onChange={(e) =>
            setSearchForm({ ...searchForm, untiDate: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center mt-6 mb-1">
        <button
          className="border-2 border-black rounded-full bg-pink-500 h-12 w-96"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPopUp;
