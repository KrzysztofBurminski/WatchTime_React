import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchWrapper = styled.section`
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: calc(60px + 3rem);
`;

export const QueryHeader = styled.h2`
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 1.7rem;
  font-weight: 400;
  color: #eee;
`;

export const ShowsGrid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;

export const ShowItem = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #ccc;
  padding-bottom: 10px;
`;

export const ShowImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ShowTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 1.2rem;
  line-height: 1.2rem;

  @media screen and (max-width: 768px) {
    font-weight: normal;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
