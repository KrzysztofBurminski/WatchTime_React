import styled from 'styled-components';

export const GallerySection = styled.section`
  width: 100%;
`;

export const GalleryContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 4px;
`;

export const GalleryItem = styled.ul;
export const Column = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;

  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const ItemImg = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  height: 100%;
  max-height: 25rem;
  max-width: 50%;
  /* object-fit: contain; */
  /* margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  max-height: 25rem; */
`;
