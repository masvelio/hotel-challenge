import React from 'react';

import Filters from './components/Filters';
import HotelsList from './components/HotelsList';
import { FilterProvider } from './context/filterContext';

const App = () => {
  return (
    <FilterProvider>
      <header className="w-full md:h-64 md:bg-[url('/resources/hotel-bg.jpg')] bg-cover bg-center flex items-center justify-center"></header>
      <main className="container lg:px-40 px-10 mx-auto flex flex-col justify-center items-center">
        <Filters />
        <HotelsList />
      </main>
    </FilterProvider>
  );
};

export default App;
