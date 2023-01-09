import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProfileSlider from '../Slider/ProfileSlider';
import * as S from './ProfileStyled';

const Profile = ({
  showsList,
  favShowsList,
  userImg,
  userName,
  statistics,
}) => {
  let spentTime = '0min';
  let hours = Math.floor(statistics.timeSpent / 60);
  let minutes = statistics.timeSpent % 60;
  spentTime = `${hours}h ${minutes}min`;

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const initial = { opacity: 0, y: 30 };

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <S.Hero>
        <S.HeroImg>
          <S.PersonSection>
            <S.ProfilePicture src={userImg} />
            <S.ProfileName>{userName}</S.ProfileName>
          </S.PersonSection>
          <S.Statistics>
            <S.StatisticsCard>
              <S.StatisticsHeader>Watched episodes</S.StatisticsHeader>
              <S.StatisticsContent>{statistics.episodes}</S.StatisticsContent>
            </S.StatisticsCard>
            <S.StatisticsCard>
              <S.StatisticsHeader>Time spent on watching:</S.StatisticsHeader>
              <S.StatisticsContent>{spentTime}</S.StatisticsContent>
            </S.StatisticsCard>
          </S.Statistics>
        </S.HeroImg>
      </S.Hero>
      {favShowsList.length !== 0 && (
        <S.FavouriteSection withSlider={favShowsList.length > 3}>
          <S.FavHeader withSlider={favShowsList.length > 3}>
            My Favorite Shows
          </S.FavHeader>
          {favShowsList.length <= 3 &&
            favShowsList.map((show) => (
              <S.FavShow key={show.id} to={`/shows/${show.id}`}>
                <S.FavShowImg src={show.image} />
              </S.FavShow>
            ))}
          {favShowsList.length > 3 && <ProfileSlider items={favShowsList} />}
        </S.FavouriteSection>
      )}
      <S.ShowsSection>
        <S.ShowsHeader>Followed shows</S.ShowsHeader>
        <S.ShowsGrid ref={ref}>
          {showsList.map((show, index) => (
            <S.ShowItem key={show.id} to={`/shows/${show.id}`}>
              <S.ShowImage
                src={show.image}
                initial={initial}
                animate={animation}
                transition={{ duration: 0.3, delay: index / 10 }}
              />
            </S.ShowItem>
          ))}
        </S.ShowsGrid>
      </S.ShowsSection>
    </>
  );
};

export default Profile;
