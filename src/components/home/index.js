import React from 'react';

import * as S from './HomeElements';
import Hero from './Hero';
import MySlider from '../Slider';
import Space from '../UI/Space';

const Home = ({ heroImg, heroDesc, shows }) => {
  // console.log(heroDesc);

  // console.log(shows);
  let allShows = shows.slice(70, 80);
  let popularShows = shows.filter((show) => show.popularity > 97);
  let bestRatedShows = shows.filter((show) => show.rating > 8.5);
  // let actionShows = shows.filter((show) => show.genres.includes('Action'));
  // let dramaShows = shows.filter((show) => show.genres.includes('Drama'));
  let comedyShows = shows.filter((show) => show.genres.includes('Comedy'));
  let familyShows = shows.filter((show) => show.genres.includes('Family'));
  let mysteryShows = shows.filter((show) => show.genres.includes('Mystery'));

  return (
    <>
      <Hero heroImg={heroImg} heroDesc={heroDesc} />
      <S.Container>
        <MySlider items={allShows} header="Shows of the day" infinite={true} />
        <MySlider items={popularShows} header="Most popular" infinite={true} />
      </S.Container>
      <S.HeaderTrailers>TRAILERS</S.HeaderTrailers>
      <S.ContainerTrailers>
        <S.TrailerDiv>
          <S.Trailer
            src="https://www.youtube.com/embed/ZYzbalQ6Lg8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </S.TrailerDiv>
        <S.TrailerDiv>
          <S.Trailer
            src="https://www.youtube.com/embed/oqxAJKy0ii4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </S.TrailerDiv>
        <S.TrailerDiv>
          <S.Trailer
            src="https://www.youtube.com/embed/mqqft2x_Aa4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </S.TrailerDiv>
      </S.ContainerTrailers>
      <S.Container>
        <MySlider items={comedyShows} header="Comedy Shows" infinite={true} />
        <MySlider items={bestRatedShows} header="Best rated" infinite={true} />
      </S.Container>
      <S.HeaderRecommended>RECOMMENDED</S.HeaderRecommended>
      <S.ContainerRecommended>
        <S.RecommendedImg
          side="left"
          src="https://static.tvmaze.com/uploads/images/original_untouched/72/180098.jpg"
        >
          <S.RecommendedTextContainer side="left">
            <S.RecommendedText>The Flash</S.RecommendedText>
          </S.RecommendedTextContainer>
        </S.RecommendedImg>
        <S.RecommendedImg
          side="right"
          src="https://static.tvmaze.com/uploads/images/original_untouched/219/547788.jpg"
        >
          <S.RecommendedTextContainer side="right">
            <S.RecommendedText>Sherlock</S.RecommendedText>
          </S.RecommendedTextContainer>
        </S.RecommendedImg>
      </S.ContainerRecommended>
      <S.Container>
        <MySlider
          items={familyShows}
          header="Family friendly"
          infinite={true}
        />
        <MySlider items={mysteryShows} header="Mystery Shows" infinite={true} />
      </S.Container>
      <Space height="5rem" />
    </>
  );
};

export default Home;

// 216
// https://static.tvmaze.com/uploads/images/original_untouched/90/225679.jpg

// 13
// https://static.tvmaze.com/uploads/images/original_untouched/113/284155.jpg

// 305
// https://static.tvmaze.com/uploads/images/original_untouched/202/505185.jpg

// 335
// https://static.tvmaze.com/uploads/images/original_untouched/219/547788.jpg

// https://static.tvmaze.com/uploads/images/original_untouched/315/787548.jpg
