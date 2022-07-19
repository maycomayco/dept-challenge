/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Launch = ({ launch, onOpen, setModalLaunch }) => {
  const { flight_number, mission_name } = launch;

  const handleOnClick = () => {
    setModalLaunch(launch);
    onOpen();
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" onClick={() => handleOnClick()}>
      <Heading>
        Launch #
        {flight_number}
      </Heading>
      <Text>{mission_name}</Text>
    </Box>
  );
};

export default Launch;
