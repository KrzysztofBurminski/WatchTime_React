import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Section = styled.section`
  /* margin-top: 2rem; */
  padding: 2rem 0 4rem;
  background-color: #181818;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  animation: ${fadeIn} 700ms ease-in;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  /* margin-top: 2rem; */
  /* background-color: #181818; */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${(p) => p.flexDirection || 'row'};
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }
`;

export const PosterDiv = styled.aside`
  height: 100%;
  width: 100%;
  /* height: auto; */
  /* width: auto; */
  max-width: 18rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
  src: url(${(p) => p.src});
  object-fit: contain;
`;

export const MainInfo = styled.section`
  width: 70%;
  margin-left: 2rem;
`;

export const TextHeader = styled.h4`
  font-size: 1.2rem;
  margin: 0.5rem 0 0.7rem;
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.onDark};
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

export const ShowStats = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 0;
`;

export const StatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0.2rem 0;
`;

export const StatsLabel = styled.h5`
  width: 110px;
  font-size: 1rem;
  margin: 0;
  margin-right: 15px;
`;

export const Trailer = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
`;
