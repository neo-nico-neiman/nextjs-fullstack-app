import { createContext, ReactNode, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  logIn: () => void;
  logOut: () => void;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  logIn: () => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );

  const logIn = () => setAuthenticated(true);
  const logOut = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
