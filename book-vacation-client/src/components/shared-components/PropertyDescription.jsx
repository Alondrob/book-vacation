import React from 'react'
import { useState } from 'react';

const PropertyDescription = ({ name,handleInput }) => {
    const [inputField, setInputField] = useState("");
    console.log(name)
    const setInput = (e) => {
        setInputField(e.target.value)
        handleInput(name, e.target.value);
    }
  return (
     
      <div className="flex justify-center mt-4 mb-6">
        <textarea
          className=" block  italic  hover:bg-red-200 font-bold rounded-md border-2 border-sky-900 w-2/5 h-36 space-y-4"
          placeholder="Describe Your Property..."
          type="text area"
          maxLength={350}
          onChange={(e) => setInput(e)}
        //   value={inputField}
        />
      </div>
  )
}

export default PropertyDescription