import { Popover, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import colors from 'tailwindcss/colors';

enum Operation {
  ADDITION = 1,
  SUBTRACTION = 2,
}

interface DropDownButtonProps {
  label: string;
  number: number;
  isOpen: boolean;
}

const DropDownButton = ({ label, number, isOpen }: DropDownButtonProps) => {
  return (
    <Popover.Button className="group inline-flex items-center rounded-md bg-blue-900 px-3 py-2 font-medium text-white ml-4">
      <span>
        {label}: {number}
      </span>
      <FiChevronDown
        className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all ml-1`}
      />
    </Popover.Button>
  );
};

interface CounterProps {
  onButtonClick: React.Dispatch<React.SetStateAction<number>>;
  number: number;
}

const Counter = ({ onButtonClick, number }: CounterProps) => {
  const handleNumberChange = (type: Operation) => {
    onButtonClick((oldNumber) => {
      if (type === Operation.ADDITION) {
        return oldNumber + 1;
      }

      if (type === Operation.SUBTRACTION && oldNumber > 0) {
        return oldNumber - 1;
      }

      return oldNumber;
    });
  };

  return (
    <div className="flex">
      <button
        className="bg-blue-900 text-white py-2 px-4 rounded-full"
        onClick={() => handleNumberChange(Operation.SUBTRACTION)}
      >
        <AiOutlineMinus />
      </button>
      <div className="font-medium flex items-center text-lg mx-4">{number}</div>
      <button
        className="bg-blue-900 text-white py-2 px-4 rounded-full"
        onClick={() => handleNumberChange(Operation.ADDITION)}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

interface DropDownPanelProps {
  label: string;
  description: string;
  number: number;
  onButtonClick: React.Dispatch<React.SetStateAction<number>>;
}

const DropDownPanel = ({
  label,
  description,
  number,
  onButtonClick,
}: DropDownPanelProps) => {
  return (
    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4">
      <div className="mt-4 p-4 overflow-hidden rounded-lg shadow-2xl flex bg-white items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">{label}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Counter onButtonClick={onButtonClick} number={number} />
      </div>
    </Popover.Panel>
  );
};

const ChildrenDropDown = () => {
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <DropDownButton label="Children" number={numberOfChildren} isOpen={open} />
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <DropDownPanel
                label="Number of Children"
                description="under 18 years old"
                number={numberOfChildren}
                onButtonClick={setNumberOfChildren}
              />
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

const AdultsDropdown = () => {
  const [numberOfAdults, setNumberOfAdults] = useState(0);

  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <DropDownButton label="Adults" number={numberOfAdults} isOpen={open} />
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <DropDownPanel
                label="Number of Adults"
                description="over 18 years old"
                number={numberOfAdults}
                onButtonClick={setNumberOfAdults}
              />
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

interface StarsProps {
  rating?: number;
  maxRating?: number;
  onClick?: (newRating: number) => void;
}

const Stars = ({ rating, maxRating = 5, onClick }: StarsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex">
      {Array(maxRating)
        .fill(null)
        .map((el, i) => {
          const areStarsHoverable = !!onClick;
          const isStarIndexLowerThanRating = i < Number(rating);
          const isCurrentlyHovering = hoveredIndex !== null;

          const isStarHovered = isCurrentlyHovering
            ? hoveredIndex >= i
            : isStarIndexLowerThanRating;

          const shouldHighlightStar = areStarsHoverable
            ? isStarHovered
            : isStarIndexLowerThanRating;

          const color = shouldHighlightStar ? colors.blue['900'] : colors.blue['100'];

          return (
            <AiFillStar
              key={i}
              size="30"
              color={color}
              className={areStarsHoverable ? 'cursor-pointer' : ''}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onClick?.(i + 1)}
            />
          );
        })}
    </div>
  );
};

interface FiltersProps {
  rating?: number;
  setRating: (newRating: number) => void;
}

const Filters = ({ rating, setRating }: FiltersProps) => {
  const handleStartClick = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="p-4 w-6/12 -mt-12 bg-white shadow-xl rounded-lg sticky top-0 flex items-center justify-between">
      <Stars onClick={handleStartClick} rating={rating} />
      <AdultsDropdown />
      <ChildrenDropDown />
    </div>
  );
};

const App = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);

  return (
    <>
      <header className="w-full h-64 bg-[url('/resources/hotel-bg.jpg')] bg-cover bg-center flex items-center justify-center"></header>
      <main className="px-4 container mx-auto flex flex-col justify-center items-center">
        <Filters rating={rating} setRating={setRating} />
        <section className="w-full mt-8 flex flex-col">
          <div className="border-2 border-blue-900 rounded-lg mb-4">
            <div className="p-4 border-blue-900 border-b-2 flex gap-8">
              <div className="min-w-[13rem] h-52 border-2 border-amber-500">carousel</div>
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
