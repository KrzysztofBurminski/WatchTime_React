import React, { useRef } from 'react';
import Slider from 'react-slick';
import './slider.css';

import * as S from './ProfileSliderElements.jsx';

const ProfileSlider = (props) => {
  const slider = useRef(null);

  const settings = {
    initialSlide: 0,
    speed: 500,
    dots: false,
    arrows: false,
    centerMode: false,
    infinite: false,
    variableWidth: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToScroll: 6,
          slidesToShow: 6.5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToScroll: 6,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <>
      <S.SliderContainer length={props.items.length}>
        <S.ArrowButton
          onClick={() => slider?.current?.slickPrev()}
          length={props.items.length}
        >
          <S.ArrowPrev />
        </S.ArrowButton>
        <Slider
          ref={slider}
          {...settings}
          style={{
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          className={'no-transform'}
          //   className={
          //     props.items.length > 2
          //       ? props.profile
          //         ? ''
          //         : 'left-align-slick'
          //       : 'left-align-slick-less'
          //   }
        >
          {props.items.map((show) => (
            <S.MovieItem key={show.id} to={`/shows/${show.id}`}>
              <S.MovieImage src={show.image} />
            </S.MovieItem>
          ))}
        </Slider>
        <S.ArrowButton
          onClick={() => slider?.current?.slickNext()}
          length={props.items.length}
          next
        >
          <S.ArrowNext />
        </S.ArrowButton>
      </S.SliderContainer>
    </>
  );
};

export default ProfileSlider;
