import styled from 'styled-components';

export const HeroImg = styled.div`
  height: 35rem;
  /* background-image: url({({ src }) => src}); */
  background: linear-gradient(
      to bottom,
      rgba(10, 10, 10, 0.5) 15%,
      ${(p) => p.theme.colors.bodyBg} 90%
    ),
    url(${({ src }) => src});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 960px) {
    /* height: calc(80vh - 80px); */
    height: 30rem;
  }

  @media screen and (max-width: 768px) {
    height: calc(95vh - 80px);
  }

  @media screen and (max-width: 576px) {
    height: calc(100vh - 80px);
  }
`;

export const HeroShadow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
`;

export const HeroText = styled.div`
  text-align: center;
  color: #fff;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 2rem;

  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const HeroRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const HeroGenresList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const HeroGenreItem = styled.li`
  color: #ccc;
  padding: 0 0.3rem;
  font-size: 0.7rem;
  font-weight: 100;
`;

export const HeroRatingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: #ccc;
`;

export const HeroRatingText = styled.span`
  margin: 0;
  margin-left: 0.5rem;
  padding: 0.35rem;
  font-size: 0.7rem;
  border: 2px solid #ccc;
  border-radius: 50%;
`;

export const HeroDesc = styled.div`
  color: #ccc;
  margin: 0;
  padding: 0;
  font-weight: 100;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;
