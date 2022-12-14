import React from 'react';

import { Room } from '../types/hotels';

interface RoomDetailsProps {
  room: Room;
}

const RoomDetails = ({ room }: RoomDetailsProps) => {
  return (
    <div className="p-4 flex md:flex-row flex-col gap-8 border-blue-900 border-b-2 last:border-b-0">
      <div className="flex flex-col md:min-w-[13rem] md:max-w-[13rem] md:w-[13rem]">
        <h4 className="font-bold text-xl mb-2">{room.name}</h4>
        <p className="">Adults: {room.occupancy.maxAdults}</p>
        <p className="">Children: {room.occupancy.maxChildren}</p>
      </div>
      <div>{room.longDescription}</div>
    </div>
  );
};

export default RoomDetails;
