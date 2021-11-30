import React, { useState } from 'react';
import * as S from './EpisodesStyled';

const Episodes = ({ seasons }) => {
  const [pickedSeason, setPickedSeason] = useState('1');
  const [seasonsOpen, setSeasonsOpen] = useState(false);

  const toggleSeasons = () => setSeasonsOpen(!seasonsOpen);
  const changeSeasonHandler = (newSeason) => {
    setPickedSeason(newSeason);
    setSeasonsOpen(false);
  };

  return (
    <S.Section>
      <S.ContainerDropdown>
        <S.DropdownSeason onClick={toggleSeasons}>
          <S.DropdownHeader>Season {pickedSeason}</S.DropdownHeader>
          <S.IconDown />
        </S.DropdownSeason>
        {seasonsOpen && (
          <S.DropdownList>
            {seasons.map((season, index) => (
              <S.ListItem
                onClick={() => changeSeasonHandler(index + 1)}
                key={index}
              >
                Season {index + 1}
              </S.ListItem>
            ))}
          </S.DropdownList>
        )}
      </S.ContainerDropdown>
      <S.ContainerEpisodes direction="row">
        {seasons[pickedSeason - 1].map((episode) => (
          <S.Episode key={episode.id}>
            <S.EpisodeImg>
              <S.Image src={episode.images.original} />
            </S.EpisodeImg>
            <S.Row>
              <S.Number>
                S{pickedSeason} E{episode.episode}
              </S.Number>
              <S.Title>{episode.title}</S.Title>
            </S.Row>
            <S.Description>{episode.desc}...</S.Description>
            <S.Premiered>{episode.premiered}</S.Premiered>
          </S.Episode>
        ))}
      </S.ContainerEpisodes>
    </S.Section>
  );
};

export default Episodes;
