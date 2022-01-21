import styled from 'styled-components';

export const GallerySection = styled.section`
  width: 100%;
  margin: 0;
  background-color: #181818;
`;

export const ContainerGallery = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0;
`;

export const HeaderImages = styled.h5`
  margin: 0;
  padding: 4rem 0 1rem;
  font-size: 1.5rem;
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

// export const ItemImg = styled.img`
//   object-fit: cover;
// `;

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
