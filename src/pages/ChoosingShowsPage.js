import React, { useEffect } from 'react';
import { getAllShows } from '../lib/external-api';
import useFetch from '../hooks/use-fetch';

import Choosing from '../components/Choosing';
import Spinner from '../components/UI/Spinner';

const ChoosingShowsPage = () => {
  const {
    sendRequest: getAllShowsRequest,
    data: loadedShows,
    error: showsError,
    status: showsStatus,
  } = useFetch(getAllShows, true);

  useEffect(() => {
    getAllShowsRequest();
  }, [getAllShowsRequest]);

  return (
    <>
      {showsStatus === 'pending' && <Spinner />}
      {showsError && <b>shows error: {showsError}</b>}
      {!showsError && showsStatus === 'completed' && (
        <Choosing shows={loadedShows} />
      )}
    </>
  );
};

export default ChoosingShowsPage;
