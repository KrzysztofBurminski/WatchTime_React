import styled from 'styled-components';

export const Hero = styled.div`
  height: 15rem;
  width: 100%;
  z-index: 0;
  position: relative;
`;

export const HeroImg = styled.div`
  height: 100%;
  width: 100%;
  background: url(${(p) => p.src});
  /* background-image: url('https://static.tvmaze.com/uploads/images/original_untouched/219/547904.jpg'); */
  background-repeat: no-repeat;
  background-position: 50% 5%;
  /* background-attachment: fixed; */
  background-size: cover;
`;

export const Container = styled.div`
  background-color: #141314;
  padding-bottom: 35rem;
`;

export const PersonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -3rem;
  z-index: 10;
`;

export const ProfilePicture = styled.div`
  height: 6rem;
  width: 6rem;
  /* background-color: #fee9ff; */
  background-color: #886e9e;
  background-image: url(${(p) => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  border-radius: 50%;
`;

export const ProfileName = styled.h5`
  font-size: 1rem;
  margin: 0;
  padding-top: 0.4em;
  font-weight: 500;
`;

export const ShowsSection = styled.section`
  width: 100%;
  padding-top: 2rem;
  margin: 5rem auto 10rem;
  /* margin-top: 5rem; */
  /* background-color: #141314; */
  background-color: ${(p) => p.theme.colors.bodyBg};
`;
