import { useState, useEffect } from 'react';

import Home from '../components/home';
import useFetch from '../hooks/use-fetch';
import useRandom from '../hooks/use-random';
import { getAllShows, getMovieImage, getSingleShow } from '../lib/external-api';

const HomePage = (props) => {
  const [randomId] = useState(useRandom());

  const {
    sendRequest: getAllShowsRequest,
    data: loadedShows,
    error: showsError,
    status: showsStatus,
  } = useFetch(getAllShows, true);

  const {
    sendRequest: getImageRequest,
    data: homeImg,
    error: imgError,
    status: imgStatus,
  } = useFetch(getMovieImage, randomId);

  const {
    sendRequest: getSingleShowRequest,
    data: showData,
    error: showError,
    status: showStatus,
  } = useFetch(getSingleShow, randomId);

  useEffect(() => {
    getAllShowsRequest();
    getImageRequest(randomId);
    getSingleShowRequest(randomId);
  }, [getAllShowsRequest, getImageRequest, getSingleShowRequest, randomId]);

  return (
    <>
      {(imgStatus === 'pending' || showStatus === 'pending') && <p>Loading</p>}
      {imgError && <b>{imgError}</b>}
      {showError && <b>{showError}</b>}
      {homeImg &&
        !imgError &&
        !showError &&
        !showsError &&
        imgStatus === 'completed' &&
        showStatus === 'completed' &&
        showsStatus === 'completed' && (
          <Home heroImg={homeImg} heroDesc={showData} shows={loadedShows} />
        )}
    </>
  );
};

export default HomePage;
