import React from 'react';
import Button from '../UI/Button';
import Space from '../UI/Space';
// import React, { useState, useEffect } from 'react';
// import YTSearch from 'youtube-api-search';
import * as S from './DetailsElements';
// import * as E from './EpisodesStyled';
import Episodes from './Episodes';

const Details = ({ heroImg, show, seasons }) => {
  // console.log(show);

  let convertedDesc = document
    .createRange()
    .createContextualFragment(show.description).firstChild.innerText;

  return (
    <>
      <S.HeroContainer>
        <S.HeroImg src={heroImg.url}></S.HeroImg>
        <S.HeroShadow>
          <S.TextContainer>
            <S.HeroTitle>{show.title}</S.HeroTitle>
            <S.Row>
              <S.RowText>{seasons.length} seasons</S.RowText>
              <S.RowText>|</S.RowText>
              <S.RowText>{show.status}</S.RowText>
            </S.Row>
            <Button
              onClick={() => {
                console.log('Added to list');
              }}
            >
              Add to list
            </Button>
          </S.TextContainer>
        </S.HeroShadow>
      </S.HeroContainer>
      {/*  */}
      {/*  */}
      {/*  */}
      {/* MAIN CONTENT */}
      {/*  */}
      {/*  */}
      {/*  */}
      <Space height="2rem" />
      <S.Container>
        <S.PosterDiv>
          <S.Poster src={show.image} />
        </S.PosterDiv>
        <S.MainInfo>
          <S.TextHeader>Storyline</S.TextHeader>
          <S.Text>{convertedDesc}</S.Text>
          <S.ShowStats>
            <S.StatsItem>
              <S.StatsLabel>Premiered</S.StatsLabel>
              <S.Text>{show.premiered}</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Seasons</S.StatsLabel>
              <S.Text>{seasons.length}</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Runtime</S.StatsLabel>
              <S.Text>{show.averageRuntime}</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Genres</S.StatsLabel>
              <S.Text>{show.genres[0]}</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Rating</S.StatsLabel>
              <S.Text>{show.rating}</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Status</S.StatsLabel>
              <S.Text>{show.status}</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Language</S.StatsLabel>
              <S.Text>{show.language}</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Popularity</S.StatsLabel>
              <S.Text>{show.popularity} out of 100</S.Text>
            </S.StatsItem>
          </S.ShowStats>
        </S.MainInfo>
      </S.Container>
      <Episodes seasons={seasons} />
      <Space height="10rem" />
    </>
  );
};

export default Details;
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
