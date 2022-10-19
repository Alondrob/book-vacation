import React from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProperty } from "../../redux/api-requests/propertyRequests";
import { deleteBooking, getUserProperties, getUserBookings } from "../../redux/api-requests/userRequests";
import userSlice from "../../redux/slices/userSlice";
import SubmitButton from "./SubmitButton";

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
  const user = useSelector((state) => state.user.user);
  const userProperties = useSelector((state) => state.user.userProperties);

  const dateConverter = (dateStr) => {
    const convertedDate = dateStr.split(/[T]/)[0].split(/[-]/);
    return convertedDate[2] + "-" + convertedDate[2] + "-" + convertedDate[0];
  };

  const handleClick = (name, id) => {
    switch (name) {
      case "Edit":
        navigate(`/edit-property/${id}`);
    }
    switch (name) {
      case "Delete":
        dispatch(deleteProperty(id));
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(getUserProperties(user));
    }
    switch (name) {
      case "Book":
      //dispatch booking action
    }
    switch (name) {
      case "Cancel Booking":
        dispatch(deleteBooking(id));
        dispatch(getUserBookings());
    }
    switch (name) {
      case "Save":
      //dispatch saving action
    }
  };
  return (
    <div className="mb-4">
      <div
        className={`
      border-4 border-blue-400
      rounded-sm h-80
      mx-4 
      `}
      >
        <div className="h-60">Images</div>
        <div className="flex justify-center space-x-2  font-semibold italic">
          <span>City: {city.toUpperCase()},</span>
          <span>State: {state.toUpperCase()},</span>
        </div>
        <div className="flex justify-center space-x-2 font-semibold italic">
          <span>Country: {country.toUpperCase()}</span>
          <span>Price-Per-Night: ${pricePerNight}</span>
        </div>
        {startDate && endDate && (
          <div className="flex justify-center  space-x-2 font-semibold italic">
            <span>From: {dateConverter(startDate)}</span>
            <span>To: {dateConverter(endDate)}</span>
          </div>
        )}
      </div>
      <div
        className={`
          grid grid-cols-4 gap-4 
          text-center content-center
          border-4 border-blue-400 
          rounded-sm h-24  mx-4 
          `}
      >
        {page != "guest" && (
          <SubmitButton
            functionProp={handleClick}
            id={id}
            name={"Edit"}
            width={"w-36"}
            marginTop={"mt-4"}
            rounded={"rounded-3xl"}
          />
        )}

        {page != "guest" && (
          <SubmitButton
            functionProp={handleClick}
            id={id}
            name={"Delete"}
            width={"w-36"}
            marginTop={"mt-4"}
            rounded={"rounded-3xl"}
          />
        )}
        {page != "guest" && (
          <SubmitButton
            functionProp={handleClick}
            id={id}
            name={"Book"}
            width={"w-36"}
            marginTop={"mt-4"}
            rounded={"rounded-3xl"}
          />
        )}
        {page != "guest" && (
          <SubmitButton
            functionProp={handleClick}
            id={id}
            name={"Save"}
            width={"w-36"}
            marginTop={"mt-4"}
            rounded={"rounded-3xl"}
          />
        )}
        <div></div>
        <div></div>
        {page === "guest" && (
          <SubmitButton
            functionProp={handleClick}
            id={id}
            name={"Cancel Booking"}
            width={"w-36"}
            marginTop={"mt-4"}
            rounded={"rounded-3xl"}
          />
        )}
      </div>
    </div>
  );
};

export default PlaceCard;
