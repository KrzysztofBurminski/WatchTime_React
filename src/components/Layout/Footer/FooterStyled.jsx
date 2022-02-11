import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  margin: 0 auto;

  & > p {
    text-align: center;
    margin: 2rem auto;
    font-size: 1.1rem;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
`;
