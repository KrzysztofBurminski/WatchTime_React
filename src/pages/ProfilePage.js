import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/use-fetch';
import { getMovieImages } from '../lib/external-api';

import Profile from '../components/profile';
import { ButtonLink } from '../components/UI/Button';
import { Center, Container } from '../components/globalComponents';

const ProfilePage = () => {
  const showsList = useSelector((state) => state.shows.showsList);
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

  return (
    <>
      {imgStatus === null && noShowsContent}
      {imgStatus === 'pending' && !imgError && <p>Loading...</p>}
      {heroImg && !imgError && imgStatus === 'completed' && (
        <Profile
          showsList={showsList}
          heroImg={heroImg.backgroundImg.url}
          userImg={userImg}
          userName={userName}
        />
      )}
    </>
  );
};

export default ProfilePage;
