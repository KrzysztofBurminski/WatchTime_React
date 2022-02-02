import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.bgColor};
  width: 97%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  width: 35%;
  padding: 0;
  margin: 0 2rem 0 1rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Fixed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;

export const ColText = styled.div`
  width: 35%;
  height: 100%;
  margin: 0;
  padding-right: 1.5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    margin: 3rem auto 4rem;
  }

  @media screen and (min-width: 1800px) {
    width: 30%;
    padding-right: 5%;
  }
`;

export const Welcome = styled.h2`
  font-size: 2.1rem;
  font-style: italic;
  margin: 0;
  margin-bottom: 2rem;

  @media screen and (max-width: 967px) {
    font-size: 1.9rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

export const Name = styled.span`
  font-size: 2.2rem;
  color: ${(p) => p.theme.colors.myPurple};

  @media screen and (max-width: 967px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const InfoBig = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 1.3rem;

  @media screen and (max-width: 967px) {
    font-size: 1.1rem;
  }
`;

export const InfoSmall = styled.p`
  font-size: 1rem;
  margin: 0;

  @media screen and (max-width: 967px) {
    font-size: 0.9rem;
  }
`;

//
// SHOWS
//

export const ColShows = styled.div`
  width: 65%;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export const ShowsGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
  }

  @media screen and (max-width: 967px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Hoverable = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: background-color 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.picked ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};

  & > * {
    color: ${(p) => (p.picked ? 'green' : 'transparent')};
    font-size: 3rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover > * {
    color: #fff;
  }
`;
