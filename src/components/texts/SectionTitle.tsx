import React from 'react';

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return <p className='text-grey text-xs mt-5 mb-3'>{title.toUpperCase()}</p>;
};

export default SectionTitle;
