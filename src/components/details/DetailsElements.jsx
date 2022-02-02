import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

export const HeroContainer = styled.div`
  height: 35rem;
  position: relative;

  @media screen and (max-width: 1200px) {
    height: 33rem;
  }

  @media screen and (max-width: 960px) {
    height: 30rem;
  }

  @media screen and (max-width: 768px) {
    height: 25rem;
  }

  @media screen and (max-width: 576px) {
    height: 23rem;
  }
`;

export const HeroImg = styled.div`
  width: 75%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  margin-left: auto;
  background-image: url(${({ src }) => src});
  background-position: center 10%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

export const HeroShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${(p) => p.theme.colors.bodyBg} 30%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0.1) 70%
  );
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    background: linear-gradient(
      0deg,
      ${(p) => p.theme.colors.bodyBg} 25%,
      rgba(0, 0, 0, 0.5) 45%,
      rgba(0, 0, 0, 0.1) 70%
    );
    align-items: flex-end;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: calc(4.6rem + 15px);
  right: 13px;
  border-radius: 50%;
  background-color: #8d37e7;
`;

export const FavIcon = styled(AiFillHeart)`
  font-size: 4rem;
  color: ${(p) => (p.fav === 'true' ? '#da0000' : '#ccc')};
  vertical-align: middle;
  padding: 0.7rem;
  cursor: pointer;
  transition: color 200ms ease-in-out;
  transition: padding 100ms ease-in-out;

  &:hover {
    color: #e82323;
  }

  &:active {
    padding: 0rem;
  }
`;

export const TextContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    display: block;
    width: 90%;
    margin: 4rem auto 0 auto;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  padding: 0 0.6rem;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row, nowrap;
  align-content: center;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: -1rem;
  }
`;

export const RowText = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  margin-right: 0.6rem;
`;

export const ProgressDiv = styled.div`
  margin: 0;
  width: 100%;
  height: 14px;
  background-color: #aaa;
  border-radius: 2px;
  margin-bottom: 2rem;

  @media screen and (max-width: 1024px) {
    margin: 0;
    margin-top: 2rem;
  }
`;

const slide = keyframes`
  from { width: 0%; }
  to { width: ${(p) => (p.percent ? `${p.percent}%` : '0%')}; }
  `;

export const ProgressBar = styled.div`
  width: ${(p) => (p.percent ? `${p.percent}%` : '0%')};
  height: 100%;
  background-color: #1e9406;
  border-radius: 2px;
  animation: ${slide} 1000ms ease-in-out;
`;

export const BlankSpace = styled.div`
  margin: 0;
  padding: 0;
  height: 2rem;
`;

export const TabsDiv = styled.div`
  width: 100%;
  background-color: #292929;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 1024px) {
    background-color: #181818;
  }
`;

export const TabList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    max-width: 800px;
    margin-top: -2rem;
  }
`;

export const TabItem = styled.li`
  padding: 2rem 1rem 0.4rem;
  margin: 0 0.4rem;
  margin-bottom: ${(p) => (p.active ? '14px' : '15px')};
  margin-top: ${(p) => (p.active ? '1px' : '0px')};
  border-bottom: ${(p) => (p.active ? '2px solid #ccc' : 'none')};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ccc;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: #eee;
  }

  @media screen and (max-width: 1024px) {
    width: 33.3%;
    padding: 1rem;
    margin: 0;
    background-color: ${(p) => (p.active ? '#181818' : 'transparent')};
    font-size: 1.1rem;
    font-weight: 400;
    color: ${(p) => (p.active ? '#ddd' : '#ccc')};
    border: none;
    border-right: 1px solid black;
  }
`;
