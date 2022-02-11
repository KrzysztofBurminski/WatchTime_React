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
              <S.Text>{show.averageRuntime}min</S.Text>
            </S.StatsItem>
            <S.StatsItem>
              <S.StatsLabel>Genre</S.StatsLabel>
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
      {characters.length > 0 && (
        <S.ContainerSlider>
          <Space height="2rem" />
          <MySlider
            infinite={false}
            standard={false}
            items={characters}
            small={true}
            clickable={false}
            header={`Characters from ${show.title}`}
          />
        </S.ContainerSlider>
      )}
      {actors.length > 0 && (
        <S.ContainerSlider>
          <Space height="1rem" />
          <MySlider
            infinite={false}
            standard={false}
            items={actors}
            clickable={false}
            header="Cast"
          />
        </S.ContainerSlider>
      )}
    </S.Section>
  );
};

export default OverviewTab;
