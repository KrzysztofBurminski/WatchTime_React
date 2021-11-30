import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const Section = styled.section`
  margin-top: 2rem;
  padding-top: 2rem;
  background-color: #181818;
`;

export const ContainerDropdown = styled.div`
  width: 6.5rem;
  margin: 0;
  margin-bottom: 1.5rem;
  margin-left: calc(2.5% + 0.8rem);
`;

export const DropdownSeason = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  background-color: #161616;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DropdownHeader = styled.h5`
  margin: 0;
  font-size: 0.8rem;
`;

export const IconDown = styled(FaChevronDown)`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
`;

export const DropdownList = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0 auto;
  width: 6.5rem;
  font-size: 0.8rem;
  background: #161616;
  color: #ccc;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  border-top: none;
  z-index: 1;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #333;
  }
`;

export const ContainerEpisodes = styled.div`
  width: 95%;
  max-width: 1500px;
  margin: 0 auto 3rem;
  border-radius: 3px;
  /* background-color: #181818; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(p) => p.direction};
`;

export const Episode = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 0 0.8rem;

  @media screen and (max-width: 1400px) {
    width: 33%;
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const EpisodeImg = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 60%;
  overflow: hidden;
`;

export const Image = styled.img`
  src: url(${(p) => p.src});
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.8rem;
`;

export const Number = styled.h4`
  font-size: 1.1rem;
  margin: 0;
  color: ${(p) => p.theme.colors.myPurple};
`;

export const Title = styled.h4`
  font-size: 1.1rem;
  margin: 0;
  margin-left: 0.8rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export const Premiered = styled.p`
  font-size: 0.8rem;
  margin: 0;
  margin-top: 0.5rem;
  color: #666;
`;
