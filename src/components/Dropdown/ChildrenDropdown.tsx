import { Popover, Transition } from '@headlessui/react';
import React, { useState } from 'react';

import { transitionConfig } from '../../utils/transition';
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
            <Transition {...transitionConfig}>
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
