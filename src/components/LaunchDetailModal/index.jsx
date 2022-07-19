/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const FAVORITES_LAUNCHES_KEY = 'FAVORITES_LAUNCHES';

const LaunchDetailModal = ({ isOpen, onClose, launch }) => {
  const { mission_name, launch_year, flight_number } = launch;

  const AddToFavorites = () => localStorage.setItem(FAVORITES_LAUNCHES_KEY, JSON.stringify([...JSON.parse(localStorage.getItem(FAVORITES_LAUNCHES_KEY) || '[]'), launch]));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{mission_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ul>
            <li>
              {`Flight number: #${flight_number}`}
            </li>
            <li>
              {`Mission name: ${mission_name}`}
            </li>
            <li>
              {`Launch year: ${launch_year}`}
            </li>
          </ul>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={AddToFavorites}>Add to favorites</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LaunchDetailModal;
