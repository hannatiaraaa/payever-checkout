import React from 'react';
import { useTheme } from 'next-themes';
import CheckoutName from './components/CheckoutName';
import Image from 'next/image';
import themeIcons from '@/configs/themeIcons';
import OrderInput from './components/OrderInput';
import Button from '@/components/buttons/Button';
import Accordion from './components/Accordion';

type Props = {
  checkoutName?: string;
};

const Bikezilla = ({ checkoutName = 'Bikezilla' }: Props) => {
  const { systemTheme } = useTheme();
  const sections = ['Account', 'Billing & Shipping', 'Payment'];

  return (
    <div className='px-4 w-full'>
      <CheckoutName name={checkoutName} />
      <div className='w-full grid place-items-center'>
        <div className='w-2/3 gap-3 flex flex-col'>
          <Image
            src={systemTheme === 'light' ? themeIcons.light.payever : themeIcons.dark.payever}
            alt='payever'
            className='h-5 my-7 object-contain'
          />
          <div className='w-full flex flex-col gap-3'>
            <OrderInput />
            <Button
              className='theme-extra-bg-2'
              textClassName='theme-text'
              title='Next Step'
            />
          </div>
          <div>
            {sections.map((text, index) => (
              <Accordion
                key={text}
                text={text}
                className={index > 0 ? 'border-b-[0.5px] border-b-grey' : 'border-y-[0.5px] border-y-grey'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikezilla;
