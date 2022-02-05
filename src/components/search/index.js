import React from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../store/search-slice';

import * as S from './SeachStyled';

const Search = ({ searchData, query }) => {
  const dispatch = useDispatch();
  let slicedQuery = query.slice(3);

  return (
    <S.SearchWrapper>
      <S.QueryHeader>Results for: {slicedQuery}</S.QueryHeader>
      <S.ShowsGrid>
        {searchData &&
          searchData.map((show) => (
            <S.ShowItem
              key={show.id}
              to={`/shows/${show.id}`}
              onClick={() => {
                dispatch(searchActions.hide());
              }}
            >
              <S.ShowImage src={show.image} />
              <S.ShowTitle>{show.title}</S.ShowTitle>
            </S.ShowItem>
          ))}
      </S.ShowsGrid>
    </S.SearchWrapper>
  );
};

export default Search;
