import React from 'react';
import Slider from 'react-slick';

import * as S from './SliderElements';

const MySlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // swipeToSlide: true,
    // swipeToSlide: false,
    slidesToScroll: 3,
    variableWidth: true,
  };

  return (
    <>
      <S.HeaderSlider>{props.header}</S.HeaderSlider>
      <Slider {...settings}>
        {props.shows.map((show) => (
          <S.MovieItem key={show.id} to={`/shows/${show.id}`}>
            <S.MovieImage src={show.image} />
          </S.MovieItem>
        ))}
      </Slider>
    </>
  );
};

export default MySlider;
