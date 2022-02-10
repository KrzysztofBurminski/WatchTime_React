import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 19rem;
  margin: 1rem auto;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 960px) {
    height: 16rem;
  }

  @media screen and (max-width: 768px) {
    height: 13rem;
  }

  @media screen and (max-width: 576px) {
    height: 9.5rem;
  }
`;

export const ArrowButton = styled.button`
  display: ${(p) => (p.length > 7 ? 'block' : 'none')};
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

  @media screen and (max-width: 1600px) {
    display: ${(p) => (p.length > 6 ? 'block' : 'none')};
  }
  @media screen and (max-width: 1350px) {
    display: ${(p) => (p.length > 5 ? 'block' : 'none')};
  }
  @media screen and (max-width: 1150px) {
    display: ${(p) => (p.length > 4 ? 'block' : 'none')};
  }
  @media screen and (max-width: 960px) {
    display: ${(p) => (p.length > 4 ? 'block' : 'none')};
  }
  @media screen and (max-width: 768px) {
    display: ${(p) => (p.length > 4 ? 'block' : 'none')};
  }
  @media screen and (max-width: 660px) {
    display: ${(p) => (p.length > 3 ? 'block' : 'none')};
  }
  @media screen and (max-width: 576px) {
    width: 25px;
    display: ${(p) => (p.length > 4 ? 'block' : 'none')};
  }
  @media screen and (max-width: 450px) {
    display: ${(p) => (p.length > 3 ? 'block' : 'none')};
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
    height: 9.5rem;
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
