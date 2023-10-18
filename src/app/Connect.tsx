import React from 'react';
import Container from '@/components/containers/Container';
import Connect from '@/features/Connect';

const ConnectPage = () => {
  return (
    <Container activeNav='Connect'>
      <div className='grid place-items-center px-7 py-5'>
        <Connect />
      </div>
    </Container>
  );
};

export default ConnectPage;
