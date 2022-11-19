import React from 'react';

import useHotelData from '../hooks/useHotelData';
import ErrorAlert from './ErrorAlert';
import HotelCard from './HotelCard';
import Loader from './Loader';

const HotelsList = () => {
  const { loading, error, hotels } = useHotelData();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorAlert message={error} />;
  }

  return (
    <section className="w-full mt-8 flex flex-col">
      {hotels.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </section>
  );
};

export default HotelsList;
