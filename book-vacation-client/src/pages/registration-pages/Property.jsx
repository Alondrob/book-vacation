import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { testData } from "../../utils/mockData";

import HeaderLayout from "../../components/header/HeaderLayout";
import DateSearchBar from '../../components/shared-components/DateSearchBar';
import Guests  from '../../components/shared-components/DateSearchBar';
import SubmitButton  from '../../components/shared-components/DateSearchBar';

const Property = () => {
  const propertyId = useParams();
  const [noOfGuests, setNoOfGuests] = useState(0);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const selectedProperty = testData.filter((item) => item.id === propertyId.id);

  const handleGuests = (val) => {
    if (noOfGuests === 0) {
      setNoOfGuests(0);
    }
    setNoOfGuests(noOfGuests + val);
  };
  const handleDate = (val) => {
    setFromDate(val);
  };
  const handleSubmit = () => {
    let dataObj = {
      id: parseInt(propertyId.id),
      fromDate: fromDate,
      toDate: toDate,
      noOfGuests: noOfGuests
    }
    console.log(dataObj);
  }

  return (
    <div>
      <HeaderLayout />

      <div className="flex justify-center h-screen space-x-24 pt-8 bg-gray-300">
        <div className=" max-w-sm  rounded-xl overflow-hidden shadow-sm w-9/12">
          <img
            className=" text-centerw w-96  rounded-md h-4/6"
            src={selectedProperty[0].image}
          />
          <p className="h-16">{selectedProperty[0].title}</p>
        </div>

        <div className="ml-96">
          <h4 className="text-center italic font-extrabold">From</h4>
          <DateSearchBar
            name="fromDate"
            value={fromDate}
            handleDate={(val) => setFromDate(val)}
          />
          <h4 className="text-center italic font-extrabold">To</h4>
          <DateSearchBar
            name="fromDate"
            value={fromDate}
            handleDate={(val) => setToDate(val)}
          />
          <Guests handleGuests={handleGuests} noOfGuests={noOfGuests} />
          <SubmitButton handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Property;
