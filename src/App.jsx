/* eslint-disable no-unused-vars */
import { Container, Heading } from '@chakra-ui/react';
import Launches from './components/Launches';

function App() {
  return (
    <Container>
      <Heading>SpaceX</Heading>
      <hr />
      <Launches />
    </Container>
  );
}

export default App;
