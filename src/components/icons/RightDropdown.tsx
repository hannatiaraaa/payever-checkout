import React from 'react';
import { EColor } from '@/configs/color.enum';
import type { TColor } from '@/types/theme.type';

type Props = {
  color?: TColor;
  up?: boolean;
};

const RightDropdown = ({ color = EColor['blue-highlight'], up }: Props) => {
  if (up) {
    return (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M13.68 12L15 10.731L8 4L1 10.731L2.32 12L8 6.538L13.68 12Z'
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.32 4L1 5.269L8 12L15 5.269L13.68 4L8 9.462L2.32 4Z'
        fill={color}
      />
    </svg>
  );
};

export default RightDropdown;
