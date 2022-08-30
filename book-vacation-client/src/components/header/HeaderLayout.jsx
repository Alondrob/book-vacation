import React, { Component } from "react";
import { useState } from "react";
import HomePage from "./HomePage";
import SearchBar from "./SearchBar";
// import PopUpBar from "./PopUpBar";
import Form from "../../pages/registration-pages/Form";
// import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";

const HeaderLayout = () => {
  const [signupText, setSignupText] = useState(false);
  const [loginText, setLoginText] = useState(false);
  const [formPage, setFormPage] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex items-center justify-center  h-24  bg-lime-100 border-b-4 border-gray-300  ">
        <div className="absolute left-0 ml-4">
          <button>
            <HomePage />
          </button>
        </div>
        <SearchBar />
         {/* login icon */}
           <div
          className="absolute right-2  mr-32"
          onMouseEnter={() => setLoginText(true)}
          onMouseLeave={() => setLoginText(false)}
        >
          <button onClick={() => navigate("/login")}>
            <FaSignInAlt size={32} />
          </button>

          {loginText && <p className=" text-center text-xs">Login</p>}
        </div>

        {/* SignIn icon */}
        <div
          className="absolute right-2  mr-14"
          onMouseEnter={() => setSignupText(true)}
          onMouseLeave={() => setSignupText(false)}
        >
          <button onClick={() => navigate("/register")}>
            <FaUserCircle size={32} />
          </button>

          {signupText && <p className=" text-center text-xs">Sign Up</p>}
        </div>
       
      </div>
    </>
  );
};

export default HeaderLayout;
