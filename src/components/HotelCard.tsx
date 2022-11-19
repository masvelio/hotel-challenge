import React from 'react';
import Slider from 'react-slick';

import Stars from './Stars';

interface HotelCardProps {
  rating?: number;
}

const HotelCard = ({ rating }: HotelCardProps) => {
  return (
    <div className="border-2 border-blue-900 rounded-lg mb-4">
      <div className="p-4 border-blue-900 border-b-2 flex gap-8">
        <div className="min-w-[13rem] w-52 h-52">
          <Slider>
            <img
              src="https://via.placeholder.com/300x200.png/09f/fffC/O"
              alt="asd"
              className="w-52 h-52 object-cover"
            />
          </Slider>
        </div>
        <div className="basis-auto">
          <h3 className="font-bold text-3xl mb-4">Hotel Name</h3>
          <p>Address 1</p>
          <p>Address 2</p>
        </div>
        <div className="min-w-fit ml-auto flex flex-col">
          <Stars rating={rating} />
        </div>
      </div>
      <div className="p-4 flex gap-8 border-blue-900 border-b-2 last:border-b-0">
        <div className="flex flex-col min-w-[13rem]">
          <h4 className="font-bold text-xl mb-2">Room 1 Name</h4>
          <p className="">Adults: 2</p>
          <p className="">Children: 0</p>
        </div>
        <div>
          Description des Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto maiores reprehenderit sunt! Ab accusamus asperiores assumenda,
          blanditiis consectetur, consequatur deleniti esse facilis ipsam magnam nobis
          placeat quas quia quis repudiandae.
        </div>
      </div>
      <div className="p-4 flex gap-8 border-blue-900 border-b-2 last:border-b-0">
        <div className="flex flex-col min-w-[13rem]">
          <h4 className="font-bold text-xl mb-2">Room 2 Name</h4>
          <p className="">Adults: 2</p>
          <p className="">Children: 0</p>
        </div>
        <div>
          Description des Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto maiores reprehenderit sunt! Ab accusamus asperiores assumenda,
          blanditiis consectetur, consequatur deleniti esse facilis ipsam magnam nobis
          placeat quas quia quis repudiandae.
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
