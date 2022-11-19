import { Popover } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import React from 'react';

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

export default DropDownButton;
