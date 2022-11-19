import React, { useState } from 'react';

import Filters from './components/Filters';
import HotelCard from './components/HotelCard';

const App = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);

  return (
    <>
      <header className="w-full h-64 bg-[url('/resources/hotel-bg.jpg')] bg-cover bg-center flex items-center justify-center"></header>
      <main className="px-4 container mx-auto flex flex-col justify-center items-center">
        <Filters rating={rating} setRating={setRating} />
        <section className="w-full mt-8 flex flex-col">
          <HotelCard rating={rating} />
        </section>
      </main>
    </>
  );
};

export default App;
