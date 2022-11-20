import React, { useState } from 'react';

export type FilterContextType = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  adultsInRoom: number;
  setAdultsInRoom: React.Dispatch<React.SetStateAction<number>>;
  childrenInRoom: number;
  setChildrenInRoom: React.Dispatch<React.SetStateAction<number>>;
};

const FilterContext = React.createContext<FilterContextType>({} as FilterContextType);

const FilterProvider: React.FC = ({ children }) => {
  const [rating, setRating] = useState(0);
  const [adultsInRoom, setAdultsInRoom] = useState(0);
  const [childrenInRoom, setChildrenInRoom] = useState(0);

  const value = {
    rating,
    setRating,
    adultsInRoom,
    setAdultsInRoom,
    childrenInRoom,
    setChildrenInRoom,
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

const useFilter = () => {
  const context = React.useContext(FilterContext);

  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  return context;
};

export { FilterProvider, useFilter };
