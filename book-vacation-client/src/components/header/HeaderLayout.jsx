import React, { Component } from "react";
import { useState } from "react";
import HomePage from "./HomePage";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserCircle, FaHotel } from "react-icons/fa";
import Icon from "../shared-components/Icon";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  

  const token = useSelector((state) => state.user.token);

  console.log(token);

  const handleIconClick = (name) => {
    console.log(name);
    switch (name) {
      case "home": {
        navigate("/");
        break;
      }
      case "login": {
        navigate("/sign-in");
        break;
      }
      case "logout": {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload()
        navigate("/");
        break;
      }
      case "register": {
        navigate("/register");
        break;
      }
      case "host": {
        navigate("/post-property");
        break;
      }
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center  h-24  bg-lime-100 border-b-4 border-gray-300  ">
        <div className="absolute left-0 ml-4">
          <button>
            <HomePage />
          </button>
        </div>
        <SearchBar />
        {!token && (
          <Icon
            name={"login"}
            size={32}
            absolute={"absolute right-36"}
            marginLeft={"ml-12"}
            propFunction={handleIconClick}
          />
        )}
        {!token && (
          <Icon
            name={"register"}
            size={32}
            absolute={"absolute right-20"}
            marginLeft={"ml-12"}
            propFunction={handleIconClick}
          />
        )}

        {token && (
          <Icon
            name="host"
            size={32}
            absolute={"absolute right-24"}
            marginLeft={"ml-20"}
            propFunction={handleIconClick}
          />
        )}
        {token && (
          <Icon
            name="logout"
            size={32}
            absolute={"absolute right-8"}
            marginLeft={"ml-12"}
            propFunction={handleIconClick}
          />
        )}
      </div>
    </>
  );
};

export default HeaderLayout;
