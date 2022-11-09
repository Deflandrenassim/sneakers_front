import React, { useMemo, useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState();
  const value = useMemo(() => ({
    authUser, setAuthUser,
  }), [authUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
