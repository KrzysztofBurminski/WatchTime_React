import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addShowToDB, removeShowFromDB } from '../../store/shows-actions';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from 'firebase/database';

import Button from '../UI/Button';
import * as S from './DetailsElements';
import EpisodesTab from './tabs/EpisodesTab/index';
import OverviewTab from './tabs/OverviewTab/index';
import GalleryTab from './tabs/GalleryTab';
// import YTSearch from 'youtube-api-search';
// import Gallery from './Gallery';

const Details = ({ images, show, seasons, cast, episodesCount }) => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [watchedEpisodesCounter, setWatchedEpisodesCounter] = useState(0);

  const userId = useSelector((state) => state.auth.userId);
  const showsIdList = useSelector((state) => state.shows.showsIdList);

  const dispatch = useDispatch();

  const getWatchCount = (userId, show) => {
    const db = getDatabase();
    let watchedCount = 0;

    const watchedCountRef = ref(db, `users/${userId}/${show.id}`);
    onValue(watchedCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        watchedCount = parseInt(data.watchedCount);
        setWatchedEpisodesCounter(watchedCount);
      }
    });
  };

  useEffect(() => {
    getWatchCount(userId, show);
  }, [userId, show]);

  let followButton = showsIdList.includes(show.id) ? (
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
          watchedEpisodesCounter={watchedEpisodesCounter}
          episodesCount={episodesCount}
        />
      )}
      {activeTab === 'gallery' && <GalleryTab images={images.allImages} />}
    </>
  );
};

export default Details;

//
//
//
// const [trailerUrl, setTrailerUrl] = useState('');

// let showTitle = show.title;

// const videoSearch = (term) => {
//   YTSearch(
//     {
//       key: 'AIzaSyBE3B6foIzG9b-XbIXea1lJOnril6n2dLM',
//       term: `${term} trailer`,
//     },
//     (videos) => {
//       // console.log(videos[0].id.videoId);
//       setTrailerUrl(`https://www.youtube.com/embed/${videos[0].id.videoId}`);
//     }
//   );
// };

// useEffect(() => {
//   if (showTitle) {
//     videoSearch(showTitle);
//   }
// }, [showTitle]);

/* <S.Trailer
          src={trailerUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        /> */
