import React, { useState } from 'react';
import type { TCommonItem } from '@/types/rows.type';
import themeIcons from '@/configs/themeIcons';
import Image from 'next/image';
import ToggleSwitch from '@/components/buttons/ToggleSwitch';

const CommonItem = ({ name, theme, checked, icon, iconKey, hasToggle, rightText }: TCommonItem) => {
  const { dark, light } = themeIcons;
  const themeIcon = theme === 'light' ? light[iconKey as keyof typeof light] : dark[iconKey as keyof typeof dark];
  const [isActive, setIsActive] = useState(checked);

  const onSwitch = () => setIsActive(!isActive);

  return (
    <div className='flex items-center justify-between p-row gap-2 theme-border-b'>
      <Image
        src={icon ?? themeIcon}
        alt={name}
        className='h-4 w-auto object-contain'
      />
      <p className='flex-1 text-base theme-text'>{name}</p>
      <div className='flex items-center gap-2'>
        {hasToggle ? (
          <ToggleSwitch
            checked={isActive}
            onClick={onSwitch}
          />
        ) : null}
        {rightText && (
          <button>
            <p className='text-base font-medium text-blue-highlight'>{rightText}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CommonItem;
