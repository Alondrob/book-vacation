import React from "react";
import { BsFillForwardFill, BsFillBackspaceFill } from "react-icons/bs";
import { FaStepBackward, FaStepForward } from "react-icons/fa";

const Next = ({ movePage, name }) => {
  console.log(name, movePage);
  const handleClick = () => {
    movePage(name);
  };
  return (
    <div className="grid grid-cols-4">
      {name === "forward" && (
        <>
          <div></div>
          <div></div>
          <div></div>
          <div className="mb-8 ">
            <button onClick={movePage}>
              <FaStepForward size={72} width={24} color="black" />
            </button>
          </div>
          <div></div>
        </>
      )}
      {name === "back" && (
        <>
          <div></div>
          <div className="mb-8 ">
            <button onClick={handleClick}>
              <FaStepBackward size={72} width={24} color="black" />
            </button>
          </div>
          <div></div>
          <div></div>

          <div></div>
        </>
      )}
    </div>
  );
};

export default Next;
