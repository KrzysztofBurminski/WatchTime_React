import styled from 'styled-components';

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
// side cards section
//

export const WrapperAboutItem = styled.section`
  width: 100%;
  margin: 0;
  padding: 3rem 0;
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.5) 0% 20%,
    ${(p) => (p.right ? p.theme.colors.myPurpleDark : 'rgba(10,10,10, 0.50)')}
      20%
  );

  @media screen and (max-width: 768px) {
    background: ${(p) =>
      p.right ? p.theme.colors.myPurpleDark : 'transparent'};
  }
`;

export const Content = styled.div`
  width: 70%;
  height: 30rem;
  margin: 0;
  padding-right: ${(p) => (p.right ? '3rem' : 'auto')};
  padding-left: ${(p) => (p.right ? 'auto' : '3rem')};
  margin-left: ${(p) => (p.right ? 'auto' : '3rem')};
  margin-right: ${(p) => (p.right ? '3rem' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    width: 75%;
    height: 30rem;
    padding-right: ${(p) => (p.right ? '1rem' : 'auto')};
    padding-left: ${(p) => (p.right ? 'auto' : '1rem')};
    margin-left: ${(p) => (p.right ? 'auto' : '1rem')};
    margin-right: ${(p) => (p.right ? '1rem' : 'auto')};
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 25rem;
    padding: 0;
    margin: 0 auto;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    height: 30rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60%;

  & > p {
    font-size: 1.1rem;
    margin: 0;
    line-height: 1.8rem;
    letter-spacing: 0.5px;

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      margin: 0;
      line-height: 1.5rem;
      letter-spacing: 0.4px;
    }

    @media screen and (max-width: 768px) {
      line-height: 1.3rem;
      letter-spacing: 0.3px;
    }

    @media screen and (max-width: 576px) {
      font-size: 1rem;
      line-height: 1.3rem;
      letter-spacing: 0.2px;
    }
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 3.5rem;
  margin: 0;
  margin-bottom: 2rem;
  filter: drop-shadow(1px 2px 4px #1b1b1b);

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > * {
    color: #ccc;
    font-size: 15rem;
    filter: drop-shadow(2px 4px 8px #1b1b1b);
    transition: color 300ms ease-in-out;

    &:hover {
      color: #a471d3;
    }

    @media screen and (max-width: 1024px) {
      font-size: 12rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 10rem;
    }

    @media screen and (max-width: 576px) {
      display: ${(p) => (p.big ? 'none' : 'block')};
      font-size: 8rem;
    }
  }
`;

export const IconSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & > * {
    display: none;
    color: #ccc;
    font-size: 8rem;
    transition: color 300ms ease-in-out;

    &:hover {
      color: #a471d3;
    }

    @media screen and (max-width: 576px) {
      display: block;
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
  font-size: 4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 576px) {
    font-size: 3rem;
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

export const IconMedia = styled.a`
  text-align: center;
  & > * {
    color: #ccc;
    font-size: 3rem;
    transition: color 200ms ease-in-out;

    &:hover {
      color: #9457ce;
    }

    @media screen and (max-width: 576px) {
      font-size: 2rem;
    }
  }
`;
