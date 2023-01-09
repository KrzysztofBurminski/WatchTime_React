import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addShowToDB,
  addToFavourite,
  removeShowFromDB,
  removeShowFromFav,
} from '../../store/shows-actions';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useHistory } from 'react-router-dom';

import Button from '../UI/Button';
import * as S from './DetailsElements';
import EpisodesTab from './tabs/EpisodesTab/index';
import OverviewTab from './tabs/OverviewTab/index';
import GalleryTab from './tabs/GalleryTab';

const Details = ({ images, show, seasons, cast, episodesCount }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [watchedEpisodesCounter, setWatchedEpisodesCounter] = useState(0);

  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.userId);
  const showsIdList = useSelector((state) => state.shows.showsIdList);
  const favShowsIdList = useSelector((state) => state.shows.favShowsIdList);

  const dispatch = useDispatch();
  const history = useHistory();

  const getWatchCount = (userId, show) => {
    const db = getDatabase();
    let watchedCount = 0;

    const watchedCountRef = ref(db, `users/${userId}/followed/${show.id}`);
    onValue(watchedCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        watchedCount = parseInt(data.watchedCount);
        setWatchedEpisodesCounter(watchedCount);
      }
    });
  };

  useEffect(() => {
    if (isLogged) {
      getWatchCount(userId, show);
    }
  }, [userId, show, isLogged]);

  let followButton = !isLogged ? (
    <Button
      onClick={() => {
        history.push('/auth');
      }}
    >
      Add to list
    </Button>
  ) : showsIdList.includes(show.id) ? (
    <Button
      onClick={() => {
        dispatch(removeShowFromDB(userId, show));
      }}
    >
      Unfollow
    </Button>
  ) : (
    <Button
      onClick={() => {
        dispatch(addShowToDB(userId, show));
      }}
    >
      Add to list
    </Button>
  );

  const favouriteClickHandler = () => {
    if (!favShowsIdList.includes(show.id)) {
      dispatch(addToFavourite(userId, show));
    } else {
      dispatch(removeShowFromFav(userId, show));
    }
  };

  const tabClickHandler = (tabName) => {
    setActiveTab(tabName);
  };

  let percentageWatched = (
    (watchedEpisodesCounter / episodesCount) *
    100
  ).toFixed(2);

  return (
    <>
      <S.HeroContainer>
        <S.HeroImg src={images.backgroundImg.url}></S.HeroImg>
        <S.HeroShadow>
          <S.TextContainer>
            <S.HeroTitle>{show.title}</S.HeroTitle>
            <S.Row>
              <S.RowText>{seasons.length} seasons</S.RowText>
              <S.RowText>|</S.RowText>
              <S.RowText>{show.status}</S.RowText>
            </S.Row>
            {followButton}
          </S.TextContainer>
        </S.HeroShadow>
      </S.HeroContainer>
      {isLogged && showsIdList.includes(show.id) && (
        <S.Circle>
          <S.FavIcon
            onClick={favouriteClickHandler}
            fav={favShowsIdList.includes(show.id) ? 'true' : 'false'}
          />
        </S.Circle>
      )}
      {/*  */}
      {/* MAIN CONTENT */}
      {/*  */}
      {userId !== null && showsIdList.includes(show.id) ? (
        <S.ProgressDiv>
          <S.ProgressBar percent={percentageWatched} />
        </S.ProgressDiv>
      ) : (
        <S.BlankSpace />
      )}

      <S.TabsDiv>
        <S.TabList>
          <S.TabItem
            active={activeTab === 'overview' ? true : false}
            onClick={() => tabClickHandler('overview')}
          >
            Overview
          </S.TabItem>
          <S.TabItem
            active={activeTab === 'episodes' ? true : false}
            onClick={() => tabClickHandler('episodes')}
          >
            Episodes
          </S.TabItem>
          <S.TabItem
            active={activeTab === 'gallery' ? true : false}
            onClick={() => tabClickHandler('gallery')}
          >
            Gallery
          </S.TabItem>
        </S.TabList>
      </S.TabsDiv>
      {activeTab === 'overview' && (
        <OverviewTab cast={cast} seasons={seasons} show={show} />
      )}
      {activeTab === 'episodes' && (
        <EpisodesTab
          seasons={seasons}
          show={show}
          followed={showsIdList.includes(show.id)}
        />
      )}
      {activeTab === 'gallery' && (
        <GalleryTab show={show} images={images.allImages} />
      )}
    </>
  );
};

export default Details;
