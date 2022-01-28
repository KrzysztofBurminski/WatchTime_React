import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/use-fetch';
import { getMovieImages } from '../lib/external-api';
import { getDatabase, ref, onValue } from 'firebase/database';

import Profile from '../components/profile';
import { ButtonLink } from '../components/UI/Button';
import { Center, Container } from '../components/globalComponents';

const ProfilePage = ({ userId }) => {
  const showsList = useSelector((state) => state.shows.showsList);
  const favShowsList = useSelector((state) => state.shows.favShowsList);
  const userImg = useSelector((state) => state.auth.userImg);
  const userName = useSelector((state) => state.auth.userName);

  const {
    sendRequest: getImageRequest,
    data: heroImg,
    error: imgError,
    status: imgStatus,
  } = useFetch(getMovieImages, false);

  useEffect(() => {
    if (showsList.length > 0) {
      const randomId = Math.floor(Math.random() * showsList.length);
      getImageRequest(showsList[randomId].id);
      if (imgError) {
        console.log('Image error! No background image found!');
      }
    }
  }, [getImageRequest, showsList, imgError]);

  let noShowsContent = (
    <Container>
      <Center>
        <h3>It looks like you are not following any shows.</h3>
        <h4>Add some shows to your list.</h4>
        <ButtonLink to={'/choosing'}>ADD SHOWS</ButtonLink>
      </Center>
    </Container>
  );

  const getWatchCount = (userId, show) => {
    const db = getDatabase();
    let watchedCount = 0;
    let runtime = 0;
    let timeSpent = 0;

    const watchedCountRef = ref(db, `users/${userId}/followed/${show.id}`);
    onValue(watchedCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        watchedCount = parseInt(data.watchedCount);
        runtime = parseInt(data.runtime);
        timeSpent = runtime * watchedCount;
      }
    });
    return { watchedCount, timeSpent };
  };

  let statisticsEpisodesCount = 0;
  let statisticsTimeSpent = 0;
  let statistics = { watchedCount: 0, timeSpent: 0 };

  if (showsList.length > 0) {
    showsList.forEach((show) => {
      statistics = getWatchCount(userId, show);
      statisticsEpisodesCount += statistics.watchedCount;
      statisticsTimeSpent += statistics.timeSpent;
    });
  }

  return (
    <>
      {imgStatus === null && noShowsContent}
      {imgStatus === 'pending' && !imgError && <p>Loading...</p>}
      {heroImg && !imgError && imgStatus === 'completed' && (
        <Profile
          showsList={showsList}
          favShowsList={favShowsList}
          heroImg={heroImg.backgroundImg.url}
          userImg={userImg}
          userName={userName}
          statistics={{
            episodes: statisticsEpisodesCount,
            timeSpent: statisticsTimeSpent,
          }}
        />
      )}
    </>
  );
};

export default ProfilePage;
