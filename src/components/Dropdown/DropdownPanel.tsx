import { Popover } from '@headlessui/react';
import React from 'react';

import Counter from './Counter';

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

export default DropDownPanel;
