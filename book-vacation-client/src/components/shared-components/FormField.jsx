import React from "react";

const FormField = ({
  stateName,
  placeholder,
  type,
  marginTop,
  handleInput,
}) => {
  const handleChange = (e) => {
    handleInput(stateName, e.target.value);
  };
  return (
    <div>
      <div className={`flex justify-center ${marginTop} mb-6`}>
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder={placeholder}
          type={type}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default FormField;
