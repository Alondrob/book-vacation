import React from "react";

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div className="flex justify-center">
      <button
        className="text-center font-extrabold mt-10 
           bg-yellow-400 hover:bg-blue-200
            rounded-full h-12 w-80
             mb-6"
        onClick={handleSubmit}
      >
        Continue To Checkout
      </button>
    </div>
  );
};

export default SubmitButton;
