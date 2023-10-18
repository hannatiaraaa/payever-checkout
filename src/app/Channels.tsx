import React from 'react';
import Container from '@/components/containers/Container';
import Channels from '@/features/Channels';

const ChannelsPage = () => {
  return (
    <Container activeNav='Channels'>
      <div className='grid place-items-center px-7 py-5'>
        <Channels />
      </div>
    </Container>
  );
};

export default ChannelsPage;
