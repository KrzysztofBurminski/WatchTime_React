import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSlider = styled.h3`
  font-size: 1.4rem;
  color: #ccc;
  margin: 0;
  margin-top: 2rem;
  margin-bottom: ${(p) => (p.clickable ? '1rem' : '0')};
  margin-left: 3.5rem;

  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const SliderContainer = styled.div`
  width: 97%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const ArrowButton = styled.button`
  padding: 1.5rem 0.1rem;
  margin-left: ${(p) => (p.next ? '0.5rem' : '0')};
  font-size: 2.5rem;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-out;

  @media screen and (max-width: 992px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.3rem;
  }

  &:hover {
    color: ${(p) => p.theme.colors.myPurple};
  }
`;

export const MovieItem = styled(Link)`
  height: 15rem;
  padding: 0 0.5rem;
  overflow: hidden;

  &:active {
    border: none;
  }

  @media screen and (max-width: 768px) {
    height: 12rem;
  }

  @media screen and (max-width: 576px) {
    height: 11rem;
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

// CUSTOM SLIDER

export const SliderItem = styled.div`
  height: ${(p) => (p.circle ? '10rem' : '25rem')};
  padding: 1rem 0.3rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: ${(p) => (p.circle ? '10rem' : '22rem')};
  }

  @media screen and (max-width: 576px) {
    height: ${(p) => (p.circle ? '10rem' : '18rem')};
  }
`;

export const Image = styled.img`
  height: ${(p) => (p.circle ? '12rem' : '85%')};
  width: ${(p) => (p.circle ? '10rem' : '14rem')};
  object-fit: cover;
  background-position: top center;
  transition: transform 0.3s ease-out;
  border-radius: ${(p) => (p.circle ? '0%' : '0')};

  &:hover {
    transform: scale(0.98);
  }

  @media screen and (max-width: 1024px) {
    width: ${(p) => (p.circle ? '10rem' : '14rem')};
  }

  @media screen and (max-width: 768px) {
    height: ${(p) => (p.circle ? '10rem' : '85%')};
    width: ${(p) => (p.circle ? '8rem' : '12rem')};
  }

  @media screen and (max-width: 576px) {
    height: ${(p) => (p.circle ? '10rem' : '85%')};
    width: ${(p) => (p.circle ? '8rem' : '10rem')};
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
  text-align: ${(p) => (p.circle ? 'center' : 'start')};

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
