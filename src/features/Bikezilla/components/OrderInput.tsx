import React from 'react';

const OrderInput = () => {
  return (
    <div className='w-full'>
      <p className='theme-text text-sm font-medium mb-3'>ORDER</p>
      <div className='theme-extra-bg-column rounded-xl border-[0.5px] border-main-bg-highlight-light dark:border-main-bg-highlight-dark'>
        <div className='flex justify-between items-center p-row'>
          <input
            className='theme-text text-base bg-transparent border-0 focus:outline-0'
            placeholder='Amount'
          />
          <span className='theme-text text-base'>EUR Є</span>
        </div>
        <input
          placeholder='Reference'
          className='border-0 bg-transparent focus:outline-0 p-row theme-text text-base border-t-[0.5px] border-t-main-bg-highlight-light dark:border-t-main-bg-highlight-dark'
        />
      </div>
    </div>
  );
};

export default OrderInput;
