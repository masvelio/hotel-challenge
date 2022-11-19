import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

enum Operation {
  ADDITION = 1,
  SUBTRACTION = 2,
}

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

export default Counter;
