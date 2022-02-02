import styled from 'styled-components';
import { FiRefreshCw } from 'react-icons/fi';

export const SectionAuth = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 50%;
  max-width: 600px;
  margin: 2rem auto;
  margin-bottom: 4rem;
  padding: 1rem;
  text-align: center;
  background-color: ${(p) => p.theme.colors.myPurple};
  /* background-color: ${(p) => p.theme.colors.myPurpleDark}; */
  color: #fff;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding-top: 7rem;
  }
`;

export const Header = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  margin-bottom: 1.5rem;
  margin-top: 0.7rem;
`;

export const ProfilePic = styled.div`
  height: 8rem;
  width: 8rem;
  margin: 0 auto;
  /* background-color: #fee9ff; */
  background-color: #886e9e;
  background-image: url(${(p) => p.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;
  border-radius: 50%;
`;

export const ReloadIcon = styled(FiRefreshCw)`
  margin: 0 auto;
  padding: 0.3rem;
  color: #fff;
  font-size: 1.7rem;
  margin-top: -1.5rem;
  background-color: #886e9e;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #ae99bf;
  }
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6rem 2rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.3rem 0;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  /* color: #392a46; */
  color: ${(p) => p.theme.colors.myPurpleDark};
  border: 1px solid rgb(88, 46, 7);
  padding: 5px;
  border-radius: 3px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 2rem;
  margin: 0;
`;

export const Alert = styled.div`
  padding: 0.6rem 1.8rem;
  margin: 1rem auto 0rem;
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid #333;
  border-radius: 4px;

  & > * {
    padding: 0;
    margin: 0;
    color: #9d0000;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const AuthButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.4rem 2.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #8525df;
  border: 2px solid #d0a7f7;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #430380;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.2rem;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  padding: 0;
  margin: 0;
`;

export const Switch = styled.p`
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  padding: 0.6rem;
  cursor: pointer;
  transition: color 0.2s ease-out;

  &:hover {
    color: #aaa;
  }
`;

// .actions .toggle {
//   margin-top: 0.5rem;
//   font-weight: normal;
//   font-size: 1.2rem;
//   border: none;
//   background-color: transparent;
//   padding: 0.2rem 1rem;
//   color: rgb(240, 213, 187);
// }

// .actions button:hover {
//   background-color: rgb(212, 112, 17);
// }

// .actions .toggle:hover {
//   background-color: transparent;
//   color: white;
// }

// .actions .disabled,
// .actions .disabled:hover,
// .actions .disabled:active {
//   cursor: not-allowed;
//   background-color: #4b4b4b;
//   border-color: #4b4b4b;
//   color: #ccc;
// }
