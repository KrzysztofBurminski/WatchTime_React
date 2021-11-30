import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  border: 2px solid;
  background: ${(props) =>
    props.outlined ? 'transparent' : props.theme.colors.myPurple};
  border-color: ${(props) =>
    props.outlined ? 'white' : props.theme.colors.myPurple};
  color: ${(props) => (props.outlined ? props.theme.colors.myPurple : 'white')};
  font-size: 1.3rem;
  margin-top: 2rem;
  padding: 0.5rem 1.2rem;
  /* border-radius: 30px; */
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.outlined
        ? props.theme.colors.myPurple
        : props.theme.colors.myPurpleHover};
    border-color: ${(props) =>
      props.outlined
        ? 'white'
        : // ? props.theme.colors.myPurple
          props.theme.colors.myPurpleHover};
    color: #fff;
    transform: scale(0.95);
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.1rem;
    padding: 0.35rem 0.9rem;
  }
`;

export const ButtonLink = styled(Link)`
  border: 2px solid;
  background: ${(props) =>
    props.outlined ? 'transparent' : props.theme.colors.myPurple};
  border-color: ${(props) =>
    props.outlined ? 'white' : props.theme.colors.myPurple};
  color: ${(props) => (props.outlined ? props.theme.colors.myPurple : 'white')};
  font-size: 1.1rem;
  text-decoration: none;
  margin-top: 2rem;
  padding: 0.5rem 1.2rem;
  border-radius: 3px;
  /* border-radius: 30px; */
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.outlined
        ? props.theme.colors.myPurple
        : props.theme.colors.myPurpleHover};
    border-color: ${(props) =>
      props.outlined
        ? 'white'
        : // ? props.theme.colors.myPurple
          props.theme.colors.myPurpleHover};
    color: #fff;
    transform: scale(0.95);
  }
`;

export default Button;
