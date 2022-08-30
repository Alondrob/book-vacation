import React from "react";

const SubmitButton = ({handleSubmit}) => {
  return (
    <div className="flex items-center">
          <button className="text-center font-extrabold mt-10  bg-slate-50 hover:bg-red-200 rounded-full h-12 w-80 mb-6"
              onClick={handleSubmit}
          >
              Continue To Checkout
          </button>
    </div>
  );
};

export default SubmitButton;
