import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { testData } from "../../utils/mockData";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "../../redux/api-requests/propertyRequests";
import { selectProperties } from "../../redux/slices/propertySlice";

import HeaderLayout from "../../components/header/HeaderLayout";
import DateSearchBar from "../../components/shared-components/DateSearchBar";
import Guests from "../../components/shared-components/Guests";
import SubmitButton from "../../components/shared-components/SubmitButton";

const Property = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { property, loading, error } = useSelector(selectProperties);
  const [noOfGuests, setNoOfGuests] = useState(0);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  useEffect(() => {
    dispatch(getPropertyById(params.id));
  }, []);

  const handleGuests = (val) => {
    if (noOfGuests === 0) {
      setNoOfGuests(0);
    }
    setNoOfGuests(noOfGuests + val);
  };
  const handleDate = (name, val) => {
    console.log(name, val);
    if (name === "fromDate") {
      setFromDate(val);
    }
    if (name === "toDate") {
      setToDate(val);
    }
  };
  const handleSubmit = () => {
    let dataObj = {
      id: parseInt(property._id),
      fromDate: fromDate,
      toDate: toDate,
      noOfGuests: noOfGuests,
    };
    console.log(dataObj);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <HeaderLayout />
      {!loading && property && (
        <div className="flex justify-center h-screen space-x-24 pt-8 bg-gray-400">
          <div className="max-w-sm border-2 absolute left-12 space-x-12 border-white">
            <img
              className=" text-centerw w-96  rounded-md h-4/6"
              src={property.image}
            />
            <p className="h-16">{property.name}</p>
          </div>

          <div className="space-x-64 content-center">
            <div></div>
            <h4 className="text-center italic font-extrabold">From</h4>
            <DateSearchBar
              name={"fromDate"}
              value={fromDate}
              handleDate={handleDate}
            />
            <h4 className="text-center italic font-extrabold">To</h4>
            <DateSearchBar
              name={"toDate"}
              value={toDate}
              handleDate={handleDate}
            />
            <h4 className="text-center italic font-extrabold">Guests</h4>
            <Guests handleGuests={handleGuests} noOfGuests={noOfGuests} />

            <div className="flex justify-center">
              <SubmitButton handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
