import React from "react";

const SubmitButton = ({
  functionProp,
  name,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  absolute,
  rounded
}) => {

  const handleClick = () => {
    functionProp(name)
  }
  return (
    <div className="flex justify-center">
      <button
        className={`text-center font-extrabold mt-10 
           bg-yellow-400 hover:bg-blue-200
             h-12
             ${rounded}
            ${marginTop}
            ${width}
            ${absolute}
             mb-6`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default SubmitButton;
