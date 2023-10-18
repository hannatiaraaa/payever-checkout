import React, { useState } from 'react';
import Container from '@/components/containers/Container';
import Bikezilla from '@/features/Bikezilla';
import GetStartedModal from '@/components/modals/GetStartedModal';
import { closeModalAnimation } from '@/animations/components/modal.animation';

const BikezillaPage = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    closeModalAnimation('#get-started-modal', () => setShowModal(false));
  };

  return (
    <>
      <Container activeNav='Bikezilla'>
        <Bikezilla />
      </Container>
      <GetStartedModal
        id='get-started-modal'
        isOpen={showModal}
        onGetStartedClick={closeModal}
      />
    </>
  );
};

export default BikezillaPage;
