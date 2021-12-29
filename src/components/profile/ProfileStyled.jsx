import styled from 'styled-components';

export const Hero = styled.div`
  /* src: {(p) => p.src}; */
  /* src: '../../assets/netflix.jpg'; */
  /* background-color: #436813; */
  height: 20rem;
  width: 100%;
`;

export const HeroImg = styled.div`
  height: 100%;
  width: 100%;
  /* background: url(${(p) => p.src}); */
  background-image: url('https://static.tvmaze.com/uploads/images/original_untouched/219/547904.jpg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

export const Container = styled.div`
  background-color: #141314;
  padding-bottom: 25rem;
`;

export const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

export const WelcomeText = styled.h2``;

export const WelcomeTextSmall = styled.h4``;
