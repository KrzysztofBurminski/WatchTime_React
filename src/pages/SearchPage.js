import React, { useEffect } from 'react';
import { getSearchResult } from '../lib/external-api';
import useFetch from '../hooks/use-fetch';
import { useLocation } from 'react-router-dom';

import Search from '../components/Search';
import Spinner from '../components/UI/Spinner';

const SearchPage = () => {
  const location = useLocation();
  let searchQuery = location.search;

  const {
    sendRequest: searchRequest,
    data: searchData,
    error: searchError,
    status: searchStatus,
  } = useFetch(getSearchResult, true);

  useEffect(() => {
    searchRequest(searchQuery);
  }, [searchRequest, searchQuery]);

  return (
    <>
      {searchError && <h5>{searchError}</h5>}
      {searchStatus === 'pending' && <Spinner />}
      {searchStatus === 'completed' && !searchData && !searchError && (
        <h5>No results matched</h5>
      )}
      {searchData && <Search searchData={searchData} query={searchQuery} />}
    </>
  );
};

export default SearchPage;
