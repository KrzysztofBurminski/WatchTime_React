import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { addEpisodeToDB } from '../../store/shows-actions';
import { useSelector } from 'react-redux';
import * as S from './EpisodesStyled';

const Episodes = ({ seasons, show }) => {
  const [pickedSeason, setPickedSeason] = useState(1);
  const [seasonsOpen, setSeasonsOpen] = useState(false);
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);

  let userId = useSelector((state) => state.auth.userId);

  const toggleSeasons = () => setSeasonsOpen(!seasonsOpen);
  const changeSeasonHandler = (newSeason) => {
    setPickedSeason(newSeason);
    setSeasonsOpen(false);
  };

  const getWatchedEpisodes = (userId, show, season) => {
    const db = getDatabase();
    const seasonRef = ref(db, `users/${userId}/${show.id}/seasons/${season}/`);
    onValue(seasonRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const convertedData = Object.values(data);
        const idList = [];
        convertedData.forEach((episode) => {
          idList.push(episode.id);
        });
        setWatchedEpisodes(idList);
      }
    });
  };

  const setEpisodeHandler = (userId, show, episode) => {
    if (!watchedEpisodes.includes(episode.id)) {
      console.log('add');
      addEpisodeToDB(userId, show, episode);
      let tempWatchedEpisodes = [...watchedEpisodes];
      tempWatchedEpisodes.push(episode.id);
      setWatchedEpisodes(tempWatchedEpisodes);
      console.log(watchedEpisodes);
    } else {
      console.log('Not add');
    }
  };

  useEffect(() => {
    getWatchedEpisodes(userId, show, pickedSeason);
  }, [pickedSeason, userId, show]);
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
            <S.EpisodeImg
              onClick={() => setEpisodeHandler(userId, show, episode)}
            >
              <S.Image src={episode.images.original || ''} />
              <S.Hoverable picked={watchedEpisodes.includes(episode.id)}>
                <S.CheckIcon />
              </S.Hoverable>
            </S.EpisodeImg>
            <S.Row>
              <S.Number>
                s{pickedSeason}e{episode.episode}
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
