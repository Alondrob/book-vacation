import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SubmitButton from "../../components/shared-components/SubmitButton";
import { createNewProperty } from '../../redux/api-requests/propertyRequests';

const Preview = ({ propertyData }) => {
    const dispatch = useDispatch();
  const keysArr = new Array();
  const valArr = new Array();

  for (const item in propertyData) {
    let key = item;
    let value = propertyData[item];
    keysArr.push(key);
    valArr.push(value);
  }
    
    const submitProperty = () => {
        dispatch(createNewProperty(propertyData))
    }

  return (
    <div className="grid grid-cols-3">
      <div className="block bg-blue-400space-y-2 mt-0 mb-8">
        {keysArr.map((item, key) => (
          <div className="text-start border-2 border-black h-8 bg-blue-200">
            <p className="ml-2 font-extrabold">
              {item}: {valArr[key]}
            </p>
          </div>
        ))}
      </div>

          <div className="grid place-items-center ml-2 bg-pink-100">
              <SubmitButton width={"w-48"} name={"Confirm and Post"} functionProp={submitProperty} />
         </div>
    </div>
  );
};

export default Preview;

{
  /* <div className="text-start border-2 border-black">
          Name: {propertyData["propertyName"]}
        </div>
        <div className="text-start border-2 border-black">
          Description: {propertyData["propertyDescription"]}
        </div>
        <div className="text-start border-2 border-black">
          Address: {propertyData["address"]}
        </div>
        <div className="text-start border-2 border-black">
          Description: {propertyData["address"]}
        </div>
        <div className="text-start border-2 border-black">
          City: {propertyData["city"]}
        </div>
        <div className="text-start border-2 border-black">
          State: {propertyData["state"]}
        </div>
        <div className="text-start border-2 border-black">
          Country: {propertyData["country"]}
        </div>
        <div className="text-start border-2 border-black">
          Zip-Code: {propertyData["zipCode"]}
        </div>
        <div className="text-start border-2 border-black">
          Guests: {propertyData["guests"]}
        </div>
        <div className="text-start border-2 border-black">
          Bedrroms: {propertyData["noOfBeds"]}
        </div>
        <div className="text-start border-2 border-black">
          Total Beds: {propertyData["noOfBeds"]}
        </div>
        <div className="text-start border-2 border-black">
          Guests: {propertyData["guests"]}
        </div> */
}
