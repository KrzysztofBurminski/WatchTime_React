import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heroImg from '../../assets/heroProfile.jpg';

export const Hero = styled.div`
  height: 24rem;
  width: 100%;
  z-index: 0;
  position: relative;

  @media screen and (max-width: 1200px) {
    height: 22rem;
  }

  @media screen and (max-width: 960px) {
    height: 20rem;
  }

  @media screen and (max-width: 768px) {
    height: 18rem;
  }

  @media screen and (max-width: 576px) {
    height: 14rem;
  }
`;

export const HeroImg = styled.div`
  height: 100%;
  width: 100%;
  /* background: url(${(p) => p.src}); */
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  /* background-position: 50% 5%; */
`;

export const Container = styled.div`
  background-color: #141314;
  padding-bottom: 35rem;
`;

export const PersonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -3rem;
  z-index: 10;
`;

export const ProfilePicture = styled.div`
  height: 6rem;
  width: 6rem;
  /* background-color: #fee9ff; */
  background-color: #886e9e;
  background-image: url(${(p) => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  border-radius: 50%;
`;

export const ProfileName = styled.h5`
  font-size: 1rem;
  margin: 0;
  padding-top: 0.4em;
  font-weight: 500;
`;

export const Statistics = styled.div`
  width: 100%;
  /* margin: 7rem auto 0 auto; */
  margin: 0 auto;
  padding: 7rem 0 4rem;
  /* padding: 7rem auto 0 auto; */
  /* padding-top: 7rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #7d7484; */
  background-color: #181818;

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
  padding: 5rem 3rem 3rem;
`;

export const ShowsHeader = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
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
