/* eslint-disable linebreak-style */
const API_BASE_URL = 'https://api.spacexdata.com/v3';

const getLaunches = async () => {
  const response = await fetch(`${API_BASE_URL}/launches`);
  const data = await response.json();

  return data;
};

const getRockets = async () => {
  const response = await fetch(`${API_BASE_URL}/rockets`);
  const data = await response.json();

  return data;
};

const getTransformedData = async () => {
  const launches = await getLaunches();
  const rockets = await getRockets();

  const transformedData = launches.map((launch) => {
    const rocketFound = rockets.find((rocket) => rocket.rocket_id === launch.rocket.rocket_id);

    return {
      ...launch,
      rocket: rocketFound,
    };
  });

  return transformedData;
};

export default getTransformedData;
