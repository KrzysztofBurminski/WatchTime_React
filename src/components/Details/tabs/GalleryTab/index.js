import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as S from './GalleryTabStyled.jsx';

const galleryVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const GalleryTab = ({ show, images }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const posters = images.filter((img) => img.type === 'poster');
  const backgrounds = images.filter((img) => img.type === 'background');

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.25 });

  const initial = { opacity: 0, scale: 0.95 };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [inView, animation]);

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
          {posters.map((image, index) => (
            <S.ItemImg
              src={image.url}
              key={image.imgId}
              variants={galleryVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index / 7 + 0.8 }}
            />
          ))}
        </S.PosterImagesGrid>
        <S.HeaderImages>Backgrounds</S.HeaderImages>
        <S.BackgroundImagesGrid ref={ref}>
          {backgrounds.map((image, index) => (
            <S.ItemImg
              src={image.url}
              key={image.imgId}
              initial={initial}
              animate={animation}
              transition={{ duration: 0.3, delay: index / 7 }}
            />
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
