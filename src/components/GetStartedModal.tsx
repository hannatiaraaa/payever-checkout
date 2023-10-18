import React from 'react';
import ReactModal from 'react-modal';
import GetStarted from '@/assets/getStarted.svg';
import Image from 'next/image';

type ButtonProps = {
  className?: string;
  textClassName?: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const RenderButton = ({ className, textClassName, title, onClick }: ButtonProps) => {
  return (
    <button
      className={`p-[0.625rem] rounded-md ${className}`}
      onClick={onClick}
    >
      <p className={`text-sm font-bold ${textClassName}`}>{title}</p>
    </button>
  );
};

const GetStartedModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className='max-w-[20%] backdrop-blur-xl shadow-md shadow-black/20 fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-main-bg-light/90 dark:bg-main-bg-dark/90 px-4 py-6 rounded-2xl border border-solid border-black/10 dark:border-[#3B3B3B] outline-none grid place-items-center text-center gap-4'
      overlayClassName='fixed z-[1] inset-0 bg-black/30'
    >
      <Image
        src={GetStarted}
        alt='get started'
        className='w-1/4 object-contain'
      />
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-bold theme-text'>payever Checkout</p>
        <p className='text-xs theme-text font-medium'>Customise your checkout.</p>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <RenderButton
          title='Get Started'
          className='bg-gradient-to-r from-[#2482E7] to-[#146DCC]'
          textClassName='text-white'
          onClick={() => setIsOpen(false)}
        />
        <RenderButton
          title='Back to Dashboard'
          className='bg-[#CCC5C4] dark:bg-grey'
          textClassName='theme-text'
        />
      </div>
      <p className='text-xs theme-text font-medium'>Hereby I confirm the Terms and Pricing of the payever Settings.</p>
    </ReactModal>
  );
};

export default GetStartedModal;
