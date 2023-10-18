import React from 'react';
import Container from '@/components/containers/Container';
import Settings from '@/features/Settings';

const SettingsPage = () => {
  return (
    <Container activeNav='Settings'>
      <div className='grid place-items-center px-7 py-5'>
        <Settings />
      </div>
    </Container>
  );
};

export default SettingsPage;
