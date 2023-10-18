import React from 'react';
import PageTitle from '@/components/texts/PageTitle';
import PaymentList from './components/List';
import { otherPayments, santander } from '@/configs/paymentList';

const PaymentOptions = () => {
  return (
    <div className='gap-3 w-2/3 '>
      <PageTitle title='Payment Options' />
      <PaymentList
        title='Santander'
        iconKeyForAll='santander'
        data={santander}
        hasToggle
        rightText='Open'
      />
      <PaymentList
        title='Other'
        data={otherPayments}
        rightText='Install'
      />
    </div>
  );
};

export default PaymentOptions;
