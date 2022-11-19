import React, { useState } from 'react';

import Filters from './components/Filters';
import HotelsList from './components/HotelsList';

const App = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);

  return (
    <>
      <header className="w-full h-64 bg-[url('/resources/hotel-bg.jpg')] bg-cover bg-center flex items-center justify-center"></header>
      <main className="container lg:px-40 px-10 mx-auto flex flex-col justify-center items-center">
        <Filters rating={rating} setRating={setRating} />
        <HotelsList />
      </main>
    </>
  );
};

export default App;
