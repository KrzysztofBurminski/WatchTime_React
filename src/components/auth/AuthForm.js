import React, { useState, useEffect, useRef } from 'react';

import useAuth from '../../hooks/use-auth';
import useInput from '../../hooks/use-input';
import { registerUser, loginUser } from '../../lib/external-api';
import * as S from './AuthFormStyled';

const AuthForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogging, setIsLogging] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogging(!isLogging);
  };

  const {
    sendRequest: loginRequest,
    // error: loginError,
    // isLoading: loginIsLoading,
  } = useAuth(loginUser);

  const {
    sendRequest: registerRequest,
    // error: registerError,
    // isLoading: registerIsLoading,
  } = useAuth(registerUser);
  //   } = useAuth(registerUser, updateUser);

  const {
    inputValue: enteredName,
    isTouched: nameIsTouched,
    isValid: nameIsValid,
    // error: nameError,
    changeValue: nameChangeHandler,
    checkValidity: nameCheckHandler,
  } = useInput();

  const {
    inputValue: enteredEmail,
    isTouched: emailIsTouched,
    isValid: emailIsValid,
    // error: emailError,
    changeValue: emailChangeHandler,
    checkValidity: emailCheckHandler,
  } = useInput((value) => /^\S+@\S+\.\S+$/.test(value), 'Invalid email!');

  const {
    inputValue: enteredPassword,
    isTouched: passwordIsTouched,
    isValid: passwordIsValid,
    // error: passwordError,
    changeValue: passwordChangeHandler,
    checkValidity: passwordCheckHandler,
  } = useInput();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (
        emailIsTouched &&
        emailIsValid &&
        passwordIsTouched &&
        passwordIsValid
      ) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }

    return () => (mounted = false);
  }, [
    isLogging,
    nameIsTouched,
    nameIsValid,
    emailIsTouched,
    emailIsValid,
    passwordIsTouched,
    passwordIsValid,
  ]);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (formIsValid) {
      if (isLogging) {
        await loginRequest({
          email: enteredEmail,
          password: enteredPassword,
        });
      } else {
        await registerRequest({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
        });
      }
    }
  };

  return (
    <S.SectionAuth>
      <S.Background>
        <S.Header>{isLogging ? 'Log In' : 'Sign In'}</S.Header>
        <form onSubmit={submitFormHandler}>
          {!isLogging && (
            <S.Control>
              <S.Label htmlFor="username">Username</S.Label>
              <S.Input
                type="text"
                name="username"
                ref={nameInputRef}
                value={enteredName}
                onChange={() => nameChangeHandler(nameInputRef.current.value)}
                onBlur={nameCheckHandler}
              />
            </S.Control>
          )}
          <S.Control>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              type="email"
              name="email"
              ref={emailInputRef}
              onChange={() => emailChangeHandler(emailInputRef.current.value)}
              onBlur={emailCheckHandler}
            />
          </S.Control>
          <S.Control>
            <S.Label htmlFor="email">Password</S.Label>
            <S.Input
              type="password"
              name="password"
              ref={passwordInputRef}
              onChange={() =>
                passwordChangeHandler(passwordInputRef.current.value)
              }
              onBlur={passwordCheckHandler}
            />
          </S.Control>
          <S.Actions>
            <S.AuthButton type="submit">Login</S.AuthButton>
            <S.Row>
              <S.Paragraph>Do not have account?</S.Paragraph>
              <S.Switch onClick={switchAuthModeHandler}>Sign In</S.Switch>
            </S.Row>
          </S.Actions>
        </form>
      </S.Background>
    </S.SectionAuth>
  );
};

export default AuthForm;
