import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSlider = styled.h3`
  font-size: 1.4rem;
  color: #ccc;
  margin-top: 2rem;

  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
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
    transform: scale(0.95);
    cursor: pointer;
  }
`;

// CUSTOM SLIDER

export const SliderItem = styled.div`
  height: ${(p) => (p.circle ? '10rem' : '25rem')};
  padding: 0 0.3rem;
  display: flex;
  flex-direction: column;

  &:active {
    border: none;
  }

  @media screen and (max-width: 768px) {
    height: ${(p) => (p.circle ? '10rem' : '22rem')};
  }

  @media screen and (max-width: 576px) {
    height: ${(p) => (p.circle ? '10rem' : '18rem')};
  }
`;

export const Image = styled.img`
  height: ${(p) => (p.circle ? '10rem' : '75%')};
  width: ${(p) => (p.circle ? '10rem' : '14rem')};

  object-fit: cover;
  background-position: top;
  transition: transform 0.3s ease-out;
  border-radius: ${(p) => (p.circle ? '50%' : '0')};

  &:hover {
    transform: scale(0.95);
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: ${(p) => (p.circle ? '10rem' : '13rem')};
  }

  @media screen and (max-width: 768px) {
    height: ${(p) => (p.circle ? '8rem' : '75%')};
    width: ${(p) => (p.circle ? '8rem' : '11rem')};
  }

  @media screen and (max-width: 576px) {
    height: ${(p) => (p.circle ? '8rem' : '75%')};
    width: ${(p) => (p.circle ? '8rem' : '9rem')};
  }
`;

export const ItemTitle = styled.h5`
  max-width: 10rem;
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

// export const MovieItem = styled.div`
//   height: 15rem;
//   padding: 0 0.5rem;
//   overflow: hidden;

//   &:active {
//     border: none;
//   }

//   @media screen and (max-width: 768px) {
//     height: 12rem;
//   }

//   @media screen and (max-width: 576px) {
//     height: 8rem;
//   }
// `;

// export const MovieImage = styled.img`
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s ease-out;

//   &:hover {
//     transform: scale(0.95);
//     cursor: pointer;
//   }
// `;
