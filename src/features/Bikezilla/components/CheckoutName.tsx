import React from 'react';

type Props = {
  name?: string;
};

const CheckoutName = ({ name }: Props) => {
  return (
    <div>
      <p className='rounded-t-xl text-xs px-5 py-2 text-center theme-extra-bg-2 theme-text'>Checkout Name</p>
      <p className='text-sm px-5 font-bold py-3 theme-text theme-main-bg-highlight theme-text'>{name}</p>
    </div>
  );
};

export default CheckoutName;
