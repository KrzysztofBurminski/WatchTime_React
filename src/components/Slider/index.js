import React, { useRef } from 'react';
import Slider from 'react-slick';
import { GrNext } from 'react-icons/gr';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import * as S from './SliderElements';

const MySlider = (props) => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: props.infinite ? props.infinite : false,
    speed: 500,
    slidesToScroll: 2,
    variableWidth: true,
    arrows: false,
  };

  return (
    <>
      <S.HeaderSlider clickable={props.infinite}>{props.header}</S.HeaderSlider>
      <S.SliderContainer>
        <S.ArrowButton onClick={() => slider?.current?.slickPrev()}>
          <IoIosArrowBack />
        </S.ArrowButton>
        <Slider ref={slider} {...settings} style={{ width: '90%' }}>
          {props.clickable
            ? props.items.map((item, index) => (
                <S.SliderItem key={item.id} circle={props.circle || false}>
                  <S.Image
                    src={item[Object.keys(item)[1]]}
                    circle={props.circle || false}
                  />
                  <S.ItemTitle circle={props.circle || false}>
                    {item[Object.keys(item)[2]]}
                  </S.ItemTitle>
                  <S.ItemParagraph>
                    {item[Object.keys(item)[3]] || ''}
                  </S.ItemParagraph>
                </S.SliderItem>
              ))
            : props.items.map((show) => (
                <S.MovieItem key={show.id} to={`/shows/${show.id}`}>
                  <S.MovieImage src={show.image} />
                </S.MovieItem>
              ))}
        </Slider>
        <S.ArrowButton onClick={() => slider?.current?.slickNext()} next>
          <IoIosArrowForward />
        </S.ArrowButton>
      </S.SliderContainer>
    </>
  );
};

export default MySlider;
