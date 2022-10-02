import { useState } from "react";
import { FaSignInAlt,FaSignOutAlt, FaUserCircle, FaHotel } from "react-icons/fa";

const Icon = ({
  name,
  size,
  absolute,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  hover,
  propFunction,
}) => {
  const [text, setText] = useState(false);

    const handleClick = () => {
      console.log(name)
    propFunction(name);
  };
  return (
    <div
      className={`
            ${absolute}
          `}
      onMouseEnter={() => setText(true)}
      onMouseLeave={() => setText(false)}
    >
      <button onClick={() => handleClick()}>
        {name === "login" && <FaSignInAlt size={size} />}
        {name === "register" && <FaUserCircle size={size} />}
        {name === "host" && <FaHotel size={size} />}
        {name === "logout" && <FaSignOutAlt size={size} />}
        {/* {name === "login" &&  <FaSignInAlt size={size} />} */}
      </button>
      {text && <p className=" text-center text-xs">{name.toUpperCase()}</p>}
    </div>
  );
};

export default Icon;
