import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

//
// Trailers
//
export const HeaderTrailers = styled.h3`
  width: 100%;
  background-color: #999;
  margin: 0;
  margin-top: 5rem;
  padding-top: 2rem;
  text-align: center;
  font-size: 1.6rem;
  color: #0a0a0a;
`;

export const ContainerTrailers = styled.div`
  width: 100%;
  margin: 0 auto 4rem;
  padding: 2rem 2rem 4rem;
  background-color: #999;
  display: flex;
  flex-flow: row, nowrap;
  justify-content: space-between;
  border: none;

  @media screen and (max-width: 576px) {
    padding: 0;
    flex-direction: column;
  }
`;

export const TrailerDiv = styled.div`
  width: 33%;
  border: none;
  margin: 0 1rem;

  @media screen and (max-width: 992px) {
    width: 48%;
    margin: 0;
    :last-child {
      display: none;
    }
  }

  @media screen and (max-width: 576px) {
    margin: 1rem auto;
    height: auto;
    width: 90%;
  }
`;

export const Trailer = styled.iframe`
  border: none;
  width: 100%;
  aspect-ratio: 16/9;
`;

// Recommended
export const HeaderRecommended = styled.h2`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 4rem;
  margin: 0;
  margin-top: 5rem;
  text-align: center;
  font-size: 1.6rem;
  /* color: #0a0a0a; */
  color: ${(props) => props.theme.colors.onDark};
  /* background-color: #999; */
  background-color: ${(props) => props.theme.colors.myPurpleDark};

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

export const ContainerRecommended = styled.div`
  width: 100%;
  margin: 0 auto 3rem;
  padding: 0 5% 4rem;
  background-color: ${(props) => props.theme.colors.myPurpleDark};
  /* background-color: #999; */
  display: flex;
  flex-flow: row, nowrap;
  justify-content: space-around;

  @media screen and (max-width: 992px) {
    padding: 0 1rem 4rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 5% 3rem;
  }
`;

export const RecommendedImg = styled(Link)`
  height: 16rem;
  width: 45%;
  max-width: 35rem;
  background: linear-gradient(
      to ${({ side }) => side},
      transparent 30%,
      rgba(0, 0, 0, 0.5) 45% 55%,
      #000 65%
    ),
    url(${({ src }) => src});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.99);
  }

  @media screen and (max-width: 992px) {
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    height: 13rem;
    width: 80%;
    margin: 1rem auto;
  }
`;
// export const RecommendedImg = styled.div`
//   height: 16rem;
//   width: 45%;
//   max-width: 35rem;
//   background: linear-gradient(
//       to ${({ side }) => side},
//       transparent 30%,
//       rgba(0, 0, 0, 0.5) 45% 55%,
//       #000 65%
//     ),
//     url(${({ src }) => src});
//   background-position: top;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
//   transition: transform 0.2s ease-out;

//   &:hover {
//     transform: scale(1.05);
//   }

//   @media screen and (max-width: 992px) {
//     width: 48%;
//   }

//   @media screen and (max-width: 768px) {
//     height: 13rem;
//     width: 80%;
//     margin: 1rem auto;
//   }
// `;

export const RecommendedTextContainer = styled.div`
  position: absolute;
  top: 0;
  ${({ side }) => side}: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 35%;
`;

export const RecommendedText = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.onDark};
  padding: 0;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 1rem;
  }
`;
