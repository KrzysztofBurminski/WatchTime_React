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
  font-size: 2rem;
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

//
// Recommended
//
export const RecommendedSection = styled.section`
  width: 100%;
  margin-top: 5rem;
  padding: 4rem 5% 2rem;
  background-color: ${(props) => props.theme.colors.myPurpleDark};
`;

export const HeaderRecommended = styled.h2`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.onDark};
  font-size: 2rem;
  letter-spacing: 1px;
`;

export const ContainerRecommendedItems = styled.div`
  width: 100%;
  margin: 0;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const RecommendedImg = styled(Link)`
  width: 48%;
  aspect-ratio: 16/9;
  max-width: 35rem;
  margin: 1rem 1%;
  background: linear-gradient(
      to ${(p) => p.side},
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
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 1rem auto;
  }
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`;

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
  color: ${(props) => props.theme.colors.onDark};
  padding: 0;
  margin: 0 auto;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: 600;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
    letter-spacing: 0.8px;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.1rem;
    letter-spacing: 0.6px;
  }
`;
