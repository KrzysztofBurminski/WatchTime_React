import React from 'react';
import Slider from 'react-slick';

import * as S from './SliderElements';

const MySlider = (props) => {
  const settings = {
    dots: false,
    // infinite: false,
    infinite: props.infinite ? props.infinite : false,
    speed: 500,
    // swipeToSlide: true,
    // swipeToSlide: false,
    slidesToScroll: 3,
    variableWidth: true,
  };

  return (
    <>
      <S.HeaderSlider clickable={props.infinite}>{props.header}</S.HeaderSlider>{' '}
      <Slider {...settings}>
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
          : // ? props.items.map((item) => (
            //     <S.SliderItem key={item.id}>
            //       <S.Image src={item.actorImage} />
            //       <S.ItemTitle>{item.actorName}</S.ItemTitle>
            //       <S.ItemParagraph>{item.characterName}</S.ItemParagraph>
            //     </S.SliderItem>
            //   ))
            props.items.map((show) => (
              <S.MovieItem key={show.id} to={`/shows/${show.id}`}>
                <S.MovieImage src={show.image} />
              </S.MovieItem>
            ))}
      </Slider>
    </>
  );
};

export default MySlider;
