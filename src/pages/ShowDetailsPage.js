import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/details';

import useFetch from '../hooks/use-fetch';
import { getSingleShow, getMovieImage, getSeasons } from '../lib/external-api';

const ShowDetailsPage = () => {
  const params = useParams();
  const { showId } = params;

  const {
    sendRequest: getSingleShowRequest,
    data: showData,
    error: showError,
    status: showStatus,
  } = useFetch(getSingleShow, showId);

  const {
    sendRequest: getImageRequest,
    data: homeImg,
    error: imgError,
    status: imgStatus,
  } = useFetch(getMovieImage, showId);

  const {
    sendRequest: getSeasonsRequest,
    data: seasons,
    error: seasonsError,
    status: seasonsStatus,
  } = useFetch(getSeasons, showId);

  useEffect(() => {
    getImageRequest(showId);
    getSingleShowRequest(showId);
    getSeasonsRequest(showId);
  }, [getImageRequest, getSingleShowRequest, getSeasonsRequest, showId]);

  return (
    <>
      {(imgStatus === 'pending' || showStatus === 'pending') && <p>Loading</p>}
      {imgError && <b>{imgError}</b>}
      {showError && <b>{showError}</b>}
      {seasonsError && <b>{seasonsError}</b>}

      {imgStatus === 'completed' &&
        showStatus === 'completed' &&
        seasonsStatus === 'completed' &&
        !imgError &&
        !showError &&
        !seasonsError &&
        homeImg && (
          <Details heroImg={homeImg} show={showData} seasons={seasons} />
        )}
    </>
  );
};

export default ShowDetailsPage;
