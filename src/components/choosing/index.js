import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShowToDB, removeShowFromDB } from '../../store/shows-actions';

import * as S from './ChoosingStyled';
import { ButtonLink } from '../UI/Button';
import { BsCheckCircle } from 'react-icons/bs';

const Choosing = ({ shows }) => {
  // console.log(shows);
  const dispatch = useDispatch();
  let userId = useSelector((state) => state.auth.userId);
  let userName = useSelector((state) => state.auth.userName);

  let showsList = useSelector((state) => state.shows.showsList);
  let showsIdList = useSelector((state) => state.shows.showsIdList);
  // let bestRatedShows = shows.filter((show) => show.rating > 8.3);
  let bestRatedShows = shows.filter((show) => show.popularity > 98);

  const pickShowHandler = (show) => {
    if (!showsIdList.includes(show.id)) {
      dispatch(addShowToDB(userId, show));
    } else {
      dispatch(removeShowFromDB(userId, show));
    }
  };

  return (
    <S.Container>
      <S.InfoWrapper>
        <S.Fixed>
          <S.ColText>
            <S.Welcome>
              Hi <S.Name>{userName}</S.Name>!
            </S.Welcome>
            <S.InfoBig>
              Choose 3 TV shows you want to watch or have liked
            </S.InfoBig>
            <S.InfoSmall>
              It will help us find TV shows you'll love!
            </S.InfoSmall>
            {showsList.length > 2 && (
              <ButtonLink to="/profile">Continue</ButtonLink>
            )}
          </S.ColText>
        </S.Fixed>
      </S.InfoWrapper>
      <S.ColShows>
        <S.ShowsGrid>
          {bestRatedShows.map((show) => (
            <S.Item
              key={show.id}
              src={show.image}
              onClick={() => pickShowHandler(show)}
            >
              <S.Image src={show.image}></S.Image>
              <S.Hoverable picked={showsIdList.includes(show.id)}>
                <BsCheckCircle />
              </S.Hoverable>
            </S.Item>
          ))}
        </S.ShowsGrid>
      </S.ColShows>
      {/* <S.ColShows>
        <S.ShowsGrid>
          {bestRatedShows.map((show) => (
            <S.Item key={show.id} src={show.image}>
              <S.Image src={show.image} onClick={() => pickShowHandler(show)}>
                <S.Hoverable picked={showsIdList.includes(show.id)}>
                  <BsCheckCircle />
                </S.Hoverable>
              </S.Image>
            </S.Item>
          ))}
        </S.ShowsGrid>
      </S.ColShows> */}
    </S.Container>
  );
};

export default Choosing;
