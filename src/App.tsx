import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import colors from 'tailwindcss/colors';

const App = () => {
  return (
    <>
      <header className="w-full h-64 bg-[url('/resources/hotel-bg.jpg')] bg-cover bg-center flex items-center justify-center"></header>
      <main className="px-4 container mx-auto flex flex-col justify-center items-center">
        <div className="p-10 w-6/12 -mt-12 bg-white shadow-lg rounded-lg">filters</div>
        <section className="w-full mt-8 flex flex-col">
          <div className="border-2 border-blue-900 rounded-lg mb-4">
            <div className="p-4 border-blue-900 border-b-2 flex gap-8">
              <div className="min-w-[13rem] h-52 border-2 border-amber-500">carousel</div>
              <div className="basis-auto">
                <h3 className="font-bold text-3xl mb-4">Hotel Name</h3>
                <p>Address 1</p>
                <p>Address 2</p>
              </div>
              <div className="min-w-fit ml-auto flex">
                <AiFillStar size="30px" color={colors.blue['900']} />
                <AiFillStar size="30px" color={colors.blue['900']} />
                <AiFillStar size="30px" color={colors.blue['900']} />
                <AiFillStar size="30px" color={colors.blue['900']} />
                <AiOutlineStar size="30px" color={colors.blue['900']} />
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
                blanditiis consectetur, consequatur deleniti esse facilis ipsam magnam
                nobis placeat quas quia quis repudiandae.
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
                blanditiis consectetur, consequatur deleniti esse facilis ipsam magnam
                nobis placeat quas quia quis repudiandae.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
