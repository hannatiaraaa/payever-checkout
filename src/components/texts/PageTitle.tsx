import React from 'react';
import type { TPageName } from '@/types/nav.type';

type Props = {
  title?: TPageName;
};

const PageTitle = ({ title }: Props) => {
  return <p className='theme-text text-2xl font-bold'>{title}</p>;
};

export default PageTitle;
