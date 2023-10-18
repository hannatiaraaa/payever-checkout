import React, { useState } from 'react';
import Container from '@/components/containers/Container';
import Bikezilla from '@/features/Bikezilla';
import GetStartedModal from '@/components/GetStartedModal';

const BikezillaPage = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Container activeNav='Bikezilla'>
        <Bikezilla />
      </Container>
      <GetStartedModal
        isOpen={showModal}
        setIsOpen={setShowModal}
      />
    </>
  );
};

export default BikezillaPage;
