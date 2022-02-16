import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutHeroImg = styled.div`
  padding-top: 80px;
  height: calc(100vh - 80px);
  background: linear-gradient(
      to bottom,
      rgba(10, 10, 10, 0.5) 5%,
      rgba(10, 10, 10, 0.5) 90%
    ),
    url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const AboutTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 2rem;
  position: absolute;
  top: calc(50% - 80px);
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 960px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

export const WrapperGeneral = styled.div`
  width: 70%;
  text-align: center;
  margin: 0 auto;
  padding: 3rem 0;

  & > * {
    color: #ccc;
    font-size: 1.2rem;
    line-height: 1.8rem;

    &:first-child {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 576px) {
    width: 85%;
    & > * {
      font-size: 1rem;
      line-height: 1.4rem;
      letter-spacing: 0.2px;

      &:first-child {
        font-size: 1.2rem;
      }
    }
  }
`;

//
// MEDIA
//

export const MediaWrapper = styled.section`
  width: 70%;
  margin: 7rem auto 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 85%;
  }
`;

export const FollowText = styled.h3`
  margin: 0;
  font-size: 48px;
  margin-bottom: 2rem;

  @media screen and (max-width: 576px) {
    font-size: 36px;
  }
`;

export const RowMedia = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, auto);
  grid-gap: 20px;
`;

export const IconMedia = styled(motion.a)`
  text-align: center;
  & > * {
    color: #ccc;
    font-size: 36px;
    transition: color 200ms ease-in-out;

    &:hover {
      color: #9457ce;
    }

    @media screen and (max-width: 576px) {
      font-size: 26px;
    }
  }
`;
