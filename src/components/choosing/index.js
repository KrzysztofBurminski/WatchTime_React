import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShowToDB, removeShowFromDB } from '../../store/shows-actions';

import * as S from './ChoosingStyled';
import { ButtonLink } from '../UI/Button';
import { BsCheckCircle } from 'react-icons/bs';

const Choosing = ({ shows }) => {
  const dispatch = useDispatch();
  let userId = useSelector((state) => state.auth.userId);

  let showsList = useSelector((state) => state.shows.showsList);
  let showsIdList = useSelector((state) => state.shows.showsIdList);
  console.log(showsList);

  let bestRatedShows = shows.filter((show) => show.rating > 8.3);

  const pickShowHandler = (show) => {
    if (!showsIdList.includes(show.id)) {
      dispatch(addShowToDB(userId, show));
    } else {
      dispatch(removeShowFromDB(userId, show));
    }
  };

  return (
    <S.Container>
      <S.ColText>
        <h2>Hi Maciek!</h2>
        <h3>Choose 3 TV shows you want to watch or have liked</h3>
        <p>It will help us find TV shows you'll love!</p>
        {showsList.length > 2 && (
          <ButtonLink to="/profile">Continue</ButtonLink>
        )}
      </S.ColText>
      <S.ColShows>
        {bestRatedShows.map((show) => (
          <S.Item key={show.id} src={show.image}>
            <S.Image src={show.image} onClick={() => pickShowHandler(show)}>
              <S.Hoverable picked={showsIdList.includes(show.id)}>
                <BsCheckCircle />
              </S.Hoverable>
            </S.Image>
          </S.Item>
        ))}
      </S.ColShows>
    </S.Container>
  );
};

export default Choosing;
