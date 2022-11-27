import { useState } from 'react';
import AuthContext from './AuthContext';

export default function useToken() {
  const [authUser, setAuthUser] = useState(AuthContext);
  const enregisterToken = (key, value) => {
    setAuthUser(localStorage.setItem(key, value));
  };
  return { authUser, enregisterToken, setAuthUser };
}
