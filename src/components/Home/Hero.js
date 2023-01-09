import React from 'react';
import * as S from './HomeHeroElements';
import { ButtonLink } from '../UI/Button';

const Hero = ({ heroImg, heroDesc }) => {
  let convertedDesc = document
    .createRange()
    .createContextualFragment(heroDesc.description)
    .firstChild.innerText.slice(0, 100);

  let rating = heroDesc.rating ? heroDesc.rating.toFixed(1) : '0.0';

  return (
    <S.HeroImg src={heroImg.url}>
      <S.HeroShadow id={heroImg.showId}>
        <S.HeroText>
          <S.HeroTitle>{heroDesc.title}</S.HeroTitle>
          <S.HeroRow>
            <S.HeroGenresList>
              {heroDesc.genres.map((genre, index) => {
                return <S.HeroGenreItem key={index}>{genre}</S.HeroGenreItem>;
              })}
            </S.HeroGenresList>
            <S.HeroRatingDiv>
              <S.HeroRatingText>{rating}</S.HeroRatingText>
            </S.HeroRatingDiv>
          </S.HeroRow>
          <S.HeroDesc>{convertedDesc}...</S.HeroDesc>
          <ButtonLink to={`/shows/${heroDesc.id}`}>Show details</ButtonLink>
        </S.HeroText>
      </S.HeroShadow>
    </S.HeroImg>
  );
};

export default Hero;
