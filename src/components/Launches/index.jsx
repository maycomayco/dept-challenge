/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import { Input, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { uuid } from '../../helpers';
import getTransformedData from '../../services/spacex';
import Launch from '../Launch';
import LaunchDetailModal from '../LaunchDetailModal';

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalLaunch, setModalLaunch] = useState(null);
  const [textSearch, settextSearch] = useState('');
  const inputSearchRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // export to a custom hook
    setLoading(true);
    getTransformedData().then((data) => {
      setLaunches(data);
      setLoading(false);
    });
  }, []);

  const handleOnChange = () => settextSearch(inputSearchRef.current.value);

  return (
    <>
      {loading && <h1>Loading</h1>}

      {!loading && <Input type="text" name="search" placeholder="Search for a launch" ref={inputSearchRef} onChange={handleOnChange} />}
      {!textSearch
        ? launches?.map((launch) => (
          <div key={uuid()}>
            <Launch key={uuid()} launch={launch} onOpen={onOpen} setModalLaunch={setModalLaunch} />
          </div>
        ))
        : (
          <>
            <Text size="lg">Filtered results</Text>
            {launches.filter((launch) => launch.mission_name.toLowerCase().includes(textSearch.toLowerCase())).map((launch) => (
              <div key={uuid()}>
                <Launch key={uuid()} launch={launch} onOpen={onOpen} setModalLaunch={setModalLaunch} />
              </div>
            ))}
          </>
        )}
      {modalLaunch && <LaunchDetailModal isOpen={isOpen} onClose={onClose} launch={modalLaunch} />}

    </>
  );
};
export default Launches;
