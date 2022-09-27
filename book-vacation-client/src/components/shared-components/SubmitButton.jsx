import React from "react";

const SubmitButton = ({ functionProp, name, width }) => {

  const handleClick = () => {
    functionProp()
  }
  return (
    <div className="flex justify-center">
      <button
        className={`text-center font-extrabold mt-10 
           bg-yellow-400 hover:bg-blue-200
            rounded-full h-12 ${width}
             mb-6`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default SubmitButton;
