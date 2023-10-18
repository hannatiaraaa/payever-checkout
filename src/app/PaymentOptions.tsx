import React from 'react';
import Container from '@/components/containers/Container';
import PaymentOptions from '@/features/PaymentOptions';

const PaymentOptionsPage = () => {
  return (
    <Container activeNav='Payment Options'>
      <div className='grid place-items-center px-7 py-5'>
        <PaymentOptions />
      </div>
    </Container>
  );
};

export default PaymentOptionsPage;
