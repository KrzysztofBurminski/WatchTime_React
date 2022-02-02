import React, { useState, useEffect, useRef } from 'react';
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import useInput from '../../hooks/use-input';
import * as S from './AuthFormStyled';

const AuthForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const [avatarImage, setAvatarImage] = useState(
    `https://avatars.dicebear.com/api/avataaars/smil4e12ya2.svg`
  );
  // const [isLogging, setIsLogging] = useState(true);
  const [isLogging, setIsLogging] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogging(!isLogging);
  };

  const changeAvatarHandler = () => {
    setAvatarImage(
      `https://avatars.dicebear.com/api/avataaars/${Math.random()
        .toString(36)
        .substr(2, 5)}.svg`
    );
  };

  const {
    inputValue: enteredName,
    isTouched: nameIsTouched,
    isValid: nameIsValid,
    error: nameError,
    changeValue: nameChangeHandler,
    checkValidity: nameCheckHandler,
  } = useInput(
    (value) => /^(?!\s)[A-Za-z_][A-Za-z0-9_():'"#^.?,!\s]+$/.test(value),
    'Invalid username'
  );

  const {
    inputValue: enteredEmail,
    isTouched: emailIsTouched,
    isValid: emailIsValid,
    error: emailError,
    changeValue: emailChangeHandler,
    checkValidity: emailCheckHandler,
  } = useInput((value) => /^\S+@\S+\.\S+$/.test(value), 'Invalid email!');

  const {
    inputValue: enteredPassword,
    isTouched: passwordIsTouched,
    isValid: passwordIsValid,
    error: passwordError,
    changeValue: passwordChangeHandler,
    checkValidity: passwordCheckHandler,
  } = useInput();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (
        isLogging &&
        emailIsTouched &&
        emailIsValid &&
        passwordIsTouched &&
        passwordIsValid
      ) {
        setFormIsValid(true);
      } else if (
        !isLogging &&
        nameIsTouched &&
        nameIsValid &&
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
      const auth = getAuth();
      if (isLogging) {
        try {
          await setPersistence(auth, browserLocalPersistence);
          await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await setPersistence(auth, browserLocalPersistence);
          await createUserWithEmailAndPassword(
            auth,
            enteredEmail,
            enteredPassword
          );
          await updateProfile(auth.currentUser, {
            displayName: enteredName,
            photoURL: avatarImage,
          });
        } catch (err) {
          console.log(err);
        }
      }
      try {
        const user = auth.currentUser;
        if (user !== null) {
          const displayName = user.displayName;
          const uid = user.uid;
          const userImg = user.photoURL;
          dispatch(authActions.setCurrentUser({ displayName, uid, userImg }));
        }
      } catch (err) {
        console.log(err);
      }
      isLogging ? history.push('/profile') : history.push('/choosing');
    }
  };

  let inputError = null;
  if (passwordError) {
    inputError = `Password: ${passwordError}`;
  } else if (emailError) {
    inputError = `Email: ${emailError}`;
  } else if (nameError) {
    inputError = `Username: ${nameError}`;
  }

  return (
    <S.SectionAuth>
      <S.Background>
        <S.Header>{isLogging ? 'Log In' : 'Sign In'}</S.Header>
        {/* {inputError && (
          <S.Alert>
            <p>{inputError}</p>
          </S.Alert>
        )} */}
        <form onSubmit={submitFormHandler}>
          {!isLogging && (
            <div>
              <S.ProfilePic src={avatarImage} />
              <S.ReloadIcon onClick={changeAvatarHandler} />
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
            </div>
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
            {inputError && (
              <S.Alert>
                <p>{inputError}</p>
              </S.Alert>
            )}
            <S.AuthButton type="submit">
              {isLogging ? 'Log In' : 'Sign In'}
            </S.AuthButton>
            <S.Row>
              <S.Paragraph>
                {isLogging
                  ? 'Do not have account?'
                  : 'Already have an account ?'}
              </S.Paragraph>
              <S.Switch onClick={switchAuthModeHandler}>
                {isLogging ? 'Sign In' : 'Log In'}
              </S.Switch>
            </S.Row>
          </S.Actions>
        </form>
      </S.Background>
    </S.SectionAuth>
  );
};

export default AuthForm;
