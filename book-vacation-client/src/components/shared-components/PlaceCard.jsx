import React from "react";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProperty } from "../../redux/api-requests/propertyRequests";
import {
  deleteBooking,
  getUserProperties,
  getUserBookings,
} from "../../redux/api-requests/userRequests";
import userSlice from "../../redux/slices/userSlice";
import SubmitButton from "./SubmitButton";
import Image from "./Image";
import PropertyDetails from "./PropertyDetails";

const PlaceCard = ({
  page,
  key,
  id,
  name,
  city,
  state,
  country,
  pricePerNight,
  startDate,
  endDate,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [renderPage, setRenderPage] = useState(false);
  const user = useSelector((state) => state.user.user);
  const userProperties = useSelector((state) => state.user.userProperties);

  const dateConverter = (dateStr) => {
    const convertedDate = dateStr.split(/[T]/)[0].split(/[-]/);
    return convertedDate[2] + "-" + convertedDate[2] + "-" + convertedDate[0];
  };

  const uploadPics = (id) => {
    navigate(`/image/${id}`);
  };

  const handleClick = (name, id) => {
    switch (name) {
      case "Edit":
        navigate(`/edit-property/${id}`);
        break;
      case "Delete":
        dispatch(deleteProperty(id));
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(getUserProperties(user));
        break;
      case "Book":
        //dispatch booking action
        break;
      case "Cancel Booking":
        window.confirm("Are you sure?") && dispatch(deleteBooking(id));
        dispatch(getUserBookings());
        break;
      case "Save":
        //dispatch saving action
        break;
      case "Upload Photos":
        navigate(`/images/${id}`);
        break;
    }
  };
  return (
    // <div className="">

    <div>
      <Image id={id} />
      <PropertyDetails id={id} />
      <div className="bg-black w-96 ml-3 flex justify-center">
        <div
          className="grid grid-cols-2 gap-4
       text-center content-center"
        >
          {page != "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Edit"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
          {page != "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Delete"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
          {page === "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Book"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
          {page === "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Cancel Booking"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
        </div>
      </div>
    </div>

    //     {/* <div className="flex justify-center  h-2">
    //       <SubmitButton
    //         functionProp={handleClick}
    //         id={id}
    //         name={"Upload Photos"}
    //         width={"w-36"}
    //         marginTop={"mt-4"}
    //         rounded={"rounded-xl"}
    //       />
    //     </div>
    //     <div className="flex justify-center space-x-2 mt-24  font-semibold italic">
    //       <span>City: {city.toUpperCase()},</span>
    //       <span>State: {state.toUpperCase()},</span>
    //     </div>
    //     <div className="flex justify-center space-x-2 font-semibold italic">
    //       <span>Country: {country.toUpperCase()}</span>
    //       <span>Price-Per-Night: ${pricePerNight}</span>
    //     </div>
    //     {startDate && endDate && (
    //       <div className="flex justify-center  space-x-2 font-semibold italic">
    //         <span>From: {dateConverter(startDate)}</span>
    //         <span>To: {dateConverter(endDate)}</span>
    //       </div>
    //     )}
    //   </div>
    //   <div
    //     className={`
    //       grid grid-cols-4 gap-4
    //       text-center content-center
    //       border-4 border-blue-400
    //       rounded-sm h-24  mx-4
    //       `}
    //   >
    //

    //
    //     {page != "guest" && (
    //       <SubmitButton
    //         functionProp={handleClick}
    //         id={id}
    //         name={"Book"}
    //         width={"w-36"}
    //         marginTop={"mt-4"}
    //         rounded={"rounded-3xl"}
    //       />
    //     )}
    //     {page != "guest" && (
    //       <SubmitButton
    //         functionProp={handleClick}
    //         id={id}
    //         name={"Save"}
    //         width={"w-36"}
    //         marginTop={"mt-4"}
    //         rounded={"rounded-3xl"}
    //       />
    //     )}
    //     <div></div>
    //     <div></div>
    //     {page === "guest" && (
    //       <SubmitButton
    //         functionProp={handleClick}
    //         id={id}
    //         name={"Cancel Booking"}
    //         width={"w-36"}
    //         marginTop={"mt-4"}
    //         marginRight={"mr-2"}
    //         rounded={"rounded-3xl"}
    //       />
    //     )} */}

    // // </div>
  );
};

export default PlaceCard;
