import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heroImg from '../../assets/heroProfile.jpg';

export const Hero = styled.div`
  height: 25rem;
  width: 100%;
  z-index: 0;
  position: relative;

  @media screen and (max-width: 1200px) {
    height: 24rem;
  }

  @media screen and (max-width: 960px) {
    height: 22rem;
  }

  @media screen and (max-width: 768px) {
    height: 22rem;
  }

  @media screen and (max-width: 576px) {
    height: 30rem;
  }
`;

export const HeroImg = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 0;
  }
`;

export const PersonSection = styled.section`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  @media screen and (max-width: 960px) {
    top: 20px;
  }
`;

export const ProfilePicture = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: #886e9e;
  background-image: url(${(p) => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  border-radius: 50%;

  @media screen and (max-width: 960px) {
    height: 9rem;
    width: 9rem;
  }
`;

export const ProfileName = styled.h5`
  font-size: 1.5rem;
  margin: 0;
  padding-top: 0.2em;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    font-size: 1.4rem;
  }
`;

//
// STATS
//

export const Statistics = styled.div`
  position: absolute;
  top: calc(30px + 10rem + 0.2rem + 1.5rem + 2.5rem);
  left: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    top: calc(20px + 9rem + 0.2rem + 1.4rem + 2rem);
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const StatisticsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  margin: 0 0.5rem;
  padding: 0.8rem 0;
  background-color: #2a292b;
  border-radius: 10px;
  border: none;
  color: #ddd;

  @media screen and (max-width: 576px) {
    margin: 0.5rem 0;
  }
`;

export const StatisticsHeader = styled.h5`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

export const StatisticsContent = styled.p`
  margin: 0;
  padding-top: 0.2em;
  font-size: 2.3rem;
  font-weight: 900;
  color: #b65eff;
  color: #9a40e6;
`;

//
// FAVOURITE
//

export const FavouriteSection = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #7d7484;
  padding: ${(p) => (p.withSlider === true ? '2rem 2rem' : '2rem 1rem')};
  display: ${(p) => (p.withSlider === true ? 'block' : 'flex')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: ${(p) => (p.withSlider === true ? '2rem 3rem' : '2rem 1rem')};
  }
  @media screen and (max-width: 576px) {
    padding: ${(p) => (p.withSlider === true ? '2rem 4rem' : '2rem 1rem')};
  }
  @media screen and (max-width: 430px) {
    padding: ${(p) => (p.withSlider === true ? '2rem 1rem' : '2rem 1rem')};
  }
`;

export const FavHeader = styled.h3`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${(p) => (p.withSlider === true ? '0' : '2rem')};
  font-size: 2rem;
  color: #000;
`;

export const FavShow = styled(Link)`
  height: 19.5rem;
  padding: 0.5rem 0.8rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 16rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    height: 13rem;
  }
`;

export const FavShowImg = styled.img`
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

//
// ALL SHOWS
//

export const ShowsSection = styled.section`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem;
`;

export const ShowsHeader = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  margin-bottom: 3rem;
`;

export const ShowsGrid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 13px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 12px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;

export const ShowItem = styled(Link)`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(0.98);
  }
`;

export const ShowImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
