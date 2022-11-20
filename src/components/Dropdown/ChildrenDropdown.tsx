import { Popover, Transition } from '@headlessui/react';
import React from 'react';

import { FilterContextType } from '../../context/filterContext';
import { transitionConfig } from '../../utils/transition';
import DropDownButton from './DropdownButton';
import DropDownPanel from './DropdownPanel';

interface ChildrenDropDownPros {
  childrenInRoom: FilterContextType['childrenInRoom'];
  setChildrenInRoom: FilterContextType['setChildrenInRoom'];
}

const ChildrenDropDown = ({
  childrenInRoom,
  setChildrenInRoom,
}: ChildrenDropDownPros) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <DropDownButton label="Children" number={childrenInRoom} isOpen={open} />
          <Transition {...transitionConfig}>
            <DropDownPanel
              label="Number of Children"
              description="under 18 years old"
              number={childrenInRoom}
              onButtonClick={setChildrenInRoom}
            />
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ChildrenDropDown;
