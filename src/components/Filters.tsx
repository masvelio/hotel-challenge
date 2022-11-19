import React from 'react';

import AdultsDropdown from './Dropdown/AdultsDropdown';
import ChildrenDropDown from './Dropdown/ChildrenDropdown';
import Stars from './Stars';

interface FiltersProps {
  rating?: number;
  setRating: (newRating: number) => void;
}

const Filters = ({ rating, setRating }: FiltersProps) => {
  const handleStartClick = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="p-4 w-fit -mt-12 bg-white shadow-xl rounded-lg sticky top-0 flex items-center justify-between z-20 ">
      <Stars onClick={handleStartClick} rating={rating} />
      <AdultsDropdown />
      <ChildrenDropDown />
    </div>
  );
};

export default Filters;
