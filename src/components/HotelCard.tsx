import { Disclosure, Transition } from '@headlessui/react';
import React from 'react';
import {
  AiOutlineClockCircle,
  BsTelephone,
  GoLocation,
  MdAlternateEmail,
} from 'react-icons/all';
import Slider from 'react-slick';

import useRoomData from '../hooks/useRoomData';
import { Hotel } from '../types/hotels';
import { transitionConfig } from '../utils/transition';
import Alert from './Alert';
import Loader from './Loader';
import RoomDetails from './RoomDetails';
import Stars from './Stars';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const { loading, error, rooms, fetchRoomDetails, fetched } = useRoomData();

  const handleSeeRooms = () => {
    if (!fetched) {
      fetchRoomDetails(hotel.id);
    }
  };

  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-2 border-blue-900 rounded-lg mb-8 shadow-2xl">
          <div
            className={`p-4 border-blue-900 flex flex-col md:flex-row gap-8 ${
              open ? 'border-b-2' : ''
            }`}
          >
            <div className="min-w-[13rem] w-52 h-52">
              <Slider>
                {hotel.images.map((img) => (
                  <img
                    key={img.url}
                    src={img.url}
                    alt={img.alt}
                    className="w-52 h-52 object-cover rounded-lg"
                  />
                ))}
              </Slider>
            </div>
            <div className="basis-auto">
              <h3 className="font-bold text-3xl mb-4">{hotel.name}</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <GoLocation className="mr-2 min-w-fit" />
                  <p>
                    {hotel.address1}, {hotel.town}, {hotel.country}
                  </p>
                </div>
                <div className="flex items-center">
                  <BsTelephone className="mr-2 min-w-fit" />
                  <p>{hotel.telephone}</p>
                </div>
                <div className="flex items-center">
                  <MdAlternateEmail className="mr-2 min-w-fit" />
                  <p>{hotel.email}</p>
                </div>
                <div className="flex items-center">
                  <AiOutlineClockCircle className="mr-2 min-w-fit" />
                  <p>
                    Checkin: {hotel.checkInHours}:{hotel.checkInMinutes} / Checkout:{' '}
                    {hotel.checkOutHours}:{hotel.checkOutMinutes}
                  </p>
                </div>
                <Disclosure.Button
                  className="bg-blue-900 text-white px-4 py-2 rounded self-start"
                  onClick={handleSeeRooms}
                >
                  {open ? 'Hide' : 'Show'} available rooms
                </Disclosure.Button>
              </div>
            </div>
            <div className="min-w-fit md:ml-auto flex flex-col">
              <Stars rating={Number(hotel.starRating)} />
            </div>
          </div>
          <Transition {...transitionConfig}>
            <Disclosure.Panel>
              {loading && <Loader />}
              {error && <Alert message={error} type="danger" />}
              {!loading && rooms.length === 0 ? (
                <Alert message="Noo rooms available" type="info" />
              ) : null}
              {rooms.map((room) => (
                <RoomDetails key={room.id} room={room} />
              ))}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default HotelCard;
