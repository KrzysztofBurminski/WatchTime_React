import React from 'react';

import MySlider from '../Slider';
import * as S from './ProfileStyled';

const Profile = ({ showsList, heroImg, userImg, userName }) => {
  return (
    <>
      <S.Hero>
        <S.HeroImg src={heroImg} />
        <S.PersonSection>
          <S.ProfilePicture src={userImg} />
          <S.ProfileName>{userName}</S.ProfileName>
        </S.PersonSection>
      </S.Hero>
      <S.ShowsSection>
        <MySlider items={showsList} header="Followed shows" infinite={false} />
      </S.ShowsSection>
    </>
  );
};

export default Profile;
