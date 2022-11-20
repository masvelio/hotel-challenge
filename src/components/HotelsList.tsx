import React from 'react';

import useHotelData from '../hooks/useHotelData';
import Alert from './Alert';
import HotelCard from './HotelCard';
import Loader from './Loader';

const HotelsList = () => {
  const { loading, error, hotels } = useHotelData();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert message={error} type="danger" />;
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
