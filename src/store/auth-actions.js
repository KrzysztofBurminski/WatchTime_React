import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { authActions } from './auth-slice';

export const getCurrentUser = () => {
  return (dispatch) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        const uid = user.uid;
        dispatch(authActions.setCurrentUser({ displayName, uid }));
      }
    });
  };
};
