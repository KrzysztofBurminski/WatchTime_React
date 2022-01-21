import React from 'react';
import * as S from './OverviewTabStyled';
import MySlider from '../../../Slider';
import Space from '../../../UI/Space';

const OverviewTab = ({ show, seasons, cast }) => {
  const actors = cast.map((person) => {
    return {
      id: person.id,
      image: person.actorImage,
      name: person.actorName,
      played: person.characterName,
    };
  });

  const characters = cast.map((person) => {
    return {
      id: person.id,
      image: person.characterImage,
      name: person.characterName,
      // played: person.actorName,
    };
  });

  let convertedDesc = document
    .createRange()
    .createContextualFragment(show.description).firstChild.innerText;
  return (
    <S.Section>
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
      <S.ContainerSlider>
        <Space height="2rem" />
        <MySlider
          infinite={false}
          items={characters}
          circle={true}
          header={`Characters from ${show.title}`}
          clickable="true"
        />
      </S.ContainerSlider>
      <S.ContainerSlider>
        <Space height="1rem" />
        <MySlider
          infinite={false}
          items={actors}
          header="Cast"
          clickable="true"
        />
      </S.ContainerSlider>
    </S.Section>
  );
};

export default OverviewTab;
