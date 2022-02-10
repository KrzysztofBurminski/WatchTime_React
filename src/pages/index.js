import { useState, useEffect } from 'react';
import useFetch from '../hooks/use-fetch';
import useRandom from '../hooks/use-random';
import {
  getAllShows,
  getMovieImages,
  getSingleShow,
} from '../lib/external-api';

import Home from '../components/Home';
import Spinner from '../components/UI/Spinner';

const HomePage = () => {
  const [randomId, setRandomId] = useState(useRandom());

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
    getAllShowsRequest();
    getImageRequest(randomId);
    getSingleShowRequest(randomId);
    if (showError || imgError) {
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
      {(imgStatus === 'pending' || showStatus === 'pending') && <Spinner />}
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
