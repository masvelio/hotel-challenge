import { Popover, Transition } from '@headlessui/react';
import React, { useState } from 'react';

import { transitionConfig } from '../../utils/transition';
import DropDownButton from './DropdownButton';
import DropDownPanel from './DropdownPanel';

const AdultsDropdown = () => {
  const [numberOfAdults, setNumberOfAdults] = useState(0);

  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <DropDownButton label="Adults" number={numberOfAdults} isOpen={open} />
            <Transition {...transitionConfig}>
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

export default AdultsDropdown;
