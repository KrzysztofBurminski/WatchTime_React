import styled from 'styled-components';

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

/////////////// MAIN BODY

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-flow: row, nowrap;
  justify-content: center;
`;

export const PosterDiv = styled.aside`
  height: 100%;
  width: 100%;
  /* height: auto; */
  /* width: auto; */
  max-width: 18rem;
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
