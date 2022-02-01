import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const HeaderContainer = styled.div`
  width: 99%;
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: ${(p) => (p.clickable ? '1rem' : '0')};
`;

export const HeaderSlider = styled.p`
  font-size: 1.4rem;
  color: #ccc;
  margin: 0;
  padding-left: 2rem;

  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const SliderContainer = styled.div`
  width: 99%;
  max-width: 1600px;
  height: ${(p) =>
    p.standard ? '19rem' : p.small ? '12rem' : 'calc(25rem * 85/100)'};
  margin: 1rem auto;
  position: relative;

  @media screen and (max-width: 960px) {
    height: ${(p) =>
      p.standard ? '16rem' : p.small ? '12rem' : 'calc(25rem * 85/100)'};
  }

  @media screen and (max-width: 768px) {
    height: ${(p) =>
      p.standard ? '13rem' : p.small ? '10rem' : 'calc(22rem * 85/100)'};
  }

  @media screen and (max-width: 576px) {
    width: 97%;
    height: ${(p) =>
      p.standard ? '10rem' : p.small ? '10rem' : 'calc(18rem * 85/100)'};
  }
`;

export const ArrowButton = styled.button`
  display: ${(p) =>
    p.isSmall
      ? p.length > 9
        ? 'block'
        : 'none'
      : p.length > 6
      ? 'block'
      : 'none'};
  position: absolute;
  top: 0px;
  left: ${(p) => (p.next ? '' : '0px')};
  right: ${(p) => (p.next ? '0px' : '')};
  height: 100%;
  width: 40px;
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  cursor: pointer;
  transition: color, background-color 300ms ease-out;
  z-index: 10;

  &:hover {
    color: #ccc;
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media screen and (max-width: 1250px) {
    display: ${(p) =>
      p.isSmall
        ? p.length > 8
          ? 'block'
          : 'none'
        : p.length > 6
        ? 'block'
        : 'none'};
  }

  @media screen and (max-width: 1250px) {
    display: ${(p) =>
      p.isSmall
        ? p.length > 7
          ? 'block'
          : 'none'
        : p.length > 5
        ? 'block'
        : 'none'};
  }

  @media screen and (max-width: 1050px) {
    display: ${(p) =>
      p.isSmall
        ? p.length > 6
          ? 'block'
          : 'none'
        : p.length > 5
        ? 'block'
        : 'none'};
  }
  @media screen and (max-width: 960px) {
    display: ${(p) =>
      p.isSmall
        ? p.length > 6
          ? 'block'
          : 'none'
        : p.length > 4
        ? 'block'
        : 'none'};
  }

  @media screen and (max-width: 768px) {
    display: ${(p) =>
      p.isSmall
        ? p.length > 5
          ? 'block'
          : 'none'
        : p.length > 4
        ? 'block'
        : 'none'};
  }

  @media screen and (max-width: 640px) {
    display: ${(p) =>
      p.isSmall
        ? p.length > 5
          ? 'block'
          : 'none'
        : p.length > 3
        ? 'block'
        : 'none'};
  }

  @media screen and (max-width: 576px) {
    width: 25px;
    display: ${(p) =>
      p.isSmall
        ? p.length > 4
          ? 'block'
          : 'none'
        : p.length > 3
        ? 'block'
        : 'none'};
  }
`;

export const ArrowPrev = styled(IoIosArrowBack)`
  height: 40px;
  width: 40px;
  margin-left: -10px;

  @media screen and (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-left: -10px;
  }
`;

export const ArrowNext = styled(IoIosArrowForward)`
  height: 40px;
  width: 40px;
  margin-left: -5px;

  @media screen and (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-left: -5px;
  }
`;

export const MovieItem = styled(Link)`
  height: 19rem;
  padding: 0;
  padding-right: 0.5rem;
  overflow: hidden;
  z-index: 8;

  &:active {
    border: none;
  }

  @media screen and (max-width: 960px) {
    height: 16rem;
  }

  @media screen and (max-width: 768px) {
    height: 13rem;
  }

  @media screen and (max-width: 576px) {
    height: 10rem;
    padding: 0 0.2rem;
  }
`;

export const MovieImage = styled.img`
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

//
// PEOPLE SLIDER
//

export const SliderItem = styled.div`
  height: ${(p) => (p.small ? '10rem' : '25rem')};
  padding: 0 0.3rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: ${(p) => (p.small ? '10rem' : '22rem')};
  }

  @media screen and (max-width: 576px) {
    height: ${(p) => (p.small ? '10rem' : '18rem')};
  }
`;

export const Image = styled.img`
  height: ${(p) => (p.small ? '12rem' : '85%')};
  width: ${(p) => (p.small ? '10rem' : '14rem')};
  object-fit: cover;
  background-position: top center;
  transition: transform 0.3s ease-out;
  border-radius: ${(p) => (p.small ? '0%' : '0')};

  &:hover {
    transform: scale(0.98);
  }

  @media screen and (max-width: 1024px) {
    width: ${(p) => (p.small ? '10rem' : '14rem')};
  }

  @media screen and (max-width: 768px) {
    height: ${(p) => (p.small ? '10rem' : '85%')};
    width: ${(p) => (p.small ? '8rem' : '12rem')};
  }

  @media screen and (max-width: 576px) {
    height: ${(p) => (p.small ? '10rem' : '85%')};
    width: ${(p) => (p.small ? '8rem' : '10rem')};
  }
`;

export const ItemTitle = styled.h5`
  max-width: 10rem;
  padding: 0;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: ${(p) => (p.small ? 'center' : 'start')};

  @media screen and (max-width: 768px) {
    max-width: 8rem;
  }
`;

export const ItemParagraph = styled.p`
  max-width: 10rem;
  margin: 0;
  padding: 0;
  color: #777;
  font-size: 0.8rem;

  @media screen and (max-width: 768px) {
    max-width: 8rem;
  }
`;
