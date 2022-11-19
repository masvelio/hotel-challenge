import { Popover, Transition } from '@headlessui/react';
import React, { useState } from 'react';

import DropDownButton from './DropdownButton';
import DropDownPanel from './DropdownPanel';

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

export default ChildrenDropDown;
