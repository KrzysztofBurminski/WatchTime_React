import React from 'react';

import * as S from './Gallery.Styled';

const Gallery = ({ images }) => {
  // const galleryImages
  // console.log(images);
  const galleryImages = images.slice(0, 10);
  // console.log(galleryImages);

  return (
    <S.GallerySection>
      <S.GalleryContainer>
        {galleryImages.map((image) => (
          <S.ItemImg src={image.url} key={image.imgId}></S.ItemImg>
        ))}
        {/* <S.Column>
          <S.ItemImg src={images[0].url} />
          <S.ItemImg src={images[1].url} />
          <S.ItemImg src={images[2].url} />
        </S.Column>
        <S.Column>
          <S.ItemImg src={images[3].url} />
          <S.ItemImg src={images[4].url} />
          <S.ItemImg src={images[5].url} />
        </S.Column>
        <S.Column>
          <S.ItemImg src={images[6].url} />
          <S.ItemImg src={images[7].url} />
          <S.ItemImg src={images[8].url} />
        </S.Column>
        <S.Column>
          <S.ItemImg src={images[9].url} />
          <S.ItemImg src={images[10].url} />
          <S.ItemImg src={images[11].url} />
        </S.Column> */}
      </S.GalleryContainer>
    </S.GallerySection>
  );
};

export default Gallery;
