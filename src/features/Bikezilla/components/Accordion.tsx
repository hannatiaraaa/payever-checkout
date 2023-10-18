import React, { useState } from 'react';
import RightDropdown from '@/components/icons/RightDropdown';
import { EColor } from '@/configs/color.enum';

type Props = {
  text: string;
  className?: string;
  children?: React.ReactNode;
};

const Accordion = ({ text, className, children }: Props) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <button
      className={`flex w-full justify-between p-row ${className}`}
      onClick={() => setOpenAccordion(!openAccordion)}
    >
      <p className='text-base text-grey'>{text.toUpperCase()}</p>
      <div>
        <RightDropdown
          color={EColor.grey}
          up={openAccordion}
        />
      </div>
      {children}
    </button>
  );
};

export default Accordion;
