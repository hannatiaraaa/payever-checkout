import React from 'react';
import Image from 'next/image';
import type { TThemeType } from '@/types/theme.type';
import themeIcons from '@/configs/themeIcons';

type IconProps = {
  src: string;
  height?: number | string;
};

const RenderIcon = ({ src, height = 6 }: IconProps) => (
  <Image
    src={src}
    alt='icon'
    className={`h-${typeof height === 'number' ? height : `[${height}]`} w-auto object-contain`}
  />
);

type Props = {
  theme?: TThemeType;
  openSidebar?: React.MouseEventHandler<HTMLButtonElement>;
};

const TopBar = ({ theme, openSidebar }: Props) => {
  const { dark, light } = themeIcons;
  const icons = theme === 'light' ? light : theme === 'dark' ? dark : dark;

  return (
    <div className='flex items-center justify-between gap-2'>
      <button
        className='flex-1'
        onClick={openSidebar}
      >
        <RenderIcon src={icons.dockSidebar} />
      </button>
      <div className='flex gap-2 items-center'>
        <RenderIcon src={icons.avatar} />
        <RenderIcon
          src={icons.message}
          height={4}
        />
        <RenderIcon src={icons.search} />
        <RenderIcon src={icons.hamburger} />
        <div className='bg-white dark:bg-[#66686D]/60 flex items-center px-[0.375rem] py-1 rounded-md gap-3'>
          <RenderIcon
            src={icons.apps}
            height='0.875rem'
          />
          <p className='text-xs theme-text'>Apps</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
