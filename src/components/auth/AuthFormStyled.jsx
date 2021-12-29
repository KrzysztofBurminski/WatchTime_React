import styled from 'styled-components';

export const SectionAuth = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 60%;
  max-width: 50rem;
  margin: 7rem auto;
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

export const Form = styled.form``;
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
`;

export const AuthButton = styled.button`
  cursor: pointer;
  font: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #8525df;
  color: #fff;
  /* border: none; */
  border: 2px solid #d0a7f7;
  border-radius: 4px;
  padding: 0.4rem 2.2rem;
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
