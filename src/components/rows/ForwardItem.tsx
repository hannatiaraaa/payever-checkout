import React from 'react';
import type { TForwardItem } from '@/types/rows.type';
import Image from 'next/image';
import ChevronRight from '@/components/icons/ChevronRight';
import { EColor } from '@/configs/color.enum';

const ForwardItem = ({ name, icon }: TForwardItem) => {
  return (
    <button className='w-full flex items-center gap-2 p-row--b'>
      <div className='pb-row'>
        {icon && (
          <Image
            src={icon}
            width={16}
            height={16}
            alt={name}
            className='h-4 w-auto aspect-square'
          />
        )}
      </div>
      <div className='flex-1 flex justify-between items-center gap-2 theme-border-b pb-row'>
        <p className='flex-1 text-left theme-text text-base'>{name}</p>
        <div className='h-4 w-auto object-contain'>
          <ChevronRight color={EColor.grey} />
        </div>
      </div>
    </button>
  );
};

export default ForwardItem;
