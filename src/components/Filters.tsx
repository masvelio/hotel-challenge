import React from 'react';

import { useFilter } from '../context/filterContext';
import AdultsDropdown from './Dropdown/AdultsDropdown';
import ChildrenDropDown from './Dropdown/ChildrenDropdown';
import Stars from './shared/Stars';

const Filters = () => {
  const {
    rating,
    setRating,
    adultsInRoom,
    setAdultsInRoom,
    childrenInRoom,
    setChildrenInRoom,
  } = useFilter();

  const handleStartClick = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="p-4 w-fit -mt-12 bg-white shadow-xl rounded-lg sticky top-0 flex items-center justify-between z-20 ">
      <Stars onClick={handleStartClick} rating={rating} />
      <AdultsDropdown adultsInRoom={adultsInRoom} setAdultsInRoom={setAdultsInRoom} />
      <ChildrenDropDown
        childrenInRoom={childrenInRoom}
        setChildrenInRoom={setChildrenInRoom}
      />
    </div>
  );
};

export default Filters;
