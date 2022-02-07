import React from 'react';
import * as S from './GalleryTabStyled.jsx';

const GalleryTab = ({ images }) => {
  const posters = images.filter((img) => img.type === 'poster');
  const backgrounds = images.filter((img) => img.type === 'background');

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
      </S.ContainerGallery>
    </S.GallerySection>
  );
};

export default GalleryTab;
