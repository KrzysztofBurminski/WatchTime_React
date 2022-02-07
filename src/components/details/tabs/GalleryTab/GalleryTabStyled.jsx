import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const GallerySection = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: #181818;
`;

export const ContainerGallery = styled.div`
  width: 90%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0;
  animation: ${fadeIn} 700ms ease-in;
`;

export const HeaderImages = styled.h5`
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0 1rem;
  font-size: 1.6rem;
`;

export const PosterImagesGrid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BackgroundImagesGrid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  padding-bottom: 5rem;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
