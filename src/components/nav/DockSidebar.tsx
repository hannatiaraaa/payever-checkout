import React, { useState } from 'react';
import Image from 'next/image';
import closeIcon from '@/assets/close.svg';
import RightDropdown from '@/components/icons/RightDropdown';
import navList from '@/configs/navList';
import Link from 'next/link';
import DockSidebarIcons from '../icons/DockSidebarIcons';

type Props = {
  activeNav?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

const DockSidebar = ({ activeNav, onClose }: Props) => {
  const [showNav, setShowNav] = useState(true);
  return (
    <div className='px-2 py-4 rounded-xl theme-extra-bg-2 w-1/4'>
      <div className='px-2 flex items-center justify-between gap-2 mb-4'>
        <p className='text-2xl font-bold theme-text'>Checkout</p>
        <button onClick={onClose}>
          <Image
            src={closeIcon}
            alt='close'
            className='w-4 aspect-square object-contain'
          />
        </button>
      </div>

      <div className='px-2 flex items-center justify-between gap-2 mb-4'>
        <p className='text-sm theme-text'>Navigation</p>
        <button
          className='w-4 aspect-square object-contain'
          onClick={() => setShowNav(!showNav)}
        >
          <RightDropdown up={!showNav} />
        </button>
      </div>

      {showNav &&
        navList.map(({ name, route }) => (
          <Link
            key={name}
            href={route as string}
            className={`w-full flex gap-2 py-2 px-2 rounded-md ${
              activeNav === name ? 'bg-blue-highlight' : 'bg-transparent'
            }`}
          >
            <div className='w-4 aspect-square'>
              <DockSidebarIcons
                name={name}
                isActive={activeNav === name}
              />
            </div>
            <p className={`text-xs ${activeNav === name ? 'text-primary-text-dark' : 'theme-text'}`}>{name}</p>
          </Link>
        ))}
    </div>
  );
};

export default DockSidebar;
