import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import React from "react";

const Guests = ({ handleGuests, noOfGuests }) => {
  return (
    // <div className="flex justify-center ml-4 mt-0 mb-2">
    //   <input
    //     value={noOfGuests}
    //     min="0"
    //     className="text-center text-2xl font-extrabold
    //      bg-slate-50 hover:bg-purple-200
    //      rounded-2xl w-2/5 h-16
    //      space-y-4 mt-1"
    //   />
    <div className="">
      <div className="flex justify-center ml-4 mt-0 mb-2">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-sm border-2 border-sky-900 w-2/5 h-10 space-y-4 mt-3"
          placeholder=""
          type="text"
          // onChange={(e) => setInput(e)}
        />
      </div>

      {/* <FaPlusCircle
        className="-ml-10  mt-2 "
        size={20}
        onClick={() => handleGuests(1)}
      />
      {noOfGuests > 0 ? (
        <FaMinusCircle
          className=" -ml-80 mt-2 disabled:"
          size={20}
          onClick={() => handleGuests(-1)}
        />
      ) : (
        <FaMinusCircle className=" -ml-80 mt-2 disabled:" size={20} />
      )} */}
    </div>

    //   </div>

    // </div>
  );
};

export default Guests;
{
  /* <div className="flex justify-center ml-4 mt-0 mb-2">
          <input
            className=" block text-center italic  hover:bg-red-200 font-bold rounded-sm border-2 border-sky-900 w-2/5 h-10 space-y-4 mt-3"
            placeholder={name}
            type="text"
            onChange={(e) => setInput(e)}
          />
        </div> */
}
