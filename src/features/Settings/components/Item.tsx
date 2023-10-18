import React from 'react';
import type { TSettings } from '@/types/features.type';
import CommonItem from '@/components/rows/CommonItem';
import ForwardItem from '@/components/rows/ForwardItem';
import Image from 'next/image';

type Props = {
  item: TSettings;
};

const SettingsItem = ({ item }: Props) => {
  const { name, icon, component, checked, id } = item;

  const renderItem = {
    Common: (
      <CommonItem
        name={name}
        icon={icon}
        hasToggle={checked === undefined ? false : true}
        checked={checked}
      />
    ),
    Forward: (
      <ForwardItem
        name={name}
        icon={icon}
      />
    ),
    'Channel set ID': (
      <div className='flex w-full items-center gap-2 p-row--b'>
        <div className='pb-row'>
          {icon && (
            <Image
              src={icon}
              alt={name}
              className='h-4 aspect-square'
            />
          )}
        </div>
        <div className='flex-1 flex justify-between items-center theme-border-b pb-row'>
          <p className='flex-1 text-left theme-text text-base'>{name}</p>
          <div className='flex items-center gap-7'>
            <p className='text-left theme-text text-base'>{id}</p>
            <button onClick={() => navigator.clipboard.writeText(id as string)}>
              <p className='text-base font-medium text-blue-highlight'>Copy</p>
            </button>
          </div>
        </div>
      </div>
    ),

    default: (
      <button className='flex w-full items-center gap-2 p-row--b'>
        <div className='pb-row'>
          {icon && (
            <Image
              src={icon}
              alt={name}
              className='h-4 aspect-square'
            />
          )}
        </div>
        <p className='flex-1 theme-border-b pb-row text-left theme-text text-base'>{name}</p>
      </button>
    ),
  };

  return renderItem[component as keyof typeof renderItem];
};

export default SettingsItem;
