import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import Card from '../shared-components/Card';
import SearchPopUp from '../header/SearchPopUp';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllProperties, selectProperties } from '../../redux/slices/propertySlice';

const Feed = () => {
  // const renderAdvanceSearch = useSelector(state => state.search.renderSearch);
  // const [renderData, setRenderData] = useState([]);
  // const testValues = testData.map((item) => item.title)
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector(selectProperties);
  
 
  useEffect( () => {
     dispatch(getAllProperties())
  },[])

  console.log("prop", properties)
  
  return (
    <div className='grid grid-cols-4 gap-6 ml-6 m-8 bg-backgroundImage  '>
      {/* {testData.map((item, key) => <Card value={item} key={key} />)} */}
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {!loading && properties?.map((property, key) => {
        return <Card value={property} key={key}/> 
      })}
      {/* {renderAdvanceSearch && 
      
          <SearchPopUp/>
        
        
      } */}
         
    </div>
  )
}

export default Feed


