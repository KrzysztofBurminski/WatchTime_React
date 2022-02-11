import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';
import * as S from './GalleryTabStyled.jsx';

const GalleryTab = ({ show, images }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const posters = images.filter((img) => img.type === 'poster');
  const backgrounds = images.filter((img) => img.type === 'background');

  let showTitle = show.title;

  const videoSearch = (term) => {
    YTSearch(
      {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        term: `${term} trailer`,
      },
      (videos) => {
        setTrailerUrl(`https://www.youtube.com/embed/${videos[0].id.videoId}`);
      }
    );
  };

  useEffect(() => {
    if (showTitle) {
      videoSearch(showTitle);
    }
  }, [showTitle]);

  return (
    <S.GallerySection>
      <S.ContainerGallery>
        <S.HeaderImages>Posters</S.HeaderImages>
        <S.PosterImagesGrid>
          {posters.map((image) => (
            <S.ItemImg src={image.url} key={image.imgId}></S.ItemImg>
          ))}
        </S.PosterImagesGrid>
        <S.HeaderImages>Backgrounds</S.HeaderImages>
        <S.BackgroundImagesGrid>
          {backgrounds.map((image) => (
            <S.ItemImg
              src={image.url}
              key={image.imgId}
              loading="lazy"
            ></S.ItemImg>
          ))}
        </S.BackgroundImagesGrid>
        <S.HeaderImages>Trailer</S.HeaderImages>
        <S.WrapperTrailer>
          <S.Trailer
            src={trailerUrl}
            title="YouTube trailer"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </S.WrapperTrailer>
      </S.ContainerGallery>
    </S.GallerySection>
  );
};

export default GalleryTab;
