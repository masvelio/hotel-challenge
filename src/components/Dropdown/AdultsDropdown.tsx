import { Popover, Transition } from '@headlessui/react';
import React, { useState } from 'react';

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

export default AdultsDropdown;
