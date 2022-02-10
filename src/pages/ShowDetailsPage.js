import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/use-fetch';
import {
  getSingleShow,
  getMovieImages,
  getSeasons,
  getCast,
} from '../lib/external-api';

import Details from '../components/details';
import Spinner from '../components/UI/Spinner';

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
    data: images,
    error: imgError,
    status: imgStatus,
  } = useFetch(getMovieImages, showId);

  const {
    sendRequest: getSeasonsRequest,
    data: seasons,
    error: seasonsError,
    status: seasonsStatus,
  } = useFetch(getSeasons, showId);

  const {
    sendRequest: getCastRequest,
    data: cast,
    error: castError,
    status: castStatus,
  } = useFetch(getCast, showId);

  useEffect(() => {
    getImageRequest(showId);
    getSingleShowRequest(showId);
    getSeasonsRequest(showId);
    getCastRequest(showId);
  }, [
    getImageRequest,
    getSingleShowRequest,
    getSeasonsRequest,
    getCastRequest,
    showId,
  ]);

  let episodesCount = 0;
  if (seasons) {
    seasons.forEach((season) => {
      season.forEach((episode) => {
        episodesCount++;
      });
    });
  }

  return (
    <>
      {(imgStatus === 'pending' || showStatus === 'pending') && <Spinner />}
      {imgError && <b>{imgError}</b>}
      {showError && <b>{showError}</b>}
      {seasonsError && <b>{seasonsError}</b>}
      {castError && <b>{castError}</b>}

      {imgStatus === 'completed' &&
        showStatus === 'completed' &&
        seasonsStatus === 'completed' &&
        castStatus === 'completed' &&
        !imgError &&
        !showError &&
        !seasonsError &&
        !castError &&
        images && (
          <Details
            images={images}
            show={showData}
            seasons={seasons}
            cast={cast}
            episodesCount={episodesCount}
          />
        )}
    </>
  );
};

export default ShowDetailsPage;
