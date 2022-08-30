import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { advanceSearch } from "../../features/misc-slices/searchSlice";
import { testData } from '../../utils/mockData';
import Card from '../shared-components/Card';
import SearchPopUp from '../header/SearchPopUp';

const Feed = () => {
  const renderAdvanceSearch = useSelector(state => state.search.renderSearch);

  const testValues = testData.map((item) => item.title)
  return (
    <div className='grid grid-cols-4 gap-6 ml-6 m-8 bg-backgroundImage  '>
      {testData.map((item, key) => <Card value={item} key={key} />)}
      {renderAdvanceSearch && 
      
          <SearchPopUp/>
        
        
      }
         
    </div>
  )
}

export default Feed


