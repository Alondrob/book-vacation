import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import React from "react";

const Guests = ({ handleGuests, noOfGuests }) => {
  return (
    <div className="flex items-center">
      <input
        value={noOfGuests}
        min="0"
        className="text-center font-extrabold  bg-slate-50 hover:bg-red-200 rounded-full h-12 w-80 mb-6"
      />
      <FaPlusCircle className="-ml-9  mb-6 " onClick={() => handleGuests(1)} />
      {noOfGuests > 0 ? (
        <FaMinusCircle
          className=" -ml-72 mb-6"
          onClick={() => handleGuests(-1)}
        />
      ) : (
        <FaMinusCircle
          className=" -ml-72 mb-6 disabled:"
        />
      )}
    </div>
  );
};

export default Guests;
