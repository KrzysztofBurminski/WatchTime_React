import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from 'firebase/database';

import Profile from '../components/Profile';
import { ButtonLink } from '../components/UI/Button';
import { Center, Container } from '../components/globalComponents';
import Spinner from '../components/UI/Spinner';

const ProfilePage = ({ userId }) => {
  const [showing, setShowing] = useState(false);
  const showsList = useSelector((state) => state.shows.showsList);
  const favShowsList = useSelector((state) => state.shows.favShowsList);
  const userImg = useSelector((state) => state.auth.userImg);
  const userName = useSelector((state) => state.auth.userName);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowing(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [showing]);

  return (
    <>
      {!showing && <Spinner />}
      {showsList.length === 0 && showing && (
        <Container>
          <Center>
            <h3>It looks like you are not following any shows.</h3>
            <h4>Add some shows to your list.</h4>
            <ButtonLink to={'/choosing'}>ADD SHOWS</ButtonLink>
          </Center>
        </Container>
      )}
      {showsList.length > 0 && showing && (
        <Profile
          showsList={showsList}
          favShowsList={favShowsList}
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
