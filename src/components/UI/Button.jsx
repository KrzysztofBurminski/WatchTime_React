import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1.2rem;
  background-color: ${(props) => props.theme.colors.myPurple};
  border: 2px solid;
  border-radius: 3px;
  border-color: ${(props) => props.theme.colors.myPurple};
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.myPurpleHover};
    border-color: ${(props) => props.theme.colors.myPurpleHover};
    transform: scale(0.95);
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 0.5rem 1.1rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const ButtonLink = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 1.2rem;
  background-color: ${(props) => props.theme.colors.myPurple};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.myPurple};
  border-radius: 3px;
  color: #ccc;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.myPurpleHover};
    border-color: ${(props) => props.theme.colors.myPurpleHover};
    transform: scale(0.95);
  }
`;

export default Button;
