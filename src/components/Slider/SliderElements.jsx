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
    height: 8rem;
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
