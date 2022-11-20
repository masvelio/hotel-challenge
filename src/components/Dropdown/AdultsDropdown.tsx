import { Popover, Transition } from '@headlessui/react';
import React from 'react';

import { FilterContextType } from '../../context/filterContext';
import { transitionConfig } from '../../utils/transition';
import DropDownButton from './DropdownButton';
import DropDownPanel from './DropdownPanel';

interface AdultsDropdownProps {
  adultsInRoom: FilterContextType['adultsInRoom'];
  setAdultsInRoom: FilterContextType['setAdultsInRoom'];
}

const AdultsDropdown = ({ adultsInRoom, setAdultsInRoom }: AdultsDropdownProps) => {
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <DropDownButton label="Adults" number={adultsInRoom} isOpen={open} />
            <Transition {...transitionConfig}>
              <DropDownPanel
                label="Number of Adults"
                description="over 18 years old"
                number={adultsInRoom}
                onButtonClick={setAdultsInRoom}
              />
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default AdultsDropdown;
