import React, { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import './slider.css';

import * as S from './SliderElements';

const MySlider = (props) => {
  const slider = useRef(null);

  const settings = {
    initialSlide: 0,
    speed: 500,
    dots: false,
    arrows: false,
    centerMode: false,
    infinite: props.infinite ? props.infinite : false,
    variableWidth: props.infinite ? true : false,
    slidesToShow: props.infinite ? 1 : props.small ? 9 : 6,
    slidesToScroll: props.infinite ? 4 : props.small ? 9 : 6,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToScroll: props.infinite ? 4 : props.small ? 8 : 6,
          slidesToShow: props.infinite ? 1 : props.small ? 8 : 6,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToScroll: props.infinite ? 4 : props.small ? 7 : 5,
          slidesToShow: props.infinite ? 1 : props.small ? 7 : 5,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToScroll: props.infinite ? 4 : props.small ? 6 : 5,
          slidesToShow: props.infinite ? 1 : props.small ? 6 : 5,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToScroll: props.infinite ? 3 : props.small ? 6 : 4,
          slidesToShow: props.infinite ? 1 : props.small ? 6 : 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: props.infinite ? 3 : props.small ? 5 : 4,
          slidesToShow: props.infinite ? 1 : props.small ? 5 : 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToScroll: props.infinite ? 3 : props.small ? 5 : 3,
          slidesToShow: props.infinite ? 1 : props.small ? 5 : 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: props.infinite ? 3 : props.small ? 4 : 3,
          slidesToShow: props.infinite ? 1 : props.small ? 4 : 3,
        },
      },

      {
        breakpoint: 374,
        settings: {
          slidesToScroll: props.infinite ? 2 : props.small ? 4 : 3,
          slidesToShow: props.infinite ? 1 : props.small ? 4 : 3,
        },
      },
    ],
  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const initial = { opacity: 0, x: 20 };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <S.HeaderContainer clickable={props.clickable} ref={ref}>
        <S.HeaderSlider>{props.header}</S.HeaderSlider>
      </S.HeaderContainer>
      <S.SliderContainer
        ref={ref}
        standard={props.standard}
        small={props.small}
        length={props.items.length}
      >
        <S.ArrowButton
          onClick={() => slider?.current?.slickPrev()}
          length={props.items.length}
          isSmall={props.small}
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
          className={
            props.items.length > 2
              ? props.profile
                ? ''
                : 'left-align-slick'
              : 'left-align-slick-less'
          }
        >
          {props.clickable
            ? props.items.map((show, index) => (
                <S.MovieItem key={show.id} to={`/shows/${show.id}`}>
                  <S.MovieImage
                    src={show.image}
                    initial={initial}
                    animate={animation}
                    transition={{
                      duration: 0.4,
                      delay: index / 5,
                      ease: 'easeOut',
                    }}
                  />
                </S.MovieItem>
              ))
            : props.items.map((item, index) => (
                <S.SliderItem
                  key={item.id}
                  small={props.small || false}
                  initial={initial}
                  animate={animation}
                  transition={{
                    duration: 0.4,
                    delay: index / 5,
                    ease: 'easeOut',
                  }}
                >
                  <S.Image
                    src={item[Object.keys(item)[1]]}
                    small={props.small || false}
                  />
                  <S.ItemTitle small={props.small || false}>
                    {item[Object.keys(item)[2]]}
                  </S.ItemTitle>
                  <S.ItemParagraph>
                    {item[Object.keys(item)[3]] || ''}
                  </S.ItemParagraph>
                </S.SliderItem>
              ))}
        </Slider>
        <S.ArrowButton
          onClick={() => slider?.current?.slickNext()}
          length={props.items.length}
          isSmall={props.small}
          next
        >
          <S.ArrowNext />
        </S.ArrowButton>
      </S.SliderContainer>
    </>
  );
};

export default MySlider;
