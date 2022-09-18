import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import React from "react";

const Guests = ({ handleGuests, noOfGuests }) => {
  return (
    <div className="flex items-center">
      <input
        value={noOfGuests}
        min="0"
        className="text-center text-2xl font-extrabold 
         bg-slate-50 hover:bg-purple-200 
         rounded-2xl w-96 h-16 
         space-y-4 mt-1"
      />
      <FaPlusCircle
        className="-ml-12  mt-2 "
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
      )}
    </div>
  );
};

export default Guests;
