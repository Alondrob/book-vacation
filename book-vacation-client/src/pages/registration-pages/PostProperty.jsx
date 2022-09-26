import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderLayout from "../../components/header/HeaderLayout";
import Next from "../../components/shared-components/Next";
import PropertyInputField from "../../components/shared-components/PropertyInputField";
import SubmitButton from "../../components/shared-components/SubmitButton";
import Preview from "./Preview";

const PostProperty = () => {
    const navigate = useNavigate();
  const [nextButton, setNextButton] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [preview, setPreview] = useState(false);
  const inputArrOne = [
    {
      name: "Property Name",
      height: 10,
      type: "text",
      stateName: "propertyName",
    },
    {
      name: "Describe Your Property",
      height: 36,
      type: "text area",
      stateName: "propertyDescription",
    },
    { name: "Address", height: 10, type: "text", stateName: "address" },
    { name: "City", height: 10, type: "text", stateName: "city" },
    { name: "State", height: 10, type: "text", stateName: "state" },
    { name: "Country", height: 10, type: "text", stateName: "country" },
    { name: "Zip Code", height: 10, type: "text", stateName: "zipCode" },
  ];
  const inputArrayTwo = [
    { name: "Guests", height: 10, type: "number", stateName: "guests" },
    {
      name: "Property Type",
      height: 10,
      type: "text",
      stateName: "propertyType",
    },
    { name: "Bedrooms", height: 10, type: "number", stateName: "bedrooms" },
    { name: "Beds", height: 10, type: "number", stateName: "noOfBeds" },
    { name: "Baths", height: 10, type: "number", stateName: "bathrooms" },
    {
      name: "Price Per Night",
      height: 10,
      type: "number",

      stateName: "pricePerNight",
    },
    {
      name: "Ameneties",
      height: 10,
      type: "text",
      stateName: "amenities",
    },
  ];

  const [propertyData, setPropertyData] = useState({
    propertyName: "",
    propertyDescription: "",
    address: null,
    city: null,
    state: null,
    country: "",
    zipCode: "",
    guests: 0,
    propertyType: "",
    bedrooms: 0,
    noOfBeds: 0,
    bathrooms: 0,

    pricePerNight: null,
    amenities: [],
    image: [],
  });

  const handleInput = (stateName, value) => {
    switch (stateName) {
      case "propertyName":
        setPropertyData({ ...propertyData, propertyName: value });
        break;
      case "propertyDescription":
        setPropertyData({ ...propertyData, propertyDescription: value });
        break;
      case "address":
        setPropertyData({ ...propertyData, address: value });
        break;
      case "city":
        setPropertyData({ ...propertyData, city: value });
        break;
      case "state":
        setPropertyData({ ...propertyData, state: value });
        break;
      case "country":
        setPropertyData({ ...propertyData, country: value });
        break;
      case "zipCode":
        setPropertyData({ ...propertyData, zipCode: value });
        break;
      case "guests":
        setPropertyData({ ...propertyData, guests: value });
        break;
      case "propertyType":
        setPropertyData({ ...propertyData, propertyType: value });
        break;
      case "bedrooms":
        setPropertyData({ ...propertyData, bedrooms: value });
        break;
      case "noOfBeds":
        setPropertyData({ ...propertyData, noofBeds: value });
        break;
      case "bathrooms":
        setPropertyData({ ...propertyData, bathrooms: value });
        break;
      case "pricePerNight":
        setPropertyData({ ...propertyData, pricePerNight: value });
        break;
      case "amenities":
        setPropertyData({ ...propertyData, amenities: value });
        break;
    }
  };

  const movePage = (name) => {
    console.log(name);
    setNextButton(!nextButton);
  };
    
    const handlePreview = () => {
        setPreview(true);
    }
    
    
  return (
    <div>
      <HeaderLayout />
      {(!nextButton && !preview) && (
        <div
          className="w-full h-screen bg-cover 
                    bg-vacation-pattern
                    bg-no-repeat  "
        >
          {inputArrOne.map((item, key) => (
            <PropertyInputField
              key={key}
              name={item.name}
              stateName={item.stateName}
              height={item.height}
              type={item.type}
              handleInput={handleInput}
            />
          ))}
          <Next movePage={movePage} name="forward" />
        </div>
      )}
      {/* ************ */}
      {(nextButton && !preview) && (
        <div
          className="w-full h-screen bg-cover 
                    bg-vacation-pattern
                    bg-no-repeat  "
        >
          {inputArrayTwo.map((item, key) => (
            <PropertyInputField
              key={key}
              name={item.name}
              stateName={item.stateName}
              height={item.height}
              type={item.type}
              handleInput={handleInput}
            />
          ))}
                  <SubmitButton
                      name={"Preview And Images"}
                      functionProp={handlePreview}
                  />
                
          <Next name="back" movePage={movePage} />
        </div>
          )}
          {preview && <Preview propertyData={propertyData} />}
    </div>
  );
};

export default PostProperty;
