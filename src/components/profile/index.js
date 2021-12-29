import React from 'react';
import { ButtonLink } from '../UI/Button';
import * as S from './ProfileStyled';

const Profile = () => {
  return (
    <>
      {/* <S.Hero>
        <S.HeroImg />
      </S.Hero> */}
      <S.Container>
        <S.CenteredColumn>
          <S.WelcomeText>Welcome in WatchTime.</S.WelcomeText>
          <S.WelcomeTextSmall>
            Since now you can start following your shows.
          </S.WelcomeTextSmall>
          <ButtonLink to="/choosing">ADD SHOWS</ButtonLink>
        </S.CenteredColumn>
      </S.Container>
    </>
  );
};

export default Profile;
