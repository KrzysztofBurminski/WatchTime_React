import styled from 'styled-components';
// import { BsCheckCircle } from 'react-icons/bs';

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.bgColor};
  padding: 16px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* justify-content: space-around; */
`;

export const ColText = styled.div`
  width: 35%;
  margin: 5rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const ColShows = styled.div`
  width: 65%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  height: 15rem;
  width: 10.5rem;
  margin: 0.2rem;
  cursor: pointer;
`;

export const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(p) => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Hoverable = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
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
