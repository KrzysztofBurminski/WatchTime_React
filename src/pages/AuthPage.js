import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';

const AuthPage = ({ userId }) => {
  const history = useHistory();

  useEffect(() => {
    if (userId !== null) {
      history.replace('/profile');
    }
  }, [userId]);
  return <AuthForm />;
};

export default AuthPage;
