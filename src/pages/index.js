import { useState, useEffect } from 'react';

import Home from '../components/home';
import useFetch from '../hooks/use-fetch';
import useRandom from '../hooks/use-random';
import {
  getAllShows,
  getMovieImages,
  getSingleShow,
} from '../lib/external-api';

const HomePage = () => {
  const [randomId, setRandomId] = useState(useRandom());
  // const [randomId, setRandomId] = useState(390);
  // const [randomId, setRandomId] = useState(85);

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
  } = useFetch(getMovieImages, true);

  const {
    sendRequest: getSingleShowRequest,
    data: showData,
    error: showError,
    status: showStatus,
  } = useFetch(getSingleShow, true);

  useEffect(() => {
    // console.log('useEffect random ' + randomId);
    getAllShowsRequest();
    getImageRequest(randomId);
    getSingleShowRequest(randomId);
    if (showError || imgError) {
      // console.log('error detected!');
      let random = Math.floor(Math.random() * 400 + 1);
      setRandomId(random);
    }
  }, [
    getAllShowsRequest,
    getImageRequest,
    getSingleShowRequest,
    randomId,
    showError,
    imgError,
  ]);

  return (
    <>
      {(imgStatus === 'pending' || showStatus === 'pending') && <p>Loading</p>}
      {imgError && <b>img error: {imgError}</b>}
      {showError && <b>show error: {showError}</b>}
      {showsError && <b>shows error: {showsError}</b>}

      {homeImg &&
        homeImg.backgroundImg &&
        !imgError &&
        !showError &&
        !showsError &&
        imgStatus === 'completed' &&
        showStatus === 'completed' &&
        showsStatus === 'completed' && (
          <Home
            heroImg={homeImg.backgroundImg}
            heroDesc={showData}
            shows={loadedShows}
          />
        )}
    </>
  );
};

export default HomePage;
