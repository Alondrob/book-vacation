import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderLayout from "../../components/header/HeaderLayout";
import Guests from "../../components/shared-components/Guests";
import Next from "../../components/shared-components/Next";
import PropertyDescription from "../../components/shared-components/PropertyDescription";
import PropertyInputField from "../../components/shared-components/PropertyInputField";
import UploadImages from "../../components/shared-components/UploadImages";

const RegisterProperty = () => {
  const [nextButton, setNextButton] = useState(false);

  const [propertyData, setPropertyData] = useState({
    propertyName: "",
    propertyDescription: "",
    address: null,
    city: null,
    state: null,
    country: "",
    zipCode: "",
    bedrooms: 0,
    noOfBeds: 0,
    bathrooms: 0,
    guests: 0,
    propertyType: "",
    amenities: [],
    image: [],
    pricePerNight: null,
  });

  // const handleGuests = (val) => {
  //   if (noOfGuests === 0) {
  //     setNoOfGuests(0);
  //   }
  //   setNoOfGuests(noOfGuests + val);
  // };

  // const handleInput = (name, value) => {
  //   switch (name) {
  //     case ("Name"):
  //       setPropertyData({ ...propertyData, propertyName: value });
  //       break;
  //     case "propertyDescription":
  //       setPropertyData({ ...propertyData, propertyDescription: value });
  //       break;
  //     case "Address":
  //       setPropertyData({ ...propertyData, address: value });
  //       break;
  //     case "City":
  //       setPropertyData({ ...propertyData, city: value });
  //       break;
  //     case "State":
  //       setPropertyData({ ...propertyData, state: value });
  //       break;
  //     case "Country":
  //       setPropertyData({ ...propertyData, country: value });
  //       break;
  //     case "Zip Code":
  //       setPropertyData({ ...propertyData, country: value });
  //       break;
  //     case "Guests":
  //       setPropertyData({ ...propertyData, guests: value });
  //       break;
  //   }
  //   // if (name === "Name") setPropertyData({ ...propertyData, propertyName: value });
  // };

 

  return (
    <div>
      <div className="mb-0">
        <HeaderLayout />
      </div>

      <div className="w-full h-screen bg-cover  bg-vacation-pattern bg-no-repeat  ">
        <PropertyInputField
          name={"Name"}
          type={"text"}
          height={10}
          
        />
        <PropertyInputField
          name={"propertyDescription"}
          type={"text area"}
          height={36}
          
        />
        <PropertyInputField
          name={"Address"}
          type={"text"}
          height={10}
          
        />
        <PropertyInputField
          name={"City"}
          type={"text"}
          height={10}
          
        />
        <PropertyInputField
          name={"State"}
          type={"text"}
          height={10}
          
        />
        <PropertyInputField
          name={"Country"}
           type={"text"}
          height={10}
          
        />
        <PropertyInputField
          name={"Zip Code"}
           type={"text"}
          height={10}
          
        />
        <PropertyInputField
          name={"Guests"}
           type={"number"}
          height={10}
          minValue={0}
          
        />
        <Next/>
        {/* <Guests
          name={"Number Of Guests"}
          handleGuests={handleGuests}
          noOfGuests={noOfGuests}
        /> */}

        {/* Number of guests */}
        <div className="grid grid-cols-3 gap-2">
          <div className="text-lg font-extrabold ml-80 mt-2">
            {" "}
            Guest Number:{" "}
          </div>
          <div></div>
          <div></div>
        </div>

        <UploadImages />
        {/* ****************************** */}
        <div className=" flex justify-center mt-10 mb-4">
          <button
            className="block  font-extrabold italic text-center rounded-full h-16 w-80 border-6 border-blue-300 bg-gray-500 hover:bg-green-100"
            // onClick={submitRegistration}
          >
            Sign-Up
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterProperty;
